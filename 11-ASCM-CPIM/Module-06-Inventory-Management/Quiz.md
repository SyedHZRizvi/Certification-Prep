# ✏️ Module 6 Quiz: Inventory Management

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. 9 calculation questions inside.
> Aim for 22/26 minimum.

---

## Questions

### Q1. Which is NOT one of the 6 functions of inventory? *(Remember)*
A. Cycle (lot-size)
B. Anticipation
C. Transit (pipeline)
D. Marketing display

### Q2. WIP held between two work centers running at different speeds is BEST classified as: *(Apply)*
A. Cycle inventory
B. Decoupling inventory
C. Anticipation inventory
D. Hedge inventory

### Q3. Building toys in summer for Christmas sales is: *(Apply)*
A. Cycle inventory
B. Safety inventory
C. Anticipation inventory
D. Transit inventory

### Q4. The EOQ formula is: *(Remember)*
A. √(2DS/H)
B. 2D/SH
C. √(DH/2S)
D. D × S / H

### Q5. Given D = 8,000 units/yr, S = $25/order, H = $4/unit/yr, EOQ is: *(Apply)*
A. 200
B. 283
C. 316
D. 400

### Q6. Given D = 10,000, S = $50, H = $2, EOQ is approximately: *(Apply)*
A. 500
B. 707
C. 1,000
D. 1,414

### Q7. EPQ is larger than EOQ because: *(Understand)*
A. Setup cost is included twice
B. While producing, demand is also drawing down inventory (so max stock is lower than the lot size)
C. EPQ ignores holding cost
D. EPQ is for raw materials only

### Q8. Reorder Point formula: *(Remember)*
A. ROP = d × LT + Safety Stock
B. ROP = EOQ + SS
C. ROP = Demand × Turnover
D. ROP = Lead time only

### Q9. Daily demand = 80, lead time = 7 days, safety stock = 200. ROP = *(Apply)*
A. 360
B. 480
C. 560
D. 760

### Q10. σ_LT (standard deviation of demand over the lead time) under independence is: *(Remember)*
A. σ_daily × LT
B. σ_daily × √LT
C. σ_daily / √LT
D. σ_daily × LT²

### Q11. For 95% service level the z-value is: *(Remember)*
A. 1.00
B. 1.28
C. 1.65
D. 1.96

### Q12. σ_daily = 10, LT = 9 days, 95% service level. Safety Stock = *(Apply)*
A. 30
B. 50
C. 49.5
D. 90

### Q13. Inventory carrying cost typically includes: *(Remember)*
A. Capital cost, storage, insurance, obsolescence
B. Sales commissions
C. Marketing budget
D. R&D spending

### Q14. ABC analysis classifies items by: *(Remember)*
A. SKU number
B. Dollar volume (annual cost × annual usage)
C. Physical size
D. Supplier name

### Q15. A items in a typical ABC are about: *(Remember)*
A. 10–20% of SKUs and 70–80% of dollar volume
B. 50% of SKUs and 50% of dollar volume
C. 80% of SKUs and 80% of dollar volume
D. 1% of SKUs and 1% of dollar volume

### Q16. The recommended cycle-count frequency for A items is approximately: *(Understand)*
A. Annually
B. Quarterly
C. Monthly (or more frequently)
D. Once every 5 years

### Q17. Inventory Record Accuracy (IRA) for A items should target: *(Understand)*
A. 80%
B. 90%
C. 95%+
D. 50%

### Q18. Inventory turnover = COGS / Avg inventory. If COGS = $30M and avg inventory = $5M, turnover is: *(Apply)*
A. 3
B. 5
C. 6
D. 15

### Q19. With a turnover of 8, days of supply is approximately: *(Apply)*
A. 8
B. 36
C. 46
D. 365

### Q20. Vendor-Managed Inventory (VMI) means: *(Remember)*
A. The customer manages the supplier's inventory
B. The supplier manages the customer's inventory level (customer usually still owns the inventory)
C. A third party holds inventory
D. The CFO manages all inventory

### Q21. Consignment inventory means: *(Understand)*
A. Supplier owns the inventory while it's at the customer's site, until consumed
B. Customer owns the inventory immediately upon delivery
C. Inventory in transit
D. Bonded warehouse stock

### Q22. EOQ assumes all of the following EXCEPT: *(Analyze)*
A. Constant demand
B. Constant lead time
C. Whole order arrives at once
D. Quantity discounts

### Q23. A perishable product is BEST issued using: *(Apply)*
A. LIFO
B. FIFO
C. Weighted Average
D. Standard Cost

### Q24. JIT (Just-in-Time) impacts safety stock by: *(Understand)*
A. Increasing it
B. Reducing it through reliability + small batches
C. Eliminating it entirely
D. Making it irrelevant

