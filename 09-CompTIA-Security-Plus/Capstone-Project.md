---
permalink: /09-CompTIA-Security-Plus/Capstone-Project/
title: "Capstone Project — CompTIA Security+ (SY0-701)"
---

# Capstone Project — CompTIA Security+ (SY0-701) 🛡️

> The Security+ exam tests vocabulary and pattern recognition. This capstone tests whether you can *integrate* that vocabulary into a defensible security program — the difference between a 750 on Sec+ and being functionally trusted as a security professional. It is also the kind of artifact you can hand to a future employer.

---

## Brief

You have been hired as the **first dedicated CISO at Cascade Mountain Credit Union (CMCU)**, a regional credit union headquartered in Boise, Idaho, serving 240,000 members across Idaho, Oregon, and Washington. CMCU has 1,200 employees across 47 branches plus a 220-person corporate office. The previous "Information Security Manager" reported into IT, retired three months ago, and was not replaced.

**The hiring trigger:** In the prior calendar year, a peer institution (similar size, neighboring state) suffered a **business-email-compromise wire fraud of $4.1 million**. The attacker spent six weeks inside that institution's Microsoft 365 tenant after a single-credential VPN compromise. The FBI eventually recovered $1.3M; the remainder was a write-off. The peer institution's CEO was forced out. CMCU's board reviewed the incident in detail and concluded: "We are next."

You report to the **CEO** (not the CIO — an explicit governance decision the board made when creating the role) with a dotted line to the **Risk & Audit Committee** of the board. Your initial budget is **$3.2M annual operating** + **$1.8M first-year capital**, drawn from contingency reserves. The CEO has authorized a 90-day "stand up" window in which you have unusual latitude to make changes; after that, you operate within normal governance.

**Constraints from day one:**
- CMCU is a federally insured credit union (NCUA), regulated by NCUA and subject to GLBA (Gramm-Leach-Bliley Act) Safeguards Rule.
- The CMCU technology stack: hybrid Microsoft 365 + on-prem Active Directory, two AWS accounts (~30 EC2 + S3 for analytics), Jack Henry core banking system (SaaS), Symitar member services, ~50 in-branch endpoints per branch (Windows 11), corporate-issued iPhones, a third-party call-center vendor in the Philippines.
- A 2023 internal IT audit (your reading material) flagged: no MFA on VPN, no SIEM, ad-hoc patching, ~2,300 active AD accounts versus ~1,400 current employees, AWS root account passwords stored in IT shared folder, no documented IR plan.
- 47 branches each have a manager with local IT-admin rights "to fix things quickly."

**Within 90 days, you must deliver to the board** — and *also* to your future self when you re-read this for promotion interviews five years from now — a complete program package.

---

## Deliverables (7 artifacts)

