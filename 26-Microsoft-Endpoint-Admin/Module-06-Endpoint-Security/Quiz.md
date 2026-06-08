# ✏️ Module 6 Quiz: Endpoint Security & Defender for Endpoint

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Which Microsoft Defender for Endpoint plan includes EDR? *(Remember)*
A. Plan 1
B. Plan 2
C. Both Plan 1 and Plan 2
D. Defender Antivirus standalone

---

### Q2. The three ASR rule modes are: *(Remember)*
A. On / Off / Monitor
B. Audit / Block / Warn
C. Allow / Deny / Audit
D. Pass / Fail / Skip

---

### Q3. The recommended ASR rule rollout pattern is: *(Apply)*
A. Block mode on day 1 for all rules
B. Audit first, monitor 7–14 days, then Block
C. Warn mode permanently
D. Off mode until incident

---

### Q4. BitLocker recovery keys for Intune-managed Entra-joined devices are escrowed to: *(Remember)*
A. The user's Entra account
B. The device object in Microsoft Entra ID
C. A local file
D. Active Directory only

---

### Q5. Silent BitLocker enablement: *(Understand)*
A. Encrypts the OS drive with user prompts for PIN setup
B. Encrypts automatically and escrows recovery key without user prompts
C. Requires manual recovery key paper backup
D. Only works on Surface devices

---

### Q6. The ASR rule that blocks Office applications from creating child processes specifically stops: *(Apply)*
A. Word from launching PowerShell or cmd.exe (canonical macro-malware pattern)
B. Excel from opening other workbooks
C. Outlook from displaying emails
D. PowerPoint from saving files

---

### Q7. "EDR in block mode" is the right configuration when: *(Apply)*
A. You have no AV installed
B. A third-party AV is the primary engine but you want Defender's response capabilities
C. You want to disable Defender entirely
D. You're using ConfigMgr only

---

### Q8. Microsoft Defender for Cloud Apps is a: *(Remember)*
A. Endpoint antivirus
B. Cloud Access Security Broker (CASB) for SaaS apps
C. Replacement for Conditional Access
D. Email gateway

---

### Q9. Which feature prevents users + malware from disabling Defender locally? *(Remember)*
A. SmartScreen
B. Tamper protection
C. Network protection
D. ASR

---

### Q10. Yes/No, Defender for Endpoint. *(Understand)*

**S1:** Plan 1 includes Attack Surface Reduction rules.
**S2:** Plan 2 includes Advanced Hunting with KQL.
**S3:** Plan 1 includes Automated Investigation & Response.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. No / No / Yes

---

### Q11. The Block at First Sight (BAFS) feature: *(Understand)*
A. Submits unknown files to cloud sandbox for analysis
B. Blocks all unknown apps
C. Stops first-time PowerShell execution
D. Blocks the first network connection

---

### Q12. **Order these steps** to roll out a new ASR rule (Block Office child processes): *(Apply)*

1. Add exclusions for legitimate apps if needed
2. Configure rule in Audit mode for pilot group
3. Monitor Advanced Hunting / Defender events for 7–14 days
4. Switch to Block mode for pilot
5. Expand to broader groups in waves

A. 1 → 2 → 3 → 4 → 5
B. 2 → 3 → 1 → 4 → 5
C. 4 → 3 → 2 → 1 → 5
D. 5 → 4 → 3 → 2 → 1

---

### Q13. Controlled Folder Access protects against: *(Understand)*
A. Ransomware modifying user folders (Documents, Pictures)
B. USB-based malware
C. Phishing emails
D. Browser zero-days

---

### Q14. Yes/No, BitLocker. *(Understand)*

**S1:** XTS-AES 256 is more secure than 128.
**S2:** "Used Space Only" encryption is faster than full disk for new devices.
**S3:** Deleting an Intune device record automatically deletes the recovery key.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / No / Yes
D. Yes / No / No

---

### Q15. Windows LAPS rotates the local admin password and stores it where (for Entra-joined)? *(Remember)*
A. Local TPM
B. Microsoft Entra device object
C. Active Directory
D. User's password manager

---

### Q16. Microsoft Sentinel ingests Defender for Endpoint alerts for: *(Understand)*
A. SIEM correlation across alert sources, playbook automation, long-term retention
B. Replacing Defender for Endpoint
C. Antivirus signature updates
D. App deployment

---

### Q17. The Web Content Filtering feature requires: *(Remember)*
A. Plan 1
B. Plan 2
C. Defender Antivirus standalone
D. No license

---

### Q18. Security baselines in Intune are: *(Understand)*
A. Microsoft-published pre-configured security settings you can deploy
B. Compliance policies only
C. Replacement for Group Policy
D. ARM templates

---

### Q19. The canonical secure default for Windows Firewall is: *(Apply)*
A. Allow all inbound
B. Block all inbound by default, allow specific apps
C. Disable the firewall on managed devices
D. Allow inbound on the Public profile only

---

### Q20. To detect Office macros calling Win32 APIs (a credential-theft signal), enable: *(Apply)*
A. SmartScreen
B. Block Win32 API calls from Office macros ASR rule
C. Network protection
D. Web content filtering

---

