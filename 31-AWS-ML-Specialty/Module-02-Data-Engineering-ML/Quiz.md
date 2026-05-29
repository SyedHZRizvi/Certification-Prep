# ✏️ Module 2 Quiz: Data Engineering for ML

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Aim for 20/25 minimum. Time limit: 35 minutes.

> **Bloom's distribution.** Remember 4 (16%) · Understand 5 (20%) · Apply 9 (36%) · Analyze/Evaluate 6 (24%) · Create 1 (4%).

---

## Questions

### Q1. Which storage class is BEST for ML training data accessed multiple times per week? *(Apply)*
A. S3 Glacier Deep Archive
B. S3 Standard
C. S3 Glacier Flexible Retrieval
D. S3 One Zone-IA

---

### Q2. Distributed deep-learning training on 32 GPU instances is bottlenecked on S3 reads. The BEST fix is: *(Apply)*
A. Switch to S3 Glacier Instant Retrieval
B. Stage training data on FSx for Lustre linked to the S3 bucket
C. Convert files from Parquet to CSV
D. Increase the S3 bucket's prefix count to 50

---

### Q3. Which AWS service auto-buffers and converts JSON streaming records to Parquet in S3 with no code? *(Remember)*
A. Kinesis Data Streams
B. Kinesis Data Firehose with format conversion
C. AWS Lambda only
D. Amazon MSK

---

### Q4. A team has 1,000 new Parquet files dropped into S3 each day partitioned by `year=/month=/day=/`. They want them queryable in Athena automatically with NO crawler. The BEST option is: *(Apply)*
A. Glue Crawler scheduled hourly
B. Athena partition projection on the table
C. Daily Glue ETL job
D. Manual `MSCK REPAIR TABLE` weekly

---

### Q5. The MAX object size in S3 is: *(Remember)*
A. 5 GB
B. 5 TB
C. 500 GB
D. 5 PB

---

### Q6. A Kinesis Data Stream is configured with 10 shards, but 70% of records share one `customer_id` partition key. The MOST likely problem is: *(Analyze)*
A. Throttling on EFS
B. Hot shard
C. Encryption misconfiguration
D. CloudTrail throttling

---

### Q7. Athena bill is $30K/month — most queries scan an entire raw JSON dataset. The HIGHEST-impact single change is: *(Apply)*
A. Switch to Redshift Spectrum
B. Convert raw JSON to Parquet and partition by date
C. Move data to S3 Standard-IA
D. Increase Athena timeout

---

### Q8. A company must replicate an on-prem PostgreSQL database to S3 continuously, in Parquet, for ML training. The BEST service is: *(Apply)*
A. AWS DataSync
B. AWS Snowball
C. AWS DMS with CDC, target = S3
D. AWS Storage Gateway

---

### Q9. Which file format is the BEST default for tabular ML training data on S3? *(Remember)*
A. CSV with gzip
B. JSON Lines
C. Apache Parquet
D. Plain text

---

### Q10. The BEST way to grant column-level access (hide `ssn`) on a Glue table to a specific ML team is: *(Apply)*
A. S3 bucket policy on prefixes
B. IAM policy with `Resource: *`
C. Lake Formation column-level grants with LF-Tags
D. KMS key policy

---

### Q11. A Lambda function preprocesses incoming events before Firehose lands them in S3. The function takes 25 minutes on a 5 GB payload. The MOST appropriate fix is: *(Analyze)*
A. Increase Lambda memory to 10 GB
B. Move the workload to AWS Glue Spark or SageMaker Processing (Lambda is capped at 15 min)
C. Add provisioned concurrency
D. Switch to Lambda@Edge

---

### Q12. To ship 2 petabytes of historical archives from an on-prem data centre to S3 within 8 weeks: *(Apply)*
A. Online via Direct Connect
B. AWS DataSync
C. AWS Snowball Edge cluster
D. AWS DMS

---

### Q13. Which AWS service is BEST for low-latency real-time stream processing with windowed aggregations? *(Apply)*
A. AWS Glue ETL (Spark batch)
B. Amazon Athena
C. Amazon Managed Service for Apache Flink (formerly Kinesis Data Analytics)
D. Amazon S3 Select

---

