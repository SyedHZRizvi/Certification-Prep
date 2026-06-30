# Module 1: AWS Foundations & Well-Architected Framework ☁️

> **Why this module matters:** The exam doesn't just ask "what does S3 do?", it asks "which design is the *best* fit?" To answer that, you need a mental model of AWS's global infrastructure, who's responsible for what, and the six pillars architects use to judge a design. This module gives you the lens you'll look through for the next 9 modules.

> **Prerequisites for this module.** This is the on-ramp module, no AWS prerequisites assumed. Helpful background:
> - Basic IP networking (an IP address, a subnet, a route, a port), Wikipedia "Subnet" article is enough
> - Familiarity with virtualization concepts (VM, hypervisor), see *Computer Organization and Design* (Patterson & Hennessy, 6th ed., 2020) chapter on virtualization
> - One semester of any programming language so the JSON / YAML examples don't surprise you
> - If you've done the **CLF-C02 (AWS Cloud Practitioner)** course in this hub already, you're ahead, most of this module is a deeper re-derivation of those concepts

---

## 🍕 A Story: The Coffee Roaster That Outgrew Its Garage

Meet Priya. She runs *Sunrise Roasters*. In 2018 she roasts coffee in her garage and ships orders from a single laptop. Her "infrastructure" is one PC, one printer, one router. When the laptop dies, her business dies.

By 2021 she's selling nationwide. So she rents a small data-center cabinet: two servers, a UPS, a generator. Now if one server fails, the other takes over. But if the *building* loses power for a week (hurricane, fire), she's out. So she rents a *second* cabinet in another city, and now she's running across **two availability zones**.

By 2024 she's selling globally. EU customers complain her site is slow. So she puts copies of her product images on edge servers in Paris, Tokyo, and São Paulo a **CDN**. And she keeps a full replica of her order database in Frankfurt so that if the entire US East Coast went dark, she could keep shipping to EU customers that's **multi-region**.

Priya didn't build all this herself. She rents it from AWS. Every concept above **AZ**, **region**, **edge location**, **multi-region** is a building block AWS provides. The architect's job is to combine them so the system stays up, stays fast, stays secure, and doesn't cost a fortune. That's the entire SAA exam in two sentences.

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

🎯 **Exam trap:** "Multi-AZ = multi-region." → **WRONG**. Multi-AZ means spread across AZs in the same region. Multi-region means spread across regions. Multi-region is more resilient, and more expensive.

### How to pick a Region

| Factor | Why it matters |
|--------|----------------|
| **Compliance / data residency** | German user data may need to stay in `eu-central-1` (Frankfurt). GovCloud for US gov workloads. |
| **Latency to users** | Closer region = lower latency. |
| **Service availability** | Not every service is in every region. New services launch in `us-east-1` first. |
| **Cost** | Pricing differs! `us-east-1` is typically cheapest. `sa-east-1` (São Paulo) is among the priciest. |

---

## 🏛️ The Well-Architected Framework, The 6 Pillars

This is the single most quoted document on the exam. AWS literally writes questions like *"Which pillar of the Well-Architected Framework is most directly improved by enabling Multi-AZ on RDS?"*

The framework's intellectual lineage matters because the exam quotes it almost verbatim:

- **AWS Well-Architected Framework** (AWS, published 2015 as the original 5-pillar whitepaper by Philip Fitzsimons and team; **Sustainability pillar added at re:Invent 2021**; framework reaffirmed and last broadly revised in 2023). Free PDF on the AWS docs site.
- The framework draws on **classical reliability engineering**, Patterson, Gibson & Katz's *RAID* paper (*ACM SIGMOD 1988*) for the redundancy idea; Brewer's **CAP theorem** (Brewer, ACM PODC keynote, 2000; formal proof by Gilbert & Lynch, *ACM SIGACT News* 2002) for the consistency/availability/partition trade-off baked into the Reliability pillar.
- It is also the spine of the **AWS Builders' Library** (a free curated set of essays by AWS principal engineers, see the `aws.amazon.com/builders-library` URL set), which exam questions occasionally quote.

