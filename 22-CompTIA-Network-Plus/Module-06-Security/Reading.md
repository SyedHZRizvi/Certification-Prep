# Module 6: Network Security Fundamentals 🔒

> **Why this module matters:** Domain 4 (Network Security) is **14% of the exam** — and the concepts here are the gateway to your next cert (Security+, the natural follow-on). You'll learn how firewalls actually decide, the IDS/IPS family, the modern VPN tool kit (IPsec, SSL/TLS, SD-WAN), and the access controls (NAC, 802.1X, ACLs) that hold the line.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–5 (OSI, IP, ports, DNS, DHCP, basic switching/routing)
> - The TCP 3-way handshake (Module 1) — stateful firewalls depend on this
> - VLANs (Module 3) — segmentation is the foundation of network security

---

## 🏰 A Story: Why the Castle Stopped Working

In medieval times, security meant a moat, a high wall, and a single guarded gate. Anything that got past the wall was trusted. This worked beautifully when "inside" and "outside" were geographically obvious — a literal castle and the surrounding countryside.

Modern enterprise networking destroyed this metaphor decades ago. Your "inside" now includes employees working from coffee shops, IoT cameras, third-party SaaS apps, contractor laptops, the CEO's iPad on her sailboat, and a developer in another country with full SSH access. There is no longer an obvious "inside." The castle wall is full of holes by design.

The modern answer is **Zero Trust** — never trust based on network location; verify every request, every time. This module covers the toolkit: firewalls (still essential at the perimeter and between segments), IDS/IPS (the eyes/ears), VPNs (the encrypted tunnels for legitimate users), NAC (posture-checking devices at the door), and 802.1X (per-user authentication at every switch port and SSID).

You won't go deep on attack types here — that's Security+. This module covers the **defensive controls** Network+ tests on.

---

## 🛡️ Firewalls — The Layered Filter Family

A **firewall** evaluates packets against a rule set and decides allow/deny. The sophistication of the evaluation determines the firewall generation.

| Generation | Decision basis | Pros | Cons |
|------------|----------------|------|------|
| **Stateless / packet filter** | Each packet in isolation: source/dest IP, port, protocol | Fast, simple | Can't distinguish "legitimate reply" from "unsolicited incoming" |
| **Stateful** | Tracks connection state (TCP handshake state, UDP flow timeouts); auto-allows reply traffic | The dominant enterprise model since the late 90s | Doesn't inspect application content |
| **Next-Generation (NGFW)** | Stateful + deep packet inspection (DPI), application identification, user identity, IDS/IPS, TLS decryption | Application-aware policy, modern control | More expensive, requires more CPU |
| **Web Application Firewall (WAF)** | HTTP/HTTPS only; understands OWASP-class attacks (SQLi, XSS, CSRF) | Protects web apps specifically | App-layer only |
| **Cloud / FWaaS** | Firewall as a service (delivered from cloud edge — part of SASE) | No on-prem hardware, scales | Vendor lock-in, requires Internet path |

### Stateful firewall — how it actually works

A connection state table tracks:

- **Source/dest IP** + **source/dest port**
- **Protocol** (TCP/UDP/ICMP)
- **Connection state** (SYN sent, established, time-wait, etc.)
- **Counters** (bytes/packets, timestamps)

When a packet arrives:

1. Match against state table — if a known connection, allow per state
2. If new, evaluate against rule base (top-down, first-match wins)
3. If allowed, create state-table entry; future packets in this flow are fast-path

🎯 **Exam pattern:** *"A user can browse the Internet but the firewall isn't allowing inbound responses"* → The firewall is stateless or stateful inspection is disabled. Stateful firewalls auto-permit replies to allowed outbound sessions.

### ACLs (Access Control Lists)

The actual rule format on most firewalls and routers. Rules are evaluated **top-down, first match wins**. End every ACL with a deny-all (implicit on most platforms anyway).

| Field | Example |
|-------|---------|
| Permit/Deny | `permit` |
| Protocol | `tcp` |
| Source | `10.0.0.0/8` |
| Destination | `any` |
| Port | `eq 443` |
| Log/Disable | `log` |

