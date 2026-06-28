# Module 1: SCM (Supply Chain Management) Foundations & Strategy 🚚

> **Why this module matters:** Roughly a quarter of the CSCP exam (Domain 1) tests strategy, scope, and the SCOR vocabulary. If you can't draw a supply chain on a napkin and label it with SCOR terms, every later module sits on sand.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic business literacy (revenue, margin, working capital, inventory turns)
> - General operations vocabulary (factory, warehouse, distribution, retail)
> - Reading a simple process diagram
>
> No prior supply-chain certification is required, this is the foundation the rest of the CSCP track builds on. If you've completed an MBA operations course, CPIM Module 1, or an undergrad OM elective, skim quickly and use this as a refresher on SCOR 13.0 vocabulary.

---

## ☕ A Story: Maria's Coffee Empire

Meet Maria. She runs **Coastline Coffee**, a 40-store café chain on the US West Coast.

In 2018, Maria sourced beans from a single broker in Seattle. Roasted in one facility. Delivered by one trucking company. She thought she had a "supply chain." She didn't. She had a *pipeline*, and the day her broker's warehouse caught fire, every Coastline store ran dry within four days. Three weeks of lost revenue. Six franchisees threatened to leave.

After the fire, Maria sat down with her ops director and a whiteboard, and they drew **the actual supply chain**:

- 14 growers across Colombia, Ethiopia, and Vietnam
- 3 importers consolidating shipments at the Port of Long Beach
- 2 roasters (one in Oakland, one in San Diego)
- A central DC in Sacramento + 4 regional crossdocks
- 40 stores → end customers (the cup of latte at 7:14 AM)
- A reverse channel for spent grounds (sold to a composting partner)

Same beans. Same company. But now Maria can see the whole thing, flows of *product*, *information*, and *cash*. She can spot risk. She can choose where to invest. She can talk to a roaster in Oakland using the same vocabulary an MIT professor would use.

**That's what a supply chain professional does.** And the language Maria's team uses to describe it, that's SCOR. This module gives you that language.

---

## 📚 What Is a Supply Chain? (Define it cold)

The APICS dictionary says a supply chain is:

> *The global network used to deliver products and services from raw materials to end customers through an engineered flow of information, physical distribution, and cash.*

Three flows. Memorize them:

| Flow | Direction | Examples |
|------|-----------|----------|
| **Product / Material** | Mostly upstream → downstream | Beans, components, finished goods, returns |
| **Information** | Both directions | Forecasts, orders, ASNs, POs, invoices, EDI (Electronic Data Interchange) |
| **Cash / Financial** | Mostly downstream → upstream | Payments, credit, financing, factoring |

🎯 **Exam tip:** If a question asks "what flows in a supply chain?" the answer is **three flows**: material, information, and cash. Not just product.

### Supply chain vs. value chain vs. logistics

Students mix these up constantly. The exam will not.

| Concept | Scope | Who Coined It | Notes |
|---------|-------|---------------|-------|
| **Logistics** | Movement + storage of goods, services, info from point of origin to consumption | Council of Logistics Management (now CSCMP) | A *subset* of supply chain |
| **Supply chain** | All firms + processes from raw material to end consumer (and return) | APICS | Includes logistics + procurement + manufacturing + service |
| **Value chain** | Primary + support activities a firm performs to create margin | Michael Porter (1985) | Internal to one firm; supply chain spans many firms |
| **Demand chain** | Reverse view, pulled by customer demand | Various | Same physical chain, different mental model |

> 🚨 **Trap on the exam:** "Logistics" and "supply chain" are NOT synonyms. Logistics is one slice. Supply chain is the whole pie.

---

## 🧩 The SCOR Model 13.0, Your Single Most Important Framework

The Supply Chain Operations Reference (SCOR) model is maintained by ASCM. It's the de-facto language of supply chain. SCOR 13.0 (published 2017, still current for exam purposes alongside the newer "Digital Standard") defines **six top-level processes**:

```
       ┌──────────────────────────────────────────────────┐
       │                       PLAN                       │
       └──────────────────────────────────────────────────┘
            ↑          ↑           ↑           ↑
       ┌────┴────┐ ┌───┴────┐ ┌────┴────┐ ┌────┴────┐
       │ SOURCE  │→│  MAKE  │→│ DELIVER │→│ RETURN  │
       └─────────┘ └────────┘ └─────────┘ └─────────┘
            ↑          ↑           ↑           ↑
       ┌────┴──────────┴───────────┴───────────┴────┐
       │                     ENABLE                  │
       └─────────────────────────────────────────────┘
```

| SCOR Process | Question It Answers | Example Activity |
|--------------|---------------------|------------------|
| **Plan** | What do we forecast / balance / budget? | S&OP (Sales and Operations Planning), demand planning, supply planning |
| **Source** | Where do we buy? From whom? | Procurement, supplier mgmt, inbound receiving |
| **Make** | How do we produce / transform? | MTS, MTO, ETO, assembly, QC |
| **Deliver** | How do we get it to the customer? | Order mgmt, warehousing, transport, returns auth |
| **Return** | How do we handle reverse flow? | Defective, MRO, end-of-life, recall |
| **Enable** | What's the supporting infrastructure? | IT, governance, compliance, talent, risk |

### The 4 levels of SCOR detail

| Level | Name | Example |
|------:|------|---------|
| 1 | Process types | Plan, Source, Make, Deliver, Return, Enable |
| 2 | Process categories | Make-to-Stock (sM1), Make-to-Order (sM2), Engineer-to-Order (sM3) |
| 3 | Process elements / activities | sM1.1 Schedule production, sM1.2 Issue material… |
| 4 | Implementation (company-specific) | Your firm's actual ERP (Enterprise Resource Planning) workflow |

🧠 **Memory hook:** "**P**lease **S**end **M**oney **D**aily, **R**eturns **E**xpected" → P-S-M-D-R-E.

### SCOR also defines three performance dimensions you'll see again:

| Dimension | Attribute Examples |
|-----------|--------------------|
| **Customer-facing** | Reliability (perfect order), Responsiveness (cycle time), Agility (upside flexibility) |
| **Internal-facing** | Cost (total SC mgmt cost, COGS (Cost of Goods Sold)), Asset (cash-to-cash, inventory days, asset turns) |

> 🎯 **Exam tip:** When you see "perfect order" or "OTIF (On-Time In-Full)," that's a SCOR Reliability metric. "Cash-to-cash" is an Asset metric. "Upside supply chain flexibility" is Agility.

---

## 🎯 Supply Chain Strategy: Aligning With Corporate Strategy

**Hau Lee's "Triple-A" Supply Chain framework** (Hau L. Lee, *California Management Review* 44(3), Spring 2002, "Aligning Supply Chains with Uncertainty"; expanded in his 2004 HBR article *"The Triple-A Supply Chain"*, Stanford GSB) is gospel on the exam. Lee maps supply chains across two axes, demand uncertainty and supply uncertainty:

|                 | **Low demand uncertainty** | **High demand uncertainty** |
|-----------------|---------------------------|------------------------------|
| **Low supply uncertainty**  | **Efficient** SC (groceries, basic apparel) | **Responsive** SC (fashion, consumer electronics) |
| **High supply uncertainty** | **Risk-hedging** SC (hydroelectric, agriculture) | **Agile** SC (high-end electronics, semiconductors) |

| Strategy | Goal | Example | Inventory Philosophy |
|----------|------|---------|----------------------|
| **Efficient** | Lowest cost-to-serve | Sugar, salt, light bulbs | Lean / low |
| **Responsive** | React fast to fluctuating demand | Zara, Apple iPhones | Moderate buffers |
| **Risk-hedging** | Pool resources to absorb supply shocks | Oil refining, copper | Strategic reserves |
| **Agile** | Both responsive AND risk-hedged | Aerospace, GPUs in 2023 | Flexible + buffered |

### Fisher's framework, even more famous

**Marshall L. Fisher, "What Is the Right Supply Chain for Your Product?"** (Harvard Business Review, March-April 1997, Wharton). Match supply chain to **product type**:

