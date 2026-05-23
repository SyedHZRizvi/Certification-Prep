# ✏️ Module 5 Quiz: Marketing Mix Modeling

> **Instructions:** 28 questions. No notes. Aim for 24/28 (86%).

---

## Questions

### Q1. Marketing Mix Modeling (MMM) operates on what data granularity? *(Remember)*
A. User-level event data
B. Aggregate (weekly or daily) channel-level data
C. Individual ad impressions
D. Cookie-level data

---

### Q2. MMM is "immune" to which 2024–2026 privacy headwinds? *(Understand)*
A. None — it suffers like MTA does
B. ITP, ATT, third-party-cookie loss — because MMM does not use user-level data
C. Only ITP
D. Only ATT

---

### Q3. The ad-stock transformation models: *(Understand)*
A. The relationship between spend and impression
B. The decaying, carry-over effect of past advertising on current sales
C. Saturation
D. Click-through rate

---

### Q4. If λ (the geometric ad-stock decay parameter) equals 0.5, the half-life is: *(Apply)*
A. 0.5 weeks
B. 1 week
C. 2 weeks
D. 4 weeks

---

### Q5. The typical half-life of paid search ad-stock is: *(Remember)*
A. 1–2 days
B. 1–2 weeks
C. 4–8 weeks
D. 12+ weeks

---

### Q6. The typical half-life of TV brand-campaign ad-stock is: *(Remember)*
A. 1–2 days
B. 1–2 weeks
C. 8–12 weeks
D. 1 day

---

### Q7. The Hill saturation function is: *(Remember)*
A. `Hill(x) = x^α / (x^α + K^α)`
B. `Hill(x) = a + b·x`
C. `Hill(x) = e^(-x)`
D. `Hill(x) = log(x)`

---

### Q8. The "K" parameter in the Hill function represents: *(Understand)*
A. The maximum effect
B. The half-saturation point (spend level at which 50% of max impact is achieved)
C. The shape parameter
D. The decay rate

---

### Q9. The "baseline" in an MMM decomposition refers to: *(Understand)*
A. The first week of sales
B. The "would have happened anyway" sales not driven by paid marketing
C. The smallest channel's contribution
D. Last year's total

---

### Q10. Robyn is built primarily in: *(Remember)*
A. R (with a Python port in development)
B. Python only
C. Excel
D. Java

---

### Q11. Google's Meridian is built in: *(Remember)*
A. R
B. Python with TensorFlow Probability
C. SAS
D. Stata

---

### Q12. A key Meridian feature that differentiates it from Robyn is: *(Understand)*
A. It only supports digital channels
B. Native Reach & Frequency (R&F) inputs, not just spend
C. It is closed-source
D. It runs only on Google Cloud

---

### Q13. The typical *minimum* MMM data requirement is: *(Remember)*
A. 6 months of monthly data
B. 2 years of weekly data
C. 10 years of daily data
D. 1 year of hourly data

---

### Q14. A Bayesian MMM gives you: *(Understand)*
A. A single point estimate per coefficient
B. Posterior distributions over parameters (allowing confidence-interval reporting)
C. Only the mean
D. The same output as OLS

---

### Q15. A "Pareto-optimal" model in Robyn output is: *(Understand)*
A. A model on the Pareto front of (NRMSE error) vs (decomp.RSSD decomposition stability)
B. A model with the lowest error
C. A model with the most channels
D. A model with the smallest R²

---

### Q16. Calibrating an MMM means: *(Understand)*
A. Tuning the colors of the charts
B. Constraining MMM coefficients using ground-truth incrementality test results
C. Re-running the model daily
D. Adding more channels

---

### Q17. The marginal ROAS of a channel is usually: *(Understand)*
A. Higher than the blended ROAS
B. Lower than the blended ROAS (due to diminishing returns)
C. The same as blended ROAS
D. Undefined

---

### Q18. A team's MMM says TV has 1.4× ROAS at current $20M spend. The saturation curve shows TV is "flat" at that point. The most likely recommendation: *(Apply)*
A. Increase TV spend by 50%
B. Decrease TV spend modestly because the marginal dollar has very low impact, and reallocate
C. Increase TV by 200%
D. Leave TV unchanged

---

### Q19. The Walmart 2022 holiday case illustrates that: *(Apply)*
A. TV is always the best channel
B. Mature MMM reallocates spend across channels and can deliver substantial incremental revenue lift on a flat budget
C. MMM is unnecessary
D. CFOs ignore MMM

---

### Q20. In an MMM output, "baseline" typically accounts for what fraction of revenue? *(Remember)*
A. 5–15%
B. 50–80% (typical range)
C. 95%+
D. Always 50%

---

### Q21. MMM is best for which question? *(Apply)*
A. "How do we bid in Google Ads tomorrow morning?"
B. "How should we allocate next quarter's budget across TV, digital, and OOH?"
C. "Which ad-set in this Meta campaign is winning?"
D. "Which user is most likely to churn next week?"

---

### Q22. The Broadbent 1979 paper is foundational for: *(Remember)*
A. CLV models
B. The ad-stock (carry-over) concept
C. Conversion-rate optimization
D. Privacy law

---

### Q23. An MMM "response curve" plots: *(Understand)*
A. CTR over time
B. Per-channel saturation: how output scales with spend
C. Brand sentiment
D. Pricing trends

---

### Q24. Two MMMs run on the same data by different teams will likely: *(Analyze)*
A. Produce identical output
B. Differ in coefficients due to different prior assumptions, channel definitions, or hyperparameters
C. Always converge to the same answer
D. Be undefined

---

