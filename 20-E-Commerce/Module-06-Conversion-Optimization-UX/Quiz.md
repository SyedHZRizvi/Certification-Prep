# ✏️ Module 6 Quiz: Conversion Optimization & UX

> **Instructions:** Answer all 25 questions. Aim for 21/25 minimum.

---

### Q1. The standard A/B testing power target: *(Remember)*
A. 50%
B. 80%
C. 99%
D. Variable

---

### Q2. P < 0.05 means: *(Understand)*
A. 95% probability the variant is better
B. If the null hypothesis were true, < 5% probability of seeing this data
C. The variant always wins
D. Sample size is sufficient

---

### Q3. Sample-Ratio Mismatch (SRM) indicates: *(Apply)*
A. The test is conclusive
B. The randomization is broken; stop the test
C. The variant won
D. Traffic is too low

---

### Q4. Peeking at A/B test results: *(Understand)*
A. Is fine
B. Inflates the false-positive rate
C. Speeds up wins
D. Required

---

### Q5. Core Web Vitals: LCP target is: *(Remember)*
A. ≤ 1.0 seconds
B. ≤ 2.5 seconds
C. ≤ 5.0 seconds
D. No threshold

---

### Q6. INP replaced FID on: *(Remember)*
A. January 2020
B. March 12, 2024
C. 2018
D. Never

---

### Q7. INP target threshold: *(Remember)*
A. ≤ 100 ms
B. ≤ 200 ms
C. ≤ 500 ms
D. ≤ 1 second

---

### Q8. CLS target: *(Remember)*
A. ≤ 0.1
B. ≤ 1.0
C. ≤ 0.5
D. ≤ 0.01

---

### Q9. Baymard 2024 finds the #1 cited reason for cart abandonment: *(Remember)*
A. Bad design
B. Shipping cost (49%)
C. Slow site
D. No reviews

---

### Q10. A high-converting PDP should have: *(Apply)*
A. 1 image
B. 6-12 images with zoom, video, reviews, sticky ATC
C. Just text
D. No price

---

### Q11. Booking.com runs how many A/B tests/year? *(Remember)*
A. 100
B. 1,000+
C. 50,000
D. 5

---

### Q12. The percentage of Booking.com tests that show statistically significant negative effects: *(Analyze)*
A. 0%
B. ~20% (proof of honest math)
C. 50%
D. 95%

---

### Q13. The CRO test cycle: *(Understand)*
A. Observe → Hypothesize → Design → Sample-size calc → Run → Analyze → Ship/kill
B. Just ship variants
C. Observe → Ship
D. Calculate AOV only

---

### Q14. Apparel DTC CVR top-quartile range: *(Apply)*
A. 0.5%
B. 4-6%
C. 15%+
D. < 1%

---

### Q15. Microsoft Clarity is: *(Remember)*
A. Paid heatmap tool
B. Free + unlimited heatmaps + session replays
C. CRO test platform
D. Search vendor

---

### Q16. Algolia is: *(Remember)*
A. A PIM
B. A site-search vendor (with NeuralSearch AI semantic since 2023)
C. A payment processor
D. An OMS

---

### Q17. Yotpo reviews CVR lift on products with 100+ reviews: *(Apply)*
A. 1.1x baseline
B. 2.8x baseline
C. 10x baseline
D. No effect

---

### Q18. The 0-result search rate target: *(Apply)*
A. < 1.5%
B. < 25%
C. < 50%
D. No target

---

### Q19. Sample size formula approximation (binary metric): *(Apply)*
A. n × CVR
B. 16 × p(1-p) / δ²
C. CVR / power
D. Revenue / lift

---

### Q20. A 10% relative lift on 2.5% baseline CVR requires roughly per variant: *(Apply)*
A. 1,000 visitors
B. 62,000 visitors
C. 5 million visitors
D. Any sample size

---

### Q21. Express checkout buttons (Shop Pay, Apple Pay) convert how much higher than form-fill on mobile? *(Apply)*
A. 1-5%
B. 35-45%
C. 200%+
D. Negative

---

### Q22. The Walmart 2012 case study showed every 1 second of page-load improvement: *(Remember)*
A. No effect
B. 2% conversion lift
C. 50% lift
D. Reduced bounce only

