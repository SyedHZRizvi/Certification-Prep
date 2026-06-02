# Module 7: Networking for Servers 🌐

> **Why this module matters:** Server-side networking is where the SK0-005 exam tests integration between hardware, storage, and OS. NIC teaming and LACP show up in PBQs. VLAN tagging gets tested on every Server+ exam. Jumbo frames are how storage networks reach line rate. Layer 4 vs Layer 7 load balancers are the difference between "balanced traffic" and "smart routing." This module gives you all of it without re-teaching the Network+ basics.

> **Prerequisites for this module.** Before starting:
> - Modules 1–6
> - **Strongly recommended:** CompTIA Network+ (N10-008) or equivalent — IP addressing, subnets, TCP/UDP, OSI model
> - Familiarity with Ethernet basics (MAC addresses, frames, switches)
>
> If those are shaky, pause and review before continuing.

---

## 🚄 A Story: The Database That Couldn't Backup

Meet Owen. He runs IT for a midsize logistics company. The accounting database (45 TB on a SAN, NFS-mounted by the DB host) takes **14 hours** to back up nightly — exceeding the 8-hour overnight window. Backup spills into business hours, slowing queries and angering the CFO.

Owen's first instinct is to buy more disk. Then a network admin asks: *"What's the MTU on the storage VLAN?"* It's 1500 (default). She measures throughput on the dedicated 10 GbE backup NIC: **2.1 Gb/s**, not 10. Owen has been moving 45 TB per night through a bottleneck that's *fully on the server*.

Two changes — one weekend, no new hardware:

1. **Enable jumbo frames (MTU 9000)** end-to-end on the backup VLAN (server NIC + switch + NAS).
2. **Configure NIC teaming with LACP** across the server's two 10 GbE backup NICs, with the switch ports in the same LAG.

Backup time drops from 14 hours to 3.5 hours. The CFO sends a thank-you card. The cost was zero.

This module is everything Owen needed to know.

---

## 🧵 Server NICs — More Than One

Production servers don't have one NIC. They have several, each often in a team.

### Typical 2U server NIC topology

| NIC | Purpose | Speed |
|---|---|---|
| **iDRAC / iLO dedicated** | OOB management only — separate VLAN | 100 Mbps or 1 GbE |
| **LOM 1, 2** (LAN-on-Motherboard) | Host management / heartbeat | 1 or 10 GbE |
| **PCIe NIC port 1, 2** | Production data (e.g., app traffic) | 10/25 GbE |
| **PCIe NIC port 3, 4** | Storage (iSCSI) or replication | 10/25 GbE |

You'll see Vlan IDs, MTU sizes, and team modes assigned per NIC group.

### NIC Teaming — also called bonding, LBFO (Windows), Link Aggregation

NIC teaming combines multiple physical NICs into one **logical interface** for:

1. **Redundancy** — NIC dies, the team keeps going.
2. **Throughput** — multiple NICs aggregate bandwidth (under certain modes).
3. **Load balancing** — distribute traffic across the team.

### Teaming modes

| Mode | Behavior | Switch req |
|---|---|---|
| **Active/Passive (failover)** | One NIC carries traffic; the other is idle backup | None |
| **Active/Active (round-robin / source-MAC / source-IP hash)** | All NICs carry traffic; load balanced by some hash | Switch-independent variants exist |
| **LACP (802.3ad / 802.1AX)** | Dynamic link aggregation — server and switch negotiate the team | **Switch must support LACP and ports must be in the same LAG** |
| **Static (manual) link aggregation** | Switch-side EtherChannel without the dynamic protocol | Switch config required |

🎯 **Exam pattern:** *"Two 10 GbE NICs on the server, but only one shows ~10 Gb. The switch ports are configured normally."* → Likely **switch-side LAG not configured** or no LACP partner — teaming silently falls back to single-NIC active/passive.

### Per-OS teaming/bonding

- **Windows Server**: LBFO (Load Balancing/Failover) and **SET** (Switch Embedded Teaming, for Hyper-V converged designs).
- **Linux**: `bonding` driver (modes 0-6: 0 = round-robin, 1 = active-backup, 4 = 802.3ad/LACP); modern alternative is `team` daemon (`teamd`).
- **VMware ESXi**: vSwitch teaming with load-balancing modes (Originating Port ID, IP hash, MAC hash) + LACP via Distributed Switch.

