# Module 5: Fulfillment, Logistics & Returns 🚚

> **Why this module matters:** Every order eventually leaves a warehouse, travels through a carrier network, and lands on a customer's doorstep, or, on 5-30% of orders, comes back. Fulfillment economics shape contribution margin more than almost any other line. Get this module wrong and your "winning" Meta ad becomes a money-losing freight bomb.

---

## 🎯 A Real Story: Amazon Opens FBA to Shopify (2024)

For 18 years, Amazon's Fulfillment by Amazon (FBA) network by 2024 the largest fulfillment network on Earth, with 175+ million sq ft of US warehouse space was a walled garden. If you wanted Amazon to fulfill your orders, the orders had to come through Amazon's marketplace. Sellers on Shopify, BigCommerce, their own DTC (Direct-to-Consumer) sites? Use a different 3PL.

In April 2023, Amazon launched **Buy with Prime** for non-Amazon storefronts. By 2024, the integration into Shopify Plus became official: Shopify merchants could surface a Prime badge on their DTC site, and Amazon would fulfill the order from FBA inventory.

The economics shifted overnight. A Shopify merchant could now offer "Free Prime 2-day shipping" historically Amazon's biggest differentiator without sending customers to Amazon. The Buy with Prime fee structure: ~$0-5 fulfillment fee per item + ~$0.30-$1 per cubic foot storage + 3% payment-processing-equivalent fee. Total: comparable to mid-market 3PLs but with Prime brand equity attached.

In parallel, Amazon's Multi-Channel Fulfillment (MCF, FBA inventory used to fulfill non-Amazon orders) opened up to direct Shopify integration. Sellers could ship to Walmart, eBay, Etsy customers, all out of the same FBA inventory.

This is a watershed moment for DTC fulfillment economics. For the first time, the largest fulfillment network in the world is accessible to non-Amazon-marketplace operators. The implications cascade through 3PL selection, returns logistics, and the math of marketplace-vs-DTC channel allocation.

