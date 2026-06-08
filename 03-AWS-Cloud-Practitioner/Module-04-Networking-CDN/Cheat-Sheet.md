# 📋 Module 4 Cheat Sheet: Networking & CDN

> One page. Print it. Tape it to your monitor.

---

## 🏘️ VPC Anatomy

```
   VPC: 10.0.0.0/16  (your private cloud network)
   ├─ IGW (public road)
   ├─ NAT Gateway (private→outbound only, per AZ)
   ├─ Public Subnet (route to IGW)
   │   └─ Web tier / ELB
   └─ Private Subnet (route to NAT)
       └─ App / DB tier
```

---

## 🔥 SG vs NACL (THE most-tested table)

| | Security Group | NACL |
|---|----------------|------|
| Scope | Instance (ENI) | Subnet |
| Stateful? | ✅ Yes | ❌ No |
| Rules | ALLOW only | ALLOW + DENY |
| Default | In: deny / Out: allow | All allow |

🎯 Block bad IP at subnet = **NACL**. Allow port 80 to EC2 = **SG**.

---

## 📡 Route 53, 7 Routing Policies

| Policy | Use case |
|--------|----------|
| **Simple** | One target |
| **Weighted** | A/B, % split |
| **Latency-based** | Lowest network latency |
| **Failover** | Active/passive DR |
| **Geolocation** | By user's country |
| **Geoproximity** | By geographic distance + bias |
| **Multivalue Answer** | Up to 8 healthy records, simple HA |

---

## 📦 CloudFront (CDN)

- Caches at **400+ Edge Locations**
- Origins: S3, ALB, EC2, custom HTTP
- **OAC** locks S3 origin to CF only
- Integrates with **WAF, Shield, Lambda@Edge**

CloudFront vs Global Accelerator:

- **CloudFront** = caches HTTP content
- **Global Accelerator** = anycast IPs + AWS backbone, any TCP/UDP

---

## ⚖️ Load Balancers

| Type | Layer | When |
|------|-------|------|
| **ALB** | 7 (HTTP) | Web, microservices, path/host routing |
| **NLB** | 4 (TCP/UDP) | Ultra-low latency, M req/sec, static IP |
| **GWLB** | 3 (IP) | Insert 3rd-party firewalls / IDS |
| **CLB** | 4/7 | Legacy, avoid |

---

## 🌐 Hybrid Connectivity

| Option | Notes |
|--------|-------|
| **Site-to-Site VPN** | Encrypted IPsec over internet; hours to set up |
| **Direct Connect (DX)** | Dedicated 1/10/100 Gbps; NOT encrypted by default; weeks to set up |
| **DX + VPN** | Encryption over DX |
| **Transit Gateway** | Hub for many VPCs + on-prem |
| **VPC Peering** | 1:1, non-transitive |

---

## 🔌 VPC Endpoints

| Type | For |
|------|-----|
| **Gateway Endpoint** | S3 and DynamoDB (free, uses route table) |
| **Interface Endpoint (PrivateLink)** | Everything else (uses ENI) |

🎯 "Private S3 access from VPC" → **Gateway Endpoint.**

---

## 🛜 API Gateway

- Managed REST / HTTP / WebSocket APIs
- Handles auth, throttling, transformations, caching
- Pair with **Lambda** for fully serverless backends

---

## 🏆 Exam Power Phrases

✅ "Use Geolocation routing for GDPR / sovereignty"
✅ "Use Failover routing for DR"
✅ "Use NACL to deny a specific IP at the subnet"
✅ "Use CloudFront + WAF + Shield for global secure delivery"
✅ "Use Transit Gateway for many VPCs"

Wrong:
❌ "Security Group can deny a specific IP"
❌ "VPC peering is transitive"
❌ "Direct Connect is encrypted by default"
❌ "Use CloudFront for non-HTTP UDP traffic"

---

## ⚠️ Anti-Patterns

- ❌ Single NAT Gateway in one AZ for a multi-AZ workload (single point of failure)
- ❌ Public subnet for a database
- ❌ Using SGs to try to DENY traffic
- ❌ Direct Connect with no encryption for sensitive data
- ❌ Mesh of VPC Peerings when you should use Transit Gateway

---

## 🗓️ Key Facts

- 1 IGW per VPC
- Subnets are **AZ-scoped** (one AZ each)
- NAT Gateway is outbound-only, per-AZ, costs $$
- CloudFront = HTTP cache. Global Accelerator = TCP/UDP backbone
- Route 53 has 7 routing policies

---

## ✏️ Quick Self-Check

1. SG vs NACL, 3 differences? ___
2. 7 Route 53 routing policies? ___
3. ALB vs NLB vs GWLB layer? ___
4. CloudFront vs Global Accelerator? ___
5. Gateway vs Interface endpoint? ___

---

➡️ Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) before continuing.
Then [Module 5: Databases](../Module-05-Databases/Reading.md)
