import json, re

# Load existing dumped questions
with open('scripts/existing_questions.json') as f:
    existing = set(json.load(f))

# Also check part 1 to 9
from scripts.questions_part1 import QUESTIONS_PART1
from scripts.questions_part2 import QUESTIONS_PART2
from scripts.questions_part3 import QUESTIONS_PART3
from scripts.questions_part4 import QUESTIONS_PART4
from scripts.questions_part5 import QUESTIONS_PART5
from scripts.questions_part6 import QUESTIONS_PART6
from scripts.questions_part7 import QUESTIONS_PART7
from scripts.questions_part8 import QUESTIONS_PART8
from scripts.questions_part9 import QUESTIONS_PART9

p1_9 = (
    QUESTIONS_PART1 + QUESTIONS_PART2 + QUESTIONS_PART3 +
    QUESTIONS_PART4 + QUESTIONS_PART5 + QUESTIONS_PART6 +
    QUESTIONS_PART7 + QUESTIONS_PART8 + QUESTIONS_PART9
)
for q in p1_9:
    existing.add(re.sub(r'\s+', ' ', q['question'].strip().lower()))

print(f"Total current unique pool (existing + parts 1-9): {len(existing)}")

