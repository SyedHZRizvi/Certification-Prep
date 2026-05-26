# ✏️ Module 2 Quiz: TCP/IP & Subnetting

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**. **Subnetting questions are Apply level — get scratch paper.**
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 6 · Apply 11 · Analyze/Evaluate 3 · Create 1.

---

## Questions

### Q1. Which of the following is a private (RFC 1918) IPv4 address? *(Remember)*
A. 172.32.10.5
B. 172.16.10.5
C. 192.169.1.5
D. 11.0.0.1

---

### Q2. The default subnet mask for a Class C network is: *(Remember)*
A. 255.0.0.0
B. 255.255.0.0
C. 255.255.255.0
D. 255.255.255.128

---

### Q3. APIPA addresses fall in the range: *(Remember)*
A. 10.0.0.0/8
B. 169.254.0.0/16
C. 172.16.0.0/12
D. 192.168.0.0/16

---

### Q4. The IPv4 loopback address is: *(Remember)*
A. 0.0.0.0
B. 127.0.0.1
C. 169.254.0.1
D. 255.255.255.255

---

### Q5. CIDR /22 in dotted-decimal mask is: *(Apply)*
A. 255.255.252.0
B. 255.255.255.252
C. 255.255.254.0
D. 255.252.0.0

---

### Q6. How many usable host addresses does a /27 subnet provide? *(Apply)*
A. 32
B. 30
C. 16
D. 14

---

### Q7. What is the network ID of the host `192.168.10.150/26`? *(Apply)*
A. 192.168.10.0
B. 192.168.10.64
C. 192.168.10.128
D. 192.168.10.192

---

### Q8. What is the broadcast address of the subnet `10.20.30.0/28`? *(Apply)*
A. 10.20.30.15
B. 10.20.30.16
C. 10.20.30.31
D. 10.20.30.255

---

### Q9. Which CIDR mask is best for a point-to-point WAN link with exactly 2 usable hosts? *(Apply)*
A. /28
B. /29
C. /30
D. /31

---

### Q10. The host `172.16.150.20/22` is in what subnet? *(Apply)*
A. 172.16.144.0/22
B. 172.16.148.0/22
C. 172.16.150.0/22
D. 172.16.152.0/22

---

### Q11. How many usable hosts in `172.16.148.0/22`? *(Apply)*
A. 510
B. 1,022
C. 2,046
D. 4,094

---

### Q12. A user's laptop self-assigns `169.254.5.5/16`. This indicates: *(Understand)*
A. DHCP succeeded
B. DHCP failed; the OS used APIPA
C. The user is on a Class B network
D. The user's NIC is misconfigured

---

### Q13. Network Address Translation (NAT) translates: *(Understand)*
A. MAC addresses to IP addresses
B. IP addresses (and optionally ports) between networks
C. DNS names to IPs
D. Application data formats

---

### Q14. Port Address Translation (PAT) allows: *(Understand)*
A. One public IP to be shared by many internal IPs using port numbers
B. One internal IP to be shared by many public IPs
C. Static one-to-one mapping only
D. Translation without any port awareness

---

### Q15. Which IPv6 address is link-local? *(Understand)*
A. 2001:db8::1
B. FE80::1
C. FF02::1
D. ::1

---

### Q16. What does IPv6 use instead of broadcast for "all nodes on the segment"? *(Understand)*
A. 2001:db8::ffff
B. FF02::1 (all-nodes multicast)
C. 0.0.0.0
D. FE80::ffff

---

### Q17. The IPv6 address `2001:0db8:0000:0000:0000:0000:0000:0001` compressed correctly is: *(Apply)*
A. 2001:db8::1
B. 2001:db8::0:1
C. 2001::db8::1
D. 2001:0db8::0000:0001

---

### Q18. SLAAC stands for and means: *(Remember)*
A. Stateless Address Auto-Configuration — IPv6 host self-generates address from router advertisement
B. Simple Local Address Allocation Configuration
C. Subnet Layer Allocation and Assignment Control
D. Stateful Local Address Acquisition Component

---

### Q19. An IPv4 host has IP `203.0.113.45`, mask `255.255.255.224`. What is the **broadcast** for this subnet? *(Apply)*
A. 203.0.113.31
B. 203.0.113.63
C. 203.0.113.95
D. 203.0.113.255

---

