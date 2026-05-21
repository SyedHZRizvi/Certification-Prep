# 📋 Module 2 Cheat Sheet: Demand Planning & Forecasting

> One page. Print it. The exam will ask you to compute. Be fluent.

---

## 🔬 The 4 Demand Components (TCSR)

| Symbol | Component | Example |
|--------|-----------|---------|
| **T** | Trend | Smartphone sales rising 6%/yr |
| **C** | Cyclical (multi-year) | Construction tools tracking housing cycle |
| **S** | Seasonal (within-year) | Ice cream peaking in July |
| **R** | Random | Heat-wave Tuesday spike |

Decomposition: **D = T × C × S × R** (or additive: T + C + S + R)

---

## 📊 Time-Series Formulas (MEMORIZE)

```
Simple Moving Avg:    F = (D1 + D2 + ... + Dn) / n
Weighted Moving Avg:  F = Σ (wi × Di),  Σ wi = 1
Exp Smoothing:        F(t+1) = α × Dt + (1 − α) × Ft
```

| α | Behavior |
|---|----------|
| **0.05 – 0.10** | Very smooth; slow response |
| **0.20 – 0.30** | Common default |
| **0.50+** | Highly responsive; noisy |

---

## 📐 Forecast Error Formulas (MEMORIZE)

```
Error:           e_t = D_t − F_t
MAD:             Σ|e_t| / n          ← units
MSE:             Σ(e_t)² / n         ← penalizes big misses
MAPE:            Σ(|e_t|/D_t) / n × 100%   ← percent
Bias (CFE):      Σe_t                ← are we systematically off?
Tracking Signal: Σe_t / MAD          ← alarm if |TS| > 4
```

🎯 Quick worked example. Errors: -10, +5, +10, -20, +5.
- MAD = (10+5+10+20+5)/5 = **10**
- Bias = -10
- TS = -10/10 = **-1** (within ±4 → OK)

---

## 🧠 Qualitative vs Quantitative

| Type | Methods | When |
|------|---------|------|
| Qualitative | Delphi, sales-force composite, executive opinion, market research | New product, no data, long-range |
| Quantitative — Time series | SMA, WMA, exp smoothing, decomposition | Stable patterns, historical data |
| Quantitative — Causal | Regression, econometric | Demand driven by external variable |

---

## 🤝 CPFR — 4 Activities

1. **Strategy & planning** (joint business plan)
2. **Demand & supply management** (shared forecasts)
3. **Execution** (orders, fulfillment)
4. **Analysis** (performance, root cause)

---

## 📈 Bullwhip Effect

```
Retail ──► Wholesale ──► Manufacturer ──► Raw supplier
 1×          2×              4×              6+×    (variability)
```

**Causes:** order batching, promotions, rationing, demand-signal distortion, long LT
**Cures:** share POS data, EDLP, smaller orders, shorter LT, CPFR, VMI

---

## 🧮 Aggregation Principle

| Level | Typical MAPE |
|-------|--------------|
| Company-wide annual | 3–8% |
| Family monthly | 8–15% |
| SKU weekly | 20–40% |
| SKU daily | 40–80% |

S&OP forecasts at family level (accurate). MPS at SKU (less accurate → safety stock).

---

## 🏆 Exam Power Phrases

When you see these, often **correct**:
- ✅ "Increase α to make the forecast more responsive"
- ✅ "Share POS data to reduce bullwhip"
- ✅ "Forecast at higher aggregation level"
- ✅ "Use Delphi for new product with no history"

When you see these, often **wrong**:
- ❌ "Set α = 1 for best accuracy"
- ❌ "Cyclical and seasonal are the same"
- ❌ "MAPE measures error in units"
- ❌ "More complex models are always more accurate"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Using SMA when there's a strong trend (always lags)
- ❌ Confusing MAD (units) with MAPE (percent)
- ❌ Ignoring a tracking signal of |6+|
- ❌ Forecasting at the wrong level (SKU when family is required)
- ❌ Treating bullwhip as the supplier's fault

---

## ✏️ Quick Self-Check

1. SMA forecast for 80, 90, 100, 110 (n=4)? → **95**
2. Exp smoothing: F=200, D=240, α=0.3 → **212**
3. What does α control? → **Responsiveness**
4. Tracking signal formula? → **Bias / MAD**
5. Two main bullwhip cures? → **Share POS data + shorter lead times**

---

➡️ [Module 3: S&OP](../Module-03-SOP-Sales-Operations-Planning/Reading.md)
