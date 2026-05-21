# 🧪 Practice Exam 2 — AZ-104 (Full Curriculum)

> **Conditions:** Set an 80-minute timer. 45 questions. Treat it like the real thing.
> **Pass mark:** 32/45 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 6–10. Mix of MCQ, Yes/No groups, and task-ordering.

---

## 📝 Questions

### 1. The MINIMUM App Service Plan tier that supports deployment slots is:
A. Free
B. Basic
C. Standard
D. Premium v3

### 2. To deploy a Web App with a **private endpoint (inbound)**, the plan tier must be at least:
A. Free
B. Basic
C. Premium v3
D. Standard

### 3. Marking an app setting as a "slot setting" means it:
A. STAYS with the slot during swap
B. Moves with the slot during swap
C. Is encrypted automatically
D. Is read-only

### 4. ACI is BEST for:
A. A long-running 24/7 microservice
B. A WordPress site
C. A stateful PostgreSQL DB
D. A 5-minute container processing a queue message and exiting

### 5. The AKS control plane is:
A. Free in standard tier; paid in Uptime SLA tier
B. Always paid hourly
C. Free in all tiers
D. Only available in Premium subscription

### 6. The Horizontal Pod Autoscaler (HPA) scales:
A. Nodes in a pool
B. Ingress controllers
C. Disks
D. Pod replicas based on metrics

### 7. **Yes/No** — AKS.

**S1:** Azure CNI gives pods VNet IPs directly.
**S2:** Azure CNI Overlay assigns pod IPs from an overlay CIDR.
**S3:** Kubenet is the recommended modern default.

A. Yes / No / Yes
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / Yes / Yes

### 8. Azure reserves how many IP addresses per subnet?
A. 2
B. 3
C. 5
D. 7

### 9. VNet peering is:
A. Transitive
B. Always public-internet routed
C. NOT transitive (A↔B + B↔C does NOT imply A↔C)
D. Limited to 4 peers per VNet

### 10. Which is TRUE about a private endpoint?
A. Has no DNS implications
B. Disables RBAC on the resource
C. Replaces VPN gateways
D. Has a private IP in your subnet for a PaaS service

### 11. **Order these steps** to set up a working private endpoint for a storage account.

1. Create a Private DNS Zone (e.g. `privatelink.blob.core.windows.net`)
2. Link the zone to your VNet
3. Create the private endpoint NIC
4. Create a DNS zone group to auto-register the PE's IP

A. 3 → 2 → 1 → 4
B. 3 → 1 → 2 → 4
C. 1 → 3 → 2 → 4
D. 1 → 2 → 3 → 4

### 12. To connect two on-prem sites THROUGH the Microsoft backbone via two ER circuits, use:
A. ExpressRoute Local
B. ExpressRoute Premium with Global Reach
C. Site-to-Site VPN
D. VNet peering

### 13. Route-based VPN is preferred over policy-based because it:
A. Supports BGP, IKEv2, and multiple tunnels
B. Is cheaper
C. Has higher SLAs
D. Allows password-only auth

### 14. The `GatewaySubnet` must be at least:
A. /29 (use /27 recommended)
B. /24
C. /26
D. /22

### 15. NSG rule priorities are evaluated:
A. Lowest number first (lower = higher priority)
B. Highest number first
C. Alphabetically
D. Random

### 16. The default inbound rule at priority 65500 in every NSG is:
A. AllowVnetInBound
B. AllowAzureLoadBalancerInBound
C. AllowInternetInBound
D. DenyAllInBound

### 17. **Yes/No** — NSGs.

**S1:** NSGs are stateful — return traffic is auto-allowed.
**S2:** Both subnet-level and NIC-level NSGs apply; a Deny in either drops the packet.
**S3:** Service tags can be used as source or destination.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

### 18. Azure Firewall rule processing order is:
A. Application → Network → DNAT
B. Random
C. Network → DNAT → Application
D. DNAT → Network → Application

