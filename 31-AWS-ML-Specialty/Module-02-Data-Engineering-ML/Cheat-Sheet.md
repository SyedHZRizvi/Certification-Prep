# 📋 Module 2 Cheat Sheet: Data Engineering for ML

> One page. Tape to monitor. Read before exam.

---

## 📦 S3 Storage Classes, One-Liner Recall

| Class | When |
|-------|------|
| **Standard** | Hot training data |
| **Intelligent-Tiering** | Unknown / shifting access |
| **Standard-IA** | Cold-ish, ms retrieval |
| **One Zone-IA** | Re-creatable cold (single AZ) |
| **Glacier Instant** | Quarterly access, ms latency |
| **Glacier Flexible** | Yearly access, minutes retrieval |
| **Glacier Deep Archive** | 7-yr compliance, 12 h retrieval |

🚨 **Trap:** Glacier Deep Archive cannot serve active ML training (12 h retrieval).

---

## 🔑 S3 Limits (Memorize)

- Max object: **5 TB**
- Single PUT: **5 GB**
- Multipart part: **5 MB – 5 GB**
- Per-prefix PUT: **3,500/s**; GET: **5,500/s**
- Spread keys across prefixes for higher rates

---

## 🌊 Glue, The Big Three

| Tool | Use |
|------|-----|
| **Crawler** | Discover schema → populate Catalogue |
| **ETL Job** | Spark / Python Shell transforms |
| **DataBrew** | No-code prep (analyst-friendly) |
| **Schema Registry** | Versioned Avro/Protobuf/JSON for streams |
| **Data Quality** | Rule-based DQ checks |

🎯 Use **partition projection** to skip the crawler entirely when keys follow `key=value/` convention.

---

## ⚡ Kinesis Decision Tree

```
Need sub-second processing? → KDS + Flink
Need to land in S3 with no code? → Firehose
Need windowed real-time SQL? → Managed Apache Flink
Need to stream video for ML? → Kinesis Video Streams
Already speak Kafka? → Amazon MSK
```

Per KDS shard: **1 MB/s OR 1,000 rec/s** ingest; **2 MB/s** per consumer (5 MB/s w/ EFO).

Firehose buffer: **60 s OR 5 MiB** (whichever first). NOT real-time.

---

## 🐘 EMR vs Glue vs Athena

| Tool | Best for |
|------|----------|
| **Glue ETL (serverless)** | Up to ~TB; pay per DPU-second |
| **EMR Serverless** | TB+; Spark / Hive / Trino without managing cluster |
| **EMR on EC2** | Persistent cluster, custom libs, max control |
| **EMR on EKS** | Spark on existing K8s |
| **Athena** | Ad-hoc SQL on S3; serverless; pay per TB scanned |

---

## 🔍 Athena Cost Optimisation (Big 5)

1. **Parquet/ORC**, not CSV/JSON
2. **Partition** by date / region / etc.
3. **Partition projection** to skip crawler latency
4. **Compress** with Snappy
5. **SELECT specific columns**; **LIMIT** for exploration

✅ Workgroup data-scan limits stop runaway queries.

---

## 🏞️ Lake Formation, When To Use

- **Column / row-level security** on Glue tables
- **LF-Tags** for tag-based grants
- **Cross-account sharing** via RAM (no copy)
- Centralised audit through CloudTrail

🚨 LF is ON TOP of IAM, both are evaluated; LF doesn't override IAM `Deny`.

---

## 📂 File Format Cheat Card

| Format | Use For ML |
|--------|-----------|
| **Parquet** | ✅ Default for tabular |
| **ORC** | Hive-heavy; similar to Parquet |
| **Avro** | Streaming + schema evolution |
| **RecordIO-protobuf** | SageMaker built-in algo pipe mode |
| **TFRecord** | TensorFlow training |
| **JSON / CSV** | Human-readable; small data |
| **Gzip** | ❌ Not splittable (avoid for big files) |
| **Snappy** | ✅ Default Parquet codec |

---

## 🔌 Data-Movement Decision Table

| Task | Service |
|------|---------|
| Continuous DB replication → S3 | **AWS DMS** (CDC) |
| Online NFS → S3 nightly | **AWS DataSync** |
| Hybrid NFS that lands in S3 | **Storage Gateway (File)** |
| Petabyte offline transfer | **Snowball Edge cluster** |
| SaaS (Salesforce) → S3 | **AppFlow** |
| Trigger on S3 PUT | **S3 Event → Lambda / EventBridge** |
| Orchestrate multi-step ETL | **Step Functions** |

---

## 🧱 Reference Architecture

```
Sources → DMS / Kinesis / DataSync
     ↓
S3 RAW (immutable)
     ↓ Glue Crawler / Schema Registry
     ↓ Glue ETL / DataBrew / Lambda
S3 CURATED (Parquet, partitioned)
     ↓ Lake Formation governance
     ↓
Athena ⇆ SageMaker Feature Store ⇆ Training Jobs
```

Memorise this.

---

## 🚨 Module-2 Top Traps

| Phrase in question | Trap |
|-------------------|------|
| "sub-second latency" | Firehose ≠ real-time; use KDS + Flink |
| "automatic partition discovery" | Use partition projection if keys conform |
| "petabyte transfer" | Snowball, not online |
| "hot shard" | Re-key partition key OR on-demand mode |
| "column-level security" | Lake Formation |
| "Athena bill too high" | Parquet + partition + project |
| ">15-minute preprocessing" | Glue / SageMaker Processing, not Lambda |
| "PB-scale archive, 12 h retrieval ok" | Deep Archive |
| "cheaper than NAT for S3 from VPC" | Gateway VPC Endpoint for S3 |

---

## ⚡ Quick Self-Check

1. Pick the BEST class for ML training data accessed weekly. ___
2. Streaming JSON → Parquet in S3 with no code. Service? ___
3. Single change to slash Athena bill 10×? ___
4. Column-level security on a Glue table? Service? ___
5. Continuous DB replication on-prem → S3 (with CDC)? ___
6. Distributed DL training I/O bottlenecked on S3. Fix? ___

If you got all 6 in 90 s, you own Module 2. ✅

---

➡️ [Module 3: EDA & Feature Engineering](../Module-03-EDA-Feature-Engineering/Reading.md)
