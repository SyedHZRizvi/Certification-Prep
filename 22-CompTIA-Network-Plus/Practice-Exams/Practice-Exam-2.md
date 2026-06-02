# 🧪 Practice Exam 2 — CompTIA Network+ (N10-009 Style)

> **Conditions:** Set a 65-minute timer. 65 questions. Treat it like the real thing.
> **Pass mark:** 55/65 (~85%) — Network+ passes at ~80% so aim higher in practice.
> Take this AFTER finishing Modules 5–8. Covers DNS/DHCP/services, cloud connectivity, security, monitoring/tools, and troubleshooting methodology.

---

## 📝 Questions

### 1. The DNS record that maps a hostname to an IPv4 address is:
A. A
B. AAAA
C. CNAME
D. PTR

### 2. Which DNS record provides reverse lookup (IP → hostname)?
A. A
B. AAAA
C. CNAME
D. PTR

### 3. MX records contain:
A. An IP only
B. A hostname plus a priority value
C. A free-form text string only
D. A port number only

### 4. SPF / DKIM / DMARC records are typically stored as which DNS record type?
A. A
B. MX
C. TXT
D. SRV

### 5. The DHCP DORA sequence is:
A. Discover, Offer, Request, Acknowledge
B. Discover, Obtain, Reply, Accept
C. Detect, Offer, Reserve, Allocate
D. Discover, Order, Request, Activate

### 6. DHCP servers listen on UDP port:
A. 53
B. 67
C. 68
D. 123

### 7. NTP runs on:
A. TCP 22
B. UDP 123
C. UDP 161
D. TCP 514

### 8. TFTP uses which port and protocol?
A. TCP 21
B. UDP 69
C. TCP 22
D. UDP 53

### 9. SFTP runs on TCP port:
A. 20
B. 21
C. 22
D. 990

### 10. The MOST secure protocol for retrieving email is:
A. POP3 (110)
B. IMAP (143)
C. IMAPS (993)
D. SMTP (25)

### 11. DNS uses TCP/53 (rather than UDP/53) for:
A. All standard queries
B. Zone transfers and responses > 512 bytes
C. SRV record lookups only
D. NXDOMAIN responses

### 12. AWS's dedicated cloud-connection service is:
A. Direct Connect
B. ExpressRoute
C. Dedicated Interconnect
D. FastConnect

### 13. SD-WAN's PRIMARY value over traditional MPLS-only WAN is:
A. Higher per-link bandwidth
B. Centrally managed multi-transport overlay with policy-based application steering
C. Always cheaper
D. Replacing all firewalls

### 14. SASE bundles SD-WAN with:
A. PoE
B. Cloud-native security (CASB, SWG, ZTNA, FWaaS)
C. NTP
D. SNMP

### 15. SDN separates which two planes?
A. Application + transport
B. Control plane + data plane
C. Encryption + decryption
D. Hardware + firmware

### 16. The PRIMARY difference between IDS and IPS is that IPS:
A. Logs and alerts only
B. Sits out-of-band
C. Is inline and can block detected attacks
D. Only works on hosts

### 17. A stateful firewall differs from a stateless packet filter by:
A. Inspecting payload at the application layer
B. Tracking connection state and auto-allowing return traffic for established sessions
C. Operating only at L2
D. Requiring TLS decryption

### 18. ESP in IPsec tunnel mode encrypts:
A. Only the payload
B. The entire original packet, adding a new outer IP header
C. Just the source IP
D. Nothing — ESP doesn't encrypt

### 19. To pass IPsec through a NAT device, you must allow:
A. TCP 443 only
B. UDP 500 + UDP 4500 + IP protocol 50
C. TCP 22 only
D. ICMP only

### 20. SSL/TLS VPNs typically use:
A. UDP 500
B. TCP 443
C. TCP 22
D. UDP 1194

### 21. The 802.1X "supplicant" is:
A. The switch
B. The RADIUS server
C. The client device requesting access
D. The directory service

### 22. NAC stands for and means:
A. Network Address Control — DHCP
B. Network Access Control — posture-checks devices before granting access
C. New Authentication Control — replaces 802.1X
D. Network Address Configuration — APIPA

