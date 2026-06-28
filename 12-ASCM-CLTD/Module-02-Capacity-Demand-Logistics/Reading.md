# Module 2: Capacity & Demand for Logistics 📈

> **Why this module matters:** Networks are built once. Capacity is set every quarter. Demand changes every week. If your DCs and trucks are sized for peak, you're bleeding money for 10 months of the year. If they're sized for average, Black Friday breaks you. This module is about choosing where to live on that spectrum.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1's strategic decisions](../Module-01-Logistics-Strategy-Network/Reading.md), capacity decisions cascade from network design
> - Basic statistics: standard deviation, simple regression, moving averages
> - The idea that variability (random) and seasonality (predictable) are different beasts
>
> Cross-course: [CSCP Module 3 (Demand Forecasting)](../../10-ASCM-CSCP/Module-03-Demand-Forecasting/Reading.md) covers the forecasting math at the broader supply-chain level. [CPIM Module 2 (Demand Planning & Forecasting)](../../11-ASCM-CPIM/Module-02-Demand-Planning-Forecasting/Reading.md) goes deeper on Holt-Winters and time-series mechanics.

---

## 🍕 A Story: The Toy Store That Cried Christmas

Meet Jamie, the new logistics director at a mid-size toy retailer. In her first March, she walks the DC floor: half-empty racks, idle forklifts, three workers eating lunch on stacked pallets. She calls a meeting: "We can downsize. We're paying for capacity we don't use."

Six months later, it's October. The receiving dock backs up because trailers can't unload fast enough. Pickers run double shifts. Trucks sit waiting for dock doors. Jamie's CFO (Chief Financial Officer) asks why outbound shipments are late.

Jamie learned the **logistics capacity paradox** the hard way:

- **Off-peak:** You look over-resourced. You're not, you're providing flex.
- **Peak:** Your "right-sized" capacity becomes the bottleneck.

CLTD-level logistics planners think in **annual demand curves**, not monthly averages. They use **demand patterns** to choose **capacity strategies**. And they know exactly which buffers (people, equipment, space) cost the most to flex up and down.

---

## 🎯 What Capacity Means in Logistics

Capacity is not just "how much can you store." In logistics, it's a stack:

| Capacity layer | Measured in | Bottleneck when… |
|----------------|-------------|------------------|
| **Receiving** | Trailers/dock-doors per hour, pallets/hour | Inbound surges, season start |
| **Putaway** | Pallets/hour, forklifts available | Slow during high inbound |
| **Storage** | Pallet positions, cubic feet | Bloated inventory periods |
| **Picking** | Lines/hour, orders/hour | E-com peak, promotion launch |
| **Packing** | Cartons/hour, lines/hour | Mid-day pulse, complex orders |
| **Shipping** | Dock doors, trailer slots, parcel sortation | End of shift, late wave |
| **Transport (fleet)** | Tractors, trailers, drivers | Driver shortage, peak season |

🎯 **Exam tip:** A scenario question asks about a "capacity issue." Read carefully, is the bottleneck *receiving, storage, picking, shipping, or transport*? Each has different remedies.

---

## 📐 Capacity Terminology (Exam-Critical)

You will see these terms. Know each cold.

| Term | Definition |
|------|-----------|
| **Theoretical capacity** | Max output if everything ran perfectly, 24/7 |
| **Effective capacity** | Theoretical minus planned downtime, setups, maintenance |
| **Demonstrated (actual) capacity** | What the operation has actually produced historically |
| **Rated capacity** | Effective × utilization × efficiency |
| **Capacity cushion** | (1 − utilization). Slack that absorbs variability |
| **Capacity requirements plan (CRP)** | Translates the plan into needed labor/equipment by period |

**Formula (memorize):**
```
Rated Capacity = Theoretical × Utilization × Efficiency
```

- **Utilization** = actually-used / available time
- **Efficiency** = actual output / standard output during used time

Example: A DC has 10 forklifts (theoretical), runs them 80% of available hours (utilization), and at 90% of standard pallets/hr (efficiency). Rated capacity = 10 × 0.80 × 0.90 = **7.2 effective forklifts** of work.

---

## 🔄 Demand Patterns That Drive Logistics

Demand isn't one number, it's a *shape*. Three patterns govern logistics planning.

### 1. Trend
Long-term increase or decrease. (E-commerce parcel volume has trended +10–15%/yr for a decade.)