### Q20. EUI-64 generates the host portion of an IPv6 address by: *(Understand)*
A. Random number generation
B. Taking the MAC, inserting FF:FE in the middle, and flipping the 7th bit of the first byte
C. Combining the prefix with the IPv4 address
D. Hashing the MAC with SHA-256

---

### Q21. A network admin needs 4 subnets supporting at least 50 hosts each from `192.168.1.0/24` using VLSM. The smallest mask that fits each is: *(Apply)*
A. /28
B. /27
C. /26
D. /25

---

### Q22. A network has been allocated `10.0.0.0/24`. The admin uses VLSM to assign:
- LAN A: 100 hosts
- LAN B: 50 hosts
- WAN P2P: 2 hosts

After allocating largest-first, which mask fits LAN A's requirement most efficiently? *(Apply)*
A. /24
B. /25
C. /26
D. /27

---

### Q23. A home router lets the homeowner stream Netflix on a TV, browse on a laptop, and game on a phone simultaneously, all sharing one ISP-provided public IP. The technology making this possible is: *(Analyze)*
A. Static NAT
B. PAT (NAT overload)
C. APIPA
D. SLAAC

---

### Q24. An IPv6-only client wants to reach an IPv4-only legacy server. The most appropriate transition technology is: *(Analyze)*
A. Dual stack
B. 6in4 tunneling
C. NAT64 / DNS64
D. APIPA

---

### Q25. A network engineer assigns `192.168.50.255/24` to a server's NIC. The server cannot communicate. The MOST likely problem is: *(Analyze)*
A. The IP is the broadcast address of 192.168.50.0/24 and cannot be assigned to a host
B. /24 is invalid for this IP
C. 192.168.50.0/24 is not a private range
D. The mask should be /25

---

### Q26. A senior network engineer is designing a CGNAT solution for an ISP and asks you which special-purpose CIDR block is reserved exclusively for carrier-grade NAT. The correct answer — and one operational caveat you'd flag — is: *(Create)*

> *Create-level note:* you are choosing an architectural address block and proactively naming a downside the architect should anticipate.
A. 192.168.0.0/16 — caveat: overlaps subscriber CPE
B. 169.254.0.0/16 — caveat: short TTL on APIPA
C. 100.64.0.0/10 (RFC 6598) — caveat: subscribers cannot run inbound services like game-server hosting or self-hosted apps because they're double-NATted
D. 224.0.0.0/4 — caveat: multicast-only routing required

---

## 🎯 Answers + Explanations

### Q1: **B. 172.16.10.5**
RFC 1918 private ranges: 10/8, 172.16/12 (172.16.x.x–172.31.x.x), 192.168/16. 172.32.x.x is public. 192.169.1.5 is public. 11.0.0.1 is public.

### Q2: **C. 255.255.255.0**
Class C default = /24 = 255.255.255.0. Class A = /8 = 255.0.0.0. Class B = /16 = 255.255.0.0.

### Q3: **B. 169.254.0.0/16**
APIPA (RFC 3927) is 169.254.0.0 through 169.254.255.255.

### Q4: **B. 127.0.0.1**
Most common loopback. The whole 127.0.0.0/8 is reserved.

### Q5: **A. 255.255.252.0**
/22 = 22 ones. First 16 bits = 255.255. Next 6 bits in the third octet = `11111100` = 252. Fourth octet = 0.

### Q6: **B. 30**
/27 has 32 host bits to mask... wait — /27 has 5 host bits (32−27=5). 2⁵ − 2 = 30.

### Q7: **C. 192.168.10.128**
/26 = mask 255.255.255.192. Block size = 256−192 = 64. Multiples of 64 in 4th octet: 0, 64, 128, 192. 150 falls in the 128–191 block → network = 192.168.10.128.

### Q8: **A. 10.20.30.15**
/28 = mask 255.255.255.240. Block size = 16. Multiples of 16: 0, 16, 32, … Network = 10.20.30.0; next network = .16; broadcast = .15.

### Q9: **C. /30**
/30 gives 4 addresses: network, host1, host2, broadcast = exactly 2 usable. /31 (RFC 3021) is also used for P2P with both addresses usable, but on CompTIA exams the textbook P2P answer is /30.

### Q10: **B. 172.16.148.0/22**
/22 mask = 255.255.252.0. Interesting octet = 3rd. Block size = 4. Multiples of 4 in 3rd octet: 0, 4, 8, …, 144, 148, 152. 150 falls in the 148–151 block → network = 172.16.148.0/22.

