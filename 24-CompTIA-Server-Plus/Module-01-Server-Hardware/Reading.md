# Module 1: Server Hardware & Components 🖥️

> **Why this module matters:** Server hardware is 18% of the SK0-005 exam — but more importantly, it's the *physical vocabulary* the rest of the certification assumes. You cannot reason about RAID, vMotion, redundancy, or troubleshooting without first knowing what a 2U chassis with dual hot-swap PSUs and an iDRAC card actually *is*. Get this module solid and Modules 3, 7, and 8 stop being mysterious.

> **Prerequisites for this module.** Before starting you should be comfortable with:
> - Basic PC hardware (CPU, RAM, motherboard, storage, expansion slots) — A+ level or hobbyist depth
> - Power and grounding basics (volts vs amps, single-phase vs three-phase, the difference between a UPS and a generator)
> - General computing literacy (BIOS/UEFI, what a hypervisor is conceptually)
>
> If those are shaky, pause and review before continuing. This module assumes zero formal server experience but does assume you've opened a PC case at least once.

---

## 🛠️ A Story: The Saturday Night That Killed the Tower

Meet Liam. He runs IT for a 70-person law firm. For years the firm's email, file shares, and accounting database lived on a beige tower PC under the receptionist's desk — Intel Core i5, 16 GB of regular DDR4, two consumer SATA SSDs in software mirror, a single 500W power supply, and a UPS that everyone forgot to test.

On a Saturday in November the office air-conditioning failed overnight. By Sunday morning the closet hit 41°C. The desktop CPU throttled, then the PSU's single fan seized, then the PSU itself died — taking the motherboard's voltage regulators with it. The mirrored SSDs were fine but the *server* was rubble. Monday morning at 9:00 a.m., 70 lawyers had no email, no documents, no billing.

Liam recovered the data — eventually — but the recovery took 31 hours, cost $14,000 in lost billable time, and would have been *prevented entirely* by a $4,500 1U rack server with the things this module will teach you:

| Consumer/desktop part | Server-grade replacement | What you bought |
|---|---|---|
| Regular DDR4 | **ECC RAM** | Auto-corrected bit flips → no silent corruption |
| Single PSU | **Dual hot-swap PSUs (1+1)** on separate PDUs | One PSU dies → keep running |
| Consumer SSDs in software RAID | **Enterprise SAS/NVMe in hot-swap bays** behind a **hardware RAID controller with BBWC** | Drive dies → swap during business hours; in-flight writes survive power loss |
| BIOS, on-site only | **UEFI + BMC/iDRAC out-of-band card** | Reboot, console, sensor data from anywhere |
| One fan, no monitoring | **Redundant fans with sensors → IPMI alerts** | Cooling failure detected before it kills the box |

That table is essentially the entire module. The rest is precision and vocabulary.

---

## 🧱 Server Form Factors

Every server is shaped like one of four things. Pick the wrong shape and you'll spend the rest of its life fighting it.

| Form Factor | Size (typical) | Density | Best For | Trade-offs |
|---|---|---|---|---|
| **Tower** | Like a tall desktop PC | 1 server per "spot" | Small office, branch office, lab | No standardized rails, hard to manage at scale |
| **Rack (1U–4U)** | 1U = 1.75 in / 4.45 cm tall, 19 in wide | 42 servers in a 42U rack (1U each) | Data centers, MDFs, server rooms | Loud, hot, needs proper rack + PDU + cooling |
| **Blade** | Many "blades" sharing one chassis | Highest — 10–16+ blades per chassis | Massive compute (HPC, virtualization farm) | Vendor lock-in; chassis is single point of failure |
| **Converged / HCI** | Pre-integrated compute + storage + network | High; pretested | Hyperconverged virtualization | Expensive, less component flexibility |

🎯 **Exam tip:** Sec+/Server+ both love to ask "which form factor for X scenario." Match keywords:

- *"Branch office, three servers, no rack" → tower*
- *"Data center, max density per rack" → blade*
- *"Standard data-center deployment" → rack (1U/2U most common)*

### Rack mechanics — what to know

