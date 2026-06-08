---
permalink: /03-AWS-Cloud-Practitioner/Capstone-Project/
title: Capstone Project, AWS Cloud Practitioner
---

# Capstone Project, AWS Cloud Practitioner (CLF-C02)

## Brief

You are the **first AWS hire at PrairieRoot**, a 35-person Series-A B2B SaaS startup that just closed a **$4.5M Series A** (lead: Mendoza Ventures, follow-on: Y Combinator, March 2026). PrairieRoot sells supply-chain visibility software to US and EU mid-market manufacturers, your customers care about uptime, GDPR / SOC 2, and cost predictability. The CTO has asked you to build a **6-month cloud-foundation plan** before they hire two more engineers and start building features.

**Budget:** ~$8,000/month gross AWS spend by end of month 6 (post-credits).
**Constraints:**
- The product is a Python FastAPI backend + React frontend + PostgreSQL.
- 4 application engineers, 1 head of data, you (cloud lead), no dedicated DevOps yet.
- Customers in US (60% revenue) and EU (40%).
- Two existing customers signed contracts that require SOC 2 Type II within 12 months.
- Founders are first-time CTO/CEO; they need to *understand* your choices, not just trust them.

You will justify every choice from the **AWS Well-Architected Framework's 6 pillars** (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability) and explain how each choice maps to **CLF-C02 exam question patterns** so the founders can recruit AWS-literate hires from day one.

---

## Deliverables (7 artifacts)

