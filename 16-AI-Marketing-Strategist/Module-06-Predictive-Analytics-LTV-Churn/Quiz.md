# ✏️ Module 6 Quiz: Predictive Analytics, CLV, Churn & Propensity

> **Instructions:** 26 questions. No notes. Aim for 22/26 (85%).

---

## Questions

### Q1. Customer Lifetime Value (CLV) is BEST defined as: *(Remember)*
A. Annual revenue per customer
B. The total revenue (or profit) a single customer is expected to generate over the lifetime of their relationship with your business
C. Lifetime monthly recurring revenue
D. The first-year revenue from a customer

---

### Q2. The classic CLV formula AOV × Frequency × Lifespan × Margin works well for: *(Understand)*
A. All businesses
B. Contractual / steady-state businesses (subscriptions)
C. Non-contractual businesses
D. Only B2B

---

### Q3. The BG/NBD model is associated with which researchers? *(Remember)*
A. Kahneman & Tversky
B. Fader & Hardie
C. Pareto & Hardie
D. Christensen & Moore

---

### Q4. The "B" in BG/NBD stands for: *(Remember)*
A. Bayesian
B. Beta (the customer-dropout distribution)
C. Binomial
D. Block

---

### Q5. The BG/NBD model takes which four customer inputs? *(Remember)*
A. Age, income, geography, gender
B. x (repeat transactions), t_x (recency), T (observation time), monetary_value
C. R, F, M, channel
D. CTR, CVR, CPM, ROAS

---

### Q6. The companion model to BG/NBD for predicting monetary value is: *(Remember)*
A. Beta-Bernoulli
B. Gamma-Gamma
C. Hill-Saturation
D. Markov-Chain

---

### Q7. The canonical Python library for BG/NBD + Gamma-Gamma is: *(Remember)*
A. scikit-learn
B. lifetimes
C. tensorflow
D. pytorch

---

### Q8. An operationally useful churn model should achieve AUC of approximately: *(Remember)*
A. >0.55
B. >0.80 (>0.85 great)
C. =1.0
D. AUC doesn't matter

---

### Q9. The default production model class for churn in 2026 is typically: *(Remember)*
A. Logistic regression
B. Gradient-boosted trees (LightGBM, CatBoost)
C. Naïve Bayes
D. Linear regression

---

### Q10. Calibrating a churn model's probability output uses: *(Understand)*
A. Random sampling
B. Isotonic regression or Platt scaling
C. Min-max scaling
D. Z-score normalization

---

### Q11. A "lift @ top decile" of 3× means: *(Apply)*
A. Top decile is 3% of users
B. Top decile is 3 times more likely to churn than a random user from the base population
C. Model accuracy is 3%
D. 3% improvement vs baseline

---

### Q12. Uplift modeling differs from propensity modeling in that uplift predicts: *(Analyze)*
A. Who will buy
B. Who will buy because of the marketing intervention (Persuadables)
C. The churn probability
D. The CLV

---

### Q13. The four uplift segments are: *(Remember)*
A. Persuadables, Sure Things, Lost Causes, Do-Not-Disturbs (Sleeping Dogs)
B. Champions, Loyal, At-risk, Lost
C. Stars, Cash cows, Question marks, Dogs
D. Push, Pull, Anxiety, Habit

---

### Q14. "Sure Things" should be marketed to: *(Apply)*
A. Aggressively
B. Not at all, they'll convert anyway, ads waste impressions
C. With offers only
D. Via email only

---

### Q15. The canonical Python library for uplift modeling is: *(Remember)*
A. lifetimes
B. causalml (or scikit-uplift)
C. lightgbm
D. statsmodels

---

### Q16. The "T-learner" uplift approach: *(Understand)*
A. Uses a single model
B. Trains one model on treatment + one on control, then differences predictions
C. Is a survival model
D. Requires deep learning

---

### Q17. RFM stands for: *(Remember)*
A. Reach, Frequency, Monetary
B. Recency, Frequency, Monetary
C. Revenue, Frequency, Margin
D. Recurring, Free, Marketing

---

### Q18. An "RFM 555" customer is: *(Understand)*
A. A churned customer
B. A Champion, recent + frequent + high-value
C. A new customer
D. A low-value customer

---

### Q19. K-means clustering chooses optimal K via: *(Remember)*
A. Random
B. Elbow method (inertia) + silhouette score
C. Linear regression
D. The largest cluster

---

### Q20. Targeting the TOP decile of propensity scores in paid ads is typically: *(Analyze)*
A. The best strategy
B. Wasteful, these users convert anyway; the middle deciles have higher incremental value
C. Required by law
D. The default for all platforms

---

### Q21. Stitch Fix's "3rd Fix" activation threshold means: *(Apply)*
A. Their best customers
B. Customers who reach 3 Fixes have ~85% retention; those who don't have ~11%
C. A pricing tier
D. A free-trial period

---

### Q22. DataRobot, Vertex AI Tabular AutoML, and Amazon Personalize are all: *(Remember)*
A. CDPs
B. No-code / managed-ML tools usable for marketing predictive models
C. CRMs
D. MMM tools

---

### Q23. The 6-step strategist's predictive playbook concludes with: *(Apply)*
A. Saving the model to disk
B. Measuring incremental impact with a quarterly geo-holdout
C. Buying more ads
D. Publishing a blog post

