# Module 7: Virtual Networks 🕸️

> **Why this module matters:** Networking is 15–20% of the AZ-104 exam, but it shows up *everywhere else* too — every VM, App Service, AKS cluster, and storage account scenario eventually hinges on a VNet decision. Master subnets, peering, endpoints, and gateways here and the next module (Network Security) clicks immediately.

---

## 🍕 A Story: The Airport That Designed Its Terminals First

Imagine you're building Denver International Airport from scratch. You wouldn't start by buying planes. You'd plan **terminals (subnets)**, **roads between them (peering)**, **secure jet bridges to specific gates (private endpoints)**, **a private corporate hangar wing connected back to HQ by a dedicated road (ExpressRoute)**, and **a public arrivals hall (Internet)** — all *before* anyone parks a single plane.

Azure VNets work the same way. You design the network topology *first*. Resources (VMs, AKS, App Service, etc.) get parked into subnets later. The exam tests whether you can pick the right "airport blueprint" for a scenario:

- A single building → one VNet
- Several buildings sharing a security gate → **hub-spoke** with a central firewall in the hub
- A private road to another airport in another country → **VPN gateway** or **ExpressRoute**
- A private gate from a tenant to a specific shop → **private endpoint**

Let's build it.

---

## 🧱 Virtual Network (VNet) Fundamentals

A **VNet** is a region-scoped slice of private IP space. You define:
- An **address space** (one or more CIDR blocks, e.g. `10.0.0.0/16`)
- A list of **subnets** inside that address space
- Optional DDoS protection, IPv6, DNS settings

Rules to memorize:
- A VNet lives in exactly **one region**.
- A subnet is a portion of the VNet address space (e.g. `10.0.1.0/24`).
- **Azure reserves 5 IPs per subnet** — `.0` (network), `.1` (default gateway), `.2`, `.3` (DNS), `.255` (broadcast).
- Default route inside a VNet sends *everything else* to "Internet" — change with a User-Defined Route (UDR).

### Create a VNet + 2 subnets

```bash
az network vnet create \
    --resource-group rg-net \
    --name vnet-prod-eus \
    --location eastus \
    --address-prefix 10.0.0.0/16 \
    --subnet-name snet-web \
    --subnet-prefix 10.0.1.0/24

az network vnet subnet create \
    --resource-group rg-net \
    --vnet-name vnet-prod-eus \
    --name snet-data \
    --address-prefix 10.0.2.0/24
```

### PowerShell — same thing

```powershell
$vnet = New-AzVirtualNetwork -ResourceGroupName rg-net -Name vnet-prod-eus `
    -Location eastus -AddressPrefix "10.0.0.0/16"

Add-AzVirtualNetworkSubnetConfig -Name snet-web `
    -AddressPrefix "10.0.1.0/24" -VirtualNetwork $vnet
Add-AzVirtualNetworkSubnetConfig -Name snet-data `
    -AddressPrefix "10.0.2.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork
```

### Reserved subnet names you'll bump into

| Name | Used by |
|------|---------|
| `GatewaySubnet` | VPN / ExpressRoute gateway (minimum /29, /27 recommended) |
| `AzureFirewallSubnet` | Azure Firewall (minimum /26) |
| `AzureBastionSubnet` | Azure Bastion (minimum /26) |
| `RouteServerSubnet` | Azure Route Server (minimum /27) |
| `AzureFirewallManagementSubnet` | Azure Firewall Basic SKU |

🔥 **MEMORIZE the names exactly.** They're case-sensitive and Azure won't accept variations.

---

## 🔁 VNet Peering

Connect two VNets so resources can talk over the Azure backbone via **private IPs** — without going through a gateway, the internet, or NAT.

| Property | Detail |
|----------|--------|
| Same region peering | Standard "VNet peering" |
| Cross-region peering | Global VNet peering (same thing, slightly different cost) |
| Latency | Microsoft backbone (low) |
| Throughput | Up to the VMs' NIC limits |
| Cross-tenant peering | ✅ Supported (requires peering from both sides) |
| Transitive? | ❌ **NOT transitive** — A↔B and B↔C doesn't mean A↔C |

🔥 **Non-transitive peering** is *the* big exam fact. To make A talk to C through B, you need a **hub** (B) with **Azure Firewall / NVA** + **User-Defined Routes (UDRs)** on A and C's subnets.

### Peering options (toggles)

| Toggle | Meaning |
|--------|---------|
| Allow virtual network access | Resources on the other side can reach this VNet (must be ON for any traffic) |
| Allow forwarded traffic | Allow non-direct traffic (e.g. from another peered VNet via NVA) |
| Allow gateway transit | This VNet shares its VPN/ER gateway with the peer |
| Use remote gateways | This VNet uses the peer's gateway for on-prem connectivity |

```bash
# Peer vnet-hub ↔ vnet-spoke-a
az network vnet peering create \
    --name peer-hub-to-spokea \
    --resource-group rg-net \
    --vnet-name vnet-hub \
    --remote-vnet vnet-spoke-a \
    --allow-vnet-access \
    --allow-forwarded-traffic \
    --allow-gateway-transit

