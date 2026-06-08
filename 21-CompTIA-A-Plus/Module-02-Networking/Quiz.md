# ✏️ Module 2 Quiz: Networking Fundamentals

> Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26.
>
> **Bloom distribution:** Remember 7 · Understand 6 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Which Ethernet category supports 10 Gbps over the full 100m? *(Remember)*
A. Cat 5e
B. Cat 6
C. Cat 6a
D. Cat 3

---

### Q2. Default port for HTTPS? *(Remember)*
A. 80
B. 443
C. 8080
D. 22

---

### Q3. DHCP uses which transport protocol and which ports? *(Remember)*
A. TCP, 80 and 443
B. UDP, 67 and 68
C. TCP, 67 and 68
D. UDP, 53 and 123

---

### Q4. A user's PC has IP address 169.254.42.10 / 16. What does this MOST likely indicate? *(Apply)*
A. The PC has a valid public IP
B. The PC has been manually configured by IT
C. APIPA, the PC failed to reach a DHCP server
D. The PC is on a Cisco device

---

### Q5. The standard for terminating an RJ-45 with the orange pair on pins 1-2 is: *(Remember)*
A. T568A
B. T568B
C. EIA-422
D. Cat 6

---

### Q6. SMB shares are accessed over which port? *(Remember)*
A. 137
B. 139
C. 445
D. 21

---

### Q7. A user can reach websites by IP address (e.g. `8.8.8.8`) but not by hostname. The MOST likely cause is: *(Apply)*
A. The default gateway is wrong
B. DNS resolution is failing
C. The MAC address is wrong
D. The cable is damaged

---

### Q8. RDP (Windows Remote Desktop) uses which default port? *(Remember)*
A. 22
B. 23
C. 3389
D. 5900

---

### Q9. Which Wi-Fi standard introduced operation in the 6 GHz band? *(Understand)*
A. 802.11n (Wi-Fi 4)
B. 802.11ac (Wi-Fi 5)
C. 802.11ax (Wi-Fi 6E)
D. 802.11g

---

### Q10. The MOST appropriate non-overlapping channels for 2.4 GHz are: *(Remember)*
A. 1, 6, 11
B. 1, 5, 10
C. 36, 40, 44
D. 1, 2, 3

---

### Q11. The OSI layer that handles MAC addresses is: *(Understand)*
A. Physical (Layer 1)
B. Data Link (Layer 2)
C. Network (Layer 3)
D. Transport (Layer 4)

---

### Q12. A switch operates primarily at which OSI layer? *(Understand)*
A. Layer 1
B. Layer 2
C. Layer 3
D. Layer 4

---

### Q13. The MOST important reason to disable Telnet (port 23) at the perimeter is: *(Analyze)*
A. It's incompatible with IPv6
B. It transmits credentials in clear text and is easily harvested by botnets
C. It uses too much bandwidth
D. It blocks email

---

### Q14. SSH replaces Telnet for: *(Apply)*
A. Web browsing
B. Encrypted remote shell on port 22
C. File compression
D. DHCP

---

### Q15. A user complains the Wi-Fi at home keeps dropping near the kitchen, but the rest of the house is fine. The MOST likely cause: *(Analyze)*
A. The router needs a firmware update
B. 2.4 GHz interference from the microwave + other 2.4 GHz devices
C. The ISP throttles kitchen traffic
D. The phone is broken

---

### Q16. WPA3 IMPROVES on WPA2 primarily by: *(Understand)*
A. Using SAE (Simultaneous Authentication of Equals) which resists offline brute-force on captured handshakes
B. Increasing the SSID character limit
C. Removing AES
D. Disabling 5 GHz

---

### Q17. The role of a default gateway is: *(Understand)*
A. To resolve DNS
B. To forward off-network traffic between subnets / to the internet
C. To assign IPs to clients
D. To perform Wi-Fi handshakes

---

### Q18. RFC 1918 private IP ranges include all EXCEPT: *(Remember)*
A. 10.0.0.0/8
B. 172.16.0.0/12
C. 192.168.0.0/16
D. 169.254.0.0/16

---

### Q19. A user on a SOHO network needs to host a public game server. Which feature does the IT team enable on the router to direct inbound traffic to the user's PC? *(Apply)*
A. NAT
B. DMZ host (or port forwarding)
C. Disable firewall
D. Switch to UDP

---

### Q20. Which Wi-Fi tool helps you visualize which channels are crowded and pick a clean one? *(Apply)*
A. Cable tester
B. Wi-Fi analyzer
C. Punch-down tool
D. Loopback plug

---

### Q21. A Cat 6 cable run is measured at 80m and configured for 10 Gbps. Is this likely to work? *(Analyze)*
A. Yes, Cat 6 handles 10 Gbps to 100m
B. No, Cat 6 supports 10 Gbps only up to ~55m; Cat 6a is needed for 100m
C. Yes, Cat 6 is fiber
D. No, Cat 6 maxes at 100 Mbps

---

### Q22. Which TCP/IP utility provides the route packets take, hop by hop? *(Remember)*
A. ping
B. tracert / traceroute
C. nslookup
D. netstat

---

### Q23. Single-mode fiber (SMF) is preferred over multi-mode fiber (MMF) when: *(Understand)*
A. Cost is the highest priority
B. The link distance is long (km-range) and you need maximum bandwidth
C. The link is inside one server rack
D. The fiber is in a noisy electrical environment

---

### Q24. The MOST appropriate tool to trace where a specific cable terminates in a patch panel is: *(Apply)*
A. Multimeter
B. Tone generator + probe
C. Cable certifier
D. RJ-45 crimper

---

