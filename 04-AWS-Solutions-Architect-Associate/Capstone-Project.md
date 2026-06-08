---
permalink: /04-AWS-Solutions-Architect-Associate/Capstone-Project/
title: Capstone Project, AWS Solutions Architect Associate (SAA-C03)
---

# Capstone Project, AWS Solutions Architect Associate ☁️

> **Why this exists.** The SAA-C03 exam tests whether you can pick the right service. A real architect role tests whether you can design a system that survives reality: a board-level budget, a non-negotiable SLA, a 9-month deadline, and a CISO who reviews your decisions. This capstone forces you to integrate every module of this course into one defensible architecture, the kind you'd present at a Harvard MBA case discussion or a re:Invent customer keynote.

---

## 🎯 Brief

You are the **newly-hired Lead Cloud Architect at "Larkin Health Analytics"**, a Series-C SaaS company headquartered in Boston with a satellite office in Berlin.

| Aspect | Detail |
|---|---|
| Stage | Series-C; closed a $90M round October 2025 led by Bessemer + Sequoia |
| Headcount | 150 engineers (40 frontend, 60 backend, 25 data/ML, 15 DevOps, 10 security/compliance) |
| MAU | 4 million active users in healthcare and life-sciences orgs across the US and EU |
| Revenue | $42M ARR (FY2025); ~$70M ARR target for FY2026 |
| Compliance | HIPAA (US health data), GDPR (EU residents), SOC 2 Type II |
| Existing infra | Monolithic Rails app + PostgreSQL on a single colocation facility in Massachusetts; one Sidekiq worker fleet; an unmanaged ML serving layer on a single GPU box |

**The mandate from the CEO and Board.** Migrate everything to AWS within **9 months** with a **$2.8M total budget** for the migration program (cloud spend, tooling, and short-term consulting included). Maintain a **99.95% SLA** on production user-facing traffic during and after the cut-over. Ship at least three new features in parallel, the business does not pause for the migration. The CISO has set additional non-negotiables: zero PII in test environments, every backup encrypted with customer-managed KMS, no cross-region data egress outside US-East-1 / US-West-2 / EU-Central-1, and no production write access for any human (humans use Identity Center; production writes happen through CI/CD).

---

## 📦 Deliverables

You will produce **seven artifacts**. Each artifact must integrate concepts from at least three modules of this course.

### Deliverable 1, Target Architecture Diagram (single page)

A high-resolution architecture diagram on one page (legal-size print). Must include:

- All three target regions (us-east-1, us-west-2, eu-central-1) with their primary roles
- Every AWS service in use, drawn with the official AWS icon set
- Network topology: VPC layout, subnets, NAT/IGW, VPC endpoints, Transit Gateway, Direct Connect to remaining on-prem
- Data flow arrows for synchronous and asynchronous traffic
- Security boundaries (SCPs, KMS keys, IAM roles)
- DR topology (active-passive between us-east-1 and us-west-2)
- Bedrock, SageMaker, or other AI/ML services if you choose to include them

Cite **Modules 1, 4, 8, 10**.

### Deliverable 2, Migration Runbook (12–20 pages)

A step-by-step migration plan that a new engineer can read and execute. Must include:

- Wave-by-wave migration schedule (typically 3–5 waves across 9 months)
- Specific use of **AWS Application Migration Service (MGN)** for VMs and **Database Migration Service (DMS) + Schema Conversion Tool (SCT)** for PostgreSQL → Aurora PostgreSQL
- Cut-over procedures for each wave (including blue-green deploys at the LB layer)
- Rollback procedures for each wave
- Communication plan (when stakeholders are notified, what the customer-facing status page says)
- Risk register with mitigations
- Game Day schedule (when, what scenario, who participates)

Cite **Modules 2, 6, 10**.

### Deliverable 3, Cost Model & TCO Comparison (spreadsheet + 3-page memo)

A 3-year TCO model comparing:

- **Option A:** Stay on-prem, refresh hardware in year 2 ($1.8M capex + $700K/yr opex)
- **Option B:** Lift-and-shift to AWS (all EC2, EBS, RDS, no refactoring)
- **Option C:** Modernize to AWS-native (Aurora Serverless v2, Lambda for async, ECS Fargate for web tier, DynamoDB for hot reads, CloudFront + S3 for static, Bedrock for ML inference)

