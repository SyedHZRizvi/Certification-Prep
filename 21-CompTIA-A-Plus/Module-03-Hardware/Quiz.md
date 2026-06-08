# ✏️ Module 3 Quiz: Hardware

> Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26.
>
> **Bloom distribution:** Remember 6 · Understand 6 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. AMD's current desktop socket (Ryzen 7000+) is: *(Remember)*
A. AM4
B. AM5
C. TR4
D. LGA 1700

---

### Q2. The minimum number of disks for RAID 5? *(Remember)*
A. 2
B. 3
C. 4
D. 6

---

### Q3. RAID 0 provides: *(Understand)*
A. Maximum redundancy
B. Striping with parity
C. Striping with no redundancy (speed only)
D. Mirroring

---

### Q4. A motherboard has 4 DIMM slots labeled A1, A2, B1, B2. To enable dual-channel with two sticks, the typical correct placement is: *(Apply)*
A. A1 + A2
B. A2 + B2 (matched-color pair per the manual)
C. A1 + B2
D. Any combination, dual-channel is automatic regardless

---

### Q5. PCIe Gen 4 ×4 max theoretical throughput for an NVMe SSD: *(Remember)*
A. ~3,500 MB/s
B. ~7,000 MB/s
C. ~14,000 MB/s
D. ~550 MB/s

---

### Q6. Which is REQUIRED for a Windows 11 upgrade? *(Apply)*
A. TPM 2.0 + UEFI + Secure Boot
B. Legacy BIOS only
C. DDR5 RAM
D. Liquid cooling

---

### Q7. A PSU stamped "80 PLUS Gold" is approximately how efficient at 50% load? *(Remember)*
A. 80%
B. 85%
C. 87%
D. 94%

---

### Q8. A 24-pin connector connects what? *(Remember)*
A. CPU
B. GPU
C. Motherboard (ATX power)
D. SATA drive

---

### Q9. A user reports random reboots only under heavy GPU+CPU load. The MOST likely first suspect: *(Analyze)*
A. RAM is wrong color
B. The PSU is undersized or failing, sagging rails under load
C. The DNS server failed
D. The SSD needs defragmenting

---

### Q10. The form factor of a standard ATX motherboard: *(Remember)*
A. 6.7 × 6.7 in (mini-ITX)
B. 9.6 × 9.6 in (mATX)
C. 12 × 9.6 in (ATX)
D. 12 × 13 in (E-ATX)

---

### Q11. A 2.5" SATA SSD's interface limit is approximately: *(Remember)*
A. 150 MB/s
B. 550 MB/s
C. 3,500 MB/s
D. 7,000 MB/s

---

### Q12. ECC RAM is MOST appropriate for: *(Apply)*
A. A casual gaming PC
B. A server or workstation where uptime + data integrity matter
C. A laptop for school
D. A thin client

---

### Q13. The keying type on an M.2 slot that supports NVMe at full PCIe ×4 is: *(Understand)*
A. A-key
B. B-key only
C. M-key
D. E-key only

---

### Q14. A user's PC fans spin but the display stays black after pressing power. The MOST efficient first three checks (in order): *(Apply)*
A. Replace motherboard, then CPU, then RAM
B. Verify monitor cable + correct input, then reseat RAM, then test with known-good GPU
C. Reformat the SSD
D. Reinstall the OS

---

### Q15. RAID 10 requires a minimum of how many disks? *(Remember)*
A. 2
B. 3
C. 4
D. 6

---

### Q16. The fundamental difference between BIOS and UEFI is: *(Understand)*
A. UEFI is for laptops only
B. UEFI is 32/64-bit, supports GPT disks (>2 TB), Secure Boot, and a GUI/mouse
C. BIOS is newer
D. UEFI requires Linux

---