### 1. Account structure diagram (AWS Organizations)
A single diagram showing your AWS Organizations hierarchy: management account + at least 3 member accounts (e.g., `prod`, `staging`, `sandbox` + a dedicated `log-archive` and `security-tooling` account if you want to follow AWS's [Landing Zone Accelerator](https://aws.amazon.com/solutions/implementations/landing-zone-accelerator-on-aws/) pattern). Show SCP boundaries, at minimum one "deny launching outside us-east-1 / eu-west-1" SCP.

### 2. Target architecture diagram (production)
Show the production application stack across **two Regions** (`us-east-1` and `eu-west-1`):

- VPC layout (CIDRs, public + private subnets across 3 AZs each)
- Compute (EC2 ASG behind ALB, OR Fargate behind ALB, defend your choice)
- Data layer (Aurora PostgreSQL Multi-AZ + optional Read Replica)
- S3 buckets (app assets, logs, customer uploads, note Block Public Access)
- CloudFront in front of static assets
- Route 53 (multi-Region routing policy, defend Latency vs Geolocation)
- IAM roles attached to compute (no embedded keys)
- KMS keys + Secrets Manager for DB credentials

### 3. Cost forecast spreadsheet
Use **AWS Pricing Calculator** ([calculator.aws](https://calculator.aws/)) to build a 6-month forecast. Columns at minimum:

- Service
- Quantity / configuration
- Month 1 cost / Month 6 cost
- Pricing model (On-Demand / Savings Plan / Spot / Reserved)
- Justification in 1 sentence

Total month-6 spend must come in at **~$8K/month ± $1K**. Include a clear note on which line items would shift between AZ → multi-Region if PrairieRoot grew to $20M ARR.

### 4. Runbook for the first 3 services
Pick the 3 most-load-bearing services from your architecture (likely: **EC2/Fargate, Aurora, S3**). For each, write a 1-page runbook covering:

- How to launch / configure (CLI snippet or CloudFormation reference)
- IAM permissions required (least-privilege policy stub)
- Monitoring (CloudWatch metrics + alarms to set)
- Backup / DR plan
- Cost guardrails (Budget threshold + Cost Allocation Tag values)
- "What can go wrong", at least 2 common failure modes and the mitigation

### 5. Security baseline checklist
Write a one-page baseline that maps directly to the **CIS AWS Benchmark v3** and the **Capital One breach** lessons (Module 6). At minimum:

- IAM: MFA on root, no root access keys, IAM Identity Center for users, Roles for services
- Network: SGs + NACLs with principle of least open ports, no `0.0.0.0/0` on SSH
- Data: KMS encryption at rest, TLS in transit, Block Public Access on all S3 buckets
- Detective: GuardDuty + Config + CloudTrail (org-trail) + Macie on S3 sensitive buckets
- Compliance: AWS Artifact for SOC 2 readiness; Audit Manager workspace created

### 6. Exam-style scenario write-up
A 1500–2000 word document that walks the founders through:

- **5 CLF-C02 exam question patterns your design solves**, each pattern stated, your design choice that satisfies it, and which Well-Architected pillar it touches.
- 1 specific scenario where your design *deliberately* trades one pillar for another (e.g., you accepted higher Cost in exchange for better Security or Reliability). Defend the trade.
- 1 "things we'll revisit at $20M ARR" section, what changes when PrairieRoot has 10x today's customers.

### 7. Reflection memo (1 page)
A short personal reflection: which Well-Architected pillar was hardest to design around at PrairieRoot's stage, and why? Which AWS service do you wish you understood more deeply before doing this exercise? This is for *your* learning, the memo is mostly for you, but write it as if for a thoughtful mentor.

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **Account structure (AWS Organizations) + SCPs** | 10 | Multi-account landing zone with SCPs, log archive separate, security tooling separate; justified from Security + Operational Excellence pillars | Single-account-with-roles OR basic multi-account without SCPs | "We'll use one account for now" with no justification |
| **Target architecture diagram (multi-Region)** | 15 | Multi-AZ + multi-Region with explicit Route 53 routing, ALB+ASG/Fargate, Aurora Multi-AZ, IAM Roles, KMS, encrypted S3 with BPA; clearly references at least 3 pillars | Single-Region multi-AZ with most components; some pillars cited | Single-AZ; no IAM rationale; ignores EU customers |
| **Cost forecast spreadsheet ($8K/mo)** | 15 | Pricing-Calculator-backed numbers within $1K of $8K target; Savings Plans + Spot used appropriately for non-prod; pricing-model column filled for every line item | Reasonable rough estimate; some pricing-model gaps | "Probably about $X" without itemized breakdown |
| **Runbooks (3 services)** | 15 | Each runbook is operationally usable, covers launch, IAM, monitoring, DR, cost, failure modes; cites CloudWatch alarm thresholds with rationale | Runbooks cover most fields but at high level | "Just check the docs" |
| **Security baseline (Capital One + CIS-grade)** | 15 | Baseline maps to CIS v3, MFA + GuardDuty + Macie + Config + CloudTrail + Block Public Access all addressed; cites the specific Capital One breach lessons explicitly | Standard "best practices" without explicit threat-model linkage | Generic security advice |
| **Exam-style scenario write-up** | 15 | 5 distinct exam patterns mapped to design, 1 explicit pillar-vs-pillar trade defended, $20M ARR future-state section | 3-4 patterns covered, some thin justifications | Vague mapping; no trade-offs called out |
| **Reflection memo** | 5 | Honest self-assessment; names a specific service you'd want to study deeper; ties learning back to the case studies (Capital One, Lyft, Pinterest, Dropbox, Netflix) | Generic reflection | Skipped or perfunctory |
| **Well-Architected pillar coverage** | 10 | All 6 pillars referenced explicitly + at least 1 design choice per pillar | 4–5 pillars covered | Only 1-2 pillars mentioned |

**Pass mark for the capstone: 80/100 overall AND at least "Acceptable" in every criterion.**

---

## Suggested timeline (week-by-week, 6 weeks)

- **Week 1 Discovery.** Read AWS Well-Architected Framework whitepaper (the 10-page summary version), the AWS Cloud Adoption Framework page, the Capital One breach DOJ filings. Don't write anything yet *understand the field*.
- **Week 2, Account structure + IAM baseline.** Deliverable 1 done. Sketch IAM Roles for the typical microservice → S3 / Secrets Manager pattern.
- **Week 3, Target architecture diagram.** Deliverable 2 done. Use [diagrams.net](https://app.diagrams.net) (free) or AWS Architecture Icons. The diagram is your most-referenced artifact going forward.
- **Week 4, Cost forecast + runbooks (EC2/Fargate, Aurora).** Deliverable 3 partially done; deliverable 4 first two runbooks done. Pricing Calculator is your friend.
- **Week 5, S3 runbook + Security baseline.** Deliverable 4 complete; deliverable 5 done.
- **Week 6, Exam write-up + reflection.** Deliverables 6 and 7 done. Re-read your week-1 notes and see what changed.

---

## What "submission" looks like

A single repository or folder containing:

```
capstone-prairieroot/
├── 01-account-structure.png       (or .drawio)
├── 02-target-architecture.png     (or .drawio)
├── 03-cost-forecast.xlsx          (or Google Sheets)
├── 04-runbooks/
│   ├── ec2-fargate.md
│   ├── aurora.md
│   └── s3.md
├── 05-security-baseline.md
├── 06-exam-scenario-writeup.md
└── 07-reflection.md
```

**Self-grading.** Score yourself against the rubric on day 7 after writing. Then ask a peer (or AI) to score you blind. If your self-score and the peer score differ by more than 15 points, you've identified your blind spots, those become your next study targets.

**Peer-review prompt (give your reviewer this verbatim):** *"Here is my AWS Cloud Practitioner capstone. Score me against the rubric in `/capstone-project.md`. I'm specifically looking for: (1) any pillar I under-addressed, (2) any pricing-model misuse (Spot for the wrong workload, On-Demand where SP should win), (3) any IAM design that wouldn't pass a Capital-One-breach-style audit. Be tough."*

---

## Optional stretch goals

1. **Deploy a single service for real.** Sign up for the AWS Free Tier and actually deploy your EC2/Fargate + ALB + Aurora stack in one Region. Document what surprised you. (Stay within the free tier!)
2. **Run the AWS Well-Architected Tool against your design.** It's free and walks through every pillar, completing it gives you a real action list.
3. **Add a Disaster Recovery section.** Document RTO and RPO targets for tier-1 services. What's PrairieRoot's actual recovery story if `us-east-1` goes down for 6 hours (à la December 2021)?
4. **Add a FinOps culture plan.** How do you make sure 4 application engineers don't accidentally spin up a `p4d.24xlarge` to "test something"? What's the Budget alert threshold, who gets paged, what's the autoscaling cap?
5. **Map your design to the Sustainability pillar specifically.** Most CLF-C02 students skip this pillar. Identify 3 specific choices you made (or could make) that reduce carbon footprint, Graviton, Spot for batch, S3 lifecycle to Deep Archive, Region choice (some AWS Regions run on more renewable energy than others; see AWS sustainability data 2024).

---

## Why this capstone counts

The CLF-C02 is a multiple-choice exam. This capstone forces you to produce the *artifacts a real cloud lead would carry into a Series-A startup*, diagrams, cost models, runbooks, security baselines, written justifications. Doing the exercise gives you the language to walk into your first AWS interview and answer "how would you set up our cloud foundation?" with specifics, not platitudes.

It also forces you to integrate **every module** of this course. The architecture diagram uses compute + storage + networking + databases (Modules 2–5). The security baseline uses IAM + KMS + GuardDuty + Macie (Module 6). The cost forecast uses Pricing Calculator + Budgets + Cost Allocation Tags (Module 7). The whole thing is judged against the 6 Well-Architected pillars (Module 8). You can't do this well without owning the whole course.

---

➡️ When done, return to the [README](./README.md) for next steps, or browse the [Recommended Readings](./Recommended-Readings.md) appendix.
