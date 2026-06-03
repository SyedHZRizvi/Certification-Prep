# Module 2: Users, Groups & External Identities 👥

> **Why this module matters:** Every Conditional Access policy targets a user or group. Every license is assigned to a user or group. Every PIM assignment, every access package, every app role is anchored on a user or group. If your user-and-group hygiene is broken — dynamic rules that lie, stale guests with admin rights, orphaned M365 groups — *nothing* downstream is trustworthy. SC-300 dedicates 25–30% of its weight to this layer for exactly that reason.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The tenant, license tiers, and role systems from [Module 1](../Module-01-Entra-ID-Fundamentals/Reading.md).
> - The principle of least privilege and "joiner / mover / leaver" lifecycle thinking — covered in [`09-CompTIA-Security-Plus` Module 3](../../09-CompTIA-Security-Plus/Module-03-Identity-Access-Management/Reading.md).
> - The Azure RBAC inheritance model — [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md).

---

## 🪪 A Story: The Guest User Who Owned Production

It's 2023. A boutique consultancy is hired to help a fintech "clean up some Conditional Access." On day three the consultant runs a casual `Get-MgUser -Filter "userType eq 'Guest'"` and finds **2,147 guest users**. The youngest invitation was last Tuesday. The oldest was from 2019. One guest, `consultant_oldagency.com#EXT#@fintech.onmicrosoft.com`, had been **Owner of the production Azure subscription for 4 years**. The agency that owned the email had been dissolved in 2021. Nobody — not the CTO, not the security team, not the auditors who'd just signed a SOC 2 — had ever asked "who actually still works here?"

The guest user couldn't be reached. The Microsoft account that backed it was unrecoverable. The fintech had two options: (1) leave a ghost Owner on production indefinitely, or (2) remove it and pray nothing was integration-coded against that identity. They picked (2). They removed it. Three CI/CD pipelines broke immediately. Half a SOC 2 audit was redone.

What went wrong was not "guests are bad." Guests are fine. **Guest identity governance** was missing — no access reviews, no inactive-user disablement, no entitlement management. The consultancy's first deliverable became "stand up entitlement management + access reviews on all guests." Once that ran, the population of guest users in the tenant dropped from 2,147 to 86 within six weeks. Everyone breathed again.

This module is how to make that *not* happen to you.

---

## 👤 The Three User Types

| Type | `userType` | Created via | Sign-in identity |
|------|------------|-------------|------------------|
| **Member (cloud-only)** | `Member` | Entra portal → Create new user | `alice@contoso.com` |
| **Member (synced from on-prem)** | `Member` (or `synced`) | Entra Connect / Cloud Sync from AD | `alice@contoso.com` |
| **Guest (B2B)** | `Guest` | Invitation, redeemed by external user | `alice_partner.com#EXT#@contoso.onmicrosoft.com` |
| **External member** | `Member` (but homed in another tenant) | Cross-tenant sync with member-like perms | `alice@partner.com` (their home tenant) |

🎯 **Exam tip:** A B2B guest's UPN always has the form `<theiremail>_<theirdomain>#EXT#@<yourtenant>.onmicrosoft.com`. The `#EXT#` substring is what dynamic group rules and CA conditions look for.

### Create a user via Microsoft Graph PowerShell

```powershell
Connect-MgGraph -Scopes "User.ReadWrite.All"

$password = @{
    Password = "Tempor@ry1!"
    ForceChangePasswordNextSignIn = $true
}

New-MgUser -DisplayName "Alice Doe" `
           -UserPrincipalName "alice.doe@contoso.com" `
           -MailNickname "alice.doe" `
           -AccountEnabled:$true `
           -PasswordProfile $password `
           -Department "Engineering" `
           -JobTitle "Senior Software Engineer" `
           -UsageLocation "US"   # required before assigning licenses
