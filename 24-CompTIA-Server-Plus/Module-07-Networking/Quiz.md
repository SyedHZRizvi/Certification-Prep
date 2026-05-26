# ✏️ Module 7 Quiz: Networking for Servers

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. LACP is defined by which IEEE standards? *(Remember)*
A. 802.11
B. 802.1Q
C. 802.3ad / 802.1AX
D. 802.1X

---

### Q2. The default Ethernet MTU is: *(Remember)*
A. 1024 bytes
B. 1500 bytes
C. 4096 bytes
D. 9000 bytes

---

### Q3. Jumbo frames are typically: *(Remember)*
A. 1500 bytes
B. 4096 bytes
C. 9000 bytes (sometimes up to 9216)
D. 64 KB

---

### Q4. NIC teaming with LACP requires: *(Apply)*
A. Nothing on the switch side
B. The switch ports be configured in the same Link Aggregation Group (LAG) with LACP enabled
C. Identical brand of switches
D. Two different VLANs

---

### Q5. A trunk port: *(Understand)*
A. Carries only one VLAN
B. Carries multiple VLANs and tags them per 802.1Q
C. Has no MAC table
D. Cannot do LACP

---

### Q6. The MAIN reason to enable jumbo frames on a storage VLAN is: *(Understand)*
A. To reduce broadcast traffic
B. To reduce per-packet overhead and CPU interrupts, improving throughput for large transfers
C. To shrink TCP windows
D. To enable IPv6

---

### Q7. A storage admin enables jumbo frames on the server NIC only — switch and storage device remain MTU 1500. The expected behavior is: *(Analyze)*
A. Massive performance increase
B. Performance degradation and possibly black-holed connections (packets dropped)
C. No change
D. The server becomes faster

---

### Q8. A Layer 4 load balancer can make decisions based on: *(Understand)*
A. URL path
B. HTTP host header
C. IP address and TCP/UDP port
D. Cookie values

---

### Q9. A Layer 7 load balancer adds the ability to: *(Understand)*
A. Inspect and route based on HTTP host, path, header, cookie
B. Speed up packet forwarding by skipping IP headers
C. Replace the firewall
D. Replace DNS

---

### Q10. To terminate SSL at the load balancer and forward unencrypted HTTP internally, use: *(Apply)*
A. L4 LB (no payload inspection)
B. L7 LB with SSL termination / offload
C. UDP balancer
D. None — SSL cannot be terminated

---

### Q11. Round-robin load balancing: *(Remember)*
A. Sends every connection to the same backend
B. Distributes connections evenly across backends in order
C. Always picks the slowest backend
D. Requires SSL

---

### Q12. The IPv6 protocol that replaces ARP (mapping IP to MAC) is: *(Remember)*
A. NDP (Neighbor Discovery Protocol)
B. DHCPv6
C. SNMP
D. RIP

---

### Q13. Stateless Address Autoconfiguration (SLAAC) on IPv6 lets a host: *(Understand)*
A. Get a DHCPv6 lease
B. Generate its own IPv6 address from a router-advertised prefix plus an interface identifier
C. Forge MAC addresses
D. Bypass routing

---

### Q14. A server has an IPv4 firewall rule for HTTPS but no IPv6 rule. After publishing AAAA records, some clients fail to reach the site. The cause: *(Analyze)*
A. DNS broken
B. **Missing IPv6 firewall rule** — IPv6 traffic blocked by default-deny
C. Browser bug
D. TLS handshake failure

---

### Q15. A pair of teamed NICs in active/active mode does not aggregate bandwidth for a **single** TCP flow because: *(Analyze)*
A. TCP doesn't use NICs
B. A single 5-tuple flow hashes to one NIC; aggregation only spreads across multiple flows
C. The switch refuses
D. LACP is broken

---

### Q16. The Windows NIC teaming feature used in Hyper-V converged designs is called: *(Remember)*
A. LBFO only
B. SET (Switch Embedded Teaming)
C. NLB
D. PortFast

