# Module 3: Demand & Forecasting 📈

> **Why this module matters:** Forecasting drives every downstream planning decision, S&OP, inventory, capacity, sourcing. Domain 3 ("Planning and Execution") is 40% of the exam. Expect 8–12 questions that test forecasting *methods, error metrics, and CPFR* head-on.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [The bullwhip effect](../Module-01-SCM-Foundations-Strategy/Reading.md), covered in Module 1
> - [SCOR-Plan vocabulary](../Module-01-SCM-Foundations-Strategy/Reading.md), covered in Module 1
> - Basic statistics: mean, standard deviation, variance, normal distribution
> - Time-series intuition (trends, cycles, seasonality)
> If statistics feels rusty, review Khan Academy's "Statistics & Probability, Sampling distributions" before starting the quantitative methods section.

---

## 🍦 A Story: The Ice Cream Plant That Always Ran Out

Diego runs production planning at **Polar Pop**, a regional ice-cream maker. Every summer his factory ran out of chocolate-chip-cookie-dough by week 3 and ended September with a freezer full of unsold pumpkin-spice. Sales blamed the factory. The factory blamed sales. Sales blamed customers.

Diego decided to do the math. He pulled three years of weekly shipments by SKU and tried four different forecasting approaches:

1. **Naïve** (next week = this week): MAPE was 38%.
2. **Three-month moving average**: MAPE dropped to 22%.
3. **Exponential smoothing (α = 0.3)**: MAPE 17%.
4. **Holt-Winters with seasonality and trend**: MAPE 9%.

He picked Holt-Winters. But the breakthrough wasn't just the algorithm, it was *combining quantitative forecasts with the sales team's qualitative insight about a new bakery customer ordering 30 pallets a month*. That qualitative signal alone added 2% revenue. Together, his **collaborative forecast** drove inventory turns from 4.1 to 6.8 and stockouts to under 1%.

Forecasting on the exam isn't about picking the fanciest algorithm. It's about knowing **which method fits which demand pattern**, how to **measure error correctly**, and how to **collaborate** (CPFR) to remove bullwhip.

---

## 🎯 What "Demand Management" Actually Means

Demand management is broader than forecasting. APICS dictionary:

> *The function of recognizing all demands for goods and services to support the marketplace. It involves prioritizing demand when supply is lacking, forecasting, order entry, order promising, branch warehouse requirements, interplant orders, and service parts requirements.*

Five activities under demand management:

1. **Demand forecasting**, statistical + judgmental
2. **Order processing**, capturing actual demand
3. **Service-level commitment**, promising delivery
4. **Demand shaping**, influencing through pricing, promotions
5. **Demand sensing**, using near-real-time data (POS, IoT) to update plans

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
| **Dependent** | Derived from a parent item | Components | MRP, don't forecast |

> 🎯 **Exam tip:** *Independent* demand is forecast. *Dependent* demand (components for an MTS car) is **calculated** from BOM in MRP. Don't forecast components, calculate them.

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

### Exponential smoothing (ES), simple
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

## 📐 Forecast Error Metrics, KNOW THESE COLD

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
- TS = 10 / 12.5 = **0.8** (well within ±4, model is fine)

> 🚨 **Trap on the exam:** MAPE divided by total actuals vs averaged per period gives slightly different numbers. Read the formula in the question carefully. MAPE breaks down when actuals are near zero (denominator approaches 0).

---

## 🤝 CPFR, Collaborative Planning, Forecasting and Replenishment

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

🎯 **Exam tip:** CPFR's central idea is **one number**, partners agree on a single shared forecast rather than each computing their own.

---

## 🛒 VMI, Vendor Managed Inventory

The supplier monitors and replenishes customer inventory on its own (using shared POS or VMI signals).

| Pros | Cons |
|------|------|
| Supplier sees real demand → less bullwhip | Liability for stockouts shifts to supplier |
| Lower retailer inventory cost | Requires data sharing + trust |
| Often pairs with consignment | Locks in supplier, switching cost |

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

## 📊 Case Study, Walmart, Warner-Lambert, and the Birth of CPFR (1995-2024)