🚨 **Trap:** Rule order matters. A permit-all at the top makes everything below it dead. A deny-all at the top blocks everything. Always test rule changes in a staging environment with the change-management process from Security+ Module 1.

---

## 👀 IDS vs IPS — Detect vs Prevent

| | IDS (Intrusion Detection System) | IPS (Intrusion Prevention System) |
|--|----------------------------------|------------------------------------|
| **Mode** | Passive, out-of-band (SPAN/tap) | Inline (in the data path) |
| **Action** | Logs + alerts | Logs + alerts + **blocks** |
| **Failure** | Network keeps working | Network may go down (fail-open vs fail-closed) |
| **Latency** | None added | Adds latency |
| **Use** | Visibility, forensics | Active blocking of known attacks |

| Variants | Where |
|----------|-------|
| **NIDS / NIPS** | Network-based |
| **HIDS / HIPS** | Host-based (on the endpoint) |

### Detection methodologies

| Method | How it detects | Pros | Cons |
|--------|----------------|------|------|
| **Signature-based** | Match against known-attack patterns | Low false positives on known threats | Misses unknowns; needs constant signature updates |
| **Anomaly / Behavioral** | Detect deviation from learned baseline | Can catch novel attacks | High false positives until baseline matures |
| **Heuristic / ML** | Pattern-based scoring | Catches polymorphic threats | Black-box decisions, false positives |

🎯 **Exam pattern:** *"Out-of-band device that only alerts"* → IDS. *"Inline device that blocks attacks"* → IPS.

---

## 🚪 NAC — Network Access Control

A **NAC** posture-checks devices BEFORE granting network access. Examples: Cisco ISE, Aruba ClearPass, FortiNAC, Microsoft NAP (legacy).

### Pre-admission checks

- **Patch level** — is the OS up to date?
- **Antivirus** — installed, running, signatures fresh?
- **Disk encryption** — BitLocker / FileVault enabled?
- **Firewall** — host firewall enabled?
- **Certificate** — does the device have an enterprise cert?
- **Device fingerprint** — recognized MAC / serial / TPM?

### Post-admission actions

| Result | Action |
|--------|--------|
| Compliant | Assign production VLAN, full network access |
| Non-compliant | Quarantine VLAN with remediation portal (auto-patch, install AV) |
| Unknown / unmanaged | Guest VLAN with Internet-only |
| Failed | Deny access (event-disable port) |

### Agent vs Agentless

| Agent (NAC client installed) | Agentless |
|-------------------------------|-----------|
| Deeper posture inspection | Easier to deploy |
| Works on managed devices | Works for BYOD / IoT (uses DHCP fingerprint, port profile) |

🎯 **Exam pattern:** *"How can the network differentiate compliant employee laptops from rogue personal devices and place each on the correct VLAN?"* → NAC.

---

## 🛣️ Zero Trust Architecture (NIST SP 800-207)

Module 1 introduced Zero Trust in passing; this module dives a level deeper for the Network+ context.

**Core principles:**
1. **Never trust, always verify** — no implicit trust based on network location
2. **Assume breach** — design as if the network is already compromised
3. **Verify explicitly** — every request authenticated, authorized, logged
4. **Use least privilege** — minimum permissions, just-in-time access
5. **Microsegmentation** — small trust zones, lateral movement is hard
6. **Continuous monitoring** — re-evaluate trust on every transaction

### Zero Trust components (from NIST SP 800-207)

| Component | Role |
|-----------|------|
| **Policy Engine (PE)** | Evaluates the request against policy + signals → allow/deny |
| **Policy Administrator (PA)** | Translates the decision into session config |
| **Policy Enforcement Point (PEP)** | Actually allows/blocks the traffic |
| **Adaptive Identity** | Risk-based auth (device, location, time, behavior) |
| **Threat Scope Reduction** | Limit what each principal can reach |
| **Continuous diagnostics** | SIEM, EDR, NDR feeding signals back to the PE |

### Comparison to traditional perimeter

| Traditional | Zero Trust |
|-------------|------------|
| Trust based on network location | Trust based on identity + posture + context |
| One big perimeter firewall | Micro-perimeters around each workload |
| VPN once, trust always | Authenticate every request |
| Insider trusted | Insider verified continuously |

