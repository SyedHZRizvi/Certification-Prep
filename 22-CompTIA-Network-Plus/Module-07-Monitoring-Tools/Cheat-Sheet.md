# 📋 Module 7 Cheat Sheet: Monitoring, Performance & Tools

> One page. Print it. Tape it to your monitor.

---

## 📈 Performance Vocabulary

| Term | Meaning |
|------|---------|
| **Latency / RTT** | Time for packet (one-way / round-trip) |
| **Jitter** | Variation in latency over time |
| **Throughput** | Actual data rate (less than bandwidth) |
| **Bandwidth** | Max theoretical link capacity |
| **Goodput** | App-layer useful throughput |
| **Packet loss** | % packets that don't arrive |

| Acronym | Meaning |
|---------|---------|
| **SLA** | Service Level Agreement |
| **MTBF** | Mean Time Between Failures |
| **MTTR** | Mean Time To Repair |
| **RTO** | Recovery Time Objective (how fast back) |
| **RPO** | Recovery Point Objective (how much data loss) |

---

## 🔊 SNMP

| Element | Detail |
|---------|--------|
| **Ports** | UDP 161 (query) / UDP 162 (trap) |
| **MIB / OID** | Hierarchical data tree / dotted address |
| **Operations** | GET / GETNEXT / GETBULK / SET / RESPONSE / TRAP / INFORM |
| **v1 / v2c** | Cleartext community strings — **insecure** |
| **v3** | User-based auth + encryption — **use this** |
| **NMS** | Network Management Station (LibreNMS, PRTG, SolarWinds) |

---

## 📜 Syslog

| Element | Detail |
|---------|--------|
| **Port** | UDP 514 (TLS = TCP 6514) |
| **Format** | `<priority>1 timestamp host app procid msgid msg` |

### Severity (MEMORIZE)
| Level | Name |
|-------|------|
| **0** | Emergency |
| **1** | Alert |
| **2** | Critical |
| **3** | Error |
| **4** | Warning |
| **5** | Notice |
| **6** | Informational |
| **7** | Debug |

🧠 Mnemonic: "**E**very **A**wesome **C**omputer **E**ducator **W**alks **N**aturally **I**n **D**ebug"

---

## 🌊 Flow Telemetry

| Tool | Inventor | Purpose |
|------|----------|---------|
| **NetFlow** | Cisco | Per-flow metadata (src/dst IP+port, proto, counters) |
| **sFlow** | InMon | Packet sampling (1-in-N) |
| **IPFIX** | IETF standard | NetFlow v9-compatible standard (RFC 7011) |

**Not packet capture** — flow summaries only. Pair with Wireshark for payload.

---

## 🔧 CLI Tools — Quick Reference

| Tool | Purpose |
|------|---------|
| **ping** | ICMP reachability + RTT |
| **traceroute / tracert** | Map hops via TTL-incrementing |
| **mtr** | Live ping + traceroute combined |
| **nslookup / dig** | DNS lookups |
| **ipconfig / ifconfig / ip** | IP config, MAC, DHCP info |
| **netstat / ss** | Connections + listening ports |
| **arp** | IP ↔ MAC mapping (local segment) |
| **nmap** | Port scanner / discovery |
| **tcpdump** | CLI packet capture |
| **iperf / iperf3** | Bandwidth test |
| **hping** | Custom packet crafting |

### Windows DHCP/DNS shortcuts
- `ipconfig /release` + `/renew` — drop+request DHCP lease
- `ipconfig /flushdns` — clear DNS cache
- `ipconfig /all` — full config (MAC, DHCP server, leases)

---

## 🦈 Wireshark Filters

### Display filters
| Filter | Use |
|--------|-----|
| `ip.addr == 10.0.0.5` | Traffic to/from IP |
| `tcp.port == 443` | All HTTPS |
| `http.request.method == "POST"` | POSTs only |
| `tcp.analysis.retransmission` | Find packet loss |
| `tcp.flags.syn == 1 and tcp.flags.ack == 0` | New TCP handshakes |

### Capture filter (BPF)
- `host 10.0.0.5`
- `port 22`
- `not arp`

---

## 🌡️ Environmental Sensors

- Temperature, humidity (40–60% RH)
- Power / UPS load + phase
- Door / motion sensors
- Smoke / water sensors
- Fed into SNMP / syslog stack

---

## 🏆 Exam Power Phrases

Often **right**:

- ✅ "Baseline first, then troubleshoot"
- ✅ "SNMPv3 for security"
- ✅ "NetFlow for bandwidth top-talkers"
- ✅ "Wireshark for protocol-level diagnosis"
- ✅ "QoS to fix jitter for VoIP"

Often **wrong**:

- ❌ "ping is the definitive reachability test" (ICMP often blocked)
- ❌ "SNMPv1 is fine internally"
- ❌ "NetFlow gives full packet payload"
- ❌ "Throughput equals bandwidth"
- ❌ "Reboot first, measure later"

---

## 🗓️ Key Facts To Memorize Cold

- SNMP UDP 161/162; use v3
- Syslog UDP 514 (TLS = TCP 6514); severity 0-7
- NetFlow / sFlow / IPFIX = flow metadata
- Wireshark = packet analyzer
- ping / tracert / nslookup / dig / netstat / arp / nmap / iperf
- Baseline before changes
- Jitter destroys real-time apps; >30 ms for VoIP is bad
- TCP retransmissions in Wireshark = packet loss along path
- HTTP/2 fixes connection-per-asset waterfalls

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. SNMP port(s) and which version is secure? ___
2. Syslog severity 0 vs 7? ___
3. What does NetFlow record? ___
4. Tool to test path between hops? ___
5. Why is jitter worse than steady latency for VoIP? ___

---

➡️ [Module 8: Network Troubleshooting Methodology](../Module-08-Troubleshooting/Reading.md)
