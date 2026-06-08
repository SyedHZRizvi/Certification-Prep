# ✏️ Module 5 Quiz: Hardware & Network Troubleshooting

> Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26.
>
> **Bloom distribution:** Remember 5 · Understand 6 · Apply 8 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. The CompTIA 6-step methodology in order is: *(Remember)*
A. Document → Identify → Test → Theory → Plan → Verify
B. Identify → Theory → Test → Plan → Verify → Document
C. Theory → Identify → Plan → Test → Document → Verify
D. Plan → Test → Theory → Identify → Verify → Document

---

### Q2. A technician has just confirmed that a faulty NIC is causing intermittent connectivity. The NEXT step is: *(Apply)*
A. Document the findings
B. Establish a plan of action and implement the solution
C. Identify the problem
D. Verify full system functionality

---

### Q3. A PC has fans spinning and motherboard LEDs lit, but no display. The MOST efficient first 3 checks (in order): *(Apply)*
A. Replace motherboard, then CPU, then RAM
B. Verify monitor power + cable + input, then reseat RAM, then test with known-good GPU
C. Reformat the OS, then reinstall drivers, then update BIOS
D. Replace the PSU, then RAM, then GPU

---

### Q4. A user's `ipconfig /all` shows IP address 169.254.42.10. This indicates: *(Understand)*
A. The PC is connected to a public IP
B. APIPA, the PC failed to reach a DHCP server
C. The PC has been manually configured by IT
D. The default gateway is wrong

---

### Q5. A user can `ping 8.8.8.8` successfully but `ping google.com` fails. The MOST likely cause: *(Apply)*
A. The internet is completely down
B. DNS resolution is failing
C. The default gateway is wrong
D. The cable is damaged

---

### Q6. Continuous beeping at boot on a desktop is MOST commonly: *(Apply)*
A. CPU failure
B. RAM issue, reseat or test
C. The hard drive needs defragmentation
D. Windows installer running

---

### Q7. A RAID 5 array with 6 disks is rebuilding after a disk failure. During the rebuild, a second disk fails. What is the array's state? *(Analyze)*
A. Fully functional
B. Lost, RAID 5 only tolerates 1 disk failure; second failure during rebuild = total data loss
C. Self-healing
D. Still degraded but recoverable

---

### Q8. To prove that an Ethernet cable is good end-to-end (all 8 pairs), the appropriate tool is: *(Remember)*
A. Tone generator
B. Cable tester
C. Wi-Fi analyzer
D. Multimeter

---

### Q9. A user reports their laptop reboots randomly under heavy gaming load but is fine at idle. The PSU is 65W (laptop adapter). The MOST likely cause is: *(Analyze)*
A. Failing wireless card
B. Overheating CPU/GPU triggering thermal shutdown OR adapter incapable of sustaining peak draw
C. Bad RAM
D. Faulty monitor

---

### Q10. To test if port 443 is open from a Windows PC to `example.com`, the BEST tool is: *(Apply)*
A. ping example.com
B. Test-NetConnection -Port 443 example.com
C. tracert example.com
D. arp -a

---

### Q11. SMART data reports a rising "Reallocated Sector Count" on a 5-year-old HDD. The MOST appropriate action: *(Apply)*
A. Ignore, it's normal
B. Back up immediately and replace the drive proactively
C. Defragment to fix
D. Reformat to "heal" the drive

---

### Q12. A PC POSTs and boots into BIOS but the SSD is not listed. The MOST efficient FIRST two checks: *(Apply)*
A. Reformat the OS
B. Reseat SATA data + power cables; if no change, swap cables / try another SATA port
C. Replace motherboard
D. Replace CPU

---

### Q13. The L1 (physical) check for "this user can't access the network" is: *(Understand)*
A. Run nslookup
B. Confirm cable plugged in + NIC link light on
C. Reinstall the OS
D. Reboot the DNS server

---

### Q14. A 3rd-floor office Wi-Fi is slow only at lunchtime. Most likely: *(Analyze)*
A. The router is broken
B. AP overloaded, many simultaneous clients during lunch + 2.4 GHz interference
C. DNS is broken
D. The cable run is too long

