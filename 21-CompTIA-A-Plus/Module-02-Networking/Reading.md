# Module 2: Networking Fundamentals 🌐

> **Why this module matters:** 20% of the 220-1101 exam — about 18 questions, your second-largest Core 1 chapter. Networking is also the *most-tested* concept implicitly across every other module: troubleshooting, security, mobile, virtualization all assume you know cables, ports, and the layer-by-layer model. Get this cold or every later module is harder.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic IP concepts (you know your home router has an IP and your phone has an IP)
> - Plugging in an Ethernet cable / joining a Wi-Fi network
>
> If those are unfamiliar, take 15 minutes to find your home router's admin page in a browser and look around. You don't need to change anything — just see what's there.

---

## 🏢 A Story: The 12-Year-Old Cable That Killed an Acquisition

Meet Reza. He's a 23-year-old field tech for a managed-service provider. His client — a 60-person law firm — has just acquired a smaller firm and is consolidating both offices into a single floor of a Class-A downtown building. The cable installer pulled new Cat 6a everywhere. The new switch fleet is gigabit-managed. Wi-Fi 6E mesh APs are bolted in. Reza's been on-site for two days getting it ready for the partners to walk in Monday morning.

Sunday night, the network breaks. Specifically: every conference-room jack works except one — the largest one, the one the senior partner will video-conference from at 9:00 a.m. tomorrow with a $40M acquisition counter-party.

Reza checks the jack with a cable tester. Continuity, all 8 pins, pass. He swaps the patch cable. No difference. He swaps the keystone jack on the wall. No difference. He moves the laptop to a different jack — it works. The partner needs *this* jack.

He pulls the patch panel cover. The horizontal cable feeding that jack is **Cat 5** — not 5e, not 6, not 6a. Cat 5. The installer hadn't replaced one run because it disappeared into the wall behind a structural beam they couldn't access. Cat 5 maxes at 100 Mbps. The switch port was negotiating gigabit, failing, and falling back — except some negotiations were just crashing the link entirely.

Reza ran a fresh Cat 6a from a nearby empty conduit at 11 p.m., punched it down, retested at gigabit. Done by 2 a.m. The partner walked in at 8:55, plugged in, and started the call.

**That's networking in real life.** It's pin-outs, it's standards, it's understanding *why* a cable category matters, and it's knowing which tool to grab. This module gives you the vocabulary to walk into Reza's exact problem and solve it.

---

## 📋 Cables — The Physical Layer

### Twisted-pair copper (Ethernet)

| Category | Speed | Max distance | Frequency | Notes |
|----------|-------|--------------|-----------|-------|
| **Cat 3** | 10 Mbps | 100m | 16 MHz | Legacy; phones |
| **Cat 5** | 100 Mbps | 100m | 100 MHz | Legacy |
| **Cat 5e** | 1 Gbps | 100m | 100 MHz | Most home/office runs since ~2002 |
| **Cat 6** | 1 Gbps @ 100m, 10 Gbps @ 55m | 100m (1G) / 55m (10G) | 250 MHz | Office workhorse |
| **Cat 6a** | 10 Gbps | 100m | 500 MHz | Modern installs, thicker jacket |
| **Cat 7** | 10 Gbps | 100m | 600 MHz | Shielded, not widely adopted; uses GG45/TERA |
| **Cat 8** | 25–40 Gbps | 30m only | 2000 MHz | Data center top-of-rack only |

Two pin-out standards — **T568A** and **T568B** — for terminating an RJ-45.

- **Straight-through** patch cable: both ends are the same standard (both A or both B). Use to connect PC ↔ switch, router ↔ switch.
- **Crossover** cable: one end A, other end B. Use to connect two like devices (PC ↔ PC, switch ↔ switch) — *unless* one of them supports Auto-MDI/MDIX (almost everything does since ~2003). On the exam, the crossover question still appears.
- **Rollover (console) cable**: reverses all 8 wires. Used to connect a PC serial port to a Cisco router console port.

### Coaxial

