# ✏️ Module 6 Quiz: Network Security Fundamentals

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The PRIMARY difference between IDS and IPS is that IPS: *(Remember)*
A. Logs and alerts only
B. Sits out-of-band on a SPAN port
C. Sits inline and can block detected attacks
D. Only works on host-based deployments

---

### Q2. A stateful firewall differs from a stateless packet filter by: *(Remember)*
A. Inspecting payload content at the application layer
B. Tracking connection state and automatically allowing return traffic for established sessions
C. Operating only at Layer 2
D. Requiring TLS decryption

---

### Q3. IPsec's encryption-capable protocol is: *(Remember)*
A. AH
B. ESP
C. IKE
D. RADIUS

---

### Q4. The 802.1X "supplicant" is: *(Remember)*
A. The switch / WAP
B. The RADIUS authentication server
C. The client device requesting access
D. The directory service

---

### Q5. NAC stands for and means: *(Remember)*
A. Network Address Control — assigning IPs
B. Network Access Control — posture-checks devices before granting network access
C. Network Address Configuration — DHCP
D. New Authentication Control — replacing 802.1X

---

### Q6. SSL/TLS VPNs typically run on: *(Remember)*
A. UDP 500
B. TCP 443
C. TCP 22
D. UDP 1194

---

### Q7. A stateful firewall is most appropriate for: *(Understand)*
A. Web app SQL injection protection
B. General perimeter / segmentation filtering with auto-allowed return traffic
C. Replacing DNS
D. Detecting credential phishing

---

### Q8. A Next-Generation Firewall adds which capability beyond stateful? *(Understand)*
A. Application identification, user identity, DPI, IDS/IPS integration
B. Layer 2 only filtering
C. ICMP echo replies
D. DNS recursion

---

### Q9. Signature-based detection has which key weakness? *(Understand)*
A. It generates too many false positives
B. It cannot detect previously-unknown (zero-day) attacks
C. It uses too much CPU
D. It requires customer certificates

---

### Q10. A NAC quarantine VLAN's typical purpose is to: *(Understand)*
A. Hold the user until end of business day
B. Provide a remediation portal (auto-patch, install AV) so the device can become compliant
C. Block all traffic permanently
D. Replace 802.1X authentication

---

### Q11. ESP in IPsec tunnel mode encrypts: *(Understand)*
A. Only the payload, leaving the original IP header visible
B. The entire original packet, adding a new outer IP header
C. Just the source IP
D. Nothing — ESP doesn't encrypt

---

### Q12. An IDS that uses behavioral analytics to detect deviation from learned-normal traffic uses which method? *(Understand)*
A. Signature-based
B. Anomaly-based
C. Allowlisting
D. Whitelisting

---

### Q13. An ACL rule order is significant because: *(Apply)*
A. Rules are evaluated in random order
B. Rules are evaluated top-down, first match wins — a permit-all near the top makes everything below dead
C. Rules are sorted alphabetically
D. The firewall picks the most permissive rule

---

### Q14. A remote employee can reach `https://saas.example.com` from a coffee shop but cannot reach `https://crm.corp.local`. The MOST likely cause is: *(Apply)*
A. The CRM is on a private internal network and they need the corporate VPN (or ZTNA) to connect
B. SaaS app is faster
C. DNS poisoning at the coffee shop
D. The user's password is wrong

---

### Q15. A switch port using 802.1X with dynamic VLAN assignment will determine the user's VLAN based on: *(Apply)*
A. The RADIUS Accept attributes returned by the auth server
B. The cable color
C. DHCP option 51
D. The router's static routing table

---

### Q16. To send IPsec VPN traffic through a NAT device, the engineer must allow: *(Apply)*
A. TCP 443 only
B. UDP 500 (IKE) AND UDP 4500 (NAT-T) AND IP protocol 50 (ESP)
C. TCP 22 only
D. ICMP echo only

---

### Q17. An enterprise's PCI environment must be segmented from corporate IT to limit blast radius. The MOST appropriate primary control is: *(Apply)*
A. Disable all wireless
B. Microsegmentation with firewall enforcement between PCI and corporate zones, plus strict ACLs
C. Disable all DNS
D. Issue every PCI server a public IP

---

### Q18. WireGuard offers which advantage over IPsec? *(Apply)*
A. Smaller, simpler code base; better default ciphers; easier configuration; built into modern Linux kernel
B. Required by PCI-DSS
C. Cannot be used over the public Internet
D. Replaces TLS

