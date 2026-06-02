# Module 5: Application Deployment & Configuration 📦

> **Why this module matters:** MD-102 weighs application management at 10–15% but you'll see at least 5 questions about packaging, detection rules, dependencies, and supersedence. The exam loves "app stuck in Installing forever" troubleshooting scenarios. Get the Win32 packaging mental model right and these questions become trivial.

> **Prerequisites for this module.** Before starting:
> - Module 3 (Intune Fundamentals) — Settings Catalog, group targeting, RBAC.
> - Module 4 (Enrollment & Compliance) — devices are enrolled; we're now pushing apps to them.
> - Basic Windows command-line literacy — what `/quiet` and `/qn` flags do, why MSI vs EXE matters.

---

## 🍕 A Story: The Engineering App Rollout That Wasn't

Maria's R&D team in San Diego needs a custom CAD application — call it **NorthwindCAD-2024.exe** — pushed to 53 engineering workstations. The product manager wants it on every engineer's machine by Friday. Tuesday morning Maria opens Intune, clicks **Apps → Add → Windows app (Win32)**, uploads the IntuneWin file, assigns it to the Engineering group, and goes to lunch.

Friday morning. 53 devices. **17 show "Installed," 24 show "Installing," 8 show "Failed," 4 show "Not detected after install."** The product manager is furious. Maria spends the next day debugging:

- The 24 "Installing" devices: she set the **detection rule to look for `C:\Program Files\NorthwindCAD\app.exe`** — but version 2024 installs to `C:\Program Files\NorthwindCAD-2024\app.exe`. The detection never fires.
- The 8 "Failed" devices: the installer requires **Visual C++ Redistributable 2019** as a dependency, which she didn't include. She added it as a dependency relationship and it self-healed.
- The 4 "Not detected after install": these are running an older v2023 version where install path differs again. She added a **supersedence** relationship from 2024 → 2023 to handle the upgrade.
- One device shows "Failed" with error `0x80073CFE` — that's an MSI conflict because **another LOB app already installed v2024 to a different location**. She had to add an uninstall command for the old LOB version first.

By Tuesday next week, 53/53 show "Installed." Maria has earned scars. This module gives you the scars without the customer-facing failures.

---

## 🏗️ The Five Windows App Types in Intune (MEMORIZE THIS)

| Type | What | When |
|------|------|------|
| **Win32 app (.intunewin)** | Packaged installer (EXE/MSI/script) wrapped via IntuneWinAppUtil | Modern default for any custom app |
| **Line-of-business (LOB)** app | Raw MSI uploaded directly | Simple MSI with no dependencies |
| **Microsoft Store app (new)** | Pulled from the new Microsoft Store | Microsoft Store apps |
| **Microsoft 365 Apps** | Built-in template for Office Click-to-Run | Outlook/Word/Excel/PowerPoint/OneNote bundle |
| **Web app / web link** | URL pinned as an app icon | Browser-based SaaS apps |

🔥 **Memorize the Win32 vs LOB distinction.** LOB = simple MSI, no extras. Win32 = `.intunewin` package with install/uninstall commands, detection rules, requirements, dependencies, supersedence, return codes.

---

## 📦 Win32 App Packaging — The IntuneWinAppUtil Tool

### Step 1 — Prepare your source folder

```
C:\Source\NorthwindCAD\
├── setup.exe           ← the installer (or .msi)
├── EULA.rtf
├── settings.ini
└── pre-install.ps1     ← optional pre-install script
```

### Step 2 — Run IntuneWinAppUtil

```cmd
IntuneWinAppUtil.exe -c "C:\Source\NorthwindCAD" -s "setup.exe" -o "C:\Output"
```

This wraps everything in the source folder into a single `setup.intunewin` file in the output folder. The tool:

- Bundles all files in the source folder
- Encrypts the package
- Generates metadata (size, source path, version)
- Names the output `<setup-file>.intunewin`

### Step 3 — Upload to Intune

In Intune admin center → **Apps → Add → Windows app (Win32)** → upload `.intunewin`. You then configure:

| Section | Required entries |
|---------|------------------|
| **Program** | Install command, uninstall command, install behavior (system/user), device restart behavior, return codes |
| **Requirements** | OS architecture, min OS, minimum disk space, minimum memory, minimum CPU, custom script |
| **Detection rules** | MSI product code / file existence + version / registry key / PowerShell script |
| **Dependencies** | Other apps that must be installed first |
| **Supersedence** | Older apps this replaces (and whether to uninstall them) |
| **Assignments** | Required / Available / Uninstall targeting groups |

