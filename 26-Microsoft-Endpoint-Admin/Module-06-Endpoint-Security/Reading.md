# Module 6: Endpoint Security & Defender for Endpoint 🛡️

> **Why this module matters:** Endpoint security is the largest single MD-102 sub-domain by weight. Modern attacks land on the endpoint first (phishing, malicious docs, browser exploits, supply-chain compromise) and Microsoft Defender for Endpoint is your front-line. Get MDE Plan 1 vs Plan 2, ASR rules, BitLocker, EDR, and security baselines internalized — they'll touch 8–12 questions.

> **Prerequisites for this module.** Before starting:
> - Module 3 (Intune Fundamentals) — settings catalog and group targeting.
> - Module 4 (Compliance) — compliance + CA flow that consumes Defender signals.
> - Basic Windows security primitives — what Antivirus, EDR, and firewalls do at a conceptual level.

---

## 🍕 A Story: 3:14am Wednesday

Maria's pager goes off at 3:14am Wednesday. The alert:

> *"DEFENDER ALERT: HIGH — Suspicious PowerShell behavior on `NWP-FIN-024`. Process tree: outlook.exe → winword.exe → powershell.exe → encoded download. Containment: device isolated. Investigation: in progress."*

A finance employee in Princeton opened a Word doc attached to a phishing email. The macro tried to launch PowerShell to download a stage-two payload. Microsoft Defender for Endpoint:

- **Detected** the suspicious behavior (Office child process → PowerShell with encoded command)
- **Blocked** the PowerShell execution via the **Block all Office applications from creating child processes** ASR rule
- **Isolated** the device from the network within 8 seconds of detection
- **Notified** the security ops team via Microsoft Sentinel
- **Marked** the device non-compliant in Intune
- **Triggered** Conditional Access to revoke the user's active SharePoint and Exchange sessions

The user wakes up Wednesday morning to a locked corporate laptop with a "device is being investigated" message. Maria spends 90 minutes triaging, confirms there was no payload exfiltration, releases the device from isolation, requires a Defender for Endpoint scan + password reset, and the user is productive again by 11am. **The total impact: one laptop offline for 8 hours and a security ticket.** Without Defender for Endpoint, that PowerShell payload would have established persistence, lateral-moved across the finance network, and exfiltrated Q3 earnings data days before public disclosure.

This module is everything that made the above sequence work in 8 seconds, not 8 weeks.

---

## 🛡️ Microsoft Defender for Endpoint — Plan 1 vs Plan 2 (MEMORIZE THIS)

Microsoft Defender for Endpoint (MDE) is Microsoft's flagship endpoint security platform. Two plans:

| Capability | Plan 1 | Plan 2 |
|------------|--------|--------|
| **Next-gen antivirus (NGAV)** | ✅ | ✅ |
| **Attack Surface Reduction (ASR) rules** | ✅ | ✅ |
| **Device control** (USB block, etc.) | ✅ | ✅ |
| **Web content filtering / SmartScreen** | ✅ | ✅ |
| **Network protection** | ✅ | ✅ |
| **Manual response actions** (isolate, scan, restrict app) | ✅ | ✅ |
| **Endpoint detection & response (EDR)** | ❌ | ✅ |
| **Automated investigation & response (AIR)** | ❌ | ✅ |
| **Threat & Vulnerability Management (TVM)** | ❌ | ✅ |
| **Advanced Hunting** (KQL query language) | ❌ | ✅ |
| **Microsoft Threat Experts** (expert hunting service) | ❌ | ✅ (add-on) |
| **Sandbox / detonation** | ❌ | ✅ |

🔥 **MEMORIZE the line:** Plan 1 = prevention + protection. Plan 2 = detection + response + threat intelligence. EDR is the big Plan 2 differentiator.

### Licensing bundles