az network vnet peering create \
    --name peer-spokea-to-hub \
    --resource-group rg-net \
    --vnet-name vnet-spoke-a \
    --remote-vnet vnet-hub \
    --allow-vnet-access \
    --allow-forwarded-traffic \
    --use-remote-gateways
```

---

## 🏛️ Hub-Spoke Topology (KNOW THIS PATTERN COLD)

The canonical enterprise design:

```
                    on-prem
                       │
                  [ExpressRoute or VPN]
                       │
            ┌──────────▼──────────┐
            │   HUB VNet          │
            │  • Azure Firewall   │
            │  • Bastion          │
            │  • DNS Forwarder    │
            │  • Gateway subnet   │
            └────┬──────┬─────────┘
                 │      │
        peering  │      │ peering
                 │      │
        ┌────────▼─┐  ┌─▼────────┐
        │ Spoke A  │  │ Spoke B  │
        │ (Web)    │  │ (Data)   │
        └──────────┘  └──────────┘
```

- **Hub** = shared services (firewall, gateway, DNS, Bastion)
- **Spokes** = workload VNets, peered to the hub
- Spokes do NOT peer to each other (non-transitive). Spoke-to-spoke traffic flows through the hub firewall via UDRs.

---

## 🌍 Service Endpoints

A way to "extend the VNet identity" to specific Azure PaaS services (Storage, SQL, Key Vault, etc.) — allowing those services to **firewall to specific subnets** without internet routing.

| Property | Detail |
|----------|--------|
| What changes | Traffic from the allowed subnet to the PaaS service routes via Microsoft backbone |
| Public IP? | The PaaS service still has a public IP — service endpoint just routes optimally |
| Cross-region? | The PaaS service can be in any region |
| Cross-tenant? | Yes — limited resources |

```bash
# Enable Microsoft.Storage service endpoint on a subnet
az network vnet subnet update \
    --resource-group rg-net \
    --vnet-name vnet-prod-eus \
    --name snet-data \
    --service-endpoints Microsoft.Storage Microsoft.KeyVault

# Then on the storage account: allow access from this subnet only
az storage account network-rule add \
    --resource-group rg-data \
    --account-name stcontosodata001 \
    --vnet-name vnet-prod-eus \
    --subnet snet-data
```

---

## 🔒 Private Endpoints (vs Service Endpoints)

A **private endpoint** is a NIC in your subnet with a **private IP** that fronts a PaaS resource. Different beast from a service endpoint.

| | Service Endpoint | Private Endpoint |
|---|-------------------|------------------|
| What it is | A firewall toggle + optimal routing | A real NIC with a private IP |
| PaaS public IP? | Still exists | Optional — can disable public access |
| DNS | Same FQDN, public DNS | FQDN resolves to **private IP** (via Private DNS Zone) |
| Cost | Mostly free | Per-hour per endpoint + data charges |
| Use when | Lock down a PaaS service to a subnet | Fully private, no public exposure |

### Set up a private endpoint for a storage account (blob)

```bash
# Create the private endpoint NIC
az network private-endpoint create \
    --name pe-st-blob \
    --resource-group rg-net \
    --vnet-name vnet-prod-eus \
    --subnet snet-data \
    --private-connection-resource-id $(az storage account show -g rg-data -n stcontosodata001 --query id -o tsv) \
    --group-id blob \
    --connection-name conn-blob

# Create the Private DNS Zone (required so the FQDN resolves to private IP)
az network private-dns zone create \
    --resource-group rg-net \
    --name privatelink.blob.core.windows.net

# Link DNS zone to your VNet
az network private-dns link vnet create \
    --resource-group rg-net \
    --zone-name privatelink.blob.core.windows.net \
    --name link-vnet \
    --virtual-network vnet-prod-eus \
    --registration-enabled false

# Auto-register the PE's IP in the zone
az network private-endpoint dns-zone-group create \
    --resource-group rg-net \
    --endpoint-name pe-st-blob \
    --name default \
    --private-dns-zone privatelink.blob.core.windows.net \
    --zone-name blob
