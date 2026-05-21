# ✏️ Module 5 Quiz: Databases

> **Instructions:** 25 questions. Aim for 21/25 minimum. Match scenarios to services!

---

## Questions

### Q1. Which AWS database service is BEST for a high-throughput, single-digit millisecond key-value lookup workload at any scale?
A. RDS for MySQL
B. Amazon DynamoDB
C. Amazon Redshift
D. Amazon DocumentDB

---

### Q2. RDS Multi-AZ deployments provide:
A. Read scaling
B. Synchronous standby in another AZ + automatic failover for HA
C. Asynchronous read replicas
D. Cross-region replication

---

### Q3. A company needs petabyte-scale analytical queries over historical sales data for BI dashboards. The BEST choice is:
A. DynamoDB
B. Aurora Serverless
C. Amazon Redshift
D. ElastiCache

---

### Q4. Amazon Aurora is API-compatible with:
A. MySQL and PostgreSQL
B. Oracle and SQL Server
C. MongoDB
D. Cassandra

---

### Q5. Which is TRUE about RDS Read Replicas?
A. They are synchronous and provide HA
B. They are asynchronous and used to offload read traffic
C. They replace the primary on failure automatically
D. They store backups

---

### Q6. The BEST service for sub-millisecond caching in front of a database is:
A. Amazon S3
B. Amazon ElastiCache
C. Amazon Redshift
D. AWS Glue

---

### Q7. A team needs a fully managed MongoDB-compatible document database. They should use:
A. DynamoDB
B. Amazon DocumentDB
C. Neptune
D. Aurora

---

### Q8. Which AWS service is BEST for "friend-of-friend" social network queries?
A. RDS for PostgreSQL
B. Amazon DynamoDB
C. Amazon Neptune
D. Amazon Timestream

---

### Q9. DynamoDB Global Tables are used to:
A. Limit access to one Region
B. Provide multi-region, multi-active replication
C. Replace DAX
D. Encrypt data at rest

---

### Q10. Which service is in-memory and provides MICROSECOND access for DynamoDB?
A. ElastiCache
B. DAX (DynamoDB Accelerator)
C. MemoryDB
D. Aurora Serverless

---

### Q11. Aurora's storage architecture replicates data across:
A. 2 copies in 1 AZ
B. 6 copies across 3 AZs
C. 4 copies in 2 AZs
D. 3 copies in 1 AZ

---

### Q12. Athena is BEST described as:
A. A managed graph database
B. A serverless SQL query engine over data in S3
C. A NoSQL document store
D. A migration tool

---

### Q13. To migrate an on-prem Oracle database to Aurora PostgreSQL with minimal downtime, the BEST combination is:
A. DMS + Schema Conversion Tool (SCT)
B. CloudFormation only
C. AWS Snowball
D. Storage Gateway

---

### Q14. Which service is purpose-built for IoT time-series data?
A. DynamoDB
B. Timestream
C. Neptune
D. Keyspaces

---

### Q15. QLDB is BEST for:
A. Decentralized blockchain
B. Immutable, cryptographically verifiable audit trails
C. Streaming analytics
D. Graph workloads

---

### Q16. The default RDS automated backup retention period is:
A. 1 day
B. 7 days
C. 30 days
D. 35 days

---

### Q17. Which scenario is BEST for Aurora Serverless?
A. Steady, predictable 24/7 high traffic
B. Spiky / unpredictable / intermittent relational workloads
C. Petabyte OLAP queries
D. Sub-millisecond cache layer

---

### Q18. ElastiCache for Memcached vs Redis — which is TRUE?
A. Memcached supports replication; Redis does not
B. Redis supports persistence and replication; Memcached does not
C. They are identical
D. Memcached is the only one that's serverless

---

### Q19. To run SQL over data already in S3 without loading it into Redshift first, you can use:
A. Redshift Spectrum (or Athena)
B. DynamoDB Streams
C. ElastiCache
D. Lambda only

---

### Q20. Which is the AWS managed NoSQL service compatible with Apache Cassandra?
A. DocumentDB
B. Keyspaces
C. DynamoDB
D. Neptune

---

### Q21. Which TRUE statement applies to DynamoDB?
A. It's a relational database with full ACID transactions only
B. It's a serverless NoSQL DB with single-digit-ms latency at any scale
C. It requires you to manage EC2 instances
D. It is OLAP-focused

---

### Q22. RDS supports which of these engines?
A. MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora
B. MongoDB, Cassandra
C. Neo4j, Redis
D. ElasticSearch only

---

### Q23. A startup expects unpredictable traffic and wants no instance management for its relational DB. The BEST fit is:
A. RDS for MySQL on a large instance
B. Aurora Serverless
C. Redshift
D. ElastiCache

---

### Q24. Which is the correct mapping?
A. Redshift = OLAP / Aurora = OLTP
B. DynamoDB = relational / Aurora = NoSQL
C. ElastiCache = data warehouse
D. Neptune = key-value store

