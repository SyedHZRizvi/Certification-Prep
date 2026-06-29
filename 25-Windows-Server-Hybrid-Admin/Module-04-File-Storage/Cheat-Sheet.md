# 📋 Module 4 Cheat Sheet: File Servers, Storage & Storage Spaces

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧱 S2D Quick Reference (MEMORIZE)

| Property | Detail |
|----------|--------|
| Nodes | **2–16** |
| Max capacity | **4 PB / cluster** |
| Min drives/node | 4 |
| Network | **10 GbE min**, 25+ recommended, RDMA preferred |
| Edition | **Datacenter only** |
| Hardware | **Identical across nodes** (WSSD catalog) |
| Filesystem | ReFS or NTFS (ReFS preferred) |

### Resiliency by node count

| Nodes | Modes |
|-------|-------|
| 2 | **2-way mirror only** |
| 3 | 3-way mirror |
| 4 | 3-way mirror **or** dual parity |
| 6+ | Mirror-accelerated parity (MAP (Minimum Advertised Price)) |

---

## 🔁 Storage Replica

| Mode | Latency | RPO (Recovery Point Objective) | Best for |
|------|---------|-----|----------|
| **Synchronous** | ≤ ~5 ms RTT | **0** | Metro pair |
| **Asynchronous** | Any | Eventual | Cross-region DR |

### Topologies

| Topology | Description |
|----------|-------------|
| Server-to-server | One volume to one volume |
| Cluster-to-cluster | CSV to remote CSV |
| **Stretch cluster** | One cluster spans 2 sites |

🚨 Destination volume is **unmounted/unreadable** during normal replication.

---

## 🌳 DFS-N vs DFS-R

| | DFS-N | DFS-R |
|---|-------|-------|
| Purpose | **Virtual namespace** | **File-level replication** |
| Example | `\\contoso.com\shares` | Replicate `\\fs02\Marketing` to `\\fs05\Marketing` |
| Tech | Site-aware referrals | RDC (block-level diff) |
| Backup? | No | **No** (replication, not backup) |
| Combine? | Yes, classic DFS-N + DFS-R combo |

DFS-N max targets per folder: **32**

---

## 📐 ReFS vs NTFS

| Feature | NTFS | ReFS |
|---------|------|------|
| Boot drive | ✅ | ❌ |
| EFS encryption | ✅ | ❌ |
| Compression | ✅ | ❌ |
| Block cloning | ❌ | ✅ |
| Integrity streams | ❌ | ✅ |
| Mirror-accel parity | ❌ | ✅ |
| Dedup (2019+) | ✅ | ✅ |
| Max volume | 256 TB | 35 PB |

🔥 **OS = NTFS. Hyper-V VHDs / backup repos / S2D = ReFS.**

---

## 🧮 FSRM at a Glance

| Feature | What it does |
|---------|--------------|
| Quota, **Hard** | Block writes when exceeded |
| Quota, **Soft** | Warn only |
| File Screen, **Active** | Block writes of bad extensions |
| File Screen, **Passive** | Log only |
| Storage reports | Usage by user/group/folder |
| File classification | Tag based on content (DLP-lite) |

---

## 💼 Work Folders

- HTTPS (HTTP Secure) (port 443) only
- AD (Active Directory) + Workplace Join + Conditional Access
- Self-managed alternative to OneDrive

---

## 🌍 BranchCache

| Mode | Branch infra |
|------|--------------|
| **Hosted Cache** | Dedicated branch server |
| **Distributed Cache** | Client peer-to-peer |

---

## 🎯 iSCSI Target Server

- Exposes `.vhdx` as iSCSI LUN
- Auth: **CHAP** and Reverse-CHAP
- Initiators: Windows / VMware / Linux

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Use S2D Datacenter with 4 nodes for production HA"
- ✅ "Synchronous Storage Replica for metro RPO zero"
- ✅ "Asynchronous Storage Replica for cross-region DR"
- ✅ "DFS-N + DFS-R combo for namespace + replication"
- ✅ "ReFS for the Hyper-V CSV volume"
- ✅ "Enable Access-Based Enumeration on the namespace"
- ✅ "FSRM file screen Active mode to block ransomware extensions"

Usually **wrong**:

- ❌ "S2D on Windows Server Standard"
- ❌ "Sync Storage Replica from Tokyo to New York"
- ❌ "Boot from ReFS"
- ❌ "DFS-R is our backup strategy"
- ❌ "Read from the SR destination volume directly"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Sync SR across continents (too high latency)
- ❌ NTFS on the Hyper-V VHD volume (no block cloning)
- ❌ DFS-R without a real backup (ransomware propagates)
- ❌ 2-node S2D in production with critical workloads (no fault tolerance vs drive AND node failure)
- ❌ FSRM Soft quotas only on every share

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| HCI: pooled storage across servers | S2D (Datacenter) |
| Zero-RPO metro replication | Storage Replica synchronous |
| Cross-region DR replication | Storage Replica asynchronous |
| Unified path for users to multiple file servers | DFS-N |
| Replicate file-server content multi-master | DFS-R |
| Fast Hyper-V VHD ops | ReFS with block cloning |
| Boot OS drive | NTFS |
| Block ransomware uploads (`.exe`/`.lock`) | FSRM Active file screen |
| User quotas with hard enforcement | FSRM hard quota |
| Hide what users can't access | Access-Based Enumeration |
| Branch HQ-content caching | BranchCache (Hosted or Distributed) |
| Lab SAN-like storage on Windows | iSCSI Target Server |
| User docs sync across devices | Work Folders |

---

## ✏️ Quick Self-Check

1. S2D node range + edition? ___
2. Storage Replica sync latency budget? ___
3. DFS-N vs DFS-R one-line each? ___
4. ReFS use cases vs NTFS? ___
5. FSRM Active vs Passive screen? ___
6. ABE one-line? ___

---

➡️ [Module 5: Hyper-V & Virtualization](../Module-05-HyperV/Reading.md)
