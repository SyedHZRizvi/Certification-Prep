# ✏️ Module 3 Quiz: Networking, DNS & DHCP

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Which DNS zone type provides MULTI-MASTER write capability across all DCs? *(Remember)*
A. Primary file-based
B. Secondary
C. Stub
D. AD-integrated primary

---

### Q2. The DNS record type that resolves a service to its hostname AND port (e.g., `_ldap._tcp.dc._msdcs.contoso.com`) is: *(Remember)*
A. A
B. AAAA
C. CNAME
D. SRV

---

### Q3. DNSSEC's "DS" record is published in: *(Understand)*
A. The signed zone itself
B. The parent zone, anchoring trust
C. The TXT zone-info record
D. Every NS record set

---

### Q4. To prevent zone-walking enumeration in DNSSEC, use: *(Remember)*
A. NSEC
B. NSEC3
C. RRSIG
D. KSK

---

### Q5. The default settings for DNS scavenging are: *(Remember)*
A. Enabled, 7/7/7 days (no-refresh / refresh / scavenge interval)
B. Disabled by default
C. Enabled, 30/30/30 days
D. Disabled, 14/14/14 days when enabled

---

### Q6. To resolve a partner's domain whose name servers change every quarter, the BEST choice is: *(Apply)*
A. Conditional forwarder
B. Stub zone
C. Static A records
D. WINS

---

### Q7. To resolve a fixed partner domain whose NS list rarely changes, the BEST choice is: *(Apply)*
A. Conditional forwarder
B. Stub zone
C. Secondary zone
D. Global Names Zone

---

### Q8. A DHCP server begins handing out APIPA addresses after deployment. The MOST likely cause is: *(Analyze)*
A. Scope not active
B. DHCP server NOT AUTHORIZED in AD
C. MCLT misconfigured
D. Conditional forwarder missing

---

### Q9. DHCP Failover in LOAD BALANCE mode means: *(Remember)*
A. One server primary, one server standby
B. Both servers active, default 50/50 split
C. One server runs all leases until MCLT
D. Scopes are mirrored read-only

---

### Q10. DHCP Failover **Maximum Client Lead Time (MCLT)** default is: *(Remember)*
A. 5 minutes
B. 15 minutes
C. 1 hour
D. 4 hours

---

### Q11. **Yes/No** — Mark each statement. *(Evaluate)*

**S1:** DNS scavenging is enabled by default on AD-integrated zones.
**S2:** A conditional forwarder is configured at the DNS server level, not within a zone.
**S3:** DNSSEC encrypts DNS responses for confidentiality.

A. No / Yes / No
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / No / Yes

---

### Q12. IPAM cannot be installed on a: *(Remember)*
A. Member server
B. Domain controller
C. Windows Server 2022 Core
D. Hyper-V host

---

### Q13. The MAXIMUM number of DHCP servers a single IPAM instance can manage is approximately: *(Remember)*
A. 50
B. 150
C. 500
D. 1,000

---

### Q14. Windows Firewall with Advanced Security has the following three profiles: *(Remember)*
A. Internal, External, DMZ
B. Domain, Private, Public
C. Trusted, Untrusted, Guest
D. Production, Test, Dev

---

### Q15. The Windows Firewall **Domain profile default INBOUND action** is: *(Understand)*
A. Allow all
B. Block unless allowed
C. Prompt user
D. Log only

---

### Q16. Network Load Balancing (NLB) supports a maximum of how many nodes? *(Remember)*
A. 4
B. 8
C. 16
D. 32

---

### Q17. Which NLB mode uses ONE shared MAC for all hosts (potentially blocking host-to-host without a second NIC)? *(Understand)*
A. Unicast
B. Multicast
C. IGMP Multicast
D. Anycast

---

### Q18. **Order these steps** to deploy DHCP Failover in Load Balance mode. *(Create)*

1. Install DHCP role on Server2 and authorize it in AD
2. Verify Server1 healthy and scope active
3. Configure failover relationship from Server1 → Server2
4. Test by stopping DHCP service on Server1; confirm Server2 keeps leasing

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 1 → 3 → 2 → 4
D. 3 → 1 → 2 → 4

---

### Q19. The DHCP option number for "DNS Server" is: *(Remember)*
A. 003
B. 006
C. 015
D. 044

---

### Q20. The DHCP option number for "Default Gateway / Router" is: *(Remember)*
A. 003
B. 006
C. 015
D. 042

---

### Q21. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** A stub zone holds the NS, SOA, and glue A records of the target zone — auto-refreshing.
**S2:** GlobalNames Zone resolves single-label names across the forest.
**S3:** A primary file-based zone supports multi-master writes.

A. Yes / Yes / No
B. No / Yes / No
C. Yes / No / Yes
D. Yes / Yes / Yes

---

### Q22. A connection security rule in WFAS is used for: *(Understand)*
A. Anti-spam filtering
B. IPsec authentication/encryption (e.g., domain isolation)
C. Disabling specific apps
D. Replacing the BFE service

---

### Q23. Which scenario is BEST solved with a DNS POLICY (zone scope), not a separate zone? *(Apply)*
A. Pointing all internal users to `intranet-www`
B. Resolving a partner's domain
C. Returning a different IP to EU vs US users for `www.contoso.com`
D. Caching all queries

