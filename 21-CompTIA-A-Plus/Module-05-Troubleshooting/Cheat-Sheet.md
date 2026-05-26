# 📋 Module 5 Cheat Sheet: Troubleshooting

> One page. Print it. Memorize the 6 steps.

---

## 🎯 The 6-Step Methodology

```
1. IDENTIFY the problem        (question user, gather symptoms, recent changes)
2. THEORY of probable cause    (obvious first; Occam's razor)
3. TEST the theory             (confirm or rethink)
4. PLAN of action + implement  (vendor docs if applicable)
5. VERIFY full functionality   (and prevent)
6. DOCUMENT findings           (KB entry, ticket, runbook)
```

🎯 **"What's the NEXT step?" is the #1 exam pattern.**

---

## 🌐 Network Triage Cheat

```
L1  → cable, link light
L2  → ipconfig, valid MAC
L3  → IP not 169.254.x.x; ping gateway
L3  → DNS — ping 8.8.8.8 vs ping google.com
L4  → Test-NetConnection -Port 443 host
L7  → app-specific
```

| Symptom | Likely |
|---------|--------|
| 169.254.x.x | APIPA → DHCP failure |
| Pings IP, not name | DNS broken |
| Pings gateway, not internet | WAN / ISP issue |
| Slow Wi-Fi at lunchtime | AP overloaded, 2.4 GHz crowded |
| Gigabit dropped to 100 Mbps | Bad cable pair |

---

## 💀 Hardware Symptoms Quick Map

| Symptom | First check |
|---------|-------------|
| No fans / no LEDs | PSU switch, outlet, front-panel header |
| Fans spin, no display | Monitor cable + input, reseat RAM, swap GPU |
| Continuous beeps | RAM — reseat / test |
| 1 long + 3 short (AMI) | Video |
| Random reboot under load | PSU or thermal |
| Click of death (HDD) | Failing head — back up NOW |
| "Boot device not found" | SATA cable, boot order, dead drive |
| BSOD MEMORY_MANAGEMENT | MemTest86 |
| BSOD IRQL_NOT_LESS_OR_EQUAL | Driver, often RAM |

---

## 🛡️ RAID Failure Cheat

| RAID | Survives | Action on fail |
|------|----------|----------------|
| 0 | 0 | Restore from backup |
| 1 | 1 | Replace, resync from survivor |
| 5 | 1 | Replace ONE at a time; rebuild risk! |
| 6 | 2 | Replace, dual-parity rebuild |
| 10 | 1 per mirror | Replace, resync |

🚨 **RAID 5 with >5 large disks** → migrate to **RAID 6**.

---

## 🛠️ CLI Cheat — Diagnostic Toolkit

### Windows
```
ipconfig /all                    full NIC info
ipconfig /release /renew         force DHCP
ipconfig /flushdns               clear DNS cache
ping <host>                      ICMP test
tracert <host>                   hops
pathping <host>                  tracert + loss
nslookup <host> [server]         DNS test
Test-NetConnection -Port 443 h   port test
netstat -ano                     connections
arp -a                           ARP cache
route print                      routing table
getmac                           NIC MAC
```

### Linux / macOS
```
ip a                             interfaces
ping <host>                      ICMP
traceroute <host>                hops
mtr <host>                       continuous tracert
dig <host>                       DNS lookup
nc -zv <host> 443                port test (netcat)
ss -tunlp                        sockets
smartctl -a /dev/sda             SMART data
```

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Check the cable / link light first"
- "Reseat the RAM"
- "Run MemTest86"
- "Back up before any change"
- "Document the findings"
- "Use a known-good substitute"
- "Verify functionality after the fix"

❌ Often **wrong**:
- "Replace the motherboard first"
- "Reformat the OS as the first step"
- "Skip documentation if you already fixed it"
- "RAID is a backup"
- "If POST works, all hardware is fine"

---

## 🗓️ Memorize Cold

- 6-step methodology IN ORDER
- 169.254.x.x = APIPA = DHCP failed
- Continuous beeps = RAM
- Click of death = back up NOW
- RAID 5 rebuild = dangerous on large disks
- Test-NetConnection -Port for port testing
- "Always start at L1 unless ruled out"
- Troubleshooting = **29% of 220-1101 (combined w/ printers)**

---

## ✏️ Quick Self-Check

1. 6 steps in order? ___
2. What's the next step after confirming the cause? ___
3. APIPA address range? ___
4. ping 8.8.8.8 works, name doesn't — cause? ___
5. RAID 6 survives how many failures? ___

---

➡️ [Module 6: Printers](../Module-06-Printers/Reading.md)
