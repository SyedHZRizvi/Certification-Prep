# Module 10: Continuous Improvement 🔁

> **Why this module matters:** Domain 4 ("Improvements and Best Practices") is 15% of the CSCP. Expect dense vocabulary on Lean, Six Sigma DMAIC, TOC, Kaizen, balanced scorecard, and the supply-chain KPIs that appear across every other domain. Master this and the rest of the exam stops feeling random.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [JIT, Kanban, and lean inventory](../Module-05-Inventory-Capacity/Reading.md) — Module 5
> - [Drum-Buffer-Rope and TOC preview](../Module-04-Supply-Planning-SOP/Reading.md) — Module 4
> - [SCOR Performance attributes and KPIs](../Module-01-SCM-Foundations-Strategy/Reading.md) — Module 1
> - Basic project management vocabulary (charter, scope, deliverables)
> This module is also a strong primer for the **CSSGB / CSSBB (Six Sigma)** certification path.

---

## 🍞 A Story: The Bread Plant That Saved $2M With Sticky Notes

Akiko runs operations at **Sunrise Bakers**, a 220-person bread plant that supplies 18 grocery chains. In 2019 their on-time delivery hovered at 81%, scrap rate at 4.3%, and customer complaints were creeping up. The CEO threatened to bring in a $400K consulting firm.

Akiko's plant manager pushed back: "Give us 90 days and $20K." He gathered 16 cross-functional staff, ran a **value stream mapping (VSM)** workshop with sticky notes on butcher paper, and identified 31 forms of waste. They picked the top 7 — staged ingredients waiting 6 hours, oven changeover taking 47 minutes, packaging line bottleneck because of slow labeler.

Each improvement was an **A3** — one page describing problem, current state, target, root cause analysis, countermeasures, and check plan. Six months later:

- On-time delivery 81% → 96%
- Scrap 4.3% → 1.8%
- Customer complaints down 60%
- Total cost saved year 1: **$2.1M**

No consultants. Just Lean tools, disciplined application, and a culture of relentless small improvements. **That's Kaizen.** This module gives you the toolkit.

---

## 🏗️ The Continuous Improvement Landscape

| Discipline | Origin | Headline Idea |
|------------|--------|--------------|
| **Lean** | Toyota (Ohno, 1950s-90s) | Eliminate waste, maximize value |
| **Six Sigma** | Motorola (1986), GE (1990s) | Reduce variability to 3.4 defects/million |
| **Lean Six Sigma** | Combined late-90s | Lean + Six Sigma fused |
| **TQM** | Deming, Juran (post-WWII Japan) | Quality is everyone's job |
| **Theory of Constraints (TOC)** | Goldratt, 1984 | Throughput = constraint capacity |
| **Kaizen** | Imai, 1986 | Continuous small improvements |
| **Business Process Reengineering** | Hammer, 1993 | Radical redesign |
| **Agile** | 2001 | Iterative, customer-collaborative |

🎯 **Exam tip:** Lean = waste. Six Sigma = variability. TOC = constraints. Kaizen = small daily. Reengineering = radical. Memorize one keyword each.

---

## 🚛 Lean & The 7 (or 8) Wastes

Taiichi Ohno's seven wastes (TIMWOOD) form the bedrock of Lean. Some versions add an 8th (skills).

| Letter | Waste | Example |
|--------|-------|---------|
| **T** | Transportation | Moving inventory between buildings unnecessarily |
| **I** | Inventory | WIP piled up |
| **M** | Motion | Operator walking too far |
| **W** | Waiting | Machine idle for parts |
| **O** | Overproduction | Making more than the customer pulls |
| **O** | Over-processing | Machining tighter than spec needs |
| **D** | Defects | Rework, scrap |
| **(S)** | Skills underused | Untapped employee expertise (8th waste) |

🧠 **Mnemonic: TIMWOOD** (or TIMWOODS with 8th).

---

## 🧭 Lean's 5 Principles (Womack & Jones)

