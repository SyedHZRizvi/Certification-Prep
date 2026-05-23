# Cornell / Harvard / Stanford Pedagogical Standard — Course Elevation Spec

**Effective date:** 2026-05-22
**Applies to:** All 18 courses on The Cert Hub.
**Status:** Authoritative — every course must meet ALL nine criteria below.
**Reference exemplar:** Courses `14-AI-Marketing-Foundations` through `18-AI-Marketing-Capstone-Portfolio` (already built to this bar).

This document defines what "Cornell/Harvard/Stanford-grade certification prep" means
operationally for this site. Each elevation agent uses this as their bible. A course is
considered at-bar only when every one of the nine elements below is present at the
defined level.

---

## 1. Harvard-style case studies (≥ 1 per module)

Each module's `Reading.md` must include at least **one named, real-world case study** in
this format:

```
### Case Study — <Company> (<Year>)

**Situation.** <2–4 sentence setup of the decision the company faced.>

**Decision.** <What they actually did, with specifics — numbers, names, timelines.>

**Outcome.** <What happened. Quantified where possible.>

**Lesson for the exam / for practitioners.** <How this connects back to the
module's frameworks, and the principle the certification body tests on.>

**Discussion (Socratic).**
- Q1: <Open-ended "what would you have done differently" question>
- Q2: <"Why did the official answer favor X over Y in this scenario" question>
- Q3: <"What's the trade-off the company implicitly accepted" question>
```

**Quality bar.** Companies must be real, recognizable, and verifiable. Use 2020–2026
events where possible. Examples that work:
- AWS courses → Netflix's AWS migration, Capital One's serverless bet, Pinterest's
  cost-optimization, Goldman Sachs' Bedrock adoption.
- Azure courses → ChatGPT Enterprise on Azure OpenAI, Boeing's Azure Stack, H&R Block's
  AI assistant.
- Security+ → MOVEit breach (2023), Colonial Pipeline (2021), MGM Resorts ransomware
  (2023), Uber breach (2022), Okta breach (2023).
- Supply chain → Maersk during Suez blockage, Toyota chip shortage response, Apple's
  iPhone India supply diversification, ASML's chip-equipment monopoly.
- Project management → Boeing 737 MAX project oversight failures, NASA Mars Climate
  Orbiter (units mismatch), Sydney Opera House (scope/cost), Channel Tunnel (risk).

**NOT acceptable:** "Acme Corp wanted to migrate to the cloud." Generic placeholders
fail the bar.

---

## 2. Named-source citations on every framework

Every framework, principle, or model named in `Reading.md` must cite:
- The originator (person or org)
- The year of seminal publication
- The publication venue (book title or journal/HBR/etc.)

**Format examples:**
- ✅ "Porter's Five Forces (Porter, *Competitive Strategy*, 1980, Harvard Business School Press)"
- ✅ "Kotter's 8-Step Change Model (Kotter, *Leading Change*, 1996, HBS Press)"
- ✅ "AWS Well-Architected Framework (AWS, 2015; reaffirmed 2023 with Sustainability pillar)"
- ✅ "CIA Triad (Saltzer & Schroeder, *Communications of the ACM*, 1975)"
- ✅ "RACI (Smith & Erwin, *Project Management Institute Symposium*, 1981; codified in PMBOK)"
- ❌ "Porter's Five Forces" (no citation)
- ❌ "the well-known cost optimization framework" (unattributed)

**Special case for fast-moving fields.** For AWS/Azure/AI features that change quarterly,
cite the *announcement event* (re:Invent year, Microsoft Ignite year, OpenAI DevDay year)
and the date of last verification: e.g., "AWS Bedrock (announced re:Invent 2023; checked
against AWS docs 2026-05)."

---

## 3. Socratic discussion prompts (3–5 per module)

Each module's `Reading.md` ends with a **Discussion** section before the cheat sheet
pointer. Prompts must be open-ended, multi-answer-defensible, and force the student to
reason from principles. Not yes/no, not lookup.

