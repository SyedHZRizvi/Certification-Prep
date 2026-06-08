# ✏️ Module 8 Quiz: Well-Architected & Migration

> **Instructions:** 24 questions. Aim for 20/24 minimum. Final module, bring it home!

---

## Questions

### Q1. How many pillars does the AWS Well-Architected Framework have? *(Remember)*
A. 4
B. 5
C. 6
D. 7

---

### Q2. Which is NOT one of the Well-Architected pillars? *(Analyze)*
A. Operational Excellence
B. Reliability
C. Migration
D. Sustainability

---

### Q3. The Sustainability pillar was added in: *(Remember)*
A. 2015
B. 2018
C. 2021
D. 2024

---

### Q4. A company is moving a VM-based app to AWS with no code changes, just running it on EC2. This is: *(Apply)*
A. Refactor
B. Rehost (lift-and-shift)
C. Repurchase
D. Retire

---

### Q5. A team rewrites a monolithic app as Lambda + DynamoDB + API Gateway. This is: *(Apply)*
A. Refactor (Re-architect)
B. Replatform
C. Repurchase
D. Retain

---

### Q6. Which migration strategy involves switching from an on-prem CRM to Salesforce SaaS? *(Apply)*
A. Rehost
B. Replatform
C. Repurchase
D. Refactor

---

### Q7. A company decides to keep an app on-prem for now due to compliance, they may revisit later. This is: *(Apply)*
A. Retire
B. Retain
C. Rehost
D. Refactor

---

### Q8. Which AWS service is the modern lift-and-shift tool for migrating SERVERS (replacing CloudEndure / SMS)? *(Remember)*
A. AWS DMS
B. AWS Application Migration Service (MGN)
C. AWS DataSync
D. AWS Snowball

---

### Q9. To migrate a large on-prem MySQL database to Aurora PostgreSQL with minimal downtime, use: *(Apply)*
A. MGN
B. DMS + Schema Conversion Tool (SCT)
C. DataSync
D. Storage Gateway

---

### Q10. To bulk-transfer files from on-prem NFS shares to Amazon EFS or S3, the BEST service is: *(Apply)*
A. AWS DataSync
B. AWS MGN
C. AWS DMS
D. AWS Direct Connect

---

### Q11. The AWS Cloud Adoption Framework (CAF) is organized into HOW MANY perspectives? *(Remember)*
A. 4
B. 6
C. 8
D. 10

---

### Q12. Which is NOT a CAF perspective? *(Analyze)*
A. Business
B. People
C. Migration
D. Operations

---

### Q13. The free service that walks you through a self-assessment against the Well-Architected Framework is: *(Remember)*
A. AWS Trusted Advisor
B. AWS Config
C. AWS Well-Architected Tool
D. AWS Migration Hub

---

### Q14. AWS Partner Network (APN) tiers are (lowest to highest): *(Remember)*
A. Bronze → Silver → Gold
B. Select → Advanced → Premier
C. Basic → Standard → Premium
D. Starter → Pro → Enterprise

---

### Q15. Which is the BEST description of "AWS Managed Services" (AMS)? *(Understand)*
A. AWS's catalog of managed services like RDS, Lambda, S3
B. A service where AWS OPERATES your AWS account for you (Enterprise-tier offering)
C. AWS's online training
D. A free community forum

---

### Q16. Which Well-Architected pillar focuses on making frequent, small, reversible changes and learning from operational events? *(Understand)*
A. Operational Excellence
B. Performance Efficiency
C. Cost Optimization
D. Reliability

---

### Q17. Which Well-Architected pillar covers Auto Scaling, Multi-AZ, and Route 53 failover? *(Apply)*
A. Reliability
B. Performance Efficiency
C. Security
D. Cost Optimization

---

### Q18. AWS Application Discovery Service is used to: *(Remember)*
A. Find vulnerabilities
B. Inventory on-prem applications and their dependencies before migrating
C. Detect malware
D. Visualize cloud costs

---

### Q19. Which is FALSE about the 6 Rs of migration? *(Analyze)*
A. Rehost is the simplest, lowest-effort option
B. Refactor is the highest-effort option
C. Retire means decommissioning an app
D. You must use ALL 6 Rs in every migration

---

### Q20. AWS Migration Hub is: *(Remember)*
A. A physical device for data migration
B. A central console that tracks application migration progress across multiple AWS services
C. A type of EC2 instance
D. A DDoS service

---

### Q21. Which free AWS resource provides community Q&A (formerly AWS Forums)? *(Remember)*
A. AWS re:Post
B. AWS Skill Builder
C. AWS Whitepapers
D. AWS Marketplace

---

