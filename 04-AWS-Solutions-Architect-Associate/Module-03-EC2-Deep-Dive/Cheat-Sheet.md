# 📋 Module 3 Cheat Sheet: EC2 Deep Dive

> One page. Print it. Tape to your monitor.

---

## 🧩 Instance Families

| Letter | For | Example |
|--------|-----|---------|
| T | Burstable, low baseline | t3, t4g |
| M | General purpose | m6i, m7g |
| C | Compute-heavy | c6i, c7g |
| R | RAM-heavy | r6i, x2idn |
| I/D/H | Storage-heavy | i4i, d3 |
| G/P/Inf/Trn | GPU/AI | g5, p4d, inf2 |

🧠 *"My Cat Really Is Great"*, M C R I G

---

## 💰 Purchase Options

| Option | Discount | When |
|--------|----------|------|
| On-Demand | 0% | Short, unpredictable |
| RI Std 3yr all-up | ~72% | Steady 3yr, fixed type |
| RI Convertible | ~54% | Steady, want flexibility |
| Compute Savings Plan | ~66% | Multi-service, multi-family |
| EC2 Savings Plan | ~72% | Family+region locked |
| Spot | up to **90%** | Fault-tolerant batch |
| Dedicated Host | varies | BYOL licensing, isolation |
| Capacity Reservation | 0% | Guaranteed capacity, no discount |

🧠 *"Spot for batch, RI for steady, On-Demand for unknown, Savings Plans for flexibility."*

---

## ⚖️ ELB Decision Tree

```
HTTP/HTTPS routing, paths, hosts?           → ALB
TCP/UDP, static IPs, ultra-low latency?     → NLB
Insert 3rd-party firewall appliances?       → GWLB
```

| Feature | ALB | NLB | GWLB |
|---------|-----|-----|------|
| Layer | 7 | 4 | 3/4 |
| Static IP | No (DNS) | Yes per AZ | n/a |
| WebSocket | Yes | n/a | n/a |
| Path-based | ✅ | ❌ | ❌ |
| Lambda targets | ✅ | ❌ | ❌ |
| User auth (Cognito) | ✅ | ❌ | ❌ |

---

## 🎯 Placement Groups

| Type | Layout | Use |
|------|--------|-----|
| **Cluster** | Same rack, 1 AZ | HPC, lowest latency |
| **Spread** | Distinct HW (max 7/AZ) | Critical, no two on same host |
| **Partition** | Logical racks (up to 7/AZ) | Cassandra, HDFS, Kafka |

---

## 📈 ASG Scaling Policies

| Policy | When |
|--------|------|
| Target tracking | "Keep CPU at 50%", simplest |
| Step scaling | Tiered alarm responses |
| Scheduled | Known time-based patterns |
| Predictive | ML forecast pre-warms capacity |

---

## 🗄️ Storage Decision

| Need | Pick |
|------|------|
| Boot vol / single-instance block | EBS gp3 |
| Mission-critical OLTP | EBS io2 Block Express |
| Sequential big data | EBS st1 |
| Cold archive (attached) | EBS sc1 |
| Ephemeral super-fast | Instance Store |
| Multi-instance NFS, multi-AZ | EFS |
| Windows SMB shares | FSx for Windows |
| HPC / Lustre | FSx for Lustre |

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Spread across multiple AZs in an Auto Scaling Group"
- "Use Spot for fault-tolerant batch"
- "Use RI / Savings Plan for steady-state"
- "Attach IAM role via instance profile"
- "Use NLB for static IPs and L4"
- "Use ALB for path-based routing"
- "Mixed-instances policy with Spot + On-Demand"

❌ Usually wrong:

- "Run a single EC2 in one AZ for production"
- "Hard-code access keys on the instance"
- "Use ALB for TCP/UDP"
- "Use EBS for multi-AZ shared storage"
- "Use 3-yr RI for a 3-month project"

---

## ⚠️ Anti-Patterns

- ❌ Bake AWS credentials into AMI (use IAM role)
- ❌ Single-AZ production
- ❌ Manual scaling instead of ASG
- ❌ Public subnet for DB
- ❌ Storing critical data on instance store
- ❌ Standard RI for variable workloads (use Convertible or Compute SP)

---

## 🗓️ Key Numbers

| Item | Value |
|------|-------|
| Spot reclaim notice | 2 minutes |
| Max RI commitment | 3 years |
| Max Savings Plan commit | 3 years |
| Cluster PG | 1 AZ only |
| Spread PG | max 7 instances per AZ |
| Partition PG | max 7 partitions per AZ |

---

## ✏️ Quick Self-Check

1. Spot is best for what? ___
2. ALB does what NLB cannot? ___
3. Which storage is multi-AZ accessible? ___
4. What does an instance profile do? ___
5. RI vs Savings Plan, when each? ___

---

➡️ [Module 4: VPC Deep Dive](../Module-04-VPC-Deep-Dive/Reading.md)
