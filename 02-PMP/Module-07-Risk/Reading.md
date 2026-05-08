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
