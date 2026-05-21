# Module 8: Security Operations 🛰️

> **Why this module matters:** Domain 4 (Security Operations) is **28%** of the Sec+ exam — the largest single domain. This is where the SOC actually lives: SIEM, SOAR, incident response, forensics, threat hunting, vulnerability management. Master this and you're more than a quarter of the way to passing.

---

## 🍕 A Story: The Hospital ER for Computers

A modern SOC works like a hospital ER.

A patient (an alert) arrives. **Triage nurse** (Tier 1 SOC analyst) assesses severity using vital signs (log evidence). Easy cases (false positives, known benign) are sent home. Real issues escalate to **doctors** (Tier 2/3 analysts and IR responders) who diagnose with imaging (forensics) and start treatment (containment, eradication, recovery).

The hospital has:
- **Monitoring equipment** (SIEM) that aggregates patient vitals into one screen
- **Automated drips and protocols** (SOAR playbooks) that handle routine responses
- **Crash carts and code teams** (IR teams) for emergencies
- **Pathology labs** (digital forensics) to examine the evidence carefully
- **Disease surveillance** (threat hunting) that proactively looks for outbreaks not yet symptomatic
- **Vaccination programs** (vulnerability management) that prevent issues before they arrive

Each tool exists because alerts arrive faster than humans can analyze them. The rest of this module is what each tool does and the IR playbook.

---

## 📦 Asset Management — Before You Can Defend, You Must Inventory

You can't protect what you don't know exists. Sec+ tests asset lifecycle:

| Phase | Activities |
|-------|-----------|
| **Acquisition / Procurement** | Vendor risk review, security requirements in RFP |
| **Assignment / Accounting** | Who owns it, what it does, where it is (CMDB) |
| **Classification** | What's the data sensitivity? (drives controls) |
| **Monitoring / Maintenance** | Patch, monitor health, track config drift |
| **Decommissioning / Disposal** | **Sanitize** data; cert of destruction; track chain of custody |

### Data destruction (Sec+ vocabulary)
| Term | What |
|------|------|
| **Wiping / Overwrite** | DoD 5220.22-M and similar — overwrite multiple times |
| **Crypto-erase** | Destroy encryption keys → data unrecoverable |
| **Degaussing** | Magnetic field destroys magnetic media (HDD, tapes) — doesn't work on SSD |
| **Shredding / Pulverizing** | Physical destruction (HDD, SSD, optical, paper) |
| **Incineration** | Burn (regulated for some industries) |
| **Certificate of Destruction** | Proof from a vendor with chain of custody |

🚨 **SSDs need crypto-erase or physical destruction.** Degaussing doesn't work on SSDs (they're flash, not magnetic).

---

## 📊 SIEM — Security Information & Event Management

A **SIEM** collects logs from across the environment, normalizes them, correlates events, and alerts on suspicious patterns. Examples: Splunk, Elastic Security, IBM QRadar, Microsoft Sentinel, Sumo Logic, Chronicle.

### What feeds a SIEM
- Endpoints (EDR / OS event logs)
- Network appliances (firewall, IDS/IPS, proxy)
- Identity (AD, IdP, MFA)
- Cloud (CloudTrail, Activity Log, Audit Logs)
- App logs
- DNS, DHCP, mail gateway
- Vulnerability scanners
- Threat intel feeds (for IOC enrichment)

### SIEM core capabilities
- **Log aggregation + normalization**
- **Correlation rules** ("if EDR alert + outbound to bad IP within 5 min → escalate")
- **Alerting + dashboards**
- **Long-term retention** for compliance
- **Search & investigation UI**

### Important SIEM concepts
- **UEBA** (User & Entity Behavior Analytics) — baseline normal, alert on deviation
- **Use cases / detection rules** — encoded knowledge of what to alert on
- **Time normalization** — all timestamps to UTC + NTP sync
- **False positive vs false negative** — both are costly; tuning is constant work

---

## 🤖 SOAR — Security Orchestration, Automation & Response

A **SOAR** automates routine responses via **playbooks** and **runbooks**.

| Term | What |
|------|------|
| **Playbook** | Documented response steps (often code) for a specific scenario |
| **Runbook** | More general operational procedure |
| **Orchestration** | Coordinating actions across many tools |
| **Automation** | Doing them without human intervention |

### Common SOAR playbooks
- Phishing email → auto-quarantine, search inbox for similar, block sender
- Malware on endpoint → isolate host via EDR, snapshot disk, open ticket
- Failed login spike → notify SOC, enable step-up MFA, geo-block
- New CVE → query asset inventory, open patch tickets, scan for exposure

