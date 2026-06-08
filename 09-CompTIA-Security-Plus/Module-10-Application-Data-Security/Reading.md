# Module 10: Application & Data Security 🧪🔒

> **Why this module matters:** This module pulls together SDLC, secure coding, app testing (SAST/DAST/SCA), data classification, encryption states, DLP, and tokenization/masking. It spans Domain 3 and Domain 4 and is heavily tested in scenarios. It's also where the highest-paying jobs live (DevSecOps, AppSec).

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Web vulnerabilities / OWASP Top 10](../Module-05-Vulnerabilities-Attacks/Reading.md), this module covers *prevention* (SAST/DAST/SCA) of the vulns Module 5 covered as attacks.
> - [Cryptographic primitives + data-at-rest/in-transit](../Module-02-Cryptography-PKI/Reading.md), needed for the data-states + encryption/tokenization/masking distinctions.
> - [Cloud / IaC concepts](../Module-07-Endpoint-Mobile-Cloud-Security/Reading.md), needed for CI/CD pipeline security.
> - [Privacy regulations (GDPR, HIPAA, PCI-DSS)](../Module-09-GRC-Risk-Compliance/Reading.md), drive data-classification and DLP requirements.

---

## 🍕 A Story: Two Bakeries, Two Approaches To Recipes

Bakery A makes a new recipe and never tests it, they just sell it. First time a customer complains about a missing ingredient, they fix it. Six months later, they've quietly served 50 batches with stale eggs and only noticed when health inspectors showed up.

Bakery B has a system. Before any new recipe goes to customers:

- A baker reviews the recipe (peer review)
- They test it in a sandbox kitchen with a small batch
- They check the ingredients list against a known-allergens database (dependency scanning)
- They taste-test at multiple stages (continuous validation)
- They label every loaf with the recipe version and the bake date (provenance)

Bakery B is doing **secure SDLC + DevSecOps**. Bakery A is doing what most companies did until ~2010. The rest of this module is the formal version of Bakery B.

---

## 🔁 SDLC, Software Development Life Cycle

### Two main flavors

| Model | How |
|-------|-----|
| **Waterfall** | Sequential phases: Requirements → Design → Implementation → Test → Deploy → Maintain |
| **Agile** | Iterative sprints with continuous delivery; security baked into each sprint |
| **DevSecOps** | Security integrated into DevOps pipelines (CI/CD) from commit through production |

### Security activities by phase

| Phase | Security activity |
|-------|-------------------|
| **Requirements** | Threat modeling, security requirements, abuse cases |
| **Design** | Architecture review, attack-surface analysis |
| **Implementation** | Secure coding standards, peer reviews, pre-commit hooks |
| **Build** | Dependency scans, secret scans |
| **Test** | SAST, DAST, IAST, SCA, fuzzing, manual pentest |
| **Release** | Signed artifacts, SBOM, change management |
| **Deploy** | IaC scans, runtime protections, immutable infra |
| **Operate** | RASP, WAF, EDR, log monitoring |
| **Retire** | Sanitize data, revoke access, decommission |

### Threat Modeling (often referenced)

Citations: **STRIDE** was developed at Microsoft by **Loren Kohnfelder and Praerit Garg** ("The Threats To Our Products," internal Microsoft memo, **1999**) and codified externally by Howard & LeBlanc in *Writing Secure Code* (Microsoft Press, 2002). **PASTA** is from **Tony UcedaVélez and Marco M. Morana**, *Risk Centric Threat Modeling: Process for Attack Simulation and Threat Analysis* (Wiley, 2015, ISBN 978-0470500965). **DREAD** was also a Microsoft methodology, later largely deprecated by Microsoft itself (2010s) due to subjective scoring. **Attack Trees** were popularized by **Bruce Schneier** in *Secrets and Lies* (Wiley, 2000, ISBN 978-0471253112).