This module gives you the operating knowledge: the 3PL landscape, the FBA/FBM (Fulfillment by Merchant)/MCF/Buy-with-Prime decision matrix, OMS and WMS architecture, returns as a profit center (per Loop Returns 2024 data), and the freight-cost discipline that decides whether furniture DTC works.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Contribution-margin math, covered in [Module 1](../Module-01-E-Commerce-Fundamentals-Business-Models/Reading.md)
> - Payment + fraud flows, covered in [Module 4](../Module-04-Payments-Tax-Fraud/Reading.md)
> - PIM (Product Information Management) hygiene + GTIN strategy, covered in [Module 3](../Module-03-Product-Catalog-Information-Management/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 🏗️ The Fulfillment Stack

```
ORDER created (Shopify, Adobe Commerce, marketplace)
   ↓
OMS (Order Management System), routes to fulfillment node
   ↓
WMS (Warehouse Management System), picks/packs in node
   ↓
TMS (Transportation Management System), selects carrier
   ↓
CARRIER (UPS, FedEx, USPS, DHL, regional carriers)
   ↓
LAST-MILE (carrier OR specialized last-mile e.g., DoorDash for Walmart+)
   ↓
CUSTOMER
   ↓ (5-30% of orders return)
RETURNS UX (User Experience) (Loop, Happy Returns, AfterShip Returns)
   ↓
REVERSE LOGISTICS (back to warehouse → inspect → restock/scrap)
```

🧠 **MEMORIZE THIS.** OMS = brain (where to ship from), WMS = warehouse (how to ship), TMS = carrier selection (whom to ship with). Three separate systems even though some platforms blur them.

---

## 🏭 OMS vs WMS, The Distinction

**OMS, Order Management System.** Upstream brain. Sees all inbound orders across channels (Shopify, Amazon, Walmart, eBay, B2B (Business-to-Business)). Decides:

- Which warehouse fulfills which order (routing logic).
- Whether to split an order across nodes (split-shipment risk).
- When to allocate inventory (real-time vs batched).
- How to handle exceptions (out-of-stock, fraud-hold, address-validation failure).
- When to release to fulfillment (immediately vs hold for batch).

**WMS, Warehouse Management System.** Inside-the-warehouse operations. Controls:

- Receiving (inbound from suppliers).
- Putaway (where to physically store).
- Picking (the path the worker walks).
- Packing (which packaging to use).
- Shipping label generation.

| OMS vendor | Best for |
|------------|----------|
| Manhattan Active Omni | Enterprise omnichannel |
| Salesforce Order Management | Salesforce-stack |
| Fluent Commerce | MACH composable |
| Shopify OMS (native, 2024) | Shopify Plus merchants |
| BigCommerce OMS | BigCommerce |
| Pulse Commerce | Mid-market |
| Aptos OMS | Specialty retail |

| WMS vendor | Best for |
|------------|----------|
| Manhattan SCALE / Active WMS | Enterprise |
| SAP EWM | SAP-stack |
| Oracle WMS Cloud | Oracle-stack |
| HighJump | Mid-market |
| Softeon | Mid-market with automation |
| ShipHero | DTC-focused mid-market |

🎯 **Exam tip:** Many small DTC brands run "OMS-light" inside Shopify itself, ShipBob, or Shipmonk, without a dedicated OMS. This works at < 5,000 orders/month with 1-2 nodes. Above that, dedicated OMS becomes essential.

---

## 🏬 The Three Fulfillment Models

### 1. In-House / Self-Fulfillment

You operate your own warehouse(s). Best for:

- Founders launching < 200 orders/month.
- Hand-assembled or customized products.
- Brands with strong unboxing experience as competitive moat (Glossier early days, Casper original mattress).

**Pros.** Total control. No 3PL fees. Best unboxing.
**Cons.** Doesn't scale. Capital-intensive. Geographic concentration.

### 2. Third-Party Logistics (3PL)

Outsourced operator handles receiving, storage, pick/pack, shipping, returns.

**3PL landscape (US, 2026):**
| 3PL | Type | Best for |
|-----|------|----------|
| ShipBob | DTC-focused, asset-light, multi-node | DTC brands $1M-$50M |
| Shipmonk | DTC subscription + CPG | Same |
| ShipMonk vs ShipBob | Both DTC | ShipMonk subscription-heavy |
| Quiet Logistics | Apparel + premium | Premium DTC |
| ShipNetwork (formerly Rakuten) | Mid-market | Multi-channel |
| Saddle Creek | Enterprise 3PL | Larger brands |
| Amazon MCF (Multi-Channel Fulfillment) | Amazon FBA used for non-Amazon orders | Sellers already in FBA |
| Buy with Prime (Shopify-integrated) | Amazon FBA-DTC | Shopify Plus merchants wanting Prime badge |
| Deliverr (Walmart-owned) | Mid-market 3PL with Walmart 2-day | Walmart Marketplace + DTC |
| WhiteBox | Brand-managed 3PL + marketplace | Mid-market |

### 3. Marketplace-Fulfilled

The marketplace fulfills on your behalf. The two big options:

- **Amazon FBA**, Fulfilled by Amazon. Inventory sits in Amazon's network; Amazon picks/packs/ships and handles returns. Required for Prime badge on Amazon. Fees: ~15% of selling price + storage fees.
- **WFS (Walmart Fulfillment Services)**, Walmart's equivalent. Required for Walmart 2-day shipping. Fees: similar structure to FBA, sometimes cheaper.

**FBA fee structure (2026):**
- Fulfillment fee: $3-$15 per unit depending on size/weight
- Storage fee: $0.87/cubic foot (Jan-Sept), $2.40/cubic foot (Oct-Dec, peak)
- Long-term storage fees if > 365 days
- Returns processing fee: $1-$3
- Inventory placement fees (multi-FC distribution)

🧠 **MEMORIZE THIS.** Amazon FBA fees during October-December (peak) more than double for storage. Many brands run a "lean FBA inventory" strategy during peak to avoid the surcharge.

---

## 🆚 FBA vs FBM (Fulfilled by Merchant)

The classic Amazon decision:

| Dimension | FBA | FBM |
|-----------|-----|-----|
| Who fulfills | Amazon | You (or your 3PL) |
| Prime badge eligibility | Yes | Limited (Seller-Fulfilled Prime, restricted) |
| Buy Box win rate | High | Lower (without Prime) |
| Fee structure | ~15% + storage | Lower (just commission) |
| Inventory control | Limited (Amazon decides FC) | Full |
| Sales velocity | Higher (Prime + Buy Box) | Lower |
| Best for | Standard SKUs, high velocity | Bulky/heavy/slow, brand-stack control |

**Hybrid approach:** Many sellers run FBA for fast-moving SKUs and FBM for slow-moving or oversized SKUs. The FBA Inventory Performance Index (IPI) score affects how much you can store; brands optimize IPI by FBA-ing only what turns.

🚨 **Trap on the exam:** "Seller-Fulfilled Prime" exists but is restricted to invited merchants with documented performance. Most Prime badges go to FBA. Don't assume SFP is an easy path.

---

## 🎁 Amazon's Buy with Prime + Multi-Channel Fulfillment

The 2023-2024 expansion that opened FBA-grade fulfillment to non-Amazon channels:

**Buy with Prime**, A Prime badge surfaced on your DTC site (Shopify, BigCommerce, custom) that uses FBA inventory. Customer checks out on YOUR site; Amazon fulfills.

**Multi-Channel Fulfillment (MCF)**, FBA inventory used to fulfill orders from ANY channel (Walmart, eBay, Etsy, TikTok Shop, your DTC). API (Application Programming Interface)-driven; the seller passes the order to Amazon via API.

**Economics:**
- Fulfillment fees similar to FBA Standard.
- 3% additional fee for payment processing (Buy with Prime).
- Storage fees same as FBA.
- The brand keeps customer data (Buy with Prime).

**Trade-offs:**
- Amazon brands the experience (Prime badge, Amazon return label).
- For some brands this is an asset (Prime trust); for others a liability (Amazon co-branding).

🎯 **Exam tip:** Adobe Commerce Business Practitioner asks about Buy with Prime as of 2024-2025 syllabus updates. The right answer pattern: "Buy with Prime makes sense when (a) the brand already has FBA inventory, (b) Prime badge meaningfully improves DTC conversion, and (c) the brand isn't trying to differentiate on unboxing experience."

---

## 🚛 Carriers and the Last-Mile Layer

**Major carriers (US):**
| Carrier | Sweet spot | Notes |
|---------|------------|-------|
| USPS | Light/small (< 2 lbs), residential | First Class Package Service; Priority Mail |
| UPS | Mid-weight, B2B + residential | Reliable; expensive |
| FedEx | Express, B2B-skewed | Two-day air competitive |
| DHL Express | International | The cross-border default |
| Amazon Logistics | Amazon-fulfilled only | Now ~25% of US package volume |
| Regional carriers (LSO, OnTrac) | West/South regions | Often cheaper than national |
| Shippo / EasyPost | Multi-carrier APIs | Not carriers; orchestration |

**Last-mile (2026 specifics):**
- **DoorDash** powers Walmart+ same-day delivery.
- **Uber** powers Instacart same-day in some markets.
- **Shipt** (Target) for grocery.
- **Roadie** (UPS-owned 2021) for crowd-sourced same-day.

🎯 **Exam tip:** Amazon Logistics now ships approximately 25% of US package volume (2024), second only to UPS. This shifts e-commerce-package-routing math materially.

---

## 📦 Shipping Strategy and Free Shipping Math

Free shipping is a marketing claim AND a cost-allocation decision.

**Three approaches:**
1. **Free shipping always**, Easiest UX; costliest. Costs ~$6-$15 per order absorbed into margin.
2. **Free shipping over $X**, Threshold; common DTC pattern. Lifts AOV but reduces order volume.
3. **Standard shipping with paid express**, Charges shipping but offers paid faster options.

**The Free Shipping Threshold formula:**
```
Threshold = (Average Shipping Cost / Contribution Margin %) × 1.4

If avg shipping = $9 and CM = 50%:
Threshold = ($9 / 0.50) × 1.4 = $25 minimum, often round to $50
```

Baymard 2024 research: free-shipping threshold is the single most-tested CRO (Chief Revenue Officer) element on DTC sites. The right number lifts AOV 8-22%.

🧠 **MEMORIZE THIS.** Free shipping is the #1 driver of cart abandonment when unexpected (Baymard: 49% of abandonments cite shipping cost). Display threshold + countdown ("$12 more for free shipping") drives upsell.

---

## 🔄 Returns, From Cost Center to Profit Center

US e-commerce return rate (2024): ~18-25% across categories. Apparel: 30-40%. Furniture: 5-10% (but expensive when they happen).

**Returns vendors:**
| Vendor | Best for |
|--------|----------|
| Loop Returns | DTC Shopify Plus (most-adopted) |
| Happy Returns (PayPal-owned) | Drop-off-at-The-UPS-Store network |
| AfterShip Returns | Multi-channel multi-region |
| Returnly (Affirm-owned) | DTC with payment-tied refunds |
| Narvar | Enterprise multi-carrier |
| Returnista | Europe-focused |

**Loop's 2024 Returns Research Report data:**
- Brands that offer easy returns see **20-50% higher repurchase rates** in next 12 months.
- 80% of consumers say "returns experience matters" for repeat purchase.
- "Returns as a service" can reduce return rate 10-15% by surfacing better PDP info upfront.
- Restocking fees (5-15%) deter casual returners without significantly impacting CLV (Customer Lifetime Value), most operators avoid them, but high-return categories (apparel, jewelry) can recover margin.

🚨 **Trap on the exam:** "Easy returns" is NOT the same as "free returns." Free returns cost the merchant ~$10-$25 per return; easy returns (paid by customer for low-value, free for high-value) preserves margin. The DTC industry trend in 2024 is "paid returns for low-value categories" (a step backward from 2018-2022 "always free").

🧠 **MEMORIZE THIS.** Returns lift LTV (Lifetime Value) by 20-50% (Loop Returns 2024). Returns are a customer-retention investment, not just a cost.

---

## ♻️ Reverse Logistics and the Inspection Path

A returned item travels:
```
Customer → Drop-off / Pickup → Sortation Center → Brand's warehouse
   → Inspection (Goodyear-style triage)
      ├─ A-grade: restock to inventory
      ├─ B-grade: liquidate (Optoro, Liquidation.com, B-Stock)
      ├─ C-grade: refurbish (third-party refurb)
      └─ D-grade: dispose / recycle
```

A 30-40% return rate at a $50 AOV apparel brand means about $15-20 per order is in reverse logistics. The brands that win are the ones that:

- Inspect quickly (within 48 hours of receipt).
- Restock A-grade fast (recovering AOV).
- Liquidate B-grade in bulk (Optoro takes pallets at ~30-50% of retail).
- Reduce returns by upgrading PDP info (fit guides, AR try-on).

**EU Right of Withdrawal** (Article 9, Consumer Rights Directive 2011/83/EU), EU consumers have a mandatory 14-day right of withdrawal on online purchases, no questions asked. Member states implement; brands must honor.

---

## 💼 Case Study, Amazon's FBA + Buy with Prime Expansion (2023-2024)

**Situation.** Through 2022, Amazon's FBA network was the largest in the world (~175M sq ft, ~110M Prime members in the US) but locked to Amazon marketplace orders. Shopify, with ~5M stores and >$200B GMV (Gross Merchandise Value), had grown to be Amazon's largest non-marketplace competitor. The strategic question for Amazon: should we open FBA's infrastructure to compete with the 3PL market (ShipBob, Shipmonk, Saddle Creek) directly?

**Decision.** In April 2023, Amazon launched **Buy with Prime** publicly (it had been in invite-only beta since 2022). The integration allowed any Shopify, BigCommerce, or custom DTC site to surface a Prime badge using FBA inventory. In parallel, Amazon expanded **Multi-Channel Fulfillment (MCF)** APIs to support Walmart Marketplace, eBay, Etsy, TikTok Shop. By Q4 2023, Buy with Prime was integrated with Shopify Plus as an official channel. In 2024, Shopify and Amazon announced direct one-click installation of the Buy with Prime app from Shopify's app store.

The pricing:

- Fulfillment fee: similar to FBA Standard ($3-$15/unit).
- Storage: standard FBA rates.
- Payment processing: 3% (on top of Stripe/Shopify Payments processing).
- Returns processing: $1-$3 per return.

**Outcome (early 2024-2025 data):**
- Shopify-Amazon integration grew Buy with Prime adopters from ~5,000 (mid-2023) to ~50,000 (mid-2024).
- Reports from operators showed 20-30% conversion lift on Buy with Prime-badged product pages vs identical product pages without (Shopify's blog, Common Thread Collective analyses, 2024).
- 3PL competitors (ShipBob, Shipmonk) reported pricing pressure; ShipBob laid off 10% of staff in Q3 2023 partly attributed to BWP competition.
- Returns volume on Buy with Prime orders ran ~12% lower than 3PL-fulfilled equivalents (Amazon's return policies and logistics are faster).

**Lesson for the exam / for practitioners.** Fulfillment economics shifted permanently in 2023-2024. The decision matrix expanded from "Amazon FBA for marketplace, separate 3PL for DTC" to "Amazon FBA + Buy with Prime for DTC, or pure 3PL for brands that value differentiated unboxing." The exam-answer pattern: when given "should we use Buy with Prime?", the right answer is YES when (a) the brand already has FBA inventory, (b) Prime trust meaningfully drives DTC conversion in the brand's category, and (c) the brand isn't differentiating on unboxing experience. NO when (a) brand is luxury / craft / sustainable-differentiated, (b) unboxing is the moat, or (c) the brand wants full customer-data ownership.

**Discussion (Socratic).**
- Q1: A $25M DTC home-goods brand currently uses ShipBob. They have a small Amazon FBA presence. The CEO (Chief Executive Officer) considers switching DTC to Buy with Prime to gain the Prime badge. Build the strongest argument for staying with ShipBob, and the strongest for switching. What gating metric would decide?
- Q2: Buy with Prime takes Amazon's brand to the customer's DTC experience (Prime badge, Amazon return label). Why might a luxury or DTC-craft brand actively avoid Buy with Prime?
- Q3: Glossier never went FBA-heavy. They built their own 3PL relationships. What strategic principle was Glossier optimizing for that Buy with Prime would have weakened?

---

## 🌐 Cross-Border Fulfillment

For brands shipping internationally, fulfillment splits into:

1. **Origin-country shipping (DDP)**, Ship from US warehouse via DHL or FedEx, with duties paid; customer sees an all-in price.
2. **Regional fulfillment (3PL in target country)**, Ship in-country inventory; faster delivery, better margin, more complexity.
3. **Cross-border specialists**, Global-e, Zonos, Reach, ESW handle DDP shipping, multi-currency, IOSS, returns.

**Global-e** (NASDAQ:GLBE) is the largest cross-border specialist; powers cross-border for Adidas, Versace, Marc Jacobs, GAP, Hugo Boss. Pricing: 2-6% of order value depending on scope.

🎯 **Exam tip:** Adobe Commerce Business Practitioner asks about cross-border fulfillment in 1-2 questions. The right answer for a brand entering the EU: cross-border specialist (Global-e or Zonos) for the first 12 months, then evaluate in-country 3PL once volume justifies.

---

## ⚡ Common Fulfillment Failure Modes

1. **3PL onboarding skipped due-diligence.** Brands ship inventory to a new 3PL without an integration test; first peak season has 14% mis-ship rate.
2. **No OMS when running > 3 channels.** Inventory de-syncs; oversells happen daily; customer-service tickets explode.
3. **FBA inventory mis-allocated during Q4.** Brands store too much; pay $2.40/cubic-foot peak surcharge.
4. **Returns unbudgeted.** Apparel brands forget that 35% return rate means real reverse-logistics costs.
5. **Free shipping promised; threshold too low.** Margin erosion through promise erodes 5-15% of CM.
6. **Cross-border without IOSS.** Customs charges surprise customers; conversion drops 30-50%.
7. **No carrier diversification.** Brand relies 100% on UPS; a 2024 UPS labor disruption sends everything to delays.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **OMS** | Order Management System (routing brain) |
| **WMS** | Warehouse Management System (warehouse operations) |
| **TMS** | Transportation Management System (carrier selection) |
| **3PL** | Third-Party Logistics provider |
| **FBA** | Fulfilled by Amazon |
| **FBM** | Fulfilled by Merchant |
| **SFP** | Seller-Fulfilled Prime |
| **MCF** | Multi-Channel Fulfillment (Amazon API for non-Amazon orders) |
| **Buy with Prime** | Amazon's DTC fulfillment service (launched 2023) |
| **WFS** | Walmart Fulfillment Services |
| **IPI** | FBA Inventory Performance Index |
| **Split shipment** | Order shipped from multiple warehouses |
| **A/B/C/D grade returns** | Inspection grades for restock vs liquidate vs refurbish vs dispose |
| **DDP** | Delivered Duty Paid |
| **DAP** | Delivered at Place |
| **Right of Withdrawal** | EU's mandatory 14-day return right |

---

## ✅ Module 5 Summary

You now know:

- 🏗️ The fulfillment stack (OMS, WMS, TMS, carrier, last-mile, returns)
- 🏬 Three fulfillment models (in-house, 3PL, marketplace-fulfilled)
- 🏭 The 3PL landscape (ShipBob, Shipmonk, Quiet Logistics, etc.)
- 🆚 FBA vs FBM decision matrix
- 🎁 Amazon's Buy with Prime + MCF expansion (2023-2024)
- 🚛 Carrier mix (USPS, UPS, FedEx, DHL, Amazon Logistics, regionals)
- 📦 Free shipping threshold math
- 🔄 Returns vendors (Loop, Happy Returns, AfterShip)
- ♻️ Reverse logistics and A/B/C/D inspection grades
- 🌐 Cross-border fulfillment (Global-e, Zonos)

**Next steps:**
1. 🎥 Videos.md
2. ✏️ Quiz.md
3. 📋 Cheat-Sheet.md
4. ➡️ [Module 6: Conversion Optimization & UX](../Module-06-Conversion-Optimization-UX/Reading.md)

---

## 💬 Discussion, Socratic prompts

1. A $40M DTC home-fragrance brand currently uses ShipBob for DTC + FBA for Amazon. The CEO is considering moving DTC to Buy with Prime to consolidate. Build the case FOR consolidation and the case AGAINST. What's the unit economics gating decision?

2. Returns are a 20-30% of revenue line at most apparel DTC brands. Loop Returns claims easy returns lifts LTV 20-50%. Where does the "easy returns" thesis break? Identify two product categories where harder returns would actually improve unit economics.

3. The EU's 14-day Right of Withdrawal is mandatory. But fast-fashion brands like Shein operate with a "return at customer's cost" policy at the edge of compliance. What's the principle that decides when "compliant but friction-heavy" is the right call?

4. Amazon Logistics now ships ~25% of US package volume. UPS + FedEx + USPS still control 75%. When does it make sense to NOT have Amazon Logistics in your carrier mix even on FBA orders?

5. A new founder argues that they'll do in-house fulfillment from their garage at $100K of inventory. At what point does in-house break, and what's the principle that says "now is the time to move to 3PL"?

---

> **Where this leads.**
> - Inside this course: Module 7 returns to fulfillment when discussing Amazon Ads ACoS (Advertising Cost of Sale) math; Module 9 returns when discussing GA4 (Google Analytics 4) fulfillment events; Module 10 returns deeply for cross-border DDP and IOSS integration.
> - Cross-course: [10-ASCM-CSCP Module 7](../../10-ASCM-CSCP/Module-07-Logistics-Distribution-Warehousing/Reading.md) and [12-ASCM-CLTD Module 5](../../12-ASCM-CLTD/Module-05-Warehouse-Operations/Reading.md) cover the underlying supply-chain disciplines.
> - Practice: Practice Exam 1 has ~6 questions drawn from this module (OMS vs WMS, FBA vs FBM, Buy with Prime, returns economics).

---

## 📚 Further Reading (Optional)

- 📖 [Amazon Buy with Prime documentation](https://buywithprime.amazon.com/), the official guide
- 📖 [Loop Returns *State of Returns 2024*](https://www.loopreturns.com/state-of-returns) annual research
- 📖 [Baymard Institute Cart Abandonment Research](https://baymard.com/research) shipping-related abandonment
- 📖 [ShipBob *2024 State of DTC Fulfillment*](https://www.shipbob.com/) DTC operator benchmarks
- 📖 [Manhattan Associates *Active Omni* product docs](https://www.manh.com/) enterprise OMS reference
- 📖 [EU Consumer Rights Directive Right of Withdrawal text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083) the EU 14-day right
- 📖 [Optoro *State of Returns* report](https://www.optoro.com/) reverse-logistics industry view
