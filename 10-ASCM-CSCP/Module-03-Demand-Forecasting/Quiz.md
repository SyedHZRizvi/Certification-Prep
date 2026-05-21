# ✏️ Module 3 Quiz: Demand & Forecasting

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 21/26 minimum.

---

## Questions

### Q1. Which type of demand should be CALCULATED rather than forecasted?
A. Independent
B. Dependent
C. Seasonal
D. Lumpy

---

### Q2. Last period's forecast was 200, actual was 240, and α = 0.4. Using simple exponential smoothing, the next forecast is:
A. 200
B. 216
C. 220
D. 240

---

### Q3. Which method best handles a product with steady upward trend AND yearly seasonality?
A. Naïve
B. Simple moving average
C. Simple exponential smoothing
D. Holt-Winters

---

### Q4. A team measures forecast accuracy using MAPE, but MAPE is unreliable when:
A. Actuals are large
B. Actuals are near zero
C. Forecasts are positive
D. The model uses smoothing

---

### Q5. The Delphi method differs from a sales force composite because:
A. Delphi uses anonymous expert rounds
B. Delphi uses regression
C. Delphi is causal
D. Delphi requires no iteration

---

### Q6. A tracking signal of +5.2 indicates:
A. The forecast is healthy
B. Actuals consistently exceed the forecast — investigate bias
C. Forecast is over-shooting
D. Standard deviation is increasing

---

### Q7. Choose the BEST forecasting method for a stable, level demand pattern with no trend or seasonality:
A. Holt-Winters
B. Simple exponential smoothing or moving average
C. Multiple regression
D. Croston's method

---

### Q8. In simple exponential smoothing, raising α from 0.1 to 0.6:
A. Increases responsiveness but adds noise
B. Decreases responsiveness
C. Eliminates trend bias
D. Reduces forecast error in all cases

---

### Q9. CPFR's primary contribution to bullwhip reduction comes from:
A. Centralized inventory
B. Single shared forecast across partners
C. Switching to MTO production
D. Using only qualitative methods

---

### Q10. A spare-parts business with mostly zero-demand periods and occasional spikes is BEST forecast with:
A. Simple ES
B. Linear regression
C. Croston's method
D. Holt's method

---

### Q11. Mean absolute deviation (MAD) for 4 errors of +10, −10, +20, −10 equals:
A. 2.5
B. 10
C. 12.5
D. 50

---

### Q12. A regression model with R² = 0.89 indicates:
A. The model explains 89% of variation in demand
B. Errors are 89% of demand
C. The forecast bias is 11%
D. The slope is 0.89

---

### Q13. Demand sensing complements traditional statistical forecasting by:
A. Replacing long-horizon statistical forecasts
B. Providing real-time, short-horizon signals
C. Eliminating the need for safety stock
D. Increasing batch sizes

---

### Q14. Which is an example of demand SHAPING (not forecasting)?
A. Computing a moving average
B. Discounting slow-moving SKUs to smooth demand
C. Running a Delphi panel
D. Calculating tracking signal

---

### Q15. VMI differs from CPFR because:
A. VMI is a planning framework; CPFR is software
B. CPFR is joint planning; VMI is supplier-executed replenishment
C. They are synonyms
D. VMI is upstream only

---

### Q16. Forecast accuracy generally IMPROVES when:
A. Forecasting at SKU level vs family level
B. Forecasting at family/aggregate level vs SKU level
C. Using more historical data regardless of relevance
D. Extending the horizon

---

### Q17. A retailer ran a deep promotion last week. Sales tripled. The forecasting team should:
A. Use the spike as the new baseline
B. Adjust for the promotion lift to keep the underlying signal clean
C. Switch to Holt-Winters
D. Stop forecasting

---

### Q18. The PRIMARY purpose of a tracking signal is to:
A. Compute MAD
B. Detect when a model is systematically biased
C. Replace MAPE
D. Smooth seasonal indexes

---

### Q19. Last 3 actuals: 80, 100, 120. Using a 3-period simple moving average, the next forecast is:
A. 80
B. 90
C. 100
D. 120

---

### Q20. The exam expects you to know that "perfect order" is a forecasting accuracy metric. True or false?
A. True
B. False — it is a reliability fulfillment metric, not forecasting

---

### Q21. A retailer with new product launches and no history should rely MORE on:
A. Causal models
B. Qualitative methods like sales force composite or historical analogy
C. Holt-Winters
D. Simple moving average

---

### Q22. Compared to a low α, a high α in exponential smoothing produces:
A. More stable forecasts
B. More responsive forecasts to recent changes
C. Identical forecasts
D. Lower MAPE always

---