### 19. The Azure Firewall SKU that supports TLS inspection and IDPS is:
A. Basic
B. Premium
C. Standard
D. All SKUs

### 20. To do REGIONAL L7 routing with WAF on HTTP/HTTPS, use:
A. Standard Load Balancer
B. Application Gateway WAF v2
C. Front Door
D. Azure Firewall

### 21. To do GLOBAL L7 routing with WAF + CDN, use:
A. Standard Load Balancer
B. Azure Front Door
C. Application Gateway WAF v2
D. Traffic Manager

### 22. Traffic Manager is:
A. A regional firewall
B. An L7 proxy
C. A DNS-based router (no proxy)
D. A CDN

### 23. ASGs work across:
A. Multiple regions
B. Multiple subscriptions
C. A single VNet only
D. The entire tenant

### 24. **Order these steps** to roll out a WAF safely.

1. Create the WAF policy (custom + managed rules)
2. Attach in Detection mode
3. Observe WAF logs
4. Tune rules / add exclusions
5. Switch to Prevention mode

A. 1 → 2 → 5 → 3 → 4
B. 2 → 1 → 3 → 4 → 5
C. 1 → 5 → 2 → 3 → 4
D. 1 → 2 → 3 → 4 → 5

### 25. Azure Bastion is used to:
A. Provide L7 caching
B. Allow secure RDP/SSH to VMs without public IPs
C. Replace VPN
D. Provide CDN

### 26. Azure Backup vs Site Recovery — which has continuous replication and is for region failover?
A. Backup
B. Both
C. Site Recovery
D. Neither — use snapshots

### 27. Cross-Region Restore for Azure Backup requires the vault to use:
A. LRS
B. GRS + the cross-region-restore feature enabled
C. ZRS
D. RA-GZRS only

### 28. The MARS agent backs up:
A. Windows files/folders + System State to Azure
B. Linux files only
C. SQL Server
D. Whole VMs

### 29. **Yes/No** — Backup.

**S1:** Soft delete on a Recovery Services Vault is on by default and retains deleted points for 14 days minimum.
**S2:** Immutable vault prevents disabling soft delete.
**S3:** GFS retention = Grandfather (yearly) / Father (monthly) / Son (daily/weekly).

A. No / Yes / Yes
B. Yes / No / Yes
C. Yes / Yes / Yes
D. Yes / Yes / No

### 30. ASR Test failover:
A. Spins up replica in an isolated network with no prod impact
B. Affects production
C. Costs nothing
D. Is mandatory before any planned failover

### 31. Azure Migrate's 3 phases are:
A. Plan → Execute → Validate
B. Scan → Move → Confirm
C. Inventory → Replicate → Cut over
D. Discover → Assess → Migrate

### 32. **Order these steps** for VMware-to-Azure migration via Azure Migrate.

1. Create Azure Migrate project
2. Deploy on-prem appliance + register
3. Run discovery + dependency analysis
4. Generate assessment reports
5. Enable replication for selected VMs
6. Test migration → cutover migration

A. 1 → 2 → 4 → 3 → 5 → 6
B. 2 → 1 → 3 → 4 → 5 → 6
C. 1 → 3 → 2 → 4 → 5 → 6
D. 1 → 2 → 3 → 4 → 5 → 6

### 33. Default Activity Log retention is:
A. 30 days
B. 60 days
C. 90 days
D. Forever

### 34. The modern Azure Monitor agent (replacing MMA) is:
A. AMA (Azure Monitor Agent) + DCRs
B. Diagnostics Extension
C. OMS Agent
D. Network Watcher Agent

### 35. Which KQL operator aggregates rows?
A. `where`
B. `top`
C. `summarize`
D. `project`

### 36. Which Policy effect runs an embedded ARM deployment to remediate non-compliance?
A. DeployIfNotExists (DINE)
B. Deny
C. Audit
D. Append

### 37. **Yes/No** — Policy.

