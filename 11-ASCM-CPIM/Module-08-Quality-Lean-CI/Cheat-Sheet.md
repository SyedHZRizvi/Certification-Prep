# 📋 Module 8 Cheat Sheet: Quality, Lean & CI

> One page. TIMWOOD, kanban, takt, DMAIC, OEE. All here.

---

## 🗑️ The 7 Wastes — TIMWOOD

| | Waste | Example |
|---|-------|---------|
| **T** | Transportation | Cross-plant forklift trip |
| **I** | Inventory | Dusty WIP stacks |
| **M** | Motion | Reaching, bending |
| **W** | Waiting | Operator idle |
| **O** | Overproduction | Build ahead of demand |
| **O** | Overprocessing | Polishing hidden surfaces |
| **D** | Defects | Rework, scrap |

🧠 **Overproduction is the WORST — it creates the others.**

8th waste (DOWNTIME) = unused human talent.

---

## 🎯 5 Lean Principles (Womack & Jones)

```
1. Value     (customer defines)
2. Value Stream  (map all steps)
3. Flow      (smooth, no interruptions)
4. Pull      (downstream signals upstream)
5. Perfection (continuous improvement)
```

---

## 🃏 Kanban Sizing

```
N = (D × LT × (1 + SS)) / C
Max WIP = N × C
```

**Example.** D=400/day, LT=0.25 day, C=20, SS=10% → N = 110/20 = 5.5 → **6 cards**. Max WIP = 120.

---

## ⏱️ Takt Time

```
Takt = Available production time / Customer demand
```

**Example.** 480 min / 240 units = **2 min/unit**.

🚨 Takt ≠ Cycle Time ≠ Lead Time.

---

## 🧹 5S Order

```
Sort → Set in order → Shine → Standardize → Sustain
(Seiri  Seiton       Seiso   Seiketsu     Shitsuke)
```

---

## ⚡ SMED Setup Reduction

1. Separate internal vs external setup
2. Convert internal → external
3. Streamline both
4. Goal: **< 10 min** setup

---

## 🛑 Jidoka / Andon / Poka-yoke

| | Meaning |
|---|---------|
| **Jidoka** | Machine stops on defect (autonomation) |
| **Andon** | Visual stop signal (cord, light) |
| **Poka-yoke** | Mistake-proofing (impossible to do wrong) |

---

## 📊 DMAIC (Six Sigma)

```
Define → Measure → Analyze → Improve → Control
```

For NEW designs use **DMADV** (Define-Measure-Analyze-Design-Verify).

Six Sigma target: **3.4 DPMO**.

---

## 📈 Control Charts (SPC)

```
UCL = mean + 3σ
LCL = mean − 3σ
```

| Pattern | Means |
|---------|-------|
| Within limits, random | Common cause — don't tamper |
| Outside limits | Special cause — investigate |
| 8 points same side of mean | Special cause signal |

### Capability

```
Cp  = (USL − LSL) / (6σ)        ← potential
Cpk = min[ (USL−μ)/3σ, (μ−LSL)/3σ ]  ← actual
```

| Cpk | Verdict |
|-----|---------|
| < 1.0 | Incapable |
| 1.33 | Capable |
| 2.0 | World-class (Six Sigma) |

---

## ⚙️ TPM & OEE

```
OEE = Availability × Performance × Quality
```

| Metric | Calc |
|--------|------|
| Availability | uptime / scheduled |
| Performance | actual / theoretical max during uptime |
| Quality | good / total |

**Example.** 0.90 × 0.95 × 0.99 = **84.7%** (world-class). World-class = 85%+.

---

## 🔁 PDCA / PDSA

```
Plan → Do → Check (Study) → Act
```

Engine of kaizen.

---

## 🎓 Belts

| Belt | Role |
|------|------|
| Yellow | Awareness |
| Green | Part-time PM |
| Black | Full-time PM |
| Master Black Belt | Coach/trainer |
| Champion | Executive sponsor |

---

## 🏆 Exam Power Phrases

When you see these, often **correct**:

- ✅ "Eliminate the 7 wastes"
- ✅ "Make problems visible (andon)"
- ✅ "Stop the line on a defect (jidoka)"
- ✅ "Pace to takt"
- ✅ "Standard work before kaizen"

When you see these, often **wrong**:

- ❌ "Lean means fewer workers"
- ❌ "Kanban replaces MRP"
- ❌ "Six Sigma is just statistics"
- ❌ "Run faster than takt to build buffer"
- ❌ "Higher Cpk is always better"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Producing above takt (overproduction)
- ❌ Tampering with a process inside control limits
- ❌ Skipping the "Control" step of DMAIC (gains evaporate)
- ❌ Operator-disconnected TPM (operators must own maintenance)
- ❌ Kaizen without standard work

---

## ✏️ Quick Self-Check

1. 7 wastes (TIMWOOD)? ___
2. Worst waste? → **Overproduction**
3. Takt formula? → **Time available / Demand**
4. Kanban formula? → **N = D × LT × (1+SS) / C**
5. DMAIC phases? → **Define, Measure, Analyze, Improve, Control**
6. OEE formula? → **A × P × Q**

---

➡️ [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) — take it now! Then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
