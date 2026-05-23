# PMP Module 6: Earned Value Management (EVM) 📊

> **Why this module matters:** EVM is the "math part" of PMP. ~5-10 questions. **It's not hard once you know the formulas.** Most fail because they panic. Don't panic — drill the 8 formulas below until you dream them.

---

## 🎯 Why EVM Exists

Imagine you're 6 months into a 12-month project. You've spent 60% of your budget. Are you on track?

**Looking at "% time" or "% spent" alone is misleading.** What if you've spent 60% of budget but only completed 40% of the work?

EVM answers: **"How is the project actually performing in terms of cost AND schedule?"**

It compares:
- 📅 What you **planned** to do (PV)
- ✅ What you've **earned** for completing (EV)
- 💰 What you've **actually spent** (AC)

---

## 🧱 The 3 Foundational Values

Memorize these first. Everything else builds on them:

### PV — Planned Value
> "What was *planned* to be completed (in $) by this point?"

Also called BCWS (Budgeted Cost of Work Scheduled).

**Example:** Project budget $100K, 10 months. After 6 months, planned to be 60% done → PV = $60K.

### EV — Earned Value
> "What's the *value* of the work *actually completed* (in $)?"

Also called BCWP (Budgeted Cost of Work Performed).

**Example:** After 6 months, you've actually completed 40% of project scope → EV = $40K.

### AC — Actual Cost
> "How much money have you *actually spent*?"

Also called ACWP (Actual Cost of Work Performed).

**Example:** After 6 months, you've spent $50K → AC = $50K.

---

## 🎯 The 8 Formulas (MEMORIZE!)

### Variance Formulas (CV, SV)
**Tell us how off-plan we are.** Positive = good, Negative = bad.

#### 1. CV (Cost Variance) = EV - AC
- **Positive:** Under budget ✅
- **Zero:** On budget
- **Negative:** Over budget ❌

#### 2. SV (Schedule Variance) = EV - PV
- **Positive:** Ahead of schedule ✅
- **Zero:** On schedule
- **Negative:** Behind schedule ❌

### Performance Index Formulas (CPI, SPI)
**Tell us efficiency.** >1 = good, <1 = bad.

#### 3. CPI (Cost Performance Index) = EV / AC
- **>1:** Cost-efficient (under budget) ✅
- **=1:** On budget
- **<1:** Cost overrun ❌

#### 4. SPI (Schedule Performance Index) = EV / PV
- **>1:** Ahead of schedule ✅
- **=1:** On schedule
- **<1:** Behind schedule ❌

### Forecasting Formulas (EAC, ETC, VAC)

#### 5. EAC (Estimate at Completion) — multiple variants:

##### EAC = BAC / CPI (most common — assumes current efficiency continues)
- BAC = Budget at Completion (the original total budget)

##### EAC = AC + (BAC - EV) (assumes future work at planned rate, not current efficiency)

##### EAC = AC + Bottom-up estimate to complete (when ETC is re-estimated)

##### EAC = AC + (BAC - EV) / (CPI × SPI) (when both schedule and cost matter)

🎯 **Default unless told otherwise:** EAC = BAC / CPI

#### 6. ETC (Estimate to Complete) = EAC - AC
> "How much MORE will it cost to finish?"

#### 7. VAC (Variance at Completion) = BAC - EAC
> "Total project variance — how much over/under budget will we be?"
- **Positive:** Will finish under budget ✅
- **Negative:** Will finish over budget ❌

#### 8. TCPI (To-Complete Performance Index)
> "What efficiency must remaining work achieve to finish on (original budget OR EAC)?"

##### TCPI = (BAC - EV) / (BAC - AC) — to finish at original budget
##### TCPI = (BAC - EV) / (EAC - AC) — to finish at EAC

🎯 **TCPI > 1.0** = harder than current pace.

---

## 📋 Quick Reference Table

