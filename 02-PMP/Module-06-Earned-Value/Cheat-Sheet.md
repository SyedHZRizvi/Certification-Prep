# 📋 PMP Module 6 Cheat Sheet: EVM Formulas (PRINT THIS!)

---

## 🧱 The 3 Foundations

| | Meaning | Memory Tip |
|---|---------|-----------|
| **PV** | Planned Value (planned $) | What was scheduled |
| **EV** | Earned Value (earned $) | What's actually completed |
| **AC** | Actual Cost (spent $) | What you've spent |
| **BAC** | Budget at Completion | Total project budget |

---

## 📋 The 8 Formulas

```
CV  = EV - AC          → Cost Variance ($)
SV  = EV - PV          → Schedule Variance ($)
CPI = EV / AC          → Cost Performance Index
SPI = EV / PV          → Schedule Performance Index

EAC = BAC / CPI        → Estimate at Completion (default)
ETC = EAC - AC         → Estimate to Complete
VAC = BAC - EAC        → Variance at Completion

TCPI = (BAC - EV) / (BAC - AC)   → To-Complete (to BAC)
TCPI = (BAC - EV) / (EAC - AC)   → To-Complete (to EAC)
```

---

## 📐 Other EAC Variants

| Situation | Formula |
|-----------|---------|
| Default (current efficiency continues) | EAC = BAC / CPI |
| Future work at planned rate | EAC = AC + (BAC - EV) |
| Both schedule AND cost matter | EAC = AC + (BAC - EV) / (CPI × SPI) |
| Re-estimated bottom-up | EAC = AC + new ETC |

---

## ✅ Direction Cheat Sheet

| Variance ($) | Index | Meaning |
|--------------|-------|---------|
| Positive (+) | >1 | ✅ GOOD |
| Zero | 1 | On track |
| Negative (-) | <1 | ❌ BAD |

---

## 🧠 Key Insights

- **EV is in EVERY formula** (it's the hero)
- **Variance = subtraction; Index = division**
- **Cost involves AC; Schedule involves PV**
- **CPI < 1 = over budget; SPI < 1 = behind schedule**

---

## 🏋️ 3-Minute Drill

Given: BAC = $100K, EV = $40K, AC = $50K, PV = $60K

1. CV = ?  → 40 - 50 = **-$10K**
2. SV = ?  → 40 - 60 = **-$20K**
3. CPI = ? → 40/50 = **0.80**
4. SPI = ? → 40/60 = **0.67**
5. EAC = ? → 100/0.8 = **$125K**
6. ETC = ? → 125 - 50 = **$75K**
7. VAC = ? → 100 - 125 = **-$25K**

🎯 If all 7 answered correctly, you're EVM-ready!

➡️ [Module 7: Risk](../Module-07-Risk/Reading.md)
