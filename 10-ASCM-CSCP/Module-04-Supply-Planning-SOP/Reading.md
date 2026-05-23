# Module 4: Supply Planning & S&OP 🗓️

> **Why this module matters:** S&OP / IBP is the "executive heartbeat" of supply chain. The CSCP expects you to recite Wallace/Stahl's five-step monthly cycle, link aggregate plans to MPS and MRP, and explain RCCP vs CRP cold. Multi-question scenarios in Domain 3 hinge on this.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Forecasting methods + error metrics](../Module-03-Demand-Forecasting/Reading.md) — Module 3
> - [CPFR and one-number forecasting](../Module-03-Demand-Forecasting/Reading.md) — Module 3
> - [The bullwhip effect](../Module-01-SCM-Foundations-Strategy/Reading.md) — Module 1
> - Basic BOM and routing intuition
> If you've never read about Bill of Materials structures or MRP, skim a quick intro before tackling the MRP section.

---

## 🏗️ A Story: The Forklift Maker's Monday Meeting

Anita is VP of Operations at **Cargolift**, a 1,400-employee forklift manufacturer. For years, her Monday operations meeting was chaos. Sales would commit to orders the plant couldn't build. Finance would complain about excess inventory of slow-selling models. The CEO would slam the table and demand "alignment."

In Q2 2021 they rolled out a formal S&OP process. **Five steps, once a month, every month.** Sales forecasted at product family level. Operations matched capacity. Finance translated the plan into cash. The executive team reviewed it together. They agreed on **one plan** — not three.

Six months in, on-time delivery rose from 76% to 94%. Inventory dropped 19%. The Monday meetings stopped feeling like brawls.

This is what S&OP buys you. But to get there, you need the vocabulary: aggregate planning, MPS, MRP, RCCP, CRP, time fences, IBP. This module unpacks all of it.

---

## 🎯 The Planning Hierarchy (Top-Down)

```
   ┌──────────────────────────────────────────────────┐
   │   Strategic Plan (3–10 yrs) — facilities, M&A    │
   └──────────────────────────────────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────────┐
   │   S&OP / Aggregate Plan (12–24 mo, families)    │
   └──────────────────────────────────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────────┐
   │   Master Production Schedule (3–6 mo, SKU)      │
   └──────────────────────────────────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────────┐
   │   MRP — Material Requirements Plan (components) │
   └──────────────────────────────────────────────────┘
                          │
   ┌──────────────────────▼──────────────────────────┐
   │   Production Activity Control (shop floor)      │
   └──────────────────────────────────────────────────┘
```

Each tier translates the previous tier into more granular numbers. **The plans must reconcile.**

| Level | Horizon | Unit of Plan | Owner |
|-------|---------|--------------|-------|
| Strategic | 3–10 yrs | $ revenue | CEO / CFO |
| S&OP / Aggregate | 12–24 mo | Product families | Cross-functional |
| MPS | 3–6 mo | SKU / end-item | Master scheduler |
| MRP | Same as MPS | Components | MRP planner |
| PAC | Days–weeks | Work orders | Shop floor supervisor |

---

## 🗓️ S&OP — The Five-Step Monthly Cycle (Wallace / Stahl)

**Thomas F. Wallace and Robert A. Stahl, *Sales & Operations Planning: The How-To Handbook*** (T. F. Wallace & Co., 3rd edition 2008; original 1999 — Wallace was a co-founder of the Oliver Wight Companies). This is the **single most-tested S&OP framework** on CSCP. Memorize the order:

### Step 1 — Data Gathering
Collect last month's sales, forecast, supply actuals, inventory, financials.

### Step 2 — Demand Planning (Demand Review)
Sales + marketing build a 18–24 month unconstrained demand forecast at product-family level. Include promotions, new launches, churn.

### Step 3 — Supply Planning (Supply Review)
Operations evaluates whether forecasted demand can be met given capacity, materials, and inventory. Identifies gaps and proposes alternatives (overtime, outsourcing, capacity adds).

### Step 4 — Pre-S&OP Meeting (Reconciliation)
Cross-functional team reconciles demand and supply, surfaces remaining gaps and decisions needed at the executive meeting.

### Step 5 — Executive S&OP Meeting
The C-suite reviews KPIs, debates options, and **commits to one plan** that drives all downstream planning.

