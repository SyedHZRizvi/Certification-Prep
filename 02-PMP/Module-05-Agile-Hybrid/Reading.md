# PMP Module 5: Agile & Hybrid 🌈

> **Why this module matters:** ~50% of PMP questions are agile/hybrid scenarios. If you skip this, you cannot pass. Even if you've never done agile in real life, the *exam* expects you to know it.

---

## 🎯 What's Different About Agile in PMP?

The PMP has its own flavor of agile content. It draws from:
- The **Agile Manifesto** (Module 1 of Scrum track has the foundations!)
- **Scrum** (covered extensively in Track 1!)
- **Kanban**
- **XP (Extreme Programming)**
- **SAFe** (lightly)

If you've completed the Scrum Master track, you know **80%** of what PMP tests on agile. The remaining 20% is what we'll cover here.

---

## 🌊 Quick Recap: Agile Manifesto

> 4 values + 12 principles. Already covered in Scrum Module 1.

If rusty, re-read:
- [Scrum Module 1: Agile Mindset](../../01-Scrum-Master/Module-01-Agile-Mindset/Reading.md)

---

## 🎨 Kanban: The Other Major Framework

Where Scrum is iteration-based, **Kanban** is **flow-based**.

### Core Kanban Practices:
1. 👀 **Visualize the workflow** (the Kanban board)
2. 🚦 **Limit Work In Progress (WIP)** — don't take on more than you can finish
3. 📊 **Manage flow** — measure cycle time, throughput
4. 📋 **Make policies explicit** — entry/exit criteria for each column
5. 🔄 **Implement feedback loops** — daily reviews
6. 📈 **Improve collaboratively** — continuous improvement

### Kanban Board Example:
```
| BACKLOG | TO DO | IN PROGRESS | REVIEW | DONE |
|---------|-------|-------------|--------|------|
|  Item1  | Item3 |   Item5     | Item7  | Item9|
|  Item2  | Item4 |   Item6     |        | Item10|
|         |       |   (WIP=2)   |        |      |
```

### Kanban vs Scrum
| | Scrum | Kanban |
|---|-------|--------|
| Cadence | Sprint-based | Continuous flow |
| Roles | Defined (PO, SM, Devs) | None prescribed |
| Artifacts | PB, SB, Increment | Kanban Board |
| Events | 5 prescribed | None prescribed |
| Best for | Complex products | Ops, support, steady flow |

🎯 **Exam pattern:** "Team has unpredictable, varied work (e.g., support tickets). Best framework?"
- ✅ **Kanban**

---

## 📊 Lean & Lean-Agile

**Lean** (from Toyota Production System) emphasizes:
- Eliminating waste (the 8 wastes — TIM-WOODS):
  - **T**ransport
  - **I**nventory
  - **M**otion
  - **W**aiting
  - **O**verproduction
  - **O**verprocessing
  - **D**efects
  - **S**kills (unused talent)
- Continuous improvement (Kaizen)
- Respect for people
- Pull (vs push) production

🎯 **Exam pattern:** "Team is producing more reports than stakeholders read. This is:"
- ✅ **Overproduction (waste)**

---

## 🎨 XP (Extreme Programming) — Engineering Practices

XP focuses on technical excellence:

### Key Practices:
- 👯 **Pair Programming** — two devs, one keyboard
- ✅ **TDD (Test-Driven Development)** — write tests first
- 🔄 **Continuous Integration** — merge code often
- 📐 **Refactoring** — improve code without changing behavior
- 🎁 **Small Releases** — ship frequently
- 👥 **Collective Code Ownership** — anyone can edit any code

🎯 PMP tests these lightly — know what they ARE.

---

## 🌟 Hybrid Approach

**Hybrid = mix of predictive + agile.**

### When To Go Hybrid:
- 📐 Some parts of project are clear, others uncertain
- 📊 Different stakeholders want different approaches
- 🏛️ Regulated environment requires predictive elements
- 🎁 Customer wants frequent demos but also hard deadlines

### Common Hybrid Patterns:
- **Predictive shell + Agile inside** — broad timeline, sprint-based work
- **Stage-Gate + Agile** — go/no-go gates, agile within stages
- **Agile development + Predictive deployment** — build agile, ship predictive

🎯 **Exam pattern:** "Project has stable requirements for hardware but evolving software. Best approach?"
- ✅ **Hybrid (predictive for hardware, agile for software)**

---

## 🎯 Choosing An Approach

Use the **Stacey Matrix** (or simplified version):

```
              UNCERTAIN
               ▲
    AGILE      │      CHAOS
               │
HIGH ◄─────────┼─────────► HIGH
COMPLEX        │           DISORDER
               │
   PREDICTIVE  │     COMPLICATED
               ▼
              CERTAIN
```

🎯 **Decision factors:**
- Requirement stability
- Customer involvement
- Risk profile
- Team experience
- Regulatory needs

---

## 🤝 Agile Roles in PMP

