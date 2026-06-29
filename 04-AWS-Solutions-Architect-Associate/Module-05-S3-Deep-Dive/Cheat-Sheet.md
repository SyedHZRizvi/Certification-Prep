# 📋 Module 5 Cheat Sheet: S3 (Simple Storage Service) Deep Dive

> One page. Print it. Tape to your monitor.

---

## 🪣 S3 Quick Facts

| Item | Value |
|------|-------|
| Durability | 11 nines (99.999999999%) |
| Max object size | 5 TB |
| Max single PUT | 5 GB |
| Multipart recommended | > 100 MB |
| Multipart required | > 5 GB |
| Bucket name | Globally unique |
| Consistency | Strong read-after-write (all ops) |

---

## 📊 Storage Classes (cheap → expensive STORAGE; opposite for RETRIEVAL)

| Class | Use | Min duration | Retrieval |
|-------|-----|--------------|-----------|
| **Deep Archive** | Compliance archive | 180 d | 12–48 hr |
| **Glacier Flexible** | Backup archive | 90 d | 1 min – 12 hr |
| **Glacier Instant** | Rarely-accessed but instant | 90 d | ms |
| **One Zone-IA** | Recreatable IA | 30 d | ms |
| **Standard-IA** | Multi-AZ IA | 30 d | ms |
| **Intelligent-Tiering** | Unknown patterns | None | ms |
| **Standard** | Hot, frequent | None | ms |

🧠 **"Unknown access? Intelligent-Tiering. Compliance? Deep Archive. Instant rarely-accessed? Glacier Instant."**

---

## 🔐 Encryption Cheat

| Type | Key |
|------|-----|
| SSE-S3 (default) | AWS-managed |
| SSE-KMS | Customer/AWS KMS CMK (CloudTrail logs) |
| SSE-C | You send the key with each request |
| DSSE-KMS | Dual-layer KMS |
| Client-side | You encrypt before upload |

🧠 *"Audit needed → SSE-KMS. Bring my key → SSE-C. Don't trust AWS at all → client-side."*

---

## 🌍 Replication

| Type | When |
|------|------|
| CRR (Cross-Region) | DR, residency in another region |
| SRR (Same-Region) | Log aggregation, access control split |

Requires: **versioning ON** on source AND destination + replication IAM (Identity and Access Management) role.
**Only NEW objects** replicate (use Batch Replication for existing).
**RTC** = 15-min SLA (Service Level Agreement) for 99.99% of objects.

---

## 🔒 Versioning & Object Lock

| Feature | What |
|---------|------|
| Versioning | Keep every version; delete creates a marker |
| MFA (Multi-Factor Authentication) Delete | Require MFA token to delete versions (root-only enable, CLI (Command Line Interface)) |
| Object Lock, Governance | Override possible with special perm |
| Object Lock, Compliance | NOBODY can override during retention |
| Legal Hold | Indefinite hold, no retention period |

---

## ⚡ Performance Features

| Feature | When |
|---------|------|
| Multipart Upload | Files > 100 MB |
| Transfer Acceleration | Global users uploading fast |
| Byte-Range Fetch | Parallel GET of large object |
| S3 Select | SQL on CSV/JSON/Parquet, partial read |

---

## 🛡️ Access Control Stack

1. **Block Public Access (BPA)**, Account + bucket level. Overrides everything else.
2. **Bucket Policy**, Resource-based JSON. Primary cross-account tool.
3. **IAM Policy**, Identity-based.
4. **ACL**, Legacy. Mostly disabled by default.
5. **Access Points**, Per-app endpoints with own policies.
6. **VPC Endpoint Policy**, Limit which buckets a VPC can talk to.

---

## 🚀 S3 + CloudFront Pattern

```
User → CloudFront edge → OAC → Private S3 bucket (BPA on)
```

- OAC keeps bucket private; only CF can read
- Signed URLs / signed cookies for private content
- Geo-restriction at the edge

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Enable Versioning then Object Lock"
- "Use Intelligent-Tiering for unknown patterns"
- "Use CloudFront + OAC + BPA"
- "Use S3 Select to query without download"
- "Use Multipart Upload above 100 MB"
- "Use CRR with versioning for DR"
- "Use SSE-KMS for audit + control"
- "Use a presigned URL for temporary access"

❌ Usually wrong:

- "Make the bucket public for global reads"
- "Eventual consistency may delay reads"
- "Use single PUT for 10 GB file"
- "Use Glacier for hot data"
- "Disable BPA so it works"

---

## ⚠️ Anti-Patterns

- ❌ Public bucket for sensitive data
- ❌ No versioning on production buckets
- ❌ Single PUT for huge files
- ❌ Glacier for hot data
- ❌ Standard for cold archives
- ❌ Hard-coded long-term creds in app instead of role + presigned URLs

---

## ✏️ Quick Self-Check

1. 7 storage classes in order? ___
2. Object Lock Compliance vs Governance? ___
3. SSE-S3 vs SSE-KMS vs SSE-C? ___
4. CRR requires? ___
5. Why use Transfer Acceleration? ___

---

➡️ Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), then [Module 6: Databases](../Module-06-Databases/Reading.md)
