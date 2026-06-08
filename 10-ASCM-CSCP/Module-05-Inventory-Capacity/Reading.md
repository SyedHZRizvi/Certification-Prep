# Module 5: Inventory & Capacity 📦

> **Why this module matters:** Inventory is where supply chain math lives. Expect 6–10 calculation questions on the exam: EOQ, safety stock, reorder point, days of supply, inventory turns. Get the formulas wrong here and you'll bleed points across the board.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Forecast error metrics (MAD, MAPE, σ)](../Module-03-Demand-Forecasting/Reading.md), Module 3
> - [The MPS, MRP, and lot-sizing rules](../Module-04-Supply-Planning-SOP/Reading.md), Module 4
> - Basic statistics: normal distribution, Z-scores, percentile lookup
> - Calculator comfort with square roots and percentages
> If you've never computed a Z-score before, skim a 10-minute Khan Academy "Z-tables" video first.

---

## 🛒 A Story: The Hardware Store That Loved Its Stockroom Too Much

Priya runs **HomeGood Hardware**, a 6-store chain. Her dad founded the business in 1987 and his rule was: "Never run out, fill the back room." For decades that worked. By 2022 the back rooms held $4.7M of inventory, much of it covered in dust. Cash flow was always tight. Insurance, shrinkage, and obsolescence ate margin.

Priya hired a consultant who ran an **ABC analysis** on 8,200 SKUs. Result: 412 SKUs (5%) generated 75% of revenue. Another 1,200 SKUs hadn't moved in 18 months. They wrote off slow movers, calculated EOQ per SKU, set safety stock based on lead-time variance (not gut feel), and instituted **cycle counting**. Inventory dropped to $2.6M. Service level went UP from 92% to 97%.

The lesson: more inventory ≠ better service. **Smart inventory** = better service AND lower cost. This module teaches the math behind smart inventory.

---

## 🧱 The 5 Types of Inventory (memorize)

| Type | Purpose | Example |
|------|---------|---------|
| **Cycle stock** | Normal order-to-order working inventory | Refill between weekly truck deliveries |
| **Safety stock** | Buffer against demand or supply variability | Extra units for unexpected demand spike |
| **Anticipation** | Built ahead of known events | Christmas tree inventory in October |
| **Pipeline / in-transit** | Material moving between locations | Shipment from China to LA port |
| **Decoupling / hedge** | Buffers between processes or against risk | Pre-strike steel inventory |

Also sometimes called out:

- **Maintenance, Repair, Operating (MRO)**, supplies not in the BOM but needed for ops
- **Promotional inventory**, built specifically for a marketing campaign

---

## 💸 The 4 Inventory Costs (the exam will rank these)

| Cost | What It Covers | Typical % of Inventory Value/yr |
|------|----------------|-------------------------------|
| **Carrying / holding** | Capital, storage, insurance, taxes, obsolescence, shrinkage | 20–30% per year |
| **Ordering / setup** | Admin, transportation, receiving, setup time | Per order |
| **Stockout / shortage** | Lost sales, expediting, customer goodwill | Highly variable |
| **Acquisition / unit cost** | Price per unit | Usually largest in $ |

🧠 **Memory hook:** The classic carrying cost percentage hovers around **25%** per year. So an item with $1,000 carried value costs roughly $250/year just to hold.

---

## 📐 EOQ, Economic Order Quantity (the headline formula)

EOQ minimizes the total of ordering + carrying cost for a given annual demand.

```
   EOQ = √( 2 · D · S / H )

   D = annual demand
   S = setup / ordering cost per order
   H = annual holding cost per unit
```

### Assumptions (the exam loves these as traps)
- Demand is **constant and known**
- Lead time is **constant**
- No quantity discounts
- Instant replenishment (lot received all at once)
- No stockouts allowed

### Worked example
D = 12,000 units/yr, S = $40/order, H = $6/unit/yr
EOQ = √(2 · 12000 · 40 / 6) = √(160,000) = **400 units per order**

Number of orders/year = 12,000 / 400 = **30 orders**
Cycle stock average = EOQ / 2 = **200 units**

