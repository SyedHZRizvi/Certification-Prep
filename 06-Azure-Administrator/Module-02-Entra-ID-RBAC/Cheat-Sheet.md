# 📋 Module 2 Cheat Sheet: Entra ID & RBAC

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🎫 Entra ID License Tiers (KNOW WHAT EACH UNLOCKS)

| Tier | Headline features |
|------|-------------------|
| **Free** | Users, groups, B2B, **Security defaults** |
| **P1** | **Conditional Access**, **dynamic groups**, self-service password reset, group-based licensing |
| **P2** | **Identity Protection** (risk policies), **PIM**, access reviews, entitlement mgmt |

🧠 **C-A → P1, Risk/PIM → P2**

---

## 👥 Group Types & Membership

| Group type | Membership |
|------------|------------|
| **Security** (RBAC + CA targeting) | Assigned / Dynamic User / Dynamic Device |
| **Microsoft 365** (+ mailbox/SharePoint/Teams) | Assigned / Dynamic User only |

Dynamic groups need **P1**.

---

## 🛡️ Conditional Access at a Glance

```
SIGNALS                  →   DECISION              →   CONTROLS
(user, app, device,          allow / block /          MFA, compliant device,
 location, risk,             require controls)        Hybrid join, app protection,
 client app type)                                     terms of use
```

- **Report-only mode** to test policies first
- Common policies: Block legacy auth · MFA for admins · Block geo · Compliant device for admin portal

---

## 🔑 Authentication Methods (Weakest → Strongest)

```
SMS / Voice / Email OTP   <   Authenticator push (with number matching)   <   FIDO2 / Windows Hello
```

🔥 Number matching = defeats MFA fatigue. **TAP** = onboarding-only short passcode.

---

## 🧑‍✈️ The 4 Built-In Roles to Memorize

| Role | Can do |
|------|--------|
| **Owner** | Everything + assign roles |
| **Contributor** | Everything except role assignments |
| **Reader** | Read only |
| **User Access Administrator** | Only manage role assignments |

---

## 🪟 Control Plane vs Data Plane

| Plane | Examples |
|-------|----------|
| **Control** | Storage Account Contributor, VM Contributor, Owner |
| **Data** | Storage Blob Data Reader/Contributor/Owner; Key Vault Secrets User |

🔥 A Contributor on a storage account **cannot** read blobs without a data role.

---

## ⏰ PIM Cheat Sheet (P2)

- **Eligible** → must activate · **Active** → permanent
- Activation: **1–8 hrs**, requires MFA, optionally approval + ticket #
- Access reviews recommended every 30/60/90 days
- Roles to PIM: Global Admin, Privileged Role Admin, Security Admin, UAA, Owner

---

## 🤖 Identity Types for Code

| Type | Use when |
|------|---------|
| **System-assigned MI** | Workload tied to one Azure resource |
| **User-assigned MI** | Shared across resources or surviving resource deletion |
| **Service principal** | External CI/CD or non-Azure workload |
| **Hard-coded secret** | ❌ Never |

---

## 🤝 B2B vs External ID (B2C)

| | B2B | External ID (B2C) |
|---|-----|--------------------|
| Audience | Partners, contractors | Consumers |
| Tenant | Guests in *your* tenant | Separate tenant kind |
| RBAC | Yes | No |
| Social IdPs | Limited | Yes (Google, Facebook, etc.) |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Use a managed identity"
- ✅ "Assign at the smallest scope that satisfies the requirement"
- ✅ "Enable Conditional Access with report-only mode first"
- ✅ "Use PIM for just-in-time elevation"
- ✅ "Assign the data-plane role explicitly"

Usually **wrong**:

- ❌ "Give them Global Admin"
- ❌ "Hard-code the service principal secret"
- ❌ "Use per-user MFA"
- ❌ "Create a Deny role assignment"
- ❌ "Tags inherit, so do groups" (group nesting works but isn't inheritance)

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Permanent Global Admins everywhere
- ❌ Sharing service principal secrets in code/Git
- ❌ Conditional Access without exclusion for break-glass accounts
- ❌ Granting Contributor at the subscription when an RG would do
- ❌ Using per-user MFA in 2026

---

## 📐 One-Line Decision Matrix

| Need | Feature | Tier |
|------|---------|------|
| MFA + sign-in policies | Conditional Access | P1 |
| Risk-based "if leaked credentials → block" | Identity Protection | P2 |
| JIT role activation with approval | PIM | P2 |
| "Auto-add HR-imported finance hires to Finance group" | Dynamic groups | P1 |
| "Country admin manages only that country's users" | Administrative Units | P1+ |
| Periodic re-justification of access | Access Reviews | P2 |
| "Guest reviewer can read 1 RG for 2 weeks" | B2B + PIM eligible + access review | P2 |
| "App with no secret hits Key Vault" | Managed Identity + Key Vault role | Any |
| "Customers sign up for retail app with Google ID" | Entra External ID (B2C) | External tenant kind |

---

## ✏️ Quick Self-Check

1. P1 vs P2, what feature each unlocks? ___
2. Control plane role vs data plane role example? ___
3. Two roles that can assign other roles? ___
4. PIM eligible vs active? ___
5. What does Authenticator number matching prevent? ___

---

➡️ [Module 3: Storage Accounts & Blobs](../Module-03-Storage-Accounts-Blobs/Reading.md)
