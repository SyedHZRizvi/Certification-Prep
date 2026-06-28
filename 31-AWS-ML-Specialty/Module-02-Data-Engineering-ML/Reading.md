# Module 2: Data Engineering for Machine Learning 🛠️

> **Why this module matters:** Domain 1 of the MLS-C01 exam is **Data Engineering, 20%** of every question. The blueprint asks: can you *ingest, store, transform, catalogue, and govern* data so a SageMaker training job can read it? Most ML failures are data-engineering failures (broken schemas, partial files, missing partitions, drifted upstream sources, S3 (Simple Storage Service)-class mistakes). This module makes you fluent in the AWS data plane that feeds every ML model in production.

> **Prerequisites for this module.** Module 1 of this course. Helpful background:
> - Comfort with SQL at the level of GROUP BY, JOIN, window functions
> - Familiarity with `pandas.DataFrame` operations
> - Basic understanding of S3 buckets, prefixes, and IAM (Identity and Access Management) policies (CLF-C02 or SAA-C03 is enough)
> - If you've done **04-AWS-Solutions-Architect-Associate Module 05 (S3 Deep Dive)**, you've seen 60% of the storage material here

---

## 🍕 A Story: The Toyota Factory That Could Not Find Its Data

Meet Hideo. He runs ML at a Toyota assembly plant in Aichi, Japan. In 2022 he is asked to build a computer-vision model that flags chassis welds that are likely to fail QC. The CV expertise exists, what does not exist is a clean training pipeline. The training data lives in **five places**:

- Welding-robot logs: streaming **JSON** over UDP (User Datagram Protocol) into an on-prem syslog server
- Camera images: **JPG** files written to a NAS by 12 production cells, named with timestamps and ID-card scans
- QC inspection results: an **MS SQL Server** in the QA team's data closet
- Manufacturing-execution-system events: **Apache Kafka** topic on the plant's OT network
- Shift schedules: **CSV** files emailed weekly by HR

For 18 months, Hideo cannot get a single end-to-end model working, because for every model iteration his data scientist spends *85%* of her time wrangling data. By the time data is joined, schema-validated, deduplicated, and labelled, the underlying manufacturing line has changed and the model is stale before it ever runs.

In 2024 Toyota moves the whole stack to AWS. **Kinesis Data Streams** ingests the welding logs. **AWS Storage Gateway** mirrors the NAS into **S3**. **AWS DMS** continuously replicates the SQL Server into **S3 Parquet** via CDC. **MSK** (managed Kafka) replaces the on-prem Kafka. **AWS DataSync** picks up the HR CSVs. **AWS Glue Crawlers** catalogue every dataset; **Athena** lets the data scientist query everything as joined SQL. **Lake Formation** governs access. The 85%-on-data-wrangling figure drops to **18%**.

That is what this module teaches. The ML model is only as good as the pipeline that feeds it.

---

## 📦 S3 For ML, The Object Store You Will Use Every Day

Amazon S3 is the foundation of every SageMaker workflow. The exam tests **storage classes, lifecycle, encryption, performance tuning, and integration with SageMaker**.

### Storage classes (memorize the trade-off table)

| Class | Use case | Cost/GB-mo (us-east-1, approx) | Retrieval | Min duration | Min size |
|-------|----------|-------------------------------|-----------|--------------|----------|
| **S3 Standard** | Hot training data, frequently re-read | $0.023 | Free, ms | None | None |
| **S3 Intelligent-Tiering** | Unknown / shifting access pattern | $0.023 + small monitor fee | Free, ms | None | None |
| **S3 Standard-IA** | Hot for a week, then quarterly access | $0.0125 | Per-GB retrieval fee | 30 days | 128 KB |
| **S3 One Zone-IA** | Re-creatable data (cached intermediate features) | $0.01 | Per-GB retrieval fee | 30 days | 128 KB |
| **S3 Glacier Instant Retrieval** | Quarterly access, needs ms latency | $0.004 | Per-GB retrieval fee | 90 days | 128 KB |
| **S3 Glacier Flexible Retrieval** | Yearly access, ok with minutes-hours retrieval | $0.0036 | Per-GB + per-request | 90 days | 40 KB |
| **S3 Glacier Deep Archive** | Compliance-mandated 7-year retention | $0.00099 | 12+ hr retrieval | 180 days | 40 KB |

