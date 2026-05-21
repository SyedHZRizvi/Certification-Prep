# Module 2: Azure Architecture 🌍

> **Why this module matters:** Every Azure resource — every VM, every database, every load balancer — lives inside a *geographic* and *organizational* hierarchy. Get this hierarchy wrong on the exam and you'll lose 5–10 questions. Get it right and a whole class of "where do I apply this policy?" questions become free points.

---

## 🏗️ A Story: The Apartment Complex Analogy

Imagine Microsoft as a giant property developer. They've built a global empire of apartment buildings.

- A **Geography** is a country or region of the world — say, "the United States." Lots of buildings here, plus legal/regulatory boundaries (tax law, data residency).
- A **Region** is a city — "East US" is one city, "West Europe" is another. Each city has multiple buildings.
- An **Availability Zone (AZ)** is a *separate apartment building* in that city — own power, own water, own generator. If one building catches fire, the others are fine.
- A **Datacenter** is a single floor within one building.

Now imagine **you**, the customer. You don't rent floors or buildings. You rent **furnished apartments** (Azure resources). But you do choose:
- *Which city* (region) you live in (latency, sovereignty)
- *Which building* (AZ) you live in (resilience)
- *How many apartments* you rent (HA — one per AZ = good)

And to keep your apartments organized:
- You bundle the bedroom, kitchen, and bathroom into a "1-bedroom apartment" → that's a **Resource Group**
- You group your apartments under your name → that's a **Subscription**
- Your company has many people, each with subscriptions → bundled under a **Management Group**

The whole hierarchy: **Management Group → Subscription → Resource Group → Resource**. Burn that in.

---

## 🌎 The Physical Hierarchy: Geos, Regions, AZs, Datacenters

```
🌍 GEOGRAPHY  (e.g., United States)
   │
   ├── 📍 REGION  (East US, West US 2, Central US, ...)
   │      │
   │      ├── 🏢 AVAILABILITY ZONE 1  (1+ physical datacenter)
   │      ├── 🏢 AVAILABILITY ZONE 2
   │      └── 🏢 AVAILABILITY ZONE 3
   │
   ├── 📍 REGION (West US)
   │      └── ...
   │
   └── 📍 PAIRED REGION (East US ↔ West US)   <-- coupled for DR
```

| Level | What it is | Boundary | Why it matters |
|-------|------------|----------|----------------|
| **Geography** | A discrete market (e.g., US, Europe, Asia) | Data residency, compliance, tax | Some services + data stay within a geo |
| **Region** | A set of datacenters in a specific area (e.g., "East US") | Latency, sovereignty | You deploy resources INTO a region |
| **Availability Zone** | A physically separate datacenter (or group) within a region with independent power, cooling, network | Hardware/datacenter failure | Spread across AZs = in-region HA |
| **Datacenter** | A specific physical facility | — | You don't pick these directly |

Azure currently has **60+ regions** in **140+ countries** — by far the largest cloud footprint.

### Two kinds of zone deployment patterns:
- **Zonal** — your VM is *pinned* to a specific AZ (e.g., AZ-1)
- **Zone-redundant** — Azure spreads the service across all 3 AZs automatically (e.g., zone-redundant storage, zone-redundant SQL DB)

🎯 **Exam pattern:** "Customer wants 99.99% VM SLA with in-region HA" → **deploy VMs across multiple Availability Zones**.

---

## 👯 Region Pairs (a.k.a. Paired Regions)

For most Azure regions, Microsoft has designated a **paired region** — usually 300+ miles away, in the same geography (so data stays in compliance).

| Region | Paired With |
|--------|-------------|
| East US | West US |
| North Europe (Ireland) | West Europe (Netherlands) |
| Southeast Asia (Singapore) | East Asia (Hong Kong) |
| Japan East | Japan West |

**Why pairs exist:**
- **Sequential updates** — Microsoft never updates both at once (one always available)
- **Prioritized recovery** — if a broad outage hits, paired regions get help first
- **Some services replicate automatically** — e.g., GRS storage replicates to the paired region

