# ✏️ Module 3 Quiz: Order Management & Fulfillment

> **Instructions:** 25 questions. Aim for 20/25.
> Each question tagged with its **Bloom's level**.

---

## Questions

### Q1. The Order-to-Cash cycle ends with: *(Remember)*
A. Delivery
B. Invoicing
C. Cash collection
D. Returns

---

### Q2. ATP (Available to Promise) is: *(Understand)*
A. Net on-hand minus committed orders
B. Net on-hand plus planned receipts
C. Sum of all future shipments
D. The forecasted demand

---

### Q3. CTP (Capable to Promise) differs from ATP because CTP: *(Analyze)*
A. Subtracts safety stock
B. Includes planned production / planned inbound receipts
C. Only looks at past data
D. Ignores allocations

---

### Q4. EDI 850 is a: *(Remember)*
A. Invoice
B. Purchase Order
C. Advance Shipping Notice
D. Bill of Lading

---

### Q5. EDI 856 is a(n): *(Remember)*
A. Invoice
B. Purchase Order
C. Advance Shipping Notice (ASN)
D. Purchase Order acknowledgement

---

### Q6. EDI 810 is a: *(Remember)*
A. Invoice
B. Purchase Order
C. Advance Shipping Notice
D. Inventory snapshot

---

### Q7. A DC has 500 small e-com orders per shift with high SKU overlap. Best picking strategy: *(Apply)*
A. Discrete (one order at a time)
B. Batch (multiple orders at once)
C. Zone only
D. Manual paper picking

---

### Q8. Wave picking is most appropriate when: *(Apply)*
A. The DC has very few orders
B. Outbound shipping cutoffs drive timing (e.g., FedEx 5pm pickup)
C. Picking accuracy is unimportant
D. There is only one SKU

---

### Q9. Perfect Order is the: *(Understand)*
A. Sum of OnTime%, Complete%, Damage-Free%, Correct Invoice%
B. Average of those four
C. Multiplicative product of those four
D. Maximum of those four

---

### Q10. If a fulfillment operation runs at 95% OnTime, 95% Complete, 95% Damage-Free, 95% Correct Invoice, perfect order ≈: *(Apply)*
A. 95%
B. 90%
C. 86%
D. 81.5%

---

### Q11. OTIF stands for: *(Remember)*
A. Out-of-Trade Inventory Forecast
B. On-Time In-Full
C. Open Transit Issue Form
D. Order Tracking Information Feed

---

### Q12. OTIF is typically: *(Understand)*
A. A self-reported internal metric
B. A retailer-imposed metric, often with chargebacks for missing
C. The same as perfect order
D. Required only for international shipments

---

### Q13. Pick-to-light is generally: *(Understand)*
A. The slowest manual picking technology
B. The fastest manual picking technology, but high CapEx for LEDs
C. The cheapest option overall
D. Less accurate than paper

---

### Q14. The MOST EXPENSIVE leg of a parcel delivery is typically: *(Remember)*
A. Trunk-line (long-haul)
B. Cross-dock sortation
C. Last-mile (final leg to consumer)
D. Customs clearance

---

### Q15. BOPIS means: *(Remember)*
A. Best Of Picked Inventory Selection
B. Buy Online, Pick up In Store
C. Buy Online, Pay In Store
D. Backorder Online, Print In Store

---

### Q16. A "dark store" is: *(Understand)*
A. A store with no lights to save energy
B. A closed-to-public store dedicated to online fulfillment
C. A clandestine warehouse
D. A returns-only facility

---

### Q17. Zone picking works best when: *(Apply)*
A. The DC is very small
B. The DC is large with many SKUs and orders pass picker-to-picker by zone
C. There is only one picker
D. All items are identical

---

### Q18. The Must Arrive By Date (MABD) is: *(Understand)*
A. The delivery window the retailer enforces and clocks for OTIF
B. An optional courtesy date
C. The supplier's choice
D. Not measurable

---

### Q19. A B2B customer's credit hold should: *(Analyze)*
A. Be ignored to ship faster
B. Block release of the order until Finance clears
C. Be overridden by Sales
D. Only matter at month-end

---

### Q20. The 6th step of order-to-cash (per typical CLTD framing) is: *(Remember)*
A. Order entry
B. ATP check
C. Order confirmation to the customer
D. Cash collection

---

### Q21. A DC sources orders from the location with the lowest landed cost. This is: *(Apply)*
A. Closest-to-customer sourcing
B. Cost-optimized sourcing
C. Single-DC priority
D. Inventory-balancing

---

### Q22. Allocation in order management means: *(Remember)*
A. Splitting an order into multiple shipments
B. Reserving stock against a specific order until shipped
C. Refunding the customer
D. Updating the forecast

