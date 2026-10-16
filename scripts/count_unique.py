import os, re
from collections import defaultdict, Counter

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

doc_files = ["docPart1.ts", "docPart2.ts", "docPart3.ts", "docPart4.ts"]
type_files = ["type4Questions.ts", "type6Questions.ts", "type7Questions.ts", "type8Questions.ts", "type9Questions.ts", "type10Questions.ts", "type11Questions.ts", "type12Questions.ts", "type13Questions.ts", "type14Questions.ts"]

for df in doc_files:
    items = parse_ts_file("src/data/" + df)
    unique = set(clean_text(q["question"]) for q in items)
    print(f"{df}: total {len(items)}, unique {len(unique)}")

for tf in type_files:
    items = parse_ts_file("src/data/" + tf)
    unique = set(clean_text(q["question"]) for q in items)
    print(f"{tf}: total {len(items)}, unique {len(unique)}")
