# Module 9: Backup, ASR & Migration 💾

> **Why this module matters:** Disaster Recovery + Migration is 15–20% of AZ-801 by itself, plus another 20–25% on the Migration domain. Combined, this single module covers ~40% of the exam. The exam loves *"given this RPO/RTO, which combination of MARS / MABS / ASR / Storage Migration Service / Azure Migrate?"* Get the toolset taxonomy into reflex memory and you've locked down the second-largest exam concentration after Security.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Azure resource hierarchy and storage redundancy (LRS/ZRS/GRS) — [`06-Azure-Administrator` Module 3](../../06-Azure-Administrator/Module-03-Storage-Accounts-Blobs/Reading.md)
> - On-prem storage concepts (VSS, snapshots, dedup) — [Module 4](../Module-04-File-Storage/Reading.md)
> - Hyper-V basics (especially Hyper-V Replica as the on-prem DR primitive) — [Module 5](../Module-05-HyperV/Reading.md)
> - Azure Arc (used to enable Azure Backup on Arc-projected machines) — [Module 6](../Module-06-Azure-Arc/Reading.md)
>
> If those are shaky, pause and review. This module assumes you know what an RPO and RTO are.

---

## 🏥 A Story: The Hospital That Recovered in 47 Minutes

It's Saturday at 11:14 p.m. at Riverstone Health, a 290-bed regional hospital network. A regional ransomware attack — Conti variant — encrypts the Cerner EHR file shares, the PACS imaging system, the SQL backup target, and ~140 staff workstations. The IT director's pager goes off at 11:18 p.m.

By 11:53 p.m., the IT team has confirmed: **every backup target has been encrypted too**. The attacker found and encrypted the on-prem Veeam repository. The decision: invoke the Azure DR runbook.

At 11:55 p.m., they trigger:
- **Azure Site Recovery** failover of the SQL VMs from on-prem Hyper-V to Azure (RPO ~30 sec)
- **Azure Backup** restore of the Cerner file shares from the **immutable Recovery Services Vault** (the attacker couldn't touch the Azure-side backups because they didn't have Azure credentials)
- Conditional Access policy locks out all on-prem accounts; new short-lived passwords issued via TAP
- DNS records flip to Azure-side endpoints

At **12:01 a.m. Sunday — 47 minutes from first alert** — the EHR is back online. The radiology PACS comes back at 12:18 a.m. Workstations are reimaged from PXE boot starting at 01:00 a.m. By 7 a.m., 87% of operations are restored.

The CISO told the board the following week: *"Every dollar we'd spent on Azure Backup + Azure Site Recovery in the prior 18 months paid for itself in that 47 minutes. The ransom demand was $4.8M. We paid nothing."*

That's what Backup + ASR is for. The exam tests *which tool* applies to *which scenario* — and getting that mapping wrong costs real money.

---

## 🛡️ Azure Backup — The Service Family

Azure Backup is a family of agents and services backing different workload types. The common foundation is the **Recovery Services Vault** — Azure's encrypted backup storage container.

| Agent / Service | What it backs up | From / to |
|-----------------|------------------|-----------|
| **MARS** (Microsoft Azure Recovery Services agent) | Files / folders / System State | Windows → Azure direct |
| **MABS** (Microsoft Azure Backup Server) | VMs / SQL / SharePoint / Exchange | On-prem → MABS local disk → Azure |
| **Azure Backup for Azure VMs** | Whole VMs (managed disks, snapshots) | Azure VM ↔ Vault |
| **Azure Backup for Azure Files** | SMB file shares | Azure Files ↔ Vault |
| **Azure Backup for SQL Server in Azure VM** | SQL DBs | Inside Azure VM |
| **Azure Backup for SAP HANA / PostgreSQL** | Database tier | Azure VM ↔ Vault |
| **Azure Backup for Blobs (Operational)** | Blob containers | Storage account ↔ vault |

---

## 🏛️ Recovery Services Vault

The vault stores backup data and ASR replication data. Per-region.

| Property | Detail |
|----------|--------|
| Redundancy | LRS, ZRS, **GRS (default)** |
| Soft delete | **Enabled by default** (14 days) — protects against ransomware deletion |
| **Immutable vault** (newer) | Lock policies prevent deletion within configured period (compliance-grade) |
| Encryption | Microsoft-managed keys by default; customer-managed keys (CMK) supported |
| Cross-region restore | Available for GRS vaults (read from secondary region) |
| Per-vault scope | One vault per region recommended; can multiplex many workloads in one vault |