### Q22. Which is TRUE about the Cost Optimization pillar of Well-Architected? *(Understand)*
A. It is the most important pillar
B. It emphasizes "adopt a consumption model" and "measure overall efficiency"
C. It only applies to enterprise customers
D. It requires Reserved Instances

---

### Q23. A startup gets AWS credits to bootstrap. They're using which AWS program? *(Remember)*
A. AWS Activate
B. AWS Outposts
C. AWS Marketplace
D. AWS Concierge

---

### Q24. After Cloud Practitioner, which is the LOGICAL next AWS certification for a hands-on architect role? *(Evaluate)*
A. Security Specialty
B. Solutions Architect Associate (SAA-C03)
C. Machine Learning Specialty
D. SAP on AWS Specialty

---

## 🎯 Answers + Explanations

### Q1: **C. 6**
Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.

### Q2: **C. Migration**
Migration is not a pillar, it's a separate workstream. Sustainability is the newest pillar (added 2021).

### Q3: **C. 2021**
AWS added Sustainability at re:Invent 2021. Don't pick "5 pillars", that's outdated.

### Q4: **B. Rehost (lift-and-shift)**
Move VM to EC2 with no code changes. Lowest effort, fastest.

### Q5: **A. Refactor (Re-architect)**
Rewriting as serverless / cloud-native = highest effort = Refactor.

### Q6: **C. Repurchase**
Switching to a different vendor's SaaS product = Repurchase (sometimes called "drop and shop").

### Q7: **B. Retain**
"Keep on-prem for now, revisit later" = Retain. Retire would mean *decommissioning* the app.

### Q8: **B. AWS Application Migration Service (MGN)**
MGN is the modern lift-and-shift tool. CloudEndure Migration and SMS are predecessor services no longer recommended.

### Q9: **B. DMS + Schema Conversion Tool (SCT)**
Cross-engine (MySQL → Aurora PG) requires SCT for the schema; DMS handles the data and continuous replication.

### Q10: **A. AWS DataSync**
DataSync is purpose-built for bulk file transfer (NFS/SMB/HDFS → EFS/S3/FSx) with bandwidth control and scheduling.

### Q11: **B. 6**
CAF perspectives: Business, People, Governance, Platform, Security, Operations.

### Q12: **C. Migration**
Migration is not a CAF perspective. The 6 are: Business, People, Governance, Platform, Security, Operations.

### Q13: **C. AWS Well-Architected Tool**
The free console-based self-assessment tool. Trusted Advisor checks best practices but isn't the WA Framework.

### Q14: **B. Select → Advanced → Premier**
The 3 APN partner tiers, lowest to highest.

### Q15: **B. A service where AWS OPERATES your AWS account for you**
AMS (Managed Services) is a paid offering where AWS handles operations on your behalf, for large enterprises.

### Q16: **A. Operational Excellence**
"Make frequent, small, reversible changes" is the canonical Op Ex principle. Anticipate failure, learn from events.

### Q17: **A. Reliability**
Multi-AZ, Auto Scaling, automated recovery = Reliability pillar.

### Q18: **B. Inventory on-prem applications and their dependencies before migrating**
Application Discovery Service (agent or agentless) inventories on-prem to plan a migration.

### Q19: **D. You must use ALL 6 Rs in every migration**
You pick the right R per app. Many apps get Retire or Retain rather than migrate.

### Q20: **B. A central console that tracks application migration progress across multiple AWS services**
Migration Hub aggregates progress from MGN, DMS, and partner tools in one dashboard.

### Q21: **A. AWS re:Post**
re:Post replaced AWS Forums in 2022 as the free community Q&A platform.

### Q22: **B. It emphasizes "adopt a consumption model" and "measure overall efficiency"**
Cost Optimization principles: pay only for use, measure efficiency, attribute spending, use managed services.

### Q23: **A. AWS Activate**
AWS Activate is the startup credits + benefits program. Outposts is hardware; Marketplace is a software catalog.

### Q24: **B. Solutions Architect Associate (SAA-C03)**
The most popular next step. SAA-C03 builds on CLF for hands-on architecture work.

---

## 📊 Score Yourself

- 23–24 → 🏆 You're ready for the Practice Exams!
- 20–22 → ✅ Solid. Review missed questions, then take Practice Exam 2.
- 16–19 → ⚠️ Re-read 6 Pillars + 6 Rs sections.
- <16 → 🔁 Restart Module 8.

---

## 🃏 Add To Your Flashcards

- 6 Well-Architected pillars (in order)
- 6 Rs of migration + 1-line scenario for each
- CAF's 6 perspectives
- Sustainability added 2021
- MGN (servers) / DMS (DBs) / DataSync (files)
- APN tiers: Select → Advanced → Premier
- AMS = AWS operates YOUR account

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md).

You're almost ready to book the real exam! 🎓
