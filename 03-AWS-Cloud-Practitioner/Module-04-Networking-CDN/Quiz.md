# ✏️ Module 4 Quiz: Networking & CDN

> **Instructions:** 25 questions. Aim for 21/25. No peeking!

---

## Questions

### Q1. A Security Group rule: *(Understand)*
A. Can include both ALLOW and DENY rules
B. Is stateless
C. Is stateful, return traffic is automatically allowed
D. Operates at the subnet boundary

---

### Q2. To DENY a specific malicious IP from reaching ANY instance in a subnet, the correct tool is: *(Apply)*
A. Security Group
B. NACL (Network ACL)
C. Route 53
D. IAM Policy

---

### Q3. An EC2 instance in a private subnet needs to download OS updates from the internet but should not be reachable from the internet. The MOST appropriate service is: *(Apply)*
A. Internet Gateway directly
B. NAT Gateway (or NAT Instance)
C. Direct Connect
D. VPC Peering

---

### Q4. Which Route 53 routing policy is BEST to send EU users to the EU region for GDPR compliance? *(Apply)*
A. Latency-based
B. Weighted
C. Geolocation
D. Multivalue

---

### Q5. Which AWS service provides a dedicated, private fiber link from your data center to AWS? *(Remember)*
A. AWS VPN
B. AWS Direct Connect
C. AWS Transit Gateway
D. CloudFront

---

### Q6. CloudFront uses which AWS infrastructure layer to cache content close to users? *(Remember)*
A. Regions
B. Availability Zones
C. Edge Locations
D. Outposts

---

### Q7. Which load balancer is BEST for routing HTTP traffic by URL path to multiple microservices? *(Apply)*
A. NLB
B. ALB
C. GWLB
D. CLB (Classic)

---

### Q8. To privately access Amazon S3 from inside a VPC without routing over the internet, you should use: *(Apply)*
A. NAT Gateway
B. VPC Gateway Endpoint for S3
C. Direct Connect
D. Internet Gateway

---

### Q9. Which is TRUE about VPC Peering? *(Understand)*
A. It is transitive (A↔B↔C means A↔C)
B. It is NON-transitive
C. It only works across Regions
D. It requires Direct Connect

---

### Q10. Which AWS service uses 2 static anycast IPs and the AWS global backbone to route TCP/UDP traffic to the nearest healthy endpoint? *(Remember)*
A. CloudFront
B. Route 53
C. AWS Global Accelerator
D. NLB

---

### Q11. An online store wants to gradually shift 10% of traffic to a new version of the site. The right Route 53 routing policy is: *(Apply)*
A. Failover
B. Weighted
C. Latency
D. Geoproximity

---

### Q12. AWS Direct Connect provides encryption: *(Analyze)*
A. Always by default
B. Never
C. Only if combined with a VPN
D. Only for Regions in the US

---

### Q13. Which is the correct order from largest to smallest scope? *(Understand)*
A. Subnet > AZ > Region > VPC
B. Region > VPC > AZ > Subnet
C. VPC > Region > Subnet > AZ
D. AZ > VPC > Region > Subnet

---

### Q14. A startup is building a serverless REST API. The BEST AWS service to act as the front door (with auth, throttling, and integration with Lambda) is: *(Apply)*
A. Route 53
B. API Gateway
C. CloudFront
D. ALB

---

### Q15. Which is FALSE about Security Groups? *(Analyze)*
A. They are stateful
B. They can have ALLOW rules
C. They can have DENY rules
D. They apply to ENIs (effectively, to instances)

---

### Q16. To connect 30 VPCs across multiple accounts and on-prem networks with a single hub, the BEST service is: *(Apply)*
A. VPC Peering
B. AWS Transit Gateway
C. Internet Gateway
D. NACL

---

### Q17. CloudFront's "Origin Access Control" (OAC) is used to: *(Understand)*
A. Allow public access to S3
B. Lock down an S3 origin so only CloudFront can fetch from it
C. Cache content at the edge
D. Sign API calls

---

### Q18. Which is a Layer 4 load balancer designed for ultra-low latency and millions of requests per second? *(Remember)*
A. ALB
B. NLB
C. CLB
D. GWLB

---

### Q19. A company needs encrypted connectivity to AWS in days (not weeks), using their existing internet. The BEST option is: *(Apply)*
A. AWS Direct Connect
B. AWS Site-to-Site VPN
C. Transit Gateway only
D. CloudFront

---

### Q20. Which Route 53 routing policy is used for active-passive disaster recovery? *(Remember)*
A. Failover
B. Weighted
C. Geolocation
D. Multivalue

---

### Q21. By default, when you create a new VPC subnet, instances launched in it: *(Understand)*
A. Always get a public IP
B. Only get private IPs unless you enable public IP assignment OR attach via Internet Gateway
C. Are always reachable from the internet
D. Are tied to all AZs

---

### Q22. Which is TRUE about CloudFront? *(Understand)*
A. It only works with S3
B. It can use S3, ALB, EC2, or any custom HTTP origin as its origin
C. It cannot integrate with WAF
D. It does not support HTTPS

---

### Q23. Which is the BEST description of API Gateway? *(Understand)*
A. A managed Layer-4 TCP load balancer
B. A managed REST / HTTP / WebSocket API service with auth, throttling, and caching
C. A CDN
D. A DNS service

