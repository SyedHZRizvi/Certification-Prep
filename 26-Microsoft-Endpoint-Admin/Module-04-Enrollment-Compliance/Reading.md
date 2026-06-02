# Module 4: Device Enrollment & Compliance 📲

> **Why this module matters:** Enrollment is the front door. If enrollment fails, nothing else works — no policy, no apps, no security. Compliance is the gate. Even after enrollment, compliance + Conditional Access decides who actually gets to sign in. MD-102 spends ~15–20% of its weight here. The exam expects you to pick the enrollment path in 60 seconds and trace the compliance → CA flow blindfolded.

> **Prerequisites for this module.** Before starting:
> - Module 1 (Modern Workplace) — join states and the Zero Trust mental model.
> - Module 2 (Deployment) — Windows Autopilot specifically.
> - Module 3 (Intune Fundamentals) — Company Portal, RBAC, group targeting.
> - Awareness of mobile platforms — you should know what an iPhone Apple ID is, what an Android Google account is.

---

## 🍕 A Story: The Friday Audit That Found 4,200 Surprise Devices

Maria's auditor walks into the conference room on a Friday at 4pm. He says one sentence:

> *"Show me every device that can access corporate email. With proof of its compliance status. Now."*

Maria pulls up Intune. The Devices blade shows 1,407 enrolled devices. The auditor frowns.

> *"That can't be right. Your Exchange Online sign-in logs show 5,612 distinct device identifiers in the last 30 days. Where are the other 4,200?"*

Maria's stomach drops. The auditor is right. There are 4,200 devices accessing corporate email *that aren't enrolled in Intune*. They came in through:

- **Outlook for iOS / Android** on personal phones with no MDM enrollment (~3,800 devices)
- **Native iOS Mail** with the corporate IMAP account configured manually (~250)
- **Outlook for Mac** on personal Macs with no enrollment (~150)
- **Random Outlook clients** running on home Windows PCs (~tablets, gaming PCs)

This is the gap MD-102 expects you to close. The answer is the four enrollment paths + compliance policies + Conditional Access — applied so that *only* devices that meet your criteria can reach corporate data, whether or not the user enrolled them. By Monday morning Maria has it all wired up. The audit closes clean. This module is how.

---

## 🪪 The Four Enrollment Paths (MEMORIZE THIS)

| Platform | Primary enrollment path | Alternative paths |
|----------|-------------------------|-------------------|
| **Windows 11** (corporate) | Windows Autopilot (any mode) | Manual enrollment via Settings, GPO-triggered enrollment, ConfigMgr co-mgmt enrollment, provisioning package |
| **Windows 11** (BYOD) | User adds work account via Settings | MDM auto-enrollment via Entra ID join with auto-enroll policy |
| **iOS / iPadOS** (corporate) | Apple Business Manager (ABM) → Automated Device Enrollment (ADE) | Manual via Company Portal app, Apple Configurator (USB) |
| **iOS / iPadOS** (BYOD) | User-initiated via Company Portal | User-enrollment mode (privacy-respecting MDM) |
| **macOS** (corporate) | Apple Business Manager (ABM) → ADE | Manual via Company Portal, Apple Configurator |
| **macOS** (BYOD) | User-initiated via Company Portal | Not commonly enrolled |
| **Android** (corporate) | Android Enterprise Fully Managed or Dedicated | NFC bump, QR code, Knox Mobile Enrollment (Samsung) |
| **Android** (BYOD) | Android Enterprise Work Profile via Company Portal | Personally-owned work profile (managed Google Play) |
| **Linux** (Ubuntu LTS) | Microsoft Edge + Intune compliance agent | None — limited scope |

🔥 **MEMORIZE the matrix.** Every enrollment question reduces to "which row + which alternative is right for the scenario?"

---

## 🍎 Apple Business Manager (ABM) & Automated Device Enrollment (ADE)

Apple Business Manager (ABM) — formerly DEP, Device Enrollment Program — is Apple's portal where you:

- **Add devices** you purchased from Apple or authorized resellers (linked to your Apple Customer Number)
- **Assign devices to your MDM** (in our case, Microsoft Intune)
- **Purchase apps via Apple Volume Purchase Program (VPP)** and assign device or user tokens
- **Manage Managed Apple IDs** for federated Entra ID Apple ID sign-in
- **Configure enrollment settings** like skipping setup panes, supervising the device

**Apple School Manager (ASM)** is the same thing for education customers.

### The flow

1. Purchase Apple devices through an Apple-authorized channel that supports ABM (Apple Store, Apple Business, authorized resellers like CDW).
2. Provide your Customer Number / Reseller ID to the seller — they auto-add devices to your ABM.
3. In ABM, **assign devices** to your Intune MDM server.
4. In Intune, sync ABM → Intune (`Devices → iOS/iPadOS → iOS/iPadOS enrollment → Enrollment program tokens`).
5. Create an **enrollment profile** in Intune (supervision, what setup panes to skip, user affinity, await final config).
6. **Assign the profile** to ABM-synced devices.
7. Device powers on → contacts Apple → Apple says "you belong to this MDM" → device enrolls automatically into Intune.

### Supervision

Supervised iOS / iPadOS devices unlock additional MDM capabilities:

- Single-app mode (kiosk)
- App allow/block lists
- Restrictions on app installs from outside MDM
- Lost mode
- Disable iCloud sync, screenshot, etc.

🔥 **MEMORIZE:** Supervision is only available via ADE (DEP) — not via manual enrollment. If the question wants "lock the iPad to one app," supervision via ABM + ADE is the answer.

---

## 🤖 Android Enterprise — The Four Scenarios

Android Enterprise is Google's API surface for enterprise-managed Android. Intune supports four scenarios:

| Scenario | What | Who |
|----------|------|-----|
| **Personally-owned work profile (BYOD)** | Work profile container alongside personal data; IT manages only the work side | Employees on personal Android |
| **Corporate-owned with work profile (COPE)** | Same as BYOD but device is corporate; IT can do device-level actions too | Corp Android with personal use allowed |
| **Fully managed** | Corporate-owned, no personal use, full IT control | Pure corporate Android |
| **Dedicated (COSU)** | Corporate Owned Single Use — kiosk, single-app, dedicated purpose | Shared frontline tablets |

| Requirement | Notes |
|-------------|-------|
| Managed Google Play account | Required for any Android Enterprise scenario |
| Enrollment trigger | Personal: Company Portal app. Corp: NFC bump, QR code, token (`afw#setup`), Knox Mobile Enrollment (Samsung) |
| App store | Managed Google Play (corp app catalog) instead of public Play Store |

🎯 **Exam tip:** "Shared tablets in a warehouse running a barcode-scanner app and nothing else" = **Dedicated (COSU)** with a single-app kiosk profile.

---

## 🚪 Enrollment Restrictions

Even within your tenant, you can constrain who and what can enroll. Two restriction types:

### Device platform restrictions

| Setting | Effect |
|---------|--------|
| Allow / block per platform | iOS / Android / Windows / macOS / Linux |
| Allow / block personally owned | Block BYOD on iOS but allow Android, for example |
| Min/max OS version | "Block Android < 11" |
| Block jailbroken / rooted devices | Always block — non-negotiable |
| Manufacturer block list (Android) | Block specific OEMs |

### Device limit restrictions

| Setting | Effect |
|---------|--------|
| Max devices per user | Default 5; can lower to limit fleet |

🚨 **Trap on the exam:** Enrollment restrictions are scoped to **user groups**, not device groups. (Device groups don't exist yet — the device hasn't enrolled!) Assign restrictions to user groups.

---

## 🪪 User vs Device Affinity

When a device enrolls, it can be:

- **User-affinity device** — bound to a primary user. Their settings, apps, identity follow them.
- **Device-affinity (no primary user)** — kiosk, shared, or autopilot-without-user. Apps are deployed to the device, not the user.