| Bundle | MDE included |
|--------|--------------|
| Microsoft 365 E3 | MDE Plan 1 |
| Microsoft 365 E5 | MDE Plan 2 |
| Microsoft Defender for Endpoint Plan 2 standalone | $5.20/user/month (varies) |
| Microsoft Defender for Endpoint Plan 1 standalone | $3/user/month (varies) |
| Microsoft Defender for Servers Plan 2 (Azure) | Includes MDE for Windows Server |

---

## 🦠 Microsoft Defender Antivirus

Microsoft Defender Antivirus is built into Windows 10/11 and Windows Server 2016+. With MDE it gets cloud-delivered protection and behavior-based detection.

| Feature | What |
|---------|------|
| **Real-time protection** | Always-on scanning |
| **Cloud-delivered protection** | Real-time cloud signature lookups |
| **Tamper protection** | Prevents users + malware from disabling Defender |
| **Block at first sight (BAFS)** | Submits unknown files to cloud sandbox |
| **Network inspection system (NIS)** | Inspects network traffic for exploits |
| **Behavior monitoring** | Detects malicious behavior patterns |
| **PUA protection** | Potentially Unwanted Applications block |
| **Controlled folder access (CFA)** | Blocks unauthorized changes to protected folders (anti-ransomware) |

🎯 **Exam tip:** Tamper protection should always be ON in production. The exam treats "disabled tamper protection" as a security gap.

---

## 🛑 Attack Surface Reduction (ASR) Rules

ASR rules are pre-defined Defender behaviors that block specific malicious patterns. Each rule has three modes:

| Mode | Effect |
|------|--------|
| **Audit** | Logs but allows (use to test) |
| **Block** | Enforces — blocks the behavior |
| **Warn** | Prompts the user; user can bypass once |

### The most-tested ASR rules

| Rule | What it blocks |
|------|----------------|
| **Block all Office applications from creating child processes** | Stops Word/Excel from spawning powershell.exe, cmd.exe, etc. |
| **Block Office applications from creating executable content** | Stops Office from writing EXE/DLL files |
| **Block Office applications from injecting code into other processes** | Stops Office-based code injection |
| **Block JavaScript or VBScript from launching downloaded executable content** | Stops scripting-engine-based dropper attacks |
| **Block execution of potentially obfuscated scripts** | Anti-obfuscation engine |
| **Block Win32 API calls from Office macros** | Hard-block on macros calling Win32 APIs |
| **Block credential stealing from LSASS** | Stops Mimikatz-style credential dumping |
| **Block process creations originating from PSExec and WMI commands** | Stops common lateral movement tools |
| **Block untrusted and unsigned processes that run from USB** | Stops USB-based malware |
| **Use advanced protection against ransomware** | Behavior-based ransomware detection |
| **Block Adobe Reader from creating child processes** | Stops PDF exploits |
| **Block persistence through WMI event subscription** | Stops fileless persistence |
| **Block abuse of exploited vulnerable signed drivers** (BYOVD) | Stops bring-your-own-vulnerable-driver attacks |

🔥 **MEMORIZE:** "Block Office child process" is the canonical first ASR rule to enable. It single-handedly stops most macro-based malware.

🚨 **Trap on the exam:** Run ASR rules in **Audit mode** first, review the events in Defender for Endpoint, then switch to Block. Day-one Block on every rule = legitimate apps break.

---

## 🌐 Microsoft Defender SmartScreen + Network Protection

| Feature | What |
|---------|------|
| **SmartScreen for Microsoft Edge** | Blocks known-malicious URLs in the browser |
| **SmartScreen for Windows shell** | Blocks unknown EXEs at the OS level |
| **Network protection** | OS-level URL/domain blocking (works in any browser) |
| **Web content filtering** | Category-based web filtering (gambling, social media, etc.) |

🎯 **Exam tip:** Network protection works at the OS level. Web content filtering needs MDE Plan 2.

---

## 🔐 BitLocker — Full-Disk Encryption

BitLocker encrypts the entire OS drive (and optionally data drives) using TPM-backed keys.

### Intune BitLocker policy via Endpoint Security blade