### 23. ZTNA's primary advantage over a traditional VPN is:
A. Cheaper
B. Per-application identity-aware access vs broad network trust
C. Always faster
D. Doesn't require authentication

### 24. SNMP version 3 differs from v2c by:
A. Replacing MIB structure
B. Adding user-based auth + encryption (vs cleartext community strings)
C. Using TCP instead of UDP
D. Removing trap support

### 25. SNMP ports are:
A. UDP 53 / 161
B. UDP 161 (query) / UDP 162 (trap)
C. TCP 22 / 514
D. TCP 161 / 162

### 26. Syslog over UDP listens on port:
A. 22
B. 161
C. 514
D. 6514

### 27. The highest syslog severity (most urgent) is:
A. 0 (Emergency)
B. 7 (Debug)
C. 3 (Error)
D. 5 (Notice)

### 28. NetFlow provides:
A. Full packet payloads
B. Per-flow metadata (src/dst IP+port, protocol, byte/packet counts)
C. SNMP polling
D. Hardware sensor data

### 29. Wireshark's primary use is:
A. Generating NetFlow records
B. Capture and analyze packets at every protocol layer
C. Managing switches via SNMP
D. Replacing syslog servers

### 30. The Windows command to drop and re-request a DHCP lease is:
A. `ipconfig /release` then `ipconfig /renew`
B. `ipconfig /flushdns`
C. `netstat -e`
D. `tracert dhcp`

### 31. The Linux command to show current connections + listening ports is:
A. `ping -L`
B. `netstat -an` (or `ss -tnl`)
C. `arp -a`
D. `dig +listen`

### 32. To test bandwidth between two LAN hosts, the appropriate tool is:
A. ping
B. iperf3
C. tracert
D. nslookup

### 33. Jitter is defined as:
A. Average round-trip latency
B. Variation in latency over time
C. Bandwidth utilization
D. Packet loss percentage

### 34. Throughput vs bandwidth:
A. They're the same
B. Bandwidth = theoretical max; throughput = actual achieved
C. Throughput is always higher
D. Bandwidth applies only to wireless

### 35. A baseline's primary purpose is to:
A. Replace SLAs
B. Provide a recorded "normal" for comparing future measurements and quantifying deviations
C. Define max allowable latency
D. Mark the firmware update date

### 36. The CompTIA 7-step troubleshooting methodology STARTS with:
A. Establish a theory
B. Identify the problem
C. Implement the solution
D. Verify functionality

### 37. The LAST step of the methodology is:
A. Verify full functionality
B. Implement the solution
C. Document findings, actions, and outcomes
D. Establish a new theory

### 38. After CONFIRMING a tested theory, the next step is:
A. Establish a plan of action
B. Document findings
C. Establish a new theory
D. Verify functionality

### 39. A user has IP `169.254.5.5`. The root cause is:
A. Static IP
B. DHCP failed; APIPA self-assigned
C. SLAAC succeeded
D. STP loop

### 40. Duplex mismatch typically presents as:
A. Total connectivity loss
B. Connectivity works but throughput collapses with collisions/errors
C. APIPA assignment
D. STP loop

### 41. A broadcast storm typically results from:
A. SNMP polling
B. A Layer 2 loop without STP (or STP disabled)
C. Too much DNS traffic
D. WPA3 misconfiguration

### 42. A TDR is BEST used to:
A. Measure Wi-Fi signal strength
B. Locate the distance to a fault in a copper cable
C. Test SNMP polling
D. Capture packets

### 43. Cat6 supports 10 GbE up to approximately how many meters?
A. 100 m
B. 55 m
C. 30 m
D. 1 km

### 44. The MOST appropriate theory-formation approach for an application-layer symptom (page won't load) is:
A. Bottom-up OSI
B. Top-down OSI
C. Divide-and-conquer only
D. Don't apply OSI

### 45. When a "fix worked but you didn't tell the user or check for new side effects," you skipped:
A. Step 1 — Identify
B. Step 5 — Implement
C. Step 6 — Verify full system functionality
D. Step 7 — Document