🎯 **Exam tip:** Kiosk/shared scenarios = device-affinity. Personal corporate laptop = user-affinity. A question that mentions "no specific user" or "shared" or "kiosk" implies device-affinity.

---

## ✅ Compliance Policies — The Gate

A compliance policy evaluates a device against rules and returns one of:

- **Compliant** — passed all rules
- **Not compliant** — failed at least one rule
- **In grace period** — failed but in the grace window before being marked non-compliant
- **Not evaluated** — policy hasn't run yet (new enrollment)

### Common compliance rules

| Platform | Common rules |
|----------|--------------|
| **Windows 11** | OS min version; BitLocker required; Secure Boot enabled; Code integrity; Antivirus required; Defender Antimalware running; Defender for Endpoint machine risk score ≤ Medium; Password complexity; TPM 2.0 present |
| **iOS / iPadOS** | OS min version; Passcode required; Jailbreak detection; Block apps from outside App Store; Threat level (Defender or 3rd party MTD) |
| **Android** | OS min version; Password; Encryption; SafetyNet / Play Integrity attestation; Threat level; Block rooted devices |
| **macOS** | OS min version; Gatekeeper; Firewall; FileVault disk encryption; Password |

### Actions for non-compliance

You can configure what happens when a device falls out of compliance:

| Action | Timing |
|--------|--------|
| Send email to end user | Immediately or after X days |
| Add device to retire list | After X days |
| Push notification to device | Immediately |
| Remotely lock the device | After X days |

🎯 **Exam tip:** Grace periods + escalating actions = the canonical pattern. Don't immediately wipe — warn, then lock, then retire.

---

## 🔐 Conditional Access — The Enforcer

Compliance is just a *flag*. Conditional Access is what *uses* the flag to block sign-in. The flow:

```
User signs in to Outlook → Entra ID auth → CA evaluates → grant/block
                                              │
                                              ▼
                                       Signals checked:
                                       - User identity & risk
                                       - Device platform
                                       - Device state (compliant?)
                                       - App being accessed
                                       - Sign-in location
                                       - Risk score (Identity Protection)
```

### CA grant controls

| Control | What |
|---------|------|
| **Require MFA** | Force MFA |
| **Require compliant device** | Block if Intune marked non-compliant |
| **Require Microsoft Entra hybrid joined device** | Block if not hybrid-joined |
| **Require approved client app** | Force Outlook Mobile (not native Mail) |
| **Require app protection policy** | Force MAM-protected version of the app |
| **Require password change** | After risky sign-in |
| **Terms of use** | User must accept terms |

### CA session controls

| Control | What |
|---------|------|
| **Sign-in frequency** | Force re-auth every X hours |
| **Persistent browser session** | Allow "stay signed in" or force per-session |
| **App enforced restrictions** | Reduce functionality (e.g., SharePoint read-only) |
| **Customize continuous access evaluation** | CAE on/off |

🔥 **MEMORIZE:** Compliance → CA "Require compliant device" is the most-tested combination in MD-102.

---

## 🎯 CA Policy Anatomy

A CA policy has six clauses:

| Clause | What |
|--------|------|
| **Users** | Who the policy applies to (include + exclude groups, all users, guests) |
| **Cloud apps** | Which target apps (all cloud apps, Exchange, SharePoint, custom) |
| **Conditions** | Sign-in risk, user risk, device platform, locations, client apps, device state |
| **Grant** | Block access or grant with conditions (MFA, compliant device, etc.) |
| **Session** | Sign-in frequency, app-enforced restrictions, CAE |
| **Enable policy** | Off / Report-only / On |

🎯 **Exam tip:** **Report-only mode** is the right answer for "test a CA policy without blocking users yet." It logs what the policy *would* have done.

🚨 **Trap on the exam:** Excluding **break-glass accounts** (emergency admin accounts) from CA is mandatory. Otherwise you can lock yourself out.

---