🎯 **SIEM vs SOAR Sec+ trap:** SIEM **detects**. SOAR **responds**. Modern stacks integrate both ("XSIAM," Sentinel + Logic Apps, etc.).

---

## 📜 Logging — Sources Sec+ Names

| Log type | What it tells you |
|----------|-------------------|
| **Network logs** | flows, who talked to whom |
| **Firewall logs** | allow/deny decisions |
| **IDS/IPS logs** | signature matches, anomaly alerts |
| **OS / system logs** | auth, service, kernel events |
| **App logs** | application-specific events |
| **Endpoint logs** | EDR telemetry, Sysmon |
| **DNS logs** | which domains were resolved |
| **Web server logs** | URL/method/status/UA |
| **Authentication logs** | logins, failures, MFA |
| **NetFlow / sFlow / IPFIX** | flow metadata (5-tuple, byte counts) |
| **PCAP / packet capture** | full packet content (high fidelity, big files) |
| **Vulnerability scanner reports** | known vulns by host |
| **Audit logs** | who changed what config |
| **Metadata** | file headers, EXIF, email headers |

Important: **NetFlow vs sFlow vs IPFIX**
- All three are flow-data formats showing connections (not packet contents)
- **NetFlow** — Cisco original
- **sFlow** — sampled flow (less complete, lower overhead)
- **IPFIX** — IETF standardized version of NetFlow v9

---

## 🚨 Incident Response (IR) — The Lifecycle

Sec+ uses **NIST SP 800-61** IR lifecycle. Memorize the phases **in order**:

```
1. PREPARATION
2. DETECTION & ANALYSIS
3. CONTAINMENT
4. ERADICATION
5. RECOVERY
6. LESSONS LEARNED
```

| Phase | Key activities |
|-------|----------------|
| **Preparation** | IR plan, playbooks, tools, training, tabletop exercises, contact lists, jump bags |
| **Detection & Analysis** | Identify, scope, validate the incident; determine impact |
| **Containment** | Short-term (isolate host) + long-term (rebuild fresh systems) |
| **Eradication** | Remove malware, close vulnerabilities used |
| **Recovery** | Restore from clean backups, monitor for re-infection |
| **Lessons Learned** | Post-incident review, update playbooks, share with stakeholders |

### Containment strategies
- **Isolation** — pull network, EDR-quarantine
- **Segmentation** — VLAN move to a sandbox
- **Sinkhole** — redirect C2 DNS to /dev/null
- **Allow short-term to gather intel?** Sometimes deliberately allow continued (controlled) activity to learn more — risky, deliberate decision

### Tabletop, simulation, parallel tests
- **Tabletop exercise** — discussion-based, scenarios talked through
- **Walk-through** — step-by-step rehearsal
- **Simulation** — controlled live exercise
- **Parallel test** — failover to DR site without taking prod down
- **Full-interruption** — actual cutover (high-risk, high-value)

---

## 🔍 Digital Forensics

When an incident may lead to litigation/discipline, forensic discipline matters.

### Order of Volatility (MEMORIZE — this is heavily tested)

From MOST to LEAST volatile (collect in this order):
1. **CPU registers / cache**
2. **RAM (live memory)** + running processes / network connections
3. **Temporary files / swap / pagefile**
4. **Disk (hard drives, SSDs)**
5. **Remote logs / archival data**
6. **Physical configuration / network topology**

🎯 *Capture memory BEFORE shutting down the system. Once you power off, RAM is gone.*

### Forensic process — KEY TERMS
| Term | What |
|------|------|
| **Acquisition** | Bit-for-bit forensic image (using `dd`, FTK Imager, EnCase) |
| **Hash verification** | Compute SHA-256 of original + image — must match |
| **Chain of custody** | Documented log of who handled the evidence, when, where, why |
| **Legal hold** | Order to preserve data (suspend retention/deletion) |
| **E-discovery** | Process of identifying + producing electronically stored info for litigation |
| **Write blocker** | Hardware that prevents writes to evidence drive during imaging |
| **Working copy** | Analysis is done on COPY of the image, never the original |
| **Time skew / time normalization** | All timestamps converted to UTC |
| **Right to audit / preservation order** | Legal basis to access vendor systems |

### Common forensic artifacts
- Browser history, cache, cookies
- Recycle bin
- Event logs (Windows EVTX)
- Registry hives
- Shimcache, AmCache, prefetch
- USN journal
- Memory dumps (volatility framework)
- Network captures
- Cloud logs (CloudTrail, M365 audit)

---

## 🐺 Threat Hunting

Threat hunting = **proactively searching** for adversaries already inside your environment that automated detection has missed.