**Good prompts:**
- "A startup running on a single AZ argues that multi-AZ doubles their AWS bill and they
  don't need 99.99% SLA for their MVP. Build the strongest argument for AND against their
  position. Which would you defend at a CTO review?"
- "Two threat-modeling teams disagree: one wants STRIDE for everything, the other wants
  PASTA. At what kind of company would each be the right default, and why?"
- "Your supplier wants a 3-year fixed-price contract because raw-material prices are
  volatile. From the buyer's TCO perspective, when is this the right call versus a
  cost-plus-indexed contract?"

**Bad prompts:**
- "What is the CIA triad?" (recall, not Socratic)
- "Is RBAC better than ABAC?" (binary, not nuanced)

---

## 4. Capstone or applied project (one per course)

Each course must end with a **`Capstone-Project.md`** at the course root (sibling to
`README.md` and `Flashcards.md`). Format:

```
# Capstone Project — <Course Name>

## Brief
<1-paragraph real-world scenario. Names a company, a budget, a constraint.>

## Deliverables (4–7 artifacts)
1. <Deliverable 1: what the student must produce>
2. <Deliverable 2: ...>
...

## Rubric (scored out of 100)
| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| <Criterion 1> | <pts> | ... | ... | ... |
| ... |

## Suggested timeline (week-by-week, 4–8 weeks)
- Week 1: ...
- Week 2: ...
- ...

## What "submission" looks like
<File names, formats, length expectations. The student is doing this for themselves;
self-grading instructions or peer-review prompt.>

## Optional stretch goals
- ...
```

**Quality bar.** The capstone must integrate ≥ 60% of the course's modules. It must
require both technical work AND written justification — Harvard's "argue your choice"
pedagogy.

Reference: `14-AI-Marketing-Foundations/Capstone-Project.md` (already at this bar).

---

## 5. Recommended-readings appendix (`Recommended-Readings.md` per course)

Each course root must include `Recommended-Readings.md` with at minimum:
- **3–5 canonical textbooks** for the field (publisher, edition, ISBN if available)
- **5–10 seminal papers / HBR articles / McKinsey reports** with direct links
- **3–5 industry resources** (blogs, podcasts, newsletters worth subscribing to)
- **2–3 free academic courses** that overlap with this material (MIT OCW, Stanford CS,
  Coursera/edX specializations)

Each entry must include a 1–2 sentence note on why it's worth the reader's time and at
what point in the course they should engage with it.

Reference exemplar: `14-AI-Marketing-Foundations/Recommended-Readings.md`.

---

## 6. Bloom's-taxonomy variety in quiz questions

Each module's `Quiz.md` (24+ questions per new course, 20+ for legacy) must distribute
across Bloom's levels:

| Bloom's level | Minimum % of quiz |
|---------------|-------------------|
| Remember (recall) | ≤ 25% |
| Understand (explain in own words) | ~25% |
| Apply (use in new scenario) | ~25% |
| Analyze / Evaluate (compare, justify) | ~20% |
| Create (design / propose) | ~5% |

Tag each question with its Bloom level using a trailing italic on the question header:

```
### Q12. <Question text> *(Apply)*
```

This is non-negotiable. Recall-only quizzes do not meet the bar.

---

## 7. Detailed wrong-answer rationales in every practice exam

Every Practice Exam answer key — `PE-1`, `PE-2`, `Final-Mock-Exam` — must explain not
only why the correct answer is correct, but why **each** incorrect option is incorrect.

**Format:**
```
**Q47. Answer: C**

**Why C is correct.** <1–3 sentences citing the framework / fact / blueprint section.>

**Why the other options are wrong.**
- A: <Specific reason A is a distractor — what concept it confuses with.>
- B: <Specific reason B is wrong — common mistake it represents.>
- D: <Specific reason D is wrong.>

**Exam-takeaway.** <1 sentence — what to remember.>
```

The "why each other option is wrong" is the differentiator from textbook-style quizzes.
This is how Harvard Law's case method teaches discernment.