## 🛡️ Device Attestation (Windows 11)

Windows 11 supports cryptographic attestation of boot integrity via:

- **TPM 2.0** measures the boot chain (UEFI → bootloader → kernel → drivers)
- **Microsoft Azure Attestation** (MAA) service evaluates the measurements
- **Compliance policy** can require "Microsoft Defender for Endpoint machine risk" + "Device health attestation" be passing

Attestation answers: *"Did this device boot a measured, untampered Windows?"* It's the hardware-rooted version of "I trust this device."

🔥 **MEMORIZE:** Windows 11 device attestation is what blocks compromised boot chains from passing as compliant. Required for high-assurance scenarios (banking apps, classified workloads).

---

## 🔍 Conditional Access Filter for Devices

A CA condition introduced to let you target/exclude devices by attribute without putting them in groups. Examples:

| Filter expression | Use |
|-------------------|-----|
| `device.manufacturer -eq "Microsoft Corporation"` | Only Surface devices |
| `device.model -eq "ThinkPad X1 Carbon Gen 11"` | Only specific model |
| `device.operatingSystem -eq "Windows" -and device.osVersion -startsWith "10.0.22"` | Only Windows 11 |
| `device.trustType -eq "AzureAD"` | Only Entra-joined |
| `device.trustType -eq "ServerAd"` | Only hybrid-joined |
| `device.extensionAttribute1 -eq "PCI"` | Custom-tagged devices |

🎯 **Exam tip:** Filter for Devices is the right answer when "include or exclude based on device attribute, not group membership."

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Compliance policy blocks sign-in" | ❌ Compliance is a flag; Conditional Access blocks sign-in |
| "Enrollment restrictions target device groups" | ❌ They target user groups (no device record yet) |
| "Supervised iOS is available without ABM" | ❌ Supervision needs ABM + ADE |
| "Android BYOD doesn't need work profile" | ❌ Android Enterprise BYOD = work profile |
| "Linux compliance is the same as Windows" | ❌ Linux is narrow — limited compliance + Edge cfg |
| "Disable a CA policy to test it" | ❌ Use Report-only mode |
| "Break-glass accounts go in normal CA scope" | ❌ Always exclude from CA |

---

## 🧪 Task-Sequencing Practice: Build Compliance + CA for a Sensitive App

**Order these steps to require compliant devices for Salesforce.com access via SSO.**

The correct sequence:

1. ✅ **Define what "compliant" means** — pick the rules (BitLocker, OS min ver, Defender, etc.)
2. ✅ **Create a compliance policy** in Intune for the platform (Windows + iOS + Android variants)
3. ✅ **Assign to user groups** (typically All employees, exclude break-glass)
4. ✅ **Verify devices report compliant** (let it sync, fix non-compliance)
5. ✅ **Federate Salesforce SSO** with Entra ID (out of scope here, assume done)
6. ✅ **Create a CA policy** — users: All staff. Apps: Salesforce. Grant: Require compliant device + MFA.
7. ✅ **Enable in Report-only** mode first.
8. ✅ **Review Report-only logs** for 3–7 days; fix any users who'd be blocked.
9. ✅ **Switch to On** after report-only validates.
10. ✅ **Document the policy** + exclusion list + break-glass accounts.

