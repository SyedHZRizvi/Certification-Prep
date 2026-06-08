# 📋 Module 4 Cheat Sheet: Azure Files & File Sync

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📁 Tier Selection

| Tier | Account kind | Billing | Use when |
|------|--------------|---------|----------|
| Premium | FileStorage | **Provisioned** | < 5 ms latency |
| Transaction Optimized | StorageV2 | Used | High IOPS HDD |
| Hot | StorageV2 | Used | General |
| Cool | StorageV2 | Used (cheap) + higher TXN | Cold data |

🧠 **Premium = provisioned $$; standard = used $$**

---

## 🔐 Auth Decision

```
Need per-user audit?
├─ NO  → Storage account key (simple, no AD)
└─ YES → Identity-based auth
         ├─ Hybrid users (AD-synced) → Entra Kerberos or on-prem AD DS
         ├─ Cloud-only Entra users + NTLM/Kerberos clients → Entra Domain Services
         └─ Linux/POSIX            → NFS 4.1 (network isolation)
```

Layered enforcement:

1. SMB connect (Kerberos / key)
2. **Share-level RBAC** (`Storage File Data SMB Share Reader / Contributor / Elevated Contributor`)
3. **NTFS ACLs** on files/folders

---

## 🐧 NFS 4.1 Constraints

- Premium FileStorage only
- LRS or ZRS (no GRS)
- **No in-transit encryption**, protect via VNet / private endpoint
- No AD/Kerberos, auth by network

---

## 🔄 Azure File Sync Components

```
Storage Sync Service (Azure)
   └── Sync Group
        ├── Cloud endpoint  (Azure Files share)
        └── Server endpoint × N  (paths on registered Windows Servers)
```

Cloud tiering policies:

- **Volume free space**, keep X% disk free
- **Date**, tier files older than N days
- Both = stricter wins

Excluded from tiering: system state, paging file, AV-quarantined.

---

## 📸 Protection Stack

| Layer | What it protects |
|-------|------------------|
| **Soft delete (share)** | Whole share, 1–365 d retention |
| **Share snapshots** | Read-only point-in-time, "Previous Versions" |
| **Azure Backup (RSV)** | Daily snapshots, item-level restore |
| **Resource Lock** | Prevent accidental delete |

---

## 🏆 Exam Power Phrases

Often **correct**:

- ✅ "Deploy Azure File Sync with cloud tiering"
- ✅ "Use identity-based auth (Entra Kerberos)"
- ✅ "Premium tier for sub-5ms latency"
- ✅ "Snapshot for fast point-in-time recovery"
- ✅ "Private endpoint to lock down access"

Often **wrong**:

- ❌ "Sync = backup"
- ❌ "NFS supports GRS"
- ❌ "Storage key gives per-user audit"
- ❌ "Premium bills for used data"
- ❌ "Cloud tiering is automatic for paging file"

---

## ⚠️ Anti-Patterns

- ❌ Sharing storage account keys with end users
- ❌ Public access enabled on file share
- ❌ Sync without backup
- ❌ Cloud tiering on system drives or AV files
- ❌ NFS share over public internet

---

## ✏️ Quick Self-Check

1. NFS share requirements? ___
2. Three identity-based SMB auth modes? ___
3. Cloud tiering policies, name two? ___
4. Premium vs standard billing model? ___
5. Where do file snapshots show up for Windows users? ___

---

➡️ [Module 5: Virtual Machines](../Module-05-Virtual-Machines/Reading.md)