- **Rack units (U)**: 1U = 1.75 in. A 42U rack ≈ 73.5 in / 1.87 m tall.
- **Width**: 19 in standard (EIA-310). 23 in (telco) exists but is rare.
- **Depth**: 800–1200 mm typical; deeper servers need deeper racks.
- **Rails**: server slides in/out on rails — make sure the rails match your rack's hole pattern (square, round, threaded).
- **Cable management**: cable arms on the back let you slide a server out without unplugging — *if* the arms are installed.
- **Hot/cold aisle**: front of rack draws cold air, back exhausts hot. *Never* mix directions in the same row.

🚨 **Trap on the exam:** "Why does a 2U server's cooling fail in the rack but work on a bench?" → Because in the rack it's pulling hot exhaust from the server in front of it. *Hot-aisle / cold-aisle discipline matters.*

---

## 🧠 CPU and Memory — Server vs Desktop

This is where Sec+ candidates often skip. Server CPUs and server RAM differ from desktop parts in ways the exam tests directly.

### Server CPUs

| Feature | Desktop CPU | Server CPU |
|---|---|---|
| Brand examples | Intel Core, AMD Ryzen | Intel Xeon (Bronze/Silver/Gold/Platinum), AMD EPYC |
| Sockets per board | 1 | 1, 2, 4, or more |
| Cores | 4–24 typical | 16–96+ per socket |
| L3 cache | 16–32 MB | 64–384 MB |
| Memory channels | 2 | 6–12 per socket |
| ECC support | Limited | Standard |
| TDP | 65–150 W | 150–400 W |
| Reliability features | Few | RAS (Reliability, Availability, Serviceability) extensions |

**MEMORIZE THIS.** When a question says "server-class CPU" think *more sockets*, *more cores*, *more memory channels*, *ECC mandatory*, *more cache* — at higher cost and higher power.

### ECC RAM — the single biggest server-vs-desktop difference

**ECC** = Error-Correcting Code memory. Adds an extra chip per DIMM that stores parity-derived check bits. Catches and silently corrects single-bit errors (SECDED — single-error-correct, double-error-detect).

Why it matters:

- Cosmic rays and natural radiation flip RAM bits in the wild. At server scale (TBs of RAM, 24×7×365 runtime) the rate is *not* negligible — Google's 2009 DRAM study (Schroeder, Pinheiro, Weber, "DRAM Errors in the Wild: A Large-Scale Field Study," ACM SIGMETRICS 2009) found mean errors of ~25,000–75,000 FIT (Failures In Time) per Mbit-year.
- Without ECC, a flipped bit silently corrupts a database row, an in-memory cache, a kernel pointer.
- With ECC, single-bit errors are corrected on the fly; double-bit errors are at least *detected* (machine check exception → kernel panic → known failure, not silent corruption).

| Memory Type | Used in | Notes |
|---|---|---|
| **Non-ECC UDIMM** | Desktops/laptops | No correction; cheaper |
| **ECC UDIMM** | Workstations, low-end servers | Unbuffered; lower capacity ceiling |
| **ECC RDIMM** (registered) | Most servers | Buffer chip between memory controller and DIMM; allows higher density, slight latency cost |
| **ECC LRDIMM** (load-reduced) | High-density servers | Bigger buffer; lets you populate more DIMMs per channel for maximum capacity |

🎯 **Exam pattern:** *"A bank reports silent corruption of accounting records. The CFO insists the database is fine. Which hardware feature should the new server have to prevent this?"* → **ECC RAM**.

---

## ⚡ Power — Redundancy Is Not Optional

Real server PSUs differ from desktop PSUs along two axes: **redundancy** and **efficiency**.

### Redundancy modes

| Mode | Means | When it kicks in |
|---|---|---|
| **Single PSU** | One unit | None — single point of failure |
| **N+1** | Need N to run, have N+1 installed | Loss of any *one* PSU is tolerated |
| **2N** | Two completely independent systems | Loss of an entire feed/PDU is tolerated |
| **2N+1** | 2N plus a spare | Tolerates a feed loss AND a unit failure simultaneously |

🎯 **Exam pattern:** *"The data center has two independent power feeds (A and B). Each server should survive losing either feed entirely."* → **2N PSUs**, one plugged into PDU-A, the other into PDU-B.

### Efficiency — 80 PLUS ratings

PSUs are rated by efficiency under load:

| Rating | Efficiency at 50% load |
|---|---|
| 80 PLUS | 80% |
| Bronze | 82% |
| Silver | 85% |
| Gold | 87% |
| Platinum | 90% |
| Titanium | 94% |

Higher efficiency = less wasted heat = lower cooling cost and longer-life components. Server PSUs typically target Platinum or Titanium.

