# Module 3: Core Azure Services 🛠️

> **Why this module matters:** AZ-900 loves "which service does X?" questions. This module is your map. Compute, networking, storage, databases — know what each does in one breath. ~35–40% of the exam lives in this module's territory.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [IaaS / PaaS / SaaS service models and shared responsibility](../Module-01-Cloud-Concepts/Reading.md#-the-three-service-models-iaas-paas-saas) — covered in Module 1
> - [The Azure resource hierarchy + regions + AZs](../Module-02-Azure-Architecture/Reading.md) — covered in Module 2
> - Basic networking vocabulary: IP address, subnet, load balancer, DNS, HTTPS vs TCP/UDP
>
> This is the biggest module in the course — it's where you learn the named Azure services the exam expects you to recognize on sight. If you're not yet solid on "Microsoft manages X in PaaS, I manage Y," pause and re-read Module 1 §3 before continuing.

---

## 🍕 A Story: Building "PizzaTracker.io" on Azure

Anna's pizza app from Module 1 has grown. *PizzaTracker.io* now serves 4 cities. She needs to build:

1. A **website** for customers to order
2. A **mobile API** for the iOS app
3. **Real-time order tracking** (GPS pings every 10 seconds)
4. A **database** of menus, customers, and orders
5. **Storage** for pizza photos and uploaded receipts
6. A **private network** so the kitchen Pi-based oven controllers can talk to Azure securely

Each of those needs a different Azure service. By the end of this module, you'll know exactly which Azure box each problem fits in. Let's map them.

---

## 💻 COMPUTE — "Run My Code / OS"

Compute is anything that runs your code or workload. Azure has six main flavors. **Pick the wrong one on a scenario question and you lose the mark.**

| Service | What it is | Best for | NOT for |
|---------|-----------|----------|---------|
| **Azure Virtual Machine (VM)** | Full IaaS VM, you control OS | Lift-and-shift, legacy apps, full OS control | Quick, simple web apps; serverless |
| **VM Scale Sets (VMSS)** | Group of identical VMs that auto-scale together | Horizontally scaling stateless workloads | Single-instance / stateful |
| **Azure App Service** | PaaS for web apps + APIs (managed OS + runtime) | Web apps, REST APIs, mobile back-ends | Heavy custom OS needs |
| **Azure Container Instances (ACI)** | Single Docker container, fastest container | Short jobs, dev/test, simple containerized workloads | Multi-container orchestration |
| **Azure Kubernetes Service (AKS)** | Managed Kubernetes (PaaS control plane) | Microservices, container orchestration at scale | Tiny, single-container apps |
| **Azure Functions** | Serverless, event-driven code (FaaS) | "When X happens, run this small piece of code" | Long-running processes (>10 min default) |

🎯 **Scenario decoder:**
- *"Web app + API, no OS management"* → **App Service**
- *"Stateless API that needs to scale to 200 instances during sales"* → **VM Scale Set** or **App Service** auto-scale
- *"Lift our 10-year-old Windows Server app"* → **VM**
- *"When a file lands in blob storage, resize it and save the thumbnail"* → **Functions** (event-driven)
- *"Run a single container for a 5-minute batch job"* → **ACI**
- *"Run our microservices platform with hundreds of services"* → **AKS**

⚠️ **Trap:** AKS is *managed Kubernetes* — Microsoft runs the control plane (PaaS) but you pay for worker node VMs. Don't confuse with ACI (single container, no orchestration).

### Azure Virtual Desktop (AVD) — the "remote desktop" answer

| Service | What it does |
|---------|--------------|
| **Azure Virtual Desktop** | Multi-session Windows 10/11 desktops streamed to users from Azure (formerly Windows Virtual Desktop) |

🎯 If the question says "deploy Windows desktops to remote workers from the cloud," the answer is **AVD**.

---

## 🌐 NETWORKING — "Connect All The Things"