### 2. Seasonality
Repeating intra-year pattern. **Examples that show up on the exam:**
- Toys: 35–45% of annual volume in Oct–Dec
- Lawn equipment: spring peak
- Tax software: Q1 peak
- Cold-chain pharma: flu-season spike

### 3. Cyclicality
Multi-year pattern tied to business cycles (e.g., construction equipment 5–7 year cycles).

Plus **randomness/noise** (residual variation around the pattern) and **promotional spikes**.

🎯 **Exam pattern:** "A toy retailer experiences 40% of revenue in Q4. What capacity strategy fits?" → **Chase** (described below).

---

## 🎚️ Capacity Strategies (THE Three You Must Know)

This is *the* high-yield content of this module. CLTD aligns capacity to demand through one of three strategies, plus hybrids.

### A) Lead (Aggressive / Build-Ahead)

| | Lead |
|---|---|
| Capacity sits | *Ahead of* demand |
| Cushion | Large |
| Risk | Excess fixed cost |
| Best for | Growing markets, premium service, high-margin products |

### B) Lag (Wait-and-See)

| | Lag |
|---|---|
| Capacity sits | *Behind* demand |
| Cushion | Small/negative |
| Risk | Stockouts, lost sales, missed service |
| Best for | Commodity goods, declining markets, very capital-intensive assets |

### C) Match (Track / Chase)

| | Match |
|---|---|
| Capacity sits | *Aligned to* demand period-by-period |
| Cushion | Variable |
| Risk | Hiring/firing churn, learning-curve losses |
| Best for | Seasonal businesses, retail (esp. toys, apparel) |

### Hybrids
- **Chase + Level mix:** Maintain a base load with permanent staff, flex peaks with temps/3PL (Third-Party Logistics) overflow.
- **Cushion-based:** Hold a planned slack (e.g., 15% extra dock doors) to absorb noise.

🧠 **Memory hook:** *Lead leads. Lag lags. Match matches.* (And every textbook calls "Chase" and "Match" the same thing.)

### Capacity Strategy Comparison

| Dimension | Lead | Lag | Match |
|-----------|------|-----|-------|
| Capital intensity | High up-front | Low up-front | Phased |
| Service risk | Low | High | Medium |
| Inventory implication | High inventory possible | Stockouts | Inventory varies |
| Workforce | Stable | Stable but stretched | Volatile (hiring/seasonal) |

---

## 🐢🐇 Slow Movers vs Fast Movers

Capacity decisions vary by SKU (Stock Keeping Unit) velocity.

| Velocity tier | Behavior | Capacity treatment |
|---------------|----------|---------------------|
| **A (fast)** | ~80% of throughput from ~20% of SKUs | Forward-pick, ergonomic slots, automated picking |
| **B (medium)** | Moderate, predictable | Standard storage, manual or hybrid picking |
| **C (slow)** | Tail SKUs, sporadic orders | Reserve storage, batch picking, drop ship |

Two storage zones often emerge:

- **Forward pick area**, fast movers, ergonomic, dense
- **Reserve area**, bulk pallets, replenishes forward area

🎯 **Exam pattern:** "Where should an A-mover SKU be slotted?" → Forward pick, at golden-zone height (waist-to-shoulder), close to packing.

---

## 📊 Demand Forecasting for Logistics

In Module 4 we cover DRP (Distribution Requirements Planning). Here we cover *the forecast itself*.

### Forecasting methods (CLTD-tested)

| Family | Methods | Use case |
|--------|---------|----------|
| **Qualitative** | Delphi, market research, sales-force composite, executive opinion | New products, no history |
| **Time-series** | Moving average, exponential smoothing, Holt-Winters (trend+seasonal) | Stable demand history |
| **Causal** | Regression, econometric models | Demand driven by external variables |
| **Simulation / ML** | Monte Carlo, neural nets, demand sensing | Complex multi-variable patterns |

### Forecast Error Metrics (must know)

```
MAD  = Σ |Actual − Forecast| / N         (mean absolute deviation)
MAPE = Σ |Actual − Forecast| / |Actual| × 100 / N
Bias = Σ (Actual − Forecast) / N         (positive = under-forecasted)
RMSE = √(Σ (Actual − Forecast)² / N)     (penalizes big misses)
Tracking signal = Σ(Actual − Forecast) / MAD   (alert at ±4 to ±6)
```

