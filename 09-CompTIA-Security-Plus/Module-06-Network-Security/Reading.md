# Module 6: Network Security 🌐

> **Why this module matters:** Network security spans firewalls, IDS/IPS, VPNs, segmentation, and secure protocols — collectively the bulk of Domain 3 (Security Architecture, 18%). PBQs love network diagrams: "drag the firewall, IDS, jump server into the right zone." Get this module right and you'll ace those.

---

## 🍕 A Story: The Office Building With Three Lobbies

Picture a tech company HQ.

The building has **three lobbies**: a public lobby where visitors check in (the **DMZ / screened subnet**), an employee-only lobby that requires a badge (the **internal network**), and a vault lobby that requires a badge AND a biometric scan AND a manager escort (the **secure zone / management network**).

Now the building has multiple **guards**:
- A guard at the front entrance who checks badges and lets people through (**stateful firewall**)
- A guard who watches the lobby on cameras but doesn't physically stop anyone — they radio for help (**IDS** — detection only)
- A guard who watches AND can lock doors automatically (**IPS** — prevention)
- A guard who specifically watches the website kiosk for malicious behavior (**WAF**)
- A receptionist who hands out conference room numbers (**load balancer**)
- A locked tunnel between two buildings for confidential mail (**VPN**)

Every layer doing one job, layered together — that's defense in depth and network segmentation. The rest of this module is which appliance, which protocol, which port.

---

## 🔥 Firewalls

### Firewall Types

| Type | Layer | What it does |
|------|-------|--------------|
| **Packet filter (stateless)** | L3/L4 | Inspect each packet against rules; no connection memory |
| **Stateful firewall** | L3/L4 | Tracks connections (3-way handshake); allows reply traffic automatically |
| **Application-layer (L7)** | L7 | Inspects HTTP, DNS, SMB content |
| **Next-Generation Firewall (NGFW)** | L3–L7 | Stateful + L7 + IPS + identity awareness + TLS inspection |
| **WAF (Web Application Firewall)** | L7 (web only) | Protects web apps from OWASP attacks (SQLi, XSS) |
| **UTM (Unified Threat Management)** | L3–L7 | NGFW + antivirus + URL filtering + spam in one box |
| **Host-based firewall** | endpoint | Per-machine rules (Windows Firewall, iptables) |

### Firewall Rules
- **Implicit deny** at the bottom — anything not explicitly allowed is blocked
- **Allow / deny / log** actions
- **Top-down evaluation** — first match wins
- **Most specific first, broadest last**

### Important port numbers Sec+ tests heavily

| Service | Port | Notes |
|---------|------|-------|
| FTP | 20 (data) / 21 (control) | Insecure |
| **SFTP** | 22 (SSH) | Secure file transfer over SSH |
| **FTPS** | 990 (or 21 + 989) | FTP over TLS — different from SFTP! |
| SSH / SCP | 22 | Secure remote shell |
| Telnet | 23 | Insecure — never on internet |
| SMTP | 25 (plain) / 587 (submission) / 465 (SMTPS) | |
| DNS | 53 (UDP/TCP) | |
| **DNSSEC** | 53 | DNS with signatures (integrity, not confidentiality) |
| HTTP / **HTTPS** | 80 / 443 | |
| POP3 / POP3S | 110 / 995 | |
| **NTP** | 123 UDP | Time sync (Kerberos depends!) |
| **NetBIOS / SMB** | 137-139 / 445 | Windows file share |
| IMAP / IMAPS | 143 / 993 | |
| **LDAP / LDAPS** | 389 / 636 | |
| **Kerberos** | 88 | TCP/UDP |
| **RDP** | 3389 | |
| **SNMP / SNMPv3** | 161 / 162 | Use v3 for encrypted/authenticated |
| **Syslog** | 514 UDP / 6514 TCP TLS | |
| **RADIUS** | 1812/1813 UDP | |
| **TACACS+** | 49 TCP | |
| **TFTP** | 69 UDP | Insecure file transfer |
| MS SQL | 1433 | |
| MySQL | 3306 | |
| PostgreSQL | 5432 | |
| Redis | 6379 | |
| MongoDB | 27017 | |

🚨 **Sec+ trap:** **SFTP ≠ FTPS.** SFTP is file transfer over SSH (port 22). FTPS is FTP wrapped in TLS (port 990 or 21+989).

---

## 🛡️ IDS vs IPS

| | IDS (Detection) | IPS (Prevention) |
|---|---|---|
| Action | **Alerts** | **Blocks** |
| Placement | Out-of-band (SPAN/TAP) | Inline |
| Risk if it fails | Misses alert | Drops legit traffic (false positive = outage) |
| Modes | Signature-based, anomaly-based, behavior-based | Same |

