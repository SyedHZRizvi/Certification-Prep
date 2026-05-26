---
permalink: /04-AWS-Solutions-Architect-Associate/
title: AWS Solutions Architect Associate Track (SAA-C03)
---

# ☁️ AWS Solutions Architect Associate Track (SAA-C03)

**☁️ Cloud · AWS** › Solutions Architect — Associate

> **Goal:** Pass the AWS Certified Solutions Architect – Associate exam (SAA-C03) with 750+/1000
> **Duration:** 8 weeks part-time (or 4 weeks full-tilt if you already know cloud basics)
> **Cost:** $150 USD (cert is valid 3 years; renewal via recertification exam or higher-level cert)
> **Difficulty:** Associate · prior AWS exposure (CLF-C02 or equivalent) recommended

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:
- Design **resilient** multi-AZ and multi-region architectures
- Pick the **right compute** (EC2 family, ASG, Lambda, ECS, Fargate) for the workload
- Design **secure** systems with IAM, KMS, Security Groups, NACLs, and least privilege
- Build **decoupled** systems with SQS / SNS / EventBridge / Step Functions
- Choose between RDS, Aurora, DynamoDB, ElastiCache, and Redshift — and know **when** to use each
- Optimize **cost** with the right purchase options, storage tiers, and lifecycle policies
- Pick the right **DR strategy** (Backup & Restore → Pilot Light → Warm Standby → Multi-Site)
- Read a scenario in 60 seconds and pick the **most cost-effective** or **most resilient** answer

---

## 📚 The 10 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Foundations & Well-Architected](./Module-01-Foundations-Well-Architected/Reading.md) | 2.5 hrs | 6 pillars, shared responsibility, global infra |
| 2 | [IAM & Organizations](./Module-02-IAM-Organizations/Reading.md) | 3 hrs | Users, roles, policies, SCPs, Identity Center, STS |
| 3 | [EC2 Deep Dive](./Module-03-EC2-Deep-Dive/Reading.md) | 3.5 hrs | Instance families, purchase options, ASG, ELB |
| 4 | [VPC Deep Dive](./Module-04-VPC-Deep-Dive/Reading.md) | 4 hrs | Subnets, NAT, endpoints, TGW, Direct Connect |
| 5 | [S3 Deep Dive](./Module-05-S3-Deep-Dive/Reading.md) | 3 hrs | Storage classes, lifecycle, encryption, replication |
| 6 | [Databases](./Module-06-Databases/Reading.md) | 3.5 hrs | RDS, Aurora, DynamoDB, ElastiCache, Redshift |
| 7 | [Decoupling & Integration](./Module-07-Decoupling-Integration/Reading.md) | 3 hrs | SQS, SNS, EventBridge, Step Functions, Kinesis |
| 8 | [Caching, CDN & Edge](./Module-08-Caching-CDN-Edge/Reading.md) | 2.5 hrs | CloudFront, Global Accelerator, DAX |
| 9 | [Monitoring & Cost Optimization](./Module-09-Monitoring-Cost-Optimization/Reading.md) | 2.5 hrs | CloudWatch, CloudTrail, X-Ray, Cost Explorer |
| 10 | [DR, Migration & Hybrid](./Module-10-DR-Migration-Hybrid/Reading.md) | 2.5 hrs | DR strategies, DMS, Snow family, Storage Gateway |

**Total study time:** ~30 hours of reading + 12 hours of videos + 10 hours of quizzes/exams = **~52 hours**

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Questions | Time | Difficulty |
|------|-----------------|-----------|------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–5 | 32 | 65 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 6–10 | 50 | 100 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 1–2 days before real exam | 65 | 130 min | ⭐⭐⭐⭐⭐ |

**Plus:** Take the [AWS Official SAA-C03 Sample Questions](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf) (10 questions, free). Get 9/10 before booking.

---

## 📖 The Single Most Important Resource

🔗 **[AWS SAA-C03 Exam Guide (official PDF)](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf)** — 17 pages. Read it twice. The blueprint lists every service in scope and the proportion of questions per domain. If our content contradicts the official guide, the official guide wins.

