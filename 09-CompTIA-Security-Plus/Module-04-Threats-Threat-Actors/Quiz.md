# ✏️ Module 4 Quiz: Threats & Threat Actors

> **Instructions:** 25 questions, no notes. Aim for 21/25.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 5 (20%) · Understand 7 (28%) · Apply 7 (28%) · Analyze/Evaluate 5 (20%) · Create 1 (4%).

---

## Questions

### Q1. An attacker spent 18 months silently inside a defense contractor's network exfiltrating weapons-system designs. Which actor BEST fits? *(Apply)*
A. Script kiddie
B. Hacktivist
C. Nation-state (APT)
D. Disgruntled employee

---

### Q2. A teenager runs a publicly available exploit script against random IP ranges hoping to land on a vulnerable system. The MOST appropriate classification is: *(Apply)*
A. APT
B. Unskilled attacker (script kiddie)
C. Organized crime
D. Insider threat

---

### Q3. A ransomware crew encrypts a hospital's systems and demands Bitcoin. Their PRIMARY motivation is: *(Apply)*
A. Espionage
B. Philosophical
C. Financial
D. Revenge

---

### Q4. A laid-off sysadmin uses still-valid credentials to delete production data on their way out. This is: *(Apply)*
A. APT
B. Insider threat (malicious)
C. Supply-chain attack
D. Hacktivist

---

### Q5. An employee uploads sensitive files to a personal Dropbox to "work from home easier," with no malicious intent. This is BEST described as: *(Analyze)*
A. Insider threat (negligent)
B. APT
C. Shadow IT
D. Both A and C are reasonable

---

### Q6. Anonymous defaces a government website with a political message. Primary motivation? *(Apply)*
A. Financial
B. Philosophical / political
C. Espionage
D. Revenge

---

### Q7. The SolarWinds attack is most accurately described as: *(Analyze)*
A. Phishing
B. Watering hole
C. Supply-chain attack
D. DDoS

---

### Q8. Which threat vector is BEST mitigated by USB port control + endpoint policy? *(Analyze)*
A. Email phishing
B. Removable media
C. Default credentials
D. Open service ports

---

### Q9. A casino's smart fish-tank thermometer was used to pivot into the network. This illustrates risk from: *(Apply)*
A. Patch lag on a critical server
B. Default creds / unsupported IoT
C. Insider threat
D. Vendor email compromise

---

### Q10. Which threat intelligence source is FREE and government-curated for U.S. organizations? *(Remember)*
A. Recorded Future
B. CrowdStrike Intelligence
C. CISA AIS
D. VirusTotal Enterprise

---

### Q11. ISACs (Information Sharing and Analysis Centers) are organized PRIMARILY by: *(Remember)*
A. Geographic region
B. Industry sector (finance, health, energy, etc.)
C. Operating system used
D. Cloud provider

---

### Q12. STIX/TAXII is BEST described as: *(Understand)*
A. A specific commercial threat feed
B. Standards for structured cyber-intel sharing
C. An incident response framework
D. A regulatory requirement

---

### Q13. The MITRE ATT&CK framework catalogs: *(Remember)*
A. Compliance controls
B. Adversary tactics, techniques, and procedures (TTPs)
C. Encryption algorithms
D. Risk assessment methodologies

---

### Q14. Which describes an Indicator of COMPROMISE (IOC)? *(Understand)*
A. A regulation requiring breach disclosure
B. A specific artifact (IP, hash, domain) suggesting a system is/was compromised
C. A control that prevents future attacks
D. A vendor SLA

---

### Q15. The DIFFERENCE between an IOC and an IOA is: *(Analyze)*
A. IOAs detect attacks in progress; IOCs identify post-compromise artifacts
B. IOAs are open source; IOCs are commercial
C. They are synonyms
D. IOCs are only used by APTs

---

### Q16. An attacker buys "admin@example.com" credentials for $20 on a marketplace forum. The credentials originated from: *(Understand)*
A. OSINT
B. Dark web
C. STIX feed
D. ISAC

---

### Q17. A vendor pushes a malicious update through their legitimate update server. This is a: *(Understand)*
A. Phishing attack
B. Supply-chain attack
C. Insider threat
D. DDoS attack

---

### Q18. Which is NOT typically classified as a threat vector on Sec+? *(Understand)*
A. Email
B. Removable media
C. Encryption algorithm choice
D. Open service ports

---

### Q19. A "smishing" attack arrives via: *(Remember)*
A. Email
B. SMS / text message
C. Phone call
D. Removable USB

---

### Q20. A vishing attack arrives via: *(Remember)*
A. Email
B. SMS
C. Voice call
D. Bluetooth

---

### Q21. The PRIMARY risk of Shadow IT is: *(Understand)*
A. Always malicious intent
B. Loss of visibility, control, and policy enforcement
C. Higher licensing cost
D. Network slowdown

---

