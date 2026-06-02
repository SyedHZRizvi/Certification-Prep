# Module 8: Security Fundamentals 🔐

> **Why this module matters:** Security is **25% of the 220-1102 exam** — about 22 questions, the *second-largest* Core 2 domain. A+ security is foundational, not the deep cryptography of Security+ — but every help-desk technician is the *first line of defense* against phishing, lost devices, and credential theft. The exam tests practical decisions: which control fixes this, who should have admin, what to do when a user clicks the wrong link.

> **Prerequisites for this module.** You need:
> - Module 7 (OS basics — accounts, UAC, BitLocker)
> - Module 2 (networks — firewalls, VPNs, ports)
> - Module 1 (mobile — MDM)

---

## 🚨 A Story: The CFO Whose Click Almost Cost the Firm $2M

Meet Sven. He's the IT manager for a 90-person commercial real-estate firm. On a Thursday afternoon, the CFO calls — flustered, embarrassed. "I got an email from what looked like our bank. It said a wire transfer needed re-authorization. I clicked the link and… entered my password and the code from my authenticator. Then it didn't do anything. I'm worried."

Sven's clock starts. Within 4 minutes he:

1. Pulls up the **conditional-access dashboard** in Microsoft Entra ID — sees a sign-in from Lagos, Nigeria. The CFO is in Chicago.
2. **Revokes all CFO sessions** and forces a sign-in reset.
3. **Resets the CFO's password** to a temporary value and forces MFA re-enrollment with a *new* authenticator (the previous one is presumed compromised).
4. Checks Office 365 mail flow rules — confirms the attacker didn't set up an inbox-redirect rule (a common follow-up to harvest more credentials).
5. Reviews the **bank** login portal logs (calls the relationship manager) — confirms no wire requests have been initiated.

Total damage: zero. The CFO was annoyed but unharmed. Sven sent an all-hands email that afternoon with a phishing-awareness reminder and added the malicious domain to the company's mail-filter blocklist.

What saved the firm was a *layered* security posture: MFA blunted the password theft, conditional access flagged the geographic anomaly, and the user's call to IT was fast enough to revoke before damage. *No single control* would have been enough.

This module gives you the vocabulary and judgment to be Sven — to respond fast, to layer controls, and to recognize the human-factor attacks A+ tests heavily.

---

## 🛡️ Physical Security

| Control | What it does |
|---------|--------------|
| **Mantrap / access control vestibule** | Two-door entry — second door opens only after first closes; prevents tailgating |
| **Badge + biometric door** | Multi-factor entry |
| **Cable lock (Kensington)** | Physically chains laptop to desk; deters opportunistic theft |
| **Locking screen savers** | Auto-lock after idle (Windows: Win+L; macOS: Ctrl+Cmd+Q) |
| **Privacy screen / filter** | Narrows viewing angle; counters shoulder surfing |
| **Cable concealment** | Reduces tripping hazards + signals professionalism |
| **Video surveillance** | Recording cameras = detective |
| **Bollards** | Physical barriers (e.g., outside data-center buildings) |
| **Locked rack / cage** | Server-rack access control |
| **Secure document destruction (shred bin)** | Prevents dumpster diving |

🎯 **Exam pattern:** *"What physical control prevents tailgating into a secure area?"* → **Mantrap / access control vestibule.**

---

## 🔐 Logical / Account Security

### Authentication factors

| Factor | Example |
|--------|---------|
| **Something you KNOW** | Password, PIN, security questions |
| **Something you HAVE** | Phone (TOTP/Push), hardware token (YubiKey), smart card |
| **Something you ARE** | Fingerprint, Face ID, retina, voice |
| **Somewhere you ARE** | Geolocation / IP / network |
| **Something you DO** | Behavioral biometrics (typing rhythm) |

**MFA (Multi-Factor Authentication)** = two or more factors from *different* categories. Password + PIN = NOT MFA (both are "know"). Password + phone push = MFA.

### Password best practices (2026)

- **Length over complexity** — modern NIST guidance favors 12–16+ characters over forced complexity rules
- **No forced periodic resets** (unless evidence of compromise) — NIST SP 800-63B
- **Block known-leaked passwords** — check against Have-I-Been-Pwned lists
- **Use a password manager** — 1Password, Bitwarden, KeePass, Apple Passwords
- **Don't share passwords** — ever

### Account types & lockout policies

- **Standard user** — recommended for daily use
- **Administrator** — used only when needed (`Run as administrator`)
- **Service account** — for applications; long random password; no interactive login
- **Account lockout policy** — Windows local: Local Security Policy → Account Lockout Policy. Typical: lock after 5 failed attempts for 15 minutes.

