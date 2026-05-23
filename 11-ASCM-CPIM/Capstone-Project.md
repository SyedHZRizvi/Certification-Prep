# Capstone Project — ASCM CPIM (Planning & Inventory Management)

> A 6–8 week applied project that integrates every module of this course. You will treat yourself as the newly hired Director of Production & Inventory Control at a realistic mid-market industrial-equipment manufacturer and produce a complete planning re-architecture plus a 12-month change-management roadmap.
>
> The capstone is self-graded against the rubric below. Strong submissions can also be used as portfolio artifacts for an internal promotion case or an external job application.

---

## Brief — The Scenario

You have just been hired as **Director of Production & Inventory Control** at **Polaris Industrial Manufacturing Inc.** ("Polaris"), a $480M-revenue manufacturer of industrial pumps, valves, and motor-driven assemblies based in Pittsburgh, PA, with secondary plants in Monterrey (Mexico) and Łódź (Poland). Polaris has ~1,800 employees globally, serves customers across oil & gas, water utilities, HVAC, and food & beverage processing, and ships to roughly 1,400 distributors in 38 countries.

Your mandate from the CEO and the board, communicated on Day 1:

> "Twelve months from now, we need on-time-in-full (OTIF) up from **78% to 95%+**, finished-goods inventory days down from **64 to 38**, *without compromising customer service or quality*. Tell us how, by Day 30, and lead the execution starting Day 31."

The relevant context:

| Dimension | Baseline (current state) | Mandate (12-month target) |
|---|---|---|
| OTIF (on-time-in-full) | 78% | ≥ 95% |
| Finished-goods days of supply | 64 days | ≤ 38 days |
| Annual revenue | $480M | $510M (modest growth assumed) |
| Plants | 3 (Pittsburgh, Monterrey, Łódź) | Same — no closures |
| Manufacturing environment | Mix of MTS (commodity pumps), ATO (configurable valves), and MTO (custom motor assemblies) | Re-baseline per product family |
| Planning software | SAP S/4HANA (ERP), classical MRP module; no APS; spreadsheets in many places | Decide what to keep / replace |
| S&OP maturity | Quarterly cadence; no formal IBP; finance not at the table; chronic demand-supply gaps | Monthly cadence; financialized; executive-led |
| Inventory management | ABC done annually; safety stock heuristic-based; no XYZ; cycle counting inconsistent | Quarterly ABC; data-driven SS; daily cycle-count discipline on A items |
| Capacity planning | RCCP done informally; CRP not used; chronic firefighting at the floor | Layered (RRP → RCCP → CRP → I/O), with formal cadence at each layer |
| Bottleneck management | No TOC discipline; non-bottleneck overtime common | DBR pilot for the Pittsburgh assembly cell; expand if successful |
| Lean maturity | 5S in places, no kaizen rhythm, no kanban, SMED used selectively | Pilot kanban for top-50 SKUs; build kaizen cadence; codified VSM |
| Workforce | ~600 production workers, 110 planners/buyers/schedulers, 22 industrial engineers | Same — no layoffs in plan; expect natural attrition |

Constraints you must honor:
- **No layoffs.** Any productivity gains must come from process improvement, not headcount reduction.
- **Budget for change.** $4.5M total non-recurring spend authorized for software, consultants, training, and one-time inventory write-downs.
- **Customer continuity.** Cannot afford a 6-week stockout window during transition. Phased migration only.
- **CPIM-aligned vocabulary.** Your plan must use ASCM-canonical terminology (RCCP not "capacity check"; ATP not "promise quantity"; DTF/PTF not "frozen zone"; etc.) because the board is hiring an ASCM consultant who will audit the plan against the CPIM Exam Content Manual.

---

## Deliverables (7 artifacts)

Each deliverable is a self-contained document. Total package length: ~25–40 pages of substantive content + supporting tables/charts.

### Deliverable 1: Diagnostic and Baseline Report (3–5 pages)

A clear-eyed assessment of the current state across every module of this course. Must include:
- Current manufacturing environment classification *per product family* (MTS / ATO / MTO) with rationale (Module 1)
- Hayes-Wheelwright matrix placement of each plant, with off-diagonal flags (Module 1)
- Order-winner vs order-qualifier analysis per major customer segment (Module 1)
- Current forecast error baseline by family (MAD, MAPE; pull or estimate from the scenario) (Module 2)
- S&OP maturity assessment against Lapide/Oliver Wight 4-stage model (Module 3)
- Capacity-hierarchy audit: which layers are formally run, which are not (Module 5)
- Inventory KPIs: turnover, days of supply, ABC distribution, IRA for each plant (Module 6)
- PAC audit: dispatching rules in use, queue dominance, SMED maturity (Module 7)
- Lean audit: VSM coverage, 5S maturity, kanban penetration, kaizen cadence (Module 8)

### Deliverable 2: Revised S&OP / IBP Cadence Design (4–6 pages)

