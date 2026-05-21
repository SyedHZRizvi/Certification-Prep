# Module 2: Demand Planning & Forecasting 📈

> **Why this module matters:** Every downstream plan — S&OP, MPS, MRP, capacity, inventory — is built on top of the demand forecast. A bad forecast doesn't just hurt; it cascades. CPIM tests this domain heavily because *math you don't recognize loses you 8 points fast*.

---

## 🍕 A Story: The Ice Cream Stand That Drowned

Carlos owns an ice cream stand on Coney Island. In May 2024 he sells 120 cones a day. In June, 280. July: 410. August: 380. September: 190.

In April 2025, Carlos's daughter Lila — fresh out of a business class — sits him down. "Dad, last year you ran out of pistachio in July and threw out 200 cones of mint chip in October. You're forecasting by *gut*."

Lila pulls out the previous three summers of sales. She spots three things:
1. A **trend** — sales are growing ~8% year over year.
2. A **seasonal pattern** — July is *always* 3.4× a baseline month, October is 0.4× baseline.
3. **Random noise** — Tuesday rains aren't predictable.

Lila builds a 12-month forecast that combines the trend, the season, and a smoothed average. Carlos orders accordingly. In summer 2025 he runs out of nothing and throws out almost nothing. Revenue: +22%. Waste: -31%.

**That's forecasting.** Separate the signal (trend + season) from the noise (random) and project forward — then *measure how wrong you were* and improve next round.

---

## 🔬 The 4 Components of Demand

ASCM uses this decomposition constantly. **MEMORIZE the four components:**

| Component | Definition | Example |
|-----------|-----------|---------|
| **Trend (T)** | Long-term upward or downward movement | Smartphone sales up 6%/year |
| **Cyclical (C)** | Multi-year wave tied to economic/business cycles | Construction tools rise/fall with housing market |
| **Seasonal (S)** | Repeating pattern within a year | Ice cream peaks in July |
| **Random (R)** | Noise; unpredictable | A heat wave Tuesday spikes sales |

🧠 **TCSR** — Trend, Cyclical, Seasonal, Random.

The simplest multiplicative forecast model: **Forecast = T × C × S × R**. (Or additive: T + C + S + R.) You usually try to *forecast the systematic part* (TCS) and accept that R is irreducible.

🎯 **Exam pattern:** "A product shows sales that double every December and halve every February." → That's **seasonal**, not cyclical. Cyclical is *multi-year*.

---

## 🧠 Qualitative vs Quantitative Forecasting

| Type | When To Use | Methods |
|------|------------|---------|
| **Qualitative** | New products, no history, long-range | Delphi method, market research, sales force composite, executive opinion |
| **Quantitative — Time series** | Existing product, stable patterns | Moving average, weighted MA, exponential smoothing, decomposition |
| **Quantitative — Causal** | Demand driven by external variables | Linear regression, econometric models |

**Delphi method** — multiple rounds of anonymous expert surveys, with a moderator feeding back aggregated results between rounds until consensus emerges. Used for new technology, new markets, no data.

---

## 📊 Time-Series Forecasting Methods

### 1. Simple Moving Average (SMA)

`Forecast_(t+1) = (D_t + D_(t-1) + ... + D_(t-n+1)) / n`

**Worked example.** Last 4 months of sales: 100, 120, 110, 130.
- 4-month SMA forecast for next month = (100 + 120 + 110 + 130) / 4 = **115 units**.

🚨 Trap: SMA *lags* trend. If demand is rising, SMA always under-forecasts.

### 2. Weighted Moving Average (WMA)

`Forecast = Σ (w_i × D_i)` where Σ w_i = 1, and recent periods carry larger weights.

**Worked example.** Same data (100, 120, 110, 130), weights (0.1, 0.2, 0.3, 0.4) most recent → most weight:
- WMA = 0.1·100 + 0.2·120 + 0.3·110 + 0.4·130 = 10 + 24 + 33 + 52 = **119 units**.

WMA still lags but less than SMA because it emphasizes recent data.

### 3. Exponential Smoothing

`F_(t+1) = α × D_t + (1 - α) × F_t`

Where:
- **α (alpha)** is the smoothing constant, 0 < α < 1
- High α (e.g. 0.5) = responsive to recent demand, more noise
- Low α (e.g. 0.1) = smooth, slow to react

**Worked example.** Previous forecast F_t = 100 units. Actual demand D_t = 120 units. α = 0.2.
- F_(t+1) = 0.2 × 120 + 0.8 × 100 = 24 + 80 = **104 units**.

🎯 **Critical exam pattern:** "Demand jumped 50% last period. Forecast didn't catch up. What should we do?" → Increase α. (Or: "Demand has been noisy and forecasts overreact." → Decrease α.)

### 4. Trend-Adjusted Exponential Smoothing (Holt's Model)

For data with trend you smooth *level* (L_t) and *trend* (T_t) separately:

