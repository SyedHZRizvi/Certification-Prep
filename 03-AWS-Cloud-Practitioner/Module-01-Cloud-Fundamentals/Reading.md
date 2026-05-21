# Module 1: Cloud & AWS Fundamentals ☁️

> **Why this module matters:** Before you touch a single AWS service, you need to *think* like a cloud architect. This module rewires your brain from "data center" to "cloud" — and once you get it, EC2, S3, Lambda, all of it, makes sense in 10 seconds instead of an hour.

---

## 🍕 A Story: Maria Opens A Second Pizza Shop

Remember Maria from the Scrum course? Her pizza shop is doing great. She wants to expand to Boston.

**Old-school approach (on-premises):**
- Lease a building in Boston: 3 months
- Buy ovens, fridges, POS terminals: $80,000 upfront, 6-week shipping
- Hire IT to install the inventory system: $20,000
- Wait for the phone company to install internet: 2 weeks
- Pre-pay 12 months of rent and electricity to lock in pricing
- **Total time before serving a single pizza: 5 months. Total committed cost: ~$300,000.**

What if Boston doesn't like her pizza? She's stuck.

**Cloud approach:**
- Pay-as-you-go shared kitchen space (rent by the hour)
- Equipment included, no upfront cost
- Inventory system: log in, it's already installed
- Internet: instant, included
- If it's a flop, walk away tomorrow. If it explodes, expand the same day.

**That's cloud computing.** You stop *owning* infrastructure (CapEx) and start *renting* it (OpEx) — on demand, billed by the second, scaled to whatever you need this minute.

AWS is the world's largest "shared kitchen for software." That's it. That's the whole pitch.

---

## ☁️ What Is "The Cloud," Really?

**The cloud is just someone else's computer.** Specifically: someone else's data center, full of servers, that you rent on demand over the internet.

AWS officially defines cloud computing as:

> *"The on-demand delivery of IT resources over the internet with pay-as-you-go pricing."*

🔥 **MEMORIZE THIS.** That definition shows up on the exam almost verbatim.

The three pieces:
1. **On-demand** — get what you want, when you want it, in seconds
2. **Over the internet** — no need to buy or rack hardware yourself
3. **Pay-as-you-go** — no upfront cost; pay only for what you use

---

## 💰 The 6 Benefits of Cloud (AWS Loves This List)

The CLF-C02 exam asks about these in roughly this order of frequency:

| # | Benefit | One-line meaning |
|---|---------|------------------|
| 1 | **Trade fixed expense for variable expense** | CapEx → OpEx (no $$$ upfront) |
| 2 | **Benefit from massive economies of scale** | AWS buys 10M servers, you get the bulk discount |
| 3 | **Stop guessing capacity** | Auto-scale up or down in minutes |
| 4 | **Increase speed and agility** | Launch a server in seconds, not months |
| 5 | **Stop spending money on running data centers** | Focus on customers, not racks of metal |
| 6 | **Go global in minutes** | Deploy to 6 continents with a few clicks |

🧠 Memory hook: **"Variable Scale Capacity Speed Datacenters Global"** → "Vivian Sees Crazy Speedy Donkeys Galloping."

---

## 🏗️ The 3 Cloud Service Models (IaaS / PaaS / SaaS)

This is on every cloud exam. The trick: **how much do YOU manage vs. how much does the provider manage?**

```
   YOU MANAGE MORE                         PROVIDER MANAGES MORE
   ←─────────────────────────────────────────────────────────────→
   On-Premises   IaaS         PaaS              SaaS
   (your DC)    (EC2)     (Elastic Beanstalk)  (Gmail, Office365)
```

| Model | What you control | What AWS controls | Example AWS services |
|-------|------------------|-------------------|----------------------|
| **IaaS** (Infrastructure) | OS, runtime, app, data | Virtualization, servers, storage, network | EC2, EBS, VPC |
| **PaaS** (Platform) | Just your app + data | Everything below the runtime | Elastic Beanstalk, RDS, Lambda* |
| **SaaS** (Software) | Just your settings/data | The entire stack including app | Amazon Chime, WorkMail, QuickSight |

*Lambda is often called "FaaS" (Function-as-a-Service), a sub-category of PaaS.

🎯 **Exam trick:** If a question says *"the customer is responsible for patching the operating system,"* that's IaaS (almost certainly EC2). If it says *"AWS manages the OS,"* it's PaaS or higher.

---

## 🌍 The 3 Cloud Deployment Models

Don't confuse these with the service models above.

| Model | What it means | Real example |
|-------|---------------|--------------|
| **Cloud (public)** | All in AWS / Azure / GCP | A startup running fully on AWS |
| **Hybrid** | Mix of on-prem + cloud, connected | Bank with private datacenter + S3 backups + AWS Direct Connect |
| **On-premises / Private** | Your own datacenter only (no public cloud) | Government secure facility, AWS Outposts running in your DC |

