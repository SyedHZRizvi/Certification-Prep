# ✏️ Module 5 Quiz: Application Deployment & Configuration

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. The Intune Windows app type for packaged installers (EXE/MSI with extras) is: *(Remember)*
A. LOB
B. Microsoft Store app
C. Win32 app (.intunewin)
D. Web app

---

### Q2. The tool used to wrap an installer into `.intunewin` format is: *(Remember)*
A. IntuneWinAppUtil.exe
B. msiexec.exe
C. AppWrapper.exe
D. MakeAppx.exe

---

### Q3. The single most common cause of "app stuck in Installing" forever is: *(Apply)*
A. Insufficient disk space
B. The installer is corrupt
C. The detection rule never returns true
D. Conditional Access is blocking

---

### Q4. The maximum supersedence depth for Win32 apps is: *(Remember)*
A. 1
B. 2
C. 5
D. Unlimited

---

### Q5. The maximum number of dependencies a Win32 app can have is: *(Remember)*
A. 10
B. 25
C. 100
D. 1,000

---

### Q6. A required dependency for a Win32 app should be configured as: *(Apply)*
A. Embedded in the source folder
B. A separate Win32 app set as a dependency relationship
C. A configuration profile
D. An app protection policy

---

### Q7. Assignment intent "Required" means: *(Understand)*
A. The app is auto-installed on every targeted device
B. The app appears in Company Portal for user-pick install
C. The app is force-removed from devices
D. The app is shown only to compliant devices

---

### Q8. Yes/No — For each statement, mark Yes or No. *(Understand)*

**S1:** Win32 apps support MSI product code as a detection rule.
**S2:** Win32 apps can have up to 100 supersedence relationships.
**S3:** Win32 apps support PowerShell custom detection scripts.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / Yes / No

---

### Q9. The 4 valid detection rule types for Win32 apps are: *(Remember)*
A. MSI / file / registry / custom PowerShell
B. MSI / DLL / process / registry
C. EXE / DLL / file / network
D. URL / file / hash / signature

---

### Q10. A custom PowerShell detection script returns "detected" only when: *(Apply)*
A. exit 0 AND any stdout
B. exit 1 with empty stdout
C. exit 0 only
D. Stdout starts with "DETECTED:"

---

### Q11. **Order these steps** to deploy a Win32 app: *(Apply)*

1. Define detection rule
2. Run IntuneWinAppUtil to wrap source
3. Upload to Intune as Win32
4. Set install + uninstall commands and requirements
5. Assign to pilot user group

A. 2 → 3 → 4 → 1 → 5
B. 1 → 2 → 3 → 4 → 5
C. 3 → 2 → 1 → 4 → 5
D. 5 → 4 → 3 → 2 → 1

---

### Q12. The MSIX format's primary advantage over MSI is: *(Understand)*
A. Smaller file size
B. Clean install / uninstall + side-by-side versioning + per-user install without admin
C. Built-in DRM
D. Faster installation

---

### Q13. iOS apps purchased through Apple's Volume Purchase Program (VPP) require: *(Remember)*
A. Apple Business Manager + VPP tokens
B. Google Workspace
C. Microsoft Store credentials
D. None — they're free

---

### Q14. Android Enterprise apps deploy through: *(Remember)*
A. Direct APK upload to Intune
B. Managed Google Play
C. Amazon Appstore
D. F-Droid

---

### Q15. The return code 3010 from an installer means: *(Remember)*
A. Failed
B. Success (no reboot)
C. Soft reboot required
D. Another install in progress

---

### Q16. To push the Outlook Mobile server URL setting to managed iOS devices: *(Apply)*
A. Configuration profile (Templates → Email)
B. App Configuration Policy (managed devices channel)
C. App Protection Policy
D. Compliance policy

---

### Q17. App Categories in Intune are used for: *(Understand)*
A. Functional categorization that gates app access
B. Organizing the Company Portal app catalog with tabs
C. Billing/chargeback per business unit
D. Conditional Access targeting

---

### Q18. A LOB app uploaded directly to Intune is best for: *(Apply)*
A. Complex installers with dependencies and supersedence
B. A simple MSI with no extras
C. PowerShell-based installs
D. Microsoft Store apps

---

### Q19. Yes/No — For each statement, mark Yes or No. *(Understand)*

**S1:** Win32 apps can target user groups, device groups, or both.
**S2:** "Available with or without enrollment" is an iOS / Android assignment intent for MAM-only.
**S3:** Microsoft Edge for macOS has a built-in app template in Intune.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / Yes
D. Yes / Yes / No

---

### Q20. The macOS app type for `.pkg` installers is: *(Remember)*
A. macOS app (DMG)
B. macOS LOB app (PKG)
C. macOS shell script app
D. macOS web app

---

