# Module 8: Quality, Lean & Continuous Improvement 🔧

> **Why this module matters:** Lean and quality concepts are ~15% of the CPIM exam. The 7 wastes, kanban math, takt time, DMAIC, control charts — these are *guaranteed* to appear. Many candidates skim this module; don't.

---

## 🍕 A Story: The Auto Plant That Beat Detroit

In 1973 a Toyota production manager named **Taiichi Ohno** walked a Detroit Ford plant. He counted: stacks of WIP between every station, supervisors yelling at workers, a defect rework area larger than the assembly line, and 4 cars finished per worker per shift.

Back in Japan, he was producing **14 cars per worker per shift** with one-tenth the inventory.

The difference wasn't workers. It wasn't machines (Ford had newer ones). It wasn't software. It was **a system Ohno had been building for 20 years to eliminate waste, level production, and make problems visible the moment they happened.** He called it the Toyota Production System (TPS). The West later called it **Lean**.

By 2010, Toyota was producing 9 million cars a year, made famous a vocabulary that included *kaizen*, *kanban*, *poka-yoke*, *jidoka*, and *takt time*, and re-shaped global manufacturing.

This module is what CPIM expects you to know about that system.

---

## 🗑️ The 7 Wastes of Lean (TIMWOOD / DOWNTIME)

🔥 **MEMORIZE THESE.** They're tested every single CPIM exam.

| Waste | Definition | Example |
|-------|-----------|---------|
| **Transportation** | Moving material more than necessary | Forklift trip across plant for one screw |
| **Inventory** | Stock beyond what's needed now | $4M of dusty WIP |
| **Motion** | Operator movement that adds no value | Bending to reach tools every cycle |
| **Waiting** | Idle time for people, machines, or materials | Operator waits for parts from upstream |
| **Overproduction** | Making more than the customer ordered | Building a week's worth before request |
| **Overprocessing** | Doing more than the customer values | Polishing a hidden surface |
| **Defects** | Errors requiring rework or scrap | Bad welds, wrong assembly |

🧠 **TIMWOOD** — Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects.

Some modern lists add an **8th waste**: **Unused Talent / Underutilized Human Potential** → **DOWNTIME** (Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing).

🎯 **Critical exam insight:** **Overproduction** is considered the *worst* waste because it *creates* the other 6 — extra inventory, transportation, motion, etc. Toyota teaches: never produce ahead of demand.

---

## 🎯 The 5 Lean Principles (Womack & Jones)

1. **Value** — define value from the customer's perspective
2. **Value Stream** — map every step; eliminate non-value-add
3. **Flow** — make value-adding steps flow without interruption
4. **Pull** — let downstream demand pull work; no overproduction
5. **Perfection** — continuously improve toward zero waste

---

## 🌊 Value Stream Mapping (VSM)

A VSM is a visual diagram of every step (value-add and non-value-add) from raw material to customer. Tracks:
- Process time
- Lead time
- WIP between steps
- Information flow
- Inventory at each stage

**Output:** identifies bottlenecks and waste targets. Current-state map → future-state map → kaizen events to close the gap.

---

## 🃏 Kanban (Pull Signal)

A **kanban** is a signal (card, container, electronic) that authorizes downstream demand to *pull* product from upstream.

### Kanban Sizing Formula

```
N = (D × LT × (1 + SS)) / C
```

Where:
- **N** = number of kanban cards
- **D** = average demand per period (units)
- **LT** = lead time per kanban (periods)
- **SS** = safety stock factor (e.g., 0.10 = 10% buffer)
- **C** = container size (units per kanban)

### Worked example

Daily demand = 200 units. Lead time = 0.5 day. Container size = 50 units. Safety stock factor = 20%.

`N = (200 × 0.5 × 1.20) / 50 = 120 / 50 = 2.4 → round up to 3 kanbans`

So 3 cards × 50 units = 150 units max WIP at this stage.

🎯 **Exam pattern:** Compute N given D, LT, container, safety. Then compute max WIP = N × C.

---

## ⏱️ Takt Time

**Takt time** = the rhythm at which the customer is buying. The line should pace to takt — no faster, no slower.

```
Takt = Available production time per period / Customer demand per period
```

### Worked example

Available time per shift = 8 hours = 480 min. Demand = 240 units/shift.

`Takt = 480 / 240 = 2 minutes per unit`

The line should complete one unit every 2 minutes. If the actual cycle time is 1.5 min/unit, the line is overproducing (waste). If it's 2.5 min/unit, the line is short of demand.

🚨 **Takt vs cycle time vs lead time** — three different things!
- **Takt** = customer demand rate (how often we *should* produce)
- **Cycle time** = how often we *actually* produce
- **Lead time** = total time from start to finish (Module 7)

---

## 🪪 Standard Work

Documented best-known method for performing a task. Has 3 components:
1. **Takt time** — the pace
2. **Work sequence** — the steps in order
3. **Standard WIP** — the inventory inside the cell needed to run

Without standard work, kaizen (improvement) has no baseline.

---

## ⚡ SMED — Setup Reduction

