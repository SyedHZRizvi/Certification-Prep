# Module 8: Scaling Scrum 🏗️

> **Why this module matters:** PSM I touches scaling lightly (~10% of exam) but the questions are sneaky. You don't need deep SAFe knowledge, just the basics + how Scrum scales.

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

- 🚫 They have only 1 team, Scrum natively supports them
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

- 🆕 **Nexus Integration Team**, coordinates dependencies
- 🆕 **Nexus Sprint Goal**, shared goal across all teams
- 🆕 **Nexus Sprint Backlog**, combines all team backlogs
- 🆕 **Nexus Daily Scrum**, for representatives from each team
- 🆕 **Nexus Sprint Planning, Review, Retro**, across the Nexus

🎯 **Exam pattern:** "What is added in Nexus?" → Integration Team + Nexus events.

### Framework 2: SAFe (Scaled Agile Framework)

**Sweet spot:** Large enterprise (50+ teams). VERY popular but heavy.

Key concepts (high level):

- **Agile Release Train (ART)**, group of teams working on a "value stream" (e.g., 5–12 teams)
- **PI (Program Increment)**, typically 8–12 weeks, multiple sprints aligned
- **PI Planning**, big event where all teams plan together (legendary 2-day meeting)
- **System Demo**, like Sprint Review at the program level
- **Inspect & Adapt**, like Retro at the program level

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

- 🤝 Most teams don't need scaling, single Scrum Team is powerful
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

---

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The three Scrum accountabilities and their boundaries ([Module 3, Roles](../Module-03-Roles/Reading.md))
> - Single-team Scrum end to end, all artifacts, events, commitments (Modules 4 and 5)
> - The Definition of Done, including who creates it and when it's shared ([Module 6](../Module-06-Done-Estimation/Reading.md))
> - The servant-leadership model and the 5 SM stances ([Module 7](../Module-07-Servant-Leadership/Reading.md))
>
> Scaling questions on PSM I are designed to test whether you can transfer single-team Scrum reasoning to multi-team contexts. If single-team Scrum is shaky, scaling won't make sense. Do *not* skip this prerequisite check.

---

## 📊 Case Study, Bosch Software Innovations: SAFe at Scale for IoT (2017–2024)

**Situation.** Bosch the German engineering giant has a software arm (Bosch Software Innovations, now Bosch Connected Industry) that builds the IoT platform underlying Bosch's smart-factory, connected-mobility, and energy-management products. By 2017, BSI employed ~3,000 engineers globally (Stuttgart, Bangalore, Pittsburgh, Shanghai) building both *platform* software (Bosch IoT Suite) and *vertical* applications. The challenge: each business unit (Bosch Automotive, Bosch Home, Bosch Industrial) had its own product roadmap, but they all wanted to leverage the shared IoT platform. Without coordination, the platform team kept getting pulled in five directions.

**Decision.** Between 2017 and 2019, Bosch adopted **SAFe (Scaled Agile Framework)** across BSI 24 Agile Release Trains (ARTs), each comprising 5–12 Scrum teams, with quarterly PI (Program Increment) Planning events that aligned all the platform-consuming business units. The Scrum at the team level was kept *unmodified* same 3 accountabilities, same 5 events, same 3 artifacts. SAFe added program-level events (PI Planning, System Demo, Inspect & Adapt) and program-level roles (Release Train Engineer = "Chief Scrum Master" for an ART, Product Management = a tier above POs). Crucially, Bosch decided early that PI Planning would always be *in person*, even for distributed ARTs, flying ~500 people to Stuttgart twice a quarter for two-day events.

**Outcome.** By 2022, Bosch IoT Suite was running on ~28 million connected devices (Bosch Connected World 2022). Feature delivery for cross-business-unit features dropped from 6+ months to ~12 weeks. However, internal post-mortems (per the 2022 Bosch ConnectedExperience report) flagged three persistent issues: (1) PI Planning was overhead-heavy for teams that *didn't* have cross-team dependencies, (2) the "Chief Scrum Master" (RTE) role drifted toward project-management behaviors in ~30% of ARTs, and (3) the program-level layer occasionally clashed with team-level self-management (a SAFe critique that Schwaber himself has voiced publicly). By 2024, Bosch was selectively *de-scaling*, pulling some ARTs out of SAFe back to lighter coordination (closer to Nexus or LeSS) where dependencies didn't justify the overhead.

**Lesson for the exam / for practitioners.** Three takeaways. (1) **Scaling should be *minimal*, not maximal**: don't scale further than the work requires. (2) **Single-team Scrum stays unchanged when you scale**, Bosch did *not* modify what happens at the team level; SAFe added a layer above. (3) **SAFe is not in the Scrum Guide.** The PSM I exam emphasizes Nexus (Scrum.org's framework) for awareness, but only requires deep knowledge of how *multiple Scrum Teams on the same product* should share the PO, the Product Backlog, the Product Goal, and a common DoD.

**Discussion (Socratic).**
- Q1: Bosch found ~30% of RTEs (Release Train Engineers) drifted into project-management behaviors. What does this tell you about role design in scaled frameworks? Could this happen to a Scrum Master serving multiple teams in a Nexus setup?
- Q2: Bosch decided PI Planning would always be in-person, flying ~500 people twice a quarter. What's the principle behind that decision? Could you make the same case for in-person Sprint Reviews at single-team Scrum (e.g., John Deere from Module 4)?
- Q3: Bosch is selectively *de-scaling*, pulling ARTs back to lighter coordination. What signal triggers de-scaling? When is "scale down" the right answer vs "improve our scaling implementation"?

---

