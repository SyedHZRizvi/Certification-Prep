# Module 3: Order Management & Fulfillment 📦

> **Why this module matters:** A logistics network is only as good as the orders flowing through it. Get order management right and the warehouse sings. Get it wrong and you'll have perfect inventory levels — sitting on the wrong product, in the wrong DC, while customers cancel.

---

## 🍕 A Story: The Espresso Order That Took Two Weeks

A small e-commerce site sells specialty espresso machines. A customer in Phoenix orders one Monday morning. Easy, right?

Behind the scenes, here's what *actually* happens:
1. **Order entry** — customer hits "Buy." Order is created in the OMS.
2. **Validation** — credit card check, fraud screen, address verification.
3. **ATP check** — "Available-to-promise" lookup: do we have it? In which DC?
4. **Allocation** — system reserves the unit at LA DC.
5. **Sourcing decision** — LA is closer, but Reno DC is on a faster carrier route to Phoenix.
6. **Confirmation** — customer gets "Shipping Monday."
7. **Pick-pack-ship** — Reno DC picks, packs, manifests to UPS.
8. **In-transit** — UPS, 3-day ground.
9. **POD** — proof of delivery.
10. **Cash collection** — credit card settles.

Now imagine *any* step breaks: card declines, ATP shows units that don't exist, allocation locks the wrong DC, picker grabs the espresso *grinder* instead of the machine. **Two weeks later** the customer has a grinder, a charge, and an unhappy Yelp review.

Order management is the **nervous system** of logistics. This module covers every nerve.

---

## 🔄 The Order-to-Cash (OTC) Cycle

The single most-tested concept in this module. **Memorize the 10 steps:**

```
1. Customer inquiry / RFQ          (pre-order)
2. Order entry                     (channel: web, EDI, phone, sales)
3. Order validation                (credit, fraud, address, pricing)
4. ATP / CTP check                 (can we promise?)
5. Allocation & sourcing           (which DC / fulfillment node?)
6. Confirmation                    (email/EDI 855 to customer)
7. Picking, packing, shipping      (DC execution)
8. Invoicing                       (EDI 810 / paper)
9. Cash collection                 (DSO clock starts when invoiced)
10. Returns (if any)               (Module 8 territory)
```

Each step has measurable cycle time. The sum is **OTC cycle time** — a key supply-chain KPI.

🎯 **Exam tip:** OTC ends with **cash collection**, not delivery. Cash is when value is realized.

---

## 🛒 Order Capture Channels

Where orders come in shapes how you process them.

| Channel | Typical buyer | Latency | Volume per order |
|---------|---------------|---------|------------------|
| **Web / DTC** | Consumer | Real-time | Small (1–3 lines) |
| **Mobile / App** | Consumer | Real-time | Small |
| **EDI** | B2B retailers | Batched (4–6/day) | Large (50+ lines) |
| **Marketplace (Amazon, Walmart)** | Consumer | Real-time | Small |
| **Phone / Email / Manual** | Smaller B2B, legacy | Slow | Variable |
| **EDI 850** | Standard B2B Purchase Order document | | |
| **Punch-out / cXML** | Indirect procurement | Real-time | Variable |

🎯 **Exam terms:** EDI 850 = PO. EDI 855 = PO acknowledgement. EDI 856 = Advance Shipping Notice (ASN). EDI 810 = invoice. **These appear on the exam.**

---

## ✅ ATP, CTP, and Allocation

Three terms that get mixed up. Know each cold.

| Term | Meaning |
|------|---------|
| **ATP (Available to Promise)** | Net on-hand inventory minus committed orders, by location and date |
| **CTP (Capable to Promise)** | ATP + planned production/inbound that could be reallocated to this order |
| **Allocation** | Reserving stock against a specific order until shipped |
| **Backorder** | Order accepted with no current stock; ships when replenished |

**ATP example:**
- On-hand at DC: 100 units
- Already-committed orders shipping in next 5 days: 80 units
- ATP = 20 units

**CTP example:** Same as above, plus 200 units arriving via inbound truck on day 3 → CTP for delivery on day 4+ = 220 units.

🚨 **Trap on the exam:** ATP is *current* and conservative. CTP is *future-aware* and includes planned receipts. Don't confuse them.

---

## 🎯 Order Sourcing & Allocation Strategies

When you have multiple DCs holding the same SKU, *which one ships*? Order management systems use these rules:

| Strategy | Logic |
|----------|-------|
| **Closest-to-customer** | Minimize outbound freight + time |
| **Lowest-cost** | Choose DC with lowest landed cost (freight + handling + duty) |
| **Inventory-balancing** | Drain the DC with surplus stock |
| **Carrier-optimized** | Choose DC whose carrier has free capacity / better rate |
| **Single-DC priority** | Use primary DC unless out-of-stock |
| **Zone-skipping** | Ship parcel deep into a region before injecting into carrier (saves cost) |

🎯 **Exam pattern:** "A retailer wants to minimize total shipping cost while maintaining 2-day service." → Cost-optimized with service constraints (mixed-integer).

---

## 📋 Order Promising Rules

How firm is your promise to the customer?

