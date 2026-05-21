# Module 4: Inventory & Distribution 📊

> **Why this module matters:** Inventory is *the* lever between cost and service. Hold too much, you bleed working capital. Hold too little, you lose sales. In a multi-DC network, the math gets harder fast — and DRP (Distribution Requirements Planning) is the framework ASCM uses to make sense of it.

---

## 🍕 A Story: The Bicycle Shop That Solved a National Network

Ali runs distribution for a national bicycle chain. They have a master DC in Chicago and 30 regional DCs across the US. Every store orders weekly. Every regional DC replenishes from Chicago. Every Chicago order eventually hits the factory in Vietnam, 5 weeks of ocean time away.

For years, each location ordered independently. Stockouts in Boston, gluts in Phoenix. The CFO asked: "Why are we shipping bikes from Phoenix to Boston twice a week?"

Ali implemented **DRP**. The system started at the *demand point* — each store. Aggregated to the regional DC. Then to the master DC. Then to the factory. With **time-phased planning**: when you need stock at the store on July 15, you need it at the regional DC on July 8 (transit lead time), at the master DC on July 1, and ordered from the factory on May 25.

Six months later: stockouts down 70%, inventory down 25%, and Phoenix → Boston ghost shipments eliminated.

**That's DRP.** Pull demand signals up the network with proper lead-time offsets. This module covers DRP and the inventory math that surrounds it.

---

## 🎯 What is Distribution Requirements Planning (DRP)?

DRP is a *time-phased* planning method that explodes demand from end-customers up through the distribution network — DC by DC, week by week — using:
- **Lead times** between echelons
- **Order policies** (lot sizes, min/max)
- **On-hand inventory** at each location
- **Scheduled receipts** in transit

It mirrors MRP, but for *distribution* networks, not BOMs.

### DRP vs MRP

| | MRP | DRP |
|---|-----|-----|
| Drives off | Master Production Schedule | Forecast + customer orders at DCs |
| Explodes via | Bill of Materials (BOM) | Distribution network (DC tiers) |
| Output | Component requirements / POs | DC replenishment / inter-DC transfers |
| Domain | Inside the plant | Outside the plant (network) |
| Period | Daily–weekly | Weekly–monthly |

🚨 **Trap on the exam:** DRP is often confused with MRP. They share *time-phased* mechanics but operate in different domains.

---

## 📋 The DRP Record (You will see this on the exam)

Every DC in DRP has a record like this:

| Week | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Gross Requirements | 50 | 50 | 60 | 70 | 80 | 80 |
| Scheduled Receipts | 200 | | | | | |
| Projected On-Hand | 150 | 100 | 40 | -30 | -110 | -190 |
| Net Requirements | | | | 30 | 80 | 80 |
| Planned Order Receipts | | | | 200 | | 200 |
| Planned Order Releases (lead-time = 2 wks) | | 200 | | 200 | | |

**Read the record:**
- Gross requirements = forecasted demand at this DC.
- Scheduled receipts = already-in-transit replenishments.
- Projected on-hand = running balance after each week.
- When projected on-hand goes negative, we need a *planned order receipt*.
- Planned order release is offset earlier by the lead time.

🎯 **Exam tip:** Practice reading these grids. CLTD asks you to fill in a missing cell.

### Time-phased planning logic

```
Demand at store      (Week 5)
  ↓  Outbound transit lead time (e.g., 2 days)
Need at regional DC  (Week 5, slightly earlier)
  ↓  Inter-DC transit lead time (e.g., 5 days)
Need at master DC    (Week 4)
  ↓  Factory production + ocean transit (5–7 weeks)
Order to factory     (Week -2 or earlier)
```

---

## 📦 Multi-Echelon Inventory Optimization (MEIO)

DRP plans each DC independently. **Multi-Echelon** thinks of the entire network as one optimization problem.

| Method | Logic |
|--------|-------|
| **Single-echelon (silo)** | Each DC sets safety stock based on its own demand variability and lead time |
| **Multi-echelon (MEIO)** | Math model that considers cross-echelon coverage; upstream stock can substitute for downstream stock |

MEIO benefits:
- Lower total network inventory (often 10–30% reduction)
- Better service consistency across DCs
- Less "ghost" inter-DC transfers

🎯 **Exam tip:** Single-echelon over-provisions. Multi-echelon optimizes the whole.

---

## ⏱️ Inventory Position & Lead Time

**Inventory Position** is the metric DRP and reorder-point systems use:

```
Inventory Position = On-Hand + On-Order − Backorders
```

