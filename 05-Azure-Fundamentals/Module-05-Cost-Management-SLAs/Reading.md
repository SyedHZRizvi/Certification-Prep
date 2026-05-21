# Module 5: Cost Management & SLAs 💰

> **Why this module matters:** This module covers two topics the exam loves to mix up: **forecasting/managing spend** (pricing tools, cost management, tags, reservations) and **service guarantees** (SLAs, composite SLAs, lifecycle stages). Get the composite SLA math right and you're winning 3–5 questions for free.

---

## 🍕 A Story: Anna's First Azure Bill

Anna deployed *PizzaTracker.io* to Azure in a hurry. Month 1 bill: $112. Month 2: $268. Month 3: $1,144. Anna panics.

She digs in. Turns out:
- A developer left a 16-core GPU VM running over the weekend ($340)
- Logs ballooned to 2 TB in Cool storage that should have been Cold ($90)
- Egress to a partner API hit $200 (each customer ping was 2 KB × 4M requests)
- A test database in Cosmos DB was running at provisioned 10,000 RU/s instead of serverless ($420)

She uses **Cost Management**, **Tags**, the **Pricing Calculator**, and finally moves predictable workloads to **Reservations** for a 60% discount. Month 4: $410. Crisis averted.

This module teaches you to do the same thing.

---

## 🛠️ The Cost Tool Triad

Three Azure tools you'll be tested on knowing the *difference* between:

| Tool | When | What it does |
|------|------|--------------|
| **Pricing Calculator** | BEFORE you deploy | Estimate cost of *Azure-only* resources by configuring them in a UI |
| **TCO Calculator** | BEFORE you migrate | Compare your **on-prem** cost (servers, storage, network, labor, electricity) vs Azure equivalent |
| **Microsoft Cost Management** | AFTER you deploy | Analyze, forecast, budget, and alert on actual Azure spend |

🎯 **Exam pattern:**
- *"Estimate cost of 5 VMs and a SQL DB before deploying"* → **Pricing Calculator**
- *"Compare cost of running our datacenter on-prem vs in Azure"* → **TCO Calculator**
- *"See where we spent $20K last month and forecast next month"* → **Cost Management**

⚠️ **Trap:** Pricing Calculator estimates new resources only. TCO is the on-prem-vs-cloud comparison.

---

## 💸 Factors That Affect Cost

The exam loves these. Know them.

| Factor | Effect on cost |
|--------|----------------|
| **Resource type** | A GPU VM costs vastly more than a B-series VM |
| **Region** | Pricing varies — Brazil/Australia tend to be more expensive than US/Europe |
| **Bandwidth (egress)** | Data leaving Azure (egress) is billed. Ingress is FREE. |
| **Subscription type** | EA, MCA, Pay-As-You-Go, Sponsorship — different rates |
| **Compute size / SKU** | Bigger = more |
| **Storage tier** | Hot > Cool > Cold > Archive (for storage); access cost is inverse |
| **OS / licensing** | Linux VMs cheaper than Windows VMs; Hybrid Benefit reduces this |
| **Reserved vs Pay-As-You-Go** | Reservations save up to 72% |
| **Spot vs regular** | Spot saves up to 90% but is interruptible |

🎯 **Memorize:** **Ingress is FREE. Egress costs money.** Many "lower the bill" scenarios pivot on this.

---

## 💰 Pricing Models (Big Picture)

| Model | Commitment | Discount | When to use |
|-------|-----------|----------|-------------|
| **Pay-As-You-Go (PAYG)** | None | Baseline price | Dev/test, unpredictable workloads |
| **Reservations** | 1 or 3 years | Up to 72% (VMs, SQL, Cosmos, etc.) | Steady, predictable production |
| **Spot VMs** | None — Azure can evict | Up to 90% off | Interruptible, fault-tolerant batch |
| **Savings Plans for Compute** | 1 or 3 year hourly compute commitment | Up to 65% | Flexibility across VM families/regions |
| **Azure Hybrid Benefit** | Use existing on-prem licenses (Windows/SQL Server with Software Assurance) | Up to 85% off VM | Existing licensed orgs |
| **Dev/Test pricing** | Tied to MSDN/Visual Studio subscription | Reduced rates | Non-production environments |
| **Enterprise Agreement (EA) / MCA** | Org-wide volume commitment | Negotiated | Large enterprises |

