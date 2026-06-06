# PMP Module 7: Risk Management ⚠️

> **Why this module matters:** ~10-15 questions. Risk is heavily situational. The exam tests *how* you handle uncertainty in real project scenarios.

---

## 🎲 What Is Risk?

Per PMI:
> *"An uncertain event or condition that, if it occurs, has a positive or negative effect on one or more project objectives."*

Two key insights:

1. **Risk = uncertainty** (not a sure thing)
2. **Risks can be POSITIVE** (called "opportunities") or **NEGATIVE** (called "threats")

🎯 **Exam pattern:** "A team identifies a chance to deliver early and win a bonus. This is a:"
- ✅ **Risk (specifically, an opportunity)**

---

## 📋 The 6 Risk Management Processes

### 1. Plan Risk Management
- How you'll handle risk on this project
- Output: **Risk Management Plan**
- Defines: methodologies, roles, budgets, timing, categories

### 2. Identify Risks
- Find what could go right or wrong
- Tools: brainstorming, SWOT, expert judgment, checklists, Delphi
- Output: **Risk Register** (initial)

### 3. Perform Qualitative Risk Analysis
- Rank risks by **probability × impact** (P×I)
- Tools: P-I matrix, risk categorization
- Output: prioritized risks

### 4. Perform Quantitative Risk Analysis
- Numerically analyze high-priority risks
- Tools: Monte Carlo simulation, decision tree, EMV
- Output: numerical estimates of overall project risk

### 5. Plan Risk Responses
- Decide what to DO about each risk
- Tools: response strategies (next section!)
- Output: updated **Risk Register** with responses

### 6. Implement Risk Responses
- Execute the planned responses
- Output: change requests, project updates

### 7. Monitor Risks
- Track identified risks, find new ones
- Output: work performance information, change requests

🎯 **Exam pattern:** Often tests order: "First identify, then analyze, then plan responses, then implement."

---

## 📊 Probability-Impact Matrix

A 5×5 grid:

- 5 levels of probability (Very Low → Very High)
- 5 levels of impact (Very Low → Very High)
- Multiply to get a "risk score"

```
   Probability →
              VL  L  M  H  VH
   Impact
   VH         5  10 15 20 25 ← HIGH risks
   H          4   8 12 16 20
   M          3   6  9 12 15
   L          2   4  6  8 10
   VL         1   2  3  4  5
```

**Top-right** = high probability + high impact = **act NOW**.

---

## 🛡️ Risk Response Strategies

### For THREATS (Negative Risks):

| Strategy | What It Means | Example |
|----------|---------------|---------|
| **Avoid** | Eliminate the threat entirely | Cut risky scope |
| **Transfer** | Shift to a third party | Buy insurance, fixed-price contract |
| **Mitigate** | Reduce probability OR impact | Add testing, redundancy |
| **Accept** | Take the risk; have a plan B | Document; allocate contingency |
| **Escalate** | Risk is outside PM authority | Escalate to sponsor/program |

🧠 Memory: **A-T-M-A-E** ("Aunt Martha Eats Apples")

### For OPPORTUNITIES (Positive Risks):

| Strategy | What It Means | Example |
|----------|---------------|---------|
| **Exploit** | Make sure it happens | Add resources to ensure it |
| **Enhance** | Increase probability/impact | Improve conditions |
| **Share** | Partner with someone | Joint venture |
| **Accept** | Take advantage if it occurs | No active steps |
| **Escalate** | Outside PM authority | Escalate to sponsor |

🧠 Memory: **E-E-S-A-E** (or "Exploit, Enhance, Share, Accept, Escalate")

🎯 **Exam pattern (CRITICAL):** "PM identifies a regulatory risk. The penalty is huge but uncertain. PM decides to buy insurance. This is:"
- ✅ **Transfer**

---

## 🎯 Risk Categories (RBS - Risk Breakdown Structure)

Common categories:

- **Technical** — technology, complexity, performance
- **External** — regulations, market, weather
- **Organizational** — resources, funding, dependencies
- **Project Management** — estimating, planning, control

The RBS helps systematically identify risks.

---

## 💰 EMV (Expected Monetary Value)

**EMV = Probability × Impact**

Used in decision trees to choose between options.

### Example:

- Risk A: 30% chance of $100K loss → EMV = -$30K
- Risk B: 50% chance of $40K loss → EMV = -$20K

