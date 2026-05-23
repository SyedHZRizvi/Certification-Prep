# Module 7: Risk, Compliance & Ethics 🛡️

> **Why this module matters:** CPSM weights ethics, sustainability, and risk heavily — and the questions are almost always judgment scenarios. There's no shortcut: you must internalize the ISM Principles and the risk-management toolkit until they're instinctive.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 4 — SRM and tiering](../Module-04-Supplier-Relationship-Management/Reading.md): risk register builds on tier classification
> - [Module 6 — FCPA, sanctions, FTAs](../Module-06-International-Supply/Reading.md): compliance hooks back here
> - Cross-course: [Security+ Module 5 — Risk Management](../../09-CompTIA-Security-Plus/Module-05-Risk-Management/Reading.md) for ISO 31000 risk taxonomy that's identical to the supply-chain application
> If Module 4 is shaky, pause and review before continuing.

---

## 🚒 A Story: The Tier-3 Supplier Nobody Mapped

In March 2021, the *Ever Given* wedged itself sideways across the Suez Canal for six days. Global supply chains buckled. One mid-sized appliance manufacturer in Ohio took 11 days to figure out what they had on those ships.

Their supplier-mapping went only to **Tier 1** — the suppliers they paid directly. Half of those suppliers had their own suppliers in Asia (Tier 2) and components made from raw materials elsewhere (Tier 3, 4, 5). When Suez blocked, nobody at the Ohio company knew which Tier-3 wafer fab was on which container.

Meanwhile, their largest competitor — a CPSM-trained supply organization — had **mapped its supply chain to Tier 4**, kept a **risk register** updated quarterly, and had pre-arranged **alternate routings via Cape of Good Hope**. The competitor lost 4 days of production. The Ohio firm lost 23 days.

Risk management is not paranoia. It's **knowing what you don't know** before the disaster forces you to learn.

---

## 🗺️ Supply Chain Risk Taxonomy

CPSM expects you to categorize risk into actionable buckets. A common four-category model:

| Category | Examples |
|---|---|
| **Operational** | Supplier failure, quality, delivery, capacity, labor strike |
| **Financial** | Supplier bankruptcy, currency, commodity price swings, payment delays |
| **Strategic** | Supplier consolidates with competitor, technology obsolescence, IP loss |
| **Compliance / Reputational** | Anti-corruption violations, modern slavery, environmental fines, sanctions exposure, child labor |

Some frameworks add:
- **Geopolitical** (war, sanctions, trade conflict)
- **Natural / climate** (hurricane, wildfire, pandemic, drought)
- **Cyber** (ransomware on supplier, data breach)
- **Brand / reputational** (public scandal traced to supplier)

🎯 **Exam tip:** When asked to categorize a risk, pick the dominant bucket but acknowledge cross-impact. A cyber attack on a strategic supplier is **operational + cyber + reputational** simultaneously.

---

## 📋 The Risk Register — Your Operational Tool

A risk register is a living document tracking each identified risk. Standard columns:

| Field | Purpose |
|---|---|
| Risk ID | Unique reference |
| Description | What could happen |
| Category | Operational / financial / etc. |
| Probability | Low / Medium / High (or 1–5) |
| Impact | Low / Medium / High (or 1–5) |
| Risk score | Probability × Impact |
| Owner | Who manages it |
| Treatment strategy | Avoid / Transfer / Mitigate / Accept |
| Mitigation actions | Concrete next steps |
| Status | Open / Monitoring / Closed |
| Review date | Next reassessment |

🎯 **Exam tip:** Risk registers are **living**. Annual review is the minimum; quarterly is best practice for strategic suppliers.

---

## 🎯 Risk Probability × Impact Heatmap

```
                  IMPACT
            LOW   MED   HIGH
PROB  HIGH  Y     R     R
      MED   Y     Y     R
      LOW   G     G     Y
                                 G = Accept / monitor
                                 Y = Mitigate
                                 R = Avoid / transfer / aggressive mitigate
```

---

## 🛠️ The Four Risk Treatment Strategies

CPSM expects you to know and apply each.

