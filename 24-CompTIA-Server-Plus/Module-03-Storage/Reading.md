# Module 3: Storage, RAID, SAN, NAS 💾

> **Why this module matters:** Storage is the single most heavily-tested *quantitative* topic on SK0-005. You will be asked to compute usable capacity for RAID 5/6/10 with N disks under exam-time pressure. You will be asked to pick the right tier (SAN vs NAS) for a scenario. You will be asked about deduplication, thin provisioning, multipathing, and LUN masking by name. Master this module and you bank a comfortable chunk of the score.

> **Prerequisites for this module.** Before starting you should be comfortable with:
> - Modules 1–2 (hardware, basic admin)
> - Decimal arithmetic in your head, at minimum multiplying small integers
> - Basic TCP/IP (ports, IP routing)
>
> If those are shaky, pause and review before continuing.

---

## 🐟 A Story: The Aquarium Database

Meet Sam. She runs IT for a chain of 22 saltwater-fish stores. Each store has a desktop with a copy of their POS application, but the master inventory database lives on Sam's central server. Five years ago Sam bought a 1U server with **two 4 TB SATA disks in RAID 1**, mirrored, predictable, and "good enough for now."

Five years later, "now" is a lot bigger:

- The database is 1.6 TB and growing at 8 GB/week
- Backups, photos, and shipping manifests have spilled onto a USB drive bolted to the back of the server
- Last quarter a drive failed; rebuild took 11 hours and nobody could check inventory
- The CFO wants overnight reports, currently impossible because the disks max out at 200 IOPS

Sam needs to do *all* of the following in one project:

1. Add capacity without buying a whole new server
2. Get more IOPS (random reads/writes)
3. Tolerate **two** simultaneous drive failures (recent stats spooked her)
4. Stop using USB
5. Add a second copy of data to another building 800 m away, same campus, different power

This module is everything Sam needs to choose:

- **What RAID level** (the IOPS-vs-redundancy tradeoff)
- **Local vs SAN vs NAS** (block vs file, FC vs iSCSI, NFS vs SMB)
- **Thin vs thick provisioning**
- **Deduplication and tiering**
- **LUN masking and multipathing**
- **Synchronous vs asynchronous replication** (the 800-m link)

By the end you'll know what Sam should buy.

---

## 🎚️ RAID Levels, The Big Six

**RAID** = Redundant Array of Inexpensive (or Independent) Disks, coined by Patterson, Gibson & Katz at UC Berkeley in their 1988 SIGMOD paper *"A Case for Redundant Arrays of Inexpensive Disks (RAID)."* The original paper defined RAID 1–5; RAID 0 and 6 came later. Server+ tests these six.

### Quick-reference table, **MEMORIZE COLD**

| RAID | Min disks | Usable capacity | Failures tolerated | Reads | Writes | Write penalty |
|---|---|---|---|---|---|---|
| **0** (striping) | 2 | N × D | 0 | Fast | Fast | 1 |
| **1** (mirror) | 2 | 1 × D | 1 | Fast (2× read) | Slow (write twice) | 2 |
| **5** (striping + parity) | 3 | (N − 1) × D | 1 | Fast | Slower (parity calc) | 4 |
| **6** (striping + double parity) | 4 | (N − 2) × D | 2 | Fast | Slowest | 6 |
| **10** (1+0 mirror + stripe) | 4 (even) | (N / 2) × D | 1 per mirror pair | Very fast | Fast | 2 |
| **50, 60** (nested) | 6+ | varies | varies | Fast | Fast | varies |

Where N = number of disks and D = smallest disk size.

### RAID 0, Striping (no redundancy)

```
[ A1 | A2 | A3 ]   ← stripe across 3 disks
[ B1 | B2 | B3 ]
```

- **Use:** scratch/temp data, video editing render cache, tempdb where loss is acceptable.
- **Reality check:** never for production data. One disk dies, *everything* dies.

### RAID 1, Mirror

```
[ A | A ]    [ B | B ]
   1            2
```