### Hunting hypotheses
- "What if an attacker has stolen a service account credential and is using it during business hours?"
- "What if there's a backdoor on our public-facing web server?"
- "What if an admin's workstation is calling out to a C2 we haven't blocked yet?"

### Hunt sources
- SIEM / log queries
- EDR process trees
- Threat intel IOCs
- MITRE ATT&CK techniques
- Network flow data
- Anomaly detection / UEBA

### Hunt outputs
- New detection rules (feed back into SIEM/EDR)
- New playbooks
- Identified incidents (handed to IR)

---

## 🩹 Vulnerability Management

### The lifecycle (essentially the same as patch mgmt but broader)

```
DISCOVER → IDENTIFY → ANALYZE → PRIORITIZE → RESPOND (patch/mitigate/accept) → REPORT/VERIFY
```

### Scanning types
| Type | What |
|------|------|
| **Credentialed (authenticated) scan** | Logged in; sees actual installed packages, configs |
| **Non-credentialed scan** | External view only; sees what an unauthenticated attacker sees |
| **Agent-based** | Agent on host reports state continuously |
| **Network-based** | External probe via the network |
| **Active** | Sends probes (may impact services) |
| **Passive** | Listens only (no traffic generated) |
| **Internal vs external** | Scanning position |
| **Web app scan (DAST)** | Crawls + probes web apps |
| **Static analysis (SAST)** | Reads source code — see Module 10 |
| **SCA** | Software Composition Analysis — finds vulns in dependencies — see Module 10 |
| **Container scan** | Scans Docker/OCI images for known CVEs |
| **Cloud scan / CSPM** | Configuration vulns in cloud |

### Pen testing
- **Black box** — tester knows nothing
- **White / clear box** — tester has full access (source, designs)
- **Gray box** — partial information
- **Internal vs external** — perspective
- **Red team / blue team / purple team** — offensive / defensive / collaborative
- **Bug bounty** — open invitation to find vulns

### Prioritization metrics

| Metric | What |
|--------|------|
| **CVE** | Common Vulnerabilities and Exposures — unique ID per vuln |
| **CVSS** | Scoring system (0-10); higher = worse |
| **CVSS Base** | Inherent characteristics |
| **CVSS Temporal** | Changes over time (exploit availability) |
| **CVSS Environmental** | Specific to your environment |
| **CWE** | Common Weakness Enumeration — categories (e.g., CWE-89 SQLi) |
| **EPSS** | Exploit Prediction Scoring System — probability of exploitation in the wild |
| **KEV** (CISA) | Known Exploited Vulnerabilities catalog — patch THESE first |

🎯 **Prioritize by:** (CVSS or EPSS) × asset exposure/criticality × exploitability.

### Responses to a vulnerability
1. **Patch** — apply vendor fix
2. **Mitigate** (compensating control) — disable feature, segment, WAF rule
3. **Accept** — formal risk acceptance (documented)
4. **Transfer** — insurance, outsource
5. **Avoid** — discontinue affected functionality

---

## 🗂️ Other Important Topics

### Change management within ops
(See Module 1, but in ops context):
- Emergency change vs standard change
- Tracking via CMDB
- Backout plans
- Stakeholder comms

### Configuration management
- Baselines + version control of configs (Ansible, Puppet, Chef, DSC)
- Drift detection (CSPM in cloud)
- Golden images

### Monitoring of systems & networks
- Health metrics (CPU, RAM, disk, latency)
- Security metrics (failed logins, IDS alerts)
- Synthetic monitoring (uptime checks)
- Real user monitoring (RUM)

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** At 02:14 the SIEM correlates: (a) EDR alert on `host-fin-04` — PowerShell encoded command, (b) outbound DNS to `bad-domain[.]tld`, (c) 4 successful auths from `host-fin-04` to other internal hosts in 6 minutes. Order the following actions correctly per NIST IR lifecycle:
>
> A. Wipe and re-image `host-fin-04`
> B. Capture memory image + EDR triage data
> C. Isolate `host-fin-04` via EDR network containment
> D. Update playbook with the new IOCs
> E. Restore user files from clean backup
> F. Determine scope: which other hosts were touched?

**Walkthrough:**

| Phase | Action |
|-------|--------|
| Detection & Analysis | **F. Determine scope** + **B. Capture memory image** |
| Containment | **C. Isolate via EDR** |
| Eradication | **A. Wipe and re-image** |
| Recovery | **E. Restore from clean backup** |
| Lessons Learned | **D. Update playbook** |

Order: **F → B → C → A → E → D** (B may overlap with F).

