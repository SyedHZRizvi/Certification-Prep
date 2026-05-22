# Module-Level Audit (spot-check)
**Auditor:** opus
**Date:** 2026-05-22
**Scope:** 13 courses · 112 modules · 39 practice exams · 13 flashcard decks

---

## Methodology

Cross-cutting checks (run across the whole module/exam/flashcard surface, not per-file):

1. **Direct YouTube URLs** — `grep -rE "youtube\.com/watch|youtu\.be/"` across all `*.md` files
2. **STORAGE_KEY uniqueness** — extracted `var STORAGE_KEY = '…';` from every `Flashcards.md`
3. **Stale homepage anchors** — searched for `#paths`, `#tracks`, `#certs` anchor links
4. **Cross-cert references** — looked for "the other course / only cert / sister course / 9 tracks / nine certs" style language
5. **Total counts in content** — searched for "X modules total / Y certifications" stated in module bodies
6. **Practice exam Q-counts** — counted `^### [0-9]+\.` headings in all 39 exams and compared with the question count stated in each exam's preface blockquote
7. **Module Quiz Q-counts** — counted `^### Q[0-9]+\.` per module (per CLAUDE.md: ≥24 Qs for courses 03–13, ≥20 Qs grandfathered for 01–02)
8. **Next-module relative links** — pulled every `../Module-NN/Reading.md` link out of all Reading.md files and verified they target the correct sequential next module
9. **Per-course skim**: each `NN-Course/README.md`, the Module-01 `Reading.md`, plus one random mid-course `Quiz.md`

---

## Systematic Issues Found

### 1. Two Security+ module quizzes are below the ≥24-question minimum

Per `CLAUDE.md` §2.2, new courses (03–13) require ≥24 questions per module quiz. Two Security+ modules are short:

- `09-CompTIA-Security-Plus/Module-04-Threats-Threat-Actors/Quiz.md` — **22 Qs** (needs +2)
- `09-CompTIA-Security-Plus/Module-07-Endpoint-Mobile-Cloud-Security/Quiz.md` — **23 Qs** (needs +1)

These will be flagged by `scripts/verify-baseline.py` if it enforces the ≥24 rule on course 09. Every other course-03+ module has ≥24 questions (most sit at 24–28).

Not fixed automatically — adding original exam-style questions is outside the spot-fix scope.

### 2. Root `README.md` still describes the site as a two-track Scrum+PMP course

`/README.md` (project root) is structurally a relic of the original two-cert layout. It:
- Title: "The Complete SCRUM Master & PMP Course"
- Badges: only Scrum/PMP
- Whole "## 🗺️ The Two Tracks" section lists only `01-Scrum-Master` and `02-PMP`
- "Quick Start" Day 4 only points at the Scrum module

