# Module 7: Logistics, Distribution & Warehousing 🚛

> **Why this module matters:** Logistics is where supply chains actually move. Expect 8–12 exam questions on transportation mode trade-offs, warehouse operations, DC types, and 3PL/4PL relationships. The vocabulary is dense and the trade-offs are calculable.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Network design (centralized vs decentralized, crossdock, hub-and-spoke)](../Module-02-Supply-Chain-Design/Reading.md) — Module 2
> - [Inventory math (EOQ, SS, ROP)](../Module-05-Inventory-Capacity/Reading.md) — Module 5
> - [Supplier contracts and SLA basics](../Module-06-Sourcing-Supplier-Management/Reading.md) — Module 6
> Course `12-ASCM-CLTD` (Certified in Logistics, Transportation, and Distribution) takes this module's content 4× deeper if logistics is your career focus.

---

## 🚢 A Story: The Sneaker Brand That Stopped Flying

Naomi runs logistics for **Apex Footwear**, a $400M sneaker brand. Their factory in Vietnam shipped finished product to the US via air for years — fast, but $4.80/pair in freight. The CFO finally insisted: "Why are we paying jet-engine costs on $80 sneakers?"

Naomi ran the math:

| Mode | Cost/pair | Transit time | Inventory needed (in transit) |
|------|----------|--------------|-------------------------------|
| Air | $4.80 | 3 days | $200K |
| Ocean FCL | $0.45 | 30 days | $2.4M |
| Ocean + premium expedite | $0.85 | 18 days | $1.2M |

The pure ocean move saved $4.35/pair on 8M pairs = **$34.8M/yr** — but added $2.2M of in-transit inventory and 27 days of lead time. They piloted a **hybrid**: 85% ocean for replenishment, 15% air for hot SKUs and seasonal launches.

Year-end results: $29M saved in freight, stockouts down 11%, on-time launches at 96%. The right answer wasn't "all air" or "all ocean." It was matching the mode to the SKU.

That's logistics strategy. This module gives you the vocabulary and trade-offs to defend those choices on the exam.

---

## 🎯 Logistics — The Council's Definition

The Council of Supply Chain Management Professionals (CSCMP) defines logistics as:

> *That part of supply chain management that plans, implements, and controls the efficient, effective forward and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption to meet customers' requirements.*

The **8 logistics activities** (used on the exam):

1. Customer service
2. Demand forecasting (operational)
3. Inventory management
4. Logistics communications
5. Material handling
6. Order processing
7. Packaging
8. Transportation
9. Warehousing & storage
10. Reverse logistics

---

## 🚚 The 5 Transportation Modes

| Mode | Speed | Cost | Capacity | Best For |
|------|------:|-----:|---------|----------|
| **Air** | Fastest | Highest | Lowest | Time-critical, high-value, low-weight |
| **Road / truck** | Fast | Medium | Medium | Doorstep delivery, short-medium domestic |
| **Rail** | Medium | Low | High | Heavy bulk over long distances |
| **Water / ocean** | Slowest | Lowest | Highest | Global, bulky, time-tolerant |
| **Pipeline** | Continuous | Low | High | Liquids, gases (oil, water, gas) |

### Multimodal / intermodal
- **Multimodal**: multiple modes under one contract
- **Intermodal**: same shipping container moves across modes (truck → rail → ship → truck) without rehandling

🎯 **Exam tip:** Intermodal containerization is THE innovation that made global logistics economical. Containerization invented by **Malcolm McLean** (Sea-Land Industries) in April 1956 with the SS *Ideal X* sailing Newark → Houston. The history is documented in **Marc Levinson, *The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger*** (Princeton University Press, 2e 2016).

### Truck variants

| Variant | Meaning |
|---------|--------|
| **FTL** | Full truckload — entire trailer for one shipment |
| **LTL** | Less-than-truckload — pooled shipments < 15,000 lbs |
| **Parcel** | Individual packages (FedEx, UPS, USPS) |
| **Reefer** | Refrigerated trailer |
| **Flatbed** | Open trailer for oversized loads |

---

