# ✏️ Module 5 Quiz: Network Services & Cloud Connectivity

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 8 · Understand 6 · Apply 7 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. The DNS record type that maps a hostname to an IPv4 address is: *(Remember)*
A. A
B. AAAA
C. CNAME
D. PTR

---

### Q2. The DNS record that maps an IP to a hostname (reverse lookup) is: *(Remember)*
A. A
B. AAAA
C. CNAME
D. PTR

---

### Q3. Mail Exchange records have which kind of value? *(Remember)*
A. An IP address only
B. A hostname plus a priority/preference value
C. A free-form text string
D. A port number only

---

### Q4. SPF, DKIM, and DMARC records are typically stored as which DNS record type? *(Remember)*
A. A
B. MX
C. TXT
D. SRV

---

### Q5. The DHCP DORA sequence is: *(Remember)*
A. Discover, Offer, Request, Acknowledge
B. Discover, Obtain, Reply, Accept
C. Detect, Offer, Reserve, Allocate
D. Discover, Order, Request, Activate

---

### Q6. DHCP servers listen on UDP port: *(Remember)*
A. 53
B. 67
C. 68
D. 123

---

### Q7. NTP runs on which port and transport? *(Remember)*
A. TCP 123
B. UDP 123
C. UDP 137
D. TCP 161

---

### Q8. TFTP runs on which port and transport? *(Remember)*
A. TCP 21
B. UDP 69
C. TCP 22
D. UDP 53

---

### Q9. DNS uses TCP/53 (rather than UDP/53) for: *(Understand)*
A. All standard queries
B. Zone transfers and responses larger than 512 bytes
C. SRV record lookups only
D. NXDOMAIN responses

---

### Q10. SFTP and SCP both use port: *(Understand)*
A. 20
B. 21
C. 22
D. 990

---

### Q11. The MOST secure protocol for retrieving email from a server is: *(Understand)*
A. POP3 (port 110)
B. IMAP (port 143)
C. IMAPS (port 993)
D. SMTP (port 25)

---

### Q12. A DHCP relay (also called IP helper) is required when: *(Understand)*
A. DHCP scope is exhausted
B. Clients are on a different broadcast domain (subnet) than the DHCP server
C. APIPA is required
D. Clients need static IPs

---

### Q13. AWS's dedicated cloud-connection service is: *(Understand)*
A. Direct Connect
B. ExpressRoute
C. Dedicated Interconnect
D. FastConnect

---

### Q14. SD-WAN's primary benefit over traditional MPLS-only WAN is: *(Understand)*
A. It uses only public Internet
B. It centrally manages multiple transports (MPLS, broadband, LTE) with policy-based steering and per-link health awareness
C. It eliminates the need for any encryption
D. It replaces all firewalls

---

### Q15. A laptop receives `169.254.18.5` after a reboot. The IT tech should investigate: *(Apply)*
A. DNS resolution failure
B. DHCP failure (APIPA)
C. NTP drift
D. ARP table corruption

---

### Q16. An admin needs a printer to ALWAYS receive the same IP via DHCP. The correct mechanism is: *(Apply)*
A. DHCP scope expansion
B. DHCP exclusion
C. DHCP reservation tied to the printer's MAC
D. APIPA configuration

---

### Q17. A user reports their email lands in the recipient's spam folder. Investigation reveals SPF and DKIM are failing. The MOST appropriate first remediation is: *(Apply)*
A. Migrate to IMAPS
B. Publish/update the SPF TXT record to include the sending platform's IPs, and configure DKIM signing with the public-key TXT record at the correct selector
C. Switch to POP3
D. Disable DMARC

---

### Q18. A switch needs to download a new firmware image from a central server during nightly maintenance. The most appropriate protocol is: *(Apply)*
A. TFTP (UDP 69), designed for this use
B. HTTPS
C. SFTP only
D. NFS

---