---

### Q24. **Yes/No** — Mark each statement. *(Apply)*

**S1:** NLB is the right choice to load-balance an SQL Always-On AG listener.
**S2:** NLB Drainstop gracefully completes existing connections before going offline.
**S3:** NLB IGMP Multicast requires switch support to avoid flooding.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. Yes / No / Yes
D. No / Yes / No

---

### Q25. To force a Windows client to immediately re-register its A/PTR records in DNS, run: *(Apply)*
A. `ipconfig /flushdns`
B. `ipconfig /registerdns`
C. `net stop dnscache`
D. `Resolve-DnsName -Refresh`

---

### Q26. A 200-device branch needs DHCP HA without buying a second beefy server. The right failover mode is: *(Apply)*
A. Load Balance with two equally-sized servers
B. Hot Standby with the smaller server as standby
C. Split-scope 80/20
D. NLB-fronted DHCP

---

## 🎯 Answers + Explanations

### Q1: **D. AD-integrated primary**
AD-integrated zones store data in AD and any DC with DNS can accept writes. File-based primaries are single-master.

### Q2: **D. SRV**
SRV records carry service + protocol + port. AD's _msdcs hierarchy is entirely SRV-driven.

### Q3: **B. The parent zone, anchoring trust**
The DS record at the parent is the cryptographic anchor — resolvers chain trust through DS records up to a configured trust anchor (typically the root).

### Q4: **B. NSEC3**
NSEC3 hashes names to prevent enumeration of the zone (zone-walking). NSEC reveals next-name in canonical order — easier to enumerate.

### Q5: **B. Disabled by default**
A common gotcha. Must be explicitly enabled, then 7/7/7 days are the default intervals.

### Q6: **B. Stub zone**
Stub zones auto-refresh their NS list — better for dynamic remote topologies.

### Q7: **A. Conditional forwarder**
Conditional forwarders are static and simplest for stable partner zones.

### Q8: **B. DHCP server NOT AUTHORIZED in AD**
DHCP refuses to lease until authorized in AD. Event ID 1059 ("rogue server") often appears.

### Q9: **B. Both servers active, default 50/50 split**
Load Balance is active/active. Hot Standby is active/standby.

### Q10: **C. 1 hour**
MCLT is the wait before a partner takes over. Configurable; 1 hr is default.

### Q11: **A. No / Yes / No**
S1 wrong (scavenging is OFF by default). S2 correct. S3 wrong (DNSSEC signs for integrity/auth; encryption is DoH/DoT).

### Q12: **B. Domain controller**
IPAM explicitly cannot run on a DC. Use a member server.

### Q13: **B. 150**
Per IPAM server: ~150 DHCP, ~500 DNS, ~1M IPs.

### Q14: **B. Domain, Private, Public**
The three WFAS profiles.

### Q15: **B. Block unless allowed**
Default Domain profile inbound = block; outbound = allow.

### Q16: **D. 32**
NLB supports 2–32 nodes per cluster.

### Q17: **A. Unicast**
Unicast collapses all NICs to one MAC, breaking host-to-host without a secondary NIC. Multicast preserves per-host MACs but can flood switches.

### Q18: **B. 2 → 1 → 3 → 4**
Confirm Server1 healthy first, then add Server2, then pair them, then test failover.

### Q19: **B. 006**
Option 006 = DNS Server. Memorize the top 6 options.

### Q20: **A. 003**
Option 003 = Router (default gateway).

### Q21: **A. Yes / Yes / No**
S1 and S2 correct; S3 wrong (file-based primary is single-master).

### Q22: **B. IPsec authentication/encryption (e.g., domain isolation)**
Connection Security Rules are how WFAS expresses IPsec policies.

### Q23: **C. Returning a different IP to EU vs US users for `www.contoso.com`**
DNS Policies (with zone scopes + client subnets) handle geo-aware responses without separate zones.

### Q24: **A. No / Yes / Yes**
S1 wrong — NLB is for stateless workloads only; SQL AG listener uses an AG-listener IP that's typically fronted by a Failover Cluster IP resource, not NLB. S2 and S3 correct.

### Q25: **B. `ipconfig /registerdns`**
Forces the client's DHCP/static A/PTR registration immediately.

### Q26: **B. Hot Standby with the smaller server as standby**
Hot Standby fits the asymmetric-hardware branch use case. Load Balance assumes parity.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Networking domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read DNS + DHCP + WFAS sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- AD-integrated zones = multi-master; file-based primary = single-master
- DNSSEC components: KSK, ZSK, DS, RRSIG, NSEC3
- Conditional forwarder = static; stub zone = dynamic NS auto-refresh
- DNS scavenging OFF by default; 7/7/7 typical
- DHCP must be authorized in AD; Event 1059 if rogue
- DHCP failover MCLT = 1 hr default
- DHCP option codes: 003 router, 006 DNS, 015 domain name
- WFAS three profiles: Domain/Private/Public; domain inbound = block
- NLB 2–32 nodes, layer-4, stateless only
- IPAM: 150 DHCP, 500 DNS, 1M IPs per server; NOT on a DC

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 4](../Module-04-File-Storage/Reading.md)
