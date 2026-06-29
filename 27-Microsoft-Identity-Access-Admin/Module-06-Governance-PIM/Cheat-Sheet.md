# 📋 Module 6 Cheat Sheet: Identity Governance & PIM (Product Information Management)

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛂 PIM Mental Model

```
ELIGIBLE                       →  ACTIVATION  →     ACTIVE                →   EXPIRATION
(can JIT (Just-In-Time)-activate; inactive)      (MFA (Multi-Factor Authentication) + just.)     (limited duration)         (auto deactivate)
                                  (optional approval)
                                  (optional ticket)
```

| Concept | Detail |
|---------|--------|
| Eligible | Inactive, can JIT-activate |
| Active | Currently on (time-bound or permanent) |
| Default max activation | 8 hours (configurable per role) |
| User self-approval | ❌ Server-side blocked |
| License | **Entra ID P2** |

---

## 🛡️ Three PIM Products

| Product | Manages |
|---------|---------|
| PIM for **Entra Roles** | Directory roles (GA, User Admin, etc.) |
| PIM for **Azure Resources** | Azure RBAC (Role-Based Access Control) roles |
| PIM for **Groups** | Membership of **role-assignable** groups (set at creation) |

---

## ⚙️ PIM Activation Settings (per role)

| Setting | Recommendation |
|---------|----------------|
| Max activation duration | 4–8h |
| Require MFA on activation | ✅ Yes |
| Require justification | ✅ Yes |
| Require ticket information | ✅ Yes (auditor-friendly) |
| Require approval | ✅ Yes for high-privilege roles |
| Approvers | Specific group, ≥2 people |

---

## 🔍 Access Reviews

| Target | Frequency examples |
|--------|---------------------|
| Group membership | Quarterly |
| App role assignments | Annual |
| Entra role assignments | Quarterly (privileged) |
| Azure RBAC assignments | Quarterly (privileged) |
| Access package assignments | Aligned to package policy |
| Inactive users | Monthly (Governance feature) |

**Auto-apply if no response:**
- Privileged roles → Remove (safe default)
- Group memberships → Approve / Take no action (varies)

**ML recommendations:** "user inactive 90 days → recommend Remove."

---

## 🎁 Entitlement Management

```
CATALOG (delegated owner)
  ├── RESOURCES (groups, apps, sites)
  ├── ACCESS PACKAGES
  │     ├── ASSIGNMENT POLICY 1 (internal: manager approve, 180d, quarterly review)
  │     └── ASSIGNMENT POLICY 2 (external: sponsor + security approve, 90d, monthly review)
  └── CONNECTED ORGANIZATIONS (external Entra tenants)

CUSTOM EXTENSIONS = Logic Apps on package events (Governance SKU (Stock Keeping Unit))
```

---

## 🔁 Lifecycle Workflows (Governance SKU)

| Trigger attribute | Workflow type | Example tasks |
|-------------------|---------------|---------------|
| `employeeHireDate` -7 days | Pre-Hire | TAP, welcome email, onboarding group |
| `employeeHireDate` today | New Hire | Default groups, manager link, training |
| `employeeOrgData.division` changed | Mover | Remove old groups, add new, notify manager |
| `employeeLeaveDateTime` today | Leaver | Block sign-in, revoke sessions, remove app roles |
| `employeeLeaveDateTime` -30 days | Post-Departure | Delete account |

Schedule: daily by default; on-demand for testing.

---

## 🪦 Break-Glass + PIM

- Cloud-only Global Admin × 2
- **Active permanent** (NOT in PIM)
- **Excluded from PIM-enforcing CA policies**
- Excluded from EVERY CA policy
- FIDO2 MFA
- Use triggers Sentinel/KQL alert
- Quarterly test sign-in

---

## 🚦 Convert Standing GA → PIM Eligible

```
1. Inventory current GAs (Get-MgDirectoryRoleMember)
2. Confirm P2 license per admin
3. Configure PIM settings (MFA + justification + approval + ticket)
4. Create 2 cloud-only break-glass GAs (active permanent; EXCLUDED from PIM)
5. Add each admin as Eligible GA (max 6mo end date)
6. Remove their permanent active GA assignment
7. Pilot activation flow with 2 admins
8. Roll out to remaining
9. Configure quarterly access review (manager reviewer, auto-Remove)
10. Sentinel alert on every GA activation (esp. off-hours)
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "PIM Eligible + JIT activation"
- ✅ "Require MFA + justification + approval on activation"
- ✅ "Quarterly access review with auto-Remove on no response"
- ✅ "Access package in catalog with assignment policies"
- ✅ "Lifecycle Workflow on `employeeHireDate` / `employeeLeaveDateTime`"
- ✅ "Connected organization for cross-tenant access packages"

When you see these, often **wrong**:

- ❌ "PIM in P1"
- ❌ "User self-approves activation"
- ❌ "Lifecycle Workflows are part of P2"
- ❌ "PIM for Groups works on any group"
- ❌ "Break-glass account managed by PIM"
- ❌ "Permanent active GA is fine if MFA is on"

---

## ⚠️ Anti-Patterns

- ❌ Long-lived permanent GA assignments
- ❌ Activation duration set to 24h+ (defeats JIT)
- ❌ Approval list of one (single point of failure)
- ❌ Break-glass in PIM
- ❌ Access reviews that nobody acts on (creates audit theater)
- ❌ Lifecycle Workflow on schedule-only with no on-demand testing

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. PIM license tier: ___
2. Default activation duration: ___
3. PIM for Groups requires group to be: ___
4. Access review auto-apply default for privileged roles: ___
5. Lifecycle Workflows license: ___
6. Can a user self-approve activation? ___ Why?

---

➡️ [Module 7: Hybrid Identity](../Module-07-Hybrid-Identity/Reading.md)
