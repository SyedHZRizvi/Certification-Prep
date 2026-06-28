# Module 2: Core Compute 🖥️

> **Why this module matters:** Compute is *where your code runs*. If you can't pick the right compute service (EC2 vs Lambda vs Fargate) in 5 seconds, you'll bleed time on the exam. This module gives you the decision tree.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Cloud Fundamentals](../Module-01-Cloud-Fundamentals/Reading.md), Regions, AZs, IaaS (Infrastructure as a Service) vs PaaS (Platform as a Service) vs SaaS (Software as a Service)
> - Basic familiarity with what a virtual machine is (one OS running on top of a hypervisor)
> - Basic familiarity with what a container is (a packaged app with its OS-level dependencies)
>
> If "hypervisor," "container," or "serverless" feel hand-wavy, pause and skim the Wikipedia entries for each. The module assumes you can tell the *abstraction* apart; you don't need to know the implementation.

---

## 🚚 A Story: The Catering Decision

Imagine you're catering an office lunch for 100 people. You have 4 options:

1. **Buy your own kitchen and hire chefs full-time** → you cook every meal yourself. Total control. Huge fixed cost. (= your own data center)
2. **Rent a kitchen by the hour, bring your own ingredients and recipes** → flexible, you decide everything inside the kitchen. (= **EC2**)
3. **Hire a catering kitchen, you bring recipes, they supply the kitchen + chefs** → you don't touch pots, but you decide the menu. (= **Containers on Fargate**)
4. **Just call a sandwich shop and order 100 sandwiches** → you don't even pick the bread; you just say "feed 100 people, here's $400, charge me only for what's eaten." (= **Lambda**)

Each option suits a different situation. Sometimes you NEED the rented kitchen because your recipe is fussy (legacy app on Windows). Sometimes the sandwich shop is perfect (a tiny image-resize task). Knowing which to pick is 80% of cloud architecture.

---

## 🧠 The Compute Spectrum

```
   MORE CONTROL                              LESS OPS WORK
   ←─────────────────────────────────────────────────────────→
   On-prem    EC2    ECS on EC2   ECS/EKS on Fargate    Lambda
            (VM (Virtual Machine))    (containers)  (containers, serverless)  (functions)
```

The further right you go, the **less you manage**, but the more constrained your runtime.

---

## 🖥️ Amazon EC2 (Elastic Compute Cloud), The Workhorse

EC2 was AWS's second public service, announced by Chris Pinkham and Benjamin Black in August 2006 (per Werner Vogels' *All Things Distributed*, 2016 retrospective "10 Lessons from 10 Years of Amazon Web Services"). It is the original IaaS service and still the most-used compute service on AWS by total revenue (per AWS earnings disclosures, 2024 Q4).

**EC2 = rent a virtual machine.** You pick the OS, CPU, RAM, disk, network. You SSH (Secure Shell) in. You install whatever software you want. AWS bills you per second (Linux) or per hour (Windows).

### Instance families (the letter prefix tells you the workload)

| Family | Letter | Use case | Example |
|--------|--------|----------|---------|
| **General Purpose** | `t`, `m` | Balanced CPU/RAM, web servers, small DBs | `t3.micro`, `m6i.large` |
| **Compute Optimized** | `c` | CPU-heavy, batch, gaming servers, scientific | `c6i.xlarge` |
| **Memory Optimized** | `r`, `x`, `z` | RAM-heavy, in-memory DBs, big-data caches | `r6i.large`, `x2gd.medium` |
| **Storage Optimized** | `i`, `d`, `h` | High disk I/O, NoSQL, data warehouses | `i4i.large` |
| **Accelerated Computing** | `p`, `g`, `inf`, `trn` | GPUs / ML chips, training, inference, graphics | `p4d.24xlarge`, `g5.xlarge` |

🧠 Memory hook: **"T-Shirt Cost Money But Saves Plenty"** → general (T/M), Compute, Memory, Big disk, Plenty of GPUs.

### EC2 pricing models (HIGH-FREQUENCY EXAM TOPIC)

| Model | Discount | Commitment | Use case |
|-------|----------|------------|----------|
| **On-Demand** | 0% (baseline) | None, start/stop anytime | Spiky, unpredictable workloads, dev/test |
| **Reserved Instances (RIs)** | Up to 72% | 1- or 3-year commitment | Steady, predictable workloads (24/7 production) |
| **Savings Plans** | Up to 72% | 1- or 3-year $/hr commitment | Like RIs but more flexible (any instance family / Region) |
| **Spot Instances** | Up to 90% | None, but AWS can reclaim with 2-min notice | Fault-tolerant batch jobs, CI, big data |
| **Dedicated Hosts** |, | Physical server reserved for you | BYOL licensing, regulatory isolation |
| **Dedicated Instances** | Slight premium | Single-tenant hardware (less control than hosts) | Compliance without BYOL needs |
| **Capacity Reservations** | None | Reserve capacity in an AZ (no price discount) | Guarantee capacity for DR / launch events |