🚨 **Trap:** A vault's redundancy setting (LRS/ZRS/GRS) can only be changed *before* the first backup. After the first item is registered, redundancy is locked.

```powershell
# Create a Recovery Services Vault
New-AzRecoveryServicesVault -Name "rsv-prod-eu" -ResourceGroupName "rg-backup" -Location "westeurope"

# Set redundancy BEFORE first backup
$vault = Get-AzRecoveryServicesVault -Name "rsv-prod-eu" -ResourceGroupName "rg-backup"
Set-AzRecoveryServicesBackupProperty -Vault $vault -BackupStorageRedundancy GeoRedundant

# Enable soft delete (default; explicitly set for clarity)
Set-AzRecoveryServicesVaultProperty -VaultId $vault.ID -SoftDeleteFeatureState Enable
```

---

## 🪪 MARS Agent (File / Folder / System State Backup)

**MARS** is the lightweight agent for backing up files, folders, and Windows System State directly to a Recovery Services Vault — no MABS server needed.

| Property | Detail |
|----------|--------|
| Source | Windows Server / Windows 10/11 |
| Targets | Files, folders, System State (not whole-VM, not application-aware) |
| Max backups/day | **3** (limit) |
| Max retention | 9,999 days |
| Encryption | Client-side passphrase (you must store; loss = backup lost) |
| Network | Outbound 443 to vault |
| Best for | Workstations, branch file servers, machines without virtualization layer |

### Install & register

```powershell
# Download MARS agent installer from Recovery Services Vault → "Get tools"
# Run on the target machine
MARSAgentInstaller.exe /q

# Register with vault using downloaded credentials file
Start-OBRegistration -RecoveryServiceVaultCredsFile "C:\vault-credentials.VaultCredentials"

# Set encryption passphrase (CRITICAL — store securely)
Set-OBMachineSetting -EncryptionPassPhrase (Read-Host -AsSecureString -Prompt "Enter passphrase")

# Create backup policy and target
$pol = New-OBPolicy
Add-OBFileSpec -Policy $pol -FileSpec (New-OBFileSpec -FileSpec "D:\important-data")
Set-OBSchedule -Policy $pol -DaysOfWeek "Sunday","Wednesday" -TimesOfDay "23:00"
Set-OBRetentionPolicy -Policy $pol -RetentionPolicy (New-OBRetentionPolicy -RetentionDays 30)
Set-OBPolicy -Policy $pol -Confirm:$false
```

🔥 **MEMORIZE:** MARS allows **only 3 backups per day** per machine. For more granular RPO, use MABS or VM-level backup.

---

## 🖥️ MABS (Microsoft Azure Backup Server)

**MABS** is the free, on-prem backup server based on System Center Data Protection Manager (DPM). Hosts a local backup repository + offloads to Azure.

| Property | Detail |
|----------|--------|
| Cost | **Free** software (Azure-side storage billed) |
| OS | Runs on Windows Server (typically 2019/2022) |
| Local storage | Optional but recommended (faster restores) |
| Sources backed up | Windows / Linux servers, VMs (Hyper-V, VMware), **application-consistent SQL, SharePoint, Exchange**, file shares, system state |
| Limits | Up to 1 PB / instance, 800 VMs / instance, depending on version |
| Application awareness | Yes — VSS-aware for SQL, SharePoint, Exchange |
| Network | MABS ↔ Azure: outbound 443 |
| Best for | On-prem app-aware backup with Azure offload |

### Install + protect a SQL Server

1. Install MABS on a clean Windows Server 2022 (joined to AD)
2. Add storage pool (local disks for short-term cache)
3. Register the vault credentials
4. Install MABS agent on target SQL Server
5. Create a Protection Group selecting the SQL DBs
6. Set retention (short-term local + long-term Azure tiers)
7. Configure schedule

---

## 🚀 Azure Site Recovery (ASR) — Disaster Recovery

**ASR** is Microsoft's DR-as-a-service. Replicates VMs/physical/AWS to Azure (or Azure-to-Azure between regions) and orchestrates failover.

### Supported source scenarios

| Source | Replication target |
|--------|---------------------|
| Hyper-V VMs (on-prem) | Azure |
| VMware VMs | Azure |
| Physical Windows / Linux servers | Azure |
| Azure VMs (region A) | Azure VMs (region B) — Azure-to-Azure |
| AWS EC2 instances | Azure |