### Servant Leader (the Agile PM!)
- Coaches the team
- Removes impediments
- Protects from interruptions
- Empowers decisions

### Product Owner (or equivalent)
- Owns vision and prioritization
- Maximizes value
- Engages stakeholders
- Same as Scrum PO

### The Team
- Cross-functional
- Self-organizing
- Estimates work
- Delivers Increments

🎯 **Exam pattern:** "In agile, the PM acts as:"
- ✅ **Servant leader / facilitator** (NOT command-and-control)

---

## 📊 Agile Estimation (PMP's Take)

(Building on Scrum Module 6.)

### Common Techniques:
- **Story Points** — relative complexity
- **Planning Poker** — group consensus
- **T-shirt sizing** — XS, S, M, L, XL
- **Affinity grouping** — sort by relative size
- **Ideal Days** — uninterrupted work days

### Velocity-based Forecasting
- Avg PBIs/sprint = velocity
- Remaining work / velocity = sprints needed

🎯 **Exam pattern:** "How does the team forecast in agile?"
- ✅ **Use velocity / empirical evidence**

---

## 📈 Agile Metrics

### Useful agile metrics (test-relevant):
- 📈 **Velocity** — story points completed/sprint
- ⏱️ **Cycle Time** — time from start to done (Kanban)
- 📊 **Throughput** — items completed per period
- 📈 **Burndown / Burnup Charts** — work remaining/completed
- 🎯 **Customer Satisfaction (NPS, CSAT)**
- ⚡ **Lead Time** — request to delivery

### Cumulative Flow Diagram (CFD)
- Stacked area chart showing items in each state over time
- Reveals bottlenecks
- Common in Kanban

---

## 🤔 Agile vs Predictive: The PMP Cheat Sheet

| Topic | Predictive | Agile |
|-------|------------|-------|
| Plan | Detailed upfront | Continuous |
| Scope | Fixed, controlled | Evolving |
| Delivery | One/few big | Many small |
| Customer | Beginning + end | Throughout |
| Change | Resisted, controlled | Welcomed |
| Team | Specialists | Cross-functional |
| Documentation | Heavy | Necessary only |
| Communication | Formal reports | Continuous, informal |
| Risk | Detailed register | Iterative reduction |
| Success | Met scope/schedule/cost | Delivered value |

---

## 🎯 The Agile Triangle (Scope-Schedule-Cost)

### Predictive: scope is fixed, time/cost flex
```
       SCOPE (fixed)
          ▲
          │
     ─────┼─────
    /     │     \
   /      │      \
  TIME   COST  (flex)
```

### Agile: time/cost are fixed, scope flexes
```
       SCOPE (flex)
          ▼
          │
     ─────┼─────
    /     │     \
   /      │      \
  TIME   COST  (fixed)
```

🎯 **Exam pattern:** "In agile, when time pressure increases, what flexes?"
- ✅ **Scope** (deliver less, but ship)

---

## 🎯 PMP-Specific Agile Concepts

### Daily Standups
Same as Daily Scrum.

### Iteration Reviews / Retrospectives
Same as Sprint Review / Retrospective.

### Definition of Done
Same as Scrum's DoD.

### Backlog
Same as Product Backlog.

🎯 The PMP exam is **terminology-agnostic**. "Iteration" or "Sprint"? Both fine.

---

## ⚠️ Common PMP Agile Traps

1. ❌ "PM assigns tasks in agile" — **NO**, team self-organizes
2. ❌ "Detailed upfront plan in agile" — **NO**, plan adaptively
3. ❌ "Scope baseline locked in agile" — **NO**, scope evolves
4. ❌ "PM controls daily standup" — **NO**, team owns it
5. ❌ "Agile = no plan" — **NO**, agile = continuous planning

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **Kanban** | Flow-based agile framework |
| **WIP Limit** | Cap on items in progress |
| **Cycle Time** | Start to done duration |
| **Throughput** | Items completed per period |
| **Lead Time** | Request to delivery |
| **Lean** | Eliminate waste philosophy |
| **TIM-WOODS** | 8 wastes (Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills) |
| **XP** | Extreme Programming (engineering-heavy agile) |
| **TDD** | Test-Driven Development |
| **CFD** | Cumulative Flow Diagram |
| **Hybrid** | Mix of predictive and agile |
| **Stacey Matrix** | Decides which approach to use |

---

## ✅ Module 5 Summary

You now know:
- 🎨 Kanban: flow-based, WIP limits, cycle time
- 📊 Lean & 8 wastes (TIM-WOODS)
- 🎨 XP engineering practices
- 🌟 Hybrid approaches
- 🎯 Predictive triangle (fixed scope) vs Agile triangle (fixed time/cost)
- 📊 Velocity, CFD, throughput
- ⚠️ Common PMP traps for agile

**Next:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 6: Earned Value Management (the math!)](../Module-06-Earned-Value/Reading.md)
