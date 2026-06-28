# Module 3: Routing & Switching 🔀

> **Why this module matters:** This is where networking becomes a living system. You'll learn how packets find their way across the Internet (routing) and how frames cross a LAN (Local Area Network) floor without colliding (switching). This module is the operational heart of every enterprise network, and ~15 of your 90 exam questions land here.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Module 1 (OSI layers, especially Layers 2 and 3)
> - Module 2 (subnetting, CIDR, IPv4 addressing, routes are written in CIDR)
> - The difference between MAC and IP addresses
>
> If subnetting still feels like math homework, pause and drill 10 more problems before continuing.

---

## 🚇 A Story: Subway Switching vs City-Wide Routing

Imagine a subway station. Trains arrive, the operator looks at the train's destination, and routes it to one of several tracks heading deeper into the system. The operator doesn't know where every passenger is going, only which track corresponds to which next station. That's a **switch**: a Layer 2 device matching MAC addresses to switch ports.

Now imagine the citywide transportation authority deciding which subway line a passenger should take to get from the airport to the stadium. The authority maintains a map of *all* lines and their interchange points, picks the cheapest/fastest route, and updates the map whenever a line closes or opens. That's a **router**: a Layer 3 device maintaining a routing table and picking the next-hop IP for each packet.

Switches move things within one zone (the subway station / LAN). Routers move things between zones (different subway lines / different IP networks). Both run continuously, both must converge fast when things change, and both have failure modes you'll get tested on (STP loops, routing-loop fights, VLAN (Virtual Local Area Network) misconfigurations).

This module covers both, and the bridging concepts (VLANs, trunking, link aggregation) that knit them together.

---

## 🚦 Routing, Static vs Dynamic

A **route** says: "to reach destination network X, send the packet to next-hop IP Y via interface Z." The collection of routes a router knows is its **routing table**.

| Route type | Source | Pros | Cons |
|------------|--------|------|------|
| **Directly connected** | Auto-added when an interface gets an IP | Always correct, zero overhead | Only covers immediate subnets |
| **Static** | Hand-configured by admin | Predictable, no protocol overhead, no bandwidth used | Doesn't adapt to failures; tedious at scale |
| **Default** | `0.0.0.0/0` (matches everything) | Catch-all "send unknown traffic this way" | Loses specificity; bad if multiple paths needed |
| **Dynamic** | Learned from a routing protocol | Adapts automatically; scales | Protocol complexity, CPU/bandwidth overhead |

🎯 **Exam pattern:** *"A small office has 3 routers and rarely changes, which routing approach?"* → Static (no need for protocol overhead). *"An ISP (Internet Service Provider) with 200 routers across multiple continents?"* → Dynamic (BGP (Border Gateway Protocol), OSPF (Open Shortest Path First)).

### Administrative Distance (AD (Active Directory)), Tiebreaker Between Sources

When multiple sources teach the router about the *same* destination, AD picks a winner. Lower AD = more trusted.

| Source | AD (Cisco) |
|--------|------------|
| Directly connected | 0 |
| Static route | 1 |
| EIGRP (internal) | 90 |
| OSPF | 110 |
| RIPv2 | 120 |
| iBGP | 200 |
| Unknown / unreachable | 255 |

🧠 **Memory hook:** "0, 1, 90, 110, 120" directly connected beats static beats EIGRP beats OSPF beats RIP. (BGP eBGP is 20, iBGP is 200 context matters.)

---

## 🛰️ Dynamic Routing Protocols, IGP vs EGP

| Category | Scope | Examples |
|----------|-------|----------|
| **IGP** (Interior Gateway Protocol) | Inside a single autonomous system (AS) | RIP, OSPF, EIGRP, IS-IS |
| **EGP** (Exterior Gateway Protocol) | Between autonomous systems | **BGP** (only real EGP in use) |

### IGP comparison