```
   1. Data        2. Demand      3. Supply      4. Pre-S&OP    5. Exec S&OP
   ──Gather──►   ──Review───►   ──Review───►   ──Reconcile──►  ──Decide──►
```

🧠 **Memory hook:** "**G**ood **D**emand **S**upply **P**lanning **E**xecutes" → G-D-S-P-E (5 steps).

🎯 **Exam tip:** The output of S&OP is an **aggregate plan** (in product families, not SKUs) covering 12–24 months. SKU disaggregation happens in MPS.

---

## 🚀 IBP — Integrated Business Planning (S&OP's grown-up sibling)

**Oliver Wight International** (founded 1969 by Oliver W. Wight; published the *IBP Reference Model* in multiple editions; current 2024 edition under George Palmatier) popularized IBP as an evolution of S&OP. Differences:

| Dimension | S&OP | IBP |
|-----------|------|-----|
| Scope | Demand + supply primary | Adds finance, NPI, strategy |
| Outputs | Volume plan | Volume + dollar + strategic milestones |
| Horizon | 12–24 mo | 24–36 mo |
| Executive focus | Reactive monthly review | Forward-looking, scenario-driven |
| Maturity | Stage 2–3 | Stage 4–5 |

**IBP = S&OP + finance + strategy + scenario planning + NPI integration.** On the exam, expect questions phrasing IBP as "the financial and strategic evolution of S&OP."

---

## 🧮 Aggregate Planning Strategies

Aggregate planning balances demand and capacity over the 12–24 month horizon. Three pure strategies:

| Strategy | Approach | Pros | Cons |
|----------|----------|------|------|
| **Chase** | Match production to demand each period | Low inventory | Hiring/firing churn, variable capacity |
| **Level** | Constant production, absorb variability with inventory | Stable workforce, low cost/unit | High inventory carrying cost |
| **Hybrid (mixed)** | Combine + use overtime, subcontracting, demand shaping | Balanced | Complex to manage |

**Levers**: overtime, hiring/firing, subcontracting, inventory buildup, backorders, price promotion, lead time quoting.

🎯 **Exam tip:** Service industries (no inventory) lean toward **chase**. Capital-intensive manufacturing leans toward **level**. Most real firms use **hybrid**.

---

## 📋 Master Production Schedule (MPS)

The MPS converts the aggregate plan into a SKU-level, time-phased build plan covering 3–6 months.

| Term | Definition |
|------|------------|
| **MPS** | Statement of what will be produced, when, in what quantity |
| **Time bucket** | Period (typically week) in the MPS |
| **Planning horizon** | Total length of the MPS (often cumulative lead time × 1.5) |

### Time fences (CRUCIAL)

| Fence | Position | Rule |
|-------|----------|------|
| **Demand time fence (DTF)** | Inside this, only actual customer orders count | Forecast frozen out |
| **Planning time fence (PTF)** | Inside this, MPS is frozen; changes require master scheduler |
| **Outside PTF** | System can plan freely; reflects forecast |

```
   |─── Frozen ───|── Slushy ──|─── Liquid ───────────────►
   |              |            |
   Now            DTF          PTF                         Far future
   Actual orders  Manual chg   Auto-planned by MRP
```

🚨 **Trap on the exam:** DTF is closer in time than PTF. Inside DTF only firm orders drive the MPS; inside PTF changes are managed; outside PTF the system can replan freely.

### Available-to-Promise (ATP)

ATP is the portion of inventory + scheduled production not yet committed to customer orders. Used by customer-facing systems for promising new orders.

```
   ATP(period) = (On-hand + MPS) − (sum of customer orders booked through next MPS receipt)
```

---

## 📦 MRP — Material Requirements Planning

MRP explodes the MPS through the **Bill of Materials (BOM)** to produce time-phased component requirements.

### MRP inputs (the "3 main inputs")

1. **MPS** — what end-items to build, when
2. **BOM** — parent-child structure with quantity-per
3. **Inventory records** — on-hand, on-order, allocated

### MRP outputs

1. Planned order releases
2. Reschedule notices (move-in / move-out / cancel)
3. Purchase order recommendations

### Lot-sizing rules

