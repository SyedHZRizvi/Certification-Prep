# Module 4: Master Scheduling & MRP 🗓️

> **Why this module matters:** MPS and MRP are the *engines* of manufacturing planning. Roughly 20–25% of CPIM exam questions live in this module. If you can hand-compute an MRP table and read a time-fence policy, you'll bank a lot of points. If you can't, you'll lose them by the dozen.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1: Manufacturing Strategy](../Module-01-Manufacturing-Strategy/Reading.md), MTS/ATO/MTO determines whether you need a one-level or two-level MPS
> - [Module 2: Demand Planning & Forecasting](../Module-02-Demand-Planning-Forecasting/Reading.md), the forecast is one of the three MPS inputs
> - [Module 3: S&OP (Sales and Operations Planning)](../Module-03-SOP (Standard Operating Procedure)-Sales-Operations-Planning/Reading.md), the agreed family plan is the third MPS input
> - Arithmetic, the MRP gross-to-net calculation is a discipline, not a math problem; you'll do it by hand
>
> This module is the densest on the exam. Expect to spend 4+ hours on the reading and another 4 hours practicing MRP tables by hand. If you can't hand-compute an MRP record cold by the end of the module, re-work the *Velo Frères* and worked-example sections.

---

## 🍕 A Story: The Bicycle Shop That Ran Out of Pedals

**Velo Frères**, a Belgian bicycle assembly plant, builds 6 finished bike models. Each model uses different combinations of frames, wheels, gears, brakes, chains, pedals, and saddles. About 250 unique components in total.

Until 2019, the planning was done in Excel. The buyer ordered roughly twice the average monthly usage of each part. Stockouts were "rare but painful." When a stockout *did* happen, the assembly line stopped, sometimes for days waiting on an obscure $1.20 pedal.

In 2020 they implemented MRP. The MPS at the finished-good level said: "Build 1,200 Model-A bikes the week of June 7." MRP exploded that through the Bill of Materials: 1,200 frames, 2,400 wheels, 1,200 chains, 2,400 pedals, etc. Then it offset each requirement by the supplier lead time: chains arrive in 2 weeks, frames in 6 weeks, pedals in 1 week. The system generated a planned order for *each component*, in *each week*, to arrive *just in time*.

Stockouts dropped 94%. Inventory dropped 38%. The owner cried.

**That's MRP.** A mechanical, dependent-demand calculation that turns a finished-good schedule into thousands of component plans, *automatically*.

---

## 🎯 The Two Layers: MPS vs MRP

| | Master Production Schedule (MPS) | Material Requirements Planning (MRP) |
|---|----------------------------------|--------------------------------------|
| **Plans for** | Finished goods (end items) | Components and raw materials |
| **Demand type** | Independent (customer/forecast) | Dependent (BOM-derived) |
| **Output** | What to build and when | What to buy/make and when |
| **Time bucket** | Weekly typically | Daily or weekly |
| **Driven by** | S&OP, customer orders, forecast | MPS + BOMs + inventory + lead times |
| **Owner** | Master Scheduler | Planner / Buyer-Planner |

🎯 **Critical CPIM concept:** **Independent demand** comes from outside the plant (customers, forecasts). **Dependent demand** is *calculated* from the BOM of items that use it. Pedals are dependent on the bike MPS. Bikes are independent, driven by customer/forecast.

🚨 **Trap on the exam:** A *spare part* sold to a customer is *independent demand* even if it's a component. The same physical part used inside a finished good = dependent. Many shops have both, handled via "service parts MPS" alongside the regular MPS.

---

## 🗓️ The Master Production Schedule (MPS)

The MPS is the *anchor* of execution. It states:

> "Build N units of finished good X in week Y."

The MPS reconciles three inputs:

