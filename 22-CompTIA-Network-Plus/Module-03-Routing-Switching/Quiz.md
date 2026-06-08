# ✏️ Module 3 Quiz: Routing & Switching

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 7 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. Which protocol does the public Internet use to route between autonomous systems? *(Remember)*
A. RIP
B. OSPF
C. EIGRP
D. BGP

---

### Q2. RIP's maximum hop count is: *(Remember)*
A. 15
B. 32
C. 64
D. Unlimited

---

### Q3. OSPF uses which algorithm to compute the best path? *(Remember)*
A. Bellman-Ford
B. Dijkstra (shortest path first)
C. DUAL
D. Path vector

---

### Q4. The default 802.1Q VLAN tag size is: *(Remember)*
A. 2 bytes
B. 4 bytes
C. 8 bytes
D. 16 bytes

---

### Q5. STP elects the root bridge based on: *(Remember)*
A. Highest IP address
B. Lowest Bridge ID (priority + MAC)
C. Most uplinks
D. MAC address only

---

### Q6. A static route has an Administrative Distance of: *(Understand)*
A. 0
B. 1
C. 90
D. 120

---

### Q7. An access port carries: *(Understand)*
A. One VLAN, untagged
B. Many VLANs, all tagged
C. Many VLANs, all untagged
D. Only management traffic

---

### Q8. A trunk port carries: *(Understand)*
A. One VLAN, untagged
B. Many VLANs, 802.1Q tagged (except the native VLAN)
C. Only one tagged VLAN
D. Only voice traffic

---

### Q9. The native VLAN's frames on a trunk are: *(Understand)*
A. Always tagged with VLAN 1
B. Sent untagged
C. Encrypted
D. Discarded by the receiving switch

---

### Q10. EIGRP's default metric uses: *(Understand)*
A. Hop count only
B. Bandwidth + delay
C. Cost based on bandwidth only
D. Latency measured in ms

---

### Q11. A network engineer needs a redundant L2 link between two switches with combined throughput and automatic failover. The best choice is: *(Apply)*
A. STP only
B. LACP / EtherChannel
C. Two separate cables with no protocol
D. Disable STP on both

---

### Q12. PortFast should be applied to: *(Apply)*
A. Trunk ports
B. Access ports facing end hosts
C. Switch-to-switch uplinks
D. The native VLAN only

---

### Q13. BPDU Guard's primary purpose is to: *(Apply)*
A. Allow BPDUs from any source
B. Disable a port if it receives an unexpected BPDU (defends against rogue switches)
C. Encrypt BPDU traffic
D. Increase STP convergence speed

---

### Q14. A switch receives a frame with a destination MAC it has never seen. It will: *(Apply)*
A. Drop the frame
B. Forward (flood) it out all ports except the one it came in on
C. Send a reply requesting the destination's IP
D. Forward only to the trunk port

---

### Q15. A router has two routes to the same destination: an OSPF route (AD 110) and a static route (AD 1). Which is installed? *(Apply)*
A. OSPF
B. Static (lower AD wins)
C. Both, with equal-cost load balancing
D. Neither

---

### Q16. An engineer needs to route between VLAN 10 and VLAN 20. The simplest modern approach is: *(Apply)*
A. Two separate routers, one per VLAN
B. L3 switch with SVIs (one per VLAN)
C. A hub between the VLANs
D. Static MAC tables

---

### Q17. A switch's MAC address table is also called the: *(Remember)*
A. ARP cache
B. CAM table (Content Addressable Memory)
C. Routing table
D. Forwarding Information Base (FIB)

---

### Q18. Each switch port on a modern, full-duplex switch represents: *(Analyze)*
A. One collision domain and one broadcast domain
B. One collision domain, broadcast domains span the entire VLAN
C. Zero collision domains
D. Multiple broadcast domains

---

### Q19. A senior engineer suggests disabling STP because "it's slowing convergence." This is: *(Analyze)*
A. A great idea, STP is unnecessary on modern networks
B. A terrible idea, disabling STP exposes the network to bridging loops and broadcast storms
C. Acceptable only if there are no redundant L2 paths
D. Acceptable if RSTP is enabled instead

