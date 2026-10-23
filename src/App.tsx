import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Sun,
  Moon,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Grid,
  X,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Home,
  Calendar,
  User,
  Mail,
  LogOut,
  ShieldCheck,
  Send,
  RefreshCw,
  KeyRound,
  Smartphone,
} from 'lucide-react';
import { AppScreen, OptionKey, Question, ActiveExamSession, QuestionSection, CandidateUser } from './types';
import { QUESTION_TYPES } from './data/questionBank';
import { NMCN_COLLEGE_LOGO_DATA_URI, NMCN_OFFICIAL_LOGO_DATA_URI } from './data/logoAsset';
import { PROVOST_LANDSCAPE_DATA_URI, PROVOST_PORTRAIT_DATA_URI } from './data/provostAsset';
import { getOptionText } from './utils/pdfExport';
import {
  lookupCandidateRoster,
  CandidateRosterEntry,
} from './data/candidateRoster';
import { testConnection } from './firebase';
import { getOrCreateDeviceId } from './utils/device';

// Dynamic exam duration: 30 seconds per question (NMCN standard timing)
export function getExamDurationSeconds(questionCount: number): number {
  return Math.max(600, questionCount * 30);
}

export function formatExamDurationText(seconds: number): string {
  const mins = Math.ceil(seconds / 60);
  if (mins >= 60) {
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return remMins > 0 ? `${hrs} Hr ${remMins} Mins` : `${hrs} Hour${hrs > 1 ? 's' : ''}`;
  }
  return `${mins} Minutes`;
}

const STORAGE_KEY_SESSION = 'ascons_nmcn_active_exam_v1';
const STORAGE_KEY_THEME = 'ascons_nmcn_theme_v1';
const STORAGE_KEY_CANDIDATE = 'ascons_nmcn_candidate_user_v1';

interface Nov3Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasCommenced: boolean;
}

function getNov3ExamCountdown(): Nov3Countdown {
  const now = new Date();
  let targetYear = now.getFullYear();
  // November is month index 10 (0-based)
  const targetDate = new Date(targetYear, 10, 3, 0, 0, 0, 0);

  // If November 3rd of this year has already passed by more than 7 days, count down to next year's Nov 3
  if (now.getTime() > targetDate.getTime() + 7 * 24 * 60 * 60 * 1000) {
    targetYear += 1;
  }

  const finalTarget = new Date(targetYear, 10, 3, 0, 0, 0, 0);
  const diffMs = finalTarget.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, hasCommenced: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, hasCommenced: false };
}

