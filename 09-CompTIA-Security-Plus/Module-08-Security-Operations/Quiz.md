# ✏️ Module 8 Quiz: Security Operations

> **Instructions:** 28 questions. Aim for 23/28. This is the biggest domain — drill these.

---

## Questions

### Q1. A SIEM primarily provides:
A. Endpoint malware quarantine
B. Log aggregation, correlation, and alerting
C. Firewall rule management
D. Patch deployment

---

### Q2. A SOAR adds what to a SIEM-based SOC?
A. More log storage
B. Orchestration and automated response via playbooks
C. Replaces the firewall
D. Encryption of logs

---

### Q3. Which is the FIRST phase of the NIST IR lifecycle?
A. Detection & Analysis
B. Containment
C. Preparation
D. Lessons Learned

---

### Q4. The CORRECT NIST IR phase order is:
A. Prep → Detect → Contain → Eradicate → Recover → Lessons
B. Detect → Prep → Eradicate → Contain → Recover → Lessons
C. Prep → Eradicate → Detect → Recover → Contain → Lessons
D. Lessons → Prep → Detect → Contain → Recover → Eradicate

---

### Q5. According to the order of volatility, you should capture FIRST:
A. Hard disk image
B. RAM (volatile memory) and running process state
C. Email logs
D. Backup tapes

---

### Q6. Chain of custody documentation begins:
A. After litigation is filed
B. The moment evidence is touched or seized
C. Only for criminal cases
D. After the incident is resolved

---

### Q7. A "write blocker" is used to:
A. Prevent forensic image edits
B. Ensure the evidence drive cannot be modified during acquisition
C. Block writes from a firewall
D. Disable SSDs

---

### Q8. Forensic analysis should always be performed on:
A. The original drive
B. A working copy of a hashed forensic image
C. The cloud backup
D. The metadata only

---

### Q9. SSDs CANNOT be securely sanitized via:
A. Crypto-erase
B. Physical destruction
C. Degaussing
D. Vendor secure-erase command

---

### Q10. The CVSS score ranges from:
A. 0 to 5
B. 0 to 10
C. 1 to 100
D. -10 to +10

---

### Q11. EPSS provides:
A. A category name (CWE)
B. Probability a vuln will be exploited in the wild
C. A vendor's patch status
D. The IR phase to take

---

### Q12. CISA's KEV catalog lists:
A. All known CVEs
B. Vulnerabilities known to be actively exploited
C. Vendor advisories
D. Encryption deprecations

---

### Q13. A credentialed vulnerability scan differs from non-credentialed because credentialed scans:
A. Are illegal without consent
B. Log in to see actual installed packages and configs
C. Use only public IPs
D. Run faster

---

### Q14. A "tabletop exercise" is:
A. A live failover to the DR site
B. A discussion-based walkthrough of an incident scenario
C. A red-team penetration test
D. An automated SOAR playbook

---

### Q15. A "parallel test" of disaster recovery means:
A. Two teams run the same incident
B. Failover to the DR site without taking prod down
C. Two ISPs are used at once
D. Two firewalls evaluate rules

---

### Q16. NetFlow, sFlow, and IPFIX share what trait?
A. They capture full packet payloads
B. They are flow-data formats showing connection metadata
C. They are encryption protocols
D. They are vulnerability scanners

---

### Q17. PCAP files are LARGER than flow data because:
A. They include payload (full packet contents)
B. They have more metadata
C. They are uncompressed text
D. They include encryption overhead

---

### Q18. Threat hunting differs from reactive IR by being:
A. Faster
B. Proactive — searches for adversaries that automated detection missed
C. Performed by Tier 1 analysts only
D. Compliance-driven

---

### Q19. Which is the BEST source for IOCs to drive threat hunts in a financial company?
A. Public news sites
B. FS-ISAC + commercial threat intel + internal incidents
C. Random tweets
D. Vendor marketing webinars

---

### Q20. After containing a malware infection, the next IR phase is:
A. Lessons Learned
B. Eradication
C. Detection
D. Preparation

---

### Q21. A SOC analyst should isolate a compromised endpoint via EDR network containment as part of:
A. Eradication
B. Containment
C. Recovery
D. Preparation

---

### Q22. UEBA stands for:
A. User and Entity Behavior Analytics
B. Universal Endpoint Behavior Algorithm
C. User Entitlement Based Auditing
D. Unified Event Broker Architecture

---

### Q23. A "legal hold" order requires the organization to:
A. Delete data quickly
B. Suspend deletion/retention to preserve potentially relevant data
C. Notify customers
D. Block external email

---

### Q24. Sec+ "Lessons Learned" phase outputs include:
A. New detection rules and updated playbooks
B. The eradication script
C. The forensic image
D. The customer notification letter

---

