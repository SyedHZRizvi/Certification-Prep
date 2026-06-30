# Module 9: GRC, Risk & Compliance ⚖️

> **Why this module matters:** Domain 5 (Security Program Management & Oversight) is **20%** of the exam. Most engineers underestimate it, and lose points. This module is heavy on definitions, formulas (ALE/SLE/ARO), framework names, and "vendor agreement" acronyms (MSA, NDA, MOU, SLA, SOW, BPA). Memorization-heavy but very high-yield.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Control types and categories](../Module-01-Security-Fundamentals/Reading.md), risk treatments produce *controls*.
> - General business literacy, read a balance sheet enough to know what "asset value" and "fiscal year" mean. Risk math (SLE, ALE) lives at the intersection of finance and security.
> - Awareness of major regulatory regimes by name, you don't need to *cite* HIPAA or GDPR articles, but you should recognize their domains.

---

## 🍕 A Story: Buying Car Insurance

When you buy car insurance, you make a chain of decisions almost identical to enterprise risk management:

- **Risk identification:** "What could go wrong?", collision, theft, weather, liability.
- **Risk analysis:** "How likely × how bad?", collision is moderate likelihood, very expensive; theft varies by neighborhood.
- **Risk register:** A list with each risk + likelihood + impact + your owner (you).
- **Risk treatment:**
  - **Avoid:** Don't own a car at all.
  - **Mitigate:** Install an alarm, drive defensively.
  - **Transfer:** Buy insurance.
  - **Accept:** Skip collision coverage on a $500 beater.
- **Risk tolerance / appetite:** Some people happily skip comprehensive coverage; others want the maximum.
- **Continuous monitoring:** Re-shop annually; reassess after a move or accident.

Enterprise security risk works exactly the same, just with bigger words and more acronyms. The rest of this module is the formal vocabulary.

---

## 🏛️ Governance, Who Decides The Rules

### Governance layers (top → bottom)
| Layer | What |
|-------|------|
| **Board of Directors** | Ultimate accountability; risk oversight |
| **Risk / Audit / Security committees** | Subsets of the board |
| **CISO / Executive sponsor** | Owns the security program |
| **Policies** | High-level rules ("we will encrypt PII") |
| **Standards** | Specific requirements ("use AES-256-GCM") |
| **Procedures** | Step-by-step instructions ("how to rotate keys") |
| **Guidelines** | Recommendations (non-mandatory) |
| **Baselines** | Minimum acceptable configurations |

### Documents Sec+ tests
| Document | Purpose |
|----------|---------|
| **AUP** (Acceptable Use Policy) | What users may/may not do |
| **Information Security Policy** | Overall program statement |
| **Password Policy** | Length, complexity, rotation |
| **Privacy Policy** | How personal data is handled |
| **Incident Response Plan** | How we respond to incidents |
| **Business Continuity Plan (BCP)** | How we keep running during disruption |
| **Disaster Recovery Plan (DRP)** | How we restore after disaster |
| **SDLC Policy** | How we build secure software |
| **Change Management Policy** | How we change production |
| **Data Classification Policy** | How we label data sensitivity |
| **Data Retention Policy** | How long we keep what |
| **BYOD Policy** | Rules for personal devices |
| **Onboarding / Offboarding Procedures** | Account lifecycle |

🎯 **Hierarchy note:** Policies > Standards > Procedures > Guidelines. Policies say WHAT and WHY; standards say WHICH and HOW MUCH; procedures say HOW; guidelines say "consider this."

---

## ⚖️ Risk Management, Vocabulary You Must Memorize

### Core risk terms

| Term | Definition |
|------|------------|
| **Asset** | Something of value (data, system, person, reputation) |
| **Vulnerability** | Weakness in the asset |
| **Threat** | Potential cause of harm (actor or event) |
| **Risk** | Likelihood × Impact of a threat exploiting a vulnerability |
| **Likelihood / Probability** | How likely is this scenario? |
| **Impact** | How bad if it happens? |
| **Inherent risk** | Risk before any controls |
| **Residual risk** | Risk remaining after controls |
| **Risk appetite** | How much risk the org is willing to pursue |
| **Risk tolerance** | How much variation from appetite is OK |
| **Risk register** | The living catalog of risks |
| **Risk owner** | Named human accountable per risk |
| **KRI** (Key Risk Indicator) | Metric that signals risk increasing |

