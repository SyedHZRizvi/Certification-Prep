# ✏️ Module 9 Quiz: Backup, Recovery & Migration

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24 minimum.

---

## Questions

### Q1. The Recovery Services Vault redundancy choice is set:
A. After backup is configured
B. At vault creation (LRS / GRS / ZRS) — hard to change later
C. By the policy
D. Automatically based on region

---

### Q2. Cross-Region Restore for Azure Backup requires:
A. LRS vault
B. GRS vault + the cross-region-restore feature enabled
C. ZRS vault
D. Site Recovery enabled

---

### Q3. Which is application-consistent on Windows Azure VMs?
A. Snapshot only
B. VSS-coordinated snapshot
C. Crash-consistent dump
D. iSCSI clone

---

### Q4. MARS agent backs up:
A. Linux files only
B. Windows files/folders + System State to Azure
C. SQL Server only
D. Entire VMs

---

### Q5. Yes/No — Vaults & soft delete.

**S1:** Soft delete is on by default and retains deleted recovery points for 14 days minimum.
**S2:** An immutable vault prevents disabling soft delete.
**S3:** You can shorten the soft-delete retention to 0 days for an immutable vault.

A. Yes / Yes / No
B. Yes / No / No
C. No / Yes / Yes
D. Yes / Yes / Yes

---

### Q6. To require a second admin's approval before disabling backup, use:
A. PIM only
B. Multi-User Authorization (MUA) via a Resource Guard
C. Resource Locks
D. NSGs

---

### Q7. Azure Site Recovery (ASR) is best for:
A. Restoring a deleted Word file
B. Failing over an entire region to a paired region with RPO measured in seconds
C. Backing up Azure SQL DB
D. Migrating from AWS

---

### Q8. **Order these steps** to protect a production VM with backup + DR.

1. Create a GRS vault
2. Enable MUA / Resource Guard
3. Create a backup policy (GFS retention, app-consistent)
4. Enable backup for the VM
5. Set up ASR replication to the paired region
6. Run a test failover

A. 1 → 2 → 3 → 4 → 5 → 6
B. 1 → 3 → 4 → 2 → 5 → 6
C. 3 → 1 → 2 → 4 → 5 → 6
D. 1 → 5 → 2 → 3 → 4 → 6

---

### Q9. The ASR failover type you'd use during a real disaster is:
A. Test failover
B. Planned failover
C. Unplanned failover
D. Recovery plan

---

### Q10. ASR Test failover:
A. Affects production
B. Spins up the replica in an isolated network with no impact on production
C. Requires region migration
D. Costs nothing

---

### Q11. RPO stands for:
A. Recovery Plan Order
B. Recovery Point Objective — max data you can lose
C. Replicated Process Output
D. Resource Provider Owner

---

### Q12. Azure Migrate phases are:
A. Plan → Execute → Validate
B. Discover → Assess → Migrate
C. Inventory → Replicate → Cut over
D. Scan → Move → Confirm

---

### Q13. Yes/No — Backup workloads.

**S1:** Azure Backup supports backing up Azure Files shares.
**S2:** Azure Backup supports SQL Server and SAP HANA running inside Azure VMs.
**S3:** Azure Backup can back up Azure Blob storage (operational + vaulted).

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q14. The GFS retention scheme uses:
A. Year/Day only
B. Grandfather (yearly), Father (monthly), Son (daily/weekly)
C. Random sampling
D. Hourly only

---

### Q15. Which is FALSE about ASR replication?
A. Replication is continuous
B. Multiple recovery points are kept for app-consistency
C. ASR is a substitute for daily backups
D. Failback re-replicates the target VM back to the source

---

### Q16. For Linux VMs, application-consistent backups are achieved via:
A. VSS writer
B. Pre-script and post-script in `/etc/azure/`
C. Forced reboot
D. Filesystem freeze automatically

---

### Q17. Which storage redundancy enables Cross-Region Restore?
A. LRS
B. ZRS
C. GRS
D. RA-GZRS

---

### Q18. A primary Azure region fails. Without ASR, what's the fastest restore option from a GRS backup vault?
A. Wait for the region to come back
B. Use **Cross-Region Restore** to restore to the paired region
C. Re-deploy from scratch
D. Manual data export

---

### Q19. Azure Migrate's assessment tool produces:
A. Performance + dependency graph + Azure VM size recommendations + cost estimate
B. Just a list of VMs
C. A NIST 800-53 report
D. A NSG simulation

---

### Q20. Yes/No — Site Recovery.

**S1:** ASR can replicate Azure VMs to another Azure region.
**S2:** ASR can replicate VMware on-prem to Azure.
**S3:** ASR can replicate Azure SQL Database via ASR.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q21. Vaulted (immutable) blob backups protect against:
A. Cost overruns
B. Ransomware / malicious deletion
C. Network outages
D. RBAC misconfiguration