🔥 **MEMORIZE THIS table.** Expect 3–5 questions touching pricing models.

🎯 **Exam pattern shortcuts:**
- "Fault-tolerant + cheapest" → **Spot**
- "Steady 3-year workload" → **Reserved** or **Savings Plan**
- "Flexible across instance types/regions" → **Savings Plan** (not RIs)
- "BYOL Windows / Oracle licensing" → **Dedicated Host**
- "No commitment, unpredictable" → **On-Demand**

### Tenancy options

- **Shared (default):** your VM shares the underlying physical host with other AWS customers (isolated, but physically shared)
- **Dedicated Instance:** runs on hardware dedicated to your AWS account
- **Dedicated Host:** you SEE and control the actual physical server (needed for socket-based licenses)

---

## 🧊 EC2 Lifecycle, When Do You Pay?

| State | Billed for compute? | Billed for storage? |
|-------|--------------------|---------------------|
| **Running** | ✅ Yes | ✅ Yes (EBS) |
| **Stopped** | ❌ No | ✅ Yes (EBS persists) |
| **Hibernated** | ❌ No | ✅ Yes (EBS + RAM dump) |
| **Terminated** | ❌ No | ❌ No (root EBS deleted by default) |

🎯 **Exam trap:** Stopped instances still incur EBS storage charges. To stop ALL charges, **terminate** (and back up first!).

---

## 🐳 Containers: ECS, EKS, Fargate

Containers package an app and all its dependencies. Lighter than VMs, but you still need a "host" to run them.

| Service | What it is | When to choose |
|---------|------------|----------------|
| **ECS (Elastic Container Service)** | AWS's container orchestrator | Standard container workloads, simpler than K8s |
| **EKS (Elastic Kubernetes Service)** | Managed Kubernetes | You want / need Kubernetes (multi-cloud portability) |
| **Fargate** | Serverless compute *engine* for ECS / EKS | You don't want to manage EC2 hosts |
| **ECR (Elastic Container Registry)** | Docker image registry | Store & version your container images |

### Mental model

- ECS / EKS = the **orchestrator** (decides where containers run)
- Fargate = the **launch type** (no EC2 to manage, AWS provisions the host)
- Alternative launch type = **EC2** (you manage the underlying instance group)

```
   Container = your app + its deps
       ↓ runs on
   ECS / EKS (orchestrator)
       ↓ which uses
   EC2 (you manage) OR Fargate (serverless)
```

🎯 **Exam pattern:** "Customer wants to run containers but doesn't want to manage servers." → **Fargate**.

---

## ⚡ AWS Lambda, Serverless Functions