---

### Q19. A web app behind the firewall is targeted with OWASP Top 10 attacks (SQLi, XSS). The MOST appropriate dedicated control is: *(Apply)*
A. WAF (Web Application Firewall)
B. Stateless packet filter
C. NAC
D. Captive portal

---

### Q20. An IDS detects a confirmed C2 outbound connection from an internal host. The MOST appropriate FIRST action is: *(Analyze)*
A. Reformat the host
B. Isolate the host via switch ACL / 802.1X session termination AND preserve forensic evidence
C. Notify the press
D. Disable DNS

---

### Q21. A SOC reports that the IPS keeps blocking legitimate web traffic because rules are too aggressive. The right response is: *(Analyze)*
A. Disable the IPS
B. Tune the rules — switch high-FP rules to alert-only, whitelist the affected source/dest, and adjust thresholds while continuing protection on the rest
C. Replace IPS with IDS
D. Replace IPS with NAC

---

### Q22. An enterprise wants per-user access to specific internal apps from any device or location WITHOUT giving users a "VPN tunnel to the whole network." The architectural fit is: *(Analyze)*
A. Site-to-Site IPsec
B. Zero Trust Network Access (ZTNA) — identity-aware proxy publishes specific apps to authorized users
C. WPA3-Personal
D. Telnet jumphost

---

### Q23. A flat /16 network has no internal segmentation. An attacker compromises one HVAC vendor's laptop and pivots laterally to the PCI environment. The single architectural change that would have limited blast radius the MOST is: *(Analyze)*
A. Use IPv6
B. Microsegmentation (firewalls/ACLs between vendor / corporate / PCI zones)
C. Disable wireless
D. Replace all switches with hubs

---

### Q24. Mantraps / access-control vestibules primarily defend against: *(Analyze)*
A. SQL injection
B. Tailgating — preventing an unauthorized person from following an authorized person through a door
C. DNS poisoning
D. Wi-Fi deauth

---

### Q25. The Network+ definition of "implicit deny" is: *(Understand)*
A. Anything explicitly listed is denied
B. Anything not explicitly permitted is denied
C. Anything from the Internet is denied
D. Nothing is denied by default

---

### Q26. You're designing a remote-work strategy. The CISO wants to retire the legacy VPN concentrator. State the SINGLE strongest justification for replacing VPN-only with ZTNA. *(Create)*

> *Create-level note:* you're justifying an architectural transition; pick the answer that captures the single biggest reason.
A. "ZTNA is cheaper than VPN."
B. "ZTNA grants access per-application (identity + posture + context), eliminating the broad network-level trust that VPN gives — reducing lateral-movement risk if a user device is compromised."
C. "VPN doesn't support IPv6."
D. "ZTNA replaces DNS."

---

## 🎯 Answers + Explanations

### Q1: **C. Inline + blocks**
IPS = inline detect-and-block. IDS = out-of-band detect-and-alert only. The "P" stands for prevention.

### Q2: **B. Tracks connection state, auto-allows return traffic**
Stateful firewall tracks TCP handshake state and UDP flows; reply packets to an allowed outbound session are auto-permitted. Stateless evaluates each packet in isolation.

### Q3: **B. ESP**
ESP (Encapsulating Security Payload) provides encryption + integrity + auth. AH only provides integrity + auth, no encryption. IKE is the key exchange. RADIUS is AAA, unrelated.

### Q4: **C. The client device requesting access**
Supplicant = client (laptop, IP camera, phone). Authenticator = switch/WAP. Authentication server = RADIUS.

### Q5: **B. Network Access Control — posture-checks**
NAC verifies device health (patch level, AV, encryption, fingerprint) BEFORE granting network access. Cisco ISE, Aruba ClearPass, FortiNAC are common.

### Q6: **B. TCP 443**
SSL/TLS VPNs ride TCP/443 so they pass through almost any firewall (looks like HTTPS). UDP 500 is IKE. TCP 22 is SSH. UDP 1194 is OpenVPN's default.

### Q7: **B. General perimeter/segmentation with auto-allowed return traffic**
Stateful is the workhorse — the right fit for perimeter and inter-segment filtering where the typical pattern is "allow outbound + return traffic." SQLi protection (A) needs a WAF.

### Q8: **A. App identification, user identity, DPI, IDS/IPS integration**
NGFW = stateful + DPI + app awareness + user identity + IDS/IPS + TLS decryption. The full modern stack.

