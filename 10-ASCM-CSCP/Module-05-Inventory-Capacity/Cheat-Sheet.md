# 📋 Module 5 Cheat Sheet: Inventory & Capacity

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📦 5 Inventory Types

| Type | Purpose |
|------|---------|
| Cycle | Refill working stock |
| Safety | Demand / LT variability buffer |
| Anticipation | Pre-built for known event |
| Pipeline | In transit |
| Decoupling / hedge | Buffer between processes |

(Also know: MRO, promotional)

---

## 💸 4 Inventory Costs

| Cost | Typical |
|------|---------|
| Carrying | 20–30%/yr |
| Ordering / setup | Per order |
| Stockout | Variable |
| Acquisition | Unit cost |

---

## 📐 EOQ (Economic Order Quantity)

```
   EOQ = √(2DS/H)
```
**Assumptions (5):** constant demand · constant LT · no discounts · instant receipt · no stockouts.

Sensitivity: EOQ is robust (square root softens errors).

---

## 🛡️ Safety Stock & ROP (Reorder Point)

```
   SS  = Z · σ_LT
   ROP = d·LT + SS
```

**Z values:** 90% → 1.28 · 95% → 1.65 · 97.5% → 1.96 · 99% → 2.33 · 99.99% → 3.72

Combined variability:
```
   σ_LT = √(LT · σ_d² + d² · σ_LT²)
```

---

## 🎯 ABC Analysis

| Class | % SKUs | % $ | Control |
|-------|-------:|----:|---------|
| A | 10–20 | 70–80 | Tight, frequent count |
| B | 30 | 15–20 | Moderate |
| C | 50–60 | 5–10 | Loose, batched |

Variants: ABC-XYZ · VED · HML

---

## 🔢 KPI (Key Performance Indicator) Formulas

| KPI | Formula |
|-----|---------|
| Turns | COGS (Cost of Goods Sold) / avg inventory |
| DIO | 365 / turns |
| DSO | AR / daily revenue |
| DPO | AP / daily COGS |
| Cash-to-Cash | DIO + DSO − DPO |
| Fill rate | Units shipped / units demanded |

---

## 🛍️ Newsvendor

```
   Critical Ratio = Cu / (Cu + Co)
```
Look up Z for that probability → order = mean + Z · σ.

---

## 🏭 Capacity

| Term | Formula |
|------|---------|
| Utilization | Actual / Design |
| Efficiency | Actual / Effective |

**Lead** (capacity ahead) · **Lag** (follow demand) · **Match** (track demand)

⚠️ Past ~85% utilization, queue wait times spike (variability + load).

---

## 🏃 Lean / JIT (Just-In-Time) / Kanban

- **JIT** = just-in-time deliveries
- **Kanban** = visual pull signal
- **Heijunka** = production leveling
- **Single-piece flow** = ideal lot size = 1
- **TIMWOOD** wastes: Transport · Inventory · Motion · Waiting · Overproduction · Over-processing · Defects

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Applying EOQ when discounts / variable LT exist
- ❌ Setting SS by gut feel instead of variability + Z
- ❌ 100% service-level target
- ❌ Annual physical inventory only (no cycle counts)
- ❌ "More inventory always helps service"
- ❌ Pure JIT for high-variance long-LT chains

---

## 🏆 Exam Power Phrases

✅ "Calculate using EOQ assuming constant demand..."
✅ "Increase safety stock to reflect lead-time variance..."
✅ "Use cycle counting for continuous accuracy..."
✅ "Classify SKUs A/B/C before setting control policy..."

❌ "Apply newsvendor to continuous-demand staples..."
❌ "Lower target service level to 100%..."
❌ "Set safety stock to zero in a high-variance chain..."

---

## 🔑 Worked Example

EOQ: D=12,000 · S=$40 · H=$6
→ EOQ = √(2·12000·40/6) = √160,000 = **400 units**
→ Orders/yr = 12,000/400 = 30

---

## ✏️ Quick Self-Check

Cover and recite:

1. EOQ formula + assumptions ___
2. SS formula + Z for 95% ___
3. Cash-to-cash ___
4. Difference between fill rate and service level ___
5. 7 lean wastes (TIMWOOD) ___

---

➡️ [Module 6: Sourcing & Supplier Management](../Module-06-Sourcing-Supplier-Management/Reading.md)
