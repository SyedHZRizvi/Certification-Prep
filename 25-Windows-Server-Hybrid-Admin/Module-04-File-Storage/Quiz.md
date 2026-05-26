# ✏️ Module 4 Quiz: File Servers, Storage & Storage Spaces

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Storage Spaces Direct (S2D) supports how many nodes per cluster? *(Remember)*
A. 1–8
B. 2–16
C. 4–32
D. 8–64

---

### Q2. The Windows Server edition REQUIRED for S2D is: *(Remember)*
A. Standard
B. Datacenter
C. Essentials
D. Hyper-V Server

---

### Q3. What is the MINIMUM resiliency mode for a 2-node S2D cluster? *(Remember)*
A. 2-way mirror only
B. 3-way mirror
C. Dual parity
D. Mirror-accelerated parity

---

### Q4. Storage Replica's SYNCHRONOUS mode is best for: *(Understand)*
A. Cross-continent DR with hours of RPO
B. Metro pairs ≤ ~5 ms RTT with zero data loss requirement
C. Off-site backup tapes
D. Any geographic distance

---

### Q5. During normal Storage Replica replication, the DESTINATION volume is: *(Remember)*
A. Mounted and read-only
B. Mounted and read/write
C. Unmounted and inaccessible until failover
D. Mounted and writable but eventually consistent

---

### Q6. DFS-N (Namespaces) provides: *(Remember)*
A. Block-level replication
B. A virtual unified path like `\\contoso.com\shares` routing to physical servers
C. File-level synchronization
D. Encryption at rest

---

### Q7. DFS-R uses what technology to transfer only the changed parts of files? *(Remember)*
A. Block-level mirroring
B. Remote Differential Compression (RDC)
C. SMB Multichannel
D. RPC over IPsec

---

### Q8. ReFS lacks which capability that NTFS has? *(Understand)*
A. Block cloning
B. Integrity streams
C. EFS file-level encryption
D. Mirror-accelerated parity

---

### Q9. Can ReFS be the OS BOOT drive? *(Remember)*
A. Yes, always
B. Only on Server Core
C. No — boot/page file requires NTFS
D. Only on Windows Server Datacenter

---

### Q10. **Yes/No** — S2D requirements. *(Evaluate)*

**S1:** S2D requires identical hardware across all nodes.
**S2:** S2D requires a minimum of 10 GbE networking.
**S3:** S2D works with Windows Server Standard edition.

A. Yes / Yes / No
B. No / Yes / Yes
C. Yes / No / Yes
D. Yes / Yes / Yes

---

### Q11. FSRM's "Active" file screen will: *(Remember)*
A. Block writes of disallowed file types
B. Log warnings only
C. Send an email and continue allowing the write
D. Auto-classify the file

---

### Q12. The MAXIMUM number of folder targets for a single DFS-N folder is: *(Remember)*
A. 4
B. 8
C. 16
D. 32

---

### Q13. The Storage Replica deployment topology that allows a SINGLE cluster to span two sites is: *(Remember)*
A. Server-to-server
B. Cluster-to-cluster
C. Stretch cluster
D. Mesh replication

---

### Q14. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** DFS-R is a backup solution.
**S2:** A DFS-R conflict moves the older file to the `ConflictAndDeleted` folder.
**S3:** Storage Replica sync mode survives a single node failure with zero data loss.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / Yes

---

### Q15. Which BranchCache mode requires a dedicated server at the branch to hold the cache? *(Remember)*
A. Distributed Cache
B. Hosted Cache
C. Web Cache
D. Anycast Cache

---

### Q16. iSCSI Target Server supports which authentication option? *(Remember)*
A. Kerberos only
B. CHAP and Reverse-CHAP
C. NTLMv2 only
D. Anonymous only

---

### Q17. ReFS's MAJOR advantage over NTFS for Hyper-V workloads is: *(Understand)*
A. Smaller block size
B. Block cloning makes VHD provisioning / checkpoints near-instant
C. Boot-volume support
D. Built-in compression

---

### Q18. **Order these steps** to deploy a 4-node S2D cluster. *(Create)*

1. Install required Windows features on every node (`Hyper-V`, `Failover-Clustering`, `Data-Center-Bridging`)
2. Run `Test-Cluster -Node ... -Include "Storage Spaces Direct","Inventory","Network"`
3. Run `New-Cluster -Name ... -Node ... -NoStorage -StaticAddress ...`
4. Run `Enable-ClusterS2D -CacheState Enabled`
5. Run `New-Volume ...` to create a CSV ReFS volume

A. 1 → 2 → 3 → 4 → 5
B. 2 → 1 → 3 → 4 → 5
C. 1 → 3 → 2 → 4 → 5
D. 3 → 1 → 2 → 4 → 5

---

### Q19. To enable users to see ONLY the folders they have permission to access in a share, enable: *(Apply)*
A. NTFS Inheritance
B. Access-Based Enumeration (ABE)
C. Full Control deny on Everyone
D. DFS-R encryption

---

### Q20. **Yes/No** — ReFS features. *(Apply)*

**S1:** ReFS supports the `dedup` Windows Server feature.
**S2:** ReFS supports the EFS file-level encryption.
**S3:** ReFS supports block cloning for fast Hyper-V VHD ops.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. No / No / Yes

---

### Q21. Work Folders uses which transport protocol? *(Remember)*
A. SMB
B. NFS
C. HTTPS (port 443)
D. FTPS

---

### Q22. The maximum capacity of a single S2D cluster (in published guidance) is approximately: *(Remember)*
A. 256 TB
B. 1 PB
C. 4 PB
D. 16 PB

---

