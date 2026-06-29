# 📋 Module 8 Cheat Sheet: Network Troubleshooting Methodology

> One page. Print it. Tape it to your monitor. **This is 24% of the exam.**

---

## 🎯 The 7-Step CompTIA Methodology, MEMORIZE

| # | Step |
|---|------|
| **1** | **Identify** the problem (gather info, interview user, check recent changes) |
| **2** | **Establish a theory** of probable cause |
| **3** | **Test** the theory (confirm or refute → new theory or escalate) |
| **4** | **Plan** of action (incl. side effects + rollback) |
| **5** | **Implement** the solution (or escalate) |
| **6** | **Verify** full system functionality + preventive measures |
| **7** | **Document** findings, actions, outcomes |

🧠 "**I**dentify, **E**stablish theory, **T**est, **P**lan, **I**mplement, **V**erify, **D**ocument" = **IETPIVD**

---

## 🪜 Three Theory Approaches

| Approach | When |
|----------|------|
| **Top-down** (L7 → L1) | App-layer symptoms (page won't load, app slow) |
| **Bottom-up** (L1 → L7) | Physical symptoms (no link light, totally dead) |
| **Divide-and-conquer** | Bisect from L3/L4 outward |

---

## 🚨 Symptom → Layer Quick Map

| Symptom | Layer | Action |
|---------|-------|--------|
| No link light | L1 | Cable, port, NIC |
| Errors + slow throughput | L2 | Duplex mismatch |
| Broadcast storm | L2 | Loop without STP |
| MAC flapping | L2 | Loop or duplicate MAC |
| 169.254.x.x | L3 | APIPA → DHCP (Dynamic Host Configuration Protocol) failed |
| Routing loop / TTL exceeded | L3 | Static / dynamic routing |
| Duplicate IP | L3 | DHCP + static conflict |
| MTU issue / VPN (Virtual Private Network) hangs | L3 | Lower MSS / PMTUD |
| Connection refused | L4 | Service not listening |
| Connection times out | L4 | Firewall drop / overload |
| DNS (Domain Name System) NXDOMAIN | L7 | DNS path / resolver |
| TLS (Transport Layer Security) cert error | L6/L7 | Cert expiry / clock skew (NTP!) |
| HTTP (Hypertext Transfer Protocol) 5xx | L7 | Server / upstream issue |

---

## 🧪 Cable Testing Tools

| Tool | Use |
|------|-----|
| **Cable tester** | Continuity + pinout |
| **Cable certifier** | Validate vs category spec (Cat6/6a) |
| **TDR** | Locate copper fault by distance |
| **OTDR** | Same for fiber |
| **Tone generator + probe** | Trace wires through walls |
| **Loopback plug** | Test NIC hardware |
| **Wi-Fi analyzer** | RF survey, channel use |
| **Light / power meter** | Fiber signal in dBm |

---

## 🪪 Cable Categories & Distances

| Cable | Speed | Max distance |
|-------|-------|--------------|
| Cat5e | 1 GbE | 100 m |
| Cat6 | 1 GbE / 10 GbE short | 100 m / **55 m at 10 GbE** |
| Cat6a | 10 GbE | 100 m |
| Cat7/8 | 10–40 GbE | 30–100 m |
| Multi-mode fiber (OM3/4/5) | 10 GbE | 300–550 m |
| Single-mode fiber (OS1/2) | 10 GbE+ | 10–80 km |

### Termination
- **Straight-through** = 568B-568B (unlike devices)
- **Crossover** = 568A-568B (like devices; obsolete with Auto-MDIX)
- **Rollover (console)** = pin 1↔8, 2↔7, etc.

---

## 🪛 Console & Out-of-Band Management

- **Console (serial)** = direct local admin access; survives data-plane breakage
- **Out-of-band mgmt** = separate VLAN (Virtual Local Area Network) / mgmt network; SSH (Secure Shell)/HTTPS (HTTP Secure) over a path independent of user data

🚨 The Facebook lesson: When you can't reach the data path, OOB or console is the only path back.

---

## 📶 Wireless Troubleshooting Quick Block

| Symptom | Fix |
|---------|-----|
| Weak signal | Site survey, AP placement, antenna |
| Roaming drop | Enable 802.11k/v/r |
| Slow Wi-Fi | Move to 5/6 GHz, change channel |
| Captive portal stuck | Manually navigate to portal URL |
| Channel overlap | Reassign 1/6/11 in 2.4 GHz |
| Wrong PSK / WPA mismatch | Verify PSK, check WPA2 vs WPA3 |

---

## 🏆 Exam Power Phrases

Often **right**:

- ✅ "Identify the problem first"
- ✅ "Verify full system functionality before closing"
- ✅ "Document findings + outcomes"
- ✅ "Plan the rollback before implementing"
- ✅ "Console / out-of-band access"

Often **wrong**:

- ❌ "Implement first, then identify"
- ❌ "Skip documentation"
- ❌ "Reboot first"
- ❌ "Disable STP to fix slowness"
- ❌ "Close the ticket without verifying"

---

## ⚠️ Top Anti-Patterns

- ❌ Reboot-and-pray
- ❌ Skipping Step 6 (Verify)
- ❌ Skipping Step 7 (Document)
- ❌ Changing prod without staging
- ❌ Disabling STP / monitoring "for performance"
- ❌ Hardcoding fixes without root-cause analysis

---

## 🗓️ Key Facts To Memorize Cold

- 7 methodology steps in order
- 3 OSI approach styles
- APIPA = 169.254.x.x = DHCP failure
- Duplex mismatch = works-but-errors
- Cat6 10 GbE = **55 m** (not 100 m)
- Console + OOB save you when data path is broken
- Verify (6) + Document (7) are non-negotiable
- Domain 5 weight: **24%** of N10-009, biggest single domain

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. 7 methodology steps in order? ___
2. What does 169.254.x.x mean? ___
3. Tool to locate copper cable fault by distance? ___
4. Top-down vs bottom-up, when each? ___
5. Two recovery paths when you've broken the data plane? ___

---

➡️ Now take the [Practice Exams](../../../Practice-Exams/), start with [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md).