| Type | Use |
|------|-----|
| **RG-6** | Cable TV, cable broadband modems (75-ohm) |
| **RG-59** | Older CCTV, some cable runs (75-ohm) |

Connector: **F-type** (screw-on threaded).

### Fiber optic

| Type | Core size | Distance | Light source | Color jacket convention |
|------|-----------|----------|--------------|--------|
| **Single-mode (SMF)** | ~9 μm | Up to 40+ km | Laser | Yellow |
| **Multi-mode (MMF)** | 50 or 62.5 μm | Up to 2 km | LED or VCSEL | Orange (OM1/OM2), aqua (OM3), aqua/erika violet (OM4/OM5) |

**Connectors:** LC (small, dual-fiber, most common in data centers), SC (square push-pull), ST (round bayonet — legacy), MTP/MPO (multi-fiber bundle for 40/100/400G).

---

## 🔌 Connectors Reference Card

| Connector | Used on | Look |
|-----------|---------|------|
| **RJ-45** | Ethernet (4-pair twisted) | 8 pins, wider |
| **RJ-11** | Telephone, DSL | 4 or 6 pins, narrower |
| **F-type** | Coax cable | Threaded center pin |
| **BNC** | Older coax, video equipment | Bayonet lock |
| **LC fiber** | Data center fiber | Small dual-strand, push-pull tab |
| **SC fiber** | Telco fiber | Square push-pull |
| **ST fiber** | Legacy fiber | Round bayonet twist-lock |
| **MTP/MPO** | High-density data center fiber | Wide flat with 12 or 24 fibers |

---

## 📡 Wi-Fi Standards

| Standard | Marketing name | Frequencies | Max theoretical | Year |
|----------|----------------|-------------|------------------|------|
| 802.11a | (none) | 5 GHz | 54 Mbps | 1999 |
| 802.11b | (none) | 2.4 GHz | 11 Mbps | 1999 |
| 802.11g | (none) | 2.4 GHz | 54 Mbps | 2003 |
| 802.11n | Wi-Fi 4 | 2.4/5 GHz | 600 Mbps | 2009 |
| 802.11ac | Wi-Fi 5 | 5 GHz only | 6.9 Gbps | 2013 |
| 802.11ax | Wi-Fi 6 / 6E | 2.4/5/(6) GHz | 9.6 Gbps | 2019/2020 |
| 802.11be | Wi-Fi 7 | 2.4/5/6 GHz with MLO | 46 Gbps theoretical | 2024 |

🎯 **Exam pattern:** *"User in a 2.4 GHz environment has interference from microwave and Bluetooth."* → Cause: 2.4 GHz is crowded. Solution: switch to 5 GHz (Wi-Fi 5/6/7).

### 2.4 GHz vs 5 GHz vs 6 GHz (Wi-Fi 6E/7)

| Band | Pros | Cons |
|------|------|------|
| 2.4 GHz | Long range, penetrates walls | Crowded (microwaves, BT, baby monitors), slow |
| 5 GHz | Faster, less crowded | Shorter range, weaker through walls |
| 6 GHz (Wi-Fi 6E/7) | Brand-new spectrum, very clean, very fast | Shortest range, newest devices only |

### Wi-Fi security protocols

| Protocol | Year | Notes |
|----------|------|-------|
| WEP | 1997 | Cracked since 2001. **Never use.** |
| WPA | 2003 | Stopgap. **Deprecated.** |
| WPA2 (AES-CCMP) | 2004 | Long-time default. Still widely used. |
| WPA3 | 2018 | Stronger (SAE handshake replaces PSK), default for new devices since ~2020 |

Enterprise modes (WPA2-Enterprise / WPA3-Enterprise) use **802.1X / RADIUS / EAP** for per-user credentials instead of a shared PSK.

---

## 🌐 TCP/IP Fundamentals

### IPv4 essentials

- **Address format:** 32 bits, written as 4 octets `192.168.1.10`
- **Subnet mask:** marks the network vs host portion. `255.255.255.0` = `/24` = first 24 bits are network.
- **Default gateway:** the router IP your host uses to reach off-network destinations.
- **DNS server:** translates names (`google.com`) to IPs (`142.250.190.78`).

