# Module 5: Warehouse Operations 🏭

> **Why this module matters:** The warehouse is where the supply chain meets the floor. Every order, every return, every truck delivery passes through these four walls. The CLTD exam asks the most operational questions here — layouts, flows, automation, KPIs. Master this and 14% of the exam is in your pocket.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1](../Module-01-Logistics-Strategy-Network/Reading.md) facility roles (DC vs cross-dock vs FC)
> - [Module 2](../Module-02-Capacity-Demand-Logistics/Reading.md) capacity vocabulary (theoretical/effective/rated; cushion; utilization)
> - [Module 3](../Module-03-Order-Management-Fulfillment/Reading.md) picking strategies and WMS basics
> - [Module 4](../Module-04-Inventory-Distribution/Reading.md) cycle counting and IRA targets
>
> Cross-course: [CSCP Module 7 (Logistics, Distribution, Warehousing)](../../10-ASCM-CSCP/Module-07-Logistics-Distribution-Warehousing/Reading.md) covers warehousing at the broader supply-chain level. [CPIM Module 7 (Production Activity Control)](../../11-ASCM-CPIM/Module-07-Production-Activity-Control/Reading.md) covers shop-floor control whose mechanics overlap with WMS direction.

---

## 🍕 A Story: The Warehouse Tour That Changed a Career

Imagine your first day as a logistics intern at a national apparel distributor. You're handed a high-vis vest and a clipboard. Your mentor, Linda — a 25-year veteran — walks you through their 400,000-square-foot Reno DC.

"Watch the flow," she says.

You see trucks pulling into receiving docks on the east side. Operators unload pallets onto a conveyor. The conveyor flows past a check station, then to **putaway**. Robots zip back and forth carrying shelves. Down a long aisle, pickers wear headsets, calling out numbers. At the far end, a sorter throws cartons down 200 chutes. Pack stations crank out cartons. They flow to the west-side shipping docks. Trucks pull away.

"What do you notice?" Linda asks.

You shrug. "It... flows?"

"Right. It flows in *one direction*. East to west. Receiving, putaway, storage, picking, packing, shipping. The whole building is a **U or straight-through layout**. If product ever has to flow backward — say, a return that gets mixed with new inbound — we lose hours and pay people to fix it. Layout is destiny."

This module is about layout-as-destiny, and the ten KPIs every CLTD candidate must know cold.

---

## 🏢 Warehouse Types

Not all warehouses are alike. The exam expects you to differentiate.

| Type | Purpose | Inventory? |
|------|---------|-----------|
| **Distribution Center (DC)** | Holds inventory, picks customer orders | Yes |
| **Cross-dock** | Sorts inbound → outbound within hours | No (transient) |
| **Fulfillment Center (FC)** | E-commerce single-unit picks | Yes |
| **Hub / Sort center** | Parcel/LTL consolidation between legs | No |
| **3PL warehouse** | Outsourced multi-client DC | Yes |
| **Bonded warehouse** | Holds goods pre-customs-clearance | Yes (customs-controlled) |
| **Cold storage / refrigerated** | Temperature-controlled for food, pharma | Yes |
| **Hazmat warehouse** | Special licensing for chemicals, batteries | Yes |
| **Bulk / break-bulk** | Holds full truckloads, breaks for distribution | Yes |

---

## 📐 Warehouse Layouts

