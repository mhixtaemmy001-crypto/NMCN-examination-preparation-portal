import { Question, QuestionType, QuestionSection } from '../types';
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
import { CURRICULUM_COURSE_TYPES } from './curriculumCourses';

interface RawTypeConfig {
  id: string;
  name: string;
  section: QuestionSection;
  raw: RawDocQuestion[];
}

function buildQuestionTypes(): QuestionType[] {
  // Global deduplication set across the entire website
  // Guarantees every question is completely unique and appears in exactly one place
  const globalSeen = new Set<string>();

  function extractUnique(rawList: RawDocQuestion[]): RawDocQuestion[] {
    const list: RawDocQuestion[] = [];
    for (const item of rawList) {
      if (!item || !item.question) continue;
      const norm = item.question.trim().toLowerCase().replace(/\s+/g, ' ');
      if (!globalSeen.has(norm)) {
        globalSeen.add(norm);
        list.push({
          question: item.question.trim(),
          optionA: item.optionA,
          optionB: item.optionB,
          optionC: item.optionC,
          optionD: item.optionD,
          correctAnswer: item.correctAnswer,
          explanation: item.explanation || '',
        });
      }
    }
    return list;
  }

  // 1. Initial configuration of all question types
  const typeConfigs: RawTypeConfig[] = [
    { id: 'type-1', name: 'Type 1', section: 'Section A', raw: DOC_PART1 },
    { id: 'type-2', name: 'Type 2', section: 'Section A', raw: DOC_PART2 },
    { id: 'type-3', name: 'Type 3', section: 'Section A', raw: DOC_PART3 },
    { id: 'type-4', name: 'Type 4', section: 'Section A', raw: TYPE4_QUESTIONS },
    { id: 'type-5', name: 'Type 5', section: 'Section A', raw: DOC_PART4 },
    { id: 'type-6', name: 'Type 6', section: 'Section B', raw: TYPE6_QUESTIONS },
    { id: 'type-7', name: 'Type 7', section: 'Section B', raw: TYPE7_QUESTIONS },
    { id: 'type-8', name: 'Type 8', section: 'Section B', raw: TYPE8_QUESTIONS },
    { id: 'type-9', name: 'Type 9', section: 'Section B', raw: TYPE9_QUESTIONS },
    { id: 'type-10', name: 'Type 10', section: 'Section B', raw: TYPE10_QUESTIONS },
    { id: 'type-11', name: 'Type 11', section: 'Section C', raw: TYPE11_QUESTIONS },
    { id: 'type-12', name: 'Type 12', section: 'Section C', raw: TYPE12_QUESTIONS },
    { id: 'type-13', name: 'Type 13', section: 'Section C', raw: TYPE13_QUESTIONS },
    { id: 'type-14', name: 'Type 14', section: 'Section C', raw: TYPE14_QUESTIONS },
  ];

  const result: QuestionType[] = [];

  for (const cfg of typeConfigs) {
    const list = extractUnique(cfg.raw);
    if (list.length > 0) {
      const questions: Question[] = list.map((item, idx) => ({
        number: idx + 1,
        question: item.question,
        optionA: item.optionA,
        optionB: item.optionB,
        optionC: item.optionC,
        optionD: item.optionD,
        correctAnswer: item.correctAnswer,
        explanation: item.explanation || '',
      }));

      result.push({
        id: cfg.id,
        name: cfg.name,
        section: cfg.section,
        questions,
      });
    }
  }

  // Section D: Nursing Curriculum Courses (grouped by courses on the nursing curriculum)
  for (const courseType of CURRICULUM_COURSE_TYPES) {
    result.push(courseType);
  }

  return result;
}

export const QUESTION_TYPES: QuestionType[] = buildQuestionTypes();