### Sensitivity
EOQ is **robust**: even ±30% miscalculation of D or H only changes EOQ by ~15% because of the square root. Good practical news.

---

## 🛡️ Safety Stock & Reorder Point

### Safety stock (SS)
```
   SS = Z · σ_LT
```
- Z = service-level factor (1.65 for 95%, 1.96 for 97.5%, 2.33 for 99%)
- σ_LT = standard deviation of demand during lead time

### Combined formula when both demand and lead time vary
```
   σ_LT = √( LT · σ_d² + d² · σ_LT² )
```
- LT = average lead time
- σ_d = std dev of period demand
- d = average period demand
- σ_LT = std dev of lead time

### Reorder Point (ROP)
```
   ROP = d · LT + SS
```
- d · LT = expected demand during lead time
- SS = safety buffer

### Worked example
Avg demand = 50 units/day, LT = 10 days, σ_d = 5/day (LT constant), 95% target.
- Expected LT demand = 500 units
- σ_LT = √(10 · 25) = √250 ≈ 15.8
- SS = 1.65 × 15.8 ≈ **26 units**
- ROP = 500 + 26 = **526 units**

🎯 **Exam tip:** Higher service level → exponentially more safety stock. Going from 95% (Z=1.65) to 99.99% (Z≈3.72) more than doubles SS.

---

## 🎯 ABC / Pareto Analysis

Apply the 80-20 principle to inventory.

| Class | % of SKUs | % of $ Value | Treatment |
|-------|-----------|--------------|-----------|
| **A** | 10–20% | 70–80% | Tight control, frequent counts, low SS multiplier |
| **B** | 30% | 15–20% | Moderate control |
| **C** | 50–60% | 5–10% | Looser control, infrequent counts, batched orders |

Variations:

- **ABC-XYZ**, adds demand variability classification (X = stable, Y = variable, Z = lumpy)
- **VED** (Vital / Essential / Desirable), criticality classification
- **HML** (High / Medium / Low), price-based

---

## 🔢 Inventory Performance Metrics

| Metric | Formula | What It Tells You |
|--------|---------|-------------------|
| **Inventory turns** | `COGS / Avg inventory value` | How often inventory cycles per year |
| **Days of supply / DIO** | `365 / turns` | Days of cover at current sales |
| **Fill rate** | `Orders shipped complete / total orders` | Service performance |
| **Stockout rate** | `Stockout occurrences / total demand events` | Inverse of fill rate |
| **Inventory accuracy** | `Correct count locations / total locations` | Cycle counting health |
| **Days Sales Outstanding (DSO)** | `AR / daily revenue` | Collection speed |
| **Days Payable Outstanding (DPO)** | `AP / daily COGS` | Payment timing |
| **Cash-to-Cash** | `DIO + DSO − DPO` | Working capital lock-up days |

### Worked example
- COGS = $20M, Avg inventory = $4M
- Turns = 5, DIO = 73 days
- DSO = 45, DPO = 30
- Cash-to-cash = 73 + 45 − 30 = **88 days**

Amazon's cash-to-cash is famously **negative** (collect from customers before paying suppliers).

---

## 📊 Cycle Counting vs Physical Inventory

| Method | Description | Pros | Cons |
|--------|-------------|------|------|
| **Annual physical** | Shut down once/year, count everything | One snapshot | Disruptive, late discovery of errors |
| **Cycle counting** | Continuous, sample-based daily counts | Continuous accuracy, no shutdown | Requires discipline |
| **ABC-based cycle** | Count A items quarterly, B annually, C bi-annually | Focuses effort | Setup needed |

Modern best practice: **cycle counting**, often automated with RFID, IoT, or scan-as-you-pick.

---

## 🏃 JIT, Lean, and Kanban Inventory

The Toyota Production System was codified by **Taiichi Ohno** (Toyota plant manager → executive VP) over 1948-1975 and published in *Toyota Production System: Beyond Large-Scale Production* (Diamond Inc., 1978; English translation Productivity Press, 1988). The Western academic synthesis came from **Jeffrey K. Liker, *The Toyota Way: 14 Management Principles*** (McGraw-Hill, 2004; 2e 2020, University of Michigan).

