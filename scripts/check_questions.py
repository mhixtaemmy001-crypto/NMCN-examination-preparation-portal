import re
import os
from collections import defaultdict

def clean_text(t):
    return " ".join(t.strip().lower().split())

def parse_ts_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # regex to find object entries
    # { question: "...", optionA: "...", ... }
    # To handle multiline strings or escaped quotes:
    # We can match { question: ..., optionA: ..., optionB: ..., optionC: ..., optionD: ..., correctAnswer: ..., explanation: ... }
    # Let's find every `question:` block
    items = []
    # Splitting by { question:
    parts = re.split(r'\{\s*question:\s*', content)
    for p in parts[1:]:
        # extract question
        q_match = re.match(r'''(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`)''', p)
        if not q_match:
            continue
        q_text = q_match.group(1) or q_match.group(2) or q_match.group(3) or ""
        
        # optionA
        oa_match = re.search(r'''optionA:\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`)''', p)
        ob_match = re.search(r'''optionB:\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`)''', p)
        oc_match = re.search(r'''optionC:\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`)''', p)
        od_match = re.search(r'''optionD:\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`)''', p)
        ans_match = re.search(r'''correctAnswer:\s*['"]([ABCD])['"]''', p)
        exp_match = re.search(r'''explanation:\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`)''', p)

        items.append({
            "question": q_text.strip(),
            "optionA": (oa_match.group(1) or oa_match.group(2) or oa_match.group(3) or "").strip() if oa_match else "",
            "optionB": (ob_match.group(1) or ob_match.group(2) or ob_match.group(3) or "").strip() if ob_match else "",
            "optionC": (oc_match.group(1) or oc_match.group(2) or oc_match.group(3) or "").strip() if oc_match else "",
            "optionD": (od_match.group(1) or od_match.group(2) or od_match.group(3) or "").strip() if od_match else "",
            "correctAnswer": ans_match.group(1) if ans_match else "A",
            "explanation": (exp_match.group(1) or exp_match.group(2) or exp_match.group(3) or "").strip() if exp_match else "",
        })
    return items

docPart1 = parse_ts_file("src/data/docPart1.ts")
docPart2 = parse_ts_file("src/data/docPart2.ts")
docPart3 = parse_ts_file("src/data/docPart3.ts")
docPart4 = parse_ts_file("src/data/docPart4.ts")
all_doc = docPart1 + docPart2 + docPart3 + docPart4

type4 = parse_ts_file("src/data/type4Questions.ts")
type6 = parse_ts_file("src/data/type6Questions.ts")
type7 = parse_ts_file("src/data/type7Questions.ts")
type8 = parse_ts_file("src/data/type8Questions.ts")
type9 = parse_ts_file("src/data/type9Questions.ts")
type10 = parse_ts_file("src/data/type10Questions.ts")
type11 = parse_ts_file("src/data/type11Questions.ts")
type12 = parse_ts_file("src/data/type12Questions.ts")
type13 = parse_ts_file("src/data/type13Questions.ts")
type14 = parse_ts_file("src/data/type14Questions.ts")

types = {
    "Type 1": all_doc[0:150],
    "Type 2": all_doc[150:300],
    "Type 3": all_doc[300:450],
    "Type 4": type4,
    "Type 5": all_doc[450:600],
    "Type 6": type6,
    "Type 7": type7,
    "Type 8": type8,
    "Type 9": type9,
    "Type 10": type10,
    "Type 11": type11,
    "Type 12": type12,
    "Type 13": type13,
    "Type 14": type14,
}

print(f"Total doc items: {len(all_doc)}")
for name, qlist in types.items():
    print(f"{name}: {len(qlist)} questions loaded")

# 1. Check duplicates within each type
print("\n--- DUPLICATES WITHIN EACH TYPE ---")
for name, qlist in types.items():
    seen = defaultdict(list)
    for idx, q in enumerate(qlist):
        norm = clean_text(q["question"])
        seen[norm].append(idx + 1)
    dups = {k: v for k, v in seen.items() if len(v) > 1}
    if dups:
        print(f"{name} has {len(dups)} duplicate questions within itself:")
        for k, v in list(dups.items())[:5]:
            print(f"   indices {v}: {k[:70]}...")
    else:
        print(f"{name}: No internal duplicates.")

# 2. Check duplicates across types
print("\n--- DUPLICATES ACROSS TYPES ---")
global_seen = defaultdict(list)
for name, qlist in types.items():
    for idx, q in enumerate(qlist):
        norm = clean_text(q["question"])
        global_seen[norm].append((name, idx + 1))

across_dups = {k: v for k, v in global_seen.items() if len(set(t[0] for t in v)) > 1}
print(f"Total unique question texts that appear in multiple types: {len(across_dups)}")
for k, v in list(across_dups.items())[:15]:
    types_present = list(set(t[0] for t in v))
    print(f"   In {types_present}: {k[:70]}...")

print(f"\nTotal overall unique question texts across all types: {len(global_seen)}")
