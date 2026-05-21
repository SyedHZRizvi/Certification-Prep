# Module 4: Azure Files & File Sync 📂

> **Why this module matters:** Half of every IT shop still relies on SMB file shares. Azure Files lets you "lift and shift" them to the cloud, and File Sync lets you cache them locally for low-latency access. Smaller domain than blob, but the exam *will* test SMB vs NFS, AD auth modes, and cloud tiering.

---

## 🍕 A Story: The Architect's "Drive Z:"

Meet the architect at Bertolli & Sons construction. Every Monday she opens File Explorer, clicks `Drive Z:`, and pulls up the project plans for that week — 80 GB of CAD files, blueprints, contracts. That `Z:` is mapped to `\\fileserver01\projects` running on a Dell box in a server closet that's older than her firstborn. When the server's power supply died last summer, the whole firm sat idle for 3 days.

Her IT person, Diego, finally migrates the share to **Azure Files**. The `Z:` mapping now points to `\\bertollifiles.file.core.windows.net\projects`. The CAD files live in Azure. Backed up. Geo-redundant. Indexed by Defender.

But Diego notices a problem: a 200 MB CAD file takes 6 seconds to open over the WAN, vs 0.5 seconds when it lived in the closet. So Diego installs **Azure File Sync** on a small Windows Server in the same office. Now Bertolli has the same share *cached locally*, but Azure is the source of truth. Files used in the last 30 days are stored locally on the cache server (fast). Old files exist as tiny "stub" placeholders that get pulled down on demand (slow but rare). Snapshots in Azure. SMB clients see no difference. **That's Azure Files + File Sync.**

---

## 📁 Azure Files vs Blob Storage

| | Azure Files | Blob Storage |
|---|-------------|--------------|
| Protocol | SMB 2.1/3 or NFS 4.1 | HTTPS (REST) |
| Mounting | `net use Z:` (Windows), `mount` (Linux/Mac) | Application code or Storage Explorer |
| Folder structure | Native folder tree | Flat namespace with `/` prefixes |
| File locking | Yes (real SMB locks) | Lease-based only |
| Concurrent access | Multi-machine read/write | App-managed concurrency |
| Best for | Lift-and-shift file servers, app config shares, dev tools | Object storage, backups, big data, web assets |

---

## 🗄️ File Share Tiers

Sit inside a storage account. Choose tier per **share**, not per file.

| Tier | Backed by | Use case | Cost note |
|------|-----------|----------|-----------|
| **Premium** | SSD (FileStorage account) | Latency-sensitive (under 5 ms) | Pay for provisioned size |
| **Transaction Optimized** | HDD (StorageV2) | High-IOPS workloads | Pay for used GB + transactions |
| **Hot** | HDD (StorageV2) | General-purpose | Pay for used GB + transactions |
| **Cool** | HDD (StorageV2) | Infrequent access | Cheapest storage, higher transaction $ |

🔥 **Premium is billed for *provisioned* size; standard tiers bill for *used* size.** This trips people up.

### Create a standard (Hot) share via CLI

```bash
az storage share-rm create \
    --resource-group rg-data \
    --storage-account stcontosofiles001 \
    --name projects \
    --quota 1024 \
    --access-tier Hot
```

### PowerShell — create a premium share

```powershell
$ctx = (Get-AzStorageAccount -ResourceGroupName rg-data -Name stcontosofilesprem).Context
New-AzStorageShare -Name "projects" -Context $ctx
```

---

## 🔐 Authentication & Identity for SMB

The exam tests these three options carefully:

| Method | What it is | Where users live |
|--------|------------|------------------|
| **Storage account key** | Username = account name, password = key | Anyone with the key |
| **Entra Kerberos for hybrid identities** | Modern, Entra ID handles tickets | Hybrid users synced from AD |
| **AD DS** (on-prem AD via line-of-sight) | Classic; storage account is "domain-joined" via a service account | On-prem AD users |
| **Entra Domain Services (Entra DS)** | Managed domain that mimics AD | Cloud-only Entra users get NTLM/Kerberos |

