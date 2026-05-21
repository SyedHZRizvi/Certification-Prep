# 🧪 Practice Exam 1 — AZ-104 (First Half)

> **Conditions:** Set a 50-minute timer. 28 questions. Treat it like the real thing.
> **Pass mark:** 20/28 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 1–5.

---

## 📝 Questions

### 1. The Azure resource hierarchy from top to bottom is:
A. Subscription → Tenant → RG → Resource
B. Tenant → Management Group → Subscription → Resource Group → Resource
C. Management Group → Tenant → Subscription → Resource
D. Tenant → Subscription → Management Group → Resource Group → Resource

### 2. Which Entra ID license tier is REQUIRED for Conditional Access?
A. Free
B. Microsoft 365 Business Basic
C. P2
D. P1

### 3. The CHEAPEST redundancy that survives an Availability Zone outage is:
A. LRS
B. GZRS
C. GRS
D. ZRS

### 4. A storage account name must be:
A. Anything between 1–63 chars
B. CamelCase + numbers
C. Lowercase letters + digits, 3–24 chars, globally unique
D. Lowercase + hyphens

### 5. The minimum storage duration for the Archive tier is:
A. 30 days
B. 180 days
C. 90 days
D. 365 days

### 6. To read an Archive-tier blob, you must:
A. Rehydrate it to Hot or Cool first
B. Use the special "archive read" API
C. Use a SAS token
D. Wait 24 hours

### 7. The MAX number of fault domains in an Availability Set is:
A. 2
B. 20
C. 5
D. 3

### 8. SLAs for single VM with Premium SSD / Availability Set / Availability Zones are:
A. 99.5% / 99.95% / 99.99%
B. 99.95% / 99.99% / 99.999%
C. 99.99% / 99.9% / 99.95%
D. 99.9% / 99.95% / 99.99%

### 9. Can you add a VM to an Availability Set after the VM is created?
A. Yes anytime
B. No — AS must be set at VM creation
C. Only after deallocation
D. Only via PowerShell

### 10. To grant a vendor 4 hrs of `Contributor` on one RG with MFA + approval, use:
A. Permanent role assignment
B. PIM for Azure resources (Eligible + activation)
C. Custom role
D. Administrative Unit

### 11. The 4 fundamental built-in RBAC roles include Owner, Contributor, Reader, and:
A. Auditor
B. Security Administrator
C. Service Principal Manager
D. User Access Administrator

### 12. A `Storage Account Contributor` (control plane role) can read blob contents:
A. No — needs a data-plane role like `Storage Blob Data Reader`
B. Yes, automatically
C. Only after enabling SAS
D. Only over the private endpoint

### 13. Tags on a resource group are inherited by child resources:
A. Automatically
B. Only for management groups
C. Only at create time
D. NOT automatically — use the "Inherit a tag from RG" Modify policy

### 14. **Yes/No** — Mark each statement.

**S1:** A resource group can contain resources from different regions.
**S2:** A resource can belong to two resource groups simultaneously.
**S3:** Deleting a resource group permanently deletes its contents (absent a lock).

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / No / Yes
D. Yes / Yes / No

### 15. To restrict deployments to `eastus` and `westus2` across multiple subscriptions, apply the "Allowed locations" policy at the:
A. Tenant Root
B. Each RG individually
C. Management Group above those subscriptions
D. Subscription level only

### 16. **Order these steps** to set up CMK encryption for a storage account.

1. Enable system-assigned managed identity on the storage account
2. Create a Key Vault with soft delete + purge protection
3. Create a key in the Key Vault
4. Grant the storage MI Key Vault Crypto Service Encryption User
5. Switch the storage account to use the KV key

A. 1 → 2 → 3 → 4 → 5
B. 2 → 1 → 3 → 4 → 5
C. 2 → 3 → 1 → 4 → 5
D. 3 → 2 → 1 → 4 → 5

### 17. The recommended SAS type that uses Entra ID (not the account key) is:
A. Account SAS
B. User Delegation SAS
C. Service SAS
D. Anonymous SAS

