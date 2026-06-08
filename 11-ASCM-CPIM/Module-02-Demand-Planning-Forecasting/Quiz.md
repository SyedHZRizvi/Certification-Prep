# ✏️ Module 2 Quiz: Demand Planning & Forecasting

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. This quiz has 8 calculation questions, work them on paper.
> Aim for 22/26 minimum.

---

## Questions

### Q1. Which is NOT one of the four classical components of demand? *(Remember)*
A. Trend
B. Cyclical
C. Seasonal
D. Inventory

---

### Q2. A product's sales double every December and halve every February. This pattern is BEST described as: *(Apply)*
A. Trend
B. Cyclical
C. Seasonal
D. Random

---

### Q3. A 4-month simple moving average is being computed. Demand for Jan–Apr was 80, 90, 100, 110. The forecast for May is: *(Apply)*
A. 90
B. 95
C. 100
D. 110

---

### Q4. A weighted moving average forecast is computed for the next month using demand of 100, 120, 140 and weights 0.2, 0.3, 0.5 (oldest to newest). The forecast is: *(Apply)*
A. 118
B. 122
C. 126
D. 130

---

### Q5. Exponential smoothing formula: F_(t+1) = α·D_t + (1−α)·F_t. If α = 0.3, F_t = 200, and D_t = 240, then F_(t+1) is: *(Apply)*
A. 208
B. 212
C. 216
D. 224

---

### Q6. Increasing the smoothing constant α makes the forecast: *(Understand)*
A. More smooth
B. Slower to respond to actual demand
C. More responsive to recent demand and noise
D. Less affected by recent demand

---

### Q7. Which forecasting method is BEST when a brand-new product has zero sales history? *(Apply)*
A. Simple moving average
B. Exponential smoothing
C. Delphi method
D. Linear regression on past sales

---

### Q8. MAD stands for: *(Remember)*
A. Mean Aggregate Deviation
B. Mean Absolute Deviation
C. Median Aggregate Difference
D. Maximum Allowable Deviation

---

### Q9. Given the following errors: -10, +5, +10, -20, +5, what is the MAD? *(Apply)*
A. -2
B. 5
C. 10
D. 50

---

### Q10. Using the same errors (-10, +5, +10, -20, +5), what is the cumulative bias (sum of errors)? *(Apply)*
A. 50
B. 0
C. -10
D. +10

---

### Q11. MAPE expresses forecast error as: *(Remember)*
A. A percentage of demand
B. Absolute units
C. Squared deviations
D. A ratio of supply to demand

---

### Q12. Tracking signal is calculated as: *(Remember)*
A. MAD ÷ Bias
B. Bias ÷ MAD
C. MAPE × n
D. MSE ÷ MAD

---

### Q13. A tracking signal of +5.2 over many periods typically means: *(Analyze)*
A. The forecast is unbiased and accurate
B. The forecast is consistently *under*-forecasting (positive bias indicates demand > forecast), model should be revised
C. The forecast is consistently over-forecasting
D. Random variation only

---

### Q14. Which forecast metric most strongly penalizes large individual errors? *(Understand)*
A. MAD
B. MAPE
C. MSE
D. Bias

---

### Q15. The forecasting aggregation principle states that forecasts are: *(Understand)*
A. Equally accurate at all levels of aggregation
B. More accurate at higher aggregation and longer time buckets
C. Most accurate at the daily SKU level
D. Most accurate at the shift × workstation level

---

### Q16. CPFR stands for: *(Remember)*
A. Collaborative Planning, Forecasting & Replenishment
B. Continuous Production, Forecasting & Review
C. Cooperative Procurement, Forecasting & Reorder
D. Centralized Planning, Fulfillment & Reporting

---

### Q17. The "bullwhip effect" describes: *(Remember)*
A. Demand variability *decreasing* upstream in a supply chain
B. Demand variability *amplifying* upstream in a supply chain
C. Inventory shrinkage caused by theft
D. Random shocks at the manufacturing level

---

### Q18. Which is a primary cause of the bullwhip effect? *(Understand)*
A. Sharing point-of-sale data with suppliers
B. Order batching, promotions, and rationing
C. Daily replenishment at retail
D. Vendor-managed inventory

---

### Q19. Cyclical demand patterns are BEST distinguished from seasonal patterns by: *(Understand)*
A. Cyclical repeats *within* a year; seasonal repeats *across* years
B. Cyclical repeats *across multiple years*; seasonal repeats *within* a year
C. They are the same
D. Cyclical is irregular; seasonal is monthly

---

### Q20. Which is a *qualitative* forecasting method? *(Remember)*
A. Exponential smoothing
B. Weighted moving average
C. Sales force composite
D. Linear regression

---

### Q21. A company uses linear regression Y = 50 + 0.8·X where X is advertising spend in $k. If next month's planned ad spend is $300k, the forecast is: *(Apply)*
A. 240
B. 270
C. 290
D. 350

---

### Q22. Compare these two forecasts for the same actual demand of 100:

- Forecast A predicted 105 (error +5)
- Forecast B predicted 80 (error -20)

Which forecast is more accurate by absolute error? *(Analyze)*
A. Forecast A
B. Forecast B
C. Both are equally accurate
D. Cannot be determined

---

### Q23. A team uses α = 0.05 in exponential smoothing. They notice the forecast barely moves even after a 30% demand jump. What should they do? *(Evaluate)*
A. Decrease α further
B. Switch to a different product
C. Increase α to make the forecast more responsive
D. Discard exponential smoothing entirely

---

