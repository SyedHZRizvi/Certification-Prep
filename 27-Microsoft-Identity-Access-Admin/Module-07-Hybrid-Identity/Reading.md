# Module 7: Hybrid Identity with Entra Connect / Cloud Sync 🌉

> **Why this module matters:** "We're all cloud now" is the most-said and most-wrong statement in identity. Microsoft's own data (Ignite 2024) says ~75% of M365 tenants still synchronize from on-prem Active Directory. The hybrid layer is where most production breaches actually happen, on-prem AD privileges flow into the cloud, federation pushes auth out of Microsoft's signal-rich environment, and a single misconfigured Entra Connect agent can sync 20,000 users into a state that locks them all out. SC-300 dedicates an entire domain block to hybrid because exam writers know "all cloud" is a fantasy for most candidates' real-world tenants.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Tenant + license tier basics, [Module 1](../Module-01-Entra-ID-Fundamentals/Reading.md).
> - User-and-group taxonomy + the `synced` user attribute, [Module 2](../Module-02-Users-Groups/Reading.md).
> - Authentication methods and the cloud auth signal model, [Module 3](../Module-03-Authentication/Reading.md).
> - On-prem Active Directory at a conceptual level (forests, domains, OUs, GPOs). [`09-CompTIA-Security-Plus` Module 3](../../09-CompTIA-Security-Plus/Module-03-Identity-Access-Management/Reading.md) provides intro context.

---

## 🪪 A Story: The Sync Outage That Took 4 Hours To Diagnose

It's a Tuesday morning. A 12,000-employee manufacturing company's overnight Entra Connect sync ran "successfully" at 2:47 AM (per the dashboard). At 7:30 AM, 4,200 users in the German subsidiary report they can't sign in to Microsoft 365. At 7:45 AM, the on-call admin (in Seattle, 7 hours behind) wakes up to a flood of pages. The portal shows no Conditional Access policy fired. Identity Protection shows nothing. The sign-in logs show `AADSTS50053, Account is locked`. Across 4,200 users simultaneously.

The cause: the previous day, an on-prem AD admin added a new OU for the German subsidiary and changed the OU filtering scope in Entra Connect's Configuration Wizard to "include" it, but did so incorrectly, which silently *removed* 4,200 existing users from sync scope. The next sync ran, saw the users were no longer in scope, and marked them as "deleted" in the cloud. Cloud accounts were soft-deleted. Sign-in returned "account locked" until the soft-delete window expired (30 days), then the accounts would be permanently lost.

The fix: roll back the OU filter in Entra Connect, run a full sync (~50 minutes for 12K users), restore the soft-deleted accounts via PowerShell, write a post-mortem. Total downtime: 4 hours 17 minutes. Total ticket count: 4,200+. The company implemented two changes the next week: (1) all Entra Connect / Cloud Sync config changes require a peer review + staging-server validation, and (2) migrated from Entra Connect to **Entra Cloud Sync** (the modern, lighter-weight, less-error-prone agent) over the next quarter.

This module teaches both products, when to choose each, and how to not be that on-call admin.

---

## 🌉 The Hybrid Landscape

| Component | Role |
|-----------|------|
| **On-premises Active Directory (AD DS)** | Source of truth for identities (users, groups, computers) for many enterprises |
| **Microsoft Entra Connect (legacy)** | Full-featured Windows Server agent that syncs AD → Entra; supports complex topologies |
| **Microsoft Entra Cloud Sync (modern)** | Lightweight agent + cloud-side config; simpler topologies, faster install, less feature-rich |
| **Active Directory Federation Services (AD FS)** | On-prem federation server; handles authentication for federated domains |
| **Microsoft Entra ID** | Cloud identity service that consumes the synced + federated identities |

🔥 **MEMORIZE:** Two sync products: **Entra Connect** (full-featured, legacy direction) and **Entra Cloud Sync** (modern, recommended for new deployments unless you need a feature only Connect supports).

---

## ⚖️ Entra Connect vs Cloud Sync

