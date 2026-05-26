# Module 10: Operational Procedures ⚙️

> **Why this module matters:** Operational Procedures (combined with Module 12 Documentation/DR) is **22% of the 220-1102 exam** — about 20 questions. The exam tests *judgment* — given a scenario, what's the right professional response? This module is what separates a *technician* from a *professional*: documentation, change management, environmental safety, ethical conduct, communication.

> **Prerequisites for this module.** Comfort with:
> - Module 5 (troubleshooting methodology — Step 6 = document!)
> - Module 8 (security basics — environmental safety + ESD overlap)

---

## ⚙️ A Story: The Server-Room Cabinet That Saved a Career

Meet Tariq. He's a 24-year-old field tech who just landed a 6-month contract at a logistics firm. Day 3, he's tasked with replacing a failing drive in a 12-disk SAN. He's done this 20 times before — different drive type, same vendor.

He grabs the next available drive from the spare shelf, pulls the failed drive, slides the new one in. The array light goes red. *Wrong*. He pulls it back out, looks closer. The spare is a **2 TB SAS** drive. The array is **4 TB SAS**. He uses the wrong spare and the rebuild starts incorrectly — the array detects a size mismatch and aborts.

He calls his supervisor. They walk through together: pull the wrong drive, find the right 4 TB SAS spare in a separate cabinet — labeled *"4 TB Hot Spares — DO NOT INTERMIX"* — and rebuild correctly. The 30 minutes lost is documented in the ticket. The vendor's RMA process logs the failed drive serial. The asset manager updates the **CMDB** (Configuration Management Database) with the new drive.

The mistake itself cost 30 minutes. The *follow-up* — the documented mistake, the corrected process, the CMDB update — is what kept the contract from being cancelled. Tariq's supervisor later told him: "I trust the techs who *document their mistakes*. I worry about the ones who don't."

This module teaches you that mindset. Documentation, change management, environmental safety, communication — these are the practices that make IT *professional*, not just technical.

---

## 📋 Documentation — What to Document

| Document type | Purpose |
|---------------|---------|
| **Ticket** | Per-incident record (requester, issue, actions, resolution) |
| **Knowledge Base (KB) article** | How-to for recurring issues |
| **Runbook** | Step-by-step for a known operational procedure |
| **Network diagram** | Visual map of physical + logical topology |
| **Asset register / CMDB** | Inventory of every IT asset |
| **Configuration baseline** | Documented "known-good" state |
| **Change record** | What changed, when, by whom, why |
| **Standard Operating Procedure (SOP)** | Repeated process definition |
| **Incident report** | After-action for significant events |
| **License inventory** | Software licenses + expiration |
| **Acceptable Use Policy (AUP)** | What users may/may not do |
| **Password policy** | Strength, expiry, complexity |
| **MoU / SLA** | External commitments |

### What makes a good ticket

- Clear, factual summary
- Symptoms in user's words + verified
- Actions taken (chronological)
- Resolution + verification
- Time spent
- Tags / categories for search

🎯 **Exam pattern:** *"After resolving an issue, what should the technician do?"* → **Document the findings, actions, and outcomes.** (Step 6 of the 6-step methodology.)

---

## 🔄 Change Management

Most production outages are caused by **changes**. Change management is the discipline that contains the risk.

### Types of changes

| Type | Approval | Speed | Example |
|------|----------|-------|---------|
| **Standard** | Pre-approved (template) | Fast | Adding a user to a security group |
| **Normal** | Full CAB review | Slow (days–weeks) | Major firewall rule change |
| **Emergency** | Expedited, post-CAB review | Same-day | Production-down hotfix |

### The CAB (Change Advisory Board)

- Group that approves/rejects production changes
- Members: IT lead, security, business stakeholder, affected app owners
- Meets regularly (weekly biweekly) for normal changes; on-demand for emergency
- Decisions logged in the change record

### What every change record contains

| Field | Purpose |
|-------|---------|
| **Requester** | Who asked for it |
| **Description** | What is changing |
| **Reason / business need** | Why we're doing it |
| **Impact analysis** | What could break, who's affected |
| **Affected systems** | Hosts, services, networks |
| **Risk level** | Low / Medium / High |
| **Test plan + results** | Validated in non-prod? |
| **Backout plan** | How we revert if it fails |
| **Maintenance window** | When it happens |
| **Approvals** | Who signed off (CAB member names) |
| **Implementation steps** | Detailed sequence |
| **Post-change verification** | How we confirm success |
| **Documentation updates** | KB, runbook, network diagram, CMDB |

