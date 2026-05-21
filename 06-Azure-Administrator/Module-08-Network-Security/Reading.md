# Module 8: Network Security 🛡️

> **Why this module matters:** Networking sets up the highways; this module is about the toll booths, guard posts, and traffic cops. NSG rule precedence is the most common AZ-104 trick question. Load Balancer vs App Gateway vs Front Door is the most common Yes/No grouping. Master both and you'll pick up easy points.

---

## 🍕 A Story: The Mall With Five Different Security Layers

Picture a shopping mall on Black Friday. The crowd is enormous. Security is layered:

1. **At the parking lot entrance**: a guard waves through cars by license plate (allow/deny by source IP — that's an **NSG**).
2. **At a private back door for delivery trucks**: a manifest check by trusted vendor (an **Application Security Group** — same role, friendlier model).
3. **At the main mall doors**: a security team scans bags for weapons and inspects suspicious packages with a deeper sniff (an **Azure Firewall**).
4. **Outside a flagship boutique that sells $50K watches**: extra biometric verification, with a web-app-aware filter that checks for fake-receipt scams (**Application Gateway with WAF**).
5. **For the global website that drives all online customers in**: a worldwide CDN-style routing layer that picks the fastest mall to send them to and dodges DDoS waves (**Azure Front Door**).

Different layers solve different problems. Pick one and call it secure → fail. Stack them in the right order → real defense in depth.

---

## 🛡️ Network Security Groups (NSGs)

A **stateful** layer-4 firewall that filters traffic based on **5-tuple** (source, source port, destination, destination port, protocol).

| Property | Detail |
|----------|--------|
| Layer | L3/L4 (no payload inspection) |
| Statefulness | Stateful (return traffic auto-allowed) |
| Scope | Applied to a **subnet** AND/OR a **NIC** (both get evaluated) |
| Default rules | 3 inbound + 3 outbound, low priority |
| Custom rule priorities | 100–4096 (lower = higher priority) |
| Max rules per NSG | 1,000 |

### Default rules (memorize)

**Inbound:**
| Priority | Name | Source | Dest | Allow/Deny |
|----------|------|--------|------|------------|
| 65000 | AllowVnetInBound | VirtualNetwork | VirtualNetwork | Allow |
| 65001 | AllowAzureLoadBalancerInBound | AzureLoadBalancer | Any | Allow |
| 65500 | DenyAllInBound | Any | Any | **Deny** |

**Outbound:**
| Priority | Name | Source | Dest | Allow/Deny |
|----------|------|--------|------|------------|
| 65000 | AllowVnetOutBound | VirtualNetwork | VirtualNetwork | Allow |
| 65001 | AllowInternetOutBound | Any | Internet | Allow |
| 65500 | DenyAllOutBound | Any | Any | **Deny** |

🔥 **MEMORIZE:** lower priority number = evaluated **first**. **First match wins.** There's no "implicit allow on top" — only the 6 defaults at the bottom.

### Effective security rules

When a NIC's subnet has an NSG **AND** the NIC itself has an NSG, both apply:
- **Inbound** evaluation order: subnet-level NSG → NIC-level NSG (both must allow)
- **Outbound** evaluation order: NIC-level NSG → subnet-level NSG (both must allow)

🔥 **A deny in EITHER NSG drops the packet.** The "first match wins" still applies *within* each NSG.

### Create an NSG + rule via CLI

```bash
az network nsg create \
    --resource-group rg-net \
    --name nsg-web \
    --location eastus

az network nsg rule create \
    --resource-group rg-net \
    --nsg-name nsg-web \
    --name AllowHttps \
    --priority 100 \
    --source-address-prefixes Internet \
    --destination-port-ranges 443 \
    --access Allow --protocol Tcp \
    --direction Inbound

az network vnet subnet update \
    --resource-group rg-net \
    --vnet-name vnet-prod-eus \
    --name snet-web \
    --network-security-group nsg-web
```

### Service Tags (use these instead of hardcoded IPs!)

| Tag | Resolves to |
|-----|-------------|
| `Internet` | All public IPs |
| `VirtualNetwork` | All VNet space + peered VNets + on-prem |
| `AzureLoadBalancer` | Azure LB health probe source |
| `Storage` | All Azure Storage IPs (regional suffix available) |
| `Sql.EastUS` | Azure SQL endpoints in East US |
| `AppService` | App Service IPs |
| `AzureCloud` | All Azure datacenter IPs |

---

## 🏷️ Application Security Groups (ASGs)

A logical tag you attach to NICs. Then your NSG rule says "allow from ASG `web-tier` to ASG `app-tier` on port 8080" — no IP addresses needed.

```bash
# Create ASGs
az network asg create -g rg-net -n asg-web -l eastus
az network asg create -g rg-net -n asg-app -l eastus

# Tag VM NICs with ASGs
az network nic update --resource-group rg-app --name vm-web01-nic \
    --remove ipConfigurations[0].applicationSecurityGroups
# (Or attach via the portal NIC blade; CLI is verbose for this.)

# Use the ASG in an NSG rule
az network nsg rule create \
    --resource-group rg-net \
    --nsg-name nsg-app-tier \
    --name AllowFromWeb \
    --priority 200 \
    --source-asgs asg-web \
    --destination-asgs asg-app \
    --destination-port-ranges 8080 \
    --access Allow --protocol Tcp \
    --direction Inbound
```

🔥 ASGs only work **within a single VNet** — they don't cross peering boundaries.

---

## 🔥 Azure Firewall

A **stateful, fully managed, L3–L7** firewall-as-a-service. Lives in `AzureFirewallSubnet`. Three SKUs:

| SKU | Use case | Features |
|-----|----------|----------|
| **Basic** | SMB / dev | L3/L4 filtering, ~250 Mbps; lightweight |
| **Standard** | Most prod | + Threat intelligence, FQDN tags, web categories, DNAT, ~30 Gbps |
| **Premium** | Regulated | + TLS inspection, IDPS, URL filtering, Web categories with TLS |

### Rule types (stack in order)

1. **DNAT rules** — translate public IP:port to a private internal target (e.g., publish a VM)
2. **Network rules** — L3/L4 allow/deny by IP/port/protocol
3. **Application rules** — L7 allow by FQDN (e.g., `*.contoso.com`) or FQDN tag

🔥 **Rule processing order:** DNAT → Network → Application (within the same priority). Higher priority rule collections win across the board.

### Firewall Policy (recommended)

Reusable rule definitions you can apply to multiple firewalls. Replaces "classic" inline rules.

```bash
az network firewall create \
    --resource-group rg-net \
    --name afw-hub \
    --location eastus \
    --sku AZFW_VNet \
    --tier Standard

# Place in AzureFirewallSubnet via IP config
az network firewall ip-config create \
    --firewall-name afw-hub \
    --resource-group rg-net \
    --name afw-config \
    --public-ip-address pip-afw \
    --vnet-name vnet-hub
```

---

## 🚪 Load Balancer (L4)

A **layer-4** distributor for TCP/UDP traffic. Two SKUs:

| | Basic | Standard |
|---|-------|----------|
| Backend pool | Single AZ | Up to **1000** instances |
| AZ support | ❌ | ✅ (zonal or zone-redundant) |
| SLA | No SLA | 99.99% (with min 2 instances) |
| Outbound rules | No | Yes |
| Required for VMSS Flex | ❌ | ✅ |
| Security model | Open by default | **Secure by default — needs explicit NSG rule** |

🔥 **Basic Load Balancer is being deprecated Sep 2025.** Always pick Standard now.

### Internal vs Public

| Public LB | Internal (ILB) |
|-----------|----------------|
| Frontend = public IP | Frontend = private IP |
| Use to publish a public service | Use for internal app tiers (web → app) |

### Components

- **Frontend IP** — the LB's listening IP
- **Backend pool** — VMs / VMSS instances
- **Health probe** — TCP / HTTP / HTTPS check
- **Load balancing rule** — frontend port → backend port
- **Inbound NAT rule** — single-VM port forward (e.g., specific RDP per VM)
- **Outbound rule** — define SNAT behavior for backend pool's egress

```bash
az network lb create \
    --resource-group rg-net \
    --name lb-web-public \
    --sku Standard \
    --location eastus \
    --frontend-ip-name fe-public \
    --backend-pool-name be-web \
    --public-ip-address pip-lb \
    --public-ip-zone 1 2 3
```

---

## 🚪 Application Gateway (L7)

A **layer-7** (HTTP/HTTPS) load balancer with WAF, URL-based routing, SSL termination, cookie affinity, autoscale.

| Tier | What it adds |
|------|--------------|
| **Standard v2** | Autoscale, zone redundancy, static VIP |
| **WAF v2** | Standard v2 + Web Application Firewall (OWASP rule sets) |

Features that aren't in plain Load Balancer:
- **URL path-based routing** (`/api/*` → backend pool A, `/images/*` → backend pool B)
- **Multi-site routing** (one AGW serving multiple host headers)
- **End-to-end TLS** or TLS termination at the gateway
- **Cookie-based session affinity**
- **HTTP/2** support
- **WAF rules** — OWASP CRS, bot protection, geo-blocking

### Backend pool types

VMs / VMSS / IP addresses / FQDNs / App Service.

### AGW lives in its OWN subnet

```bash
az network vnet subnet create \
    --resource-group rg-net --vnet-name vnet-hub \
    --name snet-agw --address-prefix 10.10.6.0/24

az network application-gateway create \
    --resource-group rg-net \
    --name agw-web \
    --location eastus \
    --sku WAF_v2 \
    --capacity 2 \
    --vnet-name vnet-hub --subnet snet-agw \
    --public-ip-address pip-agw \
    --priority 100
```

---

## 🌍 Azure Front Door

**Global, layer-7, edge-based** load balancer + CDN + WAF. Think Microsoft's CloudFront.

| Feature | Detail |
|---------|--------|
| Anycast frontend | Single global IP, traffic enters at nearest Microsoft POP |
| Routing | Latency-based, weighted, priority, session affinity |
| Caching | Built-in CDN for static content |
| WAF | Same engine as App Gateway, but evaluated at the edge |
| TLS | Free managed certs, TLS 1.2/1.3 |
| Private link origins | Backend can be a private endpoint in a VNet |

### SKUs

| SKU | Use |
|-----|-----|
| **Standard** | CDN + static content + L7 routing |
| **Premium** | + Private origins + Microsoft Defender threat intel + advanced WAF |

🔥 **Front Door vs Traffic Manager vs Cross-region LB** — exam favorite:

| Service | Layer | Routing |
|---------|-------|---------|
| **Front Door** | L7 (HTTP/HTTPS) | Edge routing, caching, WAF |
| **Traffic Manager** | DNS-only | Client uses returned IP — no proxy |
| **Cross-region Load Balancer** | L4 global | Routes TCP/UDP globally |

---

## 🌐 Public DNS Zones (already covered in M7 — bonus security angle)

DNSSEC and Azure Public DNS now in preview/GA depending on region. For most AZ-104 questions, just remember:
- Public DNS zone = `contoso.com` records resolvable from the internet
- Private DNS zone = `*.privatelink.blob.core.windows.net` etc. internal-only

---

## 🛡️ DDoS Protection

| Plan | Detail |
|------|--------|
| **DDoS Network Protection** (formerly Standard) | Enabled per-VNet, $$$/month + per-IP, advanced telemetry + rapid response support |
| **Basic** (default) | Free, automatically protects Azure infrastructure |
| **DDoS IP Protection** | Per-public-IP plan (newer, cheaper) |

---

## 🧪 Task-Sequencing Practice: Secure a Public Web App

**Order these steps** to expose an internal web app safely with WAF, DDoS, and inspection.

1. ✅ Deploy the web app on App Service Premium v3 with a **private endpoint** in your VNet.
2. ✅ Create **Azure Front Door Premium** with a **Private Link origin** pointing to the App Service.
3. ✅ Enable **WAF policy** (OWASP CRS) on Front Door with at least **Detection mode** first.
4. ✅ Enable **DDoS Network Protection** on the VNet hosting the private endpoint.
5. ✅ Apply a **Conditional Access policy** for admin access to the App Service portal.
6. ✅ Configure **Diagnostic Settings** on Front Door + App Service to ship to Log Analytics.
7. ✅ Monitor WAF logs for false positives; switch the WAF to **Prevention mode** after tuning.

⚠️ Skipping step 7 (going straight to Prevention) blocks real users. Always observe first.

---

## 🆚 The Big Comparison (KNOW COLD)

| Need | Use |
|------|-----|
| L4 distribute traffic in a region | **Standard Load Balancer** |
| L4 distribute traffic across regions | **Cross-region Load Balancer** |
| L7 HTTP routing + WAF in a region | **Application Gateway WAF v2** |
| Global edge routing + CDN + WAF | **Azure Front Door** |
| DNS-based traffic steering | **Traffic Manager** |
| Stateful L3–L7 firewall in hub | **Azure Firewall** |
| Subnet-level / NIC-level micro-segmentation | **NSG (+ ASG)** |
| DDoS protection for high-value apps | **DDoS Network Protection** |

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "NSG is stateless" | ❌ Stateful — return traffic auto-allowed |
| "Higher priority number wins" | ❌ Lower number wins (100 > 200) |
| "First-rule-in-list wins" | ❌ Lowest priority among matching wins |
| "ASG works across peered VNets" | ❌ Single VNet only |
| "Azure Firewall is L7 only" | ❌ L3–L7; rule order is DNAT → Network → Application |
| "Basic LB has 99.99% SLA" | ❌ No SLA on Basic; Standard has 99.99% |
| "Front Door is L4" | ❌ L7 (HTTPS) only |
| "Traffic Manager proxies traffic" | ❌ DNS-only; clients connect direct to returned IP |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **NSG** | L3/L4 stateful firewall, subnet+NIC scoped |
| **Service Tag** | Symbolic name for Azure service IP ranges |
| **ASG** | Logical tag for NICs, used in NSG rules |
| **Priority (NSG)** | Lower number = evaluated first |
| **Default rules** | 65000/65001/65500 in & out |
| **Azure Firewall** | Managed L3–L7 stateful firewall |
| **DNAT rule** | Inbound port-forward to internal IP |
| **Application rule** | L7 allow by FQDN/tag |
| **Standard Load Balancer** | L4, zonal/zone-redundant, secure-by-default |
| **Internal LB (ILB)** | LB with private frontend |
| **Application Gateway WAF v2** | L7 + WAF + URL routing |
| **Front Door** | Global L7 edge + CDN + WAF |
| **Traffic Manager** | DNS-based global routing |
| **WAF policy** | OWASP CRS rule set, custom rules, bot protection |
| **DDoS Network Protection** | Per-VNet DDoS plan |
| **Private Link origin** | Front Door backend reachable via private endpoint |

---

## ✅ Module 8 Summary

You now know:
- 🛡️ NSG mechanics: stateful, priority order, default rules, subnet vs NIC
- 🏷️ ASGs for IP-free segmentation within a VNet
- 🔥 Azure Firewall SKUs + the DNAT/Network/Application rule order
- 🚪 Standard LB vs Application Gateway vs Front Door — when each wins
- 🌍 Front Door + Private Link origins (modern secure pattern)
- 🛡️ DDoS Protection tiers
- ⚠️ The 8 common traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 9: Backup, Recovery & Migration](../Module-09-Backup-Recovery-Migration/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [NSG overview](https://learn.microsoft.com/azure/virtual-network/network-security-groups-overview)
- 📖 [Azure Firewall features](https://learn.microsoft.com/azure/firewall/features)
- 📖 [Application Gateway overview](https://learn.microsoft.com/azure/application-gateway/overview)
- 📖 [Azure Front Door overview](https://learn.microsoft.com/azure/frontdoor/front-door-overview)
- 📖 [Load Balancer SKUs](https://learn.microsoft.com/azure/load-balancer/skus)
