# 🧪 Practice Exam 1, AZ-104 (First Half)

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
B. No, AS must be set at VM creation
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
A. No, needs a data-plane role like `Storage Blob Data Reader`
B. Yes, automatically
C. Only after enabling SAS
D. Only over the private endpoint

### 13. Tags on a resource group are inherited by child resources:
A. Automatically
B. Only for management groups
C. Only at create time
D. NOT automatically, use the "Inherit a tag from RG" Modify policy

### 14. **Yes/No**, Mark each statement.

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

### 20. **Yes/No**, Azure Files.

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

### 28. **Yes/No**, VM features.

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
| 26–28 | 🏆 Excellent, Module 6+ next |
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

---

## Detailed answer rationales

> Per the graduate-level professional bar spec, every wrong option is explained. Use these to retire concepts you missed, not just to "see what's correct."

**Q1. Answer: B.** *Why B is correct.* The canonical Azure hierarchy is Tenant (Entra ID) → Management Group → Subscription → Resource Group → Resource (Microsoft Learn AZ-104 chapter 1; CAF Enterprise-Scale, 2020). *Why the other options are wrong.* **A**: subscriptions don't sit above tenants. **C**: tenant is the identity boundary, not a child of a management group. **D**: management groups are *above* subscriptions, not below. *Exam-takeaway.* Memorize: T-M-S-R-R (Tenant, Mgmt group, Subscription, Resource group, Resource).

**Q2. Answer: D.** *Why D is correct.* Conditional Access requires Entra ID P1 (Microsoft Entra licensing matrix). Identity Protection (risk-based CA) is the P2 feature. *Why the other options are wrong.* **A**: Free tier supports Security Defaults only. **B**: M365 Business Basic includes Exchange but not P1. **C**: P2 is the Identity Protection level, not the minimum for CA, D is the precise answer.  *Exam-takeaway.* P1 unlocks CA + dynamic groups; P2 adds Identity Protection + PIM.

**Q3. Answer: D.** *Why D is correct.* ZRS replicates across three AZs in one region cheapest SKU that survives a zone outage. *Why the other options are wrong.* **A**: LRS is 3 copies in *one* AZ; no AZ resilience. **B**: GZRS does survive AZ outages but costs ~2× ZRS. **C**: GRS protects region loss with LRS within each region does NOT protect a single AZ outage in primary. *Exam-takeaway.* AZ outage → ZRS or GZRS; region loss → GRS or GZRS.

**Q4. Answer: C.** *Why C is correct.* Storage account names are 3–24 lowercase letters/digits, globally unique. *Why the other options are wrong.* **A**: 1–63 is the *resource group* constraint set, not storage. **B**: CamelCase invalid, must be lowercase. **D**: Hyphens are not allowed in storage account names. *Exam-takeaway.* Memorize: lowercase + digits, 3–24 chars, global namespace.

**Q5. Answer: B.** *Why B is correct.* Archive minimum is 180 days; early deletion is pro-rated penalty. *Why the other options are wrong.* **A**: 30 days = Cool minimum. **C**: 90 days = Cold minimum. **D**: 365 days is not an Azure tier minimum. *Exam-takeaway.* Hot none, Cool 30, Cold 90, Archive 180.

**Q6. Answer: A.** *Why A is correct.* Archive blobs require rehydration to Hot/Cool first (takes hours, Standard or High priority). *Why the other options are wrong.* **B**: No special "archive read" API exists, the architecture deliberately delays access. **C**: SAS doesn't bypass rehydration. **D**: There is no automatic 24-hour wait; rehydration is explicit. *Exam-takeaway.* Archive = cold-storage tape mental model.

**Q7. Answer: D.** *Why D is correct.* AS supports up to 3 FDs (some regions) and 20 UDs. *Why the other options are wrong.* **A**: 2 is the AS *default* FD count. **B**: 20 is UDs, not FDs. **C**: 5 is the default UD count. *Exam-takeaway.* Memorize: default 2 FD × 5 UD; max 3 FD × 20 UD.