### Q19. An enterprise needs 10 Gbps low-latency, predictable bandwidth between its on-prem data center and AWS, with no public-Internet path. The right service is: *(Apply)*
A. Site-to-Site VPN over Internet
B. AWS Direct Connect
C. SASE
D. SD-WAN over broadband only

---

### Q20. Authoritative DNS servers for a domain are listed via which record? *(Apply)*
A. SOA
B. NS
C. MX
D. PTR

---

### Q21. A user reports they cannot reach `intranet.corp.local`. `ping intranet.corp.local` says "Could not find host." `ping 10.10.5.50` (the known IP) works fine. The MOST likely problem is: *(Analyze)*
A. DNS resolution failure
B. The router is down
C. NTP drift
D. SMTP misconfiguration

---

### Q22. A senior engineer proposes using SASE to replace the company's on-prem firewall stack and SD-WAN appliance. The CIO asks the SINGLE biggest architectural benefit. *(Analyze)*
A. Eliminates all monthly fees
B. Converges SD-WAN connectivity + cloud-delivered security (CASB, SWG, ZTNA, FWaaS) into a single cloud-edge service, simplifying policy and reducing on-prem appliance sprawl
C. Removes the need for DNS
D. Replaces NTP

---

### Q23. NTP stratum 0 refers to: *(Analyze)*
A. The least accurate clock source
B. A reference clock, atomic clock, GPS, radio (the source itself, not a network NTP server)
C. The default NTP server in pool.ntp.org
D. A misconfigured server

---

### Q24. A web app behind a firewall starts failing intermittently. Logs show the app server's clock has drifted 10 minutes from the auth server. Affected functions include API token validation and certificate checks. The root cause is: *(Analyze)*
A. DNS poisoning
B. NTP failure, large clock skew breaks Kerberos, JWT validation, TLS cert validity windows, and HMAC nonces
C. A misconfigured MX record
D. DHCP scope exhaustion

---

### Q25. SDN separates which two planes? *(Understand)*
A. Application + transport
B. Control plane + data plane
C. Encryption + decryption
D. Hardware + firmware

---

### Q26. You're designing DNS for a global e-commerce site that cannot tolerate a single-provider DNS outage. State the SINGLE most impactful architectural change you'd make. *(Create)*

> *Create-level note:* the answer focuses on resilience strategy.
A. "Lower TTL to 5 seconds on all records."
B. "Use two unrelated DNS providers (multi-vendor) by publishing NS records pointing at both; replicate zones to each provider via API/AXFR."
C. "Use only IPv4."
D. "Block DoH/DoT clients."

---

## 🎯 Answers + Explanations

### Q1: **A. A**
A = IPv4 address (32-bit). AAAA = IPv6 (128-bit). CNAME = alias. PTR = reverse lookup.

### Q2: **D. PTR**
PTR records live in `in-addr.arpa` (IPv4) or `ip6.arpa` (IPv6) and resolve IP → hostname. Used in spam filtering, mail-server reverse-DNS checks, logging.

### Q3: **B. Hostname plus priority/preference**
Example: `example.com.   IN  MX   10 mail1.example.com.`, the `10` is the priority (lower = preferred). Senders try lower-priority first.

### Q4: **C. TXT**
SPF/DKIM/DMARC and many domain-verification records are all stored as TXT.

### Q5: **A. Discover, Offer, Request, Acknowledge**
The DORA exchange for DHCP IP assignment.

### Q6: **B. 67**
Server listens on UDP 67; client uses UDP 68.

### Q7: **B. UDP 123**
NTP. UDP because clock sync prefers low-overhead one-shot exchanges.

### Q8: **B. UDP 69**
TFTP is UDP-based, no auth, used for switch firmware, PXE boot, IoT.

### Q9: **B. Zone transfers and >512 byte responses**
Standard queries use UDP 53. TCP 53 is used for zone transfers (AXFR/IXFR) and when responses exceed 512 bytes (EDNS0 extends this; legacy fallback to TCP).

### Q10: **C. 22**
SFTP and SCP both ride over SSH (TCP 22). FTPS uses 21 + AUTH TLS or implicit 990.

