# 📋 Module 1 Cheat Sheet: Subscriptions & Resource Hierarchy

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🏛️ The 4-Level Hierarchy

```
TENANT (Entra ID)
   └─ MANAGEMENT GROUPS  (up to 6 levels deep, 10K children)
        └─ SUBSCRIPTIONS  (billing + quota boundary, 1 tenant at a time)
             └─ RESOURCE GROUPS  (lifecycle + RBAC (Role-Based Access Control) scope)
                  └─ RESOURCES  (VM (Virtual Machine), NSG, storage…)
```

🧠 **TMS (Transportation Management System)-RR:** Tenant → Mgmt group → Subscription → Resource group → Resource

---

## 📜 Inheritance Rules

| Thing | Inherits down? | Override? |
|-------|----------------|-----------|
| RBAC (role assignments) | ✅ Yes additive | No "deny" assignments combine |
| Azure Policy | ✅ Yes | Use **exemption**, not counter-policy |
| Resource Locks | ✅ Yes (down) | Remove at scope where applied |
| Tags | ❌ NO | Enforce via `Modify` policy |

---

## 🚚 Move Resources Checklist

```
1. Same Entra ID tenant?     ✅
2. Resource type supports move?  ✅ (check support matrix)
3. Remove resource locks      ✅
4. Run validateMoveResources  ✅
5. Execute az resource move   ✅
6. Re-apply tags / RBAC / locks at destination ✅
7. Update hardcoded references (Key Vault, SAS)  ✅
```

---

## 🏷️ Tags Quick Reference

| Limit | Value |
|-------|-------|
| Tags per resource | 50 |
| Name length | 512 (256 for storage) |
| Value length | 256 |
| Auto-inherit | ❌ NO |

Built-in policies to know:

- **Require a tag and its value on resources**
- **Inherit a tag from the resource group** (Modify effect)
- **Append a tag and its value** (Append effect)

---

## 📜 Azure Policy Effects (MEMORIZE)

| Effect | When |
|--------|------|
| **Deny** | Block create/update |
| **Audit** | Allow, flag as non-compliant |
| **Append** | Add property at create only |
| **Modify** | Add/update tags on new & existing |
| **DeployIfNotExists** (DINE) | Auto-remediate via ARM deploy |
| **AuditIfNotExists** (AINE) | Flag if related resource missing |

---

## 🔒 Resource Locks

| Type | Effect | Use when |
|------|--------|----------|
| **CanNotDelete** | Read/modify OK, no delete | Default for prod RGs |
| **ReadOnly** | Read only | RARE, breaks key listing, scale, etc. |

Only **Owner** + **User Access Admin** can create/remove.

---

## 💰 Cost-Saving Levers

| Lever | Save up to | Catch |
|-------|------------|-------|
| Reserved Instance | ~72% | Lock to region + family |
| Savings Plan (Compute) | ~65% | More flexible |
| Spot VM | ~90% | 30-sec eviction notice |
| Azure Hybrid Benefit | ~40% (Windows) | Need existing licenses |
| Auto-shutdown (Dev/Test) | ~70% (dev) | Schedule via Automation/DevTest Labs |

---

## 🆚 Subscription Types

| Type | Quick note |
|------|-----------|
| Free Trial | $200 / 30 days |
| Pay-As-You-Go | Credit card, anyone |
| EA | Legacy enterprise |
| **MCA** | Modern unified billing |
| CSP | Through a partner |
| Visual Studio | Dev/test only, **never** prod |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Apply at the management group level"
- ✅ "Use an Azure Policy with the `Modify` effect"
- ✅ "Tag resources with CostCenter for chargeback"
- ✅ "Validate move before executing"
- ✅ "Use exemption to override inherited policy"

When you see these, often **wrong**:

- ❌ "Tags automatically inherit"
- ❌ "Apply a counter-policy at the child scope to override Deny"
- ❌ "Move resources across tenants"
- ❌ "Resource can belong to multiple RGs"
- ❌ "ReadOnly lock for production storage account"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ One giant subscription for everything (hit quotas, no isolation)
- ❌ Production resources mixed with dev in one RG
- ❌ No tags at all (chargeback impossible)
- ❌ No locks on prod RGs (one `az group delete` and you're done)
- ❌ Policies applied at individual RG instead of MG (drift!)
- ❌ Hardcoded resource IDs that break after move

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. The 5 levels of the hierarchy? ___
2. Do tags inherit by default? ___ How do you enforce inheritance? ___
3. Which 2 roles can create resource locks? ___
4. What's the difference between Deny and DeployIfNotExists? ___
5. Spot VM eviction notice? ___

---

➡️ [Module 2: Entra ID & RBAC](../Module-02-Entra-ID-RBAC/Reading.md)
