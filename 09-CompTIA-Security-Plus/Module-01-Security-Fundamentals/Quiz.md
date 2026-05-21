# ✏️ Module 1 Quiz: Security Fundamentals

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. A ransomware attack encrypts every file on the file server. Which CIA property is MOST directly violated?
A. Confidentiality
B. Integrity
C. Availability
D. Non-repudiation

---

### Q2. A bank's transaction log is altered after the fact to hide a transfer. Which property failed?
A. Confidentiality
B. Integrity
C. Availability
D. Authentication

---

### Q3. Which of the following is NOT part of the CIA triad?
A. Confidentiality
B. Integrity
C. Authentication
D. Availability

---

### Q4. Non-repudiation guarantees:
A. The message was not altered in transit
B. The sender cannot later deny sending the message
C. Only the intended recipient can read the message
D. The message reaches the destination on time

---

### Q5. In the AAA model, what does the third A stand for?
A. Authorization
B. Accounting
C. Auditing only
D. Access

---

### Q6. A user enters their username, password, and a code from their authenticator app. This is:
A. Authorization
B. Authentication
C. Accounting
D. Identification

---

### Q7. After login, the system checks whether the user can view /payroll. This is:
A. Authentication
B. Authorization
C. Identification
D. Auditing

---

### Q8. In Zero Trust, which component makes the access decision based on policy and risk signals?
A. Policy Enforcement Point (PEP)
B. Policy Administrator (PA)
C. Policy Engine (PE)
D. Implicit Trust Zone

---

### Q9. Which Zero Trust component sits in the **data plane** and physically allows or blocks the request?
A. Policy Engine
B. Policy Administrator
C. Policy Enforcement Point
D. Threat Scope Reduction

---

### Q10. "Adaptive Identity" in Zero Trust means:
A. The user can change their identity at runtime
B. Authentication strength scales with context (device, location, behavior)
C. The PEP rewrites the identity token
D. Multiple identities are merged into one

---

### Q11. An employee sees a sign that says "Premises monitored 24/7 by CCTV." Even if no camera exists, what is the sign?
A. Preventive control
B. Corrective control
C. Deterrent control
D. Compensating control

---

### Q12. A motion sensor that triggers a SIEM alert when someone enters the server room after hours is:
A. Preventive
B. Detective
C. Deterrent
D. Directive

---

### Q13. The company's Acceptable Use Policy (AUP) is which type of control?
A. Technical
B. Managerial
C. Operational
D. Physical

---

### Q14. A biometric door lock at the data center is best classified as:
A. Technical / Preventive
B. Physical / Preventive
C. Physical / Deterrent
D. Operational / Detective

---

### Q15. The team cannot patch a legacy SCADA system without breaking it, so they air-gap it and add extra logging. The extra logging is a:
A. Preventive control
B. Compensating control
C. Directive control
D. Corrective control

---

### Q16. Antivirus software quarantines a malicious file mid-execution. The quarantine action is BEST classified as:
A. Preventive
B. Corrective
C. Detective
D. Deterrent

---

### Q17. A CISO wants to know how the current security program compares to ISO 27001 requirements. The appropriate exercise is a:
A. Penetration test
B. Gap analysis
C. Tabletop exercise
D. Risk register update

---

### Q18. Which of the following is a **Directive** control?
A. A firewall rule blocking port 23
B. A poster reminding employees not to tailgate
C. Restoring a server from backup
D. A camera recording the lobby

---

### Q19. Before deploying a change to production, a team writes down the steps to undo it if the change fails. This is the:
A. Maintenance window
B. Impact analysis
C. Backout plan
D. Standard Operating Procedure

---

### Q20. Which body typically approves a high-risk production change?
A. SOC analyst
B. Change Advisory Board (CAB)
C. Help desk
D. CFO

---

### Q21. A user complains that they were granted access yesterday but not today, even though nothing about *them* changed. The Zero Trust system likely re-evaluated:
A. Their MAC address only
B. The risk signals via the Policy Engine
C. The Implicit Trust Zone size
D. The Policy Administrator's name

---

### Q22. Which of the following BEST illustrates "least privilege" combined with Zero Trust's "Threat Scope Reduction"?
A. Giving every employee Domain Admin to simplify support
B. Restricting each service account to only the APIs it needs
C. Sharing one privileged account among the SOC team
D. Disabling logging to reduce noise

---

### Q23. A scenario: An attacker forges an email pretending to be the CFO, instructing finance to wire $50,000. Finance wires the money. Which security property would have BEST prevented the CFO from later denying their (fake) instructions had they been real?
A. Confidentiality
B. Availability
C. Non-repudiation (via digital signatures on email)
D. Integrity of the SMTP header only

---

### Q24. Which sequence reflects the correct access lifecycle?
A. Authorization → Authentication → Identification → Accounting
B. Identification → Authentication → Authorization → Accounting
C. Accounting → Identification → Authentication → Authorization
D. Authentication → Identification → Accounting → Authorization

---

