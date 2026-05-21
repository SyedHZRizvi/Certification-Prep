# Module 3: Storage Accounts & Blob Storage 🗄️

> **Why this module matters:** Storage is 15–20% of the AZ-104 exam, and *every* other service eventually writes to it — VM disks, backups, logs, function code, container images. Pick the wrong redundancy, lifecycle, or access pattern and you'll either waste a fortune or lose data. The exam loves tricky redundancy and SAS questions.

---

## 🍕 A Story: The Library That Lost Half Its Books

Imagine a city library with a million books. The librarian — let's call her Priya — keeps every single book on a *single shelf* in a single building. One winter night, a frozen pipe bursts and floods half the shelf. Game over.

Priya learns. Version 2: she keeps three copies of every book on three different shelves in the same building. Better — but then a fire burns down the whole building.

Version 3: three copies in the same building, plus three more copies in a sister library 400 miles away. Even better — but now she's paying double for storage of books nobody reads more than once a decade.

Version 4: hot, frequently-read books on the front shelves; books read only at tax time on a back shelf; books last touched in 2003 in an off-site warehouse where retrieval takes hours but storage is dirt cheap. **And** she has copies in two cities. **And** she has a checkout log that tells her exactly who accessed which book and when.

**That's Azure Storage.** The "shelves" are your **redundancy options (LRS / ZRS / GRS / GZRS)**. The "front shelf vs warehouse" is your **access tier (Hot / Cool / Cold / Archive)**. The **lifecycle policy** automatically demotes books from front shelves to the warehouse based on rules. **SAS tokens** are the checkout cards that let visitors borrow a single book without becoming members. Get this model right and storage feels easy.

---

## 🏗️ Storage Account Kinds

A **storage account** is the top-level namespace. Pick the right *kind* once — you can't change most kinds after creation.

| Kind | Services | Notes |
|------|----------|-------|
| **StorageV2 (general-purpose v2)** | Blob, File, Queue, Table, Disk | **The default.** Pick this 90% of the time. |
| **Premium Block Blob** | Block blobs only | Low latency / high IOPS for blobs. SSD-backed. |
| **Premium File Shares** | Azure Files only | Low latency for SMB/NFS shares (Module 4). |
| **Premium Page Blob** | Page blobs only | High-perf disks for very specific workloads. |
| **BlockBlobStorage** | Block blobs | Legacy alias for Premium Block Blob. |
| **FileStorage** | File shares | Legacy alias for Premium Files. |
| **StorageV1 (general-purpose v1)** | All services | Legacy — almost never recommended. |

Performance tiers: **Standard** (HDD-backed, cheap) vs **Premium** (SSD-backed, low-latency).

### Create a v2 standard account via CLI

```bash
az storage account create \
    --name stcontosodata001 \
    --resource-group rg-data \
    --location eastus \
    --sku Standard_GRS \
    --kind StorageV2 \
    --access-tier Hot \
    --allow-blob-public-access false \
    --min-tls-version TLS1_2
```

### PowerShell equivalent

```powershell
New-AzStorageAccount `
    -ResourceGroupName "rg-data" `
    -Name "stcontosodata001" `
    -Location "eastus" `
    -SkuName "Standard_GRS" `
    -Kind "StorageV2" `
    -AccessTier "Hot" `
    -AllowBlobPublicAccess $false `
    -MinimumTlsVersion "TLS1_2"
```

**Naming rule for storage accounts:** lowercase + numbers only, 3–24 characters, **globally unique** across all of Azure.

---

## 🔁 Redundancy Options (The #1 Tested Topic)

Memorize this **column-by-column**. Exam will ask "which is cheapest that survives a region loss?" — your fingers should know.

| SKU | Copies | Where | Survives… | Cost (rel.) |
|-----|--------|-------|-----------|-------------|
| **LRS** (Locally-redundant) | 3 | One datacenter (one AZ) | Disk/rack failure | 1× |
| **ZRS** (Zone-redundant) | 3 | Three AZs in one region | AZ outage | ~1.25× |
| **GRS** (Geo-redundant) | 6 | 3 in primary + 3 in paired region (LRS within each) | Region loss | ~2× |
| **RA-GRS** | 6 | Same as GRS + **read** access to secondary | Same as GRS | ~2× + small read fee |
| **GZRS** (Geo-zone-redundant) | 6 | 3 across AZs in primary + 3 LRS in paired region | AZ outage AND region loss | ~2.5× |
| **RA-GZRS** | 6 | Same as GZRS + read access to secondary | Same as GZRS | ~2.5× + small read fee |