```

🚨 **Trap:** **`UsageLocation`** must be set before you can assign most M365 / Entra licenses. The exam loves this — if a scenario says "license assignment fails," check usage location first.

### Bulk import via CSV (portal)

Entra portal → Users → Bulk operations → Bulk create → upload a CSV with columns:
`Name, Username, InitialPassword, Block sign-in (Yes/No), FirstName, LastName, JobTitle, Department, UsageLocation, OfficeLocation, MobilePhone, ...`

For programmatic bulk (preferred over the portal upload for >500 rows):

```powershell
Import-Csv users.csv | ForEach-Object {
    New-MgUser -DisplayName $_.DisplayName `
               -UserPrincipalName $_.UPN `
               -MailNickname ($_.UPN -split '@')[0] `
               -AccountEnabled:$true `
               -PasswordProfile @{
                   Password = "Tempor@ry1!"
                   ForceChangePasswordNextSignIn = $true
               } `
               -UsageLocation $_.Country `
               -Department $_.Department
}
```

---

## 👥 Two Group Types × Three Membership Types

| Group type | What it does | Where it surfaces |
|------------|--------------|-------------------|
| **Security group** | RBAC + CA targeting + app assignment | Entra ID only |
| **Microsoft 365 group** | Adds a shared mailbox + SharePoint + Teams | Entra ID + M365 workloads |

| Membership | Who joins how |
|------------|---------------|
| **Assigned** | Admin adds/removes members manually |
| **Dynamic User** | Membership rule evaluated against user attributes |
| **Dynamic Device** | Membership rule evaluated against device attributes |

🔥 **Dynamic groups require Entra ID P1.** That's a constant exam gotcha.

A group can be **one** combination — e.g. "Security + Dynamic User" or "M365 + Assigned." You cannot have a single group with dynamic-user AND dynamic-device rules.

### Dynamic membership rule syntax

```text
# All users in the Sales department
(user.department -eq "Sales")

# All non-guest users in Spain
(user.userType -ne "Guest") and (user.country -eq "Spain")

# All Windows 11 corporate devices
(device.deviceOSType -eq "Windows") and (device.deviceOSVersion -startsWith "10.0.22")

# All accounts with manager attribute matching a specific UPN
(user.manager.userPrincipalName -eq "jane.doe@contoso.com")

# Members of a multi-value extension attribute (e.g. project codes)
(user.extensionAttribute7 -contains "PROJ-X")
```

🎯 **Operators you'll see on the exam:** `-eq`, `-ne`, `-startsWith`, `-contains`, `-match` (regex), `-in`, `-notIn`, `-any`, `-all`.

### Create a security group with a dynamic user rule

```powershell
Connect-MgGraph -Scopes "Group.ReadWrite.All"

New-MgGroup -DisplayName "Sales-Dynamic" `
            -MailEnabled:$false `
            -MailNickname "sales-dyn" `
            -SecurityEnabled:$true `
            -GroupTypes @("DynamicMembership") `
            -MembershipRule '(user.department -eq "Sales")' `
            -MembershipRuleProcessingState "On"
```

### Convert assigned group to dynamic (and back)

You can convert *Security* groups between assigned and dynamic; M365 groups, you can switch membership type but not group type. Conversion is **disruptive** — all manually added members are flushed when switching to dynamic.

---

## 💳 Group-Based Licensing

Assign a Microsoft 365 / Entra license SKU to a group; every member auto-receives the license. When they leave the group, the license is reclaimed.

| Concept | Behavior |
|---------|----------|
| **License processing time** | Usually <1 hour for small groups; can take several hours for large groups |
| **Required role** | License Administrator (or User Admin with license scope) |
| **Conflict resolution** | If a SKU is over-allocated, Microsoft processes in user-creation order; later users may not get the license |
| **License inheritance** | A user in multiple licensing groups gets the union of service plans (no conflicts unless SKU exceeded) |

```powershell
# Assign Office 365 E3 to a group
$skuId = (Get-MgSubscribedSku | Where-Object { $_.SkuPartNumber -eq "ENTERPRISEPACK" }).SkuId

Set-MgGroupLicense -GroupId <group-id> -AddLicenses @(@{SkuId = $skuId}) -RemoveLicenses @()
```

🚨 **Trap:** Group-based licensing **requires Entra ID P1**. Same as dynamic groups. Free tier = manual license assignment per user.

---

## 🤝 B2B Collaboration

When you invite an external partner, Entra sends them an invitation email. They redeem it by signing in with their existing identity (Microsoft account, Google account, their org's Entra ID, or a one-time passcode email).

### Invite a guest via portal

Entra portal → Users → New user → **Invite external user** → enter email + optional groups + optional welcome message.

### Invite via PowerShell

```powershell
Connect-MgGraph -Scopes "User.Invite.All"

