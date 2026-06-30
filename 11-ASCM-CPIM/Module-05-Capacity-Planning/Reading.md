# Module 5: Capacity Planning 🏗️

> **Why this module matters:** A perfect MRP plan with insufficient capacity is fiction. CPIM tests capacity planning at every layer of the planning hierarchy. About 10–15% of exam questions touch capacity, bottlenecks, and the Theory of Constraints.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 3: S&OP](../Module-03-SOP-Sales-Operations-Planning/Reading.md), Resource Planning lives inside S&OP Step 3; the capacity hierarchy parallels the planning hierarchy
> - [Module 4: MPS / MRP](../Module-04-Master-Production-Scheduling-MRP/Reading.md), RCCP supports MPS; CRP supports MRP; you need to know what each plans before you can check its capacity
> - High-school arithmetic with percentages (utilization and efficiency)
>
> Capacity planning is conceptual. The math is light (utilization, efficiency, rated capacity), the concepts are heavy (5 Focusing Steps, DBR, hierarchy alignment). Don't skim.

---

## 🍕 A Story: The Coffee Shop With One Espresso Machine

**Lina** runs a coffee shop with 6 employees, 4 cash registers, 12 seats, and *one* espresso machine. On weekdays it's fine. On Saturday mornings the queue snakes around the block. Customers leave.

She hires two more baristas. Queue stays. She adds a 5th register. Queue stays. She extends the patio. Queue stays.

A consultant walks in, watches for an hour, and points at the espresso machine. "That's your bottleneck. *Nothing* you do to the registers, baristas, or patio helps until that machine can pull more shots per hour."

Lina buys a second espresso machine. The next Saturday, the queue is gone. Revenue jumps 31%.

**That's the Theory of Constraints in one breakfast story.** The throughput of an entire system is set by its single slowest step. Anything you do to non-bottlenecks is waste.

---

## 🎯 The Capacity Hierarchy (MEMORIZE)

Just like the planning hierarchy (S&OP → MPS → MRP → PAC), there is a *parallel* capacity hierarchy at every level. **This is heavily tested.**

| Capacity Layer | Time Horizon | Linked Planning Layer | Question Answered |
|----------------|--------------|------------------------|--------------------|
| **Resource Planning (RRP)** | Years | S&OP | Do we have enough plants/big equipment for the long-range plan? |
| **Rough-Cut Capacity Planning (RCCP)** | Months / Weeks | MPS | Does the MPS fit our critical work centers? |
| **Capacity Requirements Planning (CRP)** | Weeks / Days | MRP | Does the detailed component plan fit every work center? |
| **Input/Output Control (I/O)** | Days / Shifts | PAC | Are we releasing too much or too little to the floor? |

🧠 **Mnemonic:** **R-R-C-I**, RRP, RCCP, CRP, I/O. Long range to short range.

🎯 **Critical exam pattern:** "Which capacity-planning technique is appropriate for evaluating the master production schedule?" → **RCCP**. "...the material requirements plan?" → **CRP**.

---

## 📏 Capacity Definitions (You'll Be Tested on These)

| Term | Definition |
|------|-----------|
| **Design capacity** | Maximum theoretical output under ideal conditions |
| **Effective capacity** | Design capacity reduced for product mix, scheduling, maintenance, realistic max |
| **Demonstrated (actual) capacity** | What the plant has actually proven it can produce in recent history |
| **Rated capacity** | Effective capacity × utilization × efficiency |
| **Utilization** | Hours actually worked ÷ Hours scheduled |
| **Efficiency** | Standard hours earned ÷ Actual hours worked |

### Worked example, Rated Capacity

A work center has 5 machines × 8 hours/shift × 1 shift/day × 5 days/week = **200 hours/week** of available time (effective capacity).

If utilization = 0.85 (15% of scheduled time is lost to breakdowns/setups) and efficiency = 0.95 (workers produce 95 standard hours per actual hour worked):

`Rated capacity = 200 × 0.85 × 0.95 = 161.5 standard hours/week`

🎯 **Exam pattern:** Given available hours + utilization + efficiency, compute rated capacity. Practice this.

---

## ⚙️ The 3 Capacity Strategies (Lead, Lag, Match)

When demand is growing, you must decide how to add capacity.

| Strategy | Description | Pros | Cons |
|----------|-------------|------|------|
| **Lead** | Add capacity BEFORE demand arrives | Never short of capacity; captures upside | Idle capacity if demand disappoints |
| **Lag** | Add capacity AFTER demand exceeds existing | No idle capacity | Lost sales, expediting cost |
| **Match (tracking)** | Small incremental adds | Balanced | Frequent change-management |

