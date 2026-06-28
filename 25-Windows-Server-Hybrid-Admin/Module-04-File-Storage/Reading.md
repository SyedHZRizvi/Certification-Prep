# Module 4: File Servers, Storage & Storage Spaces 💾

> **Why this module matters:** Storage is 15–20% of AZ-800 and almost every storage question is about choosing the right *combination* of technologies (S2D + Storage Replica + DFS-N) for a specific scenario. The exam loves "you have two data centers, RTO (Recovery Time Objective) 5 min, RPO (Recovery Point Objective) zero, 2 PB data which combination?" Get the prerequisites, scale limits, and synchronous-vs-asynchronous trade-offs into reflex memory and you've locked down an outsized chunk of the test.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic storage concepts (RAID 1/5/6/10, IOPS, latency, throughput)
> - Active Directory groups for permissions, [Module 1](../Module-01-Active-Directory/Reading.md)
> - DNS (Domain Name System) basics, especially `\\contoso.com\shares` resolution, [Module 3](../Module-03-Networking-DNS/Reading.md)
> - NTFS permissions and shared-folder permissions (basic) from any Windows Server experience
>
> If those are shaky, pause and review. This module assumes you can already explain "why NTFS permissions stack with share permissions to produce the effective permission."

---

## 🏬 A Story: The Warehouse That Outgrew Its Filing Cabinet

In 1998, Walmart opened a new regional distribution center outside Dallas. Each pallet that came in got a hand-written index card filed in a metal cabinet. By 2002, they'd outgrown one cabinet. By 2004, an entire room. By 2008, they had **two rooms** of index cards in parallel, one as a backup, one as the live working set. A janitor accidentally bumped a shelf in the backup room and the cards spilled across the floor; nobody noticed for *three weeks*. When inventory reconciliation ran, they discovered the backup had drifted thousands of pallets out of sync.

The fix wasn't more cabinets. It was a digital system where each scanner update propagated to the other room *instantly*, with a checksum that screamed if the two diverged. The cabinets stayed for legal-required paper retention; the *operational* tracking moved to active-active database replication with verifiable integrity.

That story is every modern Windows storage architecture: you have **redundancy** (two cabinets), **replication** (changes propagate), **integrity** (checksums catch drift), and **a namespace** (one logical view of two physical stores). The exam tests you on which Microsoft product gives you which property, S2D for redundancy + scale, Storage Replica for cross-site replication, ReFS for integrity, DFS-N for namespace, DFS-R for replication of file-server content.

By the end, you'll know which combination solves any given scenario.

---

## 🧱 Storage Spaces Direct (S2D)

**S2D** is Microsoft's software-defined storage layer for Hyper-Converged Infrastructure (HCI). It pools local disks across 2–16 servers into a shared cluster volume.

| Property | Detail |
|----------|--------|
| Min cluster nodes | **2** |
| Max cluster nodes | **16** |
| Max raw capacity | **4 PB per cluster** |
| Min capacity drives per node | **4** (any combo of NVMe / SSD / HDD) |
| Cache tier | NVMe or SSD (auto-detected as fastest) |
| Network requirement | **10 GbE minimum** (25 GbE+ recommended) |
| RDMA | Strongly recommended (RoCE or iWARP) |
| OS edition | **Windows Server Datacenter** (Standard is not licensed for S2D) |
| Drive types | NVMe + SSD + HDD allowed; must be **identical across all nodes** |
| Filesystem | ReFS or NTFS; ReFS preferred for performance + integrity |

### Resiliency by node count

| Nodes | Modes available |
|-------|----------------|
| **2** | **2-way mirror only** |
| **3** | **3-way mirror** |
| **4** | 3-way mirror **or** dual parity |
| **6+** | Mirror-accelerated parity (MAP (Minimum Advertised Price)) |

🔥 **MEMORIZE the 2-node = 2-way mirror constraint.** A 2-node S2D cluster cannot survive losing a node *and* a drive simultaneously the way a 3-node 3-way mirror can.

### Build an S2D cluster (PowerShell)

