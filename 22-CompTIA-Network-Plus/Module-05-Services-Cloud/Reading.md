# Module 5: Network Services & Cloud Connectivity 🗂️

> **Why this module matters:** DNS (Domain Name System) and DHCP (Dynamic Host Configuration Protocol) are the **two services every network on Earth runs**. Without them, the Internet doesn't work and your laptop can't get an IP. The exam tests DNS record types, DHCP scopes, and the supporting services (NTP, FTP (File Transfer Protocol) variants, SMTP (Simple Mail Transfer Protocol), file transfer) on roughly 15 questions. The cloud-connectivity additions (VPN (Virtual Private Network), Direct Connect, ExpressRoute, SD-WAN (Wide Area Network)) are newer to the N10-009 blueprint, expect ~5 more questions there.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–3 (OSI, IP addressing, routing)
> - The concept of client/server interaction
> - Why port numbers exist (Module 1)

---

## ☎️ A Story: The Address Book That Runs the Internet

When you call your mom, you tap her name in your contacts, your phone looks up the number. Now imagine if every time someone changed their phone number, every contact book on Earth had to be updated manually. That would be chaos.

That's exactly what life would be without DNS. Computers route by IP address `142.250.190.78` but humans remember names, `google.com`. Without a system mapping names to addresses, the Internet stops being usable. DNS is the **distributed address book of the Internet**, queried billions of times per second, never quite synchronous, and the source of more help-desk tickets than any other system.

This module covers DNS in depth, then DHCP (how your device even *gets* an IP), then the smaller-but-still-tested services (NTP, FTP family, SMTP/IMAP (Internet Message Access Protocol)/POP3 (Post Office Protocol 3)), then the modern cloud-connectivity options that bridge enterprise data centers to AWS (Amazon Web Services)/Azure/GCP (Google Cloud Platform).

---

## 🌐 DNS, The Domain Name System

Defined in **RFC 1034** and **RFC 1035** (Paul Mockapetris, 1987). DNS translates human-readable names (`example.com`) to IP addresses (`93.184.216.34`) and provides other lookup services (mail server discovery, certificate validation hints, anti-spam).

### How a DNS query works (top-down resolution)

