# 📋 Module 2 Cheat Sheet: Networking Fundamentals

> One page. Print it. Memorize the ports table.

---

## 🔢 Ports You MUST Know

| Port | Protocol | Notes |
|------|----------|-------|
| 20/21 | FTP | Control / Data |
| 22 | SSH / SFTP | Encrypted shell |
| 23 | Telnet | **Don't use** |
| 25 | SMTP | Server-to-server mail |
| 53 | DNS | TCP+UDP |
| 67/68 | DHCP | Server/Client (UDP) |
| 69 | TFTP | PXE, firmware |
| 80 | HTTP | Web |
| 110/995 | POP3 / POP3S | Mail fetch |
| 123 | NTP | Time |
| 143/993 | IMAP / IMAPS | Mail sync |
| 161/162 | SNMP | Monitor / Trap |
| 389/636 | LDAP / LDAPS | Directory |
| 443 | HTTPS | Web encrypted |
| 445 | SMB | Windows shares |
| 514 | Syslog | Log forwarding |
| 587/465 | SMTP submission / SMTPS | Outbound mail |
| 3389 | RDP | Remote Desktop |

---

## 📋 Cable Categories

| Cat | Speed | Distance | Use |
|-----|-------|----------|-----|
| 5 | 100 Mbps | 100m | Legacy |
| 5e | 1 Gbps | 100m | Common |
| 6 | 1 Gbps @ 100m / 10 Gbps @ 55m | varies | Office |
| 6a | 10 Gbps | 100m | Modern install |
| 8 | 25–40 Gbps | 30m | Datacenter ToR |

---

## 📡 Wi-Fi Cheat Block

| Std | Marketing | Bands | Max |
|-----|-----------|-------|-----|
| 802.11n | Wi-Fi 4 | 2.4/5 | 600 Mbps |
| 802.11ac | Wi-Fi 5 | 5 | 6.9 Gbps |
| 802.11ax | Wi-Fi 6/6E | 2.4/5/(6) | 9.6 Gbps |
| 802.11be | Wi-Fi 7 | 2.4/5/6 | 46 Gbps |

**Channels:** 2.4 GHz → 1, 6, 11 (non-overlapping). 5 GHz → many; pick what's clean.

**Security:** WEP/WPA = deprecated. **WPA2-AES** or **WPA3-SAE** only.

---

## 🌐 IP Ranges

| Range | Use |
|-------|-----|
| 10.0.0.0/8 | RFC 1918 private |
| 172.16.0.0/12 | RFC 1918 private |
| 192.168.0.0/16 | RFC 1918 private (home routers) |
| 169.254.0.0/16 | APIPA (DHCP failed) |
| 127.0.0.0/8 | Loopback |

**IPv6 link-local:** fe80::/10

---

## 🛠️ Command Cheat Block

| Command | What it does |
|---------|--------------|
| `ipconfig /all` | All NIC info (Win) |
| `ipconfig /release` | Drop DHCP lease |
| `ipconfig /renew` | Get new lease |
| `ipconfig /flushdns` | Clear DNS cache |
| `ping <host>` | ICMP reachability |
| `tracert <host>` | Hops to host (Win) |
| `traceroute <host>` | Hops to host (Linux/macOS) |
| `nslookup <host>` | DNS lookup |
| `netstat -ano` | Connections + PIDs |
| `arp -a` | Local ARP cache |
| `pathping <host>` | tracert + ping combined (Win) |

---

## 📶 OSI Layer Cheat

```
7 Application   HTTP, DNS, SMB
6 Presentation  TLS, JPEG
5 Session       NetBIOS
4 Transport     TCP, UDP
3 Network       IP, ICMP, ROUTER
2 Data Link     Ethernet, MAC, SWITCH
1 Physical      Cable, signal, HUB
```

Mnemonic: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way (bottom up).

---

## 🛜 Connector Cheat

| Connector | Cable | Use |
|-----------|-------|-----|
| RJ-45 | Twisted pair | Ethernet |
| RJ-11 | Twisted pair | Phone |
| F-type | Coax | Cable / cable modem |
| LC | Fiber | Most data center |
| SC | Fiber | Telco |
| ST | Fiber | Legacy |
| BNC | Coax | Old video/network |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Use SSH (port 22) instead of Telnet"
- "Switch to WPA3 / WPA2-AES"
- "Verify default gateway"
- "Check DNS with nslookup"
- "Isolate the guest network on a separate SSID/VLAN"

❌ Often **wrong**:

- "Use Telnet for production"
- "Disable the firewall"
- "Use POP3 for multi-device sync"
- "Set DMZ host = the PC" (when port forwarding is the safer answer)
- "Cat 6 always supports 10 Gbps to 100m"

---

## 🗓️ Memorize Cold

- 80/443 → HTTP/HTTPS
- 22 → SSH, 23 → Telnet (avoid)
- 53 → DNS, 67/68 → DHCP, 123 → NTP
- 445 → SMB, 3389 → RDP
- APIPA = 169.254.x.x → DHCP failure
- Cat 6a = 10G @ 100m; Cat 6 = 10G @ 55m
- 2.4 GHz channels: 1, 6, 11
- WPA3 > WPA2 > WPA > WEP
- DHCP DORA: Discover → Offer → Request → Ack

---

## ✏️ Quick Self-Check

1. Recite the top 10 ports? ___
2. APIPA address range? ___
3. Cat 6 vs Cat 6a, what's the practical difference? ___
4. OSI layer of a switch? Of a router? ___
5. Why disable Telnet? ___

---

➡️ [Module 3: Hardware](../Module-03-Hardware/Reading.md)
