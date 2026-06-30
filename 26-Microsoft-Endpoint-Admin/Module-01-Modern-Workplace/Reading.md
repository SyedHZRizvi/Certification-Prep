# Module 1: Modern Workplace & Endpoint Strategy 🌐

> **Why this module matters:** The shift from the domain-joined ThinkPad on a Cat-6 cable to the user's personal iPhone reading corporate email is the single biggest change Microsoft expects you to operate. Get the strategy wrong and you spend the next decade taping over the gaps with policy band-aids. Get it right and the rest of MD-102 is plumbing.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Microsoft 365 service families at the AZ-900 / MS-900 level (what Entra ID, Exchange Online, SharePoint Online, and Teams actually do).
> - Basic networking, TCP/IP, DNS, HTTPS, what a "client behind a NAT" means.
> - Reading PowerShell snippets without writing them.
>
> If those are shaky, spend an hour with MS-900 (Microsoft 365 Fundamentals) on Microsoft Learn first. MD-102 assumes you know what an Entra ID tenant is on day one.

---

## 🍕 A Story: Northwind Pharmaceuticals, The 1,000-Laptop Tuesday

It's 6:42am on a Tuesday in 2026. Maria Chen is the lead endpoint admin at Northwind Pharmaceuticals, a 1,400-person specialty pharma headquartered in Princeton with R&D in San Diego, manufacturing in Cork, Ireland, and field sales scattered across 11 countries. Her phone buzzes with a Teams message from the CIO:

> *"Maria, the laptop order landed at Newark customs overnight. 1,000 ThinkPad X1 Carbons. Procurement says they go straight to FedEx for direct ship to home addresses. Sales kickoff is Friday at 9am Eastern. Everyone needs to be productive by 9:01."*

In 2015, this conversation would have ended Maria's week. She'd have needed:

- Shipping the laptops back to Princeton for IT to image them
- A bench of 6 imaging engineers working three 12-hour shifts
- Pre-staged Active Directory accounts, OU placement, GPO assignment
- Pre-loaded LOB apps via System Center Configuration Manager task sequences
- A trip to FedEx by the third shift Wednesday for re-shipping to users
- 22% of devices arriving DOA or with a wrong driver and Maria's team eating the blame

In 2026, Maria's reply is one sentence:

> *"Tell procurement to confirm the OEM (Lenovo CSP) has the hardware hashes pre-registered to our tenant. We'll handle the rest from here."*

By Friday morning, every laptop unboxes itself, the user types their `firstname.lastname@northwind.com` address, MFA prompts on their corporate-issued phone, and 18 minutes later Microsoft Edge opens to the Northwind sales portal with all corporate apps installed, OneDrive synced, Defender for Endpoint reporting healthy, BitLocker encrypted with the recovery key escrowed, compliance policy passed, and a Conditional Access decision of "Grant, compliant device, MFA satisfied, low risk." The user has never seen a domain controller. Maria has never touched a device. Procurement direct-shipped from a customs warehouse in Newark to a kitchen table in Tucson, and the device is fully governed by Microsoft Intune from boot one.

**That, in one anecdote, is what MD-102 is preparing you to run.** The shift didn't happen because Microsoft willed it. It happened because the underlying assumptions of enterprise IT line-of-sight to a DC, identity = AD, the office = the perimeter stopped being true. This module is the strategic foundation. The remaining seven are the mechanics.

---

## 🏛️ The Endpoint Generational Shift (MEMORIZE THIS)

| Era | Identity | Device join | Mgmt tool | Network assumption | Patch model |
|-----|----------|-------------|-----------|--------------------|-------------|
| **Traditional (2005–2015)** | Active Directory | AD domain join | Group Policy + SCCM | Line-of-sight to DC; VPN if remote | WSUS, monthly cycle |
| **Hybrid (2015–2020)** | AD + Entra ID Connect | Hybrid joined | SCCM + Intune (co-mgmt) | VPN or Direct Access; some cloud apps | WSUS, plus WUfB starting |
| **Modern (2020–present)** | Microsoft Entra ID | Entra joined or Entra registered | Microsoft Intune only | Internet is the perimeter; Zero Trust | WUfB + Delivery Optimization |
| **Cloud-native (2023+)** | Entra ID, passwordless | Entra joined (no AD anywhere) | Intune + Autopatch | Conditional Access enforced everywhere | Autopatch + expedited updates |