> **Citation.** The U-shape / I-shape / L-shape layout taxonomy and slotting principles are canonical in Tompkins, James A., White, John A., Bozer, Yavuz A. & Tanchoco, J.M.A., *Facilities Planning* (4th ed., John Wiley & Sons, 2010 — the field's reference textbook) and in Frazelle, Edward H., *World-Class Warehousing and Material Handling* (2nd ed., McGraw-Hill, 2016). Slotting math and KPI benchmarks draw from WERC (Warehousing Education and Research Council) annual benchmarking reports (2024 ed.).

Three classic layouts. CLTD expects you to know each.

### 1. U-shape (most common)

```
RECEIVING DOCKS ────► STORAGE / PICK FACE ──► SHIPPING DOCKS
       ↑                                              ↓
       └──────────────────────────────────────────────┘
              (both docks on the same side)
```

**Pros:** Lower transport cost (less truck circulation), single security gate, flexibility (any dock can be in/out).
**Cons:** Possible cross-traffic if not zoned well.
**Best for:** Most general DCs.

### 2. I-shape (straight-through)

```
RECEIVING ─► PUTAWAY ─► STORAGE ─► PICK ─► PACK ─► SHIPPING
(east)                                              (west)
```

**Pros:** True one-way flow, minimal cross-traffic, easy WMS routing.
**Cons:** Longer perimeter for trucks, twice the dock footprint.
**Best for:** High-volume, automated DCs.

### 3. L-shape

Hybrid; rarely tested but appears in scenarios with constrained sites.

🎯 **Exam tip:** When a scenario describes "trucks circling the building" or "inbound and outbound traffic mixing," the question is about layout choice.

---

## 🔄 The Standard Warehouse Workflow

Every textbook and ASCM ECM reference this 7-step flow:

```
1. Receiving        (inbound trailer → dock → check)
2. Put-away         (move from dock to storage location)
3. Storage          (held in racking, shelving, or floor)
4. Replenishment    (move from reserve to forward pick)
5. Picking          (gather items for an order)
6. Packing          (prepare for shipping, label)
7. Shipping         (load outbound trailer)
```

**Add 8. Returns** (reverse-flow — covered in Module 8).

Each step has its own KPIs, equipment, and people.

### Step-by-step KPIs

| Step | Key metrics |
|------|-------------|
| Receiving | Trailers/hour, pallets/hour, dock-to-stock time |
| Putaway | Putaways/hour, putaway accuracy |
| Storage | Cube utilization, location accuracy, IRA |
| Replenishment | Replenishment cycle time, stockout-at-pick-face |
| Picking | Picks/hour, pick accuracy, travel time |
| Packing | Cartons/hour, void-fill ratio, damage rate |
| Shipping | On-time dispatch, manifest accuracy |

---

## 📦 Receiving in Detail

The first checkpoint. Garbage in = garbage out.

**Process:**
1. **ASN check** — Advance Shipping Notice arrives ahead of trailer
2. **Appointment scheduling** — door + time slot booked
3. **Trailer arrives, seal verified**
4. **Unload** — pallets, cartons, eaches
5. **Count vs ASN** — variances flagged immediately
6. **Quality check / inspection** (random or 100% for sensitive SKUs)
7. **Update WMS** — units now in receiving zone
8. **Putaway dispatch**

### Cross-Docking Variants

| Variant | What |
|---------|------|
| **Pre-distribution (planned)** | Inbound is already labeled for outbound destination |
| **Post-distribution (opportunistic)** | Allocated to outbound at the dock |
| **Direct transfer** | Pallet-to-pallet, no break |
| **Break-bulk cross-dock** | Pallet broken into cartons, re-sorted to outbound |

🎯 **Exam tip:** Walmart uses **pre-distribution** cross-docking — suppliers label cartons with the destination store before shipping.

---

## 🗂️ Putaway Strategies

Where do you put a newly received pallet?

| Strategy | Logic |
|----------|-------|
| **Fixed location** | Same SKU always in the same slot |
| **Random / chaotic** | Any available slot; system tracks via WMS |
| **Velocity-based** | Fast movers near pick face, slow movers in reserve |
| **Class-based (ABC zones)** | Zones by ABC velocity, items random within zone |
| **Family grouping** | Related SKUs together (e.g., all shoes) |
| **Slot-based with cube/weight** | Match pallet dimensions to bay |

🚨 **Trap on the exam:** Random putaway is *not* chaotic in reality — the WMS tracks every location. Random = available-location, not "throw it anywhere."

---

## 🏗️ Storage Equipment

Know each storage method's strengths.

| Method | Density | Selectivity | Best for |
|--------|---------|-------------|----------|
| **Selective pallet racking** | Low | High | Most SKUs, broad assortment |
| **Drive-in / drive-through racking** | High | Low (LIFO) | Few SKUs, deep storage |
| **Push-back racking** | Medium-high | Medium (LIFO) | Limited aisles |
| **Pallet flow / gravity flow** | High | Medium (FIFO) | Cold storage, FIFO required |
| **Mezzanine** | Adds vertical | High | Light goods, manual pick |
| **Shelving / bin** | Low | Very high | Small parts, e-com |
| **AS/RS (auto storage/retrieval)** | Very high | Very high | High-throughput, automated |
| **Vertical lift modules (VLMs)** | Very high (z-axis) | High | Slow-mover small parts |
| **Carousel (horizontal / vertical)** | High | High | Goods-to-person spares |

🎯 **Exam tip:** "FIFO required" (perishables, batched goods) → pallet flow or carton flow. "Maximize density at any cost" → drive-in. "Highest selectivity" → selective racking.

---

## 🤖 Warehouse Automation

The CLTD body of knowledge tests automation broadly. Know each.

| Tech | What it does |
|------|--------------|
| **Conveyor systems** | Belt, roller, sortation conveyors |
| **AS/RS (Automated Storage & Retrieval)** | Cranes retrieve pallets/cases from racking |
| **AGV (Automated Guided Vehicle)** | Wire-guided or laser-guided trucks |
| **AMR (Autonomous Mobile Robot)** | LiDAR/SLAM-navigated; map updates on the fly |
| **Goods-to-Person (GTP)** | Robotic shelves brought to picker (Kiva/Locus/AutoStore) |
| **Robotic palletizing** | Robotic arms build mixed pallets |
| **Voice picking** | Headset-driven, hands-free |
| **Pick-to-light / Put-to-light** | LED-driven; high speed at the bin |
| **Drones** | Inventory counting, asset tracking |
| **Vision systems** | Carton dimensioning, label verify |
| **Robotic case packing** | Robotic arm pack |

### When Automation Wins

✅ High volume + high labor cost
✅ Predictable, low-variability SKUs
✅ 24/7 operations
✅ Tight quality / accuracy needs
✅ Long-term horizon (5–10 years to ROI)

### When Automation LOSES

❌ Low volume / lumpy demand
❌ Frequent SKU churn
❌ Short-term lease / lease that may move
❌ Low labor cost regions
❌ Variable product (custom kits)

🎯 **Exam pattern:** "A startup DC processes 200 orders/day with constantly changing SKUs." → Do NOT automate. Start with cart-based manual.

---

## 🧠 Slotting Optimization

**Slotting** = deciding which SKU goes in which slot. Done right, it saves 30–50% of picker travel.

Slotting rules:
1. **Velocity** — A-movers close to pack
2. **Golden zone** (waist-to-shoulder) for fast pickers
3. **Cube** — match slot size to pallet/carton size
4. **Family groups** — pickers naturally pick related items together
5. **Weight** — heavy on bottom (ergonomics + crush)
6. **Hazards** — segregate flammables, food, chemicals

Re-slot periodically (quarterly minimum) as velocity changes.

---

## 💻 The WMS (Warehouse Management System)

Modern DCs run on a WMS. Core capabilities:

| Module | What it does |
|--------|--------------|
| **Inventory mgmt** | Real-time stock by location |
| **Receiving** | ASN match, putaway directives |
| **Putaway** | Algorithm-driven slot assignment |
| **Replenishment** | Forward-pick area refill |
| **Order mgmt** | Wave/batch creation |
| **Pick / Pack / Ship** | Directed execution |
| **Yard mgmt** | Trailer / dock scheduling |
| **Labor mgmt (LMS)** | Engineered standards, productivity |
| **Slotting** | Re-slot recommendations |
| **Returns** | Reverse receiving |
| **Reporting / analytics** | KPIs, throughput |

**Leading WMS vendors (CLTD doesn't ask brand names but you'll see them):** Manhattan Associates, Blue Yonder, Oracle WMS, Körber, SAP EWM, Microlistics, Softeon.

---

## 📊 Warehouse KPIs (HIGH-YIELD EXAM CONTENT)

Memorize this table. Multiple exam questions every year.

| KPI | Formula | Target benchmark |
|-----|---------|------------------|
| **Receiving cycle time** | Trailer-arrival to inventory-available | <2 hours |
| **Dock-to-stock** | Receipt to putaway complete | <4 hours |
| **Putaway accuracy** | Correct location / total putaways | >99% |
| **Cube utilization** | Used cubic ft / available cubic ft | 65–85% (above 85% impedes operations) |
| **Pick accuracy** | Correct picks / total picks | 99.5%+ |
| **Picks per hour (PPH)** | Lines picked / labor hour | 60–200 (varies by method) |
| **Order cycle time** | Order entry to ship | Often <24 hours |
| **Perfect order** | OT × Complete × Damage-free × Correct-invoice | >95% world-class |
| **Inventory Record Accuracy (IRA)** | Bins in tolerance / counted | 95–99% |
| **Damage rate** | Damaged units / shipped units | <0.5% |
| **Labor productivity** | Output / labor hour | Trended weekly |
| **Cost per order** | Total DC cost / orders shipped | Trended monthly |
| **Cost per line / per unit** | Total DC cost / lines or units | Trended monthly |
| **On-time shipment** | On-time outbound / total | >98% |
| **Returns rate** | Returns / shipments | Industry-dependent (apparel 30%+, electronics 5%) |
| **Order-to-dock time** | Pick start to truck-dispatched | <2 hours peak |

🚨 **Trap:** Cube utilization is **not** a "higher is better" metric. Above 85%, congestion and aisle blockages destroy productivity. Target 65–85%.

---

## 👷 Labor Management

Labor is 40–60% of DC operating cost. CLTD tests:
- **Engineered labor standards** (time studies, MOST analysis)
- **Performance dashboards** — real-time productivity by worker/team
- **Incentive plans** — performance-based pay
- **Cross-training** — flex labor across receiving/picking/packing
- **Ergonomics** — slot heights, lift assists, reducing reach/bend

---

## 🛡️ Safety & Compliance

| Standard | Scope |
|----------|-------|
| **OSHA** (US) | Workplace safety |
| **ANSI / MHIA** | Material handling standards |
| **HACCP** | Food safety |
| **FDA cGMP** | Pharma warehouses |
| **DOT hazmat** | Hazardous material handling |
| **ISO 9001** | Quality mgmt |
| **ISO 14001** | Environmental (Module 8) |
| **SQF / BRC** | Food safety certifications |
| **C-TPAT** | Supply-chain security (US Customs) |

🎯 **Exam tip:** OSHA injury rates and forklift incidents are commonly cited; train forklift operators per OSHA 29 CFR 1910.178.

---

## 🌡️ Specialty Warehousing

### Cold chain
- **Frozen:** -18°C and below (ice cream, seafood)
- **Refrigerated:** 0–8°C (dairy, produce)
- **Controlled ambient:** 15–25°C (pharmaceuticals)
- Cold-chain validation: temperature logging end-to-end

### Hazmat
- DOT classification (9 hazard classes)
- Segregation requirements
- Spill containment
- Special licensing

### Pharma (GxP)
- 21 CFR Part 11 compliance
- DSCSA (Drug Supply Chain Security Act, US)
- Serialization (carton-level)

---

## 📜 Case Study — Tesla Megapack Manufacturing & Warehouse Robotics (2022–2024)

**Situation.** Tesla's Megapack — a utility-scale lithium-ion battery storage product — went from prototype to $7B annual revenue product line by 2024. Manufacturing scaled from ~3 GWh annual capacity (2021, Lathrop California) to ~40 GWh by end of 2024 (Lathrop expanded + new Shanghai gigafactory came online). The warehouse and logistics challenge: each Megapack unit is the size of a shipping container (~24,000 lb, 23 ft long), produced in batches of 100+ daily, requiring meticulous lot tracking (battery serial numbers cascading to subcomponent-level traceability for grid utility customers' warranty requirements), staged for outbound truck or rail loading, and shipped globally to utility customers running 18+ month project schedules.

