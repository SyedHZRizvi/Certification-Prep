# ✏️ Module 7 Quiz: Monitoring, Performance & Tools

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 7 · Understand 6 · Apply 8 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. SNMPv3 default ports are: *(Remember)*
A. UDP 53 / TCP 53
B. UDP 161 (queries) and UDP 162 (traps)
C. TCP 22
D. UDP 123

---

### Q2. Syslog over UDP listens on port: *(Remember)*
A. 22
B. 161
C. 514
D. 6514

---

### Q3. The highest syslog severity (most urgent) is: *(Remember)*
A. 0, Emergency
B. 7, Debug
C. 3, Error
D. 1, Alert

---

### Q4. The Windows command to clear the local DNS cache is: *(Remember)*
A. `ipconfig /release`
B. `ipconfig /renew`
C. `ipconfig /flushdns`
D. `ipconfig /clear`

---

### Q5. Which command tests reachability via ICMP echo? *(Remember)*
A. `ping`
B. `tracert`
C. `arp`
D. `netstat`

---

### Q6. Wireshark's role is to: *(Remember)*
A. Generate NetFlow records
B. Capture and analyze packets at every protocol layer
C. Manage Cisco switches via SNMP
D. Replace syslog servers

---

### Q7. NetFlow gives you: *(Remember)*
A. Full packet payloads
B. Per-flow metadata: source/dest IP+port, protocol, byte/packet counts
C. SNMP polling data
D. Hardware temperature sensors

---

### Q8. Jitter is defined as: *(Understand)*
A. Average round-trip latency
B. Variation in latency over time
C. Bandwidth utilization
D. Packet loss percentage

---

### Q9. SNMPv3 differs from SNMPv2c primarily by: *(Understand)*
A. Using TCP instead of UDP
B. Providing user-based authentication and encryption (vs cleartext community strings)
C. Replacing MIB structure
D. Removing trap support

---

### Q10. Throughput vs bandwidth: *(Understand)*
A. They're the same
B. Bandwidth = max theoretical link capacity; throughput = actual achieved rate
C. Throughput is always higher than bandwidth
D. Bandwidth applies only to wireless

---

### Q11. A baseline's purpose is to: *(Understand)*
A. Replace SLAs
B. Provide a recorded "normal" so deviations are detectable and quantifiable
C. Define the maximum allowable latency
D. Mark the date of the firmware update

---

### Q12. A SIEM aggregates: *(Understand)*
A. Only firewall logs
B. Logs from many sources (firewalls, IDS, servers, AD, etc.), normalizes them, and correlates events for alerting
C. Wireless heat maps only
D. Hardware temperature data only

---

### Q13. A user complains their PC's internet is slow. Your FIRST measurement is: *(Apply)*
A. Reboot the router
B. Compare current latency/throughput from the affected PC to your baseline
C. Reinstall the OS
D. Replace the cable

---

### Q14. To verify the path a packet takes from your Windows laptop to an external server, you run: *(Apply)*
A. `ping`
B. `tracert`
C. `nslookup`
D. `netstat`

---

### Q15. A web app loads slowly. Wireshark shows the TCP handshake completes in 2 ms, the HTTP response arrives in 60 ms, then the browser opens 47 new TCP connections for assets. The MOST appropriate fix is: *(Apply)*
A. Replace the server
B. Enable HTTP/2 (or HTTP/3) on the reverse proxy, multiplexing eliminates per-asset handshake overhead
C. Disable IPv6
D. Add more bandwidth

---

### Q16. A network team needs to identify the top WAN bandwidth consumers per hour. The right tool is: *(Apply)*
A. NetFlow / sFlow / IPFIX collector
B. Single Wireshark capture
C. iperf
D. SNMP trap

---

### Q17. The Linux command to list listening TCP ports + established connections is: *(Apply)*
A. `ping -L`
B. `netstat -an` (or `ss -tnl` / `ss -an`)
C. `arp -a`
D. `dig +listen`

---

### Q18. A switch sends a syslog message with severity 2. Per RFC 5424 this is: *(Apply)*
A. Debug
B. Informational
C. Critical
D. Warning

