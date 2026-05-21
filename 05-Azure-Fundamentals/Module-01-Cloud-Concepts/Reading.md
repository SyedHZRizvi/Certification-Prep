# Module 1: Cloud Concepts ☁️

> **Why this module matters:** The AZ-900 isn't just an Azure exam — it's a *cloud literacy* exam. ~25–30% of your questions live here. Get this module right and you'll have the vocabulary to make every later module easier.

---

## 🍕 A Story: The Pizza Shop's Server Closet

Meet Anna. Anna runs a pizza delivery app called *SliceRight* out of her garage in 2014.

**Day 1.** She buys two Dell servers ($8,000), a UPS battery backup, a small rack, and pays a contractor $1,500 to wire it all up. She's now the proud owner of a data center. She's also the network admin, the security team, the patching team, and the "Why is the AC running so loud?" team.

**Day 30.** *SliceRight* gets featured on a food blog. Traffic spikes 50x in two hours. Her two servers melt. The site goes down for 6 hours. She loses every weekend customer she'd worked 3 months to win.

**Day 31.** Anna's cousin Raj — a cloud engineer — visits. He says: *"You're paying for capacity you don't usually need, you can't grow fast enough when you DO need it, and you're a 1-person ops team. Move it all to Azure. You'll pay for what you use. They handle the AC."*

Anna moves *SliceRight* to Azure. By Day 60:
- Capital costs dropped to zero (no more $8K servers)
- A traffic spike auto-scales from 2 VMs to 40 in 90 seconds
- Anna patches NOTHING — Microsoft does it
- She pays $112/month instead of $8K up-front + electricity + her time

**That's the cloud value proposition in one story.** Let's break it down properly.

---

## 💰 CapEx vs OpEx (You WILL be tested on this)

This is the financial heart of the cloud pitch. Memorize the difference.

| | **CapEx (Capital Expenditure)** | **OpEx (Operational Expenditure)** |
|---|---|---|
| What it is | Big upfront purchase of an asset | Ongoing pay-as-you-go expense |
| Example | $8,000 server, $50,000 SAN | $112/month Azure bill, $0.018/GB storage |
| Accounting | Asset on balance sheet, depreciates over years | Expensed in the period it occurs |
| Cash flow | Hurts up front, hurts forecasting | Smooth, predictable, scales with usage |
| Cloud uses... | ❌ Traditional on-prem model | ✅ Azure consumption pricing |

🎯 **MEMORIZE:** The cloud converts **CapEx → OpEx**. If an exam question mentions "no upfront cost" or "pay-as-you-go," the right answer is almost always *the cloud / consumption-based model*.