🎯 **Exam pattern:** "Forecasted demand is highly uncertain and competition is fierce." → Lead strategy (better to have than not). "Capital is constrained and demand is well-understood." → Lag or Match.

---

## 🎚️ Load Profiles (RCCP and CRP Outputs)

A **load profile** is a bar chart of required capacity vs available capacity, by work center, by time period. The two main types:

### Bill of Resources (used in RCCP)

A simplified BOM that lists only the *critical* work centers and how many standard hours each unit of finished good consumes.

**Example.** Bike A has a Bill of Resources:

- Welding: 0.5 hr/bike
- Painting: 0.3 hr/bike
- Assembly: 0.8 hr/bike

If the MPS for week 4 calls for 1,000 bikes, RCCP says: Welding needs 500 hrs, Painting 300 hrs, Assembly 800 hrs. Compare to each work center's available capacity.

### CRP (Detailed)

Uses the *full* routing for every component, including setup time, run time per piece, and scheduling rules. Far more detailed but computationally heavier.

---

## 🏁 Theory of Constraints (TOC), Goldratt's Method

> **Citation.** Goldratt, Eliyahu M. & Cox, Jeff, *The Goal: A Process of Ongoing Improvement* (North River Press, 1984; 4th anniversary ed. 2014). The non-fiction companion is Goldratt, Eliyahu M., *What is This Thing Called Theory of Constraints and How Should It Be Implemented?* (North River Press, 1990) and Goldratt's *It's Not Luck* (1994, sequel applying TOC to S&OP). Drum-Buffer-Rope was formalized in Goldratt, *The Race* (1986). TOC is now stewarded by the **Theory of Constraints International Certification Organization (TOCICO)**. ASCM Dictionary (16th ed., 2022) treats TOC, throughput, drum-buffer-rope as core entries.

**Eliyahu Goldratt** introduced TOC in *The Goal* (1984). The core idea: **every system has at least one bottleneck (constraint), and the throughput of the system equals the throughput of the bottleneck.**

### The 5 Focusing Steps of TOC

🔥 **MEMORIZE these in order. Tested every exam.**

1. **IDENTIFY** the system's constraint.
2. **EXPLOIT** the constraint (get the most out of it, no wasted minutes).
3. **SUBORDINATE** everything else to the constraint (non-bottlenecks serve the bottleneck).
4. **ELEVATE** the constraint (add capacity if Step 2 isn't enough).
5. **REPEAT**, if Step 4 broke the constraint, return to Step 1 (a new constraint emerged).

### Drum-Buffer-Rope (DBR), TOC's Scheduling Method

- **Drum** = the bottleneck's pace; sets the rhythm of the whole plant
- **Buffer** = inventory placed in front of the bottleneck to protect it from starvation
- **Rope** = communication mechanism that pulls material into the plant at the drum's rate (so non-bottlenecks don't overproduce)

🧠 **Mnemonic:** *Drum* sets the beat. *Buffer* protects the drum. *Rope* ties the front of the plant to the drum.

### TOC Performance Measures

Goldratt redefined performance metrics for the constraint world:

- **Throughput (T)** = sales revenue − raw material cost (NOT volume, it's $)
- **Inventory (I)** = all money invested in things the system intends to sell
- **Operating expense (OE)** = money spent to turn inventory into throughput

**Goal:** increase T while decreasing I and OE.

---

## 🚨 Bottleneck Rules That ALWAYS Apply

1. **An hour lost at the bottleneck is an hour lost for the entire plant.**
2. **An hour saved at a non-bottleneck is a mirage.** (It doesn't increase throughput.)
3. **Bottlenecks govern throughput AND inventory.** Material piles up in front of them.
4. **Activate ≠ Utilize.** Activating a non-bottleneck at 100% just creates excess inventory.

🎯 **Classic exam question:** "Plant added a 2nd shift on the non-bottleneck Milling line. Throughput didn't change. Why?" → Because the bottleneck wasn't Milling.

---

## 🌊 Input/Output Control

Used at the PAC layer to verify that:

- **Inputs** (work released to a work center) match planned input
- **Outputs** (completed work) match planned output

When actual input > planned, *queue grows* (WIP builds up). When actual output < planned, *backlog grows*.

Simple report:

| Week | Planned Input | Actual Input | Planned Output | Actual Output | Queue End |
|------|---------------|--------------|----------------|---------------|-----------|
| 1 | 100 | 110 | 100 | 95 | +15 |
| 2 | 100 | 105 | 100 | 90 | +30 |
| 3 | 100 | 100 | 100 | 85 | +45 |

Pattern: queue is growing, work center cannot keep up. Either slow inputs, add capacity, or accept growing backlog.

---

## 🧮 Capacity Calculations (Practice These)

### 1. Required Capacity

For a single work center, required hours per period:

`Required Capacity = Σ (Item demand × Standard hours per item)`

### 2. Utilization

`Utilization = Hours actually used / Hours available × 100%`

### 3. Efficiency

`Efficiency = Standard hours produced / Hours actually worked × 100%`

### 4. Available Capacity

`Available Capacity = (Workstations) × (Hours/shift) × (Shifts/day) × (Days/period) × Utilization × Efficiency`

### Worked example

A work center has 3 machines, runs 2 shifts of 8 hours/day, 5 days/week. Utilization = 0.90, efficiency = 0.92.

Theoretical hours = 3 × 8 × 2 × 5 = **240 hours**
Available (rated) = 240 × 0.90 × 0.92 = **198.7 hours**

If MPS demand requires 220 standard hours that week, we have a **gap of 21 hours**. Options: overtime, second weekend shift, reduce demand, outsource, or accept the late deliveries.

---

## 🎛️ Capacity vs Demand, Resolving Mismatches

When required capacity exceeds available:

- Overtime
- Second shift
- Outsource / subcontract
- Use alternate routings
- Cross-train workers
- Reduce setup time (SMED, see Module 8)
- Adjust the MPS (push out)

When available exceeds required:

- Reduce overtime
- Inventory build (level strategy)
- New product introduction / training
- Preventive maintenance
- Workforce reduction (last resort)

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Capacity planning is just CRP" | No, CRP is one of FOUR layers (RRP, RCCP, CRP, I/O) |
| "100% utilization is good" | No, 100% on a non-bottleneck is wasteful; 100% on the bottleneck *might* be |
| "Lead capacity strategy is always safer" | No, idle capacity bleeds cash if demand doesn't arrive |
| "The bottleneck is permanent" | No, when you elevate the constraint, a new one emerges (Step 5 of TOC) |
| "Rated capacity = design capacity" | No, design is theoretical; rated factors in utilization and efficiency |
| "Increasing capacity always increases throughput" | No, only if you increase the BOTTLENECK's capacity |

---

## 🎯 Exam Traps Specific to Module 5

1. **RCCP vs CRP confusion.** RCCP = supports MPS, uses Bill of Resources, critical work centers only. CRP = supports MRP, uses full routings, every work center.
2. **"Throughput = volume."** No, in TOC, throughput is a dollar measure (sales revenue − raw material cost).
3. **"Saving time at a non-bottleneck helps."** No, it doesn't change system throughput.
4. **"Demonstrated capacity is the same as design capacity."** No, demonstrated is what the plant has actually produced recently. Design is theoretical max.
5. **"Match strategy is always best."** Match has its own cost: constant small change. Lead/Lag/Match fit different risk profiles.
6. **Util vs Efficiency.** Utilization = how much of *scheduled* time was used. Efficiency = how productive the *used* time was.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **Resource Planning (RRP)** | Long-range strategic capacity, S&OP layer |
| **Rough-Cut Capacity Planning (RCCP)** | Mid-range capacity check, MPS layer, uses Bill of Resources |
| **Capacity Requirements Planning (CRP)** | Detailed capacity by work center, MRP layer, full routing |
| **Input/Output Control** | Daily/shift capacity execution, PAC layer |
| **Design capacity** | Theoretical max under ideal conditions |
| **Effective capacity** | Realistic max given mix, scheduling, maintenance |
| **Demonstrated capacity** | What the plant has actually produced recently |
| **Rated capacity** | Effective × utilization × efficiency |
| **Utilization** | Hours used / hours available |
| **Efficiency** | Standard hours earned / actual hours worked |
| **Bottleneck (constraint)** | The resource limiting throughput |
| **Theory of Constraints** | Goldratt, every system has a constraint; throughput = constraint's throughput |
| **5 Focusing Steps** | Identify, Exploit, Subordinate, Elevate, Repeat |
| **Drum-Buffer-Rope** | Bottleneck-driven scheduling |
| **Throughput (TOC)** | Sales − raw material cost (dollars, not units) |
| **Lead strategy** | Add capacity before demand |
| **Lag strategy** | Add capacity after demand |
| **Match strategy** | Incremental tracking adds |
| **Load profile** | Required vs available capacity chart |
| **Bill of Resources** | Simplified BOM used in RCCP |

---

## 📊 Case Study, Tesla Gigafactory & the "Production Hell" Ramp (2017–2024)

**Situation.** Tesla announced the Model 3 in March 2016 with a $35,000 sticker price, taking ~500,000 pre-orders (~$14B in reservations). Production was to ramp at the Fremont assembly plant and the new **Gigafactory 1** in Sparks, Nevada, jointly with Panasonic on battery cells. CEO Elon Musk publicly committed to producing **5,000 Model 3s per week by the end of 2017**. Tesla had built ~84,000 vehicles across its entire history at the start of the ramp; the commitment was effectively to triple cumulative production in a single year. Capacity planning had to bridge from a near-prototype line to industrial-scale automation that had never been attempted in the EV industry.

**Decision.** Tesla committed to extreme automation upfront the "alien dreadnought" Musk described including robotic battery-module assembly and a fully automated final-assembly line. The capacity hierarchy was, per ASCM canonical form: Resource Planning had built capacity assuming a smooth ramp; RCCP-equivalent rough-cut analysis treated automation throughput as design-capacity from day one rather than demonstrated capacity. The bottleneck identification process was *intended* to follow TOC discipline but in practice was overridden by program timing.

**Outcome.** Tesla missed the Q4 2017 target by an order of magnitude (~2,400/quarter vs the 5,000/week target). Musk publicly named the period **"production hell."** Through 2018, Tesla:

1. **Re-baselined to demonstrated capacity.** The Sparks battery-module line was found to be the true bottleneck. Initial automation was failing at unacceptable rates. Tesla *removed* several automation steps and re-introduced manual operations, explicitly the **Exploit** step (Step 2) of TOC: get the most out of what the bottleneck can actually do, even if it's "less elegant."
2. **Built a *literal* second-line in a tent.** Tesla erected General Assembly Line #3 ("GA3") under a tent in the Fremont parking lot in summer 2018, adding manual final-assembly capacity to **Elevate** (TOC Step 4) the bottleneck. By end-June 2018 Tesla had hit 5,000 Model 3s in a single week (announced July 1, 2018).
3. **Migrated the next constraint identification cycle.** Once final assembly was elevated, the constraint shifted upstream to battery pack assembly, then to component supply, then to logistics, the classic TOC Step-5 "repeat from the beginning" cycle.

By 2024, Tesla was producing ~1.8M vehicles per year globally (Fremont, Shanghai Gigafactory, Berlin Gigafactory, Austin Gigafactory). The "production hell" period is now textbook material, *Forbes*, *MIT Sloan Management Review*, and the Cohen & Roussel *Strategic Supply Chain Management* update (2025) all use it as the canonical case for the limits of design-capacity planning.

**Lesson for the exam / for practitioners.** Tesla's experience demonstrates the gap between **design capacity** (what the automation is *supposed* to do), **effective capacity** (what realistic conditions allow), and **demonstrated capacity** (what the plant has *actually* produced). The CPIM exam tests this triad routinely. Tesla's recovery was a near-textbook TOC sequence: Identify the constraint (battery module line), Exploit it (remove failed automation, accept lower per-unit elegance for higher throughput), Subordinate the rest of the plant to the bottleneck's pace, Elevate (add capacity, the tent line), Repeat (move to the next constraint). The CPIM exam-takeaway: **the 5 Focusing Steps are not a checklist; they are a discipline you execute repeatedly as the constraint moves.** An hour gained at the bottleneck *is* throughput. An hour at a non-bottleneck is a mirage. Tesla learned this the hard way.

**Discussion (Socratic).**
- Q1: A program manager at a competing EV startup argues that "Tesla's path was unique to them, we won't have to remove automation, because we'll get it right the first time." Build the strongest argument that this confidence is justified (lessons learned from Tesla; better technology baseline) AND that it's misguided (the underlying physics of any first-of-kind production ramp). At what scale of automation commitment does the calculation flip?
- Q2: Tesla overrode its planning system in 2017 by setting an external commitment (5,000/week) that the planning system did not support. What's the principled rule for when a *capacity stretch goal* is a useful management lever vs when it's a destructive override of the capacity hierarchy? (Use Resource Planning vs RCCP as the lens.)
- Q3: The "tent line" adding a fully manual final-assembly line in 2 months to elevate the constraint would be considered structurally wrong by classical Hayes & Wheelwright reasoning (off-diagonal: high volume + manual layout). But it worked. Reconcile the case with the Module 1 framework. Where do you draw the line between *correct* off-diagonal positioning (Inditex, Tesla 2018) and *incorrect* off-diagonal positioning (a job shop trying to grow into continuous flow)?

---

## ✅ Module 5 Summary

You now know:

- 🏗️ The four-layer capacity hierarchy (RRP → RCCP → CRP → I/O) and which planning layer each supports
- 📏 Capacity definitions: design, effective, demonstrated, rated, and the utilization/efficiency formulas
- ⚙️ The three capacity strategies (Lead, Lag, Match) and when each fits
- 🏁 The Theory of Constraints, 5 Focusing Steps, and Drum-Buffer-Rope
- 🚨 Bottleneck rules: time lost there = throughput lost; saving time elsewhere = mirage
- 🌊 Input/Output Control as the PAC-layer execution mechanism
- 🧮 How to compute available capacity, required capacity, and capacity gaps

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Master `Cheat-Sheet.md`
4. ➡️ Move to [Module 6: Inventory Management](../Module-06-Inventory-Management/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 6 (Inventory) uses safety stock to buffer the constraint; Module 7 (PAC) executes I/O Control on the floor and applies dispatching to the constraint; Module 8 (Lean) extends TOC into Lean's "perfection" principle.
> - Cross-course: `10-ASCM-CSCP` Module 7 generalizes capacity to network design; `12-ASCM-CLTD` Module 6 applies capacity logic to warehouse and transportation systems.
> - Practice: Practice Exam 2 has 12–14 questions on capacity (hierarchy, TOC, DBR, rated capacity); Final Mock Exam adds capacity-vs-S&OP integration questions.

---

## 💬 Discussion, Socratic prompts

1. **Lead vs lag in a chip-shortage era.** A specialty-chemicals plant ran at 95% utilization through 2023 with 8-week customer lead times. Demand forecasts are uncertain, could grow 20% or shrink 10% in 2025. CFO wants Lag (capital-conservative); COO wants Lead (capture upside). Build the strongest case for each, and identify the **two** financial metrics that should decide.
2. **The "100% utilization" trap.** A new VP of Manufacturing celebrates that all 14 work centers are running at 95%+. Why is this a *yellow flag* not a green one in a TOC-trained plant?
3. **TOC vs Lean.** Goldratt focuses on the *constraint*; Lean focuses on eliminating *all waste*. In a high-mix job shop with one obvious bottleneck, which discipline yields more value first? In a repetitive automotive line with no clear bottleneck, which? Cite Goldratt and Womack/Jones.
4. **The "shift the constraint" challenge.** Tesla's constraint moved repeatedly during the ramp: battery cells → battery packs → paint → final assembly → logistics → service. Argue that this is a *failure* of the planning hierarchy AND that it's a *natural outcome* of TOC Step 5. What does the answer tell you about how to set executive expectations during a ramp?
5. **APS / finite-capacity scheduling.** Modern APS tools (Siemens Opcenter APS 2024, Dassault DELMIA, Logility Voyager) solve finite-capacity scheduling problems automatically. Argue that this *replaces* the RCCP/CRP hierarchy AND that it *augments* it. Where does the line genuinely sit?

---

## 📚 Further Reading (Optional)

- 📖 *The Goal: A Process of Ongoing Improvement* Goldratt, Eliyahu M. & Cox, Jeff (North River Press, 1984; 4th anniv. ed. 2014) the TOC novel, one weekend read.
- 📖 *It's Not Luck* Goldratt, Eliyahu M. (North River Press, 1994) sequel applying TOC to S&OP.
- 📖 *Critical Chain* Goldratt, Eliyahu M. (North River Press, 1997) TOC applied to project management.
- 📖 *Manufacturing Planning and Control for Supply Chain Management* Vollmann, Berry, Whybark & Jacobs, 6th ed. (McGraw-Hill, 2011) Chapter 5 (capacity hierarchy).
- 📖 *Factory Physics, 3rd ed.* Hopp, Wallace J. & Spearman, Mark L. (Waveland Press, 2008) the rigorous math.
- 📖 *Production and Operations Analysis, 7th ed.* Nahmias, Steven & Olsen, Tava Lennon (Waveland Press, 2015) standard graduate textbook.
- 📖 ASCM Dictionary, 16th edition (2022), entries for capacity, rated capacity, utilization, efficiency, RCCP, CRP, theory of constraints, drum-buffer-rope.
- 📰 *Tesla's Production Hell and the Lessons of Ramp-Up*, multiple MIT Sloan Management Review pieces 2018–2020; Lean Enterprise Institute write-ups; Forbes manufacturing column (Joann Muller, 2018).
