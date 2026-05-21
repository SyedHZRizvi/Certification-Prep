# Module 2: Microsoft Entra ID & RBAC 🪪

> **Why this module matters:** Identity is the new perimeter. Get Entra ID and RBAC right and most security problems go away. Get them wrong — even slightly — and an attacker with one phished password owns your subscription. The exam loves this domain because Microsoft loves this domain.

---

## 🍕 A Story: The Office Building With 4,000 Master Keys

Imagine you own a 20-floor office building. You hand out master keys to *everyone* — janitors, interns, vendors, the guy who fixes the espresso machine. Everyone can open every room. One day a janitor's keychain gets stolen. You don't even know which doors got opened. You can't revoke just *that* key — you'd have to re-key the whole building.

That's how Azure looks without RBAC: every "Owner" has a master key, and you have no audit trail.

Now imagine instead: each person gets a key card programmed to *only* the floors and rooms they actually need. Visitors get day passes that auto-expire at 5 PM. The CFO can request "vault access for the next 4 hours" and the security desk approves it. Lost cards get deactivated in seconds, with a full log of every door they opened.

**That's Entra ID + RBAC + Conditional Access + PIM.** Least privilege, time-bound elevation, and an audit trail of every single door opened. The exam will test whether you understand which "key card system" feature solves which scenario.

---

## 🏢 Microsoft Entra ID: The Identity Plane

**Microsoft Entra ID** (the artist formerly known as Azure Active Directory) is Microsoft's cloud identity service. It's *not* the same as on-premises Active Directory — it doesn't speak LDAP or Kerberos natively, it speaks **OAuth 2.0, OIDC, SAML, WS-Fed**, and SCIM.

| On-prem AD | Entra ID |
|------------|----------|
| LDAP / Kerberos / NTLM | OAuth 2.0 / OIDC / SAML |
| Domain Controllers (you patch them) | Globally managed by Microsoft |
| OUs and Group Policy | Administrative units + Conditional Access |
| Forest / domain trusts | Cross-tenant access settings, B2B |
| Computers join the domain | Devices register or join Entra ID |

You can **sync** on-prem AD users into Entra ID with **Microsoft Entra Connect** (with optional **password hash sync**, **pass-through authentication (PTA)**, or **federation with AD FS**) — but that's a hybrid identity topic mostly outside AZ-104 depth.

---

## 👤 Users

Three flavors of Entra ID user accounts:

| Type | Created where | Example UPN |
|------|---------------|-------------|
| **Cloud-only** | Entra ID portal | `alice@contoso.onmicrosoft.com` or `alice@contoso.com` (custom domain) |
| **Synced from on-prem** | Created in AD, synced via Entra Connect | `alice@contoso.com` |
| **Guest (B2B)** | Invited from another tenant | `alice_externalcorp.com#EXT#@contoso.onmicrosoft.com` |

### Create a user via CLI

```bash
az ad user create \
    --display-name "Alice Doe" \
    --user-principal-name "alice@contoso.onmicrosoft.com" \
    --password 'TempPassw0rd!' \
    --force-change-password-next-sign-in true
```

### PowerShell — bulk create users from CSV

```powershell
# Connect to Entra ID
Connect-MgGraph -Scopes "User.ReadWrite.All"

Import-Csv users.csv | ForEach-Object {
    $passwordProfile = @{
        Password = "TempP@ss123!"
        ForceChangePasswordNextSignIn = $true
    }
    New-MgUser -DisplayName $_.DisplayName `
               -UserPrincipalName $_.UPN `
               -MailNickname $_.Alias `
               -AccountEnabled:$true `
               -PasswordProfile $passwordProfile
}
```

---

## 👥 Groups

Two **group types** crossed with two **membership types** = four possibilities to know:

| Group type | What it does | Where it lives |
|------------|--------------|----------------|
| **Security** | RBAC + Conditional Access targeting | Entra ID |
| **Microsoft 365** | Adds a shared mailbox/SharePoint/Teams | Entra ID + M365 |

| Membership | Who joins how |
|------------|---------------|
| **Assigned** | Admin adds/removes members manually |
| **Dynamic User** | Membership rule evaluated against user attributes (e.g. `department -eq "Finance"`) |
| **Dynamic Device** | Membership rule on device attributes (e.g. `deviceOSType -eq "Windows"`) |

🔥 **Dynamic groups require an Entra ID P1 license.** That's a common exam gotcha.

### Dynamic membership rule examples

```text
# All users in the Sales department
(user.department -eq "Sales")

# All non-guest users in Spain
(user.userType -ne "Guest") and (user.country -eq "Spain")

# All Windows 11 devices
(device.deviceOSType -eq "Windows") and (device.deviceOSVersion -startsWith "10.0.22")
```