| Formula | What It Tells You | Good If |
|---------|-------------------|---------|
| CV = EV - AC | Cost variance ($) | Positive |
| SV = EV - PV | Schedule variance ($) | Positive |
| CPI = EV / AC | Cost efficiency | >1 |
| SPI = EV / PV | Schedule efficiency | >1 |
| EAC = BAC / CPI | Forecast total cost | <BAC |
| ETC = EAC - AC | Cost to finish | Lower |
| VAC = BAC - EAC | Final budget variance | Positive |
| TCPI | Required future efficiency | <1 (easy) |

---

## 🧠 Memory Tricks

### "EV is the hero"
EV appears in EVERY formula. If you forget where, EV is your starting point.

### Variance vs Index
- **Variance** = subtraction (EV − something)
- **Index** = division (EV / something)

### Cost vs Schedule
- **Cost** = involves AC
- **Schedule** = involves PV

### Direction
- **Negative variance** OR **<1 index** = BAD
- **Positive variance** OR **>1 index** = GOOD

---

## 🎯 Worked Example (You'll See This Pattern!)

> *"Project BAC = $100,000. After 4 months (40% time elapsed), the work completed should have been worth $40,000. Actually, $30,000 worth has been completed, costing $35,000."*

**Given:**
- BAC = $100,000
- PV = $40,000 (planned for now)
- EV = $30,000 (earned/completed)
- AC = $35,000 (spent)

**Calculate everything:**

- **CV** = EV - AC = 30K - 35K = **-$5,000** (over budget)
- **SV** = EV - PV = 30K - 40K = **-$10,000** (behind schedule)
- **CPI** = EV / AC = 30K / 35K = **0.857** (only earning $0.86 per $1 spent)
- **SPI** = EV / PV = 30K / 40K = **0.75** (only 75% as fast as planned)
- **EAC** = BAC / CPI = 100K / 0.857 = **$116,667**
- **ETC** = EAC - AC = 116.67K - 35K = **$81,667**
- **VAC** = BAC - EAC = 100K - 116.67K = **-$16,667** (will finish over budget by $16.7K)

🎯 This kind of exact pattern shows up on the exam.

---

## ⚠️ Common Mistakes

1. ❌ Confusing PV and EV
   - PV = what should be done
   - EV = what IS done (in $ value)
2. ❌ Forgetting CV/SV are absolute $; CPI/SPI are ratios
3. ❌ Wrong EAC formula (default = BAC/CPI unless told otherwise)
4. ❌ Calculating TCPI without knowing if it's "to BAC" or "to EAC"
5. ❌ Forgetting >1 is good for CPI/SPI

---

## 🎓 Key Terms

| Term | Meaning |
|------|---------|
| **PV** | Planned Value (BCWS) |
| **EV** | Earned Value (BCWP) |
| **AC** | Actual Cost (ACWP) |
| **BAC** | Budget at Completion |
| **EAC** | Estimate at Completion |
| **ETC** | Estimate to Complete |
| **VAC** | Variance at Completion |
| **CV** | Cost Variance |
| **SV** | Schedule Variance |
| **CPI** | Cost Performance Index |
| **SPI** | Schedule Performance Index |
| **TCPI** | To-Complete Performance Index |

---

## 🏋️ Drill: Practice Set

Try these without looking back:

1. EV = $50K, AC = $40K. CPI = ?
   → **CPI = 50/40 = 1.25** ✅ Cost-efficient
2. EV = $30K, PV = $50K. SV = ?
   → **SV = 30 - 50 = -$20K** ❌ Behind schedule
3. BAC = $200K, CPI = 0.8. EAC = ?
   → **EAC = 200/0.8 = $250K** (will finish $50K over)
4. EAC = $250K, AC = $80K. ETC = ?
   → **ETC = 250 - 80 = $170K**
5. BAC = $200K, EAC = $250K. VAC = ?
   → **VAC = 200 - 250 = -$50K** ❌ Over by $50K

If you got 5/5, you're EVM-ready.

---

## ✅ Module 6 Summary

