# Module 7: Production Activity Control 🏃

> **Why this module matters:** PAC is the *execution* layer — where work orders meet the shop floor. CPIM tests dispatching rules, lead-time elements, and shop-floor scheduling in roughly 10–15% of exam questions. Once you can read a dispatch list and compute manufacturing lead time, you're solid.

---

## 🍕 A Story: The Auto Shop That Stopped Fighting Fires

**Carlos's Garage** in Phoenix had 6 mechanics and a queue of 14 vehicles every morning. Carlos played whack-a-mole: whoever yelled loudest in the lobby got serviced next. Repeat customers left. Average repair time: 4.2 days. Customer satisfaction: low.

In 2023 his daughter joined the business. She introduced a simple rule: **shortest processing time (SPT) for routine repairs, earliest due date (EDD) for cars promised by a specific time, and FCFS only when the other two tied.** She wrote the dispatch list on a whiteboard each morning. Each mechanic checked the board.

Within a month average repair time dropped to 1.8 days. Lobby tantrums vanished. The garage's online reviews jumped a full star.

**That's PAC.** Decide the *sequence* of work using clear rules, communicate visually, execute, monitor — repeat.

---

## 🎯 What Is PAC?

**Production Activity Control (PAC)** is the shop-floor execution layer. Inputs: the planned orders from MRP. Outputs: work in progress, completed parts, and feedback to MRP.

PAC's job:
1. **Release** work orders (or kanban cards) to the floor
2. **Schedule** sequencing (which order goes first?)
3. **Dispatch** — issue daily/shift instructions to operators
4. **Monitor** progress (Input/Output Control, Module 5)
5. **Report** completions back to MRP and the financial system

---

## 📅 Manufacturing Lead Time — The 5 Elements

🔥 **MEMORIZE.** The 5 elements of manufacturing lead time are tested heavily.

| Element | Definition | Typical % of total LT |
|---------|-----------|------------------------|
| **Queue** | Time the job waits before a work center | 60–80% (!) |
| **Setup** | Time to prepare the work center (tooling, programming) | 5–10% |
| **Run** | Actual processing time | 10–20% |
| **Wait** | Time after processing, before move | 5% |
| **Move** | Transport between work centers | 5% |

🧠 **Q-S-R-W-M** — Queue, Setup, Run, Wait, Move.

🎯 **Critical CPIM insight:** Queue time is typically the *largest* component. Reducing queue (by reducing WIP, smaller batches, or better dispatching) cuts lead time *more than* reducing run time.

### Worked example

A job has setup = 30 min, run = 0.5 min/piece × 200 pieces = 100 min, wait = 60 min, move = 15 min, and historical average queue = 480 min.

**Total manufacturing lead time = 480 + 30 + 100 + 60 + 15 = 685 minutes ≈ 11.4 hours.**

Note: queue alone = 70% of total. To cut LT in half, attack queue.

---

## 🚦 Priority Sequencing (Dispatching) Rules

When multiple jobs are waiting at a work center, which goes first?

| Rule | Description | Optimizes |
|------|-------------|-----------|
| **FCFS** (First Come, First Served) | Process in arrival order | Fairness |
| **SPT** (Shortest Processing Time) | Process the shortest job next | Avg flow time, WIP |
| **EDD** (Earliest Due Date) | Process job with earliest due date | On-time delivery |
| **LPT** (Longest Processing Time) | Process longest job first | Bottleneck cases |
| **Critical Ratio (CR)** | Process job with lowest CR first | Balance time + work remaining |
| **Slack per operation** | Process by least slack/op | Multi-step urgency |

### Critical Ratio (CR)

```
CR = (Due Date − Today's Date) / (Work Days Remaining)
```

- **CR > 1** = ahead of schedule
- **CR = 1** = on schedule
- **CR < 1** = behind schedule → process first

**Example.** Due in 8 days; 10 days of work remaining. CR = 8 / 10 = 0.8 → behind. Process first.

---

## 📋 Dispatch List

