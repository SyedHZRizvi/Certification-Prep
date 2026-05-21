# Module 4: Supply Planning & S&OP 🗓️

> **Why this module matters:** S&OP / IBP is the "executive heartbeat" of supply chain. The CSCP expects you to recite Wallace/Stahl's five-step monthly cycle, link aggregate plans to MPS and MRP, and explain RCCP vs CRP cold. Multi-question scenarios in Domain 3 hinge on this.

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

This is the **single most-tested S&OP framework** on CSCP. Memorize the order:

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

Oliver Wight popularized IBP as an evolution of S&OP. Differences:

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

## 📚 Further Reading (Optional)

- 📖 Wallace & Stahl, *Sales & Operations Planning: The How-To Handbook*
- 📖 Oliver Wight, *Integrated Business Planning Reference Model*
- 📖 Goldratt, *The Goal* — TOC novel, must-read
- 📖 APICS *Master Planning of Resources (CPIM-MPR)* — deeper dive into S&OP/MPS
- 📖 ASCM CSCP Learning System Module 4
