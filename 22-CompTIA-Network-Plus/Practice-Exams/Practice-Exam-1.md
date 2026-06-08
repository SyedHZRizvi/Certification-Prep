# 🧪 Practice Exam 1, CompTIA Network+ (N10-009 Style)

> **Conditions:** Set a 45-minute timer. 45 questions. Treat it like the real thing.
> **Pass mark:** 38/45 (~85%), Network+ passes at ~80% so aim higher in practice.
> Take this AFTER finishing Modules 1–4. Covers OSI, TCP/IP & subnetting, routing/switching, and wireless.

---

## 📝 Questions

### 1. At which OSI layer do IP addresses operate?
A. Layer 2
B. Layer 3
C. Layer 4
D. Layer 7

### 2. The PDU at OSI Layer 2 is called a:
A. Frame
B. Packet
C. Segment
D. Datagram

### 3. Which 802.11 standard is also known as Wi-Fi 5?
A. 802.11n
B. 802.11ac
C. 802.11ax
D. 802.11be

### 4. The 3 non-overlapping channels in the 2.4 GHz band in the US are:
A. 1, 5, 9
B. 1, 6, 11
C. 36, 40, 44
D. 2, 6, 10

### 5. Which is a private (RFC 1918) IPv4 address?
A. 172.32.0.1
B. 172.16.5.20
C. 192.169.1.1
D. 8.8.8.8

### 6. The default subnet mask for a Class B network is:
A. 255.0.0.0
B. 255.255.0.0
C. 255.255.255.0
D. 255.255.255.128

### 7. CIDR /27 in dotted-decimal mask is:
A. 255.255.255.192
B. 255.255.255.224
C. 255.255.255.240
D. 255.255.252.0

### 8. How many usable hosts in a /29 subnet?
A. 8
B. 6
C. 14
D. 30

### 9. The network ID of the host `192.168.10.150/26` is:
A. 192.168.10.0
B. 192.168.10.64
C. 192.168.10.128
D. 192.168.10.192

### 10. The broadcast address of `10.20.30.0/28` is:
A. 10.20.30.15
B. 10.20.30.16
C. 10.20.30.255
D. 10.20.31.0

### 11. A laptop self-assigns `169.254.18.220`. This indicates:
A. The user selected a static IP
B. DHCP failed; APIPA self-assigned
C. The user is on a Class B network
D. SLAAC succeeded

### 12. The IPv6 prefix FE80::/10 indicates:
A. Loopback
B. Link-local
C. Global unicast
D. Multicast

### 13. IPv6 does NOT support which traffic type?
A. Unicast
B. Multicast
C. Anycast
D. Broadcast

### 14. PAT (NAT overload) primarily uses what to distinguish many internal hosts on one public IP?
A. MAC addresses
B. Port numbers
C. VLAN IDs
D. Hostnames

### 15. Which routing protocol uses Dijkstra's SPF algorithm?
A. RIP
B. EIGRP
C. OSPF
D. BGP

### 16. The Administrative Distance of a static route is:
A. 0
B. 1
C. 90
D. 120

### 17. The protocol used to route between autonomous systems on the global Internet is:
A. RIP
B. OSPF
C. EIGRP
D. BGP

### 18. The 802.1Q VLAN tag is how many bytes added to the Ethernet header?
A. 2
B. 4
C. 8
D. 16

### 19. A trunk port carries:
A. One VLAN, untagged
B. Multiple VLANs, 802.1Q tagged (except the native VLAN)
C. Only voice traffic
D. Only management traffic

### 20. STP elects the root bridge based on:
A. Highest IP
B. Lowest Bridge ID (priority + MAC)
C. Most uplinks
D. Manual configuration only

### 21. PortFast is safe to enable on:
A. Trunk ports
B. Access ports facing end hosts
C. Switch uplinks
D. The native VLAN only

### 22. BPDU Guard's purpose is to:
A. Allow BPDUs from any source
B. Error-disable a port if it receives an unexpected BPDU (defends against rogue switches)
C. Encrypt BPDU traffic
D. Force STP into listening state

### 23. LACP / 802.3ad provides:
A. Layer 3 routing protocol
B. Link aggregation bonding multiple physical links into one logical link
C. Wireless authentication
D. Encryption between switches

### 24. A switch maintains a table mapping which addresses to ports?
A. IP addresses
B. MAC addresses
C. Port numbers
D. Hostnames

### 25. Each port on a modern, full-duplex switch represents:
A. One collision domain; broadcast domains span the VLAN
B. Multiple collision domains
C. One broadcast domain only
D. Zero collision domains