### Voltage and connection

- Servers commonly accept **100–240 V AC, single-phase**, auto-ranging. Data-center racks may also offer 208 V (split-phase) for higher efficiency.
- **Three-phase** distribution feeds the rack PDUs; individual servers still see single-phase from the PDU outlet.
- **Hot-swap PSUs** can be replaced live — pull the failed one, slide in the new one, never lose power.

🚨 **Trap on the exam:** Plugging both redundant PSUs into the same PDU defeats the whole point. *Use separate PDUs/feeds.*

---

## 💽 Storage Components (More in Module 3)

Module 3 covers RAID and SAN/NAS in depth. Here we cover only what's mounted *inside* the server chassis.

### Drive form factors

| Form Factor | Size | Used in |
|---|---|---|
| **3.5"** | LFF (Large Form Factor) | High-capacity tiers; cheaper $/TB |
| **2.5"** | SFF (Small Form Factor) | Most modern server bays; supports SAS/SATA SSDs and HDDs |
| **M.2** | Stick-shaped | Boot drives, dense flash modules |
| **U.2 / U.3** | 2.5" hot-swap with PCIe pins | NVMe in standard hot-swap bays |
| **EDSFF (E1.S, E1.L, E3)** | Modern data-center SSD form factors | Hyperscale storage density |

### Drive interfaces

| Interface | Throughput | Use |
|---|---|---|
| **SATA** | 6 Gb/s | Consumer + low-end server (boot, cold tier) |
| **SAS** | 12 Gb/s (SAS-3), 22.5 Gb/s (SAS-4) | Standard enterprise; dual-port for redundancy |
| **NVMe (PCIe)** | PCIe 4.0 x4 ≈ 8 GB/s | Hot tier; massive IOPS |
| **Fibre Channel** | 8/16/32 Gb/s | SAN connectivity, not internal |

🎯 **Exam tip:** SAS drives have **dual ports** — connecting to two HBAs/RAID controllers for path redundancy. SATA drives have one port. This is *why* enterprise prefers SAS even when raw speed is similar.

### Hot-swap bays

A server's drive bays sit behind a **backplane** (PCB) wired to the RAID controller / HBA. Hot-swap means:

1. Pull a failed drive — caddy releases without tools.
2. Slide in a replacement of equal or larger capacity.
3. The controller automatically rebuilds the array onto the new drive.

Always wait for the activity LED to stop before pulling. Yanking a drive mid-write can corrupt the array beyond rebuild.

---

## 🎛️ RAID Controllers and HBAs

Two pieces of hardware sit between drives and the OS:

| Card | What it does |
|---|---|
| **HBA** (Host Bus Adapter) | Presents raw drives to the OS. No RAID logic. Used with software RAID (mdadm, ZFS, Storage Spaces). |
| **RAID Controller** | Implements RAID 0/1/5/6/10 in dedicated hardware. Presents RAID volumes (not raw drives) to the OS. |
| **HBA in IT mode** | A RAID controller flashed/configured as a plain HBA — useful for ZFS / Ceph |

**Battery-Backed Write Cache (BBWC)** or **Flash-Backed Write Cache (FBWC)**: a small battery or supercap + flash module on the RAID controller. Holds in-flight writes if the server loses power, then flushes them when power returns. Without it, a sudden power loss can leave the array half-written ("torn write") — catastrophic for RAID 5/6 parity.

🎯 **Exam pattern:** *"Why does a hardware RAID controller need a battery?"* → **To protect cached writes from power loss until they can flush to disk.**

---

## 🔌 Networking on the Server (More in Module 7)

Module 7 covers NIC teaming, VLAN tagging, jumbo frames. Here we cover the physical NICs.

| NIC type | Use |
|---|---|
| **Onboard (LOM — LAN on Motherboard)** | 1× or 2× 1 GbE / 10 GbE built into the chassis |
| **PCIe NIC card** | Add-on for more ports or higher speed (10/25/40/100 GbE) |
| **CNA** (Converged Network Adapter) | Carries IP + FCoE on the same card — collapses LAN and SAN |
| **InfiniBand HCA** | Specialized low-latency interconnect for HPC and storage |

Servers commonly have 2× 1 GbE (management/iDRAC + heartbeat) + 2–4× 10/25 GbE (data) at minimum. Teaming groups these for redundancy and throughput.

