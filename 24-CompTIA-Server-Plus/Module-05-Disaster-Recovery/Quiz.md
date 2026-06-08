# ✏️ Module 5 Quiz: Disaster Recovery & Backup

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. RTO measures: *(Remember)*
A. How much data loss is tolerable
B. How long the system can be down
C. How long backups take
D. How many copies exist

---

### Q2. RPO measures: *(Remember)*
A. How long the system can be down
B. How much data loss (measured in time) is tolerable
C. The size of the backup
D. The number of tape drives needed

---

### Q3. A database must lose no more than 5 minutes of transactions in any disaster. This is a statement of: *(Apply)*
A. RTO = 5 min
B. RPO = 5 min
C. MTBF = 5 min
D. MTTR = 5 min

---

### Q4. The email server must be operational within 1 hour of any outage. This is a statement of: *(Apply)*
A. RTO = 1 hr
B. RPO = 1 hr
C. MTD = 1 hr
D. SLA = 1 hr

---

### Q5. Incremental backups: *(Understand)*
A. Back up files changed since the last FULL backup; do not clear the archive bit
B. Back up files changed since the LAST backup of any type; clear the archive bit
C. Always re-do a full backup
D. Are only available on tape

---

### Q6. Differential backups: *(Understand)*
A. Back up files changed since the last FULL backup; do NOT clear the archive bit
B. Back up files changed since the LAST backup of any type
C. Are smaller than incremental every day
D. Replace the need for full backups

---

### Q7. Restore on Thursday using an **incremental** schedule that ran Full on Sunday and incrementals Mon-Wed requires: *(Apply)*
A. Sun full only
B. Sun full + Wed incremental only
C. Sun full + Mon + Tue + Wed incrementals, in order
D. Wed incremental only

---

### Q8. Restore on Thursday using a **differential** schedule that ran Full on Sunday and differentials Mon-Wed requires: *(Apply)*
A. Sun full + Wed differential
B. Sun full + Mon + Tue + Wed differentials
C. Wed differential only
D. Sun full only

---

### Q9. A **synthetic full** backup is BEST described as: *(Understand)*
A. A fake backup that cannot be restored
B. A "full" assembled on the backup server from an earlier full + subsequent incrementals, no read from production
C. A full backup taken nightly during business hours
D. A clone of a snapshot

---

### Q10. The 3-2-1 backup rule prescribes: *(Remember)*
A. 3 backups per week, 2 tapes, 1 cloud
B. 3 copies of data, on 2 different media types, with 1 off-site
C. 3 RAID arrays
D. 3 administrators

---

### Q11. The modern 3-2-1-1-0 variant adds: *(Understand)*
A. 1 cloud copy and 0 tapes
B. 1 immutable / air-gapped copy and 0 verified errors
C. 1 admin and 0 vacations
D. 1 IPS device and 0 honeypots

---

### Q12. GFS stands for: *(Remember)*
A. Global File System
B. Grandfather-Father-Son rotation
C. Generic File Storage
D. Group Failover Site

---

### Q13. A **hot site** is BEST described as: *(Understand)*
A. A site with no equipment, just power and HVAC
B. A site with pre-staged equipment but stale data
C. A continuously synchronized, near-instant-cutover mirror of production
D. A trailer that arrives after a disaster

---

### Q14. A **cold site** is BEST described as: *(Understand)*
A. A site with running mirrored systems and live data
B. A facility with power and HVAC but no servers/data, days to weeks to bring up
C. A trailer site
D. A cloud DR region

---

### Q15. Two data centers 65 km apart over dark fiber. Application needs RPO = 0. Replication should be: *(Apply)*
A. Daily backup to tape
B. Synchronous replication
C. Asynchronous with 24-hour delay
D. No replication

---

### Q16. Two data centers 3,000 km apart over WAN. Synchronous replication for RPO = 0 would: *(Analyze)*
A. Work perfectly
B. Add round-trip WAN latency to every write, crippling application performance, use asynchronous
C. Save money
D. Make backups smaller

---

### Q17. Code Spaces (2014) collapsed because: *(Analyze)*
A. They had no insurance
B. Their production AND backups lived in the same AWS account; once the attacker got root, everything was deleted
C. They lost their domain name
D. Their CEO resigned

---

### Q18. Which of the following BEST satisfies the 3-2-1 rule? *(Apply)*
A. Two copies on two RAID arrays in the same rack
B. Production + on-site disk backup + nightly replicated copy to a cloud region in a different geography
C. Single nightly backup to USB drive left on the server
D. Three copies all in one folder

---

### Q19. A backup completes successfully every night for 6 months. The team is confident they can restore. Confidence is justified ONLY when: *(Evaluate)*
A. The backup software shows green checkmarks
B. Periodic file-level + full-system restore tests have actually been performed
C. The tapes are in a fireproof safe
D. The backup admin says so

---

### Q20. Immutable backups protect against: *(Understand)*
A. Disk failures only
B. Ransomware or malicious deletion within the retention window
C. Power outages
D. Slow networks

---

### Q21. Volume Shadow Copy Service (VSS) on Windows: *(Apply)*
A. Replaces backup software entirely
B. Quiesces applications (SQL, Exchange, etc.) to create application-consistent snapshots for backup
C. Encrypts backup tapes
D. Is identical to ZFS snapshots

---

### Q22. Asynchronous replication implies: *(Understand)*
A. RPO = 0
B. RPO > 0 (some data loss possible at the moment of failure)
C. RTO = 0
D. No data loss ever

---

### Q23. Mean Time Between Failures (MTBF) is a measure where: *(Remember)*
A. Smaller is better
B. Larger is better
C. Always 8 hours
D. Always equals MTTR

---