### Q22. A new IoT device ships with username "admin" and password "admin." The MOST applicable vector category is: *(Apply)*
A. Phishing
B. Default credentials
C. Open service ports
D. Insider threat

---

### Q23 (Scenario). Your SOC sees outbound connections from an internal host to an IP that VirusTotal flags as C2 for a known APT family. Which control is MOST useful for verifying this is a real compromise vs a false positive? *(Evaluate)*
A. Update the AUP
B. Run a full forensic image and examine memory + process tree on the host
C. Block all internet traffic
D. Reformat the host immediately

---

### Q24 (Scenario). A bank's vendor email portal sees a series of wire-transfer requests at 3 a.m. from the "CFO" to a new vendor. Sender domain looks like the CFO's. The MOST likely actor + motivation pair: *(Analyze)*
A. Hacktivist / philosophical
B. Organized crime / financial (BEC)
C. APT / espionage
D. Insider threat / revenge

---

### Q25 (Scenario). A pen-tester finds your perimeter exposes RDP (3389), SMB (445), and a Redis instance with no auth. Which threat vector category is in play? *(Create)*

> *Create-level note:* this is best treated as a vulnerability-management triage exercise — you must integrate vector identification with remediation recommendation. (See PE-1 Q45 for the deeper variant.)
A. Email-based
B. Open service ports
C. Removable media
D. Supply chain

---

## 🎯 Answers + Explanations

### Q1: **C. Nation-state (APT)**
Long persistence, theft of classified IP, defense target = textbook APT.

### Q2: **B. Unskilled attacker**
Pre-built tool, no specific target, low sophistication.

### Q3: **C. Financial**
Ransomware = pay or lose access. Financial gain motivation, organized-crime actor.

### Q4: **B. Insider threat (malicious)**
Authorized credentials + intent to harm = malicious insider.

### Q5: **D. Both A and C are reasonable**
Negligent insider (because they exfiltrate data, even without malicious intent) AND shadow IT (unsanctioned tool). Sec+ accepts both framings; "negligent insider" is the more precise risk label.

### Q6: **B. Philosophical / political**
Hacktivism = ideology-driven.

### Q7: **C. Supply-chain attack**
Compromised Orion update channel → all customers receive trojanized update.

### Q8: **B. Removable media**
USB port control / endpoint device control specifically addresses removable-media vectors.

### Q9: **B. Default creds / unsupported IoT**
Smart-thermometer = IoT with default creds or weak network segmentation. The fish-tank story is the classic example.

### Q10: **C. CISA AIS**
Automated Indicator Sharing — free, US govt-curated.

### Q11: **B. Industry sector**
FS-ISAC (financial), H-ISAC (health), MS-ISAC (state/local govt), etc.

### Q12: **B. Standards for structured cyber-intel sharing**
STIX = data format. TAXII = transport. Used by many feeds.

### Q13: **B. Adversary TTPs**
Tactics, Techniques, and Procedures catalog.

### Q14: **B. A specific artifact suggesting compromise**
File hash, IP, domain, registry key, etc.

### Q15: **A. IOAs detect attacks in progress**
IOAs are behavioral and forward-looking; IOCs are artifacts and backward-looking.

### Q16: **B. Dark web**
Stolen credential marketplaces live primarily on dark-web forums.

### Q17: **B. Supply-chain attack**
Malicious code propagates through trusted vendor update.

### Q18: **C. Encryption algorithm choice**
That's a control selection, not a vector. A, B, D are listed Sec+ vectors.

### Q19: **B. SMS**
Smishing = SMS phishing.

### Q20: **C. Voice call**
Vishing = voice phishing.

### Q21: **B. Loss of visibility, control, policy enforcement**
Shadow IT is rarely malicious; it's invisible to security and outside policy.

### Q22: **B. Default credentials**
The "admin/admin" shipping config is the textbook default-credential vector. Mirai botnet exploited this at scale.

### Q23: **B. Forensic image + memory + process tree**
Confirm or refute via the host's state. Updating policy or reformatting doesn't verify. Blocking traffic is mitigation, not verification.

### Q24: **B. Organized crime / financial (BEC)**
Business Email Compromise = financial motivation, organized crime / fraudster actor. APTs rarely steal money this way; hacktivists deface.

### Q25: **B. Open service ports**
RDP, SMB, exposed Redis = unprotected services reachable from the internet.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Threat fluency on lock.
- 21–23/25 → ✅ Good. Hit the misses, then move on.
- 17–20/25 → ⚠️ Re-review the actor matrix + vectors section.
- <17/25 → 🔁 Restart Module 4.

---

## 🃏 Add To Your Flashcards

- Each actor type with skill / resource / motivation
- Each motivation with example
- Each vector category with example
- IOC vs IOA vs TTP
- ISAC, STIX/TAXII, AIS, MITRE ATT&CK definitions

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5 — Vulnerabilities & Attacks](../Module-05-Vulnerabilities-Attacks/Reading.md)
