# ✏️ Module 1 Quiz: Networking Concepts & OSI Model

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level** so you can self-diagnose: if you miss recall ("Remember") questions, you need more flashcards; if you miss application ("Apply") or evaluation ("Analyze") questions, you need more scenario practice.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. At which OSI layer do MAC addresses operate? *(Remember)*
A. Layer 1 (Physical)
B. Layer 2 (Data Link)
C. Layer 3 (Network)
D. Layer 4 (Transport)

---

### Q2. At which OSI layer does a traditional router make forwarding decisions? *(Remember)*
A. Layer 2
B. Layer 3
C. Layer 4
D. Layer 7

---

### Q3. The OSI Layer 4 PDU for a TCP segment is called: *(Remember)*
A. Frame
B. Packet
C. Segment
D. Datagram

---

### Q4. Which mnemonic correctly orders the OSI model from bottom (L1) to top (L7)? *(Remember)*
A. All People Seem To Need Data Processing
B. Please Do Not Throw Sausage Pizza Away
C. Do Not Pass The Salt Please Always
D. Some People Fear Birthdays

---

### Q5. A switch builds a table of which addresses to make forwarding decisions? *(Remember)*
A. IP addresses
B. MAC addresses
C. Port numbers
D. Hostnames

---

### Q6. The OSI 7-layer model was standardized by which body? *(Remember)*
A. IETF (RFCs)
B. ISO (ISO/IEC 7498-1)
C. IEEE (802 standards)
D. Cisco

---

### Q7. A network administrator is asked at which layer SSL/TLS operates on the Network+ exam. The expected answer is: *(Understand)*
A. Layer 5 (Session)
B. Layer 6 (Presentation)
C. Layer 4 (Transport)
D. Layer 1 (Physical)

---

### Q8. Encapsulation refers to: *(Understand)*
A. Stripping the header at the destination
B. Each layer adding its own header (and sometimes trailer) to the upper-layer PDU
C. Translating IP addresses to MAC addresses
D. Compressing data to fit in a single frame

---

### Q9. UDP is BEST described as: *(Understand)*
A. Reliable, connection-oriented
B. Reliable, connectionless
C. Unreliable, connectionless
D. Unreliable, connection-oriented

---

### Q10. TCP uses a 3-way handshake consisting of: *(Understand)*
A. SYN, SYN-ACK, ACK
B. SYN, ACK, FIN
C. SYN, NAK, ACK
D. HELLO, OFFER, ACCEPT

---

### Q11. A voice-over-IP application transmits real-time audio. The transport protocol used is typically: *(Apply)*
A. TCP
B. UDP
C. ICMP
D. ARP

---

### Q12. A DHCP DISCOVER message is sent using what traffic type? *(Apply)*
A. Unicast
B. Multicast
C. Broadcast
D. Anycast

---

### Q13. A company has 8 routers in a full mesh topology. How many physical links are required? *(Apply)*
A. 8
B. 28
C. 56
D. 64

---

### Q14. A streaming service sends one video feed to thousands of subscribed clients across the Internet. The most efficient traffic type is: *(Apply)*
A. Unicast
B. Multicast (where the network supports it)
C. Broadcast
D. Anycast only

---

### Q15. A user's browser sends an HTTP GET request. The request is encapsulated and sent down the stack. The IP header is added at which layer? *(Apply)*
A. Layer 2
B. Layer 3
C. Layer 4
D. Layer 7

---

### Q16. A cable certifier detects a short circuit at 42 ft on a 50 ft Cat6 run between a workstation and the switch. This is a fault at which OSI layer? *(Apply)*
A. Layer 1
B. Layer 2
C. Layer 3
D. Layer 4

---

### Q17. A small office uses one combined device that includes a router, switch, Wi-Fi access point, and DHCP server. This device is best categorized as a: *(Apply)*
A. Enterprise core router
B. SOHO device
C. Spine switch
D. Repeater

---

### Q18. A network engineer is designing a modern data-center fabric that requires predictable east-west latency. The recommended topology is: *(Analyze)*
A. Bus
B. Ring
C. Spine-and-leaf
D. Hub-and-spoke star

---

### Q19. An IPv6-only network does NOT support which traffic type? *(Analyze)*
A. Unicast
B. Multicast
C. Anycast
D. Broadcast

---

### Q20. Two hosts on the same VLAN want to communicate. They are both on 192.168.1.0/24. The path through which OSI layer is needed BUT routing through Layer 3 is NOT? *(Analyze)*
A. Layer 1 only
B. Layer 2 (frames switched directly)
C. Layer 3 (routed by default gateway)
D. Layer 4 only

---

### Q21. A network engineer is told the IP packet's TTL has expired at a midpoint router. Which protocol generates the response back to the original sender? *(Apply)*
A. ARP
B. ICMP
C. DHCP
D. SNMP

---

### Q22. A frame's destination MAC is `FF:FF:FF:FF:FF:FF`. This is: *(Understand)*
A. A unicast frame
B. A broadcast frame (Layer 2 broadcast)
C. A multicast frame
D. An anycast frame

---

### Q23. A company has only two routers and connects them directly with a single cable. The topology is: *(Understand)*
A. Star
B. Point-to-point
C. Full mesh
D. Bus

---

### Q24. Which protocol's PDU is technically called a "datagram" at Layer 4? *(Remember)*
A. TCP
B. UDP
C. SCTP
D. HTTP

---