### Q23. Bias (MFE) of +12 over 6 periods means on average the forecast was:
A. Higher than actuals by 12 units per period
B. Lower than actuals by 12 units per period
C. Lower than actuals by 2 units per period
D. Off by ±12 units per period

---

### Q24. Which of the following pairs is correctly matched?
A. Holt's method — seasonality only
B. Holt-Winters — trend + seasonality
C. Croston's — stable level demand
D. Naïve — long-horizon strategic

---

### Q25. A grocery chain shares POS data with its dairy supplier, and the supplier maintains agreed inventory levels at each store. This is:
A. CPFR
B. VMI
C. MRP
D. Drop-ship

---

### Q26. The most accurate way to forecast a 5-year product family revenue plan is:
A. Daily SKU-level statistical forecast
B. Aggregate-level forecast combined with executive judgment
C. Croston's method
D. Naïve forecast

---

## 🎯 Answers + Explanations

### Q1: **B. Dependent**
Dependent demand (components in a BOM) is calculated through MRP from parent demand.

### Q2: **B. 216**
F = 0.4(240) + 0.6(200) = 96 + 120 = 216.

### Q3: **D. Holt-Winters**
Holt-Winters handles trend + seasonality. Holt = trend only. Simple ES = level only.

### Q4: **B. Actuals are near zero**
MAPE divides by actuals. Near-zero actuals explode the percentage error.

### Q5: **A. Anonymous expert rounds**
Delphi uses anonymous iterative expert input to avoid groupthink.

### Q6: **B. Investigate bias**
|TS| > 4 indicates the forecast has systematic bias and needs review.

### Q7: **B. Simple ES or moving average**
Stable demand doesn't justify a more complex model. Simpler wins.

### Q8: **A. Increases responsiveness but adds noise**
Higher α weights recent actuals more — fast reaction at the cost of stability.

### Q9: **B. Single shared forecast across partners**
CPFR's "one number" eliminates each tier re-forecasting independently.

### Q10: **C. Croston's method**
Designed for intermittent / lumpy demand.

### Q11: **C. 12.5**
MAD = (10+10+20+10)/4 = 50/4 = 12.5.

### Q12: **A. Explains 89% of variation**
R² is the coefficient of determination — share of variance explained by the model.

### Q13: **B. Real-time, short-horizon signals**
Demand sensing operates over hours/days, complementing weekly/monthly statistical forecasts.

### Q14: **B. Discounting to smooth demand**
Shaping = influencing demand to match supply. Discounting is a textbook lever.

### Q15: **B. CPFR = joint planning, VMI = supplier execution**
CPFR plans together; VMI hands replenishment authority to the supplier.

### Q16: **B. Aggregate-level forecasts are more accurate**
Errors offset at the family level. SKU-level forecasts inherit more noise.

### Q17: **B. Adjust for the promotion lift**
Otherwise the spike pollutes the baseline. CPFR explicitly aligns on promotional plans.

### Q18: **B. Detect systematic bias**
Tracking signal = Σ(A−F)/MAD; >|4| triggers investigation.

### Q19: **C. 100**
SMA = (80+100+120)/3 = 100.

### Q20: **B. False — reliability metric**
Perfect order measures fulfillment reliability (on-time, complete, undamaged, correct documentation), not forecast accuracy.

### Q21: **B. Qualitative methods**
Without history, qualitative inputs (analogy, expert opinion, market research) outperform statistical methods.

### Q22: **B. More responsive**
High α reacts to recent actuals. Trade-off: more noise sensitivity.

### Q23: **C. Lower than actuals by 2 units per period**
MFE = +12 over 6 periods = +2/period bias (forecast under-shoots by 2 units per period).

### Q24: **B. Holt-Winters — trend + seasonality**
The only correctly matched pair.

### Q25: **B. VMI**
Supplier executes replenishment using shared POS data. CPFR would imply joint planning beyond replenishment.

### Q26: **B. Aggregate + executive judgment**
Long horizons require aggregation and qualitative inputs; SKU-level statistics fail at 5 years.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Forecasting locked in.
- 21–24/26 → ✅ Strong. Review the misses.
- 16–20/26 → ⚠️ Practice MAD/MAPE/TS by hand again.
- <16/26 → 🔁 Re-do Reading.md + watch videos #2 and #3.

---

## 🃏 Add To Your Flashcards

- ES formula F = αA + (1−α)F
- MAD / MAPE / MFE / TS formulas
- Holt vs Holt-Winters vs Croston use cases
- CPFR's 4 activities
- VMI vs CPFR distinction
- Independent vs dependent demand

---

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 4: Supply Planning & S&OP](../Module-04-Supply-Planning-SOP/Reading.md)