```powershell
# Pre-reqs on every node: Hyper-V, Failover Clustering, File Server, Data Center Bridging
Install-WindowsFeature -Name Hyper-V,Failover-Clustering,Data-Center-Bridging,RSAT-Clustering-PowerShell,FS-FileServer -IncludeAllSubFeature -IncludeManagementTools -Restart

# Validate cluster prerequisites
Test-Cluster -Node "NODE01","NODE02","NODE03","NODE04" `
             -Include "Storage Spaces Direct","Inventory","Network","System Configuration"

# Create the cluster
New-Cluster -Name "S2D-Cluster01" `
            -Node "NODE01","NODE02","NODE03","NODE04" `
            -NoStorage -StaticAddress 10.0.50.100

# Enable S2D
Enable-ClusterS2D -CacheState Enabled

# Create a 4 TB ReFS volume across the cluster
New-Volume -StoragePoolFriendlyName "S2D on S2D-Cluster01" `
           -FriendlyName "Volume01" `
           -FileSystem CSVFS_ReFS `
           -StorageTierFriendlyNames "Performance","Capacity" `
           -StorageTierSizes 400GB,3.6TB
```

🚨 **Common trap:** S2D requires **identical hardware** across nodes. Microsoft maintains a Windows Server Software-Defined (WSSD) catalog of certified configs, a mismatched disk can break the pool.

---

## 🔁 Storage Replica (SR)

**Storage Replica** does block-level, volume-level replication between Windows Servers. It's *not* the same as DFS-R (which is file-level).

| Mode | RPO | Best for | Distance |
|------|-----|----------|----------|
| **Synchronous** | **Zero data loss** | Metro pairs | ≤ ~5 ms RTT (~50 km) |
| **Asynchronous** | Eventual consistency | Cross-region DR | Any distance, up to network capability |

### Three deployment topologies

| Topology | Description |
|----------|-------------|
| **Server-to-server** | One source volume → one destination volume |
| **Cluster-to-cluster** | Whole CSV → another whole CSV on a remote cluster |
| **Stretch cluster** | One cluster spans two sites; SR keeps the storage in sync |

### Build a server-to-server replica (sync mode)

```powershell
# On both servers: install the feature
Install-WindowsFeature Storage-Replica -IncludeManagementTools -Restart

# Test prerequisites
Test-SRTopology -SourceComputerName "SRV01" `
                -SourceVolumeName "D:" `
                -SourceLogVolumeName "L:" `
                -DestinationComputerName "SRV02" `
                -DestinationVolumeName "D:" `
                -DestinationLogVolumeName "L:" `
                -DurationInMinutes 30 `
                -ResultPath C:\temp

# Create the replication partnership
New-SRPartnership -SourceComputerName "SRV01" `
                  -SourceRGName "rg-Data-Src" `
                  -SourceVolumeName "D:" `
                  -SourceLogVolumeName "L:" `
                  -DestinationComputerName "SRV02" `
                  -DestinationRGName "rg-Data-Dst" `
                  -DestinationVolumeName "D:" `
                  -DestinationLogVolumeName "L:" `
                  -ReplicationMode Synchronous
```

🔥 **MEMORIZE:** Storage Replica's destination volume is **unavailable for reads/writes** during normal replication. You have to fail over (reverse the partnership) to use the destination side.

---

## 🌳 DFS-N (Distributed File System Namespaces)

**DFS-N** is a virtual namespace abstraction. Instead of users mapping `\\fs01\share`, they map `\\contoso.com\shares`, and DFS routes the request to whichever server actually has the data.

```
   USER: \\contoso.com\shares\hr   →  DFS-N routes →  \\fs02\hr-data
                                      DFS-N routes →  \\fs05\hr-data  (fallback)
```

| Property | Detail |
|----------|--------|
| Namespace types | **Domain-based** (recommended) or Standalone |
| Namespace mode | 2008 (recommended; uses Access-Based Enumeration efficiently) |
| Max targets per folder | 32 |
| Targets can be on different servers | Yes, that's the point |
| Site-aware referrals | Yes, client gets a list ordered by site cost |
| Targets can be DFS-R replicated | Yes (DFS-N + DFS-R is the classic combination) |

### Create a domain-based namespace

