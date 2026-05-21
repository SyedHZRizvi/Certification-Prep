# Module 3: Core Azure Services 🛠️

> **Why this module matters:** AZ-900 loves "which service does X?" questions. This module is your map. Compute, networking, storage, databases — know what each does in one breath. ~35–40% of the exam lives in this module's territory.

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

## ✅ Module 3 Summary

You now know:
- 💻 The 6 compute services and when to pick each
- 🌐 VNet basics + VPN vs ExpressRoute + L4 vs L7 load balancing
- 💾 Storage types + access tiers + redundancy options
- 🗄️ Cosmos DB vs SQL DB vs SQL Managed Instance vs SQL on VM
- 🧭 A one-shot service-picker decoder

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) (aim for 24/28 minimum)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (covers Modules 1–3)
5. ➡️ Move to [Module 4: Identity, Governance & Security](../Module-04-Identity-Governance-Security/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Azure compute services](https://learn.microsoft.com/training/modules/azure-compute-fundamentals/)
- 📖 [Microsoft Learn — Azure networking services](https://learn.microsoft.com/training/modules/azure-networking-fundamentals/)
- 📖 [Microsoft Learn — Azure storage services](https://learn.microsoft.com/training/modules/azure-storage-fundamentals/)
- 📖 [Microsoft Learn — Azure database services](https://learn.microsoft.com/training/modules/azure-database-fundamentals/)
- 📖 [Choose an Azure compute service decision tree](https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree)