🎯 **Lower EMV (less negative) = better choice for threats.**

For opportunities:

- Opportunity X: 40% chance of $100K gain → EMV = +$40K
- Opportunity Y: 80% chance of $30K gain → EMV = +$24K

🎯 **Higher EMV = better choice for opportunities.**

### Decision Tree Example:
```
                    Decision: Build A or B?
                    /                    \
              Build A                  Build B
              /     \                  /      \
   Success(70%)  Fail(30%)    Success(80%)  Fail(20%)
   +$100K         -$30K         +$50K         -$20K
   
   EMV(A) = (0.7×100) + (0.3×-30) = 70 - 9 = +$61K
   EMV(B) = (0.8×50) + (0.2×-20) = 40 - 4 = +$36K
   
   → Choose A (higher EMV)
```

---

## 📋 Risk Register

The central document for all things risk:

- Risk ID
- Description
- Category
- Probability & impact
- Risk score
- Response strategy
- Owner
- Status

🎯 **Continuously updated** — not a one-time deliverable.

---

## 🎯 Risk Tolerances & Thresholds

### Key Concepts:

- **Risk Appetite** — overall willingness to take risk (org-wide)
- **Risk Tolerance** — acceptable variation around objectives
- **Risk Threshold** — specific limit (e.g., "don't accept >$10K risk per item")

🎯 **Exam pattern:** "A risk has been quantified at $50K. The org's risk threshold is $25K. Action?"
- ✅ **Plan a stronger response or escalate**

---

## ⚠️ Common Risk Anti-Patterns

- ❌ Identifying risks once and never updating
- ❌ Treating risk register as a checkbox
- ❌ Only focusing on threats, ignoring opportunities
- ❌ Confusing risk (uncertain) with issue (already happened)
- ❌ No risk owner — accountability vacuum

---

## 🆘 Risk vs Issue

| Risk | Issue |
|------|-------|
| Future, uncertain | Currently happening |
| Has probability | Probability = 100% |
| Goes in Risk Register | Goes in Issue Log |
| Plan response | Resolve immediately |

🎯 **Exam pattern:** "A team member just quit. This is now:"
- ✅ **Issue** (it's happened)

If they were "thinking of quitting" → **risk**.

---

## 🌪️ Reserve Analysis

(Review from Module 3.)

- **Contingency Reserve** — for KNOWN risks (in cost baseline)
- **Management Reserve** — for UNKNOWN risks (sponsor controls)

🎯 As risks are mitigated/avoided, contingency can be released.

---

## 🔄 Risk in Agile

Agile handles risk DIFFERENTLY:

- 🔁 **Frequent iterations** = continuous risk reduction
- 🎁 **Working software each sprint** = early proof
- 👥 **Customer involvement** = catches risks early
- 📊 **Velocity & burndown** = transparency
- 🪞 **Retrospectives** = continuous improvement

🎯 In agile, risks are often "burned down" through iteration, not just analyzed in a register.

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **Risk** | Uncertain event with positive/negative effect |
| **Threat** | Negative risk |
| **Opportunity** | Positive risk |
| **Probability-Impact Matrix** | Risk ranking grid |
| **Risk Register** | Central risk document |
| **EMV** | Expected Monetary Value (P × Impact) |
| **Risk Appetite** | Overall willingness to take risk |
| **Risk Tolerance** | Acceptable variation |
| **Risk Threshold** | Specific limit |
| **Issue Log** | Already-happened problems |
| **5 Threat Strategies** | Avoid, Transfer, Mitigate, Accept, Escalate |
| **5 Opportunity Strategies** | Exploit, Enhance, Share, Accept, Escalate |

---

## ✅ Module 7 Summary

You now know:

- ⚠️ Risk = uncertain (positive or negative)
- 🛡️ 5 strategies for threats: Avoid, Transfer, Mitigate, Accept, Escalate
- 🎁 5 strategies for opportunities: Exploit, Enhance, Share, Accept, Escalate
- 💰 EMV = P × Impact
- 📋 Risk Register continuously updated
- 🆘 Risk (uncertain) vs Issue (happened)

**Next:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 8: Quality](../Module-08-Quality/Reading.md)

---

## 🎓 graduate-level professional Elevation Layer