New-MgInvitation -InvitedUserEmailAddress "alice@partner.com" `
                 -InvitedUserDisplayName "Alice (Partner)" `
                 -InviteRedirectUrl "https://myapps.microsoft.com" `
                 -SendInvitationMessage:$true `
                 -InvitedUserMessageInfo @{
                     CustomizedMessageBody = "Welcome to the Contoso project."
                 }
```

### External collaboration settings

Tenant-wide controls (Entra portal → External Identities → External collaboration settings):

| Setting | What it does |
|---------|--------------|
| **Guest user access** | Three tiers: Restricted, Same as members, Limited (default for new tenants) |
| **Guest invite settings** | Anyone, Member users only, Specific admin roles only, No one |
| **Self-service sign-up via user flows** | Enable user flows for unmanaged tenants |
| **Email one-time passcode** | Enable/disable OTP fallback for guests without an existing IdP |
| **Collaboration restrictions** | Allow/Deny lists of partner domains |

🎯 **Exam tip:** The most exam-tested setting is **"Guest invite settings"**. Default is "Anyone in the org can invite." Lock down to "Member users only" or "Specific admin roles" for sensitive tenants.

### Cross-tenant access settings (CTAS)

Per-partner inbound/outbound rules — more granular than the tenant-wide collaboration settings:

| Tab | Controls |
|-----|----------|
| **Default settings** | Baseline for all unspecified partners |
| **Organizational settings** | Override per partner (e.g. "Trust Acme's MFA + compliant device claims") |
| **Microsoft cloud settings** | Cross-cloud (commercial ↔ Gov, ↔ China) |

CTAS is where you enable **B2B direct connect** (Teams shared channels — partner's users appear in your Teams without a guest invitation). B2B direct connect requires explicit mutual enablement on both sides.

🔥 **MEMORIZE:** **B2B collaboration** = guest user object in your tenant. **B2B direct connect** = no guest object; cross-tenant Teams shared channels via mutual trust.

---

## 📋 Terms of Use

Upload a PDF, attach it to a Conditional Access policy, and users must accept it before accessing the target app(s). Acceptance is logged (date, user, IP).

| Use case | Example policy |
|----------|----------------|
| All users sign a code-of-conduct on first sign-in | TOU policy on All cloud apps |
| Guests must accept NDA before accessing project SharePoint | TOU policy on SharePoint Online, guests only |
| Periodic re-acceptance every 12 months | TOU with frequency setting |

```powershell
# Create a Terms of Use via Graph
$tou = @{
  DisplayName = "Contoso Code of Conduct"
  Files = @(@{
    DisplayName = "Code of Conduct EN"
    Language = "en"
    IsDefault = $true
    FileData = @{
      Data = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes("./CoC.pdf"))
    }
  })
}
New-MgIdentityGovernanceTermsOfUseAgreement -BodyParameter $tou
```

Attach the resulting `agreementId` to a CA policy's grant controls.

---

## 🎁 Entitlement Management (Access Packages)

**Entitlement management** is the *self-service* layer for access. Instead of admins assigning groups, users **request** an **access package** that bundles whatever they need for a job role / project.

| Concept | What it is |
|---------|------------|
| **Catalog** | Container of resources (groups, apps, SharePoint sites) + access packages, delegated to catalog owners |
| **Access package** | A bundle of resources + assignment policies (who can request, who approves, time limit) |
| **Assignment policy** | Rules: "Anyone in Group X can request, manager + IT must approve, 90 day expiry" |
| **Connected organization** | An external Entra tenant your access packages can grant access to (B2B guests provisioned automatically) |

### Example access package: "Project Marlin"

- **Resources**: Security group `marlin-team`, Enterprise app `marlin-dashboard`, SharePoint site `Marlin Docs`
- **Assignment policy 1**: For internal employees → "Anyone in Engineering can request, manager approves, 180 day expiry, quarterly access review"
- **Assignment policy 2**: For external partners → "Sponsor approval + project lead approval, 90 day expiry, monthly access review"

🚨 **Trap:** Entitlement management **requires Entra ID P2** (or Microsoft Entra ID Governance SKU for custom extensions).

---

## 🔁 Lifecycle Workflows (Microsoft Entra ID Governance)

Automate the **joiner / mover / leaver** lifecycle by running pre-built tasks against users matching a scope + trigger.

| Trigger | Example tasks |
|---------|---------------|
| **Joiner** (`employeeHireDate` is approaching) | Send welcome email; generate a Temporary Access Pass; add to default groups; assign manager |
| **Mover** (`employeeOrgData.division` changes) | Remove from old groups; add to new groups; notify manager; trigger access review |
| **Leaver** (`employeeLeaveDateTime` is past) | Disable account; remove all group memberships; revoke sessions; delete after grace period |

```text
Workflow: "30 days before hire"
  Scope: All users where employeeHireDate ≤ 30 days from now
  Tasks:
    1. Generate Temporary Access Pass (TAP) valid 8 hours
    2. Send welcome email to user's personal email
    3. Add to "All Employees" security group
    4. Send notification to manager