- **Use:** boot volumes, two-disk small servers, financially-priced databases.
- **Reality check:** simple, fast, predictable. 50% capacity overhead.

### RAID 5, Striping with distributed parity

```
[ A1 | A2 | Pa ]
[ B1 | Pb | B3 ]
[ Pc | C2 | C3 ]
```

- Parity rotates across disks. Any *one* disk failure → array rebuilds from parity.
- **Write penalty 4**: read-modify-write cycle (read old data + read old parity + write new data + write new parity).
- **Reality check:** **on modern large drives (4–20 TB), rebuild times can exceed 24 hours**, during which another failure = total loss. Many shops have abandoned RAID 5 in favor of RAID 6 or 10 for arrays >4 TB.

### RAID 6, Striping with double distributed parity

```
[ A1 | A2 | Pa | Qa ]
[ B1 | Pb | Qb | B3 ]
[ Pc | Qc | C2 | C3 ]
```

- Two independent parity blocks (P + Q). Survives **two** simultaneous failures.
- **Write penalty 6**: read old data + read both parities + write new data + write both parities.
- **Reality check:** the modern standard for large bulk arrays. Slightly slower writes than RAID 5; massively safer during rebuild.

### RAID 10, Mirror + Stripe (RAID 1+0)

```
Stripe across mirrored pairs:
[ A | A ] [ B | B ]    ← pair 1     pair 2
   ↓         ↓
        Stripe
```

- 4 disks minimum, in pairs. Capacity = N/2. Survives the loss of one disk *per mirror pair*.
- **Write penalty 2**, far better than RAID 5/6 for write-heavy DB workloads.
- **Reality check:** the gold standard for **databases** (SQL, MySQL, Postgres). Best IOPS-vs-redundancy mix. 50% capacity cost.

### RAID 0+1 vs RAID 1+0 (rare but exam-trappy)

- **RAID 1+0 (10)**: mirror first, then stripe → survives one disk per mirror pair.
- **RAID 0+1**: stripe first, then mirror → one disk failure kills its entire stripe, leaving the other stripe as a single-fault-tolerant copy. Worse fault tolerance than 1+0 with same disk count.

🚨 **Trap on the exam:** if a question asks "best resiliency with 4 disks for a database", RAID 10, not 0+1.

### Nested RAID 50, 60

- **RAID 50** = RAID 5 stripes mirrored at the controller level: RAID 0 across multiple RAID 5 sets. Better large-array performance than plain RAID 5.
- **RAID 60** = same with RAID 6 sets. Combines RAID 6 safety with stripe-set performance.

### Capacity worked examples, **DRILL THIS**

| Configuration | Calculation | Usable |
|---|---|---|
| 4 × 2 TB RAID 0 | 4 × 2 | **8 TB** |
| 4 × 2 TB RAID 1 (2 mirrors of 2) | 1 × 2 (per mirror) | **2 TB** (one pair) |
| 4 × 2 TB RAID 5 | (4 − 1) × 2 | **6 TB** |
| 4 × 2 TB RAID 6 | (4 − 2) × 2 | **4 TB** |
| 4 × 2 TB RAID 10 | 4/2 × 2 | **4 TB** |
| 6 × 4 TB RAID 5 | (6 − 1) × 4 | **20 TB** |
| 6 × 4 TB RAID 6 | (6 − 2) × 4 | **16 TB** |
| 6 × 4 TB RAID 10 | 6/2 × 4 | **12 TB** |
| 8 × 1 TB RAID 5 | (8 − 1) × 1 | **7 TB** |
| 8 × 1 TB RAID 6 | (8 − 2) × 1 | **6 TB** |
| 8 × 1 TB RAID 10 | 8/2 × 1 | **4 TB** |
| 12 × 2 TB RAID 6 | (12 − 2) × 2 | **20 TB** |

Practice until each takes < 10 seconds.

### Hot spare

A **hot spare** is an extra drive sitting idle in the chassis. When the controller marks a drive failed, the hot spare auto-rebuilds in its place, no admin action needed.

