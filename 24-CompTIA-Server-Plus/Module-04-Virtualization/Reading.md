# Module 4: Virtualization & Containers 🧱

> **Why this module matters:** Modern infrastructure is virtualized first, containerized second. Even a "physical" server today is usually a hypervisor host with many guest VMs. The exam tests Type 1 vs Type 2 hypervisors, vMotion/live migration, snapshots vs templates vs clones, and the conceptual difference between full virtualization and containers. Get this module solid and Modules 5 (DR), 6 (security), and 8 (troubleshooting) become much easier.

> **Prerequisites for this module.** Before starting:
> - Modules 1–3 (hardware, admin, storage)
> - Familiarity with the concept of an OS (kernel, processes, drivers)
> - You've installed an OS at least once
>
> If those are shaky, pause and review before continuing.

---

## 🏠 A Story: One Building, Many Tenants

Imagine a 20-story apartment building. Each apartment has its own kitchen, bathroom, locked door, mailbox, and address — but they all share the building's *foundation*, *elevator shaft*, *electrical service*, and *roof*. One tenant can repaint without affecting another. A burst pipe in 14B is bad for 14B but the building keeps standing. The building manager (the *hypervisor*) coordinates shared infrastructure; each apartment (the *VM*) operates independently.

Now imagine a different model: a 20-bedroom co-living house. Bedrooms have doors, but the kitchen, bathroom, and living room are shared. The house has one big shared *foundation* (the *host OS kernel*). Each tenant gets their own bedroom (the *container*), but they all use the same kitchen at the same time, just from different sides. Less isolation than apartments. Much cheaper, much faster to move in, way more tenants per square foot.

That's the difference between **virtualization** (apartments — each VM has its own kernel) and **containers** (co-living — all containers share the host kernel). Both have their place, both are tested.

---

## 🖥️ Hypervisors — Type 1 vs Type 2

A **hypervisor** (or **VMM** — Virtual Machine Monitor) is the software layer that creates and runs virtual machines. The IEEE / Popek-Goldberg framework (Popek & Goldberg, *"Formal Requirements for Virtualizable Third Generation Architectures,"* CACM 1974) defined the formal requirements for a hypervisor. The two categories that matter for the exam:

| | **Type 1 — Bare metal** | **Type 2 — Hosted** |
|---|---|---|
| Runs on | Hardware directly | A host OS |
| Examples | VMware ESXi, Microsoft Hyper-V, KVM, Xen, Citrix XenServer / Hypervisor | VMware Workstation, VMware Fusion, VirtualBox, Parallels Desktop |
| Use case | Production servers | Developer laptops, lab/test, learning |
| Performance | Better (no OS overhead) | Lower (OS overhead) |
| Stability | Higher | Depends on the host OS |
| Boot | Hypervisor IS the boot target | Boot the host OS, then start the hypervisor |

🎯 **Exam pattern:** *"Which type of hypervisor would you use for the production virtualization cluster?"* → **Type 1**. *"Which type runs on a developer's laptop?"* → **Type 2**.

### Major Type 1 hypervisors you must know

#### VMware ESXi + vSphere

VMware was founded in 1998; ESXi (the small, microkernel hypervisor that replaced ESX) is the de-facto enterprise standard for virtualization. Key vocabulary:

| Term | Meaning |
|---|---|
| **ESXi** | The hypervisor itself — runs on bare metal |
| **vCenter Server** | Central management appliance — manages many ESXi hosts |
| **vSphere** | The product family (ESXi + vCenter + management UI) |
| **Cluster** | Group of ESXi hosts under one vCenter for HA/DRS/vMotion |
| **Datastore** | Storage volume (VMFS on block, NFS, vSAN) that holds VM files |
| **VMFS** | VMware's clustered block filesystem |
| **VMDK** | Virtual disk file format (`.vmdk`) |
| **OVF / OVA** | Open Virtualization Format — portable VM bundle |
| **vMotion** | Live migration of a running VM between hosts |
| **Storage vMotion** | Live migration of a VM's storage between datastores |
| **DRS** (Distributed Resource Scheduler) | Auto-balance VMs across hosts |
| **HA** (High Availability) | Auto-restart VMs on another host if a host dies |
| **FT** (Fault Tolerance) | Two synchronized VM copies; no downtime on host fail |
| **vSAN** | Hyperconverged storage from local ESXi disks |
| **NSX** | Network virtualization / micro-segmentation |
| **vGPU** | Shared GPU passthrough |

#### Microsoft Hyper-V

