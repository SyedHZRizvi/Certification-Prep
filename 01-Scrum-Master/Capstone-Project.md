# Capstone Project — Scrum Master (PSM I)

> **For students who have completed Modules 1–8 and at least one Practice Exam.** This capstone is a self-directed, scenario-based project that integrates ~75% of the course's content into a single deliverable. It is *not* part of the PSM I exam — it's how you prove to yourself (and a future employer) that you can *do* the work, not just pass the test.

---

## 📋 Brief

You've been hired as the new Scrum Master at **Helix HQ**, a 70-person SaaS startup based in Austin, Texas that builds workflow-automation software for mid-market accounting firms. Helix has been around for 4 years and shipped a successful product, but the engineering org is in trouble:

- They adopted "Scrum" two years ago after reading *Scrum: The Art of Doing Twice the Work in Half the Time*. There are now 7 product teams (5–8 people each), each with a "Product Owner" and a "Scrum Master" (often part-time, often the team's tech lead wearing two hats).
- **Velocity has been dropping** team-on-team for 6 consecutive Sprints. The Engineering VP has noticed.
- **Retrospectives have become "ScrumBut"** — most teams hold them, but action items rarely translate into behavior change. The team rolls forward the same impediments Sprint after Sprint.
- **The CTO is publicly questioning Agile.** At the last all-hands, she said: "I'm starting to wonder if Scrum was a $2M mistake. We were faster before."
- The previous Scrum Master (a former PM) left 3 weeks ago after burning out.

You have **90 days** to diagnose what's actually wrong, intervene, and demonstrate measurable improvement before the CTO holds her quarterly board meeting (Day 91).

Your budget for tooling, training, and outside coaching is **$15,000**. You report to the Engineering VP (not the CTO). You can talk to anyone in the company, but you cannot fire, demote, or reassign anyone. The Scrum Master role is yours to shape — there is no job description handed to you.

---

## 🎯 Deliverables (6 artifacts)

Each of these is a real document a working Scrum Master would produce. You will create all six, in order, as you progress through the 90 days.

### 1. Team-Health Assessment (one document, ~3 pages)

A diagnosis of where each of the 7 teams stands. For each team, score:

- **Adherence to Scrum framework** (0–5 scale): Are they holding all 5 events at proper timeboxes? Do they have a clear Product Goal + Sprint Goals + DoD? Are they self-managing?
- **Empiricism in practice** (0–5): Are Transparency, Inspection, Adaptation visible? Or is it ceremony Scrum?
- **The 5 Values** (0–5 for each of F-CCRO): Where does each team show or lack the Focus, Commitment, Courage, Respect, Openness pattern?
- **Top 3 impediments** (named, not vague): What's the *specific* blocker?
- **Quick wins** (1–2 per team): What would change in the next 2 Sprints?

The assessment should reveal *patterns* — not just team-by-team scores. Look for: Are the same anti-patterns repeating across teams (e.g., proxy POs, missing Retros, "Definition of Done" that's actually "Definition of Maybe")? What does that tell you about the organization?

**References from the course:** Module 1 (empiricism diagnostic), Module 3 (role anti-patterns), Module 5 (artifact health), Module 7 (SM stances).

### 2. Impediment Register (5 named impediments + mitigations)

From the assessment, pick the FIVE most impactful impediments across the org. For each, document:

| Impediment | Type | Affected teams | Root cause | Mitigation | Owner | Target date |
|---|---|---|---|---|---|---|
| (named) | Team / Bridging / Org | (which) | (5 Whys) | (action) | (you / a team / a leader) | (sprint+#) |

The "Type" column maps to Module 7's three levels: within team / between team and org / org-wide. Your mitigation must respect the level — you cannot directly *solve* Level 3 impediments alone; you can only *influence*. Be honest about what's within and beyond your authority.

**References:** Module 7 (impediment levels, 5 Whys, GROW model).

### 3. Retrospective-Format Experimentation Plan (5 Sprints)

The retros are stale. Design a 5-Sprint experiment that tests different formats and measures whether action items convert into behavior change. For each Sprint:

- Format: ("4Ls" / "Sailboat" / "Start-Stop-Continue" / "5 Whys deep-dive" / "Liberating Structures 1-2-4-All" / etc.)
- Hypothesis: What you expect each format to reveal that others won't
- Metric: How you'll know if it worked (action-item completion rate? team energy? specific impediment resolved?)
- Decision rule: Continue or switch?

This is the empirical method applied to your own practice. Don't pick formats randomly — choose them to test specific hypotheses about why the current retros aren't working.

**References:** Module 4 (Retrospective purpose), Module 1 (empiricism pillars), Derby & Larsen *Agile Retrospectives* (2006).

### 4. Definition-of-Done Workshop Plan (one workshop, ~90 minutes, for all 7 teams aligned)

Currently, each team has its own DoD, and they're inconsistent. You suspect this is a major source of integration friction (teams ship "Done" work that others can't build on). Design a 90-minute workshop that:

- Brings representatives from all 7 teams together
- Surfaces the current per-team DoDs
- Negotiates a shared MINIMUM DoD that *every* team agrees applies to *every* PBI
- Leaves room for each team to add team-specific items on top
- Produces a single, posted, signed-by-everyone DoD by the end

Include: agenda, facilitation patterns you'll use, what success looks like, how you'll handle the inevitable disagreement (some team will want a *much* tighter DoD than others). The output of the workshop is a one-page shared DoD document.

**References:** Module 5 (DoD purpose), Module 6 (DoD evolution), Module 8 (shared DoD across teams), Lipmanowicz & McCandless *Liberating Structures* (for facilitation patterns).

### 5. Scaled-Scrum Recommendation Memo (~2 pages, to the Engineering VP)

After 60 days, you have a view: should Helix's 7 teams stay as independent teams, adopt Nexus, adopt LeSS, adopt SAFe, or — possibly — de-scale (combine some teams back into one)? Write a 2-page memo to the Engineering VP that:

- Names the recommendation up front (one sentence, in bold, on page 1).
- Justifies it with *evidence from your assessment* (which impediments would scaling address? which would it not?).
- Acknowledges the alternative (the most-likely counter-proposal — usually SAFe, because it's the loudest) and explains why your recommendation wins for *this* org.
- Estimates cost (tooling, training, time-to-value) and risk.
- Lists 3–5 things the org must commit to before scaling (one PO per product, shared DoD, aligned cadence, etc.).

The Bosch case (Module 8) is your reference for scaling *and* de-scaling: scaling is justified when cross-team dependencies are real and large; otherwise it's overhead. If Helix's 7 teams are actually working on 4 *different* products, the answer might be "you don't need scaling — you need 4 small Scrum implementations."

**References:** Module 8 (scaling frameworks), Module 3 (one PO per product), the Bosch + Spotify + ING case studies.

### 6. Board-Readable Metrics Report (one page, for the CTO's board meeting)

The CTO has lost confidence in Agile. Your final deliverable is a one-page metrics report she can hand to the board. Choose metrics that:

- Are *team-level*, not individual (per Module 6's velocity warnings)
- Connect to *value delivered*, not activity volume
- Are honest — if things have not improved, say so

Suggested metrics:

- **Cycle time** (idea → live) per team, with trend
- **Throughput** (items delivered per Sprint), with trend
- **Sprint Goal achievement rate** (% of Sprints where the goal was met)
- **Team eNPS / team-health survey scores**, with trend (anonymous, voluntary)
- **Customer-reported quality** (defect escape rate, NPS, CSAT) — pre and post your 90 days

You may also include qualitative signals: a representative quote from a team retro, a stakeholder testimonial, a before/after screenshot of a team's board.

The CTO does NOT want vanity metrics (lines of code, hours worked, velocity-as-target). She wants *evidence* the org is heading in the right direction. If the evidence is mixed, present it honestly with a forward plan.

**References:** Module 6 (velocity misuse), Module 1 (empiricism), Sutherland's "Hyperproductive Development" paper for cycle-time framing.

---

## 📊 Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|---|---|---|---|---|
| **Team-health assessment** | 15 | Clear patterns named; quantitative + qualitative blended; reveals systemic issues beyond per-team failures | Solid per-team scores; some pattern recognition | Per-team checklist only; no systemic insight |
| **Impediment register** | 15 | 5 named impediments with credible root causes (5 Whys applied); mitigations match the impediment level; owner and date for each | Some impediments well-defined; others vague | Generic impediments ("communication," "tooling") without root cause |
| **Retro experimentation plan** | 15 | 5 Sprints, 5 distinct formats with named hypotheses and measurable success criteria; decision rules clearly stated | Plan exists with formats, but hypotheses/criteria weak | Just a list of formats with no test design |
| **DoD workshop plan** | 15 | 90-min agenda, facilitation patterns named, disagreement-handling planned, one-page shared DoD produced | Agenda exists; facilitation underspecified | Just an agenda with no facilitation thought |
| **Scaling recommendation memo** | 20 | Clear bold recommendation; evidence-backed; alternatives addressed; commitments enumerated; budget/risk estimated | Recommendation made, justification thin | Generic "we should adopt [framework]" without context |
| **Board-readable metrics report** | 20 | One page, team-level + value-connected metrics; honest about mixed results; forward plan included | Metrics shown but mix of vanity + real | Vanity metrics dominate; misleading framing |

**Passing capstone:** 70+. **Excellent:** 90+.

---

## 🗓️ Suggested timeline (12 weeks)

- **Weeks 1–2:** Listening tour. Talk to all 7 teams, the CTO, the VP, 3 customers. Attend at least one Daily and one Retro per team. Don't fix anything yet.
- **Weeks 3–4:** Produce Deliverable 1 (Team-Health Assessment). Share with VP only — not yet with teams.
- **Weeks 5–6:** Produce Deliverable 2 (Impediment Register). Start working on Level 1 (within-team) impediments yourself. Surface Level 2 and 3 to the VP.
- **Weeks 7–8:** Produce Deliverable 3 (Retro Plan). Start running new formats. Produce Deliverable 4 (DoD Workshop) and run it.
- **Weeks 9–10:** Measure results from new retro formats and new DoD. Adjust. Begin Deliverable 5 (Scaling Memo).
- **Weeks 11–12:** Finalize Deliverable 5 + Deliverable 6 (Board Metrics Report). Present to VP first, then to CTO.

This timeline is **demanding** by design — a real 90-day SM engagement is roughly this paced. Adjust if you're doing this part-time alongside studying.

---

## 📂 What "submission" looks like

This is a self-study capstone. There is no instructor to grade. Instead:

- Produce all 6 deliverables as if they were real work artifacts.
- Format them like business documents (not academic papers): clean tables, one-page where prescribed, decision-makers in mind.
- Use Markdown, Google Docs, Notion, or whatever fits your workflow.
- Self-grade against the rubric. Be honest with yourself.
- (Optional but recommended) Find a study partner or current Scrum Master willing to give you 30 minutes of feedback on Deliverable 5 and 6. These are the highest-stakes documents.

The capstone is also an interview portfolio — bring it to your next SM job interview. Hiring managers love seeing a candidate who has *applied* the framework, not just studied it.

---

## 🎯 Optional stretch goals

- **Stretch 1: Run a real Retrospective for someone.** Find a friend's team, a volunteer org, or a hackathon team and offer to facilitate a Retrospective. Apply one of your planned formats. Reflect: how did it differ from your plan?
- **Stretch 2: Cost-justify the engagement.** Write a 1-page CFO-targeted document that estimates Helix's *return on the Scrum Master investment*. What's the dollar value of the impediments you would remove? What's the implied ROI on your $15K budget?
- **Stretch 3: Compare two scaling frameworks.** Beyond Deliverable 5, write a 1-page comparison of Nexus vs LeSS for Helix. Which fits better, and why? Reference the Module 8 case studies (Bosch SAFe, Allianz Direct Nexus, ING) for evidence.
- **Stretch 4: Build the dashboard.** Build (in any tool — Notion, Looker Studio, Tableau) the actual dashboard you'd hand the CTO. Make it click-through.

---

## 🔗 Cross-references back to the course

The capstone touches:

- **Module 1** — Diagnosing whether the org has the Agile mindset or just rituals (cargo-cult Scrum)
- **Module 2** — Recognizing whether teams use the framework as written or have invented their own variant (ScrumBut)
- **Module 3** — Identifying proxy POs, SM-as-PM patterns, and Developer self-management gaps
- **Module 4** — Diagnosing event timeboxes, attendees, and purposes (especially Daily Scrum and Retro)
- **Module 5** — Auditing artifact-commitment pairings; assessing whether Product Goal, Sprint Goals, DoD exist
- **Module 6** — Diagnosing velocity misuse; designing a shared, evolving DoD
- **Module 7** — The entire SM behavior model — your 90 days *are* a sustained exercise in servant leadership
- **Module 8** — Deciding whether to scale, stay flat, or de-scale

It also draws on the named case studies: **Spotify** (be cautious about copying structure), **Salesforce ADM** (synchronized cadence can enable self-management at scale), **ING Netherlands** (dual career ladder), **John Deere** (Sprint Reviews on actual artifacts), **GE Aviation** (DoD encoding regulatory requirements), **Microsoft Windows 7** (strict DoD enables speed), **Bosch** (scaling and de-scaling).

The Recommended-Readings appendix ([Recommended-Readings.md](./Recommended-Readings.md)) lists the canonical references you'll want at hand: Cohn's *Agile Estimating and Planning*, Adkins' *Coaching Agile Teams*, Derby & Larsen's *Agile Retrospectives*, Larman & Vodde's *Practices for Scaling Lean & Agile Development*.

---

## 🏆 What completing this capstone tells you

If you can produce all 6 deliverables at "Acceptable" or above:

- You can *diagnose* a struggling Scrum implementation.
- You can *intervene* with appropriate scope-aware actions.
- You can *measure* whether your interventions worked.
- You can *communicate* upward (to a board) and outward (to teams).

That's the actual job of a Scrum Master. The PSM I exam tests whether you know the framework; this capstone tests whether you can use it.

Good luck.
