# ✏️ Module 4 Quiz: Inventory & Distribution

> **Instructions:** 25 questions. Aim for 20/25.
> Each question tagged with its **Bloom's level**.

---

## Questions

### Q1. DRP differs from MRP in that DRP: *(Analyze)*
A. Drives off the Master Production Schedule
B. Explodes a Bill of Materials
C. Plans distribution network replenishment using time-phased echelons
D. Is only used inside the plant

---

### Q2. Inventory Position is: *(Remember)*
A. On-Hand only
B. On-Hand + On-Order − Backorders
C. On-Hand − Safety Stock
D. Forecasted demand for next month

---

### Q3. A retailer has 1 DC with safety stock = 1,000. It decentralizes to 4 DCs with similar demand. By the square-root rule, total SS ≈: *(Apply)*
A. 250
B. 1,000
C. 2,000
D. 4,000

---

### Q4. Safety stock formula: *(Remember)*
A. Z × σ × √L
B. d × L
C. EOQ × cycle time
D. (Max − Min) / 2

---

### Q5. Moving from 95% to 99.9% service level approximately: *(Understand)*
A. Doubles safety stock
B. Halves safety stock
C. Has no impact on safety stock
D. Eliminates safety stock

---

### Q6. The Bullwhip Effect refers to: *(Understand)*
A. Demand smoothing across periods
B. Amplification of demand variability as it moves upstream
C. Reduction in lead time
D. Improvement in service level

---

### Q7. Postponement that ships generic units to a region and configures locally is called: *(Analyze)*
A. Time postponement
B. Form postponement
C. Place postponement
D. Pull postponement

---

### Q8. Benetton dyeing sweaters to actual color demand is an example of: *(Apply)*
A. Form postponement
B. Place postponement
C. Time postponement
D. Push strategy

---

### Q9. In a DRP record, the planned order RELEASE is: *(Understand)*
A. Equal to the planned order receipt
B. The receipt offset earlier by the lead time
C. Always two weeks before receipt
D. Random

---

### Q10. ABC classification typically puts ~80% of value into: *(Remember)*
A. C-items
B. B-items
C. A-items
D. All equally

---

### Q11. XYZ classification groups by: *(Remember)*
A. Value
B. Velocity
C. Demand variability (stability)
D. Margin

---

### Q12. FSN classification flags inventory that has not moved as: *(Remember)*
A. Fast
B. Slow
C. Non-moving
D. Standard

---

### Q13. VED is typically applied to: *(Apply)*
A. Finished goods
B. Spare parts
C. Raw materials
D. Promotional items

---

### Q14. Cycle counting differs from annual physical inventory in that cycle counting: *(Understand)*
A. Counts everything once a year
B. Is continuous, rotating, and minimally disruptive
C. Requires shutting down operations
D. Is less accurate

---

### Q15. A target Inventory Record Accuracy (IRA) for a high-quality DC is: *(Remember)*
A. 50–70%
B. 75–85%
C. 95–99%
D. Exactly 100%

---

### Q16. ROP = (d × L) + SS, this stands for: *(Remember)*
A. Reorder Point
B. Rate Order Plan
C. Replenishment Order Period
D. Receiving Operations Plan

---

### Q17. Push replenishment is BEST for: *(Apply)*
A. Stable, predictable demand
B. Daily consumer staples
C. New product launches and promotions
D. Long-tail slow movers

---

### Q18. A primary cure for the bullwhip effect is: *(Analyze)*
A. Larger order batches
B. Shared POS/sell-through information (CPFR)
C. Locking down lead times
D. Increasing safety stock everywhere

---

### Q19. MEIO (Multi-Echelon Inventory Optimization) generally reduces total network inventory by approximately: *(Remember)*
A. 1–2%
B. 10–30%
C. 50%
D. None, it adds inventory

---

### Q20. A Periodic Review (P-system) policy: *(Understand)*
A. Continuously monitors inventory
B. Reviews every T periods and orders up to a target level
C. Reorders 1-for-1 with each unit consumed
D. Has no maximum

---

### Q21. The cycle counting method that counts items when the bin reaches zero is: *(Remember)*
A. Random sample
B. Geographic
C. Opportunity-based
D. Control group

---

### Q22. CPFR stands for: *(Remember)*
A. Customer Personalized Forecast Reorder
B. Collaborative Planning, Forecasting, and Replenishment
C. Capacity Planned Flexible Reorder
D. Customer Promotion Forecast Refresh

---

### Q23. In the DRP record: *(Apply)*