| Concept | Idea | Origin |
|---------|------|--------|
| **JIT (Just-in-Time)** | Inventory arrives just before needed | Toyota (Ohno, 1950s-70s) |
| **Kanban** | Visual signal triggers replenishment | Toyota (Ohno, 1953, inspired by Piggly Wiggly grocery shelves) |
| **Heijunka** | Production leveling for smooth flow | Toyota |
| **Pull system** | Downstream demand triggers upstream supply | Lean foundation |
| **Single-piece flow** | Smallest possible lot size, ideally one | Lean ideal |

JIT requires **reliable suppliers**, **short lead times**, **high quality**, and **flexible capacity**. When those preconditions break (e.g., COVID 2020), JIT supply chains shatter, hence the modern shift to "JIT + safety stock" or "JIC (just-in-case)" hybrids.

🎯 **Exam tip:** A pure JIT firm carries minimal inventory but maximum supplier risk. Multi-source and proximity reduce that risk.

---

## 🏭 Capacity Management

Capacity = the maximum work a resource can do per unit time.

| Concept | Definition |
|---------|------------|
| **Design capacity** | Max output under ideal conditions |
| **Effective capacity** | Realistic max given product mix, scheduling, maintenance |
| **Actual output** | What's actually produced |
| **Utilization** | `Actual output / Design capacity` |
| **Efficiency** | `Actual output / Effective capacity` |

### Capacity strategies

| Strategy | Description |
|----------|-------------|
| **Lead (capacity ahead of demand)** | Build before demand arrives; risk of overcapacity |
| **Lag (capacity follows demand)** | Wait for demand to confirm; risk of stockouts |
| **Match / track** | Try to mirror demand; tactical adjustments |

---

## 🛍️ The Newsvendor (Single-Period) Model

For perishable / one-shot goods (newspapers, fashion, holiday products), find optimal order quantity by service-level critical ratio:

```
   Optimal service level = Cu / (Cu + Co)

   Cu = unit cost of understocking (lost margin)
   Co = unit cost of overstocking (markdown / salvage loss)
```

Then look up the Z-value for that probability and apply standard SS math.

### Example
A holiday sweater sells for $80 with $30 cost. Leftover salvage = $20.
- Cu = $80 − $30 = $50
- Co = $30 − $20 = $10
- Critical ratio = 50 / (50+10) = **0.833**
- Z ≈ 0.97 → order at 97 percentile of demand

---

## 📊 Case Study, JD.com's Automated Inventory Network (2017-2024)

**Situation.** China's #2 e-commerce platform after Alibaba, JD.com (Beijing) built its competitive advantage on **owned inventory + owned logistics** the opposite of Alibaba's marketplace + 3PL model. By 2017 JD held 9.6 million SKUs across 500+ warehouses, growing ~30% YoY. The traditional approach manual EOQ at SKU level, ABC tiering on a spreadsheet, was breaking down. SKU velocity ranged from "millions/day" (consumer staples) to "1 per year" (specialty industrial). A single buyer might re-order 200 SKUs daily; getting any one EOQ wrong meant a stockout in Beijing OR pallets of dead stock in a Chengdu DC.

**Decision.** Founder Richard Liu and CTO Zhang Chen invested $2.4B (2017-2022) in **end-to-end automation** with three pillars: (1) **AI-driven SKU-level demand sensing** using JD's POS data + weather + Weibo/WeChat social signals + same-day search query patterns, producing demand forecasts at hour granularity in 31 provinces; (2) **automated warehouses** by 2023, JD operated 50+ "Asia No.1" mega-DCs with Geek+ robotics, achieving 24x productivity vs manual picking; (3) **AI-driven inventory positioning** instead of EOQ at SKU level, JD's algorithm placed inventory dynamically across the network, treating each DC as a buffer in a hub-and-spoke math model. Critical: they did NOT abandon classical inventory math (EOQ, SS, ROP), they automated and personalized it. Each SKU got its own α for ES, its own σ_LT calibration, its own service-level target based on contribution margin.

