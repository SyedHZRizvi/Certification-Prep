# Module 2: TCP/IP & Subnetting 🔢

> **Why this module matters:** Subnetting is the single most tested skill on Network+. If you can't compute a network ID, broadcast address, and usable host count for any CIDR mask in under 90 seconds, you will leave easy points on the table. Every domain — security, routing, troubleshooting — circles back to addressing. **Drill subnetting daily until exam day.**

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Module 1 (OSI layers, especially L3) — covered in the previous module
> - Reading binary at the level of "10101100 = 172" and converting back. If shaky, spend 30 min on a binary-to-decimal practice site before continuing.
> - Powers of 2 from 2⁰=1 through 2¹⁶=65,536 cold.

---

## 🏠 A Story: ZIP Codes and Apartments

Yara's bakery from Module 1 just expanded into a 4-story complex. Every floor has 50 apartments. The postal service needs to deliver mail to a specific apartment — not just "the building" — so each apartment gets a number like `4-217`: floor 4, apartment 217.

Now imagine the city decides to split that ZIP code in half — apartments 1-100 are one ZIP, 101-200 another, and so on. Each "subnet" of apartments shares a ZIP prefix but is *routed* to a different mail van for efficiency.

That's IP subnetting. The IP address is "the apartment number." The **subnet mask** says "these high-order bits are the building/floor (network), and the remaining bits are the apartment (host)." Subnetting carves a big address block into smaller, more efficient zones that routers can deliver to without flooding the whole network.

This module turns that intuition into the mechanical skill of finding the network ID, broadcast, and usable host range for any IPv4 (or IPv6) prefix on demand.

---

## 🎯 IPv4 Anatomy

IPv4 was standardized in **RFC 791** (Jon Postel, 1981). An IPv4 address is **32 bits**, displayed as four octets in dotted-decimal: `192.168.1.5` = `11000000.10101000.00000001.00000101`.

Each address has two conceptual parts:

- **Network portion** — identifies the network/subnet
- **Host portion** — identifies a unique device within that network

The **subnet mask** tells you where the boundary is. A mask of `255.255.255.0` in binary is `11111111.11111111.11111111.00000000` — 24 ones, 8 zeros. The first 24 bits are network; the last 8 are host.

### CIDR Notation

Classless Inter-Domain Routing (CIDR, **RFC 4632**, Fuller & Li, 2006) writes the mask as a slash + number-of-network-bits:

- `255.255.255.0` = `/24`
- `255.255.0.0` = `/16`
- `255.0.0.0` = `/8`

**The number after the slash = how many leading 1s in the mask = how many bits are network.**

🎯 **Exam pattern:** *"What is the dotted-decimal subnet mask for /22?"* → 22 ones followed by 10 zeros = `255.255.252.0`.

---

## 🗂️ Classful Addressing (Legacy — Still Tested)

Before CIDR, IPv4 was divided into rigid **classes** based on the first octet. CIDR replaced this in 1993, but the exam tests classful behavior and the "default mask" concept.

| Class | First octet (decimal) | First bits | Default mask | Typical use | # networks | # hosts/net |
|-------|------------------------|------------|---------------|-------------|------------|-------------|
| **A** | 1–126 | 0xxxxxxx | /8 (255.0.0.0) | Large ISPs / govt | 126 | 16,777,214 |
| **B** | 128–191 | 10xxxxxx | /16 (255.255.0.0) | Mid-size orgs | 16,384 | 65,534 |
| **C** | 192–223 | 110xxxxx | /24 (255.255.255.0) | Small networks | 2,097,152 | 254 |
| **D** | 224–239 | 1110xxxx | n/a (multicast) | Multicast groups | — | — |
| **E** | 240–255 | 1111xxxx | n/a (reserved) | Experimental | — | — |

🚨 **Trap:** 127.x.x.x is **loopback** (not Class A in practice). 169.254.x.x is APIPA. Watch for these special ranges in questions.

