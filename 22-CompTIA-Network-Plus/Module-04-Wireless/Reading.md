# Module 4: Wireless & SOHO Networks 📡

> **Why this module matters:** Wireless is where the user *actually* connects in 2026. ~12% of the Network+ exam directly targets wireless standards, security, and deployment — and every help-desk ticket starts with "Wi-Fi is slow." Knowing 802.11 standards, channels, and WPA3 cold is the difference between solving the problem and rebooting the router for the 17th time.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–3 (OSI especially L1/L2, IP addressing, VLANs)
> - The concept of frequencies (Hz/MHz/GHz) at a basic level
>
> If you've never thought about radio waves, picture them as invisible water — they propagate, reflect off walls, attenuate over distance, and interfere when two transmitters overlap. That's enough physics for this module.

---

## ☕ A Story: Why Your Wi-Fi Drops in the Coffee Shop

You're at a downtown coffee shop on a Saturday. Twenty people are on Wi-Fi. Your phone shows 4 bars but pages take forever to load. The barista says "sorry, the router is overloaded." But the router has gigabit fiber. What's actually broken?

The answer is **the radio spectrum, not the router**. All twenty laptops are sharing the same 2.4 GHz spectrum, taking turns transmitting. With 20 contenders, half-second pauses to grab the channel become noticeable. The Wi-Fi 4 router can also only modulate so many bits-per-second into the channel. Worse, two neighboring coffee shops are also on channel 6 — their traffic collides with yours. Adding more clients doesn't increase total throughput; it **shrinks each user's slice of a fixed pie**.

That's the core of wireless networking. Wired Ethernet is full-duplex, switched, contention-free. Wireless is **half-duplex, shared medium, collision-prone**. Every design decision — frequency, channel width, AP placement, standard — boils down to managing this contention. This module gives you the vocabulary.

---

## 📡 The 802.11 Family — Standards & Frequencies

Wi-Fi is standardized by the IEEE in the **802.11** working group. Each new standard adds speed, range, or spectrum. **Memorize the table.**

| Standard | Marketing name | Year | Band(s) | Max theoretical speed | Channel widths | Key feature |
|----------|----------------|------|---------|------------------------|----------------|-------------|
| **802.11** | Wi-Fi 0 | 1997 | 2.4 GHz | 2 Mbps | 22 MHz | The original |
| **802.11a** | Wi-Fi 1 | 1999 | 5 GHz | 54 Mbps | 20 MHz | First 5 GHz |
| **802.11b** | Wi-Fi 2 | 1999 | 2.4 GHz | 11 Mbps | 22 MHz | The popular one |
| **802.11g** | Wi-Fi 3 | 2003 | 2.4 GHz | 54 Mbps | 20 MHz | Backward-compat with b |
| **802.11n** | Wi-Fi 4 | 2009 | 2.4 + 5 GHz | 600 Mbps | 20 / 40 MHz | **MIMO** (multi-antenna) |
| **802.11ac** | **Wi-Fi 5** | 2013 | **5 GHz only** | ~6.9 Gbps | 20 / 40 / 80 / 160 MHz | **MU-MIMO downlink**, beamforming |
| **802.11ax** | **Wi-Fi 6 / 6E** | 2019 / 2021 | 2.4 + 5 + 6 GHz (6E adds 6) | ~9.6 Gbps | 20 / 40 / 80 / 160 MHz | **OFDMA**, MU-MIMO up+down, dense-cell efficiency |
| **802.11be** | **Wi-Fi 7** | 2024 | 2.4 + 5 + 6 GHz | ~46 Gbps | up to **320 MHz**, MLO | Multi-Link Operation, 4K-QAM |

🧠 **Memorize 5 critical facts:**
- 802.11ac = **5 GHz only**
- 802.11ax = Wi-Fi 6 (5 GHz) / Wi-Fi 6E (adds 6 GHz band)
- 802.11be = Wi-Fi 7, supports **320 MHz** channels and **MLO**
- 2.4 GHz = better range, more interference, slower
- 5 GHz = shorter range, more channels, faster

🎯 **Exam pattern:** *"Which 802.11 standard operates exclusively on the 5 GHz band?"* → 802.11a OR 802.11ac (both are 5 GHz only). *"Which Wi-Fi generation introduced OFDMA?"* → Wi-Fi 6 (802.11ax). *"Which adds the 6 GHz band?"* → Wi-Fi 6E (802.11ax variant) and Wi-Fi 7 (802.11be).

