# Module 4: Identity, Governance & Security 🔐

> **Why this module matters:** The exam treats security as a top-three priority. About 30–35% of management/governance content lives here. The cleanest path to misery on the exam is mixing up **RBAC** (who can do what), **Azure Policy** (what's allowed to exist), and **Locks** (what can't be deleted). This module fixes that — forever.

---

## 🍕 A Story: The Pizza Shop's Master Key

Back to Anna and *PizzaTracker.io*. Now Anna has 25 employees:
- 4 developers (need to deploy code)
- 2 finance people (need to see the bill, NOT change settings)
- 1 ops lead (full control over the production environment)
- The CEO (wants to *look* at dashboards, change nothing)
- A new contractor in another country (1-month access, then revoked)

If Anna gave every employee the same master Azure password, she'd get hacked by Tuesday. If she put everyone in a giant spreadsheet of "who-can-do-what," she'd quit by Friday.

She needs three different tools, each solving a different problem:

| Problem | Azure tool |
|---------|-----------|
| **Who is this person?** | **Microsoft Entra ID** (identity) |
| **What are they allowed to DO?** | **RBAC** (authorization / permissions) |
| **What kinds of resources are even allowed to exist?** | **Azure Policy** (governance / compliance rules) |
| **How do we prevent accidental deletion?** | **Resource Locks** |

Mix these up on the exam and you'll lose 5+ questions. Don't.

---

## 🪪 Microsoft Entra ID (the identity foundation)

**Microsoft Entra ID** is Azure's cloud identity service — formerly called **Azure Active Directory (Azure AD)** until Microsoft renamed it in 2023. The exam uses the new name.

> ⚠️ **Critical exam-update fact:** "Azure AD" = "Microsoft Entra ID". They are the **same product, new name**. If you see "Azure AD" on the exam, it means Entra ID.

### What Entra ID provides

| Capability | What it does |
|------------|--------------|
| **Authentication** | Verify who someone is (password, MFA, passwordless) |
| **Authorization** | Decide what they can access (via RBAC and apps) |
| **Single Sign-On (SSO)** | One login → access to thousands of apps |
| **Multi-Factor Authentication (MFA)** | Require 2+ proofs of identity |
| **Conditional Access** | Policy-based access (only from corporate device, only on weekdays, etc.) |
| **External ID** | Invite external users/customers (B2B and B2C) |
| **Device management** | Register/manage Windows, Mac, iOS, Android |
| **Identity Protection** | Detect risky sign-ins, compromised accounts |

⚠️ **Entra ID is NOT the same as on-premises Active Directory (AD DS).**

| Feature | Microsoft Entra ID | On-prem AD DS |
|---------|-------------------|----------------|
| Where | Cloud (managed by Microsoft) | Your servers |
| Protocols | OAuth, SAML, OpenID Connect | Kerberos, LDAP, NTLM |
| Manages | Users, groups, apps, devices, B2B/B2C | Users, groups, computers (domain join), Group Policy |
| Hierarchy | Flat (groups + roles) | Forests, domains, OUs, GPOs |
| Group Policy | ❌ (use Intune / Endpoint Manager instead) | ✅ |
| Domain join | ❌ traditional / ✅ Entra-joined | ✅ |

🎯 **Exam pattern:** "Sync on-prem AD users to the cloud" → **Microsoft Entra Connect** (formerly Azure AD Connect).

### Entra ID editions / tiers (lighter touch — know the names)

| Edition | Headline |
|---------|----------|
| **Free** | Basic identity, included with Azure subscription |
| **Microsoft Entra ID P1** | Conditional Access, self-service password reset for hybrid, dynamic groups |
| **Microsoft Entra ID P2** | All P1 + Identity Protection + Privileged Identity Management (PIM) |
| **Microsoft Entra ID Governance** | (Add-on) Entitlement management, access reviews, lifecycle workflows |

---

## 🔐 Authentication — MFA, SSO, Passwordless

### Single Sign-On (SSO)
One login → access to many apps. Implemented via SAML, OAuth, or OpenID Connect.

🎯 **Exam pattern:** "Reduce password fatigue across 50 SaaS apps" → **SSO via Entra ID**.

### Multi-Factor Authentication (MFA)
Require ≥ 2 of:
- **Something you know** (password)
- **Something you have** (phone, hardware key, FIDO2 key)
- **Something you are** (biometric — fingerprint, face)

Methods in Azure: Microsoft Authenticator app, SMS, voice call, hardware OATH token, FIDO2 security key, Windows Hello.

