# Module 3: EC2 Deep Dive 💻

> **Why this module matters:** EC2 is the oldest compute service and still the most heavily tested. SAA throws scenarios at you involving instance families (M vs C vs R vs G), purchase options (Reserved vs Spot vs Savings Plan), Auto Scaling, and load balancer choice (ALB vs NLB vs GWLB). Pick the wrong type or option and you blow either the cost or the SLA.

---

## 🏗️ A Story: The Construction Crew

Imagine you're a contractor building houses. You can:

- **Buy** your own trucks and machinery → reliable, but a huge upfront capex, and they sit idle on weekends. This is **on-prem hardware**.
- **Rent by the hour** when needed → flexible, but you pay full retail every hour. This is **On-Demand EC2**.
- **Sign a 1-year lease** at a discount for a guaranteed crew → big savings if you know you'll need it. This is **Reserved Instances / Savings Plans**.
- **Bid on auction-cleared equipment** that the rental yard is sitting on. Cheap — but they can take it back any moment if a full-price renter shows up. This is **Spot Instances**.
- **Rent a dedicated bay** at the rental yard, isolated from other contractors, for compliance. This is **Dedicated Hosts/Instances**.

The architect's game: pick the right mix. Steady baseline → Reserved/Savings. Spiky peaks → On-Demand or Spot. Fault-tolerant batch jobs → Spot. Compliance/licensing → Dedicated.

---

## 🧩 EC2 Instance Families — The 5 Letters You Must Know

Each instance type starts with a **family letter** that signals what it's optimized for.

| Family | Optimized for | Example types | Use case |
|--------|---------------|---------------|----------|
| **T** | Burstable (CPU credits) | t3, t4g | Dev, small web, low-baseline apps |
| **M** | Balanced (general purpose) | m6i, m6a, m7g (Graviton) | Web servers, small DBs, app servers |
| **C** | Compute optimized (high CPU/$$) | c6i, c7g | Batch, scientific, gaming, video encode |
| **R** | Memory optimized (lots of RAM) | r6i, r7g, x2idn | In-memory caches, large DBs, real-time analytics |
| **I, D, H** | Storage optimized (high local IOPS or HDD) | i4i, d3, h1 | NoSQL DBs, data warehouses, log processing |
| **G, P, Inf, Trn** | Accelerated (GPU / inference / training) | g5, p4d, inf2, trn1 | ML training, ML inference, graphics |

🧠 **Memory hook:** **"My Cat Really Is Great"** → **M**ain, **C**ompute, **R**am, **I**O, **G**PU.

### Decoding an instance name

```
m6i.large
│ │ │  └── Size (nano, micro, small, medium, large, xlarge, 2xlarge...)
│ │ └──── Capability (i=Intel, a=AMD, g=Graviton, n=net-optimized, d=NVMe-instance-store)
│ └────── Generation number (newer = better $/perf)
└──────── Family letter
```

🎯 **Exam pattern:** "Workload needs lowest cost per vCPU for ML training that can resume from checkpoints" → `g5.xlarge` (GPU) + **Spot** instances.

---

## 💰 Purchase Options — Pick The Right One Or Pay Double

| Option | Discount vs On-Demand | Commitment | Can be reclaimed? | When to use |
|--------|------------------------|------------|-------------------|-------------|
| **On-Demand** | 0% | None | No | Short-term, unpredictable workloads, testing |
| **Reserved Instance (RI), Standard** | Up to **72%** | 1 or 3 yr | No | Steady, predictable workloads (specific instance type) |
| **Reserved Instance, Convertible** | Up to ~54% | 1 or 3 yr | No | Steady but want to switch instance family later |
| **Savings Plans, Compute** | Up to 66% | 1 or 3 yr | No | Flexible — any region, any family, any size, ECS/Fargate/Lambda too |
| **Savings Plans, EC2 Instance** | Up to 72% | 1 or 3 yr | No | Locked to family + region but can change size/OS |
| **Spot** | Up to **90%** | None | YES — 2-min warning | Fault-tolerant batch, big data, CI/CD, stateless web tier |
| **Dedicated Host** | 0–70% (with RI) | Optional | No | BYOL software licensing, isolation, compliance |
| **Dedicated Instance** | Modest | None | No | Hardware isolation (no other AWS tenants), simpler than host |
| **Capacity Reservation** | No discount | None | No | Guarantee capacity in an AZ for critical apps |