⚠️ **Important nuance for 2024+:** Microsoft has started offering newer regions WITHOUT a designated pair (Azure recommends customers design their own multi-region strategy in those cases). Don't assume every region has a pair.

🎯 **Exam pattern:** "Lowest-effort cross-region DR for storage" → use **GRS (Geo-Redundant Storage)** which automatically replicates to the paired region.

---

## 🛡️ Sovereign Regions

Some regions are physically and logically isolated from the rest of Azure for legal / national security reasons:

| Sovereign Cloud | Who it serves |
|-----------------|----------------|
| **Azure Government** | U.S. federal, state, local, DoD (separate identity, ops by U.S. citizens) |
| **Azure China (operated by 21Vianet)** | China — separate Azure operated by Chinese company under Chinese law |
| **Azure for Government Secret / Top Secret** | DoD classified workloads |

🎯 **Exam trap:** Sovereign clouds are *separate Azure environments*. You can't deploy a resource in "East US" and a resource in "US Gov Virginia" inside the same subscription.

---

## 🧱 The Resource Hierarchy (LIVE-OR-DIE for the exam)

Memorize the chain:

```
🏛️ MANAGEMENT GROUP   (top)
   │
   ├── 📦 SUBSCRIPTION
   │      │
   │      ├── 🗂️ RESOURCE GROUP
   │      │       │
   │      │       ├── 💻 VM
   │      │       ├── 💾 Storage Account
   │      │       └── 🌐 Virtual Network
   │      │
   │      └── 🗂️ RESOURCE GROUP
   │
   └── 📦 SUBSCRIPTION
```

| Level | What it is | Purpose | Inheritance |
|-------|------------|---------|-------------|
| **Management Group** | Container for multiple subscriptions | Apply policies/RBAC at scale to many subs at once | Children inherit |
| **Subscription** | Billing + auth boundary | Spending limit, separate billing, owner | Children inherit |
| **Resource Group** | Logical container for resources | Group by lifecycle / app / environment | Resources inherit some settings |
| **Resource** | Actual stuff (VM, storage, DB) | Does the work | — |

### Critical rules to MEMORIZE

| Rule | Detail |
|------|--------|
| Every resource MUST live in a resource group | No "free-floating" resources |
| Every resource group lives in ONE subscription | RGs cannot span subscriptions |
| A resource can be MOVED between RGs (and even subscriptions) — but not all resources support move | Check the service docs |
| Resource groups can contain resources from **different regions** | Yes! The RG itself has a "metadata location" but it can hold resources anywhere |
| Deleting a resource group **deletes everything in it** | Use Locks (CanNotDelete / ReadOnly) to prevent this — see Module 4 |
| Management groups can be **nested 6 levels deep** (max) | Plus the root group |
| The **root management group** sits above everything in a tenant | One per tenant |
| Subscriptions have **limits/quotas** | e.g., max VMs per region per sub |

🎯 **Exam favorite scenario:** "Apply a tag policy to ALL subscriptions in the company" → put a policy at the **management group** level. It inherits down.

---

## 🏷️ Microsoft Entra Tenants & the Big Picture

Above the resource hierarchy sits the **Microsoft Entra ID tenant** (formerly Azure AD tenant).

```
🏛️ ENTRA ID TENANT  (your company's identity directory)
       │
       ├── 🏛️ Management Group (Root)
       │       ├── Management Group (Production)
       │       │       ├── Subscription A
       │       │       └── Subscription B
       │       └── Management Group (Sandbox)
       │               └── Subscription C
```

A **tenant** is an instance of Microsoft Entra ID — your identity boundary. One tenant can have many subscriptions; one subscription is associated with exactly **one** tenant.

---

## 🗂️ Resource Groups: Design Patterns

Real-world ways teams organize RGs:

| Pattern | Example | Good when |
|---------|---------|-----------|
| By **environment** | `rg-prod-web`, `rg-dev-web`, `rg-test-web` | Each env has its own lifecycle |
| By **application** | `rg-checkout`, `rg-billing`, `rg-search` | Microservice teams own their RG |
| By **department** | `rg-finance`, `rg-hr`, `rg-marketing` | Billing/showback by dept |
| By **lifecycle** | `rg-shared-dns`, `rg-app-2024-q1` | Things that get deleted together belong together |