| Methodology | Use |
|-------------|-----|
| **STRIDE** (Kohnfelder & Garg, Microsoft 1999) | Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation of privilege |
| **PASTA** (UcedaVélez & Morana, 2015) | Process for Attack Simulation and Threat Analysis |
| **DREAD** (Microsoft, 2000s) | Damage, Reproducibility, Exploitability, Affected users, Discoverability (deprecated for scoring, sometimes still used as a categorization mnemonic) |
| **Attack Trees** (Schneier, *Secrets and Lies*, 2000) | Visualization of attack paths |

---

## 🛠️ Secure Coding Principles

| Principle | What |
|-----------|------|
| **Input validation** | Treat all input as hostile; allow-list patterns |
| **Output encoding** | Encode for the context (HTML, JS, SQL, shell) |
| **Parameterized queries** | Defeat SQL injection structurally |
| **Least privilege** | Code runs with minimum needed permissions |
| **Fail securely** | Errors default to closed/denied, not open |
| **Defense in depth** | Multiple control layers |
| **Secure defaults** | Off / locked-down out of the box |
| **Avoid security through obscurity** | Hidden logic isn't real security |
| **Don't trust client-side** | Validate server-side too |
| **Avoid hardcoded secrets** | Use a secrets manager |
| **Memory safety** | Use safe languages or memory-safe patterns |
| **Sandboxing** | Limit blast radius (containers, OS sandboxes) |
| **Code signing** | Sign release artifacts; verify before deploy |
| **Dependency hygiene** | Pin versions, monitor CVEs, prefer fewer/maintained libs |

### Languages by memory safety
- ✅ Memory-safe: Rust, Go, Python, Java, C# (managed runtimes / borrow checker)
- ❌ Memory-unsafe by default: C, C++ (manual memory management; lots of CVE root causes)

---

## 🧪 Application Security Testing, SAST / DAST / IAST / SCA / Fuzzing

| Tool | When | What |
|------|------|------|
| **SAST** (Static Application Security Testing) | Before runtime | Analyzes source code (or compiled binaries); finds patterns like SQLi, hardcoded secrets, taint flow |
| **DAST** (Dynamic Application Security Testing) | Running app | Crawls + sends probes; finds runtime vulns like reflected XSS, auth issues |
| **IAST** (Interactive AST) | Running app w/ agent | Combines static + runtime visibility from inside the running process |
| **SCA** (Software Composition Analysis) | Build time | Inventory dependencies; flag known-vulnerable libraries (Log4Shell, etc.) |
| **RASP** (Runtime App Self-Protection) | Production | Embedded agent blocks attacks at runtime |
| **Fuzzing** | Test runtime | Throw malformed inputs to find crashes / unexpected behavior |
| **Pen test** | Pre-release / annual | Manual expert assessment |
| **Bug bounty** | Continuous | Crowd-sourced |
| **Manual code review** | PR time | Human eyes |

🎯 **Sec+ pattern:** SAST = read code. DAST = poke running app. SCA = check the dependency tree. IAST = inside-out. Fuzzing = chaos input.

### Code signing
- Sign releases with a code-signing cert → consumers verify with publisher's public key
- Defeats supply-chain tampering, IF private key is secured (HSM)

### SBOM (Software Bill of Materials)
- A machine-readable list of every component in a software product
- Required for US federal software (Executive Order 14028)
- Formats: SPDX, CycloneDX

### CI/CD Pipeline Security
| Risk | Mitigation |
|------|------------|
| Compromised build agent | Ephemeral agents, signed images |
| Stolen pipeline secrets | OIDC short-lived tokens, secrets manager |
| Malicious dependency | SCA scans, pinned versions, vendor allow-list |
| Insider modifying release | Code review + branch protection + signing |
| Tampered artifact | Sigstore / Cosign / Notary v2 |

---

## 🏷️ Data Classification

