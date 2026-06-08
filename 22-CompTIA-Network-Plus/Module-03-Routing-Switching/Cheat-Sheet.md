# 📋 Module 3 Cheat Sheet: Routing & Switching

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🚦 Administrative Distance, Memorize Order

| Source | AD |
|--------|----|
| Directly connected | 0 |
| Static | 1 |
| eBGP | 20 |
| EIGRP (internal) | 90 |
| OSPF | 110 |
| RIPv2 | 120 |
| iBGP | 200 |
| Unknown | 255 |

🧠 "**Connect Static Easily, OSPF Right In, BGP-2**" (0, 1, 90, 110, 120, 200)

---

## 🛰️ Routing Protocol Quick Compare

| Protocol | Algorithm | Metric | Convergence | Type | Scope |
|----------|-----------|--------|-------------|------|-------|
| RIP / RIPv2 | Distance vector | Hops (max 15) | Slow (~30s) | IGP | Small / legacy |
| OSPF | Link state (Dijkstra) | Cost | Fast (sec) | IGP | Most enterprises |
| EIGRP | Hybrid DUAL | Bandwidth + delay | Very fast | IGP | Cisco shops |
| IS-IS | Link state | Cost | Fast | IGP | Large ISPs |
| BGP | Path vector | Path attributes | Slow by design | EGP | Inter-AS / Internet |

---

## 🏷️ VLAN Quick Block

- **802.1Q** tag = 4 bytes, VID = 12 bits → **4,094 usable VLANs** (0 + 4095 reserved)
- **Access port** = 1 VLAN, untagged (end host)
- **Trunk port** = many VLANs, tagged with 802.1Q (except native)
- **Native VLAN** = the untagged VLAN on a trunk; **change from default VLAN 1**
- **Voice VLAN** = separate VLAN tag for an IP phone alongside a data VLAN

### Inter-VLAN routing options
1. **L3 switch with SVIs** (modern default)
2. Router on a stick (sub-interfaces)
3. Separate physical router interfaces (rare/wasteful)

---

## 🌳 STP One-Pager

| Element | Value |
|---------|-------|
| Standard | IEEE 802.1D (classic) |
| RSTP | IEEE 802.1w, fast (sec) |
| MSTP | IEEE 802.1s, per-VLAN-group |
| Default priority | 32,768 |
| Root election | Lowest Bridge ID (priority + MAC) |
| Port roles | Root, Designated, Blocking/Alternate |
| Convergence (classic) | ~30–50 seconds |
| PortFast | ACCESS PORTS ONLY, skips listening/learning |
| BPDU Guard | Disables PortFast port if BPDU received |
| Root Guard | Prevents interface from becoming root port |

🚨 NEVER disable STP to "fix slowness" → use RSTP. NEVER PortFast a trunk.

---

## 🤝 Link Aggregation

| Term | Meaning |
|------|---------|
| **LAG** | Link Aggregation Group (vendor-neutral name) |
| **LACP** | Link Aggregation Control Protocol (802.3ad / 802.1AX) |
| **EtherChannel** | Cisco's brand; supports LACP or PAgP |
| Max links | 8 active |
| Single flow throughput | Pinned to one link by hash |

---

## 🔌 Switch & Port Security

- **Port security**: limit MACs per port, allow-list specific MACs
- **Sticky MAC**: switch learns first MAC, treats as static-allowed
- **DHCP snooping**: drops DHCP from rogue (non-trusted) ports
- **DAI**: validates ARPs against DHCP-snooping table
- **BPDU Guard**: see STP table above
- Disable unused ports, replace Telnet/HTTP with SSH/HTTPS, change defaults
- **Out-of-band mgmt**: dedicated mgmt VLAN/port

---

## 📡 Devices & Their Layers

| Device | OSI Layer | Use |
|--------|-----------|-----|
| Hub | 1 | Extinct repeater |
| Bridge | 2 | Legacy switch predecessor |
| Switch | 2 | MAC-based forwarding |
| L3 switch | 2/3 | Switch + routing (SVIs) |
| Router | 3 | IP-based forwarding |
| Firewall | 3/4/7 | Filter by rules |
| Load balancer | 4/7 | Distribute requests |

---

## 🏆 Exam Power Phrases

Often **right**:

- ✅ "Lowest Bridge ID wins root election"
- ✅ "OSPF for fast convergence, open standard, link-state"
- ✅ "BGP for inter-AS / multi-homing"
- ✅ "LACP for redundant + aggregated links"
- ✅ "PortFast + BPDU Guard on access ports"
- ✅ "Change the native VLAN from VLAN 1"

Often **wrong**:

- ❌ "Disable STP to speed convergence"
- ❌ "RIP for any non-trivial network"
- ❌ "PortFast on a trunk"
- ❌ "Hub solves a slow LAN"
- ❌ "VLANs require separate physical switches"

---

## 🗓️ Key Facts To Memorize Cold

- AD order: 0, 1, 20, 90, 110, 120, 200
- RIP = 15 hops max; OSPF = Dijkstra; EIGRP = DUAL; BGP = path vector
- 802.1Q tag = 4 bytes, 4,094 usable VLANs
- STP: root = lowest BID; RSTP = fast; PortFast for access only
- LACP = 802.3ad / 802.1AX
- Each switch port = 1 collision domain; VLAN = 1 broadcast domain
- eBGP AD 20, iBGP AD 200

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. AD of static, OSPF, RIP? ___
2. STP root bridge tiebreaker? ___
3. Native VLAN handling on a trunk? ___
4. What does PortFast do (and where is it safe)? ___
5. Which routing protocol does the Internet use between ASes? ___

---

➡️ [Module 4: Wireless & SOHO Networks](../Module-04-Wireless/Reading.md)