| Protocol | Algorithm | Metric | Convergence | Best for | Standard |
|----------|-----------|--------|-------------|----------|----------|
| **RIP / RIPv2** | Distance vector | Hop count (max 15) | Slow (30s updates, 180s+ timeouts) | Tiny networks; legacy | RFC 2453 (Malkin, 1998) |
| **OSPF** | Link state (Dijkstra) | Cost (reference BW / link BW) | Fast (seconds) | Mid-large enterprises | RFC 2328 (OSPFv2, Moy, 1998); RFC 5340 (OSPFv3 for IPv6) |
| **EIGRP** | Advanced distance vector (hybrid) | Composite, bandwidth + delay (default) | Fast (seconds) | Cisco shops (now open standard via RFC 7868, 2016) | Cisco-developed; standardized as informational RFC |
| **IS-IS** | Link state | Cost | Fast | Large ISPs | ISO 10589 |
| **BGP** | Path vector | Path attributes (AS-PATH, LOCAL_PREF, MED, …) | Slow (designed for stability, not speed) | Inter-AS / Internet backbone | RFC 4271 (Rekhter, Li, Hares, 2006) |

🎯 **Exam pattern:** *"Which protocol does the public Internet use to route between ISPs?"* → BGP. *"Which IGP uses Dijkstra's algorithm?"* → OSPF. *"Which is limited to 15 hops?"* → RIP.

### OSPF basics, what to know for Network+

- **Areas:** OSPF networks are divided into areas; area 0 is the backbone all others must connect to (directly or via virtual links).
- **Router roles:** Internal Router (single area), Area Border Router (ABR between areas), Autonomous System Boundary Router (ASBR into/out of OSPF), Backbone Router (in area 0).
- **Hello packets:** sent every 10s on broadcast media (Ethernet) to discover and maintain neighbor relationships.
- **DR / BDR (Designated Router / Backup):** elected on broadcast networks to reduce neighbor adjacencies, only DR/BDR fully exchange LSAs with all routers.
- **Multicast addresses:** 224.0.0.5 (all OSPF routers) and 224.0.0.6 (DR/BDR).

### EIGRP basics

- Composite metric, by default uses bandwidth + delay; can include load, reliability, MTU
- DUAL (Diffusing Update Algorithm), selects loop-free best path; backup "feasible successor" precomputed for fast failover
- Operates over IP protocol 88 (not TCP (Transmission Control Protocol)/UDP (User Datagram Protocol))
- Multicast 224.0.0.10

### BGP basics

- Sits over TCP/179 between peers
- Two types: **eBGP** (between different ASes AD 20) and **iBGP** (within the same AS AD 200)
- Path selection considers ~12 attributes; the most-tested: AS-PATH (shortest preferred), LOCAL_PREF (higher preferred locally), MED (lower preferred from neighbors)
- Slow convergence by design, Internet stability > rapid change

---

## 🔄 Routing Loops & Loop Prevention

| Mechanism | What it does |
|-----------|--------------|
| **Split horizon** | Don't advertise a route back out the interface it was learned on |
| **Route poisoning** | Advertise a failed route with infinite metric (e.g., RIP hop count 16) so neighbors immediately mark it unreachable |
| **Hold-down timers** | Refuse to accept route updates for a downed route until the timer expires |
| **TTL (Time To Live)** | IP header field decremented per hop; packet dropped at 0, prevents infinite forwarding |

---

## 🔌 Switching Fundamentals

A switch is an L2 device that maintains a **MAC address table** (sometimes called CAM table, Content-Addressable Memory). Every time a frame arrives, the switch:

1. Records the source MAC + port (learning)
2. Looks up the destination MAC in the table
3. If found → forwards out only that port (unicast forwarding)
4. If not found → **floods** the frame out all other ports (acts like a hub once)
5. Records replies → table fills up over a few seconds

### Broadcast domain vs collision domain

| Domain | Meaning | Scope |
|--------|---------|-------|
| **Collision domain** | Set of devices that share a physical channel (one sender at a time) | One per switch port (full duplex); one per hub (shared) |
| **Broadcast domain** | Set of devices that receive each other's broadcast frames | One per VLAN / one per L3 interface |

