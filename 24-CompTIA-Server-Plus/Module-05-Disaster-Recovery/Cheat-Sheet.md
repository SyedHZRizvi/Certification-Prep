# 📋 Module 5 Cheat Sheet: Disaster Recovery & Backup

> Print. Tape. Reference under pressure.

---

## 🎯 The Two Numbers

| | Asks |
|---|---|
| **RTO (Recovery Time Objective)** | How long can we be down? |
| **RPO (Recovery Point Objective)** | How much data can we lose? |

```
disaster
   |
   v
---|------------------|--->
   ^                  ^
   |                  |
(last good)      (operational)
   <-- RPO -->   <-- RTO -->
```

---

## 💼 BIA Vocabulary

| Term | One-liner |
|---|---|
| RTO | Downtime tolerance |
| RPO | Data-loss tolerance |
| MTD | Max Tolerable Downtime (business limit) |
| WRT | Work Recovery Time (post-tech catch-up) |
| MTBF | Mean Time Between Failures (↑ better) |
| MTTR | Mean Time To Repair (↓ better) |

🧠 **MTD ≈ RTO + WRT.**

---

## 📼 Backup Types

| Type | What | Archive bit | Restore needs |
|---|---|---|---|
| **Full** | Everything | Cleared | Just the full |
| **Incremental** | Since LAST backup | Cleared | Full + every incremental in order |
| **Differential** | Since LAST FULL | NOT cleared | Full + most recent differential |
| **Synthetic full** | Built on backup server from full + incrementals | n/a | Like a full |

🚨 Snapshots ≠ backups. Same datastore = same single point of failure.

---

## 🛡️ The 3-2-1 Rule

| | What |
|---|---|
| **3** | Copies of data |
| **2** | Different media types |
| **1** | Off-site |

Modern **3-2-1-1-0**:

- + **1** immutable / air-gapped
- + **0** verified errors

---

## 🔄 GFS Tape Rotation

| Tape | Role |
|---|---|
| Son | Daily |
| Father | Weekly |
| Grandfather | Monthly |

~13 months coverage with ~22 tapes.

---

## 🏢 DR Site Tiers

| Tier | Hardware | Data | Recovery time | Cost |
|---|---|---|---|---|
| **Cold** | None/generic | None | Days-weeks | Lowest |
| **Warm** | Pre-staged | Hours-days old | Hours | Medium |
| **Hot** | Identical to prod | Live | Minutes | Highest |
| **Mobile** | Trailer-mounted | None | Days | Med-high |
| **Cloud DR** | On demand | Pre-replicated | Min-hours | Variable |

---

## 🔁 Replication (recap)

| | Sync | Async |
|---|---|---|
| RPO | **0** | > 0 |
| Distance | Metro (~ ≤ 100 km) | Continental |
| Latency tolerance | ≤ ~5 ms one-way | High |

---

## 🛟 BCP vs DR

| | BCP | DR |
|---|---|---|
| Scope | Whole business (people, comms, alt sites, supply chain) | IT systems & data |
| Owner | COO (Chief Operating Officer) / BCM | CTO (Chief Technology Officer) / IT |

**Hierarchy:** BIA → BCP → DRP (Distribution Requirements Planning) → IRP (security events).

---

## 🧪 Exercises

| Type | What |
|---|---|
| **Tabletop** | Discussion walkthrough |
| **Functional** | Hands-on partial test |
| **Full-scale** | Real failover, real users |

---

## 🧊 Ransomware-Resistant Backups

- Immutable (WORM / S3 (Simple Storage Service) Object Lock)
- Air-gapped (offline tape, removed drive)
- Separate credentials + MFA (Multi-Factor Authentication) for backup admin
- Backup server NOT joined to production AD (Active Directory)
- Different cloud account / region
- Tested restoration

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Match site tier to RTO"
- "Synchronous for metro / async for continental"
- "Test the restore"
- "Immutable + air-gapped"
- "3-2-1-1-0"
- "Log shipping every N min for RPO = N min"

❌ Often **wrong**:

- "Snapshot = backup"
- "Sync replication across continents"
- "Backups in the same AWS (Amazon Web Services) account as production"
- "Running backups = working backups"
- "Cold site for life-critical workload"
- "One backup copy is enough"

---

## 🗓️ Facts To Memorize Cold

- RTO = downtime; RPO = data loss
- Incremental clears archive bit; differential doesn't
- 3-2-1-1-0 (5 numbers)
- GFS = Grandfather/Father/Son
- Hot = mins, Warm = hours, Cold = days-weeks
- Sync ≤ ~100 km
- Tabletop = talk-only; full-scale = real failover

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. RTO vs RPO, one-liner each? ___
2. Which restore is faster, incremental or differential? ___
3. State the 3-2-1 rule. ___
4. Hot vs warm site recovery window? ___
5. Why sync replication is metro-only? ___
6. What does VSS do on Windows? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 6: Server Security & Hardening](../Module-06-Security/Reading.md)