🔥 **Memory aids:**
- **L = Local · Z = Zone · G = Geo · GZ = both Geo and Zone · RA = Read Access**
- Geo-pair regions are fixed (East US ↔ West US, etc.) — you can't pick the secondary
- **Failover** to the secondary is *manual* (Customer-initiated failover) or *Microsoft-initiated* during a disaster

### Change redundancy via CLI

```bash
# Convert from LRS to GRS (only certain transitions allowed in-place)
az storage account update \
    --name stcontosodata001 \
    --resource-group rg-data \
    --sku Standard_GRS
```

⚠️ **Trap:** Not all SKU changes are in-place. Premium ↔ Standard always needs a new account + AzCopy. ZRS ↔ GRS requires a live migration request.

---

## 🌡️ Access Tiers (Blob Storage)

Pick per-blob (or set a default at account level). Mismatch = wasted money.

| Tier | Best for | Min storage duration | Early-deletion fee | Retrieval latency |
|------|----------|----------------------|--------------------|-------------------|
| **Hot** | Frequently accessed | None | None | Milliseconds |
| **Cool** | Infrequently accessed (≥ 30 days) | 30 days | Pro-rated | Milliseconds |
| **Cold** | Rarely accessed (≥ 90 days) | 90 days | Pro-rated | Milliseconds |
| **Archive** | Long-term retention (≥ 180 days) | 180 days | Pro-rated | **Hours** to rehydrate |

**Cost direction:** Hot → Archive = cheaper storage but **more expensive reads + minimum duration penalties**.

### Set tier on a single blob

```bash
az storage blob set-tier \
    --account-name stcontosodata001 \
    --container-name images \
    --name 2024/old-photo.jpg \
    --tier Archive
```

### Rehydrate from Archive (use `--rehydrate-priority`)

```bash
az storage blob set-tier \
    --account-name stcontosodata001 \
    --container-name images \
    --name 2024/old-photo.jpg \
    --tier Hot \
    --rehydrate-priority High   # or Standard (slower, cheaper)
```

🔥 **Archive blobs cannot be read directly.** You must rehydrate to Hot/Cool first (hours).

---

## 🔄 Lifecycle Management

JSON rules that automatically move/delete blobs based on age. Saves you 60–90% on cold data.

```json
{
  "rules": [
    {
      "enabled": true,
      "name": "archive-old-logs",
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": ["blockBlob"],
          "prefixMatch": ["logs/"]
        },
        "actions": {
          "baseBlob": {
            "tierToCool":    { "daysAfterModificationGreaterThan": 30 },
            "tierToArchive": { "daysAfterModificationGreaterThan": 180 },
            "delete":        { "daysAfterModificationGreaterThan": 2555 }
          },
          "snapshot": { "delete": { "daysAfterCreationGreaterThan": 90 } }
        }
      }
    }
  ]
}
```

Apply via CLI:

```bash
az storage account management-policy create \
    --account-name stcontosodata001 \
    --resource-group rg-data \
    --policy @lifecycle.json
```

---

## 🔒 Immutable Blobs (WORM)

For regulatory data (SEC, HIPAA, etc.) — once written, *nobody* (including admins) can modify or delete.

Two policy types:

| Policy | What it does |
|--------|--------------|
| **Time-based retention** | Locked for N days; can extend but not shorten while locked |
| **Legal hold** | Locked indefinitely until the tag is cleared |

Applied at the **container** level (and inherited by all blobs in it). Policies can be:
- **Unlocked** — admin can edit/remove (testing/dev)
- **Locked** — even an Owner cannot remove (compliance)

```bash
az storage container immutability-policy create \
    --account-name stcontosodata001 \
    --container-name compliance-logs \
    --period 365 \
    --allow-protected-append-writes false
# Then lock it (irreversible!)
az storage container immutability-policy lock \
    --account-name stcontosodata001 \
    --container-name compliance-logs \
    --if-match <etag>
```

---

## 🔐 Encryption

| Layer | Default | Customer-managed key (CMK) option |
|-------|---------|----------------------------------|
| At-rest (Storage Service Encryption) | ✅ AES-256, Microsoft-managed keys (MMK) | Use a Key Vault key |
| In-transit (HTTPS) | ✅ TLS 1.2+ enforced when configured | n/a |
| Infrastructure encryption | Optional — adds a second AES-256 layer at the infra level | Enable at account creation only |

