# ✏️ Module 9 Quiz: Backup, ASR & Migration

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. The Microsoft Azure Recovery Services (MARS) agent backs up: *(Remember)*
A. Files, folders, and System State on Windows
B. Whole Azure VMs only
C. SQL transaction logs application-aware
D. Hyper-V VMs

---

### Q2. MARS allows a MAXIMUM of how many backups per day per machine? *(Remember)*
A. 1
B. 3
C. 8
D. Unlimited

---

### Q3. Microsoft Azure Backup Server (MABS) is BEST for: *(Apply)*
A. Backing up files only
B. App-aware VSS backup of SQL/SharePoint/Exchange + VMs + offload to Azure
C. Backing up Linux servers only
D. Replacing AD

---

### Q4. The Recovery Services Vault's storage redundancy (LRS/ZRS/GRS) can be changed: *(Remember)*
A. Anytime
B. Only BEFORE the first backup
C. Only at the OS level
D. Only after a quarter

---

### Q5. The default soft delete retention for Recovery Services Vault is: *(Remember)*
A. 7 days
B. 14 days
C. 30 days
D. 60 days

---

### Q6. Azure Site Recovery (ASR) typical RPO is: *(Remember)*
A. ~30 seconds
B. 1 hour
C. 4 hours
D. 24 hours

---

### Q7. ASR test failover is: *(Understand)*
A. Disruptive — pauses replication
B. Non-disruptive — runs in a parallel test environment
C. Same as production failover
D. Not supported

---

### Q8. Storage Migration Service (SMS) phases are: *(Remember)*
A. Inventory → Transfer → Cutover
B. Backup → Restore → Verify
C. Discover → Replicate → Failover
D. Plan → Build → Migrate

---

### Q9. Azure Migrate uses which underlying service for VM replication during migration? *(Understand)*
A. Azure Backup
B. ASR (Azure Site Recovery)
C. Hyper-V Replica
D. Storage Replica

---

### Q10. **Yes/No** — Mark each statement. *(Evaluate)*

**S1:** MARS can do application-consistent SQL backup.
**S2:** MABS is a free software (Azure-side storage is billed).
**S3:** ASR can replicate AWS EC2 instances to Azure.

A. No / Yes / Yes
B. No / No / Yes
C. Yes / Yes / Yes
D. Yes / Yes / No

---

### Q11. Active Directory Migration Tool (ADMT) preserves which attribute for resource access continuity? *(Remember)*
A. SID History
B. UPN
C. samAccountName
D. ObjectGUID

---

### Q12. The Recovery Services Vault feature that locks deletion for a configured period (compliance-grade) is: *(Remember)*
A. Soft delete
B. Immutable vault
C. Quick restore
D. CMK

---

### Q13. To replicate Azure VMs from one Azure region to another for DR, use: *(Apply)*
A. Azure Backup
B. ASR Azure-to-Azure replication
C. Storage Replica
D. Hyper-V Replica

---

### Q14. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** Storage Migration Service supports source servers from Windows Server 2003+.
**S2:** Azure Migrate appliance must be deployed in the source environment for discovery.
**S3:** ADMT is actively developed by Microsoft for new migrations.

A. Yes / Yes / No
B. No / Yes / No
C. Yes / No / Yes
D. Yes / Yes / Yes

---

### Q15. The MAXIMUM retention for MARS backups is: *(Remember)*
A. 30 days
B. 1 year
C. 9,999 days
D. Unlimited

---

### Q16. **Order these steps** to enable DR for an on-prem Hyper-V VM via ASR. *(Create)*

1. Create Recovery Services Vault in the target Azure region
2. Install the ASR provider on the Hyper-V host; register host in the vault
3. Create a replication policy (frequency, recovery points, app-consistent freq)
4. Enable replication on the VM
5. Run a non-disruptive test failover quarterly

A. 1 → 2 → 3 → 4 → 5
B. 2 → 1 → 3 → 4 → 5
C. 1 → 3 → 2 → 4 → 5
D. 3 → 1 → 2 → 4 → 5

---

### Q17. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** GRS Recovery Services Vault supports cross-region restore.
**S2:** Per-vault soft delete cannot be disabled.
**S3:** Backup policies in MABS support long-term retention via Azure tiers.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / Yes / No

---

### Q18. The Maersk NotPetya disaster (2017) was contained by: *(Understand)*
A. One surviving DC in Ghana (offline at the time of attack)
B. Azure Backup running at the time
C. Pre-deployed ASR
D. None of the above — Maersk lost everything

---

### Q19. For a critical SQL workload requiring RPO 0 across two metro data centers, the BEST choice is: *(Apply)*
A. Azure Site Recovery 30-sec RPO
B. Storage Replica synchronous + stretch cluster (or SQL Always-On AG sync)
C. MARS only
D. Manual nightly backups

---

### Q20. Which is TRUE about Azure Backup encryption? *(Understand)*
A. Plaintext at rest
B. Encrypted at rest by default with Microsoft-managed keys; CMK is supported
C. Encryption requires Defender for Servers P2
D. Encryption is opt-in

---

### Q21. To migrate 12 Windows Server 2008 R2 file servers to Windows Server 2022 with preserved IP/name + ACLs: *(Apply)*
A. ASR
B. Storage Migration Service
C. MABS
D. Azure Migrate Database tool

---

### Q22. **Yes/No** — Mark each statement. *(Apply)*

