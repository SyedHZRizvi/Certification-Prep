# 📋 Module 3 Cheat Sheet: Storage Accounts & Blobs

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🔁 Redundancy Decision Tree

```
Need region-loss survival?
├─ NO  → AZ-loss matters?
│        ├─ YES → ZRS
│        └─ NO  → LRS  (cheapest)
└─ YES → AZ-loss matters in primary?
         ├─ YES → GZRS  (or RA-GZRS for read access)
         └─ NO  → GRS   (or RA-GRS for read access)
```

| SKU | Copies | Region | AZ | Read 2ndary |
|-----|--------|--------|----|-------------|
| LRS | 3 | 1 | ❌ | ❌ |
| ZRS | 3 | 1 | ✅ | ❌ |
| GRS | 6 | 2 | ❌ | ❌ |
| RA-GRS | 6 | 2 | ❌ | ✅ |
| GZRS | 6 | 2 | ✅ (primary) | ❌ |
| RA-GZRS | 6 | 2 | ✅ (primary) | ✅ |

---

## 🌡️ Access Tiers

| Tier | Min duration | Best for |
|------|--------------|----------|
| Hot | none | Frequently accessed |
| Cool | 30 d | Infrequent access |
| Cold | 90 d | Rarely accessed |
| **Archive** | 180 d | Long-term retention, **hours** to rehydrate |

🧠 **30 / 90 / 180, Cool / Cold / Archive**

---

## 🪪 SAS Cheat Sheet

| Type | Signed with | Revoke by |
|------|-------------|-----------|
| Account SAS | Account key | Rotate key |
| Service SAS | Account key (or via SAP) | Delete the SAP |
| **User Delegation SAS** | Entra ID OAuth token | Revoke the user delegation key |

🔥 **Prefer User Delegation SAS**, auditable per user, no account-key exposure.

SAS query params to remember:

- `sv` = service version · `sp` = permissions · `se` = expiry
- `sip` = allowed IP range · `spr` = protocol (https) · `sig` = signature

---

## 🌐 Endpoints

| | Public access | Service endpoint | Private endpoint |
|---|---------------|-------------------|--------------------|
| Has public IP? | Yes | Yes (but firewalled) | Optional, disable for full lockdown |
| Reachable from internet? | Yes | Restricted | No |
| Routing | Internet | Azure backbone (from allowed subnet) | Private VNet via PE NIC |

---

## 🔐 Encryption Quick Hit

- At-rest: AES-256 always-on (MMK default, CMK via Key Vault)
- CMK requires KV soft delete + purge protection + storage MI with Crypto Service Encryption User role
- Infrastructure encryption = second AES-256 layer (set at creation only)
- In-transit: enforce TLS 1.2 minimum

---

## 🚚 Data Transfer Decision Matrix

| Volume | Bandwidth | Use |
|--------|-----------|-----|
| < 5 GB | Any | Storage Explorer / `az storage blob upload` |
| 5 GB – 5 TB | OK | AzCopy |
| > 10 TB | Limited | Azure Data Box |
| Ongoing sync from on-prem | n/a | Azure File Sync (Module 4) |

---

## 🗂️ Account Naming & Account Kind

- Name: lowercase + digits, 3–24 chars, globally unique
- Kind: **StorageV2** default; Premium Block Blob for high IOPS; Premium Files for low-latency SMB

---

## 🏆 Exam Power Phrases

Often **correct**:

- ✅ "Use User Delegation SAS"
- ✅ "GZRS for AZ + region resilience"
- ✅ "Lifecycle rule transitions to Archive after 180 days"
- ✅ "Private endpoint + disable public access"
- ✅ "Customer-initiated failover from GRS"

Often **wrong**:

- ❌ "ZRS survives a region failure"
- ❌ "Read Archive blob directly"
- ❌ "RA-GRS allows writes to secondary"
- ❌ "Service endpoint = private IP"
- ❌ "Automatic GRS failover"

---

## ⚠️ Anti-Patterns

- ❌ Hot tier for log archives
- ❌ Account SAS with no expiry / no IP restriction
- ❌ Storage account key in source control
- ❌ Storage account with public access enabled in prod
- ❌ CMK without backing up the Key Vault keys

---

## ✏️ Quick Self-Check

1. Cheapest redundancy that survives an AZ outage? ___
2. Archive tier min duration? ___
3. Why prefer User Delegation SAS? ___
4. CMK prerequisite on the Key Vault? ___
5. Default at-rest encryption algorithm + key origin? ___

---

➡️ [Module 4: Azure Files & File Sync](../Module-04-Azure-Files-File-Sync/Reading.md)
