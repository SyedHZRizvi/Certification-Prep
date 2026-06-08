# ✏️ Module 6 Quiz: Network Security

> **Instructions:** 26 questions. Aim for 22/26.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 6 (23%) · Understand 7 (27%) · Apply 7 (27%) · Analyze/Evaluate 5 (19%) · Create 1 (4%).

---

## Questions

### Q1. SFTP runs over which protocol and port? *(Remember)*
A. TLS on port 990
B. SSH on port 22
C. FTP on port 21
D. RDP on port 3389

---

### Q2. FTPS is: *(Remember)*
A. FTP over SSH on 22
B. FTP wrapped in TLS, typically port 990 (or 21 with explicit TLS)
C. The same as SFTP
D. An insecure version of FTP

---

### Q3. An IDS differs from an IPS PRIMARILY in that: *(Understand)*
A. IPS is host-based; IDS is network-based
B. IDS detects and alerts; IPS detects and blocks (inline)
C. IDS is signature-based; IPS is anomaly-based
D. IPS is cloud-only

---

### Q4. A WAF protects which layer specifically? *(Remember)*
A. Layer 2 (data link)
B. Layer 3 (network)
C. Layer 7 (application, HTTP/S)
D. Layer 4 (transport)

---

### Q5. Public-facing web and email servers belong in: *(Apply)*
A. The internal LAN
B. The DMZ / screened subnet
C. The management network
D. The secure zone

---

### Q6. A hardened single entry point for all admin SSH/RDP into the secure zone is called: *(Apply)*
A. WAF
B. Honeypot
C. Jump server / bastion host
D. Load balancer

---

### Q7. SDN separates: *(Understand)*
A. The control plane from the data plane
B. Public from private subnets
C. IPv4 from IPv6
D. WAN from LAN

---

### Q8. Microsegmentation differs from traditional segmentation because: *(Analyze)*
A. It only works in IPv6
B. It applies allow-listing at the per-workload/per-VM level
C. It is performed by physical firewalls only
D. It is for the DMZ only

---

### Q9. Which trio prevents email spoofing of your domain? *(Understand)*
A. SAML / OAuth / OIDC
B. SPF / DKIM / DMARC
C. AES / RSA / SHA-256
D. EAP / RADIUS / TACACS+

---

### Q10. In 802.1X, the "Authenticator" is: *(Understand)*
A. The end-user device
B. The RADIUS server
C. The switch or AP that relays auth
D. The DHCP server

---

### Q11. EAP-TLS is considered strong primarily because: *(Apply)*
A. It uses MS-CHAPv2
B. It uses mutual certificate-based authentication
C. It uses RADIUS
D. It uses a shared PSK

---

### Q12. A site-to-site VPN between HQ and a branch typically uses: *(Apply)*
A. IPSec in Transport mode
B. IPSec in Tunnel mode
C. PPTP
D. TLS clientless

---

### Q13. Split tunneling means: *(Analyze)*
A. Only corporate traffic goes through the VPN; the rest goes direct
B. Two VPNs at once
C. The VPN encrypts only the headers
D. Half the users are tunneled

---

### Q14. Which legacy VPN protocol is considered broken and should be replaced? *(Apply)*
A. IKEv2
B. PPTP
C. OpenVPN
D. WireGuard

---

### Q15. DNSSEC provides: *(Understand)*
A. Encryption of DNS queries
B. Integrity (signed records), NOT encryption
C. Privacy from local network sniffers
D. Compression of DNS responses

---

### Q16. DoT (DNS over TLS) is on port: *(Remember)*
A. 53
B. 443
C. 853
D. 6379

---

### Q17. SNMPv3 differs from earlier versions primarily because: *(Understand)*
A. It uses TCP
B. It adds authentication and encryption
C. It is open source
D. It uses port 162

---

### Q18. The LDAPS port is: *(Remember)*
A. 389
B. 636
C. 1812
D. 88

---

### Q19. Syslog over TLS uses port: *(Remember)*
A. 514 UDP
B. 6514 TCP
C. 161 UDP
D. 443 TCP

---

### Q20. A reverse proxy commonly handles: *(Apply)*
A. Outbound client requests
B. TLS termination + load balancing + hiding backend topology
C. ARP resolution
D. DHCP leases

---

### Q21. Which switch security feature binds the first MAC seen on a port to that port? *(Apply)*
A. DHCP snooping
B. Sticky MAC
C. STP root guard
D. 802.1X

---

### Q22. Which is BEST for detecting attacks against encrypted internal-to-internal traffic on a host? *(Evaluate)*
A. NIDS at the perimeter
B. HIDS / EDR on the host
C. UTM on the WAN edge
D. WAF in the DMZ

