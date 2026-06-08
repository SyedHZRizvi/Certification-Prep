# ✏️ Module 8 Quiz: Network Troubleshooting Methodology

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**. **Methodology questions are heavily tested, drill them.**
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 6 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The CORRECT order of the CompTIA 7-step troubleshooting methodology starts with: *(Remember)*
A. Establish a theory
B. Identify the problem
C. Implement the solution
D. Verify full system functionality

---

### Q2. After testing a theory and CONFIRMING it, the next step is: *(Remember)*
A. Establish a plan of action
B. Document findings
C. Establish a new theory
D. Verify functionality

---

### Q3. The LAST step of the methodology is: *(Remember)*
A. Verify full functionality
B. Implement the solution
C. Document findings, actions, and outcomes
D. Establish a new theory

---

### Q4. A user's PC shows IP `169.254.10.5`. This indicates: *(Remember)*
A. The IP is statically assigned
B. DHCP failed; the OS auto-assigned APIPA
C. The PC is on the wrong VLAN by design
D. The DNS server is misconfigured

---

### Q5. A TDR (Time-Domain Reflectometer) is BEST used to: *(Remember)*
A. Measure Wi-Fi signal strength
B. Locate the distance to a fault in a copper cable
C. Test SNMP polling
D. Capture packets

---

### Q6. Cat6 supports 10 GbE up to approximately how many meters? *(Remember)*
A. 100 m
B. 55 m
C. 30 m
D. 1 km

---

### Q7. The MOST appropriate approach when the symptom is a "page won't load" application-layer issue is: *(Understand)*
A. Bottom-up OSI (start at Layer 1)
B. Top-down OSI (start at Layer 7)
C. Divide-and-conquer always
D. Don't apply OSI at all

---

### Q8. Duplex mismatch typically presents as: *(Understand)*
A. Total loss of connectivity
B. Connectivity works but throughput collapses with collisions, errors, and dropped packets
C. APIPA assignment
D. STP loop

---

### Q9. A broadcast storm typically results from: *(Understand)*
A. A Layer 2 loop without STP (or STP disabled)
B. Too much DNS traffic
C. SNMP polling
D. A WPA3 misconfiguration

---

### Q10. When a fix worked but you didn't tell the user or check for new side effects, you skipped: *(Understand)*
A. Step 1, Identify
B. Step 5, Implement
C. Step 6, Verify full system functionality
D. Step 7, Document

---

### Q11. Documenting findings, actions, and outcomes is critical because: *(Understand)*
A. It's not, it's optional
B. The next technician (or future you) needs the context; it builds the KB and informs RCA
C. CompTIA requires it for the cert
D. It satisfies HIPAA only

---

### Q12. A user's PC shows full connectivity to `google.com` but cannot reach `intranet.corp.local`. The MOST efficient theory approach is: *(Apply)*
A. Bottom-up (Layer 1)
B. Divide-and-conquer (test L3 to the specific server, DNS, internal firewall)
C. Reformat the PC
D. Replace the cable

---

### Q13. A wall-port "just stopped working." The user's laptop works on other ports. The MOST likely L1/L2 cause to test FIRST is: *(Apply)*
A. Firewall rule change
B. Bad cable, dead port, or disabled port, swap cable, try another port, check switch port config
C. DNS resolver failure
D. STP root re-election

---

### Q14. A team performs a firewall change. Suddenly remote users can't reach a specific app. The change is suspect. The CORRECT 7-step response is: *(Apply)*
A. Reboot all firewalls
B. Identify the symptom, hypothesize the change is responsible, test by reviewing logs / reverting in a test, plan rollback, implement, verify, document
C. Replace the firewall
D. Wait until next maintenance window without notifying users

---

### Q15. A switch reports the same MAC `00:1a:2b:3c:4d:5e` on ports 1, 5, and 12 within seconds. The MOST likely root cause is: *(Apply)*
A. A Layer 2 loop or duplicate MAC
B. APIPA assignment
C. DNS poisoning
D. SNMP misconfiguration

---

### Q16. A wireless VoIP call drops every time the user crosses from the lobby to the conference room. APs share an SSID, RSSI is fine in both rooms. The MOST likely root cause is: *(Apply)*
A. Sticky-client / no 802.11r fast transition
B. Wrong WPA passphrase
C. PoE failure
D. STP loop

---

### Q17. An engineer changes an interface IP on a remote router and instantly loses SSH access. The recovery method is: *(Apply)*
A. Wait for DHCP to fix it
B. Console (serial) cable directly to the router, OR connect via out-of-band management network
C. ipconfig /renew
D. Email the vendor

