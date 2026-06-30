# ✏️ Module 4 Quiz: Master Scheduling & MRP

> **Instructions:** Answer all 28 questions WITHOUT looking at the reading. This is the heaviest exam-weight module, 8 calculation questions inside.
> Aim for 24/28 minimum.

---

## Questions

### Q1. The Master Production Schedule plans for: *(Remember)*
A. Raw materials
B. Components
C. Finished goods (end items)
D. Production workers

---

### Q2. MRP plans for: *(Remember)*
A. Finished goods only
B. Independent demand items
C. Dependent demand items (components, materials)
D. Suppliers

---

### Q3. A part that is sold as a spare to a customer is: *(Analyze)*
A. Always dependent demand
B. Independent demand when sold as a spare; dependent when consumed inside a finished good
C. Always independent demand
D. Both dependent and independent simultaneously, requiring double counting

---

### Q4. The Demand Time Fence (DTF) is: *(Understand)*
A. Further out in time than the Planning Time Fence
B. Closer in time than the Planning Time Fence
C. The same as PTF
D. Only used in ETO environments

---

### Q5. Inside the Demand Time Fence, the Projected Available Balance is driven by: *(Understand)*
A. The forecast only
B. Customer orders only (forecast is ignored)
C. Both, in a weighted average
D. The Master Scheduler's judgment

---

### Q6. Available-to-Promise (ATP) for a given period is: *(Remember)*
A. The MPS for that period minus all customer orders for the next year
B. The MPS for that period minus customer orders before the next MPS receipt
C. The forecast minus the MPS
D. The on-hand inventory plus scheduled receipts

---

### Q7. MPS for week 4 = 200. Customer orders against that receipt (until the next MPS receipt): 130. ATP for week 4 is: *(Apply)*
A. 70
B. 130
C. 200
D. 330

---

### Q8. A bicycle uses 2 pedals per bike. The MPS for week 3 is 1,000 bikes. The gross requirement for pedals in week 3 is: *(Apply)*
A. 500
B. 1,000
C. 2,000
D. 4,000

---

### Q9. For a component with on-hand = 400, scheduled receipt week 1 = 600, gross requirement week 1 = 1,200, the net requirement in week 1 is: *(Apply)*
A. 0
B. 200
C. 600
D. 1,200

---

### Q10. A component has lead time = 2 weeks. Planned order receipt is week 5. Planned order release week is: *(Apply)*
A. Week 3
B. Week 4
C. Week 5
D. Week 7

---

### Q11. Low-level coding in MRP is used to: *(Understand)*
A. Speed up the printing of BOMs
B. Ensure an item is processed only once, with all parent demand netted
C. Reduce the BOM file size
D. Assign workers to lower-level tasks

---

### Q12. The MRP action message "Reschedule in" means: *(Remember)*
A. Push an open order later
B. Pull an open order earlier
C. Cancel an open order
D. Release a new order

---

### Q13. Lot-for-Lot (L4L) sizing: *(Remember)*
A. Orders a fixed quantity each time
B. Orders the exact net requirement each period
C. Always orders EOQ
D. Always orders the period's forecast

---

### Q14. A supplier requires a minimum order of 5,000 units; weekly demand is 1,200 units. Most appropriate lot-sizing rule: *(Apply)*
A. Lot-for-Lot
B. EOQ
C. Fixed Order Quantity at 5,000 (or POQ covering several weeks)
D. Min/Max with low Max

---

### Q15. MPS for Bike A: 800/wk for 4 weeks. BOM uses 1 frame per bike. Lead time for frame = 3 weeks. Frame on-hand = 1,000 at start of week 1. If we use L4L, planned order release in week 1 is: *(Apply)*
A. 0
B. 600
C. 800
D. 1,000

---

### Q16. CTP (Capable-to-Promise) differs from ATP in that CTP: *(Analyze)*
A. Considers a replanning of capacity and materials, not just existing schedule
B. Only applies to ETO
C. Replaces ATP entirely
D. Has nothing to do with promise dates

---

### Q17. A two-level MPS is typically used in which environment? *(Apply)*
A. Pure MTS
B. ATO
C. ETO
D. Job shop

---

### Q18. The Planning Time Fence is typically set to: *(Understand)*
A. One week
B. The cumulative lead time of the longest material path
C. The current month
D. The fiscal year

---

### Q19. Which of these is NOT a typical MRP input? *(Remember)*
A. Master Production Schedule
B. Bill of Materials
C. Lead times
D. Customer satisfaction scores

---

### Q20. The output of MRP includes all of the following EXCEPT: *(Remember)*
A. Planned order receipts
B. Planned order releases
C. Action messages
D. Worker performance reviews

---

### Q21. A planner sees "Reschedule out" for an open purchase order. This means: *(Remember)*
A. Cancel the order
B. Receive it later than originally planned
C. Receive it sooner than originally planned
D. Split it between two suppliers

---

### Q22. A component's projected on-hand goes negative in week 3. The system should generate: *(Understand)*
A. A planned order to arrive in week 3
B. A scheduled receipt for week 1
C. A cancellation message
D. A capacity alert only

---

### Q23. The MPS is reconciled with which higher-level plan? *(Understand)*
A. CRP
B. S&OP / IBP
C. PAC
D. The strategic plan only

---

### Q24. MRP "pegging" provides: *(Understand)*
A. A way to find out which parent's demand created a given component requirement
B. Inventory location data
C. Supplier scorecard data
D. Cost roll-up data

---

### Q25. MPS for week 6 = 500. Scheduled receipts = 0. Customer orders in week 6 = 350. ATP for week 6 is: *(Apply)*
A. 0
B. 150
C. 350
D. 500

