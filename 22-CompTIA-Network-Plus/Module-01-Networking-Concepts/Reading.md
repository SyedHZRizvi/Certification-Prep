# Module 1: Networking Concepts & OSI Model 🌐

> **Why this module matters:** Domain 1 (Networking Concepts) is **23% of the exam** — second largest. Every later question will assume you can place any protocol, device, or attack at the correct OSI layer. If you cannot recite the 7 layers and what lives at each in your sleep by the end of this module, *nothing else in Network+ will stick*.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic computer literacy — what an IP address is (even vaguely), what a router is, why you have Wi-Fi at home
> - Reading hex and binary at the level of "1010 = 10" and "0xFF = 255". If you've never seen binary, spend 20 min on Khan Academy's "Number systems" before continuing.
>
> If those are shaky, pause and review. This module assumes zero prior *networking* background but does assume the basic computing literacy above.

---

## 🏢 A Story: How a Letter Becomes a Network Packet

Picture an office in 1995. Tony, a salesman, wants to send a contract to Mei, an accountant in another building. He doesn't drop the contract on her desk himself — he hands it to his admin, who puts it in an envelope (with Mei's name on it), then drops the envelope in the inter-office mail bin. The mailroom collects the bin, sorts envelopes by building, hands them off to the courier, who drives them across town. At the other end the process unwinds in reverse: courier hands off to Mei's mailroom, mailroom sorts by floor, Mei's admin opens the envelope, and Mei reads the contract.

Each handoff added a layer of packaging — admin (envelope), mailroom (mailbag), courier (truck) — and each layer of packaging is *invisible* to every other layer. The courier doesn't know what's in the contract. The mailroom doesn't care which courier. Mei doesn't see the envelope flap. Each layer just trusts its peer at the other end to use the same conventions.

Welcome to the **OSI model**. Networking works *exactly* this way. Your browser hands data to TCP, TCP hands it to IP, IP hands it to Ethernet, Ethernet hands it to copper or fiber. At the other end, each layer peels off its envelope and hands the contents to its peer above. The whole game is **layered abstraction**, and the cleanest way to reason about it is the 7-layer OSI model from 1984.

---

## 🎯 The OSI 7-Layer Model (Memorize Cold)

The OSI Reference Model was standardized as **ISO/IEC 7498-1** in 1984, with original work going back to Hubert Zimmermann's seminal paper "OSI Reference Model — The ISO Model of Architecture for Open Systems Interconnection" (*IEEE Transactions on Communications*, vol. 28, no. 4, April 1980). The model never fully matched real protocols (the Internet uses a 4–5 layer TCP/IP model in practice), but it remains the *teaching* and *troubleshooting* framework — and **Network+ tests on the 7-layer OSI version, not on TCP/IP layers**.

| # | Layer | What it does | PDU | Addresses/IDs | Examples |
|---|-------|--------------|-----|---------------|----------|
| 7 | **Application** | User-facing protocols | Data | Hostnames | HTTP, HTTPS, FTP, DNS, SMTP, SSH |
| 6 | **Presentation** | Data format, encryption, compression | Data | — | TLS (debatable — see note), JPEG, ASCII, character encodings |
| 5 | **Session** | Open / maintain / close sessions | Data | — | NetBIOS, RPC, SQL, SIP session setup |
| 4 | **Transport** | End-to-end delivery, segmentation | **Segment** (TCP) / **Datagram** (UDP) | **Port numbers** | TCP, UDP |
| 3 | **Network** | Logical addressing, routing | **Packet** | **IP addresses** | IP, ICMP, OSPF, EIGRP, BGP |
| 2 | **Data Link** | Hop-to-hop delivery on a single segment | **Frame** | **MAC addresses** | Ethernet, 802.11, PPP, ARP, switches |
| 1 | **Physical** | Bits on the wire/radio/fiber | **Bits** | — | Cabling, voltage, RJ45, fiber, hubs, repeaters |