🔥 **Inflection moment.** Most enterprises today are mid-migration from Hybrid to Modern. The exam will repeatedly ask "what's the right modern answer", and the modern answer is usually **Entra joined + Intune + Conditional Access + Microsoft Defender for Endpoint**, not "join to the domain."

---

## 🪪 The Three Microsoft Entra Device Join States

Every Windows 11 device sits in exactly one of these three states. Get this wrong and the device shows up in the wrong portal, gets the wrong policies, and breaks SSO.

| Join state | Identity record | Use case | Primary user pattern | Auth flow |
|------------|----------------|----------|----------------------|-----------|
| **Microsoft Entra registered** | Entra ID device object only | BYOD, personal Windows PC accessing work resources | Personal account is local; work account added via Settings | User signs in to corporate apps with corporate account; no SSO at OS sign-in |
| **Microsoft Entra joined** | Entra ID device object | Corporate-owned cloud-only device | Sign in with corporate `user@contoso.com` at the Windows lock screen | Full Entra SSO; PRT issued; conditional access enforced |
| **Microsoft Entra hybrid joined** | AD computer object + Entra ID device object (synced) | Existing AD-joined device that also needs cloud apps | Sign in with on-prem AD credentials | AD ticket + Entra PRT, best of both, twice the failure modes |

🎯 **Exam tip:** "Cloud-only" and "Entra joined" mean the same thing in MD-102 language. "Hybrid joined" specifically means it's joined to both AD and Entra. "Registered" specifically means BYOD or personal.

🚨 **Trap on the exam:** A device cannot be "Entra registered" *and* "Entra joined" simultaneously. It's one or the other. Hybrid joined is its own third state, not a combination.

---

## 🌐 Cloud-Only vs Hybrid Join, When to Pick Which

This is one of the highest-frequency MD-102 scenario questions. Memorize the decision:

| Requirement | Hybrid Join | Cloud-Only (Entra Joined) |
|------------|------------|---------------------------|
| Legacy LOB apps requiring Kerberos | ✅ Native | ⚠️ Needs Entra Kerberos / Azure AD Kerberos for FIDO2 |
| GPO inheritance from existing AD | ✅ Yes | ❌ Use Intune configuration profiles |
| Conditional Access | ✅ Yes | ✅ Yes |
| Windows Hello for Business | ✅ Yes | ✅ Yes |
| Autopilot self-deploying mode | ⚠️ Limited | ✅ Yes |
| Internet-only devices (no VPN, no DC line-of-sight) | ❌ Trouble | ✅ Native |
| OneDrive Known Folder Move | ✅ Yes | ✅ Yes |
| File-server SMB shares requiring AD auth | ✅ Yes | ⚠️ Needs Entra Domain Services or Azure Files with Entra Kerberos |
| Complexity / failure modes | High (sync, ADFS, certificate auth) | Low |

🔥 **Default answer:** *If the device has no legacy AD-bound dependency, choose Entra joined (cloud-only).* This is Microsoft's recommended posture as of 2024 and the answer to ~80% of greenfield questions on MD-102.

---

## 📱 BYOD Strategies, MDM vs MAM vs MAM-WE

**Personal devices accessing work data** is a separate problem from corporate-owned devices. You have three patterns:

| Pattern | What gets installed | User experience | Control | When to pick |
|---------|---------------------|-----------------|---------|--------------|
| **Full MDM enrollment** | Company Portal + work profile (Android) or full device control (iOS Supervised, macOS) | User accepts the MDM enrollment; you can wipe the whole device | Highest, full device | Corporate-issued only |
| **MAM with enrollment (MAM-WE)** | Apps protected, *plus* device enrolled (Android work profile, iOS user-enrolled) | User registers device but you only control the work apps + work data | Medium, work apps + container | Some corporate, some choice |
| **MAM without enrollment (no device record)** | Only the app protection policy no device record at all | User opens Outlook on personal phone, signs in with work account, APP applies | Low only the data inside protected apps | True BYOD, "I will not enroll my phone" users |

**MAM-WE** specifically = "MAM with enrollment", a hybrid where the device is enrolled but only the work container is managed. Common on iOS user enrollment and Android work profile.

🎯 **Exam tip:** When the question says "personally owned device, employee refuses MDM enrollment, must still allow corporate email access", the answer is **MAM without enrollment + app protection policy** on Outlook Mobile.

---

## 🛡️ Zero Trust, The Strategic Backbone

Microsoft's modern endpoint strategy is built on three Zero Trust principles. Memorize the bullet-point form:

