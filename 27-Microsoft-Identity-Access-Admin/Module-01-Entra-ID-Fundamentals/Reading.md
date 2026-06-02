# Module 1: Entra ID Fundamentals 🪪

> **Why this module matters:** Identity is the new perimeter. Every CA policy, every PIM activation, every B2B invitation in the rest of this course starts from a tenant — and from picking the right license SKU. Get this layer wrong, and *every* feature in modules 2–8 is gated behind something you didn't buy. Get it right, and the whole governance story is a series of small, predictable clicks.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic identity concepts (user, password, MFA, role) — covered in [`05-Azure-Fundamentals` Module 5](../../05-Azure-Fundamentals/Module-05-Governance-Compliance/Reading.md) (AZ-900) and [`09-CompTIA-Security-Plus` Module 1](../../09-CompTIA-Security-Plus/Module-01-General-Security-Concepts/Reading.md).
> - The Azure resource hierarchy and inheritance — [`06-Azure-Administrator` Module 1](../../06-Azure-Administrator/Module-01-Subscriptions-Resource-Hierarchy/Reading.md).
> - The principle of least privilege from Saltzer & Schroeder's seminal paper "The Protection of Information in Computer Systems" (*Proceedings of the IEEE*, 1975).
>
> If "OAuth 2.0," "OIDC," or "service principal" are completely new, pause and read the AZ-900 module first. SC-300 assumes you know what auth-vs-authz *is* and gets straight into how Microsoft Entra does it at scale.

---

## 🪪 A Story: The Mass MFA Enrollment That Took Down a Hospital

It's a Tuesday in 2024. A 4,200-employee regional health system is rolling out MFA. The CISO sends a tenant-wide email at 7 AM: "Starting today, sign in with the Microsoft Authenticator app." By 9 AM the help desk has 800 tickets open. By noon, three operating rooms can't sign in to the EHR. At 1 PM a vendor's badge reader stops working because its service account requires legacy SMTP AUTH — which an emergency "block legacy auth" policy just blocked. At 2 PM the on-call admin's own MFA device is on a charger downstairs and *every* break-glass account has been deleted "for security" by a well-meaning intern the week before. The CIO is now signing a court order on her cell phone to delay surgeries.

What went wrong? Not the MFA decision — MFA is right. What went wrong was that the team treated **identity** as a series of unrelated checkboxes: a license here, a policy there, a method there. They never built the **identity foundation** that makes MFA, conditional access, and break-glass coexist. They never picked an *edition* (P1 vs P2) that matched the policies they wanted. They never thought about service accounts, vendors, or guests. They never opened the Entra portal and *just understood the tenant*.

This module is that foundation. Boring? Maybe. But everything you'll spend the rest of SC-300 doing — Conditional Access, PIM, Identity Protection, app SSO, governance — fails on day one without it. Get this right and the hospital story is a 30-minute incident, not a CNN headline.

---

## 🏢 What Is Microsoft Entra ID, Really?

**Microsoft Entra ID** (the artist formerly known as **Azure Active Directory**, renamed in mid-2023) is Microsoft's cloud identity service. It is **not** on-premises Active Directory:

| On-prem AD (the thing in your data center) | Microsoft Entra ID (the cloud service) |
|--------------------------------------------|----------------------------------------|
| LDAP, Kerberos, NTLM | OAuth 2.0, OIDC, SAML 2.0, WS-Fed, SCIM |
| Domain Controllers (you patch them) | Globally managed by Microsoft |
| OUs and Group Policy | Administrative Units + Conditional Access |
| Forest / domain trusts | Cross-tenant access settings, B2B |
| Computers join the domain | Devices register or *join* Entra ID |
| Single-org boundary | Multi-tenant boundary (B2B, multi-tenant apps) |

Entra ID is the identity service behind **Microsoft 365, Azure, Intune, Dynamics, and almost every Microsoft SaaS**. It's also the identity service behind hundreds of non-Microsoft SaaS apps (Workday, Salesforce, ServiceNow, Slack…) via federation.

