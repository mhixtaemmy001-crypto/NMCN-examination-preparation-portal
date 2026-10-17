import json
import re

# Load active questions
with open('scripts/currently_active_questions.json') as f:
    active_set = set(json.load(f))

with open('scripts/t10_current_23.json') as f:
    t10_existing = json.load(f)

print(f"Loaded {len(active_set)} active questions and {len(t10_existing)} Type 10 questions")
