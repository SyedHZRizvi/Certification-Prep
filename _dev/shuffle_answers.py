#!/usr/bin/env python3
"""
Re-shuffle option ordering in practice exam files so the correct answer
is roughly uniformly distributed across A/B/C/D.

Module Quiz.md files use `### QN.` headings which the live quiz engine
randomizes at display time, so they are skipped here.

Practice-Exam-*.md / Final-Mock-Exam.md use `### N.` headings and render
statically with a fixed answer key at the bottom.

Skip questions that contain "All of the above", "None of the above",
or that are Yes/No / True/False style.
"""
import re
import random
import sys
from pathlib import Path

random.seed(20260520)  # deterministic so re-runs are stable

ROOT = Path("/Users/syed/Projects/Certification-Prep-Preview")
EXAM_GLOB = "0[3-9]-*/Practice-Exams/*.md"

SKIP_OPT_PHRASES = [
    "all of the above",
    "none of the above",
    "both of the above",
    "all of these",
    "none of these",
    "both a and b",
    "all options",
]


def is_unshuffleable(options):
    """Return True if we should leave this question's options alone."""
    lower = [o.lower().strip() for o in options]
    # All / none of the above
    if any(p in t for p in SKIP_OPT_PHRASES for t in lower):
        return True
    # Yes/No
    if set(lower[:2]) == {"yes", "no"}:
        return True
    # True/False
    if set(lower[:2]) == {"true", "false"}:
        return True
    return False


QUESTION_HEAD_RE = re.compile(r"^(###\s+)(\d+)\.\s+(.*)$")
OPTION_RE = re.compile(r"^(\s*)([A-D])\.\s+(.+)$")
KEY_HEAD_RE = re.compile(r"^##\s+.*Answer\s+Key", re.IGNORECASE)
KEY_ENTRY_RE = re.compile(r"(\d+)(\.)(\s+)([A-D])")


def parse_answer_key(lines):
    """Find the answer-key code block after `## ... Answer Key` and return
    (start_line_idx, end_line_idx, {qnum: current_letter}).

    The block is the first ```...``` fenced block after the Answer Key heading.
    """
    n = len(lines)
    head_idx = None
    for i, ln in enumerate(lines):
        if KEY_HEAD_RE.match(ln):
            head_idx = i
            break
    if head_idx is None:
        return None
    # Find next ``` opening
    fence_open = None
    for i in range(head_idx + 1, n):
        if lines[i].strip().startswith("```"):
            fence_open = i
            break
    if fence_open is None:
        return None
    fence_close = None
    for i in range(fence_open + 1, n):
        if lines[i].strip().startswith("```"):
            fence_close = i
            break
    if fence_close is None:
        return None
    body = "\n".join(lines[fence_open + 1:fence_close])
    answers = {}
    for m in KEY_ENTRY_RE.finditer(body):
        answers[int(m.group(1))] = m.group(4)
    return fence_open, fence_close, answers


def find_question_blocks(lines, valid_qnums):
    """Return list of (start_idx, end_idx, qnum) for each ### N. block."""
    n = len(lines)
    heads = []
    for i, ln in enumerate(lines):
        m = QUESTION_HEAD_RE.match(ln)
        if m:
            qnum = int(m.group(2))
            if qnum in valid_qnums:
                heads.append((i, qnum))
    blocks = []
    for idx, (start, qnum) in enumerate(heads):
        if idx + 1 < len(heads):
            end = heads[idx + 1][0]
        else:
            # End at Answer Key heading or end of file
            end = n
            for j in range(start + 1, n):
                if KEY_HEAD_RE.match(lines[j]) or lines[j].startswith("## "):
                    end = j
                    break
        blocks.append((start, end, qnum))
    return blocks


def extract_options(lines, start, end):
    """Find the FIRST occurrence of A./B./C./D. options within [start, end)
    and return [(line_idx, indent, letter, text), ...] for the four options."""
    opts = []
    seen_letters = set()
    for i in range(start + 1, end):
        m = OPTION_RE.match(lines[i])
        if m:
            indent, letter, text = m.group(1), m.group(2), m.group(3)
            if letter in seen_letters:
                # Hit a second copy of A — must be a new question (defensive)
                break
            opts.append((i, indent, letter, text))
            seen_letters.add(letter)
            if len(opts) == 4 and seen_letters == {"A", "B", "C", "D"}:
                break
    return opts if len(opts) == 4 else None


