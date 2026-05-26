# ✏️ Module 2 Quiz: Windows 11 Deployment & Imaging

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Which Windows Autopilot mode requires NO user interaction at OOBE? *(Remember)*
A. User-driven
B. Pre-provisioned (white-glove)
C. Self-deploying
D. Autopilot for existing devices

---

### Q2. Self-deploying mode requires which hardware feature? *(Remember)*
A. TPM 1.2
B. TPM 2.0 with attestation
C. Secure Boot disabled
D. UEFI Class 2 BIOS

---

### Q3. The Enrollment Status Page (ESP) is used to: *(Understand)*
A. Register the device's hardware hash to Intune
B. Block device use until apps and profiles are installed, with progress shown to the user
C. Pre-install Windows updates
D. Generate the device name template

---

### Q4. A new round of 80 corporate laptops will ship directly from Dell to user home addresses. Best deployment mode? *(Apply)*
A. Configuration Manager OSD
B. Autopilot self-deploying
C. Autopilot user-driven
D. MDT with PXE boot

---

### Q5. A retail kiosk tablet must boot to a single-app inventory display with no user sign-in. Best Autopilot mode? *(Apply)*
A. User-driven
B. Self-deploying + Intune kiosk profile
C. Pre-provisioned
D. Autopilot for existing devices

---

### Q6. To register an existing Windows 11 device's hardware hash to Intune manually, you'd use: *(Remember)*
A. dsregcmd /join
B. Get-WindowsAutopilotInfo PowerShell cmdlet
C. mdmlocalmanagement.exe
D. configmgr.msi

---

### Q7. Which describes a provisioning package (.ppkg)? *(Understand)*
A. A Microsoft 365 license bundle
B. A Windows Configuration Designer file applied at OOBE or to a running device
C. The Autopilot profile file format
D. A ConfigMgr task sequence export

---

### Q8. Microsoft Deployment Toolkit (MDT) is BEST suited for: *(Analyze)*
A. Direct-ship cloud-only fleet refresh
B. Custom on-prem imaging with deep driver/app injection from PXE
C. BYOD enrollment
D. Mobile device management

---

### Q9. ConfigMgr OSD differs from MDT primarily in that ConfigMgr adds: *(Understand)*
A. Wizards for image creation
B. Per-collection targeting, distribution points, and update integration
C. Free licensing
D. iOS support

---

### Q10. An organization wants to upgrade Windows 10 → Windows 11 while preserving apps and user data on existing devices. Best option? *(Apply)*
A. Wipe-and-load Autopilot
B. In-place upgrade
C. Autopilot reset
D. Provisioning package

---

### Q11. To repurpose a corporate device for a different user, wiping all data: *(Apply)*
A. In-place upgrade
B. Fresh start (user-initiated)
C. Autopilot reset
D. Provisioning package

---

### Q12. Windows 11 system requirements include: *(Remember)*
A. TPM 1.2 minimum
B. 2 GB RAM minimum
C. TPM 2.0, UEFI + Secure Boot, supported 64-bit CPU
D. BIOS-only firmware

---

### Q13. **Order these steps** to set up Autopilot user-driven for a direct-ship rollout: *(Apply)*

1. Pilot with one user
2. OEM registers device hashes to your tenant
3. Create Autopilot dynamic device group
4. Create + assign Autopilot profile
5. Build the Enrollment Status Page

A. 1 → 2 → 3 → 4 → 5
B. 2 → 3 → 4 → 5 → 1
C. 3 → 2 → 4 → 5 → 1
D. 5 → 4 → 3 → 2 → 1

---

### Q14. You change the deployment mode on an Autopilot profile after a device has already enrolled. The device: *(Understand)*
A. Automatically re-applies the new mode
B. Is unaffected by the change until you wipe and re-register it
C. Reverts to self-deploying mode
D. Is removed from the tenant

---

### Q15. Required apps to track on the ESP screen should be limited to: *(Apply)*
A. All apps assigned to the user
B. A subset of mission-critical apps so the ESP doesn't time out
C. Only Office apps
D. None — let users install via Company Portal later

---

### Q16. The default ESP timeout is: *(Remember)*
A. 30 minutes
B. 60 minutes
C. 120 minutes
D. 24 hours

---

### Q17. A hybrid Autopilot deployment fails with error 0x80180014. Most likely cause? *(Apply)*
A. TPM is not 2.0
B. The Intune Connector for AD is unhealthy or domain join blob is misconfigured
C. The user is unlicensed
D. The ESP timed out

---

### Q18. To deploy 1,000 devices to a shop floor with NO internet at OOBE, the best option is: *(Apply)*
A. Autopilot self-deploying
B. Provisioning packages on USB applied at OOBE
C. Autopilot user-driven
D. Pre-provisioned white-glove

---

### Q19. Yes/No — For each statement, mark Yes or No. *(Understand)*

**S1:** Autopilot user-driven requires internet at OOBE.
**S2:** Autopilot self-deploying works on any TPM 1.2 device.
**S3:** Autopilot reset wipes a device and re-applies the assigned profile.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / No
D. Yes / No / No

---

### Q20. An OEM like Lenovo can register Autopilot device hashes for a customer through: *(Remember)*
A. The customer's Active Directory
B. Microsoft Partner Center Autopilot APIs at the factory
C. Configuration Manager
D. Resending the hashes by email

---

### Q21. The phrase "white-glove deployment" in Microsoft documentation refers to: *(Remember)*
A. Self-deploying
B. Pre-provisioned (Autopilot)
C. User-driven
D. In-place upgrade

---

