# ✏️ Module 8 Quiz: Network Security

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. NSG rule priorities are processed:
A. Highest number first
B. Lowest number first (lower = higher priority)
C. Alphabetically
D. Randomly

---

### Q2. The default inbound rule with priority 65500 in every NSG is:
A. AllowVnetInBound
B. AllowAzureLoadBalancerInBound
C. DenyAllInBound
D. AllowInternetInBound

---

### Q3. NSGs operate at:
A. Layer 2 (MAC)
B. Layer 3/4 (IP/port/protocol)
C. Layer 7 (application)
D. Layer 5 (session)

---

### Q4. Yes/No — NSGs.

**S1:** NSGs are stateful (return traffic is auto-allowed).
**S2:** Both subnet-level and NIC-level NSGs apply, and a Deny in either drops the packet.
**S3:** Service Tags can be used as source or destination in NSG rules.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q5. An NSG rule with priority 200 allows traffic, and another rule with priority 100 denies the same traffic. The result is:
A. Allow
B. Deny
C. Random
D. Both rules conflict; an error is thrown

---

### Q6. Application Security Groups (ASGs):
A. Replace NSGs
B. Are logical tags on NICs, used as source/destination in NSG rules within the same VNet
C. Work across peered VNets
D. Are layer-7 firewalls

---

### Q7. The Azure Firewall lives in a subnet named:
A. FirewallSubnet
B. AzureFirewallSubnet (exact, case-sensitive)
C. SecuritySubnet
D. Any subnet name

---

### Q8. Azure Firewall rule processing order is:
A. Application → Network → DNAT
B. DNAT → Network → Application
C. Network → DNAT → Application
D. Alphabetical

---

### Q9. Which Azure Firewall SKU supports TLS inspection and IDPS?
A. Basic
B. Standard
C. Premium
D. All SKUs

---

### Q10. A Standard SKU public LB:
A. Has no SLA
B. Supports availability zones and 99.99% SLA (with ≥ 2 backend instances)
C. Cannot route public traffic
D. Requires a Basic public IP

---

### Q11. To publish HTTP/HTTPS with URL path-based routing and WAF inside one region, use:
A. Standard Load Balancer
B. Application Gateway WAF v2
C. Azure Firewall
D. Front Door

---

### Q12. To provide a global, edge-routed L7 entry point with CDN + WAF, use:
A. Standard Load Balancer
B. Application Gateway WAF v2
C. Azure Front Door
D. Traffic Manager

---

### Q13. Traffic Manager is:
A. A DNS-based traffic router (no proxy)
B. An L7 proxy
C. A regional firewall
D. A CDN

---

### Q14. **Order these steps** to publish an internal web app via Front Door Premium with Private Link.

1. Deploy the App Service in a VNet with a private endpoint
2. Create Front Door Premium
3. Configure a Front Door origin with Private Link to the App Service
4. Approve the Private Link connection request on the App Service
5. Enable WAF policy (Detection mode first)

A. 1 → 2 → 3 → 4 → 5
B. 1 → 3 → 2 → 4 → 5
C. 2 → 1 → 3 → 4 → 5
D. 1 → 2 → 4 → 3 → 5

---

### Q15. Yes/No — Service tags.

**S1:** `VirtualNetwork` includes the VNet's space + peered VNets + on-prem reachable space.
**S2:** `Internet` covers all public IPs outside the VNet.
**S3:** Service tags update automatically as Azure IP ranges change.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q16. To allow only Azure Load Balancer health probes inbound, your NSG should allow source:
A. Internet
B. AzureLoadBalancer service tag
C. VirtualNetwork
D. 169.254.169.254 only

---

### Q17. DDoS Network Protection is enabled at the:
A. NIC level
B. VNet level (whole VNet protected)
C. Resource group level
D. Subscription level only

---

### Q18. Yes/No — Application Gateway.

**S1:** Application Gateway is L7 (HTTP/HTTPS).
**S2:** Application Gateway supports URL path-based routing.
**S3:** Application Gateway supports SSL termination and end-to-end SSL.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q19. You see strange traffic from a server tagged with the ASG `asg-web` trying to reach internal API on TCP 8080. The cleanest fix:
A. Block 8080 outbound on the web subnet NSG
B. Replace ASGs with hardcoded IPs
C. Adjust the NSG rule for asg-app's NSG to deny the source ASG `asg-web` on 8080
D. Move the API to public IP

---

### Q20. You want to ensure only traffic originating from Front Door reaches the App Service. The supported way is:
A. NSG rule on the App Service
B. Restrict inbound to the `AzureFrontDoor.Backend` service tag plus header check, OR use Private Link origin
C. Disable HTTPS
D. There is no way to restrict

---

### Q21. A WAF policy on App Gateway or Front Door supports:
A. Custom rules + OWASP Core Rule Set + bot protection
B. Custom rules only
C. OWASP only
D. No customization

---

### Q22. Azure Bastion is used to:
A. Replace a load balancer
B. Allow secure RDP/SSH to VMs without giving them public IPs
C. Act as a layer-7 firewall
D. Provide L7 caching

---

### Q23. **Order these steps** to apply WAF safely.