---

## 🔍 Detection Rules — The Single Most Common Failure

Detection rules tell Intune **whether the app is already installed**. Without a working detection rule, Intune will:

- Re-install on every cycle (annoying)
- Report "Failed" even though the install succeeded
- Get stuck in "Installing" status forever

### The 4 detection rule types

| Type | Use |
|------|-----|
| **MSI product code** | Best for MSI installers — pulled directly from the MSI metadata |
| **File** | Check file exists at path, with optional version comparison |
| **Registry** | Check registry key/value exists, with optional comparison |
| **Custom script (PowerShell)** | Anything else — your script returns exit code 0 + stdout for "detected" |

### Custom detection script pattern

```powershell
# Return exit 0 + any stdout = installed
# Return exit 1 (or no stdout) = not installed

$app = Get-ItemProperty `
    "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*" |
    Where-Object { $_.DisplayName -eq "NorthwindCAD" -and $_.DisplayVersion -eq "2024.1.0" }

if ($app) {
    Write-Output "Detected: $($app.DisplayName) $($app.DisplayVersion)"
    exit 0
}
exit 1
```

🚨 **Trap on the exam:** A custom detection script that just `Write-Output "something"` without a corresponding exit code will report wrong. Both `exit 0` AND non-empty stdout are required for "detected."

---

## 🔗 Dependencies — App A Requires App B First

A dependency says "before this app installs, ensure App B is installed first." Intune handles it like a graph:

```
NorthwindCAD ──depends-on──> VC++ 2019 Redistributable
NorthwindCAD ──depends-on──> .NET Framework 4.8
```

- Dependencies can be **automatically installed** (with explicit consent) or **expected to already exist**
- Up to **100 dependencies** per Win32 app
- Detection runs on dependencies first

🎯 **Exam tip:** "App needs VC++ Redistributable first" = dependency relationship. Don't try to bundle it in the source folder — use the dependency feature so Intune tracks state.

---

## 🔄 Supersedence — App A Replaces App B

Supersedence says "this new app replaces these older apps." Intune handles it:

```
NorthwindCAD 2024 ──supersedes──> NorthwindCAD 2023 (uninstall before install)
NorthwindCAD 2024 ──supersedes──> NorthwindCAD 2022 (uninstall before install)
```

- Up to **10 supersedence relationships** per Win32 app
- Maximum **two levels of supersedence depth**
- Option per relationship: uninstall the old app before installing new, OR just update in place

🚨 **Trap on the exam:** Supersedence has a **maximum depth of 2**. If you chain v2024 → v2023 → v2022 → v2021, that's depth 3 and won't work — flatten the chain.

---

## ⏱️ Install Behaviors and Return Codes

### Install behavior

| Option | Effect |
|--------|--------|
| **System** | Runs as SYSTEM account (default for Win32) |
| **User** | Runs in user context — needed for per-user installs |

### Device restart behavior

| Option | Effect |
|--------|--------|
| **Determine based on return codes** | Use the return codes table |
| **No specific action** | Don't force restart |
| **App install may force a device restart** | Allow installer to restart |
| **Intune will force a mandatory device restart** | Always restart after install |

### Return codes

| Code | Meaning |
|------|---------|
| **0** | Success |
| **1707** | MSI success (older) |
| **3010** | Soft reboot required |
| **1641** | Hard reboot initiated |
| **1618** | Another install in progress (retry) |

You can map custom return codes to Success / Soft reboot / Hard reboot / Retry.

---

## 📦 MSIX — The Modern Windows App Format

**MSIX** is Microsoft's universal Windows app package format (replaces the old `.appx`). Benefits over MSI / Win32:

| MSIX advantage | Notes |
|----------------|-------|
| Clean install / uninstall (no registry leftovers) | Container-based |
| Side-by-side versioning | Multiple versions of same app coexist |
| Auto-update via Microsoft Store or sideload | Built-in update channel |
| Per-user install without admin | Standard user can install |
| Modification packages | Customize an app without repackaging |
| Wrapping existing Win32 / MSI / Click-Once | Modernize legacy apps |

Intune supports MSIX uploads directly as a Win32-style app type.

---

## 🍎 iOS App Types in Intune

| Type | What |
|------|------|
| **iOS store app** | Public iOS App Store app (free; VPP for paid) |
| **iOS LOB app** | Custom enterprise `.ipa` uploaded |
| **iOS VPP app** | Purchased via VPP, assigned by device or user token |
| **iOS web clip** | Web URL pinned to home screen |
| **Microsoft 365 Apps** | iOS Office bundle |

---

## 🤖 Android App Types in Intune

| Type | What |
|------|------|
| **Android store app (Managed Google Play)** | Public Play app accepted into your enterprise catalog |
| **Android Enterprise system app** | Pre-installed system app |
| **Managed Google Play app** | Custom enterprise APK via Managed Google Play |
| **Android web app** | Web URL on home screen |
| **Microsoft 365 Apps** | Android Office bundle |

🎯 **Exam tip:** All Android apps go through **Managed Google Play** in Android Enterprise scenarios, not direct APK upload.

---

## 🍎 macOS App Types

| Type | What |
|------|------|
| **macOS app (DMG)** | DMG file uploaded as Intune-managed app |
| **macOS LOB app (PKG)** | PKG installer |
| **macOS shell script app** | Custom script delivery |
| **Microsoft 365 Apps for macOS** | Office bundle |
| **Microsoft Edge for macOS** | Built-in template |

---

## 🎯 Assignment Intents

| Intent | Effect |
|--------|--------|
| **Required** | Auto-install on every targeted device |
| **Available for enrolled devices** | Appears in Company Portal, user-initiated install |
| **Available with or without enrollment** | App Protection Policy without device enrollment (MAM-only) |
| **Uninstall** | Force-remove from targeted devices |

🚨 **Trap on the exam:** "Required" is the right answer when "auto-install with no user action." "Available" is "user picks from Company Portal." Don't mix them up.

---

## 🛠️ App Configuration Policies (ACP)

ACPs push per-app settings to managed apps. Two flavors:

| Type | When |
|------|------|
| **Managed devices** (MDM channel) | Device is enrolled — settings push via OS MDM |
| **Managed apps** (MAM channel) | App is APP-protected — settings push via APP |

Common settings pushed via ACP:

- Default mailbox server URL (Outlook Mobile)
- Default identity / sign-in hint
- Branding (logos, support URLs)
- Per-app config keys (server URL, tenant ID, custom toggles)
- Edge / Chrome / Firefox managed bookmarks
- VPN config for managed apps

🎯 **Exam tip:** "Push the server URL setting to Outlook Mobile so users don't have to type it" = App Configuration Policy.

---

## 📚 App Categories

App categories are labels you create to organize the Company Portal app catalog. Examples:

- "Productivity"
- "Engineering Tools"
- "HR"
- "Travel & Expenses"

Users see categories as tabs in Company Portal. They don't affect functionality — purely UX.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Win32 and LOB are interchangeable" | ❌ LOB = simple MSI upload; Win32 = packaged with detection/dependencies/supersedence |
| "Dependencies and supersedence are the same thing" | ❌ Different — one is prerequisite, other is replacement |
| "Supersedence chains can be unlimited" | ❌ Max 2 levels deep, max 10 supersedences per app |
| "App stuck in Installing = installer broken" | ❌ Almost always the detection rule |
| "Required and Available do the same thing" | ❌ Required auto-installs; Available is user-pick |
| "MSIX is the same as MSI" | ❌ MSIX is container-based; MSI is registry-based |
| "Android Enterprise allows direct APK upload" | ❌ Goes through Managed Google Play |

---

## 🧪 Task-Sequencing Practice: Package and Deploy a Win32 App

**Order these steps to deploy a custom Win32 line-of-business app.**

The correct sequence:

1. ✅ **Prepare source folder** with installer + dependencies
2. ✅ **Run IntuneWinAppUtil.exe** to wrap into `.intunewin`
3. ✅ **Upload to Intune** as Windows app (Win32)
4. ✅ **Define install command** (e.g., `setup.exe /quiet`)
5. ✅ **Define uninstall command** (e.g., `setup.exe /uninstall /quiet`)
6. ✅ **Set requirements** (architecture, OS min ver, disk, memory)
7. ✅ **Define detection rule** — test on a dev machine first
8. ✅ **Set dependencies** (e.g., VC++ Redist) and supersedence
9. ✅ **Assign as Required** to pilot user group
10. ✅ **Monitor install status** on pilot devices; debug detection issues
11. ✅ **Expand assignment** to broader user groups
12. ✅ **Document** the version, package settings, detection rule

⚠️ Skipping step 7 = app installs forever and never reports "Installed." Skipping step 10 = scaled debugging in production.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Win32 app** | Intune's packaged-installer app type (`.intunewin`) |
| **LOB app** | Line-of-business — raw MSI upload, no extras |
| **IntuneWinAppUtil.exe** | The Microsoft tool that wraps installers into `.intunewin` |
| **Detection rule** | The check that tells Intune if the app is installed |
| **Dependencies** | Other apps required before this app installs |
| **Supersedence** | Older apps this app replaces |
| **Required (assignment)** | Auto-install on targeted devices |
| **Available (assignment)** | User-installable from Company Portal |
| **Uninstall (assignment)** | Force-remove targeted devices |
| **MSIX** | Modern Windows app container format (replaces APPX) |
| **Managed Google Play** | Google's enterprise app catalog for Android Enterprise |
| **VPP** | Apple Volume Purchase Program for bulk iOS app licensing |
| **App Configuration Policy (ACP)** | Pushes per-app settings to managed apps |
| **App Category** | Label for organizing Company Portal catalog |
| **Return code** | Installer exit code mapped to Success/Reboot/Retry |
| **Install behavior** | System vs user context for the installer |

---

## ✅ Module 5 Summary

You now know:

- 📦 The 5 Windows app types and when each fits
- 🔧 How to wrap an installer with IntuneWinAppUtil and the `.intunewin` flow
- 🔍 The 4 detection rule types and the script pattern
- 🔗 Dependencies vs supersedence and their respective limits (100 / 10 with depth 2)
- ⏱️ Install behavior, restart behavior, and return code mapping
- 📦 MSIX vs MSI advantages
- 🍎🤖🍎 iOS / Android / macOS app type matrices
- 🎯 Required vs Available vs Uninstall assignment intents
- 🛠️ App Configuration Policies (MDM channel vs MAM channel)
- 📚 App Categories for Company Portal organization
- ⚠️ The 7 most common app deployment traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 6: Endpoint Security & Defender for Endpoint](../Module-06-Endpoint-Security/Reading.md)

---

## 📊 Case Study — Walmart Win32 + MSIX Standardization (2022–2024)

**Situation.** Walmart (2.1M associates globally, ~600,000 corporate-managed Windows endpoints, plus several hundred thousand store back-office devices) faced a long-standing app deployment fragmentation: store devices ran an MSI-based catalog managed by ConfigMgr; corporate devices were transitioning to Intune; back-office and supply chain had pockets of click-once and legacy InstallShield. The result was unpredictable upgrade behavior, slow deployment of critical updates (some apps took 90+ days to reach 90% of devices), and a high rate of "app stuck installing" tickets at the helpdesk.

**Decision.** Walmart's Endpoint Management team standardized on a three-tier approach (Walmart Tech Blog + Microsoft Mechanics episode *Walmart's modern app deployment*, 2023):

1. **All new corporate Win32 apps packaged as `.intunewin`** with mandatory detection rules and version-aware supersedence.
2. **Office and Microsoft Edge** managed via the built-in Microsoft 365 Apps template (not Win32).
3. **Microsoft Store apps** for any consumer-shape app (Adobe Reader, Zoom, etc.).
4. **MSIX wrapping** for in-house apps that needed clean-install / clean-uninstall + per-user side-by-side versioning.
5. **App configuration policies** to push tenant URLs and branding to Outlook + Edge + Teams without users typing anything.
6. **Mandatory App Categories** so the Company Portal catalog stayed organized (Productivity, Store Operations, Supply Chain, HR, etc.).
7. **Pilot ring → Broad ring → Deferred** assignment pattern for every required Win32 app.

**Outcome.** Walmart reported (Microsoft case study + 2024 Walmart Tech Blog update):

- **Time to reach 90% of devices** for a required Win32 app: dropped from **~85 days** (ConfigMgr legacy) to **~9 days** (Intune Win32 with proper detection rules).
- **"App stuck installing" helpdesk tickets**: dropped **~78%** after the mandatory detection-rule policy went live.
- **MSIX adoption**: ~120 in-house apps converted, with a measurable reduction in registry-orphaning issues after uninstalls.
- **Company Portal user satisfaction**: NPS for "I can find the app I need" rose from 32 to 71 after mandatory App Categories were enforced.
- **Defender for Endpoint app-control rule violations**: dropped after every Win32 app was packaged with explicit detection + signature, since unmanaged installers became immediately distinguishable.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* MD-102 expects you to know detection rules cold and treat Win32 + detection + dependencies + supersedence as the canonical packaging model. The economic case is overwhelming: getting detection right means the difference between 9 days and 85 days for critical updates to reach 90% of fleet — a 9× improvement. When the exam describes "app stuck in installing forever" or "app reinstalls every cycle," the answer is almost always **detection rule misconfigured**, every time. The Walmart story is why.

**Discussion (Socratic).**
- **Q1.** Walmart converted ~120 in-house apps to MSIX. A peer retailer's CTO argues "MSIX is solving a problem we don't have — MSI works fine." Defend the MSIX investment by naming the two specific operational scenarios (one per-user install, one upgrade cleanliness) where MSIX clearly wins.
- **Q2.** Walmart mandates pilot → broad → deferred for every Win32 app. A startup deploys to "all users" on day one. Defend the ring pattern by naming the one type of failure mode that almost always shows up first in pilot and would be devastating in broad.
- **Q3.** Walmart's App Configuration Policies push tenant URL + branding to Edge + Outlook. A user privacy advocate asks "why push branding to Edge — is that surveillance?" Defend the ACP-pushed-branding pattern by naming the user-facing benefit that justifies the push.

---

> **Where this leads.**
> - Inside this course: Module 6 covers Defender for Endpoint, which interacts with apps via attack surface reduction rules and app control. Module 8 covers monitoring + reporting, which is how you'd notice app deployment failures in production.
> - Cross-course: [`05-Azure-Fundamentals` Module 3](../../05-Azure-Fundamentals/Module-03-Compute/Reading.md) covers Windows VM provisioning, useful context for app testing labs.
> - Practice: Practice Exam 2 has roughly 5–7 questions from this module (Win32 vs LOB, detection rules, dependencies, supersedence, ACP). Final Mock Exam revisits with troubleshooting scenarios.

---

## 💬 Discussion — Socratic prompts

1. **Win32 vs LOB for simple MSI.** Microsoft technically supports uploading an MSI directly as LOB without wrapping. When would you wrap a simple MSI as Win32 anyway? Defend with reference to dependencies, detection, and the long-term maintainability picture.
2. **MSIX adoption pace.** Microsoft has been pushing MSIX since 2018. Most enterprises have ~10% MSIX adoption in 2026. Defend why adoption is slow despite the technical advantages, and identify the one scenario where MSIX clearly justifies the migration effort.
3. **Required vs Available for productivity apps.** Should Microsoft Teams be Required (auto-install on every device) or Available (user-pick from Company Portal)? Argue both sides for (a) a 50-person startup, (b) a 50,000-person enterprise.
4. **Detection rule complexity.** Microsoft recommends MSI product code where possible. When is a PowerShell custom detection script the right answer over MSI product code?
5. **Supersedence chains.** Microsoft limits supersedence to depth 2. Defend the design choice. What would be the failure mode if depth were unlimited?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Win32 app management](https://learn.microsoft.com/mem/intune/apps/apps-win32-app-management) (Microsoft, current revision)
- 📖 [Intune App Wrapping Tool overview](https://learn.microsoft.com/mem/intune/developer/apps-prepare-mobile-application-management)
- 📖 [Win32 app dependencies and supersedence](https://learn.microsoft.com/mem/intune/apps/apps-win32-supersedence)
- 📖 [App Configuration Policies for Intune](https://learn.microsoft.com/mem/intune/apps/app-configuration-policies-overview)
- 📖 [MSIX overview and packaging](https://learn.microsoft.com/windows/msix/)
- 📖 [Managed Google Play store apps in Intune](https://learn.microsoft.com/mem/intune/apps/apps-add-android-for-work)
- 📖 [Apple Volume Purchase Program (VPP) with Intune](https://learn.microsoft.com/mem/intune/apps/vpp-apps-ios)
