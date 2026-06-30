# Module 6: Transportation Modes 🚛✈️🚢🚂

> **Why this module matters:** This is the single highest-weighted domain on the CLTD exam (~16%). Get this right and you've passed a big chunk. Transportation is also where the most money flows, and where the trade-offs (cost vs speed vs reliability vs flexibility) get tested in nearly every scenario.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1](../Module-01-Logistics-Strategy-Network/Reading.md) network design and the trade-off between transport cost and inventory cost
> - [Module 3](../Module-03-Order-Management-Fulfillment/Reading.md) last-mile and parcel basics
> - General comfort with cost-per-unit math
>
> Cross-course: [CSCP Module 7](../../10-ASCM-CSCP/Module-07-Logistics-Distribution-Warehousing/Reading.md) covers transportation in supply-chain context. CLTD's Module 6 is the *deepest* coverage of transportation in the ASCM family, the CSCP and CPIM equivalents are introductory.

---

## 🍕 A Story: The Salmon That Flew Twice

A Norwegian salmon farmer ships fresh salmon to a Tokyo sushi restaurant.

**The journey:**
1. Caught Monday morning at sea
2. Gutted, packed in ice at the port within 4 hours
3. Trucked from Bergen to Oslo airport, 8 hours
4. Air-freighted Oslo → Frankfurt, 2 hours flight
5. Frankfurt → Tokyo Narita, 11 hours
6. Cleared customs at Narita (pre-cleared via e-manifest)
7. Refrigerated truck to Tsukiji market, 1 hour
8. Truck to restaurant, 30 minutes

**Total: 36 hours, two flights, three trucks, one boat, one customs broker, four currencies, and exactly one mode optimization per leg.**

This is what CLTD-level transportation managers do every day: pick the right mode for each leg, factor in cost, speed, reliability, mode-shift risk, customs, currency, and weather.

This module gives you the full toolkit.

---

## 🚛 The Six Modes of Transportation

> **Citation.** The modal taxonomy and the trade-off matrix used here are canonical in Coyle, John J., Novack, Robert A., Gibson, Brian J. & Bardi, Edward J., *Transportation: A Global Supply Chain Perspective* (8th ed., Cengage, 2015) the definitive academic transportation textbook. US mode-share statistics drawn from US Bureau of Transportation Statistics, *Freight Facts and Figures* (annual; 2024 ed.). Container revolution context: Levinson, Marc, *The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger* (2nd ed., Princeton University Press, 2016) the canonical narrative of how Malcom McLean's container invention (1956) transformed ocean logistics. Modern ocean industry: George, Rose, *Ninety Percent of Everything: Inside Shipping* (Metropolitan Books, 2013).

CLTD recognizes six primary modes (plus parcel as a hybrid).

| Mode | Primary use | Speed | Cost/unit | Reliability | Flexibility |
|------|-------------|-------|-----------|-------------|-------------|
| **Truck** | Domestic, last-mile, mixed | Medium-high | High | High | Very high |
| **Rail** | Long-haul bulk, intermodal | Low-medium | Low | Medium | Low |
| **Ocean** | Intercontinental, bulk/containers | Very low | Lowest | Medium | Low |
| **Air** | Urgent, high-value, perishable | Very high | Highest | High | Medium |
| **Pipeline** | Liquids and gases | Slow but continuous | Lowest (for fluids) | Highest | None |
| **Intermodal** | Combined (truck+rail, ocean+truck, etc.) | Medium | Medium | Medium | Medium-high |
| **Parcel** | Small packages, e-com | Medium-high | Per-unit high | High | Very high |

🧠 **Memory:** *"Truck, Rail, Ocean, Air, Pipeline, Intermodal"*, TROAPI (or *"Try Real Ops And Pipelines, Idiot!"*)

---

## 🚛 Trucking Deep Dive

The dominant mode for North American freight.

### FTL vs LTL