---

## 🏠 Private (RFC 1918) Address Ranges — MEMORIZE COLD

Defined in **RFC 1918** (Rekhter, Moskowitz, Karrenberg, de Groot, Lear, 1996). These are *not routable on the public Internet* — used for internal networks, NAT translated to public IPs for Internet access.

| Range | CIDR | Class | Common use |
|-------|------|-------|------------|
| **10.0.0.0 – 10.255.255.255** | 10.0.0.0/8 | A | Large enterprise |
| **172.16.0.0 – 172.31.255.255** | 172.16.0.0/12 | B | Mid-size enterprise |
| **192.168.0.0 – 192.168.255.255** | 192.168.0.0/16 | C | Home / SOHO |

🧠 **Memory hook:** "10/12/16" — the three private CIDR prefixes are 10/8, 172.16/12, 192.168/16.

🎯 **Exam pattern:** *"Which of the following is a private IP address?"* → spot the prefix. `172.31.40.1` is private (within 172.16.0.0/12). `172.32.0.1` is **public** (just outside the range).

---

## 🛑 Special-Purpose Addresses You MUST Know

| Range / Address | Purpose | RFC |
|------------------|---------|-----|
| **127.0.0.0/8** | Loopback (commonly 127.0.0.1) | RFC 1122 |
| **169.254.0.0/16** | APIPA — auto-assigned when DHCP fails | RFC 3927 |
| **0.0.0.0** | "This host" / unspecified / default route | RFC 1122 |
| **255.255.255.255** | Limited broadcast — all hosts on this segment | RFC 922 |
| **224.0.0.0–239.255.255.255** | Multicast (Class D) | RFC 5771 |
| **100.64.0.0/10** | Carrier-grade NAT (CGN/CGNAT) | RFC 6598 |

🎯 **Exam pattern:** *"A laptop's IP is 169.254.10.5. What does this indicate?"* → DHCP failed; APIPA self-assigned.

---

## 🧮 The Subnet Mask in Binary

Here's the secret: subnetting is just **binary bookkeeping**. Memorize one row and you have all of it.

### The "magic table" — memorize until you can recite it backwards

| /CIDR | Mask | Last octet | Block size | Hosts |
|-------|------|------------|------------|-------|
| /24 | 255.255.255.0 | 0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 128 | 126 |
| /26 | 255.255.255.192 | 192 | 64 | 62 |
| /27 | 255.255.255.224 | 224 | 32 | 30 |
| /28 | 255.255.255.240 | 240 | 16 | 14 |
| /29 | 255.255.255.248 | 248 | 8 | 6 |
| /30 | 255.255.255.252 | 252 | 4 | 2 |
| /31 | 255.255.255.254 | 254 | 2 | 0 (P2P, RFC 3021) |
| /32 | 255.255.255.255 | 255 | 1 | 1 (host route) |

Octet values follow the pattern **128, 192, 224, 240, 248, 252, 254, 255** — each added bit doubles the network size.

### Host count formula (memorize cold)

**Usable hosts = 2^(host bits) − 2**

Subtract 2 because:

1. First address = network ID (the "name" of the subnet, e.g., `192.168.1.0`)
2. Last address = broadcast (all 1s in the host portion, e.g., `192.168.1.255`)

🚨 **Trap on the exam:** /31 networks (RFC 3021) used in point-to-point links have 0 "usable" hosts by the textbook formula, BUT modern routers treat the 2 addresses as both usable for the P2P pair. CompTIA usually answers "2 usable hosts on /30" (most common P2P) — be ready for this.

---

## ⚡ Subnetting in 4 Steps (the workflow)

Given any IP/CIDR (e.g., `172.16.150.20/22`), find: network ID, broadcast, usable range, host count.

**Step 1 — Find the "interesting octet"** — the octet where the mask isn't 0 or 255. For /22, mask is `255.255.252.0`, so the third octet (252) is interesting.

