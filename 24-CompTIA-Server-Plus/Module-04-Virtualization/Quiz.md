# ✏️ Module 4 Quiz: Virtualization & Containers

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. A Type 1 hypervisor: *(Remember)*
A. Runs on top of a host OS
B. Runs directly on hardware (bare-metal)
C. Is the same thing as a container engine
D. Requires Windows 11 Pro

---

### Q2. Which of these is a Type 2 hypervisor? *(Remember)*
A. VMware ESXi
B. Microsoft Hyper-V
C. KVM
D. VMware Workstation

---

### Q3. The VMware management server that controls many ESXi hosts is: *(Remember)*
A. ESXi itself
B. vCenter Server
C. vRealize
D. Tanzu

---

### Q4. Hyper-V's virtual disk format is: *(Remember)*
A. VMDK
B. VHDX
C. qcow2
D. OVA

---

### Q5. A VM is being moved from host A to host B while running, with zero downtime. This requires: *(Apply)*
A. Powering off the VM first
B. Shared storage, L2 network, CPU compatibility (or EVC), sufficient resources on the target
C. Identical motherboard part numbers
D. Disabling networking

---

### Q6. Snapshots are NOT a backup because: *(Analyze)*
A. They use more space than backups
B. They live on the same datastore as the VM, if the datastore is lost, the snapshots are lost with it
C. They cannot be restored
D. They are illegal in the EU

---

### Q7. The cluster feature that auto-restarts VMs on surviving hosts after a host failure is called: *(Remember)*
A. DRS
B. HA (High Availability)
C. FT (Fault Tolerance)
D. vMotion

---

### Q8. The cluster feature that *continuously balances* load across hosts by live-migrating VMs is called: *(Remember)*
A. HA
B. FT
C. DRS
D. Anti-affinity

---

### Q9. Two DCs keep ending up on the same Hyper-V host after live migration. You should configure: *(Apply)*
A. An **affinity** rule
B. An **anti-affinity** rule keeping them on separate hosts
C. Disable Live Migration
D. Power both DCs off

---

### Q10. The single most important architectural difference between a container and a VM is: *(Understand)*
A. Containers are bigger
B. Containers share the host kernel; VMs each have their own kernel
C. Containers always cost more
D. VMs don't need a host

---

### Q11. The smallest scheduling unit in Kubernetes is the: *(Remember)*
A. Container
B. Node
C. Pod
D. Cluster

---

### Q12. Docker's declarative build recipe lives in a file named: *(Remember)*
A. `Containerfile`
B. `Dockerfile`
C. `Makefile`
D. `kubeconfig`

---

### Q13. A team needs to run 200 short-lived CI build jobs per day with maximum density. BEST architecture: *(Apply)*
A. 200 separate VMs
B. 200 containers on a few hosts
C. 200 physical servers
D. One huge VM

---

### Q14. A linked clone differs from a full clone in that: *(Understand)*
A. A linked clone is read-only
B. A linked clone shares the parent's base disk and stores only deltas, so it depends on the parent
C. A linked clone is on a different array
D. A linked clone cannot be powered on

---

### Q15. CPU "ready time" being high on a VM typically indicates: *(Analyze)*
A. The disk is slow
B. The vCPU wants to run but is waiting for a physical core because of overcommit
C. Network packet loss
D. RAM is failing

---

### Q16. Memory **ballooning** in a hypervisor: *(Understand)*
A. Adds physical RAM to the host
B. Lets the hypervisor reclaim unused RAM from guests via a cooperative driver
C. Increases swap permanently
D. Disables overcommit

---

### Q17. **SR-IOV** is used to: *(Understand)*
A. Encrypt VM disks
B. Assign a virtual NIC function directly to a VM, bypassing the vSwitch for performance
C. Share GPU memory
D. Replace vMotion

---

### Q18. A Hyper-V Generation 2 VM offers: *(Understand)*
A. Legacy BIOS only
B. UEFI firmware, Secure Boot, larger boot disks (over 2 TB), modern OS support
C. No networking
D. Smaller RAM ceiling

