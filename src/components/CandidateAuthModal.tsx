import React, { useState, useEffect, useRef } from 'react';
import {
  User,
  Send,
  Home,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  RefreshCw,
  Copy,
  Check,
  Info,
  ArrowRight,
  LogOut,
  Mail,
  Fingerprint,
} from 'lucide-react';
import { NMCN_COLLEGE_LOGO_DATA_URI, NMCN_OFFICIAL_LOGO_DATA_URI } from '../data/logoAsset';
import {
  CandidateRecord,
  BoundDevice,
  findOrCreateCandidate,
  getBoundDevice,
  getActiveCandidate,
  bindDeviceToCandidate,
  unbindCandidateDevice,
  getOrCreateDeviceId,
  getDeviceDisplayName,
} from '../data/candidateData';

interface CandidateAuthModalProps {
  onSuccess: (candidate: CandidateRecord) => void;
  onBackToHome: () => void;
  initialMode?: 'register' | 'login';
}

export default function CandidateAuthModal({
  onSuccess,
  onBackToHome,
  initialMode = 'register',
}: CandidateAuthModalProps) {
  const [activeTab, setActiveTab] = useState<'register' | 'login'>(initialMode);
  const [fullName, setFullName] = useState<string>('');
  const [otpInput, setOtpInput] = useState<string[]>(['', '', '', '', '', '']);
  const [currentStep, setCurrentStep] = useState<'input-name' | 'verify-otp' | 'bound-success'>('input-name');

  // Active candidate and bound device
  const [candidate, setCandidate] = useState<CandidateRecord | null>(null);
  const [boundDevice, setBoundDevice] = useState<BoundDevice | null>(() => getBoundDevice());
  const [activeCandidate, setActiveCandidate] = useState<CandidateRecord | null>(() => getActiveCandidate());

  // OTP State
  const [otpSentEmail, setOtpSentEmail] = useState<string>('');
  const [resendTimer, setResendTimer] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // If already bound on this device, check login status
  useEffect(() => {
    const existing = getBoundDevice();
    const active = getActiveCandidate();
    setBoundDevice(existing);
    setActiveCandidate(active);
    if (existing && activeTab === 'login') {
      setFullName(existing.candidateName);
    }
  }, [activeTab]);

  // Resend countdown timer
  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = window.setInterval(() => {
      setResendTimer((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [resendTimer]);

  // Handle Send OTP
  const handleSendOtp = async (candidateNameToSend?: string) => {
    const nameToUse = (candidateNameToSend || fullName).trim();
    if (!nameToUse) {
      setErrorMessage('Please enter your accredited Full Name.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // Resolve candidate
    const resolved = findOrCreateCandidate(nameToUse);
    setCandidate(resolved);

    let finalOtp = '';
    let finalEmail = resolved.email;

    try {
      // Dispatch OTP request to backend
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: nameToUse,
          deviceId: getOrCreateDeviceId(),
          deviceName: getDeviceDisplayName(),
        }),
      });

      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        if (data.success) {
          if (data.email) finalEmail = data.email;
          if (data.candidateName) {
            resolved.fullName = data.candidateName;
            if (data.idNumber) resolved.indexNumber = data.idNumber;
            resolved.email = finalEmail;
            setCandidate({ ...resolved });
          }
        } else {
          setErrorMessage(data.error || 'Failed to dispatch verification code.');
          setIsSubmitting(false);
          return;
        }
      }
    } catch {
      // Network issue
    }

    setOtpSentEmail(finalEmail);
    setResendTimer(60);
    setCurrentStep('verify-otp');
    setOtpInput(['', '', '', '', '', '']);
    setIsSubmitting(false);

    // Focus first OTP input after render
    setTimeout(() => {
      otpInputsRef.current[0]?.focus();
    }, 150);
  };

  // Handle OTP input digit change
  const handleOtpDigitChange = (index: number, value: string) => {
    const clean = value.replace(/\D/g, '');
    if (!clean) {
      const next = [...otpInput];
      next[index] = '';
      setOtpInput(next);
      return;
    }

    // If pasted full 6 digits
    if (clean.length > 1) {
      const digits = clean.slice(0, 6).split('');
      const next = [...otpInput];
      digits.forEach((d, i) => {
        if (i < 6) next[i] = d;
      });
      setOtpInput(next);
      const focusIndex = Math.min(5, digits.length);
      otpInputsRef.current[focusIndex]?.focus();
      return;
    }

    const next = [...otpInput];
    next[index] = clean[0];
    setOtpInput(next);

    // Auto-advance to next input box
    if (index < 5 && clean[0]) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpInput[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  // Verify OTP and bind device via backend API
  const handleVerifyOtp = async () => {
    const enteredCode = otpInput.join('');
    if (enteredCode.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const candToBind = candidate || findOrCreateCandidate(fullName);

    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: candToBind.fullName,
          otp: enteredCode,
          deviceId: getOrCreateDeviceId(),
          deviceName: getDeviceDisplayName(),
        }),
      });

      const contentType = res.headers.get('content-type') || '';
      let data: any = {};
      if (contentType.includes('application/json')) {
        data = await res.json();
      }

      if (!res.ok || data.success === false) {
        setErrorMessage(data.error || 'Invalid verification code. Please check your email and try again.');
        setIsSubmitting(false);
        return;
      }

      if (data.candidate) {
        if (data.candidate.fullName) candToBind.fullName = data.candidate.fullName;
        if (data.candidate.idNumber) candToBind.indexNumber = data.candidate.idNumber;
        if (data.candidate.email) candToBind.email = data.candidate.email;
      }

      const bound = bindDeviceToCandidate(candToBind);
      setBoundDevice(bound);
      setActiveCandidate(candToBind);

      setIsSubmitting(false);
      setCurrentStep('bound-success');
    } catch {
      setErrorMessage('Network connection error. Please verify your connection.');
      setIsSubmitting(false);
    }
  };

  // Login for an already bound device
  const handleBoundDeviceLogin = () => {
    if (!boundDevice || !activeCandidate) {
      // Find candidate
      const cand = findOrCreateCandidate(fullName);
      const bound = bindDeviceToCandidate(cand);
      setBoundDevice(bound);
      setActiveCandidate(cand);
      onSuccess(cand);
      return;
    }
    onSuccess(activeCandidate);
  };

  // Unbind device
  const handleUnbind = () => {
    const dev = getBoundDevice();
    if (dev?.deviceId) {
      fetch('/api/auth/unbind-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId: dev.deviceId }),
      }).catch(() => {});
    }
    unbindCandidateDevice();
    setBoundDevice(null);
    setActiveCandidate(null);
    setErrorMessage(null);
    setActiveTab('register');
    setCurrentStep('input-name');
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-14 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all">
        {/* Subtle Decorative Header Gradient */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />

        {/* Portal Branding Top Header */}
        <div className="flex items-center justify-between gap-3 mb-6 pt-1">
          <div className="flex items-center gap-3">
            <img
              src={NMCN_COLLEGE_LOGO_DATA_URI}
              alt="ASCONS Yola Logo"
              className="w-12 h-12 object-contain rounded-xl bg-white p-1 border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0"
            />
            <div>
              <h2 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                ASCONS Yola
              </h2>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Candidate Examination Portal
              </p>
            </div>
          </div>

          <img
            src={NMCN_OFFICIAL_LOGO_DATA_URI}
            alt="NMCN Official Logo"
            className="w-11 h-11 object-contain rounded-full bg-emerald-50 dark:bg-emerald-950 p-1 border border-emerald-300 dark:border-emerald-700 shadow-2xs shrink-0"
          />
        </div>

        {/* Segmented Switcher: Log In / Create Account */}
        <div className="bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl flex items-center mb-6 border border-slate-200/80 dark:border-slate-700/80">
          <button
            type="button"
            onClick={() => {
              setActiveTab('login');
              setCurrentStep('input-name');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'login'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('register');
              setCurrentStep('input-name');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'register'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CREATE ACCOUNT (REGISTER CANDIDATE DEVICE)                          */}
        {/* ========================================================================= */}
        {activeTab === 'register' && (
          <div>
            {currentStep === 'input-name' && (
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                  Register Candidate Device
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Enter your accredited Full Name. Your official email will be found automatically and an OTP code sent to verify and bind this device.
                </p>

                {/* Error Banner */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3.5 mb-5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 text-xs sm:text-sm flex items-start gap-2.5"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Form Input */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      ACCREDITED FULL NAME <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your accredited Full Name"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500 font-medium text-sm sm:text-base shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  type="button"
                  onClick={() => handleSendOtp()}
                  disabled={isSubmitting}
                  className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors cursor-pointer shadow-md disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>GENERATING VERIFICATION CODE...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>REGISTER & SEND VERIFICATION CODE</span>
                    </>
                  )}
                </button>

                {/* Switch to login & Back to Home */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 text-center space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('login');
                      setErrorMessage(null);
                    }}
                    className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    Already registered on this device? Switch to Login
                  </button>

                  <div>
                    <button
                      type="button"
                      onClick={onBackToHome}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <Home className="w-4 h-4" />
                      <span>Back to Home</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: VERIFY OTP SCREEN */}
            {currentStep === 'verify-otp' && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                    2/2
                  </div>
                  <h1 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Verify &amp; Bind Device
                  </h1>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Enter the 6-digit verification code sent to your official email:
                  <span className="block font-bold text-emerald-700 dark:text-emerald-400 mt-0.5 font-mono">
                    {otpSentEmail}
                  </span>
                </p>

                {/* Email Dispatch Notice Card (No OTP code displayed on screen) */}
                <div className="p-4 mb-5 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-start gap-3.5 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Code Sent to Email
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      Check your email inbox or spam folder for the 6-digit verification code, then enter it below to bind this device.
                    </p>
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3 mb-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 text-xs flex items-center gap-2"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 6 Digit Input Boxes */}
                <div className="mb-5">
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2.5 text-center">
                    ENTER 6-DIGIT CODE
                  </label>
                  <div className="flex justify-between gap-2 max-w-xs mx-auto">
                    {otpInput.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          otpInputsRef.current[i] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpDigitChange(i, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                        className="w-11 h-13 sm:w-12 sm:h-14 text-center font-mono text-xl sm:text-2xl font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500 shadow-2xs"
                      />
                    ))}
                  </div>
                </div>

                {/* Resend OTP Bar */}
                <div className="flex items-center justify-between text-xs mb-6 px-1">
                  <span className="text-slate-500 dark:text-slate-400">
                    Didn&apos;t receive code?
                  </span>
                  {resendTimer > 0 ? (
                    <span className="font-semibold text-slate-600 dark:text-slate-300">
                      Resend in <span className="font-mono text-emerald-600">{resendTimer}s</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSendOtp()}
                      className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      Resend OTP Code
                    </button>
                  )}
                </div>

                {/* Verify & Bind Button */}
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={isSubmitting || otpInput.join('').length < 6}
                  className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>VERIFY OTP &amp; BIND DEVICE</span>
                </button>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('input-name')}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                  >
                    Change Candidate Name
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SUCCESS BOUND SCREEN */}
            {currentStep === 'bound-success' && candidate && (
              <div className="text-center py-2">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h2 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
                  Device Bound Successfully!
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5">
                  Your device has been verified and registered for the NMCN Professional Examination.
                </p>

                <div className="p-4 mb-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Candidate Name:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{candidate.fullName}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Official Email:</span>
                    <span className="font-mono text-slate-800 dark:text-slate-200">{candidate.email}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Bound Device:</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{getDeviceDisplayName()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Status:</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 font-bold text-[10px]">
                      Device Bound &amp; Accredited
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSuccess(candidate)}
                  className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <span>PROCEED TO PRACTICE EXAMS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: LOG IN (FOR REGISTERED CANDIDATE DEVICES)                           */}
        {/* ========================================================================= */}
        {activeTab === 'login' && (
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Candidate Login
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Access your accredited examination session on this registered device.
            </p>

            {boundDevice && activeCandidate ? (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-left">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span>Recognized Bound Device</span>
                  </div>

                  <p className="text-base font-extrabold text-slate-900 dark:text-white mb-1">
                    {boundDevice.candidateName}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Device ID: {boundDevice.deviceId} ({boundDevice.deviceName})
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleBoundDeviceLogin}
                  className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <span>CONTINUE AS {boundDevice.candidateName.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={handleUnbind}
                    className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Unbind this device</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('register');
                      setCurrentStep('input-name');
                    }}
                    className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold cursor-pointer"
                  >
                    Register new candidate
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
                  <Fingerprint className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    No device binding found on this browser yet. Please enter your name below or switch to Create Account to verify with OTP.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    ACCREDITED CANDIDATE NAME
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your accredited Full Name"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 font-medium text-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const cand = findOrCreateCandidate(fullName);
                    const bound = bindDeviceToCandidate(cand);
                    setBoundDevice(bound);
                    setActiveCandidate(cand);
                    onSuccess(cand);
                  }}
                  className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>LOG IN TO PORTAL</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('register');
                      setCurrentStep('input-name');
                    }}
                    className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    Need to verify with OTP? Switch to Create Account
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 text-center">
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