```

🔥 **The Private DNS Zone step is the most-skipped one — and the most-broken on the exam.** Without it, the FQDN keeps resolving to the public IP.

---

## 🔌 Connecting On-Prem to Azure

Three options, in increasing cost and reliability:

### 1. Point-to-Site (P2S) VPN

A single PC dials in via a VPN client. Used by individual admins / devs.

| Auth options | Native Azure cert, RADIUS, Entra ID (OpenVPN protocol) |
| Throughput | ~100 Mbps aggregate |

### 2. Site-to-Site (S2S) VPN

A whole branch office (with an on-prem VPN appliance) tunnels to Azure over the public internet via IPsec/IKE.

```
On-prem firewall ─── IPsec tunnel over Internet ─── Azure VPN Gateway
```

### VPN Gateway SKUs (memorize the column on the right)

| SKU | Tunnel BW | Type | Notes |
|-----|-----------|------|-------|
| Basic | 100 Mbps | Legacy | No BGP, no AZs, no Basic IP on Standard LB → being deprecated |
| VpnGw1 / 2 / 3 | 650 Mbps → 1.25 Gbps → 1.25 Gbps | Route-based | BGP, multi-tunnel, **active-active** |
| VpnGw1AZ / 2AZ / 3AZ | Same | Zone-redundant | Preferred for prod |
| VpnGw4 / 5 (+ AZ) | up to 10 Gbps | Modern | Highest throughput |

🔥 **Route-based** = supports IKEv2 + BGP + multiple connections. **Policy-based** = legacy, single tunnel, no BGP. Always prefer route-based.

### 3. ExpressRoute

A **private, dedicated** circuit between on-prem and Microsoft via a connectivity provider (e.g. Equinix, Megaport). Traffic does **not traverse the public internet**.

| Feature | Detail |
|---------|--------|
| Bandwidth | 50 Mbps → 100 Gbps |
| Peering types | Private (your VNets) · Microsoft (M365, Office, etc.) — public peering deprecated |
| SKU tiers | Local · Standard · Premium |
| Local | Only the local metro region (cheap) |
| Standard | Geopolitical region |
| Premium | **Global reach** (any region in the ER global network) |
| Resiliency | Two physical circuits in different POPs (recommended) |
| **FastPath** | Bypass gateway for ultra-low latency (premium+ feature in newer SKUs) |
| ExpressRoute Global Reach | Connect two on-prem sites *through Microsoft's backbone* via two ER circuits |
| ExpressRoute Direct | 10/100 Gbps direct port at a Microsoft edge — no provider |

### Site-to-Site + ExpressRoute together

Best practice: **ExpressRoute as primary**, **S2S VPN as backup**. With BGP failover, traffic seamlessly shifts.

---

## 🌐 Public IP Addresses

| SKU | Notes |
|-----|-------|
| **Basic** | Legacy. Static or dynamic. Not zone-redundant. Being retired Sep 2025. |
| **Standard** | Recommended. Always static. Supports AZs (zonal or zone-redundant). |

Allocation: **Static** (preferred for prod — IP doesn't change) vs **Dynamic** (Basic only).

---

## 🗺️ User-Defined Routes (UDRs)

By default, Azure auto-populates a subnet's route table with "system routes" — direct paths to other subnets in the VNet, the internet, etc. To **override** behavior (e.g. force traffic through a firewall), you create a **route table** with UDRs and associate it with a subnet.

```bash
# Force all internet-bound traffic from the spoke through the hub firewall
az network route-table create -g rg-net -n rt-spoke-to-firewall

az network route-table route create \
    --resource-group rg-net \
    --route-table-name rt-spoke-to-firewall \
    --name to-firewall \
    --address-prefix 0.0.0.0/0 \
    --next-hop-type VirtualAppliance \
    --next-hop-ip-address 10.10.0.4   # Azure Firewall private IP

az network vnet subnet update \
    --resource-group rg-net \
    --vnet-name vnet-spoke-a \
    --name snet-web \
    --route-table rt-spoke-to-firewall
```

Next-hop types: `VnetLocal`, `VirtualNetworkGateway`, `Internet`, `VirtualAppliance`, `None`.

---

## 🌐 Azure DNS (Public + Private)

| Service | Use |
|---------|-----|
| **Azure Public DNS** | Host public DNS zones for your registered domain (`contoso.com`) |
| **Azure Private DNS** | Host internal zones resolved only from linked VNets (`corp.contoso.internal`) |
| **DNS Private Resolver** | Forward DNS between on-prem and Azure (replaces DNS forwarder VMs) |

```bash
# Public zone
az network dns zone create -g rg-net -n contoso.com
az network dns record-set a add-record -g rg-net -z contoso.com \
    --record-set-name www --ipv4-address 20.x.x.x