- **Dedicated spare**, assigned to one specific array.
- **Global spare**, available to any array on the controller.
- **Hot spare ≠ extra capacity**, it's not part of any active array until a failure.

🎯 **Exam pattern:** *"How do you shorten the window of vulnerability after a disk failure on a RAID 5 array?"* → **Add a hot spare** so the rebuild starts immediately.

---

## 🌐 SAN vs NAS, The Categorical Difference

This is the second most-tested storage concept. Get it cold.

| | **SAN** (Storage Area Network) | **NAS** (Network-Attached Storage) |
|---|---|---|
| **Granularity** | Block-level | File-level |
| **Looks like to host** | A local disk (LUN) | A network share |
| **Protocols** | Fibre Channel (FC), iSCSI, FCoE, NVMe-oF | NFS, SMB/CIFS |
| **Network** | Dedicated SAN fabric (FC) or IP (iSCSI) | Shared LAN |
| **Typical filesystems** | Whatever the host puts on it (NTFS, ext4, XFS, VMFS) | NFS / SMB shares |
| **Use cases** | VM datastores, databases, anything needing raw block | File shares, home directories, archives |
| **Cost** | High ($) | Lower |
| **Complexity** | High (zoning, masking, multipathing) | Lower (just mount the share) |
| **Boot from?** | Yes (boot-from-SAN) | No (typically) |

### SAN protocols

| Protocol | Layer | Network | Notes |
|---|---|---|---|
| **Fibre Channel (FC)** | L2 | Dedicated FC fabric on FC switches | Highest performance; FC ports = HBA on host, FC switch fabric, storage controller; speeds 8/16/32/64 Gb/s |
| **iSCSI** | L4 (TCP) | Standard Ethernet IP network | **TCP 3260**; cheap; uses standard NICs (or iSCSI HBAs / TOE for offload); jumbo frames recommended (Module 7) |
| **FCoE** (Fibre Channel over Ethernet) | L2 | Lossless Ethernet (DCB) | Encapsulates FC frames in Ethernet; less common today |
| **NVMe-oF** (NVMe over Fabrics) | varies | RDMA (RoCE, InfiniBand) or TCP | Modern high-performance protocol for NVMe over network |

### SAN vocabulary you MUST know

- **WWN / WWPN / WWNN**, World-Wide Name / Port Name / Node Name. Like a MAC address for FC.
- **IQN**, iSCSI Qualified Name. Like a WWN for iSCSI. Format: `iqn.YYYY-MM.naming-authority:unique-name` (e.g., `iqn.2024-01.com.example:storage.lun01`).
- **Initiator**, the host (client) requesting storage.
- **Target**, the storage array exposing LUNs.
- **LUN**, Logical Unit Number; a slice of storage presented to one or more initiators as a block device.
- **Zoning** (FC), restricting which initiator WWPNs can talk to which target WWPNs at the *switch fabric* level.
- **LUN masking**, restricting which initiators can see which LUNs at the *storage array* level.
- **Multipathing (MPIO)**, multiple physical paths from host to LUN for redundancy + load balance. Windows: MPIO. Linux: `multipathd`.
- **Boot from SAN**, server has no internal boot drive; UEFI loads the bootloader from a SAN LUN.

### NAS protocols

| Protocol | Default port | Native to |
|---|---|---|
| **NFS** (Network File System) | TCP/UDP 2049 | Unix/Linux; NFS v3 stateless, v4 stateful w/ ACLs |
| **SMB / CIFS** (Server Message Block) | TCP 445 (modern) | Windows; macOS, Linux via Samba |
| **AFP** (Apple Filing Protocol) | TCP 548 | macOS (legacy), Apple now prefers SMB |

🚨 **Trap on the exam:** SMB 1.0 should be disabled everywhere, it's the EternalBlue exploit surface (NotPetya / WannaCry). Modern SMB 3.x has encryption + signing.

### Decision: SAN or NAS?