---

### Q24. To insert a 3rd-party security appliance (firewall, IDS) into network traffic, the BEST AWS load balancer is: *(Apply)*
A. ALB
B. NLB
C. GWLB (Gateway Load Balancer)
D. CLB

---

### Q25. NAT Gateway is: *(Evaluate)*
A. Free
B. AZ-scoped (one per AZ for HA)
C. Inbound-only
D. A replacement for an Internet Gateway

---

## 🎯 Answers + Explanations

### Q1: **C. Stateful, return traffic is automatically allowed**
SGs only have ALLOW rules and are stateful. NACLs are stateless and can have ALLOW + DENY.

### Q2: **B. NACL (Network ACL)**
NACLs can DENY at the subnet level. SGs only allow.

### Q3: **B. NAT Gateway (or NAT Instance)**
NAT Gateway lets private-subnet instances make outbound internet calls (for updates, API calls) but doesn't accept unsolicited inbound connections.

### Q4: **C. Geolocation**
Geolocation routes by the user's country/continent. Latency would route by network distance, which may not match jurisdiction.

### Q5: **B. AWS Direct Connect**
Dedicated 1/10/100 Gbps private fiber. Takes weeks to provision; not encrypted by default.

### Q6: **C. Edge Locations**
CloudFront's CDN runs at 400+ Edge Locations worldwide. AZs and Regions are not edge-of-network.

### Q7: **B. ALB**
ALB is Layer 7, supports host- and path-based routing, ideal for microservices. NLB is Layer 4.

### Q8: **B. VPC Gateway Endpoint for S3**
Gateway Endpoints are free and provide private access to S3 (and DynamoDB) without traversing the internet.

### Q9: **B. It is NON-transitive**
A peered to B and B peered to C does NOT give A access to C. Use Transit Gateway for transitive multi-VPC scenarios.

### Q10: **C. AWS Global Accelerator**
Two static anycast IPs, traffic enters AWS at the nearest edge, then rides the AWS backbone to the optimal endpoint.

### Q11: **B. Weighted**
Set 10% weight on the new version, 90% on the old. Gradual rollout / A/B testing.

### Q12: **C. Only if combined with a VPN**
DX itself is private but not encrypted at Layer 3. Pair DX with a VPN over it to get encryption.

### Q13: **B. Region > VPC > AZ > Subnet**
A VPC lives in one Region and spans multiple AZs; a subnet lives in exactly one AZ.

### Q14: **B. API Gateway**
API Gateway is the managed REST/HTTP/WebSocket API service that integrates natively with Lambda.

### Q15: **C. They can have DENY rules**
False, SGs are ALLOW-only. To explicitly deny, use a NACL.

### Q16: **B. AWS Transit Gateway**
Hub-and-spoke connectivity for many VPCs (and on-prem via VPN/DX). VPC peering doesn't scale beyond a handful of VPCs.

### Q17: **B. Lock down an S3 origin so only CloudFront can fetch from it**
OAC replaces the older OAI. Ensures users can only reach S3 content through CloudFront (so signed URLs, WAF, etc. work).

### Q18: **B. NLB**
Network Load Balancer = Layer 4 TCP/UDP, ultra-low latency, millions of req/sec, supports static IPs.

### Q19: **B. AWS Site-to-Site VPN**
Encrypted, fast to provision (hours), uses existing internet. Trade-off: variable latency vs Direct Connect.

### Q20: **A. Failover**
Failover = primary + secondary; Route 53 health-checks the primary and switches to secondary on failure.

### Q21: **B. Only get private IPs unless you enable public IP assignment OR attach via Internet Gateway**
The default subnet behavior is private. Public access requires IGW + a route to it + a public IP (or Elastic IP).

### Q22: **B. It can use S3, ALB, EC2, or any custom HTTP origin as its origin**
CloudFront is origin-agnostic. It integrates with WAF, supports HTTPS by default, and can front any HTTP server.

### Q23: **B. A managed REST / HTTP / WebSocket API service with auth, throttling, and caching**
API Gateway handles the API "edge", IAM/Cognito auth, rate-limit throttling, request/response transformation, caching.

### Q24: **C. GWLB (Gateway Load Balancer)**
GWLB inserts at Layer 3 and is purpose-built for transparently routing traffic through 3rd-party network appliances.

### Q25: **B. AZ-scoped (one per AZ for HA)**
NAT Gateway is per-AZ. For HA, deploy one in each AZ and route each private subnet to its local NAT. It is NOT free, pay per hour + per GB.

---

## 📊 Score Yourself

- 24–25 → 🏆 Networking master.
- 21–23 → ✅ Solid. Review wrong answers.
- 17–20 → ⚠️ Re-read VPC + Route 53.
- <17 → 🔁 Restart Module 4.

---

## 🃏 Add To Your Flashcards

- SG vs NACL (stateful/stateless, allow/deny, scope)
- 7 Route 53 routing policies
- ALB / NLB / GWLB layers and use cases
- CloudFront vs Global Accelerator
- VPC Endpoints, Gateway (S3, DDB) vs Interface (everything else)
- Direct Connect = no default encryption
- VPC Peering = non-transitive
- NAT Gateway = outbound only, per-AZ, costs $

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), then [Module 5: Databases](../Module-05-Databases/Reading.md)
