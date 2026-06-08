# ✏️ Module 7 Quiz: Virtual Networks

> **Instructions:** Answer all 27 questions WITHOUT looking at the reading. Aim for 23/27 minimum.

---

## Questions

### Q1. Azure reserves how many IP addresses per subnet? *(Remember)*
A. 2
B. 3
C. 5
D. 7

---

### Q2. The reserved subnet name for a VPN/ER gateway is: *(Remember)*
A. VpnGatewaySubnet
B. GatewaySubnet
C. AzureGatewaySubnet
D. VnetGatewaySubnet

---

### Q3. VNet peering is: *(Understand)*
A. Transitive, A↔B and B↔C implies A↔C
B. Non-transitive, to make A↔C work via B, you need a hub firewall/NVA + UDRs
C. Always cross-region
D. Limited to one peering per VNet

---

### Q4. Service endpoint: *(Understand)*
A. Gives the PaaS service a private IP in your subnet
B. Allows a subnet's traffic to PaaS over the Microsoft backbone but the PaaS still has a public IP
C. Requires a Private DNS Zone
D. Disables public access to the PaaS

---

### Q5. Private endpoint: *(Understand)*
A. Creates a NIC with a private IP inside your subnet that fronts a PaaS service
B. Is a firewall toggle only
C. Disables RBAC
D. Removes the need for NSGs

---

### Q6. A private endpoint to a storage account does NOT resolve to the private IP unless: *(Analyze)*
A. Public network access is disabled
B. The corresponding Private DNS Zone is created AND linked to the VNet AND auto-registration is configured for the PE
C. The storage account is GRS
D. The subnet is `/24` or larger

---

### Q7. **Order these steps** to create a working private endpoint for a storage account's blob service. *(Create)*

1. Create a Private DNS Zone (e.g. `privatelink.blob.core.windows.net`)
2. Link the DNS zone to your VNet
3. Create the private endpoint NIC referencing the storage account's `blob` group ID
4. Create a DNS zone group to auto-register the PE's IP into the zone

A. 1 → 2 → 3 → 4
B. 3 → 1 → 2 → 4
C. 1 → 3 → 2 → 4
D. 1 → 2 → 3 → 4 (NIC then DNS group)

---

### Q8. ExpressRoute traffic goes over: *(Remember)*
A. The public internet
B. A private, dedicated circuit via a connectivity provider
C. A Microsoft-only fiber to your office
D. A VPN tunnel

---

### Q9. To connect two on-prem sites THROUGH the Microsoft backbone via two separate ExpressRoute circuits, you use: *(Apply)*
A. ExpressRoute Local
B. ExpressRoute Premium with Global Reach
C. Site-to-Site VPN
D. Virtual WAN

---

### Q10. Route-based VPN supports BGP and multiple tunnels; policy-based does not. To support modern hybrid connectivity, you should pick: *(Apply)*
A. Policy-based, Basic SKU
B. Route-based, VpnGw2 or higher
C. Either, same features
D. ExpressRoute Local

---

### Q11. Yes/No, VPN gateways. *(Evaluate)*

**S1:** A `Basic` VPN gateway supports BGP.
**S2:** A `VpnGw1AZ` is zone-redundant.
**S3:** A `GatewaySubnet` smaller than `/29` is allowed.

A. No / Yes / No
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / No / No

---

### Q12. To FORCE all internet-bound traffic from a spoke through a central Azure Firewall, you must: *(Apply)*
A. Disable the Internet service tag
B. Create a UDR with `0.0.0.0/0 → VirtualAppliance (firewall private IP)` and associate it with the spoke subnet
C. Use a Standard Load Balancer
D. Enable forwarded traffic on the peering

---

### Q13. Yes/No, Peering settings. *(Evaluate)*

**S1:** "Allow gateway transit" must be ON on the hub side to share its gateway with a spoke.
**S2:** "Use remote gateways" should be ON on the spoke side to use the hub's gateway.
**S3:** Both VNets must have non-overlapping CIDRs.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q14. Which next-hop type would you NOT see in a route table? *(Remember)*
A. VirtualNetworkGateway
B. VirtualAppliance
C. Internet
D. Tenant

