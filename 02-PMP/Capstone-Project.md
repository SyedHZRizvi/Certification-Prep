# Capstone Project — PMP (Project Management Professional)

> The PMP track has just walked you through 10 modules of frameworks, formulas, and situational judgment. This capstone forces you to *integrate* what you learned by working a single realistic, high-stakes scenario end-to-end. The deliverables match what a real PM produces in the first 6 weeks of a major engagement.

---

## Brief

You have just been promoted to Project Manager of a **$14M digital-transformation rollout** at **MidLand Bank**, a 600-person regional bank headquartered in a US Midwestern city. Three months ago MidLand acquired **PaySnap**, a 35-person fintech that built MidLand's mobile-payments app. Your job is to integrate PaySnap's product, team, and roadmap into MidLand's enterprise platform — *and* to launch two new digital products (instant-pay, AI-driven fraud detection) that the merger's investment thesis depends on.

**Constraints you carry into Day 1:**
- Sponsor: MidLand's CFO + COO (joint sponsorship — itself a risk).
- Steering committee: 7 members including MidLand's CIO, the former PaySnap CEO (now SVP Product), Head of Compliance, and the Chair of MidLand's Board's Risk Committee.
- Hard deadline: Year-end production launch (you're starting in May).
- Regulated industry: any change to core banking systems triggers regulator notification under the Bank Service Company Act and applicable state regulations.
- Team: 22 existing MidLand IT staff (predictive shop, mostly long-tenured), 35 acquired PaySnap engineers (agile-native, mostly under 5 years tenure, half of them flight-risk after the acquisition).
- Budget: $14M total ($8M opex, $6M capex). $9.4M committed to vendors via fixed-price contracts signed before you took the PM role.
- Politics: the Board has publicly committed to "$8M of annualized cost synergies from the PaySnap acquisition by Year 2."
- Prior PM was fired three weeks ago after the steering committee lost confidence in their cost forecast.

Your task is to produce the **first 6 weeks of artifacts** any competent PM would produce on a project of this complexity. You are doing this for *yourself* — the capstone is meant to integrate your PMP learning, not to be graded by anyone external. Use the rubric for self-assessment.

---

## Deliverables (6 artifacts)

You will produce **six discrete artifacts**, each in a format a real PM would defend at a steering-committee review. Pick a delivery format that suits you — markdown documents, slides, spreadsheets, or a mix. Aim for an experienced-PM standard, not a textbook example.

### 1. Project Charter (≈ 4–6 pages)

A formal Charter that:

- States the project's purpose and links it to MidLand's strategic objectives + the merger's investment thesis ($8M synergies, regulator obligations, public Board commitment).
- Specifies measurable objectives (timing, budget, value).
- Names the Sponsor(s), the PM, the Steering Committee, and the assignment of authority.
- Lists assumptions, constraints, and high-level risks.
- Identifies the major milestones (charter → year-end go-live).
- Includes a *governance addendum* describing escalation paths and decision rights — especially given joint CFO+COO sponsorship.

Reference: PMBOK 7 §2.5 (Project Charter); §3.3 (Stakeholders); Module 01 Foundations.

### 2. Stakeholder Register + Power-Interest Map + Engagement Matrix (≈ 3–5 pages)

- Identify at least **20** stakeholders, including non-obvious ones (regulators, branch managers, retiring engineers, the community/customer base, the press if applicable).
- Place each on a Power-Interest Grid AND classify using the Salience Model (Power × Legitimacy × Urgency).
- Build a Stakeholder Engagement Assessment Matrix mapping Current vs Desired engagement levels.
- Identify the *most* important communication strategy per stakeholder cluster (e.g., regulators get formal documented dialogue; flight-risk PaySnap engineers get a different cadence and channel).
- Include at least 3 explicit "what if a stakeholder leaves" contingency notes.

Reference: PMBOK 7 §3.3; Mendelow 1981 (Power-Interest); Mitchell-Agle-Wood 1997 (Salience); Module 10 Stakeholders.

### 3. Risk Register (≈ 25–35 risks)

A working Risk Register with:

- At least **25 distinct risks** — mix of threats and opportunities, covering technical, schedule, regulatory, financial, people, and reputational categories.
- Per risk: ID, description, category, probability (qualitative + numeric estimate), impact ($ where possible), risk score, response strategy (one of the 5 threat or 5 opportunity strategies), owner, status.
- Three of the top 5 risks have detailed *response plans* (e.g., for "PaySnap engineers leave" — a specific retention package + knowledge-transfer plan).
- Identify which risks require Contingency Reserve vs Management Reserve.
- Compute the EMV for at least three of the most material risks (with decision-tree analysis for any "fork in the road" decisions).

Reference: PMBOK 7 §3.10; Module 07 Risk; ISO 31000:2018.

### 4. Communications Plan + 90-Day Cadence (≈ 2–3 pages)

- Identify every communication channel needed (Sponsor 1-on-1s, Steering Committee, daily standups, sprint reviews, board updates, regulator notifications, internal town halls).
- Per channel: audience, content, frequency, owner, push/pull/interactive, format.
- A 90-day calendar that ties these together.
- A specific plan for *change-of-sponsor scenarios* (the prior PM lost their job over this; you must have a contingency).
- The first three Board updates outlined (what story you tell, with what evidence).

Reference: PMBOK 7 §3.4 + §2.1; Module 02 (Communications).

### 5. EVM Dashboard Mock-up + First-Quarter Forecast (≈ 2 pages + one spreadsheet/visual)

- Define BAC, PV curve, the structure of monthly EV/AC reporting.
- Identify which contracts (you inherited $9.4M of FFP) will be the EVM measurement units vs which will use rolling-wave planning.
- Mock up the dashboard you will show the Steering Committee monthly: CPI, SPI, EAC (default + at least one alternative), TCPI, VAC, and a *narrative* layer that calls out what the numbers do *not* say (e.g., interface integrity, the MCO lesson from Module 06).
- Identify the assumptions under which your default EAC = BAC/CPI holds, and what events would force a re-forecast using an alternative EAC variant.

Reference: PMBOK 7 §2.7; Module 06 EVM.

### 6. Lessons-Learned Retrospective Format + Knowledge-Capture Plan (≈ 1–2 pages)

- Design the retrospective ritual you will use after each major phase (monthly during execution, plus a final closure retrospective).
- Define how lessons learned flow into the org's OPA repository, so future PMs (and future you) benefit.
- Include a *prospective* lessons-learned approach: surface and document assumptions at each major decision point so future post-mortems can trace back to "what we knew then."
- Specifically address how the Boeing 737 MAX-style suppression of dissent will be prevented (named mechanism, named owner).

Reference: PMBOK 7 §2.5; Module 01 Foundations; Module 02 People Domain.

---

## Rubric (scored out of 100, for self-assessment)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **Charter quality + governance** | 15 | Charter includes joint-sponsor escalation mechanism, regulator notification path, decision-rights matrix; tied explicitly to the merger's investment thesis. | Charter complete with standard elements but governance addendum is thin. | Generic Charter that could fit any project; no merger-specific elements. |
| **Stakeholder identification depth** | 15 | ≥20 stakeholders incl. non-obvious; Salience + Power-Interest applied; contingency notes for stakeholder loss. | 15–19 stakeholders; analysis tools applied; engagement matrix present. | <15 stakeholders; tools used superficially. |
| **Risk register quality** | 20 | ≥25 risks across all categories incl. opportunities; top 5 have response plans; ≥3 EMVs computed with documented reasoning; explicit identification of single-points-of-failure (Knight Capital lesson). | 20–25 risks; most categories covered; response strategies named. | <20 risks; only threats; no quantified analysis. |
| **Communications plan defensibility** | 10 | Cadence justified; sponsor-change contingency present; first 3 Board updates drafted; regulator notifications explicit. | Cadence specified; sponsor-change addressed briefly. | Generic comms plan with no context-specific tailoring. |
| **EVM dashboard sophistication** | 15 | Multiple EAC variants; narrative-layer + numerical-layer; named events that would force re-baselining; MCO-style "what EVM does not measure" call-out. | Standard EVM dashboard with single EAC formula; narrative thin. | Just formulas with no judgment layer. |
| **Lessons-learned + dissent-suppression mitigation** | 10 | Named ritual + named mechanism preventing suppression; prospective LL approach. | Standard retro format planned. | Generic "we'll do a retro at the end." |
| **Integration across modules** | 10 | Artifacts reference each other (e.g., Risk Register references Stakeholder Register; EVM dashboard references Risks); deliverables clearly synthesize Modules 1–10. | Artifacts coexist but don't cross-reference. | Artifacts feel siloed. |
| **PMI Code of Ethics applied** | 5 | At least one explicit moment where a Code of Ethics value (Responsibility/Respect/Fairness/Honesty) is invoked in a real decision (e.g., the FFP-mismatch problem, the Board commitment vs realistic forecast). | Code referenced once. | Code not addressed. |

**Total: 100 points.**

Targets: ≥85 = ready for the real PMP exam. 70–84 = re-read your weakest module and try the artifact for that domain again. <70 = work through the relevant module again before attempting the next capstone iteration.

---

## Suggested timeline (6 weeks, ~6–10 hrs/week)

- **Week 1:** Draft the Charter (Deliverable 1) and identify ≥20 stakeholders (Deliverable 2). Re-read Module 01 + Module 10 first if needed.
- **Week 2:** Complete Stakeholder Register + Power-Interest + Salience analysis (Deliverable 2 final). Begin Risk Register (Deliverable 3) — aim for at least 15 risks identified.
- **Week 3:** Complete Risk Register (Deliverable 3) — 25+ risks, top 5 response plans, ≥3 EMVs. Re-read Modules 03 + 07.
- **Week 4:** Build Communications Plan + 90-Day Cadence (Deliverable 4). Draft first 3 Board updates. Re-read Module 02.
- **Week 5:** Build EVM Dashboard mock-up + first-quarter forecast (Deliverable 5). Drill EVM formulas (Module 06).
- **Week 6:** Design Lessons-Learned ritual + knowledge-capture plan (Deliverable 6). Self-grade against the rubric. Identify 2 modules to re-study based on weakest artifacts.

---

## What "submission" looks like

You're not submitting this to anyone — it is for your own learning. Keep all six artifacts in a single folder on your computer (a personal "MidLand Bank Capstone" folder). Use markdown, slides, or any format you'd actually use professionally. Self-grade honestly using the rubric above. If your total falls below 85, the rubric tells you exactly which modules to revisit.

**Peer-review (optional, recommended):** If you have a study partner pursuing the PMP, swap capstone packets and review each other. The exercise of *defending* your decisions to a peer is exactly the cognitive lift the real PMP situational questions test.

---

## Optional stretch goals

- **Strategic stretch:** Add a Benefits Realization Plan that tracks the promised $8M of merger synergies for 24 months post-go-live.
- **Technical stretch:** Build a Make-or-Buy analysis for the AI-driven fraud-detection module (in-house build vs vendor SaaS), with full TCO + strategic-value reasoning per Module 09.
- **People stretch:** Design the first 30/60/90-day plan for the 35 PaySnap engineers, including retention bonuses, knowledge-transfer milestones, and a Tuckman-stage-aware integration with MidLand's IT team.
- **Quality stretch:** Build a 7-tools-of-quality monitoring plan for the regulatory-compliance subsystem (which one would fail Hubble-style if you don't reconcile conflicting test results?).
- **Procurement stretch:** Renegotiate the $9.4M FFP contracts inherited from the prior PM into a hybrid structure that reflects the actual scope uncertainty — write the contract-restructure proposal you would deliver to the procurement officer.
- **Closing-the-loop stretch:** After completing all six core deliverables, write a one-page memo to the Sponsor recommending whether the project should proceed as planned, be re-scoped, or be paused — citing your Risk Register, EVM forecast, and Stakeholder Register as evidence.

---

## Why this capstone exists

The PMP exam tests *judgment* via situational questions. Reading-and-quiz study can prepare you to *recognize* good judgment when it appears among four options. Producing artifacts like the ones above is the only way to develop the underlying judgment in the first place. Cornell's executive PM programs, MIT's System Design & Management curriculum, and Stanford's SCPD Project Management certificate all close with an analogous integrative project precisely for this reason — the goal is not to pass the exam but to be the kind of PM who shouldn't need to take it twice.

Good luck. Re-read your Charter at hour 0 and again at hour 60 — you'll be amazed how much your judgment will have sharpened.
