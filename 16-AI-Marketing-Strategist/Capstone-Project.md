# Capstone Project, AI Digital Marketing Strategist

> **Format:** Self-directed; 6 months part-time; ~80-120 hours of work
> **Deliverables:** 7 artifacts + an executive readout deck
> **Scoring:** Use the rubric below to self-grade or peer-review with a marketing-analytics colleague

---

## Brief

You have just been hired as **Director of Marketing Analytics & Strategy at Solway Software, Inc.**, a $400M ARR B2B SaaS company (workflow-automation platform for mid-market HR teams) headquartered in Boston with engineering offices in Dublin and Bangalore. Solway sells through a hybrid product-led-growth and enterprise-sales motion: ~38% of revenue from self-serve PLG, ~62% from enterprise contracts. The CMO is your hiring manager and reports to the CEO. Marketing spend is **~$48M/year** across paid acquisition, brand, events, sponsorships, and partner co-marketing, currently sitting at 12% of revenue. The CFO has handed you a clear mandate, communicated through the CMO:

> "Six months. Unify GA4, our Salesforce CRM, and product-usage data into a single Customer Data Platform; ship an MMM-informed budget allocation for Q3; design a privacy-first measurement architecture that survives the cookie deprecation and the EU AI Act; lay the foundations for predictive LTV and churn scoring that ops can actually use. The board reviews progress at the end of each quarter."

**The situation you've walked into.** GA4 was implemented by an agency 18 months ago Solway has the property, but custom-event coverage is inconsistent across web properties (the marketing site, the product login, the help center, the blog). Salesforce is the system of record for opportunities, but the marketing-attribution column is mostly "Self-Service Web" by default. Product usage data lives in Snowflake but is not joined to marketing-touch data. The current attribution model is last-touch in Salesforce, last-click in Google Ads, and Advantage+ "true incremental" in Meta three sources of truth, three different stories. The previous Director of Marketing Analytics left to a competitor 4 months ago. You inherit a team of 6 (3 analysts, 1 marketing-ops engineer, 1 attribution specialist, 1 data scientist) and a $1.6M tooling budget. The CMO has explicit board-level pressure to "get MMM working before the cookie deprecation completes."

You have 6 months. The board reviews at end of Month 3 and end of Month 6.

---

## Deliverables (7 artifacts)

### 1. CDP Architecture Diagram + Vendor Selection Memo (Module 2)

Design Solway's **target-state Customer Data Platform architecture**. It must include:

- **Architecture diagram**, every data source (Solway marketing site, Solway app, Snowflake product events, Salesforce CRM, Marketo, Outreach, Drift, Zendesk, the SOC2 audit log), the ingestion mechanism (event SDK, CDC, batch ETL), the identity-resolution layer, the activation destinations (Google Ads, Meta CAPI, LinkedIn CAPI, Klaviyo, HubSpot if applicable)
- **Vendor selection memo**, a 4-page narrative comparing **Segment Twilio, mParticle, Hightouch (composable CDP), Census (composable CDP), and RudderStack**. End with a Build vs Buy vs Composable recommendation. Justify with TCO over 3 years, switching costs, identity-resolution quality, regulatory posture (GDPR + EU AI Act readiness)
- **Identity-resolution strategy**, deterministic + probabilistic layering; the rules for resolving anonymous → known → cross-device → cross-account identity
- **Real-time vs batch decisioning**, which activation flows require sub-second latency (e.g., personalization on a logged-in app screen) vs which can run hourly (e.g., audience syncs to Meta)
- **Implementation timeline**, 6-month gantt with 3 milestones; pilot scope for Month 2 readout
- **The "kill criteria"**, at what point in Months 2-3 do you abandon the chosen vendor for a backup

**Format:** 1 architecture diagram + 5-page narrative.

### 2. GA4 Implementation Audit + Custom-Event Plan (Module 3)

Solway's GA4 is "set up but inconsistent." Design:

- **Current-state audit**, for each property (marketing site, app, blog, help center), the events currently collected, the events missing, the parameter consistency score (custom rubric you'll define)
- **Target-state event taxonomy**, 30-50 custom events with parameter schemas, naming conventions, ownership (which team triggers each event)
- **Conversion event flagging**, which events are Key Events feeding Google Ads + LinkedIn + the MMM model
- **BigQuery export plan**, the schema design, the cost forecast (estimated $400-800/month), the 3 production queries the analytics team will run weekly
- **Looker Studio executive dashboard**, wireframe + 8 widgets (MRR, NRR, MQL→SAL→SQL→Opp, blended CAC, CAC payback, LTV proxy, pipeline coverage ratio, marketing-influenced revenue)
- **Server-side tagging migration plan**, current is client-side GTM; target is server-side via Stape or a self-hosted GCP Cloud Run container. 6-month rollout.

**Format:** 1-page audit-score matrix + 3-page event taxonomy + 1 dashboard wireframe.

### 3. Marketing Mix Model Brief + Scenarios (Module 5)

Build (or specify) Solway's first Marketing Mix Model. It must include:

- **Model framing**, the question MMM answers ("How would Q3 revenue change if we cut paid search by 20% and shifted to brand?") vs the question it doesn't answer (causal incrementality of any single click)
- **Vendor / build decision**, Robyn (Meta open-source), Meridian (Google open-source), Bayesian custom with PyMC, or a vendor (MMM Hub, Recast, Mass, Nielsen). Justify
- **Data inputs spec**, 2 years of weekly data: media spend by channel + impressions by channel + revenue + price + promotion calendar + seasonality + macro controls (unemployment rate, S&P 500, weather if relevant)
- **Ad-stock and saturation assumptions**, for each channel, the prior on half-life and the diminishing-returns curve (Hill function vs S-curve)
- **3 scenario simulations** (a) "Hold mix, +10% budget"; (b) "Shift 20% from Search to LinkedIn"; (c) "Cut brand spend 30% to fund performance" each with the predicted revenue contribution range and the calibration sensitivity
- **Calibration plan**, how you'll geo-holdout-test the model's strongest prediction in Q3
- **The "5% of spend" rule**, which channels are below the MMM-detection threshold and why MMM is the wrong tool for them

**Format:** 5-page MMM brief + 1 scenario-simulation table + 1 calibration plan.

### 4. Attribution Mode Comparison (Module 4)

Solway has three sources of attribution truth. Resolve them:

- **Side-by-side comparison**, for the last 90 days, the per-channel revenue allocation in (a) Salesforce last-touch, (b) GA4 data-driven attribution, (c) Meta Advantage+ "incremental", (d) the MMM contribution from Deliverable 3
- **Reconciliation framework**, for each material disagreement (channel-level revenue delta > 15%), the hypothesis explaining the gap (cannibalization, view-through, undercount, walled-garden self-attribution bias)
- **The "official" attribution view for executive reporting**, which model is the source of truth for which decision (paid optimization vs budget allocation vs board reporting)
- **The data-driven attribution audit**, when GA4's DDA is unreliable (low conversion volume, single-touch journeys, post-cookie data gaps)
- **Triple Whale / Northbeam / Rockerbox / Hyros recommendation**, for the PLG side of Solway's business, which (if any) post-iOS attribution vendor adds enough signal to justify the cost
- **The incrementality holdout calendar**, 4 scheduled holdouts in Q3 with hypothesis, market scope, expected lift band, decision rule

**Format:** 1 comparison table + 4-page narrative.

### 5. Privacy Compliance Matrix (Module 9)

Design Solway's **privacy-first measurement compliance matrix**. It must cover:

- **GDPR** (EU customers), consent capture, data-subject access requests, data-processing agreement coverage with each vendor in Deliverable 1's CDP architecture
- **CCPA + CPRA** (California), opt-out cookies, "Do Not Sell or Share My Personal Information" link, the verifiable-consumer-request workflow
- **EU AI Act** (effective phases 2025-2027), risk classification of every marketing-AI use case (predictive scoring = limited risk; biometric inference = prohibited); the model-documentation requirements for each
- **Cookie deprecation contingency**, what happens to Solway's measurement on the day third-party cookies fully sunset; the Privacy Sandbox / Topics API integration plan
- **Consent Mode v2 + Enhanced Conversions**, implementation status across every entry point; the gap-closure plan
- **CAPI (Meta) + Enhanced Conversions (Google) + Conversions API (LinkedIn)**, server-side conversion uploads with first-party data hashing; coverage status and remediation
- **Data-clean-room strategy**, when Solway would use AWS Clean Rooms, Snowflake Data Clean Rooms, or LiveRamp Safe Haven for partner-data joins
- **Children's data + sensitive categories** Solway is B2B so this is light, but the EU AI Act treats some HR-tech inferences as sensitive (gender, age, health) the policy

**Format:** 1 matrix (regulation × control × status × remediation) + 4-page narrative.

### 6. Predictive Model Design, LTV + Churn (Module 6)

Specify (don't build, unless you want to) Solway's first two production predictive models:

- **CLV model**, BG/NBD + Gamma-Gamma using the `lifetimes` Python library for self-serve PLG customers; the modeling cohort, the input features, the model-evaluation metric (RMSE on hold-out), the activation use case (bidding signal to Google Ads + Meta + LinkedIn)
- **Churn model**, XGBoost binary classifier on enterprise accounts; the feature set (product-usage frequency, support-ticket volume, CSAT, NPS, executive-sponsor turnover, account-team turnover), the model-evaluation metric (AUC, recall at top-5%-risk), the activation use case (account-team intervention prioritization)
- **Uplift modeling extension**, for the top-decile-churn-risk cohort, which intervention works (CSM call, free quarterly review, executive sponsor, price discount); the uplift modeling experimental design
- **Model governance plan**, model cards, drift monitoring (which features drift first), retraining cadence, the EU AI Act documentation
- **Vertex AI vs DataRobot vs in-house Python stack decision**, TCO + flexibility + speed-to-production
- **The "explanation layer"**, for each top-decile churn-risk account, the LIME/SHAP explanation that the CSM team will receive; format and cadence

**Format:** 5-page predictive-model design document.

### 7. Executive Readout Deck (Synthesis)

Compile Deliverables 1-6 into a **15-slide executive readout** for the board. The deck must include:

- Mandate (1 slide) + 6-month goal
- Current-state diagnosis (1 slide per workstream, 6 slides)
- Target-state architecture (1 slide diagram synthesizing CDP + GA4 + MMM + predictive)
- The 3 scenario simulations from the MMM
- The privacy compliance posture summary
- The 12-month roadmap (Months 7-18), what's next after this 6-month foundation
- The 3 biggest risks and the mitigation
- The investment ask for FY+1 (incremental hires, tooling, agency support)

**Format:** 15 slides + 10-slide appendix. Black-and-white-printable.

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90-100%) | Acceptable (70-89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **CDP architecture** | 16 | Diagram + vendor memo + identity-resolution + real-time vs batch + timeline + kill criteria | Most elements present, vendor TCO thin | Single-vendor recommendation without trade-off analysis |
| **GA4 audit + plan** | 14 | Audit score + event taxonomy + BigQuery plan + wireframe + server-side migration | Most elements present, server-side plan absent | Event taxonomy alone without ownership or migration plan |
| **MMM brief + scenarios** | 18 | Vendor decision + data spec + ad-stock priors + 3 scenarios + calibration plan + 5% rule | Most elements present, calibration plan thin | Scenarios without ad-stock or calibration framework |
| **Attribution comparison** | 14 | 4-mode side-by-side + reconciliation + official-view doc + DDA audit + incrementality calendar | Most elements present, official-view doc missing | Reconciliation without the "which model decides what" framework |
| **Privacy compliance matrix** | 14 | Full matrix + EU AI Act risk classification + cookie deprecation contingency + clean-room strategy | Most elements present, EU AI Act framing thin | GDPR-only without EU AI Act or cookie contingency |
| **Predictive models design** | 12 | CLV + churn + uplift + governance + vendor decision + explanation layer | Most elements present, explanation layer absent | CLV-only without churn or uplift or governance |
| **Executive readout deck** | 12 | 15 slides + appendix + scenario simulations + investment ask + risks | Most elements present, investment ask vague | Disconnected slides without synthesis |

**Pass mark:** 75/100 overall, with no individual criterion below 50%.

---

## Suggested Timeline (6 months)

- **Month 1:** Deliverable 1 (CDP architecture). Vendor selection happens by Day 30. The board readout at end of Month 3 depends on the vendor being chosen by Day 30.
- **Month 2:** Deliverable 2 (GA4 audit + plan). Begin the BigQuery export and server-side GTM migration in parallel.
- **Month 3:** Mid-flight board readout. Deliverables 1 + 2 present in summary form. Begin Deliverable 3 (MMM brief). The MMM data-collection workstream starts at Day 60 to allow 2 years of historical data prep.
- **Month 4:** Deliverable 3 first run completes. Deliverable 4 (attribution comparison) is the natural counterpart, runs in parallel.
- **Month 5:** Deliverable 5 (privacy matrix) + Deliverable 6 (predictive model design). Both touch the data-platform layer heavily.
- **Month 6:** Deliverable 7 (executive readout). Update Deliverables 1-6 with final numbers, present at end-of-Month-6 board.

If you have only 3 months (compressed mode): skip the MMM calibration holdout (defer to Q4) and the uplift modeling (defer to Q4). Do not skip Deliverable 7, the executive readout is what justifies the next 12 months of investment.

---

## What "submission" looks like

This is a portfolio you build for yourself. Save as:
```
/AIMarketing-Strategist-Capstone-Solway/
   01-cdp-architecture.pdf
   02-ga4-audit-plan.md
   03-mmm-brief-scenarios.pdf
   04-attribution-comparison.pdf
   05-privacy-compliance-matrix.xlsx
   06-predictive-models-design.pdf
   07-executive-readout-deck.pptx
   README.md  (1-page summary of approach + self-score)
```

Self-grading: complete the rubric above honestly. If you're below 75, identify the 2-3 weakest deliverables and redo them. Peer review (a marketing-analytics director or a measurement-science professional) is even better.

---

## Optional Stretch Goals

If you want to push beyond pass:

1. **Build a working Robyn MMM in Python.** Use Solway's synthetic 2-year dataset (you generate it). Document the model fit, the contribution decomposition, and one defensible scenario simulation.
2. **Build a working BG/NBD CLV model.** Use the `lifetimes` library on a synthetic Solway PLG cohort. Document the assumptions, the model fit, and the activation use case.
3. **Server-side GTM pilot.** Document a working server-side GTM deployment (Stape or GCP Cloud Run) for at least one Solway property. Include the cost model and the data-quality lift measured.
4. **Composable CDP proof-of-concept.** Build a working Hightouch (or Census) syncs from Snowflake to Google Ads + Meta CAPI. Document the identity-resolution rules and the activation lift.
5. **Data clean room walkthrough.** Document an AWS Clean Rooms or Snowflake Clean Rooms PoC for a hypothetical partner-data join (Solway × a CRM partner). Include the data-handling diagram and the privacy assessment.
6. **Privacy Sandbox / Topics API integration plan.** Specify how Solway would integrate Topics API + FedCM into their measurement architecture as third-party cookies fully sunset.

---

## Why this Capstone Matters

Strategist-level marketing is judged on three things: the architecture is right, the math is right, and the executive narrative is right. This capstone forces you to integrate every measurement + modeling + privacy module into a single $48M-budget transformation that an actual board would actually review. If you can defend each deliverable to a peer or a CMO, you will pass Google Analytics 4 Certification, Meta Marketing Science Professional, and any equivalent attribution/MMM certifications comfortably, and more importantly, you'll be ready for the Director of Marketing Analytics & Strategy role this capstone simulates.

Good luck. The architecture is the strategy. 🧠