This is **out of audit scope** (it's not a module/flashcard/practice-exam file), so I did not modify it. Flagging because any visitor who lands at the GitHub repo (rather than the Jekyll site) will see a 2-cert description for a 13-cert site. Recommend the human owner refresh `/README.md` separately (or move it to track 14 of the to-do list).

### 3. No other systematic issues found

The site is in extremely consistent shape across the 13 tracks. The "build by parallel-agent waves" concern from the prompt did not produce drift in the things this audit looked for — every stale-count vector turned up clean.

---

## Per-Course Spot-Check Notes

- **01-Scrum-Master** — README is current (8 modules, PSM I, $200). Module-01 Reading.md opens with the Tony/Maria pizza story (canonical voice). Module-08-Scaling Quiz has 22 Qs — within the grandfathered ≥20 minimum for course 01. All 7 next-module links resolve correctly.
- **02-PMP** — README accurate (10 modules). Module-01-Foundations Reading.md fine; opens with Two Construction Sites story. Quiz Q-counts range 22–30 (grandfathered ≥20). Module 05 has a deliberate cross-link `../../01-Scrum-Master/Module-01-Agile-Mindset/Reading.md` — target exists, link valid.
- **03-AWS-Cloud-Practitioner** — README accurate (8 modules). Module-01 references "Maria from the Scrum course" (intentional throughline; valid). Practice-Exam-1 32Qs / -2 50Qs / Final 65Qs all match stated headers. All quizzes ≥24.
- **04-AWS-Solutions-Architect-Associate** — README accurate (10 modules). All 9 next-module links sequential and correct. Quiz counts 24–26 across all 10 modules. Final-Mock-Exam: 65Qs (matches stated "REAL exam length").
- **05-Azure-Fundamentals** — README accurate (6 modules). All Quiz Q-counts 26–28. Final-Mock: 50Qs/45min as stated.
- **06-Azure-Administrator** — README accurate (10 modules). All Quiz Q-counts 24–28. All next-module links correct.
- **07-AWS-AI-Practitioner** — README accurate (8 modules). All Quiz Q-counts 24–26. Final-Mock 65Qs/120min as stated.
- **08-Azure-AI-Engineer** — README accurate (8 modules). All Quiz Q-counts 24–28. Final-Mock 55Qs/100min as stated.
- **09-CompTIA-Security-Plus** — README accurate (10 modules). **Quiz violations:** Module-04 (22Qs), Module-07 (23Qs); see §1 above. All next-module links correct.
- **10-ASCM-CSCP** — README accurate (10 modules). All Quiz Q-counts 25–26. Practice exams 75/110/150Qs as stated.
- **11-ASCM-CPIM** — README accurate (8 modules). All Quiz Q-counts 24–28. Practice exams 75/110/150Qs.
- **12-ASCM-CLTD** — README accurate (8 modules). All Quiz Q-counts 24–25. Practice exams 75/110/150Qs.
- **13-ISM-CPSM** — README accurate (8 modules). All Quiz Q-counts 26–28. Practice exams 80/125/165Qs (matches three-exam CPSM structure noted in Final-Mock preface).

---

## Cross-Cutting Confirmations

- **YouTube search URLs only:** ✅ Zero direct `youtube.com/watch` or `youtu.be/` URLs found anywhere in course `Reading.md`, `Videos.md`, `Quiz.md`, `Cheat-Sheet.md`, `Flashcards.md`, or `Practice-Exams/*.md` (the only matches were inside `CLAUDE.md` and `_dev/COURSE_SPEC.md`, where they appear as the literal *example of what is forbidden* — fine).
- **Unique STORAGE_KEYs:** ✅ All 13 Flashcards.md files have unique keys: `fc-progress-scrum`, `-pmp`, `-aws-clf`, `-aws-saa`, `-az-900`, `-az-104`, `-aws-aif`, `-az-ai102`, `-secplus`, `-cscp`, `-cpim`, `-cltd`, `-cpsm`.
- **No `#paths` or stale homepage anchors:** ✅ No markdown link in any course file targets `#paths`, `#tracks`, `#certs`, or any other non-existent homepage anchor. Current homepage anchors are `#curriculum`, `#how`, `#start`, `#author` — and no module file links to those either (which is correct; modules don't deep-link back to homepage sections).
- **Practice-exam header counts match actual Q-counts:** ✅ All 39 practice exams have a stated "N questions" in the preface that exactly matches the count of `### N.` question headings (verified all 39 pairs).
- **Next-module relative links:** ✅ Sampled every `../Module-NN/Reading.md` link across all 13 courses (99 links total) — every one targets `Module-(current+1)`, no broken jumps, no skipped numbers.
- **Practice-exam answer keys present:** ✅ All 39 practice-exam files contain a `## 🎯 Answer Key` section.

---

## Issues You Fixed Yourself

**None.** No issues that fell within the "fix yourself" scope (direct YouTube URLs, duplicate STORAGE_KEYs, confidently-broken relative links) were found. The only concrete issues — the two short Security+ quizzes — require writing new exam-style questions in the established voice, which is explicitly outside the surgical-fix scope and should be handled by the human or a dedicated content-extension session.

---

## Overall Health: **good**

The 13-course site is remarkably consistent for something built in parallel-agent waves. The two issues worth a follow-up (short Security+ quizzes + stale root README) are isolated and easily fixed in a dedicated session — they do not point to broader systematic drift.
