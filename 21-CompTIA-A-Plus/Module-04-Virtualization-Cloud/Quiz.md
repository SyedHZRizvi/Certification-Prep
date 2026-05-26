# ✏️ Module 4 Quiz: Virtualization & Cloud Basics

> Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24.
>
> **Bloom distribution:** Remember 5 · Understand 6 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. VMware ESXi is what kind of hypervisor? *(Remember)*
A. Type 1 (bare-metal)
B. Type 2 (hosted)
C. Container runtime
D. Cloud service

---

### Q2. Which cloud service model gives you raw VMs that you configure and patch yourself? *(Understand)*
A. SaaS
B. PaaS
C. IaaS
D. FaaS

---

### Q3. Microsoft 365 (email + Word + Teams) is delivered as which cloud model? *(Remember)*
A. IaaS
B. PaaS
C. SaaS
D. Hybrid

---

### Q4. The 5 essential characteristics of cloud per NIST include all EXCEPT: *(Remember)*
A. On-demand self-service
B. Broad network access
C. Resource pooling
D. Guaranteed lowest cost

---

### Q5. A 60-person consulting firm wants a "scale-up-on-demand, scale-down-when-idle" model with no OS to maintain. The MOST appropriate cloud model: *(Apply)*
A. SaaS (Salesforce)
B. PaaS (Azure App Service or AWS Elastic Beanstalk)
C. IaaS (EC2 + manual scaling)
D. On-prem cluster

---

### Q6. Type 2 hypervisor that runs on top of a host OS — example? *(Remember)*
A. VMware ESXi
B. Microsoft Hyper-V Server
C. Oracle VirtualBox
D. KVM

---

### Q7. The PRIMARY architectural difference between a VM and a Docker container is: *(Understand)*
A. Containers include a full OS kernel
B. VMs include a full OS kernel; containers share the host kernel
C. Containers must run on Linux only
D. VMs are always faster

---

### Q8. In AWS IaaS (EC2), who is responsible for patching the guest OS? *(Apply)*
A. AWS
B. The customer
C. Both, on alternating Sundays
D. The compliance auditor

---

### Q9. A team uses snapshots aggressively, taking 10 snapshots per VM per day. What's the operational risk? *(Analyze)*
A. Snapshots make VMs faster
B. Snapshots are not backups — they consume storage and can corrupt the chain if not managed
C. Snapshots auto-delete after 24 hours
D. Snapshots are free

---

### Q10. Which deployment model is "shared by multiple organizations with common interests, often regulated industries"? *(Remember)*
A. Public
B. Private
C. Community
D. Hybrid

---

### Q11. A start-up wants to run their custom Linux app on managed virtual machines they fully control, including OS, patching, and networking. Best fit: *(Apply)*
A. IaaS (EC2, Azure VMs)
B. PaaS
C. SaaS
D. Bare-metal lease only

---

### Q12. "Rapid elasticity" in NIST means: *(Understand)*
A. Devices can stretch physically
B. Resources can scale up and down quickly with demand
C. Networks must use stretchy cables
D. Database queries must be elastic

---

### Q13. VDI (Virtual Desktop Infrastructure) MOST commonly hosts: *(Apply)*
A. User desktops as VMs in the data center, accessed via thin client / browser / laptop
B. Servers only
C. Mobile-only apps
D. Containerized microservices

---

### Q14. Thin-provisioned disk vs thick-provisioned — what's the trade-off? *(Analyze)*
A. Thin pre-allocates; thick grows on write
B. Thin grows on write (saves space); thick pre-allocates (predictable performance, no over-commit surprise)
C. They're the same
D. Thin is always faster

---

### Q15. The biggest financial gotcha of moving from on-prem to public cloud is: *(Analyze)*
A. Cloud is always 90% cheaper
B. Bill shock from over-provisioned or forgotten resources
C. Cloud has no monthly fees
D. The cloud requires no IT staff

---

### Q16. Snapshot is BEST described as: *(Understand)*
A. A backup that survives host failure
B. A point-in-time disk + memory capture stored on the same host, used for quick rollback
C. The same as a clone
D. A type of RAID

---

### Q17. A vMotion / Live Migration moves: *(Remember)*
A. A physical server between data centers
B. A running VM between hypervisor hosts with no downtime
C. A user's profile
D. The hypervisor itself

---

### Q18. Public cloud is BEST described as: *(Understand)*
A. Owned by a 3rd-party provider; multi-tenant; internet-accessible
B. Owned by one company; on-prem only
C. Only for government use
D. Free to all users

---

### Q19. A VM has 8 vCPUs assigned, but the host has 4 physical cores. This is called: *(Apply)*
A. Quad-channel
B. CPU over-commit (allowed but creates scheduling contention)
C. Hyperthreading
D. SMP

---

### Q20. A user reports their VM is "running slowly." After investigation you find the host is at 95% CPU. The MOST likely action: *(Apply)*
A. Restart the VM
B. Migrate one or more VMs to less-utilized hosts, or reduce vCPU over-commit on this host
C. Reformat the host
D. Add more host RAM

---

