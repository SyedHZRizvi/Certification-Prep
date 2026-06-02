# 🧪 Practice Exam 2 — CompTIA Security+ (SY0-701 Style)

> **Conditions:** Set a 70-minute timer. 70 questions. Closed book.
> **Pass mark:** 58/70 (~83%)
> Take this AFTER finishing all 10 modules. Includes all 5 domains.

---

## 📝 Questions

### 1. The 5 Sec+ authentication factors include all EXCEPT:
A. Something you remember
B. Something you have
C. Somewhere you are
D. Something you know

### 2. A SIEM provides primarily:
A. Patching automation
B. Firewall rule management
C. Log aggregation + correlation + alerting
D. Encryption at rest

### 3. SOAR primarily adds:
A. More log storage
B. Orchestration + automated response via playbooks
C. Replaces SIEM
D. Replaces EDR

### 4. The CORRECT NIST IR phase order is:
A. Detect → Prep → Contain → Eradicate → Recover → Lessons
B. Prep → Detection → Containment → Eradication → Recovery → Lessons
C. Prep → Contain → Detect → Eradicate → Lessons → Recover
D. Lessons → Detect → Contain → Recover → Eradicate → Prep

### 5. Order of volatility — MOST volatile first:
A. Cache/registers → RAM → temp/swap → disk → remote → physical
B. Disk → RAM → cache → registers
C. Disk → swap → RAM → registers
D. Remote → disk → RAM → CPU

### 6. CVSS scores range from:
A. 0 to 5
B. 0 to 10
C. 1 to 100
D. -10 to 10

### 7. EPSS provides:
A. Probability of exploitation in the wild
B. Patch availability
C. CVE category
D. Vendor advisory link

### 8. CISA's KEV catalog lists:
A. All known CVEs
B. Compliance violations
C. Actively exploited vulns (patch FIRST)
D. Encryption deprecations

### 9. A credentialed vulnerability scan differs because it:
A. Logs in to see actual configs and installed packages
B. Is illegal
C. Uses public IPs only
D. Skips encrypted services

### 10. NetFlow / sFlow / IPFIX provide:
A. Connection metadata (5-tuple, byte counts)
B. Full packet payloads
C. Vulnerability assessments
D. PKI revocation lists

### 11. PCAP files are LARGER than flow data because:
A. They include payload contents
B. They are uncompressed text
C. They include encryption overhead
D. They have more metadata

### 12. The HIPAA-required contract with a vendor handling PHI is:
A. SLA
B. BAA
C. MOU
D. DPA

### 13. The GDPR-required contract with a processor of personal data is:
A. SLA
B. BAA
C. ISA
D. DPA

### 14. An MSA is best described as:
A. Project scope under a master contract
B. Performance SLA
C. Non-binding intent
D. Umbrella contract for an ongoing vendor relationship

### 15. A SOW is:
A. Umbrella contract
B. Performance metrics
C. Non-disclosure
D. Project-specific scope and deliverables under an MSA

### 16. SLE × ARO equals:
A. EF
B. AV
C. ROI
D. ALE

### 17. An asset valued at $500k loses 20% per incident; expected 1.5 incidents/year. ALE = ?
A. $50,000
B. $100,000
C. $250,000
D. $150,000

### 18. NIST CSF (v1) five functions are:
A. Identify, Protect, Detect, Respond, Recover
B. Plan, Build, Run, Operate, Improve
C. Deter, Defeat, Detect, Defend, Destroy
D. Govern, Audit, Comply, Adapt, Recover

### 19. Hot site vs Warm site difference is primarily:
A. Real-time data sync (hot) vs periodic sync (warm)
B. Location
C. Operating system
D. Vendor

### 20. The 3-2-1 backup rule means:
A. 3 copies, 2 different media, 1 off-site
B. 3 backups, 2 admins, 1 vault
C. 3 generations, 2 tools, 1 audit
D. 3 days, 2 weeks, 1 month retention

### 21. RTO refers to:
A. Maximum acceptable data loss
B. Backup retention period
C. Mean time between failures
D. Maximum acceptable downtime

### 22. RPO refers to:
A. Maximum acceptable DATA loss (in time)
B. Maximum acceptable downtime
C. Mean time to repair
D. Throughput

### 23. SAST analyzes:
A. Running application
B. Source code / compiled binaries statically
C. Network packets
D. Hardware tokens

### 24. DAST analyzes:
A. Source code
B. The running app from the outside
C. Compiled binaries only
D. Dependencies

### 25. SCA finds:
A. Known-vulnerable dependencies
B. Custom-code injection
C. IDS alerts
D. Phishing emails