1. **Customer orders** (already booked)
2. **Forecast** (what we think we'll sell)
3. **S&OP family plan** (the agreed total)

The standard MPS record looks like:

| Week | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Forecast | 100 | 100 | 100 | 100 | 100 | 100 |
| Customer orders | 90 | 80 | 60 | 30 | 10 | 0 |
| Projected available balance (start: 50) | 60 | 60 | 60 | 60 | 60 | 60 |
| MPS (production) | 100 | 100 | 100 | 100 | 100 | 100 |
| **Available-to-promise (ATP)** | 10 | 20 | 40 | 70 | 90 | 100 |

---

## 🟢 Available-to-Promise (ATP)

**Available-to-Promise** = the uncommitted portion of the MPS that the sales rep can promise to a new customer.

**Discrete ATP (period-by-period):**
```
ATP_period = MPS_period − sum of customer orders before next MPS
```

**Worked example.** MPS in week 3 = 100 units. Customer orders against that MPS receipt: 60 units (committed by existing orders). ATP for week 3 = 100 − 60 = **40 units** the salesperson can sell to a new customer.

🎯 **Exam pattern:** "A customer asks if you can ship 50 units in week 4. ATP for week 4 = 30. What do you do?" → Offer 30 in week 4, push the rest to week 5 (where more ATP exists), OR coordinate with the master scheduler to expedite/replan.

---

## 🚧 MPS Time Fences

Time fences divide the MPS horizon into zones with different change rules.

| Fence | Position | Who Can Change | Why |
|-------|----------|----------------|-----|
| **Demand Time Fence (DTF)** | Near term, e.g., weeks 1–2 | No changes without senior management OK; forecast is *ignored*, only actual orders count | Material and capacity committed; change is costly |
| **Planning Time Fence (PTF)** | Mid-term, e.g., through cumulative lead time | Master Scheduler can change with approval | Some flexibility, but trade-offs |
| **Beyond PTF** | Long-term | System can replan freely | No commitments yet |

🧠 **Mnemonic:** **DTF < PTF** in *time* (DTF is closer). DTF is "frozen." PTF is "slushy." Beyond PTF is "liquid."

🚨 **Classic exam trap:** Inside the DTF, the forecast is *ignored*, only firm customer orders drive the projected available balance. Many candidates miss this.

---

## 🌳 Bill of Materials (BOM)

A **BOM** lists all components, sub-assemblies, and raw materials needed to make one unit of a parent item, plus the *quantity per parent*.

Example BOM for "Bicycle Model A":

```
Bicycle Model A (level 0)
├── Frame Assembly (1)             [Level 1]
│   ├── Frame Tube Set (1)         [Level 2]
│   └── Welded Joints (4)          [Level 2]
├── Wheel Assembly (2)             [Level 1]
│   ├── Rim (1)                    [Level 2]
│   ├── Spokes (32)                [Level 2]
│   └── Tire (1)                   [Level 2]
├── Drivetrain (1)                 [Level 1]
│   ├── Chain (1)                  [Level 2]
│   ├── Cassette (1)               [Level 2]
│   └── Crank Set (1)              [Level 2]
├── Pedals (2)                     [Level 1]
└── Saddle (1)                     [Level 1]
```

### BOM Levels & Low-Level Coding

Each item gets a **low-level code** equal to the *lowest* level at which it appears anywhere in the BOM structure.

**Why it matters:** the MRP system processes items in low-level-code order. A "frame tube set" appearing at Level 2 in Bike A *and* at Level 3 in Bike B gets coded at Level 3, so MRP nets requirements from *both* parents before issuing planned orders.

🎯 **Exam pattern:** "Why is low-level coding used in MRP?" → To ensure all dependent demand for an item across multiple parents is fully netted before its planned orders are computed.

---

## ⚙️ The MRP Logic: Gross-to-Net Calculation

> **Citation.** MRP was formalized by **Joseph A. Orlicky** at IBM in the late 1960s and published as *Material Requirements Planning: The New Way of Life in Production and Inventory Management* (McGraw-Hill, 1975). The 3rd edition (Plossl, George W. & Orlicky, Joseph, 2011) is the modern canonical reference; APICS (now ASCM) co-published *Orlicky's MRP, 3rd edition* with Carol Ptak and Chad Smith. The gross-to-net logic is reaffirmed in Vollmann, Berry, Whybark & Jacobs, *Manufacturing Planning and Control for Supply Chain Management*, 6th ed. (McGraw-Hill, 2011), Chapter 6, and is the same logic implemented (with extensions) in SAP, Oracle, Microsoft Dynamics, NetSuite, and every modern ERP (Enterprise Resource Planning) system.

🔥 **MEMORIZE this process.** It is the single most-tested calculation on CPIM.

For each component, in low-level-code order, MRP computes:

| Row | What It Is |
|-----|-----------|
| Gross requirements | What's needed (from parents' planned order releases) |
| Scheduled receipts | Orders already placed, en route |
| Projected on hand | Running inventory after each period |
| Net requirements | Gross − on-hand − scheduled receipts |
| Planned order receipts | When the order must arrive |
| Planned order releases | When the order must be released (= receipt − lead time) |

