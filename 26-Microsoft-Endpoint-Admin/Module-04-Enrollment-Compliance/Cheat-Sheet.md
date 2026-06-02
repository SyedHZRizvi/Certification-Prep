# 📋 Module 4 Cheat Sheet: Device Enrollment & Compliance

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📲 Enrollment Paths by Platform

| Platform | Corporate path | BYOD path |
|----------|----------------|-----------|
| **Windows 11** | Windows Autopilot | Settings → Add work account |
| **iOS / iPadOS** | ABM + ADE | Company Portal app |
| **macOS** | ABM + ADE | Company Portal |
| **Android** | Android Enterprise Fully Managed / Dedicated | Android Enterprise Work Profile via CP |
| **Linux** | Edge + compliance agent | n/a |

---

## 🍎 Apple Business Manager (ABM)

ABM = Apple's enterprise portal. Used for:

- Assign devices to your MDM (Intune)
- Bulk purchase apps (VPP)
- Managed Apple IDs
- Configure ADE enrollment profiles

🔥 Supervision (kiosk, single-app, restrictions) **only via ADE**.

---

## 🤖 Android Enterprise — 4 Scenarios

| Scenario | When |
|----------|------|
| **BYOD work profile** | Personal phone, work container |
| **COPE** | Corp device, work profile + personal apps allowed |
| **Fully managed** | Corp device, no personal use |
| **Dedicated (COSU)** | Corp single-purpose / kiosk |

All require **Managed Google Play** account.

---

## 🚪 Enrollment Restrictions

- Target **user groups** (no device exists yet)
- Block per platform (iOS/Android/Windows/etc.)
- Block personally owned
- Min/max OS version
- Block jailbroken / rooted
- Max devices per user (default 5)

---

## ✅ Compliance Policy

Returns: **Compliant / Not compliant / In grace / Not evaluated**

| Platform | Common rules |
|----------|--------------|
| Windows 11 | BitLocker, Secure Boot, OS ver, Defender, MDE machine risk, TPM 2.0 |
| iOS | OS ver, passcode, jailbreak detection, threat level |
| Android | OS ver, password, encryption, SafetyNet/Play Integrity, root detection |
| macOS | OS ver, Gatekeeper, FileVault, firewall |

Actions for non-compliance: email → push → lock → retire (with grace).

---

## 🔐 Conditional Access (CA)

| Clause | Examples |
|--------|----------|
| Users | All / Specific groups / Guests (exclude break-glass!) |
| Cloud apps | All / Exchange / SharePoint / Salesforce |
| Conditions | Sign-in risk, device state, platform, location, client apps |
| **Grant** | Block OR allow with MFA / compliant device / hybrid joined / approved app / APP |
| Session | Sign-in frequency, persistent browser, app restrictions |
| State | Off / **Report-only** / On |

🔥 Compliance + CA "Require compliant device" = most-tested combo.

---

## 🎯 Filter for Devices (CA condition)

Target/exclude by attribute (not group):

| Expression | Use |
|-----------|-----|
| `device.manufacturer -eq "Microsoft Corporation"` | Only Surface |
| `device.osVersion -startsWith "10.0.22"` | Windows 11 only |
| `device.trustType -eq "AzureAD"` | Only Entra-joined |
| `device.extensionAttribute1 -eq "PCI"` | Custom-tagged |

---

## 🛡️ Windows 11 Attestation

- TPM 2.0 measures boot chain
- Microsoft Azure Attestation evaluates
- Compliance policy can require: Device Health Attestation + MDE machine risk

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Apple Business Manager + ADE for corporate iOS"
- ✅ "Android Enterprise Work Profile for BYOD"
- ✅ "Compliance + CA require compliant device"
- ✅ "Report-only mode for CA testing"
- ✅ "Exclude break-glass from CA"
- ✅ "Selective wipe via APP for BYOD"

When you see these, often **wrong**:

- ❌ "Supervision without ABM"
- ❌ "Enrollment restrictions on device groups"
- ❌ "Compliance policy blocks sign-in directly"
- ❌ "Include beats Exclude in CA"
- ❌ "Skip break-glass exclusion"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ No grace period on compliance (causes outages)
- ❌ Skipping report-only when rolling out new CA
- ❌ Forgetting break-glass exclusion
- ❌ Trusting native iOS Mail for corporate
- ❌ MDM full enrollment for BYOD (use MAM + CA instead)

---

## 🧪 CA Flow

```
User signs in
   ↓
Entra ID auth
   ↓
CA evaluates: user, app, device, location, risk
   ↓
Grant or Block
   ↓ (if grant w/ conditions)
MFA / compliant device / approved app / APP
   ↓
Session controls (frequency, restrictions)
```

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. 4 Android Enterprise scenarios? ___
2. Supervision requires what? ___
3. Compliance returns what 4 states? ___
4. Filter for Devices vs dynamic group — when? ___
5. What's the mandatory exclusion on every CA policy? ___

---

➡️ [Module 5: Application Deployment & Configuration](../Module-05-App-Deployment/Reading.md)
