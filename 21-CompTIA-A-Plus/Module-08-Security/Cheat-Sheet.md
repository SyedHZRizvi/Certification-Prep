# 📋 Module 8 Cheat Sheet: Security Fundamentals

> One page. Print it. Memorize the 7-step process.

---

## 🦠 7-STEP MALWARE REMOVAL (Memorize Cold)

```
1. Investigate + verify
2. Quarantine (disconnect)
3. Disable System Restore (Windows)
4. Remediate (update AV, scan, remove)
5. Schedule scans + run updates
6. Re-enable System Restore + new restore point
7. Educate the user
```

---

## 🔐 MFA Factor Categories

| Factor | Examples |
|--------|----------|
| **KNOW** | Password, PIN, security Q |
| **HAVE** | Phone (TOTP), YubiKey, smart card |
| **ARE** | Fingerprint, Face ID |
| (+ where you are, what you do) | Geofencing, behavior |

🚨 **Password + PIN ≠ MFA** (both "know"). Password + phone push = MFA.

---

## 🔒 Encryption by OS

| OS | Full disk | Per file |
|----|-----------|----------|
| Windows | **BitLocker** | EFS |
| macOS | **FileVault** |, |
| Linux | **LUKS** |, |
| Cross | VeraCrypt |, |

---

## 🎣 Social Engineering Quick Map

| Attack | Vector |
|--------|--------|
| Phishing | Email mass |
| Spear phishing | Targeted email |
| Whaling | Exec-targeted |
| Smishing | SMS |
| Vishing | Phone/voice |
| Pharming | DNS / typo domain |
| Shoulder surfing | Watching screen |
| Tailgating | Following badged person |
| Dumpster diving | Trash searching |
| Evil twin | Fake Wi-Fi AP |

---

## 🛡️ Wi-Fi Security Tiers

- ❌ WEP, broken, never use
- ❌ WPA, deprecated
- ✅ WPA2-AES, solid baseline
- ✅✅ WPA3-SAE, modern, recommended
- 🏢 WPA2/3-Enterprise = 802.1X + RADIUS (per-user)

---

## 🦠 Malware Types

| Type | Trait |
|------|-------|
| Virus | Self-replicating, needs host |
| Worm | Self-propagating |
| Trojan | Disguised as legit |
| Ransomware | Encrypts files |
| Rootkit | Kernel-level, hides |
| Keylogger | Records keystrokes |
| Bot | Remote-controlled |
| Spyware | Collects info |
| Fileless | Memory-only |
| Cryptominer | Steals CPU |

---

## 🛡️ Physical Controls Cheat

| Control | Type |
|---------|------|
| Mantrap / vestibule | Preventive, anti-tailgate |
| Badge + biometric | Preventive |
| Visible camera | Deterrent |
| Recording camera | Detective |
| Cable lock | Preventive |
| Privacy screen | Preventive, anti-shoulder-surf |
| Shred bin | Preventive, anti-dumpster |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Enable MFA"
- "Apply least privilege"
- "Use full-disk encryption (BitLocker/FileVault/LUKS)"
- "Isolate the host first"
- "Don't pay the ransom; restore from backup"
- "Educate the user"
- "Use WPA3 (or WPA2-AES minimum)"

❌ Often **wrong**:

- "Password + PIN = MFA"
- "Pay the ransom, they're honest"
- "Disable UAC"
- "WEP is fine"
- "Share admin password to save time"
- "Antivirus alone is enough"

---

## 🗓️ Memorize Cold

- 7-step malware removal IN ORDER
- 3 MFA factor categories (know / have / are)
- BitLocker = Windows, FileVault = Mac, LUKS = Linux
- WPA3 > WPA2 > WPA > WEP
- Mantrap = anti-tailgating
- Security = **25% of 220-1102 (second-largest)**

---

## ✏️ Quick Self-Check

1. 7-step malware removal? ___
2. 3 MFA factor categories with an example each? ___
3. Encryption for Windows / Mac / Linux full disk? ___
4. First action when ransomware is reported? ___
5. WPA2-Enterprise vs Personal, what's the difference? ___

---

➡️ [Module 9: Software Troubleshooting](../Module-09-Software-Troubleshooting/Reading.md)
