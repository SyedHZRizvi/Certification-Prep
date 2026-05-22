# Audit: `00-Study-Plan/` and `Resources/` — Scrum/PMP → 13-Cert Generalization

**Auditor:** site-audit agent
**Date:** 2026-05-22
**Site state:** 13 certification tracks present (`01-` through `13-`), but the shared `00-Study-Plan/` and `Resources/` folders were originally written when only Scrum Master + PMP existed.

This audit covers all 8 files in scope (4 in `00-Study-Plan/`, 4 in `Resources/`). Each section lists:
1. **State** — how cert-agnostic the file currently is.
2. **Findings** — concrete content gaps.
3. **What I fixed inline** — safe, in-place changes I made directly.
4. **Still needs orchestrator decision** — bigger structural calls.
5. **Suggested rewrite direction** — one paragraph.

---

## Summary of inline fixes I made

| File | What I changed |
|---|---|
| `00-Study-Plan/index.md` | Removed "Covers both Scrum Master and PMP back-to-back" framing; added scope disclaimer to 12-Week plan card; expanded the Exam-Day-Tips description; replaced the 2-track "Where Next?" with a 13-track grouped picker. |
| `00-Study-Plan/Quick-Start-Guide.md` | Replaced 4-path Decide-Your-Path with 14 paths grouped by cert family (Project, Cloud, AI, Security, Supply Chain); added cert-aware "already certified" guidance; expanded "Free Resources to Bookmark" with sections for AWS, Azure, Security+, ASCM, ISM; expanded FAQ with hours-to-pass for every cert and per-family course-vs-self-study guidance; replaced PMP-only "Today's Action" wording with cert-agnostic. |
| `00-Study-Plan/12-Week-Study-Plan.md` | Added scope disclaimer at top stating this plan is the Scrum→PMP path; added principle-generalization note; added "Adapting This Plan To Other Certs" section at the bottom with rough length+cadence templates for cloud/AI/security/supply-chain tiers; added retake-policy note. |
| `00-Study-Plan/Exam-Day-Tips.md` | Removed "(Both Exams)" from title; added scope note that mental tactics work for all 13 certs; expanded "If You Pass" maintenance block from PSM I + PMP to all 13 certs. |
| `Resources/index.md` | Updated summary cards to mention AWS / Azure / Security / Supply Chain resources; replaced 4-link "Where Next?" with all 13 tracks grouped by family; added Exam-Day-Tips link. |
| `Resources/Books-and-Links.md` | Added 4 large new sections (AWS, Azure, Security+, Supply Chain) with official free sources, recommended books, search-based YouTube links, and paid courses; expanded "Official Certification Sites" from 2 to 13 (grouped by family); expanded "Communities" mini-section to include all cert families; replaced 2-track Flashcards/EXAM-DAY-PREP list with all 13 Flashcards; expanded "Lifetime Maintenance" from 2 certs to 13; expanded "Next-Level Certs" from 2 paths to 9 paths (Scrum, PMP, AWS CLF, AWS SAA, AWS AI, Azure Fund, Azure Admin, Azure AI, Security+, Supply Chain certs). |
| `Resources/Communities.md` | Reorganized Reddit section into 5 cert families with 12+ new subreddits (r/AWSCertifications, r/aws, r/AZURE, r/MicrosoftCertification, r/CompTIA, r/cybersecurity, r/securityplus, r/netsecstudents, r/supplychain, r/logistics, r/procurement); expanded LinkedIn groups across all families; expanded Discord/Slack sections with AWS / Azure / Security / Supply Chain pointers; expanded podcasts from PM+Agile-only to include AWS, Azure, Security, Supply Chain podcasts; replaced "PMI Chapters / Agile Alliance" Local Chapters with PMI + Agile + AWS User Groups + Microsoft Reactor + ISACA / (ISC)² / OWASP / DEF CON + ASCM / ISM / CSCMP; reworked Trustworthy-Sources block to cover all cert families; updated study-buddy and final "pick TWO communities" instructions to be cert-family neutral; added official Q&A sites (AWS re:Post, Microsoft Q&A, CompTIA Community). |
| `Resources/Free-Practice-Tests.md` | Updated practice-question targets to per-cert minimums (was just PMP=1000, PSM=200); added 4 new sections — AWS, Azure, Security+, Supply Chain — with free official + free community sources for each; added AWS / Azure / Security+ / Supply Chain blocks to the Paid section with community-favorite practice exam recommendations; expanded BENCHMARK SCORES tables from 2 (PSM, PMP) to 6 (added AWS, Azure, Security+, ASCM, ISM). |

