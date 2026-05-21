# Module 6: Inventory Management 📦

> **Why this module matters:** Inventory is where CPIM gets *math-heavy*. EOQ, EPQ, safety stock, ROP, ABC, cycle counting — about 20% of exam questions live here, and almost half of them involve a calculation. Bank these points by being fluent with the formulas.

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

## 📚 Further Reading (Optional)

- 📖 *Inventory Management Explained* — David Piasecki (deep on cycle counting, IRA, ABC)
- 📖 *Production and Inventory Control: Principles and Techniques* — Plossl (classic)
- 📖 *Manufacturing Planning and Control* — Jacobs et al., Chapter 9
- 📖 ASCM Dictionary entries: EOQ, EPQ, ROP, safety stock, cycle counting, ABC analysis, IRA, VMI
- 📖 *Lean Inventory* — Stuart Emmett (when EOQ is the wrong question)
