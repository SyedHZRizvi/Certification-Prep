# 📋 Module 1 Cheat Sheet: Cloud & AWS Fundamentals

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## ☁️ The Official Definition (MEMORIZE)

> **"Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing."**

---

## 💰 The 6 Benefits of Cloud

```
1. Trade fixed (CapEx) → variable (OpEx)
2. Benefit from massive economies of scale
3. Stop guessing capacity (auto-scale!)
4. Increase speed and agility
5. Stop spending on running data centers
6. Go global in minutes
```
🧠 Memory: **"Vivian Sees Crazy Speedy Donkeys Galloping"**

---

## 🏗️ IaaS vs PaaS vs SaaS

| Model | You Manage | AWS Manages | AWS Example |
|-------|------------|-------------|-------------|
| **IaaS** | OS, runtime, app, data | HW, network, virt. | EC2, EBS, VPC |
| **PaaS** | App + data | Everything else | Elastic Beanstalk, RDS |
| **SaaS** | Just settings + data | Entire stack | WorkMail, Chime, QuickSight |

🎯 *"Customer patches the OS"* = IaaS. *"AWS patches the OS"* = PaaS/SaaS.

---

## 🌍 Deployment Models

| Model | Where |
|-------|-------|
| **Public cloud** | All in AWS |
| **Private cloud** | Your own DC (or GovCloud) |
| **Hybrid** | On-prem + cloud, connected (Outposts, Direct Connect) |

---

## 🗺️ AWS Global Infrastructure — 4 Layers

```
🌍 Region (geographic area, e.g. us-east-1)
   └─ 🏢 AZ (1+ datacenters, low-latency private fiber)
        └─ 📡 Edge Location (CDN/DNS PoP, 400+ cities)
             └─ 🌐 Regional Edge Cache (CloudFront mid-tier)
```

| Layer | Pick yourself? | Used by |
|-------|----------------|---------|
| Region | ✅ | All services |
| AZ | ✅ (per service) | EC2, RDS, EBS |
| Edge | ❌ (auto) | CloudFront, Route 53, WAF |

🔥 **HA inside a region = multi-AZ. DR = multi-Region.**

---

## 🏝️ Edge / Extension Services (don't mix these up!)

| Service | What it is |
|---------|------------|
| **Local Zones** | Region extension in a metro (LA, Boston, Phoenix) for low-latency apps |
| **Wavelength** | AWS compute *inside* 5G carrier networks |
| **Outposts** | AWS hardware racks in YOUR datacenter (hybrid) |
| **GovCloud** | Isolated Regions for US gov (FedRAMP High, ITAR) |
| **China regions** | Operated by Chinese partners (separate account!) |

---

## 🛠️ 4 Ways To Interact

| Tool | Use case |
|------|----------|
| **Console** | Learning, ad-hoc tasks |
| **CLI** | Scripting (`aws s3 ls`) |
| **SDKs** | App code (Python boto3, JS aws-sdk) |
| **IaC** | Repeatable infra (CloudFormation, CDK) |

🎯 "Repeatable / version-controlled infra" = **CloudFormation** (or CDK).

---

## 🎁 Free Tier (3 Flavors)

| Type | Duration | Example |
|------|----------|---------|
| **12-Months** | 1st year | 750 hrs/mo t2.micro EC2, 5 GB S3 |
| **Always Free** | Forever | 1M Lambda invocations, 25 GB DynamoDB |
| **Trials** | 30–60 days | Inspector, Redshift trial |

---

## 🏆 Exam Power Phrases

Usually right when you see:

- ✅ "Choose a Region close to users / for compliance"
- ✅ "Deploy across multiple Availability Zones"
- ✅ "Use CloudFront for global low-latency delivery"
- ✅ "Use CloudFormation for repeatable infrastructure"
- ✅ "Pay-as-you-go / on-demand"

Usually wrong:

- ❌ "Buy more servers upfront"
- ❌ "Use a single AZ for high availability"
- ❌ "Edge Locations can run EC2"
- ❌ "Data automatically replicates across regions"
- ❌ "Public cloud means anyone can see your data"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Single-AZ production deployment claimed as "highly available"
- ❌ Storing GDPR data in a US Region with no replication controls
- ❌ "Cloud will always be cheaper" — not true for steady predictable workloads
- ❌ Treating Edge Locations as substitutes for AZs

---

## 🗓️ Key Facts

- 30+ Regions, 96+ AZs, 400+ Edge Locations (as of 2026)
- Each Region has at least 3 AZs (some have 6)
- AZ-to-AZ distance: ~10–100 km, private fiber
- `us-east-1` (N. Virginia) is the oldest, cheapest, gets new services first
- Exam cost: $100. Length: 90 min, 65 Qs. Pass: 700/1000.

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. AWS definition of cloud computing? ___
2. 6 benefits of cloud? ___
3. Region vs AZ vs Edge — one line each? ___
4. Outposts vs Wavelength vs Local Zones? ___
5. Best tool for repeatable infra? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: Core Compute](../Module-02-Core-Compute/Reading.md)