```
L_t = α × D_t + (1 - α) × (L_(t-1) + T_(t-1))
T_t = β × (L_t - L_(t-1)) + (1 - β) × T_(t-1)
F_(t+n) = L_t + n × T_t
```

You probably won't compute Holt-Winters by hand on the exam, but you must recognize it.

### 5. Linear Regression (Causal)

`Y = a + bX`

Where:
- Y = forecasted demand
- X = independent variable (advertising spend, housing starts, GDP)
- a = intercept; b = slope

**Worked example.** A company finds Y = 50 + 0.8 × X where X is monthly advertising spend in $k.
- If next month's ad spend = $200k, forecast Y = 50 + 0.8 × 200 = **210 units**.

---

## 📐 Forecast Error Metrics (MEMORIZE THE FORMULAS)

These show up on every CPIM exam. Three to five questions involve a calculation.

| Metric | Formula | What It Measures |
|--------|---------|------------------|
| **Error** | e_t = D_t − F_t | Single-period miss |
| **MAD** (Mean Absolute Deviation) | Σ\|e_t\| / n | Average size of error (units) |
| **MSE** (Mean Squared Error) | Σ e_t² / n | Penalizes large misses |
| **MAPE** (Mean Absolute Percent Error) | Σ (\|e_t\| / D_t) × 100% / n | Average error as % of demand |
| **Bias** (Cumulative Forecast Error) | Σ e_t | Are we systematically over or under? |
| **Tracking Signal** | Σ e_t / MAD | Bias normalized by MAD; should stay between -4 and +4 |

### Worked example — MAD, MAPE, Tracking Signal

| Month | Demand (D) | Forecast (F) | Error (D−F) | \|Error\| | \|Error\|/D |
|-------|-----------|--------------|-------------|-----------|--------------|
| Jan | 100 | 110 | -10 | 10 | 0.10 |
| Feb | 120 | 115 | +5 | 5 | 0.042 |
| Mar | 130 | 120 | +10 | 10 | 0.077 |
| Apr | 90 | 110 | -20 | 20 | 0.222 |
| May | 110 | 105 | +5 | 5 | 0.045 |

- Σ \|Error\| = 10 + 5 + 10 + 20 + 5 = 50
- **MAD = 50 / 5 = 10 units**
- Σ (\|Error\|/D) = 0.10 + 0.042 + 0.077 + 0.222 + 0.045 = 0.486
- **MAPE = 0.486 / 5 × 100% = 9.72%**
- Σ e_t = -10 + 5 + 10 - 20 + 5 = -10 → cumulative bias = -10 (slightly over-forecasting)
- **Tracking Signal = -10 / 10 = -1.0** (well within ±4, no action needed)

🎯 **Tracking signal rule of thumb:** if |TS| > 4 (some texts use ±6), the forecast is *biased* and the model needs revision.

🚨 **Exam trap:** Don't confuse MAD (units) with MAPE (percent). A question asking "what's the average percent error?" wants MAPE. "What's the average absolute deviation in units?" wants MAD.

---

## 🤝 CPFR — Collaborative Planning, Forecasting & Replenishment

CPFR is the formal framework for **sharing forecasts between trading partners** (typically a retailer like Walmart and a supplier like P&G).

The 4 main activities:
1. **Strategy & planning** — joint business plan, scope
2. **Demand & supply management** — shared forecasts, joint resolution of exceptions
3. **Execution** — order generation, fulfillment
4. **Analysis** — performance measurement, root cause, improvement

**Why CPFR matters:** sharing point-of-sale (POS) data with suppliers reduces the *bullwhip effect* — the amplification of demand variability as you move upstream in a supply chain.

### The Bullwhip Effect

| Stage | Demand Variability (relative) |
|-------|-------------------------------|
| Retail (POS) | 1.0× |
| Wholesale | 2.0× |
| Manufacturer | 4.0× |
| Raw-material supplier | 6.0+× |

**Causes of bullwhip:** order batching, price promotions, rationing, demand-signal distortion, long lead times.
**Cures:** share POS data, smaller more frequent orders, EDLP (everyday low price), shorter lead times, VMI/CPFR.

---

## 🧮 Forecasting Aggregation Principle

**Forecasts are more accurate at higher levels of aggregation and longer time buckets — and less accurate at the individual SKU + day level.**

| Aggregation | Forecast Error (typical MAPE) |
|-------------|-------------------------------|
| Total company, annual | 3–8% |
| Product family, monthly | 8–15% |
| SKU, weekly | 20–40% |
| SKU, daily | 40–80% |

This is *why* S&OP forecasts at the product-family level (Module 3) — they're accurate. MPS forecasts at the SKU level (Module 4) — they're less accurate, which is why safety stock exists.

---

## 🗓️ Forecast Horizon & Hierarchy