1. **Verify explicitly.** Always authenticate and authorize based on every available data point, user identity, location, device health, service, data classification, anomalies.
2. **Use least-privilege access.** Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA), risk-based adaptive policies, and data protection.
3. **Assume breach.** Minimize blast radius and segment access. Verify end-to-end encryption. Use analytics to get visibility, drive threat detection, and improve defenses.

MD-102's whole compliance + Conditional Access + Defender chain is the implementation of those three sentences. Every time you build a CA policy you are operationalizing "verify explicitly." Every time you set device compliance you are operationalizing "assume breach, don't trust an unmanaged device."

🔥 **MEMORIZE:** When the question stem mentions Zero Trust, the right answer almost always involves **Conditional Access + device compliance + identity protection (risk-based) + least-privilege role assignment**. Anything that grants blanket trust ("allow all corporate-network IPs") is wrong.

---

## 🏢 Windows-as-a-Service (WaaS), What Changed

Before 2015, Microsoft shipped Windows every 3–5 years with monthly security patches in between. Today:

| Update type | Cadence | Size | Servicing window |
|-------------|---------|------|------------------|
| **Quality updates** | Monthly (second Tuesday) | Small, cumulative security fixes | Until next feature update + 30 days |
| **Feature updates** | Annually (typically September/October) | Large, full OS version uplift | 24 months Home/Pro, 36 months Enterprise/Education |
| **Driver updates** | As released by OEM via Windows Update | Variable | Managed separately as of WUfB 2023+ |
| **Servicing stack updates (SSU)** | Bundled with monthly LCU since 2020 | Small | Required before LCU can install |

🚨 **Trap on the exam:** "Windows 11 has no version numbers" is FALSE. The cadence is annual (24H2 = 2024 H2 release). The exam loves to ask which servicing channel applies to which SKU.

---

## 🏗️ The Microsoft 365 Endpoint Stack, What Plugs Into What

```
                  ┌─────────────────────────────────────┐
                  │   Microsoft Entra ID  (identity)    │
                  │   - Users, groups, devices          │
                  │   - Conditional Access              │
                  │   - Identity Protection (P2)        │
                  └────────────────┬────────────────────┘
                                   │  (signals)
                  ┌────────────────▼────────────────────┐
                  │   Microsoft Intune  (MDM/MAM)       │
                  │   - Enrollment, policies, apps      │
                  │   - Compliance evaluation           │
                  │   - Endpoint analytics              │
                  └────────────────┬────────────────────┘
                                   │  (telemetry + actions)
       ┌───────────────────────────┼───────────────────────────┐
       │                           │                           │
┌──────▼────────┐  ┌───────────────▼─────────────┐  ┌──────────▼────────┐
│  Microsoft    │  │ Windows Update for Business │  │  Microsoft        │
│  Defender for │  │  - Rings, deferrals         │  │  Configuration    │
│  Endpoint     │  │  - Expedited updates        │  │  Manager (opt.    │
│  - EDR, ASR   │  │  - Delivery Optimization    │  │   for hybrid)     │
└───────────────┘  └─────────────────────────────┘  └───────────────────┘
```

Every box on this diagram is a separate module in this course. Memorize the wiring, the exam asks integration questions ("how does Defender notify Intune of a compromised device?" = via the **Compliance Connector** + a device-risk compliance setting).

---

## 🔐 Identity-Centric vs Network-Centric Security

The single biggest mental shift in modern endpoint management is moving from **"is this device on the corporate LAN?"** to **"is this user, on this device, with this risk score, trying this action?"**

| Old model | Modern model |
|-----------|--------------|
| Trust devices inside the firewall | Trust no device by default, verify every request |
| VPN as primary access control | Conditional Access + device compliance |
| Static AD group → static GPO | Dynamic Entra group → adaptive policy |
| Annual password rotation | Passwordless (WHfB, FIDO2, Passkey) + Identity Protection |
| Image once, drift forever | Continuous compliance + Endpoint analytics + auto-remediation |

🎯 **Exam tip:** The phrase "the office network" or "corporate IP range" in a question stem usually telegraphs an *old* answer. Modern answers don't depend on network location.

---

## ⚙️ Co-Management, The Honest Bridge

Most enterprises with 5+ years of ConfigMgr investment can't (and shouldn't) switch overnight. **Co-management** is Microsoft's bridge: a Windows device managed by **both** Configuration Manager and Microsoft Intune simultaneously, with each workload (compliance policies, Windows updates, endpoint protection, etc.) toggled between the two over time.

