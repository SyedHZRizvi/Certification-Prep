# Module 8: Quality, Lean & Continuous Improvement 🔧

> **Why this module matters:** Lean and quality concepts are ~15% of the CPIM exam. The 7 wastes, kanban math, takt time, DMAIC, control charts — these are *guaranteed* to appear. Many candidates skim this module; don't.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 5: Capacity Planning](../Module-05-Capacity-Planning/Reading.md) — TOC's "constraint" thinking pairs with Lean's "waste" thinking
> - [Module 7: Production Activity Control](../Module-07-Production-Activity-Control/Reading.md) — pull-vs-push, SMED, manufacturing-cell concepts previewed here
> - Basic statistics (mean, standard deviation) for control-chart sections
>
> The case-study volume in this module is heaviest — most named concepts (kanban, jidoka, poka-yoke, kaizen, takt time) come directly from a single source (Toyota). The exam expects you to know the *vocabulary*, the *core formulas* (kanban sizing, takt, OEE, Cpk), and the *history* (Ohno, Deming, Goldratt, Womack/Jones).

---

## 🍕 A Story: The Auto Plant That Beat Detroit

In 1973 a Toyota production manager named **Taiichi Ohno** walked a Detroit Ford plant. He counted: stacks of WIP between every station, supervisors yelling at workers, a defect rework area larger than the assembly line, and 4 cars finished per worker per shift.

Back in Japan, he was producing **14 cars per worker per shift** with one-tenth the inventory.

The difference wasn't workers. It wasn't machines (Ford had newer ones). It wasn't software. It was **a system Ohno had been building for 20 years to eliminate waste, level production, and make problems visible the moment they happened.** He called it the Toyota Production System (TPS). The West later called it **Lean**.

By 2010, Toyota was producing 9 million cars a year, made famous a vocabulary that included *kaizen*, *kanban*, *poka-yoke*, *jidoka*, and *takt time*, and re-shaped global manufacturing.

This module is what CPIM expects you to know about that system.

---

## 🗑️ The 7 Wastes of Lean (TIMWOOD / DOWNTIME)

> **Citation.** The 7 wastes (Japanese: *muda*) were codified by **Taiichi Ohno** at Toyota in *Toyota seisan hōshiki* (1978; English: *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988). Ohno developed the framework through the 1950s–1970s at Toyota; the English translation of his book is the canonical Western primary source. The 8th waste ("unused human talent / underutilized intellect") was added by **Jeffrey Liker** in *The Toyota Way* (McGraw-Hill, 2004) and is now standard in most modern lean curricula and in the ASCM Dictionary (16th ed., 2022).

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

> **Citation.** Womack, James P. & Jones, Daniel T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation* (Simon & Schuster, 1996; 2nd ed. 2003). The companion foundational work is Womack, Jones & Roos, *The Machine That Changed the World: The Story of Lean Production* (Rawson Associates / Macmillan, 1990) — the original MIT-IMVP global automotive study that named "lean" as a movement distinct from Toyota's internal terminology.

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

> **Citation.** Six Sigma originated at **Motorola** in 1986 under **Bill Smith** (engineer) and **Mikel Harry** (director, Operations and Systems Research), formally launched company-wide in 1987. Motorola won the inaugural Malcolm Baldrige National Quality Award in 1988 substantially on the strength of Six Sigma adoption. The methodology was popularized by **General Electric** under **Jack Welch** starting 1995. The DMAIC framework was formalized in Pyzdek, Thomas, *The Six Sigma Handbook* (3rd ed. McGraw-Hill, 2010) and George, Michael L., *Lean Six Sigma: Combining Six Sigma Quality with Lean Production Speed* (McGraw-Hill, 2002). The TQM antecedents — Deming, Juran, Crosby, Ishikawa — preceded Six Sigma by decades; see "TQM" section below for those citations.

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