### Q25. The PyMC code skeleton for MMM uses what type of regression structure? *(Understand)*
A. Bayesian hierarchical regression with adstock + Hill saturation transformations
B. Linear OLS
C. Logistic regression
D. K-means clustering

---

### Q26. The 2026 best practice for combining MMM, MTA, and incrementality is: *(Analyze)*
A. Pick one and use only that
B. Quarterly MMM refresh + within-channel MTA for tactical + 5–10% spend on incrementality validation
C. Daily MMM only
D. Don't combine them

---

### Q27. A channel's contribution in the MMM waterfall is: *(Understand)*
A. Its total spend
B. The incremental sales attributed to that channel (not the spend, and not the total)
C. The ROAS
D. The number of impressions

---

### Q28. The CFO will care MOST about which MMM chart for budget decisions? *(Analyze)*
A. Color palette
B. Saturation curves (showing diminishing returns) + optimized-vs-current allocation
C. Total spend
D. Number of channels

---

## 🎯 Answers + Explanations

### Q1: **B. Aggregate weekly/daily channel-level data**
MMM does not use user-level data. This is what makes it immune to user-level privacy restrictions.

### Q2: **B. ITP, ATT, third-party-cookie loss**
Because MMM aggregates spend and outcome at the channel level, individual user identifiers are never required.

### Q3: **B. Decaying carry-over effect**
Broadbent 1979. Ad-stock = today's spend + (decay × yesterday's ad-stock).

### Q4: **B. 1 week**
`half-life = log(0.5) / log(0.5) = 1`. Memorize: λ=0.5 → 1-week half-life.

### Q5: **A. 1–2 days**
Paid search is intent-driven. The carry-over is short — users who searched a query and didn't click rarely come back later via the ad's residual effect.

### Q6: **C. 8–12 weeks**
Brand TV builds brand memory; its effect persists much longer than direct-response.

### Q7: **A. `x^α / (x^α + K^α)`**
The Hill function. α controls shape; K is the half-saturation point.

### Q8: **B. Half-saturation point**
K is the spend level at which the Hill function equals 0.5 of maximum.

### Q9: **B. "Would have happened anyway" sales**
Baseline includes brand equity, distribution, seasonality, price — everything except current paid marketing.

### Q10: **A. R (Python port in dev)**
Robyn is R-native. Python port is in active development as of 2025–2026.

### Q11: **B. Python with TensorFlow Probability**
Meridian uses TFP for Bayesian inference under the hood.

### Q12: **B. Native R&F inputs**
Meridian was designed to take reach + frequency as native model inputs, not just spend dollars — important for TV, podcast, OOH.

### Q13: **B. 2 years of weekly data**
Standard floor. Below this, you can't separately identify seasonality + channel effects.

### Q14: **B. Posterior distributions over parameters**
This is the Bayesian advantage. You report "95% credible interval for paid-search ROAS is [2.1, 3.4]" — not a single number.

### Q15: **A. Pareto front of error vs decomposition stability**
Robyn outputs multiple Pareto-optimal models — the analyst picks among them based on business judgment.

### Q16: **B. Constraining coefficients using incrementality results**
Without calibration, MMM can drift. Incrementality tests act as ground-truth anchors.

### Q17: **B. Lower than blended (due to diminishing returns)**
The Hill saturation curve makes the next dollar always less effective than the average dollar.

### Q18: **B. Decrease modestly and reallocate**
Flat saturation curve = marginal dollar is doing very little. Reallocate to channels with steeper curves.

### Q19: **B. Mature MMM reallocates and lifts revenue on flat budget**
The canonical lesson. Reallocation, not budget growth, is where MMM creates value.

### Q20: **B. 50–80%**
The "would have happened" share. Marketers often underestimate baseline.

### Q21: **B. Quarterly budget allocation across channels**
MMM's sweet spot. Tactical bid decisions belong to MTA / DDA / platform optimizers.

### Q22: **B. The ad-stock concept**
Broadbent's "One way TV advertising works" (1979) introduced the canonical ad-stock formulation.

### Q23: **B. Per-channel saturation curve**
The response curve shows how additional spend translates to output, and where current spend sits.

### Q24: **B. Differ due to priors / definitions / hyperparameters**
No two MMMs are identical. The strategist's job is to defend choices.

### Q25: **A. Bayesian hierarchical regression with adstock + Hill**
Standard PyMC MMM structure.

### Q26: **B. Quarterly MMM + within-channel MTA + 5–10% incrementality**
The 2026 best-practice cadence.

### Q27: **B. Incremental sales attributed to the channel**
Channel contribution = the *incremental* sales the MMM attributes to that channel.

### Q28: **B. Saturation curves + optimized-vs-current allocation**
ROAS alone is insufficient; the CFO needs to see *where to reallocate* and *why*.

---

## 📊 Score Yourself

- 26–28/28 → 🏆 Ready to defend an MMM to a CFO.
- 24–25/28 → ✅ Solid.
- 20–23/28 → ⚠️ Re-read ad-stock + saturation + the decision tree.
- <20/28 → 🔁 Re-read the entire module + run a Robyn demo.

---

## 🃏 Add To Your Flashcards

- The canonical MMM equation
- Ad-stock formula + half-life formula
- Typical half-lives by channel
- Hill function with α and K
- Robyn vs Meridian — 2 differences
- Bayesian vs OLS — main advantage
- 2-year weekly data requirement
- Pareto-optimal model definition
- Calibration with incrementality
- 2026 measurement cadence

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (Modules 1–5), then [Module 6](../Module-06-Predictive-Analytics-LTV-Churn/Reading.md)
