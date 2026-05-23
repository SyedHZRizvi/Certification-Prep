# Module 1: Security Fundamentals 🛡️

> **Why this module matters:** This module is only 12% of the exam, but it gives you the *vocabulary* for the other 88%. Every later question — about firewalls, ransomware, PKI, audits — will assume you can speak CIA, AAA, Zero Trust, and "control type vs control category" in your sleep.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic networking concepts (IP addresses, ports, client/server) — covered in CompTIA Network+ or equivalent practical exposure
> - General computing literacy (operating systems, what an "admin" account is)
>
> If those are shaky, pause and review before continuing. This module assumes zero prior security background but does assume you've used computers professionally.

---

## 🍕 A Story: The Bakery That Got Robbed Twice

Meet Yara. She runs a small artisan bakery. One Monday morning she finds her cash register cleaned out. The thieves came in through an unlocked back door, took everything, and left.

She makes three changes:
1. **A new deadbolt** on the back door — they can't get in the same way again.
2. **A camera and sign** out front saying "24/7 Surveillance" — would-be thieves see it and walk away.
3. **A weekly cash audit** — if anything *does* go missing, she'll know within 7 days instead of waiting weeks.

Three weeks later, a different thief tries the back door. The deadbolt stops them — that's **prevention**. The camera records them — that's **detection**. The sign made another thief turn around — that's **deterrence**. And when Yara watches the recording, she fixes the camera's blind spot — that's **correction**.

Welcome to security. We never rely on one control. We layer **preventive, deterrent, detective, and corrective** controls, and we make them **technical** (deadbolt), **operational** (camera-watching procedure), **managerial** (the audit policy), or **physical** (the sign). That's the whole game.

---

## 🎯 The CIA Triad (You Will Be Tested. A Lot.)

The three properties — Confidentiality, Integrity, Availability — were articulated most influentially by Saltzer & Schroeder in "The Protection of Information in Computer Systems" (*Communications of the ACM*, September 1975; also published in *Proceedings of the IEEE*, vol. 63, no. 9). NIST later codified the triad in **SP 800-12 Rev 1** (*An Introduction to Information Security*, 2017) and the Federal Information Security Modernization Act (FISMA) builds its entire risk framework on it. Every security decision protects one or more of these three properties. **Memorize cold.**

| Letter | Property | Means | Broken by | Protected by |
|--------|----------|-------|-----------|--------------|
| **C** | **Confidentiality** | Only authorized people see the data | Eavesdropping, data leak, breach | Encryption, access controls, MFA |
| **I** | **Integrity** | Data hasn't been altered (intentionally or accidentally) | Tampering, man-in-the-middle, bit rot | Hashing, digital signatures, checksums |
| **A** | **Availability** | Authorized people can use the system when they need it | DDoS, ransomware, hardware failure | Redundancy, backups, load balancers, DR |

🎯 **Exam pattern:** A scenario describes an attack — you pick which CIA letter was violated.

- "Attacker dumps the customer database to the dark web" → **Confidentiality**
- "Attacker modifies the bank transfer amount mid-flight" → **Integrity**
- "Ransomware encrypts the file server" → **Availability** (and Confidentiality if data was also exfiltrated)
- "A DDoS takes down the website" → **Availability**

### Bonus: Non-Repudiation (the 4th sibling)

**Non-repudiation** = a sender cannot later deny they sent a message. It is *not* part of CIA, but Sec+ adds it as a 4th property.

- Achieved by **digital signatures** (covered in Module 2)
- Real-world analogy: signing a contract with your driver's license verified — you can't later say "wasn't me"

🚨 **Trap on the exam:** If the question is *"which property proves who sent a message?"* — it's **non-repudiation**, not integrity. Integrity proves the message wasn't *changed*; non-repudiation proves *who* sent it.

---

## 🔐 AAA — Authentication, Authorization, Accounting

AAA was standardized for network access by the IETF in the RADIUS specs (Rigney et al., **RFC 2865** *Remote Authentication Dial In User Service*, 2000, and **RFC 2866** for accounting) and TACACS+ in **RFC 8907** (Dahm et al., 2020). A separate trio from CIA, but commonly confused with it. AAA is the **access lifecycle**.

| Letter | Means | Example | Tool |
|--------|-------|---------|------|
| **Authentication** | Prove you are who you say you are | Username + password + TOTP code | LDAP, MFA |
| **Authorization** | Decide what you're allowed to do | "Maria can read /payroll but not /admin" | RBAC, ABAC, ACLs |
| **Accounting (or Auditing)** | Record what you did | Log: "Maria opened /payroll/Q3.xlsx at 09:14" | SIEM, audit logs |

