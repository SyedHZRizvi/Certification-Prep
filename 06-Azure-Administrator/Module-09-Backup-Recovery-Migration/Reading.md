# Module 9: Backup, Recovery & Migration 💾

> **Why this module matters:** Backups are boring until you need one. Azure Backup, Azure Site Recovery (ASR), and Azure Migrate together cover protection, DR, and lift-and-shift. The exam tests vault types, retention policies, and "what's the right tool for X" scenarios.

---

## 🍕 A Story: The Bookstore That Survived a Flood

Lucia runs "Volumes & Vintage", a beautiful indie bookstore. One day a pipe bursts overnight. By morning, half her inventory is soggy. She's prepared:

- **Daily inventory backup**: every night a list of every book + cover photo gets emailed to her sister's laptop in Portland. **(Azure Backup — daily snapshots stored in a vault in another region.)**
- **Secondary storefront**: her cousin's shop in San Diego is wired up with a real-time mirror of her POS. If her shop closes, she can flip "open" on the SD store in 30 minutes. **(Azure Site Recovery — continuous replication, RPO minutes, RTO under an hour.)**
- **Pre-move blueprint**: when she eventually buys a bigger store, she has a scanned floor plan and an inventory map of every shelf to help movers reproduce the layout exactly. **(Azure Migrate — discovery, assessment, dependency map, then replication.)**

These three solve **different** problems:
- **Backup** = oops, I deleted a file / ransomware. Restore from yesterday.
- **Site Recovery** = whole region is down. Failover to another region.
- **Migrate** = move from on-prem (or another cloud) to Azure.

---

## 🏦 Recovery Services Vault (RSV)

The central Azure resource for Backup + ASR. One vault can hold many backup items and replication setups.

| Property | Detail |
|----------|--------|
| Region | Vault is region-scoped (data lives there) |
| Redundancy | LRS / GRS / **ZRS** — set at vault creation, hard to change later |
| Cross Region Restore | Free toggle if vault is GRS — restore to paired region |
| Soft delete | On by default, 14 days minimum (now up to 180 days, depending on settings) |
| Immutability | Can lock vault config / backup items against deletion |

### Create a vault

```bash
az backup vault create \
    --resource-group rg-backup \
    --name rsv-prod-eus-001 \
    --location eastus \
    --backup-storage-redundancy GeoRedundant

# Enable cross-region restore (only when storage redundancy = GRS)
az backup vault backup-properties set \
    --name rsv-prod-eus-001 \
    --resource-group rg-backup \
    --cross-region-restore-flag true
```

---

## 💾 Azure Backup — Workload Types

| Workload | Backup engine | Restore granularity |
|----------|---------------|---------------------|
| **Azure VM (in-Azure)** | Snapshot of managed disks → vault | Whole VM, individual disk, file/folder |
| **Files / folders on a Windows Server** | **MARS agent** (Microsoft Azure Recovery Services) | File/folder/system state |
| **SQL Server in Azure VM** | Workload backup extension | DB/transaction log |
| **SAP HANA in Azure VM** | Workload backup extension | DB |
| **Azure Files** | Snapshot-based | Whole share or per-file |
| **Azure Blob Storage** | Operational + vaulted backups | Container/blob |

Two "modes" of vault for blob:
- **Operational** — short-term, lives in the source account
- **Vaulted** — long-term, in the RSV; immutable

---

## ⏰ Backup Policies

Per-workload, define:
- **Frequency** (Daily / Weekly / Hourly for some workloads)
- **Time** + **Time zone**
- **Retention** — daily/weekly/monthly/yearly retention points (GFS — Grandfather/Father/Son)
- **Instant restore tier retention** (1–5 days kept as snapshots near the source for fast restore)
- **Snapshot consistency**: Application-consistent (preferred) > File-system-consistent > Crash-consistent

### Application-consistent backups

For Windows VMs, Azure Backup uses **VSS** writers. For Linux, you place **pre-script** and **post-script** files at `/etc/azure/` to quiesce the app before snapshot and resume after.

### Enable backup for a VM

```bash
az backup protection enable-for-vm \
    --resource-group rg-backup \
    --vault-name rsv-prod-eus-001 \
    --vm vm-app-01 \
    --policy-name DefaultPolicy
```

