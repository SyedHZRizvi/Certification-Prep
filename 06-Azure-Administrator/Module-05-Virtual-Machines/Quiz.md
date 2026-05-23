# ✏️ Module 5 Quiz: Virtual Machines

> **Instructions:** Answer all 28 questions WITHOUT looking at the reading. Aim for 24/28 minimum.

---

## Questions

### Q1. Which VM family prefix is optimized for high memory-to-CPU ratio? *(Remember)*
A. F
B. D
C. E
D. B

---

### Q2. The `s` suffix on a VM size (e.g. D2s_v5) means: *(Remember)*
A. Spot VM
B. Premium SSD support
C. Local SSD temp disk
D. Secure boot

---

### Q3. SLAs in Azure (memorize): Single VM with Premium SSD / Availability Set / Availability Zones *(Remember)*
A. 99.5% / 99.95% / 99.99%
B. 99.9% / 99.95% / 99.99%
C. 99.99% / 99.9% / 99.95%
D. 99.95% / 99.99% / 99.999%

---

### Q4. An Availability Set's purpose is to: *(Understand)*
A. Distribute VMs across regions
B. Distribute VMs across fault & update domains within one datacenter
C. Replace VMSS
D. Provide cross-tenant access

---

### Q5. Can you add an existing VM to an Availability Set after it's created? *(Understand)*
A. Yes, anytime
B. Only by stopping the VM
C. No — AS must be specified at VM creation
D. Only with Azure Site Recovery

---

### Q6. Which storage option supports **independent** IOPS, throughput, and size configuration? *(Remember)*
A. Standard SSD
B. Premium SSD
C. Premium SSD v2
D. Standard HDD

---

### Q7. Ultra Disk and Premium SSD v2 can be used as: *(Remember)*
A. Both OS and data disks
B. Data disks only (not OS)
C. OS disk only
D. Backup-only

---

### Q8. VMSS Flexible orchestration mode is recommended because it: *(Understand)*
A. Costs less
B. Supports mixed sizes + AZ integration + max 1000 instances by default
C. Replaces Premium SSD v2
D. Auto-applies CMK

---

### Q9. **Order these steps** to deploy a zone-redundant web tier behind a Standard Load Balancer. *(Create)*

1. Create VNet with subnets
2. Create Standard Public IP + Standard LB (zonal frontend)
3. Build a VM image in Compute Gallery
4. Create VMSS Flexible spanning zones 1, 2, 3 with the image
5. Add LB backend pool to the VMSS

A. 1 → 2 → 3 → 4 → 5
B. 3 → 1 → 2 → 4 → 5
C. 1 → 3 → 2 → 4 → 5
D. 1 → 2 → 4 → 3 → 5

---

### Q10. Yes/No — Availability options. *(Evaluate)*

**S1:** An Availability Set and an Availability Zone can be combined for one VM.
**S2:** Availability Zones provide physically separate datacenters in the same region.
**S3:** A VMSS in Flexible mode can span 3 zones.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / No / Yes

---

### Q11. Which VM extension lets you run an ad-hoc shell command from the Azure portal without RDP/SSH? *(Apply)*
A. Custom Script Extension
B. Run Command
C. DSC
D. Azure Disk Encryption

---

### Q12. Azure Disk Encryption (ADE) operates at the: *(Understand)*
A. Storage account level
B. Physical host level
C. OS level (BitLocker / dm-crypt)
D. Network level

---

### Q13. Encryption at host is enabled at: *(Apply)*
A. Per-disk
B. Per-resource group
C. Subscription level (feature flag) + per-VM setting at creation
D. Tenant level

---

### Q14. To create a reproducible "golden image" with version 1.0.0 and 1.1.0 replicated to East US + West US 2, you should use: *(Apply)*
A. A single managed image
B. Azure Compute Gallery
C. A VHD blob
D. VMSS image extension

---

