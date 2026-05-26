# 📋 Module 3 Cheat Sheet: Networking, DNS & DHCP

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌐 DNS Zones at a Glance

| Type | Storage | Writes | Use |
|------|---------|--------|-----|
| **Primary (file)** | Disk | Single-master | Standalone DNS server |
| **Primary (AD-integrated)** | AD | **Multi-master** | Default for AD DNS |
| **Secondary** | Disk | Read-only replica | Disaster fallback, cross-org reads |
| **Stub** | Disk or AD | NS only, **auto-refreshing** | Track external zone NS dynamics |
| **Conditional forwarder** | Server config | n/a — forwards to specific IPs | Static partner domain |
| **GlobalNames Zone** | AD | Single-label only | Replace WINS |

🧠 **Stub = dynamic NS; Conditional Forwarder = static.**

---

## 🔒 DNSSEC Cheat

| Item | Purpose |
|------|---------|
| **KSK** | Long-lived; signs DNSKEY records |
| **ZSK** | Shorter-lived; signs everything else |
| **DS** | Hash of child's KSK, in PARENT zone |
| **RRSIG** | Signature on a record set |
| **NSEC3** | Authenticated denial (resistant to walking) |
| **Trust Anchor** | A DNSKEY the resolver explicitly trusts |

🔥 DNSSEC = integrity + auth (NOT confidentiality — that's DoH/DoT).

---

## 🧹 DNS Scavenging

- **OFF by default** — must enable
- Defaults when on: **No-Refresh 7d / Refresh 7d / Scavenging 7d**
- Apply via `Set-DnsServerScavenging -ApplyOnAllZones`

---

## 📡 DHCP Quick Reference

### Setup order
1. `Install-WindowsFeature DHCP -IncludeManagementTools`
2. `Add-DhcpServerInDC` (AUTHORIZE — otherwise no leases)
3. `Add-DhcpServerv4Scope`
4. `Set-DhcpServerv4OptionValue` (router 003, DNS 006, domain 015, NTP 042)
5. `Add-DhcpServerv4Reservation` (per MAC)

### Top option codes (MEMORIZE)

| Option | # |
|--------|---|
| Router | **003** |
| DNS Server | **006** |
| DNS Domain | **015** |
| NTP | **042** |
| WINS | 044 |
| Boot Server (PXE) | 066 |
| Boot File (PXE) | 067 |
| WPAD | 252 |

### DHCP Failover

| Feature | Detail |
|---------|--------|
| **Hot Standby** | Active/standby (best for asymmetric pairs) |
| **Load Balance** | 50/50 active/active (best for parity HQ pairs) |
| **MCLT** | Maximum Client Lead Time — **1 hr default** |
| **Shared Secret** | Optional but recommended for relationship auth |

### Other multi-server patterns

- **Superscope** — multiple scopes on **one physical subnet**
- **Split-scope** — manual 80/20 across two servers (legacy)

---

## 📊 IPAM Quick

- **Cannot run on a DC**
- Per IPAM server: **150 DHCP**, **500 DNS**, **1M IPs**
- LocalDB by default; SQL Server for large scale
- Auto-discover via GPO-provisioned access

---

## 🧱 Windows Firewall with Advanced Security

### Three profiles

| Profile | Triggered by |
|---------|--------------|
| **Domain** | DC reachable |
| **Private** | User-marked trusted |
| **Public** | Default new untrusted |

### Defaults

- **Domain inbound: BLOCK unless allowed; outbound: ALLOW**

### Rule types

- **Inbound / Outbound** — basic allow/block
- **Connection Security Rule** — IPsec for isolation, tunnel, server-to-server, exemption

🔥 Domain isolation = WFAS Connection Security Rule via GPO.

---

## ⚖️ NLB (Layer-4) Quick

- **2–32 nodes**, stateless workloads only
- **Unicast** — one shared MAC; needs 2nd NIC for host-to-host
- **Multicast** — preserves MACs; may flood switches
- **IGMP Multicast** — switch-snooping reduces flood
- **Drainstop** — graceful disconnect

🚨 NLB is NOT for SQL / Exchange / DCs — those need Failover Cluster or Always On AG.

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:
- ✅ "Use an AD-integrated zone for multi-master writes"
- ✅ "Use a stub zone when the remote NS list changes"
- ✅ "Use a conditional forwarder for stable partner DNS"
- ✅ "Use DNS Policies with zone scopes for split-horizon or geo"
- ✅ "Authorize the DHCP server in AD"
- ✅ "Hot Standby for asymmetric branch DHCP; Load Balance for parity HQ"
- ✅ "Use a Connection Security Rule with GPO for domain isolation"

Usually **wrong**:
- ❌ "Scavenging is on by default"
- ❌ "DNSSEC encrypts responses"
- ❌ "Conditional forwarders auto-refresh NS lists"
- ❌ "DHCP works without AD authorization"
- ❌ "NLB is the right choice for SQL HA"
- ❌ "IPAM runs on a DC"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Single DNS server per site (no resilience)
- ❌ Scavenging left off for years → bloated zones
- ❌ One DHCP server (no failover plan)
- ❌ All Public-profile inbound rules (likely a misconfig)
- ❌ NLB attempting stateful workloads

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| Multi-master DNS writes | AD-integrated zone |
| Resolve a fluid remote zone | Stub zone |
| Resolve a stable partner zone | Conditional forwarder |
| Single-label name resolution forest-wide | GlobalNames Zone |
| Geographic-aware DNS responses | DNS Policy + client subnet + zone scope |
| Defeat DNS cache poisoning | DNSSEC (sign + DS + trust anchor) |
| HA DHCP at HQ with equal servers | Failover Load Balance |
| HA DHCP at branch with tiny standby | Failover Hot Standby |
| Track DHCP/DNS/AD across forest centrally | IPAM (NOT on a DC) |
| Restrict server access to domain-joined hosts | WFAS Connection Security Rule (domain isolation) via GPO |
| Distribute traffic across stateless web servers | NLB (2–32 nodes) |
| Push proxy settings via DHCP | Option 252 (WPAD) |

---

## ✏️ Quick Self-Check

1. AD-integrated zone benefits vs file-based primary? ___
2. DNSSEC components — KSK / ZSK / DS / RRSIG? ___
3. Conditional forwarder vs stub zone — which auto-refreshes? ___
4. DHCP failover modes and MCLT default? ___
5. WFAS three profiles + default Domain inbound action? ___
6. Why NLB doesn't work for SQL HA? ___

---

➡️ [Module 4: File Servers, Storage & Storage Spaces](../Module-04-File-Storage/Reading.md)
