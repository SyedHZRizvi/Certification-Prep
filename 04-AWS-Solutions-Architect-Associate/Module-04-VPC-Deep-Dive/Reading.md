# Module 4: VPC Deep Dive 🌐

> **Why this module matters:** Networking is roughly **20% of SAA-C03 questions** when you combine pieces from Resilient + Secure + Performance. The exam loves scenarios like "private app needs S3 access without internet" or "connect 3 VPCs and an on-prem network." Get NAT, endpoints, peering, Transit Gateway and DX right and you'll fly through 12+ questions.

---

## 🏢 A Story: The Office Park

Imagine a brand-new office park (your VPC). It's surrounded by a fence (your CIDR block). Inside, you carve out lots: some have direct frontage on the street (public subnets), some are tucked behind the front building (private subnets).

- The **front gate** (Internet Gateway, IGW) is the only door to the public street.
- **Tenants in front buildings** put up their own signs visible from the street (Elastic IPs).
- **Tenants in back buildings** can ride a shuttle (NAT Gateway) when they need to grab supplies from the street, but the street can't see them.
- A **special service window** in the back wall (VPC endpoint) lets you order from AWS's internal kitchen (S3, DynamoDB) without leaving the park.
- A **bridge** to a neighboring park (VPC peering) connects you privately, no street involved.
- A **hub-and-spoke depot** (Transit Gateway) connects you to many neighboring parks and to your old downtown HQ.
- The **dedicated fiber line** to HQ (Direct Connect) bypasses the public street entirely.

That's a VPC. Now let's add specifics.

---

## 🏗️ VPC Anatomy

A **VPC** is your private logically-isolated network in AWS.

```
VPC: 10.0.0.0/16  ──  Region (multi-AZ)
 │
 ├── AZ-a
 │    ├── Public subnet  10.0.1.0/24   ── route 0.0.0.0/0 → IGW
 │    └── Private subnet 10.0.2.0/24   ── route 0.0.0.0/0 → NAT
 ├── AZ-b
 │    ├── Public subnet  10.0.3.0/24   ── route 0.0.0.0/0 → IGW
 │    └── Private subnet 10.0.4.0/24   ── route 0.0.0.0/0 → NAT
 ...
```

| Component | Role |
|-----------|------|
| **CIDR block** | The VPC's IP range. Typically `/16` (65k IPs). Must be in private RFC1918 ranges. |
| **Subnet** | A range within the VPC, tied to one AZ. /24 = 256 IPs (251 usable — AWS reserves 5). |
| **Route Table** | Per-subnet routing rules — where traffic for which CIDRs goes. |
| **Internet Gateway (IGW)** | Allows ↔ public internet. Attached at VPC level. |
| **NAT Gateway / NAT Instance** | Outbound-only internet for private subnets. |
| **Security Group** | Stateful firewall at the ENI level. Allow only. |
| **NACL** | Stateless firewall at the subnet level. Allow + deny, numbered order. |
| **VPC Flow Logs** | Capture metadata of accepted/rejected traffic. |

### What makes a subnet "public" vs "private"?

It's NOT a setting. It's the **route table**: if the subnet's route table has `0.0.0.0/0 → IGW`, it's public.

🎯 **Exam trap:** "I put my instance in a public subnet but it can't reach the internet." → Likely missing a **public IP / Elastic IP** OR the SG/NACL is blocking. A public subnet alone doesn't give the instance a public IP.

---

## 🚪 NAT Gateway vs NAT Instance

Private-subnet instances need a way to make *outbound* internet calls (yum updates, API calls) without being reachable from the internet. NAT is that mechanism.

| Feature | NAT Gateway (AWS managed) | NAT Instance (EC2 you run) |
|---------|---------------------------|----------------------------|
| Setup | Managed, click-to-create | Build your own AMI, configure routing |
| Bandwidth | Up to 100 Gbps, scales automatically | Limited by instance type |
| Availability | One per AZ (deploy multiple for HA) | DIY HA |
| Security | Managed | You patch the OS |
| Cost | Per-hour + per-GB processed | Cheaper for very small workloads |
| Port forwarding / NAT instance as bastion | Not supported | Supported |

🎯 **Modern best practice:** Use **NAT Gateway**, one per AZ (so an AZ failure doesn't kill the others' internet).

🎯 **Exam pattern:** "Reduce egress data costs from a private subnet's instances pulling from S3" → **Gateway VPC Endpoint for S3** (NAT not used; free).

---

## 🚦 VPC Endpoints — Talking to AWS Without The Internet

VPC endpoints let resources inside your VPC reach AWS services **without** traffic going over the public internet (or the NAT, with its $$).

| Endpoint type | Services | How it works | Cost |
|---------------|----------|--------------|------|
| **Gateway Endpoint** | S3, DynamoDB only | Route table entry to the service prefix list | FREE |
| **Interface Endpoint (PrivateLink)** | Most other AWS services + SaaS partners | ENI in your subnet with a private IP | $/hour + $/GB |

