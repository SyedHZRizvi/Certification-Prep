# ✏️ Module 10 Quiz: Application & Data Security

> **Instructions:** 26 questions. Aim for 22/26.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 6 (23%) · Understand 7 (27%) · Apply 7 (27%) · Analyze/Evaluate 5 (19%) · Create 1 (4%).

---

## Questions

### Q1. SAST analyzes: *(Remember)*
A. Running application via probes
B. Source code (or compiled binaries) statically
C. Network packets
D. Hardware tokens

---

### Q2. DAST analyzes: *(Remember)*
A. Source code
B. Running application from the outside via crawling/probing
C. Compiled binaries
D. Code dependencies

---

### Q3. SCA (Software Composition Analysis) finds: *(Understand)*
A. SQL injection in custom code
B. Known-vulnerable dependencies in your software
C. Network IDS signatures
D. Phishing emails

---

### Q4. Which testing technique sends malformed inputs to find crashes / edge-case failures? *(Remember)*
A. SAST
B. DAST
C. SCA
D. Fuzzing

---

### Q5. RASP differs from DAST because: *(Apply)*
A. RASP runs in production inside the app and can block attacks live
B. RASP only scans dependencies
C. RASP is faster than DAST
D. RASP replaces a WAF

---

### Q6. An SBOM is: *(Understand)*
A. A bill of materials for hardware
B. A machine-readable list of all software components in a product
C. A type of SLA
D. A US federal regulation

---

### Q7. Code signing primarily: *(Understand)*
A. Encrypts the binary at rest
B. Provides integrity + publisher authenticity verifiable by consumers
C. Increases CVSS score
D. Reduces dependency count

---

### Q8. Which Sec+ data state is BEST protected by TLS? *(Understand)*
A. At rest
B. In transit
C. In use
D. All states equally

---

### Q9. "Confidential computing" addresses which data state? *(Understand)*
A. At rest
B. In transit
C. In use
D. Backup

---

### Q10. Which technique replaces sensitive data with a token, with no mathematical relationship between the two? *(Apply)*
A. Hashing
B. Encryption
C. Tokenization
D. Masking

---

### Q11. Showing `****1234` for the last 4 digits of a credit card is: *(Apply)*
A. Hashing
B. Tokenization
C. Masking
D. Encryption

---

### Q12. Under GDPR, "anonymization" is: *(Apply)*
A. Reversible if you have the key
B. Such that the data subject cannot be re-identified by reasonable means; GDPR no longer applies
C. The same as encryption
D. Required by HIPAA but not GDPR

---

### Q13. Pseudonymization differs from anonymization because: *(Analyze)*
A. Pseudonymization is permanent
B. With a mapping key, pseudonymized data can be re-identified, GDPR still applies
C. Pseudonymization uses AES
D. Pseudonymization is older

---

### Q14. STRIDE includes which of the following? *(Remember)*
A. Synchronization, Throughput, Reliability, Integrity, Durability, Encryption
B. Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege
C. Speed, Trust, Robustness, Integrity, Data, Encryption
D. Secrecy, Trust, Repudiation, Identity, DoS, Endurance

---

### Q15. Which is the BEST defense against SQL injection? *(Evaluate)*
A. Input length restriction
B. Parameterized queries / prepared statements
C. Encoding output
D. WAF as the sole control

---

### Q16. A pipeline should fail the build when which condition is detected? *(Apply)*
A. Slow test execution
B. A secret committed to source code
C. A team member offline
D. Long commit message

---

### Q17. The MOST appropriate location to store database passwords used by an app is: *(Apply)*
A. Hardcoded in the source code
B. In a config file checked into the repo
C. In a secrets manager / vault, retrieved at runtime via short-lived credentials
D. In an environment variable in every developer's shell rc

---

### Q18. Which data classification typically applies to credit card data? *(Apply)*
A. Public
B. Internal
C. PCI / CHD
D. PHI

---

### Q19. PHI is regulated by: *(Understand)*
A. PCI-DSS
B. HIPAA
C. SOX
D. GLBA

---

### Q20. "Data sovereignty" means: *(Understand)*
A. Customers own their data
B. Data is subject to the laws of the country it resides in
C. Data is encrypted with sovereign keys
D. The provider has root access