## 🏭 Warehouse Types & Functions

| Type | Purpose |
|------|---------|
| **Manufacturer warehouse** | At plant; stores raw + WIP + finished |
| **Distribution center (DC)** | Mid-network; consolidates and disperses |
| **Crossdock** | Receive + ship same day, minimal storage |
| **Fulfillment center (FC)** | Pick + pack e-commerce orders |
| **Bonded warehouse** | Customs-supervised, deferred duty |
| **Public warehouse** | Rented space (3PL) |
| **Private warehouse** | Owned by the user |
| **Contract warehouse** | Hybrid — multi-year exclusive 3PL deal |

### Core warehouse operations (5 functions)

```
   Receiving → Putaway → Storage → Picking → Packing → Shipping
                                     ↓
                              (Replenishment loop)
```

### Picking strategies

| Method | Description | Best For |
|--------|-------------|----------|
| **Discrete (order picking)** | One order at a time | Small ops, custom orders |
| **Batch picking** | Multiple orders picked together | Many small orders, same zone |
| **Zone picking** | Pickers stay in their zone, orders move between zones | Large DC, high SKU count |
| **Wave picking** | Time-batched releases | Synchronizing with carrier pickups |
| **Goods-to-person (GTP)** | Automation brings items to picker | High-throughput e-commerce |

### Storage strategies

- **Random storage** — any SKU in any location (max density)
- **Fixed location** — each SKU has a dedicated slot (max findability)
- **Zone storage** — fast movers near dock, slow at the back (slotting)
- **High-bay racking / mezzanines** — vertical density

---

## 🌐 3PL vs 4PL vs LLP

| Type | Description | Example |
|------|-------------|---------|
| **1PL** | Self-handled logistics | Bakery driving its own van |
| **2PL** | Carrier (just transport) | UPS, Maersk |
| **3PL** | Outsourced logistics services (multi-function) | XPO, DHL Supply Chain, Penske |
| **4PL / LLP** | Network orchestrator managing multiple 3PLs | Accenture's old supply-chain practice, GEODIS 4PL |
| **5PL** | Marketplace / digital broker | Flexport, Project44 |

A 4PL doesn't own assets — it owns the *integration*. A 3PL typically owns warehouses, trucks, or both.

🎯 **Exam tip:** 4PL is sometimes called a Lead Logistics Provider (LLP). The 4PL is **single point of accountability** for a multi-3PL network.

---

## 📦 Packaging — Beyond the Box

| Level | Purpose | Examples |
|-------|---------|----------|
| **Primary** | Direct product contact | Bottle of shampoo |
| **Secondary** | Groups primaries for retail | Carton holding 12 bottles |
| **Tertiary** | Bulk handling for transport | Pallet of 80 cartons + shrink wrap |
| **Unit load** | Standardized handling unit | Pallet, container, tote |

### Sustainable packaging concerns
- Material reduction (lighter, less plastic)
- Recyclability / compostability
- Reusable packaging (totes, IBCs, RPCs)
- Right-sizing to reduce volumetric freight charges

---

## 📐 Logistics Performance Metrics

| KPI | Formula / Definition | Notes |
|-----|---------------------|-------|
| **On-time delivery (OTD)** | Deliveries on time / total | Supplier-facing |
| **OTIF** | On-time AND in-full | Stricter than OTD |
| **Perfect order** | OTIF + undamaged + correct documentation | The gold standard |
| **Fill rate** | Units shipped / units ordered | Service measure |
| **Order cycle time** | Days from order entry to delivery | Customer-facing |
| **Cost per unit shipped** | Total logistics cost / units | Efficiency measure |
| **Damage rate** | Damaged units / total shipped | Quality |
| **Inventory accuracy** | Cycle counts confirming WMS | DC health |
| **Dock-to-stock time** | Receiving → putaway complete | Receiving health |
| **Lines per hour (picking)** | Productivity by zone | DC efficiency |

---

## 🌐 Distribution Network Strategies

### Direct shipping
- Manufacturer → customer
- No DC inventory; long transit times for small shipments