| Setting | Notes |
|---------|-------|
| **Enable BitLocker** | Requires TPM 2.0 + Secure Boot |
| **Encryption method** | XTS-AES 128 or 256 (256 recommended for high-security) |
| **OS drive encryption type** | Full disk vs Used Space Only (faster, fine for new devices) |
| **Recovery key escrow** | To Microsoft Entra ID (default) |
| **Silent enablement** | Encrypt automatically without user prompts |
| **PIN requirement** | Optional (TPM + PIN for higher assurance) |
| **Removable drive encryption** | Block writes to unencrypted removable drives |

### Recovery key escrow

- Recovery key stored on the **device object in Microsoft Entra ID**
- Admins retrieve via Intune portal, Entra portal, or Microsoft Graph
- Self-service portal lets users get their own recovery key

🔥 **MEMORIZE:** Silent BitLocker enablement is the canonical Intune-deployed pattern. Encrypts the OS drive + escrows recovery key to Entra ID without any user interaction.

🚨 **Trap on the exam:** BitLocker recovery keys are stored on the **device object**, not the user. If you delete the device record without exporting the key first, you lose the key.

---

## 🔍 Endpoint Detection & Response (EDR)

EDR is the Plan 2 differentiator. It continuously monitors process activity and correlates events to detect threats.

| Capability | What |
|------------|------|
| **Behavioral detection** | Pattern-based threat detection (not signatures) |
| **Process tree** | Visualize parent-child process chains for incident analysis |
| **Live response** | Remote shell + file pull + script run on the device |
| **Device isolation** | Cut network access while keeping MDE connectivity |
| **App execution restriction** | Block unknown apps from running |
| **Threat hunting (Advanced Hunting)** | KQL queries across endpoint telemetry |
| **Automated investigation (AIR)** | Auto-triage alerts; remediate when high-confidence |

### EDR in block mode

A special configuration where MDE blocks malicious artifacts **even when a third-party AV is the primary engine**. Defender runs passive but EDR enforces.

🎯 **Exam tip:** EDR in block mode is the right answer for "we have a non-Microsoft AV but want Defender's response capabilities."

---

## 🌍 Microsoft Defender for Cloud Apps (formerly MCAS)

Microsoft Defender for Cloud Apps is Microsoft's CASB (Cloud Access Security Broker). It:

- **Discovers shadow IT** — what cloud apps are users accessing?
- **Controls SaaS apps** — sanction / un-sanction, conditional access policies for cloud apps
- **Detects threats in SaaS** — anomaly detection across Microsoft 365 + 3rd party
- **Integrates with MDE** — Defender for Endpoint discovers cloud apps via network protection telemetry
- **Information protection** — DLP across SaaS apps

🎯 **Exam tip:** "Discover shadow IT" or "control unsanctioned SaaS" = Defender for Cloud Apps.

---

## 🔒 Microsoft Defender Firewall (Windows Firewall)

The built-in Windows Firewall with Advanced Security. Intune manages it via Endpoint Security blade.

| Setting | Notes |
|---------|-------|
| **Domain / Private / Public profile** | Different rules per network type |
| **Block all inbound by default** | The canonical secure default |
| **Allow specific apps inbound** | Per-app rules |
| **Rule-based firewall config** | Custom rules via Intune |
| **Tamper protection** | Prevent users disabling firewall |

---

## 📜 Security Baselines

Microsoft publishes pre-built security configuration recommendations as **security baselines** for:

- Microsoft Defender for Endpoint
- Microsoft Edge
- Windows 11 (built on the Windows Security Baseline)
- Microsoft 365 Apps

Each baseline = hundreds of settings Microsoft researched + recommended. You deploy a baseline as a profile in Intune.

🎯 **Exam tip:** Security baselines are the right answer for "apply Microsoft-recommended security configuration without designing every setting yourself."

---

## 🔑 Local Administrator Password Solution (Windows LAPS)

Windows LAPS (replaces the older Active Directory LAPS) rotates the local admin password on Windows endpoints and escrows it. With Intune:

| Setting | Notes |
|---------|-------|
| **Password storage** | Microsoft Entra ID (default for cloud-managed) |
| **Password complexity** | Length, character set |
| **Rotation interval** | Default 30 days |
| **Post-authentication actions** | Reset after use (highest security) |

🔥 **MEMORIZE:** LAPS for Entra-joined Windows 11 stores the password on the Entra device object. Admins retrieve via Entra portal or Microsoft Graph.

---

## 🛡️ Defender Application Control (WDAC) + Smart App Control

| Feature | What |
|---------|------|
| **Windows Defender Application Control (WDAC)** | Code integrity policy — only signed apps allowed |
| **Smart App Control** | Cloud-driven AppLocker successor for Windows 11 |
| **AppLocker** | Legacy GPO-based app whitelisting |

🎯 **Exam tip:** WDAC = the modern Windows-native app control. Smart App Control is the Microsoft-cloud-driven default.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Defender Antivirus and Defender for Endpoint are the same" | ❌ Antivirus is built-in OS; MDE adds cloud + EDR + response |
| "ASR rules should be deployed in Block mode immediately" | ❌ Audit first, then Block |
| "Plan 1 includes EDR" | ❌ EDR is Plan 2 only |
| "BitLocker recovery keys are stored per user" | ❌ Per device object in Entra ID |
| "Tamper protection is optional" | ❌ Always on in production |
| "EDR in block mode replaces third-party AV" | ❌ Defender runs passive; EDR enforces |
| "Defender for Cloud Apps protects endpoints" | ❌ It protects SaaS apps (the cloud side) |

---

## 🧪 Task-Sequencing Practice: Roll Out ASR Rules

**Order these steps to deploy ASR rules to your Windows fleet.**

The correct sequence:

1. ✅ **Pick the rules** — start with "Block Office child process" + "Block credential stealing from LSASS"
2. ✅ **Configure in Audit mode** via Endpoint security blade
3. ✅ **Deploy to a pilot group** (10–50 devices)
4. ✅ **Monitor Advanced Hunting for false positives** for 7–14 days
5. ✅ **Add exclusions** for legitimate scenarios (specific publishers, file paths)
6. ✅ **Switch to Block mode** on the pilot group
7. ✅ **Monitor again** for 7 days
8. ✅ **Expand to broader groups** in waves
9. ✅ **Document** rule list, exclusions, and reasons

⚠️ Skipping step 4 = production breakage on day 1. Skipping step 5 = legitimate apps blocked.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Microsoft Defender for Endpoint (MDE)** | Microsoft's flagship endpoint security platform |
| **Plan 1 vs Plan 2** | Prevention/protection vs prevention + detection + response |
| **EDR** | Endpoint Detection and Response — Plan 2 capability |
| **EDR in block mode** | Defender enforces even when 3rd-party AV is primary |
| **NGAV** | Next-Gen Antivirus — Defender Antivirus with cloud + behavior |
| **Tamper protection** | Prevents disabling Defender via admin or malware |
| **ASR rule** | Pre-defined Defender rule blocking specific behaviors |
| **Audit / Block / Warn** | The three ASR modes |
| **BAFS** | Block at First Sight — submit unknown files to cloud sandbox |
| **CFA** | Controlled Folder Access — anti-ransomware folder protection |
| **SmartScreen** | URL + file reputation engine for Edge + shell |
| **Network protection** | OS-level malicious URL blocking |
| **Web content filtering** | Category-based web filtering (Plan 2) |
| **BitLocker** | Full-disk encryption using TPM-backed keys |
| **Silent BitLocker enablement** | Intune-driven encryption without user prompts |
| **Windows LAPS** | Local Administrator Password Solution — rotates + escrows local admin password |
| **WDAC** | Windows Defender Application Control — code integrity policy |
| **Smart App Control** | Cloud-driven app control for Windows 11 |
| **Security baseline** | Microsoft-published pre-configured security settings |
| **Microsoft Defender for Cloud Apps** | CASB — discovers/controls SaaS apps |
| **TVM** | Threat & Vulnerability Management — Plan 2 vuln scanning |
| **AIR** | Automated Investigation & Response — Plan 2 auto-triage |
| **Advanced Hunting** | KQL query interface for endpoint telemetry (Plan 2) |