1. **Value** — Define from the customer's perspective
2. **Value stream** — Map every step that creates / doesn't create value
3. **Flow** — Make value-creating steps flow without interruption
4. **Pull** — Let the customer pull from upstream as needed
5. **Perfection** — Continuously refine; chase ideal

---

## 🧰 Lean Tools You Must Know

| Tool | Purpose |
|------|---------|
| **VSM** (Value Stream Map) | Map material + information flow, identify waste |
| **5S** | Sort, Set in order, Shine, Standardize, Sustain |
| **Kanban** | Visual pull signal |
| **Heijunka** | Production leveling |
| **Andon** | Visual signal for problem at the line |
| **Jidoka** | "Autonomation" — stop the line on defect |
| **SMED** | Single-Minute Exchange of Die (quick changeover) |
| **Poka-yoke** | Mistake-proofing |
| **A3** | One-page problem-solving template |
| **Gemba walk** | Go to the actual place, see actual work |
| **Standard work** | Best known method documented & followed |
| **TPM** (Total Productive Maintenance) | Operator-driven equipment care |

---

## 🎯 Six Sigma & DMAIC

Six Sigma reduces process variability to **3.4 defects per million opportunities** (DPMO) — i.e., process capability of 6 sigma standard deviations from spec.

### The 5 phases — DMAIC

```
   Define → Measure → Analyze → Improve → Control
```

| Phase | Purpose | Key Tools |
|-------|---------|-----------|
| **Define** | Scope problem, customer needs, charter | Project charter, VOC, SIPOC |
| **Measure** | Quantify current performance, gather data | Process map, MSA, capability (Cp/Cpk) |
| **Analyze** | Identify root causes | Pareto, fishbone, 5-whys, regression |
| **Improve** | Test solutions, pilot | DOE, FMEA, simulation |
| **Control** | Sustain gains | Control charts, control plan, training |

### DMADV (for design)
Define → Measure → Analyze → Design → Verify. Used to design new processes / products (Design for Six Sigma — DFSS).

### Six Sigma belts

| Belt | Role |
|------|------|
| **White / Yellow** | Awareness + basic participation |
| **Green** | Project member, part-time leader |
| **Black** | Full-time project leader |
| **Master Black Belt** | Mentor, program leader |
| **Champion / Sponsor** | Executive support |

---

## 🪜 Quality Tools — The Old 7 + New 7

### Classic 7 quality tools (Ishikawa)