🎯 **Exam pattern:** "Steady-state production database for 3 years" → **Reserved Instance (Standard, 3-year, all upfront)** = max discount.
🎯 **Exam pattern:** "Batch ML training that can checkpoint" → **Spot**.
🎯 **Exam pattern:** "Spiky workload with no commitment desired" → **On-Demand** (or Spot if fault-tolerant).
🎯 **Exam pattern:** "Want flexibility across instance families + Fargate + Lambda" → **Compute Savings Plan**.

### Savings Plans vs Reserved Instances — the key difference

- **RIs** apply to a specific instance attribute (family/region/size/OS/tenancy).
- **Savings Plans** are a **$/hour commitment** for 1 or 3 years that AWS auto-applies to any matching usage.

If you change instance types frequently or use Fargate/Lambda → Savings Plan wins.
If you run a fleet of one specific RDS engine type → RI is fine.

---

## 🗄️ EC2 Storage — EBS, Instance Store, EFS, FSx

| Storage | Type | Where | Persistence | Sharing | Use |
|---------|------|-------|-------------|---------|-----|
| **EBS** | Block | Single AZ, attached over network | Yes, survives stop/terminate (if configured) | Mostly 1 EC2 at a time (io1/io2 can be multi-attach in same AZ) | Boot vols, DBs, general |
| **Instance Store** | Block | Physically attached to host | NO — wiped on stop/terminate | One instance only | Hot cache, scratch, NoSQL temp |
| **EFS** | File (NFS) | Multi-AZ in a region | Yes | Many instances (read+write) across AZs | Shared content, CMS, dev homes |
| **FSx for Windows** | File (SMB) | Multi-AZ optional | Yes | Many Windows clients | Lift-and-shift Windows workloads |
| **FSx for Lustre** | File (HPC) | Single or multi-AZ | Yes (linked to S3) | Many HPC nodes | ML training, HPC, batch processing |

### EBS volume types

| Type | Use | Max IOPS | Max throughput |
|------|-----|----------|----------------|
| **gp3** (general purpose SSD) | Default for most workloads | 16,000 | 1,000 MB/s |
| **gp2** | Older general-purpose SSD | 16,000 | 250 MB/s |
| **io2 Block Express** | Mission-critical, low-latency, high-IOPS | 256,000 | 4,000 MB/s |
| **st1** (throughput-optimized HDD) | Big sequential workloads (Kafka, log streams) | 500 | 500 MB/s |
| **sc1** (cold HDD) | Infrequent access archives | 250 | 250 MB/s |

🎯 **Exam trap:** "Need shared file storage across multiple EC2 instances in different AZs" → **EFS**, NOT EBS (EBS is single-AZ and mostly single-instance).
🎯 **Exam trap:** "Lowest-cost storage for large infrequent-access data" → **sc1** EBS or even better, **S3 Standard-IA / Glacier** if not OS-attached.

---

## 🎯 Placement Groups — Controlling Where Instances Land

| Group | Layout | Use case |
|-------|--------|----------|
| **Cluster** | Same rack, same AZ, low-latency 10/100 Gbps | HPC, tightly coupled |
| **Spread** | Each instance on distinct underlying hardware (max 7 per AZ) | Critical, "no two on same host" apps |
| **Partition** | Logical partitions (each on separate racks); up to 7 partitions per AZ | HDFS, Cassandra, Kafka clusters |

🧠 *"Cluster for speed, Spread for safety, Partition for big-data clusters."*

🎯 **Exam pattern:** "A Cassandra deployment needs to spread across racks so a rack failure won't take down multiple nodes" → **Partition** placement group.

---

## 📈 Auto Scaling Groups (ASG) — The Workhorse Of Resilience

An **ASG** automatically launches and terminates EC2 instances to match demand. Key parameters:

- **Min / Max / Desired** capacity
- **Launch Template** (or older Launch Configuration) — the recipe for new instances (AMI, instance type, SG, IAM role, user-data)
- **Health checks** — EC2 status checks AND optionally ELB health checks
- **Scaling policies** — what triggers scale-out / scale-in

### Scaling policy types