You now know:
- 🧱 PV, EV, AC (the foundation)
- 📋 8 formulas (drill them!)
- 🎯 Positive variance/>1 index = good
- 🎯 Default EAC = BAC / CPI

**Next:**
1. 🎥 [Videos.md](./Videos.md) (drill formulas with practice problems)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 7: Risk](../Module-07-Risk/Reading.md)

---

## 🎓 Cornell/Harvard/Stanford Elevation Layer

### Prerequisites for this module

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - **Cost baselines and scope baselines** — covered in [Module 03: Process Domain](../Module-03-Process-Domain/Reading.md).
> - **Basic algebra** — division, percentages, the concept of a ratio. No calculus required.
> - **Optional cross-course preparation:** [10-ASCM-CSCP Module 06: Supply Chain Performance Management](../../10-ASCM-CSCP/Module-06-Supply-Chain-Performance-Management/Reading.md) covers KPI/dashboard structures that complement EVM thinking.
>
> If any of these are shaky, pause and review before continuing.

### Where this leads

> **Where this leads.**
> - **Inside this course:** [Module 07 — Risk](../Module-07-Risk/Reading.md) connects EVM to Contingency Reserve usage; [Module 08 — Quality](../Module-08-Quality/Reading.md) extends measurement to quality metrics.
> - **Cross-course:** [10-ASCM-CSCP Module 06](../../10-ASCM-CSCP/Module-06-Supply-Chain-Performance-Management/Reading.md) extends performance-measurement thinking to supply-chain dashboards.
> - **Practice:** [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), and [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) draw ~5–10 questions each from EVM (formula-heavy).

---

## 📊 Case Study — NASA Mars Climate Orbiter (1999)

**Situation.** The Mars Climate Orbiter (MCO) was a $327.6 million NASA mission (with the Mars Polar Lander, total program cost ~$193M in MCO alone) launched December 11, 1998. The MCO's job was to study Mars's climate and act as a communications relay for the Mars Polar Lander, which was scheduled to land later in 1999. Mission Operations were split between NASA's Jet Propulsion Laboratory (JPL) and Lockheed Martin Astronautics (LMA, the spacecraft contractor in Denver). The mission was managed under NASA's "Faster, Better, Cheaper" (FBC) program, championed by Administrator Daniel Goldin — designed to cut costs and schedules ~30% versus traditional NASA flagship missions.

**Decision.** Project management decisions were made to minimize cost and schedule: (1) Lockheed Martin used **English (Imperial) units** (pound-seconds) in the thrust software it provided to JPL, while JPL's navigation team used **metric (newton-seconds)** in its trajectory software — the interface control document specified metric but the unit conversion was never enforced in the actual code or integration test; (2) navigation anomalies during cruise were observed but not formally root-caused, partly because the program's measurement and review cadence (status reports, baseline reviews) had been reduced under FBC cost pressure; (3) the project had no dedicated independent verification & validation (IV&V) for navigation software — that role was cut to save cost; (4) two engineers had flagged the unit mismatch verbally in the weeks before Mars insertion but were not heard by decision-makers because the lessons-learned and risk-escalation processes were under-resourced.

**Outcome.** On September 23, 1999, the Mars Climate Orbiter performed its Mars Orbit Insertion burn at the wrong altitude — entering atmospheric layers at ~57 km rather than the planned ~226 km — and was destroyed. The $327M asset was lost. NASA's Mars Climate Orbiter Mishap Investigation Board (Stephenson et al., November 1999 report) concluded the root cause was the units mismatch, but the *contributing causes* were primarily project-management failures: inadequate verification processes, insufficient communication between JPL and LMA, and underestimated complexity in the Faster-Better-Cheaper structure. NASA Administrator Goldin subsequently re-emphasized rigorous review processes; FBC was effectively abandoned as a doctrine within a few years.