### 26. WPA3-Personal replaces WPA2-Personal's 4-way handshake with:
A. PSK with no encryption
B. SAE (Simultaneous Authentication of Equals)
C. WEP key derivation
D. EAP-TLS

### 27. EAP-TLS authentication requires:
A. Username and password only
B. Certificates on both client and authentication server
C. PSK only
D. Open authentication

### 28. 802.3af PoE provides approximately what power per port?
A. 7 W
B. 15.4 W
C. 30 W
D. 60 W

### 29. A signal strength of -85 dBm on Wi-Fi is generally:
A. Excellent
B. Marginal, slow speeds, frequent drops
C. Unusable (disconnected)
D. The optimal value

### 30. A "predictive" wireless site survey uses:
A. Walking around with one AP on a stick
B. Software with floor plans BEFORE installation
C. Listening to existing RF after install
D. Injecting traffic and measuring throughput

### 31. ESS (Extended Service Set) means:
A. One AP with one SSID
B. Multiple APs sharing one SSID for seamless roaming
C. Mesh network with no controller
D. Ad-hoc peer-to-peer

### 32. The MOST appropriate device to connect two different IP subnets is:
A. Layer 2 switch
B. Hub
C. Router (or L3 switch)
D. Wireless access point

### 33. A frame's destination MAC is `FF:FF:FF:FF:FF:FF`. This is:
A. A unicast frame
B. A broadcast frame
C. A multicast frame
D. An anycast frame

### 34. In a full mesh of 7 nodes, how many physical links exist?
A. 7
B. 14
C. 21
D. 49

### 35. The 802.11ax (Wi-Fi 6) feature that schedules multiple clients in a single transmit opportunity using sub-carriers is:
A. CSMA/CA
B. OFDMA
C. WEP key rotation
D. MAC randomization

### 36. WPS should be disabled on a SOHO router because:
A. It is incompatible with WPA3
B. The PIN method is brute-forceable (Reaver), allowing PSK recovery in hours
C. It conflicts with PoE
D. It slows Wi-Fi

### 37. A trunk's native VLAN is sent:
A. Untagged
B. Tagged with VLAN 1 always
C. Encrypted
D. Discarded by the receiving switch

### 38. An L3 switch differs from a router primarily by:
A. Inability to route
B. Implementing routing in hardware via ASICs with high port density and SVIs
C. Only supporting IPv6
D. Lacking firewall capability

### 39. A network engineer connects two 1 Gbps Ethernet links between switches and bundles them with LACP. The aggregate logical link is:
A. 1 Gbps
B. 2 Gbps (with hash-based load balancing across the bundle)
C. 10 Gbps
D. 0.5 Gbps

### 40. A pen tester is on the LAN and runs `arp -a` to map IP→MAC pairs on the local segment. The next attack they might attempt to redirect traffic through their host is:
A. SQLi
B. ARP cache poisoning → on-path attack
C. DNS recursion
D. Wireless deauth

### 41 (Scenario PBQ). You're given the IP `172.16.150.20/22`. The network ID, broadcast, and usable host count are:
A. 172.16.144.0 / 172.16.147.255 / 1,022
B. 172.16.148.0 / 172.16.151.255 / 1,022
C. 172.16.150.0 / 172.16.151.255 / 510
D. 172.16.0.0 / 172.16.255.255 / 65,534

### 42 (Scenario PBQ). An engineer needs to design VLSM subnets from `10.0.0.0/24` for:

- LAN A: 100 hosts
- LAN B: 50 hosts
- Two P2P WAN links: 2 hosts each

The correct mask choices (largest first) are:
A. /24 for A, /24 for B, /30 for each WAN
B. /25 for A, /26 for B, /30 for each WAN
C. /26 for A, /27 for B, /28 for each WAN
D. /23 for A, /24 for B, /30 for each WAN

### 43 (Scenario PBQ). Match each issue to the BEST tool:

- (a) Locate a copper cable break at exactly 47 ft on a 100 ft run
- (b) Identify the top WAN bandwidth consumers per hour
- (c) Capture and decode the full TCP handshake to a suspected slow server
- (d) Test the maximum sustained throughput between two LAN hosts

A. (a) Wireshark, (b) ping, (c) TDR, (d) nslookup
B. (a) TDR, (b) NetFlow, (c) Wireshark, (d) iperf3
C. (a) iperf3, (b) Wireshark, (c) TDR, (d) ping
D. (a) NetFlow, (b) TDR, (c) iperf3, (d) Wireshark

