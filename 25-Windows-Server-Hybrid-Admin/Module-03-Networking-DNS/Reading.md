# Module 3: Networking, DNS & DHCP 🌐

> **Why this module matters:** Networking quietly dominates both exams. DNS alone is 8%+ of total marks; DHCP another 4%; firewall and NLB another 3–5%. But the deeper truth is: **every other module fails when DNS is broken**. AD authentication fails. Hyper-V live migration fails. Azure Arc onboarding fails. Defender for Servers fails to register. Master DNS and DHCP cold and the whole rest of the curriculum becomes easier.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - TCP/IP basics IP addresses, subnets, CIDR, default gateway, ports covered in CompTIA Network+ or equivalent
> - DNS query terminology (resolver, authoritative, recursive, iterative)
> - AD DS site structure, [Module 1](../Module-01-Active-Directory/Reading.md)
>
> If those are shaky, pause and pick up the CompTIA Network+ certification path first. This module assumes you know what a `/24` is and why TCP/53 differs from UDP/53.

---

## 🍕 A Story: The 4 a.m. Phone Call

It's 4:11 a.m. on a Tuesday. You're the on-call senior engineer at Globex, a 9,000-seat manufacturer. Your phone rings. The night-shift operations lead is panicked: *"Nobody can log in. Production line stopped. Conveyor belts running but the SCADA HMI screens are showing 'cannot contact domain controller.'"*

You SSH from bed into your jump box. `ping dc01.globex.local` no response. `ping 10.50.1.10` pings fine. The DC is up. The *name resolution* is broken.

You check the DHCP server log: it was rebooted overnight by a power blip; the conditional forwarder for `corp.globex.local` (the parent forest, managed by HQ) was never re-saved to a non-AD-integrated zone, so it vanished. The branch DNS server is now returning SERVFAIL for any name in the parent forest's namespace. Domain controllers and therefore every workstation, every line of code, every SCADA HMI cannot resolve their own service records.

You re-add the conditional forwarder. `Resolve-DnsName dc01.corp.globex.local` works. Lunch-room workstations log in. Conveyor belts get their SCADA panels back. By 6:30 a.m. you're sound asleep again.

That story is why this module matters. DNS is the most-broken thing in any Windows shop, the hardest-to-explain-to-management when it breaks, and the single biggest reason "Active Directory just stops working." Master it deeply.

---

## 🌐 Windows DNS Server: The Architecture

A **DNS zone** is a portion of the DNS namespace for which a server is **authoritative**. Windows DNS supports several zone types:

| Zone type | Storage | Read/write | Use case |
|-----------|---------|------------|----------|
| **Primary** | File or AD-integrated | Read/write | Authoritative copy of zone data |
| **Secondary** | File only | Read-only | Replica of a primary (zone transfer / IXFR / AXFR) |
| **Stub** | File or AD-integrated | Lists only NS, SOA, A glue records for that zone | Lightweight "I know who's authoritative for X" |
| **Conditional forwarder** | Server-level config | Not a zone per se, forwards a specific domain to specific IPs | When you need to resolve a partner/other-forest domain |

### AD-integrated zones (preferred for AD DNS)

Storing a zone as **AD-integrated** means:

- Zone data lives in the `MicrosoftDNS` container in AD (CN partition of choice)
- Multi-master writes, any DC can accept a record update
- Secure dynamic updates, only authorized clients (computers / DHCP servers in `DnsUpdateProxy`) can register
- No "primary" SPOF, every DC with DNS role is equal

Replication scope:
| Scope | Replicates to |
|-------|---------------|
| **DomainDnsZones** | All DNS-server DCs in this domain |
| **ForestDnsZones** | All DNS-server DCs in the entire forest |
| **All DCs in this domain** | Including ones not running DNS (legacy, rare) |
| **Custom partition** | A named application partition you've created |

### Common record types

| Type | Use |
|------|-----|
| **A** | IPv4 hostname → 32-bit address |
| **AAAA** | IPv6 hostname → 128-bit address |
| **CNAME** | Alias to another name |
| **SRV** | Service record, e.g., `_ldap._tcp.dc._msdcs.contoso.com` |
| **MX** | Mail exchanger |
| **TXT** | Free-form text (SPF, DKIM, domain verification) |
| **NS** | Nameservers for the zone |
| **SOA** | Start of Authority, zone metadata (serial, TTL, refresh, retry, expire) |
| **PTR** | Reverse, IP → name |