### 26. An SBOM is required by:
A. PCI-DSS
B. US Executive Order 14028 for federal software
C. HIPAA
D. ISO 27001

### 27. Confidential computing protects which data state?
A. At rest
B. In transit
C. Archived
D. In use

### 28. Tokenization differs from encryption because:
A. Tokens are slower
B. Tokens are stronger
C. Tokens use AES
D. Tokens are reversible without a key — via a vault lookup, with no mathematical relation between token and original

### 29. Under GDPR, "anonymization" means data:
A. Was encrypted with AES-256
B. Cannot be re-identified by reasonable means → GDPR no longer applies
C. Was pseudonymized
D. Was stored in the EU

### 30. Pseudonymization vs anonymization (GDPR):
A. Same thing
B. Pseudonymization is stronger
C. Pseudonymization is reversible with mapping; GDPR still applies. Anonymization is irreversible.
D. Anonymization uses HMAC

### 31. STRIDE includes:
A. Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation
B. Speed, Trust, Robustness, Integrity, Data, Encryption
C. Spoofing, Timing, Race, Integrity, Encryption, Data
D. Standards, Tech, Risk, Identity, DoS, Eradication

### 32. The MOST appropriate location for application secrets is:
A. Hardcoded in source code
B. Secrets manager (Vault, AWS SM, Azure Key Vault) with short-lived creds
C. Config file checked into the repo
D. Shared in a chat channel

### 33. PHI is regulated by:
A. GLBA
B. PCI-DSS
C. HIPAA
D. CCPA

### 34. Data "sovereignty" means:
A. Data is subject to the laws of the country where it resides
B. The customer owns the data
C. Data is encrypted with sovereign keys
D. Provider has root access

### 35. Endpoint DLP would BEST detect:
A. A user emailing PII to Gmail
B. A DDoS attack
C. A user copying confidential files to a USB
D. A misconfigured S3 bucket

### 36. Network DLP would BEST detect:
A. A printed document
B. A user typing a password
C. A USB copy
D. A user emailing PII to Gmail

### 37. SFTP runs over what + port?
A. TLS / 990
B. SSH / 22
C. FTP / 21
D. SCP / 873

### 38. LDAPS port is:
A. 389
B. 636
C. 443
D. 1812

### 39. TACACS+ runs on:
A. UDP 1812
B. TCP 49
C. TCP 443
D. UDP 514

### 40. SPF, DKIM, DMARC together prevent:
A. SQL injection
B. Email spoofing of your domain
C. DDoS
D. Buffer overflow

### 41. A WAF protects which layer?
A. Layer 2
B. Layer 3
C. Layer 7 (HTTP/S)
D. Layer 1

### 42. An IDS differs from an IPS PRIMARILY because:
A. IDS is host-only; IPS is network-only
B. IDS detects/alerts; IPS detects/blocks (inline)
C. IDS uses signatures; IPS uses anomalies
D. IDS is cloud-only

### 43. An "evil twin" wireless attack is:
A. A worm pair
B. A bluetooth attack
C. A jamming attack
D. Attacker's AP impersonating a legit SSID

### 44. Which legacy VPN protocol should be replaced?
A. IKEv2
B. PPTP
C. WireGuard
D. OpenVPN

### 45. IPSec Tunnel mode encrypts:
A. The payload only
B. The headers only
C. The entire original IP packet
D. The TCP handshake only

### 46. EDR adds beyond traditional AV:
A. More signatures
B. Hardware integration only
C. Faster scanning
D. Behavioral telemetry, threat hunting, rollback, response actions

### 47. XDR extends EDR by:
A. Adding more endpoints
B. Replacing the firewall
C. Correlating endpoint, network, cloud, and email telemetry
D. Adding encryption

### 48. In IaaS, the customer is responsible for:
A. Hypervisor security
B. Physical facility
C. Guest OS, app, data, network configs within the VM
D. Server hardware

### 49. A public S3 bucket exposing customer PII is:
A. AWS's fault
B. A networking bug
C. The customer's misconfiguration (shared responsibility)
D. An ISO 27001 violation

### 50. CASB primarily:
A. Sits between users and cloud apps; enforces policy; discovers shadow IT
B. Hosts websites
C. Provides EDR
D. Replaces a SIEM

### 51. CSPM primarily:
A. Detects endpoint malware
B. Continuously audits cloud configurations against best practices
C. Issues TLS certificates
D. Manages mobile devices

### 52. Containers share which key resource with the host?
A. Host OS kernel
B. Hypervisor
C. CPU only
D. A separate kernel each

