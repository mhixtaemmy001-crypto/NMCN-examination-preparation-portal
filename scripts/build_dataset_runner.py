import json, re

# Load base pools
from scripts.questions_part1 import QUESTIONS_PART1
from scripts.questions_part2 import QUESTIONS_PART2
from scripts.questions_part3 import QUESTIONS_PART3
from scripts.questions_part4 import QUESTIONS_PART4
from scripts.questions_part5 import QUESTIONS_PART5
from scripts.questions_part6 import QUESTIONS_PART6
from scripts.questions_part7 import QUESTIONS_PART7
from scripts.questions_part8 import QUESTIONS_PART8
from scripts.questions_part9 import QUESTIONS_PART9
from scripts.more_courses_batch import MORE_QUESTIONS

with open('scripts/questions_part10_data.json') as f:
    part10_data = json.load(f)

with open('scripts/batch_courses_questions.json') as f:
    batch_data = json.load(f)

current_pool = (
    QUESTIONS_PART1 +
    QUESTIONS_PART2 +
    QUESTIONS_PART3 +
    QUESTIONS_PART4 +
    QUESTIONS_PART5 +
    QUESTIONS_PART6 +
    QUESTIONS_PART7 +
    QUESTIONS_PART8 +
    QUESTIONS_PART9 +
    part10_data +
    batch_data +
    MORE_QUESTIONS
)

print(f"Current compiled pool: {len(current_pool)} questions")
