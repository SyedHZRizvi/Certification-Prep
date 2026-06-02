# 📋 Module 4 Cheat Sheet: Wireless & SOHO Networks

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📡 802.11 Standards — MEMORIZE

| Standard | Wi-Fi name | Year | Band(s) | Max speed |
|----------|------------|------|---------|-----------|
| 802.11a | Wi-Fi 1 | 1999 | **5 GHz** | 54 Mbps |
| 802.11b | Wi-Fi 2 | 1999 | 2.4 GHz | 11 Mbps |
| 802.11g | Wi-Fi 3 | 2003 | 2.4 GHz | 54 Mbps |
| 802.11n | Wi-Fi 4 | 2009 | 2.4 + 5 GHz | 600 Mbps |
| 802.11ac | **Wi-Fi 5** | 2013 | **5 GHz only** | ~6.9 Gbps |
| 802.11ax | **Wi-Fi 6 / 6E** | 2019 / 2021 | 2.4 + 5 (+ 6 for 6E) | ~9.6 Gbps |
| 802.11be | **Wi-Fi 7** | 2024 | 2.4 + 5 + 6 GHz | ~46 Gbps |

🚨 **ac = 5 GHz only · ax with 6E = adds 6 GHz · be = Wi-Fi 7 + MLO + 320 MHz**

---

## 🔢 Channels

| Band | Non-overlapping (US) | Channel widths |
|------|----------------------|-----------------|
| 2.4 GHz | **1, 6, 11** | 20 MHz only (practical) |
| 5 GHz | 23+ non-overlapping at 20 MHz | 20 / 40 / 80 / 160 MHz; DFS yields to radar |
| 6 GHz | 59 at 20 MHz | up to 320 MHz (Wi-Fi 7) |

---

## 🛡️ Security Standards

| Standard | Status | Note |
|----------|--------|------|
| WEP | **BROKEN** (since 2001) | Never the right answer |
| WPA (TKIP) | Deprecated | |
| **WPA2** | Acceptable | KRACK 2017; AES-CCMP preferred |
| **WPA3** | **Current** | SAE handshake, forward secrecy, Enhanced Open |

### WPA3 highlights
- **SAE** replaces PSK 4-way handshake
- **Enhanced Open** for guest networks (opportunistic encryption, no password)
- 192-bit Enterprise mode

### Personal vs Enterprise
- **Personal (PSK)** → home/SOHO
- **Enterprise** → 802.1X + RADIUS + EAP (per-user creds)
  - **EAP-TLS** = both-side certs (most secure)
  - **PEAP / EAP-TTLS** = server cert + tunneled user creds

---

## ⚡ PoE — Power Over Ethernet

| Standard | Max W/port | Use |
|----------|-----------|-----|
| 802.3af (PoE) | 15.4 W | Low-power APs, IP phones |
| 802.3at (PoE+) | 30 W | Modern APs, PTZ cameras |
| 802.3bt Type 3 | 60 W | High-power APs, video monitors |
| 802.3bt Type 4 | 100 W | LED lighting, kiosk |

---

## 📶 Topology Modes

| Mode | Description |
|------|-------------|
| IBSS / Ad-hoc | Peer-to-peer, no AP |
| BSS | One AP |
| **ESS** | Multiple APs sharing SSID (roaming) |
| Mesh | APs talk to each other wirelessly |

| Term | Meaning |
|------|---------|
| **SSID** | Network name (human-readable) |
| **BSSID** | AP's MAC |
| **ESSID** | SSID across an ESS |

---

## 🗺️ Site Survey Types

| Type | When | Purpose |
|------|------|---------|
| Predictive | Pre-install | Software + floor plan |
| Pre-deployment (AP-on-a-stick) | During install | Walk with one AP |
| Passive | Post-install | Listen to existing RF |
| Active | Ongoing | Inject traffic, measure throughput |

---

## 📊 RSSI Quick Reference

| dBm | Quality |
|-----|---------|
| -30 | Excellent (next to AP) |
| -50 | Very good |
| **-67** | **Reliable for VoIP/video** |
| -70 | Browsing OK |
| -80 | Marginal |
| -90 | Unusable |

**SNR ≥ 20 dB** for reliable Wi-Fi; ≥ 25 dB for HD video.

🧠 Less-negative = stronger.

---

## 🏠 SOHO Router Features

| Feature | What it does |
|---------|--------------|
| NAT/PAT | Many internal → one ISP IP |
| Port forwarding | Inbound to specific internal host |
| Stateful firewall | Block unsolicited inbound |
| Guest network | Separate SSID/VLAN |
| **UPnP** | **Disable** unless needed (auto inbound ports) |
| **WPS** | **Disable** (PIN brute-forceable, Reaver attack) |
| QoS | Prioritize VoIP/video |

---

## 🏆 Exam Power Phrases

Often **right**:

- ✅ "WPA3 + SAE"
- ✅ "EAP-TLS for enterprise"
- ✅ "Channels 1, 6, 11 in 2.4 GHz"
- ✅ "Disable WPS and UPnP"
- ✅ "Site survey before AP deployment"

Often **wrong**:

- ❌ "WEP is sufficient"
- ❌ "Channels 1, 4, 7, 11 are non-overlapping"
- ❌ "More AP power = better Wi-Fi"
- ❌ "Captive portal = encryption"
- ❌ "5 GHz is always better than 2.4 GHz"

---

## 🗓️ Key Facts To Memorize Cold

- ac = 5 GHz only; ax = Wi-Fi 6/6E; be = Wi-Fi 7
- 2.4 GHz non-overlap: **1, 6, 11**
- WPA3 = SAE + forward secrecy
- PoE 15.4 → PoE+ 30 → PoE++ 60/100 W
- -67 dBm = VoIP threshold; SNR ≥ 20 dB
- Disable WPS + UPnP on SOHO

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. The 3 non-overlapping 2.4 GHz channels? ___
2. Which generations add 6 GHz support? ___
3. WPA3's replacement for the 4-way handshake? ___
4. EAP-TLS — what's required on both sides? ___
5. Disable which two convenience features on SOHO routers for security? ___

---

➡️ [Module 5: Network Services & Cloud Connectivity](../Module-05-Services-Cloud/Reading.md)