---

### Q23. Personalization platforms typically lift conversion: *(Apply)*
A. 0-1%
B. 3-8% (honest)
C. 50%+
D. 200%

---

### Q24. The single most important practice for CRO discipline: *(Evaluate)*
A. Pre-registered hypothesis + sample-size + guardrail metrics + SRM check before reading
B. Just ship many variants
C. Use only AI tools
D. Skip the math

---

### Q25. Guest checkout: *(Evaluate)*
A. Should always require account creation
B. Should always be offered (24% of abandonments cite required account)
C. Doesn't matter
D. Only for B2B

---

## 🎯 Answers + Explanations

### Q1: **B. 80%**
Standard statistical power target. Under-powered tests miss real effects.

### Q2: **B. If the null hypothesis were true, < 5% probability of seeing this data**
The classic misinterpretation. P-values don't tell you the probability of the variant being better.

### Q3: **B. The randomization is broken; stop the test**
SRM signals broken randomization. If actual split deviates significantly from planned, the test is invalid.

### Q4: **B. Inflates the false-positive rate**
Peeking at tests mid-flight is the #1 cause of false-positive winners.

### Q5: **B. ≤ 2.5 seconds**
Google Core Web Vital LCP threshold for "Good." Above 4.0 = Poor.

### Q6: **B. March 12, 2024**
INP replaced FID as a Core Web Vital metric on March 12, 2024.

### Q7: **B. ≤ 200 ms**
INP threshold for "Good." Measures responsiveness to user input.

### Q8: **A. ≤ 0.1**
Cumulative Layout Shift threshold for "Good." Visual stability.

### Q9: **B. Shipping cost (49%)**
Baymard's most-cited cart abandonment reason.

### Q10: **B. 6-12 images with zoom, video, reviews, sticky ATC**
The Baymard-derived best-practice PDP.

### Q11: **B. 1,000+**
Booking.com's documented experimentation cadence by 2020.

### Q12: **B. ~20% (proof of honest math)**
Booking.com's negative-result rate is the indicator of valid experiment infrastructure.

### Q13: **A. Observe → Hypothesize → Design → Sample-size calc → Run → Analyze → Ship/kill**
The disciplined CRO cycle.

### Q14: **B. 4-6%**
Top-quartile apparel DTC CVR per Common Thread Collective / Klaviyo 2024.

### Q15: **B. Free + unlimited heatmaps + session replays**
Microsoft's free alternative to Hotjar; launched 2020, expanded heavily in 2023-2024.

### Q16: **B. A site-search vendor with NeuralSearch AI semantic since 2023**
Algolia is the industry-leading site-search vendor. NeuralSearch (semantic) launched 2023.

### Q17: **B. 2.8x baseline**
Yotpo 2024 data: 100+ reviews drives 2.8x baseline CVR vs 0-9 review products.

### Q18: **A. < 1.5%**
Best-in-class no-result rate. Fix with synonyms, "did you mean," fallback.

### Q19: **B. 16 × p(1-p) / δ²**
Standard approximation for binary metrics.

### Q20: **B. 62,000 visitors per variant**
The math: 16 × 0.025 × 0.975 / (0.0025)² ≈ 62,400.

### Q21: **B. 35-45%**
Wallet-driven checkout conversion lift vs manual card entry on mobile (Baymard 2024).

### Q22: **B. 2% conversion lift**
Walmart's 2012 case study: every 1 second improvement = 2% CVR lift. Still widely cited.

### Q23: **B. 3-8% (honest)**
Realistic personalization lift. Vendors often claim higher; rigorous tests show 3-8%.

### Q24: **A. Pre-registered hypothesis + sample-size + guardrail metrics + SRM check**
The Kohavi-discipline. Anything less is post-hoc storytelling.

### Q25: **B. Should always be offered (24% of abandonments cite required account)**
Baymard 2024: 24% of cart abandonments cite required account creation. Always offer guest checkout.

---

## 📊 Score Yourself

- 24-25/25 → 🏆 Mastered
- 21-23/25 → ✅ Solid
- 17-20/25 → ⚠️ Re-read weak parts
- <17/25 → 🔁 Re-read entire Reading.md

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7](../Module-07-Paid-Acquisition-E-Commerce/Reading.md)
