# 🧪 Final Mock Exam — AZ-900 (Real Exam Length)

> **Conditions:** Set a 45-minute timer (the REAL exam time). 50 questions. Sit at a clean desk. No notes. No Google. No phone.
> **Pass mark:** 35/50 (70% — same as the real exam's 700/1000)
> Take this ONE DAY BEFORE the real exam.

This is intentionally a mix of:

- Standard multiple choice (most questions)
- **Yes/No three-part scenario sets** (Microsoft's signature style — #41–43 and #47–49)
- Single Yes/No items sprinkled throughout

---

## 📝 Questions

### 1. Which is TRUE about cloud computing?
A. It eliminates the need to manage any infrastructure
B. It is always cheaper than on-premises
C. It is a delivery of IT services on-demand over the internet, with pay-as-you-go pricing
D. It eliminates all security concerns

### 2. Which scenario BEST describes elasticity?
A. A single VM is upgraded to a bigger size
B. Servers are bought in advance for a 3-year plan
C. Resources are added automatically when demand rises and removed when demand drops
D. Resources are deployed across two regions

### 3. Which Azure service model gives the customer FULL control over the operating system?
A. IaaS
B. PaaS
C. SaaS
D. FaaS

### 4. Microsoft Dynamics 365 is BEST classified as:
A. IaaS
B. PaaS
C. SaaS
D. Hybrid

### 5. Which is TRUE about CapEx vs OpEx?
A. CapEx is paid as you use
B. Cloud converts CapEx to OpEx — paying as you consume rather than buying assets
C. OpEx is an upfront capital purchase
D. They are the same

### 6. Yes/No: Reservations in Azure are considered CapEx because you commit for 1–3 years.
A. Yes
B. No

### 7. In Azure's shared responsibility model, which is ALWAYS the customer's responsibility regardless of service model?
A. Data, identities, accounts, access management, endpoints
B. Physical datacenter security
C. Hypervisor patching
D. Underlying network cabling

### 8. The Azure region pair of "North Europe" (Ireland) is typically:
A. East US
B. West Europe (Netherlands)
C. UK South
D. There is no pair

### 9. Yes/No: A resource group can contain resources from multiple Azure regions.
A. Yes
B. No

### 10. To apply a single Azure Policy to ALL subscriptions in an organization, the MOST efficient approach is:
A. Apply at a management group containing all subscriptions
B. Apply the policy to each subscription individually
C. Apply at each resource group
D. Apply via PowerShell on each VM

### 11. Availability Zones are:
A. Physically separate datacenters within a region with independent power, cooling, and networking
B. Logical containers for resources
C. Multiple regions in different countries
D. Backup copies of data

### 12. Which deployment achieves the 99.99% VM SLA?
A. Two or more VMs across Availability Zones
B. Two VMs in an Availability Set
C. Single VM with Standard HDD
D. A single VM in a sovereign region

### 13. Which storage redundancy option replicates data across 3 AZs in a region only (no cross-region)?
A. LRS
B. GZRS
C. GRS
D. ZRS

### 14. Which Azure compute service is BEST for an event-driven function triggered by a queue message?
A. Azure VM
B. Azure App Service
C. AKS
D. Azure Functions

### 15. To deploy a custom web app + API without managing OS or runtime, choose:
A. Azure VM
B. ACI
C. Azure App Service
D. AKS

### 16. Which Azure database is globally distributed, multi-model NoSQL with single-digit-millisecond latency?
A. Cosmos DB
B. Azure SQL Managed Instance
C. Azure SQL Database
D. Azure Cache for Redis

### 17. Which Azure service is BEST for orchestrating hundreds of microservices in containers?
A. ACI
B. App Service
C. AKS
D. VM Scale Set

### 18. Which is a Layer-7 GLOBAL HTTPS entry point with CDN and WAF?
A. Application Gateway
B. Load Balancer
C. Front Door
D. NSG

### 19. Which is the BEST option for a private, dedicated, high-bandwidth connection from on-prem to Azure?
A. VPN Gateway
B. NSG
C. Front Door
D. ExpressRoute

### 20. Yes/No: Ingress data into Azure is billed.
A. Yes
B. No

### 21. The Azure free account includes:
A. Unlimited compute for 1 year
B. Free ExpressRoute circuit
C. Free Microsoft 365 for life
D. $200 USD credit for 30 days + 12 months of select services + always-free tier

### 22. To migrate a complex on-prem SQL Server with minimal compatibility changes, the MOST appropriate target is:
A. Azure SQL Database (single)
B. Azure SQL Managed Instance
C. Cosmos DB
D. SQL Server on Azure VM

### 23. Microsoft renamed Azure Active Directory in 2023 to:
A. Microsoft Entra ID
B. Microsoft Identity Cloud
C. Azure Active Identity
D. Microsoft Directory Service

### 24. Which RBAC role can manage resources but CANNOT grant access to others?
A. Owner
B. Contributor
C. Reader
D. User Access Administrator

### 25. To prevent ANY user (including Owners) from deleting a critical resource, use:
A. RBAC Reader role
B. NSG
C. Azure Policy Audit
D. CanNotDelete resource lock

### 26. Which service answers "WHAT resources are allowed to be created and how must they be configured?"
A. RBAC
B. Defender for Cloud
C. Resource Locks
D. Azure Policy

### 27. Which is the policy engine that decides WHEN to require MFA (e.g., only on un-managed devices)?
A. RBAC
B. MFA alone
C. Identity Protection
D. Conditional Access

### 28. Which is BEST for collecting security logs from Azure, AWS, and on-prem, then automating response?
A. Defender for Cloud
B. Microsoft Sentinel
C. Azure Monitor
D. Azure Advisor

### 29. Microsoft Defender for Cloud provides:
A. CDN + WAF
B. SIEM + SOAR
C. Cloud Security Posture Management + workload protection + Secure Score
D. DNS routing

### 30. The 3 Zero Trust principles are:
A. Trust but verify, defense in depth, perimeter
B. Verify explicitly, use least-privilege access, assume breach
C. Authenticate, authorize, encrypt
D. Detect, respond, recover

### 31. Yes/No: A budget in Cost Management automatically shuts down resources when the threshold is exceeded.
A. Yes
B. No

### 32. The composite SLA of two services (99.9% and 99.95%) is approximately:
A. 99.95%
B. 100%
C. 99.99%
D. 99.85%

### 33. Which Azure pricing model offers up to 90% off but allows Azure to evict the VM with 30-second notice?
A. Reservation
B. Dev/Test
C. Savings Plan
D. Spot

### 34. Azure Hybrid Benefit lets you:
A. Mirror Entra ID
B. Run on-prem free
C. Migrate VMs free
D. Use existing on-prem Windows Server / SQL Server licenses (with SA) on Azure VMs for big discount

### 35. Which tool ESTIMATES the cost of new Azure resources?
A. TCO Calculator
B. Pricing Calculator
C. Cost Management
D. Advisor

### 36. Which tool COMPARES on-prem total cost to running the same workload in Azure?
A. TCO Calculator
B. Pricing Calculator
C. Service Health
D. Bicep

### 37. Which is the modern Microsoft-recommended IaC language for Azure?
A. ARM JSON
B. Terraform
C. Bicep
D. Ansible

### 38. Which is a BROWSER-BASED shell for Azure with NO local install needed?
A. Azure CLI
B. Azure PowerShell module
C. Azure Cloud Shell
D. Visual Studio Code

### 39. Azure Advisor provides recommendations across which 5 pillars?
A. Speed, Quality, Cost, Scope, Risk
B. IaaS, PaaS, SaaS, FaaS, DaaS
C. Cost, Security, Performance, Reliability, Operational Excellence
D. CIA, AAA, PKI, SSO, MFA

### 40. To project on-prem servers and AWS resources into Azure for unified management with Policy and Defender, use:
A. Azure Arc
B. Azure Site Recovery
C. Azure Migrate
D. Azure Bastion

---

### 🧩 Scenario set 41–43 (Yes/No, evaluate each independently)

> **Scenario:** Contoso wants to deploy a regional production web application using Azure App Service with Azure SQL Database. They will use Microsoft Entra ID with Conditional Access for user sign-ins.

### 41. Yes/No: Contoso must manage operating system patches on their App Service.
A. Yes
B. No

### 42. Yes/No: Conditional Access can require MFA only when sign-ins come from outside the corporate network.
A. Yes
B. No

### 43. Yes/No: Deploying Azure SQL Database in a single region with default redundancy survives a regional outage.
A. Yes
B. No

---

### 44. Which is the public, anonymous global Azure status page?
A. status.azure.com
B. portal.azure.com
C. Service Health blade
D. Trust Center

### 45. Yes/No: Microsoft Sentinel is a cloud-native SIEM/SOAR that can ingest logs from non-Azure sources.
A. Yes
B. No

### 46. Yes/No: Azure Arc is a migration service that moves on-prem VMs to Azure.
A. Yes
B. No

---

### 🧩 Scenario set 47–49 (Yes/No, evaluate each independently)

> **Scenario:** Fabrikam has implemented Azure Policy at the management group level to require all resources to have a `CostCenter` tag, and to restrict VM deployments to the `East US` and `West Europe` regions. They have also placed a `CanNotDelete` lock on the production resource group.

### 47. Yes/No: A developer with the Contributor role in a child subscription can deploy a VM to `Brazil South`.
A. Yes
B. No

### 48. Yes/No: An Owner can delete resources within the production resource group while the CanNotDelete lock is in place.
A. Yes
B. No

### 49. Yes/No: A new storage account created without the `CostCenter` tag will be ALLOWED to deploy if the Policy effect is set to `Deny`.
A. Yes
B. No

---

### 50. Which is TRUE about Cosmos DB?
A. It supports only the SQL API
B. It is part of Azure Files
C. It is a relational data warehouse
D. It supports multiple APIs (NoSQL native, MongoDB, Cassandra, Gremlin, Table) and offers multi-region writes with sub-10 ms latency

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. A    21. D    31. B    41. B
2.  C    12. A    22. B    32. D    42. A
3.  A    13. D    23. A    33. D    43. B
4.  C    14. D    24. B    34. D    44. A
5.  B    15. C    25. D    35. B    45. A
6.  B    16. A    26. D    36. A    46. B
7.  A    17. C    27. D    37. C    47. B
8.  B    18. C    28. B    38. C    48. B
9.  A    19. D    29. C    39. C    49. B
10. A    20. B    30. B    40. A    50. D
```

---

## Detailed answer rationales

**Q1. Answer: C.** Cloud is on-demand delivery of IT services over the internet with pay-as-you-go pricing. A is wrong because IaaS still requires customer-side OS management. B is wrong because cloud isn't always cheaper. D is wrong because security is a *shared* responsibility, not eliminated. **Takeaway:** Definitions are simple but distractors lean on overconfidence.

**Q2. Answer: C.** Elasticity = automatic add/remove of capacity to match demand. A is vertical scaling. B is pre-purchase. D is geographic redundancy. **Takeaway:** Elasticity vs scalability vs redundancy — distinct concepts.

**Q3. Answer: A.** IaaS gives full OS control. B (PaaS) hides OS. C (SaaS) hides everything. D (FaaS) is even more abstracted than PaaS. **Takeaway:** Maximum customer control = IaaS.

**Q4. Answer: C.** Dynamics 365 is a fully managed Microsoft business application — SaaS. **Takeaway:** M365, Dynamics 365, GitHub.com = SaaS.

**Q5. Answer: B.** Cloud converts CapEx (upfront capital purchase) into OpEx (pay-as-you-consume). A reverses the definitions. C does the same. D collapses the distinction. **Takeaway:** CapEx → OpEx is the canonical cloud econ.

**Q6. Answer: B (No).** Reservations are paid over time without buying an asset — that's OpEx. The 1–3 year commitment doesn't change the accounting treatment. **Takeaway:** Reservations = OpEx, despite the commitment length.

**Q7. Answer: A.** Data, endpoints, accounts, access management, and identities are always the customer's. B/C/D are always Microsoft's. **Takeaway:** Always-customer four (plus identity/endpoints) is the most-tested shared-responsibility fact.

**Q8. Answer: B.** North Europe (Ireland) pairs with West Europe (Netherlands). A is wrong (different geography). C (UK South) pairs with UK West, not North Europe. D is wrong (the pair exists). **Takeaway:** Know the major EU and US pairs.

**Q9. Answer: A (Yes).** RG location is metadata only — the RG can hold resources from any region. **Takeaway:** Famous AZ-900 trap.

**Q10. Answer: A.** Applying a Policy at the management-group level inherits to all subscriptions below. B is wasteful and inconsistent. C is wrong scope. D is incorrect (Policy isn't a PowerShell-per-VM thing). **Takeaway:** Single policy across many subs = MG-level assignment.

**Q11. Answer: A.** AZs are physically separate datacenters within a region with independent power, cooling, and networking. B (logical container) describes RGs. C (multiple regions) describes geography. D (backup copies) confuses with redundancy options. **Takeaway:** AZs are physical infrastructure within a region.

**Q12. Answer: A.** 2+ VMs across AZs = 99.99% SLA. B (Availability Set) = 99.95%. C (single Standard HDD VM) doesn't have a documented uptime SLA. D conflates region with sovereignty. **Takeaway:** AZ deployment is the path to 99.99% VM SLA.

**Q13. Answer: D.** ZRS = 3 copies across 3 AZs in one region, no cross-region. A (LRS) is one DC. B (GZRS) crosses regions too. C (GRS) crosses regions. **Takeaway:** ZRS = in-region AZ redundancy only.

**Q14. Answer: D.** Functions is event-driven serverless — perfect for queue-message triggers. A (VM) is over-engineered. B (App Service) is always-on. C (AKS) is container orchestration. **Takeaway:** Event-driven = Functions.

**Q15. Answer: C.** App Service is the textbook PaaS for web apps + APIs. A (VM) requires OS management. B (ACI) is for single containers. D (AKS) is overkill. **Takeaway:** Web app + API, no OS = App Service.

**Q16. Answer: A.** Cosmos DB = globally distributed multi-model NoSQL. B/C are relational SQL. D is in-memory cache. **Takeaway:** Cosmos's tagline maps exactly.

**Q17. Answer: C.** AKS is managed Kubernetes — for hundreds of microservices. A (ACI) is single container. B (App Service) doesn't orchestrate containers at scale. D (VMSS) is plain VM scale-set. **Takeaway:** Many containers = AKS.

**Q18. Answer: C.** Front Door is the global L7 entry point with CDN and WAF. A (App Gateway) is regional. B (Load Balancer) is L4. D (NSG) is a firewall ruleset. **Takeaway:** Global L7 + CDN + WAF = Front Door.

**Q19. Answer: D.** ExpressRoute = private dedicated circuit, high bandwidth, low latency. A (VPN) is over public internet. B (NSG) is filtering. C (Front Door) is HTTPS entry. **Takeaway:** Private circuit = ExpressRoute.

**Q20. Answer: B (No).** Ingress (data into Azure) is free. Only egress is billed. **Takeaway:** Memorize this — drives multi-region cost design.

**Q21. Answer: D.** Azure free account = $200 USD credit for 30 days + 12 months of select services + always-free tier. A/B/C are all incorrect free-account offerings. **Takeaway:** Three-part free offer.

**Q22. Answer: B.** SQL Managed Instance gives near-100% SQL Server compatibility — designed for complex lift-and-shift. A (SQL DB single) is cloud-native, less SQL Server compatible. C (Cosmos) is NoSQL. D (SQL on VM) works but requires full OS management. **Takeaway:** Complex SQL Server lift = SQL Managed Instance.

**Q23. Answer: A.** Renamed to Microsoft Entra ID in 2023. **Takeaway:** New name is on every exam.

**Q24. Answer: B.** Contributor does everything except grant access. A (Owner) can grant. C (Reader) can't even modify. D (UAA) only manages access. **Takeaway:** Contributor ≠ Owner — Contributor can't grant access.

**Q25. Answer: D.** CanNotDelete lock applies to everyone including Owners. A (Reader) doesn't prevent delete by others. B (NSG) is network, not delete protection. C (Audit policy) just flags. **Takeaway:** Locks > RBAC for "prevent delete."

**Q26. Answer: D.** Azure Policy answers "what resources can exist / how they must be configured." A (RBAC) is who. B (Defender) is security posture. C (Locks) is delete prevention. **Takeaway:** Resource shape/config = Policy.

**Q27. Answer: D.** Conditional Access decides *when* to require MFA based on signals. A (RBAC) is permissions. B (MFA alone) is always-on. C (Identity Protection) flags risky sign-ins but doesn't set policy. **Takeaway:** "When MFA?" = Conditional Access.

**Q28. Answer: B.** Sentinel is multi-source SIEM + SOAR. A (Defender for Cloud) is CSPM, not multi-source SIEM. C (Monitor) is workload metrics. D (Advisor) is recommendations. **Takeaway:** Multi-source SIEM + automation = Sentinel.

**Q29. Answer: C.** Defender for Cloud provides CSPM + workload protection + Secure Score. A is Front Door / WAF. B is Sentinel. D is Azure DNS / Traffic Manager. **Takeaway:** Secure Score = Defender for Cloud signature.

**Q30. Answer: B.** Verify explicitly, least-privilege access, assume breach — Microsoft's Zero Trust principles verbatim. A is old "trust but verify." C is AAA. D is incident response phases. **Takeaway:** Memorize the three principles literally.

**Q31. Answer: B (No).** Budgets alert; they don't shut down resources. **Takeaway:** Common trap.

**Q32. Answer: D.** 0.999 × 0.9995 = 0.99850 ≈ 99.85%. A/C are too high; B (100%) is impossible. **Takeaway:** Composite is always lower than the lowest component.

**Q33. Answer: D.** Spot offers up to 90% discount with eviction risk. A (Reservation) requires commitment, not evictable. B (Dev/Test) is reduced pricing, not 90%. C (Savings Plan) is up to 65%, no eviction. **Takeaway:** 90% off + evictable = Spot.

**Q34. Answer: D.** Hybrid Benefit reuses on-prem Win/SQL licenses with Software Assurance. A is wrong (mirroring is Entra Connect). B/C conflate with unrelated services. **Takeaway:** Hybrid Benefit = bring your own license.

**Q35. Answer: B.** Pricing Calculator estimates NEW resources. A (TCO) compares on-prem vs Azure. C (Cost Management) analyzes actual spend. D (Advisor) recommends optimizations. **Takeaway:** New resources = Pricing Calculator.

**Q36. Answer: A.** TCO Calculator compares on-prem to Azure equivalent. B (Pricing) is Azure-only. C (Service Health) is platform health. D (Bicep) is IaC. **Takeaway:** On-prem vs Azure = TCO Calculator.

**Q37. Answer: C.** Bicep is Microsoft's recommended modern IaC. A (ARM JSON) is the predecessor. B (Terraform) is third-party multi-cloud. D (Ansible) is config management. **Takeaway:** Modern Azure-native IaC = Bicep.

**Q38. Answer: C.** Cloud Shell runs in the browser, requires no install. A/B are local installs. D is an IDE. **Takeaway:** Browser shell = Cloud Shell.

**Q39. Answer: C.** Advisor's five pillars: Cost, Security, Performance, Reliability, Operational Excellence. A is project mgmt vocab. B is service models. D is security acronyms. **Takeaway:** Memorize the five literally.

**Q40. Answer: A.** Azure Arc extends Azure mgmt to non-Azure resources. B (Site Recovery) is DR. C (Migrate) is for *moving*. D (Bastion) is VM access. **Takeaway:** Arc = manage in place. Migrate = move.

---

**Scenario set 41–43 — Contoso App Service + SQL DB + Entra ID with CA**

**Q41. Answer: B (No).** App Service is PaaS — Microsoft patches the OS. **Takeaway:** PaaS OS patches = Microsoft.

**Q42. Answer: A (Yes).** Conditional Access can require MFA *only* when sign-ins come from outside the corporate network (using location signal). **Takeaway:** CA is the "when MFA?" engine.

**Q43. Answer: B (No).** A single-region default-redundant Azure SQL DB does NOT survive a regional outage — you need geo-replication / failover groups. **Takeaway:** Single-region ≠ region failure protection.

---

**Q44. Answer: A.** status.azure.com is the public, anonymous global Azure status page. B is general portal. C is the personalized portal blade. D is compliance docs. **Takeaway:** Public global = status.azure.com.

**Q45. Answer: A (Yes).** Sentinel is multi-source — ingests Azure, AWS, on-prem, M365, third-party. **Takeaway:** Multi-source SIEM = Sentinel.

**Q46. Answer: B (No).** Azure Arc *extends Azure management* to non-Azure resources — it does NOT migrate them. **Takeaway:** Arc ≠ Migrate.

---

**Scenario set 47–49 — Fabrikam MG-level Policy + RG-level Lock**

**Q47. Answer: B (No).** Policy at the MG level inherits down to child subscriptions. The Contributor in a child subscription is blocked by the MG-level Deny policy from deploying to Brazil South. **Takeaway:** MG inheritance is the whole point of MG-level Policy.

**Q48. Answer: B (No).** CanNotDelete locks apply to *everyone*, including Owners, until the lock is removed. **Takeaway:** Locks override RBAC for delete actions.

**Q49. Answer: B (No).** With Deny effect on the missing-tag rule, the storage-account deployment is blocked. (If the effect were Audit, it would deploy and flag.) **Takeaway:** Deny effect blocks; Audit effect flags.

---

**Q50. Answer: D.** Cosmos DB supports multiple APIs (NoSQL native, MongoDB, Cassandra, Gremlin, Table) and offers multi-region writes with single-digit-ms latency. A is wrong (it's multi-API). B is wrong (Cosmos isn't Files). C is wrong (Cosmos is NoSQL, not relational warehouse). **Takeaway:** Cosmos's tagline maps to D verbatim.

---

## 📊 Scoring (real-exam pass mark)

| Score | Verdict |
|-------|---------|
| 45–50 (90%+) | 🏆 You're going to crush AZ-900. Sleep well, take the real exam. |
| 38–44 (76–88%) | ✅ Strong pass expected. Spot-review wrong answers tonight. |
| 35–37 (70–74%) | ⚠️ Borderline pass. Re-drill flashcards + cheat sheets — don't book the exam yet if you're not confident. |
| <35 (<70%) | 🔁 NOT ready. Re-study weakest 2 modules. Re-take in 3–5 days. |

---

## 🔍 Review Process (THE NIGHT BEFORE)

1. For each wrong answer, identify the module and concept
2. Re-read that module's **Cheat Sheet** (faster than Reading.md)
3. Add any missed concept to your Flashcards
4. Get 8 hours of sleep — the real exam is mental endurance

---

## 🧠 Top Real-Exam Tips

1. **Read every word.** "Yes/No" sets share a scenario block — but each Y/N is graded INDEPENDENTLY. Read the question, not the scenario.
2. **Watch for "MUST" vs "SHOULD".** Microsoft is picky.
3. **"Microsoft Entra ID" = "Azure AD"** — exam may use either.
4. **Composite SLA = multiply.** Adding services LOWERS workload SLA.
5. **RBAC ≠ Policy ≠ Lock.** Know which solves which problem.
6. **Service Health is personalized; Status page is public.**
7. **Ingress free, egress billed.**
8. **40–60 questions in 45 minutes** — about 45 seconds per question. Don't get stuck. Flag and return.

---

## 🎬 Real Exam Day

```
Night before: Cheat sheets + flashcards + 8 hrs sleep
Morning of:   Light breakfast, no caffeine spike, review key numbers
Test:         45 min — flag uncertain, mark "Yes/No" sets carefully, finish strong
After:        Pass? 🎉 Move to AZ-104. Fail? Book retake (24 hrs later).
```

You got this. ☁️💪