🧠 **Memory hook:** "Who are you? → What can you do? → What did you do?"

Sec+ also sometimes lists **AAA + Identification** as the full sequence:
1. **Identification** — claim ("I'm maria@corp.com")
2. **Authentication** — prove ("here's my password + token")
3. **Authorization** — granted access scope
4. **Accounting** — log the activity

---

## 🚪 Zero Trust — The Modern Architectural Default

The term "Zero Trust" was coined by **John Kindervag** at Forrester Research in 2010 ("No More Chewy Centers: Introducing the Zero Trust Model of Information Security," Forrester Report, September 2010). Google operationalized it across its own corporate network as **BeyondCorp** (Ward & Beyer, "BeyondCorp: A New Approach to Enterprise Security," *;login:* USENIX magazine, December 2014). NIST then standardized the reference architecture in **SP 800-207** (*Zero Trust Architecture*, August 2020), which is what Sec+ tests on.

The old model was a **castle-and-moat**: hard outer firewall, soft squishy inside. Once you were on the corporate network, you were trusted.

**Zero Trust says: never trust, always verify.** Every request — even from inside the building — must prove who it is, what it can do, and that the request itself is healthy.

### The Two Planes

Sec+ specifically names two planes — **MEMORIZE both**:

| Plane | What it does | Components |
|-------|--------------|------------|
| **Control Plane** | Makes the access decision | Adaptive Identity, Threat Scope Reduction, Policy-Driven Access Control, Policy Administrator, Policy Engine |
| **Data Plane** | Enforces the decision and moves the data | Implicit Trust Zones, Subject/System, Policy Enforcement Point (PEP) |

### Key Zero Trust terms

- **Adaptive Identity** — risk-based authentication: more challenge if you're logging in from a new device, country, or odd time
- **Threat Scope Reduction** — limit what each user/service can reach (least privilege at the network level)
- **Policy-Driven Access Control** — decisions come from explicit, centrally managed policy, not from network location
- **Policy Engine (PE)** — brain that evaluates the policy and outputs allow/deny
- **Policy Administrator (PA)** — translates the decision into a session (configures the PEP)
- **Policy Enforcement Point (PEP)** — the gate that actually lets traffic through (a proxy, identity-aware load balancer, etc.)
- **Implicit Trust Zone** — the *small* trusted segment a verified session is allowed into (after the PEP)

### A request, end to end
```
User → [PEP] → "Hey Control Plane, can this request happen?"
                 ↓
              [Policy Engine] uses signals (device posture, identity risk, threat intel)
                 ↓
              [Policy Administrator] tells PEP yes/no + session scope
                 ↓
User ←[PEP]← granted (or denied) into the Implicit Trust Zone
```

🎯 **Exam pattern:** *"In Zero Trust, which component evaluates policies to decide whether access is granted?"* → **Policy Engine**.

---

## 🛡️ Security Controls — The 4×6 Grid

Sec+ loves to ask: *"This is what type / what category of control?"* You must classify it on **two axes** at once.

### Axis 1 — Control **TYPE** (who/what implements it)

| Type | Means | Examples |
|------|-------|----------|
| **Technical** | Implemented in tech (hardware, software, configs) | Firewall rule, encryption, IDS, MFA, ACL |
| **Managerial** (Administrative) | Policies, procedures, governance | Acceptable Use Policy, risk assessment, training plan |
| **Operational** | Day-to-day human processes | User awareness training, incident response drill, guard patrols |
| **Physical** | Physical world | Locks, fences, bollards, biometric door, mantrap |

### Axis 2 — Control **CATEGORY** (what it does in time)

| Category | When it acts | Example |
|----------|--------------|---------|
| **Preventive** | Stops the event before it happens | Firewall blocks port, encryption, training |
| **Deterrent** | Discourages the attacker from trying | "Beware of Dog" sign, visible cameras, warning banner |
| **Detective** | Spots the event during or after | SIEM alert, IDS, motion sensor, audit log |
| **Corrective** | Fixes things after an event | Patch, restore from backup, quarantine malware |
| **Compensating** | Alternative when the primary control isn't feasible | Air-gapped legacy system + extra logging because you can't patch it |
| **Directive** | Tells people what to do (policy/guidance) | AUP, "must use VPN" rule, sign saying "no tailgating" |

