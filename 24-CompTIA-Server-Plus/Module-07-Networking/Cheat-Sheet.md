# 📋 Module 7 Cheat Sheet: Networking for Servers

> Print. Tape. Drill.

---

## 🧵 NIC Teaming Modes

| Mode | Behavior | Switch req |
|---|---|---|
| **Active/Passive** | One NIC, other on standby | None |
| **Active/Active hash** | Both NICs, hash-distributed | Switch-independent variants |
| **LACP (802.3ad / 802.1AX)** | Dynamic LAG negotiation | **Same LAG + LACP on switch** |
| **Static LAG** | Manual EtherChannel | Switch config |

🧠 Per-OS: Windows = **LBFO / SET**; Linux = `bonding` / `teamd`; ESXi = vSwitch policies + LACP via DvSwitch.

---

## 🏷️ VLAN Tagging (802.1Q)

| Port | Carries |
|---|---|
| **Access** | One VLAN, untagged |
| **Trunk** | Multiple VLANs, 802.1Q tagged (one native untagged) |

Typical server VLANs:
- 10 mgmt · 20 prod · 30 storage · 40 backup · 99 OOB

🚨 Don't use default VLAN 1.

---

## 🎈 Jumbo Frames

- Default Ethernet MTU = **1500**
- Jumbo = **9000** (sometimes 9216)
- **MUST be end-to-end** (NIC + switch + storage)
- Use on: iSCSI/NFS storage, vMotion, backup VLANs
- Don't use on: user-facing LAN, anything that crosses the internet

🚨 MTU mismatch = silent drops + worse perf than 1500 default.

---

## 🌍 IPv6

| Concept | One-liner |
|---|---|
| 128-bit addresses | `2001:db8:...::1` |
| **NDP** | Replaces ARP |
| **SLAAC** | Stateless autoconfig from router-advertised prefix |
| **DHCPv6** | Stateful (or stateless) config |
| **Link-local** | `fe80::/10` |
| **Unique local** | `fc00::/7` (RFC1918 analog) |

🚨 **Dual-stack** servers need IPv4 AND IPv6 firewall rules.

---

## ⚖️ Load Balancers

| | L4 | L7 |
|---|---|---|
| Layer | Transport (IP+port) | Application (HTTP, etc.) |
| Speed | Very fast | Slower (parses payload) |
| Routing | By IP+port | By host / path / header / cookie |
| SSL offload | No | Yes |
| WAF | No | Yes |
| Examples | AWS NLB, F5 LTM L4, HAProxy L4 | AWS ALB, NGINX, Application Gateway, F5 LTM L7 |

### Algorithms

| Algorithm | What |
|---|---|
| Round-robin | Even, in order |
| Weighted round-robin | Bigger backend → more conn |
| Least connections | Fewest active conn first |
| Source IP hash | Deterministic stickiness |
| URL/path hash | L7 path-based stickiness |

### Other LB features

- **Health checks** (L4 TCP / L7 HTTP)
- **GSLB** = DNS-level geo load balancing
- **Sticky session** = bind client to backend

---

## 🛰️ Server Networking Extras

- **OOB Mgmt VLAN** = sacred (separate, never internet-exposed, MFA)
- **iSCSI VLAN** = dedicated, jumbo, MPIO (Module 3)
- **WoL** = magic packet to NIC; requires standby power + NIC support
- **QoS / DSCP / 802.1p** = priority tagging when storage shares fabric
- **STP PortFast / edge port** = bypasses 30-s STP delay for server-facing ports
- **MLAG / VSS** = multi-chassis LAG for switch redundancy

---

## 🔌 Cables & Transceivers

| Type | Speed |
|---|---|
| Cat 6A | 10 GbE / 100 m |
| Cat 7/8 | 25/40 GbE (rare in copper) |
| **DAC (twinax)** | SFP+/SFP28 short runs |
| **AOC** | Built-in optical, longer |
| **LC fiber + SFP+/SFP28** | Long-distance, flexible |
| **QSFP+ / QSFP28** | 40/100 GbE |

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Enable LACP on switch ports in same LAG"
- "Jumbo frames end-to-end"
- "Dedicated VLAN for storage / mgmt / vMotion"
- "OOB on its own VLAN"
- "L7 LB for path-based routing"
- "Write IPv6 firewall rules separately"
- "PortFast on server-facing ports"

❌ Often **wrong**:
- "Two NICs are automatically a team"
- "Jumbo frames on just the server"
- "Storage on the production VLAN"
- "OOB on internet"
- "Single switch / single NIC"
- "Default VLAN 1 for production"

---

## 🗓️ Facts To Memorize Cold

- MTU 1500 default; 9000 jumbo
- LACP = 802.3ad / 802.1AX
- VLAN tagging = 802.1Q
- L4 = IP+port; L7 = HTTP/payload
- IPv6 ARP = NDP
- IPv6 autoconfig = SLAAC
- Cat 6A = 10 GbE / 100 m

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. LACP — what must the switch do? ___
2. MTU default + jumbo + end-to-end rule? ___
3. L4 vs L7 — one-liner difference? ___
4. SLAAC — what does it do? ___
5. Why mgmt VLAN is sacred? ___
6. PortFast — what does it skip? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 8: Troubleshooting & Documentation](../Module-08-Troubleshooting/Reading.md)
