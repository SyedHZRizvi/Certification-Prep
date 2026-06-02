# Module 2: Azure Architecture 🌍

> **Why this module matters:** Every Azure resource — every VM, every database, every load balancer — lives inside a *geographic* and *organizational* hierarchy. Get this hierarchy wrong on the exam and you'll lose 5–10 questions. Get it right and a whole class of "where do I apply this policy?" questions become free points.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Cloud service models (IaaS / PaaS / SaaS) and shared responsibility](../Module-01-Cloud-Concepts/Reading.md) — covered in Module 1
> - [High availability vs disaster recovery distinctions](../Module-01-Cloud-Concepts/Reading.md#-fault-tolerance-disaster-recovery-and-ha--dont-mix-them-up) — covered in Module 1
> - Basic networking literacy: what a datacenter is, what "region" and "zone" mean in everyday English
>
> If you're hazy on CapEx vs OpEx or who manages the OS in PaaS, pause and review Module 1 before continuing — the hierarchy here builds *on top of* the model boundaries from Module 1.

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

## 📊 Case Study — H&R Block's *AI Tax Assist* on Azure OpenAI (2024 tax season)

**Situation.** H&R Block has prepared U.S. tax returns since 1955 and files roughly **20+ million returns per year** in a brutally seasonal pattern — over half of annual volume hits in a four-week window between February and April. By 2023, the company was losing share to TurboTax (Intuit) in the DIY-software segment. CEO Jeff Jones bet that generative AI could differentiate the product: if a customer could literally *ask the software a tax question* and get a cited, accurate, audit-defensible answer, that would shift the value proposition from "form filler" to "AI tax expert in your pocket." H&R Block went public with this strategy at **Microsoft Build 2024** (Microsoft Build 2024 keynote, 2024-05-21; H&R Block press release, 2024-01-25, "AI Tax Assist").

**Decision.** H&R Block partnered with Microsoft to ship **AI Tax Assist** for the 2023 tax year filing season (Jan–Apr 2024), built on:

- **Azure OpenAI Service** for the LLM layer (GPT-4 + GPT-4 Turbo behind a private endpoint)
- A **private Azure region** (US East + paired West) so no taxpayer PII ever left Microsoft's enterprise boundary — directly addressing the Cloud Adoption Framework's "regulated data" pattern
- **Retrieval-Augmented Generation (RAG)** over H&R Block's proprietary corpus of IRS publications, state-by-state tax law, and 70 years of internal tax-prep playbooks — so the model's answers were grounded in the same source material a tax pro would cite
- Resource isolation at the **subscription level**, with Azure Policy enforcing US-only regions and a dedicated **management group** for tax-season workloads (so audit trails for SOC 2 / IRS Section 7216 compliance were trivial to produce)
- Scaling that absorbed the seasonal spike — H&R Block's API call volume jumped roughly **400× from December 2023 to peak-April 2024**, then collapsed back to baseline within a week of the IRS deadline

**Outcome.** AI Tax Assist was used by **millions** of H&R Block customers in its first season (H&R Block FY2024 Q4 earnings call, 2024-08-20). The company's online-channel revenue grew double-digit percent year-over-year — its strongest DIY season in a decade. H&R Block's stock (NYSE: HRB) gained roughly 35% across 2024. Internally, the company reported that without Azure's elastic capacity model the launch would have required either (a) building out a sized-for-peak GPU cluster that would sit 95% idle nine months a year, or (b) accepting visible degradation at peak filing weeks — both unacceptable.

**Lesson for the exam / for practitioners.** This case is exam catnip across three Azure architecture concepts:

1. **Regions + region pairs as a regulated-data unit.** H&R Block needed *both* high availability and U.S. data residency. Two paired regions in the same U.S. geography is the canonical AZ-900 answer for "GDPR/PII-residency + DR" and Cloud Adoption Framework §"Govern" calls this out explicitly.
2. **Management groups as the compliance audit trail.** When the IRS audits an H&R Block AI session, the company can prove (via Policy + Activity Log inheritance from the management-group level) that no data ever touched a non-approved region. This is RBAC + Policy at the *management-group* scope — Module 4's payload.
3. **The seasonality argument for cloud.** 400× peak-to-trough variance is the canonical "you cannot build this on-prem" math problem. Anna's pizza shop scaled 50× in Module 1; H&R Block scaled 400× at *Fortune 500* volumes. Same lesson, four orders of magnitude up.

H&R Block's CIO has cited the Microsoft Cloud Adoption Framework whitepaper's "Adopt → Govern → Manage" sequence as the explicit blueprint they followed (Microsoft Mechanics interview, 2024-05). Mapping a real case to that framework is exactly what the AZ-900 governance domain tests.

**Discussion (Socratic).**
- **Q1:** H&R Block could have built AI Tax Assist in their own datacenter using on-prem A100 GPUs — they had the capital. They chose Azure OpenAI exclusively. Construct the strongest argument for the *on-prem* path (cost, IP control, vendor independence). Construct the strongest argument for the *Azure* path (seasonality, regulatory, time-to-market). Where would you have come down as their CIO, and what would you have insisted on contractually?
- **Q2:** The case study claims H&R Block used a *single Azure geography* (US) plus paired regions. Compare this to the alternative of a *zone-redundant* deployment in a single region. Why isn't ZRS enough for a regulated tax workload? Cite GDPR Article 44 + IRS Section 7216 reasoning explicitly. (Hint: think about what "loss of an entire region" means — is it physical, regulatory, or both?)
- **Q3:** H&R Block's competitor, Intuit, built TurboTax's AI assistant on their *own* infrastructure using a mix of open-source LLMs (rather than committing to a single hyperscaler). Argue both sides. At what company stage does building-vs-buying the AI infrastructure flip? What's the trade-off Intuit implicitly accepted, and what's the trade-off H&R Block implicitly accepted?

---

## ✅ Module 2 Summary

You now know:

- 🌎 The 4-layer physical hierarchy: Geography → Region → AZ → Datacenter
- 👯 What region pairs are and why GRS storage uses them
- 🛡️ What sovereign clouds are (Gov, China)
- 🏛️ The 4-layer logical hierarchy: Management Group → Subscription → Resource Group → Resource
- 🗂️ How RGs are organized (by env / app / dept / lifecycle)
- 🌐 How to pick a region (latency, residency, services, price, certs, AZs)
- 📊 One canonical 2024 architecture case (H&R Block AI Tax Assist on Azure OpenAI)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) (aim for 22/26 minimum)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Core Services](../Module-03-Core-Services/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 3 fills in *what lives inside* each region — the compute, network, storage, and database services; Module 4 governs *who can touch* each scope in the hierarchy (RBAC + Policy at MG / Sub / RG / Resource scope); Module 5 puts the SLA math on top of the AZ vs Availability-Set vs single-VM patterns introduced here.
> - Cross-course: `06-Azure-Administrator` Module 2 (AZ-104) deepens the resource-hierarchy material into operational tasks — moving resource groups between subscriptions, configuring management-group inheritance, designing landing zones with the Cloud Adoption Framework's "Enterprise-Scale" reference architecture.
> - Practice: Practice Exam 1 has 4–6 questions on this module's hierarchy and region/AZ patterns. Final Mock Exam includes scenario-set #47–49 which tests management-group-level policy inheritance directly.

---

## 💬 Discussion — Socratic prompts

Use these as journal prompts or whiteboard prompts with a peer.

1. **The landing-zone allocation problem.** A 6,000-employee insurance company is moving from a single Azure subscription (an unintentional "Big Bang") to a proper hierarchy. The cloud team proposes 1 management-group per business unit (Insurance, Investments, IT-Shared) and 1 subscription per environment per BU (Dev/Test/Prod × 3 = 9 subscriptions minimum). The CFO objects that "10 subscriptions for one company is bureaucratic overkill." Build the strongest case for the *6,000-employee-grade* hierarchy versus the *startup-grade* single-subscription model. Where exactly does the breakeven sit (employees? annual Azure spend? regulatory exposure?), and what's the principled framework? (Hint: Microsoft's Enterprise-Scale Landing Zone reference architecture.)
2. **Region-pair design under sovereignty.** A pharma company needs to deploy a clinical-trial data platform that is regulated by both **FDA 21 CFR Part 11** (US) and **EMA Annex 11** (EU). The same dataset must be available, with low latency, to teams in Cambridge MA, Basel CH, and Tokyo JP. Walk through the region-and-region-pair design you would propose. What's the trade-off between deploying *one* primary region per regulatory boundary (3 primaries × paired = 6 regions) versus a *single primary in each geography* (3 regions with cross-region replication outside)? Cite the §"Sovereign Regions" table from this reading.
3. **The "RG location is metadata" trap.** A new hire creates a `rg-prod-uk` resource group in the West Europe region "because that's the closest". Six months later, the team realizes that some of the resources inside live in East US (the developer's default). The compliance officer is furious — *did this violate data residency?* Walk through what the answer actually is, citing the Module 2 rule that "RG location is metadata, not a residency boundary." Then propose the governance fix (Azure Policy at the management-group level) that prevents this from happening again.
4. **Management-group depth vs flatness.** Microsoft allows up to 6 levels of management-group nesting beneath the root. A consulting firm models the entire company structure — corporate → division → business unit → product family → product → environment — into a 6-deep tree. A senior consultant argues this is overkill and increases blast radius for policy mistakes (one misclick at the top breaks 12 layers down). Defend both positions. What's the practical heuristic for *how deep is too deep* in management-group nesting?
5. **The region-without-a-pair design choice.** Microsoft's newest regions (e.g., Israel, Italy North, Sweden Central) shipped *without* a designated pair, instead recommending customers design their own multi-region DR. Argue both: (a) this is a step forward — paired regions were always a half-measure, and modern customers need to pick their own DR partner based on data residency, latency, and politics; (b) this is a step backward — most customers don't know what they don't know, and the paired-region default gave a "safe by default" outcome. As a regional sales architect at Microsoft, what guidance would you give a customer landing in one of these newer regions?

---

## 📚 Further Reading (Optional)

- 📖 [Azure global infrastructure (map of regions)](https://datacenters.microsoft.com/globe/explore) — the canonical map; check before any region decision
- 📖 [Microsoft Learn — Describe Azure architecture and services](https://learn.microsoft.com/training/paths/azure-fundamentals-describe-azure-architecture-services/) — official AZ-900 path
- 📖 [Resource organization decision tree](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources) — the management-group / subscription / RG design recipe
- 📖 [Azure region pairs reference](https://learn.microsoft.com/azure/reliability/cross-region-replication-azure) — current pairs + which newer regions ship without a default pair
- 📖 [Azure for sovereignty (Gov & China)](https://learn.microsoft.com/azure/azure-government/) — Gov and China cloud details
- 📖 **Microsoft Cloud Adoption Framework — *Ready* methodology** (Microsoft, current edition checked 2026-05). Sections "Landing zone implementation options" and "Enterprise-Scale architecture" are the gold standard.
- 📖 *Hit Refresh* — Satya Nadella, 2017, HarperCollins. Chapter on the Azure expansion to 60+ regions tells the why behind the *what* you memorize here.
- 📖 Brewer, "Towards Robust Distributed Systems" (ACM PODC keynote, 2000) — the CAP theorem paper. Read once; it explains why Azure makes the trade-offs it does at the region/zone level.
