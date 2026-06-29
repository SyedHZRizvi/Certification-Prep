# 📋 Module 5 Cheat Sheet: Marketing Mix Modeling

> One page. Print it. Tape it to your monitor.

---

## 📚 The MMM Equation

```
Sales_t = Baseline_t + Σ_c β_c × AdStock(Spend_{c,t}) + Σ_x γ_x × Control_{x,t} + ε_t
```

- **Baseline** = would-have-happened-anyway sales
- **β_c** = channel coefficient
- **AdStock** = decay × past + today's spend, **then** Hill saturation
- **Control** = price, weather, holidays, competitor activity

---

## 🌊 Ad-Stock

```
AdStock_t  =  Spend_t  +  λ × AdStock_{t-1}

half-life = log(0.5) / log(λ)
```

| λ | Half-life |
|---|-----------|
| 0.5 | 1 week |
| 0.7 | ~2 weeks |
| 0.8 | ~3 weeks |
| 0.9 | ~7 weeks |

### Typical half-lives

| Channel | Half-life |
|---------|-----------|
| Paid search | 1–2 days |
| Display retargeting | 3–7 days |
| Paid social DR | 1–2 weeks |
| Paid social brand | 2–4 weeks |
| TV DR | 2–6 weeks |
| TV brand | 8–12 weeks |
| Podcast | 4–8 weeks |
| OOH | 6–12 weeks |

---

## 🪞 Saturation, Hill Function

```
Hill(x) = x^α / (x^α + K^α)
```

- **α** = shape (0.5–3 typically)
- **K** = half-saturation point (spend where output = 50% of max)

**Diminishing returns rule:** if response curve is *flat* at current spend, reallocate elsewhere.

---

## 🌳 Robyn vs Meridian

| | Robyn (Meta) | Meridian (Google) |
|---|--------------|-------------------|
| Lang | R (Python in dev) | Python (TFP) |
| Inference | Ridge + Nevergrad | Hierarchical Bayesian |
| R&F native | No (spend-only) | Yes |
| Geo support | Yes | Default |
| Maturity | 2020-, battle-tested | 2024, newer |

---

## 🎯 MMM vs MTA, Decision Tree

| Question | Tool |
|----------|------|
| Marginal ROAS (Return on Ad Spend) of +$1M in channel X? | MMM |
| Bid in Google Ads tomorrow? | MTA / DDA |
| Which ad-set wins inside campaign? | MTA |
| Reallocate across TV / digital / OOH? | MMM |
| Halo from TV → search? | MMM |
| Causal proof? | Incrementality |

---

## 📊 The 4 CFO (Chief Financial Officer) Charts

1. **Waterfall**, Baseline + per-channel incremental
2. **ROAS table**, Spend, incremental sales, ROAS per channel
3. **Response curves**, Per-channel saturation with current spend marked
4. **Optimized vs current**, Recommended reallocation

> **Don't show ROAS without saturation curves.** Reallocation depends on shape, not point.

---

## 💲 2026 Best-Practice Cadence

```
Quarterly      →  MMM refresh (Robyn / Meridian / PyMC)
Within channel →  MTA / DDA / platform optimizer
5-10% spend    →  Ongoing incrementality tests
```

---

## 🏆 Exam Power Phrases

✅ Often correct:

- "MMM is immune to ATT / ITP because it's aggregate..."
- "Calibrate MMM with incrementality test results..."
- "Marginal ROAS < blended ROAS due to saturation..."
- "Robyn outputs multiple Pareto-optimal models..."
- "Baseline accounts for 50–80% of revenue..."

❌ Often wrong:

- "MMM is dead because we have MTA..."
- "MMM needs 5+ years of data..."
- "One MMM ROAS number is absolute truth..."
- "Robyn is biased toward Meta channels..."

---

## ⚠️ Anti-Patterns

- ❌ One half-life across all channels
- ❌ Reporting MMM output without confidence intervals
- ❌ Ignoring saturation curves; only reading ROAS
- ❌ Not calibrating with incrementality
- ❌ Sharing only Robyn's *first* model output (it's one of many Pareto-optimal options)
- ❌ Confusing baseline with last year's sales

---

## ✏️ Quick Self-Check

1. Canonical MMM equation? ___
2. Ad-stock formula + half-life formula? ___
3. Hill function, what does K mean? ___
4. Robyn vs Meridian, one difference? ___
5. 2026 cadence? ___

---

➡️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (covers Modules 1–5), then [Module 6](../Module-06-Predictive-Analytics-LTV (Lifetime Value)-Churn/Reading.md)
