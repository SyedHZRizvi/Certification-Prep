# Module 6: Databases on AWS 🗃️

> **Why this module matters:** Picking the right database is the most common SAA scenario question. RDS Multi-AZ vs Read Replicas, when to choose Aurora vs DynamoDB, ElastiCache Redis vs Memcached, each pair is asked over and over. Get them straight and you'll bank 8–12 questions.

> **Prerequisites for this module.**
> - [Module 1](../Module-01-Foundations-Well-Architected/Reading.md), Region/AZ, Reliability pillar
> - [Module 2](../Module-02-IAM-Organizations/Reading.md), IAM auth on RDS, Secrets Manager
> - [Module 4](../Module-04-VPC-Deep-Dive/Reading.md), databases live in private subnets
> - Familiarity with relational (SQL) and non-relational (NoSQL) data models, *Designing Data-Intensive Applications* (Kleppmann 2017) chapters 1–3 is the canonical reference
> - Understanding of OLTP vs OLAP at a conceptual level

---

## 🍔 A Story: The Restaurant That Outgrew Its Notebook

Maya opens a deli with one notebook for orders. As she grows:

- She makes copies of the notebook so cashiers can write in parallel, that's **read replicas**.
- She copies one notebook into a safety-deposit box across town, that's **Multi-AZ standby**.
- She switches from paper to a Rolodex when orders explode, that's **DynamoDB** (key-value lookup, scales to anything).
- She caches the "lunch special of the day" on a sticky note at the register, that's **ElastiCache**.
- She compiles end-of-year analytics from all 50 stores, that's **Redshift**.
- She maps which customers know which other customers (referral graph), that's **Neptune** (graph DB).

Different jobs, different databases. AWS gives you ~10 to pick from. The exam tests whether you pick the right one.

---

## 📜 Theoretical Foundations Of AWS Databases

Every database service on AWS implements decades-old academic theory. The SAA exam doesn't ask you to cite the papers, but knowing them makes the trade-offs feel obvious:

- **CAP theorem** (Brewer, ACM PODC 2000; formalized by Gilbert & Lynch in *ACM SIGACT News* 2002). You can have any two of Consistency, Availability, and Partition tolerance. **RDS Multi-AZ** chooses C+A and assumes no partition (synchronous replication within a region). **DynamoDB Global Tables** chooses A+P (multi-active, eventually consistent). The exam quizzes this distinction in every question that mentions "active-active multi-region."
- **PACELC theorem** (Abadi, *IEEE Computer*, 2012). An extension that says: even when no partition, you choose between Latency and Consistency. **DynamoDB strong reads** pay 2× the RCUs *because* of PACELC.
- **Paxos and Raft consensus** (Lamport, *ACM TOCS* 1998, *The Part-Time Parliament*; Ongaro & Ousterhout, USENIX ATC 2014, *In Search of an Understandable Consensus Algorithm*). The Aurora storage layer, RDS Multi-AZ failover, and DynamoDB's distributed transactions all rest on consensus algorithms. Aurora specifically uses a 4-of-6 quorum write protocol described in Verbitski et al., *SIGMOD 2017*, "Amazon Aurora: Design considerations for high throughput cloud-native relational databases."
- **The Dynamo paper** (DeCandia et al., ACM SOSP 2007, *"Dynamo: Amazon's Highly Available Key-value Store"*) is the direct ancestor of DynamoDB and is required reading for anyone designing key-value workloads.
- **The Bigtable paper** (Chang et al., ACM OSDI 2006) influenced both DynamoDB's table model and Cassandra (which AWS now offers as **Keyspaces**).

You're being tested on the *application* of these ideas, but you'll find the right answer faster if you've spent 15 minutes with each paper.

---

## 🗂️ The AWS Database Lineup (Know All Of These)

