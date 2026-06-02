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

## Detailed answer rationales

> Every question explained: why the correct answer is right and why each distractor is wrong. This is the differentiator from textbook-style prep — Harvard-Law-style discernment training.

**Q1. Answer: C — Availability.** **Why C is correct.** Ransomware encryption denies authorized users the *use* of their data — that is, by definition, an availability impact (NIST SP 800-12 Rev 1). **Why others are wrong.** A (Confidentiality) is hit only if there's data exfil/leak; classic ransomware encrypts in place. B (Integrity) is *not* violated — the data is unchanged once decrypted; modification was not the goal. D (Non-repudiation) is unrelated. **Exam-takeaway.** Match the CIA letter to *what the user can no longer do*: read = C, trust = I, use = A.

**Q2. Answer: C — Digital signatures.** **Why C.** Signatures bind the sender's identity (private key) to the message hash → cannot be repudiated. **Why wrong.** A (AES) provides confidentiality, not non-repudiation. B (Hashing alone) provides integrity but no sender binding. D (Tokenization) substitutes data with vault references — no sender authentication. **Takeaway.** Non-repudiation = signatures, always.

**Q3. Answer: A — PEP.** **Why A.** The Policy Enforcement Point sits in the data plane and physically allows/blocks traffic (NIST SP 800-207). **Why wrong.** B (PA) translates decisions but doesn't carry traffic. C (PE) makes the decision (control plane). D (Adaptive Identity service) supplies risk signals but doesn't gate traffic. **Takeaway.** Memorize PEP = data plane; PE/PA = control plane.

**Q4. Answer: D — Deterrent.** **Why D.** A visible-but-unmonitored camera changes attacker behavior (discouragement) — that is the textbook definition of a deterrent control. **Why wrong.** A (Detective) requires *someone watching/reviewing* — a recording that is later reviewed would be detective, but "nobody monitors" excludes this. B (Compensating) would apply only if it substituted for a primary control that wasn't feasible. C (Corrective) acts *after* an event. **Takeaway.** Visibility + no monitoring = deterrent; monitoring/recording = detective.

**Q5. Answer: A — Gap analysis.** **Why A.** Comparing current state vs ISO 27001 target *is* the definition of a gap analysis. **Why wrong.** B (Pen test) finds exploitable vulns, doesn't map to framework requirements. C (Tabletop) walks through an incident scenario. D (Risk acceptance) is a *response* to a finding, not an assessment method. **Takeaway.** Current vs target framework → gap analysis.

**Q6. Answer: D — Authenticated encryption.** **Why D.** AES-GCM (Galois/Counter Mode) combines confidentiality (CTR-mode encryption) with a built-in integrity tag (GHASH). NIST mandates AEAD modes like GCM in modern TLS. **Why wrong.** A (Conf only) is true of CBC and CTR; GCM does more. B (Integrity only) describes HMAC, not GCM. C (Key exchange) is what DHE/ECDHE do — different role entirely. **Takeaway.** "Authenticated encryption" question → GCM (or CCM in wireless).

**Q7. Answer: B — Smaller keys for equivalent security.** **Why B.** 256-bit ECC ≈ 3,072-bit RSA strength. Smaller keys → smaller handshake, less CPU, less memory — ideal for mobile/IoT. **Why wrong.** A (Always stronger) — strength depends on key size and the algorithm's resistance to discrete-log attacks; not categorically stronger. C (Symmetric) — ECC is asymmetric. D (No certificates) — ECC still requires PKI. **Takeaway.** ECC advantage = key-size efficiency.

**Q8. Answer: C — ECDHE / DHE.** **Why C.** Ephemeral key exchange generates a fresh session key per session; compromise of the long-term key does *not* allow retroactive decryption. **Why wrong.** A (Static RSA key transport) — exactly what Heartbleed proved was fatal. B (SHA-256) is a hash, unrelated to forward secrecy. D (AES-CBC) is a bulk cipher mode, not a key-exchange mechanism. **Takeaway.** PFS = ephemeral exchange = (EC)DHE.

**Q9. Answer: C — Root → Intermediate → Server.** **Why C.** Chain of trust descends from the trust anchor (root in trust store) → intermediate(s) → end-entity (server). Clients walk the chain *upward* from the server back to the root. **Why wrong.** A reverses the trust direction. B is the *verification path order*, not the *trust order* (Sec+ distinguishes). D is nonsense. **Takeaway.** Trust hierarchy: Root signs Intermediate signs Server.

**Q10. Answer: D — Cert + private key + chain, password-protected.** **Why D.** PKCS#12 (.pfx/.p12) bundles everything needed to deploy a server identity: certificate, private key, and chain, encrypted with a passphrase. **Why wrong.** A (public key only) describes basic PEM/DER cert files. B (CRL only) is a CA-published revocation list. C (OCSP response) is a single signed status check. **Takeaway.** "Cert + key + chain in one file" → PKCS#12.

