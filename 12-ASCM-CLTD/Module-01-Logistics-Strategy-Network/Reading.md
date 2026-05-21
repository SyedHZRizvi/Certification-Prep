# Module 1: Logistics Strategy & Network Design 🗺️

> **Why this module matters:** Every dollar saved on freight, every hour cut from order-to-delivery, every backorder avoided — it all starts with the network on the map. Get the network wrong and no amount of warehouse heroics will save you. Get it right and the rest of the modules are tuning.

---

## 🍕 A Story: The Two Coffee Roasters

Picture two coffee roasters in Seattle, both with the same product, both shipping nationally.

**Roaster A** has one warehouse — a beautiful, automated 200,000-square-foot facility next to the Seattle roastery. Every order, from Maine to Miami, ships from Seattle. Their unit cost looks low on paper. But when a customer in Atlanta orders 2-day delivery, they pay $14 in air freight. Returns? Customers ship them back across the country. Stockout in Florida during hurricane season? Three days of expedited freight before they're back in business. Their **outbound transportation cost** is killing the margins their warehouse savings created.

**Roaster B** has four smaller DCs — Seattle, Dallas, Chicago, and Atlanta. The unit warehousing cost is higher (more rent, more managers, less automation economies of scale). But that Atlanta customer? They get next-day **ground** delivery for $4. Returns flow to the nearest DC. When a hurricane hits Florida, Atlanta absorbs it.

**Which network is right?** Trick question — *it depends on what your customer values*. If they want lowest unit price and don't care about speed (B2B industrial), Roaster A wins. If they want speed and convenience (DTC retail), Roaster B wins.

**That trade-off — facility cost vs. transportation cost vs. service level — is the single most-tested idea in this module.** Hold it in your head.

---

## 🎯 What Logistics Strategy Actually Is

Logistics strategy is the set of long-term decisions about **where** product flows, **how** it gets there, and **who** moves it. The CLTD body of knowledge frames it as five interlocking choices:

| Decision | Question | Time horizon |
|----------|----------|--------------|
| Network design | How many DCs, where, what role? | 3–10 years |
| Mode strategy | What mix of truck/rail/ocean/air? | 1–5 years |
| Make-or-buy | In-house fleet/warehouse or 3PL? | 2–5 years |
| Service segmentation | Same service for every customer? | 1–3 years |
| Technology stack | WMS / TMS / OMS / control tower? | 2–5 years |

🎯 **Exam tip:** Strategy decisions are *long-cycle, capital-intensive, hard to reverse*. If a scenario asks about a decision that can be reversed in a week, it's tactical, not strategic.

---

## 🧭 The Logistics Strategy Hierarchy

Every CLTD textbook drills this cascade. Memorize it.

```
   Business Strategy
         ↓
  Supply Chain Strategy
         ↓
  Logistics Strategy
         ↓
  Functional Plans (transport, warehouse, inventory, order mgmt)
         ↓
   Operating Procedures
```

**Common trap on the exam:** "The team designed a logistics network but ignored the corporate brand promise of next-day delivery." → The violation is that logistics strategy was not aligned with **business strategy**.

---

## 🏢 Network Design: The Core Decisions

Network design answers three questions:
1. **How many** facilities?
2. **Where** to put them?
3. **What role** does each play?

### Trade-off curve (THIS WILL BE TESTED)

As you add more DCs:
- **Inbound transport cost** rises (more nodes to feed)
- **Outbound transport cost** falls (each DC closer to its customers)
- **Inventory carrying cost** rises (safety stock multiplies across nodes — the "square-root rule")
- **Facility cost** rises (more rent, labor, mgmt)
- **Service level** improves (faster, more reliable delivery)

The optimal number of DCs sits at the bottom of the **total-cost curve** — typically where outbound-transport savings stop beating the rising sum of inventory + facility costs.

```
Cost
 │   ╲ Outbound transport
 │    ╲___
 │        ╲___
 │            ╲_____
 │   _________╱─────╲___  ← TOTAL (optimal #)
 │  ╱
 │ ╱  Inventory + facility + inbound
 └─────────────────────────────► # of DCs
```

🚨 **Trap on the exam:** "Adding DCs always reduces total cost." NO. It reduces outbound transport but raises everything else. There is an optimum, not a minimum.

### Greenfield vs Brownfield

| Approach | Meaning | When to use |
|----------|---------|-------------|
| **Greenfield** | Mathematically optimal site assuming no constraints — like a blank map | Strategic planning, baseline; rarely the final site |
| **Brownfield** | Use existing facility / re-purpose / expand | Faster, lower CapEx, lower disruption |