```

🔥 **MEMORIZE:** Lifecycle Workflows require the **Microsoft Entra ID Governance** add-on SKU. It runs on top of P2 but is licensed separately.

---

## 🏛️ Administrative Units (AUs)

Scope Entra admin rights to a subset of users/groups/devices — e.g. "Helpdesk Admin, but only for the Spain region."

| Concept | Detail |
|---------|--------|
| **AU contents** | Users, groups, devices (can be assigned, dynamic-user, or dynamic-device for membership) |
| **Roles supporting AU scope** | User Admin, Helpdesk Admin, Authentication Admin, Password Admin, Groups Admin, License Admin, and a growing subset |
| **Nested AUs** | Not supported (flat hierarchy) |
| **Default limit** | 100 AUs per tenant (raisable via support) |

```powershell
# Create an AU for the Spain region
New-MgDirectoryAdministrativeUnit -DisplayName "Spain Region" `
                                  -Description "Spain employees & devices"

# Add users (manual)
Add-MgDirectoryAdministrativeUnitMember -AdministrativeUnitId <au-id> `
                                        -BodyParameter @{
                                            "@odata.id" = "https://graph.microsoft.com/v1.0/users/<user-id>"
                                        }

# Scope a User Administrator to this AU
New-MgRoleManagementDirectoryRoleAssignment -PrincipalId <user-id> `
                                            -RoleDefinitionId <userAdminRoleId> `
                                            -DirectoryScopeId "/administrativeUnits/<au-id>"
```

🎯 **Exam tip:** AU scoping is what you reach for when "Helpdesk should only manage Spain users." Without AUs, Helpdesk Admin is tenant-wide.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Dynamic groups work in Free" | ❌ Requires P1 |
| "Group-based licensing works in Free" | ❌ Requires P1 |
| "Entitlement management works in P1" | ❌ Requires P2 |
| "Lifecycle Workflows are part of P2" | ❌ Requires Entra ID Governance SKU |
| "A user can have any number of licenses with no constraints" | ❌ `UsageLocation` must be set first |
| "Guest sign-in shows the guest's email as UPN" | ❌ UPN is `<email>_<domain>#EXT#@<tenant>.onmicrosoft.com` |
| "AUs can be nested" | ❌ Flat hierarchy |
| "B2B and B2B direct connect are the same thing" | ❌ Different — direct connect has no guest object |
| "Removing a B2B guest is reversible" | ❌ Reinvitation re-creates a *new* object with new IDs |
| "Dynamic group rules are real-time" | ❌ Processed asynchronously (minutes to hours for large rules) |

---

## 🧪 Task-Sequencing Practice: Onboard a New Vendor With B2B + Access Package

**Order these steps to bring a new vendor "Acme Consulting" onboard with self-service request to a project workspace.**

The correct order:

1. ✅ Add `acme.com` to the **allow list** in External collaboration settings.
2. ✅ Configure **Cross-tenant access settings** to trust Acme's MFA claim (so vendors don't re-MFA).
3. ✅ Create a **catalog** in Entitlement Management → "Acme Project."
4. ✅ Add resources to the catalog: project security group, SharePoint site, Teams.
5. ✅ Add `acme.com` as a **connected organization** in entitlement management.
6. ✅ Create an **access package** in the catalog with two assignment policies (internal sponsor approval; auto-provision guest).
7. ✅ Configure a **quarterly access review** on the access package.
8. ✅ Apply a **Terms of Use** to the access package (Acme staff must sign NDA on first activation).
9. ✅ Apply a **Conditional Access policy** requiring MFA + compliant device for the project workspace apps (guests included).
10. ✅ Share the access-package URL with Acme's project lead.

⚠️ Skipping step 5 forces individual B2B invitations later — defeats the self-service value of access packages.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Member user** | Internal user, `userType=Member`, full directory permissions |
| **Guest user** | External B2B user, `userType=Guest`, restricted directory permissions |
| **External member** | Cross-tenant sync'd user with member-like perms |
| **`#EXT#`** | The substring in a guest UPN |
| **Dynamic group** | Group membership computed from a rule on user/device attributes (P1) |
| **Group-based licensing** | License a group → members inherit the license (P1) |
| **External collaboration settings** | Tenant-wide guest invite + access controls |
| **Cross-tenant access settings (CTAS)** | Per-partner inbound/outbound B2B + B2B direct connect rules |
| **B2B direct connect** | Cross-tenant Teams shared channels without guest user creation |
| **Terms of Use** | PDF agreement enforced via CA, with acceptance audit |
| **Entitlement Management** | Self-service access package request system (P2) |
| **Access package** | Bundle of resources + assignment policies (in a catalog) |
| **Catalog** | Container of resources + access packages, delegated to non-admins |
| **Connected organization** | External tenant the access packages can grant to |
| **Lifecycle Workflow** | Automated joiner/mover/leaver task flow (Entra ID Governance) |
| **Administrative Unit (AU)** | Scope container restricting Entra roles to a subset of objects |
| **UsageLocation** | Two-letter country code required before license assignment |

---

## ✅ Module 2 Summary

You now know:

- 👤 The three user types and the `#EXT#` guest UPN format
- 👥 Two group types × three membership types, and that dynamic + group-based licensing need P1
- 🤝 B2B collaboration vs B2B direct connect, and where each lives
- 🌐 External collaboration settings vs Cross-tenant access settings
- 📋 Terms of Use, attached via Conditional Access
- 🎁 Entitlement management: catalogs → access packages → assignment policies (P2)
- 🔁 Lifecycle Workflows (Entra ID Governance SKU)
- 🏛️ Administrative Units for scoped role assignment
- 🚨 The 10 most common traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Authentication — MFA & Passwordless](../Module-03-Authentication/Reading.md)

---

## 📊 Case Study — Walmart's B2B Cleanup (2021–2023)

**Situation.** Walmart's enterprise Entra tenant supports ~2.3 million associates plus tens of thousands of supplier, agency, and contractor identities. By 2021 the supplier-collaboration estate had grown organically: 400,000+ B2B guest objects, many unused for >2 years, several with elevated SharePoint or Teams roles. A security audit identified 1,800 guests with privileged group memberships from acquisitions Walmart had divested — three with effective Owner access via inherited group nesting.

**Decision.** Walmart's IAM team (publicly described at Microsoft Ignite 2023) implemented a four-step governance program:

1. **Catalog all B2B**. Used `Get-MgUser -Filter "userType eq 'Guest'" -All` + Microsoft Graph data exports to Power BI for inventory by sponsor, last sign-in, role memberships.
2. **Migrate ad-hoc access to access packages**. New supplier engagements onboarded via entitlement management with sponsor approval, time-bound assignments (default 90 days), and mandatory access reviews.
3. **Bulk inactive disablement**. Guests with zero sign-ins for 180 days disabled (account status, not deletion — to preserve audit history); 365-day inactive guests deleted after sponsor outreach.
4. **Lifecycle Workflows for joiner/leaver**. Once Entra ID Governance launched (GA mid-2023), Walmart wired employeeLeaveDateTime to a leaver workflow that disables, revokes sessions, removes group memberships, and notifies the sponsor.

