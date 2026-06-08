# ✏️ Module 8 Quiz: Server Security & Defender

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Which Defender for Servers PLAN includes Just-In-Time (JIT) VM access? *(Remember)*
A. P1
B. P2
C. Both
D. Neither (separate product)

---

### Q2. Defender for Servers bundles which other Microsoft security product? *(Remember)*
A. Microsoft Defender for Identity
B. Microsoft Defender for Endpoint (MDE)
C. Microsoft Sentinel
D. Microsoft Purview

---

### Q3. The default maximum JIT VM access duration is: *(Remember)*
A. 30 minutes
B. 1 hour
C. 3 hours
D. 24 hours

---

### Q4. WDAC application allowlisting runs at: *(Remember)*
A. User mode
B. Kernel mode
C. Hypervisor mode
D. Network layer

---

### Q5. Microsoft's recommended app allowlisting for 2026 is: *(Remember)*
A. AppLocker
B. WDAC
C. Software Restriction Policies
D. Group Policy Preferences

---

### Q6. Credential Guard relies on which underlying technology? *(Understand)*
A. BitLocker
B. Virtualization-Based Security (VBS) + Hyper-V isolation
C. Active Directory
D. Sentinel SIEM

---

### Q7. Adding admin accounts to the **Protected Users** group disables which of the following? *(Understand)*
A. NTLM, DES, RC4 Kerberos, credential caching, unconstrained delegation
B. Only NTLM
C. Only RC4
D. Smart cards

---

### Q8. Secured-core server requires: *(Remember)*
A. Just enable a registry key
B. Certified OEM hardware with TPM 2.0 + UEFI Secure Boot + DMA protection
C. Only Hyper-V role installed
D. Replace Server with Linux

---

### Q9. **Yes/No**, Mark each statement. *(Evaluate)*

**S1:** Defender for Servers covers both Azure VMs and Arc-enabled servers.
**S2:** JIT requires the `Microsoft.Compute/virtualMachines/openConnectionPortDirectly/action` permission.
**S3:** Credential Guard prevents pass-the-hash attacks.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q10. ASR (Attack Surface Reduction) rules are best deployed via: *(Apply)*
A. Manually on each server
B. Group Policy, Intune, or Defender for Endpoint Security Configuration Management
C. Cron job
D. Linux package manager

---

### Q11. Microsoft Defender Antivirus + a 3rd-party AV product: *(Understand)*
A. Cannot coexist
B. Defender automatically goes Passive when a 3rd-party AV is active
C. Both run in active mode causing conflicts
D. Defender uninstalls itself

---

### Q12. A common ASR rule is: *(Remember)*
A. "Block all internet traffic"
B. "Block Office apps from creating child processes"
C. "Disable AD"
D. "Disable BitLocker"

---

### Q13. Controlled Folder Access protects against: *(Understand)*
A. Ransomware encryption of files in protected folders
B. SQL injection
C. DNS poisoning
D. WiFi snooping

---

### Q14. **Yes/No**, Mark each statement. *(Analyze)*

**S1:** Defender for Servers P2 includes File Integrity Monitoring.
**S2:** Defender for Servers P1 includes Vulnerability Assessment.
**S3:** Defender for Servers P2 provides 500 MB/node/day free Log Analytics ingest.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q15. The Microsoft Defender Vulnerability Management (MDVM) capability sits in Defender for Servers: *(Remember)*
A. P1
B. P2
C. Both
D. None, it's standalone

---

### Q16. **Order these steps** to deploy WDAC at scale safely. *(Create)*

1. Build a reference policy in Audit mode using `New-CIPolicy`
2. Deploy via GPO to a pilot OU for 7 days
3. Review CodeIntegrity event log for unexpected blocks
4. Refine policy + switch to Enforce mode
5. Deploy refined policy to broader scope

A. 1 → 2 → 3 → 4 → 5
B. 1 → 4 → 2 → 3 → 5
C. 2 → 1 → 3 → 4 → 5
D. 5 → 2 → 1 → 3 → 4

---

### Q17. The PRINCIPLE for choosing JIT vs always-open RDP for admin access is: *(Apply)*
A. Always-open is fine because RDP is secure
B. JIT minimizes the time window an attacker can find an open RDP port
C. RDP cannot be brute-forced
D. JIT is too slow for admins

---

### Q18. **Yes/No**, Mark each statement. *(Apply)*

**S1:** A Privileged Access Workstation (PAW) should be used for Tier-0 admin tasks only.
**S2:** PAW devices should have unrestricted internet access for browsing.
**S3:** Credential Guard works on Azure VMs.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. No / No / Yes

---

### Q19. Which Defender control would BEST detect a Living-Off-The-Land Binary (LOLBin) like `mshta.exe` invoking remote scripts? *(Apply)*
A. ASR rule "Block process creations from PSExec and WMI commands"
B. WDAC + appropriate allowlist rules
C. Both A and B
D. Neither, Defender doesn't see this

---

### Q20. The Microsoft Tier 0 administrative model includes which assets? *(Remember)*
A. Forest root, AD DCs, AD CS, Entra Connect server, ADFS, the identity control plane
B. Web servers only
C. End-user workstations
D. SharePoint sites

---

### Q21. Tamper Protection on Microsoft Defender Antivirus: *(Understand)*
A. Allows local admins to disable AV at will
B. Prevents non-IT-approved changes to AV settings (including disable attempts)
C. Replaces VBS
D. Is required for Credential Guard

---

### Q22. The CrowdStrike outage of July 2024 was caused by: *(Understand)*
A. An AD compromise
B. A faulty kernel-mode driver content update causing BSOD
C. A WAF misconfiguration
D. A DDoS attack

