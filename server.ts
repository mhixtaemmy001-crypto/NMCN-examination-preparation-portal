import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json' with { type: 'json' };
import { lookupCandidateRoster } from './src/data/candidateRoster.ts';

// Initialize Firebase client on server
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory fallback and rate limiter cache
interface OtpRecord {
  verificationId: string;
  email: string;
  hashedOtp: string;
  salt: string;
  attempts: number;
  maxAttempts: number;
  expiresAt: number;
  createdAt: number;
  verified: boolean;
  name: string;
  idNumber?: string;
  deviceId?: string;
}

const localOtpStore = new Map<string, OtpRecord>();
const emailCooldownStore = new Map<string, number>(); // email -> lastSentTimestamp
const ipRateLimitStore = new Map<string, number[]>(); // ip -> request timestamps

// Helper to mask email for safe client presentation
function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  if (!user || !domain) return email;
  if (user.length <= 2) return `${user[0]}*@${domain}`;
  return `${user.slice(0, 2)}${'*'.repeat(Math.max(1, user.length - 4))}${user.slice(-2)}@${domain}`;
}

// Mailer configuration helper
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }
  return null;
}

async function sendOtpEmail(toEmail: string, candidateName: string, otpCode: string): Promise<{ sent: boolean; reason?: string }> {
  const transporter = getTransporter();
  const fromAddress = process.env.EMAIL_FROM || '"NMCN Examination Preparation Portal" <exam-portal@ascons.edu.ng>';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: #064e3b; padding: 28px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 19px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #a7f3d0; }
          .body { padding: 32px 24px; }
          .greeting { font-size: 15px; margin-bottom: 16px; font-weight: 600; }
          .code-box { background: #f0fdf4; border: 2px dashed #10b981; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0; }
          .otp-code { font-family: 'Courier New', monospace; font-size: 38px; font-weight: 800; letter-spacing: 8px; color: #047857; margin: 0; }
          .expiry { font-size: 12px; color: #065f46; margin-top: 8px; font-weight: 600; }
          .note { font-size: 13px; line-height: 1.6; color: #64748b; margin-top: 20px; }
          .footer { background: #f8fafc; border-top: 1px solid #f1f5f9; padding: 18px 24px; text-align: center; font-size: 11px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Adamawa State College of Nursing Sciences, Yola</h1>
            <p>Nursing & Midwifery Council of Nigeria (NMCN) Examination Portal</p>
          </div>
          <div class="body">
            <div class="greeting">Hello ${candidateName || 'Candidate'},</div>
            <p style="font-size: 14px; line-height: 1.5; color: #334155;">
              Use the following one-time verification code to complete your registration on the NMCN Examination Preparation Portal:
            </p>
            <div class="code-box">
              <div class="otp-code">${otpCode}</div>
              <div class="expiry">⚠️ Valid for 5 minutes only</div>
            </div>
            <p class="note">
              Do not disclose this verification code to anyone. College proctors and NMCN staff will never ask for your verification code.
              If you did not initiate this registration request, please disregard this email.
            </p>
          </div>
          <div class="footer">
            powered by smach tech · Adamawa State College of Nursing Sciences, Yola
          </div>
        </div>
      </body>
    </html>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: fromAddress,
        to: toEmail,
        subject: `Your NMCN Examination Portal Verification Code: ${otpCode}`,
        text: `Hello ${candidateName},\n\nYour one-time verification code for the NMCN Examination Preparation Portal is: ${otpCode}\n\nThis code expires in 5 minutes.\n\nAdamawa State College of Nursing Sciences, Yola\npowered by smach tech`,
        html: htmlContent,
      });
      console.log(`[MAIL] Successfully sent real OTP email via SMTP to ${toEmail}`);
      return { sent: true };
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error(`[MAIL ERROR] Failed to send email via SMTP to ${toEmail}:`, errMsg);
      return { sent: false, reason: errMsg };
    }
  }

  // Check if Resend API key is provided
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [toEmail],
          subject: `Your NMCN Examination Portal Verification Code: ${otpCode}`,
          html: htmlContent,
        }),
      });
      if (res.ok) {
        console.log(`[MAIL] Successfully sent real OTP email via Resend to ${toEmail}`);
        return { sent: true };
      }
      const data = await res.json().catch(() => ({}));
      console.error('[MAIL ERROR] Resend API error:', data);
      return { sent: false, reason: JSON.stringify(data) };
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error('[MAIL ERROR] Resend fetch failed:', errMsg);
      return { sent: false, reason: errMsg };
    }
  }

  console.warn(
    `[MAIL CONFIG REQUIRED] No SMTP or Resend credentials configured. To send actual emails to ${toEmail}, configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env.`
  );
  return {
    sent: false,
    reason: 'SMTP/Transactional email credentials not yet configured on server. Please configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env',
  };
}