⚠️ Skipping step 7 means you'll block legitimate users on day 1. Skipping step 10 means the next admin can't reproduce your reasoning.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Apple Business Manager (ABM)** | Apple's portal for company device enrollment + VPP app purchasing |
| **Apple School Manager (ASM)** | ABM equivalent for education |
| **Automated Device Enrollment (ADE)** | The ABM-driven zero-touch enrollment flow (formerly DEP) |
| **VPP (Volume Purchase Program)** | Apple's bulk app licensing program |
| **Managed Apple ID** | Federated Apple ID controlled by your org |
| **Android Enterprise** | Google's enterprise-managed Android API surface |
| **Work profile** | Container on personal Android isolating work data |
| **COPE** | Corporate-Owned, Personally Enabled — work profile on corp Android |
| **COSU / Dedicated** | Corporate-Owned Single-Use — kiosk Android |
| **Managed Google Play** | Required Google enterprise account for Android Enterprise |
| **Knox Mobile Enrollment** | Samsung's bulk enrollment service |
| **User affinity** | Device bound to a primary user vs shared |
| **Compliance policy** | Intune rules that evaluate device health |
| **Grace period** | Time window before non-compliance triggers an action |
| **Conditional Access (CA)** | Entra ID policy engine using signals to grant/block sign-in |
| **Report-only mode** | CA policy state that logs but doesn't enforce |
| **Break-glass account** | Emergency admin account excluded from all CA |
| **Filter for Devices** | CA condition targeting device by attribute, not group |
| **TPM 2.0** | Trusted Platform Module v2 — hardware root of trust |
| **Device attestation** | Cryptographic proof of boot integrity |

---

## ✅ Module 4 Summary

You now know:

- 📲 The 4 enrollment paths and platform-specific quirks
- 🍎 Apple Business Manager + ADE flow and why supervision needs it
- 🤖 Android Enterprise's 4 scenarios (BYOD, COPE, fully managed, COSU)
- 🚪 Enrollment restrictions and that they target user groups
- 🪪 User-affinity vs device-affinity
- ✅ Compliance policy structure + actions for non-compliance
- 🔐 Conditional Access mechanics — users, apps, conditions, grant, session, enable
- 🎯 The compliance → CA enforcement flow (the gate)
- 🛡️ Device attestation on Windows 11
- 🔍 CA Filter for Devices for fine-grained targeting

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 5: Application Deployment & Configuration](../Module-05-App-Deployment/Reading.md)

---

## 📊 Case Study — Unilever's BYOD-First iOS + Android Rollout (2021–2024)

**Situation.** Unilever (the consumer goods giant, ~127,000 employees in 100+ countries) had a long-standing BYOD policy: most non-executive employees were expected to use their personal phones for work email and Teams. Pre-2021, this was managed via a fragmented combination of Outlook for iOS / Android with ad-hoc MAM policies, native iOS Mail using Exchange ActiveSync, and almost no oversight of unmanaged Android devices. The CISO reported (Unilever public ESG + sustainability reports + Microsoft customer story, 2023):