| Feature | **Entra Connect (Sync)** | **Entra Cloud Sync** |
|---------|--------------------------|----------------------|
| Agent install | Windows Server (heavy install) | Lightweight Windows Server agent |
| Topology | Single-forest, multi-forest (with trust), staging mode | Multi-forest **WITHOUT** trust between forests; simpler |
| Config | On-prem (Sync Service Manager) | Cloud (Entra portal); centrally managed |
| OU filtering | ✅ | ✅ (per-scoping filter) |
| Attribute filtering | ✅ (full) | ✅ (limited subset) |
| **Password hash sync (PHS)** | ✅ | ✅ |
| **Pass-through authentication (PTA)** | ✅ | ❌ Not supported |
| **Federation** | ✅ (AD FS) | ❌ Not supported |
| **Seamless SSO** | ✅ | ✅ |
| **Group write-back** | ✅ | ❌ Not supported |
| **Device write-back** | ✅ (legacy) | ❌ Not supported |
| **Password write-back** | ✅ | ✅ |
| **Attribute write-back** | ✅ (e.g. M365 attributes back to AD) | Limited |
| **Hybrid Entra Join** | ✅ | ✅ (requires extra config) |
| **Failover** | Staging server | Multi-agent (active/active) |
| **Microsoft direction in 2026** | Maintenance mode | RECOMMENDED for new deployments |

🚨 **Exam trap:** "We need federation with our on-prem AD FS" → only **Entra Connect** supports federation. "We need pass-through auth (PTA)" → only **Entra Connect**. "Modern, simpler, multi-agent" → **Cloud Sync**.

---

## 🔐 Three Authentication Topologies for Hybrid

Microsoft supports three ways to authenticate hybrid users:

| Topology | What it is | Where the password lives |
|----------|------------|--------------------------|
| **Password Hash Sync (PHS)** | Entra Connect syncs a hash of the user's AD password (technically: a hash of the NTLM hash, salted, iterated 1,000 times) to Entra | Hash in Entra (cannot be reversed) |
| **Pass-Through Authentication (PTA)** | Entra forwards the password to an on-prem PTA agent which validates against AD | Password never leaves on-prem |
| **Federation (AD FS or third-party)** | Entra hands off auth to an on-prem AD FS (or third-party) IdP; AD FS authenticates against AD and issues a SAML/WS-Fed token | Password never leaves on-prem |

### Recommendation matrix (2026)

| If your org... | Use |
|----------------|-----|
| Wants the simplest, cloud-native auth | **PHS** + Seamless SSO |
| Has policy preventing password hash sync to cloud | **PTA** + Seamless SSO |
| Needs claims-based auth, smart cards via AD FS, or third-party IdP federation | **Federation** (but evaluate Entra-native CBA from Module 3 instead) |

🔥 **MEMORIZE:** Microsoft's preferred topology in 2026 is **PHS + Seamless SSO**. Federation is being deprecated for greenfield. Federation customers are being migrated to PHS for richer Entra signal in Identity Protection.

### PHS in detail

1. User changes their AD password.
2. Within 2 minutes (typically), Entra Connect / Cloud Sync detects the change.
3. The change is hashed (hash-of-hash, salted, 1,000 iterations of HMAC-SHA256).
4. The hash is sent to Entra over HTTPS.
5. When the user signs in to a cloud app, Entra validates against the hash.

🎯 **Exam tip:** PHS is a **disaster recovery** feature even if you use Federation as your primary topology. Microsoft strongly recommends enabling PHS as a backup, if AD FS goes down, users can still sign in via cloud auth.

### PTA in detail

1. PTA agent installed on a domain-joined Windows Server (recommended: 3+ for HA).
2. Agent maintains a persistent outbound TLS connection to Entra (no inbound ports needed).
3. User enters password on Entra sign-in page.
4. Entra forwards the request to one of the PTA agents.
5. Agent validates against AD via standard Windows authentication.
6. Result is returned to Entra; user signs in.

🚨 **PTA trap:** Requires ≥3 agents for HA (one for normal load + redundancy). Single-agent PTA is a single point of failure for **all** user sign-ins.

---

## 🚪 Seamless SSO (Desktop SSO)

**Seamless SSO** silently signs corporate-network users into Entra-integrated apps using **Kerberos**. No UPN re-entry, no MFA bypass (CA still applies; MFA still triggers per CA policy).

| Spec | Detail |
|------|--------|
| Protocol | Kerberos (against a computer account named `AZUREADSSOACC` in AD) |
| Trigger | When user is on a domain-joined or Hybrid-joined device on the corporate network |
| Requires | Browser SPN config (auto-applied via GPO) |
| Works with | PHS and PTA (NOT Federation, federation handles SSO natively) |

🎯 **Exam tip:** The `AZUREADSSOACC$` computer account uses a 30-character random password by default. **Rotate the password every 30 days** (Microsoft recommendation), there's a PowerShell cmdlet to do it.

---

## 🔄 Filtering: OU and Attribute

### OU filtering (the most common)

Pick which Active Directory OUs sync to Entra. Default = all OUs. Most orgs scope down to a "Sync" OU and put users/groups intended for cloud sync inside it.