🚨 **AD requires SRV records** in `_msdcs.<forest>` and `_sites/<sitename>/_tcp` to function. If you delete them, AD breaks within ~15 minutes. They auto-register via the **Netlogon** service (`ipconfig /registerdns` triggers manual re-registration).

---

## 🔒 DNSSEC, Authenticating DNS Responses

DNSSEC cryptographically signs DNS responses, defeating cache poisoning attacks (e.g., the Kaminsky attack disclosed in 2008). Windows DNS has supported it natively since Server 2012.

### Key concepts

| Key/Record | Purpose |
|------------|---------|
| **KSK** (Key Signing Key) | Long-lived; signs the **DNSKEY** record set |
| **ZSK** (Zone Signing Key) | Shorter-lived; signs all other records (A, MX, NS, etc.) |
| **DNSKEY** | Public keys for the zone |
| **RRSIG** | Signature record, cryptographic signature of an answer |
| **DS** (Delegation Signer) | A hash of the child zone's KSK, stored in the parent zone, anchors the trust chain |
| **NSEC / NSEC3** | Authenticated denial of existence ("no such name"), NSEC3 hashes names to prevent zone walking |
| **Trust Anchor** | A DNSKEY a resolver explicitly trusts (the root, or your internal zone) |

### Sign a zone (PowerShell)

```powershell
Add-DnsServerSigningKey -ZoneName "contoso.com" -Type KeySigningKey  -CryptoAlgorithm RsaSha256 -KeyLength 2048
Add-DnsServerSigningKey -ZoneName "contoso.com" -Type ZoneSigningKey -CryptoAlgorithm RsaSha256 -KeyLength 1024

Invoke-DnsServerZoneSign -ZoneName "contoso.com" -SignWithDefault

# Push the parent's DS record (manual coordination with parent admin)
Export-DnsServerDnsSecPublicKey -ZoneName "contoso.com" -ComputerName DC01 -Path C:\dnsec\contoso-ds.txt
```

🎯 **Exam pattern:** *"How do internal resolvers know to trust the DNSKEY of `contoso.com`?"* → **Via the DS record published in the parent zone (`.com` for public zones, or a local trust anchor for split-horizon).**

---

## 🪞 Split-Horizon and DNS Policies (the modern flexibility)

Since Server 2016, Windows DNS supports **policies** that change responses based on query source/time/zone/etc., replacing the older "split-brain DNS" tricks.

### Use cases for DNS policies

1. **Geographic load balancing**, `www.contoso.com` resolves to a different IP from EU vs US queries
2. **Application high availability**, return only healthy backend IPs
3. **Block list**, return NXDOMAIN for known malicious names
4. **Split-brain**, internal resolvers get internal IPs, external resolvers get external IPs

```powershell
# Create a client subnet for HQ
Add-DnsServerClientSubnet -Name "HQ" -IPv4Subnet "10.0.0.0/16"

# Policy: HQ users get one IP, everyone else gets another
Add-DnsServerQueryResolutionPolicy `
    -Name "HQ-Geo-Policy" `
    -Action ALLOW `
    -ClientSubnet "eq,HQ" `
    -ZoneScope "HQ-Scope,1;Default,0" `
    -ZoneName "contoso.com"
```

---

## 🔄 Conditional Forwarders vs Stub Zones (Critical Distinction)

| | **Conditional Forwarder** | **Stub Zone** |
|---|---------------------------|---------------|
| Data stored | Just the target IPs you configured | NS + SOA + glue A records (auto-updated) |
| How target servers are discovered | Static admin sets the IPs | Dynamic periodic zone transfer of just NS records |
| Best when | You want simple, deterministic routing | The remote zone's NS list changes frequently |
| Common use | Resolving a partner / vendor / parent forest domain | Cross-forest where remote topology is fluid |

🎯 **Exam pattern:** "We acquired Fabrikam and need to resolve `fabrikam.com` from our DCs, and Fabrikam's NS list changes every quarter." → **Stub zone**. Static partner DNS that doesn't change → **Conditional forwarder**.

---

## 🌍 Global Names Zone (GNZ)

Windows DNS supports a **GlobalNames zone** for single-label name resolution (e.g., `intranet` → `intranet.contoso.com`) across an entire forest. Replaces WINS for that use case.

```powershell
# Enable GNZ support
Set-DnsServerGlobalNameZone -Enable $true