### Mnemonics (pick whichever sticks)

- Bottom→top: **"Please Do Not Throw Sausage Pizza Away"** (Physical, Data Link, Network, Transport, Session, Presentation, Application)
- Top→bottom: **"All People Seem To Need Data Processing"** (Application, Presentation, Session, Transport, Network, Data Link, Physical)

**MEMORIZE THIS.** You will be tested on layer numbers and names directly — pure recall — and almost every other question will rely on this scaffolding.

---

## 🔍 Each Layer in Plain English

### Layer 1 — Physical

The wire, the radio wave, the photon. Everything analog — voltage levels, frequencies, modulation, connector pinouts. The Physical layer doesn't know what bits "mean." It just moves them.

**Devices:** Hubs (extinct in practice; tested anyway), repeaters, media converters, transceivers (SFP/SFP+/QSFP), cables (UTP/STP copper, multi-mode and single-mode fiber, coax).

**Standards:** RJ45 pinouts (TIA/EIA-568A and 568B), 10BASE-T, 100BASE-TX, 1000BASE-T, 10GBASE-T, 1000BASE-LX (fiber), and physical layer of 802.11 (modulation, channel widths).

🎯 **Exam pattern:** *"Which device operates at Layer 1?"* → Hub, repeater, media converter, cable. *"Cable tester finds a fault at 80 ft on a 100 ft Cat6 run — what layer issue?"* → Layer 1.

### Layer 2 — Data Link

Hop-to-hop delivery on a single network segment. Layer 2 frames carry data between *directly attached* devices using **MAC addresses** (48-bit hardware addresses burned into NICs). When traffic needs to cross a router, the L2 frame is stripped and a *new* L2 frame is built for the next hop.

**Sublayers:** IEEE 802 split L2 into two sublayers:

- **LLC (Logical Link Control)** — defined in IEEE 802.2; provides multiplexing/flow control above MAC
- **MAC (Media Access Control)** — defined per medium: 802.3 (Ethernet), 802.11 (Wi-Fi), 802.15 (Bluetooth/Zigbee)

**Devices:** Switches, bridges, wireless access points (the radio side is L1; the framing is L2).

**Protocols:** Ethernet (802.3), Wi-Fi (802.11), PPP, ARP (debated — ARP straddles L2/L3 because it maps L3→L2).

🎯 **Exam pattern:** *"At which layer does a switch forward traffic?"* → Layer 2. *"A switch builds a MAC address table to decide where to send frames"* — pure L2 description.

### Layer 3 — Network

**Logical** addressing (IP) and **routing** between networks. While L2 moves frames between directly connected devices, L3 moves packets between networks that may be continents apart, choosing the next hop at each router.

**Protocols:** IPv4, IPv6, ICMP (ping, traceroute), IGMP (multicast group membership), routing protocols (RIP, OSPF, EIGRP, IS-IS, BGP).

**Devices:** Routers, Layer 3 switches.

🎯 **Exam pattern:** Any question about IP addressing, subnetting, routing decisions, or "the router decides…" lives at L3.

### Layer 4 — Transport

**End-to-end** delivery (host-to-host) with **port numbers** to multiplex multiple conversations on the same host. Decides whether to be reliable (TCP — handshake, retransmit, in-order delivery) or fast and stateless (UDP — fire-and-forget).

**Protocols:** TCP (RFC 793, 1981; updated RFC 9293, 2022), UDP (RFC 768, 1980), and newer QUIC (RFC 9000, 2021 — runs over UDP but provides TCP-like reliability at L4).

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | 3-way handshake (SYN, SYN-ACK, ACK) | None |
| Reliability | Yes (sequence + ack + retransmit) | No |
| Ordering | Yes (sequence numbers) | No |
| Overhead | Higher (20-byte minimum header) | Lower (8-byte header) |
| Use cases | Web, email, SSH, file transfer | DNS queries, VoIP, video streaming, DHCP, SNMP |

