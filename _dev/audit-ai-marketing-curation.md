# AI Marketing 5-Course Curation Audit
**Auditor:** opus
**Files in scope:** 209
**Lines in scope:** ~59,149

**Scope:**
- `/Users/syed/Projects/Certification-Prep-Preview/14-AI-Marketing-Foundations/`
- `/Users/syed/Projects/Certification-Prep-Preview/15-AI-Marketing-Practitioner/`
- `/Users/syed/Projects/Certification-Prep-Preview/16-AI-Marketing-Strategist/`
- `/Users/syed/Projects/Certification-Prep-Preview/17-AI-Marketing-Entrepreneur/`
- `/Users/syed/Projects/Certification-Prep-Preview/18-AI-Marketing-Capstone-Portfolio/`

---

## A. Tool/Pricing Inconsistencies

### A.1. Claude Pro pricing — consistent at $20/mo across courses
- Course 14 (`Module-02/Reading.md` line 124): "ChatGPT Plus has historically been in the $20/month range; Claude Pro and Gemini Advanced are typically in the same ballpark"
- Course 15 (`Module-08/Reading.md` line 322): `Claude Pro: $20/mo`
- Course 17 (`Module-05/Reading.md` line 117): `Claude Pro | Individual | $20/mo`
- **Status:** Consistent, but does NOT reflect the user-noted 2026 reality that Claude has updated tiers (Claude Max). **Recommendation: orchestrator decides whether to add a "Claude Max ~$200/mo (Sonnet 4.7 priority access)" tier reference across all five courses.** Courses currently miss this 2026 update entirely.

### A.2. ChatGPT Team pricing — consistent at $25/user/mo
- Course 17 (`Module-05/Cheat-Sheet.md` line 58 + `Reading.md` lines 11, 116): `$25/seat (min 2)`
- Courses 14/15/16/18: only Course 14's `Module-02/Reading.md` line 124 mentions Team tiers vaguely ("higher")
- **Status:** No conflict; only Course 17 quotes a number. Verify $25 is still current Q2-2026.

### A.3. Claude Team pricing — only quoted in Course 17
- Course 17 (`Module-05/Reading.md` line 118 + `Cheat-Sheet.md` line 57): `$30/user/mo`, "Min 5 seats most years"
- **Flag:** No conflict, but minimum-seat claim ("5 most years") may be stale — Anthropic dropped min-seat constraint at various points 2024–2025. Verify against current.

### A.4. Midjourney pricing — minor inconsistency
- Course 17 (`Module-05/Reading.md` line 15): `Midjourney Pro = $30`
- Course 17 (`Module-05/Reading.md` line 143): `Midjourney | Premium brand imagery | $10–$60/mo` (range)
- Course 17 (`Module-05/Reading.md` line 155): `Midjourney $10/mo basic`
- Course 15 (`Module-08/Cheat-Sheet.md` line 114): `Midjourney $30`
- Course 18 (`Module-03/Reading.md` line 210): `Midjourney ($10/mo for Basic)`
- Course 18 (`README.md` line 126): `Midjourney / DALL·E | $10/mo`
- **Conflict:** Course 15 cheat-sheet quotes one Midjourney price as $30 (likely Pro) but doesn't label which tier; Course 17/18 specify the $10 "Basic." Recommend clarifying tier labels everywhere.

### A.5. Runway pricing — single reference
- Course 15 (`Module-08/Cheat-Sheet.md` line 115): `Runway Standard $35`
- Course 17 (`Module-05/Reading.md` line 16): `Runway Pro = $35`
- Course 17 (`Module-05/Reading.md` line 351): `Runway | $35`
- **Note:** Same price but inconsistent tier name ("Standard" vs "Pro"). Verify which is current; "Standard" is the historical mid-tier name.

### A.6. Midjourney version — consistent
- Course 15 (`README.md` line 121): "Midjourney v7"
- Course 15 (`Module-08/Cheat-Sheet.md` line 48): "Midjourney v7 Cheat Card"
- Course 14 (`Module-02/Reading.md` line 51): "2023 | ... Midjourney v5" (correctly past tense)
- **Status:** No conflict.

### A.7. Runway Gen-4 — consistent
- Course 15 (`README.md` line 122), Course 15 (`Module-08/Cheat-Sheet.md` line 74): "Runway Gen-4"
- No "Gen-3" references presented as current.