**Decision.** Tesla built a vertically-integrated warehouse stack at Lathrop and Shanghai that exemplifies the modern automated DC:

- **Robotic outdoor yard storage** — Megapack units are stored outdoors in marshaled rows. Tesla's WMS tracks each unit by GPS + RFID; automated locomotive-style carriers shuttle units between staging zones.
- **AS/RS for components** — battery cells and PCB sub-assemblies move via crane-based AS/RS systems inside the gigafactory storage zones.
- **AGV / AMR fleet** for inter-zone moves — using Tesla's own LiDAR-equipped autonomous vehicles (derived from Autopilot/FSD technology stack).
- **Pick-to-light + voice picking** for small-component sub-assembly bays.
- **Dock-to-truck "kit" model** — Megapack units are pre-staged with their installation hardware kit (cables, mounts, manuals) at adjacent docks so outbound truck loads are pre-bundled.
- **Real-time digital twin** — Tesla's manufacturing software (custom-built, not SAP/Oracle) gives planners a real-time 3D view of the entire production-warehouse-yard pipeline.

**Outcome.** Megapack production cycle time dropped from ~5 days (2021) to ~2 days (2024). Throughput at Lathrop reached ~1 Megapack every ~12 minutes by Q4 2024. Yard utilization at Lathrop runs at ~80% of theoretical capacity — high but managed via dynamic re-marshaling. Outbound shipping (truck for North America; rail for cross-country and ports for export) on-time rate ~97%. The Shanghai facility started production March 2024 and ramped to ~10 GWh annual run-rate by year-end. Notably, Tesla declined to use any third-party WMS or TMS — preferring a build-it-yourself stack tightly integrated with manufacturing execution.