### Q14. Which S3 encryption mode is the BEST fit for a regulated workload that requires per-request audit logs and a customer-managed key? *(Apply)*
A. SSE-S3
B. SSE-KMS with customer-managed key
C. Client-side encryption with random local keys
D. No encryption (use bucket policy only)

---

### Q15. A Glue Crawler scheduled daily takes hours because the bucket has billions of small JSON files. The BEST mitigation is: *(Analyze)*
A. Run the crawler hourly instead
B. Use Glue Schema Registry instead
C. Compact files into larger Parquet files first; consider partition projection to remove the crawler
D. Switch to S3 Standard-IA

---

### Q16. The PRIMARY benefit of SageMaker pipe mode with RecordIO-protobuf input is: *(Understand)*
A. Easier human readability
B. Streaming training data without copying to local disk; faster training
C. Built-in encryption only
D. Automatic hyperparameter tuning

---

### Q17. A team wants Glue ETL jobs to process ONLY files added since the previous run. The BEST mechanism is: *(Apply)*
A. Glue job bookmarks
B. Manual S3 list-and-diff each run
C. Crawler partition projection
D. Lambda triggered on every S3 event

---

### Q18. Which AWS service is BEST for a managed Apache Kafka cluster? *(Remember)*
A. Amazon MQ
B. Amazon MSK
C. Amazon SQS
D. Kinesis Data Streams

---

### Q19. Cross-account access to a Glue table without copying the data is BEST achieved with: *(Apply)*
A. S3 cross-region replication
B. Lake Formation + RAM (Resource Access Manager) grant
C. Glue Crawler in the consumer account
D. DMS task

---

### Q20. A Firehose stream lands events to S3 with a 60-second buffer. Latency must be sub-second end-to-end. The BEST replacement is: *(Analyze)*
A. Kinesis Data Streams with a Lambda/Flink consumer
B. Athena Federated Query
C. SQS standard
D. S3 Event Notifications

---

### Q21. The PRIMARY purpose of a "raw zone → curated zone" data-lake architecture is: *(Understand)*
A. To increase storage cost
B. To preserve immutable source data and apply transforms downstream for reproducibility and lineage
C. To bypass IAM
D. To avoid using S3

---

### Q22. Which combination is BEST for managed nightly NFS-share sync from on-prem to S3? *(Apply)*
A. AWS Snowball Edge
B. AWS DataSync with scheduled tasks
C. AWS Backup
D. FTP

---

### Q23. To enforce that ALL S3 PUTs must be encrypted with a specific KMS key: *(Evaluate)*
A. Set bucket Default Encryption only
B. Bucket policy `Deny` PUTs missing `aws:kms` SSE header and required key-id
C. Enable Block Public Access
D. CloudFront origin restriction

---

### Q24. Which service is BEST for analyst-driven, no-code data prep with 250+ transformations? *(Remember)*
A. Glue Studio
B. Glue DataBrew
C. EMR Notebooks
D. Athena Workgroups

---

### Q25. A team must guarantee that streaming events use a versioned Avro schema and reject malformed records. The BEST AWS service is: *(Apply)*
A. AWS Glue Schema Registry
B. AWS CloudFormation
C. Amazon MQ
D. AWS Config

---

## 🎯 Answers + Explanations

### Q1: **B. S3 Standard**
Active training reads are hot — Standard or Intelligent-Tiering. Glacier classes have retrieval delays/fees. One Zone-IA is for re-creatable data.

### Q2: **B. FSx for Lustre linked to S3**
Lustre gives sub-ms file access with on-demand lazy-load from S3. The standard pattern for high-throughput distributed DL training.

### Q3: **B. Kinesis Data Firehose with format conversion**
Firehose has built-in JSON→Parquet conversion using a Glue table schema. KDS is lower-level; MSK is Kafka.

### Q4: **B. Athena partition projection**
Projection computes partitions from key naming — no crawler, partitions instantly visible. Crawlers are batch; this avoids that latency entirely.

### Q5: **B. 5 TB**
S3 max object size = 5 TB (memorise alongside the 5 GB single-PUT limit / 5 MB multipart minimum part).

### Q6: **B. Hot shard**
70% of traffic on one partition key concentrates on one shard. Fix: better partition key (UUID per event) or move to on-demand mode.

### Q7: **B. Convert to Parquet and partition by date**
Parquet's columnar + Snappy compression and partition pruning together usually slash Athena cost 5-50×. The single highest-leverage move.

