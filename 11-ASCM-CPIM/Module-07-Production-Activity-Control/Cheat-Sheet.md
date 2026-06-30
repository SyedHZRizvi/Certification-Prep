# 📋 Module 7 Cheat Sheet: Production Activity Control

> One page. Q-S-R-W-M, dispatching rules, CR formula. Done.

---

## 📅 Manufacturing Lead Time, 5 Elements (MEMORIZE)

| | Element | Typical % |
|---|---------|-----------|
| **Q** | Queue (BEFORE) | 60–80% |
| **S** | Setup | 5–10% |
| **R** | Run | 10–20% |
| **W** | Wait (AFTER) | ~5% |
| **M** | Move | ~5% |

🧠 **Q-S-R-W-M**. Queue dominates, attack it first.

---

## 🚦 Dispatching Rules

| Rule | Optimizes |
|------|-----------|
| **FCFS** | Fairness |
| **SPT** | Mean flow time (1 machine) |
| **EDD** | Maximum tardiness |
| **LPT** | Bottleneck management |
| **CR** | Time vs work remaining |
| **Slack/Op** | Multi-step urgency |

---

## 🧮 Critical Ratio Formula

```
CR = (Due Date − Today) / Work Days Remaining
```

- CR > 1 → ahead
- CR = 1 → on schedule
- **CR < 1 → behind (process first)**

---

## 📊 Performance Metrics

```
Flow Time      = Completion − Arrival
Average FT     = Σ flow times / n
Makespan       = First start → last finish
Tardiness      = max(0, completion − due date)
Utilization    = Σ processing / makespan
```

---

## 🏭 Layouts & PAC Style

| Layout | PAC |
|--------|-----|
| **Job shop** | Complex dispatching, variable routing |
| **Cellular** | Simple sequencing, low setup |
| **Repetitive line** | Takt time pacing |
| **Continuous** | Process control |
| **Project** | Critical path |

---

## 🧱 Manufacturing Cells

- Dissimilar machines + similar part family = cell
- Group Technology (GT) classifies parts by features
- Benefits: less setup, less move, less queue
- Foundation for lean cells (Module 8)

---

## 🔧 SMED Quick Recap

```
1. Identify internal (machine-stopped) vs external (running) setup
2. Convert internal → external where possible
3. Streamline remaining internal steps
GOAL: < 10-minute setup
```

---

## 🔁 Push vs Pull

| | Push | Pull |
|---|------|------|
| Trigger | Schedule (MRP) | Downstream demand (kanban) |
| WIP | High | Limited |
| Inventory | High | Low |

---

## 🏆 Exam Power Phrases

When you see these, often **correct**:

- ✅ "Reduce queue time to cut LT"
- ✅ "Use EDD when due-date performance matters"
- ✅ "Protect bottleneck with a buffer"
- ✅ "Convert internal to external setup"

When you see these, often **wrong**:

- ❌ "Reduce run time to cut LT" (queue is dominant)
- ❌ "FCFS minimizes flow time"
- ❌ "Cells require identical machines"
- ❌ "Gantt charts optimize schedules"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Focusing on run-time reduction when queue is 70% of LT
- ❌ Using FCFS just for fairness when due dates suffer
- ❌ Treating queue and wait as the same thing
- ❌ Activating non-bottlenecks 100% (creates WIP)
- ❌ Ignoring SMED, keeping setup-heavy batches

---

## ✏️ Quick Self-Check

1. 5 LT elements? → **Q-S-R-W-M**
2. Queue vs Wait? → **Before vs After processing**
3. SPT optimizes? → **Mean flow time, 1 machine**
4. CR < 1 means? → **Behind, process first**
5. SMED goal? → **<10-min setup**

---

➡️ [Module 8: Quality, Lean & CI](../Module-08-Quality-Lean-CI/Reading.md)
