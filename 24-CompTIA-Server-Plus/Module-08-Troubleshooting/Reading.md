# Module 8: Troubleshooting & Documentation 🔧

> **Why this module matters:** Troubleshooting is **28%** of SK0-005 — the second-biggest domain. Every PBQ will hand you a symptom (beep code, LED, slow query, dropped connection) and ask you to isolate the cause. Server+ also tests the formal **6-step methodology** by name — answer it wrong and you lose easy points. This module gives you the methodology, the per-subsystem diagnostic vocabulary, and the documentation hygiene the exam rewards.

> **Prerequisites for this module.** Before starting:
> - All previous modules (1–7) — troubleshooting is integrative
> - Comfort with running commands from a terminal (Windows + Linux)
>
> If those are shaky, pause and review before continuing.

---

## 🚒 A Story: The 3 a.m. Pager

Meet Aanya. She's the on-call sysadmin for an e-commerce platform. At 3:07 a.m. her phone vibrates: monitoring says the checkout API is returning 504 errors at a 12% rate. CFO emails the on-call lead by 3:15 a.m.

Aanya's bad version of this story:

- She opens 8 dashboards at once, randomly restarts services, reboots a load balancer "just in case," googles error messages while half-asleep, accidentally promotes a stale DB replica, then has to call her boss at 4:40 a.m. with a worse outage than she started with.

Aanya's good version of this story:

- She follows the **6-step methodology**.
- Steps 1-3 narrow the problem to "DB write latency spiked at 2:58 a.m."
- Step 4 maps to "a SAN path failed and MPIO is in degraded fallback."
- Step 5 fails the bad path, traffic re-balances on the healthy path, latency drops, 504s stop.
- Step 6 writes a clean post-mortem: root cause = optic going bad on storage NIC, replaced under SLA the next morning.

Total outage in the good version: 18 minutes. In the bad version: 4 hours and a damaged career. The difference is **discipline + methodology + good documentation + the right diagnostic vocabulary**. That's this module.

---

## 🎯 The CompTIA 6-Step Troubleshooting Methodology

CompTIA tests this **by name** across A+, Network+, Server+, Security+. **Memorize cold.**

| # | Step | What |
|---|---|---|
| **1** | **Identify the problem** | Gather information; question the user (or operator); identify symptoms; determine if anything changed recently; approach multiple problems individually |
| **2** | **Establish a theory of probable cause** | Question the obvious (cable, power); divide and conquer; consider the OSI model from bottom up |
| **3** | **Test the theory to determine the cause** | If theory is confirmed → step 4. If not → re-establish a new theory or escalate |
| **4** | **Establish a plan of action to resolve the problem AND implement the solution** | Document the plan; consider backout; communicate impact; act |
| **5** | **Verify full system functionality and, if applicable, implement preventive measures** | Confirm fix; verify dependent systems; add a monitoring check that would catch this earlier next time |
| **6** | **Document findings, actions, and outcomes** | Tickets, runbook updates, post-mortem, CMDB updates, knowledge base entry |

🎯 **Exam pattern:** *"After confirming a theory of probable cause, what is the NEXT step?"* → **Step 4 — establish a plan and implement.**

🚨 **Trap on the exam:** Steps are tested with phrasing like "before you implement…" or "after verifying functionality, you…" — practice the order until you can recite it backwards.

---

## ⚡ Power-On Self-Test (POST) and Boot Issues

### What POST checks (typical order)

1. CPU initialization
2. Memory test (often abbreviated POST, full test in BIOS/UEFI setup)
3. Video card initialization
4. Storage controller (RAID controller boot ROM)
5. Network NIC (PXE option ROM)
6. Boot device selection per UEFI/BIOS boot order
7. Hand off to bootloader

### Beep codes — vendor-specific

Each vendor publishes a beep-code table. Common patterns:

| Beeps (AMI / common) | Meaning |
|---|---|
| 1 short | POST passed (you don't always hear this) |
| 3 short | RAM read/write failure |
| 5 short | CPU error |
| 7 short | CPU fatal exception |
| 1 long, 3 short | Video card error |
| Continuous | PSU / motherboard catastrophic |

🚨 **Trap on the exam:** *"What's the FIRST thing to check when a server beeps repeatedly on boot?"* → **Reseat / swap RAM** (most common cause). Then consult the vendor's beep-code chart for specificity.

### Common boot symptoms and root causes

| Symptom | Likely cause | First action |
|---|---|---|
| No POST, no fans | PSU dead / not seated / no power | Check PSU LEDs, swap to known-good PDU outlet |
| POST → "no boot device" | RAID volume offline, boot order wrong, drive failed | Check RAID controller status; verify boot order in UEFI |
| Boot loops | Corrupted bootloader, failed update | Boot from rescue media; check event/SEL logs |
| OS won't load past splash | Driver issue, missing kernel module, corrupt FS | Safe Mode (Windows) / single-user / `rescue.target` (Linux) |
| BSOD / kernel panic at boot | Memory, driver, or firmware bug | Check minidump (Windows) / `journalctl` last-boot (Linux) |
| "Operating system not found" | UEFI/BIOS boot order misconfigured, drive disconnected | Boot order; check drive presence in firmware |
| Slow boot, then OK | Many possible: STP convergence on switch (no PortFast), waiting for unmapped network drives, AD timeout | Check timing; PortFast on switch port |
| Server boots but no network | NIC link down, wrong VLAN/IP, DHCP failure | NIC LEDs; switch port status; `ip a` / `ipconfig` |

🎯 **Exam pattern:** *"Server passes POST then says 'No bootable device.' Drive LEDs are green."* → **Check UEFI/BIOS boot order** OR **RAID volume not initialized/failed** at controller level.

---

## 💡 LEDs and Status Lights

Reading server LEDs is a Server+ rite of passage.

| LED | Typical meanings |
|---|---|
| **Power button** | Solid green = on; amber = standby; blinking = booting |
| **System health** | Solid green = OK; blinking amber = problem in BMC SEL; solid amber = failure |
| **PSU** | Solid green = OK; off = no AC; amber = fail |
| **NIC link/activity** | Green = link; amber/yellow = different speed; blinking = traffic |
| **Drive bay** | Green = active; blue = identify (admin-toggled); blinking green = activity; amber = pre-fail / failed |
| **Locator / ID** | Blue — operator pressed identify so the tech can find it in the rack |
| **iDRAC/iLO status** | Solid green = OK; amber = mgmt subsystem alert |

🚨 **Trap on the exam:** Solid amber drive LED + activity LED still flashing → **wait for the array to mark the drive failed before pulling**. Pulling mid-write corrupts the array (Module 1 also).

🎯 **Exam pattern:** *"Tech needs to find a server in a 40U rack."* → Admin presses **Identify (blue LED)** from iDRAC/iLO.

---

## 🧠 Memory Diagnostics

Memory problems manifest as: random app crashes, BSODs / kernel panics, ECC error counters incrementing in the BMC SEL, data corruption.

Tools:

| Tool | Platform |
|---|---|
| **Windows Memory Diagnostic** | Windows boot-time test (`mdsched.exe`) |
| **MemTest86 / MemTest86+** | Bootable USB; thorough multi-pass test |
| **BMC SEL** | Vendor management interface — counts correctable + uncorrectable ECC errors per DIMM |
| **`dmidecode -t memory`** | Linux — physical DIMM enumeration |
| **`edac-util`** | Linux — Memory Controller error reports |

If the SEL shows correctable ECC errors on one DIMM trending upward → schedule replacement. If uncorrectable → already corrupted data; replace immediately and audit affected workloads.

---

## 💽 Storage Diagnostics

### Common storage symptoms

| Symptom | Where to look |
|---|---|
| Slow I/O on a specific volume | Hot/cold tiering, RAID rebuild in progress, snapshot chain too long (VM), full pool (thin), MPIO failover |
| Drive LED amber | RAID controller status, SEL |
| Array rebuilding | RAID controller; monitor for second failure |
| "Disk is offline" in Windows | Disk Management → Online; verify SAN connection; check MPIO |
| Filesystem read-only | Underlying drive marked failed; storage path lost; quota; mount option |
| Backup fails repeatedly | Read backup logs; check destination space + permissions + connectivity |

### Tools

| Tool | What |
|---|---|
| **RAID controller utility** (PERC CLI for Dell, SSACLI for HPE, MegaCLI for LSI) | Array status, drive details, rebuild progress |
| **SMART attributes** | Drive self-reported health (smartctl) |
| **`iostat -xz 1`** (Linux) | Per-device I/O latency + utilization |
| **`perfmon`** (Windows) | Disk read/write counters, queue length, latency |
| **Storage array UI** (vendor) | Health, replication status, capacity |
| **Multipath status** | `multipath -ll` (Linux) / MPIO snap-in (Windows) |
| **VMware esxtop** | `d` for disk, watch DAVG / KAVG latency |

### Symptom → cause mapping

| Symptom | Likely cause |
|---|---|
| DAVG (device latency) high, KAVG (kernel) low | Underlying storage slow |
| KAVG high | Hypervisor queue stuck |
| LUN appears as multiple disks | MPIO not installed (Module 3 trap) |
| Disk queue depth chronically > 32 | Array overloaded or under-pathed |

🚨 **Trap on the exam:** Long disk queue + low CPU + healthy network = storage is the bottleneck. Don't add CPU.

---

## 🔥 Performance Bottlenecks — CPU / RAM / Disk / Network

Diagnosing "the server is slow" means *finding the saturated resource*.

### Windows: Resource Monitor / PerfMon counters

| Counter | What |
|---|---|
| `Processor → % Processor Time` | CPU busy |
| `Processor → Processor Queue Length` | Threads waiting (>2× cores is sustained pressure) |
| `Memory → Available MBytes` | Free + cache memory |
| `Memory → Pages/sec` | Paging activity (high = thrashing) |
| `LogicalDisk → Avg Disk sec/Read & Write` | Disk latency (>20 ms sustained = slow) |
| `LogicalDisk → Current Disk Queue Length` | Queue depth |
| `Network Interface → Bytes Total/sec` | Throughput |
| `Network Interface → Output Queue Length` | Send queue (any sustained > 2 = backpressure) |

### Linux: standard utilities

| Tool | Use |
|---|---|
| `top` / `htop` | Process CPU + RAM + load average |
| `uptime` | Load averages (1 / 5 / 15 min) |
| `vmstat 1` | CPU + memory + swap + I/O |
| `iostat -xz 1` | Per-device disk latency + util |
| `iotop` | Per-process disk I/O |
| `mpstat -P ALL 1` | Per-CPU utilization |
| `pidstat 1` | Per-process CPU + I/O |
| `free -h` | Memory + swap |
| `sar` | Historical metrics (sysstat) |
| `ss -tnp` / `netstat -anp` | Sockets / connections |
| `iftop` / `nload` / `bmon` | Per-interface throughput |
| `tcpdump` / `wireshark` | Packet capture |
| `dmesg` / `journalctl -k` | Kernel messages |

### Bottleneck triage (rule-of-thumb sequence)

1. **CPU** — sustained > 80% across all cores during the slow period?
2. **Memory** — paging/swapping? available memory near 0?
3. **Disk** — latency > 20 ms? queue chronically full?
4. **Network** — pps or bps near link rate? errors/drops on the interface?

🎯 **Exam pattern:** *"App is slow. CPU 35%, memory 60%, disk latency 6 ms, NIC 200 Mbps of 10 Gb."* → None of the four are saturated; investigate application-level issues (DB query plan, GC, lock contention) — not infrastructure.

---

## 🌐 Network Troubleshooting

| Symptom | First tool |
|---|---|
| Cannot reach a host by name | `nslookup` / `dig` — is DNS resolving? |
| Resolves but cannot connect | `ping` (ICMP), `traceroute` / `tracert` (path) |
| Connection times out on a port | `nc -vz host port` / `Test-NetConnection host -Port port` |
| Connected but slow | `iperf3` for end-to-end throughput baseline |
| Sporadic drops | Switch port counters (CRC errors, runts, giants), cable, optic |
| Asymmetric routing | `traceroute` from both ends; check ECMP / default gateways |
| Wrong VLAN | Switch port config; verify tagged VLAN on trunk |
| MTU mismatch (Module 7) | `ping -M do -s 8972` (Linux) / `ping -f -l 8972` (Windows) for MTU 9000 verification |

### Useful network diagnostic commands

| Tool | What |
|---|---|
| `ipconfig /all` (Windows) / `ip a` / `ifconfig` (Linux) | NIC config |
| `route print` / `ip route` | Routing table |
| `arp -a` / `ip neigh` | ARP cache (or IPv6 neighbor table) |
| `netstat -anp` / `ss -tnp` | Listening sockets + active connections |
| `nslookup host` / `dig host` | DNS resolution |
| `ping host` | ICMP reachability + latency |
| `traceroute host` / `tracert host` | Path |
| `mtr host` | Combined traceroute + ping over time |
| `nc -vz host port` | TCP port open check |
| `Test-NetConnection host -Port port` | PowerShell equivalent |
| `iperf3 -c server` | Throughput test |
| `tcpdump -ni eth0 port 443` | Packet capture |
| `nmap -p 22,80,443 host` | Port scan |

🎯 **Exam pattern:** *"Server connects to internet but cannot reach internal DB server. Both are on the same subnet."* → ARP, host firewall on the DB, or VLAN/access-port misconfig — not internet routing.

---

## 🔥 Common Sysadmin Symptoms → Likely Causes

| Symptom | Top suspects (in order) |
|---|---|
| User can't log in to domain | Time skew > 5 min (Module 2!), password expired/locked, DNS broken, AD replication |
| Service won't start | Logs (`journalctl -u svc` / Event Viewer), missing dependency, config syntax, port conflict, permissions |
| Slow query on a previously-fast DB | Stats out of date, missing index, query-plan change, locking, disk latency, snapshot chain |
| Backup window growing nightly | Data growth, RAID rebuild during window, MTU change, missing dedup, controller queue saturation |
| Random reboots | Overheating (check inlet temp + fan SEL), PSU failing under load, kernel panic, scheduled task triggering reboot |
| RAID rebuild taking days | Drive count + size; concurrent I/O load; controller bottleneck — patience or rate-limit array activity |
| VM performance crashed after a host patch | EVC level changed, vMotion compat lost, driver regression, time sync |
| New LUN appears as N disks | MPIO not installed (Module 3) |
| Storage VLAN suddenly slow | MTU mismatch (Module 7), STP loop, port flapping |

---

## 📑 Documentation — The Discipline That Saves You

### What to document

| Doc | Purpose |
|---|---|
| **CMDB** (Configuration Management Database) | Inventory of every system + relationships + owners |
| **Network diagram** | Current as of last change |
| **Rack elevation diagram** | What's in U1, U2, U3… per rack |
| **Runbooks** | Step-by-step for recurring operations + each DR scenario |
| **Knowledge base / wiki** | Searchable how-tos + post-mortems |
| **Change records** | Who changed what, when, why; tied to a ticket |
| **Incident records** | Symptoms, timeline, response, root cause, lessons |
| **Asset list** | Serial numbers, warranty, vendor support contracts |
| **Credentials vault** | Privileged passwords, escrow, break-glass |
| **License records** | Per-product, expiration |
| **Vendor contacts** | Escalation tree per vendor |

### Asset documentation specifics

Per server:

- Hostname + FQDN
- Serial / service tag
- Vendor + model
- CPU + RAM + storage layout
- BMC IP + credentials reference
- VLANs + IP addresses (mgmt, prod, storage)
- Operating system + patch level
- Roles / services hosted
- Owner / team
- Acquired date + warranty end
- Decommission target date

🎯 **Exam pattern:** *"How do you ensure a DR runbook contains accurate IPs and credentials?"* → Tie it to the **CMDB** and update both as a single workflow on every change.

### Runbook structure

| Section | What goes here |
|---|---|
| Title + version | Clear name + last-updated date |
| Owner / on-call | Who to contact |
| When to use | Trigger conditions |
| Pre-flight | Inventory checks, comms tree |
| Steps | Numbered, with verify-step after each |
| Rollback / backout | If the step fails |
| Verification | How you know it worked |
| Post-action | Comms, docs, ticket |

Runbooks are tested under fire. Run them in tabletop exercises (Module 5).

---

## 🔄 Change Management — Why It Belongs Here Too

(Some content recap from Module 1 of Sec+ / Module 2 / Module 5 — re-stated because Server+ tests it in the troubleshooting context.)

| Term | What |
|---|---|
| **CAB** (Change Advisory Board) | Reviews and approves changes |
| **Standard change** | Pre-approved low-risk repeatable (e.g., server reboot) |
| **Normal change** | Requires CAB review |
| **Emergency change** | Bypasses normal CAB, post-implementation review |
| **Impact analysis** | What breaks if we do this? |
| **Backout plan** | How we undo if it fails |
| **Maintenance window** | When the change happens |
| **Test results** | Validation in non-prod |
| **Stakeholders** | Notified parties |
| **Dependencies** | Other systems affected |

🎯 **Exam pattern:** *"After a failed change at 2 a.m., the runbook calls for…"* → **Execute the backout plan**.

🚨 **Trap on the exam:** Changes without backout plans + no docs = leading cause of "we don't know what changed, we don't know how to undo it." This is why CompTIA tests change discipline.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario.** A user reports that the company SharePoint site is "really slow today." You're the on-call. Walk through the 6-step methodology and end with the resolution.

**Walkthrough.**

1. **Identify the problem.** Get specifics — what does "slow" mean? Time to load page? When did it start? Just this user, or company-wide? Any recent changes? You check monitoring: SharePoint p95 latency tripled at 14:32 today, affecting all users. No changes are logged in the change calendar.
2. **Establish a theory.** Three candidates: (a) SharePoint app server hit a CPU/RAM/disk bottleneck; (b) SQL Server backend is slow; (c) network path is degraded.
3. **Test the theory.** Open Resource Monitor on the SharePoint server — CPU 22%, RAM 50%, disk latency 4 ms. Not saturated. Open SQL Server Activity Monitor — `WRITELOG` waits dominating, disk queue chronically full on the log volume. Investigate the storage path: `multipath -ll` shows one of two paths failed at 14:32. Theory confirmed: lost a storage path; MPIO is in degraded fallback; SQL log writes are bottlenecked.
4. **Plan + implement.** Plan: identify and fail the bad path explicitly, schedule replacement of the bad SFP+ optic during the next maintenance window. Communicate via Slack to stakeholders. Implement: `multipath -f /dev/mapper/badpath` and verify SQL latency drops.
5. **Verify + preventive.** SharePoint p95 latency back to baseline. Add monitoring alert for "any MPIO path down > 5 min" — would have paged at 14:37, not at user complaint at 16:15.
6. **Document.** Incident ticket with timeline, root cause (degraded SFP+), action taken (failed bad path), follow-up (replace optic in MW). Runbook updated with the path-down alert procedure. Post-mortem scheduled.

Total time to resolution: ~30 min. Documentation discipline turned a 4-hour scramble into a clean, learnable incident.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "The 6-step methodology is theoretical and nobody uses it." | CompTIA tests it *by name*. Memorize the order. |
| "If the server beeps, just reboot." | Beep codes are *diagnostic*. Match to vendor chart; usually RAM. |
| "Slow = need more RAM/CPU." | Maybe — measure first. Often it's disk latency, network, or app code. |
| "Documentation is for compliance, not for me." | The runbook you write at 2 p.m. is what saves you at 3 a.m. |
| "We don't need a change record for small changes." | "Small changes" are how environments drift and incidents become unexplainable. |
| "If monitoring isn't alerting, the system is fine." | Monitoring blind spots are real; observed symptoms outrank silent dashboards. |
| "Pull the bad drive immediately when amber LED appears." | Wait for the controller to mark it failed; pulling mid-write corrupts the array. |
| "MTU mismatches show as obvious errors." | Often they show as silent drops + worse performance — verify with sized pings. |
| "Whoever installed it knows where it is." | They quit 2 years ago. Document the rack location, BMC IP, service tag, owner. |
| "Postmortems blame people, not systems." | A good postmortem is blameless, focused on system improvements. CompTIA aligns with this culture (and frameworks like Google SRE). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **6-step troubleshooting methodology** | Identify → theorize → test → plan + implement → verify + prevent → document |
| **POST** | Power-On Self-Test |
| **Beep codes** | Vendor-specific POST-failure audio diagnostics |
| **BMC SEL** | System Event Log on BMC |
| **FRU** | Field Replaceable Unit |
| **Identify / Locator LED** | Blue LED on chassis + drive bay; admin-toggled |
| **MTBF / MTTR** | Reliability / restoration metrics |
| **CMDB** | Configuration Management Database |
| **Runbook** | Step-by-step operational procedure |
| **Tabletop exercise** | Discussion-based walkthrough |
| **CAB** | Change Advisory Board |
| **Standard / Normal / Emergency change** | Change classifications |
| **Backout plan** | Predefined rollback steps |
| **Maintenance window** | Scheduled change time |
| **Post-mortem / blameless RCA** | Lessons-learned write-up |
| **Resource Monitor / perfmon** | Windows performance counters |
| **`top` / `iostat` / `vmstat` / `iftop`** | Linux performance tools |
| **Latency / throughput / IOPS** | Common bottleneck axes |
| **smartctl / SMART attributes** | Drive self-health |
| **`multipath -ll`** | MPIO status (Linux) |
| **`nslookup` / `dig` / `ping` / `traceroute` / `iperf3` / `tcpdump`** | Network diagnostics |
| **MTU verification** | `ping -M do -s 8972` (Linux) / `ping -f -l 8972` (Windows) |

### Acronyms cheat-row (Module 8)
| Acronym | Meaning |
|---|---|
| POST | Power-On Self-Test |
| SEL | System Event Log |
| FRU | Field Replaceable Unit |
| RAS | Reliability, Availability, Serviceability |
| MTBF / MTTR | Mean Time Between Failures / To Repair |
| CMDB | Configuration Management Database |
| CAB | Change Advisory Board |
| RCA | Root Cause Analysis |
| PMTUD | Path MTU Discovery |
| SMART | Self-Monitoring, Analysis and Reporting Technology |
| KB | Knowledge Base |
| MPIO | Multipath I/O |

---

## 📊 Case Study — The 2012 AWS US-East-1 EBS Outage (Why Bottleneck Diagnosis Matters)

**Situation.** On 22 October 2012 AWS US-East-1 (the largest AWS region at the time) suffered a major outage of the EBS (Elastic Block Storage) service. A latent memory leak in the EBS storage server software triggered a feedback loop: EBS servers became unresponsive, customers' EC2 instances saw degraded volumes, instances were terminated and re-launched (compounding the load on remaining servers), and the cascade tore through availability zones. The outage took down portions of Netflix, Reddit, Heroku, Pinterest, and many other major services for ~6 hours (AWS public post-mortem, 22 October 2012).

**Diagnostic challenge.** From the *customer* side, symptoms were chaotic: EC2 instances unresponsive, EBS volume metrics "frozen," API calls timing out, sometimes intermittent recovery. Customers who followed methodology, escalated through AWS Support, and held off on bulk-restarting their own workloads recovered faster than those who panicked and did "everything at once" — which compounded the load.

**Outcome.** AWS published a public post-mortem the following week detailing the latent bug, the feedback loop, and changes to throttle the re-launch cascade. Multi-AZ best-practice guidance was strengthened; customers reviewed their architectures for single-AZ dependencies.

**Lesson for the exam / for practitioners.**

- **Methodology under pressure.** Random restarts during an incident often make it worse. Stop, identify, theorize.
- **Cascading failures are real.** A single subsystem under stress can pull more subsystems down via re-launch / retry storms.
- **Cloud monitoring blind spots exist.** AWS metrics may freeze when the underlying control plane is degraded — operators must reason from multiple angles, not one dashboard.
- **Post-mortems must be public-ish, blameless, action-oriented.** AWS sets a high bar; the post-mortem is itself a Server+/SRE teaching artifact.
- **The 6-step methodology applies even at hyperscale.** "Identify, theorize, test, implement, verify, document" is universal.

This is the scenario Server+ tests when asking "what is the NEXT troubleshooting step." The answer is rarely "do something dramatic"; it's "follow the methodology."

**Discussion (Socratic).**
- **Q1:** An outage is in progress and you can't tell from your monitoring whether it's affecting one server or many. Walk through the first 10 minutes using the 6-step methodology.
- **Q2:** A vendor's post-mortem is informative but conveniently omits the customer-visible details. What questions would you ask your account team to fill the gaps?
- **Q3:** Blameless post-mortems are easy to praise and hard to actually do. List three behaviors that distinguish a *real* blameless culture from a performative one.

---

## ✅ Module 8 Summary

You now know:

- 🎯 The **CompTIA 6-step troubleshooting methodology** — memorized cold
- ⚡ **POST**, **beep codes**, **boot symptom → root cause** patterns
- 💡 **LED meanings** including the locator/identify blue LED
- 🧠 **Memory** diagnostics (BMC SEL, MemTest86, edac-util)
- 💽 **Storage** diagnostics (RAID controller utilities, SMART, MPIO, perfmon/iostat)
- 🔥 **Performance bottleneck** triage across CPU / RAM / disk / network — and the per-platform tools
- 🌐 **Network** troubleshooting: nslookup, ping, traceroute, nc, iperf3, tcpdump, MTU verification
- 📑 **Documentation hygiene** — CMDB, runbooks, post-mortems, asset records
- 🔄 **Change management** vocabulary in the troubleshooting context

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Take **Practice Exam 1** (after Modules 1–4 if you haven't already), then **Practice Exam 2**, then the **Final Mock**.

> **Where this leads.**
> - Inside this course: this is the integration module — it draws on every previous module. Re-read sections you struggle on.
> - Cross-course: **SRE / Site Reliability Engineering** (Google's free book) covers observability, incident response, and post-mortems at depth. **ITIL Foundation** is the formal change-management methodology.
> - Practice: Practice Exam 2 has ~10 questions from this module; the Final Mock has ~16.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 *Site Reliability Engineering: How Google Runs Production Systems* (Beyer, Jones, Petoff, Murphy — O'Reilly, free online) — incident response, postmortems, capacity
- 📄 *The Phoenix Project* (Kim, Behr, Spafford) — IT operations narrative; readable
- 📄 ITIL 4 Foundation — change management formal framework
- 📄 NIST SP 800-61 Rev 2 (2012). *Computer Security Incident Handling Guide*
- 📄 NIST SP 800-184 (2016). *Guide for Cybersecurity Event Recovery*

**Case-study sources:**
- 📄 AWS post-mortems — `aws.amazon.com/message/` — historical canonical examples
- 📄 Google SRE Book chapter on postmortems
- 📄 Cloudflare engineering blog — incident write-ups

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF)
- 📖 [Professor Messer SK0-005 videos](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)
- 📖 Mike Meyers, *CompTIA Server+ All-in-One Exam Guide, 5th ed.* — troubleshooting chapter
- 📖 *Systems Performance: Enterprise and the Cloud* (Brendan Gregg) — bottleneck analysis bible