| Product Type | Demand Profile | Right Supply Chain |
|--------------|---------------|--------------------|
| **Functional** (toothpaste, milk) | Stable, predictable | **Efficient / cost-focused** |
| **Innovative** (smartphones, fashion) | Volatile, short life | **Responsive / market-focused** |

> 🚨 **Trap on the exam:** A common wrong answer pairs an innovative product with an efficient supply chain. "Best price" supply chains are wrong when product life is 6 weeks.

### Strategy must cascade

```
Corporate strategy ──► Business strategy ──► Functional strategy ──► SC strategy
```

If corporate strategy is "differentiate on speed," your SC strategy can't be "lowest unit cost." This is the single most-tested concept in Domain 1. Look for misaligned answers.

---

## 🏆 Competitive Priorities (Order Winners & Order Qualifiers)

**Terry Hill, *Manufacturing Strategy*** (Macmillan, 1985; 4th edition Palgrave 2017, London Business School / OU School of Management). The exam loves these two terms.

| Term | Definition | Example |
|------|------------|---------|
| **Order qualifier** | The minimum bar to be considered | "All laptops must have ≥ 8 GB RAM" |
| **Order winner** | The reason the customer chooses YOU | "Apple laptops have 18-hour battery + Retina display" |

What was an order **winner** five years ago is often a **qualifier** today. The exam will test that progression.

The five common competitive priorities:

1. **Cost** (lowest price)
2. **Quality** (conformance + performance)
3. **Delivery** (speed + reliability)
4. **Flexibility** (volume, mix, new-product)
5. **Innovation** / time-to-market

---

## ⬆️ Push vs. Pull (and the Decoupling Point)

| Approach | Trigger | Inventory | Lead Time | Examples |
|----------|---------|-----------|-----------|----------|
| **Push** | Forecast / plan | Built ahead | Short customer lead | Make-to-Stock retail goods |
| **Pull** | Actual customer demand | Built on order | Longer customer lead | Make-to-Order, Engineer-to-Order |
| **Push-Pull hybrid** | Push to a decoupling point, pull afterward | Strategic buffer | Mixed | Dell PC assembly (components push, assembly pull) |

The **customer order decoupling point (CODP)** is where the supply chain switches from forecast-driven (push) to order-driven (pull). Move it upstream → shorter customer lead time but more inventory risk. Move it downstream → less inventory but longer customer waits.

```
   FORECAST-DRIVEN (push)        |        ORDER-DRIVEN (pull)
   ───────────────────────────►  CODP  ───────────────────────────►
   Raw mat → Sub-assy → Finished |
                                 ▲
                       Strategic buffer lives here
```

🎯 **Exam tip:** "Postponement" is the classic strategy of moving the CODP downstream. Hewlett-Packard's "delayed differentiation" of printers (configure region-specific power packs at the regional DC, not the factory) is the textbook example.

---

## 🐂 The Bullwhip Effect

Forecast errors amplify as you move *upstream* in a supply chain. Tiny demand swings at the customer become massive order swings at the raw material supplier.

```
      Customer demand   Retailer orders   Distributor orders   Factory orders
   ┌─┐    ┌─┐               ┌──┐   ┌──┐         ┌────┐    ┌────┐      ┌──────┐ ┌──────┐
───┘ └────┘ └──     ───┐  ┌─┘  └───┘  └─    ───┐ │    │  ┌─┘    └───  ┐│      │ │      │
                       └──┘                    └─┘    └──┘            └┘      └─┘      └
```

Causes (memorize, they appear as multi-select on the exam):

1. **Demand forecast updating** (each tier re-forecasts independently)
2. **Order batching** (weekly POs instead of continuous)
3. **Price fluctuations** (forward buying on promotions)
4. **Rationing & shortage gaming** (over-ordering when supply is tight)
5. **Long lead times** (amplify reaction)

Counter-measures: shared point-of-sale data (VMI (Vendor Managed Inventory), CPFR (Collaborative Planning, Forecasting, and Replenishment)), smaller batches, EDLP pricing, shorter lead times.

---

## ⚙️ Manufacturing Strategies (CODP variants)

