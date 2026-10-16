import { QUESTION_TYPES } from '../src/data/questionBank';

const donors = [
  { id: 'type-14', name: 'Type 14', list: [...QUESTION_TYPES.find(t => t.id === 'type-14')!.questions] },
  { id: 'type-13', name: 'Type 13', list: [...QUESTION_TYPES.find(t => t.id === 'type-13')!.questions] },
  { id: 'type-12', name: 'Type 12', list: [...QUESTION_TYPES.find(t => t.id === 'type-12')!.questions] },
  { id: 'type-11', name: 'Type 11', list: [...QUESTION_TYPES.find(t => t.id === 'type-11')!.questions] },
];

const recipients = [
  { id: 'type-1', name: 'Type 1', section: 'Section A', list: [...QUESTION_TYPES.find(t => t.id === 'type-1')!.questions] },
  { id: 'type-2', name: 'Type 2', section: 'Section A', list: [...QUESTION_TYPES.find(t => t.id === 'type-2')!.questions] },
  { id: 'type-3', name: 'Type 3', section: 'Section A', list: [...QUESTION_TYPES.find(t => t.id === 'type-3')!.questions] },
  { id: 'type-4', name: 'Type 4', section: 'Section A', list: [...QUESTION_TYPES.find(t => t.id === 'type-4')!.questions] },
  { id: 'type-5', name: 'Type 5', section: 'Section A', list: [...QUESTION_TYPES.find(t => t.id === 'type-5')!.questions] },
  { id: 'type-6', name: 'Type 6', section: 'Section B', list: [...QUESTION_TYPES.find(t => t.id === 'type-6')!.questions] },
  { id: 'type-7', name: 'Type 7', section: 'Section B', list: [...QUESTION_TYPES.find(t => t.id === 'type-7')!.questions] },
  { id: 'type-8', name: 'Type 8', section: 'Section B', list: [...QUESTION_TYPES.find(t => t.id === 'type-8')!.questions] },
  { id: 'type-9', name: 'Type 9', section: 'Section B', list: [...QUESTION_TYPES.find(t => t.id === 'type-9')!.questions] },
  { id: 'type-10', name: 'Type 10', section: 'Section B', list: [...QUESTION_TYPES.find(t => t.id === 'type-10')!.questions] },
];

let donorIndex = 0;
function getNextDonorQuestion() {
  while (donorIndex < donors.length) {
    if (donors[donorIndex].list.length > 0) {
      return { q: donors[donorIndex].list.shift()!, from: donors[donorIndex].name };
    }
    donorIndex++;
  }
  return null;
}

for (const r of recipients) {
  const needed = 150 - r.list.length;
  console.log(`${r.name} started with ${r.list.length}, needs ${needed}`);
  let taken = 0;
  while (r.list.length < 150) {
    const next = getNextDonorQuestion();
    if (!next) {
      console.log(`  --> ALL DONORS EXHAUSTED! Could not fill ${r.name} to 150. Current length: ${r.list.length}`);
      break;
    }
    r.list.push(next.q);
    taken++;
  }
  console.log(`  ${r.name} now has ${r.list.length} questions (+${taken})`);
}

console.log('\n--- DONOR STATUS ---');
for (const d of donors) {
  console.log(`${d.name}: ${d.list.length} remaining (Exhausted: ${d.list.length === 0})`);
}