🎯 **Exam pattern:** *"Voice over IP suffers from jitter on a high-latency link. Which transport protocol does VoIP use?"* → UDP (real-time apps prefer UDP — retransmits are useless for live audio).

### Layer 5 — Session

Open, maintain, and gracefully close *logical conversations* between two applications. In real-world TCP/IP this layer is largely absorbed into Transport or Application, but OSI calls it out separately.

**Examples:** NetBIOS session services, SIP session establishment, RPC, SQL session management.

### Layer 6 — Presentation

How the bytes are *encoded*. Character sets (ASCII, UTF-8), file formats (JPEG, MPEG), encryption, compression. Translates between application-specific formats and the network's wire format.

**Where TLS lives** — debated. CompTIA's Network+ commonly places SSL/TLS at Layer 6 (because it's about encrypting and presenting data); some texts argue it spans 5–7. **On the exam, if asked, choose Presentation (L6).**

### Layer 7 — Application

The protocols users actually interact with — directly or through their browser, mail client, etc.

**Examples:** HTTP, HTTPS, DNS, DHCP, FTP, SFTP, SMTP, IMAP, POP3, SNMP, SSH, NTP, LDAP.

🚨 **Trap on the exam:** "Application layer" in OSI ≠ the apps on your computer (Chrome, Outlook). It means the *protocol* the app speaks to the network.

---

## 📦 Encapsulation — How a Packet Is Built

When you click "Send" in your email client, the bytes get wrapped, layer by layer, like nested envelopes:

```
[Application data: "Dear Mei, …"]
   ↓ Add HTTP/SMTP headers (Layer 7)
[Application PDU]
   ↓ Add TCP/UDP header + port numbers (Layer 4) → SEGMENT
[TCP header | Application data]
   ↓ Add IP header + IP addresses (Layer 3) → PACKET
[IP header | TCP header | Application data]
   ↓ Add Ethernet header + MAC addresses (Layer 2) → FRAME
[Eth header | IP header | TCP header | App data | Eth trailer (FCS)]
   ↓ Convert to bits, send out as voltage/light/radio (Layer 1)
```

At the destination, each layer **decapsulates** — strips its own header — and hands the contents to the layer above.

🎯 **Exam pattern:** *"At which layer is the IP header added?"* → Layer 3. *"What is the Layer 2 PDU called?"* → Frame.

### PDU Names (Memorize the Mapping)

| Layer | PDU Name |
|-------|----------|
| 1 — Physical | Bits |
| 2 — Data Link | **Frame** |
| 3 — Network | **Packet** |
| 4 — Transport | **Segment** (TCP) or **Datagram** (UDP) |
| 5–7 | Data (or "message") |

🧠 **Memory hook:** "Some People Fear Birthdays" — bottom up: bits, frames, packets, segments. (Or remember: at the layer where you address by IP, you have a packet; at MAC, you have a frame.)

---

## 🕸️ Network Topologies

Topology = the physical or logical *shape* of how nodes connect.

| Topology | Diagram | Pros | Cons | Use case |
|----------|---------|------|------|----------|
| **Bus** | All nodes share one cable | Cheap, simple | Single cable fault = whole net down; collisions | Legacy (10BASE-2/5); rare today |
| **Star** | Every node → central switch/hub | Easy to add/remove nodes; isolated faults; dominant LAN topology | Switch is single point of failure | Modern Ethernet LANs |
| **Ring** | Nodes connect in a loop, traffic circulates | Predictable, deterministic timing | One break = whole ring down (unless dual-ring like FDDI) | Token Ring, FDDI, MetroEthernet rings |
| **Mesh (full)** | Every node directly connects to every other | Massive redundancy; no single-link failure matters | Expensive — N(N-1)/2 links | Backbone networks, internet core |
| **Mesh (partial)** | Some nodes have multiple paths; others don't | Cheaper than full, still resilient | Less predictable | WAN designs, large data centers |
| **Hybrid** | Combination (e.g., star-of-stars) | Pick the best for each segment | Complex documentation | Most real enterprise networks |
| **Point-to-point** | Two nodes, one link | Simplest possible | Doesn't scale | WAN links, fiber between data centers |