### Q25. A network has 5 sites and each site must directly connect to every other site (full mesh). How many WAN links are required? *(Apply)*
A. 5
B. 10
C. 20
D. 25

---

### Q26. A junior engineer proposes connecting 4 small branch offices in a single bus topology using a long coaxial cable. They explain it will save money. As an evaluator, the BEST objection is: *(Create)*

> *Create-level note:* you are evaluating an architectural choice, weighing trade-offs.
A. Bus is incompatible with TCP/IP entirely
B. Any single cable fault would isolate every node and there is no failure domain isolation; modern star topology with managed switches is cheaper and far more reliable
C. Bus only supports IPv4
D. Bus requires VLANs to function

---

## 🎯 Answers + Explanations

### Q1: **B. Layer 2 (Data Link)**
MAC addresses are the L2 addressing scheme — burned into the NIC, used for hop-to-hop delivery within a single broadcast domain. IP addresses (L3) are used between networks.

### Q2: **B. Layer 3**
Routers forward by IP address — an L3 concept. (A *L3 switch* is a hybrid, but a "router" by definition operates at L3.)

### Q3: **C. Segment**
TCP at L4 = segment. UDP at L4 = datagram. L3 IP = packet. L2 = frame.

### Q4: **B. Please Do Not Throw Sausage Pizza Away**
Physical, Data Link, Network, Transport, Session, Presentation, Application — bottom up. (A is top-down; both are real mnemonics — read the question carefully.)

### Q5: **B. MAC addresses**
A switch's CAM/MAC table maps each MAC to the port where it was learned. Routers use IP; DNS uses hostnames.

### Q6: **B. ISO**
ISO/IEC 7498-1 (1984). IETF defines TCP/IP (4-layer); IEEE defines L2 standards (802.x); Cisco didn't invent OSI.

### Q7: **B. Layer 6 (Presentation)**
On Network+, TLS lives at L6 (Presentation) — it handles encryption/compression/formatting *between* application and session/transport.

### Q8: **B. Each layer adding its own header**
Encapsulation = wrapping. The receiving side does the inverse (decapsulation).

### Q9: **C. Unreliable, connectionless**
UDP is fire-and-forget — no handshake, no retransmit, no ordering guarantees. Just speed.

### Q10: **A. SYN, SYN-ACK, ACK**
Classic TCP 3-way handshake from RFC 793. FIN is for connection teardown.

### Q11: **B. UDP**
Real-time audio cannot use retransmits (a late packet is useless). UDP's minimal overhead and lack of retransmission match VoIP/RTP's needs.

### Q12: **C. Broadcast**
The DHCP client doesn't yet know any IP, server included, so it broadcasts to 255.255.255.255 to reach the DHCP server on the local segment.

### Q13: **B. 28**
N(N−1)/2 = 8 × 7 / 2 = 28 links.

### Q14: **B. Multicast**
One sender → group of subscribers. Multicast (e.g., IGMP-based) is the textbook efficient choice if the network supports it. Unicast would require N parallel streams; broadcast is segment-scoped only.

### Q15: **B. Layer 3**
The IP header is added at the Network layer (L3). TCP/UDP headers add at L4; Ethernet headers at L2.

### Q16: **A. Layer 1**
A cable fault (continuity, short, attenuation) is a Physical layer problem.

### Q17: **B. SOHO device**
A combined router+switch+AP+DHCP appliance is the textbook Small Office/Home Office device.

### Q18: **C. Spine-and-leaf**
Spine-and-leaf provides predictable 2-hop east-west latency within the fabric — the modern data-center default that has replaced 3-tier in most builds.

### Q19: **D. Broadcast**
IPv6 has no broadcast address. Its replacements use multicast (e.g., all-nodes FF02::1, all-routers FF02::2). Unicast/multicast/anycast are all supported.

### Q20: **B. Layer 2 (frames switched directly)**
Same VLAN = same broadcast domain = same L2 segment. The two hosts ARP each other's MAC, switch forwards frame; no L3 routing required.

### Q21: **B. ICMP**
The TTL-exceeded reply ("Time Exceeded", type 11) is an ICMP message. This is exactly how `traceroute` works — it intentionally crafts low-TTL packets to elicit ICMP responses from each hop.

### Q22: **B. A broadcast frame (Layer 2 broadcast)**
`FF:FF:FF:FF:FF:FF` is the L2 broadcast address — all bits set. Sent to every device on the segment.

### Q23: **B. Point-to-point**
Two devices, one direct link = point-to-point.

### Q24: **B. UDP**
UDP segments are called *datagrams*. TCP at L4 uses *segments*. (IP "datagrams" at L3 are technically the same word — context matters; the Network+ answer at L4 is UDP.)

### Q25: **B. 10**
5 × 4 / 2 = 10.

### Q26: **B. Any single cable fault would isolate every node…**
Bus topology has zero fault tolerance — one break breaks everyone — and modern star topology with cheap managed switches is both cheaper and more reliable. Bus is essentially extinct outside Network+ trivia for these exact reasons.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 1 mastered. Onward to subnetting.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the OSI layer-by-layer and PDU sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- All 7 OSI layers in order (memorize bottom-up AND top-down)
- PDU at each layer (frame/packet/segment/datagram)
- The full mesh formula: N(N−1)/2
- Four traffic types and IPv6's no-broadcast quirk
- TCP vs UDP comparison (handshake, reliability, ordering, headers)
- TLS lives at Layer 6 (Network+ answer)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2 — TCP/IP & Subnetting](../Module-02-TCP-IP-Subnetting/Reading.md)
