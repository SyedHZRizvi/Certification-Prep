# 📋 Module 4 Cheat Sheet: Inventory & Distribution

> One page. Print it. Review weekly.

---

## 📋 DRP Record Template

| Week | 1 | 2 | 3 | 4 | 5 |
|------|---|---|---|---|---|
| Gross Requirements | x | x | x | x | x |
| Scheduled Receipts | x | | | | |
| Projected On-Hand | =start+SR−GR | … | … | … | … |
| Net Requirements | | | x | x | x |
| Planned Order Receipts | | | x | | x |
| Planned Order Releases (offset by LT) | x | | x | | |

🧠 Order RELEASE = Order RECEIPT minus lead time.

---

## 🛡️ Safety Stock & ROP

```
SS  = Z × σ × √L
ROP = (d × L) + SS

Z-scores:
  90% → 1.28    98% → 2.05
  95% → 1.65    99% → 2.33
                99.9% → 3.09
```

🧠 **Square-Root Rule:** N DCs → SS ≈ √N × single-loc SS.

---

## 🔄 Push vs Pull

| Push | Pull |
|------|------|
| Central plans | Downstream pulls |
| Promotions, launches | Stable demand |
| Risk: forces stock | Risk: bullwhip |

**Bullwhip cures:** shared POS (CPFR), smaller batches, daily replenishment, EDLP.

---

## 🪄 Postponement Types

| Type | Example |
|------|---------|
| Form | Benetton dyes after demand |
| Place | Central hub, ship on order |
| Time | Build-to-order |
| Pull | Make to retail consumption |
| Logistical | Mix combos at hub |
| Manufacturing | Final assembly on order |

🧠 Postponement → forecast at aggregate → less SS, less obsolescence.

---

## 📊 Inventory Classification

| Type | Groups by |
|------|-----------|
| ABC | Value (80/15/5) |
| XYZ | Demand variability |
| FSN | Movement (Fast/Slow/Non) |
| VED | Criticality (spares) |

ABC-XYZ matrix: A-X → JIT, C-Z → drop or kit.

---

## 📅 Reorder Policies

| Policy | Trigger |
|--------|---------|
| ROP (Q-system) | Position ≤ ROP, order Q |
| Min/Max | ≤ Min, order up to Max |
| Periodic (P-system) | Every T review, order to target |
| Base stock | 1-for-1 |

---

## 🔁 Cycle Counting

| Method | Logic |
|--------|-------|
| ABC-based | A monthly, B quarterly, C annually |
| Random | Statistical sample |
| Geographic | Zone per day |
| Opportunity | At bin-zero |
| Control group | Same items, test process |

**KPI:** IRA = bins in tolerance / total counted (target 95–99%).

---

## 🏆 Exam Power Phrases

Usually CORRECT:

- ✅ "Reorder on Inventory Position, not on-hand"
- ✅ "Centralizing inventory reduces total SS via √N"
- ✅ "Bullwhip cure = share POS, smaller batches"
- ✅ "Postponement reduces forecast error"

Usually WRONG:

- ❌ "DRP and MRP are the same"
- ❌ "Higher service is always better"
- ❌ "Push is always best"
- ❌ "Annual physical = cycle count"

---

## ⚠️ Anti-Patterns

- ❌ Reordering on on-hand only → double-orders
- ❌ Promising 99.9% service to all customers
- ❌ Ignoring tracking signal alerts on forecast
- ❌ Forcing pull where supply is genuinely scarce

---

## ✏️ Quick Self-Check

1. SS formula? ___
2. Square-root rule example? ___
3. Bullwhip cause and cure? ___
4. Postponement types, name 3? ___
5. IRA target? ___

---

➡️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), Modules 1–4 covered. After: [Module 5](../Module-05-Warehouse-Operations/Reading.md)