### Common labels (organizations vary)
| Label | Meaning |
|-------|---------|
| **Public** | Anyone may see |
| **Internal / Sensitive** | Employees only |
| **Confidential** | Restricted business |
| **Private** | Personal data |
| **Restricted / Highly Confidential** | Most sensitive (trade secrets, M&A) |
| **PII** | Personally Identifiable Information |
| **PHI** | Protected Health Information (HIPAA) |
| **PCI / CHD** | Cardholder Data (PCI-DSS) |
| **SPI** | Sensitive Personal Information |
| **IP / Trade Secret** | Patents, formulas, source code |
| **FOUO / CUI** | Government classifications |

### Government classification levels (US)
| Level | Description |
|-------|-------------|
| Unclassified | No restriction |
| Confidential | Damage if disclosed |
| Secret | Serious damage |
| Top Secret | Exceptionally grave damage |
| TS/SCI | TS + compartmented info |

---

## 🔐 Data States (3 states, MEMORIZE)

| State | What | Protection |
|-------|------|------------|
| **At Rest** | On disk / DB / backup tape | FDE (BitLocker, FileVault), DB TDE, encrypted backups, KMS |
| **In Transit** | Crossing networks | TLS, IPSec, SSH, S/MIME, VPN |
| **In Use** | Being processed in memory or CPU | Memory encryption, secure enclaves, **confidential computing**, OS sandboxing |

🎯 **Confidential computing** = encrypted-while-in-use via hardware (Intel SGX, AMD SEV, Apple Secure Enclave, AWS Nitro Enclaves).

---

## 🛡️ DLP, Data Loss Prevention

DLP monitors and blocks unauthorized exfiltration of sensitive data.

### DLP modes
| Mode | What |
|------|------|
| **Network DLP** | Inline at gateway, block emails with SSNs, file uploads with CHD |
| **Endpoint DLP** | Agent on each device, block USB copy, screen capture, print |
| **Cloud DLP** | API integration with SaaS (M365 DLP, Google DLP, CASB) |
| **Email DLP** | Specific to outbound email |

### DLP discovery & action
- **Discovery / classification**, find PII/PHI/PCI in repos
- **Inspection**, pattern match (regex), exact data match, fingerprinting, ML
- **Actions**, alert, log, encrypt, quarantine, block, prompt user

---

## 🎭 Data Protection Techniques

| Technique | Reversible? | Notes |
|-----------|-------------|-------|
| **Encryption** | Yes (with key) | Math-based confidentiality |
| **Tokenization** | Yes (via vault lookup) | No math relationship; token ↔ vault |
| **Masking** | Sometimes (show `****1234`) | Display-time concealment |
| **Hashing** | NO | One-way; for integrity / passwords |
| **Anonymization** | NO (irreversible) | Statistical aggregation, k-anonymity |
| **Pseudonymization** | Reversible if you have the key | Replaces identifiers; subject re-identifiable with extra info |
| **Obfuscation** | Yes | Hard to read, NOT secure |
| **Encoding (Base64)** | Yes | Not security at all |
| **Differential privacy** | Statistical noise | Used in research datasets |

### Pseudonymization vs Anonymization (GDPR distinction)
- **Pseudonymization**: replace name with a token; subject CAN be re-identified with mapping → GDPR still applies
- **Anonymization**: data CANNOT be re-identified by any reasonable means → GDPR no longer applies

---

## 🌍 Data Sovereignty & Residency

| Term | Means |
|------|-------|
| **Data sovereignty** | Data is subject to the laws of the country it resides in |
| **Data residency** | Where data is physically stored |
| **Data localization** | Legal requirement to store data within specific country borders |

🎯 **Exam scenario:** Cloud customer must keep EU data in EU regions only → use **region selection** + **provider compliance attestations** + **DPA**.

---

## ⏳ Data Retention & Disposal