---

### Q22. The Instant Restore tier retains:
A. Snapshots near the source for fast restore (1–5 days)
B. Long-term backups
C. ASR replication data
D. Vault diagnostic settings

---

### Q23. To migrate a SQL Server from on-prem to Azure SQL Managed Instance, the right tool is:
A. Azure Site Recovery
B. Azure Migrate Database tool (or Azure DMS / DMA)
C. AzCopy
D. ARM templates

---

### Q24. **Order these steps** for an Azure Migrate VMware-to-Azure migration.

1. Create an Azure Migrate project
2. Deploy the Azure Migrate appliance on-prem (registers with the project)
3. Run discovery + dependency analysis
4. Generate assessment reports
5. Enable replication for selected VMs
6. Run a test migration → then cutover migration

A. 1 → 2 → 3 → 4 → 5 → 6
B. 2 → 1 → 3 → 4 → 5 → 6
C. 1 → 3 → 2 → 4 → 5 → 6
D. 1 → 2 → 4 → 3 → 5 → 6

---

## 🎯 Answers + Explanations

### Q1: **B. At vault creation — hard to change later**
Some conversions (GRS↔LRS) are supported with limits; ZRS is harder. Plan ahead.

### Q2: **B. GRS vault + the cross-region-restore feature enabled**
Toggle is opt-in; without it you can only restore in the source region from a GRS vault.

### Q3: **B. VSS-coordinated snapshot**
Windows = VSS. Linux uses pre/post scripts.

### Q4: **B. Windows files/folders + System State to Azure**
MARS is a lightweight Windows-only agent. For Linux/SQL/SAP HANA, use the VM workload extensions or MABS.

### Q5: **A. Yes / Yes / No**
Soft delete is default-on, immutable vault locks the config, and you cannot drop retention to 0.

### Q6: **B. Multi-User Authorization (MUA) via a Resource Guard**
Microsoft's "4-eyes" pattern for backup.

### Q7: **B. Failing over an entire region to a paired region with RPO measured in seconds**
ASR is region-level DR, not file-level recovery.

### Q8: **A. 1 → 2 → 3 → 4 → 5 → 6**
Vault → MUA → policy → enable backup → ASR → test failover.

### Q9: **C. Unplanned failover**
Used when source is unreachable — last replicated point becomes the recovery point.

### Q10: **B. Spins up the replica in an isolated network with no impact on production**
Test failovers are non-disruptive and should be run periodically.

### Q11: **B. Recovery Point Objective — max data you can lose**
RTO = Recovery Time. RPO = Recovery Point (data freshness).

### Q12: **B. Discover → Assess → Migrate**
The Azure Migrate canonical phases.

### Q13: **A. Yes / Yes / Yes**
All three workloads are supported.

### Q14: **B. Grandfather (yearly), Father (monthly), Son (daily/weekly)**
Classic backup retention scheme used in Azure Backup policies.

### Q15: **C. ASR is a substitute for daily backups**
ASR ≠ backup. Use both.

### Q16: **B. Pre-script and post-script in `/etc/azure/`**
Files quiesce/resume the app for consistency.

### Q17: **C. GRS**
Cross-Region Restore is built on geo-redundant storage. (RA-GZRS works in principle but the canonical AZ-104 answer is GRS for the vault.)

### Q18: **B. Use Cross-Region Restore to restore to the paired region**
The whole point of GRS + CRR.

### Q19: **A. Performance + dependency graph + Azure VM size recommendations + cost estimate**
The assessment output.

### Q20: **A. Yes / Yes / No**
Azure SQL DB has its own geo-replication / failover groups — not ASR.

### Q21: **B. Ransomware / malicious deletion**
Vaulted immutable backups can't be modified or deleted before retention expires.

### Q22: **A. Snapshots near the source for fast restore (1–5 days)**
Faster restore for recent points.

### Q23: **B. Azure Migrate Database tool (or Azure DMS / DMA)**
Site Recovery is for whole-machine; DB-aware tools handle schema/data nuances.

### Q24: **A. 1 → 2 → 3 → 4 → 5 → 6**
The canonical Azure Migrate flow.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Backup/DR mastered.
- 20–22/24 → ✅ Strong.
- 16–19/24 → ⚠️ Re-read ASR + Migrate sections.
- <16/24 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- RSV redundancy set at create
- GRS unlocks Cross-Region Restore (CRR opt-in)
- Soft delete default 14 days
- MUA = 4-eyes via Resource Guard
- MARS = Windows files; MABS = full DPM
- RPO vs RTO
- ASR failover types (test / planned / unplanned)
- Migrate: Discover → Assess → Migrate

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10](../Module-10-Monitor-Governance/Reading.md)
