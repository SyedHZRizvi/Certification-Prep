# 🧪 Final Mock Exam, AZ-104 (Real Exam Conditions)

> **Conditions:** Set a 100-minute timer. 55 questions. Treat this like the real thing, no notes, no Google, single sitting.
> **Pass mark:** 39/55 (≈ 70%, matching the real exam's 700/1000)
> Mix of MCQ, Yes/No groups, and task-ordering, mirrors the real AZ-104 exam composition.
> Take this 2–3 days before your scheduled exam.

---

## 📝 Questions

### 1. From top to bottom, the Azure resource hierarchy is:
A. Subscription → Tenant → RG → Resource
B. Tenant → Subscription → Management Group → Resource Group → Resource
C. Management Group → Tenant → Subscription → Resource
D. Tenant → Management Group → Subscription → Resource Group → Resource

### 2. Max management-group nesting depth under the Tenant Root Group is:
A. 6
B. 4
C. 3
D. Unlimited

### 3. Tags applied to a Resource Group are:
A. Automatically inherited by child resources
B. Inherited only at create time
C. NOT inherited, use a "Modify" policy to push them
D. Inherited only for management groups

### 4. To restrict deployments to `eastus` + `westus2` across multiple subscriptions, apply the policy at the:
A. Tenant Root only
B. Each RG
C. Subscription only
D. Management Group covering the affected subscriptions

### 5. Conditional Access requires which Entra ID tier?
A. Free
B. P1
C. P2
D. Microsoft 365 Apps

### 6. Identity Protection (risk-based policies) requires:
A. Free
B. P1
C. Office 365 E5
D. P2

### 7. **Yes/No**, RBAC & PIM.

**S1:** Contributor cannot assign roles.
**S2:** PIM eligible assignments allow time-bound activation with MFA and optional approval.
**S3:** A managed identity is preferred over a service principal secret for Azure-hosted workloads.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

### 8. A user with only `Storage Account Contributor` (control plane) tries to read blobs. They:
A. Can read blobs immediately
B. Need a private endpoint
C. Need an SSL cert
D. CANNOT read blob data without a data-plane role like `Storage Blob Data Reader`

### 9. The CHEAPEST redundancy SKU that survives an AZ outage is:
A. ZRS
B. LRS
C. GRS
D. GZRS

### 10. Geo-zone-redundant storage (GZRS) gives you 6 copies, distributed as:
A. 6 in 6 regions
B. 3 across AZs in primary + 3 LRS in paired region
C. 6 in one DC
D. 3 in primary + 3 across AZs in paired

### 11. The minimum storage duration for Cool / Cold / Archive tiers respectively is:
A. 7 / 14 / 30 days
B. 60 / 90 / 180 days
C. 30 / 90 / 180 days
D. 30 / 60 / 90 days

### 12. To read an Archive-tier blob, you must:
A. Rehydrate it to Hot or Cool (hours)
B. Use an "archive" API
C. Use a SAS with `archive` permission
D. Wait 24 hours

### 13. The SAS type that uses Entra ID (auditable per user) is:
A. Account SAS
B. Service SAS
C. Anonymous SAS
D. User Delegation SAS

### 14. **Order these steps** to set up CMK encryption for a storage account.

1. Enable system-assigned MI on the storage account
2. Create a Key Vault with soft-delete + purge protection
3. Create the key in the Key Vault
4. Grant the storage MI Key Vault Crypto Service Encryption User
5. Switch the storage account to use the KV key

A. 1 → 2 → 3 → 4 → 5
B. 2 → 3 → 1 → 4 → 5
C. 2 → 1 → 3 → 4 → 5
D. 3 → 2 → 1 → 4 → 5

### 15. A Service Endpoint on a storage account:
A. Provides a private IP
B. Is the same as a private endpoint
C. Disables RBAC
D. Routes traffic over Microsoft backbone but the PaaS service still has a public IP

### 16. A Private Endpoint requires which DNS artifact for FQDN-based access to work?
A. None
B. A linked Private DNS Zone with auto-registration of the PE's IP
C. A public DNS record only
D. A Standard Load Balancer

### 17. **Yes/No**, Azure Files.

**S1:** NFS 4.1 shares require Premium FileStorage account.
**S2:** Premium file shares bill for provisioned size; standard tiers bill for used size.
**S3:** Cloud tiering replaces local copies with stub files.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

### 18. The MARS agent backs up:
A. Linux files
B. Windows files/folders + System State to Azure
C. SQL Server
D. Whole VMs

### 19. SLAs for single VM (Premium SSD) / Availability Set / Availability Zones:
A. 99.5% / 99.95% / 99.99%
B. 99.95% / 99.99% / 99.999%
C. 99.99% / 99.9% / 99.95%
D. 99.9% / 99.95% / 99.99%

### 20. An Availability Set must be specified:
A. After VM is created
B. Only via PowerShell
C. At VM creation, cannot be added later
D. After deallocation

### 21. Premium SSD v2 and Ultra Disks can be used as:
A. Data disks only
B. OS only
C. Both OS and data
D. Backup only

### 22. The maximum FDs and UDs in an Availability Set are:
A. 2 / 5
B. 3 / 20
C. 5 / 5
D. Unlimited

### 23. **Yes/No**, Compute.

**S1:** VMSS Flexible orchestration supports mixed VM sizes and zone integration.
**S2:** Azure Disk Encryption (ADE) operates at the OS level (BitLocker / dm-crypt).
**S3:** Spot VMs come with a 99.99% SLA.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / Yes

### 24. Spot VMs are evicted with:
A. No notice
B. 5 minutes' notice
C. 30 seconds' notice
D. 1 hour's notice

### 25. To deploy a zone-redundant web tier behind a Standard LB, the right combo is:
A. Single VM in zone 1
B. AS with 5 VMs
C. VMSS Flexible across zones 1, 2, 3 + Standard LB with zone-redundant frontend
D. Multiple regional VMs

### 26. The MINIMUM App Service Plan tier supporting deployment slots is:
A. Standard
B. Basic
C. Free
D. Premium v3

### 27. An App Service Plan can host:
A. Exactly one web app
B. Up to 10 web apps regardless of size
C. Only Linux apps
D. Multiple web apps sharing the plan's compute

### 28. The AKS standard tier control plane is:
A. Free; you pay only for nodes + add-ons
B. Always paid hourly
C. Required for production
D. Limited to 50 nodes

### 29. The Horizontal Pod Autoscaler scales:
A. Nodes
B. Pod replicas
C. Disks
D. Ingress controllers

### 30. The cluster autoscaler scales:
A. Number of nodes in a pool based on pending-pod pressure
B. Pods
C. Storage
D. Pods AND nodes simultaneously

### 31. To do RWX (multi-pod read/write) in AKS, the storage driver is:
A. Azure Disk CSI
B. Azure File CSI
C. Local emptyDir
D. Ephemeral OS disk

### 32. Azure reserves how many IPs per subnet?
A. 2
B. 5
C. 3
D. 7

### 33. VNet peering is:
A. Transitive, A↔B and B↔C means A↔C
B. Always cross-region
C. NOT transitive, need a hub firewall/NVA + UDRs to transit
D. Limited to 4 peers per VNet

### 34. **Order these steps** to create a working private endpoint for a storage account.

1. Create a Private DNS Zone (e.g., `privatelink.blob.core.windows.net`)
2. Link the zone to your VNet
3. Create the private endpoint NIC
4. Create a DNS zone group to auto-register

A. 1 → 3 → 2 → 4
B. 3 → 1 → 2 → 4
C. 1 → 2 → 3 → 4
D. 3 → 2 → 1 → 4

### 35. The MIN size for `AzureFirewallSubnet` and `AzureBastionSubnet` respectively:
A. /27, /27
B. /28, /29
C. /26, /26
D. /29, /28

### 36. Route-based VPN supports BGP and multiple tunnels. Policy-based is legacy. Pick route-based with at least:
A. VpnGw2 (or VpnGw1AZ for zone redundancy)
B. Basic SKU
C. ExpressRoute Premium
D. Front Door

### 37. NSG priorities are evaluated:
A. Highest number first
B. Alphabetical
C. Lowest number first (lower = higher priority)
D. Random

### 38. The default inbound NSG rule at priority 65500 is:
A. AllowVnetInBound
B. AllowAzureLoadBalancerInBound
C. AllowInternetInBound
D. DenyAllInBound

### 39. **Yes/No**, NSG mechanics.

**S1:** NSGs are stateful.
**S2:** Subnet NSG + NIC NSG both apply; deny in either drops the packet.
**S3:** Service tags are auto-maintained by Microsoft.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

### 40. Azure Firewall rule processing order is:
A. DNAT → Network → Application
B. Application → Network → DNAT
C. Network → DNAT → Application
D. Random

### 41. To do GLOBAL L7 routing with WAF + CDN, use:
A. Azure Front Door
B. Application Gateway WAF v2
C. Standard Load Balancer
D. Traffic Manager

### 42. Traffic Manager is:
A. A regional firewall
B. An L7 proxy
C. A DNS-based router (no proxy)
D. A CDN

### 43. ASGs work across:
A. Multiple regions
B. Multiple subscriptions
C. A single VNet only
D. Entire tenant

### 44. **Order these steps** to safely roll out a WAF.

1. Create WAF policy (custom + managed rules)
2. Attach in Detection mode
3. Observe WAF logs
4. Tune rules
5. Switch to Prevention mode

A. 1 → 5 → 2 → 3 → 4
B. 2 → 1 → 3 → 4 → 5
C. 1 → 2 → 3 → 4 → 5
D. 1 → 2 → 5 → 3 → 4

### 45. Cross-Region Restore for Azure Backup requires the vault to use:
A. LRS
B. GRS + CRR feature enabled
C. ZRS
D. RA-GZRS only

### 46. Azure Site Recovery vs Backup, pick the one with continuous replication for region DR:
A. Site Recovery
B. Backup
C. Both
D. Snapshots

### 47. Azure Migrate's 3 phases are:
A. Plan → Execute → Validate
B. Discover → Assess → Migrate
C. Scan → Move → Confirm
D. Setup → Replicate → Validate

### 48. **Yes/No**, Backup.

**S1:** Soft delete is on by default and retains deleted recovery points for ≥14 days.
**S2:** GRS vault unlocks Cross-Region Restore (CRR) when enabled.
**S3:** MUA via Resource Guard requires a second admin's approval for protected ops.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / Yes / No

### 49. ASR Test failover:
A. Runs the replica in an isolated network with no prod impact
B. Affects production
C. Costs the same as planned failover
D. Cannot be repeated

### 50. The default Activity Log retention is:
A. 30 days
B. 90 days
C. 60 days
D. Forever

### 51. The modern Azure Monitor agent is:
A. MMA
B. AMA + Data Collection Rules
C. OMS Agent
D. Diagnostics Extension

### 52. The KQL keyword to aggregate rows is:
A. `summarize`
B. `where`
C. `top`
D. `project`

### 53. Policy effect that runs an embedded ARM deployment to remediate is:
A. Audit
B. Deny
C. DeployIfNotExists
D. Append

### 54. **Yes/No**, Hub-Spoke.

**S1:** Spoke-to-spoke traffic flows through the hub (via Firewall + UDRs).
**S2:** Peered VNets must have non-overlapping CIDRs.
**S3:** "Allow gateway transit" on the hub + "Use remote gateways" on the spoke = spoke uses hub's VPN/ER gateway.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / Yes / No

### 55. **Order these steps** to deploy a production-grade web app with private path, WAF, and zone redundancy.

1. Create a Premium v3 App Service plan (zone-redundant)
2. Create the web app on the plan
3. Configure a private endpoint for the App Service (with linked Private DNS Zone)
4. Provision Azure Front Door Premium with a Private Link origin
5. Enable a WAF policy in Detection mode
6. After tuning, switch WAF to Prevention mode

A. 1 → 2 → 4 → 3 → 5 → 6
B. 1 → 3 → 2 → 4 → 5 → 6
C. 2 → 1 → 3 → 4 → 5 → 6
D. 1 → 2 → 3 → 4 → 5 → 6

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    12. A    23. A    34. C    45. B
2.  A    13. D    24. C    35. C    46. A
3.  C    14. C    25. C    36. A    47. B
4.  D    15. D    26. A    37. C    48. B
5.  B    16. B    27. D    38. D    49. A
6.  D    17. D    28. A    39. D    50. B
7.  D    18. B    29. B    40. A    51. B
8.  D    19. D    30. A    41. A    52. A
9.  A    20. C    31. B    42. C    53. C
10. B    21. A    32. B    43. C    54. B
11. C    22. B    33. C    44. C    55. D
```

---

## 📊 Scoring (Real-Exam Calibrated)

| Score | Verdict |
|-------|---------|
| 50–55 | 🏆 You're ready. Take the real exam in the next 1–3 days. |
| 39–49 | ✅ Pass-likely. Review missed Qs, take the real exam this week. |
| 30–38 | ⚠️ Borderline. Re-quiz weak modules, take the mock again in 3–5 days. |
| <30   | 🔁 Don't book the real exam yet. Re-study weak modules + redo Practice Exams 1 and 2. |

---

## 🔍 The 24-Hour Pre-Exam Routine

1. **3 days before:** Take this Final Mock cold. Score it.
2. **2 days before:** Review every wrong answer + 1 Cheat-Sheet per module.
3. **1 day before:** Skim ALL cheat-sheets. Light review. **No new material.**
4. **Exam day:** Eat normally. Hydrate. Arrive (or log in to OnVUE) 30 min early. Read each question twice. **Flag and skip** any question over 2 minutes.

---

## 📝 Real-Exam Tips

- **Read the case studies CAREFULLY.** The 1–2 case studies hide the requirements in the scenario text (regulated, must be zone-redundant, lowest cost, etc.).
- **Drag-drop task ordering:** if you're unsure, do the prerequisite steps first (network, identity, then data).
- **Yes/No groups:** each statement is independent, don't anchor on the first one.
- **Mark for review** anything you're not 95% sure about, circle back after finishing.
- **Watch the clock**: ~110 sec/question is fine for MCQs; case studies eat 5+ minutes.

---

➡️ **Schedule your AZ-104 exam at [Pearson VUE](https://www.pearsonvue.com/microsoft) or via Microsoft Learn.**

🎉 Good luck. You earned this.

---

## Detailed answer rationales

> Per the elevation spec, each option (correct and incorrect) is annotated. These rationales also cite the Microsoft Learn AZ-104 chapter / CAF design area where the answer is canonical, so you can dive deeper after the mock.

**Q1. Answer: D.** *Why D.* Tenant → MG → Sub → RG → Resource (Microsoft Learn AZ-104 ch.1; CAF 2020). *Wrong options.* **A**: subscription is not the top. **B**: MG sits above sub, not below. **C**: Tenant is top, not MG. *Takeaway.* T-M-S-R-R.

**Q2. Answer: A.** *Why A.* MG nesting depth = 6 (plus the non-counted Tenant Root Group). *Wrong options.* **B/C**: too shallow. **D**: not unlimited. *Takeaway.* 6 deep.

**Q3. Answer: C.** *Why C.* Tags don't auto-inherit; Modify policy is the supported mechanism. *Wrong options.* **A**: trap. **B**: never auto. **D**: same trap. *Takeaway.* Inherit-a-tag Modify policy.

**Q4. Answer: D.** *Why D.* Apply at the MG that covers the affected subs. *Wrong options.* **A**: Tenant Root over-applies. **B**: per-RG drifts. **C**: per-sub duplicates. *Takeaway.* Smallest scope that fully covers.

**Q5. Answer: B.** *Why B.* CA requires P1. *Wrong options.* **A**: Free is Security Defaults only. **C**: P2 adds Identity Protection on top of CA. **D**: M365 Apps doesn't include P1. *Takeaway.* CA = P1.

**Q6. Answer: D.** *Why D.* Identity Protection (risk-based CA) is the P2 feature. *Wrong options.* **A/B**: Free/P1 don't include risk-based CA. **C**: Office 365 E5 includes Defender for O365, not Entra P2 directly. *Takeaway.* Risk-based CA = P2.

**Q7. Answer: D.** *Why D.* All three statements true (Contributor can't assign, PIM = time-bound + MFA, MIs preferred over SP secrets). *Wrong options.* A/B/C each invert one true statement. *Takeaway.* All three are exam reflexes.

**Q8. Answer: D.** *Why D.* Control plane ≠ data plane. *Wrong options.* **A**: data role needed for data. **B**: PE is network. **C**: SSL is transport. *Takeaway.* Need Storage Blob Data role for blobs.

**Q9. Answer: A.** *Why A.* ZRS = cheapest AZ-resilient. *Wrong options.* **B**: LRS no AZ resilience. **C**: GRS is region-resilient, not AZ. **D**: GZRS is more expensive. *Takeaway.* ZRS for AZ, GZRS for AZ + region.

**Q10. Answer: B.** *Why B.* GZRS = 3 AZs primary + 3 LRS paired. *Wrong options.* **A**: not 6 regions. **C**: not single-DC. **D**: distribution reversed. *Takeaway.* GZRS = ZRS primary + LRS paired.

**Q11. Answer: C.** *Why C.* Cool 30 / Cold 90 / Archive 180. *Wrong options.* **A/B/D**: numbers wrong. *Takeaway.* Memorize 30/90/180.

**Q12. Answer: A.** *Why A.* Rehydrate to Hot/Cool first (hours). *Wrong options.* **B**: no special API. **C**: SAS doesn't bypass. **D**: not a wait timer. *Takeaway.* Archive = rehydrate.

**Q13. Answer: D.** *Why D.* User Delegation SAS = Entra-signed, per-user audit. *Wrong options.* **A/B**: key-signed. **C**: not a real SAS type. *Takeaway.* User Delegation SAS for audit.

**Q14. Answer: C.** *Why C.* KV → MI → key → grant → switch. *Wrong options.* **A**: MI without vault to access. **B**: key before MI ordering off. **D**: key before vault impossible. *Takeaway.* Vault first, key, MI, grant, switch.

**Q15. Answer: D.** *Why D.* Service endpoint = optimize routing, PaaS keeps public IP. *Wrong options.* **A**: PE = private IP. **B**: different feature. **C**: RBAC independent. *Takeaway.* SE optimizes; PE privatizes.

**Q16. Answer: B.** *Why B.* Private DNS Zone linked to VNet + auto-registration. *Wrong options.* **A**: required. **C**: public DNS resolves to public IP. **D**: SLB is network L4. *Takeaway.* PE requires DNS zone group.

**Q17. Answer: D.** *Why D.* S1 yes (NFS = Premium FileStorage); S2 yes (Premium = provisioned billing); S3 yes (cloud tiering uses stubs). *Wrong options.* A/B/C each invert one truth. *Takeaway.* Three classic Azure Files facts.

**Q18. Answer: B.** *Why B.* MARS = Windows files/folders + System State. *Wrong options.* **A**: no Linux. **C**: SQL via workload extension. **D**: VMs via snapshot Azure Backup. *Takeaway.* MARS = lightweight Windows.

**Q19. Answer: D.** *Why D.* Canonical SLAs: 99.9 / 99.95 / 99.99. *Wrong options.* **A/B/C**: numbers shifted. *Takeaway.* 3 / 3.5 / 4 nines.

**Q20. Answer: C.** *Why C.* AS must be set at create. *Wrong options.* **A/B/D**: AS membership is platform-locked at creation. *Takeaway.* Plan AS membership upfront.

**Q21. Answer: A.** *Why A.* Both Premium SSD v2 and Ultra = data disks only. *Wrong options.* **B/C/D**: cannot be OS. *Takeaway.* OS disk = Premium SSD or Standard SSD.

**Q22. Answer: B.** *Why B.* AS max: 3 FD × 20 UD. *Wrong options.* **A**: that's the default. **C**: wrong numbers. **D**: not unlimited. *Takeaway.* 3 / 20 max.

**Q23. Answer: A.** *Why A.* S1 yes (Flexible mixed sizes + AZs). S2 yes (ADE = BitLocker/dm-crypt). S3 no (Spot has no SLA). *Wrong options.* **B**: S3 wrong. **C/D**: each inverts one. *Takeaway.* Spot = no SLA.

**Q24. Answer: C.** *Why C.* Spot eviction = 30 sec notice. *Wrong options.* **A**: there is notice. **B**: 5 min wrong. **D**: 1 hr wrong. *Takeaway.* 30 sec.

**Q25. Answer: C.** *Why C.* VMSS Flexible across zones + zone-redundant SLB. *Wrong options.* **A**: single VM = no HA. **B**: AS not zone-redundant. **D**: regional, not zone-redundant. *Takeaway.* Zone-redundant tier = VMSS Flex + SLB.

**Q26. Answer: A.** *Why A.* Slots start at Standard. *Wrong options.* **B/C**: Free/Basic no slots. **D**: PV3 supports but isn't minimum. *Takeaway.* Standard minimum.

**Q27. Answer: D.** *Why D.* ASPs can host multiple apps sharing compute. *Wrong options.* **A**: not limited to 1. **B**: not "regardless of size." **C**: not Linux-only. *Takeaway.* Plan = compute SKU; many apps share.

**Q28. Answer: A.** *Why A.* Standard control plane free, nodes paid. *Wrong options.* **B**: standard tier is free. **C**: required for production is opinion. **D**: 50-node cap doesn't apply. *Takeaway.* AKS standard control plane = free.

**Q29. Answer: B.** *Why B.* HPA = pod replicas. *Wrong options.* **A**: cluster autoscaler. **C**: storage unrelated. **D**: ingress is separate. *Takeaway.* HPA = pods.

**Q30. Answer: A.** *Why A.* Cluster autoscaler scales nodes by pending-pod pressure. *Wrong options.* **B**: HPA scales pods. **C**: storage independent. **D**: not simultaneous. *Takeaway.* Pods → HPA; Nodes → cluster autoscaler.

**Q31. Answer: B.** *Why B.* Azure File CSI = SMB/NFS = RWX. *Wrong options.* **A**: Disk CSI is RWO. **C**: ephemeral disk has no PV semantics. **D**: emptyDir is per-pod local. *Takeaway.* Multi-pod RWX = Azure File CSI.

**Q32. Answer: B.** *Why B.* 5 reserved IPs (.0/.1/.2/.3/.255). *Wrong options.* **A/C/D**: wrong count. *Takeaway.* 5 IPs reserved per subnet.

**Q33. Answer: C.** *Why C.* Peering non-transitive, hub firewall + UDRs to transit. *Wrong options.* **A/B**: wrong. **D**: peers per VNet are high. *Takeaway.* Non-transitive is THE peering fact.

**Q34. Answer: C.** *Why C.* DNS zone → VNet link → PE → zone group. *Wrong options.* **A**: PE before DNS link leaves a public window. **B**: out of order. **D**: out of order. *Takeaway.* DNS first, then PE.

**Q35. Answer: C.** *Why C.* AzureFirewallSubnet min /26; AzureBastionSubnet min /26. *Wrong options.* **A/B/D**: wrong. *Takeaway.* /26 each.

**Q36. Answer: A.** *Why A.* VpnGw1AZ or higher for zone-redundant route-based. *Wrong options.* **B**: Basic doesn't support BGP. **C**: ER is separate. **D**: Front Door is L7. *Takeaway.* Modern hybrid = VpnGw1AZ or higher.

**Q37. Answer: C.** *Why C.* Lower number = first evaluated. *Wrong options.* **A/B/D**: misconceptions. *Takeaway.* 100 wins over 200.

**Q38. Answer: D.** *Why D.* DenyAllInBound at 65500. *Wrong options.* **A**: AllowVnetInBound is 65000. **B**: AllowAzureLoadBalancerInBound is 65001. **C**: not a default. *Takeaway.* 65500 = catch-all deny.

**Q39. Answer: D.** *Why D.* All three: stateful, both NSGs apply, service tags auto-maintained. *Wrong options.* A/B/C each invert. *Takeaway.* Three NSG facts to reflex.

**Q40. Answer: A.** *Why A.* DNAT → Network → Application. *Wrong options.* **B**: reversed. **C**: order wrong. **D**: not random. *Takeaway.* Firewall rule order is fixed.

**Q41. Answer: A.** *Why A.* Front Door = global L7 + CDN + WAF. *Wrong options.* **B**: regional L7. **C**: regional L4. **D**: DNS-only. *Takeaway.* Global L7 + CDN + WAF = Front Door.

**Q42. Answer: C.** *Why C.* TM = DNS-only steering. *Wrong options.* **A/B/D**: wrong category. *Takeaway.* TM doesn't proxy.

**Q43. Answer: C.** *Why C.* ASGs single-VNet only. *Wrong options.* **A**: not multi-region. **B**: not multi-sub. **D**: not tenant-wide. *Takeaway.* ASG = single VNet.

**Q44. Answer: C.** *Why C.* Standard rollout: policy → Detection → observe → tune → Prevention. *Wrong options.* **A**: skips observation. **B**: policy must exist first. **D**: out of order. *Takeaway.* Always tune before Prevention.

**Q45. Answer: B.** *Why B.* CRR = GRS vault + CRR feature toggled on. *Wrong options.* **A**: LRS no cross-region. **C**: ZRS within region. **D**: RA-GZRS is storage redundancy, not vault. *Takeaway.* CRR = GRS + toggle.

**Q46. Answer: A.** *Why A.* ASR = continuous replication for region DR. *Wrong options.* **B**: scheduled. **C**: different. **D**: snapshots aren't full DR. *Takeaway.* ASR = region failover.

**Q47. Answer: B.** *Why B.* Discover → Assess → Migrate. *Wrong options.* **A/C/D**: not the named phases. *Takeaway.* DAM.

**Q48. Answer: B.** *Why B.* S1 yes (soft delete default + 14 days min). S2 yes (GRS unlocks CRR). S3 yes (MUA = 4-eyes). *Wrong options.* A/C/D each miss one. *Takeaway.* All three are backup fundamentals.

**Q49. Answer: A.** *Why A.* Test failover = isolated network, no prod impact. *Wrong options.* **B**: not production-impacting. **C**: not same cost. **D**: test failovers are repeatable. *Takeaway.* Test failover is the dry-run.

**Q50. Answer: B.** *Why B.* Activity Log default = 90 days. *Wrong options.* **A**: 30 wrong. **C**: 60 wrong. **D**: not forever. *Takeaway.* 90 days; export to extend.

**Q51. Answer: B.** *Why B.* AMA + DCRs = modern. *Wrong options.* **A**: MMA retired. **C**: OMS legacy. **D**: Diagnostics Extension legacy. *Takeaway.* AMA = modern.

**Q52. Answer: A.** *Why A.* `summarize` aggregates. *Wrong options.* **B**: filters. **C**: returns top N. **D**: selects columns. *Takeaway.* Aggregation = summarize.

**Q53. Answer: C.** *Why C.* DINE runs ARM deployment to remediate. *Wrong options.* **A**: Audit logs only. **B**: Deny blocks. **D**: Append adds property at create. *Takeaway.* DINE = auto-remediate.

**Q54. Answer: B.** *Why B.* S1 yes (hub firewall + UDRs for spoke-to-spoke). S2 yes (non-overlapping required). S3 yes (gateway-transit toggle pair). *Wrong options.* A/C/D each invert. *Takeaway.* Three hub-spoke truths.

**Q55. Answer: D.** *Why D.* Plan → app → PE → FD → WAF Detection → Prevention. *Wrong options.* **A**: FD before PE leaves a gap. **B**: PE before app makes no sense. **C**: app before plan impossible. *Takeaway.* Build dependency stack bottom-up; WAF Detection then Prevention.
