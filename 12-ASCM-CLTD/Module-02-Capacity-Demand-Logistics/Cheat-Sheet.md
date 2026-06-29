# 📋 Module 2 Cheat Sheet: Capacity & Demand for Logistics

> Print and tape. Review weekly.

---

## 🧮 Capacity Formulas

```
Rated Capacity = Theoretical × Utilization × Efficiency

Utilization  = Used time / Available time
Efficiency   = Actual output / Standard output (during used time)
Cushion      = 1 − Utilization
```

🧠 Above ~85% utilization, variability causes queue blow-ups.

---

## 🎚️ Lead / Lag / Match

| Strategy | Capacity sits | Best for | Risk |
|----------|---------------|----------|------|
| Lead | Ahead of demand | Growing markets, service-as-weapon | Excess cost |
| Lag | Behind demand | Commodities, declining markets | Stockouts |
| Match | Aligned period-by-period | Seasonal retail | Hiring churn |
| Hybrid (Chase + Level) | Base + flex | Real-world peaked businesses | Coordination |

---

## 📊 Forecast Error Metrics

```
MAD            = Σ|A−F|/N           (magnitude)
MAPE           = Σ|A−F|/|A| × 100/N (% magnitude)
Bias           = Σ(A−F)/N           (direction; neg = over-forecast)
Tracking sig.  = Σ(A−F)/MAD         (alarm at ±4 to ±6)
RMSE           = √(Σ(A−F)²/N)       (penalizes big misses)
```

🧠 Bias = direction. MAD = magnitude. Fix bias first.

---

## 🐢🐇 Velocity & Slotting

| Tier | % SKUs | % Throughput | Where to slot |
|------|--------|---------------|----------------|
| A | ~20% | ~80% | Forward pick, golden zone |
| B | ~30% | ~15% | Standard storage |
| C | ~50% | ~5% | Reserve, batch pick |

---

## 🏗️ Seasonal Capacity Tactics

1. Temp/seasonal labor
2. Overflow lease / 3PL (Third-Party Logistics) flex
3. Mode shift (ocean → air for last-minute)
4. Sale/clearance demand-smoothing
5. Pre-build inventory (Lead behavior)
6. Cross-train office staff
7. Pre-position to regional DCs

---

## 🔄 6-Step Capacity Planning Cycle

```
1. Determine throughput
2. Compute resources needed
3. Compare to current (gap)
4. Identify alternatives
5. Select & implement
6. Monitor & adjust → loops to 1
```

---

## 📉 Theory of Constraints, 5 Focusing Steps

```
1. Identify the bottleneck
2. Exploit (no idle time on it)
3. Subordinate (others align)
4. Elevate (invest to grow it)
5. Repeat (bottleneck moves)
```

---

## 🏆 Exam Power Phrases

Usually CORRECT:

- ✅ "Pre-build for seasonality, safety stock for variability"
- ✅ "Aggregate forecasts are more accurate"
- ✅ "Identify the bottleneck first"
- ✅ "Lead capacity for growing markets"

Usually WRONG:

- ❌ "100% utilization is the goal"
- ❌ "Detailed forecasts are always better"
- ❌ "Match strategy is always cheapest"
- ❌ "Bias and MAD measure the same thing"

---

## ⚠️ Anti-Patterns

- ❌ Sizing for average instead of peak, but having no plan for peak
- ❌ Treating random noise as seasonality
- ❌ Ignoring tracking signal alarms

---

## ✏️ Quick Self-Check

1. Rated capacity formula? ___
2. Lead vs Lag vs Match, one-line each? ___
3. MAD vs bias? ___
4. Tracking signal alarm threshold? ___
5. ABC: A-mover slotting location? ___

---

➡️ [Module 3: Order Management & Fulfillment](../Module-03-Order-Management-Fulfillment/Reading.md)