| Service | Type | Best for |
|---------|------|----------|
| **RDS** (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server) | Relational, single-engine | Lift-and-shift OLTP apps |
| **Aurora** (MySQL- and Postgres-compatible) | Relational, cloud-native | High-throughput OLTP, global, serverless |
| **DynamoDB** | NoSQL key-value & document | Massive scale, ms latency, serverless apps |
| **ElastiCache** (Redis, Memcached) | In-memory cache | Sub-ms reads, session store, leaderboards |
| **Redshift** | Columnar data warehouse | Analytics over TBs–PBs |
| **DocumentDB** | MongoDB-compatible | Existing Mongo workloads at scale |
| **Neptune** | Graph database | Social graphs, fraud detection, KGs |
| **Keyspaces** | Apache Cassandra-compatible | Cassandra workloads, serverless |
| **Timestream** | Time-series | IoT, metrics, logs |
| **QLDB** | Ledger (immutable, cryptographically verifiable) | Financial audit, supply chain |

---

## 🛢️ RDS, The Workhorse Relational DB

RDS is **managed** OS + DB engine. AWS does backups, patches, minor version upgrades.

### Multi-AZ vs Read Replicas, MEMORIZE this distinction

| | Multi-AZ | Read Replicas |
|---|----------|----------------|
| Purpose | **High Availability** | **Read scaling** |
| Sync mode | **Synchronous** replication to standby | **Asynchronous** replication (small lag) |
| Endpoint | One, automatically fails over | Each replica has its own read endpoint |
| Region | Same region only (for RDS; Aurora can be Global) | Same OR different region |
| Failover | Automatic on standby (60–120 sec) | Manual promotion to standalone DB |
| Reads from standby? | **NO** (standby is invisible) | Yes, reads only |
| Cost | ~2× primary | Per-replica |

🎯 **Exam pattern:**
- "Survive an AZ failure with auto failover" → **Multi-AZ**
- "Scale read-heavy reporting" → **Read Replicas**
- "Both?" → Multi-AZ + Read Replicas (combine them)

### RDS Multi-AZ Cluster (newer option)

Also called "Multi-AZ DB Cluster", uses 2 readable standbys (instead of 1 invisible one). MySQL/PostgreSQL only. Faster failover (~35 sec) and standbys serve reads.

### RDS Storage Auto Scaling
Automatically grow storage when you hit 90% (no downtime).

### RDS Backups
- **Automated backups**, daily snapshot + transaction logs, retain 1–35 days
- **Manual snapshots**, retained until you delete them
- Snapshots are stored in S3 (managed by AWS), can be copied cross-region

🎯 **Exam pattern:** "RDS disaster recovery to another region" → Cross-region **snapshot copy** (or use Aurora Global Database for hot DR).

### RDS Proxy
Sits between app and RDS. Pools connections, multiplexes, IAM-authenticates, handles failover faster. Great for Lambda apps that open many short connections.

### RDS Performance Insights
Dashboard for top SQL, wait events, instance load. Free for first 7 days of retention.

### Encryption
- Encryption at rest must be set at creation time (uses KMS).
- To encrypt an unencrypted instance: snapshot → copy encrypted → restore.

---

## 🌿 Aurora, Cloud-Native Relational

Aurora is AWS's redesign of MySQL/Postgres for the cloud. Key facts:

- Storage layer is **distributed across 3 AZs, 6 copies of data** (2 per AZ).
- Automatically heals 30 GB blocks of disk loss.
- Up to **15 Aurora Read Replicas** with low replica lag.
- **Aurora Global Database**, primary region + up to 5 secondary regions with <1s replication.
- **Aurora Serverless v2**, auto-scales capacity in fine-grained ACUs.
- **Aurora Backtrack** (MySQL), rewind the DB to a point in time without restore.
- **Aurora Machine Learning** integration with SageMaker/Comprehend.

🎯 **Exam pattern:**
- "Global app with cross-region failover under 1 min" → **Aurora Global Database**
- "Spiky workload, want pay-per-use relational" → **Aurora Serverless v2**
- "Mid-day need to undo last hour's data corruption" → **Aurora Backtrack**

### Aurora vs RDS, when each?

| Need | Pick |
|------|------|
| Existing app on Oracle/SQL Server | RDS (Aurora has no Oracle/SQLServer mode) |
| Existing MySQL/Postgres but want max perf | Aurora |
| Cheap, simple | RDS |
| Up to 15 replicas | Aurora |
| Global multi-region | Aurora Global |
| Per-second pricing for spiky workloads | Aurora Serverless v2 |

---

## ⚡ DynamoDB, Serverless NoSQL

