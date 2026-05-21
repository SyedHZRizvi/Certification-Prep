# ✏️ Module 5 Quiz: Vulnerabilities & Attacks

> **Instructions:** 28 questions, no notes. Aim for 23/28.

---

## Questions

### Q1. Malware that self-replicates across a network without user interaction is a:
A. Virus
B. Worm
C. Trojan
D. Rootkit

---

### Q2. A user installs a "free PDF reader" that secretly opens a reverse shell. The malware family is:
A. Worm
B. Trojan / RAT
C. Logic bomb
D. Cryptominer

---

### Q3. Malware hiding in the boot sector / firmware that loads before the OS is a:
A. Worm
B. Rootkit
C. Bootkit
D. Adware

---

### Q4. Modern ransomware groups practice "double extortion" by:
A. Demanding two payments
B. Encrypting AND exfiltrating data, threatening leak if unpaid
C. Compromising two organizations simultaneously
D. Using two cryptographic algorithms

---

### Q5. The PRIMARY fix for SQL injection is:
A. Input length restrictions
B. Disabling SQL on the web server
C. Parameterized queries / prepared statements
D. Encrypting the database at rest

---

### Q6. A forum stores a comment containing `<script>steal()</script>` which then runs in every viewer's browser. This is:
A. SQL injection
B. Reflected XSS
C. Stored XSS
D. CSRF

---

### Q7. An attacker tricks a logged-in admin's browser into making a fund-transfer request to the bank app. The attack is:
A. CSRF
B. XSS
C. SSRF
D. SQLi

---

### Q8. A vulnerable web app fetches a URL from a user-supplied parameter. The attacker uses this to make the server request `http://169.254.169.254/latest/meta-data/`. The attack is:
A. SSRF
B. XSS
C. Directory traversal
D. SQLi

---

### Q9. Sending `../../../etc/passwd` in a URL parameter is:
A. SQLi
B. Directory traversal
C. SSRF
D. XSS

---

### Q10. A buffer overflow exploits:
A. Network congestion
B. Writing past the end of a fixed-size memory buffer
C. Symmetric key reuse
D. DNS cache size

---

### Q11. TOCTOU (Time-Of-Check vs Time-Of-Use) is a:
A. Phishing technique
B. Race condition
C. Cryptographic flaw
D. Compliance gap

---

### Q12. A normal user exploits a kernel bug to become root. This is:
A. Horizontal privilege escalation
B. Vertical privilege escalation
C. Lateral movement
D. Privilege containment

---

### Q13. A SYN flood attempts to:
A. Crash the application code
B. Exhaust the server's half-open connection table
C. Spoof DNS records
D. Brute-force credentials

---

### Q14. A DNS amplification attack relies on:
A. The attacker controlling root DNS
B. Spoofed source IPs + DNS servers returning much larger responses than the query
C. Compromising the recursive resolver
D. Encrypting DNS traffic

---

### Q15. A switch is forced into hub-like behavior by overflowing its CAM table. This attack is:
A. ARP poisoning
B. VLAN hopping
C. MAC flooding
D. STP root takeover

---

### Q16. An attacker on the same LAN tells everyone that the gateway's IP belongs to the attacker's MAC, then captures all traffic. This is:
A. ARP poisoning (precursor to on-path)
B. DNS hijacking
C. VLAN hopping
D. Replay attack

---

### Q17. CompTIA's current term for "man-in-the-middle" is:
A. Replay attack
B. Bait-and-switch
C. On-path attack
D. Side-channel attack

---

### Q18. Sending forged deauth/disassoc frames over Wi-Fi to kick clients off is:
A. Evil twin
B. Disassociation attack
C. WPS attack
D. Bluejacking

---

### Q19. An attacker sets up an AP with the same SSID as the corporate network, but stronger signal, hoping clients auto-connect. This is:
A. Rogue AP
B. Evil twin
C. Karma attack
D. Both A and B are reasonable; "evil twin" is the most specific

---

### Q20. Trying ONE password (`Summer2024`) against 5,000 different usernames is:
A. Brute force
B. Dictionary attack
C. Password spraying
D. Credential stuffing

---

### Q21. Reusing username/password pairs from a Yahoo breach against your bank is:
A. Brute force
B. Credential stuffing
C. Password spraying
D. Rainbow table

---

### Q22. Pass-the-Hash works because:
A. Windows authentication accepts the NTLM hash directly without needing the plaintext password
B. The hash is reversible
C. The KDC issues a Golden Ticket
D. RADIUS forwards the hash

---

### Q23. A spear-phishing email targeting the CFO specifically is:
A. Smishing
B. Whaling
C. Watering hole
D. Pretexting

---

### Q24. An attacker compromises a niche industry news site that most of the target company's employees visit. This is:
A. Typosquatting
B. Watering hole attack
C. Smishing
D. Pharming

---

### Q25. Registering `goggle.com` to capture mistyped traffic to `google.com` is:
A. Typosquatting
B. SSRF
C. DNS poisoning
D. Brand impersonation only