| Workload (sliders) | Why move to Intune first |
|--------------------|-------------------------|
| Compliance policies | Quick win, low risk |
| Windows Update policies | Needed for cloud-only future |
| Resource access policies | Wi-Fi/VPN/cert profiles |
| Endpoint Protection | Defender alignment |
| Device configuration | Settings catalog parity |
| Office Click-to-Run apps | Easier MDM channel |
| Client apps | Hardest, Win32 packaging matures slowly |

🔥 **MEMORIZE:** The co-management slider workloads are tested. There are seven workloads. Sliders are *per workload* and can be set to ConfigMgr, Intune, or Pilot Intune.

---

## 🧑‍💻 Personas and Decision Defaults

Maria from the story doesn't decide every endpoint case from first principles. Mature shops codify per-persona defaults:

| Persona | Device | Join state | Mgmt | Default apps |
|---------|--------|-----------|------|--------------|
| **Knowledge worker** (HQ, day-to-day) | Corporate laptop | Entra joined | Intune + Defender | M365 Apps, Teams, line-of-business |
| **Field sales** (travels, often offline) | Corporate laptop | Entra joined | Intune + Defender + offline policies | CRM, M365 Apps |
| **R&D / engineer** (high-spec, admin needs) | Corporate workstation | Entra joined | Intune + EPM (Plan 2) | Dev tools, M365 |
| **Frontline worker** (kiosk, shared) | Corporate tablet | Entra joined (self-deploying) | Intune kiosk mode | Single app or limited multi-app |
| **Executive** (multiple devices, white-glove) | Corp laptop + personal phone | Entra joined (laptop) + Entra registered (phone) | Intune (laptop) + MAM-WE (phone) | Full M365 + Outlook Mobile |
| **Contractor / vendor** (limited time) | Their own device | Entra registered or guest | MAM without enrollment | Outlook + Teams only |
| **BYOD employee** (cost-conscious org) | Their own phone | Entra registered | MAM without enrollment | Outlook + Teams + Edge |

🎯 **Exam tip:** When scenarios specify a persona ("a sales rep who travels weekly and rarely visits the office"), pick the answer that matches the persona's *constraints*, not the technically possible answer.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Domain join is required for Conditional Access" | ❌ CA works on Entra-registered, Entra-joined, and hybrid-joined alike |
| "BYOD always requires full enrollment" | ❌ MAM without enrollment is a valid, well-supported pattern |
| "Hybrid joined and Entra joined are the same" | ❌ They are different states with different join flows and capabilities |
| "Intune replaces Configuration Manager" | ⚠️ Co-management exists for the in-between years, you may run both |
| "Group Policy doesn't work on Entra-joined devices" | ⚠️ True for *AD* GPOs, but Intune's Settings Catalog covers most GPO equivalents |
| "Zero Trust means deny everything" | ❌ Zero Trust means *verify* everything, then grant least privilege |
| "Windows 11 is just a name change from Windows 10" | ❌ Different system requirements (TPM 2.0, Secure Boot, supported CPU list) |

---

## 🧪 Task-Sequencing Practice: Pick a Join State for a New Customer

**Northwind buys ContosoBio (200 staff, all-AD environment, on-prem Exchange retiring in 6 months). Order the steps to pick the right join strategy.**

The correct sequence:

1. ✅ **Inventory legacy dependencies**, what AD-bound apps, file shares, certificate auth flows exist?
2. ✅ **Score each dependency** as (a) replaceable with cloud equivalent, (b) requires Entra Kerberos, or (c) requires AD line-of-sight.
3. ✅ **If category (c) is empty**, plan for full Entra-joined cloud-only.
4. ✅ **If category (c) is non-empty but small**, plan hybrid join for the duration of those dependencies, with a migration timeline.
5. ✅ **For BYOD personas**, layer MAM without enrollment on top, independent of join strategy.
6. ✅ **Document the persona → join-state matrix** and present to security/IT leadership before implementation.
7. ✅ **Pilot with one persona** (typically knowledge workers in IT) before rolling broadly.

