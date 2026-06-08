# 🧪 Practice Exam 1, AZ-900 (Halfway Check)

> **Conditions:** Set a 25-minute timer. 25 questions. Treat it like the real thing.
> **Pass mark:** 18/25 (72%), pace target for the real exam
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

## Detailed answer rationales

**Q1. Answer: C**

**Why C is correct.** "Paying for cloud resources as you use them rather than buying assets upfront" is the textbook definition of converting CapEx (capital expenditure buy an asset) to OpEx (operating expenditure pay over time for usage). Module 1 §"CapEx vs OpEx."

**Why the other options are wrong.**
- A: Buying physical servers IS CapEx, not converting it. This is the on-prem model the cloud replaces.
- B: A 10-year hardware contract is still capital procurement, it's CapEx with a payment plan, not OpEx.
- D: Paying employees' fixed salaries is OpEx, but it's *labor expense*, not cloud computing, the question is about cloud economics specifically.

**Exam takeaway.** When the exam mentions "no upfront cost" or "pay-as-you-go," the right answer is almost always *the OpEx / consumption model*.

---

**Q2. Answer: B**

**Why B is correct.** IaaS (Infrastructure as a Service) gives the customer the OS, runtime, middleware, apps, and data to manage; Microsoft only manages the hardware/hypervisor. Module 1 §"The Three Service Models" table.

**Why the other options are wrong.**
- A: PaaS hides the OS and runtime, Microsoft manages those. The customer gets less control, not more.
- C: SaaS hides everything below the application layer. The customer just uses the app.
- D: FaaS (Functions as a Service) is the *most* abstracted, the customer just writes code, doesn't even see the runtime container.

**Exam takeaway.** Memory hook: **I**aaS = **I** do a lot; **S**aaS = **S**omeone else does it.

---

**Q3. Answer: D**

**Why D is correct.** Microsoft 365 (Outlook, Word, Excel, Teams in browser) is software you consume, Microsoft manages everything from the datacenter to the application itself. You manage only your data and users. That is SaaS by definition.

**Why the other options are wrong.**
- A: IaaS would be if you ran Outlook on an Azure VM, but M365 doesn't expose any of that.
- B: PaaS would be if you wrote Outlook-like code on top of Microsoft's runtime, not what M365 is.
- C: Hybrid is a *deployment* model (public + private), not a service model. It's a category error.

**Exam takeaway.** M365 / Dynamics 365 / GitHub.com are the canonical SaaS examples.

---

**Q4. Answer: D**

**Why D is correct.** Horizontal scaling (scale out) means adding more instances of the same size. VM Scale Sets, App Service auto-scale-out, and "more VMs behind a load balancer" are all horizontal scaling. Module 1 §"Scaling: Vertical vs Horizontal."

**Why the other options are wrong.**
- A: Resizing a VM from B2s to D4s is *vertical* scaling (scale up), same VM, bigger size.
- B: Switching regions is geographic redundancy, not scaling.
- C: Upgrading the SSD tier improves performance, not capacity.

**Exam takeaway.** Up = same VM, bigger. Out = more VMs, same size. Stateless apps prefer out.

---

**Q5. Answer: B**

**Why B is correct.** Microsoft renamed Azure Active Directory to **Microsoft Entra ID** in mid-2023. The product is identical; the brand is new. Module 1 + 4.

**Why the other options are wrong.**
- A: "Microsoft Identity Service" doesn't exist as a product name.
- C: "Azure Identity", there is an *SDK library* called Azure.Identity (in .NET / Python) for authentication, but that's not the renamed product.
- D: "Azure Directory Manager" was never a Microsoft product name.

**Exam takeaway.** On the AZ-900, expect "Azure AD" and "Microsoft Entra ID" used interchangeably. The exam may use either.

---

**Q6. Answer: D**

**Why D is correct.** Under shared responsibility, four items are *always* the customer's regardless of service model: **Data, Endpoints, Account & identity management, Access management**. Module 1 §"Shared Responsibility Model."

**Why the other options are wrong.**
- A: Physical datacenter security is *always* Microsoft's.
- B: Hypervisor patching is *always* Microsoft's.
- C: Network cabling is physical infrastructure, Microsoft's.

**Exam takeaway.** The Always-Customer four (Data / Endpoints / Identities / Access) is the single most-tested shared-responsibility fact.

---

**Q7. Answer: D**

**Why D is correct.** From top to bottom: **Management Group → Subscription → Resource Group → Resource**. Policies and RBAC inherit from top down. Module 2 §"The Resource Hierarchy."

**Why the other options are wrong.**
- A: Subscription is *below* Management Group, not above.
- B: Resources can't contain Resource Groups, the direction is wrong.
- C: Tenant is the identity boundary outside the resource hierarchy; this option scrambles the rest.