---

## 🔐 VPNs — IPsec, SSL/TLS, and Modern Variants

A **VPN** (Virtual Private Network) creates an encrypted tunnel across an untrusted network. Two main flavors:

### IPsec — the network-layer giant

Defined in **RFC 4301** (Kent & Seo, 2005) and many companion RFCs. The dominant **site-to-site** VPN.

**Two protocols:**
| Protocol | Provides | Used in practice? |
|----------|----------|---------------------|
| **AH** (Authentication Header) | Integrity + origin auth (no encryption) | Rarely — encryption usually needed |
| **ESP** (Encapsulating Security Payload) | Confidentiality + integrity + auth | **Yes — what you actually use** |

**Two modes:**
| Mode | What's encrypted | Use case |
|------|------------------|----------|
| **Transport** | Payload only (original IP header visible) | Host-to-host |
| **Tunnel** | Entire original packet (new outer IP header added) | Gateway-to-gateway VPNs (site-to-site) |

**Phases (IKE — Internet Key Exchange, RFC 7296 for IKEv2):**
1. **Phase 1** — establish a secure channel between peers (Main Mode or Aggressive Mode in IKEv1; single exchange in IKEv2)
2. **Phase 2** — negotiate ESP/AH parameters for actual data tunnels

**Ports:** UDP 500 (IKE), UDP 4500 (NAT-Traversal), Protocol 50 (ESP), Protocol 51 (AH).

### SSL/TLS VPN — the user-friendly remote-access option

| Feature | Details |
|---------|---------|
| **Transport** | TCP/443 (firewall-friendly!) |
| **Forms** | Clientless (browser-based, limited apps) or full-tunnel (with client) |
| **Examples** | Cisco AnyConnect (Secure Client), OpenVPN, Palo Alto GlobalProtect |
| **Why preferred for remote users** | Works through most firewalls/proxies because it looks like HTTPS |

### Modern VPN alternatives

- **WireGuard** (Donenfeld, 2017) — open standard, much simpler code base than IPsec; built into the Linux kernel since 5.6 (2020); used by NordVPN, Mullvad, AWS Client VPN
- **ZTNA** (Zero Trust Network Access) — replaces VPNs with per-application identity-aware proxies; users don't get "the network," they get specific apps

🎯 **Exam pattern:** *"Encrypted site-to-site between two data centers"* → IPsec tunnel mode. *"Remote employee needs to access a web app from a coffee shop"* → SSL/TLS VPN or ZTNA.

---

## 🔌 802.1X — Port-Based Authentication

Defined in **IEEE 802.1X-2020**. Authenticates *devices* before granting network access on a wired switch port or wireless SSID. Three actors:

| Role | Who | What |
|------|-----|------|
| **Supplicant** | Client device (Windows, Mac, iPhone, IP camera) | Sends credentials |
| **Authenticator** | Switch / WAP | Passes EAP frames between supplicant and server; opens/closes the port based on the answer |
| **Authentication Server** | RADIUS server (Cisco ISE, NPS, FreeRADIUS) | Validates credentials against directory, returns Accept/Reject |

### EAP methods (from Module 4 — recall)

| EAP method | Authentication | Use case |
|------------|----------------|----------|
| **EAP-TLS** | Certs on both sides | Most secure; enterprise managed devices |
| **PEAP** | Server cert + user cred in TLS tunnel | Easier; AD-integrated |
| **EAP-TTLS** | Server cert + flexible inner methods | Mixed environments |
| **EAP-FAST** | Cisco's PAC-based lightweight method | Cisco shops |

### Dynamic VLAN assignment

After authentication, RADIUS can return a **Tunnel-Private-Group-ID** attribute → switch dynamically assigns the port to the right VLAN. Same for SSIDs — different users get different VLANs based on identity.

🎯 **Exam pattern:** *"How can a switch port automatically place a device on the correct VLAN based on the user's identity?"* → 802.1X + RADIUS with dynamic VLAN assignment.

---

## 🚧 Physical Security — Not Just Locks