### Q11: **B. 1,022**
/22 has 10 host bits (32−22 = 10). 2¹⁰ − 2 = 1024 − 2 = 1,022.

### Q12: **B. DHCP failed; the OS used APIPA**
169.254.x.x = APIPA, auto-assigned when DHCP doesn't respond. The host is link-local only; cannot reach the Internet.

### Q13: **B. IP addresses (and optionally ports) between networks**
NAT rewrites the source/destination IPs (and ports if PAT) as packets cross the NAT device.

### Q14: **A. One public IP to be shared by many internal IPs using port numbers**
PAT (Port Address Translation, aka NAT overload) — uses unique source ports to multiplex many internal hosts onto one public IP.

### Q15: **B. FE80::1**
FE80::/10 = link-local. ::1 = loopback. FF02::1 = all-nodes multicast. 2001:db8::1 = a documentation prefix (RFC 3849), used as global unicast example.

### Q16: **B. FF02::1 (all-nodes multicast)**
IPv6 has no broadcast. FF02::1 is the all-nodes multicast equivalent (everyone on the link joins this group).

### Q17: **A. 2001:db8::1**
Compress leading zeros in each group; collapse the run of all-zero groups with `::` (only once). `2001:0db8:0:0:0:0:0:1` → `2001:db8::1`.

### Q18: **A. Stateless Address Auto-Configuration**
The host generates its own IPv6 address using the router's advertised prefix + EUI-64 (or random) host bits. No server needed.

### Q19: **B. 203.0.113.63**
Mask /27. Block size = 32. 4th octet 45 → block 32–63 → broadcast = .63.

### Q20: **B. Insert FF:FE + flip 7th bit**
The EUI-64 mechanism. Note: many modern stacks use random (privacy) addresses instead, but EUI-64 is what Network+ tests.

### Q21: **C. /26**
4 subnets of ≥50 hosts. /26 = 62 usable hosts (2⁶ − 2 = 62), fits 50. Four /26s from a /24 = 4 × 64 = 256 addresses exactly. /27 = 30 hosts — too small. /25 = 126 hosts — works but only two subnets fit in a /24.

### Q22: **B. /25**
LAN A needs 100 hosts. /25 = 126 usable (2⁷ − 2). /24 = 254 — works but wastes addresses (and uses all of the /24, leaving nothing for LAN B). /26 = 62 — too small. **Pick the smallest mask that fits.**

### Q23: **B. PAT (NAT overload)**
PAT is exactly this scenario — many internal hosts, one public IP, differentiated by port numbers.

### Q24: **C. NAT64 / DNS64**
NAT64 translates between IPv4 and IPv6 at the network edge; DNS64 synthesizes AAAA records from A records. Dual stack requires both protocols on both sides — not possible with an IPv4-only server.

### Q25: **A. 192.168.50.255/24 is the broadcast address of 192.168.50.0/24**
.255 in a /24 = the broadcast — reserved, cannot be assigned to a host NIC.

### Q26: **C. 100.64.0.0/10 (RFC 6598)**
Carrier-Grade NAT reserved space. Real operational caveat: subscribers behind CGNAT cannot receive unsolicited inbound connections (no port forwarding from the public Internet to their devices) — breaking self-hosting, some game servers, and some peer-to-peer apps.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Subnetting mastered. Add 5 fresh drills/day and you're set.
- 22–24/26 → ✅ Solid. Re-do the subnetting questions (any you missed) — keep that muscle warm.
- 18–21/26 → ⚠️ Re-read the 4-step subnetting workflow + worked examples. Drill 10 problems/day for 3 days.
- <18/26 → 🔁 Restart the Reading.md. Subnetting must be reflex before the exam.

---

## 🃏 Add To Your Flashcards

- RFC 1918 private ranges (10/8, 172.16/12, 192.168/16)
- Special-purpose ranges (127/8 loopback, 169.254/16 APIPA, 100.64/10 CGNAT)
- Magic mask values: 128, 192, 224, 240, 248, 252, 254, 255
- Block size formula: 256 − mask-octet
- Host count formula: 2^(host bits) − 2
- IPv6 prefixes: ::1 loop, FE80::/10 link-local, FC00::/7 ULA, FF00::/8 multicast, 2000::/3 global
- NAT vs PAT vs port forwarding

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3 — Routing & Switching](../Module-03-Routing-Switching/Reading.md)