**Each switch port = its own collision domain.** Switching effectively eliminated collisions in modern LANs, only hubs (extinct) created collision-shared media.

**A router (or VLAN boundary) = the boundary of a broadcast domain.** Broadcasts stop at L3.

---

## 🏷️ VLANs (Virtual LANs)

A **VLAN** is a logical grouping of switch ports that act as if they're on the same physical switch, even if they're in different rooms or buildings. Defined by **IEEE 802.1Q** (1998).

| Benefit | How |
|---------|-----|
| **Segmentation** | Separate broadcast domains without separate physical switches |
| **Security** | Isolate sensitive traffic (PCI, guest, IoT) onto their own VLAN |
| **Flexibility** | Move people without recabling |
| **Performance** | Smaller broadcast domains = less broadcast traffic per device |

### VLAN IDs

- 12-bit field → 4,096 possible VLANs (0 and 4095 reserved → **4,094 usable**)
- VLAN 1 = the default VLAN on most switches (recommend renaming/disabling for security)

### Access ports vs Trunk ports

| Port type | Carries | Tagging | Use case |
|-----------|---------|---------|----------|
| **Access** | One VLAN | Untagged (the device doesn't know about VLANs) | End-host facing (PC, printer, VoIP phone) |
| **Trunk** | Many VLANs | 802.1Q tagged | Switch-to-switch, switch-to-router-on-stick |

### The 802.1Q tag (4 bytes)

Inserted into the Ethernet frame between source MAC and EtherType. Contains:

- **TPID** (Tag Protocol ID, 16 bits) = 0x8100
- **PCP** (Priority Code Point, 3 bits) = CoS / QoS (Quality of Service) priority
- **DEI** (Drop Eligible Indicator, 1 bit)
- **VID** (VLAN ID, 12 bits) = the actual VLAN number

### Native VLAN, the tricky concept

The **native VLAN** is the *one* VLAN on a trunk whose traffic is sent **untagged**. Default = VLAN 1. **Both ends of the trunk MUST agree**, mismatched native VLANs cause VLAN hopping vulnerabilities and CDP (Customer Data Platform)/LLDP errors.

🚨 **Trap on the exam:** Best practice = change the native VLAN from the default (VLAN 1) AND don't use the native VLAN for user traffic.

### Voice VLAN

Modern switches let one access port carry a single user data VLAN PLUS a separate **voice VLAN** for the IP phone (commonly seen on Cisco). The phone tags voice frames with the voice VLAN ID, but passes the user's PC traffic untagged on the data VLAN. Powered by PoE (Power over Ethernet) (Module 4).

### Inter-VLAN routing

VLANs are L2, traffic between VLANs requires L3. Three implementations:

- **Router on a stick**, single router interface trunked, with sub-interfaces per VLAN
- **L3 switch with SVIs** (Switched Virtual Interfaces), most common today
- **Separate physical router interfaces per VLAN**, wasteful, rarely seen

---

## 🌳 STP (Spanning Tree Protocol), Loop Prevention at L2

Without loop prevention, redundant L2 paths between switches create **bridging loops** that flood the network until it collapses. Standardized as **IEEE 802.1D** (Radia Perlman, original 1985 paper "An Algorithm for Distributed Computation of a Spanning Tree in an Extended LAN" was the foundation).

### How STP works (the 30,000-foot view)

1. **Elect a root bridge**, the switch with the lowest Bridge ID (Priority + MAC). Default priority = 32,768. Tie → lowest MAC wins.
2. **Each non-root switch picks a Root Port**, its best path back to the root.
3. **For each link/segment, elect a Designated Port**, the port that forwards traffic on that segment.
4. **All other ports = Blocking**, they exist for redundancy but don't pass user data.

### Port roles

| Role | Function |
|------|----------|
| **Root Port** | The single best path to the root bridge (one per non-root switch) |
| **Designated Port** | The forwarding port for each segment (the one that "owns" advertising that segment) |
| **Blocking / Alternate / Backup** | Redundant, doesn't forward unless an active path fails |

### Port states (classic STP)

| State | What happens |
|-------|--------------|
| **Disabled** | Admin shut |
| **Blocking** | Doesn't forward; listens to BPDUs |
| **Listening** | Transitioning; sends/receives BPDUs |
| **Learning** | Learns MACs but doesn't yet forward |
| **Forwarding** | Normal operation |

Convergence in classic STP: ~30–50 seconds (slow).

### RSTP (Rapid STP), IEEE 802.1w (2001)

Reduces convergence to **seconds** by replacing listening/learning with negotiated handshake states. Most modern switches run RSTP by default.

### MSTP, IEEE 802.1s

Multiple Spanning Tree, runs one STP instance per VLAN group, enabling load balancing across redundant trunks (different VLANs prefer different paths).

### STP variations (Cisco-flavored, frequently tested)

| Variant | Description |
|---------|-------------|
| **PVST+** | Per-VLAN STP (one instance per VLAN), Cisco proprietary, classic |
| **Rapid PVST+** | RSTP per-VLAN |
| **PortFast** | Skip listening/learning; immediately go to forwarding (use ONLY on access ports facing end hosts, never trunk) |
| **BPDU Guard** | If a PortFast port receives a BPDU, error-disable it (defends against rogue switches) |
| **Root Guard** | Prevents an interface from becoming a root port (defends root-bridge designation) |

🎯 **Exam pattern:** *"Why does it take ~30s to get a link light to ping on a wall-port switch?"* → STP listening/learning. Solution = enable PortFast on access ports.

---

## 🤝 Link Aggregation (LAG, LACP, EtherChannel)

Bundle multiple physical links into ONE logical link for more bandwidth + redundancy.

| Standard | Scope |
|----------|-------|
| **IEEE 802.3ad** | The original LAG standard |
| **IEEE 802.1AX** | Current revision (2008+) |
| **LACP** | Link Aggregation Control Protocol, the dynamic negotiation protocol |
| **EtherChannel** | Cisco's name; supports LACP (standard) or PAgP (Cisco proprietary) |

**Benefits:**
- Up to 8 active links bonded; throughput ≈ sum (with load-balancing hashing)
- If one link fails, traffic continues on the rest, fast failover (faster than STP reconvergence)
- Used between switches, between switch and server, switch and firewall

🚨 **Trap:** Throughput is not always exactly N × link-speed, load balancing typically hashes by src/dst MAC or IP, so a single flow may stick to one link.

---

## 🔐 Port Security & Switch Hardening

Switches need security too. Network+ tests:

| Feature | Purpose |
|---------|---------|
| **Port security** | Limit number of MACs per port; specify allowed MACs |
| **Sticky MAC** | Dynamically learn the first MAC and treat as static-allowed |
| **DHCP (Dynamic Host Configuration Protocol) snooping** | Switch tracks legitimate DHCP servers per port; drops DHCP from rogue ports |
| **Dynamic ARP Inspection (DAI)** | Validates ARP replies against DHCP snooping table, defeats ARP spoofing |
| **BPDU Guard** | (See STP), disable port if BPDUs received on access-only port |
| **Disabling unused ports** | Admin shut all unused ports (defense in depth) |
| **Change default credentials** | Default admin/admin is a hacker's gift |
| **Disable insecure protocols** | Telnet, HTTP (Hypertext Transfer Protocol), replace with SSH (Secure Shell), HTTPS (HTTP Secure) |
| **Out-of-band management** | Dedicated mgmt VLAN or mgmt port, never on the user data path |

🎯 **Exam pattern:** *"A user plugs a personal Wi-Fi router into a wall port. What switch feature prevents the rogue switch from disrupting STP?"* → BPDU Guard. *"What feature limits the number of MACs that can connect to a port?"* → Port security.

---

## 🛣️ Common Routing & Switching Devices

| Device | Layer | What it does |
|--------|-------|--------------|
| **Hub** | 1 | Extinct. Repeats all signals on all ports. Shared collision domain. |
| **Bridge** | 2 | Predecessor of the switch, connects 2 segments based on MAC. |
| **Switch** | 2 | Forwards by MAC; one collision domain per port. |
| **L3 switch** | 2/3 | Switch + routing functions; SVIs allow inter-VLAN routing. |
| **Router** | 3 | Forwards by IP between networks. |
| **Modem** | 1/2 | Modulates digital ↔ analog (cable, DSL, fiber ONT). |
| **Firewall** | 3/4/7 | Filters by rules (Module 6). |
| **Load balancer** | 4/7 | Distributes traffic across pool of servers. |
| **Wireless AP** | 1/2 | Bridges Wi-Fi (L1/L2) to wired Ethernet (Module 4). |
| **Wireless controller (WLC)** | n/a | Centralized management of many APs. |

---

## 🔬 Scenario Walkthrough, A VLAN Problem

> **Scenario:** Marketing complains that they cannot reach the marketing file server even though the new conference-room PC was just installed. Engineers verified the wall port works (they tested with their laptop and got an IP). What's wrong?

**Walkthrough:**
1. Engineer's laptop got an IP, so the port is live, DHCP works.
2. But the engineer's laptop is *probably* on the *engineering* VLAN, that's why it worked for them.
3. Marketing PC was plugged into the same port and got an IP via DHCP, but on the wrong VLAN (engineering), so it can't see the marketing file server (which is on the marketing VLAN, isolated by L2 segmentation).
4. **Fix:** reconfigure the wall port to be an access port on the marketing VLAN, or assign DHCP from the marketing scope, or use 802.1X dynamic VLAN assignment based on user identity.
5. Verify: marketing PC now gets a marketing-VLAN IP, can reach the file server.

This is a classic PBQ, you'll see screen captures of switch config and have to identify the misconfigured `switchport access vlan` line.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Switches stop broadcasts" | NO, switches *forward* broadcasts within a broadcast domain (VLAN). Only routers (or VLAN boundaries) stop them. |
| "Native VLAN is always VLAN 1" | The *default* is VLAN 1. Best practice: change it. |
| "RIP is fine for any small network" | RIP's 15-hop limit and 30s update interval make it unsuitable for almost anything modern. Use OSPF or EIGRP. |
| "OSPF is faster than EIGRP" | Both converge in seconds; EIGRP is often slightly faster on shared media due to DUAL's precomputed feasible successors. |
| "LAG doubles a single flow's bandwidth" | NO, a single TCP flow usually pins to one link (hash-based). Aggregate flows benefit. |
| "STP is enabled by default" | YES on managed switches, and *disabling* it to "fix loops" causes catastrophic broadcast storms. The fix is finding the loop, not killing STP. |
| "PortFast on a trunk port is fine" | NEVER, PortFast on a trunk can cause loops. Access ports only. |
| "Static routes never fail" | They can, if the next-hop interface goes down, the route stays in the table as down (route-tracking helps). |
| "BGP is for huge ISPs only" | True for the public Internet, but enterprises also use BGP to multi-home to multiple ISPs. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Routing table** | Database of destination networks + next hops in a router |
| **Administrative Distance** | Trust ranking when multiple sources teach the same route |
| **Convergence** | Time for all routers to agree on the new topology after a change |
| **AS** | Autonomous System, an independently administered routing domain |
| **IGP / EGP** | Interior / Exterior Gateway Protocol |
| **OSPF area** | Subdivision of OSPF for scaling; area 0 = backbone |
| **DR / BDR** | OSPF Designated / Backup Designated Router |
| **VLAN** | Logical L2 grouping (IEEE 802.1Q) |
| **Native VLAN** | The untagged VLAN on a trunk |
| **Access port / Trunk port** | One VLAN untagged / many VLANs tagged |
| **STP / RSTP / MSTP / PVST+** | Loop-prevention protocol family at L2 |
| **Root bridge** | STP-elected anchor (lowest Bridge ID wins) |
| **PortFast / BPDU Guard / Root Guard** | STP edge hardening |
| **LAG / LACP / EtherChannel** | Link aggregation standards |
| **CAM / MAC table** | Switch's lookup table, MAC → port |
| **Broadcast domain / Collision domain** | Set of devices receiving each other's broadcasts / sharing media |

### Acronyms cheat-row (Module 3)
| Acronym | Meaning |
|---------|---------|
| RIP | Routing Information Protocol |
| OSPF | Open Shortest Path First |
| EIGRP | Enhanced Interior Gateway Routing Protocol |
| BGP | Border Gateway Protocol |
| IS-IS | Intermediate System to Intermediate System |
| AS / ASN | Autonomous System / AS Number |
| AD | Administrative Distance |
| STP | Spanning Tree Protocol |
| RSTP / MSTP | Rapid / Multiple Spanning Tree |
| LACP | Link Aggregation Control Protocol |
| LAG | Link Aggregation Group |
| SVI | Switched Virtual Interface |
| VLAN | Virtual Local Area Network |
| BPDU | Bridge Protocol Data Unit |
| CAM | Content-Addressable Memory |
| DR / BDR | Designated / Backup Designated Router |
| PAT | Port Address Translation |

---

## 📊 Case Study, The 2008 YouTube/Pakistan BGP Hijack

**Situation.** On **24 February 2008**, the Pakistan Telecommunications Authority ordered Pakistan Telecom (AS17557) to block YouTube nationally over a video deemed blasphemous. Pakistan Telecom's network engineers blackholed YouTube's traffic by announcing a more-specific route `208.65.153.0/24` into their BGP table, intended to be internal-only.

**Decision.** Through a router-misconfiguration of their upstream provider PCCW Global (AS3491), the more-specific announcement **leaked into the global Internet routing table**. BGP path selection prefers longer prefix matches (more-specific routes), so every router on the Internet that received this announcement now believed the best path to a /24 inside YouTube's space was through Pakistan Telecom.

**Outcome.** Worldwide YouTube outage for ~2 hours. Traffic flowing toward YouTube's video servers was sucked into Pakistan and dropped. YouTube engineers detected the hijack within minutes by watching BGP feeds (RIPE RIS, Route Views) and counter-announced two /25 routes (more specific than the /24) to attract traffic back, then worked with PCCW to filter the bad announcement. Full recovery took ~2 hours. The incident became the canonical case study in BGP fragility, **the entire Internet's routing trusts whatever its neighbors announce**, with no built-in authentication.

In response, the **RPKI** (Resource Public Key Infrastructure, RFC 6480 onward) was developed: cryptographically signed Route Origin Authorizations (ROAs) let networks publish "AS X is authorized to originate prefix Y." Adoption was slow, only ~50% of routes had ROAs by 2024. Major incidents continued: the 2018 Amazon Route 53 hijack (eNet/AS10297), the 2021 Facebook BGP outage (self-inflicted withdrawal), the 2022 KlaySwap MetaMask hijack ($1.9M stolen).

**Lesson for the exam / for practitioners.** This case touches every Network+ routing concept:

- **BGP path selection** prefers longer prefixes, design implication: announce only what you mean to announce, validate at every peer
- **Convergence speed**, BGP propagated the bad route globally in seconds, but the *deliberate* slow convergence design meant recovery also took minutes
- **Administrative distance**, irrelevant here; this was an inter-AS leak (BGP is the only protocol)
- **Defense in depth**, RPKI, route filters at peers (max-prefix limits), monitoring (BGPmon, RouteViews) all needed in combination
- **The Internet is held together by trust**, Network+ asks about BGP because it's the protocol every multi-homed enterprise touches; understanding why it's both critical and fragile is the differentiator

This case is exactly what Network+ tests when asking, "Why would an enterprise use BGP?" or "What is a route hijack?" The answer is not theoretical, it has happened repeatedly and continues to.

**Discussion (Socratic).**
- **Q1:** If you were the network engineer at PCCW Global the morning of 24 February 2008, what THREE controls (technical + procedural) would you add to your peering policy by end of week? Defend each against the cost of false-positive route rejection that breaks legitimate customer traffic.
- **Q2:** RPKI adoption stalled at ~50% for 15 years. What economic or operational disincentive keeps networks from adopting it, and what single policy change would tip the equation? Compare to TLS (Transport Layer Security) deployment, which went from <40% in 2014 to ~95% in 2024 once Let's Encrypt made it free and easy.
- **Q3:** Pakistan Telecom intended their /24 announcement for internal use only. What's the smallest set of BGP configuration changes (specific config keywords welcome if you know them) on their edge router that would have prevented the leak? Consider both inbound filtering at their upstream and outbound filtering at their own edge.

---

## ✅ Module 3 Summary

You now know:

- 🚦 **Static vs dynamic routing** and the AD pecking order (0 < 1 < 90 < 110 < 120)
- 🛰️ The major **IGPs** (RIP, OSPF, EIGRP, IS-IS) and **BGP** as the only EGP
- 🔄 Routing **loop prevention** (split horizon, route poisoning, TTL)
- 🔌 **Switch operation**, MAC table learning, flooding, collision vs broadcast domains
- 🏷️ **VLANs**, 802.1Q tagging, access vs trunk ports, native VLAN, voice VLAN, inter-VLAN routing
- 🌳 **STP** family, root bridge election, port roles, RSTP convergence, PortFast/BPDU Guard
- 🤝 **Link aggregation**, LACP, EtherChannel benefits and caveats
- 🔐 **Port security**, sticky MAC, DHCP snooping, DAI

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 4, Wireless & SOHO Networks](../Module-04-Wireless/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 4](../Module-04-Wireless/Reading.md) extends switching into the wireless edge; [Module 6](../Module-06-Security/Reading.md) layers 802.1X, NAC, and ACLs onto the routing/switching substrate; [Module 7](../Module-07-Monitoring-Tools/Reading.md) monitors routers and switches via SNMP (Simple Network Management Protocol), syslog, and NetFlow; [Module 8](../Module-08-Troubleshooting/Reading.md) revisits VLAN and STP misconfiguration as top-cause incidents.
> - Cross-course: CompTIA Security+ (course 09) Module 6 (Network Security) builds on these primitives.
> - Practice: Practice Exam 1 has ~7 routing/switching questions; the Final Mock has ~12.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 Perlman, R. (1985). "An Algorithm for Distributed Computation of a Spanning Tree in an Extended LAN." *9th Data Communications Symposium*. (The STP paper.)
- 📄 Moy, J. (1998). [RFC 2328 *OSPF Version 2*](https://www.rfc-editor.org/rfc/rfc2328).
- 📄 Rekhter, Y., Li, T., Hares, S. (2006). [RFC 4271 *A Border Gateway Protocol 4 (BGP-4)*](https://www.rfc-editor.org/rfc/rfc4271).
- 📄 IEEE 802.1Q (current 2022 revision). [*Virtual Bridged Local Area Networks*](https://standards.ieee.org/standard/802_1Q-2022.html).

**Case-study sources:**
- 📄 RIPE NCC (2008). "YouTube Hijacking: A RIPE NCC RIS Case Study." [RIPE technical brief](https://www.ripe.net/publications/news/industry-developments/youtube-hijacking-a-ripe-ncc-ris-case-study).
- 📄 Kuhrer, M. et al. (2018). "A First Look at RPKI Adoption." *Internet Measurement Conference 2018*.

**Practitioner / exam:**
- 📖 [Professor Messer N10-009, Routing & Switching playlist](https://www.professormesser.com/network-plus/n10-009/n10-009-video-training-course/)
- 📖 Cisco's free [Networking Basics](https://www.netacad.com/), register for sample CCNA content
- 📘 Wendell Odom, *CCNA 200-301 Official Cert Guide*, overkill for Network+ but the routing/switching gold standard