### Q21. Defender Antivirus is included with: *(Remember)*
A. Windows 10/11 and Windows Server 2016+ (built-in)
B. Only Defender for Endpoint Plan 1
C. Only enterprise SKUs
D. None, must be purchased separately

---

### Q22. Yes/No, EDR. *(Evaluate)*

**S1:** Live response lets an admin run scripts on the device remotely.
**S2:** Device isolation cuts network access while keeping MDE connectivity.
**S3:** Process tree visualization is part of EDR investigation.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. No / No / Yes

---

### Q23. Smart App Control is the cloud-driven successor to: *(Remember)*
A. SmartScreen
B. AppLocker
C. Defender Antivirus
D. BitLocker

---

### Q24. A non-Microsoft third-party AV is in primary mode. Defender runs in passive mode. EDR is in block mode. What happens when malicious behavior is detected? *(Analyze)*
A. Nothing, Defender is passive
B. Defender's EDR enforcement blocks the malicious artifact
C. The third-party AV always wins
D. Both block simultaneously, causing conflict

---

### Q25. Norsk Hydro's post-LockerGoga architecture standardized on: *(Evaluate)*
A. Defender for Endpoint Plan 1 only
B. MDE Plan 2 + EDR in block mode + ASR Block + BitLocker silent enablement + security baselines + Sentinel
C. Third-party AV with no Microsoft tooling
D. AppLocker only

---

## 🎯 Answers + Explanations

### Q1: **B. Plan 2**
EDR is the Plan 2 differentiator. Plan 1 = prevention/protection only.

### Q2: **B. Audit / Block / Warn**
The three ASR modes. Warn prompts the user for one-time bypass.

### Q3: **B. Audit first, monitor 7–14 days, then Block**
The canonical rollout, find false positives before enforcing.

### Q4: **B. The device object in Microsoft Entra ID**
Recovery keys live on the device record, not the user.

### Q5: **B. Encrypts automatically and escrows recovery key without user prompts**
The Intune-deployed silent enablement pattern.

### Q6: **A. Word from launching PowerShell or cmd.exe (canonical macro-malware pattern)**
The most-tested ASR rule, stops the typical macro-attack chain.

### Q7: **B. A third-party AV is the primary engine but you want Defender's response capabilities**
Defender runs passive; EDR enforces actions.

### Q8: **B. Cloud Access Security Broker (CASB) for SaaS apps**
Defender for Cloud Apps is CASB, discover/control SaaS.

### Q9: **B. Tamper protection**
Prevents disabling Defender. Always on in production.

### Q10: **A. Yes / Yes / No**
Plan 1 includes ASR (Yes). Plan 2 includes Advanced Hunting KQL (Yes). AIR is Plan 2 only (No, not Plan 1).

### Q11: **A. Submits unknown files to cloud sandbox for analysis**
BAFS submits hashes to the cloud for real-time verdicts.

### Q12: **B. 2 → 3 → 1 → 4 → 5**
Audit → monitor → exclusions → Block pilot → expand.

### Q13: **A. Ransomware modifying user folders (Documents, Pictures)**
CFA is anti-ransomware folder protection.

### Q14: **B. Yes / Yes / No**
256 > 128 in encryption strength (Yes). Used Space Only is faster (Yes). Deleting Intune device record does NOT automatically delete the recovery key, but you lose easy access (No, key may persist on Entra device object until that's purged).

### Q15: **B. Microsoft Entra device object**
LAPS for Entra-joined stores on the device object in Entra ID.

### Q16: **A. SIEM correlation across alert sources, playbook automation, long-term retention**
Sentinel is Microsoft's cloud SIEM.

### Q17: **B. Plan 2**
Web Content Filtering requires Plan 2.

### Q18: **A. Microsoft-published pre-configured security settings you can deploy**
Baselines are Microsoft's recommended configurations.

### Q19: **B. Block all inbound by default, allow specific apps**
The canonical secure firewall default.

### Q20: **B. Block Win32 API calls from Office macros ASR rule**
The specific ASR rule for this pattern.

### Q21: **A. Windows 10/11 and Windows Server 2016+ (built-in)**
Defender Antivirus is OS-native.

### Q22: **A. Yes / Yes / Yes**
All three are EDR capabilities (Plan 2).

### Q23: **B. AppLocker**
Smart App Control is the cloud-driven AppLocker successor.

### Q24: **B. Defender's EDR enforcement blocks the malicious artifact**
EDR in block mode = passive Defender + active EDR enforcement.

### Q25: **B. MDE Plan 2 + EDR in block mode + ASR Block + BitLocker silent enablement + security baselines + Sentinel**
The Norsk Hydro reference architecture.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Endpoint security mastered.
- 21–23/25 → ✅ Solid. Note your misses; move on.
- 17–20/25 → ⚠️ Re-read MDE plan matrix + ASR sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- MDE Plan 1 vs Plan 2 (memorize the line)
- 3 ASR modes + Audit → Block rollout pattern
- "Block Office child process" canonical ASR rule
- BitLocker silent enablement + Entra escrow
- EDR in block mode use case
- Defender for Cloud Apps = CASB
- Tamper protection always on
- Windows LAPS stores password on Entra device object

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 7](../Module-07-Windows-Update/Reading.md)