---

### Q19. Live migration between VMware ESXi and Microsoft Hyper-V: *(Analyze)*
A. Works natively
B. Requires conversion (V2V), no native cross-hypervisor live migration
C. Works only over fiber
D. Requires Kubernetes

---

### Q20. A datastore is a: *(Understand)*
A. Backup tape library
B. Storage volume (VMFS on block, NFS share, vSAN) holding VM files
C. Backup catalog
D. Hypervisor cluster

---

### Q21. The OVF/OVA standard provides: *(Apply)*
A. A way to export a VM into a portable bundle for import on another hypervisor
B. A new RAID level
C. A fibre-channel zoning method
D. A patch deployment format

---

### Q22. Kubernetes' CLI is called: *(Remember)*
A. `dockerctl`
B. `kubectl`
C. `kctl`
D. `helm`

---

### Q23. Heavy memory overcommit + a sudden spike in guest demand typically causes: *(Analyze)*
A. The host to magically add RAM
B. Hypervisor swap to disk → severe performance degradation
C. Containers to disappear
D. Snapshots to delete themselves

---

### Q24. A K8s **Service** object provides: *(Understand)*
A. Cluster-wide RBAC
B. A stable network endpoint (ClusterIP/NodePort/LoadBalancer) fronting a set of Pods
C. Container images
D. Hypervisor scheduling

---

### Q25. A backup of a VM at midnight that captures the entire disk + memory state and stores it on a *different* storage system is: *(Apply)*
A. A snapshot
B. A backup (which is what the exam means by "backup")
C. A linked clone
D. A template

---

### Q26. *Design exercise.* A 600-VM virtualization estate needs: (a) zero downtime for monthly host patching, (b) recover VMs within 5 minutes of any single host failure, (c) two database VMs that must NEVER run on the same host, (d) a separate containerized microservices platform. Pick the design: *(Create)*

A. Single Hyper-V host with all 600 VMs and one container daemon
B. Multi-host cluster with vMotion / Live Migration, HA enabled, anti-affinity rule on the DB pair, separate Kubernetes cluster (possibly on VMs in the same hypervisor cluster) for microservices
C. 600 physical desktops in a closet
D. Type 2 hypervisor on each user's laptop

---

## 🎯 Answers + Explanations

### Q1: **B. Runs directly on hardware (bare-metal)**
Type 1 = bare-metal. Type 2 = hosted on an OS.

### Q2: **D. VMware Workstation**
Workstation/Fusion, VirtualBox, Parallels are Type 2. ESXi, Hyper-V, KVM are Type 1.

### Q3: **B. vCenter Server**
vCenter manages many ESXi hosts. vSphere = the product family. Tanzu = Kubernetes addon.

### Q4: **B. VHDX**
Hyper-V uses VHDX (replacing legacy VHD). VMware = VMDK. KVM/QEMU = qcow2.

### Q5: **B. Shared storage, L2 network, CPU compatibility (or EVC), sufficient resources on the target**
Live migration's standard prerequisites. Modern variants relax some (e.g., vMotion-without-shared-storage), but the exam tests the classic four.

### Q6: **B. They live on the same datastore as the VM, if the datastore is lost, the snapshots are lost with it**
Snapshots are point-in-time deltas on the same storage. They are not independent copies. Use real backups for actual DR.

### Q7: **B. HA (High Availability)**
HA auto-restarts VMs on surviving hosts when a host dies (minutes of downtime).

### Q8: **C. DRS**
Distributed Resource Scheduler balances load by live-migrating VMs based on CPU/RAM pressure.

### Q9: **B. An anti-affinity rule keeping them on separate hosts**
Anti-affinity = "do not place these together." Prevents one host failure from taking both DCs down.

### Q10: **B. Containers share the host kernel; VMs each have their own kernel**
The kernel split is the categorical difference. Drives density, isolation, OS-family constraints, startup speed.

