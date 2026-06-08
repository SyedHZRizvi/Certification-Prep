# ✏️ Module 6 Quiz: Databases on AWS

> **Instructions:** 26 questions, ~35 min. Target 21/26.

> **Bloom's distribution.** Remember 5 (19%) · Understand 6 (23%) · Apply 9 (35%) · Analyze/Evaluate 5 (19%) · Create 1 (4%).

---

## Questions

### Q1. An RDS Multi-AZ deployment provides: *(Understand)*
A. Read scaling via the standby
B. Synchronous replication with automatic failover to a standby in another AZ
C. Asynchronous cross-region replication
D. A cache layer

---

### Q2. To scale read traffic on RDS, the correct mechanism is: *(Apply)*
A. Multi-AZ
B. Read Replicas
C. RDS Proxy
D. Bigger instance type

---

### Q3. A workload needs cross-region disaster recovery for a MySQL database with under 1 second cross-region replication and the ability to fail over rapidly. The BEST choice is: *(Apply)*
A. RDS MySQL Multi-AZ
B. Aurora Global Database
C. Cross-region snapshot copy nightly
D. DynamoDB Global Tables

---

### Q4. A spiky relational workload that runs for a few minutes then idle. The MOST cost-effective option: *(Apply)*
A. Aurora Provisioned
B. Aurora Serverless v2
C. RDS Multi-AZ
D. Redshift

---

### Q5. DynamoDB On-Demand capacity mode is BEST for: *(Understand)*
A. Predictable, steady workloads
B. Unpredictable or new workloads where you don't want to manage RCU/WCU
C. Analytical batch queries
D. Transactional joins across many tables

---

### Q6. A read-heavy DynamoDB table has hot keys that need single-digit MICROsecond latency. The right addition is: *(Apply)*
A. ElastiCache Redis
B. DAX (DynamoDB Accelerator)
C. CloudFront
D. RDS Proxy

---

### Q7. A leaderboard service requires sorted-set operations, persistence, and Multi-AZ failover. The BEST cache is: *(Apply)*
A. Memcached
B. Redis
C. DynamoDB
D. Athena

---

### Q8. Memcached is BEST when: *(Understand)*
A. You need replication and persistence
B. You want simple multi-threaded distributed cache with no persistence
C. You need sorted sets
D. You need geospatial queries

---

### Q9. To restore an RDS database to a state 4 hours ago (within retention window): *(Apply)*
A. Manual snapshot restore
B. Point-in-Time Recovery (PITR) from automated backups
C. Multi-AZ failover
D. Spin up a Read Replica

---

### Q10. Encrypting an existing unencrypted RDS instance: *(Apply)*
A. Can be done in place with a console toggle
B. Requires snapshot → copy as encrypted → restore
C. Is not possible
D. Requires changing engine

---

### Q11. Which database is BEST for petabyte-scale analytics with complex aggregations across years of sales data? *(Apply)*
A. RDS PostgreSQL
B. DynamoDB
C. Redshift
D. ElastiCache

---

### Q12. To query data directly in S3 from Redshift (data lake) without loading it first, use: *(Remember)*
A. Athena
B. Redshift Spectrum
C. EMR
D. Glue

---

### Q13. A Lambda function opens many short-lived RDS connections, causing connection storms. The BEST fix is: *(Apply)*
A. Larger RDS instance
B. RDS Proxy
C. CloudFront
D. Read Replica

---

### Q14. DynamoDB Global Tables provide: *(Remember)*
A. Cross-region read-only replicas
B. Multi-region, multi-active replication
C. Cross-AZ replication only
D. ACID multi-table transactions

---

### Q15. An IoT solution collects sensor readings every second from 10,000 devices. Which is the BEST database? *(Apply)*
A. RDS Oracle
B. DynamoDB
C. Timestream
D. Neptune

---

### Q16. A workload needs an immutable, cryptographically verifiable audit log of transactions. The BEST service is: *(Apply)*
A. RDS PostgreSQL
B. QLDB
C. DynamoDB
D. Aurora

---

### Q17. Aurora's storage is replicated: *(Remember)*
A. 2 copies in 1 AZ
B. 3 copies across 3 AZs
C. 6 copies across 3 AZs
D. 4 copies in 2 AZs

---

### Q18. Aurora Backtrack lets you: *(Understand)*
A. Replicate to another region
B. Rewind the database to a point in time without restore
C. Encrypt at rest
D. Auto-scale capacity

---

### Q19. To replicate a MongoDB workload to AWS with minimal app changes, use: *(Remember)*
A. DynamoDB
B. DocumentDB
C. Aurora MySQL
D. Redshift

---

### Q20. Read replicas can be promoted to standalone primaries: *(Understand)*
A. Automatically, by AWS
B. Manually, by the user
C. Only in another region
D. Never

---

### Q21. A company runs OLTP on RDS and wants to offload heavy reporting reads. They should add: *(Apply)*
A. Multi-AZ
B. Read Replicas (and point reports at them)
C. ElastiCache
D. CloudFront

---