---

## 🏷️ VLAN Tagging on Servers (802.1Q)

A **VLAN** (Virtual LAN) is a broadcast domain logically separated within the same physical switch. The **802.1Q** standard inserts a 4-byte tag into the Ethernet frame identifying the VLAN.

### Trunk port vs Access port

| Port type | Carries | Tag |
|---|---|---|
| **Access port** | One VLAN | Untagged |
| **Trunk port** | Multiple VLANs | Tagged (802.1Q) per VLAN; one "native VLAN" can be untagged |

### Where servers see tags

Most servers connect to **trunk ports** — the server's NIC handles tagging in software (Linux: `ip link add link eth0 name eth0.10 type vlan id 10`; Windows: NIC properties → VLAN ID). This lets one physical NIC carry multiple VLANs:

| VLAN | Use |
|---|---|
| 10 | Management |
| 20 | Production app |
| 30 | Storage (iSCSI) |
| 40 | Backup |
| 50 | DMZ |

Hypervisors do this constantly — one trunked NIC, many port groups, each on a different VLAN.

🎯 **Exam pattern:** *"One VM is on a different VLAN than the host. How does the hypervisor put it there?"* → The vSwitch tags the frame with the VM's port-group VLAN ID before sending it out the physical trunk NIC.

### VLAN best practices on servers

- Storage VLAN separate from production
- Management (OOB + iDRAC) on its own VLAN, never reachable from user network
- vMotion / Live Migration / heartbeat on a dedicated VLAN
- Tagged trunks at switch + matching VLAN config on server NIC
- Default VLAN 1 = avoid using

---

## 🎈 Jumbo Frames (MTU 9000)

Standard Ethernet MTU = 1500 bytes. **Jumbo frames** typically = 9000 bytes (sometimes 9216 for some vendor implementations).

Why bigger?

- **Less per-packet overhead** — each frame's TCP/IP header is the same size regardless of payload; bigger payload = lower overhead percentage
- **Fewer interrupts on the NIC and CPU** — each packet = an interrupt; fewer packets at the same throughput = lower CPU usage
- **Higher achievable throughput on storage networks** — sustained 10/25/100 GbE links saturate more easily

### The catch: end-to-end consistency

Every device in the path **must** support and be configured for the same MTU. Mixed 1500/9000 paths cause:

- **Fragmentation** (TCP doesn't fragment if DF bit is set — it drops packets and triggers PMTUD)
- **Black-hole connections** — packets dropped silently if PMTUD ICMP is also blocked
- **Performance degradation** worse than not having jumbo at all

🎯 **Exam pattern:** *"Storage performance degrades after enabling jumbo frames on the server. The switch and storage device are at default MTU."* → **MTU mismatch**. Configure switch ports + storage device for MTU 9000, or revert to 1500 everywhere.

### Where to use jumbo frames

- ✅ **iSCSI / NFS storage networks** — primary use case
- ✅ **vMotion / Live Migration** networks
- ✅ **Backup networks**
- ❌ **General user-facing LAN** — clients are mixed MTU, internet hop adds complications
- ❌ **WAN / internet** — virtually no path consistently supports >1500

---

## 🌍 IPv6 on Servers

IPv4 isn't going away — but IPv6 increasingly is required. The exam tests basic addressing and dual-stack operation.

### IPv6 basics

| Concept | Detail |
|---|---|
| **Address length** | 128 bits, 8 groups of 4 hex digits, e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| **Shortening** | Collapse leading zeros + replace one consecutive zero-group run with `::` — `2001:db8:85a3::8a2e:370:7334` |
| **Prefix** | `2001:db8::/32` style (analogous to CIDR for IPv4) |
| **Link-local** | `fe80::/10` — auto-assigned, link-only |
| **Unique local** | `fc00::/7` — analogous to RFC1918 private |
| **Global unicast** | Routable on the public internet |
| **Multicast** | `ff00::/8` — replaces broadcast (IPv6 has no broadcast) |
| **Stateless autoconfig (SLAAC)** | Host generates its own IPv6 from router-advertised prefix + EUI-64 or random interface ID |
| **DHCPv6** | Stateful or stateless variant for IPv6 configuration |
| **NDP** (Neighbor Discovery Protocol) | Replaces ARP — neighbor solicitation/advertisement, router solicitation/advertisement |

### Dual-stack on servers

Modern servers run IPv4 + IPv6 simultaneously. Considerations:

- DNS records: A (IPv4) + AAAA (IPv6) per host
- Firewall rules: write rules for *both* address families; missing an IPv6 rule is a common gap
- Application binding: prefer wildcard binds (`::`) that accept both; otherwise dual-bind
- Patch management: SLAAC/DHCPv6 work; some legacy WSUS configs need IPv4

🎯 **Exam pattern:** *"Server has A and AAAA records, both reachable from clients. Web app is internet-facing. Firewall rule allows IPv4 80/443; everything else is default deny. Some clients cannot reach the site."* → Missing **IPv6 firewall rule** for 80/443.

---

## ⚖️ Load Balancers — Layer 4 vs Layer 7

A **load balancer (LB)** distributes incoming connections across multiple backend servers. Two flavors on the exam:

| | **Layer 4 (Transport)** | **Layer 7 (Application)** |
|---|---|---|
| What it sees | IP, port, TCP/UDP state | HTTP host, path, headers, cookies, payload |
| Decision basis | IP + port (and basic L4 stats) | URL, host name, content, session affinity |
| Speed | Very fast | Slower (parses application data) |
| SSL handling | Pass-through OR TCP-only termination | Full SSL termination + re-encryption (offload) |
| Sticky sessions | By IP/port hash | By cookie / header |
| Examples | HAProxy in L4 mode, AWS NLB, Azure Load Balancer, F5 LTM L4 mode | NGINX, HAProxy L7, AWS ALB, Azure Application Gateway, F5 LTM L7 mode, Citrix ADC |
| WAF integration | No | Yes |

🎯 **Exam pattern:**

- *"Route customer.com/api to backend pool A and customer.com/admin to backend pool B."* → **L7** (path-based routing)
- *"Distribute 100 Gb/s of TCP/UDP traffic with minimum latency, no payload inspection."* → **L4**
- *"Terminate SSL at the LB so backend servers are unencrypted internal HTTP."* → **L7 with SSL offload**

### Load-balancing algorithms

| Algorithm | What |
|---|---|
| **Round Robin** | Distribute connections evenly in order |
| **Weighted Round Robin** | Weighted distribution (bigger server → more connections) |
| **Least Connections** | Send to the server with the fewest active connections |
| **Source IP Hash** | Map client IP to a backend deterministically (sticky) |
| **URL Hash / Path Hash** | Map URL to backend (L7) |

### Health checks

LBs continuously probe backends:

- **L4 health check** — TCP socket connect to port
- **L7 health check** — HTTP GET `/healthz` and check for 200 OK or specific body
- Unhealthy backends are removed from rotation until they pass again

### Global Server Load Balancing (GSLB)

A DNS-level load balancer that distributes across **geographic regions**. Returns different DNS A/AAAA records based on:

- Client geo IP
- Backend region health
- Latency measurements

Used for multi-region active-active deployments (AWS Route 53, Akamai GTM, NS1).

---

## 🛰️ Other Server Networking Concepts

### KVM-over-IP

(See Module 1 also.) A KVM-over-IP switch lets you remote-control a server's video/keyboard/mouse over IP, independent of the BMC. Useful for legacy hardware without OOB.

### IPMI / OOB Management Network

(Recap from Module 1.) IPMI on UDP 623; iDRAC/iLO web UIs on TCP 443. Always on its own VLAN. Never internet-exposed.

### iSCSI Initiator/Target Network

iSCSI typically runs on a **dedicated storage VLAN** with:

- Jumbo frames (MTU 9000)
- MPIO across two NIC paths (Module 3)
- CHAP authentication
- Separate switch fabric where possible (or strict QoS)

### Wake-on-LAN

A magic packet (the destination MAC repeated 16 times after a sync stream) sent to the NIC powers the machine on. Requires:

- WoL enabled in BIOS/UEFI
- NIC supports WoL
- NIC remains powered on standby (the chassis is plugged in)
- Magic packet reaches the NIC (typically requires layer 2 or directed broadcast)

### Switching basics relevant to servers

- **Trunk port** — carries multiple VLANs (where the server connects)
- **Access port** — single VLAN (where clients connect)
- **Port channel / LAG** — link aggregation group (where teamed server NICs connect)
- **MTU mismatch** — most painful misconfiguration on storage VLANs
- **STP / RSTP / MST** — Spanning Tree variants — prevent loops; "PortFast" or "edge port" on server-facing ports avoids 30-second listen/learn delay at boot
- **DHCP relay** — see Module 2

### QoS (Quality of Service)

On converged networks (storage + production on the same fabric), **QoS** tags traffic (DSCP, 802.1p) so storage doesn't starve production or vice versa. Common QoS classes for servers:

- Voice / video — highest priority (latency-sensitive)
- Storage / iSCSI — high, low latency
- Production app — medium
- Backup / bulk — low (bandwidth-tolerant)

### Server-room cabling

- **Cat 6A** — 10 GbE up to 100 m
- **Cat 7 / 8** — 25/40 GbE (rare in copper; usually SFP DAC or fiber)
- **DAC** (Direct Attach Copper) — SFP+/SFP28 short-run twinax; cheap top-of-rack
- **AOC** (Active Optical Cable) — fiber with built-in transceivers; longer runs
- **LC fiber + SFP+/SFP28 transceiver** — flexible long-distance
- **Color-coded patch cables** — blue=production, red=storage, yellow=management, etc. — organizational standard
- **Cable management arms** — let you slide a server out of the rack without unplugging
- **Bend radius** — fiber has minimum bend radius; over-bending kills the strand

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario.** Owen (from the opening story) is redesigning the rack for the new accounting DB project. He has 2 servers (DB and app), a SAN array, and a top-of-rack switch pair. He needs: (a) zero single point of network failure, (b) storage on its own VLAN with jumbo frames, (c) ability to live-migrate the app server VM across hypervisor hosts, (d) L7 load balancer in front of the app server. Design the network.

**Walkthrough.**

1. **Switch redundancy.** Two top-of-rack switches in an MLAG / VSS configuration (vendor-specific multi-chassis LAG). Each server has one NIC per switch.
2. **NIC layout on the DB server (per host):**
   - 2× 25 GbE PCIe NIC → LACP team → trunk port carrying VLAN 10 (mgmt), VLAN 20 (production), VLAN 30 (storage)
   - 2× 25 GbE PCIe NIC → LACP team → dedicated storage trunk (VLAN 30 + jumbo frames)
   - 1× iDRAC dedicated port → VLAN 99 (OOB mgmt only)
3. **Storage VLAN.** Dedicated VLAN 30 on dedicated NICs and dedicated switch ports. **MTU 9000 end-to-end** (server NIC + switch ports + SAN array). MPIO across the two storage NICs (Module 3).
4. **vMotion VLAN.** Dedicated VLAN 40 on the hypervisor cluster, MTU 9000.
5. **L7 LB.** NGINX or F5 in front of the app. SSL termination at the LB; backends speak HTTP internally. Health check on `/healthz`. Round-robin or least-connections.
6. **Backup VLAN.** Dedicated VLAN 50 to the backup target, jumbo frames, off-peak window.
7. **Management.** OOB iDRAC/iLO on VLAN 99, accessible only via jump host through VPN.
8. **Documentation.** Cable map color-coded (red = storage, yellow = mgmt, blue = production, green = backup). CMDB updated.

This is the kind of integration question Server+ PBQs ask. Every choice maps to a concept in this module.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "Two NICs are automatically a team." | No — you have to configure teaming on the OS / hypervisor AND configure the switch ports (for LACP, in the same LAG). |
| "LACP means the team is always faster." | LACP guarantees no faster than 1× NIC per *flow* unless the load-balancing hash distributes well (and the application has many parallel flows). Single huge flow ≠ aggregated bandwidth. |
| "Jumbo frames on just the server is fine." | No — end-to-end. Mismatch is worse than not enabling. |
| "Storage on the production VLAN is fine if QoS is enabled." | Strongly anti-pattern; storage should have its own VLAN (and ideally its own fabric). |
| "L4 and L7 load balancers are interchangeable." | L4 is fast but blind to content; L7 makes content-based decisions but is slower. Pick by what you need. |
| "OOB management can live on the same VLAN as production." | NO — separate VLAN, separate access path, MFA on the management UIs. |
| "Default VLAN 1 is fine to use." | Don't — security best practice is to NOT use VLAN 1 (it's an attack surface in many switch firmware bugs). |
| "Spanning Tree doesn't matter on server-facing ports." | It does at boot — without PortFast/edge, the server waits 30s for STP to converge before forwarding. |
| "IPv6 isn't tested anymore." | It is — and the trap is forgetting to write firewall rules for both IPv4 AND IPv6. |
| "MTU = 9000 makes my single-flow throughput 6× faster." | It reduces per-packet overhead — gains are real but moderate (~5-20% for storage workloads), not 6×. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **NIC teaming / bonding** | Aggregating multiple physical NICs into a logical interface |
| **LACP** | Link Aggregation Control Protocol (IEEE 802.3ad / 802.1AX) — dynamic teaming |
| **SET** | Switch Embedded Teaming (Windows Hyper-V converged) |
| **LBFO** | Load Balancing / Failover (Windows teaming legacy term) |
| **VLAN** | Virtual LAN — logical broadcast domain |
| **802.1Q** | VLAN tagging standard (4-byte tag) |
| **Trunk port / Access port** | Multi-VLAN (tagged) vs single-VLAN (untagged) switch ports |
| **Native VLAN** | Untagged VLAN on a trunk |
| **MTU** | Maximum Transmission Unit (1500 default, 9000 jumbo) |
| **Jumbo frame** | MTU 9000 Ethernet frame |
| **PMTUD** | Path MTU Discovery |
| **IPv6 / SLAAC / NDP / DHCPv6** | IPv6 addressing & autoconfig |
| **Dual-stack** | IPv4 + IPv6 simultaneously |
| **Load balancer (LB)** | Distributes connections across backends |
| **L4 / L7 LB** | Transport-layer / Application-layer LB |
| **SSL offload / termination** | LB decrypts SSL; backends speak HTTP |
| **GSLB** | Global Server Load Balancing (DNS-level) |
| **Round Robin / Least Connections / Source IP hash** | LB algorithms |
| **Health check** | Probe backends for availability |
| **WoL** | Wake-on-LAN — magic packet powers up server |
| **DAC / AOC** | Direct Attach Copper / Active Optical Cable |
| **SFP+ / SFP28 / QSFP+ / QSFP28** | Common server NIC transceiver form factors |
| **MLAG / VSS** | Multi-chassis link aggregation / virtual switching system |
| **PortFast / edge port** | STP setting that bypasses listen/learn delay for end hosts |
| **QoS** | Quality of Service (DSCP, 802.1p) |

