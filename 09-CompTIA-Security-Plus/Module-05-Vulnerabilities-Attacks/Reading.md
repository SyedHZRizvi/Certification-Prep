# Module 5: Vulnerabilities & Attacks 💥

> **Why this module matters:** Together with Module 4, this completes Domain 2 (22% of the exam). You'll be asked to **identify an attack from a 1-paragraph scenario** dozens of times on the real test. The trick is having an internal taxonomy so attacks don't blur together.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Threat actors and motivations](../Module-04-Threats-Threat-Actors/Reading.md), Module 4 covers *who*; this module covers *how*.
> - [Cryptography basics](../Module-02-Cryptography-PKI/Reading.md), needed for pass-the-hash, replay attacks, and weak-cipher questions.
> - [Authentication factors and federation protocols](../Module-03-Identity-Access-Management/Reading.md), needed for credential attacks and session-hijack scenarios.
> - Basic web concepts (HTTP, cookies, request/response), needed for SQLi/XSS/CSRF/SSRF questions.

---

## 🍕 A Story: The Bank That Got Robbed in 12 Different Ways

Imagine a single bank First Federal and twelve different robbery attempts in one year. Each one looks different but most fall into one of four families:

1. **Walking in the front door** with stolen keys (credential attacks)
2. **Tricking an employee** into opening the vault (social engineering)
3. **Sneaking malware** in the back door (malware, including ransomware)
4. **Crashing the alarm system** while looting (DDoS/disruption + attack-while-distracted)

Each family has sub-types, pass-the-hash vs brute force, phishing vs vishing, virus vs worm vs Trojan, SYN flood vs DNS amplification. Your job is to **recognize the tell-tale signs of each**. Memorize the tells, and Sec+ scenario questions become matching exercises.

---

## 🦠 Malware, The Big List

