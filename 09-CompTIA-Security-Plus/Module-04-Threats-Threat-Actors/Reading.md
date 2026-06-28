# Module 4: Threats & Threat Actors 👥

> **Why this module matters:** Domain 2 (Threats, Vulnerabilities & Mitigations) is **22%** of the exam, the second-largest domain. Half of that is recognizing *who* attacks and *why*. Get the threat-actor matrix cold and a huge chunk of scenario questions become free points.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [The CIA triad and control types](../Module-01-Security-Fundamentals/Reading.md), every actor in this module is attempting to violate one or more.
> - [IAM concepts](../Module-03-Identity-Access-Management/Reading.md), most attacks chain through credential or identity compromise.
> - General internet topology (DNS (Domain Name System), public IPs, TLS (Transport Layer Security)), useful for understanding C2 infrastructure and watering-hole attacks.

---

## 🍕 A Story: Four People Want To Get Into Your House

Imagine four very different burglars staking out your home:

**Burglar #1: The Bored Teenager** Has no plan. Tries the front door. If it's unlocked, walks in; if not, leaves. Steals whatever's loud and obvious. Low skill, low motivation, low capability but VERY common.

**Burglar #2: The Disgruntled Ex-Roommate** Knows where the spare key is, knows the alarm code, knows your daily schedule. Doesn't need any skill; they already have access. Their motivation is *revenge*. This is the **insider threat** the most dangerous because their attack starts inside.

**Burglar #3: The Organized Crime Crew**, Plans, recruits, has tools (lock picks, jammers, getaway car), targets you because your laptop has client data they can sell. Profit-motivated, professional, will pivot to the next house if you raise the cost.

**Burglar #4: The Government Spy** Wants something specific (a document in your safe). Patient. Will spend months. Has unlimited resources. May break in 5 times over a year without you noticing, copy the document, and leave everything else perfect. This is the **APT** (Advanced Persistent Threat) nation-state.

Sec+ asks you to **match the attack pattern to the actor**. Once you've got the four mental images above, the questions answer themselves.

---

## 👥 The Threat Actor Taxonomy

Sec+ recognizes these actor categories. **Memorize the capability, intent, and example.**

| Actor | Skill | Resources | Motivation | Example |
|-------|-------|-----------|------------|---------|
| **Nation-state / APT** | 🟢🟢🟢 Highest | Massive | Espionage, war, sabotage | China APT41, Russia Fancy Bear (APT28), N. Korea Lazarus |
| **Organized crime** | 🟢🟢 High | Substantial | **Financial** | Ransomware crews (Conti, LockBit) |
| **Hacktivist** | 🟢 Mixed | Modest | **Philosophical / political** | Anonymous, Anti-state takedowns |
| **Insider threat** | varies | Already inside | Revenge, financial, ideology, coercion | Snowden, disgruntled admin |
| **Unskilled attacker** ("script kiddie") | 🔴 Low | Low | Curiosity, ego | Teens running Metasploit modules |
| **Shadow IT** | varies | varies | Convenience (not malicious) | Marketing buys SaaS (Software as a Service) without security review |

### Internal vs External

| | Internal | External |
|---|----------|----------|
| Insider | ✅ |, |
| Nation-state | rarely | ✅ |
| Organized crime |, | ✅ |
| Hacktivist |, | ✅ |
| Shadow IT | ✅ |, |
| Unskilled | rare | ✅ |

### Attributes you'll see in question stems
- **Internal vs external**, already inside the perimeter?
- **Resources / funding**, solo actor vs state-funded
- **Sophistication / capability**, Metasploit-and-go vs custom 0-day exploits
- **Intent / motivation**, what do they want?

---

## 💰 Motivations (Sec+ specifically lists these)

| Motivation | Typical actor | Example |
|------------|---------------|---------|
| **Data exfiltration** | Most actors | Stealing customer DB, IP |
| **Espionage** | Nation-state | Stealing weapons designs |
| **Service disruption** | Hacktivist, nation-state | DDoS critical infrastructure |
| **Blackmail / extortion** | Organized crime | Ransomware, double-extortion |
| **Financial gain** | Organized crime | Wire fraud, BEC, crypto-jacking |
| **Philosophical / political beliefs** | Hacktivist | Defacing a bank's website over policy |
| **Ethical** | "White hat" / bug bounty | Disclose to fix |
| **Revenge** | Insider | Disgruntled employee deletes data |
| **Disruption / chaos** | Various | Wiper malware (NotPetya) |
| **War** | Nation-state | Cyber attacks during conflict |