1. Browser asks the OS's **stub resolver** for `www.example.com`
2. Stub resolver asks its configured **recursive resolver** (often the ISP (Internet Service Provider)'s, or 1.1.1.1, 8.8.8.8)
3. If recursive resolver doesn't have it cached, it queries:

   - A **root server** (.), "Who handles .com?"
   - A **TLD server** (.com), "Who handles example.com?"
   - An **authoritative server** for example.com, "What's the A record for www?"
4. Recursive resolver caches the answer (respecting TTL) and returns it to the stub resolver
5. The browser opens a TCP (Transmission Control Protocol) connection to the returned IP

Total round-trip: ~10–100 ms for a fresh query; <1 ms for a cached one.

### DNS port and transport

- **UDP (User Datagram Protocol)/53** for most queries and responses (faster, stateless)
- **TCP/53** for zone transfers between authoritative servers AND for responses >512 bytes (some DNSSEC responses, large TXT records)

🚨 **Trap on the exam:** When asked about *zone transfers*, the answer is **TCP/53**, not UDP/53.

### DNS record types, MEMORIZE COLD

| Record | What it maps | Example use |
|--------|--------------|-------------|
| **A** | Hostname → IPv4 | `www.example.com → 93.184.216.34` |
| **AAAA** | Hostname → IPv6 | `www.example.com → 2606:2800:220:1::1` |
| **CNAME** | Hostname → another hostname (alias) | `www.example.com → example.com` |
| **MX** | Domain → mail server (with priority) | `example.com → 10 mail.example.com` |
| **PTR** | IP → hostname (reverse) | `34.216.184.93.in-addr.arpa → www.example.com` |
| **NS** | Names of authoritative name servers | `example.com → ns1.example.com` |
| **SOA** | Start of Authority, zone metadata (serial, refresh, expire) | One per zone |
| **TXT** | Free-form text, used for SPF, DKIM, DMARC, domain verification | `"v=spf1 include:_spf.google.com -all"` |
| **SRV** | Service location (host + port) for SIP, AD (Active Directory), XMPP | `_sip._tcp.example.com → 10 5 5060 sipserver.example.com` |

### Anti-spam TXT records (frequently tested)

| Record | What it provides |
|--------|------------------|
| **SPF** (Sender Policy Framework) | "These IPs are allowed to send mail for my domain" |
| **DKIM** (DomainKeys Identified Mail) | Email signed with the sender's domain private key; receiver verifies via public key in DNS |
| **DMARC** (Domain-based Message Authentication, Reporting & Conformance) | Tells receivers what to do if SPF/DKIM fails (quarantine, reject, monitor) + report aggregation |

🎯 **Exam pattern:** *"Which record type is queried to find the mail server for a domain?"* → MX. *"Which record provides reverse lookup?"* → PTR. *"Where is SPF data stored?"* → TXT.

### DNS zones and recursion

| Term | Meaning |
|------|---------|
| **Forward zone** | Hostname → IP (the normal direction) |
| **Reverse zone** | IP → hostname (PTR records, lives in `in-addr.arpa` for IPv4 / `ip6.arpa` for IPv6) |
| **Primary (Master)** | Authoritative source of the zone data |
| **Secondary (Slave)** | Copy of zone, sync'd from primary via zone transfer |
| **Recursive resolver** | Walks the DNS hierarchy on behalf of clients; caches results |
| **Authoritative server** | Holds the actual zone data for a domain |
| **Iterative query** | "Tell me what you know; I'll ask the next server" |
| **Recursive query** | "Find me the answer; come back when you have it" |

### DNS over secure transports (newer)

| Standard | Means |
|----------|-------|
| **DoT** (DNS over TLS (Transport Layer Security)) | DNS over TCP/853 wrapped in TLS |
| **DoH** (DNS over HTTPS (HTTP Secure)) | DNS over HTTPS/443 (looks like web traffic, harder to block) |
| **DNSSEC** | Cryptographically signs DNS responses to defeat cache poisoning |

---

## 📥 DHCP, Dynamic Host Configuration Protocol

Defined in **RFC 2131** (Droms, 1997). DHCP automatically assigns IP, mask, gateway, DNS server, and other settings to clients on boot.

### The DORA process

DHCP works via four UDP broadcast/unicast messages:

| Step | Message | From → To | Purpose |
|------|---------|-----------|---------|
| **D** | DISCOVER | Client broadcast | "Is there a DHCP server?" |
| **O** | OFFER | Server → Client (unicast or broadcast) | "I have IP 192.168.1.50 available" |
| **R** | REQUEST | Client broadcast | "I accept IP 192.168.1.50" (broadcast so other servers withdraw their offers) |
| **A** | ACK | Server → Client | "Confirmed; here are your settings" |

**Ports:** Server listens on **UDP 67**. Client uses **UDP 68**.

🧠 **Mnemonic:** **DORA**, Discover / Offer / Request / Acknowledge.

### Key DHCP concepts

| Term | Meaning |
|------|---------|
| **Scope** | Range of IPs the DHCP server can hand out (e.g., 192.168.1.100–192.168.1.200) |
| **Reservation** | Specific IP permanently tied to a specific MAC |
| **Exclusion** | IPs within scope but NOT to be assigned (reserved for static use) |
| **Lease** | Length of time client may use an IP before renewing (default often 8 days or 24 hours) |
| **Option** | Additional config delivered with the IP, option 3 = gateway, option 6 = DNS, option 15 = domain name, option 51 = lease time, option 66 = TFTP server (PXE boot) |
| **DHCP relay (IP helper)** | Forwards DHCP broadcasts across subnets to a central DHCP server (because broadcasts don't cross routers) |
| **DHCPv6** | IPv6 version (RFC 8415); stateful or stateless |

🎯 **Exam pattern:** *"A client gets 169.254.x.x"* → DHCP failed → APIPA. *"DHCP server is on a different subnet"* → need a DHCP relay / IP helper on the router. *"You want a printer to always get the same IP"* → DHCP reservation.

---

## ⏰ NTP, Network Time Protocol

Defined in **RFC 5905** (Mills et al., 2010). NTP synchronizes clocks across the network so logs, certificates, and Kerberos tickets all agree on time.

- **UDP 123**
- **Stratum** levels, stratum 0 = atomic clock / GPS; stratum 1 = directly attached to stratum 0; stratum 2 = synced to stratum 1; …; lower number = more authoritative
- Accuracy: <1 ms on LAN (Local Area Network), ~10–100 ms over Internet
- Public NTP pools: `pool.ntp.org`, `time.google.com`, `time.windows.com`

🚨 **Trap:** Kerberos and most authentication systems require clocks within ~5 minutes. Without NTP, login fails mysteriously.

---

## 📁 File Transfer Family

| Protocol | Port | Encryption | Use |
|----------|------|------------|-----|
| **FTP** | TCP 21 (control), TCP 20 (data, active mode) | **None** | Legacy file transfer |
| **SFTP** | TCP 22 (SSH (Secure Shell)) | Yes (SSH) | Secure file transfer over SSH |
| **FTPS** | TCP 990 (implicit) or 21+explicit AUTH TLS | Yes (TLS) | FTP wrapped in TLS |
| **TFTP** | UDP 69 | None | Switch/router firmware uploads, PXE boot, IoT |
| **SCP** | TCP 22 (SSH) | Yes (SSH) | Simple copy over SSH (less interactive than SFTP) |

**FTP modes:**
- **Active**: server initiates the data connection back to the client (firewall-unfriendly)
- **Passive (PASV)**: client initiates both control and data connections (firewall-friendly; the modern default)

🎯 **Exam pattern:** *"Most secure file transfer for sensitive data?"* → SFTP. *"What does a switch use to download firmware?"* → TFTP.

---

## ✉️ Email Protocols

| Protocol | Port (cleartext) | Port (TLS) | Direction | Notes |
|----------|------------------|------------|-----------|-------|
| **SMTP** | 25 (server-to-server), 587 (submission) | 465 (legacy SMTPS) or STARTTLS on 587 | Outbound from client / between servers | Use 587 + STARTTLS for submission |
| **POP3** | 110 | 995 (POP3S) | Inbound (download + usually delete from server) | Older, "download and disconnect" model |
| **IMAP** | 143 | 993 (IMAPS) | Inbound (sync with server) | Modern, multi-device sync |

🎯 **Exam pattern:** *"Which port for IMAP over SSL (Secure Sockets Layer)/TLS?"* → 993. *"SMTP submission with TLS"* → 587.

---

## 🌐 Web & Remote Access Protocols

| Protocol | Port | Use |
|----------|------|-----|
| **HTTP (Hypertext Transfer Protocol)** | TCP 80 | Cleartext web |
| **HTTPS** | TCP 443 | HTTP over TLS |
| **SSH** | TCP 22 | Encrypted remote shell + SFTP/SCP/tunneling |
| **Telnet** | TCP 23 | **Cleartext** remote shell, never use |
| **RDP** | TCP 3389 | Remote Desktop (Windows) |
| **VNC** | TCP 5900+ | Cross-platform remote desktop |
| **LDAP (Lightweight Directory Access Protocol)** | TCP/UDP 389 | Directory service (Active Directory, OpenLDAP) |
| **LDAPS** | TCP 636 | LDAP over SSL/TLS |
| **Kerberos** | TCP/UDP 88 | Ticket-based authentication |
| **SIP** | UDP/TCP 5060, 5061 (TLS) | VoIP session signaling |
| **RTP** | UDP, dynamic ports | VoIP/video media stream |

🚨 **Trap:** Telnet and FTP send credentials in cleartext. Never appropriate over untrusted networks. The exam-correct replacements are SSH and SFTP.

---

## ☁️ Cloud Connectivity Options

Three main ways to connect an enterprise data center to public cloud (AWS / Azure / GCP):

### 1. Internet VPN (IPsec or SSL/TLS)

- **Cheapest, easiest, fastest to deploy**
- Encrypted tunnel over the public Internet
- Subject to Internet jitter/loss; bandwidth not guaranteed
- Common for SMB workloads, dev/test
- Examples: AWS Site-to-Site VPN, Azure VPN Gateway

### 2. Direct (dedicated) connection

Private circuits bypass the public Internet entirely. Predictable bandwidth, lower latency, often required for compliance.

| Cloud | Service name | Speeds | Notes |
|-------|--------------|--------|-------|
| AWS | **Direct Connect** | 1, 10, 100 Gbps | Via Direct Connect Locations (DXLs) |
| Azure | **ExpressRoute** | 50 Mbps–100 Gbps | Via exchange provider (e.g., Equinix) |
| Google Cloud | **Dedicated Interconnect** / Partner Interconnect | 10 / 100 Gbps | |
| Oracle Cloud | **FastConnect** | 1 / 10 Gbps | |

### 3. SD-WAN (Software-Defined WAN)

Centrally managed overlay across multiple transports (MPLS, broadband Internet, LTE/5G). Intelligently routes each application's traffic based on policy + real-time link conditions.

**Benefits:**
- Replace expensive single-link MPLS with cheaper hybrid links
- Per-application steering (route VoIP via lowest-jitter link; bulk traffic via cheapest)
- Centralized policy management
- Built-in encryption (IPsec under the hood)
- Vendors: Cisco Meraki, VMware VeloCloud, Fortinet, Silver Peak, Versa, Palo Alto Prisma

### 4. SASE (Secure Access Service Edge)

Coined by **Gartner in 2019** as the convergence of SD-WAN + cloud-native security (CASB, ZTNA (Zero Trust Network Access), SWG, FWaaS). Delivers networking + security from the cloud edge, no on-prem appliances.

**Vendors:** Cloudflare One, Zscaler, Netskope, Palo Alto Prisma Access.

🎯 **Exam pattern:** *"What technology bundles SD-WAN with cloud-delivered security?"* → SASE. *"Dedicated low-latency private connection to AWS?"* → Direct Connect.

---

## 🛰️ SDN, Software-Defined Networking

Decouples the **control plane** (decisions) from the **data plane** (forwarding). A central **SDN controller** programs all switches/routers via APIs (OpenFlow, NETCONF, gNMI).

| Plane | Role |
|-------|------|
| **Application plane** | Apps / orchestrators that request network behaviors |
| **Control plane** | Centralized controller (OpenDaylight, ONOS, Cisco ACI controller), decides routes/policies |
| **Data plane** | Switches/routers that *only* forward packets according to controller's rules |
| **Management plane** | Tools that manage devices (SNMP (Simple Network Management Protocol), CLI (Command Line Interface), NETCONF) |

🧠 SDN is to networking what virtualization was to servers, abstract the workload from the hardware, manage centrally.

🎯 **Exam pattern:** *"Which plane does an SDN controller run in?"* → Control plane. *"Which protocol does OpenFlow program?"* → The data plane (forwarding tables on switches).

---

## 🔬 Scenario Walkthrough, Email Not Delivering

> **Scenario:** Marketing sends a promotion to 50,000 customers. About 30% of emails bounce or land in spam. Investigation shows recipients' mail servers report "SPF check failed" and "DMARC alignment failure." What's wrong, layer by layer?

**Walkthrough:**
1. **SPF (TXT record)** at `_marketing.example.com` lists which IPs can send for the domain. The new email sending platform's IPs aren't in the SPF, receivers see mail from an unauthorized sender → SPF fail.
2. **DKIM**: outbound mail isn't being signed with a private key matching the public key in DNS, receivers can't verify the message wasn't tampered.
3. **DMARC** policy (`p=quarantine` or `p=reject`) tells receivers to filter or drop mail that fails SPF and DKIM. With both failing, recipients silently quarantine or reject.
4. **Resolution:**
   - Add the new sending platform's IPs to SPF: `v=spf1 ip4:198.51.100.0/24 include:_spf.google.com -all`
   - Configure DKIM signing on the sending platform; publish the public-key TXT record at `selector._domainkey.example.com`
   - Verify DMARC policy and start with `p=none` while debugging, then `p=quarantine` → `p=reject`
   - Use `https://mxtoolbox.com/` or `dig` to verify records propagate

This is a high-impact PBQ scenario, N10-009 increasingly tests email anti-spam DNS literacy.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "DNS only uses UDP" | UDP 53 for queries; **TCP 53 for zone transfers and large responses**. |
| "CNAME can point to an IP" | NO, CNAMEs point to another *hostname*. Use A or AAAA for IPs. |
| "MX records have a path/URL" | NO, MX has a **priority + hostname**. Mail servers try lower priority first. |
| "DHCP is only IPv4" | DHCPv6 (RFC 8415) exists for IPv6, stateful or stateless. |
| "FTP is fine if you're behind a firewall" | FTP active mode is broken by most firewalls; passive mode helps but FTP is still cleartext. Use SFTP for security. |
| "SMTP is for receiving email" | SMTP is for **sending**. POP3/IMAP retrieve. |
| "SD-WAN replaces all firewalls" | SD-WAN provides connectivity; you still need firewalls. **SASE** is the convergence. |
| "Direct Connect is encrypted" | NO, Direct Connect is a private circuit; not encrypted by default. Layer IPsec on top for encryption-at-the-edge. |
| "SDN means no physical hardware" | SDN still needs forwarding hardware (switches/routers); it just centralizes the decision-making. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **DNS** | Domain Name System, name ↔ IP and more |
| **Recursive resolver** | Walks DNS hierarchy on client's behalf |
| **Authoritative server** | Holds the actual zone data |
| **A / AAAA** | IPv4 / IPv6 forward record |
| **CNAME** | Alias (hostname → hostname) |
| **MX** | Mail eXchange, points to mail servers (with priority) |
| **PTR** | Reverse lookup (IP → hostname) |
| **TXT** | Free-form text (SPF/DKIM/DMARC verification) |
| **NS / SOA** | Name Server records / Start of Authority |
| **DHCP / DORA** | Discover, Offer, Request, Acknowledge |
| **DHCP relay (IP helper)** | Forwards broadcasts to remote DHCP server |
| **NTP** | Network Time Protocol, UDP 123 |
| **Stratum** | NTP hierarchy (0 = atomic; lower = more authoritative) |
| **SFTP / FTPS** | SSH-tunneled FTP / TLS-wrapped FTP |
| **TFTP** | Trivial FTP, UDP 69, no auth |
| **SMTP / IMAP / POP3** | Send / sync / download email |
| **VPN** | Encrypted tunnel over public network |
| **Direct Connect / ExpressRoute** | AWS / Azure dedicated cloud connections |
| **SD-WAN** | Software-Defined WAN overlay |
| **SASE** | Secure Access Service Edge (SD-WAN + cloud security) |
| **SDN** | Software-Defined Networking (separation of control + data planes) |

### Acronyms cheat-row (Module 5)
| Acronym | Meaning |
|---------|---------|
| DNS | Domain Name System |
| TLD | Top-Level Domain |
| DoH / DoT | DNS over HTTPS / TLS |
| DNSSEC | DNS Security Extensions |
| DHCP | Dynamic Host Configuration Protocol |
| DORA | Discover / Offer / Request / Acknowledge |
| NTP | Network Time Protocol |
| FTP / SFTP / FTPS / TFTP | File Transfer Protocol variants |
| SMTP / POP3 / IMAP | Email protocols |
| SPF / DKIM / DMARC | Email anti-spoofing TXT records |
| VPN | Virtual Private Network |
| MPLS | Multiprotocol Label Switching |
| SD-WAN | Software-Defined Wide Area Network |
| SASE | Secure Access Service Edge |
| SDN | Software-Defined Networking |
| API (Application Programming Interface) | Application Programming Interface |

---

## 📊 Case Study, The 2016 Dyn Outage (Revisited Through Services Lens)

**Situation.** Module 1 introduced the Mirai botnet attack on Dyn (21 October 2016). From a **services** perspective, the attack is even more instructive: it took down a **single category of network service** authoritative DNS and brought down hundreds of unrelated websites.

**Decision.** When the attack started at 11:10 UTC, Dyn's authoritative DNS servers in the eastern US were unable to respond to queries. Customer applications (Twitter, GitHub, Reddit, Spotify, NYT, Airbnb, …) were operating perfectly; their IP addresses were unchanged. But because browsers couldn't *resolve* the hostnames, no traffic flowed.

**Outcome.** ~11 hours of intermittent outages, three attack waves, ~1.2 Tbps peak. Recovery required:

1. Aggressive filtering at upstream networks (Akamai, Verizon, Level 3 / CenturyLink)
2. Geographic spreading of attack as Dyn's anycast absorbed traffic
3. Eventually, attackers stopped (no evidence of them being defeated; they likely just moved on)

In the post-mortem, the industry adopted the **secondary DNS provider** pattern: large companies now publish their authoritative DNS at **two unrelated providers** (e.g., Cloudflare + AWS Route 53) so a single-provider outage doesn't break name resolution. Cloudflare's "DNS as a Service" market share grew rapidly in 2017-2020.

**Lesson for the exam / for practitioners.** Pull together every service in this module:

- **DNS is the single most critical network service**, when it fails, *nothing* else matters
- **NS records** point to authoritative servers; you can list multiple (even at different providers)
- **TTLs** determine how long resolvers cache results, short TTLs let you fail over quickly, long TTLs reduce query load
- **DNSSEC** protects against cache poisoning but doesn't help with DoS, different problem
- **Anycast DNS** spreads load and resilience geographically but isn't infinite
- **Multi-vendor strategy** is the architectural defense against single-provider failures

This case is exactly what Network+ tests when asking about DNS resilience, NS record purpose, TTL effects, and the broader question "what's the most important service on a network?"

**Discussion (Socratic).**
- **Q1:** Your company depends on one DNS provider that goes down. Your CIO asks: "Why can't we just put a second NS record at another provider?" The answer is "you *can*, and you should, but it's not free." Walk through the operational complexity of running two DNS providers in active-active.
- **Q2:** Email anti-spoofing (SPF/DKIM/DMARC) all live as TXT records in DNS. If your DNS goes down, what's the second-order impact on email deliverability beyond just "people can't find your mail server"?
- **Q3:** Dyn's attack peaked at 1.2 Tbps. Where in the SD-WAN/SASE stack would you want to absorb that kind of load (vs trying to filter at your own enterprise edge)? Defend your answer architecturally.

---

## ✅ Module 5 Summary

You now know:

- 🌐 **DNS**, records (A, AAAA, CNAME, MX, PTR, TXT, NS, SOA, SRV), resolution flow, UDP 53 vs TCP 53, anti-spam TXT records (SPF/DKIM/DMARC)
- 📥 **DHCP**, DORA process, scopes, reservations, relays, ports 67/68
- ⏰ **NTP**, UDP 123, stratum hierarchy, critical for auth systems
- 📁 **File transfer**, FTP / SFTP / FTPS / TFTP and when each is appropriate
- ✉️ **Email**, SMTP (25/587/465) / POP3 (110/995) / IMAP (143/993)
- ☁️ **Cloud connectivity**, VPN vs Direct Connect / ExpressRoute, SD-WAN, SASE
- 🛰️ **SDN**, control plane vs data plane separation

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 6, Network Security Fundamentals](../Module-06-Security/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Security/Reading.md) layers VPNs, firewalls, and ACLs on top of these services; [Module 7](../Module-07-Monitoring-Tools/Reading.md) uses SNMP/syslog/NetFlow to monitor these services; [Module 8](../Module-08-Troubleshooting/Reading.md) revisits DNS/DHCP as top-cause incidents.
> - Cross-course: AWS Solutions Architect (course 04) and Azure Administrator (course 06) cover the same cloud-connectivity options in their respective provider-specific dialects.
> - Practice: Practice Exam 1 has ~6 services questions; the Final Mock has ~12 (including cloud connectivity).

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 IETF RFC 1034 & RFC 1035 (Mockapetris, 1987). [*Domain Names – Concepts and Facilities / Implementation and Specification*](https://www.rfc-editor.org/rfc/rfc1035).
- 📄 IETF RFC 2131 (Droms, 1997). [*Dynamic Host Configuration Protocol*](https://www.rfc-editor.org/rfc/rfc2131).
- 📄 IETF RFC 5905 (Mills et al., 2010). [*Network Time Protocol Version 4*](https://www.rfc-editor.org/rfc/rfc5905).
- 📄 IETF RFC 7208 (Kitterman, 2014). [*SPF*](https://www.rfc-editor.org/rfc/rfc7208). RFC 6376 (DKIM). RFC 7489 (DMARC).
- 📄 Gartner (2019). "Hype Cycle for Enterprise Networking", coined SASE.

**Case-study sources:**
- 📄 Dyn (2016). "Dyn Statement on 10/21/2016 DDoS (Distributed Denial of Service) Attack." Post-mortem blog post.
- 📄 Cloudflare (2017). "Anatomy of a DNS DDoS Amplification Attack." Blog post.

**Practitioner / exam:**
- 📖 [Professor Messer Services + Cloud playlist](https://www.professormesser.com/network-plus/n10-009/n10-009-video-training-course/)
- 📖 [Cricket Liu's *DNS and BIND* (O'Reilly)](https://www.oreilly.com/library/view/dns-and-bind/0596100574/), the bible for DNS
- 📖 AWS / Azure free intro courses on Direct Connect / ExpressRoute