### Acronyms cheat-row (Module 7)
| Acronym | Meaning |
|---|---|
| NIC | Network Interface Card |
| LACP | Link Aggregation Control Protocol |
| LAG | Link Aggregation Group |
| SET / LBFO | Switch Embedded Teaming / Load Balancing & Failover |
| VLAN | Virtual LAN |
| MTU | Maximum Transmission Unit |
| PMTUD | Path MTU Discovery |
| SLAAC | Stateless Address Autoconfiguration |
| NDP | Neighbor Discovery Protocol |
| LB / GSLB | Load Balancer / Global Server LB |
| WAF | Web Application Firewall |
| SSL/TLS | Secure Sockets Layer / Transport Layer Security |
| WoL | Wake-on-LAN |
| DAC / AOC | Direct Attach Copper / Active Optical Cable |
| SFP+ / QSFP+ | Small Form-Factor Pluggable (10G) / Quad SFP (40G) |
| STP / RSTP / MST | Spanning Tree Protocol variants |
| MLAG / VSS | Multi-chassis LAG / Virtual Switching System |
| QoS / DSCP / 802.1p | Quality of Service / Differentiated Services Code Point |
| GbE | Gigabit Ethernet |

---

## 📊 Case Study — DigiNotar 2011 (Why Trusted Network Paths Matter)

