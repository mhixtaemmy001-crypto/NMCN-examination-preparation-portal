import json
import re
import subprocess
import glob

print("Generating all 14 types with exactly 150 unique questions each...")

# 1. Get current 150 questions for each of Types 1 to 9
cmd = '''
import { QUESTION_TYPES } from './src/data/questionBank';
const out = {};
for (let i = 1; i <= 9; i++) {
  const id = 'type-' + i;
  const t = QUESTION_TYPES.find(x => x.id === id);
  out[id] = t ? t.questions.map(q => ({
    question: q.question,
    optionA: q.optionA,
    optionB: q.optionB,
    optionC: q.optionC,
    optionD: q.optionD,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation || ''
  })) : [];
}
console.log(JSON.stringify(out));
'''
res = subprocess.run(['npx', 'tsx', '-e', cmd], capture_output=True, text=True)
types1_9 = json.loads(res.stdout)

all_14_types = {}
global_seen = set()

for i in range(1, 10):
    t_id = f'type-{i}'
    q_list = types1_9[t_id]
    all_14_types[t_id] = []
    for q in q_list:
        n = re.sub(r'\s+', ' ', q['question'].strip().lower())
        if n not in global_seen:
            global_seen.add(n)
            all_14_types[t_id].append(q)
    assert len(all_14_types[t_id]) == 150, f'{t_id} length is {len(all_14_types[t_id])}'

print(f"Types 1 to 9 verified: 9 x 150 = {len(global_seen)}")

# 2. Collect fresh candidate pool for Types 10 to 14
fresh_pool = []
fresh_seen = set()

def add_cand(item):
    if not isinstance(item, dict): return
    q = item.get('question', '').strip()
    if not q: return
    oa = str(item.get('optionA', '')).strip()
    ob = str(item.get('optionB', '')).strip()
    oc = str(item.get('optionC', '')).strip()
    od = str(item.get('optionD', '')).strip()
    ans = str(item.get('correctAnswer', '')).strip().upper()
    if ans not in ['A', 'B', 'C', 'D']:
        ans = 'A'
    exp = str(item.get('explanation', '')).strip()
    if not oa or not ob: return
    
    n = re.sub(r'\s+', ' ', q.lower())
    if n not in global_seen and n not in fresh_seen:
        fresh_seen.add(n)
        fresh_pool.append({
            'question': q,
            'optionA': oa,
            'optionB': ob,
            'optionC': oc,
            'optionD': od,
            'correctAnswer': ans,
            'explanation': exp
        })

from scripts.pool_anatomy_physiology import AP_POOL
for item in AP_POOL: add_cand(item)
from scripts.course_medsurg import MEDSURG_QUESTIONS
for item in MEDSURG_QUESTIONS: add_cand(item)
from scripts.pool_mch_pediatrics import MCH_POOL
for item in MCH_POOL: add_cand(item)
from scripts.pool_psych_community import PSYCH_COMM_POOL
for item in PSYCH_COMM_POOL: add_cand(item)
from scripts.pool_pharm_foundations import PHARM_FOUND_POOL
for item in PHARM_FOUND_POOL: add_cand(item)
from scripts.data_courses_batch1 import BATCH_1
for item in BATCH_1: add_cand(item)
from scripts.generate_massive_curriculum import CURRICULUM_QUESTIONS
for item in CURRICULUM_QUESTIONS: add_cand(item)
from scripts.build_textbook_questions import TEXTBOOK_QUESTIONS
for item in TEXTBOOK_QUESTIONS: add_cand(item)
from scripts.pool_final_addition_25 import FINAL_ADDITIONAL_25
for item in FINAL_ADDITIONAL_25: add_cand(item)

for f in sorted(glob.glob('scripts/*.json')):
    if 'currently_active' in f or 'existing_questions' in f: continue
    try:
        with open(f) as fp:
            data = json.load(fp)
            if isinstance(data, list):
                for item in data: add_cand(item)
    except: pass

for f in ['type10Questions', 'type11Questions', 'type12Questions', 'type13Questions', 'type14Questions']:
    try:
        raw_cmd = f'''
        import {{ TYPE{f[4:6].upper()}_QUESTIONS }} from './src/data/{f}';
        console.log(JSON.stringify(TYPE{f[4:6].upper()}_QUESTIONS));
        '''
        res_raw = subprocess.run(['npx', 'tsx', '-e', raw_cmd], capture_output=True, text=True)
        items = json.loads(res_raw.stdout)
        for item in items: add_cand(item)
    except: pass