Microsoft's Type 1 hypervisor, built into Windows Server (and Windows 11 Pro/Enterprise). Vocabulary:

| Term | Meaning |
|---|---|
| **Hyper-V Manager** | GUI to manage a single host |
| **System Center VMM** | Datacenter-scale management of many Hyper-V hosts |
| **VHDX** | Virtual disk file format (replaces older VHD) |
| **Generation 1 VM** | Legacy BIOS firmware; supports almost any OS |
| **Generation 2 VM** | UEFI firmware; supports Secure Boot, larger boot disks; modern OSes only |
| **Live Migration** | Equivalent of vMotion |
| **Storage Migration** | Move VM storage live |
| **Failover Cluster** | Windows Server Failover Clustering for HA |
| **Hyper-V Replica** | Asynchronous replication of VMs to a DR host |
| **Nano Server / Containers** | Smaller footprint for containers (legacy term) |

#### KVM / QEMU

Linux-native Type 1 hypervisor. KVM (Kernel-based Virtual Machine) is a Linux kernel module turning the kernel into a hypervisor; QEMU provides device emulation. Together they're the foundation of:

- Open-source private clouds (OpenStack, Proxmox)
- Most public cloud hypervisors (AWS Nitro, Google Compute Engine, Azure — modified)
- KVM hosts on RHEL/Rocky/Ubuntu via `libvirt` + `virt-manager` + `virsh`

| Term | Meaning |
|---|---|
| **libvirt** | API/daemon for managing KVM (and other) VMs |
| **virsh** | CLI to libvirt |
| **virt-manager** | GUI to libvirt |
| **qcow2** | KVM/QEMU's native virtual disk format (qcow2 = QEMU Copy-on-Write v2) |
| **OVS** | Open vSwitch — software switch often paired with KVM |

#### Other Type 1 hypervisors

- **Xen** (Citrix Hypervisor) — older microkernel hypervisor; still used in some clouds.
- **Proxmox VE** — open-source distro packaging KVM + LXC + web UI.
- **Nutanix AHV** — KVM-derived; ships with Nutanix HCI.

---

## 🧰 VM Lifecycle — Templates, Clones, Snapshots

These three terms confuse candidates. Memorize the distinctions.

| Term | What it is | Lifetime | Independent of source? |
|---|---|---|---|
| **Template** | A "golden image" master VM, sealed (sysprepped on Windows, equivalent on Linux), used to deploy new VMs from | Persistent | Yes — children are independent |
| **Clone** (Full clone) | A complete, independent copy of an existing VM | Persistent | Yes |
| **Linked clone** | A copy that shares the base disk with the parent and stores only deltas | Persistent | NO — depends on the parent disk |
| **Snapshot** | Point-in-time saved state of a VM (memory + disk deltas) — temporary | Short-term (hours to days) | NO — snapshot tree depends on the parent |
| **Backup** | An independent, restorable copy stored separately, usually on different storage | Long-term | Yes — see Module 5 |

🚨 **Trap on the exam:** **"Snapshots are not backups."** Snapshots live on the same datastore as the VM. If the datastore dies, snapshots die with it. Use snapshots for short-term rollback (before a patch), use backups for actual data protection.

### When to use each

- **Template** → "We need to deploy 50 identical web servers." Build one, sysprep it, save as template, deploy from template.
- **Full clone** → "Give me a copy of production VM to break safely in test."
- **Linked clone** → "Give every developer a desktop VDI image that shares the base OS but stores user changes separately." VDI uses linked clones heavily for space savings.
- **Snapshot** → "I'm about to apply a risky patch. Snap first; if it breaks, revert."

---

## 🚚 Live Migration (vMotion / Live Migration / Live Migration)

Live migration moves a *running* VM from host A to host B with no downtime visible to the guest OS. Requirements:

- **Shared storage** visible to both hosts (SAN LUN, NFS datastore, vSAN, Storage Spaces Direct) — though VMware also supports "vMotion without shared storage" (concurrent storage migration)
- **L2 network** for VM IP — VM keeps its MAC and IP
- **CPU compatibility** between hosts (or **EVC** mode for masked CPU features)
- **Sufficient memory/CPU** on the target host
- **Fast network** for memory transfer (10 GbE+ typical)

### How it works (high level)

1. Hypervisor on host A iteratively copies the VM's memory pages to host B while the VM runs.
2. As pages change, dirty pages are re-copied.
3. After a few iterations, the rate of dirty pages converges below a threshold.
4. The VM is briefly paused (single-digit milliseconds), the last dirty pages and CPU state ship over, and the VM is resumed on host B.
5. Network traffic is redirected by issuing a RARP / GARP so the upstream switch updates its MAC table.

