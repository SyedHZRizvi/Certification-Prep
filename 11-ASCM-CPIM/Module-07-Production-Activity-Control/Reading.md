# Module 7: Production Activity Control 🏃

> **Why this module matters:** PAC is the *execution* layer, where work orders meet the shop floor. CPIM tests dispatching rules, lead-time elements, and shop-floor scheduling in roughly 10–15% of exam questions. Once you can read a dispatch list and compute manufacturing lead time, you're solid.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 4: MPS / MRP (Material Requirements Planning)](../Module-04-Master-Production-Scheduling-MRP/Reading.md), PAC executes the planned releases from MRP
> - [Module 5: Capacity Planning](../Module-05-Capacity-Planning/Reading.md), I/O Control is the PAC-layer capacity execution; bottleneck reasoning shapes dispatching
> - Basic arithmetic with averages
>
> PAC's hardest exam content is the 5-element lead-time decomposition (Q-S-R-W-M) and the dispatching rules (SPT, EDD, CR). Drill these until automatic.

---

## 🍕 A Story: The Auto Shop That Stopped Fighting Fires

**Carlos's Garage** in Phoenix had 6 mechanics and a queue of 14 vehicles every morning. Carlos played whack-a-mole: whoever yelled loudest in the lobby got serviced next. Repeat customers left. Average repair time: 4.2 days. Customer satisfaction: low.

In 2023 his daughter joined the business. She introduced a simple rule: **shortest processing time (SPT) for routine repairs, earliest due date (EDD) for cars promised by a specific time, and FCFS only when the other two tied.** She wrote the dispatch list on a whiteboard each morning. Each mechanic checked the board.

Within a month average repair time dropped to 1.8 days. Lobby tantrums vanished. The garage's online reviews jumped a full star.

**That's PAC.** Decide the *sequence* of work using clear rules, communicate visually, execute, monitor, repeat.

---

## 🎯 What Is PAC?

**Production Activity Control (PAC)** is the shop-floor execution layer. Inputs: the planned orders from MRP. Outputs: work in progress, completed parts, and feedback to MRP.

PAC's job:

1. **Release** work orders (or kanban cards) to the floor
2. **Schedule** sequencing (which order goes first?)
3. **Dispatch**, issue daily/shift instructions to operators
4. **Monitor** progress (Input/Output Control, Module 5)
5. **Report** completions back to MRP and the financial system

---

## 📅 Manufacturing Lead Time, The 5 Elements

🔥 **MEMORIZE.** The 5 elements of manufacturing lead time are tested heavily.

| Element | Definition | Typical % of total LT |
|---------|-----------|------------------------|
| **Queue** | Time the job waits before a work center | 60–80% (!) |
| **Setup** | Time to prepare the work center (tooling, programming) | 5–10% |
| **Run** | Actual processing time | 10–20% |
| **Wait** | Time after processing, before move | 5% |
| **Move** | Transport between work centers | 5% |

🧠 **Q-S-R-W-M**, Queue, Setup, Run, Wait, Move.

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

### Worked Example, SPT vs FCFS

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

**SPT lowered average flow time and reduced tardiness**, typical result.

🎯 **Theorem you should know:** SPT *always* minimizes mean flow time on a single work center (proven by Smith, Wayne E., "Various Optimizers for Single-Stage Production," *Naval Research Logistics Quarterly* 3(1–2), 1956, pp. 59–66). This is one of the few results in scheduling theory with a clean closed-form proof.

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

**SMED (Single Minute Exchange of Die)**, Shigeo Shingo's setup-reduction methodology. Goal: setup time < 10 minutes.

Two phases:

1. **External setup**, work done while machine still runs the prior job (prep next tooling)
2. **Internal setup**, work that requires the machine to stop

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

## 📊 Case Study, Stitch Fix Algorithmic Merchandising (2014–2024)

**Situation.** Stitch Fix launched in 2011 as a personal-styling subscription: customers complete a style profile, the company sends a curated box of clothing every month, customer keeps what fits and returns the rest. IPO (Initial Public Offering)'d 2017 at $1.6B market cap. From inception, Stitch Fix's competitive moat was *algorithmic merchandising*: combining customer-supplied data with implicit preferences (purchase history, return reasons, styling notes) to predict which SKUs would convert for which customers. By 2017 the company had ~80 data scientists and a vertically integrated inventory model that combined elements of MTS (basics, denim) with ATO-like assortment customization (the curated box). This created a PAC problem unlike a traditional retailer: instead of releasing work orders to a factory floor, Stitch Fix released *picking-and-packing orders* to its distribution centers (Indianapolis, Dallas, Phoenix, Pittsburgh, Atlanta), with each box containing 5 individually-selected items.