### Q25. The control category for **mandatory security awareness training** delivered annually is BEST described as:
A. Preventive (it teaches users to avoid phishing)
B. Corrective
C. Directive only
D. Compensating

---

### Q26. A small company has no SIEM and cannot afford one. They implement weekly manual log reviews instead. The manual reviews function as a:
A. Preventive control
B. Compensating control
C. Directive control
D. Physical control

---

## 🎯 Answers + Explanations

### Q1: **C. Availability**
Files exist (Integrity may be intact post-decryption) and may or may not be exfiltrated (Confidentiality is separate), but legitimate users cannot *use* the data → Availability is hit first and hardest. Modern ransomware also threatens C with double-extortion leaks, but the primary CIA hit is A.

### Q2: **B. Integrity**
Altering data after the fact = integrity failure. Hashing and digital signatures detect this.

### Q3: **C. Authentication**
CIA = Confidentiality, Integrity, Availability. Authentication is part of AAA, not CIA.

### Q4: **B. The sender cannot later deny sending the message**
That's the textbook definition. Achieved with digital signatures (private key only sender has).

### Q5: **B. Accounting**
AAA = Authentication, Authorization, **Accounting** (also called auditing). "Auditing only" is too narrow.

### Q6: **B. Authentication**
Username/password + TOTP code = proving identity = authentication. Multiple factors = MFA, but the *act* is authentication.

### Q7: **B. Authorization**
Deciding what an authenticated user is allowed to do = authorization.

### Q8: **C. Policy Engine (PE)**
The PE evaluates policy + signals (device, identity, behavior) and produces the allow/deny decision. The PA translates the decision; the PEP enforces it.

### Q9: **C. Policy Enforcement Point**
The PEP lives in the **data plane** (where traffic flows) and physically lets traffic through or blocks it. PE and PA live in the control plane.

### Q10: **B. Authentication strength scales with context**
Adaptive Identity uses signals like device posture, geolocation, time, behavior to dial up or down friction. Logging in from your usual laptop at noon = low friction; from a new device in another country at 3 a.m. = high friction or deny.

### Q11: **C. Deterrent control**
Deterrents try to *discourage* the attacker from acting. The sign doesn't physically stop anyone — it changes their decision. If the camera actually existed AND recorded, that recording would be a detective control.

### Q12: **B. Detective**
The sensor *spots* the event; it doesn't prevent it. Detection generates the alert for response.

### Q13: **B. Managerial** (Administrative)
Policies and procedures are managerial controls.

### Q14: **B. Physical / Preventive**
The lock physically prevents entry (preventive), and it's a physical object (physical type). A biometric *reader* is both — the physical hardware AND the logical decision.

### Q15: **B. Compensating control**
Compensating controls are alternatives used when the primary control (patching) isn't feasible.

### Q16: **B. Corrective**
The malware already executed (detection happened first). Quarantine *corrects* — undoes damage and removes the threat. Pure prevention would have blocked execution.

### Q17: **B. Gap analysis**
Comparing current posture to a target framework = gap analysis. Output is a remediation roadmap.

### Q18: **B. A poster reminding employees not to tailgate**
Directive controls tell people what to do. The poster directs behavior. The firewall rule is technical/preventive; the restore is corrective; the camera is detective (or deterrent if visible).

### Q19: **C. Backout plan**
Backout plan = how to revert. Written *before* the change, used *after* a failure.

### Q20: **B. Change Advisory Board (CAB)**
CAB reviews and approves changes. SOC analysts run security ops; help desk handles tickets; CFO signs budgets.

### Q21: **B. The risk signals via the Policy Engine**
Zero Trust re-evaluates continuously. New signals (new device, geolocation jump, threat-intel match on their token) cause the PE to deny on the next request.

### Q22: **B. Restricting each service account to only the APIs it needs**
Threat Scope Reduction + least privilege = minimize what any compromised principal can reach. Shared privileged accounts and Domain Admin sprawl are textbook anti-patterns.

### Q23: **C. Non-repudiation (via digital signatures on email)**
S/MIME or PGP signatures bind the message to the sender's private key. A forged email lacking the CFO's signature would be detected; a genuine signed email could not later be repudiated.

### Q24: **B. Identification → Authentication → Authorization → Accounting**
Claim → prove → permit → log. The full lifecycle.

### Q25: **A. Preventive**
Awareness training prevents (reduces likelihood of) successful phishing. It's also operational by type. "Directive only" misses the prevention angle — Sec+ usually classifies training as preventive.

### Q26: **B. Compensating control**
They cannot afford the primary control (SIEM) so they substitute manual reviews. That substitution is by definition a compensating control.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 1 mastered. Onward to crypto.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the control-classification and Zero Trust sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- CIA + non-repudiation (4 cards, one per property)
- AAA + Identification (4 cards)
- Zero Trust components: PE, PA, PEP, Adaptive Identity, Threat Scope Reduction
- Control TYPES (4) and CATEGORIES (6) — make a card per cell of the 4×6 grid
- Change management terms: CAB, backout, impact analysis, CMDB

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2 — Cryptography & PKI](../Module-02-Cryptography-PKI/Reading.md)
