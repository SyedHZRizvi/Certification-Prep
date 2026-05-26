# Module 3: Hardware — CPU, RAM, Storage, Power ⚙️

> **Why this module matters:** Hardware is **25% of the 220-1101 exam** — about 22 questions, the single biggest Core 1 domain. The exam tests both *parts identification* (you'll see images) and *applied judgment* (which RAM is compatible? what wattage PSU? which storage tier for this workload?). This is also the most-rewarded module hands-on — opening a case once and seating RAM will lock in 90% of this material.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic computer terminology (CPU, RAM, hard drive — at a conceptual level)
> - Module 2's networking basics (NICs are mentioned here)
>
> If those are shaky, search "what does a CPU do" on YouTube and watch one explainer before continuing.

---

## 🔧 A Story: The PC That Wouldn't POST After "An Upgrade"

Meet Yuki. She's a 19-year-old intern at a video-production studio. Her first solo ticket: "My machine won't turn on after I added more RAM yesterday." The user is one of the studio's senior editors and has a 4K timeline due to a client in 90 minutes.

Yuki opens the case. The original 2×16 GB DDR5 sticks are still in slots A2 and B2. The user added two more 16 GB sticks in slots A1 and B1. **No POST. No beeps.** Just fans spinning, LEDs on, blank screen.

She tries the obvious things: reseat the new sticks, swap them with the old, boot with two sticks at a time. Each pair boots fine *individually*. All four together: no POST.

She pulls the spec sheet for the new sticks. **DDR5-6000 CL30**. The old sticks: **DDR5-5600 CL36**. Different speed, different timings, different rank. The motherboard's QVL (Qualified Vendor List) shows the original kit as supported only as a *matched pair* — not mixed with another kit at all, and especially not at 4-DIMM populated.

She removes the new sticks. She advises the editor: "Your motherboard works fine with all four DIMMs, but only if they're the same kit. We need to buy a matched 4×16 GB kit, not mix two pairs." She also points out the silver lining: **DDR5 ranks differently** than DDR4 — running 4 DIMMs often *reduces* clock speed automatically. A matched 2×32 GB kit at the same speed may be better than 4×16.

The editor swaps to 2×16 GB original config, makes the deadline, orders a proper 2×32 GB kit overnight.

**That's what hardware support looks like.** It's not just "remove and replace." It's reading specs, understanding compatibility lists, and knowing the *rules* of the underlying technologies. This module teaches you those rules.

---

## 🧠 The CPU — What It Is and What Specs Matter

A CPU (Central Processing Unit) is the brain of the PC. For the A+ you need to recognize sockets, distinguish core/thread counts, and understand a few key features.

### Major modern Intel sockets

| Socket | Generations | Typical use |
|--------|-------------|-------------|
| **LGA 1200** | 10th–11th Gen Intel | Workstations (legacy 2020-2021) |
| **LGA 1700** | 12th–14th Gen Intel | Most current desktops (2022–) |
| **LGA 1851** | Core Ultra (15th gen, "Arrow Lake") | 2024+ |
| **LGA 4189 / 4677** | Xeon Sapphire/Emerald Rapids | Servers |

### Major modern AMD sockets

| Socket | Generations | Notes |
|--------|-------------|-------|
| **AM4** | Ryzen 1000–5000 | Long-lived (2017–2023), PGA |
| **AM5** | Ryzen 7000 / 9000 | Current — LGA (switched from PGA) |
| **TR4 / sTRX4 / sWRX8** | Threadripper | HEDT / workstation |
| **SP3 / SP5** | EPYC | Server |

### LGA vs PGA

- **LGA (Land Grid Array)** — Pins on the *motherboard socket*; flat pads on the CPU. Intel since Pentium 4-era; AMD AM5+.
- **PGA (Pin Grid Array)** — Pins on the *CPU* underside. Old AMD (AM4 and earlier), legacy Intel.

### Cooling

| Cooler type | Description | When to use |
|-------------|-------------|-------------|
| **Stock air** | Bundled with CPU | Low-end / non-overclocked |
| **Tower air** (Noctua, be quiet!) | Large heatsink + fan(s) | Mainstream, quiet |
| **AIO liquid** (240/280/360 mm) | All-in-one closed-loop cooler | High-TDP, overclocking |
| **Custom water loop** | Reservoir + pump + radiators | Enthusiast |

🚨 **Thermal paste matters.** Reseat with fresh paste when you remove and reinstall a CPU. Most pastes last 5+ years; reapply if you see thermal throttling on an older machine.

### Key CPU spec terms

| Term | Meaning |
|------|---------|
| **Cores** | Independent execution units (4, 6, 8, 12, 16, 24+) |
| **Threads** | Logical CPUs (cores × 2 with hyperthreading / SMT) |
| **Clock speed** | GHz; higher = faster per-core |
| **Cache (L1/L2/L3)** | On-die memory, very fast |
| **TDP** | Thermal Design Power — heat the cooler must dissipate, in watts |
| **Integrated graphics** (iGPU) | GPU on-die (Intel UHD/Iris, AMD Radeon Graphics) — no discrete card needed |
| **64-bit vs 32-bit (x86 vs x64)** | All modern CPUs are x64 |
| **ARM vs x86** | ARM = phones, M-series Macs; x86 = Windows/Linux PCs |

---

## 🧮 RAM — DDR4 vs DDR5 and Form Factors

| Spec | DDR4 | DDR5 |
|------|------|------|
| Voltage | 1.2V | 1.1V base |
| Speed (JEDEC base) | 1600–3200 MT/s | 3200–6400 MT/s |
| Speed (real-world XMP/EXPO) | 3000–4000 MT/s typical | 5600–8000+ MT/s |
| Channels per DIMM | 1 (64-bit) | 2 subchannels (32-bit each) |
| Voltage regulation | On motherboard | On-DIMM (PMIC) |
| Pin count (DIMM) | 288 | 288 (but keyed differently — not cross-compatible) |
| ECC option | RDIMM/LRDIMM (server) | On-DIE ECC standard + optional full ECC |

### Form factors

| Form | Pin count | Use |
|------|-----------|-----|
| **DIMM** | 288 (DDR4/5) | Desktops, workstations |
| **SODIMM** | 260 (DDR4) / 262 (DDR5) | Laptops, mini-PCs, NUCs |
| **MicroDIMM** | (varies) | Very thin laptops, rare now |

### Channel configurations

- **Single channel** — one DIMM populated → ~25 GB/s bandwidth
- **Dual channel** — DIMMs in matched slots (A1+B1 or A2+B2) → ~50 GB/s
- **Quad channel** — server / HEDT, 4 DIMMs split across 4 channels
- **Octa channel** — modern Xeon / EPYC servers

🎯 **Exam pattern:** Two sticks of RAM but only one channel — solution is *populate the matching slot pair*. Check the motherboard manual (usually A2 + B2 for dual-channel on 4-DIMM boards).

### ECC vs non-ECC

- **ECC RAM** — Error-Correcting Code. Detects + corrects single-bit errors. Used in servers/workstations where uptime and data integrity matter. Costs ~30% more.
- **Non-ECC RAM** — Consumer standard.
- **Registered (RDIMM)** vs **Unbuffered (UDIMM)** — RDIMMs have a register chip to improve stability at high DIMM counts. RDIMMs are server-only.

---

## 🖥️ Motherboards & Form Factors

| Form factor | Size | Slots | Use |
|-------------|------|-------|-----|
| **E-ATX** | 12 × 13" | up to 8 PCIe | HEDT/workstation |
| **ATX** | 12 × 9.6" | up to 7 PCIe | Standard desktop |
| **mATX** | 9.6 × 9.6" | up to 4 PCIe | Compact desktop |
| **Mini-ITX (ITX)** | 6.7 × 6.7" | 1 PCIe | Small Form Factor (SFF) |
| **Mini-STX / Pico-ITX** | smaller | 0 PCIe | NUC-class, mini-PCs |

### Components on a typical motherboard

- **CPU socket** (LGA or PGA)
- **DIMM slots** (2 or 4 typical; 8 on workstation)
- **Chipset** (Intel Z/H/B series, AMD X/B/A series) — defines features
- **PCIe slots** — x16 (GPU), x4 (NVMe / 10G NIC), x1 (small expansion)
- **M.2 slots** — for NVMe SSDs (sometimes WiFi too)
- **SATA ports** — 6 Gbps for HDD/SSD
- **24-pin ATX power**, **8-pin (or 4+4) EPS CPU power**
- **Front-panel header** — power button, reset, USB, audio
- **BIOS/UEFI chip + CMOS battery** (CR2032)

### BIOS vs UEFI

| Feature | BIOS (legacy) | UEFI (modern) |
|---------|---------------|---------------|
| Year | 1981+ | 2005+ (Apple), 2010+ widespread on PC |
| Boot disk format | MBR (≤2 TB) | GPT (>2 TB) |
| Boot mode | 16-bit real mode | 32/64-bit, can use mouse |
| Secure Boot | No | Yes |
| TPM 2.0 use | Limited | Native |
| GUI | None | Yes, often graphical |

🎯 **Exam pattern:** Windows 11 requires **UEFI + Secure Boot + TPM 2.0**. Old PCs with legacy BIOS need a clean install + GPT conversion to upgrade.

---

## 💾 Storage Tiers

### Spinning rust (HDD)

| Form | RPM | Throughput | Use |
|------|-----|------------|-----|
| 3.5" HDD | 5400/7200/10000 | ~150–250 MB/s | Desktops, NAS |
| 2.5" HDD | 5400/7200 | ~100–150 MB/s | Laptops (legacy) |
| Helium-filled | 7200 | ~250 MB/s | High-capacity NAS (18–24 TB) |

### SATA SSDs

- **2.5" SATA SSD** — same form as 2.5" HDD, ~550 MB/s, easy upgrade for older laptops
- **mSATA / M.2 SATA** — legacy small form
- Interface bottleneck: **SATA 3.0 = 6 Gbps** (~550 MB/s real-world ceiling)

### NVMe SSDs (M.2 PCIe)

| PCIe Gen | Lanes | Max throughput |
|----------|-------|----------------|
| Gen 3 ×4 | 4 | ~3,500 MB/s |
| Gen 4 ×4 | 4 | ~7,000 MB/s |
| Gen 5 ×4 | 4 | ~14,000 MB/s |
| Gen 6 ×4 | 4 | ~28,000 MB/s (2026+) |

### M.2 keying — critical

| Keying | Protocol carried |
|--------|------------------|
| **B-key** | SATA SSD or PCIe ×2 NVMe |
| **M-key** | NVMe PCIe ×4 (highest speed) |
| **B+M key** | Compatible with either socket type |
| **A / E key** | WiFi / BT cards |

🚨 **Trap on the exam:** An "M.2 slot" can be SATA-only or NVMe-only or both. Always check both the slot keying AND the motherboard manual.

### RAID Levels (memorize cold)

| RAID | Description | Min disks | Fault tolerance | Capacity |
|------|-------------|-----------|------------------|----------|
| **0 (stripe)** | Data split across disks for speed | 2 | **None — any failure = total loss** | 100% |
| **1 (mirror)** | Data duplicated on 2 disks | 2 | 1 disk loss | 50% |
| **5 (stripe + parity)** | Parity distributed | **3** | 1 disk loss | (N-1)/N |
| **6 (stripe + dual parity)** | Two parity blocks | **4** | 2 disk loss | (N-2)/N |
| **10 (1+0)** | Mirror of stripes | **4** (even) | Up to 1 per mirror | 50% |
| **JBOD / linear** | Concatenated, not RAID | 1+ | None | 100% |

🎯 **Exam pattern:**
- *"Need speed only, no redundancy"* → RAID 0
- *"Two-disk simple mirror for important files"* → RAID 1
- *"Best for a 5-disk file server, balance speed/capacity/redundancy"* → RAID 5
- *"Critical 8-disk archive, can survive 2 failures"* → RAID 6
- *"Database, want speed AND redundancy"* → RAID 10

### NAS vs SAN vs DAS

- **DAS** (Direct-Attached Storage) — disk physically inside or directly cabled to one host
- **NAS** (Network-Attached Storage) — file-level (SMB/NFS) over Ethernet
- **SAN** (Storage Area Network) — block-level (iSCSI / FC) — looks like a local disk to the OS

---

## 🔌 Power Supply Units (PSUs)

### Sizing — the wattage decision

Calculate by summing the TDP of major components + headroom:

| Component | Watts (rough) |
|-----------|---------------|
| CPU TDP | 65–250W |
| GPU TGP | 75–600W (RTX 5090 ≈ 575W) |
| Motherboard + RAM | ~50W |
| Each HDD | ~10W |
| Each SSD | ~5W |
| Cooling fans | ~5W each |
| **Headroom** | +25–30% above sum |

Example: i7-14700K (125W) + RTX 4080 (320W) + board/RAM (50W) + 2 SSDs (10W) = 505W → buy a **750W or 850W** PSU.

### 80 PLUS efficiency tiers (at 50% load)

| Tier | Efficiency |
|------|------------|
| 80+ White | 80% |
| 80+ Bronze | 82% |
| 80+ Silver | 85% |
| 80+ Gold | 87% |
| 80+ Platinum | 90% |
| 80+ Titanium | 94% |

Higher tier = less waste heat, less electricity, quieter (smaller fans).

### Modular vs non-modular

| Type | Cables | Pros |
|------|--------|------|
| **Non-modular** | All cables soldered to PSU | Cheap |
| **Semi-modular** | Essential cables fixed (24-pin, CPU), others detachable | Common |
| **Full modular** | Every cable detachable | Cleanest builds |

### Connectors you'll see

| Connector | Pin count | Powers |
|-----------|-----------|--------|
| 24-pin ATX (or 20+4) | 24 | Motherboard |
| 8-pin EPS (or 4+4) | 8 | CPU |
| 6+2 pin PCIe | 6 or 8 | GPU |
| 12VHPWR / 12V-2x6 | 16 | High-end GPU (RTX 30/40/50 series) |
| SATA power | 15 | SSD / HDD / optical |
| Molex (4-pin peripheral) | 4 | Legacy fans, lighting |
| Berg (floppy) | 4 | Floppy drive — extinct |

### PSU testing

- **Paper-clip test** — short pins 15 (green) and 16 (black) on the 24-pin to see if fan spins. Tells you the PSU has some life.
- **PSU tester** — small device that loads all rails and shows voltages.
- **Multimeter** — measure 12V, 5V, 3.3V rails on the 24-pin.

🚨 **Safety:** PSUs store residual charge. Always unplug and wait before opening.

---

## 🖱️ Other Internal Components

### GPU (Graphics Card)

- **PCIe ×16** slot (electrically; physical slot may carry fewer lanes)
- Modern cards need **6+2 pin PCIe** or **12VHPWR** power
- **iGPU** (on CPU) vs **dGPU** (discrete card) — many systems can use both via switching

### NIC / Wi-Fi / Bluetooth

- **Onboard NIC** — every motherboard has 1 Gbps minimum; modern boards have 2.5G or 10G
- **M.2 Wi-Fi card** (E-key) — combines Wi-Fi + Bluetooth on most modern boards
- **PCIe add-in card** — for 10G/25G NICs, or to add Wi-Fi to a desktop without it

### Cooling fans, headers, AIO pumps

- **CPU_FAN, CPU_OPT** — fan headers
- **SYS_FAN (or CHA_FAN)** — case fans
- **AIO_PUMP** — full-speed pump header for liquid coolers
- **RGB / ARGB headers** — controllable lighting

### Sound

- Onboard codec (Realtek ALC1220 typical) feeds 3.5mm jacks on rear and front-panel header
- Add-in sound cards (Creative, ASUS Strix) for higher quality

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports their gaming PC suddenly reboots under load. No BSOD, just immediate restart. Sometimes during a long render, sometimes during heavy gaming. The motherboard event log shows "unexpected shutdown."

**Walkthrough:**
1. **Identify the problem** — Reboots only under high load. Idle is fine.
2. **Establish a theory** — Top suspects: (a) PSU is undersized or failing (rails sag under load); (b) GPU pulling more than the PSU can sustain; (c) CPU overheating → thermal shutdown; (d) RAM error.
3. **Test the theory** — Monitor temps with HWiNFO64 (CPU, GPU, motherboard, VRM). Stress-test with Prime95 + FurMark and watch for thermal throttling vs immediate reboot. If reboot is sudden and temps were OK → PSU. If CPU hits 100 °C → cooling.
4. **Plan of action** — User has 650W PSU and an RTX 4080 (320W) + i7-14700K (253W boost) = >570W just for CPU+GPU under load. PSU is undersized. Recommend 850W Gold-rated PSU.
5. **Verify** — Replace PSU, re-run stress test, no reboots over 30 min.
6. **Document** — KB entry: "Reboots under load — check PSU capacity vs CPU+GPU peak draw."

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "More cores always means faster" | Single-threaded workloads care about clock speed. Cores matter for parallel work. |
| "ECC RAM works in every motherboard" | ECC requires *chipset and CPU support*. Most consumer Intel boards don't. AMD AM5 supports unbuffered ECC on most chipsets. |
| "M.2 slots are all NVMe" | Some are SATA-only, some are NVMe-only, some support both. Check the manual. |
| "RAID = backup" | RAID is *redundancy*, not backup. A deleted file is deleted on the mirror too. |
| "Bigger PSU = better" | Oversize PSU at 10% load is inefficient. Aim for ~50% load at typical use. |
| "BIOS = UEFI" | BIOS is legacy 16-bit; UEFI is the modern replacement supporting GPT, Secure Boot, TPM. |
| "TDP = max power draw" | TDP is *thermal*. Modern CPUs can boost well above TDP for short periods. |
| "DDR4 and DDR5 are interchangeable" | Different keying; physically won't fit. Different voltage. Different platform. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **LGA / PGA** | Land Grid Array (pins in socket) / Pin Grid Array (pins on CPU) |
| **TDP** | Thermal Design Power — heat the cooler must dissipate |
| **DDR4 / DDR5** | RAM generations; not pin-compatible |
| **DIMM / SODIMM** | Full-size / laptop RAM form factors |
| **ECC** | Error-Correcting Code RAM |
| **ATX / mATX / ITX** | Motherboard form factors |
| **UEFI / Secure Boot / TPM 2.0** | Modern boot + crypto trifecta (Win11 required) |
| **NVMe / M.2 / PCIe** | Modern SSD interface stack |
| **RAID 0/1/5/6/10** | Redundancy levels |
| **PSU 80 PLUS** | Efficiency certification |
| **12VHPWR** | New 16-pin GPU power connector |
| **PCIe Gen 4/5/6** | Bus generations; doubling bandwidth each |
| **NAS / SAN / DAS** | Storage architectures |
| **iGPU / dGPU** | Integrated / discrete graphics |

### Acronyms cheat-row (Module 3)
| Acronym | Meaning |
|---------|---------|
| TDP | Thermal Design Power |
| RAM / ROM | Random Access / Read-Only Memory |
| DDR | Double Data Rate |
| ECC | Error-Correcting Code |
| LGA / PGA | Land/Pin Grid Array |
| BIOS / UEFI | Basic I/O System / Unified Extensible Firmware Interface |
| TPM | Trusted Platform Module |
| GPT / MBR | GUID Partition Table / Master Boot Record |
| NVMe | Non-Volatile Memory Express |
| RAID | Redundant Array of Independent Disks |
| ATX / EPS | Power connector standards |
| iGPU / dGPU | Integrated/Discrete GPU |

---

## 📊 Case Study — The 2018 Spectre & Meltdown CPU Vulnerabilities

**Situation.** In January 2018, Google Project Zero and academic researchers (Lipp et al., Graz Univ.; Kocher et al., Cyberus Technology and Rambus) jointly disclosed **Meltdown (CVE-2017-5754)** and **Spectre (CVE-2017-5715, CVE-2017-5753)** — fundamental flaws in the *speculative execution* logic used by virtually every Intel CPU since 1995, plus many AMD and ARM cores.

**The hardware detail.** Modern CPUs guess (speculatively execute) future instruction paths to keep their long pipelines fed. If the guess is wrong, results are discarded — but tiny side effects (cache state changes) leak. Meltdown let unprivileged user-space code read kernel memory by triggering speculative loads followed by cache-timing observation. Spectre had two variants exploiting indirect branch prediction.

**Decision and outcome.** Operating-system vendors (Microsoft KB4056892, Apple macOS 10.13.2, all major Linux distros) pushed *kernel page-table isolation* (KPTI / KAISER) patches within 72 hours. Performance penalties: 5–30% on syscall-heavy workloads (databases, virtual hosts). Intel and AMD pushed microcode updates rolling out through 2018–2019. Cloud providers (AWS, Azure, GCP) re-patched their entire global fleets within 2 weeks. Most physical-PC owners received the patches via Windows Update without noticing.

**Lesson for the exam / for practitioners.**
- **Firmware/BIOS updates are not optional.** The Spectre microcode patches shipped via motherboard BIOS updates. A+ techs are the people who apply them in person.
- **Hardware design choices have software-visible security consequences** — you cannot patch your way out of a CPU architectural flaw without performance loss.
- **The boundary between hardware and software is permeable.** OS designers now treat the CPU as an untrusted black box requiring active mitigation.

**Discussion (Socratic).**
- **Q1:** A small business owner asks if they should buy an older CPU (Intel 8th gen) at a deep discount for an office workstation. Spectre/Meltdown mitigations apply. How do you advise them on the speed/security trade-off?
- **Q2:** Cloud providers rolled patches across millions of VMs in days. What organizational practices made that possible — and what would small enterprises have to do differently to match?
- **Q3:** New "post-Spectre" CPU designs (Intel and AMD) trade some peak performance for hardened branch prediction. Is the right answer for security to slow down hardware? Or should we accept faster CPUs with software mitigation? Argue both sides.

---

## ✅ Module 3 Summary

You now know:
- 🧠 Modern Intel + AMD sockets (LGA 1700, LGA 1851, AM4, AM5)
- 🧮 DDR4 vs DDR5, DIMM vs SODIMM, ECC vs non-ECC, dual-channel population
- 🖥️ Motherboard form factors (ATX/mATX/ITX) and what's on a typical board
- 💾 Storage tiers: HDD vs SATA SSD vs NVMe Gen 3/4/5 and the M.2 keying gotcha
- 🔌 PSU sizing math, 80 PLUS ratings, and modular/semi-modular/non-modular variants
- 📊 RAID 0/1/5/6/10 — min disks, fault tolerance, capacity
- 🛡️ UEFI / Secure Boot / TPM 2.0 — the Windows 11 trifecta

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 4 — Virtualization & Cloud Basics](../Module-04-Virtualization-Cloud/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 4](../Module-04-Virtualization-Cloud/Reading.md) uses CPU/RAM math when sizing VMs; [Module 5](../Module-05-Troubleshooting/Reading.md) drills hardware troubleshooting in depth; [Module 7](../Module-07-Operating-Systems/Reading.md) revisits BIOS/UEFI for boot.
> - Cross-course: AWS Solutions Architect Associate (course 04) maps physical RAM/CPU sizing decisions to EC2 instance types; Server+ (course 24) goes much deeper on server hardware.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Intel 64 and IA-32 Architectures Software Developer's Manual — multi-volume CPU reference
- 📄 JEDEC JESD79-5 (DDR5 SDRAM Standard, 2020)
- 📄 PCI-SIG PCIe 5.0 and 6.0 Base Specification
- 📄 SATA-IO / SCSI Trade Association — SATA 3.0 and NVMe specs
- 📄 ATX12V Design Guide 2.4 (Intel) — modern PSU spec

**Case-study sources:**
- 📄 Lipp et al. (2018). *Meltdown: Reading Kernel Memory from User Space*. USENIX Security 2018.
- 📄 Kocher et al. (2018). *Spectre Attacks: Exploiting Speculative Execution*. IEEE S&P 2019.

**Practitioner / exam:**
- 📖 [Professor Messer 220-1101 hardware module](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video-training-course/)
- 📖 *Upgrading and Repairing PCs* (Scott Mueller, Que) — the deep-reference book
- 📖 [JEDEC DDR5 Whitepaper](https://www.jedec.org/)
