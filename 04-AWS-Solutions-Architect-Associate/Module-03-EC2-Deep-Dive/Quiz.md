# ✏️ Module 3 Quiz: EC2 Deep Dive

> **Instructions:** 26 questions, ~35 min. Target 21/26.

> **Bloom's distribution.** Remember 5 (19%) · Understand 6 (23%) · Apply 8 (31%) · Analyze/Evaluate 6 (23%) · Create 1 (4%).

---

## Questions

### Q1. A company runs a steady-state production app 24/7 for at least the next 3 years on a known instance type. The MOST cost-effective option is: *(Apply)*
A. On-Demand
B. Spot
C. Reserved Instance, Standard, 3-year, all upfront
D. Dedicated Host on-demand

---

### Q2. A batch ML training workload can checkpoint and resume. To minimize cost, the BEST purchase option is: *(Apply)*
A. On-Demand
B. Reserved Instance
C. Spot
D. Dedicated Instance

---

### Q3. Which instance family is BEST suited for in-memory databases like Redis with large datasets? *(Remember)*
A. C-family
B. R-family
C. T-family
D. G-family

---

### Q4. A company wants flexibility to change instance families/sizes and also discounts on Lambda and Fargate usage. They should buy: *(Analyze)*
A. Standard Reserved Instances
B. Compute Savings Plan
C. EC2 Instance Savings Plan
D. Spot Block

---

### Q5. Which load balancer supports path-based routing (e.g., `/api` vs `/web`)? *(Remember)*
A. NLB
B. ALB
C. GWLB
D. CLB

---

### Q6. A workload requires static IP addresses for firewall whitelisting and operates at L4. The BEST load balancer is: *(Apply)*
A. ALB
B. NLB
C. GWLB
D. Classic LB

---

### Q7. A Cassandra cluster needs nodes spread across racks so a single rack failure doesn't take down multiple replicas. The right placement group type is: *(Apply)*
A. Cluster
B. Spread
C. Partition
D. Rack

---

### Q8. Shared file storage needed by EC2 instances across multiple AZs. Choose: *(Apply)*
A. EBS gp3 volume
B. Instance store
C. EFS
D. FSx for Lustre

---

### Q9. A company needs Windows file shares accessible via SMB by domain-joined clients. Choose: *(Apply)*
A. EFS
B. FSx for Windows File Server
C. S3
D. EBS with multi-attach

---

### Q10. Which EBS volume type is BEST for highest IOPS and lowest latency for a critical OLTP database? *(Remember)*
A. gp2
B. gp3
C. io2 Block Express
D. st1

---

### Q11. An Auto Scaling Group is configured with target tracking at 50% CPU. Current avg CPU is 80%. The ASG will: *(Understand)*
A. Do nothing
B. Launch additional instances to bring avg CPU back toward 50%
C. Terminate instances
D. Switch to scheduled scaling

---

### Q12. Which is TRUE about EC2 Spot Instances? *(Understand)*
A. They cannot be reclaimed once running
B. They can be reclaimed by AWS with a 2-minute warning
C. They are always cheaper than On-Demand by exactly 50%
D. They cannot be launched in an ASG

---

### Q13. A 4-week experiment needs unknown amounts of compute at random hours. Which is MOST appropriate? *(Apply)*
A. 3-year Reserved Instances
B. On-Demand
C. Spot only
D. Dedicated Hosts

---

### Q14. A company wants the same EBS volume attached to multiple instances simultaneously for clustered file systems in the SAME AZ. They should use: *(Apply)*
A. gp3 with multi-attach
B. io2 with multi-attach
C. EFS
D. Instance store

---

### Q15. An ASG launches instances but the application takes 3 minutes to start serving traffic. To prevent the LB from sending traffic too early: *(Analyze)*
A. Set the LB to draining mode
B. Configure a health check grace period and ELB health check on the ASG
C. Use Spot instances
D. Increase the desired count

---

### Q16. A company runs Palo Alto firewall appliances and wants all VPC ingress traffic to pass through them. The recommended LB is: *(Apply)*
A. ALB
B. NLB
C. GWLB
D. CloudFront

---

### Q17. Which is TRUE about EC2 Hibernate? *(Understand)*
A. Hibernation is free
B. RAM contents are saved to EBS and restored on next start
C. It works on any EC2 instance with no setup
D. Instance store data is preserved

---

### Q18. Which storage is wiped when an EC2 instance is stopped? *(Remember)*
A. EBS
B. EFS
C. Instance Store
D. S3

---

### Q19. To allow only the load balancer to talk to EC2 instances on port 80, the BEST design is: *(Apply)*
A. Security group on EC2 allowing port 80 from the LB's security group
B. NACL blocking all other traffic
C. Public subnet for both
D. IAM policy

---

### Q20. A NACL is: *(Understand)*
A. Stateful and allow-only at instance level
B. Stateless and allow/deny at subnet level
C. The same as a security group
D. Only used for IPv6

---

### Q21. Which is FALSE about an Auto Scaling Group? *(Analyze)*
A. It can span multiple AZs
B. It launches and terminates instances
C. It load-balances traffic across instances
D. It replaces unhealthy instances

---

### Q22. Capacity Reservations differ from Reserved Instances because they: *(Analyze)*
A. Provide no billing discount, only guaranteed capacity
B. Always provide the deepest discount
C. Cannot be created in an ASG
D. Are only available for Windows

---