---

### Q19. The MOST appropriate test of end-to-end TCP bandwidth between two LAN hosts is: *(Apply)*
A. ping with `-s 1500`
B. iperf3 (server on one host, client on the other)
C. tracert
D. nslookup

---

### Q20. A user reports `ping intranet.corp.local` says "could not find host" but `ping 10.10.5.50` (the known IP) succeeds. The MOST likely root cause is: *(Analyze)*
A. ICMP is blocked
B. DNS resolution failure
C. The cable is bad
D. APIPA assigned

---

### Q21. An SNMP NMS receives a trap from a router saying `interface Gi0/1 down`. The MOST appropriate response sequence is: *(Analyze)*
A. Reboot the entire network
B. Acknowledge the alert, verify with a second source (ping the connected device, check syslog), then investigate / dispatch
C. Mute the alert
D. Switch to SNMPv1

---

### Q22. A Wireshark capture shows many `TCP Retransmission` packets between two hosts during a file transfer. The MOST likely cause is: *(Analyze)*
A. The application is misconfigured
B. Packet loss along the path (saturated link, faulty cable, congested router queue)
C. DNS is broken
D. SNMP polling is too frequent

---

### Q23. A VoIP team reports calls dropping during certain hours. SNMP and ping show normal latency. NetFlow shows a spike of large flows at the same hours. The combined signal points to: *(Analyze)*
A. DNS server failure
B. Bandwidth saturation creating queuing delay (latency average looks fine; jitter / instant peaks during traffic bursts disrupt RTP), the right fix is QoS prioritization of voice
C. Wireless interference
D. STP loop

---

### Q24. RPO vs RTO: *(Understand)*
A. RPO = how much DATA loss is acceptable; RTO = how much TIME to recover service
B. They're synonyms
C. RPO is for routers; RTO is for switches
D. RTO measures bandwidth

---

### Q25. The `tcp.analysis.retransmission` Wireshark display filter shows: *(Understand)*
A. Only DNS queries
B. TCP packets identified as retransmissions (indicate possible packet loss)
C. SYN packets only
D. UDP datagrams

---

### Q26. You inherit a network with NO monitoring. The CIO gives you a $50k/year budget. Pick the FIRST telemetry investment and defend it. *(Create)*

> *Create-level note:* an open-ended architectural prioritization.
A. "Buy a single commercial WAN accelerator."
B. "Deploy a syslog + SNMP collector (LibreNMS or Zabbix, both open source) so we have device telemetry and centralized logs from day one, this is the foundational visibility layer everything else depends on."
C. "Buy a dozen new switches."
D. "Hire a junior tech."

---

## 🎯 Answers + Explanations

### Q1: **B. UDP 161 / UDP 162**
SNMP queries on 161; traps on 162. UDP because polling is fast and stateless.

### Q2: **C. 514**
Syslog over UDP = 514. Syslog over TLS = TCP 6514.

### Q3: **A. 0, Emergency**
Severity counts UP from 0 (Emergency) to 7 (Debug). 0 = most urgent.

### Q4: **C. `ipconfig /flushdns`**
Clears the local DNS resolver cache on Windows.

### Q5: **A. `ping`**
ICMP Echo Request/Reply. tracert maps hops; arp shows IP↔MAC; netstat shows connections.

### Q6: **B. Capture and analyze packets**
Wireshark is the gold-standard packet analyzer, decodes every protocol layer for diagnosis.

