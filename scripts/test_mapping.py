import os, re

def clean_text(t):
    return " ".join(t.strip().lower().split())

from scripts.analyze_dedup import parse_ts_file

doc1 = parse_ts_file("src/data/docPart1.ts")
doc2 = parse_ts_file("src/data/docPart2.ts")
doc3 = parse_ts_file("src/data/docPart3.ts")
doc4 = parse_ts_file("src/data/docPart4.ts")
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

source_mapping = [
    ("Type 1", doc1),
    ("Type 2", doc2),
    ("Type 3", doc3),
    ("Type 4", type4),
    ("Type 5", doc4),
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

seen = set()
counts = {}
for name, qlist in source_mapping:
    unique_items = []
    for q in qlist:
        k = clean_text(q["question"])
        if k not in seen:
            seen.add(k)
            unique_items.append(q)
    counts[name] = len(unique_items)

print("Mapped by source file (doc1->T1, doc2->T2, doc3->T3, doc4->T5):")
for name, c in counts.items():
    print(f"  {name}: {c} unique questions")
print("Total unique:", sum(counts.values()))
