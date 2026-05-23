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

---

## Detailed answer rationales

> Per the elevation spec, every wrong option is annotated. Use these to retire concepts you missed.

**Q1. Answer: C.** *Why C is correct.* Slots are a Standard-tier-or-higher feature (per Microsoft Learn AZ-104 App Service tier matrix). *Why others are wrong.* **A**: Free has no slots. **B**: Basic also has no slots. **D**: Premium v3 supports slots but isn't the minimum tier. *Exam-takeaway.* Slots start at Standard.

**Q2. Answer: C.** *Why C is correct.* Private endpoint (inbound) requires Premium v3 (or Isolated v2). *Why others are wrong.* **A/B**: No private endpoint support. **D**: Standard does VNet integration (outbound) only. *Exam-takeaway.* Outbound VNet integration = Standard+; inbound PE = Premium v3+.

**Q3. Answer: A.** *Why A is correct.* "Slot setting" means the value STAYS with the slot during swap. *Why others are wrong.* **B**: That's the *default* behavior for non-slot settings. **C**: Encryption is unrelated. **D**: Slot settings remain editable. *Exam-takeaway.* Slot setting = sticky.

**Q4. Answer: D.** *Why D is correct.* ACI is designed for short-lived, event-driven, no-orchestration workloads — queue-triggered container is the canonical fit. *Why others are wrong.* **A**: 24/7 microservice = AKS. **B**: WordPress = App Service. **C**: Stateful PostgreSQL = VM or Azure DB. *Exam-takeaway.* ACI = short-lived, queue/event-driven.

**Q5. Answer: A.** *Why A is correct.* AKS standard tier control plane is free; you pay for nodes + add-ons. Uptime SLA tier adds a small hourly fee for 99.95% guarantee. *Why others are wrong.* **B**: Standard control plane is free. **C**: Standard tier is free. **D**: Subscription tier is unrelated. *Exam-takeaway.* AKS control plane: free; nodes: paid.

**Q6. Answer: D.** *Why D is correct.* HPA scales pod replicas based on metrics (CPU, memory, custom). *Why others are wrong.* **A**: Cluster autoscaler scales nodes. **B**: Ingress isn't autoscaled by HPA. **C**: Disks aren't HPA's domain. *Exam-takeaway.* HPA = pods; Cluster autoscaler = nodes.

**Q7. Answer: B.** *Why B is correct.* S1 yes (Azure CNI = pods get VNet IPs). S2 yes (Overlay = pod IPs from overlay CIDR). S3 no (Kubenet is legacy; not recommended). *Why others are wrong.* **A**: S3 wrong (Kubenet is not modern default). **C**: S1 wrong. **D**: S3 wrong. *Exam-takeaway.* Modern AKS networking = Azure CNI or CNI Overlay.

**Q8. Answer: C.** *Why C is correct.* Azure reserves 5 IPs per subnet (.0/.1/.2/.3/.255). *Why others are wrong.* **A**: 2 is too few (only network + broadcast). **B**: 3 misses the DNS reservations. **D**: 7 is too many. *Exam-takeaway.* 5 reserved IPs per subnet — memorize.

**Q9. Answer: C.** *Why C is correct.* Peering is non-transitive — fundamental property. *Why others are wrong.* **A**: Wrong direction. **B**: Peering uses Microsoft backbone, not public internet. **D**: Peering supports many peers per VNet. *Exam-takeaway.* Non-transitive = need hub firewall + UDRs to transit.

**Q10. Answer: D.** *Why D is correct.* Private endpoint = NIC with private IP fronting a PaaS service. *Why others are wrong.* **A**: It has *major* DNS implications (Private DNS Zone). **B**: RBAC continues to apply. **C**: PE doesn't replace VPN gateways. *Exam-takeaway.* PE = real NIC + private IP for PaaS.