⚠️ Skipping step 1 = you'll discover a Kerberos-only LOB app halfway through migration and have to retrofit. Skipping step 7 = you'll find a compliance edge case in production.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Microsoft Entra ID** | Microsoft's cloud identity service (formerly Azure AD), the identity backbone for all M365 |
| **Entra registered** | A personal device that has a corporate identity attached, BYOD |
| **Entra joined** | A corporate device that is joined to Entra ID directly, cloud-only |
| **Entra hybrid joined** | A device joined to both on-prem AD and Entra ID simultaneously |
| **MDM** | Mobile Device Management, full enrollment, full control |
| **MAM** | Mobile Application Management, protect data inside specific apps |
| **MAM-WE** | MAM With Enrollment, device enrolled, only work apps managed (e.g., Android work profile) |
| **Conditional Access (CA)** | Entra ID policy engine that evaluates signals and grants/blocks access |
| **Compliance policy** | Intune policy that evaluates a device and returns Compliant or NonCompliant |
| **Co-management** | A device managed by both Configuration Manager and Intune simultaneously |
| **PRT (Primary Refresh Token)** | The SSO token issued to an Entra-joined Windows session |
| **WAM (Web Account Manager)** | Windows component that brokers Entra tokens to apps |
| **Zero Trust** | Security model: verify explicitly, least privilege, assume breach |
| **WaaS** | Windows-as-a-Service, continuous quality + annual feature update model |
| **Persona** | A user archetype used to standardize device, join, and policy decisions |

---

## ✅ Module 1 Summary

You now know:

- 🌐 The four endpoint eras (traditional → hybrid → modern → cloud-native) and which the exam considers "right"
- 🪪 The three Entra device join states (registered, joined, hybrid joined) and when each fits
- 📱 BYOD patterns, MDM, MAM-WE, MAM without enrollment
- 🛡️ The three Zero Trust principles and how MD-102 operationalizes each
- 🏗️ How Entra ID, Intune, Defender for Endpoint, and WUfB plug together
- ⚙️ Co-management as the honest bridge from ConfigMgr to Intune
- 🧑‍💻 Persona-based defaults for join state and management mode
- ⚠️ The 7 most common traps at this strategic layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Windows 11 Deployment & Imaging](../Module-02-Windows-11-Deployment/Reading.md)

---

## 📊 Case Study, Maersk Recovers From NotPetya (2017–2024)

**Situation.** On June 27, 2017, the NotPetya wiper-malware attack hit A.P. Moller-Maersk, the world's largest container shipping company. NotPetya spread through a poisoned Ukrainian accounting-software update and detonated globally in under 7 minutes. Maersk lost virtually its entire **Active Directory** infrastructure, 49,000+ endpoints and approximately 4,000 servers across 600 sites worldwide were rendered unbootable. The company famously survived only because a single domain controller in Ghana had been offline (power outage) at the moment of detonation and held the last clean copy of AD. Recovery took ten days of round-the-clock work and cost Maersk an estimated $300M.

**Decision.** In the years after NotPetya, Maersk publicly committed to a cloud-first endpoint posture (multiple Microsoft customer stories, BlackHat 2019 talk by Andy Powell, Maersk CISO):

1. Move all corporate identity to Microsoft Entra ID, with on-prem AD relegated to legacy server-side workloads only.
2. Move all endpoints to **Entra-joined (cloud-only)** management via Microsoft Intune. Phase out hybrid join where the only justification was "we've always done it."
3. Adopt Conditional Access + Identity Protection (Entra P2) as the access-control plane, replacing network-based trust.
4. Standardize on Microsoft Defender for Endpoint Plan 2 with EDR in block mode across the entire fleet.
5. Adopt the Microsoft "Zero Trust" reference architecture published in 2020 as the explicit strategic framework.

**Outcome.** By 2024 Maersk reported (multiple public talks and Microsoft case studies, e.g., Microsoft Customer Stories, *A.P. Moller, Maersk*, 2022 and 2024 updates):

- **Mean time to provision a new device** dropped from "days" (ship to regional IT, image, ship to user) to "under 30 minutes" (Autopilot direct-ship).
- **Endpoint recovery RTO** for a hypothetical NotPetya-equivalent dropped from "weeks" to "hours", devices can be wiped and re-Autopiloted at scale without an AD dependency.
- **Active Directory blast radius** materially reduced, the systems that AD failure used to take down are now mostly Entra-joined.
- **Security signal coverage** across the fleet rose from estimated 40% (legacy AV) to >99% (Defender for Endpoint Plan 2 on every device).
- **Maersk became a published Microsoft reference customer** for cloud-only endpoint management, frequently cited in Microsoft Ignite keynotes.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* MD-102 weighs cloud-managed Intune-only Windows 11 so heavily and *de-emphasizes* hybrid join. The unstated assumption behind every modern MD-102 question is that AD is a liability to be retired, not an asset to be preserved. When you see "the customer wants resilient endpoint management that survives an AD outage", the modern answer is **Entra-joined + Intune + Conditional Access + Defender for Endpoint**, not "rebuild AD with better backups." The Maersk story is why.