🚨 **Common confusion:**
- **Deterrent** discourages — relies on the attacker *deciding* not to act
- **Preventive** stops — even if the attacker tries, it physically cannot succeed
- A camera you can *see* is deterrent. A camera that *records* (and you later review) is detective.

### Worked classification — 6 sample controls

| Control | TYPE | CATEGORY |
|---------|------|----------|
| MFA on the VPN | Technical | Preventive |
| "$5,000 reward for reporting fraud" poster | Operational | Deterrent |
| Quarterly access review | Managerial | Detective |
| Antivirus quarantining a file | Technical | Corrective |
| Biometric scanner at the data center door | Physical | Preventive |
| Required SOC 2 audit clause in vendor contract | Managerial | Directive |

---

## 📈 Gap Analysis — Where You Are vs. Where You Need To Be

A **gap analysis** compares the *current* security posture against a *target* (a framework, a regulation, a maturity model).

Process:
1. Pick a target — e.g., NIST CSF, ISO 27001, PCI-DSS
2. Inventory current controls
3. Map current state to the target's requirements
4. Identify the **gaps** — where you fall short
5. Prioritize and remediate (this becomes the security roadmap)

🎯 **Exam pattern:** *"The CISO wants to know what's missing to meet ISO 27001."* → Run a **gap analysis**.

---

## 🔄 Change Management — Why Security Cares

A change request (new firewall rule, server reboot, software upgrade) can break things or silently introduce risk. Sec+ tests these change-management concepts:

| Concept | Meaning |
|---------|---------|
| **Approval process** | Who signs off (Change Advisory Board / CAB) |
| **Impact analysis** | What systems will be affected, downstream effects |
| **Test results** | Was it validated in a non-prod environment? |
| **Backout plan** | If it goes sideways, how do we revert? |
| **Maintenance window** | Scheduled time to minimize disruption |
| **Standard operating procedure (SOP)** | Documented step-by-step for repeatable changes |
| **Ownership** | One named person responsible for the change |
| **Stakeholders** | Everyone who needs to be notified |
| **Allow / deny lists** | Updates require change control to avoid lockouts |
| **Restricted activities** | High-risk actions (e.g., DNS changes) need extra approval |
| **Downtime** | Planned vs unplanned — both have implications |
| **Service / Application restart** | Often part of a change; affects availability |
| **Legacy applications** | May not survive certain changes — flag in impact analysis |
| **Dependencies** | A change to A might break B (e.g., upgrading a TLS lib affects 12 services) |

**Technical implications of change**: documentation updates, version control, diagrams, updating the CMDB (Configuration Management Database), runbooks.