**Q8. Answer: D.** *Why D is correct.* The canonical Azure SLA ladder: 99.9 single (Premium SSD) / 99.95 AS / 99.99 AZ. *Why the other options are wrong.* **A**: Misses the single-VM 99.9. **B**: Numbers shifted up one rung, single VM is not 99.95. **C**: Order reversed. *Exam-takeaway.* "Nines": 3 / 3.5 / 4 for single / AS / AZ.

**Q9. Answer: B.** *Why B is correct.* AS must be specified at VM creation; cannot be added later (resource property design choice). *Why the other options are wrong.* **A**: Wrong, there's no "Add to AS" operation. **C**: Deallocation does not unlock AS reassignment. **D**: PowerShell can't change this either; the constraint is platform-side. *Exam-takeaway.* Plan AS membership at deploy time; otherwise redeploy.

**Q10. Answer: B.** *Why B is correct.* PIM for Azure resources provides JIT eligible→active activation with MFA + approval. *Why the other options are wrong.* **A**: Permanent assignment violates the time-bound requirement. **C**: Custom roles define *what* permissions exist, not *when* they activate. **D**: AUs scope user/group admin within Entra ID, not Azure resource roles. *Exam-takeaway.* Time-bound + approval + MFA = PIM (Entra P2).

**Q11. Answer: D.** *Why D is correct.* User Access Administrator is the fourth fundamental built-in role (alongside Owner, Contributor, Reader). *Why the other options are wrong.* **A**: "Auditor" is not an Azure built-in role. **B**: Security Administrator is an Entra ID role, not Azure RBAC fundamental. **C**: "Service Principal Manager" doesn't exist as a fundamental. *Exam-takeaway.* Owner = full; Contributor = full except role assignment; Reader = read; UAA = assign roles only.

**Q12. Answer: A.** *Why A is correct.* Control plane ≠ data plane. Storage Account Contributor manages the account; Storage Blob Data Reader is required for *data*. *Why the other options are wrong.* **B**: Wrong, control-plane role doesn't grant data access automatically. **C**: SAS is for delegated access, not a permission upgrade. **D**: Private endpoint changes network path, not RBAC. *Exam-takeaway.* "Data" in the role name means data plane.

**Q13. Answer: D.** *Why D is correct.* Tags do NOT auto-inherit; use the *Inherit a tag from RG* `Modify` policy. *Why the other options are wrong.* **A**: This is the trap answer. **B**: Tags exist on subscriptions, RGs, and resources but inheritance is policy-driven everywhere. **C**: Tags can be added anytime, not just at create. *Exam-takeaway.* "Tags don't inherit" repeat this until it's reflex.

**Q14. Answer: B.** *Why B is correct.* S1 yes (resources can live in different regions); S2 no (one RG per resource); S3 yes (delete is cascade). *Why the other options are wrong.* **A**: S2 wrong. **C**: S1 wrong. **D**: S3 wrong. *Exam-takeaway.* RG = lifecycle boundary; resources can be cross-region inside one RG.

**Q15. Answer: C.** *Why C is correct.* Apply governance at the highest scope that covers the affected resources, MG covering both subs is right. *Why the other options are wrong.* **A**: Tenant Root over-applies (affects all subs). **B**: Per-RG creates drift risk. **D**: Per-subscription is duplicative if you have multiple subs. *Exam-takeaway.* Apply at the smallest scope that fully covers the requirement.

**Q16. Answer: C.** *Why C is correct.* CMK setup order: KV first (need soft delete + purge protection), then key, then enable MI on storage, grant MI access, switch to KV key. *Why the other options are wrong.* **A**: Can't enable MI without a vault to grant access to. **B**: Same issue plus key sequencing. **D**: Key before vault makes no sense. *Exam-takeaway.* Vault → key → MI → access grant → switch.

**Q17. Answer: B.** *Why B is correct.* User Delegation SAS uses Entra ID; auditable per user. *Why the other options are wrong.* **A**: Account SAS uses the account key. **C**: Service SAS also uses key or stored access policy. **D**: "Anonymous SAS" isn't a real Azure SAS type. *Exam-takeaway.* Prefer User Delegation SAS in 2026.