| Service | What it does | Real use |
|---------|--------------|----------|
| **Virtual Network (VNet)** | Private network in Azure (your slice of IP space) | The container for all networked resources |
| **Subnet** | A slice of a VNet | Segment workloads (web/app/db tiers) |
| **VNet Peering** | Connects two VNets privately | Connect a hub-and-spoke or two regions privately |
| **VPN Gateway** | Encrypted tunnel from on-prem to Azure over public internet | Site-to-site VPN, point-to-site (remote workers) |
| **ExpressRoute** | Dedicated **private** circuit from on-prem to Azure (not over internet) | Predictable bandwidth, low latency, very secure hybrid |
| **Azure DNS** | Host your DNS zones in Azure | Manage `pizzatracker.io` records in Azure |
| **Azure Load Balancer** | Layer-4 (TCP/UDP) load balancer | Distribute traffic across VMs |
| **Azure Application Gateway** | Layer-7 (HTTP/HTTPS) load balancer + WAF | Web apps, SSL termination, path-based routing |
| **Azure Front Door** | Global L7 entry point + CDN + WAF | Multi-region web apps, global routing |
| **Azure CDN** | Cache content at edge locations close to users | Speed up static assets globally |
| **Azure Firewall** | Managed, cloud-scale stateful firewall | Centralized network filtering for VNets |
| **NSG (Network Security Group)** | Basic allow/deny rules on subnets/NICs | Free, simple firewall-ish rules |

### VPN vs ExpressRoute (classic exam compare)

| | VPN Gateway | ExpressRoute |
|---|------------|--------------|
| Transport | Over public internet (encrypted) | Private circuit via Microsoft partner |
| Bandwidth | Up to ~10 Gbps | 50 Mbps – 100 Gbps |
| Latency | Variable | Predictable, lower |
| Setup time | Hours | Weeks (involves telco) |
| Cost | $$ | $$$$ |
| Best for | Small offices, remote workers, dev | Large enterprises, mission-critical hybrid |

🎯 **Exam pattern:** "Customer wants predictable, high-bandwidth, low-latency private connection from corporate datacenter to Azure" → **ExpressRoute**. Add "encrypted over internet, lower cost" → **VPN Gateway**.

### Load balancing decision tree

```
Need global multi-region web entry?     → Azure Front Door (+ WAF)
Need regional HTTPS load balancing?     → Application Gateway (L7, +WAF)
Need general TCP/UDP load balancing?    → Load Balancer (L4)
Need traffic split by URL/cookie?       → Application Gateway (L7)
Need DNS-based global routing?          → Traffic Manager
Need a CDN for static content?          → Azure CDN / Front Door
```

---

## 💾 STORAGE — "Save My Bytes"

Storage Accounts in Azure are containers that can hold **four data services**:

| Service | What | Example use |
|---------|------|-------------|
| **Blob Storage** | Unstructured object storage (any file type) | Images, videos, backups, logs, data lake |
| **File Storage (Azure Files)** | Fully managed SMB / NFS file shares | Lift-and-shift file servers, shared config |
| **Queue Storage** | Simple message queue | Decouple producers/consumers; basic async |
| **Table Storage** | NoSQL key-value table | Cheap structured data (largely superseded by Cosmos DB) |

🎯 **Service-pick decoder:**
- *"Store millions of customer photos cheaply"* → **Blob**
- *"Mount a shared drive on multiple VMs from a Windows file path"* → **Azure Files**
- *"Pass small messages between two microservices"* → **Queue** (or Service Bus for more features)
- *"Cheap key-value lookup"* → **Table** (or Cosmos DB Table API)

### Blob Storage Access Tiers (HUGE on exam)

| Tier | When data is accessed | Storage cost | Access cost | Min retention |
|------|----------------------|--------------|-------------|---------------|
| **Hot** | Frequently | $$$ | $ | None |
| **Cool** | Infrequently (~30+ days) | $$ | $$ | 30 days |
| **Cold** | Rarely (~90+ days) | $ | $$$ | 90 days |
| **Archive** | Almost never (offline tier) | $ (cheapest) | $$$$ (rehydrate hours!) | 180 days |

