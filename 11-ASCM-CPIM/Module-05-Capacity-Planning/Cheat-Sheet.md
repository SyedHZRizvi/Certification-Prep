# 📋 Module 5 Cheat Sheet: Capacity Planning

> One page. Print it. Know the 4 layers + the 5 TOC steps cold.

---

## 🏗️ Capacity Hierarchy (MEMORIZE)

| Layer | Horizon | Supports | Detail |
|-------|---------|----------|--------|
| **RRP** (Resource Planning) | Years | S&OP | Plants, big equipment, workforce |
| **RCCP** (Rough-Cut CP) | Mo / Wk | MPS | Bill of Resources, critical work centers |
| **CRP** (Capacity Reqs Plan) | Wk / Day | MRP | Full routings, every work center |
| **I/O Control** | Day / Shift | PAC | Released vs completed work |

🧠 **R-R-C-I** ranges from long to short.

---

## 📏 Capacity Definitions

| Term | Meaning |
|------|---------|
| **Design** | Theoretical max under ideal conditions |
| **Effective** | Realistic max given mix, scheduling, maintenance |
| **Demonstrated** | What plant ACTUALLY produced recently |
| **Rated** | Effective × Utilization × Efficiency |

---

## 🧮 Capacity Formulas

```
Available = (Machines) × (Hrs/Shift) × (Shifts/Day) × (Days/Pd)
Rated Capacity = Available × Utilization × Efficiency
Utilization = Hours used / Hours available
Efficiency = Std hrs earned / Actual hrs worked
Required Capacity = Σ (Item demand × Std hrs/item)
```

**Worked example.** 4 machines × 8 hr × 2 shifts × 5 days = 320 hr available.
Util 0.85, Eff 0.90 → Rated = **244.8 hr**.

---

## ⚙️ 3 Capacity Strategies

| Strategy | When | Trade-off |
|----------|------|-----------|
| **Lead** | High demand certainty + market share grab | Risk of idle capacity |
| **Lag** | Low capital, well-understood demand | Risk of lost sales |
| **Match** | Most common, balanced | Constant small change |

---

## 🏁 Theory of Constraints — 5 Focusing Steps

1. **IDENTIFY** the constraint
2. **EXPLOIT** the constraint (every minute counts)
3. **SUBORDINATE** everything else
4. **ELEVATE** the constraint (add capacity)
5. **REPEAT** — new constraint emerges

🧠 **I-E-S-E-R**

---

## 🥁 Drum-Buffer-Rope

```
[Material Release]──Rope──►[Non-bot]──[Buffer]──[Drum/Bottleneck]──►[Non-bot]──►[Ship]
```

- **Drum** = bottleneck's pace
- **Buffer** = inventory protecting the drum
- **Rope** = release signal tied to drum

---

## 💰 TOC Performance Measures

```
Throughput  T = Sales − Truly variable costs (raw material)
Inventory   I = All money tied up in things to sell
Operating Expense OE = Money spent turning I into T

GOAL: ↑ T   ↓ I   ↓ OE
```

---

## 🚨 Bottleneck Rules

1. Hour lost at bottleneck = hour lost for plant
2. Hour saved at non-bottleneck = mirage
3. Activate ≠ Utilize
4. Bottlenecks govern throughput AND inventory

---

## 🏆 Exam Power Phrases

When you see these, often **correct**:
- ✅ "Identify the bottleneck first"
- ✅ "Protect the constraint with a buffer"
- ✅ "Throughput = sales − raw material cost"
- ✅ "RCCP supports MPS; CRP supports MRP"

When you see these, often **wrong**:
- ❌ "100% utilization on every work center"
- ❌ "Throughput = units produced"
- ❌ "Saving time at non-bottleneck increases throughput"
- ❌ "Demonstrated capacity = design capacity"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Adding capacity to a non-bottleneck
- ❌ Driving every work center to 100% utilization
- ❌ Confusing utilization with efficiency
- ❌ Skipping I/O Control at the PAC layer
- ❌ Using design capacity for planning (use rated)

---

## ✏️ Quick Self-Check

1. 4 capacity layers and their planning layer? ___
2. Rated cap formula? ___
3. 5 Focusing Steps in order? ___
4. Drum-Buffer-Rope — meanings? ___
5. TOC throughput definition? ___

---

➡️ [Module 6: Inventory Management](../Module-06-Inventory-Management/Reading.md)
