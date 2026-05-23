# ✏️ Module 5 Quiz: Cost Management & SLAs

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. Which Azure tool ESTIMATES the cost of resources you plan to deploy? *(Remember)*
A. Cost Management
B. Pricing Calculator
C. TCO Calculator
D. Azure Advisor

---

### Q2. Which tool COMPARES on-premises costs to running the same workload in Azure? *(Remember)*
A. Pricing Calculator
B. TCO Calculator
C. Cost Management
D. Azure Monitor

---

### Q3. Which tool ANALYZES and FORECASTS your actual Azure spend? *(Understand)*
A. TCO Calculator
B. Pricing Calculator
C. Microsoft Cost Management
D. Azure Policy

---

### Q4. Yes/No: Data ingress (inbound) into Azure is billed. *(Remember)*
A. Yes
B. No

---

### Q5. Yes/No: Data egress (outbound) from Azure is billed. *(Remember)*
A. Yes
B. No

---

### Q6. An Azure Budget that hits 100% of its threshold will: *(Analyze)*
A. Automatically stop all resources
B. Only send alerts; resources keep running
C. Block new resource creation
D. Cancel the subscription

---

### Q7. Which pricing option provides up to 72% discount for committing 1 or 3 years to specific VM sizes? *(Remember)*
A. Spot
B. Reservations
C. Pay-As-You-Go
D. Free tier

---

### Q8. Spot VMs are BEST used for: *(Apply)*
A. Production databases
B. Interruptible, fault-tolerant workloads where Azure can reclaim capacity
C. Single-instance critical web servers
D. Logging from a firewall

---

### Q9. Azure Hybrid Benefit allows you to: *(Understand)*
A. Use existing Windows Server / SQL Server licenses with Software Assurance on Azure VMs for up to 85% discount
B. Get free Azure credit
C. Mirror on-prem AD to Entra ID
D. Move on-prem servers to Azure for free

---

### Q10. The composite SLA of a workload depending on two services (99.95% and 99.99%) is approximately: *(Apply)*
A. 99.99%
B. 99.95%
C. 99.94%
D. 100%

---

### Q11. Which deployment achieves a 99.99% VM SLA? *(Apply)*
A. Single VM with Standard HDD
B. Two VMs in an Availability Set
C. Two or more VMs spread across Availability Zones
D. A single Premium-disk VM

---

### Q12. Preview services in Azure: *(Understand)*
A. Have the same SLA as GA services
B. Have NO SLA and should not be used for production
C. Cost more than GA services
D. Are billed separately

---

### Q13. Which factor does NOT directly affect Azure cost? *(Analyze)*
A. Region
B. Resource size
C. Color of the resource icon in the portal
D. Bandwidth egress

---

### Q14. Which is the BEST way to allocate costs to departments? *(Apply)*
A. Manually email finance every month
B. Apply tags (e.g., `CostCenter`) to resources and filter in Cost Management
C. Create one subscription per resource
D. Use Resource Locks

---

### Q15. The standard SLA for a single Azure VM using Premium SSD disks (no AZ, no Availability Set) is: *(Remember)*
A. 99.99%
B. 99.95%
C. 99.9%
D. 99.999%

---

### Q16. The Azure free account includes: *(Remember)*
A. Unlimited free VMs for life
B. $200 USD credit for 30 days + 12 months of select services + always-free tier
C. Free Microsoft 365 for life
D. Free ExpressRoute

---

### Q17. Yes/No: Reservations are CapEx. *(Analyze)*
A. Yes
B. No (OpEx — paid over time, not an asset purchase)

---

### Q18. Yes/No: Cost Management can export billing data to a storage account for Power BI analysis. *(Understand)*
A. Yes
B. No

---

### Q19. Yes/No: Adding more dependent services to a workload increases its composite SLA. *(Analyze)*
A. Yes
B. No (it DECREASES — more things to fail)

---

### Q20. Azure Savings Plans differ from Reservations by: *(Analyze)*
A. Being more flexible across VM families/regions, with smaller discount
B. Being cheaper than Reservations always
C. Only applying to storage
D. Being free

---

### Q21. The MOST cost-effective tier for blob data accessed less than once per year is: *(Apply)*
A. Hot
B. Cool
C. Cold
D. Archive

---

### Q22. Which is TRUE about Azure pricing across regions? *(Understand)*
A. All regions cost the same
B. Pricing varies by region; some (e.g., Brazil, Australia) are more expensive
C. Only ExpressRoute pricing varies
D. Microsoft sets one global rate

---

