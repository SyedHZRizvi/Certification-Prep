# Module 2: Windows 11 Deployment & Imaging 💿

> **Why this module matters:** Deployment is where MD-102 spends 25–30% of its weight. The exam expects you to pick the right deployment mode in 90 seconds based on a sentence-long scenario. The wrong choice Autopilot self-deploying for a knowledge worker, MDT for a 1,000-laptop direct-ship is a wrong question. This module teaches you the matrix.

> **Prerequisites for this module.** Before starting:
> - You should know the three Entra device join states (Module 1).
> - Comfort with Windows OOBE (the out-of-box experience screens), having unboxed a fresh Windows PC at least once is enough.
> - Awareness that BIOS/UEFI and TPM 2.0 are required for Windows 11 (Microsoft documented system requirements).
>
> If you've never touched Windows Autopilot, do the [Microsoft Learn Autopilot tutorial](https://learn.microsoft.com/autopilot/tutorial/user-driven/azure-ad-join-workflow) once before reading further. The mental model snaps into place after one walk-through.

---

## 🍕 A Story: The Sales Kickoff Tuesday Doubled

Pick up where Maria left off in Module 1. The Friday kickoff went perfectly, 998 of 1,000 Lenovo X1 Carbons were online by 9:30am Eastern with the corporate portal open. (Two devices were DOA hardware; replaced Monday.) Three weeks later the CEO walks in with a new ask:

> *"We just acquired ContosoBio. 200 people in San Diego, Cambridge, and Cork. They're on 4-year-old Dell laptops, all AD domain-joined, all running our soon-to-retire on-prem Exchange. They need to be on our Microsoft 365 by quarter-end. The CFO doesn't want to buy new hardware."*

Maria has to make six deployment-strategy decisions:

1. **Existing AD-joined Dells**, do we wipe-and-load Autopilot, in-place upgrade with the existing image, or use Autopilot for existing devices?
2. **Cork manufacturing line** (10 specialized PCs running custom QC apps that won't run on Windows 11), Configuration Manager OSD with a custom image?
3. **San Diego R&D** (50 engineers who run GPU workloads and demand admin rights on local boxes), Autopilot with EPM, or a provisioning package on existing hardware?
4. **A new round of 80 Surface Pros** for sales, direct-ship Autopilot user-driven, just like Friday's batch?
5. **5 retail kiosks at a trade-show booth** running a single-app browser display, Autopilot self-deploying mode, with kiosk profile?
6. **2 secured workstations for executives** that IT must touch before shipping, Autopilot pre-provisioned (white-glove) so IT installs the Defender baseline + Privileged Access Workstation profile and the executive just signs in.

Six personas, six deployment modes. This module gives you the matrix to answer the six in 90 seconds each, which is exactly the pace MD-102 expects.

---

## 🚚 The Six Modern Windows Deployment Modes (MEMORIZE THIS)

| Mode | What it does | Best for | Internet at first boot? | License/feature requirements |
|------|--------------|----------|-------------------------|------------------------------|
| **Autopilot self-deploying** | No user interaction at OOBE; device joins tenant, applies all policies, lands on a sign-in or app | Kiosks, digital signage, shared frontline | ✅ Required | TPM 2.0 attestation; only Entra joined |
| **Autopilot pre-provisioned (white-glove)** | IT does the heavy lifting; user does a fast finish | Executive devices, white-glove deployment | ✅ Required | TPM 2.0; IT touch before user receives |
| **Autopilot user-driven** | User signs in; device joins; policies/apps apply | Direct-ship knowledge workers, the most common mode | ✅ Required | Standard Autopilot license |
| **Autopilot for existing devices** | Wipes and rebuilds an already-deployed Windows 10/11 device into an Autopilot device | Re-purposing existing fleet | ✅ Required | Existing device; ConfigMgr or wipe-trigger needed |
| **Provisioning package (.ppkg)** | Apply a USB or downloaded settings file at OOBE or to a running device | Low-bandwidth, air-gapped, or simple bulk staging | ❌ Not required | Windows Configuration Designer |
| **Configuration Manager OSD / MDT** | Task-sequence-based imaging from PXE or media | Custom on-prem imaging, complex drivers, legacy | ❌ Not required | ConfigMgr or MDT infrastructure |
| **In-place upgrade** | Upgrade an existing Windows 10/11 to a new version preserving apps/data | Version upgrades, not initial provisioning | ❌ Not required | Existing OS already installed |

🔥 **MEMORIZE the matrix.** Every MD-102 deployment question reduces to "which row of this table is the right answer?" Picking the wrong row is the difference between a correct and incorrect answer.

---

## 🪪 Windows Autopilot, The Modern Default

Autopilot is the canonical Microsoft-recommended deployment mode for new Windows 11 devices. The flow:

```
   ┌────────────────────────────────────────────────────────┐
   │  1. OEM / IT registers device's hardware hash to       │
   │     your Microsoft Intune tenant                       │
   └────────────────┬───────────────────────────────────────┘
                    │
   ┌────────────────▼───────────────────────────────────────┐
   │  2. Device ships directly to user (or to IT for white  │
   │     glove)                                             │
   └────────────────┬───────────────────────────────────────┘
                    │
   ┌────────────────▼───────────────────────────────────────┐
   │  3. User powers on, connects to internet, OOBE         │
   │     contacts Microsoft Autopilot service               │
   └────────────────┬───────────────────────────────────────┘
                    │
   ┌────────────────▼───────────────────────────────────────┐
   │  4. Microsoft matches the hardware hash to your tenant │
   │     and applies the assigned Autopilot profile         │
   └────────────────┬───────────────────────────────────────┘
                    │
   ┌────────────────▼───────────────────────────────────────┐
   │  5. Device performs Entra join, Intune enrollment,     │
   │     ESP (Enrollment Status Page) tracks apps/policies  │
   └────────────────┬───────────────────────────────────────┘
                    │
   ┌────────────────▼───────────────────────────────────────┐
   │  6. User signs in (user-driven) or device boots into   │
   │     the configured state (self-deploying)              │
   └────────────────────────────────────────────────────────┘
```

### The Enrollment Status Page (ESP)

The ESP is the progress screen the user sees while Intune is provisioning the device. You can configure it to:

| Setting | Effect |
|---------|--------|
| Block device use until apps and profiles are installed | The right answer for fully managed devices |
| Show error when installation takes longer than X minutes | Default 60 min; tune to your fleet |
| Allow users to reset the device on installation failure | Recovery option |
| Allow users to use the device if installation error occurs | Skip-on-failure for non-critical apps |
| Required apps to install (tracking subset) | Names the must-have apps tracked on ESP |

🎯 **Exam tip:** If a question describes a user able to skip past required apps, the ESP is misconfigured. Set "Block device use until all apps and profiles are installed" = **Yes**, and pick the right list of tracked apps.

---

## 🏷️ Autopilot Profiles, The Per-Device Recipe

An Autopilot profile is the configuration Intune sends to a registered device at OOBE. Key settings:

| Setting | Options | When to pick what |
|---------|---------|-------------------|
| **Deployment mode** | User-driven · Self-deploying · Pre-provisioned · Reset | The matrix above |
| **Join to Microsoft Entra ID as** | Microsoft Entra joined · Hybrid Microsoft Entra joined | Cloud-only = first |
| **Microsoft Software License Terms** | Hide · Show | Almost always Hide |
| **Privacy settings** | Hide · Show | Hide for corporate-managed |
| **Hide change account options** | Hide · Show | Hide (prevent user from joining different tenant) |
| **User account type** | Standard · Administrator | Standard for compliance |
| **Apply device name template** | Yes (e.g., `NWP-%SERIAL%`) | Yes, consistent inventory |
| **Allow pre-provisioned deployment** | Yes/No | Yes if you sometimes white-glove |
| **Language (region)** | Inherited from device · explicit | Explicit for global standardization |
| **Skip automatically configuring keyboard** | Yes/No | Yes for global single-keyboard fleets |

🚨 **Trap on the exam:** You cannot change deployment mode *after* a device has enrolled, you'd need to delete and re-register. Set deployment mode carefully at profile-creation time.

---

## 📋 Registering Devices With Autopilot

There are five ways to get devices into Autopilot:

1. **Via the OEM** (Lenovo, Dell, HP, Microsoft Surface, etc.), they associate your tenant ID with each device they ship. Best for new fleet.
2. **Via a Cloud Solution Provider (CSP) partner**, partner registers on your behalf.
3. **Manually via CSV upload** in Intune (hash collected from the device with `Get-WindowsAutopilotInfo` PowerShell cmdlet).
4. **Via Configuration Manager**, ConfigMgr can collect hashes from enrolled devices and submit them to Intune.
5. **Convert an existing device** via Autopilot for existing devices (rebuilds the OS through a ConfigMgr task sequence or Autopilot reset).

### Get the hardware hash (manual method)

```powershell
# Run on the target Windows device, as administrator
Install-Script -Name Get-WindowsAutopilotInfo -Force
Get-WindowsAutopilotInfo -OutputFile C:\HWID.csv
```

Upload `HWID.csv` to **Intune admin center → Devices → Windows enrollment → Devices → Import**.

---

## 📦 Provisioning Packages (.ppkg)

Built with **Windows Configuration Designer** (free Microsoft Store app). A `.ppkg` is a single file that contains:

- Wi-Fi profiles (great for getting on the network before Autopilot reaches the internet)
- Domain/Entra join settings
- Local user accounts
- Bulk MDM enrollment credentials
- Apps to install (limited, typically MSI)
- Certificates
- Files to copy
- PowerShell scripts to run

| When provisioning packages shine | When they don't |
|----------------------------------|-----------------|
| Bulk enroll 100 devices with no internet at OOBE | Modern direct-ship deployment |
| Add to an existing device without reimaging | Devices needing full Intune policy on day 1 |
| Apply to embedded / IoT scenarios | When Autopilot is available |
| Bridging air-gapped environments | Cloud-managed fleet refresh |

🎯 **Exam tip:** The phrase "limited internet at OOBE" or "shop floor / air-gapped scenario" often telegraphs a provisioning package answer.

---

## 🏗️ Microsoft Deployment Toolkit (MDT)

MDT is Microsoft's free deployment-engineering toolkit. It's the older, on-prem cousin of Autopilot. You'd reach for MDT when:

- You need custom WIM-based imaging with deep driver and app injection
- You don't have ConfigMgr but need more than a `.ppkg`
- You're imaging from PXE (no internet at first boot)
- You're maintaining a legacy reference image (e.g., for an isolated lab environment)

### MDT high-level workflow

1. Install MDT on a Windows Server (and Windows ADK).
2. Create a **deployment share** (file share with the install media, drivers, apps, task sequences).
3. Import the Windows 11 install.wim source.
4. Import drivers per model.
5. Define a **task sequence** (the recipe: apply OS, install drivers, install apps, run scripts).
6. Create boot media (ISO/USB) or integrate with Windows Deployment Services (WDS) for PXE.
7. Devices boot, contact MDT, run the task sequence.

🚨 **Trap on the exam:** MDT does NOT enroll devices into Intune at the end of a task sequence by default. You'd need a Configure step (PPKG, scheduled task to run `dsregcmd /join`, or wait for the user to manually enroll).

---

## ⚙️ Configuration Manager OSD (Operating System Deployment)

Configuration Manager (formerly SCCM) OSD is the enterprise-grade on-prem deployment platform. It builds on MDT's task-sequence model and adds:

- **Per-collection targeting** (group-based deployment scopes)
- **PXE boot via distribution points**
- **Software update integration during imaging**
- **Driver packages keyed to device models**
- **Task sequence steps for sequenced multi-day rollouts**

| ConfigMgr OSD | Autopilot |
|---------------|-----------|
| On-prem control, custom images | Cloud-managed, OEM-shipped |
| Better for AD-bound, legacy app-heavy fleets | Better for cloud-only, modern fleets |
| Higher operational complexity | Lower operational complexity |
| Requires ConfigMgr infrastructure ($$) | Free with Intune license |
| Task sequence = full control | Profile + policy = constrained but cleaner |

🔥 **MEMORIZE:** ConfigMgr OSD is *not deprecated.* Microsoft maintains co-management as the recommended bridge, and many enterprises will run ConfigMgr OSD for years yet.

---

## 🔁 In-Place Upgrade vs Wipe-and-Load

When moving from Windows 10 to Windows 11 (or between 11 feature releases):

| Approach | What | When |
|----------|------|------|
| **In-place upgrade** | Setup engine upgrades OS in-place, preserves apps + user data | Same-architecture (64-bit to 64-bit), no fundamental config change |
| **Wipe-and-load** | Backup user data, reimage, restore data | Architecture change, major config drift, security baseline reset |
| **Autopilot reset** | Tenant-side wipe + re-Autopilot | Repurposing a corporate device for a new user |
| **Fresh start** | User-initiated reset preserving user data | User self-service for "my PC is misbehaving" |

🎯 **Exam tip:** "Preserve user data and apps when upgrading from Windows 10 to Windows 11" → in-place upgrade. "Repurpose a corporate device to a new owner with no data leakage" → Autopilot reset.

---

## 💻 Windows 11 System Requirements (Memorize These)

Microsoft publishes hard system requirements for Windows 11. Devices that don't meet them are not supported and won't pass an Autopilot profile applying Windows 11:

| Requirement | Minimum |
|-------------|---------|
| Processor | 1 GHz, 2 cores, 64-bit, on the Microsoft Supported CPU list |
| RAM | 4 GB |
| Storage | 64 GB |
| Firmware | UEFI + Secure Boot capable |
| TPM | TPM 2.0 |
| Graphics | DirectX 12, WDDM 2.0 |
| Display | 720p, 9" diagonal minimum, 8 bits per color |

🚨 **Trap on the exam:** TPM 2.0 is non-negotiable for Windows 11. A device with TPM 1.2 cannot run Windows 11 in supported mode (there are unsupported registry workarounds Microsoft does not endorse).

---

## 🔧 Common Autopilot Deployment Failures

Memorize these, they recur on the exam and in real life:

| Symptom | Root cause | Fix |
|---------|-----------|-----|
| Device unboxed, OOBE shows "Welcome to your new device" generic screen | Hardware hash not registered, or profile not assigned to device group | Verify hash in Intune; assign profile |
| Device joins but ESP times out on app install | Required app failing, ESP timeout too short, or app too large | Increase timeout, fix detection rule, check app deployment |
| Self-deploying mode hangs at "Securing your device" | TPM attestation failed (TPM not 2.0, attestation service unreachable) | Verify TPM 2.0, network access |
| Hybrid Autopilot fails with "0x80180014" | Domain join offline blob misconfig or Intune Connector for AD not healthy | Reinstall Intune Connector on the DC |
| User-driven shows "Workplace join failed" | User account not licensed for Intune, or in a group excluded from enrollment | Check license, enrollment restrictions |
| Win32 apps stuck "Installing" | Detection rule never returns true | Fix detection rule |

---

## 🧪 Task-Sequencing Practice: Direct-Ship Autopilot Setup

**Order these steps to set up Autopilot user-driven for a new round of 200 laptops shipped direct from Lenovo to user home addresses.**

The correct sequence:

1. ✅ **Verify Intune licensing** for every user who'll be issued a device.
2. ✅ **Coordinate with Lenovo CSP** to register devices to your tenant at order time.
3. ✅ **Create a Microsoft Entra dynamic device group** with rule `(device.devicePhysicalIds -any _ -contains "[ZTDId]")` to auto-target Autopilot devices.
4. ✅ **Create the Autopilot profile** (user-driven, Entra joined, device name template, Hide EULA).
5. ✅ **Assign the profile** to the Autopilot device group.
6. ✅ **Build the Enrollment Status Page** (block until apps installed, list required apps).
7. ✅ **Assign required apps + compliance + configuration profiles** to user groups.
8. ✅ **Pilot with one user**, observe ESP, debug, fix.
9. ✅ **Notify users to expect their device** + give them a quick-start guide.
10. ✅ **Ship.**

⚠️ Skipping step 3 means hashes show up in Intune but no profile applies. Skipping step 8 means you fix issues in production at the worst possible moment.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Autopilot works without internet" | ❌ Autopilot REQUIRES internet at OOBE to contact the Microsoft service |
| "Self-deploying works on any Windows device" | ❌ Requires TPM 2.0 attestation, only Entra joined |
| "MDT enrolls devices in Intune automatically" | ❌ MDT does not, you must add an enrollment step manually |
| "In-place upgrade is the same as Autopilot reset" | ❌ In-place upgrades the OS; reset wipes and rebuilds |
| "Provisioning packages replace Autopilot" | ❌ Different tools for different scenarios, neither is "newer" |
| "Hybrid Autopilot needs no infrastructure" | ❌ Needs Intune Connector for AD on a domain controller |
| "All Windows 11 devices have TPM 2.0" | ❌ Older fleet refreshes, many devices have TPM 1.2 and cannot upgrade |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Windows Autopilot** | Microsoft's cloud-driven OOBE customization for new device deployment |
| **Hardware hash** | The unique device fingerprint (TPM + motherboard + other IDs) used to identify a device to Autopilot |
| **Autopilot profile** | The recipe (deployment mode, join type, ESP, etc.) assigned to a device |
| **Enrollment Status Page (ESP)** | The progress screen during Intune provisioning at OOBE |
| **Self-deploying mode** | Autopilot mode with no user interaction; needs TPM 2.0 |
| **Pre-provisioned (white-glove)** | Autopilot mode where IT does the heavy lifting before user receives device |
| **User-driven** | The default Autopilot mode; user signs in to finish setup |
| **Autopilot for existing devices** | Rebuild an existing Win10/11 device into an Autopilot device |
| **Provisioning package (.ppkg)** | A Windows Configuration Designer file applied at OOBE or to running devices |
| **MDT** | Microsoft Deployment Toolkit, on-prem WIM-based imaging |
| **OSD** | Operating System Deployment, Configuration Manager's deployment engine |
| **In-place upgrade** | Setup-engine OS upgrade preserving apps + user data |
| **Autopilot reset** | Tenant-side wipe + re-Autopilot for device repurposing |
| **Fresh start** | User-initiated Windows reset preserving user data |
| **ESP timeout** | The maximum wait time before ESP shows error (default 60 min) |
| **ZTDId** | Zero-Touch Deployment ID, the Autopilot device identifier in Entra |

---

## ✅ Module 2 Summary

You now know:

- 💿 The six modern Windows deployment modes and when to pick each
- 🪪 The full Autopilot flow, registration → profile → ESP → completion
- 🏷️ Every Autopilot profile setting and the default for cloud-only deployment
- 📋 The five ways to register devices with Autopilot
- 📦 When `.ppkg` provisioning packages still beat Autopilot
- 🏗️ MDT and ConfigMgr OSD as the on-prem alternatives
- 🔁 In-place upgrade vs wipe-and-load vs Autopilot reset
- 💻 Windows 11 system requirements (especially TPM 2.0)
- 🔧 The 6 most common Autopilot failure modes and their fixes
- ⚠️ The 7 most common deployment traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Microsoft Intune Fundamentals](../Module-03-Intune/Reading.md)