### 18. A Service Endpoint:
A. Gives the PaaS a private IP
B. Is the same as a private endpoint
C. Routes traffic over Microsoft backbone but the PaaS service still has a public IP
D. Disables RBAC on the resource

### 19. Premium SSD v2 disks can be used as:
A. OS disk only
B. Both OS and data
C. Data disks only (not OS disk)
D. Backup only

### 20. **Yes/No** — Azure Files.

**S1:** NFS 4.1 shares require Premium FileStorage account.
**S2:** Storage account key auth gives per-user audit logs.
**S3:** Cloud tiering replaces local copies with pointer (stub) files.

A. No / No / Yes
B. Yes / Yes / No
C. Yes / No / Yes
D. Yes / No / No

### 21. Spot VMs are evicted with how much notice?
A. 30 seconds
B. None
C. 5 minutes
D. 1 hour

### 22. To deploy zone-redundant web tier behind a load balancer, you should:
A. Single VM in zone 1
B. Availability Set with 5 VMs
C. VMSS Flexible across zones 1, 2, 3 + Standard LB with zone-redundant frontend
D. Single VM + ASR

### 23. The Azure File Sync agent runs on:
A. Windows Server (registered)
B. Linux Server
C. macOS
D. Containers

### 24. **Order these steps** to grant a B2B guest read access to one storage container's blobs.

1. Invite the guest to your tenant
2. Add the guest to a security group
3. Assign `Storage Blob Data Reader` to the group at the container scope
4. Verify a CA policy requires MFA for guests

A. 1 → 2 → 3 → 4
B. 4 → 1 → 2 → 3
C. 2 → 1 → 3 → 4
D. 1 → 3 → 2 → 4

### 25. Microsoft Entra ID Privileged Identity Management (PIM) requires:
A. P2
B. P1
C. Free tier
D. Microsoft 365 Apps

### 26. ZRS replicates data across:
A. 3 disks in one rack
B. 3 datacenters (AZs) in one region
C. Two paired regions
D. 6 separate datacenters

### 27. To deploy a fully **private** path to a storage account from a VNet, with **no public IP exposure**, you must:
A. Use Private Endpoint + disable public network access on the storage account + create a Private DNS Zone link
B. Use Service Endpoint only
C. Disable HTTPS
D. Use a SAS token only

### 28. **Yes/No** — VM features.

**S1:** Ultra Disk can be used as an OS disk.
**S2:** Availability Sets and Availability Zones cannot be combined for one VM.
**S3:** Azure Disk Encryption (ADE) operates at the OS level (BitLocker/dm-crypt).

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / No
D. No / Yes / Yes

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. D    21. A
2.  D    12. A    22. C
3.  D    13. D    23. A
4.  C    14. B    24. A
5.  B    15. C    25. A
6.  A    16. C    26. B
7.  D    17. B    27. A
8.  D    18. C    28. D
9.  B    19. C
10. B    20. C
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 26–28 | 🏆 Excellent — Module 6+ next |
| 20–25 | ✅ On track. Review missed Qs, then continue. |
| 14–19 | ⚠️ Re-study weak modules (use the table below) |
| <14   | 🔁 Restart from Module 1 |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it (see map below)
2. Re-read that module's Reading.md
3. Add an Anki flashcard for the concept
4. Try the question again 3 days later

### Wrong-answer → Module map

| Question # | Module |
|------------|--------|
| 1, 13, 14, 15 | Module 1 (Hierarchy + Tags + Policy) |
| 2, 10, 11, 12, 24, 25 | Module 2 (Entra ID + RBAC) |
| 3, 4, 5, 6, 16, 17, 18, 26, 27 | Module 3 (Storage + Blob) |
| 20, 23 | Module 4 (Azure Files) |
| 7, 8, 9, 19, 21, 22, 28 | Module 5 (VMs) |

---

➡️ When ready: continue with [Module 6: App Services & Containers](../Module-06-App-Services-Containers/Reading.md), then [Practice Exam 2](./Practice-Exam-2.md).
