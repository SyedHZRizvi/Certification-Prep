# 📋 Module 8 Cheat Sheet: Troubleshooting & Documentation

> Print. Tape. Memorize the methodology.

---

## 🎯 The 6-Step Methodology

1. **Identify the problem**
2. **Establish a theory of probable cause**
3. **Test the theory**
4. **Establish a plan of action and implement**
5. **Verify full system functionality (and preventive measures)**
6. **Document findings, actions, and outcomes**

🧠 CompTIA tests this **by name**. Memorize the order.

---

## ⚡ Boot Symptoms → First Action

| Symptom | First check |
|---|---|
| No POST, no fans | PSU / power |
| 3 beeps at boot | RAM (reseat/swap) |
| "No bootable device" | UEFI/BIOS boot order + RAID volume status |
| Boot loop | Bootloader / recent update / SEL |
| BSOD / kernel panic | minidump / `journalctl --boot=-1` |
| Slow boot then OK | PortFast on switch, mapped drive timeouts |
| Boots but no network | NIC LEDs / switch port / VLAN |

---

## 💡 LEDs

| LED | Meaning |
|---|---|
| Power | Green=on, amber=standby, blink=boot |
| System health | Green=OK, blink amber=alert, solid amber=fail |
| Drive activity | Blink green = busy |
| Drive amber | Failure / pre-fail |
| **Locator (blue)** | Admin-toggled "find me" |
| NIC link | Green=link, blinking=traffic |

---

## 🔥 Bottleneck Triage

| Resource | Windows | Linux | Threshold |
|---|---|---|---|
| **CPU** | `Processor → % Processor Time`, `Processor Queue Length` | `top`, `mpstat -P ALL 1` | Sustained >80% / queue > 2× cores |
| **RAM** | `Memory → Available MB`, `Pages/sec` | `free -h`, `vmstat 1` | Paging > 0 sustained, swap > 0 |
| **Disk** | `LogicalDisk → Avg Disk sec/Read`, `Current Disk Queue Length` | `iostat -xz 1`, `iotop` | Latency > 20 ms, queue chronically full |
| **Network** | `Network Interface → Bytes Total/sec`, `Output Queue Length` | `iftop`, `nload`, `ss -tnp` | pps/bps near link rate, output queue > 0 |

🧠 If none saturated → application-level (queries, locks, GC).

---

## 🌐 Network Tools

| Tool | Use |
|---|---|
| `ipconfig /all` · `ip a` | NIC + IP info |
| `nslookup` · `dig` | DNS resolution |
| `ping` | Reachability + latency |
| `traceroute` · `tracert` | Path |
| `mtr` | Combined trace + ping |
| `nc -vz host port` · `Test-NetConnection` | Port open check |
| `iperf3` | Throughput baseline |
| `tcpdump -ni eth0 port 443` | Packet capture |
| **MTU 9000 verify** | `ping -M do -s 8972` (Linux) / `ping -f -l 8972` (Windows) |

---

## 💽 Storage Tools

| Tool | Use |
|---|---|
| RAID controller utility (PERC CLI / SSACLI / MegaCLI) | Array + drive status |
| `smartctl -a /dev/sda` | SMART attributes |
| `multipath -ll` | MPIO status (Linux) |
| MPIO snap-in (Windows) | MPIO status |
| `iostat -xz 1` | Per-device latency + util |
| ESXi `esxtop` (`d`) | DAVG/KAVG per device |
| BMC SEL | Predictive failures, ECC errors |

---

## 📑 Documentation

| Doc | Purpose |
|---|---|
| **CMDB** | Inventory + relationships |
| **Network diagram** | Current as of last change |
| **Rack elevation** | U-by-U what's where |
| **Runbook** | Step + verify + rollback |
| **Knowledge base** | Searchable how-tos + post-mortems |
| **Change records** | Who/what/when/why |
| **Incident records** | Timeline + RCA + lessons |
| **Asset list** | Serials, warranty, contracts |
| **Credentials vault** | Privileged secrets + break-glass |
| **Vendor contacts** | Escalation trees |

---

## 🔄 Change Types

| Type | Approval |
|---|---|
| **Standard** | Pre-approved (repeatable, low-risk) |
| **Normal** | CAB review |
| **Emergency** | Bypass CAB; post-implementation review |

Plus: impact analysis, backout plan, maintenance window, test results, stakeholders, dependencies.

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Follow the 6-step methodology"
- "Identify scope before acting"
- "Execute the backout plan"
- "Update CMDB + runbook"
- "Add preventive monitoring after the fix"
- "Blameless post-mortem"
- "Read the vendor beep-code chart"

❌ Often **wrong**:
- "Restart everything"
- "Skip documentation — we're busy"
- "Pull the drive immediately"
- "Skip the backout plan"
- "Reboot, see if it goes away"
- "Blame the user"

---

## 🗓️ Facts To Memorize Cold

- The 6 steps in order (back of your hand)
- Beep code → RAM first
- Blue LED = locator
- Amber drive LED = failure
- `iostat -xz 1` / `top` / `vmstat 1`
- PerfMon: Processor Queue Length, Avg Disk sec/Read
- MTU 9000 verify: `ping -M do -s 8972`
- Domain weight: Troubleshooting = 28% of SK0-005

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. The 6 steps? ___
2. First thing to check on 3-beep POST? ___
3. Blue drive LED — what does it indicate? ___
4. Linux disk-latency tool? ___
5. Backout plan — when do you execute it? ___
6. What does CMDB store? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ Take the **Practice Exams** in `Practice-Exams/` (Practice-Exam-1, Practice-Exam-2, Final-Mock-Exam).