1. **Gap assessment against NIST CSF 2.0** — A 6-function (Govern, Identify, Protect, Detect, Respond, Recover) maturity scorecard. For each subcategory, score CMCU's current state on a 0-4 maturity scale (Initial, Repeatable, Defined, Managed, Optimized) with one-sentence evidence. ~80-120 NIST CSF 2.0 subcategories total; you do not need to score every leaf — pick the 30-40 most material to credit-union operations. Include a heat-map visualization (a markdown table or screenshot of a spreadsheet is fine).
2. **Prioritized 12-month roadmap** — A quarter-by-quarter plan with named initiatives (e.g., "Q1: MFA on VPN + admin"; "Q2: SIEM deployment"). Each initiative gets: rationale (which gap it closes), estimated cost (capex + opex), staffing impact, dependencies, and the named CSF subcategories it advances. Show $4M+ of work prioritized within the $1.8M capex + $3.2M opex envelope; explicitly mark deferred items and the reasoning.
3. **Incident response playbook + tabletop scenario** — A 10-15 page IR plan covering: roles (Incident Commander, SOC analyst, Comms lead, Legal liaison, Executive sponsor), the six NIST IR phases applied to CMCU specifically, three pre-built playbooks (ransomware, BEC wire fraud, AWS account compromise), and a **completed tabletop transcript** for the BEC wire-fraud scenario — what the team did at each phase, where the playbook held, where it failed.
4. **Security-awareness program design** — A 12-month curriculum covering general workforce, branch managers, finance department (BEC-target), developers, executives, and the board. Include rationale for cadence (monthly phishing simulation? quarterly?), measurement metrics (click rate, report rate, time-to-report), and how you handle repeat offenders. Cite specific behavioral research (e.g., Cialdini's *Influence*, Tessian / Proofpoint reports) for your design choices.
5. **Third-party / vendor risk policy** — A policy covering vendor onboarding (tiering, due diligence questionnaires, SOC 2 / ISO 27001 attestation review), ongoing monitoring (security-scorecard subscription, annual reassessment, news monitoring), required contract clauses (right to audit, breach notification SLA, sub-processor disclosure, data-localization), and offboarding. Include the *specific named contracts* CMCU needs with each existing vendor: Jack Henry, Symitar, the Philippines call center, both AWS accounts, M365.
6. **Board-level metrics dashboard** — A single-page (markdown table is fine) dashboard the CEO can present to the board's Risk & Audit Committee quarterly. Include at minimum: dwell-time / MTTD / MTTC trend, phishing-simulation click-rate vs report-rate trend, top-5 risk-register items with treatment status, KEV-listed CVEs in environment with patch-status SLA compliance, third-party-vendor risk-tier rollup, MFA-coverage % by user class (workforce / privileged / external). Add a written one-page narrative interpreting the dashboard for a non-technical board.
7. **Executive memo (5-page board paper)** — A standalone document the CEO can hand to the board summarizing: the security program's purpose, the top three risks, the 12-month roadmap headlines, the budget, the metrics the board will see, and the *one decision you need from the board this quarter* (e.g., approving a fraud-loss-loss reserve increase, or signing off on cyber-insurance procurement). Written in plain English. The bar: a non-technical board member reads it once and can defend the program to a regulator.

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90-100%) | Acceptable (70-89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **CSF 2.0 gap assessment quality** | 15 | All 6 functions covered with named evidence per subcategory; maturity scores defensible against an external auditor; heat-map highlights credit-union-specific risks (insider, wire fraud, NCUA exam) | Most functions covered; some evidence is hand-waved ("we think this is at level 2"); heat-map present but generic | Generic NIST CSF table copy-paste; no CMCU-specific evidence |
| **Roadmap realism and prioritization** | 15 | Each initiative tied to a specific gap; budget math adds up; dependencies named; deferred items explained; the *first 90 days* show quick wins (MFA, password manager, EDR) before bigger-ticket items (SIEM, ZTNA) | Plausible plan; some sequencing issues; budget math approximate | Wishlist of products without prioritization; budget over by >25% |
| **IR playbook and tabletop execution** | 15 | Roles + RACI clear; three playbooks distinct and specific to CMCU; tabletop transcript shows realistic failure modes (e.g., "we discovered we couldn't reach Comcast for credentials at 11pm"); lessons-learned section drives playbook updates | Generic playbooks; tabletop transcript reads like a happy path | One-page IR plan; no scenario walkthrough |
| **Awareness program rigor** | 10 | Cadence justified by cited research; differentiated by role; measurement criteria defined; repeat-offender process documented; ties to OWASP, NIST 800-50, SANS Security Awareness Maturity Model | Annual training plan exists; some role differentiation; measurement vague | "Annual all-employee CBT" with no further design |
| **Third-party risk policy completeness** | 10 | Vendor tiering criteria explicit; all CMCU-specific vendors mapped to contracts (BAA-equivalent under GLBA, DPA-equivalent, ISA for AWS, SOC 2 review cadence); offboarding section addresses data-destruction certifications | Policy text exists; vendor mapping partial | Policy text only; no vendor-specific application |
| **Board dashboard usability** | 10 | A non-technical board member could read it without explanation; metrics are leading + lagging mixed appropriately; written narrative is concise and decision-focused | Technical metrics with some narrative | Wall of numbers without context |
| **Executive memo quality** | 10 | Reads like Buffett's shareholder letters: clear narrative, defensible numbers, one explicit ask; could be quoted in the board minutes | Reads like an IT report | Tech jargon and acronyms; no specific ask |
| **Integration across Sec+ domains** | 15 | All 5 SY0-701 domains explicitly cited (where each appears in the program); explicit use of CIA, AAA, NIST CSF, NIST IR, vendor-contract typology (BAA/DPA/ISA/SOW), at least 3 named real cases (e.g., Capital One, Colonial Pipeline, MGM) as reasoning anchors | Most domains touched; some named cases | Single-domain treatment; no real-world anchors |

**Pass threshold:** 70/100 to count as a portfolio-grade artifact. 85+ is interview-quality.

---

## Suggested timeline (6 weeks; ~6-10 hours/week)

- **Week 1 — Discovery & gap assessment.** Read the NIST CSF 2.0 doc cover-to-cover. Score the 30-40 most-material subcategories. Draft the heat-map. Identify top 5 gaps.
- **Week 2 — Roadmap drafting.** Translate the top-5 gaps into named initiatives. Add the next 10-15 mid-priority items. Build the quarterly Gantt. Force the budget math to balance.
- **Week 3 — IR playbook + tabletop.** Write the IR plan, role definitions, three playbooks. Run the BEC tabletop *with someone you talk to about this stuff* (friend, mentor, partner, peer in industry) — write the transcript honestly.
- **Week 4 — Awareness program + third-party risk policy.** Design the curriculum. Map every CMCU vendor to its required contract. Write the policy.
- **Week 5 — Board dashboard + executive memo.** Draft the dashboard with realistic placeholder values. Write the 5-page memo. Iterate the memo three times — first pass for content, second for narrative, third for non-technical readability.
- **Week 6 — Integration pass + final polish.** Cross-reference every artifact to the others; eliminate contradictions; ensure terminology is consistent; do one final read-through aloud (or with text-to-speech) to catch awkward writing.

---

## What "submission" looks like

A folder (or single Google-Doc-style file) containing the seven artifacts in the order listed above. Total expected length: **40-60 pages**. Format guidelines:
- The gap assessment can be a spreadsheet exported to markdown (table per function).
- The roadmap can be a markdown timeline + a budget table.
- The IR playbook is markdown narrative + tables.
- The tabletop transcript is dialogue-style ("0900 — Detection: SOC analyst Maria sees …").
- The awareness program is a curriculum table + 1-page rationale.
- The third-party policy is a 5-7 page narrative + a vendor-mapping table.
- The board dashboard is one markdown table + a one-page narrative.
- The executive memo is a 5-page (Times-equivalent) board paper.

**Self-grading instructions.** Print the rubric. Score yourself honestly. If a category falls below "Acceptable," go back and add the missing element. The bar is not "did I write something" — it is "could I defend this artifact in a job interview against a hostile question."

**Peer-review prompt (if you have a study partner).** Trade capstones. Read theirs without their context. Ask: "Could the *board* of this credit union read this memo and approve the budget?" If not, identify the specific paragraph that loses them.

---

## Optional stretch goals (for the ambitious)

- **Stretch goal 1 — Regulatory citation.** Add a column to your gap assessment mapping each finding to the specific GLBA Safeguards Rule clause (16 CFR 314) and the NCUA Cybersecurity Examination Tool reference. This is what a real NCUA examiner will ask for.
- **Stretch goal 2 — Cyber-insurance application.** Take a real Chubb or Travelers cyber-insurance application form (publicly available samples exist) and fill it out *honestly* based on your CMCU current state. Identify which "no" answers would either deny coverage or significantly raise premium. This becomes a budget-roadmap input.
- **Stretch goal 3 — Tabletop video.** Record yourself (or a study partner) running the 30-minute BEC tabletop as a video. Watch it back. The first 5 minutes are usually painful — the next 25 build muscle.
- **Stretch goal 4 — Adversarial review.** Find a security peer (a friend in industry, a member of /r/cybersecurity, an Anthropic Claude session) and ask them to play "skeptical NCUA examiner." Take notes.
- **Stretch goal 5 — Reverse the project.** Once your capstone is complete, write a 1-page "What I would have done differently with 12 months of hindsight" reflection. This is what makes the difference between a good CISO and a great one — explicit retrospective learning.

---

## Why this matters

The CompTIA Security+ exam is multiple-choice. It tests *whether you have the vocabulary*. A real security role requires you to use that vocabulary in *integrated, defensible decisions* under budget, time, and political constraint. That gap is what most candidates fail to bridge — not because they don't know the material, but because they've never been asked to *integrate* it.

This capstone is the integration. Take it seriously.

> "Plans are worthless, but planning is everything." — Dwight D. Eisenhower

When you finish this capstone, you will have planned a security program. The plan will be wrong in details. But the act of planning will have changed how you think about security forever. That is the actual point.

---

## Cross-references

- [Module 1 — Security Fundamentals](./Module-01-Security-Fundamentals/Reading.md) for CIA/AAA vocabulary
- [Module 4 — Threats & Threat Actors](./Module-04-Threats-Threat-Actors/Reading.md) for actor taxonomy
- [Module 8 — Security Operations](./Module-08-Security-Operations/Reading.md) for NIST IR lifecycle
- [Module 9 — GRC, Risk & Compliance](./Module-09-GRC-Risk-Compliance/Reading.md) for vendor agreements, BCP/DR, frameworks
- [Recommended Readings](./Recommended-Readings.md) for the cited literature
- The case-study sections in every module's Reading.md provide named real-world anchors

🛡️ Good luck. When you're done, you'll know the difference between *passing Sec+* and *being a security professional.*