A printed (or screen) list showing each work center's queue, in priority order, given the dispatching rule.

Sample dispatch list for Work Center 30 on Monday morning:

| Priority | Order # | Item | Qty | Due Date | Setup | Run | CR |
|----------|---------|------|-----|----------|-------|-----|-----|
| 1 | WO-441 | Pedal | 1,200 | Tue | 30 min | 60 min | 0.7 |
| 2 | WO-462 | Frame | 100 | Wed | 60 min | 240 min | 0.9 |
| 3 | WO-473 | Saddle | 500 | Thu | 15 min | 90 min | 1.1 |
| 4 | WO-501 | Chain | 800 | Fri | 20 min | 120 min | 1.4 |

The operator works the list top-down.

---

## 📊 Sequencing Performance Measures

| Metric | Definition |
|--------|-----------|
| **Flow time** | Time from job arrival to completion |
| **Average flow time** | Mean across all jobs |
| **Makespan** | Time from start of first job to completion of last job |
| **Tardiness** | Days late = max(0, completion − due date) |
| **Number tardy** | Count of jobs finishing late |
| **Utilization** | Σ processing time / makespan |

### Worked Example — SPT vs FCFS

Three jobs at one work center, arriving in this order:

| Job | Processing Time (days) | Due Date |
|-----|------------------------|----------|
| A | 6 | 7 |
| B | 2 | 6 |
| C | 4 | 8 |

**FCFS order (A, B, C):**
- A finishes day 6, flow time = 6
- B finishes day 8, flow time = 8
- C finishes day 12, flow time = 12
- Average flow time = (6 + 8 + 12) / 3 = **8.67 days**
- Tardiness: A=0, B=2, C=4 → total tardiness = 6

**SPT order (B, A, C):**
- B finishes day 2, flow time = 2
- A finishes day 8, flow time = 8
- C finishes day 12, flow time = 12
- Average flow time = (2 + 8 + 12) / 3 = **7.33 days**
- Tardiness: B=0, A=1, C=4 → total = 5

**SPT lowered average flow time and reduced tardiness** — typical result.

🎯 **Theorem you should know:** SPT *always* minimizes mean flow time on a single work center (proven by Smith, 1956).

---

## 📦 Gantt Charts

Visual bar chart: each row = a resource (machine or person), bars show what runs when. Used for scheduling visualization, not optimization.

```
Time:        0    2    4    6    8    10   12
Machine 1: |--A--|--C--|------------|
Machine 2: |B|---------|--D----------|
```

---

## 🏗️ Production Layouts (Quick Recap)

| Layout | Use Case | PAC Style |
|--------|----------|-----------|
| **Job Shop** (process layout) | High variety, low volume | Complex dispatching; routing varies per job |
| **Cellular** | Family of similar parts | Simple sequencing within cell |
| **Repetitive / Line** | High volume, low variety | Takt time pacing; balance the line |
| **Continuous** | Single product, very high volume | Process control; flow rate maintained |
| **Project** | One-off (e.g., aircraft) | Critical path / network scheduling |

---

## 🧱 Manufacturing Cells & Group Technology

A **manufacturing cell** groups dissimilar machines that together produce a *family* of similar parts. Group Technology (GT) classifies parts by shape/feature, then dedicates a cell to that family.

Benefits:
- Reduced material handling
- Reduced setup time (similar parts, similar setups)
- Reduced queue time
- Easier team ownership and quality feedback

Cells are central to lean manufacturing (Module 8).

---

## 🔧 Setup Reduction (SMED Preview)

**SMED (Single Minute Exchange of Die)** — Shigeo Shingo's setup-reduction methodology. Goal: setup time < 10 minutes.

Two phases:
1. **External setup** — work done while machine still runs the prior job (prep next tooling)
2. **Internal setup** — work that requires the machine to stop

Convert as much internal to external as possible → setup time plummets → lot sizes can shrink → less inventory.

Deep dive in Module 8.

---

## 🔁 Pull vs Push (Foundation for Lean)