🎯 **Exam pattern:** Question gives motivation + behavior, you pick actor. "Multi-year, low-noise theft of nuclear research" → APT. "Encrypts files, demands Bitcoin" → organized crime.

---

## 🚪 Threat Vectors & Attack Surfaces

The **vector** is HOW the attack arrives. Sec+ enumerates many, be ready to recognize each:

### Message-based vectors
- **Email**, phishing, malicious attachments, BEC
- **SMS**, smishing
- **Instant messaging**, malicious links in Slack/Teams/Telegram
- **Voice calls**, vishing

### File-based
- **Image-based**, malicious metadata, polyglot files, steganography droppers
- **File-based**, macros in .docx, malicious PDF, infected installer
- **Voice call**, vishing (yes, also a delivery vector)

### Removable devices
- **USB drops**, leave a USB in the parking lot; curious finder plugs it in
- **HID emulation**, "Rubber Ducky" pretending to be a keyboard

### Vulnerable software
- **Client-based**, exploit a vulnerable installed app (browser, PDF reader)
- **Agentless**, server-side vuln (no client needed)

### Unsupported systems & applications
- End-of-life OS still in production, no patches available

### Unsecure networks
- **Wireless**, open or weakly-secured Wi-Fi, rogue APs, evil twins
- **Wired**, unmonitored Ethernet jacks, unsecured switch ports
- **Bluetooth**, bluejacking, bluesnarfing, bluebugging

### Open service ports
- Internet-facing RDP (3389), SMB (445), Redis (6379), MongoDB (27017), frequent intrusion vectors

### Default credentials
- "admin/admin" on IoT devices, IP cameras, network appliances, Mirai's bread and butter

### Supply chain
- **Managed Service Provider (MSP) compromise**, attacker compromises MSP → cascades to all clients (Kaseya, SolarWinds)
- **Vendor software**, malicious update pushed through legitimate update channel (SolarWinds Orion)
- **Hardware supply chain**, backdoored firmware, counterfeit components

### Human vectors / Social engineering
- See Module 5 for the deep dive (phishing, pretexting, BEC, watering hole, typosquatting)

---

## 🌐 Threat Intelligence Sources

Knowing your enemy = better defense. Sec+ tests these intel categories:

| Source | What | Example |
|--------|------|---------|
| **OSINT** (Open Source Intel) | Publicly available info | Twitter/X, blogs, breach disclosures, Shodan |
| **Proprietary / Commercial** | Paid feeds | Recorded Future, Mandiant, CrowdStrike Falcon X |
| **Dark web** | Marketplaces, forums where actors trade | Stolen credentials for sale, RaaS forums |
| **Information-sharing organizations (ISACs)** | Industry sharing groups | FS-ISAC (finance), H-ISAC (health), MS-ISAC (state/local govt), Auto-ISAC |
| **Internal sources** | Your own logs/IR data | Past incident reports, honeypot data |
| **STIX/TAXII** | Standards for sharing structured intel | Sharing IOCs in machine-readable format |
| **AIS** (Automated Indicator Sharing) | CISA program | Free U.S. govt feed |
| **Public/private partnerships** | InfraGard, CISA collab | Industry briefings |

### Indicators of Compromise (IOCs), what threat intel delivers
- IP addresses, domains, URLs known-bad
- File hashes (MD5/SHA-256) of malware
- Email headers/subjects associated with phishing campaigns
- Behavioral patterns (TTPs, Tactics, Techniques, Procedures)
- Registry keys malware writes
- C2 server fingerprints

### Threat intelligence terms
- **TTPs** Tactics, Techniques, Procedures (MITRE ATT&CK framework, **MITRE Corporation, 2013** first public release; refreshed continually, with v15 published April 2024)
- **Indicators of Compromise (IOC)**, artifacts that suggest a compromise (concept introduced by Mandiant in *OpenIOC*, 2011)
- **Indicators of Attack (IOA)**, patterns suggesting an attack in progress
- **Threat hunting**, proactively searching for unknown threats already in your environment (vs reactive IR)
- **MITRE ATT&CK**, global knowledge base of adversary TTPs (the Lockheed Martin **Cyber Kill Chain** model, Hutchins, Cloppert & Amin, *Leading Issues in Information Warfare and Security Research*, 2011, is the predecessor)
- **Diamond Model of Intrusion Analysis** Caltagirone, Pendergast & Betz (2013) four-vertex model (Adversary, Capability, Infrastructure, Victim); referenced by Sec+ as an analytical framework

---

## 🎯 The OSINT vs Dark Web vs Commercial Map