### Risk Analysis types

| Type | What |
|------|------|
| **Qualitative** | Subjective scales (Low/Med/High; heat map) |
| **Quantitative** | Numbers and formulas (SLE, ALE) |
| **Semi-quantitative** | Hybrid (numeric ranges with qualitative labels) |

### Quantitative Formulas (KNOW THESE COLD)

```
SLE  = AV × EF
ARO  = expected number of occurrences per year
ALE  = SLE × ARO
```

Where:

- **AV** = Asset Value (e.g., $200,000 server)
- **EF** = Exposure Factor (% of asset value lost per incident)
- **SLE** = Single Loss Expectancy ($ per single occurrence)
- **ARO** = Annualized Rate of Occurrence (how many per year)
- **ALE** = Annualized Loss Expectancy ($ per year)

### Worked example
- Server worth $200,000. Each ransomware event destroys 30% of its value ($60,000) and we expect 0.25 events/year.
- SLE = $200,000 × 0.30 = $60,000
- ALE = $60,000 × 0.25 = $15,000/year
- Would you spend $20k/year on a control to prevent this? Only if your appetite says no, ALE is just the math input.

### Risk Treatment (the 4-5 strategies)

| Strategy | What | Example |
|----------|------|---------|
| **Avoid** | Stop the activity entirely | Don't offer that product line |
| **Mitigate** (reduce) | Apply controls | Buy EDR, add MFA |
| **Transfer** | Shift to a third party | Cyber insurance, outsource to MSSP |
| **Accept** | Acknowledge and live with it | Documented risk acceptance signed by exec |
| **Share** (sometimes 5th) | Distribute risk among parties | Joint venture; consortium |

🎯 **Exam pattern:** Treatment → action: cyber insurance = transfer; EDR = mitigate; "we'll stop selling that" = avoid; "we'll do nothing" with sign-off = accept.

---

## 🤝 Third-Party Risk Management

### Vendor lifecycle
1. **Due diligence**, research the vendor (financial health, security posture, breach history, references)
2. **Risk assessment / questionnaire**, SIG, CAIQ, SOC 2 reports
3. **Contracts**, terms encode security expectations
4. **Onboarding**, provision access, integrate
5. **Continuous monitoring**, security scorecards, news monitoring, periodic reassessment
6. **Right to audit**, clause allowing you to audit them
7. **Offboarding**, remove access, retrieve data, certify destruction

### Vendor agreement types, MEMORIZE these acronyms

| Acronym | Means |
|---------|-------|
| **NDA** (Non-Disclosure Agreement) | Mutual or one-way confidentiality |
| **MSA** (Master Service Agreement) | Umbrella contract covering ongoing relationship |
| **SLA** (Service Level Agreement) | Performance metrics and remedies (uptime, response time) |
| **MOU / MOA** (Memorandum of Understanding / Agreement) | Non-binding (MOU) or binding (MOA) statement of intent |
| **SOW** (Statement of Work) | Specific project scope and deliverables under an MSA |
| **BPA** (Business Partnership Agreement) | Defines partner relationship and responsibilities |
| **ISA** (Interconnection Security Agreement) | Two systems connect, security requirements |
| **MoA / Memorandum of Agreement** | Binding form of MOU |
| **DPA** (Data Processing Agreement) | GDPR-required when a processor handles personal data |

🎯 **Common Sec+ trap:** SLA is about performance/uptime, NOT scope. SOW is about scope under an MSA.

### Vendor risk concepts
- **Fourth-party risk**, your vendor's vendors
- **Supply-chain risk**, components, libraries, services
- **Continuous monitoring**, re-evaluate vendors annually + on events
- **Independent assessments**, SOC 2 Type II, ISO 27001 cert, PCI ROC

---

## 📋 Compliance, Frameworks & Regulations

### Frameworks (voluntary)

Citation note for the framework table:

- **NIST CSF** was first published as v1.0 in February 2014 (response to Executive Order 13636, *Improving Critical Infrastructure Cybersecurity*, Feb 2013). **v1.1** April 2018. **v2.0** finalized 26 February 2024, added the new **Govern** function and broadened scope beyond critical infrastructure.
- **ISO/IEC 27001** was originally published October 2005, revised October 2013, **most recent revision October 2022** (the version certification bodies now audit to). ISO/IEC 27002 (the implementation guidance) was revised February 2022.
- **CIS Controls v8** (Center for Internet Security, May 2021), formerly the SANS Top 20.
- **COBIT 2019** (ISACA, 2018-2019), the governance-focused framework, distinct from CSF.

| Framework | What | Notes |
|-----------|------|-------|
| **NIST CSF** | Cybersecurity Framework: Identify → Protect → Detect → Respond → Recover → (Govern in v2) | US, broadly adopted; mapping-friendly |
| **NIST SP 800-53** | Control catalog (1000+ controls) | Required for US federal agencies |
| **NIST RMF** | Risk Management Framework | How federal agencies apply 800-53 |
| **ISO 27001 / 27002** | ISMS standard + control set | International; certifiable |
| **CIS Controls** (v8) | 18 prioritized controls | Practical implementation guide |
| **COBIT** | IT governance framework | ISACA |
| **CSA CCM** | Cloud Controls Matrix | Cloud-specific |
| **MITRE ATT&CK** | Adversary TTPs (not a control framework but referenced) | |
| **HIPAA Security Rule** | Healthcare in US | Federal regulation; not a framework |

### Regulations (mandatory)
| Reg | Scope |
|-----|-------|
| **HIPAA** | US healthcare protected health info (PHI) |
| **HITECH** | Adds breach notification to HIPAA |
| **GLBA** (Gramm-Leach-Bliley) | US financial customer info |
| **SOX** (Sarbanes-Oxley) | US public-company financial reporting |
| **PCI-DSS** | Credit card processors (contractual, not statutory) |
| **GDPR** | EU personal data; extraterritorial |
| **CCPA / CPRA** | California consumer privacy |
| **FERPA** | US student education records |
| **FISMA** | US federal information security |
| **NERC CIP** | North American electric utilities |
| **ITAR / EAR** | US export controls |

### Compliance terms
- **Attestation**, formal statement (e.g., SOC 2) by an independent auditor
- **Audit**, formal examination by an internal or external party
- **Assessment**, broader, often less formal
- **Continuous compliance**, ongoing, not just at audit time
- **Compliance reporting**, internal/external
- **Penalties**, fines, license loss, criminal charges
- **Right to be forgotten** (GDPR), data subjects can demand deletion

---

## 📊 Audits vs Assessments vs Tests

| Activity | Who | Purpose |
|----------|-----|---------|
| **Internal audit** | Internal audit team (independent of mgmt) | Verify controls work |
| **External audit** | Independent third party | Provide attestation (SOC 2, ISO 27001) |
| **Regulatory exam** | Regulator (PCI QSA, state, federal) | Verify compliance |
| **Self-assessment** | The team itself | Continuous improvement |
| **Penetration test** | Internal/external testers | Find exploitable weaknesses |
| **Vulnerability scan** | Automated tools | Find known CVEs |
| **Gap analysis** | Internal/consultant | Current vs target |

---

## 🛠️ Business Continuity & Disaster Recovery (BCP / DR)

### Key metrics, MEMORIZE
| Acronym | Means | Owned by |
|---------|-------|----------|
| **RTO** (Recovery Time Objective) | Max acceptable downtime | Business |
| **RPO** (Recovery Point Objective) | Max acceptable data loss (in time) | Business |
| **MTTR** (Mean Time To Repair/Recover) | Average actual recovery time | Engineering |
| **MTBF** (Mean Time Between Failures) | Average time between failures | Engineering |
| **MTTF** (Mean Time To Failure) | Average lifespan of non-repairable system | Engineering |
| **MTTD** (Mean Time To Detect) | Average time to notice an incident | Security |
| **MTTC** (Mean Time To Contain) | Average time to contain | Security |