**S1:** An initiative bundles multiple policies for unified assignment.
**S2:** Deny at a parent scope can be overridden by Allow at a child scope.
**S3:** Remediation tasks bring existing non-compliant resources into compliance for DINE/Modify policies.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / Yes / No

### 38. To investigate "Why is my VM not reaching the internet?" use:
A. Application Insights
B. IP Flow Verify and/or Connection Troubleshoot in Network Watcher
C. Backup soft delete
D. NSG quotas

### 39. The Azure Bastion subnet must be named:
A. AzureBastionSubnet (case-sensitive)
B. BastionSubnet
C. Any name
D. ManagementSubnet

### 40. Yes/No — Identity & RBAC.

**S1:** PIM allows time-bound activation of privileged roles with MFA + approval.
**S2:** A Contributor at a Resource Group can assign roles within that RG.
**S3:** Managed identities don't require secret rotation.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

### 41. A storage account `Lifecycle Management` rule can:
A. Encrypt blobs with customer keys
B. Transition blobs between tiers and delete by age
C. Replicate to a paired region
D. Provide DDoS protection

### 42. Which lock type can break operations like listing storage account keys?
A. ReadOnly
B. CanNotDelete
C. NoAccess
D. Audit

### 43. To allow only traffic originating from Front Door to reach an App Service, the BEST supported approach is:
A. Disable HTTPS
B. Block all inbound except WAF
C. Restrict by `AzureFrontDoor.Backend` service tag + header check, or use a Private Link origin
D. Use a NSG with Internet allow

### 44. Yes/No — Hub-Spoke.

**S1:** Spoke-to-spoke traffic flows through the hub (via Firewall + UDRs).
**S2:** "Allow gateway transit" enables the hub to share its VPN/ER gateway with peered spokes.
**S3:** Peered VNets must have overlapping CIDRs.

A. Yes / No / No
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / Yes / Yes

### 45. **Order these steps** to deploy a zone-redundant web tier behind Standard Load Balancer.

1. Create VNet + subnets
2. Create Standard Public IP + Standard LB with zone-redundant frontend
3. Build a custom VM image in Compute Gallery
4. Create VMSS Flexible across zones 1, 2, 3
5. Attach VMSS to the LB backend pool

A. 1 → 2 → 4 → 3 → 5
B. 3 → 1 → 2 → 4 → 5
C. 1 → 3 → 2 → 4 → 5
D. 1 → 2 → 3 → 4 → 5

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. D    21. B    31. D    41. B
2.  C    12. B    22. C    32. D    42. A
3.  A    13. A    23. C    33. C    43. C
4.  D    14. A    24. D    34. A    44. B
5.  A    15. A    25. B    35. C    45. D
6.  D    16. D    26. C    36. A
7.  B    17. D    27. B    37. A
8.  C    18. D    28. A    38. B
9.  C    19. B    29. C    39. A
10. D    20. B    30. A    40. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 42–45 | 🏆 Excellent — take the Final Mock next |
| 32–41 | ✅ On track. Review wrong answers carefully. |
| 23–31 | ⚠️ Re-study weak modules. Use the module map below. |
| <23   | 🔁 Restart from Module 1 |

---

## 🔍 Review Process

For each wrong answer: identify module → re-read → flashcard → re-quiz in 3 days.

### Wrong-answer → Module map

| Question # | Module |
|------------|--------|
| 1, 2, 3 | Module 6 (App Service) |
| 4, 5, 6, 7 | Module 6 (Containers / AKS) |
| 8–14, 44, 45 | Module 7 (VNets) |
| 15–25, 43 | Module 8 (Network Security) |
| 26–32 | Module 9 (Backup/DR/Migrate) |
| 33–38, 41 | Module 10 (Monitor/Policy) |
| 39 | Module 7 (reserved subnet names) |
| 40 | Module 2 (Entra/RBAC/PIM) |
| 42 | Module 1 (Locks) |

---

➡️ When ready: take the [Final Mock Exam](./Final-Mock-Exam.md) under real-exam conditions (55 Q · 100 min).