| Rule | Logic | Use |
|------|-------|-----|
| **Lot-for-lot (L4L)** | Order exactly net requirement each period | Low setup cost, JIT |
| **EOQ** | Fixed quantity from EOQ formula | Stable demand |
| **POQ** (period order quantity) | Fixed time window | Smoothed lumpy demand |
| **FOQ** (fixed order quantity) | Predetermined | Pack-size constraints |
| **Min-max** | Reorder to max when min hit | Maintenance/spares |

> 🚨 **Trap:** Independent demand SKUs are managed by reorder-point/EOQ logic. Dependent demand is MRP-driven, often L4L.

---

## 🏭 Capacity Planning Layers

| Plan | Acronym | Horizon | Granularity | Purpose |
|------|---------|---------|-------------|---------|
| Resource Requirements Planning | **RRP** | Same as strategic | Resource $ | Long-term capacity decisions |
| Rough-Cut Capacity Planning | **RCCP** | Same as MPS | Key work centers, families | Validate MPS feasibility |
| Capacity Requirements Planning | **CRP** | Same as MRP | All work centers, by part | Validate MRP feasibility |
| Input/Output Control | **I/O** | Shop floor | Daily | Monitor actual load vs plan |

🧠 **Memory hook:** "RRP → RCCP → CRP → I/O" mirrors strategic → S&OP → MPS → MRP → shop floor.

### RCCP example
If MPS says build 100 forklifts/week and each takes 12 hours on the welding cell, you need 1,200 welding hours. If the cell offers only 1,000 hours/week, the MPS is infeasible → renegotiate or add capacity.

### CRP example
Same idea, but at component level using routings. CRP looks at EVERY work center for EVERY part on the MRP, comparing required vs available hours.

---

## ⛓️ Drum-Buffer-Rope & Theory of Constraints (preview)

Eliyahu Goldratt's TOC says throughput is set by the **constraint** (the bottleneck work center). The "drum" sets the pace, the "buffer" protects it, and the "rope" pulls upstream releases. We'll go deeper in Module 10, but expect crossover questions here.

---

## 📊 The Master Scheduler's Day

| Activity | Frequency | Notes |
|----------|-----------|-------|
| Run MPS through PTF check | Daily | Ensure no overload |
| Review reschedule notices from MRP | Daily | Move-in / move-out |
| Maintain time-fence integrity | Continuous | Push back changes inside DTF |
| Capacity check vs RCCP | Weekly | Surface gaps to S&OP |
| Liaise with sales on hot orders | Continuous | ATP queries |

---

## 🎯 ATP, CTP, ATD, ATR — The Promise Family

| Term | Meaning |
|------|---------|
| **ATP — Available-to-Promise** | Uncommitted inventory + future production |
| **CTP — Capable-to-Promise** | Can we build it given capacity + materials? |
| **PTP — Profitable-to-Promise** | Is the order profitable at quoted price? |
| **ATD — Available-to-Deliver** | Logistics: can we ship by the date? |
| **ATR — Available-to-Reserve** | For project / engineering work |

🎯 **Exam tip:** ATP looks at inventory + planned production. CTP also considers capacity. Use CTP for MTO/ATO; ATP for MTS.

---

## 📊 Case Study — Toyota's Semiconductor Resilience (2021-2023)

**Situation.** When the global semiconductor shortage hit in early 2021, every major automaker — GM, Ford, Volkswagen, Stellantis — slashed production. Ford lost ~1.1 million vehicles in 2021 (Q1 reported $2.5B EBIT hit). GM idled multiple North American plants for weeks at a time. The Tier-1 chip suppliers (Infineon, NXP, Renesas, ON Semi, STMicro) couldn't make automotive-grade microcontrollers fast enough because they'd shifted capacity to higher-margin consumer electronics during 2020 COVID. **Toyota's outlook in March 2021: barely affected.** Production targets held. By Q3 2021, Toyota briefly became the world's #1 automaker by volume — overtaking GM for the first time since 1931 — partly because rivals were idled.