🚨 **The Equifax case (covered in Sec+ Module 1) is fundamentally a change-management failure** — they had a patch policy but no enforcement and no verification.

### Change-management exam vocabulary

- **Standard / Normal / Emergency** change types
- **CAB** — Change Advisory Board
- **CR** — Change Request
- **RFC** — Request For Change (ITIL term)
- **Backout / rollback plan** — undo procedure
- **Maintenance window** — scheduled downtime
- **Freeze window** — period when changes are banned (e.g., holiday peak)
- **PIR** — Post-Implementation Review

---

## 🌱 Environmental & Safety

### ESD (Electrostatic Discharge)

Human static can reach **35,000 V**. Modern CMOS components can fail at **10–100 V**. You don't feel it; the part dies silently.

| ESD mitigation | What it does |
|----------------|--------------|
| **Anti-static wrist strap** | Grounds your body to chassis or ESD mat |
| **ESD mat** | Conductive work surface, grounded |
| **Anti-static bag** | Stores boards safely |
| **Self-grounding** (touch unpainted metal of chassis) | Equalizes potential before handling |
| **Low-humidity awareness** | Dry air → more static |
| **Don't wear wool, walk on carpet** | Common static generators |

🎯 **Exam pattern:** *"What's the FIRST thing to do before handling a motherboard?"* → **Don anti-static wrist strap (and ground yourself / use an ESD mat).**

### Power events

| Event | Mitigation |
|-------|------------|
| **Spike** (microsecond surge) | Surge protector |
| **Surge** (longer over-voltage) | Surge protector / UPS |
| **Sag / brownout** | UPS (line-interactive or online) |
| **Blackout** (total loss) | UPS + generator |
| **EMI / RFI** | Shielded cables, EMI filter |

### UPS types

| Type | Use |
|------|-----|
| **Standby (offline)** | Cheap; switches to battery on outage. Brief gap. |
| **Line-interactive** | Mid-range; auto-adjusts voltage; instant switch. Most popular. |
| **Online (double conversion)** | Premium; always running through inverter; zero switch gap. Critical equipment. |

### Environmental considerations

