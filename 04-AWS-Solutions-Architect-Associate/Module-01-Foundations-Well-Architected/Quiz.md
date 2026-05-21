# ✏️ Module 1 Quiz: AWS Foundations & Well-Architected

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Aim for 20/25 minimum. Time limit: 30 minutes.

---

## Questions

### Q1. Which of the following BEST describes an AWS Availability Zone?
A. A single data center owned by AWS
B. A geographic region with multiple data centers
C. One or more discrete data centers within a region, with independent power and networking
D. A network point of presence used by CloudFront

---

### Q2. A company's compliance requirements mandate that customer data must never leave Germany. Which AWS concept is MOST relevant?
A. Edge locations
B. Region selection
C. Availability Zones
D. CloudFront origins

---

### Q3. Which is NOT one of the 6 pillars of the AWS Well-Architected Framework?
A. Reliability
B. Performance Efficiency
C. Innovation
D. Sustainability

---

### Q4. A company runs EC2 instances. Whose responsibility is it to patch the operating system?
A. AWS
B. The customer
C. Shared equally between AWS and customer
D. AWS, but only for Amazon Linux

---

### Q5. Under the shared responsibility model, which task is AWS responsible for on Amazon RDS?
A. Configuring database user accounts and grants
B. Patching the underlying operating system and database engine
C. Encrypting application data before it is written
D. Defining security group rules

---

### Q6. A solutions architect wants the system to keep running if a single data center fails. What is the MINIMUM design needed?
A. Single EC2 instance in one AZ
B. EC2 instances spread across at least 2 AZs in one region
C. EC2 instances in multiple regions
D. EC2 instances across at least 2 edge locations

---

### Q7. A startup has unpredictable, spiky traffic. Which Well-Architected design principle BEST applies?
A. Perform operations as code
B. Stop guessing capacity — adopt elasticity
C. Apply defense in depth
D. Test recovery procedures

---

### Q8. Which is the BEST example of "Operational Excellence" in practice?
A. Encrypting data at rest with KMS
B. Defining infrastructure with CloudFormation and deploying via CI/CD
C. Choosing the cheapest EC2 family
D. Running workloads on Graviton

---

### Q9. A company wants to reduce its workloads' environmental impact. Which combination BEST supports the Sustainability pillar?
A. Larger EC2 instances, always-on
B. Graviton-based instances, auto scaling, and managed services
C. Multi-region active-active for everything
D. Bare-metal EC2 in one AZ

---

### Q10. Data transferred IN to AWS from the public internet typically costs:
A. The same as data transferred OUT
B. Half as much as data OUT
C. Free
D. Charged per minute

---

### Q11. A company runs a global video streaming service on EC2. Their AWS bill is dominated by data transfer OUT to the internet. What is the BEST way to reduce cost?
A. Move the EC2 instances to a cheaper region
B. Put CloudFront in front of the origin
C. Switch to NAT Gateway egress
D. Use larger EC2 instance types

---

### Q12. Which interface uses the SAME underlying APIs as the AWS Management Console?
A. Only the AWS CLI
B. Only the AWS SDKs
C. Both the AWS CLI and AWS SDKs
D. Neither — the console is a separate API

---

### Q13. An "edge location" is primarily used for:
A. Running EC2 instances
B. Caching content close to users and accelerating DNS
C. Storing application backups
D. Hosting AWS managed databases

---

### Q14. RPO stands for:
A. Recovery Point Objective — maximum acceptable data loss
B. Recovery Process Order — sequence of restore steps
C. Resource Provisioning Output — number of resources provisioned
D. Replication Performance Object — measure of replica lag

---

### Q15. Which AWS service deploys a rack of AWS hardware in the customer's OWN data center?
A. Local Zone
B. Wavelength Zone
C. Outpost
D. Edge Location

---

### Q16. Multi-AZ protects against:
A. A regional outage
B. A single Availability Zone outage
C. An internet provider outage globally
D. A misconfigured IAM policy

---

### Q17. A workload requires 99.99% availability AND must survive a regional outage. Which design is MOST appropriate?
A. Single EC2 instance
B. Multi-AZ in one region
C. Multi-region with cross-region replication and DNS failover
D. Single AZ with EBS snapshots

---

### Q18. Which AWS service is BEST described as "infrastructure as code"?
A. CloudTrail
B. CloudFormation
C. CloudWatch
D. CloudHSM

---

### Q19. The Well-Architected pillar MOST directly improved by enabling Multi-AZ on RDS is:
A. Cost Optimization
B. Performance Efficiency
C. Reliability
D. Sustainability

---

### Q20. A company wants minimum operational overhead for a new microservice. Which is the BEST starting point?
A. EC2 with custom AMI
B. Lambda or Fargate
C. Self-managed Kubernetes on EC2
D. On-prem VM

---

### Q21. Which set of services would you enable on day one to gain audit, compliance monitoring, and threat detection?
A. CloudTrail, AWS Config, GuardDuty
B. CloudFront, ELB, Route 53
C. S3, EBS, EFS
D. EC2, RDS, DynamoDB

---

### Q22. Which statement about regions is TRUE?
A. All AWS services are available in every region on launch day
B. Pricing is identical across all regions
C. Most resources are region-scoped — they don't appear in other regions
D. You can move an EC2 instance to a different region with a single click

---

### Q23. An architect is told to design "the most cost-effective" solution that still meets the SLA of 99.95%. What does "most cost-effective" mean on the SAA exam?
A. Always the cheapest possible option, ignoring requirements
B. The cheapest option that still meets the stated requirements
C. The option that uses Spot instances
D. The option that uses Savings Plans

