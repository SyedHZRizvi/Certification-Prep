# ✏️ Module 6 Quiz: Printers & Peripherals

> Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24.
>
> **Bloom distribution:** Remember 7 · Understand 6 · Apply 6 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. The 7 steps of laser printing in order are: *(Remember)*
A. Charging → Processing → Exposing → Developing → Transferring → Fusing → Cleaning
B. Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning
C. Cleaning → Charging → Exposing → Processing → Developing → Transferring → Fusing
D. Exposing → Charging → Developing → Transferring → Fusing → Processing → Cleaning

---

### Q2. The laser creates the latent image on the drum during which step? *(Remember)*
A. Charging
B. Exposing
C. Developing
D. Transferring

---

### Q3. The step where heat (180–220 °C) and pressure bond toner to paper is: *(Remember)*
A. Charging
B. Transferring
C. Fusing
D. Cleaning

---

### Q4. An inkjet printer prints faded color even though ink is full. The MOST appropriate first fix: *(Apply)*
A. Replace the printer
B. Run the print-head cleaning utility from the printer's settings
C. Reformat the PC
D. Replace the drum

---

### Q5. A user reports a thermal receipt printer producing faded receipts that fade further over a day. The MOST likely cause: *(Apply)*
A. Failing print head OR aged thermal paper exposed to heat/sunlight
B. Wrong driver
C. Cable too long
D. Defragmentation needed

---

### Q6. Direct thermal printing uses: *(Understand)*
A. Heated wax/resin ribbon
B. Heat-sensitive paper that darkens when heated by the print head
C. Liquid ink
D. Toner powder

---

### Q7. A laser MFP prints a faint vertical line that repeats every ~3 inches down each page. The MOST likely cause: *(Analyze)*
A. Low ink
B. Drum unit scratched/contaminated at one circumference point
C. Wi-Fi interference
D. Wrong paper size

---

### Q8. The Windows service that queues print jobs is: *(Remember)*
A. Print Director
B. Print Spooler
C. Print Service Host
D. Windows Update

---

### Q9. An office printer reports "Printer offline" in Windows but everyone else can print to it. First check: *(Apply)*
A. Ping the printer's IP from the affected PC
B. Replace the printer
C. Reinstall Windows
D. Restart the user's monitor

---

### Q10. The MOST common cause of a "1 long + 3 short" AMI BIOS beep at boot is: *(Remember)*
A. RAM
B. Video / GPU
C. CPU
D. PSU

> *Note:* This is a hardware question but it appears in the printer/peripheral context because the exam mixes topics.

---

### Q11. USB 3.2 Gen 2 maximum throughput is approximately: *(Remember)*
A. 480 Mbps
B. 5 Gbps
C. 10 Gbps
D. 40 Gbps

---

### Q12. Thunderbolt 3 max speed and connector: *(Remember)*
A. 10 Gbps, Mini-DisplayPort
B. 40 Gbps, USB-C
C. 20 Gbps, USB-A
D. 80 Gbps, Mini-DP

---

### Q13. Apple's zero-configuration mobile-print protocol over IP is: *(Remember)*
A. AirPrint
B. Mopria
C. Google Cloud Print
D. LPD

---

### Q14. A user reports recurring paper jams in the same spot of a laser printer. The MOST likely cause: *(Analyze)*
A. Worn pickup roller / separation pad
B. Wrong toner color
C. Wi-Fi interference
D. Spooler service crash

---

### Q15. The PRIMARY reason CISA ordered domain controllers to disable Print Spooler in 2021 was: *(Analyze)*
A. The Spooler took too much memory
B. PrintNightmare CVE allowed authenticated users to install malicious drivers and gain SYSTEM via the Spooler
C. Spooler had a memory leak
D. Spooler was deprecated

---

### Q16. An MFP that prints, copies, scans, and faxes is called a(n): *(Remember)*
A. PCM
B. MFP (Multi-Function Printer)
C. RIP
D. IPM

---

### Q17. CMYK stands for: *(Remember)*
A. Cyan, Magenta, Yellow, Black
B. Color, Multi-color, Yellow, Key
C. Cyan, Magenta, Yellow, Key (black)
D. Capacity, Memory, Yield, Kilobyte

> *Answer note:* In printing, "K" is used to mean "Key" (the key plate / black). Both forms are accepted.

---

### Q18. A user with a Wi-Fi-only laptop wants to print on a USB-only printer attached to the desktop in the next room. The MOST appropriate solution: *(Apply)*
A. Buy a new printer
B. Share the USB printer over Windows Printer Sharing (or attach a USB print server)
C. Reformat the laptop
D. Email the document to the printer

---

### Q19. A 4K display + audio + 100W charging over a single USB-C cable to a laptop requires: *(Apply)*
A. USB 2.0
B. A cable + port that support USB-C with DisplayPort Alt Mode + USB Power Delivery (PD) at 100W
C. PoE
D. RS-232

---

### Q20. The IPP / IPPS port for Internet Printing Protocol over TLS is: *(Remember)*
A. 9100
B. 631
C. 80
D. 443

> *Note:* IPP uses TCP 631; IPPS layers TLS on the same port.

---

### Q21. A network printer prints garbled output for one user only, other users print fine. The MOST likely cause: *(Apply)*
A. The printer is failing
B. The user has the wrong driver installed
C. Wi-Fi outage
D. Spooler crashed globally

