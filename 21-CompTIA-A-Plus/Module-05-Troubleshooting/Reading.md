# Module 5: Hardware & Network Troubleshooting 🔧

> **Why this module matters:** Combined with Module 6 (Printers), troubleshooting is **29% of the 220-1101 exam** — about 26 questions. It's the biggest Core 1 domain. The exam doesn't ask you to *describe* troubleshooting; it asks you to *do it* — picking the right next step in a half-described scenario. Master the CompTIA 6-step methodology and the layered diagnostic mindset and you will pick up easy points.

> **Prerequisites for this module.** You need:
> - Module 3 (CPU, RAM, storage, PSU)
> - Module 2 (network basics, IPs, ports)
>
> Hands-on suggestion: open an old PC, remove and reseat the RAM, swap a SATA cable, replace a CMOS battery. Touch makes this stick.

---

## 🛠️ A Story: The Storage Server That Almost Lost a Hospital's Records

Meet Aisha. She's a sysadmin at a 400-bed hospital. At 3:47 a.m. on a Saturday, the on-call pager goes off: the radiology imaging server — which holds **every CT, MRI, and X-ray for the entire hospital** — is throwing alerts. The RAID 6 array shows **two failed drives** out of 12. The array is degraded but still serving data. If a third drive fails, every image is gone.

Aisha drives to the data center. She finds drive 4 (red LED) and drive 9 (red LED). She has hot spares: 3 spare drives, same model, on the shelf. She follows the playbook:

1. **Identify the problem** — Two drive failures, same model, same batch. SMART logs show identical "uncorrectable read" errors. She suspects the batch.
2. **Establish a theory** — Likely cause: a manufacturing-defect batch (Western Digital had a known WD Red 4TB SMR issue circa 2020 that caused exactly this).
3. **Test the theory** — She checks the remaining 10 drives' SMART data. **Drive 7 also shows rising reallocated-sector count.** A third failure is *likely*, not just possible.
4. **Plan of action** — Replace drive 4 immediately, let array rebuild. *Don't* touch drive 9 until 4's rebuild completes — rebuilding stresses every other disk, and pulling another now could push drive 7 over the edge.
5. **Verify** — Drive 4 rebuilt in 11 hours (a 4TB drive in a RAID 6 is brutal). Then she replaced drive 9. Then she preemptively replaced drive 7 before it failed.
6. **Document** — Filed the SMART logs with vendor, requested an RMA on all 12 drives in the affected batch.

Total hospital downtime for imaging: **zero**. The patients getting CTs at 6 a.m. never knew anything happened.

That's troubleshooting. It's the methodology + the deep technical knowledge + the discipline to *not* pull the wrong cable at 4 a.m. This module teaches you the methodology, the symptom catalog, and the diagnostic mindset.

---

## 🎯 The CompTIA 6-Step Troubleshooting Methodology (MEMORIZE COLD)

You **will** be asked to identify the order, identify the current step from a scenario, and identify the next step.

1. **Identify the problem**
   - Question the user
   - Identify user changes / external factors (e.g., recent updates)
   - Gather symptoms
   - **Inquire regarding environmental or infrastructural changes**
   - Back up before making changes
