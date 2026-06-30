# Module 6: Printers & Peripherals 🖨️

> **Why this module matters:** Printers + peripherals are part of the **29% Hardware & Network Troubleshooting domain** on 220-1101. Real talk: "my printer won't print" is the **single most common help-desk ticket** in any office for the rest of your career. The exam tests the laser 7-step process by name, ink/toner mechanics, and peripheral connectors (USB/Thunderbolt) you'll plug into desktops all day.

> **Prerequisites for this module.** Comfort with:
> - Module 2 (network basics, printers are network devices)
> - Module 5 (troubleshooting methodology)
>
> Hands-on: open an old printer's cover, find the toner cartridge and the drum unit. Just look, don't necessarily handle. The geometry will make this material click.

---

## 🖨️ A Story: The HR Department That Stopped Working Because of One Toner Cartridge

Meet Marisol. She's the only IT person at a 40-person family law firm. Tuesday morning, HR sends an urgent ticket: "The big copier won't print. We have 27 onboarding packets due before noon and one new hire arriving at 11:00."

Marisol walks over. The Konica Minolta bizhub MFP 5 years old, leased shows a yellow warning: "Toner low, black." But it's still trying to print. Pages come out a faint gray on the first try, then it pauses for 30 seconds, the screen flashes "Drum requires cleaning," and the print spooler queues 14 more jobs behind it.

She knows the laser process. She replaces the black toner (HR keeps spares in the closet they learned). She runs the **drum cleaning utility** from the printer's control panel 4 minutes. She watches the test print: crisp, dark, no streaks. She tells HR's manager: "You're back. Print one packet first, look at it, then send the rest."

The new hire arrives at 11:08. The packet is on the desk, perfectly printed.

But Marisol also notices something. The drum cleaning utility ran a long time because the toner was used past the "low" warning point, dust accumulates on the drum's photoreceptor and causes streaks. She schedules a calendar reminder: "Replace ALL toners when first warning appears at this MFP. Not after."

That's printer support. It's the laser process, the consumables, the firmware utilities, *and* the operational habits. This module covers all four.

---

## 🔥 Laser Printers, The 7-Step Process (Memorize Cold)

The most tested printer concept on the entire exam. **Memorize the order and what each step does.**

| # | Step | What happens |
|---|------|--------------|
| 1 | **Processing** | Printer receives the print job, RIP (Raster Image Processor) converts to bitmap |
| 2 | **Charging** | Primary corona / charge roller applies uniform negative charge (~–600V) to the drum |
| 3 | **Exposing** (Writing) | Laser writes the image by neutralizing charge where it hits, creates electrostatic latent image |
| 4 | **Developing** | Toner (negative-charged) adheres to neutralized (less negative) areas of the drum |
| 5 | **Transferring** | Transfer roller / belt with positive charge pulls toner from drum to paper |
| 6 | **Fusing** | Heat (180–220 °C) + pressure melt toner into the paper fibers |
| 7 | **Cleaning** | Cleaning blade/roller removes residual toner from drum; discharge lamp resets charge |

🧠 **Mnemonic:** "**P**lease **C**harge **E**xposing **D**evelopers **T**ransferring **F**using **C**leaning", or pick your own. Many techs use "**Cool People Eat Donuts To Fuse Cookies**" (CPEDTFC).

🎯 **Exam pattern:** *"In which step does the laser create the latent image on the drum?"* → **Exposing (Step 3).** *"In which step is heat applied to bond toner to paper?"* → **Fusing (Step 6).**

### Laser printer components

