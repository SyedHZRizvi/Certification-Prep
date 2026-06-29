# 📋 Module 6 Cheat Sheet: Predictive Analytics, CLV (Customer Lifetime Value), Churn & Propensity

> One page. Print it. Tape it to your monitor.

---

## 💎 CLV Models

| Business type | Right model | Why |
|---------------|-------------|-----|
| Contractual (subscription) | AOV × Freq × Lifespan × Margin (or survival analysis) | Lifespan observable |
| Non-contractual (e-commerce) | BG/NBD + Gamma-Gamma | Probabilistic, per-customer |

### BG/NBD, what each letter means

```
B  = Beta       (dropout probability prior)
G  = Geometric  (post-purchase dropout)
NBD = Negative Binomial Distribution (purchase rate prior)
```

### BG/NBD inputs (per customer)

- **x** = repeat transactions (total - 1)
- **t_x** = recency (time of last transaction)
- **T** = observation window
- **monetary_value** = avg transaction value

### Python, `lifetimes`

```python
from lifetimes import BetaGeoFitter, GammaGammaFitter
bgf = BetaGeoFitter()
bgf.fit(s['frequency'], s['recency'], s['T'])
ggf = GammaGammaFitter()
ggf.fit(returning['frequency'], returning['monetary_value'])
s['clv_12mo'] = ggf.customer_lifetime_value(bgf, ...)
```

---

## 🚪 Churn Modeling

| Component | Default 2026 choice |
|-----------|---------------------|
| Model | LightGBM (or CatBoost) |
| Calibration | Isotonic or Platt scaling |
| Class imbalance | class_weight or focal loss |
| Evaluation | AUC-ROC + lift @ top decile + Brier score + calibration plot |

**Operational bars:**
- AUC > 0.80 (>0.85 great, >0.95 suspicious)
- Lift @ top decile ≥ 3×
- Brier score < 0.05

---

## 🎯 Propensity vs Uplift

| | Propensity | Uplift |
|---|------------|--------|
| Predicts | Who will buy | Who will buy *because of* marketing |
| Data | Observational | Randomized treatment / control |
| Library | sklearn / LightGBM | causalml / scikit-uplift |
| Target | Top decile (often wrong!) | Persuadables only |

### The 4 uplift segments

| | No marketing | With marketing | Market to? |
|---|--------------|----------------|------------|
| Persuadables | No | Yes | ✅ YES |
| Sure Things | Yes | Yes | ❌ NO (waste) |
| Lost Causes | No | No | ❌ NO |
| Do-Not-Disturbs / Sleeping Dogs | Yes | No | ❌ NO (backfire) |

---

## 📐 RFM Quick Reference

```
R = Recency   (5 = bought in last 7 days, 1 = > 180 days)
F = Frequency (5 = >12 buys/year, 1 = 1 buy total)
M = Monetary  (5 = AOV > $200, 1 = < $25)
```

| Segment | RFM | Action |
|---------|-----|--------|
| Champions | 4-5/4-5/4-5 | Refer, advocate |
| Loyal | 3-5/4-5/2-5 | Cross-sell |
| Recent | 4-5/1-2/1-3 | Onboard |
| At-risk | 1-3/4-5/4-5 | Win-back |
| Lost | 1-2/1-2/1-2 | Reactivate or sunset |

---

## 🤖 No-Code AutoML (2026)

| Tool | Stack | Use case |
|------|-------|----------|
| DataRobot | Standalone | General AutoML |
| Vertex AI Tabular | GCP (Google Cloud Platform) / BigQuery | If on GCP |
| Amazon Personalize | AWS (Amazon Web Services) | Managed recsys |
| Snowflake Cortex ML | Snowflake | SQL (Sales Qualified Lead)-native ML |
| Microsoft Fabric AutoML | Azure | Microsoft stack |
| Hightouch Match Booster | Reverse-ETL native | Audience scoring |

---

## 🔢 The Strategist's 6-Step Playbook

```
1. Build 12-month CLV model (BG/NBD + GG)
2. Distribution check (top/bottom deciles)
3. Set CAC (Customer Acquisition Cost) ceiling (e.g., 30% of CLV)
4. Activate (top decile → bid up; bottom → exclude)
5. Build 30-day churn model + retention budget
6. Measure with quarterly geo-holdout
```

---

## 🏆 Exam Power Phrases

✅ Often correct:

- "BG/NBD for non-contractual customer-base analysis..."
- "Calibrate before using as a probability threshold..."
- "Target middle deciles for marketing, top deciles are sure things..."
- "Uplift modeling finds Persuadables..."
- "LTV (Lifetime Value):CAC ≥ 3:1 is the sustainability floor..."

❌ Often wrong:

- "Target the top decile in paid ads..."
- "AUC = 1.0 is great..."
- "RFM is obsolete..."
- "All AutoML tools work the same..."
- "Propensity = uplift..."

---

## ⚠️ Anti-Patterns

- ❌ Marketing aggressively to "Sure Things"
- ❌ Reporting uncalibrated probabilities to ops teams
- ❌ Using simple CLV formula for non-contractual business
- ❌ Skipping the holdout test
- ❌ Trusting AutoML output without checking SHAP + calibration
- ❌ Reading lift only, ignoring calibration

---

## ✏️ Quick Self-Check

1. BG/NBD inputs? ___
2. AUC operational bar? ___
3. Four uplift segments? ___
4. Why target middle deciles? ___
5. LTV:CAC minimum? ___

---

➡️ [Module 7: AI Personalization at Scale](../Module-07-AI-Personalization-Scale/Reading.md)