**Lesson for the exam / for practitioners.** Tesla Megapack illustrates the *modern automated DC* archetype that the CLTD exam tests in the warehouse-operations domain:
1. **Layout-as-destiny** at scale — the Lathrop yard is an I-shape (straight-through) flow that enables the 1-Megapack-every-12-minutes throughput.
2. **Hybrid automation strategy** — Tesla uses AS/RS (for cells), AGV/AMR (for sub-assembly movement), GTP-style (for kits), and manual (for final QC). The CLTD answer is rarely "automate everything" — it's "automate the right subprocess."
3. **Vertical integration of WMS/TMS** — when logistics is your differentiator, you in-source the software (link back to Module 1's make-or-buy framework).
4. **Sustainability through density** — Tesla's yard utilization and routing minimize transport between sub-stations; the "carbon per Megapack delivered" metric is ~30% better than industry equivalents (per Tesla's 2024 sustainability report).

The CLTD exam tests these patterns: "A high-throughput automated DC with predictable SKUs and 24/7 ops" → automation pays. "A volatile SKU mix with frequent product churn" → manual+WMS first, automate the stable subprocesses later.

**Discussion (Socratic).**
- Q1: Tesla built its own WMS. Most logistics directors will never get that budget approved. When does the *build* answer beat the *buy* answer for WMS software, in real-world non-Tesla companies?
- Q2: A 1-Megapack-every-12-minutes throughput requires near-perfect upstream coordination. If a single Tier-1 supplier (e.g., the cell vendor) ships late, what happens to the Lathrop yard, and what buffers should it carry to absorb that?
- Q3: Tesla's Shanghai plant started in 2024 to serve Asia demand and avoid US export bottlenecks. From a Module 1 / Module 5 / Module 7 combined lens, what does the geographic split actually solve — and what new problems does it create?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Higher cube utilization is always better" | Above 85% destroys productivity |
| "Automation is always cheaper long-term" | Only for stable, high-volume operations |
| "Random putaway is chaotic" | WMS tracks every location — it's systematic |
| "Pick-to-light is always best" | Highest speed at the bin, but high CapEx; voice often better ROI |
| "Cross-docking eliminates a warehouse" | It eliminates *storage*, not the building, equipment, or labor |