// ----------------------------------------------------------------------
// BACKEND API ROUTES
// ----------------------------------------------------------------------

interface RegisteredCandidateRecord {
  uid: string;
  name: string;
  email: string;
  idNumber?: string;
  isVerified: boolean;
  boundDeviceId: string;
  lastDeviceRegisteredAt: number;
  createdAt: string;
}

const registeredUsersStore = new Map<string, RegisteredCandidateRecord>(); // normalized email -> record

// Rate limiting middleware helper
function checkIpRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000; // 5 minutes
  const maxRequests = 25;

  const timestamps = (ipRateLimitStore.get(ip) || []).filter((t) => now - t < windowMs);
  if (timestamps.length >= maxRequests) {
    return false;
  }
  timestamps.push(now);
  ipRateLimitStore.set(ip, timestamps);
  return true;
}

/**
 * POST /api/auth/send-otp
 * Generates random 6-digit OTP, hashes it with salt, stores in Firestore,
 * and sends email to candidate's registered address.
 * Uses only candidate name (or email).
 */
app.post('/api/auth/send-otp', async (req: Request, res: Response) => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
    if (!checkIpRateLimit(clientIp)) {
      res.status(429).json({ error: 'Too many requests from this network. Please wait a few minutes.' });
      return;
    }

    const { name, email, deviceId } = req.body;
    
    // Check against accredited BN 55 roster by Name (or email)
    const candidate =
      (name ? lookupCandidateRoster(String(name).trim()) : undefined) ||
      (email ? lookupCandidateRoster(String(email).trim()) : undefined);

    if (!candidate) {
      res.status(403).json({
        error: 'Access restricted: Your name was not found on the accredited BN 55 candidate roster. Please verify spelling (e.g. "Nelson Emmanuel Chams") or contact college administration.',
      });
      return;
    }

    const normalizedEmail = candidate.email.toLowerCase();
    const candidateDisplayName = candidate.name;
    const candidateIdNumber = candidate.idNumber;

    // Enforce 60-second cooldown between resend requests for the same email
    const now = Date.now();
    const lastSent = emailCooldownStore.get(normalizedEmail);
    if (lastSent && now - lastSent < 60000) {
      const waitSec = Math.ceil((60000 - (now - lastSent)) / 1000);
      res.status(429).json({ error: `Please wait ${waitSec} seconds before requesting another code.` });
      return;
    }

    // 1. Generate secure random 6-digit OTP
    const rawOtp = crypto.randomInt(100000, 1000000).toString();
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedOtp = crypto.createHash('sha256').update(rawOtp + salt).digest('hex');
    const verificationId = `v_${crypto.randomBytes(12).toString('hex')}`;
    const expiresAt = now + 5 * 60 * 1000; // 5 minutes expiry

    const record: OtpRecord = {
      verificationId,
      email: normalizedEmail,
      hashedOtp,
      salt,
      attempts: 0,
      maxAttempts: 5,
      expiresAt,
      createdAt: now,
      verified: false,
      name: candidateDisplayName,
      idNumber: candidateIdNumber,
      deviceId: deviceId || '',
    };

    // Store in memory cache
    localOtpStore.set(verificationId, record);
    emailCooldownStore.set(normalizedEmail, now);

    // Persist hashed record to Firestore
    try {
      const verificationRef = doc(db, 'otp_verifications', verificationId);
      await setDoc(verificationRef, {
        verificationId,
        email: normalizedEmail,
        hashedOtp,
        salt,
        attempts: 0,
        maxAttempts: 5,
        expiresAt,
        createdAt: now,
        verified: false,
        deviceId: deviceId || '',
      });
    } catch (fsErr) {
      console.warn('[FIRESTORE] Warning saving OTP verification record:', fsErr);
    }

    // 2. Dispatch real email to candidate
    const mailResult = await sendOtpEmail(normalizedEmail, record.name, rawOtp);

    // Clean response: NEVER return raw OTP to client!
    res.json({
      success: true,
      verificationId,
      emailMasked: maskEmail(normalizedEmail),
      email: normalizedEmail,
      candidateName: candidateDisplayName,
      expiresAt,
      cooldownSeconds: 60,
      emailSent: mailResult.sent,
      deliveryStatus: mailResult.sent ? 'sent' : 'pending_configuration',
      message: mailResult.sent
        ? `Verification code dispatched to ${maskEmail(normalizedEmail)}.`
        : `Verification code generated for ${candidateDisplayName}. Email service status: ${mailResult.reason || 'Check server configuration.'}`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to send verification code';
    console.error('Error in /api/auth/send-otp:', err);
    res.status(500).json({ error: message });
  }
});