**Q11. Answer: D.** *Why D is correct.* DNS first (zone + VNet link), then PE NIC, then DNS zone group for auto-registration. *Why others are wrong.* **A**: NIC before DNS leaves a window of public-IP resolution. **B**: Out-of-order DNS link. **C**: Out of order. *Exam-takeaway.* DNS zone → VNet link → PE → zone group.

**Q12. Answer: B.** *Why B is correct.* ExpressRoute Premium with Global Reach connects two ER circuits via Microsoft backbone. *Why others are wrong.* **A**: Local restricts to one metro. **C**: S2S VPN goes over internet, not "through Microsoft backbone." **D**: VNet peering doesn't connect on-prem to on-prem. *Exam-takeaway.* ER Global Reach = on-prem-to-on-prem through Microsoft.

**Q13. Answer: A.** *Why A is correct.* Route-based supports BGP + IKEv2 + multi-tunnel. *Why others are wrong.* **B**: Pricing is similar across SKUs. **C**: SLAs depend on SKU, not route-vs-policy. **D**: Password-only doesn't apply. *Exam-takeaway.* Route-based = modern default.

**Q14. Answer: A.** *Why A is correct.* GatewaySubnet minimum is /29; /27 recommended. *Why others are wrong.* **B**: /24 is too large. **C**: /26 is reserved-subnet minimum for Firewall/Bastion. **D**: /22 way too large. *Exam-takeaway.* GatewaySubnet = /29 min, /27 recommended.

**Q15. Answer: A.** *Why A is correct.* Lower priority number = evaluated first (priorities 100–4096 are user, 65000–65500 are defaults). *Why others are wrong.* **B/C/D**: Reversed/random misconceptions. *Exam-takeaway.* Lower number = higher priority.

**Q16. Answer: D.** *Why D is correct.* DenyAllInBound sits at priority 65500 as the catch-all bottom default. *Why others are wrong.* **A**: AllowVnetInBound is 65000. **B**: AllowAzureLoadBalancerInBound is 65001. **C**: "AllowInternetInBound" is not a default inbound rule. *Exam-takeaway.* 65000/65001 allow defaults, 65500 deny.

**Q17. Answer: D.** *Why D is correct.* All three are correct (stateful, both layers apply, service tags work as source/dest). *Why others are wrong.* A/B/C each miss at least one. *Exam-takeaway.* NSG basics: stateful, dual-layer, service-tag aware.

**Q18. Answer: D.** *Why D is correct.* Azure Firewall rule order: DNAT → Network → Application. *Why others are wrong.* **A**: Reversed. **B**: Random — fail. **C**: Network before DNAT is wrong. *Exam-takeaway.* DNAT first (port-forward), then Network L3/4, then Application L7.

**Q19. Answer: B.** *Why B is correct.* Premium SKU adds TLS inspection + IDPS + URL filtering. *Why others are wrong.* **A**: Basic is L3/L4 only. **C**: Standard adds threat intel + DNAT but not TLS inspection. **D**: Not all SKUs. *Exam-takeaway.* TLS inspection = Premium.

**Q20. Answer: B.** *Why B is correct.* App Gateway WAF v2 is regional L7 with WAF. *Why others are wrong.* **A**: SLB is L4. **C**: Front Door is global, not regional. **D**: Azure Firewall is broader L3-L7 but not the L7-with-WAF product for HTTPS apps. *Exam-takeaway.* Regional L7 + WAF = App Gateway WAF v2.

**Q21. Answer: B.** *Why B is correct.* Azure Front Door = global L7 + CDN + WAF. *Why others are wrong.* **A**: SLB is regional L4. **C**: App Gateway is regional L7. **D**: Traffic Manager is DNS-only. *Exam-takeaway.* Global L7 + CDN + WAF = Front Door.

**Q22. Answer: C.** *Why C is correct.* Traffic Manager is a DNS-based router — returns IPs, doesn't proxy. *Why others are wrong.* **A**: Not a firewall. **B**: Not a proxy (DNS layer only). **D**: Not a CDN. *Exam-takeaway.* TM = DNS-only steering.