**Discussion (Socratic).**
- **Q1.** Maersk's recovery was made possible by an offline DC in Ghana. Argue both sides: should an enterprise *deliberately* keep one offline DC for ransomware insurance, or does that defeat the cloud-first move? What does each choice say about the organization's threat model?
- **Q2.** Maersk's cloud-only plan still required keeping AD for "legacy server-side workloads." Microsoft Entra Domain Services would let them retire AD entirely. When is paying for Entra DS the right answer vs. keeping a minimal on-prem AD? Build the case for both based on cost, operational burden, and security blast radius.
- **Q3.** Maersk standardized on Conditional Access as the access-control plane. A skeptical CFO asks: "Why pay for Entra ID P2 when the cheaper P1 has Conditional Access?" Defend the P2 spend by naming the three P2-only features that matter most after a NotPetya-class event (hint: think about post-breach detection, privileged-access governance, and risk-based response).

---

> **Where this leads.**
> - Inside this course: Module 2 builds the Windows 11 deployment mechanics that operationalize the cloud-first strategy from this module; Module 3 introduces Intune as the management plane; Modules 4–8 are the policy, app, security, update, and monitoring layers on top.
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) goes deep on Entra ID identity primitives that we'll lean on; [`05-Azure-Fundamentals` Module 2](../../05-Azure-Fundamentals/Module-02-Azure-Architecture/Reading.md) covers Conditional Access at AZ-900 depth.
> - Practice: Practice Exam 1 has roughly 6–8 questions from this module (join states, BYOD patterns, Zero Trust principles, co-management). Final Mock Exam revisits with case-study synthesis.

---

## 💬 Discussion, Socratic prompts

1. **Cloud-only vs hybrid for a regulated industry.** A US bank with on-prem AD, 30,000 endpoints, and FFIEC examiners asks whether they should go cloud-only. Argue both sides, the cloud-only case (Maersk-style resilience, modern attack-surface reduction) and the hybrid case (regulatory comfort with on-prem identity, existing investments). Where would *you* land for the bank, and what's the one piece of evidence that would change your mind?
2. **MAM-WE vs MAM-only for BYOD.** A 4,000-person consulting firm wants to support BYOD on iPhone. The CISO insists on MAM-WE (with enrollment) for "auditability"; the privacy office insists on MAM-only ("we cannot enroll personally owned devices"). Defend the policy *you* would write, and identify the one technical capability that disappears if you go MAM-only that the CISO will miss.
3. **Personas vs case-by-case.** Some shops codify personas (knowledge worker, field sales, frontline, executive, contractor, BYOD); others say personas are bureaucratic and decide per-team. At what org size does the persona model start to pay for itself? What's the failure mode when you don't have personas?
4. **Co-management workload moves.** A 12,000-endpoint shop has all seven co-management workloads on the ConfigMgr side. Which workload do you move to Intune first, and why? Which last? Defend your sequencing with reference to risk, training cost, and feature parity.
5. **Zero Trust and user friction.** Verify-explicitly maximalism means users see more MFA prompts. Where is the right balance between security and friction for (a) a hospital, (b) a software company, and (c) a defense contractor? Identify the one Conditional Access lever that most affects this trade-off.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn, Plan for a cloud-only Windows endpoint](https://learn.microsoft.com/mem/intune/fundamentals/cloud-only-deployment) (Microsoft, current revision)
- 📖 [Microsoft Zero Trust deployment guide](https://learn.microsoft.com/security/zero-trust/), the canonical reference
- 📖 [Microsoft Entra ID device identity overview](https://learn.microsoft.com/entra/identity/devices/overview)
- 📖 [Co-management for Windows devices](https://learn.microsoft.com/mem/configmgr/comanage/overview)
- 📖 Andy Powell (Maersk), *Lessons from NotPetya*, BlackHat USA 2019 keynote video archive
- 📖 Microsoft *Cloud Adoption Framework Manage methodology* (Microsoft, ongoing; checked 2026-05) endpoint mgmt fits the "Manage" pillar
- 📖 Forrester *Zero Trust eXtended Ecosystem (ZTX)* report (most recent annual edition), the analyst framework Microsoft references