🧠 **Memory hook:** **"OS COPR S"**, **O**perational Excellence, **S**ecurity, **C**ost Optimization, **O**bservability... no wait. Use this:

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
- Anticipate failure (chaos engineering, see Fault Injection Service).
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
- Mechanical sympathy (use the right tool, e.g., DynamoDB for key/value, not RDS).

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

## 💵 The Core Pricing Model, Three Cost Drivers

AWS has 200+ services, but pricing almost always comes down to three things:

1. **Compute**, pay per second/hour of running compute (EC2, Lambda invocations + duration, Fargate task seconds).
2. **Storage**, pay per GB-month (S3, EBS, EFS).
3. **Data transfer OUT to the internet**, almost everything else is free, but egress costs money. Data IN is free. Data between AZs in same region: a few cents/GB. Data OUT to internet: $0.05–$0.09/GB.

🧠 **Memory hook:** **"Data IN is free; data OUT bleeds you dry."**

🎯 **Exam pattern:** "A company hosts a video site on EC2. Costs are spiking. What's MOST likely the cause?" → Data transfer OUT to internet. The fix: put **CloudFront** in front to cut origin egress.

---

## 🧰 The "Hello AWS" Account, What Every Architect Sets Up Day One

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

1. **"Most cost-effective"** ≠ cheapest possible at any quality. It means "cheapest that still meets the stated requirements." If the question says "99.99% availability needed", Multi-AZ is required even if it's pricier than single-AZ.
2. **"Operational overhead"** = how much you have to manage. Managed = lower overhead. The answer with the *least servers to patch* usually wins.
3. **Read the question's quantifiers.** "Most secure," "least expensive," "fewest changes to the application," "lowest latency for global users", each one points to a different service.
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
| **IAM** | Identity and Access Management, who can do what on which resource. |
| **High Availability (HA)** | System keeps working through component failures, typically by redundancy. |
| **Fault Tolerance** | System keeps working with zero downtime through failures (stronger than HA). |
| **Elasticity** | System scales up AND down with demand. |
| **Scalability** | Ability to grow capacity (horizontal = more nodes; vertical = bigger node). |
| **RPO** | Recovery Point Objective, max acceptable data loss (in time). |
| **RTO** | Recovery Time Objective, max acceptable downtime. |

---

## 📖 Case Study, Netflix's All-In AWS Migration (2009–2016)

**Situation.** In August 2008, Netflix suffered a 3-day database corruption outage in its own data center. DVD shipments halted; engineering scrambled. The post-mortem (recounted by VP Yury Izrailevsky in the AWS Blog post *Completing the Netflix Cloud Migration*, February 2016) concluded that Netflix's monolithic Oracle database on co-located hardware had become an existential single point of failure. With streaming growing 1000× in projected demand, building more data centers was untenable.

**Decision.** Netflix made a public commitment to migrate everything to AWS, *while* streaming traffic doubled every year. The principles set by then-Cloud-Architect Adrian Cockcroft (later AWS VP, retired 2022) defined the playbook:

- **Multi-AZ by default**, **multi-region for resilience**, every service deployed across at least 3 AZs in `us-east-1`, with `eu-west-1` and `us-west-2` for regional failover
- **No shared state** between regions; each region is independently survivable
- **Cattle, not pets**, instances are disposable, rebuilt by Auto Scaling, never patched in place
- **Chaos engineering**, *Chaos Monkey* (open-sourced 2010) randomly terminated production instances during business hours, forcing every service to be resilient by design. This is now codified as the Reliability pillar's "Test recovery procedures" principle and the AWS-native Fault Injection Service (FIS)
- **Six-week migration cadence per service**, each microservice (Netflix has 700+) was moved independently rather than a big-bang cutover

**Outcome.** Migration completed January 2016, seven years and four months after starting. By 2016 Netflix served 75M subscribers in 190 countries entirely on AWS with **zero owned data centers** for streaming. During the 2015–2016 ramp, Netflix consumed roughly 1/3 of all peak internet bandwidth in North America. Cockcroft's 2014 re:Invent talk *Beyond the Goat Rodeo* (ARC203) is one of the most-watched AWS conference talks of all time and is required viewing for any aspiring solutions architect.

