# 📋 Module 2 Cheat Sheet: Core Compute

> One page. Print it. Tape it to your monitor.

---

## 🧠 The Decision Tree (memorize this!)

```
"Do I need a full OS?"
   ├─ YES → EC2 (Elastic Compute Cloud) (or Lightsail for simple)
   ├─ "Just a container?" → ECS (Elastic Container Service)/EKS (Elastic Kubernetes Service) on Fargate
   └─ "Just code on an event (<15 min)?" → Lambda
```

---

## 🖥️ EC2 Instance Families

| Letter | Type | Best for |
|--------|------|----------|
| `t`, `m` | General | Web servers, dev |
| `c` | Compute | CPU-heavy batch |
| `r`, `x`, `z` | Memory | In-memory DBs |
| `i`, `d`, `h` | Storage | NoSQL, warehouses |
| `p`, `g`, `inf`, `trn` | Accelerated | ML, graphics |

🧠 **"T-Shirt Cost Money But Saves Plenty"**

---

## 💰 EC2 Pricing Models (KNOW THESE)

| Model | Discount | Commit | When |
|-------|----------|--------|------|
| **On-Demand** | 0% | None | Spiky, unpredictable |
| **Reserved (RI)** | up to 72% | 1 or 3 yr | Steady 24/7 |
| **Savings Plan** | up to 72% | 1 or 3 yr | Flexible (any family, EC2/Fargate/Lambda) |
| **Spot** | up to 90% | None (2-min reclaim) | Fault-tolerant batch, CI |
| **Dedicated Host** |, | Physical server | BYOL licensing |
| **Dedicated Instance** | small premium | Single-tenant HW | Compliance |
| **Capacity Reservation** | none | Capacity guarantee | DR / launch events |

🎯 **Match the keyword:**
- "Cheapest + interruptible" → Spot
- "Steady + committed" → Reserved or Savings Plan
- "Cross-family flexibility" → Savings Plan
- "BYOL Windows / Oracle" → Dedicated Host

---

## 🧊 EC2 Lifecycle Billing

| State | Compute | EBS |
|-------|---------|-----|
| Running | ✅ | ✅ |
| Stopped | ❌ | ✅ |
| Hibernated | ❌ | ✅ + RAM dump |
| Terminated | ❌ | ❌ |

🚨 Stopped ≠ Free. Terminate to fully stop charges.

---

## 🐳 Container Stack

```
   ECR (image registry)
        ↓
   ECS or EKS (orchestrator)
        ↓
   Fargate (serverless) OR EC2 (you manage)
```

| Service | When |
|---------|------|
| **ECS** | Simpler container orchestration |
| **EKS** | You want Kubernetes |
| **Fargate** | Don't manage EC2 hosts |
| **ECR** | Store Docker images |
| **App Runner** | One-click container deploys |

---

## ⚡ AWS Lambda Headline Limits

| Limit | Value |
|-------|-------|
| Max runtime | **15 min** |
| Memory | 128 MB → 10 GB |
| `/tmp` | 512 MB → 10 GB |
| Concurrent execs | 1,000/Region (soft) |
| Languages | Node, Python, Java, Go, .NET, Ruby, container |

Pay = (requests) × (memory × ms compute). No idle cost.

---

## 🏝️ Easy-Mode Compute

| Service | One-liner |
|---------|-----------|
| **Lightsail** | Bundled VPS, monthly bill, easy |
| **Elastic Beanstalk** | Upload code, AWS handles infra (free service) |
| **App Runner** | One-click container deploys |
| **AWS Batch** | Queues batch jobs, picks EC2/Fargate |
| **Outposts** | AWS rack in your DC |
| **Wavelength** | EC2 in 5G networks |

---

## 📈 The HA Pattern (drill it into your head)

```
  Internet → ELB → ASG → [EC2-AZ-a][EC2-AZ-b][EC2-AZ-c]
                  ↑
              CloudWatch alarms
```

= Multi-AZ Auto Scaling Group behind an Elastic Load Balancer.

---

## 🏆 Exam Power Phrases

Usually right:

- ✅ "Use Lambda for event-driven, short-lived code"
- ✅ "Use Spot for fault-tolerant batch workloads"
- ✅ "Use Savings Plans for predictable usage"
- ✅ "Use Fargate to run containers without managing servers"
- ✅ "Use ASG + ELB across multiple AZs for HA"

Usually wrong:

- ❌ "Lambda for a 1-hour job"
- ❌ "Spot for a production database"
- ❌ "Single AZ is highly available"
- ❌ "Stopped EC2 incurs no charges"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Running batch on On-Demand instead of Spot (wasted money)
- ❌ Using Lambda for >15-min jobs
- ❌ Hosting a stateful DB on Spot
- ❌ Single-AZ "production" workloads
- ❌ Letting RIs lapse without monitoring

---

## ✏️ Quick Self-Check

1. EC2 family letters and what each is for? ___
2. 4 main pricing models? ___
3. Lambda max runtime? ___
4. Fargate vs EC2 launch type? ___
5. ASG vs ELB, what does each do? ___

---

➡️ [Module 3: Core Storage](../Module-03-Core-Storage/Reading.md)
