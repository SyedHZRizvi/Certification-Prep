# ✏️ Module 5 Quiz: S3 Deep Dive

> **Instructions:** 26 questions, ~35 min. Target 21/26.

> **Bloom's distribution.** Remember 6 (23%) · Understand 6 (23%) · Apply 8 (31%) · Analyze/Evaluate 5 (19%) · Create 1 (4%).

---

## Questions

### Q1. Designed durability of S3 Standard is: *(Remember)*
A. 99.9%
B. 99.99%
C. 11 nines (99.999999999%)
D. 99.99999%

---

### Q2. Access patterns are unknown and may change frequently. The MOST cost-effective storage class is: *(Apply)*
A. S3 Standard
B. S3 Intelligent-Tiering
C. S3 Glacier Deep Archive
D. S3 Standard-IA

---

### Q3. A 7-year regulatory retention requirement says records must be immutable and not removable by ANY user — not even root. The right configuration is: *(Apply)*
A. Versioning only
B. Object Lock in Governance mode
C. Object Lock in Compliance mode
D. MFA Delete

---

### Q4. Which storage class is BEST for an archive that must be retrievable within milliseconds but is rarely accessed? *(Apply)*
A. Glacier Flexible Retrieval
B. Glacier Deep Archive
C. Glacier Instant Retrieval
D. Standard-IA

---

### Q5. A bucket needs server-side encryption with customer control of the key and audit logging of every Encrypt/Decrypt call. The BEST option is: *(Apply)*
A. SSE-S3
B. SSE-KMS using a customer-managed CMK
C. SSE-C
D. No encryption

---

### Q6. To replicate a bucket's objects to another region for disaster recovery: *(Apply)*
A. Enable Cross-Region Replication (CRR) with versioning on both buckets
B. Use lifecycle policy
C. Use Snowball
D. Use VPC peering

---

### Q7. To allow a customer to download a private S3 object for the next 60 minutes WITHOUT giving them AWS credentials: *(Apply)*
A. Make the object public
B. Generate a presigned URL with 1-hour expiry
C. Add them as IAM user
D. Use VPC endpoint

---

### Q8. Strong read-after-write consistency in S3 means: *(Understand)*
A. Reads can return old data for up to 24 hours
B. Reads immediately reflect the latest PUT
C. Only applies to versioned buckets
D. Requires S3 Select

---

### Q9. A workload uploads 5 TB files. The BEST upload method is: *(Apply)*
A. Single PUT
B. Multipart Upload
C. AWS Snowball
D. CloudFront

---

### Q10. A user in Sydney uploads a 10 GB file to a bucket in `us-east-1`. The upload is slow. The BEST fix is: *(Apply)*
A. Use a NAT Gateway
B. Enable S3 Transfer Acceleration
C. Move the bucket to a private subnet
D. Use a Direct Connect link

---

### Q11. Lifecycle rules allow transitioning S3 Standard objects to S3 Standard-IA after: *(Remember)*
A. 1 day
B. 7 days
C. 30 days (minimum storage duration in source class)
D. 90 days

---

### Q12. Lambda needs to extract 100 rows from a 50 GB CSV in S3 with minimal data transfer cost. Use: *(Apply)*
A. S3 Select
B. CloudFront
C. Glacier Vault
D. EFS

---

### Q13. To privately serve S3-hosted content to global users while keeping the bucket NOT public: *(Create)*
A. Make the bucket public + CloudFront
B. CloudFront with Origin Access Control (OAC) + Block Public Access ON
C. Use Direct Connect
D. Use NAT Gateway

---

### Q14. Object Lock requires: *(Understand)*
A. Versioning to be enabled
B. Public bucket
C. CloudFront in front
D. SSE-C encryption

---

### Q15. Which storage class lives in a SINGLE AZ (lower availability and lower cost)? *(Remember)*
A. Standard
B. Standard-IA
C. One Zone-IA
D. Glacier Deep Archive

---

### Q16. A bucket policy with `"Effect": "Deny"` and `"Condition": {"Null": {"s3:x-amz-server-side-encryption": "true"}}` does what? *(Analyze)*
A. Denies all uploads
B. Denies unencrypted uploads
C. Allows all uploads
D. Forces public access

---

### Q17. CRR replicates which of the following automatically (without extra config)? *(Analyze)*
A. Existing objects in the bucket at the time replication is enabled
B. Only NEW objects created after replication is enabled
C. Only deletions
D. Only object metadata

---

### Q18. The MAXIMUM object size in S3 is: *(Remember)*
A. 5 GB
B. 50 GB
C. 500 GB
D. 5 TB

---

### Q19. The default storage class for S3 is: *(Remember)*
A. Standard
B. Standard-IA
C. Glacier
D. One Zone-IA

---

### Q20. A team has 5 apps that access the same bucket with very different access patterns and IAM policy needs. The BEST simplification is: *(Evaluate)*
A. Create separate buckets for each app
B. Use S3 Access Points with per-app policies
C. Make the bucket public
D. Use CloudFront

---

### Q21. To recover from accidental object overwrites and deletions, the FIRST thing to enable on the bucket is: *(Analyze)*
A. Versioning
B. CloudFront
C. Replication
D. Lifecycle policy