### Q23. Which storage feature is MOST APPROPRIATE for a backup-target volume with checksum integrity guarantees? *(Apply)*
A. NTFS with compression
B. ReFS with integrity streams enabled
C. FAT32
D. ExFAT

---

### Q24. **Yes/No** — Storage Replica scenarios. *(Analyze)*

**S1:** Storage Replica synchronous works at any distance.
**S2:** Storage Replica destination volume is mounted and readable during normal replication.
**S3:** Storage Replica can be used to migrate data to a new server with a final cutover.

A. No / No / Yes
B. Yes / Yes / Yes
C. Yes / No / Yes
D. No / Yes / No

---

### Q25. After installing DFS-N, the FIRST PowerShell command to create a domain-based namespace root is: *(Apply)*
A. `New-DfsnRoot -TargetPath "\\fs01\Shares" -Type DomainV2 -Path "\\contoso.com\Shares"`
B. `New-SmbShare -Name Shares -Path C:\Shares`
C. `Add-DfsnFolderTarget`
D. `Enable-DfsnTargetFailback`

---

### Q26. A 4-node S2D cluster needs the BEST balance of capacity efficiency and resiliency. The right resiliency choice is: *(Apply)*
A. 2-way mirror
B. 3-way mirror
C. Dual parity
D. Mirror-accelerated parity (MAP) only available 6+ nodes

---

## 🎯 Answers + Explanations

### Q1: **B. 2–16**
Memorize this range. The minimum 2 is supported but limits resiliency to 2-way mirror.

### Q2: **B. Datacenter**
S2D is a Datacenter-only feature. Standard edition is not licensed for it.

### Q3: **A. 2-way mirror only**
2 nodes can only do 2-way mirror. 3 nodes unlock 3-way mirror. 4+ unlock dual parity.

### Q4: **B. Metro pairs ≤ ~5 ms RTT with zero data loss requirement**
Sync mode requires sub-5-ms RTT for application performance. Async is for any distance.

### Q5: **C. Unmounted and inaccessible until failover**
Storage Replica's destination is offline during normal replication. Must reverse partnership to use it.

### Q6: **B. A virtual unified path like `\\contoso.com\shares` routing to physical servers**
DFS-N is a virtual namespace layer. Doesn't replicate or encrypt — just routes.

### Q7: **B. Remote Differential Compression (RDC)**
RDC sends only the changed blocks, making large-file replication efficient.

### Q8: **C. EFS file-level encryption**
ReFS has no EFS support. Use BitLocker for volume-level encryption instead.

### Q9: **C. No — boot/page file requires NTFS**
Critical exam fact. OS drive is always NTFS.

### Q10: **A. Yes / Yes / No**
S1 correct (identical hardware required), S2 correct (10 GbE min), S3 wrong (Datacenter only).

### Q11: **A. Block writes of disallowed file types**
"Active" = enforce. "Passive" = log only.

### Q12: **D. 32**
A DFS-N folder can have up to 32 targets.

### Q13: **C. Stretch cluster**
One failover cluster spanning two sites. Server-to-server is non-clustered single volumes.

### Q14: **C. No / Yes / No**
S1 wrong (DFS-R is replication, not backup). S2 correct (`ConflictAndDeleted` folder). S3 careful — sync mode protects against a single *node* failure only at the *storage* layer; broader HA needs a cluster role.

### Q15: **B. Hosted Cache**
Hosted = dedicated branch server. Distributed = peer-to-peer client caching.

### Q16: **B. CHAP and Reverse-CHAP**
Standard iSCSI auth options. No Kerberos for iSCSI targets.

### Q17: **B. Block cloning makes VHD provisioning / checkpoints near-instant**
Block cloning is ReFS's headline Hyper-V optimization.

### Q18: **A. 1 → 2 → 3 → 4 → 5**
Features → validate → cluster → enable S2D → create CSV volume. Standard deployment flow.

### Q19: **B. Access-Based Enumeration (ABE)**
ABE filters the namespace listing so users see only what they can access. Doesn't grant permissions — just hides irrelevant folders.

### Q20: **A. Yes / No / Yes**
S1 correct (Server 2019+ ReFS supports dedup), S2 wrong (no EFS), S3 correct (block cloning is the big win).

### Q21: **C. HTTPS (port 443)**
Always 443. Supports Conditional Access via Workplace Join.

### Q22: **C. 4 PB**
4 PB per cluster is the published guidance.

### Q23: **B. ReFS with integrity streams enabled**
Integrity streams detect bit-rot via checksums; on mirror volumes, ReFS auto-repairs from the redundant copy.

### Q24: **A. No / No / Yes**
S1 wrong (sync needs ≤5 ms RTT). S2 wrong (destination inaccessible). S3 correct (a common SR use case is data migration with a final cutover).

### Q25: **A. `New-DfsnRoot`**
The cmdlet to create a domain-based namespace root. Pre-req: the local share must exist on the target server first.

### Q26: **B. 3-way mirror**
3-way mirror gives best balance of resiliency and write performance on a 4-node cluster. Dual parity has worse write performance; MAP needs 6+ nodes.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Storage domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read S2D + Storage Replica + DFS sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- S2D: 2–16 nodes, 4 PB, Datacenter only, 10 GbE min
- S2D resiliency by node count (2/3/4/6+)
- Storage Replica sync ≤ 5 ms RTT; destination NOT mounted
- DFS-N = namespace; DFS-R = file replication via RDC
- ReFS = block cloning + integrity; NTFS = boot + EFS + compression
- FSRM: hard quota blocks; soft quota warns; active screen blocks; passive logs
- ABE = hide what user can't access
- BranchCache modes: Hosted (server) vs Distributed (peer)
- iSCSI Target: CHAP + Reverse-CHAP
- Work Folders: HTTPS only

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 5](../Module-05-HyperV/Reading.md)