A PBQ would let you drag the actions into ordered slots.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Shut down the compromised host immediately to stop the attack" | NO — capture memory first (order of volatility) |
| "SIEM and SOAR are the same" | SIEM = detect. SOAR = respond/automate. |
| "Containment = eradication" | Containment is short-term isolation. Eradication is removing the threat. |
| "Chain of custody starts after litigation" | NO — starts the moment you touch evidence |
| "Patching ranks are CVSS-only" | Use **EPSS + KEV** alongside CVSS for real-world prioritization |
| "Forensic analysis on the original drive is fine" | NO — work on a hashed forensic image; original goes in evidence storage |
| "Degauss the SSD to wipe it" | NO — degaussing only works on magnetic media |
| "Tabletop exercise tests technology" | Tabletop is **discussion-based**. Simulation/parallel tests touch tech. |
| "False positives only waste time" | They erode trust — analysts start ignoring alerts (alert fatigue) |
| "EDR alone replaces SIEM" | EDR sees endpoint. SIEM correlates across the environment. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **SIEM** | Aggregates + correlates logs; alerts |
| **SOAR** | Orchestrates + automates response via playbooks |
| **UEBA** | Behavior analytics for users/entities |
| **NetFlow / sFlow / IPFIX** | Flow-data formats |
| **PCAP** | Full packet capture |
| **NIST IR Lifecycle** | Prep → Detect → Contain → Eradicate → Recover → Lessons |
| **Order of Volatility** | Registers > RAM > swap > disk > remote > physical |
| **Chain of custody** | Documented evidence handling |
| **Legal hold** | Preservation directive |
| **E-discovery** | Litigation data production process |
| **Write blocker** | Hardware that prevents drive modification |
| **Acquisition / Image / Hash** | Forensic capture + integrity check |
| **Threat hunting** | Proactive search for hidden threats |
| **MITRE ATT&CK** | TTP knowledge base |
| **CVE / CVSS / CWE / EPSS / KEV** | Vulnerability identifiers and scores |
| **Credentialed / Non-credentialed scan** | With or without login |
| **Pen test types** | Black/white/gray box, red/blue/purple team |
| **Crypto-erase / shred / degauss / wipe** | Data destruction techniques |
| **Tabletop / walkthrough / simulation / parallel / full-interruption** | Exercise types |

### Acronyms cheat-row (Module 8)
| Acronym | Meaning |
|---------|---------|
| SIEM | Security Information & Event Mgmt |
| SOAR | Security Orchestration Automation & Response |
| UEBA | User & Entity Behavior Analytics |
| IR / IRP | Incident Response / Plan |
| NIST 800-61 | IR lifecycle standard |
| EDR / XDR / MDR | (covered M7) |
| MTTR / MTBF / MTTD / MTTC | Mean Time To Recover/Between Failures/Detect/Contain |
| RTO / RPO | Recovery Time/Point Objective (M9) |
| CVE / CVSS / CWE / EPSS / KEV | Vuln IDs & scoring |
| SAST / DAST / SCA / IAST | App security testing (M10) |
| PCAP | Packet capture |
| NetFlow / sFlow / IPFIX | Flow data |
| EDR / FIM | Endpoint Detection / File Integrity Monitoring |
| SOC | Security Operations Center |
| TIP | Threat Intelligence Platform |
| MITRE ATT&CK | Adversary TTPs |
| DFIR | Digital Forensics & Incident Response |

---

## ✅ Module 8 Summary

You now know:
- 📦 Asset lifecycle + data destruction methods (and why SSDs need different treatment)
- 📊 **SIEM** (detect) and **SOAR** (respond) and how they fit together
- 📜 Every log source Sec+ names — including NetFlow vs sFlow vs IPFIX vs PCAP
- 🚨 The **NIST IR lifecycle** in order + tabletop/walkthrough/simulation/parallel exercise types
- 🔍 **Digital forensics** — order of volatility, acquisition, hashing, chain of custody, legal hold, e-discovery
- 🐺 **Threat hunting** vs reactive IR
- 🩹 **Vulnerability management** — CVE / CVSS / CWE / EPSS / KEV, scan types, pen test types, prioritization

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 9 — GRC, Risk & Compliance](../Module-09-GRC-Risk-Compliance/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [NIST SP 800-61 Rev 2 — Computer Security Incident Handling Guide](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final)
- 📖 [NIST SP 800-86 — Guide to Integrating Forensic Techniques](https://csrc.nist.gov/publications/detail/sp/800-86/final)
- 📖 [MITRE ATT&CK](https://attack.mitre.org/)
- 📖 [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- 📖 [FIRST CVSS Calculator](https://www.first.org/cvss/calculator/3.1)
- 📖 [EPSS](https://www.first.org/epss/)
