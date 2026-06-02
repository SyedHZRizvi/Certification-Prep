# Module 6: Inventory Management 📦

> **Why this module matters:** Inventory is where CPIM gets *math-heavy*. EOQ, EPQ, safety stock, ROP, ABC, cycle counting — about 20% of exam questions live here, and almost half of them involve a calculation. Bank these points by being fluent with the formulas.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 2: Demand Planning & Forecasting](../Module-02-Demand-Planning-Forecasting/Reading.md) — σ (standard deviation), MAD, MAPE; safety stock depends directly on demand variability
> - [Module 4: MPS / MRP](../Module-04-Master-Production-Scheduling-MRP/Reading.md) — lot-sizing rules consume the same EOQ/POQ/FOQ vocabulary
> - High-school algebra: square roots (for EOQ), the normal distribution (for safety stock)
>
> This is the most arithmetic-heavy module. Expect to work each EOQ, EPQ, ROP, and safety-stock example by hand. If the math is rusty, build a 1-page cheat sheet of formulas before starting.

---

## 🍕 A Story: The Bookstore That Saved Itself With ABC

**Saito Books** in Tokyo had 14,000 SKUs and was bleeding cash. Stockouts on the bestsellers, dusty stacks of obscure poetry, $4M in inventory carrying cost.

The new manager, Aki, ran an **ABC analysis**. She found:

- **A items** (the top 12% of SKUs) = 70% of revenue → 380 bestsellers
- **B items** (next 25%) = 22% of revenue → 1,750 mid-runners
- **C items** (bottom 63%) = 8% of revenue → 11,870 long-tail titles

Aki cycled-counted A items every month, B items every quarter, C items annually. She set tight safety stock on A's (loss of sale = critical), loose on C's. She negotiated EOQ-based reorder points for A's, and "min/max" simple rules for C's.

12 months later: A-item service level rose from 88% to 97%. Total inventory dropped 22%. Carrying cost dropped $890K/year. Aki got promoted.

**That's inventory management.** Not "buy less." It's *tier your effort to match the impact of each item.*

---

## 🎯 Why Hold Inventory at All? (Functions)

ASCM teaches the **six functions of inventory** — know them.

| Function | Purpose | Example |
|----------|---------|---------|
| **Cycle (lot-size)** | Result of producing/ordering in batches larger than immediate demand | Buying a case of paper for cost discount |
| **Safety (buffer)** | Protect against demand or supply uncertainty | Extra stock for a critical screw |
| **Anticipation** | Build for a known future spike | Christmas toys built in summer |
| **Transit (pipeline)** | In motion between stages | Containers on a ship |
| **Hedge** | Protect against price/exchange-rate moves | Buying copper ahead of price hike |
| **Decoupling** | Separate stages so they can run independently | WIP between two cells with different cycle times |

🎯 **Exam pattern:** "Why does a plant hold WIP between two work cells with different cycle times?" → Decoupling. "Why does a soda plant build inventory in spring for summer?" → Anticipation.

---

## 💰 The 4 Inventory Costs (MEMORIZE)

| Cost Type | What It Is | Example |
|-----------|-----------|---------|
| **Ordering / Setup cost (S)** | Cost per order placed (or setup performed) | Paperwork, freight, supplier negotiations |
| **Carrying / Holding cost (H)** | Cost to hold one unit for one year (often as % of item cost) | Warehouse, insurance, obsolescence, capital |
| **Stockout cost** | Cost of running out (lost sale, expedite, customer dissatisfaction) | Express shipping fees, lost customer |
| **Item cost** | What you pay per unit | Supplier invoice |

Carrying cost is typically expressed as a *percentage* of the item value — common range **20–35% per year**. (Capital ~10%, storage ~5%, obsolescence/insurance/taxes ~5–20%.)

---

## 📐 Economic Order Quantity (EOQ) — THE Formula

> **Citation.** The EOQ model originated with **Ford W. Harris**, "How Many Parts to Make at Once," *Factory: The Magazine of Management* 10(2), 1913, pp. 135–136, 152 (the original article was lost for decades; rediscovered by Erlenkotter, 1990 in *Operations Research* 38(6)). The formula was re-derived and popularized by **R.H. Wilson** in 1934, which is why some texts call it the "Harris-Wilson EOQ" or just "Wilson EOQ." Reaffirmed in the ASCM Dictionary (16th ed., 2022) and treated as canonical in Vollmann/Berry/Whybark/Jacobs (Ch. 9) and every operations textbook.