Also pin these:
- 🔗 **[AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)** — six pillars; quoted directly in exam questions
- 🔗 **[AWS Architecture Center](https://aws.amazon.com/architecture/)** — reference architectures
- 🔗 **[AWS Pricing Calculator](https://calculator.aws/)** — practice picking the cost-optimized option

---

## 🎓 What Is The SAA-C03 Exam?

| Detail | Specification |
|--------|---------------|
| Provider | AWS (via Pearson VUE or PSI online proctor) |
| Cost | $150 USD |
| Time | 130 minutes |
| Questions | 65 (50 scored + 15 unscored — you don't know which) |
| Format | Multiple-choice (single answer) and multiple-response (2+ answers) |
| Pass mark | **720 / 1000** (≈ 72%) — scaled score, not raw % |
| Languages | English, Japanese, Korean, Simplified Chinese (+ more) |
| Delivery | Online proctored or in-person test center |
| Validity | 3 years; renew with any current AWS associate/pro/specialty cert or recert exam |
| Retake | 14-day wait between attempts; no annual cap |

### 📊 Domain Weights (Memorize These — They Tell You Where to Spend Study Time)

| Domain | Weight |
|--------|--------|
| **Design Secure Architectures** | 30% |
| **Design Resilient Architectures** | 26% |
| **Design High-Performing Architectures** | 24% |
| **Design Cost-Optimized Architectures** | 20% |

🧠 **Memory hook:** **S**ecure > **R**esilient > **H**igh-perf > **C**ost (≈ 30/26/24/20). Security is biggest — never skimp on IAM and encryption study.

---

## 🚦 Recommended Path

### 8-Week Plan (Recommended — Sustainable)

```
Week 1: Module 1 (Foundations)        + Module 2 (IAM)
Week 2: Module 3 (EC2)
Week 3: Module 4 (VPC)                + Practice Exam 1
Week 4: Module 5 (S3)
Week 5: Module 6 (Databases)
Week 6: Module 7 (Decoupling)         + Module 8 (CDN)
Week 7: Module 9 (Monitoring)         + Module 10 (DR/Migration) + Practice Exam 2
Week 8: Re-watch weak topics + Final Mock Exam + REAL EXAM
```

### 4-Week Sprint (if You Already Know Cloud Basics)

```
Week 1: Modules 1-3
Week 2: Modules 4-6 + Practice Exam 1
Week 3: Modules 7-10 + Practice Exam 2
Week 4: Flashcards + Final Mock + REAL EXAM
```

---

## ⚠️ The 7 Most Common Reasons People Fail

1. ❌ **Memorizing services instead of comparing them.** The exam asks "which is the BEST fit" — you must rank options. (Example: SQS vs SNS vs EventBridge — when each one?)
2. ❌ **Skipping VPC and IAM.** Networking and security are ~50% of the exam combined. They're also the hardest. Do not rush them.
3. ❌ **Ignoring the cost-optimized angle.** Many "correct" answers are cheaper, not just technically valid. Always ask: which uses *less* compute, *cheaper* storage, *fewer* idle resources?
4. ❌ **Confusing Multi-AZ with Read Replicas** in RDS. Multi-AZ = HA. Read Replicas = read scaling. Easy points if you nail this.
5. ❌ **Not practicing scenario reading.** SAA questions are long. Train yourself to find the keyword (*"durability"*, *"sub-millisecond"*, *"existing on-prem app, lift-and-shift"*) that decides the answer.
6. ❌ **Treating Lambda / EC2 / ECS / Fargate as interchangeable.** Each has clear scenarios. Learn them cold.
7. ❌ **Booking the exam before doing all 3 practice exams.** If you can't hit 80% on Practice-Exam-2 and the Final Mock, you're not ready.

---

## 🃏 Flashcards

🔗 **[Master Flashcards](./Flashcards.md)** — 100+ cards covering every module. Use the interactive widget (mark "Got it" to skip in future sessions).

---

## 🏗️ Capstone Project

🔗 **[Capstone Project — Larkin Health Analytics migration](./Capstone-Project.md)** — Once you've finished all 10 modules, the capstone is the Cornell/Harvard/Stanford-grade synthesis exercise: a 7-deliverable migration design for a Series-C healthcare SaaS (~$2.8M budget, 9-month deadline, HIPAA + GDPR + SOC 2). Rubric scored out of 100. This is the difference between "I passed SAA" and "I could lead this at a real company on Monday."

---

## 📚 Recommended Readings

🔗 **[Recommended Readings — full bibliography](./Recommended-Readings.md)** — 65+ curated sources: canonical textbooks (Kleppmann's *DDIA*, the Sybex SAA study guide, *The Phoenix Project*, the Google SRE Book), seminal academic papers (CAP, Paxos, Dynamo, Aurora SIGMOD), the AWS Builders' Library essays, re:Invent talks 2014–2024, industry blogs (Quinn, DeBrie, Cockcroft), and three free academic courses (MIT 6.824, Stanford CS245, CMU 15-721). Sequenced by where in the course to engage with each.

---

## 🎬 Start Here

👉 [**Module 1: Foundations & Well-Architected**](./Module-01-Foundations-Well-Architected/Reading.md)

You got this. ☁️💪