### Prerequisites for this module

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - **Reserve Analysis distinctions** — Contingency vs Management Reserve (covered in [Module 03: Process Domain](../Module-03-Process-Domain/Reading.md)).
> - **Basic probability** — P × Impact = EMV. No formal stats background required.
> - **Optional cross-course preparation:** [13-ISM-CPSM Module 07: Risk & Compliance](../../13-ISM-CPSM/Module-07-Risk-Compliance-Ethics/Reading.md) covers strategic-sourcing risk frameworks that complement project risk.
>
> If any of these are shaky, pause and review before continuing.

### Where this leads

> **Where this leads.**
> - **Inside this course:** [Module 09 — Procurement](../Module-09-Procurement/Reading.md) extends risk-transfer through contract types; [Module 04 — Business Environment](../Module-04-Business-Environment/Reading.md) covers external environmental risks.
> - **Cross-course:** [13-ISM-CPSM Module 07](../../13-ISM-CPSM/Module-07-Risk-Compliance-Ethics/Reading.md) extends risk thinking to strategic-sourcing decisions; [09-CompTIA-Security-Plus](../../09-CompTIA-Security-Plus/Module-02-Cryptography-PKI/Reading.md) extends to security-risk frameworks (ISO 27005, NIST).
> - **Practice:** [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), and [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) each draw ~10–15 questions on Risk.

---

## 📊 Case Study — The Big Dig (Boston Central Artery/Tunnel Project, 1991–2007)

**Situation.** The Central Artery/Tunnel Project — universally known as "the Big Dig" — was a Massachusetts megaproject to bury Boston's elevated I-93 expressway, reconnect the city to its waterfront, and build the Ted Williams Tunnel under Boston Harbor. The original cost estimate at planning (1985) was approximately **$2.8 billion**. The project was managed by the Massachusetts Turnpike Authority (MassPike) with Bechtel/Parsons Brinckerhoff as the management-consultant joint venture. It was, at the time, the largest urban highway project in US history.

**Decision.** Project leadership made a series of risk-management choices that came under heavy post-mortem criticism: (1) the early geotechnical risk assessment didn't probabilistically model underground utilities, archaeological discoveries, or known contaminated soil — most were treated as known unknowns funded from a thin Contingency Reserve; (2) the safety-system design used epoxy-anchored ceiling panels in the I-90 connector tunnel — a design later identified by NTSB and Massachusetts Inspector General Greg Sullivan as inappropriate for the load and vibration environment; (3) political risk (federal funding clawback if the project missed milestones, schedule pressure to celebrate openings) was systematically under-weighted in the risk register; (4) Bechtel/Parsons's compensation structure created weak incentives to challenge cost-of-rework escalations.

**Outcome.** The project's final cost (when adjusted into 2007 dollars) was approximately **$14.6 billion** — about **190% over the original estimate** in real terms, and with interest costs adding further. Schedule slipped from a planned 1998 completion to 2007 (9 years late). On July 10, 2006, a 38-pound ceiling-panel fastener failed and dropped a concrete slab onto a vehicle in the I-90 connector tunnel, killing Milena Del Valle. The Massachusetts Attorney General's investigation (2007) and NTSB report (2007) found that the epoxy-anchor design was a known concern that had not been escalated or remediated. Bechtel and other parties paid ~$458M in settlements. Several state officials faced criminal charges. The Massachusetts Inspector General's 2008 report titled *A History of Central Artery/Tunnel Project Finances 1994–2008* is the canonical post-mortem.

**Lesson for the exam / for practitioners.** The Big Dig is on every PM curriculum because every PMBOK 7 risk principle was violated: **Probability × Impact** not rigorously quantified for low-probability/high-impact events (epoxy failure); **risk responses** weak (escalate, not avoid or mitigate, on the safety design); **risk owners** unclear; **risk reviews** were performative; **issue vs risk** confusion (a known concern about epoxy was treated as a risk, not as an issue to remediate, even after evidence of slippage was found in 1999). On the exam, the questions test exactly these distinctions: *"A team identified a low-probability/high-impact risk and accepted it without further analysis — what should the PM do?"* The Big Dig answer is: quantitative risk analysis (Monte Carlo, decision tree), explicit risk owner, and an escalation path that exists in writing — not in hallway conversation. **Acceptance is a defensible strategy only when it's documented and conscious; it is malpractice when it's a default.**