🚨 **Trap on the exam:** Bias is about *direction* (chronic under or over). MAD is about *magnitude*. Both matter, fix bias before tuning MAD.

### Forecast Granularity Pyramid

```
   Strategic (annual, by region)
        ↓
   Tactical (monthly, by DC/category)
        ↓
   Operational (weekly, by SKU/DC)
        ↓
   Execution (daily, by SKU/store)
```

🎯 **Exam tip:** Higher granularity = higher error %. Aggregate forecasts are *more accurate* than detailed ones (law of large numbers).

---

## 📦 Capacity Planning Process

The CLTD body of knowledge describes a 6-step capacity-planning cycle. Memorize it.

```
1. Determine throughput requirements (from demand plan)
2. Compute resource requirements (people, space, equipment)
3. Compare to current capacity (gap analysis)
4. Identify alternatives (build, outsource, mode-shift, defer)
5. Select & implement (with budgets, lead times)
6. Monitor & adjust (KPIs (Key Performance Indicators), monthly review, S&OP (Sales and Operations Planning) integration)
```

This is **CRP for logistics**, Capacity Requirements Planning. It must integrate with the broader S&OP / IBP cycle.

---

## 🔄 Postponement as a Capacity Strategy

Postponement (covered in Module 4) is also a *capacity* lever. By delaying differentiation:

- You forecast at the *aggregate* level (more accurate)
- You hold less safety stock (less storage capacity needed)
- You need flex assembly/labeling capacity at the postponement point

**Example:** Benetton dyes white sweaters after seeing actual color demand. Capacity needs: lots of *dyeing* capacity (small, flexible) but less *colored finished-good storage*.

---

## 🏗️ Seasonal Capacity Tactics

For a toy retailer, an apparel brand, or any business with 30%+ seasonality:

| Tactic | Example |
|--------|---------|
| **Temp labor / seasonal hires** | Amazon hires 250k+ in Q4 |
| **Overflow space (lease, 3PL)** | Short-term warehouse leases Oct–Jan |
| **Mode shift** | Ocean → air for late-season replenishment |
| **Sale/clearance** | Demand smoothing to spread post-peak inventory |
| **Pre-build/inventory buildup** | Make-to-stock months ahead (Lead strategy) |
| **Cross-train** | Office staff pick during peak |
| **Pre-position** | Move inventory to regional DCs before peak |

🎯 **Exam pattern:** "An apparel retailer projects a 250% Q4 lift over Q2. What's the best capacity plan?" → Hybrid: pre-build inventory + seasonal labor + 3PL overflow.

---

## 📉 Capacity Constraints & Theory of Constraints (TOC)

> **Citation.** The Theory of Constraints was developed by Eliyahu M. Goldratt and popularized in Goldratt, E. M. & Cox, J., *The Goal: A Process of Ongoing Improvement* (North River Press, 1984; 4th ed. 2014) and Goldratt, E. M., *What Is This Thing Called Theory of Constraints and How Should It Be Implemented?* (North River Press, 1990). The Five Focusing Steps as formalized below are now codified in ASCM's *Dictionary* (16th ed., 2022) and the CLTD/CPIM bodies of knowledge. Companion reading: Hopp, Wallace J. & Spearman, Mark L., *Factory Physics* (3rd ed., Waveland Press, 2011), the rigorous queueing-theory treatment of *why* utilization above ~85% blows up wait times.

If a single resource limits flow, that's the **bottleneck**. Eli Goldratt's Five Focusing Steps:

```
1. Identify the bottleneck
2. Exploit (max use, no idle time)
3. Subordinate (others align to the bottleneck pace)
4. Elevate (invest to expand it)
5. Repeat (bottleneck moves; start over)
```

🎯 **Exam tip:** In a logistics scenario, the bottleneck might be dock doors (receiving), not labor. Don't assume the obvious.

---

## 📜 Case Study, FedEx and UPS During the 2020–2021 Pandemic Capacity Crisis

**Situation.** In March 2020 US e-commerce orders went vertical. According to the US Census Bureau, e-commerce share of retail jumped from 11.8% in Q1 2020 to 16.4% by Q2 2020 a multi-year compounding move concentrated into a single quarter. The two dominant US parcel integrators, FedEx and UPS, faced a wartime-scale capacity shock. Both had built their networks for steady ~5–8%/yr e-com growth, not 36% in 90 days. Peak (Q4) 2020 was projected to be 86 million packages/day vs network capacity of ~75M/day a structural ~11M/day capacity shortfall.