---

## ✅ Module 6 Summary

You now know:

- 🛡️ MDE Plan 1 vs Plan 2 — what features each unlocks (memorize this)
- 🦠 Defender Antivirus capabilities (NGAV, BAFS, CFA, tamper protection)
- 🛑 The most-tested ASR rules and the Audit → Block rollout pattern
- 🌐 SmartScreen, Network protection, and Web content filtering
- 🔐 BitLocker silent enablement + recovery key escrow to Entra ID
- 🔍 EDR capabilities — process trees, isolation, live response, AIR, Advanced Hunting
- 🌍 Microsoft Defender for Cloud Apps as the CASB for SaaS
- 🔒 Windows Firewall via Intune
- 📜 Security baselines as Microsoft's recommended configurations
- 🔑 Windows LAPS for local admin password rotation
- 🛡️ WDAC + Smart App Control + AppLocker for app control
- ⚠️ The 7 most common endpoint security traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 7: Windows Update for Business & Servicing](../Module-07-Windows-Update/Reading.md)

---

## 📊 Case Study — Norsk Hydro's LockerGoga Attack Recovery (2019–2024)

**Situation.** On March 19, 2019, Norwegian aluminum producer Norsk Hydro (~35,000 employees globally) was hit by **LockerGoga ransomware** — a then-novel variant that encrypted 22,000 endpoints across 170 sites in 40 countries in a matter of hours. Norsk Hydro made the unusual public decision to refuse paying ransom and instead transparently rebuilt its IT estate. The attack cost an estimated $70M+ in downtime, customer compensation, and recovery labor. Hydro publicly documented the event in a 2019 transparency report (Norsk Hydro, *Cyber Attack Response 2019*, plus Microsoft case study, 2021).

**Decision.** Post-recovery, Norsk Hydro standardized on a Microsoft Defender for Endpoint-centric architecture (Microsoft case study, *Norsk Hydro — Strengthening security post-LockerGoga*, 2021, updated 2024):

1. **Defender for Endpoint Plan 2 on every Windows endpoint** + Windows Server (via Defender for Servers).
2. **EDR in block mode** as a defense-in-depth layer.
3. **ASR rules in Block mode** for all five "credential theft" + "Office macro" + "USB" categories.
4. **BitLocker silent enablement** on every laptop with recovery keys escrowed to Entra ID.
5. **Security baselines** for Windows + Edge + M365 Apps applied via Intune.
6. **Tamper protection** mandatory (no user or admin can disable Defender locally).
7. **Defender for Cloud Apps** for SaaS visibility + governance.
8. **Microsoft Sentinel** as the SIEM, consuming MDE alerts.
9. **24/7 SOC** with playbooks for "ransomware detected" using EDR isolation + AIR.

**Outcome.** Norsk Hydro reported (multiple Microsoft case studies + public corporate disclosures through 2024):

- **Endpoint telemetry coverage**: rose from estimated 30% pre-LockerGoga to >99% across the fleet on MDE Plan 2.
- **Mean time to isolate a compromised endpoint**: from "hours/days" to **under 30 seconds** (auto-isolation via AIR + EDR).
- **Ransomware-class incident counts**: reduced to near-zero successful encryption events post-rollout (multiple ASR rules prevent the attack chain).
- **BitLocker coverage**: 100% of laptops encrypted with silent enablement + Entra-escrowed keys.
- **Total cost of ownership**: Hydro does not publicly disclose figures but cites the architecture as "the foundation that lets us run lean security operations at global scale."
- **Public reference customer**: Hydro is now a frequently cited Microsoft case study for cloud-native endpoint security.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* MD-102 weighs MDE Plan 2 + ASR + BitLocker + EDR so heavily and *why* the exam expects you to know the Audit → Block ASR rollout pattern by heart. The economic case is overwhelming: the upfront $70M+ cost of LockerGoga turned into ~$5–10M/year of Microsoft 365 E5 licensing (estimated, not disclosed) plus SOC operating costs, returning years of resilience. When the exam describes "endpoint security architecture for an enterprise that's been ransomwared," the answer is **MDE Plan 2 + ASR Block + EDR + BitLocker + security baselines + Sentinel**, every time. The Hydro story is why.