**Lesson for the exam / for practitioners.** Netflix's migration *is* the Well-Architected Framework expressed at planet scale. Every pillar shows up:

- **Reliability**, Multi-AZ + multi-region + chaos engineering
- **Performance Efficiency**, Open Connect (Netflix's CDN) keeps origin servers cool
- **Cost Optimization**, Reserved Instances for steady streaming, Spot for encoding, eventual move to Graviton ARM for ~20% efficiency gain
- **Security**, IAM roles everywhere; no long-term keys
- **Operational Excellence**, Spinnaker (Netflix's open-source CI/CD, now CNCF) deploys 4,000+ times per day
- **Sustainability**, Graviton, right-sizing, ARM-based encoding farm

When the SAA exam asks "which is the BEST design for a global streaming service with 99.99% SLA?", the answer is some variation of *what Netflix actually built*.

**Discussion (Socratic).**
- **Q1.** Netflix took **7+ years** to migrate. A modern SaaS company doing a similar migration in 2026 with AWS Application Migration Service, Aurora Global Database, and DynamoDB Global Tables, could they do it in 2 years? What technical and *organizational* factors compress (or extend) the timeline?
- **Q2.** Cockcroft's principle was *"no shared state between regions."* Yet Netflix obviously syncs *some* state (user preferences, watch history) cross-region. How do you reconcile the strict principle with the practical need? Where would CAP theorem say you're forced to choose, and which choice did Netflix make?
- **Q3.** Netflix open-sourced Chaos Monkey, Eureka, Hystrix, Spinnaker, Atlas, and dozens more tools. Was open-sourcing their internal infrastructure a *strategic moat* or a *strategic liability*? Argue both sides.

---

## ⚠️ Currency & Deprecation Notes (as of 2026-05)

- **Aurora Serverless v1** is in long-term deprecation, new workloads use **Aurora Serverless v2** (generally available since April 2022). Practice exams written before 2022 will reference "v1" as a viable answer; that's now incorrect.
- **EC2 Classic** networking was retired in August 2022. All new VPCs are EC2-VPC.
- **AWS Snowball Edge (legacy device)** has been refreshed; Snowmobile (the 45-foot truck) was retired in 2024 in favor of Snowball Edge clusters for exabyte transfers.
- The Well-Architected Framework's **Sustainability pillar** (added at re:Invent 2021) is now a 6th column on every domain blueprint, pre-2022 study guides only mention 5 pillars; that's stale.

---

## 💬 Discussion, Socratic Prompts (15 min reflection)

1. **The "AWS is always cheaper" myth.** A finance VP at a Series-C SaaS company tells you "the cloud is the most expensive thing we do, let's repatriate to colo and save 60%." Build the strongest argument for AND against repatriation. Under what specific cost model does repatriation actually win? (Hint: David Heinemeier Hansson / 37signals' 2023 *"Why we're leaving the cloud"* blog post is your reading.)
2. **The Region/AZ blast radius debate.** A platform team argues that **3 AZs in one region** is "diverse enough", the marginal cost of multi-region is enormous (data transfer, replication lag, operational complexity). The risk team argues that the Dec 7, 2021 AWS us-east-1 outage and June 13, 2023 us-east-1 Lambda outage prove this is naive. At a fintech with 99.99% SLA contractual obligations, which side wins, and what's the financial threshold above which multi-region pays off?
3. **The Sustainability pillar paradox.** Moving from on-prem to AWS often *increases* a company's total compute (because elasticity removes the capex friction that historically kept teams disciplined). Yet AWS reports sustainability wins. Reconcile this. Is the Sustainability pillar a meaningful engineering constraint, or a marketing gloss on what would happen anyway?
4. **The Well-Architected Review at startup vs enterprise.** AWS recommends running a Well-Architected Review (WAR) before launch and quarterly thereafter. At a 20-person startup with one engineer, what gets prioritized vs deferred? At a 5,000-engineer enterprise, what often *fails* about the WAR ritual despite earnest intent?
5. **The "lift and shift" trap.** Re-host (lift and shift) is the fastest path to "in the cloud", but Netflix explicitly rejected lift-and-shift and rewrote into microservices over 7 years. When is lift-and-shift the *right* answer, and when is it organizational debt with a 5-year compounding cost?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 02 (IAM) operationalizes the Security pillar; Module 03 (EC2) operationalizes Performance + Cost; Module 04 (VPC) operationalizes the network side of Reliability; Module 10 (DR) operationalizes the cross-region resilience patterns Netflix pioneered.
> - **Cross-course:** `03-AWS-Cloud-Practitioner` Module 01 is a gentler version of this content if you want a refresher. `07-AWS-AI-Practitioner` Module 01 references the same 6 pillars when picking generative AI services. `09-CompTIA-Security-Plus` Module 01 covers the CIA Triad, the academic foundation under AWS's Security pillar.
> - **Practice:** Practice Exam 1 has 4 questions, Practice Exam 2 has 3 questions, and the Final Mock Exam has 5 questions directly drawn from this module's material.
> - **Real world:** A Well-Architected Review (WAR) at your employer or a personal AWS account, the AWS Well-Architected Tool in the console runs the official questionnaire for free.

---

## ✅ Module 1 Summary

You now know:

- 🌍 The AWS global infrastructure hierarchy (Region → AZ → Data Center → Edge)
- 🏛️ The 6 pillars of the Well-Architected Framework and the keywords each one signals
- 🤝 Where the Shared Responsibility line is for IaaS vs PaaS vs serverless
- 💵 The three cost drivers (compute, storage, data egress)
- 🧰 The Day-1 account setup every architect does
- 🚨 The most common exam traps for foundational questions
- 📖 **The Netflix migration case**, the canonical Well-Architected-at-scale story

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md) (target: 20/25)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 2: IAM & Organizations](../Module-02-IAM-Organizations/Reading.md)

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **AWS Well-Architected Framework (full docs)** `docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html` read at least the intro chapter for each pillar.
- 📖 **AWS Well-Architected Whitepaper PDF**, full 90-page foundational document; cited verbatim on the exam.
- 📖 **AWS Builders' Library** `aws.amazon.com/builders-library` essays by AWS principal engineers. Required: *"Avoiding fallback in distributed systems"* (Marc Brooker), *"Timeouts, retries, and backoff with jitter"* (Brooker), *"Static stability using Availability Zones"* (Becky Weiss).
- 📖 **Global Infrastructure Map**, `aws.amazon.com/about-aws/global-infrastructure/`
- 📖 **Shared Responsibility Model (official)**, `aws.amazon.com/compliance/shared-responsibility-model/`
- 📖 **SAA-C03 Exam Guide PDF**, 17 pages; the canonical blueprint.

**re:Invent talks**
- 🎤 **ARC203 (2014): Adrian Cockcroft *Beyond the Goat Rodeo: Netflix on AWS*** the foundational microservices-at-scale talk.
- 🎤 **ARC301 (2023): *Resilience patterns at AWS scale***, current best practices for multi-AZ and multi-region designs.
- 🎤 **Werner Vogels re:Invent keynotes 2020–2024**, pattern catalog updates every year.

**Academic foundations**
- 📄 **Brewer, Eric (2000).** *Towards Robust Distributed Systems.* ACM PODC 2000 keynote, the CAP theorem origin.
- 📄 **Gilbert, Seth & Lynch, Nancy (2002).** *Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services.* ACM SIGACT News 33(2), the formal proof.
- 📄 **Lamport, Leslie (1998).** *The Part-Time Parliament.* ACM Transactions on Computer Systems 16(2), the Paxos consensus protocol underneath every multi-AZ database AWS sells.
- 📖 **Kleppmann, Martin (2017).** *Designing Data-Intensive Applications.* O'Reilly, chapters 5, 7, 8, and 9 are the academic spine of the Reliability pillar.

**Industry**
- 📰 **Adrian Cockcroft's blog** `adrianco.medium.com` first-person account of the Netflix migration with the original principle list.
- 📰 **The Pragmatic Engineer newsletter (Gergely Orosz)**, multiple deep-dives on Netflix architecture decisions.