| Component | Role | Common failure symptom |
|-----------|------|------------------------|
| **Toner cartridge** | Holds the powdered toner | Streaks, fading, "low toner" warnings |
| **Drum unit** (sometimes integrated with toner) | Photosensitive surface | Repeating spots/lines at the drum-circumference interval |
| **Primary charge roller** (PCR) | Charges the drum | Light/dark bands |
| **Transfer roller** | Pulls toner from drum to paper | Smears, ghost images |
| **Fuser** (hot rollers + heating element) | Melts toner onto paper | Toner rubs off, smears, paper jams in fuser |
| **Separation pad** | Separates sheets in feed | Multi-feed (multiple sheets at once) |
| **Pickup roller** | Picks up paper from tray | Paper jams at pickup, "no paper" with paper present |
| **Imaging unit** | Whole drum + waste assembly (modern MFPs) | Replace as a unit |

---

## 💧 Inkjet Printers

| Component | Role |
|-----------|------|
| **Ink cartridge(s)** | Liquid ink (CMYK + sometimes light cyan/magenta) |
| **Print head** | Nozzles spray ink. May be integrated with cartridge (HP) or fixed in printer (Epson) |
| **Carriage / belt** | Moves print head left/right |
| **Paper feed roller** | Moves paper through |
| **Roller / tractor feed** | Pulls paper |
| **Calibration pattern** | Aligns CMY relative to K |

### Inkjet troubleshooting

| Symptom | Cause/fix |
|---------|-----------|
| Faded color | Low ink → check levels |
| Streaks / missing lines | Clogged head → run head cleaning utility |
| Banding | Misaligned heads → run alignment utility |
| Smears | Wet ink touching → adjust drying time, paper type |
| Paper won't pick up | Worn pickup roller, dirty rollers |

---

## 🧾 Thermal Printers

Two flavors:

| Type | How it works | Where you see it |
|------|--------------|------------------|
| **Direct thermal** | Heat darkens chemically-treated paper (no ink) | Receipts, shipping labels, wristbands |
| **Thermal transfer** | Heat melts wax/resin from a ribbon onto paper | Barcode labels, durable industrial labels |

### Components

- **Thermal print head**, array of tiny heating elements
- **Platen roller**, feeds the paper under the head
- **Thermal paper** (direct) OR **ribbon + label stock** (transfer)

### Troubleshooting

| Symptom | Cause |
|---------|-------|
| Faded prints | Head dirty (clean with isopropyl pen), failing head, old paper |
| Vertical white lines | Failed heating element on the head |
| Paper not advancing | Worn platen roller |
| Print fades over time after printing (direct thermal) | Heat exposure / sunlight; thermal paper is impermanent |

---

## 🖋️ Impact (Dot Matrix) Printers, Still on the Exam!

Largely obsolete but kept alive in:

- Carbon-copy / multi-part forms (only impact can press through carbon)
- Industrial / harsh environments (banks, auto repair shops)

### Mechanism

- **Print head** has 9 or 24 pins
- Pins strike a ribbon, which strikes the paper
- Tractor feed (sprocket holes) or friction feed
- Loud, slow, ink ribbon

### Troubleshooting

| Symptom | Cause |
|---------|-------|
| Faded print | Ribbon worn, replace |
| Missing dots in characters | Failed pin in print head |
| Paper jams at tractor feed | Misaligned sprockets / torn perforations |

---

## 🌐 Printer Connectivity

| Method | Use |
|--------|-----|
| **USB** | Direct PC-to-printer; simple, one-user |
| **Network (Ethernet)** | Office MFP shared by many |
| **Wi-Fi** | Home + small office; ensure printer joined the right SSID |
| **Bluetooth** | Mobile print, photo printers |
| **AirPrint** (Apple) | mDNS-based, zero-config Apple printing |
| **Mopria** | Cross-platform Android equivalent |
| **Cloud printing** | Replaces deprecated Google Cloud Print; vendor-specific (HP Smart, Brother Mobile, Canon PRINT) |
| **IPP / IPPS** | Internet Printing Protocol, secure variant |

### Sharing a USB printer over the network

- Plug into one PC; share via Windows Printer Sharing (SMB-based)
- Or use a USB print server (small device) to make USB-only printer network-accessible
- Or use a Raspberry Pi running CUPS

