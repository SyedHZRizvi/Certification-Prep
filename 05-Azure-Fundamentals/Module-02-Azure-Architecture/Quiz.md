# ✏️ Module 2 Quiz: Azure Architecture

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. From top to bottom, what is the correct Azure resource hierarchy? *(Remember)*
A. Subscription → Management Group → Resource Group → Resource
B. Management Group → Subscription → Resource Group → Resource
C. Tenant → Resource Group → Subscription → Resource
D. Subscription → Resource Group → Management Group → Resource

---

### Q2. An Availability Zone (AZ) is: *(Remember)*
A. A logical container for resources
B. A physically separate datacenter (or group) within a region with independent power, cooling, and networking
C. A pair of regions for disaster recovery
D. A geography for compliance

---

### Q3. Which of the following BEST describes a region pair? *(Understand)*
A. Two regions that share customers
B. Two regions in the same geography designated for sequential updates and prioritized recovery
C. Two AZs within one region
D. Two datacenters in the same building

---

### Q4. A resource group can contain resources from how many regions? *(Understand)*
A. Exactly one, the RG's region
B. Up to two
C. Resources from any region, the RG location is just metadata
D. As many as your subscription allows

---

### Q5. You want to apply a single Azure Policy to 12 subscriptions at once. The MOST efficient way is to: *(Apply)*
A. Apply the policy to each subscription individually
B. Apply it at the management group containing all 12 subscriptions
C. Apply it at the tenant root
D. Apply it to each resource group

---

### Q6. Which Azure environment is operated by 21Vianet under Chinese law? *(Remember)*
A. Azure Government
B. Azure China
C. Azure for DoD
D. Azure Stack Hub

---

### Q7. Deleting a resource group will: *(Understand)*
A. Delete the subscription
B. Delete every resource within it
C. Move the resources to "Recycle Bin" for 30 days
D. Have no effect on contained resources

---

### Q8. The relationship between an Azure subscription and a Microsoft Entra ID tenant is: *(Remember)*
A. A subscription can belong to many tenants
B. A subscription belongs to exactly one tenant
C. A tenant must have exactly one subscription
D. They are unrelated

---

### Q9. To meet a 99.99% VM SLA with in-region high availability, you should deploy VMs across: *(Apply)*
A. Two resource groups
B. Multiple Availability Zones
C. Two subscriptions
D. Two geographies

---

### Q10. GRS (Geo-Redundant Storage) replicates data to: *(Remember)*
A. Another AZ in the same region
B. The paired region in the same geography
C. A region you select manually
D. The same datacenter for redundancy

---

### Q11. The maximum depth of nested management groups (excluding root) is: *(Remember)*
A. 3
B. 4
C. 6
D. Unlimited

---

### Q12. Which is NOT a valid reason to choose one Azure region over another? *(Analyze)*
A. Latency to end users
B. Data residency requirements
C. Availability of a specific service
D. The color of the data center building

---

### Q13. A "zonal" deployment means: *(Understand)*
A. The resource is automatically spread across all AZs in the region
B. The resource is pinned to a specific Availability Zone
C. The resource is replicated across regions
D. The resource is sovereign-only

---

### Q14. A multinational with strict EU data residency rules should select: *(Apply)*
A. Any global region
B. A region within an EU geography (e.g., West Europe or North Europe)
C. Azure Government
D. Azure China

---

### Q15. Which statement is TRUE about resource groups? *(Analyze)*
A. Resources can move between RGs (subject to service support)
B. RGs cannot be moved between subscriptions
C. RG names can be reused while it still exists
D. RGs must contain at least 5 resources

---

### Q16. A management group provides: *(Understand)*
A. Policy and RBAC inheritance across many subscriptions
B. A way to bill multiple tenants together
C. Sovereign region access
D. Free Azure credits

---

### Q17. Your team needs to enforce that resources cannot be deleted accidentally. The BEST tool is: *(Apply)*
A. Resource Locks (CanNotDelete)
B. Tags
C. Azure Policy on a region
D. Management groups

---

### Q18. Azure Government is intended for: *(Remember)*
A. Any global government
B. U.S. federal, state, local, and DoD customers (with operations by screened U.S. citizens)
C. EU government workloads
D. Chinese government workloads

---

### Q19. Which is TRUE about Availability Zones? *(Analyze)*
A. Every Azure region has AZs
B. Only AZ-enabled regions support AZs, check region docs
C. AZs are billed extra per zone
D. AZs are visible to end users as separate regions

---

### Q20. Which scenario BEST fits a **hybrid** subscription/region design? *(Apply)*
A. Single subscription, single region
B. Multiple subscriptions (Dev/Test/Prod) with workloads in multiple regions for global reach
C. One subscription per Azure region
D. One management group per resource

---

### Q21. A "zone-redundant" Azure service: *(Understand)*
A. Is replicated automatically across all AZs in the region
B. Is pinned to one AZ
C. Is cross-region replicated
D. Is sovereign-only

---