### Q22. A 4-year-old fleet of Dell laptops with TPM 1.2 needs to move to Windows 11. The correct answer is: *(Analyze)*
A. Install Windows 11 with a registry workaround
B. The devices cannot run Windows 11 in supported mode — plan a hardware refresh
C. Use Autopilot self-deploying
D. Use in-place upgrade — TPM 1.2 is sufficient

---

### Q23. To create an Autopilot dynamic device group that targets all Autopilot-registered devices, the membership rule references: *(Apply)*
A. device.deviceOSType
B. device.devicePhysicalIds with ZTDId
C. user.department
D. device.manufacturer

---

### Q24. Yes/No — For each statement, mark Yes or No. *(Evaluate)*

**S1:** MDT enrolls devices into Intune automatically at the end of a task sequence.
**S2:** ConfigMgr OSD is deprecated and being removed in 2026.
**S3:** Autopilot user-driven is the most common Autopilot mode for knowledge workers.

A. No / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / Yes

---

### Q25. A startup buys 35 MacBook Pros. Which deployment system applies? *(Analyze)*
A. Windows Autopilot
B. Configuration Manager OSD
C. Apple Business Manager + Automated Device Enrollment (ADE)
D. MDT

---

## 🎯 Answers + Explanations

### Q1: **C. Self-deploying**
Self-deploying = no user interaction. Pre-provisioned has a brief user-finish step. User-driven needs the user to sign in.

### Q2: **B. TPM 2.0 with attestation**
TPM 2.0 attestation to Microsoft Azure Attestation is required for self-deploying mode.

### Q3: **B. Block device use until apps and profiles are installed, with progress shown to the user**
ESP is the provisioning progress screen with optional blocking.

### Q4: **C. Autopilot user-driven**
Direct-ship + corporate user-sign-in = user-driven. The canonical default.

### Q5: **B. Self-deploying + Intune kiosk profile**
Kiosks have no per-user identity at OOBE. Self-deploying delivers the device to a configured single-app state.

### Q6: **B. Get-WindowsAutopilotInfo PowerShell cmdlet**
The supported Microsoft method for extracting a hardware hash from a running Windows device.

### Q7: **B. A Windows Configuration Designer file applied at OOBE or to a running device**
.ppkg is a single-file settings bundle authored in Configuration Designer.

### Q8: **B. Custom on-prem imaging with deep driver/app injection from PXE**
MDT shines on-prem, custom-image scenarios. It's not for cloud-only direct ship.

### Q9: **B. Per-collection targeting, distribution points, and update integration**
ConfigMgr layers enterprise infrastructure (DPs, collections, software updates) on top of MDT's task-sequence engine.

### Q10: **B. In-place upgrade**
In-place preserves apps and user data. Wipe-and-load reimages clean.

### Q11: **C. Autopilot reset**
Reset wipes the device and re-applies the Autopilot profile for a new user — the repurposing flow.

### Q12: **C. TPM 2.0, UEFI + Secure Boot, supported 64-bit CPU**
The non-negotiable Windows 11 system requirements.

### Q13: **B. 2 → 3 → 4 → 5 → 1**
Register hashes → create group → create profile → assign profile + ESP → pilot last.

### Q14: **B. Is unaffected by the change until you wipe and re-register it**
Deployment mode is set at provisioning time. Already-enrolled devices keep their original mode.

### Q15: **B. A subset of mission-critical apps so the ESP doesn't time out**
ESP-tracked apps slow the screen. List only the must-have apps; let the rest install in the background.

### Q16: **B. 60 minutes**
Default ESP timeout = 60 minutes; tune to your fleet.

### Q17: **B. The Intune Connector for AD is unhealthy or domain join blob is misconfigured**
0x80180014 is the canonical hybrid join failure code.

### Q18: **B. Provisioning packages on USB applied at OOBE**
No internet at OOBE = .ppkg, period. Autopilot needs internet.

### Q19: **D. Yes / No / Yes**
S1 yes — Autopilot needs internet. S2 no — self-deploying needs TPM 2.0. S3 yes — Autopilot reset re-applies the profile.

### Q20: **B. Microsoft Partner Center Autopilot APIs at the factory**
OEMs use Partner Center APIs to register devices to customer tenants at the time of manufacture.

### Q21: **B. Pre-provisioned (Autopilot)**
"White-glove" was the original Microsoft name; "pre-provisioned" is the current name. Same thing.

### Q22: **B. The devices cannot run Windows 11 in supported mode — plan a hardware refresh**
Microsoft requires TPM 2.0 for supported Windows 11. Registry workarounds are unsupported.

### Q23: **B. device.devicePhysicalIds with ZTDId**
The canonical Autopilot dynamic membership rule: `(device.devicePhysicalIds -any _ -contains "[ZTDId]")`.

### Q24: **A. No / No / Yes**
MDT does NOT enroll Intune automatically. ConfigMgr OSD is not deprecated. User-driven is the most common Autopilot mode.

### Q25: **C. Apple Business Manager + Automated Device Enrollment (ADE)**
macOS devices use ABM + ADE, not Autopilot. Module 4 covers this in depth.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Deployment mastered.
- 21–23/25 → ✅ Solid. Note your misses; move on.
- 17–20/25 → ⚠️ Re-read the Autopilot mode matrix and ESP sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- 6 modern deployment modes + when each fits
- 4 Autopilot modes (self-deploying, pre-provisioned, user-driven, for-existing)
- ESP purpose + default 60-min timeout
- Hardware hash collection via Get-WindowsAutopilotInfo
- .ppkg use cases (low-bandwidth, air-gapped)
- MDT vs ConfigMgr OSD differences
- In-place vs wipe-and-load vs Autopilot reset vs fresh start
- Windows 11 requirements (TPM 2.0 above all)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 3](../Module-03-Intune/Reading.md)