---

### Q20. A network has 802.1Q trunks between switches. The default native VLAN is left as VLAN 1 on both ends. The MOST significant risk is: *(Analyze)*
A. Throughput loss
B. VLAN hopping attacks (double tagging) and difficulty troubleshooting because VLAN 1 carries control traffic
C. STP loop
D. ARP cache poisoning

---

### Q21. An OSPF network is divided into areas. Area 0 is also called the: *(Remember)*
A. Stub area
B. Backbone area
C. NSSA
D. Totally stubby area

---

### Q22. eBGP between two ISPs has an Administrative Distance of: *(Remember)*
A. 1
B. 20
C. 110
D. 200

---

### Q23. A medium-sized enterprise wants fast convergence, an open standard, and Dijkstra-based routing. The best choice is: *(Analyze)*
A. RIPv2
B. OSPF
C. Static routing only
D. iBGP

---

### Q24. Port security with "sticky MAC" means: *(Understand)*
A. MACs must be statically assigned by the admin
B. The switch dynamically learns the MAC on the port and treats it as a static, allowed entry
C. Only one MAC is ever allowed
D. The port is encrypted

---

### Q25. A frame's source MAC is recorded in the switch's MAC table; the switch then forwards based on the destination MAC. This combined process is called: *(Understand)*
A. Routing
B. Switching (or transparent bridging)
C. Tagging
D. Encapsulation

---

### Q26. You're hired into a small enterprise running RIPv2 across 12 routers. Convergence is sluggish and route flaps cause user-visible outages. You propose a phased migration to OSPF. The senior architect asks for the single most compelling technical justification. *(Create)*

> *Create-level note:* you're justifying an architectural transition; pick the answer that captures the strongest single technical reason.
A. "OSPF supports more VLANs than RIP."
B. "OSPF uses link-state with Dijkstra SPF, sub-second convergence and no 15-hop limit, vs RIP's 30-second update interval and 16=infinity boundary."
C. "OSPF is Cisco-only and therefore better supported."
D. "OSPF eliminates the need for any L2 protocols like STP."

---

## 🎯 Answers + Explanations

### Q1: **D. BGP**
Border Gateway Protocol is the only EGP in widespread use, governing routing between autonomous systems on the global Internet.

### Q2: **A. 15**
RIP maxes at 15 hops; 16 = unreachable. This is one reason RIP is unsuitable for any modern non-trivial network.

### Q3: **B. Dijkstra**
OSPF uses Dijkstra's Shortest Path First (SPF) algorithm over the link-state database. Bellman-Ford is distance vector (RIP). DUAL is EIGRP's. Path vector is BGP.

### Q4: **B. 4 bytes**
802.1Q adds a 4-byte tag (TPID + PCP + DEI + VID) to the Ethernet header.

### Q5: **B. Lowest Bridge ID (priority + MAC)**
The Bridge ID is 8 bytes: 2 bytes priority (default 32768) + 6 bytes MAC. Lower wins; tie goes to lowest MAC.

### Q6: **B. 1**
Static = AD 1. Directly connected = 0. EIGRP internal = 90. OSPF = 110. RIP = 120.

### Q7: **A. One VLAN, untagged**
Access ports carry exactly one VLAN, untagged, for end hosts that aren't VLAN-aware (PCs, printers).

### Q8: **B. Many VLANs, 802.1Q tagged (except the native VLAN)**
Trunks tag every VLAN with 802.1Q EXCEPT the configured native VLAN, which goes untagged.

### Q9: **B. Sent untagged**
Native VLAN traffic is the only untagged traffic on a trunk. Both ends must agree on the native VLAN ID.

### Q10: **B. Bandwidth + delay**
EIGRP's default metric is a composite of bandwidth + delay; load, reliability, MTU can be added but are off by default. OSPF uses cost (based on bandwidth alone).