### Passwordless
Skip the password entirely:
- **Microsoft Authenticator app** (number match)
- **FIDO2 security keys**
- **Windows Hello for Business** (biometrics + TPM)

🎯 Microsoft's direction: passwordless is preferred over MFA-with-password.

---

## 🛂 Conditional Access — Smart Access Decisions

Conditional Access (CA) is Entra ID's policy engine: **if** these conditions are met, **then** require these controls.

Example policy: *"If a user is signing in from outside the US AND from an unmanaged device AND accessing Microsoft 365, require MFA AND block download."*

Signals it can use:
- User / group
- Application being accessed
- Device state (managed? compliant?)
- Location (IP, country)
- Risk (Identity Protection signals)

Controls it can enforce:
- Grant access (with MFA, terms, compliant device, etc.)
- Block access
- Session controls (limit downloads, force re-auth)

🎯 **Exam pattern:** "Require MFA only when signing in from outside the corporate network" → **Conditional Access** (NOT plain MFA — CA is the policy layer that decides *when* to require MFA).

> Requires **Entra ID P1** or higher.

---

## 🌐 Microsoft Entra External ID (B2B & B2C)

Old names: "Azure AD B2B" and "Azure AD B2C". Now unified as **External ID**.

| Scenario | Entra External ID flavor |
|----------|--------------------------|
| Invite a partner/contractor's existing identity | **External ID for partners (B2B)** |
| Customers sign up for your app (consumer-facing) | **External ID for customers (B2C)** |

🎯 **Exam pattern:** "Invite a vendor's existing Microsoft account to access our SharePoint" → **External ID (B2B collaboration)**.

---

## 🔑 RBAC — Role-Based Access Control

RBAC answers: **WHO can do WHAT on WHICH resources?**

```
PRINCIPAL  ──assigned──>  ROLE  ──scope──>  RESOURCE/RG/SUB/MG
(user, group,             (built-in or       (management group,
 service principal,        custom)             subscription,
 managed identity)                             resource group,
                                                resource)
```

### The 4 built-in **fundamental** roles (memorize)

| Role | Can do |
|------|--------|
| **Owner** | Full access **including** managing access for others |
| **Contributor** | Full management **except** granting access to others |
| **Reader** | View everything, change nothing |
| **User Access Administrator** | Manage access to resources (specifically) |

There are hundreds of more granular built-in roles (e.g., *Virtual Machine Contributor*, *Storage Blob Data Reader*). You can also create **custom roles**.

### Scope inheritance (also a fan favorite)

Permissions assigned at a higher scope **inherit downward**:
```
Management Group → Subscription → Resource Group → Resource
```
Assignment at MG → applies to all subs/RGs/resources beneath.

🎯 **Exam pattern:**
- *"Allow user to view but not change resources in subscription X"* → assign **Reader** at the **subscription** scope.
- *"Allow team to deploy everything except modify access"* → assign **Contributor**.
- *"Give a service permission to read blobs"* → assign **Storage Blob Data Reader** to that service principal/managed identity.

⚠️ **Trap:** Contributor cannot grant access — that requires **Owner** or **User Access Administrator**.

---

## 📜 Azure Policy — Governance / Compliance Rules

Where RBAC asks "**who** can do something?", Azure Policy asks "**what** is allowed to exist?".

Examples of policies:
- "All resources must have a `costCenter` tag"
- "VMs can only be created in `East US` and `West Europe`"
- "Storage accounts must use HTTPS only"
- "All SQL databases must have auditing enabled"

### Policy effects

| Effect | What it does |
|--------|--------------|
| **Deny** | Block resource creation if non-compliant |
| **Audit** | Allow but flag in compliance dashboard |
| **Append** | Add fields (e.g., a tag) to the resource |
| **Modify** | Modify existing resources (with remediation tasks) |
| **DeployIfNotExists** | Auto-deploy related resources if missing (e.g., diagnostic settings) |
| **Disabled** | Policy off |

### Initiatives (a.k.a. Policy Sets)
A bundle of related policies (e.g., "ISO 27001 baseline" initiative bundles dozens of policies).

🎯 **Exam pattern:** "Ensure no one can create resources outside approved regions" → **Azure Policy with a Deny effect** at the management group scope.

⚠️ **Trap:** RBAC ≠ Policy.
- RBAC = "Maya cannot DELETE this VM" (per-identity authorization)
- Policy = "Nobody can CREATE a VM in Brazil South" (per-resource compliance rules)