**Step 2 — Compute the block size:** 256 − (mask octet value). For mask octet 252: 256 − 252 = **4**. The network blocks step by 4 in the third octet: 0, 4, 8, …, 148, 152, 156, …

**Step 3 — Find the network ID:** find which multiple of the block size the host's third octet (150) falls into.
- 148 ≤ 150 < 152 → network ID third octet = **148**
- Network ID = `172.16.148.0`

**Step 4 — Find broadcast and range:**
- Next network starts at `172.16.152.0`
- Broadcast = one less = `172.16.151.255`
- First usable host = `172.16.148.1`
- Last usable host = `172.16.151.254`
- Total addresses in block = 4 × 256 = 1,024
- Usable hosts = 1,024 − 2 = **1,022**

### Worked example #2 — `10.50.75.130/27`

- Interesting octet: 4 (mask `.224`)
- Block size: 256 − 224 = **32**
- Multiples of 32 in the 4th octet: 0, 32, 64, 96, 128, 160, …
- 128 ≤ 130 < 160 → network ID = `10.50.75.128`
- Next network = `10.50.75.160` → broadcast = `10.50.75.159`
- Usable range: `10.50.75.129` to `10.50.75.158` → **30 usable hosts**

### Worked example #3 — `192.168.1.45/28`

- Interesting octet: 4 (mask `.240`)
- Block size: 256 − 240 = **16**
- Multiples of 16 in 4th octet: 0, 16, 32, 48, …
- 32 ≤ 45 < 48 → network ID = `192.168.1.32`
- Next network = `192.168.1.48` → broadcast = `192.168.1.47`
- Usable range: `.33` to `.46` → **14 usable hosts**

🧠 **Drill habit:** Pick a random IP/CIDR five times a day. Time yourself. Aim for under 60 seconds on /16–/30 problems by exam day.

---

## 🪜 VLSM — Variable Length Subnet Masks

Standardized in **RFC 1878** (Pummill & Manning, 1995). Lets you carve up an address block into subnets of *different sizes* to match each subnet's actual host requirement instead of wasting addresses with one-size-fits-all.

### Worked example — design subnets from `10.0.0.0/24` for:

- Engineering: 60 hosts
- Sales: 28 hosts
- Operations: 12 hosts
- Two P2P WAN links: 2 hosts each

**Step 1 — Sort by host requirement (largest first):** Eng 60, Sales 28, Ops 12, WAN1 2, WAN2 2.

**Step 2 — Pick the smallest mask that fits each:**

| Subnet | Hosts needed | Mask | Block size | Hosts available |
|--------|--------------|------|------------|-----------------|
| Engineering | 60 | /26 | 64 | 62 |
| Sales | 28 | /27 | 32 | 30 |
| Operations | 12 | /28 | 16 | 14 |
| WAN 1 | 2 | /30 | 4 | 2 |
| WAN 2 | 2 | /30 | 4 | 2 |

**Step 3 — Allocate sequentially (largest first):**

| Subnet | Range | Network ID | Broadcast |
|--------|-------|------------|-----------|
| Engineering /26 | .0–.63 | 10.0.0.0 | 10.0.0.63 |
| Sales /27 | .64–.95 | 10.0.0.64 | 10.0.0.95 |
| Operations /28 | .96–.111 | 10.0.0.96 | 10.0.0.111 |
| WAN 1 /30 | .112–.115 | 10.0.0.112 | 10.0.0.115 |
| WAN 2 /30 | .116–.119 | 10.0.0.116 | 10.0.0.119 |

🎯 **Exam pattern:** PBQ-style — given requirements + a block, drag the correct subnets to the diagram. Always allocate largest first.

---

## 🔁 NAT, PAT, and Address Translation

**NAT (Network Address Translation)** — defined in RFC 1631 (Egevang, Francis, 1994; superseded by RFC 3022, 2001). Translates private (RFC 1918) addresses to public addresses at the network edge so internal hosts can reach the Internet.