### 46. A switch port "just stopped working" but other ports work for the same user. The MOST appropriate FIRST investigation step is:
A. Replace the firewall
B. Swap cables, try another port, check switch port config (VLAN, duplex, status, port-security)
C. Reformat the user's PC
D. Re-resolve DNS

### 47. A SOC reports the IPS keeps blocking legitimate web traffic. The correct response is:
A. Disable the IPS
B. Tune the rules — move high-FP rules to alert-only, whitelist trusted dest, adjust thresholds; keep IPS protecting elsewhere
C. Switch to IDS-only
D. Replace IPS with NAC

### 48. A pen tester captures the WPA2-Enterprise PEAP-MSCHAPv2 handshake and cracks user passwords offline. The architectural fix is:
A. Switch to WEP
B. Migrate to WPA3-Enterprise with EAP-TLS (certificate-based; no password to crack)
C. Lengthen passwords
D. Add a captive portal

### 49. A flat /16 network. An attacker compromises one HVAC vendor's laptop and pivots to PCI. The single architectural change with the BIGGEST blast-radius reduction is:
A. Use IPv6
B. Microsegmentation with firewalls / ACLs between vendor / corporate / PCI zones
C. Disable wireless
D. Replace switches with hubs

### 50. Mantraps / access-control vestibules defend primarily against:
A. SQL injection
B. Tailgating
C. DNS poisoning
D. Wi-Fi deauth

### 51. A web app loads slowly. Wireshark shows TCP handshake completes in 2 ms, server responds in 60 ms, then the browser opens 47 NEW TCP connections for assets. The MOST appropriate fix is:
A. Replace the server
B. Enable HTTP/2 (or HTTP/3) on the reverse proxy — multiplexing eliminates per-asset handshake overhead
C. Disable IPv6
D. Add bandwidth

### 52. A network team wants to identify top WAN bandwidth consumers per hour. The right tool is:
A. NetFlow / sFlow / IPFIX collector
B. A single Wireshark capture
C. iperf
D. SNMP trap on the firewall

### 53. A frame's destination MAC is `01:00:5E:00:00:01`. This is:
A. A unicast frame
B. A broadcast frame
C. A multicast frame (IPv4 multicast — first 24 bits are 01:00:5E)
D. An anycast frame

### 54. An engineer changes an interface IP on a remote router and instantly loses SSH access. The recovery method is:
A. Wait for DHCP
B. Console (serial) cable OR out-of-band management network
C. ipconfig /renew
D. Email the vendor

### 55. A wireless user roams between two APs sharing an SSID. Their VoIP call drops. RSSI is fine in both rooms. The MOST appropriate fix is:
A. Enable 802.11k/v/r assisted roaming on the controller
B. Replace both APs
C. Disable WPA3
D. Move to 2.4 GHz

### 56. The Meta (Facebook) October 2021 outage took 6 hours because:
A. The attack was too sophisticated
B. The maintenance command withdrew DNS routes AND internal auth + badge access depended on the same DNS — engineers couldn't remote in; physical dispatch was needed
C. SNMP polling failed
D. A data center burned down

### 57. A Wireshark capture during "slow web app" complaints shows many `TCP Retransmission` packets. The primary indication is:
A. DNS poisoning
B. Packet loss along the path (saturated link, faulty cable/port, congested queue)
C. WPA3 cracking
D. SMTP misconfiguration

### 58. The MOST appropriate command to verify a host's MAC address from a Linux box on the same LAN segment (after a ping populates the cache) is:
A. `nslookup`
B. `arp -a`
C. `dig +trace`
D. `tracert`

### 59. PMTUD (Path MTU Discovery) breaks when:
A. ICMP is blocked along the path
B. STP is disabled
C. DHCP fails
D. NTP drifts

### 60 (Scenario PBQ). A user complains of slow web access. From their PC: `ping intranet.corp.local` returns 1 ms RTT, but Wireshark shows the page loads 47 small assets across 47 separate TCP+TLS handshakes. The PRIMARY fix is:
A. Replace the web server
B. Enable HTTP/2 on the reverse proxy (multiplexing eliminates per-asset handshake overhead)
C. Add bandwidth
D. Disable the firewall

