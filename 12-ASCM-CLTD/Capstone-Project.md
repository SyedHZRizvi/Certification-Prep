# Capstone Project — ASCM CLTD (Logistics & Distribution Transformation)

> **Purpose.** This capstone integrates Modules 1–8 into one end-to-end case. You play a newly-hired Director of Global Logistics walking into a real-feeling transformation mandate. The deliverables mirror what a Cornell / MIT Sloan / Stanford GSB operations capstone — or a McKinsey / Bain / Deloitte logistics engagement — would actually require.

---

## Brief

You have just been hired as **Director of Global Logistics** at **Holloway Building Materials**, a privately-held $720M-revenue specialty distributor of insulation, drywall, fasteners, and architectural-glass products. Holloway runs 14 distribution centers across three regions (US Northeast, Southeast, and Midwest), serves ~3,800 contractor and big-box-retailer customers, and operates a private fleet of 240 Class-8 tractors plus mixed 3PL arrangements with Estes, Saia, R+L, and YRC. The company grew through acquisition over 2017–2024 — each acquired regional distributor came with its own DC, its own carrier book, and its own WMS/TMS. There is no integrated logistics organization.

You report to the CEO. The Board has set an explicit mandate at your offer letter:

> **"In 14 months, deliver a logistics transformation that recaptures the $9M of annual freight overspend identified in the 2025 internal audit, while modernizing our network for the next 5–7 years."**

The audit's $9M overspend identification breaks down (approximately) as:
- $3.6M — premium parcel/LTL freight ("we ship truckload-LTL when LTL would do, and LTL-parcel when LTL works")
- $2.0M — fleet under-utilization (~28% empty miles, 14% under industry benchmarks)
- $1.7M — accessorial charges from carriers (detention, layover, lumper)
- $1.0M — duplicated DC handling (cross-region transfers between the 14 DCs)
- $0.7M — Incoterms-error duties on European architectural glass shipments

Additional constraints:
- The CEO wants the network preserved at 14 DCs (politically — each was a recent acquisition); your final state may consolidate down to 8–10 DCs but must justify each closure.
- Sustainability commitments: Holloway joined the Science-Based Targets initiative (SBTi) in 2024 with a 30% Scope 1+2 emissions reduction commitment by 2030.
- IT budget: $4M total for TMS / WMS / control-tower software.
- No layoffs without 6-month notice (company culture).

---

## Deliverables (7 artifacts)

### 1. End-to-end Network Optimization Plan (Module 1, 2, 4)
- A network-design report recommending the final DC count, location, and role for each (DC vs cross-dock vs FSL) for years 1–5.
- Apply center-of-gravity baseline, layer factor-rating, and reference MILP-style optimization.
- Quantify the trade-off: outbound transport savings vs inventory + facility cost vs service-level impact.
- Show the math of the square-root rule applied to your safety stock decision.
- Justify each DC closure or repurposing (the political/cultural lens matters here).

### 2. Modal Mix Optimization & TMS RFP (Module 6)
- A modal mix model showing how much volume should ride truck (FTL vs LTL), rail (intermodal), parcel, and air for current state vs target state.
- An RFP scope document for TMS selection (Manhattan Active TM, Blue Yonder TMS, Oracle OTM, MercuryGate, e2open, or Descartes).
- Scoring rubric (10 criteria) and your recommended winner with justification.
- Implementation timeline including data migration, integration to your WMS landscape, and carrier onboarding.

### 3. Carrier Scorecard + Rate-Negotiation Strategy (Module 6)
- A 10-metric carrier scorecard template (on-time delivery, tender acceptance, damage rate, billing accuracy, sustainability score, etc.).
- A carrier-segmentation plan: which carriers move to strategic-partner status, preferred, transactional, or are removed.
- A rate-negotiation playbook for your bid event: lane bundling, capacity commitment levers, fuel-surcharge mechanics, accessorial caps.
- Target: secure $4M of the $9M savings from contractual changes alone.