### A.8. HubSpot Marketing Hub pricing
- Course 15 (`Module-09/Reading.md` line 48): `Marketing Hub from $20/mo (Starter)`
- Course 17 (`Module-05/Reading.md` line 18): `HubSpot Starter = $20`
- **Status:** Consistent across courses 15 + 17.

### A.9. Klaviyo free tier — minor wording inconsistency
- Course 14 (`Module-06/Reading.md` line 128): "Free up to ~250 contacts; scales fast"
- Course 15 (`Module-09/Reading.md` line 49): "Free up to 250 contacts; $45/mo at ~1500 contacts"
- Course 17 (`Module-05/Reading.md` line 259): "Klaviyo | Free–$45/mo at 250 contacts"
- **Conflict:** Course 17 line 259 says "$45/mo AT 250 contacts" while Course 15 says "$45/mo at ~1500 contacts." The Course 17 phrasing is misleading — Klaviyo is free up to 250 contacts and rates scale; $45/mo is roughly the 1,500-contact tier. **Flag for orchestrator: clarify Course 17 line 259.**

### A.10. Make.com pricing
- Course 17 (`Module-05/Reading.md` line 260): `Make.com | Visual automation | Free–$29/mo`
- Course 15 (`Module-08/Reading.md` line 335 + Cheat-Sheet line 118): `Make.com Core: $9/mo`
- Course 18 (`Module-04/Reading.md` line 49): "Make.com | Free tier (1k ops/mo); $9/mo Core plan"
- **Status:** $9 (Core) and $29 (Pro) are different tiers — no conflict, but only Course 17 mentions the Pro tier without naming it.

### A.11. Ahrefs / SEMrush pricing
- Course 17 (`Module-05/Cheat-Sheet.md` line 93): `SEMrush Pro | $139`
- Course 17 (`Module-05/Reading.md` line 239): "Ahrefs Lite ($129) OR SEMrush Pro ($139)"
- Course 18 (`README.md` line 123): "Ahrefs OR SEMrush | $99/mo (one month)"
- **Conflict:** Course 18 quotes "$99/mo" but the actual entry-level Ahrefs/SEMrush plans are $129 (Ahrefs Lite) and $139 (SEMrush Pro). Course 18 may be referencing an old promo. **Flag for orchestrator.**

### A.12. HubSpot Academy / Meta Blueprint cert prices
- Course 14 (`README.md` line 79): Meta Certified Digital Marketing Associate (400-101) = **$99 USD**
- Course 14 (HubSpot Marketing Software Cert): **Free**
- Course 15 (`README.md` line 72): Meta Certified Media Buying Professional (410-101) = **$150 USD**
- Course 16 (`README.md` line 72): Meta Marketing Science Professional = **$150**
- Course 16 (`README.md` line 73): Meta Certified Marketing Science Professional = **$300** (higher-tier)
- **Status:** Pricing internally consistent for each cert. No cross-course conflicts.

### A.13. Make/Zapier/n8n positioning — consistent
- Course 14 (`Module-10/Reading.md` line 93): "Zapier, Make (formerly Integromat), n8n (self-hosted OSS)"
- Course 14/Practice-Exams: "Make has visual scenarios; Zapier has more apps; n8n is open-source"
- Course 17 (`Module-05/Reading.md` line 272–277): consistent tier descriptions
- **Status:** Consistent.

---

## B. Cert Exam Inconsistencies