---

### Q21. Network DLP would BEST detect: *(Analyze)*
A. A user printing a confidential document
B. A user emailing a customer SSN to a personal Gmail account
C. A user taking a photo of the screen
D. A user copying a file to USB

---

### Q22. Endpoint DLP would BEST detect: *(Analyze)*
A. A user copying confidential files to a USB drive
B. A network DDoS
C. A misconfigured S3 bucket
D. A weak TLS cipher

---

### Q23. Which is required by US Executive Order 14028 for federal software? *(Apply)*
A. CCPA compliance
B. SBOM
C. PCI-DSS
D. ISO 27001 certification

---

### Q24. Which language is generally considered MEMORY-UNSAFE by default? *(Remember)*
A. Rust
B. Go
C. C / C++
D. Python

---

### Q25 (Scenario). A microservice is exposed to the internet. SAST shows 0 critical findings; SCA finds a Log4Shell-vulnerable library. The CORRECT immediate action is: *(Evaluate)*
A. Ignore, SAST said zero criticals
B. Patch / upgrade the vulnerable dependency (or apply documented mitigation) and rebuild
C. Disable SAST
D. Make the service internal-only without updating

---

### Q26 (Scenario). A team wants to share customer purchase data with a research vendor. The vendor needs to compute aggregate statistics but should NEVER be able to re-identify individuals. BEST approach: *(Create)*
A. Send raw PII
B. Pseudonymize and share the mapping key
C. Apply true anonymization (e.g., k-anonymity, differential privacy) before sharing
D. Encrypt with AES-256 and share the key

---

## 🎯 Answers + Explanations

### Q1: **B. Source code statically**
SAST reads code without running it.

### Q2: **B. Running app from the outside**
DAST crawls + probes a live app.

### Q3: **B. Known-vulnerable dependencies**
SCA = dependency inventory + CVE matching.

### Q4: **D. Fuzzing**
Random/malformed inputs to surface crashes/bugs.

### Q5: **A. RASP runs in-process in production**
Real-time visibility + blocking.

### Q6: **B. Machine-readable software component inventory**
SBOM = "ingredients list" for software.

### Q7: **B. Integrity + publisher authenticity**
Sign with private key; verify with publisher's public key.

### Q8: **B. In transit**
TLS protects data crossing networks.

### Q9: **C. In use**
Confidential computing = encrypted in memory/CPU.

### Q10: **C. Tokenization**
No math link; vault lookup only.

### Q11: **C. Masking**
Display-time concealment.

### Q12: **B. Cannot be re-identified by reasonable means; GDPR no longer applies**

### Q13: **B. Re-identifiable with mapping; GDPR applies**
Common reg trap.

### Q14: **B. Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation**

### Q15: **B. Parameterized queries**

### Q16: **B. Secret in source**
Pre-commit secret scanning + pipeline gate.

### Q17: **C. Secrets manager + short-lived creds**

### Q18: **C. PCI / CHD**

### Q19: **B. HIPAA**

### Q20: **B. Subject to country's laws**

### Q21: **B. PII over email**
Network DLP intercepts in-flight content.

### Q22: **A. USB copy**
Endpoint DLP is on-host.

### Q23: **B. SBOM**
EO 14028 mandates SBOMs for federal software.

### Q24: **C. C / C++**
Manual memory mgmt = many memory vulns.

### Q25: **B. Patch the library**
SCA flagged a real risk; SAST didn't because it's not in your code, it's in the dependency.

### Q26: **C. True anonymization**
Pseudonymization with shared key = re-identifiable, fails the constraint.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 AppSec mastered. You've finished all modules!
- 22–24/26 → ✅ Solid. Time for the Final Mock.
- 18–21/26 → ⚠️ Re-read SAST/DAST/SCA + data states sections.
- <18/26 → 🔁 Restart Module 10.

---

## 🃏 Add To Your Flashcards

- SAST / DAST / IAST / SCA / RASP / fuzzing (one-line each)
- 3 data states + protection
- Tokenization / masking / hashing / encryption / pseudo / anon, when each
- STRIDE letters
- SBOM definition + EO 14028
- PII / PHI / PCI examples

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **[Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)** and the **[Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)**.
