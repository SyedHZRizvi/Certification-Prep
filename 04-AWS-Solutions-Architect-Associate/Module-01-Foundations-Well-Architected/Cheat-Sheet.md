# 📋 Module 1 Cheat Sheet: AWS Foundations & Well-Architected

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌍 Global Infrastructure (Memorize)

```
REGION  >  AZ  >  Data Center  >  Rack  >  Server
                       (1+ per AZ)

EDGE LOCATION  →  CloudFront, Route 53, Global Accelerator, Shield
LOCAL ZONE     →  Compute in major metros (low-latency to a city)
WAVELENGTH     →  In 5G telco network
OUTPOST        →  AWS hardware in YOUR data center
```

| Concept | Survives... | Costs |
|---------|-------------|-------|
| Single AZ | Server failure | Cheapest |
| Multi-AZ | Full AZ outage | Modest extra |
| Multi-Region | Full region outage | Expensive |

---

## 🏛️ The 6 Pillars (MEMORIZE)

| Pillar | Keyword In Questions |
|--------|----------------------|
| **Operational Excellence** | automation, IaC (Infrastructure as Code), CloudFormation, runbook |
| **Security** | least privilege, encryption, KMS, IAM (Identity and Access Management), audit |
| **Reliability** | Multi-AZ, ASG, RPO (Recovery Point Objective), RTO (Recovery Time Objective), failover |
| **Performance Efficiency** | low latency, throughput, caching, right-sized |
| **Cost Optimization** | cheapest, Spot, lifecycle, Reserved |
| **Sustainability** | Graviton, serverless, managed, energy |

🧠 **Mnemonic:** *"Pretty Robust Systems Cost Operators Sleep"* (Performance, Reliability, Security, Cost, Ops, Sustainability)

---

## 🤝 Shared Responsibility (one line)

> **AWS:** security **OF** the cloud (hardware, hypervisor, facilities).
> **You:** security **IN** the cloud (data, IAM, OS on EC2 (Elastic Compute Cloud), app code).

| Service | YOU patch OS? |
|---------|---------------|
| EC2 | ✅ Yes |
| RDS (Relational Database Service) | ❌ No (AWS does) |
| Lambda | ❌ No (no OS to patch) |
| S3 (Simple Storage Service) | ❌ No |

---

## 💵 The 3 Cost Drivers

1. **Compute**, per second/hour (EC2, Lambda)
2. **Storage**, per GB-month (S3, EBS, EFS)
3. **Data transfer OUT to internet**, $0.05–$0.09/GB

🧠 *"Data IN is FREE. Data OUT bleeds you dry."*

➡️ Costly egress? Put **CloudFront** in front.

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Multi-AZ for HA"
- "Use a managed service to reduce operational overhead"
- "Encrypt at rest with KMS"
- "Apply least privilege via IAM"
- "Use CloudFront to reduce egress and latency"
- "Use Auto Scaling to match demand"
- "Use Reserved Instances / Savings Plans for predictable workloads"

❌ Usually wrong:

- "Use the root account daily"
- "Hard-code credentials in source"
- "Run a single EC2 instance in one AZ for production"
- "Skip encryption to reduce cost"
- "Always pick the cheapest, even if SLA (Service Level Agreement) breaks"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Using **root** account for day-to-day work
- ❌ **Single AZ** for production with HA requirement
- ❌ **No CloudTrail** in a regulated workload
- ❌ **Public S3 bucket** with sensitive data
- ❌ **Over-provisioned EC2** running 24/7 for a 2-hour daily job (use Spot, Lambda, or schedule)
- ❌ Mixing **multi-AZ** and **multi-region** in answers (they solve different problems)

---

## 🗓️ Exam Facts (SAA-C03)

| Item | Value |
|------|-------|
| Questions | 65 (50 scored) |
| Time | 130 min |
| Pass | 720/1000 (~72%) |
| Cost | $150 USD |
| Validity | 3 years |
| Domain mix | Security 30 / Resilient 26 / High-perf 24 / Cost 20 |

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. What's the difference between AZ and region? ___
2. List the 6 pillars from memory ___
3. On EC2, who patches the OS? ___
4. What does Multi-AZ NOT protect against? ___
5. What does "most cost-effective" mean on the exam? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: IAM & Organizations](../Module-02-IAM-Organizations/Reading.md)