For each option, calculate:

- Monthly run-rate at month 12, month 24, month 36
- Migration / refactor cost
- 3-year fully-loaded TCO
- Risk-adjusted NPV at 10% discount rate
- Break-even point against Option A

The accompanying memo (3 pages, addressed to the CFO) must **recommend one option with justification**. Show your work; quantify the risks.

Cite **Modules 3, 5, 6, 9**.

### Deliverable 4, Well-Architected Security Review (10–14 pages)

A formal Well-Architected Review focused on the Security pillar, structured as a memo to the CISO. Must address:

- How HIPAA compliance is achieved (BAA with AWS, encryption everywhere, audit logging via CloudTrail Organization Trail, AWS Config rules for ongoing compliance, AWS Audit Manager for SOC 2)
- GDPR controls (data residency via SCP, right-to-erasure pipeline, consent record storage)
- IAM design: Identity Center for humans, federated to corporate Okta; permission sets per role; SCPs locking root in member accounts and denying region usage outside the approved list
- Network segmentation: VPC + subnet + Security Group strategy; PrivateLink for vendor connections; VPC endpoints for AWS service calls
- Encryption: customer-managed KMS keys per data classification level; key rotation policy; cross-region replication of KMS-encrypted data
- Detection: GuardDuty, Macie (for PII in S3), Inspector (for container CVEs), Security Hub (aggregation)
- Response: SOC 2 Type II requirements for incident response; runbooks; sample tabletop exercise

Cite **Modules 1, 2, 5, 9**. Reference **Capital One's 2019 breach** (Module 2 case study) and **Sony PSN's 2011 incident** (Module 10) explicitly to demonstrate awareness of how these architectures actually fail.

### Deliverable 5, DR / BCP Plan (8–12 pages)

A complete Disaster Recovery and Business Continuity Plan. Must include:

- Quantified RPO and RTO for each tier (e.g., Tier 1: customer-facing traffic, RPO 30s / RTO 5min; Tier 2: analytics, RPO 4hr / RTO 24hr)
- Justification for choosing **Warm Standby** in us-west-2 against the **Multi-Site Active-Active** alternative, show the cost delta and decide whether the customer's SLA contractually requires the more expensive tier
- **Aurora Global Database** for the primary OLTP store; **DynamoDB Global Tables** for session state; **S3 Cross-Region Replication** with versioning + **Object Lock in Compliance mode** for compliance-critical buckets
- **Route 53 health-checked failover routing** for DNS
- Communication plan during a disaster (status page integration, customer notification SLAs)
- Quarterly Game Day schedule using **AWS Fault Injection Service** to validate the plan
- A specific simulation: what happens if us-east-1 fails completely for 8 hours, including manual approvals required and expected RTO actuals

Cite **Modules 1, 6, 8, 10**. Reference the **AWS us-east-1 outages of Dec 2021 and June 2023** (Module 8 case study).

### Deliverable 6, Post-Migration Optimization Roadmap (6-page memo)

A 12-month optimization roadmap that the CFO and CTO will review jointly. Must include:

- A specific commitment plan: when to convert On-Demand spend to **Compute Savings Plans** and **Reserved Instances** (modeled after Pinterest's $4M optimization, Module 3 case study)
- A FinOps tagging policy enforced via SCPs ("untagged resources cannot be created in prod accounts")
- A Spot Fleet strategy for stateless web tier and batch (e.g., 60% Spot + 40% On-Demand mixed-instances policy)
- A right-sizing program using **AWS Compute Optimizer** with named owners and a 90-day review cadence
- A bandwidth optimization plan: VPC Endpoints for SNS/SQS/EventBridge (Module 7's Slack case study), CloudFront for egress, S3 Gateway Endpoint for private-subnet S3 access
- A **sustainability commitment**: 50%+ of compute on Graviton by month 12; baseline carbon intensity per transaction; report quarterly

Cite **Modules 3, 7, 9**.

### Deliverable 7, Executive Summary Memo (2 pages)

A 2-page executive summary addressed to the CEO and Board. Must include:

- Recommended option (from Deliverable 3)
- Why this option vs alternatives (1 paragraph)
- The 9-month timeline (Gantt-style summary)
- Total 3-year TCO and risk-adjusted NPV
- The top three risks and their mitigations
- One specific board-level decision the CEO needs to escalate (e.g., a regional residency contract negotiation, or a vendor lock-in trade-off)

Cite the breadth of the course, this memo should reference every other deliverable.

---

## 🏆 Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|---|---|---|---|---|
| **Architecture diagram quality** (D1) | 15 | Single legal-size page, all 7+ AWS services drawn with correct icons, network and DR layers visible, data classification labels on each store. Diagram passes a peer review at a senior architect level. | All major components present but with one or two gaps; legends incomplete; data flow arrows mostly correct. | Generic diagram; missing AZ/region detail; no data flow; uses wrong icon set. |
| **Migration runbook executability** (D2) | 15 | A new engineer could execute the runbook without further questions. Specific AWS service choices justified. Rollback procedures tested in a sandbox. | Steps present but with some hand-waving on cut-over specifics. Rollback exists but is generic. | "Migrate to AWS in 3 phases" without specifics; no rollback section. |
| **Cost model rigor** (D3) | 15 | TCO model uses actual AWS pricing (calculator-verified). Three options compared with NPV calculation. Risks quantified (e.g., "Aurora Serverless v2 spend at 95th percentile peak: $X"). Recommendation defended against objections. | Two options compared; pricing reasonable but undocumented; risk discussion qualitative. | One option; back-of-envelope math; no risk-adjusted analysis. |
| **Security Well-Architected review** (D4) | 15 | All HIPAA + GDPR + SOC 2 controls mapped to specific AWS services. Capital One and Sony PSN lessons cited. Tabletop exercise included. Encryption at rest, in transit, and at the application layer all addressed. | Most controls mapped; one or two gaps (e.g., missing key rotation policy); compliance frameworks named but not deeply connected. | Generic "encrypt everything" without specifics; no HIPAA BAA reference. |
| **DR/BCP plan defensibility** (D5) | 15 | Warm Standby vs Multi-Site choice quantified with cost-of-downtime calculation. RPO/RTO per tier. Aurora Global Database + DynamoDB Global Tables + S3 CRR + Object Lock all included. Game Day calendar. The us-east-1 outage scenario walked through. | Most DR elements present; Game Day mentioned but not scheduled. | "We will use multi-region" without specifics. |
| **Cost optimization roadmap** (D6) | 10 | Specific Savings Plan / RI commitments by month with break-even math. SCP-enforced tagging policy. Spot fleet target percentages. Graviton migration plan with %% target. | Most levers identified; specific %% targets missing. | Generic cost optimization checklist. |
| **Executive summary clarity** (D7) | 10 | CEO/Board would read this in 4 minutes and feel ready to approve. Single specific escalation question for the board. Three real risks with mitigations. | Most exec content present; reads dense; risks named but not prioritized. | "We recommend migrating to AWS" without specifics. |
| **Cross-module integration** (all) | 5 | Every module of the course shows up at least once with explicit citation. The three case studies (Netflix, Capital One, Pinterest at minimum) are referenced. | Most modules visible; case studies mentioned in passing. | Disconnected deliverables; one or two modules ignored. |

**Passing total:** 70/100. **Strong submission:** 85+/100. **Distinguished:** 95+/100.

---

## 🗓️ Suggested timeline (6 weeks for the capstone itself)

| Week | Focus | Deliverables in progress |
|---|---|---|
| **1** | Discovery + the architecture sketch | D1 first draft; D2 outline; D3 spreadsheet skeleton |
| **2** | Lock the architecture; build the cost model | D1 second pass; D3 first complete model |
| **3** | Security and compliance deep-dive | D4 full draft; cross-references to D1, D2, D3 |
| **4** | DR / BCP + cost optimization | D5 full draft; D6 full draft |
| **5** | Iteration on cost; integrate everything | D3 finalized; D1 final version; D2 finalized |
| **6** | Executive summary; peer review; polish | D7; final QA across all 7 deliverables |

If you're doing this alongside a full-time job, double the timeline (12 weeks).

---

## 📋 What "submission" looks like

You're producing this for yourself, your portfolio, and (if applicable) your study group or mentor. Suggested file layout:

```
capstone-larkin-health/
  README.md
  D1-architecture-diagram.pdf        (single legal-size page, exported from draw.io / Lucidchart / Excalidraw)
  D2-migration-runbook.pdf           (12–20 pages)
  D3-cost-model.xlsx                 (multi-tab; columns for each option, year, month)
  D3-cost-memo.pdf                   (3 pages)
  D4-security-review.pdf             (10–14 pages)
  D5-dr-bcp-plan.pdf                 (8–12 pages)
  D6-optimization-roadmap.pdf        (6 pages)
  D7-executive-summary.pdf           (2 pages)
  /diagrams                          (source files in draw.io / lucid / excalidraw format)
  /research                          (citations, AWS pricing screenshots, dated 2026)
```

### Self-grading protocol

After completing all 7 deliverables, **wait 1 week**, then re-read your own work as if you were a a senior examiner. Apply the rubric above. The week's distance reveals where your reasoning was hand-wavy. Most students lose 15-20 points on this re-read.

### Peer-review protocol (optional but strongly recommended)

Find one peer in your study group and exchange capstones. Spend 90 minutes critiquing each other's work using the rubric. Ground rules:

- No "this is good" praise, give a number per criterion
- For any score under 90%, write a one-paragraph justification with specifics
- Identify the single decision in their architecture you would have made differently, and why

A capstone that survives a peer review is portfolio-grade.

---

## 🎁 Optional stretch goals

Once the seven core deliverables are done, the following extensions distinguish exceptional submissions:

1. **Build a working prototype.** Use AWS CDK or Terraform to deploy a minimum-viable version of the target architecture (VPC + ALB + ECS Fargate + Aurora + S3 + CloudFront). Cost-cap at $50/month. Tear down after a week.
2. **Run a real Well-Architected Tool review.** Use AWS's free [Well-Architected Tool](https://aws.amazon.com/well-architected-tool/) on your prototype account; export the report; explain any gaps.
3. **Threat-model the architecture.** Use the STRIDE methodology (Shostack 2014, *Threat Modeling: Designing for Security*) on the highest-risk component (typically the customer-facing API). Document threats and mitigations.
4. **Cost benchmark.** Submit your cost model to the [/r/AWSCertifications](https://www.reddit.com/r/AWSCertifications/) or [/r/aws](https://www.reddit.com/r/aws/) community for sanity-checking. Iterate based on feedback.
5. **Present the capstone.** Build a 15-slide deck and present to a study group, a mentor, or a recording for your own portfolio. Defending the design out loud surfaces weak points fast.

---

## 📚 Resources to draw on

Beyond this course's modules:

- **AWS Well-Architected Tool**, free; runs through the same review you're producing in D4
- **AWS Pricing Calculator** (`calculator.aws`), for D3's TCO model
- **AWS Architecture Center** (`aws.amazon.com/architecture/`), reference architectures for healthcare, SaaS, fintech
- **AWS Solutions Library**, pre-built reference implementations for common patterns
- **AWS Builders' Library** essays, particularly Marc Brooker's posts on resilience and Becky Weiss on AZ design
- **NIST SP 800-53 Rev 5** (free PDF), control catalogue useful for D4
- **NIST SP 800-66 Rev 2** (free PDF), HIPAA Security Rule implementation guide
- **AWS HIPAA Compliance Whitepaper** (`docs.aws.amazon.com/whitepapers/latest/architecting-hipaa-security-and-compliance-on-aws/`)

---

## 🎓 Closing note

If you ship this capstone in earnest not as a homework exercise but as the document you'd defend to a real CTO you will be in the top quartile of SAA-C03 holders worldwide. Most certifications stop at "passed the exam." The Harvard / Stanford / Cornell bar is "could walk into a Series-C company on Monday and lead this." That's what this capstone simulates.

Good luck. The discipline pays compounding returns for the rest of your career.

— *Built to the graduate-level professional standard. Spec: `_dev/CORNELL_BAR_SPEC.md`*
