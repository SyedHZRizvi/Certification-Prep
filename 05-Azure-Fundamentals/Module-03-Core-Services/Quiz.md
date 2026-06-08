# ✏️ Module 3 Quiz: Core Azure Services

> **Instructions:** Answer all 28 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 24/28 minimum. This is the biggest module, extra practice pays off.

---

## Questions

### Q1. A company wants to host a custom .NET web app and REST API without managing the OS or runtime. Which service is BEST? *(Apply)*
A. Azure Virtual Machine
B. Azure App Service
C. Azure Container Instances
D. Azure Functions

---

### Q2. Which Azure service is BEST for running event-driven code that should fire only when a blob is uploaded? *(Apply)*
A. Azure VM
B. Azure App Service
C. Azure Functions
D. Azure Kubernetes Service

---

### Q3. A team needs to orchestrate hundreds of microservices in containers across many nodes. Which is BEST? *(Apply)*
A. Azure Container Instances (ACI)
B. Azure Kubernetes Service (AKS)
C. App Service
D. Azure Functions

---

### Q4. Which connectivity option gives a **private, dedicated** circuit from on-prem to Azure (NOT over the public internet)? *(Remember)*
A. VPN Gateway
B. ExpressRoute
C. Azure Firewall
D. Azure Bastion

---

### Q5. Which service is a Layer 7 (HTTP/HTTPS) load balancer with built-in WAF, used in front of regional web apps? *(Understand)*
A. Azure Load Balancer
B. Azure Application Gateway
C. Azure Traffic Manager
D. Azure DNS

---

### Q6. Azure Front Door is BEST described as: *(Remember)*
A. A regional TCP load balancer
B. A global HTTP/HTTPS entry point with CDN and WAF
C. A VPN gateway alternative
D. A storage service

---

### Q7. Which storage redundancy option replicates data across multiple Availability Zones within a region? *(Remember)*
A. LRS
B. ZRS
C. GRS
D. RA-GRS

---

### Q8. Which storage redundancy option replicates data to the **paired region** in the same geography? *(Remember)*
A. LRS
B. ZRS
C. GRS
D. Premium SSD

---

### Q9. To share files between multiple Azure VMs and on-prem servers as a mounted SMB drive, use: *(Apply)*
A. Blob Storage
B. Azure Files
C. Queue Storage
D. Table Storage

---

### Q10. Which Azure database is a globally distributed, multi-model NoSQL database with single-digit-millisecond latency? *(Understand)*
A. Azure SQL Database
B. Azure SQL Managed Instance
C. Cosmos DB
D. Azure Database for MySQL

---

### Q11. A company is migrating a complex on-prem SQL Server with hundreds of custom features and wants minimum changes. Which service? *(Apply)*
A. Azure SQL Database
B. Azure SQL Managed Instance
C. Cosmos DB
D. Azure Cache for Redis

---

### Q12. Which blob access tier has the LOWEST storage cost but HIGHEST access cost and requires rehydration? *(Remember)*
A. Hot
B. Cool
C. Cold
D. Archive

---

### Q13. Which compute service is BEST for a single, short-lived container? *(Apply)*
A. AKS
B. ACI
C. App Service
D. VM Scale Set

---

### Q14. Which connects two Azure VNets together privately? *(Remember)*
A. VPN Gateway
B. ExpressRoute
C. VNet Peering
D. Network Security Group

---

### Q15. An NSG (Network Security Group) is BEST described as: *(Understand)*
A. A managed cloud-scale firewall
B. Basic allow/deny rules on subnets or NICs
C. A DDoS protection service
D. A VPN device

---

### Q16. A team needs millions-per-second event ingestion for IoT telemetry. Which service? *(Apply)*
A. Service Bus
B. Event Hubs
C. Logic Apps
D. Event Grid

---

### Q17. Which service offers enterprise messaging with queues, topics, sessions, and transactions? *(Understand)*
A. Service Bus
B. Event Hubs
C. Storage Queue
D. Event Grid

---

### Q18. Which service streams Windows 10/11 desktops to remote workers from Azure? *(Remember)*
A. Azure App Service
B. Azure Virtual Desktop
C. Azure Bastion
D. AKS

---

### Q19. Which is TRUE about App Service vs Azure VM? *(Analyze)*
A. Both are IaaS
B. App Service is PaaS, VM is IaaS
C. App Service is SaaS
D. VM is PaaS

---

### Q20. Which storage redundancy option provides the BEST combined HA + DR? *(Evaluate)*
A. LRS
B. ZRS
C. GRS
D. GZRS

---

### Q21. Azure Cache for Redis is BEST used for: *(Understand)*
A. Permanent record storage
B. In-memory caching to speed up DB queries / session state
C. Replacing your relational database
D. File sharing across VMs

---

### Q22. A company wants the lowest cost storage redundancy that still survives an entire datacenter (single AZ) failure within a region. *(Analyze)*
A. LRS
B. ZRS
C. GRS
D. None, pick a different region

---

### Q23. Which is the right Azure choice for a low-code workflow that connects Salesforce, Outlook, and an internal DB on a schedule? *(Apply)*
A. Azure Functions
B. Logic Apps
C. App Service
D. AKS

---

### Q24. Which service is the regional L7 load balancer (HTTPS) AND includes a WAF? *(Understand)*
A. Azure Front Door
B. Azure Application Gateway
C. Azure Load Balancer
D. Traffic Manager