| | Push (MRP-style) | Pull (Lean/Kanban) |
|---|------------------|---------------------|
| Trigger | Forecast / schedule | Actual downstream demand |
| WIP | Often high | Limited by kanban count |
| Inventory | Often high | Low |
| Best for | Variable lead times, complex BOMs | Stable demand, repetitive flow |

Many real plants are **hybrid**: MRP for materials planning, kanban for component replenishment at the cells.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "FCFS is the fairest and therefore the best rule" | FCFS is fair but average flow time is usually worst |
| "SPT is always optimal" | SPT optimizes *mean flow time on one machine* — not necessarily multi-machine or due-date metrics |
| "Reducing run time most reduces lead time" | Queue time is 60–80% of lead time — attack that first |
| "Gantt charts optimize schedules" | They *visualize* schedules; they don't optimize |
| "Setup is fixed by physics" | SMED proves much of setup is fixable; convert internal to external |
| "Dispatching is a software-only task" | The rule (SPT, EDD, CR) is a *policy* decision — software just enforces |

---

## 🎯 Exam Traps Specific to Module 7

1. **5 elements of LT** — Queue, Setup, Run, Wait, Move. Many candidates forget Wait (or confuse Wait with Queue: Wait is *after* processing; Queue is *before*).
2. **CR < 1 = behind** schedule → process first. CR > 1 = ahead → can wait.
3. **SPT optimizes mean flow time** *on a single work center*. Multi-machine problems use different heuristics (Johnson's rule, etc.).
4. **EDD minimizes maximum tardiness** but not necessarily mean flow time.
5. **Cells reduce setup time** because parts are similar — not because the machines are newer.
6. **Push vs pull** — pull is reactive (downstream signal triggers production). Push is proactive (schedule pushes work forward).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **PAC** | Production Activity Control — execution layer |
| **Work order** | Authorization to make a specific quantity |
| **Dispatch list** | Prioritized queue per work center |
| **Manufacturing LT** | Queue + Setup + Run + Wait + Move |
| **Queue time** | Wait BEFORE the work center |
| **Wait time** | Wait AFTER processing, before move |
| **FCFS** | First come, first served |
| **SPT** | Shortest processing time |
| **EDD** | Earliest due date |
| **LPT** | Longest processing time |
| **CR** | Critical Ratio = (due − today) / work remaining |
| **Flow time** | Arrival → completion |
| **Makespan** | First start → last finish |
| **Tardiness** | Days late beyond due date |
| **Cell** | Group of machines producing a part family |
| **GT** | Group Technology — classify parts by feature |
| **SMED** | Single Minute Exchange of Die — setup reduction |
| **Push** | Schedule-driven release |
| **Pull** | Demand-signal-driven release |
| **Gantt chart** | Visual schedule of resources over time |

---

## ✅ Module 7 Summary

You now know:
- 🏃 What PAC does — release, schedule, dispatch, monitor, report
- 📅 The 5 elements of manufacturing lead time and that queue dominates
- 🚦 The 6 dispatching rules (FCFS, SPT, EDD, LPT, CR, slack/op)
- 📋 How to read a dispatch list
- 📊 SPT vs FCFS performance — SPT wins mean flow time
- 📦 Gantt charts as visualization
- 🏗️ Layout types and their PAC implications
- 🧱 Manufacturing cells and Group Technology
- 🔁 Push vs Pull execution

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Memorize Q-S-R-W-M and CR formula
4. ➡️ Move to [Module 8: Quality, Lean & CI](../Module-08-Quality-Lean-CI/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Manufacturing Planning and Control* — Jacobs et al., Chapter 7
- 📖 *Factory Physics* — Hopp & Spearman (the math of WIP, throughput, LT)
- 📖 *A Revolution in Manufacturing: The SMED System* — Shigeo Shingo
- 📖 ASCM Dictionary entries: PAC, dispatching, critical ratio, queue time, manufacturing lead time, cellular layout, group technology
- 📖 *The Goal* — Goldratt (TOC scheduling continues to apply at PAC layer)