| Promise type | Strength |
|--------------|----------|
| **Date promise** | "Ships by Mar 15" — flexible if conditions change |
| **Delivery commitment** | "Delivered by Mar 18" — binding (subject to T&Cs) |
| **Same-day / next-day SLA** | Often contractual, with credits if missed |
| **B2B service-level agreement** | Specific OTIF/perfect-order targets, with penalties |

---

## 🏭 Picking Strategies (CRITICAL FOR THE EXAM)

This is one of the *highest-yield* sections in the entire CLTD body of knowledge. Memorize the strategies and their trade-offs.

### Picking Strategy Comparison

| Strategy | How it works | Best for | Travel time | Sort complexity |
|----------|--------------|----------|-------------|------------------|
| **Discrete (single-order)** | One picker picks one order start-to-finish | Small DC, few orders | High | None |
| **Batch** | One picker picks multiple orders simultaneously | Many small orders for same items | Medium | High (sort downstream) |
| **Zone** | Each picker handles a zone; orders pass through | Large warehouses with many SKUs | Low | Medium |
| **Wave** | Group orders into "waves" timed to shipping cutoffs | Time-driven outbound (e.g., FedEx cutoff at 5pm) | Variable | Variable |
| **Cluster** | Pick multiple orders into multi-bin carts | Small e-com orders | Low | Low |
| **Pick & pass / sequential zone** | Item travels through sequential zones | Apparel, multi-zone warehouses | Low | Low |
| **Wave + zone + batch (hybrid)** | Combine multiple strategies | Modern high-volume DCs | Optimized | Coordinated |

🧠 **Memory hook:** Discrete, Batch, Zone, Wave, Cluster — **"Don't Be Zonking Without Cooperation"** (silly but it sticks).

### Picking Method Trade-offs

```
        TRAVEL TIME
            ↑
    Discrete │
            │       ╲
            │        ╲ Batch
            │         ╲
            │          ╲ Zone
            │           ╲ Wave/Cluster
            │            ╲
            └────────────────► SORT COMPLEXITY
              Less ←→ More
```

🎯 **Exam pattern:** "A DC has 500 small e-com orders per shift, mostly 1–3 lines, with high SKU overlap." → **Batch picking** (pick 20 orders at once, sort at packing).

---

## 🤖 Picking Technology

| Tech | What it is |
|------|-----------|
| **Pick-by-paper** | Printed pick list (legacy, error-prone) |
| **RF scanner (pick-by-RF)** | Handheld scanner directs picker to bin |
| **Pick-by-voice** | Headset gives audio instructions, picker confirms |
| **Pick-to-light** | LEDs at each bin light up to direct picker |
| **Put-to-light** | LEDs at sort destinations direct the put |
| **Vision picking** | AR glasses overlay pick instructions |
| **Robotic / GTP** | "Goods-to-person" robots bring shelves to picker |
| **Automated AS/RS** | Fully automated retrieval (covered in Module 5) |

Accuracy rates (memorize these — exam questions ask):
- Paper: 95–98%
- RF: 99–99.5%
- Voice/Light: 99.7–99.9%
- Goods-to-person: 99.9%+

🎯 **Exam tip:** Pick-to-light is the **fastest manual technology** but high CapEx (LEDs per bin). Voice is **second-fastest** with lower CapEx.

---

## 📦 Order Fulfillment KPIs

The CLTD exam loves KPIs. Know these:

| KPI | Formula | What it measures |
|-----|---------|------------------|
| **Order fill rate** | (Orders shipped complete / Total orders) × 100 | Completeness |
| **Line fill rate** | (Lines shipped complete / Total lines) × 100 | Granular completeness |
| **Unit fill rate** | (Units shipped / Units ordered) × 100 | Quantity completeness |
| **Perfect order** | On-time × Complete × Damage-free × Correctly-invoiced | Holistic quality |
| **OTIF** | On-time + In-full | Common B2B retailer metric |
| **OTD (on-time delivery)** | (On-time deliveries / Total) × 100 | Timing |
| **Order cycle time** | Time from order entry to delivery | Speed |
| **Backorder rate** | Backordered units / Total ordered | Stockout impact |
| **Pick accuracy** | Correct picks / Total picks | Quality at the bin |
| **DSO (Days Sales Outstanding)** | (Receivables / Revenue) × Days | Cash velocity |

### The Perfect Order — DEEP DIVE

Perfect Order is **multiplicative**, not additive:
```
Perfect Order = OnTime% × Complete% × DamageFree% × CorrectInvoice%
```

Example: 95% × 95% × 95% × 95% = **81.5%** perfect order.

🚨 **Trap on the exam:** Many people think "Perfect Order = 95% because each component is 95%." NO. The metric is multiplicative — modest component scores compound into a much lower overall metric.

---

## 🛒 OTIF — The Walmart Cudgel

Walmart, Target, and other major retailers enforce OTIF (On-Time In-Full) with chargebacks:
- Below 98% OTIF → financial penalties (often 1–3% of invoice)
- The clock starts at the *Must Arrive By Date* (MABD)
- "In-full" means the unit count requested