### 53. SCADA systems typically:
A. Have monthly patches
B. Use Kerberos
C. Are public cloud only
D. Have long lifecycles, limited patching, proprietary protocols

### 54. The MOST appropriate compensating control for an unpatchable PLC:
A. Reimaging weekly
B. Connect to corporate Wi-Fi
C. Antivirus on the PLC
D. Segmentation, jump server, monitoring, restricted access

### 55. A SIM swap defeats:
A. FIDO2 hardware key
B. SMS-based OTP
C. TOTP authenticator app
D. Biometrics

### 56. UEM differs from MDM by:
A. Unifying mobile + laptop + desktop + IoT
B. Limited to iOS
C. Being open source
D. Being free

### 57. Selective wipe (corporate data only) is associated with:
A. MDM
B. Hardware kill switch
C. MAM
D. CASB

### 58. The HSM's primary role is:
A. Storing encrypted backups
B. Replacing a TPM
C. Tamper-resistant generation and storage of cryptographic keys
D. Hosting websites

### 59. Code signing primarily provides:
A. Encryption at rest
B. Faster builds
C. Integrity and publisher authenticity
D. Smaller artifacts

### 60. ZTNA replaces:
A. SAML federation
B. PKI
C. Traditional VPN for application access
D. CSPM

### 61. NIST CSF 2.0 added which function?
A. Recover
B. Detect
C. Protect
D. Govern

### 62. An attestation (e.g., SOC 2 Type II) is:
A. A self-assessment
B. A vulnerability report
C. An independent auditor's formal statement
D. A penetration test

### 63. A "tabletop exercise" is:
A. A discussion-based walkthrough
B. A live failover
C. A red-team penetration test
D. An automated SOAR playbook

### 64. The order of EXERCISE types from least to most risky:
A. Walkthrough → Tabletop → Parallel → Simulation
B. Full-interruption → Parallel → Simulation → Walkthrough → Tabletop
C. Tabletop → Full-interruption → Simulation → Parallel
D. Tabletop → Walkthrough → Simulation → Parallel → Full-interruption

### 65 (Scenario PBQ). Place these systems in their correct zones (DMZ / Internal / Secure / Management):

- Public web servers
- DB servers (only accessed by web tier)
- Employee workstations
- Jump server for admin access

A. Web/DMZ, DB/Secure, Workstations/Internal, Jump/Management
B. Web/Internal, DB/DMZ, Workstations/Secure, Jump/DMZ
C. All in DMZ
D. All in Internal

### 66 (Scenario PBQ). Match each attack to its indicator:

- (a) `?next=https://evil.com` in URL parameter
- (b) Process spawning `powershell -enc <base64>`
- (c) Outbound to `bad-domain[.]tld` over DNS at periodic 5-min intervals
- (d) Failed logins: one password against 8,000 usernames in 1 minute

A. (a) Open redirect, (b) Fileless / LOLBin, (c) C2 beaconing, (d) Password spraying
B. (a) SSRF, (b) Brute force, (c) DDoS, (d) Spraying
C. (a) XSS, (b) Phishing, (c) DNS amplification, (d) Stuffing
D. (a) CSRF, (b) Worm, (c) Replay, (d) Vishing

### 67 (Scenario PBQ). Drag these actions into NIST IR phase order:

- Wipe and rebuild infected hosts
- Capture memory image
- Update playbook with new IOCs
- Isolate via EDR
- Restore from clean backup
- Determine scope of impact

A. Scope → Memory → Isolate → Wipe → Restore → Update playbook
B. Wipe → Restore → Memory → Isolate → Scope → Update playbook
C. Update playbook → Isolate → Wipe → Memory → Restore → Scope
D. Memory → Wipe → Restore → Isolate → Scope → Playbook

### 68 (Scenario PBQ). For each contract scenario, pick the right document:

- (i) HR + new SaaS vendor about a 6-month POC
- (ii) Vendor processes EU customer PII
- (iii) Vendor handles cardholder data
- (iv) Two companies share aspirational intent to cooperate

A. (i) SOW (under MSA), (ii) DPA, (iii) PCI compliance docs/BAA-like, (iv) MOU
B. (i) NDA, (ii) MOU, (iii) SLA, (iv) BPA
C. (i) ISA, (ii) BAA, (iii) DPA, (iv) MSA
D. All four = MSAs

### 69 (Scenario PBQ). A pen-tester finds three issues on the same web app:

1. Login endpoint vulnerable to SQLi
2. Old jQuery (v1.x) with multiple CVEs
3. Admin panel reachable from the internet with no MFA