Compare *inventory position* (not just on-hand) to reorder point. Otherwise you'll re-order while inbound is in transit.

### Lead time components

| Component | What |
|-----------|------|
| Order processing | Time from order entry to release |
| Manufacturing | Production lead time |
| Inter-DC transit | Master DC → Regional DC |
| Outbound transit | DC → customer |
| Receiving / putaway | At each DC |
| Customs / inspection | International only |

Total lead time = Σ of all these. Variability in any one component drives safety stock.

---

## 🛡️ Safety Stock for Multi-Location Networks

In Module 5 of CSCP we covered single-location safety stock. CLTD layers in multi-location math.

### Single-location safety stock

```
SS = Z × σ × √L
```
where:
- Z = service-level z-score (90% = 1.28, 95% = 1.65, 99% = 2.33)
- σ = standard deviation of demand per period
- L = lead time in periods

### Multi-location: the Square-Root Rule

If you have N stocking locations with the same demand pattern, total network safety stock ≈ √N × single-location SS.

**Example:** 1 DC with SS=1,000 → 4 DCs with similar demand → ≈ √4 × 1,000 = **2,000 total** (not 4,000). Centralization saves inventory; decentralization costs inventory.

🎯 **Exam tip:** "Square-root rule" is the testable shortcut. The actual math is more nuanced (correlation between DCs matters), but the rule of thumb is enough.

### Service level vs safety stock — exponential cost

| Service Level | Z-score | Safety Stock (relative) |
|---------------|---------|--------------------------|
| 90% | 1.28 | 1.00× |
| 95% | 1.65 | 1.29× |
| 98% | 2.05 | 1.60× |
| 99% | 2.33 | 1.82× |
| 99.9% | 3.09 | 2.42× |

Going from 95% to 99.9% nearly doubles safety stock. 🚨 **Trap:** Don't promise service levels customers don't really need.

---

## 🔄 Push vs Pull Replenishment

| Push | Pull |
|------|------|
| Central planning decides who gets what | Each downstream node pulls based on actual consumption |
| Best for promotions, new launches, allocation of scarcity | Best for stable, predictable demand |
| Risk: forces inventory onto nodes that don't need it | Risk: bullwhip from local over-reaction |

**Examples:**
- Push: Movie studio pre-positions DVDs at retailers before release (you can't pull what doesn't exist yet)
- Pull: Walmart store reorders detergent based on POS sell-through

### Bullwhip Effect

When demand signals are amplified up the chain, you get the **bullwhip effect**:
- 5% demand variance at the retail level can become 30% at the manufacturer
- Causes: batched orders, promotions, price shifts, hedging
- Cure: shared POS data (CPFR), smaller batches, daily replenishment

🎯 **Exam tip:** Bullwhip is *amplification of demand variability* upstream. Cure is *information sharing*.

---

## 🪄 Postponement (Delayed Differentiation)

A high-yield exam topic.

**Definition:** Delay the final configuration of a product until customer demand is known.

| Postponement type | Example |
|-------------------|---------|
| **Form postponement** | HP printers shipped to Europe in generic box; power cord + manual added regionally |
| **Place postponement** | Hold inventory at a central hub; deploy only on order |
| **Time postponement** | Defer production until the order arrives (build-to-order) |
| **Pull postponement** | Make finished goods only when consumed at retail |
| **Logistical postponement** | Mix combinations of standard parts at a postponement center |
| **Manufacturing postponement** | Final assembly held until the customer order |

Benefits:
- Forecast at the *aggregate* level (less error)
- Lower total safety stock
- Faster response to actual demand mix

Costs:
- Slower per-order fulfillment
- Need flexible, quick assembly capability at the postponement point

🎯 **Classic exam case:** Benetton — knit sweaters in undyed yarn, dye to actual color demand. Reduces obsolescence dramatically.

---

## 📊 Inventory Classification

Beyond ABC (we covered in Module 2), CLTD tests:

### ABC analysis (Pareto)
- A: ~20% of SKUs, ~80% of value
- B: ~30% of SKUs, ~15% of value
- C: ~50% of SKUs, ~5% of value

### XYZ (variability)
- X: stable demand
- Y: moderately variable
- Z: highly variable

### Combined ABC-XYZ matrix

| | A | B | C |
|---|---|---|---|
| X | Tight management, JIT | Standard cycle | Min reorder |
| Y | Forecasting + safety stock | Standard | Min reorder |
| Z | Make-to-order or kit | Buffer or kit | Discontinue/drop ship |

