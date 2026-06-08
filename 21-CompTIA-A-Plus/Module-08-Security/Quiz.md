# ✏️ Module 8 Quiz: Security Fundamentals

> Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Which combination is TRUE multi-factor authentication? *(Apply)*
A. Password + PIN
B. Password + security questions
C. Password + TOTP code from authenticator app
D. Password + username

---

### Q2. The 7-step malware removal process begins with: *(Remember)*
A. Quarantine the system
B. Investigate and verify malware symptoms
C. Disable System Restore
D. Educate the user

---

### Q3. The step in malware removal where System Restore is disabled exists BECAUSE: *(Analyze)*
A. System Restore is slow
B. Restore points can contain infected files; a later restore can reintroduce malware
C. Microsoft removed it
D. UAC blocks it

---

### Q4. A user receives a text message claiming to be their bank and asking them to click a link. This is: *(Apply)*
A. Phishing
B. Smishing
C. Vishing
D. Whaling

---

### Q5. WPA3's improvement over WPA2 is primarily: *(Understand)*
A. Wider Wi-Fi channels
B. SAE handshake (Simultaneous Authentication of Equals) resists offline brute-force on captured handshakes
C. Removes AES encryption
D. Disables 5 GHz band

---

### Q6. To protect data on a stolen Windows laptop, the appropriate control is: *(Apply)*
A. BitLocker (full-disk encryption) tied to TPM 2.0
B. EFS only
C. NTFS without encryption
D. Strong password only

---

### Q7. The Linux equivalent of BitLocker is: *(Remember)*
A. EFS
B. LUKS
C. BitDefender
D. APFS

---

### Q8. A user reports their files have a `.locked` extension and a ransom note appeared. The IMMEDIATE first action: *(Apply)*
A. Pay the ransom
B. Disconnect from network (isolate); do not reboot; notify SOC/IR
C. Reboot the system
D. Email IT and wait

---

### Q9. Which control prevents tailgating into a secure data-center area? *(Remember)*
A. Camera
B. Mantrap / access control vestibule
C. Privacy filter
D. UAC

---

### Q10. The 3 categories of authentication factors are: *(Remember)*
A. Strong, medium, weak
B. Know, have, are
C. User, admin, guest
D. AES, RSA, ECC

---

### Q11. A rootkit is uniquely difficult to remove because: *(Understand)*
A. It hides at the kernel level, often beyond OS visibility, typically requires reimage
B. It only affects mobile devices
C. It always uses port 80
D. It is encrypted

---

### Q12. The MOST appropriate response to a phishing email a user already clicked: *(Apply)*
A. Ignore, it's the user's mistake
B. Revoke sessions, reset password, re-enroll MFA, check for inbox-forwarding rules, scan endpoint
C. Reformat the user's laptop only
D. Replace the network cable

---

### Q13. Account lockout policy is typically set to: *(Apply)*
A. 1 failed attempt
B. 3–5 failed attempts, lockout duration 15–30 minutes
C. 100 attempts, 1 second lockout
D. No lockout

---

### Q14. The principle of LEAST PRIVILEGE means: *(Understand)*
A. Give every user admin access for convenience
B. Grant the minimum permissions required for the role/task
C. Disable all access
D. Share admin accounts

---

### Q15. A "Run as administrator" right-click in Windows is needed BECAUSE: *(Understand)*
A. UAC prevents inadvertent privileged operations from standard processes
B. Windows is slow
C. Drivers don't work in standard mode
D. The mouse needs admin

---

### Q16. EFS (Encrypting File System) on Windows is: *(Remember)*
A. Full-disk encryption
B. Per-file/folder encryption tied to a user's account
C. Network encryption
D. Cloud-only encryption

---

### Q17. A user's BitLocker recovery key would be needed when: *(Apply)*
A. They forget their daily password
B. They reset BIOS/UEFI settings (TPM mismatch) or fail authentication too many times, triggering recovery
C. The computer is off
D. The display is broken

---

### Q18. The MOST appropriate Wi-Fi security for a 2026 home network with modern devices: *(Apply)*
A. WEP
B. WPA
C. WPA2-AES at minimum, ideally WPA3
D. Open / no security

---

### Q19. WPA2-Enterprise differs from WPA2-Personal in that it uses: *(Understand)*
A. AES instead of TKIP
B. 802.1X with a RADIUS server for per-user authentication
C. A shorter password
D. Only 2.4 GHz

---

### Q20. The PRIMARY defense against a USB-borne malware attack at an office is: *(Analyze)*
A. Use longer passwords
B. Disable AutoRun + group-policy restrict USB execution + EDR scanning of removable media
C. Replace all keyboards
D. Disable Wi-Fi

---

### Q21. A user reports a USB stick "auto-runs" software when inserted. The MOST appropriate response: *(Apply)*
A. Allow it, convenient
B. Disable AutoRun via Group Policy; scan the USB with AV before any use
C. Reformat the user's PC
D. Replace the USB controller

---

### Q22. Pharming differs from phishing in that pharming: *(Understand)*
A. Uses SMS
B. Redirects users via DNS poisoning / typo-squatted domains to a fake site
C. Uses voice calls
D. Targets executives only

---

### Q23. Antivirus + EDR combined provide: *(Evaluate)*
A. Worse coverage than AV alone
B. Layered detection, AV catches known signatures; EDR adds behavioral/forensic visibility for unknown/fileless threats
C. Only signature-based detection
D. No advantage over the other