print(f"Total fresh candidates for Types 10-14: {len(fresh_pool)}")

# Distribute across Types 10 to 14
buckets = [[] for _ in range(5)]
idx = 0
for q in fresh_pool:
    b_idx = idx % 5
    if len(buckets[b_idx]) < 150:
        buckets[b_idx].append(q)
    else:
        for i in range(5):
            if len(buckets[i]) < 150:
                buckets[i].append(q)
                break
    idx += 1

for i in range(5):
    t_id = f'type-{10+i}'
    all_14_types[t_id] = buckets[i]
    for q in buckets[i]:
        n = re.sub(r'\s+', ' ', q['question'].strip().lower())
        assert n not in global_seen, f'Duplicate detected in {t_id}'
        global_seen.add(n)
    print(f'{t_id}: {len(all_14_types[t_id])} questions')

assert len(global_seen) == 2100, f'Expected 2100 questions, got {len(global_seen)}'
print(f"Grand total unique questions: {len(global_seen)}")

# 3. Helper to format TypeScript question array
def format_ts_file(const_name, questions, is_doc_part1=False):
    lines = []
    if is_doc_part1:
        lines.append("import { Question } from '../types';\n")
        lines.append("export type RawDocQuestion = Omit<Question, 'number'>;\n")
    else:
        lines.append("import { RawDocQuestion } from './docPart1';\n")
    
    lines.append(f"export const {const_name}: RawDocQuestion[] = [")
    for q in questions:
        q_str = json.dumps(q['question'])
        a_str = json.dumps(q['optionA'])
        b_str = json.dumps(q['optionB'])
        c_str = json.dumps(q['optionC'])
        d_str = json.dumps(q['optionD'])
        ans_str = json.dumps(q['correctAnswer'])
        exp_str = json.dumps(q.get('explanation', ''))
        lines.append("  {")
        lines.append(f"    question: {q_str},")
        lines.append(f"    optionA: {a_str},")
        lines.append(f"    optionB: {b_str},")
        lines.append(f"    optionC: {c_str},")
        lines.append(f"    optionD: {d_str},")
        lines.append(f"    correctAnswer: {ans_str},")
        lines.append(f"    explanation: {exp_str},")
        lines.append("  },")
    lines.append("];\n")
    return "\n".join(lines)

# Write all 14 files
file_mapping = [
    ('type-1', 'src/data/docPart1.ts', 'DOC_PART1', True),
    ('type-2', 'src/data/docPart2.ts', 'DOC_PART2', False),
    ('type-3', 'src/data/docPart3.ts', 'DOC_PART3', False),
    ('type-4', 'src/data/type4Questions.ts', 'TYPE4_QUESTIONS', False),
    ('type-5', 'src/data/docPart4.ts', 'DOC_PART4', False),
    ('type-6', 'src/data/type6Questions.ts', 'TYPE6_QUESTIONS', False),
    ('type-7', 'src/data/type7Questions.ts', 'TYPE7_QUESTIONS', False),
    ('type-8', 'src/data/type8Questions.ts', 'TYPE8_QUESTIONS', False),
    ('type-9', 'src/data/type9Questions.ts', 'TYPE9_QUESTIONS', False),
    ('type-10', 'src/data/type10Questions.ts', 'TYPE10_QUESTIONS', False),
    ('type-11', 'src/data/type11Questions.ts', 'TYPE11_QUESTIONS', False),
    ('type-12', 'src/data/type12Questions.ts', 'TYPE12_QUESTIONS', False),
    ('type-13', 'src/data/type13Questions.ts', 'TYPE13_QUESTIONS', False),
    ('type-14', 'src/data/type14Questions.ts', 'TYPE14_QUESTIONS', False),
]

for t_id, path, var_name, is_part1 in file_mapping:
    ts_code = format_ts_file(var_name, all_14_types[t_id], is_doc_part1=is_part1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(ts_code)
    print(f"Wrote {path} with {len(all_14_types[t_id])} questions")

print("All 14 question files written successfully!")
