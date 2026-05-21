# Module 5: Databases 🗄️

> **Why this module matters:** AWS has 15+ database services. The exam doesn't expect you to query any of them — it expects you to pick the right one. This module gives you the matching game: "user profile" → DynamoDB; "OLAP warehouse" → Redshift; "graph of friend-of-friend" → Neptune.

---

## 📒 A Story: Maria's Data Problem

Maria's pizza empire generates 4 very different kinds of data:

1. **The order log** — relational: customers, orders, items, payments. ACID required (you can't half-charge a credit card).
   → That's **RDS** (or **Aurora**).
2. **The active cart of every customer browsing the menu right now** — needs millisecond reads, billions of small items, schema changes weekly.
   → That's **DynamoDB**.
3. **Sub-millisecond menu lookups** (avoid hitting the DB every time the home page loads).
   → That's **ElastiCache**.
4. **"Which customers in Chicago who bought pepperoni in Q1 also bought sodas in Q2?"** — analytical, scans billions of rows.
   → That's **Redshift**.

Each tool has a job. CLF-C02 expects you to *match scenarios to services*. Let's build that mental matching engine.

---

## 🗄️ The 4 Database Categories (Mental Model)

```
   RELATIONAL                NoSQL              IN-MEMORY            ANALYTICAL
   (SQL, ACID)          (Schema-flex)        (Sub-ms cache)         (OLAP scans)
   ───────────          ──────────────        ──────────────         ──────────────
   RDS, Aurora          DynamoDB, DocumentDB  ElastiCache            Redshift
                        Neptune (graph)                              (also: Athena over S3)
                        Keyspaces (Cassandra)
                        Timestream (time-series)
                        QLDB (ledger)
```

---

## 🐘 Amazon RDS — Managed Relational Databases

**RDS = AWS runs the SQL database for you.** You pick the engine and instance class; AWS handles patching, backups, replication.

### Supported engines

- **Amazon Aurora** (MySQL- or PostgreSQL-compatible, AWS's premium offering)
- **MySQL**
- **PostgreSQL**
- **MariaDB**
- **Oracle** (BYOL or License Included)
- **Microsoft SQL Server**

### Two key HA / scaling features (HIGH-FREQUENCY EXAM TOPIC)

| Feature | What it does | When |
|---------|--------------|------|
| **Multi-AZ Deployment** | Synchronous standby in a DIFFERENT AZ; auto-failover on failure | High Availability / DR |
| **Read Replicas** | Async copies you can read from to offload read traffic | Read scaling, reporting |

🔥 **MEMORIZE the distinction:**
- **Multi-AZ = HA** (standby is invisible; you keep using the same endpoint)
- **Read Replicas = Read Scaling** (you connect to them directly for reads)

You can combine both: Multi-AZ for HA + Read Replicas for scaling reads.

### Backups
- **Automated backups** (point-in-time recovery, default retention 7 days, max 35)
- **Manual snapshots** (kept until you delete them)

---

## 🌟 Amazon Aurora — RDS On Steroids

**Aurora = AWS-built relational database, MySQL or PostgreSQL compatible.** Better than vanilla RDS in basically every way:

- **5x throughput of MySQL, 3x of PostgreSQL** (per AWS marketing)
- **Storage auto-scales** up to 128 TB
- **6 copies of data across 3 AZs** automatically
- Up to **15 read replicas** with sub-10ms replication lag
- **Aurora Serverless** — pay per second, auto-scales for unpredictable workloads
- **Aurora Global Database** — cross-Region replication with <1 sec lag

🎯 **Exam pattern:**
- "MySQL/PostgreSQL with cloud-native HA and high performance" → **Aurora**
- "Standard MySQL with familiar features and lowest learning curve" → **RDS for MySQL**
- "Unpredictable / spiky relational workload" → **Aurora Serverless**

---

## 📋 Amazon DynamoDB — Managed NoSQL

**DynamoDB = serverless, key-value + document NoSQL database.** Single-digit millisecond latency at any scale.

### Headline facts
- Fully managed, serverless (no instances to pick)
- **Two capacity modes:** On-Demand (pay per request) or Provisioned (set RCU/WCU)
- **Multi-region replication** via **Global Tables**
- **DAX (DynamoDB Accelerator)** — in-memory cache for microsecond reads
- Backups, point-in-time recovery (PITR) up to 35 days
- Encrypted at rest by default

### Common patterns
- User profiles, shopping carts, session state
- IoT telemetry
- Gaming leaderboards
- Anything where you need "this key → get this value, fast, forever"

🎯 **Exam pattern:**
- "Serverless, millisecond NoSQL at any scale" → **DynamoDB**
- "Multi-region, multi-active table" → **DynamoDB Global Tables**
- "Microsecond reads from DynamoDB" → **DAX**

---

## ⚡ Amazon ElastiCache — In-Memory Cache

**ElastiCache = managed Redis or Memcached.** Sub-millisecond reads from RAM.

| Engine | Notes |
|--------|-------|
| **Redis** | Rich data structures, persistence, pub/sub, replication, cluster mode |
| **Memcached** | Simple key/value, multi-threaded, no persistence, no replication |

Use cases: session store, leaderboards, page caching, real-time analytics counters.

🎯 **Exam shortcut:**
- "Sub-millisecond cache in front of RDS" → **ElastiCache**
- "Simple cache, no persistence needed" → **Memcached**
- "Cache with persistence + replication" → **Redis**

---

## 🏭 Amazon Redshift — Data Warehouse (OLAP)

**Redshift = petabyte-scale analytical (OLAP) data warehouse.** Columnar storage, massive parallel processing (MPP). NOT for transactional workloads.

- Standard provisioning (you pick nodes) OR **Redshift Serverless**
- **Redshift Spectrum** — query data in S3 directly (no load needed)
- **AQUA** — hardware-accelerated cache for blazing-fast aggregations
- Integrates with BI tools (QuickSight, Tableau, Power BI)

🎯 **Exam pattern:** "Analytical queries over billions of rows for BI" → **Redshift.** Not RDS, not DynamoDB.

---

## 📄 Amazon DocumentDB — MongoDB-Compatible

**DocumentDB = managed JSON document database, API-compatible with MongoDB.**

Use when:
- You have a MongoDB workload and want to escape self-management
- You need flexible JSON document schemas
- Scale per cluster, not serverless

🎯 **Exam pattern:** "Managed MongoDB-compatible database" → **DocumentDB.**

---

## 🕸️ Amazon Neptune — Graph Database

**Neptune = fully managed graph database** for relationships: social networks, fraud detection, recommendation engines, knowledge graphs.

Supports **Gremlin**, **SPARQL**, **openCypher** query languages.

🎯 **Exam pattern:** "Friend-of-friend / relationship queries" → **Neptune.**

---

## 📊 More Specialized Databases (Lighter exam coverage, but know names)

| Service | Use case |
|---------|----------|
| **Amazon Keyspaces** | Managed Cassandra-compatible (wide-column) |
| **Amazon Timestream** | Time-series data (IoT, app metrics) |
| **Amazon QLDB** | Immutable, cryptographically verifiable ledger (audit trails, supply chain) |
| **Amazon MemoryDB for Redis** | Redis-compatible primary database (durable, not just cache) |
| **AWS Athena** | Serverless SQL queries against S3 — not a DB, but database-like |

---

## 🚛 Amazon DMS — Database Migration Service

**DMS = move databases TO AWS (or between cloud DBs) with minimal downtime.**

- **Homogeneous migration** (Oracle → Oracle) — straight copy
- **Heterogeneous migration** (Oracle → Aurora PostgreSQL) — combined with **AWS Schema Conversion Tool (SCT)**
- Continuous replication keeps source and target in sync while you cut over

🎯 **Exam pattern:** "Migrate on-prem Oracle to Aurora with minimal downtime" → **DMS + SCT.**

---

## 🆚 The Decision Table (memorize this!)

| Scenario | Service |
|----------|---------|
| Traditional SQL DB with HA | **RDS Multi-AZ** |
| MySQL/PostgreSQL with cloud-native scaling | **Aurora** |
| Spiky / unpredictable relational workload | **Aurora Serverless** |
| Single-digit-ms key-value lookups, any scale | **DynamoDB** |
| Multi-region NoSQL table | **DynamoDB Global Tables** |
| In-memory cache layer | **ElastiCache (Redis/Memcached)** |
| Petabyte OLAP analytics | **Redshift** |
| Document store (MongoDB-compatible) | **DocumentDB** |
| Graph / relationships | **Neptune** |
| Time-series (IoT metrics) | **Timestream** |
| Immutable audit ledger | **QLDB** |
| Cassandra-compatible NoSQL | **Keyspaces** |
| Query data IN S3 with SQL (no load) | **Athena** (or Redshift Spectrum) |
| Migrate DBs to AWS | **DMS** (+ SCT for cross-engine) |

---

## 🚨 Exam Traps

1. **Multi-AZ ≠ Read Replica.** Multi-AZ is sync standby for HA; you don't query the standby. Read Replicas are async and you DO query them.
2. **DynamoDB is NOT relational.** Don't pick it for joins or complex queries.
3. **Redshift is OLAP, not OLTP.** Don't use it for high-frequency single-row writes.
4. **Aurora is MySQL or PostgreSQL compatible** — NOT Oracle or SQL Server compatible.
5. **DAX is for DynamoDB only.** ElastiCache is for everything else.
6. **DocumentDB ≠ DynamoDB.** DocumentDB = MongoDB-compatible. DynamoDB = AWS-native key-value/document.
7. **Aurora Global Database** is for cross-region; **Aurora Serverless** is for spiky workloads. Don't confuse them.
8. **RDS does NOT support all engines for Multi-AZ in all variants** — but assume Multi-AZ is available for the main engines.
9. **Backups are NOT free** — they consume S3 storage you pay for past a free allotment.
10. **QLDB ≠ Blockchain.** QLDB is a centralized, immutable ledger. Amazon Managed Blockchain is the decentralized one.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "DynamoDB requires capacity planning" | On-Demand mode = no planning, pay-per-request |
| "Multi-AZ doubles throughput" | No — Multi-AZ is for HA. Read Replicas scale reads. |
| "Aurora is its own SQL engine" | It's MySQL OR PostgreSQL compatible (you pick) |
| "All NoSQL is the same" | Key-value (DynamoDB), Document (DocumentDB), Graph (Neptune), Time-series (Timestream) — very different! |
| "Athena is a database" | It's a serverless SQL query engine over S3 — no DB to manage |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **RDS** | Managed relational DB service (MySQL, PG, MariaDB, Oracle, SQL Server, Aurora) |
| **Aurora** | AWS's premium MySQL/PG-compatible engine; 6 copies across 3 AZs |
| **Multi-AZ** | Synchronous standby for HA / auto-failover |
| **Read Replica** | Async copy you can read from to offload reads |
| **DynamoDB** | Serverless key-value/document NoSQL, single-digit ms |
| **DAX** | In-memory accelerator for DynamoDB (microseconds) |
| **Global Tables** | DynamoDB multi-region active-active replication |
| **ElastiCache** | Managed Redis or Memcached |
| **Redshift** | Petabyte OLAP data warehouse |
| **Spectrum** | Redshift feature to query S3 in-place |
| **DocumentDB** | Managed MongoDB-compatible document DB |
| **Neptune** | Managed graph DB (Gremlin/SPARQL/openCypher) |
| **Keyspaces** | Managed Cassandra-compatible (wide-column) |
| **Timestream** | Managed time-series DB |
| **QLDB** | Immutable, cryptographically verifiable ledger DB |
| **MemoryDB** | Redis-compatible *durable* in-memory DB |
| **Athena** | Serverless SQL over S3 |
| **DMS** | Database Migration Service |
| **SCT** | Schema Conversion Tool (cross-engine) |
| **OLTP / OLAP** | Online Transaction Processing vs Analytical Processing |

---

## ✅ Module 5 Summary

You now know:
- 🗄️ 4 database categories: Relational, NoSQL, In-memory, Analytical
- 🐘 RDS = managed SQL; Multi-AZ for HA; Read Replicas for read scaling
- 🌟 Aurora = MySQL/PG-compatible, 5x faster, auto-scaling storage, Serverless option, Global Database
- 📋 DynamoDB = serverless key-value NoSQL; DAX for microsecond; Global Tables for multi-region
- ⚡ ElastiCache = Redis or Memcached for sub-ms cache
- 🏭 Redshift = OLAP warehouse; Spectrum for S3
- 📄 DocumentDB = MongoDB-compatible; Neptune = graph; Timestream = time-series; QLDB = ledger
- 🚛 DMS migrates DBs to AWS; SCT for cross-engine schema conversion

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 6: Security, Identity & Compliance](../Module-06-Security-Identity-Compliance/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Choose the right database](https://aws.amazon.com/products/databases/)
- 📖 [Aurora overview](https://aws.amazon.com/rds/aurora/)
- 📖 [DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- 📖 [Redshift FAQs](https://aws.amazon.com/redshift/faqs/)
- 📖 [AWS DMS](https://aws.amazon.com/dms/)