🎯 **Exam pattern:** *"What is the FIRST step before deploying a firewall rule change?"* → **Get CAB approval** (or *impact analysis* if approval isn't an option). *"After a failed change, what do you execute?"* → **Backout plan**.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A mid-sized hospital just adopted a Zero Trust architecture. A doctor logs into the EHR from a hospital-issued tablet inside the radiology ward at 10 a.m. on a Tuesday — access is granted instantly. The same doctor's credentials are then used at 3 a.m. from an IP in another country — access is **denied** without even prompting for MFA. What component made each decision?

**Walkthrough:**
1. Both requests hit the **PEP** (Policy Enforcement Point) — the identity-aware proxy in front of the EHR.
2. PEP asks the **Control Plane**.
3. The **Policy Engine** evaluates signals: device (hospital tablet vs unknown), location (radiology vs foreign IP), time (10 a.m. vs 3 a.m.), behavioral pattern.
4. For the 10 a.m. request, **Adaptive Identity** confidence is high → low friction, allow.
5. For the 3 a.m. request, Adaptive Identity confidence collapses → **deny outright** because the policy says high-risk + after-hours + foreign IP = never (no amount of MFA can rescue it).
6. The **Policy Administrator** instructs the PEP to either open a session (request 1) or refuse (request 2).
7. Logs flow into the SIEM as **Accounting** records.

This is what a PBQ might show as a diagram — drag the labels (PEP, PE, PA, Adaptive Identity) to the right boxes.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Non-repudiation is part of CIA" | NO — CIA is just C, I, A. Non-repudiation is a 4th, separate property. |
| "Authentication and Authorization are the same" | Authentication = *who*; Authorization = *what you can do*. |
| "A camera is always a detective control" | A *recording* camera is detective. A *visible* camera is deterrent. The same device can be both. |
| "Zero Trust means VPN" | No — Zero Trust often *replaces* VPN with identity-aware proxies. VPN tunnels are still trusted; Zero Trust trusts nothing. |
| "Preventive and Deterrent are interchangeable" | Preventive stops; Deterrent discourages. Preventive doesn't rely on attacker's choice. |
| "Compensating controls are weaker controls" | They're *alternatives* used when the primary isn't feasible. Often more expensive, not weaker. |
| "Change management is bureaucracy that slows security down" | It IS security — undocumented changes are a top breach cause. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **CIA Triad** | Confidentiality, Integrity, Availability — the 3 core security properties |
| **Non-repudiation** | Sender cannot deny sending a message (proven by digital signatures) |
| **AAA** | Authentication, Authorization, Accounting |
| **Identification** | Claim of identity (precedes authentication) |
| **Zero Trust** | Architecture assuming no implicit trust; verify every request |
| **PEP** | Policy Enforcement Point — the gate that allows/blocks the request |
| **PE / PA** | Policy Engine / Policy Administrator — control-plane brains |
| **Adaptive Identity** | Risk-based auth using signals (device, location, behavior) |
| **Threat Scope Reduction** | Minimizing what each subject can reach |
| **Control type** | Technical / Managerial / Operational / Physical |
| **Control category** | Preventive / Deterrent / Detective / Corrective / Compensating / Directive |
| **Gap analysis** | Compare current security posture to target framework |
| **CAB** | Change Advisory Board — approves changes |
| **Backout plan** | Steps to revert a failed change |
| **CMDB** | Configuration Management DB — inventory of systems and configs |
| **Mantrap / access control vestibule** | Two-door entry; second door opens only after first closes |

### Acronyms cheat-row (Module 1)
| Acronym | Meaning |
|---------|---------|
| CIA | Confidentiality, Integrity, Availability |
| AAA | Authentication, Authorization, Accounting |
| MFA | Multi-Factor Authentication |
| ZTA | Zero Trust Architecture |
| PEP / PE / PA | Policy Enforcement Point / Engine / Administrator |
| RBAC / ABAC | Role-Based / Attribute-Based Access Control |
| AUP | Acceptable Use Policy |
| CAB | Change Advisory Board |
| CMDB | Configuration Management Database |
| SOP | Standard Operating Procedure |
| SIEM | Security Information and Event Management |
| IDS / IPS | Intrusion Detection / Prevention System |

---

## 📊 Case Study — Equifax (2017)

**Situation.** Equifax, one of the three major US consumer credit-reporting bureaus, ran a public consumer-dispute portal on Apache Struts 2. On 7 March 2017, the Apache Software Foundation disclosed **CVE-2017-5638**, a remote-code-execution flaw in Struts' Jakarta Multipart parser, with a patch available the same day. US-CERT (now CISA) issued a public advisory the next day. Equifax's IT operations team circulated an internal "patch within 48 hours" directive on 9 March 2017.

**Decision.** Equifax did *not* patch the dispute portal. The mandated patch never reached the affected server because the scanning tool used to verify compliance was misconfigured (the scan ran from a network segment that could not reach the host). On 10 March 2017 attackers exploited the unpatched flaw. They moved laterally onto file servers and ran undetected for **76 days** (mid-May through 29 July 2017). A SSL certificate on the network-monitoring device had expired 19 months earlier, so encrypted exfiltration traffic was never inspected. Equifax detected the breach only when the certificate was renewed in late July 2017.

**Outcome.** **147.9 million** US consumers (45% of the US adult population), 15 million UK residents, and 19,000 Canadian records were exposed — SSNs, dates of birth, addresses, driver's-license numbers, and ~209,000 credit-card numbers. Equifax's CEO, CIO, and CSO retired within weeks. Equifax paid **$575–700 million** in a 2019 settlement with the FTC, CFPB, and 50 US states/territories — the largest data-breach settlement to that point (FTC press release, 22 July 2019). The US House Oversight Committee published a 96-page post-mortem ("The Equifax Data Breach," December 2018) that became required reading in corporate-governance and risk classes at Harvard Business School and Wharton.

**Lesson for the exam / for practitioners.** Equifax violated **all three** CIA pillars simultaneously and failed at the basic control-management discipline this module teaches:
- **Confidentiality** — 148M SSNs and DOBs exfiltrated to the open internet.
- **Integrity** — attackers had write access; data integrity could not be assured.
- **Availability** — the consumer portal was taken offline during incident response.
- **Control-management failure** — a patch policy existed (managerial/directive) but the *detective* control (vulnerability scanner) was misconfigured, and the *corrective* control (patch deployment) never executed. Defense-in-depth (preventive + detective + corrective) collapsed because no single human owned end-to-end verification. The expired SSL cert on the inspection device meant the **detective** layer had been silently broken for 19 months.

This case is exactly the scenario Security+ tests when asking, "Which control would have prevented this?" The answer is rarely one control — it is a *layered* failure.

**Discussion (Socratic).**
- **Q1:** If you were Equifax's CISO on 8 March 2017 (the day after the CVE dropped), what *three* compensating controls could you have stood up in 24 hours to mitigate a missed patch — accepting that you may not be able to deploy the patch itself in time? Defend each against the cost of false positives.
- **Q2:** The expired SSL cert disabled deep-packet inspection for 19 months. Whose job was it to notice — the network team that owned the device, the SOC that consumed its alerts, or the GRC team that owned monitoring requirements? Argue for and against each.
- **Q3:** Equifax's executives kept their stock-sale schedules during the breach window before public disclosure (a separate SEC investigation followed). Beyond the legal issues, what *organizational* signal does that send about CIA priorities, and how would you redesign incident-disclosure governance to remove the perverse incentive?

---

## ✅ Module 1 Summary

You now know:
- 🎯 The **CIA triad** + non-repudiation as the 4 security properties to protect
- 🔐 The **AAA** access lifecycle and where Identification fits
- 🚪 **Zero Trust** with its **Control Plane / Data Plane** + the roles of PEP, PE, PA, and Adaptive Identity
- 🛡️ How to classify any control on **two axes** — Type (Tech/Mgr/Ops/Phys) × Category (Prev/Det/Detect/Corr/Compensating/Directive)
- 📈 What **gap analysis** does and when to use it
- 🔄 The **change management** vocabulary the exam loves (CAB, impact, backout, dependencies, CMDB)

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 20/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 2 — Cryptography & PKI](../Module-02-Cryptography-PKI/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 2](../Module-02-Cryptography-PKI/Reading.md) operationalizes Integrity (hashing, signatures) and Confidentiality (encryption); [Module 3](../Module-03-Identity-Access-Management/Reading.md) deepens AAA into MFA, SAML/OIDC, and PAM; [Module 9](../Module-09-GRC-Risk-Compliance/Reading.md) revisits control classification under NIST SP 800-53.
> - Cross-course: AWS Solutions Architect Associate (course 04) Module on Security uses the same CIA/AAA vocabulary in AWS-specific terms (KMS, IAM, CloudTrail). Azure Administrator (course 06) covers Conditional Access — the Microsoft implementation of Adaptive Identity.
> - Practice: Practice Exam 1 has ~8 questions drawing from this module; the Final Mock has ~10.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 Saltzer, J.H. & Schroeder, M.D. (1975). "The Protection of Information in Computer Systems." *Proceedings of the IEEE*, 63(9), 1278-1308. (The CIA-triad-shaped paper. Foundational.)
- 📄 Kindervag, J. (2010). "No More Chewy Centers: Introducing the Zero Trust Model of Information Security." *Forrester Research*. (Coined "Zero Trust.")
- 📄 Ward, R. & Beyer, B. (2014). "BeyondCorp: A New Approach to Enterprise Security." *;login:* USENIX, 39(6). (Google's operational Zero Trust.)
- 📄 NIST SP 800-207 (2020). [*Zero Trust Architecture*](https://csrc.nist.gov/publications/detail/sp/800-207/final). (Authoritative reference architecture.)
- 📄 NIST SP 800-53 Rev 5 (2020, updated 2023). [*Security and Privacy Controls*](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final). (The giant control catalog.)
- 📄 NIST SP 800-12 Rev 1 (2017). [*An Introduction to Information Security*](https://csrc.nist.gov/publications/detail/sp/800-12/rev-1/final). (Gentle on-ramp.)
- 📄 IETF RFC 2865 (Rigney et al., 2000) — RADIUS; IETF RFC 8907 (Dahm et al., 2020) — TACACS+.

**Case-study sources:**
- 📄 US House Committee on Oversight (2018). *The Equifax Data Breach* (Majority Staff Report, December 2018). 96 pp.
- 📄 Federal Trade Commission (2019). *Equifax Data Breach Settlement* press release, 22 July 2019.

**Practitioner / exam:**
- 📖 [CompTIA Security+ SY0-701 Exam Objectives (PDF)](https://www.comptia.org/certifications/security) — read the official objectives at least twice during your studies
- 📖 [Professor Messer SY0-701 video index](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video-training-course/) — free, comprehensive lecture set
