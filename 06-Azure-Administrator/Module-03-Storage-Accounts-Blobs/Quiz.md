# ✏️ Module 3 Quiz: Storage Accounts & Blobs

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. The cheapest redundancy that survives a single Availability Zone outage is: *(Apply)*
A. LRS
B. ZRS
C. GRS
D. GZRS

---

### Q2. You need 6 copies of data — 3 in your primary region across AZs, 3 in the paired region — for both AZ and regional resilience. Which SKU? *(Apply)*
A. LRS
B. ZRS
C. GRS
D. GZRS

---

### Q3. The minimum storage duration for the Archive tier (before early-deletion penalty) is: *(Remember)*
A. 7 days
B. 30 days
C. 90 days
D. 180 days

---

### Q4. To read an Archive-tier blob, you must: *(Understand)*
A. Use AzCopy with `--archive` flag
B. Rehydrate it to Hot or Cool (hours)
C. Promote the entire container
D. Use a SAS with `Archive` permission

---

### Q5. Which storage account kind should you default to in 2026? *(Remember)*
A. StorageV1 (general-purpose v1)
B. StorageV2 (general-purpose v2)
C. BlockBlobStorage
D. FileStorage

---

### Q6. A Service SAS token can be revoked easily if it is associated with: *(Understand)*
A. The account key
B. A Stored Access Policy (SAP)
C. A Conditional Access policy
D. The Reader RBAC role

---

### Q7. Which SAS type uses Entra ID credentials for signing (no account key needed)? *(Remember)*
A. Account SAS
B. Service SAS
C. User Delegation SAS
D. Anonymous SAS

---

### Q8. A storage account with a Service Endpoint: *(Understand)*
A. Has no public IP
B. Still has a public IP, but traffic from the allowed subnet routes over the Azure backbone
C. Is reachable only from the same region
D. Is automatically encrypted with CMK

---

### Q9. A storage account with a Private Endpoint: *(Understand)*
A. Has a private IP inside your VNet; you can also disable public network access
B. Is reachable only from on-prem
C. Cannot be used by managed identities
D. Requires Premium tier

---

### Q10. Customer-Managed Key (CMK) encryption for a storage account requires the Key Vault to have: *(Remember)*
A. RBAC mode enabled
B. Soft delete + purge protection enabled
C. A premium SKU
D. A private endpoint

---

### Q11. **Order these steps** to set up CMK encryption for a storage account. *(Create)*

1. Enable a system-assigned managed identity on the storage account
2. Create a Key Vault with soft delete + purge protection
3. Create a key in the Key Vault
4. Grant the storage account MI the "Key Vault Crypto Service Encryption User" role
5. Update the storage account encryption to use the KV key

A. 1 → 2 → 3 → 4 → 5
B. 2 → 3 → 1 → 4 → 5
C. 2 → 1 → 3 → 4 → 5
D. 3 → 2 → 1 → 4 → 5

---

### Q12. Yes/No — Mark each. *(Evaluate)*

**S1:** LRS protects against an Availability Zone failure.
**S2:** ZRS replicates data across at least 3 AZs in one region.
**S3:** GRS automatically fails over to the secondary region with no admin action.

A. Yes / Yes / No
B. No / Yes / No
C. Yes / Yes / Yes
D. No / Yes / Yes

---

### Q13. The storage account name `Contoso_Data_001` is invalid because: *(Understand)*
A. It contains numbers
B. Storage account names must be lowercase + digits only, 3–24 chars, globally unique
C. Underscores are valid; the issue is the length
D. It uses CamelCase

---

### Q14. Which built-in role lets a user read blob contents but not change the storage account configuration? *(Apply)*
A. Storage Account Contributor
B. Storage Blob Data Reader
C. Reader
D. Storage Blob Data Owner

---

### Q15. Yes/No — Lifecycle management. *(Analyze)*

**S1:** A lifecycle rule can transition blobs from Hot to Cool to Archive automatically.
**S2:** Lifecycle rules evaluate hourly without delay.
**S3:** Lifecycle rules can delete blob snapshots based on age.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q16. A 4-year-old blob in Hot tier is being read once per year. The MOST cost-effective tier is: *(Apply)*
A. Hot
B. Cool
C. Cold
D. Archive

---

### Q17. The fastest way to transfer 50 TB from on-prem to Azure with very limited bandwidth is: *(Apply)*
A. AzCopy over the internet
B. Azure Storage Explorer
C. Azure Data Box (physical appliance)
D. Run multiple `az storage blob upload` jobs in parallel

---

### Q18. RA-GRS gives you what extra benefit over GRS? *(Understand)*
A. Writable secondary
B. Read access to the secondary region
C. Higher SLA
D. Lower cost

---

### Q19. What is the minimum TLS version Microsoft recommends (and you should enforce) on storage accounts? *(Remember)*
A. TLS 1.0
B. TLS 1.1
C. TLS 1.2
D. TLS 1.3

---

### Q20. A "Legal Hold" on a blob container: *(Understand)*
A. Locks blobs for a fixed time period
B. Locks blobs indefinitely until the legal-hold tag is removed
C. Encrypts blobs with a customer key
D. Prevents tier changes

---

### Q21. Soft delete for blobs lets you: *(Remember)*
A. Permanently delete in one click
B. Recover deleted blobs within a configurable retention window (default 7 days)
C. Move blobs to Archive automatically
D. Replicate blobs to another region

---

### Q22. Yes/No — SAS tokens. *(Evaluate)*

**S1:** An Account SAS can grant access across multiple service types (blob/file/queue/table) at once.
**S2:** A User Delegation SAS works for file shares.
**S3:** You can specify allowed source IPs in a SAS to restrict where it can be used from.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / Yes / No

---

