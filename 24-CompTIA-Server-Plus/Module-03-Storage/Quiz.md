# ✏️ Module 3 Quiz: Storage — RAID, SAN, NAS

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The minimum number of disks for RAID 6 is: *(Remember)*
A. 2
B. 3
C. 4
D. 5

---

### Q2. 6 × 4 TB disks in RAID 5 yields usable capacity of: *(Apply)*
A. 8 TB
B. 16 TB
C. 20 TB
D. 24 TB

---

### Q3. 8 × 2 TB disks in RAID 6 yields usable capacity of: *(Apply)*
A. 8 TB
B. 12 TB
C. 14 TB
D. 16 TB

---

### Q4. 6 × 4 TB disks in RAID 10 yields usable capacity of: *(Apply)*
A. 8 TB
B. 12 TB
C. 16 TB
D. 24 TB

---

### Q5. RAID 10 survives the loss of: *(Understand)*
A. Any one disk only, total
B. One disk per mirror pair
C. Any two disks
D. Three disks

---

### Q6. The MOST critical reason RAID 5 has fallen out of favor for large modern drives is: *(Analyze)*
A. It costs more than RAID 6
B. Rebuild times on multi-TB drives create a long window of vulnerability where a second failure causes total data loss
C. It is no longer supported by RAID controllers
D. It uses more electricity

---

### Q7. The TCP port for iSCSI is: *(Remember)*
A. 22
B. 445
C. 2049
D. 3260

---

### Q8. NFS uses the default port: *(Remember)*
A. 80
B. 445
C. 2049
D. 3306

---

### Q9. SMB uses the default port (modern): *(Remember)*
A. 137
B. 139
C. 443
D. 445

---

### Q10. SAN provides what level of access compared to NAS? *(Understand)*
A. File-level; SAN is the "shared folder" model
B. Block-level; the host treats SAN volumes like local disks
C. Object-level only
D. Stream-level only

---

### Q11. An iSCSI Qualified Name (IQN) format begins with: *(Remember)*
A. `wwpn:`
B. `iqn.YYYY-MM.<naming-authority>:<unique>`
C. `iscsi://`
D. `lun://`

---

### Q12. Zoning is enforced at the: *(Understand)*
A. Storage array
B. Host BIOS
C. FC switch fabric
D. Backup server

---

### Q13. LUN masking is enforced at the: *(Understand)*
A. Storage array
B. FC switch fabric
C. Host BIOS
D. Backup server

---

### Q14. A new LUN appears in Windows as four separate disks. The MOST likely cause is: *(Apply)*
A. The array is broken
B. The host has four paths to the LUN but no MPIO/multipathing driver installed
C. Windows requires four disks per LUN
D. The LUN is undersized

---

### Q15. Thin provisioning's primary risk is: *(Understand)*
A. Slow read speeds
B. The shared pool filling up while thin volumes still report free space, causing application-level errors
C. Per-volume capacity limits
D. Mandatory deduplication

---

### Q16. Deduplication is MOST effective on: *(Apply)*
A. Already-compressed video files
B. Backup data and VDI golden images
C. Random binary noise
D. Encrypted blobs

---

### Q17. Two data centers 80 km apart connected by 5 ms round-trip dark fiber. The application requires RPO = 0. Replication should be: *(Apply)*
A. Asynchronous
B. Synchronous
C. Tape-based
D. Manual

---

### Q18. Two data centers 4,000 km apart with 60 ms round-trip WAN. Strict RPO = 0 over this link would cause: *(Analyze)*
A. No problem at all
B. Severe write-latency penalties — synchronous replication is impractical at this distance; pick async with an acceptable RPO
C. Improved performance
D. No change in behavior

---

### Q19. SAS drives have which physical advantage over SATA for enterprise SAN/storage? *(Understand)*
A. Lower power consumption only
B. **Dual-port** connectivity for path redundancy
C. Cheaper $/TB
D. Higher RPM in all cases

---

### Q20. A storage array's hot spare is: *(Understand)*
A. An extra drive that counts as part of the usable capacity
B. An idle drive that automatically rebuilds in place of a failed array member
C. A backup tape always loaded
D. A second controller

---

### Q21. The write penalty for RAID 5 is: *(Remember)*
A. 1
B. 2
C. 4
D. 6

---

### Q22. The write penalty for RAID 6 is: *(Remember)*
A. 1
B. 2
C. 4
D. 6

---

### Q23. The write penalty for RAID 10 is: *(Remember)*
A. 1
B. 2
C. 4
D. 6

---

### Q24. A small office wants a single device that exposes a CIFS share AND NFS exports for cross-platform clients. The MOST appropriate choice is: *(Apply)*
A. A SAN with FC HBAs only
B. A NAS appliance that supports both SMB and NFS protocols
C. A USB drive
D. Tape autoloader

---

### Q25. After completing a SAN switch-fabric configuration, the host can still see another host's LUNs. The fix is to: *(Analyze)*
A. Disable zoning and rely on host firewalls
B. Configure **LUN masking** on the storage array so only the intended initiator(s) see each LUN
C. Reinstall Windows
D. Disable MPIO

---

### Q26. *Design exercise.* A 200-user law firm needs (a) a fast volume for the legal-billing database, (b) bulk capacity for archived case files growing 1 TB/quarter, (c) cross-platform share access (Windows + Mac + Linux paralegals), (d) survival of any single drive failure with rebuild fast enough to complete during business hours, (e) replication to a colo 12 km away with RPO = 0. Pick the storage architecture: *(Create)*

A. Single RAID 0 array with USB backup; cloud sync nightly
B. SAN with RAID 10 SSD LUN for DB + NAS appliance with RAID 6 SATA for archives, presenting SMB and NFS shares; synchronous replication of the DB LUN to the colo over dark fiber
C. All data on a single thin-provisioned LUN, no replication
D. RAID 5 with no spare on all drives; manual tape weekly

