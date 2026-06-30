# 📋 Module 9 Cheat Sheet: Backup, ASR & Migration

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛡️ Backup Family

| Agent / Service | Backs up | Best for |
|-----------------|----------|----------|
| **MARS** | Files / folders / System State | Workstations, branch FS |
| **MABS** | VMs / SQL / SP / Exchange / FS, app-aware | Full on-prem with Azure offload |
| **Azure Backup for Azure VMs** | Whole Azure VMs (managed disks) | Azure-native |
| **Azure Backup for Azure Files** | SMB shares | Azure file shares |
| **Azure Backup for SQL/SAP HANA** | DB tier inside Azure VMs | Cloud DB |

🚨 **MARS limits:** 3 per day · 9,999 day max retention · files/folders/System State ONLY.

---

## 🏛️ Recovery Services Vault

| Property | Default / Detail |
|----------|------------------|
| Redundancy | LRS / ZRS / **GRS (default)**, **locked at first backup** |
| Soft delete | **14 days default** (can disable, discouraged) |
| **Immutable vault** | Newer; hard lock for compliance |
| Cross-region restore | GRS vault feature |
| Per | **Region** |
| Encryption | MS-managed default; CMK supported |

---

## 🚀 Azure Site Recovery (ASR)

| Metric | Value |
|--------|-------|
| **RPO** | ~30 sec (continuous via Mobility Service) |
| **RTO** | Minutes (depends on VM startup + DNS) |
| Sources | Hyper-V / VMware / physical / Azure-to-Azure / AWS |
| Recovery points | Configurable (24 hourly + 7 daily typical) |
| App-consistent freq | 1–12 hour |
| **Test failover** | **Non-disruptive** (parallel test VNet), run quarterly |

### Failover types

| Type | When |
|------|------|
| **Test** | Validate runbook, no disruption |
| **Planned** | Maintenance, app-consistent shutdown |
| **Unplanned** | True DR, last recovery point |

### Recovery Plans

- Multi-VM ordered failover
- Pre / post scripts via Azure Automation runbooks
- Group VMs by tier (DCs first, app middle, presentation last)

---

## 📦 Storage Migration Service

```
Inventory  →  Transfer  →  Cutover
   ↑              ↑            ↑
Scan source   Copy files +  Rename dest to source
(WS 2003+)    ACLs/configs  name + IP
```

🎯 Tool for **modernizing 2003/2008 file servers to 2022** with preserved identity.

---

## ☁️ Azure Migrate

```
Discover (appliance)  →  Assess (right-sizing)  →  Migrate (via ASR / DMS / App Svc tool)
```

- **Servers**: VMware / Hyper-V / Physical → Azure VMs (uses ASR)
- **SQL**: Azure DMS or DMA → Azure SQL family
- **Web Apps**: App Service Migration Assistant

---

## 🪪 ADMT

- Move users/groups/computers between AD domains/forests
- **Preserves SID History** for resource access continuity
- "Available but no longer actively developed", community-supported
- Modern alternative: Entra ID cross-tenant migration

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Use MARS for branch file backup"
- ✅ "Use MABS for app-aware SQL/SP/Exchange backup"
- ✅ "Enable soft delete + immutable vault for ransomware defense"
- ✅ "GRS vault for cross-region restore"
- ✅ "ASR test failover is non-disruptive, run quarterly"
- ✅ "Storage Migration Service for file-server modernization"
- ✅ "Azure Migrate uses ASR for VM migration"
- ✅ "ADMT preserves SID History"

Usually **wrong**:

- ❌ "MARS supports SQL VSS backup"
- ❌ "Change vault redundancy after first backup"
- ❌ "ASR test failover disrupts production replication"
- ❌ "ADMT is the recommended modern tool"
- ❌ "Azure Migrate replaces ASR"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Vault redundancy set after first backup (cannot change)
- ❌ Soft delete disabled in production (no ransomware buffer)
- ❌ ASR never tested (the real failover will fail)
- ❌ MARS for SQL DBs (not app-aware)
- ❌ MABS without Azure offload (single point of failure)
- ❌ Same backup-admin credentials as production admin

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| File-level backup for 5 branch servers | MARS direct to vault |
| App-aware SQL/SP/Exchange backup | MABS |
| Whole Azure VM backup | Azure Backup for Azure VMs |
| 30-sec RPO DR for on-prem Hyper-V | ASR |
| 0 RPO DR (metro) | Storage Replica sync + stretch cluster or SQL AG sync |
| Cross-region Azure VM DR | ASR A2A |
| Ransomware-resistant backup | Vault + soft delete + Immutable Vault + GRS |
| File server modernize 2008→2022 | Storage Migration Service |
| Holistic migration plan + right-sizing | Azure Migrate |
| Move SQL to Azure | Azure DMS or DMA |
| Move web apps to App Service | App Service Migration Assistant |
| User/group migration with SID History | ADMT |
| Stream backup jobs to LA | Vault Diagnostic settings → Log Analytics |
| Multi-VM orchestrated failover | ASR Recovery Plan with scripts |
| Compliance-grade hard lock on backups | Immutable Vault |

---

## ✏️ Quick Self-Check

1. MARS vs MABS, pick three differences? ___
2. Vault redundancy locked when? ___
3. Soft delete default retention? ___
4. ASR test failover, disruptive or not? ___
5. SMS three phases? ___
6. ADMT, what's its current status and what does SID History preserve? ___

---

➡️ [Module 10: PowerShell, DSC & Automation](../Module-10-PowerShell-Automation/Reading.md)
