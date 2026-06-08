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
2. 🚦 **Limit Work In Progress (WIP)**, don't take on more than you can finish
3. 📊 **Manage flow**, measure cycle time, throughput
4. 📋 **Make policies explicit**, entry/exit criteria for each column
5. 🔄 **Implement feedback loops**, daily reviews
6. 📈 **Improve collaboratively**, continuous improvement

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

- Eliminating waste (the 8 wastes, TIM-WOODS):

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

## 🎨 XP (Extreme Programming), Engineering Practices

XP focuses on technical excellence:

### Key Practices:

- 👯 **Pair Programming**, two devs, one keyboard
- ✅ **TDD (Test-Driven Development)**, write tests first
- 🔄 **Continuous Integration**, merge code often
- 📐 **Refactoring**, improve code without changing behavior
- 🎁 **Small Releases**, ship frequently
- 👥 **Collective Code Ownership**, anyone can edit any code

🎯 PMP tests these lightly, know what they ARE.

---

## 🌟 Hybrid Approach

**Hybrid = mix of predictive + agile.**

### When To Go Hybrid:

- 📐 Some parts of project are clear, others uncertain
- 📊 Different stakeholders want different approaches
- 🏛️ Regulated environment requires predictive elements
- 🎁 Customer wants frequent demos but also hard deadlines

### Common Hybrid Patterns:

- **Predictive shell + Agile inside**, broad timeline, sprint-based work
- **Stage-Gate + Agile**, go/no-go gates, agile within stages
- **Agile development + Predictive deployment**, build agile, ship predictive

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

- **Story Points**, relative complexity
- **Planning Poker**, group consensus
- **T-shirt sizing**, XS, S, M, L, XL
- **Affinity grouping**, sort by relative size
- **Ideal Days**, uninterrupted work days

### Velocity-based Forecasting
- Avg PBIs/sprint = velocity
- Remaining work / velocity = sprints needed

🎯 **Exam pattern:** "How does the team forecast in agile?"
- ✅ **Use velocity / empirical evidence**

---

## 📈 Agile Metrics

### Useful agile metrics (test-relevant):

- 📈 **Velocity**, story points completed/sprint
- ⏱️ **Cycle Time**, time from start to done (Kanban)
- 📊 **Throughput**, items completed per period
- 📈 **Burndown / Burnup Charts**, work remaining/completed
- 🎯 **Customer Satisfaction (NPS, CSAT)**
- ⚡ **Lead Time**, request to delivery

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

1. ❌ "PM assigns tasks in agile", **NO**, team self-organizes
2. ❌ "Detailed upfront plan in agile", **NO**, plan adaptively
3. ❌ "Scope baseline locked in agile", **NO**, scope evolves
4. ❌ "PM controls daily standup", **NO**, team owns it
5. ❌ "Agile = no plan", **NO**, agile = continuous planning

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

---

## 🎓 graduate-level professional Elevation Layer

### Prerequisites for this module

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - **PMBOK 7 principles**, Tailoring, Adaptability, Complexity (covered in [Module 01: Foundations](../Module-01-Foundations/Reading.md)).
> - **Predictive process basics**, WBS, Critical Path, baselines (covered in [Module 03: Process Domain](../Module-03-Process-Domain/Reading.md)).
> - **Scrum vocabulary**, Sprint, Backlog, Definition of Done. If new, [01-Scrum-Master Module 02: Scrum Framework](../../01-Scrum-Master/Module-02-Scrum-Framework/Reading.md) and Module 04 (Artifacts) are recommended.
>
> If any of these are shaky, pause and review before continuing.

### Where this leads

> **Where this leads.**
> - **Inside this course:** [Module 06 Earned Value](../Module-06-Earned-Value/Reading.md) shows how to measure progress in hybrid contexts; [Module 09 Procurement](../Module-09-Procurement/Reading.md) covers agile contract structures.
> - **Cross-course:** The entire [01-Scrum-Master](../../01-Scrum-Master/README.md) track is the agile-native deep dive; [12-ASCM-CLTD Module 06](../../12-ASCM-CLTD/Module-06-Transportation-Modes/Reading.md) extends Lean/TIM-WOODS thinking to logistics.
> - **Practice:** [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), and [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) collectively draw ~25–30% of their questions from agile/hybrid content, the highest single source.

---

## 📊 Case Study, HealthCare.gov Launch and Rescue (2013)

**Situation.** HealthCare.gov was the US federal insurance marketplace required by the Affordable Care Act (ACA, 2010). The launch deadline was October 1, 2013. The Centers for Medicare & Medicaid Services (CMS) acted as program sponsor, with primary contractor CGI Federal building the front-end and 55 separate contractors handling other components. The estimated project cost grew from an initial ~$93.7M to over **$1.7 billion** by 2014 (GAO-14-694, July 2014).

**Decision.** The program was structured as a predictive (waterfall) build with formal milestones, written specifications, and contract deliverables, typical federal IT practice. Integration testing was scheduled in the final 2 weeks before launch. Stakeholder coordination across CMS, the White House, 55 contractors, and 50 state-exchange interfaces was managed through traditional status-report cadences. Late changes to insurance rules (driven by political compromise) forced specification rewrites in 2013, but the schedule was held fixed. The launch went ahead despite internal flags from contractors that the system was not load-ready.