**Decision.** This was not a 2021 decision. It was a **2011 decision**, made after the Tōhoku earthquake and tsunami devastated Renesas Electronics' Naka 8-inch fab in Hitachinaka, Ibaraki. After 2011, Toyota's S&OP / IBP discipline (the Toyota Way + Wallace/Stahl-style monthly cycle, scaled across keiretsu suppliers) added a multi-year **supplier capacity reservation** program for semiconductors. Toyota committed forward-buy and capacity reservations 4-6 months ahead — much longer than the 1-2 week JIT lookahead the industry assumed Toyota used. Internally called *kanban-with-strategic-buffer* or "BCP inventory" (business continuity inventory), Toyota maintained 2-6 months of safety stock specifically on chips, sensors, and other long-lead-time critical components. The keiretsu-level S&OP shared aggregated forecasts with Tier-2 suppliers (chip foundries) so they could plan capacity reservations 18-24 months out.

**Outcome.** In FY2022 (Apr 2021-Mar 2022) Toyota produced 8.6 million vehicles, +9% YoY. Operating profit reached **¥2.99 trillion (~$23 billion)** — a record. By contrast, GM's full-year 2021 wholesale volume fell 13%. The 2021-2022 "Toyota beats GM" story became a Harvard Business Review case study (*"What Toyota Knows About Supply Chain Resilience That Others Don't"* by Yossi Sheffi, HBR Spring 2022). The Toyota strategy was not anti-JIT — it was JIT for *non-critical* parts and strategic-buffer for *critical/long-lead-time* parts. Critics who had labeled Toyota's pre-2021 chip inventory "obvious waste under JIT" went silent.

**Lesson for the exam / for practitioners.** This is the IBP case study. Toyota's S&OP was integrated with finance (the BCP buffer cost ~$1B/year, accepted as risk insurance), with strategy (the 10-year roadmap to electrification), and with supplier relationships (capacity reservations require trust + commercial commitment). On the exam: pure JIT is the wrong answer when supply uncertainty is high on critical items. The Wallace/Stahl 5-step process (cycle: data → demand → supply → pre-S&OP → executive) is mechanically how Toyota produced one number across 350+ Tier-1 partners. The "Enable" SCOR process — governance + risk + IT — is what made the buffer decisions executable.

**Discussion (Socratic).**
- Q1: Toyota's $1B/year buffer "cost" looks defensible only with hindsight. How would you, as a 2018 CFO, defend that line item against an activist investor demanding "lean Lean Lean"?
- Q2: Many competitors (GM, Ford) had S&OP processes mechanically equivalent to Toyota's. What did the Toyota process include that theirs didn't? Cite IBP-specific elements (financial integration, strategic horizon, NPI integration).
- Q3: In 2024-2026 the EV transition is shifting chip demand patterns — more, different, larger chips per vehicle. Toyota's BCP inventory of the *previous-generation* chip stock could become obsolete. How does the S&OP / IBP cycle catch this risk, and where would it surface (which of the 5 steps)?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "S&OP is a meeting" | S&OP is a *process* — the meeting is the climax |
| "MPS = MRP" | MPS = end-item plan. MRP explodes MPS through BOM |
| "RCCP checks every work center" | That's CRP. RCCP checks only key work centers |
| "Time fences are optional" | Without them, MRP nervousness destroys execution |
| "Chase is always cheaper than level" | Only if labor is variable and turnover is acceptable |
| "ATP equals current inventory" | ATP also includes uncommitted future production |
| "IBP replaces S&OP" | IBP is the evolution; many firms still call it S&OP |

---

## 🚨 Exam Traps

1. **DTF vs PTF direction** — DTF is closer in time; PTF is further out.
2. **RCCP vs CRP** — RCCP at MPS level, key work centers. CRP at MRP level, every work center.
3. **MPS owner** — Master scheduler, not MRP planner.
4. **S&OP family vs MPS SKU** — S&OP plans in families; MPS in SKUs.
5. **Chase strategy in service firms** — Often correct because you can't inventory services.
6. **Inputs to MRP** — MPS, BOM, inventory. Forgetting any = wrong answer.
7. **IBP horizon** — 24–36 months, longer than vanilla S&OP.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **S&OP** | Cross-functional monthly process to balance demand & supply at family level |
| **IBP** | Integrated Business Planning — S&OP + financial + strategic + NPI scope |
| **Aggregate plan** | Family-level 12–24 month plan output of S&OP |
| **MPS** | Master Production Schedule — SKU-level build plan |
| **MRP** | Material Requirements Planning — explodes MPS through BOM |
| **BOM** | Bill of Materials — parent-child structure with quantity-per |
| **Time fence** | DTF (closer, frozen) and PTF (further, slushy) boundaries |
| **ATP** | Available-to-Promise — uncommitted inventory + production |
| **CTP** | Capable-to-Promise — also considers capacity |
| **RCCP** | Rough-Cut Capacity Planning — validate MPS at key work centers |
| **CRP** | Capacity Requirements Planning — validate MRP at all work centers |
| **Lot-for-lot** | Order exactly net requirement each period |
| **Chase / Level / Hybrid** | Aggregate planning strategies |
| **Drum-Buffer-Rope** | TOC scheduling for constraint-driven flow |