### Q15. To **generalize** a Linux VM before capturing it as an image, you run: *(Remember)*
A. `sysprep /generalize`
B. `waagent -deprovision +user`
C. `cloud-init clean`
D. `tdnf clean`

---

### Q16. Autoscale: scale OUT means: *(Understand)*
A. Increase VM size (vertical)
B. Increase VM count (horizontal)
C. Move to a higher region
D. Reduce VM count

---

### Q17. The cooldown setting on an autoscale rule: *(Understand)*
A. Waits before evaluating the next scale event to prevent flapping
B. Sets the max number of VMs
C. Triggers a graceful shutdown
D. Equates to AS update domains

---

### Q18. Yes/No — Spot VMs. *(Evaluate)*

**S1:** Spot VMs can be evicted with 30 seconds' notice.
**S2:** Spot VMs come with a 99.99% SLA.
**S3:** Spot VMs are best for stateless batch / fault-tolerant workloads.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / No

---

### Q19. A workload bursts CPU above baseline only occasionally and never for long. The most cost-effective family is likely: *(Apply)*
A. B-series (burstable)
B. F-series (compute optimized)
C. M-series (memory monster)
D. NC-series (GPU)

---

### Q20. Premium SSD v2 disks support: *(Remember)*
A. Only LRS
B. LRS and ZRS
C. GRS only
D. GZRS only

---

### Q21. Live migration is performed by Microsoft when: *(Understand)*
A. You deallocate the VM manually
B. Hardware maintenance requires moving the VM to another host transparently
C. You change the VM region
D. You apply ADE

---

### Q22. To patch 30 VMs across two subscriptions on a schedule with reporting and reboot windows, use: *(Apply)*
A. Custom script extension
B. Azure Update Manager + Maintenance Configuration
C. Azure Bastion
D. PIM

---

### Q23. Azure Bastion provides: *(Remember)*
A. CDN edge caching
B. Browser-based RDP/SSH to VMs without exposing public IPs
C. Layer-7 WAF for VMs
D. VM backup

---

### Q24. Yes/No — Disks & encryption. *(Evaluate)*

**S1:** SSE at-rest with Microsoft-managed keys is always on by default for managed disks.
**S2:** Encryption at host encrypts temp and cache disks at the physical host level.
**S3:** ADE and host encryption can both be enabled on the same VM.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / No / No

---

### Q25. The maximum number of disks attachable to a VM is determined by: *(Remember)*
A. The OS
B. The VM size (each size has a documented max data-disk count)
C. The subscription
D. The region

---

### Q26. Custom Script Extension's primary use is: *(Understand)*
A. To run a one-time provisioning script during VM creation or update
B. To provide an interactive SSH session
C. To enable disk encryption
D. To configure DNS

---

### Q27. A scale set autoscale rule "scale OUT 1 when avg CPU > 70% for 10 minutes" did not trigger when CPU spiked for 5 minutes. The likely reason: *(Analyze)*
A. The aggregation window was 10 minutes
B. CPU metric is unavailable on VMSS
C. The rule needs explicit cool-down disabled
D. The rule needs to be at the subscription level

---

### Q28. Which combination provides the BEST cost / availability balance for a stateless web tier? *(Analyze)*
A. Single VM, Premium SSD, Spot pricing
B. VMSS Flexible across 3 AZs, Standard SSD, autoscale 2–10
C. Availability Set with 5 VMs, Ultra Disk
D. 10 VMs across 10 regions

---

## 🎯 Answers + Explanations

### Q1: **C. E**
E = memory optimized. F = compute, D = general purpose, B = burstable.

### Q2: **B. Premium SSD support**
`s` = supports Premium SSD. `d` = local NVMe temp disk. `a` = AMD CPU.

### Q3: **B. 99.9% / 99.95% / 99.99%**
The canonical Azure VM SLA ladder. Memorize.

### Q4: **B. Distribute VMs across fault & update domains within one datacenter**
Two VMs in the same AS are guaranteed never to be in the same FD or UD at the same time.