**Total inline edits:** 8 of 8 files received non-trivial cert-coverage updates. No direct YouTube URLs introduced (all video references use `youtube.com/results?search_query=...`). No fabricated book titles or course links — only resources I can name from memory and that are widely community-verified.

---

## 1. `00-Study-Plan/index.md`

**State (before edits):** Mostly cert-agnostic in structure, but the 12-Week plan card explicitly said "Covers both Scrum Master and PMP back-to-back" with Scrum→PMP-specific bullets, and "Where Next?" linked only to tracks 01 and 02.

**Findings (2):**
- F1: "Covers both Scrum Master and PMP back-to-back" framing was misleading for users of the other 11 tracks.
- F2: "Where Next?" linked only to Scrum + PMP. Users on AWS / Azure / Security / Supply Chain were left with no obvious next step from this page.

**What I fixed inline:** Both. Added a scope disclaimer to the 12-Week card, expanded Exam-Day-Tips bullet list, replaced "Where Next?" with a grouped 13-track picker.

**Still needs orchestrator decision:** None — this file is now cert-agnostic.

**Suggested rewrite direction:** None needed. The file is now a working index page that points to the three universal guides and offers all 13 tracks as outbound paths.

---

## 2. `00-Study-Plan/Quick-Start-Guide.md`

**State (before edits):** Heavily Scrum/PMP-specific. The 4 "Decide Your Path" options were Scrum-only, PMP-only, Both, and "already certified in Scrum/PMP/CAPM/Six Sigma." The Free Resources section covered only Scrum + PMP. The FAQ covered only PMP-specific concerns (ITTOs, EVM math).

**Findings (5):**
- F1: Path-picker only offered Scrum/PMP options.
- F2: "Free Resources To Bookmark" only had Scrum + PMP sections.
- F3: FAQ hours-to-pass only had Scrum + PMP.
- F4: FAQ "can I pass without buying a course" answered only for Scrum + PMP.
- F5: Final "Ready? Start Module 1" link hard-coded to Scrum Module-01.

**What I fixed inline:** All 5. Added 11 more paths grouped by family (Project, Cloud, AI, Security, Supply Chain); expanded the "Already certified" cross-references to include CLF/AZ-900/AIF/Network+; added 5 new Free-Resource sections (AWS, Azure, Security+, ASCM, ISM); expanded hours-to-pass for all 13 certs; expanded "can I pass without a course" with per-family guidance; replaced hard-coded Module 1 link with "open the README of whichever track you picked."

**Still needs orchestrator decision:**
- The "Decide Your Path" picker is now long. Consider whether to keep it inline (as I have it) or move it into a separate `Pick-Your-Cert.md` decision-tree page. Inline is simpler; separate gives room for more nuanced decision logic (e.g., "I'm a fresh CS grad" vs. "I'm 5 years into supply chain").

**Suggested rewrite direction:** The file is now functional but long. If the orchestrator wants a tighter Quick Start, the "Decide Your Path" block could be replaced with a short "Pick the track from the menu, then come back here" line and a separate `Pick-Your-Cert.md` page could host the long decision tree. The remainder of Quick-Start-Guide (Tools, Habits, FAQ) is cert-agnostic enough to stand on its own.

---

## 3. `00-Study-Plan/12-Week-Study-Plan.md`

**State (before edits):** The most cert-specific file in the audit. The entire week-by-week schedule is the Scrum (Weeks 1-4) → PMP (Weeks 5-12) path with module-specific daily tables. There's no acknowledgment that 11 other tracks exist.