| Tool | Use |
|------|-----|
| Pareto chart | Find vital few causes |
| Fishbone (Ishikawa) | Brainstorm root causes (6 M's: Man, Machine, Method, Material, Measurement, Mother-nature) |
| Check sheet | Collect data |
| Histogram | Visualize distribution |
| Scatter diagram | Correlation between variables |
| Control chart | Process stability over time |
| Flowchart / process map | Document the process |

### Modern 7 "management & planning" tools

- Affinity diagram
- Tree diagram
- Relations diagram
- Matrix diagram
- Matrix data analysis
- Process Decision Program Chart (PDPC)
- Activity network diagram

---

## ⛓️ Theory of Constraints (TOC)

**Eliyahu M. Goldratt and Jeff Cox, *The Goal: A Process of Ongoing Improvement*** (North River Press, 1984; 4th edition 2014). Goldratt was an Israeli physicist who applied scientific-method thinking to operations. TOC says throughput is set by the **constraint** (bottleneck) — every other resource has slack.

### The 5 focusing steps

1. **Identify** the constraint
2. **Exploit** it (squeeze max from it without investment)
3. **Subordinate** everything else to it
4. **Elevate** the constraint (invest if needed)
5. **Repeat** — find the next constraint

### Throughput accounting (TOC's financial metrics)

| Metric | Definition |
|--------|------------|
| **Throughput (T)** | Rate of money generation (revenue − truly variable costs) |
| **Inventory / Investment (I)** | Money tied up in the system |
| **Operating Expense (OE)** | Money spent turning inventory into throughput |
| **Net profit** | T − OE |
| **ROI** | (T − OE) / I |

🎯 **Exam tip:** TOC's "drum-buffer-rope" (covered briefly in Module 4) is the scheduling technique: constraint sets pace (drum), buffer protects it, rope releases material at constraint speed.

---

## 🔁 Kaizen, PDCA, PDSA

### Kaizen
Japanese for "change for the better." Philosophy of continuous small improvements driven by frontline staff.

### PDCA / PDSA (Deming cycle)

```
   Plan → Do → Check (or Study) → Act
        ▲                          │
        └──────────────────────────┘
```

- **Plan** the change
- **Do** it small / pilot
- **Check / Study** results
- **Act** — standardize or revise

---

## 📊 Balanced Scorecard (Kaplan & Norton, 1992)

**Robert S. Kaplan and David P. Norton, *"The Balanced Scorecard — Measures That Drive Performance"*** (Harvard Business Review, January-February 1992 — Harvard Business School). Their book *The Balanced Scorecard: Translating Strategy into Action* (HBS Press, 1996) became the canonical reference. Translate strategy into operational measures across **four perspectives**:

| Perspective | Sample Metric |
|-------------|---------------|
| **Financial** | Revenue, EBITDA, ROI |
| **Customer** | NPS, on-time delivery, complaints |
| **Internal Process** | Cycle time, defect rate, OEE |
| **Learning & Growth** | Training hours, employee engagement, % time on innovation |

🎯 **Exam tip:** BSC's superpower is forcing leaders to balance short-term financials with long-term capability investment.

---

## 🏆 Supply Chain KPIs You Will Be Tested On

| KPI | Formula / Definition |
|-----|---------------------|
| **Perfect order** | On-time × in-full × undamaged × correct docs |
| **OTIF** | On-time AND in-full |
| **Fill rate** | Units shipped / units ordered |
| **Cash-to-cash cycle** | DIO + DSO − DPO |
| **Inventory turns** | COGS / avg inventory |
| **Days inventory (DIO)** | 365 / turns |
| **Days payable (DPO)** | AP / daily COGS |
| **Days sales (DSO)** | AR / daily revenue |
| **OEE** (Overall Equipment Effectiveness) | Availability × Performance × Quality (typically aim ≥ 85%) |
| **First-pass yield (FPY)** | Units passing first time / units processed |
| **Cost per unit shipped** | Logistics cost / units |
| **Forecast accuracy / MAPE** | See Module 3 |
| **Supply chain mgmt cost as % revenue** | (Plan+Source+Make+Deliver+Return cost) / revenue |

---

## 🏆 SCOR Performance Attributes (Recap from Module 1)

| Dimension | Attribute | Sample KPI |
|-----------|-----------|------------|
| Customer-facing | Reliability | Perfect order |
| Customer-facing | Responsiveness | Order cycle time |
| Customer-facing | Agility | Upside flexibility |
| Internal-facing | Cost | Total SC mgmt cost |
| Internal-facing | Asset | Cash-to-cash |

---

## 🚀 Business Process Reengineering (BPR)

**Michael Hammer and James Champy, *Reengineering the Corporation: A Manifesto for Business Revolution*** (Harper Business, 1993; revised 2003 — Hammer was an MIT computer science professor turned consultant). Radical, top-down redesign of entire processes for breakthrough improvement (vs. Kaizen's incremental approach).

| Dimension | Kaizen | BPR |
|-----------|--------|-----|
| Pace | Continuous small | Discontinuous radical |
| Scope | Frontline | Cross-functional / org-wide |
| Risk | Low | High |
| Driver | Bottom-up | Top-down |
| Typical result | 5-20% improvement | 50-200% or fail |

---

## 🌐 Industry 4.0 & Digital Supply Chain

| Technology | Use in SC |
|------------|-----------|
| **IoT sensors** | Cold-chain monitoring, asset tracking |
| **Big data + analytics** | Demand sensing, anomaly detection |
| **AI / ML** | Forecasting, dynamic pricing, route optimization |
| **Blockchain** | Provenance, traceability, smart contracts |
| **Digital twin** | Simulated SC for what-if analysis |
| **Cloud platforms** | Scalable SCM apps (SAP IBP, o9, Kinaxis, Blue Yonder) |
| **RPA** | Automate transactional ops (PO matching, invoicing) |
| **Augmented reality** | Pick-by-AR, training |
| **Autonomous vehicles + drones** | Last-mile, yard ops |

---

## 🔬 Benchmarking & Maturity Models

| Benchmark Type | Description |
|---------------|-------------|
| **Internal** | Best-in-class within your own org |
| **Competitive** | Direct competitor performance |
| **Functional** | Best-in-class outside your industry (e.g., learn from Amazon) |
| **Generic** | Comparing fundamentally different processes for learning |

### Common SC maturity models
- **CMMI** for processes (Initial → Managed → Defined → Quantitatively managed → Optimizing)
- **Gartner SCM maturity** (5 stages)
- **SCOR-mature** organizations adopt all 4 levels of SCOR

---

## 📊 Case Study — Walmart RFID Mandates (2003-2008, and 2022-2024 Second Wave)

**Situation.** In June 2003, Walmart (Bentonville, AR) issued an unprecedented supplier mandate: the **top 100 suppliers** must put RFID tags on case + pallet shipments to designated Walmart DCs by January 2005. The supplier list (Procter & Gamble, Coca-Cola, Unilever, Kraft, Gillette, Johnson & Johnson, etc.) was forced into a $2-9M-per-supplier investment in RFID tag readers, middleware, ERP integration, and tag procurement. Walmart's stated goal: real-time inventory visibility, reduced stockouts, accelerated continuous improvement (DMAIC cycle on inventory accuracy). The case became a famous "supplier-extortion or strategic-improvement" debate in operations academia.

**Decision.** Walmart's CIO Linda Dillman led the program. The continuous-improvement scaffolding was DMAIC: **Define** the inventory-accuracy problem (Walmart was losing ~$2B/year to invisible inventory + stockouts), **Measure** with pre-RFID baselines, **Analyze** root causes (mis-shelving, theft, supplier shipment errors), **Improve** via RFID tagging + Walmart's Retail Link analytics, **Control** via supplier compliance scorecards. Walmart published OTIF / fill-rate KPIs supplier-by-supplier; non-compliant suppliers paid fines and lost shelf space. Supplier reaction: P&G largely supported (already RFID-experimenting), but mid-tier suppliers like Tyson Foods balked at cost vs benefit math. RFID tags in 2003 were $0.30-1.00 each — economically infeasible at SKU level.

**Outcome.** Wave 1 (2003-2008) results were mixed. Walmart's pilot DCs showed 16-30% reduction in stockouts and 50% faster inventory cycles per a 2007 University of Arkansas RFID Research Center study. But the program plateaued: tag costs didn't fall fast enough, scanner read accuracy in real warehouses hit 70-85% (not the lab 99%), and mid-tier suppliers passed costs to Walmart via price negotiations. By 2008-2010, Walmart de-emphasized the mandate (without admitting failure). **Wave 2 (2022-2024)**: with RFID tag costs at $0.04-0.08 (Avery Dennison, Impinj), Walmart re-launched the program — September 2022 announced expanded RFID requirements to broader categories (men's apparel, home goods, electronics by 2024). This time it's economically viable. Walmart's 2024 stockout reduction targets and digital-shelf accuracy targets are RFID-anchored. The case is now studied as both a **DMAIC implementation** and a **technology adoption with TOC constraint identification** (constraint shifted from "do we have visibility?" to "is technology affordable?").

**Lesson for the exam / for practitioners.** Wave 1 illustrates the DMAIC framework working but bumping against a TOC constraint (technology cost). Wave 2 illustrates Goldratt's "Repeat" step — elevate the constraint, find the next one. On the exam, expect: "What CI methodology drives supplier scorecard improvement?" Answer: DMAIC + Balanced Scorecard. "What's the role of a Master Black Belt in a multi-supplier program like Walmart RFID?" Answer: cross-supplier program leadership, mentoring Green/Black Belts in suppliers, standardizing the measurement system. The case also illustrates **OEE-style measurement at the supply chain level** — Walmart effectively created an "OTIF-RFID-accuracy × supplier-compliance × consumer-availability" multi-factor KPI.

**Discussion (Socratic).**
- Q1: A mid-cap retailer's CEO wants to copy Walmart's RFID mandate. They have $400M revenue and 200 suppliers (vs Walmart's $560B and 100,000+). What scales and what doesn't from the Walmart playbook, and how would you redesign Wave 2 for a smaller scale?
- Q2: Walmart's Wave 1 partly failed because tag costs were too high. As CSCO, how would you have known in 2003 that the technology wasn't ready, and what TOC-style analysis would have shown the constraint?
- Q3: 2024-2026 brings new AI computer-vision systems (e.g., Amazon Just Walk Out) that *could* replace RFID for inventory accuracy. Construct the case for which technology Walmart should bet on for 2030, with what evidence.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Lean = layoffs" | Lean removes waste, not necessarily people |
| "Six Sigma is for manufacturing only" | Works in services, healthcare, finance |
| "Kaizen is one workshop" | Kaizen is a daily culture, not an event |
| "TOC requires single bottleneck" | After elevating, another constraint always emerges |
| "OEE > 100% possible" | No — capped at 100% by definition |
| "PDCA and PDSA are different" | Deming used PDSA later; functionally similar |
| "BSC eliminates financials" | BSC adds non-financial; doesn't remove financial |
| "Industry 4.0 replaces Lean" | Industry 4.0 *accelerates* Lean, doesn't replace it |

---

## 🚨 Exam Traps

1. **TIMWOOD vs TIMWOODS** — 7 or 8 wastes; both appear.
2. **DMAIC vs DMADV** — Improving vs designing.
3. **Pareto vs fishbone** — Pareto ranks; fishbone brainstorms causes.
4. **OEE = Availability × Performance × Quality** — Memorize.
5. **TOC 5 focusing steps** — Order matters.
6. **Kaizen vs BPR** — Incremental vs radical.
7. **BSC 4 perspectives** — Financial / Customer / Internal Process / Learning & Growth.
8. **Six Sigma DPMO** — 3.4 defects per million is the headline number.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **TIMWOOD(S)** | 7 (or 8) wastes of Lean |
| **5S** | Sort, Set, Shine, Standardize, Sustain |
| **VSM** | Value Stream Map |
| **Kanban / Heijunka / Andon / Jidoka** | Toyota production tools |
| **SMED / Poka-yoke** | Quick changeover / mistake-proofing |
| **A3** | One-page problem-solving template |
| **DMAIC** | Six Sigma's 5-phase improvement cycle |
| **DMADV / DFSS** | Six Sigma design cycle |
| **DPMO** | Defects per million opportunities (Six Sigma) |
| **Belt levels** | Yellow / Green / Black / Master Black Belt |
| **PDCA / PDSA** | Deming improvement cycle |
| **TOC 5 focusing steps** | Identify / Exploit / Subordinate / Elevate / Repeat |
| **Throughput accounting** | T, I, OE metrics |
| **Balanced scorecard** | Kaplan & Norton — 4 perspectives |
| **Perfect order / OTIF / Fill rate / OEE** | Headline SC KPIs |
| **CMMI** | Process maturity model |
| **BPR** | Business Process Reengineering (radical redesign) |
| **Digital twin** | Simulated SC for what-if analysis |
| **Benchmarking types** | Internal / Competitive / Functional / Generic |

---

## ✅ Module 10 Summary

You now know:
- 🚛 Lean's 5 principles, 7 (or 8) wastes, and tool kit
- 🎯 Six Sigma DMAIC/DMADV, belt structure, and the 3.4 DPMO target
- 🪜 Classic 7 quality tools and modern 7 planning tools
- ⛓️ Theory of Constraints' 5 focusing steps + throughput accounting
- 🔁 Kaizen + PDCA / PDSA continuous improvement loop
- 📊 Balanced scorecard's 4 perspectives
- 🏆 The supply-chain KPIs (perfect order, OTIF, OEE, cash-to-cash)
- 🚀 BPR vs Kaizen (radical vs incremental)
- 🌐 Industry 4.0 stack
- 🔬 Benchmarking types and maturity models

**You've completed the course!**

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (if not already taken) → Practice Exam 2 → Final Mock
5. 🎯 [Capstone Project](../Capstone-Project.md) — integrate everything you've learned in a CSCO transformation scenario

---

> **Where this leads.**
> - Inside this course: Practice Exam 2 + Final Mock test Domain 4 (Improvements) heavily; the Capstone Project requires you to design a Balanced Scorecard for your transformation plan.
> - Cross-course: ASQ's Certified Six Sigma Green Belt (CSSGB) / Black Belt (CSSBB) take DMAIC and the quality tools 4× deeper; Toyota Production System Association / Lean Enterprise Institute have advanced Lean certifications.
> - Practice: Practice Exam 2 has ~16 CI questions; Final Mock has ~23.

---

## 💬 Discussion — Socratic prompts

1. **DMAIC vs DMADV in 2024-2026 AI projects.** A firm wants to introduce a generative-AI-augmented S&OP. Is the project DMAIC (improving existing) or DMADV (designing new)? Defend a position and identify the boundary.
2. **The Six Sigma "diminishing returns" question.** A semiconductor fab hits 5.5σ on a process. Going to 6σ costs $40M. The defects saved are $8M/year. Defend BOTH "continue to 6σ for brand and customer expectation" AND "stop at 5.5σ — invest the $40M elsewhere."
3. **Kaizen culture in 2026 hybrid work.** Toyota's Gemba walks assume a co-located shop floor. A SaaS firm's "shop floor" is distributed engineers on Slack. How does Kaizen + 5S + Andon translate to distributed knowledge work? Defend a 2026 model.
4. **Balanced Scorecard's hidden risk.** Adding non-financial metrics (customer, internal process, L&G) without ruthless prioritization can result in "scorecards with 47 KPIs." How would you trim a bloated BSC, and what's the *minimum number* of KPIs per perspective that's defensible?
5. **TOC + Lean + Six Sigma — pick one or combine?** Some firms try all three (Lean Six Sigma + TOC). Others pick one. Construct the case for unification AND for purist single-methodology approaches; identify the firm-type where each wins.

---

## 📚 Further Reading (Optional)

- 📖 James P. Womack & Daniel T. Jones, *Lean Thinking: Banish Waste and Create Wealth in Your Corporation* — Free Press, 2003
- 📖 Womack, Jones, & Daniel Roos, *The Machine That Changed the World* — Free Press, 1990 (the founding lean-production study)
- 📖 Eliyahu M. Goldratt, *The Goal: A Process of Ongoing Improvement* — North River Press, 4e 2014 (TOC original; must-read)
- 📖 Masaaki Imai, *Kaizen: The Key to Japan's Competitive Success* — McGraw-Hill, 1986
- 📖 Robert S. Kaplan & David P. Norton, *The Balanced Scorecard: Translating Strategy into Action* — Harvard Business School Press, 1996
- 📖 Michael Hammer & James Champy, *Reengineering the Corporation: A Manifesto for Business Revolution* — Harper Business, revised 2003
- 📖 Mikel J. Harry & Richard Schroeder, *Six Sigma: The Breakthrough Management Strategy* — Currency Doubleday, 2000 (Motorola/GE history)
- 📖 Gene Kim, *The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win* — IT Revolution Press, 5th anniversary ed. 2018 (modern TOC application to IT ops)
- 📖 ASCM CSCP Learning System Module 10
- 📰 *Quality Progress* (ASQ monthly), *Industrial Engineer* (IISE), *Operations Research Letters*