### Switch to CMK

```bash
# Pre-req: Key Vault with purge protection + soft delete + access policy / RBAC for the storage account's MI
az storage account update \
    --name stcontosodata001 \
    --resource-group rg-data \
    --encryption-key-source Microsoft.Keyvault \
    --encryption-key-vault https://kv-contoso.vault.azure.net \
    --encryption-key-name storage-cmk-1 \
    --encryption-key-version <version>
```

⚠️ **Trap:** CMK requires the storage account to use a **managed identity** with **Key Vault Crypto Service Encryption User** (or equivalent) on the Key Vault, and the Key Vault must have **soft delete + purge protection** enabled.

---

## 🪪 SAS — Shared Access Signatures

A SAS is a **signed URL** that grants time-limited, scoped access to storage without giving up your account key. Three flavors:

| Type | Scope | Use when |
|------|-------|----------|
| **Account SAS** | Account-wide (all services or subset) | Admin tools, broad access |
| **Service SAS** | One resource (e.g. one blob or container) | App needs to read one file |
| **User Delegation SAS** | Blob only, signed with Entra ID credentials (not account key) | **Best practice** — auditable via Entra logs |

**Stored Access Policy (SAP)** = a container-level policy you can attach to a Service SAS — lets you revoke the SAS by deleting the SAP (otherwise you can't revoke a SAS, you have to rotate the key).

### Generate a SAS via CLI

```bash
# Account SAS (read+list blobs for 1 hour)
az storage account generate-sas \
    --account-name stcontosodata001 \
    --account-key $KEY \
    --services b \
    --resource-types sco \
    --permissions rl \
    --expiry $(date -u -v+1H +"%Y-%m-%dT%H:%MZ")

# User Delegation SAS (preferred — uses Entra ID, no account key needed)
az storage blob generate-sas \
    --account-name stcontosodata001 \
    --container-name images \
    --name pic.jpg \
    --permissions r \
    --expiry $(date -u -v+1H +"%Y-%m-%dT%H:%MZ") \
    --auth-mode login \
    --as-user
```

🔥 **MEMORIZE:** User Delegation SAS is auditable per-user; Account SAS just shows "the account key" in logs. Always prefer User Delegation in 2026.

---

## 🌐 Networking & Access

Three layers control who can reach a storage account:

1. **Public network access** — On / Disabled / "Enabled from selected networks"
2. **Firewall rules** — Allow specific public IPs / VNets (via service endpoints)
3. **Private endpoints** — Give the account a private IP inside your VNet (no public IP at all)

| Feature | Storage account becomes… |
|---------|--------------------------|
| Public access on | Reachable from anywhere on the internet (still needs auth) |
| **Service endpoint** | Routes traffic from selected subnets over the Azure backbone, but the account *still has a public IP* |
| **Private endpoint** | A private NIC in your subnet; public IP can be fully disabled |

```bash
# Disable public network access
az storage account update \
    --name stcontosodata001 \
    --resource-group rg-data \
    --public-network-access Disabled

# Add a private endpoint (simplified)
az network private-endpoint create \
    --name pe-storage \
    --resource-group rg-data \
    --vnet-name vnet-prod \
    --subnet snet-data \
    --private-connection-resource-id $(az storage account show -g rg-data -n stcontosodata001 --query id -o tsv) \
    --group-id blob \
    --connection-name connection-blob
```

---

## 🚚 Data Transfer Tools

| Tool | Use case |
|------|----------|
| **Azure Storage Explorer** | GUI for browsing/uploading on Windows/Mac/Linux |
| **AzCopy** | CLI for **high-throughput bulk transfer** (GBs to TBs) — supports resume |
| **Azure CLI** (`az storage blob upload`) | One-off small uploads |
| **Azure Data Box** | Physical appliance for multi-TB/PB offline transfer |
| **Azure Import/Export** | Mail in your own disks (older, less common now) |

### AzCopy — copy a local folder to a blob container

```bash
azcopy login   # or use a SAS URL inline

azcopy copy "./logs/2026/" \
    "https://stcontosodata001.blob.core.windows.net/logs?sv=...&sig=..." \
    --recursive=true
```

### AzCopy — sync (delta) between two containers

```bash
azcopy sync \
    "https://src.blob.core.windows.net/c1?<SAS>" \
    "https://dst.blob.core.windows.net/c2?<SAS>" \
    --recursive=true
```

---

## 🧪 Task-Sequencing Practice: Set Up a Compliant, Geo-Resilient Storage Account

**Order these steps:**

1. ✅ Create a **resource group** in your primary region.
2. ✅ Create the **storage account** with `--sku Standard_GZRS --kind StorageV2 --min-tls-version TLS1_2 --allow-blob-public-access false`.
3. ✅ Create a **Key Vault** with soft-delete + purge-protection enabled; create a CMK key.
4. ✅ Enable a **system-assigned managed identity** on the storage account.
5. ✅ Grant the storage account MI **Key Vault Crypto Service Encryption User** on the Key Vault.
6. ✅ **Switch the storage account to CMK** referencing the Key Vault key.
7. ✅ Set up a **lifecycle rule**: Hot → Cool at 30 days, Cool → Archive at 180.
8. ✅ Enable **soft delete for blobs & containers** (e.g. 14 days).
9. ✅ Apply a **diagnostic setting** sending logs to a Log Analytics workspace.
10. ✅ Disable **public network access** and add a **private endpoint** for the blob sub-resource.

Skipping step 3 (KV without purge protection) blocks CMK entirely. Skipping step 8 = no recovery from accidental deletes.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Archive blobs can be read with millisecond latency" | ❌ Hours to rehydrate first |
| "ZRS protects against region outage" | ❌ ZRS = AZs in *one* region. Use GRS/GZRS. |
| "RA-GRS gives writable secondary" | ❌ Read-only secondary |
| "Failover from GRS is automatic" | ❌ Customer-initiated (or Microsoft for major disasters) |
| "Service endpoint = private IP" | ❌ Still a public IP, just routed over backbone |
| "Account SAS can be revoked easily" | ❌ Only by rotating the key, or using a Stored Access Policy |
| "Lifecycle rules run instantly" | ❌ Can take up to 24–48 hours to evaluate |
| "Premium = same redundancy options as Standard" | ❌ Premium block blob only supports LRS/ZRS in most regions |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Storage account** | Top-level namespace for blob/file/queue/table |
| **StorageV2** | The general-purpose v2 account kind — default |
| **LRS/ZRS/GRS/GZRS** | Redundancy SKUs (local/zone/geo/geo+zone) |
| **RA-** prefix | Read access to secondary added |
| **Hot/Cool/Cold/Archive** | Blob access tiers |
| **Rehydration** | Bringing an Archive blob back to Hot/Cool |
| **Lifecycle policy** | Rules to auto-tier or delete blobs by age |
| **Immutability** | Time-based or legal-hold WORM lock |
| **SSE** | Storage Service Encryption (at-rest AES-256) |
| **CMK** | Customer-Managed Key — your KV key for SSE |
| **MMK** | Microsoft-Managed Key — default |
| **SAS** | Shared Access Signature — signed URL for scoped access |
| **User Delegation SAS** | SAS signed with Entra ID instead of account key |
| **Stored Access Policy (SAP)** | Container-level policy to revoke a Service SAS |
| **Private endpoint** | Private IP inside your VNet for the storage account |
| **AzCopy** | High-throughput CLI for bulk transfer |
| **Azure Data Box** | Physical appliance for offline TB/PB transfer |

---

## ✅ Module 3 Summary

You now know:
- 🏗️ The 7 storage account kinds and when to pick which
- 🔁 The 6 redundancy SKUs and what each survives
- 🌡️ The 4 access tiers and their minimum-duration penalties
- 🔄 How lifecycle policies automate tiering
- 🔒 Immutable blobs (time-based + legal hold)
- 🔐 SSE encryption (MMK default, CMK via Key Vault)
- 🪪 The 3 SAS types and why User Delegation wins
- 🌐 Service endpoints vs private endpoints
- 🚚 AzCopy, Storage Explorer, Data Box

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: Azure Files & File Sync](../Module-04-Azure-Files-File-Sync/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Storage account overview](https://learn.microsoft.com/azure/storage/common/storage-account-overview)
- 📖 [Data redundancy options](https://learn.microsoft.com/azure/storage/common/storage-redundancy)
- 📖 [Access tiers for blob data](https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview)
- 📖 [SAS overview](https://learn.microsoft.com/azure/storage/common/storage-sas-overview)
- 📖 [AzCopy v10 reference](https://learn.microsoft.com/azure/storage/common/storage-use-azcopy-v10)