**Exam takeaway.** Memorize: **MG → Sub → RG → Resource**. Inheritance flows top-down.

---

**Q8. Answer: A (Yes)**

**Why Yes is correct.** A Resource Group's "location" is metadata, it identifies where the RG's metadata is stored. Resources *inside* the RG can be in any region. Module 2 §"Critical Rules to MEMORIZE."

**Why No is wrong.** The "RG region must match resource region" trap is a famous AZ-900 distractor. RGs are *logical containers*, not regional ones.

**Exam takeaway.** A `West US` resource group can hold East US, North Europe, and Japan East resources all at once.

---

**Q9. Answer: A**

**Why A is correct.** Microsoft's documented VM SLA is 99.99% when you deploy 2+ VMs across Availability Zones. Module 2 + 5.

**Why the other options are wrong.**
- B: Availability Sets give 99.95%, one notch lower than AZs.
- C: A single VM with Premium SSD gives 99.9%.
- D: "Two VMs in the same datacenter" provides no real protection, they share fate.

**Exam takeaway.** Three VM SLA tiers: single (99.9%), Availability Set (99.95%), Availability Zones (99.99%).

---

**Q10. Answer: B**

**Why B is correct.** GRS (Geo-Redundant Storage) replicates to the *paired region* in the same geography, 6 copies total (3 primary + 3 paired). Module 3 §"Storage Redundancy."

**Why the other options are wrong.**
- A: LRS keeps 3 copies in *one datacenter*, no cross-region replication.
- C: ZRS replicates across AZs in *one region*, still in-region.
- D: Premium SSD is a disk performance tier, not a storage-account redundancy option.

**Exam takeaway.** LRS = 1 DC. ZRS = AZs in 1 region. GRS = primary + paired region. GZRS = both.

---

**Q11. Answer: A**

**Why A is correct.** ExpressRoute is a *private dedicated circuit* via a Microsoft connectivity partner, traffic never traverses the public internet. Module 3 §"VPN vs ExpressRoute."

**Why the other options are wrong.**
- B: VPN Gateway tunnels traffic *over the public internet* (encrypted). Different transport.
- C: Azure Bastion is browser-based RDP/SSH to VMs, not a hybrid link.
- D: NSG is a layer-3/4 firewall, not a connectivity service.

**Exam takeaway.** ExpressRoute = private circuit, predictable latency, $$$$. VPN = internet, encrypted, $$.

---

**Q12. Answer: C**

**Why C is correct.** Azure Functions is the textbook event-driven serverless compute service. A blob upload trigger is one of the canonical Functions use cases.

**Why the other options are wrong.**
- A: VM works but is wildly over-engineered for an event-driven small piece of code.
- B: App Service is for always-on web apps, not event-driven.
- D: AKS is for orchestrating containers at scale, overkill for one function.

**Exam takeaway.** "When X happens, run small code" → Functions.

---

**Q13. Answer: A**

**Why A is correct.** Azure Files provides fully managed SMB / NFS file shares mountable from Windows, Linux, and macOS.

**Why the other options are wrong.**
- B: Blob is object storage, not mountable as a file share via SMB.
- C: Queue is a messaging primitive, not a file share.
- D: Table is a NoSQL key-value store, not a file share.

**Exam takeaway.** "SMB / NFS file share" → Azure Files. Always.

---

**Q14. Answer: B**

**Why B is correct.** Cosmos DB is Microsoft's globally distributed, multi-model NoSQL database, supports NoSQL (native), MongoDB, Cassandra, Gremlin (graph), and Table APIs.

**Why the other options are wrong.**
- A: That's Azure SQL Database or Azure SQL Managed Instance.
- C: Files / Blob is the file/object storage answer.
- D: Synapse / dedicated SQL pools are the data warehouse answer.

**Exam takeaway.** Cosmos DB = global, multi-model, NoSQL, single-digit-ms latency.

---

**Q15. Answer: B**

**Why B is correct.** Archive tier has the lowest storage cost, but data must be *rehydrated* to Hot or Cool tier before reading, which takes hours. Module 3 §"Blob Storage Access Tiers."

**Why the other options are wrong.**
- A: Hot has the *highest* storage cost (frequent access).
- C/D: Cold is cheaper than Cool but Archive is cheaper still, and only Archive requires rehydration.

**Exam takeaway.** Hot > Cool > Cold > Archive in storage cost. Archive requires rehydration.

---

**Q16. Answer: A**

**Why A is correct.** "Data must NEVER leave on-prem" is the private cloud definition.

**Why the other options are wrong.**
- B: Hybrid (primary in Azure) violates the constraint, data would touch Azure.
- C: Public cloud puts data in shared multi-tenant infrastructure.
- D: Multi-cloud spreads data across *multiple* public clouds.

