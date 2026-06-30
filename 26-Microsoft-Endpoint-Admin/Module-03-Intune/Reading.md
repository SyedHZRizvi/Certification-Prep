# Module 3: Microsoft Intune Fundamentals ☁️

> **Why this module matters:** Intune is the management plane for everything in MD-102. Modules 4–8 are all "doing things in Intune." If you can't navigate the Intune admin center, name the platforms it manages, and explain MDM vs MAM in your sleep, every later module collapses. This is the central nervous system.

> **Prerequisites for this module.** Before starting:
> - Module 1 (Modern Workplace), you should know the three Entra device join states and the difference between MDM and MAM.
> - Module 2 (Deployment), you should know how a device gets to Intune-managed state via Autopilot.
> - Microsoft 365 / Azure Portal navigation basics, clicking around blades, tenant ID, admin role basics.
>
> If you've never opened the Intune admin center (`intune.microsoft.com`), do that first. Sign up for a free 90-day Microsoft 365 E5 developer tenant if you don't have access.

---

## 🍕 A Story: Maria's First Day Back After PTO

Maria returns from a week of PTO. Her inbox has:

1. A ticket from Cork, *"My iPad isn't getting the WiFi password from our policy."*
2. A ticket from San Diego, *"I left the company laptop in a coffee shop. Need to remote-wipe it. NOW."*
3. A ticket from a contractor *"I can't open the project files on my Mac keeps saying I'm not enrolled."*
4. A ticket from a sales rep, *"My Android phone won't let me copy from Outlook to my personal Notes app, and that's by design but my manager wants an exception."*
5. A ticket from the CFO, *"What's our Intune license posture? Are we paying for Plan 2 features we don't use?"*
6. A request from legal, *"We're being acquired by a German company. They have their own M365 tenant. What's the plan to migrate our 1,400 devices?"*

In 30 years of IT, the laptop-in-the-coffee-shop scenario was the worst Maria would face. Today it's one of six things she'll handle before lunch, and every one of them lives in the same console. **Microsoft Intune.** This module teaches you the console, the architecture, and the licensing matrix that decides which buttons you're allowed to push.

---

## 🏗️ The Intune Architecture (MEMORIZE THIS)

Microsoft Intune is a cloud SaaS. There is no on-prem Intune server. The components:

```
                   ┌─────────────────────────────────────┐
                   │   intune.microsoft.com              │
                   │   (admin portal, Azure-hosted)     │
                   └────────────────┬────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       │                            │                            │
┌──────▼──────────┐    ┌────────────▼─────────────┐    ┌────────▼────────┐
│  Microsoft      │    │   Microsoft Intune       │    │  Company        │
│  Entra ID       │    │   service (per-tenant)   │    │  Portal apps    │
│  (identity,     │    │   - Devices              │    │  (Windows,iOS,  │
│   groups, CA)   │    │   - Configuration        │    │   Android, Mac) │
│                 │    │   - Apps                 │    │                 │
└──────┬──────────┘    │   - Endpoint security    │    └────────┬────────┘
       │               │   - Reports              │             │
       │               └────────────┬─────────────┘             │
       │                            │                           │
       └────────────┬───────────────┴────────────┬──────────────┘
                    │                            │
       ┌────────────▼─────────────┐  ┌──────────▼──────────────┐
       │  Device MDM channel      │  │  Apple Push Notification │
       │  (Windows, Android       │  │  service (APNs cert      │
       │   Enterprise, Linux)     │  │   needed for iOS/macOS)  │
       └──────────────────────────┘  └──────────────────────────┘
```