**Situation.** DigiNotar, a Dutch Certificate Authority (CA), was compromised in June-July 2011. The attacker obtained fraudulent SSL certificates for *.google.com, *.microsoft.com, *.cia.gov, and ~530 other sites — then deployed those certificates via DNS hijacking and MITM in Iran to intercept Gmail, Skype, and Tor traffic of an estimated 300,000+ Iranian users (Fox-IT, "Operation Black Tulip," September 2011 forensic report).

**What it has to do with server networking.** The attacker reached DigiNotar's CA infrastructure because:

- The **management network was reachable from less-trusted segments** (the web servers' VLAN reached the CA's signing infrastructure VLAN through misconfigured firewall rules).
- **No separation** between externally-facing web app VLANs and the internal CA root.
- **Audit logging was disabled** on critical CA segments during routine maintenance windows and wasn't re-enabled.
- **No outbound firewall rules** — exfiltration was unrestricted.

**Outcome.** DigiNotar declared bankruptcy within 3 months. Browser vendors revoked DigiNotar's root certificates globally. The Dutch government took over DigiNotar's PKI operations. The case became the canonical example of why network segmentation matters even between internal tiers.

**Lesson for the exam / for practitioners.**

- **Network segmentation isn't only for prod vs dev.** Different tiers within production deserve segmentation: web → app → DB → CA → backup network.
- **Management VLANs must be unreachable from production VLANs.** The OOB iDRAC/iLO/BMC network is sacred.
- **Outbound rules matter as much as inbound.** "Default deny inbound, default allow outbound" lets an attacker exfiltrate freely.
- **Logging discipline is uninteresting until it isn't.** Without continuous logging the post-incident investigation has nothing to work with.
- **Storage and replication networks** between trust boundaries must be carefully designed; flat networks make breaches catastrophic.