### Detection methodologies
- **Signature-based** — known patterns/IOCs (fast, no false positives but can't catch new threats)
- **Anomaly-based** — baseline + deviation (catches zero-days but noisy)
- **Behavior-based / heuristic** — looks at action sequences

### Host vs Network
- **NIDS / NIPS** — network-wide; placed at chokepoints
- **HIDS / HIPS** — on the endpoint; sees encrypted traffic decrypted

---

## 🏗️ Network Architecture Patterns

### Zones

```
INTERNET
   │
[Edge router + Firewall]
   │
   ├── DMZ / Screened Subnet  ← Public-facing: web, email, DNS
   │
   ├── Internal Network        ← Employee workstations
   │
   ├── Management Network      ← Admin/jump servers
   │
   └── Secure Zone / Data Tier ← DB servers, secrets, HSMs
```

| Zone | Purpose |
|------|---------|
| **DMZ / screened subnet** | Public-internet-reachable services live here, isolated from internal |
| **Internal** | Employee LAN |
| **Management network** | Out-of-band admin access (jump servers live here) |
| **Secure / restricted zone** | Crown jewels — DB, HSM, financial systems |
| **Extranet** | B2B partner-facing segment |
| **Intranet** | Internal employee web/portal |
| **Guest network** | Visitors, BYOD, IoT — isolated from corporate |

### Segmentation vs Microsegmentation
- **Segmentation** = network broken into zones via VLANs / subnets / firewalls (coarse-grained)
- **Microsegmentation** = per-workload firewall (often via host agents or SDN); each VM/container has its own allow-list

### SDN (Software-Defined Networking)
- Decouples **control plane** (decision-making) from **data plane** (packet forwarding)
- Programmable; supports automated micro-segmentation
- Used in cloud, VMware NSX, Cisco ACI

### Jump Server / Bastion Host
- Hardened single entry point for admin access
- All SSH/RDP into the secure zone must go through it
- Detailed logging + MFA + session recording

### Other appliances
- **Proxy server (forward)** — clients route outbound through it (caching, URL filtering)
- **Reverse proxy** — sits in front of servers (TLS termination, load balancing, hide backend topology)
- **Load balancer** — distributes traffic (L4 vs L7); algorithms: round-robin, least-connections, IP hash
- **Sensor / collector** — passive traffic collection (NetFlow, sFlow, packet capture)
- **Network TAP / SPAN port** — copies traffic for monitoring without affecting it

---

## 🔐 Secure Protocols (the must-memorize port + purpose grid)

| Insecure → | Use instead → | Port |
|------------|---------------|------|
| FTP | SFTP / FTPS | 22 / 990 |
| Telnet | SSH | 22 |
| HTTP | HTTPS | 443 |
| POP3 / IMAP | POP3S / IMAPS | 995 / 993 |
| SMTP plaintext | SMTPS / STARTTLS | 465 / 587 |
| LDAP | LDAPS | 636 |
| SNMPv1/v2 | **SNMPv3** | 161/162 |
| Syslog (UDP) | Syslog over TLS | 6514 |
| DNS | **DNSSEC** (integrity) + **DNS over TLS / HTTPS** (privacy) | 53, 853, 443 |

### Email security trio (memorize)
- **SPF** (Sender Policy Framework) — DNS TXT record listing allowed sending IPs
- **DKIM** (DomainKeys Identified Mail) — cryptographic signature on outbound email
- **DMARC** — policy that combines SPF + DKIM results; tells receivers what to do with failures (none / quarantine / reject)

🎯 **Exam:** "How to prevent your domain from being spoofed in BEC?" → **SPF + DKIM + DMARC**.

---

## 🛜 802.1X & Network Access Control (NAC)

**802.1X** — port-based network access control. A device connecting to a switch port or Wi-Fi AP must authenticate before getting access.

Players:
- **Supplicant** — the connecting client
- **Authenticator** — the switch/AP (relays only)
- **Authentication Server** — RADIUS server that decides

EAP variants for 802.1X:
| EAP type | Notes |
|----------|-------|
| **EAP-TLS** | Mutual cert-based; strongest, most complex |
| **PEAP** | Server cert + inner password (MS-CHAPv2) |
| **EAP-TTLS** | Similar to PEAP, more flexible inner methods |
| **EAP-FAST** | Cisco; tunneled credentials |

**NAC** (Network Access Control) goes further: checks **posture** (patch level, EDR running, disk encryption) before allowing on. Non-compliant device → quarantine VLAN with remediation server.

### Port security (switch-level)
- **Sticky MAC** — first MAC seen is bound to the port
- **MAC filtering** — explicit allow-list
- **Disable unused ports** — basic hygiene
- **DHCP snooping** — blocks rogue DHCP servers
- **Dynamic ARP Inspection (DAI)** — validates ARP messages against DHCP binding table
- **BPDU Guard / Root Guard** — protect STP from manipulation

---

## 🚇 VPN Types

### By topology

| Type | Use case |
|------|----------|
| **Site-to-site VPN** | Connect two LANs (HQ ↔ branch) permanently |
| **Remote access VPN** | Individual user from anywhere → corporate network |
| **Always-on VPN** | Auto-connects when off corporate net |
| **Clientless / SSL VPN** | Browser-only (HTTPS gateway, no installed client) |
| **Split tunnel** | Only corp-bound traffic via VPN; rest goes direct |
| **Full tunnel** | All traffic via VPN |

🎯 **Trap:** Split tunneling = better performance, **worse security** (DLP/IDS sees less traffic).

### By protocol

| Protocol | Notes |
|----------|-------|
| **IPSec** | IP-layer; modes: **Tunnel** (whole packet encrypted, common for site-to-site) vs **Transport** (only payload, common for host-to-host) |
| **IKE / IKEv2** | Internet Key Exchange — sets up IPSec SAs |
| **TLS VPN / SSL VPN** | Application-layer; HTTPS-based; clientless option |
| **L2TP/IPSec** | Older Windows |
| **PPTP** | ❌ Broken; never use |
| **WireGuard** | Modern, simple, fast; ChaCha20+Poly1305; common for new deployments |
| **OpenVPN** | TLS-based, widely deployed |

### IPSec components
- **AH (Authentication Header)** — integrity + authentication (NOT confidentiality)
- **ESP (Encapsulating Security Payload)** — confidentiality + integrity + auth
- **SA (Security Association)** — agreed parameters for one direction
- **Phase 1 vs Phase 2** of IKE — Phase 1 sets up IKE SA; Phase 2 sets up IPSec SAs

---

## 🌐 DNS Security

| Feature | Provides |
|---------|----------|
| **DNSSEC** | Integrity (signed records) — does NOT encrypt |
| **DoT** (DNS over TLS, port 853) | Privacy of queries |
| **DoH** (DNS over HTTPS, port 443) | Privacy + bypasses some filters |
| **DNS sinkhole** | Resolves bad domains to a controlled IP (blocking malware C2) |

---

## 🌉 Other Architectures

| Concept | Notes |
|---------|-------|
| **Out-of-band (OOB) management** | Separate physical network for admin access |
| **High availability (HA)** | Active/passive or active/active failover |
| **Load balancing modes** | Layer 4 (TCP) vs Layer 7 (HTTP-aware); sticky sessions (affinity) |
| **Air gap** | Physical isolation (no network connection) — for the most sensitive systems |
| **Honeypot / Honeynet** | Decoy system/network designed to lure attackers |
| **Deception technology** | Modern honeypot — false credentials, files, hosts to trick attackers |
| **Tunneling (good)** | VPNs, SSH tunnels — encryption for legitimate use |
| **Tunneling (attacker)** | DNS tunneling, ICMP tunneling — exfil via "innocent" protocols |
| **NAT / PAT** | Network/Port Address Translation — many private IPs share a public IP |
| **NAT traversal** | Techniques like STUN to get through NAT for P2P |

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** Your company has 3 web servers, 2 DB servers, a corporate file server, a CFO's laptop, and a partner extranet portal. You're given a blank diagram with these zones: Internet, DMZ, Internal, Secure Zone, Extranet. Place each appliance/system correctly.

**Walkthrough:**

| System | Zone | Why |
|--------|------|-----|
| 3 web servers | **DMZ** (behind a reverse proxy + WAF) | Public-facing |
| 2 DB servers | **Secure Zone** | Reached only by web tier on specific ports |
| Corporate file server | **Internal** | Employees access; not public |
| CFO's laptop | **Internal** | Workstation |
| Partner extranet portal | **Extranet** | Distinct from DMZ; partner auth required |
| **Jump server** | **Management network** | All admin SSH/RDP transits through it |
| **WAF** | between Internet and DMZ web tier | Web app filter |
| **NIDS sensor** | SPAN port on DMZ switch + internal core | Visibility at chokepoints |
| **NGFW** | between every zone | Stateful + L7 controls |

A real PBQ might pre-place some boxes and let you drag the rest, scoring placement of each.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "SFTP is FTP over SSL" | NO — SFTP is over **SSH** (port 22). FTPS is FTP over TLS. |
| "IDS prevents attacks" | NO — IDS only **detects**. IPS prevents. |
| "Web servers should be in the internal zone" | NO — they belong in the **DMZ / screened subnet**. |
| "Split tunneling is more secure than full tunneling" | Backwards — split tunneling is faster but less monitored. |
| "SNMP is secure by default" | Only SNMPv3 has encryption + authentication. v1/v2c send strings in cleartext. |
| "PPTP is fine for VPN" | NO — PPTP is broken; use IKEv2/IPSec, WireGuard, or OpenVPN. |
| "DNSSEC encrypts DNS" | NO — DNSSEC provides **integrity** only. **DoT/DoH** encrypt. |
| "A firewall replaces an IDS" | They overlap but aren't substitutes. NGFWs combine them. |
| "VLANs are a hard security boundary" | VLAN hopping exists; for high security use physical separation or microsegmentation. |
| "WAF replaces a firewall" | NO — WAF protects HTTP/S apps specifically; you still need a network firewall. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Stateful firewall / NGFW / WAF / UTM** | Firewall types |
| **IDS vs IPS** | Detect vs prevent |
| **HIDS / NIDS, HIPS / NIPS** | Host vs network |
| **Signature- vs anomaly-based detection** | Two detection methodologies |
| **DMZ / screened subnet** | Public-facing isolated zone |
| **Microsegmentation** | Per-workload allow-listing |
| **SDN** | Software-Defined Networking; separates control and data plane |
| **Jump server / bastion** | Hardened admin entry point |
| **Forward / reverse proxy** | Client-side vs server-side proxy |
| **Load balancer (L4 / L7)** | Distributes traffic |
| **SPF / DKIM / DMARC** | Email anti-spoofing trio |
| **802.1X (Supplicant/Authenticator/AS)** | Port-based NAC |
| **NAC + posture** | Network Access Control with health checks |
| **Site-to-site / remote-access VPN** | VPN topologies |
| **IPSec (AH/ESP, Tunnel/Transport, IKE)** | IP-layer VPN protocol |
| **TLS / SSL VPN** | App-layer VPN |
| **Split vs full tunnel** | Routing scope of VPN traffic |
| **DNSSEC / DoT / DoH** | DNS security options |
| **Sinkhole / honeypot / deception** | Attacker-luring tools |
| **OOB management** | Separate admin network |

### Acronyms cheat-row (Module 6)
| Acronym | Meaning |
|---------|---------|
| NGFW / WAF / UTM | Next-Gen Firewall / Web App FW / Unified Threat Mgmt |
| IDS / IPS / NIDS / NIPS / HIDS / HIPS | Detection / Prevention systems |
| DMZ | Demilitarized Zone (also "screened subnet") |
| SDN | Software-Defined Networking |
| ACL | Access Control List |
| NAC | Network Access Control |
| EAP / PEAP / EAP-TLS / EAP-TTLS | 802.1X auth methods |
| SPF / DKIM / DMARC | Email anti-spoofing |
| VPN / SSL-VPN / TLS-VPN | Virtual Private Network types |
| IPSec / AH / ESP / IKE / IKEv2 / SA | IPSec components |
| L2TP / PPTP / OpenVPN / WireGuard | VPN protocols |
| TLS / SSL / HTTPS | Web transport security |
| DNSSEC / DoT / DoH | Secure DNS |
| SNMPv3 | Secure SNMP |
| RADIUS / TACACS+ | AAA protocols |
| NetFlow / sFlow / IPFIX | Flow data formats |
| NAT / PAT | Address translation |
| BPDU / STP / DAI | Switch security |

---

## ✅ Module 6 Summary

You now know:
- 🔥 The **firewall taxonomy** (stateful, NGFW, WAF, UTM, host-based) and rule evaluation
- 🛡️ **IDS vs IPS**, signature vs anomaly detection, where each is placed
- 🏗️ **Network zones** (DMZ, internal, secure, management, extranet), segmentation, microsegmentation, SDN
- 🔐 The **secure protocol** ↔ port grid and SFTP vs FTPS distinction
- 📧 **SPF/DKIM/DMARC** for email
- 🛜 **802.1X** + NAC + port-security features
- 🚇 **VPN** topologies and protocols, IPSec internals, split vs full tunneling
- 🌐 **DNS security** (DNSSEC vs DoT/DoH)
- 🌉 OOB management, jump servers, honeypots, deception tech

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md) — use this for port memorization
4. ➡️ [Module 7 — Endpoint, Mobile & Cloud Security](../Module-07-Endpoint-Mobile-Cloud-Security/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [NIST SP 800-41 — Firewall Guide](https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final)
- 📖 [NIST SP 800-77 — IPsec VPNs](https://csrc.nist.gov/publications/detail/sp/800-77/rev-1/final)
- 📖 [Cloudflare Learning: DNS Security](https://www.cloudflare.com/learning/dns/dns-security/)
- 📖 [SANS Network Architecture: Defensible Network Design](https://www.sans.org/white-papers/)