# Create the zone (AD-integrated, replicated forest-wide)
Add-DnsServerPrimaryZone -Name "GlobalNames" -ReplicationScope Forest -DynamicUpdate Secure
```

📌 GNZ is **single-label only**. It does not replace fully qualified DNS, it's a convenience layer for legacy apps.

---

## 🧹 DNS Scavenging

DHCP-leased clients can leave stale A records when they change subnets or get re-imaged. **Aging and scavenging** automatically purges them.

| Parameter | Default | Means |
|-----------|---------|-------|
| **No-Refresh Interval** | 7 days | Period when a record cannot be refreshed (prevents replication spam) |
| **Refresh Interval** | 7 days | Period after No-Refresh when refreshes are allowed and the record stays alive |
| **Scavenging Interval** | 7 days | How often the DNS server scans for stale records to delete |

```powershell
Set-DnsServerScavenging -ScavengingState $true `
    -ScavengingInterval 7.00:00:00 `
    -RefreshInterval 7.00:00:00 `
    -NoRefreshInterval 7.00:00:00 `
    -ApplyOnAllZones
```

🚨 **Trap:** Scavenging is **OFF by default**. Forgetting to enable it means stale records pile up forever.

---

## 📡 DHCP, Scopes, Reservations, Failover

A **DHCP scope** is a range of IPs the server hands out for one subnet.

| Element | Means |
|---------|-------|
| **Scope** | IP range + subnet mask + options |
| **Exclusion** | IP(s) in the range NOT given to clients |
| **Reservation** | A specific IP reserved by MAC address |
| **Options** | DHCP option codes (router = 003, DNS = 006, NTP = 042, etc.) sent to clients |
| **Lease duration** | Default 8 days for wired, often shortened for wireless |

### Create a scope (PowerShell)

```powershell
# Install DHCP server feature
Install-WindowsFeature DHCP -IncludeManagementTools

# Authorize in AD (DHCP server won't lease until authorized)
Add-DhcpServerInDC -DnsName "dhcp01.contoso.com" -IPAddress 10.0.0.10

# Create a scope
Add-DhcpServerv4Scope -Name "HQ-Workstations" `
    -StartRange 10.0.10.50 -EndRange 10.0.10.200 `
    -SubnetMask 255.255.255.0 -LeaseDuration 1.00:00:00

# Set scope options
Set-DhcpServerv4OptionValue -ScopeId 10.0.10.0 `
    -DnsServer 10.0.0.10,10.0.0.11 `
    -Router 10.0.10.1 `
    -DnsDomain "contoso.com"

# Add a reservation
Add-DhcpServerv4Reservation -ScopeId 10.0.10.0 `
    -IPAddress 10.0.10.51 -ClientId "00-15-5D-AB-CD-EF" -Name "PrinterFloor3"
```

### Superscope vs Split scope vs Failover

| Term | What it is |
|------|------------|
| **Superscope** | Groups multiple scopes onto **one physical subnet** (multi-net on one segment), typically to expand address space without renumbering |
| **Split scope** | One subnet's scope manually split between two DHCP servers (e.g., 80% on Server A, 20% on Server B), pre-2012 HA pattern |
| **Failover (Hot Standby)** | Server A primary; Server B standby. On failure detection (MCLT), B takes over. Best for branch where 1 server is small, 1 is just-in-case |
| **Failover (Load Balance)** | Default 50/50 split across both servers; both active. Best for HQ where both servers are equally sized |

### Configure DHCP failover (load balance)

```powershell
Add-DhcpServerv4Failover -ComputerName "dhcp01.contoso.com" `
    -PartnerServer "dhcp02.contoso.com" `
    -Name "HQ-Failover" `
    -ScopeId 10.0.10.0,10.0.20.0 `
    -SharedSecret "S3cur3Sh@redKey!" `
    -LoadBalancePercent 50 `
    -MaxClientLeadTime 01:00:00 `
    -StateSwitchInterval 01:00:00
```

🔥 **MEMORIZE:** **MCLT** (Maximum Client Lead Time) is the time a partner server waits before assuming the other is dead and taking over. Default 1 hour.

### DHCP options, common codes

