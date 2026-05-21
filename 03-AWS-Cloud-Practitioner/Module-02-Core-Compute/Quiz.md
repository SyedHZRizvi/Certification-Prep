# ✏️ Module 2 Quiz: Core Compute

> **Instructions:** 25 questions. Aim for 21/25 minimum. No peeking at the reading!

---

## Questions

### Q1. Which EC2 pricing model offers up to 90% off but can be reclaimed by AWS with a 2-minute warning?
A. On-Demand
B. Reserved Instance
C. Spot Instance
D. Savings Plan

---

### Q2. The maximum Lambda function execution time is:
A. 5 minutes
B. 15 minutes
C. 1 hour
D. Unlimited

---

### Q3. A company wants to run containers on AWS without managing the underlying EC2 instances. They should use:
A. ECS on EC2 launch type
B. ECS or EKS on Fargate
C. Lambda
D. Elastic Beanstalk

---

### Q4. Which instance family is BEST for machine learning training workloads requiring GPUs?
A. `t` (general purpose)
B. `c` (compute optimized)
C. `r` (memory optimized)
D. `p` or `g` (accelerated computing)

---

### Q5. A team runs a 24/7 production application on EC2 for the next 3 years. The MOST cost-effective option is:
A. On-Demand Instances
B. Spot Instances
C. Reserved Instances or Savings Plans
D. Dedicated Hosts

---

### Q6. An EC2 instance is stopped (not terminated). Which charges still apply?
A. Compute charges only
B. EBS storage charges only
C. Both compute and EBS
D. No charges at all

---

### Q7. A startup wants to deploy a simple WordPress site with predictable monthly billing. The simplest option is:
A. EC2 with Auto Scaling
B. AWS Lightsail
C. EKS on Fargate
D. AWS Batch

---

### Q8. Which AWS service handles batch jobs by queueing them and provisioning the right compute?
A. AWS Batch
B. AWS Step Functions
C. AWS Lambda
D. AWS Glue

---

### Q9. Which is TRUE about AWS Fargate?
A. It's a separate orchestrator from ECS
B. It's a serverless compute engine for ECS and EKS
C. It only supports Lambda
D. It runs only on bare metal

---

### Q10. Which AWS service is BEST described as "Platform-as-a-Service" — you upload code and AWS handles EC2, ELB, Auto Scaling, and monitoring?
A. EC2
B. Lambda
C. Elastic Beanstalk
D. ECS

---

### Q11. A workload requires BYOL Windows Server licensing tied to physical CPU sockets. Which option is required?
A. Spot Instances
B. Dedicated Hosts
C. Lambda
D. Lightsail

---

### Q12. Which best describes an Auto Scaling Group (ASG)?
A. A load balancer that distributes requests
B. A managed group of EC2 instances that scales in/out automatically based on metrics
C. A network firewall
D. A managed Kubernetes cluster

---

### Q13. Savings Plans differ from Reserved Instances primarily in that they:
A. Offer no discount
B. Are limited to Spot capacity
C. Commit by $/hour and are more flexible across instance families and Regions
D. Require a 5-year commitment

---

### Q14. A serverless function processes images uploaded to S3. The image processing takes 30 minutes. The BEST compute choice is:
A. AWS Lambda
B. Fargate or EC2 (Lambda exceeds 15-min limit)
C. AWS Step Functions alone
D. CloudFront

---

### Q15. The AWS Lambda billing model charges you for:
A. Per-second EC2 time only
B. Invocations + execution duration (rounded to milliseconds) + memory allocated
C. Per-day flat fee
D. Bandwidth only

---

### Q16. Which describes Amazon ECR?
A. A container orchestrator
B. A managed Docker image registry
C. A serverless function service
D. A VPN service

---

### Q17. To make an EC2-based web app survive an Availability Zone failure, the BEST architecture is:
A. Single EC2 in one AZ with a big EBS volume
B. Multi-AZ Auto Scaling Group behind an Elastic Load Balancer
C. Multiple Spot Instances in one AZ
D. Lambda only

---

### Q18. AWS Outposts is BEST described as:
A. AWS hardware racks deployed in YOUR data center
B. A free educational program
C. A type of S3 storage class
D. The AWS support portal

---

### Q19. Which scenario is the BEST use of Spot Instances?
A. Hosting a database that requires 99.99% uptime
B. Running a CI/CD pipeline that can retry failed jobs
C. Hosting a single-instance e-commerce site
D. A real-time stock trading engine

---

### Q20. A 4-week scientific simulation runs nightly on AWS. It can be split into thousands of independent jobs. The BEST service is:
A. Lambda
B. AWS Batch (often on Spot/Fargate)
C. Lightsail
D. Elastic Beanstalk

---

### Q21. Which Lambda runtime is NOT natively supported?
A. Python
B. Node.js
C. Java
D. Cold Fusion

---

### Q22. To stop ALL billing for an EC2 instance and its root volume, you should:
A. Stop the instance
B. Hibernate the instance
C. Terminate the instance
D. Detach the EBS volume

---

### Q23. Which service is FREE itself (you only pay for underlying resources it creates)?
A. EC2
B. AWS Elastic Beanstalk
C. RDS
D. AWS Outposts

---

### Q24. Which compute service is BEST for a brand-new container app where the developer wants ZERO infrastructure decisions?
A. EC2 with custom AMI
B. AWS App Runner
C. EKS on EC2
D. AWS Batch