**Outcome.** By 2024: 92% of orders fulfilled same-day or next-day in tier-1/2 Chinese cities; cash-to-cash cycle ~30 days (vs Walmart ~12 days, Alibaba marketplace ~7 days but Alibaba carries no inventory). JD's 11.11 (Singles Day) 2023 generated $52B GMV with stockout rate <1% across millions of SKUs, physically and mathematically impossible without automated SS/ROP optimization. JD's Logistics IPO (2021) valued the unit at $40B. McKinsey featured JD's network in their 2023 *Supply Chain Frontier* report as the case study for "AI-augmented classical inventory science."

**Lesson for the exam / for practitioners.** The classical formulas in this module EOQ, SS, ROP, ABC are not obsolete in the AI era. They are the *engine*; AI just calibrates the parameters dynamically. JD's success rests on knowing the math cold first. On the exam: don't pick "AI replaces inventory math" as a correct answer, modern systems automate the formulas, they don't discard them. Also note: JD's high carrying cost (owned warehouses + owned trucks) is offset by *fast* turns (~12-15 per year for general merchandise). The cash-to-cash + service level + turn rate triangle is the executive-level CSCP question pattern.

**Discussion (Socratic).**
- Q1: Walmart's classic supply chain (1980s-2000s) used EOQ + supplier-managed inventory at SKU level. JD's 2024 model uses dynamic AI positioning. What ASCM CSCP framework would JD use to explain the trade-off when the AI mis-calibrates a SKU, and how does the human override fit?
- Q2: A US-only e-commerce competitor wants to copy JD's model. China has cheap warehouse labor + dense urban demand patterns + 7×24 logistics tolerance. What three structural factors would make JD's playbook fail in the US, and what would you change?
- Q3: A SKU in JD's network has demand σ = 50/day, lead-time σ = 5 days. The algorithm reports SS calculated for 99.5% service. The CFO asks "is 99.5% on a $30K-COGS slow-mover worth it?" Defend BOTH 99.5% and 92% service answers from a critical-ratio + financial perspective.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "More inventory = better service" | Up to a point; beyond it returns diminish and cost dominates |
| "EOQ always applies" | Requires constant demand + lead time + no discounts |
| "Service level 100% is achievable" | Asymptotically costs infinity to reach 100% |
| "JIT means no inventory" | JIT means *just enough*, frequent small batches |
| "ABC classification is fixed" | Should be reviewed at least annually |
| "Higher utilization is better" | Past ~85% wait-times explode (queueing) |
| "Safety stock fixes bullwhip" | Better information sharing fixes bullwhip; SS only masks symptoms |

---

## 🚨 Exam Traps

1. **EOQ assumptions**, discounts, variable demand, or variable lead time invalidate basic EOQ.
2. **Service level vs fill rate**, service level is probability of no stockout in a cycle; fill rate is fraction of demand filled from stock.
3. **Safety stock direction**, higher Z, higher SS. Square-root law applies if pooling locations.
4. **Inventory turns interpretation**, Higher turns usually good but can mask stockouts.
5. **Newsvendor for repeating demand**, Wrong; newsvendor is single-period only.
6. **Utilization at 100%**, In stochastic systems wait time spikes long before 100%.
7. **JIT works for everything**, No; high-variance, long-lead-time chains can collapse on JIT.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **EOQ** | √(2DS/H), the order quantity minimizing total cost |
| **Safety stock** | Buffer for demand / lead-time variability |
| **Reorder point** | Inventory level that triggers a new order |
| **Carrying cost** | Annual cost to hold one unit (usually 20–30% of unit value) |
| **ABC analysis** | Pareto classification of SKUs by $ value |
| **Inventory turns** | COGS ÷ avg inventory value |
| **Cash-to-cash** | DIO + DSO − DPO |
| **Fill rate** | % of demand filled from stock |
| **Cycle counting** | Continuous, sampled inventory accuracy method |
| **JIT** | Just-in-Time inventory philosophy |
| **Kanban** | Visual pull signal for replenishment |
| **Newsvendor model** | Single-period optimization for perishable goods |
| **Design vs effective capacity** | Theoretical max vs realistic max output |
| **Utilization vs efficiency** | Actual/design vs actual/effective |
| **MRO** | Maintenance, Repair, Operating supplies (not in BOM) |