### Key metrics

| Metric | Typical value |
|--------|---------------|
| **RPO** | ~30 seconds (continuous replication) |
| **RTO** | Minutes (depends on VM startup + DNS) |
| Replication frequency | Continuous (via Mobility Service agent → cache storage → vault) |
| Recovery points kept | Configurable — typically 24 hourly + 7 daily |
| Recovery plans | Multi-VM orchestration with custom scripts |
| Test failover | **Non-disruptive** (creates parallel test environment) |
| Planned failover | Application-consistent shutdown then failover |
| Unplanned failover | Use most recent recovery point |
| Failback | After source recovery, reverse-replicate from Azure |

### Configure ASR for an on-prem Hyper-V VM

```powershell
# Create vault, register Hyper-V site, install Hyper-V provider on the host
# Replication policy + association
$policy = New-AzRecoveryServicesAsrPolicy -Name "policy-prod" `
    -ReplicationProvider "HyperVReplicaAzure" `
    -ReplicationFrequencyInSeconds 30 `
    -RecoveryPoints 24 `
    -ApplicationConsistentSnapshotFrequencyInHours 4

# Enable replication for a VM
$VM = Get-AzRecoveryServicesAsrProtectableItem -ProtectionContainer $hvContainer -FriendlyName "SQL01"
New-AzRecoveryServicesAsrReplicationProtectedItem `
    -ProtectableItem $VM `
    -Name "SQL01-asr" `
    -ProtectionContainerMapping $mapping `
    -RecoveryAzureStorageAccountId $stg.Id `
    -RecoveryResourceGroupId $rg.Id `
    -RecoveryAzureNetworkId $vnet.Id `
    -RecoveryAzureSubnetName "default"

# Trigger a TEST failover
Start-AzRecoveryServicesAsrTestFailoverJob -ReplicationProtectedItem $repItem `
    -Direction PrimaryToRecovery -AzureVMNetworkId $testVnet.Id
```

🔥 **Test failover is non-disruptive** — creates a separate "test" environment in Azure for validation. Always run quarterly minimum.

### Recovery plan example flow

```
Recovery Plan: "Tier-1-DC-Failover"
  1. Pre-script: Notify SOC via webhook
  2. Group 1: Failover AD DCs (DC01, DC02)
  3. Group 1 post-script: Verify AD DNS service health
  4. Group 2: Failover application servers (APP01, APP02)
  5. Group 2 post-script: Update Azure DNS to point to recovered IPs
  6. Group 3: Failover SQL Server
  7. Post-script: Notify SOC + verify with smoke tests
```

---

## 📦 Storage Migration Service (SMS)

**SMS** is built into Windows Admin Center. Inventories source servers, transfers files + ACLs + share configs, then **cuts over** by renaming the destination to the source's name and IP.

| Phase | What happens |
|-------|--------------|
| **1. Inventory** | Scan source (Windows 2003+ and Linux SMB) for shares, ACLs, configs |
| **2. Transfer** | Copy files with ACL preservation; SMB or local network |
| **3. Cutover** | Rename destination to source's name/IP; source goes offline |
| Use cases | Modernize 2003/2008 R2 servers to 2022; consolidate file servers |
| Source OS supported | Windows Server 2003+, Linux SMB (Samba) |
| Network | Source ↔ Destination ↔ SMS orchestrator |

### Run SMS via Windows Admin Center

1. Connect WAC to the SMS-enabled Windows Server 2019/2022
2. Storage Migration Service → New job
3. Add credentials for source
4. Inventory completes (may take hours)
5. Choose source-to-destination mapping
6. Transfer
7. Cutover (final IP/name swap during maintenance window)

🎯 **Exam pattern:** *"Move 12 Windows Server 2008 R2 file servers to Windows Server 2022 with the same shares and IPs preserved"* → **Storage Migration Service**.

---

## ☁️ Azure Migrate

**Azure Migrate** is the centralized hub for assessment + migration of:
- Servers (VMware, Hyper-V, physical) → Azure VMs
- SQL Server → Azure SQL family
- Web apps → App Service
- Databases → Azure DB

### The three phases

| Phase | Tool / Service |
|-------|----------------|
| **Discover** | Azure Migrate appliance (on-prem) — collects VM inventory, dependencies, performance |
| **Assess** | Azure Migrate assessment — right-sizing recommendations + cost estimate |
| **Migrate** | Azure Migrate: Server Migration (uses ASR underneath) |

