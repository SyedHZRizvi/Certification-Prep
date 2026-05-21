# Module 5: Cost Management & TCO 💰

> **Why this module matters:** CPSM does not test "lowest price." It tests **total cost of ownership**, **should-cost analysis**, and **value engineering**. Get this mindset and you'll answer 20+ exam questions correctly that price-only thinkers will miss.

---

## 🪙 A Story: The $40 Printer That Cost $4,000

A 12,000-person company was excited about a new desktop printer model: $40 cheaper per unit than the incumbent. Procurement signed a 5-year deal for 1,500 printers, saving "$60,000 over the term."

Two years later, IT was screaming. The new printers used proprietary toner cartridges at 2.3× the cost of the old ones. Each printer's annual toner spend went up $480 — across the fleet, **$720,000/year**, or **$3.6M over 5 years**.

Procurement saved $60,000. The company lost $3,540,000.

That is the classic **TCO failure** — buying on **acquisition price** while ignoring the **operating costs** and **disposal costs** that dwarf it. CPSM-trained professionals do not make this mistake.

---

## 🎯 Total Cost of Ownership (TCO) — THE Most Important Concept In Cost

TCO = the **full cost over the entire life** of a product or service.

Three phases:

| Phase | Examples |
|---|---|
| **Acquisition** | Unit price · Tooling · Tariffs · Freight · Insurance · Inspection · Installation |
| **Operating / Use** | Energy · Consumables · Maintenance · Spare parts · Training · Downtime · Warranty claims |
| **Disposal / End-of-Life** | Decommissioning · Recycling · Hazardous-waste fees · Resale value (offset) |

🎯 **MEMORIZE:** TCO is acquisition + operating + disposal. Lowest acquisition price rarely wins on TCO.

### Worked Example — Forklift TCO (5-year horizon)

| Cost Element | Vendor A | Vendor B |
|---|---|---|
| Purchase price | $35,000 | $30,000 |
| Annual fuel | $2,200 × 5 = $11,000 | $3,800 × 5 = $19,000 |
| Annual maintenance | $1,500 × 5 = $7,500 | $2,500 × 5 = $12,500 |
| Operator training | $1,200 | $1,200 |
| Disposal value | -$5,000 | -$2,000 |
| **5-yr TCO** | **$49,700** | **$60,700** |

Vendor A is **$5K MORE on acquisition** but **$11K LESS on TCO**. CPSM picks Vendor A.

---

## 🧮 Should-Cost Analysis

Should-cost = the cost the product **should** cost based on a bottom-up build (materials + labor + overhead + reasonable margin). Compare to supplier's quoted price.

### Build-up

```
Raw materials (kg × $/kg, BOM)
+ Direct labor (hours × $/hr)
+ Indirect labor / overhead
+ Equipment / depreciation
+ Tooling amortization
+ Logistics / freight
+ SG&A
+ Supplier margin (industry benchmark)
= SHOULD-COST
```

Compare to quoted price → identify gap → negotiate from facts.

🎯 **Exam tip:** Should-cost gives you **objective bargaining power**. "Our build-up says $34. Your quote is $52. Please explain the variance." Very different conversation from "give us a discount."

---

## 🎯 Target Costing

Used in product design. Starts from the **market** rather than the cost.

```
Target selling price (market research)
- Required profit margin
= TARGET COST  (max allowed cost of the product)
```

Then engineering, procurement, and operations must **design to** that target cost. Common in automotive, consumer electronics.

🎯 **Different from should-cost:** Should-cost reverse-engineers supplier cost. Target cost is what you're WILLING to pay so you can hit a market price. They complement each other.

---

## 🔧 Value Analysis / Value Engineering (VA/VE)

Originated at GE in 1947 (Lawrence Miles). The discipline of **delivering required function at minimum cost without sacrificing performance, quality, or reliability**.

| Term | Distinction |
|---|---|
| **Value Analysis** | Applied to EXISTING products in production |
| **Value Engineering** | Applied during DESIGN of new products |

### The VA/VE Question Set
1. What is it?
2. What does it DO (function)?
3. What does it COST?
4. What ELSE could do it?
5. What would THAT cost?
6. Will the alternative meet the requirements?

