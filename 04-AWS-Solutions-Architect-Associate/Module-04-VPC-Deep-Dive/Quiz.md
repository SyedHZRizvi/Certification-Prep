# ✏️ Module 4 Quiz: VPC Deep Dive

> **Instructions:** 26 questions, ~35 min. Target 21/26.

> **Bloom's distribution.** Remember 5 (19%) · Understand 6 (23%) · Apply 9 (35%) · Analyze/Evaluate 5 (19%) · Create 1 (4%).

---

## Questions

### Q1. A subnet is considered "public" when: *(Understand)*
A. It uses a /24 CIDR
B. Its route table has a route `0.0.0.0/0 → IGW`
C. Its NACL allows port 443
D. AWS marks it as public in the console

---

### Q2. A company has 12 VPCs across 3 AWS accounts that all need to communicate, plus an on-prem network. The BEST design is: *(Apply)*
A. Full mesh of VPC peerings
B. Transit Gateway with attachments for each VPC and a DX/VPN to on-prem
C. Site-to-Site VPN between every pair
D. CloudFront

---

### Q3. An EC2 in a private subnet must read objects from S3 without traversing the internet AND minimize cost. The BEST solution is: *(Apply)*
A. NAT Gateway
B. NAT Instance with Elastic IP
C. Gateway VPC Endpoint for S3
D. Interface VPC Endpoint for S3

---

### Q4. To block a specific malicious IP range from reaching ANY instance in a subnet, the right tool is: *(Apply)*
A. Security Group with deny rule
B. NACL with explicit deny entry
C. IAM policy
D. Route table

---

### Q5. A company needs the lowest-latency, highest-throughput private connection from its on-prem data center to AWS, with predictable performance. They should use: *(Apply)*
A. Site-to-Site VPN
B. AWS Direct Connect
C. Client VPN
D. CloudFront

---

### Q6. VPC peering is: *(Remember)*
A. Transitive, A↔B and B↔C grants A↔C
B. Non-transitive, A↔B does not grant A↔C
C. Always region-local
D. Limited to one account

---

### Q7. To make a NAT Gateway architecture highly available across an outage of a single AZ, you should: *(Apply)*
A. Deploy one NAT Gateway per AZ with the per-AZ subnets routing to their local NAT GW
B. Deploy one NAT Gateway in one AZ with a backup IGW
C. Use a NAT instance instead
D. Disable cross-AZ failover

---

### Q8. An app in a private subnet must call SQS without using a NAT Gateway. The right solution is: *(Apply)*
A. Gateway endpoint for SQS
B. Interface endpoint for SQS (PrivateLink)
C. CloudFront
D. Direct Connect

---

### Q9. Which is TRUE about security groups? *(Understand)*
A. They are stateless
B. They support explicit deny rules
C. They are stateful, return traffic is automatically allowed
D. They apply at the subnet level

---

### Q10. An EC2 instance in a public subnet has a public IP but cannot reach the internet. Most likely cause: *(Analyze)*
A. The IGW is missing from the route table OR the SG/NACL blocks outbound
B. EC2 instances cannot reach the internet from public subnets
C. The instance is on Spot
D. The VPC has no name

---

### Q11. Which is TRUE about Direct Connect? *(Understand)*
A. Traffic is encrypted by default
B. Traffic is NOT encrypted by default, use MACsec or VPN over DX
C. Setup takes minutes
D. It works only with us-east-1

---

### Q12. A Site-to-Site VPN is established between on-prem and an AWS VPC. Traffic from another VPC peered to that VPC must reach on-prem. Will it work without changes? *(Analyze)*
A. Yes, peering is transitive
B. No, peering is not transitive, use a Transit Gateway
C. Yes, with a NACL change
D. Yes, with a CloudFront distribution

---

### Q13. The default behavior of a newly-created custom security group is: *(Remember)*
A. Allow all inbound, allow all outbound
B. Deny all inbound, deny all outbound
C. Deny all inbound, allow all outbound
D. Allow all inbound, deny all outbound

---

### Q14. Which is the cheapest endpoint type for accessing S3 privately from a VPC? *(Remember)*
A. Interface endpoint
B. Gateway endpoint (free)
C. NAT Gateway
D. Direct Connect

---

### Q15. The maximum CIDR block size for a VPC is: *(Remember)*
A. /8
B. /16
C. /24
D. /28

---

### Q16. To privately expose your SaaS service (running behind an NLB) to customer VPCs without VPC peering, use: *(Apply)*
A. CloudFront
B. AWS PrivateLink (Endpoint Service + Interface Endpoint)
C. NAT Gateway
D. Direct Connect

---

### Q17. An Egress-Only Internet Gateway provides: *(Understand)*
A. Inbound IPv6
B. Outbound-only IPv6 (analogous to NAT for IPv4)
C. Outbound IPv4
D. Encrypted DX

---

### Q18. Which routing service supports cross-region peering for hub-and-spoke topologies? *(Understand)*
A. VPC peering only
B. Transit Gateway (TGW supports inter-region peering)
C. Internet Gateway
D. NAT Gateway

---

### Q19. VPC Flow Logs can capture: *(Remember)*
A. Full packet payloads
B. Metadata about IP traffic (accepted/rejected)
C. Only S3 API calls
D. Only TLS metadata

---

### Q20. A company needs remote employees to connect into the corporate VPC from their laptops. The BEST AWS service is: *(Apply)*
A. Site-to-Site VPN
B. Direct Connect
C. AWS Client VPN
D. CloudFront

---

### Q21. Which is TRUE about NACLs? *(Understand)*
A. They apply per-instance
B. They are stateful
C. They support both allow and deny rules and are evaluated in numbered order
D. There can be many NACLs per subnet