---

## ✅ Module 4 Summary

You now know:
- 🎯 The planning hierarchy: strategic → S&OP → MPS → MRP → PAC
- 🗓️ The Wallace/Stahl 5-step S&OP monthly cycle
- 🚀 How IBP extends S&OP with financial, strategic, NPI integration
- 🧮 Chase vs level vs hybrid aggregate planning
- 📋 MPS, time fences (DTF, PTF), ATP/CTP
- 📦 MRP inputs and outputs, lot-sizing rules
- 🏭 RRP → RCCP → CRP → I/O capacity layers

**Next steps:**
1. 🎥 [Videos.md](./Videos.md) — pay attention to S&OP cycle demos and MRP examples
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 5: Inventory & Capacity](../Module-05-Inventory-Capacity/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 5 uses MPS-derived demand to compute EOQ/SS at SKU level; Module 6 sources the supplier capacity that supply planning relies on; Module 10 connects RCCP/CRP feasibility to TOC and Lean.
> - Cross-course: `11-ASCM-CPIM` Module 4 takes MPS and MRP into vastly more depth (MPS techniques, time-phased planning, capacity at every level). If you're going CSCP → CPIM, plan to revisit this module.
> - Practice: Practice Exam 1 has ~12 S&OP/MPS/MRP questions; Final Mock has ~15 including a worked MRP scenario.

---

## 💬 Discussion — Socratic prompts

1. **The S&OP that's actually a budget review.** A mid-cap firm's "S&OP" meeting is really a finance review where the CFO interrogates volume vs budget. Construct the strongest argument that this is *not* S&OP, citing Wallace/Stahl steps. What's missing, and how would you redesign?
2. **DTF vs PTF in a 2-day-lead-time business.** A grocery wholesaler has 2-day customer lead time and 60-day supplier lead time. Where should DTF and PTF sit, and what makes that placement controversial within the firm?
3. **Chase vs level under inflation.** Inflation 2022-2024 changed the labor-cost math for chase strategies. Argue whether a chase strategy that was correct in 2019 should be revisited under 2024 labor markets.
4. **IBP is just a rename.** A skeptical operations director says "IBP is what Oliver Wight calls S&OP plus PowerPoint slides — there's no real difference." Build the rebuttal using specific IBP capabilities (financial integration, NPI, scenario planning).
5. **The 2025 AI-augmented S&OP.** Generative AI tools (Anthropic Claude, OpenAI GPT-4) now draft S&OP narratives, summarize variance, and propose scenarios. Where do humans still need to own decisions in the 5-step cycle, and where is AI sufficient?

---

## 📚 Further Reading (Optional)

- 📖 Thomas F. Wallace & Robert A. Stahl, *Sales & Operations Planning: The How-To Handbook* — T. F. Wallace & Co., 3e 2008 (the canonical S&OP reference)
- 📖 George Palmatier & Colleen Crum, *The Transition from Sales and Operations Planning to Integrated Business Planning* — Oliver Wight Companies, 2024 update
- 📖 Eliyahu Goldratt, *The Goal: A Process of Ongoing Improvement* — North River Press, 4e 2014 (original 1984; the TOC novel — must-read)
- 📖 Yossi Sheffi, *The New (Ab)Normal: Reshaping Business and Supply Chain Strategy Beyond Covid-19* — MIT CTL Media, 2020 (the Toyota case + S&OP resilience)
- 📖 APICS *Master Planning of Resources (CPIM-MPR)* learning system — deeper dive into S&OP/MPS/MRP
- 📖 ASCM CSCP Learning System Module 4
- 📰 *Journal of Business Forecasting* — quarterly practitioner journal on S&OP / IBP
