# 📋 Module 4 Cheat Sheet: Virtualization & Containers

> Print. Tape. Reference.

---

## 🖥️ Hypervisor Types

| Type | Runs on | Examples |
|---|---|---|
| **Type 1 (bare-metal)** | Hardware | ESXi, Hyper-V, KVM, Xen, Proxmox |
| **Type 2 (hosted)** | A host OS | VMware Workstation/Fusion, VirtualBox, Parallels |

🧠 Production = Type 1. Dev laptop = Type 2.

---

## 🏷️ Virtual Disk Formats

| Format | Vendor |
|---|---|
| **VMDK** | VMware |
| **VHDX** (legacy: VHD) | Microsoft Hyper-V |
| **qcow2** | KVM/QEMU |
| **OVF / OVA** | Open Virtualization Format / Archive, portable |

---

## 🧰 VM Lifecycle Objects

| Object | What | Persistent? | Independent? |
|---|---|---|---|
| **Template** | Sealed master image | Yes | Children are |
| **Full clone** | Complete independent copy | Yes | Yes |
| **Linked clone** | Shares base + stores deltas | Yes | NO (parent dependency) |
| **Snapshot** | Point-in-time delta | Short-term | NO |
| **Backup** | Independent copy on separate storage | Long-term | Yes |

🚨 **Snapshots are NOT backups.** Same datastore = same single point of failure.

---

## 🚚 Live Migration Prerequisites

1. **Shared storage** (SAN/NFS/vSAN) accessible to both hosts
2. **L2 network** for VM IP/MAC continuity
3. **CPU compatibility** (or EVC mode to mask features)
4. **Sufficient resources** on the target host

🧠 **vMotion (VMware) = Live Migration (Hyper-V) = Live Migration (KVM).** Intra-product only.

---

## ✋ Cluster Features

| Feature | Purpose |
|---|---|
| **HA** | Auto-restart VMs on surviving host after host fail (minutes downtime) |
| **DRS** | Continuously balance load via live migration |
| **FT** | Lockstep VM pair, zero downtime on host fail |
| **Affinity** | "Keep these together" |
| **Anti-affinity** | "Keep these apart" (DCs, DB replicas) |

---

## 📦 Containers vs VMs

| | VM | Container |
|---|---|---|
| Kernel | Own | Shared host kernel |
| Boot | Seconds-min | Milliseconds |
| Size | GBs | MBs |
| Density | 10s/host | 100s-1000s/host |
| Isolation | Strong (HW-assisted) | Weaker (process-level) |
| OS choice | Any | Match host kernel family |

---

## 🐳 Docker Vocabulary

| Term | What |
|---|---|
| **Image** | Read-only template |
| **Container** | Running instance of an image |
| **Dockerfile** | Build recipe |
| **Registry** | Image store (Docker Hub, ECR, ACR, GCR) |
| **Volume** | Persistent storage |
| **Compose** | Multi-container stack on one host |

---

## ☸️ Kubernetes Vocabulary

| Term | What |
|---|---|
| **Pod** | Smallest scheduling unit (1+ containers) |
| **Node** | Physical/virtual server running Pods |
| **Cluster** | Group of nodes + control plane |
| **Deployment** | Spec for N identical Pods + rolling updates |
| **Service** | Stable network endpoint fronting Pods |
| **Ingress** | HTTP/HTTPS routing |
| **Namespace** | Logical isolation |
| **ConfigMap / Secret** | Config / sensitive values |
| **PVC / PV** | Storage abstraction |
| **kubectl** | The CLI |

---

## 🧠 Resource Management

| Concept | What |
|---|---|
| vCPU | Virtual CPU presented to guest |
| CPU **ready time** | Time vCPU is ready but waiting for physical core (high = overcommit problem) |
| **Ballooning** | Cooperative guest driver reclaims unused RAM |
| **TPS** | Transparent Page Sharing, dedup identical pages |
| **Swap** | Last-resort hypervisor swap (perf collapse) |
| **SR-IOV** | Direct NIC virtual function to VM (bypass vSwitch) |
| Thin VMDK/VHDX | Disk grows as written |
| Thick (eager-zero) | Pre-allocated + zeroed |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Use Type 1 hypervisor for production"
- "vMotion / Live Migration requires shared storage + L2 + CPU compat"
- "Snapshots are not backups"
- "Anti-affinity for DCs / DB replicas"
- "Containers for microservices, VMs for OS isolation"
- "K8s orchestrates many containers across many hosts"

❌ Often **wrong**:

- "Type 2 for production"
- "Snapshots = backups"
- "Two DCs on the same host"
- "vMotion between vSphere and Hyper-V natively"
- "More vCPUs = always faster"
- "Containers are mini VMs"

---

## 🗓️ Facts To Memorize Cold

- Type 1 vs Type 2 examples
- VMDK / VHDX / qcow2 / OVF/OVA
- 4 vMotion prerequisites
- HA vs DRS vs FT
- Anti-affinity = split placement
- Kernel-shared = containers
- Pod = K8s smallest unit
- Snapshot ≠ backup

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Type 1 vs Type 2, production = which? ___
2. 4 things needed for vMotion? ___
3. Snapshot vs backup, why snapshot is NOT enough? ___
4. Container vs VM, single biggest difference? ___
5. Anti-affinity, give an example? ___
6. K8s smallest scheduling unit? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 5: Disaster Recovery & Backup](../Module-05-Disaster-Recovery/Reading.md)