**Q11. Answer: D — Too fast; need salt + key stretching.** **Why D.** Modern GPUs compute SHA-256 at billions of hashes/second, making offline brute-force trivial. Password hashing requires salt (defeats rainbow tables) + intentional slowness (PBKDF2, bcrypt, scrypt, Argon2). **Why wrong.** A (Weak hash) — SHA-256 is cryptographically strong, just inappropriate for passwords. B (Not computable on CPUs) — it absolutely is, in microseconds. C (Collisions) — SHA-256 has no practical collisions. **Takeaway.** SHA-256 for passwords = always wrong on Sec+.

**Q12. Answer: B — Sender's private key.** **Why B.** Signing uses the sender's private key (only they hold it). Verification uses the sender's *public* key. **Why wrong.** A, C, D each swap the directions. The mnemonic: "I lock with my private key (only I could have); you unlock with my public key to confirm it was me." **Takeaway.** This is the most-confused crypto fact on Sec+. **Memorize cold:** Signature = sender's private key. Confidentiality = recipient's public key.

**Q13. Answer: A — XML assertions.** **Why A.** SAML = Security Assertion Markup Language. XML by spec. **Why wrong.** B (JSON tokens), D (JWT) describe OIDC, not SAML. C (CBOR) is binary-JSON, used in IoT/COSE — not SAML. **Takeaway.** SAML → XML. OIDC → JWT/JSON.

**Q14. Answer: A — Authorization.** **Why A.** OAuth 2.0 (RFC 6749) is *delegated authorization* — letting App X access Resource Y on behalf of User Z. It does not authenticate users by itself. **Why wrong.** B (Authentication) is what OIDC adds on top. C (DNS) — wrong protocol layer. D (Key exchange) is what DH/ECDH do. **Takeaway.** OAuth = authZ. OIDC = OAuth + authN.

**Q15. Answer: A — OIDC.** **Why A.** OpenID Connect is the modern mobile-friendly, API-friendly login layer on OAuth. Returns an id_token (JWT) the app can validate. **Why wrong.** B (LDAP) is enterprise directory bind — not mobile/API-friendly. C (SAML) is browser-redirect XML — legacy for web SSO, awkward for mobile. D (Kerberos) is intra-domain, requires KDC infrastructure. **Takeaway.** Modern mobile/API login = OIDC.

**Q16. Answer: D — UDP 1812/1813.** **Why D.** Standardized in RFC 2865 (auth, port 1812) and RFC 2866 (accounting, port 1813). **Why wrong.** A (TCP 49) is TACACS+. B (UDP 53) is DNS. C (TCP 443) is HTTPS. **Takeaway.** RADIUS=UDP 1812/1813; TACACS+=TCP 49. Both AAA; only TACACS+ encrypts the entire payload.

**Q17. Answer: D — Single-factor (both "know").** **Why D.** Password and PIN are both knowledge factors. Two factors of the *same type* is *not* MFA. **Why wrong.** A (MFA) is wrong because MFA requires factors from *different categories*. B (Authorization) is unrelated. C (Three-factor) — there's no third factor here. **Takeaway.** MFA requires ≥2 *different* category factors (know/have/are/do/where).

**Q18. Answer: D — FIDO2 / passkey.** **Why D.** Origin-binding in WebAuthn prevents the cryptographic credential from being usable against a phishing site (the browser checks the domain). **Why wrong.** A (SMS) — phishable + SIM-swappable. B (Email magic link) — can be intercepted, and reused via real-time phish proxies. C (Knowledge questions) — guessable + breach-leaked. **Takeaway.** "Phishing-resistant MFA" → FIDO2 / passkeys, every time.

**Q19. Answer: B — Authentication, Authorization, Accounting.** **Why B.** Standard AAA per IETF AAA WG. **Why wrong.** All other expansions invent terms. **Takeaway.** AAA = AuthN, AuthZ, Accounting. Sec+ tests this dozens of ways.

**Q20. Answer: B — MAC.** **Why B.** Mandatory Access Control: system enforces based on clearance ≥ classification labels (Bell-LaPadula model, 1973). Owners cannot grant access regardless of clearance. **Why wrong.** A (DAC) — owner discretion, exactly the opposite. C (RBAC) — role-based, used in commercial enterprises, but doesn't enforce clearance. D (ABAC) — attribute-based, more flexible but not the military-grade model. **Takeaway.** Military/classified scenario → MAC.