### Q9: **B. Cannot detect zero-day**
Signatures only match what's been seen before. Anomaly/behavior detection helps catch novel attacks but has higher false-positive rates.

### Q10: **B. Provide remediation portal**
Quarantine VLAN = isolated network with limited access (often to a remediation server) so the non-compliant device can update itself and rejoin the production network.

### Q11: **B. Entire packet, new outer IP header**
Tunnel mode encrypts everything (original packet + payload) and adds a new outer IP header → this is what makes IPsec usable for gateway-to-gateway VPNs.

### Q12: **B. Anomaly-based**
Behavioral / anomaly detection learns a baseline and alerts on deviations. Signature-based matches known patterns.

### Q13: **B. Top-down, first match wins**
ACLs evaluate in order; the first matching rule determines the action. Always end with explicit deny-all for clarity.

### Q14: **A. CRM is internal, needs VPN/ZTNA**
The CRM is on a private internal subnet; from the public Internet the user can't reach it without an authenticated path (VPN or ZTNA). Plus, internal DNS likely can't resolve `crm.corp.local` without the VPN's DNS settings.

### Q15: **A. RADIUS Accept attributes**
After successful authentication, RADIUS returns Tunnel-Private-Group-ID + tunnel-type attributes that tell the switch which VLAN to assign.

### Q16: **B. UDP 500 + UDP 4500 + IP protocol 50**
IKE phase 1 = UDP 500. NAT-Traversal = UDP 4500 (encapsulates ESP in UDP for NAT compatibility). ESP itself is IP protocol 50.

### Q17: **B. Microsegmentation + firewalls + ACLs**
PCI-DSS explicitly requires network segmentation. Microsegmentation with enforcement between zones is the textbook answer.

### Q18: **A. Smaller code + better defaults + kernel-native**
WireGuard's ~4k lines vs IPsec's ~400k lines = much smaller attack surface and easier audit. Modern Curve25519 + ChaCha20-Poly1305 defaults. In the Linux kernel since 5.6.

### Q19: **A. WAF**
WAF specifically understands HTTP/HTTPS and OWASP-class attacks at the application layer. Stateless packet filters can't see SQL syntax. NAC controls admission, not app traffic. Captive portal is for sign-in.

### Q20: **B. Isolate + preserve evidence**
Network containment (e.g., 802.1X termination, switch ACL, EDR isolate) prevents lateral spread; preserving evidence enables forensics. Wiping immediately destroys evidence.

### Q21: **B. Tune the rules**
False positives demand tuning, not disablement. Switch noisy rules to alert-only, whitelist trusted source/dest combos, adjust thresholds — keep IPS active where it earns its keep.

### Q22: **B. ZTNA**
Identity-aware proxy publishing specific apps is the textbook ZTNA pattern. Users get app-level access, not network-level.

### Q23: **B. Microsegmentation**
The Target case study (in the Reading). Flat networks enable unrestricted lateral movement. Microsegmentation with enforcement between zones is the architectural fix.

### Q24: **B. Tailgating**
The two-door vestibule prevents a second person from slipping through behind an authorized user. Cameras + badges + biometrics can complement.

### Q25: **B. Anything not explicitly permitted is denied**
The conservative default — start with deny, then add permits.

### Q26: **B. Per-app access vs network-wide trust**
The strongest single justification is that VPN trust is *network-level* (user can lateral-scan if compromised) while ZTNA is *application-level* (compromised user has access only to apps they're authorized for, validated continuously). Cost (A) and IPv6 (C) are not the architectural drivers; D is false.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Security mastered. Sec+ next?
- 22–24/26 → ✅ Solid. Re-read the IPsec / VPN / Zero Trust sections.
- 18–21/26 → ⚠️ Re-read firewall generations + IDS/IPS + 802.1X.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- IDS vs IPS (passive alert vs inline block)
- Stateful vs stateless vs NGFW
- ACL evaluation: top-down, first match, implicit deny
- 802.1X roles: supplicant / authenticator / auth server
- IPsec ports: UDP 500 + UDP 4500 + IP proto 50
- SSL/TLS VPN: TCP 443
- WireGuard advantages
- NAC posture checks and quarantine VLAN
- ZTNA vs VPN
- Mantrap = anti-tailgate

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7 — Monitoring, Performance & Tools](../Module-07-Monitoring-Tools/Reading.md)