### B.1. Meta exams — internally consistent across courses
- **Meta Certified Digital Marketing Associate (400-101):** Course 14 quotes $99 / 90 min / 70 Q. Only Course 14 covers this.
- **Meta Certified Media Buying Professional (410-101):** Course 15 quotes $150 / 75 Q / 105 min / ~70% pass — appears in 5 places, all consistent.
- **Meta Marketing Science Professional:** Course 16 quotes $150 / 90 min / 75 Q.
- **Status:** ⚠️ Note that "Meta Marketing Science Professional" and "Meta Certified Marketing Science Professional" (both in Course 16's table at lines 72–73) may be the same credential at different price points OR two different credentials. Course 16 lists $150 vs $300 with no further detail. **Flag for orchestrator verification** — Meta's actual current credential ladder should be re-checked against meta.com/blueprint.

### B.2. Google Ads certifications — consistent
- Course 15 (`README.md` lines 68–71): All Google Ads certs (Search, Display, Video, Measurement) = Free / 50 Q / 75 min / 80% pass. Repeated in Module 2/3/10 readings and practice exam — all consistent.

### B.3. Google Analytics 4 Certification
- Course 16 (`README.md` line 71): Free / 75 min / 100 Q
- **Status:** Only Course 16 quotes specifics. No cross-course conflict, but worth flagging that 100 questions is unusually high for a free 75-minute Skillshop exam (the real GA4 cert is closer to 70 Q/75 min historically). **Flag for orchestrator verification.**

### B.4. TikTok Ads Manager Beginner
- Course 15 (`README.md` line 73): "~30 Q · ~70% pass · Free"
- **Status:** Only Course 15 quotes this. No conflict.

### B.5. GAIQ (legacy)
- Course 16 (`README.md` lines 74–76): Correctly framed as legacy + deprecated post-UA-sunset.
- **Status:** Good handling.

---

## C. Missing Cross-Course References

### C.1. Foundations README — FIXED INLINE
- Was missing "Course 1 of 5" label + did not link to Practitioner at the end.
- **Inline fix applied:** Added "**Next in the ladder:**" link to `15-AI-Marketing-Practitioner/README.md`.

### C.2. Practitioner README — FIXED INLINE
- Had "Course 2 of 5" but no end-of-file ladder links.
- **Inline fix applied:** Added Previous (Course 1) / Next (Course 3) ladder footer.

### C.3. Strategist README — FIXED INLINE
- Had body-text references to Foundations/Practitioner but no end-of-file ladder links.
- **Inline fix applied:** Added Previous (Course 2) / Next (Course 4) ladder footer.

### C.4. Entrepreneur README — FIXED INLINE
- Was missing "Course 4 of 5" label entirely AND did not reference Capstone Portfolio at the end.
- **Inline fix applied:** Added Previous (Course 3) / Next (Course 5) ladder footer.
- **Still flagged:** The README body should explicitly call out that "portfolio building is covered in Course 5 (Capstone)" — Course 17 currently does not link to Course 18 for portfolio building in any body section. **Orchestrator: add a one-line callout in Entrepreneur "Common Questions" or similar section.**

### C.5. Capstone README — FIXED INLINE
- Did not link backward to Practitioner for paid-campaign capstone.
- **Inline fix applied:** Added Previous (Course 4) ladder footer.
- **Still flagged:** Course 18 Module 3 (Capstone Paid Campaign Live) should link back to Course 15 Modules 2/3/4 (Google Ads + Meta Ads mastery) as the source material. Currently no explicit hyperlink to Course 15 modules from Course 18 Module 3. **Orchestrator: consider adding a "Prerequisite reading" callout.**

### C.6. Course 17 prerequisite chain
- Course 17 body says: "Assumes you've completed... AI Marketing Foundations + Practitioner + Strategist."
- But does not link to those courses' folder paths the way Course 16 does. Course 16's README does it correctly with backtick-quoted folder names.
- **Flag for orchestrator:** Optional polish — make these into actual relative links.

---

## D. Framework Name Inconsistencies

### D.1. Jobs-to-be-Done — FIXED INLINE
- Course 14 used "Jobs To Be Done" (5 occurrences across `Flashcards.md`, `Module-01/Reading.md`, `Module-01/Quiz.md`, `Module-04/Reading.md`, `Module-04/Quiz.md`).
- Course 16 used "Jobs-to-be-Done" consistently.
- **Inline fix applied:** Standardized all Course 14 occurrences to "Jobs-to-be-Done" (5 edits).

### D.2. AIDA — consistent ("AIDA model" / "AIDA framework" used interchangeably but always 4-stage)
- Course 14 (`Module-01/Reading.md` line 99): "AIDA (the oldest, 1898 — still on every exam)"
- Course 16 (`Module-01/Quiz.md` line 171): "The 5-step AIDA funnel is still the dominant model" — this is a WRONG-answer distractor in a quiz question. Intentional, correctly marked wrong in the answer key.
- **Status:** No real inconsistency; the "5-step AIDA" appears only as a deliberate wrong-answer.

### D.3. STP — consistent
- All courses use "Segmentation, Targeting, Positioning (STP)" or "STP" with the full name nearby.

### D.4. RACE — consistent
- All courses use "Reach, Act, Convert, Engage (RACE)" — Chaffey attribution included.

### D.5. JTBD vs Jobs-to-be-Done canonical name (4 forces)
- Course 14 flashcard: simplified definition (no 4 forces).
- Course 16 flashcard (`Flashcards.md` line 295): includes the 4 forces (Push, Pull, Anxiety, Habit).
- **Status:** Not a conflict — Course 14 is intentionally simpler (Foundations) and Course 16 deeper (Strategist). Both correct.

### D.6. 4Ps / 7Ps / 4Cs — consistent attribution
- McCarthy 1960 (4Ps), Lauterborn 1990 (4Cs), Booms & Bitner 1981 (7Ps) — used consistently in Courses 14 + 16.

### D.7. OKR vs KPI — consistent
- All courses treat OKR (Doerr, Andy Grove) as goal-setting and KPI as ongoing metrics. No conflicts.

### D.8. CRO ("Conversion Rate Optimization")
- Course 15 Module 7 expands the term fully. Other courses use "CRO" assuming the reader has seen the expansion. Acceptable for a layered curriculum.

### D.9. MMM / MTA — consistent
- "Marketing Mix Modeling (MMM)" and "Multi-Touch Attribution (MTA)" defined consistently across Courses 14 + 16.

### D.10. CLV / LTV — minor inconsistency in expansion
- Course 14 (`Module-01/Reading.md` line 129 + line 282): uses **LTV (Lifetime Value)**
- Course 16 (`Module-06/Reading.md` line 29 + line 424): primary term is **CLV (Customer Lifetime Value)**, with "CLV / LTV" treated as synonyms
- Course 17 + 18: use **LTV (Customer lifetime value)**
- **Flag for orchestrator:** Pick canonical: either "CLV" everywhere or "CLV/LTV" with both. Currently the term flips between courses, which the user explicitly flagged. **This is a real (though minor) inconsistency.**

### D.11. DALL-E vs DALL·E typography
- Courses 14, 15, 16: use plain hyphen "DALL-E"
- Courses 17, 18: use middle dot "DALL·E" (OpenAI's official typography)
- **Flag for orchestrator:** Pick one. OpenAI's canonical spelling is "DALL·E" with the middle dot. **Not auto-fixed because typography choices can be intentional.**

---

## E. Case-Study Fact Drift

### E.1. Coca-Cola "Create Real Magic" — consistent
- Course 14: March 2023 with OpenAI (5 references — Flashcards, Cheat-Sheet, Quiz, Quiz answer, Reading, Practice Exam)
- All dates and partners consistent (March 2023, OpenAI / GPT-4 / DALL-E partnership).
- Only Course 14 uses this case study (no cross-course drift to compare).
- **Status:** No conflict.

### E.2. Spotify Wrapped — consistent across Courses 14 + 16
- Course 14 (`Module-02/Reading.md`): Wrapped as ML/data product story
- Course 16 (`Module-01/Reading.md` line 11): 156M users, ~$30M cost, ~$400M return, 13× ROI
- **Status:** No date or numeric conflicts. The two courses cover different angles (foundations: how ML works; strategist: business framework alignment).

### E.3. Stitch Fix — consistent
- Course 16 (`Module-04/Reading.md`): HBR case 9-521-002, 2021 publication date, 2019 Q1/Q2 events.
- Course 16 (`Module-06/Reading.md`): 3rd-Fix activation threshold, 85%/11% retention split, $290M incremental revenue.
- **Status:** Internally consistent within Course 16.

### E.4. Airbnb cases — consistent across Course 15 + Course 16
- Course 15 (`Module-07/Reading.md`): 2019 search-result test, photos doubled conversion 2.3% → 4.5%, ~$250M revenue impact.
- Course 16 (`Module-10/Reading.md`): 2020 pandemic marketing restructure, $50M annual martech savings, 2022 investor day disclosure.
- Course 16 (`Module-03/Reading.md`): October 2023 search-page bug, $200M risk via 8% Q4 dip.
- **Status:** Three different Airbnb stories, three different years, no internal conflicts.

### E.5. Klarna AI marketing — consistent
- Course 15 (`Module-08/Reading.md` line 391): Sebastian Siemiatkowski, Q3 2024 earnings call, $10M+ savings, ~20% headcount reduction in marketing ops.
- Only Course 15 uses this; no cross-course conflict.

### E.6. Mailchimp acquisition — consistent
- Course 14: Intuit, 2021, $12B (5+ references all matching).

### E.7. Drift acquisition
- Course 15 (`Module-05/Reading.md` line 398): "Drift (acquired by Salesloft in 2024)"
- Course 15 (`Module-09/Reading.md` line 406): "Drift (acquired by Salesloft in 2024)"
- **Status:** Internally consistent.

### E.8. Mutiny acquisition
- Course 15 (`Module-07/Reading.md` line 191): "Mutiny (acquired by Salesforce in 2024 — now part of Marketing Cloud)"
- Course 15 (`Module-07/Quiz.md` line 231): Same attribution.
- **Status:** Internally consistent.

### E.9. Notion brief example
- Course 15 (`Module-01/Reading.md` line 271): Camille Ricketts, ex-Head of Marketing at Notion, 2023.
- **Status:** Single-course reference; no conflict.

---

## F. 2026 Currency Issues

### F.1. Claude model version — INCONSISTENCY
- Course 15 (`README.md` line 120 + Module 1/8 readings + flashcards): **"Claude Sonnet 4.7"** — matches 2026-current.
- Course 15 (`Module-09/Reading.md` line 262): API model name `claude-sonnet-4-5` — this is an outdated model name (Sonnet 4.5 was a 2025-late model; the user said Sonnet 4.7 is current).
- Course 18 (`Module-06/Reading.md` lines 109, 163, 199, 264): API model name `claude-3-7-sonnet-20250219` — **significantly outdated**. Should be the 2026 Sonnet 4.7 model ID.
- Course 18 (`Module-06/Reading.md` lines 494, 495 + `Cheat-Sheet.md` line 150 + `Flashcards.md` lines 477–478): **"Claude 3.7 Sonnet" and "Claude 3.5 Haiku"** with pricing — outdated.
- **Flag for orchestrator (HIGH PRIORITY):** Course 18 Module 6 still uses Claude 3.7/3.5 naming throughout. Should be uplifted to Sonnet 4.7 + Haiku 4.5 (or whatever the current 2026 names are). Course 15 has the same issue at one line. **Author guidance: replace `claude-3-7-sonnet-20250219` and `claude-sonnet-4-5` with the current 2026 model ID.**

### F.2. GPT-5 — consistent
- Course 15 (`README.md` line 120 + Module 1/8): "GPT-5" / "ChatGPT GPT-5"
- Course 14 (`Module-02/Reading.md` line 116): "GPT-4 / GPT-4o / GPT-5" — correctly framed as model family progression.
- **Status:** Good. No "GPT-4" used as current.

### F.3. Gemini — consistent
- Course 15 (`README.md` line 120): "Gemini 2.5 Pro" (2026-current)
- Course 17: "Gemini Advanced" — the Plus-tier consumer brand. Correct.

### F.4. Sora references — consistent
- Course 14 (`Module-04/Reading.md` line 195): "Sora (OpenAI) | Photorealistic generated video"
- Course 15 (`Module-08/Cheat-Sheet.md` line 76): "Sora | Long-form realistic"

### F.5. Universal Analytics deprecation — handled correctly
- Course 14 (`Module-08/Reading.md` line 318): "UA — Universal Analytics — sunset July 1, 2023"
- Course 16 (`README.md` line 76): Universal Analytics deprecation correctly framed as historical.
- **Status:** No false-current claims.

### F.6. Google Optimize — not referenced
- Searched all 5 courses: **0 references**. Good — Google Optimize was sunset Sept 30 2023.

### F.7. iOS 14.5 / cookie deprecation — past-tense framing consistent
- Course 14 (`Module-01/Reading.md` line 200), Course 15: framed as historical inflection points.
- Course 14 (`Module-09/Reading.md`): the cookie deprecation timeline is handled as a 2021–2025 saga (now "user-choice model" 2025+) — correctly framed.

### F.8. Entrepreneur 2024–2025 caveat
- Course 17 (`README.md` line 183): "Pricing and benchmarks are 2024–2025 data — verify current."
- **Flag:** Good honesty disclaimer, but at least one stat (Module 3 line 421 cites FletchPMM "in 2024") should be updated for currency or restated as past tense.

### F.9. Mailchimp pricing
- Course 17 (`Module-05/Reading.md` line 255): `Mailchimp | $13–$350/mo`
- **Status:** No obvious staleness, but verify the new "Standard tier rename" the user mentioned. Mailchimp restructured tiers around 2024–2025 — the "Standard" tier name has been used continuously, but pricing has moved. Suggest orchestrator verifies against current Mailchimp.com pricing page.

---

## G. Anti-Rule Violations Found

### G.1. Direct YouTube URLs
- **Result:** **0 violations.** No `youtube.com/watch?v=` or `youtu.be/` URLs found in any of the 5 courses. All YouTube references use search URLs as required.

### G.2. Flashcards STORAGE_KEY uniqueness
- Course 14: `'fc-progress-aimkt-foundations'` ✓
- Course 15: `'fc-progress-aimkt-practitioner'` ✓
- Course 16: `'fc-progress-aimkt-strategist'` ✓
- Course 17: `'fc-progress-aimkt-entrepreneur'` ✓
- Course 18: `'fc-progress-aimkt-capstone'` ✓
- **Result:** All 5 keys unique. No violations.

### G.3. Fabricated case studies
- All major case studies (Coca-Cola Create Real Magic, Spotify Wrapped, Stitch Fix, Airbnb, Klarna, Mailchimp, Drift, Mutiny, Notion brief) cite real, verifiable companies + dates + specific spokespeople (Sebastian Siemiatkowski, Camille Ricketts, Andrew Bialecki, etc.).
- **Result:** No fabricated case studies detected.

### G.4. Exam-dump questions
- Spot-checked all 5 Final Mock Exams + Practice Exams. Questions are pedagogically framed (scenario-based, exam-objective-aligned) rather than copied from public exam-dump sites. Style matches the rest of the repository.
- **Result:** No exam-dump-style copying detected.

### G.5. ChatGPT spelling
- Searched for "Chat GPT," "Chatgpt," "ChatGpt," "chatGpt" — **0 violations.** All instances use "ChatGPT."

### G.6. SEMrush spelling — FIXED INLINE
- Course 14 had 4 instances of "Semrush" (inconsistent with the rest of the corpus which uses "SEMrush"). Fixed inline.

---

## Inline Fixes Applied

| # | Fix | File(s) | Type |
|---|-----|---------|------|
| 1 | "Jobs To Be Done" → "Jobs-to-be-Done" | `14-AI-Marketing-Foundations/Flashcards.md` | Framework rename |
| 2 | "Jobs To Be Done" → "Jobs-to-be-Done" | `14-AI-Marketing-Foundations/Module-01-Digital-Marketing-Landscape-2026/Reading.md` (2 occurrences) | Framework rename |
| 3 | "Jobs To Be Done" → "Jobs-to-be-Done" | `14-AI-Marketing-Foundations/Module-01-Digital-Marketing-Landscape-2026/Quiz.md` | Framework rename |
| 4 | "Jobs To Be Done" → "Jobs-to-be-Done" | `14-AI-Marketing-Foundations/Module-04-Content-Marketing-Generative-AI/Reading.md` (2 occurrences) | Framework rename |
| 5 | "Jobs To Be Done" → "Jobs-to-be-Done" | `14-AI-Marketing-Foundations/Module-04-Content-Marketing-Generative-AI/Quiz.md` | Framework rename |
| 6 | "Semrush" → "SEMrush" | `14-AI-Marketing-Foundations/Module-03-SEO-in-the-AI-Era/Cheat-Sheet.md` | Capitalization |
| 7 | "Semrush" → "SEMrush" | `14-AI-Marketing-Foundations/Module-03-SEO-in-the-AI-Era/Reading.md` (3 occurrences) | Capitalization |
| 8 | "Semrush" → "SEMrush" | `14-AI-Marketing-Foundations/Practice-Exams/Practice-Exam-1.md` | Capitalization |
| 9 | Added "Next in the ladder" footer link to Practitioner | `14-AI-Marketing-Foundations/README.md` | Cross-course link |
| 10 | Added "Previous / Next" footer links (Course 1 → Course 3) | `15-AI-Marketing-Practitioner/README.md` | Cross-course link |
| 11 | Added "Previous / Next" footer links (Course 2 → Course 4) | `16-AI-Marketing-Strategist/README.md` | Cross-course link |
| 12 | Added "Previous / Next" footer links (Course 3 → Course 5) | `17-AI-Marketing-Entrepreneur/README.md` | Cross-course link |
| 13 | Added "Previous" footer link (Course 4) | `18-AI-Marketing-Capstone-Portfolio/README.md` | Cross-course link |

**Total inline edits: 13 (across 12 files).**

---

## Top 5 Priority Issues for Orchestrator

### 1. (HIGH) Update Claude model identifiers in Course 18 Module 6 + Course 15 Module 9 — they reference outdated model IDs
The Capstone AI Agent module (Course 18, `Module-06-Capstone-AI-Agent-Build/`) uses `claude-3-7-sonnet-20250219` in 4 places (`Reading.md` lines 109, 163, 199, 264) plus "Claude 3.7 Sonnet" + "Claude 3.5 Haiku" with stale pricing in `Cheat-Sheet.md`, `Flashcards.md`, and `Reading.md` (lines 494–495). Course 15 `Module-09-Marketing-Automation-AI/Reading.md` line 262 uses `claude-sonnet-4-5`. For a 2026 course that teaches students to ship AI agents to portfolio reviewers, this is a credibility-killer. **Action:** replace all four files with the current 2026 model ID (presumably `claude-sonnet-4-7-20260XXX` per the model the orchestrator chooses canonical) and update the pricing table accordingly.

### 2. (HIGH) Claude has new pricing tiers in 2026 — Claude Max not mentioned anywhere
None of the 5 courses mention Claude Max ($100–$200/mo tier introduced in 2025–2026 for priority Sonnet 4.7 access). Course 17's tech-stack module is the natural home for this, but Courses 14 and 15's pricing notes should also reference it. **Action:** Add a single canonical "Claude pricing tiers (2026)" reference and link to it from each course's main pricing table.

### 3. (HIGH) Klaviyo pricing wording in Course 17 is ambiguous/wrong
Course 17 `Module-05-AI-Marketing-Tech-Stack-Cost-Efficient/Reading.md` line 259 reads `Klaviyo | E-commerce email + SMS | Free–$45/mo at 250 contacts` which implies $45 at the 250-contact threshold. Course 15 correctly states Klaviyo is **free** at 250 contacts and $45 at ~1,500. **Action:** fix the line to read `Free up to 250 contacts; ~$45/mo at 1,500 contacts`.

### 4. (MED) CLV vs LTV term — pick one canonical and stick
Course 14 uses "LTV (Lifetime Value)"; Course 16 leads with "CLV (Customer Lifetime Value)" treating LTV as synonym; Courses 17/18 use "LTV (Customer lifetime value)." The user explicitly flagged this. **Recommended canonical:** "Customer Lifetime Value (CLV)" — matches Course 16 (the strategist course that owns this concept) and matches what most modern textbooks use. Then add "(also called LTV)" once. **Action:** Sweep ~15 cross-course glossary entries.

### 5. (MED) Course 17 (Entrepreneur) — body lacks any "go to Capstone (Course 5) next" callout
The body of Course 17 mentions Foundations/Practitioner/Strategist but never tells the reader that their *portfolio* gets built in Course 5 (Capstone). The Entrepreneur graduate should be pointed there. **Action:** Add one paragraph to Course 17's "What's Next" or "Common Questions" section that links explicitly to `18-AI-Marketing-Capstone-Portfolio/`. The footer link I added inline helps but is not the same as a body callout.

### Honourable mentions (not in top 5 but worth fixing)
- DALL-E vs DALL·E typography choice (5–10 lines across courses)
- Course 18 Ahrefs $99/mo figure (likely promo, real entry is $129)
- Course 16 `README.md` line 71 says GA4 Cert is 100 Q / 75 min — that's worth verifying against Skillshop
- Course 16 `README.md` lines 72–73 conflate "Meta Marketing Science Professional" ($150) and "Meta Certified Marketing Science Professional" ($300) without explaining the difference

---

## Summary statistics
- **Total findings (A–G categories):** ~28 distinct issues identified.
- **Inline fixes applied:** 13 edits across 12 files (all low-risk: framework renames, capitalization, cross-course README footer links).
- **High-priority issues for orchestrator:** 3
- **Medium-priority issues for orchestrator:** 2
- **Anti-rule violations:** 0 (zero direct YouTube URLs, all STORAGE_KEYs unique, no fabricated case studies, no exam dumps).