/**
 * POST /api/auth/verify-otp
 * Verifies 6-digit OTP against cryptographic hash, checks expiration & attempts,
 * invalidates record, binds candidate account to this specific device,
 * and updates Firestore and server records.
 */
app.post('/api/auth/verify-otp', async (req: Request, res: Response) => {
  try {
    const { verificationId, code, name, deviceId } = req.body;

    if (!verificationId || !code) {
      res.status(400).json({ error: 'Verification ID and 6-digit code are required.' });
      return;
    }

    const cleanCode = String(code).trim().replace(/\D/g, '');
    if (cleanCode.length !== 6) {
      res.status(400).json({ error: 'Please enter a valid 6-digit numeric verification code.' });
      return;
    }

    // Retrieve verification record from local store or Firestore
    let record: OtpRecord | undefined = localOtpStore.get(verificationId);

    if (!record) {
      try {
        const snap = await getDoc(doc(db, 'otp_verifications', verificationId));
        if (snap.exists()) {
          record = snap.data() as OtpRecord;
        }
      } catch (fsErr) {
        console.warn('[FIRESTORE] Warning reading OTP record:', fsErr);
      }
    }

    if (!record) {
      res.status(400).json({ error: 'Verification session not found or expired. Please request a new code.' });
      return;
    }

    if (record.verified) {
      res.status(400).json({ error: 'This verification code has already been used. Please log in.' });
      return;
    }

    const now = Date.now();
    if (now > record.expiresAt) {
      res.status(400).json({ error: 'Verification code has expired (valid for 5 minutes). Please click Resend.' });
      return;
    }

    if (record.attempts >= record.maxAttempts) {
      res.status(429).json({ error: 'Too many incorrect attempts. For security, please request a new verification code.' });
      return;
    }

    // Verify hash using constant-time comparison
    const computedHash = crypto.createHash('sha256').update(cleanCode + record.salt).digest('hex');
    const isMatch = crypto.timingSafeEqual(Buffer.from(computedHash), Buffer.from(record.hashedOtp));

    if (!isMatch) {
      record.attempts += 1;
      localOtpStore.set(verificationId, record);

      try {
        await updateDoc(doc(db, 'otp_verifications', verificationId), {
          attempts: record.attempts,
        });
      } catch {
        // ignore
      }

      const remainingAttempts = record.maxAttempts - record.attempts;
      if (remainingAttempts <= 0) {
        res.status(429).json({ error: 'Maximum verification attempts reached. Please request a new code.' });
        return;
      }

      res.status(400).json({
        error: `Incorrect verification code. ${remainingAttempts} ${remainingAttempts === 1 ? 'attempt' : 'attempts'} remaining.`,
        remainingAttempts,
      });
      return;
    }

    // OTP is valid! Mark as verified and invalidate
    record.verified = true;
    localOtpStore.set(verificationId, record);

    const boundDeviceId = String(deviceId || record.deviceId || `dev_bound_${Date.now()}`).trim();
    const candidateUid = `cand_${crypto.createHash('md5').update(record.email).digest('hex').slice(0, 16)}`;
    const verifiedCandidate: RegisteredCandidateRecord = {
      uid: candidateUid,
      name: (name?.trim() || record.name || 'Candidate').trim(),
      email: record.email,
      idNumber: record.idNumber || '',
      isVerified: true,
      boundDeviceId,
      lastDeviceRegisteredAt: now,
      createdAt: new Date().toISOString(),
    };

    // Store in memory
    registeredUsersStore.set(record.email, verifiedCandidate);

    // Update Firestore records
    try {
      await updateDoc(doc(db, 'otp_verifications', verificationId), {
        verified: true,
        invalidatedAt: now,
        boundDeviceId,
      });

      await setDoc(doc(db, 'users', candidateUid), {
        ...verifiedCandidate,
        verifiedAt: now,
      });
    } catch (fsErr) {
      console.warn('[FIRESTORE] Warning finalizing verified user record:', fsErr);
    }

    // Invalidate cooldown so candidate isn't blocked on future actions
    emailCooldownStore.delete(record.email);

    res.json({
      success: true,
      verified: true,
      user: {
        uid: candidateUid,
        name: verifiedCandidate.name,
        email: verifiedCandidate.email,
        deviceId: boundDeviceId,
        isVerified: true,
      },
      message: 'Registration complete! Your device has been bound and verified.',
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to verify code';
    console.error('Error in /api/auth/verify-otp:', err);
    res.status(500).json({ error: message });
  }
});

/**
 * POST /api/auth/login
 * Validates candidate name, checks against accredited roster,
 * and enforces strict device binding: if the candidate accesses from a new device,
 * login is denied and requires new registration with OTP verification.
 */
app.post('/api/auth/login', async (req: Request, res: Response) => {
  try {
    const { name, email, deviceId } = req.body;
    const query = String(name || email || '').trim();

    if (!query) {
      res.status(400).json({ error: 'Please enter your Full Name.' });
      return;
    }

    const rosterCandidate = lookupCandidateRoster(query);
    if (!rosterCandidate) {
      res.status(403).json({
        error: 'Access restricted: Candidate name was not found on the accredited BN 55 roster. Please check spelling or contact administration.',
      });
      return;
    }

    const normalizedEmail = rosterCandidate.email.toLowerCase();
    const candidateUid = `cand_${crypto.createHash('md5').update(normalizedEmail).digest('hex').slice(0, 16)}`;

    // Retrieve registered user from memory or Firestore
    let storedUser: RegisteredCandidateRecord | null = registeredUsersStore.get(normalizedEmail) || null;

    if (!storedUser) {
      try {
        const snap = await getDoc(doc(db, 'users', candidateUid));
        if (snap.exists()) {
          storedUser = snap.data() as RegisteredCandidateRecord;
          registeredUsersStore.set(normalizedEmail, storedUser);
        }
      } catch (fsErr) {
        console.warn('[FIRESTORE] Warning fetching user record:', fsErr);
      }
    }

    // If candidate has never registered with OTP on any device yet:
    if (!storedUser || !storedUser.isVerified) {
      res.status(403).json({
        requiresNewRegistration: true,
        candidateName: rosterCandidate.name,
        error: 'Initial registration required: Please complete registration with your accredited name to receive an OTP verification code.',
      });
      return;
    }

    // STRICT DEVICE CHECK:
    // A change in device requires new registration!
    const clientDeviceId = String(deviceId || '').trim();
    if (!clientDeviceId || !storedUser.boundDeviceId || storedUser.boundDeviceId !== clientDeviceId) {
      res.status(403).json({
        requiresNewRegistration: true,
        isDeviceChange: true,
        candidateName: storedUser.name || rosterCandidate.name,
        error: 'New device detected. For examination integrity, accessing from a new device requires new registration and email OTP verification.',
      });
      return;
    }

    // Device matches!
    res.json({
      success: true,
      user: {
        uid: candidateUid,
        name: storedUser.name || rosterCandidate.name,
        email: storedUser.email || rosterCandidate.email,
        deviceId: clientDeviceId,
        isVerified: true,
        loggedInAt: Date.now(),
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Login failed';
    res.status(500).json({ error: message });
  }
});

/**
 * POST /api/auth/validate-device
 * Allows client to verify that its current device token matches the bound device in Firestore.
 */
app.post('/api/auth/validate-device', async (req: Request, res: Response) => {
  try {
    const { email, name, deviceId } = req.body;
    const query = String(email || name || '').trim();
    if (!query || !deviceId) {
      res.json({ valid: false, requiresNewRegistration: true });
      return;
    }

    const rosterCandidate = lookupCandidateRoster(query);
    if (!rosterCandidate) {
      res.json({ valid: false, requiresNewRegistration: true });
      return;
    }

    const normalizedEmail = rosterCandidate.email.toLowerCase();
    const candidateUid = `cand_${crypto.createHash('md5').update(normalizedEmail).digest('hex').slice(0, 16)}`;

    let storedUser: RegisteredCandidateRecord | null = registeredUsersStore.get(normalizedEmail) || null;
    if (!storedUser) {
      try {
        const snap = await getDoc(doc(db, 'users', candidateUid));
        if (snap.exists()) {
          storedUser = snap.data() as RegisteredCandidateRecord;
          registeredUsersStore.set(normalizedEmail, storedUser);
        }
      } catch {
        // fallback
      }
    }

    if (!storedUser || storedUser.boundDeviceId !== deviceId) {
      res.json({ valid: false, requiresNewRegistration: true });
      return;
    }

    res.json({ valid: true });
  } catch {
    res.json({ valid: false, requiresNewRegistration: true });
  }
});

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'NMCN Examination Preparation Portal Authentication Service',
  });
});

// Mount Vite middleware in development mode
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production serve dist directory
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NMCN Examination Portal server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