### Common migration paths via Azure Migrate

| Source | Tool | Replication |
|--------|------|-------------|
| VMware VMs | Server Migration | Agentless (vCenter) or agent-based |
| Hyper-V VMs | Server Migration | Same as ASR |
| Physical / other | Server Migration | Agent-based (Mobility Service) |
| SQL Server | Data Migration Service / Azure Database Migration Service | Online or offline |
| Web apps | App Service Migration Assistant | Online migration to App Service |

---

## 🪪 Active Directory Migration Tool (ADMT)

**ADMT** is the legacy tool for moving users / groups / computers between AD domains and forests with **SID History** preservation.

| Property | Detail |
|----------|--------|
| Status | "Available but no longer actively developed by Microsoft" — community-supported |
| Source / target | AD domains in any forests |
| SID History | Preserves original SIDs for resource access continuity |
| Password migration | Yes (with Password Export Server installed on source) |
| Use case | M&A consolidation, domain rename, forest consolidation |

### Modern alternatives

- **Cross-tenant migration** in Entra ID (for cloud-first orgs)
- **Hybrid B2B** with cross-tenant access settings
- Third-party tools (Quest Migration Manager for AD, Binary Tree Active Directory Pro, etc.)

🎯 **Exam pattern:** *"Migrate user accounts from acquired company's domain to parent's domain, preserving access to file servers"* → **ADMT with SID History**.

---

## 🧪 Task-Sequencing Practice: DR + Backup for 50 On-Prem Hyper-V VMs

**Scenario:** 50 Hyper-V VMs on 4 Hyper-V hosts in Atlanta. Need: file-level backup of 12 file servers (RPO 24h), VM-level DR replication to Azure West US (RPO 30s), and a tested recovery plan.

**Order these steps:**

1. ✅ Create a **Recovery Services Vault** `rsv-atl-prod` in West US, GRS redundancy, soft delete enabled
2. ✅ For file-level backup: install **MABS** on a clean Windows Server 2022 in Atlanta, register the vault, install MABS agents on the 12 file servers
3. ✅ Create MABS Protection Groups for each file server — short-term local + long-term Azure
4. ✅ For VM-level DR: install **Azure Site Recovery provider** on each Hyper-V host, register hosts in the vault
5. ✅ Create replication policy: 30-sec frequency, 24-hour recovery points, 4-hour app-consistent snapshots
6. ✅ Enable replication on each VM via portal → ASR → "Enable replication"
7. ✅ Create a **recovery plan** grouping VMs by tier (DC first, app middle, presentation last)
8. ✅ Quarterly: run a **test failover** in a sandbox VNet → validate → clean up
9. ✅ Document failover runbook, escalation paths, DNS cutover steps, and post-failover validation

⚠️ Skipping step 8 (regular test failovers) is the #1 reason real DR events fail. ASR's test-failover is non-disruptive — run it at least quarterly.

---

## 📊 Case Study — The 2017 Maersk NotPetya Disaster and the $300M Recovery

