import { Question, QuestionType } from '../types';
import { DOC_PART1, RawDocQuestion } from './docPart1';
import { DOC_PART2 } from './docPart2';
import { DOC_PART3 } from './docPart3';
import { DOC_PART4 } from './docPart4';
import { TYPE4_QUESTIONS } from './type4Questions';
import { TYPE6_QUESTIONS } from './type6Questions';
import { TYPE7_QUESTIONS } from './type7Questions';
import { TYPE8_QUESTIONS } from './type8Questions';
import { TYPE9_QUESTIONS } from './type9Questions';
import { TYPE10_QUESTIONS } from './type10Questions';
import { TYPE11_QUESTIONS } from './type11Questions';
import { TYPE12_QUESTIONS } from './type12Questions';
import { TYPE13_QUESTIONS } from './type13Questions';
import { TYPE14_QUESTIONS } from './type14Questions';

const ALL_DOCUMENT_QUESTIONS: RawDocQuestion[] = [
  ...DOC_PART1,
  ...DOC_PART2,
  ...DOC_PART3,
  ...DOC_PART4,
];

function numberQuestions(rawList: RawDocQuestion[]): Question[] {
  const result: Question[] = [];
  for (let i = 0; i < 150; i++) {
    const item = rawList[i % rawList.length];
    result.push({
      number: i + 1,
      question: item.question,
      optionA: item.optionA,
      optionB: item.optionB,
      optionC: item.optionC,
      optionD: item.optionD,
      correctAnswer: item.correctAnswer,
      explanation: item.explanation,
    });
  }
  return result;
}

export const QUESTION_TYPES: QuestionType[] = [
  {
    id: 'type-1',
    name: 'Type 1',
    section: 'Section A',
    questions: numberQuestions(ALL_DOCUMENT_QUESTIONS.slice(0, 150)),
  },
  {
    id: 'type-2',
    name: 'Type 2',
    section: 'Section A',
    questions: numberQuestions(ALL_DOCUMENT_QUESTIONS.slice(150, 300)),
  },
  {
    id: 'type-3',
    name: 'Type 3',
    section: 'Section A',
    questions: numberQuestions(ALL_DOCUMENT_QUESTIONS.slice(300, 450)),
  },
  {
    id: 'type-4',
    name: 'Type 4',
    section: 'Section A',
    questions: numberQuestions(TYPE4_QUESTIONS),
  },
  {
    id: 'type-5',
    name: 'Type 5',
    section: 'Section A',
    questions: numberQuestions(ALL_DOCUMENT_QUESTIONS.slice(450, 600)),
  },
  {
    id: 'type-6',
    name: 'Type 6',
    section: 'Section B',
    questions: numberQuestions(TYPE6_QUESTIONS),
  },
  {
    id: 'type-7',
    name: 'Type 7',
    section: 'Section B',
    questions: numberQuestions(TYPE7_QUESTIONS),
  },
  {
    id: 'type-8',
    name: 'Type 8',
    section: 'Section B',
    questions: numberQuestions(TYPE8_QUESTIONS),
  },
  {
    id: 'type-9',
    name: 'Type 9',
    section: 'Section B',
    questions: numberQuestions(TYPE9_QUESTIONS),
  },
  {
    id: 'type-10',
    name: 'Type 10',
    section: 'Section B',
    questions: numberQuestions(TYPE10_QUESTIONS),
  },
  {
    id: 'type-11',
    name: 'Type 11',
    section: 'Section C',
    questions: numberQuestions(TYPE11_QUESTIONS),
  },
  {
    id: 'type-12',
    name: 'Type 12',
    section: 'Section C',
    questions: numberQuestions(TYPE12_QUESTIONS),
  },
  {
    id: 'type-13',
    name: 'Type 13',
    section: 'Section C',
    questions: numberQuestions(TYPE13_QUESTIONS),
  },
  {
    id: 'type-14',
    name: 'Type 14',
    section: 'Section C',
    questions: numberQuestions(TYPE14_QUESTIONS),
  },
];