2. **Establish a theory of probable cause**
   - Consider the obvious / most-likely first (Occam's razor)
   - Question the user further if needed
   - If necessary, conduct external research (knowledge base, internet, vendor)
3. **Test the theory to determine the cause**
   - If theory is confirmed → proceed to step 4
   - If not → establish a new theory or escalate
4. **Establish a plan of action and implement the solution**
   - Refer to vendor instructions if applicable
5. **Verify full system functionality and, if applicable, implement preventive measures**
6. **Document findings, actions, and outcomes**

🚨 **Most-asked exam question style:** *"A technician has just confirmed that a faulty NIC is causing a connectivity issue. What is the NEXT step?"* → **Establish a plan of action and implement the solution (Step 4).** The trap is "Document" — documentation is always *last*.

---

## 🔬 The Layered Diagnostic Mindset

Whenever a system fails, work **bottom up through OSI / physical → logical / app**:

```
Layer 7: Application      → Did the user click the right thing?
Layer 6: Presentation     → Cert / encryption issue?
Layer 5: Session          → Login / session expired?
Layer 4: Transport        → Port blocked? Firewall?
Layer 3: Network          → IP / routing / DNS / gateway?
Layer 2: Data Link        → Switch port up? VLAN right? MAC right?
Layer 1: Physical         → Cable plugged in? Link light?
```

Always **start at L1** unless you have strong reason to start higher. "Is the cable plugged in?" is not condescending — it's the cheapest test.

---

## 💀 Hardware Symptoms Catalog

### PC won't power on at all

**Symptoms:** No fans, no LEDs, no display.

| Likely cause | Test | Fix |
|--------------|------|-----|
| PSU power switch off / cable unplugged | Look at the switch on the back | Switch on / plug in |
| Wall outlet dead | Test outlet with lamp | Use different outlet |
| Front-panel power button disconnected | Open case, check PWR_SW header | Reconnect; or jumper PWR_SW pins |
| PSU dead | Paper-clip test (green-to-black on 24-pin) | Replace PSU |
| Surge-protected outlet tripped | Reset surge protector | Reset |

### Fans spin but no display ("POSTs but no video")

| Likely cause | Test | Fix |
|--------------|------|-----|
| Monitor off / wrong input | Check monitor | Power on / switch input |
| Cable loose | Reseat HDMI/DP/VGA | Reseat |
| GPU failure | Test with known-good GPU or iGPU port | Replace GPU |
| RAM not seated | Reseat RAM (sometimes prevents POST without beeping) | Reseat |
| CPU not seated / no thermal paste | Visual inspect | Reseat with fresh paste |

### POST beep codes (varies by BIOS vendor — Award/AMI/Phoenix)

| Pattern | Generally means |
|---------|-----------------|
| 1 short beep | Normal POST, all OK |
| Continuous beeps | RAM problem |
| 1 long + 2/3 short | Video / GPU |
| 1 long + 3 short (AMI) | Video memory failure |
| No beeps + no POST | Motherboard / CPU / power |

🎯 **Exam pattern:** Always consult the motherboard manual for exact codes. The exam may give you a code and ask, "What component?" — answers should be informed by component (RAM, GPU, CPU) rather than memorizing every vendor's pattern.

### Random reboots / lockups

| Likely cause | Test | Fix |
|--------------|------|-----|
| Overheating (CPU or GPU) | HWiNFO64 — watch temps | Clean fans, reapply thermal paste, better cooler |
| Bad RAM | MemTest86 (24-hour run) | Replace RAM |
| PSU under-sized / failing | Substitute known-good PSU | Replace PSU |
| Failing storage | SMART data via `smartctl` or Crystal Disk Info | Replace drive |
| Motherboard | If above all fail | Replace board |

### Display issues

| Symptom | Likely cause |
|---------|--------------|
| Distorted colors | Cable, monitor, GPU driver |
| Dim display (laptop) | Backlight failing, brightness keys |
| Flickering | Refresh rate mismatch, loose cable, failing inverter (LCD) |
| Dead pixels | Permanent in OLED/LCD; massage trick rarely works |
| Burn-in (OLED) | Static image left too long |
| Image only half displays | Loose cable, failing GPU memory |

### Storage failures

| Symptom | Likely diagnosis |
|---------|------------------|
| Click of death (HDD) | Failing read/write head — back up NOW |
| "Boot device not found" | Drive not detected — SATA cable, dead drive, BIOS boot order |
| Frequent freezes during file I/O | Bad sectors — run `chkdsk /r` (Windows) or `fsck` (Linux) |
| SSD shows reduced capacity / fails | Drive end-of-life — replace |
| RAID degraded | Replace failed disk, let rebuild complete before touching others |

---

## 🌐 Network Troubleshooting

### "I can't access anything" — full triage

Walk down the OSI stack:

1. **L1:** Cable plugged in? Link light on NIC?
2. **L2:** Does NIC have a valid MAC and link state? (`ipconfig`)
3. **L3:** Valid IP? Not APIPA (169.254.x.x)? Default gateway? Can ping gateway?
4. **L3:** DNS working? Try `ping 8.8.8.8` (bypasses DNS), then `ping google.com`.
5. **L4:** Specific port blocked? Try `telnet host 443` or `Test-NetConnection -Port 443`.
6. **L7:** App-specific (browser cache, credentials).

### Common network symptoms → causes

| Symptom | Likely cause |
|---------|--------------|
| `ipconfig` shows 169.254.x.x | APIPA — DHCP failed (check cable, router, DHCP server) |
| `ping 8.8.8.8` works; `ping google.com` fails | DNS broken |
| `ping gateway` works; `ping 8.8.8.8` fails | Internet down upstream / gateway has no internet |
| Intermittent dropouts on wireless | Interference, weak signal, AP overloaded |
| Slow on wired only | Negotiated speed (gigabit dropped to 100 Mbps — cable issue) |
| Connection drops every few minutes | DHCP lease, AP roaming, ISP issue |
| Specific website only fails | DNS, HOSTS file, browser issue |
| All wireless devices dropped | Restart AP/router |

### Wireless-specific symptoms

| Symptom | Cause |
|---------|-------|
| Slow Wi-Fi in one room | Signal weakening with distance; consider mesh |
| 2.4 GHz drops, 5 GHz fine | Channel interference (microwave, neighbors); change channel |
| Can't connect — wrong password | Re-enter, or "forget network" then rejoin |
| 5 GHz devices won't see SSID | 5 GHz weaker through walls; try 2.4 GHz SSID instead |
| Newer 6E/7 device can't see 6 GHz SSID | Country-code / regional regulation, AP firmware |

### CLI tools (Windows)

| Tool | Use |
|------|-----|
| `ipconfig /all` | Full NIC info |
| `ipconfig /release` then `/renew` | Force new DHCP lease |
| `ipconfig /flushdns` | Clear DNS cache (after fixing a DNS issue) |
| `ping host` | ICMP reachability |
| `tracert host` | Hops to a destination |
| `pathping host` | tracert + per-hop loss measurement |
| `nslookup host` | DNS lookup |
| `nslookup host 8.8.8.8` | DNS lookup against a *specific* DNS server |
| `netstat -ano` | Active connections + PIDs |
| `Test-NetConnection -Port 443 host` | PowerShell port test |
| `arp -a` | ARP cache |
| `route print` | Routing table |
| `getmac` | NIC MAC |

### CLI tools (Linux/macOS)

| Tool | Use |
|------|-----|
| `ip a` (or `ifconfig`) | NIC info |
| `ping host` | ICMP |
| `traceroute host` (or `tracepath`) | Hops |
| `dig host` (or `nslookup`) | DNS |
| `nc -zv host 443` (netcat) | Port test |
| `ss -tunlp` | Sockets |
| `mtr host` | Continuous tracert + ping |

---

## 🛡️ RAID Failure Modes

### RAID 0 — any disk dies = total loss
- **Action:** Restore from backup. RAID 0 has no redundancy.

### RAID 1 — one disk dies
- **Action:** Replace the failed disk, let it resync from the survivor. Continue using the array during rebuild.

### RAID 5 — one disk dies
- **Action:** Array is in *degraded* state. Replace failed disk; rebuild from parity. **DO NOT** lose a second disk during rebuild — that's total loss.
- **Rebuild time:** Hours to days for multi-TB disks — risky for large arrays. (Larger arrays often choose RAID 6.)

### RAID 6 — one or two disks die
- **Action:** Can survive 2 simultaneous failures. Replace disks; rebuild from dual parity.

### RAID 10 — one disk per mirror set dies
- **Action:** Array survives. Replace failed disk; mirror resyncs.
- **Risk:** If both disks in *one* mirror pair fail, array is gone.

🚨 **The biggest RAID risk during rebuild:** the rebuild process hammers *every other disk* with reads. A second disk near end-of-life often fails during rebuild → total loss for RAID 5. This is why RAID 6 became standard for arrays with >5 disks.

---

## 🔬 Scenario Walkthroughs (PBQ-style thinking)

### Scenario 1: "My PC powers on but I get a 'Boot device not found' error."

1. **Identify** — System POSTs (good — RAM, CPU, motherboard alive). Bootloader can't find OS.
2. **Theory** — Storage not detected, or boot order wrong.
3. **Test** — Enter UEFI/BIOS. Is the SSD listed under Storage? If yes → boot order issue. If no → SATA cable, power, dead SSD.
4. **Plan** — Set correct boot device in UEFI; if SSD not listed, reseat SATA + power; if still not detected, swap cables; if still nothing, replace SSD.
5. **Verify** — System boots into OS.
6. **Document** — KB entry: "SSD not detected — reseated SATA cable. Likely loose from recent case work."

### Scenario 2: "Multiple users on 3rd floor reporting slow / intermittent Wi-Fi."

1. **Identify** — Multiple users, one floor, wireless only. Wired is fine.
2. **Theory** — 3rd-floor AP failing, channel interference, AP overloaded, uplink saturated.
3. **Test** — Wi-Fi analyzer on phone: see neighboring SSIDs and channels. Log into AP — check client count, channel utilization, retransmit rates.
4. **Plan** — Found 3rd-floor AP on Channel 6, 35 clients, 70% channel utilization (overloaded). Add a second AP, split SSIDs by band, or move clients to 5 GHz.
5. **Verify** — Speed test from affected users.
6. **Document** — Heatmap + capacity plan update.

### Scenario 3: "A 12-disk RAID 6 NAS shows two red drives. The third drive shows rising 'reallocated sectors' SMART counter."

1. **Identify** — Two failed, one suspect. Array is degraded but functional.
2. **Theory** — Bad batch; the third drive is the next likely failure.
3. **Test** — Pull SMART on all 12; sort by reallocated sectors.
4. **Plan** — Replace drive 1 (one of the failed two) → wait for rebuild → replace drive 2 → wait → replace the suspect drive 3 *preemptively* before it fails.
5. **Verify** — Array status "Optimal" again.
6. **Document** — Vendor case for batch RMA; record SMART data for trend analysis.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Replace the motherboard first when in doubt" | Almost never the first step. Cheap-fast tests come first. |
| "If it POSTs, all hardware is fine" | POST checks the very basics. Plenty of hardware failures show after POST. |
| "Documentation is optional if you fix it" | Always step 6. Without docs, the next person re-learns the issue. |
| "RAID can replace backup" | NO. RAID survives hardware failure; backup survives ransomware, fire, mistake. |
| "Always replace the failed RAID disk immediately, all at once" | Replace one at a time; let rebuild complete before pulling the next. |
| "Beep codes are universal" | They differ by BIOS vendor. Consult the manual. |
| "If you can ping the gateway, internet works" | No — only L3 to gateway. ISP / WAN could still be down. |
| "Reformatting is a quick fix for slow PCs" | Rarely the right first step. Profile the bottleneck first. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **6-step methodology** | Identify → Theory → Test → Plan → Verify → Document |
| **POST** | Power-On Self-Test — runs at boot before OS loads |
| **Beep codes** | Audible failure codes from BIOS — vary by vendor |
| **SMART** | Self-Monitoring, Analysis, Reporting Tech — disk health |
| **APIPA** | 169.254.x.x — DHCP failure indicator |
| **Click of death** | Failing HDD sound |
| **Burn-in (OLED)** | Permanent ghost image from static content |
| **MemTest86** | Standard RAM testing utility |
| **chkdsk / fsck** | Disk repair (Windows / Linux) |
| **RAID degraded** | Array running with failed disk; vulnerable |
| **Rebuild risk** | A second failure during rebuild often = total loss in RAID 5 |
| **Boot order** | UEFI/BIOS sequence of devices to try for OS |

### Acronyms cheat-row (Module 5)
| Acronym | Meaning |
|---------|---------|
| POST | Power-On Self-Test |
| SMART | Self-Monitoring Analysis Reporting Tech |
| BSOD | Blue Screen of Death (Windows kernel panic) |
| GPU | Graphics Processing Unit |
| NIC | Network Interface Card |
| RAID | Redundant Array of Independent Disks |
| KVM | Keyboard/Video/Mouse switch (also a Linux hypervisor — context matters!) |
| ICMP | Internet Control Message Protocol (ping) |

---

## 📊 Case Study — The 2007 RAID Rebuild That Cost a Trading Firm $30M

**Situation.** A mid-tier algorithmic-trading firm in lower Manhattan ran their tick-data warehouse on a 16-disk RAID 5 array of 750 GB SATA drives in 2007 (cutting-edge density at the time). One Tuesday at the market open, drive 11 failed. The array entered *degraded* state but kept serving. A junior admin (employed 6 weeks) ran the documented "replace drive" procedure. The rebuild started.

**The cascade.** Rebuilding 750 GB across 15 surviving disks meant reading **every block** of every disk in the array. The disks were in their 4th year — well into the bathtub curve's right side. At hour 11 of the projected 14-hour rebuild, drive 4 threw an uncorrectable read error. Then drive 7. The array marked *failed* — both new failures during rebuild meant RAID 5 (which tolerates only 1 disk loss) was beyond recovery.

**Decision and outcome.** The firm restored from the previous night's backup. They lost **5.5 hours** of intraday tick data — the most valuable hours of any trading day. Internal estimates put direct trading-strategy losses at **$28–32M**. The firm's CIO was replaced within 60 days. The new CIO mandated:
- All arrays with >5 disks moved to **RAID 6** (dual parity).
- A hot spare on every array.
- Replacement of all disks at the 36-month mark, regardless of SMART status.
- Continuous off-array replication for tick data — every 60 seconds to a sister facility.

**Lesson for the exam / for practitioners.**
- **RAID 5 with large disks is a bet against probability that gets worse every year.** Modern best practice (since ~2009) for >5 disks or >2 TB drives is RAID 6 or RAID 10.
- **Rebuild times scale with disk size.** 18 TB drives can take 40+ hours to rebuild. The exposure window matters.
- **A junior admin executing a procedure is not the same as a senior admin owning the outcome.** The procedure was correct; the *risk-management context* was missing.

**Discussion (Socratic).**
- **Q1:** Modern data centers increasingly use RAID 60 (dual-parity over multiple stripe sets). Map the math: why is RAID 60 attractive for a 24-disk system?
- **Q2:** A small business has a 4-disk NAS in RAID 5 with 4 TB drives. Should they migrate to RAID 6 (using the same disks, losing 4 TB capacity)? Argue for and against.
- **Q3:** The firm in this case study restored from a nightly backup. They lost 5.5 hours. What RPO target would have prevented the trading loss, and what technologies would meet that RPO?

---

## ✅ Module 5 Summary

You now know:
- 🎯 The **CompTIA 6-step methodology** cold, with awareness of the "what's the next step" exam pattern
- 🔬 The **layered diagnostic mindset** — always start at L1 unless ruled out
- 💀 Hardware symptom catalog: power, POST, display, random reboot, storage
- 🌐 Network triage — APIPA, DNS bypass with `ping 8.8.8.8`, port test patterns
- 🛡️ RAID failure modes and the critical *rebuild risk* in RAID 5 with large disks
- 🛠️ Both Windows and Linux CLI toolkits for diagnostics

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 6 — Printers & Peripherals](../Module-06-Printers/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Printers/Reading.md) drills printer-specific troubleshooting; [Module 9](../Module-09-Software-Troubleshooting/Reading.md) is the software-troubleshooting cousin; [Module 11](../Module-11-Mobile-Troubleshooting/Reading.md) covers mobile.
> - Cross-course: Network+ (course 22) goes far deeper on layered network diagnostics; Server+ (course 24) on hardware RAID and storage troubleshooting.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 ATA/ATAPI SMART specification — Western Digital + Seagate technical references
- 📄 ACM Queue (2009). "Have Your RAID and Eat It Too: Why RAID 5 is Dead." — the canonical RAID 5 obituary
- 📄 IEEE 1394 / SAS / SATA standards — for storage interface knowledge

**Practitioner / exam:**
- 📖 [Professor Messer 220-1101 troubleshooting module](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video-training-course/)
- 📖 *Troubleshooting the iSeries Server* (IBM) — the methodology is universal even though the platform is IBM
- 📖 BackBlaze drive-failure stats — free, quarterly, the best data set on consumer disk MTBF