| Treatment | When To Use | Examples |
|---|---|---|
| **Avoid** | Risk too large to bear | Exit a country with crippling sanctions exposure |
| **Transfer** | Someone else bears it better | Insurance, contractual indemnification, FX hedging, warranty |
| **Mitigate** | Reduce probability or impact | Dual-source, safety stock, supplier development, SLAs with credits |
| **Accept** | Cost of treatment exceeds expected loss | Minor low-probability risks; document acceptance |

🎯 **Exam pattern:** "A risk has a 5% chance of causing $1M loss; treating it costs $200K." Expected loss = $50K. **Accept** the risk, document it, monitor. Treatment cost outweighs benefit.

🚨 **Trap:** "Always mitigate every risk." Wrong. Some risks should be accepted. Some should be avoided entirely. Some should be transferred. Match treatment to economics.

---

## 🧯 Specific Risk Mitigations By Type

| Risk | Common Mitigations |
|---|---|
| Supplier financial failure | Credit monitoring; reduce dependency; escrow; payment security; second source |
| Single-source dependency | Develop dual source; design in interchangeability |
| Quality | Audits; SQE engineers; SPC; first-article inspection; warranty |
| Delivery | Safety stock; VMI; lead time buffers; carrier diversification |
| Currency | Forward contracts; options; natural hedge; currency clause |
| Commodity price | FP-EPA indexed contracts; hedging; forward buy; substitution |
| Geopolitical | Country diversification; nearshoring; political-risk insurance |
| Cyber | Supplier security assessments; data minimization; contractual SLAs |
| Natural disaster | Geographic diversification; insurance; alternate routings |
| Compliance / sanctions | Screening tools; training; legal review; segregation |
| Modern slavery / child labor | Social audits; supplier code of conduct; whistleblower channel |
| Conflict minerals | Tin/Tungsten/Tantalum/Gold (3TG) tracing; SEC Form SD filing |

---

## 🌱 Business Continuity Planning (BCP)

A formal **business continuity plan** ensures the company can keep operating through disruption.

### Core BCP Elements
1. **Business Impact Analysis (BIA)** — which processes are critical? What's the Maximum Tolerable Downtime (MTD)?
2. **Risk assessment** — what threats are relevant to those processes?
3. **Recovery strategies** — how do we restore each critical process?
4. **Continuity procedures** — playbooks for staff during disruption
5. **Recovery Time Objective (RTO)** — how fast must we restore?
6. **Recovery Point Objective (RPO)** — how much data loss is acceptable?
7. **Testing & exercises** — annual tabletop or real drill
8. **Communication plan** — internal + external stakeholders
9. **Maintenance** — review after every incident or major change

### Supply-Specific BCP
- Alternate-supplier list (qualified ahead of time)
- Safety stock for critical inputs
- Dual-routed logistics
- Pre-negotiated emergency-mode contracts
- Crisis communication tree
- Supplier BCP requirements in contracts

🎯 **Exam tip:** "MTD > RTO" — Maximum tolerable downtime must exceed your recovery target. If RTO is longer than MTD, the business stops functioning before you recover.

---

## ⚖️ Compliance Frameworks Relevant to Supply

| Framework | Scope |
|---|---|
| **ISO 9001** | Quality management |
| **ISO 14001** | Environmental management |
| **ISO 27001** | Information security |
| **ISO 31000** | Risk management |
| **ISO 45001** | Occupational health & safety |
| **SA 8000** | Social accountability (labor practices) |
| **AS9100** | Aerospace quality |
| **IATF 16949** | Automotive quality |
| **NIST CSF** | Cybersecurity (US) |

Suppliers in regulated industries often must hold one or more of these. Buyers should specify and verify.

---

## 🪨 Conflict Minerals (3TG)

Under the US Dodd-Frank Act §1502 and SEC rules, public companies must trace **Tin, Tungsten, Tantalum, Gold** (3TG) back to mines and disclose any sourcing from the Democratic Republic of Congo or adjoining countries where armed groups profit.

### Requirements
- Reasonable Country of Origin Inquiry (RCOI)
- Due diligence following OECD Guidance
- Annual SEC filing (Form SD + Conflict Minerals Report)
- Supply-chain transparency disclosures

Common tools: **Responsible Minerals Initiative (RMI)** — Conflict Minerals Reporting Template (CMRT).

