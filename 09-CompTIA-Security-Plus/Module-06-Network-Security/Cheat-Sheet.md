# 📋 Module 6 Cheat Sheet: Network Security

> One page. Print it. Memorize the port grid.

---

## 🔌 Port Grid (MUST KNOW)

| Service | Port |
|---------|------|
| SSH (Secure Shell) / SCP / SFTP | **22** |
| Telnet (insecure) | 23 |
| SMTP (Simple Mail Transfer Protocol) | 25 / **587** / **465** (TLS (Transport Layer Security)) |
| DNS (Domain Name System) / DNSSEC | **53** |
| DoT | **853** |
| DoH | 443 |
| HTTP (Hypertext Transfer Protocol) / HTTPS (HTTP Secure) | 80 / **443** |
| POP3S / IMAPS | 995 / 993 |
| NTP | 123 |
| Kerberos | **88** |
| LDAP (Lightweight Directory Access Protocol) / LDAPS | 389 / **636** |
| SNMP (Simple Network Management Protocol) / Traps | 161 / 162 (use v3) |
| Syslog / Syslog-TLS | 514 / **6514** |
| RDP | **3389** |
| RADIUS | 1812 / 1813 (UDP (User Datagram Protocol)) |
| TACACS+ | **49** (TCP (Transmission Control Protocol)) |
| FTP (File Transfer Protocol) / FTPS | 21 / **990** |
| SMB | **445** |

---

## 🔥 Firewall Lineup

| Type | Layer | Use |
|------|-------|-----|
| Stateful | 3-4 | Tracks connections |
| **NGFW** | 3-7 | Stateful + L7 + IPS + identity |
| **WAF (Web Application Firewall)** | 7 (web only) | OWASP attacks |
| **UTM** | 3-7 | NGFW + AV + URL filter |
| Host-based | endpoint | Per-machine |

**Implicit deny at the bottom.** Top-down evaluation, first match wins.

---

## 🛡️ Detection

| | IDS | IPS |
|---|---|---|
| Action | Alert | Block |
| Placement | Out-of-band (SPAN) | Inline |
| Risk | Miss alert | Drop legit traffic |

Methods: **signature**, **anomaly**, **behavior/heuristic**.

---

## 🏗️ Zones

```
Internet → [NGFW] → DMZ → [NGFW] → Internal → [NGFW] → Secure
                                                 ↑ Mgmt net (jump server)
                          Extranet (partners)
                          Guest (BYOD/IoT)
```

---

## 📧 Email Anti-Spoofing

| | Role |
|---|------|
| **SPF** | DNS TXT: which IPs may send for this domain |
| **DKIM** | Crypto signature on outbound mail |
| **DMARC** | Policy: what to do when SPF/DKIM fail (none/quarantine/reject) |

---

## 🛜 802.1X

```
[Supplicant] ←→ [Authenticator: switch/AP] ←→ [Auth Server: RADIUS]
```

EAP variants: **EAP-TLS** (mutual cert, strongest), PEAP, EAP-TTLS, EAP-FAST.

NAC adds **posture** checks (patched? EDR (Endpoint Detection and Response)? encrypted disk?).

---

## 🚇 VPN (Virtual Private Network)

| Topology | When |
|----------|------|
| Site-to-site | HQ ↔ branch (IPSec Tunnel mode) |
| Remote access | User → corp |
| Always-on | Auto-connects off-network |
| Clientless SSL (Secure Sockets Layer) VPN | Browser-only |
| Split tunnel | Only corp traffic via VPN |
| Full tunnel | All traffic via VPN |

| Protocol | Status |
|----------|--------|
| IPSec / IKEv2 | ✅ |
| OpenVPN | ✅ |
| WireGuard | ✅ Modern |
| L2TP/IPSec | OK |
| PPTP | ❌ |

IPSec: **AH** (integrity/auth only) vs **ESP** (also conf). **Tunnel** mode = whole packet; **Transport** = payload only.

---

## 🌐 DNS Security

| Tech | Provides |
|------|----------|
| DNSSEC | Integrity (signed records) |
| DoT (853) | Privacy |
| DoH (443) | Privacy + bypass filters |
| Sinkhole | Block known-bad domains |

---

## 🏆 Exam Power Phrases

- ✅ "Default deny"
- ✅ "Defense in depth"
- ✅ "Implicit deny at bottom of firewall ruleset"
- ✅ "Microsegmentation"
- ✅ "OOB management network"
- ✅ "Jump server with MFA + session recording"
- ❌ "Allow all + log"
- ❌ "PPTP / SNMPv1 / Telnet"
- ❌ "Web server in the internal LAN (Local Area Network)"
- ❌ "Split tunnel for high-security users"

---

## ✏️ Quick Self-Check

1. SFTP port + protocol? FTPS port + protocol?
2. IDS vs IPS, where placed, what they do.
3. Which trio defends against email spoofing of your domain?
4. IPSec Tunnel vs Transport, which for site-to-site?
5. DNSSEC vs DoH, what does each provide?

---

➡️ [Module 7: Endpoint, Mobile & Cloud Security](../Module-07-Endpoint-Mobile-Cloud-Security/Reading.md)
