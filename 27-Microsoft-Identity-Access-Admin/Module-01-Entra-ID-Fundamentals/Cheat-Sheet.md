# 📋 Module 1 Cheat Sheet: Entra ID Fundamentals

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌐 License Cheat-Matrix (MEMORIZE)

| Feature | Free | P1 | P2 |
|---------|:----:|:--:|:--:|
| Cloud users + groups + SSO to gallery | ✅ | ✅ | ✅ |
| Security Defaults | ✅ | ✅ | ✅ |
| SSPR (cloud users) | ✅ | ✅ | ✅ |
| SSPR (synced users) | ❌ | ✅ | ✅ |
| **Conditional Access** | ❌ | ✅ | ✅ |
| **Dynamic groups + group-based licensing** | ❌ | ✅ | ✅ |
| **Microsoft Entra Application Proxy** | ❌ | ✅ | ✅ |
| **Branding** (custom logo on sign-in) | ❌ | ✅ | ✅ |
| **Identity Protection** (risk-based CA) | ❌ | ❌ | ✅ |
| **Privileged Identity Management (PIM)** | ❌ | ❌ | ✅ |
| **Access reviews + entitlement management** | ❌ | ❌ | ✅ |

**Microsoft 365 bundles:**
- E3 = Entra ID P1
- E5 = Entra ID P2 (+ Identity Protection + PIM + entitlement management)

**Microsoft Entra ID Governance** (add-on SKU) = Lifecycle Workflows + custom extensions + ML access review recommendations.

---

## 🏗️ Tenants

| Item | Value |
|------|-------|
| Default DNS name | `<tenant>.onmicrosoft.com` (permanent) |
| Custom domains per tenant | 5,000 |
| One subscription belongs to | Exactly 1 tenant (can be transferred) |
| Tenant creation | Entra portal → Create a tenant → Workforce / External |

---

## 🛡️ Three Role Systems (Don't Mix Up!)

| System | Controls | Examples |
|--------|----------|----------|
| **M365 Admin Roles** | M365 workloads | Exchange Admin, Teams Admin |
| **Entra Roles** | Entra ID + Entra-aware services | Global Admin, User Admin, App Admin, PIM Admin |
| **Azure RBAC Roles** | Azure resources | Owner, Contributor, Reader, UAA |

**Critical:** Global Admin ≠ Owner of all Azure subs. Must toggle "Access management for Azure resources" and assign UAA at root scope.

---

## 👑 Top Entra Roles To Memorize

| Role | What it can do |
|------|----------------|
| **Global Administrator** | Everything in Entra; can elevate to root Azure |
| **Privileged Role Administrator** | Assign any Entra role + manage PIM |
| **Privileged Authentication Administrator** | Reset MFA on any user (incl. GA) |
| **Authentication Administrator** | Reset MFA on non-admins only |
| **Application Administrator** | Manage all apps + service principals |
| **User Administrator** | Manage users + groups (not GAs) |
| **Helpdesk Administrator** | Reset passwords for non-admins |
| **Hybrid Identity Administrator** | Manage Entra Connect, federation |
| **Reports Reader** | Read sign-in + audit logs |
| **Global Reader** | Read-only of everything |

---

## 🤝 B2B vs External ID

| | **B2B Collaboration** | **External ID** (formerly B2C) |
|---|---------------------|--------------------------------|
| Audience | Partners, vendors | Customers (consumers) |
| Where users live | Guests in YOUR tenant | Separate External ID tenant |
| Sign-in | Existing org account | Custom flows, social IdPs |
| RBAC | Yes | n/a |
| Example | "Acme PM accesses our SharePoint" | "1M consumers log in to retail app" |

---

## 🔢 Tenant Limits

| Item | Limit |
|------|-------|
| Custom verified domains | 5,000 |
| Group nesting | 200 levels |
| App registrations per user | 250 (default) |
| Administrative Units per tenant | 100 (default) |
| Sign-in log retention | 7d Free / 30d P1+ |
| Risk events retained | 90 days |
| Microsoft-recommended Global Admin count | 2 min, ≤5 |

---

## 🚦 New Tenant, Day-1 Checklist

```
1. Sign in to Entra admin center → Create a tenant
2. Pick country/region (data residency)
3. Create 2 cloud-only break-glass GA accounts
4. Verify first custom domain (TXT record at DNS)
5. Assign licenses (E3 → P1; E5 → P2)
6. Enable Security Defaults (or skip if going straight to CA)
7. External Identities → restrict guest invitations
8. Apply branding (logo, background, sign-in text)
9. Pick hybrid sync (Cloud Sync vs Connect)
10. Plan CA in report-only before enforcing
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Requires Entra ID P1" (Conditional Access, dynamic groups, App Proxy, branding)
- ✅ "Requires Entra ID P2" (Identity Protection, PIM, entitlement mgmt, access reviews)
- ✅ "Configure Diagnostic Settings → Log Analytics" (for >30d log retention)
- ✅ "Privileged Authentication Administrator" (when admin's MFA needs resetting)
- ✅ "Exclude break-glass accounts from CA"

When you see these, often **wrong**:

- ❌ "Conditional Access works in Free tier"
- ❌ "Global Admin automatically owns Azure subscriptions"
- ❌ "Default sign-in logs retained for 1 year"
- ❌ "B2B and External ID are the same thing"
- ❌ "The default `.onmicrosoft.com` name can be renamed"

---

## ⚠️ Day-1 Anti-Patterns

- ❌ Zero break-glass accounts (one bad CA = locked-out tenant)
- ❌ Synced break-glass accounts (sync outage = no GA login)
- ❌ Federation by default (lose Entra signal richness)
- ❌ Letting everyone invite guests
- ❌ Mixing M365 admin / Entra / Azure roles in answer choices

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. P1 unlocks ___ + ___ + ___ + branding
2. P2 unlocks ___ + ___ + ___ + ___
3. Sign-in log retention: Free ___ / P1 ___
4. To make a GA an Owner of a subscription: ___
5. B2B users live in ___ tenant; External ID users live in ___ tenant

---

➡️ [Module 2: Users, Groups & External Identities](../Module-02-Users-Groups/Reading.md)
