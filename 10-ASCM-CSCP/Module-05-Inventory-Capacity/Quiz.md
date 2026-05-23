# ✏️ Module 5 Quiz: Inventory & Capacity

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 21/26 minimum.

---

## Questions

### Q1. EOQ formula is: *(Remember)*
A. √(2 · D · S / H)
B. D · S / H
C. 2 · D · H / S
D. √(D · S · H)

---

### Q2. Annual demand 24,000 units, ordering cost $30, holding cost $6/unit/yr. EOQ ≈ *(Apply)*
A. 200
B. 400
C. 490
D. 600

---

### Q3. EOQ assumes all EXCEPT: *(Understand)*
A. Constant demand
B. Constant lead time
C. Quantity discounts apply
D. No stockouts allowed

---

### Q4. Avg demand 100/day, LT 5 days, σ during LT = 30, target 95% (Z=1.65). Reorder point ≈ *(Apply)*
A. 500
B. 530
C. 550
D. 600

---

### Q5. Inventory turns are calculated as: *(Remember)*
A. COGS / avg inventory value
B. Avg inventory / sales
C. Sales / units
D. DIO − DPO

---

### Q6. A company with COGS $30M and avg inventory $3M has DIO of: *(Apply)*
A. 30 days
B. 36 days
C. 45 days
D. 90 days

---

### Q7. Safety stock primarily protects against: *(Understand)*
A. Carrying cost
B. Demand and lead-time variability
C. Equipment downtime
D. Tracking signal bias

---

### Q8. The PRIMARY benefit of cycle counting over annual physical inventory is: *(Evaluate)*
A. No counts at all
B. Continuous accuracy with no facility shutdown
C. Allows pure JIT
D. Reduces EOQ

---

### Q9. A holiday sweater costs $30, sells for $80, salvage $20. Critical ratio is: *(Apply)*
A. 0.40
B. 0.50
C. 0.625
D. 0.833

---

### Q10. ABC inventory analysis is based on: *(Remember)*
A. Cost per unit only
B. Pareto distribution — small % of SKUs drive most $ value
C. Lead time
D. Number of orders

---

### Q11. Cash-to-cash cycle = ? *(Remember)*
A. DIO + DSO − DPO
B. DSO − DIO + DPO
C. COGS / inventory
D. AR + AP

---

### Q12. Increasing target service level from 95% to 99% causes safety stock to: *(Analyze)*
A. Decrease
B. Stay the same
C. Increase, often significantly
D. Become negative

---

### Q13. JIT depends MOST on which of the following supplier characteristics? *(Understand)*
A. Lowest price
B. High reliability, short lead times, and consistent quality
C. Single-source forced exclusivity
D. Long-term capital lock-in

---

### Q14. Effective capacity differs from design capacity because effective considers: *(Understand)*
A. Marketing demand
B. Realistic product mix, scheduling, and maintenance
C. Customer credit
D. Carrying cost

---

### Q15. The Kanban signal in lean operations triggers: *(Remember)*
A. A forecast update
B. Replenishment from upstream
C. ABC reclassification
D. A safety-stock adjustment

---

### Q16. A pharmacy with stable, predictable demand for aspirin should manage its inventory primarily with: *(Apply)*
A. Newsvendor model
B. EOQ + reorder point
C. CPFR
D. Drum-buffer-rope

---

### Q17. Approximate annual carrying cost on a $1,000 unit with 25% carrying-cost factor: *(Apply)*
A. $25
B. $100
C. $250
D. $1,000

---

### Q18. If a firm reduces its average inventory from $5M to $3M and COGS stays at $30M, inventory turns: *(Apply)*
A. Decrease from 6 to 10
B. Stay the same
C. Increase from 6 to 10
D. Become undefined

---

### Q19. Pipeline inventory refers to: *(Remember)*
A. Items in safety stock
B. Goods currently in transit between locations
C. Slow-moving SKUs
D. Anticipation stock

---

### Q20. A company holds 2 months of seasonal inventory built ahead of December peak. This is: *(Apply)*
A. Cycle stock
B. Safety stock
C. Anticipation inventory
D. Pipeline inventory

---

### Q21. Past ~85% utilization, queueing theory predicts: *(Analyze)*
A. Cycle time decreases
B. Wait time increases sharply
C. Capacity expands
D. Forecasts improve

---