### Print servers

- Centralized queue management
- Driver distribution
- Quota / accounting
- Mostly seen in mid/large orgs with PaperCut, uniFLOW, or built-in Windows Print Server roles

---

## 🛠️ Common Printer Issues + Fixes

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| "Printer offline" (in Windows) | Network connectivity, paused queue, sleep | Ping printer IP; clear queue; "Use Printer Offline" toggle |
| Spooler stopped | Windows Print Spooler service crashed | `net stop spooler && net start spooler`, or Services.msc |
| Recurring paper jams | Worn pickup roller, separation pad, wrong paper weight | Replace consumables; use correct paper |
| Toner streaks | Low toner, dirty drum, failing drum | Replace toner; run cleaning; replace drum |
| Garbled output | Wrong driver, corrupt spool file | Reinstall driver; clear spool folder |
| Slow printing | Job too complex; printer RAM low; print server backed up | Reduce DPI; add RAM (if supported); clear queue |
| Ghost images (laser) | Failing drum, low toner, worn fuser | Replace drum; replace toner |
| Black streaks (thermal/inkjet) | Dirty head | Run cleaning cycle |

---

## 🔌 Peripheral Connectors (USB / Thunderbolt / DisplayPort / HDMI)

### USB generations and speeds

| Spec name (current) | Old name | Max speed |
|---------------------|----------|-----------|
| USB 2.0 | High Speed | 480 Mbps |
| USB 3.2 Gen 1 | USB 3.0 / SuperSpeed | 5 Gbps |
| USB 3.2 Gen 2 | USB 3.1 / SuperSpeed+ | 10 Gbps |
| USB 3.2 Gen 2×2 | (2 lanes) | 20 Gbps |
| USB4 | (incorporates TB3) | 40 Gbps |
| USB4 v2 | (with TB5 compatibility) | 80 Gbps (120 Gbps asymmetric) |

### USB connector types

- **Type-A**, original rectangular
- **Type-B**, square, printers/scanners
- **Mini-USB**, legacy cameras
- **Micro-USB**, older Android, e-readers
- **USB-C**, modern reversible, all modern phones/laptops

### Thunderbolt

| Gen | Connector | Max speed |
|-----|-----------|-----------|
| Thunderbolt 1 | Mini-DisplayPort | 10 Gbps |
| Thunderbolt 2 | Mini-DisplayPort | 20 Gbps |
| Thunderbolt 3 | USB-C | 40 Gbps |
| Thunderbolt 4 | USB-C | 40 Gbps (stricter min specs) |
| Thunderbolt 5 | USB-C | 80 Gbps (120 Gbps asymmetric) |

🚨 **USB-C vs Thunderbolt:** Thunderbolt uses USB-C connector but is a *different protocol* (plus USB4 compatibility). A Thunderbolt dock requires a Thunderbolt port; plugging it into a USB-C port that's only USB 3.2 won't get full speed.

### Display connectors

| Connector | Max resolution & refresh | Notes |
|-----------|--------------------------|-------|
| **HDMI 2.0** | 4K @ 60Hz | Common |
| **HDMI 2.1** | 8K @ 60Hz / 4K @ 120Hz | Modern AAA gaming, 2020+ TVs |
| **DisplayPort 1.4** | 4K @ 120Hz, 8K @ 60Hz | PC monitors |
| **DisplayPort 2.1 (UHBR20)** | 16K @ 60Hz | Newest, niche |
| **VGA** | Analog, 1080p typical max useful | Legacy projectors |
| **DVI-D / DVI-I** | 1080p @ 60Hz typical | Legacy monitors |
| **Mini-DP** | Same as DP, smaller | MacBook Pro pre-USB-C |

### Other peripheral interfaces

