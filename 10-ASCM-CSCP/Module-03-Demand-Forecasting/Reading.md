# Module 3: Demand & Forecasting 📈

> **Why this module matters:** Forecasting drives every downstream planning decision — S&OP, inventory, capacity, sourcing. Domain 3 ("Planning and Execution") is 40% of the exam. Expect 8–12 questions that test forecasting *methods, error metrics, and CPFR* head-on.

---

## 🍦 A Story: The Ice Cream Plant That Always Ran Out

Diego runs production planning at **Polar Pop**, a regional ice-cream maker. Every summer his factory ran out of chocolate-chip-cookie-dough by week 3 and ended September with a freezer full of unsold pumpkin-spice. Sales blamed the factory. The factory blamed sales. Sales blamed customers.

Diego decided to do the math. He pulled three years of weekly shipments by SKU and tried four different forecasting approaches:

1. **Naïve** (next week = this week): MAPE was 38%.
2. **Three-month moving average**: MAPE dropped to 22%.
3. **Exponential smoothing (α = 0.3)**: MAPE 17%.
4. **Holt-Winters with seasonality and trend**: MAPE 9%.

He picked Holt-Winters. But the breakthrough wasn't just the algorithm — it was *combining quantitative forecasts with the sales team's qualitative insight about a new bakery customer ordering 30 pallets a month*. That qualitative signal alone added 2% revenue. Together, his **collaborative forecast** drove inventory turns from 4.1 to 6.8 and stockouts to under 1%.

Forecasting on the exam isn't about picking the fanciest algorithm. It's about knowing **which method fits which demand pattern**, how to **measure error correctly**, and how to **collaborate** (CPFR) to remove bullwhip.

---

## 🎯 What "Demand Management" Actually Means

Demand management is broader than forecasting. APICS dictionary:

> *The function of recognizing all demands for goods and services to support the marketplace. It involves prioritizing demand when supply is lacking, forecasting, order entry, order promising, branch warehouse requirements, interplant orders, and service parts requirements.*

Five activities under demand management:

1. **Demand forecasting** — statistical + judgmental
2. **Order processing** — capturing actual demand
3. **Service-level commitment** — promising delivery
4. **Demand shaping** — influencing through pricing, promotions
5. **Demand sensing** — using near-real-time data (POS, IoT) to update plans

---

## 📊 Types of Demand

The exam tests these patterns explicitly. The right forecasting method depends on the pattern.

| Pattern | Description | Example | Best Methods |
|---------|-------------|---------|--------------|
| **Constant / level** | Flat with random noise | Bottled water | Moving average, simple ES |
| **Trend** | Steady increase or decrease | EV adoption | Holt's exponential smoothing |
| **Seasonal** | Repeating pattern (weekly/yearly) | Christmas trees | Holt-Winters, seasonal indexes |
| **Cyclical** | Long-wave business cycles | Steel | Econometric models |
| **Lumpy / intermittent** | Sporadic, many zeros | Spare parts, jet engines | Croston's method, single-period |
| **Independent** | Driven by external customer | Finished goods | Forecast |
| **Dependent** | Derived from a parent item | Components | MRP — don't forecast |

> 🎯 **Exam tip:** *Independent* demand is forecast. *Dependent* demand (components for an MTS car) is **calculated** from BOM in MRP. Don't forecast components — calculate them.

---

## 🧠 Qualitative Forecasting Methods (Judgmental)

Use when you have little or no history (new product launches, technology shifts).

| Method | How It Works | Best For |
|--------|--------------|----------|
| **Sales force composite** | Aggregate field reps' estimates | New launches, account-based |
| **Executive opinion / jury** | Senior leaders meet, debate, settle | High-uncertainty, strategic |
| **Delphi technique** | Anonymous expert rounds with feedback | Long-horizon, controversial topics |
| **Market research / surveys** | Direct customer studies | Pre-launch consumer products |
| **Historical analogy** | Use a similar product's history | New variants of known products |

### Delphi specifics (often tested)

- Experts answer anonymously
- A coordinator summarizes responses
- Iterates 2–4 rounds
- Goal: convergence without groupthink

---

## 🧮 Quantitative Forecasting Methods

### Naïve forecast
```
   Forecast(t+1) = Actual(t)
```
Simple baseline. Useful as a benchmark.

### Simple moving average (SMA)
```
   F(t+1) = (A(t) + A(t-1) + ... + A(t-n+1)) / n
```
- Smooths random noise
- Lags trends (worse with larger n)
- Equal weight to every period in the window

### Weighted moving average (WMA)
```
   F(t+1) = w₁·A(t) + w₂·A(t-1) + ...   where Σwᵢ = 1
```
More weight on recent periods. Manual to choose weights.