---

### Q26. The single most-tested critical *idea* of MRP is: *(Evaluate)*
A. Forecast everything
B. Calculate dependent demand from MPS + BOM, offset by lead time
C. Schedule by the closest due date
D. Use safety stock for everything

---

### Q27. A scheduled receipt is: *(Remember)*
A. An order placed but not yet received
B. The MPS itself
C. Inventory on-hand
D. A forecast revision

---

### Q28. A "firm planned order" in MRP differs from a normal planned order in that it: *(Understand)*
A. Will not be moved or modified by the system automatically
B. Has not been released yet
C. Has higher priority
D. Is always lot-for-lot

---

## 🎯 Answers + Explanations

### Q1: **C. Finished goods (end items)**
MPS plans the *anchor* level, finished goods or, in ATO, sub-assemblies in a two-level MPS.

### Q2: **C. Dependent demand items (components, materials)**
MRP's job is to translate the MPS into all the components needed via the BOM.

### Q3: **B. Independent demand when sold as a spare; dependent when consumed inside a finished good**
Both demand streams must be aggregated for the same physical item, usually via a service-parts MPS alongside the regular MPS.

### Q4: **B. Closer in time than the Planning Time Fence**
DTF is the *frozen* zone closer in time. PTF is the *slushy* zone further out.

### Q5: **B. Customer orders only (forecast is ignored)**
A standard exam trap. Inside the DTF, only firm orders count toward PAB.

### Q6: **B. The MPS for that period minus customer orders before the next MPS receipt**
The portion of the MPS *not yet committed* to existing orders.

### Q7: **A. 70**
ATP = 200 (MPS) − 130 (orders against this receipt) = **70**.

### Q8: **C. 2,000**
2 pedals × 1,000 bikes = 2,000 pedals.

### Q9: **B. 200**
Net = Gross − on-hand − scheduled receipts = 1,200 − 400 − 600 = **200**.

### Q10: **A. Week 3**
Release = Receipt − Lead Time = 5 − 2 = **week 3**.

### Q11: **B. Ensure an item is processed only once, with all parent demand netted**
MRP processes items in low-level-code order so all parents' requirements are aggregated before the component's own planned orders are calculated.

### Q12: **B. Pull an open order earlier**
"Reschedule in" = pull in (earlier). "Reschedule out" = push out (later).

### Q13: **B. Orders the exact net requirement each period**
L4L minimizes inventory but is sensitive to setup cost.

### Q14: **C. Fixed Order Quantity at 5,000 (or POQ covering several weeks)**
Supplier minimum constrains the choice. L4L would violate the minimum.

### Q15: **C. 800**
Gross requirement is 800 frames each week. On-hand 1,000 covers week 1 (net 0) and leaves 200, so week 2's net is 600 and weeks 3–4 net 800 each. With a 3-week lead time, a planned order release in week 1 is the one whose receipt lands in week 4 (1 + 3), and week 4's net requirement under L4L is 800. So the planned order release in week 1 = **800**. (The answer is 0 only if scheduled receipts already cover week 4.)

### Q16: **A. Considers a replanning of capacity and materials, not just existing schedule**
ATP works against the current MPS as-is. CTP runs a what-if reschedule.

### Q17: **B. ATO**
Two-level MPS = modules + final assembly schedule. The signature ATO architecture.

### Q18: **B. The cumulative lead time of the longest material path**
PTF is usually set so that *all* material has time to be ordered and arrive, i.e., cumulative LT.

### Q19: **D. Customer satisfaction scores**
MRP needs MPS, BOM, inventory records, lead times, lot-sizing rules. CSAT isn't part of the calculation.

### Q20: **D. Worker performance reviews**
Not an MRP output.

### Q21: **B. Receive it later than originally planned**
"Out" = push out in time.

### Q22: **A. A planned order to arrive in week 3**
Negative PAB signals an unmet need; MRP issues a planned order to close the gap, offset by the lead time.

### Q23: **B. S&OP / IBP**
S&OP sets the family-level plan; MPS must reconcile to that family plan.

### Q24: **A. A way to find out which parent's demand created a given component requirement**
Pegging is traceability: top-down (where will this be used?) and bottom-up (where did this requirement come from?).

### Q25: **B. 150**
ATP = 500 (MPS) − 350 (orders) = **150**.

### Q26: **B. Calculate dependent demand from MPS + BOM, offset by lead time**
This is the essence of MRP. Everything else (lot-sizing, action messages, pegging) supports this core calculation.

### Q27: **A. An order placed but not yet received**
Open purchase order or open manufacturing order, already committed but not yet on-hand.

### Q28: **A. Will not be moved or modified by the system automatically**
"Firm planned order" is human-locked; MRP cannot reschedule or change quantity automatically.

---

## 📊 Score Yourself

- 26–28/28 → 🏆 Ready for Practice Exam 1
- 22–25/28 → ✅ Solid. Re-do the calculations you got wrong.
- 17–21/28 → ⚠️ Re-read, watch videos #1 and #2, retry tomorrow.
- <17/28 → 🔁 Restart. This module is critical.

---

## 🃏 Add To Your Flashcards

- MPS vs MRP scope
- DTF vs PTF (which is closer? which freezes the forecast?)
- ATP formula: MPS − orders before next MPS
- MRP net requirement: Gross − on-hand − scheduled receipts
- Planned order release = receipt − lead time
- 5 lot-sizing rules (L4L, EOQ, POQ, FOQ, Min/Max)
- 4 action messages (release, reschedule in, reschedule out, cancel)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), then [Module 5: Capacity Planning](../Module-05-Capacity-Planning/Reading.md)