🔥 **MEMORIZE THIS.** EOQ appears on every CPIM exam, usually twice.

```
EOQ = √(2 × D × S / H)
```

Where:

- **D** = annual demand (units/year)
- **S** = ordering / setup cost per order ($)
- **H** = holding cost per unit per year ($/unit/year)

EOQ minimizes the total of ordering cost + holding cost (they cross at the EOQ point).

### Worked example

D = 10,000 units/year, S = $50/order, H = $2/unit/year.

`EOQ = √(2 × 10,000 × 50 / 2) = √(1,000,000 / 2) = √500,000 ≈ 707 units`

Wait — let me re-check: `2 × 10,000 × 50 = 1,000,000`. Divide by H=2: `500,000`. √500,000 ≈ 707.

So order **707 units** each time. Number of orders per year = 10,000 / 707 ≈ **14.1 orders/year**.

### EOQ Assumptions (the textbook ones — and why they're often violated)

| Assumption | Real-world reality |
|------------|---------------------|
| Demand is constant | Often varies seasonally |
| Lead time is constant | Often varies |
| Whole order arrives at once | Often staggered |
| No quantity discounts | Suppliers offer breaks |
| No stockouts allowed | Sometimes accepted |

🚨 **Trap:** EOQ is a *starting point*, not a final answer. Real lot-sizing usually rounds to truckload, case-pack, or POQ.

---

## 🏭 Economic Production Quantity (EPQ)

When you *make* (not buy) the items, production happens at rate **p** and demand draws down at rate **d** simultaneously. EPQ adjusts EOQ:

```
EPQ = √(2 × D × S / H) × √(p / (p − d))
```

Or equivalently: `EPQ = EOQ × √(p/(p-d))`.

EPQ is always *larger* than EOQ for the same D, S, H — because while you're producing, demand is also drawing inventory.

---

## 🔁 Reorder Point (ROP) + Safety Stock

When inventory drops to ROP, you place a new order.

```
ROP = (Average daily demand × Lead time in days) + Safety Stock
ROP = d × LT + SS
```

If lead time = 10 days, average daily demand = 50 units, safety stock = 100 units:
`ROP = 50 × 10 + 100 = 600 units`

When inventory hits 600, you order. Lead time of 10 days × 50/day = 500 units consumed during LT. The other 100 = safety stock buffer.

### Safety Stock Calculation

For a *service level* target (e.g., 95%) with normally distributed demand:

```
SS = z × σ_LT
```

Where:

- **z** = service-level factor (from normal table)
- **σ_LT** = standard deviation of demand during lead time

Common z values to MEMORIZE:

| Service Level | z |
|---------------|---|
| 50% | 0 |
| 84.1% | 1.0 |
| 90% | 1.28 |
| 95% | 1.65 |
| 97.5% | 1.96 |
| 99% | 2.33 |
| 99.86% | 3.0 |

### Worked example — Safety Stock

Demand has σ = 30 units/day. Lead time = 9 days. We assume demand variability over LT follows: `σ_LT = σ × √LT` (if demand is independent across days).

`σ_LT = 30 × √9 = 30 × 3 = 90 units`

For 95% service level: `SS = 1.65 × 90 = 148.5 ≈ 149 units`.

ROP = 50 × 9 + 149 = **599 units**.

🎯 **Exam pattern:** Given demand stats, LT, and service level, compute ROP. Very common.

---

## 📊 ABC Classification (Pareto)

> **Citation.** ABC inventory classification builds on **Vilfredo Pareto's** observation (1896, *Cours d'économie politique*, École de Lausanne) that ~20% of Italians owned ~80% of the land. The application to inventory was first published by **H. Ford Dickie** of General Electric, "ABC Inventory Analysis Shoots for Dollars, Not Pennies," *Factory Management and Maintenance* 109(7), 1951, pp. 92–94. The two-axis ABC × XYZ extension was popularized by **Christof Schulte** in the German operations literature in the 1990s and is now standard in ASCM teaching and in SAP's Material Master classification (ABC indicator + XYZ indicator).

The classic 80/20 idea applied to inventory.

| Class | % of SKUs | % of $ Volume | Cycle Count | Safety Stock |
|-------|-----------|---------------|-------------|--------------|
| **A** | 10–20% | 70–80% | Monthly | Tight, optimized |
| **B** | 20–30% | 15–25% | Quarterly | Moderate |
| **C** | 50–70% | 5–10% | Annually | Generous (cheap) |