### Q11: **C. Pod**
A Pod is one or more co-located containers, the smallest schedulable unit in K8s.

### Q12: **B. `Dockerfile`**
The default name. Compose uses `docker-compose.yml` for multi-container stacks.

### Q13: **B. 200 containers on a few hosts**
Short-lived high-density CI jobs are the textbook container use case. Containers start in ms, VMs in seconds-to-minutes.

### Q14: **B. A linked clone shares the parent's base disk and stores only deltas, so it depends on the parent**
Saves space (VDI uses heavily) but creates a parent dependency, losing the parent breaks all linked clones.

### Q15: **B. The vCPU wants to run but is waiting for a physical core because of overcommit**
CPU ready time = the contention metric. Reduce vCPU count or move VMs to less-loaded hosts.

### Q16: **B. Lets the hypervisor reclaim unused RAM from guests via a cooperative driver**
The balloon driver in the guest "inflates" to make the guest think pages are used, returning them to the hypervisor. Cooperative, requires VM tools.

### Q17: **B. Assign a virtual NIC function directly to a VM, bypassing the vSwitch for performance**
Single-Root I/O Virtualization presents Virtual Functions of a physical NIC directly to VMs, useful for latency-sensitive workloads (NFV, HPC).

### Q18: **B. UEFI firmware, Secure Boot, larger boot disks (over 2 TB), modern OS support**
Gen 1 is legacy BIOS; Gen 2 is UEFI. Modern Windows Server / Linux distros increasingly require Gen 2.

### Q19: **B. Requires conversion (V2V), no native cross-hypervisor live migration**
Each hypervisor's live migration is intra-product. Crossing platforms requires Virtual-to-Virtual conversion tools (and downtime).

### Q20: **B. Storage volume (VMFS on block, NFS share, vSAN) holding VM files**
A datastore is the storage container for VMs in vSphere terminology.

### Q21: **A. A way to export a VM into a portable bundle for import on another hypervisor**
OVF (Open Virtualization Format) = the directory of files; OVA = a single archive. Used for VM export/import across hypervisors and vendors.

### Q22: **B. `kubectl`**
Kubernetes' standard CLI. (`helm` is a package manager; `kctl` doesn't exist.)

### Q23: **B. Hypervisor swap to disk → severe performance degradation**
When memory pressure exceeds reclamation, the hypervisor swaps guest pages to disk. Performance collapses.

### Q24: **B. A stable network endpoint (ClusterIP/NodePort/LoadBalancer) fronting a set of Pods**
Pods come and go; the Service object provides a stable endpoint with built-in load balancing.

### Q25: **B. A backup (which is what the exam means by "backup")**
The defining property is that the copy lives on independent storage. That's what makes it survivable when the source storage dies.

### Q26: **B. Multi-host cluster with vMotion / Live Migration, HA enabled, anti-affinity rule on the DB pair, separate Kubernetes cluster (possibly on VMs in the same hypervisor cluster) for microservices**
Each requirement maps to a feature: live migration → zero-downtime patching; HA → 5-min recovery; anti-affinity → DBs split across hosts; K8s → microservices. Options A, C, D fail multiple requirements.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 4 mastered.
- 21–24/26 → ✅ Solid.
- 17–20/26 → ⚠️ Re-read templates/clones/snapshots + DRS/HA/anti-affinity.
- <17/26 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- Type 1 vs Type 2 + product examples
- Disk formats: VMDK / VHDX / qcow2 / OVF/OVA
- Template / Clone / Linked clone / Snapshot, what each does
- vMotion / Live Migration prerequisites (4 items)
- HA / DRS / FT / affinity / anti-affinity
- Container vs VM (kernel sharing)
- Docker: image / container / Dockerfile / registry
- K8s: Pod / Node / Cluster / Deployment / Service / kubectl
- Overcommit: vCPU ready time, ballooning, swap

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5, Disaster Recovery & Backup](../Module-05-Disaster-Recovery/Reading.md)
