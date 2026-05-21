# Module 7: Risk, Compliance & Ethics 🛡️

> **Why this module matters:** CPSM weights ethics, sustainability, and risk heavily — and the questions are almost always judgment scenarios. There's no shortcut: you must internalize the ISM Principles and the risk-management toolkit until they're instinctive.

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
**People · Planet · Profit** — sustainability as the intersection of social, environmental, and economic performance. CPSM rewards this framing in answers.

---

## 🏆 ESG in Supply Management

ESG = Environmental, Social, Governance. Modern supply functions report on:

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

---

## 📚 Further Reading (Optional)

- 📖 *ISM Principles of Sustainability and Social Responsibility* (free at ismworld.org)
- 📖 ISO 31000 (Risk Management) — overview free
- 📖 OECD Due Diligence Guidance for Responsible Supply Chains
- 📖 GHG Protocol Corporate Standard (Scope 1/2/3)
- 📖 Responsible Minerals Initiative (responsiblemineralsinitiative.org)
- 📖 *The Risk-Driven Business Model* by Girotra & Netessine
- 📖 Resilinc, Everstream Analytics, Sphera supply-chain risk platforms