**Decision.** Stitch Fix built a vertically integrated **AI-augmented merchandising and operations stack**:

- **Demand forecasting** at the customer × style × size × color granularity (well below SKU (Stock Keeping Unit)), using ML models retrained nightly.
- **Inventory positioning** that placed deep SKU coverage in the highest-volume DCs and tail SKUs centralized, a hybrid push-pull architecture.
- **Box-construction algorithm** that selected the 5 items for each customer given (a) the customer's profile and history, (b) DC inventory positions, (c) per-customer styling-overlay by human stylist, (d) cost-to-serve constraints (return rate penalties).
- **PAC at the DC** treated by classical dispatching rules adapted for batch-pick: similar to SPT for one-customer boxes, EDD for time-sensitive boxes, with a custom *constraint-style* rule for boxes whose SKU coverage was challenged by inventory positions.
- **Stylist task allocation**: ~5,000 part-time stylists each handle 25–40 boxes/day; the task-allocation algorithm functioned as a meta-dispatching system at the human-resource layer.

**Outcome.** Stitch Fix peaked at $2.1B revenue (FY 2021, post-COVID DTC (Direct-to-Consumer) surge) with ~4M active customers. The model's return rate (industry secret, but reported as 35–45%) was the operational headwind, every "no" item is a reverse-logistics cost. From 2022 onward the company struggled as the subscription-DTC category cooled and competition from Amazon Personal Shopper plus the algorithmic-shopping features on Shein/Temu eroded the moat. FY 2024 revenue dropped to ~$1.0B (Stitch Fix Q4 FY 2024 earnings, Oct 2024) and the company has taken multiple restructuring charges. By 2024, Stitch Fix was canonical case material in MIT Sloan Management Review pieces on "AI-augmented retail operations" and the Stanford GSB / Wharton OMP curriculum on data-driven inventory management.

**Lesson for the exam / for practitioners.** Stitch Fix demonstrates several PAC + inventory + scheduling extensions of the classical CPIM framework:

1. **Dispatching at the order-construction layer**, not the work-center layer. The "work center" is a stylist + DC pick crew, and the "work order" is a customer box. The CPIM canonical rules (SPT, EDD, CR) still apply but at a different granularity.
2. **Forecast aggregation below SKU** (customer × SKU) violates the classical "more accurate at higher aggregation" rule, Stitch Fix made it work by combining heavy ML with the human-stylist override layer.
3. **Reverse logistics as a PAC consideration.** Return rate is a planning input, not a passive outcome.
4. **The limits of algorithmic merchandising at scale.** When the data signal (customer preferences) is no longer differentiated from competitors (who now have similar data), the operations advantage erodes.

The CPIM exam-takeaway: the **classical PAC framework** (release / schedule / dispatch / monitor / report) is *generalizable*, it applies to factory floors, DC picking, stylist task allocation, and even AI-coordinated systems. The principles don't change; the work-center definition does.

**Discussion (Socratic).**
- Q1: A traditional retailer with 8,000 SKUs and 50 stores argues that Stitch Fix's per-customer forecasting model is overkill for its business, "we don't need to know what each customer wants; we just need stores to have the right SKUs." Build the strongest case that the retailer is right *and* that they are missing the future. At what scale (revenue, SKU count, customer concentration) does the calculation flip?
- Q2: Stitch Fix's stylist-task-allocation is a meta-dispatching problem with humans as the work centers. Apply the SPT/EDD/CR vocabulary to it, what's the equivalent of "processing time," "due date," and "critical ratio" for a stylist's box assignment? What constraints exist for a human work center that don't apply to a machine?
- Q3: Stitch Fix's return rate (35–45%) would be catastrophic in a manufacturing context, it would mean 35–45% rework. Why is it tolerated as a structural cost in subscription-DTC, and what's the right operations response: accept it, reduce it, or change the business model?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "FCFS is the fairest and therefore the best rule" | FCFS is fair but average flow time is usually worst |
| "SPT is always optimal" | SPT optimizes *mean flow time on one machine*, not necessarily multi-machine or due-date metrics |
| "Reducing run time most reduces lead time" | Queue time is 60–80% of lead time, attack that first |
| "Gantt charts optimize schedules" | They *visualize* schedules; they don't optimize |
| "Setup is fixed by physics" | SMED proves much of setup is fixable; convert internal to external |
| "Dispatching is a software-only task" | The rule (SPT, EDD, CR) is a *policy* decision, software just enforces |

---

## 🎯 Exam Traps Specific to Module 7