```powershell
# Install role on a namespace server
Install-WindowsFeature FS-DFS-Namespace,FS-DFS-Replication -IncludeManagementTools

# Create the namespace root (you need a local share to back it)
New-Item -Path C:\DFSRoots\Shares -ItemType Directory
New-SmbShare -Name "Shares" -Path C:\DFSRoots\Shares -FullAccess Everyone

# Create the DFS namespace (domain-based)
New-DfsnRoot -TargetPath "\\fs01\Shares" `
             -Type DomainV2 `
             -EnableAccessBasedEnumeration $true `
             -EnableSiteCosting $true `
             -Path "\\contoso.com\Shares"

# Add a folder + target
New-DfsnFolder -Path "\\contoso.com\Shares\HR" `
               -TargetPath "\\fs02\hr-data" `
               -EnableTargetFailback $true
```

---

## 🔄 DFS-R (Distributed File System Replication)

**DFS-R** is a multi-master file replication engine using **Remote Differential Compression (RDC)** to transfer only changed file blocks.

| Property | Detail |
|----------|--------|
| Topology | Hub-spoke, full-mesh, or custom |
| Replication transport | RPC over TCP (Transmission Control Protocol) (or via SMB) |
| Block-level diff | Yes, only changed blocks transfer (RDC) |
| Read-only members | Yes |
| Bandwidth throttling | Yes, per schedule |
| File conflict resolution | Last-writer-wins; older copy moved to **ConflictAndDeleted folder** |

### Create a DFS-R replication group (PowerShell)

```powershell
# Install on each replication partner
Install-WindowsFeature FS-DFS-Replication -IncludeManagementTools

# Create the replication group + folder
New-DfsReplicationGroup -GroupName "RG-Marketing"
New-DfsReplicatedFolder -GroupName "RG-Marketing" -FolderName "Marketing"

# Add members
Add-DfsrMember -GroupName "RG-Marketing" -ComputerName "fs02","fs05"

# Add connections (defines the topology, full mesh here)
Add-DfsrConnection -GroupName "RG-Marketing" `
                   -SourceComputerName "fs02" `
                   -DestinationComputerName "fs05"

# Set the local path on each member
Set-DfsrMembership -GroupName "RG-Marketing" `
                   -FolderName "Marketing" `
                   -ComputerName "fs02" `
                   -ContentPath "D:\Marketing" `
                   -PrimaryMember $true `
                   -Force
```

🚨 **DFS-R is NOT a backup.** It's a *replication* engine, a deletion or ransomware encrypt on one side propagates within minutes. Pair with Volume Shadow Copy or Azure Backup.

---

## 📐 ReFS vs NTFS

| Feature | NTFS | ReFS (Resilient File System) |
|---------|------|-------------------------------|
| Max volume size | 256 TB practical | **35 PB** |
| Max file size | 256 TB | **35 PB** |
| Block cloning | No | **Yes** (instant copies, fast Hyper-V VHD provisioning) |
| Integrity streams (checksums + auto-repair) | No | Yes (metadata always; user data opt-in) |
| Mirror-accelerated parity | No | Yes |
| Compression | Yes | No |
| File-level encryption (EFS) | Yes | No |
| Disk quotas | Yes (NTFS quotas) | Use FSRM instead |
| Boot volume | Yes | **No** (cannot be OS drive) |
| Page file | Yes | No (cannot host the system page file) |
| Deduplication | Yes | Yes (Server 2019+) |
| Hard links | Yes | Limited |

🔥 **MEMORIZE the use cases:**
- **NTFS** = OS drive, EFS, compression, traditional file servers
- **ReFS** = Hyper-V storage (block cloning makes VHD ops 10–100× faster), backup repositories, S2D volumes, big-data workloads

🚨 **You cannot boot from ReFS.** OS drive is always NTFS.

---

## 🧮 File Server Resource Manager (FSRM)

FSRM is the rules engine for file servers. It handles **quotas**, **file screens**, **storage reports**, **file classification**, and **access denied assistance**.

### Quotas

```powershell
Install-WindowsFeature FS-Resource-Manager -IncludeManagementTools