### Q25. A user complains that an internal application server is unreachable, but DNS resolves correctly and the firewall is open. `tracert` shows packets dying at the user's PC's own gateway. The MOST likely culprit: *(Evaluate)*
A. The internet ISP is down
B. The user's default gateway is misconfigured or the gateway router has a routing problem
C. The internal application server's SSL certificate expired
D. APIPA is in use

---

### Q26. Design challenge: A 25-person dental office wants its Wi-Fi to keep guest patients isolated from the back-office network containing the dental imaging server. The MINIMUM viable architecture is: *(Create)*

> *Create-level note:* you are picking the *combination* of features that achieves the goal.
A. One single SSID for everyone
B. Two SSIDs / VLANs, one guest (no LAN access), one staff (with LAN access); both on the same AP using VLAN tagging
C. Use POP3 instead of IMAP
D. Disable the firewall

---

## 🎯 Answers + Explanations

### Q1: **C. Cat 6a**
Cat 6 supports 10G only over 55m max; Cat 6a does the full 100m at 10G with a thicker jacket for better crosstalk.

### Q2: **B. 443**
HTTP = 80, HTTPS = 443. Memorize the pair.

### Q3: **B. UDP, 67 and 68**
DHCP server listens on UDP 67; client on UDP 68. The DORA exchange happens over these.

### Q4: **C. APIPA, the PC failed to reach a DHCP server**
169.254.0.0/16 is the APIPA self-assigned range when Windows can't find DHCP.

### Q5: **B. T568B**
T568B has orange pair on pins 1-2 (orange-white / orange). T568A has green there.

### Q6: **C. 445**
SMB (Server Message Block) uses TCP 445. Don't confuse with NetBIOS (137-139).

### Q7: **B. DNS resolution is failing**
IP works → routing is fine. Name doesn't → DNS is broken or unreachable.

### Q8: **C. 3389**
Microsoft Remote Desktop Protocol (RDP) = 3389. VNC = 5900. SSH = 22.

### Q9: **C. 802.11ax (Wi-Fi 6E)**
Wi-Fi 6E added the 6 GHz band on top of 802.11ax operation in 2.4/5 GHz. Wi-Fi 7 (802.11be) also uses 6 GHz.

### Q10: **A. 1, 6, 11**
These three 20-MHz-wide channels do not overlap in 2.4 GHz. Other adjacent channels do overlap.

### Q11: **B. Data Link (Layer 2)**
MAC addresses live at L2. IP at L3. Switches forward by MAC (L2); routers by IP (L3).

### Q12: **B. Layer 2**
A traditional switch is a L2 device. Multi-layer switches add L3 routing.

### Q13: **B. Clear-text credentials → easily harvested by botnets**
Mirai (2016) and many others scanned for Telnet with default credentials. Telnet must be off everywhere.

### Q14: **B. Encrypted remote shell on port 22**
SSH = Secure SHell, port 22, encrypted, replaces Telnet.

### Q15: **B. 2.4 GHz interference**
Microwave ovens are 2.4 GHz. Add Bluetooth + neighbors' Wi-Fi → noise floor rises. Try 5 GHz.

### Q16: **A. SAE replaces 4-way PSK handshake → resists offline brute force**
WPA3's SAE handshake (Dragonfly) makes captured handshakes useless for offline cracking, a major WPA2 weakness.

### Q17: **B. Forward off-network traffic**
The default route. If the destination is not on the local subnet, the host sends the packet to the gateway.

### Q18: **D. 169.254.0.0/16**
That's APIPA, not RFC 1918. RFC 1918 = 10/8, 172.16/12, 192.168/16.

### Q19: **B. DMZ host (or port forwarding)**
DMZ host or specific port forwarding rules direct inbound NAT to a specific internal host. DMZ host is "all", port forwarding is "selective" (safer).

### Q20: **B. Wi-Fi analyzer**
Apps like WiFi Analyzer (Android), inSSIDer, NetSpot show SSIDs by channel and signal strength.

### Q21: **B. No, Cat 6 supports 10 Gbps only up to ~55m; Cat 6a needed for 100m**
This is the most-asked Cat 6 vs Cat 6a question.

### Q22: **B. tracert / traceroute**
Shows each L3 hop. ping just measures round-trip.

### Q23: **B. Long distance + max bandwidth**
SMF uses laser light through a tiny 9 μm core, supporting kilometer-scale links. MMF uses LED/VCSEL through 50/62.5 μm core, shorter distances.

### Q24: **B. Tone generator + probe**
The toner injects a signal on one end; the probe finds it on the other. Standard cable-tracing tool.

### Q25: **B. The user's default gateway is misconfigured or has a routing problem**
Tracert dying at the first hop = gateway issue. DNS, firewall, cert all fine because we already ruled them out.

### Q26: **B. Two SSIDs / VLANs**
Multi-SSID with VLAN tagging is the modern dental-office (and every-SMB) setup. Guests get internet only; staff get internet + LAN.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Networking solid. Onward to hardware.
- 22–24/26 → ✅ Good. Review the ports table once more.
- 18–21/26 → ⚠️ Re-read the ports + IPv4 sections.
- <18/26 → 🔁 Restart the Reading.md. Networking is foundational.

---

## 🃏 Add To Your Flashcards

- Every port number in the Reading.md table
- Cat 5e/6/6a speeds AND distances
- T568A vs T568B colors
- DHCP DORA process + UDP 67/68
- APIPA = 169.254.x.x
- RFC 1918 private ranges
- OSI layer = device mapping (hub=L1, switch=L2, router=L3)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3, Hardware](../Module-03-Hardware/Reading.md)