### Q24. Pyramid forecasting reconciles: *(Understand)*
A. Top-down and bottom-up forecasts at multiple aggregation levels
B. Demand and supply
C. Forecast and budget
D. Order qualifiers and winners

---

### Q25. In a simple multiplicative decomposition model, a forecast is constructed by multiplying: *(Remember)*
A. T × C × S × R
B. T + C + S + R
C. Demand × Lead time × Cost
D. EOQ × Frequency

---

### Q26. The most common reason a forecasting team should *NOT* simply switch to a more complex model is: *(Evaluate)*
A. Complex models always cost more
B. Simple models (SMA, exp smoothing) often beat complex models on noisy real-world demand
C. Complex models are illegal
D. Complex models require certifications

---

## 🎯 Answers + Explanations

### Q1: **D. Inventory**
The four components are Trend, Cyclical, Seasonal, Random (TCSR). Inventory is a *result* of demand decisions, not a demand component.

### Q2: **C. Seasonal**
Within-year repeating pattern = seasonal. Cyclical would repeat over *multiple years* (e.g., construction following the economic cycle).

### Q3: **B. 95**
(80 + 90 + 100 + 110) / 4 = 380 / 4 = **95**. An SMA is just the arithmetic mean over the window.

### Q4: **C. 126**
WMA = 0.2·100 + 0.3·120 + 0.5·140 = 20 + 36 + 70 = **126 units**.

### Q5: **B. 212**
F = 0.3 × 240 + 0.7 × 200 = 72 + 140 = **212**.

### Q6: **C. More responsive to recent demand and noise**
Higher α weights the most recent observation more heavily. The trade-off is responsiveness vs noise sensitivity.

### Q7: **C. Delphi method**
Delphi uses anonymous rounds of expert opinion. Time-series methods need data; you have none for a brand-new product.

### Q8: **B. Mean Absolute Deviation**
Average of the absolute errors. Units = same as demand units.

### Q9: **C. 10**
|−10| + |+5| + |+10| + |−20| + |+5| = 10 + 5 + 10 + 20 + 5 = 50. MAD = 50 / 5 = **10**.

### Q10: **C. -10**
−10 + 5 + 10 − 20 + 5 = **−10**. The forecast has slightly *over-forecasted* on net.

### Q11: **A. A percentage of demand**
MAPE = average of (|error| / demand) × 100. Useful for comparing forecasts across different demand magnitudes.

### Q12: **B. Bias ÷ MAD**
Tracking signal = cumulative forecast error (bias) ÷ MAD. Most texts flag the model when |TS| > 4 (some use ±6).

### Q13: **B. The forecast is consistently *under*-forecasting**
A *positive* bias (TS > 0) means cumulative errors are positive i.e., Actual > Forecast over time so the forecast is consistently low. Note: convention is e_t = D − F, so positive errors = under-forecast.

### Q14: **C. MSE**
MSE squares each error, which makes large misses disproportionately costly. Useful when one big miss is much worse than several small ones.

### Q15: **B. More accurate at higher aggregation and longer time buckets**
This is why S&OP forecasts at the family/monthly level, not the SKU/daily level.

### Q16: **A. Collaborative Planning, Forecasting & Replenishment**
Standard supply-chain framework for shared forecasting between trading partners.

### Q17: **B. Demand variability *amplifying* upstream in a supply chain**
Retailers see small variability; raw-material suppliers see huge swings. The further upstream, the bigger the whip.

### Q18: **B. Order batching, promotions, and rationing**
Classic Lee/Padmanabhan/Whang causes: demand-signal distortion, order batching, price promotions, and rationing/shortage gaming. Sharing POS data is a *cure*, not a cause.

### Q19: **B. Cyclical repeats *across multiple years*; seasonal repeats *within* a year**
Standard ASCM Dictionary distinction.

### Q20: **C. Sales force composite**
Sales force composite, Delphi, executive opinion, and market research are qualitative. The other three options are quantitative.

### Q21: **C. 290**
Y = 50 + 0.8 × 300 = 50 + 240 = **290**.

### Q22: **A. Forecast A**
|+5| = 5; |−20| = 20. Forecast A's error is smaller, so it's more accurate.

### Q23: **C. Increase α**
α = 0.05 is very low → highly smoothed, slow response. A 30% jump should pull the forecast up; if it doesn't, α needs to rise (try 0.2–0.3).

### Q24: **A. Top-down and bottom-up forecasts at multiple aggregation levels**
Pyramid forecasting reconciles family-level forecasts with SKU-level forecasts so both sum consistently.

### Q25: **A. T × C × S × R**
Standard multiplicative decomposition. An additive form (T + C + S + R) also exists but multiplicative is most common.

### Q26: **B. Simple models (SMA, exp smoothing) often beat complex models on noisy real-world demand**
Documented across decades of forecasting competitions (M-competitions). Complex models overfit noise.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 You've mastered Module 2. Move to Module 3.
- 22–24/26 → ✅ Solid. Note your wrong answers.
- 17–21/26 → ⚠️ Re-read the parts you missed. Re-quiz tomorrow.
- <17/26 → 🔁 Re-read the entire Reading.md. Watch videos #2 and #3 again.

---

## 🃏 Add To Your Flashcards

- The 4 components of demand (TCSR)
- The 3 time-series formulas: SMA, WMA, exponential smoothing
- MAD, MSE, MAPE, bias, tracking signal, the formulas
- α: high = responsive; low = smooth
- The 4 CPFR activities
- Causes & cures of the bullwhip effect
- Aggregation principle (higher level = more accurate)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3: S&OP](../Module-03-SOP-Sales-Operations-Planning/Reading.md)