### Q7: **B. Per-flow metadata**
NetFlow records flow tuples + counters. NOT full payload (that's pcap / Wireshark).

### Q8: **B. Variation in latency over time**
Average RTT is latency. Jitter is the variation. High jitter destroys VoIP / video.

### Q9: **B. User-based auth + encryption**
SNMPv1/v2c use cleartext "community strings" (e.g., "public"), easily sniffable. v3 introduces user-based auth (MD5/SHA) and privacy (DES/AES). Use v3 in production.

### Q10: **B. Bandwidth = max; throughput = actual**
Bandwidth is the theoretical capacity; throughput is what you measure under real conditions (with overhead, congestion, retransmits).

### Q11: **B. Recorded normal for comparison**
Without a baseline you can't quantify "slower than usual." Baselines drive alerting thresholds and capacity planning.

### Q12: **B. Aggregates many sources + correlates**
SIEM = Security Information & Event Management. Splunk, Sentinel, Elastic, QRadar are common.

### Q13: **B. Compare to baseline**
Always measure first. The textbook troubleshooting answer is gather data + compare to known-good before changing anything.

### Q14: **B. `tracert`**
Windows = tracert (Linux/macOS = traceroute). Both use TTL-incrementing to map hops via ICMP Time Exceeded responses.

### Q15: **B. Enable HTTP/2**
The waterfall pattern (one TCP per asset, sequential overhead) is the HTTP/1.1 no-keepalive anti-pattern. HTTP/2 multiplexes many requests over one TLS connection; HTTP/3 (QUIC) does the same over UDP with even lower handshake overhead.

### Q16: **A. NetFlow / sFlow / IPFIX**
Flow telemetry is exactly designed for top-talkers analysis at scale. Wireshark sees individual packets but doesn't aggregate well across many hours / many devices.

### Q17: **B. `netstat -an` (or `ss -tnl`)**
Both list socket state. `ss` is the modern Linux preferred (faster, more flexible); netstat is cross-platform.

### Q18: **C. Critical**
0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Info, 7=Debug.

### Q19: **B. iperf3**
Active bandwidth test between cooperating server/client. ping with large payload only measures latency + loss, not sustained throughput. tracert / nslookup are unrelated.

### Q20: **B. DNS resolution failure**
IP-based ping works; name-based doesn't = pure DNS issue. Check resolver, /etc/hosts, search domain. Same scenario as Module 5 quiz Q21, re-emphasized because this is the highest-frequency real-world issue.

### Q21: **B. Acknowledge + verify + investigate**
Treat alerts professionally. Ping the connected device, check syslog, then dispatch a tech if needed. Rebooting everything (A) and switching SNMP versions (D) are wrong responses; muting (C) loses the alert.

### Q22: **B. Packet loss**
TCP retransmissions are the canonical loss signature, sender didn't get an ACK in time. Investigate links, queues, congested paths.

### Q23: **B. Bandwidth saturation + queueing + jitter**
Average latency can look OK while jitter (and instant peaks during bursts) wrecks real-time. Fix is QoS, prioritize voice ahead of bulk traffic.

### Q24: **A. RPO = data loss tolerance; RTO = recovery time**
RPO = how far back you can be (data loss). RTO = how long you can be down (time to recover). Both feed BCDR planning.

### Q25: **B. TCP retransmissions**
`tcp.analysis.retransmission` is the Wireshark filter expressly for spotting retransmits, a fast packet-loss diagnostic.

### Q26: **B. Syslog + SNMP collector first**
The right first investment is the **visibility layer** itself. Open-source LibreNMS / Zabbix / Grafana give you SNMP polling, syslog ingest, alerting, dashboards for cheap. Without telemetry, every other investment is shooting in the dark. The other options are tactical or sequencing errors.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Monitoring + tools mastered.
- 22–24/26 → ✅ Solid. Re-read the SNMP versions + syslog severity sections.
- 18–21/26 → ⚠️ Re-read CLI utilities + NetFlow + Wireshark sections.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- SNMP ports: UDP 161 query / UDP 162 trap; v3 for security
- Syslog severity table 0-7 (Emergency → Debug)
- Syslog ports: UDP 514 / TCP 6514 (TLS)
- ping vs tracert vs nslookup vs dig vs netstat
- NetFlow / sFlow / IPFIX = flow metadata, not payload
- Wireshark = packet capture + protocol analysis
- iperf3 for bandwidth tests
- RTT / jitter / throughput / bandwidth definitions
- RPO vs RTO
- Always baseline first

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8, Network Troubleshooting Methodology](../Module-08-Troubleshooting/Reading.md)