After Kerberos auth happens at the SMB level, **NTFS-style ACLs** on files/folders enforce per-file authorization — set via Windows File Explorer or `icacls`.

🔥 **MEMORIZE this layering:**
1. SMB connects with Kerberos (or storage account key)
2. Azure RBAC role grants **share-level access** (`Storage File Data SMB Share Reader/Contributor/Elevated Contributor`)
3. **NTFS ACLs** grant **file/folder-level access**

Both #2 and #3 must allow the action.

### Mount on Windows (PowerShell)

```powershell
# Persistent mount as Z: using storage account key
$key = (Get-AzStorageAccountKey -ResourceGroupName rg-data -Name stcontosofiles001)[0].Value
$user = "Azure\stcontosofiles001"
$pass = ConvertTo-SecureString $key -AsPlainText -Force
$cred = New-Object System.Management.Automation.PSCredential($user, $pass)

New-PSDrive -Name Z -PSProvider FileSystem `
    -Root "\\stcontosofiles001.file.core.windows.net\projects" `
    -Credential $cred -Persist
```

### Mount on Linux (SMB 3)

```bash
sudo mount -t cifs //stcontosofiles001.file.core.windows.net/projects /mnt/projects \
    -o vers=3.0,credentials=/etc/smbcredentials/stcontosofiles001.cred,dir_mode=0755,file_mode=0644,serverino
```

---

## 🐧 NFS 4.1 Shares (Premium only)

For Linux workloads that demand POSIX semantics (chmod, chown, symlinks).

| Constraint | Detail |
|------------|--------|
| Account kind | **Premium FileStorage** only |
| Redundancy | LRS or ZRS (no GRS for NFS) |
| Encryption-in-transit | **Not supported on NFS** — must use private endpoint / VNet isolation |
| Auth | Network-based only (no Kerberos, no AD) — secure by network |

```bash
# Create NFS 4.1 share on a premium FileStorage account
az storage share-rm create \
    --resource-group rg-data \
    --storage-account stcontosonfsprem \
    --name datasets \
    --enabled-protocols NFS \
    --root-squash NoRootSquash \
    --quota 1024
```

---

## 🔄 Azure File Sync

The killer feature: a **Windows Server** acts as a cache for an Azure file share, giving local LAN-speed access while Azure remains the source of truth.

```
┌─────────────────┐         ┌──────────────────────┐
│ Branch office   │ SMB     │  Windows Server      │
│ PCs / Macs      │ ──────► │  (Sync agent + cache) │
└─────────────────┘         └──────────┬───────────┘
                                       │ HTTPS sync
                                       ▼
                             ┌──────────────────────┐
                             │  Azure Files share   │  ← cloud endpoint (source of truth)
                             └──────────────────────┘
```

### Key components

| Component | Role |
|-----------|------|
| **Storage Sync Service** | The Azure resource that orchestrates sync (lives in an RG) |
| **Sync group** | Defines what data syncs together |
| **Cloud endpoint** | The Azure file share inside a sync group |
| **Server endpoint** | A path on a registered Windows Server in the sync group |
| **Registered server** | A Windows Server with the Sync agent installed |

### Cloud tiering

If enabled on a server endpoint, files not accessed recently are replaced on disk with tiny **pointer files** (a few KB). When a user opens one, it's transparently pulled from Azure.

| Tiering policy | What it does |
|----------------|--------------|
| **Volume free space** | Keeps a target % of disk free by tiering out old files |
| **Date** | Tier files older than N days |
| Both | Stricter of the two wins |

🔥 **Trap:** Cloud tiering doesn't work for **system state, paging, or AV-scanned binaries** — those should be excluded.

### Deploy File Sync via CLI