| Term | Meaning |
|------|---------|
| **Static NAT** | One-to-one mapping (private IP X always maps to public IP Y) — used for inbound services |
| **Dynamic NAT** | Pool of public IPs; assigns one per session, frees after |
| **PAT** (NAT Overload) | Many internal IPs share *one* public IP; differentiated by **port numbers** (e.g., 192.168.1.5:51000 → 203.0.113.7:51000, 192.168.1.6:51000 → 203.0.113.7:51001) |
| **Port Forwarding** | Inbound: public-IP:port → specific private-IP:port (e.g., web server reachable from outside) |

**PAT is what your home router does** — your phone, laptop, and tablet all share your one public IP, each gets a unique source port on the NAT table.

🎯 **Exam pattern:** *"What technology allows many internal hosts to share one public IP?"* → PAT (or NAT overload). *"What is needed to expose an internal web server to the Internet?"* → port forwarding (or static NAT for inbound).

---

## 🌍 IPv6 — The 128-bit Future

Standardized in **RFC 8200** (Deering & Hinden, 2017; updates RFC 2460 from 1998). IPv4 ran out of public addresses around 2011 (IANA depleted free pool 3 Feb 2011); IPv6 provides **2¹²⁸** addresses — about 340 undecillion, enough that every grain of sand could have billions.

### Address format

