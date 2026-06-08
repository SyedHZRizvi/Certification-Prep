# ✏️ Module 4 Quiz: Azure Files & File Sync

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24 minimum.

---

## Questions

### Q1. Azure Files supports which protocols? *(Remember)*
A. HTTP only
B. SMB 2.1/3 and NFS 4.1
C. FTP and SFTP
D. iSCSI

---

### Q2. NFS 4.1 shares require which account kind? *(Remember)*
A. StorageV2 standard
B. Premium FileStorage
C. BlockBlobStorage
D. StorageV1

---

### Q3. Premium file shares bill you for: *(Remember)*
A. Used capacity only
B. Provisioned size
C. Transactions only
D. Egress only

---

### Q4. Which auth method gives **per-user** audit logs for SMB access? *(Understand)*
A. Storage account key
B. SAS token
C. Entra Kerberos / AD DS identity-based auth
D. Anonymous access

---

### Q5. Azure File Sync caches files on: *(Remember)*
A. Azure Front Door
B. A registered Windows Server
C. A Linux VM
D. The user's local SSD via Intune

---

### Q6. Cloud tiering replaces infrequently used files locally with: *(Understand)*
A. ZIP files
B. Tiny pointer (stub) files
C. Encrypted backups
D. Symlinks to Azure Blob

---

### Q7. **Order these steps** to deploy Azure File Sync. *(Create)*

1. Install the Sync agent on a Windows Server and register it
2. Create the Storage Sync Service
3. Create a sync group
4. Add a cloud endpoint (Azure file share)
5. Add a server endpoint on the registered server

A. 2 → 3 → 4 → 1 → 5
B. 1 → 2 → 3 → 4 → 5
C. 2 → 1 → 3 → 4 → 5
D. 3 → 2 → 1 → 4 → 5

---

### Q8. Yes/No, File Sync. *(Evaluate)*

**S1:** Cloud tiering supports policies based on volume free space and/or last access date.
**S2:** A sync group can have multiple server endpoints.
**S3:** Sync replaces the need for taking backups.

A. Yes / Yes / No
B. Yes / No / No
C. Yes / Yes / Yes
D. No / Yes / Yes

---

### Q9. To restore a single deleted file from yesterday using Azure Files share snapshots, the user can: *(Apply)*
A. Use the "Previous Versions" tab in Windows File Explorer
B. Run `az restore-blob`
C. Wait 24 hours for auto-restore
D. Snapshots are write-only

---

### Q10. SMB 3.x encryption is required when: *(Understand)*
A. Always, no exceptions
B. "Secure transfer required" is enabled on the storage account (which also enforces HTTPS)
C. Only Premium share
D. Only for NFS

---

### Q11. To grant a user permission to mount an Azure file share via SMB (with identity-based auth) AND modify only one folder, you must: *(Apply)*
A. Grant the share-level RBAC role + apply NTFS ACLs on the folder
B. Grant Storage Account Contributor
C. Grant Owner at the sub
D. Use SAS only

---

### Q12. Which RBAC role allows a user to mount and read-only access an Azure file share via SMB? *(Apply)*
A. Reader
B. Storage Account Contributor
C. Storage File Data SMB Share Reader
D. Storage Blob Data Reader

---

### Q13. The MAX size of a standard file share (with large file share enabled) is approximately: *(Remember)*
A. 5 TB
B. 100 TB
C. Up to 100 TB per share
D. Unlimited

---

### Q14. NFS shares on Azure Files support what redundancy? *(Understand)*
A. LRS, ZRS, GRS, GZRS
B. LRS or ZRS only
C. GZRS only
D. GRS only

---

### Q15. Encryption in transit for NFS 4.1 on Azure Files is: *(Understand)*
A. Always on
B. Not supported, secure with network isolation (private endpoint / VNet)
C. Enabled by setting `--encryption true`
D. Enabled via Conditional Access

---

### Q16. Yes/No, Azure Files tiers. *(Analyze)*

**S1:** Premium is suited for latency under 5 ms.
**S2:** Cool tier has cheaper storage but more expensive transactions than Hot.
**S3:** You can change a share's tier in place from Hot to Cool.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q17. To prevent accidental share deletion, enable: *(Apply)*
A. Resource lock + soft delete for shares
B. Customer-managed key
C. Cloud tiering
D. Disable public access

---

### Q18. A small branch office mounts `Z:` to an Azure file share over a slow VPN. Files take 10+ seconds to open. The BEST solution to keep Azure as source of truth but accelerate local access: *(Analyze)*
A. Switch to Premium tier
B. Deploy Azure File Sync on a local Windows Server with cloud tiering
C. Move to blob storage
D. Increase share quota

---

### Q19. Which is TRUE about cloud tiering and excluded files? *(Understand)*
A. Cloud tiering tiers every file regardless of type
B. System state, paging, and AV-quarantined binaries should be excluded
C. Cloud tiering only works on Linux
D. Tiering happens only once per year

---