🧠 **Rule of thumb:** *"Resources that live and die together belong in the same RG."*

---

## 🌐 Region Selection Criteria (gets tested!)

When choosing a region for deployment, consider:

| Factor | Why |
|--------|-----|
| **Latency** to users | Pick regions close to your customers |
| **Data residency / sovereignty** | Some data must stay in specific countries (GDPR, etc.) |
| **Service availability** | Not every Azure service is in every region (e.g., some AI services US-only at launch) |
| **Price** | Pricing varies by region — US/Europe usually cheaper than Brazil/Asia |
| **Compliance certifications** | Specific regions hold specific certs (HIPAA, FedRAMP, IRAP, etc.) |
| **Availability Zone support** | Not every region has AZs — check before relying on them |

⚠️ **Trap:** Service availability varies! When the exam says "the cheapest region with this service," remember not all services exist in all regions.

---

## 🚨 Common Misconceptions & Exam Traps

| Misconception | Reality |
|---------------|---------|
| "A resource group must contain resources from one region" | False — RG can hold resources from any region |
| "Moving an RG is free and instant" | Some resources don't support move; moves can take time and may have downtime |
| "A subscription can belong to multiple tenants" | False — exactly one tenant per subscription |
| "Region pairs always exist" | Newer regions may not have a pair; verify before designing |
| "Availability zones exist in every region" | False — only AZ-enabled regions have them |
| "Deleting a subscription is reversible" | Cancellation has a 30/60/90-day grace, then it's gone — but plan ahead |
| "Management groups are required" | They're optional but recommended at scale |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Geography** | A market (often a country) — Azure's top physical grouping |
| **Region** | A set of datacenters in a specific area (e.g., East US) |
| **Availability Zone (AZ)** | Physically separate datacenter within a region with independent power/network |
| **Datacenter** | A specific physical facility — you don't pick these directly |
| **Region Pair** | A designated partner region (300+ miles away) for sequential updates / DR |
| **Sovereign Region** | Isolated Azure environment (Gov, China) under specific legal regime |
| **Tenant** | One instance of Microsoft Entra ID — identity boundary |
| **Subscription** | Billing + auth boundary; container of resource groups |
| **Management Group** | Container for multiple subscriptions; policy/RBAC inheritance |
| **Resource Group (RG)** | Logical container for resources within one subscription |
| **Resource** | The actual stuff (VM, storage account, etc.) |
| **Zonal deployment** | Resource pinned to a specific AZ |
| **Zone-redundant** | Resource auto-replicated across all AZs in a region |
| **Region triad** | Newer Azure pattern of 3 regions, no designated pair (e.g., Sweden) |

---

## ✅ Module 2 Summary

You now know:
- 🌎 The 4-layer physical hierarchy: Geography → Region → AZ → Datacenter
- 👯 What region pairs are and why GRS storage uses them
- 🛡️ What sovereign clouds are (Gov, China)
- 🏛️ The 4-layer logical hierarchy: Management Group → Subscription → Resource Group → Resource
- 🗂️ How RGs are organized (by env / app / dept / lifecycle)
- 🌐 How to pick a region (latency, residency, services, price, certs, AZs)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) (aim for 22/26 minimum)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Core Services](../Module-03-Core-Services/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Azure global infrastructure (map of regions)](https://datacenters.microsoft.com/globe/explore)
- 📖 [Microsoft Learn — Describe Azure architecture and services](https://learn.microsoft.com/training/paths/azure-fundamentals-describe-azure-architecture-services/)
- 📖 [Resource organization decision tree](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources)
- 📖 [Azure region pairs reference](https://learn.microsoft.com/azure/reliability/cross-region-replication-azure)
- 📖 [Azure for sovereignty (Gov & China)](https://learn.microsoft.com/azure/azure-government/)
