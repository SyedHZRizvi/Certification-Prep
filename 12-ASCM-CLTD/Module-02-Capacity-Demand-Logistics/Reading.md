# Module 2: Capacity & Demand for Logistics 📈

> **Why this module matters:** Networks are built once. Capacity is set every quarter. Demand changes every week. If your DCs and trucks are sized for peak, you're bleeding money for 10 months of the year. If they're sized for average, Black Friday breaks you. This module is about choosing where to live on that spectrum.

---

## 🍕 A Story: The Toy Store That Cried Christmas

Meet Jamie, the new logistics director at a mid-size toy retailer. In her first March, she walks the DC floor: half-empty racks, idle forklifts, three workers eating lunch on stacked pallets. She calls a meeting: "We can downsize. We're paying for capacity we don't use."

Six months later, it's October. The receiving dock backs up because trailers can't unload fast enough. Pickers run double shifts. Trucks sit waiting for dock doors. Jamie's CFO asks why outbound shipments are late.

Jamie learned the **logistics capacity paradox** the hard way:
- **Off-peak:** You look over-resourced. You're not — you're providing flex.
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

🎯 **Exam tip:** A scenario question asks about a "capacity issue." Read carefully — is the bottleneck *receiving, storage, picking, shipping, or transport*? Each has different remedies.

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

Demand isn't one number — it's a *shape*. Three patterns govern logistics planning.

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

This is *the* high-yield content of this module. CLTD aligns capacity to demand through one of three strategies — plus hybrids.

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
- **Chase + Level mix:** Maintain a base load with permanent staff, flex peaks with temps/3PL overflow.
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

Capacity decisions vary by SKU velocity.

| Velocity tier | Behavior | Capacity treatment |
|---------------|----------|---------------------|
| **A (fast)** | ~80% of throughput from ~20% of SKUs | Forward-pick, ergonomic slots, automated picking |
| **B (medium)** | Moderate, predictable | Standard storage, manual or hybrid picking |
| **C (slow)** | Tail SKUs, sporadic orders | Reserve storage, batch picking, drop ship |

Two storage zones often emerge:
- **Forward pick area** — fast movers, ergonomic, dense
- **Reserve area** — bulk pallets, replenishes forward area

🎯 **Exam pattern:** "Where should an A-mover SKU be slotted?" → Forward pick, at golden-zone height (waist-to-shoulder), close to packing.

---

## 📊 Demand Forecasting for Logistics

In Module 4 we cover DRP. Here we cover *the forecast itself*.

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

🚨 **Trap on the exam:** Bias is about *direction* (chronic under or over). MAD is about *magnitude*. Both matter — fix bias before tuning MAD.

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
6. Monitor & adjust (KPIs, monthly review, S&OP integration)
```

This is **CRP for logistics** — Capacity Requirements Planning. It must integrate with the broader S&OP / IBP cycle.

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

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Higher utilization is always better" | Above ~85% utilization, variability causes queue blow-ups |
| "Effective capacity = theoretical capacity" | Effective subtracts maintenance, setups, breaks |
| "Match strategy is always cheapest" | It minimizes carrying cost but raises hiring/training churn |
| "Aggregate forecasts are less accurate than detail" | Opposite — aggregation reduces relative error |
| "Bias and MAD measure the same thing" | Bias = direction; MAD = magnitude |

---

## 🚨 Exam Traps

🚨 **Trap 1:** Confusing utilization with efficiency. Utilization = how much of *available* time is used. Efficiency = how productive that time is.

🚨 **Trap 2:** Picking "build more DCs" as a capacity solution when the bottleneck is *labor* or *equipment* — not space.

🚨 **Trap 3:** Mistaking demand variability (random noise) for seasonality (predictable pattern). Variability needs safety stock; seasonality needs scheduled pre-building.

🚨 **Trap 4:** Assuming a high tracking signal "is good." Tracking signal > ±4 to ±6 means *the forecast model is broken* — re-tune it.

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
- 📐 Theoretical, effective, rated capacity — and the formula
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

## 📚 Further Reading (Optional)

- 📖 *Factory Physics* by Hopp & Spearman — utilization vs variability relationship
- 📖 *The Goal* by Eli Goldratt — TOC fundamentals
- 📖 *Logistics Engineering and Management* by Blanchard
- 🔗 [ASCM CRP overview](https://www.ascm.org/) — capacity requirements planning
- 🔗 [CSCMP demand-forecasting whitepapers](https://cscmp.org/)