This drives suppliers to:
- Pre-position inventory closer
- Use premium freight to recover delays
- Build OTIF dashboards
- Negotiate appointment windows aggressively

🎯 **Exam tip:** OTIF is *retailer-imposed*; perfect order is *self-measured*. Both matter.

---

## 🔄 Order Lifecycle States

Modern OMS tracks an order through these states:

```
Created → Validated → Confirmed → Allocated → Picked → Packed → Shipped → 
In-Transit → Delivered → Invoiced → Paid → [Returned?] → Closed
```

Each state transition triggers an event. WMS/TMS/OMS integrations rely on event timing.

---

## 🌐 Multi-Channel & Omnichannel Fulfillment

Modern retailers fulfill from many nodes. Vocabulary:

| Term | Meaning |
|------|---------|
| **BOPIS** | Buy Online, Pick up In Store |
| **BORIS** | Buy Online, Return In Store |
| **Ship-from-store** | Use store inventory as a fulfillment node |
| **DOM (Distributed Order Mgmt)** | Software that orchestrates across nodes |
| **Endless aisle** | In-store digital order from another node |
| **Dark store** | Closed-to-public store dedicated to e-com fulfillment |
| **Micro-fulfillment center (MFC)** | Small, automated DC near urban demand |
| **Last-mile** | Final leg to consumer; often most expensive 28–53% of total |

🎯 **Exam pattern:** "A grocery chain wants to fulfill online orders quickly in urban areas." → MFC + dark store.

---

## 💳 Order Validation & Risk Management

Order entry is where fraud, errors, and credit risk are caught.

Checks:
- **AVS** (Address Verification System)
- **CVV** (card verification)
- **Fraud score** (risk engine — Riskified, Signifyd, Stripe Radar)
- **Credit hold** (B2B: customer over credit limit)
- **Inventory hold** (out of stock)
- **Compliance hold** (sanctions, export controls)

🚨 **Trap:** Releasing an order with a credit hold can lock cash for 60–90 days. The exam tests scenarios where logistics rushes shipment but Finance loses the cash.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "ATP and CTP are interchangeable" | ATP is current; CTP includes planned receipts |
| "EDI 850 is an invoice" | 850 is the PO; 810 is the invoice |
| "Perfect order is the sum of components" | It's the **product** — multiplicative |
| "Pick-by-voice is slower than pick-by-light" | Voice ~90% the throughput, but lower CapEx |
| "Allocation locks stock forever" | It locks until the order ships or expires |

---

## 🚨 Exam Traps

🚨 **Trap 1:** Picking the right *picking* strategy for the scenario. Discrete is rarely the answer for high-volume e-com. Batch is common. Wave is right when shipping cutoffs drive timing.

🚨 **Trap 2:** Calculating perfect order — multiply, don't add.

🚨 **Trap 3:** Mixing OTIF (retailer-imposed) with perfect order (internal). OTIF is a *subset* of perfect order.

🚨 **Trap 4:** Confusing EDI 850 (PO), 855 (PO ack), 856 (ASN), 810 (invoice). These all show up.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **OTC cycle** | Order-to-cash, ends with cash collection |
| **ATP** | Available to Promise — current uncommitted stock |
| **CTP** | Capable to Promise — ATP + planned receipts |
| **Allocation** | Stock reserved for a specific order |
| **Backorder** | Order accepted with no current stock |
| **EDI 850/855/856/810** | PO / PO Ack / ASN / Invoice |
| **OTIF** | On-Time In-Full (retailer-imposed) |
| **Perfect order** | OnTime × Complete × Damage-free × Correct invoice |
| **MABD** | Must Arrive By Date (retailer-enforced) |
| **Wave picking** | Group orders by ship cutoff |
| **Batch picking** | Pick multiple orders simultaneously |
| **Zone picking** | Each picker handles a zone |
| **DOM** | Distributed Order Management |
| **BOPIS** | Buy Online Pick In Store |
| **MFC** | Micro-Fulfillment Center |
| **Last-mile** | Final delivery leg |

---

## ✅ Module 3 Summary

You now know:
- 🔄 The 10-step Order-to-Cash cycle
- 🛒 Order capture channels and EDI document codes
- ✅ ATP, CTP, allocation, and backorder mechanics
- 🎯 Order sourcing and zone-skipping strategies
- 🏭 The five picking strategies and when each fits
- 🤖 Picking technologies and their accuracy rates
- 📦 Fulfillment KPIs — fill rate, perfect order, OTIF
- 🌐 BOPIS, BORIS, dark stores, MFCs, last-mile
- 💳 Order validation and risk management

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 4: Inventory & Distribution](../Module-04-Inventory-Distribution/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Order Fulfillment & Across the Dock Concepts, Design, and Operations* by Forger
- 📖 *Distribution: Planning and Control* by Ross
- 🔗 [Walmart OTIF Supplier Standards](https://www.walmartsupplychain.com/) — examples of retailer OTIF policies
- 🔗 [ASCM perfect-order definition](https://www.ascm.org/)
- 🔗 [GS1 EDI Standards](https://www.gs1.org/standards/edi) — 850/855/856/810 reference
