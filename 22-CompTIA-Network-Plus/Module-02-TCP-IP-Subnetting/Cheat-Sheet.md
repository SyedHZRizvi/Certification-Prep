# 📋 Module 2 Cheat Sheet: TCP/IP & Subnetting

> One page. Print it. Tape it to your monitor. Drill the subnet table cold.

---

## 🔢 IPv4 Classes & Default Masks

| Class | First octet | Default mask | CIDR |
|-------|-------------|--------------|------|
| A | 1–126 | 255.0.0.0 | /8 |
| B | 128–191 | 255.255.0.0 | /16 |
| C | 192–223 | 255.255.255.0 | /24 |
| D | 224–239 | Multicast | n/a |
| E | 240–255 | Reserved | n/a |

---

## 🏠 RFC 1918 Private Ranges — MEMORIZE

| Range | CIDR |
|-------|------|
| 10.0.0.0 – 10.255.255.255 | 10/8 |
| 172.16.0.0 – 172.31.255.255 | 172.16/12 |
| 192.168.0.0 – 192.168.255.255 | 192.168/16 |

🧠 "Ten / Twelve / Sixteen" — three numbers, three private blocks.

---

## 🛑 Special-Purpose Addresses

| Range | Purpose |
|-------|---------|
| 127.0.0.0/8 | Loopback (127.0.0.1) |
| 169.254.0.0/16 | APIPA (DHCP failed) |
| 0.0.0.0 | This host / default route |
| 255.255.255.255 | Limited broadcast |
| 224.0.0.0/4 | Multicast |
| 100.64.0.0/10 | CGNAT |

---

## 🧮 The Magic Subnet Table

| CIDR | Mask | Last octet | Block size | Hosts |
|------|------|------------|------------|-------|
| /24 | 255.255.255.0 | 0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 128 | 126 |
| /26 | 255.255.255.192 | 192 | 64 | 62 |
| /27 | 255.255.255.224 | 224 | 32 | 30 |
| /28 | 255.255.255.240 | 240 | 16 | 14 |
| /29 | 255.255.255.248 | 248 | 8 | 6 |
| /30 | 255.255.255.252 | 252 | 4 | 2 |
| /31 | 255.255.255.254 | 254 | 2 | 0 / P2P |
| /32 | 255.255.255.255 | 255 | 1 | host |

Mask octet pattern (each = previous + power of 2):
**128 · 192 · 224 · 240 · 248 · 252 · 254 · 255**

**Hosts = 2^(host bits) − 2**

---

## ⚡ 4-Step Subnetting Workflow

1. Find the **interesting octet** (mask ≠ 0 and ≠ 255)
2. **Block size** = 256 − mask octet
3. **Network ID** = floor(host octet ÷ block size) × block size, plus the network bits before
4. **Broadcast** = next network ID − 1; **first usable** = network + 1; **last usable** = broadcast − 1

---

## 🪜 VLSM — Always Allocate Largest First

| Hosts needed | Smallest mask | Hosts available |
|--------------|---------------|-----------------|
| 1–2 | /30 | 2 |
| 3–6 | /29 | 6 |
| 7–14 | /28 | 14 |
| 15–30 | /27 | 30 |
| 31–62 | /26 | 62 |
| 63–126 | /25 | 126 |
| 127–254 | /24 | 254 |

---

## 🔁 NAT Types

| Type | One-liner |
|------|-----------|
| **Static NAT** | 1:1, private ↔ public, often for inbound services |
| **Dynamic NAT** | Pool of public IPs, dynamically assigned per session |
| **PAT (overload)** | Many internal → one public via unique ports |
| **Port forwarding** | Inbound: public IP:port → specific internal IP:port |

---

## 🌍 IPv6 Quick Block

| Prefix | Purpose |
|--------|---------|
| ::1/128 | Loopback |
| ::/128 | Unspecified |
| FE80::/10 | **Link-local** (auto, segment-only) |
| FC00::/7 (FD00::/8 in practice) | **ULA** (private) |
| FF00::/8 | **Multicast** (FF02::1=all nodes, FF02::2=all routers) |
| 2000::/3 | **Global unicast** (public) |

### IPv6 compression rules
- Drop leading zeros in each group: `0db8` → `db8`
- One `::` per address to collapse consecutive all-zero groups

### IPv4 vs IPv6
| Feature | IPv4 | IPv6 |
|---------|------|------|
| Bits | 32 | 128 |
| Notation | Dotted decimal | Hex with `::` |
| Broadcast | Yes | **No (multicast)** |
| Auto-config | DHCP, APIPA | SLAAC, DHCPv6 |
| Fragment | Routers OK | Source only |

---

## 🏆 Exam Power Phrases

Often **right**:
- ✅ "169.254.x.x = DHCP failure"
- ✅ "PAT for many internal hosts sharing one public IP"
- ✅ "/30 for point-to-point links"
- ✅ "FE80 prefix = link-local"
- ✅ "Allocate largest VLSM subnet first"

Often **wrong**:
- ❌ "Assign the broadcast address to a host"
- ❌ "Use `::` twice in IPv6"
- ❌ "172.32.x.x is private" (it's public; private ends at 172.31)
- ❌ "IPv6 has broadcast"
- ❌ "A /24 has 256 usable hosts" (it's 254)

---

## 🗓️ Key Facts To Memorize Cold

- RFC 1918: 10/8, 172.16/12, 192.168/16
- Magic mask values: 128, 192, 224, 240, 248, 252, 254, 255
- Hosts = 2^(host bits) − 2
- /30 = 2 hosts (P2P); /27 = 30 hosts; /24 = 254 hosts
- APIPA = 169.254.0.0/16 → DHCP failure
- IPv6: ::1, FE80::/10, FC00::/7, FF00::/8, 2000::/3
- NAT vs PAT vs port forwarding
- Domain 1 weight contribution from this module: **part of 23%**

---

## ✏️ Quick Self-Check (Time Yourself — 90 sec)

Solve in your head:
1. Network ID of `172.16.150.20/22`? ___
2. Usable hosts in /27? ___
3. Broadcast of `10.20.30.0/28`? ___
4. Compress `2001:0db8:0000:0000:0000:0000:0000:0001`? ___
5. Which traffic type does IPv6 NOT have? ___

Answers: 172.16.148.0 · 30 · 10.20.30.15 · 2001:db8::1 · Broadcast.

---

➡️ [Module 3: Routing & Switching](../Module-03-Routing-Switching/Reading.md)