- ~83,000 personal devices accessing Unilever email
- < 30% of those devices had any form of Intune App Protection Policy applied
- Zero ability to enforce minimum OS version or jailbreak detection on personal devices
- Multiple incidents of corporate data leaking via personal cloud-sync apps (e.g., contacts syncing to user's iCloud)

**Decision.** Unilever's Modern Workplace program standardized on the following BYOD architecture for mobile (Microsoft customer story, *Unilever — Modern Workplace*, 2023):

1. **Mandate Microsoft Outlook Mobile and Microsoft Teams** as the only approved mobile clients for corporate email + chat.
2. **Apply App Protection Policy (APP) without enrollment** to those apps for all BYOD users.
3. **Require Conditional Access** "Require approved client app" + "Require app protection policy" for Exchange Online + SharePoint Online on mobile platforms.
4. **Block native iOS Mail and ActiveSync** from receiving corporate email (via CA + Exchange transport rules).
5. **For corporate Android (frontline + field)**, enroll via Android Enterprise Fully Managed.
6. **For corporate iOS (executive)**, enroll via ABM + ADE.
7. **Configure compliance policy** requiring jailbreak/root absent, OS min version (iOS 15+, Android 11+), and Defender threat level low.

**Outcome.** Unilever reported (Microsoft customer story update, 2024):

- **BYOD MAM coverage** rose from ~30% to **~98%** of personal devices touching corporate data.
- **Native iOS Mail incidents** (the unmanaged client risk) dropped to **near zero** within 90 days of CA enforcement.
- **Mean time to revoke access from a departing employee's personal phone** dropped from "unknown / never" to **under 10 minutes** (selective wipe via APP).
- **Employee satisfaction with BYOD** remained high — users could keep their personal data untouched and only the work apps were governed.
- **Corporate data leakage via personal cloud sync** dropped from several incidents per quarter to zero in the 12 months following rollout.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* MD-102 weights MAM heavily and *why* the exam treats "MAM without enrollment + CA require app protection policy + block legacy auth + block ActiveSync" as the canonical BYOD answer. The economic and operational case is overwhelming: you get ~98% of the security benefit of full MDM with ~5% of the user friction. When the exam describes "BYOD at scale" or "personal phones accessing work email," the answer is **APP + CA require approved client app + require app protection policy**, every time. The Unilever story is why.

**Discussion (Socratic).**
- **Q1.** Unilever blocked native iOS Mail entirely. Argue both sides: when is it right to mandate a specific email client (Outlook Mobile) over giving users choice? What does each choice cost in user satisfaction vs security?
- **Q2.** Unilever's executive iOS fleet uses ABM + ADE (full MDM). The same exec might also have a personal phone with the MAM-only model. Defend the dual-device pattern — when is "one phone managed, one not" the right answer vs "force everything through one device"?
- **Q3.** Unilever's compliance policy requires Android 11+. A regional unit in a developing market has employees on Android 9 devices. Defend the right operational answer — does Unilever buy them new phones, exempt them, or accept the gap? What does each choice say about the company's security posture?

---

> **Where this leads.**
> - Inside this course: Module 5 covers app deployment, which is what fills the apps your compliance + CA policies are governing access to; Module 6 covers Defender, which is what feeds risk signals into compliance policies; Module 8 covers the troubleshooting tools for "why didn't this compliance policy apply?"
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) and [`09-CompTIA-Security-Plus`](../../09-CompTIA-Security-Plus/README.md) both cover Conditional Access from different angles.
> - Practice: Practice Exam 1 has roughly 8–10 questions from this module (enrollment paths, ABM, Android scenarios, compliance, CA). Final Mock Exam revisits with multi-step scenarios.

---

## 💬 Discussion — Socratic prompts

1. **ADE vs Apple Configurator.** Apple supports two device-enrollment paths: ADE (cloud-driven, zero-touch) and Apple Configurator (USB, manual). When is Configurator still the right answer in 2026?
2. **Compliance grace period.** Microsoft documentation recommends a 1-day grace period before non-compliance triggers actions. A risk-averse CISO wants zero grace ("non-compliant means blocked, now"). Defend the recommended grace period by naming the operational scenario where zero-grace causes outages.
3. **CA Filter for Devices vs dynamic group.** Both can constrain a policy to certain devices. When is Filter for Devices the right answer over a dynamic device group?
4. **Block jailbroken devices.** Should you block or just warn? Argue both sides for (a) a hospital, (b) a software startup, (c) a defense contractor.
5. **Break-glass accounts.** Every CA design must exclude at least one break-glass account. Defend the design choice — why not just exempt the global admin?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Set up Intune enrollment for iOS devices using ABM](https://learn.microsoft.com/mem/intune/enrollment/device-enrollment-program-enroll-ios) (Microsoft, current)
- 📖 [Android Enterprise enrollment scenarios in Intune](https://learn.microsoft.com/mem/intune/enrollment/android-enrollment-overview)
- 📖 [Conditional Access overview](https://learn.microsoft.com/entra/identity/conditional-access/overview)
- 📖 [Filter for devices in Conditional Access](https://learn.microsoft.com/entra/identity/conditional-access/concept-condition-filters-for-devices)
- 📖 [Compliance policies in Microsoft Intune](https://learn.microsoft.com/mem/intune/protect/device-compliance-get-started)
- 📖 [Windows 11 device health attestation](https://learn.microsoft.com/windows/security/hardware-security/tpm/trusted-platform-module-overview)
- 📖 Forrester *Total Economic Impact of Microsoft Intune* (most recent edition) — independent ROI study