**Situation.** In 1995 Walmart and pharma firm Warner-Lambert (maker of Listerine) shared an embarrassing problem: every time Walmart ran a Listerine end-cap promotion, Warner-Lambert's plant in Lititz, PA went into emergency mode. Demand at the shelf went up 3×. Walmart's order to Warner-Lambert went up 8× (bullwhip from store inventory replenishment). Warner-Lambert's order to its bottle supplier went up 14×. The plant ran weekend overtime, the bottle supplier paid expedite premiums, and 6 weeks later inventory backed up at every tier. Independent forecasting was the disease; better algorithms weren't the cure.

**Decision.** A joint team (Walmart's Lee Scott, Warner-Lambert's Pete Smithee, with consultants from Surgency including Bob Bruce) piloted what they called **CFAR Collaborative Forecasting and Replenishment**. The mechanic: a shared online workbench where Walmart's POS forecasts and Warner-Lambert's production forecasts were *both* visible, and exception-management triggered joint conversations when they diverged more than ±15%. Promotions were pre-shared 8 weeks in advance not as a courtesy, but as joint planning. Both sides committed to *one number*, a single negotiated forecast rather than two separate ones with each side defending its own.

**Outcome.** Listerine specifically: Walmart inventory days dropped from 88 days to 39 days. Out-of-stock dropped from 11% to 2%. Warner-Lambert's plant overtime dropped 53%. A formal CFAR Voluntary Industry Standard was published by the **Voluntary Interindustry Commerce Standards Association (VICS)** in 1998, renamed **CPFR (Collaborative Planning, Forecasting and Replenishment)** in 2000. CPFR governance moved to GS1 in 2012 and remains the reference framework for joint planning. By 2024, AMR Research's longitudinal studies showed CPFR-mature retailers/suppliers carried 20-30% less inventory and grew sales 5-15% faster than control groups. P&G, Unilever, and Coca-Cola all built modern S&OP processes on top of CPFR principles. The pilot that started with Listerine bottle caps in 1995 became the architectural pattern for modern retail planning, and the conceptual basis for SAP IBP, Kinaxis, o9, and Blue Yonder demand-planning modules.

**Lesson for the exam / for practitioners.** CPFR's superpower is not the algorithm, it's the **one-number forecast** governance. The math (exponential smoothing, Holt-Winters) was identical before and after; what changed was who agreed to it and what information flowed. On the exam: CPFR ≠ VMI. VMI is supplier-executes-replenishment; CPFR is supplier-and-buyer-plan-jointly. CPFR dampens bullwhip because every tier sees the same downstream demand signal. Modern AI demand-sensing (POS, weather, social) layered on top of CPFR is the 2024-2026 standard.

**Discussion (Socratic).**
- Q1: Many 2020-2022 CPFR programs fell apart during COVID because partners hoarded information about their own supply problems. Reconstruct: was CPFR fundamentally fragile to crisis, or was it implementation-shallow? Defend a position.
- Q2: A regional retailer's CEO objects to CPFR with their biggest supplier because "we'll lose pricing leverage when they see our true demand." Build the counter-argument that information sharing increases joint surplus more than it shifts the split.
- Q3: Generative-AI demand forecasting (e.g., Snowflake + Anthropic Claude, 2024-2026) can ingest raw text news, social, weather that CPFR's structured signal can't. Does this make CPFR obsolete or strengthen it? Cite where the human-in-the-loop fits.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "More data = better forecast" | Only if the data is relevant; old patterns can mislead |
| "Forecasts get more accurate at SKU level" | The opposite, aggregate forecasts are more accurate |
| "MAPE is always the best metric" | Fails when actuals are near zero or for intermittent demand |
| "Always pick the most sophisticated method" | Match method to pattern; naïve can outperform for stable demand |
| "A single forecast number is the goal" | A forecast is a *distribution*, communicate uncertainty |
| "Causal models beat time-series" | Only when drivers are stable and well-measured |
| "CPFR is software" | CPFR is a *process framework*; software supports it |

---

## 🚨 Exam Traps