### Common VA/VE wins
- Eliminate over-specified tolerances
- Substitute materials (steel → aluminum, plastic, composite)
- Combine multiple parts into one molded piece
- Standardize fasteners and components
- Outsource to lower-cost specialty supplier
- Use commercial-off-the-shelf (COTS) instead of custom

🎯 **Exam pattern:** "An engineer specified aerospace-grade aluminum for an indoor parts bin." → VA opportunity. The function (hold parts) doesn't require aerospace-grade material.

---

## 📈 Learning Curves

When labor is repetitive, **unit cost falls** as cumulative volume grows. Classic 80% learning curve = each doubling of volume reduces unit cost to 80% of prior.

| Cumulative units | Cost per unit (80% curve, starting at $100) |
|---|---|
| 1 | $100 |
| 2 | $80 |
| 4 | $64 |
| 8 | $51.20 |
| 16 | $40.96 |

🎯 **Exam application:** When you place a large new order on a labor-intensive part, your unit cost should drop with cumulative volume. Build that into your negotiation.

Learning curves DON'T apply well to:
- Highly automated production
- Materials-dominated products
- One-off custom work

---

## 📊 Price Index Analysis

A **price index** tracks the price of a commodity or category over time relative to a base period.

Examples: PPI (Producer Price Index), CRU steel index, Platts oil benchmarks, semiconductor index.

### Uses
- Validate supplier price changes ("Steel went up 8% per CRU — supplier asking 18% increase is unjustified.")
- Build escalation clauses (FP-EPA contracts, Module 3)
- Forecast budget impact

### Indexed-Price Contract Example
> Base price = $1,000/ton at Jan-2025 CRU steel index of 200. Quarterly adjustment = base × (current index / 200).

If index rises to 220, new price = $1,100. If it falls to 180, new price = $900.

🎯 **Exam tip:** Indexed contracts protect BOTH parties from commodity swings. A 100% fixed price on a multi-year commodity contract benefits no one — supplier breaks the contract if prices spike; buyer overpays if prices crash.

---

## 🛡️ Hedging — Locking In Future Prices

When you have material exposure to volatile commodities (oil, copper, aluminum, FX), you can use financial instruments to lock in prices.

| Tool | What It Does |
|---|---|
| **Forward contract** | Lock in a price for delivery on a future date (custom, OTC) |
| **Futures contract** | Exchange-traded standardized forward |
| **Option** | Right (not obligation) to buy/sell at strike price (premium paid) |
| **Swap** | Exchange one cash flow for another (e.g., fixed for floating) |