---

### Q22. A user wants to ensure that ONLY MFA-authenticated calls can delete object versions. They should enable: *(Understand)*
A. Block Public Access
B. MFA Delete (root user, via CLI)
C. SSE-KMS
D. Object Lock Governance

---

### Q23. Which feature reduces S3 cost by automatically moving data between access tiers based on observed access patterns? *(Understand)*
A. Lifecycle rules
B. S3 Intelligent-Tiering
C. CRR
D. CloudFront

---

### Q24. After enabling S3 Replication Time Control (RTC), the SLA guarantees most objects replicate within: *(Remember)*
A. 1 minute
B. 5 minutes
C. 15 minutes
D. 1 hour

---

### Q25. To enforce that all uploads to a bucket are encrypted with KMS: *(Understand)*
A. Add a bucket policy denying PUTs without `s3:x-amz-server-side-encryption: aws:kms`
B. Enable Block Public Access
C. Turn on versioning
D. Use CloudFront

---

### Q26. The MOST cost-effective storage class for an archive accessed less than once per year and tolerant of 12–48 hour retrieval is: *(Evaluate)*
A. Standard-IA
B. Glacier Flexible Retrieval
C. Glacier Deep Archive
D. Intelligent-Tiering

---

## 🎯 Answers + Explanations

### Q1: **C. 11 nines durability**
99.999999999% — design loses 1 object per 10,000 over 10M years.

### Q2: **B. Intelligent-Tiering**
Unknown/changing patterns = let AWS move objects automatically. Tiny monitoring fee but no retrieval fees in the standard tiers.

### Q3: **C. Object Lock Compliance mode**
Compliance mode = nobody (not even root) can override during retention.

### Q4: **C. Glacier Instant Retrieval**
GIR gives ms retrieval at archive prices for rarely-accessed data.

### Q5: **B. SSE-KMS with customer-managed CMK**
KMS provides customer-controlled keys; CloudTrail logs each KMS operation for audit.

### Q6: **A. CRR with versioning on both**
Versioning is a prerequisite for replication. CRR copies to another region.

### Q7: **B. Presigned URL with 1-hour expiry**
Standard pattern for time-limited file access. No AWS account needed for the recipient.

### Q8: **B. Reads immediately reflect latest PUT**
Strong consistency since 2020 for all reads/writes.

### Q9: **B. Multipart Upload**
Required above 5 GB; recommended for 100 MB+. Snowball is for petabyte-scale transfers.

### Q10: **B. Transfer Acceleration**
TA uses CloudFront edge POPs to speed long-distance uploads. ~50–500% improvement.

### Q11: **C. 30 days**
Minimum storage duration in Standard before transition to IA.

### Q12: **A. S3 Select**
Server-side SQL retrieves only matching rows; pay only for that data scanned.

### Q13: **B. CloudFront + OAC + BPA on**
OAC keeps the bucket private; CloudFront caches and serves over HTTPS globally.

### Q14: **A. Versioning enabled**
Object Lock builds on top of versioning. You can't enable Object Lock without versioning.

### Q15: **C. One Zone-IA**
Single-AZ class for non-critical data. Lower cost, lower availability (99.5%).

### Q16: **B. Denies unencrypted uploads**
The condition tests whether the encryption header is missing; if so, deny.

### Q17: **B. Only NEW objects after enable**
Existing objects require **S3 Batch Replication** as a one-time job.

### Q18: **D. 5 TB**
Max single object size. Single PUT max is 5 GB; use multipart for larger.

### Q19: **A. Standard**
Default for new uploads unless specified.

### Q20: **B. S3 Access Points**
Multiple named endpoints, each with its own policy and optional VPC restriction.

### Q21: **A. Versioning**
First line of defense against accidental overwrites/deletes — every change becomes a new version.

### Q22: **B. MFA Delete (root, via CLI)**
Only the root user can enable MFA Delete; requires CLI; requires MFA token to delete versions.

### Q23: **B. Intelligent-Tiering**
Specifically engineered for auto-tiering based on access. Lifecycle rules require manual age-based logic.

### Q24: **C. 15 minutes**
RTC SLA: 99.99% of objects replicated within 15 minutes.

### Q25: **A. Bucket policy denying PUTs without KMS encryption header**
Use Deny with Condition on `s3:x-amz-server-side-encryption`.

### Q26: **C. Glacier Deep Archive**
Cheapest tier (~$0.00099/GB-month). 12–48 hr retrieval. Min 180-day storage commitment.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Move on
- 21–24/26 → ✅ Solid; review wrong ones
- 17–20/26 → ⚠️ Re-read storage classes + encryption sections
- <17/26 → 🔁 Re-watch the 4 essential videos and re-quiz

---

## 🃏 Add To Your Flashcards

- 7 storage classes (cost ranking + retrieval time)
- SSE-S3 / SSE-KMS / SSE-C / DSSE
- Object Lock Governance vs Compliance
- Versioning + MFA Delete
- CRR vs SRR (versioning required)
- Presigned URLs for temporary access
- Transfer Acceleration vs Multipart
- S3 Select for partial reads
- CloudFront + OAC + BPA pattern

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)**, then [Module 6](../Module-06-Databases/Reading.md)