Define the new monthly S&OP cycle for Polaris with explicit inputs from Sales, Operations, Finance, and Supply:
- Detailed 5-step S&OP calendar (Days 1–5 Product, Days 6–10 Demand, Days 11–15 Supply, Days 16–20 Pre-S&OP, Days 21–25 Executive) — adapt to a working-day calendar
- Who owns each step and what artifacts are produced
- Decision rights: what the executive S&OP can ratify vs what requires board-level escalation
- Financial integration: how units → dollars; what P&L scenarios are surfaced monthly
- Phased rollout: classic S&OP first, IBP maturation by month 9
- Governance for handling S&OE (Sales & Operations Execution) — the weekly tactical loop below S&OP
- Templates (sketch in tables) for demand review, supply review, and the decision package

### Deliverable 3: MRP → DDMRP Transition Assessment (3–5 pages)

A reasoned assessment of whether Polaris should:
- (a) Keep classical MRP and improve discipline (cleaner BOMs, accurate LT, time-fence policy)
- (b) Adopt DDMRP at decoupling points (Ptak & Smith, 2019) for the highest-variability items
- (c) Add APS / finite-capacity scheduling for the Pittsburgh assembly cell
- (d) Some combination

Include:
- Decision criteria (product variability, lead-time uncertainty, supplier reliability)
- Pilot scope and success metrics
- Capital, time, and people cost estimates
- Risks and mitigations
- Cite Orlicky/Ptak/Smith and Vollmann/Berry/Whybark/Jacobs

### Deliverable 4: Capacity Re-baselining Plan (3–5 pages)

A re-baseline of the capacity hierarchy:
- Long-range Resource Planning: which plants get capital, which get divestment-or-hold (no closures, but no growth investment either)
- RCCP design for the Pittsburgh, Monterrey, and Łódź plants — explicit Bill of Resources for each
- CRP integration into the new MRP discipline
- Input/Output Control reporting cadence for shop-floor execution
- TOC application: identify the *current* bottleneck at Pittsburgh, design the 5 Focusing Steps execution, plan DBR pilot
- Lead-vs-Lag-vs-Match capacity policy choice with rationale tied to demand uncertainty

### Deliverable 5: Inventory Re-architecture and Top-50 SKU Kanban Pilot (4–6 pages)