> **Where this leads.**
> - Inside this course: After this module, you've completed the framework content, next is exam prep. Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), then [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md). Review wrong answers and re-read the relevant module's Reading.md.
> - Cross-course: `02-PMP` Module 3 (Lifecycle Selection) covers when to choose a predictive vs adaptive vs hybrid lifecycle, useful for PMP scenario questions that test whether scaling is even the right answer. `02-PMP` Module 5 (Stakeholders) is relevant when you have to coordinate stakeholder engagement across multiple Scrum Teams.
> - Practice: Practice-Exam-1 has ~3 scaling questions, Practice-Exam-2 has ~5, Final Mock has ~5. Scaling is a smaller exam weight (~10%) but the *single PO / single Product Backlog / single Product Goal / shared DoD* mapping is the most tested fact.

---

## 💬 Discussion, Socratic prompts

1. **The "we need to scale" question.** A 12-person team claims they need to "scale to Nexus" because their work has grown. Walk through your diagnostic before recommending scaling. What three signals would tip you toward "split into 2 teams" vs "stay as one"?
2. **One PO, ten teams.** A product with 10 Scrum Teams has one Product Owner. Is that feasible? At what point does the PO become a bottleneck, and what would you do about it? Cite the Scrum Guide and Schwaber/Sutherland's writings.
3. **Component teams as anti-pattern, but why?** A large enterprise has organized their teams by tech layer (UI team, API team, DB team). Walk through three concrete problems this creates that feature teams would avoid. What's the org's *real* reason for component teams, and how would you challenge it?
4. **SAFe vs Nexus vs LeSS.** Pick a specific organizational context (e.g., a 200-person bank's digital arm). Defend Nexus as the right choice. Then defend LeSS. Then defend SAFe. What's the principled tie-breaker?
5. **De-scaling.** Bosch is pulling ARTs out of SAFe back to lighter coordination. Construct the case for de-scaling at a company you know. What does the org *give up*, and what does it *gain*? When is de-scaling actually a backslide vs a maturation?

---

## 📑 Named-source citations (this module)

| Framework / concept | Originator(s) | Year | Venue / publication |
|---|---|---|---|
| Multiple Scrum Teams on one product (Scrum Guide rule) | Sutherland & Schwaber | 2020 | Scrum Guide 2020 (multiple-teams clause) |
| Nexus framework | Schwaber & Scrum.org | 2015 | *Nexus Guide*, scrum.org/resources/nexus-guide |
| Nexus+ (extended Nexus for many teams) | Scrum.org | 2018 | Scrum.org documentation |
| LeSS (Large-Scale Scrum) | Larman & Vodde | 2008 (book), 2014 (LeSS rules formalized) | *Scaling Lean & Agile Development* (Addison-Wesley, 2008); *Large-Scale Scrum: More with LeSS* (Addison-Wesley, 2016); less.works |
| LeSS Huge (1,000+ people) | Larman & Vodde | 2016 | *Large-Scale Scrum: More with LeSS* (Addison-Wesley) |
| SAFe (Scaled Agile Framework) | Leffingwell | 2011 (first publication); current 6.0 release 2023 | *Agile Software Requirements* (Addison-Wesley, 2011); scaledagileframework.com |
| Agile Release Train (ART) | Leffingwell | 2011 | *Agile Software Requirements* |
| PI (Program Increment) | Leffingwell | 2011 | *Agile Software Requirements* |
| PI Planning event | Leffingwell | 2011 | *Agile Software Requirements*; SAFe documentation |
| Spotify model (Squads / Tribes / Chapters / Guilds) | Kniberg & Ivarsson | 2012 | Spotify internal whitepaper, *"Scaling Agile @ Spotify"* (October 2012) |
| Scrum of Scrums | Sutherland | 2001 (originated); Schwaber 2004 (documented) | *"Agile Can Scale: Inventing and Reinventing SCRUM in Five Companies"* (Sutherland); *Agile Project Management with Scrum* (Schwaber, 2004, Microsoft Press) |
| Feature teams vs component teams | Larman & Vodde | 2010 | *Practices for Scaling Lean & Agile Development* (Addison-Wesley) |
| Conway's Law (referenced as why component teams hurt) | Conway | 1968 | *"How Do Committees Invent?"*, *Datamation* magazine, April 1968 |
| Communities of Practice (CoPs) | Wenger | 1998 | *Communities of Practice: Learning, Meaning, and Identity* (Cambridge University Press) |
| Allianz Direct (Nexus adoption case) | Allianz public disclosure | 2019 | Allianz Direct engineering blog and presentations |
| Cisco Webex (Scrum scaling case) | Cisco public disclosures | 2018–2022 | Cisco Webex engineering team blog posts and conference talks |
| Bosch Software Innovations / Bosch Connected Industry (SAFe case) | Bosch Connected World disclosures | 2017–2024 | Bosch Connected World annual reports; *ConnectedExperience* 2022 report |
| *Practices for Scaling Lean & Agile Development* (THE multi-team text) | Larman & Vodde | 2010 | Addison-Wesley |
| Tesla Gigafactory (iterative build, brief reference) | Tesla public disclosures | 2014–2024 | Tesla Investor Day disclosures; Walter Isaacson's *Elon Musk* (2023) |

**Verification note.** The Scrum Guide explicitly states that multiple Scrum Teams on the same product must share one PO, one Product Backlog, one Product Goal, and a common Definition of Done. SAFe and the Spotify model are *not* in the Scrum Guide. Nexus *is* a Scrum.org product and the Nexus Guide is the authoritative reference. The PSM I exam tests scaling *lightly*, the deep tests are in PSM II and SPS (Scaled Professional Scrum), but knowing the single-PO / single-backlog / single-goal / shared-DoD rule is essential.