### Q23. A company needs sub-millisecond latency between EC2 instances for an HPC workload. They should use: *(Apply)*
A. Spread placement group
B. Partition placement group
C. Cluster placement group, single AZ
D. Multi-region deployment

---

### Q24. Which ALB feature can authenticate users without the application changing code? *(Understand)*
A. ALB Cognito / OIDC user authentication
B. NLB TLS termination
C. Path-based routing
D. Sticky sessions

---

### Q25. For an EC2 workload that runs every weekday from 8 AM to 6 PM with known traffic patterns, the BEST scaling policy is: *(Evaluate)*
A. Predictive scaling
B. Step scaling
C. Scheduled scaling
D. Target tracking

---

### Q26. An EC2 instance is in a private subnet. To allow it to download OS patches from the internet: *(Create)*
A. Attach an Elastic IP directly
B. Use a NAT Gateway in a public subnet with a route
C. Allow port 443 in the NACL only
D. Place it in a public subnet

---

## 🎯 Answers + Explanations

### Q1: **C. RI Standard, 3-year, all upfront**
For steady-state long-term workloads, RI Standard 3yr all-upfront = up to ~72% off On-Demand.

### Q2: **C. Spot**
Fault-tolerant batch with checkpointing = textbook Spot scenario; up to 90% discount.

### Q3: **B. R-family**
R = memory optimized. Best for in-memory caches, large DBs, real-time analytics.

### Q4: **B. Compute Savings Plan**
Compute SP applies to EC2 (any family/region/size), Fargate, AND Lambda, most flexible.

### Q5: **B. ALB**
ALB does L7 routing including path-based, host-based, header-based.

### Q6: **B. NLB**
NLB provides static IPs per AZ and operates at L4 with ultra-low latency.

### Q7: **C. Partition**
Partition spreads instances across distinct racks (partitions), ideal for big-data clusters like Cassandra, HDFS, Kafka.

### Q8: **C. EFS**
EFS is regional NFS, multi-AZ, many instances simultaneously read/write. EBS is single-AZ.

### Q9: **B. FSx for Windows File Server**
SMB + AD integration + Windows-native = FSx for Windows. EFS is NFS for Linux.

### Q10: **C. io2 Block Express**
io2 Block Express delivers up to 256K IOPS and lowest latency for mission-critical DBs.

### Q11: **B. Launch additional instances**
Target tracking adjusts capacity to keep the metric near the target (50% CPU).

### Q12: **B. Can be reclaimed with 2-min warning**
Spot can be reclaimed any time AWS needs the capacity; you get a 2-min termination notice.

### Q13: **B. On-Demand**
Short, unpredictable workload with no commitment desire = On-Demand. Spot might work if fault-tolerant; in pure unknown-pattern testing, On-Demand is simplest.

### Q14: **B. io2 with multi-attach**
EBS multi-attach is supported on io1/io2 in the same AZ for clustered Linux file systems. EFS works too but is filesystem-level, not block.

### Q15: **B. Health check grace period + ELB health check**
Grace period gives the instance time to boot before health checks count. ELB health check ensures the ASG only marks healthy when LB confirms.

### Q16: **C. GWLB**
GWLB is purpose-built for inserting 3rd-party network appliances (firewalls, IDS) into the traffic path using GENEVE.

### Q17: **B. RAM saved to EBS**
Hibernate writes RAM to the EBS root volume and powers off; restarting resumes the in-memory state. Instance store data is lost.

### Q18: **C. Instance Store**
Instance store is on-host ephemeral storage and is wiped on stop/terminate/host failure. EBS persists.

### Q19: **A. SG on EC2 allowing port 80 from LB's SG**
Security groups can reference other SGs as source, cleanest least-privilege pattern.

### Q20: **B. Stateless, subnet-level, allow + deny**
NACLs are subnet-level, numbered, stateless (you must allow both directions explicitly). SGs are stateful and instance-level.

### Q21: **C. It does NOT load-balance traffic**
ASGs launch/terminate. The ELB load-balances. They pair.

### Q22: **A. No discount, capacity guarantee**
Capacity Reservations guarantee capacity in an AZ but don't reduce price. Pair with Savings Plans for discount + capacity.

### Q23: **C. Cluster placement group, single AZ**
Cluster packs instances on the same rack in one AZ for lowest inter-node latency. Spread is the opposite.

### Q24: **A. ALB Cognito/OIDC user authentication**
ALB can authenticate users via Cognito User Pools or any OIDC IdP before forwarding requests, no app code change.

### Q25: **C. Scheduled scaling**
Known time-based patterns = scheduled scaling. Predictive is for less-known patterns it forecasts.

### Q26: **B. NAT Gateway in public subnet**
Private subnets get internet egress (only) via a NAT Gateway sitting in a public subnet with a route to the IGW.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Move to Module 4
- 21–24/26 → ✅ Solid; review the wrong ones
- 17–20/26 → ⚠️ Re-read and re-quiz
- <17/26 → 🔁 Re-watch the EC2 + ELB videos

---

## 🃏 Add To Your Flashcards

- 6 instance families and a use case each
- 8 purchase options ranked by discount
- ALB vs NLB vs GWLB key differences
- 3 placement group types
- EBS vs Instance Store vs EFS vs FSx
- Hibernate vs Stop vs Terminate
- Stateful (SG) vs stateless (NACL)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4: VPC Deep Dive](../Module-04-VPC-Deep-Dive/Reading.md)