| Horizon | Level | Purpose |
|---------|-------|---------|
| Long (1–5 yr) | Aggregate / family | Strategic capacity, S&OP |
| Medium (3–18 mo) | Product family | S&OP, master scheduling |
| Short (1–3 mo) | SKU | MRP, replenishment |
| Very short (1–4 wk) | SKU + DC | Daily/weekly replenishment, ATP |

---

## 🚨 Pyramid Forecasting (Top-Down vs Bottom-Up vs Hybrid)

| Approach | How It Works | When To Use |
|----------|--------------|-------------|
| **Top-down** | Forecast the total, allocate to SKUs by % | Stable mix, dominant product |
| **Bottom-up** | Forecast each SKU, sum to total | Many SKUs, unstable mix |
| **Pyramid (hybrid)** | Forecast at the family level, *reconcile* to SKU and back | Most real-world S&OP shops |

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "A more complex model is always more accurate" | Often false; simple models (SMA, exp smoothing) beat complex ones for noisy retail demand |
| "α = 1 means we use only actual demand" | True mathematically but produces a *very* noisy forecast — usually wrong choice |
| "MAD and MSE are the same" | No — MSE squares the error, MAD doesn't. MSE punishes large misses harder |
| "Tracking signal of zero is best" | Zero is neutral; anywhere in ±4 is acceptable. Persistent drift away from zero = model broken |
| "Forecasts should equal actual demand" | Demand has random noise — perfect forecasts are impossible. The goal is to minimize *bias and variance*, not eliminate error |
| "CPFR is a software product" | No — it's a collaboration framework. Software can support it but doesn't define it |

---

## 🎯 Exam Traps Specific to Module 2

1. **"Use the highest α to be most accurate."** Wrong — high α makes the forecast *responsive*, not accurate. Volatile data + high α = overreaction.
2. **MAPE vs MAD confusion** — read the question carefully. "Percent" → MAPE; "units" → MAD.
3. **Cyclical confused with seasonal** — cyclical is *multi-year* (e.g. construction cycle). Seasonal repeats *within* a year.
4. **Forecasting at the SKU level when family-level is requested** — S&OP forecasts at family. MPS at SKU. The exam tests this.
5. **Treating bullwhip as "supplier fault"** — bullwhip is a *system* problem caused by ordering behavior all along the chain.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **Trend** | Long-term directional movement |
| **Seasonal** | Within-year repeating pattern |
| **Cyclical** | Multi-year wave |
| **Random** | Irreducible noise |
| **Simple Moving Average** | Equal-weighted average of last n periods |
| **Weighted Moving Average** | Average with custom weights summing to 1 |
| **Exponential Smoothing** | F_(t+1) = α·D_t + (1-α)·F_t |
| **α (smoothing constant)** | 0–1; higher = more responsive |
| **MAD** | Mean absolute deviation (units) |
| **MAPE** | Mean absolute percent error |
| **Bias** | Cumulative forecast error |
| **Tracking signal** | Bias / MAD; alarm if outside ±4 |
| **Delphi method** | Anonymous expert rounds, qualitative |
| **CPFR** | Collaborative Planning, Forecasting & Replenishment |
| **Bullwhip effect** | Demand variability amplification upstream |
| **Forecast aggregation** | More accurate at higher level, longer bucket |
| **Pyramid forecasting** | Family-level forecast, reconciled to SKU |

---

## ✅ Module 2 Summary

You now know:
- 🔬 The 4 demand components — Trend, Cyclical, Seasonal, Random (TCSR)
- 📊 SMA, WMA, exponential smoothing — formulas and when each lags
- 🎚️ What α does (responsiveness vs smoothness)
- 📐 MAD, MSE, MAPE, bias, tracking signal — with worked numbers
- 🤝 CPFR and how it tames the bullwhip effect
- 📈 The aggregation principle — why family forecasts are more accurate than SKU forecasts
- 🚨 The classic traps (MAD vs MAPE, cyclical vs seasonal, high α ≠ better)

**Next steps:**
1. 🎥 Watch the videos in `Videos.md` — especially exponential smoothing
2. ✏️ Take `Quiz.md` — aim for 20/26 minimum
3. 📋 Memorize `Cheat-Sheet.md` formulas
4. ➡️ Move to [Module 3: S&OP](../Module-03-SOP-Sales-Operations-Planning/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Forecasting: Principles and Practice* — Hyndman & Athanasopoulos (free online textbook, the modern gold standard)
- 📖 *Demand Management Best Practices* — Crum & Palmatier
- 📖 ASCM Dictionary entries: forecast error, MAD, MAPE, tracking signal, exponential smoothing, CPFR, bullwhip
- 📖 *The Bullwhip Effect in Supply Chains* — Lee, Padmanabhan, Whang (the seminal 1997 Sloan Management Review article)
- 📖 *Manufacturing Planning and Control* — Jacobs et al., Chapter 2