**Q18. Answer: C.** *Why C is correct.* Service endpoint optimizes routing over Microsoft backbone, PaaS service still has a public IP. *Why the other options are wrong.* **A**: Private endpoint, not service endpoint, gives private IP. **B**: Different concept. **D**: RBAC is independent of endpoint type. *Exam-takeaway.* SE ≠ PE.

**Q19. Answer: C.** *Why C is correct.* Both Premium SSD v2 and Ultra are data disks only. *Why the other options are wrong.* **A/B**: They cannot be OS disks. **D**: Both can be primary data disks for production workloads. *Exam-takeaway.* OS disk = Premium SSD or Standard SSD; data disks can be v2/Ultra.

**Q20. Answer: C.** *Why C is correct.* S1 yes (NFS = Premium FileStorage). S2 no (key auth has no per-user audit). S3 yes (cloud tiering uses stubs). *Why the other options are wrong.* **A**: S1 wrong. **B**: S2 wrong. **D**: S3 wrong. *Exam-takeaway.* Key auth is shared identity, no per-user trail.

**Q21. Answer: A.** *Why A is correct.* Spot VM eviction notice is 30 seconds. *Why the other options are wrong.* **B**: No eviction notice would defeat the design. **C**: 5 minutes is too generous for spot capacity reclamation. **D**: 24 hours is reservation cancellation, not spot. *Exam-takeaway.* Memorize: 30 sec.

**Q22. Answer: C.** *Why C is correct.* VMSS Flexible across 3 zones + Standard LB with zone-redundant frontend = full HA. *Why the other options are wrong.* **A**: Single VM has 99.9%, no HA. **B**: AS is intra-DC; not zone-redundant. **D**: ASR is for DR, not active-active HA. *Exam-takeaway.* "Zone-redundant" + "behind LB" = VMSS Flexible across zones.

**Q23. Answer: A.** *Why A is correct.* The File Sync agent runs only on Windows Server (2016+). *Why the other options are wrong.* **B**: No Linux agent exists. **C**: No macOS agent. **D**: Not container-based. *Exam-takeaway.* Windows Server only.

**Q24. Answer: A.** *Why A is correct.* Invite → group → grant role at container scope → confirm guest MFA via CA. *Why the other options are wrong.* **B**: CA check before invite makes no sense, there's no guest yet. **C**: Adding to group before guest exists fails. **D**: Direct assignment without group is acceptable but less maintainable; the question favors group-based assignment. *Exam-takeaway.* Identity → group → scope-level role → CA.

**Q25. Answer: A.** *Why A is correct.* PIM requires Entra P2. *Why the other options are wrong.* **B**: P1 is CA + dynamic groups, not PIM. **C**: Free has no PIM. **D**: M365 Apps doesn't include PIM. *Exam-takeaway.* PIM = P2.

**Q26. Answer: B.** *Why B is correct.* ZRS replicates across 3 AZs in one region. *Why the other options are wrong.* **A**: LRS = 3 in *one* AZ. **C**: GRS = 2 regions, not "across AZs." **D**: GZRS has 6 copies but the description "two paired regions" doesn't match ZRS. *Exam-takeaway.* ZRS = 3 AZs in 1 region.

**Q27. Answer: A.** *Why A is correct.* Private Endpoint + disable public access + Private DNS Zone link = fully private path. *Why the other options are wrong.* **B**: Service endpoint still has public IP on the PaaS. **C**: Disabling HTTPS is wrong direction. **D**: SAS doesn't change network exposure. *Exam-takeaway.* PE + DNS + disable public = exam favorite triple.

**Q28. Answer: D.** *Why D is correct.* S1 no (Ultra = data only). S2 yes (AS and AZ mutually exclusive). S3 yes (ADE = BitLocker/dm-crypt). *Why the other options are wrong.* **A**: S1 wrong. **B**: S1 wrong. **C**: S2 wrong (it IS yes). *Exam-takeaway.* AS and AZ never coexist for one VM.