---

### Q25. To replicate an Aurora cluster to a second Region with <1 second lag for global apps, use:
A. RDS Multi-AZ
B. Aurora Global Database
C. CloudFront
D. DynamoDB Streams

---

## 🎯 Answers + Explanations

### Q1: **B. Amazon DynamoDB**
Serverless, single-digit ms at any scale — DynamoDB's headline feature. RDS doesn't scale that way; Redshift is for analytics.

### Q2: **B. Synchronous standby in another AZ + automatic failover for HA**
Multi-AZ = HA only. You can't read from the standby. Read scaling = Read Replicas.

### Q3: **C. Amazon Redshift**
Petabyte-scale OLAP / data warehouse. Optimized for analytical scans, not transactional row-by-row work.

### Q4: **A. MySQL and PostgreSQL**
Aurora has two editions: Aurora MySQL-compatible and Aurora PostgreSQL-compatible.

### Q5: **B. They are asynchronous and used to offload read traffic**
Async replicas, you connect to them for read queries. They don't auto-failover for HA — that's Multi-AZ.

### Q6: **B. Amazon ElastiCache**
Managed Redis/Memcached for sub-ms in-memory cache.

### Q7: **B. Amazon DocumentDB**
DocumentDB is the MongoDB-API-compatible managed service. DynamoDB is AWS-native NoSQL, not MongoDB-compatible.

### Q8: **C. Amazon Neptune**
Graph DB for relationship-heavy queries. Supports Gremlin, SPARQL, openCypher.

### Q9: **B. Provide multi-region, multi-active replication**
Global Tables = active-active replication across Regions. Writes anywhere are replicated everywhere within seconds.

### Q10: **B. DAX (DynamoDB Accelerator)**
DAX is the in-memory cache built specifically for DynamoDB. Microsecond reads. ElastiCache works for other use cases.

### Q11: **B. 6 copies across 3 AZs**
Aurora's signature feature — 6-way replicated storage layer for extreme durability.

### Q12: **B. A serverless SQL query engine over data in S3**
Athena = pay per query, no infrastructure to manage, uses Presto/Trino under the hood.

### Q13: **A. DMS + Schema Conversion Tool (SCT)**
DMS handles the data migration (with continuous replication); SCT converts schema between heterogeneous engines.

### Q14: **B. Timestream**
Purpose-built for time-series (IoT metrics, app performance) with cheap storage tiering.

### Q15: **B. Immutable, cryptographically verifiable audit trails**
QLDB = centralized ledger with hash-chained transactions. Different from blockchain (which is decentralized).

### Q16: **B. 7 days**
RDS default = 7 days; max = 35 days. Set to 0 to disable (not recommended in production).

### Q17: **B. Spiky / unpredictable / intermittent relational workloads**
Aurora Serverless auto-scales capacity for variable workloads, pay per second.

### Q18: **B. Redis supports persistence and replication; Memcached does not**
Memcached is simpler — multi-threaded but no persistence/replication. Redis supports both plus rich data types and cluster mode.

### Q19: **A. Redshift Spectrum (or Athena)**
Both can query S3 in-place with SQL. Spectrum is the Redshift feature for "data lake" queries.

### Q20: **B. Keyspaces**
Amazon Keyspaces for Apache Cassandra = managed wide-column NoSQL with CQL.

### Q21: **B. It's a serverless NoSQL DB with single-digit-ms latency at any scale**
The canonical DynamoDB description. DynamoDB does support ACID transactions on items, but is fundamentally NoSQL.

### Q22: **A. MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora**
The 6 RDS-supported engines (Aurora is technically a separate offering but accessed via the RDS console).

### Q23: **B. Aurora Serverless**
Auto-scales for unpredictable load, pay per ACU-second. No instance to size.

### Q24: **A. Redshift = OLAP / Aurora = OLTP**
Aurora is relational OLTP (transactions). Redshift is OLAP (analytics). Don't swap them.

### Q25: **B. Aurora Global Database**
Aurora Global Database = cross-Region replication with sub-second lag and fast failover.

---

## 📊 Score Yourself

- 24–25 → 🏆 Database master.
- 21–23 → ✅ Solid. Review wrong answers.
- 17–20 → ⚠️ Re-read RDS/Aurora/DynamoDB and the decision table.
- <17 → 🔁 Restart Module 5.

---

## 🃏 Add To Your Flashcards

- Multi-AZ (HA) vs Read Replicas (scale reads)
- Aurora's 6×3 storage replication
- DynamoDB → DAX (microseconds)
- Redshift = OLAP, Aurora = OLTP
- DocumentDB = MongoDB-compatible; Neptune = graph; Keyspaces = Cassandra; Timestream = time-series; QLDB = ledger
- DMS + SCT for cross-engine migrations

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6: Security, Identity & Compliance](../Module-06-Security-Identity-Compliance/Reading.md)
