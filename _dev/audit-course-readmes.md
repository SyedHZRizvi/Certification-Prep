# Course README Audit
**13 READMEs audited**
**Auditor:** opus

## Overall Format Consistency

All 13 READMEs largely follow the same template:
1. Jekyll front matter (`permalink`, `title`)
2. H1 with emoji + cert name
3. Goal / Duration / Cost blockquote
4. "What You'll Learn" bullet list
5. "The N Modules" table
6. "Practice Exams" table
7. "The Single Most Important Resource"
8. "What Is The X Exam?" specs table
9. Domain weights table
10. "Recommended Path" study plan
11. "The N Most Common Reasons People Fail"
12. "Start Here" call-to-action

**Format score: 8.5/10.** Two consistency gaps stand out:

- **Practice-Exam table links are inconsistent.** 03 through 09 link the Practice-Exam file names (e.g. `[Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md)`), while 01, 02, 10, 11, 12, and 13 list the same file names as plain text with no markdown link. The 6 unlinked tables should be normalized to match the 03–09 style.
- **No cross-track recommendations anywhere.** Not a single README mentions a sibling track as a prerequisite, companion, or natural next step (only AZ-104 mentions AZ-900 in passing in its Prereq cell). For a 13-track hub with obvious laddering (CLF-C02 → SAA-C03, AZ-900 → AZ-104, AIF-C01 → AI-102, CPIM/CSCP/CLTD/CPSM family), this is a real gap.

Also worth noting: **no README mentions that this is one of 13 industry certifications** on The Cert Hub. There's no "stale 9" copy to fix — the gap is that the wider hub context is simply absent from every README. Each track currently reads as if it were the only thing on the site. (Several READMEs do encourage moving "on to AZ-104 next" or similar single-line nudges; see per-README findings.)

---

## Per-README Findings

### 01-Scrum-Master/README.md
- F1: Practice-Exam table rows (`Practice-Exam-1`, `Practice-Exam-2`, `Final-Mock`) are plain text, not links. 03–09 link the same rows. Recommend normalizing.
- F2: "Final-Mock" label deviates from the actual filename `Final-Mock-Exam.md` (every other course uses "Final-Mock-Exam" in its table). Minor inconsistency.
- F3: No mention that PSM I pairs naturally with the PMP track (02) for a project-leadership ladder, or with any of the supply-chain tracks (10–13) where agile/scrum context recurs.
- F4: Module table count (8) and module folder count both match — links resolve.
- F5: Exam specs (80 Q / 60 min / 85% / $200 / lifetime) all verify against Scrum.org as of 2024–2026.
- F6: NOT FIXED — anti-rule §1.1 in CLAUDE.md forbids modifying 01-Scrum-Master without explicit approval. All findings here are observation-only.

### 02-PMP/README.md
- F1: Practice-Exam table rows are plain text, not links. Same issue as 01.
- F2: No mention of related tracks. PMP is the natural sibling/next-step for PSM I (01) graduates, and shares vocabulary with all 4 ASCM/ISM tracks (10–13) — none of that is surfaced.
- F3: Heading `## 📚 The PMP Mindset (CRITICAL!)` uses ALL-CAPS "(CRITICAL!)" — inconsistent with the title-case convention used elsewhere. Recommend "(Critical!)".
- F4: Module table count (10) matches folder count. Links resolve.
- F5: Exam specs (180 Q / 230 min / "above target" / $405 member / $555 non-member) all verify against PMI as of 2024–2026.
- F6: NOT FIXED — same anti-rule §1.1 restriction.

### 03-AWS-Cloud-Practitioner/README.md
- F1: FIXED — `### Domain weights (memorize these!)` retitled to `### Domain Weights (Memorize These!)`.
- F2: FIXED — `## 💡 Free hands-on (optional but highly recommended)` retitled to `## 💡 Free Hands-On (Optional but Highly Recommended)`.
- F3: No "next step" pointer to SAA-C03 (04), which is the natural progression for CLF graduates. The "What You'll Learn" wraps with "no AWS work experience required" — a sentence like "When you finish, the AWS Solutions Architect Associate track (04) is the natural next step" would close the loop.
- F4: Exam specs (65 Q / 90 min / 700/1000 / $100 / 3 yr) verify against AWS as of 2024–2026.
- F5: Module table (8) matches folder count. Links resolve.

