# 🧪 Practice Exam 1 — AWS Solutions Architect Associate (SAA-C03)

> **Conditions:** Set a 65-minute timer. 32 questions. Treat it like the real thing — no notes, no Google.
> **Pass mark:** 23/32 (72%)
> Take this AFTER finishing Modules 1–5.

---

## 📝 Questions

### 1. A company needs to host a static website that serves global users with low latency and HTTPS. The bucket must NOT be publicly accessible. What is the BEST solution?
A. Make the S3 bucket public; users access directly
B. Direct Connect from on-prem
C. EC2 instance hosting nginx in a public subnet
D. CloudFront in front of a private S3 bucket using Origin Access Control (OAC); Block Public Access on the bucket

### 2. An EC2 application running in a private subnet must read objects from an S3 bucket while minimizing data-transfer cost. What should the architect do?
A. Route via a NAT Gateway
B. Use Direct Connect
C. Make the bucket public
D. Create a Gateway VPC Endpoint for S3

### 3. A team needs strict order and exactly-once processing for financial transactions. Which service should they use?
A. SQS Standard
B. SNS
C. SQS FIFO
D. Kinesis Firehose

### 4. A workload runs steadily 24/7 for the next 3 years on a known instance type. The MOST cost-effective purchase option is:
A. On-Demand
B. Reserved Instance, Standard, 3-year, all upfront
C. Spot
D. Capacity Reservation

### 5. A company has 30 AWS accounts. Developers need SSO with role-based permissions across all of them. The BEST solution is:
A. IAM users in each account
B. IAM Identity Center federated to the corporate IdP
C. Sharing the root user
D. Multiple Direct Connect links

### 6. A company stores logs in S3. Logs are accessed daily for 30 days, weekly for 90 days, then almost never. To minimize cost while keeping logs available, the architect should:
A. Create a lifecycle policy: Standard → Standard-IA after 30 days → Glacier after 120 days
B. Use S3 Standard for all logs forever
C. Delete logs after 30 days
D. Use One Zone-IA only

### 7. An EC2 application needs an IAM role to write to a DynamoDB table. The BEST practice is to:
A. Bake long-term access keys into the AMI
B. Store keys in a Secrets Manager and fetch with no role
C. Pass keys via user-data
D. Attach an IAM role to the instance via an instance profile

### 8. A multi-account organization must prevent users from disabling CloudTrail in any account. The BEST mechanism is:
A. A bucket policy on the log bucket
B. An IAM policy in each account
C. A Service Control Policy denying `cloudtrail:StopLogging` and `cloudtrail:DeleteTrail`
D. Network firewall rules

### 9. A workload needs to survive an Availability Zone failure with automatic database failover. The simplest design uses:
A. Single-AZ RDS
B. RDS Multi-AZ
C. Cross-region Read Replica
D. EBS snapshots only

### 10. A workload needs to scale read traffic for a PostgreSQL database. The BEST approach is:
A. Multi-AZ deployment
B. Read Replicas
C. Larger instance
D. Add DynamoDB

### 11. A company runs Cassandra and wants to ensure that rack failure does not take down multiple replicas. EC2 instances should be placed in a:
A. Cluster placement group
B. Spread placement group
C. Default placement
D. Partition placement group

### 12. An app in VPC-A in Account 111 must privately call a partner microservice running on an NLB in VPC-B in Account 222 (different organization). The BEST approach is:
A. AWS PrivateLink (Endpoint Service + Interface Endpoint)
B. Site-to-Site VPN
C. VPC peering
D. Make it public

### 13. A 3rd-party SaaS vendor needs read-only access to specific S3 prefixes in a customer's account. The BEST design is:
A. Share the customer's root credentials
B. Create an IAM user for the vendor and share access keys
C. Make the bucket public
D. Create an IAM role with the vendor's AWS account as principal and an ExternalId condition

### 14. A company runs a fault-tolerant batch processing job. To minimize cost, the architect should use:
A. Spot Instances (with checkpointing)
B. Reserved Instances
C. On-Demand
D. Dedicated Hosts

### 15. A workload requires shared file storage accessible by EC2 instances in two AZs. The BEST option is:
A. EBS multi-attach
B. Instance Store
C. EFS
D. S3 mounted as a file system

### 16. To deliver content to users in 200 countries with the lowest latency and DDoS protection:
A. EC2 in one region
B. NAT Gateway
C. CloudFront with AWS Shield Standard (free) and optional WAF
D. Direct Connect

### 17. A company wants 7-year immutable retention on records, with no user (including root) able to override during retention. The BEST configuration is:
A. S3 Versioning only
B. S3 Object Lock in Governance mode
C. S3 Object Lock in Compliance mode
D. MFA Delete