| Term | Means |
|------|-------|
| **Retention policy** | How long to keep what data (regulatory + business) |
| **Legal hold** | Suspend deletion when litigation reasonably anticipated |
| **Sanitization** | Reliably making data unrecoverable |
| **Records management** | Lifecycle of records (creation → use → archive → destroy) |
| **Right to erasure** | GDPR/CCPA right to demand deletion |

**Sanitization techniques** (covered Module 8): wipe/overwrite, crypto-erase, degauss (magnetic only), shred, incinerate.

---

## 🧬 Identification of Data Sensitivity (in scans)

Modern DLP/CSPM systems can fingerprint:

- **Regex**, SSN `\d{3}-\d{2}-\d{4}`, credit cards (with Luhn validation), email
- **Exact data match**, hash of customer records
- **ML / NLP**, context-aware classification
- **OCR**, extracting text from images / PDFs

---

## 🔒 Secure Baselines (also relevant in M7)

| Baseline source | Use |
|----------------|-----|
| **CIS Benchmarks** | Detailed hardening per platform |
| **DISA STIGs** | DoD hardening |
| **MS Security Baselines** | Windows / Azure |
| **PCI hardening guides** | For cardholder environments |
| **Vendor security guides** | App-specific |

### Image lifecycle
- **Golden image**, pre-hardened base
- **CIS Hardened Image**, vendor-provided pre-hardened image
- **Bake-in vs config-on-boot**, choose whether config lives in the image or applied at provisioning

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** Your dev team is about to deploy a new microservice. Pick the FIVE most appropriate AppSec activities to run in the CI/CD pipeline before production, and order them.

**Walkthrough:**

| Order | Activity | Why |
|-------|----------|-----|
| 1 | **Secret scanning** on commit (pre-push hook) | Prevent secrets entering history |
| 2 | **SAST** in CI on every PR | Catch code-level vulns early |
| 3 | **SCA** + SBOM generation | Catch known-vulnerable deps |
| 4 | **DAST** against ephemeral staging deployment | Catch runtime vulns |
| 5 | **Container image scan** + signing before deploy | Prevent vulnerable / unsigned images |

Optional/longer-cycle: pen test once before major release; bug bounty continuous; threat modeling at design time.

A PBQ might ask you to drag activities into the right pipeline stages (Commit → Build → Test → Deploy → Prod).

---

## 📊 Case Study, Twitter / X API Email Leak (January 2023)

**Situation.** Between **June 2021** and **January 2022**, an authorization-check bug in Twitter's user-lookup REST API endpoint (`POST /1.1/account/login_verification.json` and related endpoints) returned an authenticated user's email address and phone number even when those fields were configured as private in user privacy settings. Twitter (now X) fixed the bug **upon HackerOne disclosure in January 2022**. The HackerOne report was paid out under Twitter's bug-bounty program. Standard bug-bounty disclosure: report → fix → reward → public eventually.

**Decision.** Twitter's response was *technically correct* (fix the bug; pay the bounty; do not disclose to users). But during the **8-month exposure window**, multiple attackers had independently discovered the same bug and *scraped* the API en masse submitting **hundreds of millions of email addresses** against the endpoint and recording which ones produced matched Twitter accounts. The attackers then compiled the result into massive **email-to-Twitter-handle correlation lists**. Twitter did not detect the volumetric API abuse during the window there was no API rate-limit / anomaly-detection capable of catching it because the API was *designed* to handle high-volume lookups, and the attackers used many residential-IP proxies.

**Outcome.** The first datasets surfaced on hacker forums in **July 2022** (~5.4M user records offered for sale). The full scope became clear when, in **January 2023**, another actor dumped a **~200M-record correlated dataset** (Twitter handle ↔ email) free on a public hacker forum. (Some reports said 235M; many records were duplicates.) Twitter's December 2022 official statement said the bug had been fixed and "there is no evidence that data was taken." The January 2023 dump made that statement obviously false; the company quietly amended it. The Irish Data Protection Commission (DPC) opened a GDPR investigation; the FTC opened an inquiry under Twitter's 2011/2022 consent decree. Twitter (under new ownership) was later fined €450,000 by the Irish DPC for the breach disclosure issues (December 2023). The downstream effects using the email-to-handle map to deanonymize pseudonymous Twitter accounts of journalists, activists, and dissidents continue into 2026. Some reports tied the data to subsequent targeted-phishing campaigns and to physical-safety incidents for activists in restrictive regimes.