🔥 **MEMORIZE:** SC-300 still uses "Microsoft Entra ID" and "Azure AD" interchangeably. They are the same thing. The rebrand is naming only.

---

## 🌐 The Four Editions (Memorize This Table Cold)

This single table is worth 5–7 exam questions. Tape it to your monitor.

| Feature | **Free** | **Entra ID P1** | **Entra ID P2** | **Entra External ID** |
|---------|----------|-----------------|-----------------|-----------------------|
| Up to 500K objects | ✅ | ✅ | ✅ | Per-MAU billing |
| Cloud users, groups, SSO to gallery apps | ✅ | ✅ | ✅ | (B2C: consumer) |
| Self-service password reset (cloud only) | ✅ | ✅ | ✅ | ✅ |
| Self-service password reset for synced users | ❌ | ✅ | ✅ | n/a |
| **Conditional Access** | ❌ | ✅ | ✅ | (subset) |
| **Dynamic groups + group-based licensing** | ❌ | ✅ | ✅ | n/a |
| **Microsoft Entra Application Proxy** | ❌ | ✅ | ✅ | n/a |
| Microsoft Identity Manager (MIM CAL) | ❌ | ✅ | ✅ | n/a |
| Cloud App Discovery | ❌ | ✅ | ✅ | n/a |
| Entra Connect / Cloud Sync | ✅ | ✅ | ✅ | n/a |
| **Identity Protection (risk-based)** | ❌ | ❌ | ✅ | n/a |
| **Privileged Identity Management (PIM)** | ❌ | ❌ | ✅ | n/a |
| **Access reviews** | ❌ | ❌ | ✅ | n/a |
| **Entitlement management (access packages)** | ❌ | ❌ | ✅ | n/a |
| Security Defaults | ✅ | ✅ | ✅ | n/a |

**Plus the new SKUs you'll see in 2026 scenarios:**

| SKU | Adds |
|-----|------|
| **Microsoft Entra ID Governance** | Lifecycle Workflows, custom extensions in entitlement management, ML-based access review recommendations |
| **Microsoft Entra External ID** (formerly Azure AD B2C) | Consumer-facing identities in a separate tenant, custom-branded sign-up/sign-in, social IdPs |
| **Microsoft Entra Suite** | Bundles ID Governance + Identity Protection + Verified ID + Internet Access + Private Access |

🚨 **Exam trap:** Microsoft 365 E3 includes Entra ID P1. Microsoft 365 E5 includes Entra ID P2. If a scenario says "we have M365 E5 for all users," the candidate doesn't need to buy P2 separately — it's already there.

---

## 🏗️ Tenants: Your Identity Boundary

A **tenant** is a dedicated, isolated instance of the Entra ID directory representing your organization. **One organization usually has one tenant.** (Some have more for testing, M&A, or regulatory reasons.)

When you create a tenant, you pick:

1. A **default DNS name**: `<yourname>.onmicrosoft.com` — permanent, can never be deleted or renamed.
2. A **country/region** — affects which Microsoft datacenters store directory data (and which sovereign cloud you're in: Public, US Gov, China — separate from public commercial Azure).
3. An **organization name** — the friendly name you can change later.

```bash
# Create a tenant via Microsoft Graph PowerShell (requires permissions)
# Usually done in the Azure portal "Create a Microsoft Entra ID tenant" experience
# After creation:
Connect-MgGraph -TenantId "<tenant-id-or-domain>"
Get-MgOrganization | Format-List DisplayName, VerifiedDomains
```

### Subscriptions vs tenants

A **subscription** is associated with **exactly one tenant** at any time. You can *transfer* a subscription to a different tenant (covered in AZ-104), but a resource cannot span tenants natively — you'd use **B2B collaboration** or **cross-tenant sync** to share identity (covered in Module 2).

---

## 🌍 Custom Domains

You can verify up to **5,000 custom DNS domains** on one tenant. This lets users sign in as `alice@contoso.com` instead of `alice@contoso.onmicrosoft.com`.

### The verification flow

1. In Entra portal → Custom domain names → Add `contoso.com`.
2. Microsoft gives you a TXT (or MX) record value: `MS=ms12345678`.
3. You add that record at your DNS provider (Cloudflare, GoDaddy, etc.).
4. Click "Verify" — Microsoft does a DNS lookup. Once it sees the record, the domain is verified.
5. You can now create or rename users with `@contoso.com` UPNs.

### Federated vs managed custom domains

| Domain type | Authentication |
|-------------|----------------|
| **Managed** | Cloud auth (PHS or PTA). Default for new domains. |
| **Federated** | Auth handed off to AD FS (or third-party IdP) via WS-Fed/SAML |

To convert a domain to federated:
```powershell
# Microsoft Graph PowerShell
Connect-MgGraph -Scopes "Domain.ReadWrite.All"
Update-MgDomainFederationConfiguration -DomainId "contoso.com" -BodyParameter @{
  IssuerUri = "https://sts.contoso.com/adfs/services/trust"
  PassiveSignInUri = "https://sts.contoso.com/adfs/ls/"
  SigningCertificate = "<Base64 X509 cert>"
}
```

🚨 **Exam trap:** Federated → Managed conversion (the modern direction) is straightforward. Managed → Federated is rare in 2026 and is being discouraged by Microsoft (federation pushes auth out of the cloud, losing Conditional Access signals).

---

## 🎨 Tenant Branding

Branding lets you put your logo on the sign-in page, change the background image, and customize the text — so users don't get phished by a generic page.

| Element | Spec |
|---------|------|
| Sign-in page background | 1920×1080 JPG, ≤300 KB |
| Banner logo | 280×60 PNG/JPG, ≤10 KB |
| Square logo | 240×240 PNG/JPG, ≤50 KB |
| Sign-in page text | ≤1024 chars (legal notice / sign-in help) |
| User-friendly hint | Pre-filled username placeholder |

Branding is per-tenant **and** per-language. You can ship up to 100 language variants.

```bash
# Set branding via Graph API (PowerShell wrapper)
Update-MgOrganizationBranding -OrganizationId "<tenant-id>" `
  -SignInPageText "Use your @contoso.com address. IT help: 1-800-555-1234." `
  -UsernameHintText "alice@contoso.com" `
  -SquareLogo (Get-Content "./logo.png" -Raw -AsByteStream)
```

🎯 **Exam tip:** Branding **requires Entra ID P1 or higher** — Free tenants get the generic Microsoft page. This is a frequent scenario question.

---

## 🛡️ Directory Roles vs Entra Roles vs Azure RBAC

Microsoft uses three role systems that share many names but live at three different scopes. This is one of the most-confused SC-300 topics.

| System | Controls | Examples | Scope |
|--------|----------|----------|-------|
| **Microsoft 365 Admin Roles** (legacy "directory roles") | Microsoft 365 services (Exchange, SharePoint, Teams) | Exchange Admin, Teams Admin | Tenant + workload |
| **Microsoft Entra Roles** | Entra ID + Entra-aware workloads | Global Admin, User Admin, Application Admin, Privileged Role Admin, Hybrid Identity Admin | Tenant (some support **administrative unit** scope) |
| **Azure RBAC Roles** | Azure resources (VMs, storage, RGs, subs) | Owner, Contributor, Reader, User Access Admin, Storage Blob Data Reader | Mgmt group / sub / RG / individual resource |

**Critical exam point:** Global Administrator does NOT automatically have Azure RBAC over any subscription. They have to elevate to "User Access Administrator" at root scope first (a deliberate, audited action available only to a Global Administrator who's also been granted elevation via the *Properties → Access management for Azure resources* toggle).

```powershell
# Elevate Global Admin to root scope User Access Admin
# (only the GA themselves can do this — it's a one-button toggle in portal)
Connect-AzAccount
New-AzRoleAssignment -SignInName "alice@contoso.com" `
  -RoleDefinitionName "User Access Administrator" `
  -Scope "/"  # tenant root scope
```

🔥 **MEMORIZE:** Entra roles ≠ Azure roles ≠ M365 admin roles. The exam will deliberately mix them up in answer choices.

### The fundamental Entra roles to know

| Role | What it does | Risk |
|------|--------------|------|
| **Global Administrator** | Everything in Entra; can elevate to root Azure RBAC | Highest — Microsoft says ≤5 per tenant |
| **Privileged Role Administrator** | Assigns any Entra role, manages PIM | Equivalent to GA — same risk |
| **Privileged Authentication Administrator** | Resets MFA, sets passwords on any user including GAs | Can take over a GA — same risk |
| **Application Administrator** | Manage all enterprise apps + app registrations | Can consent to apps — escalation path |
| **User Administrator** | Manage users + groups (not GAs) | Can create accounts |
| **Authentication Administrator** | Reset auth methods for non-admins | Limited but useful for help desk |
| **Helpdesk Administrator** | Reset passwords for non-admins | Help-desk baseline |
| **Reports Reader** | Read sign-in / audit logs | Audit / SOC tier |
| **Security Reader / Security Administrator** | Read or manage security features | SOC / IR teams |
| **Hybrid Identity Administrator** | Manage Entra Connect, federation | Hybrid IT |
| **Compliance Administrator** | M365 Compliance Center | Legal / compliance |
| **Global Reader** | Read-only of everything | Auditors |

🚨 **Exam trap:** **Authentication Administrator** can reset auth methods for **non-admins only**; **Privileged Authentication Administrator** can reset them for **any user**, including Global Admins. The exam loves a 4-option question that hinges on this distinction.

---

## 🤝 B2B Collaboration vs External ID (Don't Mix These Up!)

This is the single most-confused topic in SC-300.

| | **Entra ID B2B Collaboration** | **Microsoft Entra External ID** (formerly Azure AD B2C) |
|---|--------------------------------|-----------------------------------------------------------|
| **Audience** | Partners, vendors, contractors | Your end customers |
| **User store** | Guests in *your* tenant | Separate Entra External ID tenant |
| **Sign-in identity** | Their existing org / Microsoft / Google account | Sign-up flows you customize; social IdPs (Google, Facebook, Apple) |
| **RBAC** | Yes — assign guest to roles | Not applicable (the External ID tenant is consumer-facing) |
| **Conditional Access** | Yes — host tenant's CA applies | Yes — but inside External ID tenant only |
| **License model** | First 50K MAU free per month; tiered after | First 50K MAU free; per-MAU after |
| **Example** | "Let Acme Partner's PMs access our SharePoint site" | "Let 1M consumers sign in to my retail app" |

🚨 **Exam trap:** Both can use "social identities" — but in totally different ways. B2B guests sign in with their *existing org account*; External ID consumers sign in with Google/Facebook/Apple via custom user flows. The B2B path is for workforce identity collaboration. The External ID path is for customer identity (CIAM).

### A note on naming

Microsoft has unified the branding:

- **Microsoft Entra External ID for customers** = formerly **Azure AD B2C**.
- **Microsoft Entra External ID for partners** = part of B2B collaboration, just renamed.

The exam may use either label. They mean the same thing.

---

## 🔢 Tenant Limits to Memorize

| Item | Limit |
|------|-------|
| Objects per tenant (cloud users + groups + apps + devices) | 500,000 for Free; **no hard limit** for paid (subject to verification) |
| Custom verified domains | 5,000 per tenant |
| Owners per group | 100 |
| Members per group | Unlimited (recommendation: <50K for performance) |
| Maximum nested groups in security group | 200 levels |
| Application registrations per user (default) | 250 (Application Developer role can raise) |
| Administrative Units per tenant | 100 by default; can be raised by support |
| Identity Protection risk events stored | 90 days |
| Sign-in log retention | 7 days (Free), 30 days (P1/P2) |

🎯 **Exam tip:** If a scenario asks how to retain sign-in logs beyond 30 days, the answer is **diagnostic settings → Log Analytics workspace (or Event Hub / storage account)** — not "buy a higher license."

---

## ⚙️ Tenant-Level Settings You'll See on the Exam

| Setting | Where | What it controls |
|---------|-------|------------------|
| **Properties → Tenant properties** | Entra portal | Notification language, tenant friendly name, technical contact |
| **Properties → Manage Security defaults** | Entra portal | On/Off (recommended ON for Free tenants, OFF if using CA) |
| **External Identities → External collaboration settings** | Entra portal | Guest user permissions, who can invite, allow/deny domain lists |
| **External Identities → Cross-tenant access settings** | Entra portal | Inbound/outbound B2B + B2B direct connect rules per partner |
| **User settings → User feature settings → Restrict access to Microsoft Entra ID admin center** | Entra portal | Hide the portal from non-admins |
| **User settings → User can register applications** | Entra portal | Default Yes — turn off to lock down app registration |
| **Properties → Access management for Azure resources** | Entra portal | The Global Admin elevation toggle (root scope) |

🚨 **Exam trap:** "Users can register applications = Yes" is the default. If a question says "we don't want developers creating app registrations themselves," the answer is to set this to **No** and have them request via Application Developer role.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Conditional Access is free" | ❌ Requires Entra ID P1 |
| "PIM works with P1" | ❌ Requires P2 |
| "B2B and External ID (B2C) are basically the same" | ❌ B2B = partners in your tenant; External ID = customers in a separate tenant |
| "Global Admin = full control over all Azure subscriptions" | ❌ Must elevate to root User Access Admin first |
| "I can rename `contoso.onmicrosoft.com`" | ❌ Initial domain is permanent |
| "Default sign-in logs are kept forever" | ❌ 7d Free / 30d P1+ — forward to LA for longer |
| "Microsoft 365 E3 doesn't include CA" | ❌ E3 includes P1 (with CA) |
| "Branding is a Free-tier feature" | ❌ Requires P1 |

---

## 🧪 Task-Sequencing Practice: Stand Up a New Entra Tenant for a Subsidiary

**Order these steps correctly to provision a new Entra tenant for "Acme Health, a subsidiary of Acme Corp."**

The correct order:

1. ✅ Sign in to the Microsoft Entra admin center with an existing Microsoft Account.
2. ✅ Choose **Create a tenant → Workforce (not External)** → pick country/region (data residency).
3. ✅ Assign Microsoft 365 / Entra licenses (E3 includes P1; E5 includes P2).
4. ✅ Verify the **first custom domain** (`acmehealth.com`) via DNS TXT record.
5. ✅ Create 2 cloud-only **break-glass Global Admins** with strong passwords; vault credentials; **exclude from all future CA policies**.
6. ✅ Enable **Security Defaults** as initial baseline (or skip if you'll build full CA from day 1).
7. ✅ Set **External collaboration settings** → restrict who can invite guests; allow domain list.
8. ✅ Configure **tenant branding** (logo, background, sign-in text).
9. ✅ Decide on **hybrid sync method** (Entra Cloud Sync vs Connect — covered in Module 7).
10. ✅ Plan first **Conditional Access policies** in **report-only** before enforcing.

⚠️ Skipping step 5 (break-glass) before step 10 (CA) is the single most common day-one mistake — you can lock yourself out of a tenant you just built.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Microsoft Entra ID** | Microsoft's cloud identity service (formerly Azure AD) |
| **Tenant** | Dedicated isolated instance of the Entra directory |
| **Default domain** | The permanent `*.onmicrosoft.com` name |
| **Custom domain** | A verified DNS domain (e.g. `contoso.com`) used in UPNs |
| **Managed vs Federated domain** | Cloud-auth vs auth handed off to AD FS |
| **Entra ID P1** | License tier for Conditional Access + dynamic groups + Application Proxy |
| **Entra ID P2** | License tier for Identity Protection + PIM + entitlement management + access reviews |
| **Microsoft Entra ID Governance** | Add-on SKU for Lifecycle Workflows + custom extensions |
| **Entra role** | Role over Entra ID + Entra-aware services |
| **Azure RBAC role** | Role over Azure resources |
| **M365 admin role** | Role over Microsoft 365 workloads |
| **Global Administrator** | Top Entra role; can elevate to root Azure RBAC |
| **Privileged Role Administrator** | Manages Entra role assignments + PIM |
| **B2B collaboration** | Invite external partners as guests in *your* tenant |
| **Microsoft Entra External ID** | Consumer/customer identity (formerly B2C); separate tenant |
| **Security Defaults** | Free baseline: MFA on admins + block legacy auth |
| **Conditional Access** | If-then engine for sign-in; requires P1 |
| **Identity Protection** | Risk-based detections and policies; requires P2 |
| **PIM** | Privileged Identity Management; JIT + approval + audit; requires P2 |
| **Branding** | Custom logo/text on sign-in page; requires P1 |

---

## ✅ Module 1 Summary

You now know:

- 🪪 What Entra ID is (and isn't — not on-prem AD!)
- 🌐 The four editions and what each unlocks (Free / P1 / P2 / External ID)
- 🏢 What a tenant is and how default + custom domains work
- 🎨 How tenant branding works and why it requires P1
- 🛡️ Three role systems: directory/M365, Entra, Azure RBAC (and why mixing them up costs exam points)
- 🤝 B2B (partners in your tenant) vs External ID (customers in a separate tenant)
- 🔢 The numbers Microsoft expects you to know (5K domains, 7/30-day logs, etc.)
- 🚨 The 8 most common exam traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Users, Groups & External Identities](../Module-02-Users-Groups/Reading.md)

---

## 📊 Case Study — Maersk Identity Rebuild After NotPetya (2017–2024)

**Situation.** In June 2017, the global shipping giant A.P. Moller-Maersk was hit by NotPetya, the most destructive cyberattack on a single company in history at the time (≈$300M in damages, 17 of 76 terminals offline). The attack used a poisoned Ukrainian tax-software update, then spread via stolen domain admin credentials cached on on-prem AD-joined workstations. Maersk had a single on-prem Active Directory forest spanning 130+ countries with one central admin team — a perfect blast radius. Within 7 minutes, **every** domain controller in the global forest was encrypted. Microsoft engineers later found that recovery was only possible because one DC in Ghana had been offline during the attack (a local power outage).

**Decision.** Post-NotPetya, Maersk rebuilt identity on three principles:

1. **Cloud-first identity.** Microsoft Entra ID became the *primary* identity store for cloud apps. On-prem AD was kept (for legacy domain-joined Windows workloads) but no longer the gravity well for credentials.
2. **Tiered admin model.** Tier 0 (forest admins / Global Admins) live in a privileged-access workstation environment, do not browse the internet, and use PIM-eligible roles activated just-in-time with hardware MFA and approval. Tier 1/2 follow the same model with scoped Entra roles.
3. **Zero-trust assumptions on the network.** Network location stops being a security signal; Entra Conditional Access (P1/P2) becomes the perimeter. Compliant device + MFA + sign-in risk are the controls.

The transformation took ~3 years and re-architected ~80,000 employee identities. Maersk moved from one giant AD forest to a Cloud-Sync-fed Entra ID tenant with break-glass accounts, ~6 Global Admins (down from ~150 unmanaged domain admins), PIM-eligible role activation, and tenant-level branding so phishing attempts were obvious to staff.

**Outcome.** Public statements at RSA 2022 (Maersk CISO Adam Banks) and the Microsoft Ignite 2023 customer track described:

- **Time to suspend a compromised credential globally** went from "hours of paging admins" to **<60 seconds** via Entra ID + Conditional Access + automated playbooks in Sentinel.
- **Number of standing Global Admin assignments** dropped from ~150 in 2017 to ~6 in 2024, with all activations time-bound, approved, audited, and recorded in PIM.
- **Cost** of the rebuild: ~$50M+ (compared to the $300M NotPetya bill, this was a bargain).
- **No subsequent major identity breach** through end-of-period reporting.

**Lesson for the exam / for practitioners.** Identity rebuilds are not "buy P2 and check a box." They are organizational transformations that touch every employee. SC-300 spends ~25% of its weight on identity governance because Microsoft has lived through enough customer post-mortems to know that the *foundation* — license SKU, tenant settings, role taxonomy, break-glass design — is what makes or breaks every downstream control. When you see a scenario like "global org wants to limit standing admin privilege without slowing down operations," the answer almost always involves **PIM eligible roles + JIT activation + MFA + approval + access reviews + Entra ID P2** — exactly what Maersk built.

**Discussion (Socratic).**
- **Q1.** Maersk kept on-prem AD even after the rebuild for legacy domain-joined workloads. Defend the decision: when does *eliminating* on-prem AD entirely become more expensive than running it carefully? Where does Hybrid Entra Join (Module 7) fit?
- **Q2.** Maersk now has ~6 Global Administrators across 80,000+ users. Microsoft recommends ≤5. Is there a single right number? What are the trade-offs of 2 vs 5 vs 12 GAs in a 24×7 global IT operation?
- **Q3.** A common counter-argument from a CFO: "We already pay for Microsoft 365 E3 — do we *really* need E5 just for PIM?" Make the cost-of-not-doing-it case using NotPetya as evidence, but be specific about which P2 features each prevent which attack.

---

> **Where this leads.**
> - Inside this course: Module 2 builds users/groups/B2B; Module 4 builds CA on top of P1; Module 6 builds PIM on top of P2.
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) covers RBAC at AZ-104 depth; [`09-CompTIA-Security-Plus`](../../09-CompTIA-Security-Plus/README.md) frames identity as part of the broader access-control taxonomy.
> - Practice: Practice Exam 1 has 6–8 questions from this module (licensing, roles, B2B vs External ID, branding requirement, custom domain verification). Final Mock revisits in case-study form.

---

## 💬 Discussion — Socratic prompts

1. **One tenant or two?** A 4,000-employee health system buys a competitor with 1,200 employees. Each has its own Entra tenant. Argue both sides: merge into one tenant immediately vs run two tenants federated with cross-tenant sync for 18 months. What's the risk in each path? Which makes the SC-300 "right answer" and why?
2. **Federated vs managed in 2026.** Most net-new tenants are managed (cloud auth). When does federation with AD FS still make sense — beyond "we already have it"? Consider Conditional Access signal loss, MFA economics, and the AD FS retirement roadmap.
3. **Security Defaults vs Conditional Access.** A 50-person law firm has Entra ID Free + Microsoft 365 Business Basic. Should they (a) turn on Security Defaults and stop, or (b) upgrade to Business Premium (includes Entra ID P1) and build CA? Build the cost/benefit case.
4. **Branding as a security control.** Microsoft sells branding as a UX feature. Make the security argument: how does a custom-branded sign-in page *reduce* phishing risk? Where does it not help?
5. **GA inflation.** A consultancy is brought in to "right-size" Global Admins. They find 47 in a 2,000-person company. What's your engagement plan — and how do you build the replacement role taxonomy (User Admin, Auth Admin, Hybrid Identity Admin, etc.) without breaking workflows?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Entra ID documentation home](https://learn.microsoft.com/entra/) (Microsoft, current revision)
- 📖 [Entra ID feature comparison (Free / P1 / P2 / Governance)](https://learn.microsoft.com/entra/fundamentals/licensing)
- 📖 [Service limits and restrictions in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/users/directory-service-limits-restrictions)
- 📖 [Customize the Microsoft Entra sign-in page](https://learn.microsoft.com/entra/fundamentals/how-to-customize-branding)
- 📖 [Microsoft Entra built-in roles reference](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference)
- 📖 Saltzer & Schroeder, *The Protection of Information in Computer Systems*, Proceedings of the IEEE, 1975 — the canonical paper that named least privilege, defense in depth, and 6 other security principles still in use today.
- 📖 Andy Greenberg, *Sandworm* (Doubleday 2019) — book-length treatment of the NotPetya attack and Maersk's recovery.