🎯 **RTO vs RPO**, RTO is *time until back up* (downtime tolerance). RPO is *data loss* (how far back will we go to restore).

### BIA (Business Impact Analysis)
- Identifies critical processes
- Quantifies downtime impact (financial, regulatory, reputational)
- Drives RTO/RPO targets per process
- Inputs into the BCP

### Site types (disaster recovery)
| Site | Description | RTO |
|------|-------------|-----|
| **Hot site** | Fully equipped, real-time data sync, ready to go | Minutes/hours |
| **Warm site** | Equipment in place, periodic data sync, needs setup | Hours/days |
| **Cold site** | Empty facility + power/cooling | Days/weeks |
| **Cloud DR** | Pilot light / warm standby / active-active in cloud | Varies |
| **Mobile site** | Trailer/container DR | Specific use cases |

### Backup strategies
- **3-2-1 rule**, 3 copies, 2 different media, 1 off-site
- **Full / incremental / differential** backups
- **Snapshot** vs backup
- **Immutable backup**, can't be modified/deleted (ransomware-resistant)
- **Air-gapped backup**, physically disconnected
- **Encryption at rest** for backups
- **Test restores!**, backups you've never restored are not backups

### DR testing
- Tabletop → Walkthrough → Simulation → Parallel → Full-Interruption (see Module 8)

---

## 🎓 Security Awareness Training

| Training type | What |
|---------------|------|
| **General awareness** | Annual, all employees, phishing, password, AUP |
| **Role-based** | Tailored (developers, finance, executives) |
| **Phishing simulations** | Periodic tests with metrics |
| **New-hire onboarding** | Day-1 / week-1 |
| **Security culture programs** | Champions, posters, gamification |
| **Anomalous behavior recognition** | "What looks weird?" training |
| **Reporting culture** | "When in doubt, report", no blame |

### Behavior categories Sec+ tests
- **Recognizing** social engineering, suspicious links/files, anomalies
- **Reporting** suspected incidents promptly
- **Responding** correctly (don't pay ransom, don't engage attacker)

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** Your company processes EU customer data, US credit cards, and US health records (some clinical trials). Match each regulation/framework to the data type, then identify two contracts you must negotiate with a SaaS vendor that processes some of this data.

**Walkthrough:**

| Data type | Applies |
|-----------|---------|
| EU customer personal data | **GDPR** (mandatory) |
| US credit cards | **PCI-DSS** (contractual via card brands) |
| US health records | **HIPAA / HITECH** (mandatory) |
| Add'l overlay | **NIST CSF / ISO 27001** as voluntary frameworks |

Contracts with the SaaS vendor:

1. **MSA** (umbrella) + **SOW** (specific deliverables) + **SLA** (uptime targets)
2. **DPA** (GDPR processor agreement) + **BAA** (HIPAA-required Business Associate Agreement) + **PCI Attestation of Compliance** + **NDA**

A PBQ might present this as drag-match.

---

## 📊 Case Study, Boeing 737 MAX Certification (2018-2019)

**Situation.** Boeing's **737 MAX** was developed (2011-2017) as a fuel-efficient successor to the 737 NG, designed to compete with the Airbus A320neo. To preserve commonality with previous 737 models which let airlines avoid expensive pilot retraining Boeing engineered the MAX so that pilots could fly it under their existing 737 type rating. The MAX's larger, repositioned engines changed the aircraft's pitch behavior at high angles of attack. To compensate (and avoid certification of a "new" aircraft type with new pilot training), Boeing added the **Maneuvering Characteristics Augmentation System (MCAS)**, a software system that automatically pushed the nose down based on a single Angle-of-Attack sensor reading.

**Decision.** Boeing made several risk-management and governance choices documented later in the US House T&I Committee final report (September 2020, ~250 pp.) and the Office of Inspector General report (DOT-OIG-21-029, June 2021):