### 04-AWS-Solutions-Architect-Associate/README.md
- F1: FIXED — `### 📊 Domain weights (memorize these — they tell you where to spend study time)` retitled with proper title case.
- F2: FIXED — `### 8-week plan (recommended — sustainable)` and `### 4-week sprint (if you already know cloud basics)` retitled to `8-Week Plan` and `4-Week Sprint`.
- F3: No mention of CLF-C02 (03) as a recommended prerequisite. The 4-week sprint is explicitly "if you already know cloud basics," which is exactly what CLF teaches — the link is begging to be made.
- F4: Exam specs (65 Q / 130 min / 720/1000 / $150 / 3 yr) verify against AWS as of 2024–2026.
- F5: Module table (10) matches folder count. Links resolve.

### 05-Azure-Fundamentals/README.md
- F1: FIXED — `**Exam objective weights (memorize these):**` retitled to `**Exam Objective Weights (Memorize These):**`.
- F2: FIXED — `### 2-Week Crash Plan (only if you already work with cloud)` retitled to `### 2-Week Crash Plan (Only if You Already Work with Cloud)`.
- F3: GOOD — line 23 already says "Pass the AZ-900 — and have the vocabulary to move on to AZ-104 next." This is the single best cross-track pointer in the whole audit. Use it as the template for the others.
- F4: Reference to "Scrum Guide" on line 56 in passing ("Treat it like the Scrum Guide: the source of truth") is a nice indirect nod to the PSM I track without explicitly citing it. Could be tightened to `[the Scrum Guide](../01-Scrum-Master/)` if desired.
- F5: Exam specs (40–60 Q / 45 min / 700/1000 / $99 / no expiration) verify against Microsoft as of 2024–2026.
- F6: Module table (6) matches folder count. Links resolve.

### 06-Azure-Administrator/README.md
- F1: FIXED — `### Domain weights (memorize these)` retitled to `### Domain Weights (Memorize These)`.
- F2: FIXED — `## 🚦 Recommended Path (6-week plan)` retitled to `## 🚦 Recommended Path (6-Week Plan)`.
- F3: GOOD — Prereq line (83) does mention "AZ-900 strongly recommended." Could be promoted from a table cell to a sentence-level recommendation like 05 does.
- F4: Validity says "1 year" — Microsoft renamed this to "annual renewal" but the substance is correct. No change needed.
- F5: Exam specs (40–60 Q / 100 min / 700/1000 / $165 / 1 yr) verify against Microsoft.
- F6: Module table (10) matches folder count. Links resolve.

### 07-AWS-AI-Practitioner/README.md
- F1: FIXED — `**Domain weights:**` retitled to `**Domain Weights:**`.
- F2: FIXED — `### 4-Week Sprint (intense)` and `### 6-Week Cruise (comfortable)` retitled with parenthetical case fix.
- F3: **POTENTIAL EXAM SPEC ERROR — FLAGGED, NOT FIXED.** README says `Time | 120 minutes` (line 71). AWS's official AIF-C01 exam page (as of 2024–2026) shows the exam is **90 minutes**, not 120. Per audit rules I'm flagging rather than changing exam parameters. The orchestrator should verify against the current AWS exam page (`https://aws.amazon.com/certification/certified-ai-practitioner/`) and correct if confirmed.
- F4: No prereq pointer to CLF-C02 (03) — AIF-C01 candidates often pair the two.
- F5: Module table (8) matches folder count. Links resolve.
- F6: Goal line says "score of 750+" but the exam-specs table says pass mark is "700 / 1000 (~70%)". Both can be true (target above pass), but the inconsistency is worth a sanity check by the orchestrator.