- **Heat** — server rooms run 18–27 °C (64–80 °F) per ASHRAE TC9.9 2021
- **Humidity** — 8–60% relative humidity recommended; too dry = static, too humid = corrosion
- **Particulates / dust** — clean filters, controlled access
- **Fire** — smoke detectors + clean-agent suppression (FM-200, Novec 1230 — not water)
- **Cable management** — Velcro ties, not zip ties (don't damage insulation)

### MSDS / SDS — Material Safety Data Sheet

- Chemical safety info for cleaning products, toner, lithium batteries
- Required for workplace chemicals
- Look up at manufacturer / supplier
- New name: **Safety Data Sheet (SDS)** under Globally Harmonized System (GHS)

### Battery disposal

| Battery | Disposal |
|---------|----------|
| Lithium-ion (laptop / phone) | Recycle at electronics retailer (Best Buy, Apple Store, etc.) — DON'T toss in landfill |
| Lead-acid (UPS) | Hazardous waste — supplier often takes back |
| CR2032 (CMOS) | Electronics recycling |
| Alkaline (AA, AAA) | Most jurisdictions allow regular trash, but recycling preferred |

### Toner disposal

- Recycle via vendor program (HP, Brother, etc.)
- Toner is fine particulate — wear mask if cleaning a spill
- Vacuum with HEPA filter — regular vacuum spreads the dust

---

## 🗣️ Professional Communication

### Customer service essentials

| Practice | What it looks like |
|----------|---------------------|
| **Active listening** | Eye contact, paraphrase back, don't interrupt |
| **Avoid jargon** | "Your computer is checking for updates" not "WSUS is scanning" |
| **Set expectations** | "This will take about 30 minutes — I'll text you when ready" |
| **Maintain a positive attitude** | Even when the user is wrong |
| **Be on time** | Or early |
| **Avoid distractions** | Phone away during user interaction |
| **Clarify** | "Just to confirm — you mean the right monitor or the left?" |
| **Don't argue** | Defuse, don't escalate |
| **Be culturally sensitive** | Pronouns, names, holidays |
| **Don't disclose private info** | Don't browse user's files; don't share other users' tickets |

### Dealing with difficult customers

- **Listen first** — let them vent
- **Empathize** — "That sounds frustrating"
- **Focus on the problem** — not the emotion
- **Get help** — escalate if you can't resolve
- **Don't take it personally** — they're angry at the situation

---

## 🛡️ Professionalism & Ethics

### Confidentiality

- Don't browse user files beyond what's needed
- Don't share screenshots of user environments
- Lock screens during phone calls about user data
- Don't discuss tickets outside the team

### Licensing & EULAs

- Open-source: free, often with attribution requirements
- Commercial: per-user, per-device, or volume licensing
- Don't install pirated software on user/company machines
- Track license counts (audits happen)
- DRM (Digital Rights Management) restricts usage; PRA / EULAs define terms

### Regulated data classes

| Data class | Regulation | Examples |
|------------|------------|----------|
| **PII** | GDPR, state laws | Name + SSN, name + DOB, name + address |
| **PHI** | HIPAA (US) | Health records |
| **PCI** | PCI-DSS | Credit card data |
| **CUI** | NIST SP 800-171 (US gov contracts) | Controlled Unclassified Info |
| **Financial** | SOX (US), GLBA | Audited financial records |

🎯 **Exam pattern:** *"A user accidentally CC'd a customer SSN to the wrong distribution list. What do you do?"* → **Notify privacy/security per company policy. Don't try to delete the message yourself. Document immediately.**

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A help-desk tech accidentally browsed a folder labeled "HR Personnel Files" on a user's PC while troubleshooting. She didn't open any files but saw the folder name. What should she do?

**Walkthrough:**
1. **Identify** — Privacy concern. No data was accessed but presence of awareness is itself a privacy event.
2. **Theory** — Per policy, even accidental access to confidential data may be reportable.
3. **Test** — Review company privacy policy / employee handbook. Many require self-reporting.
4. **Plan** — Notify supervisor + privacy/security team. Document the event factually (date/time/system/scope). Do NOT discuss with the user (privacy policy violation may compound).
5. **Verify** — Privacy team makes the call on whether further action (e.g., user notification) is needed.
6. **Document** — Internal-only privacy incident record.

This is the kind of judgment A+ tests — there's no technical fix, but there is a professional response.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Documentation is optional if I remember" | Always step 6. Without docs, the next person re-learns. |
| "Emergency change can skip CAB entirely" | Emergency means expedited approval, not no approval. Post-implementation CAB review still happens. |
| "ESD only matters at the data center" | Phones, RAM, motherboards — anything you touch can be ESD-damaged. |
| "UPS is for safety, not data" | UPS prevents sudden power loss → file corruption, RAID problems, etc. |
| "MSDS is paperwork I can ignore" | OSHA / regulators require it. Toner spills are a real workplace hazard. |
| "Old batteries are fine in trash" | Lithium-ion in landfill = fire risk. Recycle at electronics retailer. |
| "Browsing user files to 'check things' is fine" | Privacy violation. Stick to what's needed; document scope. |
| "Pirated software is a victimless crime" | Software audits + per-user licensing fines exist. Companies have lost millions. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **CMDB** | Configuration Management Database |
| **CAB** | Change Advisory Board |
| **RFC** | Request For Change (ITIL) |
| **SOP** | Standard Operating Procedure |
| **Runbook** | Step-by-step ops procedure |
| **Knowledge Base (KB)** | Searchable solutions repository |
| **Standard / Normal / Emergency change** | The 3 change types |
| **Backout plan** | How to revert a failed change |
| **ESD** | Electrostatic Discharge |
| **MSDS / SDS** | Material Safety Data Sheet |
| **UPS** | Uninterruptible Power Supply |
| **PII / PHI / PCI** | Regulated data classes |
| **AUP** | Acceptable Use Policy |
| **EULA** | End-User License Agreement |
| **DRM** | Digital Rights Management |

### Acronyms cheat-row (Module 10)
| Acronym | Meaning |
|---------|---------|
| CAB | Change Advisory Board |
| CMDB | Configuration Management Database |
| ITIL | Information Technology Infrastructure Library |
| RFC | Request For Change |
| SOP | Standard Operating Procedure |
| KB | Knowledge Base |
| ESD | Electrostatic Discharge |
| MSDS / SDS | Material / Safety Data Sheet |
| UPS | Uninterruptible Power Supply |
| HIPAA | Health Insurance Portability and Accountability Act |
| PCI-DSS | Payment Card Industry Data Security Standard |
| GDPR | General Data Protection Regulation (EU) |
| AUP | Acceptable Use Policy |
| EULA | End-User License Agreement |
| GHS | Globally Harmonized System (for chemical safety) |

---

## 📊 Case Study — The 2019 Capital One Data Breach & The Inadequate Change Review

**Situation.** In July 2019, Capital One disclosed a breach exposing data on **~106 million** US and Canadian customers — names, addresses, credit scores, ~140,000 SSNs, and ~80,000 bank account numbers. The attacker was a former AWS employee who exploited a misconfigured **AWS WAF** (Web Application Firewall) to perform Server-Side Request Forgery (SSRF), pivoted to EC2 instance metadata service, retrieved an IAM role's temporary credentials, then used those credentials to list and download S3 buckets containing the data.

**The change-management angle.** Court filings (US v. Paige Thompson, 2022) revealed that the misconfigured WAF was *known* to Capital One's security team for weeks before exploitation. Multiple internal tickets had flagged the open SSRF path. The change ticket to remediate had been opened, prioritized as "P2 — non-urgent", and was waiting in a queue behind other work. Once exploited, exfiltration completed in ~36 hours undetected.

**Decision and outcome.** Capital One discovered the breach via a tip on GitHub (the attacker had bragged in a public Slack group). They paid **$80M** in OCC penalties (2020), settled a class-action for **$190M** (2022), and shifted to a more aggressive "exploitable misconfigurations are P0" prioritization policy. They published a [post-incident transparency report](https://www.capitalone.com/digital/responsible-disclosure/) on their security blog as part of remediation.

**Lesson for the exam / for practitioners.**
- **A ticket sitting in a queue is the same as no fix at all.** Prioritization is operational discipline.
- **Documentation works only if reviewed.** The misconfiguration was *documented as known* — but the change record never executed.
- **The change-management process must include time-bound SLAs**, especially for security findings.

**Discussion (Socratic).**
- **Q1:** Your team has a backlog of 47 security findings, mostly low-severity. How do you decide which 5 to do first this week? Make the argument in business terms.
- **Q2:** A CAB session is debating whether to approve a "P2" remediation immediately or hold for the next maintenance window. What 3 factors should they weigh? What's your default answer?
- **Q3:** Capital One's attacker was a former AWS employee. Is the lesson here about insider threat, about cloud misconfiguration, or about change management? Make the case for the *primary* root cause.

---

## ✅ Module 10 Summary

You now know:
- 📋 What to document and the difference between KB / Runbook / SOP / ticket
- 🔄 Change types (Standard / Normal / Emergency), CAB workflow, backout plans
- 🌱 ESD mitigation (wrist strap, mat, anti-static bag)
- ⚡ Power events + the 3 UPS types
- 🌡️ Server-room environmental targets (18–27 °C, 8–60% RH)
- ☣️ MSDS / SDS, battery & toner disposal
- 🗣️ Professional communication + difficult-customer playbook
- 🛡️ Confidentiality, licensing, and regulated data classes

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 11 — Mobile / Application Troubleshooting](../Module-11-Mobile-Troubleshooting/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 12](../Module-12-Documentation-DR/Reading.md) extends documentation into DR planning.
> - Cross-course: PMP (course 02) covers project change management; Sec+ (course 09) deepens governance and compliance.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 ITIL 4 Foundation — change management reference
- 📄 NIST SP 800-128 — Configuration Management for Information Systems
- 📄 OSHA Hazard Communication Standard (29 CFR 1910.1200) — MSDS/SDS legal basis
- 📄 ASHRAE TC9.9 (2021) — Data Center Environmental Guidelines

**Case-study sources:**
- 📄 Capital One (2019). *Information on the Cyber Incident*.
- 📄 OCC Consent Order (August 2020). *In the Matter of Capital One, N.A.*

**Practitioner / exam:**
- 📖 [Professor Messer 220-1102 operational procedures](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video-training-course/)
- 📖 *The Phoenix Project* (Gene Kim) — DevOps + change management novel
- 📖 *The DevOps Handbook* — operational practice deep-dive
