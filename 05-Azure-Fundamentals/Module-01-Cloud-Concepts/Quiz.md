# ✏️ Module 1 Quiz: Cloud Concepts

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. Which cloud benefit BEST describes the ability to add resources only when needed and remove them automatically when demand drops?
A. Reliability
B. High availability
C. Elasticity
D. Manageability

---

### Q2. Which service model gives the customer the MOST control over the operating system and runtime?
A. SaaS
B. PaaS
C. IaaS
D. FaaS

---

### Q3. A company runs Microsoft 365 for email and collaboration. Which cloud service model is this?
A. IaaS
B. PaaS
C. SaaS
D. Hybrid

---

### Q4. Converting CapEx to OpEx in the cloud means:
A. Buying physical servers up front and depreciating them
B. Paying for compute and storage as you consume them, rather than buying assets up front
C. Negotiating a 5-year hardware contract
D. Treating cloud spend as a capital investment on the balance sheet

---

### Q5. A team needs to deploy a web application without managing the OS or runtime, but still wants control over the application code. Which model fits BEST?
A. IaaS
B. PaaS
C. SaaS
D. On-premises

---

### Q6. Which is an example of **horizontal scaling** in Azure?
A. Resizing a VM from B2s to D8s
B. Adding more VM instances to a VM Scale Set
C. Upgrading to a larger storage account tier
D. Switching from HDD to SSD

---

### Q7. Which item is the customer's responsibility regardless of whether they use IaaS, PaaS, or SaaS?
A. Patching the OS
B. Managing the physical datacenter
C. Their data and identities
D. Patching the hypervisor

---

### Q8. A bank requires that data NEVER leave its on-premises datacenter due to regulatory rules. Which deployment model fits BEST?
A. Public cloud
B. Private cloud
C. Multi-cloud
D. Hybrid cloud (with primary in public Azure)

---

### Q9. Which is the BEST description of high availability?
A. Recovering from a region-wide outage within 24 hours
B. Keeping a service running and accessible despite individual component failures
C. Encrypting all data at rest
D. Automatically scaling to meet demand

---

### Q10. Reservations in Azure (1- or 3-year commitments) are an example of:
A. CapEx — because you commit upfront
B. OpEx — they are still a paid-over-time consumption commitment, not an asset purchase
C. A hybrid expense
D. None of the above

---

### Q11. A company wants to extend its on-premises Active Directory to Azure so users have one identity for both. This is an example of:
A. Public cloud
B. Hybrid cloud
C. Private cloud
D. SaaS

---

### Q12. Which scenario BEST fits **disaster recovery** (DR), not high availability (HA)?
A. Load balancer routes around a failed VM in the same region
B. Site Recovery fails the workload over to a secondary region after the primary region goes down
C. Auto-scale adds VMs when CPU exceeds 70%
D. A managed disk has 3 synchronous replicas in the same datacenter

---

### Q13. Which two are ALWAYS the customer's responsibility under shared responsibility? (Choose two)
A. Physical security of the datacenter
B. Data
C. Identity and access management
D. Patching the hypervisor

---

### Q14. Which service is BEST described as **SaaS**?
A. Azure Virtual Machine running Windows Server
B. Azure App Service hosting a custom .NET app
C. Microsoft 365 Outlook
D. Azure Kubernetes Service

---

### Q15. Spot Virtual Machines are BEST for:
A. Production databases that need 24/7 uptime
B. Interruptible, fault-tolerant workloads where Azure can reclaim capacity any time
C. Workloads that need a 99.99% SLA
D. Single-instance critical web servers

---

### Q16. "Consumption-based pricing" means:
A. You pay a flat monthly fee for unlimited use
B. You pay only for the resources you actually use
C. You buy capacity in 5-year blocks
D. You pay only at year-end

---

### Q17. Which is TRUE about the cloud and security?
A. Microsoft is responsible for ALL security in Azure
B. Customers are responsible for ALL security in Azure
C. Security is shared — Microsoft secures the platform; customers secure their data, identities, and configurations
D. Cloud is inherently less secure than on-premises

---

### Q18. Which BEST describes **fault tolerance**?
A. A system continues to operate with NO downtime even when components fail
B. A system recovers after an outage within 1 hour
C. A system is patched monthly
D. A system can scale to handle more users

---

### Q19. A startup wants to launch a global app quickly without buying servers. Which cloud benefit is MOST relevant?
A. Predictability
B. Agility
C. Governance
D. Manageability

---

### Q20. Which is an example of **vertical scaling**?
A. Adding 5 more web server instances behind a load balancer
B. Resizing a VM from D2s_v3 to D8s_v3
C. Moving from one region to two regions
D. Adding read replicas to a database

---

### Q21. The "Azure AD" service was renamed in 2023 to:
A. Azure Identity
B. Microsoft Entra ID
C. Azure Directory Service
D. Microsoft Identity Manager

---

### Q22. Which of the following is NOT one of the standard cloud deployment models?
A. Public cloud
B. Private cloud
C. Hybrid cloud
D. Reserved cloud

---

### Q23. Azure Hybrid Benefit allows you to:
A. Get a discount by reusing existing Windows Server / SQL Server licenses on Azure VMs
B. Bridge on-prem AD to Microsoft Entra ID
C. Use Azure services without an internet connection
D. Migrate VMs for free

---