---

### Q15. The MINIMUM size for `AzureFirewallSubnet` is: *(Remember)*
A. /26
B. /27
C. /28
D. /29

---

### Q16. Yes/No, Private DNS. *(Evaluate)*

**S1:** A Private DNS Zone is linked to one or more VNets.
**S2:** Auto-registration in a Private DNS Zone lets VMs in linked VNets self-register their DNS records.
**S3:** Azure Private Resolver replaces the need for custom DNS forwarder VMs.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q17. Standard SKU public IPs are required for: *(Understand)*
A. Standard Load Balancer frontend
B. Availability Zones for the IP
C. Basic VPN gateway only
D. A and B

---

### Q18. ExpressRoute Premium gives you: *(Understand)*
A. Higher throughput than Standard
B. Global Reach + connectivity to *any* Microsoft region from your circuit, plus higher route limits
C. Free outbound data
D. Replaces VPN gateway

---

### Q19. The maximum number of address spaces a VNet can have: *(Remember)*
A. 1
B. 5
C. Hundreds (no practical limit beyond service caps)
D. Determined by subscription tier

---

### Q20. Cross-region peering (Global VNet peering) typically: *(Understand)*
A. Goes over the public internet
B. Uses the Microsoft global backbone with low latency
C. Requires ExpressRoute
D. Requires a VPN gateway

---

### Q21. Which is TRUE about overlapping CIDR ranges? *(Understand)*
A. Peered VNets can have overlapping CIDRs
B. Peered VNets must have non-overlapping CIDRs
C. Only NAT prevents conflicts
D. Overlap is automatically rewritten

---

### Q22. To allow an Azure SQL Database to be reachable from only one subnet (and route via the Microsoft backbone) with the SQL still having a public IP use: *(Apply)*
A. Private endpoint
B. Service endpoint
C. NSG only
D. Azure Firewall

---

### Q23. **Order these steps** to peer two VNets with hub-spoke and use the hub's gateway. *(Create)*

1. Create hub-to-spoke peering with `--allow-gateway-transit`
2. Create spoke-to-hub peering with `--use-remote-gateways`
3. Verify VNet peering status = Connected
4. Test connectivity (e.g., ping a VM)

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 1 → 3 → 2 → 4
D. 2 → 3 → 1 → 4

---

### Q24. A Point-to-Site VPN connects: *(Remember)*
A. Two whole on-prem offices
B. A single client device (PC, Mac) to Azure
C. Two Azure VNets
D. Two regions

---

### Q25. Which is FALSE about Azure DNS? *(Analyze)*
A. Azure Public DNS hosts your public zone for `contoso.com`
B. Private DNS zones are resolved only inside linked VNets
C. Azure DNS Private Resolver bridges on-prem and Azure DNS without VMs
D. Private DNS Zones can be linked to only one VNet

---

### Q26. Yes/No, Subnet basics. *(Understand)*

**S1:** A subnet must be entirely within the VNet's address space.
**S2:** You can resize an existing subnet if no NICs are attached.
**S3:** Each subnet can have its own NSG and route table.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q27. To deploy Azure Bastion in a VNet, the subnet: *(Remember)*
A. Can be any subnet
B. Must be named `AzureBastionSubnet` and be at least `/26`
C. Must be `/24`
D. Must be in `AzureFirewallSubnet`

---

## 🎯 Answers + Explanations

### Q1: **C. 5**
`.0` network, `.1` default gateway, `.2`/`.3` DNS, `.255` broadcast.

### Q2: **B. GatewaySubnet**
Case-sensitive, exact spelling. Same for `AzureFirewallSubnet`, `AzureBastionSubnet`.

### Q3: **B. Non-transitive**
The #1 networking fact on AZ-104. Need a hub firewall + UDRs to transit.

### Q4: **B. Allows a subnet's traffic to PaaS over the Microsoft backbone but the PaaS still has a public IP**
Service endpoints are a routing + firewall optimization, not a private IP.

