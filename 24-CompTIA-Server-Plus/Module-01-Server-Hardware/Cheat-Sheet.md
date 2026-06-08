# 📋 Module 1 Cheat Sheet: Server Hardware

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧱 Form Factors

| Form | Size | Best for |
|---|---|---|
| **Tower** | Desktop-shaped | Small/branch office |
| **Rack (1U–4U)** | 1U = 1.75 in | Data center workhorse |
| **Blade** | Many blades / chassis | Max density |
| **Converged / HCI** | Pre-integrated | Hyperconverged VDI/virtualization |

🧠 1U = 1.75 in. 42U rack ≈ 73.5 in tall.

---

## 🧠 Server CPU vs Desktop

| Trait | Server | Desktop |
|---|---|---|
| Brand | Xeon, EPYC | Core, Ryzen |
| Sockets | 1/2/4 | 1 |
| Memory channels | 6–12 | 2 |
| ECC | Standard | Limited |
| RAS extensions | Yes | No |

---

## 💾 ECC RAM

- **SECDED** = Single Error Correct, Double Error Detect
- **RDIMM** = Registered (most servers)
- **LRDIMM** = Load-Reduced (max density)

🚨 Non-ECC = silent corruption at scale. Production = always ECC.

---

## ⚡ Power Redundancy

| Mode | Tolerates |
|---|---|
| Single PSU | Nothing |
| **N+1** | 1 PSU failure |
| **2N** | Entire feed loss (use 2 separate PDUs) |
| **2N+1** | Feed loss + a unit failure |

| 80 PLUS tier | Efficiency @ 50% |
|---|---|
| 80 PLUS | 80% |
| Bronze | 82% |
| Silver | 85% |
| Gold | 87% |
| Platinum | 90% |
| Titanium | 94% |

🚨 Two PSUs same PDU = fake redundancy.

---

## 💽 Drive Interfaces

| Interface | Speed | Where |
|---|---|---|
| SATA | 6 Gb/s | Cheap/cold |
| **SAS** | 12/22.5 Gb/s | Enterprise; **dual-ported** |
| **NVMe** (PCIe) | ~8 GB/s+ | Hot tier |
| FC | 8/16/32 Gb/s | SAN only |

Form factors: 3.5" LFF · 2.5" SFF · M.2 · U.2/U.3 · EDSFF.

---

## 🎛️ RAID Controller

- **HBA** = exposes raw drives (software RAID)
- **RAID controller** = does RAID in hardware
- **BBWC / FBWC** = battery/flash protects cached writes vs power loss

---

## 🛰️ Out-of-Band Management

| Vendor | Brand |
|---|---|
| Dell | **iDRAC** |
| HPE | **iLO** |
| Lenovo / IBM | **XCC** / IMM |
| Cisco UCS | **CIMC** |
| Whitebox / Supermicro | generic **IPMI** |

- **IPMI = UDP 623**, vendor-neutral standard
- BMC runs on standby power, works when host is OFF
- Virtual console + virtual media = remote OS install pre-boot

🚨 Never expose IPMI to internet, segment the management network.

---

## 🔥 ASHRAE Inlet Temp

- A1 recommended: **18–27 °C** (64–80 °F)
- Measure **front-of-rack inlet**, not CPU temp
- Hot-aisle / cold-aisle: alternate rack orientation

---

## 🔌 Cables & PDUs

| Cable | Use |
|---|---|
| C13/C14 | Standard server PSU (10 A) |
| C19/C20 | Higher-current PSUs (16/20 A) |
| RJ-45 Cat 6/6A | 1/10 GbE copper |
| SFP+/SFP28 | 10/25 GbE |
| QSFP+ / QSFP28 | 40/100 GbE |

| PDU type | Capability |
|---|---|
| Basic | Outlets only |
| Metered | Total amperage |
| Monitored | Per-outlet metering |
| **Switched** | Remote outlet power-cycle |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Plug PSUs into separate PDUs / feeds"
- "Connect to iDRAC / iLO to power-cycle remotely"
- "ECC RDIMM"
- "Hardware RAID with BBWC/FBWC"
- "Segment the OOB management network"

❌ Often **wrong**:

- "Both PSUs into the same PDU"
- "Non-ECC RAM in production"
- "Expose IPMI to the internet"
- "Yank hot-swap drives any time"
- "Mix rack orientation"

---

## 🗓️ Facts To Memorize Cold

- 1U = 1.75 in
- IPMI = UDP 623
- ASHRAE inlet: 18–27 °C
- ECC = SECDED
- SAS = dual-port; SATA = single-port
- 80 PLUS Titanium ≈ 94%
- Domain weight: Hardware = 18% of SK0-005

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Three server form factors + a use case for each? ___
2. What does ECC RAM correct vs detect? ___
3. Why 2 PSUs on the same PDU is fake redundancy? ___
4. IPMI port + transport? ___
5. Two BMC features that work when the OS is hung? ___
6. ASHRAE recommended inlet temperature range? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: Server Administration (Windows & Linux)](../Module-02-Server-Administration/Reading.md)