### Q5: **C. No — AS must be specified at VM creation**
A famous gotcha. You'd have to redeploy.

### Q6: **C. Premium SSD v2**
The "decouple IOPS from size" disk. Premium SSD (v1) is tied to fixed P-tiers.

### Q7: **B. Data disks only (not OS)**
Both Premium SSD v2 and Ultra are restricted to data disks. OS disk = Premium SSD or Standard SSD.

### Q8: **B. Supports mixed sizes + AZ integration + max 1000 instances by default**
Flexible is the modern default.

### Q9: **A. 1 → 2 → 3 → 4 → 5**
Network → LB → image → VMSS → backend pool. Sensible build order.

### Q10: **B. No / Yes / Yes**
AS and AZ are mutually exclusive. AZs are physically separate datacenters. VMSS can span zones.

### Q11: **B. Run Command**
Push a one-off command from the portal/CLI without opening RDP/SSH.

### Q12: **C. OS level (BitLocker / dm-crypt)**
ADE works inside the guest OS. Host encryption is a separate feature.

### Q13: **C. Subscription level (feature flag) + per-VM setting at creation**
You must first register the feature on the subscription, then enable per VM.

### Q14: **B. Azure Compute Gallery**
The versioned, multi-region image catalog. Managed images are single-region/single-version.

### Q15: **B. `waagent -deprovision +user`**
Linux generalize. `sysprep` is the Windows equivalent.

### Q16: **B. Increase VM count (horizontal)**
"Out" = more instances. "Up" = larger size (vertical, requires restart).

### Q17: **A. Waits before evaluating the next scale event to prevent flapping**
Default 5 minutes. Prevents thrashing.

### Q18: **A. Yes / No / Yes**
Eviction is 30 sec. No SLA for spot. Stateless batch is the canonical fit.

### Q19: **A. B-series (burstable)**
B = CPU credits accrue while idle, spend on bursts. Best for dev/test or low-baseline workloads.

### Q20: **B. LRS and ZRS**
No geo for Premium SSD v2 (yet).

### Q21: **B. Hardware maintenance requires moving the VM to another host transparently**
Live migration is initiated by the platform during host maintenance.

### Q22: **B. Azure Update Manager + Maintenance Configuration**
Replaces legacy Update Management. Tightly integrated with Maintenance Configurations.

### Q23: **B. Browser-based RDP/SSH to VMs without exposing public IPs**
A managed jump host. Reduces attack surface.

### Q24: **A. Yes / Yes / Yes**
SSE is always-on. Host encryption is independent. ADE + host encryption can coexist.

### Q25: **B. The VM size**
Each size has a documented max data-disk count (e.g. D2s_v5 = 4 data disks).

### Q26: **A. To run a one-time provisioning script during VM creation or update**
CSE downloads a file (from a URI) and runs it.

### Q27: **A. The aggregation window was 10 minutes**
The rule requires 10 min of sustained > 70% before triggering.

### Q28: **B. VMSS Flexible across 3 AZs, Standard SSD, autoscale 2–10**
Multi-AZ + autoscale = HA + cost. Single VM has poor SLA. Ultra is overkill for stateless web. 10 regions is over-engineered.

---

## 📊 Score Yourself

- 27–28/28 → 🏆 VM domain owned.
- 24–26/28 → ✅ Strong; review misses.
- 20–23/28 → ⚠️ Re-read availability + disks sections.
- <20/28 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- VM SLAs (99.9 / 99.95 / 99.99)
- AS = within one DC; AZ = separate DCs in region; mutually exclusive
- AS must be set at create time
- Premium SSD v2 / Ultra = data disks only
- VMSS Flexible vs Uniform
- ADE = OS level, Host encryption = physical host
- Spot eviction = 30 sec
- Compute Gallery → Image Def → Image Version

---

## 🧪 Halfway Checkpoint

🎉 **You've now covered the first half of AZ-104.**

➡️ **Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) before continuing to Module 6.**

Then: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6](../Module-06-App-Services-Containers/Reading.md)