---

### Q26 (Scenario). A SOC sees: 1) 100k login attempts at user `admin` from one IP in 60 seconds; 2) The account is not locked because the server has no lockout policy. The attack is:
A. Credential stuffing
B. Brute force
C. Password spraying
D. Pass-the-hash

---

### Q27 (Scenario). Investigating a breach, you find every file encrypted with extension `.locked`, a ransom note, AND evidence of 80 GB of data transferred outbound to an unknown IP 3 days ago. This is:
A. Single-extortion ransomware
B. Double-extortion ransomware
C. Wiper malware
D. Cryptojacker

---

### Q28 (Scenario). Pen-tester reports your web app accepts `id=42 UNION SELECT username, password FROM users--` in a query parameter and returns data. The MOST specific finding is:
A. Improper error handling
B. SQL injection (UNION-based)
C. Insecure direct object reference
D. Broken authentication

---

## 🎯 Answers + Explanations

### Q1: **B. Worm**
Self-replicating + network spread, no user action = worm. Viruses need user interaction; Trojans don't self-replicate.

### Q2: **B. Trojan / RAT**
Disguised legit app delivering a backdoor / remote access tool.

### Q3: **C. Bootkit**
Boot-sector / firmware persistence. Rootkit is OS-level; bootkit is below the OS.

### Q4: **B. Encrypt + exfiltrate + threat to leak**
Double extortion = encrypt + threaten public leak. Single-extortion is just encrypt-and-demand.

### Q5: **C. Parameterized queries / prepared statements**
Input filtering helps but is bypassable; parameterized queries make injection structurally impossible.

### Q6: **C. Stored XSS**
The malicious script is stored on the server and runs for every viewer.

### Q7: **A. CSRF**
Cross-Site Request Forgery — victim's authenticated browser makes a state-changing request without their consent.

### Q8: **A. SSRF**
`169.254.169.254` is the AWS/Azure cloud metadata endpoint — classic SSRF target.

### Q9: **B. Directory traversal**
The `../../` pattern is the giveaway.

### Q10: **B. Writing past buffer bounds**
Classic memory corruption.

### Q11: **B. Race condition**
The "check" and "use" can be interleaved by another thread.

### Q12: **B. Vertical privilege escalation**
Gaining higher rights = vertical. Same-level user-to-user = horizontal.

### Q13: **B. Exhaust half-open connection table**
SYN flood leaves connections half-open in the TCP backlog.

### Q14: **B. Spoofed source IPs + DNS responses larger than queries**
Reflection (spoofed src) + amplification (response > request) is the dual definition.

### Q15: **C. MAC flooding**
Overflow CAM → switch fails open → broadcasts traffic to all ports.

### Q16: **A. ARP poisoning**
Forged ARP replies link gateway IP to attacker MAC → traffic flows through attacker (on-path).

### Q17: **C. On-path attack**
Sec+ (and current industry) prefers "on-path" over MITM.

### Q18: **B. Disassociation attack**
Forged 802.11 deauth/disassoc frames force clients off the AP.

### Q19: **D. Both reasonable; evil twin is the most specific**
"Rogue AP" describes any unauthorized AP. "Evil twin" specifies impersonation of a legit SSID.

### Q20: **C. Password spraying**
One password across many usernames — avoids per-user lockout.

### Q21: **B. Credential stuffing**
Reusing stolen creds across services.

### Q22: **A. Windows accepts the hash directly**
NTLM auth uses the hash; possessing the hash = possessing the credential. Defense: disable NTLM, Credential Guard.

### Q23: **B. Whaling**
Spear phishing of an executive = whaling.

### Q24: **B. Watering hole**
Compromise a site where the target group congregates.

### Q25: **A. Typosquatting**
Registering a misspelled domain.

### Q26: **B. Brute force**
Many attempts on ONE user = brute force. Spraying would distribute across users. Stuffing would use known pairs from breaches.

### Q27: **B. Double-extortion ransomware**
Encryption + prior data exfil + leak threat = double extortion (modern norm).

### Q28: **B. SQL injection (UNION-based)**
The `UNION SELECT` is the classic SQLi pattern for data extraction.

---

## 📊 Score Yourself

- 27–28/28 → 🏆 Attack vocabulary nailed. Take Practice Exam 1.
- 23–26/28 → ✅ Strong. Hit the misses, then Practice Exam 1.
- 18–22/28 → ⚠️ Re-read malware + web attack sections.
- <18/28 → 🔁 Restart Module 5.

---

## 🃏 Add To Your Flashcards

- Each malware type with defining trait
- OWASP Top 10 names
- SQLi / XSS / CSRF / SSRF — what each does + best fix
- Brute / dictionary / spraying / stuffing — one-line tell
- Each social engineering type by channel
- The 7 psychological principles

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md). After that you've completed modules 1–5 → take **[Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)** before moving to Module 6.