- **Single sensor.** MCAS relied on **one** AoA sensor input (not dual-redundant), violating the textbook safety-critical design principle of redundancy. Boeing's internal hazard analysis classified MCAS-malfunction risk as "major" rather than "catastrophic", which would have required dual-redundant sensors.
- **Pilot-disclosure choice.** Boeing chose **not to document MCAS in the pilot's flight manual**, on the rationale that pilots would never need to know about it. Pilot training omitted MCAS entirely.
- **FAA delegation.** The FAA had progressively delegated certification authority to Boeing via the **Organization Designation Authorization (ODA)** program. Boeing personnel acted as Authorized Representatives (ARs) on FAA's behalf, a structural conflict of interest the House report later characterized as "regulatory capture."
- **Risk acceptance.** Internal Boeing emails (released during House investigation) showed engineers raising concerns; Boeing's risk-management process classified those as acceptable. One engineer's 2016 internal email: "This airplane is designed by clowns, who in turn are supervised by monkeys" (entered into the congressional record).

**Outcome.** Lion Air Flight 610 (29 October 2018, Indonesia, 189 deaths) and Ethiopian Airlines Flight 302 (10 March 2019, Ethiopia, 157 deaths), both lost when faulty AoA sensors triggered repeated MCAS nose-down inputs the pilots could not override in time. The MAX was **globally grounded for 20 months** (March 2019 to November 2020 in the US; longer elsewhere). Boeing paid **$2.5B settlement** with the US DOJ (January 2021) including a $243.6M criminal fine, $1.77B in customer compensation, and $500M for victim-family compensation. The SEC also pursued action against Boeing executives. The FAA's certification authority was statutorily revised by the **Aircraft Certification, Safety, and Accountability Act** of 2020. Boeing's CEO Dennis Muilenburg was fired (December 2019). Direct losses crossed **$20B**.

**Lesson for the exam / for practitioners.** The 737 MAX is taught in Cornell, Harvard, and Stanford engineering ethics and GRC courses as the canonical case of a **GRC-meets-regulatory-capture failure**. Every concept in Module 9 has a 737 MAX analog:

- **Risk treatment vs risk acceptance.** Boeing classified MCAS malfunction as "major" rather than "catastrophic." Classification drives required mitigations. **Inappropriate risk acceptance with executive sign-off** *is* a Sec+ concept, and a 737 MAX-grade reminder that documentation does not absolve responsibility when the underlying classification is wrong.
- **Governance hierarchy failure.** Policies (FAA certification standards) → standards (catastrophic vs major hazard definitions) → procedures (hazard analysis worksheets). The procedure was followed; the underlying classification was wrong. Sec+ tests this: governance documents are only as good as their underlying assumptions. Compare with the Equifax case (Module 1): patch policy existed; the *verifier* of compliance was broken.
- **Third-party / regulatory risk.** The ODA program effectively made Boeing its own auditor. This is what Sec+ calls "self-attestation" and contrasts with "**independent attestation**" (SOC 2 by external auditor, ISO certification by accredited body). The exam tests this distinction directly.
- **Stakeholder risk vs financial risk.** Boeing's CFO calculations gave MCAS its cost-benefit math (avoiding pilot retraining = ~$1M/aircraft savings to airlines, supporting MAX sales). The risk register did not weight passenger-life risk appropriately. Sec+ Domain 5 covers this: **stakeholder identification and impact analysis** must include parties who do not pay for the system.
- **Whistleblower / culture.** Boeing engineers raised concerns; the organization did not surface those concerns to certifiers or pilots. Sec+ "security culture programs" and reporting-culture concepts directly address this failure mode.