| You need… | Pick |
|---|---|
| A VM datastore the hypervisor formats with VMFS | **SAN** (block) |
| A 2 TB share for the marketing team's files | **NAS** (file) |
| A database that needs raw I/O performance | **SAN** (block) |
| Home directories for 500 users | **NAS** (file) |
| Boot from a network volume | **SAN** (boot-from-SAN) |
| Backup target for a small office | Often **NAS** (NFS/SMB) |

---

## 🗜️ Provisioning, Deduplication, and Tiering

### Thin vs thick provisioning

| | **Thin** | **Thick** |
|---|---|---|
| Allocation | On demand from a shared pool | Full capacity up front |
| Initial space used | Small | Full |
| Overcommit possible? | **Yes** | No |
| Risk | Pool fills → all thin volumes go read-only or fail | None at the pool level |
| Best for | Dev/test, environments with predictable growth | Production with strict capacity guarantees |

🎯 **Exam pattern:** *"How can you provision more LUNs than physical capacity exists?"* → **Thin provisioning**. *"How do you avoid the risk of overcommit at run time?"* → **Thick provisioning**.

### Deduplication

Storing only one copy of identical blocks (or files). Pointers replace duplicates.

| Type | When dedup happens |
|---|---|
| **Inline** | At write time (CPU cost; less I/O on disk) |
| **Post-process** | Periodically after data is written (lighter on write path, needs extra capacity) |

Common 10×–30× savings on VDI golden images, backups, mailboxes. Less on already-compressed data (video, encrypted blobs).

### Compression

Algorithmic data shrinking (LZ4, zstd), distinct from dedup. Often combined.

### Storage tiering

Move "hot" (frequently accessed) data to fast media (SSD/NVMe) and "cold" data to cheap media (SATA HDD, tape, cloud archive). Done by:

| Method | Granularity |
|---|---|
| **Manual tiering** | Per-LUN or per-volume by admin |
| **Auto-tiering** | Sub-LUN, by array policy, block heat maps |
| **Lifecycle policies** (cloud) | Object storage moves after N days (S3 → Glacier) |

---

## 🛣️ Multipathing (MPIO)

Multiple physical paths from a host to the same LUN. Provides:

- **Failover**, path A dies (HBA, cable, switch port), traffic continues on path B.
- **Load balancing**, round-robin or weighted distribution across active paths.

Without multipathing, the OS sees the same LUN as N separate disks (one per path) and may corrupt data by writing simultaneously. **Always install the multipath driver.**

- Windows: MPIO feature + vendor DSM (Device-Specific Module).
- Linux: `multipath-tools` / `multipathd`, configured in `/etc/multipath.conf`.
- VMware: built into ESXi via NMP (Native Multipathing Plugin) + PSA framework.

🚨 **Trap on the exam:** New LUN appears as four disks in the OS? You forgot multipathing.

---

## 🛡️ LUN Masking and Zoning, Who Sees What

These two terms confuse candidates. Both restrict access, but at different layers.

| Mechanism | Layer | Configured on |
|---|---|---|
| **Zoning** (FC) | Fabric (FC switch) | The FC switch |
| **LUN masking** | Storage array | The storage array |

- **Zoning** controls which initiator WWPNs can even *see* which target WWPNs at the SAN-fabric level. Coarse-grained.
- **LUN masking** controls which already-visible initiators get presented which specific LUNs. Fine-grained.

🎯 **Exam pattern:** *"After fabric login, host A still sees host B's LUN, fix?"* → **LUN masking** on the storage array.

iSCSI equivalent: **CHAP authentication** + **target ACLs** restrict initiators per LUN.

---

## 🔁 Storage Replication

Two distinct strategies on the exam:

| | **Synchronous** | **Asynchronous** |
|---|---|---|
| Write returns when | BOTH local AND remote ack | Local ack only; remote catches up |
| RPO | **0** (no data loss possible) | > 0 (data loss possible) |
| Latency tolerance | Low (typically < 5 ms one-way for metro distance) | High (continental) |
| Distance | Metro / campus (~ ≤100 km) | Continental / intercontinental |
| Cost | Higher (low-latency dark fiber, redundant links) | Lower |