The most numerically dense deliverable:
- New ABC × XYZ classification cadence (quarterly), with specific differentiated treatment per cell
- Safety-stock formula with explicit z-values per service-level target per ABC class (e.g., A items at 97.5%, B at 95%, C at 90%)
- EOQ / EPQ / FOQ / L4L policy per ABC × XYZ cell, with justification
- Cycle counting calendar: monthly for A, quarterly for B, annual for C; IRA targets
- Top-50 SKU kanban pilot: which 50, what container size, what kanban count using the canonical formula `N = (D × LT × (1+SS)) / C`, expected WIP reduction
- One-time write-down plan for obsolete inventory (Allbirds-style avoidance: don't let stale assumptions drive the next 12 months)

### Deliverable 6: S&OE / Control-Tower Design (2–3 pages)

The weekly tactical layer between monthly S&OP and daily PAC:
- S&OE cadence (weekly) and scope (3-month rolling horizon at SKU level)
- Control-tower design: what data flows in, who acts on what alerts, escalation paths to S&OP
- KPI dashboard: OTIF, days-of-supply, IRA, forecast accuracy, capacity utilization, throughput, on-time supplier deliveries
- Integration with the AI-augmented planning capabilities of the existing SAP IBP module (or assessment whether to invest in Kinaxis / o9 / Anaplan)

### Deliverable 7: 12-Month Change-Management Roadmap and Scorecard (3–4 pages)

The execution plan that ties everything together:
- Month-by-month milestone calendar (12 months) showing what's launched when
- Stakeholder map: who you need to win over (sales VP, plant managers, planners, suppliers, board)
- Communication plan: town halls, training, manager-1:1s, change-champion network
- Risk register: top 10 risks with mitigations
- Success scorecard: the 8–10 KPIs the CEO sees monthly, with the trajectory from current to target
- The 30-60-90 day plan for *you* (the Director): what you personally do in your first 30, 60, 90 days

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|---|---|---|---|---|
| **CPIM vocabulary correctness** | 15 | Uses every ASCM-canonical term precisely; no consumer/casual substitutions; framework names always cited (Hill, Hayes & Wheelwright, Goldratt, Wallace, Orlicky, Womack/Jones, Ohno, Elkington). | Mostly canonical; 2–5 vocabulary misuses; some citations missing. | Frequent vocabulary errors; "frozen zone" used instead of DTF; "capacity check" instead of RCCP. |
| **Diagnostic depth** | 15 | Every module's framework applied; explicit gap-to-target identification per metric; data-driven not hand-waving. | Most modules covered; some gaps; 1–2 frameworks misapplied. | Diagnostic is shallow; missing modules; "we have problems" without specificity. |
| **S&OP design integrity** | 15 | 5-step Wallace cadence faithfully implemented; clear roles; financial integration explicit; executive ratification mechanism designed. | Cadence designed but with structural gaps; finance integration weak. | Cadence missing or incoherent; no executive ratification. |
| **MRP / DDMRP / capacity coherence** | 15 | Decision reasoned with reference to product variability, LT uncertainty, supplier reliability; pilot scope realistic; capacity hierarchy fully designed. | Decision made but rationale thin; pilot scope under-specified. | Hand-waved; "use DDMRP everywhere" or similar non-decision. |
| **Inventory & kanban quantitative work** | 15 | EOQ, ROP, safety stock, kanban counts computed by hand for the top-50 pilot SKUs (or a representative subset); ABC × XYZ matrix produced; obsolete write-down plan quantified. | Some computations; ABC done but XYZ omitted; write-down qualitative. | No computations; "we'll size kanban later." |
| **Change-management realism** | 10 | 12-month milestone calendar realistic; risks named with mitigations; stakeholder map covers all key actors; communication plan plausible. | Calendar in place but optimistic; risks listed without mitigations. | "We will execute" without specifics. |
| **Written argumentation** | 10 | Clear structure; defensible logic; trade-offs surfaced and chosen; citations include both ASCM sources and external (HBR, MIT, Lean Enterprise Institute). | Mostly clear; some unsupported claims. | Disorganized; assertions without support. |
| **Self-grading rigor** | 5 | Submitted with completed self-assessment against this rubric; weaknesses identified explicitly. | Self-assessment present but lenient. | No self-assessment. |

**Passing threshold for portfolio use: 75/100.** Strong portfolio-grade work: 85+. CPIM-graduate-quality work: 90+.

---

## Suggested timeline (6 weeks part-time)

| Week | Focus | Deliverable touched |
|---|---|---|
| 1 | Re-read modules 1, 2, 3; baseline diagnostic | D1 (start) |
| 2 | Finish D1; start D2 (S&OP design) | D1, D2 |
| 3 | Finish D2; start D3 (MRP/DDMRP) and D4 (Capacity) | D2, D3, D4 |
| 4 | Finish D3, D4; start D5 (Inventory + kanban pilot) | D3, D4, D5 |
| 5 | Finish D5; build D6 (S&OE / control tower) and D7 (Roadmap) | D5, D6, D7 |
| 6 | Cross-deliverable polish; self-grade against rubric; revise weakest 2 sections | All |

For a more intensive 4-week timeline: compress D1-D3 to week 1, D4-D5 to week 2, D6-D7 to week 3, polish to week 4.

---

## What "submission" looks like

You are doing this for yourself. The "submission" is a self-contained package on your own machine (or in a personal repo). Recommended format:

- A single PDF (~30–40 pages) or a folder of Markdown files
- Tables/charts may be hand-sketched, Excel, or generated; quality is in the *reasoning*, not the aesthetics
- File names: `D1-Diagnostic.md`, `D2-SOP-Cadence.md`, … `D7-Roadmap.md`, plus a `README.md` overview
- A separate `Self-Grade.md` file applying this rubric to your own work

If you want external feedback: post the executive summary (2 pages) to a study group, ASCM forum, or a LinkedIn "looking for portfolio review" post. The full document is best kept private until you decide to share it as a portfolio artifact.

---

## Optional stretch goals

- **Real-world calibration.** Find a publicly traded industrial manufacturer (Roper Technologies, Watts Water, Xylem, Emerson Electric segment, Mueller Industries) of roughly $400M-$800M revenue and benchmark your KPI targets against their 10-K disclosed inventory turnover and the inferred OTIF from their accounts-payable / customer-satisfaction commentary.
- **Tool-aware variant.** Pick a single tool (Kinaxis Maestro, SAP IBP, o9 Solutions, Anaplan) and adapt Deliverable 6 to that tool's specific data model and workflow. Useful if you're job-hunting at a company that uses that stack.
- **Industry pivot.** Re-run the capstone against a different industry — pharma manufacturing, food & beverage, electronics contract manufacturing — and articulate how the answer changes by industry. Strong test of CPIM transferability.
- **Sustainability extension.** Add an 8th deliverable: Triple-Bottom-Line scorecard with Scope 1 + 2 emissions targets, water-and-waste KPIs, and the supply-chain implications. Tests the modern ASCM sustainability emphasis.
- **CSCP/CLTD/CPSM hand-off.** Use the capstone as the input to an extended case for the sibling ASCM credentials. The S&OP cadence you design here is consumed by CSCP's multi-tier network design and CLTD's logistics planning.

---

## A final note

If you can produce a substantively complete version of this capstone, you will exit the CPIM program able to *do the job*, not just pass the exam. That's the bar Cornell, Harvard, Stanford, and MIT all teach to. It's also what hiring managers at Polaris (and every other industrial manufacturer in 2026) are actually paying for.

Trust the work. The exam will feel easy once the capstone feels finished.