### Q20. Identity-based SMB auth with hybrid users (synced from AD) is BEST done with: *(Apply)*
A. Storage account key
B. Entra Kerberos / on-prem AD DS auth
C. SAS only
D. NFS

---

### Q21. The Azure File Sync agent runs on: *(Remember)*
A. Linux Servers (Ubuntu/RHEL)
B. Windows Server (2016 or newer supported versions)
C. macOS
D. Containers only

---

### Q22. Yes/No, Mark each. *(Evaluate)*

**S1:** Azure Files share snapshots are read-only.
**S2:** Azure Backup for file shares uses a Recovery Services vault.
**S3:** Deleting a storage account also deletes share snapshots inside it.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q23. A common reason to choose Azure Files over Blob is: *(Understand)*
A. Cheaper per GB
B. Native SMB/NFS protocol for "lift and shift" file servers and concurrent file locking
C. Built-in CDN
D. Larger object sizes

---

### Q24. To restrict access to an Azure file share from one specific VNet only, you can: *(Apply)*
A. Use a service endpoint or private endpoint and restrict the firewall to that VNet/subnet
B. Use a Reader RBAC role
C. Set the tier to Cool
D. Enable cross-region replication

---

## 🎯 Answers + Explanations

### Q1: **B. SMB 2.1/3 and NFS 4.1**
SMB is the default. NFS 4.1 requires Premium FileStorage.

### Q2: **B. Premium FileStorage**
NFS isn't available on standard StorageV2 file shares.

### Q3: **B. Provisioned size**
Premium bills for what you provision (whether you use it or not). Standard tiers bill for used size.

### Q4: **C. Entra Kerberos / AD DS identity-based auth**
Storage key auth gives a shared "Azure\<account>" identity, no per-user trail.

### Q5: **B. A registered Windows Server**
The Sync agent runs on Windows Server. Linux is not supported.

### Q6: **B. Tiny pointer (stub) files**
Stub files are a few KB; the data lives in Azure until accessed.

### Q7: **A. 2 → 3 → 4 → 1 → 5**
Build the Azure side first (Sync service → group → cloud endpoint), then register a server, then add the server endpoint.

### Q8: **A. Yes / Yes / No**
Tiering supports volume free space + date. A sync group can have multiple server endpoints (multi-site). Sync isn't backup, you still need snapshots/RSV.

### Q9: **A. "Previous Versions" tab in Windows File Explorer**
Snapshots appear as Previous Versions for SMB clients.

### Q10: **B. "Secure transfer required" is enabled**
This setting forces HTTPS (REST) and SMB 3.x encryption. Default on for new accounts.

### Q11: **A. Grant share-level RBAC role + apply NTFS ACLs**
RBAC = share-level. NTFS = file/folder-level. Both must allow.

### Q12: **C. Storage File Data SMB Share Reader**
Specific share-data role. The control-plane Reader can't actually open files via SMB.

### Q13: **C. Up to 100 TB per share**
With large file share enabled, standard share quota goes up to 100 TB. (Premium also up to 100 TB.)

### Q14: **B. LRS or ZRS only**
NFS shares can't be geo-replicated. Use app-level replication if needed.

### Q15: **B. Not supported, secure with network isolation**
A famous gotcha. NFS clients don't negotiate TLS, restrict by VNet / private endpoint.

### Q16: **A. Yes / Yes / Yes**
Premium for low latency; Cool optimizes storage at the cost of higher transaction $; tier can be changed.

### Q17: **A. Resource lock + soft delete for shares**
Two-layer protection. Soft delete = recoverable for 1–365 days.

### Q18: **B. Deploy Azure File Sync on a local Windows Server with cloud tiering**
The textbook branch-office scenario.

### Q19: **B. System state, paging, and AV-quarantined binaries should be excluded**
These don't tier well and can cause server instability.

### Q20: **B. Entra Kerberos / on-prem AD DS auth**
Hybrid users authenticate with their normal AD identity.

### Q21: **B. Windows Server (2016 or newer supported versions)**
No Linux agent. Container = no. Mac = no.

### Q22: **A. Yes / Yes / Yes**
All correct. Snapshots are read-only; RSV backs up shares; deleting the account removes everything inside.

### Q23: **B. Native SMB/NFS protocol for "lift and shift" and concurrent file locking**
Blob doesn't speak SMB and doesn't have real file locks.

### Q24: **A. Use a service endpoint or private endpoint and restrict the firewall**
Same patterns as blob storage. Private endpoint is the stronger lock-down.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Files & Sync mastered.
- 20–22/24 → ✅ Solid, continue.
- 16–19/24 → ⚠️ Re-read identity auth + File Sync sections.
- <16/24 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- SMB auth options (key, Entra Kerberos, AD DS, Entra DS)
- NFS = Premium FileStorage only, LRS/ZRS, no in-transit encryption
- Premium = provisioned billing; standard = used billing
- File Sync agent only on Windows Server
- Cloud tiering policies (volume free space + date)
- Sync ≠ backup

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5](../Module-05-Virtual-Machines/Reading.md)