### Gateway endpoint (S3 / DynamoDB)

```
Private subnet → route table → S3 prefix list ID → S3
```

### Interface endpoint (everything else)

```
Private subnet → ENI with private IP → AWS service
```

🎯 **Exam pattern:** "App in private subnet reads from S3, you want to eliminate NAT data transfer costs." → **Gateway endpoint for S3**.
🎯 **Exam pattern:** "App in private subnet calls SQS without internet exposure." → **Interface endpoint for SQS** (PrivateLink).

### AWS PrivateLink — share your service across accounts

If you build a service on an NLB, you can expose it as a **PrivateLink service** that other VPCs (in your account or others') consume via an interface endpoint. No peering, no public internet.

---

## 🔗 Connecting VPCs and On-Prem — The 5 Options

| Option | Use case | Limits |
|--------|----------|--------|
| **VPC Peering** | Connect 2 VPCs (same or different accounts/regions) | NOT transitive. N×(N-1)/2 connections for N VPCs (mesh). |
| **Transit Gateway (TGW)** | Hub-and-spoke for many VPCs + on-prem | Centralizes routing. Up to 5,000 VPC attachments. Cross-region peering. |
| **VPC Endpoint (PrivateLink)** | Expose a single service from one VPC to another | Per-service, not full network connectivity. |
| **Site-to-Site VPN** | IPSec tunnel from on-prem to AWS over internet | Up to ~1.25 Gbps per tunnel; encrypted; quick to set up. |
| **Direct Connect (DX)** | Dedicated private fiber from on-prem to AWS | 1, 10, 100 Gbps; weeks to provision; no internet; lowest latency. |

### Peering vs TGW — when to switch?

- **2-3 VPCs**: peering is simple and free for the connection.
- **5+ VPCs or hybrid hub-and-spoke**: TGW. Configuration of a mesh of peerings becomes a nightmare.

🎯 **Exam pattern:** "10 VPCs and 2 on-prem data centers must all reach each other." → **Transit Gateway** at the hub.
🎯 **Exam pattern:** "Two VPCs in different accounts need private connectivity." → **VPC Peering**.

### Direct Connect specifics

| Variant | What | Use |
|---------|------|-----|
| **Dedicated Connection** | Whole 1/10/100 Gbps port at a DX location | Large enterprises |
| **Hosted Connection** | Slice of a partner's port (50 Mbps – 10 Gbps) | Smaller deployments |
| **DX Gateway** | Connect one DX to multiple VPCs across regions | Global hybrid |
| **DX + VPN** | Backup VPN over internet in case DX dies | Resilience |
| **MACsec encryption** | Layer-2 encryption on DX | Compliance |

🎯 **Exam pattern:** "Predictable low latency and high throughput from on-prem to AWS, with private fiber." → **Direct Connect**.
🎯 **Exam pattern:** "Need encryption on the DX link." → **MACsec** or **VPN over DX**.

---

## 🛡️ Security Groups vs NACLs (Memorize This Table)

| | Security Group | NACL |
|---|----------------|------|
| Scope | Per-ENI (per instance/RDS/etc.) | Per-subnet |
| State | **Stateful** (return traffic auto-allowed) | **Stateless** (must allow both directions) |
| Rules | **Allow only** | **Allow AND Deny** |
| Order | All rules evaluated | Numbered — lowest number first |
| Default | New SG: allow ALL outbound, none inbound | Default NACL: allow ALL in/out |
| Multiple per resource | Yes (multiple SGs per ENI) | One NACL per subnet |

🎯 **Exam trap:** "Block a specific IP range" → must use **NACL** (SGs cannot deny).
🎯 **Exam trap:** "Allow only the load balancer to reach the app instance" → SG on app references **LB's SG** as the source.

---

## 🗺️ Route Tables, IGW, Egress-Only IGW

| Resource | Use |
|----------|-----|
| **Route Table (main)** | Default for subnets without an explicit RT |
| **IGW** | Bidirectional internet for IPv4 (with public IP) and IPv6 |
| **Egress-only IGW (EIGW)** | Like NAT, but for **IPv6**: outbound only |

🧠 IPv4 outbound only → NAT Gateway. IPv6 outbound only → Egress-Only IGW.

---

## 🔐 VPN Options

| VPN | Endpoints | Use |
|-----|-----------|-----|
| **Site-to-Site VPN** | Customer Gateway (on-prem device) ↔ Virtual Private Gateway (in your VPC) or Transit Gateway | Connect on-prem network to AWS |
| **AWS Client VPN** | Managed OpenVPN service for end-user laptops | Remote workforce to VPC |
| **AWS VPN CloudHub** | Hub for multiple S2S VPNs in a hub-and-spoke topology | Multi-branch offices |

---

## 📊 VPC Flow Logs

Capture metadata (not packet contents) for traffic to/from ENIs. Three scopes: VPC, subnet, ENI.

Destinations: **CloudWatch Logs**, **S3**, **Kinesis Data Firehose**.

🎯 **Exam pattern:** "Need to troubleshoot why traffic between two instances is dropping." → Enable **VPC Flow Logs** and look for REJECT entries.

---

## 🧭 Common VPC Design Patterns

### 1. Two-Tier (Web + DB)
```
VPC 10.0.0.0/16
├── Public subnets (AZ-a, AZ-b)    → ALB
├── Private subnets (AZ-a, AZ-b)   → EC2 web tier
└── Private subnets (AZ-a, AZ-b)   → RDS Multi-AZ
```

### 2. Three-Tier (Web + App + DB)
Add a separate private subnet tier for the app layer. The web tier talks only to the app SG; the app talks only to the DB SG.

### 3. Hub-and-Spoke with Transit Gateway
```
On-prem ──VPN/DX──┐
                  │
            Transit Gateway
                  │
   ┌──────────────┼──────────────┐
 VPC-Shared   VPC-AppA       VPC-AppB
 (logging,
  shared svc)
```

### 4. Workload Isolation
Use separate AWS accounts (Organizations) per environment, peer or TGW for selective inter-VPC traffic.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "VPC peering is transitive" | NO. A↔B and B↔C does NOT give A↔C. Use TGW or full mesh. |
| "Public subnet auto-assigns public IPs" | Only if `auto-assign public IPv4` is enabled OR you allocate an EIP. |
| "NAT Gateway is highly available out of the box" | Each NAT GW lives in ONE AZ. Deploy one per AZ for HA. |
| "Security groups can deny traffic" | NO. SGs are allow-only. Use NACLs for explicit denies. |
| "Internet Gateway is required for S3 access from a VPC" | NO. Use a **Gateway VPC Endpoint** for S3 — internal, free. |
| "Direct Connect encrypts traffic by default" | NO. Layer-1 private fiber, but data isn't encrypted. Add MACsec or run VPN over DX. |

---

## 🚨 Exam Traps

1. **"Private subnet must access S3 without internet"** → Gateway VPC Endpoint for S3.
2. **"10 VPCs to connect"** → Transit Gateway (not 45 peering connections).
3. **"Encrypt Direct Connect link"** → MACsec or VPN over DX.
4. **"VPC peering is transitive"** → False. Never pick that answer.
5. **"Static IPs for outbound from VPC"** → NAT Gateway → assign Elastic IP.
6. **"Block one specific malicious IP"** → NACL deny rule (SGs can't deny).
7. **"Lowest latency private connection to on-prem"** → Direct Connect.
8. **"Cheap private connection to on-prem, can be set up today"** → Site-to-Site VPN.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **VPC** | Virtual Private Cloud — your logically isolated network |
| **CIDR** | Classless Inter-Domain Routing — IP range notation |
| **Subnet** | A range within a VPC, tied to a single AZ |
| **IGW** | Internet Gateway — VPC-level entry to public internet |
| **NAT Gateway** | Outbound-only IPv4 internet for private subnets |
| **Egress-Only IGW** | NAT but for IPv6 |
| **Security Group** | Stateful, instance-level firewall |
| **NACL** | Stateless, subnet-level firewall |
| **VPC Endpoint** | Gateway (S3/DDB) or Interface (PrivateLink) — reach AWS privately |
| **VPC Peering** | Private connectivity between 2 VPCs (non-transitive) |
| **Transit Gateway** | Hub-and-spoke router for many VPCs + on-prem |
| **Direct Connect** | Dedicated private fiber from on-prem to AWS |
| **Site-to-Site VPN** | IPSec tunnel over internet from on-prem to AWS |
| **AWS Client VPN** | Managed OpenVPN for end-user laptops |
| **PrivateLink** | Expose a service via an Interface Endpoint privately |
| **VPC Flow Logs** | Metadata capture of ENI traffic |

---

## ✅ Module 4 Summary

You now know:
- 🏗️ VPC anatomy (CIDR, subnets, route tables, IGW, NAT)
- 🚪 NAT Gateway vs NAT Instance and how to make it HA
- 🚦 Gateway vs Interface VPC endpoints (and PrivateLink)
- 🔗 Peering vs TGW vs DX vs VPN — the 5 connection options
- 🛡️ SGs vs NACLs (stateful vs stateless)
- 🧭 Two-tier, three-tier, and hub-and-spoke patterns
- 🚨 The 8 most-tested networking traps

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 5: S3 Deep Dive](../Module-05-S3-Deep-Dive/Reading.md)

---

## 📚 Further Reading

- 📖 **[VPC User Guide (official)](https://docs.aws.amazon.com/vpc/latest/userguide/)**
- 📖 **[Transit Gateway Best Practices](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-best-design-practices.html)**
- 📖 **[Direct Connect User Guide](https://docs.aws.amazon.com/directconnect/latest/UserGuide/)**
- 📖 **[VPC Connectivity Options Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/welcome.html)**