---

## 🛰️ Out-of-Band Management — BMC, IPMI, iDRAC, iLO, XCC

This is the single most important Server+ concept that beginners often skip. **MEMORIZE THIS.**

### What is "out-of-band"?

The **BMC** (Baseboard Management Controller) is a tiny computer on the server's motherboard with:

- Its own CPU and RAM (independent of the host CPU/RAM)
- Its own NIC (dedicated management port)
- Its own power (runs on standby power — works even when the server is "off")
- Its own web UI + IPMI interface

This means you can:

- Power the server on/off remotely
- View live sensor data (temps, fan speeds, voltages)
- Open a **virtual console** — see and interact with the screen as if you were standing at the server, even during POST/BIOS, before any OS loads
- Mount a virtual CD/USB image to install an OS remotely
- Pull SEL (System Event Log) and FRU (Field Replaceable Unit) data

### IPMI — the vendor-neutral standard

**IPMI** (Intelligent Platform Management Interface) is the industry-standard management protocol (Intel/Dell/HP/NEC, 1998). It defines:

- IPMI 1.5, 2.0 (current)
- LAN port: **UDP 623**
- Commands: power control, sensor query, SEL access, virtual media

🚨 **Trap on the exam:** IPMI runs on **UDP 623**, not TCP. It also has had multiple historical CVEs (cleartext passwords in IPMI 1.5, "cipher 0" auth bypass) — treat the management network as *high security*, never expose it to the internet.

### Vendor brand names — same idea, different name

| Vendor | Brand | What it is |
|---|---|---|
| **Dell** | **iDRAC** (Integrated Dell Remote Access Controller) | BMC + Dell management web UI; iDRAC 9 is current |
| **HPE** | **iLO** (Integrated Lights-Out) | BMC + HPE management web UI; iLO 5/6 |
| **Lenovo / IBM** | **XCC** (XClarity Controller), formerly IMM | BMC + Lenovo XClarity ecosystem |
| **Supermicro** | **IPMI / Web UI** (no brand name) | Generic IPMI implementation |
| **Cisco UCS** | **CIMC** (Cisco Integrated Management Controller) | BMC + UCS Manager integration |
| **Generic/whitebox** | **BMC + IPMI** | Often Aspeed AST2500/2600 chip + open-source firmware (OpenBMC) |

🎯 **Exam pattern:** *"You're 200 miles away. The server in the colo has crashed and won't reboot. How do you bring it back?"* → **Connect to its iDRAC/iLO/IPMI web interface and power-cycle it remotely.**

### KVM-over-IP vs out-of-band management

| | KVM-over-IP | OOB Management (BMC/iDRAC/iLO) |
|---|---|---|
| **Where it lives** | External switch you plug video/USB into | On the motherboard |
| **Works when host is off?** | Only if the chassis has power | Yes — always, on standby power |
| **Sensor data?** | No | Yes |
| **Virtual media?** | Sometimes | Yes |
| **Cost?** | Per-port hardware | Built-in |

Modern data centers rely on BMC for routine management and may keep KVM-over-IP only for legacy hardware that lacks a BMC.

---

## 🔥 Cooling, Sensors, and the Environmental Story

Servers expose dozens of environmental sensors over IPMI. The BMC monitors:

| Sensor | Healthy range (typical) |
|---|---|
| CPU temperature | 30–80 °C under load |
| Inlet ambient air | 18–27 °C (recommended ASHRAE A1) |
| Exhaust ambient air | 35–45 °C |
| Fan RPM | per-vendor; alerts if RPM drops or fans fail |
| PSU voltages | 12 V ±5%, 5 V ±5%, 3.3 V ±5% |
| PSU input current | per-PSU; alerts on imbalance |

The BMC sends SNMP traps or syslog alerts to your monitoring system on any threshold cross. Email/SMS/PagerDuty alerts let you respond *before* CPU throttling or thermal shutdown.

🚨 **Trap on the exam:** Inlet temperature is what you measure for cooling — *not* CPU temp. CPU temp is a downstream effect.

---

## 🧰 Cables, PDUs, and Cabinet Plumbing

### Cables you'll deal with on a server