```bash
# 1. Create the Storage Sync Service
az storagesync create \
    --resource-group rg-sync \
    --name sync-corp-files \
    --location eastus

# 2. Create a sync group
az storagesync sync-group create \
    --resource-group rg-sync \
    --storage-sync-service sync-corp-files \
    --name projects-sync

# 3. Add the cloud endpoint (uses storage account + share)
az storagesync sync-group cloud-endpoint create \
    --resource-group rg-sync \
    --storage-sync-service sync-corp-files \
    --sync-group-name projects-sync \
    --name projects-cloud \
    --storage-account stcontosofiles001 \
    --azure-file-share-name projects

# 4. (Then install agent on each server and add a server endpoint via GUI or PowerShell)
```

---

## 📸 Snapshots & Backup

### Built-in Azure Files share snapshots

Read-only, point-in-time copies. Stored in the same account. Quick to take.

```bash
az storage share snapshot \
    --account-name stcontosofiles001 \
    --name projects
```

Access via "Previous Versions" in Windows Explorer. Or restore individual files.

### Azure Backup for File Shares

Centralized policy-based backup using a **Recovery Services vault** (Module 9).
- Daily snapshots up to 200/day kept
- Soft delete for backups (14-day default)
- Item-level restore (per file/folder)

### Soft delete

Recover an entire deleted share within retention (1–365 days). Separate from snapshot history.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "NFS shares support GRS" | ❌ NFS = LRS or ZRS only |
| "SMB encryption is optional" | ❌ SMB 3.x encryption is enforced when "Secure transfer required" is on |
| "Storage account key gives RBAC-level audit" | ❌ Key auth is shared identity — no per-user logs |
| "Cloud tiering pulls files instantly" | ❌ Stub file open = round-trip to Azure (can be slow) |
| "AD DS auth = Entra ID auth" | ❌ Different mechanisms |
| "Premium share size = used data" | ❌ Premium bills for **provisioned** size |
| "File Sync replaces backup" | ❌ Sync ≠ backup — you still need RSV backup/snapshots |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Azure Files** | Managed SMB / NFS file shares |
| **Share tier** | Premium / Transaction Optimized / Hot / Cool |
| **SMB Multichannel** | Allows multiple TCP connections per session for throughput |
| **AD DS auth** | Storage account joined to on-prem AD via a service account |
| **Entra Kerberos** | Modern hybrid auth for Azure Files |
| **Entra Domain Services** | Managed domain in Azure (rare on AZ-104) |
| **NTFS ACL** | File/folder-level permission set on the share |
| **Azure File Sync** | Cache an Azure file share on a Windows Server |
| **Storage Sync Service** | The Azure resource that orchestrates sync |
| **Cloud / server endpoint** | The two ends of a sync group |
| **Cloud tiering** | Local stubs for cold files; full data lives in Azure |
| **Share snapshot** | Read-only point-in-time copy of a share |
| **Recovery Services vault** | Azure Backup target (Module 9) |
| **Soft delete (for shares)** | Recoverable deletion within retention window |

---

## ✅ Module 4 Summary

You now know:
- 📁 When to use Azure Files vs Blob
- 🗄️ The 4 share tiers and the **provisioned-vs-used** billing trap
- 🔐 The 3 main SMB auth options (Key / Entra Kerberos / AD DS / Entra DS)
- 🐧 NFS 4.1 limits (Premium + LRS/ZRS only, no in-transit encryption)
- 🔄 How Azure File Sync gives a Windows Server an SMB cache
- 📸 Snapshots vs Azure Backup vs Soft delete

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 5: Virtual Machines](../Module-05-Virtual-Machines/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Azure Files overview](https://learn.microsoft.com/azure/storage/files/storage-files-introduction)
- 📖 [Identity-based auth for Azure Files](https://learn.microsoft.com/azure/storage/files/storage-files-active-directory-overview)
- 📖 [Azure File Sync deployment guide](https://learn.microsoft.com/azure/storage/file-sync/file-sync-deployment-guide)
- 📖 [NFS share comparison](https://learn.microsoft.com/azure/storage/files/files-nfs-protocol)