**Q21. Answer: B — JIT (Just-in-Time) access.** **Why B.** JIT grants privilege only when requested, with explicit approval, time-boxed. Eliminates standing privilege. **Why wrong.** A (Standing privilege) is precisely the anti-pattern JIT replaces. C (Role swapping) is informal. D (Shadow IT) is unsanctioned tool use. **Takeaway.** Time-boxed elevation on request = JIT.

**Q22. Answer: C — Unskilled attacker.** **Why C.** Downloading public tools and firing at random targets = low skill, low resources, opportunistic — the script-kiddie profile. **Why wrong.** A (APT) implies nation-state resources + targeting. B (Nation-state) implies state sponsorship. D (Insider) requires inside access. **Takeaway.** Random target + public tools = unskilled / script kiddie.

**Q23. Answer: C — Supply-chain attack.** **Why C.** Compromising a vendor's legitimate update channel to inject backdoors = textbook supply-chain (SolarWinds, CCleaner, Kaseya). **Why wrong.** A (Phishing) requires social engineering of a user. B (Watering hole) compromises a *site* the target visits. D (Insider) requires inside access. **Takeaway.** Trojanized vendor update = supply chain.

**Q24. Answer: D — CISA AIS.** **Why D.** Automated Indicator Sharing — free, US-government-curated, cross-sector. **Why wrong.** A, B, C are all commercial paid feeds. **Takeaway.** Free + US-govt + threat intel → CISA AIS.

**Q25. Answer: B — Specific malicious IP/hash/domain.** **Why B.** IOC = Indicator of Compromise: a concrete artifact suggesting a system was/is compromised. **Why wrong.** A (Policy) is governance, not an IOC. C (SOC 2 report) is an attestation. D (Risk register) is governance/GRC. **Takeaway.** IOC = concrete artifact (IP/hash/domain/registry key).

**Q26. Answer: C — Worm.** **Why C.** Self-replicating + spreads over networks + needs no user action = worm. Examples: Conficker, WannaCry. **Why wrong.** A (Virus) needs a host file + user action. B (Trojan) doesn't self-replicate. D (Logic bomb) is event-triggered, not self-replicating. **Takeaway.** Self-replicating + network + no user = worm.

**Q27. Answer: B — Parameterized queries.** **Why B.** Prepared statements separate SQL code from data — making injection structurally impossible. **Why wrong.** A (Length limits) helps marginally; bypassable. C (Disabling SQL) breaks the app. D (WAF alone) is detection/filtering, can be bypassed; defense-in-depth is fine but parameterized queries are the *root* fix. **Takeaway.** SQLi root fix → parameterized queries / prepared statements.

**Q28. Answer: A — Stored XSS.** **Why A.** Script saved on the server (forum post) and runs for every viewer = stored/persistent XSS. **Why wrong.** B (CSRF) tricks the victim's browser into making a request, doesn't inject script. C (Reflected XSS) — script in URL/parameter, runs for the specific clicker. D (DOM XSS) is client-side DOM manipulation, doesn't touch the server. **Takeaway.** Persisted server-side script + all viewers = stored XSS.

**Q29. Answer: C — SSRF.** **Why C.** Server-Side Request Forgery — the *server* fetches the attacker-supplied URL. `169.254.169.254` is the cloud metadata endpoint (AWS/Azure), the classic SSRF target (Capital One 2019). **Why wrong.** A (Directory traversal) involves `../` patterns. B (XSS) runs in users' browsers. D (SQLi) targets DB. **Takeaway.** Server fetching attacker URLs → SSRF.

**Q30. Answer: A — Writing past a memory buffer's allocated bounds.** **Why A.** Definition of buffer overflow. **Why wrong.** B (DNS cache poisoning) is a separate network attack. C (Weak password hashing) is auth. D (SQL syntax) is injection. **Takeaway.** Memory corruption past buffer end = buffer overflow.

**Q31. Answer: D — Password spraying.** **Why D.** One password against many usernames avoids per-user lockout. **Why wrong.** A (Brute force) tries many passwords against one user. B (Dictionary) uses common-word lists, but doesn't define the per-user vs per-pass dimension. C (Credential stuffing) uses *paired* creds from breaches. **Takeaway.** One password, many users → spraying.

**Q32. Answer: D — Credential stuffing.** **Why D.** Reusing username+password *pairs* from breach dumps. **Why wrong.** A (Brute force) is per-user. B (Rainbow table) is offline hash → plaintext lookup. C (Spraying) is one-password-many-users (not pairs). **Takeaway.** Paired creds from breaches → stuffing.

**Q33. Answer: C — NTLM accepts hash directly.** **Why C.** NTLM challenge-response auth uses the password hash. Possessing the hash equals possessing the credential. Mitigation: disable NTLM, Credential Guard (LSA isolation), Kerberos-only. **Why wrong.** A (Reversible) — NTLM hashes are *one-way* but the protocol uses them directly. B (RADIUS) — wrong protocol. D (Kerberos no password) — Kerberos still has a password; PtH targets NTLM specifically. **Takeaway.** PtH defeats NTLM; defense = disable NTLM + Credential Guard.