| | FTL (Full Truckload) | LTL (Less-Than-Truckload) |
|---|---------------------|---------------------------|
| Load size | One shipper's freight fills the trailer | Multiple shippers share |
| Trailer typically | 26,000–45,000 lbs | 150–10,000 lbs per shipment |
| Routing | Direct (origin → destination) | Hub-and-spoke through terminals |
| Transit time | Fastest road mode | 2–4× longer than FTL |
| Cost per unit weight | Lower at full | Higher per lb, lower for small loads |
| Damage risk | Low (no transfer) | Higher (multiple handling) |
| Best for | 10+ pallets | 1–6 pallets |

### Truck classifications (DOT)

| Class | Weight (lbs) |
|-------|--------------|
| Class 1–2 | <10,000 (light) |
| Class 3–6 | 10,001–26,000 (medium) |
| Class 7–8 | 26,001+ (heavy, Class 8 = standard tractor-trailer) |

### Truck equipment types

| Equipment | Use |
|-----------|-----|
| Dry van (53') | Most general freight |
| Reefer (refrigerated) | Cold-chain food, pharma |
| Flatbed | Construction, steel, heavy machinery |
| Step-deck / lowboy | Tall or heavy loads |
| Tanker | Liquids, gases |
| Container chassis | Intermodal ocean containers |
| Box truck (24') | Local delivery |
| Sprinter van | Small parcel, urgent |

### Trucking pricing

- **Per-mile** (FTL): origin to destination
- **Class-rated** (LTL): NMFC class (50 to 500) × density, value, handling
- **Dimensional weight (parcel)**: max(actual lb, dim factor × cu in)
- **Fuel surcharge (FSC)**: weekly adjustment based on DOE diesel index
- **Accessorials**: detention, layover, lumper, inside delivery, residential

🎯 **Exam pattern:** "Shipper has 15 pallets, 28,000 lbs, going one origin to one destination, 800 miles." → FTL.

### Driver regulations (HOS, Hours of Service, US FMCSA)

- 11-hour driving limit per day
- 14-hour duty window
- 10 hours off-duty between shifts
- 60/70-hour weekly limit
- 30-minute break required after 8 hours

🎯 **Exam tip:** Driver shortage and HOS rules directly drive freight rates and capacity.

---

## 🚂 Rail Deep Dive

Slower, cheaper, capacity-massive.

### Rail freight types

| Type | What |
|------|------|
| **Boxcar** | General merchandise (declining usage) |
| **Hopper** | Grain, coal, ore (top-loaded) |
| **Tank car** | Chemicals, petroleum |
| **Flatcar** | Vehicles, large machinery |
| **Intermodal** | Containers / trailers on flat cars |
| **Auto rack** | Finished vehicles |

### Intermodal terminology

| Term | Meaning |
|------|---------|
| **COFC** | Container On Flat Car |
| **TOFC** | Trailer On Flat Car ("piggyback") |
| **Doublestack** | Two containers stacked on one well car (US, Canada) |
| **Drayage** | Truck moves between rail ramp and origin/destination |

### Rail vs Truck (memorize for exam)

| | Rail | Truck |
|---|------|-------|
| Cost per ton-mile | $0.04 | $0.18 |
| Transit time (LA → NY) | 6–8 days | 4–5 days |
| Fuel efficiency | 480 ton-miles/gal | 130 ton-miles/gal |
| Door-to-door | No (needs drayage) | Yes |
| Lane density | Limited to track network | Anywhere with roads |

🎯 **Exam tip:** Rail is *3–4× more fuel-efficient* than truck, a major sustainability talking point.

---

## 🚢 Ocean Deep Dive

The backbone of global trade.

### Container terminology

| Term | Meaning |
|------|---------|
| **FCL (Full Container Load)** | One shipper fills container |
| **LCL (Less-than-Container Load)** | Multiple shippers share |
| **TEU** | Twenty-foot Equivalent Unit (standard container = 20-foot equivalent) |
| **FEU** | Forty-foot Equivalent Unit (= 2 TEU) |
| **Reefer container** | Refrigerated |
| **Tank container** | Liquids |
| **High-cube** | 40' or 45' with extra height |

### Container sizes

- 20' standard (1 TEU)
- 40' standard (2 TEU)
- 40' high-cube (most common in modern trade)
- 45' (less common)

### Ocean freight pricing

- **Base rate** (origin port to destination port)
- **BAF** (Bunker Adjustment Factor, fuel)
- **CAF** (Currency Adjustment Factor)
- **Peak season surcharge**
- **THC** (Terminal Handling Charge)
- **GRI** (General Rate Increase, annual carrier increase)

### Key ocean routes (testable)

| Route | Transit (typical) |
|-------|-------------------|
| Asia → US West Coast | 11–16 days |
| Asia → US East Coast (via Panama) | 26–35 days |
| Asia → Europe (via Suez) | 28–35 days |
| Transatlantic (Europe → US East) | 8–12 days |

### Major ocean carriers (alliances, 2024–2025 reshuffle)

The early-2020s container shipping consolidation triggered a major alliance reshuffle. As of 2024:

- **2M Alliance: dissolved January 2025**, Maersk + MSC ended their 10-year cooperative agreement (originally signed 2015). MSC became the world's largest carrier by capacity in 2022 surpassing Maersk and pursued an independent growth strategy.
- **"Gemini Cooperation" (launched February 2025):** Maersk + Hapag-Lloyd, new hub-and-spoke alliance optimized for ~90% schedule reliability (vs ~50–55% industry average in 2024).
- **Ocean Alliance:** CMA CGM + COSCO + Evergreen + OOCL, renewed in 2024 through 2032.
- **Premier Alliance (formerly THE Alliance, renamed early 2025):** ONE + Yang Ming + HMM (Hapag-Lloyd exited to join Gemini).

🎯 **Exam note:** ASCM exam questions are unlikely to test specific alliance membership (volatile) but may test the *concept*, alliances let carriers share vessel capacity to maintain weekly service frequency while reducing redundancy.

---

## ✈️ Air Freight Deep Dive

Fastest, most expensive, most fuel-intensive.

### Air freight types

| Type | Use |
|------|-----|
| **Belly cargo** | Passenger aircraft cargo holds |
| **Freighters** | Dedicated cargo aircraft (747F, 777F, 767F) |
| **Integrators** | FedEx, UPS, DHL with own networks |
| **Charter** | Full-aircraft hire (urgent, oversized) |

### ULDs (Unit Load Devices)

The pallets/containers that fit aircraft holds.

| ULD type | Capacity |
|----------|----------|
| **LD3** | Lower deck, narrow-body, ~3.5 cu m |
| **LD7** | Lower deck pallet |
| **AKE** | Lower-deck contoured |
| **PMC / P1P** | Main deck pallet 96"×125" |

### Air freight pricing

- **Chargeable weight** = max(actual kg, volumetric kg)
- **Volumetric weight (air)** = L × W × H (cm) / 6,000 → kg
- **Fuel surcharge**
- **Security charge**
- **Customs / clearance**

🚨 **Trap:** Air uses 1 kg : 6,000 cu cm. Sea uses 1 t : 1 cu m. Parcel uses varying dim factors (UPS = 139 in³/lb domestic).

### When to use air

✅ Time-critical (perishable, urgent spares)
✅ High value-to-weight (electronics, pharma)
✅ Low volume / off-network
✅ Emergency replenishment

❌ Bulk commodities (steel, grain)
❌ Predictable, planned shipping
❌ Cost-sensitive freight

🎯 **Exam tip:** Air freight ~ 5–8× the cost of ocean for the same shipment but ~ 1/25th the transit time.

---

## 🛢️ Pipeline

Underrated mode, moves more US freight by ton-miles than air or rail in some product categories.

### Pipeline types

| Type | Carries |
|------|---------|
| **Crude oil** | Oil from wellhead to refinery |
| **Refined products** | Gasoline, diesel, jet fuel |
| **Natural gas** | Methane to power plants/consumers |
| **NGL** | Natural gas liquids |
| **Anhydrous ammonia** | Fertilizer |
| **Slurry (rare)** | Coal-water mixtures |

### Pipeline characteristics

- Highest reliability (rarely down)
- Lowest cost per unit for liquids/gases
- Massive capital cost up-front
- Zero flexibility (path is fixed)
- Slow (1–6 mph batch movement)
- High safety/environmental regulation (PHMSA in US)

---

## 🔄 Intermodal & Multimodal

### Intermodal

Using two or more modes with **standardized equipment** (containers).

**Example:** Ocean container from Shanghai → LA → unloaded onto rail → Chicago → drayage truck → final DC.

### Multimodal

Using two or more modes under a **single contract** (one bill of lading).

🚨 **Trap:** Intermodal and multimodal sound the same, the difference is **contract structure**, not the modes themselves.

### Intermodal benefits

✅ Cheaper than all-truck for long lanes (>700 miles often break-even)
✅ Lower emissions per ton-mile
✅ Solves driver shortage

❌ Slower than all-truck
❌ Less reliable (multiple handoffs)
❌ Requires drayage at each end

---

## 📦 Parcel & Small Package

Modern e-commerce backbone.

### Parcel carriers

| Carrier | Specialty |
|---------|-----------|
| **UPS** | Largest US ground/air integrator |
| **FedEx Ground / Express** | Largest air, strong ground |
| **USPS** | Cheapest for lightweight last-mile |
| **DHL** | Strongest international |
| **Regional parcel** (LSO, OnTrac, Spee-Dee) | Cheaper for short lanes |
| **Amazon Logistics** | Captive carrier for Amazon orders |

### Parcel pricing factors

- **Zone** (1–8, based on origin-destination distance)
- **Weight** (actual or dim weight)
- **Service** (Ground, 2-day, Overnight)
- **Accessorials** (residential, signature, oversized)
- **Surcharges** (peak season, fuel, address correction)

🎯 **Exam tip:** Last-mile = 28–53% of parcel cost. Zone skipping (deeper injection) is the primary cost-saver.

---

## 🚦 Mode Selection Framework

The CLTD body of knowledge wants you to think systematically. Use this matrix:

| Decision driver | Best mode |
|-----------------|-----------|
| Lowest cost | Pipeline > Ocean > Rail > Truck > Air |
| Fastest | Air > Truck > Rail > Ocean > Pipeline |
| Most reliable | Pipeline > Air > Truck > Rail > Ocean |
| Lowest emissions per ton-mile | Pipeline > Ocean > Rail > Truck > Air |
| Smallest shipments | Parcel > LTL > FTL |
| Longest distance, bulk | Ocean > Rail |
| Door-to-door | Truck > Parcel |

### Total Landed Cost (you must know this)

```
Total Landed Cost = Product + Freight + Duties/Taxes + 
                    Insurance + Handling + Inventory carrying
                    + Customs brokerage
```

🎯 **Exam pattern:** "Choose lowest-cost mode" is often a *trap*, the cheapest freight may not be the lowest total landed cost once duties, handling, and inventory carrying are added.

---

## 🚚 Carrier Selection

After choosing the mode, choose the carrier.

### Carrier selection criteria

| Criterion | Why it matters |
|-----------|----------------|
| Price / rate | Direct cost |
| Service reliability (OTD) | Lateness costs |
| Damage rate | Insurance & rework |
| Lane coverage | Where they actually serve |
| Capacity availability | Will they take the load? |
| Equipment availability | Reefer, flatbed, etc. |
| Technology / API | EDI, real-time tracking |
| Financial stability | Avoid carrier bankruptcy |
| Compliance | DOT scores, hazmat, customs |
| Sustainability | Carbon, EV fleet, SmartWay |

🎯 **Exam tip:** Lowest rate without considering reliability is *false economy*.

---

## 📅 Routing & Scheduling

### Vehicle Routing Problem (VRP)

Mathematical problem: visit N customers with M vehicles at minimum cost / time.

**Common variants:**
- VRPTW (with Time Windows)
- CVRP (Capacitated VRP)
- VRPPD (Pickup and Delivery)

**Algorithms used by TMS:**
- Clarke-Wright savings algorithm (classic heuristic)
- Sweep algorithm
- Genetic algorithms / metaheuristics
- ML-based dynamic routing

### Hub-and-spoke routing economics

LTL & parcel carriers run hub-and-spoke. Origin → terminal → hub → destination terminal → final delivery.

🚨 **Trap:** A parcel shipped 50 miles from Cleveland to Akron may actually travel 800 miles (Cleveland → Memphis hub → Akron). Hub-and-spoke trades distance for consolidation.

---

## 💻 TMS (Transportation Management System)

Modern shippers run a TMS.

### TMS core functions

| Function | What |
|----------|------|
| Rate shopping | Multi-carrier rate comparison |
| Routing optimization | VRP solver |
| Tender management | Offer load to carriers |
| Carrier mgmt | Carrier scorecards, contracts |
| Load planning | Consolidation, mode-shift |
| Shipment execution | Booking, BOL, ASN |
| Visibility / tracking | Real-time location |
| Freight audit & pay | Invoice match, dispute |
| Sustainability reporting | Emissions per shipment |

**Leading TMS vendors:** Manhattan Active TM, Blue Yonder TMS, Oracle OTM, MercuryGate, project44 (visibility), FourKites (visibility), Descartes.

---

## 📊 Transportation KPIs

| KPI | Formula | Target |
|-----|---------|--------|
| On-Time Delivery (OTD) | On-time / total | >98% |
| Cost per mile | Total cost / miles | Trended |
| Cost per shipment | Total cost / shipments | Trended |
| Cost per pound / per cu ft | Total cost / weight or volume | Trended |
| Empty miles % | Empty / total miles | <15% |
| Detention time | Hours over free time | <2 hours |
| Trailer utilization | Cube used / cube available | 80%+ |
| Carrier scorecard | Composite (OTD, damage, billing) | Carrier-specific |
| Claims rate | Claims / shipments | <1% |
| Tender acceptance | Accepted / tendered | >95% (preferred) |

---

## 📜 Case Study, Red Sea Crisis and Cape of Good Hope Rerouting (December 2023–2024)

**Situation.** On November 19, 2023, Houthi militants captured the Galaxy Leader, a vehicle carrier transiting the Bab el-Mandeb strait in the southern Red Sea the chokepoint connecting the Red Sea to the Indian Ocean. The Houthis then declared they would attack all vessels they viewed as linked to Israel transiting the Red Sea. The Suez Canal, just north of the Red Sea, handles ~12% of global trade volume and ~30% of global container traffic (approx. 19,000 vessels in 2023). The Suez route from Asia to Northern Europe is the standard ~28–35 day transit. The alternative around the Cape of Good Hope at the southern tip of Africa, adds ~10–14 days and ~30% more fuel.

**Decision.** Within weeks, the major container alliances made the call:

- **December 15, 2023:** Maersk pauses all Red Sea transits.
- **December 17, 2023:** Hapag-Lloyd, CMA CGM, MSC join, by late December essentially all major container carriers had rerouted Asia-Europe services around the Cape.
- **January 2024:** Tanker carriers (BP, Equinor) also paused; Frontline (large tanker fleet) rerouted.
- **Sustained rerouting through 2024:** As Houthi attacks continued (~100 vessel attacks logged 2024), even brief diplomatic windows didn't bring traffic back. Suez Canal Authority revenue dropped ~60% in 2024 (~$5B loss for Egypt). Cape of Good Hope traffic ~quadrupled from baseline.

**Outcome.** The market effects through 2024:

- **Asia → Northern Europe transit:** stretched from ~30 days to ~45 days. Shippers adjusted DRP models (longer lead times → more safety stock → higher inventory holding cost).
- **Container freight rates spiked:** Shanghai Containerized Freight Index (SCFI) rose from ~$1,000/FEU (late 2023) to ~$3,500/FEU (March 2024), a ~250% increase. Then peaked ~$5,000/FEU mid-2024 before easing late 2024.
- **Carrier profits surged:** Maersk's 2024 Q2 ocean revenue beat estimates by ~$1B. The freight super-cycle effectively returned in compressed form.
- **Capacity absorption:** The longer route effectively *absorbed* the global container fleet capacity overhang that had built up post-pandemic, what was projected as a 2024 freight-rate crash never fully materialized.
- **Mode-shift attempts:** Some shippers (consumer electronics, fashion) shifted high-value shipments to air freight; air cargo rates rose ~30–40%. Others tested rail (China-Europe via Trans-Siberian was geopolitically constrained by Russia sanctions, so limited use).
- **Insurance war-risk premiums** for Red Sea transits spiked from ~0.1% to ~1%+ of vessel value per voyage, making the route economically unviable even for risk-tolerant carriers.

**Lesson for the exam / for practitioners.** Red Sea 2024 is a textbook *transportation-disruption response* exercise that tests three Module 6 concepts:

1. **Mode flexibility under disruption.** Shippers locked into ocean had no good substitute (air is 50–100× more expensive per ton-km, rail is geopolitically restricted, and Cape rerouting is the same mode just longer). The lesson: design networks with *modal optionality*, not just lowest-cost mode.

2. **Lead-time variability dominates safety-stock math.** Modules 4 and 6 connect here, when ocean lead time goes from 30 to 45 days, every DRP plan needs re-tuning. Companies with rigid DRP and no replanning capability stocked-out; those with flexible planning absorbed gracefully.

3. **Carrier alliance discipline.** The fact that essentially all container carriers rerouted simultaneously avoided the prisoner's-dilemma collapse (one carrier risking ships for share). Compare to historical crises (Suez closures of 1956 and 1967, 2021 Ever Given grounding) where carrier behavior diverged.

This case directly maps to CLTD exam scenarios about *risk visibility* (Module 6/7) and *DRP re-planning* (Module 4). It is also the canonical 2024-era reference example replacing the older 2021 Ever Given Suez blockage (which was a 6-day single-event disruption, relatively minor compared to the sustained 12+ month Red Sea crisis).

**Discussion (Socratic).**
- Q1: A small US importer of Asian electronics had no flexibility, they were locked into ocean container Asia → US East Coast (via Suez). What 3 strategic moves should they make in 2024 *during* the disruption, and what 3 longer-run moves to never be caught again?
- Q2: The Red Sea crisis effectively absorbed excess container fleet capacity. From a carrier strategy lens, is this a "happy accident" or evidence that the industry needs structural lower capacity? What does each interpretation imply for ordering new vessels?
- Q3: Some shippers used the crisis as cover to pass through retail price increases that exceeded the actual cost impact. From a contract-customer perspective, how do you protect against "freight crisis price-gouging" while preserving carrier partnership?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Air is always too expensive" | For high-value, urgent freight, air is cheapest *total landed* |
| "Rail is dying" | Intermodal rail is *growing* due to driver shortage |
| "Ocean is slow but predictable" | 2020-2022 chaos disproved the "predictable" half |
| "Pipeline only moves oil" | Also natural gas, refined products, NGL, ammonia |
| "Intermodal = multimodal" | Intermodal = multi-mode equipment; multimodal = single contract |
| "Parcel = LTL" | Parcel is small package (under ~150 lbs); LTL is 150–10,000 lbs |

---

## 🚨 Exam Traps

🚨 **Trap 1:** Confusing FTL/LTL/parcel size ranges. Parcel <150 lbs; LTL 150–10,000 lbs; FTL fills the trailer (~10+ pallets, 25k+ lbs).

🚨 **Trap 2:** Confusing TEU/FEU. 40' = 2 TEU = 1 FEU.

🚨 **Trap 3:** Confusing COFC/TOFC. COFC = container on flat car; TOFC = trailer on flat car (less common today).

🚨 **Trap 4:** Mode selection without total landed cost, cheapest freight ≠ cheapest total.

🚨 **Trap 5:** Intermodal vs Multimodal, equipment vs contract.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **FTL / LTL** | Full / Less-than Truckload |
| **TEU / FEU** | 20' / 40' container equivalent |
| **FCL / LCL** | Full / Less-than Container Load |
| **HOS** | Driver Hours of Service |
| **COFC / TOFC** | Container/Trailer On Flat Car |
| **Drayage** | Short-distance truck move between rail and customer |
| **Doublestack** | Two containers stacked on rail |
| **ULD** | Unit Load Device (air pallet/container) |
| **Chargeable weight** | max(actual, volumetric) |
| **BAF / CAF / GRI** | Ocean fuel / currency / general rate |
| **Intermodal** | Multiple modes, standardized equipment |
| **Multimodal** | Multiple modes, single contract |
| **Zone skipping** | Inject parcel deep into a region |
| **VRP / VRPTW** | Vehicle Routing Problem (with Time Windows) |
| **TMS** | Transportation Management System |
| **Tender acceptance** | % of loads carriers accept |
| **NMFC class** | Freight class for LTL pricing (50–500) |
| **OTD** | On-Time Delivery KPI |

---

## ✅ Module 6 Summary

You now know:

- 🚛 Six modes + parcel with cost/speed/reliability/flexibility trade-offs
- 🚛 FTL vs LTL ranges and DOT classes
- 🚂 Rail intermodal (COFC, TOFC, doublestack, drayage) and rail-vs-truck economics
- 🚢 Ocean (FCL/LCL, TEU/FEU, BAF/CAF/GRI) and key route transits
- ✈️ Air freight ULDs, chargeable weight, and when to use
- 🛢️ Pipeline characteristics and product types
- 🔄 Intermodal vs multimodal (equipment vs contract)
- 📦 Parcel pricing factors, last-mile costs, zone skipping
- 🚦 Mode-selection matrix and total landed cost
- 🚚 Carrier selection criteria
- 📅 VRP/TMS routing
- 📊 Transportation KPIs (OTD, cost/mile, empty %, detention)

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 7: Global Logistics & Customs](../Module-07-Global-Logistics-Customs/Reading.md)

---

## 🤔 Discussion (Socratic prompts)

1. **The driver-shortage lever.** The US trucking industry has a sustained driver shortage (~78,000 in 2024 per ATA estimate). Should a shipper respond by *paying more for capacity*, *shifting modes to rail/intermodal*, *self-fleeting*, or *investing in routing software that needs fewer driver-hours per shipment*? Frame the strategic options.

2. **Electric truck rollout (Tesla Semi, Daimler eCascadia, Volvo VNR Electric).** As of 2024, electric heavy-duty trucks make up <1% of US Class-8 fleet. Their per-mile cost is comparable to diesel only on short-haul lanes (<300 miles). When is the right time for a logistics director to commit fleet capital to EV? What signals trigger the move?

3. **Yellow Freight bankruptcy (July 2023).** When Yellow collapsed, ~30,000 shippers were stranded. Many had been chasing the lowest LTL rate (Yellow undercut competition for years). Argue: *should* the supply chain industry have seen the collapse coming, and what does it teach about carrier-financial-stability screening?

4. **TMS build vs buy.** A $400M distributor has been running rate-shopping in spreadsheets. A modern TMS (MercuryGate, Manhattan, Blue Yonder, Oracle OTM) costs $200K–$600K/yr SaaS plus implementation. The CFO wants ROI proof. Frame the business case, what 3 metrics would you forecast to hit 18-month payback?

5. **Intermodal vs all-truck on the same lane.** For LA→Chicago freight, intermodal is ~$2,200/40' container and 7 days; FTL is ~$4,000 and 4 days. When does each win, and how does the customer's *downstream* economics factor in?

> **Where this leads.**
> - Inside this course: Module 7 globalizes the modal decisions (customs, Incoterms, FTAs); Module 8 covers the sustainability lens of mode shift.
> - Cross-course: [CSCP Module 7](../../10-ASCM-CSCP/Module-07-Logistics-Distribution-Warehousing/Reading.md) covers transportation at the broader supply-chain level; [CSCP Module 8 (International Trade & Customs)](../../10-ASCM-CSCP/Module-08-International-Trade-Customs/Reading.md) prepares the global trade lens.
> - Practice: Practice Exam 2 has ~21 questions from this module; Final Mock Exam another 21.

---

## 📚 Further Reading (Optional)

- 📖 *Transportation: A Global Supply Chain Perspective* by Coyle, Bardi, Novack
- 📖 *Freight Brokering and Trucking Logistics* by Adam Wingfield
- 🔗 [FMCSA Hours of Service](https://www.fmcsa.dot.gov/), US driver regulations
- 🔗 [American Trucking Associations](https://www.trucking.org/), industry data
- 🔗 [Alphaliner](https://alphaliner.axsmarine.com/), ocean carrier capacity tracker
- 🔗 [IATA Cargo](https://www.iata.org/en/programs/cargo/), air freight standards
- 🔗 [BTS (Bureau of Transportation Stats)](https://www.bts.gov/), US mode share data
