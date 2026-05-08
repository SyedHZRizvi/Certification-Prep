# Module 8: Scaling Scrum 🏗️

> **Why this module matters:** PSM I touches scaling lightly (~10% of exam) but the questions are sneaky. You don't need deep SAFe knowledge — just the basics + how Scrum scales.

---

## 🌆 A Story: The Pizza Chain Goes Citywide

Sofia's bakery from Module 5 was great. One team, one product. But now? Customers love her so much that she's opening **5 locations** across the city.

Suddenly:
- 5 teams, 1 brand
- Different chefs experimenting with different recipes
- Conflicting promotions
- Customers confused: "Is the chocolate cake the same at every location?"

Sofia faces the **scaling problem**: how do multiple teams produce ONE coherent product, working together?

That's what scaling frameworks try to solve.

---

## 🤔 First Question: Do You NEED To Scale?

**Most teams don't.** A single Scrum Team of ≤10 people can ship enormous products.

The Scrum Guide is clear:
> *"If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. They should share the same Product Goal, Product Backlog, and Product Owner."*

🎯 **Exam tip:** The Scrum Guide ONLY mentions: same Product Goal + same PB + same PO across teams. The exam loves this.

### Why Scale (Sometimes Necessary):
- 🌍 Product is too large for one team
- ⏱️ Need parallel delivery
- 🌐 Geographic distribution

### Why Most Teams DON'T Scale:
- 🚫 They have only 1 team — Scrum natively supports them
- 🚫 They confuse "scaling" with "complexity"
- 🚫 Their org has lots of people but the *work* doesn't need scaling

---

## 🎯 The Three Most Common Scaling Frameworks

### Framework 1: Nexus (Scrum.org's official)

**Sweet spot:** 3–9 Scrum Teams working on ONE product.

```
        ┌────────────────────────────┐
        │       NEXUS (one)          │
        │                            │
        │  ┌──────┐ ┌──────┐ ┌─────┐ │
        │  │Team 1│ │Team 2│ │Team3│ │
        │  └──────┘ └──────┘ └─────┘ │
        │                            │
        │   1 Product Owner          │
        │   1 Product Backlog        │
        │   1 Product Goal           │
        │   1 Definition of Done     │
        └────────────────────────────┘
```

#### What's Added in Nexus:
- 🆕 **Nexus Integration Team** — coordinates dependencies
- 🆕 **Nexus Sprint Goal** — shared goal across all teams
- 🆕 **Nexus Sprint Backlog** — combines all team backlogs
- 🆕 **Nexus Daily Scrum** — for representatives from each team
- 🆕 **Nexus Sprint Planning, Review, Retro** — across the Nexus

🎯 **Exam pattern:** "What is added in Nexus?" → Integration Team + Nexus events.

### Framework 2: SAFe (Scaled Agile Framework)

**Sweet spot:** Large enterprise (50+ teams). VERY popular but heavy.

Key concepts (high level):
- **Agile Release Train (ART)** — group of teams working on a "value stream" (e.g., 5–12 teams)
- **PI (Program Increment)** — typically 8–12 weeks, multiple sprints aligned
- **PI Planning** — big event where all teams plan together (legendary 2-day meeting)
- **System Demo** — like Sprint Review at the program level
- **Inspect & Adapt** — like Retro at the program level

🚨 **NOT in the Scrum Guide.** SAFe is its own thing. Critics say it's too heavy and "fake agile."

### Framework 3: LeSS (Large-Scale Scrum)

**Sweet spot:** 8+ teams.

Philosophy: keep it minimal. *"Scrum scaled, not Scrum modified."*
- Same accountabilities (PO, SMs, Devs)
- Same Sprint cadence across teams
- Same Sprint Review for all
- LeSS Huge: for 1000+ people

---

## 🤝 Coordinating Multiple Teams (Beyond Nexus)

### Scrum of Scrums
- Representatives from each team meet
- Discuss cross-team impediments
- Daily or as-needed

🚨 **Not officially in Scrum Guide.** Common pattern from XP/Scrum tradition.

### Communities of Practice (CoPs)
- People with same skill (e.g., all designers) meet across teams
- Share patterns, raise quality

### Shared Backlogs
- One Product Backlog for the whole product
- All teams pull from it
- PO decides what each team gets (or teams self-select)

---

## 🏗️ Single Product, Multiple Teams: The Constants

If you take ONE thing from this module:

**Multiple Scrum Teams on the same product MUST share:**
1. ✅ The same **Product Goal**
2. ✅ The same **Product Backlog**
3. ✅ The same **Product Owner**
4. ✅ A common **Definition of Done**
5. ✅ Aligned Sprint cadences (typically same length, same start)

🎯 **Exam pattern (HOT):** "5 teams work on the same product. How many POs?" → **One.**

---

## ⚠️ Common Scaling Anti-Patterns

| Anti-Pattern | Why It's Bad |
|--------------|--------------|
| Multiple POs for same product | Conflicting priorities |
| Different DoDs per team | Inconsistent quality |
| Out-of-sync sprints | Can't integrate work |
| "Component teams" (e.g., DB team, UI team) | Bottlenecks, dependencies |
| One mega-team of 30+ | Communication breaks down |

🎯 **Right pattern:** **Feature teams** (cross-functional, end-to-end).

---

## 🤖 Component Teams vs Feature Teams

| Component Team | Feature Team |
|----------------|--------------|
| Owns one tech layer (DB, UI, etc.) | Owns end-to-end features |
| Creates dependencies | Self-sufficient |
| Hands off work | Delivers complete value |
| Common in old orgs | Aligned with Scrum |

🎯 **Exam:** Feature teams are preferred in Scrum.

---

## 🌐 Distributed Scrum

When teams are geographically split:

### Best Practices:
- 🕒 Plan time-overlap windows
- 📹 Default to video for events
- 🔧 Use shared tools (Jira, Confluence, Miro)
- 🌍 Consider time zones for Daily Scrum
- 🤝 Build trust early (in-person if possible)

### What Stays The Same:
- All Scrum events still happen
- Same accountabilities
- Same artifacts

🚨 The Scrum Guide does NOT specifically prescribe distributed practices. It's framework-agnostic.

---

## 🎓 Comparison: Scrum / Nexus / SAFe / LeSS

| | Scrum (1 team) | Nexus | SAFe | LeSS |
|---|----------------|-------|------|------|
| Best for | <10 people | 3–9 teams | 50+ teams | 8+ teams |
| Heaviness | 🪶 | 🪶🪶 | 🏋️🏋️🏋️🏋️ | 🪶🪶 |
| Scrum Guide aligned? | ✅ | ✅ (made by Scrum.org) | ❌ | ✅ (claims so) |
| Roles added | None | Integration Team | Many (RTE, etc.) | Few |
| Events added | None | Nexus events | PI events | Few |
| In your exam? | Heavy | Light | Awareness | Awareness |

---

## 🤔 What The Exam Will Test

For PSM I, you mostly need:
- ✅ Understanding "Scrum scales by adding more Scrum Teams to same product"
- ✅ Knowing 1 PO / 1 Product Backlog / 1 Product Goal across teams
- ✅ Awareness that Nexus exists (not deep)
- ✅ Distinction between component teams (bad) and feature teams (good)
- ✅ Why "team of 30" is wrong

You DON'T need:
- ❌ Deep SAFe terminology
- ❌ LeSS specifics
- ❌ PI Planning details

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **Scaling** | Multiple teams collaborating on one product |
| **Nexus** | Scrum.org's framework for 3–9 teams |
| **SAFe** | Scaled Agile Framework (large enterprise) |
| **LeSS** | Large-Scale Scrum (minimalist scaling) |
| **Feature team** | Cross-functional, end-to-end ownership |
| **Component team** | Team focused on one tech layer (anti-pattern) |
| **Scrum of Scrums** | Cross-team sync; not in Scrum Guide |
| **PI (Program Increment)** | SAFe term; 8–12 week cadence |
| **Nexus Integration Team** | Coordinates dependencies in Nexus |

---

## ✅ Module 8 Summary

You now know:
- 🤝 Most teams don't need scaling — single Scrum Team is powerful
- 🏗️ When scaling: 1 PO, 1 Product Backlog, 1 Product Goal
- 🎯 Three frameworks: Nexus (Scrum.org), SAFe (heavy), LeSS (minimal)
- ✅ Feature teams > Component teams
- 🚫 Anti-patterns to avoid

**Congratulations!** 🎉 You've completed all 8 Scrum Master modules!

**Next:**
1. ✏️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)
2. 📋 [Flashcards Master List](../Flashcards.md)
3. 🎓 Read the [Scrum Guide](https://scrumguides.org/scrum-guide.html) end-to-end (~30 min)
4. 🎯 [Take the FREE Scrum.org Open Assessment](https://www.scrum.org/open-assessments/scrum-open) (do it 3+ times, score 95%+ each)
5. 🏆 Book your real PSM I exam!