**Outcome.** Per Walmart's Ignite session and a follow-up TechCommunity post (2023):

- Guest population dropped from ~400K to ~120K (active) within 12 months.
- Average days from "supplier engagement ended" to "account disabled" fell from 187 days to under 2.
- Number of unsponsored guest accounts (no manager / no project owner) dropped from 28,000 to <300.
- SOC 2 / PCI auditor findings tied to dormant identities went to zero in the 2023 audit.

**Lesson for the exam / for practitioners.** Walmart's program is a near-perfect mapping of SC-300 governance topics: B2B collaboration + entitlement management + access reviews + Lifecycle Workflows + Conditional Access on guests, all tied to a sponsor model. When SC-300 asks "how should this org govern thousands of supplier identities," the answer is **catalog + access package + sponsor-approved assignment policy + time-bound + access review + leaver workflow** — not "have admins invite people."

**Discussion (Socratic).**
- **Q1.** Walmart kept disabled inactive accounts in audit-only state for 180 days before deletion. Is this overcautious? Build the case for and against immediate deletion; what audit/legal/SOX considerations apply?
- **Q2.** Walmart used Power BI for inventory — Microsoft also ships an **inactive user report** in the portal. Why did they need Power BI on top? What identity hygiene questions does Power BI answer that the built-in report doesn't?
- **Q3.** A counter-argument: Walmart could have eliminated all B2B and forced suppliers to use a private vendor portal app. Build the case for and against. What does Microsoft's own internal practice (~1M supplier guests) suggest is the right path?

---

> **Where this leads.**
> - Inside this course: Module 3 layers MFA + passwordless onto these users; Module 4 layers CA + Identity Protection; Module 6 deepens entitlement management + access reviews.
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) covers RBAC; [`09-CompTIA-Security-Plus`](../../09-CompTIA-Security-Plus/README.md) frames identity governance as part of administrative controls.
> - Practice: Practice Exam 1 has ~6 questions from this module (user types, UPN format, dynamic rules, AU scoping, entitlement mgmt licensing).

---

## 💬 Discussion — Socratic prompts

1. **Dynamic groups vs assigned groups.** A 4,000-person company can express "Engineering team" as a dynamic group (`department=Engineering`) or as an assigned group maintained manually. Defend both — when does each break? What's the operational cost of "department" being inaccurate by 5%?
2. **B2B collaboration vs B2B direct connect.** Both let Teams shared channels span tenants. When is the direct connect path the right answer, and what does it cost in governance terms (no guest object = no group membership = no Conditional Access targeting)?
3. **Entitlement management for internal users.** Most orgs use entitlement management exclusively for external partners. Build the case for using access packages internally — what does it replace, and what's the cost of the cultural shift from "ticket the help desk" to "request via access portal"?
4. **AU vs separate tenant.** A multinational asks: "Should we give Spain its own Entra tenant or just use an Administrative Unit?" Walk through the decision matrix — when does multi-tenant become the right answer, and what's the cost?
5. **Lifecycle Workflows pricing.** Lifecycle Workflows are a separate SKU (Entra ID Governance) on top of P2. Make the CFO-friendly business case for the upcharge; quantify "manual leaver process" labor and identity-incident risk.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Entra users overview](https://learn.microsoft.com/entra/fundamentals/users-default-permissions)
- 📖 [Dynamic membership rules for groups](https://learn.microsoft.com/entra/identity/users/groups-dynamic-membership)
- 📖 [Group-based licensing](https://learn.microsoft.com/entra/identity/users/licensing-groups-assign)
- 📖 [B2B collaboration overview](https://learn.microsoft.com/entra/external-id/what-is-b2b)
- 📖 [Cross-tenant access settings reference](https://learn.microsoft.com/entra/external-id/cross-tenant-access-overview)
- 📖 [Entitlement management overview](https://learn.microsoft.com/entra/id-governance/entitlement-management-overview)
- 📖 [Lifecycle Workflows](https://learn.microsoft.com/entra/id-governance/what-are-lifecycle-workflows)
- 📖 [Administrative units in Entra ID](https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units)