### Q22. The newsvendor model is BEST applied to: *(Understand)*
A. Continuous-demand staples
B. Single-period perishable goods (newspapers, fashion, holiday)
C. Service operations
D. Pure JIT manufacturing

---

### Q23. Fill rate measures: *(Remember)*
A. The percentage of order CYCLES with no stockout
B. The percentage of demand units filled from stock
C. The number of orders per year
D. EOQ accuracy

---

### Q24. A firm with DIO 50, DSO 35, DPO 100 has cash-to-cash of: *(Apply)*
A. +185 days
B. +85 days
C. −15 days
D. +35 days

---

### Q25. Amazon's famously NEGATIVE cash-to-cash means: *(Evaluate)*
A. They never collect payment
B. They collect from customers before paying suppliers
C. They have no inventory
D. They are unprofitable

---

### Q26. The 7 wastes in lean (TIMWOOD) include all EXCEPT: *(Remember)*
A. Transport
B. Inventory
C. Overproduction
D. Forecasting

---

## 🎯 Answers + Explanations

### Q1: **A. √(2DS/H)**
Classic Wilson/Harris formula.

### Q2: **C. 490**
EOQ = √(2·24,000·30/6) = √240,000 ≈ 490.

### Q3: **C. Quantity discounts**
Discounts violate EOQ's constant unit-cost assumption.

### Q4: **C. 550 (or close)**
Avg LT demand = 100×5 = 500. SS = 1.65×30 = 49.5 ≈ 50. ROP ≈ 550.

### Q5: **A. COGS / avg inventory value**
Standard turns formula.

### Q6: **B. 36 days**
Turns = 30/3 = 10 → DIO = 365/10 = 36.5.

### Q7: **B. Demand and lead-time variability**
SS absorbs uncertainty in both dimensions.

### Q8: **B. Continuous accuracy without shutdown**
Cycle counting is operationally cleaner.

### Q9: **D. 0.833**
Cu = $50, Co = $10. Ratio = 50/(50+10) = 0.833.

### Q10: **B. Pareto distribution**
80% of value sits in ~20% of SKUs.

### Q11: **A. DIO + DSO − DPO**
Standard cash-to-cash.

### Q12: **C. Increase significantly**
Z(0.95)=1.65, Z(0.99)=2.33. SS scales linearly with Z but the marginal cost grows.

### Q13: **B. Reliability, short LT, quality**
JIT preconditions. Anything that breaks supply consistency breaks JIT.

### Q14: **B. Realistic mix, schedule, maintenance**
Effective ≤ Design.

### Q15: **B. Upstream replenishment**
Pull signal from a downstream station.

### Q16: **B. EOQ + ROP**
Stable, predictable demand is textbook EOQ territory.

### Q17: **C. $250**
25% × $1,000 = $250/yr.

### Q18: **C. Increase from 6 to 10**
30/5 = 6 → 30/3 = 10.

### Q19: **B. Goods in transit**
Pipeline = in-transit. Sometimes shown on the balance sheet as "in-transit inventory."

### Q20: **C. Anticipation inventory**
Built ahead of a known event.

### Q21: **B. Wait time increases sharply**
Queueing theory result — variability + high utilization = long waits.

### Q22: **B. Single-period perishable**
Classic newsvendor scope.

### Q23: **B. % of demand units filled from stock**
Fill rate measures unit-level satisfaction; service level measures cycle-level.

### Q24: **C. −15 days**
50 + 35 − 100 = −15. Negative = supplier financing.

### Q25: **B. Collect first, pay later**
Amazon's working capital advantage.

### Q26: **D. Forecasting**
TIMWOOD = Transport, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Inventory + capacity in your bones.
- 21–23/26 → ✅ Strong. Patch missed formulas.
- 16–20/26 → ⚠️ Redo EOQ/SS/cash-to-cash drills.
- <16/26 → 🔁 Re-read Reading.md and re-watch videos #1–4.

---

## 🃏 Add To Your Flashcards

- EOQ formula + 5 assumptions
- Safety stock formula (Z · σ_LT)
- ROP formula
- Inventory turns + DIO
- Cash-to-cash formula
- 5 inventory types
- 4 cost categories
- TIMWOOD wastes

---

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 6: Sourcing & Supplier Management](../Module-06-Sourcing-Supplier-Management/Reading.md)