### Q17. A PC has 16 GB of DDR4-3200 RAM. The user wants to upgrade to 32 GB. They buy a single 16 GB DDR4-3200 stick. What's the risk? *(Analyze)*
A. None, DDR4 is always compatible
B. Mixing kits can drop dual-channel benefits or cause instability; QVL-matched kits are preferred
C. The CPU will not POST
D. The motherboard will catch fire

---

### Q18. The 12VHPWR (or 12V-2x6) connector is used by: *(Remember)*
A. Older floppy drives
B. Modern high-end GPUs (RTX 30/40/50 series)
C. Motherboard primary power
D. SATA SSDs

---

### Q19. NVMe drives connect via which bus? *(Remember)*
A. SATA
B. PCIe
C. USB
D. RS-232

---

### Q20. SODIMM is used in: *(Remember)*
A. Desktops only
B. Laptops, mini-PCs, NUCs
C. Servers only
D. Smartphones

---

### Q21. A user reports a constant beep at boot on a desktop. The MOST common cause: *(Apply)*
A. CPU failure
B. RAM problem, reseat or test
C. The hard drive needs defragmenting
D. Windows update

---

### Q22. RAID 5 with 5 disks of 4 TB each provides what usable capacity? *(Apply)*
A. 4 TB
B. 8 TB
C. 16 TB
D. 20 TB

---

### Q23. A workstation has both an integrated GPU and a discrete GPU. The MOST common reason to use the iGPU is: *(Evaluate)*
A. The iGPU is always faster
B. To save power for video calls, light tasks, or as a fallback if the dGPU fails
C. iGPUs support more displays
D. iGPUs have more VRAM

---

### Q24. A PC requires a CPU+GPU swap. The user mentions the cooler hasn't been cleaned in 5 years. As you replace the CPU, you should: *(Apply)*
A. Skip thermal paste, it's optional
B. Clean the IHS and cooler with isopropyl alcohol, then apply fresh thermal paste
C. Apply 1 cm thick paste blob
D. Boot without a cooler to test

---

### Q25. NAS vs SAN, which is correct? *(Analyze)*
A. NAS is block-level over fiber channel; SAN is file-level over Ethernet
B. NAS is file-level (SMB/NFS) over Ethernet; SAN is block-level (iSCSI/FC) and looks like a local disk
C. They are identical
D. Only NAS supports RAID

---

### Q26. Design challenge: A small editing studio needs a 4-disk array for video projects that survives 2 disk failures AND maintains good read/write throughput. The BEST choice is: *(Create)*
A. RAID 0 with 4 disks
B. RAID 1 with 4 disks
C. RAID 6 with 4 disks (survives 2 failures via dual parity)
D. JBOD

---

## 🎯 Answers + Explanations

### Q1: **B. AM5**
Ryzen 7000 (Zen 4) and later use AM5. AM4 was Ryzen 1000–5000. LGA 1700 is Intel.

### Q2: **B. 3**
RAID 5 needs 3 disks minimum (2 data + 1 parity worth of striping).

### Q3: **C. Striping with no redundancy**
RAID 0 splits data across disks for parallel speed. Any disk failure = total loss.

### Q4: **B. A2 + B2 (matched-color pair per the manual)**
On most 4-DIMM boards, the secondary slot of each channel (A2+B2) is the recommended dual-channel pair. Always verify in the manual.

### Q5: **B. ~7,000 MB/s**
PCIe Gen 4 ×4 ≈ 7 GB/s real-world. Gen 3 ×4 ≈ 3.5 GB/s. Gen 5 ×4 ≈ 14 GB/s.

### Q6: **A. TPM 2.0 + UEFI + Secure Boot**
The Win11 trifecta. Pre-existing PCs without TPM 2.0 cannot officially upgrade.

### Q7: **C. 87%**
Gold ≈ 87% at 50% load. White=80%, Bronze=82%, Silver=85%, Gold=87%, Platinum=90%, Titanium=94%.

### Q8: **C. Motherboard (ATX power)**
The 24-pin (or 20+4) ATX is the main motherboard connector. CPU uses 8-pin EPS; GPU uses 6+2 or 12VHPWR.