### 08-Azure-AI-Engineer/README.md
- F1: FIXED — `### Domain weights (current as of 2025)` retitled to `### Domain Weights (Current as of 2025)`.
- F2: FIXED — `## 🚦 Recommended Path (6-week plan)` retitled to `## 🚦 Recommended Path (6-Week Plan)`.
- F3: Prereq cell mentions "Azure Fundamentals knowledge" but doesn't actually link to 05. Easy improvement.
- F4: Common reasons #1 says "Studied AWS AI services and assumed Azure works the same way" — implicitly references 07 (AWS AI Practitioner) but does not link. Linking would help students understand the tracks are deliberate companions.
- F5: Module table (8) matches folder count. Links resolve.
- F6: Exam specs (40–60 Q / 100 min / 700/1000 / $165 / 1 yr) verify against Microsoft.
- F7: Domain weights table lists 6 domains; lines 91 ("Implement decision support solutions") may be slightly outdated — current AI-102 skills outline emphasizes "Implement an Agentic Solution" instead in some 2025 revisions. Worth verifying against Microsoft Learn study guide before next major update.

### 09-CompTIA-Security-Plus/README.md
- F1: FIXED — `### Domain weights (memorize the proportions — it tells you where to spend study time)`, `### 6-week intensive plan`, `### 8-week relaxed plan` retitled to title case.
- F2: No cross-track pointers. Sec+ shares concepts with 04 (IAM/encryption), 06 (NSG/network sec), and is implicitly a prerequisite mindset for any cloud-security work — none of that is linked.
- F3: Exam specs (90 Q / 90 min / 750/900 / $392 / 3 yr) verify against CompTIA as of 2024–2026.
- F4: Module table (10) matches folder count. Links resolve.

### 10-ASCM-CSCP/README.md
- F1: Practice-Exam table rows are plain text, not links (same as 01, 02). Inconsistent with 03–09.
- F2: **No cross-track recommendations.** CSCP shares conceptual ground with PMP (02), CPIM (11), CLTD (12), and CPSM (13). At minimum CSCP should mention CPIM and CLTD as siblings under the ASCM umbrella, and CPSM (ISM) as the procurement/supply-management peer. The "Plus" section under Practice Exams is a natural home for this.
- F3: Exam specs (150 Q / 210 min / 300+ scaled / $695 member / 5 yr) verify against ASCM as of 2024–2026.
- F4: Module table (10) matches folder count. Links resolve.
- F5: Heading style matches the rest. No title-case issues.

### 11-ASCM-CPIM/README.md
- F1: Practice-Exam table rows are plain text, not links.
- F2: No cross-track recommendations. CPIM is the natural prerequisite for CSCP (10) for many candidates and shares 60%+ of vocabulary with CLTD (12). None linked.
- F3: Exam specs (150 Q / 210 min / 300+ scaled / $560 member / 5 yr) verify against ASCM.
- F4: Module table (8) matches folder count.
- F5: Heading style consistent.

### 12-ASCM-CLTD/README.md
- F1: Practice-Exam table rows are plain text, not links.
- F2: No cross-track recommendations. CLTD overlaps heavily with CSCP (10) on logistics topics — duplicate study effort if not flagged.
- F3: Exam specs (150 Q / 210 min / 300+ scaled / $695 member / 5 yr) verify against ASCM.
- F4: Module table (8) matches folder count.
- F5: Heading style consistent.

### 13-ISM-CPSM/README.md
- F1: Practice-Exam table rows are plain text, not links.
- F2: No cross-track recommendations. CPSM (sourcing/procurement) is a natural partner for CSCP (10) and PMP (02). Worth noting.
- F3: Exam specs ($589 × 3 / 165 Q each / 180 min each / 400+ scaled) verify against ISM. The "three exams" structure is documented well at the top of the README.
- F4: Module table (8) matches folder count.
- F5: Heading style consistent.

---

## Cross-Cutting Findings

1. **The entire site lacks cross-track linking.** Not one README points to a sibling course. With 13 certifications grouped into natural ladders (PSM I → PMP, CLF → SAA, AZ-900 → AZ-104, AIF → AI-102, plus the 4-track supply-chain family), this is the single biggest editorial gap. The fix is mechanical: add a small "Related Tracks" section to each README, modeled after the one-liner already in 05-Azure-Fundamentals line 23.

