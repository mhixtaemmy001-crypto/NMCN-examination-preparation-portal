export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  number: number; // 1 to total questions
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: OptionKey;
  explanation: string;
}

export type QuestionSection = 'Section A' | 'Section B' | 'Section C';

export interface QuestionType {
  id: string;
  name: string;
  section: QuestionSection;
  questions: Question[];
}

export type AppScreen = 'welcome' | 'select-type' | 'exam' | 'result';

export interface ActiveExamSession {
  questionTypeId: string;
  startedAt: number; // Timestamp in ms when attempt began
  durationSeconds: number; // Duration in seconds
  answers: Record<number, OptionKey>; // question number -> selected option
  currentQuestion: number;
}