### Hedging Strategy
- Hedge known exposure (don't speculate)
- Match hedge term to exposure term
- Use Treasury / Finance to execute (not procurement alone)
- Document policy: % hedged, max horizon, allowable instruments

🚨 **Trap on the exam:** "Procurement should hedge fuel prices speculatively to lower costs." Wrong. Hedging reduces RISK, not necessarily cost. And speculation is forbidden in most corporate policies.

---

## 💵 Payment Terms — Working Capital Lever

Payment terms (Net 30, Net 60, Net 90, 2/10 Net 30) are a cost lever.

| Term | Meaning |
|---|---|
| Net 30 | Full payment 30 days after invoice date |
| 2/10 Net 30 | 2% discount if paid within 10 days; otherwise net 30 |
| Net 60 / Net 90 | Common in large enterprises to preserve working capital |

### Cash Discount Math (2/10 Net 30)
Taking the discount means paying 20 days early to save 2%. Annualized = 2% × (365/20) ≈ **36.5% annual return**. A great deal if you have the cash.

### Extended Payment Programs
Some large buyers stretch terms to Net 90+ and offer **supply chain finance** so suppliers can sell receivables to a bank at favorable rates. Win-win when done right; controversial when forced.

🎯 **Exam tip:** Modern supply mgmt balances working capital (long terms) with supplier health (timely payment). Forcing Net 120 on a fragile small supplier can break them.

---

## 📉 Cost Reduction Strategies (Lever Tree)

A typical "cost-down" toolkit:

1. Demand management — Need less (reduce specs, eliminate waste)
2. Specification rationalization — Standardize variants
3. Volume consolidation — Aggregate spend
4. Competitive bidding — Force market test
5. Negotiation — Improve terms within current supplier
6. Make-or-buy reversal — In-source or outsource
7. Should-cost / VA / VE — Attack the cost itself
8. Process redesign — Eliminate non-value steps
9. Total acquisition redesign — Pull-based, lean, JIT
10. Supplier consolidation — Fewer suppliers, more leverage
11. Low-cost-country sourcing — Where it makes sense (TCO!)
12. Supplier-driven innovation — Suppliers find new approaches

🎯 **Exam pattern:** When asked "BEST cost reduction approach for this category," apply Kraljic. Strategic categories favor levers 7-12. Leverage categories favor 3-5. Bottleneck favors 1, 2, 11 carefully.

---

## 📊 ROI, Payback, and NPV — Quick Reference

You'll see these in CPSM cost questions.

| Metric | Formula / Meaning |
|---|---|
| **ROI** | (Gain - Cost) / Cost × 100% |
| **Payback period** | Investment / annual savings (years to break even) |
| **NPV** | Sum of discounted future cash flows minus initial investment |
| **IRR** | Discount rate that makes NPV = 0 |

🎯 **Quick rule:** Payback < 18 months and positive NPV at the company's hurdle rate = green light for most supply investments.

---

## 🧯 Cost Avoidance vs Cost Savings

CPSM distinguishes these.

| Term | Definition | Example |
|---|---|---|
| **Cost savings** | Reduction vs prior actual spend | Same widget last year $10, this year $8 → $2 saving |
| **Cost avoidance** | Avoided increase vs what we would have paid | Supplier asked +15%, we negotiated +5% → 10% avoided |

🚨 **Trap:** Reporting cost avoidance as cost savings to executives is misleading. Both matter; reporting clearly matters more.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| TCO | Total cost of ownership: acquisition + operating + disposal |
| Should-cost | Bottom-up estimate of what an item should cost |
| Target costing | Market price - margin = max cost |
| Value analysis | Cost reduction on existing products |
| Value engineering | Cost reduction during design |
| Learning curve | Unit cost drops as cumulative volume rises |
| Price index | Tracks commodity/category prices over time |
| FP-EPA | Fixed-price with economic price adjustment (indexed) |
| Forward / future / option / swap | Hedging instruments |
| Net 30 / 2/10 Net 30 | Payment terms |
| Supply chain finance | Buyer-facilitated receivables financing for suppliers |
| Cost savings vs avoidance | Real reduction vs avoided increase |
| ROI / payback / NPV / IRR | Investment metrics |

---

## 🚨 Exam Traps

| Trap | Right Lens |
|---|---|
| "Lowest unit price wins" | TCO wins |
| "Hedging always lowers cost" | Hedging reduces risk; cost depends on market |
| "100% fixed price on multi-year commodity" | Use indexed pricing |
| "Cost avoidance = cost savings" | Report them separately |
| "Long payment terms always help us" | Can break small suppliers |
| "VA/VE = cheap materials" | It's eliminate-cost-not-function |
| "Learning curves apply to everything" | Mostly labor-intensive only |

---

## ✅ Module 5 Summary

You now know:
- 💰 TCO and the 3 phases (acquisition / operating / disposal)
- 🧮 Should-cost analysis structure
- 🎯 Target costing approach
- 🔧 VA / VE methodology
- 📈 Learning curves and when they apply
- 📊 Price indices and indexed contracts
- 🛡️ Hedging instruments and when to use them
- 💵 Payment terms as a cost lever
- 📉 12-lever cost-reduction toolkit
- 📊 ROI / payback / NPV / IRR basics
- 🧯 Cost savings vs cost avoidance

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 6: International Supply](../Module-06-International-Supply/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Cost Reduction and Optimization for Manufacturing and Industrial Companies* by Joseph Berk
- 📖 SAVE International (society of value engineers)
- 📖 CME Group education center (futures, hedging basics)
- 📖 Bureau of Labor Statistics PPI (free data)
- 📖 *Strategic Cost Management* by Shank & Govindarajan