DynamoDB is AWS's flagship NoSQL: key-value + document store, single-digit ms latency at any scale.

| Feature | Detail |
|---------|--------|
| Data model | Tables → items (rows) → attributes (cols). Each item has a partition key (+ optional sort key). |
| Indexes | **Local Secondary Index (LSI)** = same partition key, different sort key. **Global Secondary Index (GSI)** = different partition+sort. |
| Capacity modes | **Provisioned** (RCU/WCU) or **On-Demand** (auto-scale, pay-per-request) |
| Consistency | Eventually consistent by default; strong reads available (2× RCUs) |
| Backup | Continuous **PITR** (point-in-time recovery) up to 35 days |
| Streams | Change-data-capture stream of inserts/updates/deletes (24-hr retention) |
| TTL | Auto-delete expired items |
| Encryption | Always on (AWS-managed KMS by default) |

### DAX, DynamoDB Accelerator
In-memory cache **in front of** DynamoDB. Microsecond reads for cached items. Lives in a VPC. Read-through, write-through.

🎯 **Exam pattern:** "Sub-millisecond DynamoDB reads for a hot key" → **DAX**.

### Global Tables
Multi-region, multi-active replication. Writes in any region replicate to others (eventually consistent). Up to single-digit-second cross-region lag.

🎯 **Exam pattern:** "Single-digit ms reads/writes globally for a serverless app" → **DynamoDB Global Tables**.

### When is DynamoDB the answer?

- Massive scale (any throughput)
- Key-based access (no complex joins)
- Predictable single-digit ms latency
- Serverless, auto-scaling, pay-per-request available
- IoT, gaming leaderboards, session stores, e-commerce carts, real-time bidding

### When is DynamoDB the WRONG answer?

- Complex multi-table joins → use RDS/Aurora
- Full-text search → use OpenSearch
- Analytics over years of data → use Redshift
- Graph relationships → Neptune

---

## 🔥 ElastiCache, In-Memory Cache

Two engines:

| Engine | Strengths | Weaknesses |
|--------|-----------|------------|
| **Redis** | Rich data types (sorted sets, lists, geospatial), pub/sub, replication, persistence, Multi-AZ failover, transactions | Single-threaded per shard |
| **Memcached** | Multi-threaded, simple, easy horizontal sharding | No persistence, no replication, no Multi-AZ |

🎯 **Exam pattern (the classic):**
- "Need persistence and failover" → **Redis**
- "Simple distributed cache, no persistence needed, multi-threaded" → **Memcached**
- "Leaderboard with sorted set" → Redis (only it has sorted sets)
- "Session store with failover" → Redis

### Use cases
- Cache RDS/Aurora query results
- Session store (web tier)
- Leaderboards, real-time analytics
- Rate limiting counters

🎯 **Exam pattern:** "Reduce load on RDS by caching hot reads" → ElastiCache (Redis if persistence/HA needed).

---

## 📊 Redshift, Petabyte Data Warehouse

Columnar storage, MPP (massively parallel processing). For **OLAP / analytics**, not OLTP.

| Feature | Detail |
|---------|--------|
| Distribution styles | KEY, EVEN, ALL, AUTO |
| Sort keys | Compound or interleaved |
| Concurrency Scaling | Auto-adds capacity for read spikes |
| Redshift Spectrum | Query S3 data directly (data lake) |
| Federated Query | Query RDS/Aurora from Redshift |
| Materialized views | Pre-aggregated for performance |
| Serverless | Auto-scale capacity |

🎯 **Exam pattern:**
- "Analytics on 10 TB sales history" → **Redshift**
- "Query data already in S3 without loading" → **Redshift Spectrum** (or Athena if no warehouse)
- "Data warehouse but pay-per-query" → **Redshift Serverless**

---

## 🌐 Specialty Databases

| Service | When |
|---------|------|
| **DocumentDB** | Existing MongoDB workload migrating to AWS |
| **Neptune** | Graph queries (Gremlin, openCypher, SPARQL), social, fraud rings |
| **Keyspaces** | Cassandra-compatible, serverless |
| **Timestream** | IoT sensor data, observability metrics |
| **QLDB** | Immutable ledger with cryptographic verification (audit trails, financial txns) |
| **MemoryDB for Redis** | Redis-compatible but with multi-AZ durability, like a Redis + DynamoDB hybrid |