1. **5 elements of LT**, Queue, Setup, Run, Wait, Move. Many candidates forget Wait (or confuse Wait with Queue: Wait is *after* processing; Queue is *before*).
2. **CR < 1 = behind** schedule → process first. CR > 1 = ahead → can wait.
3. **SPT optimizes mean flow time** *on a single work center*. Multi-machine problems use different heuristics (Johnson's rule, etc.).
4. **EDD minimizes maximum tardiness** but not necessarily mean flow time.
5. **Cells reduce setup time** because parts are similar, not because the machines are newer.
6. **Push vs pull**, pull is reactive (downstream signal triggers production). Push is proactive (schedule pushes work forward).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **PAC** | Production Activity Control, execution layer |
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
| **GT** | Group Technology, classify parts by feature |
| **SMED** | Single Minute Exchange of Die, setup reduction |
| **Push** | Schedule-driven release |
| **Pull** | Demand-signal-driven release |
| **Gantt chart** | Visual schedule of resources over time |

---

## ✅ Module 7 Summary

You now know:

- 🏃 What PAC does, release, schedule, dispatch, monitor, report
- 📅 The 5 elements of manufacturing lead time and that queue dominates
- 🚦 The 6 dispatching rules (FCFS, SPT, EDD, LPT, CR, slack/op)
- 📋 How to read a dispatch list
- 📊 SPT vs FCFS performance, SPT wins mean flow time
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

> **Where this leads.**
> - Inside this course: Module 8 (Lean), PAC's "pull" idea formalizes into kanban; SMED previewed here is detailed there.
> - Cross-course: `10-ASCM-CSCP` Module 9 generalizes execution to multi-plant networks; `12-ASCM-CLTD` Module 8 applies PAC concepts to warehouse pick/pack/ship.
> - Practice: Practice Exam 2 has 10–12 PAC questions; Final Mock Exam includes 5+ calculation questions on SPT, EDD, CR, and the 5 lead-time elements.

---

## 💬 Discussion, Socratic prompts

1. **SPT's hidden cost.** Smith (1956) proved SPT minimizes mean flow time on a single machine. But SPT can leave long jobs perpetually delayed in the queue ("starvation"). At what point should you switch from SPT to a fairness-blended rule (FCFS or EDD)? Defend with a concrete heuristic.
2. **Queue dominance at the bottleneck.** PAC dogma says queue time is 60–80% of lead time. At a TOC-managed plant, the bottleneck *deliberately* maintains a queue (to avoid starvation). Reconcile the two, when is queue at the bottleneck *correct* and when is it *waste*?
3. **AI-augmented dispatching.** Modern MES platforms (Siemens Opcenter, GE Proficy, AVEVA System Platform) include AI-driven dispatching that can outperform SPT/EDD/CR for multi-machine problems. Argue that this replaces the classical rules and argue that the classical rules remain pedagogically essential. Where does each position win?
4. **Pull vs push at the cell level.** Many factories run MRP (push) for materials planning and kanban (pull) at the cell. The exam tests this as a hybrid; in practice it's a culture clash between planning and execution organizations. What's the right governance structure to make the hybrid work?
5. **The Stitch Fix question.** Stitch Fix used the PAC framework outside a factory. Pick another non-factory operation (hospital OR scheduling, food-delivery courier dispatching, call-center routing) and translate the SPT/EDD/CR vocabulary onto it. Where does the analogy break down?

---

## 📚 Further Reading (Optional)

- 📖 *Manufacturing Planning and Control for Supply Chain Management*, Vollmann, Berry, Whybark & Jacobs, 6th ed. (McGraw-Hill, 2011), Chapter 7.
- 📖 *Factory Physics, 3rd ed.* Hopp, Wallace J. & Spearman, Mark L. (Waveland Press, 2008) the math of WIP, throughput, and lead time.
- 📖 *A Revolution in Manufacturing: The SMED System* Shingo, Shigeo (Productivity Press, 1985) origin of single-minute exchange of die.
- 📖 *Toyota Production System: Beyond Large-Scale Production* Ohno, Taiichi (Productivity Press English ed. 1988; Japanese original *Toyota seisan hōshiki*, 1978) foundational; pull / kanban, jidoka, the 7 wastes.
- 📖 ASCM Dictionary, 16th edition (2022), entries for PAC, dispatching, critical ratio, queue time, manufacturing lead time, cellular layout, group technology.
- 📖 *The Goal* Goldratt, Eliyahu M. (North River Press, 1984) TOC scheduling applies at PAC.
- 📰 *Various Optimizers for Single-Stage Production* Smith, Wayne E., *Naval Research Logistics Quarterly* 3(1–2), 1956 the SPT theorem.
- 📰 Stitch Fix S-1 (IPO filing) 2017 and 10-K filings 2017–2024 (SEC EDGAR); MIT Sloan Management Review piece on Stitch Fix's stylist-AI hybrid (2019).