function formatCountdown(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(clamped / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);
  const seconds = clamped % 60;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

export default function App() {
  // Theme state (Light Mode / Dark Mode)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {
      // ignore storage errors
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEY_THEME, darkMode ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [darkMode]);

  // Active exam restoration or initial state
  const [screen, setScreen] = useState<AppScreen>('welcome');
  const [selectedTypeId, setSelectedTypeId] = useState<string>(QUESTION_TYPES[0].id);
  const [openSection, setOpenSection] = useState<QuestionSection | null>(null);
  const [answers, setAnswers] = useState<Record<number, OptionKey>>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(() =>
    getExamDurationSeconds(QUESTION_TYPES[0].questions.length)
  );
  const [fiveMinWarningShown, setFiveMinWarningShown] = useState<boolean>(false);
  const [fiveMinBannerVisible, setFiveMinBannerVisible] = useState<boolean>(false);
  const [showSubmitConfirmModal, setShowSubmitConfirmModal] = useState<boolean>(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [examCountdown, setExamCountdown] = useState<Nov3Countdown>(() => getNov3ExamCountdown());
  const [bgSlideIndex, setBgSlideIndex] = useState<number>(0);
  const slideDirRef = useRef<1 | -1>(1);

  // Candidate state (student login with email and ID number)
  const [candidateUser, setCandidateUser] = useState<CandidateUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CANDIDATE);
      if (saved) {
        return JSON.parse(saved) as CandidateUser;
      }
    } catch {
      // ignore
    }
    return null;
  });

  // Auth screen mode: 'login' | 'create'
  const [authMode, setAuthMode] = useState<'login' | 'create'>('create');

  // Login form state (Accredited Name only)
  const [loginName, setLoginName] = useState<string>(() => candidateUser?.name || '');
  const [loginError, setLoginError] = useState<string>('');

  // Create account form state (Accredited Full Name only)
  const [createName, setCreateName] = useState<string>('');
  const [createError, setCreateError] = useState<string>('');
  const [deviceNotice, setDeviceNotice] = useState<string>('');
  const [matchedCandidate, setMatchedCandidate] = useState<CandidateRosterEntry | null>(null);

  // Server-authoritative OTP email verification state
  const [isVerifyingEmail, setIsVerifyingEmail] = useState<boolean>(false);
  const [verificationId, setVerificationId] = useState<string>('');
  const [targetEmail, setTargetEmail] = useState<string>('');
  const [maskedEmail, setMaskedEmail] = useState<string>('');
  const [otpInput, setOtpInput] = useState<string>('');
  const [otpError, setOtpError] = useState<string>('');
  const [otpInfoMessage, setOtpInfoMessage] = useState<string>('');
  const [resendCooldown, setResendCooldown] = useState<number>(0);
  const [otpExpiryTime, setOtpExpiryTime] = useState<number>(0);
  const [otpRemainingSeconds, setOtpRemainingSeconds] = useState<number>(300);
  const [isSendingOtp, setIsSendingOtp] = useState<boolean>(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState<boolean>(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);

  // Enforce device binding on startup: if device token has changed or is missing, require new registration
  useEffect(() => {
    const currentDeviceId = getOrCreateDeviceId();
    if (candidateUser) {
      if (!candidateUser.deviceId || candidateUser.deviceId !== currentDeviceId) {
        setCandidateUser(null);
        try {
          localStorage.removeItem(STORAGE_KEY_CANDIDATE);
          localStorage.removeItem(STORAGE_KEY_SESSION);
        } catch {
          // ignore
        }
        setDeviceNotice('New device detected. For examination security, accessing from a new device requires new registration and email verification.');
        setAuthMode('create');
        if (candidateUser.name) {
          setCreateName(candidateUser.name);
        }
      }
    }
  }, [candidateUser]);

  // Validate Firestore connection on boot
  useEffect(() => {
    testConnection();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setExamCountdown(getNov3ExamCountdown());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  // Cooldown timer for resending OTP verification code (60-second cooldown)
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const interval = window.setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [resendCooldown]);

  // 5-minute unpausable countdown timer for OTP code validity
  useEffect(() => {
    if (!isVerifyingEmail || otpExpiryTime <= 0) return;
    const interval = window.setInterval(() => {
      const left = Math.max(0, Math.floor((otpExpiryTime - Date.now()) / 1000));
      setOtpRemainingSeconds(left);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [isVerifyingEmail, otpExpiryTime]);

  // Intercept and disable print commands (Ctrl+P, Cmd+P, and window print)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const handleBeforePrint = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('beforeprint', handleBeforePrint);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, []);

  // Automatic background slideshow on Welcome screen (slides from both right and left: 0 -> 1 -> 2 -> 1 -> 0)
  useEffect(() => {
    if (screen !== 'welcome') return;
    const slideInterval = window.setInterval(() => {
      setBgSlideIndex((prev) => {
        if (prev >= 2) {
          slideDirRef.current = -1;
          return 1;
        }
        if (prev <= 0) {
          slideDirRef.current = 1;
          return 1;
        }
        return prev + slideDirRef.current;
      });
    }, 4500);
    return () => window.clearInterval(slideInterval);
  }, [screen]);

  const isScrollingFromClick = useRef<boolean>(false);

  const currentQuestionType =
    QUESTION_TYPES.find((qt) => qt.id === selectedTypeId) || QUESTION_TYPES[0];
  const questions: Question[] = currentQuestionType.questions;
  const totalQuestions = questions.length;
  const totalExamDuration = getExamDurationSeconds(totalQuestions);

  // Restore active exam session on mount if student refreshed or reopened browser
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_SESSION);
      if (!raw) return;
      const saved: ActiveExamSession = JSON.parse(raw);
      if (
        saved &&
        saved.questionTypeId &&
        typeof saved.startedAt === 'number' &&
        QUESTION_TYPES.some((qt) => qt.id === saved.questionTypeId)
      ) {
        const qType = QUESTION_TYPES.find((qt) => qt.id === saved.questionTypeId) || QUESTION_TYPES[0];
        const examDuration = saved.durationSeconds || getExamDurationSeconds(qType.questions.length);
        const elapsed = Math.floor((Date.now() - saved.startedAt) / 1000);
        const left = Math.max(0, examDuration - elapsed);

        setSelectedTypeId(saved.questionTypeId);
        setAnswers(saved.answers || {});
        setCurrentQuestion(saved.currentQuestion || 1);
        setStartedAt(saved.startedAt);
        setRemainingSeconds(left);

        if (left <= 0) {
          // Time expired while browser was closed -> automatically submit to result
          localStorage.removeItem(STORAGE_KEY_SESSION);
          setScreen('result');
        } else {
          if (left <= 300) {
            setFiveMinWarningShown(true);
            setFiveMinBannerVisible(true);
          }
          setScreen('exam');
          // Scroll to restored current question after render
          setTimeout(() => {
            const el = document.getElementById(`question-block-${saved.currentQuestion || 1}`);
            if (el) {
              el.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
          }, 120);
        }
      }
    } catch {
      // ignore corrupted storage
    }
  }, []);

  // Persist active exam session on changes
  useEffect(() => {
    if (screen === 'exam' && startedAt !== null) {
      const session: ActiveExamSession = {
        questionTypeId: selectedTypeId,
        startedAt,
        durationSeconds: totalExamDuration,
        answers,
        currentQuestion,
      };
      try {
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      } catch {
        // ignore storage quota errors
      }
    }
  }, [screen, selectedTypeId, startedAt, answers, currentQuestion, totalExamDuration]);

  // Navigate back to the Welcome homepage at any point
  const goToWelcomePage = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY_SESSION);
    } catch {
      // ignore
    }
    setShowSubmitConfirmModal(false);
    setMobileNavOpen(false);
    setFiveMinBannerVisible(false);
    setOpenSection(null);
    setScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Finalize submission (clears active storage so history isn't permanently stored)
  const finalizeSubmission = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY_SESSION);
    } catch {
      // ignore
    }
    setShowSubmitConfirmModal(false);
    setMobileNavOpen(false);
    setFiveMinBannerVisible(false);
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Continuous unpausable countdown timer during exam
  useEffect(() => {
    if (screen !== 'exam' || startedAt === null) return;
    const examDuration = getExamDurationSeconds(questions.length);

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const left = Math.max(0, examDuration - elapsed);
      setRemainingSeconds(left);

      // 5-minute warning trigger (at 300 seconds or below)
      if (left <= 300 && left > 0 && !fiveMinWarningShown) {
        setFiveMinWarningShown(true);
        setFiveMinBannerVisible(true);
      }

      // Automatic submission when timer reaches zero
      if (left <= 0) {
        finalizeSubmission();
      }
    };

    tick();
    const intervalId = window.setInterval(tick, 250);
    return () => window.clearInterval(intervalId);
  }, [screen, startedAt, fiveMinWarningShown, finalizeSubmission, questions.length]);

  // Track which question is currently in view when scrolling on the exam page
  useEffect(() => {
    if (screen !== 'exam') return;

    const handleScroll = () => {
      if (isScrollingFromClick.current) return;
      const viewportOffset = 180;
      let closestNum = 1;
      let minDistance = Infinity;

      for (let i = 1; i <= totalQuestions; i++) {
        const el = document.getElementById(`question-block-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportOffset);
          if (distance < minDistance) {
            minDistance = distance;
            closestNum = i;
          }
        }
      }
      setCurrentQuestion(closestNum);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [screen, totalQuestions]);

  // Lookup candidate from roster by name and dispatch real server-side OTP email
  const handleNameLookupAndSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanName = createName.trim();

    if (!cleanName) {
      setCreateError('Please enter your accredited Full Name.');
      return;
    }
    if (cleanName.length < 2) {
      setCreateError('Name must be at least 2 characters long.');
      return;
    }

    const candidate = lookupCandidateRoster(cleanName);
    if (!candidate) {
      setCreateError(
        'Candidate was not found on the accredited BN 55 examination roster. Please check the spelling of your name (e.g. "Nelson Emmanuel Chams" or "Michael Felix") or contact college administration.'
      );
      return;
    }

    const candidateName = candidate.name;
    const candidateEmail = candidate.email;
    const currentDeviceId = getOrCreateDeviceId();

    setMatchedCandidate(candidate);
    setCreateError('');
    setIsSendingOtp(true);
    setOtpError('');
    setOtpInfoMessage('');

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: candidateName,
          email: candidateEmail,
          deviceId: currentDeviceId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send verification code');
      }

      setVerificationId(data.verificationId);
      setTargetEmail(data.email || candidateEmail);
      setMaskedEmail(data.emailMasked || candidateEmail);
      setOtpExpiryTime(data.expiresAt || Date.now() + 300000);
      setOtpRemainingSeconds(300);
      setResendCooldown(data.cooldownSeconds || 60);
      setOtpInput('');
      setRemainingAttempts(null);
      setIsVerifyingEmail(true);
      if (data.emailSent) {
        setOtpInfoMessage(`A 6-digit verification code has been dispatched to ${data.email || candidateEmail}. Please check your inbox and spam folder.`);
      } else {
        setOtpInfoMessage(data.message || `Verification code generated for ${data.email || candidateEmail}.`);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to connect to authentication server';
      setCreateError(msg);
    } finally {
      setIsSendingOtp(false);
    }
  };

  // Handle verifying the 6-digit OTP code before login via backend and bind device
  const handleVerifyAndLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanOtp = otpInput.trim().replace(/\D/g, '');

    if (!cleanOtp) {
      setOtpError('Please input the 6-digit verification code sent to your email.');
      return;
    }
    if (cleanOtp.length !== 6) {
      setOtpError('The verification code must be exactly 6 digits.');
      return;
    }

    if (otpRemainingSeconds <= 0) {
      setOtpError('Verification code has expired (5-minute limit). Please click Resend.');
      return;
    }

    setIsVerifyingOtp(true);
    setOtpError('');
    const currentDeviceId = getOrCreateDeviceId();

    try {
      const candidateName = matchedCandidate ? matchedCandidate.name : createName.trim();

      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          verificationId,
          code: cleanOtp,
          name: candidateName,
          deviceId: currentDeviceId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.remainingAttempts !== undefined) {
          setRemainingAttempts(data.remainingAttempts);
        }
        throw new Error(data.error || 'Verification failed');
      }

      // Successful server-side verification with bound device!
      const user: CandidateUser = {
        email: data.user?.email || targetEmail,
        name: data.user?.name || candidateName,
        idNumber: data.user?.idNumber || '',
        deviceId: currentDeviceId,
        isVerified: true,
        loggedInAt: Date.now(),
      };

      setCandidateUser(user);
      setDeviceNotice('');
      try {
        localStorage.setItem(STORAGE_KEY_CANDIDATE, JSON.stringify(user));
      } catch {
        // ignore
      }

      setIsVerifyingEmail(false);
      setOpenSection(null);
      setScreen('select-type');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid code or server verification error';
      setOtpError(msg);
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  // Handle candidate login with Full Name (with device check)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = loginName.trim();

    if (!cleanName) {
      setLoginError('Please enter your accredited Full Name.');
      return;
    }
    if (cleanName.length < 2) {
      setLoginError('Name must be at least 2 characters.');
      return;
    }

    const currentDeviceId = getOrCreateDeviceId();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          deviceId: currentDeviceId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.requiresNewRegistration) {
          // A change in device requires new registration!
          setAuthMode('create');
          setCreateName(data.candidateName || cleanName);
          setDeviceNotice(data.error || 'New device detected. Accessing from a new device requires registration and email verification.');
          setCreateError(data.error || 'New device detected. Please complete registration to bind this device.');
          return;
        }
        throw new Error(data.error || 'Login failed');
      }

      setLoginError('');
      setDeviceNotice('');
      const user: CandidateUser = {
        email: data.user?.email || '',
        name: data.user?.name || cleanName,
        idNumber: data.user?.idNumber || '',
        deviceId: currentDeviceId,
        isVerified: true,
        loggedInAt: Date.now(),
      };
      setCandidateUser(user);
      try {
        localStorage.setItem(STORAGE_KEY_CANDIDATE, JSON.stringify(user));
      } catch {
        // ignore
      }
      setOpenSection(null);
      setScreen('select-type');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed';
      setLoginError(msg);
    }
  };

  const handleLogout = () => {
    setCandidateUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY_CANDIDATE);
      localStorage.removeItem(STORAGE_KEY_SESSION);
    } catch {
      // ignore
    }
    setLoginName('');
    setLoginError('');
    setCreateName('');
    setMatchedCandidate(null);
    setCreateError('');
    setDeviceNotice('');
    setIsVerifyingEmail(false);
    setOtpInput('');
    setOtpError('');
    setAuthMode('login');
    setScreen('login');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Start a new exam attempt
  const startFreshExam = (typeId: string) => {
    if (!candidateUser) {
      setScreen('login');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const qType = QUESTION_TYPES.find((qt) => qt.id === typeId) || QUESTION_TYPES[0];
    const duration = getExamDurationSeconds(qType.questions.length);
    const now = Date.now();
    setSelectedTypeId(typeId);
    setAnswers({});
    setCurrentQuestion(1);
    setStartedAt(now);
    setRemainingSeconds(duration);
    setFiveMinWarningShown(false);
    setFiveMinBannerVisible(false);
    setShowSubmitConfirmModal(false);
    setMobileNavOpen(false);

    const session: ActiveExamSession = {
      questionTypeId: typeId,
      startedAt: now,
      durationSeconds: duration,
      answers: {},
      currentQuestion: 1,
    };
    try {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
    } catch {
      // ignore
    }

    setScreen('exam');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Select or change an option for a question
  const handleSelectOption = (questionNumber: number, option: OptionKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNumber]: option,
    }));
    setCurrentQuestion(questionNumber);
  };

  // Clear an answer so student can leave a question unanswered if desired
  const handleClearAnswer = (questionNumber: number) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionNumber];
      return next;
    });
    setCurrentQuestion(questionNumber);
  };

  // Jump to a specific question number (1..totalQuestions)
  const jumpToQuestion = (questionNumber: number) => {
    setCurrentQuestion(questionNumber);
    setMobileNavOpen(false);
    isScrollingFromClick.current = true;

    const target = document.getElementById(`question-block-${questionNumber}`);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      isScrollingFromClick.current = false;
    }, 600);
  };

  // Handle Submit Exam button click
  const handleSubmitExamClick = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount >= totalQuestions) {
      finalizeSubmission();
    } else {
      setShowSubmitConfirmModal(true);
    }
  };

  // Calculate score metrics
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = Math.max(0, totalQuestions - answeredCount);

  const correctCount = questions.reduce((acc, q) => {
    return answers[q.number] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const wrongCount = totalQuestions - correctCount; // Unanswered questions count as wrong
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100 * 10) / 10 : 0;
  const incorrectQuestions = questions.filter((q) => answers[q.number] !== q.correctAnswer);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-150">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Zone 1: Home Button + Brand Title */}
          <div className="min-w-0 flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={goToWelcomePage}
              aria-label="Go to Welcome Page"
              className="min-h-[40px] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-800 dark:hover:bg-emerald-950/50 dark:hover:border-emerald-500 dark:hover:text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
            >
              <Home className="w-4 h-4 shrink-0" />
              <span>Home</span>
            </button>

            <button
              type="button"
              onClick={goToWelcomePage}
              className="font-display font-bold text-sm sm:text-lg tracking-tight text-slate-900 dark:text-white truncate hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
            >
              ASCONS Yola · NMCN Exam Prep
            </button>
          </div>

          {/* Zone 2: Exam Live Timer & Progress (Visible during Exam) OR Nov 3rd Countdown */}
          {screen === 'exam' ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <div
                aria-live="polite"
                aria-label="Remaining examination time"
                className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg border font-mono-tabular font-semibold text-sm sm:text-base transition-colors ${
                  remainingSeconds <= 300
                    ? 'bg-red-50 border-red-300 text-red-700 dark:bg-red-950/60 dark:border-red-800 dark:text-red-300'
                    : 'bg-slate-100 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100'
                }`}
              >
                <Clock className="w-4 h-4 shrink-0" />
                <span>{formatCountdown(remainingSeconds)}</span>
              </div>

              <span className="hidden md:inline-block text-xs font-medium text-slate-600 dark:text-slate-400 font-mono-tabular">
                Answered: {answeredCount}/{totalQuestions}
              </span>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold">
              <Calendar className="w-4 h-4 shrink-0" />
              {examCountdown.hasCommenced ? (
                <span>NMCN Exam Commenced (3rd Nov)</span>
              ) : (
                <span className="font-mono-tabular">
                  Exam Commences 3rd Nov:{' '}
                  <strong>
                    {examCountdown.days} {examCountdown.days === 1 ? 'Day' : 'Days'}
                  </strong>{' '}
                  ({String(examCountdown.hours).padStart(2, '0')}h :{' '}
                  {String(examCountdown.minutes).padStart(2, '0')}m :{' '}
                  {String(examCountdown.seconds).padStart(2, '0')}s)
                </span>
              )}
            </div>
          )}

          {/* Zone 3: Primary Actions (Submit in Exam + Theme Toggle) */}
          <div className="flex items-center gap-2">
            {screen === 'exam' && (
              <>
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(true)}
                  aria-label="Open question navigation panel"
                  className="lg:hidden min-h-[44px] px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <Grid className="w-4 h-4" />
                  <span className="font-mono-tabular">{answeredCount}/{totalQuestions}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmitExamClick}
                  className="min-h-[44px] px-3.5 sm:px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                >
                  SUBMIT EXAM
                </button>
              </>
            )}

            {candidateUser ? (
              <div className="hidden sm:flex items-center gap-2 pl-2.5 pr-1.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-xs">
                <div className="flex flex-col text-right leading-tight max-w-[140px] lg:max-w-[190px]">
                  <span className="font-bold text-slate-800 dark:text-slate-100 truncate text-[11px]">
                    {candidateUser.name}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {candidateUser.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  title="Log Out Candidate"
                  aria-label="Log Out Candidate"
                  className="p-1 rounded text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : screen !== 'login' ? (
              <button
                type="button"
                onClick={() => {
                  setScreen('login');
                  window.scrollTo({ top: 0, behavior: 'auto' });
                }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-600/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100/70 dark:hover:bg-emerald-900/40 text-xs font-semibold transition-colors cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>Login</span>
              </button>
            ) : null}

            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors flex items-center justify-center cursor-pointer"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <img
              src={NMCN_COLLEGE_LOGO_DATA_URI}
              alt="Adamawa State College of Nursing and Midwifery Yola Logo"
              className="h-10 w-auto object-contain rounded-md bg-white p-0.5 border border-slate-200 dark:border-slate-700 shrink-0"
            />
          </div>
        </div>

        {/* 5-Minute Remaining Noticeable Warning Bar */}
        {screen === 'exam' && (fiveMinBannerVisible || remainingSeconds <= 300) && (
          <div
            role="alert"
            className="bg-amber-500 text-slate-950 px-4 py-2 text-center font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 border-t border-amber-600/20"
          >
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>⚠️ 5 MINUTES REMAINING — Review and complete your answers before automatic submission.</span>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* SCREEN 1: WELCOME HOMEPAGE */}
        {screen === 'welcome' && (
          <section className="relative flex-1 flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20 overflow-hidden">
            {/* Full-Viewport Background Slideshow (Sliding from both Left and Right):
                Slide 0: Current Provost / College Photograph
                Slide 1: Adamawa State College of Nursing and Midwifery Yola Logo (Full Screen)
                Slide 2: Official Nursing and Midwifery Council of Nigeria (NMCN) Logo (Full Screen) */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
              <div
                className="flex w-[300%] h-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${(bgSlideIndex * 100) / 3}%)` }}
              >
                {/* Slide 0: Provost / College Photo Extended Full Screen */}
                <div className="w-1/3 h-full relative shrink-0 overflow-hidden">
                  <img
                    src={PROVOST_LANDSCAPE_DATA_URI}
                    alt="Adamawa State College of Nursing Sciences, Yola"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Slide 1: School Logo Extended to Fit Whole Screen */}
                <div className="w-1/3 h-full relative shrink-0 overflow-hidden bg-white">
                  <img
                    src={NMCN_COLLEGE_LOGO_DATA_URI}
                    alt="Adamawa State College of Nursing and Midwifery Yola Logo"
                    className="w-full h-full object-fill"
                  />
                </div>

                {/* Slide 2: Real NMCN Logo Extended to Fit Whole Screen */}
                <div className="w-1/3 h-full relative shrink-0 overflow-hidden bg-white">
                  <img
                    src={NMCN_OFFICIAL_LOGO_DATA_URI}
                    alt="Nursing and Midwifery Council of Nigeria (NMCN) Official Logo"
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>

              {/* Dark gradient overlay so the text sits directly on the sliding background images with clear legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/65 to-slate-950/85 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-3xl w-full py-6 sm:py-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <p className="text-sm sm:text-base font-bold text-emerald-400 tracking-wide pt-1 drop-shadow-md">
                  Adamawa State College of Nursing Sciences, Yola
                </p>
                <img
                  src={NMCN_COLLEGE_LOGO_DATA_URI}
                  alt="Adamawa State College of Nursing and Midwifery Yola Logo"
                  className="h-16 sm:h-20 w-auto object-contain rounded-xl bg-white p-1.5 shadow-lg shrink-0"
                />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6 text-balance drop-shadow-lg">
                Welcome to NMCN professional examination preparation portal.
              </h1>

              <p className="text-lg sm:text-xl text-white/95 font-medium leading-relaxed mb-8 drop-shadow-md">
                This portal contains various past questions which has been designed and timed to guide you through your preparatory studies. The college wishes you best of luck.
              </p>

              {/* Daily Examination Countdown (3rd November) directly on background */}
              <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-950/55 backdrop-blur-xs border border-white/25">
                <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Official Examination Commences: 3rd November</span>
                </div>

                {examCountdown.hasCommenced ? (
                  <p className="text-lg sm:text-xl font-bold text-white">
                    The NMCN Professional Examination has commenced. Best of luck!
                  </p>
                ) : (
                  <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg">
                    <div className="rounded-xl bg-white/10 border border-white/20 px-3 py-2.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-extrabold text-white leading-none">
                        {examCountdown.days}
                      </div>
                      <div className="text-[11px] sm:text-xs font-semibold text-emerald-300 uppercase tracking-wider mt-1">
                        {examCountdown.days === 1 ? 'Day' : 'Days'}
                      </div>
                    </div>

                    <div className="rounded-xl bg-white/10 border border-white/20 px-3 py-2.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-extrabold text-white leading-none">
                        {String(examCountdown.hours).padStart(2, '0')}
                      </div>
                      <div className="text-[11px] sm:text-xs font-semibold text-white/80 uppercase tracking-wider mt-1">
                        Hours
                      </div>
                    </div>

                    <div className="rounded-xl bg-white/10 border border-white/20 px-3 py-2.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-extrabold text-white leading-none">
                        {String(examCountdown.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-[11px] sm:text-xs font-semibold text-white/80 uppercase tracking-wider mt-1">
                        Minutes
                      </div>
                    </div>

                    <div className="rounded-xl bg-white/10 border border-white/20 px-3 py-2.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-extrabold text-emerald-400 leading-none">
                        {String(examCountdown.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-[11px] sm:text-xs font-semibold text-emerald-300 uppercase tracking-wider mt-1">
                        Seconds
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-5 border-t border-white/25 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="text-xs sm:text-sm font-semibold text-white/90 drop-shadow-xs">
                    <span>2,100 Unique NMCN Questions</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>{QUESTION_TYPES.length} Practice Types (Sections A, B & C)</span>
                  </div>

                  {/* Background Slideshow Indicator Dots */}
                  <div className="flex items-center gap-2" role="tablist" aria-label="Background Slideshow">
                    {[
                      { idx: 0, label: 'College Photo' },
                      { idx: 1, label: 'School Logo' },
                      { idx: 2, label: 'NMCN Logo' },
                    ].map((slide) => (
                      <button
                        key={slide.idx}
                        type="button"
                        onClick={() => setBgSlideIndex(slide.idx)}
                        aria-label={`Show ${slide.label} background`}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          bgSlideIndex === slide.idx
                            ? 'w-6 bg-emerald-400'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpenSection(null);
                    setScreen('login');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-base tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
                >
                  <span>CONTINUE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Powered by smach tech attribution */}
              <div className="mt-6 text-center">
                <span className="text-[11px] sm:text-xs text-white/75 font-medium tracking-wide drop-shadow-xs">
                  powered by <span className="font-semibold text-white">smach tech</span>
                </span>
              </div>
            </div>
          </section>
        )}

        {/* SCREEN: CANDIDATE LOGIN & CREATE ACCOUNT WITH OTP VERIFICATION */}
        {screen === 'login' && (
          <section className="flex-1 flex items-center justify-center px-4 py-8 sm:py-16">
            <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {/* College & Council Badges */}
              <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <img
                    src={NMCN_COLLEGE_LOGO_DATA_URI}
                    alt="ASCONS Yola Logo"
                    className="h-10 w-auto object-contain rounded-md bg-white p-0.5 border border-slate-200 dark:border-slate-700 shrink-0"
                  />
                  <div>
                    <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      ASCONS Yola
                    </h2>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                      Candidate Examination Portal
                    </p>
                  </div>
                </div>
                <img
                  src={NMCN_OFFICIAL_LOGO_DATA_URI}
                  alt="NMCN Official Logo"
                  className="h-9 w-auto object-contain rounded-md bg-white p-0.5 border border-slate-200 dark:border-slate-700 shrink-0"
                />
              </div>

              {/* Mode Switcher: Create Account or Login */}
              <div className="flex p-1 mb-6 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login');
                    setIsVerifyingEmail(false);
                    setLoginError('');
                    setCreateError('');
                  }}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    authMode === 'login'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('create');
                    setIsVerifyingEmail(false);
                    setLoginError('');
                    setCreateError('');
                  }}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    authMode === 'create'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Active candidate notice if already logged in */}
              {candidateUser && !isVerifyingEmail && (
                <div className="mb-5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/70 text-xs text-emerald-900 dark:text-emerald-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="block font-semibold">Currently logged in:</span>
                    <span className="truncate block font-semibold text-emerald-800 dark:text-emerald-300">
                      {candidateUser.name} · {candidateUser.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenSection(null);
                      setScreen('select-type');
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    className="shrink-0 px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold text-[11px] hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Proceed →
                  </button>
                </div>
              )}

              {/* Device Verification Notice Banner */}
              {deviceNotice && (
                <div
                  role="alert"
                  className="mb-5 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5"
                >
                  <Smartphone className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div className="leading-snug">
                    <span className="font-bold block uppercase tracking-wider text-[11px]">Device Verification Required</span>
                    <span>{deviceNotice}</span>
                  </div>
                </div>
              )}

              {/* CASE: CREATE ACCOUNT / REGISTER DEVICE (NAME ONLY) */}
              {authMode === 'create' ? (
                <div>
                  <div className="mb-6">
                    <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                      Register Candidate Device
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Enter your accredited Full Name. Your official email will be found automatically and an OTP code sent to verify and bind this device.
                    </p>
                  </div>

                  {/* Error Banner */}
                  {createError && (
                    <div
                      role="alert"
                      className="mb-5 p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-start gap-2"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{createError}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Accredited Name Input */}
                    <div>
                      <label
                        htmlFor="create-name-input"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Accredited Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="create-name-input"
                          type="text"
                          required
                          autoComplete="name"
                          value={createName}
                          disabled={isVerifyingEmail || isSendingOtp}
                          onChange={(e) => {
                            setCreateName(e.target.value);
                            if (createError) setCreateError('');
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !isVerifyingEmail && !isSendingOtp) {
                              e.preventDefault();
                              handleNameLookupAndSendOtp();
                            }
                          }}
                          placeholder="e.g. Nelson Emmanuel Chams"
                          className="w-full min-h-[46px] pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:opacity-70 disabled:bg-slate-100 dark:disabled:bg-slate-800/60"
                        />
                      </div>
                    </div>

                    {/* WHEN IN OTP VERIFICATION MODE */}
                    {isVerifyingEmail ? (
                      <div className="space-y-4 pt-1">
                        {/* Dispatched to Registered Email Banner */}
                        <div className="p-4 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              Verification Code Sent
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono-tabular font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">
                              <Clock className="w-3 h-3" />
                              {Math.floor(otpRemainingSeconds / 60)}:
                              {String(otpRemainingSeconds % 60).padStart(2, '0')}
                            </span>
                          </div>
                          <div className="font-semibold text-emerald-950 dark:text-emerald-100 text-sm">
                            {targetEmail || matchedCandidate?.email}
                          </div>
                          <p className="mt-1 text-[11px] text-emerald-800 dark:text-emerald-300 leading-relaxed">
                            {otpInfoMessage || 'Check your email inbox (and spam/junk folder) for the 6-digit code. Valid for 5 minutes.'}
                          </p>
                        </div>

                        {/* Remaining Attempts Warning */}
                        {remainingAttempts !== null && (
                          <div
                            role="alert"
                            className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2"
                          >
                            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                            <span>
                              Incorrect code entered. <strong>{remainingAttempts}</strong> {remainingAttempts === 1 ? 'attempt' : 'attempts'} remaining before lock.
                            </span>
                          </div>
                        )}

                        {/* Place For Insert OTP */}
                        <form onSubmit={handleVerifyAndLogin} className="space-y-4">
                          <div>
                            <label
                              htmlFor="otp-code-input"
                              className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 text-center"
                            >
                              Insert 6-Digit Verification Code <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                              <input
                                id="otp-code-input"
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                autoFocus
                                value={otpInput}
                                disabled={isVerifyingOtp}
                                onChange={(e) => {
                                  const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                                  setOtpInput(val);
                                  if (otpError) setOtpError('');
                                }}
                                placeholder="------"
                                className="w-full min-h-[50px] pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-center text-2xl font-mono-tabular font-extrabold tracking-[0.35em] focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:opacity-60"
                              />
                            </div>
                            {otpError && (
                              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center justify-center gap-1 font-medium">
                                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                                <span>{otpError}</span>
                              </p>
                            )}
                          </div>

                          <button
                            type="submit"
                            disabled={isVerifyingOtp || otpRemainingSeconds <= 0}
                            className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isVerifyingOtp ? (
                              <RefreshCw className="w-4 h-4 shrink-0 animate-spin" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 shrink-0" />
                            )}
                            <span>{isVerifyingOtp ? 'VERIFYING CODE...' : 'VERIFY OTP & BIND THIS DEVICE'}</span>
                          </button>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              disabled={resendCooldown > 0 || isSendingOtp}
                              onClick={() => handleNameLookupAndSendOtp()}
                              className={`flex-1 min-h-[40px] px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                                resendCooldown > 0 || isSendingOtp
                                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                                  : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer'
                              }`}
                            >
                              <RefreshCw className={`w-3.5 h-3.5 shrink-0 ${isSendingOtp ? 'animate-spin' : ''}`} />
                              <span>
                                {resendCooldown > 0 ? `Resend Code (${resendCooldown}s)` : 'Resend Code'}
                              </span>
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setIsVerifyingEmail(false);
                                setOtpInput('');
                                setOtpError('');
                                setRemainingAttempts(null);
                              }}
                              className="flex-1 min-h-[40px] px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                            >
                              Change Name
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      /* Initial State: Candidate Enters Name and Requests Verification */
                      <div className="pt-2 space-y-2.5">
                        <button
                          type="button"
                          disabled={isSendingOtp}
                          onClick={() => handleNameLookupAndSendOtp()}
                          className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md disabled:opacity-60"
                        >
                          {isSendingOtp ? (
                            <RefreshCw className="w-4 h-4 shrink-0 animate-spin" />
                          ) : (
                            <Send className="w-4 h-4 shrink-0" />
                          )}
                          <span>{isSendingOtp ? 'SENDING VERIFICATION CODE...' : 'REGISTER & SEND VERIFICATION CODE'}</span>
                        </button>
                      </div>
                    )}

                    <div className="text-center pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode('login');
                          setCreateError('');
                          setIsVerifyingEmail(false);
                        }}
                        className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
                      >
                        Already registered on this device? Switch to Login
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={goToWelcomePage}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Home className="w-4 h-4 shrink-0" />
                      <span>Back to Home</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* CASE: LOGIN (NAME ONLY ON REGISTERED DEVICE) */
                <div>
                  <div className="mb-6">
                    <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                      Candidate Login
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Enter your accredited Full Name to log in on this registered device.
                    </p>
                  </div>

                  {/* Login Error Banner */}
                  {loginError && (
                    <div
                      role="alert"
                      className="mb-5 p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-start gap-2"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="candidate-login-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Accredited Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="candidate-login-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={loginName}
                          onChange={(e) => {
                            setLoginName(e.target.value);
                            if (loginError) setLoginError('');
                          }}
                          placeholder="e.g. Nelson Emmanuel Chams"
                          className="w-full min-h-[46px] pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        />
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>A change in device requires new registration and email verification code.</span>
                      </p>
                    </div>

                    <div className="pt-2 space-y-2.5">
                      <button
                        type="submit"
                        className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                      >
                        <span>LOGIN ON THIS DEVICE</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </button>

                      <div className="text-center pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setAuthMode('create');
                            setLoginError('');
                          }}
                          className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
                        >
                          New device or new candidate? Register this device
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={goToWelcomePage}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Home className="w-4 h-4 shrink-0" />
                        <span>Back to Home</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}


              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  powered by <span className="font-semibold text-slate-700 dark:text-slate-300">smach tech</span>
                </span>
              </div>
            </div>
          </section>
        )}

        {/* SCREEN 2: QUESTION-TYPE SELECTION */}
        {screen === 'select-type' && (
          <section className="flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
            <div className="max-w-2xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Select Question Type
                </h1>
                <button
                  type="button"
                  onClick={goToWelcomePage}
                  className="min-h-[40px] px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Home className="w-4 h-4 shrink-0" />
                  <span>Home</span>
                </button>
              </div>

              {/* Candidate Info Badge */}
              {candidateUser && (
                <div className="mb-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate leading-tight">
                      <span className="font-semibold text-slate-900 dark:text-white block truncate">
                        Candidate: {candidateUser.name}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                        {candidateUser.email}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setScreen('login');
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    className="shrink-0 text-emerald-700 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
                  >
                    Switch Account
                  </button>
                </div>
              )}

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Click on a section below to view its question types, select one, and click Start.
              </p>

              <div role="radiogroup" aria-label="Question Type" className="space-y-4 mb-8">
                {(['Section A', 'Section B', 'Section C'] as const).map((sectionName) => {
                  const sectionTypes = QUESTION_TYPES.filter((qType) => qType.section === sectionName);
                  if (sectionTypes.length === 0) return null;
                  const isExpanded = openSection === sectionName;
                  const selectedInThisSection = sectionTypes.find((qType) => qType.id === selectedTypeId);

                  return (
                    <div
                      key={sectionName}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30 overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setOpenSection((prev) => (prev === sectionName ? null : sectionName))
                        }
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h2 className="font-display text-base sm:text-lg font-bold text-emerald-800 dark:text-emerald-400 tracking-tight">
                              {sectionName}
                            </h2>
                            {selectedInThisSection && (
                              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                                Selected: {selectedInThisSection.name}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">
                            {isExpanded
                              ? `Showing ${sectionTypes.length} question types (${sectionTypes.reduce((acc, t) => acc + t.questions.length, 0)} questions)`
                              : `Click to view ${sectionTypes.length} question types (${sectionTypes.reduce((acc, t) => acc + t.questions.length, 0)} questions)`}
                          </span>
                        </div>

                        <div className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {sectionTypes.map((qType) => {
                            const isSelected = qType.id === selectedTypeId;
                            return (
                              <button
                                key={qType.id}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                onClick={() => setSelectedTypeId(qType.id)}
                                className={`w-full min-h-[54px] px-4 py-3.5 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'bg-emerald-50/90 border-emerald-600 text-slate-900 dark:bg-emerald-950/50 dark:border-emerald-500 dark:text-white shadow-2xs'
                                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/80 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800'
                                }`}
                              >
                                <div>
                                  <span className="font-semibold text-sm sm:text-base leading-snug block">
                                    {qType.name}
                                  </span>
                                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                    {qType.section} · {qType.questions.length} Questions
                                  </span>
                                </div>
                                <span
                                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                    isSelected
                                      ? 'border-emerald-600 bg-emerald-600 text-white dark:border-emerald-400 dark:bg-emerald-500'
                                      : 'border-slate-300 dark:border-slate-600'
                                  }`}
                                >
                                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => startFreshExam(selectedTypeId)}
                className="w-full min-h-[52px] py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-base tracking-wide transition-colors cursor-pointer shadow-xs"
              >
                START ({currentQuestionType.section} — {currentQuestionType.name} · {currentQuestionType.questions.length} Questions)
              </button>
            </div>
          </section>
        )}

        {/* SCREEN 3: 150-QUESTION TIMED EXAMINATION */}
        {screen === 'exam' && (
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col lg:flex-row gap-8 items-start">
            {/* Left / Main Column: All Questions on one page */}
            <div className="w-full lg:flex-1 space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {currentQuestionType.section} — {currentQuestionType.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Answer all {totalQuestions} multiple-choice questions. Unanswered questions count as wrong upon submission.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs font-mono-tabular text-slate-600 dark:text-slate-400">
                    Total: {totalQuestions} Questions · Time: {formatCountdown(totalExamDuration)} ({Math.ceil(totalExamDuration / 60)} Mins)
                  </div>
                  <button
                    type="button"
                    onClick={goToWelcomePage}
                    className="min-h-[38px] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <Home className="w-3.5 h-3.5 shrink-0" />
                    <span>Home</span>
                  </button>
                </div>
              </div>

              {/* Questions 1 to totalQuestions */}
              <div className="space-y-5">
                {questions.map((q) => {
                  const selectedOption = answers[q.number];
                  const isCurrent = currentQuestion === q.number;
                  const options: { key: OptionKey; text: string }[] = [
                    { key: 'A', text: q.optionA },
                    { key: 'B', text: q.optionB },
                    { key: 'C', text: q.optionC },
                    { key: 'D', text: q.optionD },
                  ];

                  return (
                    <article
                      key={q.number}
                      id={`question-block-${q.number}`}
                      onClick={() => setCurrentQuestion(q.number)}
                      className={`bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 border transition-colors ${
                        isCurrent
                          ? 'border-emerald-600/70 dark:border-emerald-500/70'
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono-tabular font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                            Question {q.number}
                          </span>
                          <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
                            ·
                          </span>
                          <span
                            className={`text-xs font-medium ${
                              selectedOption
                                ? 'text-emerald-700 dark:text-emerald-400'
                                : 'text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            {selectedOption ? `Answered (${selectedOption})` : 'Unanswered'}
                          </span>
                        </div>

                        {selectedOption && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClearAnswer(q.number);
                            }}
                            className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 underline cursor-pointer py-1 px-2"
                          >
                            Clear selection
                          </button>
                        )}
                      </div>

                      <p className="text-base sm:text-[17px] text-slate-900 dark:text-slate-100 font-medium leading-relaxed mb-4">
                        {q.question}
                      </p>

                      <div className="space-y-2.5" role="radiogroup" aria-label={`Question ${q.number} options`}>
                        {options.map((opt) => {
                          const isSelected = selectedOption === opt.key;
                          return (
                            <button
                              key={opt.key}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectOption(q.number, opt.key);
                              }}
                              className={`w-full min-h-[48px] p-3.5 rounded-lg border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-emerald-50/90 border-emerald-600 text-slate-900 dark:bg-emerald-950/50 dark:border-emerald-500 dark:text-white'
                                  : 'bg-slate-50/60 border-slate-200/90 text-slate-800 hover:bg-slate-100/80 dark:bg-slate-800/40 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800'
                              }`}
                            >
                              <span
                                className={`w-6 h-6 rounded-md font-mono-tabular text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border ${
                                  isSelected
                                    ? 'bg-emerald-700 border-emerald-700 text-white dark:bg-emerald-500 dark:border-emerald-500 dark:text-slate-950'
                                    : 'bg-white border-slate-300 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                                }`}
                              >
                                {opt.key}
                              </span>
                              <span className="text-sm sm:text-base leading-snug">{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Bottom Submit Exam Section */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  You have answered{' '}
                  <span className="font-mono-tabular font-bold text-slate-900 dark:text-white">
                    {answeredCount}
                  </span>{' '}
                  of {totalQuestions} questions ({unansweredCount} unanswered).
                </div>
                <button
                  type="button"
                  onClick={handleSubmitExamClick}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-base tracking-wide transition-colors cursor-pointer"
                >
                  SUBMIT EXAM
                </button>
              </div>
            </div>

            {/* Right Column: Desktop Sticky Question Navigation Panel (1 - totalQuestions) */}
            <aside
              aria-label="Question Navigation Panel"
              className="hidden lg:block w-80 shrink-0 sticky top-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  Question Navigation (1–{totalQuestions})
                </h2>
                <span className="text-xs font-mono-tabular text-slate-500 dark:text-slate-400">
                  {answeredCount}/{totalQuestions}
                </span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs ring-2 ring-amber-500 bg-white dark:bg-slate-800 inline-block" />
                  Current
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-emerald-700 dark:bg-emerald-600 inline-block" />
                  Answered ({answeredCount})
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 inline-block" />
                  Unanswered ({unansweredCount})
                </span>
              </div>

              <div className="grid grid-cols-6 gap-1.5 max-h-[calc(100vh-290px)] overflow-y-auto pr-1">
                {questions.map((q) => {
                  const isAnswered = Boolean(answers[q.number]);
                  const isCurrent = currentQuestion === q.number;
                  return (
                    <button
                      key={q.number}
                      type="button"
                      onClick={() => jumpToQuestion(q.number)}
                      aria-label={`Jump to question ${q.number}${isAnswered ? ', answered' : ', unanswered'}${isCurrent ? ', current question' : ''}`}
                      className={`h-9 rounded-md font-mono-tabular text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer ${
                        isAnswered
                          ? 'bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-600 dark:text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      } ${
                        isCurrent
                          ? 'ring-2 ring-amber-500 ring-offset-1 dark:ring-offset-slate-900 font-bold'
                          : ''
                      }`}
                    >
                      {q.number}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        )}

        {/* SCREEN 4: RESULT PAGE, INCORRECT QUESTIONS & FULL 150-QUESTION REVIEW */}
        {screen === 'result' && (
          <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
            {/* Primary Result Card */}
            <section
              aria-labelledby="result-heading"
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                    {currentQuestionType.section} — {currentQuestionType.name}
                  </p>
                  <h1
                    id="result-heading"
                    className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
                  >
                    Your Result
                  </h1>
                  {candidateUser && (
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                        <User className="w-3.5 h-3.5" />
                        Candidate: <strong>{candidateUser.name}</strong>
                      </span>
                      <span className="text-slate-400">·</span>
                      <span>{candidateUser.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Score
                  </div>
                  <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {correctCount}/{totalQuestions}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Percentage
                  </div>
                  <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                    {percentage}%
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Correct
                  </div>
                  <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                    {correctCount}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Wrong
                  </div>
                  <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">
                    {wrongCount}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Retry & Navigation */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => startFreshExam(selectedTypeId)}
                  className="min-h-[48px] px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>RETRY</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setScreen('select-type');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="min-h-[48px] px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer"
                >
                  Change Question Type
                </button>

                <button
                  type="button"
                  onClick={goToWelcomePage}
                  className="min-h-[48px] px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Home className="w-4 h-4 shrink-0" />
                  <span>Home</span>
                </button>
              </div>
            </section>

            {/* Full 150-Question Examination Review & Corrections (Shown Immediately) */}
            <section
              aria-labelledby="full-review-heading"
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs"
            >
              <div className="mb-6">
                <h2
                  id="full-review-heading"
                  className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1"
                >
                  All {totalQuestions} Questions, Answers & Corrections
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Complete review of all {totalQuestions} questions showing every option, your selected answer, and the correct answer.
                </p>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {questions.map((q) => {
                  const studentAns = answers[q.number];
                  const isCorrect = studentAns === q.correctAnswer;
                  const options: { key: OptionKey; text: string }[] = [
                    { key: 'A', text: q.optionA },
                    { key: 'B', text: q.optionB },
                    { key: 'C', text: q.optionC },
                    { key: 'D', text: q.optionD },
                  ];

                  return (
                    <div key={q.number} className="py-6 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                        )}
                        <span className="font-mono-tabular font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          Question {q.number}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
                          ·
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            isCorrect
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : 'text-red-600 dark:text-red-400'
                          }`}
                        >
                          {isCorrect ? 'Correct' : studentAns ? 'Incorrect' : 'Unanswered (Wrong)'}
                        </span>
                      </div>

                      <p className="text-base font-medium text-slate-900 dark:text-slate-100 mb-3.5 leading-relaxed">
                        {q.question}
                      </p>

                      {/* All Options A, B, C, D with clear visual correction */}
                      <div className="space-y-2 mb-4">
                        {options.map((opt) => {
                          const isOptionCorrect = opt.key === q.correctAnswer;
                          const isStudentPicked = opt.key === studentAns;

                          let boxClass =
                            'bg-slate-50/70 border-slate-200/80 text-slate-700 dark:bg-slate-800/40 dark:border-slate-800 dark:text-slate-300';
                          let badgeClass =
                            'bg-white border-slate-300 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300';

                          if (isOptionCorrect) {
                            boxClass =
                              'bg-emerald-50/90 border-emerald-600 text-slate-900 dark:bg-emerald-950/50 dark:border-emerald-500 dark:text-white font-medium';
                            badgeClass =
                              'bg-emerald-700 border-emerald-700 text-white dark:bg-emerald-500 dark:border-emerald-500 dark:text-slate-950';
                          } else if (isStudentPicked && !isOptionCorrect) {
                            boxClass =
                              'bg-red-50/90 border-red-500 text-slate-900 dark:bg-red-950/50 dark:border-red-500 dark:text-white';
                            badgeClass =
                              'bg-red-600 border-red-600 text-white dark:bg-red-500 dark:border-red-500 dark:text-white';
                          }

                          return (
                            <div
                              key={opt.key}
                              className={`p-3 rounded-lg border flex items-start justify-between gap-3 text-sm sm:text-base ${boxClass}`}
                            >
                              <div className="flex items-start gap-3">
                                <span
                                  className={`w-6 h-6 rounded-md font-mono-tabular text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border ${badgeClass}`}
                                >
                                  {opt.key}
                                </span>
                                <span className="leading-snug">{opt.text}</span>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0 text-xs font-semibold">
                                {isOptionCorrect && (
                                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-200">
                                    Correct Answer
                                  </span>
                                )}
                                {isStudentPicked && !isOptionCorrect && (
                                  <span className="px-2 py-0.5 rounded-md bg-red-100 text-red-800 dark:bg-red-900/70 dark:text-red-200">
                                    Your Choice
                                  </span>
                                )}
                                {isStudentPicked && isOptionCorrect && (
                                  <span className="px-2 py-0.5 rounded-md bg-emerald-200/80 text-emerald-900 dark:bg-emerald-800 dark:text-emerald-100">
                                    Your Choice
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="space-y-1.5 text-sm bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800">
                        <div
                          className={`font-medium ${
                            isCorrect
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : 'text-red-700 dark:text-red-400'
                          }`}
                        >
                          Your answer:{' '}
                          {studentAns
                            ? `${studentAns}. ${getOptionText(q, studentAns)}`
                            : 'Unanswered (No option selected)'}
                        </div>

                        <div className="text-emerald-700 dark:text-emerald-400 font-semibold">
                          Correction (Correct Answer): {q.correctAnswer}. {getOptionText(q, q.correctAnswer)}
                        </div>

                        {q.explanation && (
                          <div className="pt-1.5 text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              Explanation:{' '}
                            </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Retry & Navigation Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => startFreshExam(selectedTypeId)}
                  className="min-h-[48px] px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>RETRY</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setScreen('select-type');
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }}
                  className="min-h-[48px] px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm transition-colors cursor-pointer"
                >
                  Change Question Type
                </button>

                <button
                  type="button"
                  onClick={goToWelcomePage}
                  className="min-h-[48px] px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Home className="w-4 h-4 shrink-0" />
                  <span>Home</span>
                </button>
              </div>
            </section>

            {/* Summary of Incorrectly Answered Questions for Quick Revision */}
            <section
              aria-labelledby="incorrect-questions-heading"
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs"
            >
              <div className="mb-6">
                <h2
                  id="incorrect-questions-heading"
                  className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1"
                >
                  Incorrectly Answered Questions ({incorrectQuestions.length})
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Questions answered wrongly or left unanswered requiring revision.
                </p>
              </div>

              {incorrectQuestions.length === 0 ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-medium text-sm">
                  Excellent performance! You answered all {totalQuestions} questions correctly.
                </div>
              ) : (
                <div className="divide-y divide-slate-200 dark:divide-slate-800">
                  {incorrectQuestions.map((q) => {
                    const studentAns = answers[q.number];
                    return (
                      <div key={q.number} className="py-5 first:pt-0 last:pb-0">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                          <span className="font-mono-tabular font-bold text-sm text-slate-900 dark:text-white">
                            Question {q.number}
                          </span>
                        </div>
                        <p className="text-base font-medium text-slate-900 dark:text-slate-100 mb-3">
                          {q.question}
                        </p>
                        <div className="space-y-1.5 text-sm">
                          <div className="text-red-700 dark:text-red-400 font-medium">
                            Your answer:{' '}
                            {studentAns
                              ? `${studentAns}. ${getOptionText(q, studentAns)}`
                              : 'Unanswered'}
                          </div>
                          <div className="text-emerald-700 dark:text-emerald-400 font-semibold">
                            Correction (Correct Answer): {q.correctAnswer}. {getOptionText(q, q.correctAnswer)}
                          </div>
                          {q.explanation && (
                            <div className="pt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                              <span className="font-semibold text-slate-800 dark:text-slate-200">
                                Explanation:{' '}
                              </span>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Bottom Footer */}
      <footer className="relative z-10 py-3.5 px-4 text-center border-t border-slate-200/60 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-xs text-slate-500 dark:text-slate-400">
        <p className="tracking-wide text-xs">
          powered by <span className="font-semibold text-slate-700 dark:text-slate-200">smach tech</span>
        </p>
      </footer>

      {/* Mobile Question Navigation Drawer (1 - 150) */}
      {screen === 'exam' && mobileNavOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Question Navigation Panel"
          className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/50 backdrop-blur-xs"
        >
          <div className="bg-white dark:bg-slate-900 rounded-t-2xl border-t border-slate-200 dark:border-slate-800 p-4 max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  Question Navigation (1–{totalQuestions})
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Answered: {answeredCount} · Unanswered: {unansweredCount}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close question navigation"
                className="min-h-[44px] min-w-[44px] rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 py-2.5">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs ring-2 ring-amber-500 bg-white dark:bg-slate-800 inline-block" />
                Current
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-emerald-700 dark:bg-emerald-600 inline-block" />
                Answered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 inline-block" />
                Unanswered
              </span>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2 overflow-y-auto py-2 pr-1">
              {questions.map((q) => {
                const isAnswered = Boolean(answers[q.number]);
                const isCurrent = currentQuestion === q.number;
                return (
                  <button
                    key={q.number}
                    type="button"
                    onClick={() => jumpToQuestion(q.number)}
                    className={`min-h-[42px] rounded-lg font-mono-tabular text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer ${
                      isAnswered
                        ? 'bg-emerald-700 text-white dark:bg-emerald-600'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    } ${
                      isCurrent
                        ? 'ring-2 ring-amber-500 ring-offset-1 dark:ring-offset-slate-900 font-bold'
                        : ''
                    }`}
                  >
                    {q.number}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Unanswered Questions Submit Confirmation Modal */}
      {screen === 'exam' && showSubmitConfirmModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-submit-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        >
          <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
            <h2
              id="confirm-submit-title"
              className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2"
            >
              Confirm Exam Submission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              You still have unanswered questions ({unansweredCount} unanswered). Are you sure you want to submit?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowSubmitConfirmModal(false)}
                className="min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={finalizeSubmission}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