> **Citations.** TQM has four named founders, each with a primary text:
> - **W. Edwards Deming**, *Out of the Crisis* (MIT CAES, 1982; reissued MIT Press, 2000). The 14 Points and the Plan-Do-Study-Act cycle (Deming preferred PDSA over PDCA).
> - **Joseph M. Juran**, *Quality Control Handbook* (McGraw-Hill, 1951; current ed. *Juran's Quality Handbook*, 7th ed. 2017). The Juran Trilogy: planning, control, improvement.
> - **Philip B. Crosby**, *Quality is Free* (McGraw-Hill, 1979). "Zero defects" and "cost of quality."
> - **Kaoru Ishikawa**, *What Is Total Quality Control? The Japanese Way* (Prentice-Hall, 1985). The 7 basic quality tools (below) and the fishbone diagram.
>
> ASCM Dictionary (16th ed., 2022) treats TQM, the 7 basic tools, and PDCA/PDSA as core entries.

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

## 📊 Case Study — Toyota Production System (1948–onwards): Codified by Ohno, Studied Globally

**Situation.** In the post-war reconstruction era (1948 onward), Toyota Motor Corporation faced existential constraints: chronic capital scarcity, fragmented domestic demand across many small vehicle classes, no access to Detroit-scale economies. Mass production as practiced by Ford and GM — long runs of identical vehicles, large WIP buffers, large finished-goods inventory — was not financially survivable for Toyota. The company needed to produce small batches of varied vehicles at competitive unit cost, with capital efficiency far higher than the American competition.

**Decision.** Over roughly three decades (1948 through the late 1970s) **Taiichi Ohno**, an engineer at Toyota, built what came to be called the **Toyota Production System (TPS)**. The journey:
- **1949–1953**: Inspired by American supermarkets observed by Toyoda Eiji on a visit to Detroit (customer pulls product from shelves, supplier replenishes only what's sold), Ohno developed the **kanban** signal as a manual pull-replenishment mechanism.
- **1950s**: Implemented **jidoka** (autonomation — machines stop on defect) and **andon** (visual signal). Inspired by the auto-stop mechanism on Toyoda Loom Works' 1924 automatic looms (Toyota's founding company).
- **1960s**: **Shigeo Shingo**, a Toyota consultant, formalized **SMED** (Single Minute Exchange of Die) — reducing press setups from hours to single-digit minutes, enabling smaller economical batch sizes.
- **1970s**: TPS reached operational maturity. Toyota was producing varied vehicles at remarkably low WIP and inventory levels, with quality outcomes (defects per vehicle, customer-reported issues) systematically better than competitors.
- **1973 oil shock**: While American manufacturers struggled with the recessionary period, Toyota's flexible TPS allowed rapid adaptation. Public attention to Toyota's performance accelerated. Honda followed similar principles independently.

**Outcome and global influence.** The 1990 MIT-IMVP study (Womack, Jones & Roos, *The Machine That Changed the World*, 1990) made the global automotive industry's TPS-vs-mass-production gap unmistakable. Japanese assembly plants required **half the hours per vehicle** of American plants with **half the inventory** and **a third of the defect rate**. The MIT study coined "Lean Production" as the Western label for the principles. From that point forward:
- Toyota's global market share grew from ~5% (1980) to ~12% (2000) to ~17% (2024) — overtaking GM in 2008 as the world's largest automaker by volume. As of 2024, Toyota is again #1 (10.8M vehicles vs Volkswagen's ~9.0M, GM's ~6.0M).
- TPS was adopted (with varying fidelity) across global manufacturing: GE's lean transformation under Welch (1995+), Boeing's "Lean Manufacturing" program (1995+), Ford's revival of Henry Ford-era flow concepts (2000s), and across non-manufacturing sectors (lean healthcare at Virginia Mason, lean software at IMVU/Toyota Connected, lean government at the Veterans Health Administration).
- Toyota maintained the discipline through the 2009–2011 unintended-acceleration recall crisis and the 2020–2022 chip shortage, with notably better outcomes than competitors in both cases.

**Lesson for the exam / for practitioners.** TPS demonstrates that **a coherent operations system** (alignment of principles, tools, culture, leadership behavior, supplier relationships, employee development) compounds in ways that copying individual tools cannot replicate. Western firms have spent four decades trying to "be lean"; few have matched Toyota's results because few have invested the time horizon and leadership consistency that built TPS. The CPIM exam tests the *tools* (kanban, jidoka, poka-yoke, SMED, 5S, kaizen, takt) and the *principles* (Value, Value Stream, Flow, Pull, Perfection). The real-world distinction — between adopting a tool and building a system — is what separates Lean adopters from Lean masters.

The CPIM exam-takeaway: when an exam question describes a company that "implemented kanban" but still has the bullwhip, overproduction, and quality problems Lean is supposed to solve, the right answer is usually **system integrity**, not "implement more tools." A kanban without jidoka, andon, kaizen culture, supplier integration, and management standard-work is just a card on a board.

**Discussion (Socratic).**
- Q1: Why has Toyota's TPS been copied for 40+ years and yet so few Western automakers have caught up on the underlying metrics (defects/vehicle, hours/vehicle, inventory turns)? Build the strongest argument that this is *cultural* (Japanese vs Western management philosophy, employment models) AND that it's *structural* (capital allocation, supplier relationship horizon). Which would you defend, and what would you change first at a Western manufacturer trying to actually close the gap?
- Q2: Industry 4.0 / smart manufacturing (sensors, ML-driven quality detection, digital twins) emerged in the 2010s and accelerated 2020–2026. Is Industry 4.0 *replacing* TPS, *augmenting* it, or *building on* its principles? Cite at least one specific Industry 4.0 capability (e.g., MES-integrated anomaly detection, predictive maintenance) and map it to a TPS principle (jidoka, kaizen, etc.).
- Q3: Lean services / Lean healthcare / Lean software adapted TPS to non-manufacturing contexts. The Virginia Mason Health System (Seattle) is the canonical Lean healthcare reference; Toyota Kata is the canonical Lean leadership reference. Pick one non-manufacturing application of Lean and identify the *one* principle that travels well AND the *one* principle that travels poorly. Why does the analogy break?

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

> **Where this leads.**
> - Inside this course: Module 8 closes the CPIM canon. The capstone project at the course root brings every module together (S&OP → MPS → MRP → Capacity → Inventory → PAC → Lean).
> - Cross-course: `10-ASCM-CSCP` Module 10 extends Lean to the multi-tier supply chain (Lean Six Sigma at network scale); `12-ASCM-CLTD` Module 9 applies Lean to warehouse and transportation operations.
> - Practice: Practice Exam 2 has 18+ questions on Lean / Six Sigma / TPM; Final Mock Exam has 22+. This is one of the highest-yield modules — drill the formulas (kanban, takt, OEE, Cpk) and the case-named concepts (TIMWOOD/DOWNTIME, 5S, DMAIC).

---

## 💬 Discussion — Socratic prompts

1. **The 8th waste's legitimacy.** Liker (2004) added "unused human talent" as the 8th waste. Argue that this is a *genuine extension* of Ohno's framework AND that it's a *Western dilution* of a focused operational concept. Which would you defend, and what's the consequence for how you teach Lean to a new operations team?
2. **Industry 4.0 vs TPS — pick a side.** With digital twins, IoT-enabled OEE tracking, ML-driven SPC, and AI-augmented kaizen ("auto-detect waste from sensor data"), is the human operator still the heart of Lean? Defend either position with a current technology example.
3. **Six Sigma vs Lean — which wins where?** A 1,000-person CNC machine shop with quality issues and high variability would benefit from Six Sigma's statistical discipline; a 200-person assembly cell with quality OK but high WIP would benefit from Lean's flow focus. Construct a sharper rule: at what symptom mix does each win, and where is "Lean Six Sigma" (the combination) actually right?
4. **Toyota's culture transferability.** Toyota Kata (Rother, 2009) argues the *real* Toyota secret is a daily improvement-coaching practice, not the tools. If Kata is right, can Lean ever be truly transplanted to a Western firm with quarterly earnings pressure, high executive turnover, and union/management distrust? Defend either yes or no.
5. **Lean in 2026's reshoring era.** A US manufacturer reshoring from China to a Mexican / US-Southern plant has the chance to build a TPS-style operation greenfield. Walk through the 5 Lean principles in *implementation order* — which would you tackle first, and why? Defend against the "do all five at once" alternative.

---

## 📚 Further Reading (Optional)

- 📖 *The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer, 2nd ed.* — Liker, Jeffrey K. (McGraw-Hill, 2021) — the canonical Western book on TPS.
- 📖 *Lean Thinking: Banish Waste and Create Wealth in Your Corporation* — Womack, James P. & Jones, Daniel T., 2nd ed. (Simon & Schuster, 2003) — origin of the 5 lean principles.
- 📖 *The Machine That Changed the World: The Story of Lean Production* — Womack, James P., Jones, Daniel T. & Roos, Daniel (Free Press, 1990) — the original MIT-IMVP study.
- 📖 *Toyota Production System: Beyond Large-Scale Production* — Ohno, Taiichi (Productivity Press, 1988; Japanese original 1978) — primary source on TPS by its principal architect.
- 📖 *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results* — Rother, Mike (McGraw-Hill, 2009) — the leadership-and-coaching layer of Lean.
- 📖 *The Goal* — Goldratt, Eliyahu M. (North River Press, 1984) — TOC pairs naturally with Lean.
- 📖 *Out of the Crisis* — Deming, W. Edwards (MIT Press reissue 2000; original 1982) — the TQM foundations.
- 📖 *Lean Six Sigma: Combining Six Sigma Quality with Lean Production Speed* — George, Michael L. (McGraw-Hill, 2002).
- 📖 *A Revolution in Manufacturing: The SMED System* — Shingo, Shigeo (Productivity Press, 1985).
- 📖 ASCM Dictionary, 16th edition (2022) — entries for 7 wastes, kanban, takt time, SMED, DMAIC, OEE, control chart, Cpk, jidoka, andon, poka-yoke, kaizen, 5S.
- 📰 Lean Enterprise Institute (lean.org) — current practitioner content; the *Lean Post* and *Lean Solutions* periodicals.