Lambda was announced at AWS re:Invent 2014 by Werner Vogels and is generally credited with coining the modern "serverless" computing pattern (per Roberts, "Serverless Architectures," Martin Fowler's blog, 2016). Stripe, Coca-Cola, and iRobot were early adopters at scale.

**Lambda runs your code in response to events without you provisioning any server.** You upload a function (Python, Node, Java, Go, .NET, Ruby, container image). AWS runs it, scales it, bills you per millisecond + invocation.

### Key limits (memorize the headline numbers)

| Property | Limit |
|----------|-------|
| Max execution time | **15 minutes** (per invocation) |
| Memory | 128 MB → 10 GB |
| Ephemeral disk (`/tmp`) | 512 MB → 10 GB |
| Deployment package | 50 MB zipped / 250 MB unzipped (10 GB as container image) |
| Concurrent executions | 1,000 per Region (soft limit, raise via support) |

### When Lambda shines

- Event-driven workloads (S3 (Simple Storage Service) upload → resize image)
- Short tasks (<15 min)
- Sporadic / unpredictable load
- "Glue" code between AWS services
- No servers to patch, ever

### When Lambda is the WRONG answer

- Long-running jobs (use Fargate, EC2, or Batch)
- Predictable 24/7 load (Reserved EC2 may be cheaper)
- Need a specific OS or sidecar process (use ECS/EC2)
- Heavy CPU/GPU work (use EC2 with appropriate family)

🎯 **Exam pattern:** "Run code in response to an S3 upload" → **Lambda**. "Run code for 4 hours" → **NOT Lambda** (exceeds 15-min limit).

---

## 🏝️ Other Compute Services To Know

| Service | One-liner | When to use |
|---------|-----------|-------------|
| **Lightsail** | Pre-packaged VPS (server + IP + DNS (Domain Name System) + DB bundle) | Small business websites, devs who want simplicity |
| **AWS Batch** | Managed batch job runner (queues jobs, spins up EC2/Fargate) | Scientific computing, video transcoding pipelines |
| **AWS Elastic Beanstalk** | PaaS, upload code, AWS handles EC2 + ELB + Auto Scaling | Devs who want "git push to deploy" without learning AWS |
| **AWS App Runner** | Fully managed container app service | Run a container with zero infra knowledge |
| **AWS Outposts** | AWS hardware in your DC (compute + storage) | Hybrid: same APIs on-prem |
| **AWS Wavelength** | EC2 inside 5G networks | Ultra-low-latency mobile apps |
| **VMware Cloud on AWS** | VMware vSphere running on EC2 hardware | Lift-and-shift VMware workloads |

---

## 📈 Scaling EC2: Auto Scaling Groups (ASG) + ELB

Two services almost always appear together:

- **Auto Scaling Group (ASG):** group of EC2 instances that automatically scales out (more instances) or in (fewer) based on CloudWatch metrics
- **Elastic Load Balancing (ELB):** distributes incoming traffic across instances (see Module 4)

```
  Internet → ELB → ASG → [EC2-A][EC2-B][EC2-C][EC2-D]
                  ↑
              CloudWatch scaling rules
              (e.g., CPU > 70% for 5 min)
```

ASG benefits:

- **Elasticity**, capacity matches demand
- **Cost savings**, scale in when traffic dies
- **Self-healing**, replace unhealthy instances automatically
- **Multi-AZ**, distribute instances across AZs for HA

🎯 **Exam pattern:** "How do you make EC2 fault-tolerant + cost-efficient?" → **Multi-AZ Auto Scaling Group behind an ELB.**

---

## 🆚 EC2 vs Lambda vs Fargate, The Decision Table

| Scenario | Best fit |
|----------|----------|
| Lift-and-shift legacy Windows app | **EC2** |
| Image-resize on every S3 upload | **Lambda** |
| Containerized microservices, no host mgmt | **Fargate** |
| 4-hour nightly data crunch | **Batch** (or Fargate / EC2) |
| Need a GPU for ML training | **EC2 (p/g family)** |
| Simple WordPress blog | **Lightsail** |
| Upload code, AWS handles the rest | **Elastic Beanstalk** |
| Static website hosting | (**S3 + CloudFront**, see Mod 3/4) |

---

## 🚨 Exam Traps

1. **Lambda max runtime = 15 minutes.** Not "unlimited," not "1 hour." If the question says "runs for 30 minutes," Lambda is wrong.
2. **Stopped EC2 still costs money** (for EBS storage). Terminate to fully stop charges.
3. **Spot Instances can be reclaimed** with a 2-minute warning. Use ONLY for fault-tolerant workloads.
4. **Reserved Instances are zone- or region-scoped** and tied to instance family. Savings Plans are more flexible.
5. **Fargate is NOT a separate service from ECS/EKS**, it's a *launch type*. You still need ECS or EKS to orchestrate.
6. **Elastic Beanstalk is free**, you only pay for the underlying EC2/RDS (Relational Database Service)/ELB resources.
7. **Lightsail bills monthly** (predictable), unlike EC2's per-second billing.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Serverless means no servers exist" | Servers exist; *you* just don't manage them |
| "Spot instances are unreliable so they're useless" | Perfect for batch / CI, 90% off is huge if you can tolerate interruption |
| "Fargate is a competitor to EC2" | Fargate is a launch type for ECS/EKS containers; complements EC2 |
| "Lambda is always cheaper" | At very high request volumes with steady load, EC2/Fargate can be cheaper |
| "Auto Scaling = Load Balancing" | They work together but do different things: ASG adds/removes; ELB distributes |
| "You must manage container hosts" | Not with Fargate or App Runner |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **EC2** | Virtual server on AWS; you control OS and software |
| **AMI** | Amazon Machine Image, the OS+software template used to launch EC2 |
| **Instance type** | CPU/RAM/network/storage config (e.g., `t3.medium`) |
| **On-Demand** | Pay per second, no commitment |
| **Reserved Instance** | 1- or 3-year commitment for up to 72% off |
| **Savings Plan** | Flexible commitment by $/hr (covers EC2, Fargate, Lambda) |
| **Spot Instance** | Spare AWS capacity at up to 90% off; can be reclaimed |
| **Dedicated Host** | Physical server reserved for your account (BYOL) |
| **Auto Scaling Group (ASG)** | Group of EC2 that auto scales in/out |
| **ECS** | Amazon's container orchestrator |
| **EKS** | Managed Kubernetes |
| **Fargate** | Serverless compute engine for ECS/EKS |
| **ECR** | Docker image registry |
| **Lambda** | Run code on events without managing servers (15-min max) |
| **Elastic Beanstalk** | PaaS, upload code, AWS handles infra |
| **Lightsail** | Bundled VPS for simple workloads |
| **AWS Batch** | Managed batch computing |
| **Serverless** | You provide code/config; AWS scales/runs/bills you only for use |
| **Hibernate** | Stop EC2 while preserving RAM contents |

---

## 🏛️ Case Study, Lyft Scales Ride-Hailing on EC2 (2012–2024)

**Situation.** Lyft (founded 2012 as a Zimride pivot) faced an impossible compute problem: ride demand spikes 5× to 8× on Friday and Saturday nights versus Tuesday afternoons, on top of regional events (Super Bowl, ComicCon, New Year's Eve). The dispatch engine which matches drivers to riders in < 200 ms anywhere in the US must never go down. Building a fixed-capacity data center for the peak meant 60–70% of servers sat idle during weekdays.

**Decision.** Lyft went all-in on AWS in 2012, with EC2 as the primary compute substrate. Engineering decisions, per Lyft engineering blog posts (2017–2023) and a 2019 AWS re:Invent case talk:

- **General-purpose `m5` instances** for the dispatch service, behind ALB, in Auto Scaling Groups that scaled aggressively on CloudWatch CPU + custom queue-depth metrics.
- **Spot Instances (up to ~50% of the fleet at off-peak)** for fault-tolerant batch, fare-calculation backfills, pricing-model retraining, log aggregation.
- **GPU `g4dn` / `p3` instances** for the ML pipelines that compute surge pricing and ETA predictions, mostly via SageMaker (Lyft is a SageMaker reference customer).
- **Reserved Instances + Savings Plans** for the always-on dispatch core (~30% of fleet), locked-in 3-year discounts on the baseline that won't go away.
- **Lambda** for glue: SNS notifications, image processing for driver-onboarding selfies, webhook ingestion from payment processors.

By 2019 Lyft disclosed in its S-1 (IPO (Initial Public Offering) filing) that it had a "minimum AWS commitment of $300M over 3 years", making AWS one of Lyft's largest fixed-cost vendors.

**Outcome.** Lyft scaled to ~30M monthly active riders and ~3M drivers (2024 Q1 disclosure) on this AWS-native stack, without ever building its own data center. The aggressive Spot adoption let it absorb ML training costs that would otherwise have made the unit economics unworkable. However, the AWS lock-in is well documented as a *strategic risk* in Lyft's annual 10-K filings every year since 2019, "concentration risk with AWS" is listed under risk factors. Lyft is the textbook example of *what good cloud-native compute looks like* AND of *what cloud lock-in feels like at IPO scale*.

**Lesson for the exam / for practitioners.** Lyft is the canonical answer to a half-dozen CLF-C02 exam patterns: "spiky demand" → Auto Scaling Groups; "fault-tolerant batch at 90% off" → Spot; "always-on baseline + flexibility" → Savings Plans (more flexible than RIs); "GPU ML training" → accelerated `g`/`p` family. When the exam asks "which compute service for a workload that has a steady 24/7 baseline plus heavy weekend spikes?", the answer pattern is Lyft's pattern: RIs/SP for baseline + ASG of On-Demand for the elastic top + Spot for batch.

**Discussion (Socratic).**
- Q1: Lyft's $300M+ AWS commit means moving off AWS would be 2–3 years and possibly $100M+ of engineering work. Was committing publicly to that lock-in (rather than maintaining multi-cloud optionality from day 1) the right call? Argue both sides; pick one and defend in front of a CFO (Chief Financial Officer).
- Q2: A junior engineer argues "let's move 100% of dispatch onto Spot, Spot is 90% cheaper and our service is stateless." Walk through why that's wrong (or right). What is the *correct* Spot percentage for a dispatch service that must respond in < 200 ms?
- Q3: Uber (Lyft's direct competitor) historically ran a hybrid of GCP (Google Cloud Platform) + on-prem + AWS, then consolidated heavily onto Google Cloud (2023). At what point does single-cloud lock-in become a strategic vulnerability significant enough to justify the integration cost of multi-cloud? What metrics would you watch?

---

## ✅ Module 2 Summary

You now know:

- 🖥️ EC2 = rent a VM; 5 instance families (general, compute, memory, storage, accelerated)
- 💰 6 pricing models (On-Demand, Reserved, Savings Plan, Spot, Dedicated Host, Dedicated Instance)
- 🐳 ECS/EKS = orchestrate containers; Fargate = serverless launch type
- ⚡ Lambda = event-driven, 15-min max, pay per ms
- 🏝️ Lightsail, Batch, Beanstalk, App Runner, Outposts, Wavelength, VMware Cloud
- 📈 ASG + ELB = the scaling power couple
- 🚨 Stopped EC2 still costs you EBS money
- 🚕 Lyft's compute mix (RIs + ASG of On-Demand + Spot for batch + GPUs for ML) as the canonical cloud-native compute pattern

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Core Storage](../Module-03-Core-Storage/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 7 (Mgmt/Pricing) revisits Savings Plans vs Reserved Instances in cost-optimization depth. Module 8 (Well-Architected) reuses Spot + Auto Scaling under the Cost Optimization and Reliability pillars. Practice Exam 1 has 7 questions drawing directly from this module (compute pricing, Lambda limits, container launch types).
> - Cross-course: `04-AWS-Solutions-Architect-Associate` Module 2 ("Compute Deep Dive") covers Placement Groups, instance metadata, Spot interruption handling, and Lambda concurrency reservations, all of which are tested at SAA-C03 but only mentioned at CLF-C02.
> - Practice: Final Mock Exam revisits with Cloud Tech & Services domain (~22 questions, of which ~5–6 are compute-related).

---

## 💬 Discussion, Socratic prompts

1. **The 15-minute wall.** A team wants to run a 30-minute video transcoding job on Lambda because "serverless is the future." Argue both sides of "should we use Lambda anyway with chunking" vs "use Fargate / Batch instead." Defend one in front of a tech lead who hates Lambda for "philosophical" reasons.
2. **Spot for production?** Most CLF-C02 study guides say "Spot is for non-production." Lyft uses Spot for production batch. Reconcile the two. What's the actual constraint, "production" or "tolerance for interruption"?
3. **The Savings Plan vs Reserved Instance choice.** A company has a steady fleet of ~20 `m5.large` instances for 3 years. Compare RIs (locked instance family) vs Compute Savings Plans (any family, any Region). What is the *implicit* hedge each one represents? Which would you pick if you expect to migrate to Graviton (ARM, `m7g`) within the term?
4. **Beanstalk vs Fargate.** Both are "PaaS-y", upload code, AWS handles infra. When does a team genuinely benefit from Elastic Beanstalk in 2026 vs jumping straight to ECS/Fargate or App Runner? Is Beanstalk a stepping stone or a dead end?
5. **The Graviton question.** AWS's Graviton (ARM-based) processors are 20–40% cheaper than x86 for the same workload (per AWS published benchmarks, 2023). Why hasn't 100% of EC2 fleet moved to Graviton by 2026? What's the friction?

---

## 📚 Further Reading (Optional)

- 📖 [EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/), bookmark this
- 📖 [Lambda Quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
- 📖 [Fargate vs EC2 launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html)
- 📖 [Savings Plans](https://aws.amazon.com/savingsplans/)
- 📖 [Spot Instance best practices](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html)

---

## 📚 Further sources (this module)

- 📄 **AWS Builders' Library *"Reliability, constant work, and a good cup of coffee"*** by Colm MacCárthaigh (AWS Principal Engineer) explains the engineering principles behind EC2's control-plane reliability. Free PDF + audio.
- 📖 **Vogels, W. *"10 Lessons from 10 Years of Amazon Web Services"* (All Things Distributed blog, March 2016)** the origin stories of EC2 (2006), S3 (2006), and Lambda (2014). Lessons #2, #3, and #7 are most relevant here.
- 🎙️ **Lyft @ AWS re:Invent *"How Lyft Uses AWS to Scale Ride-Hailing"* (re:Invent 2019, ARC305)** the engineering case for Lyft's compute mix. YouTube; ~60 min.
- 📰 **Lyft S-1 / Form 10-K (annual)**, primary-source disclosure of AWS commitment, concentration risk, and infrastructure spend.
- 📄 **Roberts, M. *"Serverless Architectures"* (martinfowler.com, August 2016)** the definitive long-form essay that defined "serverless" as a software-architecture pattern, not just a billing model.
- 📄 **AWS *EC2 Spot Best Practices* whitepaper (last updated 2023)** the canonical guide to using Spot in production safely, including the rebalance recommendation API (Application Programming Interface).
