# 🧪 Practice Exam 1 — AZ-900 (Halfway Check)

> **Conditions:** Set a 25-minute timer. 25 questions. Treat it like the real thing.
> **Pass mark:** 18/25 (72%) — pace target for the real exam
> Take this AFTER finishing Modules 1–3 (Cloud Concepts, Azure Architecture, Core Services).

---

## 📝 Questions

### 1. Which of the following BEST describes converting CapEx to OpEx?
A. Buying physical servers and depreciating them
B. Negotiating a 10-year hardware contract
C. Paying for cloud resources as you use them rather than buying assets upfront
D. Paying employees a fixed salary

### 2. Which Azure service model requires the customer to manage the OS, runtime, and applications?
A. PaaS
B. IaaS
C. SaaS
D. FaaS

### 3. Microsoft 365 (Outlook, Word in browser) is BEST classified as:
A. IaaS
B. PaaS
C. Hybrid
D. SaaS

### 4. Which is an example of horizontal scaling?
A. Resizing a VM from B2s to D4s
B. Switching regions
C. Upgrading to Premium SSD
D. Adding more VM instances behind a load balancer

### 5. The new name (as of 2023) for Azure Active Directory is:
A. Microsoft Identity Service
B. Microsoft Entra ID
C. Azure Identity
D. Azure Directory Manager

### 6. In Azure's shared responsibility model, which is ALWAYS the customer's responsibility?
A. Physical datacenter security
B. Hypervisor patching
C. Network cabling
D. Data, identities, and access management

### 7. From top to bottom, the Azure resource hierarchy is:
A. Subscription → Management Group → Resource Group → Resource
B. Subscription → Resource → Resource Group → Management Group
C. Tenant → Resource Group → Subscription → Resource
D. Management Group → Subscription → Resource Group → Resource

### 8. Yes/No: A resource group can contain resources from multiple Azure regions.
A. Yes
B. No

### 9. To achieve a 99.99% VM SLA, deploy:
A. Two or more VMs across Availability Zones
B. Two VMs in an Availability Set
C. A single VM with Premium SSD
D. Two VMs in the same datacenter

### 10. Which storage redundancy option replicates data to the PAIRED REGION in the same geography?
A. LRS
B. GRS
C. ZRS
D. Premium SSD

### 11. Which connection type provides a PRIVATE dedicated circuit from on-prem to Azure (NOT over the internet)?
A. ExpressRoute
B. VPN Gateway
C. Azure Bastion
D. NSG

### 12. Which compute service is BEST for an event-driven function that runs when a blob is uploaded?
A. Azure VM
B. App Service
C. Azure Functions
D. AKS

### 13. Which storage service is the BEST fit for mounting an SMB file share to multiple Windows VMs?
A. Azure Files
B. Blob Storage
C. Queue Storage
D. Table Storage

### 14. Cosmos DB is BEST described as:
A. A managed SQL Server
B. A globally distributed multi-model NoSQL database
C. A file storage service
D. A relational data warehouse

### 15. Which blob access tier has the LOWEST storage cost but requires REHYDRATION to read?
A. Hot
B. Archive
C. Cold
D. Cool

### 16. A bank requires data to NEVER leave its on-premises datacenter. Which deployment model fits?
A. Private cloud
B. Hybrid cloud (primary in Azure)
C. Public cloud
D. Multi-cloud

### 17. Yes/No: Microsoft is responsible for patching the OS of Azure Virtual Machines (IaaS).
A. Yes
B. No

### 18. Yes/No: Microsoft is responsible for patching the underlying runtime of Azure App Service (PaaS).
A. Yes
B. No

### 19. Which Azure service provides a Layer-7 (HTTPS) load balancer with built-in WAF for a REGIONAL web app?
A. Azure Load Balancer
B. Azure Front Door
C. Azure Application Gateway
D. Traffic Manager

### 20. Which Azure service provides a GLOBAL HTTPS entry point with CDN and WAF?
A. Front Door
B. Application Gateway
C. Load Balancer
D. NSG

### 21. ExpressRoute is BEST suited for:
A. Quick small-office connectivity
B. Encrypted remote-worker VPN
C. Large enterprises needing predictable bandwidth, low latency, private hybrid connectivity
D. Free internal Azure transfer

### 22. A startup needs to host a custom web app and API without managing the OS or runtime. The BEST service is:
A. Azure App Service
B. Azure VM
C. Azure Functions
D. AKS

### 23. Which is TRUE about Availability Zones?
A. Every Azure region has them
B. They are physically separate datacenters within a region with independent power, cooling, and networking
C. They span across geographies
D. They cost extra

### 24. Two services with SLAs 99.95% and 99.99% are composed in a single workload. The approximate composite SLA is:
A. 99.94%
B. 99.95%
C. 99.99%
D. 99.90%

### 25. Yes/No: Egress (outbound) bandwidth from Azure is billed; ingress (inbound) is free.
A. Yes
B. No

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. A    21. C
2.  B    12. C    22. A
3.  D    13. A    23. B
4.  D    14. B    24. A
5.  B    15. B    25. A
6.  D    16. A
7.  D    17. B
8.  A    18. A
9.  A    19. C
10. B    20. A
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 23–25 | 🏆 Ready to take Practice Exam 2 after Module 6 |
| 18–22 | ✅ Solid foundation — review wrong answers, continue to Module 4 |
| 14–17 | ⚠️ Re-study weak modules; retake in 2 days |
| <14 | 🔁 Restart from Module 1 |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it (1, 2, or 3)
2. Re-read the relevant Reading.md section
3. Add an Anki flashcard or use [Flashcards.md](../Flashcards.md)
4. Try the question again in 3 days

---

➡️ When ready (after finishing Modules 4–6): [Practice Exam 2](./Practice-Exam-2.md)
