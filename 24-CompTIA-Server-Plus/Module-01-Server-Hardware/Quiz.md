# ✏️ Module 1 Quiz: Server Hardware & Components

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level** so you can self-diagnose: if you miss recall ("Remember") questions, you need more flashcards; if you miss application ("Apply") or evaluation ("Analyze") questions, you need more scenario practice.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. A 1U rack server occupies how much vertical space in the rack? *(Remember)*
A. 1.0 inch
B. 1.75 inches
C. 2.5 inches
D. 3.5 inches

---

### Q2. Which memory type detects AND corrects single-bit errors automatically? *(Remember)*
A. Non-ECC UDIMM
B. ECC RDIMM
C. LPDDR5
D. SO-DIMM

---

### Q3. Two PSUs are installed in a server. Both are plugged into the same PDU. The redundancy is BEST described as: *(Apply)*
A. True 2N — fully fault tolerant
B. N+1 PSU redundancy, but a single shared point of failure remains at the PDU
C. 2N+1 because there are two units
D. No redundancy at all

---

### Q4. IPMI uses what transport and port? *(Remember)*
A. TCP 22
B. UDP 161
C. UDP 623
D. TCP 443

---

### Q5. Which of the following is the Dell brand for out-of-band management? *(Remember)*
A. iLO
B. iDRAC
C. XCC
D. CIMC

---

### Q6. Which of the following is the HPE brand for out-of-band management? *(Remember)*
A. iLO
B. iDRAC
C. XCC
D. CIMC

---

### Q7. A server has its own BMC with a dedicated NIC. The host OS is hung. What can the BMC still do? *(Understand)*
A. Nothing — the BMC depends on the host OS
B. Power-cycle the server, open a virtual console, read sensor data
C. Only display sensor data; cannot affect power
D. Mount a virtual ISO only if the host OS is running

---

### Q8. A server's RAID controller has a battery-backed write cache (BBWC). What does the battery primarily protect? *(Understand)*
A. The drives, against vibration
B. In-flight writes held in cache against sudden power loss
C. The BMC firmware
D. The PSU during transfer

---

### Q9. Which interface offers DUAL ports per drive for path redundancy in the enterprise? *(Apply)*
A. SATA
B. SAS
C. M.2 NVMe consumer drive
D. eSATA

---

### Q10. A 2U server is being deployed in a colocation facility with two independent power feeds (A and B). To achieve real 2N PSU redundancy you should: *(Apply)*
A. Plug both PSUs into PDU-A for simplicity
B. Plug one PSU into PDU-A and the other into PDU-B
C. Use only one PSU to reduce heat
D. Power one PSU from a desk outlet outside the rack

---

### Q11. Which is NOT a standard server form factor on the Server+ exam? *(Remember)*
A. Tower
B. Rack (1U–4U)
C. Blade
D. Console-mount

---

### Q12. A 70% load 80 PLUS rating "Titanium" means roughly: *(Understand)*
A. 70% efficient
B. 80% efficient
C. 90% efficient
D. 94% efficient

---

### Q13. ECC RAM on a server detects double-bit memory errors and: *(Understand)*
A. Silently corrupts the data
B. Auto-corrects them
C. At least detects them, typically triggering a machine-check / kernel panic so corruption is not silent
D. Has no effect

---

### Q14. Which sensor data is BEST used to evaluate data-center cooling adequacy? *(Apply)*
A. CPU package temperature only
B. Inlet ambient temperature at the front of the rack
C. PSU output voltage
D. RAID controller temperature

---

### Q15. A switched PDU lets you: *(Apply)*
A. Adjust the chiller setpoint
B. Remotely power-cycle individual outlets via IP
C. Convert 120 V to 12 V DC
D. Send Wake-on-LAN frames

---

### Q16. A server administrator 200 miles away needs to install an OS on a new server that just arrived in the colo. The hands-on tech racked it and connected power and network only. The remote admin should: *(Apply)*
A. Drive to the site
B. Connect to the iDRAC/iLO, mount a virtual ISO, open the virtual console, install
C. Ask the tech to install the OS
D. Wait for the OS to install itself

---

### Q17. NVMe drives connect via what bus, primarily? *(Remember)*
A. SAS
B. SATA
C. PCIe
D. USB

---

### Q18. The principle of "hot aisle / cold aisle" in a data center means: *(Understand)*
A. Servers are placed back-to-back to share heat
B. Racks alternate orientation so all server fronts face cold aisles and all backs face hot aisles
C. Racks alternate row temperatures by day
D. Cold racks have ice packs in them

---

### Q19. An organization needs the maximum compute density per rack. Which form factor BEST fits? *(Analyze)*
A. Tower
B. 4U rack
C. Blade chassis
D. Desktop