🎯 **Exam pattern.** *"ML team uses last 30 days of features hot; after that, only re-trains quarterly. What is the BEST storage strategy?"* → **S3 Lifecycle rule: Standard for 30 days → Standard-IA after 30 days → Glacier Instant Retrieval after 180 days**. (Intelligent-Tiering is fine too if the team doesn't want to think about it.)

🚨 **Exam trap.** *"Move training data to S3 Glacier Deep Archive to save money."* → **Wrong** if you re-train weekly. The 12-hour retrieval breaks the training cadence. Deep Archive is for long-term compliance, not active ML data.

### S3 performance for ML

| Lever | Why it matters | How |
|-------|----------------|-----|
| **Prefix parallelism** | S3 scales by *prefix*; >3,500 PUT/s and >5,500 GET/s per partitioned prefix | Spread keys across many prefixes (e.g. `s3://bucket/2026/01/01/`) |
| **Multipart upload** | Faster + recoverable for files >100 MB | Boto3 `upload_file` does this automatically; manual via `create_multipart_upload` |
| **S3 Transfer Acceleration** | Up to 5x faster cross-region uploads via CloudFront edge | Enable on bucket; upload to accelerated endpoint |
| **S3 Select / Athena** | Read only the bytes you need from a Parquet file | `SELECT col_a FROM s3object`, saves egress + compute |
| **Mountpoint for S3 (`s3fs`)** | Mount an S3 bucket as a filesystem for training | Use for read-heavy training data; fast random reads |
| **FSx for Lustre with S3 lazy-load** | Sub-millisecond file access for distributed DL training | Link FSx Lustre to S3 → reads pull from S3 on demand |

🎯 **Exam pattern.** *"Distributed deep-learning training on 32 GPUs is bottlenecked on data loading from S3."* → **FSx for Lustre linked to the S3 bucket**. Lustre gives sub-millisecond access; on-demand lazy load means no upfront copy.

### S3 encryption (exam asks about this all the time)

| Encryption type | Key management | When |
|----------------|----------------|------|
| **SSE-S3** | AWS-managed keys (AES (Advanced Encryption Standard)-256) | Default since 2023; simplest |
| **SSE-KMS** | AWS KMS customer-managed key | Audit trail per request via CloudTrail |
| **SSE-C** | Customer-provided key (you send key with request) | Rare; for strict compliance scenarios |
| **DSSE-KMS** | Double encryption (two layers) | Top-secret / FIPS requirements |
| **Client-side encryption** | Encrypt before PUT | Sensitive data; AWS sees ciphertext only |

🚨 **Trap.** *"All S3 PUTs must use a customer-managed KMS key."* → enforce with a **bucket policy** that *denies* PUTs missing `s3:x-amz-server-side-encryption: aws:kms` and `s3:x-amz-server-side-encryption-aws-kms-key-id: <KEY-ARN>`.

---

## 🌊 AWS Glue, The Data Catalogue & ETL Engine

AWS Glue is THE service for cataloguing and transforming ML data. It is on every MLS-C01 exam.

### Glue components

| Component | What it does | Used for |
|-----------|--------------|----------|
| **Glue Data Catalogue** | Hive-compatible metastore, schemas, partitions, tables | Used by Athena, EMR, Redshift Spectrum, SageMaker, Lake Formation |
| **Glue Crawler** | Scans S3 / RDS (Relational Database Service) / Redshift, infers schema, populates the catalogue | First step to expose any new dataset to SQL queries |
| **Glue ETL Job (Spark / Python Shell)** | Serverless Spark or Python jobs for transforms | Cleansing, joining, repartitioning, format conversion |
| **Glue Studio** | Visual ETL job builder (drag-and-drop) | Quick prototyping |
| **Glue DataBrew** | No-code data prep with 250+ transforms | Analyst-friendly EDA + cleansing |
| **Glue Streaming ETL** | Spark Structured Streaming on Kinesis / MSK | Near-real-time transforms |
| **Glue Workflows / Triggers** | Orchestrate crawlers and jobs together | Multi-step pipelines |
| **Glue Schema Registry** | Versioned Avro / Protobuf / JSON Schema | Strict schema enforcement on streams |
| **Glue Data Quality** | Rule-based DQ checks (completeness, uniqueness, ranges) | Quarantine bad data before training |

### Glue Crawler, the workflow

```
S3 bucket with raw files
       ↓
Glue Crawler runs (manual or scheduled)
       ↓
Reads file headers / first 1MB; infers schema, partition keys, data types
       ↓
Creates / updates table in Glue Data Catalogue
       ↓
Athena / SageMaker / Redshift Spectrum can now SELECT FROM it
```

🎯 **Exam pattern.** *"Engineering team adds 1,000 new Parquet files to S3 daily and wants them queryable in Athena automatically."* → **Glue Crawler on a daily schedule** (or partition projection see below to skip the crawler entirely).

🎯 **Optimisation tip:** if your data is well-partitioned (`year=/month=/day=/`), enable **Athena partition projection** in the table properties, no crawler needed; partitions are computed on query.

### Glue ETL, the patterns

```python
# Glue ETL job in PySpark (simplified)
from awsglue.context import GlueContext
from pyspark.context import SparkContext
glue = GlueContext(SparkContext.getOrCreate())

# 1. Read from catalogued table
df = glue.create_dynamic_frame.from_catalog(database="ml_lake", table_name="raw_orders")

# 2. Transform
df = df.drop_fields(["pii_email", "pii_phone"])              # PII drop
df = df.resolveChoice(specs=[("price", "cast:double")])      # type fix
df = df.repartition(8)                                       # control output parts

# 3. Write back as Parquet, partitioned by event date
glue.write_dynamic_frame.from_options(
    frame=df,
    connection_type="s3",
    connection_options={"path": "s3://ml-features/orders/", "partitionKeys": ["event_date"]},
    format="parquet"
)
```

🎯 **Exam pattern.** *"Reduce Glue ETL cost on a daily 50 GB transform."* → use **Python Shell (or G.1X workers)** if data is small; use **bookmarks** so the job processes only new files since the last run; **enable job metrics** in CloudWatch.

🚨 **Trap.** Glue Crawler is **batch**, not streaming. For real-time schema, use **Schema Registry**.

---

## ⚡ Kinesis, Streaming Data For ML

If the question mentions "real time", "near real time", "streaming", "clickstream", "IoT events", or "transactions per second", you are usually in Kinesis territory.

### The Kinesis family

| Service | Purpose | Throughput / scale | Latency |
|---------|---------|--------------------|---------|
| **Kinesis Data Streams (KDS)** | Ordered, replayable stream of records (think: managed Kafka) | 1 MB/s or 1,000 rec/s per shard (provisioned); on-demand scales automatically | ~70 ms |
| **Kinesis Data Firehose** | Fully managed delivery to S3 / Redshift / OpenSearch / Splunk / HTTP (Hypertext Transfer Protocol) | Auto-scales; supports buffering | Minimum 60 s buffer (or 1 MiB) |
| **Kinesis Data Analytics → Managed Service for Apache Flink** | Real-time stream SQL / Flink processing | Auto-scales with parallelism | Sub-second |
| **Kinesis Video Streams** | Stream video / audio for ML | Per-fragment ingest | Sub-second |

🎯 **Decision tree.**
- *"Land streaming data in S3 with no code"* → **Firehose** (built-in batching + compression + format conversion to Parquet)
- *"Need exactly-once, ordered, replayable for an ML feature pipeline"* → **Kinesis Data Streams**
- *"Compute features in real time (windowed averages, joins)"* → **Managed Apache Flink**
- *"Stream camera frames into Rekognition"* → **Kinesis Video Streams**

### Kinesis Data Streams, shard math

```
Per shard:
  - Ingest:  1 MB/s  OR  1,000 records/s
  - Egress:  2 MB/s  per consumer (5 MB/s with Enhanced Fan-Out)

For 5,000 records/sec:
  - Minimum shards = ceil(5000 / 1000) = 5 shards
  - Watch for "hot shard", if 80% of records hash to one partition key, you bottleneck

On-Demand mode (since 2021):
  - AWS auto-scales shards
  - 200 MB/s in, 400 MB/s out
  - Use unless you need precise capacity for cost control
```

🎯 **Exam pattern.** *"Application produces 10,000 records/s but one customer's data dominates 70% of traffic."* → **hot shard**. Fix: better **partition key** (e.g. UUID instead of customer_id), or move to **on-demand**.

### Firehose for ML, the canonical land-zone

```
Producer (clickstream / IoT / Lambda)
       ↓
  Firehose delivery stream
       ↓
  Buffering (60 s OR 5 MiB, whichever first)
       ↓
  Optional Lambda transform (small Python function)
       ↓
  Optional format conversion (JSON → Parquet via Glue table schema)
       ↓
  S3 bucket / Redshift / OpenSearch
```

🎯 **Exam pattern.** *"Land clickstream events as Parquet in S3 with minimal code."* → **Firehose with format conversion enabled** (points at a Glue table for schema, converts JSON to Parquet, partitions by date).

---

## ⚙️ AWS Lambda, Serverless Preprocessing

For lightweight preprocessing or event-driven transforms, Lambda is the workhorse.

### When Lambda is the right answer for ML data

| Scenario | Lambda role |
|----------|-------------|
| New CSV uploaded to S3 → kick off feature extraction | S3 event → Lambda → write features back to S3 |
| Transform records in a Kinesis Firehose stream | Firehose data transformation Lambda (max 6 MB record, 5-min timeout) |
| Resize / re-encode images before they hit a training set | S3 trigger → Lambda → Pillow / OpenCV → write resized to S3 |
| Validate schema and quarantine bad rows | Lambda invoked by Firehose / EventBridge |

🚨 **Limits to remember.** Lambda max **15-minute timeout**, **10 GB memory**, **10 GB ephemeral storage** (`/tmp`). For longer-running or larger jobs use **Glue / EMR / SageMaker Processing**.

---

## 🐘 Amazon EMR, Big-Data ML

When data is genuinely big (TBs+) and Glue Spark is too slow or too expensive, EMR runs Spark, Hive, Hadoop, Presto, Flink, Trino on a cluster you control.

| Topic | Detail |
|-------|--------|
| **EMR cluster types** | EC2 (Elastic Compute Cloud)-backed (most control); EMR on EKS (Elastic Kubernetes Service) (run Spark on existing Kubernetes); EMR Serverless (no cluster mgmt; scales to zero) |
| **Spark MLlib** | Distributed ML algos (logistic regression, random forest, ALS for recommendations, K-Means) on top of Spark |
| **Hive** | SQL on HDFS / S3, old but still common |
| **Presto / Trino** | Interactive SQL on S3 (similar to Athena but self-managed) |
| **Notebooks** | EMR Studio / EMR Notebooks; integrates with SageMaker |

🎯 **Exam pattern.** *"Train a recommendation model on 500 GB of historical interaction data using collaborative filtering."* → **EMR + Spark MLlib ALS**, OR **SageMaker built-in Factorization Machines / Object2Vec**, OR **Amazon Personalize** (managed). The question's "operational overhead" or "team has Spark expertise" keywords decide.

🚨 **Cost trap.** EMR with on-demand m5 instances 24/7 is expensive. Use **Spot for task nodes**, or **EMR Serverless** for spiky workloads.

---

## 🔍 Amazon Athena, Serverless SQL On S3

Athena is the *first* place a data scientist queries data on AWS. Pay per TB scanned. Backed by Glue Data Catalogue.

| Lever | Effect |
|-------|--------|
| **Use Parquet/ORC, not CSV/JSON** | 5-100× less data scanned; lower cost |
| **Partition data** (by date, region, etc.) | Athena only scans relevant partitions |
| **Use partition projection** | No crawler; partitions computed from key naming |
| **Compress files** (Snappy / Gzip) | Smaller scan = cheaper |
| **`SELECT` only needed columns** | Column-store skips unread columns |
| **Use `LIMIT` for exploration** | Reduces scan size |
| **Athena workgroups** | Isolate teams; enforce data-scan limits |
| **CTAS (Create Table As Select)** | Materialise a clean Parquet copy from raw data |
| **Athena Federated Query** | Query DynamoDB / RDS / Redshift / HBase via connectors |

🎯 **Exam pattern.** *"ML team Athena bill is $40K/month, most queries hit one partition."* → Convert raw JSON to **Parquet**, **partition by event_date**, enforce **column selection**, use **workgroup data-scan limits**.

🎯 **Athena vs Redshift Spectrum vs Glue ETL.**
- **Athena** = ad-hoc SQL, serverless, per-TB billing
- **Redshift Spectrum** = same idea but inside a Redshift cluster; better for repeated joins with cluster-resident data
- **Glue ETL** = transform & materialise (write-back); not ad-hoc SELECT

---

## 🏞️ AWS Lake Formation, Data Lake Governance

If the question mentions "**centralised access control**", "**fine-grained column- or row-level permissions**", "**cross-account data sharing**", or "**data lake governance**", the answer is almost certainly Lake Formation.

| Feature | Why ML teams care |
|---------|-------------------|
| **Single permission model** for S3 + Glue Catalogue | Stop juggling 12 bucket policies |
| **Column-level security** | Hide `email`, `ssn` columns from model trainers |
| **Row-level security** | Restrict EU rows to EU analysts |
| **LF-Tags** | Tag tables/columns, grant by tag |
| **Cross-account sharing (LF-RAM)** | Share a table to another AWS account without copying |
| **Centralised audit** | Every access through Lake Formation is logged in CloudTrail |
| **Governed Tables** (preview) | ACID transactions on S3 |

🚨 **Trap.** Native IAM bucket policies *bypass* Lake Formation if both exist. For real governance, route access through Lake Formation grants and let it manage S3 permissions.

---

## 📂 File Formats, The 10-Minute Mastery

The exam will ask "**which format is BEST for ML training on S3?**" Memorise this table.

| Format | Type | Compress? | Columnar? | Splittable? | Schema? | Use case |
|--------|------|-----------|-----------|-------------|---------|----------|
| **CSV** | Text | Optional (gzip) | No | Splittable if uncompressed | None | Human-readable; small data |
| **JSON / JSONL** | Text | Optional | No | JSONL splittable | None (or loose) | API (Application Programming Interface) payloads; semi-structured |
| **Avro** | Binary row | Yes | No | Yes | Yes (schema embedded) | Streaming Kafka; row reads |
| **Parquet** | Binary column | Yes (Snappy default) | **Yes** | Yes | Yes (in footer) | **Default for ML on S3**, fast SQL, small reads |
| **ORC** | Binary column | Yes | Yes | Yes | Yes | Hive ecosystem; similar to Parquet |
| **TFRecord** | Binary | Yes | No | Yes | Protobuf | TensorFlow training pipelines |
| **RecordIO-Protobuf** | Binary | Yes | No | Yes | Protobuf | **SageMaker built-in algos** prefer this for pipe mode |
| **libsvm** | Text sparse | No | No | Yes | None | Sparse classification (legacy) |

🎯 **Exam pattern.** *"Reduce Athena cost and SageMaker training time on a 1 TB tabular dataset."* → **Convert to Parquet** (column store + Snappy compression). Often 10× faster training I/O and 5-10× cheaper Athena scans.

🎯 **Exam pattern.** *"Use SageMaker pipe mode for streaming training data from S3."* → **RecordIO-protobuf** for built-in algorithms is the canonical format.

🚨 **Trap.** Gzip is **not splittable** at the file level, a single 10 GB gzip file = single Spark task. Use Snappy + Parquet, or split before gzipping.

---

## 🔌 Other Movers & Connectors

| Service | What it does | When to use for ML |
|---------|--------------|--------------------|
| **AWS DMS** | Database Migration Service, full + CDC replication | Replicate on-prem SQL / Oracle / Mongo / Postgres into S3 or RDS for training |
| **AWS DataSync** | Online filesystem-to-S3 sync (NFS, SMB, HDFS, etc.) | Move on-prem NAS image archives into S3 |
| **AWS Snowball / Snowball Edge** | Physical device shipped to your DC | Petabyte-scale offline transfer |
| **AWS Storage Gateway (File Gateway)** | NFS / SMB mount that transparently writes to S3 | Hybrid: on-prem apps think they're on NAS; data lands in S3 |
| **Amazon MSK** | Managed Apache Kafka | When the team already speaks Kafka; alternative to Kinesis |
| **Amazon AppFlow** | SaaS (Software as a Service) → AWS connector (Salesforce, Marketo, Slack, etc.) | Pull CRM (Customer Relationship Management) data into S3 for ML training |
| **EventBridge** | Event bus | Trigger Glue jobs / Lambda / SageMaker Pipelines on events |
| **Step Functions** | Serverless workflows | Orchestrate multi-step ETL+ML pipelines |

🎯 **Exam pattern.** *"Migrate 2 PB of on-prem CT scan images to S3."* → **AWS Snowball Edge cluster** (online transfer takes too long; 100 Mbps line = 2+ years).

🎯 **Exam pattern.** *"Replicate on-prem SQL Server's last-modified rows to S3 nightly for ML training."* → **AWS DMS with CDC**, target = S3 in Parquet.

---

## 🧱 Putting It Together, A Reference ML Data Pipeline

This is the architecture you should be able to sketch in 60 seconds.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SOURCES                                              │
│  On-prem DB · SaaS (Salesforce) · IoT · Mobile app · 3rd-party feeds    │
└──────────┬────────────────┬──────────────────┬──────────────────────────┘
           │ (CDC)          │ (events)         │ (files)
           ↓                ↓                  ↓
        AWS DMS         Kinesis KDS         Storage Gateway / DataSync
           │                │                  │
           └──────┬─────────┘                  │
                  ↓                            │
            Kinesis Firehose                   │
            (buffer + Parquet)                 │
                  ↓                            ↓
            ┌────────────────────────────────────────┐
            │            S3 RAW ZONE                 │
            │  s3://lake/raw/source=X/year=…/        │
            └──────────────┬─────────────────────────┘
                           ↓
                  Glue Crawler / Schema Registry
                           ↓
                  Glue ETL (Spark) / DataBrew / Lambda
                           ↓
            ┌────────────────────────────────────────┐
            │       S3 CURATED ZONE (PARQUET)        │
            │  Partitioned, deduplicated, joined     │
            │  Governed by Lake Formation            │
            └──────────────┬─────────────────────────┘
                           ↓
       ┌───────────────────┼──────────────────────────┐
       ↓                   ↓                          ↓
   Athena            SageMaker Feature Store    SageMaker Training Jobs
   (ad-hoc EDA)      (online + offline store)   (XGBoost / DL / etc.)
                           ↓
                    SageMaker Endpoints
                           ↓
                  Predictions back to apps
```

🎯 **Memorise this**: the **Raw Zone → Curated Zone** pattern is the canonical AWS data-lake architecture. The exam will paraphrase it 3-5 times.

---

## 📖 Case Study, Netflix's Maestro Data Platform

**Situation.** Netflix produces ~1 PB of new event data per day from playback events, A/B tests, recommendation logs, and ML feature snapshots. Their ML training stack (for ranking, recommendation, autoencoder-based personalisation) needs every byte to be **queryable, versioned, and reproducible**, a 5-month-old model training run must be re-creatable byte-for-byte.

**Architecture (publicly described in re:Invent 2022 / Netflix Tech Blog).**
- **Ingest:** ~100K events/s into **Apache Kafka** → mirrored to **AWS MSK** for cloud workloads
- **Land in S3:** Custom Flink jobs land events as **Iceberg tables** in S3 (Iceberg ACID + time travel)
- **Catalogue:** Iceberg + Glue Catalogue
- **Process:** **Spark on EMR** for batch features; **Flink on Kinesis Analytics** for streaming features
- **Feature store:** Netflix-built (predates SageMaker Feature Store) but architecturally identical
- **Train:** Custom Trainium-class training clusters + occasional SageMaker
- **Govern:** Centralised IAM + their own ACL layer (Lake Formation in production at smaller customers)

**Outcome.** ~700 ML models in production. Petabyte-scale training reproducible from any historical point. Daily retrains for every personalisation model. Inference QPS in the tens of millions.

**Lesson for the exam.** Netflix's stack uses many AWS-native equivalents you will be tested on: **MSK = Kinesis or Kafka**, **Iceberg = AWS-supported open format on S3**, **EMR = Spark**, **Flink = Kinesis Managed Apache Flink**. Translate Netflix's pieces to MLS-C01 vocabulary and you have your reference data-engineering architecture.

**Discussion (Socratic).**
- Q1. Iceberg gives **ACID transactions** on S3, schema evolution, time travel, partition evolution. What MLS-C01 problem does this solve that plain Parquet does not?
- Q2. Netflix re-trains ranking models *daily*. What is the cost vs accuracy trade-off? At what frequency does drift-driven retraining become wasteful?
- Q3. They built a **proprietary feature store**. Today, SageMaker Feature Store would fit the bill. What features of Feature Store are most valuable, and which Netflix-internal capabilities does it still lack?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Glue Crawler is real-time" | Crawlers are **batch**. For real-time schema use Glue Schema Registry. |
| "Athena partitions are automatic" | Only if you enable **partition projection** OR run a crawler. |
| "Parquet is always better than CSV" | For ML and analytics, yes. For tiny human-readable test fixtures, CSV is fine. |
| "S3 has unlimited request rate per bucket" | Per **prefix**: 3,500 PUT/s and 5,500 GET/s. Spread keys across prefixes. |
| "Firehose delivers in real time" | Minimum **60-second** buffer. For real-time use KDS + Lambda or Flink. |
| "Kinesis Data Streams auto-scales" | Only if you choose **on-demand** mode. Provisioned mode = you manage shards. |
| "DMS can do streaming transforms" | DMS does CDC + light filtering. Real transforms = Glue / Lambda after S3 land. |
| "Lake Formation replaces IAM" | LF adds **on top** of IAM. Both are evaluated; LF doesn't disable IAM. |

---

## 🚨 Top Exam Traps (Module 2 Themes)

1. **"Real-time" with sub-second latency** → Kinesis Data Streams + Flink. Firehose is *near* real-time (>60 s buffer).
2. **"Land streaming data as Parquet in S3 with no code"** → Firehose with format conversion (Glue table schema).
3. **"Optimise Athena cost"** → Parquet, partition, project, compress, column-select.
4. **"Hot shard"** → re-key partition key OR move to on-demand KDS.
5. **"Cross-account data sharing without copying"** → Lake Formation + RAM (Resource Access Manager).
6. **"PB-scale offline data transfer"** → Snowball / Snowball Edge cluster.
7. **"Continuously replicate on-prem DB to S3"** → DMS with CDC.
8. **"Nightly sync of on-prem NFS to S3"** → DataSync (scheduled tasks).
9. **"Catalogue 1,000 new files added daily"** → Glue Crawler on schedule, OR partition projection (skip crawler).
10. **"Distributed DL training bottlenecked on S3 reads"** → FSx for Lustre with S3 lazy load.

---

## 🎓 Key Terms To Know (Add To Anki!)

| Term | Definition |
|------|------------|
| **Object store** | Key-value blob storage (S3), not a filesystem |
| **Lifecycle policy** | S3 rule that auto-transitions objects between classes / expires them |
| **Data catalogue** | Metadata store mapping table names to S3 locations + schemas (Glue) |
| **Crawler** | Process that scans data and populates the catalogue |
| **ETL** | Extract, Transform, Load |
| **ELT** | Extract, Load, Transform, modern data-lake pattern (load raw → transform in place) |
| **CDC** | Change Data Capture, stream only the rows that changed |
| **Partition projection** | Athena feature that computes partitions from key names without crawler |
| **Columnar format** | File format where each column is stored together (Parquet, ORC) |
| **Splittable file** | File a distributed reader can chunk in parallel |
| **Shard** | Kinesis unit of throughput (1 MB/s ingest) |
| **Hot shard** | One shard receiving disproportionate traffic; bottleneck |
| **Schema Registry** | Versioned schema store (Avro / Protobuf / JSON Schema) |
| **Feature store** | Centralised online + offline store of ML features |
| **Raw zone** | Untransformed source data |
| **Curated zone** | Cleaned, conformed, query-ready data |
| **Lake Formation** | Centralised data-lake permissions and governance |
| **DataSync** | Online file-sync from on-prem to AWS |
| **Snowball** | Physical device for petabyte-scale transfer |

---

## 💬 Discussion, Socratic Prompts (15 min reflection)

1. **The cost of pretty data.** A common pattern is to land raw JSON, then transform to Parquet, then aggregate into features. Each hop costs storage AND compute. For a 50-engineer ML team, where would you draw the line between raw retention (forever?) vs aggressive curation?
2. **Glue vs EMR, when do you graduate?** Glue is serverless and easy; EMR gives more control. Argue both sides for a team that currently runs 12 Glue jobs costing $8K/month.
3. **The Lake Formation adoption tax.** LF is technically correct for governance, but requires every team to migrate from IAM-based to LF-based grants. At what organisation size does LF stop being optional?
4. **Streaming vs batch for ML features.** Capital One needs sub-100ms feature lookups for fraud, so a Feature Store is mandatory. A B2B (Business-to-Business) SaaS retraining nightly might be fine with batch CSV. What is the trade-off, and how do you decide?
5. **The "schema-on-read" gamble.** S3 + Glue Crawler is "schema-on-read", you can land anything and figure out structure later. The alternative is "schema-on-write" (enforce schema at ingest with Schema Registry). When does laziness backfire?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 03 (EDA / Feature Engineering) uses everything in this module, clean curated S3 data, queried via Athena or pulled into Data Wrangler.
> - **Cross-course:** `04-AWS-Solutions-Architect-Associate` Module 5 (S3) and Module 7 (Decoupling / Kinesis) are essentially the SAA version of this material, same services, less ML focus.
> - **Practice:** Practice Exam 1 has 6 questions, Practice Exam 2 has 4 questions, and the Final Mock Exam has 9 questions directly drawn from this module's material.
> - **Real world:** Build a tiny pipeline in your own AWS account: drop a CSV in S3 → Glue Crawler → query in Athena → SageMaker Data Wrangler. Free Tier covers most of it.

---

## ✅ Module 2 Summary

You now know:

- 📦 **S3 storage classes**, **lifecycle**, **encryption**, and **performance levers** for ML data
- 🌊 **Glue Crawler / Catalogue / ETL / DataBrew / Schema Registry / Data Quality** roles
- ⚡ **Kinesis Data Streams / Firehose / Managed Flink / Video Streams** decision criteria
- ⚙️ **Lambda** for serverless preprocessing within its 15-minute / 10 GB limits
- 🐘 **EMR vs Glue vs Athena** for big-data SQL and Spark workloads
- 🏞️ **Lake Formation** for centralised data-lake governance
- 📂 **File-format trade-offs** (Parquet wins for ML; RecordIO-protobuf for SageMaker pipe mode)
- 🔌 **DMS / DataSync / Snowball / Storage Gateway / AppFlow** for getting external data in
- 🧱 **The Raw Zone → Curated Zone reference architecture** you will see on every exam

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md) (target: 20/24)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 3: EDA & Feature Engineering](../Module-03-EDA-Feature-Engineering/Reading.md)

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **AWS Glue Developer Guide**, `docs.aws.amazon.com/glue/`
- 📖 **Amazon Kinesis docs**, `docs.aws.amazon.com/kinesis/`
- 📖 **Amazon S3 Best Practices**, `docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html`
- 📖 **AWS Big Data Blog**, `aws.amazon.com/blogs/big-data/`
- 📖 **AWS Lake Formation User Guide**, `docs.aws.amazon.com/lake-formation/`

**re:Invent talks**
- 🎤 ANT337, *Best practices for building data lakes on AWS*
- 🎤 ANT309, *Real-time data processing with Kinesis*
- 🎤 AIM319, *Capital One real-time fraud detection on SageMaker* (data side)

**Textbooks**
- 📖 **Kleppmann, Martin (2017).** *Designing Data-Intensive Applications.* O'Reilly, chapters 3 (storage engines), 10 (batch), 11 (streaming) are the academic spine
- 📖 **Reis & Housley (2022).** *Fundamentals of Data Engineering.* O'Reilly, modern DE canon
- 📖 **Inmon, Strauss, Neushloss (2008).** *DW 2.0: The Architecture for the Next Generation of Data Warehousing.* Morgan Kaufmann, historical context for the lake-vs-warehouse debate

**Industry**
- 📰 **Netflix Tech Blog**, *Maestro*, *Iceberg*, *Genie* posts
- 📰 **Airbnb Engineering Blog**, *Building Airflow*, *Minerva* metrics platform
- 📰 **Maxime Beauchemin's blog**, Airflow creator's essays on data engineering

---

## 🛠️ Appendix A, A Working Athena + Parquet Setup For ML

```sql
-- 1. Create a Parquet, partitioned, projected table over your curated zone
CREATE EXTERNAL TABLE IF NOT EXISTS ml_curated.orders (
    order_id      string,
    customer_id   string,
    order_total   double,
    item_count    int,
    order_country string
)
PARTITIONED BY (year int, month int, day int)
STORED AS PARQUET
LOCATION 's3://ml-curated/orders/'
TBLPROPERTIES (
    -- Skip the crawler with partition projection
    'projection.enabled'='true',
    'projection.year.type'='integer',
    'projection.year.range'='2023,2030',
    'projection.month.type'='integer',
    'projection.month.range'='1,12',
    'projection.month.digits'='2',
    'projection.day.type'='integer',
    'projection.day.range'='1,31',
    'projection.day.digits'='2',
    'storage.location.template'='s3://ml-curated/orders/year=${year}/month=${month}/day=${day}/',
    'parquet.compression'='SNAPPY'
);

-- 2. Athena query - cost-efficient: column selection + partition filter
SELECT
    customer_id,
    SUM(order_total) AS lifetime_value
FROM ml_curated.orders
WHERE year = 2026 AND month BETWEEN 1 AND 5
GROUP BY customer_id
ORDER BY lifetime_value DESC
LIMIT 100;
```

🎯 **Exam patterns.** Recognise the four cost levers in one query:

- `STORED AS PARQUET` + `parquet.compression='SNAPPY'` (column store + compression)
- `PARTITIONED BY` (partition pruning)
- `projection.enabled='true'` (no crawler latency)
- `WHERE year = ... AND month BETWEEN ...` (only relevant partitions scanned)
- `SELECT customer_id, SUM(...)` (column projection, only the needed columns read)

---

## 🛠️ Appendix B, Glue Job Bookmarks Sketch

```python
# Inside a Glue ETL job, process only new files since last run
import sys
from awsglue.utils import getResolvedOptions
from awsglue.context import GlueContext
from pyspark.context import SparkContext
from awsglue.job import Job

args = getResolvedOptions(sys.argv, ["JOB_NAME"])
glueContext = GlueContext(SparkContext.getOrCreate())
job = Job(glueContext)
job.init(args["JOB_NAME"], args)

# Reads ONLY new files since last successful run
df = glueContext.create_dynamic_frame.from_catalog(
    database="ml_lake",
    table_name="raw_orders",
    transformation_ctx="raw_orders_source",   # MUST be unique per source
)

# Transform...
df = df.drop_fields(["pii_email"])

# Write back to S3
glueContext.write_dynamic_frame.from_options(
    frame=df,
    connection_type="s3",
    connection_options={
        "path": "s3://ml-curated/orders/",
        "partitionKeys": ["year", "month", "day"],
    },
    format="parquet",
    transformation_ctx="orders_sink",
)

job.commit()   # advances the bookmark
```

🎯 **Exam pattern.** `transformation_ctx` + `job.commit()` is the bookmark mechanism. Enable bookmarks in the Glue job properties to activate.

---

## 🛠️ Appendix C Kinesis Firehose To Parquet IaC (Infrastructure as Code) Snippet

```yaml
# CloudFormation (excerpt)
ClickstreamFirehose:
  Type: AWS::KinesisFirehose::DeliveryStream
  Properties:
    DeliveryStreamName: clickstream-to-parquet
    DeliveryStreamType: DirectPut
    ExtendedS3DestinationConfiguration:
      BucketARN: !Sub arn:aws:s3:::${LakeBucket}
      Prefix: "raw/clickstream/year=!{timestamp:yyyy}/month=!{timestamp:MM}/day=!{timestamp:dd}/"
      ErrorOutputPrefix: "error/clickstream/!{firehose:error-output-type}/"
      BufferingHints: { SizeInMBs: 64, IntervalInSeconds: 60 }
      CompressionFormat: UNCOMPRESSED   # required when format conversion is enabled
      DataFormatConversionConfiguration:
        Enabled: true
        InputFormatConfiguration:
          Deserializer:
            OpenXJsonSerDe: {}
        OutputFormatConfiguration:
          Serializer:
            ParquetSerDe:
              Compression: SNAPPY
        SchemaConfiguration:
          DatabaseName: ml_lake
          TableName: clickstream
          RoleARN: !GetAtt FirehoseRole.Arn
          Region: !Ref AWS::Region
      RoleARN: !GetAtt FirehoseRole.Arn
      EncryptionConfiguration:
        KMSEncryptionConfig:
          AWSKMSKeyARN: !GetAtt CMK.Arn
```

🎯 **Exam patterns.**
- `DataFormatConversionConfiguration` is the JSON→Parquet feature
- `SchemaConfiguration` points at a Glue table, that's how Firehose knows the Parquet schema
- `BufferingHints` minimum is 60 seconds, Firehose is *near* real-time, never sub-second
- `KMSEncryptionConfig` keeps the landed Parquet KMS-encrypted automatically