🎯 **Exam pattern:** "Compliance backups we'll never touch unless audited" → **Archive**. Note: Archive data must be **rehydrated** to Hot/Cool before reading (takes hours).

### Disk Types for VMs

| Disk type | Use case | Performance |
|-----------|----------|-------------|
| **Standard HDD** | Dev/test, backup | Cheapest, lowest perf |
| **Standard SSD** | Light prod | Better |
| **Premium SSD** | Most production workloads | High IOPS, low latency |
| **Ultra Disk** | Top-tier DB / SAP HANA / analytics | Highest perf, $$$ |

### Storage Redundancy Options (MEMORIZE — exam favorite)

| Option | Copies | Where |
|--------|--------|-------|
| **LRS** (Locally Redundant) | 3 | Same datacenter (single AZ) |
| **ZRS** (Zone Redundant) | 3 | Across 3 AZs in 1 region |
| **GRS** (Geo Redundant) | 6 | 3 in primary region + 3 in paired region |
| **GZRS** (Geo-Zone Redundant) | 6 | Across AZs in primary + 3 in paired region (best HA + DR) |
| **RA-GRS** / **RA-GZRS** | + read access | Same as GRS/GZRS but secondary is readable |

🎯 **Exam pattern:** "Cheapest option that survives loss of a datacenter" → **ZRS**. "Survives loss of an entire region" → **GRS** or **GZRS**.

---

## 🗄️ DATABASES — "Store My Structured Data"

