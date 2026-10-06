export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  number: number; // 1 to 150
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: OptionKey;
  explanation: string;
}

export interface QuestionType {
  id: string;
  name: string;
  questions: Question[]; // Always 150 questions
}

export type AppScreen = 'welcome' | 'select-type' | 'exam' | 'result';

export interface ActiveExamSession {
  questionTypeId: string;
  startedAt: number; // Timestamp in ms when attempt began
  durationSeconds: number; // 4500 seconds (75 minutes)
  answers: Record<number, OptionKey>; // question number (1..150) -> selected option
  currentQuestion: number; // 1..150
}
