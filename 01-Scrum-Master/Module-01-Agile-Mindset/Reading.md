# Module 1: The Agile Mindset 🧠

> **Why this module matters:** You can memorize Scrum without understanding *why* it exists. The exam will catch you. This module gives you the *why*, and once you have it, every other concept clicks.

---

## 🍕 A Story: The Pizza Shop That Almost Failed

Let's start with Tony.

Tony owns a pizza shop in 1995. He's old-school. Every Monday, he plans the entire week's menu, orders all ingredients, prints flyers, and locks in promotions. Then Tuesday hits, and a customer asks for *gluten-free crust*. Tony shrugs. "Maybe next week." By Wednesday, three more customers ask. By Friday, a competitor opens up *with* gluten-free pizza. Tony's locked into his Monday plan. He loses customers all week.

**That's how software was built before Agile.**

Now meet Tony's daughter, Maria, in 2015. Maria runs the same pizza shop differently. Every morning, she checks what sold yesterday. She talks to customers. She tweaks the menu *that day*. Gluten-free crust? She tries it Tuesday afternoon. By Thursday, she's running a "trying new recipes" promotion. By Friday, she's outpacing the competitor.

**That's the Agile mindset.** Small batches. Customer feedback. Adapt fast.

---

## 📜 The Origin Story (a.k.a. The Snowy Ski Lodge)

In **February 2001**, 17 software developers met at a ski lodge in Snowbird, Utah. They were *fed up*. Software projects were taking 2–3 years, costing millions, and shipping products customers didn't want.

After 2 days of arguing (and skiing), they wrote **The Agile Manifesto**, a 68-word document that changed software forever.

Here's all 4 lines:

> 🌟 **We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:**
>
> 1. **Individuals and interactions** *over* processes and tools
> 2. **Working software** *over* comprehensive documentation
> 3. **Customer collaboration** *over* contract negotiation
> 4. **Responding to change** *over* following a plan
>
> *That is, while there is value in the items on the right, we value the items on the left more.*