🎯 **Exam pattern:** *"Move a running production database from host A to host B for maintenance with zero downtime."* → **vMotion / Live Migration**.

### Storage migration

**Storage vMotion** (VMware) / **Storage Migration** (Hyper-V) does the same trick for storage — moves VM files between datastores while the VM runs.

---

## ✋ HA, DRS, Anti-Affinity, FT

| Feature | What it does |
|---|---|
| **HA** (High Availability) | If a host dies, VMs from that host auto-restart on other surviving hosts in the cluster (brief downtime ~minutes) |
| **DRS** (Distributed Resource Scheduler) | Continuously moves running VMs across hosts to balance CPU/RAM utilization |
| **Affinity rule** | "Always run VM A and VM B on the same host" — useful for tightly coupled apps |
| **Anti-affinity rule** | "Never run VM A and VM B on the same host" — useful for two DCs, two database replicas, web frontends |
| **FT** (Fault Tolerance) | Two synchronized lockstep VM copies — host failure = zero downtime |

🎯 **Exam pattern:** *"Both domain controllers always end up on the same host after DRS moves them around. Fix?"* → **Anti-affinity rule** keeping them on separate hosts.

---

## 📦 Containers — A Different Tradeoff

Containers package an application + its dependencies into an isolated namespace on the *host kernel*. Containers do NOT include a guest kernel — they share the host's.

### Container vs VM — the canonical comparison

| | **VM** | **Container** |
|---|---|---|
| Kernel | Each VM has its own | All containers share the host's |
| Boot time | Tens of seconds to minutes | Milliseconds to a second |
| Footprint | GBs (full OS) | MBs (just the app + libs) |
| Isolation | Strong (hardware-assisted) | Weaker (process-level via namespaces, cgroups) |
| OS choice | Any OS supported by the hypervisor | Must match host kernel family (Linux containers on Linux host; Windows containers on Windows host; or use a Linux VM under the Docker engine on Windows/Mac) |
| Density | 10s per host | 100s–1000s per host |
| Use case | Different OSes, strong isolation, long-running services | Microservices, CI/CD, ephemeral workloads, dev parity |

### Docker — the canonical container runtime

Docker (released 2013) made containers mainstream. Key vocabulary:

| Term | Meaning |
|---|---|
| **Image** | A read-only template (built from a `Dockerfile`) |
| **Container** | A running instance of an image |
| **Dockerfile** | Declarative recipe for building an image |
| **Registry** | Where images are stored (Docker Hub, ECR, ACR, GCR, Harbor, GitLab) |
| **Volume** | Persistent storage attached to a container (data survives container restart) |
| **Bind mount** | Direct mount of a host directory into the container |
| **Network** | Bridge, host, overlay — how containers communicate |
| **Compose** | `docker-compose.yml` — multi-container app stack on one host |