---

## 🔒 Encryption — Disk, File, Network

| Mechanism | OS | Scope |
|-----------|-----|-------|
| **BitLocker** | Windows Pro/Ent | Full-volume encryption (TPM-backed) |
| **EFS** (Encrypting File System) | Windows Pro+ | Per-file/folder encryption (tied to user account) |
| **FileVault** | macOS | Full-disk encryption |
| **LUKS** | Linux | Full-disk encryption (Linux Unified Key Setup) |
| **VeraCrypt** | Cross-platform | Open-source full-disk + container encryption |
| **HTTPS / TLS** | All | Network encryption (web) |
| **VPN (IPsec, OpenVPN, WireGuard)** | All | Encrypted tunnel between client and network |
| **SSH** | All | Encrypted shell access (port 22) |

🎯 **Exam pattern:** *"How do you protect data on a stolen laptop?"* → **Full-disk encryption** (BitLocker on Windows, FileVault on Mac, LUKS on Linux).

### BitLocker specifics

- Requires TPM 1.2+ (recommended 2.0) OR USB key
- Can be enforced via Group Policy / Intune
- **Recovery key** — 48-digit key generated at setup; back up to AD / Entra ID / Microsoft account / printed
- **Suspending BitLocker** — temporary; resumes encrypted at next reboot

---

## 🦠 Malware Types

| Type | Behavior | Removal difficulty |
|------|----------|---------------------|
| **Virus** | Self-replicating, requires host file | Moderate (AV signature) |
| **Worm** | Self-propagating, network-aware | High (lateral movement) |
| **Trojan** | Disguised as legitimate software | Variable |
| **Ransomware** | Encrypts files, demands payment | Often = reimage |
| **Spyware / Adware** | Collects info / shows ads | Moderate (PUP removal) |
| **Rootkit** | Hides at kernel level | Very high — often requires reimage |
| **Keylogger** | Records keystrokes | Moderate (AV detects) |
| **Bot / Botnet** | Infected device controlled remotely (C2) | Moderate |
| **Fileless malware** | Lives in memory only | High (no file = no signature) |
| **Cryptominer** | Uses CPU/GPU for crypto mining | Moderate (resource symptom) |

### The 7-step malware removal process (CompTIA — MEMORIZE)

1. **Investigate and verify** the symptoms point to malware
2. **Quarantine** the infected system (disconnect from network)
3. **Disable System Restore** in Windows (restore points may be infected)
4. **Remediate the infected systems** (update anti-malware definitions; scan; remove)
5. **Schedule scans and run updates**
6. **Enable System Restore and create a restore point** (Windows)
7. **Educate the end user**

🚨 **Why step 3?** Otherwise rolling back can reintroduce the malware from an infected restore point.

---

## 🎣 Social Engineering Attacks

| Attack | Vector |
|--------|--------|
| **Phishing** | Mass email |
| **Spear phishing** | Targeted email (specific person/org) |
| **Whaling** | Phishing targeting executives |
| **Smishing** | SMS message |
| **Vishing** | Voice / phone call |
| **Pharming** | DNS poisoning / typo-squatted domain |
| **Shoulder surfing** | Watching credentials over the shoulder |
| **Tailgating** | Following badged person through secure door |
| **Dumpster diving** | Searching trash for sensitive info |
| **Impersonation** | Pretending to be someone else (e.g., "IT calling about your password") |
| **Evil twin (Wi-Fi)** | Fake AP with same SSID, captures credentials |
| **Watering hole** | Compromise a site the target frequents |
| **Quid pro quo** | "Free pen if you tell me your password" |

🎯 **Exam pattern:** *"User received a text claiming to be from their bank asking for credentials"* → **Smishing.**

### Defense

- **Awareness training** — annual + simulated phishing
- **DMARC / SPF / DKIM** — anti-spoofing email standards
- **Mark external email** as "External" in the subject (Microsoft 365 default option)
- **Allowed-sender list / block list**
- **MFA** — even if password leaks, attacker can't login

---

## 🌐 Wi-Fi Security

| Standard | Status |
|----------|--------|
| **WEP** | Broken since 2001. NEVER use. |
| **WPA** | Stopgap. Deprecated. |
| **WPA2-PSK (AES)** | Strong; the most common 2010s-2024 |
| **WPA2-Enterprise** | Per-user 802.1X with RADIUS |
| **WPA3-Personal (SAE)** | Strongest; modern default |
| **WPA3-Enterprise (192-bit)** | High-security enterprise |

### Defense tips