| Need | Best source |
|------|-------------|
| Verify if your domain appears in a credential dump | **Dark web monitoring** (or Have I Been Pwned for public dumps) |
| Subscribe to vetted, industry-specific IOC feeds | **Commercial feed + ISAC** |
| Free, quick reconnaissance of attacker infrastructure | **OSINT** (Shodan, VirusTotal, AbuseIPDB) |
| Federally curated cross-sector intel (US) | **CISA AIS** |

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** A SOC (Security Operations Center) analyst reviews these three concurrent incidents:
> 1. A long-time DBA's account exfiltrated 4 GB of customer PII to a personal Dropbox at 4 a.m. They were just denied a promotion.
> 2. Your CFO (Chief Financial Officer)'s email is being used to wire-fraud vendors. The attacker has spent weeks researching internal vendor relationships.
> 3. Your investor-relations website was defaced with a political slogan within hours of an unrelated industry controversy.
>
> Classify each by **actor type + primary motivation + recommended detection.**

**Walkthrough:**

| # | Actor | Motivation | Detection control |
|---|-------|------------|-------------------|
| 1 | **Insider threat** | Revenge (recent denial) | **DLP** alert on PII volume + UEBA flagging off-hours bulk transfer |
| 2 | **Organized crime** (sophisticated; BEC) | Financial | **DMARC/SPF/DKIM** to detect impersonation + email anomaly detection + wire-approval workflow |
| 3 | **Hacktivist** | Philosophical / political | **Web defacement monitoring** + WAF (Web Application Firewall) + integrity monitoring on web root |

PBQ might present 4 incidents + 4 actor names and ask you to drag-match.

---

## 📊 Case Study, SolarWinds Sunburst / Nobelium (2020-2021)

**Situation.** **SolarWinds Orion** is a network-monitoring suite used by 33,000+ enterprises, including all five branches of the US military, the State Department, Treasury, Department of Homeland Security, Commerce, Energy (including the National Nuclear Security Administration), Cisco, Intel, Microsoft, Deloitte, and ~425 of the Fortune 500. Between **September 2019 and February 2020**, attackers later attributed by the US Cybersecurity & Infrastructure Security Agency (CISA), the FBI, and NSA to the Russian Foreign Intelligence Service (**SVR**, tracked as APT29 / Cozy Bear / Nobelium / Midnight Blizzard) compromised SolarWinds' build pipeline.

**Decision.** Rather than steal code or burn the foothold, the attackers added a **malicious DLL (SolarWinds.Orion.Core.BusinessLayer.dll)** to legitimate Orion software updates. The trojanized DLL was signed with SolarWinds' valid code-signing certificate meaning every customer's automatic update mechanism trusted it. From **March to June 2020**, SolarWinds digitally signed and shipped the backdoored update (later named **SUNBURST**) to ~18,000 customers worldwide. SUNBURST sat dormant for 12-14 days post-install to evade dynamic analysis, then beaconed to a domain (`avsvmcloud[.]com`) using DGA-generated subdomains that looked like Orion telemetry. From the 18,000 compromised customers, the attackers hand-selected **~100 high-value targets** for second-stage **TEARDROP** and **RAINDROP** payloads sufficient operational security to evade detection for **8-9 months**.

**Outcome.** Disclosure came not from SolarWinds or the US government but from **FireEye (now Mandiant)**, which on **8 December 2020** publicly disclosed that its own red-team tools had been stolen. FireEye's investigation traced the breach to SolarWinds Orion. Microsoft, the US Treasury, Commerce, State, DHS, and Energy departments all confirmed breaches by 14 December. The Microsoft CEO (Chief Executive Officer) Satya Nadella publicly stated SolarWinds was "the largest and most sophisticated attack the world has ever seen." Remediation cost the US federal government an estimated **$100+ billion** (Brookings Institution estimate, 2021). SolarWinds' stock fell 40% in one week. The CEO retired. In October 2023 the **SEC charged SolarWinds and its CISO (Chief Information Security Officer) with securities fraud** for misleading investors about cybersecurity practices, the first time a public-company CISO faced personal SEC charges. The charges against the CISO personally were dismissed by a federal judge in July 2024, but the case against the company continued.

**Lesson for the exam / for practitioners.** This case touches almost every concept in Module 4:

- **Actor classification.** SVR is the textbook **APT / nation-state**, patient (8-9 months pre-detection), well-resourced (custom malware that evaded every commercial AV/EDR (Endpoint Detection and Response)), motivated by **espionage** (intelligence collection), not financial. Sec+ tests this distinction: a campaign with no monetization but extensive persistence is APT, not organized crime.
- **Supply-chain vector.** SUNBURST exploited *trust* in vendor software updates. The compromised code was *signed* with a legitimate certificate. The exam asks: which threat vector is illustrated?, answer is **supply chain**, specifically **vendor / software supply chain**. Compare with Kaseya (2021, RMM-as-vector) and CCleaner (2017, same pattern).
- **Threat intel sources.** The detection came from a *private commercial* source (FireEye), not government feeds. **CISA's Emergency Directive 21-01** (13 December 2020) ordered all federal civilian agencies to disconnect Orion immediately. This is exactly the kind of cross-sector sharing that **ISACs / AIS / STIX-TAXII** are designed to enable; SolarWinds also drove faster updates to those programs.
- **IOC vs IOA.** Static IOCs (`avsvmcloud[.]com`, file hashes of the trojanized DLL) were published within days; **IOA** patterns (long dormant period after install + DGA-generated subdomains + targeting of Active Directory) generalized to detect *future* similar attacks, these IOAs became part of MITRE ATT&CK as new techniques.
- **The CISO-personal-liability angle.** The SEC's case against the CISO marked an inflection point: corporate security disclosures are now SEC-relevant under the **Cybersecurity Disclosure Rule** (effective December 2023; companies must disclose material cybersecurity incidents within 4 business days). Sec+ Domain 5 (GRC) covers this.

**Discussion (Socratic).**
- **Q1:** SolarWinds' build pipeline was compromised for months. Modern secure-CI/CD (Continuous Integration/Continuous Deployment) practice (Module 10) emphasizes reproducible builds, signed provenance (SLSA / Sigstore), and SBOMs. If you were SolarWinds' new CISO in 2021, what *three* technical controls would you prioritize in the first 90 days, and how would you decide between fixing the build pipeline versus offering customers better runtime detection? Argue each side.
- **Q2:** ~18,000 customers were exposed; ~100 were hand-selected for stage-2 implants. The other 17,900 were not exploited but still trusted a backdoored binary in their environment. Were those 17,900 *breached* or merely *compromised*? Defend a definition with reference to NIST SP 800-61 (Module 8) IR terminology, and explain how this affects breach-notification obligations under GDPR (General Data Protection Regulation)/state laws.
- **Q3:** The SEC charged the CISO personally. Critics argue this chills security-honesty (CISOs will hide problems to avoid personal liability); proponents argue it's the only way to force public-company boards to take cybersecurity seriously. Build the strongest argument on each side, then state which you'd defend in a CISO peer-network discussion and why.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Script kiddies aren't a serious threat" | Volume matters, automated scanning + public exploits compromise plenty of orgs |
| "APT means a specific tool" | APT = Advanced **Persistent** Threat, a *type of actor*, not a tool. The persistence is the giveaway. |
| "Insiders are always malicious" | Many "insider incidents" are accidents (negligence, misconfiguration). Sec+ distinguishes **malicious vs negligent insider**. |
| "Hacktivists steal data for money" | Hacktivists are philosophy/politics-driven. Money = organized crime. |
| "All threat intel costs money" | OSINT is free; CISA AIS is free; ISACs are usually free for members |
| "Shadow IT is always malicious" | No, usually it's just employees solving a problem fast. Risk is the loss of visibility. |
| "MSPs are safer because they're experts" | MSP compromise is one of the biggest supply-chain risks, attacker pivots to all clients |
| "Default credentials only affect IoT" | Network gear, databases, admin consoles, anything shipped with admin/admin |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **APT** | Advanced Persistent Threat, typically nation-state |
| **Threat actor** | Entity executing or sponsoring an attack |
| **Insider threat** | Authorized user causing harm (malicious or negligent) |
| **Hacktivist** | Ideology/politics-motivated attacker |
| **Script kiddie** | Low-skill attacker using pre-built tools |
| **Shadow IT** | Unsanctioned tech use by employees |
| **Threat vector** | Path/method of attack (email, USB, supply chain, etc.) |
| **Attack surface** | Sum total of exploitable points |
| **Supply-chain attack** | Compromise via a vendor/MSP/component |
| **OSINT** | Open-source intelligence |
| **ISAC** | Info Sharing & Analysis Center (industry-specific) |
| **STIX / TAXII** | Standards for structured intel sharing |
| **IOC / IOA** | Indicator of Compromise / Indicator of Attack |
| **TTP** | Tactics, Techniques, Procedures |
| **MITRE ATT&CK** | Adversary TTP knowledge base |
| **Threat hunting** | Proactive search for hidden threats |
| **C2** | Command and Control infrastructure |
| **0-day** | Vulnerability unknown to vendor (no patch exists) |