---

### Q23. A 200-order shift uses cluster picking with multi-bin carts. The PRIMARY benefit is: *(Analyze)*
A. Higher inventory accuracy
B. Lower travel time by picking multiple orders in one trip
C. Lower DC space requirement
D. Eliminates packing

---

### Q24. A retailer measures fill rate at the line level rather than order level. This metric is called: *(Remember)*
A. Order fill rate
B. Unit fill rate
C. Line fill rate
D. SKU fill rate

---

### Q25. A grocery chain wants 30-minute online order fulfillment in urban areas. The MOST appropriate solution is: *(Evaluate)*
A. One central national DC
B. Micro-fulfillment centers and dark stores near demand
C. Ship from the manufacturer
D. International freight forwarders

---

## 🎯 Answers + Explanations

### Q1: **C. Cash collection**
OTC = Order-to-Cash. Cash collection (DSO clock stops) is the final step, not delivery.

### Q2: **A. Net on-hand minus committed**
ATP is what you can promise *right now* — physical stock minus already-committed orders.

### Q3: **B. Includes planned receipts**
CTP layers on inbound planned receipts/production, so you can promise future delivery dates that ATP alone would reject.

### Q4: **B. Purchase Order**
EDI 850 = PO. Memorize: 850 PO, 855 PO Ack, 856 ASN, 810 Invoice.

### Q5: **C. Advance Shipping Notice (ASN)**
EDI 856 tells the receiver what's coming, by carton, on which trailer.

### Q6: **A. Invoice**
810 = invoice. (Some retailers also use 820 for remittance advice.)

### Q7: **B. Batch picking**
High overlap + many small orders = batch (pick 20 orders' worth of SKU-X in one trip, then sort to orders at packing).

### Q8: **B. Outbound cutoff-driven**
Wave picking groups orders to hit a specific outbound truck/cutoff time.

### Q9: **C. Multiplicative product**
Perfect Order multiplies all four components. Sums and averages over-state quality.

### Q10: **D. 81.5%**
0.95^4 = 0.8145 ≈ 81.5%.

### Q11: **B. On-Time In-Full**
OTIF = On-Time + In-Full. Walmart, Target, Kroger all enforce variants.

### Q12: **B. Retailer-imposed with chargebacks**
Walmart's OTIF policy famously charges suppliers 1–3% for misses below their threshold.

### Q13: **B. Fastest manual, high CapEx**
Pick-to-light is among the fastest at the bin but installs LEDs per location.

### Q14: **C. Last-mile**
Last-mile is famously 28–53% of total parcel cost due to low drop density and time per stop.

### Q15: **B. Buy Online, Pick up In Store**
Standard omnichannel pattern.

### Q16: **B. Closed-to-public store for online fulfillment**
Dark stores look like stores but exist to fulfill online orders.

### Q17: **B. Large DC, many SKUs, pass-through zones**
Zone picking divides the DC; orders flow through zones or items pass between zones.

### Q18: **A. The window the retailer enforces**
MABD is the *contract* clock for OTIF.

### Q19: **B. Block release until Finance clears**
Releasing on credit hold creates DSO and bad-debt risk.

### Q20: **C. Order confirmation**
Sequence: Inquiry → Entry → Validation → ATP/CTP → Allocation → **Confirmation** → Pick-pack-ship → Invoice → Cash → Returns.

### Q21: **B. Cost-optimized sourcing**
Lowest landed cost = cost-optimized. Closest-to-customer is distance-only.

### Q22: **B. Reserving stock for a specific order**
Allocation locks units (until ship or expiry).

### Q23: **B. Lower travel time**
Multi-bin carts let one picker handle several orders per trip; travel time per unit drops.

### Q24: **C. Line fill rate**
Order fill = orders complete; line fill = lines (per order) complete; unit fill = units shipped/units ordered.

### Q25: **B. MFC + dark stores**
Sub-30-minute urban grocery fulfillment requires inventory close to demand — exactly the MFC/dark-store thesis.

---

## 📊 Score Yourself

- 23–25/25 → 🏆 Mastered Module 3.
- 20–22/25 → ✅ Review wrong answers.
- 16–19/25 → ⚠️ Re-read picking strategies + perfect order section.
- <16/25 → 🔁 Restart.

---

## 🃏 Add To Your Flashcards

- 10-step OTC cycle
- ATP vs CTP definitions and example
- EDI 850/855/856/810 codes
- 5 picking strategies & when each fits
- Perfect Order = multiplicative
- OTIF (retailer-imposed) vs perfect order (internal)
- Last-mile cost share (28–53%)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4](../Module-04-Inventory-Distribution/Reading.md)