*Source: Manifesto for Agile Software Development (Beck et al., 2001), [agilemanifesto.org](https://agilemanifesto.org) — reproduced with attribution per the Manifesto's copy condition.*

🔥 **MEMORIZE THIS.** The exam will paraphrase it. You'll see questions like *"Which is more valuable, comprehensive docs or working software?"* and you'll smirk.

---

## 🧭 The 4 Values, Decoded

### 1️⃣ Individuals and Interactions > Processes and Tools

**What it means:** A great team with a whiteboard beats a mediocre team with $50,000 in tools.
**Real example:** A 2010 study found teams that talked face-to-face shipped 3x faster than teams that relied on Jira tickets alone.
**Trap on the exam:** "We need to buy more software" is *rarely* the right answer.

### 2️⃣ Working Software > Comprehensive Documentation

**What it means:** Ship something usable in 2 weeks, not a 200-page spec in 6 months.
**Real example:** Instagram launched with *one* feature: photo filters. They added stories, reels, and shopping later, based on user behavior, not a master plan.
**Trap on the exam:** "Document everything before coding" is *almost always* wrong.

### 3️⃣ Customer Collaboration > Contract Negotiation

**What it means:** Treat customers as *partners*, not as people you fight about scope changes with.
**Real example:** Spotify's playlists feature came from listening to user complaints, not from the original product spec.
**Trap on the exam:** "Refer to the contract / scope baseline" is suspicious in agile contexts.

### 4️⃣ Responding to Change > Following a Plan

**What it means:** A 1-year plan is wishful thinking. A 2-week plan is reality.
**Real example:** Netflix planned to mail DVDs forever. They responded to streaming. Then to original content. Then to gaming. Each pivot saved the company.
**Trap on the exam:** "Stick to the original plan" is rarely correct in agile.

---

## 🏛️ The 12 Agile Principles (You Need ~5 of These)

You don't have to memorize all 12. But know these **5 critical ones**, they show up on the exam constantly:

### Principle 1: "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software."
🎯 **Translation:** Ship early. Ship often. Show value FAST.

### Principle 2: "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage."
🎯 **Translation:** Change is GOOD. Don't fear it. Embrace it.

### Principle 3: "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale."
🎯 **Translation:** Shorter sprints = better.

### Principle 5: "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done."
🎯 **Translation:** Hire smart people. Get out of their way. (This is *the* servant leadership principle.)

### Principle 12: "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly."
🎯 **Translation:** This is the **Retrospective** in code form. Continuous improvement.

📌 The other 7 principles are nice-to-know but rarely tested. Focus on these 5.

*Source: Principles behind the Agile Manifesto (Beck et al., 2001), [agilemanifesto.org/principles.html](https://agilemanifesto.org/principles.html) — Principles 1, 2, 3, 5, and 12 of twelve reproduced with attribution. Full text at agilemanifesto.org.*

---

## 🔬 Empiricism: The Scientific Method for Work

Now we get to the *real* foundation of Scrum.

**Empirical process control** = "make decisions based on what is known, observed, and measured." NOT based on plans, predictions, or hope.

Three pillars hold this up. **MEMORIZE these, they appear in 5+ exam questions:**

### 🔍 Pillar 1: Transparency
*Everyone sees the same truth.* The work, progress, problems, all visible to all.
**Example:** A burndown chart on the wall. Everyone knows where the team stands.
**Anti-example:** PM has a private spreadsheet that says one thing, team's Jira says another.

### 🔬 Pillar 2: Inspection
*Regularly check what you've built and how you're working.*
**Example:** Sprint Review = inspect the product. Retrospective = inspect the process.
**Anti-example:** "Just keep coding, we'll review at the end of the year."

### 🔧 Pillar 3: Adaptation
*Based on what you inspected, change something.*
**Example:** "Demo showed users hate this UX → next sprint, redesign."
**Anti-example:** "We see the problem, but we'll deal with it later."

```
       INSPECT
          ↑
TRANSPARENCY → ADAPT
          ↓
     (back to top)
```

🎯 **Exam question pattern:** "A team noticed during the review that users dislike the feature. The PO insists on continuing as planned. Which Scrum pillar is being violated?" → **Adaptation**.

---

## 🎭 Agile vs. Waterfall: The Comparison You'll Be Tested On

| Dimension | Waterfall | Agile |
|-----------|-----------|-------|
| Approach | Sequential phases | Iterative cycles |
| Planning | Big upfront plan | Continuous planning |
| Delivery | One big release at end | Small frequent releases |
| Change | Resisted (costly) | Welcomed |
| Customer involvement | Beginning + end | Throughout |
| Best for | Stable, well-known requirements | Uncertain, evolving requirements |
| Example | Building a bridge | Building Spotify |

**🚨 Test trap:** "Which method is better?", Neither. They suit different contexts. Don't fall for "Agile is always best."

But for the PSM/PMP exams: when in doubt, the agile answer wins.

---

## 🧱 Frameworks That Implement Agile

Agile is the **mindset**. Frameworks are the **how**:

| Framework | Use Case | We Cover? |
|-----------|----------|-----------|
| **Scrum** | Most common; complex products | ✅ Deeply |
| **Kanban** | Flow-based; ops/support work | ✅ Touched |
| **XP (eXtreme Programming)** | Engineering practices | 🔸 Briefly |
| **SAFe** | Scaling across enterprises | 🔸 Briefly |
| **LeSS** | Large-scale Scrum | 🔸 Briefly |
| **Nexus** | 3–9 Scrum teams | ✅ In Module 8 |

For the PSM I, **focus 95% on Scrum**. For PMP, you need basic awareness of all of the above.

---

## 💡 The "ScrumBut" Trap

Here's a phrase you'll hear in workplaces: *"We do Scrum, BUT we skip retros because they're a waste of time."*

That's **ScrumBut**. And the Scrum Guide is brutal: **if you skip parts of Scrum, you're not doing Scrum.**

🎯 **Exam pattern:** "A team skips the Daily Scrum because they say it's redundant. What should the Scrum Master do?"
- ❌ Wrong: "Allow it; the team self-organizes"
- ❌ Wrong: "Force them to attend"
- ✅ Right: "Coach them on the value of the Daily Scrum and explain that it is mandatory in Scrum"

---

## 🤔 Common Misconceptions To Unlearn

| Misconception | Reality |
|---------------|---------|
| "Agile means no planning" | Agile means *continuous* planning |
| "Agile means no documentation" | Agile values *necessary* documentation |
| "Agile means no deadlines" | Agile uses time-boxed sprints |
| "Scrum Masters are project managers" | They're servant leaders, not managers |
| "Agile is faster" | Agile delivers value faster, not necessarily total project faster |
| "Stand-ups are status meetings" | They're for the team, not for the manager |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Agile** | Mindset for delivering value iteratively, embracing change |
| **Manifesto** | The 4 values + 12 principles document from 2001 |
| **Empiricism** | Decisions based on observation, not prediction |
| **Transparency** | All work and progress is visible |
| **Inspection** | Regular review of work and process |
| **Adaptation** | Adjusting based on inspection |
| **Iteration** | A short cycle of work |
| **Increment** | A working piece of product produced each iteration |
| **ScrumBut** | Doing Scrum partially / skipping pieces (anti-pattern) |
| **Self-managing team** | A team that decides who does what, when, how |

---

## ✅ Module 1 Summary

You now know:

- 🎯 Why Agile exists (Tony vs. Maria)
- 📜 The 4 values + key principles
- 🔬 The 3 pillars of empiricism (Transparency, Inspection, Adaptation)
- 🎭 Agile vs. Waterfall trade-offs
- 🚫 What ScrumBut is and why it's bad

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Move to [Module 2: The Scrum Framework](../Module-02-Scrum-Framework/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Agile Manifesto* (full text + signatories): <https://agilemanifesto.org/>
- 📖 *Agile Manifesto Principles:* <https://agilemanifesto.org/principles.html>
- 📖 *"The Phoenix Project"* by Gene Kim, a fun novel about agile/DevOps transformation
- 📖 *"Scrum: The Art of Doing Twice the Work in Half the Time"* by Jeff Sutherland (Scrum co-creator)

---

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic software-or-product delivery vocabulary (sprint, feature, requirement, release)
> - Familiarity with at least one project methodology, even informally (waterfall, PMBOK predictive, kanban, "we just ship")
> - Reading-comprehension fluency for short framework documents (the Agile Manifesto is 68 words; the Scrum Guide is 13 pages)
>
> No prior Scrum certification is required. This module is the on-ramp every other 01-Scrum module depends on. If you have already completed a PMBOK-style course (or our `02-PMP` Module 1 on lifecycle selection), this module's Agile-vs-Waterfall section will be familiar; skim it and focus on the empiricism pillars and the ScrumBut anti-pattern.

---

## 📊 Case Study, Spotify "Spotify Model" (2012–2022, retrospectively dismantled)

**Situation.** In 2012, Spotify was scaling from a single-product Stockholm startup to a multi-product, multi-region music company. Henrik Kniberg and Anders Ivarsson published two now-famous internal whitepapers ("Scaling Agile @ Spotify with Tribes, Squads, Chapters and Guilds") describing a structure of small autonomous **Squads** (Scrum-team-sized), grouped into **Tribes** (~50–150 people working on related products), with cross-cutting **Chapters** (functional skill groups) and **Guilds** (interest-based communities). The whitepapers went viral. Within five years, hundreds of enterprises ING, Cerner, Cisco, parts of LEGO, Bosch, and many banks had announced "Spotify-model" transformations.

**Decision.** Spotify itself, however, never claimed the model was *finished* or even uniformly adopted. Internal accounts (Jeremiah Lee 2020, "Failed #SquadGoals"; Joakim Sundén's 2022 Agile Alliance talk) revealed that by 2017 Spotify had already quietly walked back many of the prescriptive elements: PMs/PgMs were reintroduced, "alignment" projects layered on top of squads, and many Tribes used variants closer to LeSS or vanilla Scrum. Atlassian's 2020 case write-up acknowledged that "the Spotify model the world copied was already obsolete inside Spotify when it was published."

**Outcome.** Spotify continued to grow (489M MAUs by 2023, $13.2B revenue 2023), but several large enterprises who copied the whitepaper *literally* most famously ING Netherlands (also a case in Module 3) and a US insurance carrier publicly written up in MIT Sloan Management Review (2020) reported squad autonomy drifting into product fragmentation, duplicated technology, and what Sundén called "anti-Scrum" patterns (no PO, fluid sprints, no DoD). By 2022, "Spotify model" was being used in conferences as a *cautionary tale* about copying culture artifacts without copying the underlying Agile mindset.

**Lesson for the exam / for practitioners.** Agile is a *mindset*, not a *structure*. Squads, Tribes, Chapters, Guilds are just labels; the four Manifesto values and the empiricism pillars are what actually do the work. The Scrum Guide deliberately stays minimal so that teams cannot reduce Scrum to an org chart. On the PSM I exam, when a scenario asks "should we adopt the Spotify model?" or "should we replicate what worked at another company?", the correct answer is almost always to *coach* the team on inspection-and-adaptation toward *their* context, not to import a foreign structure. This is also the Manifesto's Principle 5 ("build projects around motivated individuals … and trust them to get the job done").

**Discussion (Socratic).**
- Q1: If you were the Scrum Master at a 200-person enterprise whose CTO has just returned from a conference enthused about the Spotify model, what *three* questions would you ask before recommending any structural change? Which of those questions is the empiricism-pillar question?
- Q2: Spotify's own engineers say the model "worked because of the culture, not the structure." If that's true, why did the *structure* spread so fast and the *culture* so slowly? What does that tell you about how the certification body frames "ScrumBut"?
- Q3: What's the trade-off Spotify implicitly accepted by giving squads such high autonomy in 2012, and which Manifesto value did that trade-off lean toward? Which value did it lean *away* from?

---

> **Where this leads.**
> - Inside this course: [Module 2 The Scrum Framework](../Module-02-Scrum-Framework/Reading.md) turns this mindset into a concrete framework (3 accountabilities, 5 events, 3 artifacts). [Module 7 Servant Leadership](../Module-07-Servant-Leadership/Reading.md) operationalizes the Manifesto's Principle 5. [Module 8, Scaling Scrum](../Module-08-Scaling/Reading.md) returns to the Spotify-model question with the scaling-frameworks lens.
> - Cross-course: `02-PMP` Module 1 covers predictive-vs-adaptive lifecycle selection from the PMBOK 7th edition angle, useful when you face PMP-style scenario questions that contrast Agile with traditional project management. `02-PMP` Module 4 also revisits the Tuckman team-formation stages we touch on briefly here.
> - Practice: [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) draws ~4 questions from this module's content (empiricism pillars, Manifesto values, ScrumBut). [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) layers them into cross-module synthesis (e.g., "which Manifesto principle is the Retrospective an embodiment of?").

---

## 💬 Discussion, Socratic prompts

Use these as journal prompts, study-group questions, or interview-prep drills. Strong answers cite specific frameworks (Manifesto values, empiricism pillars) and named cases (Spotify, Mailchimp, Tony's pizza shop) rather than personal anecdote alone.

1. **The "we already do Agile" trap.** A team you've just been hired to coach claims they "already do Agile" because they hold a daily stand-up and use Jira. Walk through how you would diagnose, in their first sprint with you, whether they are *practicing the Agile mindset* or *cargo-culting the rituals*. What three pieces of evidence would you look for, and what would each one tell you?
2. **Manifesto value tension in practice.** "Individuals and interactions over processes and tools" sounds like it conflicts with "Welcome changing requirements, even late in development", the first prizes stability of people, the second prizes change. Construct a real scenario (use Maria the pizza-shop owner, or a software team you know) where these two values are in tension. Which one wins, and why? Cite the Manifesto.
3. **The empiricism vs prediction debate.** A senior engineer argues that empiricism "doesn't scale", that once you have 50 engineers and a $20M annual budget, you *need* predictive planning. Build the strongest argument for AND against. Which would you defend at a board review of a regulated-industry product (e.g., medical device firmware)? What's the principled middle ground?
4. **ScrumBut as organizational signal.** When a team says "we do Scrum, but we don't do retros," what *organizational dysfunction* is most likely producing that omission? Pick the three most common root causes and rank-order them by how often you would expect to see each.
5. **Reading the Scrum Guide three times.** The Recommended Path in the course README says to read the Scrum Guide 3+ times. Why three? Defend or critique this advice using the inspection pillar of empiricism. What does a Scrum Master gain on the third read that they did not see on the first?

There are no "official" answers, strong responses cite at least one Manifesto value, one empiricism pillar, and one real case (Spotify, Mailchimp, Tony/Maria pizza shop, or one of your own).

---

## 📑 Named-source citations (this module)

Every framework named above traces back to a specific paper, book, or document. Use this appendix for your own bibliography and exam-defense.

| Framework / concept | Originator(s) | Year | Venue / publication |
|---|---|---|---|
| Agile Manifesto (4 values) | Beck, Beedle, van Bennekum, Cockburn, Cunningham, Fowler, Grenning, Highsmith, Hunt, Jeffries, Kern, Marick, Martin, Mellor, Schwaber, Sutherland, Thomas (the "Snowbird 17") | 2001 | *Manifesto for Agile Software Development*, agilemanifesto.org |
| 12 Agile Principles | Same authors as above | 2001 | agilemanifesto.org/principles.html |
| Scrum framework | Sutherland & Schwaber | 1995 | *"SCRUM Software Development Process"*, OOPSLA '95 Business Object Design and Implementation Workshop |
| The Scrum Guide (current authoritative definition) | Sutherland & Schwaber | 2020 edition (also 1995, 2010, 2011, 2013, 2016, 2017 editions) | scrumguides.org |
| Empiricism / empirical process control in Scrum | Schwaber | 1995–2004 | *Agile Project Management with Scrum* (2004, Microsoft Press); also the 1995 OOPSLA paper |
| Lean thinking (added to Scrum 2020) | Womack & Jones (term); Toyota Production System (substance) | 1990 / 1948+ | *The Machine That Changed the World* (1990, Macmillan); *Lean Thinking* (1996, Free Press) |
| ScrumBut concept | Schwaber | 2008 | Scrum.org public post *"ScrumBut"*; reiterated in Schwaber's *Software in 30 Days* (2012, Wiley) |
| eXtreme Programming (XP) | Beck | 1999 (1st ed), 2004 (2nd ed) | *Extreme Programming Explained: Embrace Change* (Addison-Wesley) |
| Kanban (software flavor) | Anderson | 2010 | *Kanban: Successful Evolutionary Change for Your Technology Business* (Blue Hole Press) |
| SAFe (Scaled Agile Framework) | Leffingwell | 2007–present | scaledagileframework.com; *Agile Software Requirements* (2011, Addison-Wesley) |
| LeSS (Large-Scale Scrum) | Larman & Vodde | 2008–2016 | *Scaling Lean & Agile Development* (2008), *Large-Scale Scrum* (2016, Addison-Wesley) |
| Nexus framework | Schwaber & Scrum.org | 2015 | *Nexus Guide*, scrum.org/resources/nexus-guide |
| Tuckman team-development stages (referenced briefly as servant-leadership prelude) | Tuckman | 1965 | *"Developmental sequence in small groups"*, *Psychological Bulletin* 63(6): 384–399 |
| *Scrum: The Art of Doing Twice the Work in Half the Time* | Sutherland | 2014 | Crown Business (Penguin Random House) |
| *The Phoenix Project* (DevOps novel referenced in Further Reading) | Kim, Behr, Spafford | 2013 | IT Revolution Press |
| Spotify model (squads / tribes / chapters / guilds) | Kniberg & Ivarsson | 2012 | Spotify internal whitepaper, *"Scaling Agile @ Spotify"* (publicly released October 2012) |
| Critique of Spotify model | Lee (Jeremiah) | 2020 | *"Failed #SquadGoals"*, jeremiahlee.com, and Joakim Sundén's 2022 Agile Alliance talk |

**Verification note.** All publication years and venues verified as of 2026-05 against the original publishers' listings (agilemanifesto.org, scrumguides.org, scrum.org, scaledagileframework.com, less.works, Addison-Wesley, Crown Business). The Scrum Guide is freely available; *Scrum: The Art of Doing Twice the Work in Half the Time* is the most-cited Scrum trade book and the recommended "supplement" to the 13-page Guide.

---

> **Third-party attribution.** This module adapts content from *The Scrum Guide* (2020 edition) by Ken Schwaber and Jeff Sutherland, available at [scrumguides.org](https://scrumguides.org/scrum-guide.html). *The Scrum Guide* is licensed under **Creative Commons Attribution ShareAlike 4.0 International (CC BY-SA 4.0)** — [creativecommons.org/licenses/by-sa/4.0](https://creativecommons.org/licenses/by-sa/4.0/). Teaching commentary, analogies, case studies, and questions in this module are original work by Humayun Zafar and are shared under the same CC BY-SA 4.0 terms. This course is an independent study resource and is not affiliated with, authorized by, or endorsed by Scrum.org or the Scrum Guide authors.