### Acronyms cheat-row (Module 4)
| Acronym | Meaning |
|---------|---------|
| APT | Advanced Persistent Threat |
| OSINT / HUMINT / SIGINT | Open / Human / Signals intel |
| IOC / IOA | Indicator of Compromise / Attack |
| TTP | Tactics, Techniques, Procedures |
| ISAC | Info Sharing & Analysis Center |
| STIX / TAXII | Intel exchange standards |
| AIS | Automated Indicator Sharing (CISA) |
| C2 / C&C | Command and Control |
| RaaS | Ransomware-as-a-Service |
| BEC | Business Email Compromise |
| MSP / MSSP | Managed (Security) Service Provider |
| ATT&CK | MITRE adversarial tactics & techniques framework |
| CTI | Cyber Threat Intelligence |

---

## ✅ Module 4 Summary

You now know:

- 👥 The 6 actor categories, actor matrix of skill × resource × motivation
- 💰 The 10+ motivations Sec+ lists and which actor each maps to
- 🚪 Threat vectors, message, file, removable, vulnerable sw, network, ports, default creds, supply chain
- 🌐 Threat intel sources, OSINT, ISAC, commercial, dark web, AIS, STIX/TAXII
- 🎯 The distinction between IOC, IOA, TTP, and how MITRE ATT&CK organizes them
- ⚠️ Why "insider" can be malicious OR negligent

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 5, Vulnerabilities & Attacks](../Module-05-Vulnerabilities-Attacks/Reading.md) (the big one)

> **Where this leads.**
> - Inside this course: [Module 5](../Module-05-Vulnerabilities-Attacks/Reading.md) covers *how* actors execute (the techniques in the MITRE ATT&CK matrix); [Module 8](../Module-08-Security-Operations/Reading.md) covers detection, threat hunting, and incident response on actor behaviors; [Module 9](../Module-09-GRC-Risk-Compliance/Reading.md) covers third-party / supply-chain risk programs that SolarWinds put on every CISO agenda.
> - Cross-course: AWS (Amazon Web Services) AI Practitioner (course 07) discusses prompt-injection threats, a new "AI-era" actor capability.
> - Practice: Practice Exam 1 has ~5 actor/intel questions; Final Mock has ~8.

---

## 📚 Further Reading (Optional)

**Primary sources / frameworks:**
- 📄 MITRE Corporation. *ATT&CK for Enterprise* (2013-present). [attack.mitre.org](https://attack.mitre.org/). v15 (April 2024) is the current major release.
- 📄 Hutchins, Cloppert & Amin (2011). "Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains." Lockheed Martin / *Leading Issues in Information Warfare and Security Research*. (The Cyber Kill Chain.)
- 📄 Caltagirone, S., Pendergast, A. & Betz, C. (2013). *The Diamond Model of Intrusion Analysis*. Center for Cyber Intelligence Analysis and Threat Research.
- 📄 OASIS *STIX 2.1* (2021) and *TAXII 2.1*, structured threat-intel exchange standards.

**Case-study sources (SolarWinds):**
- 📄 FireEye/Mandiant (2020). "Highly Evasive Attacker Leverages SolarWinds Supply Chain to Compromise Multiple Global Victims with SUNBURST Backdoor." 8 December 2020 disclosure.
- 📄 CISA (2020). [*Emergency Directive 21-01*](https://www.cisa.gov/news-events/directives/ed-21-01-mitigate-solarwinds-orion-code-compromise). 13 December 2020.
- 📄 US Senate Homeland Security & Governmental Affairs Committee (2021). *SolarWinds Hearings*. (Public testimony from CrowdStrike, Microsoft, FireEye, SolarWinds.)
- 📄 SEC v. SolarWinds Corp. & Brown, 1:23-cv-09518 (S.D.N.Y., filed 30 October 2023). The complaint and the July 2024 partial dismissal opinion are read in corporate-governance and security-disclosure courses.

**Practitioner:**
- 📖 [CISA Known Exploited Vulnerabilities (KEV) catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- 📖 [Verizon Data Breach Investigations Report 2024](https://www.verizon.com/business/resources/reports/dbir/), annual breach trends
- 📖 [Mandiant M-Trends Annual Report 2024](https://www.mandiant.com/m-trends), dwell times, sectoral data
- 📖 [CISA Automated Indicator Sharing (AIS)](https://www.cisa.gov/topics/cyber-threats-and-advisories/information-sharing/automated-indicator-sharing-ais)
- 📖 [Microsoft Digital Defense Report 2024](https://www.microsoft.com/en-us/security/security-insider/microsoft-digital-defense-report-2024), global threat landscape