# Hard quota, block writes when exceeded
New-FsrmQuota -Path "D:\UserHome\alice" `
              -Size 10GB `
              -Description "Alice's 10 GB home folder quota" `
              -Threshold (New-FsrmQuotaThreshold -Percentage 80 -Action `
                          (New-FsrmAction -Type Email -MailTo "admin@contoso.com" `
                                          -Subject "User over 80% quota"))

# Soft quota, warn only, do not block
New-FsrmQuota -Path "D:\Marketing" -Size 500GB -SoftLimit
```

### File screens

```powershell
# Block .exe, .mp3, .iso uploads in user home
New-FsrmFileGroup -Name "BlockedExtensions" -IncludePattern "*.exe","*.mp3","*.iso"
New-FsrmFileScreen -Path "D:\UserHome" -IncludeGroup "BlockedExtensions" `
                   -Active $true   # active = enforce, passive = log only
```

### File classification & RMS integration

FSRM can classify files by content (e.g., "contains credit card numbers") and apply **Azure Information Protection** labels or move/copy them based on rules. Useful for compliance, DLP-lite without a full DLP product.

---

## 💼 Work Folders

**Work Folders** is Microsoft's self-managed (not OneDrive) file-sync feature. Configure once; user's documents sync to multiple corporate devices over HTTPS (HTTP Secure) (HTTP (Hypertext Transfer Protocol) Secure).

| Property | Detail |
|----------|--------|
| Transport | HTTPS only (port 443) |
| Authentication | AD (Active Directory) integrated, supports Workplace Join + Conditional Access |
| Conflict policy | Last-writer-wins; minor conflicts auto-resolved |
| Encryption at rest | Optional (per-folder) |
| Status | "Legacy but still supported", OneDrive is Microsoft's strategic file-sync direction |

### Set up the Work Folders server role

```powershell
Install-WindowsFeature FS-SyncShareService -IncludeManagementTools

# Create a sync share for the Marketing OU
New-SyncShare -Name "Marketing" `
              -Path "D:\WorkFolders\Marketing" `
              -User "CONTOSO\Marketing-Group" `
              -Description "Marketing team Work Folders share"
```

---

## 🌍 BranchCache

**BranchCache** caches HQ-hosted content at the branch, reducing WAN (Wide Area Network) load.

| Mode | Description |
|------|-------------|
| **Hosted Cache** | A dedicated branch server holds the cache (BranchCache role) |
| **Distributed Cache** | Branch clients peer with each other to hold cached chunks |

🔥 Hosted Cache scales better at branches with > ~50 users; Distributed Cache is simpler for small branches.

### Enable on the content source

```powershell
Install-WindowsFeature BranchCache -IncludeManagementTools

# On the HQ file server
Set-BCContentServer -ServerVerifies $true

# On the branch Hosted Cache server
Enable-BCHostedServer
```

Plus GPO (Group Policy Object) settings on clients to enable BranchCache + set cache mode.

---

## 🎯 iSCSI Target Server

The **iSCSI Target Server** role exposes virtual disks (`.vhdx` files) as iSCSI LUNs.

| Property | Detail |
|----------|--------|
| Max VHDX size per LUN | Limited by NTFS, typically 64 TB |
| Authentication | CHAP and Reverse-CHAP supported |
| Snapshots | Yes (per-LUN, point-in-time) |
| Clones | Yes (read-only and writable) |
| Network | Dedicated iSCSI VLAN (Virtual Local Area Network) strongly recommended |
| Initiators | Windows iSCSI Initiator (built-in client), VMware, Linux open-iscsi |

```powershell
# Install role
Install-WindowsFeature FS-iSCSITarget-Server -IncludeManagementTools

# Create a target
New-IscsiServerTarget -TargetName "TARGET01" `
                      -InitiatorIds "IQN:iqn.1991-05.com.microsoft:srv01.contoso.com"

# Create a virtual disk and assign to target
New-IscsiVirtualDisk -Path "D:\iSCSIVDisks\disk1.vhdx" -SizeBytes 100GB
Add-IscsiVirtualDiskTargetMapping -TargetName "TARGET01" -DevicePath "D:\iSCSIVDisks\disk1.vhdx"

# Optional CHAP
Set-IscsiServerTarget -TargetName "TARGET01" `
                      -EnableChap $true -Chap (Get-Credential)
```

---

## 🧪 Task-Sequencing Practice: Build an HA File Server with Cross-Site DR

**Scenario:** Contoso needs an HA Marketing file share at HQ (Site-A) replicated to Site-B (DR) 75 km away (~3 ms RTT). RPO zero. RTO 5 minutes. Budget allows two 4-node S2D clusters.

**Order these steps:**

1. ✅ Stand up the Site-A 4-node S2D cluster (`Test-Cluster`, `New-Cluster`, `Enable-ClusterS2D`)
2. ✅ Stand up the Site-B 4-node S2D cluster identically
3. ✅ Create matching CSV volumes on both clusters (same size, ReFS)
4. ✅ Install **Storage Replica** on both clusters: `Install-WindowsFeature Storage-Replica`
5. ✅ Run `Test-SRTopology` to confirm prerequisites and bandwidth
6. ✅ Create a **cluster-to-cluster Storage Replica partnership** in **Synchronous** mode (RPO zero, within metro distance)
7. ✅ Create a **Scale-Out File Server (SOFS)** role on the Site-A cluster
8. ✅ Create a DFS-N namespace `\\contoso.com\Marketing` with the SOFS share as the active target and document the manual failover steps for Site-B
9. ✅ Test failover by reversing the SR partnership and bringing the SOFS role up on Site-B

⚠️ Skipping step 5 (`Test-SRTopology`) is the #1 mistake, you may discover the WAN can't sustain sync writes only after committing the deployment.

---

## 📊 Case Study, The 2017 Equifax Breach and the Role of File-Level Access Controls

**Situation.** In May–July 2017, Equifax disclosed (formally September 7, 2017) that an unauthenticated attacker exploited an unpatched Apache Struts CVE-2017-5638 vulnerability in their Automated Consumer Interview System (ACIS) web application to gain initial access and then spent **76 days** inside the network exfiltrating ~147 million US consumers' SSNs, dates of birth, addresses, and ~209,000 credit-card numbers (US Government Accountability Office, *Data Protection: Actions Taken by Equifax and Federal Agencies in Response to the 2017 Breach*, August 2018; Equifax Security Incident press release, September 7 2017). The attackers moved laterally through file shares, dumping data from multiple servers undetected for ten weeks largely because **expired TLS (Transport Layer Security) certificates** had silenced the IDS that was supposed to inspect the outbound traffic. Investigators noted that overly broad share-level permissions across the corporate file estate meant that once the web app was breached, the attacker had read access to data far beyond the application's legitimate scope.

**Decision.** Equifax's response to Congress laid out remediation areas that map almost exactly to AZ-800 storage objectives:

1. **Access-Based Enumeration (ABE)**, show users only the folders they have access to. Doesn't *grant* permissions but reduces reconnaissance value. Equifax explicitly cited ABE rollouts as part of file-server hardening.
2. **Just-in-time access for sensitive shares**, via **Microsoft Defender for Servers P2 JIT (Just-In-Time) VM (Virtual Machine) access** for the server hosting the share, and SAM (Serviceable Addressable Market)-R isolation.
3. **File Server Resource Manager (FSRM) classification + file screens**, block obvious exfil tools (`.iso`, `.7z`, `.zip` over a certain size) and classify files by content sensitivity.
4. **DFS Namespaces** with site-aware referrals so users don't accidentally hit a far-site replica with stale permissions.
5. **Audit logging of file access** to a Log Analytics workspace via the Azure Monitor Agent (covered in Module 7).

**Outcome.** Equifax paid a $700M settlement (CFPB, FTC, 50 state AGs, July 2019) and committed to $1B+ in security spending over five years. The breach became a Harvard Business School case study (Class 9-118-031, *Equifax's Battle Against Cyber Risk*, 2018) on the cost of operational debt, including the file-server permission sprawl that Equifax CIO David Webb described as "an undocumented inheritance from a decade of acquisitions."

**Lesson for the exam / for practitioners.** AZ-800 won't test you on Equifax, but it will test the building blocks:

- *Effective NTFS + share permissions* → understand the *most restrictive wins* combination of NTFS and Share permissions
- *DFS Namespaces with site-aware referrals* → keep users on the right replica
- *FSRM file screens + classification* → catch obvious exfiltration patterns + label sensitive content
- *Auditing* → log all access to FileServerLog, ship to Log Analytics

The exam will phrase this as: *"After consolidating five legacy file servers via DFS-N, the security team wants to enumerate folder access by AD group across the whole namespace. What single feature do you enable?"* The answer is **Access-Based Enumeration (ABE)**.

**Discussion (Socratic).**
- **Q1.** Equifax's web-app breach should never have given the attacker access to *unrelated* file shares. Build the file-server permission architecture that ensures the principle of least privilege scales to 20,000+ shares, including how DFS-N and AGDLP group nesting (from Module 1) combine to make it tractable.
- **Q2.** FSRM file screens can be set to "Active" (block writes) or "Passive" (log only). A finance team will not tolerate any false positives blocking their work, so they want Passive everywhere. Build the case for *selective* Active enforcement on `.exe`, `.ps1`, `.iso` and explain the residual risk of Passive-only.
- **Q3.** Equifax cited an expired TLS certificate as the cause of their IDS blind spot. The same certificate-management failure mode applies to file-server SSL (Secure Sockets Layer) bindings, Storage Replica encryption channels, and DFS-N referrals. Architect a 90-day certificate lifecycle policy for a 200-server file estate. What single tool (free or paid) makes this realistic, and what's the cost of *not* having it?

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "S2D needs 5+ nodes" | ❌ 2 nodes (2-way mirror) is supported, though limited |
| "Storage Replica destination is readable during normal replication" | ❌ Destination is NOT mounted/readable, must fail over first |
| "DFS-R is a backup" | ❌ It's replication; corruption + ransomware propagate |
| "ReFS can be the OS drive" | ❌ NTFS only for boot/page file |
| "S2D works on Windows Server Standard" | ❌ Datacenter edition required |
| "BranchCache Distributed and Hosted modes coexist on the same client" | ❌ One mode per client at a time |
| "Storage Replica supports any distance synchronously" | ❌ Sync needs ≤ ~5 ms RTT (~50 km practical) |
| "FSRM quotas always block writes" | ❌ Hard quotas block; soft quotas only log/notify |
| "DFS-N referrals are auto-failback-enabled by default" | ❌ You must enable Target Failback (False by default) |
| "ReFS supports EFS encryption" | ❌ Use BitLocker on the volume instead |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **S2D** | Storage Spaces Direct, SDN-style pooled storage across 2–16 nodes |
| **WSSD** | Windows Server Software-Defined catalog of certified S2D hardware |
| **Storage Replica** | Block-level volume replication (sync or async) |
| **DFS-N** | DFS Namespaces, virtual `\\contoso.com\share` view |
| **DFS-R** | DFS Replication, file-level multi-master with RDC |
| **RDC** | Remote Differential Compression, block-level diff |
| **ABE** | Access-Based Enumeration, hide what user can't access |
| **ReFS** | Resilient File System, block cloning, integrity streams |
| **FSRM** | File Server Resource Manager, quotas, screens, classification |
| **Work Folders** | Microsoft's self-managed file sync (alternative to OneDrive) |
| **BranchCache** | Branch-side WAN-optimization cache |
| **iSCSI Target** | Expose VHDX as iSCSI LUN |
| **CSV** | Cluster Shared Volume |
| **SOFS** | Scale-Out File Server, active-active file share role |
| **MCLT / RPO / RTO** | Recovery Point Objective / Recovery Time Objective |

---

## ✅ Module 4 Summary

You now know:

- 🧱 S2D, 2–16 nodes, 4 PB max, Datacenter edition, 10 GbE min, identical hardware
- 🔁 Storage Replica, sync (zero RPO, metro) vs async (any distance); destination unmountable during normal replication
- 🌳 DFS-N, virtual namespace with site-aware referrals
- 🔄 DFS-R, file-level replication, RDC, not a backup
- 📐 ReFS vs NTFS, when each wins (boot = NTFS; Hyper-V/backup = ReFS)
- 🧮 FSRM, quotas (hard/soft), file screens (active/passive), classification + RMS
- 💼 Work Folders, self-managed file sync over HTTPS
- 🌍 BranchCache, Hosted vs Distributed
- 🎯 iSCSI Target Server, expose VHDX as LUN with CHAP
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 5: Hyper-V & Virtualization](../Module-05-HyperV/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 5's Hyper-V workloads typically live on S2D + ReFS for fast block-cloning. Module 7's Azure Monitor ingests FileServer event logs. Module 8's Defender for Servers scans file shares for malware. Module 9's Azure Backup protects shares hosted on these volumes.
> - Cross-course: [`06-Azure-Administrator` Modules 3–4](../../06-Azure-Administrator/Module-03-Storage-Accounts-Blobs/Reading.md) cover the Azure-side counterparts (blob, files, file sync), the natural extension when on-prem storage moves cloudward.
> - Practice: Practice Exam 1 has 7 questions on storage; Practice Exam 2 has 4 (hybrid storage scenarios); Final Mock has a stretched-cluster + DFS-N case study.

---

## 💬 Discussion, Socratic prompts

1. **S2D vs traditional SAN.** A 5,000-user enterprise's legacy SAN is at end-of-life. The CIO is debating S2D (4-node cluster, ~$280K) vs a refreshed Pure Storage FlashArray (~$420K) vs Azure Files Premium with on-prem File Sync (~$32K/mo + transfer). Defend each choice and identify the org profile where each wins.
2. **Synchronous Storage Replica latency budget.** Microsoft's guidance is ≤ 5 ms RTT for sync mode. A bank wants sync replication between Manhattan and a DR site 90 km away in New Jersey, typical RTT ~3 ms. Defend the choice of sync; identify the *single* failure mode (network jitter spike) that could degrade application performance and how to monitor for it (Q1: bandwidth saturation alert; Q2: log-volume IO latency).
3. **DFS-R as ransomware accelerator.** DFS-R propagates changes within minutes. A ransomware attack encrypts files on one replica; the encrypted copies replicate everywhere within an hour. Defend the architecture that makes DFS-R safe: (a) DFS-R combined with Volume Shadow Copy Service + Azure Backup, (b) replication topology designed with one read-only replica isolated from production, or (c) detection via FSRM file screens for ransomware extensions.
4. **ReFS for Hyper-V, when not?** ReFS gives a 10–100× faster checkpoint and VHD provisioning via block cloning, but cannot host the OS drive. Defend the standard pattern: NTFS for OS, ReFS for VHD storage. Then defend the exception: NTFS for both on a 2-node cluster running primarily Linux VMs (no Hyper-V VHD ops) where deduplication on NTFS matters more.
5. **iSCSI Target Server in 2026, relevant or relic?** The cloud-native trend says "use Azure NetApp Files" or "Premium SSD v2." But many on-prem labs and small SMBs still rely on Windows iSCSI Target Server. Build the case that it remains the right answer for: (a) dev/test labs simulating SAN, (b) small backup-target use cases, (c) lift-and-shift of legacy SCSI-only workloads.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn, Storage Spaces Direct overview](https://learn.microsoft.com/azure-stack/hci/concepts/storage-spaces-direct-overview)
- 📖 [Storage Replica overview](https://learn.microsoft.com/windows-server/storage/storage-replica/storage-replica-overview)
- 📖 [DFS Namespaces deep dive](https://learn.microsoft.com/windows-server/storage/dfs-namespaces/dfs-overview)
- 📖 [DFS Replication tuning guide](https://learn.microsoft.com/windows-server/storage/dfs-replication/dfsr-overview)
- 📖 [FSRM technical reference](https://learn.microsoft.com/windows-server/storage/fsrm/fsrm-overview)
- 📖 [ReFS overview and limits](https://learn.microsoft.com/windows-server/storage/refs/refs-overview)
- 📖 GAO, *Data Protection: Actions Taken by Equifax and Federal Agencies in Response to the 2017 Breach* (August 2018), the canonical Equifax post-mortem
- 📖 Andrew S. Tanenbaum and Herbert Bos, *Modern Operating Systems* (5th ed., 2022), for the underlying file-system theory ReFS and NTFS implement
