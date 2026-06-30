# 📋 Module 6 Cheat Sheet: Databases on AWS

> One page. Print it. Tape to your monitor.

---

## 🗂️ Database Decision Table

| Need | Pick |
|------|------|
| OLTP, lift-and-shift Oracle/SQL Server | **RDS** (those engines) |
| OLTP, MySQL/PG, high perf | **Aurora** |
| Global OLTP, cross-region failover | **Aurora Global Database** |
| Spiky relational workload | **Aurora Serverless v2** |
| Massive NoSQL, ms latency | **DynamoDB** |
| DDB sub-ms hot reads | **DynamoDB + DAX** |
| Multi-region active-active NoSQL | **DynamoDB Global Tables** |
| Cache, no persistence | **Memcached** |
| Cache, persistence + HA | **Redis** |
| Analytics, PB scale | **Redshift** |
| Query S3 from warehouse | **Redshift Spectrum** (or **Athena**) |
| Mongo workload | **DocumentDB** |
| Graph (social, fraud) | **Neptune** |
| Time-series (IoT, metrics) | **Timestream** |
| Immutable audit ledger | **QLDB** |
| Cassandra workload | **Keyspaces** |

---

## 🛢️ RDS Multi-AZ vs Read Replicas

| | Multi-AZ | Read Replicas |
|---|----------|----------------|
| Purpose | **HA** | **Read scaling** |
| Sync | Synchronous | Asynchronous |
| Reads from standby? | NO | Yes |
| Failover | Auto (60–120 s) | Manual promote |
| Region | Same | Same or different |

🧠 *"Multi-AZ for HA. Read Replica for read traffic. Use both if needed."*

---

## 🌿 Aurora Quick Facts

- **6 copies / 3 AZs** for storage durability
- Up to **15 read replicas**
- **Global Database**: <1 s replication to 5 secondary regions
- **Serverless v2**: fine-grained auto-scaling
- **Backtrack**: rewind without restore (MySQL)
- 5× MySQL throughput / 3× PostgreSQL on average

---

## ⚡ DynamoDB Cheat

| Feature | Notes |
|---------|-------|
| Throughput | Provisioned (RCU/WCU) or On-Demand |
| Index | LSI (same pk) or GSI (any pk) |
| Consistency | Eventual (default), Strong (2× RCU) |
| Streams | 24-hr change feed |
| PITR | up to 35 days |
| TTL | Auto-delete by attribute |
| DAX | Microsecond cache |
| Global Tables | Multi-region multi-active |

---

## 🔥 Redis vs Memcached

| Feature | Redis | Memcached |
|---------|-------|-----------|
| Persistence | ✅ | ❌ |
| Replication / HA | ✅ Multi-AZ | ❌ |
| Sorted sets / pub-sub | ✅ | ❌ |
| Multi-threaded | ❌ (per shard) | ✅ |
| Cluster sharding | ✅ | ✅ |
| Encryption at rest/in-transit | ✅ | ❌ |

🧠 **"Redis = rich + durable. Memcached = simple + ephemeral."**

---

## 📊 Redshift Quick

- Columnar, MPP, **OLAP**
- Distribution styles: KEY, EVEN, ALL, AUTO
- Concurrency Scaling for read spikes
- Spectrum to query S3 directly
- Serverless option available
- Use for analytics; **NOT for OLTP**

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "RDS Multi-AZ for HA, Read Replicas for read scaling"
- "Aurora Global Database for cross-region <1s"
- "Aurora Serverless v2 for spiky relational"
- "DAX for sub-ms DynamoDB reads"
- "DynamoDB Global Tables for multi-region active-active"
- "Redis when persistence/HA required; Memcached otherwise"
- "RDS Proxy for Lambda connection storms"
- "PITR within 35 days for accidental deletes"

❌ Usually wrong:

- "Multi-AZ provides read replicas"
- "Memcached supports failover"
- "Redshift is for OLTP"
- "RDS for petabyte analytics"
- "DAX caches non-DDB workloads"

---

## ⚠️ Anti-Patterns

- ❌ Using DynamoDB for relational joins
- ❌ Using Redshift for high-frequency single-row writes
- ❌ Using ElastiCache as system of record (data is in memory)
- ❌ Encrypting RDS by toggle (must snapshot + copy)
- ❌ Single-AZ production DBs

---

## ✏️ Quick Self-Check

1. Multi-AZ vs Read Replicas? ___
2. Aurora storage replication factor? ___
3. DAX vs ElastiCache? ___
4. Redis vs Memcached? ___
5. Redshift use case? ___

---

➡️ [Module 7: Decoupling & Integration](../Module-07-Decoupling-Integration/Reading.md)