---

### Q17. The Linux kernel feature for NIC teaming is the: *(Remember)*
A. `bonding` driver (or modern `teamd`)
B. `firewalld`
C. `iproute2`
D. `nftables`

---

### Q18. PortFast on a switch port: *(Understand)*
A. Doubles the link speed
B. Skips STP listen/learn for server/edge-host ports, so the port forwards immediately after link-up
C. Enables LACP
D. Disables MAC learning

---

### Q19. A switched PDU (recap from Module 1) and a switched network port both share the property of: *(Understand)*
A. Carrying high-voltage DC
B. Remote control via IP
C. Doubling bandwidth
D. Replacing OOB management

---

### Q20. The recommended cable type for 10 GbE copper Ethernet up to 100 m is: *(Apply)*
A. Cat 5
B. Cat 5e
C. Cat 6A
D. Cat 3

---

### Q21. A best-practice design places OOB management (iDRAC/iLO/BMC) on: *(Apply)*
A. The production user VLAN, for accessibility
B. A dedicated management VLAN, unreachable from production user networks
C. The internet, behind a firewall
D. The same switch port as production data

---

### Q22. A 25 GbE NIC port using a short-run copper twinax cable to top-of-rack uses what form factor? *(Apply)*
A. RJ-45 Cat 5
B. SFP28 DAC
C. QSFP+ LC fiber
D. USB-C

---

### Q23. The MOST common reason a storage VLAN sees random checksum errors after a network change is: *(Analyze)*
A. Faulty CPU
B. **MTU mismatch** somewhere in the path (server vs switch vs storage)
C. Power failure
D. SAS port failure

---

### Q24. GSLB performs load balancing at the level of: *(Understand)*
A. Layer 2 frames
B. DNS resolution — directing clients to different regional sites
C. ARP
D. TCP retransmissions

---

### Q25. A server with two NICs in a team set to **active/passive (failover)** mode: *(Understand)*
A. Aggregates both NICs' bandwidth
B. Uses one NIC; the other is a hot standby and takes over if the primary dies
C. Requires LACP
D. Cannot fail over

---

### Q26. *Design exercise.* You are designing the network for one rack: 4 hypervisor hosts + 1 SAN + 1 pair of top-of-rack switches. Requirements: (a) no single NIC/switch failure should drop a host's network; (b) storage VLAN must reach line rate; (c) management traffic must not mix with production VLANs; (d) live migration must work between hosts without saturating production. Pick the design: *(Create)*

A. Single switch, single NIC per host, default MTU, all VLANs collapsed into one
B. **Pair of top-of-rack switches (MLAG)**; each host has 4× 25 GbE — two teamed via LACP for production trunk (VLANs 10, 20), two teamed via LACP for storage trunk (VLAN 30, MTU 9000); dedicated iDRAC port on VLAN 99; vMotion on its own VLAN 40 (MTU 9000)
C. One server with one NIC; cross-connect to SAN via crossover cable
D. All NICs in failover mode only, single VLAN

---

## 🎯 Answers + Explanations

### Q1: **C. 802.3ad / 802.1AX**
LACP was originally 802.3ad; moved to 802.1AX in the 2008 standards revision.

### Q2: **B. 1500 bytes**
Standard Ethernet MTU. Higher values are "jumbo."

### Q3: **C. 9000 bytes (sometimes up to 9216)**
9000 is the common ceiling; some vendors allow up to 9216 for header overhead.

### Q4: **B. The switch ports be configured in the same Link Aggregation Group (LAG) with LACP enabled**
LACP is a partnership protocol. Both ends must be configured. Without the switch-side LAG, the team falls back to active/passive or doesn't form.

### Q5: **B. Carries multiple VLANs and tags them per 802.1Q**
Trunk = multi-VLAN tagged. Access = single VLAN untagged.

### Q6: **B. To reduce per-packet overhead and CPU interrupts, improving throughput for large transfers**
Storage transfers benefit; user-facing LAN does not.

