# 📋 Module 3 Cheat Sheet: Core Storage

> One page. Print it. Tape it to your monitor.

---

## 📚 The 3 Storage Paradigms

```
Block   →  EBS, Instance Store   →  Hard drive feel
File    →  EFS, FSx              →  Shared network drive
Object  →  S3, Glacier classes   →  HTTP-accessible buckets
```

---

## ☁️ S3 Storage Classes (MEMORIZE the cheat-table)

| Class | Use case | Min charge | Retrieve |
|-------|----------|------------|----------|
| **Standard** | Frequent access | none | ms |
| **Intelligent-Tiering** | Unknown patterns | none | ms (auto-moves) |
| **Standard-IA** | Infrequent, rapid | 30 d | ms |
| **One Zone-IA** | Recreatable, cheap | 30 d | ms (1 AZ only!) |
| **Glacier Instant Retrieval** | Archive + ms access | 90 d | ms |
| **Glacier Flexible Retrieval** | Archive | 90 d | min → hrs |
| **Glacier Deep Archive** | 7-yr retention | 180 d | 12–48 hrs |

🎯 Pattern: cheaper = longer retrieval = longer minimum duration.

---

## 🛡️ S3 Headline Facts

- **11 nines durability** (Standard) · **4 nines availability**
- Max object = **5 TB** (>5 GB requires multipart upload)
- Bucket names = **globally unique**
- **Block Public Access ON by default** (since 2023)
- Versioning, Object Lock (WORM), Lifecycle, CRR/SRR, Presigned URLs, Transfer Acceleration

---

## 💽 EBS, Block Storage For EC2

| Type | Use case |
|------|----------|
| **gp3** | Default SSD (3,000 IOPS baseline) |
| **gp2** | Legacy SSD |
| **io2 / io2 Block Express** | High-perf DBs (256K IOPS) |
| **st1** | Throughput HDD (DW, logs) |
| **sc1** | Cold HDD (cheapest) |

- AZ-scoped → snapshot to move between AZs
- One EC2 at a time (Multi-Attach is the rare io1/io2 exception)
- **Snapshots stored in S3** (incremental, can copy cross-Region)

---

## 📁 EFS vs FSx

| Service | Protocol | OS |
|---------|----------|-----|
| **EFS** | NFS | Linux |
| **FSx for Windows** | SMB | Windows (AD-integrated) |
| **FSx for Lustre** | POSIX | HPC / ML, S3-integrated |
| **FSx for NetApp ONTAP** | NFS/SMB/iSCSI | NetApp lift & shift |
| **FSx for OpenZFS** | NFS | ZFS on AWS |

---

## 🔄 Storage Gateway (hybrid)

| Gateway | Presents on-prem | Stores in |
|---------|-----------------|-----------|
| **S3 File Gateway** | NFS/SMB | S3 |
| **FSx File Gateway** | SMB (cached) | FSx Windows |
| **Volume Gateway** | iSCSI | S3 (as EBS snapshots) |
| **Tape Gateway** | VTL | S3 / Glacier |

---

## 📦 Snow Family

| Device | Capacity | Use |
|--------|----------|-----|
| **Snowcone** | 8 TB | Edge collection, ruggedized backpack |
| **Snowball Edge Storage Optimized** | 80 TB | Bulk transfer |
| **Snowball Edge Compute Optimized** | 42 TB + EC2/Lambda | Edge processing |
| **Snowmobile** | 100 PB (truck) | Datacenter migration (being phased out, check) |

---

## ⚖️ When To Pick What

| Workload | Pick |
|----------|------|
| Web/mobile app static assets | **S3 Standard + CloudFront** |
| EC2 boot disk | **EBS gp3** |
| Shared Linux content | **EFS** |
| Windows file shares | **FSx for Windows** |
| HPC / ML scratch | **FSx for Lustre** |
| 7-yr compliance archive | **S3 Glacier Deep Archive** |
| 200 TB one-time upload | **Snowball Edge** |
| Replace on-prem tapes | **Storage Gateway: Tape Gateway** |
| Backups of recreatable data | **S3 One Zone-IA** |

---

## 🏆 Exam Power Phrases

✅ "Use S3 + lifecycle to transition to Glacier"
✅ "Use Cross-Region Replication for DR"
✅ "Use Versioning + Object Lock for compliance"
✅ "Use Snowball for petabyte-scale transfer"
✅ "Use EFS for multi-instance Linux shared file"

Wrong:
❌ "EBS shared between many EC2"
❌ "S3 is a file system with folders"
❌ "Stopped EC2 deletes EBS volumes"
❌ "Glacier Deep Archive retrieves in seconds"

---

## ⚠️ Anti-Patterns

- ❌ Hot data in Standard-IA (retrieval fees + 30-day min)
- ❌ Primary data on Instance Store (ephemeral!)
- ❌ Production data on One Zone-IA (single AZ)
- ❌ Manual copy-script when Snowball / DataSync would work

---

## ✏️ Quick Self-Check

1. 7 S3 storage classes? ___
2. EBS vs Instance Store key difference? ___
3. EFS vs FSx for Windows? ___
4. Cheapest archive + retrieval time? ___
5. Snowcone vs Snowball Edge? ___

---

➡️ [Module 4: Networking & CDN](../Module-04-Networking-CDN/Reading.md)