- Change default SSID and admin password on every SOHO router
- Enable **WPA3** if all client devices support it (else WPA2-AES)
- Disable **WPS** (WiFi Protected Setup) — exploitable
- Separate **guest SSID/VLAN** with no LAN access
- Disable **SSID broadcast hiding** — security through obscurity, easily defeated, hurts roaming

---

## 🛡️ Endpoint / OS Hardening

| Action | Why |
|--------|-----|
| **Apply latest OS updates** | Patches known CVEs |
| **Run as standard user, not admin** | Limits damage from any single click |
| **Enable host firewall** | Defense in depth |
| **Antivirus / EDR** | Detection + behavioral defense |
| **Full-disk encryption** | Lost laptop = no data exposure |
| **Disable unnecessary services** | Reduce attack surface |
| **Disable AutoRun** for USB | Prevents auto-execution of malicious media |
| **Use the latest browser** | Most attacks start in a browser |
| **Block known-bad domains at DNS** (Cisco Umbrella, NextDNS, etc.) | Stops malware C2 |

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports their files now have a `.locked` extension and a `README_DECRYPT.txt` appeared in every folder.

**Walkthrough:**
1. **Identify** — Classic ransomware symptoms. Encrypted files + ransom note.
2. **Theory** — Ransomware infection. Possibly via email attachment or RDP.
3. **Test** — Immediately **isolate** the host (unplug Ethernet + Wi-Fi off). Note: do NOT reboot yet — memory analysis may help.
4. **Plan** —
   - Disconnect from network
   - Notify SOC/IR per company policy
   - Identify scope (was this user a network share owner? Did the ransomware reach mapped drives?)
   - **Do NOT pay the ransom** (unless explicitly approved at exec level after legal review)
   - Restore from backup; if backup is compromised, restore from offline copy
   - Reimage the original system to a known-clean state
5. **Verify** — Test restored files; reconnect to network only after confirmed clean and patched
6. **Document** — Full incident report; user education; revisit backup strategy

This is the classic ransomware playbook. The single biggest predictor of outcome is **whether backups exist and were untouched by the ransomware**.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Password + PIN = MFA" | NO — both are "something you know." Same factor category. |
| "BitLocker requires Windows Enterprise" | Available on Windows Pro as well. Home only has Device Encryption (limited). |
| "Pay the ransom — at least you get files back" | Many ransom payments do NOT result in decryption. Pay = fund crime + flag yourself. |
| "Antivirus catches all malware" | Modern threats include fileless and zero-day. AV is one layer, not the whole defense. |
| "VPNs make you anonymous" | They protect *transport* and *origin IP* — not your identity or browser fingerprint. |
| "WEP is fine if you don't broadcast SSID" | WEP is broken. Hidden SSID is security theater. |
| "MFA stops all phishing" | MFA blunts most credential theft, but phishing-resistant MFA (FIDO2 / WebAuthn) is needed against advanced attacks. |
| "Disabling UAC = better performance" | It opens a huge security hole. Leave UAC on. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **CIA Triad** | Confidentiality, Integrity, Availability |
| **MFA** | Multi-Factor Authentication |
| **TOTP** | Time-based One-Time Password (Google Authenticator, Authy) |
| **Hardware token** | YubiKey, FIDO2/WebAuthn key |
| **Least privilege** | Grant only the minimum access needed |
| **BitLocker / FileVault / LUKS** | Full-disk encryption (Windows/Mac/Linux) |
| **EFS** | Windows file-level encryption |
| **Recovery key** | BitLocker / FileVault recovery escape hatch |
| **Phishing / Smishing / Vishing / Whaling** | Email / SMS / Voice / Executive-targeted |
| **Tailgating** | Following badged person through secure door |
| **Shoulder surfing** | Watching credentials |
| **Mantrap / access vestibule** | Two-door entry, prevents tailgating |
| **WPA3 / SAE** | Modern Wi-Fi auth |
| **802.1X / RADIUS** | Enterprise per-user wireless auth |
| **Rootkit** | Kernel-level hiding malware |
| **Ransomware** | Encrypts files; demands payment |
| **7-step malware removal** | Verify → Quarantine → Disable Restore → Remediate → Schedule scans → Re-enable Restore → Educate |
| **EDR** | Endpoint Detection and Response |