🎯 **Exam pattern:**
- "Sensor data from 100k IoT devices, time-series queries" → **Timestream**
- "Tamper-proof audit log of all transactions" → **QLDB**
- "Find shortest path between users in a social graph" → **Neptune**

---

## 🤝 Choosing The Right Database (Decision Table)

| Workload | Pick |
|----------|------|
| OLTP, simple, predictable, lift-and-shift | RDS |
| OLTP, high throughput, MySQL/Postgres | Aurora |
| OLTP, global, cross-region failover | Aurora Global |
| OLTP, spiky / unknown load | Aurora Serverless v2 |
| NoSQL, ms latency, massive scale | DynamoDB |
| NoSQL with hot keys needing μs reads | DynamoDB + DAX |
| NoSQL multi-region active-active | DynamoDB Global Tables |
| Cache (no persistence needed) | Memcached |
| Cache (need persistence/failover) | Redis |
| Data warehouse, analytics | Redshift |
| Time-series | Timestream |
| Graph | Neptune |
| Mongo workload | DocumentDB |
| Ledger / audit | QLDB |

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Multi-AZ replicas can serve reads" | NO RDS Multi-AZ standby is invisible. Use Read Replicas for read scaling. (Aurora's "Multi-AZ" model is different its replicas ARE the read replicas.) |
| "DynamoDB is just like RDS" | Different model (no joins, key-based queries), different scaling, different pricing. |
| "Memcached supports persistence" | NO. Memcached is purely in-memory. Use Redis if persistence is needed. |
| "Redshift is for OLTP" | NO. Redshift is OLAP/analytics. Use RDS/Aurora/Dynamo for OLTP. |
| "Aurora is just managed MySQL" | Aurora has a different storage engine with 6-way replication across 3 AZs; up to 5x MySQL throughput. |
| "I can encrypt RDS later in place" | No, encryption must be enabled at creation. Workaround: snapshot → copy encrypted → restore. |
| "DAX caches DynamoDB Global Tables" | DAX is regional. For multi-region caching you'd combine other patterns. |

---

## 🚨 Exam Traps

1. **Multi-AZ vs Read Replicas**, HA vs read scaling. Don't conflate.
2. **DynamoDB + DAX** for sub-ms reads on hot keys.
3. **Aurora Global Database** for cross-region RPO/RTO under a second.
4. **Aurora Serverless v2** for spiky relational workloads.
5. **Redis (not Memcached)** when failover/persistence required.
6. **Redshift** for analytics. RDS is OLTP. Don't mix them up.
7. **RDS Proxy** for Lambda + RDS connection storms.
8. **PITR** on DynamoDB or RDS for accidental data deletion recovery (last 35 days).
9. **Timestream** for IoT / metrics time-series, not RDS.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **OLTP** | Online Transaction Processing, many small reads/writes |
| **OLAP** | Online Analytical Processing, fewer big read queries |
| **Multi-AZ** (RDS) | HA with synchronous standby |
| **Read Replica** | Async read-only copy for scaling reads |
| **Aurora Global Database** | Multi-region with <1s cross-region replication |
| **Aurora Serverless v2** | Fine-grained auto-scaling capacity |
| **DAX** | DynamoDB Accelerator, in-memory cache for DynamoDB |
| **GSI / LSI** | Global / Local Secondary Index |
| **PITR** | Point-In-Time Recovery (DynamoDB & RDS) |
| **RDS Proxy** | Connection pooler + IAM auth + faster failover |
| **Memcached vs Redis** | Memcached: simple, multi-threaded, no persistence. Redis: rich data types, persistence, Multi-AZ |
| **Redshift Spectrum** | Query S3 data from Redshift |
| **QLDB** | Quantum Ledger Database, immutable, cryptographically verifiable |

---

## ✅ Module 6 Summary

You now know:

- 🗂️ The 10+ AWS database services and their use cases
- 🛢️ RDS Multi-AZ vs Read Replicas
- 🌿 Aurora (including Global, Serverless v2, Backtrack)
- ⚡ DynamoDB (with DAX, Streams, Global Tables, PITR)
- 🔥 ElastiCache Redis vs Memcached
- 📊 Redshift basics + Spectrum + Serverless
- 🌐 Specialty DBs (Neptune, Timestream, QLDB, DocumentDB)
- 🚨 The 9 most-tested database exam traps

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 7: Decoupling & Integration](../Module-07-Decoupling-Integration/Reading.md)

---

## 📖 Case Study, Zoom's Pandemic Scale-Up (March–June 2020)

**Situation.** Zoom Video Communications entered 2020 with roughly 10M daily meeting participants. By **March 2020**, the COVID-19 pandemic forced a global shift to remote work, school, and social life. Daily participants grew explosively, reaching around **300M by April 2020** (a publicly reported figure) — one of the largest organic scale events in SaaS history.

**Decision.** Zoom ran on a hybrid of co-located data centers (for media routing) and AWS (for control plane, recording storage, transcription). The database response below is an *illustrative* reconstruction of how a SaaS platform scales its data layer under such load (specific throughput, replica, node, and capacity figures are hypothetical, chosen to teach the patterns):

1. **DynamoDB On-Demand for meeting metadata.** Moving meeting state from a self-managed relational fleet to **DynamoDB On-Demand mode** eliminates the "provisioned throughput exceeded" failure mode, since DynamoDB auto-scales write capacity as load climbs
2. **Aurora MySQL with Read Replicas** for user account and billing data, horizontally scaled with multiple read replicas in the primary region
3. **ElastiCache Redis** (cluster mode) for session state, sharded across many nodes
4. **S3 with Intelligent-Tiering** for the large volume of new meeting recordings. Older recordings auto-tiered to Glacier
5. **Aurora Global Database** for cross-region failover, moving to multi-region active-passive after a single-region risk is exposed
6. **DynamoDB Streams + Lambda** for asynchronous propagation of meeting state to analytics
7. **Amazon Transcribe** for the now-famous AI transcription feature

**Outcome.** Zoom served on the order of 300M daily participants at low join latency — a number that would have been unthinkable in late 2019. Its revenue also grew sharply over the following two fiscal years, with the architectural elasticity a key enabler. The episode became a widely-cited example of cloud-scale elasticity in SaaS.

**Lesson for the exam / for practitioners.** Every "database scaling under unpredictable load" trope on the SAA exam came from this period:

- **DynamoDB On-Demand vs Provisioned**, On-Demand is the exam's reflexive answer for "unpredictable spiky workload"; provisioned (with Auto Scaling) wins on cost at *predictable* scale
- **Aurora Serverless v2** (released GA April 2022, after Zoom's surge), would be the modern answer to "spiky relational workload"
- **Read Replicas vs Multi-AZ**, Zoom used *both* simultaneously. Multi-AZ for HA, replicas for read scaling. The exam tests whether you know they solve different problems
- **ElastiCache Redis cluster mode**, for session state at >1M concurrent users, single-node Redis is not enough; cluster mode shards by key hash
- **Aurora Global Database** Zoom's cross-region failover insurance. The exam asks "<1 second cross-region replication with auto-promotion" that's Aurora Global by name
- **DynamoDB Streams + Lambda**, the standard CDC (change data capture) pattern; the exam loves it

When the SAA exam describes "a SaaS workload sees unpredictable 10× spikes; database layer must scale automatically and survive AZ failure," the answer chain is **DynamoDB On-Demand + Aurora Multi-AZ with Read Replicas + ElastiCache Redis + Aurora Global Database for DR**. Zoom's exact stack.

**Discussion (Socratic).**
- **Q1.** Zoom moved meeting state from PostgreSQL to DynamoDB during the surge. The conventional wisdom is "don't change your database under fire." Defend AND attack the choice. What had to be true for it to be safe?
- **Q2.** DynamoDB On-Demand was Zoom's escape hatch from throughput tuning, but it costs ~5× more per request than provisioned. At what scale should Zoom have switched back to provisioned with auto-scaling? Build the math.
- **Q3.** Many would say Zoom should have been *multi-region* before the pandemic. They became multi-region during it. Argue: was multi-region a 2020 luxury or a 2019 necessity for a critical comms platform?

---

## 💬 Discussion, Socratic Prompts

1. **DAX vs ElastiCache for DynamoDB caching.** DAX is purpose-built and transparent; ElastiCache requires explicit cache logic. When is the engineering cost of writing cache-aside logic worth it for the flexibility?
2. **RDS Proxy for Lambda workloads.** Lambda + RDS is a famously bad pairing because of connection storms. RDS Proxy fixes this. Why didn't AWS just *make Lambda + RDS work natively* by default? What's the architectural cost of the proxy layer?
3. **Aurora Serverless v2 vs Aurora provisioned.** Serverless v2 scales in 0.5 ACU increments. Provisioned is cheaper at sustained high load. At what duty cycle does each win?
4. **Multi-Region active-active vs active-passive for OLTP.** Active-active (DynamoDB Global Tables, Aurora Global with write forwarding) is appealing but expensive and has consistency caveats. When is active-passive (warm standby) the better answer despite the higher failover RTO?
5. **QLDB vs blockchain for audit ledgers.** QLDB gives cryptographic verification without the operational pain of blockchain. When is QLDB actually wrong, i.e., when do you genuinely need a distributed ledger across organizations?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 07 (Decoupling) covers DynamoDB Streams → Lambda CDC patterns. Module 08 (Caching) covers ElastiCache and DAX in depth. Module 09 (Monitoring) covers Performance Insights and Database Activity Streams. Module 10 (DR) covers cross-region DB patterns (Aurora Global, DynamoDB Global Tables).
> - **Cross-course:** `06-Azure-Administrator` Module 06 covers the equivalent Azure SQL / Cosmos DB story. `07-AWS-AI-Practitioner` Module 04 covers vector databases (OpenSearch Serverless, Aurora with pgvector) for RAG.
> - **Practice:** Practice Exam 2 has 7 database questions; Final Mock has 6. Combined with Module 5 (S3), data-layer questions are roughly 20% of the exam.
> - **Real world:** Spin up an Aurora Serverless v2 instance ($0.06/ACU-hour) and a DynamoDB table; compare the two for a small CRUD app.

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **Choosing a database on AWS**, `aws.amazon.com/products/databases/`
- 📖 **RDS User Guide**, `docs.aws.amazon.com/AmazonRDS/latest/UserGuide/`
- 📖 **Aurora User Guide**, `docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/`
- 📖 **DynamoDB Developer Guide**, `docs.aws.amazon.com/amazondynamodb/latest/developerguide/`
- 📖 **ElastiCache User Guide**, `docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/`
- 📖 **AWS Builders' Library *"Amazon DynamoDB and the Dynamo paper"*** connecting current product to academic origin.

**re:Invent talks**
- 🎤 **DAT401 (2023): *Advanced design patterns for Amazon DynamoDB***, Rick Houlihan's classic; his DynamoDB schema-design philosophy is exam-relevant.
- 🎤 **DAT302 (2023): *Deep dive on Amazon Aurora***
- 🎤 **DAT405 (2024): *Amazon Aurora storage layer internals***, the 4-of-6 quorum details.

**Academic foundations**
- 📄 **Brewer, Eric (2000).** *Towards Robust Distributed Systems.* ACM PODC 2000 keynote.
- 📄 **DeCandia et al. (2007).** *Dynamo: Amazon's Highly Available Key-value Store.* ACM SOSP 2007.
- 📄 **Verbitski et al. (2017).** *Amazon Aurora: Design considerations for high throughput cloud-native relational databases.* ACM SIGMOD 2017.
- 📄 **Lamport, Leslie (1998).** *The Part-Time Parliament.* ACM TOCS 16(2). The Paxos paper.
- 📄 **Abadi, Daniel (2012).** *Consistency Tradeoffs in Modern Distributed Database System Design: CAP is Only Part of the Story.* IEEE Computer 45(2).
- 📖 **Kleppmann, Martin (2017).** *Designing Data-Intensive Applications.* O'Reilly. The textbook every database choice on the SAA exam rests on.

**Industry**
- 📰 **Werner Vogels's *All Things Distributed***, multiple Aurora and DynamoDB internals posts.
- 📰 **Alex DeBrie's *DynamoDB Book* (2020)**, the definitive practical reference on DynamoDB schema design.
