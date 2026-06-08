# Module 3: S&OP, Sales & Operations Planning 🤝

> **Why this module matters:** S&OP is the monthly heartbeat of a manufacturing company. Get this right and Sales, Operations, Finance, and Supply Chain are all looking at one number. Get it wrong and every department fights every month. CPIM dedicates ~15% of the exam to this domain alone.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1: Manufacturing Strategy](../Module-01-Manufacturing-Strategy/Reading.md), particularly MTS/ATO/MTO (S&OP decisions differ across environments) and competitive priorities
> - [Module 2: Demand Planning & Forecasting](../Module-02-Demand-Planning-Forecasting/Reading.md), the demand plan is S&OP's Step-2 input; forecast aggregation principles drive the family/SKU choice
> - Basic financial literacy: P&L vs cash flow, working capital, OPEX vs CAPEX (you'll meet these in the IBP discussion)
>
> S&OP is process-heavy, light on math. The hardest part for most students is keeping the 5 steps and their owners straight. Treat this module as memorization-plus-pattern-recognition, not calculation.

---

## 🍕 A Story: The Toy Company That Hated Each Other

It's 2018. **WonderToys Inc.** has 1,400 employees and $400M revenue. Every Monday morning the senior team meets:

- **Sales VP** says: "We can sell 5 million toys in Q4 if you can build them."
- **Operations VP** says: "Capacity is 3 million. Sales is delusional."
- **Finance VP** says: "Inventory is up $80M and we have no cash. Whose decision was that?"
- **Supply Chain VP** says: "The forecast Sales gave me last quarter was wrong by 40%. I'm tired."

Each department had its own number. Each had its own spreadsheet. Each blamed the others. Inventory was wrong by ±30% every quarter, cash was always tight, and customer service was below 88%.

In January 2019 a new COO arrived. She put one rule in place: **one demand plan, one supply plan, one financial plan, agreed every month at the executive table.** Monthly cadence. Family-level aggregation. Numbers approved by the CEO. No siloed forecasts.

Eighteen months later, WonderToys' inventory was down 22%, service was at 96%, and the executive team for the first time in a decade wasn't fighting in the parking lot. **That's S&OP.** Not a system. A discipline.

---

## 🎯 What Is S&OP?

**S&OP (Sales & Operations Planning)** is the cross-functional, executive-level process that reconciles demand, supply, and financial plans into a single agreed plan. It runs on a **monthly cadence**, at a **product-family level**, over a **12–24 month rolling horizon**.

Key characteristics:

- **Aggregate**, works at product family level, not SKU
- **Monthly**, repeats every 30 days, decisions ratified by execs
- **Cross-functional**, Sales, Operations, Finance, Supply Chain, sometimes Marketing/HR
- **One set of numbers**, Sales and Operations agree, Finance signs off

---

## 📅 The Classic 5-Step S&OP Process (Wallace / Stahl)

> **Citation.** Wallace, Thomas F. & Stahl, Robert A., *Sales and Operations Planning: The How-To Handbook*, 3rd ed. (T.F. Wallace & Company, 2008; 1st ed. 2000); foundational concept established in Wallace, Thomas F., *Sales & Operations Planning: The How-To Handbook* (1999) and earlier in Ling, Richard C. & Goddard, Walter E., *Orchestrating Success: Improve Control of the Business with Sales & Operations Planning* (Oliver Wight Publications, 1988). The 5-step canonical form is reaffirmed in the ASCM Dictionary (16th ed., 2022) and in Oliver Wight's modern *Class A* maturity standard.

🔥 **MEMORIZE THIS.** The 5 steps appear on every CPIM exam. ASCM uses the Wallace model.

| Step | Name | Who Leads | What Happens |
|------|------|-----------|--------------|
| **1** | Product / portfolio review | Product Management | Review new products, retirements, transitions |
| **2** | Demand review (demand planning) | Sales / Marketing | Build unconstrained demand plan by family |
| **3** | Supply review (supply planning) | Operations | Assess capacity, materials; match to demand |
| **4** | Pre-S&OP / reconciliation | Cross-functional team | Identify gaps and alternatives; surface decisions |
| **5** | Executive S&OP meeting | CEO + leadership | Decide, ratify the plan, set policy |

🧠 Memory: **P-D-S-R-E** ("Product, Demand, Supply, Reconcile, Execute"). Some texts collapse step 1 into step 2; the 5-step Wallace form is the CPIM canonical version.

### Detail per step

**Step 1, Product/Portfolio Review.** New product introductions, product transitions, product retirements (end-of-life). Anything that will *change* the demand assumptions.

**Step 2, Demand Review.** Sales and Marketing build the *unconstrained* demand forecast by family for the next 12–24 months. "Unconstrained" means: this is what we *would* sell if capacity were unlimited. Never let Operations cap demand at this stage.

**Step 3 Supply Review.** Operations assesses required capacity to meet the unconstrained demand. Identifies gaps material, labor, equipment, supplier. Proposes a *supply plan*: how to deliver. Also generates *scenarios* (alternative strategies, overtime, second shift, outsourcing).

**Step 4, Pre-S&OP (Integration / Reconciliation).** A working session of the leaders of demand and supply. Surfaces conflicts and alternatives that need executive decisions. Prepares a "decision package" for the executive meeting.

**Step 5, Executive S&OP Meeting.** CEO chairs. Decisions are made and ratified for the rolling 12–24 month horizon. The plan becomes the "one number" the whole company runs against until the next cycle.

🎯 **Exam pattern:** "At what step is the unconstrained demand plan generated?" → Step 2. "At what step does the executive team ratify?" → Step 5.

---

## 🆚 S&OP vs IBP (Integrated Business Planning)

> **Citation.** **Integrated Business Planning** as a named methodology is a trademarked concept of **Oliver Wight Companies** and codified in *The Oliver Wight Class A Standard for Business Excellence* (Oliver Wight, multiple editions; current 8th ed. 2024) and Bower, Dougherty, Coldrick & Hodgson, *Demand Driven Performance Using Smart Metrics* (McGraw-Hill, 2013). The major S&OP/IBP planning software vendors **SAP IBP**, **Oracle Demantra/Cloud SCP**, **Kinaxis Maestro**, **Anaplan**, **o9 Solutions**, **OMP**, all align to roughly this 5-step cadence as of their 2024–2026 reference architectures.

| | Classic S&OP | IBP (Integrated Business Planning) |
|---|--------------|-------------------------------------|
| Scope | Demand + Supply | Demand + Supply + Financial + Strategic |
| Time horizon | 12–24 months | 24–36+ months |
| Output | Operations plan | Integrated business plan tied to P&L |
| Currency | Units | Units AND dollars (financialized) |
| Strategic projects | Limited | Fully integrated |
| Maturity | Operational | Executive / strategic |

**IBP is the evolution of S&OP.** It adds explicit financial integration and strategic-project alignment. Modern textbooks (Oliver Wight) call mature S&OP "IBP."

🚨 **Exam trap:** Don't say "S&OP and IBP are unrelated." IBP is the *mature form* of S&OP. Same monthly cadence, broader scope.

---

## 🧱 Aggregate Planning (The Plan Output of S&OP)

The S&OP process produces an **aggregate production plan** at the family level for the next 12–24 months. There are three classic strategies for how to match supply to demand:

| Strategy | What It Does | Pros | Cons |
|----------|-------------|------|------|
| **Level** | Produce same amount every period; inventory absorbs demand swings | Stable workforce, predictable | High inventory carrying cost; risk of obsolescence |
| **Chase** | Production exactly matches demand each period | Minimal inventory | Workforce volatility (hire/fire/overtime), capacity stress |
| **Hybrid (mixed)** | Combination, level core capacity, chase with overtime/contract | Balanced cost & flex | Complexity |

### Worked example, Level vs Chase

Suppose monthly demand for a product family is:

| Month | Demand |
|-------|--------|
| Jan | 800 |
| Feb | 1,000 |
| Mar | 1,400 |
| Apr | 1,600 |
| May | 1,200 |
| Jun | 1,000 |
| **Total** | **7,000** |

**Level strategy:** Produce 7,000 / 6 ≈ **1,167 units per month** regardless. Inventory builds in Jan–Feb (excess production), depletes in Mar–Apr (excess demand), rebuilds in May–Jun.

**Chase strategy:** Produce exactly 800, 1,000, 1,400, 1,600, 1,200, 1,000 each month. Zero inventory build but workforce/capacity must flex from 800 to 1,600 units of monthly output, a 2× swing.

**Hybrid:** Run a level base of 1,000 units. Use overtime or a contract shift in Mar (+400) and Apr (+600). Reduces both inventory build and capacity stress.

🎯 **Exam pattern:** "Workforce in our union contract is fixed and overtime is expensive. Which aggregate strategy fits best?" → Level. "We sell perishables with no inventory possible." → Chase.

---

## 🏗️ Resource Planning (Where S&OP Meets Capacity)

Resource Planning (sometimes called **Resource Requirements Planning, RRP**) is the long-range capacity check that lives inside the S&OP supply review. It asks: *given the agreed family-level production plan, will we have enough strategic resources (plants, major equipment, workforce, key suppliers) in the 12–24 month window?*

**Outputs of Resource Planning include:**
- Whether to add a second shift
- Whether to expand a plant
- Whether to hire/lay off (long lead time decision)
- Whether to qualify a second supplier
- Whether to outsource

This sits at the *top* of the capacity hierarchy. Below it: RCCP (Rough-Cut Capacity Planning, Module 5), then CRP (Capacity Requirements Planning), then Input/Output Control. We go deep on these in Module 5.

---

## 📊 Demand Plan vs Supply Plan vs Financial Plan

Mature S&OP produces three reconciled plans:

| Plan | Owner | Question Answered |
|------|-------|-------------------|
| **Demand plan** | Sales/Marketing | What will customers buy (unconstrained)? |
| **Supply plan** | Operations | What can we make/deliver? |
| **Financial plan** | Finance | What's the revenue/cost/cash implication? |

When all three agree at the family level over the rolling horizon, the company has *one number* to run against.

---

## 🚦 Demand-Supply Imbalance: 4 Outcomes

The supply review surfaces one of four conditions:

| Condition | Implication | Typical Response |
|-----------|-------------|------------------|
| Demand > Supply (constrained) | Stockouts, lost sales | Add capacity, overtime, raise price, drop unprofitable SKUs |
| Demand < Supply (slack) | Excess inventory, low utilization | Promotions, build backlog, lay off, idle capacity |
| Demand ≈ Supply (balanced) | OK | Maintain |
| Demand volatile, supply stable | Bullwhip risk | Postponement, flex capacity, safety stock |

---

## 📅 Time Buckets in S&OP

S&OP usually operates in **monthly time buckets** over a **12–24 month rolling horizon**. Compare with the lower planning layers:

| Layer | Time Bucket | Horizon | Aggregation |
|-------|-------------|---------|-------------|
| **S&OP / IBP** | Month | 12–24+ months | Product family |
| **Master Production Schedule (MPS)** | Week | 6–18 weeks | Finished good (SKU) |
| **Material Requirements Planning (MRP)** | Day or week | 1–8 weeks | Component / part |
| **Production Activity Control** | Hour / shift | 1 day | Work order |

🎯 **MEMORIZE the layered nature**, this is one of the most-tested ASCM concepts.

---

## 🌐 The S&OP Hierarchy Pyramid

```
                ┌─────────────────────┐
                │ Strategic Business  │  (3-5 yr horizon)
                │   Plan              │
                └─────────┬───────────┘
                          │
                ┌─────────▼───────────┐
                │  S&OP / IBP         │  (12-24 mo, monthly, family)
                └─────────┬───────────┘
                          │
                ┌─────────▼───────────┐
                │  Master Production  │  (6-18 wk, weekly, SKU)
                │  Schedule (MPS)     │
                └─────────┬───────────┘
                          │
                ┌─────────▼───────────┐
                │  Material Reqs      │  (days-weeks, component)
                │  Planning (MRP)     │
                └─────────┬───────────┘
                          │
                ┌─────────▼───────────┐
                │  Production         │  (shift/hour, work order)
                │  Activity Control   │
                └─────────────────────┘
```

🎯 The whole CPIM exam can be summarized as: "*Plan at each level, hand off to the next level, execute, and feed actuals back up.*"

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "S&OP is a monthly inventory meeting" | It's a *cross-functional reconciliation* of demand, supply, and financial plans |
| "S&OP plans at the SKU level" | No, it plans at the *product family* level. SKU planning happens in MPS |
| "S&OP and MPS are the same" | No, S&OP is family/monthly; MPS is SKU/weekly |
| "Operations leads S&OP" | The *CEO* leads the executive S&OP meeting. Operations leads the supply review |
| "S&OP is just for big companies" | False, even a 100-person manufacturer benefits. Scale the cadence, not the principle |
| "Once we ratify the plan, it's frozen" | The plan is *rolling*. Every month you replan the 12–24 month horizon |
| "IBP replaces S&OP" | IBP is the *mature evolution* of S&OP, not a different process |

---

## 🚨 Exam Traps Specific to Module 3

1. **"Unconstrained" vs "Constrained" forecast**, Step 2 (Demand Review) produces an *unconstrained* forecast. The supply review may constrain it. Don't let Operations cap demand at Step 2.
2. **Mixing up "executive S&OP" with the whole 5-step process**, Executive S&OP is *Step 5* only, not the whole cycle.
3. **Confusing level vs chase**, Level = stable production, inventory varies. Chase = production varies, no inventory build.
4. **Treating Resource Planning as Capacity Requirements Planning**, RP is *long-range strategic* capacity (plants, shifts). CRP is *medium-range component-level* capacity. They are different layers.
5. **Treating financial integration as optional**, Modern S&OP (IBP) requires financial integration. "Operations plan with no $ tie-out" is no longer accepted.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **S&OP** | Cross-functional monthly process reconciling demand, supply, finance plans |
| **IBP** | Integrated Business Planning, the mature form of S&OP, financially integrated |
| **Aggregate planning** | Family-level production plan over 12–24 months |
| **Level strategy** | Constant production rate, inventory absorbs demand variation |
| **Chase strategy** | Production matches demand each period; no inventory build |
| **Hybrid strategy** | Combination; level base + chase overflow |
| **Resource Planning (RRP)** | Long-range strategic capacity check inside S&OP |
| **Executive S&OP** | Step 5: CEO-led decision meeting |
| **Pre-S&OP** | Step 4: reconciliation working session |
| **Unconstrained demand** | What customers would buy if there were no supply limit |
| **Demand review** | Step 2: Sales/Marketing build the demand plan |
| **Supply review** | Step 3: Operations assesses capacity vs demand |
| **Family level** | Aggregation level used for S&OP, not SKU |
| **Rolling horizon** | The plan is replanned every cycle; never frozen |

---

## 🤖 2024–2026 Update, AI-Augmented S&OP

The S&OP/IBP software vendors have shipped meaningful AI capabilities through 2024–2026 that the modern CPIM exam (post-2024 ECM refresh) now expects awareness of:

| Capability | What it does | Where the human still matters |
|---|---|---|
| **ML-driven baseline demand sensing** (Kinaxis Maestro 2024, SAP IBP 2402 release, o9 EKG 2024) | Generates the baseline statistical forecast across thousands of SKUs in minutes | Adjusting for new-product introductions, promotions, and structural breaks |
| **Scenario simulation** (Anaplan PlanIQ 2024, Oracle Cloud SCP) | Runs hundreds of "what-if" scenarios in seconds (tariff shifts, capacity outages, demand surges) | Choosing which 3–5 scenarios to actually surface to executives |
| **Causal anomaly detection** | Flags ratios (channel orders ÷ sell-through; forecast vs actual variance vs historical norm) | Investigating root cause and deciding the response |
| **Automated demand reconciliation** | Reconciles top-down vs bottom-up forecasts, surfaces disagreements | Adjudicating where Sales and Marketing genuinely disagree |
| **Generative-AI commentary** (Microsoft Copilot for Supply Chain 2024, SAP Joule 2024) | Drafts the executive S&OP narrative from the data | Approving claims and choosing what *not* to say |

The exam-takeaway: **AI tools change the cadence and speed of S&OP, not its structure**. The 5 steps, the family-level aggregation, the executive ratification, all unchanged. What changes is that the "supply review" can now incorporate hundreds of scenarios that previously required a week of analyst time, and the demand review can be re-run weekly (or daily, during volatile periods) rather than monthly.

Post-Red-Sea routing decisions (the December 2023 Houthi attacks on Suez transit, ongoing through 2024–2026) are a recurring 2024+ S&OP scenario theme: companies with European-Asian flows have made S&OP routing decisions (Suez vs Cape of Good Hope, +14 days transit) at the executive S&OP table for the first time at meaningful scale. Modern S&OP must reconcile cost (longer fuel burn, +$1.5M per voyage on a large container ship), service (the +14 days impact on customer lead time), and risk (the probability of seizure of an Israeli-linked vessel).

---

## 📊 Case Study, Procter & Gamble's Global S&OP / IBP Transformation (2003–2024)

**Situation.** Through the 1990s P&G ran S&OP in roughly 80 separate cycles one per major business unit, per region with limited cross-region or cross-category visibility. The 2001–2003 acquisitions of Clairol ($5B) and Wella ($5.7B), plus the Gillette acquisition (2005, $57B), created a federation of planning processes that genuinely did not talk to each other. Working capital was tied up in regional safety stocks; new-product introductions were chronically late at headquarters but on-time per BU report; the global supply chain ran on quarterly synchronization at best. CEO A.G. Lafley made operating-model integration a top corporate priority.

**Decision.** Starting 2003, P&G began building a global IBP capability (they called it "Global IBP" though the framework was Oliver Wight's Class A). Key decisions:

- Adopted a single S&OP cadence (monthly, family-level) across all global business units, with the executive review chaired by the relevant Global BU President.
- Built a unified data layer common SKU hierarchies, common product families, common time buckets so that demand and supply could be reconciled across regions.
- Deployed SAP IBP (then APO; migrated to IBP starting 2018) as the integrated planning platform.
- Tied the financial plan into the IBP cycle starting 2007; the CFO began reviewing the financial-impact of the operating plan monthly rather than quarterly.
- Standardized "demand control" the discipline of converting forecast variance into S&OP exceptions and corrective action by 2012.

**Outcome.** Reported in P&G's annual report (2016) and various ASCM SCM Now interviews: working-capital reduction of **$2.5B+** across 2003–2014; first-pass-yield on the demand plan up from ~75% to ~90% at the global level; new-product launch on-time-in-full from 60% to 88% across 2010–2018. Cash-conversion-cycle reduced by 24 days between FY 2004 and FY 2014. P&G has since been the canonical "mature global IBP" reference cited in every Oliver Wight white paper, every Gartner Magic Quadrant for S&OP, and most academic case books (Cohen & Roussel, *Strategic Supply Chain Management*, 2nd ed. 2013, devotes a chapter).

**Lesson for the exam / for practitioners.** P&G demonstrates the **maturity ladder** that ASCM tests on: classic S&OP (operational, 12-month, demand+supply only) → integrated S&OP with financial overlay (18-month, demand+supply+financial) → IBP (24+ months, all functions, strategically integrated, executive-led). The point is *not* that everyone needs to be P&G; it's that ASCM expects you to recognize *which rung* of the maturity ladder a described organization is on, and what the next step would be. CPIM exam-takeaway: when a question describes "Sales has a number, Operations has a different number, Finance has a third number, and they don't reconcile until the quarterly board meeting," the right answer is *not* "buy software", it's "implement a monthly S&OP cadence with executive ratification (Step 5)."

**Discussion (Socratic).**
- Q1: A $400M division of a Fortune 500 company has just acquired a $200M competitor in a different region. The acquired business runs its own S&OP cycle, on a different software stack, with a different fiscal calendar. The parent company gives the integration team 12 months to harmonize. What's the principled sequence, which dimension (cadence, taxonomy, software, governance, financials) do you harmonize first, and why? Defend your sequencing against the alternative.
- Q2: P&G's IBP build took 10+ years to reach "Class A" maturity, with continuous investment from a CEO who personally cared. A mid-market manufacturer with 1,500 employees and no Class-A budget asks: "Can we get 80% of the value at 10% of the cost?" Construct the strongest yes-answer and the strongest no-answer, citing the maturity-ladder logic from Wallace/Oliver Wight.
- Q3: In 2024 a number of vendors (Anaplan, o9, Kinaxis) market "Connected Planning" or "Concurrent Planning" as a *replacement* for the classic monthly cadence, re-planning continuously rather than monthly. Is this the future of S&OP, or a marketing reframing of an unchanged structure? Defend your position with reference to the 5-step canonical form and the role of executive ratification.

---

## ✅ Module 3 Summary

You now know:

- 📅 The 5-step Wallace S&OP process (Product → Demand → Supply → Pre-S&OP → Exec S&OP)
- 🆚 The difference between S&OP and IBP (IBP = mature, financially integrated, longer horizon)
- 🧱 The three aggregate planning strategies Level, Chase, Hybrid with worked numbers
- 🏗️ Where Resource Planning sits and what it decides (long-range capacity)
- 📊 How S&OP, MPS, MRP, and PAC connect in the planning hierarchy
- 🚦 The 4 demand-supply imbalance conditions
- 🚨 The classic traps, unconstrained ≠ constrained, family ≠ SKU, S&OP ≠ MPS

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`, aim for 20/25 minimum
3. 📋 Memorize the 5 S&OP steps from `Cheat-Sheet.md`
4. ➡️ Move to [Module 4: Master Scheduling & MRP](../Module-04-Master-Production-Scheduling-MRP/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4 (MPS/MRP) takes the family-level S&OP plan and explodes it to SKU-level firm production; Module 5 (Capacity) is the supply-review check inside S&OP Step 3 plus its hierarchy below; Module 8 (Lean) shows how IBP-mature firms reduce S&OP cycle time through value-stream mapping.
> - Cross-course: `10-ASCM-CSCP` Module 5 extends S&OP to the multi-tier supply network ("S&OP for the extended enterprise"); `13-ISM-CPSM` Module 4 covers Supply's role in the S&OP supply review.
> - Practice: Practice Exam 1 has 10–14 questions on S&OP (the 5 steps, level/chase/hybrid). Final Mock Exam adds IBP-vs-S&OP discrimination and resource-planning hierarchy questions.

---

## 💬 Discussion, Socratic prompts

1. **Cadence vs continuous.** With AI-augmented planning making weekly (or daily) re-planning operationally feasible, why does ASCM (and Wallace, Oliver Wight) continue to teach monthly S&OP as the canonical cadence? Construct an argument for moving to continuous planning AND for keeping monthly as the executive-ratification rhythm. What's the *organizational* (not technical) constraint?
2. **The unconstrained-demand discipline.** "Never let Operations cap demand at Step 2" is a Wallace-school commandment. In a capacity-constrained environment (say, semiconductors 2021–2023 or GLP-1 drugs 2023–2025), is this still right, or is it organizationally dishonest? Defend either position with reference to the 5-step process and the role of the executive review.
3. **IBP vs S&OP at the CPG mid-market.** A 1,500-person consumer-packaged-goods manufacturer with $250M revenue and a single ERP runs classic 5-step S&OP. The new CFO wants to "upgrade to IBP." Build the strongest argument that the value of the upgrade is real *and* the strongest argument that "you're already running IBP, you just don't call it that." Where does the actual gap lie?
4. **Post-Red-Sea S&OP.** A European apparel company sourcing 60% of volume from South-East Asia is hit with a routing decision in early 2024: Suez (faster, riskier) vs Cape of Good Hope (+14 days, safer, +$1.5M per voyage). At which S&OP step does this decision belong, who has the authority to make it, and what financial-plan inputs must be reconciled to make it well? (Hint: this is not a Step-3 supply-review decision alone.)
5. **AI as augmentation, not replacement.** Pick one of the five S&OP steps. Argue both that AI can *fully* automate that step and that AI can *only* augment a human at that step. Where does the line genuinely sit, and what does the answer tell you about how to organize the S&OP team in 2026?

---

## 📚 Further Reading (Optional)

- 📖 *Sales and Operations Planning: The How-To Handbook* Wallace, Thomas F. & Stahl, Robert A., 3rd ed. (T.F. Wallace & Company, 2008) the canonical 5-step source.
- 📖 *The Oliver Wight Class A Standard for Business Excellence* Oliver Wight International, 8th ed. (2024) the IBP playbook and maturity ladder.
- 📖 *Orchestrating Success: Improve Control of the Business with Sales & Operations Planning*, Ling, Richard C. & Goddard, Walter E. (Oliver Wight Publications, 1988).
- 📖 *Demand Management Best Practices: Process, Principles, and Collaboration*, Crum, Colleen & Palmatier, George (J. Ross, 2003).
- 📖 *Strategic Supply Chain Management: The Five Disciplines for Top Performance* Cohen, Shoshanah & Roussel, Joseph, 2nd ed. (McGraw-Hill, 2013) includes the P&G IBP chapter.
- 📖 ASCM Dictionary, 16th edition (2022), entries for S&OP, IBP, aggregate plan, level strategy, chase strategy, resource planning.
- 📰 ASCM SCM Now magazine, search "Integrated Business Planning" for current practitioner case studies (issues 2023–2026).
- 📰 *Sales and Operations Planning Maturity: Where Are You, Where Should You Be?* Lapide, Larry, MIT Center for Transportation & Logistics white paper (2007; updated 2014) the canonical 4-stage S&OP maturity model that the ASCM exam references.
