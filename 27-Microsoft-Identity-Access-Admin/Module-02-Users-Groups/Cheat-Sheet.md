# 📋 Module 2 Cheat Sheet: Users, Groups & External Identities

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 👤 The Three User Types

| Type | `userType` | UPN |
|------|------------|-----|
| Member (cloud-only) | `Member` | `alice@contoso.com` |
| Member (synced) | `Member` | `alice@contoso.com` |
| Guest (B2B) | `Guest` | `alice_partner.com#EXT#@contoso.onmicrosoft.com` |
| External member (cross-tenant) | `Member` (homed elsewhere) | their UPN |

🔥 **`UsageLocation`** required before license assignment.

---

## 👥 Groups

| Group type | Use case |
|------------|----------|
| **Security** | RBAC + CA targeting + app assignment |
| **Microsoft 365** | Adds mailbox + SharePoint + Teams |

| Membership | Notes |
|------------|-------|
| Assigned | Manual add/remove |
| Dynamic User | Rule on user attributes (**P1**) |
| Dynamic Device | Rule on device attributes (**P1**) |

**Dynamic rule examples:**
```
(user.department -eq "Sales")
(user.userType -ne "Guest") and (user.country -eq "Spain")
(device.deviceOSType -eq "Windows") and (device.deviceOSVersion -startsWith "10.0.22")
```

Operators: `-eq -ne -startsWith -contains -match -in -notIn -any -all`

---

## 💳 Group-Based Licensing

- **Requires P1**
- Add license SKU to group → members auto-receive
- Processing time: minutes to hours
- SKU exhaustion = later users miss out (creation-order resolution)
- License Admin role can manage

---

## 🤝 B2B vs B2B Direct Connect (MEMORIZE)

| | **B2B Collaboration** | **B2B Direct Connect** |
|---|---|---|
| Guest user object? | ✅ Yes | ❌ No |
| Where users sign in | Your tenant | Their home tenant |
| Use case | Files, apps, project workspaces | Teams shared channels |
| RBAC / CA target | Yes (guest is in your directory) | Limited (no object) |
| Enabled via | Invitation | Cross-tenant access settings (mutual) |

---

## 🌐 External Collaboration Settings vs CTAS

| | **External Collaboration Settings** | **Cross-Tenant Access Settings** |
|---|---|---|
| Scope | Tenant-wide defaults | Per-partner overrides |
| Configures | Who can invite, guest perms, OTP, allow/deny domains | Inbound/outbound rules per partner, B2B direct connect, MFA/device trust |

---

## 📋 Terms of Use (TOU)

- Upload PDF → attach to CA policy
- Acceptance is logged
- Per-language documents
- Optional periodic re-acceptance

---

## 🎁 Entitlement Management Vocabulary (P2)

```
CATALOG
  └── ACCESS PACKAGES
        └── ASSIGNMENT POLICIES
              ├── Who can request
              ├── Who approves
              ├── Expiration / time bound
              └── Access review schedule

  └── CONNECTED ORGANIZATIONS
        (external Entra tenants that can be assigned packages)
```

---

## 🔁 Lifecycle Workflows (Entra ID Governance SKU)

| Trigger | Typical tasks |
|---------|---------------|
| **Joiner** (`employeeHireDate` ≤ X days) | Generate TAP; send welcome email; add to default groups |
| **Mover** (`employeeOrgData.division` changes) | Remove old groups; add new groups; notify manager |
| **Leaver** (`employeeLeaveDateTime` past) | Disable account; remove groups; revoke sessions; delete after grace |

---

## 🏛️ Administrative Units

- **Flat** (no nesting)
- Default 100 per tenant (raisable)
- Scope: User Admin, Helpdesk Admin, Authentication Admin, Password Admin, Groups Admin, License Admin
- Use: "Helpdesk for Spain region only"

---

## 🚦 Vendor Onboarding Checklist

```
1. External Collab Settings → allow `acme.com`
2. Cross-Tenant Access Settings → trust Acme's MFA claim
3. Create catalog "Acme Project"
4. Add resources (groups, apps, SharePoint)
5. Add `acme.com` as Connected Organization
6. Create access package + assignment policies
7. Configure quarterly access review
8. Apply Terms of Use to package
9. Apply CA: MFA + compliant device for project apps
10. Share access-package URL with Acme project lead
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Set `UsageLocation` before assigning licenses"
- ✅ "Use Administrative Unit to scope Helpdesk Admin to a region"
- ✅ "Entitlement management with sponsor approval + time-bound + access review"
- ✅ "Use Cross-Tenant Access Settings for per-partner rules"
- ✅ "B2B direct connect for Teams shared channels without guest objects"

When you see these, often **wrong**:

- ❌ "Dynamic groups work in Free tier"
- ❌ "Lifecycle Workflows ship with P2"
- ❌ "B2B and B2B direct connect are the same"
- ❌ "AUs can be nested"
- ❌ "Removing and re-inviting a guest preserves all assignments"

---

## ⚠️ Anti-Patterns

- ❌ Letting "Anyone in the org" invite guests in a sensitive tenant
- ❌ Hundreds of dormant B2B guests with no sponsor
- ❌ Standing-Owner access for vendors (no PIM, no access review)
- ❌ Dynamic group rule referencing an attribute nobody populates (`user.department` empty)
- ❌ Bulk import without setting `UsageLocation` → licenses silently fail

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. UPN format of a B2B guest from `partner.com`? ___
2. What's required before license assignment? ___
3. Dynamic groups → minimum license? ___
4. Entitlement management → minimum license? ___
5. Lifecycle Workflows → which SKU? ___
6. B2B direct connect creates a guest object? Y/N ___

---

➡️ [Module 3: MFA & Passwordless](../Module-03-Authentication/Reading.md)