**Discussion (Socratic).**
- **Q1:** Boeing's risk-acceptance decision was made within a *legally-compliant* process (delegated FAA certification, internal hazard analysis with executive sign-off). At what point should a regulator override an industry's internal risk-acceptance documentation, and at what point is that override regulatory overreach? Defend a position with reference to NIST SP 800-30 (Risk Assessment) and analogous regulatory frameworks (FDA medical devices, NRC nuclear, FCC spectrum).
- **Q2:** ISO 27001 *requires* independent third-party certification. SOC 2 requires an independent auditor. Boeing's ODA program inverted this, the firm itself was certifier. Apply this contrast to cybersecurity: would mandatory independent SOC 2 / ISO 27001 audits prevent Colonial Pipeline (Module 6) or Capital One (Module 7) outcomes? Steelman both sides.
- **Q3:** The House report (Sept 2020) called the FAA-Boeing relationship "regulatory capture." Apply this lens to cybersecurity: is the relationship between large cloud providers (AWS/Azure/GCP) and federal cyber-regulators (CISA, NIST, FedRAMP) heading toward the same pathology? What governance structures would prevent it? Defend your design.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "PCI-DSS is a law" | It's a contractual standard from card brands, penalties via card networks, not government (in most cases) |
| "GDPR only applies in Europe" | Applies to anyone processing EU residents' data, extraterritorial |
| "MSA = SOW = SLA" | MSA umbrella, SOW per-project scope, SLA performance metrics |
| "Acceptance is irresponsible" | Acceptance with documentation and exec sign-off is a legitimate treatment |
| "ALE = ARO" | NO. ALE = SLE × ARO. They're different. |
| "RTO and RPO are interchangeable" | RTO = time to recover; RPO = data loss tolerance |
| "Hot site = warm site with more RAM" | Hot = active sync; warm = periodic sync |
| "SOC 2 is mandatory" | It's not regulation, it's a market-driven attestation |
| "ISO 27001 == NIST CSF" | Different frameworks; ISO is certifiable, CSF is voluntary mapping |
| "Annual awareness training is enough" | Phishing sims + role-based + culture work needed too |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Policy / Standard / Procedure / Guideline / Baseline** | Governance document hierarchy |
| **AUP** | Acceptable Use Policy |
| **Risk register** | List of identified risks + owners + treatments |
| **Inherent / Residual risk** | Before / after controls |
| **Risk appetite / tolerance** | Willingness / variance |
| **SLE / ARO / ALE** | Quantitative loss formulas |
| **Treatment: avoid / mitigate / transfer / accept** | Risk strategies |
| **NDA / MSA / SOW / SLA / MOU / MOA / BPA / ISA / DPA / BAA** | Vendor contracts |
| **NIST CSF / SP 800-53 / RMF** | NIST frameworks |
| **ISO 27001 / 27002** | ISMS standard |
| **CIS Controls** | Prioritized control list |
| **COBIT** | IT governance |
| **HIPAA / GDPR / PCI-DSS / SOX / GLBA / CCPA** | Major regulations |
| **Audit / Attestation / Assessment** | Different verification activities |
| **RTO / RPO / MTTR / MTBF / MTTD / MTTC** | Recovery & ops metrics |
| **BIA** | Business Impact Analysis |
| **Hot / warm / cold site** | DR site types |
| **3-2-1 backup rule** | 3 copies / 2 media / 1 off-site |
| **Immutable backup** | Ransomware-resistant |
| **Right to audit** | Contract clause allowing audits |
| **Right to be forgotten** | GDPR deletion right |

### Acronyms cheat-row (Module 9)
| Acronym | Meaning |
|---------|---------|
| GRC | Governance, Risk, Compliance |
| AUP | Acceptable Use Policy |
| RTO / RPO | Recovery Time / Point Objective |
| MTTR / MTBF / MTTF / MTTD / MTTC | Time metrics |
| SLE / ARO / ALE / AV / EF | Quantitative risk formula vars |
| BIA / BCP / DRP / COOP | Business Impact Analysis / Continuity / DR / Continuity of Ops |
| NDA / MSA / SOW / SLA / MOU / MOA / BPA / ISA / DPA / BAA | Vendor contracts |
| KRI / KPI | Key Risk / Performance Indicator |
| NIST CSF / RMF / SP 800-53 | NIST standards |
| ISO 27001 / 27002 / 27017 / 27018 | ISO security standards |
| HIPAA / HITECH / PHI | Healthcare |
| GLBA / SOX / PCI-DSS | Financial / cards |
| GDPR / CCPA / CPRA | Privacy laws |
| SOC 1 / SOC 2 / SOC 3 | Service org control reports |
| FISMA / FedRAMP | US federal |
| CIS / COBIT | Frameworks |
| QSA / ROC / AOC | PCI assessor / report / attestation |

---

## ✅ Module 9 Summary

You now know:

- 🏛️ Governance hierarchy: Policies → Standards → Procedures → Guidelines → Baselines
- ⚖️ Risk vocabulary + the SLE/ARO/ALE quantitative formula
- 🛠️ The 4-5 risk treatment strategies
- 🤝 Every vendor agreement acronym (NDA, MSA, SOW, SLA, MOU, BPA, ISA, DPA, BAA)
- 📋 The big frameworks (NIST CSF, 800-53, ISO 27001, CIS, COBIT) and regulations (HIPAA, PCI-DSS, GDPR, SOX, GLBA, CCPA)
- 🛠️ BCP/DR metrics (RTO/RPO/MTTR/MTBF) + site types (hot/warm/cold) + backup strategies
- 🎓 Security awareness training types + the 3-step user behavior cycle (recognize → report → respond)

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md), heavy on definitions
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md), print this; it's pure memorization fuel
4. ➡️ [Module 10, Application & Data Security](../Module-10-Application-Data-Security/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 10](../Module-10-Application-Data-Security/Reading.md) covers DLP, classification, and data-privacy compliance, the technical implementation of the regulatory regimes in this module; the [Capstone Project](../Capstone-Project.md) is essentially a GRC exercise.
> - Cross-course: PMP (course 02) covers stakeholder management and risk registers in non-security context. The ASCM supply-chain certifications (10/11/12/13) all draw on similar third-party risk frameworks.
> - Practice: Practice Exam 2 has ~13 GRC/risk questions; Final Mock has ~11. Vendor-agreement acronyms (NDA/MSA/SOW/SLA/BAA/DPA/ISA) are nearly guaranteed easy points if memorized.

---

## 📚 Further Reading (Optional)

**Primary sources / frameworks:**
- 📄 NIST. [*Cybersecurity Framework 2.0*](https://www.nist.gov/cyberframework) (February 2024). Includes the new Govern function.
- 📄 NIST SP 800-37 Rev 2 (2018). *Risk Management Framework*.
- 📄 NIST SP 800-53 Rev 5 (2020, updated 2023). *Security and Privacy Controls*.
- 📄 NIST SP 800-30 Rev 1 (2012). *Guide for Conducting Risk Assessments*.
- 📄 NIST SP 800-34 Rev 1 (2010). [*Contingency Planning Guide for Federal Information Systems*](https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final).
- 📄 ISO/IEC 27001:2022, Information Security Management Systems. (Latest revision.)
- 📄 ISO/IEC 27002:2022, Code of practice for information security controls.
- 📄 PCI Security Standards Council. [PCI DSS v4.0](https://www.pcisecuritystandards.org/) (March 2022; mandatory from 31 March 2024).
- 📄 CIS Controls v8 (May 2021).
- 📄 GDPR, Regulation (EU) 2016/679. [gdpr-info.eu](https://gdpr-info.eu/).
- 📄 HIPAA Security Rule, 45 CFR Parts 160 & 164.

**Case-study sources (Boeing 737 MAX):**
- 📄 US House T&I Committee (2020). [*The Design, Development & Certification of the Boeing 737 MAX*](https://transportation.house.gov/imo/media/doc/2020.09.15%20FINAL%20737%20MAX%20Report%20for%20Public%20Release.pdf). Final Committee Report, ~250 pp.
- 📄 US DOT Office of Inspector General (June 2021). DOT-OIG-21-029. *Timeline of Activities Leading to the Certification of the Boeing 737 MAX 8 Aircraft*.
- 📄 US DOJ (2021). *Deferred Prosecution Agreement: United States v. The Boeing Company.* $2.5B settlement.
- 📄 Aircraft Certification, Safety, and Accountability Act (2020), codified at 49 USC §44704.

**Practitioner / discussion:**
- 📖 ISACA. *COBIT 2019*, IT governance framework.
- 📖 SANS. *Security Awareness Maturity Model*.
- 📖 Anderson, R. (2020). *Security Engineering* (3rd ed.). Chapter on assurance and governance is the most-cited treatment.
- 📖 Ponemon Institute. *Cost of a Data Breach Report 2024* (IBM-sponsored, annual), used for ALE / business-case calibration.
