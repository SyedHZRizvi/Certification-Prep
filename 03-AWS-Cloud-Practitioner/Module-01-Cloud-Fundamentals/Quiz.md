# ✏️ Module 1 Quiz: Cloud & AWS Fundamentals

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. The official AWS definition of cloud computing emphasizes three things. Which is NOT one of them?
A. On-demand delivery
B. Over the internet
C. Pay-as-you-go pricing
D. Single-tenant dedicated hardware

---

### Q2. A company wants to deploy a workload in three separate datacenters within Northern Virginia for high availability. What AWS construct enables this?
A. Multiple Regions
B. Multiple Availability Zones in the `us-east-1` Region
C. Multiple Edge Locations
D. Multiple Local Zones

---

### Q3. Which is the BEST example of trading capital expense (CapEx) for variable expense (OpEx)?
A. Pre-paying for a 3-year Reserved Instance
B. Buying servers and racking them in your office
C. Launching EC2 on-demand and being billed per second of use
D. Signing a 10-year colocation lease

---

### Q4. Which service model puts the MOST responsibility on the customer?
A. SaaS
B. PaaS
C. IaaS
D. FaaS

---

### Q5. An EU customer must ensure all customer data stays within the European Union. What AWS feature primarily addresses this?
A. Edge Locations
B. Choosing an EU Region
C. AWS WAF
D. Amazon CloudFront

---

### Q6. Which AWS service brings AWS hardware physically into a customer's own data center?
A. AWS Wavelength
B. AWS Local Zones
C. AWS Outposts
D. AWS Direct Connect

---

### Q7. The "Always Free" tier of the AWS Free Tier:
A. Expires after 12 months
B. Is only for non-profit organizations
C. Offers some services free forever within usage limits
D. Requires Enterprise Support

---

### Q8. An application needs single-digit-millisecond latency to mobile users on a 5G network. The BEST AWS offering is:
A. CloudFront
B. AWS Wavelength
C. AWS Outposts
D. Direct Connect

---

### Q9. Which statement about Edge Locations is TRUE?
A. They are the same as Availability Zones
B. You can launch EC2 instances in an Edge Location
C. They cache content for services like CloudFront and Route 53
D. There are only 30 of them worldwide

---

### Q10. A startup wants to "go global in minutes" with their web app. Which cloud benefit BEST describes this?
A. Trade fixed expense for variable expense
B. Benefit from massive economies of scale
C. Increase speed and agility
D. Go global in minutes

---

### Q11. Which deployment model uses BOTH on-premises infrastructure AND public cloud, connected together?
A. Public cloud
B. Private cloud
C. Hybrid cloud
D. Community cloud

---

### Q12. Amazon Elastic Beanstalk is BEST classified as:
A. IaaS
B. PaaS
C. SaaS
D. On-premises

---

### Q13. The MAIN purpose of CloudFormation is to:
A. Monitor running EC2 instances
B. Provision AWS resources from code templates (Infrastructure as Code)
C. Compress storage
D. Replace IAM

---

### Q14. Which Region is typically the cheapest and the first to receive new AWS services?
A. `ap-south-1` (Mumbai)
B. `us-east-1` (N. Virginia)
C. `eu-west-3` (Paris)
D. `sa-east-1` (São Paulo)

---

### Q15. A customer must run workloads that comply with US government FedRAMP High. They should use:
A. The standard `us-east-1` Region
B. AWS GovCloud (US) Regions
C. AWS Outposts
D. Any commercial Region

---

### Q16. What's the difference between "scalability" and "elasticity"?
A. They mean the same thing
B. Scalability = capacity to handle growth; elasticity = automatic scaling up/down with demand
C. Elasticity = vertical scaling only
D. Scalability is only for storage

---

### Q17. A bank wants its data stored in S3 in `eu-west-1` to ALSO survive a full Region outage in Ireland. What MUST they configure?
A. Multi-AZ deployment for S3
B. Cross-Region Replication to another Region
C. CloudFront caching
D. Edge Locations

---

### Q18. Which is a valid way to interact with AWS services?
A. AWS Management Console
B. AWS CLI
C. AWS SDKs (Python, Java, etc.)
D. All of the above

---

### Q19. A company has 200 servers running at 20% utilization 24/7 with very predictable load. Which statement is MOST accurate?
A. Cloud is automatically cheaper
B. On-premises may actually be cheaper for steady, predictable workloads
C. They must move to AWS to save money
D. Cloud cannot handle this workload

---

### Q20. The shared private fiber that connects AZs within a Region provides:
A. Public internet routing only
B. Low-latency, high-bandwidth private connectivity for replication
C. CDN caching
D. Encryption keys

---

### Q21. Which AWS infrastructure layer is automatically used by Route 53 and CloudFront to serve requests close to users?
A. Regions
B. Availability Zones
C. Edge Locations
D. Outposts

---

### Q22. Fault tolerance is BEST described as:
A. The ability to remain operational when components fail
B. The ability to recover from a failure within a few hours
C. The ability to scale up automatically
D. The ability to back up data nightly

---

### Q23. Which statement about AWS Regions and AZs is TRUE?
A. Every Region has exactly two AZs
B. AZs in the same Region are typically 10–100 km apart and connected by low-latency private fiber
C. Edge Locations are a type of AZ
D. AZs are publicly addressable buildings you can visit

---

### Q24. A team wants version-controlled, repeatable infrastructure provisioning. The BEST AWS tool is:
A. The AWS Management Console
B. AWS CloudFormation (or the AWS CDK)
C. The AWS Billing dashboard
D. Trusted Advisor

