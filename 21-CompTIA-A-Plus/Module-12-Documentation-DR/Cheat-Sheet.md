# 📋 Module 12 Cheat Sheet: Documentation, Change & DR

> One page. Print it. This is the closer.

---

## 💾 3-2-1 (and 3-2-1-1-0) Backup Rule

```
3 copies of data
2 different media types
1 off-site copy
+ 1 immutable / air-gapped (modern)
+ 0 errors (TESTED!)
```

---

## 📍 Recovery Objectives

| Term | Meaning |
|------|---------|
| **RPO (Recovery Point Objective)** | Max acceptable data loss (in time) |
| **RTO (Recovery Time Objective)** | Max acceptable downtime |
| **MTBF** | Average time between failures |
| **MTTR** | Average time to repair / recover |

🎯 RPO = how often to back up. RTO = how fast to restore.

---

## 🔄 Backup Types

| Type | Backup size | Restore time |
|------|-------------|--------------|
| Full | Largest | Fastest (one set) |
| Incremental | Smallest | Slowest (full + every inc) |
| Differential | Medium | Medium (full + last diff) |
| Synthetic full | (combined offline) | Fast |
| Snapshot | Very small | Very fast |

---

## 🏔️ DR Sites

| Type | RTO | Cost |
|------|-----|------|
| **Hot** | Minutes | $$$$ |
| **Warm** | Hours | $$$ |
| **Cold** | Days | $ |

**Cloud variants:** Pilot Light → Warm Standby → Active-Active

**BCP** = whole business · **DR** = IT subset

---

## 🎫 Ticket Lifecycle + Severity

```
NEW → ASSIGNED → IN PROGRESS → PENDING → RESOLVED → CLOSED
```

| Sev | Type | Response |
|-----|------|----------|
| P1 | Critical/down | 15 min |
| P2 | User can't work | 1 hour |
| P3 | Workaround exists | 4 hr |
| P4 | Inconvenience | 1 day |
| P5 | Request / info | 3 days |

---

## 📖 Documentation Types

| Doc | Purpose |
|-----|---------|
| Ticket | Per-incident |
| KB article | Recurring solution |
| Runbook | Task-specific steps |
| SOP (Standard Operating Procedure) | Recurring process |
| CMDB | Asset + dependency inventory |
| Network diagram | Topology |
| Change record | What changed, when, by whom |
| Incident report | Post-event analysis |

---

## 🔄 Change Record Must Include

✅ Description + business reason
✅ Impact analysis
✅ **Backout plan**
✅ Test results
✅ Maintenance window
✅ Approvals (CAB)
✅ Verification step

---

## 🛡️ Ransomware-Resilient Backup

| Feature | Why |
|---------|-----|
| Immutable storage | Can't be modified for retention period |
| Air-gapped | Physically disconnected |
| MFA (Multi-Factor Authentication)-delete | Hardware key needed to remove |
| Versioning | Historical recovery |
| Separate auth domain | Production AD (Active Directory) compromise doesn't kill backups |

---

## 🧪 Test Cadence

- **Tabletop**, yearly minimum
- **Walkthrough**, yearly
- **Partial restore**, quarterly
- **Full DR drill**, annually

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Test backups quarterly"
- "3-2-1 minimum, 3-2-1-1-0 modern"
- "Document the change BEFORE implementing"
- "Backout plan required"
- "RPO drives backup frequency; RTO drives architecture"
- "Reopen the ticket if user not satisfied"
- "Immutable + air-gapped for ransomware defense"

❌ Often **wrong**:

- "RAID = backup"
- "Untested backups are reliable"
- "Snapshot = backup"
- "Skip the backout plan"
- "Just pay the ransom"
- "Close the ticket without verifying"
- "Hot site = cold site"

---

## 🗓️ Memorize Cold

- 3-2-1 and 3-2-1-1-0 rules
- RPO vs RTO definitions
- Hot / Warm / Cold = Minutes / Hours / Days
- Backup types restore speeds
- Always: backout plan + test backup
- Doc + DR = part of **22% Operational Procedures**

---

## ✏️ Quick Self-Check

1. 3-2-1 rule? ___
2. RPO vs RTO definitions? ___
3. Hot / Warm / Cold RTO ranges? ___
4. Why must you test backups? ___
5. BCP vs DR, what's the difference? ___

---

## 🏁 Course Complete!

Take the Practice Exams:

- [Practice Exam 1, Core 1](../Practice-Exams/Practice-Exam-1.md)
- [Practice Exam 2, Core 2](../Practice-Exams/Practice-Exam-2.md)
- [Final Mock Exam, 90 Q / 90 min](../Practice-Exams/Final-Mock-Exam.md)

Good luck on the real CompTIA A+ exams! 🛠️