🎯 **Exam pattern:** *"DC pair 2 km apart over dark fiber; RPO = 0 required."* → **Synchronous**. *"DC pair across continents; RPO = 5 min acceptable."* → **Asynchronous**.

---

## 🧪 Filesystems and Their Tradeoffs (quick reference)

| FS | Native to | Notes |
|---|---|---|
| **NTFS** | Windows | Default; ACLs, journaling, encryption (EFS), compression |
| **ReFS** | Windows | Newer; integrity streams, better large-volume support; used for Storage Spaces Direct |
| **ext4** | Linux | Default for many distros; journaling; up to 1 EB |
| **XFS** | Linux (RHEL default) | Excellent for large files/parallel I/O |
| **Btrfs** | Linux | CoW, snapshots, subvolumes; SUSE default |
| **ZFS** | Solaris / FreeBSD / Linux (OpenZFS) | CoW, integrity-checked, snapshots, dedup, compression, *the* storage filesystem |
| **VMFS** | VMware ESXi | Block clustering filesystem for VM datastores |
| **HFS+ / APFS** | macOS | Legacy / current |

---

## 🔬 Scenario Walkthrough (PBQ-style thinking), Back to Sam

> **Scenario.** Sam (the aquarium-chain CTO) needs more capacity + IOPS + double-failure tolerance + replication to a second building 800 m away. Budget is moderate; downtime tolerance is low. Pick the architecture.

**Walkthrough.**

1. **Server-internal RAID.** Replace 2× 4 TB SATA RAID 1 with **8× 2 TB SAS SSDs** in **RAID 10** behind a **hardware RAID controller with FBWC** in a 2U chassis. That's 8 TB usable, very high IOPS, survives one drive per mirror pair, and rebuilds fast.
2. **Bulk capacity tier.** Add a small **NAS** (NFS share) for photos, manifests, and the USB-drive contents. Tier old photos there; keep DB on the SSD array.
3. **Double-failure tolerance.** RAID 10 only survives one drive per pair. If Sam genuinely fears 2-disk fails, run the bulk NAS on **RAID 6** (survives 2 simultaneous) or run a **hot spare** on the RAID 10 array.
4. **Replication to the other building.** Two metro buildings, 800 m, dark fiber available → **synchronous replication** of the DB volume to a second array in building 2. RPO = 0. If WAN had been continental: asynchronous + RPO ≥ a few minutes.
5. **Backup target.** Backups land on the NAS (compressed, deduped) → off-site copy nightly to cloud or tape (covered in Module 5).
6. **Access control.** **LUN masking** at the storage array so only the DB server sees its LUN. SMB shares on the NAS scoped per-team (Module 6).
7. **Multipathing.** Both DB hosts use **MPIO** with two HBAs and two FC switches → no single path failure can take the DB offline.