---

### Q23. A user accidentally clicks a phishing link. ASR rule "Block executable content from email or webmail" would prevent: *(Apply)*
A. Browser-launched executable from the email attachment running
B. The user from logging in
C. AD replication
D. DNS resolution

---

### Q24. **Yes/No**, Defender for Servers integration. *(Analyze)*

**S1:** Defender for Servers can be enabled on a subscription via Azure CLI.
**S2:** Defender for Servers writes findings to a Log Analytics workspace.
**S3:** Defender for Servers always requires Azure Arc onboarding for non-Azure servers.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. Yes / No / Yes
D. No / Yes / Yes

---

### Q25. The recommended Tier-0 admin hardening triad is: *(Understand)*
A. PAW + Tier model + LAPS only
B. Credential Guard + Protected Users + LAPS
C. WDAC + AppLocker + Smart Card
D. JIT + RBAC + RDP

---

### Q26. WDAC supports which two enforcement modes? *(Remember)*
A. Allow / Deny only
B. Audit / Enforce
C. Soft / Hard
D. Passive / Active

---

## 🎯 Answers + Explanations

### Q1: **B. P2**
JIT is Plan 2 only, along with VA, FIM, adaptive controls, network hardening, regulatory compliance.

### Q2: **B. Microsoft Defender for Endpoint (MDE)**
MDE is bundled in Defender for Servers (both P1 and P2). You can also buy MDE standalone.

### Q3: **C. 3 hours**
Default max JIT request duration is 3 hours. Configurable up to 24h per port.

### Q4: **B. Kernel mode**
WDAC enforces at the kernel, tamper-resistant against local admins.

### Q5: **B. WDAC**
WDAC is the modern default; AppLocker is legacy support only.

### Q6: **B. Virtualization-Based Security (VBS) + Hyper-V isolation**
VBS creates an isolated process space using the hypervisor. Hyper-V hypervisor is the foundation.

### Q7: **A. NTLM, DES, RC4 Kerberos, credential caching, unconstrained delegation**
Protected Users disables all four, a big package.

### Q8: **B. Certified OEM hardware with TPM 2.0 + UEFI Secure Boot + DMA protection**
Secured-core requires the hardware + firmware + OS combo. No software shortcut.

### Q9: **A. Yes / Yes / Yes**
All three true. Defender works on Azure + Arc; JIT needs that specific RBAC action; Credential Guard defeats PtH.

### Q10: **B. Group Policy, Intune, or Defender for Endpoint Security Configuration Management**
The three modern centralized paths.

### Q11: **B. Defender automatically goes Passive when a 3rd-party AV is active**
Defender detects the 3rd-party and switches to Passive, providing threat intel only.

### Q12: **B. "Block Office apps from creating child processes"**
One of the most-deployed ASR rules, defeats macro→PowerShell attacks.

### Q13: **A. Ransomware encryption of files in protected folders**
Anti-ransomware feature, only allowlisted apps can write to specified folders.

### Q14: **A. Yes / No / Yes**
S1 correct (FIM is P2). S2 wrong (VA is P2 only). S3 correct (500 MB/node/day free with P2).

### Q15: **B. P2**
MDVM is part of P2's vulnerability assessment offering (alternative is Qualys).

### Q16: **A. 1 → 2 → 3 → 4 → 5**
Audit → pilot → review → enforce → broader rollout. Standard safe deployment.

### Q17: **B. JIT minimizes the time window an attacker can find an open RDP port**
Attack-surface reduction philosophy. Always-open RDP is brute-force / RCE bait.

### Q18: **A. Yes / No / Yes**
S1 correct. S2 wrong (PAWs have NO internet browsing, Tier-0 asset). S3 correct.

### Q19: **C. Both A and B**
ASR rules block known suspicious behaviors; WDAC blocks unknown/unsigned binaries. Defense in depth.

### Q20: **A. Forest root, AD DCs, AD CS, Entra Connect server, ADFS, the identity control plane**
Tier-0 = anything that, if compromised, gives forest-wide control.

### Q21: **B. Prevents non-IT-approved changes to AV settings**
Local admin alone cannot disable; need to go through MEM/Defender XDR portal.

### Q22: **B. A faulty kernel-mode driver content update causing BSOD**
The July 2024 outage, channel file 291.

### Q23: **A. Browser-launched executable from the email attachment running**
ASR specifically blocks executables originating from email/webmail attempting to launch.

### Q24: **B. Yes / Yes / No**
S1 correct. S2 correct. S3 wrong, Azure Arc is the *recommended* path for non-Azure servers but Defender for Endpoint can also be deployed standalone via GPO/Intune/SCCM.

### Q25: **B. Credential Guard + Protected Users + LAPS**
The classic Tier-0 hardening triad.

### Q26: **B. Audit / Enforce**
Audit logs would-be blocks; Enforce actually blocks.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Security domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read Defender for Servers + WDAC + Credential Guard sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Defender for Servers P1 = MDE only; P2 = MDE + VA + FIM + JIT + AAC + network hardening + compliance
- JIT max request 3 hr default; P2 only
- WDAC = kernel mode allowlisting; modern AppLocker successor
- Credential Guard = VBS + Hyper-V isolation of LSASS
- Protected Users disables NTLM, DES, RC4, caching, unconstrained delegation
- Secured-core = certified OEM hardware + TPM 2.0 + UEFI + DMA
- ASR top rule: "Block Office apps from creating child processes"
- Controlled Folder Access = anti-ransomware allowlist
- Tier 0/1/2 model + PAW for admin segregation
- Tamper Protection prevents disabling MDAV

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 9](../Module-09-Backup-Migration/Reading.md)