```
Entra Connect Configuration Wizard → Domain and OU filtering → 
  ✓ DC=contoso,DC=com
    ✓ OU=Sync
      ✓ OU=Employees
      ✓ OU=Service Accounts
    ✗ OU=Test (excluded)
    ✗ OU=Decommissioned (excluded)
```

🚨 **Exam trap:** Changing OU scope to EXCLUDE an OU that previously included users → those users get marked deleted in Entra. They go to soft-delete (30-day window). If you don't catch it in time, accounts are permanently lost.

### Attribute filtering

Limit which AD attributes sync to Entra. Default = a Microsoft-published set (UPN, displayName, mail, etc.). You can:

- Exclude attributes you don't want in the cloud (e.g. `extensionAttribute7` containing salary).
- Add custom attributes via **directory extensions**.

---

## ✍️ Write-Back Features (Entra Connect Only)

Sync isn't always one-way. Entra Connect supports four write-back scenarios:

| Write-back | What it does |
|------------|--------------|
| **Password write-back** | User changes password via SSPR → flows back to AD |
| **Group write-back** | M365 groups in Entra → become security groups in on-prem AD |
| **Device write-back** | Entra-joined devices → registered in on-prem AD (legacy; replaced by Hybrid Entra Join) |
| **Attribute write-back** | M365 attributes (e.g. proxyAddresses) → back to AD |

🔥 **MEMORIZE:** **Cloud Sync supports PASSWORD write-back only.** All other write-back is Entra Connect exclusive.

---

## 🖥️ Hybrid Entra Join (HEJ)

A **Hybrid Entra Joined** device is **both** on-prem AD-joined **and** registered in Entra ID. Lets you apply Conditional Access (cloud) + Intune MDM on devices that are still managed by traditional AD + GPO.

### Path to Hybrid Entra Join

| For | Steps |
|-----|-------|
| **Windows 10/11** | 1. Domain-join to AD (existing). 2. Entra Connect / Cloud Sync configured to register devices. 3. GPO or Intune triggers Entra registration. 4. Device appears in Entra Devices blade with "Hybrid Entra joined" status. |
| **Server (Windows Server 2016+)** | Same flow; less common but supported. |

### Why HEJ matters

- **Conditional Access** can require "Hybrid Entra Joined", only devices managed by AD + registered to Entra can sign in.
- **Intune MDM** can co-manage with Configuration Manager (CCMS hybrid).
- **Single sign-on** to cloud apps using existing AD credentials.

🚨 **Exam trap:** HEJ is **not the same** as "Entra joined" (pure cloud device with no on-prem AD relationship). Entra joined = cloud-only; HEJ = both worlds.

---

## 📊 Sync Monitoring

| Tool | What it shows |
|------|---------------|
| **Entra Connect Health** | Browser portal for Connect Sync + AD FS health, sync errors, alerts |
| **Synchronization Service Manager** (on-prem) | Local UI on Connect server for run profiles + sync history |
| **Provisioning logs** (Entra portal) | Cloud Sync provisioning events |
| **PowerShell** | `Get-ADSyncConnectorRunStatus`, `Get-ADSyncScheduler` |

🎯 **Exam tip:** **Entra Connect Health** requires Entra ID P1 for advanced monitoring (sync errors are free; alerts + agent monitoring require P1).

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Cloud Sync supports federation" | ❌ Not supported. Use Entra Connect. |
| "Cloud Sync supports PTA" | ❌ Not supported. Use Entra Connect. |
| "Cloud Sync = full feature parity with Connect" | ❌ Subset of features. Connect has group/device write-back, PTA, federation. |
| "PHS sends the actual password" | ❌ Sends a hash of a hash, salted, iterated 1,000 times |
| "Federation is recommended for new deployments" | ❌ PHS + Seamless SSO is recommended; federation being deprecated |
| "Seamless SSO bypasses MFA" | ❌ CA + MFA still apply on top |
| "Only Entra Connect supports password write-back" | ❌ Cloud Sync also supports password write-back |
| "PTA requires only one agent" | ❌ Microsoft recommends ≥3 agents for HA |
| "Changing OU filter is risk-free" | ❌ Removing users from sync scope = soft-delete + permanent loss after 30 days |
| "Hybrid Entra Join = Entra Joined" | ❌ Different, HEJ is both worlds; Entra Joined is cloud-only |

---

## 🧪 Task-Sequencing Practice: Migrate From Entra Connect To Cloud Sync

**Order these steps correctly to migrate a mid-sized org from legacy Entra Connect to modern Cloud Sync.**