### Q24. A company needs the same workload to run normally on-premises but to "burst" extra capacity into Azure during peak holiday traffic. This is BEST described as:
A. Public cloud
B. Private cloud
C. Hybrid cloud
D. SaaS

---

### Q25. The MOST accurate statement about cloud cost is:
A. Cloud is always cheaper than on-premises
B. Cloud is always more expensive than on-premises
C. Cloud generally wins on variable, unpredictable workloads and agility; steady predictable workloads can sometimes be cheaper on owned hardware
D. Cloud cost is a one-time fixed fee

---

### Q26. Which set BEST represents the "always customer responsibility" items in Azure's shared responsibility model?
A. Datacenter, hypervisor, network controls
B. Data, endpoints, accounts, access management
C. OS patches for App Service, datacenter, hypervisor
D. Physical hardware, BIOS, firmware

---

## 🎯 Answers + Explanations

### Q1: **C. Elasticity**
Elasticity = automatic add/remove of capacity to match real-time demand. Scalability is the general ability; elasticity is its automatic, real-time form.

### Q2: **C. IaaS**
With IaaS you control the OS, runtime, middleware, and apps. The provider only manages the hardware and hypervisor.

### Q3: **C. SaaS**
M365 is fully managed by Microsoft — you only manage users and data. Classic SaaS.

### Q4: **B. Paying for compute and storage as you consume them**
Cloud converts large upfront capital expenses into smaller ongoing operating expenses tied to actual use.

### Q5: **B. PaaS**
Azure App Service is the textbook example — you deploy code; Microsoft runs the OS, runtime, and scaling.

### Q6: **B. Adding more VM instances to a VM Scale Set**
Horizontal = more instances of the same size. Resizing a VM is *vertical*.

### Q7: **C. Their data and identities**
The "Always Four": Data, Endpoints, Account/Identity, Access management — always the customer's, regardless of model.

### Q8: **B. Private cloud**
Strict on-prem-only data residency = private cloud (potentially using Azure Local or Azure Stack Hub for cloud-style management).

### Q9: **B. Keeping a service running despite individual component failures**
HA = the system stays up when a piece breaks. DR is about region-level recovery; encryption and auto-scale are different concepts.

### Q10: **B. OpEx**
Even with a 1- or 3-year commitment, you're paying for *usage over time* — not buying an asset. Still OpEx. A common trap.

### Q11: **B. Hybrid cloud**
On-prem AD synced with Microsoft Entra ID via Entra Connect is a classic hybrid identity pattern.

### Q12: **B. Site Recovery fails over to another region**
DR = recover from a major event (often region failure). HA is in-region redundancy.

### Q13: **B and C — Data, and Identity & access management**
These two (plus endpoints and accounts) are the "always customer" set. Physical datacenter security and hypervisor patching are always Microsoft's.

### Q14: **C. Microsoft 365 Outlook**
Fully provider-managed software you just consume = SaaS. VMs are IaaS; App Service / AKS are PaaS.

### Q15: **B. Interruptible, fault-tolerant workloads**
Spot uses Azure's unused capacity at deep discounts but can be evicted with 30s notice. Perfect for batch jobs, NOT production databases.

### Q16: **B. You pay only for what you use**
The cornerstone of cloud economics.

### Q17: **C. Security is shared**
Shared responsibility is foundational AZ-900. Microsoft secures the platform; you secure your data, identity, and configuration.

### Q18: **A. Continues with NO downtime**
Fault tolerance means redundant systems take over with zero outage. HA accepts brief disruption; fault tolerance does not.

### Q19: **B. Agility**
Agility = how fast you can provision/change resources. Building a global app in days, not months, is agility.

### Q20: **B. Resizing a VM from D2s_v3 to D8s_v3**
Vertical = same VM, bigger size.

### Q21: **B. Microsoft Entra ID**
Microsoft renamed Azure AD to Microsoft Entra ID in 2023. The exam uses the new name.

### Q22: **D. Reserved cloud**
The three deployment models are public, private, and hybrid (often plus multi-cloud and community). "Reserved" is a *pricing model*, not a deployment model.

### Q23: **A. Reuse existing Windows / SQL Server licenses on Azure VMs**
Azure Hybrid Benefit lets you bring existing on-prem licenses with Software Assurance, saving up to 85% on certain VMs.

### Q24: **C. Hybrid cloud (with cloud bursting)**
"Burst to cloud" — running normally on-prem but extending to public cloud for peaks = hybrid.

### Q25: **C. Cloud wins on variable/agile workloads**
The honest answer. Cloud isn't a magic cost button. Microsoft itself trains this.

### Q26: **B. Data, endpoints, accounts, access management**
The "always customer" set — independent of IaaS/PaaS/SaaS.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 You've mastered cloud concepts. Move to Module 2.
- 22–24/26 → ✅ Solid. Note your wrong answers, then move on.
- 18–21/26 → ⚠️ Re-read the sections you missed. Retake tomorrow.
- <18/26 → 🔁 Re-read the entire Reading.md and re-watch the John Savill video.

---

## 🃏 Add To Your Flashcards

- CapEx vs OpEx (one-line definition each)
- IaaS / PaaS / SaaS examples (one Azure service each)
- The 4 "always customer" items in shared responsibility
- Vertical vs horizontal scaling
- HA vs DR vs Fault Tolerance vs Business Continuity
- The six cloud benefits

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2: Azure Architecture](../Module-02-Azure-Architecture/Reading.md)