### Create a dynamic group via Az CLI

```bash
az ad group create \
    --display-name "Sales-Dynamic" \
    --mail-nickname "sales-dyn" \
    --description "Auto-membership of Sales dept" \
    # CLI alone can't set dynamic — use Graph or portal for the membershipRule
```

(In practice you'd use Microsoft Graph PowerShell for dynamic rule strings.)

---

## 🤝 B2B vs B2C (Don't Mix These Up!)

| | **Entra ID B2B** | **Entra ID External ID for customers (B2C → External ID)** |
|---|------------------|------------------------------------------------------------|
| Audience | Partners, vendors, contractors | Your end customers (consumer-facing apps) |
| User store | Guests in your tenant | Separate Entra External ID tenant |
| Sign-in | Their existing org account (Microsoft, Google, etc.) | Sign-up flows you customize, social IdPs |
| RBAC | Yes — assign guest to roles | Not applicable |
| Use case | "Let Acme Partner's PMs access our SharePoint site" | "Let 1M consumers sign in to my retail app" |

🚨 **Trap:** B2C (the old name) is being rebranded as **Microsoft Entra External ID**. AZ-104 may still use the old term — either is correct.

---

## 🛡️ Conditional Access (CA)

Conditional Access is your **if-then engine** at sign-in. "**IF** [signals] **THEN** [grant or block, with controls]."

```
SIGNALS                  →  DECISION              →  CONTROLS
─────────────────────────   ──────────────────       ──────────────────
- User / group              - Allow access            - Require MFA
- App being accessed        - Block access            - Require compliant device
- Device state              - Require controls        - Require Hybrid Azure AD join
- Location (named loc)                                - Require approved client app
- Risk (sign-in / user)                               - Require terms of use
- Client app type
```

### Example policies you'll see in scenarios

| Goal | Policy |
|------|--------|
| Block legacy auth | "All users, all cloud apps, client app = legacy auth → Block" |
| MFA for admins | "Directory roles incl. Global Admin, Privileged Role Admin → Require MFA" |
| Block sign-in from outside US | "Locations: NOT 'US' → Block" |
| Force managed device for admin portal | "App = Azure portal → Require compliant device" |

### Create a CA policy via Graph (PowerShell)

```powershell
Connect-MgGraph -Scopes "Policy.ReadWrite.ConditionalAccess"

$params = @{
    DisplayName = "Require MFA for Admins"
    State = "enabled"
    Conditions = @{
        Users = @{ IncludeRoles = @(
            "62e90394-69f5-4237-9190-012177145e10"  # Global Admin
        )}
        Applications = @{ IncludeApplications = @("All") }
    }
    GrantControls = @{
        BuiltInControls = @("mfa")
        Operator = "OR"
    }
}
New-MgIdentityConditionalAccessPolicy -BodyParameter $params
```

🔥 **MEMORIZE:** Conditional Access requires **Entra ID P1**. **Identity Protection** (risk-based CA) requires **P2**.

---

## 🔑 MFA & Authentication Methods

Authentication methods in Entra ID:

| Method | Strength | Notes |
|--------|----------|-------|
| Password | Weakest | Should be paired with MFA |
| SMS / Voice call | Weak | Phishable; Microsoft discourages |
| Email OTP | Weak | Guests can use this |
| Microsoft Authenticator (push + number match) | Strong | Number matching is now default |
| FIDO2 security key | Strongest | Passwordless |
| Windows Hello for Business | Strong | Biometric/PIN |
| Certificate-based authentication (CBA) | Strong | Federal/regulated use cases |
| Temporary Access Pass (TAP) | Onboarding-only | Short-lived passcode for new joiners |

**MFA enforcement options:**
1. **Conditional Access** (modern, recommended)
2. **Security defaults** (free baseline, on by default for new tenants — enforces MFA for everyone, blocks legacy auth)
3. **Per-user MFA** (legacy — don't use for new deployments)

---

## 🛡️ Identity Protection (P2 feature)

Detects and responds to identity risk in real time.

| Risk type | Examples |
|-----------|----------|
| **Sign-in risk** | Anonymous IP, atypical travel, malware-linked IP, leaked credentials hit |
| **User risk** | Leaked credentials, suspicious patterns across sessions |

Risk-based **CA policies** can require MFA, force password change, or block. Common policies:
- "Sign-in risk = High → Block"
- "User risk = Medium → Require password change"

---

## 🧑‍✈️ RBAC: Role-Based Access Control

RBAC = "**who** can do **what** on **which** scope."

```
SECURITY PRINCIPAL  ──assignment──>  ROLE DEFINITION  ──at──>  SCOPE
(user/group/SP/MI)                   (built-in or custom)        (mgmt group / sub / RG / resource)
```

### The 4 fundamental built-in roles

| Role | Can do |
|------|--------|
| **Owner** | Everything, including assigning roles |
| **Contributor** | Everything except assigning roles |
| **Reader** | Read everything |
| **User Access Administrator** | Manage user access to Azure resources (i.e. assign roles) |

### Common workload-specific roles

| Role | Use case |
|------|----------|
| **Virtual Machine Contributor** | Manage VMs but not VNets or storage |
| **Storage Blob Data Reader / Contributor / Owner** | Data-plane access to blobs (read / write / read + change ACL) |
| **Network Contributor** | Manage VNets, NSGs, public IPs |
| **Key Vault Administrator** | Manage Key Vault and its secrets (data + control plane) |
| **Reservation Purchaser** | Buy reservations |

🚨 **Critical distinction — control plane vs data plane:**

| Plane | What it controls | Roles |
|-------|------------------|-------|
| **Control plane** | The resource itself (create, delete, configure) | Owner, Contributor, Reader |
| **Data plane** | Data inside the resource (blobs, secrets, messages) | `Storage Blob Data Reader`, `Key Vault Secrets User`, etc. |

A Contributor on a storage account can give themselves a data role, but doesn't *automatically* have data access. Same for Key Vault — you need an explicit data role.

### How effective permissions are calculated

**Permissions are ADDITIVE.** You get the union of:
- Roles inherited from parent scopes (MG, sub, RG)
- Roles assigned directly at this scope
- Roles via group membership

There is **no traditional `Deny`** in Azure RBAC. Two exceptions:
1. **Deny assignments** — used only by Azure managed services (Blueprints, managed apps) — you can't create them yourself.
2. **Azure Policy** — `Deny` effect blocks the *action*, even if RBAC would allow it.

---

## 🛠️ Custom Roles

When built-ins don't fit. A custom role definition is JSON:

```json
{
  "Name": "VM Operator (Start/Stop only)",
  "Description": "Can start and stop VMs but cannot delete them.",
  "Actions": [
    "Microsoft.Compute/virtualMachines/start/action",
    "Microsoft.Compute/virtualMachines/restart/action",
    "Microsoft.Compute/virtualMachines/deallocate/action",
    "Microsoft.Compute/virtualMachines/read",
    "Microsoft.Compute/*/read"
  ],
  "NotActions": [],
  "DataActions": [],
  "NotDataActions": [],
  "AssignableScopes": [
    "/subscriptions/00000000-1111-2222-3333-444444444444"
  ]
}
```

### Create the custom role via CLI

```bash
az role definition create --role-definition vm-operator.json
```

### Assign it

```bash
az role assignment create \
    --assignee alice@contoso.com \
    --role "VM Operator (Start/Stop only)" \
    --scope "/subscriptions/.../resourceGroups/rg-prod"
```

**Limits to memorize:** 5,000 custom roles per tenant (2,000 for Azure China / Government).

---

## 🤖 Managed Identities & Service Principals

When **code** (not a human) needs to authenticate, you use a **service principal** or a **managed identity**.

| | Service Principal | Managed Identity |
|---|-------------------|------------------|
| Credentials | You manage (secret or cert) | **Azure manages — no secrets in your code** |
| Lifecycle | Manual create/delete | Auto-created/deleted with the resource (system-assigned) or shared across resources (user-assigned) |
| Use case | External CI/CD, third-party app | Azure-hosted workloads (VM, Function, App Service) |

🔥 **Always prefer managed identity** over service principal when the workload runs on Azure. Two flavors:
- **System-assigned** — tied to the resource lifecycle (deleted when VM is deleted)
- **User-assigned** — independent lifecycle, can be shared across resources

```bash
# Enable system-assigned MI on a VM, then grant it Reader on a storage account
az vm identity assign --resource-group rg-x --name vm-app
PRINCIPAL=$(az vm show -g rg-x -n vm-app --query identity.principalId -o tsv)
az role assignment create \
    --assignee-object-id $PRINCIPAL \
    --assignee-principal-type ServicePrincipal \
    --role "Storage Blob Data Reader" \
    --scope "/subscriptions/.../resourceGroups/rg-data/providers/Microsoft.Storage/storageAccounts/stappdata"
```

---

## ⏰ Privileged Identity Management (PIM)

**PIM** = "just-in-time" elevation for privileged roles. Requires **Entra ID P2**.

Without PIM: Alice is a permanent Global Admin. If her account is phished, the attacker is Global Admin too.

With PIM: Alice is **eligible** for Global Admin. To activate, she:
1. Goes to PIM, clicks "Activate"
2. Provides MFA
3. (Optionally) supplies a ticket number + justification
4. Gets the role for **1–8 hours**, then it auto-revokes
5. The activation is logged with reason + duration

Roles you usually PIM-ify:
- Global Administrator
- Privileged Role Administrator
- Security Administrator
- User Access Administrator
- Owner / Contributor at high scopes

### Configure via CLI is awkward — use the portal or Graph. Key concepts:

- **Eligible** vs **Active**: eligible needs activation; active is permanent (use sparingly)
- **Activation duration**: 1–8 hrs default
- **Approval required**: optional; assign approvers
- **Access reviews**: periodic re-justification of eligibility

---

## 🏛️ Administrative Units (AUs)

Sub-divisions of an Entra ID tenant. Like an OU in on-prem AD.

**Use case:** Country IT admin should manage users in *their* country only, not the whole tenant.

```bash
# Create an AU (Graph CLI / PowerShell — Az CLI doesn't directly support)
# Then scope a role like "User Administrator" to that AU instead of the whole directory
```

---

## 🧪 Task-Sequencing Practice: Grant a Vendor Time-Bound, Audited Access to One Resource Group

**Order these steps:**

1. ✅ Invite the vendor as a **B2B guest** to your tenant.
2. ✅ Create or use an existing **security group**; add the guest.
3. ✅ In **PIM for Azure resources**, make the group **eligible** for `Contributor` on `rg-vendor-project`.
4. ✅ Configure **PIM settings**: max activation 4 hrs, **require MFA** + **require approval** + **require justification**.
5. ✅ Set an **access review** to re-validate the assignment every 30 days.
6. ✅ Confirm the **Conditional Access** policy "Require MFA for guests" applies.
7. ✅ Vendor activates → does work → role auto-expires.

⚠️ Skipping step 3 (giving permanent Contributor) is the #1 mistake. Skipping step 5 (access reviews) is how stale guests pile up over years.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Contributor can assign roles" | ❌ Only Owner or User Access Administrator can |
| "Storage Blob Data role is the same as Storage Account Contributor" | ❌ Different planes |
| "Conditional Access works with Entra ID Free" | ❌ Requires **P1** (Identity Protection = P2) |
| "Security defaults and CA can coexist" | ❌ Turning on CA *disables* security defaults |
| "Guests count as members for licensing" | ❌ Guests use a 1:5 ratio for many licenses |
| "Deny in RBAC overrides Allow" | ❌ No user-creatable deny in RBAC — use Policy `Deny` |
| "PIM activation lasts 24 hrs" | ❌ Default cap is 8 hrs, can be lowered |
| "Dynamic groups work on any tier" | ❌ P1 required |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Tenant** | An Entra ID directory instance |
| **UPN** | User Principal Name (`alice@contoso.com`) |
| **B2B** | Guest collaboration with external orgs |
| **B2C / External ID for customers** | Consumer-facing identity (separate tenant kind) |
| **Conditional Access** | If-then policies at sign-in (P1) |
| **Identity Protection** | Risk-based CA (P2) |
| **MFA** | Multi-factor authentication |
| **PIM** | Privileged Identity Management — JIT elevation (P2) |
| **RBAC** | Role-Based Access Control |
| **Role definition** | The list of allowed actions |
| **Role assignment** | Linking a principal to a role at a scope |
| **Scope** | MG / sub / RG / resource where a role applies |
| **Service principal** | Identity for an app/script |
| **Managed identity** | Azure-managed credential for Azure workloads |
| **Administrative unit** | Sub-tenant grouping for delegated user admin |
| **Access review** | Periodic re-justification of access |

---

## ✅ Module 2 Summary

You now know:
- 🏢 What Entra ID is (and what it isn't — it's not on-prem AD)
- 👤 The 3 user types and 4 group flavors
- 🤝 B2B vs B2C distinction
- 🛡️ How Conditional Access decides allow/block (signals → controls)
- 🔑 MFA methods ranked from weakest to strongest
- 🧑‍✈️ The 4 fundamental built-in roles + control vs data plane
- 🛠️ How to define a custom role
- 🤖 Managed identity vs service principal (prefer MI)
- ⏰ How PIM gives JIT elevation
- 🚨 The licensing tiers (Free / P1 / P2) and what unlocks at each

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Storage Accounts & Blobs](../Module-03-Storage-Accounts-Blobs/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Entra ID licensing comparison](https://www.microsoft.com/security/business/microsoft-entra-pricing)
- 📖 [Azure built-in roles reference](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles)
- 📖 [Conditional Access design principles](https://learn.microsoft.com/entra/identity/conditional-access/plan-conditional-access)
- 📖 [PIM for Azure resources](https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-resource-roles-configure-role-settings)
- 📖 [Managed identity overview](https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview)
