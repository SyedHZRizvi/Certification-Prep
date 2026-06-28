# Module 1: Cloud & AWS Fundamentals ☁️

> **Why this module matters:** Before you touch a single AWS service, you need to *think* like a cloud architect. This module rewires your brain from "data center" to "cloud", and once you get it, EC2 (Elastic Compute Cloud), S3 (Simple Storage Service), Lambda, all of it, makes sense in 10 seconds instead of an hour.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic IT literacy: what a server is, what a data center is, what an IP address is
> - Light economics fluency: capital expense vs operating expense, depreciation in one paragraph
> - Comfort with simple ratios (utilization %, $/hour, breakeven point)
>
> No prior AWS experience is required, this is the foundation the rest of the course builds on. If terms like "hypervisor," "tenancy," or "elastic" are new, that's fine; the module defines each. If you have completed a basic IT course (CompTIA A+, Network+, or any cloud-fundamentals MOOC), skim quickly and use this as a vocabulary refresher for AWS-specific terms (Region, AZ, Edge Location, Outposts).

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

**That's cloud computing.** You stop *owning* infrastructure (CapEx) and start *renting* it (OpEx), on demand, billed by the second, scaled to whatever you need this minute.

AWS is the world's largest "shared kitchen for software." That's it. That's the whole pitch.

---

## ☁️ What Is "The Cloud," Really?

**The cloud is just someone else's computer.** Specifically: someone else's data center, full of servers, that you rent on demand over the internet.

AWS officially defines cloud computing as:

> *"The on-demand delivery of IT resources over the internet with pay-as-you-go pricing."*

🔥 **MEMORIZE THIS.** That definition shows up on the exam almost verbatim.

The three pieces:

1. **On-demand**, get what you want, when you want it, in seconds
2. **Over the internet**, no need to buy or rack hardware yourself
3. **Pay-as-you-go**, no upfront cost; pay only for what you use

---

## 💰 The 6 Benefits of Cloud (AWS Loves This List)

These six benefits trace back to Andy Jassy's 2012 re:Invent keynote and are formalized in the **AWS Cloud Adoption Framework (AWS CAF)** first published by AWS in 2015, last refreshed in 2023 and in Nicholas Carr's *The Big Switch: Rewiring the World, from Edison to Google* (Norton, 2008), which made the original "computing as a utility" argument that AWS productized. The CLF-C02 exam asks about them in roughly this order of frequency:

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

## 🏗️ The 3 Cloud Service Models (IaaS (Infrastructure as a Service) / PaaS (Platform as a Service) / SaaS (Software as a Service))

The IaaS / PaaS / SaaS taxonomy comes from NIST's **Special Publication 800-145 "The NIST Definition of Cloud Computing"** (Mell & Grance, NIST, September 2011). Every exam blueprint AWS, Azure, GCP (Google Cloud Platform), CompTIA Cloud+, references this definition. The trick: **how much do YOU manage vs. how much does the provider manage?**

```
   YOU MANAGE MORE                         PROVIDER MANAGES MORE
   ←─────────────────────────────────────────────────────────────→
   On-Premises   IaaS         PaaS              SaaS
   (your DC)    (EC2)     (Elastic Beanstalk)  (Gmail, Office365)
```

| Model | What you control | What AWS controls | Example AWS services |
|-------|------------------|-------------------|----------------------|
| **IaaS** (Infrastructure) | OS, runtime, app, data | Virtualization, servers, storage, network | EC2, EBS, VPC (Virtual Private Cloud) |
| **PaaS** (Platform) | Just your app + data | Everything below the runtime | Elastic Beanstalk, RDS (Relational Database Service), Lambda* |
| **SaaS** (Software) | Just your settings/data | The entire stack including app | Amazon Chime, WorkMail, QuickSight |

*Lambda is often called "FaaS" (Function-as-a-Service), a sub-category of PaaS.

🎯 **Exam trick:** If a question says *"the customer is responsible for patching the operating system,"* that's IaaS (almost certainly EC2). If it says *"AWS manages the OS,"* it's PaaS or higher.

---

## 🌍 The 3 Cloud Deployment Models

These four deployment models (public / private / hybrid / community) are also from **NIST SP 800-145** (Mell & Grance, 2011), the same paper that defines IaaS/PaaS/SaaS. AWS markets a fourth bucket, "multi-cloud," that NIST does not formally define. Don't confuse deployment models with service models above.

| Model | What it means | Real example |
|-------|---------------|--------------|
| **Cloud (public)** | All in AWS / Azure / GCP | A startup running fully on AWS |
| **Hybrid** | Mix of on-prem + cloud, connected | Bank with private datacenter + S3 backups + AWS Direct Connect |
| **On-premises / Private** | Your own datacenter only (no public cloud) | Government secure facility, AWS Outposts running in your DC |