### Q25 (Scenario). At 3am, a host shows: PowerShell encoded command, outbound DNS to known C2, and lateral SMB to 4 other hosts. The CORRECT first action is:
A. Re-image immediately
B. Capture memory + isolate via EDR; THEN triage scope
C. Notify the press
D. Shut down the data center

---

### Q26 (Scenario). After a phishing campaign you discover hundreds of victim accounts. The MOST efficient way to mass-respond is:
A. Manual ticket per user
B. SOAR playbook: revoke sessions, force password reset + MFA enrollment, search inboxes for similar messages, block sender
C. Reboot every server
D. Disable all email

---

### Q27 (Scenario). A vendor publishes CVE-2025-1234 (CVSS 9.8). Your CSPM shows 14 vulnerable instances. EPSS is 0.92 and CISA added it to KEV today. Priority?
A. Patch next quarter
B. Patch immediately — highest priority
C. Accept the risk
D. Disable EDR to investigate

---

### Q28 (Scenario). The SOC discovers an active intrusion in progress and wants to preserve evidence WITHOUT alerting the attacker. The BEST approach is:
A. Power off all hosts
B. Notify the attacker
C. Quietly capture memory + traffic, continue passive observation, prepare a coordinated cutoff
D. Tweet the IOCs

---

## 🎯 Answers + Explanations

### Q1: **B. Log aggregation + correlation + alerting**
SIEM = visibility + alerting layer.

### Q2: **B. Orchestration + automation via playbooks**
SOAR is the response/action layer.

### Q3: **C. Preparation**
Before anything else, you prepare (plans, tools, training).

### Q4: **A. Prep → Detect → Contain → Eradicate → Recover → Lessons**
The NIST 800-61 order.

### Q5: **B. RAM and process state**
Most volatile data — gone the moment you power off.

### Q6: **B. The moment evidence is touched/seized**
Chain of custody starts at acquisition.

### Q7: **B. Prevent modification of evidence drive during acquisition**
Hardware write-blocker enforces read-only access.

### Q8: **B. Working copy of a hashed image**
Never touch the original; always work on a copy with verifiable hash.

### Q9: **C. Degaussing**
SSDs are flash, not magnetic. Use crypto-erase or physical destruction.

### Q10: **B. 0 to 10**
CVSS 3.x range.

### Q11: **B. Probability of exploitation in the wild**
EPSS adds threat intelligence to prioritization.

### Q12: **B. Known actively-exploited vulns**
KEV catalog tells you "patch THIS first."

### Q13: **B. Logged-in view**
Sees installed software, configs, missing patches — much more accurate.

### Q14: **B. Discussion-based walkthrough**
Tabletop = talk through; no live systems touched.

### Q15: **B. Failover to DR site without taking prod down**
Parallel test runs both sites concurrently to validate DR.

### Q16: **B. Flow-data formats — connection metadata**
Not payloads.

### Q17: **A. Full packet contents**
PCAPs are payload + metadata; flow data is metadata only.

### Q18: **B. Proactive**
Threat hunting is hypothesis-driven searching, not waiting for alerts.

### Q19: **B. FS-ISAC + commercial intel + internal data**
Industry-specific ISAC for financial sector is gold.

### Q20: **B. Eradication**
Contain → Eradicate → Recover.

### Q21: **B. Containment**
EDR network containment is the textbook short-term containment action.

### Q22: **A. User and Entity Behavior Analytics**

### Q23: **B. Suspend deletion/retention to preserve data**
Legal hold halts routine destruction.

### Q24: **A. New detection rules and updated playbooks**
Lessons Learned feeds prevention/detection improvements.

### Q25: **B. Capture memory + isolate; THEN triage scope**
Order of volatility + containment first. Don't re-image until you've captured evidence and understood scope.

### Q26: **B. SOAR playbook**
Mass response = automation. Per-user manual tickets don't scale.

### Q27: **B. Patch immediately**
CVSS 9.8 + EPSS 0.92 + KEV listing = top priority.

### Q28: **C. Passive observation + coordinated cutoff**
Powering off destroys volatile evidence; tweeting tips the attacker. Stealth observation preserves intel for full cleanup.

---

## 📊 Score Yourself

- 27–28/28 → 🏆 SOC-ready.
- 23–26/28 → ✅ Strong; fix the gaps.
- 18–22/28 → ⚠️ Re-read IR + forensics sections.
- <18/28 → 🔁 Restart Module 8.

---

## 🃏 Add To Your Flashcards

- NIST IR lifecycle (6 phases, in order)
- Order of volatility (top to bottom)
- SIEM vs SOAR
- CVE / CVSS / CWE / EPSS / KEV (one line each)
- Tabletop / walkthrough / simulation / parallel / full-interruption
- Data destruction methods + which works for SSDs

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 9 — GRC, Risk & Compliance](../Module-09-GRC-Risk-Compliance/Reading.md)