---

## 🎯 Answers + Explanations

### Q1: **D. Single-tenant dedicated hardware**
The AWS definition is: "on-demand delivery of IT resources over the internet with pay-as-you-go pricing." Dedicated hardware (Dedicated Hosts) is an *option*, not part of the core definition.

### Q2: **B. Multiple Availability Zones in the `us-east-1` Region**
Northern Virginia = `us-east-1`. Each AZ is one or more isolated datacenters within that Region. That's exactly the multi-AZ HA pattern.

### Q3: **C. Launching EC2 on-demand and being billed per second of use**
On-demand, pay-per-second EC2 = textbook variable expense. Reserved Instances and colocation leases lock in cost (more CapEx-like).

### Q4: **C. IaaS**
With IaaS (e.g. EC2), the customer manages the OS, runtime, app, and data. AWS only manages the physical hardware and virtualization.

### Q5: **B. Choosing an EU Region**
Data sovereignty is enforced by selecting a Region in the desired jurisdiction. Cross-Region replication does NOT happen automatically — what you store in `eu-west-1` stays in `eu-west-1` until you configure otherwise.

### Q6: **C. AWS Outposts**
Outposts is literally AWS server racks installed in YOUR datacenter — a hybrid deployment using the same AWS APIs.

### Q7: **C. Offers some services free forever within usage limits**
"Always Free" never expires — e.g., 1M Lambda invocations/month, 25 GB DynamoDB storage. Separate from the 12-month tier.

### Q8: **B. AWS Wavelength**
Wavelength embeds AWS compute *inside* 5G carrier networks for ultra-low mobile latency. CloudFront is for HTTP content; not the same.

### Q9: **C. They cache content for services like CloudFront and Route 53**
Edge Locations are PoPs that handle CDN caching and DNS. You cannot launch EC2 there. There are 400+ globally.

### Q10: **D. Go global in minutes**
This is literally one of the 6 named cloud benefits AWS lists. Choose the answer that matches the language of the question stem.

### Q11: **C. Hybrid cloud**
Hybrid = on-prem + cloud, connected (often via Direct Connect or VPN). Public = all cloud. Private = all on-prem.

### Q12: **B. PaaS**
Elastic Beanstalk manages the OS, runtime, and load balancer; you just upload your code. Classic PaaS.

### Q13: **B. Provision AWS resources from code templates (Infrastructure as Code)**
CloudFormation lets you describe infrastructure in YAML/JSON and AWS provisions it. The right answer when a question mentions "repeatable" or "version-controlled" infra.

### Q14: **B. `us-east-1` (N. Virginia)**
The oldest, largest, and usually cheapest Region. New services launch here first.

### Q15: **B. AWS GovCloud (US) Regions**
GovCloud is isolated for US government workloads — supports FedRAMP High and ITAR. Requires a separate AWS account/approval.

### Q16: **B. Scalability = capacity to handle growth; elasticity = automatic scaling up/down with demand**
Related but distinct. Scalability is the architectural property; elasticity is the dynamic, automatic adjustment.

### Q17: **B. Cross-Region Replication to another Region**
S3 is highly durable within a Region but NOT automatically multi-Region. You must enable CRR to protect against full-Region outages.

### Q18: **D. All of the above**
Console (GUI), CLI (terminal), and SDKs (in code) are all valid AWS interfaces. CloudFormation/CDK is a 4th, but built on top.

### Q19: **B. On-premises may actually be cheaper for steady, predictable workloads**
Cloud wins on *variable* workloads where you'd otherwise overprovision. For flat 24/7 load, owning hardware can beat cloud pricing.

### Q20: **B. Low-latency, high-bandwidth private connectivity for replication**
AZ-to-AZ links are private AWS fiber — not the public internet. This is what enables synchronous multi-AZ replication (e.g., RDS Multi-AZ).

### Q21: **C. Edge Locations**
Route 53 (DNS) and CloudFront (CDN) terminate at the Edge to be physically close to users.

### Q22: **A. The ability to remain operational when components fail**
Fault tolerance > high availability. HA recovers quickly; fault tolerance keeps working uninterrupted (e.g., RAID, multi-AZ active-active).

### Q23: **B. AZs in the same Region are typically 10–100 km apart and connected by low-latency private fiber**
Spec from AWS itself. Each Region has 3+ AZs (not "exactly two"), AZs are not publicly visitable, and Edges are NOT AZs.

### Q24: **B. AWS CloudFormation (or the AWS CDK)**
IaC = the right answer for "repeatable, version-controlled." Console clicks aren't reproducible; Trusted Advisor is a recommender, not a provisioner.

---

## 📊 Score Yourself

- 23–24 → 🏆 You've mastered Module 1. Move to Module 2!
- 20–22 → ✅ Solid. Review your wrong answers, then move on.
- 16–19 → ⚠️ Re-read the parts you missed. Then re-quiz tomorrow.
- <16 → 🔁 Re-read the entire Reading.md and rewatch essential videos.

---

## 🃏 Add To Your Flashcards

- The 6 benefits of cloud computing
- IaaS vs PaaS vs SaaS — definitions + AWS examples
- Region vs AZ vs Edge Location (one-line each)
- The 3 Free Tier types
- AWS Outposts vs Local Zones vs Wavelength
- "Cloud computing" definition (verbatim)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2: Core Compute](../Module-02-Core-Compute/Reading.md)