### Full mesh math — memorize the formula

**Links needed = N(N − 1) / 2** where N = number of nodes.

- 4 nodes → 6 links
- 5 nodes → 10 links
- 10 nodes → 45 links

This is on the exam directly: *"In a 6-node full mesh, how many links?"* → 6×5/2 = 15.

### Logical vs Physical Topology

- **Physical** = the cabling layout you'd see in a closet diagram
- **Logical** = the flow of data — sometimes different from physical

Example: Token Ring was *physically* a star (every node ran to a central MAU) but *logically* a ring (data passed token-by-token in a circle).

---

## 📡 Traffic Types — Unicast, Broadcast, Multicast, Anycast

How many recipients does a single transmission target?

| Type | One-line | Example | IPv4 address style | IPv6 |
|------|----------|---------|---------------------|------|
| **Unicast** | One sender → one specific receiver | Browser → web server | Specific destination IP | Specific destination IP |
| **Broadcast** | One sender → ALL on a segment | ARP request, DHCP Discover | 255.255.255.255 (limited) or x.x.x.255 (directed) | **No broadcast in IPv6** — replaced with multicast |
| **Multicast** | One sender → a *group* of subscribed receivers | Streaming video to subscribers, OSPF hello | 224.0.0.0/4 (Class D) | FF00::/8 |
| **Anycast** | One sender → the *nearest* of multiple identical receivers | DNS root servers, CDNs | Same IP advertised from multiple sites; BGP picks closest | Same — natively supported |