### 61 (Scenario PBQ). A pen tester runs `nmap -sV 10.0.0.50` and finds:

- Port 22/tcp open (OpenSSH 9.6)
- Port 23/tcp open (Telnet)
- Port 80/tcp open (HTTP)
- Port 443/tcp open (HTTPS)

The MOST URGENT hardening recommendation is:
A. Disable HTTPS
B. Disable Telnet (TCP 23) — cleartext credentials over the wire; SSH already covers remote shell
C. Block port 22
D. Add IPv6 only

### 62 (Scenario PBQ). Match each issue to the BEST tool:

- (a) Identify the protocol of a strange flow from a workstation
- (b) Find the distance to a fiber break in a 5-km run
- (c) Verify a Wi-Fi signal map across a floor
- (d) Confirm DNS resolution from a Linux CLI with rich detail

A. (a) Wireshark, (b) OTDR, (c) Wi-Fi analyzer (NetSpot / Ekahau), (d) dig
B. (a) ping, (b) TDR, (c) iperf, (d) ipconfig
C. (a) NetFlow only, (b) tone generator, (c) tcpdump, (d) nslookup -mtu
D. (a) tracert, (b) cable certifier, (c) ping, (d) arp

### 63 (Scenario PBQ). A network outage timeline:

- 09:00 — One ISP link goes down
- 09:02 — BGP automatically fails over to backup ISP (~30s of routing flap)
- 09:05 — Half the users report internal-app slowness
- 09:08 — Investigation reveals the backup ISP is rate-limited and the company's stateful firewall's session table is full (sessions from the primary link still tracked)

The MOST appropriate single action to restore service is:
A. Reboot the firewall
B. Clear stale firewall sessions (force re-establishment over the new path) AND verify the backup ISP's contracted bandwidth is sufficient OR engage emergency uplift
C. Disable BGP
D. Disable IPv6

### 64 (Scenario PBQ). A SaaS app vendor publishes that their service is **anycast** across 200 PoPs globally. The network engineer is asked the routing implication. The CORRECT statement is:
A. Anycast requires every PoP to advertise the same IP via BGP; the user's traffic naturally routes to the topologically nearest PoP via standard BGP path selection
B. Anycast uses unicast routing only
C. Anycast requires the user to manually select a PoP
D. Anycast is a Layer 2 feature

### 65 (Scenario PBQ). The CIO asks why the network team recommends WPA3-Enterprise + EAP-TLS (certificate-based) over WPA3-Personal (PSK) for the corporate Wi-Fi. The single STRONGEST justification is:
A. "WPA3-Enterprise is faster"
B. "Per-user certificate-based authentication eliminates the shared-PSK risk entirely (no one can leak THE password), provides per-user revocation, supports identity-tied auditing, and is what the company already manages via AD for desktop logins"
C. "WPA3-Enterprise uses only IPv6"
D. "WPA3-Enterprise doesn't need 802.1X"

---

## 🎯 Answer Key (No Cheating!)

```
1.  A    14. B    27. A    40. B    53. C
2.  D    15. B    28. B    41. B    54. B
3.  B    16. C    29. B    42. B    55. A
4.  C    17. B    30. A    43. B    56. B
5.  A    18. B    31. B    44. B    57. B
6.  B    19. B    32. B    45. C    58. B
7.  B    20. B    33. B    46. B    59. A
8.  B    21. C    34. B    47. B    60. B
9.  C    22. B    35. B    48. B    61. B
10. C    23. B    36. B    49. B    62. A
11. B    24. B    37. C    50. B    63. B
12. A    25. B    38. A    51. B    64. A
13. B    26. C    39. B    52. A    65. B
```

---

## Detailed answer rationales (selected — high-value items)

