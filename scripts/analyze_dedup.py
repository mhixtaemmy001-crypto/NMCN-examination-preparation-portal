import os, re
from collections import defaultdict

def clean_text(t):
    return " ".join(t.strip().lower().split())

def parse_ts_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    items = []
    parts = re.split(r'\{\s*question:\s*', content)
    for p in parts[1:]:
        q_match = re.match(r'''(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`)''', p)
        if not q_match:
            continue
        q_text = q_match.group(1) or q_match.group(2) or q_match.group(3) or ""
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

# Current allocation in questionBank.ts:
raw_types = [
    ("Type 1", all_doc[0:150]),
    ("Type 2", all_doc[150:300]),
    ("Type 3", all_doc[300:450]),
    ("Type 4", type4),
    ("Type 5", all_doc[450:600]),
    ("Type 6", type6),
    ("Type 7", type7),
    ("Type 8", type8),
    ("Type 9", type9),
    ("Type 10", type10),
    ("Type 11", type11),
    ("Type 12", type12),
    ("Type 13", type13),
    ("Type 14", type14),
]

# Let's see: if we deduplicate sequentially (keeping each question in the first type it appears in):
seen_global = set()
deduped_types = []

for name, qlist in raw_types:
    unique_for_this_type = []
    seen_in_type = set()
    for q in qlist:
        k = clean_text(q["question"])
        if k not in seen_global:
            seen_global.add(k)
            seen_in_type.add(k)
            unique_for_this_type.append(q)
    deduped_types.append((name, unique_for_this_type))

print("=== Sequential Deduplication (preserving Type 1..14 origin) ===")
total_all = 0
for name, qlist in deduped_types:
    print(f"{name}: {len(qlist)} unique questions")
    total_all += len(qlist)
print(f"Total globally unique questions across all types: {total_all}")

# What about docPart4 remainder?
# all_doc was sliced up to 600, but all_doc has 624 questions!
doc_remainder = all_doc[600:]
unused = [q for q in doc_remainder if clean_text(q["question"]) not in seen_global]
print(f"Unused questions in all_doc[600:]: {len(unused)}")
