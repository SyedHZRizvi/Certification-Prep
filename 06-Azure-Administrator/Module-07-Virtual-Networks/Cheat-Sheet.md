# 📋 Module 7 Cheat Sheet: Virtual Networks

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧱 Subnet Basics

- VNet = 1 region · subnet ⊆ VNet address space
- **5 IPs reserved per subnet** (`.0`, `.1`, `.2`, `.3`, `.255`)
- Reserved names (case-sensitive!):

| Subnet name | Min size | Used by |
|-------------|----------|---------|
| `GatewaySubnet` | /29 (use /27) | VPN/ER gateway |
| `AzureFirewallSubnet` | /26 | Azure Firewall |
| `AzureBastionSubnet` | /26 | Bastion |
| `RouteServerSubnet` | /27 | Route Server |

---

## 🔁 Peering

- ⚠️ **Non-transitive** (A↔B, B↔C ≠ A↔C)
- Cross-region = "Global VNet peering"
- Non-overlapping CIDRs required

Toggles to know:

- **Allow gateway transit** (on hub) + **Use remote gateways** (on spoke) = spokes use hub's gateway
- **Allow forwarded traffic** = let non-direct traffic in (NVA pattern)

---

## 🏛️ Hub-Spoke (THE pattern)

```
on-prem ─[VPN/ER]─► HUB (Firewall, Gateway, Bastion, DNS)
                    │
        peering ────┴──── peering
        ▼                     ▼
      Spoke A             Spoke B
```

UDRs on spokes: `0.0.0.0/0 → VirtualAppliance (Firewall private IP)`

---

## 🌍 Service vs Private Endpoint

| | Service endpoint | Private endpoint |
|---|------------------|------------------|
| What | Firewall toggle + backbone route | Real NIC + private IP |
| PaaS public IP | Still public | Optional, can disable |
| DNS | Public FQDN | Needs **Private DNS Zone** |
| Cost | Mostly free | Per-hour + data |

🔥 Private endpoint without Private DNS Zone = broken setup

---

## 🔌 Hybrid Connectivity Options

| Option | Use when |
|--------|----------|
| **P2S VPN** | Single dev/admin device |
| **S2S VPN (route-based, VpnGw2AZ+)** | Branch site → Azure |
| **ExpressRoute Standard** | Private circuit to ER region |
| **ExpressRoute Premium** | Global Reach + any region + higher limits |
| **ExpressRoute Direct** | 10/100 Gbps direct port, no provider |

VPN SKUs grade: Basic (avoid) → VpnGw1/2/3 → VpnGw1AZ/2AZ/3AZ (zone-redundant) → VpnGw4/5(+AZ)

---

## 🌐 Azure DNS

| Service | Purpose |
|---------|---------|
| Azure Public DNS | Public zones for your domain |
| Azure Private DNS | Internal zones, linked to VNets |
| **Azure DNS Private Resolver** | Hybrid DNS bridge (replaces forwarder VMs) |

---

## 🗺️ UDR Next-Hop Types

`VnetLocal`, `VirtualNetworkGateway`, `Internet`, **`VirtualAppliance`**, `None`

---

## 🏆 Exam Power Phrases

Often **correct**:

- ✅ "Hub-spoke with Azure Firewall in the hub"
- ✅ "Private endpoint + Private DNS Zone link"
- ✅ "Route-based VPN with VpnGw2AZ for zone redundancy"
- ✅ "UDR with VirtualAppliance next-hop"
- ✅ "ExpressRoute Premium for Global Reach"

Often **wrong**:

- ❌ "Peering is transitive"
- ❌ "Service endpoint = private IP"
- ❌ "Basic VPN supports BGP"
- ❌ "Same CIDR on peered VNets"
- ❌ "Private endpoint works without a Private DNS Zone"

---

## ⚠️ Anti-Patterns

- ❌ Public IPs on every VM (use Bastion)
- ❌ Peering meshes for >5 spokes (use Virtual WAN)
- ❌ Storage account with public access + no firewall
- ❌ Skipping the Private DNS Zone
- ❌ Mixing route-based and policy-based VPN

---

## ✏️ Quick Self-Check

1. 5 reserved IPs per subnet, name 'em? ___
2. Is peering transitive? Workaround? ___
3. SP vs PE, which gets a private IP? ___
4. Why does PE need a Private DNS Zone? ___
5. Route-based VS policy-based, pick which for BGP? ___

---

➡️ [Module 8: Network Security](../Module-08-Network-Security/Reading.md)