| Cable | Use |
|---|---|
| **C13/C14** | Standard server-to-PDU power cord (10 A, IEC-60320) |
| **C19/C20** | Higher-current power cord (16/20 A) for big PSUs |
| **RJ-45 + Cat 6/6A** | 1/10 GbE copper |
| **SFP+/SFP28** transceiver + DAC or fiber | 10/25 GbE |
| **QSFP+ / QSFP28** | 40/100 GbE |
| **LC fiber** | Single-mode/multi-mode optical (storage, long runs) |
| **SAS HD (mini-SAS HD)** | Internal/external SAS connections |

### PDUs

A **PDU** (Power Distribution Unit) is the power strip for a rack. Types:

| PDU Type | Capability |
|---|---|
| **Basic** | Just outlets. No monitoring. |
| **Metered** | Shows total amperage draw |
| **Monitored** | Per-outlet metering, network-accessible |
| **Switched** | Remote on/off control per outlet (lets you power-cycle via IP) |

A **switched PDU** is your *last-ditch* remote recovery — when even the BMC is unreachable, you cycle the outlet.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario.** A 70-person regional credit union is opening a second branch. The CTO wants the new branch to host a domain controller, file server, and accounting database VM on a single physical server, with full hardware redundancy and the ability to recover from a remote-site failure without sending a tech. Pick the bill of materials.

**Walkthrough.**

1. **Form factor.** Branch office, single server, but the CTO wants room to grow → **2U rack** (more drive bays + cooling headroom than 1U; less density than 4U).
2. **CPU.** Single-socket is fine for this load → 1× **Xeon Silver** (or AMD EPYC entry) with 16+ cores.
3. **Memory.** Three VMs + headroom → 128 GB **ECC RDIMM** in 2 channels × 4 DIMMs.
4. **Storage.** Two mirrored **NVMe M.2** boot drives for the hypervisor + six **2.5" SAS SSDs** in **RAID 10** for VM data behind a **hardware RAID controller with FBWC**.
5. **Power.** **Two hot-swap PSUs** (2N), plugged into two separate **switched PDUs** on two separate UPS feeds.
6. **Network.** Onboard 2× 1 GbE for management + 2× 10 GbE PCIe NIC for data, teamed via LACP into the branch switch.
7. **Out-of-band.** **iDRAC Enterprise** with dedicated management NIC on a separate management VLAN. Virtual console + virtual media licensed.
8. **Environmental.** Inlet temperature sensor wired to monitoring. Email + SMS alert if inlet >27 °C or any fan fails.
9. **Recovery story.** If the branch crashes, the CTO connects to iDRAC over VPN, opens virtual console, reboots into UEFI, fixes the boot order if needed — all from headquarters. *No tech rolls.*

This is the kind of integration question Server+ PBQs ask. Notice how every component on this list maps to one of the concepts in this module.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "Regular RAM is fine for servers — ECC is overkill." | NO — silent bit flips cause invisible corruption. Production servers always run ECC. |
| "If both PSUs are plugged in, I'm redundant." | Only if they're on *separate* PDUs/feeds. Same PDU = same single point of failure. |
| "Software RAID is just as good as hardware RAID." | Software RAID (mdadm, ZFS, Storage Spaces) is fine for many cases but lacks BBWC and CPU offload. Hardware RAID matters for write-cached parity arrays. |
| "iLO and iDRAC are the same thing." | They do the same *job* (BMC) but are different vendors' products with different APIs and licensing. |
| "IPMI is a TCP protocol." | UDP. Port 623. |
| "Blade servers are always cheaper per server." | Per-blade hardware is cheaper *only* if you fill the chassis. Half-filled chassis is the worst-cost option. |
| "Hot-swap means you can yank a drive any time." | Wait for the activity LED to stop. Yanking mid-write corrupts the array. |
| "Inlet air = CPU temp." | Inlet is what you measure for cooling capacity; CPU temp is downstream. ASHRAE A1 inlet target is 18–27 °C. |
| "The BMC is always up — it can't be compromised." | The BMC runs *all the time* on its own firmware. Treat it as a critical attack surface; segment the management network. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **U (Rack Unit)** | 1U = 1.75 in / 4.45 cm — the vertical unit of rack mounting |
| **Tower / Rack / Blade** | The three primary server chassis form factors |
| **ECC RAM** | Error-Correcting Code memory — single-bit auto-correct, double-bit detect |
| **RDIMM / LRDIMM** | Registered / Load-Reduced DIMMs — buffered ECC variants for high density |
| **PSU** | Power Supply Unit |
| **N+1 / 2N / 2N+1** | PSU redundancy modes |
| **80 PLUS rating** | PSU efficiency tier (Bronze → Titanium) |
| **PDU** | Power Distribution Unit — rack power strip; basic / metered / switched |
| **Hot-swap** | Replace component while powered on |
| **SAS / SATA / NVMe** | Drive interfaces — enterprise dual-port / consumer / PCIe flash |
| **HBA** | Host Bus Adapter — presents raw drives to OS |
| **RAID controller** | Implements RAID in hardware; presents RAID volumes |
| **BBWC / FBWC** | Battery-Backed / Flash-Backed Write Cache on RAID controller |
| **BMC** | Baseboard Management Controller — out-of-band management chip |
| **IPMI** | Intelligent Platform Management Interface — vendor-neutral OOB standard (UDP 623) |
| **iDRAC** | Dell's BMC brand |
| **iLO** | HPE's BMC brand |
| **XCC / IMM** | Lenovo's BMC brand |
| **CIMC** | Cisco UCS's BMC brand |
| **Virtual media / virtual console** | OOB features to mount remote ISOs and see the screen pre-OS |
| **KVM-over-IP** | External keyboard/video/mouse switch accessed over IP (distinct from BMC) |
| **C13/C14, C19/C20** | IEC server power connectors |
| **Hot aisle / cold aisle** | Data-center airflow discipline — inlet faces cold aisle, exhaust hot |