### Q9: **B. PSU undersized/failing**
Sudden reboots only under load is the classic sagging-rails symptom. Top suspect.

### Q10: **C. 12 × 9.6 in**
Standard ATX. mATX is 9.6 sq. ITX is 6.7 sq. E-ATX is the largest.

### Q11: **B. 550 MB/s**
SATA III 6 Gbps is the cap. SATA SSDs max around 550 MB/s sequential.

### Q12: **B. Server or workstation**
ECC corrects single-bit errors, critical for long uptime + data integrity. Consumer use rarely justifies the cost.

### Q13: **C. M-key**
M-key supports PCIe ×4 NVMe. B-key tops out at ×2 (and may be SATA). E-key is WiFi.

### Q14: **B. Monitor cable + input, reseat RAM, test with known-good GPU**
The 6-step methodology applied: cheap checks first; substitute known-good parts only after.

### Q15: **C. 4**
RAID 10 = mirror of stripes. Minimum is 4 disks, and the count must be even.

### Q16: **B. UEFI is 32/64-bit + GPT + Secure Boot + GUI**
Legacy BIOS is 16-bit real mode with MBR (2 TB cap). UEFI is the modern replacement.

### Q17: **B. Mixing kits can break dual-channel benefits or cause instability**
QVL-matched kits (sold as a kit) are stability-tested together. Mixing risks subtle issues, XMP/EXPO may fail to apply, capacity may run at single-channel, etc.

### Q18: **B. Modern high-end GPUs**
16-pin 12VHPWR (now revised to 12V-2x6) delivers up to 600W to RTX 30/40/50 series cards.

### Q19: **B. PCIe**
NVMe (Non-Volatile Memory Express) is a protocol on PCIe lanes, typically delivered via M.2 or U.2.

### Q20: **B. Laptops, mini-PCs, NUCs**
SODIMM (Small Outline DIMM) is the laptop form factor. Desktops use full DIMM.

### Q21: **B. RAM problem, reseat or test**
Continuous beeps almost universally indicate a RAM issue. Reseat, then test single sticks.

### Q22: **C. 16 TB**
RAID 5 capacity = (N-1) × disk size = (5-1) × 4 TB = 16 TB.

### Q23: **B. Save power, fallback, light tasks**
iGPUs are great for video calls, light productivity, and as a fallback if the dGPU fails. Newer iGPUs (Intel Arc, AMD RDNA) are surprisingly capable.

### Q24: **B. Clean and apply fresh paste**
Old paste dries and loses thermal conductivity. Clean both surfaces with 91%+ IPA, apply a pea-sized blob, mount evenly.

### Q25: **B. NAS = file (SMB/NFS) over Ethernet; SAN = block (iSCSI/FC) like local disk**
The clean definition. NAS = file shares. SAN = raw block storage presented as a disk.

### Q26: **C. RAID 6 with 4 disks**
Need to survive 2 failures → RAID 6 (dual parity). RAID 5 only survives 1 failure. RAID 10 with 4 disks survives some 2-disk loss patterns but not all.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Solid hardware foundation.
- 22–24/26 → ✅ Good. Drill RAID + PSU.
- 18–21/26 → ⚠️ Re-read the storage and RAID sections.
- <18/26 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- Sockets: LGA 1700/1851, AM4/AM5
- DDR4 vs DDR5 differences
- ATX vs mATX vs ITX dimensions
- RAID 0/1/5/6/10, min disks, fault tolerance, capacity formula
- 80 PLUS efficiency tiers
- 24-pin / 8-pin EPS / 6+2 PCIe / 12VHPWR, what each powers
- M.2 keying: B / M / B+M / A+E
- Win11 trifecta: TPM 2.0 + UEFI + Secure Boot

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4, Virtualization & Cloud](../Module-04-Virtualization-Cloud/Reading.md)