### FSN (Fast / Slow / Non-moving)
- F: high movement
- S: slow movement
- N: no movement in 90+ days → candidate for discontinuation or write-off

### VED (Vital / Essential / Desirable) — typically for spares
- V: vital (downtime cost massive)
- E: essential
- D: desirable

🎯 **Exam tip:** Inventory classification drives policy. A-X items need JIT-style attention; C-Z items may not deserve any stock.

---

## 🔁 Cycle Counting in Distribution

In multi-DC networks, full annual physical counts disrupt operations. **Cycle counting** rotates daily/weekly partial counts.

| Method | How |
|--------|-----|
| **ABC-based cycle count** | A-items counted monthly, B quarterly, C annually |
| **Random sample** | Random bins each day, statistical confidence |
| **Geographic** | Count one zone per day |
| **Opportunity-based** | Count when bin reaches zero (free verification) |
| **Control group** | Repeated count on the same items to test process |

KPI: **Inventory Record Accuracy (IRA)** = bins within tolerance / total bins counted. Target 95–99% for high-quality DCs.

---

## 📅 Reorder Policies

| Policy | Logic |
|--------|-------|
| **Reorder Point (ROP)** | Trigger when inventory ≤ ROP; order fixed Q |
| **Min/Max** | Trigger when ≤ Min; order up to Max |
| **Periodic Review (P-system)** | Review every T periods; order up to target level |
| **Continuous Review (Q-system)** | Continuously monitor; reorder fixed Q when ≤ ROP |
| **Base stock** | Reorder each unit consumed (1-for-1) |

**ROP formula:**
```
ROP = (Demand during lead time) + Safety Stock
    = (d × L) + (Z × σ × √L)
```

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "DRP and MRP are the same" | DRP for distribution; MRP for BOM/production |
| "Central inventory is always cheaper" | Central reduces inventory but raises outbound transport |
| "Higher service is better" | Past 95–98%, cost rises faster than revenue gained |
| "Postponement adds complexity for no benefit" | It cuts forecast error and inventory dramatically |
| "Cycle counting and annual count are the same" | Cycle counting is *continuous*; annual count is a *disruption* |

---

## 🚨 Exam Traps

🚨 **Trap 1:** Confusing inventory **position** (on-hand + on-order − backorders) with on-hand. Reorder based on position.

🚨 **Trap 2:** Forgetting the **square-root rule** for multi-location safety stock.

🚨 **Trap 3:** Confusing **bullwhip** (variability amplification) with **stockout** (shortage). Distinct concepts.

🚨 **Trap 4:** Push vs Pull is *not* always one-or-the-other. Hybrid push-pull boundaries exist (e.g., push to DC, pull from DC to store).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **DRP** | Distribution Requirements Planning — time-phased echelon replenishment |
| **Inventory Position** | On-hand + on-order − backorders |
| **Square-Root Rule** | Multi-location SS ≈ √N × single-loc SS |
| **MEIO** | Multi-Echelon Inventory Optimization |
| **Bullwhip Effect** | Upstream amplification of demand variability |
| **Postponement** | Defer final config to last possible step |
| **ROP** | Reorder Point = (d × L) + SS |
| **ABC / XYZ / FSN / VED** | SKU classification systems |
| **IRA** | Inventory Record Accuracy |
| **Cycle Counting** | Continuous rotating partial counts |
| **CPFR** | Collaborative Planning, Forecasting, and Replenishment |

---

## ✅ Module 4 Summary

You now know:
- 📋 The DRP record and how to read/fill one
- ⏱️ Inventory position vs on-hand
- 🛡️ Safety stock math, square-root rule, service-level cost curve
- 🔄 Push vs pull, bullwhip cause and cure
- 🪄 Postponement types and benefits
- 📊 ABC/XYZ/FSN/VED classification
- 🔁 Cycle counting methods and IRA target
- 📅 Reorder policies (ROP, Min/Max, P-system, Q-system, base stock)

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 After Module 4 → [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)
5. ➡️ Then [Module 5: Warehouse Operations](../Module-05-Warehouse-Operations/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Distribution Requirements Planning* by André Martin — the original DRP textbook
- 📖 *Inventory Management Explained* by David Piasecki
- 🔗 [CSCMP CPFR Guidelines](https://cscmp.org/) — collaborative replenishment
- 🔗 [ASCM DRP overview](https://www.ascm.org/)
- 🔗 [APICS Dictionary](https://www.ascm.org/) — definitions for ROP, ABC, MEIO