---

## 📊 Case Study, Lenovo + Microsoft Surface OEM Autopilot Partnership (2019–2024)

**Situation.** When Microsoft introduced Windows Autopilot as a generally available service in 2017, the biggest practical adoption barrier was the **hardware hash collection** step. Enterprises buying 5,000 new laptops faced the choice of (a) imaging each one in a staging facility to extract the hash, (b) running PowerShell on every device at receipt, or (c) trusting the OEM to do it. Option (c) didn't exist because no OEM had a workflow for it.

In 2019, **Lenovo became the first major OEM** to support Autopilot hash registration at the point of manufacture for Think-branded laptops (ThinkPad, ThinkBook, ThinkCentre, ThinkStation). Microsoft made its **Microsoft Surface** family hash-registration-capable the same year. Dell, HP, and Panasonic followed by 2020–2021.

**Decision.** A typical 2024-era flow now looks like (multiple Microsoft and OEM customer stories, including Microsoft Mechanics 2023 episode *Autopilot at scale with Lenovo CSP*):

1. The enterprise orders 1,000 laptops through their Lenovo CSP relationship.
2. Procurement provides the **Microsoft tenant ID** to Lenovo at order time.
3. Lenovo's factory captures the hardware hash during quality assurance and registers each device to the customer's tenant via the **Microsoft Partner Center Autopilot APIs**.
4. Devices ship directly from the factory (often a different country than the enterprise's HQ) to user home addresses, with no IT touch.
5. User unboxes, connects to home Wi-Fi, signs in with corporate credentials, and lands at a Windows 11 desktop with all corporate apps in 18–35 minutes.

**Outcome.** Microsoft reports (Microsoft case study, *Modern device management at scale*, 2024):

- **Deployment time per device** for OEM-registered Autopilot fell from ~4 hours (traditional imaging) to ~25 minutes (Autopilot user-driven), with most of that being unattended.
- **IT staff time per deployment** dropped from ~45 minutes (touch, image, ship, support) to ~3 minutes (assign profile, debug edge cases).
- **Time from order placement to user productivity** dropped from 4–6 weeks to 5–10 business days in best-case OEM workflows.
- **Total cost per deployment** (including IT labor, shipping, packaging, staging facility) fell an estimated 60–75% per Microsoft's Forrester TEI study of cloud-managed endpoints.
- **Autopilot device registrations through OEM channels** crossed 1 million per month in 2022 and have grown steadily since.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* MD-102 spends so much time on Autopilot and so little on traditional imaging. The economic and operational case for cloud-managed direct-ship deployment is overwhelming once the OEM hash-registration story is solved. When you see "1,000-laptop rollout to home addresses" or "no IT touch before user receives device" on the exam, the answer is **Autopilot user-driven with OEM hash registration**, every time. The Maersk story (Module 1) is the security case for cloud-managed; the Lenovo/Surface OEM story is the operational case.

**Discussion (Socratic).**
- **Q1.** The OEM hash registration model creates a tenant-binding dependency at the factory. Argue both sides: should an enterprise insist on OEM registration to standardize provisioning, or should they keep the option of manual registration for flexibility? What does each choice cost when the enterprise wants to repurpose devices to a subsidiary tenant?
- **Q2.** Autopilot user-driven requires internet at OOBE. A field office in a low-bandwidth location asks for an alternative. The two supported answers are (a) provisioning package shipped on USB or (b) Autopilot at the office with pre-provisioned (white-glove) finish for users. Defend which is right when bandwidth is the constraint vs when device count is the constraint.
- **Q3.** A startup CTO with 30 employees argues "Autopilot is overkill, just hand-configure each device, it takes me an hour each." Microsoft's customer-story numbers suggest break-even is around 50–100 devices. Defend or refute the CTO's position, naming the one operational scenario (besides initial provisioning) where Autopilot pays for itself even for tiny fleets.

---

> **Where this leads.**
> - Inside this course: Module 3 introduces Intune as the policy engine that takes over once Autopilot finishes; Module 4 covers enrollment beyond Autopilot (iOS/Android/macOS/Linux); Module 5 covers app deployment, which is what fills the ESP screen during Autopilot.
> - Cross-course: AZ-104 doesn't cover deployment because it's Azure not endpoint, but [`05-Azure-Fundamentals` Module 3](../../05-Azure-Fundamentals/Module-03-Core-Services/Reading.md) covers VM provisioning, the cloud analogue.
> - Practice: Practice Exam 1 has roughly 7–9 questions from this module (Autopilot modes, ESP, provisioning packages, deployment-mode-picker scenarios). Final Mock Exam revisits with multi-part scenarios.

---

## 💬 Discussion, Socratic prompts

1. **Self-deploying vs user-driven for shared frontline devices.** A retail chain wants tablets at every checkout counter that boot to a single inventory app. Argue self-deploying vs user-driven, and identify the one Intune feature that makes self-deploying the cleaner answer.
2. **ConfigMgr OSD in 2026.** Is there any greenfield scenario in 2026 where you'd recommend ConfigMgr OSD over Autopilot for new device deployment? Defend your answer with reference to operational cost, staff training, and infrastructure investment.
3. **Pre-provisioned vs user-driven for executives.** Executives often demand "their device must work the moment they touch it." Argue when pre-provisioned (white-glove) is the right answer and when it's IT control-theater that costs more than it delivers.
4. **In-place upgrade vs wipe-and-load for Windows 11 migration.** A 5,000-endpoint org is moving from Windows 10 22H2 to Windows 11 24H2. Defend in-place vs wipe-and-load, when is each right? What's the one scenario where wipe-and-load is correct even though in-place is technically supported?
5. **Provisioning packages in 2026.** Many shops dismiss `.ppkg` as legacy. Defend the modern relevance of provisioning packages, naming at least two scenarios where they're still the right answer in 2026.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn, Windows Autopilot deployment scenarios](https://learn.microsoft.com/autopilot/scenarios) (Microsoft, current revision)
- 📖 [Get-WindowsAutopilotInfo PowerShell module documentation](https://learn.microsoft.com/autopilot/add-devices)
- 📖 [Microsoft Configuration Manager OSD overview](https://learn.microsoft.com/mem/configmgr/osd/understand/introduction-to-operating-system-deployment)
- 📖 [Microsoft Deployment Toolkit (MDT) reference](https://learn.microsoft.com/mem/configmgr/mdt/)
- 📖 [Windows 11 system requirements (canonical Microsoft page)](https://www.microsoft.com/windows/windows-11-specifications)
- 📖 Mark Russinovich + David Solomon, *Windows Internals (8th ed.)*, chapter on the Windows boot process; useful when troubleshooting Autopilot OOBE failures
- 📖 Microsoft Mechanics episode *Autopilot at scale with Lenovo CSP* (2023), the operational case study from the OEM side