---

### Q24. To check if a password has been exposed in a public breach, you can use: *(Apply)*
A. The phone book
B. Have I Been Pwned (haveibeenpwned.com)
C. A registry editor
D. Defrag

---

### Q25. A user's laptop was stolen at the airport. It had BitLocker enabled with a recovery key escrowed to the company's Azure AD. What's the recoverable risk? *(Evaluate)*
A. All data is exposed
B. Data is encrypted at rest; without password/key, the disk contents are protected. The bigger risk is any cached credentials/sessions if the device was logged in.
C. The laptop's OS is exposed but not files
D. None, full-disk encryption protects everything

---

### Q26. Design challenge: A 60-person law firm needs to prevent the next "CFO clicks a phishing link" from being catastrophic. The MINIMUM viable architecture: *(Create)*

> *Create-level note:* you are picking the *combination* of layered controls.
A. Strong passwords only
B. **MFA on all accounts** + Conditional Access (geo + device compliance) + phishing-resistant MFA for executives (FIDO2) + simulated-phishing training + DMARC/SPF/DKIM + outbound DLP
C. Disable email entirely
D. Replace all laptops with desktops

---

## 🎯 Answers + Explanations

### Q1: **C. Password + TOTP**
Password = "know", TOTP = "have" (phone). Different factor categories = MFA. Password + PIN are both "know" (NOT MFA). Password + security questions are also both "know".

### Q2: **B. Investigate and verify**
Step 1: confirm symptoms actually point to malware before escalating.

### Q3: **B. Restore points can contain infected files**
Disabling System Restore prevents accidentally rolling back to an infected state.

### Q4: **B. Smishing**
SMS phishing = smishing. Voice = vishing. Email = phishing.

### Q5: **B. SAE handshake**
WPA3's SAE (Dragonfly) replaces the WPA2 4-way PSK handshake, making offline brute-force much harder.

### Q6: **A. BitLocker tied to TPM 2.0**
Full-disk encryption. EFS protects individual files but not the whole disk. NTFS alone is no encryption.

### Q7: **B. LUKS**
Linux Unified Key Setup. Full-disk encryption for Linux.

### Q8: **B. Disconnect; do not reboot; notify**
Isolation prevents lateral spread. Don't reboot, memory may have forensic value.

### Q9: **B. Mantrap / access control vestibule**
Two-door entry; second opens only after first closes. Eliminates tailgating.

### Q10: **B. Know, have, are**
The classic 3 factor categories. Plus modern additions: somewhere you are, something you do.

### Q11: **A. Hides at kernel level, often requires reimage**
Rootkits operate beneath the OS, hiding their presence. Often only reliable removal is reimage.

### Q12: **B. Revoke sessions + reset password + re-enroll MFA + check forwarding rules + scan**
The full incident-response playbook for credential theft.

### Q13: **B. 3–5 attempts, 15–30 min lockout**
Standard balance between security and usability.

### Q14: **B. Minimum permissions for the role/task**
A cornerstone security principle. Reduces blast radius of any single compromise.

### Q15: **A. UAC prevents inadvertent privileged operations**
The whole point of UAC. Standard process = no privilege; elevation requires explicit consent.

### Q16: **B. Per-file/folder encryption tied to user account**
EFS is granular (file-level), not volume-level. Different from BitLocker.

### Q17: **B. TPM mismatch or excessive failed auth**
Recovery key is used when TPM doesn't recognize the boot environment (BIOS reset, OS change) or after lockout.

### Q18: **C. WPA2-AES minimum, ideally WPA3**
WEP and WPA are broken. WPA2 (AES-CCMP) was the standard; WPA3 is the modern choice.

### Q19: **B. 802.1X with RADIUS**
Enterprise mode = per-user authentication via 802.1X / EAP / RADIUS, not a shared PSK.

### Q20: **B. Disable AutoRun + GPO + EDR scanning**
Layered: prevent execution, prevent the action, detect the threat.

### Q21: **B. Disable AutoRun via GPO; scan**
AutoRun should be off by default in modern Windows for security. GPO can enforce this.

### Q22: **B. DNS poisoning / typo-squatted domains**
Pharming redirects you to a fake site even when you type the correct URL.

### Q23: **B. Layered detection (AV signatures + EDR behavioral)**
Defense in depth. AV is necessary but not sufficient against modern threats.

### Q24: **B. Have I Been Pwned**
Free service; check email or password against public breaches.

### Q25: **B. Data encrypted at rest; risk is logged-in sessions and cached creds**
The disk is safe. The greater risk is whatever was cached in memory before theft.

### Q26: **B. MFA + Conditional Access + FIDO2 for execs + training + email auth + DLP**
Layered defense. No single control is sufficient. This is what enterprises actually deploy.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Security fundamentals locked.
- 22–24/26 → ✅ Solid. Drill the 7-step removal process.
- 18–21/26 → ⚠️ Re-read the malware + social-engineering sections.
- <18/26 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- 7-step malware removal IN ORDER
- 3 authentication factor categories
- BitLocker / FileVault / LUKS / EFS, what each covers
- WPA2-AES vs WPA3-SAE
- WPA2/3-Enterprise = 802.1X + RADIUS
- Phishing / Smishing / Vishing / Whaling / Pharming
- Mantrap = anti-tailgating
- "Run as administrator" + UAC
- Least privilege

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 9, Software Troubleshooting](../Module-09-Software-Troubleshooting/Reading.md)