🎯 ABC drives *effort allocation*: spend planner time on A items; auto-replenish C items.

### XYZ Classification (Variability-Based)

A second axis for inventory work:

| Class | Demand Variability |
|-------|--------------------|
| **X** | Stable, predictable |
| **Y** | Some variability |
| **Z** | Highly erratic / sporadic |

Combine ABC × XYZ to get a 9-cell matrix — informs how to plan and stock each cell differently.

---

## 🔢 Cycle Counting

Instead of an annual full physical inventory (plant shuts down for 3 days), **cycle counting** counts a portion of inventory continuously throughout the year.

### Cycle-Count Rules

- A items counted monthly (or more)
- B items quarterly
- C items annually
- Count when an item hits zero on hand (cheap moment to verify)
- Count after a discrepancy is suspected

**Inventory Record Accuracy (IRA)** — the % of items whose computer record matches the physical count within a tolerance. ASCM target: **≥95% for A items.**

```
IRA = (Items counted correctly within tolerance / Total items counted) × 100%
```

🎯 **Exam pattern:** "What is the recommended cycle-count frequency for an A item?" → Monthly. "Tolerance is typically ___ for A items?" → 0% (must be exact) for A; wider for C.

---

## 📈 Inventory Turnover & Days Supply

```
Inventory Turnover = Annual Cost of Goods Sold / Average Inventory at Cost
Days of Supply = 365 / Turnover
```

### Worked example

COGS = $20M/year, average inventory = $4M.

Turnover = 20 / 4 = **5 turns per year**.
Days of supply = 365 / 5 = **73 days**.

Higher turnover = better (less capital tied up) — within reason; too high = stockouts and expediting.

---

## 🗄️ Other Inventory Concepts

### Quantity Discount

When suppliers offer price breaks at higher order quantities, the EOQ may not be optimal — you must compare total cost at each price break.

### Vendor-Managed Inventory (VMI)

The *supplier* monitors customer inventory and reorders automatically. Reduces customer planner workload, smooths supplier capacity, mitigates bullwhip.

### Consignment Inventory

Goods physically at customer site but *owned by supplier* until consumed. Customer pays only on use.

### Inventory Valuation Methods (Briefly)

- **FIFO** — first-in, first-out (older stock issued first)
- **LIFO** — last-in, first-out (newer stock issued first)
- **Weighted Average** — average cost
- **Standard Cost** — predetermined cost; variances flagged

For perishables, always FIFO. For tax purposes in inflationary periods, LIFO may reduce tax (in jurisdictions that allow it).

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "EOQ is always the right order quantity" | EOQ is a starting point; round to truckload, case-pack, supplier minimums |
| "Higher safety stock is always better" | More SS = more carrying cost; trade-off against service level |
| "Cycle counting requires plant shutdown" | No — that's annual physical. Cycle counting is continuous |
| "ABC analysis applies only to retailers" | False — it works for any inventory: SKUs, components, MRO supplies |
| "Inventory turnover is the only inventory KPI that matters" | Turnover + IRA + service level + carrying cost together tell the story |
| "JIT eliminates safety stock" | JIT *reduces* safety stock through reliability — doesn't eliminate it entirely |

---

## 🎯 Exam Traps Specific to Module 6

1. **EOQ assumptions** — constant demand, constant LT, no discounts. If question says "supplier offers quantity discount," EOQ alone isn't the answer.
2. **ROP = d × LT + SS.** Many candidates forget to add SS.
3. **σ_LT vs σ_daily.** Safety stock uses σ over the *lead time*, computed as σ_daily × √LT under independence.
4. **Cycle counting tolerance** — 0% (must be exact) for A items; widens for B and C.
5. **Turnover vs days of supply** — they are reciprocals (365 / turnover = days of supply).
6. **VMI vs consignment** — VMI = supplier manages your inventory (you usually own it). Consignment = supplier owns inventory at your site until consumption.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **EOQ** | √(2DS/H), economic order quantity |
| **EPQ** | EOQ × √(p/(p-d)), economic production quantity |
| **ROP** | d × LT + SS, reorder point |
| **Safety Stock** | Buffer against demand/supply variability |
| **Service level** | Probability of no stockout during LT |
| **σ_LT** | σ_daily × √LT under independence |
| **z** | Service-level factor from normal table |
| **ABC** | Pareto classification by $ volume |
| **XYZ** | Classification by demand variability |
| **Cycle counting** | Continuous partial counting, by class |
| **IRA** | Inventory Record Accuracy % |
| **Inventory turnover** | COGS / Avg inventory |
| **Days of supply** | 365 / turnover |
| **Anticipation inventory** | Built ahead of known spike |
| **Decoupling inventory** | WIP separating two stages |
| **VMI** | Vendor-managed inventory |
| **Consignment** | Supplier owns inventory until use |
| **FIFO / LIFO / Weighted Avg / Standard** | Inventory valuation methods |