128 bits, written as 8 groups of 4 hex digits separated by colons:
`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

### Compression rules (memorize)

- Leading zeros in a group can be omitted: `0db8` → `db8`
- One run of consecutive all-zero groups can be replaced by `::` (only ONCE per address)

So `2001:0db8:85a3:0000:0000:8a2e:0370:7334` compresses to:
`2001:db8:85a3::8a2e:370:7334`

🚨 **Trap:** You can use `::` exactly **once** per address — otherwise the parser can't tell how many zero groups were skipped.

### Special IPv6 ranges — MEMORIZE

| Prefix / address | Purpose |
|-------------------|---------|
| **::1/128** | Loopback (the IPv4 127.0.0.1 equivalent) |
| **::/128** | Unspecified (all zeros) |
| **FE80::/10** | **Link-local** — auto-configured on every interface, only reachable on local link |
| **FC00::/7** (commonly FD00::/8) | **Unique local** — IPv6 private/ULA, RFC 4193 |
| **FF00::/8** | **Multicast** |
| **2000::/3** | **Global unicast** — public Internet routable |
| **FF02::1** | All-nodes multicast (replaces IPv4 broadcast) |
| **FF02::2** | All-routers multicast |

### EUI-64 — Auto-generating the host portion

**Extended Unique Identifier 64** — derives the 64-bit host portion of an IPv6 address from a 48-bit MAC by:

1. Inserting `FF:FE` in the middle of the MAC
2. Flipping the **7th bit** (Universal/Local bit) of the first octet

Example: MAC `00:1A:2B:3C:4D:5E` → modified to `02:1A:2B:FF:FE:3C:4D:5E` → host portion of IPv6 address.

### SLAAC — Stateless Address Auto-Configuration

**Stateless Address Auto-Configuration** (RFC 4862, 2007). An IPv6 host:

1. Generates a link-local address (FE80::/10 + EUI-64 or random)
2. Sends a Router Solicitation
3. Router replies with a Router Advertisement containing the prefix
4. Host combines prefix + EUI-64 (or random) for a global unicast address

**No DHCP server required.** DHCPv6 is optional — used when admins want centralized control (RFC 8415).

### IPv4 vs IPv6 quick comparison

| Feature | IPv4 | IPv6 |
|---------|------|------|
| Address length | 32 bits | 128 bits |
| Notation | Dotted decimal | Colon hex with `::` compression |
| Header size | Variable (20–60 bytes) | Fixed 40 bytes |
| Broadcast | Yes | **No** — uses multicast |
| Address config | Static, DHCP, APIPA | Static, SLAAC, DHCPv6 |
| Fragmentation | Routers can fragment | **Only the source** — routers drop and send ICMPv6 "Packet Too Big" |
| Built-in IPsec | Optional | Mandatory (originally; relaxed in practice) |
| NAT | Common | Discouraged — meant to be end-to-end |

---

## 🔌 Dual Stack, Tunneling, and Translation

How do IPv4 and IPv6 coexist during the long transition?

| Strategy | What it does | Use case |
|----------|--------------|----------|
| **Dual stack** | Run both IPv4 and IPv6 on the same interface | The dominant transition strategy |
| **Tunneling** (6in4, GRE, 6to4, Teredo) | Encapsulate IPv6 inside IPv4 for transport across IPv4-only paths | Bridging IPv6 islands across an IPv4 backbone |
| **NAT64 / DNS64** | Translate IPv6 to IPv4 (and vice versa) at the network edge | IPv6-only client networks reaching IPv4-only servers |

---

## 🔬 Scenario Walkthrough — DHCP failure

> **Scenario:** A user reports they can't reach the Internet. `ipconfig` shows `IPv4 Address: 169.254.18.220 / 255.255.0.0`. What happened?

**Walkthrough:**
1. The 169.254.x.x address is **APIPA** (RFC 3927) — auto-assigned by the OS when DHCP fails to respond.
2. Likely causes: DHCP server down/unreachable; switch port placed in wrong VLAN; cable disconnected (so DHCPDISCOVER never reaches the relay); DHCP scope exhausted.
3. APIPA addresses are *link-local only* — they cannot route to the Internet (the gateway is unknown).
4. Resolution: investigate DHCP path. Test by manually assigning a known-good IP and confirming connectivity, then root-cause the DHCP failure.

This is the canonical "first-line help-desk Network+ scenario." On the exam, *seeing 169.254* must immediately trigger "DHCP failed."

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "A /24 has 256 usable hosts" | NO — 256 *addresses*, but minus network + broadcast = **254 usable**. |
| "127.0.0.1 is a Class A address" | Loopback is special-purpose. Don't classify it as a usable Class A. |
| "169.254.x.x is a private address" | No — APIPA. Hosts can't route past the local link. RFC 1918 private is 10/8, 172.16/12, 192.168/16 only. |
| "The first usable IP is always .1" | Only true for /24 and broader. For /27 with network .128, first usable is `.129`. |
| "You can use :: twice in IPv6" | Only ONCE per address. |
| "NAT and PAT are the same" | NAT is 1:1 translation. PAT (overload) uses ports so many can share one IP. Home routers use PAT. |
| "IPv6 broadcasts to FF02::1" | FF02::1 is *multicast* (all-nodes). IPv6 has no broadcast — it's multicast under the hood. |
| "/31 networks can't work" | RFC 3021 allows /31 for point-to-point (2 addresses, both usable). |
| "Subnet mask 255.255.255.224 = /27" | Yes — and remember the magic last-octet pattern 128/192/224/240/248/252/254/255. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **CIDR** | Classless Inter-Domain Routing — slash notation for masks (RFC 4632) |
| **VLSM** | Variable Length Subnet Mask — different-size subnets within a block |
| **Network ID** | First address of a subnet (all-zero host bits) |
| **Broadcast** | Last address of a subnet (all-one host bits) |
| **Usable hosts** | 2^(host bits) − 2 |
| **Subnet mask** | Bitmask separating network and host portions |
| **RFC 1918** | Private address ranges 10/8, 172.16/12, 192.168/16 |
| **APIPA** | 169.254.0.0/16 self-assigned when DHCP fails |
| **NAT** | Network Address Translation (private ↔ public) |
| **PAT** | Port Address Translation (many internal → one public via ports) |
| **Port forwarding** | Inbound NAT to a specific internal host |
| **SLAAC** | IPv6 stateless auto-config |
| **EUI-64** | Method to derive 64-bit host portion from MAC |
| **Dual stack** | Running IPv4 and IPv6 simultaneously |
| **Link-local** | FE80::/10 (IPv6) — local-segment-only |

### Acronyms cheat-row (Module 2)
| Acronym | Meaning |
|---------|---------|
| IP | Internet Protocol |
| CIDR | Classless Inter-Domain Routing |
| VLSM | Variable Length Subnet Mask |
| NAT | Network Address Translation |
| PAT | Port Address Translation |
| APIPA | Automatic Private IP Addressing |
| SLAAC | Stateless Address Auto-Configuration |
| ULA | Unique Local Address (IPv6) |
| EUI-64 | Extended Unique Identifier 64-bit |
| RFC | Request for Comments (IETF standard document) |
| ICMP / ICMPv6 | Internet Control Message Protocol |
| DHCP / DHCPv6 | Dynamic Host Configuration Protocol |

---

## 📊 Case Study — IPv4 Exhaustion and the Slow IPv6 Rollout

**Situation.** IPv4 provides ~4.3 billion addresses (2³²). By the early 2000s the address-allocation rate exceeded the supply. IANA (Internet Assigned Numbers Authority) allocated the **last unallocated /8 IPv4 blocks** to the five Regional Internet Registries (RIRs) on **3 February 2011**. APNIC (Asia-Pacific) ran out **15 April 2011**. RIPE (Europe) — **14 September 2012**. LACNIC (Latin America) — **10 June 2014**. ARIN (North America) — **24 September 2015**. AFRINIC (Africa) — **2019**.

**Decision.** Two parallel responses emerged:

1. **NAT and CGNAT** — extend IPv4 life by carrier-grade NAT (RFC 6598 reserved 100.64.0.0/10 for CGNAT) so ISPs could share a single public IP across thousands of subscribers
2. **IPv6 adoption** — IPv6 had existed since 1998 (RFC 2460) but adoption was glacial; Google's IPv6 traffic was <1% as of 2010

**Outcome.** Google's IPv6 measurement page (https://www.google.com/intl/en/ipv6/statistics.html) shows IPv6 traffic grew from ~1% in 2012 to ~46% by 2026. **Countries with leading IPv6 deployment** (per APNIC data, 2025): India (~73%), France (~75%), Germany (~70%), USA (~55%). China and parts of Asia lagged due to extensive CGNAT investment that delayed urgency. IPv4 addresses, once handed out for free, now trade on a secondary market at **$40–60 per address** as of 2025 (per IPv4.Global broker data). A /16 block (65,536 addresses) sells for ~$3M.

**Lesson for the exam / for practitioners.** This is the canonical Network+ context for *every* IPv6 question:

- **Why CGNAT matters** — your ISP's public IP isn't yours alone; thousands share it via PAT, which breaks port-forwarding and some applications (e.g., gaming, some VPN clients)
- **Why IPv6 mandate** — the US government (NIST SP 800-119, 2010) and most major cloud providers (AWS, Azure, GCP) require dual-stack or IPv6-only for new builds
- **Why /48 to enterprises, /64 to hosts** — IPv6 allocation policy assumes /64 per LAN for SLAAC to function; an enterprise /48 carves into 65,536 /64 subnets
- **Why dual-stack is the practical answer** — Network+ frequently asks about transition mechanisms; dual-stack is the dominant strategy, with tunneling and translation as exceptions

This case is exactly what Network+ tests when asking, "Why would an organization deploy IPv6?" The answer is not "more addresses" alone — it is the economic, policy, and architectural pressure of a 14-year-running address shortage.

**Discussion (Socratic).**
- **Q1:** Your ISP places you behind CGNAT. Which three categories of common consumer applications stop working or become unreliable, and what mitigations exist for each? Pick at least one mitigation that does *not* require your ISP's cooperation.
- **Q2:** An enterprise on a `/12` IPv4 private block is migrating to IPv6. The CIO asks, "If we have plenty of private IPv4 internally, why bother with IPv6?" Give three concrete operational benefits of IPv6 — none of which is "more addresses."
- **Q3:** IPv6 was designed in the early 1990s. With 30+ years of hindsight, what should the designers have done differently to drive faster adoption? Consider the trade-off between technical elegance and migration pragmatism.

---

## ✅ Module 2 Summary

You now know:

- 🔢 **IPv4** structure, classful ranges, RFC 1918 private blocks, and special-purpose addresses
- 🧮 The **subnetting workflow** — find the interesting octet, block size, network ID, broadcast, usable range
- 🪜 **VLSM** — designing different-sized subnets within one block
- 🔁 **NAT, PAT, port forwarding** — how private hosts share public IPs
- 🌍 **IPv6** — 128-bit format, `::` compression, scope prefixes (link-local, ULA, multicast, global), SLAAC, EUI-64
- 🔌 **Coexistence** — dual stack, tunneling, NAT64/DNS64

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. 🧮 **Subnet 5 problems daily** for the rest of the course
5. ➡️ Move on: [Module 3 — Routing & Switching](../Module-03-Routing-Switching/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 3](../Module-03-Routing-Switching/Reading.md) uses subnet design as the substrate for routing protocols and VLAN sizing; [Module 5](../Module-05-Services-Cloud/Reading.md) uses CIDR notation for VPC sizing in cloud connectivity; [Module 7](../Module-07-Monitoring-Tools/Reading.md) uses IP addressing to interpret SNMP/syslog data; [Module 8](../Module-08-Troubleshooting/Reading.md) revisits APIPA, DHCP failure, and addressing as a top L3 issue category.
> - Cross-course: AWS Solutions Architect (course 04) VPC CIDR sizing uses identical subnetting math; Azure Administrator (course 06) VNet/subnet design likewise.
> - Practice: Practice Exam 1 has ~10 subnetting/addressing questions; the Final Mock has ~14.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 IETF RFC 791 (Postel, 1981). [*Internet Protocol*](https://www.rfc-editor.org/rfc/rfc791). (IPv4.)
- 📄 IETF RFC 1918 (Rekhter, Moskowitz, Karrenberg, de Groot, Lear, 1996). [*Address Allocation for Private Internets*](https://www.rfc-editor.org/rfc/rfc1918).
- 📄 IETF RFC 4632 (Fuller & Li, 2006). [*Classless Inter-domain Routing (CIDR)*](https://www.rfc-editor.org/rfc/rfc4632).
- 📄 IETF RFC 3927 (Cheshire, Aboba, Guttman, 2005). [*Dynamic Configuration of IPv4 Link-Local Addresses*](https://www.rfc-editor.org/rfc/rfc3927). (APIPA.)
- 📄 IETF RFC 8200 (Deering & Hinden, 2017). [*IPv6 Specification*](https://www.rfc-editor.org/rfc/rfc8200).
- 📄 IETF RFC 4862 (Thomson, Narten, Jinmei, 2007). [*IPv6 SLAAC*](https://www.rfc-editor.org/rfc/rfc4862).

**Case-study sources:**
- 📄 Huston, G. (2011-present). "IPv4 Address Exhaustion." APNIC technical blog (regular updates).
- 📄 Google IPv6 Statistics — https://www.google.com/intl/en/ipv6/statistics.html (live traffic %).

**Practitioner / exam:**
- 📖 [Professor Messer Subnetting playlist](https://www.professormesser.com/network-plus/n10-009/n10-009-video-training-course/) — free
- 📖 [SubnettingPractice.com](https://subnettingpractice.com/) — interactive drills
- 📖 [iplocation.net IPv6 visualizer](https://www.iplocation.net/) — see real IPv6 addresses