Order from HIGHEST to LOWEST exam priority:
A. SQLi → Admin panel → jQuery
B. Admin panel → jQuery → SQLi
C. SQLi (full auth bypass) → Admin panel (privileged access exposed) → jQuery (mostly client-side)
D. jQuery → SQLi → Admin panel

### 70 (Scenario PBQ). A SOC observes:

- 4,800 outbound DNS queries from one host in 60 seconds
- Each query is to `<random>.bad-domain.tld`
- The host has no business-justified DNS load
- EDR shows a recently-installed unsigned binary

The MOST likely attack technique is:
A. DDoS originating from this host
B. DNS tunneling for exfiltration/C2
C. ARP poisoning
D. Pass-the-hash

---

## 🎯 Answer Key (No Cheating!)

```
1.  A    16. D    31. A    46. D    61. D
2.  C    17. D    32. B    47. C    62. C
3.  B    18. A    33. C    48. C    63. A
4.  B    19. A    34. A    49. C    64. D
5.  A    20. A    35. C    50. A    65. A
6.  B    21. D    36. D    51. B    66. A
7.  A    22. A    37. B    52. A    67. A
8.  C    23. B    38. B    53. D    68. A
9.  A    24. B    39. B    54. D    69. C
10. A    25. A    40. B    55. B    70. B
11. A    26. B    41. C    56. A
12. B    27. D    42. B    57. C
13. D    28. D    43. D    58. C
14. D    29. B    44. B    59. C
15. D    30. C    45. C    60. C
```

### Key explanations
- **#17** SLE = $500k × 0.20 = $100k. ALE = $100k × 1.5 = **$150k**.
- **#65** Public web in DMZ; DBs in Secure (reached only by web tier); workstations on Internal; jump server in Management. Classic layered architecture.
- **#66** (a) `?next=` is an open redirect; (b) base64-encoded PowerShell is the textbook fileless/LOLBin signature; (c) periodic DNS to attacker domain = C2 beacon; (d) one password vs many usernames = spraying.
- **#67** NIST order: determine scope (D&A) → capture memory (D&A) → isolate (containment) → wipe (eradication) → restore (recovery) → update playbook (lessons).
- **#69** SQLi at login = total auth bypass (worst). Exposed admin panel no MFA = direct privileged access. jQuery client-side = real but lowest impact.

---

## Detailed answer rationales

> Every question gets why-correct and why-each-wrong, plus a one-line exam takeaway.

**Q1. Answer: A — "Something you remember."** Sec+ recognizes five factors: know, have, are, do, where you are. "Remember" is not separate; it overlaps "know." **Wrong distractors:** B/C/D are all genuine Sec+ factors. **Takeaway.** Memorize the 5 official factor names exactly.

**Q2. Answer: C — Log aggregation + correlation + alerting.** SIEM's core capability. **Wrong:** A (patching) is a SCCM/Intune job. B (firewall mgmt) is NSM. D (encryption at rest) is KMS/storage. **Takeaway.** SIEM = aggregate + correlate + alert.

**Q3. Answer: B — Orchestration + automated response via playbooks.** SOAR sits on top of SIEM to automate response. **Wrong:** A (more storage) misses the point. C (replaces SIEM) — they complement. D (replaces EDR) is wrong category. **Takeaway.** SOAR = automated response; SIEM = detection.

**Q4. Answer: B — Prep → Detection → Containment → Eradication → Recovery → Lessons.** NIST 800-61 Rev 2 canonical order. **Wrong:** A, C, D all scramble phases. **Takeaway.** PDCERL = Prep, Detect, Contain, Eradicate, Recover, Lessons (memorize the 6 in order).

**Q5. Answer: A — Cache/registers → RAM → temp/swap → disk → remote → physical.** Order of volatility per NIST SP 800-86; capture most volatile first. **Wrong:** All reverses or scrambles. **Takeaway.** Capture memory BEFORE shutting down.

**Q6. Answer: B — 0 to 10.** CVSS scale. **Wrong:** Other ranges invented. **Takeaway.** CVSS 0-10; 10 = critical.

**Q7. Answer: A — Probability of exploitation in the wild.** EPSS (Exploit Prediction Scoring System) is FIRST's complement to CVSS. **Wrong:** B (Patch status) is vendor advisory. C (CVE category) is CWE. D (Vendor link) is just a reference. **Takeaway.** CVSS = severity; EPSS = likelihood of being weaponized.

