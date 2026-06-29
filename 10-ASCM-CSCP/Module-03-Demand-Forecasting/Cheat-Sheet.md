# 📋 Module 3 Cheat Sheet: Demand & Forecasting

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📊 Demand Patterns → Method

| Pattern | Method |
|---------|--------|
| Level / constant | SMA, simple ES |
| Trend | Holt's |
| Trend + Seasonal | Holt-Winters |
| Cyclical | Econometric / causal |
| Lumpy / intermittent | Croston's |
| Independent demand | Forecast |
| Dependent demand | **Calculate via MRP (Material Requirements Planning), do not forecast** |

---

## 🧮 Forecasting Formulas

| Method | Formula |
|--------|---------|
| Naïve | `F(t+1) = A(t)` |
| Simple MA (n periods) | `F = ΣA / n` |
| Weighted MA | `F = Σwᵢ·Aᵢ`, Σwᵢ = 1 |
| Simple ES | `F(t+1) = α·A(t) + (1−α)·F(t)` |
| Linear regression | `y = a + b·x`, R² = explained variance |

🔥 **α high** → responsive but noisy · **α low** → stable but slow

---

## 📐 Error Metrics

| Metric | Formula | Tells You |
|--------|---------|----------|
| MAD | `Σ\|A−F\|/n` | Average magnitude |
| MSE | `Σ(A−F)²/n` | Penalizes large errors |
| MAPE | `Σ\|A−F\|/ΣA × 100` | Scale-free % (breaks near 0) |
| Bias / MFE | `Σ(A−F)/n` | Direction (+ = under, − = over) |
| Tracking Signal | `Σ(A−F)/MAD` | >\|4\| investigate; >\|6\| replace |

---

## 🧠 Qualitative Methods

| Method | One-liner |
|--------|-----------|
| Sales force composite | Field reps' estimates |
| Executive jury | Senior leaders agree |
| Delphi | Anonymous expert rounds |
| Market research | Direct customer studies |
| Historical analogy | Use a similar product's data |

---

## 🤝 CPFR (Collaborative Planning, Forecasting, and Replenishment) (4 Activities)

1. Strategy & Planning
2. Demand & Supply Management
3. Execution
4. Analysis

**Big idea: ONE shared forecast across partners.**

---

## 🛒 CPFR vs VMI (Vendor Managed Inventory)

| | CPFR | VMI |
|---|------|-----|
| Who plans | Both | Supplier |
| Who executes | Both | Supplier |
| Data sharing | Required | Required |
| Liability for stockout | Shared | Supplier |

---

## ⚡ Demand Sensing vs Statistical

| | Sensing | Statistical |
|---|---------|-------------|
| Horizon | Hours–days | Weeks–months |
| Inputs | POS, IoT, weather | Historical |
| Use | Replenishment | Capacity, S&OP (Sales and Operations Planning) |

---

## 🎯 Demand Shaping Levers

- Pricing / discounts
- Promotions (coordinate with CPFR!)
- Bundling
- Substitution
- Quoting longer/shorter lead times

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Forecasting dependent demand
- ❌ Using MAPE when actuals approach 0
- ❌ Picking complex methods for stable demand
- ❌ Ignoring promotions when reading history
- ❌ Each tier re-forecasting independently (bullwhip!)
- ❌ Treating sensing as replacement for statistical forecast

---

## 🏆 Exam Power Phrases

✅ "Share a single forecast across partners..."
✅ "Adjust for promotional lift before forecasting..."
✅ "Aggregate-level forecast is more accurate..."
✅ "Investigate when |TS| > 4..."

❌ "Forecast component demand..."
❌ "Use MAPE for spare-parts demand..."
❌ "Use naïve for seasonal SKUs..."

---

## 🔑 Worked Mini-Example

Forecast 100, Actual 120, α = 0.3
→ F_next = 0.3(120) + 0.7(100) = **106**

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. ES formula ___
2. Three error metrics formulas ___
3. CPFR's 4 activities ___
4. When is MAPE unreliable? ___
5. Difference between independent and dependent demand ___

---

➡️ [Module 4: Supply Planning & S&OP](../Module-04-Supply-Planning-SOP (Standard Operating Procedure)/Reading.md)