---

### Q22. Two VPCs in different AWS Regions need private connectivity. Options include: *(Evaluate)*
A. Inter-region VPC peering OR Transit Gateway peering
B. Only NAT Gateway
C. Only Site-to-Site VPN
D. CloudFront

---

### Q23. An instance launched without a public IP in a public subnet: *(Analyze)*
A. Will get a public IP automatically
B. Will NOT have a public IP unless auto-assign is on or you attach an EIP
C. Will use the NAT Gateway's IP
D. Will be deleted

---

### Q24. A company wants to encrypt traffic over a Direct Connect link. The BEST option is: *(Apply)*
A. MACsec on a supported DX port OR an IPSec VPN over the DX
B. Direct Connect always encrypts
C. Encrypt at the app layer only and ignore DX
D. CloudFront

---

### Q25. An app in VPC-A must call only one specific microservice in VPC-B (different account), not full network connectivity. The MOST appropriate solution is: *(Create)*
A. Transit Gateway
B. AWS PrivateLink (Interface Endpoint to that service)
C. VPC peering
D. Direct Connect

---

### Q26. The default NACL on a new VPC subnet: *(Understand)*
A. Denies everything
B. Allows ALL inbound and outbound
C. Allows only port 443
D. Only allows IPv6

---

## 🎯 Answers + Explanations

### Q1: **B. Route 0.0.0.0/0 → IGW**
Public/private is determined by the route table, not a flag.

### Q2: **B. Transit Gateway**
Mesh of peerings becomes unmanageable past ~5 VPCs. TGW centralizes routing and supports on-prem too.

### Q3: **C. Gateway VPC Endpoint for S3**
Free, private, and routed via route table updates. Interface endpoints work too but cost money.

### Q4: **B. NACL with explicit deny**
SGs are allow-only. To deny a specific source you need a NACL deny entry.

### Q5: **B. Direct Connect**
Dedicated fiber = predictable low latency + high throughput. VPN goes over public internet.

### Q6: **B. Non-transitive**
Peering only connects the two specific VPCs. Use TGW for transitivity.

### Q7: **A. One NAT GW per AZ with local routing**
A NAT GW lives in ONE AZ; if that AZ fails, others lose internet unless they have their own NAT.

### Q8: **B. Interface endpoint for SQS**
SQS is supported via interface endpoint (PrivateLink). S3 and DynamoDB use gateway endpoints.

### Q9: **C. Stateful, return traffic auto-allowed**
SGs are stateful, allow-only, and applied at the ENI level.

### Q10: **A. Missing IGW route or SG/NACL block**
Public subnet must have IGW route + the instance must have a public IP + SG/NACL must allow.

### Q11: **B. Not encrypted by default**
DX is private fiber but data is not encrypted. Use MACsec or run VPN over DX.

### Q12: **B. Peering is not transitive, use TGW**
Classic exam trap.

### Q13: **C. Deny inbound, allow outbound**
Default custom SG: no inbound rules (deny all in), allow all outbound.

### Q14: **B. Gateway endpoint (free)**
Gateway endpoints (S3, DynamoDB) cost nothing. Interface endpoints cost ~$0.01/hr per AZ + data.

### Q15: **B. /16**
VPC CIDR can be /16 (65,536 IPs) at the largest down to /28.

### Q16: **B. AWS PrivateLink**
PrivateLink lets you expose your NLB-backed service to other VPCs/accounts via Interface Endpoints, no peering, no public IPs.

### Q17: **B. Outbound-only IPv6**
Egress-Only IGW = NAT for IPv6. (IPv6 doesn't need NAT for addressing, this is for keeping the instance unreachable from internet.)

### Q18: **B. Transit Gateway (with inter-region TGW peering)**
TGW peering supports cross-region. Standard VPC peering is also cross-region capable but doesn't give you hub-and-spoke at scale.

### Q19: **B. Metadata only (no payloads)**
Flow Logs capture src/dst IP, port, protocol, bytes, accepted/rejected, not packet contents.

### Q20: **C. AWS Client VPN**
Managed OpenVPN service for end-user laptops. Site-to-Site is for whole networks; DX is private fiber.

### Q21: **C. Allow + deny in numbered order**
NACLs are stateless, subnet-level, numbered, allow + deny. One NACL per subnet (a subnet can have only one NACL associated at a time).

### Q22: **A. Inter-region peering OR TGW peering**
Both work cross-region. Pick TGW for scale; peering for simple 1:1.

### Q23: **B. Won't have a public IP unless auto-assign or EIP**
"Public subnet" doesn't auto-give the instance a public IP.

### Q24: **A. MACsec on DX or VPN over DX**
Either approach adds encryption. Some DX ports support MACsec; VPN over DX is universal.

### Q25: **B. PrivateLink**
Single-service exposure with no overlapping-CIDR worries and no full network access. Cleaner than peering for "just one service."

### Q26: **B. Allows ALL in and out**
The default NACL is permissive. Custom NACLs deny everything by default.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Move on
- 21–24/26 → ✅ Solid; review wrong ones
- 17–20/26 → ⚠️ Re-read NAT, endpoints, peering sections
- <17/26 → 🔁 Re-watch all 4 essential videos and re-quiz

---

## 🃏 Add To Your Flashcards

- Public vs private subnet definition
- Gateway endpoint (S3/DDB) vs Interface endpoint
- NAT Gateway HA pattern (one per AZ)
- SG stateful vs NACL stateless
- VPC peering non-transitive
- TGW vs peering vs DX vs VPN
- PrivateLink for single-service cross-VPC exposure

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5: S3 Deep Dive](../Module-05-S3-Deep-Dive/Reading.md)