**Discussion (Socratic).**
- Q1: The epoxy-anchor concern was raised internally in 1999 and not remediated until after the 2006 fatality. Whose responsibility was that risk? Defend a position citing PMBOK 7's Stewardship principle and the Code of Ethics' Responsibility value.
- Q2: Mega-projects systematically under-estimate low-probability/high-impact risks (Flyvbjerg's "fat-tail" research, 2014). Design a risk-management process that resists this bias — what specific Monte Carlo + scenario-planning + red-team rituals would you embed?
- Q3: Bechtel/Parsons's compensation structure weakened incentives to escalate cost growth. How do you, as PM, negotiate a vendor contract that aligns incentives toward truthful risk reporting? Cite Module 09's contract-type discussion.

---

## 💬 Discussion — Socratic prompts

1. **Threat strategy selection.** A $2M risk has 40% probability. The Mitigate cost is $500K (reduces probability to 10%); the Transfer cost is $300K (insurance); the Avoid cost is $1M (scope cut). Run the EMV math AND argue beyond pure EMV (reputational, regulatory, second-order effects). Which would you choose at a board review?
2. **Opportunity strategies in practice.** Most PMs over-focus on threats. Design a workshop format that systematically surfaces opportunities (positive risks) for a 12-month $5M project. What rituals would you embed?
3. **Acceptance trap.** When is "Accept" a real strategy vs a default? Define the test you would apply at a CCB to make sure a risk being accepted is actually being accepted consciously.
4. **EMV vs decision theory.** EMV assumes risk-neutrality. Real organizations are often risk-averse. How do you incorporate utility theory (Kahneman & Tversky 1979) into project risk responses without making the math intractable?
5. **Risk + Code of Ethics.** A sponsor demands a known risk be removed from the register because "it'll scare investors." How do you respond using PMI's Code of Ethics?

---

## 📚 Named-source citations (this module)

| Framework / claim | Originator | Year | Publication |
|---|---|---|---|
| Risk Management Processes (Plan / Identify / Qual / Quant / Plan Responses / Implement / Monitor) | Project Management Institute | 2017; reaffirmed 2021 | PMBOK 6 §11; PMBOK 7 §2.8 |
| Probability-Impact Matrix | Project Management Institute | 2017 | PMBOK 6 §11.3 |
| 5 Threat Strategies (Avoid / Transfer / Mitigate / Accept / Escalate) | Project Management Institute | 2017 | PMBOK 6 §11.5 |
| 5 Opportunity Strategies (Exploit / Enhance / Share / Accept / Escalate) | Project Management Institute | 2017 | PMBOK 6 §11.5 |
| Risk Breakdown Structure | Hillson, David | 2002 | *"Use a Risk Breakdown Structure to Understand Your Risks,"* PMI Global Congress |
| Expected Monetary Value | von Neumann & Morgenstern | 1944 | *Theory of Games and Economic Behavior*, Princeton UP |
| Monte Carlo simulation | Metropolis, N. & Ulam, S. | 1949 | *"The Monte Carlo Method,"* JASA, 44(247) |
| Decision tree analysis | Raiffa, Howard | 1968 | *Decision Analysis: Introductory Lectures on Choices Under Uncertainty*, Addison-Wesley |
| Risk appetite / tolerance / threshold terminology | ISO 31000 | 2009; revised 2018 | ISO 31000:2018 *Risk Management — Guidelines* |
| Fat-tail / mega-project risk distributions | Flyvbjerg, Bent | 2014; 2023 | *"What You Should Know About Megaprojects and Why,"* Project Management Journal, 45(2); *How Big Things Get Done* (2023) |
| Risk reserves: Contingency vs Management | Project Management Institute | 2017 | PMBOK 6 §7.2 |
| Utility theory in risk decisions | Kahneman & Tversky | 1979 | *"Prospect Theory: An Analysis of Decision Under Risk,"* Econometrica, 47(2) |
| Big Dig post-mortem (financial) | Massachusetts Inspector General (Greg Sullivan) | 2008 | *A History of Central Artery/Tunnel Project Finances 1994–2008* |
| Big Dig post-mortem (ceiling collapse) | National Transportation Safety Board | 2007 | NTSB Highway Accident Report HAR-07/02 |
| Standish CHAOS Report (risk failure base rates) | Standish Group | 2024 | *CHAOS Report 2024* |
