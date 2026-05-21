# Module 7: Logistics, Distribution & Warehousing 🚛

> **Why this module matters:** Logistics is where supply chains actually move. Expect 8–12 exam questions on transportation mode trade-offs, warehouse operations, DC types, and 3PL/4PL relationships. The vocabulary is dense and the trade-offs are calculable.

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

🎯 **Exam tip:** Intermodal containerization is THE innovation that made global logistics economical. Containerization invented by Malcolm McLean in 1956 → "The Box" book.

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

## 📚 Further Reading (Optional)

- 📖 Marc Levinson, *The Box* — history of the shipping container
- 📖 Edward Frazelle, *World-Class Warehousing and Material Handling*
- 📖 CSCMP State of Logistics Report (annual) — free
- 📖 ASCM CSCP Learning System Module 7
- 📖 *Logistics Management* magazine — practitioner trends