### Q22. An RDS database is at 90% storage and growing. To prevent downtime: *(Analyze)*
A. Manually resize storage
B. Enable RDS Storage Auto Scaling
C. Add a Read Replica
D. Move to DynamoDB

---

### Q23. Which is TRUE about DynamoDB Streams? *(Analyze)*
A. They retain data for 30 days
B. They retain change events for 24 hours and can be consumed by Lambda
C. They are required for global tables
D. They store full table snapshots

---

### Q24. To find shortest paths and patterns in a network of users and relationships, the BEST database is: *(Create)*
A. Neptune
B. DynamoDB
C. RDS
D. Redshift

---

### Q25. RDS Multi-AZ failover typically completes in: *(Evaluate)*
A. < 1 second
B. ~60–120 seconds (RDS single-instance Multi-AZ)
C. 10+ minutes
D. Manual only

---

### Q26. The default consistency for a DynamoDB GetItem is: *(Analyze)*
A. Strongly consistent
B. Eventually consistent
C. ACID-transactional
D. Read-after-write only

---

## 🎯 Answers + Explanations

### Q1: **B. Synchronous replication with automatic failover**
Multi-AZ = HA. Standby is invisible; CNAME switches on failover (~60–120 s).

### Q2: **B. Read Replicas**
Up to 5 read replicas (15 on Aurora). Multi-AZ doesn't serve reads on the classic deployment.

### Q3: **B. Aurora Global Database**
Cross-region replication ~<1 s, regional failover ~1 min RTO. Snapshot copies are too slow.

### Q4: **B. Aurora Serverless v2**
Fine-grained auto-scale; pay only for what you use. Perfect for spiky/idle workloads.

### Q5: **B. Unpredictable workloads, no capacity tuning**
On-Demand = pay-per-request, auto-scale. Provisioned wins when traffic is predictable.

### Q6: **B. DAX**
DAX gives microsecond reads for DynamoDB hot keys. ElastiCache could be used for non-DDB data.

### Q7: **B. Redis**
Sorted sets + persistence + Multi-AZ = Redis. Memcached doesn't have any of those.

### Q8: **B. Simple multi-threaded distributed cache, no persistence**
Memcached's sweet spot, easy horizontal sharding, multi-threaded, ephemeral.

### Q9: **B. Point-in-Time Recovery**
PITR uses automated backups + tx logs to restore to any second within the retention window.

### Q10: **B. Snapshot → copy encrypted → restore**
You cannot toggle encryption on an existing instance. Snapshot trick is the workaround.

### Q11: **C. Redshift**
Petabyte-scale OLAP = Redshift. RDS/DynamoDB are OLTP.

### Q12: **B. Redshift Spectrum**
Query S3 directly via Redshift's SQL engine. Athena is alternative if you don't run Redshift.

### Q13: **B. RDS Proxy**
Connection pooling + reuse + faster failover. Designed for Lambda + RDS.

### Q14: **B. Multi-region, multi-active**
Writes accepted in any region, replicated to others. Eventual consistency across regions.

### Q15: **C. Timestream**
Purpose-built for time-series; ingest, store, query at IoT scale.

### Q16: **B. QLDB**
Immutable, append-only, cryptographically verifiable journal. Ideal for audit/financial.

### Q17: **C. 6 copies across 3 AZs**
2 copies per AZ × 3 AZs = 6. Tolerates loss of 2 copies for writes, 3 for reads.

### Q18: **B. Rewind without restore**
Aurora MySQL feature. Saves time vs full restore for "oops" moments.

### Q19: **B. DocumentDB**
MongoDB-compatible API; minimal app changes.

### Q20: **B. Manually**
Read replicas don't auto-promote; you promote them if needed (e.g., standalone DB or DR).

### Q21: **B. Read Replicas for reporting**
Standard pattern, separate OLTP writes from reporting reads.

### Q22: **B. Storage Auto Scaling**
RDS will automatically grow storage when threshold hit, no downtime.

### Q23: **B. 24 hr retention, Lambda consumer**
Standard Streams retention. Lambda triggers per record.

### Q24: **A. Neptune**
Graph DB, supports Gremlin, openCypher, SPARQL.

### Q25: **B. ~60–120 seconds**
Classic Multi-AZ failover. Multi-AZ DB Cluster is faster (~35 s).

### Q26: **B. Eventually consistent**
Default GetItem is eventually consistent (cheaper). Pass `ConsistentRead=True` for strong (2× RCU).

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Move on
- 21–24/26 → ✅ Solid
- 17–20/26 → ⚠️ Re-read RDS/Aurora/DynamoDB sections
- <17/26 → 🔁 Re-watch all 4 essentials

---

## 🃏 Add To Your Flashcards

- Multi-AZ (HA) vs Read Replica (read scale)
- Aurora 6-way storage
- Aurora Global Database for cross-region <1s
- Aurora Serverless v2 for spiky
- DAX for sub-ms DynamoDB hot keys
- DynamoDB Global Tables = multi-active
- Redis vs Memcached
- Redshift = OLAP, RDS = OLTP
- QLDB for immutable audit
- Timestream for time-series

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7: Decoupling & Integration](../Module-07-Decoupling-Integration/Reading.md)