---

## 🔒 Resource Locks — Stop Accidental Damage

Locks are **subscription/RG/resource-level** safety guards.

| Lock type | Effect |
|-----------|--------|
| **CanNotDelete** | Users can read and modify, but **cannot delete** the resource |
| **ReadOnly** | Users can read, but **cannot delete OR modify** |

Locks apply to **everyone** including Owners (until they remove the lock). Locks live within Resource Manager — they're independent of RBAC.

🎯 **Exam pattern:** "Prevent a critical production database from being deleted, even by Owners" → **CanNotDelete lock**.

⚠️ **Trap:** RBAC restricts permissions per-user. Locks restrict actions for *everyone*. They complement each other.

---

## 🏷️ Tags — Organize and Bill

Tags = key:value labels on resources.

Common uses:
- `Environment: prod`
- `Owner: pizzatracker-team`
- `CostCenter: 1234`
- `Project: holiday-launch`

🎯 **Exam pattern:** "Track costs by department" → apply **Tags** to resources, then use **Cost Management** to filter.

⚠️ **Trap:** Tags **do not** inherit by default — you'll need Azure Policy to enforce tag inheritance from RGs.

---

## 🛡️ Microsoft Defender for Cloud (security posture management)

Formerly **Azure Security Center**. Now part of the **Defender** family.

What it does:
1. **CSPM (Cloud Security Posture Management)** — assesses your security posture against best practices, gives a **Secure Score**
2. **CWPP (Cloud Workload Protection)** — protects servers, databases, containers, storage, etc., from threats (powered by Defender for Servers, Defender for SQL, etc.)
3. Provides regulatory compliance dashboards (PCI-DSS, ISO 27001, NIST CSF, etc.)
4. Recommends fixes for misconfigurations
5. Detects active threats and generates alerts

🎯 **Exam pattern:** "Get a continuously updated picture of our cloud security posture with recommendations" → **Microsoft Defender for Cloud**.

⚠️ **Trap:** "Defender for Cloud" ≠ "Defender for Endpoint" (which is the device EDR product).

---

## 👁️ Microsoft Sentinel — Cloud-Native SIEM/SOAR

**Microsoft Sentinel** is Azure's **SIEM** (Security Information & Event Management) **+ SOAR** (Security Orchestration, Automation & Response).

It ingests logs from anywhere (Azure, AWS, on-prem, M365, third-party) and:
- Correlates events across sources
- Detects threats with built-in and ML analytics
- Runs **playbooks** (automated responses) via Logic Apps
- Provides hunting queries, workbooks, dashboards

🎯 **Exam pattern:** "Centralize security logs from Azure + AWS + on-prem firewalls and automate response" → **Microsoft Sentinel**.

| Service | When |
|---------|------|
| **Defender for Cloud** | Cloud security posture + workload protection |
| **Sentinel** | SIEM/SOAR — collect, correlate, hunt across many sources |

---

## 🧠 Zero Trust Principles

Microsoft's security model:

| Principle | What it means |
|-----------|---------------|
| **Verify explicitly** | Always authenticate and authorize using all available signals |
| **Use least-privilege access** | Just-in-time + just-enough access, risk-based, scoped |
| **Assume breach** | Minimize blast radius; segment; encrypt end-to-end; analyze telemetry |

🎯 Trigger words on exam: "verify each request", "least privilege", "assume breach", "micro-segmentation" → **Zero Trust**.

---

## 🛡️ Defense in Depth (the Layered Model)

Layered security:

```
Physical → Identity & Access → Perimeter → Network → Compute → App → Data
```

The exam loves "which layer would this control fit?" questions.

| Layer | Example Azure control |
|-------|----------------------|
| Physical | Microsoft datacenter security (not your job) |
| Identity & Access | Entra ID, MFA, Conditional Access, RBAC |
| Perimeter | DDoS Protection, Azure Firewall |
| Network | NSGs, Azure Firewall, Private Link |
| Compute | OS patching, antimalware, Defender for Servers |
| Application | WAF (App Gateway / Front Door), secure coding |
| Data | Encryption at rest + in transit, Key Vault, IRM |

---

## 🔐 Azure Key Vault — Secret Storage

Stores and manages:
- **Secrets** (passwords, connection strings)
- **Keys** (encryption keys, signing keys)
- **Certificates** (TLS/SSL)

