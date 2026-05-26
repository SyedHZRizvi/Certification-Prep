# ✏️ Module 8 Quiz: Troubleshooting & Documentation

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The CompTIA 6-step troubleshooting methodology begins with: *(Remember)*
A. Implement the solution
B. Identify the problem
C. Test the theory
D. Document findings

---

### Q2. After confirming the theory of probable cause is correct, the NEXT step is: *(Remember)*
A. Document findings
B. Establish a plan of action and implement
C. Re-identify the problem
D. Verify functionality

---

### Q3. The LAST step in the methodology is: *(Remember)*
A. Test the theory
B. Verify functionality
C. Document findings, actions, and outcomes
D. Implement the solution

---

### Q4. A server beeps 3 short tones at boot and refuses to POST. The FIRST thing to check is: *(Apply)*
A. The power supply
B. RAM (reseat or swap) — 3 beeps most often indicates a memory fault on common AMI BIOS
C. The drives
D. The video card

---

### Q5. The blue LED on a server's drive bay is most often the: *(Remember)*
A. Failure indicator
B. Power indicator
C. Identify / Locator LED (admin-toggled from iDRAC/iLO)
D. Network activity

---

### Q6. A solid amber drive LED indicates: *(Understand)*
A. Normal activity
B. Drive failure or predictive failure — check RAID controller and follow vendor swap procedure
C. Identify mode
D. Network link

---

### Q7. Memory single-bit ECC errors trending upward on one DIMM means: *(Apply)*
A. Ignore — single-bit is auto-corrected
B. Schedule replacement of that DIMM before it produces uncorrectable errors / data corruption
C. Reboot to clear
D. Add more DIMMs

---

### Q8. A long RAID 5 rebuild on an array of large (10+ TB) drives raises which risk? *(Analyze)*
A. PSU failure
B. A second drive failure during the rebuild → total data loss
C. Network outage
D. None

---

### Q9. On Linux, the canonical command to view per-device I/O latency and utilization is: *(Remember)*
A. `top`
B. `iostat -xz 1`
C. `ping`
D. `tcpdump`

---

### Q10. On Windows, the Resource Monitor counter for sustained CPU pressure is: *(Apply)*
A. `Processor → Processor Queue Length`
B. `Memory → Cache Bytes`
C. `LogicalDisk → Avg Disk sec/Read`
D. `Network Interface → Bytes Total/sec`

---

### Q11. A database is slow. CPU is 22%, memory 50%, disk latency 4 ms, NIC 200 Mbps of 10 Gb. The MOST likely cause is: *(Analyze)*
A. CPU
B. RAM
C. Disk
D. Application-level (query plan, locking, GC) — none of the four infra resources are saturated

---

### Q12. To verify MTU 9000 reaches end-to-end on Linux, run: *(Apply)*
A. `ping -M do -s 8972 destination`
B. `ping -s 64 destination`
C. `traceroute -I destination`
D. `iperf3 -u destination`

---

### Q13. A new LUN appears as 4 disks in Windows. The cause: *(Apply)*
A. The SAN is broken
B. MPIO is not installed; each path is being seen as a separate disk
C. Windows requires 4 disks per LUN
D. The disk has 4 partitions

---

### Q14. A change failed at 2 a.m. The runbook's next step is to: *(Apply)*
A. Wait until morning
B. Execute the backout plan
C. Call the CFO
D. Start a new project

---

### Q15. Continuous on-call discipline saves time PRIMARILY because: *(Evaluate)*
A. Runbooks and methodology shrink decision time at 3 a.m.; random restart-everything escalates incidents
B. It looks good on a resume
C. It makes vendors happy
D. It avoids unionization

---

### Q16. The CMDB stores: *(Understand)*
A. Backup catalogs only
B. Inventory + relationships + ownership of all configuration items
C. Firewall rules only
D. AD passwords

---