🎯 **Exam trap:** "Private cloud" can be your own datacenter OR a dedicated AWS region (e.g. AWS GovCloud). AWS Outposts brings AWS hardware *into your building*, that's a **hybrid** deployment.

---

## 🗺️ The AWS Global Infrastructure (4 Layers)

This is the single most-tested topic in Module 1. AWS organizes its physical world into 4 layers, from biggest to smallest:

```
🌍 Regions  →  🏢 Availability Zones  →  📡 Edge Locations  →  🌐 Regional Edge Caches
```

### 1️⃣ Regions

A **Region** is a geographic area (city-ish) with multiple datacenters. Examples:

- `us-east-1` (N. Virginia), the OLDEST and CHEAPEST region; most new services launch here first
- `us-west-2` (Oregon)
- `eu-west-1` (Ireland)
- `ap-southeast-1` (Singapore)
- `sa-east-1` (São Paulo)

As of 2026, AWS has **30+ Regions** worldwide. You pick a region based on:

1. **Latency**, closer to users = faster
2. **Compliance / data sovereignty**, EU data must stay in EU regions (GDPR (General Data Protection Regulation))
3. **Service availability**, not every service is in every region (e.g. new GenAI services often launch in `us-east-1` first)
4. **Cost**, `us-east-1` is usually the cheapest

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

- **CloudFront** (CDN (Content Delivery Network))
- **Route 53** (DNS (Domain Name System) resolution)
- **AWS Global Accelerator**
- **AWS WAF (Web Application Firewall) / Shield** (DDoS (Distributed Denial of Service) protection terminates at edge)

🎯 **Exam pattern:** "User in Tokyo loads a video from a US-hosted S3 bucket, how do you make it fast?" → CloudFront caches the video at a Tokyo edge location.

### 4️⃣ Regional Edge Caches

A middle tier between Edge Locations and the origin. Larger than edge caches; absorb objects evicted from edges so origin doesn't get re-hit. You don't manage them directly, CloudFront uses them automatically.

---

## 🏢 AZs vs. Regions vs. Edges, Quick Comparison

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
| **AWS CLI (Command Line Interface)** | Scripting, automation, terminal jocks | `aws s3 ls`, `aws ec2 run-instances` |
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

AWS gives newcomers a free tier, and the exam tests that you know the **three different types**:

| Free Tier Type | How long | Example |
|----------------|----------|---------|
| **12-Months Free** | First year of account | 750 hrs/mo of `t2.micro` EC2, 5 GB S3 |
| **Always Free** | Forever | 1M Lambda invocations/mo, 25 GB DynamoDB |
| **Trials** | Short windows (30–60 days) | Amazon Inspector, Amazon Redshift trial |

🎯 **Exam trap:** "Forever free" is a real category, it's not just the 12-month tier.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "AWS is just servers in the cloud" | AWS has 200+ services: compute, storage, AI, IoT, satellite, even quantum |
| "Regions and AZs are the same" | A Region *contains* multiple AZs. Don't confuse them. |
| "Edge Locations are mini-Regions" | No, Edges only cache content; you can't launch an EC2 in an edge location |
| "Public cloud means anyone can access my data" | "Public" describes the *infrastructure model*, not your data permissions |
| "Cloud is always cheaper" | For steady, predictable workloads, on-prem can be cheaper. Cloud wins on variable / unknown workloads |
| "Cloud means no responsibilities" | You still own your data, app code, IAM (Identity and Access Management), OS patching (if IaaS), etc. → Shared Responsibility Model |

---

## 🚨 Exam Traps Specific To This Module

1. **"AWS Local Zones"**, extensions of a Region close to major metro areas (LA, Phoenix, Boston). Not the same as Edge Locations. Use for latency-sensitive workloads that need EC2 close to users.
2. **"AWS Wavelength"**, embeds AWS compute *inside 5G telecom networks* for single-digit-millisecond mobile latency.
3. **"AWS Outposts"**, physical AWS racks in YOUR datacenter. Hybrid deployment. Same APIs as the public cloud.
4. **"GovCloud"**, isolated regions for US government workloads requiring ITAR / FedRAMP High compliance. You apply to access.
5. **"China regions"**, operated by Chinese partners (Sinnet, NWCD), separate from global AWS, separate accounts required.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Cloud computing** | On-demand IT resources over the internet with pay-as-you-go pricing |
| **CapEx** | Capital Expense, big upfront spend on hardware (data centers) |
| **OpEx** | Operating Expense, pay-as-you-go, monthly bill (cloud) |
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

## 🏛️ Case Study, Capital One Closes 8 of 9 Data Centers (2015–2020)