### Private IP ranges (RFC 1918)

| Range | Mask | Common use |
|-------|------|-----|
| 10.0.0.0 – 10.255.255.255 | /8 | Large enterprise, AWS VPC, Azure VNet |
| 172.16.0.0 – 172.31.255.255 | /12 | Mid-size, common in cloud and Docker bridge |
| 192.168.0.0 – 192.168.255.255 | /16 | Home routers (192.168.0.1 or 192.168.1.1 default) |

### Special / loopback / APIPA

- **127.0.0.0/8** — loopback (`127.0.0.1`)
- **169.254.0.0/16** — APIPA (Automatic Private IP Addressing) — assigned by Windows when DHCP fails
- **224.0.0.0/4** — multicast
- **255.255.255.255** — limited broadcast

### IPv6 essentials

- 128 bits, written as 8 groups of 4 hex digits separated by colons: `2001:0db8:85a3::8a2e:0370:7334`
- `::` compresses one run of consecutive zero groups (only once per address)
- **Link-local prefix:** `fe80::/10` (analogous to APIPA — every IPv6 interface gets one)
- **Unique local (ULA):** `fc00::/7` (analogous to RFC 1918 private)
- **Global unicast:** `2000::/3` — internet-routable

### Subnetting in 60 seconds (just enough for A+)

A subnet mask of `/24` = 256 addresses (254 usable: 1 network + 1 broadcast reserved).
`/25` = 128 addresses. `/26` = 64. `/27` = 32. `/28` = 16. `/29` = 8. `/30` = 4 (2 usable — point-to-point links).

🎯 **Exam pattern:** *"A user can ping 192.168.1.10 but not 8.8.8.8."* → Local works; off-network fails. Check **default gateway** and **DNS**.

---

## 🔢 Ports & Protocols (Memorize Cold)

| Port | Protocol | Purpose |
|------|----------|---------|
| 20/21 | FTP | File transfer (control/data) |
| 22 | SSH / SFTP / SCP | Encrypted shell + file transfer |
| 23 | Telnet | Unencrypted remote shell — **do not use** |
| 25 | SMTP | Mail server-to-server |
| 53 | DNS | Name resolution (TCP and UDP) |
| 67/68 | DHCP | IP assignment (server/client) |
| 69 | TFTP | Trivial FTP — firmware updates, PXE boot |
| 80 | HTTP | Web (unencrypted) |
| 110 | POP3 | Mail fetch |
| 123 | NTP | Time sync |
| 137-139 | NetBIOS | Legacy Windows |
| 143 | IMAP | Mail sync |
| 161/162 | SNMP | Device monitoring |
| 389 | LDAP | Directory (unencrypted) |
| 443 | HTTPS | Web (encrypted) |
| 445 | SMB | Windows file sharing |
| 465 | SMTPS | Legacy encrypted SMTP |
| 514 | Syslog | Log forwarding |
| 587 | SMTP submission | Modern outbound email |
| 636 | LDAPS | Encrypted LDAP |
| 993 | IMAPS | Encrypted IMAP |
| 995 | POP3S | Encrypted POP3 |
| 3389 | RDP | Remote desktop (Windows) |

🚨 **Trap on the exam:** SMB = 445. NetBIOS = 137-139. Don't confuse.

### TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | 3-way handshake | None |
| Delivery | Guaranteed, ordered | Best-effort |
| Speed | Slower (overhead) | Faster (no ack) |
| Use | Web, mail, SSH, file transfer | DNS (small queries), VoIP, video, gaming |

---

## 📶 The SOHO Router — What's Actually Inside

A typical home/small-office router is *multiple devices in one box*:

1. **Modem** (often separate) — translates between ISP medium (cable, DSL, fiber) and Ethernet
2. **Router** — does NAT and forwards between LAN and WAN
3. **Switch** — 4–8 LAN ports
4. **Wireless AP** — broadcasts SSID(s)
5. **DHCP server** — hands out IPs to clients
6. **Firewall** — basic packet filtering, often SPI (Stateful Packet Inspection)
7. **DNS forwarder** — points clients at ISP's DNS by default

