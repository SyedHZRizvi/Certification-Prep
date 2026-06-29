# 📋 Module 4 Cheat Sheet: VPC Deep Dive

> One page. Print it. Tape to your monitor.

---

## 🏗️ VPC Anatomy

```
VPC /16
 ├── Public subnet  (route 0.0.0.0/0 → IGW)
 ├── Private subnet (route 0.0.0.0/0 → NAT (Network Address Translation) GW)
 └── DB subnet      (no internet route at all)
```

CIDR: /16 max, /28 min. Use RFC1918 (`10/8`, `172.16/12`, `192.168/16`).

---

## 🚪 Internet Egress For Private Subnets

| Need | Use |
|------|-----|
| Outbound IPv4 internet | NAT Gateway (one per AZ for HA) |
| Outbound IPv6 internet | Egress-Only IGW |
| Outbound to S3 (Simple Storage Service)/DynamoDB | Gateway Endpoint (free!) |
| Outbound to other AWS svcs | Interface Endpoint (PrivateLink) |

🧠 **"NAT for general internet. Endpoints for AWS services."**

---

## 🚦 Endpoint Type Decision

```
S3 or DynamoDB? → Gateway endpoint (free)
Other AWS service? → Interface endpoint (PrivateLink, $)
Your own service across VPCs? → PrivateLink (NLB-backed)
```

---

## 🔗 Connecting VPCs / On-Prem

| Need | Tool |
|------|------|
| 2 VPCs only | VPC peering |
| 5+ VPCs and/or on-prem | **Transit Gateway** |
| Single-service cross-VPC | **PrivateLink** |
| On-prem private fiber, lowest latency | **Direct Connect** |
| On-prem over internet, quick to set up | **Site-to-Site VPN (Virtual Private Network)** |
| Encrypt DX | **MACsec** or **VPN over DX** |
| Remote employees laptops → VPC | **AWS Client VPN** |

⚠️ **VPC peering is NOT transitive.**

---

## 🛡️ Security Group vs NACL

| | SG | NACL |
|---|----|------|
| Scope | ENI | Subnet |
| State | **Stateful** | **Stateless** |
| Rules | **Allow only** | **Allow + Deny** |
| Order | All evaluated | Numbered, lowest first |
| Default custom | No in, all out | Deny all |
| Default VPC | n/a | Allow all in/out |

🧠 *"Deny IP? NACL. Allow from another SG? SG."*

---

## 🗺️ Route Table Cheat

| Destination | Target | Means |
|-------------|--------|-------|
| 10.0.0.0/16 | local | Within-VPC traffic |
| 0.0.0.0/0 | igw-xxx | Public internet (public subnet) |
| 0.0.0.0/0 | nat-xxx | Egress only (private subnet) |
| pl-xxxxx (S3) | vpce-xxx | S3 prefix list → gateway endpoint |
| 192.168.0.0/16 | pcx-xxx | Peered VPC |
| 0.0.0.0/0 | tgw-xxx | Through Transit Gateway |

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Use Gateway VPC Endpoint for S3 / DynamoDB"
- "Use Transit Gateway for many VPCs and hybrid"
- "Use PrivateLink to expose a single service"
- "Use NACLs to deny specific IPs"
- "Use one NAT Gateway per AZ for HA"
- "Use Direct Connect for low-latency private fiber"
- "Use Site-to-Site VPN for quick on-prem connectivity"

❌ Usually wrong:

- "Peering is transitive"
- "DX is encrypted by default"
- "Open SG inbound 0.0.0.0/0 on port 22"
- "Single NAT Gateway gives HA"
- "Block IPs with a security group"
- "Use IGW to reach S3 privately"

---

## ⚠️ Anti-Patterns

- ❌ Single NAT GW for HA
- ❌ VPC peering mesh for 5+ VPCs
- ❌ Public subnet for database
- ❌ Same NACL for all subnets ("one big NACL")
- ❌ DX with no backup VPN
- ❌ Open SSH (Secure Shell) (port 22) to 0.0.0.0/0
- ❌ Using IGW route to reach S3 (use gateway endpoint)

---

## 🗓️ Key Numbers

| Item | Value |
|------|-------|
| VPC CIDR max | /16 |
| VPC CIDR min | /28 |
| Reserved IPs per subnet | 5 |
| NAT GW max bandwidth | up to 100 Gbps |
| TGW max VPC attachments | 5,000 |
| DX bandwidth options | 1 / 10 / 100 Gbps (or sub-1G via partner) |
| Site-to-Site VPN max throughput | ~1.25 Gbps per tunnel |

---

## ✏️ Quick Self-Check

1. What makes a subnet public? ___
2. Gateway vs Interface endpoint, when each? ___
3. SG vs NACL, main differences? ___
4. Peering vs TGW, when each? ___
5. DX vs VPN, when each? ___

---

➡️ [Module 5: S3 Deep Dive](../Module-05-S3-Deep-Dive/Reading.md)
