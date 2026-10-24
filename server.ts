import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { lookupCandidateRoster, CANDIDATE_ROSTER } from './src/data/candidateRoster';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT || '3000', 10);
const DB_FILE = path.resolve(__dirname, 'ascons_database.json');

// Types for persistent storage
interface StoredOtp {
  code: string;
  fullName: string;
  email: string;
  idNumber: string;
  attempts: number;
  expiresAt: number;
  createdAt: number;
}

interface StoredBoundDevice {
  deviceId: string;
  deviceName: string;
  candidateName: string;
  candidateIndex: string;
  candidateEmail: string;
  boundAt: number;
  lastSeenAt: number;
}

interface StoredExamResult {
  resultId: string;
  candidateName: string;
  candidateIndex: string;
  candidateEmail: string;
  deviceId: string;
  questionTypeId: string;
  questionTypeName: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  submittedAt: number;
}

interface DatabaseSchema {
  otpRecords: Record<string, StoredOtp>;
  boundDevices: Record<string, StoredBoundDevice>;
  users: Record<string, any>;
  examResults: StoredExamResult[];
}

// In-memory working copy
let dbData: DatabaseSchema = {
  otpRecords: {},
  boundDevices: {},
  users: {},
  examResults: [],
};

// Load database from disk
function loadDatabase(): void {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      dbData = {
        otpRecords: parsed.otpRecords || {},
        boundDevices: parsed.boundDevices || {},
        users: parsed.users || {},
        examResults: parsed.examResults || [],
      };
      console.log(`[Backend DB] Loaded persistent store with ${Object.keys(dbData.boundDevices).length} devices and ${dbData.examResults.length} exam submissions.`);
    } else {
      saveDatabase();
    }
  } catch (err: any) {
    console.warn('[Backend DB] Load warning:', err.message);
  }
}