| Strategy | Acronym | CODP Location | Customer Lead Time | Example |
|----------|---------|---------------|--------------------|---------|
| Make-to-Stock | MTS | Finished goods | Shortest | Coca-Cola, toothpaste |
| Assemble-to-Order | ATO | Sub-assemblies | Short | Dell laptops |
| Make-to-Order | MTO | Raw materials | Medium | Custom kitchen cabinets |
| Engineer-to-Order | ETO | Design phase | Longest | Power plants, ships |

The trade-off: as you move from MTS → ETO, you carry **less inventory risk** but customers wait **longer**.

---

## 🌍 Globalization, Reshoring & The Modern Forces

Forces shaping today's supply chains (the exam will frame questions around these):

| Force | Impact | Example |
|-------|--------|---------|
| **Globalization** | Sourcing from anywhere; longer chains | Apple's 200+ supplier sites |
| **Reshoring / nearshoring** | Bring production closer to demand | Mexico for US apparel |
| **Digitalization** | IoT, blockchain, AI in SC | Maersk TradeLens (now sunset) |
| **Sustainability** | Reduce carbon, circular flows | Patagonia's Worn Wear |
| **Risk & resilience** | Diversified sourcing, redundancy | Post-COVID dual-source mandates |
| **Customer expectations** | Same-day, omnichannel | Amazon next-day Prime |

---

## 📊 Case Study, Maersk and the Ever Given Suez Blockage (March 2021)

**Situation.** On 23 March 2021, the 400-metre container ship *Ever Given* wedged itself diagonally across the Suez Canal, halting roughly 12% of global trade for six days. A.P. Møller-Maersk the world's largest container line by volume, headquartered in Copenhagen had 30+ vessels in the immediate queue and dozens more headed for the canal. With 12,000+ TEU-class container ships unable to pass, every option (wait, divert around the Cape of Good Hope adding 9–14 days, redistribute cargo via European feeder networks) carried tens of millions of dollars in cost and cascading SLA (Service Level Agreement) penalties for cargo owners, from IKEA flat-packs to Caterpillar parts to Adidas footwear.

**Decision.** Maersk made three near-simultaneous calls, broadcast publicly through hourly customer advisories: (1) **multi-modal contingency** re-routed 28 vessels around the Cape of Good Hope on the same day the salvage operation began, accepting the longer transit rather than gamble on Suez reopening; (2) **information transparency** published vessel-by-vessel ETAs and proactively notified BCO (beneficial cargo owner) customers, rather than wait for inquiries; (3) **capacity reallocation**, flexed inland European rail capacity (their dual-brand Maersk + Hamburg Süd network plus DSV partnerships) to absorb diverted Mediterranean volumes.

**Outcome.** The canal reopened 29 March 2021, faster than Maersk's worst case. Industry-wide, Lloyd's List estimated the blockage cost **$9.6 billion in held-up trade per day**. Maersk's 2021 EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) hit a record **$24 billion** partially driven by spot freight rate explosions the disruption triggered. Critically, customer surveys post-event ranked Maersk first among carriers for "crisis communication," driving a ~9% gain in long-term contract share in the following 12 months. The Cape diversion cost Maersk an estimated $80–100M in extra bunker and crew expense but versus the option value of stuck vessels with perishable cargo, the math worked.

**Lesson for the exam / for practitioners.** This is the canonical 2020s case for **Hau Lee's "Agile" supply chain** high demand uncertainty (which lane will customers actually want?) plus high supply uncertainty (when will the canal reopen?) demanded BOTH responsive moves AND risk-hedging diversification. It's also a textbook example of SCOR **Enable** plus **Deliver** processes under stress: governance, communication, and risk management are not soft "extras" they are competitive weapons when efficient-mode chains collapse. Pure-cost optimization (single lane via Suez, minimal slack) maximized profit in the 2010s and lost catastrophically in March 2021.