**Outcome.** On launch day (Oct 1, 2013), the site collapsed under load only ~6 enrollees completed signup that day. Through October and November, error rates exceeded 60%. The political fallout was severe; White House Chief of Staff Denis McDonough commissioned a "tech surge" led by Jeff Zients (later Biden's National Economic Council director) and Mikey Dickerson (Google SRE veteran, later founder of US Digital Service). The rescue team **switched the operating model from waterfall to agile**: stand-up meetings twice daily, ruthless prioritization of the highest-traffic flows, war-room operations, and small cross-functional cells. Within ~8 weeks, the site was functional at scale (December 2013 enrollments exceeded the entire pre-rescue total). The rescue led directly to the creation of US Digital Service (USDS) and 18F agile-first federal IT teams.

**Lesson for the exam / for practitioners.** This is a perfect Tailoring case (PMBOK 7 §3.7). The original program failed because it applied predictive-waterfall governance to a project with **evolving requirements**, **massive stakeholder count**, **integration complexity**, and **political uncertainty** exactly the conditions where the Stacey Matrix points toward agile. The rescue worked because the operating model was tailored to fit the actual complexity. On the exam, when you see a scenario asking *"What approach should the team use?"* the right answer is almost never "the one in the original plan" it's the one that matches the **current** requirement stability + customer involvement + risk profile + regulatory needs. HealthCare.gov is the canonical example of mid-project methodology shift saving (rather than killing) the program.

**Discussion (Socratic).**
- Q1: Federal procurement law strongly prefers fixed-price predictive contracts for accountability reasons. How would you, as PM, push back on procurement officers who insist on waterfall structures for projects that obviously need agile flexibility?
- Q2: The rescue team had executive air cover from the White House, a privilege not available to most PMs. What organizational structures, sponsor agreements, or "permission slips" would you negotiate at kickoff to be able to do a mid-project methodology shift without that level of cover?
- Q3: USDS and 18F emerged as durable institutional changes from a single project failure. Is it ethical for a PM to deliberately let a project "fail visibly" if doing so produces broader organizational learning? Defend an answer with PMI's Code of Ethics.

---

## 💬 Discussion, Socratic prompts

1. **Stacey Matrix in practice.** Take a project you've worked on; place it on the Stacey Matrix. Did the chosen methodology match the position? Where in the matrix is the boundary most contested in industry today?
2. **Kanban WIP vs throughput.** A team's WIP limit is 4. Throughput is 12/week. A stakeholder argues raising the WIP limit to 6 will lift throughput. Is that defensible, and what would you measure to test it? Cite Little's Law (J. Little 1961).
3. **TIM-WOODS in knowledge work.** Lean's 8 wastes were originally observed on Toyota factory floors. Apply each of the 8 to a 2024 software-engineering team and name a concrete example of each that you've seen.
4. **Hybrid contract structure.** A regulated hardware-plus-software project needs predictive hardware delivery and agile software delivery. Design a contract structure (vendor-side) that pays appropriately for each. Cite PMBOK 7's Adaptability principle.
5. **Velocity as a metric.** Velocity is famously easy to game and famously useful for forecasting. When is it the right metric, when is it a vanity metric, and what should replace it in 2024 (cite the Accelerate / DORA metrics framework, Forsgren/Humble/Kim 2018)?

---

## 📚 Named-source citations (this module)

| Framework / claim | Originator | Year | Publication |
|---|---|---|---|
| Agile Manifesto (4 values + 12 principles) | Beck, Cockburn, Fowler, et al. (17 signatories) | 2001 | agilemanifesto.org |
| Scrum framework | Schwaber, Ken & Sutherland, Jeff | 1995 (foundational); 2020 (current Guide) | *The Scrum Guide 2020* |
| Kanban (knowledge-work adaptation) | Anderson, David J. | 2010 | *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press |
| Toyota Production System / Lean origins | Ohno, Taiichi | 1978 (Japanese); 1988 (English) | *Toyota Production System: Beyond Large-Scale Production*, Productivity Press |
| 8 wastes (TIM-WOODS extension) | Liker, Jeffrey | 2004 | *The Toyota Way*, McGraw-Hill |
| Extreme Programming (XP) | Beck, Kent | 1999 | *Extreme Programming Explained: Embrace Change*, Addison-Wesley |
| Test-Driven Development | Beck, Kent | 2002 | *Test-Driven Development: By Example*, Addison-Wesley |
| Continuous Integration | Fowler, Martin | 2006 | *"Continuous Integration"* (martinfowler.com, 2006 revision) |
| Stacey Matrix (complexity) | Stacey, Ralph D. | 1996 | *Strategic Management and Organisational Dynamics*, Pitman |
| Cumulative Flow Diagram | Anderson, David J. | 2010 | *Kanban* (above) |
| Little's Law (cycle time × WIP) | Little, John D.C. | 1961 | *"A Proof for the Queuing Formula L = λW,"* Operations Research, 9(3) |
| DORA / Accelerate metrics | Forsgren, Humble, Kim | 2018 | *Accelerate: The Science of Lean Software and DevOps*, IT Revolution |
| Disciplined Agile (PMI) | Ambler, Scott & Lines, Mark | 2012; PMI 2019 | *Disciplined Agile Delivery* (PMI 2019 acquisition) |
| HealthCare.gov post-mortem | US Government Accountability Office | 2014 | GAO-14-694, *Healthcare.gov: Ineffective Planning and Oversight Practices Underscore the Need for Improved Contract Management* |
| US Digital Service founding | Dickerson, Mikey & Zients, Jeff | 2014 | USDS launch, Executive Order |
| PMBOK 7 Tailoring + Adaptability principles | Project Management Institute | 2021 | PMBOK 7 §3.7, §3.11 |