def target_letter_sequence(n, seed_offset=0):
    """Return a list of N letters that is a balanced permutation of A/B/C/D."""
    rng = random.Random(20260520 + seed_offset)
    per = (n // 4) + 1
    pool = (["A", "B", "C", "D"] * per)[:n]
    rng.shuffle(pool)
    return pool


def process_file(path: Path) -> dict:
    raw = path.read_text()
    lines = raw.split("\n")

    key_info = parse_answer_key(lines)
    if key_info is None:
        return {"path": str(path.relative_to(ROOT)), "status": "no-answer-key"}

    fence_open, fence_close, current_answers = key_info
    if not current_answers:
        return {"path": str(path.relative_to(ROOT)), "status": "empty-answer-key"}

    valid_qnums = set(current_answers.keys())
    blocks = find_question_blocks(lines, valid_qnums)
    if not blocks:
        return {"path": str(path.relative_to(ROOT)), "status": "no-question-blocks"}

    # Pre-generate target letter sequence, balanced
    target_seq = target_letter_sequence(max(valid_qnums))
    new_answers = dict(current_answers)

    skipped = []
    shuffled = []

    for start, end, qnum in blocks:
        opts = extract_options(lines, start, end)
        if opts is None:
            skipped.append((qnum, "no-4-options"))
            continue
        # Verify options are in order A,B,C,D as written
        letters_in_order = [o[2] for o in opts]
        if letters_in_order != ["A", "B", "C", "D"]:
            skipped.append((qnum, "options-out-of-order"))
            continue
        texts = [o[3] for o in opts]

        if is_unshuffleable(texts):
            skipped.append((qnum, "unshuffleable"))
            continue

        # Decide target position for the correct answer
        correct_letter = current_answers[qnum]
        target_letter = target_seq[qnum - 1]  # 1-based qnum
        if target_letter == correct_letter:
            shuffled.append((qnum, correct_letter, target_letter))
            continue  # no change needed, distribution already aligned

        # Swap option text between correct_letter slot and target_letter slot
        correct_idx = "ABCD".index(correct_letter)
        target_idx = "ABCD".index(target_letter)
        texts[correct_idx], texts[target_idx] = texts[target_idx], texts[correct_idx]

        # Rewrite option lines preserving indent
        for k, letter in enumerate("ABCD"):
            li, indent, _, _ = opts[k]
            lines[li] = f"{indent}{letter}. {texts[k]}"

        new_answers[qnum] = target_letter
        shuffled.append((qnum, correct_letter, target_letter))

    # Rewrite the answer key body: substitute letters in place, preserving whitespace
    body_lines = lines[fence_open + 1:fence_close]
    body_text = "\n".join(body_lines)

    def sub_letter(m):
        qnum = int(m.group(1))
        new_l = new_answers.get(qnum, m.group(4))
        return f"{m.group(1)}.{m.group(3)}{new_l}"

    new_body = KEY_ENTRY_RE.sub(sub_letter, body_text)
    new_body_lines = new_body.split("\n")
    lines[fence_open + 1:fence_close] = new_body_lines

    path.write_text("\n".join(lines))

    # Stats
    dist = {L: 0 for L in "ABCD"}
    for v in new_answers.values():
        dist[v] = dist.get(v, 0) + 1
    return {
        "path": str(path.relative_to(ROOT)),
        "status": "ok",
        "total_q": len(current_answers),
        "shuffled": len(shuffled),
        "skipped": len(skipped),
        "skip_reasons": dict((r, sum(1 for _, rr in skipped if rr == r))
                             for r in set(rr for _, rr in skipped)),
        "final_distribution": dist,
    }


def main():
    files = sorted(ROOT.glob(EXAM_GLOB))
    if not files:
        print("No practice exam files found.")
        sys.exit(1)
    results = []
    for f in files:
        try:
            r = process_file(f)
        except Exception as e:
            r = {"path": str(f.relative_to(ROOT)), "status": "error", "err": str(e)}
        results.append(r)

    # Print compact summary
    print(f"Processed {len(results)} practice exam files.\n")
    for r in results:
        if r["status"] == "ok":
            d = r["final_distribution"]
            print(f"  ✓ {r['path']:70s} "
                  f"shuffled={r['shuffled']:3d}  skipped={r['skipped']:2d} "
                  f"A={d['A']:2d} B={d['B']:2d} C={d['C']:2d} D={d['D']:2d}")
        else:
            print(f"  ✗ {r['path']:70s} {r['status']} {r.get('err', r.get('skip_reasons', ''))}")


if __name__ == "__main__":
    main()
