# Cert Hub Content Audit — 2026-06-29

*Scope: all 47 courses. Findings below come from a per-course content review; every high- and critical-severity finding was additionally put through an adversarial verification pass (read-the-file / check-the-source, with a deliberate attempt to refute) before being listed here.*

---

## Executive Summary

**Course health (47 courses)**

| Overall rating | Count | Courses |
|---|---|---|
| ✅ Solid | 3 | 03-AWS-Cloud-Practitioner, 07-AWS-AI-Practitioner, 25-Windows-Server-Hybrid-Admin |
| 🟡 Minor issues | 41 | all others |
| 🔴 Needs work | 3 | 31-AWS-ML-Specialty, 34-2D-Digital-Animation, 40-CKA-Kubernetes |

No course was rated unusable. The catalog is in good shape overall: the substantive teaching content is consistently accurate and exam-aligned, and the recurring problems are narrow and highly fixable (most are a bad automated acronym-expansion pass, broken cross-course links, stale quiz headers, and a few fabricated case-study/source attributions).

**Findings by severity (246 total)**

| Severity | Count |
|---|---|
| 🔴 Critical | 6 |
| 🟠 High | 49 |
| 🟡 Medium | 72 |
| ⚪ Low | 119 |

**Verification results for high/critical findings**

All **55** high- and critical-severity findings were independently verified.

- **Confirmed: 55 / 55 (100%)**
- **Refuted: 0**
- **Uncertain: 0**