### Worked Example, MRP Calculation

**Item:** Pedal
**Lead time:** 1 week
**Lot size:** lot-for-lot (L4L)
**On-hand at start of week 1:** 500

Parent demand (from Bike A MPS): 1,200 bikes per week × 2 pedals per bike = 2,400 pedals per week.

| Week | 1 | 2 | 3 | 4 |
|------|---|---|---|---|
| Gross requirements | 2,400 | 2,400 | 2,400 | 2,400 |
| Scheduled receipts | 2,000 | 0 | 0 | 0 |
| Projected on hand (start 500) | 100 | -2,300 | -4,700 | -7,100 |
| Net requirements | 0 | 2,300 | 2,400 | 2,400 |
| Planned order receipts | 0 | 2,300 | 2,400 | 2,400 |
| Planned order releases (LT=1) | 2,300 | 2,400 | 2,400 |, |

Reading this:

- Week 1: 500 on-hand + 2,000 receipt = 2,500. Net 2,400 demand. End on-hand = 100.
- Week 2: 100 on-hand, need 2,400. Net = 2,300. Plan an order to *arrive* in week 2; release it in week 1 (LT = 1).
- Week 3: Net 2,400, plan receipt week 3, release week 2.
- And so on.

🎯 **Exam pattern:** Given a parent schedule, BOM, lead time, and starting inventory, compute the planned order release for a component in a specific week. Practice this until you can do it in 90 seconds.

---

## 📦 Lot-Sizing Rules

| Rule | What It Does | Use Case |
|------|-------------|---------|
| **Lot-for-Lot (L4L)** | Order exactly the net requirement each period | Low setup cost, JIT (Just-In-Time) |
| **Economic Order Quantity (EOQ)** | Order EOQ each time (Module 6 formula) | Stable demand, high setup |
| **Period Order Quantity (POQ)** | Order to cover N periods at a time | Trade-off LT/setup vs holding |
| **Fixed Order Quantity (FOQ)** | Always order a fixed Q (e.g., truckload) | Supplier-imposed minimum |
| **Min/Max** | Order up to Max when at Min | Distribution / replenishment |

🎯 **Exam pattern:** "Supplier requires a minimum order of 5,000 units; demand averages 1,200/week with high setup cost." → Use FOQ or POQ, not L4L.

---

## 🔁 MRP Inputs and Outputs

| Inputs | Outputs |
|--------|---------|
| MPS (planned independent demand) | Planned order receipts |
| BOMs | Planned order releases |
| Inventory records (on-hand, allocated, scheduled receipts) | Action messages: release, reschedule in, reschedule out, cancel |
| Lead times | Pegging info (where demand came from) |
| Lot-sizing rules |  |
| Safety stock |  |

**Action messages** are MRP's nudges to humans:

- **Release**, "Release this planned order now."
- **Reschedule in**, "Pull this scheduled receipt earlier."
- **Reschedule out**, "Push this scheduled receipt later."
- **Cancel**, "Cancel this open order."

---

## 🧠 ATP vs CTP

| Concept | Meaning |
|---------|---------|
| **ATP (Available-to-Promise)** | Uncommitted MPS = what we *can* promise on existing schedule |
| **CTP (Capable-to-Promise)** | What we can promise *if* we reschedule capacity and materials |
| **PTP (Profitable-to-Promise)** | What we can promise that is also financially attractive |

CTP is more sophisticated and used in ATO/ETO environments where each customer order may require its own capacity check.

---

## 🚨 Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "MPS and MRP are the same thing" | No, MPS = finished good; MRP = components |
| "MRP is a forecast" | No, MRP is a *calculation* of dependent demand from MPS + BOM |
| "Lead time is constant in MRP" | Standard MRP treats it as fixed; APS/finite scheduling treats it variably |
| "Inside the DTF, forecast still drives PAB" | No, only firm orders count inside the DTF |
| "ATP and CTP are interchangeable" | ATP = current schedule only; CTP = if we replan |
| "Every component needs its own low-level code" | Yes, but the code is the *deepest* level where it appears |
| "MRP guarantees on-time delivery" | Only if data is clean: BOMs accurate, inventory records correct, lead times realistic |

