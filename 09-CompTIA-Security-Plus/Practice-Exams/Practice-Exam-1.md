# 🧪 Practice Exam 1 — CompTIA Security+ (SY0-701 Style)

> **Conditions:** Set a 45-minute timer. 45 questions. Treat it like the real thing.
> **Pass mark:** 38/45 (~85%) — Sec+ passes at ~83% so aim higher in practice.
> Take this AFTER finishing Modules 1–5. Covers Fundamentals, Crypto, IAM, Threats, Vulns & Attacks.

---

## 📝 Questions

### 1. A ransomware attack encrypts every file on the file server. The PRIMARY CIA property violated is:
A. Confidentiality
B. Integrity
C. Availability
D. Non-repudiation

### 2. Non-repudiation is BEST achieved by:
A. AES encryption
B. Hashing
C. Digital signatures
D. Tokenization

### 3. In Zero Trust, the component that physically allows or blocks traffic is the:
A. Policy Enforcement Point (PEP)
B. Policy Administrator
C. Policy Engine
D. Adaptive Identity service

### 4. A camera that nobody monitors but everyone can see at the entrance is BEST classified as:
A. Detective
B. Compensating
C. Corrective
D. Deterrent

### 5. The MOST appropriate first activity when you suspect a security gap against ISO 27001 is:
A. Gap analysis
B. Penetration test
C. Tabletop exercise
D. Risk acceptance

### 6. AES-GCM provides:
A. Confidentiality only
B. Integrity only
C. Key exchange
D. Authenticated encryption (confidentiality + integrity)

### 7. ECC's primary advantage over RSA is:
A. Always stronger encryption
B. Smaller keys for equivalent security
C. It is symmetric
D. It does not need certificates

### 8. Perfect Forward Secrecy is provided by:
A. Static RSA key exchange
B. SHA-256 hashing
C. ECDHE / DHE (ephemeral key exchange)
D. AES-CBC

### 9. The correct order of certificate trust:
A. Server → Root → Intermediate
B. Server → Intermediate → Root
C. Root → Intermediate → Server
D. Intermediate → Server → Root

### 10. PKCS#12 (.pfx) files contain:
A. Only the public key
B. The CRL only
C. The OCSP response
D. Cert + private key + chain, password-protected

### 11. Plain SHA-256 is INSUFFICIENT for storing passwords because:
A. It's a weak hash
B. It cannot be computed on modern CPUs
C. It produces collisions
D. It's too fast — passwords need salting + key stretching (bcrypt/Argon2/PBKDF2)

