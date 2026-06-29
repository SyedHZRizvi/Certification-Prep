# 📋 Module 3 Cheat Sheet: Storage

> Print. Tape. Drill. Drill again.

---

## 🎚️ RAID Quick Reference

| RAID | Min | Capacity | Failures | Write penalty |
|---|---|---|---|---|
| **0** | 2 | N × D | 0 | 1 |
| **1** | 2 | 1 × D | 1 | 2 |
| **5** | 3 | (N − 1) × D | 1 | **4** |
| **6** | 4 | (N − 2) × D | 2 | **6** |
| **10** | 4 (even) | N/2 × D | 1 per pair | 2 |

🧠 **DRILL.** 6 × 4 TB:

- RAID 5 = 20 TB · RAID 6 = 16 TB · RAID 10 = 12 TB

🧠 **RAID 10 ≠ RAID 0+1**. Pick 1+0 unless told otherwise.

🚨 Modern large drives → prefer RAID 6 or 10 over RAID 5.

---

## 🔥 Hot Spare

Idle drive that auto-rebuilds on failure.
- **Dedicated**: one specific array
- **Global**: any array on the controller
- **NOT** part of usable capacity

---

## 🌐 SAN vs NAS

| | SAN | NAS |
|---|---|---|
| Granularity | **Block** | **File** |
| Looks like | Local disk (LUN) | Network share |
| Protocols | FC, iSCSI, FCoE, NVMe-oF | NFS, SMB |
| Network | Dedicated fabric (FC) or IP (iSCSI) | Shared LAN (Local Area Network) |
| Boot from? | Yes | No |
| Best for | VM (Virtual Machine) datastores, DB | File shares, home dirs |

---

## 🔌 Storage Ports

| Protocol | Port / fabric |
|---|---|
| **iSCSI** | TCP (Transmission Control Protocol) 3260 |
| **NFS** | TCP/UDP (User Datagram Protocol) 2049 |
| **SMB / CIFS** | TCP 445 |
| AFP (legacy) | TCP 548 |
| FC | dedicated FC fabric (no IP) |
| FCoE | Ethernet w/ DCB |

---

## 🏷️ SAN Names

| Name | What |
|---|---|
| **WWN / WWPN / WWNN** | FC World-Wide Name (port/node) |
| **IQN** | iSCSI Qualified Name (`iqn.YYYY-MM.authority:unique`) |
| **Initiator** | Client requesting storage |
| **Target** | Array exposing LUN |
| **LUN** | A presented block volume |

---

## 🛡️ Access Control Layers

| Mechanism | Layer |
|---|---|
| **Zoning** (FC) | FC switch fabric |
| **LUN masking** | Storage array |
| **CHAP / target ACL** (iSCSI) | Storage array |

🧠 **Both** zoning and masking, different layers, both needed.

---

## 🛣️ Multipathing (MPIO)

Multiple paths → failover + load balance.

- Windows: **MPIO** + vendor DSM
- Linux: **multipathd** (`/etc/multipath.conf`)
- VMware: native NMP + PSP

🚨 Without it, OS sees one LUN as N disks → corruption risk.

---

## 🗜️ Provisioning, Dedup, Tiering

| | Thin | Thick |
|---|---|---|
| Alloc | On demand | Up front |
| Overcommit | **Yes** | No |
| Risk | Pool fills | None at pool |

| Dedup type | When |
|---|---|
| Inline | At write time |
| Post-process | Periodically afterward |

Best dedup ratios: backups (10–30×), VDI golden images, mailboxes.

**Tiering**: hot → SSD/NVMe; cold → SATA HDD / tape / cloud.

---

## 🔁 Replication

| | Sync | Async |
|---|---|---|
| RPO (Recovery Point Objective) | **0** | > 0 |
| Distance | Metro (≤ ~100 km) | Continental |
| Latency | ≤ ~5 ms one-way | Tolerant |
| Cost | High | Lower |

---

## 📁 Filesystems (one-liners)

NTFS = Windows ACL+journal · ReFS = Win integrity streams · ext4 = Linux default · XFS = RHEL large files · Btrfs = SUSE CoW · ZFS = CoW+snapshots+dedup+integrity · VMFS = ESXi block cluster.

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Add a hot spare to shrink the rebuild window"
- "RAID 10 for databases (write penalty = 2)"
- "RAID 6 for large bulk arrays (survives 2 fails)"
- "Install MPIO before mapping the LUN"
- "Use LUN masking on the array"
- "Synchronous = metro; async = continental"

❌ Often **wrong**:

- "RAID 0+1 is the same as RAID 10"
- "Replication is backup"
- "Thin provisioning has no risk"
- "One PSU is enough"
- "Skip multipathing, OS handles it"
- "Synchronous across continents"

---

## 🗓️ Facts To Memorize Cold

- iSCSI 3260 · NFS 2049 · SMB 445
- RAID min disks: 0=2, 1=2, 5=3, 6=4, 10=4
- Capacity formulas (memorize all 5)
- Write penalty: 5→4, 6→6, 10→2
- Zoning = switch; LUN masking = array
- Sync ≤ ~100 km; async otherwise

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. 8 × 4 TB RAID 6 usable? ___
2. SAN vs NAS, block or file? ___
3. iSCSI port? ___
4. Zoning vs LUN masking, which layer is each? ___
5. MPIO, what does it protect against? ___
6. RPO of synchronous replication? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 4: Virtualization & Containers](../Module-04-Virtualization/Reading.md)
