# 📋 Module 2 Cheat Sheet: Windows 11 Deployment & Imaging

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 💿 The 6 Modern Deployment Modes

| Mode | When |
|------|------|
| **Autopilot user-driven** | Direct-ship knowledge workers (default) |
| **Autopilot self-deploying** | Kiosks, shared frontline (needs TPM 2.0) |
| **Autopilot pre-provisioned** | White-glove for executives or high-touch |
| **Autopilot for existing devices** | Repurpose Windows 10/11 already deployed |
| **Provisioning package (.ppkg)** | Low-bandwidth, air-gapped, no internet at OOBE |
| **ConfigMgr OSD / MDT** | Custom on-prem imaging, complex drivers |

🔥 Each MD-102 deployment question = pick the right row.

---

## 🪪 Autopilot Flow

```
1. OEM/IT registers hash to tenant
2. Device ships to user
3. User powers on; OOBE → Microsoft Autopilot
4. Hash match → profile assigned
5. Entra join + Intune enroll + ESP runs
6. User signs in (or device boots into kiosk)
```

---

## 🏷️ Autopilot Profile Key Settings

| Setting | Default for cloud-only |
|---------|------------------------|
| Deployment mode | User-driven |
| Join to Entra | Microsoft Entra joined |
| Hide EULA / privacy | Yes |
| Hide change account | Yes |
| User type | Standard |
| Device name template | `<PREFIX>-%SERIAL%` |
| Allow pre-provisioned | Yes (optional) |

🚨 Cannot change deployment mode after enrollment, wipe + re-register.

---

## 📋 Enrollment Status Page (ESP)

| Setting | Recommended |
|---------|-------------|
| Block device use until installation complete | **Yes** |
| Show error after X minutes | Default 60 (tune to fleet) |
| Allow users to reset on failure | Yes |
| Allow users to use device if install fails | No for fully managed |
| Required apps tracked | **Subset** of mission-critical only |

---

## 📦 Provisioning Packages (.ppkg)

Built in **Windows Configuration Designer**. Use for:

- Bulk enrollment with no internet at OOBE
- Wi-Fi pre-config before Autopilot can reach internet
- Air-gapped / embedded scenarios
- Apply to running device without reimaging

---

## 🏗️ MDT vs ConfigMgr OSD vs Autopilot

| Need | Tool |
|------|------|
| Cloud-managed direct ship | **Autopilot** |
| Custom WIM + driver matrix, no ConfigMgr | **MDT** |
| Enterprise on-prem with collections + DPs | **ConfigMgr OSD** |
| Bridging during migration | **Co-management** |

🔥 ConfigMgr OSD is NOT deprecated. Many enterprises still run it.

---

## 🔁 Upgrade vs Reset Options

| Operation | What | When |
|-----------|------|------|
| **In-place upgrade** | Setup engine, preserves apps + data | Same-architecture OS upgrade |
| **Wipe-and-load** | Backup → reimage → restore | Major config change, security reset |
| **Autopilot reset** | Wipe + re-apply profile | Repurpose corp device for new user |
| **Fresh start** | User-initiated reset preserving data | "My PC is misbehaving" self-service |

---

## 💻 Windows 11 System Requirements

| Spec | Min |
|------|-----|
| CPU | 1 GHz, 2 cores, 64-bit, supported list |
| RAM | 4 GB |
| Storage | 64 GB |
| Firmware | UEFI + Secure Boot |
| TPM | **2.0** |
| Graphics | DirectX 12, WDDM 2.0 |
| Display | 720p, 9" diagonal |

🚨 TPM 2.0 is non-negotiable. TPM 1.2 = hardware refresh.

---

## 🔧 Autopilot Failure Cheat Codes

| Error | Cause |
|-------|-------|
| "Welcome to your new device" generic | Hash not registered or profile not assigned |
| ESP timeout | App fail or timeout too short |
| "Securing your device" hangs (self-deploy) | TPM 2.0 attestation failed |
| 0x80180014 (hybrid) | Intune Connector for AD unhealthy |
| "Workplace join failed" | User unlicensed or excluded |
| Win32 stuck "Installing" | Detection rule never returns true |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Autopilot user-driven for direct-ship"
- ✅ "Self-deploying for kiosk/shared device"
- ✅ "Pre-provisioned for executive white-glove"
- ✅ "In-place upgrade preserves apps and user data"
- ✅ "Autopilot reset for repurposing"

When you see these, often **wrong**:

- ❌ "Autopilot works without internet"
- ❌ "Self-deploying on TPM 1.2"
- ❌ "MDT enrolls into Intune automatically"
- ❌ "Change deployment mode after enrollment"
- ❌ "ConfigMgr OSD is deprecated"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Self-deploying mode for laptops issued to named users
- ❌ Tracking every app on the ESP (slow, times out)
- ❌ Skipping the pilot step before rollout
- ❌ Manual hash collection for new fleet (OEM should do it)
- ❌ Trying registry workarounds for TPM 1.2 → Windows 11

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. 4 Autopilot deployment modes? ___
2. Which mode requires TPM 2.0 attestation? ___
3. ESP default timeout? ___ Recommended app subset to track? ___
4. PowerShell cmdlet to extract hardware hash? ___
5. Difference between Autopilot reset and in-place upgrade? ___

---

➡️ [Module 3: Microsoft Intune Fundamentals](../Module-03-Intune/Reading.md)