---

### Q24. A LightGBM model output of `0.6` should be interpreted as a 60% probability: *(Apply)*
A. Always, LightGBM is auto-calibrated
B. Only after calibration (isotonic / Platt). Raw LightGBM outputs are often miscalibrated.
C. Never, LightGBM doesn't output probabilities
D. With at least 1M training examples

---

### Q25. A "Sleeping Dog" or "Do-Not-Disturb" customer in uplift modeling is one who: *(Understand)*
A. Buys without marketing AND buys with marketing
B. Would buy without marketing but actively turns away if you market to them
C. Doesn't buy in either case
D. Is the highest-value customer

---

### Q26. LTV:CAC ratio of 3:1 is generally considered: *(Understand)*
A. The minimum sustainability threshold
B. Excessive
C. Bankrupting
D. The legal cap

---

## 🎯 Answers + Explanations

### Q1: **B. Total expected revenue/profit over the relationship**
The canonical definition. CLV is *per customer*, not per cohort.

### Q2: **B. Contractual / steady-state businesses**
The simple formula assumes observable churn (subscription cancel) and stable behavior. Non-contractual (e-commerce) requires probabilistic models like BG/NBD.

### Q3: **B. Fader & Hardie**
Peter Fader (Wharton) and Bruce Hardie (LBS). The 2005 paper is the canonical reference.

### Q4: **B. Beta (dropout distribution)**
B = Beta (the prior on customer dropout probability after each purchase). G = Geometric (the dropout itself). NBD = Negative Binomial Distribution (the purchase rate distribution).

### Q5: **B. x, t_x, T, monetary_value**
The four required customer-level inputs for BG/NBD + Gamma-Gamma.

### Q6: **B. Gamma-Gamma**
Models the monetary value per transaction. Companion to BG/NBD.

### Q7: **B. lifetimes**
Cameron Davidson-Pilon's library. `pip install lifetimes`. There's also a PyMC-Marketing alternative for the Bayesian variant.

### Q8: **B. >0.80**
Below 0.70 the model is barely better than random. >0.85 is great. Beware of >0.95, likely data leakage.

### Q9: **B. Gradient-boosted trees**
LightGBM and CatBoost dominate production churn modeling in 2026.

### Q10: **B. Isotonic regression or Platt scaling**
The two canonical calibration methods. CalibratedClassifierCV in scikit-learn provides both.

### Q11: **B. 3× more likely than base rate**
Operationally useful threshold. <2× is too weak; >5× often indicates overfitting.

### Q12: **B. Who will buy because of the intervention**
Propensity = who will buy. Uplift = who buys *because* of marketing. The latter requires randomized treatment data.

### Q13: **A. Persuadables, Sure Things, Lost Causes, Do-Not-Disturbs**
Memorize all four. Strategist's grid.

### Q14: **B. Not at all, wasted impressions**
Sure Things buy without marketing. Marketing to them increases nothing except cost.

### Q15: **B. causalml (or scikit-uplift)**
Uber's causalml is the most-cited; scikit-uplift is the lighter alternative.

### Q16: **B. Two models, then difference**
T-learner = train treatment + control separately, difference predictions. S-learner = single model with treatment indicator as feature.

### Q17: **B. Recency, Frequency, Monetary**
Reach is sometimes confused with recency on the exam. Memorize: **Recency, Frequency, Monetary**.

### Q18: **B. Champion**
Highest tier in all three dimensions: recent, frequent, high-value.

### Q19: **B. Elbow method + silhouette score**
Inertia (sum of squared distances) drops as K increases; the "elbow" indicates diminishing returns. Silhouette measures cluster cohesion + separation.

### Q20: **B. Wasteful, target middle deciles**
The strategist's anti-pattern correction. Top deciles convert anyway; middle deciles have the highest *incremental* marketing value.

### Q21: **B. 85% vs 11% retention**
The activation threshold concept generalizes, every product has one, find yours.

### Q22: **B. No-code / managed-ML tools**
The 2026 no-code stack for marketing predictive modeling.

### Q23: **B. Geo-holdout incrementality measurement**
The 6-step playbook ends with causal measurement of the program's incremental impact.

### Q24: **B. Only after calibration**
LightGBM outputs are typically *scores*, not probabilities. Calibrate before using as a probability threshold for marketing actions.

### Q25: **B. Buys without marketing, but turns away when marketed**
The hidden segment that destroys conversion when you over-message. Common in luxury and B2B.

### Q26: **A. Minimum sustainability threshold**
Common bar from VC investing and SaaS finance. <3:1 = unsustainable acquisition. >5:1 may indicate under-investment.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Strategist-grade predictive fluency.
- 22–23/26 → ✅ Solid.
- 18–21/26 → ⚠️ Re-read BG/NBD + uplift sections.
- <18/26 → 🔁 Re-read the whole module.

---

## 🃏 Add To Your Flashcards

- BG/NBD acronym meaning
- 4 BG/NBD inputs
- `lifetimes` Python library
- AUC operational bar
- Calibration methods (isotonic / Platt)
- Lift @ top decile bar (≥3×)
- Uplift 4 segments
- T-learner vs S-learner
- RFM definition
- Why target middle deciles
- LTV:CAC ≥3:1 bar

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7](../Module-07-AI-Personalization-Scale/Reading.md)
