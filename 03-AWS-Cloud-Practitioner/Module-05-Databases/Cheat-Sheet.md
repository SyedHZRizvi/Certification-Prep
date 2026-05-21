# 📋 Module 5 Cheat Sheet: Databases

> One page. Print it. Tape it to your monitor.

---

## 🗄️ The 4 Database Categories

```
Relational (SQL)    →  RDS, Aurora
NoSQL              →  DynamoDB, DocumentDB, Neptune, Keyspaces, Timestream, QLDB
In-Memory          →  ElastiCache (Redis/Memcached), DAX, MemoryDB
Analytical (OLAP)  →  Redshift, Athena (S3 SQL)
```

---

## 🐘 RDS — The Big Picture

Engines: **MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora**

| Feature | What it gives you |
|---------|-------------------|
| **Multi-AZ** | Sync standby in another AZ → HA + auto-failover |
| **Read Replicas** | Async reads → scale read traffic |
| **Backups** | 7-day default, max 35 |
| **Snapshots** | Manual, retained until deleted |

🔥 Multi-AZ ≠ Read Replicas. Multi-AZ = HA. Read Replicas = read scale.

---

## 🌟 Amazon Aurora (premium RDS)

- MySQL- or PostgreSQL-compatible
- **6 copies of data across 3 AZs**
- Up to **15 read replicas**, sub-10ms lag
- **Aurora Serverless** → spiky workloads
- **Aurora Global Database** → cross-Region <1 sec lag

---

## 📋 DynamoDB

- Serverless key-value/document NoSQL
- **Single-digit ms** at any scale
- Modes: **On-Demand** (pay per req) / **Provisioned** (RCU/WCU)
- **Global Tables** → multi-region active-active
- **DAX** → microsecond reads
- Backups, PITR up to 35 days

---

## ⚡ ElastiCache

| Engine | When |
|--------|------|
| **Memcached** | Simple cache, no persistence, multi-threaded |
| **Redis** | Persistence, replication, pub/sub, cluster mode, rich types |

---

## 🏭 Analytical Stack

| Service | One-liner |
|---------|-----------|
| **Redshift** | Petabyte OLAP warehouse |
| **Redshift Spectrum** | Query S3 from Redshift |
| **Athena** | Serverless SQL over S3 |
| **QuickSight** | BI dashboards (Mod 7) |

---

## 📦 Specialty NoSQL

| Service | Use case |
|---------|----------|
| **DocumentDB** | MongoDB-compatible document store |
| **Neptune** | Graph (Gremlin / SPARQL / openCypher) |
| **Keyspaces** | Cassandra-compatible wide-column |
| **Timestream** | Time-series (IoT, metrics) |
| **QLDB** | Immutable ledger (audit, supply chain) |
| **MemoryDB for Redis** | Durable Redis as a PRIMARY DB |

---

## 🚛 Migration: DMS + SCT

- **DMS** = Database Migration Service (homogeneous + heterogeneous, continuous replication)
- **SCT** = Schema Conversion Tool (e.g., Oracle → Aurora PG)

---

## 🆚 Scenario → Service

| Need | Pick |
|------|------|
| SQL with HA | **RDS Multi-AZ** |
| MySQL/PG with cloud HA | **Aurora** |
| Spiky relational | **Aurora Serverless** |
| Key-value, any scale | **DynamoDB** |
| Multi-region NoSQL | **DynamoDB Global Tables** |
| µs reads from DynamoDB | **DAX** |
| Sub-ms cache layer | **ElastiCache** |
| Petabyte OLAP | **Redshift** |
| SQL over S3, no load | **Athena** |
| MongoDB-compatible | **DocumentDB** |
| Graph DB | **Neptune** |
| Time-series | **Timestream** |
| Immutable ledger | **QLDB** |
| Cassandra-compat | **Keyspaces** |
| Migrate to AWS | **DMS** (+ SCT) |

---

## 🏆 Exam Power Phrases

✅ "Use Multi-AZ for HA"
✅ "Use Read Replicas to scale reads"
✅ "Use DynamoDB On-Demand for unpredictable traffic"
✅ "Use Aurora Global Database for multi-region apps"
✅ "Use Athena to query S3 with SQL"

Wrong:
❌ "Use Multi-AZ to scale reads"
❌ "Use Redshift for OLTP"
❌ "Aurora is Oracle-compatible"
❌ "DynamoDB does joins"

---

## ⚠️ Anti-Patterns

- ❌ Using Redshift for high-frequency single-row updates
- ❌ Using DynamoDB for relational joins
- ❌ Self-managing RDS engines on EC2 (just use RDS)
- ❌ Caching with Memcached when you need persistence

---

## 🗓️ Key Facts

- RDS backup retention: 7 days default / 35 max
- Aurora storage: 6 copies across 3 AZs
- DynamoDB latency: single-digit ms
- DAX: microseconds for DynamoDB
- DMS supports continuous replication during migration

---

## ✏️ Quick Self-Check

1. Multi-AZ vs Read Replica? ___
2. Aurora compatible with? ___
3. DAX vs ElastiCache? ___
4. Redshift vs RDS? ___
5. Neptune use case? ___

---

➡️ [Module 6: Security, Identity & Compliance](../Module-06-Security-Identity-Compliance/Reading.md)