| Option | Number | Purpose |
|--------|--------|---------|
| Router | 003 | Default gateway |
| DNS Server | 006 | DNS servers |
| Domain Name | 015 | DNS suffix |
| WINS/NBNS Servers | 044 | Legacy NetBIOS resolution |
| NTP Servers | 042 | Time servers |
| Boot Server Host Name | 066 | PXE TFTP server |
| Bootfile Name | 067 | PXE boot file (e.g., `pxelinux.0`) |
| WPAD URL | 252 | Proxy auto-config |

---

## 📊 IP Address Management (IPAM)

IPAM is a Windows Server feature for **centrally tracking DHCP, DNS, and AD-DS** across the forest.

| Feature | Limit |
|---------|-------|
| Per IPAM server | Up to **150 DHCP servers**, **500 DNS servers**, **1,000,000 IP addresses** |
| Cannot run on | A domain controller |
| Storage | LocalDB (default) or SQL Server (large-scale) |
| Discovery | AD-based, IPAM auto-finds DHCP/DNS servers in chosen domains |
| Provisioning | Manual or GPO-based (creates GPO that grants IPAM server read rights) |

```powershell
Install-WindowsFeature IPAM -IncludeManagementTools

# After GUI provisioning, you can manage:
Get-IpamRange | Format-Table -Auto
Get-IpamAddress -StartIPAddress 10.0.10.50 -EndIPAddress 10.0.10.200
Add-IpamSubnet -NetworkId 10.0.50.0/24 -Name "Branch-Houston-Voice" -VlanId 50
```

🎯 **Exam pattern:** *"Multiple admins managing scattered DHCP servers, track utilization centrally."* → **IPAM**.

---

## 🧱 Windows Firewall with Advanced Security

Windows Firewall with Advanced Security (WFAS) operates with **three profiles**:

| Profile | Triggers when |
|---------|---------------|
| **Domain** | Connected to network where DCs are reachable |
| **Private** | User marked the network as "trusted home/work" |
| **Public** | Default for any new untrusted network |

### Rule structure

```
For each connection:
    Match (Application, port, protocol, IP, user, computer)
        → Action (Allow, Block, Allow only if secure-via-IPsec)
            → Apply to (Domain / Private / Public profile)
```

### Create a rule

```powershell
# Allow inbound RDP only from a specific subnet on the domain profile
New-NetFirewallRule -DisplayName "Allow RDP from HQ admin subnet" `
    -Direction Inbound `
    -Action Allow `
    -Protocol TCP `
    -LocalPort 3389 `
    -RemoteAddress 10.0.5.0/24 `
    -Profile Domain
```

🔥 **Default Domain profile inbound = Block unless allowed; outbound = Allow.**

### Connection Security Rules (IPsec)

Beyond simple allow/block, WFAS can enforce **IPsec** between hosts:

- **Isolation**, only domain-joined computers can connect
- **Server-to-server**, specific server pairs use IPsec
- **Tunnel**, site-to-site VPN-style tunneling
- **Authentication exemption**, exclude specific hosts

### Domain isolation

A common AZ-801 scenario: *"Restrict access to a server so only domain-joined machines can connect."* The answer is **WFAS Connection Security Rule for domain isolation**, enforced via GPO.

---

## ⚖️ Network Load Balancing (NLB)

Windows NLB distributes TCP/UDP traffic across **2–32 nodes**.

| Property | Detail |
|----------|--------|
| Layer | 4 (transport), pre-app inspection |
| Shared state | None, best for stateless workloads (IIS, RDS Gateway, RD Connection Broker pre-2012) |
| Max nodes | 32 |
| Modes | **Unicast**, **Multicast**, **IGMP Multicast** |
| Drainstop | Graceful, finishes existing connections then offline |

| Mode | Pros | Cons |
|------|------|------|
| **Unicast** | Simple; works without switch config | All hosts share one MAC, host-to-host comms need a second NIC |
| **Multicast** | Host-to-host still works | Switches may flood (some refuse multicast MAC) |
| **IGMP Multicast** | Switches that support IGMP snooping cap the flooding | Requires switch support |

### Build an NLB cluster

```powershell
# On all nodes
Install-WindowsFeature NLB,RSAT-NLB

# On Node 1: create cluster
New-NlbCluster -InterfaceName "Ethernet" `
    -OperationMode Unicast `
    -ClusterPrimaryIP 10.0.5.100 `
    -SubnetMask 255.255.255.0 `
    -ClusterName "WebFarm-NLB"

# Join Node 2
Add-NlbClusterNode -InterfaceName "Ethernet" -NewNodeName "WEB02"
```