### Common SOHO settings to know

| Setting | Purpose |
|---------|---------|
| **SSID** | Wi-Fi network name |
| **PSK / WPA3 passphrase** | Wi-Fi password |
| **Channel** | 2.4 GHz: pick 1/6/11 (non-overlapping). 5 GHz: many to choose. |
| **Channel width** | 20/40/80/160 MHz — wider = faster but more interference |
| **MAC filtering** | Allow/deny specific device MACs — weak security, easily spoofed |
| **Port forwarding** | Inbound NAT for hosting services |
| **DMZ host** | Forwards *all* inbound to one host — risky |
| **UPnP** | Apps auto-create port-forward rules — convenient but security risk |
| **Guest network** | Isolated SSID with no LAN access |
| **DHCP reservation** | Always assign same IP to a specific MAC |

---

## 🛜 Internet Connection Types

| Type | Typical speed | Use case |
|------|---------------|----------|
| **DSL** | 1–100 Mbps down, slower up | Phone-line broadband; declining |
| **Cable (DOCSIS 3.1)** | 100–1,000+ Mbps down | Most US/EU homes |
| **Fiber to the Home (FTTH/GPON)** | 200 Mbps – 10 Gbps symmetric | Best — symmetric up/down |
| **Cellular (4G/5G fixed wireless)** | 50 Mbps – 1 Gbps | Rural, T-Mobile/Verizon home internet |
| **Satellite (geostationary)** | 10–50 Mbps, ~600ms latency | Remote areas; latency hurts gaming/VoIP |
| **Satellite (LEO — Starlink)** | 50–250 Mbps, 30–50ms latency | Rural broadband replacement |
| **WISP (Wireless ISP)** | 25–300 Mbps | Rural fixed-wireless |
| **Dial-up** | 56 Kbps | Almost extinct — emergency backup only |

---

## 🛠️ Network Tools Every Tech Needs

| Tool | Purpose |
|------|---------|
| **Cable tester** | Checks all 8 pairs on a copper cable |
| **Tone generator + probe** | Trace a cable end-to-end in a wall/punch panel |
| **Crimper** | Attach RJ-45/RJ-11 to a cable |
| **Punch-down tool** | Terminate cable into keystone jack / patch panel |
| **Wi-Fi analyzer** | Shows SSIDs, channels, signal strength — pick best channel |
| **Loopback plug** | Tests a NIC by looping TX → RX |
| **Multimeter** | Continuity / voltage on cables and connectors |
| **Cable certifier** (Fluke) | Pro-grade — measures NEXT, return loss, certifies Cat 6a |
| **Network tap / SPAN port** | Mirror traffic for analysis (Wireshark) |

### Command-line basics

| Command | OS | Purpose |
|---------|-----|---------|
| `ipconfig /all` | Windows | Show all interface IPs, DNS, DHCP |
| `ip a` | Linux | Same as ipconfig |
| `ifconfig` | macOS/Linux legacy | Show interfaces |
| `ping <host>` | All | ICMP echo to test reachability |
| `tracert` / `traceroute` | Win / Linux,macOS | Show hops to a destination |
| `nslookup` / `dig` | Win / Linux | DNS lookup |
| `netstat -ano` | All | Active connections + PIDs |
| `arp -a` | All | Local ARP cache |
| `nbtstat` | Windows | NetBIOS over TCP info |
| `pathping` | Windows | Combines ping + tracert |

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports "I can't reach the internet but I can print to the office printer." Other users in the same office are unaffected.

**Walkthrough:**
1. **Identify the problem** — *one* user, only *internet* (off-LAN), LAN (printer) works.
2. **Establish a theory** — Local IP and LAN routing fine. Off-LAN failing. Possibilities: (a) default gateway misconfigured/wrong; (b) DNS broken (try `ping 8.8.8.8` to bypass DNS); (c) HOSTS file poisoned; (d) firewall blocking outbound for this user.
3. **Test the theory** — `ipconfig /all` shows default gateway = `192.168.1.10` but the office gateway is `192.168.1.1`. Static IP was set by a previous tech and never cleaned up.
4. **Plan of action** — Switch to DHCP (or correct the static config).
5. **Verify** — `ping 8.8.8.8` succeeds; `ping google.com` succeeds; user can browse.
6. **Document** — note in KB: "User's NIC had static IP from prior tech. Switched to DHCP."