---

## 🎯 Exam Traps Specific to Module 4

1. **Demand Time Fence, forecast is ignored.** Inside DTF, projected available balance uses ONLY firm customer orders, not forecast.
2. **PTF > DTF in time.** Planning Time Fence is *further out* than Demand Time Fence. Many candidates flip this.
3. **MPS unit ≠ MRP unit.** MPS plans in finished-good units (bikes). MRP plans in components (pedals, frames).
4. **"Dependent demand should be forecast."** No, dependent demand is *calculated* from the BOM. Forecasting it is the classic pre-MRP error.
5. **ATP computed wrong.** ATP = MPS receipt minus sum of orders booked *before next MPS receipt*. Not just "MPS minus all orders."
6. **Lot-sizing trade-offs.** L4L minimizes inventory but maximizes setup cost. EOQ does the opposite.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **MPS** | Plan for finished goods (independent demand) |
| **MRP** | Plan for components (dependent demand) |
| **Independent demand** | Demand from outside the plant |
| **Dependent demand** | Calculated from parent BOM |
| **ATP** | Available-to-Promise (uncommitted MPS) |
| **CTP** | Capable-to-Promise (if we replan) |
| **DTF** | Demand Time Fence (near-term frozen zone) |
| **PTF** | Planning Time Fence (mid-term slushy zone) |
| **BOM** | Bill of Materials |
| **Low-level code** | Deepest level an item appears in any BOM |
| **Gross requirements** | Total need from all parents |
| **Net requirements** | Gross minus on-hand minus scheduled receipts |
| **Planned order receipt** | When the order must arrive |
| **Planned order release** | When the order must be released (receipt − LT) |
| **L4L** | Lot-for-Lot lot-sizing |
| **POQ** | Period Order Quantity |
| **FOQ** | Fixed Order Quantity |
| **Action messages** | MRP nudges: release, reschedule in/out, cancel |
| **Pegging** | Traceability: which parent demand triggered this component's plan |

---

## 🤖 2024–2026 Update, MRP, DDMRP, and APS Coexisting

The 2020s have seen meaningful structural evolution in MRP/MPS practice that the modern CPIM expects awareness of:

| Variant | What it changes | Where it fits |
|---|---|---|
| **Classic MRP** (Orlicky 1975) | Push-based, time-phased explosion from MPS through BOMs | Stable demand, accurate BOMs, predictable lead times |
| **MRP II** (Wight 1984) | Adds capacity (CRP) and financial integration to MRP | Standard ERP-era reference |
| **APS / Finite Capacity Scheduling** (Black & Hopp/Spearman, 1990s) | Treats capacity as finite from the start; optimizes across constraints | Complex job shops, semiconductor, automotive |
| **DDMRP, Demand Driven MRP** (Ptak & Smith, 2011, 2nd ed. 2019) | Replaces forecast-driven planning at strategic positions with buffer-based replenishment; combines MRP + lean + TOC | Long-lead-time, high-variability environments |
| **Concurrent/Connected Planning** (Kinaxis, o9, Anaplan circa 2022–2026) | Re-runs the full MRP explosion continuously, not batch | Sub-daily replanning is operationally important |

The ASCM Dictionary (16th ed., 2022) now includes DDMRP entries. The modern CPIM exam treats classic MRP as the default and tests awareness not deep mechanics of DDMRP and APS as alternatives. The CPIM-recognized "Demand Driven Planner Professional (CDDP)" credential, also from ASCM, is the deeper certification for DDMRP specifically.

---

## 📊 Case Study, Boeing 787 Production-Ramp Problems (2007–2013)

**Situation.** The Boeing 787 Dreamliner was a generational program: composite-fuselage construction, novel electrical architecture, fly-by-wire systems. Boeing committed to delivery dates in late 2008 to launch customer All Nippon Airways (ANA), with full production ramp targeted for 2010. The supply-chain architecture was unprecedented for Boeing: roughly **70% of the airframe was outsourced to a tier-1 supplier network** (Mitsubishi for the wings, Spirit AeroSystems for the forward fuselage section, Vought / Alenia for the aft fuselage, Kawasaki for the wing-body fairing) with each tier-1 doing its own design integration. Boeing's intent: distribute risk and capital, leverage supplier engineering capacity. The classical MRP assumption *Boeing knows the BOM, owns the engineering content, controls lead times* was structurally broken from day one. Tier-1s did not always know their own tier-2 BOMs at the level of detail Boeing's planning system required, and supplier lead-time estimates were known to be optimistic.