| Week | 1 | 2 | 3 | 4 |
|------|---|---|---|---|
| Gross req. | 30 | 40 | 50 | 60 |
| Projected on-hand (start of period = 100) | 70 | 30 | -20 | -80 |

The earliest week a planned order RECEIPT is required:
A. Week 1
B. Week 2
C. Week 3
D. Week 4

---

### Q24. The reorder-point system reorders when: *(Apply)*
A. Inventory POSITION ≤ ROP
B. On-hand ≤ ROP
C. Cycle time exceeds threshold
D. Forecast equals zero

---

### Q25. A DC has Z-score 1.65 (95% service), demand σ = 20 units/wk, lead time = 4 weeks. Safety stock ≈: *(Apply)*
A. 33
B. 66
C. 80
D. 132

---

## 🎯 Answers + Explanations

### Q1: **C. Plans distribution network replenishment**
DRP = Distribution Requirements Planning. Time-phased, but for echelons, not BOMs.

### Q2: **B. OH + OO − BO**
Always reorder based on *position*, not just on-hand, or you'll double-order while inbound is in transit.

### Q3: **C. 2,000**
Square-root rule: 4 DCs ≈ √4 × single-loc SS = 2 × 1,000 = **2,000**.

### Q4: **A. Z × σ × √L**
Standard safety-stock formula with Z service-level multiplier, σ demand stdev, L lead time.

### Q5: **A. Doubles**
Z(95%) = 1.65, Z(99.9%) ≈ 3.09. SS roughly doubles (3.09/1.65 ≈ 1.87×).

### Q6: **B. Upstream amplification**
Small demand variations at retail become huge swings at factories.

### Q7: **C. Place postponement**
Holding at a central hub and deploying only on order = place postponement. Form would be delaying *configuration*.

### Q8: **A. Form postponement**
Benetton delays the *form* (color) until demand is known.

### Q9: **B. Receipt offset by lead time**
Plan to *receive* by week X; release the order at X − lead time.

### Q10: **C. A-items (~20% of SKUs)**
Pareto: ~20% of SKUs ≈ 80% of value = A-items.

### Q11: **C. Demand variability**
XYZ groups by stability (X stable, Z highly variable). ABC groups by *value*.

### Q12: **C. Non-moving**
N = no movement (90+ days, typical cutoff). Candidate for write-off.

### Q13: **B. Spare parts**
VED (Vital / Essential / Desirable) is the classic MRO/spares classification.

### Q14: **B. Continuous, rotating**
Cycle counting partials daily/weekly. Annual count = shutdown.

### Q15: **C. 95–99%**
Industry targets 95–99% IRA; 100% is unrealistic with continuous flow.

### Q16: **A. Reorder Point**
ROP = (demand during lead time) + safety stock.

### Q17: **C. Promotions and new launches**
Push = central decides allocation. Best when downstream nodes can't "pull" what doesn't exist yet.

### Q18: **B. Shared POS info (CPFR)**
Information transparency damps bullwhip. Bigger batches, allocation games, hedging all worsen it.

### Q19: **B. 10–30%**
Typical MEIO benefit range cited in CSCMP/ASCM literature.

### Q20: **B. Review every T, order up to target**
P-system = periodic. Q-system = continuous, fixed quantity.

### Q21: **C. Opportunity-based**
"Free" counts at bin-zero events, verify when bin is verifiable easily.

### Q22: **B. Collaborative Planning, Forecasting, and Replenishment**
Industry standard published by GS1/VICS.

### Q23: **C. Week 3**
Projected on-hand turns negative in week 3 (-20). That's when a receipt is required.

### Q24: **A. Inventory POSITION**
Position (OH + OO − BO) is what drives reorder. Comparing on-hand alone double-orders.

### Q25: **B. 66**
SS = 1.65 × 20 × √4 = 1.65 × 20 × 2 = **66**.

---

## 📊 Score Yourself

- 23–25/25 → 🏆 Mastered Module 4.
- 20–22/25 → ✅ Solid.
- 16–19/25 → ⚠️ Re-read DRP record + safety stock sections.
- <16/25 → 🔁 Restart.

---

## 🃏 Add To Your Flashcards

- DRP record fill-in mechanics
- Inventory position formula
- Safety stock formula Z × σ × √L
- Square-root rule
- Push vs Pull
- Bullwhip cause/cure
- Postponement types (form/time/place/pull/logistical/manufacturing)
- ABC/XYZ/FSN/VED definitions
- ROP formula

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), then [Module 5](../Module-05-Warehouse-Operations/Reading.md)