This is the kind of integration question Server+ PBQs ask. Notice how every choice maps to a concept in this module.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "RAID 5 is fine for any modern array." | Rebuild times on multi-TB drives exceed safety margins. Prefer RAID 6 or RAID 10 above ~4 TB drives. |
| "RAID 10 and RAID 0+1 are the same." | RAID 10 (1+0) tolerates one disk per mirror pair. RAID 0+1 tolerates fewer scenarios with the same disk count. Always pick 1+0 unless told otherwise. |
| "SAN = network share." | SAN = block-level. NAS = file-level shares. |
| "iSCSI is slower than FC, always." | iSCSI on 25/100 GbE with jumbo frames can equal or exceed FC. The protocol isn't the bottleneck; the network is. |
| "LUN masking and zoning are the same." | Zoning = at the FC switch (fabric). LUN masking = at the storage array. Both are needed for proper segregation. |
| "Thin provisioning saves space forever." | Until the pool fills. Monitor pool consumption; alert at 70/80/90%. |
| "Dedup works equally well on everything." | Excellent on VDI/backup/email. Poor on pre-compressed media. Test before relying on a ratio. |
| "Multipathing is automatic." | The OS won't multipath unless you install the multipath driver. Skipping it = data corruption risk. |
| "Synchronous replication has unlimited distance." | Latency physics: ~5 ms ≈ 1000 km. Synchronous replication over WAN cripples application performance. Use async beyond metro distance. |
| "Hot spare = extra capacity I can use." | No, it sits idle until a drive fails. Don't count it toward usable capacity. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **RAID 0/1/5/6/10/50/60** | Striping / Mirror / Stripe+Parity / Stripe+2Parity / Mirror+Stripe / nested |
| **Hot spare** | Idle drive that auto-rebuilds on failure |
| **Write penalty** | Number of disk operations per host write (RAID 5 = 4, RAID 6 = 6, RAID 10 = 2) |
| **SAN** | Storage Area Network, block-level |
| **NAS** | Network-Attached Storage, file-level |
| **FC / FCoE** | Fibre Channel / FC over Ethernet |
| **iSCSI** | IP-based block protocol (TCP 3260) |
| **NVMe-oF** | NVMe over Fabrics (RDMA or TCP) |
| **WWN / WWPN / WWNN** | World-Wide Name / Port Name / Node Name (FC) |
| **IQN** | iSCSI Qualified Name |
| **Initiator / Target** | SAN client / SAN server |
| **LUN** | Logical Unit Number, a presented block volume |
| **Zoning** | FC fabric access control |
| **LUN masking** | Array-side access control |
| **MPIO / Multipathing** | Multiple physical paths to a LUN |
| **NFS** | Network File System (TCP/UDP 2049) |
| **SMB / CIFS** | Server Message Block (TCP 445) |
| **Thin / Thick provisioning** | On-demand vs full allocation |
| **Deduplication** | Single-instance storage of identical blocks |
| **Compression** | Algorithmic data shrinking (LZ4, zstd) |
| **Storage tiering** | Hot data on fast media, cold on cheap |
| **Synchronous / Asynchronous replication** | RPO 0 / RPO > 0 |
| **FBWC / BBWC** | Flash- / Battery-Backed Write Cache |
| **VMFS / NTFS / ReFS / ext4 / XFS / ZFS** | Filesystems |

### Acronyms cheat-row (Module 3)
| Acronym | Meaning |
|---|---|
| RAID | Redundant Array of Independent Disks |
| SAN | Storage Area Network |
| NAS | Network-Attached Storage |
| FC / FCoE | Fibre Channel / FC over Ethernet |
| iSCSI | Internet Small Computer Systems Interface |
| NVMe-oF | NVMe over Fabrics |
| WWN / WWPN / WWNN | World-Wide Name / Port Name / Node Name |
| IQN | iSCSI Qualified Name |
| LUN | Logical Unit Number |
| MPIO | Multipath I/O |
| NFS | Network File System |
| SMB / CIFS | Server Message Block / Common Internet File System |
| AFP | Apple Filing Protocol |
| HBA | Host Bus Adapter |
| DSM | Device-Specific Module (Windows MPIO plugin) |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |

---

## 📊 Case Study, Salesforce's 2016 NA14 Storage Outage

**Situation.** On 9 May 2016, Salesforce experienced a major outage of its NA14 production instance (one of dozens of US production "instances" hosting many customer orgs). Trigger: a **storage array firmware bug** that produced silent data corruption on a critical metadata volume during an upgrade. Replication faithfully copied the corruption to the DR instance, then a failover compounded the problem (Salesforce post-mortem and *RFO/Root-Cause-Analysis*, May 2016 trust.salesforce.com history; public RFC summaries).

**Outcome.** Multi-day partial outage for thousands of customer orgs. Loss of some data not present in immutable point-in-time backups. Salesforce explicitly restructured its **storage architecture** afterward, adding more frequent immutable snapshots, additional path isolation, and stricter pre-upgrade integrity verification on metadata volumes.

**Lesson for the exam / for practitioners.**