🧠 **Memory hook:** Greenfield = *green grass, fresh field*. Brownfield = *brown bricks, old building*.

### Center-of-Gravity Method (Math you must know)

The simplest siting technique: place the DC at the **weighted geographic centroid** of demand.

Formula:
```
X = Σ(Vi · xi) / Σ(Vi)
Y = Σ(Vi · yi) / Σ(Vi)
```
where Vi = volume at customer i, (xi, yi) = its coordinates.

**Worked example:**
- NYC (40,74): 1,000 units
- Atlanta (33,84): 2,000 units
- Chicago (41,87): 1,500 units

X = (1,000·40 + 2,000·33 + 1,500·41) / 4,500 = 167,500 / 4,500 ≈ **37.2°N**
Y = (1,000·74 + 2,000·84 + 1,500·87) / 4,500 = 372,500 / 4,500 ≈ **82.8°W**

→ Site near Nashville, TN. (Roughly.)

🎯 **Exam tip:** Center-of-gravity ignores roads, freight rates, labor, taxes. It is a **starting point**, not the final decision.

### Other siting techniques (named in the ECM)

| Technique | What it is |
|-----------|-----------|
| Factor-rating | Score candidate sites against weighted criteria (labor, taxes, access) |
| Load-distance | Minimize Σ(load × distance) — variant of center-of-gravity with road distances |
| Mixed-integer linear programming (MILP) | Optimization engines (e.g., LLamasoft, Coupa supply chain) used for multi-DC, multi-product, multi-period |
| Heuristics (saving algorithm, sweep) | Faster, approximate, for vehicle routing & smaller networks |

---

## 🕸️ Distribution Network Types

The CLTD exam loves to test the **shape** of the network. Know all five.

| Network type | Pattern | Best for |
|--------------|---------|----------|
| **Direct shipment** | Plant → Customer (no DC) | High-volume, single-SKU, like raw materials |
| **Direct with milk run** | Plant → multi-stop route | Multiple small customers in a region |
| **Hub-and-spoke** | Plant → Hub → Spoke DCs → Customers | Most parcel & LTL; consolidation engine |
| **Cross-dock** | Inbound truck → sort floor → outbound truck (no storage) | Fast-movers, retail replenishment |
| **Tiered/multi-echelon** | Plant → Master DC → Regional DC → Local DC → Customer | Wide geographic spread, mixed velocities |

### Hub-and-Spoke vs Point-to-Point

| | Hub-and-Spoke | Point-to-Point |
|---|---|---|
| Routing | All freight passes through a hub | Direct origin → destination |
| Consolidation | High (excellent for LTL/parcel) | Low |
| Speed | Slower (one extra leg) | Faster |
| Cost | Lower per shipment | Higher per shipment |
| Example | FedEx Memphis, UPS Worldport | FTL truckload moves |

🎯 **Exam pattern:** "A parcel carrier wants to consolidate LTL volume across regions." → Hub-and-spoke.

---

## 🏭 Facility Roles in a Network

Not every building is a "warehouse." Vocabulary that gets tested:

| Facility | Primary role | Inventory held? |
|----------|--------------|-----------------|
| **Plant warehouse** | Buffers production | Yes (FG + WIP) |
| **Distribution center (DC)** | Picks & ships customer orders | Yes |
| **Cross-dock** | Sorts and re-ships within hours | No (transient) |
| **Hub / Sort center** | Consolidates parcel/LTL between legs | No (transient) |
| **Fulfillment center** | E-commerce single-unit picks | Yes |
| **Forward stocking location (FSL)** | Holds spares near customer | Yes, small |
| **Returns center** | Receives, sorts, dispositions returns | Yes (problematic mix) |
| **Bonded warehouse** | Holds goods pre-customs-clearance | Yes (customs-controlled) |
| **Free trade zone (FTZ) facility** | Defers duties, allows transformation | Yes (FTZ rules) |

🚨 **Trap on the exam:** A cross-dock is NOT a warehouse. It deliberately holds **zero** inventory beyond hours.

---

## 🧮 Make-or-Buy in Logistics: 3PL/4PL

Outsourcing decision in logistics has its own vocabulary.

| Tier | What they do | Example |
|------|--------------|---------|
| **1PL** | Shipper handles own logistics | Walmart's private fleet |
| **2PL** | Asset-based carrier (truck/rail/ocean line) | Maersk, Schneider |
| **3PL** | Outsourced warehouse + transport + value-add | DHL Supply Chain, Penske Logistics |
| **4PL** | Lead logistics provider — manages other LSPs | Accenture, GEODIS, in-house tower at GM |
| **5PL** | 4PL + e-commerce platform + data analytics | Niche; some define Amazon Logistics this way |

