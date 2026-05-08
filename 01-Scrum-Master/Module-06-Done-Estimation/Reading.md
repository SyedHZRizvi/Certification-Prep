# Module 6: Done & Estimation 📐

> **Why this module matters:** "Done" is non-negotiable. Estimation is *not* prescribed but is everywhere. Understanding both keeps you out of common exam traps.

---

## 🍰 A Story: The Cake That Was "Done"

Bakery owner Sofia hands a cake to a customer. The customer slices it open — *raw in the middle*.

"You said it was DONE!"
Sofia winces. "Well, the icing was on, the candles were placed... 90% done?"

That's exactly what happens to software when teams ship "Done"-ish work. **A 90%-done cake is a 100%-failed cake.** "Done" must mean *truly done*, not *almost*.

That's why Scrum has a **Definition of Done**.

---

## ✅ Definition of Done (DoD): The Deep Dive

### Why It Exists

Imagine three developers on a team. Without a shared DoD:
- Dev A says "Done = code compiles"
- Dev B says "Done = unit tests pass"
- Dev C says "Done = deployed to staging"

**Three different definitions = chaos.** Everyone marks things "Done" differently. Quality becomes lottery.

The DoD makes it explicit. Everyone knows what "Done" means. **Period.**

### What's In a Good DoD?

A DoD is just a **checklist**. Could include:
- 📝 Code reviewed
- ✅ Unit tests pass (e.g., >85% coverage)
- 🧪 Acceptance tests pass
- 🐞 No critical bugs
- 📄 Documentation updated
- 🌐 Localized (if applicable)
- ♿ Accessibility compliant
- 🔒 Security scan passed
- 🚢 Deployed to staging
- 👤 PO has reviewed/accepted
- 💰 Performance benchmarks met

The Scrum Guide doesn't prescribe what's in your DoD. **The team (or org) decides.**

### Who Sets the DoD?

- 🟢 If the **organization** has a standard DoD → use it (and possibly add to it)
- 🟢 If not → the **Developers** create one

### Can It Evolve?

**Yes.** A team often *adds* to the DoD over time as they get better:
- Sprint 1: Code reviewed + tests pass
- Sprint 5: + Performance tested
- Sprint 10: + Security scanned
- Sprint 20: + Localized

**Lowering the DoD is a red flag.** It means cutting corners.

---

## 🎯 Definition of Ready (DoR): NOT in Scrum Guide!

You'll hear about "Definition of Ready" — a list of criteria a PBI must meet *before* a Sprint pulls it in. Things like:
- Has acceptance criteria
- Estimated
- Small enough to fit in a Sprint
- No blocking dependencies

🚨 **Important:** **DoR is NOT in the Scrum Guide.** It's a common practice but optional.

🎯 **Exam pattern:** "What does the Scrum Guide say about Definition of Ready?"
- Answer: **Nothing. It's not part of Scrum.**

---

## 🔢 Estimation: The Scrum Guide Is SILENT

The Scrum Guide says nothing about HOW to estimate. Just that:
- Developers are responsible for estimates
- Items at the top of the backlog should be small enough to "fit" in a Sprint

But in *practice*, you should know these techniques (and the exam will ask):

### Technique 1: Story Points (Most Common)

Story points are a **relative** measure of effort, complexity, and uncertainty — NOT time.

Why relative?
- "Time" estimates are notoriously inaccurate
- Comparing items is easier than estimating absolute hours
- Different developers work at different paces — story points avoid that

#### Common Scales:
- **Fibonacci-like:** 1, 2, 3, 5, 8, 13, 20, 40, 100
- Why this scale? Because **uncertainty grows non-linearly**. The bigger the item, the less certain.

#### How To Estimate:
- Compare to a known reference item: "If updating the login page = 3 points, this new feature feels like... 8."
- Discuss until team agrees (more on Planning Poker below)

### Technique 2: Planning Poker

A team activity:
1. PO reads a PBI
2. Each developer privately picks a card with their estimate
3. All flip cards simultaneously
4. Discuss outliers (highest + lowest justify)
5. Re-vote until consensus

Why it works:
- Avoids anchoring on first speaker
- Surfaces hidden assumptions
- Builds shared understanding

### Technique 3: T-Shirt Sizing

Casual estimates: XS, S, M, L, XL, XXL.
- Less precise but faster
- Good for early-stage backlog items

### Technique 4: Affinity Estimation

For LARGE backlogs:
1. Put all PBIs on a wall
2. Team groups them by "feels similar in size"
3. Apply story points to each group

Fast for ordering 100+ items.

### Technique 5: #NoEstimates

Counter-cultural: just count completed PBIs.
- "Last sprint we finished 8 stories. Next sprint, plan for 8."
- Works if PBIs are similarly sized.

---

## 📈 Velocity: A Metric, NOT in the Scrum Guide

**Velocity** = average story points completed per Sprint.

