# 📋 Module 8 Cheat Sheet: Network Security

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛡️ NSG Quick Rules

- **Lower priority number = evaluated first** (100 wins over 200)
- Stateful, return traffic auto-allowed
- 5-tuple: src + src port + dst + dst port + protocol
- Default rules: 65000/65001/65500 in **and** out
- Both subnet NSG + NIC NSG apply, **Deny in either = drop**

```
Inbound order : subnet NSG → NIC NSG → VM (Virtual Machine)
Outbound order: NIC NSG → subnet NSG → next-hop
```

---

## 🏷️ ASG

- Logical tag on NICs
- Single VNet only (no peer crossing)
- Use as **source** or **destination** in NSG rules
- "Allow asg-web → asg-app on 8080"

---

## 🔥 Azure Firewall

| SKU (Stock Keeping Unit) | Notable |
|-----|---------|
| Basic | L3/L4, ~250 Mbps |
| **Standard** | + Threat intel, FQDN tags, DNAT, ~30 Gbps |
| **Premium** | + TLS (Transport Layer Security) inspection, IDPS, URL filtering |

Rule order: **DNAT → Network → Application** (within priority)

Subnet name (case-sensitive): `AzureFirewallSubnet`, min `/26`

---

## 🚪 Load Balancing Service Picker

| Service | Layer | Scope | WAF (Web Application Firewall) | Use when |
|---------|-------|-------|-----|----------|
| **Standard LB** | L4 | Region | ❌ | TCP (Transmission Control Protocol)/UDP (User Datagram Protocol), internal or public |
| **Cross-region LB** | L4 | Global | ❌ | Global TCP/UDP |
| **Application Gateway WAF v2** | L7 | Region | ✅ | Regional web app + WAF |
| **Front Door (Std/Prem)** | L7 | Global | ✅ | Global web app + WAF + CDN (Content Delivery Network) |
| **Traffic Manager** | DNS (Domain Name System) | Global | ❌ | DNS-based steering, no proxy |

🧠 **Regional L7 → AGW. Global L7 → Front Door. DNS-only → Traffic Manager.**

---

## 🛡️ DDoS (Distributed Denial of Service)

| Plan | Scope |
|------|-------|
| Basic (free) | All Azure infrastructure |
| **DDoS Network Protection** | Per-VNet, $$$/month |
| DDoS IP Protection | Per public IP, cheaper |

---

## 🏆 Exam Power Phrases

Often **correct**:

- ✅ "Use ASGs to avoid hardcoded IPs"
- ✅ "Lower priority number wins"
- ✅ "WAF in Detection mode first, then Prevention"
- ✅ "Front Door + Private Link origin"
- ✅ "Azure Firewall Premium for TLS inspection"

Often **wrong**:

- ❌ "NSG is stateless"
- ❌ "Higher priority number = first"
- ❌ "ASG works across peered VNets"
- ❌ "Basic LB has 99.99% SLA (Service Level Agreement)"
- ❌ "Traffic Manager proxies the traffic"

---

## ⚠️ Anti-Patterns

- ❌ "Allow Any/Any" rules in production NSGs
- ❌ Public IPs on VMs (use Bastion / private endpoint)
- ❌ AGW + Front Door in same chain without reason (latency + cost)
- ❌ WAF in Prevention mode without baseline tuning
- ❌ Basic LB / Basic public IP in production (deprecated Sep 2025)

---

## ✏️ Quick Self-Check

1. NSG priority order? ___
2. Subnet + NIC NSG, what wins? ___
3. ASG single VNet or across peering? ___
4. Azure Firewall rule order? ___
5. Front Door vs AGW, which is global? ___

---

➡️ [Module 9: Backup, Recovery & Migration](../Module-09-Backup-Recovery-Migration/Reading.md)