The correct order:

1. ✅ **Inventory current Entra Connect setup**: which features are in use (PTA? Federation? group write-back? device write-back?)
2. ✅ **Identify blockers**: if any features unique to Connect are in use, decide to (a) eliminate them or (b) stay on Connect.
3. ✅ **Install Cloud Sync agent** on 2+ Windows Servers (HA).
4. ✅ **Configure Cloud Sync scope** to match Entra Connect's current OU/attribute filter, staging mode.
5. ✅ **Run a test sync** in staging mode; compare results to Entra Connect's expected state.
6. ✅ **Update Entra Connect to staging mode** (stops it from exporting to Entra).
7. ✅ **Switch Cloud Sync to active** (becomes the sole writer to Entra).
8. ✅ **Monitor for 1 week**, sign-in logs, provisioning logs, user reports.
9. ✅ **Decommission Entra Connect server** after stability confirmed.
10. ✅ **Document the new topology** + update runbooks.

⚠️ Skipping step 6 (putting Connect in staging) before step 7 = both products writing to Entra → conflicting changes, data corruption.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Microsoft Entra Connect (Sync)** | Legacy heavy-weight Windows Server sync product |
| **Microsoft Entra Cloud Sync** | Modern lightweight agent + cloud config sync product |
| **Password Hash Sync (PHS)** | Hash-of-hash of AD password synced to Entra (cloud auth) |
| **Pass-Through Authentication (PTA)** | Entra forwards password to on-prem agent for validation |
| **Federation** | Entra hands auth to on-prem IdP (AD FS); deprecated direction |
| **Seamless SSO** | Kerberos-based silent sign-in on corporate-network devices |
| **AZUREADSSOACC** | Computer account in AD used by Seamless SSO |
| **OU filtering** | Pick which on-prem OUs sync to Entra |
| **Attribute filtering** | Pick which AD attributes sync to Entra |
| **Directory extensions** | Custom AD attributes synced into Entra |
| **Password write-back** | SSPR-changed password flows back to AD (Connect + Cloud Sync) |
| **Group write-back** | M365 group → on-prem AD security group (Connect only) |
| **Attribute write-back** | M365 attribute → back to AD (Connect only) |
| **Hybrid Entra Join (HEJ)** | Device is AD-joined AND Entra-registered |
| **Entra Joined** | Device is cloud-only (no AD) |
| **Staging mode** | Connect server receives changes but doesn't export, used for HA + migration |
| **Entra Connect Health** | Monitoring portal for Connect, PTA agents, AD FS |
| **PTA agent** | On-prem service that validates passwords for PTA |

---

## ✅ Module 7 Summary

You now know:

- 🌉 The hybrid landscape: on-prem AD + Connect/Cloud Sync + Entra
- ⚖️ Entra Connect (full, legacy) vs Cloud Sync (modern, lighter), and which features each supports
- 🔐 Three auth topologies: PHS (recommended), PTA (no hash in cloud), Federation (deprecated)
- 🚪 Seamless SSO + Kerberos + `AZUREADSSOACC$`
- 🔄 OU and attribute filtering, and why misuse causes mass deletion
- ✍️ Four write-back scenarios (Cloud Sync supports password only)
- 🖥️ Hybrid Entra Join vs Entra Joined
- 🚨 The 10 most common traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 8: Monitoring, Reporting & Threat Response](../Module-08-Monitoring-Threats/Reading.md)

---

## 📊 Case Study, Lufthansa Group's AD FS Decommissioning (2022–2024)

**Situation.** Lufthansa Group (~100,000 employees across multiple airlines + maintenance + cargo) ran Microsoft AD FS for nearly a decade as the primary authentication topology for Entra ID. By 2022, AD FS had become a strategic liability: (1) Microsoft was funneling all new Entra capabilities (Conditional Access richness, Identity Protection signals, FIDO2 sign-in) through cloud-auth paths that AD FS bypassed; (2) Lufthansa's AD FS farm required ~12 servers globally + 3 SOC engineers to patch and monitor; (3) the 2022 Log4j vulnerability scare highlighted that on-prem federation servers are high-value targets and create blast-radius across all cloud sign-ins.

**Decision.** Lufthansa publicly described their 18-month migration to PHS + Seamless SSO at Microsoft Ignite 2023 and the IDM 2024 conference:

1. **Enable PHS in parallel** (2022 Q3). PHS as a backup auth method while AD FS remained primary. Tested cloud-auth sign-in on a 500-user pilot.
2. **Migrate domains in waves** (2022 Q4 – 2023 Q3). Per-domain conversion from Federated → Managed (PHS). Used Microsoft's `Set-MgDomainFederationConfiguration` Graph cmdlet (and the equivalent MSOnline cmdlet for older PowerShell). Each wave ran with a 2-week pilot + monitoring + rollback plan.
3. **Decommission AD FS** (2023 Q4 – 2024 Q1). After all domains migrated, retired the AD FS farm.
4. **Adopt CBA for smart-card scenarios** (2024 Q2). The 2,000 employees with smart-card sign-in (pilots, maintenance) migrated from AD FS-based CBA to Entra-native CBA (Module 3 coverage). No federation needed.

**Outcome.** Per Lufthansa's case study (Microsoft customer story, 2024-09):

- **AD FS servers reduced** from 12 to 0 (decommissioned by 2024-Q2).
- **Mean time to detect a sign-in anomaly** dropped from ~hours to ~15 minutes (Identity Protection now has full signal).
- **CA policy effectiveness** improved measurably, pre-migration, CA only saw federated sign-in events for ~20% of attempted controls; post-migration, 100%.
- **Operational cost** reduction of ~€300K/year in patching, licensing, and SOC monitoring of AD FS.
- **Zero auth outages** during the migration (vs ~3 federation-related outages/year previously).

**Lesson for the exam / for practitioners.** Federation was the right answer in 2014. It's the wrong answer in 2026 for most orgs. SC-300 scenarios that mention AD FS will often ask "what should this org migrate to", and the answer is **PHS + Seamless SSO** unless there's a specific blocker. Even when federation is required (e.g. smart card requirements), Entra-native CBA replaces AD FS for that use case.

**Discussion (Socratic).**
- **Q1.** Lufthansa kept PHS enabled as a backup even during federation. Microsoft recommends this for all federated tenants. Why is "PHS as DR for federation" the right answer even if you trust your AD FS uptime?
- **Q2.** A common counter-argument: "We have a custom claims rule in AD FS that PHS can't replicate." How would you discover such cases, and what's the migration path? (Hint: Entra's group-based claims + claim transformation policies.)
- **Q3.** Lufthansa migrated in waves. Argue for / against a "big bang" cutover for a 100-person org. What does cutover risk look like at each scale?

---

> **Where this leads.**
> - Inside this course: Module 8 covers monitoring sync, federation health, and on-prem identity threats (Defender for Identity).
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) covers RBAC interaction with synced identities.
> - Practice: Practice Exam 2 has 5–7 questions from this module.

---

## 💬 Discussion, Socratic prompts

1. **Cloud Sync vs Connect in 2026.** For a 5,000-person org with no PTA, no federation, no group write-back requirement, when does Cloud Sync NOT win? Build the case for staying on Entra Connect.
2. **PHS privacy concerns.** Some regulators (specific European DPAs) historically raised concerns about syncing hashed passwords to a US cloud. Microsoft's response: "hash-of-hash, salted, 1,000 iterations, even Microsoft can't recover the password." Is this concern still legitimate in 2026? How do you make the privacy case to a skeptical CISO?
3. **Federation deprecation messaging.** A company has spent 6 figures on its AD FS farm. Microsoft says "move to PHS." How do you make the case internally, what's the cost-of-NOT-migrating in terms of Identity Protection coverage and CA effectiveness?
4. **Hybrid Entra Join scope.** Should every domain-joined device also be HEJ-registered? Build the case for and against universal HEJ adoption, what's the cost when scaled to 50K endpoints?
5. **Multi-forest with no trust.** Cloud Sync explicitly enables multi-forest sync without forest trust. Why is this a major architectural win for M&A scenarios? What does Entra Connect require instead?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Entra Connect overview](https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-azure-ad-connect)
- 📖 [Microsoft Entra Cloud Sync overview](https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync)
- 📖 [Entra Connect vs Cloud Sync comparison](https://learn.microsoft.com/entra/identity/hybrid/cloud-sync/what-is-cloud-sync#comparison-between-microsoft-entra-connect-and-cloud-sync)
- 📖 [Implementing PHS for hybrid identity](https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-phs)
- 📖 [Implementing PTA for hybrid identity](https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-pta)
- 📖 [Seamless SSO setup](https://learn.microsoft.com/entra/identity/hybrid/connect/how-to-connect-sso)
- 📖 [Hybrid Entra Join overview](https://learn.microsoft.com/entra/identity/devices/concept-hybrid-join)
- 📖 [Migrate from federation to cloud auth](https://learn.microsoft.com/entra/identity/hybrid/connect/migrate-from-federation-to-cloud-authentication)
