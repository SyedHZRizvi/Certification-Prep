---
permalink: /03-AWS-Cloud-Practitioner/
title: AWS Cloud Practitioner Track (CLF-C02)
---

# ☁️ AWS Cloud Practitioner Track (CLF-C02)

> **Goal:** Pass the AWS Certified Cloud Practitioner exam with 800+/1000
> **Duration:** 4 weeks part-time (~30 hours total)
> **Cost:** $100 USD (cert is valid 3 years)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:
- Explain core cloud concepts (regions, AZs, edge locations, IaaS/PaaS/SaaS)
- Pick the right AWS service for a given workload (EC2 vs Lambda, S3 vs EBS vs EFS, RDS vs DynamoDB, etc.)
- Apply the AWS Shared Responsibility Model and basic IAM hygiene
- Understand AWS pricing, billing tools, and support plans
- Speak fluently about the Well-Architected Framework's 6 pillars and migration strategies (the 6 Rs)
- Pass the CLF-C02 with confidence — no AWS work experience required

---

## 📚 The 8 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Cloud Fundamentals](./Module-01-Cloud-Fundamentals/Reading.md) | 3 hrs | What "cloud" really is, AWS global infrastructure, deployment models |
| 2 | [Core Compute](./Module-02-Core-Compute/Reading.md) | 3 hrs | EC2 families, Lambda, ECS/Fargate, Lightsail, Batch, Outposts |
| 3 | [Core Storage](./Module-03-Core-Storage/Reading.md) | 3 hrs | S3 storage classes, EBS, EFS, FSx, Storage Gateway, Snow Family |
| 4 | [Networking & CDN](./Module-04-Networking-CDN/Reading.md) | 3 hrs | VPC basics, Route 53, CloudFront, ELB, API Gateway, Direct Connect |
| 5 | [Databases](./Module-05-Databases/Reading.md) | 3 hrs | RDS, Aurora, DynamoDB, ElastiCache, Redshift, DocumentDB, Neptune |
| 6 | [Security, Identity & Compliance](./Module-06-Security-Identity-Compliance/Reading.md) | 3.5 hrs | IAM, KMS, Shield, GuardDuty, WAF, Macie, Inspector, Shared Responsibility |
| 7 | [Management, Monitoring & Pricing](./Module-07-Management-Monitoring-Pricing/Reading.md) | 3 hrs | CloudWatch, CloudTrail, Config, Trusted Advisor, Cost Explorer, pricing models |
| 8 | [Well-Architected & Migration](./Module-08-Well-Architected-Migration/Reading.md) | 2.5 hrs | 6 pillars, 6 Rs of migration, CAF, support plans, AWS Partner Network |

**Total study time:** ~24 hours of reading + 6 hours of videos + flashcards/quizzes = **~30 hours**

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty |
|------|-----------------|--------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After finishing Modules 1–4 | 32 Qs / 45 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After finishing Modules 5–8 | 50 Qs / 70 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | One day before the real exam | 65 Qs / 90 min (real exam length) | ⭐⭐⭐⭐⭐ |

**Plus:** Take AWS's [Official Practice Question Set (CLF-C02)](https://explore.skillbuilder.aws/learn/course/14050/aws-certified-cloud-practitioner-official-practice-question-set-clf-c02-english) for free in AWS Skill Builder. Score 80%+ before booking.

---

## 📖 The Single Most Important Resource

🔗 **[AWS Cloud Practitioner Exam Guide (CLF-C02)](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf)** — 20 pages. Read it twice. Every question on the exam maps to one of the four domains listed in this PDF. If a flashcard contradicts the exam guide, the exam guide wins.

Pair it with **[AWS Cloud Practitioner Essentials](https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials)** (free, ~6 hours) on AWS Skill Builder — the closest thing to an "official" course.

---

## 🎓 What Is The AWS Cloud Practitioner Exam?

| Detail | Specification |
|--------|---------------|
| Provider | Amazon Web Services (AWS) |
| Code | CLF-C02 (released September 2023) |
| Cost | $100 USD |
| Time | 90 minutes |
| Questions | 65 (50 scored + 15 unscored research questions, all multiple choice / multiple response) |
| Pass mark | 700 / 1000 (≈ 70%) |
| Format | Online proctored (Pearson VUE / PSI) **or** at a Pearson VUE test center |
| Retake | 14-day wait after a fail; $100 each attempt |
| Validity | 3 years (recertify by retaking exam or passing any higher AWS cert) |
| Prerequisites | None — no AWS experience required |

### Domain weights (memorize these!)

| Domain | Weight |
|--------|--------|
| Cloud Concepts | 24% |
| Security & Compliance | 30% |
| Cloud Technology & Services | 34% |
| Billing, Pricing & Support | 12% |

Notice **Security + Cloud Tech = 64%** — that's two-thirds of your studying right there.

---

## 🚦 Recommended Path

```
Week 1: Modules 1 & 2 → Quizzes → start flashcards (Section 1-2)
Week 2: Modules 3 & 4 → Practice Exam 1
Week 3: Modules 5 & 6 → Quizzes → flashcards (Section 4-6)
Week 4: Modules 7 & 8 → Practice Exam 2 → Final Mock → REAL EXAM
```

**Daily ritual:** 30 min reading + 15 min flashcards. The flashcards do more for retention than re-reading.

---

## ⚠️ The 7 Most Common Reasons People Fail

1. ❌ Studied AWS like a developer ("I need to spin up EC2 to learn it") — the exam tests *concepts*, not console clicks
2. ❌ Skipped the Shared Responsibility Model — it shows up in 5+ questions
3. ❌ Confused S3 storage classes (Standard vs IA vs One Zone-IA vs Glacier tiers)
4. ❌ Didn't memorize the 4 AWS Support plans (Basic / Developer / Business / Enterprise) and what each includes
5. ❌ Treated IAM users and IAM roles as the same thing — they're not
6. ❌ Didn't practice with timed exams (90 min for 65 Qs = ~80 sec per question; you need pace)
7. ❌ Studied deprecated services (e.g. classic SimpleDB, old EC2-Classic) — CLF-C02 is the **current** version, ignore content older than Sep 2023

---

## 💡 Free hands-on (optional but highly recommended)

You don't *need* hands-on for CLF-C02 — but 4–6 hours of clicking around the AWS console makes the concepts stick.

- Create a free [AWS Free Tier account](https://aws.amazon.com/free/) (12 months free for many services)
- Launch a `t2.micro` EC2 instance, SSH in, terminate it
- Create an S3 bucket, upload a file, make it public (then delete it!)
- Create an IAM user, attach the `ReadOnlyAccess` policy, log in as them
- Set a $5 Billing Alarm in CloudWatch

That's it. You've now *touched* most of what's on the exam.

---

## 🎬 Start Here

👉 [**Module 1: Cloud Fundamentals**](./Module-01-Cloud-Fundamentals/Reading.md)

You got this. ☁️