🎯 **Exam tip:** A 3PL operates assets. A 4PL **orchestrates** — typically asset-light.

### When to outsource (the textbook reasons)

✅ Variable demand makes fixed-cost ownership risky
✅ Lack of in-house expertise (cold chain, hazmat, customs)
✅ Need to enter a new geographic market quickly
✅ Capital is better deployed elsewhere

### When NOT to outsource

❌ Logistics is your *competitive differentiator* (Amazon, Tesla)
❌ IP/security sensitivity is too high
❌ Volume is so large the fixed-cost penalty is small

---

## 🎚️ Service Segmentation

A single service level for every customer wastes money. Modern logistics strategy **segments** customers and tailors service.

Common segmentation lenses:
- **Velocity-based** (A/B/C movers) — fast SKUs get more DCs, more safety stock, premium freight
- **Customer-tier-based** — Platinum customers get next-day; Bronze get standard 5-day
- **Geography-based** — urban same-day vs rural 2-day
- **Channel-based** — retail replenishment vs DTC e-comm vs marketplace

🎯 **Exam tip:** If a question describes "treating all customers the same," look for "segment by value/velocity" as the better answer.

---

## 🌍 Logistics Strategy Trends (testable buzzwords)

| Term | One-line definition |
|------|---------------------|
| **Omnichannel** | Customer experience consistent across web, store, app, marketplace; inventory pools shared |
| **Nearshoring / friendshoring** | Moving supply from far (China) to near (Mexico, Vietnam) or allied countries |
| **Reshoring** | Bringing production back to home country |
| **Postponement** | Defer final config to last possible step (covered deeply in Module 4) |
| **Control tower** | Real-time visibility hub across the network; data-driven decisions |
| **Digital twin** | Simulation of the physical network for what-if analysis |
| **Autonomous logistics** | Self-driving trucks, AGVs, drones, robotic picking |
| **Carbon-neutral logistics** | Mode-shifting, EV fleets, route optimization for emissions |

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "More DCs always equal better service" | True up to a point — then inventory + facility costs swamp the savings |
| "3PL is always cheaper" | Often true for variable workloads; not for dominant, predictable volume |
| "Center-of-gravity gives the right site" | It gives a *starting point* — labor, roads, taxes can move it 200 miles |
| "Hub-and-spoke is always slower" | Per shipment yes; for *consolidation economies*, it wins on total cost |
| "Logistics strategy is a one-time decision" | Re-evaluated every 3–5 years; networks decay as demand shifts |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Logistics network** | Physical and informational connections among facilities, modes, and partners |
| **DC (Distribution Center)** | Facility that holds inventory and picks/ships customer orders |
| **Cross-dock** | Facility that sorts inbound to outbound with near-zero dwell time |
| **Greenfield** | Site analysis assuming a clean slate (no existing facilities) |
| **Brownfield** | Use/expand an existing site |
| **Center-of-gravity** | Weighted-centroid siting method |
| **Hub-and-spoke** | Network where all flows pass through a central hub |
| **3PL / 4PL** | Tiered logistics-outsourcing levels |
| **Postponement** | Delay final differentiation to balance service and inventory |
| **Total logistics cost (TLC)** | Sum of transport + warehouse + inventory + admin + service-loss costs |
| **Service level** | Probability of fulfilling demand from stock (e.g., 95%, 98%) |

---

## ✅ Module 1 Summary

You now know:
- 🎯 The five strategic logistics decisions and their time horizons
- 🏢 How adding DCs trades off transport vs inventory vs facility cost
- 🗺️ Greenfield, brownfield, center-of-gravity, factor-rating, MILP
- 🕸️ Direct, milk-run, hub-and-spoke, cross-dock, multi-echelon networks
- 🏭 The roles of plants, DCs, hubs, cross-docks, FTZs, bonded warehouses
- 🧮 1PL through 5PL, when to outsource and when not to
- 🎚️ How to segment customers by velocity, tier, geography, and channel

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Capacity & Demand for Logistics](../Module-02-Capacity-Demand-Logistics/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Designing and Managing the Supply Chain* by Simchi-Levi — Chapter 3 (Network Design)
- 📖 *Supply Chain Network Design* by Watson, Lewis, Cacioppi — definitive textbook on MILP networks
- 📖 *Logistics Engineering and Management* by Blanchard
- 🔗 [Council of Supply Chain Management Professionals (CSCMP)](https://cscmp.org/) — annual State of Logistics report
- 🔗 [ASCM SCOR 13.0 — Deliver process](https://scor.ascm.org/) — distribution scaffolding