**Q8. Answer: C — Actively exploited vulns; patch first.** CISA KEV catalog. **Wrong:** A (All CVEs) is NVD's job. B (Compliance) is unrelated. D (Encryption deprecations) is NIST/IETF. **Takeaway.** KEV = active exploitation; prioritize ruthlessly.

**Q9. Answer: A — Logs in to see actual configs and packages.** Credentialed scans see ground truth. **Wrong:** B (Illegal) is false. C (Public IPs only) describes external scans. D (Skips encrypted) — irrelevant. **Takeaway.** Credentialed = authenticated = high fidelity.

**Q10. Answer: A — Connection metadata (5-tuple + byte counts).** Flow formats. **Wrong:** B (Full payloads) describes PCAP. C (Vuln assessments) wrong. D (CRLs) wrong. **Takeaway.** NetFlow/sFlow/IPFIX = metadata; PCAP = payloads.

**Q11. Answer: A — Include payload contents.** PCAP captures full packet contents. **Wrong:** B (Text) — PCAP is binary. C (Encryption overhead) doesn't drive size. D (More metadata) — flows have rich metadata too. **Takeaway.** PCAP = full payload = big files.

**Q12. Answer: B — BAA.** HIPAA Business Associate Agreement required for any vendor handling PHI. **Wrong:** A (SLA) defines uptime. C (MOU) is non-binding. D (DPA) is GDPR. **Takeaway.** HIPAA PHI vendor → BAA.

**Q13. Answer: D — DPA.** GDPR Data Processing Agreement required when processor handles personal data. **Wrong:** A (SLA), B (BAA = HIPAA), C (ISA = system interconnection). **Takeaway.** GDPR processor → DPA.

**Q14. Answer: D — Umbrella contract for ongoing vendor relationship.** MSA governs an entire relationship; SOWs sit beneath. **Wrong:** A (Project scope) is the SOW. B (SLA) is performance. C (Non-binding) is MOU. **Takeaway.** MSA = umbrella; SOW = project; SLA = performance.

**Q15. Answer: D — Project-specific scope and deliverables under MSA.** SOW (Statement of Work). **Wrong:** A (Umbrella) is MSA. B (Performance) is SLA. C (Non-disclosure) is NDA. **Takeaway.** SOW under MSA; SLA layered on top.

**Q16. Answer: D — ALE.** ALE = SLE × ARO. **Wrong:** A (EF) is exposure factor. B (AV) is asset value. C (ROI) is unrelated. **Takeaway.** ALE = SLE × ARO. Memorize.

**Q17. Answer: D — $150,000.** SLE = $500k × 0.20 = $100k. ALE = $100k × 1.5 = $150k. **Wrong:** Other amounts result from wrong formulas (e.g., A would be only SLE × 0.5). **Takeaway.** Plug-and-chug SLE = AV × EF, then ALE = SLE × ARO.

**Q18. Answer: A — Identify, Protect, Detect, Respond, Recover.** NIST CSF v1.0/1.1 five functions. **Wrong:** All other lists invented. **Takeaway.** NIST CSF v1 = IPDRR. v2 adds Govern → GIPDRR.

**Q19. Answer: A — Real-time sync (hot) vs periodic (warm).** Defining difference. **Wrong:** B (Location), C (OS), D (Vendor) don't define hot vs warm. **Takeaway.** Hot = real-time replication; warm = periodic.

**Q20. Answer: A — 3 copies, 2 media, 1 off-site.** Veeam-popularized rule, widely adopted. **Wrong:** Other variants invented. **Takeaway.** 3-2-1: 3 copies, 2 different media types, 1 off-site (immutable strongly recommended in 2024+).

**Q21. Answer: D — Maximum acceptable downtime.** RTO defines how long the business can tolerate being down. **Wrong:** A (Data loss) is RPO. B (Retention) is policy. C (MTBF) is engineering metric. **Takeaway.** RTO = downtime; RPO = data loss.

**Q22. Answer: A — Maximum acceptable DATA loss (in time).** RPO. **Wrong:** B is RTO. C (MTTR) is repair time. D (Throughput) is unrelated. **Takeaway.** RPO = data; RTO = time.

**Q23. Answer: B — Source code / compiled binaries statically.** SAST = Static Application Security Testing. **Wrong:** A (Running app) is DAST. C (Packets) is unrelated. D (Hardware) is wrong. **Takeaway.** SAST = static; DAST = dynamic.

**Q24. Answer: B — The running app from outside.** DAST crawls and probes from the outside. **Wrong:** A (Source) is SAST. C (Binaries only) is partial-SAST. D (Dependencies) is SCA. **Takeaway.** DAST = black-box runtime testing.

