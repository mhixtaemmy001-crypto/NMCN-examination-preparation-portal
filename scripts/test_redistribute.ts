import { DOC_PART1, RawDocQuestion } from '../src/data/docPart1';
import { DOC_PART2 } from '../src/data/docPart2';
import { DOC_PART3 } from '../src/data/docPart3';
import { DOC_PART4 } from '../src/data/docPart4';
import { TYPE4_QUESTIONS } from '../src/data/type4Questions';
import { TYPE6_QUESTIONS } from '../src/data/type6Questions';
import { TYPE7_QUESTIONS } from '../src/data/type7Questions';
import { TYPE8_QUESTIONS } from '../src/data/type8Questions';
import { TYPE9_QUESTIONS } from '../src/data/type9Questions';
import { TYPE10_QUESTIONS } from '../src/data/type10Questions';
import { TYPE11_QUESTIONS } from '../src/data/type11Questions';
import { TYPE12_QUESTIONS } from '../src/data/type12Questions';
import { TYPE13_QUESTIONS } from '../src/data/type13Questions';
import { TYPE14_QUESTIONS } from '../src/data/type14Questions';
import { Question, QuestionType, QuestionSection } from '../src/types';

interface TypeConfig {
  id: string;
  name: string;
  section: QuestionSection;
  raw: RawDocQuestion[];
}

export function buildRedistributedQuestionTypes(): QuestionType[] {
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

  // 1. Initial unique extraction
  const typeConfigs: TypeConfig[] = [
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

  const uniquePools = new Map<string, RawDocQuestion[]>();
  for (const cfg of typeConfigs) {
    uniquePools.set(cfg.id, extractUnique(cfg.raw));
  }

  // 2. Donor pool from Section C, starting from Type 14 down to Type 11
  const donorTypeIds = ['type-14', 'type-13', 'type-12', 'type-11', 'type-10'];
  let donorIdx = 0;

  function takeNextDonorQuestion(): RawDocQuestion | null {
    while (donorIdx < donorTypeIds.length) {
      const donorId = donorTypeIds[donorIdx];
      const list = uniquePools.get(donorId);
      if (list && list.length > 0) {
        return list.shift()!;
      }
      donorIdx++;
    }
    return null;
  }

  // 3. Fill recipients in Section A and Section B to 150 each
  // Recipients: Type 1 to Type 9
  const recipientIds = [
    'type-1',
    'type-2',
    'type-3',
    'type-4',
    'type-5',
    'type-6',
    'type-7',
    'type-8',
    'type-9',
  ];

  for (const rId of recipientIds) {
    const list = uniquePools.get(rId)!;
    while (list.length < 150) {
      const q = takeNextDonorQuestion();
      if (!q) break;
      list.push(q);
    }
  }

  // 4. Assemble final active question types
  // Only include types that have at least 1 question (exhausted types are removed)
  const result: QuestionType[] = [];

  for (const cfg of typeConfigs) {
    const list = uniquePools.get(cfg.id) || [];
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

  return result;
}

const finalTypes = buildRedistributedQuestionTypes();
console.log('FINAL ACTIVE TYPES:');
for (const t of finalTypes) {
  console.log(`[${t.section}] ${t.name} (${t.id}): ${t.questions.length} questions`);
}
const total = finalTypes.reduce((acc, t) => acc + t.questions.length, 0);
console.log('TOTAL QUESTIONS ACROSS ACTIVE TYPES:', total);