### 44 (Scenario PBQ). A Wi-Fi user roams between two APs sharing the same SSID. Their VoIP call drops at the transition. RSSI is fine on both APs. The MOST appropriate fix is:
A. Replace both APs
B. Enable 802.11k/v/r (assisted roaming, BSS transition, fast transition) on the wireless controller
C. Disable WPA3
D. Move to 2.4 GHz

### 45 (Scenario PBQ). A senior architect proposes using a single high-power Wi-Fi 5 AP per floor for an open office. The N+ candidate's strongest counter-argument for low-power Wi-Fi 6 APs with denser coverage is:
A. "Wi-Fi 6 has faster maximum link speed"
B. "Dense low-power cells provide more per-user capacity in a high-density deployment via OFDMA + cell-size shrinkage; per-cell capacity, not raw peak speed, is the actual bottleneck"
C. "Wi-Fi 6 doesn't need PoE"
D. "Wi-Fi 5 cannot do WPA2"

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. B    31. B    41. B
2.  A    12. B    22. B    32. C    42. B
3.  B    13. D    23. B    33. B    43. B
4.  B    14. B    24. B    34. C    44. B
5.  B    15. C    25. A    35. B    45. B
6.  B    16. B    26. B    36. B
7.  B    17. D    27. B    37. A
8.  B    18. B    28. B    38. B
9.  C    19. B    29. B    39. B
10. A    20. B    30. B    40. B
```

---

## Detailed answer rationales

> Every question explained: why correct is right and why each distractor is wrong.

**Q1. B, Layer 3.** IP addresses live at L3 (Network layer). MAC addresses are L2; port numbers L4.

**Q2. A, Frame.** L2 PDU is Frame. L3 = Packet. L4 (TCP) = Segment; (UDP) = Datagram.

**Q3. B, 802.11ac.** ac = Wi-Fi 5. n = Wi-Fi 4. ax = Wi-Fi 6. be = Wi-Fi 7.

**Q4. B, 1, 6, 11.** In the US, only channels 1/6/11 are non-overlapping in the 2.4 GHz band.

**Q5. B, 172.16.5.20.** RFC 1918 covers 172.16.0.0/12 (i.e., 172.16.0.0 – 172.31.255.255). 172.32.x.x is public; 192.169.x.x is public; 8.8.8.8 is Google public DNS.

**Q6. B, 255.255.0.0.** Class B = /16. Class A = /8. Class C = /24.

**Q7. B, 255.255.255.224.** /27 = 27 ones = 11111111.11111111.11111111.11100000 = 255.255.255.224.

**Q8. B, 6.** /29 has 3 host bits. 2³ − 2 = 6.

**Q9. C, 192.168.10.128.** /26 = mask .192. Block size = 256 − 192 = 64. Multiples of 64: 0, 64, 128, 192. 150 falls in 128–191 block. Network ID = .128.

**Q10. A, 10.20.30.15.** /28 = mask .240. Block size = 16. Multiples: 0, 16, 32, … Network = .0, next = .16, broadcast = .15.

**Q11. B DHCP failed; APIPA.** 169.254.x.x is APIPA (RFC 3927) link-local self-assigned when DHCP doesn't respond.

**Q12. B Link-local.** FE80::/10 is IPv6 link-local auto-configured per interface, segment-only.

**Q13. D Broadcast.** IPv6 has no broadcast replaced with multicast (e.g., FF02::1 = all-nodes).

**Q14. B, Port numbers.** PAT uses unique source ports to multiplex many internal hosts onto one public IP.

**Q15. C, OSPF.** OSPF uses Dijkstra's Shortest Path First. RIP = Bellman-Ford distance vector. EIGRP = DUAL hybrid. BGP = path vector.

**Q16. B, 1.** Static = AD 1. Connected = 0. EIGRP internal = 90. OSPF = 110. RIP = 120.

**Q17. D BGP.** BGP is the only EGP used between ASes on the public Internet.

**Q18. B, 4 bytes.** 802.1Q adds 4 bytes (TPID + PCP + DEI + VID) to the Ethernet header.

**Q19. B, Many VLANs, 802.1Q tagged (except native).** Access = one VLAN untagged. Trunks tag with 802.1Q except the native VLAN (sent untagged).

**Q20. B, Lowest Bridge ID.** Bridge ID = priority (default 32768) + MAC. Lower wins; tie goes to lowest MAC.

**Q21. B, Access ports facing end hosts.** PortFast skips listening/learning, going straight to forwarding. Safe ONLY on access ports; on trunks it can create loops.

**Q22. B, Error-disable on unexpected BPDU.** Defends against rogue switches plugged into wall ports.

**Q23. B, Link aggregation.** LACP / IEEE 802.3ad bundles multiple physical links into one logical link for capacity + redundancy.

**Q24. B, MAC addresses.** Switches maintain a CAM/MAC table mapping MACs to ports.

**Q25. A, One collision domain per port; broadcast domains span VLAN.** Each switch port is its own collision domain (full duplex). A VLAN is a single broadcast domain.

**Q26. B, SAE.** WPA3 SAE replaces WPA2 PSK 4-way handshake, defeating offline dictionary attacks.

**Q27. B, Certs on both sides.** EAP-TLS requires X.509 certs on client AND server. Most secure EAP method.

**Q28. B, 15.4 W.** 802.3af (the original PoE). PoE+ (at) = 30 W. PoE++ (bt) = 60–100 W.

**Q29. B Marginal.** -85 dBm is marginal slow / frequent drops. -67 = reliable for VoIP, -90 = unusable.

**Q30. B, Software with floor plans BEFORE install.** Predictive surveys use planning tools (Ekahau, iBwave) with floor plans before any hardware deploys.

**Q31. B, Multiple APs sharing SSID.** Extended Service Set = multiple APs cooperatively serving one SSID for transparent roaming.

**Q32. C, Router or L3 switch.** Different subnets = different L3 networks = router required. Pure L2 switches can't route between subnets.

**Q33. B, Broadcast.** `FF:FF:FF:FF:FF:FF` = the L2 broadcast address.

**Q34. C, 21.** N(N−1)/2 = 7×6/2 = 21.

**Q35. B OFDMA.** Orthogonal Frequency-Division Multiple Access Wi-Fi 6's signature feature, scheduling multiple clients in one TX opportunity via sub-carriers.

**Q36. B, Reaver brute-force.** WPS PIN method is broken (Reaver/Bully tools recover PSK in 4-10 hrs). Disable WPS entirely.

**Q37. A, Untagged.** Native VLAN frames are sent untagged on a trunk; both ends must agree on the native VLAN ID.

**Q38. B, ASICs + SVIs.** L3 switches route in hardware (ASIC) with high port density; SVIs allow inter-VLAN routing. Routers are more software-centric with rich WAN interfaces.

**Q39. B, ~2 Gbps with hash-based load balancing.** Two 1 Gbps links bonded = ~2 Gbps aggregate, distributed across the bundle by hash; a single flow may pin to one link.

**Q40. B, ARP poisoning → on-path attack.** ARP poisoning is the classic L2 pre-step to redirect LAN traffic through the attacker's host for an on-path (MITM) attack.

**Q41. B, 172.16.148.0 / 172.16.151.255 / 1,022.** /22 mask = 255.255.252.0. Block size in 3rd octet = 4. Multiples: 0, 4, …, 148, 152. 150 falls in 148–151. Network = 172.16.148.0; broadcast = 172.16.151.255. Hosts = 2^10 − 2 = 1,022.

**Q42. B, /25 for A, /26 for B, /30 for each WAN.** A needs 100 hosts → smallest mask = /25 (126 hosts). B needs 50 → /26 (62 hosts). WANs need 2 → /30 (2 hosts). Always allocate largest first.

**Q43. B, TDR / NetFlow / Wireshark / iperf3.** TDR locates copper fault by distance. NetFlow shows top bandwidth consumers. Wireshark captures and decodes TCP. iperf3 tests sustained throughput.

**Q44. B, Enable 802.11k/v/r.** Roaming is client-initiated; assisted-roaming protocols + BSS transition + fast transition reduce re-association time below the threshold that breaks voice.

**Q45. B, OFDMA + denser cells > peak speed.** The architectural argument: per-cell capacity (with many concurrent users on each cell) is the bottleneck in dense deployments. Many small low-power cells with OFDMA serves more users efficiently than a few high-power cells.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 43–45 | 🏆 Excellent, move on to Practice Exam 2 after Modules 5-8 |
| 38–42 | ✅ On track. Review wrong answers, then continue Modules 5-8 |
| 32–37 | ⚠️ Re-study weak modules; redo this exam in 3 days |
| <32 | 🔁 Revisit Modules 1–4 in full, especially subnetting |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered it
2. Re-read that module's Reading.md section
3. Add an Anki/flashcard for the concept
4. Try the question again in 3 days

---

➡️ When ready: Continue to Modules 5–8, then [Practice Exam 2](./Practice-Exam-2.md).
