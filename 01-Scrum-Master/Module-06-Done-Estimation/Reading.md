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

---

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The three Scrum artifacts and their commitments — especially the Increment → DoD pairing ([Module 5](../Module-05-Artifacts/Reading.md))
> - Who owns what: Developers own the Sprint Backlog and *estimate*, PO orders the backlog ([Module 3](../Module-03-Roles/Reading.md))
> - The Sprint timebox and its rules (no scope changes that endanger the Sprint Goal, quality does not decrease) — [Module 4](../Module-04-Events/Reading.md)
>
> The Scrum Guide is deliberately silent on *how* to estimate, but the exam tests several common techniques as exam-trap concepts ("Velocity is NOT in the Scrum Guide"). Make sure you know which terms are *Scrum Guide* vs *common practice*.

---

## 📊 Case Study — Microsoft Windows: Scrum Adoption (2008–2014, Sinofsky era)

**Situation.** By 2007, Microsoft's Windows division had become the textbook case of how *not* to ship software. Windows Vista (released January 2007 after multiple delays) was widely viewed as a quality disaster — laptops shipped with "Vista-capable" stickers that mid-tier hardware couldn't actually run, OEM complaints, customer backlash, and a 5-year gap since Windows XP. Senior VP Steven Sinofsky (who had transformed Office's engineering after Office XP) was named president of Windows in late 2006 and inherited a team of ~7,000 engineers organized into functional silos with no shared release cadence.

**Decision.** Between 2008 and 2010, Sinofsky's leadership team restructured Windows engineering around feature crews of ~20–40 engineers (dev + test + PM disciplines, a "three-amigos" pattern) operating on synchronized milestones with explicit Definition of Done gates. Each milestone (M1, M2, M3, beta, RC) had a published quality bar that *no* feature could ship past without meeting. The new DoD included: code reviewed, automated tests passing (Microsoft's enormous internal test infrastructure), performance benchmarks met, security review passed, accessibility compliance, and localization-ready. Sinofsky famously enforced the "no exceptions" rule on milestone DoD — features that missed the bar were cut, not deferred.

**Outcome.** Windows 7 shipped October 2009 — 32 months after Vista, and considered the most successful Windows release since XP. Customer satisfaction (per Forrester/Net Promoter measurement) rose dramatically. Windows 8 shipped on schedule October 2012 (though the UX was controversial — a different debate). The "Scrum + milestone DoD" approach became Microsoft's de facto standard, propagating into the Azure division (which adopted full Scrum 2010–2012) and eventually into Office 365. Sinofsky's 2014 essay *"One Strategy"* and Pete Brown's internal write-ups documented the transition; Sutherland used Windows 7 as a case in his 2014 book.

**Lesson for the exam / for practitioners.** Three takeaways. (1) **A strict, non-negotiable DoD is what *enables* speed**, not what slows it down — Windows 7 shipped faster than Vista despite a tighter quality bar. (2) **Estimation is the developers' job**, not the PO's: Microsoft moved to story-point estimation done by the feature crews, with PO-equivalents (PMs) accepting estimates rather than dictating dates. (3) **Velocity is a forecasting tool, not a goal**: when a Microsoft division tried to *target* a velocity number in 2011, quality regressed within two sprints and they reverted to using velocity for forecasting only.

**Discussion (Socratic).**
- Q1: Sinofsky enforced "no exceptions" on milestone DoD — features that missed the bar were cut. What's the strongest argument that this *violates* the Scrum Guide (which says scope can flex, but Sprint Goal stays)? What's the strongest defense?
- Q2: Why did targeting a velocity number cause quality to regress? Walk through the mechanism step by step — what does the team optimize for instead of value?
- Q3: Microsoft used story points sized 1, 2, 3, 5, 8, 13, 20. Why not 1, 2, 3, 4, 5? What's the principle behind the Fibonacci-like scale, and what would you lose by using linear scales?

---

> **Where this leads.**
> - Inside this course: [Module 7 — Servant Leadership](../Module-07-Servant-Leadership/Reading.md) covers the SM behaviors needed to coach a team toward stricter DoD without crushing morale. [Module 8 — Scaling](../Module-08-Scaling/Reading.md) covers the shared-DoD requirement when multiple teams ship one product.
> - Cross-course: `02-PMP` Module 8 (Quality Management — control charts, Pareto, cost of quality) covers the predictive counterpart to DoD. `02-PMP` Module 6 (Schedule Management — three-point estimation, PERT, critical path) covers predictive estimation as the foil to Scrum's deliberate silence on estimation method.
> - Practice: Practice-Exam-2 has ~8 questions on DoD, estimation, velocity. Final Mock has ~6. DoD/estimation traps are common — they test whether you know which terms are *Scrum Guide* vs *common practice*.