### Acronyms cheat-row (Module 1)
| Acronym | Meaning |
|---|---|
| ECC | Error-Correcting Code (memory) |
| RDIMM / LRDIMM | Registered / Load-Reduced DIMM |
| PSU | Power Supply Unit |
| PDU | Power Distribution Unit |
| BMC | Baseboard Management Controller |
| IPMI | Intelligent Platform Management Interface |
| iDRAC | Integrated Dell Remote Access Controller |
| iLO | Integrated Lights-Out (HPE) |
| XCC | XClarity Controller (Lenovo) |
| CIMC | Cisco Integrated Management Controller |
| HBA | Host Bus Adapter |
| BBWC / FBWC | Battery-Backed / Flash-Backed Write Cache |
| SAS / SATA | Serial Attached SCSI / Serial ATA |
| NVMe | Non-Volatile Memory Express |
| CNA | Converged Network Adapter |
| LOM | LAN on Motherboard |
| TDP | Thermal Design Power |
| SEL | System Event Log |
| FRU | Field Replaceable Unit |
| RAS | Reliability, Availability, Serviceability |

---

## 📊 Case Study — Northeast Blackout of 2003 (Data-Center Lessons)

**Situation.** On 14 August 2003 the eastern North-American power grid suffered a cascading blackout: ~50 million customers across Ohio, Michigan, Pennsylvania, New York, New Jersey, Vermont, Connecticut, Massachusetts, and Ontario lost power for two days. Root cause: a software race condition in FirstEnergy's XA/21 alarm system masked the trip of a single 345 kV transmission line in northern Ohio. By the time human operators noticed, the cascade was unstoppable (US-Canada Power System Outage Task Force, *Final Report on the August 14, 2003 Blackout in the United States and Canada*, April 2004).

**What it did to data centers.** Hundreds of east-coast colocation facilities were thrown onto generator power for 24–48 hours. Many failed within 4–8 hours due to:

- **Single-fed PDUs** in racks — when generator transfer briefly hiccupped, every rack went dark.
- **UPS batteries** that bridged the *generator transfer* window but ran out during the long outage, taking servers down before generators stabilized.
- **Cooling collapses** when generators powered compute but not enough chiller capacity — racks hit thermal shutdown within an hour.
- **Diesel-supply rationing** — many facilities had 24-hour fuel on site but no contract for refueling during a widespread grid event. Trucks queued for hours.

**Outcome.** Major financial institutions (post-mortems in the *NIST SP 800-34 Rev 1 Appendix C*, 2010, and the *Federal Reserve System operations review*, 2004) found that **single-feed servers in 2N racks survived; single-PSU servers regardless of rack topology did not.** Data-center design standards (Uptime Institute Tier ratings, ANSI/TIA-942) were tightened to require fully concurrent maintainable (Tier III) or fault-tolerant (Tier IV) power paths.

**Lesson for the exam / for practitioners.**