### Q11: **B. LACP / EtherChannel**
Link Aggregation (IEEE 802.3ad / 802.1AX) bundles multiple physical links into one logical link with active failover and aggregated throughput.

### Q12: **B. Access ports facing end hosts**
PortFast skips listening/learning, going directly to forwarding. Safe ONLY on access ports, using it on a trunk can cause loops.

### Q13: **B. Disable port if unexpected BPDU received**
BPDU Guard error-disables a PortFast-enabled access port the moment it sees a BPDU, defending against rogue switches plugged into wall ports.

### Q14: **B. Flood out all ports except the source**
Unknown unicast frames are flooded out all other ports in the same VLAN. Replies populate the MAC table so future forwarding is targeted.

### Q15: **B. Static (lower AD wins)**
AD comparison: static (1) beats OSPF (110). The static route is installed; the OSPF route stays in the OSPF database as a backup.

### Q16: **B. L3 switch with SVIs (Switched Virtual Interfaces)**
SVIs are the modern, common-case way to route between VLANs on a single L3 switch. Router-on-a-stick is the older alternative; separate routers are wasteful.

### Q17: **B. CAM table**
The MAC address table is held in Content Addressable Memory (CAM), hardware-accelerated lookup that gives switches their performance.

### Q18: **B. One collision domain, broadcast domains span the entire VLAN**
Each switch port is its own collision domain (full-duplex). All ports in the same VLAN share one broadcast domain.

### Q19: **B. A terrible idea, exposes loops and broadcast storms**
Disabling STP because it's "slow" is a classic anti-pattern. The fix for slow convergence is RSTP, not STP-off.

### Q20: **B. VLAN hopping attacks + control-traffic mixing**
Default VLAN 1 carries CDP, VTP, DTP, and other control traffic. Plus, leaving VLAN 1 as native enables double-tagging VLAN hopping attacks. Change the native VLAN and don't use VLAN 1 for user traffic.

### Q21: **B. Backbone area**
Area 0 = the backbone; all other OSPF areas must connect to it (directly or via virtual links).

### Q22: **B. 20**
eBGP AD = 20 (more trusted than IGPs because it carries inter-AS information). iBGP AD = 200 (less trusted than IGPs within an AS).

### Q23: **B. OSPF**
Open standard, link-state with Dijkstra SPF, fast convergence, the textbook fit. EIGRP is now open but historically Cisco. iBGP is for inter-AS / multi-homing.

### Q24: **B. Dynamically learn and treat as static-allowed**
Sticky MAC lets the switch learn the first connecting MAC and persist it as an allowed static entry, useful when you want allow-list security without manual MAC entry.

### Q25: **B. Switching (or transparent bridging)**
The combined learn-on-source/forward-by-destination process is switching. (Older bridges did the same thing, "transparent bridging" is the formal protocol name.)

### Q26: **B. OSPF link-state + Dijkstra + no 15-hop limit**
The strongest single technical justification is convergence speed AND topology scalability, RIP's 30s update interval + 16=infinity boundary are crippling at any non-trivial scale. The other options are factually wrong (A: VLAN count is L2, irrelevant; C: OSPF is open standard; D: OSPF and STP solve different problems and you still need both).

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Routing/switching mastered.
- 22–24/26 → ✅ Solid. Re-read the routing protocol comparison table.
- 18–21/26 → ⚠️ Re-read VLANs + STP sections + the routing protocol comparison.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- AD pecking order: Connected 0 < Static 1 < EIGRP 90 < OSPF 110 < RIP 120 < iBGP 200
- IGP vs EGP and which protocols belong in each
- OSPF: Dijkstra, areas, area 0 = backbone, DR/BDR
- BGP: TCP/179, path vector, eBGP AD 20, iBGP AD 200
- VLANs: 802.1Q 4-byte tag, access vs trunk, native = untagged
- STP: root bridge = lowest BID, port roles, RSTP = fast
- PortFast (access only) + BPDU Guard combo

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4, Wireless & SOHO Networks](../Module-04-Wireless/Reading.md)