Key insight: **Intune doesn't manage devices directly.** It uses each platform's native MDM channel (Windows MDM Stack, Apple MDM Protocol, Android Enterprise APIs, Linux's lightweight MDM agent). Intune is a *policy authority*, it tells the channel what to apply.

🔥 **MEMORIZE:** Intune lives at `intune.microsoft.com`. The admin center is technically called *Microsoft Intune admin center* (previously *MEM admin center*, previously *endpoint.microsoft.com*).

---

## 📱 MDM vs MAM, The Single Most Important Distinction

If you only memorize one Intune concept, memorize this:

| | **MDM (Mobile Device Management)** | **MAM (Mobile Application Management)** |
|---|---|---|
| **What it manages** | The entire device | Specific apps + the corporate data inside them |
| **Enrollment** | Device is enrolled in Intune | App is enrolled (or just signs in with work account) |
| **User experience** | Sees Company Portal, accepts management terms | Just uses Outlook/Teams/Edge normally |
| **Control surface** | OS settings, all apps, factory reset, full device wipe | Cut/copy/paste, save-as, encryption, app-PIN, selective wipe |
| **Privacy on personal device** | High intrusion (everything visible to IT) | Low intrusion (only the work data is touched) |
| **Wipe scope** | Whole device or work container | Only the work data inside protected apps |
| **Right for** | Corporate-owned devices | BYOD or hybrid scenarios |
| **Setting type** | Configuration profiles, compliance policies | App protection policies (APP), app configuration policies |

🚨 **Trap on the exam:** "Mobile Application Management" sounds like it's about installing apps. It is NOT. *Installing* apps is part of MDM. MAM is specifically about *protecting corporate data inside apps that may or may not be on managed devices*.

---

## 🖥️ Platforms Intune Manages

| Platform | MDM | MAM | Special requirements |
|----------|-----|-----|----------------------|
| **Windows 10/11** | ✅ Yes | ✅ Yes (for select apps) | Edge, Office, Teams support APP |
| **iOS / iPadOS** | ✅ Yes | ✅ Yes | Apple MDM cert (APNs) required |
| **Android (Enterprise)** | ✅ Yes | ✅ Yes | Managed Google Play account |
| **Android AOSP** (kiosks) | ✅ Yes (limited) | ❌ | Special enrollment for Zebra, RealWear |
| **macOS** | ✅ Yes | ❌ | APNs cert required |
| **Linux** (Ubuntu LTS) | ✅ Limited (compliance + Edge cfg only) | ❌ | Microsoft Edge required for sign-in |

🎯 **Exam tip:** Linux Intune is **compliance + Microsoft Edge configuration only** as of 2024+. Don't expect full settings catalog parity with Windows.

---

## 💳 Intune Licensing, Plan 1 vs Plan 2 vs Suite

This is one of the most frequently tested topics. Memorize the matrix:

| Plan | Includes | When |
|------|----------|------|
| **Microsoft Intune Plan 1** | Core MDM + MAM + Configuration profiles + Compliance + Apps + Endpoint security baselines | Default for M365 E3 |
| **Microsoft Intune Plan 2** | Plan 1 + **Advanced Endpoint Analytics** + Remote Help base + Specialty device management (AR/VR/IoT) | Add-on |
| **Microsoft Intune Suite** | Plan 1 + Plan 2 + **Endpoint Privilege Management (EPM)** + **Microsoft Tunnel for MAM** + Remote Help advanced + Cloud PKI + Enterprise App Management + Advanced Analytics | Premium add-on |

Bundled in larger packages:
| Bundle | Includes Intune |
|--------|----------------|
| **Microsoft 365 E3** | Intune Plan 1 |
| **Microsoft 365 E5** | Intune Plan 1 (Plan 2 features sold separately) |
| **Microsoft 365 Business Premium** | Intune Plan 1 (limited) |
| **EMS E3** | Intune Plan 1 + Entra ID P1 + Azure Information Protection P1 |
| **EMS E5** | Intune Plan 1 + Entra ID P2 + AIP P2 + Defender for Cloud Apps |

🔥 **MEMORIZE:** When the exam asks "what license unlocks feature X", the matrix above is the answer.

---

## 🏢 Tenants, Roles, and Scopes

Intune lives inside a Microsoft Entra ID tenant. Permissions come from two role models:

### Built-in Intune RBAC roles

| Role | What |
|------|------|
| **Intune Administrator** | Full Intune access (Entra role) |
| **Help Desk Operator** | Read most things, run remote actions, no config |
| **Policy and Profile Manager** | Create/edit policies but not enrollments |
| **Application Manager** | App lifecycle (create, deploy, monitor) |
| **Endpoint Security Manager** | Defender + security baselines + ASR |
| **School Administrator** | Education-tenant specific |
| **Read Only Operator** | View only |
| **Cloud PKI Administrator** | Cloud PKI service mgmt |

You can also create **custom Intune roles** with granular permissions.

### Scope tags

Scope tags **partition** what an admin can see. Example: a help desk operator in EMEA can be scoped to only see EMEA-tagged devices. Tags are attached to devices, policies, and apps; admins are assigned the tags they can see.

🎯 **Exam tip:** Custom Intune roles + scope tags = the answer for "regional admin can only see their region's devices."

---

## 🎯 Group Targeting in Intune

Intune assigns policies and apps to **Microsoft Entra ID groups**, never to individuals directly. The groups can be:

| Group type | Membership |
|------------|------------|
| **Assigned (static)** | Manually managed list of users or devices |
| **Dynamic user** | Membership rule based on user attributes (`user.department -eq "Finance"`) |
| **Dynamic device** | Membership rule based on device attributes (`device.deviceOSType -eq "iOS"`) |
| **Security group** | Standard Entra group for assignments |
| **Microsoft 365 group** | Tied to a Team or SharePoint, can be assignment target |

Special groups:

- **All users**, pseudo-group covering every licensed user
- **All devices**, pseudo-group covering every enrolled device

### Assignment patterns

| Assignment | Effect |
|------------|--------|
| **Include** | Add this group to receive the policy |
| **Exclude** | Subtract this group from receiving the policy |
| **Filter** | Apply only to devices matching the filter expression (e.g., manufacturer = Microsoft) |

🚨 **Trap on the exam:** **Exclude beats Include.** If a user is in an Include group and an Exclude group, they're excluded. Use this for VIP exemptions.

---

## 🛡️ App Protection Policies (APP), The MAM Workhorse

App protection policies are the way you protect corporate data inside apps without enrolling the device. APP applies to apps that integrate with the **Microsoft Intune App SDK** or are wrapped with the App Wrapping Tool, most importantly Microsoft 365 apps (Outlook, OneDrive, Teams, Edge, Word, Excel, PowerPoint).

### Common APP settings

| Setting | Effect |
|---------|--------|
| **Data transfer to other apps** | Allow only managed apps / All apps / None |
| **Receive data from other apps** | Same options reversed |
| **Save copies of org data** | Block / Allow (specific destinations) |
| **Cut, copy, paste with other apps** | Restrict to managed |
| **Encrypt org data** | Required (encrypts at rest in the app's container) |
| **Sync app with native contacts app** | Allow / Block |
| **Printing org data** | Allow / Block |
| **Restrict web content transfer with managed browser** | Edge or Intune Managed Browser |
| **App PIN** | Required, complexity, retry limits |
| **Disable app PIN when device PIN is managed** | If device is MDM-enrolled with PIN, skip |
| **Conditional launch** | Block sign-in if: offline grace period exceeded, jailbroken, OS too old |

APP can target by:

- App (Outlook, Teams, Word, etc.), typically the standard Microsoft 365 set
- Public apps (defined by Microsoft) vs custom apps (wrapped with SDK or App Wrapping Tool)

🎯 **Exam tip:** "Stop sales reps from copying customer data from Outlook to WhatsApp" = APP with "Cut, copy, paste with other apps" set to **Policy managed apps** (Outlook can copy to other managed apps, not WhatsApp).

---

## 📲 The Company Portal App

The Company Portal is the user-facing front door for Intune. It handles:

- **Self-service device enrollment** (the user walks through the wizard)
- **App catalog** (available apps the user can install)
- **Compliance status** (am I compliant? if not, what's wrong?)
- **Device management actions** (reset, remove device, sync)
- **Account management** (signed-in work account)
- **Help links** (your IT team's URLs)

The Company Portal app exists for Windows, iOS, Android, and macOS. There's also a **Company Portal website** (`portal.manage.microsoft.com`) that mirrors most actions in a browser.

🚨 **Trap on the exam:** The Company Portal is *required* for self-service enrollment on iOS and Android. Without it, users would need to enroll through OS-native steps which are much more confusing.

---

## 🔄 Configuration Profiles, The MDM Workhorse

Configuration profiles are how Intune applies device settings. There are several types:

| Profile type | What |
|--------------|------|
| **Settings catalog** | The modern, flexible UI listing every available setting (~thousands across platforms). Microsoft's preferred surface. |
| **Templates** | Pre-built templates (Wi-Fi, VPN, certificate, email, kiosk, OEMConfig, etc.) |
| **Administrative templates** | Group Policy-style ADMX-backed settings for Windows |
| **Imported ADMX** | Custom ADMX/ADML files you upload |
| **Custom (OMA-URI)** | Direct OMA-URI custom CSP paths, for settings not exposed in UI |
| **Endpoint Protection** | (Legacy) Windows-only security settings, now mostly absorbed by Endpoint Security blade |

🎯 **Exam tip:** Settings Catalog is the answer to most "how do I configure setting X" questions in 2024+. Custom OMA-URI is for the rare CSP path not yet surfaced.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "MAM means managing app installs" | ❌ MAM = managing *corporate data inside apps* |
| "Plan 2 is required for Conditional Access" | ❌ CA is an Entra feature, not Intune-specific |
| "All users can be assigned policies directly" | ❌ Policies target *groups*, not users directly |
| "Linux has full Intune parity" | ❌ Linux = compliance + Edge configuration only |
| "Include and Exclude can conflict; Include wins" | ❌ Exclude beats Include |
| "Apple devices don't need any special cert" | ❌ APNs cert required for iOS/macOS |
| "Company Portal is optional everywhere" | ❌ Required for self-service iOS/Android enrollment |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Microsoft Intune** | Microsoft's cloud-based MDM + MAM service |
| **Intune admin center** | `intune.microsoft.com`, the admin portal |
| **MDM** | Mobile Device Management, full device enrollment + control |
| **MAM** | Mobile Application Management, protect data inside apps |
| **App Protection Policy (APP)** | The MAM policy surface, controls cut/copy/paste, encryption, PIN |
| **Configuration profile** | The MDM policy surface, settings catalog, templates, etc. |
| **Compliance policy** | Rules evaluating device health (encryption, OS version, jailbreak) |
| **Settings catalog** | The modern, flexible UI for configuration settings |
| **Scope tags** | Labels that partition admin visibility |
| **Plan 1 / Plan 2 / Suite** | Intune licensing tiers |
| **EPM** | Endpoint Privilege Management, Intune Suite feature for elevated permissions |
| **Remote Help** | Intune's built-in remote-control tool, Suite feature |
| **APNs** | Apple Push Notification service, required cert for iOS/macOS management |
| **Managed Google Play** | Google's enterprise account model, required for Android Enterprise |
| **Company Portal** | The end-user-facing Intune app and website |

---

## ✅ Module 3 Summary

You now know:

- ☁️ The Intune architecture and its dependency on native MDM channels
- 📱 MDM vs MAM, the core distinction underlying every Intune scenario
- 🖥️ The 6 platforms Intune manages and the quirks of each (especially Linux)
- 💳 Plan 1 vs Plan 2 vs Suite licensing and what features each unlocks
- 🏢 Intune RBAC roles + scope tags for delegating admin access
- 🎯 Group targeting patterns (Include / Exclude / Filter) and that Exclude beats Include
- 🛡️ App Protection Policies (APP) settings and what "protect work data" means
- 📲 The Company Portal and where it's required
- 🔄 Configuration profile types and why Settings Catalog is the modern default

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: Device Enrollment & Compliance](../Module-04-Enrollment-Compliance/Reading.md)

---

## 📊 Case Study, Heineken Global Intune Adoption (2020–2024)

**Situation.** Heineken N.V. (the world's second-largest brewer, ~80,000 employees in 70 countries) faced a textbook fragmented endpoint management story circa 2019: ~85,000 endpoints across Windows, iOS, Android, and macOS, with each region running a different mix of ConfigMgr, MobileIron (a legacy MDM), AirWatch, and Intune. App protection was inconsistent. The CISO could not answer "how many of our devices have current Defender signatures?" with a single number. The COVID-19 work-from-home shift in March 2020 made the fragmentation untenable: VPN concentrators saturated, BYOD enrollment requests spiked 400%, and remote IT support was nearly impossible to standardize.

**Decision.** Heineken's central IT, advised by Microsoft FastTrack, consolidated on **Microsoft Intune as the single MDM/MAM authority** for all platforms (Microsoft customer story, *Heineken, Modern Workplace Transformation*, 2022, refreshed 2024):

1. **Standardize on Microsoft 365 E5** for all corporate users, bundles Intune Plan 1 + Entra ID P2 + Defender for Endpoint Plan 2.
2. **Migrate all Windows endpoints off ConfigMgr** to Intune via co-management slider workloads (Module 1), targeting full Intune for compliance + Windows Update first.
3. **Migrate all iOS/iPad/Android off MobileIron and AirWatch** to Intune through cutover (no parallel migration, clean break).
4. **App Protection Policies on every BYOD device**, every employee can use Outlook Mobile on their personal phone, protected by APP without enrollment.
5. **Scope tags by region**, EMEA admins see EMEA devices; APAC admins see APAC devices.
6. **Defender for Endpoint signal integration** with Intune compliance, high-risk devices automatically marked non-compliant, blocked by CA.

**Outcome.** Heineken reported (Microsoft customer story, 2024 update):

- **Device management consolidation**: from 4 MDM vendors to 1 (Intune) across the entire fleet of ~85,000 endpoints.
- **BYOD adoption**: ~22,000 personal devices enrolled in MAM (no device enrollment, app-protected only), a 4× increase over the legacy MobileIron BYOD count.
- **Defender signal coverage**: from estimated 50% (legacy AV mix) to >98% of fleet on Defender for Endpoint with EDR.
- **MTTR for "lost phone"**: from "open ticket, queue 24h, IT calls user" to **under 5 minutes** (self-service remote wipe via Company Portal).
- **App protection compliance**: 99.4% of users on protected versions of Outlook + Teams + OneDrive (vs ~70% in fragmented state).
- **Annual licensing cost**: Heineken does not disclose the figure, but Microsoft's M365 E5 + Intune Suite is *more* expensive per seat than the previous fragmented spend; the business case rested on operational simplification + risk reduction, not raw cost.
- **Time to onboard a new acquired brewery**: from "12 weeks of MDM negotiation" to "2 weeks of Entra group + Intune profile assignment."

**Lesson for the exam / for practitioners.** This is the textbook case for *why* Microsoft pushes the single-platform Intune story and *why* the MD-102 exam assumes it. The economic case for consolidation is rarely a license-cost argument; it's almost always an *operational simplicity* and *risk-reduction* argument. When the exam describes a multi-vendor MDM environment and asks for a strategic recommendation, the modern answer is **consolidate on Intune**. When the exam asks how to manage BYOD at scale without enrollment, the answer is **App Protection Policies + Conditional Access**, every time. The Heineken story is why.

**Discussion (Socratic).**
- **Q1.** Heineken did a clean cutover from MobileIron + AirWatch to Intune, not a parallel migration. Argue both sides: when is a clean cutover the right answer, and when does parallel migration justify the operational complexity?
- **Q2.** Heineken's BYOD model uses MAM-only (no enrollment). A risk-averse legal team at a peer brewer argues that MAM-only is insufficient because IT cannot wipe the entire device. Defend MAM-only by naming the two specific protections it provides that MDM cannot match (hint: think about user privacy and adoption rates).
- **Q3.** Heineken's scope-tag model means an EMEA admin literally cannot see APAC devices. A new CTO asks why scope tags aren't just RBAC. Defend scope tags as a separate concept by identifying the one scenario where scope tags work and RBAC alone would fail.

---

> **Where this leads.**
> - Inside this course: Module 4 covers all the enrollment paths into Intune (Apple ABM, Android Enterprise, Windows Autopilot, manual); Module 5 covers app deployment (which fills the app catalog the Company Portal exposes); Module 6 covers endpoint security (Defender + ASR + BitLocker integrated with Intune).
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) covers Entra groups, dynamic membership, and CA, all of which Intune leans on heavily.
> - Practice: Practice Exam 1 has roughly 6–8 questions from this module (MDM/MAM, licensing, group targeting, APP settings). Final Mock Exam revisits with case-study synthesis.

---

## 💬 Discussion, Socratic prompts

1. **MDM vs MAM for a regulated bank.** A bank wants to issue corporate iPhones to all employees ($800 × 4,000 phones = $3.2M). The IT team argues for MDM full enrollment; the CFO asks "why can't we use MAM and let people keep their personal phones?" Defend the right answer for a regulated bank, naming the one regulatory or operational scenario that decides it.
2. **Plan 1 vs Plan 2 vs Suite.** A 1,000-employee software company is on Microsoft 365 E3 (Intune Plan 1 included). They're debating adding Plan 2 vs the full Suite. Defend each upgrade path by naming the one feature in each that would justify the spend.
3. **Settings Catalog vs OMA-URI.** Microsoft is moving most settings into the modern Settings Catalog UI. When is a custom OMA-URI configuration *still* the right answer in 2026? Defend with reference to setting timing, CSP support, and the cost of maintaining custom OMA-URI strings.
4. **Scope tags vs separate tenants.** A holding company with 5 subsidiaries debates separate Intune tenants per subsidiary vs one tenant with scope tags. Defend each model by considering admin training, billing, and what happens when subsidiaries are sold off.
5. **Exclude beats Include, by design.** Intune's "Exclude wins" rule means a VIP user can be exempted from a strict policy by adding them to an Exclude group. A skeptical auditor says "this creates an audit blind spot." Defend the design by naming the specific Intune feature that closes that audit gap.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Intune documentation home](https://learn.microsoft.com/mem/intune/) (Microsoft, current revision)
- 📖 [Intune licensing, Plan 1, Plan 2, Suite](https://learn.microsoft.com/mem/intune/fundamentals/intune-add-ons)
- 📖 [App Protection Policy framework](https://learn.microsoft.com/mem/intune/apps/app-protection-framework)
- 📖 [Settings Catalog in Microsoft Intune](https://learn.microsoft.com/mem/intune/configuration/settings-catalog)
- 📖 [Custom OMA-URI configuration profiles](https://learn.microsoft.com/mem/intune/configuration/custom-settings-configure)
- 📖 [Intune scope tags + RBAC](https://learn.microsoft.com/mem/intune/fundamentals/scope-tags)
- 📖 [Microsoft Mechanics Intune at scale](https://www.youtube.com/c/MicrosoftMechanicsSeries) episode archive