| Policy | When to use |
|--------|-------------|
| **Target tracking** | Easiest. "Keep avg CPU at 50%" — ASG figures out the rest. |
| **Step scaling** | More granular response to CloudWatch alarms (e.g., +2 instances if CPU > 70%, +5 if > 90%). |
| **Scheduled scaling** | Known patterns ("scale up to 20 every weekday at 8 AM"). |
| **Predictive scaling** | ML-based forecast that pre-warms capacity ahead of demand. |

🎯 **Exam pattern:** "Auto-scale based on a predictable daily traffic pattern" → **Scheduled** scaling.
🎯 **Exam pattern:** "We want simple CPU-based scaling with minimal tuning" → **Target tracking**.

### Lifecycle hooks

Pause an instance in `Pending:Wait` (before InService) or `Terminating:Wait` (before being torn down) so you can run setup or graceful shutdown logic. Often paired with SNS/SQS notifications.

---

## ⚖️ Elastic Load Balancers — ALB vs NLB vs GWLB

AWS has three load balancers in scope. Picking the wrong one is a classic exam trap.

| LB | Layer | Protocols | Routing features | Use case |
|----|-------|-----------|------------------|----------|
| **ALB** (Application LB) | L7 | HTTP, HTTPS, gRPC, WebSocket | Path-based, host-based, header-based, query-string, redirects, auth integration | Web/API microservices, containers |
| **NLB** (Network LB) | L4 | TCP, UDP, TLS | Static IP per AZ, ultra-low latency, millions of req/s | Gaming, IoT, TCP services, preserving client IP |
| **GWLB** (Gateway LB) | L3/4 | IP (GENEVE protocol) | Transparent insertion of 3rd-party firewall/IDS appliances | Centralized network virtual appliances (Palo Alto, Fortinet, etc.) |
| **CLB** (Classic — legacy) | L4/L7 | HTTP/HTTPS/TCP | Limited | Don't use for new designs |

### Target types

| Target | Used by | Note |
|--------|---------|------|
| **Instance** | ALB/NLB | EC2 instance IDs |
| **IP** | ALB/NLB | IPs in VPC (incl. on-prem via VPN/DX) |
| **Lambda** | ALB | Invoke Lambda for each request |
| **ALB as target of NLB** | NLB | Route TCP to an ALB |

### Key features by LB

- **ALB:** WAF integration, AWS Cognito user auth at the LB, SSL/SNI, sticky sessions
- **NLB:** Source IP preservation, **static IPs** (or Elastic IPs) — great for whitelisting
- **GWLB:** Bump-in-the-wire pattern for inspecting traffic with vendor appliances

🎯 **Exam pattern:** "Whitelist by IP for a partner firewall" → **NLB** (provides static IPs per AZ).
🎯 **Exam pattern:** "Route `/api/*` to one target group and `/web/*` to another" → **ALB** (path-based routing).
🎯 **Exam pattern:** "Run a fleet of Palo Alto firewalls and route VPC traffic through them" → **GWLB**.

---

## 🚀 Launch Templates vs Launch Configurations

- **Launch Configuration** = the OLD way. Immutable, limited features.
- **Launch Template** = NEW recommended. Versioned, supports newer features (Spot mixed with On-Demand, T3 unlimited mode, multiple instance types, etc.).

ASG with **mixed instances policy** can request, e.g., "70% Spot from these 5 instance types, 30% On-Demand" — for cost-optimized resilient fleets.

---

## 🧪 EC2 Hibernate vs Stop vs Terminate

| Action | RAM preserved? | Boot vol kept? | Instance store kept? | Billing |
|--------|----------------|----------------|----------------------|---------|
| **Stop** | No | Yes (EBS) | No | EBS storage only |
| **Hibernate** | YES (saved to EBS) | Yes | No | EBS storage only |
| **Terminate** | No | No (unless `DeleteOnTermination=false`) | No | Nothing |

Hibernate is great for "long-cached" instances (like dev VDIs) that you want to bring back fast.

---

## 🌐 EC2 Networking Essentials