This is layer-by-layer thinking: physical (cable plugged in?) → link (DHCP got an IP?) → network (right gateway? DNS works?) → transport/app (does the destination answer?).

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Cat 6 always runs 10 Gbps over 100m" | No — Cat 6 is 1 Gbps over 100m, or 10 Gbps over only 55m. Cat 6a runs 10 Gbps over the full 100m. |
| "Hub = switch" | Hub repeats to all ports (collision domain). Switch learns MACs and forwards selectively. |
| "An IP and a MAC are the same" | MAC = layer 2, hardware burned-in. IP = layer 3, logical, assigned. |
| "DHCP always uses TCP" | DHCP uses UDP 67/68. |
| "5 GHz is always faster than 2.4 GHz" | Faster *throughput*, shorter *range*. Through walls, 2.4 GHz may have better signal. |
| "WPA2 and WPA3 are the same" | WPA3 uses SAE (replaces PSK 4-way handshake), more resistant to offline brute force. |
| "Crossover cables are still needed" | Almost never — Auto-MDI/MDIX since ~2003. Still exam-tested. |
| "DMZ is safe" | A DMZ *host* in a SOHO router forwards all unsolicited traffic to one host. Very risky. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **DHCP** | Dynamic Host Configuration Protocol — assigns IPs (UDP 67/68) |
| **DNS** | Domain Name System — name → IP (TCP/UDP 53) |
| **NAT** | Network Address Translation — many private IPs ↔ one public |
| **APIPA** | 169.254.0.0/16 self-assigned when DHCP fails |
| **PoE / PoE+ / PoE++** | Power over Ethernet (15.4 / 30 / 60–100W) |
| **SSID** | Wi-Fi network name |
| **WPA3-SAE** | Modern Wi-Fi auth, replaces 4-way PSK handshake |
| **802.1X / EAP / RADIUS** | Enterprise Wi-Fi auth (per-user creds) |
| **Cat 5e / 6 / 6a** | Twisted-pair Ethernet categories |
| **SMF / MMF** | Single-mode / Multi-mode fiber |
| **TCP vs UDP** | Connection-based + reliable vs connectionless |
| **OSI model** | 7-layer reference: Phys, Link, Net, Trans, Sess, Pres, App |
| **TCP/IP model** | 4-layer practical: Link, Internet, Transport, Application |

### Acronyms cheat-row (Module 2)
| Acronym | Meaning |
|---------|---------|
| DHCP | Dynamic Host Configuration Protocol |
| DNS | Domain Name System |
| NAT / PAT | Network/Port Address Translation |
| APIPA | Automatic Private IP Addressing |
| ICMP | Internet Control Message Protocol (ping) |
| ARP | Address Resolution Protocol (IP→MAC) |
| OSI / TCP-IP | Layered network reference models |
| WLAN / SSID | Wireless LAN / network name |
| WPA / WPA2 / WPA3 | Wi-Fi Protected Access generations |
| EAP / RADIUS | Authentication framework / server for 802.1X |
| SPI | Stateful Packet Inspection firewall |
| DMZ | Demilitarized Zone (perimeter network) |

---

## 📊 Case Study — The 2016 Dyn DDoS (Mirai Botnet)

**Situation.** On 21 October 2016, Dyn (a major Managed DNS provider) suffered three massive distributed-denial-of-service (DDoS) waves between 11:10 UTC and 21:11 UTC. At peak, attack traffic exceeded **1.2 Tbps** — at the time, the largest DDoS ever recorded.

