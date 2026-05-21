# Module 1: AWS Foundations & Well-Architected Framework ☁️

> **Why this module matters:** The exam doesn't just ask "what does S3 do?" — it asks "which design is the *best* fit?" To answer that, you need a mental model of AWS's global infrastructure, who's responsible for what, and the six pillars architects use to judge a design. This module gives you the lens you'll look through for the next 9 modules.

---

## 🍕 A Story: The Coffee Roaster That Outgrew Its Garage

Meet Priya. She runs *Sunrise Roasters*. In 2018 she roasts coffee in her garage and ships orders from a single laptop. Her "infrastructure" is one PC, one printer, one router. When the laptop dies, her business dies.

By 2021 she's selling nationwide. So she rents a small data-center cabinet: two servers, a UPS, a generator. Now if one server fails, the other takes over. But if the *building* loses power for a week (hurricane, fire), she's out. So she rents a *second* cabinet in another city — and now she's running across **two availability zones**.

By 2024 she's selling globally. EU customers complain her site is slow. So she puts copies of her product images on edge servers in Paris, Tokyo, and São Paulo — a **CDN**. And she keeps a full replica of her order database in Frankfurt so that if the entire US East Coast went dark, she could keep shipping to EU customers — that's **multi-region**.

Priya didn't build all this herself. She rents it from AWS. Every concept above — **AZ**, **region**, **edge location**, **multi-region** — is a building block AWS provides. The architect's job is to combine them so the system stays up, stays fast, stays secure, and doesn't cost a fortune. That's the entire SAA exam in two sentences.

---

## 🌍 AWS Global Infrastructure (You Will Be Tested On This)

AWS's physical infrastructure is laid out in a strict hierarchy. **Memorize it cold.**

```
       AWS GLOBAL
            │
       ┌────┴────────────┐
   REGIONS           EDGE LOCATIONS
       │                  │
  AVAILABILITY ZONES   (CloudFront, Route 53,
       │                Global Accelerator,
  DATA CENTERS          AWS Shield)
       │
   RACKS / SERVERS
```

| Term | What it really is | Count (approx.) | Key fact |
|------|-------------------|-----------------|----------|
| **Region** | A geographic area (e.g. `us-east-1` = N. Virginia) | 30+ worldwide | Isolated from other regions. Data does NOT leave a region unless you explicitly replicate it. |
| **Availability Zone (AZ)** | One *or more* physically separate data centers within a region, on separate power/network | 3–6 per region | Connected by low-latency dedicated fiber (single-digit ms). |
| **Edge Location** | A Point of Presence (PoP) used by CloudFront, Route 53, Global Accelerator | 600+ globally | Caches content close to users. NOT for compute. |
| **Local Zone** | Compute/storage placed in major metro areas outside a region | ~30 | For sub-10ms latency to specific cities. |
| **Wavelength Zone** | AWS infrastructure embedded *inside* a 5G telco network | A handful | Ultra-low latency for mobile apps. |
| **Outpost** | AWS racks installed in YOUR data center | On demand | Hybrid. AWS-managed but on your floor. |

🎯 **Exam trap:** "An AZ is a single data center." → **WRONG**. An AZ is *one or more* discrete data centers with redundant power, networking, and connectivity. AWS just doesn't tell you how many.

🎯 **Exam trap:** "Multi-AZ = multi-region." → **WRONG**. Multi-AZ means spread across AZs in the same region. Multi-region means spread across regions. Multi-region is more resilient — and more expensive.

### How to pick a Region

| Factor | Why it matters |
|--------|----------------|
| **Compliance / data residency** | German user data may need to stay in `eu-central-1` (Frankfurt). GovCloud for US gov workloads. |
| **Latency to users** | Closer region = lower latency. |
| **Service availability** | Not every service is in every region. New services launch in `us-east-1` first. |
| **Cost** | Pricing differs! `us-east-1` is typically cheapest. `sa-east-1` (São Paulo) is among the priciest. |

---

## 🏛️ The Well-Architected Framework — The 6 Pillars

This is the single most quoted document on the exam. AWS literally writes questions like *"Which pillar of the Well-Architected Framework is most directly improved by enabling Multi-AZ on RDS?"*