Network+ tests physical security too. The exam-tested terms:

| Control | Purpose |
|---------|---------|
| **Lock** (key, combination, electronic) | Restrict physical access to wiring closets / data centers |
| **Mantrap / Access control vestibule** | Two-door entry; second door opens only after first closes; prevents tailgating |
| **Badge reader (proximity, smartcard)** | Identity + audit log of entry |
| **Biometric reader** | Fingerprint, iris, face — stronger but more expensive |
| **CCTV / surveillance** | Deterrent + detective (if recorded) |
| **Security guard** | Detective + deterrent |
| **Fences / bollards** | Perimeter |
| **Cable locks** | Laptop / equipment theft prevention |
| **Faraday cage** | RF shielding around sensitive equipment |
| **Asset tags + inventory** | Track equipment, detect theft |
| **Tamper-evident seals** | Detect physical compromise of network gear |
| **Locking racks** | Servers / switches in lockable cabinets |
| **Climate / fire suppression** | Availability — HVAC, FM-200, water mist |

---

## 🔬 Scenario Walkthrough — VPN vs Direct Web Access

> **Scenario:** A remote employee can reach a public website (https://saas.example.com) from her laptop but cannot reach the internal CRM (https://crm.corp.local). She has the SSL/TLS VPN client installed but hasn't connected. What's happening?

**Walkthrough:**
1. **Public DNS** resolves `saas.example.com` → public IP → reachable from any Internet-connected device.
2. **Internal DNS** for `crm.corp.local` resolves only via the corporate DNS resolver. From a coffee shop, public DNS returns NXDOMAIN.
3. The CRM's IP is in a **private RFC 1918 range** behind the corporate firewall. Even with the right DNS, no public route exists.
4. **Connecting the VPN:**
   - SSL/TLS VPN client establishes a tunnel over TCP/443 to the corporate VPN concentrator
   - Tunnel includes routes to internal subnets (e.g., 10.0.0.0/8)
   - VPN client also pushes internal DNS server settings (split-tunnel) or sets corporate DNS as primary (full-tunnel)
   - Now `crm.corp.local` resolves correctly AND the route to the IP exists
5. With ZTNA, the user wouldn't need full network access — the identity-aware proxy would publish *just the CRM app* to authorized users without granting broader network reach.

This is a high-value scenario question — many candidates miss the *DNS resolution* half of the problem.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Firewalls protect against all attacks" | Firewalls block what they're configured to block; misconfigured rules + zero-day exploits + insider abuse bypass them. Defense in depth. |
| "IDS blocks attacks" | NO — IDS only *detects/alerts*. IPS blocks. |
| "Stateful firewalls inspect application content" | They track connection state but don't deep-inspect payload. NGFW does DPI. |
| "VPN = encryption" | VPNs encrypt the tunnel, but everything *inside* the corporate network may still be plaintext on the LAN. |
| "IPsec runs over TCP" | IPsec uses **UDP 500/4500** for IKE; ESP/AH are IP protocols 50/51, not TCP. |
| "WPA3 replaces 802.1X" | WPA3-Personal replaces PSK; WPA3-Enterprise uses 802.1X + EAP. They serve different scopes. |
| "NAC is enough on its own" | NAC controls admission; you still need segmentation, firewalls, monitoring, EDR. |
| "Zero Trust means no VPN" | ZTNA often *replaces* VPN with identity-aware proxies, but the term "Zero Trust" is about the principle (verify every request) not literal "no VPN." Many ZT deployments still include VPN for legacy apps. |
| "Implicit deny is automatic" | Most firewalls / ACLs have an implicit deny at the end — but always make it **explicit** in your rule base for clarity. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Firewall** | Rule-based packet filter |
| **Stateful inspection** | Track connection state, auto-allow replies |
| **NGFW** | Next-Generation Firewall — DPI + app + IPS + user-aware |
| **WAF** | Web Application Firewall |
| **IDS / IPS** | Detect-and-alert / detect-and-block |
| **NIDS / HIDS** | Network / Host-based IDS |
| **Signature vs anomaly** | Known-pattern vs behavior baseline |
| **NAC** | Network Access Control — posture check before admission |
| **Zero Trust** | Never trust, always verify (NIST SP 800-207) |
| **PEP / PE / PA** | Policy Enforcement Point / Engine / Administrator |
| **IPsec** | Network-layer VPN protocol (RFC 4301) |
| **AH / ESP** | Authentication Header / Encapsulating Security Payload |
| **Transport / Tunnel mode** | Encrypt payload only / encrypt entire packet |
| **IKE / IKEv2** | Internet Key Exchange — sets up IPsec keys (UDP 500/4500) |
| **SSL/TLS VPN** | Remote-access VPN over TCP/443 |
| **WireGuard** | Modern simpler VPN |
| **ZTNA** | Zero Trust Network Access — per-app identity-aware proxy |
| **802.1X** | Port-based authentication with EAP + RADIUS |
| **Supplicant / Authenticator / Auth Server** | 802.1X roles |
| **ACL** | Access Control List (firewall rule set) |
| **Implicit deny** | Anything not explicitly allowed is denied |
| **Mantrap / Vestibule** | Two-door anti-tailgate entry |

### Acronyms cheat-row (Module 6)
| Acronym | Meaning |
|---------|---------|
| FW / NGFW | Firewall / Next-Generation |
| WAF | Web Application Firewall |
| IDS / IPS | Intrusion Detection / Prevention System |
| NIDS / HIDS | Network / Host IDS |
| NAC | Network Access Control |
| RADIUS | Remote Authentication Dial-In User Service |
| TACACS+ | Terminal Access Controller Access-Control System Plus |
| EAP / PEAP | Extensible Authentication Protocol / Protected EAP |
| ZTA / ZTNA | Zero Trust Architecture / Network Access |
| PEP / PE / PA | Policy Enforcement / Engine / Administrator |
| IPsec | Internet Protocol Security |
| AH / ESP | Authentication Header / Encapsulating Security Payload |
| IKE / IKEv2 | Internet Key Exchange |
| ACL | Access Control List |
| MFA | Multi-Factor Authentication |
| SIEM | Security Information and Event Management |
| EDR / XDR | Endpoint / Extended Detection and Response |
| DLP | Data Loss Prevention |

---

## 📊 Case Study — The 2013 Target Breach (HVAC Vendor Pivot)

**Situation.** Between **27 November and 15 December 2013**, attackers exfiltrated payment-card data for **~40 million customers** and personal information for **~70 million more** from Target. The intrusion path is now legendary in network security teaching.

**Decision (Target's, in hindsight a critical mistake).** Target had granted **network access to a third-party HVAC vendor** (Fazio Mechanical Services) so the vendor could remotely monitor refrigeration and HVAC systems at Target stores. The vendor's network was the initial compromise vector — attackers phished a Fazio employee, installed Citadel malware, harvested Target portal credentials, and used them to log into Target's vendor portal.

From the vendor portal, the attackers pivoted into Target's internal corporate network. Because the network was **flat** — not microsegmented — they could traverse from the corporate environment to the **payment processing network**, where they installed **BlackPOS** memory-scraping malware on point-of-sale terminals at 1,797 US Target stores.

**Outcome.** Target's losses:

- **$292 million** in direct breach costs (Target 10-K filings 2014–2017)
- **$18.5 million** multistate settlement (2017)
- **$10 million** consumer class action settlement (2015)
- CEO and CIO resigned; massive trust loss; share price dropped ~46% in months
- Subsequent **PCI-DSS audit failures** as the segmentation gaps were exposed
- An **inline FireEye IPS** that Target had purchased and deployed *did* detect the exfiltration but **alerts were ignored** — a SOC operational failure on top of the architectural failure

**Lesson for the exam / for practitioners.** Map every Network+ Module 6 concept onto Target:

- **Network segmentation** (VLANs, ACLs, firewalls between vendor / corporate / PCI zones) was insufficient — the vendor zone could reach the corporate zone could reach the PCI zone
- **NAC** would have helped — the vendor's compromised credentials may have authenticated, but device posture checks could have failed for the foreign-origin connection
- **Zero Trust** would have required per-application authorization, not network-wide trust
- **IDS/IPS** detected the attack but humans ignored the alerts — illustrates that *technology without operational rigor is decoration*
- **Vendor risk management** (out of scope for Network+ but covered in Security+ Module 9) is the management/process layer that complements network controls
- **Microsegmentation** — separating each zone behind enforcing firewalls — is the single architectural change with the largest blast-radius reduction

This case is exactly what Network+ tests when asking about segmentation, ACL design, NAC use cases, and the broader question "how do you contain an inevitable breach?"

**Discussion (Socratic).**
- **Q1:** You inherit a flat /16 enterprise network with no VLAN segmentation. The CIO gives you 90 days. What are the FIRST THREE segments you carve out, and what ACL rules govern the inter-segment traffic? Defend your prioritization order.
- **Q2:** Target's IPS detected the exfiltration but alerts were ignored. From a controls perspective, an undetected detection is worse than no detection at all (because the org thinks it's safe). Design a process / metric that would force alert-handling discipline without overwhelming the SOC with false positives.
- **Q3:** A vendor demands "we need access to your network to do our job." How do you grant *just enough* access (least privilege at the network level) without giving them a foothold into the broader environment? Use Module 6 vocabulary in your answer.

---

## ✅ Module 6 Summary

You now know:

- 🛡️ **Firewall generations** — packet filter → stateful → NGFW → WAF → FWaaS — and ACL evaluation
- 👀 **IDS vs IPS** — out-of-band detect vs inline block; signature vs anomaly methodologies
- 🚪 **NAC** — posture-check devices, dynamic VLAN assignment, agent vs agentless
- 🛣️ **Zero Trust** — principles, NIST 800-207 components (PEP/PE/PA), microsegmentation
- 🔐 **VPNs** — IPsec (AH/ESP, transport/tunnel, IKE), SSL/TLS VPN, WireGuard, ZTNA
- 🔌 **802.1X** — supplicant / authenticator / auth server roles + RADIUS + EAP
- 🚧 **Physical** — mantrap/vestibule, badges, biometrics, CCTV, locks, racks

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 7 — Monitoring, Performance & Tools](../Module-07-Monitoring-Tools/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 7](../Module-07-Monitoring-Tools/Reading.md) covers SIEM, syslog, and NetFlow — the visibility plane that makes IDS/IPS actionable; [Module 8](../Module-08-Troubleshooting/Reading.md) revisits firewall and ACL misconfigurations as top-cause incidents.
> - Cross-course: **CompTIA Security+ (course 09)** is the natural next step — Module 6 of this course is the warm-up for Sec+ Modules 4–7.
> - Practice: Practice Exam 1 has ~5 security questions; the Final Mock has ~10.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 NIST SP 800-207 (Rose, Borchert, Mitchell, Connelly, 2020). [*Zero Trust Architecture*](https://csrc.nist.gov/publications/detail/sp/800-207/final).
- 📄 IETF RFC 4301 (Kent & Seo, 2005). [*Security Architecture for the Internet Protocol*](https://www.rfc-editor.org/rfc/rfc4301). (IPsec.)
- 📄 IETF RFC 7296 (Kaufman et al., 2014). [*Internet Key Exchange v2*](https://www.rfc-editor.org/rfc/rfc7296).
- 📄 IEEE 802.1X-2020. *Port-Based Network Access Control*.
- 📄 Donenfeld, J. (2017). "WireGuard: Next Generation Kernel Network Tunnel." *NDSS 2017*.

**Case-study sources:**
- 📄 US Senate Committee on Commerce (2014). *A "Kill Chain" Analysis of the 2013 Target Data Breach*. Majority Staff Report, 26 March 2014.
- 📄 Krebs, B. (2014). "The Target Breach, By the Numbers." *KrebsOnSecurity*, May 6, 2014.

**Practitioner / exam:**
- 📖 [Professor Messer Network Security playlist](https://www.professormesser.com/network-plus/n10-009/n10-009-video-training-course/)
- 📖 [Cisco Zero Trust whitepaper](https://www.cisco.com/c/en/us/products/security/zero-trust.html) — accessible vendor perspective
