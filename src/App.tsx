import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Sun,
  Moon,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Download,
  RotateCcw,
  Grid,
  X,
  ArrowRight,
  Check,
} from 'lucide-react';
import { AppScreen, OptionKey, Question, ActiveExamSession } from './types';
import { QUESTION_TYPES } from './data/questionBank';
import { NMCN_COLLEGE_LOGO_DATA_URI } from './data/logoAsset';
import { generateResultPdf, getOptionText } from './utils/pdfExport';

const EXAM_DURATION_SECONDS = 4500; // 150 questions × 30 seconds = 4,500 seconds = 75 minutes (1 hr 15 mins)
const STORAGE_KEY_SESSION = 'ascons_nmcn_active_exam_v1';
const STORAGE_KEY_THEME = 'ascons_nmcn_theme_v1';

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
  const [answers, setAnswers] = useState<Record<number, OptionKey>>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(EXAM_DURATION_SECONDS);
  const [fiveMinWarningShown, setFiveMinWarningShown] = useState<boolean>(false);
  const [fiveMinBannerVisible, setFiveMinBannerVisible] = useState<boolean>(false);
  const [showSubmitConfirmModal, setShowSubmitConfirmModal] = useState<boolean>(false);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const isScrollingFromClick = useRef<boolean>(false);

  const currentQuestionType =
    QUESTION_TYPES.find((qt) => qt.id === selectedTypeId) || QUESTION_TYPES[0];
  const questions: Question[] = currentQuestionType.questions;

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
        const elapsed = Math.floor((Date.now() - saved.startedAt) / 1000);
        const left = Math.max(0, EXAM_DURATION_SECONDS - elapsed);

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
        durationSeconds: EXAM_DURATION_SECONDS,
        answers,
        currentQuestion,
      };
      try {
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      } catch {
        // ignore storage quota errors
      }
    }
  }, [screen, selectedTypeId, startedAt, answers, currentQuestion]);

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

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const left = Math.max(0, EXAM_DURATION_SECONDS - elapsed);
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
  }, [screen, startedAt, fiveMinWarningShown, finalizeSubmission]);

  // Track which question is currently in view when scrolling on the exam page
  useEffect(() => {
    if (screen !== 'exam') return;

    const handleScroll = () => {
      if (isScrollingFromClick.current) return;
      const viewportOffset = 180;
      let closestNum = 1;
      let minDistance = Infinity;

      for (let i = 1; i <= 150; i++) {
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
  }, [screen]);

  // Start a new exam attempt
  const startFreshExam = (typeId: string) => {
    const now = Date.now();
    setSelectedTypeId(typeId);
    setAnswers({});
    setCurrentQuestion(1);
    setStartedAt(now);
    setRemainingSeconds(EXAM_DURATION_SECONDS);
    setFiveMinWarningShown(false);
    setFiveMinBannerVisible(false);
    setShowSubmitConfirmModal(false);
    setMobileNavOpen(false);

    const session: ActiveExamSession = {
      questionTypeId: typeId,
      startedAt: now,
      durationSeconds: EXAM_DURATION_SECONDS,
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

  // Jump to a specific question number (1..150)
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
    if (answeredCount >= 150) {
      finalizeSubmission();
    } else {
      setShowSubmitConfirmModal(true);
    }
  };

  // Calculate score metrics
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = 150 - answeredCount;

  const correctCount = questions.reduce((acc, q) => {
    return answers[q.number] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const wrongCount = 150 - correctCount; // Unanswered questions count as wrong
  const percentage = Math.round((correctCount / 150) * 100 * 10) / 10;
  const incorrectQuestions = questions.filter((q) => answers[q.number] !== q.correctAnswer);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-150">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Zone 1: Brand Title */}
          <div className="min-w-0 flex items-center gap-3">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white truncate">
              ASCONS Yola · NMCN Exam Prep
            </span>
          </div>

          {/* Zone 2: Exam Live Timer & Progress (Visible during Exam) */}
          {screen === 'exam' && (
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
                Answered: {answeredCount}/150
              </span>
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
                  <span className="font-mono-tabular">{answeredCount}/150</span>
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
              alt="College & NMCN Official Emblem"
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
          <section className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20">
            <div className="max-w-2xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-12 shadow-xs">
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide pt-1">
                  Adamawa State College of Nursing Sciences, Yola
                </p>
                <img
                  src={NMCN_COLLEGE_LOGO_DATA_URI}
                  alt="College & NMCN Official Emblem"
                  className="h-14 sm:h-16 w-auto object-contain rounded-lg bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0 shadow-2xs"
                />
              </div>

              <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-5 text-balance">
                Welcome to NMCN professional examination preparation portal.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                This portal contains various past questions which has been designed and timed to guide you through your preparatory studies. The college wishes you best of luck.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <span>150 Multiple-Choice Questions</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>1 Hour 15 Minutes (75 Mins)</span>
                </div>

                <button
                  type="button"
                  onClick={() => setScreen('select-type')}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <span>CONTINUE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* SCREEN 2: QUESTION-TYPE SELECTION */}
        {screen === 'select-type' && (
          <section className="flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
            <div className="max-w-xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xs">
              <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Select Question Type
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Choose a question type below and click Start to begin your 150-question timed examination (1 hour 15 minutes).
              </p>

              <div role="radiogroup" aria-label="Question Type" className="space-y-3 mb-8">
                {QUESTION_TYPES.map((qType) => {
                  const isSelected = qType.id === selectedTypeId;
                  return (
                    <button
                      key={qType.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedTypeId(qType.id)}
                      className={`w-full min-h-[56px] p-4 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50/80 border-emerald-600 text-slate-900 dark:bg-emerald-950/40 dark:border-emerald-500 dark:text-white'
                          : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-slate-100 dark:bg-slate-800/40 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="font-semibold text-sm sm:text-base leading-snug">
                        {qType.name}
                      </span>
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

              <button
                type="button"
                onClick={() => startFreshExam(selectedTypeId)}
                className="w-full min-h-[52px] py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-base tracking-wide transition-colors cursor-pointer shadow-xs"
              >
                START
              </button>
            </div>
          </section>
        )}

        {/* SCREEN 3: 150-QUESTION TIMED EXAMINATION */}
        {screen === 'exam' && (
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col lg:flex-row gap-8 items-start">
            {/* Left / Main Column: All 150 Questions on one page */}
            <div className="w-full lg:flex-1 space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h1 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {currentQuestionType.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Answer all 150 multiple-choice questions. Unanswered questions count as wrong upon submission.
                  </p>
                </div>
                <div className="text-xs font-mono-tabular text-slate-600 dark:text-slate-400">
                  Total Time: 01:15:00 · 150 Marks
                </div>
              </div>

              {/* Questions 1 to 150 */}
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
                  of 150 questions ({unansweredCount} unanswered).
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

            {/* Right Column: Desktop Sticky Question Navigation Panel (1 - 150) */}
            <aside
              aria-label="Question Navigation Panel"
              className="hidden lg:block w-80 shrink-0 sticky top-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  Question Navigation (1–150)
                </h2>
                <span className="text-xs font-mono-tabular text-slate-500 dark:text-slate-400">
                  {answeredCount}/150
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
                    {currentQuestionType.name}
                  </p>
                  <h1
                    id="result-heading"
                    className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
                  >
                    Your Result
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Score
                  </div>
                  <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {correctCount}/150
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

              {/* Action Buttons: Download Result as PDF & Retry */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    generateResultPdf({
                      questionTypeName: currentQuestionType.name,
                      questions,
                      answers,
                      correctCount,
                      wrongCount,
                      percentage,
                    })
                  }
                  className="min-h-[48px] px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>DOWNLOAD RESULT AS PDF</span>
                </button>

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
                  All 150 Questions, Answers & Corrections
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Complete review of all 150 questions showing every option, your selected answer, and the correct answer.
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

              {/* Bottom Retry / Download Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    generateResultPdf({
                      questionTypeName: currentQuestionType.name,
                      questions,
                      answers,
                      correctCount,
                      wrongCount,
                      percentage,
                    })
                  }
                  className="min-h-[48px] px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>DOWNLOAD RESULT AS PDF</span>
                </button>

                <button
                  type="button"
                  onClick={() => startFreshExam(selectedTypeId)}
                  className="min-h-[48px] px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>RETRY</span>
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
                  Excellent performance! You answered all 150 questions correctly.
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
                  Question Navigation (1–150)
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