### Q7: **B. Performance degradation and possibly black-holed connections (packets dropped)**
Mismatched MTU + DF (Don't Fragment) bit + blocked PMTUD ICMP = silent drops. Worse than not enabling at all.

### Q8: **C. IP address and TCP/UDP port**
L4 only sees the transport-layer 5-tuple.

### Q9: **A. Inspect and route based on HTTP host, path, header, cookie**
L7 parses the application protocol.

### Q10: **B. L7 LB with SSL termination / offload**
SSL termination requires the LB to decrypt — by definition L7 (parses TLS handshake + app data).

### Q11: **B. Distributes connections evenly across backends in order**
Round-robin = fair, blind to backend load.

### Q12: **A. NDP (Neighbor Discovery Protocol)**
NDP replaces ARP in IPv6 (and adds router/prefix discovery).

### Q13: **B. Generate its own IPv6 address from a router-advertised prefix plus an interface identifier**
SLAAC = stateless. Router advertises prefix; host generates the interface ID (EUI-64 or random).

### Q14: **B. Missing IPv6 firewall rule — IPv6 traffic blocked by default-deny**
Most common dual-stack oversight. Always write IPv6 rules alongside IPv4.

### Q15: **B. A single 5-tuple flow hashes to one NIC; aggregation only spreads across multiple flows**
LACP/teaming load-balances *flows*, not packets. A single huge flow still uses one NIC.

### Q16: **B. SET (Switch Embedded Teaming)**
SET is the modern Windows teaming for Hyper-V converged designs (replaces LBFO for Hyper-V vSwitch).

### Q17: **A. `bonding` driver (or modern `teamd`)**
Kernel bonding is classic; teamd is the newer userspace alternative.

### Q18: **B. Skips STP listen/learn for server/edge-host ports, so the port forwards immediately after link-up**
Without PortFast, a server waits ~30 seconds for STP convergence at boot — manifests as "DHCP failed" or "PXE boot timeout."

### Q19: **B. Remote control via IP**
Both are "managed" devices exposing per-port control over IP.

### Q20: **C. Cat 6A**
10 GbE over copper at 100 m needs Cat 6A. Cat 6 supports 10 GbE at shorter distances.

### Q21: **B. A dedicated management VLAN, unreachable from production user networks**
OOB is sacred. Never internet-exposed. Never on the same VLAN as production users.

### Q22: **B. SFP28 DAC**
25 GbE short runs commonly use SFP28 DAC (passive twinax). Longer runs use SFP28 transceivers + OM4/OS2 fiber.

### Q23: **B. MTU mismatch somewhere in the path (server vs switch vs storage)**
Storage symptoms after a network change → check MTU first.

### Q24: **B. DNS resolution — directing clients to different regional sites**
GSLB returns geo-aware DNS responses; it's an L7-conceptually-but-via-DNS solution.

### Q25: **B. Uses one NIC; the other is a hot standby and takes over if the primary dies**
Active/passive = no aggregation; just failover.

### Q26: **B. Pair of top-of-rack switches (MLAG)…**
Every requirement is satisfied: MLAG + cross-switch teaming = NIC/switch redundancy; dedicated storage NICs + MTU 9000 = line rate; VLAN segregation + dedicated mgmt + vMotion VLAN. Options A, C, D fail multiple requirements.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 7 mastered.
- 21–24/26 → ✅ Solid.
- 17–20/26 → ⚠️ Re-read teaming + MTU sections.
- <17/26 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- NIC teaming modes + LACP switch requirement
- 802.1Q trunk vs access ports
- MTU 1500 vs 9000 + end-to-end rule
- IPv6 dual-stack + NDP + firewall rule pairs
- L4 vs L7 LB + SSL termination
- LB algorithms (round-robin, least-conn, source-IP hash)
- GSLB = DNS-level geo routing
- PortFast / edge port
- Mgmt VLAN segregation rule

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8 — Troubleshooting & Documentation](../Module-08-Troubleshooting/Reading.md)