Backed by HSMs (Hardware Security Modules). Integrates with Managed Identities for keyless access by Azure resources.

🎯 **Exam pattern:** "Store database connection strings securely" → **Key Vault**.

---

## 🛡️ A few more security services to name-drop

| Service | What |
|---------|------|
| **Azure DDoS Protection** | Always-on DDoS mitigation for public endpoints |
| **Azure Bastion** | Browser-based RDP/SSH to VMs without exposing them publicly |
| **Private Endpoint / Private Link** | Bring Azure PaaS services into your private VNet IP space |
| **Microsoft Purview** | Data governance, classification, lineage, sensitivity labels |
| **Compliance Manager (in Service Trust Portal)** | Assess compliance with frameworks |
| **Microsoft 365 Defender** | XDR across endpoints, email, identities, apps |

---

## 🚨 Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Entra ID is just on-prem AD in the cloud" | No — different protocols, different model. Use **Entra Connect** to sync the two. |
| "Contributor can grant access" | No — Contributor can do everything **except** grant access. Need Owner / User Access Administrator. |
| "Azure Policy restricts users" | No — Policy restricts **what resources can exist** / be configured. RBAC restricts *users*. |
| "Locks override RBAC" | They protect AGAINST deletion / modification for everyone, regardless of RBAC. |
| "Defender for Cloud is the SIEM" | No — that's **Sentinel**. Defender for Cloud is posture + workload protection. |
| "MFA is a policy" | MFA is a *control*. **Conditional Access** is the policy engine that decides when to require MFA. |
| "Tags inherit automatically" | They don't — use Policy to enforce inheritance. |
| "Owner = full power to delete locked resources" | No — locks block Owners too until removed. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Microsoft Entra ID** | Azure's cloud identity service (formerly Azure AD) |
| **Entra Connect** | Tool to sync on-prem AD with Entra ID |
| **AD DS** | On-prem Active Directory Domain Services |
| **SSO** | Single Sign-On — one login, many apps |
| **MFA** | Multi-Factor Authentication — 2+ proofs |
| **Conditional Access** | Policy engine that decides when to require what |
| **External ID** | B2B/B2C identity for partners/customers |
| **RBAC** | Who can do what on which scope |
| **Owner / Contributor / Reader / UAA** | Four fundamental built-in roles |
| **Azure Policy** | Rules that control what resources can exist / be configured |
| **Initiative** | A bundle of related policies |
| **Resource Lock** | CanNotDelete or ReadOnly safety guard |
| **Tag** | Key:value label for organization/billing |
| **Defender for Cloud** | Posture + workload protection |
| **Sentinel** | Cloud-native SIEM/SOAR |
| **Zero Trust** | Verify explicitly, least privilege, assume breach |
| **Defense in Depth** | Layered security across physical → data |
| **Key Vault** | Managed store for secrets, keys, certificates |
| **Azure Bastion** | Browser-based RDP/SSH without exposing public IPs |
| **Private Link / Endpoint** | Bring PaaS into your private VNet IP space |
| **DDoS Protection** | Always-on DDoS mitigation |

---

## ✅ Module 4 Summary

You now know:
- 🪪 Microsoft Entra ID (former Azure AD) and its capabilities
- 🔐 SSO, MFA, passwordless, Conditional Access
- 🌐 External ID for B2B/B2C
- 🔑 RBAC: principal + role + scope; the 4 fundamental roles
- 📜 Azure Policy + Initiatives — and how they differ from RBAC
- 🔒 Resource Locks (CanNotDelete vs ReadOnly)
- 🛡️ Defender for Cloud vs Sentinel
- 🧠 Zero Trust and Defense in Depth

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 5: Cost Management & SLAs](../Module-05-Cost-Management-SLAs/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Azure identity, access, and security](https://learn.microsoft.com/training/paths/describe-azure-identity-governance/)
- 📖 [Microsoft Entra ID documentation](https://learn.microsoft.com/entra/fundamentals/)
- 📖 [What is Azure Role-Based Access Control?](https://learn.microsoft.com/azure/role-based-access-control/overview)
- 📖 [Azure Policy overview](https://learn.microsoft.com/azure/governance/policy/overview)
- 📖 [Microsoft Zero Trust guidance](https://learn.microsoft.com/security/zero-trust/)
- 📖 [Microsoft Defender for Cloud](https://learn.microsoft.com/azure/defender-for-cloud/)
- 📖 [Microsoft Sentinel overview](https://learn.microsoft.com/azure/sentinel/overview)