2. **Two distinct table-link styles.** Courses 03 through 09 use linked Practice-Exam filenames; 01, 02, 10, 11, 12, 13 do not. Normalize to the linked style across the board (cannot do this for 01/02 without human approval per CLAUDE.md §1.1).

3. **No README mentions "13 industry certifications" or otherwise frames the hub.** Per the user's audit brief, this was expected to show up as stale "Scrum + PMP only" or "one of 9" copy. It does not — the absence is more telling. Each course still reads as if it were standalone. Consider adding a 1-line footer to every README: "Part of The Cert Hub — 13 free, story-driven certification courses."

4. **Title-case violations were concentrated in H3 / parenthetical phrases** (e.g. `(memorize these)`, `(6-week plan)`, `(intense)`). Headings that begin with title case but then trail off into lowercase inside parentheses were the main pattern. All instances in 03–09 are now fixed; 01, 02, and the 4 supply-chain READMEs were either already clean or out of scope.

5. **Goal score vs pass score mismatch in 07-AWS-AI-Practitioner.** Goal line says "score of 750+" while the table lists pass mark as "700 / 1000". A pass-vs-target distinction is fine, but call it out explicitly or align the two numbers.

6. **One probable factual exam-spec error: AIF-C01 time = 120 min in 07's README.** Current AWS spec is 90 min. Flagged, not fixed. The orchestrator should verify with AWS.

7. **No README has a "What's Next" section.** Several end with motivational one-liners ("You got this. 💪") but none point students toward continued learning. A 2-line "What's Next" at the end of each — "Done with this? Try [next track]" — would tie the hub together.

---

## Issues You Fixed Yourself

Title-case normalization across 03 through 09 (cannot edit 01 or 02 per CLAUDE.md §1.1):

- **03-AWS-Cloud-Practitioner/README.md**
  - `### Domain weights (memorize these!)` → `### Domain Weights (Memorize These!)`
  - `## 💡 Free hands-on (optional but highly recommended)` → `## 💡 Free Hands-On (Optional but Highly Recommended)`
- **04-AWS-Solutions-Architect-Associate/README.md**
  - `### 📊 Domain weights (memorize these — they tell you where to spend study time)` → title case
  - `### 8-week plan (recommended — sustainable)` → `### 8-Week Plan (Recommended — Sustainable)`
  - `### 4-week sprint (if you already know cloud basics)` → `### 4-Week Sprint (if You Already Know Cloud Basics)`
- **05-Azure-Fundamentals/README.md**
  - `**Exam objective weights (memorize these):**` → `**Exam Objective Weights (Memorize These):**`
  - `### 2-Week Crash Plan (only if you already work with cloud)` → `### 2-Week Crash Plan (Only if You Already Work with Cloud)`
- **06-Azure-Administrator/README.md**
  - `### Domain weights (memorize these)` → `### Domain Weights (Memorize These)`
  - `## 🚦 Recommended Path (6-week plan)` → `## 🚦 Recommended Path (6-Week Plan)`
- **07-AWS-AI-Practitioner/README.md**
  - `**Domain weights:**` → `**Domain Weights:**`
  - `### 4-Week Sprint (intense)` → `### 4-Week Sprint (Intense)`
  - `### 6-Week Cruise (comfortable)` → `### 6-Week Cruise (Comfortable)`
- **08-Azure-AI-Engineer/README.md**
  - `### Domain weights (current as of 2025)` → `### Domain Weights (Current as of 2025)`
  - `## 🚦 Recommended Path (6-week plan)` → `## 🚦 Recommended Path (6-Week Plan)`
- **09-CompTIA-Security-Plus/README.md**
  - `### Domain weights (memorize the proportions — it tells you where to spend study time)` → title case
  - `### 6-week intensive plan` → `### 6-Week Intensive Plan`
  - `### 8-week relaxed plan` → `### 8-Week Relaxed Plan`

No stale total-counts ("9", "two", "Scrum + PMP only") were found anywhere — those issues did not exist. No "Scrum + PMP only" copy needed swapping to "your chosen certification."

No exam parameters were changed. No study plans were rewritten.