### Acronyms cheat-row (Module 8)
| Acronym | Meaning |
|---------|---------|
| MFA | Multi-Factor Authentication |
| TOTP / HOTP | Time-/HMAC-based One-Time Password |
| SSO | Single Sign-On |
| RBAC | Role-Based Access Control |
| PII / PHI / PCI | Personal / Health / Payment Card data classes |
| AV / EDR / XDR | Antivirus / Endpoint Detection / Extended Detection |
| MDM | Mobile Device Management |
| BYOD | Bring Your Own Device |
| VPN | Virtual Private Network |
| WPA2 / WPA3 | Wi-Fi Protected Access |
| 802.1X | Port-based network access control |
| RADIUS | Remote Authentication Dial-In User Service |
| TLS | Transport Layer Security |
| UAC | User Account Control |
| EFS | Encrypting File System |

---

## 📊 Case Study — The 2021 Colonial Pipeline Ransomware Attack

**Situation.** On May 7, 2021, Colonial Pipeline — the operator of a 5,500-mile pipeline carrying ~45% of all fuel on the US East Coast — was hit with **DarkSide ransomware**. The initial-access vector was a *single legacy VPN account* that lacked MFA. The attackers used the harvested credentials to access internal networks, deploy ransomware, and exfiltrate ~100 GB of data.

**Decision and outcome.** Colonial shut down the entire pipeline within hours of detecting the ransomware on internal IT systems — *not because OT (operational technology) was infected*, but because they couldn't bill customers and feared inability to safely operate. Gas prices spiked across the US East Coast. Lines formed at gas stations from Georgia to New Jersey. The shutdown lasted ~6 days.

Colonial paid the ransom: **75 BTC (≈$4.4M)** within 24 hours. The decryptor provided by DarkSide was so slow that Colonial used their own backups for most of the restoration. The FBI later [recovered approximately 63.7 BTC](https://www.justice.gov/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside) of the ransom by seizing the threat-actor wallet.

**Lesson for the exam / for practitioners.**
- **One missing MFA account brought down an industry**. The cost of NOT enabling MFA on the legacy VPN was potentially in the **tens of millions** of dollars in pipeline downtime + reputational + regulatory fallout.
- **Pay ≠ guaranteed fast recovery.** Even with the decryptor, Colonial used backups.
- **Network segmentation** between IT and OT could have allowed pipeline operation during IT-only ransomware (architecturally was insufficient).
- **The downstream impact** of a single corporate ransomware event reached *the entire US East Coast economy*.

**Discussion (Socratic).**
- **Q1:** If you were Colonial's CISO 30 days before the attack, identifying the legacy VPN account, how would you have prioritized MFA enablement against pushback from operations? Pretend you have to convince an operations VP.
- **Q2:** Colonial paid the ransom within 24 hours. The US government later seized 63.7 of the 75 BTC paid. Argue both sides: was paying the ransom the right call, and should the recovery have changed policy?
- **Q3:** A regional grocery chain's CEO reads about Colonial and asks, "Are we next?" What 5 controls do you recommend? What's the realistic budget conversation?

---

## ✅ Module 8 Summary

You now know:

- 🛡️ Physical controls — mantrap, badge readers, cable lock, privacy screen
- 🔐 Authentication factors and the definition of true MFA
- 🔒 Encryption stack — BitLocker, FileVault, LUKS, EFS
- 🦠 The malware zoo + the **7-step CompTIA removal process** in order
- 🎣 Social-engineering catalog — phishing/smishing/vishing/whaling/tailgating/shoulder surfing
- 🌐 Wi-Fi security: WPA2 → WPA3, 802.1X / RADIUS for enterprise
- 🛡️ Endpoint hardening checklist

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 9 — Software Troubleshooting](../Module-09-Software-Troubleshooting/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 9](../Module-09-Software-Troubleshooting/Reading.md) revisits malware removal in operational detail; [Module 10](../Module-10-Operational-Procedures/Reading.md) covers documentation/change management.
> - Cross-course: **Security+ (course 09)** is the natural next step — much deeper crypto, threat actors, frameworks. SC-300 (course 27) is the Microsoft identity specialization.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 NIST SP 800-63B — *Digital Identity Guidelines: Authentication and Lifecycle Management*
- 📄 NIST SP 800-53 Rev 5 — Security and Privacy Controls
- 📄 CISA Cybersecurity Performance Goals — practical baseline controls

**Case-study sources:**
- 📄 US Department of Justice (June 2021). *Department of Justice Seizes $2.3 Million in Cryptocurrency Paid to the Ransomware Extortionists Darkside*.
- 📄 CISA & FBI Joint Advisory AA21-131A — *DarkSide Ransomware: Best Practices for Preventing Business Disruption from Ransomware Attacks*.

**Practitioner / exam:**
- 📖 [Professor Messer 220-1102 security module](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video-training-course/)
- 📖 Have I Been Pwned (https://haveibeenpwned.com) — check leaked passwords
- 📖 CISA Cybersecurity Awareness materials — free and excellent