**Findings (3):**
- F1: Title and opening line implied this plan covers "both exams" full-stop.
- F2: No mention that the underlying principles (spaced repetition, interleaving, active recall, mock cadence) transfer to other certs.
- F3: "If You Fail" only covered PMP + PSM I retake policies.

**What I fixed inline:** F1 (added scope-disclaimer block at top; retitled to "Scrum Master → PMP"). F2 (added "Adapting This Plan To Other Certs" section at the bottom with per-tier templates). F3 (added a note about AWS / Azure / Security+ / ASCM / ISM retake cooldowns).

**Still needs orchestrator decision:**
- **Big call:** Should this single file remain a Scrum→PMP-specific plan with a transferable-principles appendix (what I've done), or should it be split into ~6-8 separate per-cert/per-tier study plans?
  - **Option A (what I did):** Keep one file as the Scrum→PMP plan, but disclaim scope and add a templates appendix. Pro: small surface, easy to maintain. Con: a CSCP or SAA-C03 student doesn't get a day-by-day table.
  - **Option B:** Split into `12-Week-Study-Plan-Scrum-PMP.md`, `4-Week-Study-Plan-CLF-C02.md`, `12-Week-Study-Plan-SAA-C03.md`, `10-Week-Study-Plan-Security-Plus.md`, etc. Pro: every student gets a real plan. Con: 8+ new files to maintain; orchestrator-level work.
  - **Option C (compromise):** Keep this file as-is for Scrum→PMP, and have each track's `README.md` contain that track's own week-by-week plan. (Several tracks already do this — confirm in 03-13's READMEs.)
- This is exactly the call you flagged as "do NOT rewrite entire study plans — those need orchestrator review."

**Suggested rewrite direction:** I'd recommend **Option C**. Each track folder already has its own `README.md` (per `CLAUDE.md` §2.1). Have those READMEs own the cert-specific timing (or copy the template I added at the bottom of this file into each one). This file then becomes "the Scrum→PMP-specific timed plan" plus the universal principles. Update the title once more to make that explicit, e.g., `Scrum→PMP Combined Plan (Optional Combined Path)`.

---

## 4. `00-Study-Plan/Exam-Day-Tips.md`

**State (before edits):** Mostly cert-agnostic content (night-before routine, morning routine, time-management strategy, mental tactics) with two cert-specific tables (PSM I-specific and PMP-specific) and a maintenance section that only covered Scrum + PMP renewals.

**Findings (3):**
- F1: Title said "(Both Exams)" — incorrect now that we have 13 certs.
- F2: No statement that the mental tactics work for any cert.
- F3: "If You Pass" maintenance block covered only PSM I + PMP renewals.

**What I fixed inline:** All 3. Removed "(Both Exams)"; added a scope note explaining that the mental tactics are universal and pointing to each track's `Cheat-Sheet.md` for cert-specific exam-day notes; expanded the maintenance block from 2 certs to all 13.

**Still needs orchestrator decision:**
- The two cert-specific tip tables (PSM I-specific traps, PMP-specific mindset) remain in the file. The orchestrator could decide whether to:
  - Leave them here (most students will scroll past tables for other certs).
  - Move PSM I + PMP cert-specific tables into `01-Scrum-Master/Cheat-Sheet.md` and `02-PMP/Cheat-Sheet.md` respectively, leaving this file fully cert-agnostic.
  - Add equivalent cert-specific tables for AWS / Azure / Security+ / ASCM / ISM in this file (would make the file very long).
- My take: option 2 is cleanest, but it's a structural call and outside my "do NOT rewrite study plans" remit.

**Suggested rewrite direction:** The cert-agnostic content (mental tactics, time-management strategy, "If You Don't Pass") is already strong and applies to every cert. The PSM I + PMP-specific tables should probably be relocated to those tracks' `Cheat-Sheet.md` files, and a one-line pointer left here ("For PSM I-specific traps, see 01-Scrum-Master/Cheat-Sheet.md"). The maintenance block I expanded now covers all 13 certs and can stay.

---

## 5. `Resources/index.md`

**State (before edits):** Summary cards for Books-and-Links, Free-Practice-Tests, and Communities each described only Scrum + PMP content. "Where Next?" only linked to Scrum + PMP.

**Findings (4):**
- F1: Books-and-Links summary listed only Scrum Guide + Ramdayal Udemy + PMBOK 7 + Sutherland.
- F2: Free-Practice-Tests summary listed only Scrum.org Open Assessments + Mikhail Lapshin + PM Aspire + PrepCast + Mohammad Khalil.
- F3: Communities summary listed only r/PMP, r/scrum, r/agile, r/projectmanagement.
- F4: "Where Next?" linked only to tracks 01 and 02.

**What I fixed inline:** All 4. Rewrote each summary to cover all 5 cert families with cert-family-grouped highlights (e.g., AWS Skill Builder, Microsoft Learn, Professor Messer, ASCM Learning System). Replaced "Where Next?" with all 13 tracks grouped by family.

**Still needs orchestrator decision:** None — this is a pure index/navigation page now.

**Suggested rewrite direction:** No further rewrite needed.

---

## 6. `Resources/Books-and-Links.md`

**State (before edits):** Two major sections (Scrum, PMP) with detailed book/course/YouTube recommendations, plus shared sections (General Agile/PM, Tools, Official Cert Sites, Communities, Exam Day Prep, Lifetime Maintenance, Next-Level Certs). All shared sections were Scrum/PMP-anchored.

**Findings (7):**
- F1: No AWS section.
- F2: No Azure section.
- F3: No Security+ section.
- F4: No Supply Chain section (ASCM/ISM).
- F5: Official Cert Sites listed only Scrum.org + PMI.
- F6: Communities mini-section listed only PM/Agile groups.
- F7: Exam Day Prep linked only to 01-Scrum + 02-PMP flashcards.
- F8: Lifetime Maintenance covered only Scrum + PMP.
- F9: Next-Level Certs branched only off Scrum + PMP.

**What I fixed inline:** All 9. Added complete sections for AWS (CLF-C02, SAA-C03, AIF-C01), Azure (AZ-900, AZ-104, AI-102), Security+ (SY0-701), and Supply Chain (ASCM CSCP, CPIM, CLTD + ISM CPSM) with official free sources, recommended books, search-based YouTube links (no direct URLs), and paid courses. Expanded Official Cert Sites to all 13 with official URLs. Expanded Communities mini-section to all families. Replaced 2 Flashcard links with all 13. Expanded Lifetime Maintenance from 2 certs to 13. Replaced "Beyond PSM I" and "Beyond PMP" with branches for all 9 originating certs (Scrum, PMP, CLF-C02, SAA-C03, AIF-C01, AZ-900, AZ-104, AI-102, Security+, Supply Chain).

**Still needs orchestrator decision:**
- Book / course author names and publisher recommendations should be human-verified before deploy. I used widely-recognized names (Stephane Maarek for AWS, John Savill for Azure, Professor Messer for Security+, Sybex/Microsoft Press for books, Andrew Ramdayal for PMP) — all of these are community-verified as of my knowledge cutoff, but specific edition numbers (e.g., "Sybex AWS CLF-C02 Study Guide by Mark Wilkins") should be cross-checked against the publisher's current catalog to avoid recommending stale editions.
- Exam fees, question counts, and pass marks for new certs were intentionally NOT included in the Books-and-Links Official-Sites block (only the URLs). The original Scrum + PMP entries did include these specifics; whether the orchestrator wants to extend that pattern to AWS/Azure/Security+/ASCM/ISM is a content-density call.

**Suggested rewrite direction:** The file is now functionally complete. A future polish pass could:
- Verify all author names + current editions against publishers' current catalogs.
- Add cert exam fees / formats / pass marks to the Official Cert Sites block (currently only Scrum + PMP have these).
- Consider splitting into one Books-and-Links per cert family if this file grows beyond ~600 lines (currently ~280).

---

## 7. `Resources/Communities.md`

**State (before edits):** Reddit, LinkedIn, Discord, Slack, YouTube, Podcast, and Local-Chapter sections all written for PM/Agile only. Trustworthy-Sources block only listed Scrum.org / PMI / Ramdayal / Mountain Goat. Study-buddy and "pick TWO communities" instructions referenced only r/PMP and r/scrum.

**Findings (8):**
- F1: Reddit section had only 5 PM/Agile subreddits.
- F2: LinkedIn groups had only 3 PM/Agile groups.
- F3: Discord section had only 2 PM/Agile servers.
- F4: Slack section had only 2 PM/Agile communities.
- F5: YouTube communities listed only Andrew Ramdayal + David McLachlan.
- F6: Podcasts covered only PM + Agile.
- F7: Local Chapters covered only PMI + Agile Alliance.
- F8: Trustworthy Sources covered only Scrum/PMP.
- F9: Study-buddy and "pick TWO" instructions hard-coded r/PMP / r/scrum.

**What I fixed inline:** All 9. Reddit reorganized into 5 family sections with 13+ subreddits added (r/AWSCertifications, r/aws, r/AZURE, r/MicrosoftCertification, r/CompTIA, r/cybersecurity, r/securityplus, r/netsecstudents, r/supplychain, r/logistics, r/procurement). LinkedIn, Discord, Slack expanded with AWS / Azure / Security / Supply Chain pointers. YouTube communities replaced with search-based links across all 5 families. Podcasts expanded from PM+Agile to include AWS (AWS Morning Brief, AWS Podcast, Screaming in the Cloud), Azure (Microsoft Cloud Show, Azure Friday, The Azure Podcast), Security (Security Now, Darknet Diaries, Risky Business, CyberWire Daily), and Supply Chain (Supply Chain Now, The Supply Chain Show, Let's Talk Supply Chain). Local Chapters expanded with AWS User Groups, Microsoft Reactor, ISACA, (ISC)², OWASP, DEF CON Groups, ASCM local chapters, ISM affiliates, CSCMP roundtables. Trustworthy Sources reworked to cover all cert families. Study-buddy + "pick TWO" instructions made cert-family neutral. Added official Q&A sites (AWS re:Post, Microsoft Q&A, CompTIA Community).

**Still needs orchestrator decision:**
- The specific Discord server names I cited (e.g., TCM Security, Microsoft Learn, AWS Community Builders) are real and community-verified, but invite links change frequently. I deliberately did NOT include invite URLs (per the no-fabrication rule). The orchestrator may want to add invite URLs after verifying current invites — or keep the "search the subreddit sidebar for current invites" framing I used.

**Suggested rewrite direction:** The file is now functionally complete. The Discord/Slack section is the most fragile (server invites churn). Consider either (a) keeping the current "search for current invites" framing or (b) adding a short maintenance note: "If a server invite is dead, check the cert's primary subreddit sidebar for the current one."

---

## 8. `Resources/Free-Practice-Tests.md`

**State (before edits):** Two top-level sections (Scrum, PMP) with free + paid practice question sources. Practice strategy and final-week plan were cert-agnostic. Benchmark scores covered only PSM I + PMP.

**Findings (6):**
- F1: Practice-question target ("1,000+ for PMP, 200+ for PSM I") was the only guidance; no other cert had a target.
- F2: No AWS practice question section.
- F3: No Azure practice question section.
- F4: No Security+ practice question section.
- F5: No Supply Chain practice question section.
- F6: Paid section had only PMP + Scrum Master recommendations.
- F7: Benchmark Scores table covered only PSM I + PMP.

**What I fixed inline:** All 7. Replaced "1,000+ / 200+" target with per-cert minimums covering all 13 exams. Added 4 free-practice sections (AWS — including AWS Skill Builder free exam prep, AWS official practice question sets, AWS Cloud Quest, Tutorials Dojo free samplers; Azure — Microsoft Learn Practice Assessments, free learning paths, hands-on sandboxes, Microsoft Reactor Training Days; Security+ — Professor Messer free questions, CompTIA sample questions, free YouTube practice series, ExamCompass; Supply Chain — ASCM sample questions, ASCM Learning System practice pools, ISM Diagnostic Practice Exam, APICS Dictionary). Added paid recommendations for AWS (Tutorials Dojo, Stephane Maarek), Azure (MeasureUp, Scott Duffy / Tim Warner), Security+ (Jason Dion, Professor Messer bundle, CompTIA CertMaster Practice), Supply Chain (official ASCM Learning System, ISM Bridge of Knowledge). Expanded BENCHMARK SCORES from 2 tables to 6 — adding AWS (~700/1000), Azure (700/1000), Security+ (750/900), ASCM (criterion-referenced), ISM (3 tasks). Added an explicit "avoid ExamTopics-style dumps" warning under the AWS section that applies to every cert.

**Still needs orchestrator decision:**
- The per-cert practice-question minimums I added are reasonable community heuristics from cert-prep subreddits but are not officially endorsed. The orchestrator may want to revise these per their own teaching philosophy.
- The benchmark-score tables use rough heuristics. The "real exam probability" columns are heuristic, not data-driven. The orchestrator may want to add a stronger caveat or remove these tables for the newer certs if they prefer not to make pass-probability claims.

**Suggested rewrite direction:** The file is functionally complete and now usable for any of the 13 certs. A future polish pass could:
- Verify each "free" source still has a free tier (AWS Skill Builder content is mostly free but the catalog shifts; Microsoft Learn is fully free; Professor Messer's video course is free + bundle is paid).
- Reconsider the benchmark-score tables (some authors avoid pass-probability claims).

---

## Cross-cutting findings

1. **No direct YouTube URLs introduced.** Every video reference I added uses `https://www.youtube.com/results?search_query=...` per `CLAUDE.md` §1.2.
2. **No fabricated resources.** Every book, course, person, and community I named is widely community-recognized as of my knowledge cutoff. I avoided naming specific editions where I wasn't sure (e.g., I said "Exam Ref AZ-104 by Harshul Patel (Microsoft Press)" only because that's the verified series + author for that exam; for less certain entries I used phrasing like "verify edition before buying").
3. **Tone consistency.** I preserved the existing voice (emoji section markers, exam-pragmatic callouts, tables for comparisons). The new sections match the style of the existing Scrum + PMP sections.
4. **Tools section is universal.** The "Tools You'll Use" block in Books-and-Links.md (Anki, Notion, Pomofocus, Trello, Quizlet, Brain.fm) applies equally to every cert and didn't need changes.
5. **Did NOT touch:** any file in tracks 01-13, `_layouts/`, `_data/`, `index.html`, or any other folder. All changes are inside `00-Study-Plan/` and `Resources/`.

---

## Top 5 orchestrator-level decisions still open

1. **Split `12-Week-Study-Plan.md` per cert, or keep one Scrum→PMP-specific file plus principles appendix?** (My recommendation: keep this file as the Scrum→PMP-specific plan, and have each track's README own its own week-by-week plan. The appendix I added is enough scaffolding for now.)

2. **Move PSM I + PMP-specific exam-day tables out of `Exam-Day-Tips.md` into each track's `Cheat-Sheet.md`?** (My recommendation: yes, but it's structural and not in my remit. Keeping them inline is the safe stopgap.)

3. **Should `Quick-Start-Guide.md`'s 14-path Decide-Your-Path block live inline (current state) or move to a separate `Pick-Your-Cert.md` decision-tree page?** (My recommendation: inline is fine if total page length stays manageable. The file is ~250 lines now.)

4. **Verify all author names + book editions in `Books-and-Links.md` against current publisher catalogs.** Some Sybex / Microsoft Press / O'Reilly titles I named may have superseded editions. I named the most-current ones I know of, but a human review pass is prudent before publishing.

5. **Should `Books-and-Links.md` Official Cert Sites block include exam fees / question counts / pass marks for the new 11 certs?** (Currently only Scrum + PMP have these. Adding them for the other 11 is straightforward but fees especially change frequently.)
