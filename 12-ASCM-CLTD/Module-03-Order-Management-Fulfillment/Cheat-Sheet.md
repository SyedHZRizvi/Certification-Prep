# 📋 Module 3 Cheat Sheet: Order Management & Fulfillment

> One page. Print it. Review before the exam.

---

## 🔄 Order-to-Cash (OTC) Cycle (10 steps)

```
1. Inquiry / RFQ
2. Order entry
3. Validation (credit, fraud, address)
4. ATP / CTP check
5. Allocation & sourcing
6. Confirmation
7. Pick, pack, ship
8. Invoice
9. Cash collection ← OTC ENDS HERE
10. Returns
```

---

## 📑 EDI Document Codes (MEMORIZE)

| Code | Document |
|------|----------|
| 850 | Purchase Order |
| 855 | PO Acknowledgement |
| 856 | Advance Shipping Notice (ASN) |
| 810 | Invoice |
| 820 | Remittance Advice |

---

## ✅ ATP vs CTP

```
ATP = On-hand − Committed (current, conservative)
CTP = ATP + Planned receipts/production (future-aware)
```

---

## 🏭 Picking Strategies, When to Use

| Strategy | Best when |
|----------|-----------|
| Discrete | Small DC, few orders |
| Batch | Many small orders, high SKU overlap |
| Zone | Large DC, many SKUs, pass-through |
| Wave | Outbound shipping cutoffs drive timing |
| Cluster | Small e-com orders, multi-bin carts |

🧠 *Mnemonic:* "Don't Be Zonking Without Cooperation", Discrete, Batch, Zone, Wave, Cluster.

---

## 🤖 Picking Technology Accuracy

| Tech | Accuracy | CapEx |
|------|----------|-------|
| Paper | 95–98% | Lowest |
| RF scanner | 99–99.5% | Medium |
| Voice | 99.7–99.9% | Medium |
| Pick-to-light | 99.7–99.9% | High |
| Goods-to-person | 99.9%+ | Highest |

---

## 📊 Fulfillment KPIs

```
Order fill rate = Orders shipped complete / Total orders
Line fill rate  = Lines complete / Lines ordered
Unit fill rate  = Units shipped / Units ordered

Perfect Order = OnTime% × Complete% × Damage-Free% × Correct-Invoice%
(MULTIPLICATIVE, 95%^4 ≈ 81.5%)

OTIF = On-Time + In-Full   (retailer-imposed, chargebacks common)
```

---

## 🌐 Omnichannel Glossary

| Term | Meaning |
|------|---------|
| BOPIS | Buy Online Pick In Store |
| BORIS | Buy Online Return In Store |
| Ship-from-store | Store as fulfillment node |
| Dark store | Closed-to-public, online-only |
| MFC | Micro-Fulfillment Center |
| DOM | Distributed Order Management |
| Endless aisle | In-store digital order to remote node |
| Last-mile | 28–53% of total parcel cost |

---

## 🏆 Exam Power Phrases

Usually CORRECT:

- ✅ "Use CTP when promising on future receipts"
- ✅ "Batch pick for many small orders with overlap"
- ✅ "Perfect order is multiplicative"
- ✅ "OTIF is retailer-imposed"

Usually WRONG:

- ❌ "ATP and CTP are interchangeable"
- ❌ "Perfect order = average of components"
- ❌ "Last-mile is the cheapest leg"
- ❌ "EDI 850 = invoice" (it's the PO)

---

## ⚠️ Anti-Patterns

- ❌ Releasing orders on credit hold
- ❌ Treating perfect order as additive
- ❌ Picking discrete in high-volume e-com
- ❌ Same service for every customer tier

---

## ✏️ Quick Self-Check

1. ATP vs CTP, one-line each? ___
2. EDI 850, 855, 856, 810? ___
3. Perfect Order math? ___
4. Best picking strategy for 500 small e-com orders? ___
5. OTIF, who imposes it? ___

---

➡️ [Module 4: Inventory & Distribution](../Module-04-Inventory-Distribution/Reading.md)