### Exponential smoothing (ES) — simple
```
   F(t+1) = α · A(t) + (1 − α) · F(t)
```
where 0 ≤ α ≤ 1.
- High α (e.g., 0.5) → responsive but noisy
- Low α (e.g., 0.1) → stable but slow
- Requires only previous forecast + previous actual (memory-light)

🧠 **Worked example.** Last period's forecast was 100, actual was 120, α = 0.3.
   F = 0.3 · 120 + 0.7 · 100 = 36 + 70 = **106**

### Holt's method (trend)
ES extended with a trend component (level + slope). Use when demand drifts up or down.

### Holt-Winters (trend + seasonality)
ES with three components: level, trend, seasonal index. Use for seasonal SKUs.

### Linear regression
```
   y = a + b·x
```
- y = forecasted demand
- x = independent variable (time, GDP, ad spend)
- **R²** measures fit (0–1)
- Best when one or more identifiable drivers explain demand

### Causal / econometric models
Multi-variable regression using leading indicators (housing starts → appliance demand, oil price → freight demand). Higher accuracy but data-hungry.

---

## 📐 Forecast Error Metrics — KNOW THESE COLD

| Metric | Formula | What It Measures |
|--------|---------|------------------|
| **MAD** (mean absolute deviation) | `MAD = Σ\|A − F\| / n` | Average magnitude of error |
| **MSE** (mean squared error) | `MSE = Σ(A − F)² / n` | Penalizes large errors more |
| **MAPE** (mean absolute % error) | `MAPE = Σ\|A − F\| / Σ\|A\| × 100%` (or per-period averaged) | Scale-free, % comparable across SKUs |
| **Bias / MFE** (mean forecast error) | `MFE = Σ(A − F) / n` | Direction of error (over/under) |
| **Tracking signal** | `TS = Σ(A − F) / MAD` | When to investigate the model |

### Tracking signal rule of thumb
- |TS| > 4 → forecast is biased; investigate
- |TS| > 6 → forecast is broken; replace model

### Worked example
A team forecast vs actual for 4 weeks:

| Week | Forecast | Actual | A − F | \|A − F\| |
|------|---------|--------|-------|----------|
| 1    | 100     | 110    | +10   | 10       |
| 2    | 105     | 95     | −10   | 10       |
| 3    | 100     | 120    | +20   | 20       |
| 4    | 110     | 100    | −10   | 10       |
| **Σ** |        |        | +10   | 50       |

- MAD = 50 / 4 = **12.5**
- MFE (bias) = 10 / 4 = **+2.5** (slight under-forecasting)
- TS = 10 / 12.5 = **0.8** (well within ±4 — model is fine)

> 🚨 **Trap on the exam:** MAPE divided by total actuals vs averaged per period gives slightly different numbers. Read the formula in the question carefully. MAPE breaks down when actuals are near zero (denominator approaches 0).

---

## 🤝 CPFR — Collaborative Planning, Forecasting and Replenishment

CPFR is a structured industry framework (originated by Walmart + Warner-Lambert, now maintained by VICS/GS1) where supply chain partners share data and jointly create one forecast.

### The 4 CPFR activities

| Activity | Sub-tasks |
|----------|-----------|
| **Strategy & Planning** | Joint business plan, scope, calendar |
| **Demand & Supply Mgmt** | Sales forecasting, order planning |
| **Execution** | Order generation, fulfillment |
| **Analysis** | Exception management, performance review |

### Benefits proven in industry studies

- 20–30% reduction in inventory
- 5–15% increase in sales
- Significant bullwhip dampening

🎯 **Exam tip:** CPFR's central idea is **one number** — partners agree on a single shared forecast rather than each computing their own.

---

## 🛒 VMI — Vendor Managed Inventory

The supplier monitors and replenishes customer inventory on its own (using shared POS or VMI signals).

| Pros | Cons |
|------|------|
| Supplier sees real demand → less bullwhip | Liability for stockouts shifts to supplier |
| Lower retailer inventory cost | Requires data sharing + trust |
| Often pairs with consignment | Locks in supplier — switching cost |

VMI vs CPFR: VMI = supplier executes. CPFR = both parties plan together.

---

## ⚡ Demand Sensing

Modern systems use POS, weather, social signals, and IoT to detect demand changes in **hours** instead of weeks.

| Traditional Forecast | Demand Sensing |
|----------------------|----------------|
| Weekly / monthly buckets | Hourly / daily |
| Historical-only | Real-time signals |
| Useful for capacity | Useful for replenishment |
| Forecast horizon: months | Horizon: days |