**Decision.** Boeing's program management committed to the original schedule and continued to push tier-1s to deliver on time, releasing assemblies to Everett with quality-acceptance gaps that were planned to be closed during final assembly. The MRP planning treated tier-1 commitments as firm; the engineering BOMs were treated as stable. Both assumptions were violated continuously through 2008–2010.

**Outcome.** The 787 program suffered **seven delivery-date slips** between 2008 and 2011. First customer delivery slipped from May 2008 to September 2011 a **40-month delay** vs original schedule. Boeing took **$32B+ in deferred production cost** on its books through 2014. The production-ramp recovery (2011–2013) required Boeing to vertically reintegrate critical content (Boeing bought Vought's Charleston facility in 2009 for $1B; built a second-line 787 final-assembly capability in Charleston in 2010) fundamentally rewriting the make/buy strategy of the program. In January 2013 the global 787 fleet was grounded for 3 months following lithium-ion battery thermal events; a separate but related quality-cascade issue. By 2024, with the 787 now in steady-state production, the program is widely treated as a master case in MPS / MRP / supply-network design.

**Lesson for the exam / for practitioners.** The 787 demonstrates several connected MPS/MRP failures:

1. **MPS firm horizon mismatch.** Boeing's MPS treated tier-1 delivery commitments as firm orders. In reality, supplier lead time was both longer and far more variable than the MPS lead-time table reflected. The DTF was effectively shorter than the cumulative lead time.
2. **BOM integrity at the tier-1 boundary.** The MRP explosion downstream of Boeing was only as good as the BOMs the tier-1s maintained. When tier-1 BOMs were incomplete or inconsistent, the planning system "looked correct" but downstream demand was systematically under-planned.
3. **Variable lead times treated as fixed.** Classic MRP assumes fixed lead times. The 787 program had genuine LT variance of months on critical items; APS / finite-capacity scheduling would have at least surfaced the risk.
4. **Override of the planning system by program management.** When the planning system surfaced infeasibility, program leadership "willed" the schedule rather than re-planning. The CPIM-canonical answer would have been: re-baseline the MPS, push the DTF out, and renegotiate customer commitments. Boeing's culture in this period chose not to.

CPIM exam-takeaway: **MRP/MPS is a tool, not a guarantee.** Its outputs are only as good as its inputs (BOMs, lead times, capacity). When inputs are systematically wrong, the planning system will give plausible-looking infeasible answers, and the discipline of *re-baselining* the MPS to honest inputs is a critical management decision that the planning system itself cannot make.

**Discussion (Socratic).**
- Q1: A program manager in your division insists that "the schedule is the schedule" even when the master scheduler flags MRP infeasibility three months out. Build the strongest argument for the program manager's position (program credibility, customer trust, the slippery-slope to chronic delays) AND for the master scheduler's position (the planning system is right; willing the schedule destroys credibility downstream). At what scale of overrun does the calculation flip?
- Q2: The 787 outsourcing decision was correct in 2003 but became wrong by 2009. What's the principled rule for when a *high-outsource* MPS architecture is right vs when vertical integration is right? Use the Hayes & Wheelwright lens from Module 1 and the time-fence logic from this module.
- Q3: Modern aerospace programs (Airbus A350, the Boeing 777X) have moved toward shorter tier-1 networks with tighter Boeing/Airbus involvement in tier-1 engineering. Is this a *retreat* from the 787 outsourcing model, or a *correction* of it, and what does the answer tell you about how MPS should be designed for highly engineered products?

---

## ✅ Module 4 Summary

You now know:

- 🗓️ MPS plans finished goods; MRP plans components
- 🟢 How to compute ATP and what it means to "promise" a customer
- 🚧 Time fences: DTF (frozen) vs PTF (slushy), and what each rule means
- 🌳 BOM structure + low-level coding + why MRP needs it
- ⚙️ The MRP gross-to-net calculation with a worked example
- 📦 Lot-sizing rules: L4L, EOQ, POQ, FOQ, Min/Max
- 🧠 ATP vs CTP vs PTP
- 🚨 The four classic traps: forecast-inside-DTF, PTF/DTF order, dependent-demand-as-forecast, ATP math

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`, especially the MRP table walkthrough
2. ✏️ Take `Quiz.md`, has 7 calculation questions; do them on paper
3. 📋 Master `Cheat-Sheet.md`
4. ➡️ Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) after this module
5. ➡️ Move to [Module 5: Capacity Planning](../Module-05-Capacity-Planning/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 5 (Capacity), RCCP supports the MPS you build here, and CRP supports the MRP plan; Module 6 (Inventory) uses MRP outputs to drive lot-sizing; Module 7 (PAC) executes MRP's planned releases on the floor.
> - Cross-course: `10-ASCM-CSCP` Module 6 generalizes MRP across multi-plant networks (DRP (Distribution Requirements Planning), distribution requirements planning); `12-ASCM-CLTD` Module 5 uses MRP-style logic at distribution centers.
> - Practice: Practice Exam 1 includes 8–10 MRP calculation questions; Final Mock Exam has 12–15. *Do not* skip the calculation questions, they are the highest-yield exam content.

---

## 💬 Discussion, Socratic prompts

1. **Time-fence policy under volatile demand.** A consumer electronics company runs an 8-week DTF and 16-week PTF. Their cumulative product lead time has grown from 12 to 22 weeks due to 2024–2026 chip-shortage aftershocks. Build the strongest argument for *extending* the DTF and PTF AND for *keeping* them where they are and accepting more replanning churn. Which would you defend at the next MPS-policy committee, and what's the indicator that would change your mind?
2. **DDMRP vs classic MRP.** DDMRP (Ptak & Smith, 2011, 2nd ed. 2019) places strategic buffers at decoupling points and uses actual consumption (not forecast) to drive replenishment. Under what production environment from Module 1 (MTS, ATO, MTO, ETO) does DDMRP make the most sense, and where does classic MRP still beat it? Cite at least one piece of literature.
3. **Lot-sizing in 2026.** Lot-for-Lot is the lean / kanban default; EOQ assumes setup-cost matters; FOQ reflects supplier minimums. With 3D printing / additive manufacturing now mature for many metal parts, setup cost has collapsed for many SKUs. Should L4L become the universal default, or do EOQ/FOQ still earn their place? Defend with reference to specific industries.
4. **The override problem.** Inside the DTF, MPS commitments are supposed to be frozen. In practice, sales VPs override the DTF to take big customer orders. What's the right organizational design, a hard "no override" policy, or a structured override-with-impact-assessment process? Use the Boeing 787 case as a stress test for your answer.
5. **MRP nervousness and how to dampen it.** A planner observes that small forecast changes propagate into large MRP plan changes ("MRP nervousness"). Standard countermeasures: firmer time fences, pegging-based exception filtering, planning bills, dampening logic. Pick two and defend them as the right combination, vs the argument that nervousness is a *feature* (the system surfacing real plan changes) not a bug.

---

## 📚 Further Reading (Optional)

- 📖 *Manufacturing Planning and Control for Supply Chain Management* Vollmann, Berry, Whybark & Jacobs, 6th ed. (McGraw-Hill, 2011) Chapters 3–6 are the canonical MPS/MRP source.
- 📖 *Orlicky's Material Requirements Planning, 3rd Edition* Ptak, Carol & Smith, Chad (McGraw-Hill, 2011) the founding text of MRP, updated for the DDMRP era.
- 📖 *Master Scheduling: A Practical Guide to Competitive Manufacturing, 3rd ed.* Proud, John F. (Wiley, 2007) the practitioner's manual for MPS.
- 📖 *Demand Driven Material Requirements Planning (DDMRP), 2nd ed.* Ptak, Carol & Smith, Chad (Industrial Press, 2019) the modern DDMRP playbook.
- 📖 *Factory Physics, 3rd ed.* Hopp, Wallace J. & Spearman, Mark L. (Waveland Press, 2008) the math of WIP, throughput, and APS-style finite scheduling.
- 📖 ASCM Dictionary, 16th edition (2022), entries for MPS, MRP, ATP, CTP, time fence, BOM, low-level code, lot-for-lot, pegging, DDMRP, planning bill.
- 📰 *The Boeing 787: Lessons Learned* Tang, Christopher S. & Zimmerman, Joshua D., *California Management Review* 51(2), 2009 early-program post-mortem; pair with *Aviation Week* 2011–2014 ramp-recovery coverage.