### Q22. Which of the following can SPAN multiple subscriptions? *(Analyze)*
A. A resource group
B. A management group
C. A resource
D. An Availability Zone

---

### Q23. The "metadata location" of a resource group: *(Evaluate)*
A. Restricts which regions the resources inside can live in
B. Identifies where the RG's metadata is stored, but does NOT restrict resource locations
C. Determines billing currency
D. Sets the default tags

---

### Q24. A startup deploys all workloads in `East US`. To survive a regional outage, the lowest-effort change is to: *(Apply)*
A. Deploy a second copy in the paired region (`West US`) and use GRS / Site Recovery
B. Buy a second subscription
C. Move everything to a sovereign region
D. Deploy across multiple AZs only

---

### Q25. The "root" management group in a tenant: *(Understand)*
A. Must be deleted before use
B. Sits above all other management groups and subscriptions and exists by default
C. Is the same as a subscription
D. Allows resource deployment directly

---

### Q26. Yes/No: A subscription is a billing boundary in Azure. *(Remember)*
A. Yes
B. No

---

## 🎯 Answers + Explanations

### Q1: **B. Management Group → Subscription → Resource Group → Resource**
The classic hierarchy. Policies/RBAC at the top inherit down. Memorize this.

### Q2: **B. Physically separate datacenter within a region**
AZs have independent power, cooling, and networking, designed to survive single-datacenter failure.

### Q3: **B. Two regions designated for sequential updates and prioritized recovery**
Region pairs are 300+ miles apart within the same geography. Microsoft never updates both at once.

### Q4: **C. Resources from any region, RG location is just metadata**
This is a famous AZ-900 trap. RGs are logical, not regional.

### Q5: **B. Apply it at the management group level**
Inheritance is the whole point of management groups.

### Q6: **B. Azure China**
Operated by 21Vianet under Chinese law as a separate Azure cloud.

### Q7: **B. Delete every resource within it**
Cascading delete. Use a Resource Lock (CanNotDelete) to prevent accidents.

### Q8: **B. A subscription belongs to exactly one tenant**
A tenant can have many subscriptions, but each subscription has exactly one tenant.

### Q9: **B. Multiple Availability Zones**
Microsoft offers a 99.99% SLA when VMs are spread across two or more AZs in a region.

### Q10: **B. The paired region in the same geography**
GRS = 6 copies total (3 in primary + 3 in paired region). Stays within geography for compliance.

### Q11: **C. 6**
6 levels of nesting beneath the root MG (not counting root).

### Q12: **D. The color of the data center building**
You don't pick datacenters. Latency, residency, service availability, price, and AZ support are the real factors.

### Q13: **B. Pinned to a specific AZ**
Zonal = "I pick AZ 1." Zone-redundant = "Azure spreads me across all AZs."

### Q14: **B. A region within an EU geography**
GDPR / EU data residency means stay in the EU geography. Don't deploy to East US.

### Q15: **A. Resources can move between RGs (subject to service support)**
Move is supported for many not all resource types. RGs themselves can also be moved between subscriptions.

### Q16: **A. Policy and RBAC inheritance across many subscriptions**
The MG is purely for governance at scale.

### Q17: **A. Resource Locks (CanNotDelete)**
Locks stop accidental deletion or modification. Tags don't enforce anything; Policy can't block delete the way Lock can.

### Q18: **B. U.S. federal, state, local, and DoD customers**
Azure Government is U.S.-specific with U.S.-citizen operations and physical isolation.

### Q19: **B. Only AZ-enabled regions support AZs**
Not every region has AZs, always check.

### Q20: **B. Multiple subscriptions with workloads in multiple regions**
Real enterprises separate environments by subscription and spread for global reach + DR.

### Q21: **A. Replicated automatically across all AZs in the region**
Examples: ZRS storage, zone-redundant SQL, zone-redundant App Gateway v2.

### Q22: **B. A management group**
MGs contain multiple subscriptions. RGs and resources live within one subscription.

### Q23: **B. Identifies where metadata is stored, does NOT restrict resource locations**
A West US RG can hold East US, North Europe, and Japan East resources, all at once.

### Q24: **A. Deploy a second copy in the paired region and use Site Recovery / GRS**
Region pair is the path of least resistance for cross-region DR.

### Q25: **B. Sits above all other management groups and subscriptions**
Exists by default in every tenant. You can't delete it.

### Q26: **A. Yes**
Subscriptions are both a billing boundary and an authorization boundary.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Architecture nailed
- 22–24/26 → ✅ Solid
- 18–21/26 → ⚠️ Re-read RG + MG sections
- <18/26 → 🔁 Re-do reading + John Savill video

---

## 🃏 Add To Your Flashcards

- 4-level resource hierarchy
- AZ vs Region vs Geography
- Region pair definition + which storage type uses it (GRS)
- Sovereign clouds (Gov + China)
- RG can hold resources from any region
- Management group max nesting depth (6)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3: Core Services](../Module-03-Core-Services/Reading.md)