### Q23. A company has a stable production database that runs 24/7 for 3 years. The MOST cost-effective option is: *(Apply)*
A. Pay-As-You-Go
B. 3-year Reservation
C. Spot VM
D. Dev/Test pricing

---

### Q24. Yes/No: Microsoft Cost Management is free to use for Azure customers. *(Remember)*
A. Yes
B. No

---

### Q25. A workload uses App Service (99.95% SLA) and Cosmos DB (99.99% SLA). What's the approximate composite SLA? *(Apply)*
A. 99.99%
B. 99.95%
C. 99.94%
D. 99.90%

---

### Q26. Which is the BEST practice when you discover an idle VM running 24/7 in production? *(Evaluate)*
A. Leave it (cost is small)
B. Shut it down or right-size it; check Azure Advisor's recommendations
C. Add it to a Reservation
D. Move it to Spot

---

## 🎯 Answers + Explanations

### Q1: **B. Pricing Calculator**
Estimates cost of new Azure-only deployments.

### Q2: **B. TCO Calculator**
Compares on-prem (hardware, labor, electricity, network) vs Azure equivalent.

### Q3: **C. Microsoft Cost Management**
Analyzes and forecasts actual spend; supports budgets and exports.

### Q4: **B. No**
Ingress is FREE in Azure. A key money-saver.

### Q5: **A. Yes**
Egress (outbound) is billed per GB. Watch out for inter-region traffic.

### Q6: **B. Only send alerts**
Budgets alert; they do NOT shut down resources automatically. You can build automation but it isn't built in.

### Q7: **B. Reservations**
Up to 72% off for 1- or 3-year commitments on VMs, SQL DB, Cosmos DB, and more.

### Q8: **B. Interruptible, fault-tolerant workloads**
Spot can be reclaimed with 30s notice. Perfect for batch/render/dev.

### Q9: **A. Use existing Windows / SQL Server licenses**
Up to 85% off on certain VMs / SQL workloads when you bring existing licenses with Software Assurance.

### Q10: **C. 99.94%**
0.9995 × 0.9999 ≈ 0.9994. Composite SLA always *lower* than the lowest single dependency.

### Q11: **C. Two or more VMs across Availability Zones**
AZ deployment delivers the 99.99% VM SLA. Availability Set gives 99.95%.

### Q12: **B. No SLA and not for production**
Preview = use at your own risk. SLAs apply once a service hits GA.

### Q13: **C. Color of the icon**
Region, resource type, bandwidth, size, OS, tier all matter. Icon color does not.

### Q14: **B. Tags + Cost Management filter**
Standard chargeback / showback pattern.

### Q15: **C. 99.9%**
Single VM with Premium/Ultra SSDs = 99.9%. Add AZs to reach 99.99%.

### Q16: **B. $200 / 30 days + 12 months of select services + always-free tier**
Standard Azure free account.

### Q17: **B. No — Reservations are OpEx**
Paid over time; no asset ownership. Same misconception that catches half of exam-takers.

### Q18: **A. Yes**
Cost Management supports scheduled exports to a storage account.

### Q19: **B. No — composite SLA DECREASES**
Each additional dependency multiplies in, reducing the overall number.

### Q20: **A. More flexible, smaller discount**
Savings Plans cover hourly compute spend across families/regions; Reservations are tied to a specific SKU.

### Q21: **D. Archive**
Cheapest storage cost, highest retrieval cost. Used for rarely-accessed data; 180-day min retention.

### Q22: **B. Pricing varies by region**
Brazil South, Australia East, etc., generally cost more than US East / North Europe.

### Q23: **B. 3-year Reservation**
Stable, predictable, long-running = exactly the Reservation sweet spot.

### Q24: **A. Yes**
Cost Management is included free with all Azure subscriptions (the underlying data is your spend).

### Q25: **C. 99.94%**
Same math as Q10. Multiply the SLAs.

### Q26: **B. Shut it down or right-size it; check Azure Advisor**
Azure Advisor surfaces "idle VM" and "right-size" recommendations precisely for this.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Mastered
- 22–24/26 → ✅ Solid
- 18–21/26 → ⚠️ Re-do composite SLA + Pricing/TCO/Cost Mgmt sections
- <18/26 → 🔁 Re-read Reading

---

## 🃏 Add To Your Flashcards

- Pricing vs TCO vs Cost Management (one-liner each)
- Composite SLA formula + worked example
- Reservations vs Savings Plans vs Spot vs Hybrid Benefit
- Three VM SLA tiers (99.9 / 99.95 / 99.99)
- Ingress = free, egress = billed
- Free account contents

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6: Tools & Features](../Module-06-Tools-Features/Reading.md)