| Type | Defining trait | Example |
|------|----------------|---------|
| **Virus** | Attaches to a host file; needs user action to spread (open file) | Boot sector, macro virus |
| **Worm** | Self-replicating; spreads across networks **without user action** | WannaCry, Conficker |
| **Trojan** | Disguised as legitimate software; doesn't self-replicate | Backdoor wrapped in a "free game" installer |
| **Ransomware** | Encrypts files, demands payment; modern variants also exfiltrate ("double extortion") | LockBit, Ryuk, REvil |
| **Spyware** | Silently collects info (keystrokes, browsing, screenshots) | FinFisher |
| **Adware** | Inserts ads, redirects browsing | Browser hijackers |
| **Bloatware** | Pre-installed unwanted software (mfr or vendor) | Crapware on new laptops |
| **Keylogger** | Captures keystrokes (subtype of spyware) | Hardware or software |
| **Rootkit** | Hides itself + other malware deep in OS (kernel-level) | Sony rootkit, Necurs |
| **Bootkit** | Rootkit that infects the bootloader / firmware | LoJax |
| **Logic bomb** | Triggers on a condition (date, event) | Disgruntled admin's "if I'm not in payroll, wipe drive" |
| **Backdoor** | Hidden access method (intentional or planted) | Remote shell on port 31337 |
| **RAT** (Remote Access Trojan) | Remote control of victim | DarkComet, NjRAT |
| **Botnet / zombie** | Compromised host enrolled in attacker's network | Mirai, Emotet |
| **Cryptominer / cryptojacker** | Steals CPU/GPU to mine crypto | Coinhive |
| **Fileless malware** | Lives in memory/registry only; no disk file | PowerShell-only attacks |
| **Wiper** | Destroys data (doesn't ransom) | NotPetya, Shamoon |
| **Stalkerware** | Consumer-grade spyware for partner surveillance | mSpy |

### 🚨 Virus vs Worm vs Trojan, the #1 confused trio

| | Self-replicates? | Needs user? | Disguised? |
|---|---|---|---|
| Virus | ✅ | ✅ | sometimes |
| Worm | ✅ | ❌ | usually no |
| Trojan | ❌ | ✅ (to install) | ✅, that's the whole point |

---

## 🕷️ OWASP Top 10 (Web App Vulnerabilities)

The **OWASP Top 10** is a periodic consensus list of the most critical web-application security risks, maintained by the **Open Worldwide Application Security Project** (founded by Mark Curphey, 2001; the first Top 10 was published 2003). The current edition is **OWASP Top 10:2021**, the next refresh is expected late 2025/2026. Sec+ references this list (don't memorize all 10 in order, but know the heavy-hitters):

1. **A01 Broken Access Control**, IDOR (`?user_id=42`), missing authorization checks
2. **A02 Cryptographic Failures**, weak ciphers, no HTTPS, hardcoded keys
3. **A03 Injection**, SQL injection, command injection, LDAP injection
4. **A04 Insecure Design**, security wasn't considered during design
5. **A05 Security Misconfiguration**, default creds, verbose error messages
6. **A06 Vulnerable & Outdated Components**, running EOL library, Log4Shell
7. **A07 Identification & Authentication Failures**, weak auth, session fixation
8. **A08 Software & Data Integrity Failures**, unsigned updates, supply chain
9. **A09 Security Logging & Monitoring Failures**, can't detect breach
10. **A10 SSRF**, Server-Side Request Forgery (attacker makes server send requests)

### Web attacks worth knowing in detail

- **SQL Injection (SQLi)**, attacker injects SQL into a parameter; classic: `' OR 1=1 --`. **Fix:** parameterized queries / prepared statements.
- **XSS (Cross-Site Scripting)**, attacker injects JavaScript that runs in OTHER users' browsers.
  - **Stored XSS**, script saved on server (e.g., in a forum post), runs for every viewer
  - **Reflected XSS**, script in URL, runs when victim clicks the link
  - **DOM-based XSS**, entirely client-side via DOM manipulation
  - **Fix:** Output encoding + CSP + input validation
- **CSRF / XSRF (Cross-Site Request Forgery)**, victim's authenticated browser is tricked into making a request to a site. **Fix:** CSRF tokens, SameSite cookies.
- **SSRF (Server-Side Request Forgery)**, attacker makes the *server* fetch a URL on their behalf (often hits internal-only IPs like cloud metadata `169.254.169.254`).
- **Directory traversal** `../../etc/passwd` escape the web root.
- **Command injection**, input flows into a shell call (`ping ; rm -rf /`).
- **LDAP / XML / NoSQL injection**, same idea, different sub-language.
- **Race condition / TOCTOU** Time-Of-Check-vs-Time-Of-Use value changes between when checked and when used.
- **Open redirect**, `?next=https://evil.com` used in phishing.

### Memory & application vulnerabilities

- **Buffer overflow**, write past buffer bounds; classic exploitation vector
- **Stack vs heap overflow**, different memory regions
- **Integer overflow**, int wraps around past max
- **Memory injection**, inject code into another process's memory space (DLL injection)
- **Privilege escalation**, get higher rights than originally granted (vertical) or another user's rights (horizontal)
- **Use-after-free**, reference memory after it's been freed
- **Format string vulnerability**, `%s%s%s%s` exploits

---

## 🌐 Network Attacks

### Denial of Service / DDoS

| Type | How |
|------|-----|
| **Volumetric DDoS** | Saturate bandwidth (UDP floods, ICMP floods) |
| **Protocol attack** | Exhaust state tables (SYN flood) |
| **Amplification / Reflection** | Spoof source IP; small request → huge response from public servers (DNS amplification, NTP, memcached) |
| **Application-layer DDoS (L7)** | Expensive HTTPS requests, exhaust app workers (Slowloris) |
| **DDoS** vs **DoS** | DDoS = distributed (botnet); DoS = single source |

### Network protocol attacks

- **DNS poisoning / spoofing**, fake DNS answers redirect traffic (`bank.com → evil IP`)
- **DNS hijacking**, change DNS records at the registrar or resolver
- **ARP poisoning / spoofing**, fake ARP replies; lets attacker MITM on a LAN
- **MAC flooding**, overflow switch CAM table → switch falls back to hub mode (broadcasts everything)
- **MAC cloning**, copy a known-good MAC to bypass port security
- **VLAN hopping**, double-tagging or switch spoofing to jump VLANs
- **STP attacks**, claim to be root bridge → redirect traffic
- **Replay attack**, capture a valid auth/transaction, replay later
- **On-path attack** (Sec+'s renamed "Man-in-the-Middle"), attacker sits between client and server, intercepting/altering traffic
- **DHCP starvation / rogue DHCP**, attacker exhausts pool or hands out malicious config

### Wireless attacks

- **Rogue AP**, unauthorized AP plugged into corp network (often by well-meaning employee)
- **Evil twin**, attacker's AP impersonates legit SSID at a stronger signal
- **Disassociation attack**, send forged frames kicking clients off the network (forces reconnect, opens credential theft window)
- **Jamming**, RF interference attack
- **Bluejacking**, sending unsolicited Bluetooth messages
- **Bluesnarfing**, stealing data via Bluetooth
- **Bluebugging**, controlling a device via Bluetooth
- **WPS attacks**, brute-forcing the 8-digit WPS PIN
- **War driving / war flying**, scanning for vulnerable Wi-Fi from a car / drone

---

## 🔑 Credential & Authentication Attacks

| Attack | How | Defense |
|--------|-----|---------|
| **Brute force** | Try every combination | Account lockout, rate-limit, long passwords |
| **Dictionary attack** | Try common passwords + word lists | Same + ban common passwords |
| **Password spraying** | Try **one common password** against MANY accounts (avoids lockout) | MFA, alerting on auth failures across accounts |
| **Credential stuffing** | Reuse creds from another breach | MFA, unique passwords (mgr), have-i-been-pwned monitoring |
| **Rainbow tables** | Pre-computed hash → plaintext lookup | Salt the hash |
| **Pass-the-Hash (PtH)** | Use stolen NTLM hash directly (no need to crack) | Disable NTLM, LSA Protection, Credential Guard |
| **Pass-the-Ticket (PtT)** | Use stolen Kerberos ticket | Short ticket lifetimes, monitoring |
| **Kerberoasting** | Request service tickets for SPN accounts, crack offline | Strong service-account passwords, gMSA |
| **AS-REP roasting** | Targets accounts with Kerberos pre-auth disabled | Require pre-auth |
| **Golden / Silver Ticket** | Forged Kerberos tickets after KRBTGT compromise | KRBTGT rotation, monitoring |
| **Phishing for creds** | Trick user into typing into fake login | MFA + user training + DMARC |
| **Keylogger** | Capture keystrokes | EDR, anti-malware |
| **Session hijacking** | Steal session cookie/token | HTTPS, Secure+HttpOnly cookies, short sessions |

---

## 🧠 Social Engineering, The Human Layer

The #1 root cause of breaches. Sec+ tests **lots** of subcategories.

| Attack | Channel | What |
|--------|---------|------|
| **Phishing** | Email | Mass; trick user into clicking, opening, or entering creds |
| **Spear phishing** | Email | Targeted at a specific individual/team |
| **Whaling** | Email | Targets executives ("the big fish") |
| **Vishing** | Phone | Voice phishing (often spoofed Caller ID) |
| **Smishing** | SMS | Text-message phishing |
| **BEC** (Business Email Compromise) | Email | Impersonate executive/vendor, request wire/gift cards |
| **Pretexting** | Any | Fake backstory to gain trust ("I'm from IT, need your password to fix...") |
| **Watering hole** | Web | Compromise a site the target group visits |
| **Typosquatting** | Web/DNS | Register `goggle.com`, `microsft.com`, capture mistyped traffic |
| **Brand impersonation** | Email/web | Lookalike domain + logos |
| **Pharming** | DNS | Redirect at DNS level even when URL is correct |
| **Tailgating / Piggybacking** | Physical | Follow an authorized person through a door |
| **Shoulder surfing** | Physical | Watch keystrokes/screen |
| **Dumpster diving** | Physical | Steal paper/disks from trash |
| **Quid pro quo** | Any | "Free gift card if you log in here" |
| **Baiting** | Physical | Leave USB labeled "Q4 layoffs" in lobby |
| **Hoax / scareware** | Any | "Your computer is infected, call this number!" |
| **Misinformation / Disinformation** | Any | Manipulate decisions via fake info (deepfakes etc.) |
| **Influence campaigns** | Social media | Coordinated narrative manipulation (state-sponsored) |

### Why social engineering works (the psychology Sec+ tests)
| Principle | Example |
|-----------|---------|
| **Authority** | "I'm the CEO" / fake IT badge |
| **Urgency** | "Wire this in the next hour or we lose the deal" |
| **Scarcity** | "Only 5 spots left" |
| **Social proof** | "Everyone in HR is doing this training" |
| **Familiarity / Liking** | Mimicking a coworker's tone |
| **Trust** | Established relationship (a real vendor, now compromised) |
| **Fear / Intimidation** | "Your account will be terminated if you don't..." |

---

## 🖥️ Physical & Hardware Attacks

- **RFID cloning**, copying badge data
- **Skimming**, credit card readers harvesting card+PIN
- **Card cloning**, duplicate magstripes; chip-and-PIN largely defeats this
- **Tampering**, physical modification of a device
- **Environmental attacks**, HVAC manipulation, power surges
- **Cold-boot attack**, extract keys from RAM after powerdown using cold spray

---

## 💉 Indicators of Common Attacks (PBQ tells)

Knowing the **tell** is what makes scenario questions trivial:

| Tell | Likely attack |
|------|---------------|
| `' OR 1=1 --` in web logs | SQL injection |
| `<script>` in URL or form input | XSS |
| Hundreds of `..\..\` in request paths | Directory traversal |
| Single password tried against 5,000 usernames | Password spraying |
| 100,000 attempts on one username in 60 sec | Brute force |
| Failed logins across many accounts each with a unique pwd | Credential stuffing |
| Outbound to `169.254.169.254` from web app | SSRF (cloud metadata theft) |
| Spike in DNS queries to random subdomains | DNS tunneling / exfil |
| Sudden process spawning `powershell -enc ...` | Fileless malware / living-off-the-land |
| File extensions encrypted to `.locked` / `.crypt` | Ransomware |
| WMI / scheduled-task creation by unusual user | Persistence (likely after compromise) |
| HTTP 200 to `wp-login.php?action=...` from many IPs | WordPress brute force |

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** A SOC analyst sees the following web-server log lines:
> ```
> POST /api/login user=admin&pass=Summer2024
> POST /api/login user=jdoe &pass=Summer2024
> POST /api/login user=msmith&pass=Summer2024
> ... (5,000 distinct usernames, single password, distributed across 800 IPs)
> ```
> What attack is this and what's the BEST mitigation?

**Walkthrough:**
1. **Pattern recognition:** One password tested against many usernames → **password spraying** (not brute force, which would hammer one user).
2. **Why it works:** Most lockout policies trigger on N failures per *user*; spraying never exceeds the threshold per user.
3. **Distribution across 800 IPs** → coordinated, likely botnet to evade IP-rate-limit.
4. **Mitigations (best-first):**
   - **MFA**, even if a password works, MFA blocks
   - **Risk-based / impossible-travel detection**, Conditional Access
   - **Common-password ban**, `Summer2024` is on every spraying wordlist
   - **Alert on aggregate failure rate**, not just per-user
   - **CAPTCHA / device fingerprinting** at the API gateway

A PBQ might show 4 log snippets, drag each to its attack name.

---

## 📊 Case Study, Log4Shell (CVE-2021-44228, December 2021)

**Situation.** **Apache Log4j 2** is a Java logging library embedded in roughly **2.5 billion** devices and applications worldwide every Java enterprise stack, every major SaaS, half the Fortune 500's middleware, Minecraft servers, iCloud, Apple's enterprise infrastructure, AWS, Steam, Tesla, government systems. Logging libraries are *boring infrastructure* invisible to most developers and absent from most threat models. In 2013 Log4j had added a feature for "**lookups**," including JNDI (Java Naming and Directory Interface) lookups that let log strings resolve to remote LDAP/DNS objects at log time, a reasonable feature for a 2013 enterprise SOA world, dangerous in any modern context.

**Decision.** On **24 November 2021** an Alibaba security researcher (Chen Zhaojun) responsibly disclosed the flaw later assigned **CVE-2021-44228**, CVSS **10.0** (max) to the Apache Software Foundation. Apache developers (all volunteers) began drafting a patch. On **9 December 2021** before the official disclosure, a **proof-of-concept exploit** appeared in a Chinese Minecraft modder's tweet. Within hours, the PoC was confirmed: an attacker who could control *any string that ends up logged* a User-Agent header, an HTTP URL, a chat message, an iPhone device name (which iCloud logged) could trigger Log4j to fetch and execute remote Java code. The official Apache disclosure came **10 December 2021** with patch 2.15.0. The patch itself was incomplete, leading to **CVE-2021-45046** (a related flaw) on 14 December and **CVE-2021-44832** on 28 December. Three patches in 18 days.

**Outcome.** Within **72 hours** of public disclosure, Microsoft's threat-intel team observed **state actors from China, Iran, North Korea, and Turkey** weaponizing Log4Shell. By 17 December, the **Belgian Ministry of Defense** disclosed it had been breached via Log4Shell. **CISA Director Jen Easterly** called it "one of the most serious vulnerabilities I've seen in my entire career" (Senate testimony, 4 February 2022). CISA added Log4Shell to the **KEV catalog** the same day as disclosure and issued **Emergency Directive 22-02** ordering all federal civilian agencies to inventory and patch within days. Over the following weeks, CISA tracked exploitation against the **US Department of Defense**, **Belgian Ministry**, **Iran-linked attacks on a US federal civilian agency** (later confirmed February 2022), and tens of thousands of commercial systems. The cleanup tail was *years*, as late as 2024 Log4Shell still ranked in the top exploited CVEs because of the long tail of embedded systems, vendor appliances, and air-gapped industrial systems with no upgrade path. The US **Cyber Safety Review Board** published its first-ever report on Log4Shell (July 2022) and recommended sweeping changes to open-source funding, SBOM mandates (codified in Executive Order 14028), and mandatory vendor coordinated-disclosure programs.

**Lesson for the exam / for practitioners.** Log4Shell is the canonical 2020s example of nearly every Module 5 concept:

- **CVE / CVSS / KEV / EPSS** all crystallized around this incident. CVSS 10.0; KEV listing within hours; EPSS top-10 for years. The exam tests these scoring systems practice by ranking patches with Log4Shell-style "10 CVSS, 95% EPSS, on KEV" against an internal SQLi (8.0, 5% EPSS, not on KEV but on your customer-facing app) Log4Shell wins prioritization every time.
- **Insecure design + Vulnerable & outdated components** (OWASP A04 + A06). Log4j's JNDI-lookup feature was a 2013 design that became a 2021 RCE. A06 "Vulnerable & Outdated Components" exists *because* of this exact pattern. Software Composition Analysis (SCA, Module 10) flags this kind of risk.
- **Defense-in-depth as the only practical mitigation** during the patch lag. WAF rules to block `${jndi:` strings, egress filtering to block outbound LDAP/RMI from servers, removal of the `JndiLookup.class` from running JARs as a hot-patch, none was a complete fix, but layered, they bought time until proper patches were deployed.
- **Supply chain transparency.** Software Bill of Materials (**SBOM**) became mandatory for US federal software because of Log4Shell (EO 14028, May 2021, codified via NIST SP 800-218 SSDF). Without an SBOM, you couldn't even *answer* the question "do we use Log4j?", Module 10 covers SBOMs in depth.
- **The patch-was-incomplete pattern.** Three CVEs in 18 days. The exam tests patch-management discipline (Module 7/8): the right answer to "we patched, are we safe?" is *re-scan* and *verify*, not assume.

**Discussion (Socratic).**
- **Q1:** Log4j was maintained by ~5 volunteer developers, supported by ~$2,500/year in donations (similar to OpenSSL pre-Heartbleed). The Apache Software Foundation has hundreds of similar projects with similar exposure. If you had $50M as a CISO-funded "critical open source" budget, how would you allocate it? Among: paid maintainers, formal-verification tooling, alternative implementations of critical functionality (so single bugs don't take out 60% of the internet), vendor liability frameworks, university research grants? Defend your allocation against a "the market should solve this" objection.
- **Q2:** When the PoC dropped before the patch (9 December), Apache was effectively forced to release the patch a day early, incompletely. Should *responsible disclosure* timelines be shortened to prevent this race, or lengthened? Argue both sides referencing CERT/CC's 45-day default vs Google Project Zero's 90+30 day policy.
- **Q3:** Internal applications running pre-2015 versions of Log4j on air-gapped industrial systems may *never* be patched. Are these systems "vulnerable" in any meaningful sense? Defend a position on whether the *compensating control* (air-gap, segmentation, monitoring) is materially equivalent to patching, with reference to the NIST SP 800-82 (ICS Security) guidance covered in Module 7.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Brute force and dictionary attacks are the same" | Dictionary uses likely words; brute force tries everything |
| "MITM is now called something else on Sec+" | Yes, **on-path attack**. Same concept. |
| "XSS attacks the server" | XSS attacks OTHER USERS via the server. The server reflects/stores attacker JS. |
| "SQLi can be fixed with input filtering" | Filtering helps; **parameterized queries** are the real fix |
| "Ransomware always exfiltrates" | Old-style only encrypts; **modern (double-extortion)** exfiltrates AND encrypts |
| "All zero-days are exotic" | Many "0-days" are just unpatched-for-a-week vulnerabilities being weaponized fast |
| "Phishing-resistant MFA stops everything" | Doesn't stop session-cookie theft from a compromised browser; defense in depth still required |
| "Whaling = spear phishing" | Whaling is spear phishing **of executives** specifically |
| "Worms need a host file" | NO, that's viruses. Worms self-spread network-to-network. |
| "Bluetooth attacks are extinct" | Bluetooth-LE attacks (bluejacking/snarfing/bugging) are still tested |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Virus / worm / Trojan / RAT** | Malware families (see table) |
| **Ransomware / wiper / logic bomb** | Destructive malware variants |
| **Rootkit / bootkit** | Stealth malware in OS/firmware |
| **Fileless malware** | Memory/registry-only |
| **OWASP Top 10** | Web vuln list |
| **SQLi / XSS (stored/reflected/DOM) / CSRF / SSRF** | Injection & forgery attacks |
| **Directory traversal** | `../` to escape web root |
| **Buffer overflow / integer overflow / TOCTOU** | Memory/race vulns |
| **Privilege escalation (vertical/horizontal)** | Gaining rights |
| **DDoS / amplification / reflection** | Bandwidth/protocol exhaustion |
| **DNS / ARP poisoning** | Identity-of-host attacks |
| **On-path (MITM)** | Attacker between client and server |
| **Replay attack** | Re-use of captured legitimate traffic |
| **Rogue AP / Evil twin / Disassociation / Jamming** | Wireless attacks |
| **Bluejacking / snarfing / bugging** | Bluetooth attacks |
| **Brute force / dictionary / spraying / stuffing / rainbow** | Credential attacks |
| **Pass-the-Hash / Kerberoasting / Golden Ticket** | Credential abuse in Windows AD |
| **Phishing / spear / whaling / vishing / smishing / BEC** | Social engineering channels |
| **Pretexting / watering hole / typosquatting / tailgating** | Other social engineering |

### Acronyms cheat-row (Module 5)
| Acronym | Meaning |
|---------|---------|
| OWASP | Open Web Application Security Project |
| SQLi / XSS / CSRF / SSRF | Web vulns |
| TOCTOU | Time-Of-Check-vs-Time-Of-Use (race condition) |
| RCE | Remote Code Execution |
| LFI / RFI | Local / Remote File Inclusion |
| DoS / DDoS | (Distributed) Denial of Service |
| ARP / DNS | Protocol attack targets |
| MITM / MITB | Man-In-The-Middle / Man-In-The-Browser (Sec+ uses "on-path") |
| PtH / PtT | Pass-the-Hash / Pass-the-Ticket |
| BEC | Business Email Compromise |
| RAT | Remote Access Trojan |
| C2 / C&C | Command & Control |
| IOC / IOA | Indicator of Compromise / Attack |
| RaaS | Ransomware-as-a-Service |
| WPS / WEP / WPA2/3 | Wireless protocols/standards |
| RFID / NFC | Radio-frequency ID / Near-Field Comms |

---

## ✅ Module 5 Summary

You now know:

- 🦠 The full **malware taxonomy** + the virus/worm/Trojan distinguisher
- 🕷️ **OWASP Top 10** at a glance + deep on SQLi, XSS, CSRF, SSRF, traversal
- 🧬 **Memory/app** vulnerabilities, buffer overflow, race conditions, privilege escalation
- 🌐 **Network attacks**, DDoS families, DNS/ARP poisoning, on-path, wireless
- 🔑 **Credential attacks**, brute vs dictionary vs spraying vs stuffing; PtH/Kerberoasting
- 🧠 **Social engineering** + the 7 psychological principles
- 💉 The **tells** that map log evidence to attack name

**Next steps:**
1. 🎥 [Videos.md](./Videos.md), John Hammond's attack demos make this concrete
2. ✏️ [Quiz.md](./Quiz.md), 28 questions, the toughest yet
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md), best one to print
4. 🧪 You're now ready for **[Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)** (after Modules 1–5)
5. ➡️ [Module 6, Network Security](../Module-06-Network-Security/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Network-Security/Reading.md) covers WAFs, IDS/IPS, segmentation the network-layer defenses against these attacks; [Module 8](../Module-08-Security-Operations/Reading.md) covers SIEM detection rules for the IOCs/IOAs in this module; [Module 10](../Module-10-Application-Data-Security/Reading.md) covers SAST/DAST/SCA *prevention* of these vulns at build time.
> - Cross-course: AWS Solutions Architect (course 04) covers AWS WAF and GuardDuty.
> - Practice: Practice Exam 1 has ~12 questions from this module (the largest single source); Final Mock has ~15.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📖 [OWASP Top 10 2021](https://owasp.org/Top10/) read each category page; next refresh expected 2025-2026.
- 📄 OWASP API Security Top 10 (2023 edition), increasingly tested as APIs eclipse traditional web apps.
- 📄 Stuttard, D. & Pinto, M. (2011). *The Web Application Hacker's Handbook* (2nd ed.). Wiley. ISBN 978-1118026472. (The canonical web-attack textbook, still the field reference despite age.)
- 📄 OWASP ASVS (Application Security Verification Standard) v4.0.3, 2021.

**Case-study sources (Log4Shell):**
- 📄 Apache Software Foundation (2021). *Apache Log4j Security Vulnerabilities* page, list of CVE-2021-44228, -45046, -45105, -44832.
- 📄 US Cyber Safety Review Board (2022). *Review of the December 2021 Log4j Event*. (Free, ~50 pp. The definitive after-action.)
- 📄 CISA (2021-2022). [*Apache Log4j Vulnerability Guidance*](https://www.cisa.gov/news-events/news/apache-log4j-vulnerability-guidance). Ongoing.

**Practitioner labs / hands-on:**
- 📖 [PortSwigger Web Security Academy](https://portswigger.net/web-security), free hands-on web vuln labs (the best free training resource for SQLi/XSS/CSRF/SSRF)
- 📖 [MITRE ATT&CK Techniques](https://attack.mitre.org/techniques/enterprise/)
- 📖 [HackTricks](https://book.hacktricks.xyz/), practitioner attack playbook (free)
- 📖 [Verizon DBIR, Patterns chapter](https://www.verizon.com/business/resources/reports/dbir/)
- 📖 [CISA Stop Ransomware guide](https://www.cisa.gov/stopransomware)
