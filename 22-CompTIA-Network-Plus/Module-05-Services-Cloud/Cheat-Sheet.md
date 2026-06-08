# 📋 Module 5 Cheat Sheet: Network Services & Cloud Connectivity

> One page. Print it. Tape it to your monitor.

---

## 🌐 DNS Records, MEMORIZE

| Record | What it maps |
|--------|--------------|
| **A** | Name → IPv4 |
| **AAAA** | Name → IPv6 |
| **CNAME** | Name → another name (alias) |
| **MX** | Domain → mail server (priority + hostname) |
| **PTR** | IP → name (reverse, in-addr.arpa) |
| **NS** | Names of authoritative servers |
| **SOA** | Zone metadata (serial, refresh, expire) |
| **TXT** | Free-form (SPF, DKIM, DMARC, ownership verification) |
| **SRV** | Service location (host + port) |

### Anti-spam TXT records
- **SPF**, which IPs may send for this domain
- **DKIM**, signature; receiver verifies via public key in DNS
- **DMARC**, policy if SPF/DKIM fails (none / quarantine / reject) + reports

### DNS transports & ports
- **UDP 53**, standard queries / responses
- **TCP 53**, zone transfers, responses > 512 bytes
- **DoT**, TCP 853 over TLS
- **DoH**, TCP 443 over HTTPS

---

## 📥 DHCP

| Step | Message | Direction |
|------|---------|-----------|
| **D** | Discover | Client broadcast |
| **O** | Offer | Server → client |
| **R** | Request | Client broadcast |
| **A** | Acknowledge | Server → client |

- Server: **UDP 67** · Client: **UDP 68**
- **Scope** = pool of IPs · **Reservation** = MAC-locked IP · **Exclusion** = don't lease this
- **DHCP relay (IP helper)** = forwards broadcasts to remote DHCP server
- **DHCPv6** = RFC 8415 (stateful or stateless)

---

## ⏰ NTP

- **UDP 123**
- Stratum 0 = atomic/GPS · Stratum 1 = direct connection · lower stratum = more authoritative
- Critical for Kerberos, JWT, TLS cert validity, skew > 5 min breaks auth

---

## 📁 File Transfer, Ports

| Protocol | Port | Encrypted? |
|----------|------|-----------|
| FTP control | TCP 21 | NO |
| FTP data (active) | TCP 20 | NO |
| **SFTP / SCP** | **TCP 22** (SSH) | YES |
| FTPS implicit | TCP 990 | YES (TLS) |
| FTPS explicit | TCP 21 + AUTH TLS | YES |
| **TFTP** | **UDP 69** | NO |

---

## ✉️ Email, Ports

| Protocol | Port | TLS port |
|----------|------|----------|
| SMTP server-to-server | 25 | 25+STARTTLS |
| SMTP submission | 587 | 587+STARTTLS |
| SMTPS (legacy) |, | 465 |
| POP3 | 110 | **995** (POP3S) |
| IMAP | 143 | **993** (IMAPS) |

---

## 🌐 Other Critical Ports

| Service | Port |
|---------|------|
| HTTP | TCP 80 |
| HTTPS | TCP 443 |
| SSH | TCP 22 |
| Telnet (don't use) | TCP 23 |
| RDP | TCP 3389 |
| LDAP / LDAPS | TCP 389 / 636 |
| Kerberos | TCP/UDP 88 |
| SIP / SIP-TLS | 5060 / 5061 |
| SNMP / SNMP trap | UDP 161 / 162 |
| Syslog | UDP 514 |

---

## ☁️ Cloud Connectivity

| Option | When |
|--------|------|
| **Site-to-Site VPN** | Cheap, fast to deploy, public Internet |
| **AWS Direct Connect / Azure ExpressRoute / GCP Dedicated Interconnect** | Dedicated, predictable bandwidth, lower latency |
| **SD-WAN** | Hybrid transports + policy-based routing |
| **SASE** | SD-WAN + cloud security (ZTNA, CASB, SWG, FWaaS) as one service |

---

## 🛰️ SDN

| Plane | Role |
|-------|------|
| Application | Apps / orchestrators |
| **Control** | Centralized controller; decides policies/routes |
| **Data** | Switches/routers forwarding by controller rules |
| Management | SNMP, CLI, NETCONF |

**OpenFlow** programs the data plane from the controller.

---

## 🏆 Exam Power Phrases

Often **right**:

- ✅ "SFTP for secure file transfer"
- ✅ "MX record has a priority + hostname"
- ✅ "DHCP relay / IP helper on the router"
- ✅ "DNS over UDP/53 by default, TCP/53 for zone transfers"
- ✅ "Direct Connect / ExpressRoute for predictable cloud bandwidth"

Often **wrong**:

- ❌ "Use Telnet for remote management"
- ❌ "CNAME points to an IP"
- ❌ "DHCP server on a different subnet, no helper needed"
- ❌ "SMTP for downloading email"
- ❌ "SASE replaces DNS"

---

## 🗓️ Key Facts To Memorize Cold

- A/AAAA/CNAME/MX/PTR/TXT/NS/SOA/SRV record purposes
- UDP 53 standard / TCP 53 zone xfer
- DHCP: UDP 67 server / UDP 68 client / DORA
- NTP: UDP 123
- SFTP=22, FTPS=990, TFTP=69
- SMTP=25/587, IMAP/S=143/993, POP3/S=110/995
- HTTPS=443, RDP=3389, LDAP/LDAPS=389/636
- AWS Direct Connect, Azure ExpressRoute
- SD-WAN + SASE distinction
- SDN = control plane / data plane separation

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. DNS record type for mail server lookup? ___
2. Port for IMAPS? ___
3. Server/client ports for DHCP? ___
4. NTP port and stratum 0 meaning? ___
5. What does SASE bundle that SD-WAN alone doesn't? ___

---

➡️ [Module 6: Network Security Fundamentals](../Module-06-Security/Reading.md)