**Q25. Answer: A — Known-vulnerable dependencies.** SCA = Software Composition Analysis. Caught Log4Shell, etc. **Wrong:** B (Custom-code injection) is SAST. C (IDS alerts) is unrelated. D (Phishing) is email security. **Takeaway.** SCA finds vulnerable libraries by version match.

**Q26. Answer: B — US Executive Order 14028 for federal software.** SBOM mandate from May 2021 EO. **Wrong:** A (PCI-DSS) doesn't mandate SBOM. C (HIPAA), D (ISO 27001) don't. **Takeaway.** SBOM = EO 14028.

**Q27. Answer: D — In use.** Confidential computing protects data being processed in CPU/memory via TEEs (SGX, SEV, Nitro). **Wrong:** A (At rest) is disk encryption. B (In transit) is TLS. C (Archived) is at-rest. **Takeaway.** Confidential computing = data in use.

**Q28. Answer: D — Tokens are reversible via vault lookup, no math relation.** Definition. **Wrong:** A (Slower) is irrelevant. B (Stronger) misleading. C (Uses AES) — tokens don't necessarily use AES. **Takeaway.** Tokenization = vault lookup, no math.

**Q29. Answer: B — Cannot be re-identified by reasonable means → GDPR no longer applies.** GDPR Recital 26. **Wrong:** A (AES-256) is encryption, still reversible. C (Pseudonymized) is reversible with mapping → GDPR still applies. D (Storage location) is unrelated. **Takeaway.** Anonymization = irreversible → outside GDPR. Pseudonymization = reversible → still GDPR.

**Q30. Answer: C — Pseudonymization reversible with mapping; anonymization irreversible.** GDPR distinction. **Wrong:** A (Same) is false. B (Pseud stronger) is backwards. D (HMAC) is unrelated. **Takeaway.** Memorize the GDPR distinction — frequently tested.

**Q31. Answer: A — Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation.** STRIDE (Kohnfelder & Garg, Microsoft, 1999). **Wrong:** Other expansions invented. **Takeaway.** STRIDE: S-T-R-I-D-E in that exact order.

**Q32. Answer: B — Secrets manager with short-lived creds.** Best practice. **Wrong:** A, C (hardcoded/checked-in) are textbook bad. D (Chat channel) is worse. **Takeaway.** Secrets → vault → short-lived tokens.

**Q33. Answer: C — HIPAA.** PHI = Protected Health Information under HIPAA. **Wrong:** A (GLBA = financial), B (PCI = cards), D (CCPA = California consumer privacy). **Takeaway.** PHI = HIPAA.

**Q34. Answer: A — Subject to country-of-residence laws.** Definition. **Wrong:** B (Customer owns) is ownership, not sovereignty. C (Sovereign keys) is invented. D (Provider root) is wrong. **Takeaway.** Sovereignty = jurisdiction.

**Q35. Answer: C — User copying confidential files to USB.** Endpoint DLP sees device events. **Wrong:** A (Email to Gmail) is network DLP. B (DDoS) is unrelated. D (S3 bucket) is CSPM. **Takeaway.** Endpoint DLP = USB, screen capture, print, local copy.

**Q36. Answer: D — User emailing PII to Gmail.** Network DLP sees traffic. **Wrong:** A (Printed doc) needs physical/endpoint DLP. B (Typing) is unrelated. C (USB) is endpoint. **Takeaway.** Network DLP = traffic-borne exfiltration.

**Q37. Answer: B — SSH / 22.** SFTP runs over SSH. **Wrong:** A (TLS/990) is FTPS. C (FTP/21) is plain FTP. D (SCP/873) — SCP is over SSH/22, port 873 is rsync. **Takeaway.** SFTP ≠ FTPS. SFTP = SSH/22; FTPS = TLS/990.

**Q38. Answer: B — 636.** LDAPS = LDAP-over-TLS = 636. **Wrong:** A (389) is plain LDAP. C (443) is HTTPS. D (1812) is RADIUS. **Takeaway.** Memorize: LDAP=389, LDAPS=636.

**Q39. Answer: B — TCP 49.** TACACS+ standard. **Wrong:** A (UDP 1812) is RADIUS. C (TCP 443) is HTTPS. D (UDP 514) is syslog. **Takeaway.** TACACS+ = TCP 49.

**Q40. Answer: B — Email spoofing of your domain.** SPF/DKIM/DMARC trio. **Wrong:** A (SQLi), C (DDoS), D (Buffer overflow) are unrelated. **Takeaway.** Email anti-spoofing trio.