1. **Independent vs dependent demand**, only independent gets forecast.
2. **Bias vs error**, a forecast can have 0 bias but still high MAD. Always check both.
3. **α high vs low**, high α reacts fast but is noisy; low α is stable but slow.
4. **Tracking signal direction**, positive TS means under-forecasting (actuals > forecast).
5. **CPFR ≠ VMI**, CPFR is joint planning; VMI is supplier-executed replenishment.
6. **Demand sensing replacing statistical forecast**, it complements, not replaces.
7. **MAPE with zero demand**, collapses; use WMAPE or scaled metrics instead.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Independent demand** | Demand from external customers, must be forecast |
| **Dependent demand** | Derived from BOM, calculated via MRP, not forecast |
| **Moving average** | Average of last n periods |
| **Exponential smoothing** | F(t+1) = αA(t) + (1−α)F(t) |
| **Holt-Winters** | ES with trend + seasonal components |
| **MAD** | Mean absolute deviation |
| **MAPE** | Mean absolute percent error |
| **Bias / MFE** | Mean forecast error, direction of mistake |
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
- 📐 Error metrics: MAD, MSE, MAPE, bias, tracking signal, and how to interpret them
- 🤝 CPFR's four activities and how it dampens the bullwhip
- 🛒 VMI vs CPFR, demand sensing, demand shaping

**Next steps:**
1. 🎥 [Videos.md](./Videos.md), pay attention to the worked exponential-smoothing example
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 4: Supply Planning & S&OP](../Module-04-Supply-Planning-SOP/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4 turns forecasts into MPS via the S&OP cycle; Module 5 uses the σ_LT from your error metrics for safety-stock math; Module 9 connects forecast accuracy to demand risk.
> - Cross-course: `11-ASCM-CPIM` Module 3 takes Croston's method and intermittent-demand forecasting much deeper.
> - Practice: Practice Exam 1 includes ~10 forecasting questions including 1-2 calculation (ES, MAD); Final Mock has 6-8.

---

## 💬 Discussion, Socratic prompts

1. **Aggregate vs SKU forecast paradox.** Aggregate forecasts are more accurate than SKU forecasts, but operations must execute at SKU level. Build the principled argument for *where* in the planning hierarchy each forecast lives, and what governance forces them to reconcile.
2. **When naïve beats fancy.** Spyros Makridakis's M-competition (1982, M3 in 2000, M5 in 2020) repeatedly found that simple methods (naïve, exponential smoothing) beat sophisticated ARIMA in many real datasets. Construct an honest argument for when sophistication is worth it, and when it's vanity. Cite at least one demand pattern from this module's typology.
3. **Demand sensing's edge case.** Your firm pays a vendor for hourly POS-based demand sensing. Your data scientist shows it improves the 1-week forecast by 8% MAPE, but increases the *6-month* forecast volatility because the model over-weights recent signal. How would you reconcile S&OP (6-12 months) vs replenishment (days)?
4. **The α dial.** A planner sets α = 0.9 because "I want the model to react fast." The forecast bias swings wildly. Walk through the conceptual + math reason why high α hurts here, and how you'd defend a lower α to a planner who insists the higher number "feels right."
5. **MAPE's collapse and the WMAPE rescue.** A spare-parts business has many SKUs with intermittent demand and frequent zeros. MAPE is mathematically undefined for those weeks. Defend the choice between WMAPE, MASE, and Mean Absolute Error to a CFO who wants "one number that's comparable across the business."

---

## 📚 Further Reading (Optional)

- 📖 Steven Nahmias, *Production and Operations Analysis*, McGraw-Hill, 7e 2015 (forecasting chapter is the academic reference)
- 📖 Rob J. Hyndman & George Athanasopoulos, *Forecasting: Principles and Practice* OTexts, 3e 2021 (free at otexts.com/fpp3 best free reference, used by Monash University)
- 📖 Marshall L. Fisher, Ananth Raman, et al., *"Reducing the Cost of Demand Uncertainty Through Accurate Response"*, Operations Research 1996 (the foundational accurate-response paper)
- 📖 VICS CPFR Guidelines (now governed by GS1 US), <https://www.gs1us.org/>
- 📖 Tom Davenport's *Competing on Analytics*, HBS Press, updated 2017 (P&G's demand-sensing case)
- 📖 Spyros Makridakis et al., *"The M5 Competition: Conclusions"*, International Journal of Forecasting 2022 (state of the art empirical comparison)
- 📖 ASCM CSCP Learning System, Module 3 vocabulary mirrors APICS dictionary verbatim
- 📰 *Foresight* (the practitioner journal of the International Institute of Forecasters), quarterly
