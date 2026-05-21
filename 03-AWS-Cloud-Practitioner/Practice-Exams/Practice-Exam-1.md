# 🧪 Practice Exam 1 — AWS Cloud Practitioner (CLF-C02 Style)

> **Conditions:** Set a 45-minute timer. 32 questions. Treat it like the real thing.
> **Pass mark:** 22/32 (≈ 70%)
> Take this AFTER finishing Modules 1–4.

---

## 📝 Questions

### 1. The AWS definition of cloud computing emphasizes:
A. On-demand delivery of dedicated hardware
B. Free unlimited compute
C. Long-term capacity reservations only
D. On-demand delivery of IT resources over the internet with pay-as-you-go pricing

### 2. To achieve high availability INSIDE a single Region, you should deploy across:
A. Multiple operating systems
B. Multiple Edge Locations
C. Multiple AWS accounts
D. Multiple Availability Zones

### 3. Which of the following is the BEST example of trading capital expense (CapEx) for variable expense (OpEx)?
A. Pre-paying 3 years of EC2 Reserved Instances
B. Buying physical servers
C. Pay-per-second EC2 On-Demand billing
D. Multi-year colocation contract

### 4. Amazon EC2 Lambda functions have a maximum execution time of:
A. 5 minutes
B. 15 minutes
C. 1 hour
D. Unlimited

### 5. Which is BEST for fault-tolerant batch workloads that can be interrupted, at up to 90% off?
A. On-Demand
B. Spot Instances
C. Reserved Instances
D. Dedicated Hosts

### 6. Stopped EC2 instances still incur charges for:
A. Attached EBS volumes
B. Compute time
C. Nothing
D. Both compute and storage

### 7. Which S3 storage class is BEST for unpredictable access patterns where you want automatic tiering?
A. Standard
B. Standard-IA
C. Glacier Deep Archive
D. Intelligent-Tiering

### 8. Maximum single-object size in S3 is:
A. 5 GB
B. 100 GB
C. 5 TB
D. Unlimited

### 9. To migrate 100 TB to AWS when internet upload would take months, use:
A. AWS DataSync
B. AWS Snowball Edge
C. CloudFront
D. AWS Storage Gateway

### 10. Which shared file system is for LINUX EC2 instances over NFS?
A. EBS
B. EFS
C. FSx for Windows
D. S3

### 11. To attach a single block volume to one EC2 instance for the boot drive, use:
A. S3
B. CloudFront
C. EFS
D. EBS

### 12. Which is TRUE about Security Groups vs NACLs?
A. SGs are stateful and only have ALLOW rules; NACLs are stateless and have ALLOW + DENY
B. SGs are stateless; NACLs are stateful
C. SGs operate at the subnet level
D. NACLs operate per instance

### 13. To privately access S3 from inside a VPC without using the internet, use:
A. NAT Gateway
B. Direct Connect only
C. Internet Gateway
D. VPC Gateway Endpoint for S3

### 14. Which Route 53 routing policy is BEST for sending users to the lowest-latency Region?
A. Latency-based
B. Failover
C. Geolocation
D. Weighted

### 15. AWS Direct Connect provides:
A. Encryption by default
B. CDN caching
C. A dedicated private fiber link to AWS (not encrypted by default)
D. Free DDoS protection

### 16. Which load balancer is BEST for HTTP routing by URL path?
A. NLB
B. GWLB
C. ALB
D. CLB

### 17. CloudFront caches content at:
A. Availability Zones
B. AWS Outposts
C. Edge Locations
D. VPC Endpoints

### 18. Which AWS service brings AWS hardware physically into your own data center?
A. AWS Wavelength
B. AWS Outposts
C. AWS Local Zones
D. AWS GovCloud

### 19. The Lambda billing model charges you for:
A. Per-minute EC2 time only
B. Requests + duration (per ms) + memory allocated
C. Per-day flat fee
D. Bandwidth only