**Q41. Answer: C — Layer 7 (HTTP/S).** WAF = application-layer firewall. **Wrong:** A (L2), B (L3), D (L1) are wrong layers. **Takeaway.** WAF = L7.

**Q42. Answer: B — IDS detects/alerts; IPS detects/blocks (inline).** Primary difference. **Wrong:** A (host vs network) is HIDS/NIDS distinction. C (sig vs anomaly) — both can use either. D (cloud-only) is wrong. **Takeaway.** IDS = passive; IPS = inline.

**Q43. Answer: D — Attacker's AP impersonates a legit SSID.** Evil twin. **Wrong:** A (Worm pair) invented. B (Bluetooth) is bluejacking et al. C (Jamming) is RF. **Takeaway.** Evil twin = impersonation; rogue AP = unauthorized but not necessarily impersonating.

**Q44. Answer: B — PPTP.** Cryptographically broken (MS-CHAPv2 ChapCrack 2012). **Wrong:** A (IKEv2), C (WireGuard), D (OpenVPN) are all modern/acceptable. **Takeaway.** PPTP = always wrong on Sec+.

**Q45. Answer: C — Entire original IP packet.** IPSec Tunnel mode wraps the whole original packet. **Wrong:** A (Payload only) is Transport mode. B (Headers only) is meaningless. D (TCP handshake) is wrong. **Takeaway.** Tunnel = whole packet; Transport = payload only.

**Q46. Answer: D — Behavioral telemetry, threat hunting, rollback, response actions.** EDR's value-add over AV. **Wrong:** A (More signatures) is incremental AV. B (Hardware) wrong. C (Faster) is wrong angle. **Takeaway.** EDR = behavior + telemetry + response.

**Q47. Answer: C — Correlates endpoint, network, cloud, email telemetry.** XDR = extended detection. **Wrong:** A (More endpoints) misses the point. B (Replaces firewall) wrong. D (Encryption) wrong. **Takeaway.** XDR extends across data sources.

**Q48. Answer: C — Guest OS, app, data, network configs in VM.** IaaS customer responsibility. **Wrong:** A (Hypervisor), B (Facility), D (Hardware) are provider's responsibility. **Takeaway.** IaaS: customer owns inside-the-VM; provider owns the platform.