### 4. Reverse-Logistics Process Redesign (Module 8)
- A re-engineered returns workflow including RMA gating, disposition decision tree, third-party reverse-logistics partner evaluation (goTRG, Optoro, Inmar).
- Closed-loop opportunities — Holloway sells insulation/glass that can be remanufactured for industrial recycling streams.
- Sustainability impact (Scope 1, 2, 3 estimates).

### 5. Trade Compliance Baseline (Module 7)
- Incoterms structuring for the European architectural glass supplier relationships.
- C-TPAT membership cost-benefit analysis.
- Decision on whether to pursue an FTZ designation at the Charleston DC (high European import volume).
- Customs broker make-or-buy: in-house licensed broker vs continued use of CHB Global or Expeditors.

### 6. Risk Register & Resilience Plan (Module 8, cross-cutting)
- A formal risk register listing the top 20 logistics risks (geopolitical, supplier, capacity, climate, regulatory) with probability/impact scoring.
- Mitigation actions for the top 8.
- Evaluation of a risk-visibility platform (Everstream, Riskmethods/Sphera, Interos, project44+FourKites) including ROI calculation.

### 7. Sustainability Scorecard & Board-Level Metrics Dashboard (Module 8)
- A Board-presentation dashboard with the 12 metrics you'd present quarterly:
  - Freight cost per cwt
  - Cost per shipment
  - On-time delivery (OTD) %
  - Perfect order %
  - Inventory turn
  - Cash-to-cash cycle
  - Scope 1 emissions (tCO₂e)
  - Scope 2 emissions (tCO₂e)
  - Scope 3 emissions (tCO₂e, modeled)
  - Empty miles %
  - Driver retention (annual)
  - SBTi progress vs 30% reduction target
- A written narrative for the CEO + Board on what each metric tells them and what action it should trigger when it moves.

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| Strategic alignment (Module 1) | 15 | Network design clearly cascades from business strategy; brand promise reflected in service levels; explicit make-or-buy logic | Mostly aligned but missing the brand-promise → network linkage | Decisions look like cost-cutting exercises without business-strategy framing |
| Quantitative rigor (Modules 2, 4, 6) | 20 | All trade-offs quantified — center-of-gravity, square-root rule, TLC, ROI; cited 2024 industry benchmarks (CSCMP State of Logistics, GLEC factors, etc.) | Most decisions quantified but some "hand-wave" estimates | Decisions presented as opinion without data |
| Modal & carrier strategy (Module 6) | 15 | Carrier scorecard + segmentation + rate strategy is implementable; named real-world vendors; tender-acceptance and accessorial-management plans | Scorecard exists but lacks teeth; carrier-strategy generic | One-page placeholder |
| Customer & order management (Module 3) | 10 | OTC redesign covers ATP/CTP, OTIF chargebacks, picking strategy, last-mile cost analysis | Some elements covered, others vague | OTC barely addressed |
| Warehouse & inventory (Modules 4, 5) | 10 | Slotting / automation / IRA targets specified by DC; postponement opportunities identified | Touched but not specific | Generic warehouse talk |
| Global / customs / Incoterms (Module 7) | 10 | Concrete Incoterm changes; FTZ analysis with numbers; CTPAT cost-benefit; broker make-or-buy decision argued | Incoterms generally right but no specific changes; FTZ vague | Errors in Incoterm choice; FTZ misunderstood |
| Reverse logistics & sustainability (Module 8) | 10 | Returns redesign integrates third-party; Scope 1/2/3 quantified; SBTi alignment; closed-loop opportunities specific | Most elements but not all integrated | One paragraph on sustainability |
| Communication & executive presence | 10 | Board-ready exec summary; defensible numbers; written narrative shows operations + financial fluency | Mostly clear but some sections need polish | Inaccessible to non-logistics readers |

**Passing threshold: 70.** **Excellent: 85+.** **Stanford GSB-grade: 92+.**

---

## Suggested timeline (8-week stretch)

**Week 1 — Diagnostic.**
- Re-read Modules 1, 2 for strategic framing.
- Map the current 14-DC network on paper.
- Build a baseline TLC model (freight + warehousing + inventory + customs).

