# 📋 Module 3 Cheat Sheet: Microsoft Intune Fundamentals

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## ☁️ Architecture

- Admin portal: **intune.microsoft.com**
- Cloud SaaS, no on-prem servers
- Uses each platform's native MDM channel:

  - Windows MDM stack
  - Apple MDM protocol (requires APNs cert)
  - Android Enterprise APIs (requires Managed Google Play)
  - Linux Edge agent (compliance + Edge config only)

---

## 📱 MDM vs MAM

| | MDM | MAM |
|---|-----|-----|
| Manages | Entire device | Data inside specific apps |
| Enrolled | Device | App (or sign-in only) |
| Wipe | Whole device | Only work data |
| Right for | Corporate-owned | BYOD |

🔥 If only one thing, memorize this table.

---

## 💳 Intune Licensing

| Plan | Adds |
|------|------|
| Plan 1 | Core MDM + MAM + config + compliance + apps |
| Plan 2 | Plan 1 + Advanced Endpoint Analytics + Remote Help base + Specialty devices |
| Suite | Plan 1 + Plan 2 + EPM + Cloud PKI + Tunnel for MAM + Enterprise App Mgmt |

Bundled in:

- **M365 E3** → Plan 1
- **M365 E5** → Plan 1 (Plan 2 features sold separately)
- **EMS E5** → Plan 1 + Entra P2 + AIP P2 + Defender for Cloud Apps

---

## 🖥️ Platforms Intune Manages

| Platform | MDM | MAM |
|----------|-----|-----|
| Windows 10/11 | ✅ | ✅ |
| iOS / iPadOS | ✅ (APNs) | ✅ |
| Android Enterprise | ✅ (Managed GP) | ✅ |
| Android AOSP | ✅ limited | ❌ |
| macOS | ✅ (APNs) | ❌ |
| Linux (Ubuntu LTS) | ✅ compliance + Edge cfg only | ❌ |

---

## 🎯 Group Targeting

- Policies/apps target **Entra groups**, never users directly
- **Include** + **Exclude** + **Filter**
- 🚨 **Exclude beats Include**
- Pseudo-groups: All users / All devices
- Dynamic groups for auto-membership (`device.deviceOSType -eq "iOS"`)

---

## 🏢 RBAC + Scope Tags

Built-in roles:

- Intune Administrator (full)
- Help Desk Operator (read + remote actions)
- Policy and Profile Manager
- Application Manager
- Endpoint Security Manager
- Read Only Operator
- Cloud PKI Administrator

**Scope tags** = partition visibility. Tag devices/policies/apps; assign admin only their tags. Regional admin pattern.

---

## 🛡️ App Protection Policies (APP)

The MAM workhorse. Key settings:

| Setting | Effect |
|---------|--------|
| Data transfer to other apps | Allow / Managed only / Block |
| Save copies of org data | Block or allow specific dest |
| Cut/copy/paste with other apps | Restrict to managed apps |
| Encrypt org data | Required (in-app container) |
| App PIN | Required, complexity, retry |
| Conditional launch | Block on jailbreak / OS too old / offline grace |

🎯 "Stop Outlook copy to WhatsApp" = APP "policy managed apps" only.

---

## 🔄 Configuration Profile Types

| Type | When |
|------|------|
| **Settings catalog** | Modern default, thousands of settings |
| Templates | Wi-Fi, VPN, cert, email, kiosk |
| Administrative templates (ADMX) | Windows GPO equivalent |
| Imported ADMX | Custom ADMX files |
| **Custom OMA-URI** | Rare CSP not in UI |
| Endpoint Protection (legacy) | Mostly absorbed by Endpoint Security blade |

---

## 📲 Company Portal

User-facing front door for:

- Self-service enrollment
- App catalog (install available apps)
- Compliance status
- Device actions (sync, reset, remove)
- Help links

🚨 Required for iOS / Android self-service enrollment.

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "App Protection Policy for BYOD without enrollment"
- ✅ "Settings Catalog for the configuration"
- ✅ "Scope tags + custom RBAC role for regional admin"
- ✅ "Dynamic device group based on OS"
- ✅ "Exclude beats Include"

When you see these, often **wrong**:

- ❌ "MAM means managing app installations"
- ❌ "Linux has full Intune feature parity"
- ❌ "Assign policy directly to a user"
- ❌ "Include wins over Exclude"
- ❌ "iOS needs no certificate to manage"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Targeting policies to "All devices" by default (no segmentation)
- ❌ Not using scope tags in multi-region tenants
- ❌ Custom OMA-URI when Settings Catalog supports the setting
- ❌ Giving every admin Intune Administrator role
- ❌ Forcing MDM on BYOD instead of MAM

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. MDM vs MAM in one sentence? ___
2. Plan 1 vs Plan 2 vs Suite, what does each add? ___
3. Apple cert required for iOS management? ___
4. Exclude vs Include, which wins? ___
5. Modern preferred configuration surface? ___

---

➡️ [Module 4: Device Enrollment & Compliance](../Module-04-Enrollment-Compliance/Reading.md)