---

## 📊 Case Study — Allbirds Inventory Write-Down (2022–2023)

**Situation.** Allbirds is a San Francisco direct-to-consumer (DTC) footwear brand founded 2014 around the merino-wool "Wool Runner" sneaker. IPO'd November 2021 at a $4.1B valuation on the strength of DTC growth (~$219M FY 2020 revenue, up from $0 five years earlier) and a sustainability-positioning narrative (carbon-neutral, materials-innovation). The company's inventory model was forecast-driven MTS with quarterly buys from contract footwear factories in Vietnam and South Korea on lead times of 90–180 days. As DTC growth slowed and competitive pressure from Hoka, On Running, and the New Balance "990v6" revival intensified through 2022, Allbirds maintained its forecast-buy pattern and accumulated inventory at a rate that outpaced sell-through.

**Decision.** Through 2022 leadership held onto the original SKU breadth (Wool Runners, Tree Runners, the Dasher running shoe, Mizzles for wet weather, Wool Loungers, plus seasonal colorways) and continued to launch new SKUs (the *Wool Runner Mizzle*, the *Trail Runner SWT*) without aggressively retiring underperformers. Safety-stock sizing assumed the 2020–2021 demand variability, not the post-2022 demand-pattern shift. The ABC discipline (focusing planning effort on top-revenue SKUs) was applied weakly — long-tail SKUs accumulated inventory disproportionately.