⚠️ **Trap:** Reservations and Savings Plans are different. Reservations = committed *resource type* (e.g., 5x D4s_v3 in East US for 3 years). Savings Plans = committed *hourly compute spend* across regions/families (more flexible, smaller discount).

---

## 🏷️ Tags + Cost Management — The Showback Pattern

Combine **tags** + **Cost Management** to break down spend by department, project, environment, etc.

```
Resource has tag: CostCenter=1234 → Cost Management filters by tag → Finance sees "Marketing spent $4,200 in March"
```

Common cost tags:
- `Environment` = prod / staging / dev
- `CostCenter` = department code
- `Project` = `pizzatracker-launch`
- `Owner` = team email

🎯 **Exam pattern:** "Show finance how much each department spent in Azure last quarter" → **Tag resources + use Cost Management filtered by tag**.

---

## 📊 Cost Management Capabilities

| Capability | What |
|-----------|------|
| **Cost analysis** | Slice/dice spend by sub, RG, region, tag |
| **Budgets** | Set spend limits and get alerts (NOT hard cutoffs — they only notify) |
| **Forecasts** | Predict future spend based on history |
| **Advisor recommendations** | Right-size, shut down idle, buy Reservations |
| **Exports** | Push billing data to storage / Power BI |

⚠️ **Trap:** Budgets **alert** when thresholds are crossed — they do NOT automatically shut things off. (You can wire them to a Logic App / Function to do that.)

---

## 📜 Service Level Agreements (SLAs)

An SLA is Microsoft's **financially backed** promise of a service's uptime / performance. If they miss it, you get service credits.

### Typical Azure SLA numbers (memorize the categories)

| SLA % | Downtime / year |
|-------|-----------------|
| 99.9% | ~8.76 hours |
| 99.95% | ~4.38 hours |
| 99.99% | ~52.6 minutes |
| 99.999% | ~5.26 minutes |

### Common VM SLA tiers (the classic exam question)

| Pattern | VM SLA |
|---------|--------|
| Single VM with **Premium/Ultra SSD** disks | 99.9% |
| 2+ VMs in an **Availability Set** | 99.95% |
| 2+ VMs across **Availability Zones** | 99.99% |

🎯 **Exam pattern:** "Customer requires 99.99% uptime for a VM workload" → **deploy across multiple Availability Zones**.

⚠️ **Important nuance:** Free / preview services typically have **NO SLA**. Once a service hits General Availability, the SLA applies.

---

## 🧮 Composite SLA — The Trick You Must Know

When a workload depends on multiple services, the *effective* SLA is the **product** of the individual SLAs.

**Formula:** Composite SLA = SLA_A × SLA_B × SLA_C × ...

### Example
You have:
- App Service: 99.95% (0.9995)
- Azure SQL Database: 99.99% (0.9999)

Composite = 0.9995 × 0.9999 = **0.99940005 → 99.94%**

So the *workload* SLA is **lower** than the lowest single component (always).

### Mitigation: redundant tiers

If you have **two regions** each with App Service + SQL, the formula becomes more nuanced (closer to 1 - (1 - region1)²) — but the AZ-900 just expects you to recognize:

1. Composite SLA across dependencies = **multiply**
2. Redundancy within a tier (multiple instances) = **higher than single**

🎯 **Exam pattern:** "Three services with SLAs 99.95%, 99.99%, and 99.9% — what's the workload SLA?" → Multiply. Answer ≈ 99.84%.

⚠️ **Trap:** Adding more services → composite SLA goes DOWN (more things to fail). Adding redundancy within a single service → composite goes UP.

---

## 🌱 Service Lifecycle: Preview vs GA

Azure services move through stages:

| Stage | What it means | SLA? | Use in prod? |
|-------|---------------|------|--------------|
| **Private Preview** | Invite-only test | ❌ | ❌ |
| **Public Preview** | Anyone can try | ❌ | ❌ (use at own risk) |
| **General Availability (GA)** | Production-ready | ✅ | ✅ |
| **Deprecation announced** | Sunset planned | ✅ (until end) | Plan migration |
| **Retired** | Gone | — | ❌ |