---

### Q22. The PRIMARY use case for impact (dot-matrix) printers today is: *(Understand)*
A. Photo printing
B. Carbon-copy multi-part forms (banks, auto repair invoices)
C. Color brochures
D. 3D printing

---

### Q23. A Windows machine cannot reach a print server. The print server's IP pings but the share `\\printserver\HRprinter` does not open. The MOST likely cause: *(Evaluate)*
A. The cable is bad
B. SMB / printer-sharing service is stopped on the server, or firewall blocking 445
C. DNS is broken
D. The user's monitor is failing

---

### Q24. Design challenge: A 5-person dental office needs duplex color printing, network-shared, with cost accounting per user. The MINIMUM viable choice: *(Create)*

> *Create-level note:* you are picking the *combination* of printer + features.
A. A single-function inkjet, USB-only
B. A networked color laser MFP with duplex + integrated print-quota software (or PaperCut-style accounting), Wi-Fi or Ethernet
C. A thermal label printer
D. A monochrome dot-matrix printer

---

## 🎯 Answers + Explanations

### Q1: **B. Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning**
Memorize the order. This is one of the highest-frequency questions on the entire exam.

### Q2: **B. Exposing**
The laser writes the latent image by neutralizing charge on the drum surface.

### Q3: **C. Fusing**
The fuser uses heat + pressure to melt toner permanently into paper fibers.

### Q4: **B. Run the print-head cleaning utility**
Clogged nozzles are the #1 inkjet cause of faded/streaky output. The utility is built into the printer.

### Q5: **A. Failing head OR aged thermal paper**
Direct thermal paper is heat-sensitive, exposure to environmental heat continues to "develop" it (or fade old paper). Combined with possible head degradation.

### Q6: **B. Heat-sensitive paper darkens when heated**
Direct thermal = no ink, no ribbon. The paper itself reacts to heat.

### Q7: **B. Drum scratched/contaminated at one point**
Repeating defect at a fixed interval = match the period to a rotating component's circumference. Drum is ~3 inches on most laser printers.

### Q8: **B. Print Spooler**
The Windows service `spooler` is responsible for print queues. `net stop spooler && net start spooler` is the classic fix.

### Q9: **A. Ping the printer's IP from the affected PC**
"Offline" means the PC can't reach the printer. Ping confirms network reachability.

### Q10: **B. Video / GPU**
On AMI BIOS, 1 long + 3 short typically = video memory or GPU. (Varies by vendor.)

### Q11: **C. 10 Gbps**
USB 3.2 Gen 2 (formerly USB 3.1 Gen 2). USB 3.2 Gen 2×2 = 20 Gbps. USB4 = 40 Gbps.

### Q12: **B. 40 Gbps, USB-C**
TB3 was the first Thunderbolt to use USB-C and hit 40 Gbps.

### Q13: **A. AirPrint**
Apple's mDNS-based protocol. Mopria is the Android cross-vendor equivalent.

### Q14: **A. Worn pickup roller / separation pad**
Mechanical wear is the most common recurring-jam cause. Replace consumables.

### Q15: **B. PrintNightmare CVE allowed SYSTEM privilege escalation**
Drivers installed via Spooler ran as SYSTEM. Domain controllers running Spooler became single-step compromise paths.

### Q16: **B. MFP**
Multi-Function Printer. Standard abbreviation.

### Q17: **C. Cyan, Magenta, Yellow, Key (black)**
"K" historically stands for "Key" (key plate). Some sources say "blacK", both are accepted.

### Q18: **B. Windows Printer Sharing or USB print server**
Both solutions allow other PCs to print to a USB-only printer over the network.

### Q19: **B. USB-C with DisplayPort Alt Mode + USB-PD**
You need both protocols active over the same cable. Many cheap USB-C cables are USB 2.0 only, won't carry display.

### Q20: **B. 631**
IPP = TCP 631. IPPS = same port with TLS. Port 9100 is the older raw-LPR/JetDirect port.

### Q21: **B. Wrong driver**
Symptom is per-user → almost always a driver issue. Garbled output = printer can't parse the data sent by the wrong driver.

### Q22: **B. Carbon-copy multi-part forms**
Only impact printing can press through carbon paper. Banks, auto shops, some government forms.

### Q23: **B. SMB / firewall**
Server pings → L3 OK. Share doesn't open → L4/L7 (SMB service, firewall blocking 445). Restart the LanmanServer service or check firewall.

### Q24: **B. Networked color laser MFP + duplex + per-user quota software**
Meets all the requirements. Inkjet is overpriced per page for office volume; impact is wrong for color.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Printer mastery.
- 20–22/24 → ✅ Solid. Drill the 7-step process.
- 16–19/24 → ⚠️ Re-read the laser + connector sections.
- <16/24 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- 7 laser steps IN ORDER
- Direct thermal vs thermal transfer
- USB generations (480 Mbps / 5 / 10 / 20 / 40 / 80 Gbps)
- Thunderbolt 3/4/5 speeds
- Display: HDMI 2.0/2.1, DP 1.4/2.1
- AirPrint vs Mopria
- IPP = 631, IPPS = 631 with TLS
- Print Spooler service + PrintNightmare lesson

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **[Module 7, Operating Systems](../Module-07-Operating-Systems/Reading.md) (Core 2 begins!)**