---

## 💬 Discussion — Socratic prompts

1. **The "DoD is too strict" complaint.** A new team complains the org-mandated DoD takes 30% of their Sprint capacity to satisfy. They want to relax it temporarily. What's the SM's correct coaching response, and what's the *systemic* issue that's actually being surfaced?
2. **Velocity comparison.** A VP wants to publish team velocities on a dashboard for "transparency." Walk through the conversation you'd have with the VP. What's the harm? What alternative metrics would you propose, and why? Cite Cohn's *Agile Estimating and Planning* (2005) if helpful.
3. **Story points or hours?** A team estimates in hours because "story points are too abstract." Defend hours-based estimation, then defend story-point estimation. Which is *more accurate* in practice, and which is *more useful* for planning? Are those the same question?
4. **DoR (Definition of Ready) as ScrumBut?** The Scrum Guide doesn't mention Definition of Ready. Many teams use it anyway. Is DoR ScrumBut? When is it useful, and when does it become a Waterfall-style gate?
5. **#NoEstimates.** Vasco Duarte's #NoEstimates movement argues that estimation itself is the waste. Defend that position. What does a #NoEstimates team lose, and what do they gain? Could a Scrum team be #NoEstimates while still being compliant with the Scrum Guide? (Yes — explain why.)

---

## 📑 Named-source citations (this module)

| Framework / concept | Originator(s) | Year | Venue / publication |
|---|---|---|---|
| Definition of Done | Schwaber | 2002 | *Agile Software Development with Scrum* (Schwaber & Beedle, Prentice Hall) |
| Definition of Ready (NOT in Scrum Guide) | Cohn | 2014 (formal naming) | Mountain Goat Software blog, mountaingoatsoftware.com; commonly traced to Boris Gloger |
| Story points (relative-sizing technique) | Beck | 1999 (originated in XP) | *Extreme Programming Explained* (Addison-Wesley) |
| Planning Poker | Grenning | 2002 | James Grenning's *"Planning Poker"* article, renaissancesoftware.net |
| Fibonacci-like sizing scale | Cohn | 2005 | *Agile Estimating and Planning* (Mike Cohn, Prentice Hall PTR) — the canonical estimation reference |
| T-shirt sizing | Cohn | 2005 | *Agile Estimating and Planning* (also widely used in pre-Scrum estimation) |
| Affinity estimation | Cohn (popularized); Lowell Lindstrom (originated) | 2002–2005 | *Agile Estimating and Planning*; also Lindstrom's writings at the Object Mentor blog |
| Velocity (NOT in Scrum Guide) | Cohn | 2005 | *Agile Estimating and Planning* — Cohn defines velocity formally |
| Burndown chart (NOT in Scrum Guide) | Schwaber | 2004 (popularized) | *Agile Project Management with Scrum* (Microsoft Press) |
| Burnup chart (NOT in Scrum Guide) | Cohn (popularized) | 2005 | *Agile Estimating and Planning* |
| INVEST criteria for user stories (NOT in Scrum Guide) | Wake | 2003 | "INVEST in good stories" blog post, xp123.com |
| User-story format | Cohn | 2004 | *User Stories Applied* (Addison-Wesley) |
| #NoEstimates movement | Duarte | 2013 | Vasco Duarte's blog and 2015 book *#NoEstimates: How To Measure Project Progress Without Estimating* |
| Cone of Uncertainty (estimation theory) | Boehm; McConnell | 1981; 1996 | *Software Engineering Economics* (Boehm); *Rapid Development* (McConnell) |
| *Agile Estimating and Planning* — THE estimation reference | Cohn | 2005 | Prentice Hall PTR |
| Microsoft Windows 7 case | Sinofsky | 2009–2014 | Steven Sinofsky's *"One Strategy"* (Wiley, 2010); cited in Sutherland's *Scrum: The Art of Doing Twice the Work in Half the Time* (2014) |
| Sutherland's "Hyperproductive Development" paper (cited for Scrum velocity claims) | Sutherland | 2011 | *"The Scrum Papers"*, Sutherland & Schwaber, scruminc.com |

**Verification note.** The most important takeaway: **DoR, Velocity, Burndown/Burnup, Story Points, INVEST, and User-Story format are *not* in the Scrum Guide.** They are all common practice — many drawn from XP (Beck) or codified by Cohn. The PSM I exam explicitly tests whether you can distinguish *Scrum Guide content* from *common Scrum practice*. Cohn's *Agile Estimating and Planning* (2005) is the canonical reference outside the Guide.