```dockerfile
# Trivial Dockerfile example
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

```bash
docker build -t myapp:1.0 .
docker run -d -p 8080:8000 --name web myapp:1.0
docker ps
docker logs web
docker exec -it web /bin/bash
```

### Kubernetes — container orchestration

Once you have many containers across many hosts, you need an orchestrator. Kubernetes (open-sourced by Google in 2014, donated to CNCF in 2015) is the dominant choice. The exam expects conceptual literacy, not deep operations.

| Term | Meaning |
|---|---|
| **Pod** | One or more co-located containers — the smallest scheduling unit |
| **Node** | A physical or virtual server that runs Pods |
| **Cluster** | Group of nodes managed by a control plane |
| **Control plane** | API server, scheduler, controller manager, etcd (state store) |
| **Deployment** | Declarative spec for a set of identical Pods + rolling updates |
| **Service** | Stable network endpoint fronting a set of Pods (ClusterIP/NodePort/LoadBalancer) |
| **Ingress** | HTTP/HTTPS routing into the cluster |
| **Namespace** | Logical isolation within a cluster |
| **ConfigMap / Secret** | App config / sensitive credentials injected at runtime |
| **PVC / PV** | PersistentVolumeClaim / PersistentVolume — storage abstraction |
| **kubectl** | The CLI |

🎯 **Exam pattern:** *"Microservices need to scale automatically across 12 hosts."* → **Kubernetes** orchestrating containers.

### Other container runtimes

- **containerd / CRI-O** — modern container runtimes underneath Docker / Kubernetes
- **Podman** — daemonless, rootless Docker-compatible CLI from Red Hat
- **LXC / LXD** — older system containers (more like lightweight VMs)
- **Rancher, OpenShift, EKS, AKS, GKE** — managed Kubernetes distributions

---

## 🛡️ Virtualization vs Containers — Picking the Right Tool

| Scenario | Pick |
|---|---|
| Three different OSes on one box (Win, Linux, BSD) | **Virtualization** (one VM each) |
| 200 microservices, dynamic scale-out | **Containers + Kubernetes** |
| Legacy monolith you don't want to rewrite | **VM** |
| Dev/test parity with prod | **Containers** (same image moves dev → prod) |
| Strong isolation for multi-tenant workloads | **VM** (or sandbox + containers) |
| 1,000 short-lived CI jobs per day | **Containers** |

**Truth:** modern infrastructure typically *combines* both. Kubernetes itself often runs on VMs (e.g., VMware Tanzu, OpenShift on RHV, EKS on EC2 instances).

---

## 🧠 Resource Management Concepts

### CPU

- **vCPU** = a virtual CPU presented to a guest. Often a 1:1 thread mapping, sometimes overcommitted.
- **Overcommit** — assigning more vCPUs to VMs than the host has physical cores. Works fine if average utilization is low; causes contention if all VMs spike at once.
- **CPU ready time** — the metric showing a vCPU is ready to run but waiting for a physical core. High = overcommit problem.
- **CPU reservation / limit / shares** — guarantee a minimum, cap a maximum, set proportional weight.

### Memory

- **Memory overcommit** — assigning more RAM to VMs than the host has. Hypervisor uses techniques to make it work:
  - **Ballooning** — host-OS-cooperative driver in the guest "balloons" to reclaim unused RAM
  - **Transparent Page Sharing (TPS)** — dedup identical memory pages across VMs
  - **Compression** — compress idle pages
  - **Swap** — last resort; performance dies
- 🚨 Heavy overcommit + spike = swap thrash → performance collapse.

### Storage

- **Thin-provisioned VMDK/VHDX** — disk file grows as written (overcommit at storage layer)
- **Thick eager-zeroed** — disk file pre-allocated and zeroed at create (no overcommit, best performance)
- **Thick lazy-zeroed** — disk file pre-allocated but zeroed on first write
- **Snapshot disk chain** — delta disks form a chain; a long chain hurts performance

### Network

- **vSwitch** — software switch in the hypervisor (VMware vSphere Standard Switch, Distributed Switch; Hyper-V vSwitch)
- **Port group / VLAN tagging** — assign VMs to network segments
- **SR-IOV** — single-root I/O virtualization: assigns a Virtual Function of a physical NIC directly to a VM, bypassing the vSwitch for performance

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario.** A 400-person SaaS company is consolidating 60 physical servers (mix of Windows Server 2016/2019 and various Linux distros) onto a virtualization platform. They want zero downtime for production VM maintenance, automatic restart on host failure, anti-affinity for their two database replicas, and a separate cluster for containerized microservices. Bandwidth and budget are moderate. Design the architecture.

**Walkthrough.**

1. **Hypervisor.** Pick **VMware vSphere** or **Microsoft Hyper-V** (or KVM + Proxmox if open-source budget). Either supports the use cases.
2. **Cluster sizing.** Plan ~30 VMs per host with overcommit (~2:1 vCPU, modest RAM overcommit). For 60 VMs + growth → 4 hosts in a cluster (plus 1 spare for HA).
3. **Storage.** Shared SAN with **NFS/iSCSI datastores** or **vSAN/Storage Spaces Direct** for HCI. RAID 10 or RAID 5/6 with hot spare on the array (Module 3).
4. **High availability.** Enable **HA** at the cluster level — if a host dies, VMs restart on surviving hosts within minutes.
5. **DRS** — enable for automatic load balancing.
6. **Anti-affinity rule** — DB1 and DB2 must never run on the same host (prevents one host failure from taking both replicas down at once).
7. **vMotion / Live Migration** — for zero-downtime host patching.
8. **Backup** — separate solution (Veeam, Commvault, native) — see Module 5.
9. **Container cluster** — separate small **Kubernetes cluster** (3 master + 6 worker VMs, or a managed K8s distribution like OpenShift / Tanzu / Rancher) for the microservices. Run K8s nodes as VMs on the same vSphere cluster, or on dedicated hardware.
10. **Networking** — vSwitch with port groups + 802.1Q VLAN tagging per environment (mgmt, vMotion, prod, dev, storage). Storage on dedicated 10 GbE NICs with jumbo frames (Module 7).

This is the kind of integration question Server+ PBQs ask. Each choice maps to a concept in this module.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "Containers are just lightweight VMs." | They share the host kernel. Same kernel family required. Weaker isolation. |
| "Snapshots are backups." | NO — they live on the same storage. Datastore loss = snapshot loss. |
| "More vCPUs always = faster VM." | Over-allocating vCPUs causes CPU ready-time contention and can *slow* a VM. |
| "Hyper-V Gen 1 vs Gen 2 doesn't matter." | Gen 2 supports UEFI/Secure Boot/larger boot disks. Modern OSes increasingly require Gen 2. |
| "Two DCs on the same host is fine if both are 'virtual.'" | One host failure = entire directory down. Anti-affinity is mandatory. |
| "Type 2 hypervisor is fine for production." | Type 2 sits on a host OS that introduces overhead, more attack surface, and instability. Use Type 1 in production. |
| "vMotion is magic — works between any two hosts." | Requires shared storage, L2 network, CPU compatibility (or EVC), enough resources on target. |
| "Kubernetes is just Docker." | Docker = container runtime. Kubernetes = orchestrator across many hosts. |
| "Live migration works between Hyper-V and VMware." | No — each hypervisor's live migration is intra-product. Cross-platform migration requires conversion tools (V2V). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Hypervisor / VMM** | Software creating and running VMs |
| **Type 1 / Type 2** | Bare-metal / Hosted |
| **ESXi / vCenter / vSphere** | VMware: hypervisor / mgmt / product family |
| **Hyper-V** | Microsoft Type 1 hypervisor |
| **KVM / QEMU / libvirt** | Linux-native virtualization stack |
| **VMDK / VHDX / qcow2** | Virtual disk formats |
| **OVF / OVA** | Open Virtualization Format / Archive |
| **Template / Clone / Linked clone / Snapshot** | VM lifecycle objects |
| **vMotion / Live Migration** | Move running VM between hosts |
| **Storage vMotion** | Move VM storage between datastores |
| **HA / DRS / FT** | High Availability / DRS / Fault Tolerance |
| **Affinity / Anti-affinity** | Pin or split VM placement |
| **Cluster** | Group of hypervisor hosts managed together |
| **Datastore** | Storage volume hosting VM files |
| **vSwitch / Port group** | Virtual switch / VLAN attachment |
| **SR-IOV** | Hardware NIC virtual function for performance |
| **Overcommit (CPU/RAM)** | More allocated than physical |
| **Ballooning / TPS** | Memory-overcommit mechanisms |
| **Container** | Isolated process group sharing host kernel |
| **Docker / Podman / containerd** | Container engines |
| **Image / Container / Registry** | Template / instance / store |
| **Dockerfile** | Build recipe |
| **Kubernetes** | Container orchestrator |
| **Pod / Node / Cluster** | K8s scheduling unit / host / group |
| **Deployment / Service / Ingress / Namespace** | K8s API objects |
| **kubectl** | K8s CLI |

### Acronyms cheat-row (Module 4)
| Acronym | Meaning |
|---|---|
| VMM | Virtual Machine Monitor |
| VMDK / VHDX / qcow2 | VMware / Hyper-V / KVM disk format |
| OVF / OVA | Open Virtualization Format / Archive |
| HA / DRS / FT | High Availability / Distributed Resource Scheduler / Fault Tolerance |
| EVC | Enhanced vMotion Compatibility (CPU masking) |
| TPS | Transparent Page Sharing |
| SR-IOV | Single-Root I/O Virtualization |
| K8s | Kubernetes |
| CNCF | Cloud Native Computing Foundation |
| CRI | Container Runtime Interface |
| PVC / PV | PersistentVolumeClaim / PersistentVolume |

---

## 📊 Case Study — VMware → Broadcom: Licensing Shock (2024)

**Situation.** In November 2023 Broadcom completed its $69B acquisition of VMware. By early 2024 Broadcom restructured VMware's licensing: ending perpetual licenses, bundling everything into subscription packages (vSphere Foundation, Cloud Foundation), discontinuing several individual product SKUs, and ending the long-running **VMware vSphere Free Hypervisor** (ESXi Free) edition that many home labs and small businesses used.

**Impact.** Sticker shock for many customers — cost increases ranging from 2× to 10× for organizations with mid-sized vSphere footprints. Many SMBs and home-lab users began evaluating alternatives:
- **Proxmox VE** (KVM + LXC) — open-source HCI-style alternative
- **Microsoft Hyper-V + Azure Stack HCI** — for shops already deeply on Microsoft
- **Nutanix AHV** — for HCI workloads
- **Red Hat OpenShift Virtualization** (formerly OpenStack/oVirt-derived) — KVM under K8s
- Public-cloud lift-and-shift (AWS EC2, Azure VMs)

**Lesson for the exam / for practitioners.**

- **Hypervisor choice is a long-term commitment.** Migration off a hypervisor is non-trivial (V2V conversion, network re-architecting, retraining staff).
- **License model risk is real.** Always understand the upgrade path AND the rip-and-replace cost.
- **Open-source alternatives are increasingly viable** — Proxmox + Ceph, KVM + libvirt + Open vSwitch, OpenShift Virtualization.
- **Diversification has merit.** Some shops now run a mixed environment (vSphere for legacy + K8s for new) to avoid single-vendor lock-in.

This is a non-exam-tested situational context, but Server+ candidates moving into mid-career sysadmin roles will absolutely encounter it.

**Discussion (Socratic).**
- **Q1:** Your CFO asks you to migrate off vSphere to Proxmox over 18 months. List the *first three* technical risks and how you'd mitigate each.
- **Q2:** Is "lift-and-shift to AWS EC2" cheaper than staying on vSphere? Identify the categories of cost you must compare.
- **Q3:** Containers reduce hypervisor licensing exposure but introduce K8s operational complexity. How would you decide which workloads to containerize first?

---

## ✅ Module 4 Summary

You now know:
- 🖥️ **Type 1 vs Type 2 hypervisors** and major examples (ESXi/vSphere, Hyper-V, KVM)
- 🧰 The **VM lifecycle**: templates, full clones, linked clones, snapshots — and why snapshots are NOT backups
- 🚚 **vMotion / Live Migration** and its prerequisites (shared storage, L2, CPU compat, bandwidth)
- ✋ **HA / DRS / FT** + **affinity / anti-affinity** rules
- 📦 **Containers vs VMs** — kernel sharing, isolation tradeoffs, density
- 📦 Docker basics: image / container / registry / Dockerfile / Compose
- 📦 Kubernetes basics: pod / node / cluster / deployment / service / namespace
- 🧠 Resource management: vCPU/RAM overcommit, ballooning, TPS, CPU ready time, disk provisioning modes, SR-IOV

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 5 — Disaster Recovery & Backup](../Module-05-Disaster-Recovery/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 5](../Module-05-Disaster-Recovery/Reading.md) covers VM-aware backups (Veeam, native), snapshots in DR, and the "snapshots ≠ backup" reality; [Module 6](../Module-06-Security/Reading.md) hardens hypervisors and container runtimes; [Module 8](../Module-08-Troubleshooting/Reading.md) diagnoses VM performance and resource starvation.
> - Cross-course: **AWS Solutions Architect** maps EC2/ECS/EKS to VM/container concepts; **Azure Administrator** maps Azure VMs/AKS to the same.
> - Practice: Practice Exam 1 has ~9 questions from this module; the Final Mock has ~14.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Popek, G. J., & Goldberg, R. P. (1974). *"Formal Requirements for Virtualizable Third Generation Architectures."* Communications of the ACM, 17(7). (The original formal definition.)
- 📄 Barham, P., Dragovic, B., Fraser, K., et al. (2003). *"Xen and the Art of Virtualization."* SOSP 2003. (The Xen paper.)
- 📄 Kivity, A., Kamay, Y., Laor, D., Lublin, U., & Liguori, A. (2007). *"KVM: the Linux Virtual Machine Monitor."* OLS 2007. (The KVM paper.)
- 📄 Burns, B., Grant, B., Oppenheimer, D., Brewer, E., & Wilkes, J. (2016). *"Borg, Omega, and Kubernetes."* CACM, 59(5). (Kubernetes lineage from Google's Borg.)
- 📄 VMware vSphere documentation — current product reference
- 📄 Microsoft Hyper-V documentation — current product reference
- 📄 Kubernetes official documentation — `kubernetes.io/docs`

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF)
- 📖 [Professor Messer SK0-005 videos](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)
- 📖 *Kubernetes Up & Running* (Kelsey Hightower, Brendan Burns, Joe Beda, O'Reilly)
- 📖 *Docker Deep Dive* (Nigel Poulton)
- 📖 *Mastering VMware vSphere* (Nick Marshall, Sybex)