- **N+1 / 2N must be honest end-to-end.** A 2N PSU server plugged into a single PDU is a *fake* 2N. The exam tests this directly.
- **Cooling and power must scale together.** Generator capacity that covers IT load but not chiller load buys you ~30 minutes.
- **Out-of-band management saved the survivors.** Sites with iLO/iDRAC could remotely shed load, gracefully shut down non-critical hosts, and prioritize cooling. Sites without had to send techs into hot dark rooms with flashlights.
- **Documentation matters.** Sites with up-to-date *rack power maps* (which server is on which PDU is on which feed) reacted in minutes. Sites without spent hours guessing.

This is exactly the scenario Server+ tests when asking "design a server for a 99.99% availability SLA in a colocation facility." The answer is rarely one feature — it is **redundancy at every layer**, *verified by testing*.

**Discussion (Socratic).**
- **Q1:** If you were the data-center manager at a Tier III facility on 14 August 2003, what *three* operational changes would you push for within the next 90 days, ranked by cost-effectiveness? Defend each.
- **Q2:** The Uptime Institute rates facilities Tier I–IV. Tier IV is fault-tolerant (2N+1 everything). Argue both sides of "is Tier IV worth ~2× the cost of Tier III for a typical mid-sized enterprise?"
- **Q3:** A common modern alternative is "deploy in *two* Tier II regions and rely on application-level failover" instead of one Tier IV facility. What server-hardware decisions does that architecture change?

---

## ✅ Module 1 Summary

You now know:

- 🧱 The 4 **server form factors** — tower, rack 1U–4U, blade, converged — and when each is appropriate
- 🧠 What makes **server CPU and ECC RAM** different from desktop parts
- ⚡ **PSU redundancy** (N+1, 2N, 2N+1), 80 PLUS efficiency, and PDU types
- 💽 Internal storage hardware: drive form factors (3.5"/2.5"/M.2/U.2), interfaces (SAS/SATA/NVMe), hot-swap mechanics
- 🎛️ **RAID controllers vs HBAs**, and why BBWC/FBWC matters
- 🛰️ **Out-of-band management**: BMC + IPMI (UDP 623) + vendor brands iDRAC / iLO / XCC / CIMC
- 🔥 Environmental sensors and ASHRAE inlet-temperature targets
- 🧰 Server cables, IEC connectors, and switched PDUs as last-ditch remote power control

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 20/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 2 — Server Administration (Windows & Linux)](../Module-02-Server-Administration/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 2](../Module-02-Server-Administration/Reading.md) puts an OS on the hardware; [Module 3](../Module-03-Storage/Reading.md) extends storage from internal drives to SAN/NAS; [Module 5](../Module-05-Disaster-Recovery/Reading.md) uses redundancy concepts here as inputs to BCP/DR planning; [Module 8](../Module-08-Troubleshooting/Reading.md) returns to LEDs, beep codes, and the BMC for diagnostics.
> - Cross-course: CompTIA A+ (220-1101/1102) covers desktop hardware that maps directly to the server-vs-desktop comparisons here. CompTIA Network+ (N10-008) covers the data-center cabling and PoE that's adjacent to server cabling.
> - Practice: Practice Exam 1 has ~9 questions drawing from this module; the Final Mock has ~14.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Schroeder, B., Pinheiro, E., & Weber, W.-D. (2009). "DRAM Errors in the Wild: A Large-Scale Field Study." *ACM SIGMETRICS Performance Evaluation Review*, 37(1). (The empirical case for ECC.)
- 📄 US-Canada Power System Outage Task Force (2004). *Final Report on the August 14, 2003 Blackout in the United States and Canada*. (Root cause + data-center impact.)
- 📄 Intel Corporation (2015). *IPMI v2.0 Specification, Revision 1.1*. (The vendor-neutral OOB standard.)
- 📄 ASHRAE TC 9.9 (2021). *Thermal Guidelines for Data Processing Environments*, 5th ed. (Inlet temperature ranges.)
- 📄 Uptime Institute. *Tier Classification System* — the original Tier I–IV definitions.

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF from CompTIA) — read at least twice during study
- 📖 [Professor Messer SK0-005 video index](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/) — free, comprehensive lecture set
- 📖 Mike Meyers, *CompTIA Server+ All-in-One Exam Guide, 5th ed.* — most rigorous coverage
- 📖 Dell PowerEdge / HPE ProLiant technical white papers — read at least one each for vendor flavor