---

### Q20. A server with hot-swap drives shows a solid amber LED on bay 3. The drive in bay 3 is still being read/written by the OS. The administrator should: *(Analyze)*
A. Immediately yank the drive
B. Wait until the array marks the drive failed and rebuilds onto the hot spare, then pull the failed drive with the activity LED off
C. Power down the server first
D. Pull bay 4 instead

---

### Q21. An organization wants out-of-band management but is buying whitebox servers from a Tier-2 vendor with no proprietary brand name. The administrator should look for support of: *(Apply)*
A. iDRAC
B. iLO
C. Generic IPMI 2.0
D. RDP

---

### Q22. A four-PSU server is configured 2+2 (two on feed A, two on feed B). One PSU on feed A fails and feed B is later lost entirely. The server: *(Analyze)*
A. Stays up — one PSU on feed A continues to handle the full load
B. Crashes immediately
C. Reduces to half performance
D. Depends only on the BMC

---

### Q23. A bank reports occasional silent corruption of database rows that no software bug explains. The hardware team should FIRST verify: *(Evaluate)*
A. The CPU clock speed
B. That the server is using ECC RAM and that no DIMMs report uncorrectable errors in the BMC SEL
C. The brand of the chassis
D. The 80 PLUS rating of the PSU

---

### Q24. Match: A LOM port on a server motherboard is: *(Understand)*
A. A serial console port
B. The onboard "LAN on Motherboard" — typically 1× or 2× 1 or 10 GbE built-in NIC
C. A storage backplane connector
D. An always-on iLO-only port

---

### Q25. Which is BEST classified as the *vendor-neutral* OOB management standard? *(Understand)*
A. iLO
B. iDRAC
C. CIMC
D. IPMI

---

### Q26. *Design exercise.* You are building a 1U pizza-box server for a branch office. It must run 3 production VMs, survive a single PSU failure, survive a single drive failure, allow remote OS reinstall, and report cooling failures by email before thermal shutdown. Pick the minimum-viable bill of materials: *(Create)*

> *Create-level note:* you are designing — picking the smallest set of components that satisfies every stated requirement.

A. Single PSU, 2 consumer SSDs in software mirror, no BMC, monitor via SSH only
B. Dual hot-swap PSUs on the same PDU, 2 SATA SSDs in software mirror, basic IPMI
C. Dual hot-swap PSUs on separate PDUs, 4 SAS drives in RAID 10 behind a hardware RAID controller with FBWC, full iDRAC/iLO with SMTP alerting, ECC RAM
D. Single PSU, 4 SATA HDDs in RAID 5, full iDRAC, ECC RAM

---

## 🎯 Answers + Explanations

### Q1: **B. 1.75 inches**
1U is exactly 1.75 in (4.45 cm). A 42U rack is therefore ~73.5 in / 1.87 m tall.

### Q2: **B. ECC RDIMM**
ECC = Error-Correcting Code. RDIMM (Registered) is the most common server form. UDIMM may or may not be ECC; ECC UDIMM exists but is less dense than RDIMM/LRDIMM.

### Q3: **B. N+1 PSU redundancy, but a single shared point of failure remains at the PDU**
Two PSUs survive *one PSU* failure (N+1 at the PSU layer). But both depend on the same PDU — if the PDU breaker trips or the feed dies, the server dies. True 2N requires separate feeds.

### Q4: **C. UDP 623**
IPMI runs on UDP 623. Historical CVEs (cleartext passwords in 1.5, cipher-0 auth bypass) mean the management network must be segmented. Never expose IPMI to the internet.

### Q5: **B. iDRAC**
Integrated Dell Remote Access Controller. iLO = HPE. XCC = Lenovo. CIMC = Cisco UCS.

### Q6: **A. iLO**
Integrated Lights-Out, HPE.

### Q7: **B. Power-cycle the server, open a virtual console, read sensor data**
The BMC runs on standby power and is independent of the host OS/CPU/RAM. Even a totally hung server can be controlled by the BMC.

### Q8: **B. In-flight writes held in cache against sudden power loss**
The cache stores writes the controller has acknowledged but not yet flushed to disk. Without the battery (or supercap+flash), a sudden power loss loses those writes — disastrous for RAID 5/6 parity (torn writes).

### Q9: **B. SAS**
SAS drives are dual-ported, enabling two HBA/controller paths to the same drive. SATA is single-port; M.2 consumer is single-ported.

### Q10: **B. Plug one PSU into PDU-A and the other into PDU-B**
That is what makes the redundancy honest: losing an entire feed still leaves a powered PSU. Same-PDU defeats the design intent.