### Restore a file from a recovery point

```bash
# 1. Get recovery point list
az backup recoverypoint list \
    --vault-name rsv-prod-eus-001 \
    --resource-group rg-backup \
    --container-name iaasvmcontainerv2;rg-app;vm-app-01 \
    --item-name vm-app-01

# 2. Mount the recovery point as iSCSI (provides a script to attach to a target machine)
az backup restore files mount-rp \
    --vault-name rsv-prod-eus-001 \
    --resource-group rg-backup \
    --container-name iaasvmcontainerv2;rg-app;vm-app-01 \
    --item-name vm-app-01 \
    --rp-name <recoveryPointId>
```

---

## 🔁 Azure Site Recovery (ASR)

For **whole-machine DR replication**. Source replicates continuously to a target region; on disaster, you fail over.

```
SOURCE REGION                          TARGET REGION
  VM-A ──▶ Replication ──▶  Cached blob ──▶ Managed disk ──▶ VM-A' (powered off until failover)
  VM-B ──▶                                                         ──▶ VM-B'
```

| Concept | Detail |
|---------|--------|
| **Replication policy** | RPO target, recovery point retention, app-consistent snapshot frequency |
| **Recovery plan** | Ordered list of VMs to fail over + pre/post scripts |
| **Test failover** | Spin up replica in an isolated network — doesn't affect prod |
| **Planned failover** | No data loss, both regions known healthy |
| **Unplanned failover** | Disaster — accept the last replicated point, possibly lose some seconds |
| **Failback** | Re-replicate target back to source after recovery |
| **RPO** | Recovery Point Objective — how much data you can afford to lose |
| **RTO** | Recovery Time Objective — how long until you're back up |

### ASR sources Azure supports

| Source | Notes |
|--------|-------|
| **Azure VM → another Azure region** | Most common |
| **VMware → Azure** | Via configuration server / mobility agent |
| **Hyper-V → Azure** | Direct |
| **Physical server → Azure** | Via mobility agent |

```bash
# Enable replication on an Azure VM (simplified)
az site-recovery replication-protected-item create \
    --fabric-name myFabric \
    --protection-container-name myContainer \
    --replication-protected-item-name vm-app-01-replica \
    --vault-name rsv-prod-eus-001 \
    --resource-group rg-backup \
    --policy-id <policyId> \
    --source-vm-id <vmId>
```

---

## 🚚 Azure Migrate

A migration command center. Used for:
- **Discovery & assessment** (on-prem servers, dependencies, cost estimates)
- **Server migration** (VMware / Hyper-V / Physical / AWS / GCP → Azure)
- **Database migration** (SQL Server, MySQL, PostgreSQL → Azure SQL / Flexible Server)
- **Web app migration** (.NET / Java apps → App Service / AKS)
- **Storage / file migration** (file shares → Azure Files)

### Phases

```
1. Discover ──▶ Install Azure Migrate appliance on-prem
                Inventory servers + collect performance data
                Map dependencies (which servers talk to which)

2. Assess   ──▶ Generate Azure VM size + cost recommendations
                Identify migration readiness (Win 2008 SP2 = warning, etc.)

3. Migrate  ──▶ Replicate VMs to Azure (uses ASR engine under the hood)
                Test migration → cutover migration → done
```

🔥 **The "Discovery and Assessment" tool uses an on-prem appliance VM (Windows Server) with a key from the Azure Migrate project.**

---

## 🔐 Soft Delete + Immutability for Backups

| Feature | Detail |
|---------|--------|
| **Soft delete** | Deleted recovery points kept 14 days (default) up to 180 days — protects against malicious deletion |
| **Immutable vault** | Lock vault so even an admin can't disable soft delete / reduce retention |
| **Multi-User Authentication (MUA)** | Critical ops require approval from a Resource Guard / second admin |
| **Cross Region Restore** | Free restore to paired region (requires GRS vault) |

---

## 🧪 Task-Sequencing Practice: Protect a Production VM with Backup + DR

**Order these steps:**