🧠 **Memory hook:** **"OS COPR S"** — **O**perational Excellence, **S**ecurity, **C**ost Optimization, **O**bservability... no wait. Use this:

> **"P**erformance, **R**eliability, **S**ecurity, **C**ost, **O**ps, **S**ustainability**"**
> Mnemonic: **"Pretty Robust Systems Cost Operators Sleep"**

### The 6 Pillars at a Glance

| # | Pillar | One-line definition | "Best fit" keywords in questions |
|---|--------|---------------------|----------------------------------|
| 1 | **Operational Excellence** | Run and monitor systems to deliver business value; continuously improve | "automation", "runbook", "infra-as-code", "CloudFormation" |
| 2 | **Security** | Protect data, systems, and assets while delivering business value | "least privilege", "encryption", "IAM", "KMS", "audit" |
| 3 | **Reliability** | Workload recovers from failures and meets demand | "Multi-AZ", "auto-recovery", "ASG", "RPO", "RTO", "failover" |
| 4 | **Performance Efficiency** | Use computing resources efficiently; scale as demand changes | "low latency", "throughput", "right-sized", "caching" |
| 5 | **Cost Optimization** | Avoid unnecessary cost | "cheapest", "most cost-effective", "Spot", "lifecycle to Glacier" |
| 6 | **Sustainability** | Minimize environmental impact of workloads | "reduce energy", "Graviton", "Serverless", "right-size", "managed services" |

### 🔬 Drilling In: The Design Principles per Pillar

**Operational Excellence**
- Perform operations as code (CloudFormation, CDK, Terraform).
- Make frequent, small, reversible changes.
- Refine operations procedures frequently.
- Anticipate failure (chaos engineering — see Fault Injection Service).
- Learn from operational events.

**Security**
- Implement a strong identity foundation (IAM, root account locked away).
- Apply security at all layers (defense in depth).
- Automate security best practices.
- Protect data in transit AND at rest.
- Prepare for security events (CloudTrail, GuardDuty, Detective).

**Reliability**
- Automatically recover from failure (ASG health checks, ELB).
- Test recovery procedures (Game Days).
- Scale horizontally to increase aggregate availability.
- Stop guessing capacity (use auto-scaling, serverless).
- Manage change in automation.