### Q21. A Win32 app's "Install behavior" can be: *(Remember)*
A. System or User context
B. Foreground or Background
C. Visible or Hidden
D. Online or Offline

---

### Q22. A Win32 app needs to upgrade from v2023 to v2024 while uninstalling the old version first. The right configuration is: *(Apply)*
A. Two separate apps assigned together
B. A supersedence relationship from v2024 to v2023 with "Uninstall previous version" enabled
C. A dependency from v2024 to v2023
D. Two assignment groups

---

### Q23. An app shows "Not detected after install" status. Most likely cause: *(Analyze)*
A. Detection rule path doesn't match actual install path
B. The user hasn't logged off
C. The app license expired
D. Conditional Access is blocking

---

### Q24. Yes/No — For each statement, mark Yes or No. *(Evaluate)*

**S1:** Win32 supersedence can chain v2024 → v2023 → v2022 → v2021 (depth 3).
**S2:** App Configuration Policies push per-app settings to managed apps.
**S3:** Required and Available assignment intents are mutually exclusive on a single device-group target.

A. No / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q25. The Walmart-style app deployment pattern includes: *(Evaluate)*
A. All apps assigned to "All devices" on day one
B. Pilot → Broad → Deferred rings, mandatory detection rules, App Categories enforced
C. Direct APK uploads for Android
D. No supersedence — replace and reassign manually

---

## 🎯 Answers + Explanations

### Q1: **C. Win32 app (.intunewin)**
The packaged Win32 type with detection/dependencies/supersedence.

### Q2: **A. IntuneWinAppUtil.exe**
Microsoft's wrapper tool. Free download.

### Q3: **C. The detection rule never returns true**
The most common cause by far. Always test detection on a clean device.

### Q4: **B. 2**
Max supersedence depth = 2. Chains of 3+ won't work.

### Q5: **C. 100**
Up to 100 dependencies per Win32 app.

### Q6: **B. A separate Win32 app set as a dependency relationship**
Don't bundle dependencies — make them a tracked relationship.

### Q7: **A. The app is auto-installed on every targeted device**
Required = forced install. Available = user-pick.

### Q8: **A. Yes / No / Yes**
MSI product code detection works (Yes). Win32 max is 10 supersedence relationships, not 100 (No). PowerShell custom detection scripts are supported (Yes).

### Q9: **A. MSI / file / registry / custom PowerShell**
The four detection rule types.

### Q10: **A. exit 0 AND any stdout**
Both are required for "detected" in custom PowerShell detection scripts.

### Q11: **A. 2 → 3 → 4 → 1 → 5**
Wrap → upload → set commands + requirements → detection → assign. (Detection can be defined any time before assignment but typically after the install commands.)

### Q12: **B. Clean install / uninstall + side-by-side versioning + per-user install without admin**
MSIX's container advantages.

### Q13: **A. Apple Business Manager + VPP tokens**
VPP requires ABM + a VPP token (device or user).

### Q14: **B. Managed Google Play**
All Android Enterprise apps go through Managed Google Play.

### Q15: **C. Soft reboot required**
3010 = soft reboot needed; the installer succeeded but reboot recommended.

### Q16: **B. App Configuration Policy (managed devices channel)**
ACP pushes per-app settings via the MDM channel for managed devices.

### Q17: **B. Organizing the Company Portal app catalog with tabs**
Categories are UX — not access control.

### Q18: **B. A simple MSI with no extras**
LOB is the simple path. Win32 is for anything with extras.

### Q19: **A. Yes / Yes / Yes**
All three are true.

### Q20: **B. macOS LOB app (PKG)**
PKG installer type for macOS.

### Q21: **A. System or User context**
The two install-behavior options.

### Q22: **B. A supersedence relationship from v2024 to v2023 with "Uninstall previous version" enabled**
The canonical upgrade pattern.

### Q23: **A. Detection rule path doesn't match actual install path**
"Not detected after install" almost always = detection rule mismatch.

### Q24: **C. No / Yes / Yes**
Depth 3 supersedence is NOT supported (No). ACPs push per-app settings (Yes). Required and Available are mutually exclusive per target (Yes).

### Q25: **B. Pilot → Broad → Deferred rings, mandatory detection rules, App Categories enforced**
The Walmart-style pattern.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 App deployment mastered.
- 21–23/25 → ✅ Solid. Note your misses; move on.
- 17–20/25 → ⚠️ Re-read Win32 packaging + detection rules.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- 5 Windows app types + when each fits
- IntuneWinAppUtil.exe wrap command
- 4 detection rule types
- Dependencies (max 100) vs supersedence (max 10, depth 2)
- exit 0 + stdout pattern for custom detection
- Required vs Available vs Uninstall
- ACP managed devices vs managed apps channel
- VPP for iOS, Managed Google Play for Android

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 6](../Module-06-Endpoint-Security/Reading.md)