**Discussion (Socratic).**
- Q1: If you were the CEO (Chief Executive Officer) of a CPG firm with 40 containers stuck on the Ever Given itself, and Maersk offered you (a) wait + a 50% rebate, or (b) air-freight transshipment at 8× the cost, how would you decide, and what data would you demand first?
- Q2: Maersk's choice to divert around the Cape *before* the canal status was known looks brilliant in hindsight. What's the analogous decision in your industry where the "expensive insurance" move pays off only in tail-risk events, and how would you defend that spend to a CFO (Chief Financial Officer) in a normal year?
- Q3: Lloyd's List has called Suez "the single most fragile chokepoint in global trade." Yet 95% of pre-2021 supply-chain strategies routed through it because it's cheapest. What's the principled framework (cite Hau Lee or Fisher) for when concentration risk is acceptable vs unacceptable?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Supply chain = logistics" | Logistics is a subset; SC also covers sourcing, planning, returns, finance |
| "SCOR is software" | SCOR is a *reference model*, a vocabulary and process framework, not an app |
| "Push and pull are about manufacturing only" | They apply to inventory, distribution, even forecasting |
| "Best practice everywhere" | Hau Lee's matrix says you tailor the SC to the product, not copy Zara |
| "Bullwhip is solved by better forecasting" | Better forecasting helps a little; *information sharing* (POS, CPFR) helps far more |
| "Innovative products need efficient SC for cost" | Wrong, they need responsive. Functional products need efficient. (Fisher) |

---

## 🚨 Exam Traps

1. **Order winner vs qualifier confusion**, Qualifiers get you to the table; winners close the deal. Each evolves over time.
2. **Lead time = customer wait**, Not always. Manufacturing lead time ≠ customer-facing lead time (the CODP determines that).
3. **"Reduce inventory" = always right**, No. Risk-hedging SCs hold strategic inventory by design.
4. **SCOR has 5 processes**, It has **6** since version 11 (Enable was added). Old textbooks say 5.
5. **Lean = Agile**, They overlap but aren't the same. Lean = waste removal. Agile = flexibility under uncertainty.
6. **Cash-to-cash is positive = good**, Lower (or negative, like Amazon) is better. It measures days your cash is tied up.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Supply chain** | Global network delivering products / services from raw mat to end customer via flows of material, information, and cash |
| **SCOR 13.0** | Reference model with 6 processes: Plan, Source, Make, Deliver, Return, Enable |
| **Value chain** | Porter's model of primary + support activities within a single firm |
| **Bullwhip effect** | Demand-variability amplification moving upstream in a supply chain |
| **CODP** | Customer Order Decoupling Point, where push transitions to pull |
| **Postponement** | Delaying final product differentiation to reduce inventory risk |
| **MTS / ATO / MTO / ETO** | Spectrum from forecast-driven (Make-to-Stock) to design-on-demand (Engineer-to-Order) |
| **Order qualifier** | Minimum competitive criterion to be considered |
| **Order winner** | The criterion that wins the sale |
| **Efficient / Responsive / Risk-hedging / Agile SC** | Hau Lee's 4 strategy types based on demand & supply uncertainty |
| **Perfect order** | On-time, complete, undamaged, with correct documentation |
| **Cash-to-cash cycle** | Days from paying suppliers to collecting from customers (lower = better) |
| **Reshoring** | Returning production to the home country |
| **Functional vs innovative product** | Fisher's product-type dichotomy driving SC strategy |
| **APICS dictionary** | Reference glossary, definitions tested verbatim on CSCP |

---

## ✅ Module 1 Summary

You now know:

- 🎯 The three flows of any supply chain (material, information, cash)
- 🧩 SCOR 13.0's six top-level processes and its four levels of detail
- 🏆 Hau Lee's strategy matrix and Fisher's product-SC matching
- 🐂 The bullwhip effect, five causes and the countermeasures
- ⬆️ Push vs pull and how the CODP shapes lead time and inventory
- ⚙️ MTS, ATO, MTO, ETO and when each fits
- 🌍 The modern forces (globalization, reshoring, digitalization, sustainability)

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md), pay special attention to SCOR overviews
2. ✏️ Take [Quiz.md](./Quiz.md), aim for 20/24 minimum
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Supply Chain Design](../Module-02-Supply-Chain-Design/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 2 takes the SCOR vocabulary into network-design and make-or-buy decisions; Module 4 turns the planning hierarchy into the S&OP / MPS / MRP (Material Requirements Planning) cascade; Module 9 returns to Hau Lee's framework through a sustainability + resilience lens.
> - Cross-course: `11-ASCM-CPIM` deepens the Plan/Make detail one tier below SCOR; `12-ASCM-CLTD` takes Deliver and Return into logistics depth; `13-ISM-CPSM` extends Source into the procurement strategy depth.
> - Practice: Practice Exam 1 contains roughly 12–14 questions drawn from this module's frameworks (SCOR, Hau Lee, Fisher, bullwhip, CODP). The Final Mock has cross-module synthesis questions tying SCOR-Enable to risk + sustainability.

---

## 💬 Discussion, Socratic prompts

Use these as journal prompts, study-group questions, or interview-prep drills. Each is open-ended; the best answers cite Fisher, Hau Lee, Porter, or APICS dictionary definitions explicitly.

1. **The "efficient or responsive" inheritance.** You're hired as Chief Supply Chain Officer at a 40-year-old grocery wholesaler that has historically run an *efficient* SC (Fisher), lowest cost, predictable volumes, low SKU (Stock Keeping Unit) churn. The new CEO wants to launch a fresh-prepared-meals line (innovative product per Fisher). Defend BOTH "run two parallel supply chains, one efficient + one responsive" AND "extend the existing efficient SC because cost discipline is the firm's culture and you can't switch culture in 18 months." Which would you defend at the board?
2. **SCOR Enable: real or paper?** A skeptical operations VP says SCOR's Enable process is "just IT overhead, Plan/Source/Make/Deliver/Return is where the real work is." Build the strongest counter-argument that Enable belongs as a top-level process, using the Maersk/Ever Given case from this module and at least one APICS dictionary attribute as evidence.
3. **The CODP move you can't undo.** A consumer electronics firm is debating moving its CODP from "finished goods at the regional DC" (push to FG, current) to "sub-assemblies at the central plant" (ATO). Customer wait goes from 1 day to 5 days; inventory drops 60%. Walk through who wins and who loses in each function (sales, ops, finance, customer service). Which functional leader would torpedo the project, and what concession would you give them?
4. **Hau Lee's framework under tariff shock.** Donald Trump's 2025 tariff regime made many "efficient" supply chains suddenly "high supply uncertainty." Using Hau Lee's 4-quadrant matrix, what's the migration path: efficient → ??? Defend whether you'd move to risk-hedging (multi-source) or to agile (responsive + risk-hedged), and what the carrying-cost penalty looks like for each.
5. **Why the bullwhip survives every fix.** Forrester documented the bullwhip effect in 1958. We've had EDI since the 1980s, VMI since the 1990s, CPFR since 2002, and ML demand sensing since 2017. Yet bullwhip during COVID-19 (2020-2022) was as bad as ever. Construct an honest argument for *why*, what root cause does every solution miss, and is there a structural fix or just better mitigation?

---

## 📚 Further Reading (Optional)

- 📖 Hau L. Lee, *"Aligning Supply Chains with Uncertainty"*, California Management Review, 44(3), 2002 (Stanford GSB)
- 📖 Hau L. Lee, *"The Triple-A Supply Chain"*, Harvard Business Review, October 2004 (the popular expansion)
- 📖 Marshall L. Fisher, *"What Is the Right Supply Chain for Your Product?"*, HBR, March-April 1997 (Wharton)
- 📖 Michael E. Porter, *Competitive Strategy*, Free Press / Harvard Business School Press, 1980 (the value chain reference)
- 📖 Terry Hill, *Manufacturing Strategy*, Palgrave Macmillan, 4e 2017 (order winner / qualifier original)
- 📖 SCOR Digital Standard reference: <https://scor.ascm.org/>
- 📖 *Designing and Managing the Supply Chain* (Simchi-Levi, Kaminsky, Simchi-Levi), McGraw-Hill, 4e 2021, chapters 1–3 mirror this module
- 📖 The classic MIT Sloan "Beer Game" simulation (Sterman, Sloan School), best way to internalize bullwhip
- 📰 Lloyd's List, *"Ever Given and the $9.6B day"*, March 2021 (the canonical Suez chokepoint reporting)
- 📰 ASCM, *SCM Now* magazine, 2024-2026 issues for current SCOR and Hau Lee applications
