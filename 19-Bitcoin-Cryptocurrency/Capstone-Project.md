# Capstone Project, Bitcoin & Cryptocurrency

> **Format:** Self-directed; 16 weeks; ~60–80 hours of work
> **Deliverables:** 7 artifacts + a board-ready readout deck
> **Scoring:** Use the 100-point rubric below to self-grade or peer-review with a working compliance / risk / engineering colleague

---

## Brief

You have just been hired as **Head of Digital Assets at Wenatchee Cascade Credit Union (WCCU)**, a $4.2B-AUM Pacific-Northwest regional credit union (~95,000 members across Washington and northern Idaho). The CEO has spent two board cycles arguing that a Bitcoin custody pilot plus a customer-facing Lightning payments rail is the right defensive move against the eight fintechs nipping at WCCU's deposit base. The board approved the pilot at the most recent quarterly. The CEO has handed you a 16-week mandate:

> "Sixteen weeks. Stand up regulated Bitcoin custody for our 1,200 wealthiest members (≥$250K liquid AUM with us), launch a Lightning-Network-powered remittance product for our Mexican-corridor members, keep the prudential regulators (NCUA + Washington DFI) comfortable, and don't lose a single satoshi. Budget: $4.8M opex + $1.2M capex over the 16 weeks. Board reviews progress every 4 weeks."

**The situation you've walked into.** WCCU has zero in-house Bitcoin expertise. The CIO is sympathetic but cautious. The CRO is openly skeptical. Compliance is one person + one analyst. The COO controls vendor selection. The credit union already partners with Fiserv for core banking, so any digital-asset solution must integrate with Fiserv DNA without breaking the existing AML/KYC pipeline. Two member-facing complaints from a competitor's mishandled crypto pilot are public, the board does not want a second one.

You have four weeks to deliver the integrated plan, then twelve weeks to execute the first phase (custody live, Lightning pilot with 50 friendly members). Phase 2 (general rollout) is post-Capstone.

---

## Deliverables (7 artifacts)

### 1. Custody Architecture Design (Modules 2, 4, 9)

Produce a **6–10 page custody architecture document**. It must include:

- **Threat model.** Insider, vendor compromise, social engineering, supply-chain attack on hardware wallets, physical coercion, regulatory seizure. Map each to a control. Use STRIDE (Microsoft, 2002) as the structuring framework.
- **Key generation ceremony.** Document the entropy source, ceremony attendees (M-of-N), recording, chain-of-custody, video/audio retention, and CCSS Level III alignment.
- **Signing scheme decision.** Choose between (a) 2-of-3 native segwit multi-sig using three Coldcards across geographies, (b) MPC via Fireblocks / Copper / Qredo, or (c) a hybrid (warm-tier MPC, cold-tier multi-sig). Defend the choice in a 1-page memo to the CRO.
- **Tier diagram.** Cold (95%, deep storage), warm (4%, semi-automated), hot (1%, operational liquidity). Include rebalancing rules.
- **Geographic key distribution.** Where each cosigner sits (e.g., headquarters vault, third-party safe deposit box, executive home safe), and rationale for each.
- **CCSS gap analysis.** Map your design against CCSS Levels I → II → III; identify gaps and remediation plan.
- **Inheritance & business continuity plan.** What happens if the Head of Digital Assets is hit by a bus. Use the BIP-39 + Shamir's Secret Sharing combination or sob.

**Format:** Markdown or PDF, 6–10 pages plus 1 architecture diagram. Cite Antonopoulos *Mastering Bitcoin* 2e Ch. 4–5, CCSS standard (cryptoconsortium.github.io/CCSS), and NIST SP 800-57 for key management.

---

### 2. AML/KYC + Travel Rule Program (Module 8)

Author a **complete AML/KYC compliance program** for the digital-asset business unit. Must include:

- **MSB registration analysis.** Does WCCU need to register the digital-asset unit as an MSB with FinCEN? Defend yes or no with a 1-page legal memo citing FIN-2013-G001, the 2019 FinCEN guidance, and any 2024–2026 enforcement actions.
- **Customer Identification Program (CIP) extension.** How the existing Fiserv KYC pipeline must change for crypto onboarding. Source of funds, source of wealth, PEP screening, sanctions (OFAC SDN + EU sanctions + UK OFSI).
- **Transaction Monitoring rules.** 12 specific TM rules tuned for Bitcoin (e.g., "5+ inbound deposits totaling >$10K within 72 hours from chain-analyzed mixer-tainted addresses"). Specify the threshold logic.
- **Travel Rule operating procedure.** How WCCU complies with FATF Recommendation 15 (2019) and any state-level requirements. Identify the Travel Rule provider (Notabene, Sumsub, TRP, Veriscope). Threshold defaults: ≥$1,000 (FATF) and ≥$3,000 (US FinCEN final rule, when applicable). Document the originator/beneficiary data fields and the proof-of-counterparty-VASP step.
- **Sanctions screening.** OFAC list ingestion frequency, address screening tool (Chainalysis / TRM / Elliptic), false-positive workflow, escalation tree.
- **SAR triggers.** Specific patterns that trigger a Suspicious Activity Report. Cite at least 5 from FinCEN's 2024 *Trends in Bank Secrecy Act Data* alert series.
- **Annual independent AML audit plan.** Scope, auditor selection (must be independent), timing, reporting line.

**Format:** 12–18 pages of markdown, organized as a real bank-grade AML manual. Reference: BSA, FinCEN MSB rule (31 CFR 1010.100(ff)), FinCEN final Travel Rule (2020), MiCA Title V if you have any EU members.

---

### 3. Lightning Integration Runbook (Modules 6, 7)

Build a **technical runbook** for the Lightning Network integration. Must include:

- **Architecture.** Self-hosted LND or CLN cluster vs. a custodial Lightning service provider (Voltage, Lightspark, Galoy) vs. a hybrid. Decision memo with kill criteria.
- **Liquidity strategy.** Inbound vs outbound liquidity, target channel capacity per node, rebalancing automation (rebalance-lnd, lnd-manageJ, Lightning Pool, Magma). Cost forecast for liquidity procurement.
- **Routing strategy.** Direct channels to which counterparties (Wallet of Satoshi, Strike, OpenNode, Bitfinex, Kraken). Pricing (sats/Million, base fee).
- **Cross-border remittance flow.** USD → BTC (on-chain or via stablecoin?) → Lightning → MXN payout. Map the regulatory touchpoints in each jurisdiction. Identify the Mexican-side partner (Bitso, Volabit, OpenNode).
- **Operations.** Watchtowers (LDK, Eye-of-Satoshi), backup channel state, force-close handling, fee bumping (CPFP, anchor outputs), node monitoring (Amboss, ThunderHub).
- **Security.** Hot wallet limits, key rotation, HSM integration if available, segregation from custody cold tier.
- **Failure modes.** Channel jamming, stuck HTLCs, eclipse attacks, watchtower SLAs.
- **50-member pilot rollout.** Friendly-user list, onboarding script, KYC delta, support runbook, escalation tree.

**Format:** 10–14 pages of markdown + 1 architecture diagram. Reference: Antonopoulos *Mastering the Lightning Network* (2021, free on GitHub), BOLT specs (github.com/lightning/bolts), Poon-Dryja 2016.

---

### 4. Risk Register & Mitigation Plan (Modules 2, 4, 5, 8, 9)

Build a **comprehensive risk register** spreadsheet. Minimum 30 risks across these categories:

- **Smart-contract risk** (even though Bitcoin Script is simple, the multi-sig scripts and Lightning HTLCs are non-trivial)
- **Key-management risk** (insider theft, lost seed, ceremony failure, hardware-wallet supply-chain compromise)
- **Regulatory risk** (NCUA examination findings, Washington DFI position changes, OCC interpretive letter reversals)
- **Market risk** (price volatility, liquidity, counterparty exposure on exchanges)
- **Operational risk** (Fiserv integration failure, vendor outage, key staff departure)
- **Cybersecurity risk** (phishing of executives with signing authority, sim-swap on incident response phones, ransomware)
- **Legal risk** (member-facing disclosure inadequacy, fork-handling policy ambiguity, class-action exposure)

For each risk: severity (1–5), likelihood (1–5), score (S × L), owner, mitigation (preventive + detective + corrective), residual score, review cadence.

**Format:** Spreadsheet (Excel / Numbers / Google Sheet) with columns. 1-page executive summary narrative on the top 5 residual risks.

---

### 5. 5-Year Financial Model (Modules 5, 8, 9)

Build a **5-year P&L + capital-allocation model** for the digital-asset business unit. Must include:

- **Revenue.** Custody fees (basis points on AUC), Lightning interchange / spread, FX corridor margin, premium-tier member upsell. Project ramp by quarter for 20 quarters.
- **Direct costs.** Vendor fees (custody co-custodian, Chainalysis, Notabene), liquidity procurement, infrastructure (cloud, HSM, watchtowers), audit, insurance (a16z / Lloyd's / Evertas).
- **Allocated costs.** Compliance headcount (you, 2 analysts, 0.5 BSA officer), engineering headcount (2 SWE + 1 DevOps), executive time allocation.
- **Capital.** Bitcoin held on behalf of members (off balance sheet, segregated trust). Bitcoin held by WCCU treasury for operational liquidity. Insurance reserve.
- **Sensitivity.** Run scenarios at BTC = $30K, $80K, $150K, $300K. Document which variables you held fixed and which scaled.
- **Break-even.** When does the business unit reach contribution-margin positive? When does it reach full-cost positive?

**Format:** Spreadsheet with assumptions tab, monthly P&L for Year 1, quarterly thereafter. 2-page narrative on the model.

---

### 6. Board Quarterly Readout Deck (Synthesis)

Produce a **12-slide board deck** for the credit union board's Quarter 4 meeting (week 16). Include:

1. Cover + agenda
2. 16-week scorecard: planned vs actual on the 5 KPIs (custody AUC, Lightning volume, member activations, incident count, residual risk score)
3. Custody pilot status, # of members onboarded, AUC, fee revenue, incident log
4. Lightning pilot status, channel count, total locked-up satoshis, payment volume, FX corridor metrics
5. Regulatory engagement, NCUA examiner question log, DFI correspondence, FinCEN filings
6. Top 5 residual risks (from Deliverable 4) + mitigation status
7. Market context, BTC price chart Q1–Q4, hashrate, halving countdown, ETF flow, MiCA enforcement actions, US legislative status
8. Phase 2 readiness, what general-rollout (the next 12,000 members) requires
9. Vendor scorecard, your custody co-custodian, Chainalysis, Notabene, Lightning provider
10. Headcount + budget actuals vs plan
11. Recommendation to the board
12. Three asks of the board

Keep slides terse. Each slide ≤ 50 words, ≤ 1 chart.

**Format:** PowerPoint, Keynote, or Slidev. Black-and-white-printable.

---

### 7. Member-Facing Disclosure Pack (Module 8 + cross-cutting)

Produce the **member-facing disclosure pack**. Audiences: a working-class member with a 4th-grade reading level + a high-net-worth member with 30+ years in finance. Same content, two reading levels.

- **Custody disclosure.** What WCCU does with member BTC, segregation, insurance, what happens in WCCU insolvency.
- **Lightning disclosure.** What a payment channel is, what watchtower SLAs are, what happens during channel force-close, fee predictability.
- **Tax disclosure.** Brief, NOT tax advice. Pointer to IRS Notice 2014-21, Form 1099-DA expectations for 2026.
- **Fork policy.** If a hard fork happens during the pilot, WCCU policy (e.g., custody only the dominant chain, member opt-in for minority chain claims).
- **Privacy disclosure.** What chain-analysis WCCU runs, what's shared with FinCEN under SARs, member-data retention, Travel Rule data sharing with counterparty VASPs.

**Format:** 2 PDFs (simple + standard), each ≤ 8 pages. Run a Flesch–Kincaid score on the simple version, target ≤ Grade 6.

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **Custody architecture** | 18 | Threat model + STRIDE + ceremony + tier design + CCSS Level III alignment + inheritance, all defensible against an NCUA examiner | Most elements present; CCSS mapping thin | No threat model, or no inheritance plan, or custody choice unjustified |
| **AML/KYC program** | 16 | Travel Rule + sanctions + TM rules + MSB analysis + SAR triggers + audit plan, with at least 5 named 2024–2026 regulatory citations | Most elements present; Travel Rule procedure thin | MSB analysis missing or wrong; Travel Rule omitted |
| **Lightning runbook** | 14 | Architecture decision + liquidity + routing + corridor flow + ops + 50-member pilot, all defensible to the CIO and CRO | Most elements present; corridor flow vague | Architecture choice unjustified or runbook lacks failure-mode section |
| **Risk register** | 12 | ≥30 risks across all 7 categories, severity/likelihood/score/owner/mitigation/residual all populated, executive summary on top 5 | Most cells filled, 20+ risks | Less than 20 risks or missing whole categories |
| **5-year financial model** | 12 | Full P&L + sensitivity scenarios at 4 BTC prices + break-even analysis, with audit-trail assumptions tab | Most elements present, sensitivities thin | Model only at single BTC price or no break-even |
| **Board deck** | 16 | 12 slides, all 5 KPIs, residual-risk slide, vendor scorecard, 3 board asks. Audience-appropriate density. | Most slides present, density off | Multi-deck or no clear asks |
| **Member disclosure pack** | 12 | Two reading levels, Flesch–Kincaid ≤ Grade 6 on simple version, all 5 disclosure topics, fork policy explicit | Most disclosures present, reading-level not measured | Single reading level, or missing a major disclosure |

**Pass mark:** 75/100 overall, with no individual criterion below 50%.

---

## Suggested Timeline (16 weeks)

| Week | Focus | Deliverables progressed |
|------|-------|------------------------|
| 1 | Threat modeling + custody architecture v1 | D1 |
| 2 | Custody architecture v2 + key-ceremony plan | D1 |
| 3 | AML/KYC program v1 + MSB legal memo | D2 |
| 4 | **Board readout #1 (light version)**: architecture sign-off | D1, D2 |
| 5 | Lightning runbook v1 + architecture decision | D3 |
| 6 | Risk register v1 (start populating) | D4 |
| 7 | Lightning runbook v2 + corridor flow | D3 |
| 8 | **Board readout #2**: program approved for build phase | D2, D3 |
| 9 | Live: custody ceremony executed | D1 |
| 10 | Live: Lightning node cluster online (testnet then mainnet) | D3 |
| 11 | Member disclosure pack drafted; legal review starts | D7 |
| 12 | **Board readout #3**: pilot ready to onboard | D6 |
| 13 | Onboard first 10 pilot members; risk register updated | D4 |
| 14 | Onboard members 11–50; financial model updated with actuals | D5 |
| 15 | Member-facing disclosure pack finalized | D7 |
| 16 | **Board readout #4 (the big one)**: full deck, full results | D6 |

If you only have 8 weeks (compressed mode): drop pilot onboarding scope to 5 members; combine weeks 1+2, 3+4, 5+6, 13+14. Do not drop the AML/KYC program or the risk register, those are what get you re-funded.

---

## What "submission" looks like

This is a portfolio you build for yourself. Save as:

```
/Bitcoin-Capstone-WCCU/
   01-custody-architecture.pdf
   01a-custody-architecture-diagram.pdf
   02-aml-kyc-program.pdf
   02a-mSB-legal-memo.pdf
   03-lightning-runbook.pdf
   03a-lightning-architecture-diagram.pdf
   04-risk-register.xlsx
   05-financial-model.xlsx
   06-board-deck.pdf
   07-member-disclosure-simple.pdf
   07a-member-disclosure-standard.pdf
   README.md  (1-page approach summary + self-score)
```

Self-grade honestly against the rubric. If you score below 75, redo the two weakest deliverables. Peer review by a working compliance officer, custody engineer, or risk manager is worth ten times more than your own re-grade.

---

## Optional Stretch Goals

1. **CCSS Level III audit dry-run.** Hire (or simulate hiring) an independent CCSS auditor and produce the audit report. Most credit unions never get past Level I, Level III is institutional-grade.
2. **Tabletop ransomware exercise.** Run a 4-hour tabletop where an attacker has phished the CIO. Document the IR runbook against your custody architecture's threat model.
3. **CBDC contingency memo.** A 2-page board memo on how the digital-asset business unit changes if the Federal Reserve launches a US CBDC during the pilot.
4. **Cross-chain bridge analysis.** A 1-page memo on whether to support stablecoin (USDC/USDT) custody alongside BTC. Include the bridge-risk and the 2022–2023 bridge-hack catalogue (Ronin, Wormhole, Nomad).
5. **Carbon-disclosure brief.** A 1-page board paper on the energy intensity of WCCU's Bitcoin pilot and an offset strategy (the Module 5 debate, applied to a specific institution).
6. **Member-acquisition test plan.** A test plan for the Phase-2 marketing push, with explicit FINRA / consumer-protection disclosures (cross-reference 14-AI-Marketing-Foundations Module 9 if applicable).

---

## Why this Capstone Matters

Foundations courses teach you to recite that "Bitcoin is a peer-to-peer electronic cash system" and to multiply hash rates by joules. This capstone forces you to integrate cryptography, custody, AML/KYC, Lightning, regulatory, market, and operational thinking into a plan a credit-union board would actually approve and an NCUA examiner would actually pass. If you can defend each deliverable to a working risk officer or custody engineer, you will pass the C4 CBP and CBSA comfortably, and more importantly, you'll be ready for the kind of Head-of-Digital-Assets role this capstone simulates.

Good luck. ₿