**Lesson for the exam / for practitioners.** Module 10 (and adjacent Modules 5/8/9) concepts are illustrated end-to-end:

- **Authorization design failure (OWASP A01: Broken Access Control).** The API trusted the *requester* (any authenticated Twitter user) rather than checking whether the *target user* had made their info public. A textbook IDOR / broken access-control issue. Sec+ tests this in OWASP-Top-10 questions.
- **Detection failure, API security telemetry.** Twitter's monitoring lacked **API-level anomaly detection** (rate limits per token, behavioral analytics on lookup volumes per principal). Modern **CASB**/**API gateways** with anomaly detection (Salt Security, Noname Security, etc.) plus **CSPM/CIEM** for cloud-API-policy posture would have caught the volumetric abuse. Sec+ tests this as "what control would have detected?"
- **Data classification + privacy regulation.** Emails linked to pseudonymous handles are **personal data** under GDPR Article 4(1). The breach triggered GDPR breach-notification (Article 33: 72-hour notification), which Twitter mishandled. Sec+ Module 9 concepts.
- **SDLC / DAST gap.** Authorization tests at the API layer are notoriously weak in standard DAST (Module 10). **API security testing** is an emerging discipline (OWASP API Security Top 10 2023 lists authorization failures as #1, #3, and #5). The exam asks "what testing would have caught this?", answer: API-specific DAST + manual penetration test + threat modeling.
- **Bug-bounty disclosure asymmetry.** The bounty paid in January 2022 patched the bug, but the *bug had been exploited for months prior*. Bug-bounty programs cover the future; they don't cover the past. Sec+ Domain 5 vendor-risk concepts cover this disclosure-pipeline issue.

**Discussion (Socratic).**
- **Q1:** Twitter's December 2022 statement said "no evidence data was taken", which was true *only because Twitter had insufficient logs to detect the data exfiltration*. Is "no evidence" disclosure honesty or PR misdirection? Build the strongest argument both ways, then propose a standardized regulatory-disclosure language ("we have not detected exfiltration; our detection capabilities for this vector are: X").
- **Q2:** The bounty program incentivized the *original* discoverer to disclose responsibly, but did not deter independent re-discoverers from exploiting silently. Design a complementary control architecture: bug-bounty program + ... ? Defend each addition against a budget objection.
- **Q3:** GDPR's 72-hour breach-notification rule (Article 33) starts when the controller becomes *aware* of a breach. Twitter "became aware" in 2022 (bug fix) but didn't *believe* data had been taken until 2023. At what point should the 72-hour clock have started? Argue both sides with reference to the EDPB's Guidelines 9/2022 on Personal Data Breach Notification.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "SAST and DAST are the same" | SAST = code; DAST = running app |
| "Tokenization is just slow encryption" | No, token has no mathematical relation; only vault recovers |
| "Anonymized data isn't covered by GDPR" | True, but most "anonymized" data is actually pseudonymized |
| "Encrypted in transit means encrypted at rest" | No, those are separate states; both must be configured |
| "Code signing prevents all malware" | Prevents tampering of authentic releases; doesn't help if the developer's key leaks |
| "Confidential computing is hype" | It's a real, certifiable category (Intel SGX, AMD SEV) used in regulated industries |
| "Hashing is for confidentiality" | No, hashing is for integrity / passwords; doesn't conceal arbitrary data |
| "SBOM is optional" | Required for US federal software (EO 14028); becoming industry default |
| "DLP can prevent all leaks" | DLP misses encrypted exfil, screenshots-on-phone, novel patterns; defense in depth needed |
| "Fuzzing replaces unit tests" | They serve different purposes; fuzzing finds crashes/edge cases, not correctness |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **SDLC / DevSecOps** | Lifecycle for software security |
| **STRIDE / PASTA / DREAD** | Threat modeling methodologies |
| **SAST / DAST / IAST / SCA / RASP** | App security testing categories |
| **Fuzzing** | Malformed-input testing |
| **Code signing / SBOM / Sigstore** | Supply-chain integrity |
| **CI/CD security** | Pipeline integrity controls |
| **Data classification labels** | Public / Internal / Confidential / Restricted; PII/PHI/PCI |
| **Data states** | At rest / in transit / in use |
| **Confidential computing** | Encrypted-in-use hardware |
| **DLP** | Data Loss Prevention |
| **Tokenization / masking / anonymization / pseudonymization / encryption / hashing** | Data protection techniques |
| **Data sovereignty / residency / localization** | Where data lives, whose laws apply |
| **Retention / legal hold / sanitization** | Lifecycle controls |
| **Golden image / CIS Hardened Image** | Pre-hardened base |

### Acronyms cheat-row (Module 10)
| Acronym | Meaning |
|---------|---------|
| SDLC | Software Development Life Cycle |
| SAST / DAST / IAST | Static / Dynamic / Interactive App Security Testing |
| SCA / SBOM | Software Composition Analysis / Bill of Materials |
| RASP | Runtime Application Self-Protection |
| WAF | Web App Firewall (also M6) |
| CI/CD | Continuous Integration / Delivery |
| OWASP | Open Web App Security Project (M5) |
| TLS / FDE / TDE | Transport / Full Disk / Transparent Data Encryption |
| PII / PHI / PCI / SPI / CHD | Sensitive data categories |
| DLP | Data Loss Prevention |
| KMS / HSM / TPM | Key storage (also M2/M7) |
| GDPR / CCPA | Privacy regulations (also M9) |
| STRIDE / PASTA / DREAD | Threat modeling |
| OCR | Optical Character Recognition (DLP technique) |
| CIS / STIG | Hardening baselines |

---

## ✅ Module 10 Summary

You now know:

- 🔁 **SDLC** + **DevSecOps** activities per phase, plus threat modeling (STRIDE/PASTA/DREAD)
- 🛠️ Secure coding principles + memory-safe vs unsafe languages
- 🧪 **SAST / DAST / IAST / SCA / RASP / fuzzing**, when each is used
- 🏗️ **CI/CD security**, secret scanning, signing, SBOM
- 🏷️ Data **classification** labels (PII, PHI, PCI, etc.) and government levels
- 🔐 The 3 **data states** (rest, transit, use) + confidential computing
- 🛡️ **DLP** modes + content classification techniques
- 🎭 The full **data protection** taxonomy, encryption vs tokenization vs masking vs pseudonymization vs anonymization
- 🌍 **Data sovereignty / residency / localization** distinctions

---

## 🎓 Final Module Checklist

- ✅ Module 1: Security Fundamentals, CIA, AAA, Zero Trust, control types
- ✅ Module 2: Cryptography & PKI, AES, RSA, ECC, signatures, certificates
- ✅ Module 3: IAM, MFA, SAML/OAuth/OIDC, access control models, PAM
- ✅ Module 4: Threats, actors, motivations, vectors, intel
- ✅ Module 5: Vulnerabilities & Attacks, malware, OWASP, network/credential/social attacks
- ✅ Module 6: Network Security, firewalls, IDS/IPS, VPNs, secure protocols, ports
- ✅ Module 7: Endpoint, Mobile & Cloud, EDR, MDM, cloud shared responsibility, OT/ICS
- ✅ Module 8: Security Operations, SIEM/SOAR, IR, forensics, vuln mgmt
- ✅ Module 9: GRC, Risk & Compliance, frameworks, regulations, vendor agreements, BCP/DR
- ✅ Module 10: Application & Data Security, SDLC, SAST/DAST, classification, DLP

**You've covered every domain. Time to consolidate.**

### Next steps:

1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 Take **[Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)** (70 questions, full breadth)
5. 🃏 Drill the master [Flashcards](../Flashcards.md)
6. 🧪 Take the **[Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)**, 90 questions, 90 minutes
7. 📚 Re-watch Professor Messer's full SY0-701 playlist if time
8. 🎯 **Book the real exam** when you score 85%+ on the Final Mock
9. 🧠 Pivot to the **[Capstone Project](../Capstone-Project.md)** for cross-domain application

> **Where this leads.**
> - Inside this course: the [Capstone Project](../Capstone-Project.md) integrates every module, this is the last reading before the integrative exercise. The [Recommended Readings](../Recommended-Readings.md) deepen any of the topics covered.
> - Cross-course: AWS SAA (course 04) covers AWS-native SAST/DAST integrations (CodeGuru, Inspector, GuardDuty); Azure courses cover Defender for Cloud. AI courses 07/08 introduce LLM-specific application-security concerns (prompt injection, training-data poisoning) building on OWASP LLM Top 10 (2023).
> - Practice: Practice Exam 2 has ~11 application/data questions; Final Mock has ~12.

---

## 📚 Further Reading (Optional)

**Primary sources / standards:**
- 📄 NIST SP 800-218 (2022). [*Secure Software Development Framework (SSDF) v1.1*](https://csrc.nist.gov/publications/detail/sp/800-218/final). (US federal SDLC baseline; supports EO 14028.)
- 📄 OWASP. [*Application Security Verification Standard (ASVS) v4.0.3*](https://owasp.org/www-project-application-security-verification-standard/) (2021).
- 📄 OWASP API Security Top 10 (2023). [owasp.org/API-Security](https://owasp.org/API-Security/).
- 📄 OWASP Top 10 for LLM Applications (2023), the new AI/LLM-focused vulnerability list.
- 📄 [SLSA Supply-chain Levels for Software Artifacts](https://slsa.dev/) provenance/integrity framework (Google + Linux Foundation).
- 📄 [CISA Secure-by-Design pledge](https://www.cisa.gov/securebydesign) (2024).
- 📄 ISO/IEC 27034 Application Security. ISO/IEC 27018 PII in public clouds.
- 📄 NIST SP 800-122, Guide to Protecting the Confidentiality of PII.

**Threat-modeling primary sources:**
- 📖 Howard, M. & LeBlanc, D. (2002). *Writing Secure Code* (2nd ed.). Microsoft Press. (STRIDE.)
- 📖 UcedaVélez, T. & Morana, M. (2015). *Risk Centric Threat Modeling: PASTA Methodology*. Wiley. (PASTA.)
- 📖 Schneier, B. (2000). *Secrets and Lies: Digital Security in a Networked World*. Wiley. (Attack trees + canonical security-thinking text.)
- 📖 Shostack, A. (2014). *Threat Modeling: Designing for Security*. Wiley. (Modern Microsoft-aligned treatment.)

**Case-study sources (Twitter API leak):**
- 📄 Twitter/X public statements (December 2022, January 2023).
- 📄 Irish Data Protection Commission. Investigation closure, December 2023. (€450,000 fine.)
- 📄 HackerOne disclosure record HackerOne #1454956 (related to the original disclosure).

**Practitioner / hands-on:**
- 📖 [PortSwigger Web Security Academy](https://portswigger.net/web-security), Authorization labs are particularly relevant.
- 📖 [Microsoft Threat Modeling Tool guidance](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)
- 📖 The OWASP Cheat Sheet Series, short reference sheets on every Top-10 risk.