### Q21. In the cloud Shared Responsibility model, who is responsible for the SECURITY OF the cloud (physical security, hypervisor)? *(Remember)*
A. The customer
B. The cloud provider
C. The customer's competitor
D. Government

---

### Q22. A cloud admin wants the SAME baseline VM cloned 50 times for a training class. The appropriate tool: *(Apply)*
A. Snapshot
B. Template + automated clone
C. Backup restore for each
D. Buy 50 separate VMs from the catalog

---

### Q23. Hybrid cloud is BEST described as: *(Understand)*
A. Two SaaS apps glued together
B. A blend of public and private cloud, with orchestration between them
C. Three different SaaS vendors
D. Only public cloud

---

### Q24. Design challenge: A regional bank wants to keep customer-account data on-prem (private cloud) for compliance, but burst overflow compute to AWS during quarterly statement generation. The BEST architecture is: *(Create)*

> *Create-level note:* you're picking the *combination* of cloud deployment + service models.
A. SaaS only
B. Public IaaS only
C. **Hybrid cloud** — private cloud for customer data + public IaaS for compute burst, with secure connectivity (VPN or Direct Connect)
D. Community cloud for the whole environment

---

## 🎯 Answers + Explanations

### Q1: **A. Type 1 (bare-metal)**
ESXi runs directly on hardware. Type 1 hypervisors include ESXi, Hyper-V Server, KVM, Xen, Proxmox.

### Q2: **C. IaaS**
Infrastructure as a Service gives you VMs/networks/disks. You manage the OS and everything above.

### Q3: **C. SaaS**
M365 is delivered software — you use it, Microsoft runs it.

### Q4: **D. Guaranteed lowest cost**
The 5 are: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service. Lowest cost is *not* a characteristic.

### Q5: **B. PaaS**
PaaS (App Service / Elastic Beanstalk) handles scaling and OS for you; you bring code.

### Q6: **C. Oracle VirtualBox**
VirtualBox runs on top of a host OS (Windows, macOS, Linux). VMware Workstation, Parallels, UTM are also Type 2.

### Q7: **B. VMs include kernel; containers share host kernel**
This is the architectural distinction that makes containers lighter.

### Q8: **B. The customer**
In IaaS, the customer is responsible for the OS and everything above. In SaaS, the provider patches it.

### Q9: **B. Snapshots are not backups; cause storage + chain issues**
Snapshots are convenience rollback. They grow with delta data, can corrupt the chain if mismanaged, and don't survive a host disk failure.

### Q10: **C. Community**
Community = shared by orgs with similar needs (government, healthcare).

### Q11: **A. IaaS**
Full OS control = IaaS. EC2 (AWS), Azure VMs, GCP Compute Engine.

### Q12: **B. Resources scale up/down quickly**
Auto-scaling, on-demand. A core NIST characteristic.

### Q13: **A. User desktops as VMs in the data center**
VDI = the desktop runs as a VM in the DC; thin client/browser provides access.

### Q14: **B. Thin grows on write; thick pre-allocates**
Thin saves immediate space but risks over-commit. Thick gives predictable storage usage.

### Q15: **B. Bill shock from over-provisioned or forgotten resources**
The #1 reason CFOs hate cloud rollouts. Tag everything, use budget alerts, set TTLs on test resources.

### Q16: **B. Point-in-time disk + memory capture for rollback**
Snapshot ≠ backup. Useful for "test this upgrade and roll back if broken."

### Q17: **B. Running VM between hosts with no downtime**
vMotion (VMware), Live Migration (Hyper-V), or just "live migration" in KVM.

### Q18: **A. 3rd-party provider, multi-tenant, internet-accessible**
AWS, Azure, GCP, OCI. The familiar definition.

### Q19: **B. CPU over-commit**
Allocating more vCPUs than physical cores is allowed; the hypervisor schedules. Heavy over-commit hurts performance.

### Q20: **B. Migrate VMs or reduce over-commit**
Host CPU saturated → spread load to other hosts (vMotion) or right-size vCPU allocations.

### Q21: **B. The cloud provider**
Provider owns "security OF the cloud" (data center, hypervisor). Customer owns "security IN the cloud" (data, identity, OS in IaaS, etc.).

### Q22: **B. Template + automated clone**
Build a baseline template; deploy 50 clones with automation. Snapshots are not clones; backups are slow.

### Q23: **B. Blend of public + private, orchestrated**
Hybrid = both, with policy and connectivity between. Most large enterprises use hybrid today.

### Q24: **C. Hybrid cloud**
Private for data, public for burst compute, VPN/Direct Connect for secure linkage. The textbook hybrid pattern.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Cloud and virt locked in.
- 20–22/24 → ✅ Good. Drill the shared responsibility model.
- 16–19/24 → ⚠️ Re-read NIST sections.
- <16/24 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- Type 1 vs Type 2 hypervisor + 2 examples each
- 5 NIST cloud characteristics
- 3 service models + 1 example each
- 4 deployment models + when to pick each
- Shared responsibility per service model
- Snapshot vs clone vs backup
- vMotion / Live Migration

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5 — Troubleshooting](../Module-05-Troubleshooting/Reading.md)