**Lesson for the exam / for practitioners.** This case is taught in every aerospace project-management curriculum because it shows how **cost-cutting in measurement infrastructure produces catastrophic failures**. PMBOK 7's **Measurement** Performance Domain (PMBOK 7 §2.7) tests this directly. The cost savings in cutting IV&V were dwarfed by the lost mission. On the exam, when you see questions about *"EVM shows the project on cost and schedule — what could still be wrong?"* the right answer is that EVM measures cost and schedule but **does not measure interface integrity, communication quality, or independent verification**. EVM is necessary, not sufficient. The MCO is the canonical reminder that "the metrics looked fine" is not the same as "the project was fine."

**Discussion (Socratic).**
- Q1: A perfectly-on-cost, on-schedule project can still fail catastrophically. What does that tell you about the appropriate weight to give EVM in a portfolio review? Defend a position using PMBOK 7's Measurement principle vs Quality principle.
- Q2: "Faster, Better, Cheaper" was an organizational EEF (an enterprise environmental factor that shaped every project below it). As PM, when an EEF systematically undermines verification, what is your obligation under the PMI Code of Ethics?
- Q3: The unit mismatch had been verbally flagged but not heard. Design a project-management ritual (drawing from Module 02's communication frameworks and this module's measurement frameworks) that would make a similar near-catastrophe loud enough to be heard.

---

## 💬 Discussion — Socratic prompts

1. **EAC variants.** The default EAC = BAC / CPI assumes current cost efficiency continues. The alternative EAC = AC + (BAC − EV) assumes future work runs at the planned rate. When is each defensible? Construct two project scenarios.
2. **TCPI and motivation.** A TCPI of 1.4 says remaining work must be 40% more efficient than current performance to hit budget. At what TCPI threshold does the metric become demotivating rather than motivating, and what should the PM do?
3. **EVM in agile.** Pure agile teams resist EVM because "scope flexes." How do you adapt EVM to agile context — what's the right unit of "earned value" in story-point land? Cite PMBOK 7's Tailoring principle.
4. **The hidden assumption in EAC.** Default EAC assumes current efficiency continues. What organizational or environmental events could break that assumption (e.g., a key engineer quits, a regulation changes, a supplier fails)? How should the PM signal a forced EAC re-baseline to the sponsor?
5. **EVM and ethics.** A sponsor pressures you to report EAC as below BAC even though CPI shows otherwise. How do you respond using the PMI Code of Ethics (Honesty + Responsibility)?

---

## 📚 Named-source citations (this module)

| Framework / claim | Originator | Year | Publication |
|---|---|---|---|
| Earned Value Management (foundation) | US Department of Defense | 1967 | C/SCSC (Cost/Schedule Control Systems Criteria) |
| EVM updated standard | ANSI/EIA | 1998; reaffirmed 2002 | ANSI/EIA-748 *Earned Value Management Systems* |
| PV / EV / AC terminology | US DOD; adopted PMBOK 5+ | 1967; PMI 1996 onward | PMBOK editions 3–7 |
| CPI / SPI / VAC / TCPI formulas | PMI codification | 2000+ | PMBOK §7.4 (across editions) |
| Measurement Performance Domain | Project Management Institute | 2021 | PMBOK 7 §2.7 |
| To-Complete Performance Index (TCPI) | US DOD EVMS guide | 1990s | DOD EVM Implementation Guide |
| Cost Baseline + Performance Measurement Baseline | Project Management Institute | 2017 | PMBOK 6 §7.3.3.1 |
| Mars Climate Orbiter Mishap Investigation Report | Stephenson et al. (NASA) | 1999 | *Mars Climate Orbiter Mishap Investigation Board Phase I Report*, NASA |
| Faster-Better-Cheaper doctrine retrospective | Mahaffey, James | various; well-summarized 2014 | *Atomic Awakening* (history of NASA program management) |
| Standish CHAOS Report (cost-overrun base rates) | Standish Group | 2024 | *CHAOS Report 2024* |
| PMI Pulse of the Profession (EVM adoption data) | Project Management Institute | 2024 | *Pulse of the Profession 2024* |
