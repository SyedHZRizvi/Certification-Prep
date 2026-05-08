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
