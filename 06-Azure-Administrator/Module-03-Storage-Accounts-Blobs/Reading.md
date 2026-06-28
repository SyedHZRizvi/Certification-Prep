# Module 3: Storage Accounts & Blob Storage 🗄️

> **Why this module matters:** Storage is 15–20% of the AZ-104 exam, and *every* other service eventually writes to it, VM (Virtual Machine) disks, backups, logs, function code, container images. Pick the wrong redundancy, lifecycle, or access pattern and you'll either waste a fortune or lose data. The exam loves tricky redundancy and SAS questions.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1](../Module-01-Subscriptions-Resource-Hierarchy/Reading.md): how resource groups, locks, and tags work.
> - [Module 2](../Module-02-Entra-ID-RBAC (Role-Based Access Control)/Reading.md): control-plane vs. data-plane role distinction (you'll hear it again here, *Storage Account Contributor* ≠ *Storage Blob Data Reader*).
> - The CAP theorem (Brewer, *Symposium on Principles of Distributed Computing keynote*, 2000), useful background for understanding why GZRS exists and what trade-offs LRS / ZRS / GRS make.
>
> If you've taken AZ-900, the storage chapter there covered tiers and redundancy at the level of "names and pictures", this module assumes you know those names and gets into the operational and exam-tested details (in-place SKU (Stock Keeping Unit) change rules, rehydration, SAS revocation, CMK requirements).

---

## 🍕 A Story: The Library That Lost Half Its Books

Imagine a city library with a million books. The librarian let's call her Priya keeps every single book on a *single shelf* in a single building. One winter night, a frozen pipe bursts and floods half the shelf. Game over.

Priya learns. Version 2: she keeps three copies of every book on three different shelves in the same building. Better, but then a fire burns down the whole building.

Version 3: three copies in the same building, plus three more copies in a sister library 400 miles away. Even better, but now she's paying double for storage of books nobody reads more than once a decade.

Version 4: hot, frequently-read books on the front shelves; books read only at tax time on a back shelf; books last touched in 2003 in an off-site warehouse where retrieval takes hours but storage is dirt cheap. **And** she has copies in two cities. **And** she has a checkout log that tells her exactly who accessed which book and when.

**That's Azure Storage.** The "shelves" are your **redundancy options (LRS / ZRS / GRS / GZRS)**. The "front shelf vs warehouse" is your **access tier (Hot / Cool / Cold / Archive)**. The **lifecycle policy** automatically demotes books from front shelves to the warehouse based on rules. **SAS tokens** are the checkout cards that let visitors borrow a single book without becoming members. Get this model right and storage feels easy.

---

## 🏗️ Storage Account Kinds

A **storage account** is the top-level namespace. Pick the right *kind* once, you can't change most kinds after creation.

| Kind | Services | Notes |
|------|----------|-------|
| **StorageV2 (general-purpose v2)** | Blob, File, Queue, Table, Disk | **The default.** Pick this 90% of the time. |
| **Premium Block Blob** | Block blobs only | Low latency / high IOPS for blobs. SSD-backed. |
| **Premium File Shares** | Azure Files only | Low latency for SMB/NFS shares (Module 4). |
| **Premium Page Blob** | Page blobs only | High-perf disks for very specific workloads. |
| **BlockBlobStorage** | Block blobs | Legacy alias for Premium Block Blob. |
| **FileStorage** | File shares | Legacy alias for Premium Files. |
| **StorageV1 (general-purpose v1)** | All services | Legacy, almost never recommended. |

Performance tiers: **Standard** (HDD-backed, cheap) vs **Premium** (SSD-backed, low-latency).

### Create a v2 standard account via CLI (Command Line Interface)

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

Memorize this **column-by-column**. Exam will ask "which is cheapest that survives a region loss?", your fingers should know.

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
- Geo-pair regions are fixed (East US ↔ West US, etc.), you can't pick the secondary
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

For regulatory data (SEC, HIPAA, etc.), once written, *nobody* (including admins) can modify or delete.

Two policy types:

| Policy | What it does |
|--------|--------------|
| **Time-based retention** | Locked for N days; can extend but not shorten while locked |
| **Legal hold** | Locked indefinitely until the tag is cleared |

Applied at the **container** level (and inherited by all blobs in it). Policies can be:

- **Unlocked**, admin can edit/remove (testing/dev)
- **Locked**, even an Owner cannot remove (compliance)

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
| At-rest (Storage Service Encryption) | ✅ AES (Advanced Encryption Standard)-256, Microsoft-managed keys (MMK) | Use a Key Vault key |
| In-transit (HTTPS (HTTP Secure) (HTTP (Hypertext Transfer Protocol) Secure)) | ✅ TLS (Transport Layer Security) 1.2+ enforced when configured | n/a |
| Infrastructure encryption | Optional, adds a second AES-256 layer at the infra level | Enable at account creation only |

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

## 🪪 SAS, Shared Access Signatures

A SAS is a **signed URL** that grants time-limited, scoped access to storage without giving up your account key. Three flavors:

| Type | Scope | Use when |
|------|-------|----------|
| **Account SAS** | Account-wide (all services or subset) | Admin tools, broad access |
| **Service SAS** | One resource (e.g. one blob or container) | App needs to read one file |
| **User Delegation SAS** | Blob only, signed with Entra ID credentials (not account key) | **Best practice**, auditable via Entra logs |

**Stored Access Policy (SAP)** = a container-level policy you can attach to a Service SAS, lets you revoke the SAS by deleting the SAP (otherwise you can't revoke a SAS, you have to rotate the key).

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

# User Delegation SAS (preferred, uses Entra ID, no account key needed)
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

1. **Public network access**, On / Disabled / "Enabled from selected networks"
2. **Firewall rules**, Allow specific public IPs / VNets (via service endpoints)
3. **Private endpoints**, Give the account a private IP inside your VNet (no public IP at all)

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
| **AzCopy** | CLI for **high-throughput bulk transfer** (GBs to TBs), supports resume |
| **Azure CLI** (`az storage blob upload`) | One-off small uploads |
| **Azure Data Box** | Physical appliance for multi-TB/PB offline transfer |
| **Azure Import/Export** | Mail in your own disks (older, less common now) |

### AzCopy, copy a local folder to a blob container

```bash
azcopy login   # or use a SAS URL inline

azcopy copy "./logs/2026/" \
    "https://stcontosodata001.blob.core.windows.net/logs?sv=...&sig=..." \
    --recursive=true
```

### AzCopy, sync (delta) between two containers

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
| **StorageV2** | The general-purpose v2 account kind, default |
| **LRS/ZRS/GRS/GZRS** | Redundancy SKUs (local/zone/geo/geo+zone) |
| **RA-** prefix | Read access to secondary added |
| **Hot/Cool/Cold/Archive** | Blob access tiers |
| **Rehydration** | Bringing an Archive blob back to Hot/Cool |
| **Lifecycle policy** | Rules to auto-tier or delete blobs by age |
| **Immutability** | Time-based or legal-hold WORM lock |
| **SSE** | Storage Service Encryption (at-rest AES-256) |
| **CMK** | Customer-Managed Key, your KV key for SSE |
| **MMK** | Microsoft-Managed Key, default |
| **SAS** | Shared Access Signature, signed URL for scoped access |
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

## 📊 Case Study, Toyota Connected Vehicle Data Exposure (2013–2023)

**Situation.** On May 12, 2023, Toyota Motor Corporation disclosed that vehicle location, customer ID, in-car device IDs, and chassis numbers for approximately **2.15 million customers** in Japan had been continuously exposed in the cloud since **November 2013, more than 9.5 years**. The root cause: a misconfigured cloud storage environment supporting the *T-Connect, G-Link, G-Link Lite, and G-BOOK* connected-vehicle services, where a setting governing the storage container had been set to public-read instead of authenticated-read. Toyota Connected Corporation, the subsidiary running the platform, said the data had been "accessible to anyone with the URL" without account credentials (Toyota press release, *Possibility of Customer Information Leak Due to Misconfiguration of Cloud Environment*, 2023-05-12; *Reuters*, *Toyota says vehicle data of 2 million customers was publicly accessible for a decade*, 2023-05-12).

**Decision.** Toyota's post-incident response and subsequent disclosures (October 2023 expanded the affected count to **roughly 260,000 additional customers** outside Japan and added that vehicle event data including video had been exposed since February 2015) hinged on three controls every Azure admin recognizes:

1. **Public network access was enabled at the container/account level**. The default in Microsoft Entra-integrated Azure storage accounts created after 2021 is `--allow-blob-public-access false`, but the *legacy* default was the opposite. Toyota's account predated the safer default by years and had never been migrated.
2. **No alerting on long-lived public exposure.** Azure Storage emits a `BlobAccessLevel` setting in the resource log; a `Microsoft.Storage/storageAccounts/blobServices/containers/write` event with a public flag should fire a Defender for Cloud or Azure Policy `Audit` finding. Toyota lacked the diagnostic-setting + alert wire-up.
3. **No periodic posture review.** Microsoft Defender for Storage (GA 2022) detects anonymous access patterns. The control existed; it just was not deployed to that workload.

Toyota's fix list, published in their second-wave disclosure: enable Defender for Storage across all environments, enforce `Storage accounts should disallow public access` via Azure Policy at the management-group root, rotate all account keys, switch to **User Delegation SAS** for any URL-shareable scenario, and add a Conditional Access policy that confines storage-account admin operations to managed devices.

**Outcome.** Toyota offered affected customers credit monitoring and issued a public apology. Japan's Personal Information Protection Commission opened an investigation. Industry impact was substantial: *Wall Street Journal* and *Nikkei* coverage made "9.5 years of public storage" the canonical cautionary tale, and several auto manufacturers (Honda, Nissan, Ford) accelerated their own cloud-storage posture reviews. As of late 2024, Toyota had migrated affected workloads onto a hardened Azure-and-AWS (Amazon Web Services) landing zone with private endpoints and CMK encryption.

**Lesson for the exam / for practitioners.** This case study is on AZ-104 in spirit: nearly every Defender-for-Storage / Azure-Policy storage scenario question is a thinly-veiled "Toyota." Memorize the seven correct controls for a *new* storage account: `--kind StorageV2`, `--sku Standard_GZRS` (or LRS if no regional DR need), `--min-tls-version TLS1_2`, `--allow-blob-public-access false`, `--public-network-access Disabled` *(when feasible)*, managed identity + CMK, lifecycle policy, and **a diagnostic setting to Log Analytics with a Defender alert on anonymous-read or container ACL changes**. Toyota would not be on Wikipedia today if any *one* of those had been in place in 2013.

**Discussion (Socratic).**
- **Q1.** Toyota's exposure ran for 9.5 years without detection. Granted, Azure Defender for Storage didn't exist in 2013, but what *did* exist? Build the timeline of "controls Toyota could plausibly have deployed in each year 2013–2023" using only features available at that time. At what year would deploying default controls have shortened the exposure window?
- **Q2.** A common defensive design is *private endpoint + disable public access*. But many real apps need *some* anonymous access (e.g., a public website's images container). Where do you draw the line? Defend: which categories of blob data should *never* be in a container with `allow-blob-public-access=true`, and which categories are reasonable exceptions?
- **Q3.** Toyota's data was *exposed* but apparently never *exfiltrated en masse* (no evidence of mass scraping was found in forensics). Critics argue this means the lesson is overstated. Build the strongest argument for *and* against "if the data wasn't actually stolen, the misconfiguration didn't matter." Use the legal vs. operational lenses.

---

> **Where this leads.**
> - Inside this course: Module 4 builds on storage by adding the *SMB/NFS file share* layer; Module 8 covers the network-side controls (private endpoint, NSG, Firewall) that lock storage down; Module 10 closes the loop with diagnostic settings + Defender for Storage alerts.
> - Cross-course: [`04-AWS-Solutions-Architect-Associate` Module 3](../../04-AWS-Solutions-Architect-Associate/Module-03-EC2 (Elastic Compute Cloud)-Deep-Dive/Reading.md) covers the equivalent S3 (Simple Storage Service) controls, useful for the multi-cloud admin; [`09-CompTIA-Security-Plus`](../../../09-CompTIA-Security-Plus/) Module 4 covers cloud-storage misconfiguration as a recognized attack class.
> - Practice: PE (Private Equity)-1 has 9 questions from this module (redundancy SKUs, tiers, SAS, CMK, private endpoint); PE-2 + Final Mock test scenario synthesis.

---

## 💬 Discussion, Socratic prompts

1. **Redundancy choice under cost pressure.** A startup CFO (Chief Financial Officer) wants you to switch the production blob account from GZRS to LRS to save ~60% on storage cost. Walk through the AZ-104-style decision: at what RPO (Recovery Point Objective)/RTO (Recovery Time Objective) posture is LRS defensible? Defend the *cheapest acceptable* redundancy SKU for a system whose data could be re-derived from an upstream source within 4 hours, vs. one whose data is the system of record. (Hint: the AWS Well-Architected and Microsoft Well-Architected Framework "Reliability" pillars both give explicit guidance.)
2. **Tiering math.** A media company keeps 100 TB of video assets. 5 TB are accessed daily, 20 TB monthly, 75 TB roughly once a year for archival reference. Design the lifecycle policy and estimate the storage-cost reduction vs. all-Hot. Where does the math flip, at what access frequency does Archive *lose* money once retrieval and rehydration costs are included?
3. **SAS revocation.** A vendor's Account SAS was leaked on GitHub. The standard advice is "rotate the account key." Argue why that's the right answer despite breaking *every* other SAS issued from that key, and what a *Stored Access Policy* would have bought you. When would User Delegation SAS have made the leak nearly inert?
4. **Immutable storage and the regulator.** A bank is told by their regulator to retain trade records for 7 years, write-once. Two designs: time-based immutability (locked) on a regular blob container vs. a dedicated WORM-mode Backup vault. Argue which is the right primary control and which is the appropriate *defense-in-depth* secondary control.
5. **The CMK rotation question.** Customer-Managed Keys are the gold standard for compliance, but rotating them wrong has bricked production storage accounts. Walk through the Key Vault + storage-account dance for a clean key rotation. What's the one setting that, if missing, turns "rotate the key" into "the storage account can't decrypt anything anymore"? (Hint: soft delete + purge protection on Key Vault is half the answer, what's the other half?)

---

## 📚 Further Reading (Optional)

- 📖 [Storage account overview](https://learn.microsoft.com/azure/storage/common/storage-account-overview)
- 📖 [Data redundancy options](https://learn.microsoft.com/azure/storage/common/storage-redundancy)
- 📖 [Access tiers for blob data](https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview)
- 📖 [SAS overview](https://learn.microsoft.com/azure/storage/common/storage-sas-overview)
- 📖 [AzCopy v10 reference](https://learn.microsoft.com/azure/storage/common/storage-use-azcopy-v10)
- 📖 [Defender for Storage](https://learn.microsoft.com/azure/defender-for-cloud/defender-for-storage-introduction) (GA 2022; checked 2026-05).
- 📖 Mark Russinovich, *Azure CTO (Chief Technology Officer) blog*, periodic posts on storage architecture and resiliency engineering; especially the 2022 *"Inside Azure datacenter architecture"* series.
- 📖 Brewer, *PODC keynote 2000*, the CAP theorem origin; useful for reasoning about why GRS can't promise zero data loss on regional failover.