### Q23. Which redundancy CANNOT be selected for Premium block blob accounts (in most regions)? *(Understand)*
A. LRS
B. ZRS
C. GRS
D. Both LRS and ZRS

---

### Q24. The default at-rest encryption for storage accounts is: *(Remember)*
A. None — you must enable it
B. AES-128 with Microsoft-managed keys
C. AES-256 with Microsoft-managed keys (always on, can't disable)
D. AES-256 with customer-managed keys

---

### Q25. A storage firewall allows access from "selected networks" only. From which sources can you grant access? *(Apply)*
A. Specific public IPs, VNets/subnets (via service endpoints), Microsoft trusted services
B. Only specific public IPs
C. Only resource groups
D. Only management groups

---

### Q26. A team needs to ingest a 100 GB nightly file from on-prem to Azure storage with checksums and resume capability. The right tool is: *(Apply)*
A. `az storage blob upload`
B. Azure Storage Explorer
C. AzCopy
D. Azure Files mount via SMB

---

## 🎯 Answers + Explanations

### Q1: **B. ZRS**
ZRS replicates across AZs in one region. LRS is single-AZ. GRS/GZRS are more expensive.

### Q2: **D. GZRS**
Geo + Zone redundant. 3 AZ copies in primary + 3 LRS copies in paired region = 6 total.

### Q3: **D. 180 days**
Archive = 180 days minimum. Cool = 30, Cold = 90, Archive = 180. Memorize 30/90/180.

### Q4: **B. Rehydrate it to Hot or Cool (hours)**
Archive is offline cold storage. Rehydration is hours (Standard) or ~1 hour (High priority).

### Q5: **B. StorageV2**
V2 is the default and gets all new features. V1 is legacy. Premium kinds are for specific workloads.

### Q6: **B. A Stored Access Policy (SAP)**
Delete the SAP → the SAS becomes invalid. Without a SAP, your only revoke option is rotating the key.

### Q7: **C. User Delegation SAS**
Signed with an Entra ID OAuth token; auditable per-user. Best practice.

### Q8: **B. Still has a public IP, but traffic from the allowed subnet routes over the Azure backbone**
A common trap. Use Private Endpoint if you want a *private* IP.

### Q9: **A. Has a private IP inside your VNet; you can also disable public network access**
Full lockdown pattern: private endpoint + public access disabled.

### Q10: **B. Soft delete + purge protection enabled**
Required by Azure to prevent accidental key deletion bricking your data.

### Q11: **C. 2 → 1 → 3 → 4 → 5**
Build KV first → enable MI on storage → create key → grant RBAC → switch encryption. The exact ordering of 1 vs 2 can vary, but the canonical: KV first, then storage identity, then key, then RBAC, then update.

### Q12: **B. No / Yes / No**
LRS = single datacenter, doesn't protect against AZ. ZRS = 3 AZs. GRS failover is customer- or Microsoft-initiated, not automatic.

### Q13: **B. Storage account names must be lowercase + digits only, 3–24 chars, globally unique**
No uppercase, no underscores, no hyphens. Lowercase + digits only.

### Q14: **B. Storage Blob Data Reader**
Data-plane read-only. `Reader` only sees the resource exists, not the data. `Contributor` is control-plane.

### Q15: **A. Yes / No / Yes**
S2 is wrong — lifecycle rules can take up to 24–48 hrs to evaluate.

### Q16: **D. Archive**
Once per year << minimum 180-day duration; archive is cheapest by far. Just remember to rehydrate before the annual read.

### Q17: **C. Azure Data Box**
"Very limited bandwidth + 50 TB" = the canonical Data Box scenario. Sneakernet wins.

### Q18: **B. Read access to the secondary region**
RA-GRS = Read Access to the secondary, not write. Failover is still required for writes.

### Q19: **C. TLS 1.2**
TLS 1.2 is the minimum Microsoft recommends. TLS 1.3 is supported but not yet enforced as a default minimum.

### Q20: **B. Locks blobs indefinitely until the legal-hold tag is removed**
Time-based retention uses days; Legal Hold uses a tag.

### Q21: **B. Recover deleted blobs within a configurable retention window (default 7 days)**
Soft delete can be set 1–365 days. Container-level soft delete is separate from blob-level.

### Q22: **B. Yes / Yes / Yes**
Account SAS spans services; User Delegation SAS works for blobs (and recently other services like queues — but for AZ-104 the safest answer is "blob"). All SAS types support allowed IP ranges and TLS minimums.

### Q23: **C. GRS**
Premium block blob in most regions only supports LRS and ZRS. No geo replication for Premium.

### Q24: **C. AES-256 with Microsoft-managed keys (always on, can't disable)**
SSE is mandatory. You can swap MMK for CMK, but encryption itself cannot be turned off.

### Q25: **A. Specific public IPs, VNets/subnets (via service endpoints), Microsoft trusted services**
The 3 categories of "allowed" rules on the storage firewall.

### Q26: **C. AzCopy**
Designed for high-throughput, resumable, parallelized transfers with integrity checks.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Storage mastered.
- 22–24/26 → ✅ Solid; review misses and continue.
- 18–21/26 → ⚠️ Re-read redundancy + SAS sections.
- <18/26 → 🔁 Re-read the whole module.

---

## 🃏 Add To Your Flashcards

- Redundancy SKUs and what each survives (LRS/ZRS/GRS/GZRS)
- Min duration for Cool/Cold/Archive (30/90/180)
- Storage account naming rule (lowercase + digits, 3–24)
- Service endpoint vs private endpoint
- 3 SAS types + when to use each
- Lifecycle rule format + evaluation latency (24–48 hr)
- CMK prerequisites (soft delete + purge protection)
- Data Box for 50+ TB offline

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4](../Module-04-Azure-Files-File-Sync/Reading.md)