**Decision.** The two responded *differently*:

- **UPS (CEO (Chief Executive Officer) Carol Tomé, just appointed June 2020) cut accounts.** UPS imposed shipper-by-shipper *volume caps* in October 2020, refusing additional volume from large e-commerce shippers (most famously Gap and L.L. Bean for several weeks) when they exceeded their pre-agreed daily quotas. Tomé's framing: "better-not-bigger." UPS hired ~100,000 seasonal workers, leased temporary aircraft, but explicitly chose to *protect service quality and pricing power* over volume.
- **FedEx (CEO Fred Smith) chased volume.** FedEx Ground hired 70,000 seasonal workers, expanded Sunday delivery aggressively, and accepted incremental volume but absorbed degraded on-time performance (FedEx Ground OT% fell to ~88% during peak vs ~95% target). FedEx Ground's 2020 revenue grew ~33% Y/Y but per-package operating margins compressed sharply.

**Outcome.** By 2022 results were diverging clearly. UPS posted record operating margins (13.5% in 2021, peaking at ~14% in 2022) and stock outperformed FedEx by ~40% over the 2020–2022 window. FedEx posted a massive earnings miss in September 2022 ($0.74B operating-income shortfall vs guidance, attributed to e-com volume normalization), CEO Raj Subramaniam (Fred Smith's successor) announced a $1B cost-cut program, and FedEx Express began parking aircraft. By 2024, both were in active retrenchment: FedEx merged FedEx Ground + Express into "Network 2.0" (one combined US delivery network) and announced 1,800 layoffs; UPS announced 12,000 layoffs in early 2024 after the Teamsters contract pushed labor costs up ~30%.

**Lesson for the exam / for practitioners.** The contrast is the textbook Lead vs Lag capacity-strategy decision in real time. UPS chose a *Lag-leaning* strategy refuse some demand, protect margin, accept some lost volume. FedEx chose a *Lead/Match* strategy flex hard to capture share, accept margin compression. The CLTD exam loves to test which strategy fits which industry condition: when demand is structurally over-spike (transient), Lag wins (UPS's bet); when the spike is durable (industry repositioning), Lead/Match wins. Both bet UPS read the spike as transient, FedEx read it as durable. UPS was directionally correct, but the *real* lesson is that capacity strategy is not a one-time choice; it's continuously revised against demand-pattern intelligence (see ASCM Dictionary, 16th ed., entry: "capacity strategy"). The companion lesson from Hopp & Spearman's *Factory Physics*: above ~85% utilization, queueing variability dominates and service collapses exactly what happened to FedEx Ground in Q4 2020.

**Discussion (Socratic).**
- Q1: With perfect hindsight UPS won the strategic bet. But shareholders of either company would have been right to demand the *other* strategy at certain points. When during 2020–2024 would the FedEx strategy have been the right call, and when would UPS's?
- Q2: A capacity-strategy decision implicitly bets on whether demand is *transient* or *durable*. What signals (data points, leading indicators) would have helped a logistics director distinguish the two in real time in mid-2020?
- Q3: UPS used *price + volume caps* to ration demand. FedEx used *service degradation*. From a long-run customer-relationship perspective, which form of rationing is healthier and why?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Higher utilization is always better" | Above ~85% utilization, variability causes queue blow-ups |
| "Effective capacity = theoretical capacity" | Effective subtracts maintenance, setups, breaks |
| "Match strategy is always cheapest" | It minimizes carrying cost but raises hiring/training churn |
| "Aggregate forecasts are less accurate than detail" | Opposite, aggregation reduces relative error |
| "Bias and MAD measure the same thing" | Bias = direction; MAD = magnitude |

---

## 🚨 Exam Traps

🚨 **Trap 1:** Confusing utilization with efficiency. Utilization = how much of *available* time is used. Efficiency = how productive that time is.

🚨 **Trap 2:** Picking "build more DCs" as a capacity solution when the bottleneck is *labor* or *equipment*, not space.

🚨 **Trap 3:** Mistaking demand variability (random noise) for seasonality (predictable pattern). Variability needs safety stock; seasonality needs scheduled pre-building.

🚨 **Trap 4:** Assuming a high tracking signal "is good." Tracking signal > ±4 to ±6 means *the forecast model is broken*, re-tune it.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Theoretical capacity** | Max output, no losses |
| **Effective capacity** | Theoretical minus planned losses |
| **Rated capacity** | Theoretical × Utilization × Efficiency |
| **Capacity cushion** | 1 − utilization; planned slack |
| **CRP** | Capacity Requirements Plan |
| **Lead strategy** | Capacity ahead of demand |
| **Lag strategy** | Capacity behind demand |
| **Match (chase)** | Capacity tracks demand |
| **Forecast bias** | Direction of error |
| **MAD** | Mean absolute deviation |
| **MAPE** | Mean absolute % error |
| **Tracking signal** | Σ error / MAD; alerts model failure |
| **Forward pick** | Ergonomic fast-mover area |
| **Bottleneck** | Slowest resource limiting throughput |

---

## ✅ Module 2 Summary

You now know:

- 🎯 The 7 layers of logistics capacity (receiving → transport)
- 📐 Theoretical, effective, rated capacity, and the formula
- 🎚️ Lead / Lag / Match strategies and when each fits
- 🐢🐇 How A/B/C velocity drives slotting and capacity decisions
- 📊 Forecast methods and error metrics (MAD, MAPE, bias, tracking signal)
- 🏗️ Seasonal capacity tactics (temp labor, overflow, mode shift, pre-build)
- 📉 Bottleneck/TOC thinking applied to logistics

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Order Management & Fulfillment](../Module-03-Order-Management-Fulfillment/Reading.md)

---

## 🤔 Discussion (Socratic prompts)

1. **The 85% utilization wall.** Hopp & Spearman's *Factory Physics* shows that queueing wait time approaches infinity as utilization → 100% with any variability. Yet finance teams routinely push DC managers to "hit 95% utilization to justify the rent." Build the strongest argument for the finance side AND for the operations side. Where should a CLTD-grade director actually settle the dial, and what data would shift it?

2. **Forecast accuracy ROI (Return on Investment).** Improving SKU-level forecast MAPE from 25% to 18% might cost $1.2M in a demand-sensing platform. The forecast feeds DRP, which feeds DC capacity. When is that investment worth it, and how would you build the business case?

3. **Match-strategy moral hazard.** Match (chase) strategies routinely hire ~30% seasonal labor. Amazon's seasonal-hiring announcements (~250K each Q4 2020–2024) drew labor-practice criticism. If your CFO loves match for the cost story but HR pushes back on the labor-volatility story, how do you adjudicate as logistics director?

4. **Demand sensing vs traditional forecasting.** Demand sensing uses near-real-time POS + ML; traditional forecasting uses Holt-Winters or causal models. A consulting firm pitches 8–12% lower inventory if you adopt demand sensing. What conditions actually have to be true for that ROI to land? When is the traditional forecast still better?

5. **The "right" service-level number.** Going from 95% to 99.9% safety stock cost is exponential. But for life-critical SKUs (insulin, ER medical supplies), 99% might be morally inadequate. How do you decide service level for *different* product categories within the same company?

> **Where this leads.**
> - Inside this course: Module 3 turns the demand-and-capacity frame into order-management decisions; Module 4 turns it into multi-echelon DRP/inventory math; Module 5 implements the capacity decisions inside the warehouse.
> - Cross-course: [CSCP Module 3 (Demand Forecasting)](../../10-ASCM-CSCP/Module-03-Demand-Forecasting/Reading.md) and [CPIM Module 2](../../11-ASCM-CPIM/Module-02-Demand-Planning-Forecasting/Reading.md) develop the underlying forecasting math; [CPIM Module 5 (Capacity Planning)](../../11-ASCM-CPIM/Module-05-Capacity-Planning/Reading.md) goes deeper on capacity-planning mechanics inside manufacturing.
> - Practice: Practice Exam 1 has ~9 questions from this module; Final Mock has another 9.

---

## 📚 Further Reading (Optional)

- 📖 *Factory Physics* by Hopp & Spearman, utilization vs variability relationship
- 📖 *The Goal* by Eli Goldratt, TOC fundamentals
- 📖 *Logistics Engineering and Management* by Blanchard
- 🔗 [ASCM CRP overview](https://www.ascm.org/), capacity requirements planning
- 🔗 [CSCMP demand-forecasting whitepapers](https://cscmp.org/)