---

### Q15. RAID 6 differs from RAID 5 in that it: *(Understand)*
A. Has only 1 parity disk
B. Has 2 parity blocks distributed → survives 2 simultaneous disk failures
C. Is faster than RAID 0
D. Doesn't need a controller

---

### Q16. A user reports "Blue Screen of Death" with stop code `MEMORY_MANAGEMENT`. The MOST appropriate first diagnostic: *(Apply)*
A. Reinstall Windows
B. Run MemTest86 for at least one full pass (ideally 24 hr)
C. Replace the motherboard
D. Defragment the disk

---

### Q17. A "click of death" sound from an HDD indicates: *(Remember)*
A. Normal operation
B. Failing read/write head, back up data immediately
C. Cooling fan needs lubrication
D. The PSU is dying

---

### Q18. A user reports their wired connection is now 100 Mbps instead of 1 Gbps. The MOST likely cause: *(Analyze)*
A. The ISP downgraded the plan
B. Cable issue, likely a bad pair (gigabit needs all 4 pairs; 100M only needs 2) or wrong patch panel category
C. The motherboard is dying
D. DNS is wrong

---

### Q19. A PC won't power on at all, no fans, no LEDs. The FIRST three things to check: *(Apply)*
A. Replace motherboard, then CPU, then RAM
B. PSU switch on, wall outlet works, front-panel power connector seated
C. Reformat the SSD
D. Update BIOS

---

### Q20. The diagnostic that shows each hop a packet takes to reach a destination is: *(Remember)*
A. ping
B. tracert / traceroute
C. nslookup
D. netstat

---

### Q21. A user's RAID 1 mirror has lost one disk. What's the immediate impact AND the immediate action? *(Apply)*
A. Total data loss; restore from backup
B. Mirror is degraded but functional; replace the failed disk and let it resync from the survivor
C. The array becomes RAID 0 automatically
D. Both disks must be replaced

---

### Q22. The PRIMARY reason a 16-disk RAID 5 array of 18 TB drives is operationally dangerous in 2026 is: *(Evaluate)*
A. RAID 5 is a marketing term only
B. Rebuild time is days; the probability of a second disk failure during rebuild becomes unacceptably high. Use RAID 6 or RAID 10.
C. RAID 5 doesn't work with SATA
D. RAID 5 always exceeds 100 TB capacity

---

### Q23. A user can ping their default gateway but cannot ping 8.8.8.8. The MOST likely cause: *(Apply)*
A. DNS issue
B. WAN / ISP issue or gateway has no upstream route
C. The user's keyboard is broken
D. The phone is in airplane mode

---

### Q24. A POST returns 1 long beep + 3 short beeps (AMI BIOS). This generally indicates: *(Remember)*
A. RAM problem
B. Video / GPU problem
C. Hard drive failure
D. Normal POST

---

### Q25. A new technician suggests "replacing the motherboard" as the first step for a system that won't POST. The senior tech responds: *(Evaluate)*
A. "Yes, motherboards are usually wrong"
B. "Almost never first, start with PSU, RAM reseat, and cheap-fast tests before swapping expensive parts"
C. "Reformat the SSD instead"
D. "Reinstall Windows first"

---

### Q26. Design challenge: A small business runs a critical SQL Server on a 4-disk array. They need: (a) survives 2 simultaneous disk failures, (b) decent write performance, (c) tolerant of long rebuilds. The BEST RAID choice is: *(Create)*

> *Create-level note:* you are weighting redundancy vs performance vs rebuild safety.
A. RAID 0, speed first
B. RAID 5, best capacity
C. RAID 6 with 4 disks, survives 2 failures, dual parity, slower writes but acceptable for SQL
D. RAID 10 with 4 disks, survives 1 failure per mirror, but only specific 2-disk patterns

---

## 🎯 Answers + Explanations

### Q1: **B. Identify → Theory → Test → Plan → Verify → Document**
The exact order. Document is always last.

### Q2: **B. Establish a plan of action and implement the solution**
Step 4 (after testing the theory). Documentation comes in step 6.

### Q3: **B. Monitor + cable + input, then RAM, then GPU**
Cheapest fastest checks first. Standard methodology.