### Q11: **D. Console-mount**
Tower, rack, blade (and converged/HCI) are the recognized form factors. "Console-mount" is not a Server+ form factor — KVM consoles are a separate device.

### Q12: **D. 94% efficient**
80 PLUS Titanium is ~94% at 50% load (and even better at 20%/100%). Gold = 87%, Platinum = 90%, Titanium = 94%.

### Q13: **C. At least detects them, typically triggering a machine-check / kernel panic so corruption is not silent**
SECDED = Single Error Correct, Double Error Detect. Single-bit = corrected silently. Double-bit = detected (system halts or marks the page bad) — preventing silent corruption.

### Q14: **B. Inlet ambient temperature at the front of the rack**
ASHRAE recommends 18–27 °C inlet (A1 envelope). CPU temp is a downstream effect; if inlet rises, CPU temp follows. Cooling is sized to keep inlet in spec.

### Q15: **B. Remotely power-cycle individual outlets via IP**
Switched PDUs are your last-ditch recovery — when even the BMC is unreachable, cycle the outlet.

### Q16: **B. Connect to the iDRAC/iLO, mount a virtual ISO, open the virtual console, install**
Virtual media + virtual console are core OOB features. This is exactly what they're for — install an OS over the network without a tech at the rack.

### Q17: **C. PCIe**
NVMe = Non-Volatile Memory Express over PCIe. M.2 slots and U.2 bays both wire to PCIe lanes on the motherboard.

### Q18: **B. Racks alternate orientation so all server fronts face cold aisles and all backs face hot aisles**
This separates intake air from exhaust air, preventing hot exhaust from being re-ingested. Mixing directions destroys cooling efficiency.

### Q19: **C. Blade chassis**
Blades stack 10–16+ servers per chassis sharing PSUs/cooling/network. Highest compute density per rack — at the cost of vendor lock-in and a single-chassis blast radius.

### Q20: **B. Wait until the array marks the drive failed and rebuilds onto the hot spare, then pull the failed drive with the activity LED off**
Hot-swap means *capable of being swapped while running* — but only after the array has marked the drive failed and stopped using it. Yanking mid-write can corrupt the array. The amber LED indicates a problem; wait for activity LED to go dark.

### Q21: **C. Generic IPMI 2.0**
iDRAC, iLO, CIMC are vendor brands. IPMI 2.0 is the vendor-neutral standard most whitebox servers (e.g., Supermicro, ASRock Rack) implement.

### Q22: **A. Stays up — one PSU on feed A continues to handle the full load**
2+2 means each pair can carry the full load. Losing one PSU on A and the entire B feed leaves a single working PSU on A — provided that one PSU has the wattage capacity for full load, the server runs. (Some configs are dual-redundant *for half load* — read the vendor spec.)

### Q23: **B. That the server is using ECC RAM and that no DIMMs report uncorrectable errors in the BMC SEL**
Silent data corruption with no software bug points strongly at memory. Check ECC enablement first, then SEL for memory error counters. If DIMMs are non-ECC, replace immediately.

### Q24: **B. The onboard "LAN on Motherboard" — typically 1× or 2× 1 or 10 GbE built-in NIC**
LOM = LAN-on-Motherboard. Adds basic NICs without consuming a PCIe slot.

### Q25: **D. IPMI**
IPMI is the open, vendor-neutral standard (Intel-led, 1998). iLO/iDRAC/CIMC are vendor-specific implementations layered on top.

### Q26: **C. Dual hot-swap PSUs on separate PDUs, 4 SAS drives in RAID 10 behind a hardware RAID controller with FBWC, full iDRAC/iLO with SMTP alerting, ECC RAM**
This is the only option that satisfies all 5 requirements: PSU redundancy on separate feeds (survive PSU and feed failures), RAID 10 (survives drive failure, fast for VMs), FBWC (protects writes during power events), OOB management with SMTP/alerting (remote install + email alerts), ECC RAM (ECC catches bit flips). Option A has no redundancy. B leaves PDU as single point of failure and no email alerting. D has only one PSU and uses HDDs in RAID 5 (slow rebuilds, no live-failure tolerance during rebuild on 4 disks).

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 1 mastered. On to administration.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the OOB-management and power-redundancy sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- 4 form factors + 1U size
- ECC RAM: SECDED, RDIMM vs LRDIMM
- PSU redundancy modes: N+1, 2N, 2N+1
- 80 PLUS efficiency tiers
- BMC + IPMI + vendor brands (iDRAC, iLO, XCC, CIMC)
- BBWC/FBWC purpose
- ASHRAE inlet temperature (18–27 °C)
- Hot-aisle/cold-aisle discipline

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2 — Server Administration (Windows & Linux)](../Module-02-Server-Administration/Reading.md)