---

## 🚨 Exam Traps

🚨 **Trap 1:** Picking the wrong layout. U-shape for general DC; I-shape (straight-through) for high-volume automated.

🚨 **Trap 2:** Confusing AS/RS (cranes in racks) with AGV (vehicles on the floor) with AMR (autonomous robots that map dynamically).

🚨 **Trap 3:** Reading a KPI as percentage when it's a ratio. Cube utilization 80% = good; 99% = problem.

🚨 **Trap 4:** Treating drive-in racking as "the same as" selective racking. Drive-in is LIFO and dense; selective is FIFO-friendly and accessible.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **U-shape / I-shape** | Warehouse layout patterns |
| **Putaway** | Move from receiving to storage |
| **Slotting** | Deciding which SKU in which slot |
| **AS/RS** | Automated Storage & Retrieval System |
| **AGV / AMR** | Automated Guided Vehicle / Autonomous Mobile Robot |
| **GTP** | Goods-to-Person robotic system |
| **WMS** | Warehouse Management System |
| **LMS** | Labor Management System |
| **Cube utilization** | Used / available cubic feet |
| **Dock-to-stock** | Receipt to putaway-complete time |
| **PPH** | Picks per hour |
| **IRA** | Inventory Record Accuracy |
| **Cross-dock** | Sort inbound to outbound, no storage |
| **Cold chain** | Temperature-controlled logistics |
| **C-TPAT** | US Customs supply-chain security program |