### Direct shipping with in-transit merge
- Multiple suppliers ship parts; merged in transit

### Distribution networks via DCs
- Manufacturer → DC → customer
- Adds DC inventory but enables consolidation

### Drop-shipping (e-commerce)
- Retailer takes order; manufacturer ships direct
- Retailer carries no inventory

### Hub-and-spoke
- Central hub + regional spokes

### Milk runs
- Single truck visits multiple suppliers or customers in one loop

---

## 🏛️ Customs & Documentation (preview — full in Module 8)

Common logistics documents:

| Document | Purpose |
|----------|---------|
| **Bill of Lading (B/L)** | Contract + receipt of cargo; ocean = ocean B/L |
| **Air Waybill (AWB)** | Air freight contract |
| **Commercial Invoice** | Sales document for customs |
| **Packing List** | Itemized list of shipment contents |
| **Certificate of Origin** | Where goods were made (for tariffs / FTAs) |
| **Letter of Credit (LC)** | Bank guarantee of payment |
| **Customs Entry / SAD** | Import declaration form |

---

## ↩️ Reverse Logistics

Reverse logistics handles flows of returns, recalls, repairs, recycling, and end-of-life. It's a growing concern especially in e-commerce (15–30% return rates in fashion).

| Activity | Description |
|----------|-------------|
| **Return authorization (RMA)** | Approve return + provide label |
| **Triage / sortation** | Inspect, categorize |
| **Refurbish / repair** | Restore to sellable condition |
| **Resale (secondary market)** | Outlet, auction, B-stock |
| **Recycling / disposition** | Material recovery |
| **Disposal** | Compliant destruction |

🎯 **Exam tip:** Reverse logistics is part of **SCOR Return**. Modern emphasis: closed-loop / circular economy.

---

## 🚢 Containers and ULDs

| Type | Use |
|------|-----|
| **20'/40' standard container** | Ocean intermodal |
| **40' HC (high cube)** | Larger volume |
| **Reefer container** | Refrigerated |
| **ULD (Unit Load Device)** | Air cargo containers (IATA) |
| **Pallet — GMA 48×40** | North American standard |
| **Pallet — EUR 1200×800** | European standard |

---

## 🌐 Modern Trends in Logistics

| Trend | Why It Matters |
|-------|---------------|
| **E-commerce explosion** | Smaller orders, faster delivery, more returns |
| **Last-mile innovation** | Lockers, drones, robotic delivery |
| **Warehouse automation** | AGVs, AMRs, GTP systems (e.g., Kiva → Amazon Robotics) |
| **Visibility platforms** | Real-time shipment tracking (Project44, FourKites) |
| **Sustainability** | EV trucks, biofuels, route optimization, ESG reporting |
| **Resilience over efficiency** | Post-COVID dual sourcing + safety stock |
| **Onshoring / nearshoring** | Shortens lanes |
| **Digital freight matching** | Uber Freight, Convoy-like models |

---

## 📊 Case Study — Red Sea / Houthi Attacks and the Cape Diversion (Nov 2023-2024)

**Situation.** Starting November 2023, Houthi militants in Yemen launched missile and drone attacks on commercial vessels in the Red Sea / Bab el-Mandeb strait, the southern gateway to the Suez Canal. By January 2024, attacks had hit ships from ~50 countries. The strait normally carries **12-15% of global trade** including 30% of global container traffic. Major carriers — Maersk, MSC, CMA CGM, Hapag-Lloyd — initially paused, then progressively re-routed around the Cape of Good Hope. The diversion added **10-14 days of transit** Asia ↔ Europe and consumed 20-25% more bunker fuel per voyage.

**Decision.** Mid-December 2023, Maersk (Copenhagen) and CMA CGM (Marseille) committed to Cape routing for indefinite duration. MSC (Geneva), the world's largest by capacity, followed. By Q1 2024 ~90% of Asia-Europe container volume had shifted. Logistics responses cascaded down: 3PLs renegotiated rates, demand-shifted to **air freight** for time-critical cargo (air rates Asia-EU spiked 100-200%), and shippers like IKEA, Walmart, Tesla announced shortages or price surcharges. The Suez Canal Authority lost ~$2B in transit fee revenue in H1 2024. The combat coalition Operation Prosperity Guardian (US, UK, France, others) escorted some vessels through the Red Sea, but commercial insurance premiums quintupled — pushing most carriers to Cape routing anyway.

