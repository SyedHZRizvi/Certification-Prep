# 📋 Module 9 Cheat Sheet: Backup, Recovery & Migration

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🆚 Backup vs Site Recovery

| | Backup | Site Recovery |
|---|--------|---------------|
| Purpose | Data loss / corruption / ransomware | Region outage / DR |
| RPO | Hours (daily) | Seconds (continuous) |
| RTO | Minutes (file) → hours (full VM) | Minutes (boot at target) |
| Granularity | File / folder / DB / whole VM | Whole machine |
| Frequency | Scheduled | Continuous |

🔥 **Use BOTH for prod workloads.**

---

## 🏦 Recovery Services Vault

- Region-scoped, redundancy at creation: LRS / **GRS (default)** / ZRS
- GRS + opt-in **Cross-Region Restore** = restore to paired region
- Soft delete: default ON, 14 days minimum, up to 180
- **Immutable vault** locks config; **MUA / Resource Guard** = 4-eyes approval

---

## 💾 Backup Workloads

| Workload | Engine |
|----------|--------|
| Azure VM | Disk snapshot → vault |
| Win files/folders (on-prem) | **MARS agent** |
| SQL/SAP HANA in Azure VM | Workload extension |
| Azure Files | Snapshot |
| Azure Blob | Operational + vaulted (immutable) |
| On-prem DPM-style | MABS |

GFS retention: Daily / Weekly / Monthly / Yearly · App-consistent > FS-consistent > Crash-consistent

---

## 🔁 ASR Concepts

- **Recovery plan** — ordered failover with pre/post scripts
- **Test failover** — isolated network, no prod impact, mandatory periodically
- **Planned** — both regions healthy, no data loss
- **Unplanned** — disaster, accept latest replicated point
- **Failback** — re-replicate target → source after recovery
- **RPO** = data freshness target · **RTO** = downtime budget

ASR sources: Azure → Azure (most common), VMware, Hyper-V, Physical.

---

## 🚚 Azure Migrate

```
Discover (appliance) → Assess (cost, sizing, deps) → Migrate (replicate + cutover)
```

Use cases: Server migration · DB migration (via DMS) · Web app migration · Storage migration.

---

## 🏆 Exam Power Phrases

Often **correct**:
- ✅ "GRS vault with Cross-Region Restore enabled"
- ✅ "MUA via Resource Guard for backup ops"
- ✅ "ASR test failover in isolated network"
- ✅ "Application-consistent snapshot via VSS / pre-post scripts"
- ✅ "Azure Migrate appliance for discovery"

Often **wrong**:
- ❌ "ASR replaces backup"
- ❌ "Soft delete disable instantly"
- ❌ "MARS for Linux"
- ❌ "GRS auto-fails over"
- ❌ "Test failover disrupts prod"

---

## ⚠️ Anti-Patterns

- ❌ No backup on prod VMs
- ❌ Backup vault in same region with LRS only
- ❌ Never test the DR failover
- ❌ Soft delete disabled in regulated environment
- ❌ MARS as your primary Linux backup

---

## ✏️ Quick Self-Check

1. Backup vs ASR — which has continuous replication? ___
2. Vault redundancy that unlocks Cross-Region Restore? ___
3. MARS supports Linux — true or false? ___
4. MUA implements via what resource? ___
5. Three Azure Migrate phases? ___

---

➡️ [Module 10: Monitor & Governance](../Module-10-Monitor-Governance/Reading.md)