🎯 **Exam trap:** "Private cloud" can be your own datacenter OR a dedicated AWS region (e.g. AWS GovCloud). AWS Outposts brings AWS hardware *into your building* — that's a **hybrid** deployment.

---

## 🗺️ The AWS Global Infrastructure (4 Layers)

This is the single most-tested topic in Module 1. AWS organizes its physical world into 4 layers, from biggest to smallest:

```
🌍 Regions  →  🏢 Availability Zones  →  📡 Edge Locations  →  🌐 Regional Edge Caches
```

### 1️⃣ Regions

A **Region** is a geographic area (city-ish) with multiple datacenters. Examples:
- `us-east-1` (N. Virginia) — the OLDEST and CHEAPEST region; most new services launch here first
- `us-west-2` (Oregon)
- `eu-west-1` (Ireland)
- `ap-southeast-1` (Singapore)
- `sa-east-1` (São Paulo)

As of 2026, AWS has **30+ Regions** worldwide. You pick a region based on:
1. **Latency** — closer to users = faster
2. **Compliance / data sovereignty** — EU data must stay in EU regions (GDPR)
3. **Service availability** — not every service is in every region (e.g. new GenAI services often launch in `us-east-1` first)
4. **Cost** — `us-east-1` is usually the cheapest

🚨 **Exam Trap:** Data does NOT automatically replicate across regions. If you upload to S3 in `eu-west-1` and the region goes down, your data is unavailable unless you set up **Cross-Region Replication** explicitly.

### 2️⃣ Availability Zones (AZs)

An **AZ** is one or more discrete datacenters within a Region, each with independent power, cooling, and network. AZs are connected to each other with low-latency private fiber.

- Each Region has **3+ AZs** (most have 3; some have 6)
- AZs are named like `us-east-1a`, `us-east-1b`, `us-east-1c`
- Distance between AZs: **~10–100 km apart** (close enough for sync replication, far enough for disaster isolation)

🔥 **MEMORIZE THIS exam pattern:** "How do you achieve high availability inside a region?" → **Deploy across multiple AZs.** "How do you achieve disaster recovery against region failure?" → **Use multiple Regions.**

### 3️⃣ Edge Locations

**Edge Locations** are smaller AWS sites in **400+ cities** worldwide. They cache content close to end-users for low latency.

Used primarily by:
- **CloudFront** (CDN)
- **Route 53** (DNS resolution)
- **AWS Global Accelerator**
- **AWS WAF / Shield** (DDoS protection terminates at edge)

🎯 **Exam pattern:** "User in Tokyo loads a video from a US-hosted S3 bucket — how do you make it fast?" → CloudFront caches the video at a Tokyo edge location.

### 4️⃣ Regional Edge Caches

A middle tier between Edge Locations and the origin. Larger than edge caches; absorb objects evicted from edges so origin doesn't get re-hit. You don't manage them directly — CloudFront uses them automatically.

---

## 🏢 AZs vs. Regions vs. Edges — Quick Comparison

| Concept | Scale | Purpose | You pick? |
|---------|-------|---------|-----------|
| Region | Country / metro | Geographic isolation, compliance | ✅ Yes |
| Availability Zone | Datacenter cluster | High availability within region | ✅ Yes (per service) |
| Edge Location | City PoP | Low-latency content delivery | ❌ Auto-selected |
| Regional Edge Cache | Multi-city tier | CloudFront mid-tier caching | ❌ Auto |

---

## 🛠️ How To Interact With AWS (4 Ways)

| Interface | Best for | Example |
|-----------|----------|---------|
| **Management Console** | Learning, exploring, click-ops | <https://console.aws.amazon.com> |
| **AWS CLI** | Scripting, automation, terminal jocks | `aws s3 ls`, `aws ec2 run-instances` |
| **AWS SDKs** | Building apps that call AWS | Python `boto3`, JavaScript `aws-sdk`, Java, .NET, Go |
| **Infrastructure as Code** | Repeatable infra (the right answer for production) | CloudFormation, AWS CDK, Terraform |

Sample CLI snippet:
```bash
# List all S3 buckets in your account
aws s3 ls

# Launch a t2.micro EC2 instance
aws ec2 run-instances --image-id ami-0abcdef1234567890 \
  --instance-type t2.micro --count 1
```

🎯 **Exam pattern:** "Customer wants repeatable, version-controlled infrastructure" → **CloudFormation** (or AWS CDK). Never "do it in the console."

---

## 📜 The AWS Free Tier (3 Flavors)

AWS gives newcomers a free tier — and the exam tests that you know the **three different types**:

| Free Tier Type | How long | Example |
|----------------|----------|---------|
| **12-Months Free** | First year of account | 750 hrs/mo of `t2.micro` EC2, 5 GB S3 |
| **Always Free** | Forever | 1M Lambda invocations/mo, 25 GB DynamoDB |
| **Trials** | Short windows (30–60 days) | Amazon Inspector, Amazon Redshift trial |

🎯 **Exam trap:** "Forever free" is a real category — it's not just the 12-month tier.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "AWS is just servers in the cloud" | AWS has 200+ services: compute, storage, AI, IoT, satellite, even quantum |
| "Regions and AZs are the same" | A Region *contains* multiple AZs. Don't confuse them. |
| "Edge Locations are mini-Regions" | No — Edges only cache content; you can't launch an EC2 in an edge location |
| "Public cloud means anyone can access my data" | "Public" describes the *infrastructure model*, not your data permissions |
| "Cloud is always cheaper" | For steady, predictable workloads, on-prem can be cheaper. Cloud wins on variable / unknown workloads |
| "Cloud means no responsibilities" | You still own your data, app code, IAM, OS patching (if IaaS), etc. → Shared Responsibility Model |

---

## 🚨 Exam Traps Specific To This Module

1. **"AWS Local Zones"** — extensions of a Region close to major metro areas (LA, Phoenix, Boston). Not the same as Edge Locations. Use for latency-sensitive workloads that need EC2 close to users.
2. **"AWS Wavelength"** — embeds AWS compute *inside 5G telecom networks* for single-digit-millisecond mobile latency.
3. **"AWS Outposts"** — physical AWS racks in YOUR datacenter. Hybrid deployment. Same APIs as the public cloud.
4. **"GovCloud"** — isolated regions for US government workloads requiring ITAR / FedRAMP High compliance. You apply to access.
5. **"China regions"** — operated by Chinese partners (Sinnet, NWCD), separate from global AWS, separate accounts required.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Cloud computing** | On-demand IT resources over the internet with pay-as-you-go pricing |
| **CapEx** | Capital Expense — big upfront spend on hardware (data centers) |
| **OpEx** | Operating Expense — pay-as-you-go, monthly bill (cloud) |
| **IaaS** | Infrastructure as a Service (e.g. EC2) |
| **PaaS** | Platform as a Service (e.g. Elastic Beanstalk) |
| **SaaS** | Software as a Service (e.g. Amazon WorkMail) |
| **Region** | Geographic area containing multiple AZs |
| **Availability Zone (AZ)** | One or more discrete datacenters within a Region |
| **Edge Location** | PoP that caches content close to end-users (CloudFront, Route 53) |
| **AWS Local Zone** | Region extension in a major metro for low-latency apps |
| **AWS Wavelength** | AWS compute inside 5G carrier networks |
| **AWS Outposts** | AWS hardware racks deployed in your own data center |
| **GovCloud** | Isolated AWS region for US government compliance |
| **Free Tier** | Free AWS usage: 12-month, Always Free, or Trial |
| **Elasticity** | Ability to scale compute up/down automatically with demand |
| **Scalability** | Capacity to handle growing load (vertical = bigger server; horizontal = more servers) |
| **High Availability (HA)** | System that remains operational despite failures (multi-AZ) |
| **Fault Tolerance** | System that continues correctly *even when components fail* (stronger than HA) |
| **Disaster Recovery (DR)** | Plan to recover from a region-level outage or catastrophe |

---

## ✅ Module 1 Summary

You now know:
- ☁️ The official AWS definition of cloud computing
- 💰 The 6 benefits of cloud (Variable, Scale, Capacity, Speed, Datacenters, Global)
- 🏗️ IaaS vs PaaS vs SaaS — and who manages what
- 🌍 Public vs Private vs Hybrid deployment models
- 🗺️ Regions (geographic), AZs (datacenters), Edge Locations (cache PoPs)
- 🇺🇸 GovCloud, China regions, Local Zones, Wavelength, Outposts
- 🛠️ Console, CLI, SDK, IaC as ways to interact with AWS
- 🎁 The 3 flavors of AWS Free Tier

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md) (aim for 22/24)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Core Compute](../Module-02-Core-Compute/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [AWS Global Infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/) — interactive map
- 📖 [AWS Cloud Adoption Framework (CAF)](https://aws.amazon.com/cloud-adoption-framework/) — covered more in Module 8
- 📖 [What is Cloud Computing?](https://aws.amazon.com/what-is-cloud-computing/) — official AWS intro
- 📖 [AWS Free Tier](https://aws.amazon.com/free/) — create an account, try services free
- 📖 [AWS Cloud Practitioner Exam Guide (PDF)](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf) — read this every week