**Outcome.** Q3 2022 Allbirds wrote down **$13M** of inventory; Q4 2022 added another. By Q2 2023 the company had taken total inventory write-downs of **$30M+** and announced a Strategic Transformation Plan (Aug 2023): SKU rationalization (cut from ~50+ to ~30 active), reduction of the DTC fleet footprint, and a return to a tighter MTS planning discipline with shorter buy cycles. Stock price fell from a peak of $32 (Nov 2021) to below $1.40 (mid-2023) — a 95% decline. By late 2024 inventory levels were back in a healthier band but revenue had declined sharply (FY 2023 revenue $254M vs FY 2022's $298M). Allbirds remains publicly traded on NASDAQ at very low valuation as of early 2026.

**Lesson for the exam / for practitioners.** Allbirds is a near-textbook case of **safety-stock sizing assumptions becoming wrong without anyone re-checking them**. The CPIM formula `SS = z × σ_LT` is honest: σ_LT must be re-estimated when the demand-variability pattern changes. When demand was growing 60% YoY in 2020–2021, the variability was real but trending up; when DTC growth collapsed in 2022, the variability shape changed entirely (new demand pattern, longer right-tail of slow-moving SKUs, higher correlation across SKUs in slowdown). The carrying cost of the long-tail SKUs (storage, capital, and ultimately obsolescence-write-off) was vastly understated by the original ABC classification.

The CPIM exam-takeaway: **inventory KPIs are leading indicators of strategy mismatch.** Inventory turnover dropping, days-of-supply growing, ABC-A items in stockout while C items pile up — these are signals to *re-baseline* the planning assumptions, not patch. Most write-down stories share this shape: a planning system that's quantitatively correct given old assumptions, applied to a new demand reality, generating an answer no one questions because the system "says so."

**Discussion (Socratic).**
- Q1: An Allbirds-style brand sees DTC growth slowing in Q2. Build the strongest argument for a *defensive* inventory strategy (cut buys aggressively, accept stockouts on some SKUs) AND for a *patient* inventory strategy (maintain buys, ride out the soft quarter). At what stage of evidence does the calculation flip?
- Q2: Most DTC brands run ABC analysis annually. Given the speed of fashion-shift and consumer preference change in 2024–2026, is annual the right cadence — or should it be quarterly / monthly? Construct the case at each cadence and identify the resource constraint that matters.
- Q3: Allbirds' safety-stock formula was correct; the σ_LT input was stale. Many inventory failures share this structure. Design a single "trigger" rule that would automatically re-baseline σ for a SKU. What's the trade-off between sensitive (re-baselines too often, noisy) and stable (re-baselines too rarely, misses the regime change)?

---

## ✅ Module 6 Summary

You now know:

- 🎯 The 6 functions of inventory (cycle, safety, anticipation, transit, hedge, decoupling)
- 💰 The 4 inventory costs (ordering, carrying, stockout, item)
- 📐 EOQ formula + how to compute it
- 🏭 EPQ for production environments
- 🔁 ROP = d × LT + SS, and how to compute SS for a target service level
- 📊 ABC + XYZ classification and what each implies for planning
- 🔢 Cycle counting and IRA
- 📈 Inventory turnover and days of supply
- 🗄️ VMI, consignment, FIFO/LIFO valuation

**Next steps:**
1. 🎥 Watch the videos in `Videos.md` — especially EOQ and ROP walkthroughs
2. ✏️ Take `Quiz.md` — has 9 calculation questions
3. 📋 Drill `Cheat-Sheet.md` formulas
4. ➡️ Move to [Module 7: Production Activity Control](../Module-07-Production-Activity-Control/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 7 (PAC) uses inventory positions to drive dispatching; Module 8 (Lean) revisits inventory through the 7-wastes lens, where excess inventory is one of the "worst" wastes.
> - Cross-course: `10-ASCM-CSCP` Module 8 extends inventory to multi-echelon optimization and network design; `12-ASCM-CLTD` Module 7 applies inventory thinking to distribution centers.
> - Practice: Practice Exam 2 has 12–14 calculation-heavy inventory questions; Final Mock Exam has 18+ questions across EOQ, ROP, safety stock, ABC, and turnover.

---

## 💬 Discussion — Socratic prompts

1. **EOQ's relevance in 2026.** EOQ assumes constant demand, constant lead time, no quantity discounts, no minimums. In a world of bullwhip-aware suppliers, frequent promotions, geopolitical disruption (Red Sea routing), and supplier MOQs, is EOQ still useful — or a quaint relic? Build the strongest argument for each, and identify the precise condition under which EOQ remains genuinely correct.
2. **The Allbirds-style write-down avoidance.** Design a 3-metric inventory dashboard that would have flagged the Allbirds problem 6+ months before the write-down. Defend each metric against the criticism that it lags. (Hint: think about *forward-looking* indicators like channel sell-through ratios, not just turnover.)
3. **Safety stock vs lead-time reduction.** A planner can spend $100K on either (a) larger safety stocks across A items, or (b) supplier-development investment to cut lead times by 20%. Argue both sides — and identify the *one* condition under which each is the clear winner. Cite Vollmann/Berry on the LT vs SS trade-off.
4. **JIT in a tariff/disruption era.** Toyota's JIT is famously zero-safety-stock. Post-2020 supply disruptions (COVID, semis, Red Sea) have made Toyota itself add buffers in select areas. Reconcile this with the lean canon — is Toyota *abandoning* JIT, or *adapting* it?
5. **ABC × XYZ in 2026.** Two-axis ABC × XYZ classification creates a 9-cell matrix. In practice, most companies still treat their A items uniformly. What's the value of the 9-cell view vs the 3-cell, and what's the cost (planner cognitive load)? Pick a company size at which 9-cell stops earning its complexity.

---

## 📚 Further Reading (Optional)

- 📖 *Inventory Management Explained: A Focus on Forecasting, Lot Sizing, Safety Stock, and Ordering Systems* — Piasecki, David J. (Ops Publishing, 2009) — deep on cycle counting, IRA, ABC.
- 📖 *Production and Inventory Control: Principles and Techniques* — Plossl, George W. (Prentice-Hall, 1985) — the classic.
- 📖 *Manufacturing Planning and Control for Supply Chain Management* — Vollmann, Berry, Whybark & Jacobs, 6th ed. (McGraw-Hill, 2011), Chapter 9 — canonical inventory chapter.
- 📖 *Inventory Management and Production Planning and Scheduling, 3rd ed.* — Silver, Pyke & Peterson (Wiley, 1998) — the rigorous graduate text.
- 📖 ASCM Dictionary, 16th edition (2022) — entries for EOQ, EPQ, ROP, safety stock, cycle counting, ABC analysis, IRA, VMI, consignment.
- 📰 *How Many Parts to Make at Once* — Harris, Ford W., *Factory: The Magazine of Management* 10(2), 1913 — the original EOQ paper. Rediscovered and re-published in Erlenkotter, *Operations Research* 38(6), 1990.
- 📰 Allbirds Q3 2022 / Q3 2023 earnings calls and 10-K filings (SEC EDGAR) — the primary-source data on the write-down.