### 18. To allow customers to download private S3 files for the next 60 minutes without giving them AWS credentials:
A. Make the object public
B. Generate a presigned URL with 1-hour expiry
C. Use Direct Connect
D. Add them to IAM

### 19. A company connects 12 VPCs and 2 on-prem data centers. The BEST routing solution is:
A. Mesh of VPC peerings
B. AWS Transit Gateway with VPN/DX attachments
C. Internet Gateway in each VPC
D. CloudFront

### 20. To allow only the application load balancer to reach the EC2 instances on port 80:
A. Disable IAM
B. Use a NACL deny rule for all other IPs
C. Place the LB in a private subnet
D. Add a Security Group on EC2 allowing port 80 from the LB's Security Group

### 21. Encrypting an existing UNENCRYPTED RDS instance is done by:
A. Creating a snapshot, copying it as encrypted, and restoring
B. Toggling encryption on the live instance
C. Migrating to DynamoDB
D. Using SSL only

### 22. A workload requires path-based routing (e.g., `/api/*` → service A, `/web/*` → service B). The BEST load balancer is:
A. Network Load Balancer
B. Application Load Balancer
C. Gateway Load Balancer
D. Classic LB

### 23. To enforce that all S3 PUT requests use server-side encryption with KMS:
A. CloudFront
B. Block Public Access
C. Bucket policy denying PUTs without `s3:x-amz-server-side-encryption: aws:kms`
D. NACL

### 24. The exam's MOST common cost-optimization pattern when private subnets are reading large volumes from S3 is:
A. Use a Gateway VPC Endpoint for S3 (free, bypasses NAT)
B. Add a NAT Gateway in every AZ
C. Use Direct Connect
D. Use Global Accelerator

### 25. A company wants to centrally apply a region restriction across all accounts in their Organization. The BEST mechanism is:
A. AWS WAF rule
B. An IAM policy applied per user
C. A Service Control Policy using `aws:RequestedRegion` condition
D. NACL

### 26. An ASG launches new instances but they take 3 minutes to be ready to receive traffic. To prevent the LB from sending traffic too early, configure:
A. A health check grace period and use ELB health checks on the ASG
B. Increase the desired count
C. Spot instances
D. Failover routing

### 27. A company wants to replicate an S3 bucket's contents to another region for disaster recovery. The required pre-conditions include:
A. NAT Gateway
B. CloudFront distribution
C. Direct Connect
D. Versioning enabled on both source and destination

### 28. A customer's bucket policy is set up correctly but a CloudFront distribution still returns 403 errors when accessing objects. The MOST likely fix is:
A. Configure Origin Access Control (OAC) on the distribution and update the bucket policy to allow the distribution
B. Make the bucket public
C. Use NAT Gateway
D. Disable Block Public Access

### 29. An application's read pattern is hot (~80% reads) on a few rows in DynamoDB and needs single-digit MICROSECOND read latency. The BEST addition is:
A. ElastiCache Redis
B. DAX (DynamoDB Accelerator)
C. CloudFront
D. Aurora Read Replicas

### 30. Static IPs for ingress whitelisting and ultra-low latency for a TCP service across multiple regions:
A. NLB with Global Accelerator
B. ALB
C. CloudFront
D. NAT Gateway

### 31. A company has IT compliance requiring that data stays only in EU regions. The BEST control is:
A. Use only us-east-1
B. Use Direct Connect
C. Apply an SCP that denies API calls where `aws:RequestedRegion` is not in `[eu-central-1, eu-west-1, ...]`
D. Add a CloudFront geo-restriction

### 32. A company wants to identify oversized EC2 instances that could be downsized. The BEST tool is:
A. CloudTrail
B. Detective
C. WAF
D. AWS Compute Optimizer (free, ML-based)

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    9.  B    17. C    25. C
2.  D    10. B    18. B    26. A
3.  C    11. D    19. B    27. D
4.  B    12. A    20. D    28. A
5.  B    13. D    21. A    29. B
6.  A    14. A    22. B    30. A
7.  D    15. C    23. C    31. C
8.  C    16. C    24. A    32. D
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 30–32 | 🏆 Excellent — ready for Practice Exam 2 |
| 23–29 | ✅ Pass; review wrong ones |
| 18–22 | ⚠️ Re-study weak modules; retake in a few days |
| <18 | 🔁 Restart from Module 1 |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered the topic
2. Re-read that module's Reading.md section
3. Add the concept to your Flashcards
4. Re-attempt the question in 3 days

---

➡️ When you're scoring 80%+: take [Practice Exam 2](./Practice-Exam-2.md) after finishing Modules 6–10.