### 12. To digitally sign a message, you encrypt the hash with:
A. The recipient's public key
B. Your (sender's) private key
C. The recipient's private key
D. Your (sender's) public key

### 13. SAML uses what data format?
A. XML assertions
B. JSON tokens
C. Binary CBOR
D. JWT id_tokens

### 14. OAuth 2.0 is primarily used for:
A. Authorization (delegated access)
B. Authentication
C. DNS resolution
D. Key exchange

### 15. Which protocol is BEST for modern token-based mobile/API login?
A. OIDC (built on OAuth 2.0)
B. LDAP
C. SAML
D. Kerberos

### 16. RADIUS uses what transport?
A. TCP 49
B. UDP 53
C. TCP 443
D. UDP 1812 / 1813

### 17. Password + PIN is BEST classified as:
A. MFA (two factors)
B. Authorization
C. Three-factor
D. Single-factor (both "something you know")

### 18. The MOST phishing-resistant MFA method is:
A. SMS code
B. Email magic link
C. Knowledge-based security questions
D. FIDO2 / passkey hardware token

### 19. The 3 pillars of AAA are:
A. Audit, Access, Approval
B. Authentication, Authorization, Accounting
C. Allow, Audit, Authorize
D. Authentication, Auditing, Allowing

### 20. A US military system enforces clearance-based access regardless of owner preference. This is:
A. DAC
B. MAC
C. RBAC
D. ABAC

### 21. Granting a database admin 30 minutes of elevated privilege only when requested + approved is:
A. Standing privilege
B. Just-In-Time (JIT) access
C. Role swapping
D. Shadow IT

### 22. A teenager downloads "Metasploit" and runs random exploits against IPs they found online. This actor is BEST classified as:
A. APT
B. Nation-state
C. Unskilled attacker (script kiddie)
D. Insider threat

### 23. A vendor's legitimate software update silently includes a backdoor. This is:
A. Phishing
B. Watering hole
C. Supply-chain attack
D. Insider threat

### 24. Free, US-government-curated threat intelligence comes from:
A. CrowdStrike Intelligence
B. Recorded Future
C. Mandiant
D. CISA AIS

### 25. Which is an Indicator of COMPROMISE (IOC)?
A. The Zero Trust policy
B. A specific malicious IP, hash, or domain
C. A vendor's SOC 2 report
D. The risk register

### 26. Self-replicating malware spreading across a network with no user action is a:
A. Virus
B. Trojan
C. Worm
D. Logic bomb

### 27. The BEST defense against SQL injection is:
A. Input length limits
B. Parameterized queries
C. Disabling SQL on the web server
D. WAF as the sole mitigation

### 28. `<script>` tags injected into a forum post that run for every viewer is:
A. Stored XSS
B. CSRF
C. Reflected XSS
D. DOM XSS

### 29. An attacker tricks the application server into fetching `http://169.254.169.254/latest/meta-data/`. The attack is:
A. Directory traversal
B. XSS
C. SSRF
D. SQLi

### 30. Buffer overflow exploits:
A. Writing past a memory buffer's allocated bounds
B. DNS cache poisoning
C. Weak password hashing
D. SQL syntax

### 31. One password tried against thousands of usernames (avoiding per-user lockout) is:
A. Brute force
B. Dictionary
C. Credential stuffing
D. Password spraying

### 32. Reusing breached credentials from another site against your bank is:
A. Brute force
B. Rainbow table
C. Password spraying
D. Credential stuffing

### 33. Pass-the-Hash bypasses needing the plaintext password because:
A. The hash is reversible
B. RADIUS forwards the hash
C. Windows NTLM authentication accepts the hash directly
D. Kerberos requires no password

### 34. An attack via SMS message is called:
A. Smishing
B. Vishing
C. Phishing
D. Whaling

### 35. An attacker registers `microsft.com` to capture mistyped traffic. This is:
A. SSRF
B. Pharming
C. Typosquatting
D. DNS poisoning

### 36. A SOC sees outbound connections from an internal host to a known C2 IP. The MOST appropriate FIRST action is:
A. Isolate the host (EDR network containment) and capture forensic evidence
B. Reformat the host
C. Notify the press
D. Update the AUP

### 37. Sec+ uses which term in place of "man-in-the-middle"?
A. On-path attack
B. Replay attack
C. Side-channel
D. Pivot attack

### 38. An attacker poisons ARP tables to redirect traffic through their host. This is a precursor to:
A. SQL injection
B. On-path attack
C. CSRF
D. DNS amplification

### 39. Which of the following is NOT a Sec+ threat actor category?
A. Black-hat developer
B. Hacktivist
C. Organized crime
D. Nation-state

### 40. A whaling attack targets:
A. Random users
B. Executives specifically
C. Anyone with an iPhone
D. Vendors only

### 41. Which is the FIRST step before deploying a high-risk production change?
A. Backout plan
B. Impact analysis + CAB approval
C. Public announcement
D. Failover test

### 42. A "compensating control" is BEST defined as:
A. An alternative when the primary control isn't feasible
B. The strongest possible control
C. A managerial-only control
D. A free control

### 43 (Scenario PBQ). A SIEM correlates these events on one host within 5 minutes: 1) EDR alert for `powershell.exe -enc <base64>`; 2) outbound DNS to a domain on the company's IOC feed; 3) WMI execution against 3 internal hosts. The phase of the NIST IR lifecycle the SOC is in NEXT (after these alerts) is:
A. Preparation
B. Detection & Analysis
C. Containment
D. Recovery

### 44 (Scenario PBQ). Match each attack indicator to its name:
- (a) Web log line `' UNION SELECT username,password FROM users--`
- (b) Server makes a request to `169.254.169.254`
- (c) Login attempts: one password against 4,000 usernames in 60 sec
- (d) Spoofed deauth frames flooding the wireless AP

A. (a) XSS, (b) SSRF, (c) Spraying, (d) Disassociation
B. (a) SQLi, (b) SSRF, (c) Password spraying, (d) Disassociation attack
C. (a) SQLi, (b) Replay, (c) Brute force, (d) Evil twin
D. (a) CSRF, (b) SSRF, (c) Stuffing, (d) Jamming

### 45 (Scenario PBQ). A pen tester finds:
- Passwords stored as unsalted SHA-256
- Web app vulnerable to stored XSS in profile bio
- Admin panel uses HTTP only on a public IP
- Service account on the public web has Domain Admin in AD

Which fix is the HIGHEST priority to remediate?
A. Replace SHA-256 with bcrypt for passwords
B. Add CSP and output encoding to fix XSS
C. Enforce HTTPS on the admin panel
D. Remove Domain Admin from the public-facing service account (least privilege)

---

## 🎯 Answer Key (No Cheating!)

```
1. C    11. D   21. B   31. D   41. B
2. C    12. B   22. C   32. D   42. A
3. A    13. A   23. C   33. C   43. C
4. D    14. A   24. D   34. A   44. B
5. A    15. A   25. B   35. C   45. D
6. D    16. D   26. C   36. A
7. B    17. D   27. B   37. A
8. C    18. D   28. A   38. B
9. C    19. B   29. C   39. A
10. D   20. B   30. A   40. B
```

### Why #45 = D
Domain Admin on a public-facing service account is the worst single risk — complete AD takeover from the internet. SHA-256 unsalted is bad (~2nd priority). XSS, plaintext admin panel, etc., are critical but lower than instant full-domain compromise.

### Why #43 = C (Containment)
The events already constitute detection. The NEXT phase is containment (isolate the host) BEFORE eradication. Preparation is too early; recovery is too late.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 43–45 | 🏆 Excellent — proceed to Practice Exam 2 |
| 38–42 | ✅ On track. Review wrong answers, then continue Modules 6–10 |
| 32–37 | ⚠️ Re-study weak modules; redo this exam in 3 days |
| <32 | 🔁 Revisit Modules 1–5 in full |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it
2. Re-read that module's Reading.md section
3. Add an Anki/flashcard for the concept
4. Try the question again in 3 days

---

➡️ When ready: Continue to Modules 6–10, then [Practice Exam 2](./Practice-Exam-2.md).