---

### Q25. Yes/No: Cosmos DB supports multiple APIs including MongoDB and Cassandra. *(Remember)*
A. Yes
B. No

---

### Q26. Yes/No: Archive blobs are readable instantly without rehydration. *(Understand)*
A. Yes
B. No

---

### Q27. Yes/No: Azure App Service requires you to manage the underlying OS patches. *(Analyze)*
A. Yes
B. No

---

### Q28. A retailer needs auto-scaling web servers behind a load balancer with stateless workloads handling spike traffic. The MOST appropriate compute is: *(Apply)*
A. A single large VM
B. A VM Scale Set OR App Service auto-scale
C. ACI
D. AKS with a single pod

---

## 🎯 Answers + Explanations

### Q1: **B. Azure App Service**
PaaS for web apps/APIs. You deploy code, Microsoft runs OS + runtime + scaling.

### Q2: **C. Azure Functions**
Event-driven, pay-per-execution serverless. Blob upload trigger is a classic Functions use case.

### Q3: **B. Azure Kubernetes Service (AKS)**
Microservices orchestration at scale = Kubernetes. ACI is for single containers.

### Q4: **B. ExpressRoute**
Dedicated private circuit via Microsoft partner. NOT over public internet. VPN Gateway IS over the internet (encrypted).

### Q5: **B. Application Gateway**
Regional L7 with WAF. Load Balancer is L4. Front Door is global.

### Q6: **B. Global HTTP/HTTPS entry point with CDN and WAF**
Front Door is the global counterpart to Application Gateway.

### Q7: **B. ZRS**
Zone-Redundant Storage replicates across AZs within one region. GRS goes across regions.

### Q8: **C. GRS**
Geo-Redundant Storage = 6 copies (3 primary + 3 paired region).

### Q9: **B. Azure Files**
SMB / NFS mountable file share. Blob is object storage, not a file share.

### Q10: **C. Cosmos DB**
Globally distributed, multi-model NoSQL, Cosmos DB's pitch.

### Q11: **B. Azure SQL Managed Instance**
Near-100% SQL Server compatibility, designed for lift-and-shift of complex SQL Server workloads.

### Q12: **D. Archive**
Cheapest storage cost, highest retrieval cost, must be rehydrated (hours) before reading. 180-day min retention.

### Q13: **B. ACI (Azure Container Instances)**
Fastest container start, no orchestration overhead. Perfect for short, single-container jobs.

### Q14: **C. VNet Peering**
Private connection between VNets (same region or cross-region "global peering"). VPN/ExpressRoute are for on-prem.

### Q15: **B. Basic allow/deny rules on subnets or NICs**
NSGs are free, basic L3/L4 rules. Azure Firewall is the managed cloud-scale firewall.

### Q16: **B. Event Hubs**
Massive event ingestion (millions/sec). Service Bus is for enterprise messaging, not raw throughput.

### Q17: **A. Service Bus**
Queues, topics, sessions, transactions, dead-letter, full enterprise messaging.

### Q18: **B. Azure Virtual Desktop**
Multi-session Windows 10/11 desktops streamed to users. Formerly Windows Virtual Desktop.

### Q19: **B. App Service is PaaS, VM is IaaS**
App Service abstracts OS and runtime; VM exposes them.

### Q20: **D. GZRS**
Geo-Zone-Redundant Storage = ZRS in primary region + LRS in paired region = best HA + DR.

### Q21: **B. In-memory caching**
Reduces DB load, speeds up frequent reads, stores session state.

### Q22: **B. ZRS**
ZRS spreads across AZs, surviving a datacenter (single-AZ) loss. LRS does not.

### Q23: **B. Logic Apps**
Low-code, connector-based workflow service. Functions is code; Logic Apps is visual workflow.

### Q24: **B. Application Gateway**
Regional, L7 (HTTP/HTTPS), WAF built-in. Front Door is global; Load Balancer is L4.

### Q25: **A. Yes**
Cosmos DB supports NoSQL (native), MongoDB, Cassandra, Gremlin (graph), and Table APIs.

### Q26: **B. No**
Archive must be rehydrated to Hot/Cool first, takes hours.

### Q27: **B. No**
App Service is PaaS. Microsoft patches the OS.

### Q28: **B. VM Scale Set OR App Service auto-scale**
Stateless + spike traffic = horizontal scaling, exactly what VMSS and App Service auto-scale do.

---

## 📊 Score Yourself

- 27–28/28 → 🏆 You can take Practice Exam 1 right now
- 24–26/28 → ✅ Solid, review wrong answers, then take Practice Exam 1
- 20–23/28 → ⚠️ Re-read the compute + storage sections
- <20/28 → 🔁 Re-do reading + re-watch Adam Marczak compute video

---

## 🃏 Add To Your Flashcards

- Compute service decoder (pick rule for each)
- VPN vs ExpressRoute one-liner
- L4 vs L7 load balancers (Load Balancer, App Gateway, Front Door)
- Storage redundancy (LRS / ZRS / GRS / GZRS, copy counts and locations)
- 4 blob access tiers
- Cosmos DB vs Azure SQL DB vs Managed Instance

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), then [Module 4: Identity, Governance & Security](../Module-04-Identity-Governance-Security/Reading.md)