🚨 **Trap:** NLB is *not* for SQL Server, Exchange, or domain controllers, those need shared state (Failover Cluster or Always On AG). NLB is purely for stateless tiers.

---

## 🛡️ Hyper-V Networking Quick-Tour (cross-ref Module 5)

| vSwitch type | Reachability |
|--------------|--------------|
| **External** | Bound to physical NIC, VM ↔ outside world |
| **Internal** | Host ↔ VMs only |
| **Private** | VM ↔ VM only, no host, no outside |

Hyper-V networking is covered deeper in [Module 5](../Module-05-HyperV/Reading.md), included here for cross-reference.

---

## 🧪 Task-Sequencing Practice: Set Up DHCP Failover in Load-Balance Mode Across Two Sites

**Scenario:** HQ has DHCP01 (10.0.0.10) serving the HQ subnet 10.0.10.0/24. You're building DHCP02 (10.0.0.11) for HA. The CTO wants both servers active, 50/50, with a 1-hour MCLT.

**Order these steps:**

1. ✅ Install the DHCP server role on DHCP02: `Install-WindowsFeature DHCP -IncludeManagementTools`
2. ✅ Authorize DHCP02 in AD: `Add-DhcpServerInDC -DnsName "dhcp02.contoso.com" -IPAddress 10.0.0.11`
3. ✅ Verify DHCP01 is healthy and scope 10.0.10.0 is active
4. ✅ Configure the failover relationship on DHCP01 partnering with DHCP02
5. ✅ Replicate scopes to DHCP02 (handled by `Add-DhcpServerv4Failover` automatically)
6. ✅ Confirm both servers show the scope under their respective DHCP console: `Get-DhcpServerv4Scope -ComputerName dhcp01`
7. ✅ Test by stopping DHCP service on DHCP01, DHCP02 should continue leasing without interruption

⚠️ Skipping step 2 (authorization) is the #1 mistake, DHCP refuses to lease until authorized in AD. Symptom: clients get APIPA addresses, eventlog shows event ID 1059.

---

## 📊 Case Study, The 2016 Dyn DNS DDoS and the Lessons for Internal DNS

**Situation.** On October 21, 2016, the Mirai botnet comprising ~150,000 compromised IoT devices (DVRs, IP cameras, baby monitors) launched a 1.2 Tbps DDoS attack against **Dyn DNS**, the managed-DNS provider for Twitter, Spotify, Reddit, GitHub, PayPal, Netflix, and dozens of other major web properties (Dyn Statement on October 21, 2016 DDoS Attack, October 26, 2016; Bruce Schneier, "Lessons from the Dyn DDoS Attack," CRYPTO-GRAM newsletter, November 2016). For ~7 hours, much of the East Coast of the United States could not reach these services, because their DNS resolution path failed. The websites themselves were online; nobody could *find* them.

**Decision.** The post-mortem highlighted three architectural choices that turned a botnet into a national-scale outage:

1. **Single-DNS-provider lock-in.** Hundreds of major sites used Dyn as their *only* authoritative DNS, no secondary provider. A single failure plane.
2. **No anycast diversification.** Dyn's anycast network was overwhelmed because all the attack traffic could converge on the same DNS infrastructure.
3. **Recursive resolver caching couldn't save them.** TTLs on the affected domains were measured in seconds to minutes, too short for caches to bridge the outage.

**Outcome.** Within 6 months, Cloudflare DNS, AWS Route 53, and Google Cloud DNS all reported a surge in customers adopting **multi-provider authoritative DNS** with redundant DNSSEC signing. CloudFlare published its own incident-response guidance recommending *minimum two unrelated DNS providers* for any internet-facing service. Internally, large enterprises like Microsoft tightened their own internal DNS resiliency: a typical 50,000-seat Windows enterprise now runs DNS on **every** domain controller (active-active-active...), with **conditional forwarders** to internet resolvers, **scavenging enabled**, **DNSSEC for internal trust anchors**, and **DNS policies** to handle geographic / split-horizon needs.

**Lesson for the exam / for practitioners.** AZ-800 won't test you on Dyn by name, but it tests every concept that the Dyn outage taught us:

- *Resilient DNS topology* → multiple DC-DNS servers per site, AD-integrated zones (multi-master), conditional forwarders to internet resolvers
- *DNSSEC* → defeats cache poisoning even in the chaos of a DDoS-driven cache miss
- *Scavenging* → prevents the stale-record buildup that masks actual outages
- *Monitoring* → DNS query latency and SERVFAIL rate are leading indicators of AD health

The exam will phrase scenarios like: *"After a partial network outage, the secondary site reports authentication failures only on Windows 11 workstations. Domain controllers in both sites are reachable on TCP/445 and TCP/389. What's the most likely cause?"* The answer is almost always **DNS**, specifically that the secondary site's DNS server is returning incomplete `_msdcs.contoso.com` SRV records, which Windows 11's stricter resolver logic surfaces faster than Windows 10's.

**Discussion (Socratic).**
- **Q1.** A 30-site enterprise running AD-integrated DNS on every DC has a 4-hour WAN outage between HQ and a regional hub. Defend the architecture choice that lets authentication continue at the hub (hint: every DC also runs DNS for its own zone), and then identify the *one* type of query that fails during the outage and how DNS conditional forwarders or stub zones change the answer.
- **Q2.** Microsoft recommends scavenging be enabled on AD-integrated zones with a 7/7/7 day setting. A senior admin pushes back: "Scavenging deletes records we care about, better to leave it off." Build the case for scavenging with the exact failure modes of *not* enabling it (zone bloat, replication overhead, stale records masking outages).
- **Q3.** A regulated bank cannot use external DNS providers (compliance) and runs all DNS internally. Argue the case that they're *more* vulnerable to a Dyn-style failure than a multi-provider cloud-first competitor, or, conversely, that internal DNS is the *correct* choice and the bank's risk model differs from a consumer SaaS.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Conditional forwarders auto-update when the remote NS list changes" | ❌ They're static; use stub zones for dynamic NS topology |
| "GlobalNames Zone replaces all DNS" | ❌ Single-label names only; full FQDN still required for everything else |
| "Scavenging is on by default" | ❌ Off by default, must enable explicitly |
| "DHCP works fine without AD authorization" | ❌ Authorized DHCP server is required; unauthorized = no leases |
| "DHCP failover replicates scope changes automatically forever" | ❌ Only on the first `Add-...Failover`; later scope changes need `Invoke-DhcpServerv4FailoverReplication` |
| "MCLT default is 5 minutes" | ❌ Default is 1 hour |
| "NLB works for SQL clusters" | ❌ NLB is stateless layer-4 only; SQL needs Failover Cluster or AG |
| "Windows Firewall has only Domain and Public profiles" | ❌ Three profiles: Domain, Private, Public |
| "IPAM can run on a DC" | ❌ Must run on a non-DC member server |
| "DNSSEC encrypts DNS responses" | ❌ It *signs* (integrity + auth); for confidentiality use DNS-over-HTTPS / TLS (DoH/DoT) |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **AD-integrated zone** | DNS zone stored in AD, multi-master |
| **Stub zone** | NS-only lightweight zone replica |
| **Conditional forwarder** | Per-domain DNS forwarding |
| **GNZ** | GlobalNames Zone, single-label name resolution |
| **DNSSEC** | DNS Security Extensions, cryptographic signing |
| **KSK / ZSK** | Key Signing Key / Zone Signing Key |
| **DS record** | Delegation Signer in parent zone, anchors DNSSEC chain |
| **NSEC / NSEC3** | Authenticated denial-of-existence |
| **Scavenging** | Auto-delete of stale DNS records |
| **DHCP scope** | IP range + options for one subnet |
| **Superscope** | Group of scopes on one physical subnet |
| **DHCP failover** | Active/active or active/standby HA |
| **MCLT** | Maximum Client Lead Time, failover partner takeover wait |
| **IPAM** | IP Address Management, central tracking of DHCP/DNS/AD |
| **NLB** | Network Load Balancing, layer-4, 2–32 nodes |
| **WFAS** | Windows Firewall with Advanced Security |
| **Connection Security Rule** | WFAS IPsec rule (isolation, tunnel, etc.) |

---

## ✅ Module 3 Summary

You now know:

- 🌐 DNS zone types (primary, secondary, stub, conditional forwarder) and AD-integrated benefits
- 🔒 DNSSEC components (KSK/ZSK/DS/RRSIG/NSEC) and how the trust chain works
- 🪞 DNS policies for split-horizon, geo-LB, and block lists
- 🔄 Conditional forwarders vs stub zones
- 🌍 GlobalNames Zone for single-label resolution
- 🧹 Aging and scavenging defaults (7/7/7)
- 📡 DHCP scopes, options, reservations, superscope/split-scope/failover
- 📊 IPAM for central DHCP/DNS tracking
- 🧱 Windows Firewall with Advanced Security, profiles and rule structure
- ⚖️ NLB for stateless workloads (2–32 nodes, Unicast/Multicast/IGMP)
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: File Servers, Storage & Storage Spaces](../Module-04-File-Storage/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4's DFS-N namespaces use DNS for `\\contoso.com\shares`; Module 5's Hyper-V live migration uses DNS to locate target hosts; Module 6's Arc onboarding registers names in your DNS; Module 9's ASR uses DNS for failover IP redirection.
> - Cross-course: [`06-Azure-Administrator` Module 8](../../06-Azure-Administrator/Module-08-Network-Security/Reading.md) covers Azure DNS, Private DNS Zones, and Azure Firewall, many concepts here translate.
> - Practice: Practice Exam 1 has 7 questions on networking/DNS; Practice Exam 2 has 5 (hybrid DNS resolution); Final Mock has a DNS troubleshooting case study.

---

## 💬 Discussion, Socratic prompts

1. **DNSSEC for an internal zone, is it worth the operational cost?** A 5,000-seat enterprise with mostly internal services debates enabling DNSSEC on `contoso.local` (AD-integrated). The CISO wants the integrity guarantees; the operations team warns about key-rotation accidents that have caused outages at other companies. Build both sides of the argument and identify the minimum operational tooling required.
2. **Conditional forwarder vs stub zone vs forest trust.** A merger gives you cross-resolution needs between `contoso.local` and `fabrikam.local`. You can pick conditional forwarders, stub zones, or a forest trust (which creates name-suffix routing). For a stable, infrequently-changing remote, defend the conditional-forwarder approach. For a remote where domain controllers come and go monthly, defend the stub zone. For full SSO + name resolution, defend the forest trust. Which combination should the architect actually choose?
3. **DHCP failover, load balance vs hot standby.** A 10,000-device HQ runs DHCP on two beefy servers. A 200-device branch has one beefy server and one tiny server. For each, defend the choice of failover mode and justify the MCLT setting. What's the practical difference between MCLT=1hr and MCLT=5min when you actually have a partner outage?
4. **IPAM in a heterogeneous environment.** Your IPAM server can manage 150 DHCP and 500 DNS servers, but a global enterprise has 30 forests, 2,000 DHCP servers, and a mix of Microsoft and Infoblox. Build the case for using IPAM only for Windows-side visibility (with Infoblox handling the rest) vs migrating Infoblox to IPAM. Where does the cost-benefit analysis break?
5. **NLB in 2026 has it been replaced?** NLB is a 1999-era technology. Modern Azure-aware architectures use Azure Front Door, Application Gateway, or Standard Load Balancer for these patterns. Make the case that NLB is still the right answer for specific on-prem stateless tiers and identify the workloads where moving to Azure-side load balancing is the better answer.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn, Windows DNS Server overview](https://learn.microsoft.com/windows-server/networking/dns/dns-top)
- 📖 [DHCP failover deep dive](https://learn.microsoft.com/windows-server/networking/technologies/dhcp/dhcp-failover)
- 📖 [IPAM technical reference](https://learn.microsoft.com/windows-server/networking/technologies/ipam/ipam-top)
- 📖 RFC 4033 *DNS Security Introduction and Requirements* (Arends et al., 2005)
- 📖 RFC 4035 *Protocol Modifications for the DNS Security Extensions*
- 📖 Bruce Schneier, "Lessons from the Dyn DDoS Attack," *CRYPTO-GRAM*, November 2016, accessible post-mortem
- 📖 Cricket Liu and Paul Albitz, *DNS and BIND* (5th ed., O'Reilly, 2006), still the canonical DNS reference; principles unchanged
- 📖 W. Richard Stevens, *TCP/IP Illustrated Vol. 1* (Addison-Wesley, 2nd ed., 2011), the bedrock you stand on