**Week 2 — Network optimization (Deliverable 1).**
- Center-of-gravity math.
- Factor-rating overlay.
- Draft the 8–10-DC future state.

**Week 3 — Modal mix + TMS RFP (Deliverable 2).**
- Build the modal mix model.
- Draft RFP scope and scoring rubric.

**Week 4 — Carrier scorecard + rate strategy (Deliverable 3).**
- Carrier segmentation.
- Rate-negotiation playbook.

**Week 5 — Reverse logistics + customs (Deliverables 4, 5).**
- Returns redesign.
- Incoterms restructuring.
- FTZ analysis.
- CTPAT cost-benefit.

**Week 6 — Risk + sustainability (Deliverables 6, 7).**
- Risk register.
- Sustainability scorecard.
- Board dashboard.

**Week 7 — Synthesis + executive summary.**
- 12-page executive summary tying everything together.
- $9M savings reconciliation showing source by category.

**Week 8 — Defense.**
- Have a peer (or yourself, simulating Board) pressure-test the recommendations.
- Iterate based on hardest questions.

For a 4-week intensive: combine Weeks 1+2, 3+4, 5+6, 7+8 — but you will lose depth.

---

## What "submission" looks like

The complete submission is:
- **`Holloway-Logistics-Transformation-Plan.pdf` (or .docx)** — 25–35 pages, with sections for each of the 7 deliverables.
- **`Executive-Summary.pdf`** — 4 pages, Board-ready.
- **`Financial-Model.xlsx`** — your $9M savings reconciliation by category.
- **`Risk-Register.xlsx`** — top 20 logistics risks with scoring.
- **`Carrier-Scorecard-Template.xlsx`** — implementable in 30 days.

This is what you would actually walk into a Board meeting with.

---

## Self-grading / peer review

**Pressure-test prompts (have a peer pose these):**
1. "Your network design closes DC#11 in Buffalo. The Buffalo team has been with Holloway since 2009 through the acquisition. What's your communication plan, and what is the risk that the consolidation backfires on customer service?"
2. "You recommend Manhattan Active TM. The CFO heard it costs $400K/yr SaaS. Justify the cost vs MercuryGate ($180K/yr) or staying with spreadsheets."
3. "Your $4M from rate negotiation assumes you'll consolidate freight onto 6 strategic carriers. What happens if one of them goes bankrupt — Yellow Freight 2023-style?"
4. "Your Scope 3 estimate uses GLEC default factors. The Board's external auditor flagged that auditors want supplier-specific data, not defaults. How do you respond?"
5. "Your Incoterms restructure shifts liability *to* Holloway for the European glass leg. What's your insurance and exposure analysis?"

If you can answer all five convincingly with numbers, you're at Stanford GSB grade. If you stumble on three or more, re-read the corresponding modules and revise.

---

## Optional stretch goals

- **Digital twin.** Model the future-state network in AnyLogic, OptiLogic, or a free tool. Show simulations of the Red Sea Houthi scenario and the 2023 Yellow Freight collapse.
- **AI/ML integration.** Spec a demand-sensing pilot (Relex, ToolsGroup, o9) for the top 200 SKUs. Estimate forecast-accuracy uplift and the inventory implications.
- **EV fleet pilot.** Build a 5-year Total Cost of Ownership model comparing diesel Class-8 vs Tesla Semi vs Daimler eCascadia for the Northeast lane network.
- **Board memo.** Write a 1,200-word board memo (not bullet points — actual prose) defending the toughest decision in your plan.

---

> **Why this capstone matters.** When you walk into a Director-of-Logistics interview, this is the case the executive search firm will paraphrase. Doing this exercise *honestly* — not just writing what sounds good, but actually solving the numbers — is what separates "passed the CLTD exam" from "ready for the job the CLTD signals you can do."

Pass the exam. Then do the capstone. Then go take that director role.

🚚 Plan the network. Move the freight. Close the loop.
