# Script to construct and write type10Questions.ts, type11Questions.ts, type12Questions.ts, type13Questions.ts, type14Questions.ts
import json
import re

with open('scripts/currently_active_questions.json') as f:
    active = set(json.load(f))

with open('scripts/t10_current_23.json') as f:
    t10_current_23 = json.load(f)

all_pools = []

json_files = [
    'scripts/large_pool_questions.json',
    'scripts/pool_bulk_250.json',
    'scripts/pool_courses_220.json',
    'scripts/pages_33_68_data.json',
    'scripts/final_batch_questions.json',
    'scripts/last_100_data.json',
    'scripts/expansion_questions.json',
    'scripts/final_50_data.json',
    'scripts/final_25_data.json',
    'scripts/extra_260_data.json',
    'scripts/pool_final_200_clean.json',
    'scripts/pool_final_150_clean.json',
    'scripts/pool_pages_54_60.json',
    'scripts/pool_final_65.json',
    'scripts/pool_final_35_finish.json',
    'scripts/batch_courses_questions.json',
    'scripts/questions_part10_data.json'
]

for jf in json_files:
    try:
        with open(jf) as f:
            all_pools.extend(json.load(f))
    except Exception as e:
        print(f'{jf}: {e}')

try:
    from scripts.course_medsurg import MEDSURG_QUESTIONS
    all_pools.extend(MEDSURG_QUESTIONS)
except: pass
try:
    from scripts.data_courses_batch1 import BATCH_1
    all_pools.extend(BATCH_1)
except: pass
try:
    from scripts.pool_anatomy_physiology import AP_POOL
    all_pools.extend(AP_POOL)
except: pass
try:
    from scripts.pool_mch_pediatrics import MCH_POOL
    all_pools.extend(MCH_POOL)
except: pass
try:
    from scripts.pool_psych_community import PSYCH_COMM_POOL
    all_pools.extend(PSYCH_COMM_POOL)
except: pass
try:
    from scripts.pool_pharm_foundations import PHARM_FOUND_POOL
    all_pools.extend(PHARM_FOUND_POOL)
except: pass
try:
    from scripts.generate_massive_curriculum import CURRICULUM_QUESTIONS
    all_pools.extend(CURRICULUM_QUESTIONS)
except: pass
try:
    from scripts.build_textbook_questions import TEXTBOOK_QUESTIONS
    all_pools.extend(TEXTBOOK_QUESTIONS)
except: pass

import ast
for pf in ['scripts/make_part10_to_16.py', 'scripts/generate_final_batch.py', 'scripts/more_courses_batch.py', 'scripts/write_remaining_parts.py']:
    try:
        with open(pf) as f:
            content = f.read()
        blocks = re.findall(r'\{\s*\"question\":[^{}]*?\"explanation\":[^{}]*?\}', content, re.DOTALL)
        for b in blocks:
            try:
                all_pools.append(ast.literal_eval(b))
            except: pass
    except: pass

unique_valid = []
seen = set()
for item in all_pools:
    q = item.get('question', '').strip()
    if not q: continue
    norm = re.sub(r'\s+', ' ', q.lower())
    if norm not in active and norm not in seen:
        seen.add(norm)
        unique_valid.append(item)

print(f'Total available unique brand-new questions: {len(unique_valid)}')

# Allocate:
# Type 10 needs 127 to reach 150
t10_new = unique_valid[:127]
t10_all = t10_current_23 + t10_new
print(f'Type 10 total: {len(t10_all)}')

# Type 11 needs 150
t11_all = unique_valid[127:127+150]
print(f'Type 11 total: {len(t11_all)}')

# Type 12 needs 150
t12_all = unique_valid[127+150:127+300]
print(f'Type 12 total: {len(t12_all)}')

# Type 13 needs 150
t13_all = unique_valid[127+300:127+450]
print(f'Type 13 total: {len(t13_all)}')

# Type 14 needs 150
t14_all = unique_valid[127+450:127+600]
print(f'Type 14 total: {len(t14_all)}')

def write_ts_file(filepath, var_name, questions):
    with open(filepath, 'w') as f:
        f.write("import { RawDocQuestion } from './docPart1';\n\n")
        f.write(f"export const {var_name}: RawDocQuestion[] = [\n")
        for q in questions:
            q_clean = json.dumps(q.get('question', '').strip())
            a_clean = json.dumps(q.get('optionA', '').strip())
            b_clean = json.dumps(q.get('optionB', '').strip())
            c_clean = json.dumps(q.get('optionC', '').strip())
            d_clean = json.dumps(q.get('optionD', '').strip())
            ans = q.get('correctAnswer', 'A').strip().upper()[:1]
            if ans not in ['A', 'B', 'C', 'D']:
                ans = 'A'
            ans_clean = json.dumps(ans)
            exp_clean = json.dumps(q.get('explanation', '').strip())
            
            f.write("  {\n")
            f.write(f"    question: {q_clean},\n")
            f.write(f"    optionA: {a_clean},\n")
            f.write(f"    optionB: {b_clean},\n")
            f.write(f"    optionC: {c_clean},\n")
            f.write(f"    optionD: {d_clean},\n")
            f.write(f"    correctAnswer: {ans_clean},\n")
            f.write(f"    explanation: {exp_clean},\n")
            f.write("  },\n")
        f.write("];\n")
    print(f"Written {filepath} with {len(questions)} questions")

write_ts_file('src/data/type10Questions.ts', 'TYPE10_QUESTIONS', t10_all)
write_ts_file('src/data/type11Questions.ts', 'TYPE11_QUESTIONS', t11_all)
write_ts_file('src/data/type12Questions.ts', 'TYPE12_QUESTIONS', t12_all)
write_ts_file('src/data/type13Questions.ts', 'TYPE13_QUESTIONS', t13_all)
write_ts_file('src/data/type14Questions.ts', 'TYPE14_QUESTIONS', t14_all)

print("All question data files generated successfully!")
