# 📋 Module 1 Cheat Sheet: Networking Concepts & OSI Model

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌐 OSI 7 Layers, MEMORIZE

| # | Layer | PDU | Key idea | Examples |
|---|-------|-----|----------|----------|
| 7 | **Application** | Data | User-facing protocols | HTTP (Hypertext Transfer Protocol), DNS (Domain Name System), FTP (File Transfer Protocol), SSH (Secure Shell), SMTP (Simple Mail Transfer Protocol) |
| 6 | **Presentation** | Data | Format / encrypt / compress | TLS (Transport Layer Security), JPEG, ASCII |
| 5 | **Session** | Data | Open / maintain / close sessions | NetBIOS, RPC, SIP |
| 4 | **Transport** | **Segment** (TCP (Transmission Control Protocol)) / **Datagram** (UDP (User Datagram Protocol)) | End-to-end, ports | TCP, UDP, QUIC |
| 3 | **Network** | **Packet** | Logical addressing, routing | IP, ICMP (Internet Control Message Protocol), OSPF (Open Shortest Path First), BGP (Border Gateway Protocol) |
| 2 | **Data Link** | **Frame** | Hop-to-hop, MAC addresses | Ethernet, Wi-Fi, ARP, switches |
| 1 | **Physical** | **Bits** | Wires / radio / fiber | Cables, hubs, repeaters |

**Mnemonic (L1→L7):** "Please Do Not Throw Sausage Pizza Away"
**Mnemonic (L7→L1):** "All People Seem To Need Data Processing"

---

## 📦 Encapsulation Order (Top → Bottom)

```
HTTP/HTTPS (HTTP Secure) data            ← L7 Application
   ↓ + TLS                 ← L6 Presentation
   ↓ + session id          ← L5 Session
   ↓ + TCP header (port)   ← L4 Transport → SEGMENT
   ↓ + IP header (IPs)     ← L3 Network   → PACKET
   ↓ + Ethernet header     ← L2 Data Link → FRAME
   ↓ voltage/light/RF      ← L1 Physical  → BITS
```

---

## 🔁 TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | 3-way handshake | None |
| Reliability | Yes | No |
| Ordering | Yes | No |
| Header size | 20+ bytes | 8 bytes |
| Use cases | Web, SSH, email, file transfer | DNS, VoIP, DHCP (Dynamic Host Configuration Protocol), SNMP (Simple Network Management Protocol), video |

🧠 TCP: "**T**ake **C**are **P**lease". UDP: "**U**nreliable **D**elivery **P**rotocol".

---

## 📡 Traffic Types

| Type | Recipients | IPv4 | IPv6 |
|------|-----------|------|------|
| Unicast | One | Specific IP | Specific IP |
| Broadcast | All on segment | 255.255.255.255 / x.x.x.255 | **None, replaced by multicast** |
| Multicast | A group | 224.0.0.0/4 | FF00::/8 |
| Anycast | Nearest of many | Routing trick | Native |

---

## 🕸️ Topologies, One-Liner Each

| Topology | One-liner |
|----------|-----------|
| Bus | Single shared cable, one break = all down |
| Star | All nodes → central switch (modern LANs) |
| Ring | Loop; one break = all down (unless dual ring) |
| Full mesh | Every node → every node; N(N−1)/2 links |
| Partial mesh | Some have redundancy, some don't |
| Hybrid | Mix and match |
| Point-to-point | Two nodes, one link |
| Spine-and-leaf | Data-center; every leaf → every spine |

**Mesh formula:** `links = N × (N − 1) / 2`

---

## 🏗️ Network Scopes

| Acronym | Scope |
|---------|-------|
| PAN | 1–10 m (Bluetooth) |
| LAN (Local Area Network) | One site |
| CAN | Adjacent buildings |
| MAN | One city / metro |
| WAN (Wide Area Network) | Multi-city / global |
| SAN | Storage fabric (block-level) |
| WLAN | LAN over Wi-Fi |

---

## 🏆 Exam Power Phrases

When you see these in answers, often **right**:

- ✅ "Layer 2 / Layer 3 / etc." in the exact context of the device
- ✅ "Frame" for L2, "Packet" for L3, "Segment" for TCP at L4
- ✅ "Spine-and-leaf for predictable east-west latency"
- ✅ "Multicast for one-to-many efficient distribution"
- ✅ "Star topology with managed switches"

Often **wrong**:

- ❌ "Hub" (extinct), "Bus" (extinct)
- ❌ "Broadcast in IPv6"
- ❌ "Routers operate at Layer 2"
- ❌ "TCP is connectionless"
- ❌ "Full mesh requires N² links" (it's N(N−1)/2)

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Confusing OSI and TCP/IP layer numbers
- ❌ Calling an Ethernet frame a "packet"
- ❌ Putting TLS at L7 on Network+ (it's L6)
- ❌ Forgetting that L3 switches do route at L3 (default switch = L2)

---

## 🗓️ Key Facts To Memorize Cold

- 7 OSI layers in order, top and bottom mnemonics
- PDU mapping: frame/packet/segment/datagram
- Full mesh formula: N(N−1)/2
- IPv6 has no broadcast
- TCP = 3-way handshake (SYN, SYN-ACK, ACK)
- UDP = no handshake, no retransmit
- Hub = L1, Switch = L2, Router = L3
- Domain 1 weight: **23%** of N10-009

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. List all 7 OSI layers (top down)? ___
2. PDU at L2? L3? L4 (TCP)? ___
3. How many links in a 7-node full mesh? ___
4. Three IPv6 traffic types (no broadcast!)? ___
5. Difference between TCP and UDP in one sentence? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: TCP/IP & Subnetting](../Module-02-TCP-IP-Subnetting/Reading.md)