Covered briefly in Module 7. Phases:
1. Separate internal vs external setup
2. Convert internal to external
3. Streamline both
4. Eliminate adjustments

Toyota reduced press setups from hours to *9 minutes* using SMED.

---

## 🛑 Jidoka & Poka-Yoke

| Concept | Meaning |
|---------|---------|
| **Jidoka** | "Autonomation" — automation with a human touch; machines stop when a defect is detected |
| **Andon** | Visual signal (cord, light) that operators pull to stop the line or call for help |
| **Poka-yoke** | "Mistake-proofing" — physical or process design that makes errors impossible |

Example of poka-yoke: USB-C plug is symmetrical so you can't insert it backward. (Or the keyed slot on a SIM-card tray.)

---

## 🔄 Kaizen — Continuous Improvement

Small, incremental, daily improvements driven by the workers who do the work. Often facilitated by a **kaizen event** — a 3–5 day focused improvement workshop.

The Kaizen mindset:
- Small steps over big leaps
- All workers participate, not just engineers
- Stop, observe, ask "why?" five times
- Standardize the improvement once proven

---

## 🧹 5S — Workplace Organization

| S | Japanese | English | Action |
|---|----------|---------|--------|
| 1 | Seiri | **Sort** | Remove what isn't needed |
| 2 | Seiton | **Set in order** | A place for everything |
| 3 | Seiso | **Shine** | Clean and inspect daily |
| 4 | Seiketsu | **Standardize** | Make the standard visible |
| 5 | Shitsuke | **Sustain** | Discipline; make it culture |

5S is usually the *first* lean tool deployed in a plant — visible, fast, builds discipline for harder work later.

---

## 📊 Six Sigma & DMAIC

**Six Sigma** = a data-driven quality improvement methodology pioneered by Motorola (1986) and popularized by GE (Welch, 1995). Target: ≤ **3.4 defects per million opportunities (DPMO)** = 6σ from the mean.

🔥 **MEMORIZE DMAIC** — the 5-phase improvement cycle:

| Phase | What Happens |
|-------|--------------|
| **D**efine | Project charter, customer requirements, scope |
| **M**easure | Baseline performance; data collection; capability |
| **A**nalyze | Root cause analysis; statistical tests |
| **I**mprove | Pilot solutions; verify gains |
| **C**ontrol | Standardize; control plan; sustain |

For *new* designs you use **DMADV** (Define, Measure, Analyze, Design, Verify) instead of DMAIC.

### Six Sigma Belts

| Belt | Role |
|------|------|
| **White / Yellow** | Awareness |
| **Green** | Part-time project leader |
| **Black** | Full-time project leader; coaches Green Belts |
| **Master Black Belt** | Coach, trainer, deployment leader |
| **Champion** | Senior executive sponsor |

---

## 📈 Control Charts (SPC)

A **control chart** plots a process metric over time with upper and lower control limits (UCL, LCL) — usually ±3σ from the process mean.

```
UCL ──── (mean + 3σ)
    │  ●  ●     ●
    │●   ●  ●●   ●
    │ ●  ●    ●●
LCL ──── (mean − 3σ)
```

