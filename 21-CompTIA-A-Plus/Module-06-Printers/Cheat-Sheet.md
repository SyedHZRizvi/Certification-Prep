# 📋 Module 6 Cheat Sheet: Printers & Peripherals

> One page. Print it. Memorize the 7-step laser process.

---

## 🔥 LASER 7-STEP PROCESS (Memorize Cold)

```
1. Processing    (raster image)
2. Charging      (uniform –600V on drum)
3. Exposing      (laser writes latent image)
4. Developing    (toner adheres to drum)
5. Transferring  (drum → paper via + roller)
6. Fusing        (heat + pressure bonds toner)
7. Cleaning      (residual toner removed)
```

🧠 Mnemonic: **C**ool **P**eople **E**at **D**onuts **T**o **F**use **C**arbs (CPEDTFC, your own works fine too).

---

## 💧 Inkjet vs Thermal vs Impact

| Type | Mechanism | Use case |
|------|-----------|----------|
| Inkjet | Liquid ink sprayed by nozzle | Photo, color, home/SOHO |
| Direct thermal | Heat darkens paper (no ink) | Receipts, shipping labels |
| Thermal transfer | Heat melts wax/resin from ribbon | Durable barcode labels |
| Impact (dot matrix) | Pins through ribbon | Multi-part forms |

---

## 🛠️ Top Printer Issues

| Symptom | Fix |
|---------|-----|
| Printer offline | Ping IP, restart spooler |
| Spooler crashed | `net stop spooler && net start spooler` |
| Recurring jams | Worn pickup roller / separation pad |
| Streaks (laser) | Clean drum, replace toner |
| Streaks (inkjet) | Run head clean |
| Repeating defect every X inches | Match X to drum/fuser circumference |
| Garbled output (1 user) | Wrong driver, reinstall |
| Faded thermal | Bad head, old paper |

---

## 🌐 Print Connectivity

| Method | Notes |
|--------|-------|
| USB | One-PC, simple |
| Ethernet | Shared MFP, office standard |
| Wi-Fi | SOHO, ensure right SSID |
| AirPrint | Apple, mDNS, zero-config |
| Mopria | Cross-platform Android |
| IPP / IPPS | TCP (Transmission Control Protocol) 631 (also w/ TLS (Transport Layer Security)) |
| Print Server | Quota, drivers, central queue |

---

## 🔌 USB Speeds

| Spec | Speed |
|------|-------|
| USB 2.0 | 480 Mbps |
| USB 3.2 Gen 1 (USB 3.0) | 5 Gbps |
| USB 3.2 Gen 2 (USB 3.1) | 10 Gbps |
| USB 3.2 Gen 2×2 | 20 Gbps |
| USB4 | 40 Gbps |
| USB4 v2 | 80 Gbps |

---

## ⚡ Thunderbolt

| Gen | Speed | Connector |
|-----|-------|-----------|
| TB 1 | 10 Gbps | Mini-DP |
| TB 2 | 20 Gbps | Mini-DP |
| TB 3 | 40 Gbps | USB-C |
| TB 4 | 40 Gbps | USB-C |
| TB 5 | 80 Gbps | USB-C |

🚨 **USB-C connector ≠ Thunderbolt support.** Check port specs.

---

## 🖼️ Display Connectors

| Connector | Max useful |
|-----------|------------|
| HDMI 2.0 | 4K @ 60Hz |
| HDMI 2.1 | 8K @ 60Hz / 4K @ 120Hz |
| DP 1.4 | 4K @ 120Hz / 8K @ 60Hz |
| DP 2.1 (UHBR20) | 16K @ 60Hz |
| VGA | 1080p analog (legacy) |
| DVI | 1080p (legacy) |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Recite the 7 steps in order"
- "Ping the printer IP first"
- "Run the cleaning utility (inkjet)"
- "Replace the drum (if defect repeats at drum circumference)"
- "Restart Print Spooler"

❌ Often **wrong**:

- "Replace the printer first"
- "Inkjet head clean works on lasers"
- "Direct thermal uses ink"
- "USB-C always = Thunderbolt"
- "Spooler service is not security-critical"

---

## 🗓️ Memorize Cold

- 7 laser steps **in order**
- Direct thermal = no ink
- Impact = carbon-copy forms
- IPP = 631
- USB 3.2 Gen 2 = 10 Gbps
- TB3+ = USB-C connector
- DisplayPort 1.4 = 4K @ 120 Hz
- AirPrint = Apple; Mopria = Android
- Printers + Peripherals contribute heavily to the **29% Troubleshooting domain**

---

## ✏️ Quick Self-Check

1. Recite the 7 laser steps? ___
2. Direct thermal vs thermal transfer? ___
3. USB-C vs Thunderbolt, what's the practical difference? ___
4. Common cause of recurring paper jams? ___
5. Default port for IPP / IPPS? ___

---

➡️ **Core 2 begins:** [Module 7, Operating Systems](../Module-07-Operating-Systems/Reading.md)