### Q11: **C. IMAPS (port 993)**
IMAP over SSL/TLS. POP3S (995) is the encrypted POP3 equivalent.

### Q12: **B. Clients on different subnet than DHCP server**
DHCP DISCOVER is a broadcast, it doesn't cross routers. A DHCP relay/IP helper on the router forwards DHCP traffic to the central server.

### Q13: **A. Direct Connect**
Azure = ExpressRoute. GCP = Dedicated Interconnect. Oracle = FastConnect.

### Q14: **B. Centrally manages multiple transports with policy + health awareness**
SD-WAN's value is centralized, per-application, transport-agnostic routing across hybrid links, not "only Internet" and not eliminating encryption.

### Q15: **B. DHCP failure (APIPA)**
169.254.x.x = APIPA self-assigned. DHCP didn't respond, investigate DHCP path/server.

### Q16: **C. DHCP reservation tied to MAC**
Reservation = same IP for that MAC every time. Exclusion just keeps an IP from being assigned. Static is outside DHCP entirely.

### Q17: **B. Publish SPF + configure DKIM**
SPF authorizes sending IPs; DKIM cryptographically signs outbound mail; together they validate to DMARC. Switching protocols (A, C) is irrelevant; disabling DMARC (D) is dangerous.

### Q18: **A. TFTP**
TFTP is exactly designed for this, small footprint, embedded device firmware uploads. HTTPS works too but is heavier and not the textbook answer.

### Q19: **B. Direct Connect**
Private circuit, predictable bandwidth, no public Internet path = Direct Connect.

### Q20: **B. NS**
NS records list the authoritative name servers for a zone. SOA = zone metadata (serial, refresh, expire). MX = mail. PTR = reverse.

### Q21: **A. DNS resolution failure**
IP-based ping works but name-based doesn't = pure DNS issue. Check resolver, /etc/hosts, search domain.

### Q22: **B. SASE converges SD-WAN + cloud security**
Gartner's SASE thesis: networking and security delivered as one cloud-edge service. The biggest architectural benefit is convergence and policy simplification, plus the operational benefit of fewer on-prem appliances.

### Q23: **B. Reference clock (atomic, GPS, radio)**
Stratum 0 = the actual reference clock. Stratum 1 = devices directly connected to stratum 0. Each hop downstream increments stratum.

### Q24: **B. NTP failure / clock skew**
Kerberos requires <5 min skew. JWT exp/nbf checks fail. TLS certs are time-windowed. HMACs use timestamps. Without NTP, *most modern auth* breaks subtly. Top suspect when "stuff stops working after a reboot."

### Q25: **B. Control plane + data plane**
SDN's defining feature: decouple decision-making (controller) from packet forwarding (switches/routers).

### Q26: **B. Multi-vendor DNS**
Publishing NS records at two unrelated providers (Cloudflare + AWS, for example) is the industry-standard answer post-Dyn. TTL lowering helps fail over but doesn't solve a complete provider outage. IPv4-only and DoH blocking are unrelated to resilience.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Services + cloud mastered.
- 22–24/26 → ✅ Solid. Re-read the DNS record table once.
- 18–21/26 → ⚠️ Re-read DNS section + DHCP DORA section + cloud-connectivity comparison.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- DNS records: A, AAAA, CNAME, MX, PTR, TXT, NS, SOA, SRV
- DNS ports: UDP 53 queries, TCP 53 zone transfers / >512 byte
- DHCP DORA + ports 67/68
- NTP UDP 123, stratum hierarchy
- SFTP=22, FTPS=990, TFTP=69, FTP=21/20
- SMTP=25/587, IMAPS=993, POP3S=995
- AWS Direct Connect, Azure ExpressRoute, GCP Dedicated Interconnect
- SASE = SD-WAN + cloud security
- SDN = control plane / data plane separation

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Network Security Fundamentals](../Module-06-Security/Reading.md)