---

### Q23. A "honeypot" is: *(Understand)*
A. A patched server
B. A decoy designed to attract attackers and study them
C. A reverse proxy
D. A backup server

---

### Q24. A user complains that working from home is slow because all their Netflix traffic also goes through the corporate VPN. The fix involves: *(Analyze)*
A. Enable split tunneling for non-corporate traffic
B. Add a second VPN tunnel
C. Use FTPS instead
D. Disable IPSec

---

### Q25 (Scenario). A pen tester finds the company's NGFW has an implicit-allow rule at the bottom of its policy. The MOST critical fix is: *(Evaluate)*
A. Add IDS sensors
B. Change the implicit rule to implicit DENY (then add explicit allows above)
C. Enable WAF
D. Disable NAT

---

### Q26 (Scenario). Drag the appliance to its zone: WAF, web servers, DB servers, jump server, NIDS sensor. *(Create)*
A. WAF/DMZ-front, web/DMZ, DB/secure zone, jump/management, NIDS/SPAN at chokepoints
B. WAF/secure zone, web/internal, DB/DMZ, jump/DMZ, NIDS/Internet
C. All in DMZ
D. All in management network

---

## 🎯 Answers + Explanations

### Q1: **B. SSH on port 22**
SFTP = SSH File Transfer Protocol.

### Q2: **B. FTP wrapped in TLS, port 990**
FTPS is FTP+TLS. Not SFTP.

### Q3: **B. IDS detects/alerts; IPS detects/blocks (inline)**
Placement is the key, IPS sits inline so it can drop traffic; IDS observes via SPAN/TAP.

### Q4: **C. Layer 7 (HTTP/S)**
Web Application Firewall, protects against OWASP-class attacks.

### Q5: **B. DMZ / screened subnet**
Public-facing services isolated from internal.

### Q6: **C. Jump server / bastion host**
Single hardened entry point for admin access.

### Q7: **A. Control plane from data plane**
SDN core idea.

### Q8: **B. Per-workload allow-listing**
Microsegmentation pushes firewalling down to each VM/container/workload.

### Q9: **B. SPF / DKIM / DMARC**
The email anti-spoofing trio.

### Q10: **C. Switch / AP relaying auth**
Supplicant = client; Authenticator = switch/AP; Auth Server = RADIUS.

### Q11: **B. Mutual certificate-based**
Both client and server present certs.

### Q12: **B. IPSec in Tunnel mode**
Tunnel mode encapsulates the entire IP packet, appropriate for site-to-site.

### Q13: **A. Only corporate traffic via VPN**
Trade-off: faster but less visibility/control.

### Q14: **B. PPTP**
Known broken; use IKEv2/IPSec, OpenVPN, or WireGuard.

### Q15: **B. Integrity only**
DNSSEC signs records but does NOT encrypt. DoT/DoH provide privacy.

### Q16: **C. 853**
DoT = port 853.

### Q17: **B. Adds authentication and encryption**
SNMPv1/v2c are cleartext.

### Q18: **B. 636**
LDAP = 389; LDAPS = 636.

### Q19: **B. 6514 TCP**
Syslog UDP 514 (default), TLS variant 6514 TCP.

### Q20: **B. TLS termination + load balancing + hiding backends**
Classic reverse-proxy functions.

### Q21: **B. Sticky MAC**
First-seen MAC bound to port.

### Q22: **B. HIDS / EDR**
HIDS sees the host's decrypted view; NIDS at perimeter doesn't see internal-to-internal traffic.

### Q23: **B. Decoy designed to attract attackers**
Honeypot purpose.

### Q24: **A. Enable split tunneling**
Direct routing for non-corp traffic eases congestion. Trade-off: less visibility on personal traffic.

### Q25: **B. Change to implicit DENY**
Default-deny is the bedrock of firewall design. Implicit-allow is a critical misconfiguration.

### Q26: **A. WAF in front of DMZ web tier, etc.**
Standard segmented layout.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Network ready.
- 22–24/26 → ✅ Strong; fix port-number gaps.
- 18–21/26 → ⚠️ Re-read protocol + VPN sections.
- <18/26 → 🔁 Restart Module 6.

---

## 🃏 Add To Your Flashcards

- Every port number from the secure-protocol grid
- Firewall types and what each protects
- IDS vs IPS, signature vs anomaly
- VPN protocols (IPSec, TLS-VPN, WireGuard, PPTP status)
- SPF/DKIM/DMARC roles

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7, Endpoint, Mobile & Cloud Security](../Module-07-Endpoint-Mobile-Cloud-Security/Reading.md)
