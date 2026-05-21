# ✏️ Module 2 Quiz: Capacity & Demand for Logistics

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Aim for 20/25 minimum.

---

## Questions

### Q1. A DC has 10 forklifts (theoretical), runs at 80% utilization and 90% efficiency. Rated capacity equals:
A. 8.0 forklift-equivalents
B. 7.2 forklift-equivalents
C. 9.0 forklift-equivalents
D. 10.0 forklift-equivalents

---

### Q2. A toy retailer expects 40% of annual sales in Q4. The MOST appropriate capacity strategy is:
A. Lead with permanent capacity expansion
B. Lag (let stockouts occur)
C. Hybrid: pre-build inventory + seasonal labor + 3PL overflow
D. Match daily with fixed-staff only

---

### Q3. "Capacity cushion" refers to:
A. The mattresses in the break room
B. Planned slack — the unused fraction of capacity
C. The overtime budget
D. The contingency reserve in dollars

---

### Q4. Utilization measures:
A. Output speed per unit time
B. Fraction of available time the resource is actually used
C. The number of breakdowns per shift
D. The throughput in dollars

---

### Q5. Above what utilization level does queueing theory predict severe delay blow-ups?
A. ~25%
B. ~50%
C. ~85–90%
D. 100% — utilization is always good

---

### Q6. MAD is calculated as:
A. Σ(Actual − Forecast) / N
B. Σ |Actual − Forecast| / N
C. Σ(Actual − Forecast)² / N
D. Σ(Forecast / Actual) × 100

---

### Q7. A forecast consistently over-predicts demand. The forecast has:
A. High MAD
B. Negative bias
C. Positive bias
D. High RMSE only

---

### Q8. The tracking signal generally raises an alarm when its absolute value exceeds:
A. 0.1
B. 1.0
C. 4 to 6
D. 100

---

### Q9. A 3-month moving average of monthly demand 100, 110, 120 is:
A. 100
B. 105
C. 110
D. 115

---

### Q10. Forecasts at the aggregate level (region, category) tend to be:
A. Less accurate than SKU-level
B. More accurate than SKU-level (relative error)
C. The same accuracy
D. Useless

---

### Q11. A "Lead" capacity strategy is best for:
A. Commodity, declining markets
B. Growing markets where service is a competitive weapon
C. Highly seasonal retail
D. Cost-minimizing operations

---

### Q12. The Theory of Constraints' first focusing step is:
A. Hire more staff
B. Identify the bottleneck
C. Buy more equipment
D. Subordinate everyone to the constraint

---

### Q13. Two SKUs have these patterns: SKU-A predictable peak each December; SKU-B random spikes weekly. The right safeguards:
A. Both need safety stock
B. SKU-A needs scheduled pre-build; SKU-B needs safety stock
C. SKU-B needs scheduled pre-build; SKU-A needs safety stock
D. Both need scheduled pre-build

---

### Q14. ABC analysis typically finds that ~20% of SKUs drive ~___ of throughput.
A. 20%
B. 50%
C. 80%
D. 95%

---

### Q15. The 6-step capacity planning cycle ENDS with:
A. Determine throughput requirements
B. Identify alternatives
C. Implement
D. Monitor and adjust

---

### Q16. A Match (chase) strategy's biggest hidden cost is:
A. Excess space rental
B. Hiring, training, and turnover churn
C. Carrier surcharges
D. Higher fuel cost

---

### Q17. Postponement reduces capacity needs by:
A. Forcing earlier decisions
B. Letting you forecast at the aggregate, less-uncertain level
C. Outsourcing the bottleneck
D. Eliminating safety stock entirely

---

### Q18. Effective capacity differs from theoretical capacity in that effective:
A. Adds overtime
B. Subtracts planned maintenance, setups, breaks
C. Includes only successful units
D. Is measured in dollars

---

### Q19. In a DC bottleneck analysis, a backup at the dock doors during receiving indicates the bottleneck is:
A. Picking
B. Putaway
C. Receiving
D. Shipping

---

### Q20. Demand-sensing techniques typically use:
A. Annual aggregated forecasts
B. Near-real-time POS / sell-through signals and ML
C. Spreadsheet-only methods
D. Three-month moving averages only

---

### Q21. An A-mover SKU should be slotted:
A. At the back of the warehouse, on the top shelf
B. In a forward-pick area, in the ergonomic golden zone (waist-shoulder)
C. Anywhere — velocity doesn't affect slotting
D. In the reserve area only

---

### Q22. A toy retailer's Q4 demand is so predictable that capacity decisions can use:
A. Causal models with regression
B. Seasonal time-series (e.g., Holt-Winters)
C. Delphi only
D. Random number generators

---

### Q23. A logistics director chooses to maintain a base load with permanent staff and flex peaks with temps and 3PL overflow. This is BEST described as:
A. Pure Lead strategy
B. Pure Lag strategy
C. Pure Match strategy
D. Hybrid (Chase + Level)

