# Module 4: Threats & Threat Actors 👥

> **Why this module matters:** Domain 2 (Threats, Vulnerabilities & Mitigations) is **22%** of the exam — the second-largest domain. Half of that is recognizing *who* attacks and *why*. Get the threat-actor matrix cold and a huge chunk of scenario questions become free points.

---

## 🍕 A Story: Four People Want To Get Into Your House

Imagine four very different burglars staking out your home:

**Burglar #1: The Bored Teenager** — Has no plan. Tries the front door. If it's unlocked, walks in; if not, leaves. Steals whatever's loud and obvious. Low skill, low motivation, low capability — but VERY common.

**Burglar #2: The Disgruntled Ex-Roommate** — Knows where the spare key is, knows the alarm code, knows your daily schedule. Doesn't need any skill; they already have access. Their motivation is *revenge*. This is the **insider threat** — the most dangerous because their attack starts inside.

**Burglar #3: The Organized Crime Crew** — Plans, recruits, has tools (lock picks, jammers, getaway car), targets you because your laptop has client data they can sell. Profit-motivated, professional, will pivot to the next house if you raise the cost.

**Burglar #4: The Government Spy** — Wants something specific (a document in your safe). Patient. Will spend months. Has unlimited resources. May break in 5 times over a year without you noticing, copy the document, and leave everything else perfect. This is the **APT** (Advanced Persistent Threat) — nation-state.

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
| **Shadow IT** | varies | varies | Convenience (not malicious) | Marketing buys SaaS without security review |

### Internal vs External

| | Internal | External |
|---|----------|----------|
| Insider | ✅ | — |
| Nation-state | rarely | ✅ |
| Organized crime | — | ✅ |
| Hacktivist | — | ✅ |
| Shadow IT | ✅ | — |
| Unskilled | rare | ✅ |

### Attributes you'll see in question stems
- **Internal vs external** — already inside the perimeter?
- **Resources / funding** — solo actor vs state-funded
- **Sophistication / capability** — Metasploit-and-go vs custom 0-day exploits
- **Intent / motivation** — what do they want?

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

The **vector** is HOW the attack arrives. Sec+ enumerates many — be ready to recognize each:

### Message-based vectors
- **Email** — phishing, malicious attachments, BEC
- **SMS** — smishing
- **Instant messaging** — malicious links in Slack/Teams/Telegram
- **Voice calls** — vishing

### File-based
- **Image-based** — malicious metadata, polyglot files, steganography droppers
- **File-based** — macros in .docx, malicious PDF, infected installer
- **Voice call** — vishing (yes, also a delivery vector)

### Removable devices
- **USB drops** — leave a USB in the parking lot; curious finder plugs it in
- **HID emulation** — "Rubber Ducky" pretending to be a keyboard

### Vulnerable software
- **Client-based** — exploit a vulnerable installed app (browser, PDF reader)
- **Agentless** — server-side vuln (no client needed)

### Unsupported systems & applications
- End-of-life OS still in production — no patches available

### Unsecure networks
- **Wireless** — open or weakly-secured Wi-Fi, rogue APs, evil twins
- **Wired** — unmonitored Ethernet jacks, unsecured switch ports
- **Bluetooth** — bluejacking, bluesnarfing, bluebugging

### Open service ports
- Internet-facing RDP (3389), SMB (445), Redis (6379), MongoDB (27017) — frequent intrusion vectors

### Default credentials
- "admin/admin" on IoT devices, IP cameras, network appliances — Mirai's bread and butter

### Supply chain
- **Managed Service Provider (MSP) compromise** — attacker compromises MSP → cascades to all clients (Kaseya, SolarWinds)
- **Vendor software** — malicious update pushed through legitimate update channel (SolarWinds Orion)
- **Hardware supply chain** — backdoored firmware, counterfeit components

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

### Indicators of Compromise (IOCs) — what threat intel delivers
- IP addresses, domains, URLs known-bad
- File hashes (MD5/SHA-256) of malware
- Email headers/subjects associated with phishing campaigns
- Behavioral patterns (TTPs — Tactics, Techniques, Procedures)
- Registry keys malware writes
- C2 server fingerprints