### 20. Which service is BEST for serverless container workloads with no host management?
A. EC2
B. AWS Batch
C. Lightsail
D. ECS or EKS on Fargate

### 21. Auto Scaling Groups + Elastic Load Balancers + Multi-AZ deployment provide:
A. High availability and elasticity
B. Cost optimization only
C. Encryption at rest
D. Database backups

### 22. Which S3 storage class stores data in ONE Availability Zone (less durable but cheaper)?
A. Standard
B. One Zone-IA
C. Standard-IA
D. Glacier Deep Archive

### 23. AWS Outposts is BEST described as:
A. The AWS billing portal
B. A type of S3 storage class
C. AWS hardware racks deployed in YOUR data center
D. AWS free educational program

### 24. To estimate AWS cost BEFORE deploying, use:
A. AWS Pricing Calculator
B. AWS Cost Explorer
C. AWS Budgets
D. AWS Trusted Advisor

### 25. NAT Gateway provides:
A. Inbound internet access from internet to private subnet
B. CDN caching
C. Outbound-only internet access for private subnet instances
D. Free unlimited bandwidth

### 26. Which is TRUE about VPC Peering?
A. It is non-transitive
B. It is transitive
C. It works only across Regions
D. It requires Direct Connect

### 27. Snowcone, Snowball Edge, and Snowmobile are part of:
A. AWS GovCloud
B. AWS Glacier
C. AWS Direct Connect
D. AWS Snow Family (physical data transfer)

### 28. Which is the BEST AWS option for archival data with retrieval times up to 12–48 hours, lowest cost?
A. S3 Glacier Deep Archive
B. S3 Glacier Instant Retrieval
C. S3 Standard-IA
D. EBS gp3

### 29. Edge Locations are PRIMARILY used by:
A. EC2 and EBS
B. CloudFront and Route 53
C. RDS and DynamoDB
D. IAM and KMS

### 30. Which is a managed service for repeatable, version-controlled infrastructure?
A. AWS CloudFormation (or CDK)
B. AWS Management Console
C. AWS Trusted Advisor
D. AWS Marketplace

### 31. The 6 benefits of cloud computing per AWS include all EXCEPT:
A. Trade fixed expense for variable expense
B. Go global in minutes
C. Guarantee 100% uptime
D. Stop guessing capacity

### 32. To globally distribute static + dynamic web content with low latency and DDoS protection, use:
A. EC2 in one Region
B. EFS
C. Direct Connect only
D. CloudFront + Shield + WAF

---

## 🎯 Answer Key (No Cheating!)

```
1. D    9. B    17. C    25. C
2. D    10. B   18. B    26. A
3. C    11. D   19. B    27. D
4. B    12. A   20. D    28. A
5. B    13. D   21. A    29. B
6. A    14. A   22. B    30. A
7. D    15. C   23. C    31. C
8. C    16. C   24. A    32. D
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 30–32 | 🏆 Ready for Practice Exam 2 |
| 26–29 | ✅ Good foundation; review wrong answers |
| 22–25 | ⚠️ Pass-equivalent but tight — re-study weak modules |
| <22 | 🔁 Re-study Modules 1–4; retake in 2–3 days |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it (use the question topic to map back)
2. Re-read that module's Reading.md (the relevant section)
3. Add an Anki flashcard for the concept
4. Retry the question 3 days later

---

## 🗺️ Question → Module Mapping

| Qs | Module |
|----|--------|
| 1, 2, 3, 18, 23, 29, 31 | 1 (Cloud Fundamentals) |
| 4, 5, 6, 19, 20, 21, 30 | 2 (Compute) |
| 7, 8, 9, 10, 11, 22, 27, 28 | 3 (Storage) |
| 12, 13, 14, 15, 16, 17, 25, 26, 32 | 4 (Networking & CDN) |
| 24 | 7 (preview — Pricing Calculator) |

---

➡️ When ready: [Practice Exam 2](./Practice-Exam-2.md) (after finishing Modules 5–8)
