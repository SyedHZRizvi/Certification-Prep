# ✏️ Module 8 Quiz: Audience Intelligence & Cohorts

> **Instructions:** 26 questions. No notes. Aim for 22/26 (85%).

---

## Questions

### Q1. A cohort is BEST defined as: *(Remember)*
A. A group of users who share an attribute over a period (typically acquisition time)
B. The top 10% of customers
C. Anyone who logged in this week
D. A demographic segment

---

### Q2. In a cohort matrix, what does M0 represent? *(Remember)*
A. The month of acquisition
B. The first month after acquisition
C. The current calendar month
D. The last observation

---

### Q3. An "L-curve" retention shape is characterized by: *(Understand)*
A. A steady linear decline
B. A sharp early dropoff followed by a plateau
C. A bell shape
D. A rise then fall

---

### Q4. A "smile curve" retention shape suggests: *(Understand)*
A. The product is failing
B. Some users return after an initial dip (habit formation / resurrection)
C. Linear decline
D. No churn

---

### Q5. The Spotify Wrapped retention story illustrates that: *(Apply)*
A. Every user retains the same
B. Specific week-1 behaviors (creating a playlist, following ≥3 artists) can produce ~5× retention multipliers
C. Free users always churn
D. Retention only depends on demographics

---

### Q6. "Cohort-of-one" means: *(Understand)*
A. A cohort with only one user
B. A failed cohort
C. Treating each user as their own behavioral cohort with rich attribute history
D. The first month of acquisition

---

### Q7. Average retention across all cohorts is misleading because: *(Analyze)*
A. The numbers are too small
B. It hides high/low extremes, e.g., a 50% blended retention can hide 90% organic + 10% paid
C. Average is always 0
D. Cohorts don't exist

---

### Q8. A "cliff" in a retention curve typically signals: *(Analyze)*
A. Random noise
B. A paywall, trial expiry, or specific churn trigger at that tenure point
C. Improving product
D. Network outage

---

### Q9. NRR (Net Revenue Retention) is calculated as: *(Remember)*
A. (start ARR + expansion − contraction − churn) / start ARR
B. (revenue this quarter) / (revenue last quarter)
C. CLV / CAC
D. (start MRR) / (end MRR)

---

### Q10. Best-in-class B2B SaaS NRR is typically: *(Remember)*
A. >50%
B. >120%
C. <60%
D. Exactly 100%

---

### Q11. Look-alike audiences are seeded by: *(Understand)*
A. Random sampling
B. A seed audience of high-value users; the platform finds similar non-customers
C. Demographics only
D. Geographic radius

---

### Q12. Meta's Advantage+ Audience is BEST described as: *(Understand)*
A. Manual lookalike with extra controls
B. ML-driven audience that Meta's model chooses given your conversion signals, the 2024+ default
C. The same as Custom Audience
D. Required by GDPR

---

### Q13. In 2026, the strategist's value-add for paid social targeting is: *(Analyze)*
A. Building beautiful manual lookalike segments
B. Feeding the platform high-quality conversion signals (e.g., LTV-weighted events) and letting its targeting model do the work
C. Manually approving every ad placement
D. None, the platform does it all

---

### Q14. A "death spiral" pattern in churn cohorts shows: *(Understand)*
A. Sudden cancellation with no warning
B. Gradual usage decline in weeks before churn (e.g., −12% by W-8, −51% by W-2)
C. A spike then drop
D. Inverse correlation with revenue

---

### Q15. To present cohort results to a CEO, the strategist should NOT use: *(Analyze)*
A. A heat-map cohort triangle
B. The blended (single-line) aggregate retention curve as the headline
C. A retention-curve overlay of recent cohorts
D. A behavioral-driver waterfall

---

### Q16. An LTV cohort curve plots: *(Understand)*
A. Retention by months since acquisition
B. Cumulative revenue per acquired user, by months since acquisition
C. CAC
D. Marketing spend

---

### Q17. SQL cohort analysis on GA4 BigQuery data uses which join key? *(Apply)*
A. `user_pseudo_id` joining acquisition month to activity month
B. IP address
C. The session start parameter
D. Session count

---

### Q18. The "activation event / threshold" is: *(Understand)*
A. The first impression
B. A behavior that, once performed, dramatically improves the user's retention probability
C. The free-trial expiry
D. Payment

---

### Q19. The "cohort × segment" pattern (e.g., "Jan 2026 paid-social cohort in NYC") is sometimes called: *(Remember)*
A. A degenerate cohort
B. A dimensional cohort
C. A multi-step funnel
D. A user property

---

### Q20. Stitch Fix's "3rd Fix" example is best classified as a: *(Apply)*
A. Acquisition event
B. Activation event / threshold
C. Churn event
D. Pricing tier

---

### Q21. Cohort-based pricing means: *(Understand)*
A. Random pricing
B. Differentiated pricing or offers based on cohort LTV / retention profile
C. Pricing by demographics
D. Single price for all

---

### Q22. Reactivation timing the "sweet spot" is best identified by: *(Apply)*
A. A board meeting
B. Cohort analysis showing the inflection where win-back ROI peaks (often months 6–12 of inactivity, varies by business)
C. The CEO's intuition
D. Quarterly random tests