- **Replication is not backup.** If you replicate corruption, you have two corrupt copies. Always pair replication with versioned/immutable backups (Module 5).
- **Firmware is software.** Storage controllers run firmware that can have bugs. Stage upgrades through dev → QA → prod. Have rollback paths.
- **Integrity checks matter.** Modern filesystems (ZFS, ReFS, Btrfs) include block-level checksums that flag silent corruption. Older filesystems (NTFS classic, ext4) do not.
- **Multipathing alone does not protect against logical corruption.** It protects against *path* failure. Different problem.
- **DR plans must include "what if the live and DR are both wrong?"** Air-gapped, immutable, off-site copy is the only insurance.

This is the scenario Server+ tests when asking "design a storage strategy that survives both hardware and software faults." The answer is **layered**: RAID + replication + immutable backups + integrity checks + tested restores.

**Discussion (Socratic).**
- **Q1:** Sam from this module's opening story is considering RAID 5 because it's cheaper. Argue both sides of "RAID 5 on 4× 8 TB drives" for her DB volume.
- **Q2:** Synchronous replication eliminates RPO at the cost of latency. A 50-ms RTT to the DR site is added to *every* write. For a 10,000 TPS database, what does that do, and how would you architect around it?
- **Q3:** An organization has SAN, NAS, and cloud object storage. How do you decide which workload lives where? Build a 3-bucket decision tree.

---

## ✅ Module 3 Summary

You now know:

- 🎚️ All six **RAID levels** min disks, capacity formula, fault tolerance, write penalty and can compute usable capacity in your head
- 🌐 The categorical difference between **SAN (block)** and **NAS (file)** + protocols (FC, iSCSI, FCoE, NVMe-oF, NFS, SMB)
- 🛡️ How **zoning** (FC) and **LUN masking** (array) work, and why you need both
- 🛣️ Why **multipathing** matters and how it's implemented per OS
- 🗜️ **Thin vs thick provisioning**, **dedup**, **compression**, **storage tiering**
- 🔁 **Synchronous vs asynchronous replication**, and when to pick each
- 🧪 The main server filesystems (NTFS, ReFS, ext4, XFS, ZFS, VMFS)

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 4, Virtualization & Containers](../Module-04-Virtualization/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 4](../Module-04-Virtualization/Reading.md) sits hypervisors on top of these storage tiers (datastores, VMDK/VHDX, NFS); [Module 5](../Module-05-Disaster-Recovery/Reading.md) builds backups and DR atop snapshots, replication, and tape; [Module 7](../Module-07-Networking/Reading.md) covers jumbo frames and iSCSI VLANs; [Module 8](../Module-08-Troubleshooting/Reading.md) diagnoses array LEDs, paths, and slow rebuilds.
> - Cross-course: **AWS Solutions Architect** Module on storage covers EBS, EFS, FSx, S3 in the same conceptual frame. **Azure Administrator** maps to Managed Disks, Azure Files, Blob Storage tiers.
> - Practice: Practice Exam 1 has ~11 questions from this module; the Final Mock has ~16.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Patterson, D. A., Gibson, G., & Katz, R. H. (1988). *"A Case for Redundant Arrays of Inexpensive Disks (RAID)."* SIGMOD 1988. (The original RAID paper.)
- 📄 SNIA, *Common RAID Disk Drive Format (DDF) Specification*, SNIA Storage Management Initiative documentation
- 📄 IETF RFC 3720 (2004), *Internet Small Computer Systems Interface (iSCSI)*
- 📄 IETF RFC 3530 / 7530, NFS v4 / 4.1 protocol
- 📄 Microsoft, *MS-SMB2 Server Message Block (SMB) Protocol Version 2 and 3 Specification*

**Case-study sources:**
- 📄 Salesforce trust.salesforce.com, public RFOs (Reasons for Outage) for NA14 (May 2016) and subsequent outages
- 📄 Andrew Brunton, "Why RAID 5 still works for SMBs", community technical write-up
- 📄 BackBlaze hard-drive stats, annualized failure rate data (public quarterly reports)

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF)
- 📖 [Professor Messer SK0-005 videos](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)
- 📖 Mike Meyers, *CompTIA Server+ All-in-One Exam Guide, 5th ed.*, storage chapters
- 📖 Bruce Schneier-style breakdowns of array vendor whitepapers (Pure, NetApp, Dell EMC)