**Situation.** On June 27, 2017, the **NotPetya** worm (initially disguised as ransomware but actually a wiper masquerading as ransomware, attributed by US/UK governments to Russia's GRU) spread through Ukrainian accounting software (M.E.Doc) and globally via SMB1 lateral movement (EternalBlue exploit) into 65+ countries. **Maersk** — the world's largest container shipping company, then handling ~20% of global container trade — was among the hardest hit (Maersk Annual Report 2017; Andy Greenberg, *Sandworm*, Doubleday 2019). At its peak, NotPetya encrypted **49,000 Maersk laptops, 4,000 servers, and 2,500 applications across 600 locations** within 7 hours. Operations stopped at all 76 of Maersk's port terminals. Bookings could not be made. Container ships at sea had no destination instructions. The estimated revenue loss: **$200–$300M**, with total recovery and lost-business cost reaching $300M+.

**Decision.** Maersk's recovery was orchestrated by Andy Powell (then CISO) and the IT response team. Their published playbook (NotPetya: A Wake-Up Call for Globally Distributed Manufacturing and Logistics, Maersk public statement August 2017; updated CISO interviews 2018–2019):
1. **A single surviving DC.** Of Maersk's ~150 domain controllers, exactly *one* — in Ghana, offline at the time due to a power outage — survived. That DC was physically flown to the IT war room in Maidenhead, UK, and became the seed of the entire AD rebuild.
2. **No usable backups.** Maersk's backup strategy at the time was tape-based + on-network. The on-network backup repositories were also wiped. The tape backups had not been restoration-tested in months.
3. **10 days to rebuild.** From June 27 to July 7, Maersk replaced 4,000 servers and 45,000 PCs from scratch — partly by airlifting equipment from Maersk facilities worldwide.
4. **Post-incident: complete backup architecture rebuild.** Maersk migrated to a **cloud-first, immutable-vault** backup model with Microsoft Azure as a primary target. Recovery Services Vault with soft delete + immutability locks + cross-region GRS.
5. **Modernized DR with ASR.** All Tier-1 application workloads now replicate to Azure via ASR with quarterly tested recovery plans.

**Outcome.** Maersk recovered fully within 6 weeks but absorbed the $300M cost. Their CISO became a public-speaking advocate for **cloud-immutable backup** + **regular test failover** as non-negotiable controls. The case became a Harvard Business School case study (Class 9-619-058, *Maersk: Surviving NotPetya*, 2019) and is required reading at most major business schools' cybersecurity courses.

**Lesson for the exam / for practitioners.** AZ-801 won't name Maersk but tests:
- *Cloud-side immutable backup* → Recovery Services Vault with **soft delete** (default) + **immutable vault** (compliance-grade) → ransomware can't reach Azure-side data without Azure credentials
- *GRS / cross-region restore* → survives a regional Azure outage *or* a primary on-prem disaster
- *ASR with test failover* → quarterly minimum cadence; non-disruptive
- *Recovery plans* → ordered, scripted, repeatable
- *Air-gapped credentials* → backup admin credentials should NOT be the same as production credentials (Maersk's were)

The exam will phrase scenarios like: *"After a ransomware attack on the on-prem environment, the IT team finds that all on-prem backups have also been encrypted. What architectural choice would have prevented this?"* → **Azure Backup Recovery Services Vault with soft delete + immutability**, accessed via separate Entra ID credentials with conditional access.

**Discussion (Socratic).**
- **Q1.** Maersk's tape backups existed but had not been restoration-tested in months. Build the case that *untested backups are not backups* — define the minimum test-restoration cadence for a Tier-1 workload (monthly?, quarterly?) and the time-budget cost.
- **Q2.** Recovery Services Vault soft delete defaults to 14 days. For a deeply targeted attack where the adversary persists for months and then triggers, 14 days is not enough. Build the case for the **immutable vault** feature with a 1-year lock vs the operational cost of "you literally cannot delete backups, even if you want to" for a year.
- **Q3.** ASR replicates to Azure with RPO ~30 seconds. For ultra-low-latency apps (high-frequency trading), even 30 seconds is too much. Defend ASR + Azure regional failover for mainstream business workloads, and identify the workload class where it's not enough (and the alternative — typically synchronous Storage Replica + stretch cluster, or app-level replication like SQL Always-On AG with sync mode).

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "MARS can do application-consistent SQL backup" | ❌ MARS = files/folders/system state only; use MABS for SQL VSS |
| "MARS allows unlimited daily backups" | ❌ 3 per day maximum |
| "Recovery Services Vault redundancy can be changed anytime" | ❌ Can only be set BEFORE first backup |
| "Soft delete prevents all deletion" | ❌ Soft delete retains for 14 days then permanent — use Immutable Vault for harder lock |
| "ASR test failover disrupts production replication" | ❌ Non-disruptive (parallel test VNet) |
| "ADMT is recommended for new migrations" | ❌ "Available but not actively developed" — Microsoft pushes toward modern Entra ID tools |
| "Azure Migrate replaces ASR" | ❌ Azure Migrate USES ASR under the hood for VM migration |
| "Storage Migration Service supports any OS" | ❌ Windows Server 2003+ and Linux SMB only |
| "MABS requires SQL Server license" | ❌ MABS includes SQL Express; free for the MABS use case |
| "GRS Recovery Services Vault is the default everywhere" | ❌ Default is GRS for most regions but varies; double-check before first backup |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Recovery Services Vault** | Azure backup + ASR storage container |
| **MARS** | Microsoft Azure Recovery Services agent (file-level) |
| **MABS** | Microsoft Azure Backup Server (DPM-based, full-featured) |
| **ASR** | Azure Site Recovery — DRaaS |
| **RPO** | Recovery Point Objective — max acceptable data loss |
| **RTO** | Recovery Time Objective — max acceptable downtime |
| **Soft delete** | 14-day retention of deleted backups |
| **Immutable vault** | Lock policies prevent deletion |
| **Recovery Plan** | Multi-VM orchestrated failover script |
| **Test Failover** | Non-disruptive ASR drill |
| **Storage Migration Service** | Windows file-server modernization tool (WAC) |
| **Azure Migrate** | Hub for server/DB/web migration |
| **ADMT** | Active Directory Migration Tool (legacy) |
| **SID History** | Preserves original SIDs during AD migration |
| **VSS** | Volume Shadow Copy Service (app-consistent snapshots) |

---

## ✅ Module 9 Summary

You now know:
- 🛡️ Azure Backup family — MARS, MABS, Azure VM, Azure Files, SQL, SAP HANA, Blobs
- 🏛️ Recovery Services Vault — redundancy locked at first backup, soft delete + immutable vault
- 🪪 MARS — 3 backups/day max, files/folders/system state only
- 🖥️ MABS — full-featured, app-aware (SQL/SP/Exchange), Hyper-V/VMware VMs
- 🚀 ASR — ~30s RPO, recovery plans, non-disruptive test failover
- 📦 Storage Migration Service — modernize Windows file servers with IP/name swap
- ☁️ Azure Migrate — discover + assess + migrate; uses ASR under the hood for VM migration
- 🪪 ADMT — legacy AD migration tool with SID History
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 10: PowerShell, DSC & Automation](../Module-10-PowerShell-Automation/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 10's PowerShell + Azure Automation runbooks orchestrate backup and DR.
> - Cross-course: [`06-Azure-Administrator` Module 9](../../06-Azure-Administrator/Module-09-Backup-Recovery-Migration/Reading.md) covers the Azure-native side of the same concepts.
> - Practice: Practice Exam 2 has 12+ questions on backup/DR/migration; Final Mock has a NotPetya-style ransomware case study.

---

## 💬 Discussion — Socratic prompts

1. **MARS vs MABS for branch backup.** A 12-branch retailer has each branch with one Windows Server hosting POS + file shares. Defend MARS for the branch (cheap, simple, direct to Azure) vs MABS at each branch (faster local restores, more complex). Where does each win in the cost-vs-operational-speed trade-off?
2. **Immutable vault adoption.** Default soft delete is 14 days. For an enterprise with confirmed APT-level threats (i.e., adversaries with months of dwell time), defend immutable vault with a 365-day lock vs the operational cost of "I literally cannot delete." What's the test-restoration cost difference?
3. **ASR vs stretch failover cluster.** For a SQL workload with 5-min RTO and 30-sec RPO requirements, defend ASR (cloud target, generic to any VM) vs a stretch cluster + Storage Replica synchronous (on-prem metro, RPO 0 but more complex). What's the per-workload-class win/lose?
4. **Storage Migration Service vs robocopy + cutover.** SMS is a wizard-driven tool; robocopy is the manual approach experienced admins have used for decades. Build the case for SMS (preserves ACLs, share configs, schedules cutover) and identify scenarios where robocopy is still correct (small migrations, non-standard requirements).
5. **NotPetya lessons applied at home.** Architect a "ransomware survives" backup strategy for a 2,000-server enterprise. What are the non-negotiables: immutable vault, separate Entra credentials for backup admin, GRS cross-region, ASR test failover quarterly, and air-gapped recovery runbook? What's the realistic monthly cost for 2,000 servers?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Azure Backup overview](https://learn.microsoft.com/azure/backup/backup-overview)
- 📖 [Microsoft Learn — Azure Site Recovery overview](https://learn.microsoft.com/azure/site-recovery/site-recovery-overview)
- 📖 [Storage Migration Service overview](https://learn.microsoft.com/windows-server/storage/storage-migration-service/overview)
- 📖 [Azure Migrate overview](https://learn.microsoft.com/azure/migrate/migrate-services-overview)
- 📖 [Recovery Services Vault — immutable vault feature](https://learn.microsoft.com/azure/backup/backup-azure-immutable-vault-concept)
- 📖 [ADMT documentation (still hosted, marked legacy)](https://learn.microsoft.com/troubleshoot/windows-server/identity/admt-installation)
- 📖 Andy Greenberg, *Sandworm: A New Era of Cyberwar and the Hunt for the Kremlin's Most Dangerous Hackers* (Doubleday, 2019) — definitive narrative on NotPetya/Maersk
- 📖 Harvard Business School Case 9-619-058, *Maersk: Surviving NotPetya* (2019) — the classroom MBA take