| Interface | Use |
|-----------|-----|
| **eSATA** | External SATA, legacy external drives |
| **PS/2** | Old keyboards/mice; purple = keyboard, green = mouse |
| **Serial (RS-232 / DB-9)** | Industrial / networking console |
| **Parallel (DB-25)** | Old printers (almost extinct) |
| **3.5mm TRRS audio** | Headset jack |

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports that the office MFP prints a faint, repeating vertical line every 3 inches down each page. Cleaning the print head (which is an inkjet utility, doesn't apply here) hasn't helped. The printer is a laser MFP.

**Walkthrough:**
1. **Identify**, Faint vertical line, repeating at regular interval, laser printer.
2. **Theory**, Repeating defect at a fixed interval = a roller / drum at that circumference. The drum circumference on most laser printers is ~3 inches. Likely cause: **scratch or contamination on the drum**.
3. **Test** Look at the drum surface (with the toner cartridge out, in low light) find the defect.
4. **Plan**, Replace the drum unit (or the integrated drum-toner cartridge).
5. **Verify**, Print a test page; line gone.
6. **Document**, KB: "Repeating vertical defects every ~3 inches → drum issue, not toner or fuser."

This is the classic "repeating defect" troubleshooting move: measure the *period* of the defect, match it to a circumference (drum vs. fuser roller vs. transfer roller).

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "The order of the 7 laser steps doesn't matter" | It is the #1-asked printer question. Memorize the order. |
| "Reseating the toner fixes everything" | Often it fixes connection errors, but real toner failure or drum issues are separate. |
| "Inkjet head cleaning works on lasers" | Laser doesn't have a print head in the inkjet sense. Different mechanism. |
| "Thermal printers use ink" | Direct thermal uses heat-sensitive paper (no ink). Thermal transfer uses a wax/resin ribbon. |
| "Network printer offline = needs replacement" | Almost always a connectivity issue. Ping the IP first. |
| "USB-C and Thunderbolt are the same" | Same connector, different protocols. Check the port spec. |
| "VGA is gone, ignore it" | Still on the exam. Projectors and older monitors keep it alive. |
| "All printers can do duplex" | Many entry-level can only print single-sided (simplex). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Laser 7-step process** | Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning |
| **Drum unit** | Photosensitive cylinder; image written by laser |
| **Toner** | Pigmented plastic powder; fused to paper at ~200 °C |
| **Fuser** | Heated rollers that melt toner into paper |
| **Spooler** | Windows service that queues print jobs |
| **Direct thermal vs Thermal transfer** | Paper darkens vs wax/resin from ribbon |
| **Impact (dot matrix)** | Pins through ribbon onto paper; carbon-copy friendly |
| **IPP / IPPS** | Internet Printing Protocol (secure variant) |
| **AirPrint / Mopria** | Apple / cross-platform mobile printing |
| **MFP** | Multi-Function Printer (print/copy/scan/fax in one) |
| **USB-C** | Modern reversible connector (multiple protocols) |
| **Thunderbolt** | Intel/Apple high-speed protocol over USB-C |
| **DisplayPort** | PC-monitor display protocol (DP) |
| **VGA / DVI** | Legacy display connectors |

### Acronyms cheat-row (Module 6)
| Acronym | Meaning |
|---------|---------|
| MFP | Multi-Function Printer |
| RIP | Raster Image Processor |
| IPP / IPPS | Internet Printing Protocol |
| LPR / LPD | Line Printer Remote / Daemon |
| CMYK | Cyan/Magenta/Yellow/blacK |
| PCL | Printer Command Language (HP) |
| PS | PostScript (Adobe) |
| ppm | Pages per minute |
| dpi | Dots per inch |
| TB3/4/5 | Thunderbolt generations |

---

## 📊 Case Study, The PrintNightmare Vulnerability (CVE-2021-1675 / CVE-2021-34527)

**Situation.** In June–July 2021, a remote-code-execution vulnerability in the **Windows Print Spooler** service was disclosed publicly (researchers at Sangfor inadvertently published a PoC for what they thought was a different CVE). The flaw, nicknamed **PrintNightmare**, allowed any authenticated user to install a malicious printer driver which Print Spooler would execute with SYSTEM privileges and from there compromise the entire host or domain.

**The technical detail.** The Print Spooler service ran with SYSTEM privileges on every Windows machine and accepted driver installation requests over both local and remote interfaces (including RPC over SMB on port 445). The vulnerable function (`RpcAddPrinterDriverEx`) did not properly validate driver paths, allowing UNC paths to attacker-controlled SMB shares.

**Decision and outcome.** Microsoft released patches July 1, 2021 (KB5004945) which initially proved *incomplete*, Will Dormann (CERT/CC) and others showed the patch could still be bypassed in some configurations. A full mitigation required either fully patching to KB5005033/5005565 (August 2021) AND disabling remote print-driver installation via Group Policy, OR disabling the Spooler service entirely on domain controllers (which Microsoft itself recommended). Federal agencies (CISA Emergency Directive 21-04) ordered all US federal agencies to disable Spooler on DCs by July 21, 2021.

**Lesson for the exam / for practitioners.**
- **Print Spooler is a security-critical service**, not just an "annoying thing that stops working." It runs as SYSTEM on every Windows box.
- **Domain controllers should never run Print Spooler.** Standard hardening guides have said this for years; PrintNightmare made it mandatory.
- **Patches sometimes need follow-up.** Always verify by reading post-patch advisories.

**Discussion (Socratic).**
- **Q1:** A 50-person law firm's only IT person reads about PrintNightmare. They have one Windows Server acting as both file server and print server, AD-joined. What 3 actions take in the first 24 hours?
- **Q2:** Is the right architecture in 2026 to centralize printing on a dedicated print server, distribute it to each workstation, or use direct-to-printer (IP printing)? Argue trade-offs for a 100-person law firm.
- **Q3:** PrintNightmare highlighted that legacy Windows services (Print Spooler dates to NT 3.1, 1993) carry forward old assumptions. Where else in modern Windows might similar architectural debt lurk, and how do we prioritize remediation?

---

## ✅ Module 6 Summary

You now know:

- 🔥 The **7-step laser printing process**, memorize the order
- 💧 Inkjet head-clean troubleshooting and the difference from laser
- 🧾 Direct thermal vs thermal transfer; impact for carbon-copy
- 🌐 Printer connectivity: USB / network / Wi-Fi / AirPrint / Mopria / IPP
- 🔌 Modern peripheral connectors: USB-C vs Thunderbolt, HDMI 2.1 vs DP 2.1
- 🛠️ Common printer-failure symptoms and fixes (streaks, jams, offline, spooler)

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 7, Operating Systems](../Module-07-Operating-Systems/Reading.md) (this is where Core 2 begins!)

> **Where this leads.**
> - Inside this course: [Module 9](../Module-09-Software-Troubleshooting/Reading.md) covers Windows Print Spooler debugging in depth as a software-troubleshooting topic; [Module 8](../Module-08-Security/Reading.md) covers print-server hardening.
> - Cross-course: Network+ (course 22) covers the network printing protocols (LPR, LPD, IPP) in more depth.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 ISO/IEC 24711:2020, measurement of inkjet print cartridge yield
- 📄 RFC 8011 / 8010, Internet Printing Protocol (IPP/2.0)
- 📄 USB Implementers Forum, USB 3.2 / USB4 specifications
- 📄 VESA DisplayPort 2.1 specification

**Case-study sources:**
- 📄 CISA Emergency Directive 21-04 (July 13, 2021), *Mitigate Windows Print Spooler Service Vulnerability*.
- 📄 Microsoft Security Advisory KB5005033 / KB5005565 (July–August 2021)

**Practitioner / exam:**
- 📖 [Professor Messer 220-1101 printers module](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video-training-course/)
- 📖 *The Printer Repair Bible* (Curtis B. Schwenk), for the deep-tech curious
