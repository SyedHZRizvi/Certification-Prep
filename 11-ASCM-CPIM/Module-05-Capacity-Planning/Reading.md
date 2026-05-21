# Module 5: Capacity Planning 🏗️

> **Why this module matters:** A perfect MRP plan with insufficient capacity is fiction. CPIM tests capacity planning at every layer of the planning hierarchy. About 10–15% of exam questions touch capacity, bottlenecks, and the Theory of Constraints.

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

🧠 **Mnemonic:** **R-R-C-I** — RRP, RCCP, CRP, I/O. Long range to short range.

🎯 **Critical exam pattern:** "Which capacity-planning technique is appropriate for evaluating the master production schedule?" → **RCCP**. "...the material requirements plan?" → **CRP**.

---

## 📏 Capacity Definitions (You'll Be Tested on These)

| Term | Definition |
|------|-----------|
| **Design capacity** | Maximum theoretical output under ideal conditions |
| **Effective capacity** | Design capacity reduced for product mix, scheduling, maintenance — realistic max |
| **Demonstrated (actual) capacity** | What the plant has actually proven it can produce in recent history |
| **Rated capacity** | Effective capacity × utilization × efficiency |
| **Utilization** | Hours actually worked ÷ Hours scheduled |
| **Efficiency** | Standard hours earned ÷ Actual hours worked |

### Worked example — Rated Capacity

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

## 🏁 Theory of Constraints (TOC) — Goldratt's Method

**Eliyahu Goldratt** introduced TOC in *The Goal* (1984). The core idea: **every system has at least one bottleneck (constraint), and the throughput of the system equals the throughput of the bottleneck.**

### The 5 Focusing Steps of TOC

🔥 **MEMORIZE these in order. Tested every exam.**

1. **IDENTIFY** the system's constraint.
2. **EXPLOIT** the constraint (get the most out of it — no wasted minutes).
3. **SUBORDINATE** everything else to the constraint (non-bottlenecks serve the bottleneck).
4. **ELEVATE** the constraint (add capacity if Step 2 isn't enough).
5. **REPEAT** — if Step 4 broke the constraint, return to Step 1 (a new constraint emerged).

### Drum-Buffer-Rope (DBR) — TOC's Scheduling Method

- **Drum** = the bottleneck's pace; sets the rhythm of the whole plant
- **Buffer** = inventory placed in front of the bottleneck to protect it from starvation
- **Rope** = communication mechanism that pulls material into the plant at the drum's rate (so non-bottlenecks don't overproduce)

🧠 **Mnemonic:** *Drum* sets the beat. *Buffer* protects the drum. *Rope* ties the front of the plant to the drum.

### TOC Performance Measures

Goldratt redefined performance metrics for the constraint world:
- **Throughput (T)** = sales revenue − raw material cost (NOT volume — it's $)
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

Pattern: queue is growing — work center cannot keep up. Either slow inputs, add capacity, or accept growing backlog.

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

## 🎛️ Capacity vs Demand — Resolving Mismatches

When required capacity exceeds available:
- Overtime
- Second shift
- Outsource / subcontract
- Use alternate routings
- Cross-train workers
- Reduce setup time (SMED — see Module 8)
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
| "Capacity planning is just CRP" | No — CRP is one of FOUR layers (RRP, RCCP, CRP, I/O) |
| "100% utilization is good" | No — 100% on a non-bottleneck is wasteful; 100% on the bottleneck *might* be |
| "Lead capacity strategy is always safer" | No — idle capacity bleeds cash if demand doesn't arrive |
| "The bottleneck is permanent" | No — when you elevate the constraint, a new one emerges (Step 5 of TOC) |
| "Rated capacity = design capacity" | No — design is theoretical; rated factors in utilization and efficiency |
| "Increasing capacity always increases throughput" | No — only if you increase the BOTTLENECK's capacity |

---

## 🎯 Exam Traps Specific to Module 5

1. **RCCP vs CRP confusion.** RCCP = supports MPS, uses Bill of Resources, critical work centers only. CRP = supports MRP, uses full routings, every work center.
2. **"Throughput = volume."** No — in TOC, throughput is a dollar measure (sales revenue − raw material cost).
3. **"Saving time at a non-bottleneck helps."** No — it doesn't change system throughput.
4. **"Demonstrated capacity is the same as design capacity."** No — demonstrated is what the plant has actually produced recently. Design is theoretical max.
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
| **Theory of Constraints** | Goldratt — every system has a constraint; throughput = constraint's throughput |
| **5 Focusing Steps** | Identify, Exploit, Subordinate, Elevate, Repeat |
| **Drum-Buffer-Rope** | Bottleneck-driven scheduling |
| **Throughput (TOC)** | Sales − raw material cost (dollars, not units) |
| **Lead strategy** | Add capacity before demand |
| **Lag strategy** | Add capacity after demand |
| **Match strategy** | Incremental tracking adds |
| **Load profile** | Required vs available capacity chart |
| **Bill of Resources** | Simplified BOM used in RCCP |

---

## ✅ Module 5 Summary

You now know:
- 🏗️ The four-layer capacity hierarchy (RRP → RCCP → CRP → I/O) and which planning layer each supports
- 📏 Capacity definitions: design, effective, demonstrated, rated — and the utilization/efficiency formulas
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

## 📚 Further Reading (Optional)

- 📖 *The Goal* — Eliyahu Goldratt (the TOC novel — one weekend read)
- 📖 *It's Not Luck* — Goldratt (sequel, applies TOC to S&OP)
- 📖 *Manufacturing Planning and Control* — Jacobs et al., Chapter 5 (capacity hierarchy)
- 📖 *Production and Operations Analysis* — Nahmias
- 📖 ASCM Dictionary entries: capacity, rated capacity, utilization, efficiency, RCCP, CRP, theory of constraints, drum-buffer-rope
