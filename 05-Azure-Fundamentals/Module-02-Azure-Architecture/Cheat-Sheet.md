# 📋 Module 2 Cheat Sheet: Azure Architecture

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌎 Physical Hierarchy

```
🌍 GEOGRAPHY  (US, Europe, Asia, ...)
   └── 📍 REGION  (East US, West Europe, ...)
          └── 🏢 AVAILABILITY ZONE  (1, 2, 3)
                 └── 🏛️ DATACENTER
```

| Level | What | Boundary |
|-------|------|----------|
| Geography | Country/region | Data residency, tax, law |
| Region | City of datacenters | Latency, services |
| AZ | Separate datacenter w/ own power & network | Hardware failure |
| Datacenter | Single facility | (you don't pick) |

---

## 🧱 Logical Hierarchy (MEMORIZE)

```
🏛️ MANAGEMENT GROUP   (policy + RBAC (Role-Based Access Control) inheritance, max 6 levels nested)
   └── 📦 SUBSCRIPTION  (billing + auth boundary; one Entra tenant)
          └── 🗂️ RESOURCE GROUP  (logical container; can hold multi-region resources!)
                 └── 💻 RESOURCE  (VM (Virtual Machine), storage, DB, ...)
```

**Top-down inheritance:** Policy/RBAC at MG → flows to all subs/RGs/resources below.

---

## 🔑 Critical Rules

| Rule | Quick fact |
|------|-----------|
| Every resource | Lives in exactly one RG |
| Every RG | Lives in exactly one subscription |
| Every subscription | Belongs to exactly one Entra tenant |
| RG region | Just metadata, RG can hold resources from any region |
| Delete RG | Deletes ALL resources inside (use Lock to prevent) |
| Move resources | Supported by most (not all) services, between RGs and subs |
| Root MG | Exists by default, can't be deleted |
| Subscriptions | Have quotas/limits per region |

---

## 👯 Region Pairs

- ~300+ miles apart, same geography
- **Sequential updates** (never both at once)
- **Prioritized recovery** in broad outages
- **GRS storage** auto-replicates to the pair

⚠️ Some newer regions ship **without** a designated pair, verify per region.

---

## 🛡️ Sovereign Clouds

| Cloud | For | Notes |
|-------|-----|-------|
| **Azure Government** | US Fed/State/Local/DoD | Screened US-citizen ops, physically isolated |
| **Azure China** | China | Operated by 21Vianet under Chinese law |

Sovereign clouds are SEPARATE Azure environments, different portal, different identities.

---

## 🏢 AZ vs Availability Set (legacy comparison)

| | Availability Set | Availability Zone |
|---|----------------|-------------------|
| Scope | Single datacenter (fault domain + update domain) | Across datacenters in a region |
| Protects from | Rack failure, update | Whole-datacenter failure |
| SLA (Service Level Agreement) for VMs | 99.95% | 99.99% (across 2+ AZs) |
| Cost | No extra | No extra (bandwidth across AZ may cost) |

---

## 🎯 SLA Reference (in-region)

| Pattern | VM SLA |
|---------|--------|
| Single VM (Premium/Ultra disks) | 99.9% |
| Availability Set (2+ VMs) | 99.95% |
| Availability Zones (2+ VMs across AZs) | 99.99% |

---

## 🏆 Exam Power Phrases

**Usually CORRECT:**
- ✅ "Deploy across Availability Zones"
- ✅ "Apply at the management group for inheritance"
- ✅ "Use the paired region for DR"
- ✅ "Resource group can contain resources from any region"
- ✅ "Use a Resource Lock to prevent deletion"

**Usually WRONG:**
- ❌ "Resource group must match the region of all resources"
- ❌ "Subscription can have multiple tenants"
- ❌ "Every region has AZs"
- ❌ "Apply policy to every subscription individually"

---

## ⚠️ Anti-Patterns

- ❌ All workloads in one region with no DR
- ❌ One giant subscription for the whole company
- ❌ Resources scattered with no tagging strategy
- ❌ Assuming a region pair exists without checking

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. The 4-level resource hierarchy? ___
2. AZ vs Region in one sentence each? ___
3. What does GRS do? ___
4. Can a RG hold resources from multiple regions? ___
5. Two sovereign Azure clouds? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 3: Core Services](../Module-03-Core-Services/Reading.md)