**The network detail.** The attack was launched by the **Mirai botnet** — roughly 100,000 compromised IoT devices: IP cameras, DVRs, home routers, baby monitors. The exploit chain was almost embarrassingly simple: Mirai scanned the public internet for Telnet (port 23) open with default credentials (`admin/admin`, `root/root`, factory defaults from a handful of manufacturers). Devices became bots in seconds. Once enlisted, each bot sent UDP and TCP floods at Dyn's authoritative DNS servers — and Dyn's customers (Twitter, GitHub, Reddit, Spotify, Netflix, Airbnb, Box, PayPal, Pinterest, Sony PlayStation Network) were unreachable for hours on the US East Coast.

**Decision and outcome.** Dyn mitigated by aggressive Anycast re-routing, BGP scrubbing partnerships, and customer-side fail-over to secondary DNS providers (Google Public DNS, Cloudflare). The incident drove the cybersecurity industry to (a) demand vendors stop shipping devices with default Telnet credentials, (b) deprecate Telnet (port 23) entirely from any production exposure, and (c) advocate for **multi-provider DNS strategies** — having your domain delegated to two competing DNS providers so one outage doesn't kill you.

**Lesson for the exam / for practitioners.**
- **Telnet (port 23) should be disabled or filtered at every perimeter.** SSH (port 22) replaces it.
- **Default credentials are an industry-wide failure.** A+ techs are *the* people who change them on day one.
- **DNS is critical infrastructure.** Single-provider DNS is a single point of failure for global services.

**Discussion (Socratic).**
- **Q1:** You're the IT lead for a 200-store retail chain. After reading about Mirai, you have a $15K budget. List your top 5 actions, prioritized by reduction in attack surface.
- **Q2:** A vendor wants to install IP cameras at all 200 stores. What 3 *network* controls (not security ones, *network* ones) would you require before allowing the install?
- **Q3:** Should ISPs filter outbound traffic from customer-owned IoT devices that look like botnet C2 traffic, even though it might falsely flag a few legitimate users? Argue both sides.

---

## ✅ Module 2 Summary

You now know:

- 📋 Cable categories (5e/6/6a) and pinouts (T568A/B, straight, crossover, rollover)
- 📡 Wi-Fi standards 1–7 and the 2.4 vs 5 vs 6 GHz trade-offs
- 🌐 IPv4 / IPv6 basics — private ranges, APIPA, subnet mask, default gateway, DNS
- 🔢 The top 25 ports and protocols (port 22 = SSH, 53 = DNS, 80/443 = HTTP/S, 445 = SMB, 3389 = RDP)
- 📶 What's inside a SOHO router (modem + router + switch + AP + DHCP + firewall)
- 🛠️ The command-line toolkit: `ipconfig`, `ping`, `tracert`, `nslookup`, `netstat`, `arp`

**Next steps:**
1. 🎥 Watch: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md)
3. 📋 Print the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 3 — Hardware](../Module-03-Hardware/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 3](../Module-03-Hardware/Reading.md) covers NICs and motherboard headers; [Module 5](../Module-05-Troubleshooting/Reading.md) is the dedicated network-troubleshooting deep-dive. [Module 8](../Module-08-Security/Reading.md) revisits Wi-Fi security in depth.
> - Cross-course: CompTIA Network+ (course 22) is the natural next certification — most of A+ networking is review there.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 RFC 791 — Internet Protocol (Postel, 1981)
- 📄 RFC 793 / 9293 — Transmission Control Protocol
- 📄 RFC 1918 — Address Allocation for Private Internets (1996)
- 📄 IEEE 802.11 series — Wi-Fi specifications
- 📄 TIA-568-C — twisted-pair cabling standard
- 📄 RFC 2131 — Dynamic Host Configuration Protocol (Droms, 1997)

**Case-study sources:**
- 📄 Krebs on Security (October 2016). *KrebsOnSecurity Hit With Record DDoS*.
- 📄 Antonakakis et al. (USENIX Security 2017). *Understanding the Mirai Botnet*.
- 📄 Dyn (Oyster Bay, NY) (October 2016). *Dyn Analysis Summary of Friday October 21 Attack*.

**Practitioner / exam:**
- 📖 [Professor Messer 220-1101 networking module](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video-training-course/)
- 📖 *Computer Networking: A Top-Down Approach* (Kurose & Ross) — gold-standard textbook