**Q49. Answer: C — Customer misconfiguration (shared responsibility).** Customer owns S3 bucket policy. **Wrong:** A (AWS's fault) is false. B (Networking) wrong. D (ISO) is unrelated to attribution. **Takeaway.** Customer bucket config = customer's responsibility, period.

**Q50. Answer: A — Sits between users and cloud apps; enforces policy; discovers shadow IT.** CASB definition. **Wrong:** B (Hosts sites), C (EDR), D (Replaces SIEM) all wrong category. **Takeaway.** CASB = SaaS broker.

**Q51. Answer: B — Continuously audits cloud configs against best practices.** CSPM. **Wrong:** A (EDR), C (TLS certs), D (Mobile mgmt) are wrong categories. **Takeaway.** CSPM = config posture.

**Q52. Answer: A — Host OS kernel.** Containers share host kernel; a kernel exploit escapes the container. **Wrong:** B (Hypervisor) is VM. C (CPU only) is incomplete. D (Separate kernel) is wrong — that's a VM. **Takeaway.** Container = shared kernel; VM = separate kernel.

**Q53. Answer: D — Long lifecycles, limited patching, proprietary protocols.** SCADA reality. **Wrong:** A (Monthly patches) wrong. B (Kerberos) is enterprise IT. C (Public cloud only) wrong. **Takeaway.** SCADA = legacy + brittle + segmented.

**Q54. Answer: D — Segmentation, jump server, monitoring, restricted access.** Compensating controls for unpatchable PLC. **Wrong:** A (Reimage) doesn't fix patch absence. B (Corp Wi-Fi) adds risk. C (AV on PLC) doesn't work on RTOS. **Takeaway.** ICS compensating controls = segmentation + jump + monitor + restrict.

**Q55. Answer: B — SMS-based OTP.** SIM swap intercepts SMS. **Wrong:** A (FIDO2) is phishing-resistant. C (TOTP) uses local seed. D (Biometrics) is local. **Takeaway.** SIM swap defeats SMS MFA.

**Q56. Answer: A — Unifying mobile + laptop + desktop + IoT.** UEM consolidates. **Wrong:** B (iOS only), C (Open source), D (Free) all wrong. **Takeaway.** UEM = unified across device types.

**Q57. Answer: C — MAM.** Mobile Application Management enables selective wipe of corp data only. **Wrong:** A (MDM) wipes the whole device. B (Hardware) wrong. D (CASB) wrong. **Takeaway.** Selective wipe = MAM.

**Q58. Answer: C — Tamper-resistant generation and storage of crypto keys.** HSM = Hardware Security Module. **Wrong:** A (Backup storage) wrong. B (Replaces TPM) — they're complementary. D (Web hosting) wrong. **Takeaway.** HSM = enterprise tamper-resistant key store.

**Q59. Answer: C — Integrity and publisher authenticity.** Code signing assures consumers. **Wrong:** A (Encryption at rest) wrong. B (Faster builds) irrelevant. D (Smaller artifacts) irrelevant. **Takeaway.** Code signing = integrity + authenticity.

**Q60. Answer: C — Traditional VPN for application access.** ZTNA replaces broad-network VPN with per-app identity-aware access. **Wrong:** A (SAML) is auth. B (PKI) is foundational. D (CSPM) is cloud config. **Takeaway.** ZTNA replaces VPN for app access.

**Q61. Answer: D — Govern.** CSF 2.0 (Feb 2024) added Govern. **Wrong:** A, B, C all existed in v1. **Takeaway.** v1 = IPDRR (5); v2 = GIPDRR (6).

**Q62. Answer: C — Independent auditor's formal statement.** SOC 2 Type II is exemplar. **Wrong:** A (Self-assessment) lacks independence. B (Vuln report) is technical. D (Pen test) is technical. **Takeaway.** Attestation = independent auditor's statement.

**Q63. Answer: A — Discussion-based walkthrough.** Tabletop = talked through, no live systems. **Wrong:** B (Live failover) is parallel/full-interruption. C (Red team) is technical attack simulation. D (Automated playbook) is SOAR. **Takeaway.** Tabletop = discussion only.

**Q64. Answer: D — Tabletop → Walkthrough → Simulation → Parallel → Full-interruption.** Risk-ascending order. **Wrong:** Other orderings scramble. **Takeaway.** Least to most risky = T→W→S→P→F.

**Q65. Answer: A — Web/DMZ, DB/Secure, Workstations/Internal, Jump/Management.** Classic layered architecture. **Wrong:** B/C/D all misplace systems. **Takeaway.** Public-facing → DMZ; backend → Secure; users → Internal; admin → Management.

**Q66. Answer: A — Open redirect, Fileless/LOLBin, C2 beaconing, Password spraying.** Each indicator → its attack. **Wrong:** B confuses (a) and (c). C confuses (a)/(c). D substitutes wrong attacks. **Takeaway.** PBQ matching — learn the indicator-to-attack lookup table.

**Q67. Answer: A — Scope → Memory → Isolate → Wipe → Restore → Update playbook.** NIST IR phases: D&A → Containment → Eradication → Recovery → Lessons. **Wrong:** Other orderings violate the lifecycle. **Takeaway.** Always determine scope and capture volatile evidence *before* containment that changes state.

**Q68. Answer: A — (i) SOW under MSA, (ii) DPA, (iii) PCI/BAA, (iv) MOU.** **Wrong:** B substitutes NDA/MOU/SLA. C swaps ISA/BAA/DPA. D treats all as MSAs. **Takeaway.** Match contract type to relationship: ongoing → MSA; project → SOW; GDPR → DPA; HIPAA → BAA; non-binding → MOU; system interconnection → ISA.

**Q69. Answer: C — SQLi → Admin panel → jQuery.** Auth-bypass on login is worst; admin panel is direct privileged access; old jQuery is mostly client-side. **Wrong:** A, B, D scramble priority. **Takeaway.** Rank vulns by *blast radius if exploited*.

**Q70. Answer: B — DNS tunneling.** High-rate DNS to random subdomains of attacker-controlled domain = textbook DNS tunneling for exfiltration/C2. **Wrong:** A (DDoS) wrong direction (outbound). C (ARP) is local. D (PtH) is auth. **Takeaway.** High-rate random-subdomain DNS to attacker domain = tunneling.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 65–70 | 🏆 Excellent — Final Mock next |
| 58–64 | ✅ Solid — review wrong answers, then Final Mock |
| 50–57 | ⚠️ Re-study weak modules; redo this exam in 1 week |
| <50 | 🔁 Revisit weak domains in full |

---

## 🔍 Review Process

1. Identify the module + domain each missed question belongs to.
2. Re-read the relevant Reading.md section.
3. Add to flashcards.
4. Aim to repeat the question in 3-5 days.

---

➡️ When ready: [Final Mock Exam (90 Q / 90 min)](./Final-Mock-Exam.md)