⚠️ **Trap on the exam:** Reserved Instances and 1-year/3-year commitments still count as **OpEx** in Azure (you pay over time, you don't own hardware). Don't get tricked.

---

## 🍱 The Three Service Models: IaaS, PaaS, SaaS

The single most-asked concept on AZ-900. Imagine a pizza.

```
🥬 Ingredients   🔥 Oven   🚚 Delivery   🍽️ Table
─────────────────────────────────────────────────────
On-Prem:    You    You      You          You      "Make it yourself"
IaaS:       You    Azure    You          You      "Rent the kitchen"
PaaS:       You    Azure    Azure        You      "Take-and-bake"
SaaS:       Azure  Azure    Azure        Azure    "Dine at the restaurant"
```

| Model | What YOU manage | What AZURE manages | Azure Examples |
|-------|-----------------|--------------------|----------------|
| **IaaS** (Infrastructure-as-a-Service) | OS, runtime, apps, data, patches | Hardware, virtualization, network, datacenter | **Azure Virtual Machines**, VM Scale Sets, Managed Disks |
| **PaaS** (Platform-as-a-Service) | Code, app config, data | OS, runtime, scaling, patching, hardware | **Azure App Service**, Azure SQL Database, AKS (managed control plane), Azure Functions |
| **SaaS** (Software-as-a-Service) | Just your data and users | Everything else | **Microsoft 365**, Dynamics 365, GitHub |

🧠 **Memory hook:** Think of it as **"How much do I do?"**
- IaaS = **I** do A LOT (I = the customer)
- SaaS = **S**omeone Else does almost everything

🎯 **Exam trap pattern:**
> *"A company wants to host a custom-built web app without managing OS patches but with full control of the application code." → **PaaS** (App Service).*
> *"...with full control over the operating system and ability to install custom drivers." → **IaaS** (VM).*
> *"...needs an out-of-the-box email and calendar service." → **SaaS** (Microsoft 365).*

⚠️ **Common confusion:** AKS is **PaaS for the control plane** (Microsoft manages the Kubernetes masters) but the worker nodes you run on are IaaS-ish (you pay for the VMs). The exam treats AKS as "managed Kubernetes" / PaaS.

---

## 🏢 The Three Deployment Models: Public, Private, Hybrid

| Model | Who owns hardware | Who uses it | Real example |
|-------|-------------------|-------------|--------------|
| **Public Cloud** | Cloud provider (Microsoft) | Anyone who pays | Azure, AWS, GCP |
| **Private Cloud** | A single organization (on-prem OR hosted by 3rd party for that org alone) | Only that org | A bank running OpenStack in their own datacenter; **Azure Stack Hub** at customer site |
| **Hybrid Cloud** | Mix of public + private, connected | Both | On-prem ERP connected to Azure via ExpressRoute + Microsoft Entra ID sync |
| **Multi-cloud** | Two+ public clouds | One org using both | Azure for analytics + AWS for compute |

🎯 **Exam trap:** "Regulatory data must never leave our datacenter, but we want cloud-style automation" → **Private cloud** (or **Azure Stack Hub** / **Azure Local** — Microsoft's on-prem extension). NOT public Azure.

> ⚠️ **Naming update:** What was previously called "Azure Stack HCI" is now part of **Azure Local** (rebranded 2024). The classic "Azure Stack Hub" still exists as the on-prem app-platform.

### Hybrid is the most exam-tested
Real companies almost always start hybrid. Patterns to recognize:
- **Lift & shift** — move VMs as-is to Azure (often the first step)
- **Burst to cloud** — extra capacity goes to Azure during spikes
- **Backup to cloud** — local primary, Azure secondary (Azure Backup, Azure Site Recovery)
- **Identity bridge** — on-prem AD synced to Microsoft Entra ID via Entra Connect

---

## 📈 The Cloud's Six Killer Benefits (the AZ-900 List)

Microsoft loves grouping things. These six come up *constantly* in scenario questions.

| Benefit | Plain English | Trigger words in questions |
|---------|---------------|----------------------------|
| **High Availability** | Service stays up despite failures | "minimize downtime", "99.99%", "uptime SLA" |
| **Scalability** | Add capacity to match demand | "handle traffic spike", "grow with usage" |
| **Reliability** | Recover from failures and continue | "self-healing", "recover from regional outage" |
| **Predictability** | Performance and cost are forecastable | "consistent performance", "predict the bill" |
| **Security** | Provider invests massively in defense | "compliance", "shared responsibility" |
| **Governance** | Standards, audits, and controls at scale | "enforce tags", "ensure compliance", "Azure Policy" |
| **Manageability** | Easy to operate at scale (Manageability **of** and **in** the cloud) | "monitor everything", "automate deployment" |

⚠️ **Reliability vs Availability** is a classic trap:
- **Availability** = "Is it up RIGHT NOW?" (uptime %)
- **Reliability** = "Can it recover from failure and keep working over time?"

A system can be highly available but unreliable (always up, but data corrupts often). The cloud aims for both.

---

## 📏 Scaling: Vertical vs Horizontal (HUGE on the exam)

```
Vertical scaling (scale UP):
   [VM: 2 CPU] ──→ [VM: 8 CPU]      Same VM, bigger size

Horizontal scaling (scale OUT):
   [VM] [VM]   ──→  [VM][VM][VM][VM][VM]   More VMs, same size
```

| | **Vertical (Up/Down)** | **Horizontal (Out/In)** |
|---|------------------------|--------------------------|
| What | Bigger or smaller VM | More or fewer VMs |
| Azure example | Resize a VM from B2s to D4s | Add VMs to a **VM Scale Set** |
| Downtime | Usually requires VM restart | Zero — new VMs added live |
| Limit | Hits a ceiling (largest SKU) | Practically unlimited |
| Cost model | Pay for one bigger thing | Pay per active instance |
| Best for | Databases, monolithic apps | Stateless web apps, APIs |

🎯 **Exam pattern:** "An e-commerce site needs to handle Black Friday traffic spikes automatically" → **Horizontal scaling** via **VM Scale Sets** or **App Service auto-scale**. NOT vertical.

### Autoscale, manual scale, and scheduled scale

- **Manual** — admin adds capacity (rarely the right answer)
- **Autoscale** — Azure adds/removes based on metric (CPU, queue length) — preferred for unpredictable load
- **Scheduled** — add capacity at known times (e.g., 9 AM Monday)

---

## 🛡️ Fault Tolerance, Disaster Recovery, and HA — Don't Mix Them Up

| Concept | Definition | Azure feature |
|---------|------------|----------------|
| **High Availability (HA)** | Service keeps running during component failure (target: 99.9%+) | Availability Zones, Availability Sets, Load Balancer |
| **Fault Tolerance** | Zero downtime even during failure (redundant everything) | Active-active deployments across regions |
| **Disaster Recovery (DR)** | Recover after a major event (region down, ransomware) | Azure Site Recovery, Azure Backup, paired regions |
| **Business Continuity** | Umbrella term — your org keeps operating | DR + HA + processes + people |

⚠️ **Trap:** HA ≠ DR. HA protects against a server failing; DR protects against a **region** failing. Both are needed in production.

---

## 💸 Consumption-Based Pricing — The Other Cloud Superpower

Pay only for what you actually use. The opposite of paying $8K for a server that runs at 12% utilization.

Examples:
- **Compute:** per second of VM running time
- **Storage:** per GB stored per month + per read/write transaction
- **Bandwidth:** per GB egress (data leaving Azure — INGRESS is free)
- **Functions:** per execution + per GB-second of memory

🎯 **Exam-relevant pricing concepts:**
- **Pay-As-You-Go (PAYG):** Default, no commitment
- **Reservations:** Commit 1 or 3 years for big discount (up to 72% off VMs)
- **Spot VMs:** Use Microsoft's spare capacity at huge discount (up to 90% off) — but Azure can evict any time
- **Azure Hybrid Benefit:** Use your existing Windows Server / SQL Server licenses on Azure VMs to slash cost
- **Dev/Test pricing:** Discounted rates for non-prod workloads

---

## 🧱 Cloud Architecture Principles To Recognize

The exam likes phrases. Recognize them.

- **Elasticity** — automatically expand/shrink with demand (closely related to scalability)
- **Agility** — deploy new resources in seconds, not weeks
- **Geo-distribution** — deploy globally close to users (latency + sovereignty)
- **Economies of scale** — Microsoft buys hardware cheaper than you can
- **Self-service** — provision your own resources without filing tickets

---

## 🤝 The Shared Responsibility Model (FOUNDATIONAL)

Who is responsible for what depends on the service model.

```
                IaaS       PaaS       SaaS
Data           Customer   Customer   Customer
Endpoints      Customer   Customer   Customer
Account/ID     Customer   Customer   Customer
Access mgmt    Customer   Customer   Customer
Application   Customer   Customer   Shared
Network ctrl   Customer   Shared     Microsoft
OS             Customer   Microsoft  Microsoft
Physical host  Microsoft  Microsoft  Microsoft
Physical net   Microsoft  Microsoft  Microsoft
Physical DC    Microsoft  Microsoft  Microsoft
```

🎯 **MEMORIZE these always-customer items (no matter the model):**
1. **Data**
2. **Endpoints** (laptops, phones)
3. **Account & Identity management**
4. **Access management** (who has which permissions)

⚠️ **Exam trap:** "Who is responsible for patching the operating system of a VM running in Azure?" → **Customer** (it's IaaS). For App Service (PaaS), it's Microsoft. *Read the service carefully.*

---

## 🚨 Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Cloud = always cheaper" | Not always. Steady, predictable workloads on owned hardware can be cheaper long-term. Cloud wins on variable workloads, agility, global reach. |
| "Going cloud = no servers" | False for IaaS. You still manage the VM. You just don't own the metal. |
| "Microsoft secures my data" | False. You secure your data. Microsoft secures the platform. |
| "Reserved Instances mean you pay upfront so it's CapEx" | No. It's still **OpEx** (a paid-over-time consumption commitment, not an asset purchase). |
| "Public cloud = insecure" | Microsoft datacenters are dramatically more secure than the average company server closet. Misconfiguration by you is the real risk. |
| "Scaling up and scaling out are the same" | No. Up = bigger VM. Out = more VMs. |
| "Azure AD is the name" | It's now **Microsoft Entra ID** (renamed 2023). The exam uses the new name. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Cloud computing** | Delivery of IT services over the internet, on-demand, pay-as-you-go |
| **CapEx** | One-time large purchase of an asset (e.g., server) |
| **OpEx** | Ongoing expense paid as you use a service |
| **IaaS** | You manage OS+up; provider manages hardware (e.g., Azure VM) |
| **PaaS** | You manage app+data; provider manages OS and runtime (e.g., App Service) |
| **SaaS** | You manage users+data only; provider manages everything else (e.g., M365) |
| **Public cloud** | Multi-tenant cloud provided to anyone (Azure, AWS) |
| **Private cloud** | Cloud dedicated to one organization (on-prem or hosted) |
| **Hybrid cloud** | Public + private connected together |
| **High Availability** | Service stays up during failure (uptime %) |
| **Reliability** | Service recovers from failure and continues over time |
| **Scalability** | Ability to add/remove capacity |
| **Elasticity** | Automatically scale to match real-time demand |
| **Vertical scaling** | Resize a VM bigger or smaller |
| **Horizontal scaling** | Add or remove VM instances |
| **Fault tolerance** | Zero downtime during failure |
| **Disaster recovery** | Process to recover after a major event |
| **Consumption-based pricing** | Pay only for what you actually use |
| **Shared responsibility** | Cloud security duties split between provider and customer |
| **Agility** | Speed at which you can provision/change resources |

---

## ✅ Module 1 Summary

You now know:
- ☁️ Why the cloud exists (Anna's pizza shop)
- 💰 CapEx vs OpEx — and which one the cloud is
- 🍱 IaaS vs PaaS vs SaaS — who manages what
- 🏢 Public, Private, Hybrid deployment models
- 📈 Scalability (vertical vs horizontal) and elasticity
- 🛡️ HA vs DR vs Fault Tolerance vs Business Continuity
- 🤝 Shared Responsibility — what the customer always owns

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) (aim for 22/26 minimum)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Azure Architecture](../Module-02-Azure-Architecture/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Describe cloud computing (AZ-900 path)](https://learn.microsoft.com/training/modules/describe-cloud-compute/)
- 📖 [Microsoft Learn — Benefits of using cloud services](https://learn.microsoft.com/training/modules/describe-benefits-use-cloud-services/)
- 📖 [Microsoft Learn — Cloud service types](https://learn.microsoft.com/training/modules/describe-cloud-service-types/)
- 📖 [Azure Well-Architected Framework — Reliability pillar](https://learn.microsoft.com/azure/well-architected/reliability/)
- 📖 [Shared responsibility in the cloud](https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility)