---

## 🎯 Answers + Explanations

### Q1: **C. 4**
RAID 6 needs 4 disks minimum: 2 for data, 2 for the dual parity blocks (P and Q). RAID 5 minimum is 3.

### Q2: **C. 20 TB**
(N − 1) × D = (6 − 1) × 4 = 20 TB.

### Q3: **B. 12 TB**
(N − 2) × D = (8 − 2) × 2 = 12 TB.

### Q4: **B. 12 TB**
N/2 × D = 6/2 × 4 = 12 TB.

### Q5: **B. One disk per mirror pair**
RAID 10 = stripe of mirrors. Each mirror pair can lose one disk; losing both in the same pair = total loss. With 6 disks (3 pairs), you can survive up to 3 simultaneous failures *if* each is in a different pair.

### Q6: **B. Rebuild times on multi-TB drives create a long window of vulnerability where a second failure causes total data loss**
A 12 TB drive rebuild can take 24+ hours. During that time, an array of similar-age drives is statistically much more likely to suffer a second failure (URE, mechanical fatigue). RAID 5 only tolerates one failure → total loss.

### Q7: **D. 3260**
iSCSI = TCP 3260.

### Q8: **C. 2049**
NFS = TCP/UDP 2049.

### Q9: **D. 445**
Modern SMB (SMB 2/3) = TCP 445. Legacy NetBIOS-over-TCP/IP (139, 137-138) is deprecated.

### Q10: **B. Block-level; the host treats SAN volumes like local disks**
SAN presents LUNs that look like local disks to the OS; the OS formats them with NTFS/VMFS/ext4 etc. NAS presents file-level shares (NFS/SMB).

### Q11: **B. `iqn.YYYY-MM.<naming-authority>:<unique>`**
Example: `iqn.2024-01.com.example:storage.lun01`. Defined in RFC 3720/3721.

### Q12: **C. FC switch fabric**
Zoning is configured on FC switches (Brocade, Cisco MDS). It controls which initiator WWPNs can see which target WWPNs at the *fabric* layer.

### Q13: **A. Storage array**
LUN masking lives on the storage array (controller). It defines which initiators (by WWPN/IQN) are presented which LUNs.

### Q14: **B. The host has four paths to the LUN but no MPIO/multipathing driver installed**
Without a multipath driver, the OS sees each path as a separate disk. Install MPIO (Windows) / multipathd (Linux) and configure the array's vendor DSM.

### Q15: **B. The shared pool filling up while thin volumes still report free space, causing application-level errors**
Thin provisioning overcommits the pool. When the pool fills, hosts whose volumes still appear to have free space suddenly cannot write. Monitor pool consumption with alerts at 70/80/90%.

### Q16: **B. Backup data and VDI golden images**
Backups have massive duplication. VDI golden images differ by minimal user-data deltas. 10×–30× savings are typical. Pre-compressed/encrypted data dedupes poorly.

### Q17: **B. Synchronous**
80 km / 5 ms RTT is within metro range where synchronous replication is practical and RPO = 0 is required.

### Q18: **B. Severe write-latency penalties — synchronous replication is impractical at this distance; pick async with an acceptable RPO**
Light-in-fiber latency is ~5 ms per 1000 km one way. 4,000 km is ~40 ms one way / 80 ms round-trip even before equipment overhead. Synchronous writes wait for that on every write — application throughput collapses. Use async.

### Q19: **B. Dual-port connectivity for path redundancy**
SAS drives have two ports, allowing connections to two HBAs/controllers. SATA has one. This is core to enterprise reliability.

### Q20: **B. An idle drive that automatically rebuilds in place of a failed array member**
The hot spare sits unused until a failure, then the controller auto-incorporates it. Not part of usable capacity.

### Q21: **C. 4**
RAID 5 write penalty = 4 (read old data + read old parity + write new data + write new parity).

### Q22: **D. 6**
RAID 6 write penalty = 6 (two parity blocks → read/write both).

### Q23: **B. 2**
RAID 10 write penalty = 2 (write to both mirrors). Best of the redundant levels for write performance.

### Q24: **B. A NAS appliance that supports both SMB and NFS protocols**
A modern NAS exposes the same volumes via both SMB (Windows/Mac) and NFS (Linux/Mac). One device, all clients.

### Q25: **B. Configure LUN masking on the storage array so only the intended initiator(s) see each LUN**
After fabric login, hosts can see all unrestricted LUNs unless the array masks them. LUN masking is the array-side defense.

### Q26: **B. SAN with RAID 10 SSD LUN for DB + NAS appliance with RAID 6 SATA for archives, presenting SMB and NFS shares; synchronous replication of the DB LUN to the colo over dark fiber**
Each storage need is matched to a fit-for-purpose tier: RAID 10 SSD for transactional DB, RAID 6 SATA for cheap bulk archive, NAS for cross-platform sharing. Replication is synchronous because 12 km / metro distance + RPO 0 is the right pattern. A, C, D each fail multiple requirements.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 3 mastered.
- 21–24/26 → ✅ Solid.
- 17–20/26 → ⚠️ Drill RAID math + SAN/NAS distinctions.
- <17/26 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- 6 RAID levels: min disks, capacity formula, fault tolerance, write penalty
- Ports: iSCSI 3260, NFS 2049, SMB 445, FC (no IP port — FC fabric)
- WWN / WWPN / WWNN / IQN
- Zoning (FC switch) vs LUN masking (array)
- MPIO purpose + per-OS implementation
- Thin vs thick provisioning + the overcommit risk
- Sync vs async replication + the distance thresholds

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4 — Virtualization & Containers](../Module-04-Virtualization/Reading.md)