1. Create the WAF policy (custom + managed rules)
2. Attach the WAF policy to Front Door / App Gateway in **Detection** mode
3. Observe WAF logs in Log Analytics
4. Tune rules / add exclusions
5. Switch policy to **Prevention** mode

A. 1 → 2 → 3 → 4 → 5
B. 1 → 5 → 2 → 3 → 4
C. 2 → 1 → 3 → 4 → 5
D. 1 → 2 → 5 → 3 → 4

---

### Q24. Yes/No — Load Balancers.

**S1:** Standard LB is secure by default (closed inbound; you allow with NSG explicitly).
**S2:** Standard LB supports both zonal and zone-redundant frontends.
**S3:** Basic Load Balancer is recommended for new production deployments.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

---

### Q25. Which scenario fits Cross-Region Load Balancer?
A. L7 global routing with WAF
B. L4 (TCP/UDP) global load balancing across multiple regional standard LBs
C. Single-region L4
D. DNS-based steering

---

### Q26. An NSG is associated with a subnet AND a NIC in that subnet. Inbound traffic to a VM is evaluated:
A. Only by the NIC NSG
B. Only by the subnet NSG
C. Subnet NSG first, then NIC NSG — both must allow
D. Whichever is more permissive

---

## 🎯 Answers + Explanations

### Q1: **B. Lowest number first (lower = higher priority)**
Priorities go 100 (highest priority) to 4096. First match wins.

### Q2: **C. DenyAllInBound**
65500 is the bottom default — deny everything not already allowed.

### Q3: **B. Layer 3/4 (IP/port/protocol)**
NSGs do 5-tuple filtering, not payload inspection.

### Q4: **A. Yes / Yes / Yes**
NSGs are stateful. Both layers apply (deny in either drops). Service tags are heavily encouraged.

### Q5: **B. Deny**
First match wins, and lowest priority number is evaluated first.

### Q6: **B. Are logical tags on NICs, used as source/destination in NSG rules within the same VNet**
ASGs are not a separate firewall — they're labels for NSG rules. Single-VNet scope.

### Q7: **B. AzureFirewallSubnet (exact, case-sensitive)**
Reserved name. Same constraint as `GatewaySubnet`.

### Q8: **B. DNAT → Network → Application**
Memorize this order.

### Q9: **C. Premium**
TLS inspection, IDPS, URL filtering — Premium-only.

### Q10: **B. Supports availability zones and 99.99% SLA**
Two backends + SLB = 99.99%. Basic has no SLA.

### Q11: **B. Application Gateway WAF v2**
Regional L7 with WAF. Front Door is global.

### Q12: **C. Azure Front Door**
Global edge L7 + CDN + WAF.

### Q13: **A. A DNS-based traffic router (no proxy)**
Returns the IP; client connects direct. No payload sees Traffic Manager.

### Q14: **A. 1 → 2 → 3 → 4 → 5**
PE first, then FD, configure origin with PL, approve PE on origin, enable WAF policy in Detection mode.

### Q15: **A. Yes / Yes / Yes**
All true. Tags are auto-maintained by Microsoft.

### Q16: **B. AzureLoadBalancer service tag**
Standard service tag for health probes.

### Q17: **B. VNet level (whole VNet protected)**
DDoS Network Protection is per-VNet. DDoS IP Protection is per-public-IP.

### Q18: **A. Yes / Yes / Yes**
Standard AGW features.

### Q19: **C. Adjust the NSG rule for asg-app's NSG to deny the source ASG `asg-web` on 8080**
ASG-aware deny is precise and reuses your existing model.

### Q20: **B. Restrict inbound to the `AzureFrontDoor.Backend` service tag plus header check, OR use Private Link origin**
Both patterns are documented Microsoft-supported approaches. Private Link is the strongest.

### Q21: **A. Custom rules + OWASP Core Rule Set + bot protection**
WAF policy supports all three.

### Q22: **B. Allow secure RDP/SSH to VMs without giving them public IPs**
Browser-based RDP/SSH. Lives in `AzureBastionSubnet`.

### Q23: **A. 1 → 2 → 3 → 4 → 5**
Create → attach in Detection → observe → tune → switch to Prevention.

### Q24: **A. Yes / Yes / No**
SLB is secure-by-default. Zonal + zone-redundant supported. Basic LB is being deprecated, not recommended.

### Q25: **B. L4 (TCP/UDP) global load balancing across multiple regional standard LBs**
Cross-region LB sits in front of regional SLBs.

### Q26: **C. Subnet NSG first, then NIC NSG — both must allow**
Inbound: subnet → NIC. Outbound: NIC → subnet. Both layers must allow.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Network sec mastered.
- 22–24/26 → ✅ Strong.
- 18–21/26 → ⚠️ Re-read NSG + Firewall + LB-vs-AGW-vs-FD sections.
- <18/26 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- NSG priority direction (lower = first)
- 6 default NSG rules (3 in + 3 out)
- ASG = single-VNet only
- Azure Firewall rule order (DNAT → Network → App)
- Firewall SKU features (Basic / Standard / Premium)
- LB SKU table (Basic vs Standard)
- AGW vs FD vs TM vs xRegion LB
- WAF rollout: Detection → tune → Prevention

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 9](../Module-09-Backup-Recovery-Migration/Reading.md)