---

### Q18. A path-MTU issue is suspected: clients with VPN traffic occasionally hang. On Windows you can test the max payload that traverses without fragmentation using: *(Apply)*
A. `ping -l 1472 -f <ip>` (don't-fragment + payload size)
B. `tracert -f`
C. `nslookup -mtu`
D. `arp -mtu`

---

### Q19. A "fix it now" change in production without staging or rollback caused a 6-hour outage. The MOST appropriate methodology change for the future is: *(Apply)*
A. Always reboot first
B. Pre-stage in a non-prod environment + impact analysis + change-management approval + documented rollback before any prod change
C. Use only SNMPv1
D. Disable monitoring during changes

---

### Q20. A frame-flooded LAN with STP disabled rapidly becomes unusable. The single architectural change with the biggest blast-radius reduction is: *(Analyze)*
A. Disable IPv6
B. Re-enable STP (or RSTP), correctly configure root bridge, enable BPDU Guard on access ports
C. Replace switches with hubs
D. Add more bandwidth

---

### Q21. After implementing a fix you have NOT yet verified, the most appropriate next action is: *(Analyze)*
A. Close the ticket
B. Verify end-to-end functionality (Step 6), and only then document and close
C. Implement another fix in case
D. Open a new ticket

---

### Q22. A user reports `ping example.com` fails. From a Linux box, `ping 142.250.190.78` (one of example.com's IPs) succeeds, and `dig example.com @8.8.8.8` succeeds. The MOST LIKELY problem is: *(Analyze)*
A. Their default resolver / DNS path is broken (Linux box can hit 8.8.8.8 but the user can't, or local resolver returns NXDOMAIN)
B. ICMP is blocked
C. They have no IP
D. The cable is bad

---

### Q23. A VPN-connected user reports their TLS sessions to internal HTTPS apps fail with certificate errors after 5 minutes. The most likely root cause is: *(Analyze)*
A. WPA3 mismatch
B. Clock skew, the VPN client lost NTP sync; certificate validity windows fail
C. DNS poisoning
D. STP root election

---

### Q24. The Meta (Facebook) October 2021 outage took 6 hours because: *(Analyze)*
A. The attack was too sophisticated to mitigate
B. The maintenance command withdrew DNS routes globally AND internal auth tooling depended on the same DNS, engineers couldn't log in remotely, and physical badge systems were affected; recovery required on-site console access
C. SNMP polling failed
D. The data center burned down

---

### Q25. A Wireshark capture during a "slow web app" complaint shows many `TCP Retransmission` packets and `Duplicate ACK` events. The PRIMARY indication is: *(Understand)*
A. DNS poisoning
B. Packet loss along the network path (saturated link, faulty cable/port, congested queue)
C. WPA3 cracking
D. SMTP misconfiguration

---

### Q26. You're a new network manager. Your team consistently skips Step 7 (Document). Define the SINGLE most impactful policy you'd implement to fix this. *(Create)*

> *Create-level note:* you're proposing a managerial / cultural fix to a methodology gap.
A. "Punish techs for missing tickets."
B. "Mandate that no ticket can be closed without a documented root cause + actions taken + verification evidence, and tie the team's KPI to KB-article growth + ticket reopen rate, making documentation a measured outcome rather than a nice-to-have."
C. "Send everyone to training."
D. "Replace the ticket system."

---

## 🎯 Answers + Explanations

### Q1: **B. Identify the problem**
Step 1 is always "Identify the problem." The methodology never starts with implementation or theory.

### Q2: **A. Establish a plan of action**
After confirmation (step 3), you plan (step 4), then implement (step 5), then verify (step 6), then document (step 7). If the theory had been *refuted*, you'd return to step 2 (new theory) or escalate.

### Q3: **C. Document findings, actions, and outcomes**
Step 7, always the last. Skipping it is the most common anti-pattern CompTIA tests.

### Q4: **B. DHCP failed; APIPA**
169.254.x.x is APIPA. Hosts are link-local-only and cannot route.

### Q5: **B. Locate distance to a cable fault**
TDR sends a pulse down the cable and measures the reflection to identify the distance to a break/short. OTDR does the same for fiber.

### Q6: **B. 55 m**
Cat6 supports 10 GbE only up to 55 m. Cat6a supports 10 GbE to the full 100 m.

### Q7: **B. Top-down OSI**
For application-layer symptoms (page won't load, app slow), starting at L7 finds DNS/cert/HTTP issues fast without first eliminating cables/switches.

### Q8: **B. Throughput collapses with errors**
Duplex mismatch is the classic "it works but slowly with errors" pattern. Connectivity is fine; throughput is destroyed by collisions and re-transmits.

### Q9: **A. L2 loop without STP**
Without STP (or with STP disabled), L2 loops multiply broadcast frames endlessly, saturating the network.

### Q10: **C. Step 6, Verify**
The "fix worked but didn't verify" pattern is the canonical Step 6 skip.

### Q11: **B. Next tech needs context + KB + RCA**
Documentation has two audiences: the next tech and the post-incident review. Without it, every recurring issue is solved from scratch.

### Q12: **B. Divide-and-conquer**
Internet works (rules out L1-L4 to outside), Google works (rules out general DNS + browser). The specific failure point is internal, DNS for the internal name, the internal route, or the app/server. Bisect.

### Q13: **B. Cable / port / port config**
L1-L2 first when "one port doesn't work." Swap cable, swap port, check VLAN/duplex/speed/port-security.

### Q14: **B. Identify, hypothesize, test, plan rollback, implement, verify, document**
The textbook methodology answer. Especially relevant: revert in test before reverting in prod; verify after each step.

### Q15: **A. Layer 2 loop or duplicate MAC**
A single MAC appearing on multiple ports = MAC flapping = loop or duplicate MAC. Investigate cabling, STP, and any newly added rogue switches.

### Q16: **A. Sticky-client / no 802.11r**
Classic roaming failure. Enable 802.11k/v/r assisted roaming on the controller; verify clients support fast transition; tune signal-strength thresholds.

### Q17: **B. Console or out-of-band management**
The Facebook outage lesson: when you break the data path, you need a path independent of the data plane. Console (serial) and OOB management networks are how you survive.

### Q18: **A. `ping -l 1472 -f <ip>`**
`-l 1472` = 1472-byte payload (+ 28 header = 1500 MTU). `-f` = don't fragment. If it returns "Packet needs to be fragmented but DF set," you've found the MTU ceiling.

### Q19: **B. Pre-staging + impact analysis + CAB approval + rollback plan**
The Sec+ Module 1 change-management lesson. "Move fast" without staging is the recipe for the Meta outage.

### Q20: **B. Re-enable STP + root + BPDU Guard**
Disabling STP is one of the most dangerous "fixes." Re-enable, configure root bridge correctly, harden access ports with BPDU Guard.

### Q21: **B. Verify end-to-end, then document**
Step 6 then Step 7. Closing without verifying is the anti-pattern.

### Q22: **A. Local DNS path broken**
IP-direct works (network is fine); a 3rd-party resolver works (the name exists). The user's resolver path is the problem, local DNS server, hosts file, search domain, etc.

### Q23: **B. Clock skew**
TLS certs have validity windows; auth tokens (JWT, Kerberos) have time-bound validity. NTP keeps clocks aligned. If NTP fails over the VPN, drift accumulates until certs appear invalid.

### Q24: **B. DNS withdraw + dependency loop + on-site recovery**
The exact story: BGP withdraw triggered DNS loss; internal auth + badge access also depended on DNS; engineers couldn't get in remotely; physical dispatch needed. 6-hour outage.

### Q25: **B. Packet loss**
TCP Retransmissions and Duplicate ACKs are the canonical loss signatures. Investigate saturated link, faulty cable/port, congested queue, asymmetric routing dropping replies.

### Q26: **B. Mandatory close-condition + measured KPI**
Cultural and structural fix. Making documentation a *required* close-condition + measured KPI changes behavior. Punishment alone (A) breeds resentment; training (C) alone doesn't enforce. Replacing the tool (D) doesn't fix the human practice.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Troubleshooting methodology mastered. You're ready for the practice exams.
- 22–24/26 → ✅ Solid. Re-read the 7-step section once.
- 18–21/26 → ⚠️ Re-read the methodology + L1-L7 issue tables.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- 7-step methodology in order (recite forward and backward)
- 3 theory approaches: top-down, bottom-up, divide-and-conquer
- APIPA = 169.254.x.x = DHCP failed
- Duplex mismatch = works-but-errors / throughput collapse
- Broadcast storm = L2 loop without STP
- TDR = cable fault distance; OTDR = fiber fault distance
- Cat6 10 GbE max 55m; Cat6a full 100m
- Console + OOB management for "I broke the network"
- Clock skew breaks TLS / Kerberos / JWT
- ALWAYS verify (step 6) then document (step 7)

---

➡️ Now take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), and finally the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) 2-3 days before your real exam.