🎯 **Exam pattern:** "We want to use a Preview feature in production — what are the implications?" → **No SLA**; not recommended for production.

You can check service availability and roadmaps via:
- **Azure updates page** (public roadmap)
- **Azure portal → Preview features blade**

---

## 📌 SLAs are NOT for free tiers

Free Azure services (Free Tier, Free Account) do **not** have an SLA. Always check.

---

## 🎁 Free Account / Free Services (lightly tested)

The Azure free account includes:
- $200 USD credit for 30 days
- **12 months free** of selected popular services (e.g., 750 hrs/mo of B1S Linux VM)
- **Always-free services** (Cosmos DB free tier, Functions consumption plan free executions, App Service F1, etc.)

🎯 **Exam pattern:** "What does the Azure free account include?" → $200 for 30 days + 12 months of select services + always-free tier.

---

## 🚨 Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Ingress costs money" | NO — ingress is free, egress is billed |
| "Budgets automatically shut down resources" | NO — they only alert |
| "Adding services always raises composite SLA" | NO — adding **dependencies** lowers SLA; adding **redundancy** raises it |
| "Pricing Calculator and TCO Calculator are the same" | NO — Pricing = new Azure cost; TCO = on-prem vs Azure comparison |
| "Reservations are CapEx" | NO — still OpEx (paid over time, no asset ownership) |
| "Preview services have a partial SLA" | NO — Preview = no SLA |
| "Spot VMs are good for production databases" | NO — Spot can be evicted with 30 sec notice |
| "Reservation discount applies to any matching VM size" | True for Reservations within an "instance series" if you select that flexibility, but reservations are scoped — read carefully |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Pricing Calculator** | Estimate cost of NEW Azure resources |
| **TCO Calculator** | Compare on-prem cost vs Azure |
| **Cost Management** | Analyze, forecast, budget actual Azure spend |
| **Budget** | Alert when spend crosses threshold (does NOT shut down) |
| **Reservation** | 1- or 3-year commitment for big discount |
| **Savings Plan** | Hourly compute commitment, more flexible than reservation |
| **Spot VM** | Up to 90% off, evictable |
| **Azure Hybrid Benefit** | Reuse on-prem Win/SQL licenses on Azure |
| **Egress** | Outbound bandwidth (billed) |
| **Ingress** | Inbound bandwidth (FREE) |
| **SLA** | Financially backed uptime/performance promise |
| **Composite SLA** | Product of dependent service SLAs |
| **GA** | General Availability — production-ready, SLA-backed |
| **Preview** | Pre-GA — no SLA, use at own risk |
| **Service Credits** | Refunds you get if Microsoft misses SLA |
| **Azure free account** | $200 / 30 days + 12 mo of select services + always-free tier |

---

## ✅ Module 5 Summary

You now know:
- 🛠️ Pricing Calculator vs TCO Calculator vs Cost Management
- 💸 Cost factors (region, egress, SKU, tier, etc.)
- 💰 Pricing models (PAYG, Reservations, Spot, Savings Plans, Hybrid Benefit, Dev/Test)
- 🏷️ Tags + Cost Management = chargeback / showback
- 📜 Standard SLA tiers (99.9 / 99.95 / 99.99)
- 🧮 **Composite SLA math** (multiply dependencies)
- 🌱 Preview vs GA — and why Preview has no SLA

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 6: Tools & Features](../Module-06-Tools-Features/Reading.md)

---

## 📚 Further Reading (Optional)

- 🔗 [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/)
- 🔗 [Azure Total Cost of Ownership (TCO) Calculator](https://azure.microsoft.com/pricing/tco/calculator/)
- 🔗 [Microsoft Cost Management documentation](https://learn.microsoft.com/azure/cost-management-billing/)
- 🔗 [Azure SLA summary](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services)
- 🔗 [Reservations overview](https://learn.microsoft.com/azure/cost-management-billing/reservations/save-compute-costs-reservations)
- 🔗 [Azure Updates / roadmap](https://azure.microsoft.com/updates/)