**Situation.** In 2014, Capital One the eighth-largest US bank by assets operated nine on-premises data centers running a heterogeneous Oracle / IBM mainframe / VMware stack. Their CIO Rob Alexander faced a board mandate to "out-innovate the fintechs." Regulators (the OCC, the Federal Reserve) had historically been skeptical of public cloud for tier-1 banking workloads. Internal IT estimated that a typical new product line took 12 to 18 months to provision, they were losing the speed war to Plaid, Stripe, and Chime.

**Decision.** Alexander committed to an all-in AWS public-cloud migration. Capital One announced it publicly at AWS re:Invent 2015, becoming the first major US bank to do so. They spent five years (2015–2020) systematically migrating core banking systems, including credit-card processing, while shutting down data centers in waves. They co-developed the open-source security tooling Cloud Custodian (released 2016) with AWS to satisfy regulators. By November 2020 they announced the last on-prem data center had been decommissioned, going from 9 facilities to 0.

**Outcome.** Capital One reported that engineers could now provision production-grade environments in minutes instead of months. The company's mobile app built on the cloud-native stack went from a feature laggard to one of the highest-rated US banking apps (J.D. Power, 2019). However, in July 2019, while still mid-migration, Capital One disclosed a data breach affecting 106 million customers, caused by a former AWS engineer exploiting a Server-Side Request Forgery (SSRF) vulnerability and an over-permissioned IAM role on a misconfigured WAF. The breach cost roughly $190M+ in regulatory fines, customer remediation, and class-action settlements (CFPB consent order, 2020). We unpack this breach in detail in Module 6, it is the most-tested cloud-era breach in the entire CLF-C02 / SAA-C03 universe.

**Lesson for the exam / for practitioners.** Capital One is the textbook example of the **6 cloud benefits made real** "Trade fixed for variable expense" (decommissioning hardware), "Go global in minutes" (multi-Region failover), "Stop spending on data centers." It is also the textbook example of **why "security IN the cloud" is the customer's problem** AWS infrastructure was not breached; the customer's IAM and WAF configuration was. When CLF-C02 asks "Which benefit of cloud does X represent?", Capital One's data-center decommission is almost always the implicit example. When CLF-C02 asks about Shared Responsibility, Capital One is the cautionary tale.

**Discussion (Socratic).**
- Q1: If you were Alexander in 2014, would you have moved tier-1 banking workloads to AWS *before* the regulators had explicit guidance, or waited for the OCC to publish a cloud-supervision letter (which finally came in 2020)? Which way preserves more option value, and why?
- Q2: The breach disclosure (July 2019) came mid-migration. Defend the position: "Capital One should have *paused* the migration after the breach to harden security baselines before continuing." Then defend the opposing position: "Continuing the migration was the right call, the on-prem stack was a bigger long-term risk." Which view do you defend at a board review?
- Q3: Capital One co-developed Cloud Custodian to satisfy regulators. What is the *implicit trade-off* the company accepted by open-sourcing their security tooling, competitive advantage vs ecosystem leverage? When does giving away your security playbook make business sense?

---

## ✅ Module 1 Summary

You now know:

- ☁️ The official AWS definition of cloud computing (per AWS, derived from NIST SP 800-145)
- 💰 The 6 benefits of cloud (Variable, Scale, Capacity, Speed, Datacenters, Global)
- 🏗️ IaaS vs PaaS vs SaaS, and who manages what (NIST taxonomy)
- 🌍 Public vs Private vs Hybrid deployment models
- 🗺️ Regions (geographic), AZs (datacenters), Edge Locations (cache PoPs)
- 🇺🇸 GovCloud, China regions, Local Zones, Wavelength, Outposts
- 🛠️ Console, CLI, SDK (Software Development Kit), IaC (Infrastructure as Code) as ways to interact with AWS
- 🎁 The 3 flavors of AWS Free Tier
- 🏛️ Capital One's data-center exit (2015–2020) as the canonical "cloud benefits realized" case

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md) (aim for 22/24)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Core Compute](../Module-02-Core-Compute/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 2 (Core Compute) operationalizes "elasticity" the cloud benefit you just met into EC2 Auto Scaling and Spot Instances. Module 6 (Security & Identity) revisits Capital One in depth to teach Shared Responsibility and IAM least-privilege. Module 8 (Well-Architected) returns to the 6 benefits as the implicit philosophy behind the 6 pillars.
> - Cross-course: `04-AWS-Solutions-Architect-Associate` Module 1 deepens Region/AZ/Edge architecture for HA and DR design (Multi-AZ vs Multi-Region trade-offs). `07-AWS-AI-Practitioner` Module 1 inherits the same Region/AZ vocabulary when picking where to host Bedrock and SageMaker workloads.
> - Practice: Practice Exam 1 has 7 questions drawing directly from this module (Qs 1, 2, 3, 18, 23, 29, 31). Final Mock Exam revisits with cross-module synthesis (Cloud Concepts domain = 24% / ~16 questions).

---

## 💬 Discussion, Socratic prompts

Use these as journal prompts, study-group questions, or interview-prep drills. Each is open-ended; the best answers cite specific frameworks, numbers, or cases.

1. **The single-AZ MVP (Minimum Viable Product) question.** A two-founder startup running a 50-customer SaaS argues their entire AWS architecture in a single AZ is "fine" because their SLA (Service Level Agreement) promise is 99.5%, not 99.99%. Multi-AZ would roughly double their RDS and ALB bill (~$280/mo → ~$560/mo) for a benefit they say they don't need. Build the strongest argument FOR their single-AZ position AND AGAINST it. Which would you defend at a CTO (Chief Technology Officer) review, and at what point in their growth (revenue, customers, geographic spread) does the answer flip?
2. **Carr's utility-computing prediction.** In *The Big Switch* (2008), Nicholas Carr predicted that computing would become a utility like electricity, measured, fungible, commodified. Two decades on, AWS, Azure, GCP have ~65% combined market share but margins remain 30%+. Why hasn't compute commoditized to electricity-like 3–5% margins? What does this imply for a cloud-strategy course's framing of "cloud is just a utility"?
3. **The Capital One pre-migration question.** Imagine you are advising Capital One's board in **2013** one year before the migration decision. The board says "Banks don't put core workloads in public cloud too risky." Build a 3-bullet argument that Alexander could have used to win the board over. What would have been the *strongest* counter-argument from a skeptical board member, and how would you have addressed it?
4. **Region choice under conflicting constraints.** A B2B (Business-to-Business) SaaS with 60% revenue in the EU but its engineering team in São Paulo must pick a primary AWS Region. Cheapest = `us-east-1` (N. Virginia). Closest to engineering = `sa-east-1` (São Paulo). Closest to revenue + GDPR-aligned = `eu-west-1` (Ireland). Walk through how you'd actually decide this, citing the Module 1 trade-offs (latency vs compliance vs cost vs service availability). Defend why one factor outranks the others.
5. **NIST vs marketing.** AWS sometimes uses "cloud" terminology more loosely than NIST SP 800-145. Find one example where AWS's marketing definition diverges from the NIST definition (e.g., how AWS positions Outposts as "cloud"). Why does the divergence exist, and is the exam testing AWS's definition or NIST's?

There are no "official" answers, defend your reasoning with specifics. Strong responses cite at least one named framework (NIST SP 800-145, AWS Well-Architected, Carr 2008), one named case (Capital One 2015–2020, Mailchimp, your own employer), and one piece of cloud math (TCO, $/AZ-hr, RTO (Recovery Time Objective)/RPO (Recovery Point Objective)).

---

## 📚 Further Reading (Optional)

- 📖 [AWS Global Infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/), interactive map
- 📖 [AWS Cloud Adoption Framework (CAF)](https://aws.amazon.com/cloud-adoption-framework/), covered more in Module 8
- 📖 [What is Cloud Computing?](https://aws.amazon.com/what-is-cloud-computing/), official AWS intro
- 📖 [AWS Free Tier](https://aws.amazon.com/free/), create an account, try services free
- 📖 [AWS Cloud Practitioner Exam Guide (PDF)](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf), read this every week

---

## 📚 Further sources (this module)

- 📄 **Mell, P. & Grance, T. *The NIST Definition of Cloud Computing* (NIST SP 800-145, September 2011)** the canonical NIST definition of IaaS/PaaS/SaaS and public/private/hybrid deployment. Read sections 2 and 3 (4 pages) before the exam.
- 📖 **Carr, N. *The Big Switch: Rewiring the World, from Edison to Google* (W. W. Norton, 2008)** the "utility computing" thesis that made the original economic argument for what AWS is now selling. Chapter 4 ("Goodbye, Mr. Gates") is the must-read.
- 📄 **AWS *Overview of Amazon Web Services* whitepaper (last refreshed 2023)** AWS's own framing of the 6 cloud benefits, the global infrastructure, and the service families. Free PDF; ~70 pages.
- 📄 **Vogels, W. *"10 Lessons from 10 Years of Amazon Web Services"* (All Things Distributed blog, March 2016)** Werner Vogels' retrospective on what AWS got right and wrong in its first decade. Pair with his 2017 + 2023 re:Invent keynotes.
- 🎙️ **Andy Jassy re:Invent 2012 keynote, "AWS: A Look Back, A Look Forward"** first public articulation of the 6 cloud benefits in their modern form.
- 📰 **Capital One press release + DOJ indictment (US v. Thompson, 2019)**, primary sources on the data-center exit and the 2019 breach. Mod 6 returns to this in detail.