**Q23. Answer: C.** *Why C is correct.* ASGs are single-VNet scoped (Microsoft Learn). *Why others are wrong.* **A**: ASGs don't cross regions. **B**: Don't cross subs either. **D**: Don't cross tenants. *Exam-takeaway.* ASG = single VNet.

**Q24. Answer: D.** *Why D is correct.* Standard WAF rollout: create policy → attach in Detection → observe → tune → switch to Prevention. *Why others are wrong.* **A**: Prevention before tuning is dangerous. **B**: Policy must exist before attaching. **C**: Prevention before observation is reckless. *Exam-takeaway.* Always Detection → tune → Prevention.

**Q25. Answer: B.** *Why B is correct.* Bastion = secure browser-based RDP/SSH without public IPs. *Why others are wrong.* **A**: Not L7 caching. **C**: Not a VPN replacement. **D**: Not a CDN. *Exam-takeaway.* Bastion = managed jump host.

**Q26. Answer: C.** *Why C is correct.* ASR = continuous replication for region failover; Backup = scheduled snapshots for data recovery. *Why others are wrong.* **A**: Backup is scheduled. **B**: They serve different purposes. **D**: Snapshots alone aren't full DR. *Exam-takeaway.* ASR = region DR; Backup = data recovery.

**Q27. Answer: B.** *Why B is correct.* CRR requires GRS vault + the CRR feature toggled on. *Why others are wrong.* **A**: LRS doesn't replicate cross-region. **C**: ZRS is within-region only. **D**: RA-GZRS is a storage redundancy, not the vault setting. *Exam-takeaway.* CRR = GRS + toggle.

**Q28. Answer: A.** *Why A is correct.* MARS = Windows files/folders + System State to Azure. *Why others are wrong.* **B**: No Linux support. **C**: SQL uses workload extension. **D**: Whole VMs use snapshot-based Azure Backup. *Exam-takeaway.* MARS = lightweight Windows files agent.

**Q29. Answer: C.** *Why C is correct.* S1 yes (soft delete default on, 14 days min). S2 yes (immutable vault blocks disabling soft delete). S3 yes (GFS = grandfather/father/son). *Why others are wrong.* **A**: S1 wrong. **B**: S2 wrong. **D**: S3 wrong. *Exam-takeaway.* All three are textbook backup facts.

**Q30. Answer: A.** *Why A is correct.* Test failover runs in an isolated network with no production impact. *Why others are wrong.* **B**: Not production-impacting. **C**: Test failover incurs compute cost. **D**: Test failover is recommended, not mandatory. *Exam-takeaway.* Test failover = isolated network.

**Q31. Answer: D.** *Why D is correct.* Azure Migrate phases: Discover → Assess → Migrate. *Why others are wrong.* **A**: Generic project terminology. **B**: Different vendor's. **C**: Lifecycle steps but not Azure Migrate's named phases. *Exam-takeaway.* DAM: Discover, Assess, Migrate.

**Q32. Answer: D.** *Why D is correct.* Project → appliance → discovery → assessment → replicate → cutover. *Why others are wrong.* **A**: Assessment before discovery is impossible. **B**: Project must exist before appliance registers. **C**: Discovery before appliance is impossible. *Exam-takeaway.* Project comes first; appliance enables discovery.

**Q33. Answer: C.** *Why C is correct.* Activity Log default retention is 90 days; longer via diagnostic setting. *Why others are wrong.* **A**: 30 days is too short. **B**: 60 not the official default. **D**: Not retained forever. *Exam-takeaway.* 90 days default; export to keep longer.

**Q34. Answer: A.** *Why A is correct.* AMA + DCRs is the modern, GA agent (MMA retired 2024). *Why others are wrong.* **B**: Diagnostics Extension is older Windows-specific. **C**: OMS is legacy. **D**: Network Watcher Agent does packet capture only. *Exam-takeaway.* AMA + DCR = modern Azure Monitor.