---

## ✅ Module 5 Summary

You now know:
- 🏢 Nine warehouse types and what each does
- 📐 U-shape vs I-shape vs L-shape layouts
- 🔄 The 7-step warehouse workflow + returns
- 📦 Receiving and cross-docking variants
- 🗂️ Putaway strategies (fixed, random, velocity, class, family, cube)
- 🏗️ Storage equipment (selective, drive-in, push-back, AS/RS, VLM, carousel)
- 🤖 Automation tech (AS/RS, AGV, AMR, GTP, voice, light) and when each fits
- 🧠 Slotting rules (velocity, golden zone, cube, family, weight, hazards)
- 💻 WMS modules and major vendors
- 📊 Warehouse KPIs with benchmark ranges
- 👷 Labor management and engineered standards
- 🛡️ OSHA, HACCP, GxP, C-TPAT compliance frames

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 6: Transportation Modes](../Module-06-Transportation-Modes/Reading.md)

---

## 🤔 Discussion (Socratic prompts)

1. **The automation ROI debate.** A logistics director pitches a $20M AS/RS retrofit for a current manual DC. CFO models a 6-year payback. CEO worries about "automation lock-in" — what if SKU mix shifts? Build both sides of the argument. What evidence would resolve it?

2. **AMR vs AGV in a brownfield site.** A 25-year-old DC with concrete-poured floors and uneven aisles is considering automation. AGVs need precise floor markings/wires. AMRs can map dynamically. Cost per unit is roughly comparable. Which to pick, and why does the building's age matter?

3. **The 85% cube utilization wall.** Finance wants you to push from 75% to 88% utilization. Operations says it'll wreck pick rates. Sketch the math — when is finance right, when is operations right, and what compromise actually serves the P&L?

4. **In-source vs 3PL warehousing.** Your e-commerce volume is doubling in 12 months but uncertain whether the growth is durable. You can lease a new DC (5-year commitment, $40M build-out) or use a 3PL (variable cost, 30-day commitment, 25% higher per-unit cost). Frame the strategic decision.

5. **Dark warehouses and the labor question.** Some fully-automated warehouses ("dark warehouses") have minimal human presence. From a logistics-strategy + community-impact angle, when is full automation the right answer? When does the social cost (job displacement) deserve weight in the decision?

> **Where this leads.**
> - Inside this course: Module 6 covers the transport that moves freight in/out of these warehouses; Module 8 covers the reverse flow through the same building.
> - Cross-course: [CSCP Module 7](../../10-ASCM-CSCP/Module-07-Logistics-Distribution-Warehousing/Reading.md) covers warehousing in supply-chain context; [CPIM Module 7 (PAC)](../../11-ASCM-CPIM/Module-07-Production-Activity-Control/Reading.md) covers shop-floor mechanics.
> - Practice: Practice Exam 2 has ~20 questions from this module; Final Mock Exam another 20.

---

## 📚 Further Reading (Optional)

- 📖 *Warehouse Management* by Gwynne Richards — the practical playbook
- 📖 *The Warehouse Management Handbook* by Tompkins & Smith
- 📖 *World-Class Warehousing and Material Handling* by Edward Frazelle
- 🔗 [MHI (Material Handling Institute) resources](https://www.mhi.org/) — automation standards
- 🔗 [WERC (Warehousing Education and Research Council)](https://werc.org/) — DC benchmarking
- 🔗 [OSHA Powered Industrial Trucks 29 CFR 1910.178](https://www.osha.gov/) — forklift safety