**Q11. B — Zone transfers / >512 bytes.** DNS uses UDP/53 for standard queries (faster). TCP/53 is used for zone transfers (AXFR/IXFR) and responses larger than 512 bytes (which UDP can't reliably carry).

**Q18. B — Tunnel mode encrypts entire packet, new outer IP.** This is what makes IPsec usable for site-to-site VPNs — both the original IP header and payload are encrypted; a new outer IP header carries the encrypted bundle across the WAN.

**Q19. B — UDP 500 + UDP 4500 + IP proto 50.** IKE phase 1 uses UDP/500. NAT-Traversal wraps ESP in UDP/4500 for NAT compatibility. ESP itself is IP protocol 50 (not a TCP/UDP port).

**Q23. B — Per-app vs network trust.** Traditional VPNs grant network-level access; ZTNA's identity-aware proxy grants per-application access, dramatically reducing blast radius if a user's device is compromised.

**Q35. B — Recorded normal for comparison.** Without a baseline, you can't quantify "slower than usual." Baselines drive alerting thresholds and capacity planning.

**Q44. B — Top-down for app symptoms.** When the symptom is app-layer (page won't load), starting at L7 finds DNS / cert / HTTP issues fast without first eliminating cables/switches.

**Q45. C — Step 6 Verify skipped.** "Fix worked but didn't check end-to-end" is the canonical Step 6 skip — the most common anti-pattern CompTIA tests.

**Q48. B — WPA3-Enterprise EAP-TLS.** PEAP-MSCHAPv2 is known vulnerable to offline cracking. EAP-TLS uses per-side certificates — there's no password to crack offline.

**Q49. B — Microsegmentation.** The Target 2013 lesson. Flat networks enable unrestricted lateral movement. Microsegmentation with enforcing firewalls between zones is the architectural fix.

**Q53. C — Multicast.** IPv4 multicast frames use destination MAC `01:00:5E:xx:xx:xx` (first 24 bits). `01:00:5E:00:00:01` = all-hosts multicast.

**Q54. B — Console / OOB.** When you break the only data path to a remote device, console (serial) or out-of-band management is the only recovery path. The Facebook/Meta 2021 outage canonical lesson.

**Q56. B — DNS withdraw + dependency loop + on-site dispatch.** Meta's exact failure mode: BGP withdraw → DNS unreachable → internal auth + badge access dependent on DNS → engineers couldn't remote in → physical dispatch needed → 6 hours.

**Q60. B — HTTP/2.** Per-asset handshake overhead (HTTP/1.1 + no keepalive) is the textbook fix candidate: HTTP/2 multiplexes many requests over one connection.

**Q61. B — Disable Telnet.** Telnet sends credentials in cleartext. SSH already covers the remote shell need; Telnet should be disabled on every Network+ scenario.

**Q63. B — Clear stale sessions + verify backup bandwidth.** Stateful firewalls' session tables fill up when traffic shifts; old sessions referring to the failed primary need to expire or be flushed. Combined with verifying the backup ISP's contracted capacity, this is the structured restoration.

**Q64. A — Anycast advertises same IP from many sites; BGP picks nearest.** This is the canonical anycast definition — used by DNS root servers, CDNs (Cloudflare 1.1.1.1, Google 8.8.8.8), and modern cloud services.

**Q65. B — Per-user, revocable, identity-tied auditing.** PSKs are shared; if one user leaks the PSK, the entire wireless is compromised. EAP-TLS per-user certificates are individually revocable, tied to identity, auditable, and align with existing identity infrastructure (AD).

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 60–65 | 🏆 Excellent — ready for the Final Mock |
| 55–59 | ✅ On track — review wrong answers, then schedule the Final Mock for 2-3 days before your exam |
| 45–54 | ⚠️ Re-study weak modules; redo this exam in 5 days |
| <45 | 🔁 Revisit weak modules in full and re-do all the module quizzes |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module(s) covered it (often two or three for scenario questions)
2. Re-read the relevant section(s)
3. Add a flashcard to your daily review
4. Try the question again in 3 days

---

➡️ When ready: 2-3 days before your real exam, take the [Final Mock Exam](./Final-Mock-Exam.md) under real conditions — 90 questions, 90 minutes, no notes, no breaks.