P&G, Unilever, and Procter were early adopters. Demand sensing **complements** (does not replace) longer-horizon statistical forecasts.

---

## 📅 Forecast Horizons and Granularity

| Horizon | Time | Use | Granularity |
|---------|------|-----|-------------|
| Short-term | Days to weeks | Replenishment, scheduling | SKU / location |
| Medium-term | 3–18 months | S&OP, capacity planning | Family / region |
| Long-term | 18+ months | Strategic, network design | Aggregate |

**Aggregate forecasts** are more accurate than SKU-level ones (errors offset). Plan strategy at the aggregate level; execute at the SKU level.

---

## 🔁 Demand Shaping (Influencing the Forecast)

You can shape demand to match supply:

| Lever | Effect |
|-------|--------|
| **Pricing / discounts** | Pull demand from the future or smooth peaks |
| **Promotions** | Trigger a short-term spike (mind the bullwhip!) |
| **Bundling** | Move slow-moving SKUs |
| **Product substitution** | Redirect to in-stock alternatives |
| **Service level / lead time** | Quote longer to discourage demand or shorter to attract |

> 🚨 **Trap on the exam:** A "promotion" can *amplify* the bullwhip effect if not coordinated with the supply chain. CPFR is designed to align on promotional plans precisely for this reason.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "More data = better forecast" | Only if the data is relevant; old patterns can mislead |
| "Forecasts get more accurate at SKU level" | The opposite — aggregate forecasts are more accurate |
| "MAPE is always the best metric" | Fails when actuals are near zero or for intermittent demand |
| "Always pick the most sophisticated method" | Match method to pattern; naïve can outperform for stable demand |
| "A single forecast number is the goal" | A forecast is a *distribution* — communicate uncertainty |
| "Causal models beat time-series" | Only when drivers are stable and well-measured |
| "CPFR is software" | CPFR is a *process framework*; software supports it |

---

## 🚨 Exam Traps

1. **Independent vs dependent demand** — only independent gets forecast.
2. **Bias vs error** — a forecast can have 0 bias but still high MAD. Always check both.
3. **α high vs low** — high α reacts fast but is noisy; low α is stable but slow.
4. **Tracking signal direction** — positive TS means under-forecasting (actuals > forecast).
5. **CPFR ≠ VMI** — CPFR is joint planning; VMI is supplier-executed replenishment.
6. **Demand sensing replacing statistical forecast** — it complements, not replaces.
7. **MAPE with zero demand** — collapses; use WMAPE or scaled metrics instead.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Independent demand** | Demand from external customers — must be forecast |
| **Dependent demand** | Derived from BOM — calculated via MRP, not forecast |
| **Moving average** | Average of last n periods |
| **Exponential smoothing** | F(t+1) = αA(t) + (1−α)F(t) |
| **Holt-Winters** | ES with trend + seasonal components |
| **MAD** | Mean absolute deviation |
| **MAPE** | Mean absolute percent error |
| **Bias / MFE** | Mean forecast error — direction of mistake |
| **Tracking signal** | Bias divided by MAD, monitors model health |
| **CPFR** | Collaborative Planning, Forecasting and Replenishment |
| **VMI** | Vendor Managed Inventory |
| **Demand sensing** | Short-horizon forecasting with real-time signals |
| **Demand shaping** | Influencing demand via pricing, promotions, lead time |
| **Aggregate forecast** | Family-level forecast (more accurate than SKU) |
| **Croston's method** | Forecasting for intermittent / spare-parts demand |

---

## ✅ Module 3 Summary

You now know:
- 🎯 What demand management covers and how forecasting fits in
- 📊 The seven demand patterns and which method matches each
- 🧠 Qualitative methods: sales force composite, Delphi, jury, market research, analogy
- 🧮 Quantitative methods: naïve, SMA, WMA, ES, Holt, Holt-Winters, regression
- 📐 Error metrics: MAD, MSE, MAPE, bias, tracking signal — and how to interpret them
- 🤝 CPFR's four activities and how it dampens the bullwhip
- 🛒 VMI vs CPFR, demand sensing, demand shaping

**Next steps:**
1. 🎥 [Videos.md](./Videos.md) — pay attention to the worked exponential-smoothing example
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 4: Supply Planning & S&OP](../Module-04-Supply-Planning-SOP/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 Nahmias, *Production and Operations Analysis* — forecasting chapter
- 📖 Hyndman & Athanasopoulos, *Forecasting: Principles and Practice* (free at otexts.com/fpp3) — best free reference
- 📖 ASCM CSCP Learning System — Module 3 vocabulary
- 📖 VICS CPFR Guide (now under GS1)
- 📖 P&G's classic demand-sensing case (search HBR archives)