---

### Q24. Bias and MAD differ in that:
A. Bias is the magnitude; MAD is the direction
B. Bias is the direction (chronic over/under); MAD is the magnitude
C. They are the same metric
D. Only one is exam-relevant

---

### Q25. A forecast has tracking signal +8 for 4 weeks running. The correct action:
A. Ignore — tracking signal is unreliable
B. Tighten safety stock
C. Investigate and retune the forecast model
D. Switch carriers

---

## 🎯 Answers + Explanations

### Q1: **B. 7.2**
Rated = 10 × 0.80 × 0.90 = 7.2.

### Q2: **C. Hybrid**
40% in one quarter is too peaked for any single strategy. Hybrid combines pre-build (Lead-ish) + seasonal labor (Match) + overflow (3PL flex).

### Q3: **B. Planned slack**
Capacity cushion = 1 − utilization. It absorbs variability and surge.

### Q4: **B. Fraction of time used**
Utilization = used/available. Efficiency is *how productive* the used time is.

### Q5: **C. ~85–90%**
Queueing theory shows wait time approaches infinity as utilization → 100% with any variability. Most logistics design caps utilization around 85%.

### Q6: **B. Σ|A−F|/N**
MAD = mean of absolute deviations. Signs don't cancel.

### Q7: **C. Positive bias**
Σ(Actual − Forecast) negative means forecast > actual → over-predicting → **positive bias** in the "forecast is high" sense. Note: bias sign conventions vary; ASCM defines bias as Σ(A−F)/N — so chronic over-forecast gives **negative** bias. The exam will be explicit; here we follow the convention that bias = Actual − Forecast (negative = over). Correction: **B. Negative bias** is the ASCM convention.

*[Best practice on exam: read the convention; ASCM defines bias = Σ(A−F)/N. Over-forecast → A<F → negative bias.]*

### Q8: **C. 4 to 6**
Tracking signal alerts when |TS| exceeds 4 to 6 — model needs retuning.

### Q9: **C. 110**
(100+110+120)/3 = 110.

### Q10: **B. More accurate at aggregate**
Pooling reduces relative error (law of large numbers).

### Q11: **B. Growing markets, service-as-weapon**
Lead pre-builds capacity to avoid being caught short in fast-growing markets.

### Q12: **B. Identify the bottleneck**
TOC step 1: Identify. Then Exploit, Subordinate, Elevate, Repeat.

### Q13: **B. SKU-A pre-build; SKU-B safety stock**
Predictable seasonality = planned build-up. Random spikes = safety stock.

### Q14: **C. ~80%**
Pareto principle: 20% of SKUs ≈ 80% of throughput.

### Q15: **D. Monitor and adjust**
The cycle ends with monitoring and feeds back into the next planning round.

### Q16: **B. Hiring, training, turnover**
Match strategy churns the workforce; learning-curve and overtime costs are real.

### Q17: **B. Forecast at aggregate level**
Postponement lets you delay differentiation, so you commit to *colors/sizes* later when uncertainty has resolved.

### Q18: **B. Subtracts maintenance, setups, breaks**
Effective capacity is theoretical minus planned losses.

### Q19: **C. Receiving**
Trailers backing up at the dock = receiving constraint. Don't conflate with picking or shipping.

### Q20: **B. Real-time POS + ML**
Demand sensing uses recent, granular signals (POS, IoT) and ML rather than long-cycle averages.

### Q21: **B. Forward pick, golden zone**
Fast movers go close to pack, at ergonomic height to minimize travel and bend/reach time.

### Q22: **B. Seasonal time-series**
Predictable seasonality is the textbook case for Holt-Winters or seasonal decomposition.

### Q23: **D. Hybrid (Chase + Level)**
Permanent base + flex peak = hybrid. Sometimes called "Level base with chase peak."

### Q24: **B. Bias = direction; MAD = magnitude**
Both must be tracked. Fix bias first; tune for MAD second.

### Q25: **C. Investigate and retune**
Tracking signal +8 (well above ±4 to ±6) means the model is broken; safety stock adjustments are downstream patches.

---

## 📊 Score Yourself

- 23–25/25 → 🏆 Mastered Module 2.
- 20–22/25 → ✅ Solid. Review misses.
- 16–19/25 → ⚠️ Re-read capacity strategies + forecast metrics.
- <16/25 → 🔁 Restart this module.

---

## 🃏 Add To Your Flashcards

- Rated capacity formula
- Lead / Lag / Match definitions
- MAD, MAPE, bias, tracking signal formulas
- TOC five focusing steps
- ABC slotting placement (forward pick / golden zone)
- 6-step capacity planning cycle

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3](../Module-03-Order-Management-Fulfillment/Reading.md)