**Performance Efficiency**
- Democratize advanced technologies (use managed services so you don't have to be an expert in everything).
- Go global in minutes (CloudFront, multi-region).
- Use serverless where possible.
- Experiment more often (cheap to spin up test workloads).
- Mechanical sympathy (use the right tool — e.g., DynamoDB for key/value, not RDS).

**Cost Optimization**
- Implement cloud financial management (Cost Explorer, Budgets, Compute Optimizer).
- Adopt a consumption model (pay for what you use).
- Measure overall efficiency.
- Stop spending money on undifferentiated heavy lifting (use managed services).
- Analyze and attribute expenditure (tags + Cost Allocation reports).

**Sustainability**
- Understand your impact.
- Set sustainability goals (e.g., reduce energy per transaction).
- Maximize utilization (right-size; consolidate workloads).
- Anticipate and adopt new, more efficient hardware/software offerings (Graviton processors).
- Use managed services (AWS optimizes their datacenters for you).

🎯 **Exam pattern:** "An architect wants to reduce environmental impact while migrating an EC2 fleet. Which is the BEST approach?" → Use **Graviton** instances + **Auto Scaling** + Spot. That's the Sustainability pillar.

---

## 🤝 The Shared Responsibility Model

Possibly the most-tested concept on Day-1 AWS topics. **AWS** is responsible for the security **OF** the cloud. **You** are responsible for security **IN** the cloud.

```
┌────────────────────────────────────────────────────────┐
│  CUSTOMER: Security IN the Cloud                       │
│  ─ Your data, classification, encryption choices       │
│  ─ Operating system, network/firewall configuration    │
│  ─ IAM (users, groups, roles, policies)                │
│  ─ Application-level identity & access mgmt            │
│  ─ Client- and server-side encryption                  │
├────────────────────────────────────────────────────────┤
│  AWS: Security OF the Cloud                            │
│  ─ Hardware, software, networking, facilities          │
│  ─ Regions, AZs, edge locations                        │
│  ─ Hypervisor, host OS for managed services            │
│  ─ Physical security of data centers                   │
└────────────────────────────────────────────────────────┘
```

### Where the line moves by service type

| Service type | Customer manages | AWS manages |
|--------------|------------------|-------------|
| **EC2 (IaaS)** | OS patches, software, firewall (Security Group), data, IAM | Hypervisor, hardware, networking |
| **RDS (PaaS)** | DB user accounts, network access, data, IAM | OS patches, DB engine patches, backups, hardware |
| **S3 / DynamoDB / Lambda (managed)** | Data, access policies, IAM | Everything else |

🎯 **Exam trap:** "AWS patches your EC2 operating system." → **WRONG**. EC2 is IaaS. *You* patch the OS. AWS patches RDS instances because RDS is managed.

🎯 **Exam trap:** "Encryption is automatic and always AWS's responsibility." → **WRONG**. You choose whether to enable encryption (it's *available* and often *default* on services like S3, but the *configuration* is yours).

---

## 💵 The Core Pricing Model — Three Cost Drivers

AWS has 200+ services, but pricing almost always comes down to three things:

1. **Compute** — pay per second/hour of running compute (EC2, Lambda invocations + duration, Fargate task seconds).
2. **Storage** — pay per GB-month (S3, EBS, EFS).
3. **Data transfer OUT to the internet** — almost everything else is free, but egress costs money. Data IN is free. Data between AZs in same region: a few cents/GB. Data OUT to internet: $0.05–$0.09/GB.

🧠 **Memory hook:** **"Data IN is free; data OUT bleeds you dry."**

🎯 **Exam pattern:** "A company hosts a video site on EC2. Costs are spiking. What's MOST likely the cause?" → Data transfer OUT to internet. The fix: put **CloudFront** in front to cut origin egress.

---

## 🧰 The "Hello AWS" Account — What Every Architect Sets Up Day One

| Task | Why |
|------|-----|
| 🔐 Lock the root account (MFA, no daily use) | Root = nuclear keys. Use only for billing & a couple of account-level tasks. |
| 👤 Create admin **IAM user** (or better, an Identity Center user) | Daily admin work happens here, not as root. |
| 🛡️ Enable **MFA** on root + every privileged user | Single biggest security win for the dollar. |
| 💸 Set up **AWS Budgets** ($10 alert is fine) | First defense against a runaway Lambda or compromised key. |
| 📜 Enable **CloudTrail** in all regions | Audit log of every API call. Forensics gold. |
| 🔎 Enable **AWS Config** + **GuardDuty** | Continuous compliance + threat detection. |
| 🏷️ Define a **tagging strategy** (CostCenter, Env, Owner) | You'll thank yourself in 6 months when you're chasing cost. |

---

## 🧭 The 3 Ways To Talk To AWS

| Interface | When to use | Exam clue |
|-----------|-------------|-----------|
| **Management Console** | Manual exploration, learning, occasional changes | "from the AWS web interface" |
| **AWS CLI** | Scripts, automation, CI/CD, one-off batch ops | `aws s3 cp`, `aws ec2 describe-instances` |
| **SDKs (Boto3, AWS SDK for JS, etc.)** | Application code | `import boto3` |

All three call the same underlying **APIs**, with the same **IAM permissions**. Authentication uses **access keys** (CLI/SDK) or **Identity Center SSO** (modern recommended approach for humans).

### Simple CLI example

```bash
# Configure (once)
aws configure
# AWS Access Key ID: AKIA...
# AWS Secret Access Key: ...
# Default region: us-east-1

# List S3 buckets
aws s3 ls

# Spin up a t3.micro EC2 instance
aws ec2 run-instances \
  --image-id ami-0abcd1234 \
  --instance-type t3.micro \
  --key-name my-key \
  --security-group-ids sg-0123456789abcdef0
```

---

## 🆚 IaaS vs PaaS vs SaaS (Quick Recap)

| Model | You manage | AWS manages | AWS example |
|-------|------------|-------------|-------------|
| **IaaS** (Infrastructure) | OS, runtime, apps, data | Hardware, virtualization, networking | EC2, EBS |
| **PaaS** (Platform) | Apps, data | Everything below | RDS, Elastic Beanstalk, ECS Fargate |
| **SaaS** (Software) | Just use it | Everything | Amazon WorkMail, Chime |
| **Serverless** | Just code (functions) | Servers, scaling, patching | Lambda, Fargate, DynamoDB, S3 |

🎯 **Exam clue:** "minimize operational overhead" → serverless / managed service. "full OS control needed" → EC2.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "AWS is always cheaper than on-prem" | Wrong. AWS wins for variable workloads. For 24/7 maxed-out compute, on-prem with depreciated hardware can be cheaper. |
| "If I delete a region's resources, I delete them globally" | Wrong. Most resources are region-scoped. You can leak budget by forgetting an idle instance in `ap-south-1`. |
| "Edge locations run my Lambda functions" | Only Lambda@Edge and CloudFront Functions do. Regular Lambda runs in a region. |
| "Multi-AZ protects me from a region outage" | NO. Multi-AZ protects from an AZ outage. For region outage you need **multi-region** (with cross-region replication, Route 53 failover, etc.). |
| "An AZ is a building" | An AZ is one *or more* data centers, networked together with redundant power and connectivity. |
| "Public IP = secure" | Public IP is just reachable from internet. Security comes from Security Groups, NACLs, and your app. |

---

## 🚨 Exam Traps

1. **"Most cost-effective"** ≠ cheapest possible at any quality. It means "cheapest that still meets the stated requirements." If the question says "99.99% availability needed" — Multi-AZ is required even if it's pricier than single-AZ.
2. **"Operational overhead"** = how much you have to manage. Managed = lower overhead. The answer with the *least servers to patch* usually wins.
3. **Read the question's quantifiers.** "Most secure," "least expensive," "fewest changes to the application," "lowest latency for global users" — each one points to a different service.
4. **"Existing application, lift and shift"** → EC2. **"New microservice, no servers"** → Lambda or Fargate. **"Containerized but want to manage clusters"** → ECS on EC2.
5. **Compliance keywords:** "PCI-DSS", "HIPAA", "FedRAMP" → likely answer involves KMS encryption + CloudTrail + Config + private subnets.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Region** | A geographic area with multiple AZs (e.g. `us-east-1`). |
| **Availability Zone (AZ)** | One or more discrete data centers in a region, on independent power and networking. |
| **Edge Location** | A PoP used by CloudFront, Route 53, Global Accelerator. |
| **Local Zone** | Compute/storage in a metro area outside a region for low latency. |
| **Outpost** | AWS-managed rack physically installed in your data center. |
| **Well-Architected Framework** | AWS's 6-pillar guide for evaluating cloud architectures. |
| **Shared Responsibility Model** | AWS secures the cloud; customer secures what's in the cloud. |
| **IAM** | Identity and Access Management — who can do what on which resource. |
| **High Availability (HA)** | System keeps working through component failures, typically by redundancy. |
| **Fault Tolerance** | System keeps working with zero downtime through failures (stronger than HA). |
| **Elasticity** | System scales up AND down with demand. |
| **Scalability** | Ability to grow capacity (horizontal = more nodes; vertical = bigger node). |
| **RPO** | Recovery Point Objective — max acceptable data loss (in time). |
| **RTO** | Recovery Time Objective — max acceptable downtime. |

---

## ✅ Module 1 Summary

You now know:
- 🌍 The AWS global infrastructure hierarchy (Region → AZ → Data Center → Edge)
- 🏛️ The 6 pillars of the Well-Architected Framework and the keywords each one signals
- 🤝 Where the Shared Responsibility line is for IaaS vs PaaS vs serverless
- 💵 The three cost drivers (compute, storage, data egress)
- 🧰 The Day-1 account setup every architect does
- 🚨 The most common exam traps for foundational questions

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md) (target: 20/24)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 2: IAM & Organizations](../Module-02-IAM-Organizations/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 **[AWS Well-Architected Framework (full docs)](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)** — read at least the intro chapter for each pillar
- 📖 **[Global Infrastructure Map](https://aws.amazon.com/about-aws/global-infrastructure/)** — visual of every region & AZ
- 📖 **[Shared Responsibility Model (official)](https://aws.amazon.com/compliance/shared-responsibility-model/)**
- 📖 **AWS Whitepapers** — *"Overview of Amazon Web Services"* and *"AWS Well-Architected Framework"* are both free PDFs and gold for the exam
- 📖 **[SAA-C03 Exam Guide PDF](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf)**