🎯 **Exam pattern:** *"DHCP DISCOVER uses what kind of address?"* → Broadcast (255.255.255.255 — client doesn't yet know its DHCP server). *"Which routing protocol uses multicast to find neighbors?"* → OSPF (224.0.0.5).

🚨 **Trap:** IPv6 has **no broadcast**. Everything broadcasty in IPv4 (ARP, etc.) is replaced by multicast in IPv6 (Neighbor Discovery uses multicast).

---

## 🏗️ Network Architecture & Categorization

### By scope (size and distance)

| Term | Span | Example |
|------|------|---------|
| **PAN** (Personal Area) | 1–10 m | Bluetooth headphones, USB tether |
| **LAN** (Local Area) | One building / one site | Office Ethernet + Wi-Fi |
| **CAN** (Campus Area) | Multiple adjacent buildings | University, hospital complex |
| **MAN** (Metropolitan Area) | One city / metro region | City fiber ring, ISP regional network |
| **WAN** (Wide Area) | Multi-city / country / global | The Internet; corporate connections between offices |
| **SAN** (Storage Area) | Block-level storage fabric | Data-center fiber-channel network |
| **WLAN** (Wireless LAN) | LAN over Wi-Fi | Office or home Wi-Fi |

### By architectural model

**Three-tier (classic enterprise)** — pioneered by Cisco in the 1990s:

| Tier | Role | Devices |
|------|------|---------|
| **Core** | High-speed backbone | Backbone routers/switches |
| **Distribution (Aggregation)** | Routing/policy between access and core | L3 switches, firewalls |
| **Access (Edge)** | Connect endpoints | Access switches, Wi-Fi APs |

**Two-tier "collapsed core"** — Distribution and Core combined; common for small/mid enterprises.

**Spine-and-leaf** — modern data-center design that replaces three-tier:

- **Spine** switches form the backbone; **leaf** switches connect servers
- Every leaf connects to every spine (full mesh between layers)
- Predictable latency (always 2 hops within the fabric); horizontal scale by adding leaves

🎯 **Exam pattern:** *"Which architecture provides predictable east-west traffic latency in a data center?"* → Spine-and-leaf.

### SOHO (Small Office / Home Office)

A combo device usually integrates **router + switch + Wi-Fi AP + firewall + DHCP server**. The Wi-Fi router on your home shelf.

---

## 🔬 Scenario Walkthrough — Click → Page Loads

You type `https://example.com` and hit Enter. Trace what happens, layer by layer:

1. **Application (L7):** Browser asks DNS resolver to translate `example.com` to an IP. The DNS query itself is application-layer.
2. **Transport (L4):** DNS query goes over UDP/53 (or TCP/53 if response is large). Browser opens a TCP connection to the resolved IP on port 443.
3. **Presentation (L6):** TLS handshake encrypts the channel — certificates exchanged, cipher suite chosen, session keys derived.
4. **Session (L5):** Logical session for the HTTPS conversation is established.
5. **Application (L7):** Browser sends HTTP GET `/`.
6. **Network (L3):** Each TCP segment is wrapped in an IP packet with source/dest IP, then routed hop-by-hop. Your router consults its routing table; sends the packet via the default gateway to the ISP, and so on.
7. **Data Link (L2):** At every hop, the IP packet is wrapped in an Ethernet (or WAN) frame addressed to the *next-hop* MAC. The frame is stripped and rebuilt at each router.
8. **Physical (L1):** Bits move as voltages on copper, light pulses on fiber, or radio modulation on Wi-Fi.

When the response comes back, every layer unwinds in reverse and the browser paints the page.

This is a *perfect* PBQ-style scenario: CompTIA loves to ask "at which OSI layer does the TLS handshake occur?" (6) or "the next-hop MAC is added at which layer?" (2).

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "The OSI model is what TCP/IP uses in practice" | NO — TCP/IP uses a 4-layer model (Link, Internet, Transport, Application). OSI is the teaching/reference model. Network+ tests OSI. |
| "Switches operate at Layer 3" | A traditional switch is L2 (forwards by MAC). A *L3 switch* is a hybrid that also routes. Default answer = L2 unless the question specifies L3. |
| "ARP is Layer 2" | ARP straddles L2/L3 because it maps L3 IPs to L2 MACs. CompTIA usually places it at L2. Some texts say "between 2 and 3." Pick L2 if forced. |
| "TLS is at Layer 7" | Network+ commonly puts TLS at Layer 6 (Presentation). Choose L6 unless the question specifies otherwise. |
| "Broadcast = multicast" | Broadcast = ALL devices on the segment. Multicast = only devices subscribed to the group. Very different. |
| "Hubs are still in use" | Effectively extinct. Tested anyway — they're L1, repeat ALL signals on ALL ports, half-duplex only, cause collision domains. |
| "Full mesh requires N² links" | Common mistake — it's N(N−1)/2, NOT N². For 5 nodes: 10 links, not 25. |
| "Star topology means one big circular cable" | No — star has a *central device* (switch/hub) with point-to-point links to each node. The "circle" is a ring topology. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **OSI Model** | 7-layer reference model from ISO 7498-1 (1984) |
| **TCP/IP Model** | 4-layer practical model used by the Internet |
| **PDU** | Protocol Data Unit — name of the data chunk at each layer |
| **Encapsulation** | Each layer wraps the upper PDU with its own header |
| **Decapsulation** | Reverse — each layer strips its header on receive |
| **MAC address** | 48-bit hardware ID at L2 (e.g., `00:1A:2B:3C:4D:5E`) |
| **IP address** | Logical network address at L3 (IPv4 32-bit, IPv6 128-bit) |
| **Port number** | 16-bit L4 ID identifying a process/service |
| **TCP** | Reliable, connection-oriented L4 protocol |
| **UDP** | Unreliable, connectionless L4 protocol |
| **Frame** | L2 PDU (Ethernet frame, Wi-Fi frame) |
| **Packet** | L3 PDU (IP packet) |
| **Segment** | L4 TCP PDU |
| **Datagram** | L4 UDP PDU (or generic L3 IP datagram) |
| **Unicast** | One-to-one |
| **Broadcast** | One-to-all-on-segment |
| **Multicast** | One-to-group |
| **Anycast** | One-to-nearest |
| **Topology** | Physical/logical layout of nodes |
| **LAN/WAN/MAN/PAN/CAN** | Local/Wide/Metro/Personal/Campus Area Network |
| **Spine-and-leaf** | Modern data-center topology |

### Acronyms cheat-row (Module 1)
| Acronym | Meaning |
|---------|---------|
| OSI | Open Systems Interconnection |
| ISO | International Org for Standardization |
| PDU | Protocol Data Unit |
| TCP | Transmission Control Protocol |
| UDP | User Datagram Protocol |
| IP | Internet Protocol |
| MAC | Media Access Control (L2 address) |
| LLC | Logical Link Control (L2 sublayer) |
| ARP | Address Resolution Protocol |
| ICMP | Internet Control Message Protocol |
| NIC | Network Interface Card |
| SOHO | Small Office / Home Office |
| LAN / WAN | Local / Wide Area Network |

---

## 📊 Case Study — The Mirai Botnet (2016)

**Situation.** Throughout 2016, three teenagers (Paras Jha, Josiah White, Dalton Norman) wrote malware that scanned the IPv4 address space for IoT devices — routers, IP cameras, DVRs — running Linux on busybox with **default credentials still in place** (root/admin, admin/admin, 888888/888888). The malware logged in over Telnet (TCP/23) or SSH (TCP/22), pulled down a small binary, and added the device to a command-and-control botnet.

**Decision.** Once the botnet topped ~600,000 infected devices, the authors used it to launch volumetric DDoS attacks for hire. On **21 September 2016**, the security journalist Brian Krebs was hit with a ~620 Gbps attack — the largest publicly recorded DDoS at the time — which knocked his site offline despite Akamai's defenses. The Krebs attack used **UDP-based** floods at Layer 4 (the *transport* layer), combining DNS, NTP, and CLDAP amplification reflectors to multiply traffic.

**Outcome.** On **21 October 2016**, Mirai was unleashed against **Dyn**, a major DNS provider. The attack — peaking at ~1.2 Tbps — overwhelmed Dyn's authoritative DNS servers. Because vast portions of the eastern US Internet (Twitter, Reddit, GitHub, Spotify, Netflix, The New York Times, Airbnb) used Dyn for DNS resolution, *those services became unreachable even though their own infrastructure was fine* — browsers couldn't resolve their hostnames. Outages lasted ~11 hours and cascaded across the country. The Mirai source code was leaked on Hack Forums by "Anna-Senpai" (Jha) the same month, spawning dozens of variants still active in 2026. The three authors pleaded guilty in December 2017.

**Lesson for the exam / for practitioners.** Mirai is the canonical case study for *every* major Network+ concept in this module:

- **OSI Layer 1** — IoT vendors shipped insecure firmware on physical devices with no plan to ever patch them
- **OSI Layer 2** — at scale, switches in front of victim infrastructure flooded their MAC tables and CAM lookups
- **OSI Layer 3/4** — the attack was a flood of L3 packets (UDP datagrams, ICMP echoes, fragmented IP packets) and L4 TCP SYN floods at line rate
- **OSI Layer 7** — when Dyn's *DNS application-layer* service stopped responding, the entire dependent application ecosystem went dark even though every other layer was working perfectly
- **Architecture** — Dyn's DNS infrastructure was *anycast* (one IP advertised from many sites) yet still overwhelmed; the attack illustrated why anycast is necessary but not sufficient
- **Topology / Failure domain** — Dyn was a single shared dependency for thousands of sites. The blast radius taught the industry to use multiple DNS providers (secondary DNS at a different vendor) for any business-critical name

This case is exactly what Network+ tests when asking, "Which OSI layer was attacked when DNS responses stopped reaching browsers?" The answer is L7 *and* L3/L4 — defense in depth must cover all layers.

**Discussion (Socratic).**
- **Q1:** Anycast spread the Dyn attack across geographic sites — but the attack still succeeded. What *additional* architectural change would you make to break the single-vendor dependency, and what new failure modes does that change introduce?
- **Q2:** Mirai infected devices via Telnet on TCP/23. If you were a router vendor in 2017 the day after the Dyn attack, what FIVE engineering changes (across Layers 1–7) would you ship in your next firmware update? Order them by impact.
- **Q3:** The Mirai authors were 18–21 at the time. If you were a federal prosecutor, how would you balance individual culpability against the failure of the IoT supply chain to enforce minimal security? Which actors deserve which fraction of the blame?

---

## ✅ Module 1 Summary

You now know:

- 🌐 The **7 OSI layers** in order, what each does, and the PDU at each
- 📦 **Encapsulation** — how data is wrapped layer by layer
- 🕸️ Major **topologies** (bus, star, ring, mesh, hybrid) and the full-mesh formula
- 📡 The four **traffic types** — unicast, broadcast, multicast, anycast
- 🏗️ Network **scopes** (PAN/LAN/CAN/MAN/WAN/SAN) and **architectures** (3-tier, 2-tier, spine-and-leaf)
- 🔍 Why TCP/IP and OSI differ and which one Network+ tests on (OSI)

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 2 — TCP/IP & Subnetting](../Module-02-TCP-IP-Subnetting/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 2](../Module-02-TCP-IP-Subnetting/Reading.md) deepens L3 (IP addressing, CIDR, NAT); [Module 3](../Module-03-Routing-Switching/Reading.md) goes deep on L2 (switches, VLANs, STP) and L3 (routing protocols); [Module 7](../Module-07-Monitoring-Tools/Reading.md) uses the OSI model as the diagnostic framework for ping/traceroute/Wireshark; [Module 8](../Module-08-Troubleshooting/Reading.md) is built around the OSI-layer troubleshooting approach.
> - Cross-course: CompTIA Security+ (course 09) Module 6 (Network Security) and AWS Solutions Architect (course 04) VPC content both assume you have the OSI model memorized.
> - Practice: Practice Exam 1 has ~8 questions drawing from this module; the Final Mock has ~10.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 Zimmermann, H. (1980). "OSI Reference Model — The ISO Model of Architecture for Open Systems Interconnection." *IEEE Transactions on Communications*, 28(4), 425-432.
- 📄 ISO/IEC 7498-1 (1994). [*Information technology — Open Systems Interconnection — Basic Reference Model*](https://www.iso.org/standard/20269.html). (The OSI standard itself.)
- 📄 IETF RFC 793 (Postel, 1981; superseded by RFC 9293, 2022) — Transmission Control Protocol.
- 📄 IETF RFC 768 (Postel, 1980) — User Datagram Protocol.
- 📄 IEEE 802.3 (current revision 2022) — Ethernet.

**Case-study sources:**
- 📄 Antonakakis, M. et al. (2017). "Understanding the Mirai Botnet." *USENIX Security Symposium 2017*. 16 pp. (The definitive academic post-mortem.)
- 📄 US Department of Justice (2017). "Three Men Plead Guilty to Computer-Hacking-Related Crimes," press release, 13 December 2017.

**Practitioner / exam:**
- 📖 [CompTIA Network+ N10-009 Exam Objectives (PDF)](https://www.comptia.org/certifications/network) — read the official objectives at least twice during your studies
- 📖 [Professor Messer N10-009 video index](https://www.professormesser.com/network-plus/n10-009/n10-009-video-training-course/) — free, comprehensive lecture set
- 📘 Mike Meyers, *CompTIA Network+ All-in-One* — the classroom standard; chapter 2 covers OSI in depth