| Service | Type | When to use |
|---------|------|-------------|
| **Azure SQL Database** | PaaS managed SQL Server | Cloud-native SQL apps; no SQL admin overhead |
| **Azure SQL Managed Instance** | Near-100% SQL Server compatibility | Lift-and-shift SQL Server with minimal changes |
| **SQL Server on Azure VM** | IaaS SQL Server (you manage everything) | Need full OS + SQL control |
| **Cosmos DB** | Globally distributed NoSQL (multi-model) | Massive scale, multi-region writes, low-latency |
| **Azure Database for MySQL — Flexible Server** | Managed MySQL | OSS MySQL workloads |
| **Azure Database for PostgreSQL — Flexible Server** | Managed PostgreSQL | OSS Postgres workloads |
| **Azure Database for MariaDB** | (Retired — replaced by MySQL/PostgreSQL) | (Don't pick this on exam) |
| **Azure Cache for Redis** | Managed in-memory cache | Speed up DB calls, session state |

### Cosmos DB — The exam darling

Cosmos DB is the answer when the question mentions ANY of:
- *Globally distributed*
- *Multi-region writes*
- *Single-digit millisecond latency at planet scale*
- *NoSQL, document/graph/key-value/column-family*
- *5 well-defined consistency levels*

It supports multiple APIs: **NoSQL (native), MongoDB, Cassandra, Gremlin (graph), Table**.

🎯 **Exam pattern:** "Global app needs <10 ms reads from anywhere with multi-region writes" → **Cosmos DB**.

### Azure SQL Database flavors (don't confuse them!)

| Flavor | Compatibility | Management | Best for |
|--------|--------------|------------|----------|
| **Azure SQL Database (single/elastic pool)** | Latest SQL DB engine, NOT full SQL Server | Microsoft handles everything | Cloud-native app development |
| **Azure SQL Managed Instance** | Near-100% SQL Server compatible | Microsoft manages | Lift-and-shift on-prem SQL Server |
| **SQL Server on Azure VM** | Exact SQL Server (any version) | YOU manage | Total control / complex configs |

---

## 🔌 Other Services Worth Knowing (lighter touch for AZ-900)

### Integration & messaging

| Service | What it does |
|---------|--------------|
| **Service Bus** | Enterprise messaging (queues, topics, sessions, transactions) |
| **Event Grid** | Event routing (publish/subscribe for events) |
| **Event Hubs** | High-throughput event ingestion (millions/sec — IoT, telemetry) |
| **Logic Apps** | Low-code workflow / integration (connect SaaS, etc.) |

### Big data / analytics (light touch)

| Service | What it does |
|---------|--------------|
| **Azure Synapse Analytics** | Unified analytics (SQL + Spark + pipelines) — modern data warehouse |
| **Azure Databricks** | Apache Spark-based analytics platform |
| **HDInsight** | Managed Hadoop/Spark/Kafka |
| **Microsoft Fabric** | Unified data + analytics SaaS (newer) |

### IoT

| Service | What it does |
|---------|--------------|
| **IoT Hub** | Bidirectional comms with millions of IoT devices |
| **IoT Central** | SaaS app builder for IoT (higher-level than IoT Hub) |
| **Azure Sphere** | Secure microcontroller + OS + cloud security service |

### AI / ML (super light — AZ-900 names only)

| Service | What it does |
|---------|--------------|
| **Azure AI Services** (formerly Cognitive Services) | Pre-built AI APIs (vision, speech, language) |
| **Azure AI Foundry** | Build, evaluate, deploy AI apps (umbrella for Azure OpenAI + ML) |
| **Azure Machine Learning** | Build, train, deploy custom ML models |
| **Azure OpenAI Service** | GPT-4, embeddings, DALL-E via Azure |

---

## 🧭 Service-Picker Cheat-Decoder (the one-shot map)

| If the question says... | Pick... |
|------------------------|---------|
| "Web app + REST API, no OS management" | **App Service** |
| "Run code in response to events" | **Functions** |
| "Container orchestration at scale" | **AKS** |
| "Just run this one container" | **ACI** |
| "Lift-and-shift legacy Windows server" | **VM** |
| "Auto-scale stateless VMs" | **VM Scale Sets** |
| "Stream Windows desktops to users" | **Azure Virtual Desktop** |
| "Private network in Azure" | **Virtual Network** |
| "Connect two VNets privately" | **VNet Peering** |
| "On-prem to Azure over internet (encrypted)" | **VPN Gateway** |
| "On-prem to Azure private dedicated circuit" | **ExpressRoute** |
| "Global HTTPS entry point + WAF" | **Front Door** |
| "Regional HTTPS load balancer + WAF" | **Application Gateway** |
| "TCP/UDP load balancer" | **Load Balancer** |
| "DNS-based global routing" | **Traffic Manager** |
| "Unstructured object storage" | **Blob Storage** |
| "Mount as SMB / NFS share" | **Azure Files** |
| "Globally distributed NoSQL" | **Cosmos DB** |
| "Managed SQL Server lift-and-shift" | **SQL Managed Instance** |
| "Cloud-native managed SQL" | **Azure SQL Database** |
| "Managed MySQL / PostgreSQL" | **Azure DB for MySQL / PostgreSQL Flexible Server** |
| "In-memory cache" | **Azure Cache for Redis** |
| "High-throughput event ingestion (IoT scale)" | **Event Hubs** |
| "Enterprise messaging queues + topics" | **Service Bus** |
| "Routing of events" | **Event Grid** |
| "Low-code workflow integration" | **Logic Apps** |

---

## 🚨 Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "App Service is IaaS" | No — it's PaaS. You don't see the OS. |
| "AKS = ACI for big jobs" | No — AKS is full Kubernetes orchestration; ACI is just a single container |
| "VPN Gateway and ExpressRoute are the same with different speeds" | No — ExpressRoute is a *private* circuit (no public internet), VPN goes over the internet |
| "Blob can be mounted as a file share" | No — use Azure Files for SMB/NFS file shares |
| "Archive blobs are instantly readable" | No — must be rehydrated (hours) |
| "Cosmos DB is for SQL workloads" | No — Cosmos DB is NoSQL; for SQL use Azure SQL Database |
| "GRS replicates across AZs in one region" | No — that's ZRS. GRS replicates to the paired region. |
| "App Gateway and Load Balancer are interchangeable" | No — App Gateway is L7 (HTTP), Load Balancer is L4 (TCP/UDP) |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **VM** | IaaS virtual machine; you manage OS |
| **VMSS** | VM Scale Set — group of identical VMs that auto-scale |
| **App Service** | PaaS web app / API hosting |
| **ACI** | Single Docker container, fastest start |
| **AKS** | Managed Kubernetes (PaaS control plane) |
| **Functions** | Serverless event-driven code (FaaS) |
| **AVD** | Azure Virtual Desktop — streamed Windows desktops |
| **VNet** | Private network in Azure |
| **VPN Gateway** | Encrypted tunnel over internet to on-prem |
| **ExpressRoute** | Private dedicated circuit to Azure |
| **NSG** | Network Security Group — basic firewall rules |
| **Front Door** | Global L7 entry + CDN + WAF |
| **Application Gateway** | Regional L7 load balancer + WAF |
| **Load Balancer** | L4 load balancer (TCP/UDP) |
| **Blob** | Unstructured object storage |
| **Azure Files** | Managed SMB/NFS file share |
| **LRS/ZRS/GRS/GZRS** | Storage redundancy tiers (datacenter / zone / region / both) |
| **Hot / Cool / Cold / Archive** | Blob access tiers |
| **Cosmos DB** | Global NoSQL multi-model DB |
| **Azure SQL DB vs Managed Instance vs SQL on VM** | PaaS-cloud vs PaaS-lift-shift vs IaaS |
| **Event Hubs** | High-throughput event ingestion |
| **Service Bus** | Enterprise messaging |

---

## 📊 Case Study — Walgreens Boots Alliance's Azure migration (2018–2023)

**Situation.** Walgreens Boots Alliance (WBA) is the world's largest pharmacy retailer — more than 9,000 stores in the U.S. (Walgreens) plus the UK Boots chain, ~10,000+ stores worldwide, and roughly **380,000 employee endpoints** as of 2023. Before 2018, WBA's IT estate was a sprawl of acquired-company datacenters from decades of M&A (Walgreens + Alliance Boots merged in 2014; Rite Aid stores were added in 2017–2018). The retailer was running point-of-sale, e-commerce, prescription-management, and customer-facing apps on owned hardware in roughly a dozen U.S. and EU datacenters. None of the pieces talked easily to each other. CEO Stefano Pessina announced a multi-year cloud strategy in 2018 with Microsoft as the partner of record (Walgreens / Microsoft joint announcement, 2019-01-15).

**Decision.** WBA committed to a **7-year strategic partnership with Microsoft** worth a "multi-billion-dollar" book of business. The headline moves:
- Migrate Walgreens.com, the **myWalgreens** loyalty platform, the pharmacy management system, and the corporate productivity stack to Azure + Microsoft 365 — about **380,000 endpoints** to M365 and the core retail/e-commerce stack to Azure (Microsoft press release, 2019-01-15)
- Use **Azure Virtual Machines + VM Scale Sets** for the lifted-and-shifted Windows Server applications (legacy ERP, pharmacy back-office, Rite Aid systems)
- Use **Azure App Service + Azure SQL Database** for the rebuilt e-commerce front-end
- Deploy globally across **US East / US West / North Europe / UK South** for latency-to-store plus regulatory residency (UK Boots data stays in UK South)
- Use **Azure Site Recovery + Azure Backup** to replace on-prem DR setups
- Build a *retail-as-a-service* platform on top — Azure became the substrate WBA later used to offer in-store healthcare clinics, prescription home-delivery integration, and (post-2020) COVID vaccination scheduling at U.S. scale

**Outcome.** By 2023:
- WBA shut down or repurposed roughly **two-thirds of its owned datacenter footprint** (WBA infrastructure reporting, FY2023 annual report)
- During the U.S. COVID vaccine rollout (Dec 2020 onward), Walgreens administered **70+ million doses** through Azure-hosted scheduling and inventory-management systems — a peak load that would have been impossible on the pre-2018 infrastructure
- The myWalgreens loyalty program crossed **100 million members** in 2022, running on Azure-native data services + Azure Cosmos DB for the customer-360 profile
- WBA's e-commerce same-store digital sales grew double-digit percent year-over-year through 2021–2022 — Walgreens went from "physical pharmacy with a website" to "omnichannel retailer with a fulfillment network"
- The migration also surfaced WBA's significant *cost-pressure* problem (executive turnover 2022–2024, retail margin compression) — but the cloud platform itself is consistently cited as enabling the company to *respond faster* to those pressures than they could have on owned hardware

**Lesson for the exam / for practitioners.** Three AZ-900 concepts are visible end-to-end:
1. **Compute service-picker discipline.** WBA didn't move *everything* to one Azure compute service. Legacy ERP → VMs (lift-and-shift IaaS). New e-commerce → App Service (PaaS). Vaccine-scheduling APIs → Azure Functions + Cosmos DB. Bulk batch jobs → ACI / Spot. The exam's "which service?" questions reflect exactly this discipline — different workloads → different services.
2. **Hybrid + sovereignty in one company.** UK Boots data sits in UK South (GDPR). U.S. Walgreens data sits in US East/West (HIPAA, state pharmacy boards). One global identity (Microsoft Entra ID, formerly Azure AD) ties them together. This is the canonical multi-region, multi-regulatory pattern the exam tests.
3. **Cloud economics under pressure.** Even at 380K-endpoint scale, the math worked out — but WBA's later cost issues are a reminder that the cloud isn't a magic profitability switch. It's an *agility* lever; whether the business converts agility into profit is up to leadership. (See the §6 discussion in Module 1.)

Microsoft has used the WBA case in multiple Microsoft Mechanics and Ignite sessions as the canonical "Fortune 500 enterprise lift-and-shift + modernization" reference (Microsoft Mechanics, "Walgreens on Azure," 2022-09; Microsoft Ignite 2023).

**Discussion (Socratic).**
- **Q1:** WBA chose Azure exclusively over a multi-cloud (AWS + Azure) strategy. Argue both sides. At what point in WBA's growth did exclusivity stop being "vendor lock-in" and start being "strategic depth with one partner"? What's the contract clause you'd insist on if you were WBA's CIO signing the 2019 deal?
- **Q2:** WBA's lift-and-shift of legacy ERP onto Azure VMs (IaaS) preserved the OS, the patch cycles, and the operational pain — they just moved it to someone else's hardware. A purist would argue this is the *wrong* migration pattern and they should have refactored to PaaS. Defend the lift-and-shift choice at WBA's scale and timeline (380K endpoints in 7 years). When is lift-and-shift the *strategically correct* answer rather than a copout?
- **Q3:** During COVID vaccine rollout (Dec 2020 – mid-2021), Walgreens' Azure-hosted scheduling system absorbed an unprecedented spike — millions of appointments booked in a single week. Compare this to Anna's pizza-shop scaling story in Module 1. At what enterprise scale does the *cloud-as-utility* argument stop being a marketing pitch and become an existential requirement? (Cite the auto-scale economics and the seasonality argument explicitly.)

---

## ✅ Module 3 Summary

You now know:
- 💻 The 6 compute services and when to pick each
- 🌐 VNet basics + VPN vs ExpressRoute + L4 vs L7 load balancing
- 💾 Storage types + access tiers + redundancy options
- 🗄️ Cosmos DB vs SQL DB vs SQL Managed Instance vs SQL on VM
- 🧭 A one-shot service-picker decoder
- 📊 One canonical 2018–2023 migration case (Walgreens Boots Alliance on Azure)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) (aim for 24/28 minimum)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (covers Modules 1–3)
5. ➡️ Move to [Module 4: Identity, Governance & Security](../Module-04-Identity-Governance-Security/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4 secures every service named here (RBAC + Policy + Locks across compute / network / storage / data); Module 5 puts cost and SLA math on top — including the composite-SLA calculation across App Service + SQL DB which this module names; Module 6 introduces the tools (Bicep, Azure Migrate, Azure Monitor) that operationalize this service catalog.
> - Cross-course: `06-Azure-Administrator` Module 3–7 (AZ-104) covers the same services at *operational* depth — networking deep-dive, storage performance tuning, VM lifecycle management. `08-Azure-AI-Engineer` (AI-102) builds on the Cosmos DB + Azure OpenAI services introduced here.
> - Practice: Practice Exam 1 (after Modules 1–3) draws roughly 10–12 questions from this module's service catalog. Final Mock Exam includes the Cosmos DB "multi-API" question (Q50) which is canonical.

---

## 💬 Discussion — Socratic prompts

1. **The compute-service decision tree under pressure.** A team gets a request to "host this thing on Azure" — it's a Python script that processes 100GB of CSV files once a week from a partner FTP. Walk through the service-picker decision: VM vs App Service vs Functions vs ACI vs AKS. What's the *cheapest* answer? The *fastest* answer? The *easiest-to-hand-off-to-an-intern* answer? Which is the *right* answer, and why is it not the cheapest? (Cite the Module 3 compute table.)
2. **ExpressRoute vs VPN at the breakeven.** A 200-person company is moving its primary database to Azure. ExpressRoute would cost ~$3,000/month plus a one-time circuit setup fee (telco involvement, 6–8 weeks). VPN Gateway costs ~$140/month and is up in an afternoon. The CFO loves VPN; the database team's SLO is sub-50ms write latency from the on-prem application servers. Argue both sides. What's the *workload characteristic* that flips the answer between them, and at what company size do you stop being able to justify ExpressRoute's cost? (Reference the VPN-vs-ExpressRoute table.)
3. **Cosmos DB as the universal answer (trap).** A junior architect tries to pick Cosmos DB for *every* new project because "globally distributed multi-model NoSQL with single-digit-ms latency" sounds best. List the three workload profiles where Cosmos DB is *the wrong choice* — and what the right Azure database service is for each. (Hint: think about a regulated SQL Server lift-and-shift, a tiny in-memory cache, and a relational reporting workload.)
4. **The blob tier optimization problem.** A media company stores **5 PB of raw video footage** that is accessed *maybe once per quarter*. Their finance team budgeted Hot tier "to be safe." Calculate (qualitatively) the cost difference of Hot vs Cool vs Cold vs Archive. What's the right tier, and what's the trap nobody mentions until the first time they need to rehydrate? When would you *intentionally* over-pay for Hot instead of Archive, even at this access pattern?
5. **L4 vs L7 vs global L7.** A retailer has a regional e-commerce site (single Azure region, US East), serving Black-Friday-scale spikes. The current stack uses an Azure Load Balancer (L4) in front of App Service. The new VP of Engineering wants to swap in Front Door (global L7 + WAF + CDN) instead "because best practices." Walk through the *honest* cost-benefit. When is L4 the right tool and L7 over-engineering? When does going global (Front Door) actually help a *single-region* business? (Hint: latency, DDoS protection, and TLS termination economics.)

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Azure compute services](https://learn.microsoft.com/training/modules/azure-compute-fundamentals/) — compute service overview
- 📖 [Microsoft Learn — Azure networking services](https://learn.microsoft.com/training/modules/azure-networking-fundamentals/) — VNet, peering, gateways
- 📖 [Microsoft Learn — Azure storage services](https://learn.microsoft.com/training/modules/azure-storage-fundamentals/) — Blob, Files, Queue, Table + redundancy options
- 📖 [Microsoft Learn — Azure database services](https://learn.microsoft.com/training/modules/azure-database-fundamentals/) — SQL DB, Managed Instance, Cosmos DB, MySQL/Postgres
- 📖 [Choose an Azure compute service decision tree](https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree) — the official Microsoft picker
- 📖 **Microsoft Cloud Adoption Framework — *Migrate* methodology** (Microsoft, current edition checked 2026-05). Has named patterns for lift-and-shift (rehost), refactor (repurpose), rebuild, and replace — exactly the choices WBA worked through.
- 📖 *Designing Distributed Systems* — Brendan Burns, 2018, O'Reilly. The pattern catalog for the AKS / multi-service architectures introduced here.