**Q35. Answer: C.** *Why C is correct.* `summarize` aggregates rows in KQL. *Why others are wrong.* **A**: `where` filters. **B**: `top` returns top N. **D**: `project` selects columns. *Exam-takeaway.* Aggregation = `summarize`.

**Q36. Answer: A.** *Why A is correct.* DINE runs an embedded ARM deployment to remediate. *Why others are wrong.* **B**: Deny blocks, doesn't remediate. **C**: Audit logs but doesn't fix. **D**: Append adds a property at create only. *Exam-takeaway.* DINE = auto-remediate.

**Q37. Answer: A.** *Why A is correct.* S1 yes (initiative = policy set). S2 no (no counter-Allow can override Deny). S3 yes (remediation tasks bring existing into compliance). *Why others are wrong.* **B**: S2 wrong (Deny wins). **C**: S1 wrong. **D**: S3 wrong. *Exam-takeaway.* Deny is final at the scope it's applied; use exemptions to override.

**Q38. Answer: B.** *Why B is correct.* IP Flow Verify + Connection Troubleshoot are the diag tools for "why is traffic dropped?" *Why others are wrong.* **A**: App Insights is application telemetry, not network diag. **C**: Backup is unrelated. **D**: NSG quotas aren't a diag tool. *Exam-takeaway.* Network Watcher = network diag toolkit.

**Q39. Answer: A.** *Why A is correct.* `AzureBastionSubnet` is case-sensitive exact name. *Why others are wrong.* **B**: Wrong name. **C**: Specific name required. **D**: Wrong name. *Exam-takeaway.* Memorize reserved subnet names exactly.

**Q40. Answer: B.** *Why B is correct.* S1 yes (PIM JIT). S2 no (Contributor cannot assign roles). S3 yes (MIs don't require secret rotation). *Why others are wrong.* **A**: S2 wrong. **C**: S1 wrong. **D**: S3 wrong. *Exam-takeaway.* Only Owner/UAA assign roles; MIs are credential-free.

**Q41. Answer: B.** *Why B is correct.* Lifecycle = tier transitions + delete by age. *Why others are wrong.* **A**: Encryption is separate. **C**: Lifecycle doesn't replicate. **D**: DDoS is a different service. *Exam-takeaway.* Lifecycle = blob age → tier/delete rules.

**Q42. Answer: A.** *Why A is correct.* ReadOnly lock breaks key listing (technically a write op). *Why others are wrong.* **B**: CanNotDelete still allows modify. **C**: NoAccess isn't a real lock type. **D**: Audit isn't a lock. *Exam-takeaway.* Default to CanNotDelete; ReadOnly is fragile.

**Q43. Answer: C.** *Why C is correct.* `AzureFrontDoor.Backend` service tag + custom header check, OR Private Link origin. *Why others are wrong.* **A**: Disabling HTTPS breaks the use case. **B**: Vague and not the documented pattern. **D**: NSG with Internet allow defeats the requirement. *Exam-takeaway.* Microsoft-documented patterns only.

**Q44. Answer: B.** *Why B is correct.* S1 yes (spoke-to-spoke through hub via firewall + UDRs). S2 yes (gateway transit toggle). S3 no (CIDRs must NOT overlap). *Why others are wrong.* **A**: S2 wrong. **C**: S1 wrong. **D**: S3 wrong (it IS no). *Exam-takeaway.* Non-overlapping CIDRs are mandatory for peering.

**Q45. Answer: D.** *Why D is correct.* Build order: network → LB → image → VMSS → backend. *Why others are wrong.* **A**: Image step misplaced. **B**: Image before network is fine technically but bad sequencing. **C**: Image before LB is fine but adds dependencies. *Exam-takeaway.* Always build the dependency stack bottom-up.