**Outcome.** As of mid-2024, Red Sea transit volume was 50-60% below pre-attack baseline. Container freight rates Asia-EU rose 200-300% Q1 2024 vs Q4 2023 (Drewry's WCI). Inventory days at European retailers crept up 5-10 days as buffer against the longer lane. The crisis became a logistics case study in MIT CTL's 2024 *Supply Chain Frontiers* and ASCM's *SCM Now* 2024 issues. Notably, Maersk's Q1 2024 EBITDA rose vs Q4 2023 — spot freight gains more than offset diversion costs, mirroring their 2021 Suez performance. Strategically: nearshoring and India / Mexico sourcing accelerated, multimodal Asia-EU rail (China Railway Express through Russia, Trans-Caspian rail through Central Asia) saw a 30%+ volume jump.

**Lesson for the exam / for practitioners.** This case is the modern follow-on to the 2021 Suez (Maersk Ever Given) story — same chokepoint, different failure mode. On the exam, expect questions on **mode-shift economics** (when does air make sense for cargo previously moving by ocean?), **3PL/4PL crisis governance** (multi-carrier orchestration when individual carriers diverge), and the **inventory-vs-transit math** (the safety-stock cost of a 14-day lengthened lane). The structural lesson: global logistics is fragile to geopolitics; "resilience over efficiency" (the post-2020 mantra) means active route diversification, dual-port strategies, and contractual capacity reservation — not just safety stock.

**Discussion (Socratic).**
- Q1: An Asia-EU shipper has a 30-day customer SLA on inventory; transit time was 28 days pre-attack, 42 days post-Houthi. They can pay 8× ocean for air freight or push back on customer SLA. Walk through the calculation that picks the answer, and the secondary effects of each choice.
- Q2: Suez handled ~12% of global trade; the Panama Canal handled ~6% (with 2023-2024 drought also restricting it). Where else in 2024-2026 do you see structural chokepoint risk, and which is most under-priced by current insurance markets?
- Q3: Some shippers signed long-term contracts (12-24 months) at peak 2024 rates. As volumes normalize, they're paying double the spot rate. Defend their decision from a Hau Lee "agile" perspective.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Air is always best for international" | Air is fast but expensive; ocean dominates by volume |
| "3PL = transportation only" | 3PLs typically offer transport + warehousing + value-added services |
| "4PL = bigger 3PL" | 4PLs orchestrate multiple 3PLs; no asset ownership |
| "DC = warehouse" | DC actively flows goods; warehouse implies more storage |
| "Crossdocking is for everyone" | Best for high-velocity SKUs with predictable demand |
| "OTD = OTIF" | OTIF adds "in-full"; perfect order adds undamaged + documentation |
| "Reverse logistics is small" | Often 5–15% of total logistics cost; can be huge in e-commerce |

---

## 🚨 Exam Traps

1. **Multimodal vs intermodal** — multimodal = multiple modes one contract; intermodal = container moves across modes.
2. **OTD vs OTIF vs perfect order** — perfect order is the strictest of three.
3. **3PL vs 4PL** — asset ownership vs orchestration.
4. **Crossdock everywhere** — only for high-velocity predictable SKUs.
5. **Air for high-value, low-weight** — yes; air for bulky low-value? rarely.
6. **Reverse logistics ignored** — it's a SCOR process; expect questions.
7. **Public vs private warehouse** — public is rented (variable cost); private is owned (fixed).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Logistics** | Forward + reverse flow + storage of goods, services, info |
| **Intermodal** | Same container moving across modes without rehandling |
| **FTL / LTL / Parcel** | Truckload tiers |
| **DC / FC / Crossdock** | Network node types |
| **3PL / 4PL** | Outsourced logistics vs orchestrator |
| **Perfect order** | On-time + in-full + undamaged + correct docs |
| **Reverse logistics** | Returns, recalls, repairs, recycling |
| **Bill of Lading** | Freight contract + receipt |
| **Picking strategies** | Discrete, batch, zone, wave, GTP |
| **Slotting** | Placing SKUs near or far from dock based on velocity |
| **ULD** | Unit Load Device (air cargo container) |
| **Closed-loop / circular** | Reverse flow design for reuse |
| **Last mile** | Final leg to the end customer |
| **Drop-shipping** | Retailer takes order, manufacturer ships direct |
| **Bonded warehouse** | Customs-supervised, duty deferred |

---

## ✅ Module 7 Summary

You now know:
- 🚛 The 5 transportation modes and their trade-offs
- 🏭 Warehouse types, operations, picking + storage strategies
- 🌐 3PL vs 4PL vs LLP
- 📦 Packaging tiers and sustainability
- 📐 Key logistics KPIs (OTD, OTIF, perfect order)
- 🌐 Distribution network strategies (DC, drop-ship, crossdock, milk run)
- ↩️ Reverse logistics and the closed-loop concept
- 🚢 Containers, pallets, ULDs

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 8: International Trade & Customs](../Module-08-International-Trade-Customs/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 8 adds the international trade compliance layer (Incoterms, customs, FX) to physical movement; Module 9 connects logistics carbon footprint to ESG reporting.
> - Cross-course: `12-ASCM-CLTD` Modules 3-5 deepen transportation, warehouse, and DC operations to certification-level depth; CSCP scratches the surface, CLTD is the deep dive.
> - Practice: Practice Exam 2 has ~10 logistics questions; Final Mock has ~12.

---

## 💬 Discussion — Socratic prompts

1. **The 4PL vs in-house orchestrator debate.** A $1B firm with 8 3PLs is debating whether to hire a 4PL or build in-house orchestration (Project44, FourKites integration). Build the case for each, and identify the size threshold where in-house becomes credible.
2. **Last-mile drones vs vans, 2024-2026.** Amazon Prime Air, Wing (Alphabet), and Manna have all expanded drone delivery 2023-2024. Walk through the unit economics — when does a drone beat a van, and what's the regulatory + airspace constraint that blocks general scale-up?
3. **The crossdock that became a warehouse.** A retailer designed a crossdock for high-velocity SKUs; demand variability has increased, and goods now sit 4-7 days "in crossdock" before shipping. Diagnose the failure and prescribe the fix.
4. **OTIF or perfect order — which to incentivize?** A logistics director is choosing between OTIF and perfect-order KPI for carrier contracts. Perfect order is harder to measure (documentation accuracy) but truer. Defend each side and the right answer for what type of business.
5. **Reverse logistics in fast fashion.** Shein, Temu, and similar models drive 30%+ return rates on apparel. Reverse logistics is now ~15% of total logistics cost. Construct a 2026 strategy where return-cost is reduced 50% without harming sales.

---

## 📚 Further Reading (Optional)

- 📖 Marc Levinson, *The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger* — Princeton University Press, 2e 2016
- 📖 Edward H. Frazelle, *World-Class Warehousing and Material Handling* — McGraw-Hill, 2e 2016 (the warehouse design canon)
- 📖 Yossi Sheffi, *The Resilient Enterprise: Overcoming Vulnerability for Competitive Advantage* — MIT Press, 2007 (the foundational post-9/11 SC resilience text)
- 📖 CSCMP *State of Logistics Report* (annual, free for non-members in summary) — current US logistics economy data
- 📖 Martin Christopher, *Logistics & Supply Chain Management* — FT Publishing, 5e 2016 (Cranfield School of Management textbook)
- 📖 ASCM CSCP Learning System Module 7 + ASCM CLTD Learning System (for deeper logistics)
- 📰 *Journal of Commerce* (joc.com) — ocean and intermodal news; *FreightWaves* — daily trucking + logistics data; Lloyd's List — ocean trade
- 📰 ASCM *SCM Now*, Spring 2024 — Red Sea / Suez disruption coverage