🎯 **Exam pattern:** "Your electronics product contains tantalum capacitors." → 3TG conflict minerals reporting obligation if you're a US-listed company.

---

## 👥 Modern Slavery & Forced Labor

Laws around the world require supply-chain transparency on forced/child labor:

| Law | Country | Scope |
|---|---|---|
| **UK Modern Slavery Act 2015** | UK | Companies >£36M turnover: annual statement |
| **California Transparency in Supply Chains Act** | California, US | Retailers/mfrs >$100M: disclose efforts |
| **Australia Modern Slavery Act 2018** | Australia | Companies >A$100M: annual statement |
| **EU Corporate Sustainability Due Diligence Directive (CSDDD)** | EU | Phased in; broad due-diligence duty |
| **US Uyghur Forced Labor Prevention Act (UFLPA, 2022)** | US import | Rebuttable presumption against goods made in Xinjiang |

🎯 **Exam tip:** Modern-slavery diligence requires **mapping suppliers beyond Tier 1**, on-site audits in high-risk regions, training, and a clear remediation path when issues are found.

---

## 🌍 Sustainability and Social Responsibility

ISM publishes **Principles of Sustainability and Social Responsibility** — a free, foundational document for CPSM. Core principles include:

1. **Anti-corruption** — zero tolerance for bribery
2. **Diversity and inclusiveness in supply base** — supplier diversity programs
3. **Environment** — minimize footprint of supply decisions
4. **Ethics and business conduct** — uphold the highest standards
5. **Financial integrity and transparency** — accurate, honest reporting
6. **Global citizenship** — comply with local laws while upholding global standards
7. **Health and safety** — protect workers in our supply base
8. **Human rights** — eliminate forced and child labor
9. **Labor rights** — fair wages, working hours, freedom of association
10. **Sustainability** — long-term environmental + social + economic balance

🎯 **MEMORIZE THIS.** CPSM scenarios with ethical dilemmas almost always have an answer that aligns with these principles.

### Triple Bottom Line
**People · Planet · Profit** — coined by John Elkington in his 1994 paper "Towards the Sustainable Corporation: Win-Win-Win Business Strategies for Sustainable Development" (Elkington, *California Management Review*, 1994) and expanded in his book *Cannibals with Forks: The Triple Bottom Line of 21st Century Business* (Elkington, 1997, Capstone). Sustainability as the intersection of social, environmental, and economic performance. CPSM rewards this framing in answers. (Note: Elkington himself published a 2018 *HBR* piece, "25 Years Ago I Coined the Phrase 'Triple Bottom Line.' Here's Why It's Time to Rethink It," arguing the term had been reduced to accounting and lost its original transformational ambition — useful nuance for a discussion answer.)

---

## 🏆 ESG in Supply Management

ESG = Environmental, Social, Governance — a framing that traces to the 2004 UN Global Compact report *Who Cares Wins* and is now codified into law through the EU **Corporate Sustainability Reporting Directive (CSRD, effective January 2024 for large EU companies, phasing in through 2028)** and the related **Corporate Sustainability Due Diligence Directive (CSDDD, 2024, with phased deadlines through 2027-2029)**. A useful complementary frame is **Archie Carroll's CSR Pyramid** (Carroll, "A Three-Dimensional Conceptual Model of Corporate Performance," *Academy of Management Review*, 1979; later "The Pyramid of Corporate Social Responsibility," *Business Horizons*, 1991) which sequences corporate responsibilities as: economic → legal → ethical → philanthropic.

Modern supply functions report on:

| Pillar | Examples |
|---|---|
| **Environmental** | Scope 3 emissions (90% of most firms' carbon — from supply chain) · water · waste · circularity |
| **Social** | Diversity spend · labor practices · safety · community |
| **Governance** | Anti-corruption · ethics · transparency · supplier code of conduct |

### Scope 1 / 2 / 3 Emissions (GHG Protocol)
| Scope | What |
|---|---|
| Scope 1 | Direct emissions (your facilities, fleet) |
| Scope 2 | Indirect from purchased energy |
| Scope 3 | All other indirect — including **your supply chain** |

🎯 **Why supply matters:** For most companies, Scope 3 (which includes supply chain) is 70–90% of total emissions. Procurement is the single biggest lever for corporate decarbonization.

---

## 🔐 The ISM Code of Ethics (Summary)

Every CPSM professional is bound by ISM's ethical standards. Core obligations:

1. **Loyalty to employer** — act in their best interest
2. **Justice to those with whom you deal** — fair, honest, transparent
3. **Faith in your profession** — uphold standards; do not bring it into disrepute
4. **Avoid conflicts of interest** — and the appearance of them
5. **Decline gifts of significant value** during active business
6. **Maintain confidentiality** of proprietary information
7. **Promote and uphold responsible sourcing**

🎯 **Exam pattern:** When a scenario presents a tempting unethical option, the right answer is almost always: **decline + document + disclose + escalate**. There are no "minor" ethics violations on the CPSM.

---

## 📊 Case Study — Foxconn / Apple Labor-Rights Audit Lifecycle and UFLPA (2010-2024)

**Situation.** In 2010, Foxconn's Longhua "iPhone City" facility in Shenzhen made global headlines after a cluster of worker suicides — 14 confirmed deaths by mid-2010 against a workforce of ~400,000. Foxconn was Apple's largest assembler; Apple was Foxconn's largest customer. The crisis exposed Apple's then-light supply-chain labor visibility (Apple's first Supplier Code of Conduct dated only to 2005, audits to 2006). What followed over the next 14 years became the most-watched supply-chain labor case in modern business, threading through multiple regulatory regimes.

**Decision.** Apple, with Tim Cook taking over supply chain leadership (and later CEO in 2011), executed a multi-decade response:
1. **Supplier Responsibility Reports** — annual, public, with growing detail. By 2024, Apple was publishing audit findings on hundreds of suppliers including remediation plans.
2. **Independent monitoring** — Fair Labor Association (FLA) brought in for Foxconn 2012 audit; findings included excessive working hours, underage workers in some facilities, unsafe conditions.
3. **Wage and hour reforms** at Foxconn — Apple pressured Foxconn (alongside FLA findings) to reduce work hours from 60+/week to a target of 49, raise base wages, and end illegal use of student "interns" as full-time workers.
4. **Tier-2/Tier-3 visibility** — Apple began mapping smelters of conflict minerals (Module 7 above) and aluminum suppliers.
5. **Geographic diversification away from highest-risk Tier-3 origins** — particularly after the **US Uyghur Forced Labor Prevention Act (UFLPA, enacted December 2021, effective June 2022)** which created a rebuttable presumption against goods made wholly or partly in Xinjiang. Apple, like Nike, H&M, Volkswagen, and others, was forced to map and exit Xinjiang-origin cotton, polysilicon, and certain other inputs — a multi-year project still being executed in 2024-2025.

Foxconn itself moved significant assembly to India and Vietnam (see Module 2 Apple case) — partly driven by labor cost, partly by tariff exposure, partly by labor-rights diversification.

**Outcome.** By 2024, Apple's Supplier Responsibility program audited ~1,000 supplier facilities annually with thousands of corrective-action items. Foxconn's working conditions improved materially (though NGOs continued to flag specific cases). The 2010 suicide cluster did not repeat at the same scale. UFLPA enforcement has led to hundreds of US Customs and Border Protection (CBP) detentions of imported electronics with suspected Xinjiang content, with cumulative value over $3.5B in detained shipments by mid-2024 (CBP UFLPA statistics). Apple itself avoided major CBP detentions through aggressive supply-chain mapping that competitors did not match early enough.

**Lesson for the exam / for practitioners.** This is the textbook **supplier conduct audit lifecycle**:
- **Audit → Findings → Remediation → Re-audit → Disclosure** is the core loop.
- **Tier-1 visibility is insufficient.** UFLPA enforcement requires Tier-3+ mapping for cotton, polysilicon, and certain minerals — and other regulations are catching up.
- **The ISM Principles (sustainability, human rights, labor rights) are now codified into law** in jurisdictions Apple and its peers ship into. What was once "ESG nice-to-have" is now legal compliance.
- **Switching alone doesn't fix the problem** — Apple could not simply switch from Foxconn in 2010 (no alternative at scale), and switching out of Xinjiang requires *multi-tier visibility* you can't acquire overnight.

Note four exam-relevant patterns: (1) when an audit finds a labor violation, the textbook CPSM response is *engage on remediation; escalate; document; prepare contractual action up to termination* — and the Apple-Foxconn case is the playbook executed at scale; (2) Module 7's ISM Principles are explicitly aligned with how Apple frames its supplier code; (3) the **Triple Bottom Line** (Elkington 1994) and **Carroll's CSR Pyramid** (1979) are the academic foundations; (4) UFLPA, EU CSDDD, and UK Modern Slavery Act are converging into a de facto global standard that procurement now owns.

**Discussion (Socratic).**
- Q1: Apple was criticized in 2010 for "audit theater" — paying for audits but not improving conditions. By 2024, the program is widely regarded as the industry leader. What's the specific difference between performative auditing and effective auditing, and which failure mode is more common today?
- Q2: UFLPA creates a *rebuttable presumption* against Xinjiang-origin goods — buyers can clear shipments only by proving the goods are not made with forced labor. Defend the policy as a procurement burden you'd accept. Then attack it as a barrier to legitimate trade. Which would you defend at a Senate hearing?
- Q3: Apple's 2024 Supplier Responsibility Report identifies dozens of suppliers with active corrective-action plans. Some watchdogs argue Apple should *publicly name* every supplier in remediation. Apple does not. What's the trade-off, and which way would you push the policy?

---

## 🚨 Common Ethics Scenarios

| Scenario | Right Answer |
|---|---|
| Supplier offers Super Bowl tickets during negotiation | Decline + disclose per policy |
| Internal stakeholder pushes you to pick their friend's company | Decline + escalate; follow standard qualification |
| Auditor finds child labor at Tier-1 supplier | Engage on remediation; escalate; document; prepare for contractual action up to termination |
| Foreign agent suggests "facilitation payment" | Refuse + document + escalate (UK Bribery Act prohibits; FCPA narrow exception) |
| You inadvertently learned a competitor's bid | Disclose immediately; recuse if needed; preserve fairness |
| Supplier provides confidential data on a competitor | Refuse + return + document |
| You're asked to backdate a PO to fit budget cycle | Refuse; refer to finance policy; document |

---

## 🛡️ The Risk Management Process (5 Phases)

```
1. Identify  →  2. Assess  →  3. Treat  →  4. Monitor  →  5. Review
        ↑________________________________________________|
```

1. **Identify** risks (workshops, supplier mapping, scenario planning)
2. **Assess** probability × impact
3. **Treat** (Avoid / Transfer / Mitigate / Accept)
4. **Monitor** with KPIs, scorecards, external intel
5. **Review** the register periodically and after every incident

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| Risk register | Living list of identified risks + treatment |
| Probability × Impact | Standard risk scoring axes |
| Avoid / Transfer / Mitigate / Accept | The four risk treatments |
| BIA | Business Impact Analysis |
| RTO / RPO | Recovery Time / Point Objective |
| MTD | Maximum Tolerable Downtime |
| BCP | Business Continuity Plan |
| Conflict minerals / 3TG | Tin, Tungsten, Tantalum, Gold (Dodd-Frank §1502) |
| UFLPA | US Uyghur Forced Labor Prevention Act |
| Modern Slavery Act | UK / Australia / California disclosure laws |
| Triple bottom line | People · Planet · Profit |
| ISO 31000 | Risk management standard |
| ISM Principles | Sustainability & Social Responsibility framework |
| Scope 1/2/3 | GHG Protocol emissions categories |
| RMI / CMRT | Responsible Minerals Initiative / Conflict Minerals Reporting Template |

---

## 🚨 Exam Traps

| Trap | Right Lens |
|---|---|
| "Always mitigate every risk" | Match treatment to economics (avoid/transfer/mitigate/accept) |
| "Map only Tier 1" | Map deeper for strategic categories |
| "Annual risk review is enough" | Quarterly for strategic; after every incident |
| "Ethics violations have to be major to matter" | None are minor in CPSM |
| "Compliance is legal's job" | Supply mgmt owns supplier diligence |
| "Scope 3 emissions aren't ours" | They're owned by procurement (biggest carbon lever) |

---

## 💬 Discussion — Socratic Prompts

1. **EU CSRD and the small-supplier squeeze.** Effective January 2024, the EU CSRD requires large companies to report on supply-chain sustainability and obtain data from suppliers. Small suppliers face a major reporting burden they can't easily absorb. Defend a position on whether the cost should be (a) borne by suppliers, (b) borne by buyers, or (c) reduced by mandatory standardized templates. What's the trade-off?
2. **Risk treatment economics revisited.** Module 7 says "accept" the risk when treatment cost exceeds expected loss. But low-probability/high-impact events (Black Swans) systematically violate expected-value math — Nassim Taleb's argument. Build the case that supply organizations should *over*-mitigate Black Swan supply-chain risks even when the textbook math says accept.
3. **The single source you can't get rid of.** A category manager has a single-source supplier in a high-risk jurisdiction. Switching is genuinely impossible for 2-3 years. What's the BEST risk treatment when avoidance is not feasible, transfer is partial, and mitigation has hit a ceiling?
4. **ISM ethics vs local practice.** ISM's code is absolute: decline gifts of significant value. Yet in some markets, refusing a customary gift is a serious offense. Defend a *policy* that resolves this tension at a global company — what would you write in the supplier code of conduct?
5. **Scope 3 emissions as procurement's KPI.** For most companies, Scope 3 is 70-90% of total emissions. Defend the case that procurement should own Scope 3 reduction as its #1 KPI, OR defend the case that it should remain Sustainability's KPI with procurement as a contributor. Which would you push?

---

## ✅ Module 7 Summary

You now know:
- 🗺️ Supply chain risk taxonomy (4-7 categories)
- 📋 The risk register and probability/impact heatmap
- 🛠️ Four risk treatments (Avoid, Transfer, Mitigate, Accept)
- 🌱 BCP / BIA / RTO / RPO / MTD
- ⚖️ Compliance frameworks (ISO 9001/14001/27001/31000, SA 8000, AS9100, IATF 16949)
- 🪨 Conflict minerals (3TG) and Dodd-Frank §1502
- 👥 Modern slavery laws (UK, Australia, California, UFLPA)
- 🌍 ISM Principles of Sustainability & Social Responsibility
- 🏆 ESG and Scope 1/2/3 emissions
- 🔐 The ISM Code of Ethics

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 8: Leadership & Project Management](../Module-08-Leadership-Project-Management/Reading.md)

> **Where this leads.**
> - Inside this course: Module 8 covers the leadership and stakeholder work required to actually implement risk and ESG programs.
> - Cross-course: [Security+ Module 5](../../09-CompTIA-Security-Plus/Module-05-Risk-Management/Reading.md) for ISO 31000 risk taxonomy; [ASCM CSCP Module 9](../../10-ASCM-CSCP/Module-09-Risk-Management/Reading.md) for the broader chain-of-chains risk lens.
> - Practice: Practice Exam 2 has ~20 questions drawn from this module (risk treatments, BCP, conflict minerals, modern slavery, ISM Principles).

---

## 📚 Further Reading (Optional)

- 📖 ISM *Principles of Sustainability and Social Responsibility* — free at ismworld.org
- 📖 ISO 31000:2018 (Risk Management — Guidelines) — overview free from iso.org
- 📖 Elkington, "Towards the Sustainable Corporation" — *California Management Review*, 1994 (Triple Bottom Line origin)
- 📖 Elkington, "25 Years Ago I Coined the Phrase 'Triple Bottom Line.' Here's Why It's Time to Rethink It" — *HBR*, June 2018
- 📖 Carroll, "The Pyramid of Corporate Social Responsibility" — *Business Horizons*, July-August 1991
- 📖 OECD *Due Diligence Guidance for Responsible Supply Chains* — free PDF
- 📖 GHG Protocol Corporate Standard (Scope 1/2/3) — ghgprotocol.org
- 📖 Responsible Minerals Initiative (responsiblemineralsinitiative.org) — CMRT and EMRT templates
- 📖 EU CSRD and CSDDD official documentation — eur-lex.europa.eu
- 📖 *The Risk-Driven Business Model* by Girotra & Netessine (2014, HBS Press)
- 📖 Resilinc, Everstream Analytics, Sphera, Interos — supply-chain risk platforms with public research