1. ✅ Create a **GRS Recovery Services Vault** in the same region as the VM.
2. ✅ Enable **soft delete** (already default) and set retention to 30+ days.
3. ✅ Enable **MUA / Resource Guard** for the vault for protected operations.
4. ✅ Create a **backup policy** with daily app-consistent snapshots + GFS retention (7 daily, 4 weekly, 12 monthly, 5 yearly).
5. ✅ Enable backup for the VM using that policy.
6. ✅ Run an **on-demand backup** to confirm working.
7. ✅ Set up **Site Recovery** replication to a paired region.
8. ✅ Build a **recovery plan** with boot order + post-failover scripts.
9. ✅ Run a **test failover** every 6 months.

⚠️ Skipping step 9 = your DR works on paper but not in practice. Test failovers are mandatory in regulated industries.

---

## 🆚 Backup vs Site Recovery (KNOW THIS!)

| Aspect | Azure Backup | Azure Site Recovery |
|--------|--------------|---------------------|
| Purpose | Recover from data loss, corruption, ransomware | Recover from regional outage / DR |
| RPO | Hours (daily backup) to minutes (more frequent for SQL) | **Seconds** (continuous replication) |
| RTO | Minutes (file restore) to hours (full VM restore) | **Minutes** (boot up at target) |
| Granularity | File/folder/DB/whole VM | Whole machine |
| Frequency | Scheduled (daily, weekly, etc.) | Continuous |
| Storage | RSV (LRS/GRS/ZRS) | Source + target region disks/storage |
| Cost | Lower | Higher (continuous replication + target compute) |

🔥 You usually use **both**: backup for data, ASR for region failover.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "ASR is a replacement for Backup" | ❌ Different purposes — use both |
| "Soft delete can be disabled instantly" | ❌ With MUA / immutability, no |
| "GRS vault auto-fails over" | ❌ Cross-region restore is *manual* |
| "MARS agent backs up Linux servers" | ❌ MARS = Windows files/folders + System State only |
| "Azure Backup encrypts at rest with customer keys only" | ❌ Default MMK; CMK is optional |
| "Test failover affects production" | ❌ Test failover uses an isolated network |
| "ASR replicates VM-to-VM same region" | ❌ Cross-region (or cross-zone in some scenarios) |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Recovery Services Vault (RSV)** | Container for backup + ASR |
| **Backup Vault** | Newer vault type for blob/disk/PostgreSQL backups (separate resource) |
| **MARS agent** | Microsoft Azure Recovery Services — Windows files/folders + System State |
| **MABS / Azure Backup Server** | DPM-based backup server for SQL/Exchange/SharePoint on-prem |
| **MABS vs MARS** | MABS = full DPM features; MARS = lightweight |
| **Soft delete** | Deleted recovery point retention (14–180 days) |
| **Immutable vault** | Locked-config vault |
| **MUA / Resource Guard** | 2nd-admin approval for critical ops |
| **Cross Region Restore** | Free restore to paired region for GRS vaults |
| **Recovery Point** | A point-in-time backup |
| **GFS retention** | Grandfather-Father-Son retention scheme |
| **Application-consistent snapshot** | Uses VSS / pre+post script for quiescing |
| **ASR** | Azure Site Recovery |
| **Recovery plan** | Ordered failover steps |
| **RPO / RTO** | Recovery Point/Time Objective |
| **Azure Migrate appliance** | On-prem VM that discovers + replicates |

---

## ✅ Module 9 Summary

You now know:
- 🏦 RSV vs Backup Vault, redundancy choices, cross-region restore
- 💾 What Azure Backup protects + the difference between MARS and MABS
- ⏰ Policies, GFS retention, app-consistent snapshots
- 🔁 ASR concepts: replication, recovery plans, test/planned/unplanned failover, failback
- 🚚 Azure Migrate phases (Discover → Assess → Migrate)
- 🔐 Soft delete + immutability + MUA
- 🆚 Backup vs ASR — different tools for different problems

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 10: Monitor & Governance](../Module-10-Monitor-Governance/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Azure Backup overview](https://learn.microsoft.com/azure/backup/backup-overview)
- 📖 [Azure Site Recovery overview](https://learn.microsoft.com/azure/site-recovery/site-recovery-overview)
- 📖 [Azure Migrate overview](https://learn.microsoft.com/azure/migrate/migrate-services-overview)
- 📖 [Soft delete + MUA](https://learn.microsoft.com/azure/backup/multi-user-authentication-concept)