### Q8: **C. AWS DMS with CDC**
DMS handles full + ongoing change-data-capture, target = S3 (Parquet). DataSync is for filesystems, Snowball is offline, Storage Gateway is hybrid.

### Q9: **C. Apache Parquet**
Columnar, compressed, splittable, schema-aware. Best default for ML and analytics.

### Q10: **C. Lake Formation column-level grants with LF-Tags**
Column-level security is a Lake Formation feature. S3 bucket policies are object-level; KMS guards keys, not columns.

### Q11: **B. Move to Glue / SageMaker Processing**
Lambda max 15-minute timeout. Workloads >15 min need Glue Python Shell, Glue Spark, or SageMaker Processing.

### Q12: **C. Snowball Edge cluster**
2 PB / 8 weeks ≈ 4 Gbps continuous — usually impractical over a typical Direct Connect link cost-effectively. Snowball Edge cluster ships disks.

### Q13: **C. Managed Service for Apache Flink**
Flink for windowed real-time SQL/Java stream processing. Athena is batch; Glue ETL is batch; S3 Select is single-object only.

### Q14: **B. SSE-KMS with customer-managed key**
Customer-managed KMS keys give per-request audit logs in CloudTrail. SSE-S3 has no per-request audit; client-side puts key management on you.

### Q15: **C. Compact small files; consider partition projection**
Small-file problem destroys crawler and query performance. Compact into larger Parquet files (often via Glue ETL) and skip the crawler with projection.

### Q16: **B. Streams training data without local-disk copy**
Pipe mode pipes RecordIO-protobuf records directly into the training container; avoids local-disk staging for huge datasets. Faster start, less I/O.

### Q17: **A. Glue job bookmarks**
Bookmarks track processed files/state automatically — incremental ETL with no glue (pun intended) code on your side.

### Q18: **B. Amazon MSK**
MSK = Managed Streaming for Apache Kafka. MQ is for RabbitMQ/ActiveMQ; SQS is queue; KDS is similar concept but a different protocol.

### Q19: **B. Lake Formation + RAM**
LF can grant cross-account access; RAM shares the resource without copying data. Pattern for federated data lakes.

### Q20: **A. KDS with Lambda/Flink consumer**
Firehose has a 60s buffer minimum. KDS pushes records in tens of ms. Pair with Lambda (small) or Flink (windowed) for true real-time.

### Q21: **B. Preserve immutable raw + curated transforms for lineage**
Two-zone pattern keeps source data untouched (for reproducibility / re-derivation) while curated zone holds query-ready forms.

### Q22: **B. DataSync scheduled tasks**
Online, managed, scheduled NFS / SMB / HDFS → S3 sync. Snowball is offline; Backup is for AWS resources.

### Q23: **B. Bucket policy `Deny`**
Bucket policy can deny PUTs missing the required SSE header / key-id. Default Encryption applies but does not *force* the specific key without a `Deny`.

### Q24: **B. Glue DataBrew**
DataBrew is the analyst-friendly no-code prep tool with 250+ transforms (Glue Studio is for ETL devs).

### Q25: **A. Glue Schema Registry**
Schema Registry stores versioned Avro / Protobuf / JSON Schema; producers/consumers validate against it.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Mastery. Move to Module 3.
- 20–23/25 → ✅ Solid. Note misses and continue.
- 16–19/25 → ⚠️ Re-read the Glue and Kinesis sections; re-quiz tomorrow.
- <16/25 → 🔁 Re-read the full Reading.md.

---

## 🃏 Add To Your Flashcards

- S3 storage-class trade-off table (Standard → Glacier Deep Archive)
- Kinesis Data Streams vs Firehose vs Managed Flink vs Video Streams
- Glue Crawler vs Schema Registry vs Athena partition projection
- File format ranking: Parquet > ORC > Avro > JSON > CSV for ML
- Lake Formation = governance layer ON TOP of IAM
- DMS = continuous DB replication; DataSync = filesystem sync; Snowball = offline; Storage Gateway = hybrid mount
- 60-second Firehose buffer = "near real time", not sub-second
- Lambda hard limits: 15 min timeout, 10 GB memory, 10 GB /tmp

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3: EDA & Feature Engineering](../Module-03-EDA-Feature-Engineering/Reading.md)