This is the scenario Server+ tests when asking "design a server-room network that minimizes blast radius." The answer is **segmentation + dedicated management VLAN + outbound rules + logging.**

**Discussion (Socratic).**
- **Q1:** Your management network and production network are physically separate switches and physically separate cabling. Is that "enough" segmentation, or do you still need policy controls? Defend.
- **Q2:** Outbound default-deny would have caught DigiNotar's exfiltration. It is also operationally painful. How do you balance security and operations?
- **Q3:** Modern microsegmentation (NSX, Cisco ACI, Illumio) goes beyond VLANs to per-VM L4/L7 policy. Argue both sides of "is microsegmentation worth the complexity for a 50-host enterprise?"

---

## ✅ Module 7 Summary

You now know:

- 🧵 **Server NIC topology** (LOM, PCIe, OOB), **teaming/bonding** modes, **LACP** requirements
- 🏷️ **VLAN tagging (802.1Q)**, trunk vs access ports, and why management/storage VLANs are separated
- 🎈 **Jumbo frames (MTU 9000)** — when to use, end-to-end requirement, mismatch behavior
- 🌍 **IPv6 basics** (SLAAC, NDP, dual-stack) and the firewall-rule gap
- ⚖️ **Layer 4 vs Layer 7 load balancers**, algorithms, SSL termination, health checks, **GSLB**
- 🛰️ Other concepts: KVM-over-IP, iSCSI network design, WoL, QoS, server-room cabling

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 8 — Troubleshooting & Documentation](../Module-08-Troubleshooting/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 8](../Module-08-Troubleshooting/Reading.md) diagnoses MTU mismatches, broken teaming, link flaps, and load-balancer health failures.
> - Cross-course: **CompTIA Network+ (N10-008)** is the depth course on switching, routing, and protocols. **AWS / Azure** courses map LB concepts to NLB/ALB and Application Gateway.
> - Practice: Practice Exam 2 has ~8 questions from this module; the Final Mock has ~12.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 IEEE 802.1Q — *Bridges and Bridged Networks* (VLAN tagging)
- 📄 IEEE 802.3ad / 802.1AX — *Link Aggregation*
- 📄 IETF RFC 8200 (2017) — *IPv6 Specification*
- 📄 IETF RFC 4861 (2007) — *Neighbor Discovery for IPv6*
- 📄 Microsoft documentation — NIC teaming (LBFO/SET)
- 📄 Cisco documentation — EtherChannel + PortFast/STP edge

**Case-study sources:**
- 📄 Fox-IT (2011). *Operation Black Tulip: Certificate authorities lose authority.* (DigiNotar post-mortem)
- 📄 Various Cloudflare engineering blogs on jumbo frames + datacenter networking

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF)
- 📖 [Professor Messer SK0-005 videos](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)
- 📖 *TCP/IP Illustrated, Vol. 1* (W. Richard Stevens) — depth on what's beneath
- 📖 *High Performance Browser Networking* (Ilya Grigorik) — LB and modern protocols