---

### Q24. Which of the following is an example of "defense in depth" (Security pillar)?
A. Only relying on a perimeter firewall
B. Combining IAM, Security Groups, NACLs, KMS encryption, and CloudTrail logging
C. Allowing all egress from a VPC
D. Storing access keys in source code

---

### Q25. Which Well-Architected design principle aligns BEST with "use managed services so you don't have to be an expert in everything"?
A. Test recovery procedures
B. Democratize advanced technologies
C. Anticipate failure
D. Stop guessing capacity

---

## 🎯 Answers + Explanations

### Q1: **C. One or more discrete data centers with independent power and networking**
An AZ is *one or more* data centers — not a single building, not an entire region. They share a low-latency network within a region.

### Q2: **B. Region selection**
Regions are isolated; data doesn't leave a region unless you explicitly replicate it. For German residency, you'd pick `eu-central-1` (Frankfurt).

### Q3: **C. Innovation**
The 6 pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability. Innovation isn't a pillar (though sustainability was added in 2021).

### Q4: **B. The customer**
EC2 is IaaS — you own everything from the OS up. Contrast with RDS (managed), where AWS patches the OS and engine.

### Q5: **B. Patching the underlying OS and DB engine**
On RDS, AWS manages the OS, engine patches, backups, hardware. You manage DB users, network access, data, and IAM.

### Q6: **B. EC2 across at least 2 AZs in one region**
Multi-AZ is the minimum to survive a data-center loss. Multi-region is for regional outage protection.

### Q7: **B. Stop guessing capacity — adopt elasticity**
Spiky unpredictable traffic = use auto scaling / serverless instead of over-provisioning. That's the Reliability + Cost design principle "stop guessing capacity."

### Q8: **B. Infrastructure as code with CloudFormation and CI/CD**
"Perform operations as code" is the headline principle of Operational Excellence.

### Q9: **B. Graviton + auto scaling + managed services**
Graviton (ARM) is more energy-efficient; auto scaling reduces idle capacity; managed services let AWS optimize. All Sustainability moves.

### Q10: **C. Free**
Data IN to AWS is free. Data OUT to the internet is what costs (and what often dominates bills for content-heavy apps).

### Q11: **B. Put CloudFront in front of the origin**
CloudFront caches at edge, slashing origin egress cost (and also speeds users up). Classic exam pattern.

### Q12: **C. Both CLI and SDKs**
Console, CLI, and SDKs all call the same underlying public AWS APIs with the same IAM permissions.

### Q13: **B. Caching content close to users and accelerating DNS**
Edge locations serve CloudFront, Route 53, Global Accelerator, AWS Shield. They don't run EC2.

### Q14: **A. Recovery Point Objective — maximum acceptable data loss**
RPO = how much data can you afford to lose (time-wise). RTO = how long you can afford to be down.

### Q15: **C. Outpost**
Outposts physically install AWS-managed hardware in your data center. Local Zone and Wavelength are AWS-owned facilities outside main regions.

### Q16: **B. A single AZ outage**
Multi-AZ ≠ multi-region. To survive a region outage, you need multi-region replication.

### Q17: **C. Multi-region with cross-region replication and DNS failover**
"Survive a regional outage" forces you out of a single region. Use Route 53 health checks + failover routing or active-active.

### Q18: **B. CloudFormation**
CloudFormation defines AWS infrastructure declaratively in YAML/JSON. CDK builds on top of it. CloudTrail logs API calls; CloudWatch is metrics/logs.

### Q19: **C. Reliability**
Multi-AZ adds automatic failover for RDS. That's resilience — Reliability pillar.

### Q20: **B. Lambda or Fargate**
"Minimum operational overhead" → serverless / managed compute. EC2 means you patch OSes and manage scaling yourself.

### Q21: **A. CloudTrail, AWS Config, GuardDuty**
CloudTrail = audit log of API calls. Config = configuration compliance. GuardDuty = threat detection. Day-1 trio.

### Q22: **C. Most resources are region-scoped**
Regions are isolated; an EC2 instance in `us-east-1` doesn't exist in `eu-west-1`. Pricing also differs.

### Q23: **B. Cheapest that still meets requirements**
"Most cost-effective" assumes the constraints are non-negotiable. Don't pick an option that breaks the SLA just because it's cheaper.

### Q24: **B. Combining IAM, SGs, NACLs, KMS, CloudTrail**
Defense in depth = multiple layers. No single layer is your only protection.

### Q25: **B. Democratize advanced technologies**
This Performance Efficiency principle says: let AWS handle the hard parts (e.g., ML, databases at scale) via managed services so your team doesn't need to be experts.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 You've mastered Module 1. Move to Module 2!
- 20–23/25 → ✅ Solid. Note your wrong answers, then move on.
- 16–19/25 → ⚠️ Re-read the parts you missed, then re-quiz tomorrow.
- <16/25 → 🔁 Re-read the entire Reading.md and re-watch the Well-Architected video.

---

## 🃏 Add To Your Flashcards

- The 6 pillars (OS C OPS) and one keyword each
- Region vs AZ vs Edge Location vs Local Zone vs Outpost
- Where the Shared Responsibility line falls for IaaS / PaaS / managed
- The three main cost drivers (compute, storage, egress)
- RPO vs RTO definitions
- "Most cost-effective" = cheapest that still meets requirements

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2: IAM & Organizations](../Module-02-IAM-Organizations/Reading.md)
