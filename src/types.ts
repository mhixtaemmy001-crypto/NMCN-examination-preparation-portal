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

export type QuestionSection = 'Section A' | 'Section B' | 'Section C' | 'Section D';

export interface QuestionType {
  id: string;
  name: string;
  section: QuestionSection;
  questions: Question[];
}

export type AppScreen = 'welcome' | 'select-type' | 'exam' | 'result';

export type IndividualRole = 'Student Candidate' | 'Administration' | 'Exam Officer' | 'Faculty';

export interface Individual {
  id: string;
  name: string;
  email: string;
  role: IndividualRole;
  matricNo?: string;
  department?: string;
  phone?: string;
  lastUpdated?: string;
}

export interface ActiveExamSession {
  questionTypeId: string;
  startedAt: number; // Timestamp in ms when attempt began
  durationSeconds: number; // Duration in seconds
  answers: Record<number, OptionKey>; // question number -> selected option
  currentQuestion: number;
  candidateId?: string;
  candidateName?: string;
  candidateEmail?: string;
}