A point outside the control limits = **special-cause variation** → investigate.
All points within = **common-cause variation** → in statistical control (don't tamper).

🎯 **Exam pattern:** "A point is just inside UCL but the last 8 are above the mean." → A *run* of 8 same-side points is a signal even without an out-of-limit point. Investigate.

### Process Capability (Cp, Cpk)

```
Cp  = (USL − LSL) / (6σ)
Cpk = min[ (USL − μ) / (3σ),  (μ − LSL) / (3σ) ]
```

- **Cp** measures *potential* capability (if perfectly centered)
- **Cpk** measures *actual* capability (accounts for off-center mean)
- Cpk ≥ **1.33** = capable. Cpk ≥ **2.0** = world-class (Six Sigma).

---

## 🧠 TQM — Total Quality Management

Pre-Six-Sigma quality movement (Deming, Juran, Crosby, Ishikawa) emphasizing:
- Customer focus
- Continuous improvement
- Employee involvement
- Data-driven decisions
- Quality at the source

**The 7 Basic Quality Tools** (Ishikawa):
1. Cause-and-effect (fishbone) diagram
2. Check sheet
3. Control chart
4. Histogram
5. Pareto chart
6. Scatter diagram
7. Stratification (or flowchart, depending on source)

---

## ⚙️ TPM — Total Productive Maintenance

**TPM** brings maintenance ownership into the production team. Goals: zero breakdowns, zero defects, zero accidents.

### OEE — Overall Equipment Effectiveness

```
OEE = Availability × Performance × Quality
```

- **Availability** = uptime / scheduled time
- **Performance** = actual output / theoretical max output during uptime
- **Quality** = good units / total units

**World-class OEE = 85%+**. Most plants run 40–60%.

### Worked example

Availability = 0.90, Performance = 0.95, Quality = 0.99.

`OEE = 0.90 × 0.95 × 0.99 = 0.847 = 84.7%`

---

## 🔁 PDCA / PDSA (Deming Cycle)

| Step | Meaning |
|------|---------|
| **Plan** | Identify problem, plan solution |
| **Do** | Implement pilot |
| **Check / Study** | Compare actual to expected |
| **Act** | Standardize if successful; iterate if not |

Often used as the *engine* of kaizen events.

---

## 🏁 Theory of Constraints Reprise

Goldratt's TOC (Module 5) fits within lean's "perfection" principle — but TOC focuses on *the constraint* while pure lean focuses on *all waste*. Most modern factories blend the two.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Lean means fewer workers" | False — lean targets *waste*, not headcount |
| "Six Sigma is just statistics" | It's a project methodology; statistics is a tool |
| "Kaizen is a one-time event" | It's a *culture* of continuous small improvement |
| "Kanban replaces MRP" | They coexist — MRP plans, kanban executes pull |
| "Takt time = cycle time" | Takt is *desired* pace (customer); cycle time is *actual* |
| "TPM is the maintenance department's job" | TPM puts *operators* in charge of daily maintenance |
| "Higher Cpk is always better" | Cpk ≥ 1.33 capable; ≥ 2.0 world-class — beyond that, diminishing returns |

---

## 🎯 Exam Traps Specific to Module 8

1. **TIMWOOD vs DOWNTIME** — both are valid; some sources list 7 wastes, some 8 (8th = unused talent). Know both.
2. **Takt ≠ cycle time ≠ lead time.** Three distinct concepts.
3. **DMAIC vs DMADV** — DMAIC for existing process improvement; DMADV for *new* design.
4. **3.4 DPMO** is the Six Sigma target (defects per million opportunities). Know that figure.
5. **Cp vs Cpk** — Cp is potential (assumes centered); Cpk accounts for actual centering.
6. **A run of points above the mean** on a control chart is a signal even without an out-of-limit point.
7. **5S — five S's, in order**. Sort, Set in order, Shine, Standardize, Sustain.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **Lean** | System for eliminating waste, originated at Toyota |
| **7 Wastes (TIMWOOD)** | Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects |
| **Overproduction** | Worst waste — creates the others |
| **Value Stream Map (VSM)** | End-to-end visual of process |
| **Kanban** | Signal authorizing pull |
| **Takt time** | Customer demand rate (time per unit) |
| **Cycle time** | Actual production rate |
| **Standard work** | Documented best method |
| **SMED** | Single Minute Exchange of Die |
| **Jidoka** | Stop on defect; autonomation |
| **Andon** | Visual stop signal |
| **Poka-yoke** | Mistake-proofing |
| **Kaizen** | Continuous small improvement |
| **5S** | Sort, Set in order, Shine, Standardize, Sustain |
| **Six Sigma** | 3.4 DPMO target methodology |
| **DMAIC** | Define, Measure, Analyze, Improve, Control |
| **DMADV** | For new product/process design |
| **Cp / Cpk** | Process capability indices |
| **Control chart** | Time-series with UCL/LCL; SPC |
| **Special vs common cause** | Investigate special; don't tamper with common |
| **TQM** | Total Quality Management |
| **TPM** | Total Productive Maintenance |
| **OEE** | Availability × Performance × Quality |
| **PDCA / PDSA** | Deming cycle |
| **Belt levels** | Yellow, Green, Black, Master Black Belt, Champion |
| **7 Basic Quality Tools** | Fishbone, check sheet, control chart, histogram, Pareto, scatter, stratification |

---

## ✅ Module 8 Summary

You now know:
- 🗑️ The 7 wastes (TIMWOOD) and why overproduction is the worst
- 🌊 The 5 lean principles (Value → Value Stream → Flow → Pull → Perfection)
- 🃏 Kanban sizing and how to compute the number of cards
- ⏱️ Takt time formula and the takt ≠ cycle ≠ lead distinction
- 🛑 Jidoka, andon, and poka-yoke
- 🧹 5S (in order)
- 📊 DMAIC and the Six Sigma 3.4 DPMO target
- 📈 Control charts, special vs common cause, Cp/Cpk
- ⚙️ TPM and the OEE formula
- 🔁 PDCA / Deming cycle

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md` — has 7 calculation questions
3. 📋 Drill the 7 wastes from `Cheat-Sheet.md` until automatic
4. ➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)

---

## 📚 Further Reading (Optional)

- 📖 *The Toyota Way* — Jeffrey Liker (the canonical Western book on TPS)
- 📖 *Lean Thinking* — Womack & Jones (origin of the 5 lean principles)
- 📖 *The Goal* — Eliyahu Goldratt (TOC — pairs nicely with lean)
- 📖 *Out of the Crisis* — W. Edwards Deming (the TQM foundations)
- 📖 *The Machine That Changed the World* — Womack, Jones, Roos (the original lean book, 1990)
- 📖 ASCM Dictionary entries: 7 wastes, kanban, takt time, SMED, DMAIC, OEE, control chart, Cpk
- 📖 *A Study of the Toyota Production System* — Shigeo Shingo