**Discussion (Socratic).**
- **Q1.** Hydro publicly refused to pay ransom. Argue both sides: when is publicly refusing to pay the right answer (deterrent for future attacks, regulator goodwill) vs the wrong answer (recovery cost, customer impact)? What does each choice say about the org's risk appetite?
- **Q2.** Hydro mandates Tamper Protection on every device. A skeptical IT lead at a peer manufacturer argues "tamper protection makes troubleshooting harder for legitimate IT actions." Defend tamper protection by naming the one attack pattern it specifically defeats.
- **Q3.** Hydro standardized on ASR Block mode. A risk-averse org argues for Audit mode permanently. Defend Block mode by naming the specific scenario where Audit mode fails to provide actual protection.

---

> **Where this leads.**
> - Inside this course: Module 7 covers Windows Update for Business, which keeps the OS patched so security baselines hold. Module 8 covers monitoring + reporting, including how Defender signals flow into compliance + CA.
> - Cross-course: [`09-CompTIA-Security-Plus`](../../09-CompTIA-Security-Plus/README.md) covers endpoint security at the SY0-701 depth — useful for cross-vendor context. [`06-Azure-Administrator` Module 8](../../06-Azure-Administrator/Module-08-Network-Security/Reading.md) covers network security primitives.
> - Practice: Practice Exam 2 has roughly 8–10 questions from this module (MDE plans, ASR rules, BitLocker, EDR, security baselines). Final Mock Exam revisits with incident-response scenarios.

---

## 💬 Discussion — Socratic prompts

1. **MDE Plan 1 vs Plan 2 for a regulated bank.** A bank's CIO argues Plan 1 is enough — "we have a separate EDR vendor." Defend the Plan 2 case by naming the integration advantages Plan 2 provides over a third-party EDR (hint: think about Conditional Access, Intune compliance signal, and Microsoft Sentinel ingestion).
2. **ASR rule rollout cadence.** Microsoft recommends Audit → Block per rule. A CISO under regulatory pressure wants Block on Day 1. Defend the Audit step by naming a real-world failure mode that would have caused outages.
3. **Silent BitLocker for executives.** Executives often demand no friction. Silent BitLocker means no user prompts but admin-only key escrow. Defend the executive-applicable scenario where silent BitLocker is the right answer over user-prompted BitLocker.
4. **EDR in block mode with third-party AV.** When is EDR in block mode the right answer vs replacing the third-party AV entirely? Defend with reference to migration risk, vendor lock-in, and SOC tooling cost.
5. **Smart App Control vs WDAC vs AppLocker.** Microsoft has three app control mechanisms. When is each the right answer? Defend the cases.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Defender for Endpoint documentation](https://learn.microsoft.com/defender-endpoint/) (Microsoft, current)
- 📖 [ASR rules reference](https://learn.microsoft.com/defender-endpoint/attack-surface-reduction-rules-reference)
- 📖 [BitLocker management with Intune](https://learn.microsoft.com/mem/intune/protect/encrypt-devices)
- 📖 [Microsoft Defender for Cloud Apps overview](https://learn.microsoft.com/defender-cloud-apps/)
- 📖 [Windows LAPS documentation](https://learn.microsoft.com/windows-server/identity/laps/laps-overview)
- 📖 [Security baselines in Microsoft Intune](https://learn.microsoft.com/mem/intune/protect/security-baselines)
- 📖 Norsk Hydro, *Cyber Attack Response 2019* — the canonical public-disclosure case study
- 📖 Microsoft *Anatomy of a Cyberattack* whitepaper series (latest edition) — attack chain references