### Q17. A blameless post-mortem focuses on: *(Understand)*
A. Identifying the individual to fire
B. System and process improvements rather than personal blame
C. Avoiding documentation
D. Reducing monitoring

---

### Q18. SMART attributes on a drive provide: *(Remember)*
A. RAID rebuild progress
B. The drive's self-reported health metrics (reallocated sectors, pending sectors, etc.)
C. Multipath status
D. NIC link counters

---

### Q19. A standard change is: *(Understand)*
A. Any change requiring CAB review
B. A pre-approved low-risk repeatable change (e.g., monthly Windows updates after testing)
C. An emergency change
D. A change with no approval

---

### Q20. A best-practice runbook includes: *(Apply)*
A. Steps without verification or rollback
B. Numbered steps + per-step verification + rollback + verification + post-action comms
C. Just the steps
D. A blank template

---

### Q21. A user complains "can't log in to the domain." Ping works, DNS resolves, other users on the same DC are fine. The first thing to check is: *(Apply)*
A. Reboot the DC
B. Whether the user account is expired/locked or the password just changed
C. Replace the user's PC
D. Disable DNS

---

### Q22. After applying a patch, all VMs on a host suddenly run very slowly. The MOST likely cause is: *(Analyze)*
A. The patch unconditionally improved performance
B. EVC level changed, time sync broke, or a driver regression — investigate the change first
C. Storage failure
D. Cosmic rays

---

### Q23. A pair of switches in MLAG suddenly shows one path down on a teamed server NIC. The server traffic is BEST described as: *(Understand)*
A. Completely lost
B. Continuing on the remaining LACP member with reduced aggregate bandwidth
C. Sending duplicate frames
D. Forwarded to a backup VLAN

---

### Q24. The MOST important documentation to update after replacing a failed drive is: *(Apply)*
A. The CFO's slide deck
B. The change ticket, CMDB entry, and asset record (serial of new drive, warranty, action)
C. The marketing site
D. Twitter

---

### Q25. The BIA's relationship to incident response: *(Understand)*
A. None
B. BIA defines RTO/RPO targets that IR/DR plans are designed to meet
C. BIA replaces IR
D. BIA is a vendor agreement

---

### Q26. *Design exercise.* You are paged at 2 a.m. about a critical API returning 504 errors at 12% rate. Using the 6-step methodology, the FIRST hour should look like: *(Create)*

A. Restart everything, then go back to sleep
B. **Identify** scope from monitoring; **theorize** likely causes (app server CPU, DB latency, network); **test** by checking the right counters and logs; **plan + implement** a targeted fix; **verify** error rate drops; **document** in incident ticket with timeline + root cause
C. Page the CTO and wait
D. Roll back every change made this year

---

## 🎯 Answers + Explanations

### Q1: **B. Identify the problem**
Step 1 — gather information, question users, determine what changed.

### Q2: **B. Establish a plan of action and implement**
After confirming theory → Step 4 (plan + implement). Do NOT skip to "document."

### Q3: **C. Document findings, actions, and outcomes**
Step 6 — close the loop with documentation. Most-missed step in practice; most-tested on the exam.

### Q4: **B. RAM (reseat or swap) — 3 beeps most often indicates a memory fault on common AMI BIOS**
RAM is the most common beep-code cause; vendor charts vary, so always cross-reference.

### Q5: **C. Identify / Locator LED (admin-toggled from iDRAC/iLO)**
Blue locator LED helps a tech find the right drive in a stack — admin presses it from the management interface.

### Q6: **B. Drive failure or predictive failure — check RAID controller and follow vendor swap procedure**
Amber = problem. Confirm via RAID controller utility before pulling.

### Q7: **B. Schedule replacement of that DIMM before it produces uncorrectable errors / data corruption**
Trending corrections forecast eventual uncorrectable failures. Replace proactively.

### Q8: **B. A second drive failure during the rebuild → total data loss**
RAID 5 only tolerates one failure. Long rebuild + statistically correlated drive ages = real risk. Use RAID 6 or RAID 10 for large arrays.