### Q24. The IT subset of a Business Continuity Plan is the: *(Understand)*
A. BIA
B. IRP
C. DRP (Disaster Recovery Plan)
D. CMDB

---

### Q25. A **tabletop exercise** is: *(Understand)*
A. A discussion-based walkthrough of a scenario, no real failover
B. A full live failover to DR
C. A penetration test
D. A restore-only drill

---

### Q26. *Design exercise.* You are designing DR for a hospital's EMR: RPO ≤ 15 min, RTO ≤ 2 hr, 24×7 operation, must survive any single site loss including ransomware. Pick the combination: *(Create)*

A. Daily backup to a USB drive on the same shelf as the server
B. Asynchronous log shipping to a 25-km warm site every 5 min; daily backup to on-site disk; nightly replica to cloud with **S3 Object Lock immutability**; quarterly tested DR failover
C. Single backup to tape stored on the same floor as production
D. RAID 5 inside the same server with no replication

---

## 🎯 Answers + Explanations

### Q1: **B. How long the system can be down**
RTO = Recovery Time Objective, the downtime tolerance.

### Q2: **B. How much data loss (measured in time) is tolerable**
RPO = Recovery Point Objective, how stale the data can be after recovery.

### Q3: **B. RPO = 5 min**
The statement bounds *data loss*, not downtime. That's RPO.

### Q4: **A. RTO = 1 hr**
Bound on downtime → RTO.

### Q5: **B. Back up files changed since the LAST backup of any type; clear the archive bit**
Incremental relative to *any* prior backup; clears archive bit so the next incremental only sees newer changes.

### Q6: **A. Back up files changed since the last FULL backup; do NOT clear the archive bit**
Differential cumulative since last full; archive bit stays set until next full.

### Q7: **C. Sun full + Mon + Tue + Wed incrementals, in order**
Incrementals only contain changes since the prior incremental, you need all of them in sequence.

### Q8: **A. Sun full + Wed differential**
Differential = everything changed since the last full → Wed differential contains everything from Mon, Tue, Wed combined.

### Q9: **B. A "full" assembled on the backup server from an earlier full + subsequent incrementals, no read from production**
Modern enterprise backup software builds synthetic fulls on its own storage, saving production I/O.

### Q10: **B. 3 copies of data, on 2 different media types, with 1 off-site**
The universally cited rule from Peter Krogh's *The DAM Book*.

### Q11: **B. 1 immutable / air-gapped copy and 0 verified errors**
Adds ransomware resistance + verified restorability to the classic 3-2-1.

### Q12: **B. Grandfather-Father-Son rotation**
Monthly / weekly / daily tape strategy.

### Q13: **C. A continuously synchronized, near-instant-cutover mirror of production**
Hot = live, ready to take traffic in minutes.

### Q14: **B. A facility with power and HVAC but no servers/data, days to weeks to bring up**
Cold = empty shell. Cheapest, slowest.

### Q15: **B. Synchronous replication**
Metro distance + RPO = 0 → synchronous is the textbook fit.

### Q16: **B. Add round-trip WAN latency to every write, crippling application performance, use asynchronous**
At 3,000 km the RTT is ~30+ ms; every write would wait. Use async + acceptable RPO.

### Q17: **B. Their production AND backups lived in the same AWS account; once the attacker got root, everything was deleted**
The cautionary tale of "no separation between production and backups."

### Q18: **B. Production + on-site disk backup + nightly replicated copy to a cloud region in a different geography**
Three copies (prod + disk + cloud), two media (disk + cloud), one off-site (cloud, different geo).

### Q19: **B. Periodic file-level + full-system restore tests have actually been performed**
"Successful backup runs" does not equal "restorable backup." Test it.

### Q20: **B. Ransomware or malicious deletion within the retention window**
WORM-style immutability prevents *anyone* including a compromised backup admin from deleting/modifying backups during the retention window.

### Q21: **B. Quiesces applications (SQL, Exchange, etc.) to create application-consistent snapshots for backup**
VSS is Windows' framework for app-consistent snapshots. Without it, backups risk capturing the app mid-write.

### Q22: **B. RPO > 0 (some data loss possible at the moment of failure)**
Async writes return locally before remote ack → if the source dies before replication catches up, there's a gap.

### Q23: **B. Larger is better**
Mean Time Between Failures, longer between failures = more reliable.

### Q24: **C. DRP (Disaster Recovery Plan)**
DRP is the IT subset. BCP is the broader business plan. BIA is the analysis that sets RTO/RPO. IRP is for security incidents.

### Q25: **A. A discussion-based walkthrough of a scenario, no real failover**
Tabletop = talk through it. Functional = hands-on partial test. Full-scale = real failover.

### Q26: **B. Asynchronous log shipping to a 25-km warm site every 5 min; daily backup to on-site disk; nightly replica to cloud with S3 Object Lock immutability; quarterly tested DR failover**
This satisfies all requirements: 5-min log shipping ≤ 15-min RPO; warm site → 2-hr RTO; daily backup + cloud + immutability = 3-2-1-1-0 and ransomware resistance; tested DR = verified. Options A, C, D fail on every front.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 5 mastered.
- 21–24/26 → ✅ Solid.
- 17–20/26 → ⚠️ Re-read backup types + site tiers.
- <17/26 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- RTO vs RPO definitions
- 4 backup types: full/incremental/differential/synthetic + archive bit + restore complexity
- 3-2-1 + 3-2-1-1-0
- GFS rotation
- Hot/warm/cold/mobile/cloud sites + recovery windows
- Sync vs async + distance thresholds
- BIA → BCP → DRP → IRP hierarchy
- Tabletop / functional / full-scale exercises
- VSS purpose + immutability

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Server Security & Hardening](../Module-06-Security/Reading.md)