---

## ✅ Module 5 Summary

You now know:

- 📦 The 5 inventory types and 4 cost categories
- 📐 EOQ formula, assumptions, and sensitivity
- 🛡️ Safety stock & reorder point math (with variable demand AND lead time)
- 🎯 ABC analysis and its variants (XYZ, VED, HML)
- 🔢 Performance metrics: turns, DIO, fill rate, cash-to-cash
- 📊 Cycle counting vs annual physical inventory
- 🏃 JIT / Kanban / Lean inventory principles
- 🏭 Capacity terminology and lead/lag/match strategies
- 🛍️ Newsvendor single-period model

**Next steps:**
1. 🎥 [Videos.md](./Videos.md), practice EOQ and SS calculations
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 6: Sourcing & Supplier Management](../Module-06-Sourcing-Supplier-Management/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 6 picks the suppliers whose lead-time σ feeds your SS math; Module 7 designs the warehouse layouts where cycle counting + RFID happens; Module 10 reconnects EOQ and turns to Lean/TOC + balanced scorecard KPIs.
> - Cross-course: `11-ASCM-CPIM` Modules 4-5 explore inventory mathematics at vastly deeper detail (multi-echelon, time-phased SS, lot-sizing optimization).
> - Practice: Practice Exam 1 has ~12 inventory questions including 4-5 calculation; Final Mock has ~10 with 3-4 calculation.

---

## 💬 Discussion, Socratic prompts

1. **The 100% service-level trap.** A new VP demands "99.99% service on everything." Walk through the math (Z = 3.72 for 99.99% vs Z = 1.65 for 95%) and the cost implication. Defend the principled push-back without losing the VP's confidence.
2. **EOQ when discount tiers exist.** The classical EOQ ignores quantity discounts. A buyer's actual decision is between EOQ at price tier 1 vs slightly-above-EOQ at price tier 2 with a discount. Construct the decision tree, and explain why naïve EOQ can mislead.
3. **JIT after COVID.** Many firms abandoned pure JIT after COVID-19 supplier failures. Is "JIT + safety stock + dual source" still JIT philosophically, or has Lean's "zero inventory" ideal effectively died? Cite Toyota's actual 2021-2023 behavior.
4. **Newsvendor in the AI era.** A SaaS firm's "newsvendor" decision is daily compute capacity (over-provision = cloud bill; under-provision = customer SLA breach). How does the classical Cu/(Cu+Co) framework adapt when the cost asymmetry shifts every quarter with cloud pricing?
5. **Cycle counting vs annual: defending the cost.** Cycle counting requires daily warehouse labor allocated to counts. Annual physical inventory is one weekend of shutdown. Build the cost-benefit argument for cycle counting that survives a CFO who insists "just do annual, it's cheaper labor."

---

## 📚 Further Reading (Optional)

- 📖 Steven Nahmias, *Production and Operations Analysis*, McGraw-Hill, 7e 2015 (chapters 4-6 are the inventory canon)
- 📖 Edward A. Silver, David F. Pyke, Douglas J. Thomas, *Inventory and Production Management in Supply Chains*, CRC Press, 4e 2017 (the academic textbook)
- 📖 James P. Womack & Daniel T. Jones, *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Free Press, 2003 (the synthesis of Toyota Production System)
- 📖 Jeffrey K. Liker, *The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer*, McGraw-Hill, 2e 2020
- 📖 Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, English ed. 1988
- 📖 ASCM CSCP Learning System Module 5
- 📰 McKinsey & Co., *"Supply Chain Frontier"* (annual report, 2023 issue covered JD.com automation in depth)