---

### Q23. The "average user" journey map is: *(Analyze)*
A. The right way to plan marketing
B. A trap, averages hide segment differences; map per job-persona / cohort instead
C. Required by GDPR
D. Always the most actionable

---

### Q24. ChartMogul, Mixpanel, and Amplitude all provide: *(Remember)*
A. CDPs
B. Cohort analysis tooling (alongside other product analytics)
C. MMM
D. Reverse ETL

---

### Q25. GRR (Gross Revenue Retention) differs from NRR in that GRR: *(Understand)*
A. Includes expansion
B. Excludes expansion, measures only retention minus contraction and churn
C. Is identical to NRR
D. Is only used in B2C

---

### Q26. The strategist's weekly cadence should include: *(Analyze)*
A. Building a new MMM
B. A cohort triangle review of the most recent acquisition cohorts vs prior cohorts to spot retention drift early
C. Daily MMM re-runs
D. None

---

## 🎯 Answers + Explanations

### Q1: **A. Group sharing an attribute over a period**
Standard definition. Acquisition time is the most common dimension; campaign / channel / geo are other common dimensions.

### Q2: **A. Month of acquisition**
M0 = month of acquisition. M1 = next month, etc. Memorize this convention.

### Q3: **B. Sharp early dropoff then plateau**
Most consumer apps. The plateau represents the "core" retained users.

### Q4: **B. Some users return after a dip**
Habit-formation signal. Common in news apps, social apps, fitness apps.

### Q5: **B. ~5× retention multipliers from specific behaviors**
Spotify found playlist creation + following ≥3 artists in week 1 multiplied long-term retention by ~5× over "search-only" users.

### Q6: **C. Each user as their own cohort with rich attribute history**
The 2026 default, modern CDPs allow per-user cohorting on multiple dimensions.

### Q7: **B. Hides high/low extremes**
The classic cohort lesson. Always disaggregate.

### Q8: **B. Paywall, trial expiry, or specific churn trigger**
Cliffs almost always correspond to a *product moment*, not random noise. Find the moment.

### Q9: **A. (start ARR + expansion − contraction − churn) / start ARR**
The standard NRR formula. >100% means existing customers grow even ignoring new sales.

### Q10: **B. >120%**
Best-in-class B2B SaaS. Snowflake, Datadog, Cloudflare, Twilio at various points reported NRR >130%.

### Q11: **B. Seed audience → platform finds similar non-customers**
The classic lookalike mechanic. Quality depends entirely on seed quality.

### Q12: **B. ML-driven 2024+ default**
Advantage+ Audience uses Meta's own model to choose targets given your conversion signals, gradually replacing manual Lookalikes.

### Q13: **B. Feeding quality conversion signals**
The strategist's job has moved from building targeting segments to designing measurement that feeds the platform.

### Q14: **B. Gradual usage decline in weeks pre-churn**
The pre-warning pattern. Gives the win-back team a 2–4 week intervention window.

### Q15: **B. Blended aggregate retention curve as headline**
Aggregates hide the story. Lead with the disaggregated view.

### Q16: **B. Cumulative revenue per acquired user**
LTV curves let you compare acquisition channels and forecast payback.

### Q17: **A. user_pseudo_id joining acquisition month to activity month**
Standard SQL cohort join. Replace `user_pseudo_id` with `user_id` if you have authenticated user data.

### Q18: **B. Behavior that dramatically improves retention**
Spotify's playlist creation; Slack's 2,000-message threshold; Facebook's friend-7-days.

### Q19: **B. Dimensional cohort**
Slicing cohorts on additional dimensions (channel, geo, plan), the 2026 default.

### Q20: **B. Activation event / threshold**
3rd Fix = the activation threshold. Below 3, churn. Above 3, ~85% retention.

### Q21: **B. Differentiated based on cohort profile**
Sophisticated retention orgs use cohort signals to set retention budgets and offers.

### Q22: **B. Cohort analysis identifies the win-back sweet spot**
Empirically. Don't guess the timing, measure where ROI peaks.

### Q23: **B. Trap, map per persona / cohort**
The strategist's discipline: never let "average" be the unit of analysis.

### Q24: **B. Cohort tooling**
All three offer cohort analytics in their product (along with funnels, retention, paths).

### Q25: **B. GRR excludes expansion**
GRR = (start − contraction − churn) / start. NRR adds expansion.

### Q26: **B. Weekly cohort triangle review**
Cohort drift can take a quarter to spot if you only check quarterly. Weekly cadence catches it early.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Strategist-grade cohort thinking.
- 22–23/26 → ✅ Solid.
- 18–21/26 → ⚠️ Re-read the cohort-matrix + retention-shape sections.
- <18/26 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- Cohort matrix structure (M0, M1, ...)
- L-curve / Smile / Cliff
- Cliff = paywall / trial / churn trigger
- NRR formula + >120% best-in-class bar
- GRR vs NRR
- Cohort-of-one
- Activation event examples (Stitch Fix 3rd Fix, Slack 2k msgs, FB friend-7)
- Look-alike vs Advantage+ Audience
- Death spiral pre-churn pattern
- "Cohort × segment" = dimensional cohort

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 9](../Module-09-Privacy-First-Measurement/Reading.md)