- **ENI** (Elastic Network Interface) — virtual NIC; can attach/detach.
- **Elastic IP (EIP)** — static public IPv4. Free while attached, charged when not.
- **Security Group** — instance-level virtual firewall, **stateful**. Allow rules only (deny by default).
- **NACL** — subnet-level firewall, **stateless**. Allow AND deny rules; numbered order.
- **Enhanced Networking (ENA/SR-IOV)** — line-rate networking, default on modern types.
- **Placement in private subnet** — typical for app and DB tiers; access via NAT for outbound or VPC endpoints.

🎯 **Exam trap:** "Block specific IPs from reaching my web app" → **NACL** (SGs can't deny). Add an SG allow-only-from-ELB on top.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Spot instances are random and useless for production" | Modern Spot has long average runtimes and 2-min warning; great for stateless web tiers and batch with checkpointing. |
| "Reserved Instance = guaranteed capacity" | RIs are a *billing discount*. For capacity guarantee, use a **Capacity Reservation**. |
| "An ASG load-balances traffic" | NO — ASG only launches/terminates. The ELB does the traffic distribution. |
| "ALB supports TCP / UDP" | NO — ALB is HTTP/HTTPS/WebSocket/gRPC only. Use NLB for raw TCP/UDP. |
| "EBS is multi-AZ" | NO — EBS is single-AZ. Use snapshots (which are stored in S3, regional) to recreate in another AZ. |
| "EC2 cost = instance cost only" | Cost = instance + EBS + data transfer OUT + EIP-when-not-attached + LB hours. Watch them all. |

---

## 🚨 Exam Traps

1. **"Lowest cost, fault-tolerant batch"** → Spot (don't say On-Demand).
2. **"Steady predictable 3-year workload"** → Reserved Instance, Standard, 3yr, all upfront.
3. **"Need to maintain client source IP at L4"** → NLB (or ALB with X-Forwarded-For at L7).
4. **"Static IPs for whitelisting"** → NLB.
5. **"Path-based routing"** → ALB.
6. **"Shared file storage across AZs"** → EFS, not EBS.
7. **"Instance store survives a reboot but not stop/terminate"** → True. Don't store critical data there.
8. **"Auto-scaling can't replace a load balancer"** — they pair together.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **AMI** | Amazon Machine Image — the OS+software template for an EC2 launch |
| **EBS** | Elastic Block Store — network-attached block storage, single-AZ |
| **Instance Store** | Ephemeral block storage on the physical host |
| **EFS / FSx** | Managed file storage (NFS / SMB / Lustre) |
| **Placement Group** | Hint to AWS about how to place instances (cluster/spread/partition) |
| **ASG** | Auto Scaling Group |
| **Launch Template** | Reusable, versioned recipe for launching instances |
| **ALB / NLB / GWLB** | Application / Network / Gateway Load Balancers |
| **Target Group** | A set of targets (EC2 IDs, IPs, Lambdas, or ALB) for an LB to route to |
| **Hibernate** | Save RAM to EBS and stop; restart with state intact |
| **Spot Instance** | Spare capacity at huge discount; can be reclaimed with 2-min notice |
| **Savings Plan** | Hourly $-spend commitment for 1 or 3 years across many compute services |
| **Capacity Reservation** | Reserves capacity in an AZ without a discount commitment |
| **ENI / EIP** | Elastic Network Interface / Elastic IP |

---

## ✅ Module 3 Summary

You now know:
- 💻 The instance family letters (T/M/C/R/I/G/P) and what each is for
- 💰 All 8 purchase options and when to pick which
- 🗄️ EBS vs Instance Store vs EFS vs FSx
- 🎯 Placement groups (cluster/spread/partition)
- 📈 ASG with launch templates and scaling policy types
- ⚖️ ALB vs NLB vs GWLB and target types
- 🚨 The 8 most-tested EC2 exam traps

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md) (target: 20/24)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 4: VPC Deep Dive](../Module-04-VPC-Deep-Dive/Reading.md)

---

## 📚 Further Reading

- 📖 **[EC2 User Guide (official)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/)**
- 📖 **[EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/)**
- 📖 **[Savings Plans User Guide](https://docs.aws.amazon.com/savingsplans/latest/userguide/)**
- 📖 **[ELB Comparison (official)](https://aws.amazon.com/elasticloadbalancing/features/#Product_comparisons)**
- 📖 **[Auto Scaling Best Practices](https://docs.aws.amazon.com/autoscaling/ec2/userguide/scaling-plan-design.html)**