**Exam takeaway.** Strict on-prem-only = private cloud. Often Azure Stack Hub or Azure Local at the customer site.

---

**Q17. Answer: B (No)**

**Why No is correct.** With Azure Virtual Machines (IaaS), patching the OS is the *customer's* responsibility, Microsoft only manages the hardware/hypervisor.

**Why Yes is wrong.** Confuses IaaS with PaaS. In PaaS (App Service, etc.) Microsoft *does* patch the OS, but VMs are IaaS.

**Exam takeaway.** IaaS OS patching = customer. PaaS OS patching = Microsoft.

---

**Q18. Answer: A (Yes)**

**Why Yes is correct.** App Service is PaaS, Microsoft manages the OS, runtime, and underlying scaling. The customer just deploys code.

**Why No is wrong.** Same trap as Q17 in reverse. App Service is *not* IaaS; the customer doesn't touch the OS.

**Exam takeaway.** App Service is the canonical PaaS example.

---

**Q19. Answer: C**

**Why C is correct.** Azure Application Gateway is the regional L7 (HTTP/HTTPS) load balancer with built-in WAF (Web Application Firewall) for filtering OWASP Top-10 attacks.

**Why the other options are wrong.**
- A: Azure Load Balancer operates at L4 (TCP/UDP), no HTTPS-specific or WAF features.
- B: Front Door is *global* L7, not regional, different scope.
- D: Traffic Manager is DNS-based routing, not a load balancer proper.

**Exam takeaway.** Regional L7 + WAF = Application Gateway. Global L7 + WAF + CDN = Front Door.

---

**Q20. Answer: A**

**Why A is correct.** Front Door is the global L7 entry point with CDN caching, WAF, and SSL offload baked in. Module 3.

**Why the other options are wrong.**
- B: Application Gateway is regional, not global.
- C: Load Balancer is L4, not L7.
- D: NSG is a basic allow/deny network firewall, not a public entry point.

**Exam takeaway.** "Global HTTPS + CDN + WAF" → Front Door, period.

---

**Q21. Answer: C**

**Why C is correct.** ExpressRoute's value proposition is large-enterprise predictable bandwidth, low latency, private (no-internet) hybrid connectivity. Module 3 §"VPN vs ExpressRoute."

**Why the other options are wrong.**
- A: Small offices use VPN, ExpressRoute is overkill and expensive.
- B: Remote-worker encrypted VPN is a *VPN* (point-to-site) use case.
- D: ExpressRoute is expensive, not "free."

**Exam takeaway.** ExpressRoute = the regulated/large-enterprise hybrid answer.

---

**Q22. Answer: A**

**Why A is correct.** App Service is the canonical PaaS, managed OS + runtime, you deploy code. Module 3 §"COMPUTE."

**Why the other options are wrong.**
- B: VM requires managing the OS, exactly what the question wants to avoid.
- C: Functions is event-driven, not the right fit for an always-on web app + API.
- D: AKS is container orchestration, over-engineered for a single web + API service.

**Exam takeaway.** "Web app + API, no OS management" → App Service. Always.

---

**Q23. Answer: B**

**Why B is correct.** AZs are physically separate datacenters within a region with independent power, cooling, and networking. Module 2.

**Why the other options are wrong.**
- A: Not every region has AZs, only AZ-enabled regions.
- C: AZs are *within* a region, not across geographies.
- D: AZs themselves don't cost extra (though cross-AZ bandwidth can carry charges).

**Exam takeaway.** AZ-enabled regions only. Independent power/cooling/network within a region.

---

**Q24. Answer: A**

**Why A is correct.** Composite SLA = product of dependent SLAs. 0.9995 × 0.9999 ≈ 0.99940 ≈ 99.94%. Module 5 §"Composite SLA."

**Why the other options are wrong.**
- B: 99.95% would be if you only multiplied by the lower component, but you need the *product* of all.
- C: 99.99% would be if you only counted the higher one, same error in reverse.
- D: 99.90% is too low (would imply ~3 services).

**Exam takeaway.** Composite is always *lower* than the lowest single component.

---

**Q25. Answer: A (Yes)**

**Why Yes is correct.** Microsoft's published policy: data *into* Azure (ingress) is free; data *out* (egress) is billed per GB. Module 5 §"Factors That Affect Cost."

**Why No is wrong.** Common reversal, students sometimes think "in costs more because Microsoft has to store it." The cost model is "store = inexpensive, take it back out = priced."

**Exam takeaway.** Ingress free, egress billed. Watch egress charges in multi-region designs.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 23–25 | 🏆 Ready to take Practice Exam 2 after Module 6 |
| 18–22 | ✅ Solid foundation, review wrong answers, continue to Module 4 |
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