---

### Q25. A "Capacity Reservation" in EC2 differs from a Reserved Instance because it:
A. Provides a price discount
B. Reserves capacity in a specific AZ but provides NO pricing discount
C. Requires a 5-year commitment
D. Is only available for Spot

---

## 🎯 Answers + Explanations

### Q1: **C. Spot Instance**
Up to 90% off — perfect for fault-tolerant workloads. AWS reclaims with a 2-minute notice. On-Demand has no discount; RIs and Savings Plans require commitments.

### Q2: **B. 15 minutes**
Hard limit. For longer jobs use Fargate, EC2, or AWS Batch.

### Q3: **B. ECS or EKS on Fargate**
Fargate is the serverless launch type — no EC2 hosts to manage. EC2 launch type still requires host management.

### Q4: **D. `p` or `g` (accelerated computing)**
GPU families: `p` (highest-end training), `g` (graphics + inference). `Inf` for inference, `Trn` for training with AWS Trainium chips.

### Q5: **C. Reserved Instances or Savings Plans**
1- or 3-year commitments give up to 72% off. For predictable steady workloads, this beats On-Demand. Spot is unsuitable for steady production.

### Q6: **B. EBS storage charges only**
Stopped = no compute charges, but EBS volumes persist and bill. To eliminate ALL charges, terminate.

### Q7: **B. AWS Lightsail**
Bundled VPS — predictable monthly pricing, perfect for small sites. Pre-built blueprints (WordPress, LAMP, etc.).

### Q8: **A. AWS Batch**
Batch is purpose-built: define a job, Batch queues it, picks the right EC2/Fargate, runs it, shuts it down.

### Q9: **B. It's a serverless compute engine for ECS and EKS**
Fargate is a launch type, not an orchestrator. ECS/EKS still does the orchestration; Fargate provides the host.

### Q10: **C. Elastic Beanstalk**
Upload code → Beanstalk provisions EC2, ELB, ASG, CloudWatch. PaaS classic. The service itself is free.

### Q11: **B. Dedicated Hosts**
Dedicated Hosts give you visibility/control over physical sockets, required for many BYOL licenses (Windows Server, Oracle, SQL Server).

### Q12: **B. A managed group of EC2 instances that scales in/out automatically based on metrics**
ASG handles capacity. ELB handles request distribution. They're usually paired.

### Q13: **C. Commit by $/hour and are more flexible across instance families and Regions**
Savings Plans are AWS's newer, more flexible commitment model. They cover EC2, Fargate, and Lambda usage too.

### Q14: **B. Fargate or EC2 (Lambda exceeds 15-min limit)**
30 minutes > 15-min Lambda limit. Use a container on Fargate, an EC2 batch job, or AWS Batch.

### Q15: **B. Invocations + execution duration (rounded to milliseconds) + memory allocated**
Lambda billing = number of requests × (memory × ms of compute). No idle charges.

### Q16: **B. A managed Docker image registry**
ECR = Elastic Container Registry. Stores Docker (OCI) images. Different from ECS (orchestrator).

### Q17: **B. Multi-AZ Auto Scaling Group behind an Elastic Load Balancer**
ASG + ELB across multiple AZs is the textbook HA pattern. Single-AZ is a single point of failure.

### Q18: **A. AWS hardware racks deployed in YOUR data center**
Outposts brings AWS into your DC for hybrid use cases. Same APIs as the public cloud.

### Q19: **B. Running a CI/CD pipeline that can retry failed jobs**
CI jobs are fault-tolerant — if an interrupted Spot job retries on another, it's fine. Spot is wrong for "always-up" workloads.

### Q20: **B. AWS Batch (often on Spot/Fargate)**
Built for exactly this: queues thousands of independent jobs, provisions cheap compute (often Spot) automatically.

### Q21: **D. Cold Fusion**
Lambda supports Node.js, Python, Java, .NET, Go, Ruby, and custom runtimes via container images. ColdFusion is not native.

### Q22: **C. Terminate the instance**
Stopping leaves EBS volumes billing. Termination (with default root-volume-delete-on-termination) stops all charges.

### Q23: **B. AWS Elastic Beanstalk**
Beanstalk has no service charge — you only pay for the EC2, ELB, RDS, etc. it spins up on your behalf.

### Q24: **B. AWS App Runner**
App Runner takes a container or source repo, builds, deploys, scales — zero infrastructure choices. Even simpler than Beanstalk for containers.

### Q25: **B. Reserves capacity in a specific AZ but provides NO pricing discount**
On-Demand Capacity Reservations guarantee capacity (e.g., for a launch event) but you still pay On-Demand prices. Combine with Savings Plans for both capacity AND discount.

---

## 📊 Score Yourself

- 24–25 → 🏆 Master. Move on.
- 21–23 → ✅ Solid. Review wrong answers.
- 17–20 → ⚠️ Re-read EC2 + Lambda + Fargate sections.
- <17 → 🔁 Restart Module 2.

---

## 🃏 Add To Your Flashcards

- 5 EC2 instance families and their letters
- 6 EC2 pricing models (key trade-offs)
- Lambda's 15-minute hard limit
- ECS vs EKS vs Fargate (one-liners)
- ASG + ELB + Multi-AZ = HA pattern
- Stopped vs Terminated billing implications

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3: Core Storage](../Module-03-Core-Storage/Reading.md)