### Q9: **B. `iostat -xz 1`**
Per-device extended stats — latency (`await`), throughput (`r/s`, `w/s`), utilization (`%util`).

### Q10: **A. `Processor → Processor Queue Length`**
Sustained > 2× cores = CPU pressure. % Processor Time alone can mislead on hyperthreaded CPUs.

### Q11: **D. Application-level (query plan, locking, GC) — none of the four infra resources are saturated**
When none of the four are saturated, the bottleneck is in code/architecture, not infrastructure.

### Q12: **A. `ping -M do -s 8972 destination`**
`-M do` sets DF; `-s 8972` = 9000 - 20 (IP header) - 8 (ICMP header). If it succeeds without fragmentation, MTU 9000 works end-to-end.

### Q13: **B. MPIO is not installed; each path is being seen as a separate disk**
Always install/configure MPIO before mapping a SAN LUN. Module 3 trap.

### Q14: **B. Execute the backout plan**
Backout exists for exactly this moment. Implement the predefined rollback.

### Q15: **A. Runbooks and methodology shrink decision time at 3 a.m.; random restart-everything escalates incidents**
Methodology + runbooks turn chaos into a 30-min targeted fix instead of a 4-hour scramble.

### Q16: **B. Inventory + relationships + ownership of all configuration items**
CMDB = single source of truth for what exists, where, who owns it.

### Q17: **B. System and process improvements rather than personal blame**
Blameless = focus on systemic causes, not "who broke it." Google SRE-style postmortem.

### Q18: **B. The drive's self-reported health metrics (reallocated sectors, pending sectors, etc.)**
SMART attributes are a leading indicator of drive failure. Use smartctl to read them.

### Q19: **B. A pre-approved low-risk repeatable change (e.g., monthly Windows updates after testing)**
Standard changes have a pre-defined procedure and don't require per-instance CAB approval.

### Q20: **B. Numbered steps + per-step verification + rollback + verification + post-action comms**
A real runbook lets a less-senior tech execute reliably with safety rails.

### Q21: **B. Whether the user account is expired/locked or the password just changed**
Other users work → DC and DNS are fine. Most likely single-user state.

### Q22: **B. EVC level changed, time sync broke, or a driver regression — investigate the change first**
After-change performance regression → investigate the change. EVC, time, drivers are common culprits.

### Q23: **B. Continuing on the remaining LACP member with reduced aggregate bandwidth**
LACP handles member failure transparently. Aggregate bandwidth halves but traffic flows.

### Q24: **B. The change ticket, CMDB entry, and asset record (serial of new drive, warranty, action)**
Keeps the CMDB accurate. Vendor warranty tracking depends on this.

### Q25: **B. BIA defines RTO/RPO targets that IR/DR plans are designed to meet**
BIA is upstream of both IR and DR. Targets drive plan design (Module 5).

### Q26: **B. Identify scope from monitoring; theorize likely causes (app server CPU, DB latency, network); test by checking the right counters and logs; plan + implement a targeted fix; verify error rate drops; document in incident ticket with timeline + root cause**
Methodology under pressure. Random restarts (A, D) escalate. C abdicates the responsibility.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 8 mastered. Onward to the practice exams.
- 21–24/26 → ✅ Solid.
- 17–20/26 → ⚠️ Memorize the 6-step methodology + LED meanings.
- <17/26 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- The 6 troubleshooting steps in order
- POST → beep code → RAM first
- LED meanings (power / health / drive / activity / locator)
- Linux perf tools (top/iostat/vmstat/iftop/tcpdump)
- Windows perf counters (Proc Queue Length, Avg Disk sec/Read, Pages/sec)
- `ping -M do -s 8972` for MTU 9000 verification
- CMDB / runbook / post-mortem hygiene
- Change types: standard / normal / emergency
- BIA → IR/DR linkage

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then take the **Practice Exams** in `Practice-Exams/`.