### Q4: **B. APIPA, DHCP failure**
169.254.0.0/16 is the APIPA self-assigned range when Windows can't reach a DHCP server.

### Q5: **B. DNS resolution is failing**
You can reach an IP (routing OK) but not by name → DNS is broken.

### Q6: **B. RAM issue**
Continuous beeps almost universally = RAM. Reseat, then test individual sticks.

### Q7: **B. Lost, RAID 5 only tolerates 1 disk failure**
A second failure during rebuild = total loss in RAID 5. This is the canonical RAID 5 risk.

### Q8: **B. Cable tester**
Cable tester checks all 8 pairs for continuity. Tone generator is for *tracing*, not testing pairs.

### Q9: **B. Overheating triggering thermal shutdown OR PSU/adapter incapable**
Random reboots only under load = power or thermal. Idle works → not RAM or wireless.

### Q10: **B. Test-NetConnection -Port 443 example.com**
PowerShell's port-test. Modern replacement for `telnet host 443`.

### Q11: **B. Back up immediately and replace proactively**
Rising reallocated sectors = drive nearing end of life. Don't wait for failure.

### Q12: **B. Reseat SATA cables; swap cables or port**
The cable is the cheapest fix. Tried second: substituting a known-good cable / different port. Only after these → replace SSD.

### Q13: **B. Cable + link light**
L1 = physical. Always the first cheap check.

### Q14: **B. AP overloaded + 2.4 GHz interference at lunchtime**
Many users in the same room + a peak time → AP capacity strain. Lunchtime microwave/Bluetooth usage adds 2.4 GHz noise.

### Q15: **B. Dual parity → survives 2 failures**
RAID 6's whole reason to exist. Slower writes but much safer than RAID 5 at large disk counts.

### Q16: **B. Run MemTest86**
MEMORY_MANAGEMENT BSOD strongly suggests RAM. Test before replacing.

### Q17: **B. Failing read/write head, back up**
The mechanical click is the head trying to position over the platter and failing. Back up immediately.

### Q18: **B. Cable issue, bad pair, wrong category**
Gigabit needs all 4 pairs; 100M needs 2. A damaged cable can downgrade. Cat 5 (not 5e) can do 100M but not 1G.

### Q19: **B. PSU switch, outlet, front-panel power connector**
The cheap fast checks. PSU switch is often overlooked.

### Q20: **B. tracert / traceroute**
Shows L3 hop-by-hop. ping is round-trip only.

### Q21: **B. Mirror degraded but functional; replace + resync**
RAID 1 with one survivor still serves data; replace failed disk and resync from survivor.

### Q22: **B. Rebuild time is days; probability of second failure becomes too high**
The well-known "RAID 5 is dead" argument. At 18 TB drives, rebuilds take 40+ hours of read stress on every other disk.

### Q23: **B. WAN / ISP issue or gateway has no upstream**
Can ping gateway = L3 to it works. Cannot ping internet = upstream broken.

### Q24: **B. Video / GPU**
AMI 1 long + 3 short typically indicates video. (Other BIOS vendors differ, always consult the manual.)

### Q25: **B. "Almost never first, cheap-fast tests first"**
Standard troubleshooting wisdom. Motherboards are expensive and rarely the issue.

### Q26: **C. RAID 6 with 4 disks**
Survives 2 simultaneous failures. Only 50% capacity efficient with 4 disks but meets the requirement. RAID 10 only survives specific 2-disk patterns.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Troubleshooting locked in.
- 22–24/26 → ✅ Good. Drill the methodology order.
- 18–21/26 → ⚠️ Re-read the RAID and network-triage sections.
- <18/26 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- 6-step methodology (in order)
- "What's the NEXT step" pattern recognition
- APIPA = 169.254.x.x → DHCP failure
- ping 8.8.8.8 vs ping google.com to bisect DNS vs routing
- SMART rising reallocated sectors = predict failure
- RAID 5 rebuild risk
- RAID 6 = dual parity, survives 2 failures
- Click of death = HDD head failing

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Printers](../Module-06-Printers/Reading.md)