# Private zone
az network private-dns zone create -g rg-net -n corp.contoso.internal
az network private-dns link vnet create -g rg-net \
    -z corp.contoso.internal -n link-prod -v vnet-prod-eus \
    -e false   # disable autoregistration; true would register VMs
```

---

## 🧪 Task-Sequencing Practice: Build a Hub-Spoke With On-Prem Connectivity

**Order these steps:**

1. ✅ Create the **hub VNet** with subnets: `GatewaySubnet`, `AzureFirewallSubnet`, `AzureBastionSubnet`.
2. ✅ Create a **VPN gateway** (or ExpressRoute gateway) in the `GatewaySubnet`.
3. ✅ Create the **Azure Firewall** in the `AzureFirewallSubnet`.
4. ✅ Create **Spoke A** (web) and **Spoke B** (data) VNets in non-overlapping CIDRs.
5. ✅ **Peer** Hub ↔ Spoke A and Hub ↔ Spoke B with `--allow-gateway-transit` (hub) and `--use-remote-gateways` (spokes).
6. ✅ Create **route tables** on spoke subnets to force `0.0.0.0/0` → Azure Firewall private IP.
7. ✅ Create a **Site-to-Site VPN connection** to on-prem.
8. ✅ Configure **NSGs** on spoke subnets (Module 8).
9. ✅ Set up **Private DNS Resolver** for hybrid name resolution.

⚠️ Skipping step 6 = spokes bypass the firewall. Auditors will find this in 5 minutes.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Peering is transitive" | ❌ Not transitive. Need a hub firewall/NVA + UDRs. |
| "Service endpoint = private IP" | ❌ Still public IP, just optimal routing |
| "Private endpoint works without Private DNS Zone" | ❌ FQDN won't resolve to private IP |
| "Basic VPN supports BGP" | ❌ Route-based VpnGw1+ only |
| "ExpressRoute traffic goes over the internet" | ❌ Private circuit via provider |
| "Address spaces can overlap between peered VNets" | ❌ Must be non-overlapping |
| "I can shrink a subnet by 1 IP after deployment" | ❌ Limited — easiest to plan ahead |
| "Azure reserves 3 IPs per subnet" | ❌ Reserves 5 |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **VNet** | A region-scoped private address space |
| **Subnet** | A CIDR slice of a VNet |
| **Reserved IPs** | Azure reserves 5 per subnet |
| **Peering** | Direct backbone connection between VNets (non-transitive) |
| **Gateway transit** | Sharing a hub's VPN/ER gateway with peered spokes |
| **Service endpoint** | Subnet-aware firewall toggle for PaaS, still public IP |
| **Private endpoint** | Real NIC + private IP for PaaS, requires Private DNS Zone |
| **VPN Gateway** | P2S/S2S endpoint in `GatewaySubnet` |
| **Route-based vs Policy-based VPN** | Modern (BGP, IKEv2) vs legacy (single tunnel) |
| **ExpressRoute** | Private dedicated circuit via provider |
| **ER Global Reach** | Connect two on-prem sites through Microsoft backbone |
| **UDR** | User-Defined Route — custom next-hop overrides |
| **Private DNS Zone** | Internal-only DNS, linked to VNets |
| **DNS Private Resolver** | Managed conditional forwarder for hybrid DNS |

---

## ✅ Module 7 Summary

You now know:
- 🧱 VNet + subnet CIDR rules and the 5 reserved IPs
- 🔁 Peering mechanics + non-transitivity
- 🏛️ The hub-spoke topology and why it's THE pattern
- 🌍 Service endpoints vs private endpoints (huge exam topic)
- 🔌 P2S vs S2S vs ExpressRoute connectivity options
- 📡 VPN Gateway SKU ladder and route-based vs policy-based
- 🛤️ ExpressRoute tiers (Local / Standard / Premium) + Global Reach + Direct
- 🗺️ UDRs to override default routing through firewalls
- 🌐 Azure DNS public, private, and resolver

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 8: Network Security](../Module-08-Network-Security/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [VNet overview](https://learn.microsoft.com/azure/virtual-network/virtual-networks-overview)
- 📖 [Hub-spoke reference architecture](https://learn.microsoft.com/azure/architecture/networking/architecture/hub-spoke)
- 📖 [VPN Gateway SKUs](https://learn.microsoft.com/azure/vpn-gateway/vpn-gateway-about-vpngateways)
- 📖 [ExpressRoute SKUs](https://learn.microsoft.com/azure/expressroute/expressroute-faqs)
- 📖 [Private endpoints overview](https://learn.microsoft.com/azure/private-link/private-endpoint-overview)