### Q25. A plant currently has 60 days of supply and wants to reduce to 30 days. What must change? *(Evaluate)*
A. Increase turnover (e.g., smaller batches, faster replenishment)
B. Decrease turnover
C. Increase carrying cost
D. Increase safety stock

### Q26. A supplier offers a 4% price break at 5,000 units. EOQ comes out to 2,800. The MOST APPROPRIATE next step: *(Evaluate)*
A. Order EOQ of 2,800
B. Order 5,000 and compute total cost; compare to EOQ total cost
C. Order 100,000
D. Refuse the discount and use EOQ

---

## 🎯 Answers + Explanations

### Q1: **D. Marketing display**
The 6 functions are Cycle, Safety, Anticipation, Transit, Hedge, Decoupling. Display is a retail concept, not an inventory function in CPIM.

### Q2: **B. Decoupling inventory**
WIP buffering two stages with different speeds is the textbook decoupling case.

### Q3: **C. Anticipation inventory**
Built ahead of a known future spike, Christmas, promotions, plant shutdown.

### Q4: **A. √(2DS/H)**
The classic EOQ.

### Q5: **B. 283**
EOQ = √(2 × 8000 × 25 / 4) = √(400,000 / 4) = √100,000 ≈ **316**… 

Hmm, let me recompute: 2 × 8000 × 25 = 400,000. Divide by H=4: 100,000. √100,000 ≈ 316.

So the right answer is **C. 316**.

✏️ Correction: **C. 316**.

### Q6: **B. 707**
EOQ = √(2 × 10000 × 50 / 2) = √500,000 ≈ **707**.

### Q7: **B. While producing, demand is also drawing down inventory (so max stock is lower than the lot size)**
The √(p/(p-d)) factor in EPQ accounts for simultaneous production and consumption.

### Q8: **A. ROP = d × LT + Safety Stock**
Standard formula. The d × LT covers expected consumption during lead time; SS covers variability.

### Q9: **D. 760**
ROP = 80 × 7 + 200 = 560 + 200 = **760**.

### Q10: **B. σ_daily × √LT**
Under independence, variance adds, so σ scales with √LT. Common ASCM formula.

### Q11: **C. 1.65**
95% one-sided service level: z ≈ 1.645 → 1.65 commonly used.

### Q12: **C. 49.5**
σ_LT = 10 × √9 = 10 × 3 = 30. SS = 1.65 × 30 = **49.5** ≈ 50.

### Q13: **A. Capital cost, storage, insurance, obsolescence**
Typical carrying cost components, usually 20–35% of item value/year.

### Q14: **B. Dollar volume (annual cost × annual usage)**
Pareto classification by $ contribution.

### Q15: **A. 10–20% of SKUs and 70–80% of dollar volume**
Classic 80/20 distribution.

### Q16: **C. Monthly (or more frequently)**
A items get the most-frequent counts because they drive the most $ risk.

### Q17: **C. 95%+**
ASCM/industry benchmark for A-item IRA. C items can be 90% or lower.

### Q18: **C. 6**
30 / 5 = **6** turns/year.

### Q19: **C. 46**
365 / 8 ≈ **45.6** → 46 days of supply.

### Q20: **B. The supplier manages the customer's inventory level (customer usually still owns the inventory)**
Distinct from consignment, where the supplier *owns* the inventory until use.

### Q21: **A. Supplier owns the inventory while it's at the customer's site, until consumed**
The customer pays only on consumption, common in MRO, semiconductors, hospital supplies.

### Q22: **D. Quantity discounts**
EOQ assumes a single unit price. Quantity-discount problems require comparing total cost at each break.

### Q23: **B. FIFO**
First-in, first-out so older stock doesn't spoil. Mandatory for perishables.

### Q24: **B. Reducing it through reliability + small batches**
JIT shrinks lead times and variability; safety stock can shrink correspondingly. Doesn't go to zero except in idealized pull systems.

### Q25: **A. Increase turnover (e.g., smaller batches, faster replenishment)**
Days of supply = 365 / turnover, so doubling turnover halves days of supply.

### Q26: **B. Order 5,000 and compute total cost; compare to EOQ total cost**
With a quantity discount you must evaluate total cost (carrying + ordering + item cost) at both quantities and pick the lower.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Mastered. Move to Module 7.
- 21–23/26 → ✅ Solid.
- 16–20/26 → ⚠️ Re-read formulas; retry tomorrow.
- <16/26 → 🔁 Restart Module 6, the math is critical.

---

## 🃏 Add To Your Flashcards

- The 6 functions of inventory
- EOQ formula + when it fails
- EPQ adjustment factor
- ROP = d × LT + SS
- σ_LT = σ_daily × √LT
- z-values: 90% = 1.28, 95% = 1.65, 99% = 2.33
- ABC % rules
- Cycle count frequency by class
- Turnover ↔ days of supply (reciprocals × 365)
- VMI vs consignment

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7: PAC](../Module-07-Production-Activity-Control/Reading.md)