---

## 🔢 Frequencies, Channels & Channel Width

Wi-Fi divides each band into **channels**. The width of a channel determines bandwidth (wider = more bits/sec but fewer non-overlapping channels available).

### 2.4 GHz band

- **Channels 1–14** worldwide (varies by region; US allows 1–11)
- Each channel is **20 MHz wide** but spaced only 5 MHz apart → **overlapping**
- **Only 3 non-overlapping channels in the US: 1, 6, 11**
- Crowded — also used by Bluetooth, microwaves, cordless phones, baby monitors

### 5 GHz band

- Many more channels (36, 40, 44, 48, …, 165) — 23+ non-overlapping at 20 MHz
- Channel widths: 20, 40, 80, 160 MHz (wider = faster but fewer channels available)
- **DFS channels** (Dynamic Frequency Selection) — 52–144 must yield to radar (weather, military); APs that detect radar must switch automatically
- Less crowded, shorter range due to physics (higher frequency = more absorption)

### 6 GHz band (Wi-Fi 6E / Wi-Fi 7)

- Unlicensed in 2020 by FCC; ~1,200 MHz of fresh spectrum
- 59 new 20-MHz channels (in the US)
- Pristine — no legacy devices, so no contention
- 6 GHz devices must be Wi-Fi 6E (802.11ax) or Wi-Fi 7 (802.11be) capable

🚨 **Trap on the exam:** *"What are the three non-overlapping channels in 2.4 GHz US?"* → **1, 6, 11**. Memorize this exactly.

### Channel width trade-off

| Width | Theoretical bandwidth | Trade-off |
|-------|------------------------|-----------|
| 20 MHz | Lower | More channels available → less interference |
| 40 MHz | ~2x | Fewer channels, more interference risk |
| 80 MHz | ~4x | Best in clean 5 GHz environments |
| 160 MHz | ~8x | Hard to find clean spectrum |
| 320 MHz | Maximum (Wi-Fi 7) | Only practical in pristine 6 GHz |

---

## 📶 Wireless Topology Modes

| Mode | Description | Use case |
|------|-------------|----------|
| **Ad-hoc (IBSS)** | Devices connect peer-to-peer, no AP | Rare; legacy |
| **Infrastructure (BSS)** | Clients connect to a single AP | Home / small office |
| **Extended Service Set (ESS)** | Multiple APs sharing one SSID + roaming | Enterprise / multi-room coverage |
| **Mesh** | APs talk to each other wirelessly + serve clients; one acts as gateway | Whole-home / large coverage with few cables |

### Key wireless terms

- **SSID** (Service Set Identifier) — the human-readable network name (max 32 chars)
- **BSSID** — the MAC address of the AP (unique per AP)
- **ESSID** — the SSID used by an Extended Service Set (multiple APs)

---

## 🛡️ Wireless Security Standards

| Standard | Year | Encryption | Status |
|----------|------|------------|--------|
| **WEP** | 1997 | RC4 (broken) | **Deprecated** — broken in 2001 (Fluhrer–Mantin–Shamir attack) |
| **WPA** | 2003 | TKIP | Deprecated |
| **WPA2** | 2004 | AES-CCMP (preferred) or TKIP | Widely deployed; **KRACK** vulnerability disclosed 2017 |
| **WPA3** | 2018 | AES-GCMP-256 | **Current standard** |

🚨 **Trap on the exam:** WEP is *always* the wrong answer when "most secure" is asked. WPA3 is the current correct answer; WPA2 is acceptable for legacy.

### WPA3 features (memorize)

- **SAE** (Simultaneous Authentication of Equals) replaces WPA2's 4-way PSK handshake — defeats offline dictionary attacks
- **Forward secrecy** — even if password is later cracked, captured sessions stay safe
- **Enhanced Open** for guest networks — opportunistic encryption without a password
- **192-bit "Enterprise" mode** for high-security environments

### Authentication modes

| Mode | Use case | How it works |
|------|----------|--------------|
| **WPA2/3-Personal (PSK)** | Home / SOHO | One shared passphrase for all users |
| **WPA2/3-Enterprise** | Corporate | 802.1X + RADIUS + EAP (per-user creds) |
| **Open** | Public hotspot | No encryption (or Enhanced Open with WPA3) |