---

## 8. Current real-world references (2024–2026 events)

Every course's content must include at minimum:
- ≥ 5 references to events / products / regulations from 2024–2026
- All tool prices and feature names verified against the official source as of 2026-05
- No dead model IDs (e.g., `claude-3-7-sonnet-20250219`, `gpt-4-turbo`)
- No deprecated AWS/Azure feature names without the "(legacy)" or "(superseded by X)"
  marker

The 2026-05 curation agent already swept for stale model IDs. Maintain that bar going
forward.

---

## 9. Cross-references to prerequisites and related courses

Each module's `Reading.md` opens with a **Prerequisites** callout:

```
> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [<Concept 1>](../Module-XX-<Name>/Reading.md) — covered earlier in this course
> - [<Concept 2>](../../<Course-Folder>/Module-XX/Reading.md) — covered in <Course Name>
> If any of these are shaky, pause and review before continuing.
```

And closes with a **Next steps** callout:

```
> **Where this leads.**
> - Inside this course: Module XX covers <related advanced topic>.
> - Cross-course: <Course-Name> Module XX deepens <related topic>.
> - Practice: Practice Exam <N> has <#> questions drawing from this module.
```

These cross-references make the 18 courses feel like a coherent academic program rather
than 18 isolated booklets.

---

## What stays the same

These existing site standards remain in force:
- `CLAUDE.md` §1.2 — `href` values stay as YouTube search URLs (no direct watch URLs).
- `CLAUDE.md` §1.2.1 — `data-video-id` attributes are encouraged and now at 100%
  coverage; preserve them on any card you touch.
- Verifier `scripts/verify-baseline.py` must continue to pass 15/15 after every change.
  If you rewrite a Practice Exam, run the verifier locally before claiming "done."
- Content protection JS + freshness JS wiring in `_layouts/default.html` is untouched.
- Practice exam answer-position distribution stays roughly uniform (use
  `_dev/shuffle_answers.py` after any exam rewrite if you re-let the agent generate
  options in order).

---

## Definition of "below the bar" — what triggers a rewrite

An agent should *rewrite* (not just append to) a section when ANY of these are true:

- Reading.md is < 2,500 words and the topic is exam-blueprint-significant
- Reading.md has zero named real-world examples (only generic "Company X" placeholders)
- Cheat-Sheet.md is < 500 words OR is just a bulleted recap of the reading
- Quiz.md questions are 80%+ recall-only ("What does CIA stand for?")
- Practice Exam answer keys give only "B is correct" with no rationale
- Frameworks are named without citation (Porter, Tuckman, Kotter, etc.)
- Examples reference dead products / model versions / pre-2020 pricing

An agent should *augment* (preserve + add to) when the above are NOT true. The default
is augmentation — rewrite only what's actually below the bar.

---

## Per-course elevation deliverables checklist

For each course, the elevation agent must, at minimum, produce or upgrade:

- [ ] Every `Reading.md` has ≥ 1 case study in the prescribed format
- [ ] Every `Reading.md` has citations on every named framework
- [ ] Every `Reading.md` has 3–5 Socratic discussion prompts at the end
- [ ] Every `Reading.md` has Prerequisites + Next-steps callouts
- [ ] Every `Quiz.md` has Bloom's-level tags on every question and meets the distribution
- [ ] Every Practice Exam (PE-1, PE-2, Final-Mock-Exam) has wrong-answer rationales
- [ ] Course root has `Capstone-Project.md`
- [ ] Course root has `Recommended-Readings.md`
- [ ] `README.md` mentions the new capstone and reading list
- [ ] Verifier still passes 15/15

---

## Closing principle

The certification industry has produced thousands of "cram for the test" prep books.
This site does that **and more**: it teaches the discipline. A student who finishes one
of these courses should not only pass the exam, but be able to walk into a Harvard MBA
case discussion, an MIT systems-engineering seminar, or a Stanford operations review
and contribute substantively. That's the bar.