Every high/critical finding survived an adversarial check — in several cases the verifier found the problem was *worse or more widespread* than first reported (e.g. 29's answer-key bias, 27's PIM gloss, 17's CPA gloss). A handful of confirmed findings had a minor over-statement in their *rationale* (e.g. an off-by-one occurrence count, one over-included file path), noted inline in the table below, but none changed the verdict.

**The 6 critical findings** (all confirmed) cluster in three courses and share one theme — *the product sells prep for the wrong or non-existent target*:

- **31-AWS-ML-Specialty** — markets live prep for **MLS-C01, an exam retired 2026-03-31** (no longer bookable); also claims a fabricated "2026 GenAI-weighted blueprint."
- **40-CKA-Kubernetes** — omits two entire current-curriculum competency areas: **Gateway API**, and **Helm/Kustomize + CRDs/Operators**.
- **34-2D-Digital-Animation** — can't decide between the **Animate** and **After Effects** certs, and states a **factually wrong exam format** (90 min/60 Q vs the real ~50 min ACP exam).

---

## Confirmed Critical & High Findings

*Includes every critical/high finding whose verdict was `confirmed` or `uncertain`. There were **0 refuted** findings to exclude (and 0 uncertain). All 55 verified high/critical findings appear below.*

### 🔴 Critical (6)

| Course | Location | Issue | Suggested Fix |
|---|---|---|---|
| 06-Azure-Administrator | README.md:56; Module-02 Reading.md:22 + Cheat-Sheet.md:13; Module-01 Reading.md:448; Flashcards.md:323 | "PIM" expanded as **"Product Information Management"** in 5 places (incl. the printable cheat sheet) on a heavily-tested AZ-104 identity concept; contradicts the module's own body which correctly says **Privileged Identity Management**. | Replace every "PIM (Product Information Management)" → "PIM (Privileged Identity Management)". |
| 31-AWS-ML-Specialty | README.md + course-wide | Markets live prep for **AWS ML-Specialty (MLS-C01), retired 2026-03-31** — no longer bookable as of the audit date — with no disclaimer; tells students to "book the exam." Replacement is MLA-C01. | Add a dated retirement notice; re-scope to MLA-C01 **or** relabel as historical ML-on-AWS knowledge. Remove "book the exam" CTAs. |
| 34-2D-Digital-Animation | README.md + Final-Mock-Exam.md | **Cert identity conflict**: README/titles say ACP **Animate**; Final Mock is built as ACP **After Effects** (and the README domain table is the After Effects blueprint). Two different exams. | Pick one credential and make every file consistent (or present honestly as a dual-tool course preparing for both). |
| 34-2D-Digital-Animation | README.md:121 + Final-Mock-Exam.md:7 | **Wrong real-exam format**: states ~90 min / 60 Q. Real ACP exams are ~50 min / ~30 Q + a live in-app Tasks section. Violates the repo's own "mock Q-count must match real exam" rule. | Correct to ~50 min / ~30 Q + in-app tasks; rebuild/relabel the mock; note the live-software section a written mock can't replicate. |
| 40-CKA-Kubernetes | Module-04 Reading.md + README.md | **Gateway API never taught** (0 occurrences of Gateway API / HTTPRoute / GatewayClass), yet it's a named competency in the current CKA v1.35 curriculum; Ingress is framed as the modern approach. | Add a Gateway API section (GatewayClass / Gateway / HTTPRoute incl. TLS) alongside Ingress; update Module 4 summary + README map. |
| 40-CKA-Kubernetes | Module-02 + Module-06 Reading.md | **Helm, Kustomize, CRDs, and Operators never taught** — two distinct current Cluster-Architecture competencies. "Helm" appears once (a Cilium install-row); Kustomize/CRD/operator have zero teaching coverage. | Add coverage: CRDs + operator pattern (install/inspect, `kubectl explain`), Helm basics (template/install/`--set`/upgrade), Kustomize (`kustomization.yaml`, overlays, `apply -k`). |

### 🟠 High (49)

| Course | Location | Issue | Suggested Fix |
|---|---|---|---|
| 01-Scrum-Master 🔒 | Practice-Exams/Final-Mock-Exam.md:4 | Final Mock is **60 Q / 60 min** but PSM I (and the course's own README) is **80 Q**. Trains the wrong pace (~60s vs ~45s/question); internal contradiction. | Expand mock to 80 Q (pass 68/80), keep the 60-min box. *(Owner approval required — protected course.)* |
| 04-AWS-SAA | Module-05 Reading.md (~L337) | **Fabricated named testimony**: attributes "March 2021 Congressional testimony" + an AWS Builders' Library piece to "Robinhood CTO Andy Hu." The real witness was CEO Vlad Tenev; no such CTO/source exists. False-attribution/accuracy risk. | Remove the named attribution; reframe as illustrative, or use only the verifiable public fact. |
| 04-AWS-SAA | Module-07 Reading.md (~L309-340); Module-06 Reading.md (~L337) | **Fabricated source attributions**: Slack "$1.2M/yr cross-AZ bill" tied to a real but unrelated memory-footprint post (wrong authors/date, no such content); Zoom figures tied to non-existent "Hash Bin's Architecture of Zoom 2021." | Strip invented figures/citations or relabel as hypothetical worked examples; verify any retained named source. |
| 06-Azure-Administrator | Module-03/04/05/07 Reading.md (cross-course links) | Acronym expansion **injected text into folder names inside link URLs** (e.g. `Module-03-EC2 (Elastic Compute Cloud)-Deep-Dive`) → 404s. *(Verifier note: the Module-08 line in the citation is NOT broken — over-inclusive by one; core finding stands.)* | Remove injected parentheticals from URL path segments; keep expansions in prose only. |
| 06-Azure-Administrator | Module-02/03/05/06/07/08/09/10 Reading.md | Cross-course links use `../../../` (3 levels up) which overshoots above the repo root → 404. Verified: `../../09-…` exists, `../../../09-…` missing. Files are internally inconsistent (one line mixes a correct and a broken path). | Change `../../../` → `../../` for all course-root cross-links; standardize. |
| 10-ASCM-CSCP | README.md + Module-02/03/04/05/09/10 Reading.md | Acronym expansion injected text into link paths (e.g. `Module-04-Supply-Planning-SOP (Standard Operating Procedure)/`) → 404. Repo-wide grep found 10+ broken links (claim was "≥8"). | Strip parentheticals from URL paths to match real folder names; never run the expander on link targets. |
| 11-ASCM-CPIM | README + Module-02/04/05 (5 links) | Module-3 link path corrupted to `Module-03-SOP (Standard Operating Procedure)-…` → 404 in 5 places. | Remove the injected parenthetical from all 5 URLs. |
| 11-ASCM-CPIM | Same 5 links | The injected expansion is also **factually wrong**: here S&OP = **Sales & Operations Planning**, not "Standard Operating Procedure." | Same fix; ensure the glossary distinguishes S&OP from any "SOP" expansion. |
| 12-ASCM-CLTD | Module-07 Cheat-Sheet.md:123 + Reading.md:28 + Flashcards.md:673 | **AEO** wrongly expanded as "Answer Engine Optimization" (it's **Authorized Economic Operator**) — the wrong term landed in the two highest-frequency review artifacts (cheat sheet + flashcards); contradicts the reading body. | Replace with "Authorized Economic Operator" in all three. |
| 12-ASCM-CLTD | Module-08 Reading.md:234 + Cheat-Sheet.md:117 | **CDP** glossed as "Customer Data Platform" in ESG tables; it's the **Carbon Disclosure Project**. Reading prints both side-by-side (self-contradictory). | Replace with "Carbon Disclosure Project" (or just "CDP"). |
| 13-ISM-CPSM | README.md exam tables (L55-61, L134-148) | **Core exam structure wrong on 3 counts**: exam titles, question counts (Exam 1 is 180 Q not 165), and times (Exams 2-3 are 165 min not 180). Foundational facts for a paid prep product. | Correct to official ISM structure (Core 180 Q/180 min; Integration & Leadership 165 Q/165 min; pass 400 scaled). Verify at ismworld.org. |
| 14-AI-Marketing-Foundations | README.md:127 | **Wrong Meta exam code** (lists 400-101; real is **100-101**) and overstated specs (70 Q claimed). Wrong code recurs in 2 more files. *(Verifier note: the finding's "~75 min" figure is itself unsupported; the wrong-code/70-Q core is solid.)* | Fix code to 100-101; correct specs (~50 Q); verify against the live Meta/Certiport page. |
| 14-AI-Marketing-Foundations | All 10 Module Reading.md footers | Every module's "Where this leads" cites **non-existent downstream folder names** (15-AI-Marketing-Strategy, etc.) that contradict the README's own ladder. | Update cross-references to the real folders (15-Practitioner, 16-Strategist, 17-Entrepreneur, 18-Capstone). |
| 15-AI-Marketing-Practitioner | Module-07 Reading.md:199 | **Fabricated acquisition claim**: "Mutiny acquired by Salesforce in 2024." Mutiny is independent. *(Verifier note: the error is **wider** than reported — the Q7 answer key repeats it, so the quiz does NOT contradict the reading as stated.)* | Remove the acquisition claim; describe Mutiny as an independent B2B personalization platform. Fix the quiz answer key too. |
| 17-AI-Marketing-Entrepreneur | Course-wide, 11 occurrences (README + Modules 01/04/06/07 + cheat sheets + Flashcards) | **"CPA" expanded as "Cost Per Acquisition" in every "consult a CPA" legal/tax disclaimer** — it means **Certified Public Accountant**. Especially confusing in a marketing course where CPA-the-metric is separately taught. | Global replace in tax/legal contexts → "CPA (Certified Public Accountant)"; leave genuine metric uses alone. |
| 18-AI-Marketing-Capstone | Module-06 Reading.md (5 code blocks) | Code uses **`claude-sonnet-4-7`, a non-existent model ID** → 404 not_found_error for any learner who pastes it; misleading "2026-current" comment. *(Verifier note: appears 4× in code, not 5 — minor miscount.)* | Replace with a real ID (`claude-sonnet-4-6`, or `claude-opus-4-8` for higher capability); drop the false "current" comment. |
| 18-AI-Marketing-Capstone | Module-06 Reading.md (Cost Estimating) | Quotes pricing for **two retired models** (Claude 3.7 Sonnet, 3.5 Haiku — EOL 2026-02-19) in a course "updated for 2026"; also internally inconsistent with the (also-wrong) Sonnet-4.7 code. | Update to current non-retired models + pricing (Sonnet 4.6 $3/$15; Haiku 4.5 $1/$5); align names with the code. |
| 18-AI-Marketing-Capstone | Modules 01-08 (7 of 8 Reading.md) | Cross-course links use **descriptive names that don't match the real folders** (15-AI-Marketing-SEO-Content, etc.), contradicting the README ladder; 16-20 occurrences across 7 files. | Replace with real titles (Practitioner/Strategist/Entrepreneur) and reconcile which course teaches each prerequisite. |
| 18-AI-Marketing-Capstone | Module-04 + Module-05 Reading.md | Analytics/attribution/GA4/automation prerequisites point to **course 17 (Entrepreneur), which teaches none of it**; that material lives in course 16 (Strategist) and 15 (Practitioner). Sends learners to the wrong course. | Re-point GA4/attribution → 16-Strategist (Mod 3/4/5); automation → 15-Practitioner Mod 9. |
| 20-E-Commerce | README.md + every Module Reading.md + Final-Mock-Exam.md | **Fabricated per-exam question counts** ("Adobe Commerce Business Practitioner asks classification in 4-6 of its 60 questions") and broad DTC content framed as on-blueprint; real exam is **~50 Q, not 60** (and 100 min, ~70% — both also wrong). | Reframe as broad operator training that *partially* supports the Adobe cert + others; remove invented counts; fix the mock's claimed format. |
| 26-Microsoft-Endpoint-Admin | Module-08 Reading.md:121 | **Wrong licensing fact taught as a "MEMORIZE" item**: claims Remediations need Intune Plan 2/Suite. Per current MS docs the gate is a **Windows Enterprise/Education/VDA** subscription (an M365-E3 user with only Intune Plan 1 *can* run them). | Correct to the Windows-subscription gate; keep the (separate, correct) Plan-2 requirement for *advanced* Endpoint Analytics. |
| 26-Microsoft-Endpoint-Admin | Module-08 (Reading/Cheat/Quiz) + Flashcards + 2 exams | The same wrong "Plan 2/Suite" claim is **propagated across 6 files**, including 2 graded exam questions whose options both rest on the false premise. | Fix every instance together, incl. rewriting the quiz/exam options so the correct answer (Windows license) is selectable. |
| 27-Microsoft-Identity-Access-Admin | All modules + README + Flashcards (14 occurrences) | **PIM glossed as "Product Information Management" 14×**, including the Module 6 H1 title; SC-300's most-tested governance acronym. Body text says Privileged Identity Management → self-contradiction. *(Verifier confirmed exactly 14.)* | Global replace → "PIM (Privileged Identity Management)" across all 14. |
| 28-Claude-Architect | Modules 02/03/04/06/07 Reading + Module-03 Cheat-Sheet (20 occurrences, 6 files) | Every code sample uses **`claude-sonnet-4-6-20260301`, a date-suffixed ID that doesn't exist** → 404. The course repeatedly tells learners to paste it into the SDK/Workbench. *(Verifier confirmed 20.)* | Replace with the bare alias `claude-sonnet-4-6`; use bare aliases throughout; state the no-date-suffix rule. |
| 28-Claude-Architect | Module-02 Reading (flagship story, MEMORIZE callout) + Module-04 | Teaches **last-assistant-turn prefill as the primary way to force JSON**, which **returns 400 on the current 4.6+ models** the course centers on; never mentions the modern replacement (`output_config.format` / `messages.parse()`). | Add a structured-outputs section as the current primary technique; keep prefill only as legacy/historical context. |
| 29-Prompt-Engineering-Specialist | Final-Mock-Exam.md + both Practice Exams + 8 Quiz.md | **Systematic correct-answer position bias**: Final Mock is 56/60 "B"; PE2 29/30; quizzes up to 25/26 "B". Always-pick-B scores 93%. *(Verifier note: the 8 module quizzes *are* shuffled at render by quiz.js, so the exploit only truly works on the Final Mock + 2 Practice Exams — still a real, reproducible defect on the stated grading gate.)* | Shuffle answer positions ~uniformly in the exams; add a verify-baseline check that flags any single letter >50%. |
| 31-AWS-ML-Specialty | README.md + Module-07 Reading.md | **Fabricated "2026 MLS-C01 blueprint / post-2024 GenAI refresh"** and "GenAI is ~25% of the modelling domain." AWS never refreshed MLS-C01 for GenAI; internally inconsistent with the genuine 4-domain blueprint it also cites. | Remove the false blueprint claims; label the GenAI module as supplementary content exceeding published MLS-C01 objectives. |
| 32-Google-AI-Pro | Practice-Exam-1/2 + Final-Mock-Exam.md | **Answer-key position bias**: 77% / 83% / **85% "B"**, with B usually the longest/most-detailed option. *(Verifier note: the practice-exam engine does NOT shuffle, so the always-B exploit is reproducible end-to-end.)* | Re-balance answer letters to ~25% each; rewrite distractors to similar length/plausibility. |
| 32-Google-AI-Pro | Module-01 Reading + Quiz + Cheat-Sheet + Flashcards + exams | **Fabricated model SKU "Gemini 2.5 Ultra"** presented as a real, dated, priced, memorize-level fact. "Ultra" was a Gemini 1.0 tier only; 2.x ships Flash-Lite/Flash/Pro. Internally inconsistent (1.5/2.0 shown with no Ultra). | Remove the fabricated 2.5 Ultra row/price; describe the tier ladder generically; note Ultra was a 1.0-era tier. |
| 35-Motion-Graphics-UI-Animation | Module-04 Reading.md:10 | **Nike Swoosh story wrong on 3 counts**: says "1997, a design firm, $35." It was **1971, Carolyn Davidson (one freelance student)**; the Swoosh was world-famous by 1997 so the story is impossible. | Correct to "1971, Carolyn Davidson, $35"; remove "a design firm." |
| 35-Motion-Graphics-UI-Animation | README.md + Final-Mock-Exam.md | **Cert mis-named** ("ACP in After Effects" vs the real "ACP in Visual Effects and Motion Graphics Using After Effects") and **mock format wrong** (60 Q/90 min vs real ~50 min). *(Verifier note: README does transparently call the mock "harder than ACP," softening intent — but the name + format errors are real.)* | Use the full official credential name; align/relabel the mock to the real ~50-min format. |
| 36-3D-Animation-Blender | All modules + Practice-Exams (40 occurrences) | Course pervasively frames a **non-existent "Blender Foundation certification" with testable objectives**; the Foundation administers no proctored cert. Contradicts the README's own honest "portfolio short, not an exam" line. | Reframe "What the Exam Tests" as competency/portfolio-review checklists; don't assert a Blender Foundation cert exists. |
| 36-3D-Animation-Blender | README.md:22-23 vs all module Readings | **Internal contradiction on the deliverable**: README says "not a proctored exam, a portfolio short," but all 10 modules say "the exam" / "Blender Foundation certification." | Pick one framing; rewrite the per-module "exam" tables as competency checklists; reposition quizzes as self-assessment. |
| 38-VFX-Compositing | README.md:43 + Flashcards:285 + Modules 01/06/08/10 (8 places) | **DMP wrongly expanded as "Data Management Platform"** (ad-tech) in 8 places incl. student flashcards + the README promise. In VFX, DMP = **Digital Matte Painting** (which the course defines correctly elsewhere). | Remove every "(Data Management Platform)" gloss; where wanted, use "DMP (Digital Matte Painting)." |
| 38-VFX-Compositing | Module-02 Reading.md:408-424 + Module-03 Reading.md:412-424 | **Copy-pasted ANIMATION further-reading block** appended to two VFX modules (Williams/Disney animation texts; false "Every principle has a Williams illustration"), creating two competing reading lists. | Delete the duplicated animation "Canonical Further Reading" + generic exam blocks; keep each file's correct VFX list. |
| 39-Game-UI-Animation | README.md + Final-Mock-Exam.md | Packaged as prep for a **non-existent "Real-Time Animation Specialist" credential** with 60-Q/90-min/80% exam scaffolding. *(Verifier note: already labels itself "Cert Hub Original" and ties the mock to portfolio review — softer than stated, but the scaffolding implies an external exam.)* | Reframe the "Final Mock" as a Portfolio-Readiness / Skills Mastery check; state explicitly there is no external exam. |
| 39-Game-UI-Animation | Module-01 Reading + Cheat-Sheet + Flashcards + Quiz (5 files) | **DOOM Eternal wrongly described as using "motion matching"** (it uses authored state-machine animation). Motion matching = Ubisoft/EA/Naughty Dog. Propagated into a flashcard + an "exam fact." | Remove DOOM Eternal as the motion-matching example; attribute motion matching correctly; describe DOOM as authored state-machine animation. |
| 39-Game-UI-Animation | Module-01 Reading.md | **False biography**: credits DOOM Eternal's philosophy to "Simon Clavet (then id)." Clavet is a Ubisoft Montreal programmer (For Honor motion matching), never worked at id, isn't DOOM's animator. | Delete the Clavet attribution; cite an actual id talk if a source is wanted. |
| 40-CKA-Kubernetes | Module-03 Reading.md | **HPA (workload autoscaling) never taught** though it's a named Workloads-&-Scheduling competency; appears only as a passing table entry, a flashcard, and a wrong-answer distractor. | Add an HPA section (autoscaling/v2 object, `kubectl autoscale`, metrics-server dep, HPA-vs-VPA). |
| 42-Urdu-Language | Module-09 Reading.md | The most famous **Ghalib couplet is misquoted** — a spurious izafat kasra on ارمان leaves the noun grammatically dangling; appears twice. Canonical reference in a C1/C2 poetry module. *(Verifier note: Final-Mock Q19 actually quotes the first line only — minor rationale slip — but the Reading error is real.)* | Remove the kasra: میرے ارمان; fix transliteration to "mere armaan" in both copies. |
| 43-Persian-Language | README.md | Sold as exam prep on a site full of real certs, but **never mentions the real Persian proficiency exams (AMFA/SAMFA, Saadi Foundation)**; mocks aren't aligned to any real exam. Learners stay unaware a recognized exam exists. | Name AMFA/SAMFA and their 4-skill structure; clarify the mocks are CEFR-modeled practice, not a replica; point to the official test. |
| 44-Arabic-Language | Module-01 Reading.md | **Native-speaker count understated and self-contradictory**: says "over 160 million native" while the course's own Final Mock passage says "more than 400 million native." | Use a consistent, defensible figure (~300M native / 400M+ total) and reconcile with the mock passage. |
| 44-Arabic-Language | Module-05 Reading.md | **Unedited author notes-to-self in published content** ("— wait!", "No:", "already shown") plus a self-contradicting broken-plural row (كُتُب mislabeled أَفْعَال; it's فُعُل). | Remove the editorial debris; move كِتاب→كُتُب to the correct فُعُل row; use a clean أَفْعَال example (قَلَم→أَقْلَام). |
| 45-French-Language | README.md (Week 4 study-plan row) | **Template cross-contamination**: "PE" expanded to "Module 04 + PE (Private Equity)-1" in a French course (Week 6 correctly says "PE-2"). | Change to "Practice Exam 1"; audit the repo for the same "PE (Private Equity)" expansion. |
| 45-French-Language | README map vs Module-05 + Module-07 Reading.md | **README mis-describes 2 grammar modules** (3 of 4 listed topics wrong for each): claims Mod 5 covers conditionnel/relative clauses/subjunctive (it doesn't) and Mod 7 covers passive/nominalization (it doesn't). | Rewrite the Mod 5 & 7 "Key Topics" cells to match the actual Reading contents. |
| 45-French-Language | Modules 07/09 vs Final-Mock-Exam.md | **Two core B1-B2 topics tested but never taught**: relative pronouns (qui/que/dont/où — Final Mock Q22 needs "dont") and the passive voice (promised in README, only a 2-word recognition row exists). | Add a relative-pronouns section and a passive-voice formation/usage section so the productive grammar matches the exam + README. |
| 46-Quran-Recitation | Module-12 Reading.md | **Hafs vs Warsh reading of Al-Fatiha 1:4 is REVERSED** and propagates through the flagship comparison table; contradicts Module 5 (correct) and the printed Arabic. The central worked example of the Qira'at section. | Swap the assignments (Hafs = long مَٰلِكِ; Nafiʿ/Warsh = short مَلِكِ); fix the master table, per-Qiraʾah cards, and summary. |
| 47-Online-Marketing-Mastery | Module-03 Reading.md | **Wrong Universal Analytics sunset date**: says data stopped processing July 1 2024. Standard UA stopped **July 1 2023** (only paid GA360 went to 2024); also conflates "processing stopped" with "access ended." A GA4-tested date. | Correct to "standard UA stopped 2023-07-01; GA360 2024-07-01; access ended 2024-07-01." |

🔒 = finding sits in a protected course (01-Scrum-Master / 02-PMP) — fixes require owner approval.

---

## Per-Course Scorecard

| # | Course | Overall | #Findings | One-line note |
|---|---|---|---|---|
| 01 | Scrum-Master 🔒 | 🟡 Minor | 3 | Excellent Scrum-Guide accuracy; **Final Mock is 60 Q not the real 80** (confirmed). |
| 02 | PMP 🔒 | 🟡 Minor | 5 | Strong, accurate EVM/ECO content; half-length mock + a cluster of stale quiz/hours headers. |
| 03 | AWS-Cloud-Practitioner | ✅ Solid | 2 | Current to CLF-C02; only a per-domain mock-balance label and a Trusted-Advisor staleness nit. |
| 04 | AWS-Solutions-Architect-Associate | 🟡 Minor | 5 | Technically excellent; **2 fabricated case-study attributions** (Robinhood/Slack/Zoom) confirmed. |
| 05 | Azure-Fundamentals | 🟡 Minor | 5 | Accurate AZ-900; cluster of wrong acronym glosses (PIM/CAC) in Module 4. |
| 06 | Azure-Administrator | 🟡 Minor | 7 | Strong AZ-104 teaching; **critical PIM gloss + broken cross-course links** (3 confirmed). |
| 07 | AWS-AI-Practitioner | ✅ Solid | 3 | Accurate to AIF-C01 blueprint; README pass-score/level/format mislabels only. |
| 08 | Azure-AI-Engineer | 🟡 Minor | 2 | Current AI-102 content; README lists a **retired "decision support" domain**. |
| 09 | CompTIA-Security-Plus | 🟡 Minor | 4 | Accurate to SY0-701; a few wrong acronym glosses (PE/CTR/CAC). |
| 10 | ASCM-CSCP | 🟡 Minor | 7 | Substantively accurate; **broken link-path injection** (confirmed) + glossary errors. |
| 11 | ASCM-CPIM | 🟡 Minor | 5 | Accurate CPIM body; **broken+wrong Module-3 links** (2 confirmed) + messy quiz answer keys. |
| 12 | ASCM-CLTD | 🟡 Minor | 9 | Strong Incoterms coverage; **AEO + CDP mis-glossed in flashcards/cheat sheets** (2 confirmed). |
| 13 | ISM-CPSM | 🟡 Minor | 6 | Strong teaching; **core exam titles/counts/times wrong** (confirmed) + missing 4-yr score validity. |
| 14 | AI-Marketing-Foundations | 🟡 Minor | 5 | Current 2024-26 facts; **wrong Meta code + broken downstream folder names** (2 confirmed). |
| 15 | AI-Marketing-Practitioner | 🟡 Minor | 5 | Strong paid-media core; **fabricated Mutiny/Salesforce acquisition** (confirmed, in reading+quiz). |
| 16 | AI-Marketing-Strategist | 🟡 Minor | 5 | Technically current; wrong acronym glosses (MAP/CPA) + a couple quiz/citation nits. |
| 17 | AI-Marketing-Entrepreneur | 🟡 Minor | 3 | Exceptionally well-disclaimed; **CPA→"Cost Per Acquisition" in 11 legal disclaimers** (confirmed). |
| 18 | AI-Marketing-Capstone-Portfolio | 🟡 Minor | 7 | Honest project framing; **invalid model ID, retired pricing, wrong cross-refs** (4 confirmed). |
| 19 | Bitcoin-Cryptocurrency | 🟡 Minor | 4 | Excellent/current to CBP; cluster of finance-acronym mis-glosses (CLTV/CTR/CDP/LTV). |
| 20 | E-Commerce | 🟡 Minor | 4 | Accurate & current; **fabricated Adobe per-exam question counts + wrong format** (confirmed). |
| 21 | CompTIA-A-Plus | 🟡 Minor | 4 | High accuracy to 220-1101/1102; minor acronym (PoS/GPT) + score-scale label slips. |
| 22 | CompTIA-Network-Plus | 🟡 Minor | 6 | Strong N10-009 alignment; several wrong acronym glosses (AD/CDP/NPS) + a quiz artifact. |
| 23 | CompTIA-Linux-Plus | 🟡 Minor | 5 | Accurate to XK0-005; **acronym expander corrupted a code example + a link path**. |
| 24 | CompTIA-Server-Plus | 🟡 Minor | 5 | Accurate (RAID/ports/SK0-005); five wrong acronym glosses (RDS/DRP/PIM/GTM) only. |
| 25 | Windows-Server-Hybrid-Admin | ✅ Solid | 3 | Excellent AZ-800/801 alignment; one wrong Hyper-V Replica port + 2 minor link/label slips. |
| 26 | Microsoft-Endpoint-Admin | 🟡 Minor | 4 | Strong MD-102; **wrong Remediations licensing taught + tested across 6 files** (2 confirmed). |
| 27 | Microsoft-Identity-Access-Admin | 🟡 Minor | 5 | Current SC-300; **PIM mis-glossed 14× incl. a module title** (confirmed) + a workload-identity gap. |
| 28 | Claude-Architect | 🟡 Minor | 6 | Strong concepts; **invalid model ID (20×) + prefill-for-JSON that 400s on current models** (2 confirmed). |
| 29 | Prompt-Engineering-Specialist | 🟡 Minor | 2 | Excellent teaching; **answer-key position bias makes the Final Mock gameable** (confirmed). |
| 30 | Generative-AI-Engineer | 🟡 Minor | 5 | Technically deep; a fabricated Anthropic "64% survey" stat + Klarna/MRR precision errors. |
| 31 | AWS-ML-Specialty | 🔴 Needs work | 6 | **Sells prep for the retired MLS-C01 exam + fabricated GenAI blueprint** (2 confirmed). |
| 32 | Google-AI-Pro | 🟡 Minor | 6 | Accurate Vertex map; **answer-key bias + fabricated "Gemini 2.5 Ultra" SKU** (2 confirmed). |
| 33 | Animation-Foundations | 🟡 Minor | 6 | Factually strong; misdescribed Arcane award + a fabricated name (Pixia Berger) + duplicated boilerplate. |
| 34 | 2D-Digital-Animation | 🔴 Needs work | 6 | **Cert identity conflict (Animate vs AE) + wrong exam format** (2 critical, 1 high confirmed). |
| 35 | Motion-Graphics-UI-Animation | 🟡 Minor | 5 | Deep web-animation content; **wrong Nike story + mis-named cert/format** (2 confirmed). |
| 36 | 3D-Animation-Blender | 🟡 Minor | 9 | Accurate to Blender 4.x; **pervasive non-existent "Blender Foundation cert" framing** (2 confirmed). |
| 37 | Advanced-Character-Animation | 🟡 Minor | 6 | Genuinely advanced & accurate; closed studio (Blue Sky) + NLP gloss + overstated lip-sync "fact." |
| 38 | VFX-Compositing | 🟡 Minor | 5 | Accurate/current; **DMP mis-glossed 8× + animation boilerplate pasted into 2 modules** (2 confirmed). |
| 39 | Game-UI-Animation | 🟡 Minor | 7 | Strong tooling content; **fake credential framing + DOOM "motion matching" myth + false bio** (3 confirmed). |
| 40 | CKA-Kubernetes | 🔴 Needs work | 4 | **Omits Gateway API, Helm/Kustomize, CRDs/Operators, HPA** — current-curriculum gaps (3 confirmed). |
| 41 | English-Language | 🟡 Minor | 3 | Strong CEFR course; idiom count overstated (100 vs ~54) + a speaker-count contradiction. |
| 42 | Urdu-Language | 🟡 Minor | 8 | Linguistically excellent; **misquoted Ghalib couplet** (confirmed) + scattered script/translit typos. |
| 43 | Persian-Language | 🟡 Minor | 6 | Accurate Persian; **never names the real AMFA/SAMFA exam** (confirmed) + dead resource URLs. |
| 44 | Arabic-Language | 🟡 Minor | 7 | Strong teaching; **self-contradictory speaker count + author notes-to-self left in** (2 confirmed). |
| 45 | French-Language | 🟡 Minor | 9 | Linguistically accurate; **README mis-maps modules + tests untaught grammar** (3 confirmed). |
| 46 | Quran-Recitation | 🟡 Minor | 5 | Text/tajweed accurate; **reversed Hafs/Warsh in the flagship Qiraʾat table** (confirmed). |
| 47 | Online-Marketing-Mastery | 🟡 Minor | 7 | Current & well-aligned; **wrong UA sunset date** (confirmed) + cross-reference/label slips. |

🔒 = protected course (owner approval required for fixes).

---

## Medium & Low Findings

*(Grouped by category. Counts: 72 medium, 119 low. The high/critical items above are not repeated here.)*

### Accuracy (the largest group)
Two distinct sub-patterns dominate:

- **Wrong automated acronym expansions** (the single most common defect across the catalog). Domain-correct terms are overwritten by unrelated finance/marketing/CS glosses. Confirmed instances span at least 14 courses:
  - PIM → "Product Information Management" (05, 24)
  - CAC → "Customer Acquisition Cost" (05, 09)
  - CTR → "Click-Through Rate" (09, 19)
  - CLTV → "Customer Lifetime Value" (19); CDP → "Customer Data Platform" (16, 19); LTV → "Lifetime Value" (19)
  - MAP → "Minimum Advertised Price" (16, 25, 31 — should be Mean Average Precision / Mirror-Accelerated Parity); MRR → "Monthly Recurring Revenue" (30 — should be Mean Reciprocal Rank)
  - AD → "Active Directory" (22, 31 — should be Administrative Distance / Accuracy Difference); CDP → "Customer Data Platform" (22 — should be Cisco Discovery Protocol); NPS → "Net Promoter Score" (22 — should be Network Policy Server); PE → "Private Equity" (09, 22)
  - GPT → "Generative Pre-trained Transformer" in disk-partition context (21, 23 — should be GUID Partition Table); PoS → "Proof of Stake" (21 — should be Point of Sale)
  - RDS → "Relational Database Service" (24, should be Remote Desktop Services); DRP → "Distribution Requirements Planning" (24 — should be Disaster Recovery Plan); GTM → "Google Tag Manager" (24 — should be Global Traffic Management)
  - REST → "Representational State Transfer" on phoneme mouth shapes (34); OAM → invented "Open Adobe Animate Package" (34); CTR/CLTV mode (19); DSP → "Demand-Side Platform" (12); GBP → "Google Business Profile" (12); SQL → "Sales Qualified Lead" (47); CPO → "Chief Product Officer" (13); NLP → wrong/doubled expansion (37)

- **Stale / drifting facts and figures** that need a refresh:
  - Trusted Advisor "7 core checks" pre-2023 framing (03); AZ-900 "Yes/No/Yes" scenario label (05); Lookout for Vision "consolidated under Rekognition" — actually discontinued (31)
  - Public-domain music cutoff "before 1928" → should be 1931 as of 2026 (35, **legal**); AE expressions "ECMAScript 3" → now ES2018/V8 (35); computer-use beta tool versions pinned to Oct-2024 (28)
  - Prompt-caching minimums/markup imprecision (28); embedding dimensions (32: gemini-embedding-001 is 3072 not 768); Opus/Sonnet context windows (28: 1M not 500K/200K); `kubectl run --requests` removed flag (40)
  - DSA "applied Feb 2024 for VLOPs" nuance (20); PCI-DSS v4.0 date contradiction (20); Dropbox repatriation 2016 not 2017 (04); Christensen milkshake/HBR year 2005 not 2003 (16); SOC 2 expansion (04); SWE-bench framing (30); Klarna "~95 languages"/headcount (30, ~35 languages); Anthropic contextual-retrieval intermediate rows invented (30)
  - Fabricated/garbled citations: "Pixia Berger" for Inside Out (33); "Niklas Lentz" second-brain (14 — Tiago Forte/Luhmann); garbled Cryptoassets attribution + invented "Matt Lawant" (19); "Solitude (2022) by Alberto Mielgo" + Sony/Hotel-Transylvania-Blender claims likely fabricated (36); "2026 CLTD ECM" doesn't exist (12); "Pro/Plan" mislabels; Arcane award misdescribed (33)
  - Language-course numeric/script slips: Urdu/Arabic transliteration typos (42, 44); Persian false cognate بایاب + transliteration errors (43); FarsiPod101/BBC Persian dead URLs (43); French "tristness" non-cognate + speaker-count 320M vs 300M (45); 1.5B-speakers contradiction (41); pleurer mis-conjugation (45)
  - Notation/diagram errors: CSCP safety-stock σ collision (10); CLTD Triple-Bottom-Line 4-node diagram (12); Blender "P key"/Unreal coordinate convention (36); calibration comment-vs-code mismatch (16); GA4 2-month retention default (16); FIDO2 "TPM" vs secure element (27)

### Consistency (the second-largest group)
- **Broken cross-references and links** (after the high-severity link-injection cases): mismatched prerequisite module numbers/labels in 47 (Modules 06/08/09/10), 13, 19, 25 (Module-10 `../../../` overshoot), 23, 12, 18, 38 (Module-08 link).
- **Stale quiz/exam headers** ("18 questions / aim 15/18" etc. when banks were expanded): 01 (Mod 1), 02 (Mod 2, 6), and several module quizzes elsewhere.
- **Internal number contradictions**: README pass-mark vs spec table — 04 (750 vs 720), 07 (750 vs 700), 21 (675/700 vs 675/900), 44 (57.5 vs 56.25/75); PMP study-hours don't reconcile (02); AZ-900 mock per-domain weights vs labels (03); module/scope/count mismatches (41 idiom-count 100 vs ~54; 44 verbs 100 vs 50; 41/42 module count 11 vs 12; 33/35/37 duplicated boilerplate blocks, leftover stubs, and self-correction artifacts left in published answer keys (22, 32, 11)).
- **Repo-integrity catalog gaps** (flagged for the maintainer, not content defects): courses 34 and 37 are not listed in CLAUDE.md's course table / site totals — confirm they're registered in navigation.yml and the homepage grid.

### Exam-alignment
- 08 lists a **retired AI-102 domain** ("decision support") and omits the newer agentic domain.
- 27 has a **~20-25% workload-identities exam gap** (managed identities / workload identity federation barely covered).
- 27 and 13 have **domain-weight tables that don't match current published outlines**.
- 05 mis-labels AZ-900 scenario format; 35/39/43 use exam scaffolding around credentials that are mis-named or don't exist (covered above at high; lower-severity echoes remain in module "What the exam tests" sections).

### Pedagogy
- 11 ships quiz answers with **scratch-work / "✏️ Correction" reversals** and a correct value **not among the options** (Q5/Q6), plus a **duplicated answer option** (Q3).
- 31 has a self-contradicting "memory hook" that miscounts the built-in algorithms.
- 32 leaves "thinking out loud / Wait, re-read" in a graded answer-key explanation.
- 37/42 oversell outcomes (a "C2 in 12 weeks" promise; a "gets you hired at Pixar" guarantee — the latter also flagged **legal**).

### Legal
- 35 (public-domain date), 37 (hiring guarantee), 42 (quoting still-copyrighted Faiz/Fahmida Riaz — low risk, de minimis). Across the catalog, legal/compliance posture is otherwise a **strength** (see below).

---

## Notable Strengths

The catalog's quality floor is high. Recurring strengths verified across many courses:

- **Substantive teaching content is accurate and current.** Across the IT/cloud certs (03, 06, 09, 21, 22, 23, 24, 25, 26, 27, 40), the supply-chain certs (10, 11, 12, 13), the AI courses (07, 08, 28, 29, 30, 32), and the language courses (41-46), the *core* technical/linguistic material was repeatedly confirmed correct and aligned to current blueprints. The defects are overwhelmingly in *metadata, glosses, citations, and links* — not in what's actually being taught.
- **Exam-objective coverage and weighting are genuinely well-matched** to published blueprints where a real exam exists (PSM I, PMP, CLF-C02, SAA-C03, AIF-C01, AZ-104, SC-300, SY0-701, N10-009, XK0-005, SK0-005, AZ-800/801, MD-102, CSCP/CPIM/CLTD).
- **Original assessment content — no exam dumps.** Across essentially every course, quizzes/practice exams were found to be original, Bloom's-tagged, with per-distractor rationales, and meeting the ≥24-question bar. (The exceptions are *position bias* in 29/32, not copied content.)
- **Strong, responsible legal/ethics/compliance posture.** Salary ranges carry "illustrative, not a guarantee" disclaimers; AI-tool pricing carries "verify current" caveats; financial/legal/tax content (17, 19, 47) is consistently paired with "consult a professional" notes; AI-disclosure (FTC/EU AI Act) and copyright nuance (US Copyright Office on AI works) are taught. 17 is a standout for mandatory disclaimers in every module.
- **Citations are unusually rigorous** in the strongest courses (01, 02, 09, 16, 19, 30, 44) — correct authors, years, venues, ISBNs, and proper license/affiliation disclaimers. (The fabricated-source cases in 04/30/33/36 stand out precisely *because* they're exceptions.)
- **Pedagogy is consistently strong**: story-driven openings, comparison tables, "Exam Trap"/"Common Misconceptions" callouts, anti-pattern tables, Socratic prompts, and substantive integrative capstones recur catalog-wide.
- **Honest framing of Cert Hub Originals.** Most original tracks (16, 28, 29, 30, 33, 46, plus the language courses) clearly state they are not accredited credentials. (The framing problems in 31/34/39/43 are the exceptions to fix.)

---

## Recommendations & Suggested Next Actions

> ⚠️ **Protected courses:** **01-Scrum-Master** and **02-PMP** are protected — their content is grandfathered/owner-approved. The findings there (01's 60-vs-80-question Final Mock; 02's half-length mock and stale headers) are real, but **any fix requires owner approval first**. Do not edit these without sign-off.

**Priority 1 — Fix the 3 "needs-work" courses (the credibility risks):**
1. **31-AWS-ML-Specialty** — add a dated MLS-C01 retirement banner immediately; decide retarget-to-MLA-C01 vs relabel-as-knowledge; remove "book the exam" CTAs and the fabricated "2026 GenAI blueprint" claims. *(Highest urgency — it sells prep for an exam that can no longer be taken.)*
2. **40-CKA-Kubernetes** — add the missing current-curriculum content: Gateway API, Helm + Kustomize, CRDs + Operators, and HPA. Until then it under-prepares candidates for ~real exam domains.
3. **34-2D-Digital-Animation** — resolve the Animate-vs-After-Effects cert identity and correct the exam format (~50 min/~30 Q + in-app tasks).

**Priority 2 — Run one global "acronym-expander cleanup" pass.** This single root cause produced confirmed high/critical findings in 06, 12, 27, 38 and the largest medium/low cluster across ~14 courses. Recommended one-time fix (mirrors 23's suggested fix):
- never expand acronyms inside **link/URL path targets** or **code spans/blocks**;
- expand only on **first use**, and **skip already-defined** technical acronyms;
- add per-course **ignore lists** for overloaded acronyms (PIM, CLTV, CTR, CDP, PE, MAP, MRR, AD, CAC, GPT, DMP, RDS, DRP, AEO, NPS, GTM, SOP/S&OP, REST, SQL, CPA).
- Add a `verify-baseline` check that flags context-wrong glosses and broken `../../../` / parenthetical-in-path links.

**Priority 3 — Fix the broken cross-course links** (06, 10, 11, 13, 18, 23, 25, 38, 42-47). Many are the same `../../../`-overshoot or parenthetical-in-path bug; a scripted find-and-fix plus a link-resolution CI check would clear most at once.

**Priority 4 — Purge fabricated attributions and dead model IDs** (verified high-severity): Robinhood/Slack/Zoom (04), Mutiny/Salesforce (15), `claude-sonnet-4-7` (18) and `claude-sonnet-4-6-20260301` (28) and retired-model pricing (18), "Gemini 2.5 Ultra" (32), the "Blender Foundation certification" (36) and "Real-Time Animation Specialist" (39), and the reversed Hafs/Warsh table (46). Also the lower-severity fabricated stats/citations (30, 33, 19, 12, 14).

**Priority 5 — De-bias the two gameable exam sets** (29, 32): shuffle answer-letter positions to ~25% each and normalize distractor length; add a CI check flagging any single letter >50%. (Note 29's module quizzes already shuffle at render — fix the practice/final exams.)

**Priority 6 — Correct exam-metadata and fill named gaps:** ISM-CPSM structure (13), Meta exam code (14), Adobe/HubSpot specs (14), retired AI-102 domain (08), SC-300 workload-identities gap + domain weights (27), UA sunset date (47), and reconcile the README↔spec pass-mark contradictions (04, 07, 21, 44).

**Lower-priority polish:** stale quiz/exam headers (02🔒, others), duplicated boilerplate blocks and left-in scratch work (11, 22, 32, 33, 35, 37), language-course typos/URLs (42-45), and the catalog-registry gaps for courses 34 & 37.

*Sequencing note:* Priorities 2-3 are the highest **leverage** — one expander cleanup plus one link-fix pass would resolve the bulk of all 246 findings (and 4 of the high/critical ones) in two scripted changes.