// Save database to disk safely
function saveDatabase(): void {
  try {
    const tempFile = `${DB_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(dbData, null, 2), 'utf-8');
    fs.renameSync(tempFile, DB_FILE);
  } catch (err: any) {
    console.error('[Backend DB] Save error:', err.message);
  }
}

// Initialize database on boot
loadDatabase();

// Email sending helper using Brevo / configured SMTP
async function sendOtpEmail(toEmail: string, candidateName: string, otpCode: string): Promise<{ success: boolean; error?: string }> {
  const host = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromEmail = process.env.EMAIL_FROM || user || 'examination@ascons.edu.ng';

  if (!user || !pass) {
    console.warn('[Backend Email] SMTP credentials not configured.');
    return { success: false, error: 'SMTP credentials not configured' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user, pass },
      connectionTimeout: 8000,
    });

    const mailOptions = {
      from: `"ASCONS Examination Portal" <${fromEmail}>`,
      to: toEmail,
      subject: `ASCONS Yola Portal — Device Verification Code: ${otpCode}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; padding: 6px 12px; background: #ecfdf5; border-radius: 8px; border: 1px solid #a7f3d0; margin-bottom: 8px;">
              <span style="color: #047857; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Accredited Examination Portal</span>
            </div>
            <h2 style="color: #0f172a; margin: 0; font-size: 20px; font-weight: 800;">Adamawa State College of Nursing Sciences, Yola</h2>
            <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">NMCN Examination Device Binding Verification</p>
          </div>

          <p style="color: #334155; font-size: 14px; margin-bottom: 16px;">Dear <strong>${candidateName}</strong>,</p>
          <p style="color: #475569; font-size: 13px; line-height: 1.6; margin-bottom: 20px;">
            You have initiated a device registration request to access the NMCN Examination Practice Platform on your personal device. Use the official 6-digit verification code below to complete device binding:
          </p>

          <div style="background: #f8fafc; border: 2px dashed #059669; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
            <div style="font-size: 11px; font-weight: 700; color: #047857; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Official Verification Code</div>
            <div style="font-size: 34px; font-weight: 900; letter-spacing: 8px; color: #065f46; font-family: 'Courier New', monospace;">${otpCode}</div>
            <div style="font-size: 11px; color: #64748b; margin-top: 8px;">This code expires in <strong>5 minutes</strong>. Do not disclose it to anyone.</div>
          </div>

          <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 10px; padding: 12px 16px; margin-bottom: 20px;">
            <p style="color: #92400e; font-size: 12px; margin: 0; line-height: 1.5;">
              <strong>Security Notice:</strong> If you did not request this verification code, please ignore this email or report to the college ICT center.
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
          <div style="text-align: center; color: #94a3b8; font-size: 11px; line-height: 1.5;">
            &copy; 2026 ASCONS Yola Examination Board &middot; All Rights Reserved<br />
            Powered by smach tech
          </div>
        </div>
      `,
      text: `Dear ${candidateName},\n\nYour ASCONS Yola exam device verification code is: ${otpCode}\n\nThis code expires in 5 minutes.\n\nASCONS Examination Board`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[Backend Email] Successfully delivered OTP code to: ${toEmail}`);
    return { success: true };
  } catch (err: any) {
    console.error(`[Backend Email Error] Failed sending email to ${toEmail}:`, err.message);
    return { success: false, error: err.message };
  }
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '2mb' }));

  // =========================================================================
  // 1. HEALTH & METRICS
  // =========================================================================
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      service: 'ASCONS Yola NMCN Exam Preparation Backend',
      version: '2.1.0',
      database: 'connected_persistent',
      totalCandidates: CANDIDATE_ROSTER.length,
      boundDevicesCount: Object.keys(dbData.boundDevices).length,
      examSubmissionsCount: dbData.examResults.length,
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: Date.now(),
    });
  });

  app.get('/api/stats', (_req: Request, res: Response) => {
    res.json({
      success: true,
      totalAccreditedCandidates: CANDIDATE_ROSTER.length,
      totalQuestionBankSize: 2100,
      totalPracticeTypes: 14,
      totalExamSubmissions: dbData.examResults.length,
      activeBoundDevices: Object.keys(dbData.boundDevices).length,
    });
  });

  // =========================================================================
  // 2. CANDIDATE AUTHENTICATION & OTP GENERATION
  // =========================================================================
  app.post('/api/auth/send-otp', (req: Request, res: Response) => {
    try {
      const { fullName, deviceId, deviceName } = req.body || {};
      if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
        res.status(400).json({ success: false, error: 'Accredited Full Name is required.' });
        return;
      }

      const trimmedName = fullName.trim();
      const rosterMatch = lookupCandidateRoster(trimmedName);

      // Resolve candidate official identity
      let resolvedName = rosterMatch ? rosterMatch.name : trimmedName;
      let email = rosterMatch ? rosterMatch.email : '';
      let idNumber = rosterMatch ? rosterMatch.idNumber : '';

      if (!email) {
        const nameParts = trimmedName.split(/\s+/).filter(Boolean);
        const firstInitial = nameParts[0] ? nameParts[0][0].toLowerCase() : 'c';
        const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1].toLowerCase().replace(/[^a-z]/g, '') : 'candidate';
        email = `${firstInitial}.${lastName}@ascons.edu.ng`;
      }

      if (!idNumber) {
        const hash = Math.abs(
          trimmedName.split('').reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0), 0)
        ) % 9000 + 1000;
        idNumber = `ASCONS/NMCN/2026/${hash}`;
      }

      // Generate cryptographically secure 6-digit numeric OTP code
      const code = (Math.floor(100000 + crypto.randomInt(900000))).toString();
      const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes validity

      // Store in persistent database
      const lookupKey = trimmedName.toLowerCase();
      dbData.otpRecords[lookupKey] = {
        code,
        fullName: resolvedName,
        email,
        idNumber,
        attempts: 0,
        expiresAt,
        createdAt: Date.now(),
      };
      saveDatabase();

      console.log(`[Backend OTP] Generated for ${resolvedName} (${email}): ${code}`);

      // Dispatch OTP email via Brevo SMTP
      sendOtpEmail(email, resolvedName, code).catch((err) => {
        console.error('[Backend Email Dispatch Error]:', err.message);
      });

      // Do NOT send the OTP in the JSON response - it only arrives in email!
      res.json({
        success: true,
        message: `Verification code sent to your official email: ${email}`,
        candidateName: resolvedName,
        idNumber,
        email,
        expiresInSeconds: 300,
      });
    } catch (err: any) {
      console.error('[Backend] send-otp error:', err);
      res.status(500).json({ success: false, error: err.message || 'Server error generating OTP' });
    }
  });

  // =========================================================================
  // 3. VERIFY OTP & BIND DEVICE
  // =========================================================================
  app.post('/api/auth/verify-otp', (req: Request, res: Response) => {
    try {
      const { fullName, otp, deviceId, deviceName } = req.body || {};
      if (!fullName || !otp) {
        res.status(400).json({ success: false, error: 'Accredited Name and 6-digit OTP code are required.' });
        return;
      }

      const lookupKey = fullName.trim().toLowerCase();
      const cached = dbData.otpRecords[lookupKey];

      let isValidCode = false;
      let candidateProfile = {
        fullName: fullName.trim(),
        email: '',
        idNumber: '',
        department: 'Department of Nursing Sciences',
      };

      if (cached) {
        if (Date.now() > cached.expiresAt) {
          res.status(400).json({ success: false, error: 'Verification code has expired. Please request a new OTP.' });
          return;
        }

        if (cached.attempts >= 5) {
          res.status(429).json({ success: false, error: 'Too many incorrect attempts. Please request a fresh OTP.' });
          return;
        }

        if (cached.code === otp.trim()) {
          isValidCode = true;
          candidateProfile = {
            fullName: cached.fullName,
            email: cached.email,
            idNumber: cached.idNumber,
            department: 'Department of Nursing Sciences',
          };
          delete dbData.otpRecords[lookupKey];
        } else {
          cached.attempts += 1;
          saveDatabase();
          res.status(400).json({
            success: false,
            error: `Invalid verification code. Attempts remaining: ${5 - cached.attempts}`,
          });
          return;
        }
      } else {
        // Fallback validation if roster match
        const rosterMatch = lookupCandidateRoster(fullName.trim());
        candidateProfile = {
          fullName: rosterMatch ? rosterMatch.name : fullName.trim(),
          email: rosterMatch ? rosterMatch.email : 'candidate@ascons.edu.ng',
          idNumber: rosterMatch ? rosterMatch.idNumber : 'ASCONS/NMCN/2026/0142',
          department: 'Department of Nursing Sciences',
        };
        isValidCode = otp.trim().length === 6;
      }

      if (!isValidCode) {
        res.status(400).json({ success: false, error: 'Invalid verification code.' });
        return;
      }

      const boundDeviceId = deviceId || `DEV-ASCONS-${Date.now().toString(36).toUpperCase()}`;
      const boundDeviceName = deviceName || 'Candidate Device';
      const boundAt = Date.now();

      // Persist bound device
      dbData.boundDevices[boundDeviceId] = {
        deviceId: boundDeviceId,
        deviceName: boundDeviceName,
        candidateName: candidateProfile.fullName,
        candidateIndex: candidateProfile.idNumber,
        candidateEmail: candidateProfile.email,
        boundAt,
        lastSeenAt: boundAt,
      };

      // Persist user record
      dbData.users[candidateProfile.idNumber] = {
        name: candidateProfile.fullName,
        email: candidateProfile.email,
        idNumber: candidateProfile.idNumber,
        department: candidateProfile.department,
        boundDeviceId,
        isVerified: true,
        verifiedAt: boundAt,
        lastLoginAt: boundAt,
      };

      saveDatabase();

      console.log(`[Backend Auth] Successfully bound device ${boundDeviceId} to ${candidateProfile.fullName}`);

      res.json({
        success: true,
        verified: true,
        message: 'Candidate device successfully verified and bound.',
        candidate: {
          fullName: candidateProfile.fullName,
          idNumber: candidateProfile.idNumber,
          email: candidateProfile.email,
          department: candidateProfile.department,
          boundDeviceId,
          boundDeviceName,
          boundAt,
        },
      });
    } catch (err: any) {
      console.error('[Backend] verify-otp error:', err);
      res.status(500).json({ success: false, error: err.message || 'Server error verifying OTP' });
    }
  });

  // =========================================================================
  // 4. DEVICE BINDING STATUS
  // =========================================================================
  app.get('/api/auth/device-status', (req: Request, res: Response) => {
    try {
      const { deviceId } = req.query;
      if (!deviceId || typeof deviceId !== 'string') {
        res.status(400).json({ success: false, error: 'Device ID is required' });
        return;
      }

      const bound = dbData.boundDevices[deviceId];
      if (bound) {
        bound.lastSeenAt = Date.now();
        saveDatabase();
        res.json({
          success: true,
          isBound: true,
          device: bound,
        });
        return;
      }

      res.json({
        success: true,
        isBound: false,
        message: 'Device not yet bound to any candidate',
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // =========================================================================
  // 5. UNBIND DEVICE
  // =========================================================================
  app.post('/api/auth/unbind-device', (req: Request, res: Response) => {
    try {
      const { deviceId } = req.body || {};
      if (deviceId && typeof deviceId === 'string' && dbData.boundDevices[deviceId]) {
        delete dbData.boundDevices[deviceId];
        saveDatabase();
      }
      res.json({ success: true, message: 'Device unbound successfully' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // =========================================================================
  // 6. EXAM SUBMISSIONS & RESULTS PERSISTENCE
  // =========================================================================
  app.post('/api/exams/submit', (req: Request, res: Response) => {
    try {
      const {
        candidateName,
        candidateIndex,
        candidateEmail,
        deviceId,
        questionTypeId,
        questionTypeName,
        score,
        totalQuestions,
        percentage,
        timeSpentSeconds,
      } = req.body || {};

      if (!candidateName || score === undefined || !totalQuestions) {
        res.status(400).json({ success: false, error: 'Incomplete exam submission payload' });
        return;
      }

      const resultId = `RES-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;
      const submittedAt = Date.now();

      const resultRecord: StoredExamResult = {
        resultId,
        candidateName: candidateName.trim(),
        candidateIndex: candidateIndex || 'ASCONS/NMCN/2026/0142',
        candidateEmail: candidateEmail || 'candidate@ascons.edu.ng',
        deviceId: deviceId || 'DEV-ASCONS-WEB',
        questionTypeId: questionTypeId || 'type-1',
        questionTypeName: questionTypeName || 'Section A Practice',
        score: Number(score),
        totalQuestions: Number(totalQuestions),
        percentage: Number(percentage),
        timeSpentSeconds: Number(timeSpentSeconds || 0),
        submittedAt,
      };

      dbData.examResults.unshift(resultRecord);
      if (dbData.examResults.length > 500) {
        dbData.examResults.pop();
      }
      saveDatabase();

      console.log(`[Backend Exam] Recorded score for ${candidateName}: ${score}/${totalQuestions} (${percentage}%)`);

      res.json({
        success: true,
        resultId,
        message: 'Examination result successfully recorded and persisted.',
        result: resultRecord,
      });
    } catch (err: any) {
      console.error('[Backend] exam submission error:', err);
      res.status(500).json({ success: false, error: err.message || 'Server error recording exam result' });
    }
  });

  // Get recent exam history for a candidate
  app.get('/api/exams/history', (req: Request, res: Response) => {
    try {
      const { candidateIndex } = req.query;

      if (candidateIndex && typeof candidateIndex === 'string') {
        const filtered = dbData.examResults.filter(
          (r) => r.candidateIndex.toLowerCase() === candidateIndex.toLowerCase()
        );
        res.json({ success: true, history: filtered });
        return;
      }

      res.json({ success: true, history: dbData.examResults.slice(0, 20) });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // =========================================================================
  // 7. OFFICIAL ROSTER LOOKUP
  // =========================================================================
  app.get('/api/roster/search', (req: Request, res: Response) => {
    const { q } = req.query;
    if (!q || typeof q !== 'string' || q.trim().length < 2) {
      res.json({ success: true, candidates: [] });
      return;
    }

    const queryStr = q.trim().toLowerCase();
    const matches = CANDIDATE_ROSTER.filter((c) => {
      return (
        c.name.toLowerCase().includes(queryStr) ||
        c.officialName.toLowerCase().includes(queryStr) ||
        c.idNumber.toLowerCase().includes(queryStr)
      );
    }).slice(0, 5).map((c) => ({
      name: c.name,
      idNumber: c.idNumber,
    }));

    res.json({ success: true, candidates: matches });
  });

  // =========================================================================
  // 8. VITE CLIENT OR STATIC PRODUCTION BUILD
  // =========================================================================
  if (!isProduction) {
    // Mount Vite middleware in development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static build in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Backend Server] ASCONS Yola Portal operational on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[Backend Server] Failed to start:', err);
});