### Threat intelligence terms
- **TTPs** — Tactics, Techniques, Procedures (MITRE ATT&CK framework)
- **Indicators of Compromise (IOC)** — artifacts that suggest a compromise
- **Indicators of Attack (IOA)** — patterns suggesting an attack in progress
- **Threat hunting** — proactively searching for unknown threats already in your environment (vs reactive IR)
- **MITRE ATT&CK** — global knowledge base of adversary TTPs

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

> **Scenario:** A SOC analyst reviews these three concurrent incidents:
> 1. A long-time DBA's account exfiltrated 4 GB of customer PII to a personal Dropbox at 4 a.m. They were just denied a promotion.
> 2. Your CFO's email is being used to wire-fraud vendors. The attacker has spent weeks researching internal vendor relationships.
> 3. Your investor-relations website was defaced with a political slogan within hours of an unrelated industry controversy.
>
> Classify each by **actor type + primary motivation + recommended detection.**

**Walkthrough:**

| # | Actor | Motivation | Detection control |
|---|-------|------------|-------------------|
| 1 | **Insider threat** | Revenge (recent denial) | **DLP** alert on PII volume + UEBA flagging off-hours bulk transfer |
| 2 | **Organized crime** (sophisticated; BEC) | Financial | **DMARC/SPF/DKIM** to detect impersonation + email anomaly detection + wire-approval workflow |
| 3 | **Hacktivist** | Philosophical / political | **Web defacement monitoring** + WAF + integrity monitoring on web root |

PBQ might present 4 incidents + 4 actor names and ask you to drag-match.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Script kiddies aren't a serious threat" | Volume matters — automated scanning + public exploits compromise plenty of orgs |
| "APT means a specific tool" | APT = Advanced **Persistent** Threat — a *type of actor*, not a tool. The persistence is the giveaway. |
| "Insiders are always malicious" | Many "insider incidents" are accidents (negligence, misconfiguration). Sec+ distinguishes **malicious vs negligent insider**. |
| "Hacktivists steal data for money" | Hacktivists are philosophy/politics-driven. Money = organized crime. |
| "All threat intel costs money" | OSINT is free; CISA AIS is free; ISACs are usually free for members |
| "Shadow IT is always malicious" | No — usually it's just employees solving a problem fast. Risk is the loss of visibility. |
| "MSPs are safer because they're experts" | MSP compromise is one of the biggest supply-chain risks — attacker pivots to all clients |
| "Default credentials only affect IoT" | Network gear, databases, admin consoles — anything shipped with admin/admin |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **APT** | Advanced Persistent Threat — typically nation-state |
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
- 👥 The 6 actor categories — actor matrix of skill × resource × motivation
- 💰 The 10+ motivations Sec+ lists and which actor each maps to
- 🚪 Threat vectors — message, file, removable, vulnerable sw, network, ports, default creds, supply chain
- 🌐 Threat intel sources — OSINT, ISAC, commercial, dark web, AIS, STIX/TAXII
- 🎯 The distinction between IOC, IOA, TTP, and how MITRE ATT&CK organizes them
- ⚠️ Why "insider" can be malicious OR negligent

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 5 — Vulnerabilities & Attacks](../Module-05-Vulnerabilities-Attacks/Reading.md) (the big one)

---

## 📚 Further Reading (Optional)

- 📖 [MITRE ATT&CK Framework](https://attack.mitre.org/) — the canonical TTP database
- 📖 [CISA Known Exploited Vulnerabilities (KEV) catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- 📖 [Verizon Data Breach Investigations Report (DBIR)](https://www.verizon.com/business/resources/reports/dbir/) — annual breach trends
- 📖 [Mandiant APT reports](https://www.mandiant.com/resources/reports) — case studies of named APT groups
- 📖 [CISA Automated Indicator Sharing](https://www.cisa.gov/topics/cyber-threats-and-advisories/information-sharing/automated-indicator-sharing-ais)