### Enterprise EAP variants

- **EAP-TLS** — certificates on both client and server (most secure; deployment-heavy)
- **PEAP** (Protected EAP) — server cert + user credentials inside TLS tunnel
- **EAP-TTLS** — similar to PEAP, more flexible inner methods
- **EAP-FAST** — Cisco's lightweight alternative

🎯 **Exam pattern:** *"Which authentication method requires certificates on BOTH client AND server?"* → EAP-TLS.

---

## 🚪 Captive Portal — The Coffee-Shop Login Page

A **captive portal** intercepts HTTP requests on a guest network and redirects the user to a web page (sign-in, agree-to-terms, payment). Common on hotel, airport, coffee-shop Wi-Fi.

**How it works:**
1. Client associates with the open SSID and gets DHCP
2. Client tries to load any HTTP page
3. The gateway responds with an HTTP 302 redirect to the portal URL
4. After the user accepts/logs in, the gateway adds the client's MAC to an "allowed" list
5. Subsequent traffic flows freely

🚨 **Trap:** Captive portals over **HTTP only** intercept — they cannot intercept HTTPS sessions cleanly (browsers complain about certificate errors). Modern OSes use a "captive portal detection" URL probe (e.g., Apple's `captive.apple.com`) to detect and pop up the login UI.

---

## ⚡ PoE — Powering APs Over Ethernet

**Power over Ethernet** lets a single Ethernet cable deliver both data AND DC power to an AP, IP phone, IP camera, etc. Eliminates the need for a separate power outlet at the ceiling.

| Standard | Max power per port | Year |
|----------|----------------------|------|
| **802.3af (PoE)** | 15.4 W (12.95 W usable at device) | 2003 |
| **802.3at (PoE+)** | 30 W (25.5 W usable) | 2009 |
| **802.3bt Type 3 (PoE++)** | 60 W (51 W usable) | 2018 |
| **802.3bt Type 4 (PoE++)** | 100 W (71 W usable) | 2018 |

🎯 **Exam pattern:** *"A new AP requires 30 W. Which PoE standard supports it?"* → 802.3at (PoE+) — at exactly the edge; PoE++ for headroom.

---

## 🗺️ AP Placement, Site Survey & Mounting

A **site survey** is the engineering exercise of measuring RF coverage, interference, and capacity to decide where APs go.

### Types of site surveys

| Type | When | Tools |
|------|------|-------|
| **Predictive** | Before install | Software (Ekahau, iBwave) using floor plans |
| **Pre-deployment** ("AP-on-a-stick") | During install | Walk around with one temporary AP, measure signal |
| **Post-deployment / passive** | After install | Listen on all channels, measure existing RF |
| **Active** | Ongoing | Inject traffic and measure throughput |

### AP placement best practices

- **Ceiling mount** for top-down 360° coverage (most APs)
- **Wall mount** with directional antennas for narrow hallway / outdoor coverage
- Avoid microwaves, fluorescent lights, elevator shafts (heavy RF absorbers)
- **Channel reuse**: adjacent APs use non-overlapping channels (1/6/11 in 2.4 GHz; rotate clean channels in 5 GHz)
- **Cell size**: lower AP transmit power = smaller cell = denser AP grid = more capacity per user

### Antenna types

| Type | Pattern | Use case |
|------|---------|----------|
| **Omnidirectional** | 360° doughnut | General coverage |
| **Yagi** | Narrow beam | Long-distance directional |
| **Patch / Panel** | Wide beam, one side | Wall-mounted, hallway |
| **Parabolic / Dish** | Pencil beam | Point-to-point bridging |

### Signal strength (RSSI / dBm)

| dBm | Quality | Use case |
|-----|---------|----------|
| -30 dBm | Excellent | Right next to AP |
| -50 dBm | Very good | Same room |
| -67 dBm | **Reliable for VoIP/video** | Common target threshold |
| -70 dBm | Reliable for browsing | Working baseline |
| -80 dBm | Marginal | Slow speeds, drops |
| -90 dBm | Unusable | Disconnect imminent |

🧠 **Less-negative is better.** -50 is stronger than -80.

### SNR — Signal-to-Noise Ratio

- Signal − Noise = SNR in dB
- Example: signal -65 dBm, noise -90 dBm → SNR = 25 dB
- **≥20 dB SNR for reliable Wi-Fi**; ≥25 dB for HD video/VoIP

---

## 🏠 SOHO Network Design

The Small Office / Home Office router is a one-box combo. Key features tested:

| Feature | What it does |
|---------|--------------|
| **Router** | Forwards between LAN and ISP/WAN |
| **L2 switch** | Wired LAN ports (usually 4) |
| **Wireless AP** | Wi-Fi service |
| **DHCP server** | Hands out IPs on LAN |
| **DNS forwarder/cache** | Speeds up DNS for LAN clients |
| **NAT/PAT** | Many internal hosts → one ISP IP |
| **Firewall (basic)** | Stateful inbound block, optional rule engine |
| **Port forwarding** | Allow inbound to specific internal host |
| **DMZ** (1-host) | Forward all unsolicited inbound to one internal host (risky; rarely used) |
| **Guest network** | Separate SSID/VLAN for visitors |
| **QoS** | Prioritize VoIP/video over bulk traffic |
| **UPnP** | Auto port forwarding (security risk — disable if not needed) |
| **WPS** | One-button pairing (PIN method vulnerable — disable) |

🚨 **Trap:** UPnP and WPS are convenience features that automatically poke holes in security. Network+ likes to test "what to disable for security on a SOHO router" → UPnP and WPS.

---

## 🔬 Scenario Walkthrough — Wi-Fi Roaming Failure

> **Scenario:** A user with a VoIP softphone reports that calls drop when they walk from the lobby to the conference room. There's good signal in both areas (-55 dBm each), and there are two APs configured with the same SSID. What's happening?

**Walkthrough:**
1. Both APs on same SSID + same WPA2 settings → an **ESS** (Extended Service Set) — clients should roam transparently.
2. Roaming is triggered by the *client*, not the AP. The client picks when to associate with a different BSSID based on signal degradation thresholds.
3. Possible issues:
   - **Sticky client**: client doesn't release the old AP even when signal weakens; keeps using a marginal connection. Fix: enable **802.11k/v/r** (assisted roaming, BSS transition, fast transition) on the controller.
   - **AP placement gap**: dead zone in the hallway between lobby and conference room — signal dips below -75 dBm during the walk, killing the call. Fix: add an AP or boost coverage.
   - **Channel overlap**: both APs on channel 6, interfering. Fix: assign one to channel 1, other to channel 11.
   - **Different VLANs / SSIDs**: subtle config drift across APs. Fix: standardize.
4. Verify with a site-survey tool (NetSpot, Ekahau, WiFi Analyzer on Android) — walk the path and watch signal/BSSID transitions live.

This is a high-value PBQ template — wireless troubleshooting questions on Network+ frequently involve roaming.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "5 GHz is always better than 2.4 GHz" | 5 GHz has more bandwidth + cleaner channels, but **shorter range** because higher frequencies attenuate faster through walls. Both have their place. |
| "Wi-Fi 6 is the same as Wi-Fi 6E" | Wi-Fi 6 = 2.4 + 5 GHz. Wi-Fi 6E = also includes 6 GHz. Hardware must explicitly support 6 GHz. |
| "WEP is acceptable for guest networks" | NEVER — WEP is broken since 2001. Use WPA3 or Enhanced Open. |
| "Channel 12 and 13 are usable in the US" | 12, 13 are forbidden in the US for 2.4 GHz (allowed in most of the rest of the world). 14 is Japan-only. |
| "DFS channels are slow" | DFS channels are fine — they just must yield to radar detection. Brief outages possible if radar detected. |
| "More antennas = more speed" | Up to a point — MIMO benefits depend on client support. A single-stream phone doesn't see the speed advantage. |
| "WPS is fine if I use the push-button method" | The PIN method is broken (Reaver attack). Disable WPS entirely — push-button doesn't make up for the risk. |
| "UPnP makes my network better" | UPnP allows apps to open inbound ports automatically — convenient but a known attack surface. Disable unless required. |
| "Captive portals secure the connection" | A captive portal is sign-in only — not encryption. Open SSIDs with captive portals have ZERO over-the-air encryption (unless WPA3 Enhanced Open). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **802.11 family** | Wi-Fi standards: a/b/g/n/ac/ax/be |
| **Wi-Fi 5 / 6 / 6E / 7** | Marketing names: 802.11ac / ax / ax-with-6GHz / be |
| **SSID** | Network name (human readable) |
| **BSSID** | MAC of the AP |
| **BSS / ESS / IBSS** | One AP / multiple-AP roaming / ad-hoc |
| **DFS** | Dynamic Frequency Selection (5 GHz radar-yield) |
| **WPA3 SAE** | Replaces PSK handshake; defeats offline dictionary attacks |
| **EAP-TLS** | Cert-based EAP (both ends) |
| **PEAP / EAP-TTLS** | Server cert + tunnel-protected user creds |
| **PoE / PoE+ / PoE++** | Power over Ethernet (af / at / bt) |
| **RSSI** | Received Signal Strength Indicator (dBm, less negative = stronger) |
| **SNR** | Signal-to-Noise Ratio (dB) |
| **Captive portal** | Sign-in page intercept on guest Wi-Fi |
| **Mesh** | APs talk to each other wirelessly for coverage |
| **MIMO / MU-MIMO** | Multiple antennas; multi-user-MIMO serves several clients simultaneously |
| **OFDMA** | Wi-Fi 6 multi-user subcarrier scheduling |
| **MLO** | Multi-Link Operation (Wi-Fi 7) — use multiple bands simultaneously |

### Acronyms cheat-row (Module 4)
| Acronym | Meaning |
|---------|---------|
| AP / WAP | (Wireless) Access Point |
| WLC | Wireless LAN Controller |
| SSID / BSSID / ESSID | Service Set IDs |
| WPA / WPA2 / WPA3 | Wi-Fi Protected Access |
| WEP | Wired Equivalent Privacy (broken) |
| PSK | Pre-Shared Key |
| SAE | Simultaneous Authentication of Equals |
| EAP / PEAP | Extensible Authentication Protocol |
| RADIUS | Remote Authentication Dial-In User Service |
| MIMO / MU-MIMO | Multiple Input Multiple Output |
| OFDMA | Orthogonal Frequency-Division Multiple Access |
| MLO | Multi-Link Operation (Wi-Fi 7) |
| DFS | Dynamic Frequency Selection |
| RSSI / SNR | Signal strength / Signal-to-Noise |
| PoE | Power over Ethernet |
| WPS | Wi-Fi Protected Setup |
| UPnP | Universal Plug and Play |

---

## 📊 Case Study — The 2017 KRACK Attack and the WPA3 Response

**Situation.** On **16 October 2017**, **Mathy Vanhoef** of KU Leuven published the **KRACK** (Key Reinstallation Attack) family of vulnerabilities affecting **every** Wi-Fi device on Earth using **WPA/WPA2**. The flaw was in the *protocol itself* — specifically in the **4-way handshake** that establishes session keys after a client associates. By forcing reinstallation of an already-used encryption key, an attacker within Wi-Fi range could decrypt traffic, inject malicious data, and (with TKIP) forge frames.

**Decision.** The disclosure was coordinated with major vendors months in advance. Microsoft patched Windows on the same day. Apple, Google, Cisco, Aruba followed within weeks. But the deeper problem was that **patching every device on Earth — phones, IoT cameras, smart refrigerators, point-of-sale terminals — was operationally impossible**. Hundreds of millions of devices would never be patched, creating a long tail of vulnerable Wi-Fi clients.

**Outcome.** The Wi-Fi Alliance accelerated work on **WPA3**, announced in January 2018 and finalized June 2018. WPA3 replaced the PSK 4-way handshake with **SAE** (Simultaneous Authentication of Equals, based on the Dragonfly key-exchange), providing **forward secrecy** — even if a password is later cracked, captured traffic cannot be retroactively decrypted. WPA3 also added Enhanced Open for guest networks and 192-bit Enterprise.

Adoption was slow:
- Wi-Fi 6 (2019) and Wi-Fi 6E (2021) shipped with WPA3 support
- Most enterprise APs supported WPA3 by 2020 but defaulted to mixed WPA2/WPA3 mode for client compatibility
- The IoT long tail remained — many devices stayed on WPA2 forever
- Dragonblood vulnerabilities (Vanhoef and Ronen, April 2019) showed early SAE implementations had side-channel weaknesses; SAE was hardened in late 2019

By 2026 most enterprise Wi-Fi deployments are WPA3-Enterprise (with EAP-TLS or PEAP); home networks default to WPA3-Personal with WPA2 fallback for old devices.

**Lesson for the exam / for practitioners.** This case touches every wireless concept in this module:
- **Why WPA3** is now the correct answer when "most secure Wi-Fi standard" is asked
- **Why WPA2 is acceptable but not preferred** — operational reality, especially for legacy IoT
- **Why open + Enhanced Open** matters for guest networks — opportunistic encryption without passwords
- **Why patching matters** at every layer — even a protocol-level fix doesn't help unpatched devices
- **Why 802.1X / EAP-TLS** is preferred in enterprise — per-user certs avoid the shared-PSK risk entirely

This case is exactly what Network+ tests when asking, "Which is the most secure Wi-Fi standard?" or "What replaces the WPA2 4-way handshake?" The answer is WPA3 / SAE — and the deeper lesson is *why*.

**Discussion (Socratic).**
- **Q1:** An enterprise has 15,000 IoT sensors that only support WPA2-PSK. Migration is a multi-year project. What three compensating controls would you put in place in the meantime to limit blast radius if KRACK or a successor is exploited?
- **Q2:** WPA3 Personal still uses *a passphrase*. If passwords are the weak link, why is the SAE-based WPA3-Personal materially stronger than WPA2-Personal? Explain in one paragraph in language a non-engineer (e.g., your CFO) could understand.
- **Q3:** A vendor proposes "open Wi-Fi with a captive portal" for a hospital cafeteria. From a regulatory and patient-data standpoint, list three reasons this is risky and propose a better architecture that achieves the same user-experience goal.

---

## ✅ Module 4 Summary

You now know:
- 📡 The 802.11 standards a→be, marketing names Wi-Fi 5/6/6E/7, and what bands each operates on
- 🔢 Channels — 1/6/11 in 2.4 GHz US; 5 GHz channel widths and DFS; 6 GHz pristine spectrum
- 📶 Topology modes — IBSS, BSS, ESS, mesh; SSID/BSSID/ESSID terminology
- 🛡️ Security — WEP broken, WPA2 acceptable, WPA3 + SAE current; WPA2/3-Personal vs Enterprise; EAP variants
- 🚪 Captive portals — sign-in, not encryption
- ⚡ PoE standards (af/at/bt — 15/30/60/100 W)
- 🗺️ Site survey types, AP placement, RSSI/SNR thresholds, antenna types
- 🏠 SOHO features and what to disable for security (UPnP, WPS)

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 5 — Network Services & Cloud Connectivity](../Module-05-Services-Cloud/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Security/Reading.md) revisits 802.1X and WPA3-Enterprise; [Module 7](../Module-07-Monitoring-Tools/Reading.md) covers wireless monitoring via WLC dashboards and SNMP; [Module 8](../Module-08-Troubleshooting/Reading.md) revisits roaming + signal-strength troubleshooting.
> - Cross-course: CompTIA Security+ (course 09) Module 5 covers Wi-Fi attacks (evil twin, deauth, KRACK) in depth.
> - Practice: Practice Exam 1 has ~5 wireless questions; the Final Mock has ~10.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 IEEE Std 802.11-2020 (current revision). [*Wireless LAN MAC and PHY Specifications*](https://standards.ieee.org/standard/802_11-2020.html).
- 📄 Vanhoef, M. & Piessens, F. (2017). "Key Reinstallation Attacks: Forcing Nonce Reuse in WPA2." *ACM CCS 2017*. (The KRACK paper.)
- 📄 Wi-Fi Alliance (2018). "WPA3 Specification" — at https://www.wi-fi.org/discover-wi-fi/security
- 📄 Fluhrer, S., Mantin, I., Shamir, A. (2001). "Weaknesses in the Key Scheduling Algorithm of RC4." *Selected Areas in Cryptography 2001*. (The WEP-killer paper.)

**Practitioner / exam:**
- 📖 [Professor Messer Wireless playlist](https://www.professormesser.com/network-plus/n10-009/n10-009-video-training-course/)
- 📖 [Ekahau site survey blog](https://www.ekahau.com/blog/) — free articles on RF design
- 📖 [Mike Albano's WLAN Pi project](https://wlanpi.com/) — hands-on Wi-Fi survey hardware