Example:
- Sprint 1: 23 points
- Sprint 2: 19 points
- Sprint 3: 25 points
- Velocity ≈ 22

### Uses:
- 📅 **Forecasting:** "If our velocity is 22, and we have 110 points left, ~5 sprints to go."
- 🔄 **Adjusting load:** "We averaged 22, but we planned 35 — maybe too ambitious."

### Misuses (DANGER!):
- ❌ **Comparing teams** ("Team A has higher velocity, so they're better")
   → Bad. Story points are relative *to that team*.
- ❌ **Targeting velocity** ("We need 30 points per sprint!")
   → Bad. Inflates estimates. Hurts quality.
- ❌ **Reporting to management** as a productivity metric
   → Bad. Velocity is a planning tool, not a performance review.

🎯 **Exam pattern:** "Manager wants to compare two teams' velocities. Right answer?"
- "Velocity is team-specific and not comparable across teams."

🚨 **Important:** **Velocity is NOT in the Scrum Guide.** It's a useful practice. Don't say "Scrum requires velocity."

---

## 🔥 Burndown / Burnup Charts (NOT prescribed)

### Burndown Chart
Shows remaining work over time.
- Y-axis: work remaining (story points or hours)
- X-axis: days in Sprint
- Ideal line: straight from start (full work) to end (zero)

```
Work Left
   ↑
35 |\
30 | \  ← Ideal (linear burn)
25 |   \─\
20 |       ─\─ ← Actual (sometimes spikes)
15 |           \ 
10 |             \
 5 |               \
 0 |________________\___ Days
   1  3  5  7  9  11
```

### Burnup Chart
Shows work completed + total scope.
- Top line: total scope (can grow as scope changes)
- Bottom line: work completed
- Gap = remaining

### Important:
- Both are **NOT required by Scrum**
- They're transparency tools
- The team chooses which to use (or neither)

---

## 🎯 Story Sizing Best Practices

### "INVEST" Criteria for Good User Stories
- **I**ndependent (no order dependencies)
- **N**egotiable (details can be discussed)
- **V**aluable (delivers value)
- **E**stimable (team can size it)
- **S**mall (fits in a Sprint)
- **T**estable (clear pass/fail)

### User Story Format (commonly used):
> *"As a [user type], I want [goal] so that [benefit]."*

Example: *"As a returning customer, I want to save my shipping address so that checkout is faster."*

🚨 **NOT in Scrum Guide.** This is a common practice from Mike Cohn / XP. The exam may reference it but won't require this format.

### Acceptance Criteria
Specific conditions for a story to be acceptable:
- "Given... When... Then..." (Gherkin format)
- Or just bullet checklist

---

## 🔄 Refinement & Estimation Together

The flow:
```
PO writes new PBI
    ↓
Team reviews in refinement
    ↓
Discuss & ask questions
    ↓
Add/clarify acceptance criteria
    ↓
Estimate (e.g., story points)
    ↓
PO orders backlog
    ↓
Top items are "ready" for Planning
```

🎯 **Exam pattern:** "Who estimates?" → **Developers** (always).

---

## ⚖️ Done vs Releasable

**Done** ≠ **Released**.

A PBI is **Done** when it meets the DoD. The Increment is **releasable** anytime — but doesn't have to be released. The PO decides.

- Done + Released? Often, but not always.
- Done + Not Released? Yes, if PO chooses to bundle releases.
- Released but not Done? **Never.** Don't do this.

🎯 **Exam pattern:** "When must an Increment be released?"
- Answer: **Never required to be released. Must be releasable.**

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| Story points = hours | They're relative complexity, not time |
| Velocity is performance | It's a planning tool |
| Done means released | Done means meets DoD; release is separate |
| Definition of Ready is required | NOT in Scrum Guide |
| Velocity comparable across teams | NO — story points are team-relative |
| Burndown is required | NOT in Scrum Guide; just a common tool |

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **Definition of Done (DoD)** | Quality checklist for all Increments |
| **Definition of Ready (DoR)** | Optional pre-Sprint criteria; NOT in Scrum Guide |
| **Story Points** | Relative complexity estimate |
| **Velocity** | Average story points/Sprint; planning tool only |
| **Planning Poker** | Group estimation technique |
| **Burndown Chart** | Remaining work over time (optional tool) |
| **INVEST** | User story quality criteria (not in Scrum Guide) |
| **Releasable** | Increment ready to ship (PO decides if/when) |

---

## ✅ Module 6 Summary

You now know:
- ✅ DoD: created by Devs/org, can evolve, lowers = bad
- ❌ DoR: NOT in Scrum Guide
- 📊 Story points: relative, not time
- 📈 Velocity: planning tool, NOT a performance metric
- 🚫 Velocity comparing teams = bad
- 🔥 Burndown/burnup: optional transparency tools
- 🎯 Done ≠ Released

**Next:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 7: Servant Leadership](../Module-07-Servant-Leadership/Reading.md)