### Q5: **A. Creates a NIC with a private IP inside your subnet that fronts a PaaS service**
Real NIC, real private IP. Different model than service endpoint.

### Q6: **B. The corresponding Private DNS Zone is created AND linked to the VNet AND auto-registration is configured for the PE**
The classic skipped step. Without DNS, the FQDN keeps resolving public.

### Q7: **A. 1 → 2 → 3 → 4**
Build DNS zone → link to VNet → create PE → wire up DNS zone group for auto-registration.

### Q8: **B. A private, dedicated circuit via a connectivity provider**
ExpressRoute = private. Never traverses the public internet.

### Q9: **B. ExpressRoute Premium with Global Reach**
Global Reach connects two ER circuits through MS backbone, site-to-site via Microsoft.

### Q10: **B. Route-based, VpnGw2 or higher**
Always pick route-based for modern hybrid; pick a SKU that meets your BW + zone-redundancy needs.

### Q11: **A. No / Yes / No**
Basic doesn't support BGP. VpnGwXAZ SKUs are zone-redundant. `GatewaySubnet` must be at least `/29` (recommended `/27`).

### Q12: **B. Create a UDR with `0.0.0.0/0 → VirtualAppliance (firewall private IP)` and associate it with the spoke subnet**
Classic forced tunneling pattern.

### Q13: **A. Yes / Yes / Yes**
All three statements are true for hub-spoke peering with gateway sharing.

### Q14: **D. Tenant**
Valid next-hop types: VnetLocal, VirtualNetworkGateway, Internet, VirtualAppliance, None. "Tenant" isn't a thing.

### Q15: **A. /26**
Azure Firewall needs at least 64 IPs. (Bastion = /26 too.)

### Q16: **A. Yes / Yes / Yes**
All correct. Auto-registration is per-link toggle.

### Q17: **D. A and B**
Standard LB requires Standard public IP. Standard public IP supports AZs.

### Q18: **B. Global Reach + connectivity to *any* Microsoft region from your circuit, plus higher route limits**
Premium upgrades reach + route counts. Throughput depends on the underlying bandwidth tier you purchase.

### Q19: **C. Hundreds (no practical limit beyond service caps)**
A VNet can have many address ranges, IPv4 + IPv6.

### Q20: **B. Uses the Microsoft global backbone with low latency**
Global peering still uses the backbone, just with different pricing.

### Q21: **B. Peered VNets must have non-overlapping CIDRs**
Overlap causes peering to fail.

### Q22: **B. Service endpoint**
Service endpoint = lock down PaaS to a subnet. Private endpoint would give private IP (more secure but more cost/complexity).

### Q23: **A. 1 → 2 → 3 → 4**
Both peerings (one in each direction). Verify "Connected" status. Then test.

### Q24: **B. A single client device (PC, Mac) to Azure**
P2S = per-device. S2S = whole site.

### Q25: **D. Private DNS Zones can be linked to only one VNet**
False. A Private DNS Zone can be linked to many VNets (across regions/subscriptions).

### Q26: **A. Yes / Yes / Yes**
All true. Resize is constrained, easier to plan ahead.

### Q27: **B. Must be named `AzureBastionSubnet` and be at least `/26`**
Same case-sensitive naming pattern as other reserved subnets.

---

## 📊 Score Yourself

- 26–27/27 → 🏆 Networking mastered.
- 23–25/27 → ✅ Strong.
- 18–22/27 → ⚠️ Re-read peering + endpoints + UDR sections.
- <18/27 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- 5 reserved IPs per subnet
- Reserved subnet names (Gateway, AzureFirewall, AzureBastion, RouteServer)
- Peering non-transitivity
- Service endpoint vs private endpoint vs Private DNS Zone
- Route-based vs policy-based VPN
- ExpressRoute Local / Standard / Premium + Global Reach + Direct
- UDR next-hop types
- Hub-spoke build order

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8](../Module-08-Network-Security/Reading.md)