**Q34. Answer: A — Smishing.** **Why A.** SMS phishing. **Why wrong.** B (Vishing) is voice. C (Phishing) is email. D (Whaling) targets executives via email/spear. **Takeaway.** SMS = smishing; voice = vishing.

**Q35. Answer: C — Typosquatting.** **Why C.** Registering misspelled variants of legitimate domains. **Why wrong.** A (SSRF) is server-side URL fetching. B (Pharming) is DNS-level redirection. D (DNS poisoning) is forged DNS responses. **Takeaway.** Misspelled domain registration = typosquatting.

**Q36. Answer: A — Isolate + capture forensic evidence.** **Why A.** Containment (isolation) + preserve evidence is the textbook NIST IR phase-3 action. **Why wrong.** B (Reformat) destroys evidence. C (Notify press) — wildly inappropriate. D (Update AUP) is not an IR action. **Takeaway.** First IR action on confirmed C2 → contain + preserve evidence.

**Q37. Answer: A — On-path attack.** **Why A.** CompTIA's current term replacing the older MITM (man-in-the-middle). **Why wrong.** B (Replay) re-uses captured traffic without interception. C (Side-channel) leaks via timing/power. D (Pivot) is post-compromise lateral movement. **Takeaway.** Sec+ uses "on-path" — MITM is the old term.

**Q38. Answer: B — On-path attack.** **Why B.** ARP poisoning redirects LAN traffic to the attacker, enabling interception/modification = on-path. **Why wrong.** A (SQLi) is web. C (CSRF) is browser-side. D (DNS amplification) is volumetric DDoS. **Takeaway.** ARP poisoning enables on-path; learn this combo.

**Q39. Answer: A — Black-hat developer.** **Why A.** Not a Sec+ actor category. Sec+ enumerates: nation-state, organized crime, hacktivist, insider, unskilled attacker, shadow IT. **Why wrong.** B, C, D are all standard Sec+ categories. **Takeaway.** Sec+ actor list is closed — memorize the 6.

**Q40. Answer: B — Executives.** **Why B.** Whaling = spear phishing of executives ("big fish"). **Why wrong.** A (Random users) is broad phishing. C (iPhone owners) isn't a Sec+ targeting class. D (Vendors only) is BEC-flavored but not whaling. **Takeaway.** Whaling = executives.

**Q41. Answer: B — Impact analysis + CAB approval.** **Why B.** Change management requires risk assessment + authorization *before* changes. **Why wrong.** A (Backout plan) is needed but comes after approval is in place. C (Public announcement) is not appropriate for production changes. D (Failover test) is operational, not a first formal step. **Takeaway.** First step of change → impact analysis + approval.

**Q42. Answer: A — Alternative when primary not feasible.** **Why A.** Definition of compensating control. **Why wrong.** B (Strongest) overstates. C (Managerial only) restricts incorrectly. D (Free) is unrelated to definition. **Takeaway.** Compensating = substitute for unfeasible primary.

**Q43. Answer: C — Containment.** **Why C.** Detection has happened (alerts fired); next NIST phase is containment (isolate host) before eradication/recovery. **Why wrong.** A (Prep) is pre-incident. B (D&A) just completed. D (Recovery) is later. **Takeaway.** After detection of active intrusion → containment.

**Q44. Answer: B — SQLi, SSRF, Spraying, Disassociation.** **Why B.** (a) `UNION SELECT ... FROM users--` is classic SQL injection. (b) Request to 169.254.169.254 is SSRF (cloud metadata). (c) One password across thousands of users = spraying. (d) Spoofed deauth/disassoc frames = wireless disassociation attack. **Why wrong.** A misidentifies (a) as XSS. C misidentifies (c) as brute force and (d) as evil twin. D misidentifies (a), (b), and (c). **Takeaway.** PBQ matching: learn one telltale per attack family.

**Q45. Answer: D — Remove Domain Admin from public service account.** **Why D.** A Domain Admin credential reachable from the internet = complete forest compromise on first exploit. Highest single-fix impact. **Why wrong.** A (SHA-256 → bcrypt) is critical but next priority; password compromise still requires individual targeting. B (Add CSP/encoding for XSS) is important but XSS exploitation requires victim interaction; lower impact than DA exposure. C (HTTPS on admin panel) is critical but the *credential* exposure is the worse problem — fix the privilege first, then the transport. **Takeaway.** When multiple criticals stack, ask "which single fix prevents the worst outcome on first exploit?" — privilege removal beats encryption upgrade beats traversal closure.

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