**S1:** ASR Recovery Plans can include pre-script and post-script automation.
**S2:** ASR supports planned, unplanned, and test failover.
**S3:** Azure Migrate replaces ASR.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

---

### Q23. The Recovery Services Vault is per: *(Remember)*
A. Subscription
B. Resource group
C. Region
D. Tenant

---

### Q24. To stream every backup job result to a Log Analytics workspace for centralized reporting, configure: *(Apply)*
A. Vault Diagnostic settings → Log Analytics workspace destination
B. PowerShell scheduled task
C. Manual export only
D. Email notifications

---

### Q25. ASR Mobility Service agent runs on: *(Remember)*
A. The Azure target VM
B. The source machine (Hyper-V VM, VMware VM, physical, or Azure VM for A2A)
C. The Azure Site Recovery vault
D. The Hyper-V host only

---

### Q26. Microsoft's CURRENT direction for AD migration scenarios (M&A) is to: *(Understand)*
A. Use ADMT exclusively
B. Use modern Entra ID cross-tenant migration where feasible; ADMT for on-prem-to-on-prem still applicable
C. Manually export users
D. Wait for a Microsoft consultant

---

## 🎯 Answers + Explanations

### Q1: **A. Files, folders, and System State on Windows**
MARS is the lightweight file-level agent. App-aware = MABS.

### Q2: **B. 3**
MARS limit is 3 backups per day per machine. For more, use MABS or VM-level backup.

### Q3: **B. App-aware VSS backup of SQL/SharePoint/Exchange + VMs + offload to Azure**
MABS = on-prem DPM-based backup server with Azure offload.

### Q4: **B. Only BEFORE the first backup**
Locked after first backup registration. Plan carefully.

### Q5: **B. 14 days**
Default soft delete is 14 days. Configurable; immutable vault is harder lock.

### Q6: **A. ~30 seconds**
ASR achieves ~30s RPO via continuous Mobility Service → cache → vault replication.

### Q7: **B. Non-disruptive — runs in a parallel test environment**
Critical operational fact. Run quarterly minimum.

### Q8: **A. Inventory → Transfer → Cutover**
The three SMS phases.

### Q9: **B. ASR (Azure Site Recovery)**
Azure Migrate uses ASR under the hood for VM migration.

### Q10: **A. No / Yes / Yes**
S1 wrong (MARS is files/folders only — use MABS for SQL VSS). S2 correct. S3 correct.

### Q11: **A. SID History**
SID History preserves the original SIDs so file-server ACLs continue to work post-migration.

### Q12: **B. Immutable vault**
Newer feature; compliance-grade hard lock on deletion within configured period.

### Q13: **B. ASR Azure-to-Azure replication**
A2A is a fully supported ASR scenario for cross-region DR within Azure.

### Q14: **A. Yes / Yes / No**
S1 correct (SMS supports 2003+). S2 correct (appliance VM in source). S3 wrong (ADMT is legacy/community-supported).

### Q15: **C. 9,999 days**
MARS max retention is 9,999 days (~27 years).

### Q16: **A. 1 → 2 → 3 → 4 → 5**
Vault → host registration → policy → enable VM replication → test failover.

### Q17: **A. Yes / No / Yes**
S1 correct (GRS = cross-region restore). S2 wrong (soft delete can be disabled, though discouraged). S3 correct.

### Q18: **A. One surviving DC in Ghana (offline at the time of attack)**
The single surviving DC was flown to Maidenhead and became the AD rebuild seed.

### Q19: **B. Storage Replica synchronous + stretch cluster (or SQL Always-On AG sync)**
RPO 0 requires synchronous replication. ASR is async (30s RPO).

### Q20: **B. Encrypted at rest by default with Microsoft-managed keys; CMK is supported**
Azure Backup always encrypts. CMK option for compliance.

### Q21: **B. Storage Migration Service**
SMS is the right tool for the modernize-and-cutover scenario on file servers.

### Q22: **A. Yes / Yes / No**
S1 correct (Recovery Plans support runbooks pre/post). S2 correct (3 failover types). S3 wrong (Azure Migrate USES ASR; doesn't replace).

### Q23: **C. Region**
Vault is regional. Plan one per region per workload class for clarity.

### Q24: **A. Vault Diagnostic settings → Log Analytics workspace destination**
Standard Azure diagnostic settings pattern.

### Q25: **B. The source machine**
Mobility Service runs on the source (Hyper-V VM, VMware VM, physical, or Azure VM for A2A).

### Q26: **B. Use modern Entra ID cross-tenant migration where feasible; ADMT for on-prem-to-on-prem still applicable**
Microsoft pushes cloud-first migration; ADMT remains for on-prem use cases.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Backup/DR domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read Vault + MARS/MABS + ASR sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- MARS = files/folders/System State, 3 per day max, 9,999 days max retention
- MABS = full-featured DPM-based, app-aware VSS for SQL/SP/Exchange/VMs
- Recovery Services Vault: redundancy locked at first backup, soft delete 14d default, immutable vault for hard lock
- ASR RPO ~30s; test failover is non-disruptive
- ASR supports Hyper-V/VMware/physical/AWS/Azure-to-Azure
- Storage Migration Service: Inventory → Transfer → Cutover
- Azure Migrate uses ASR for VM migration
- ADMT preserves SID History for AD migrations
- Vault is regional
- Maersk: 1 surviving DC in Ghana saved the company; immutable cloud backup is the lesson

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 10](../Module-10-PowerShell-Automation/Reading.md)
