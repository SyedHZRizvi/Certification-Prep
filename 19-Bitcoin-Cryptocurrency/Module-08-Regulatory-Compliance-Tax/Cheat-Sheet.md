# 📋 Module 8 Cheat Sheet: Regulatory, Compliance & Tax

---

## 🏛️ Four Regulatory Regimes Bitcoin Businesses Sit Inside

| Regime | Originated For | Bitcoin Implication |
|--------|---------------|---------------------|
| **AML** | Drug & organized crime (1970s) | KYC, monitoring, SAR |
| **CTF** | Post-9/11 | OFAC sanctions screening |
| **Securities reg** | 1933/1934 Acts | Howey test for tokens |
| **Crypto-native** | 2018-2024 | MiCA, VASP, MSB, VAUPA |

---

## 🇺🇸 US AML/KYC Stack (MSB)

| Item | Detail |
|------|--------|
| Foundational guidance | **FIN-2013-G001** (Mar 18, 2013) |
| Update | **FIN-2019-G001** (May 9, 2019) |
| Parent statute | **Bank Secrecy Act 1970** |
| Register form | Form 107 within 180 days |
| SAR / CTR | ≥ $2,000 suspicious / > $10,000 cash |
| State licensing | 49 MTLs (NY = BitLicense) |
| Records | 5-year retention |

🚨 **MSB**: exchangers, administrators, custodial wallets (incl. custodial Lightning)
🚨 **NOT MSB**: users, self-custody devs, miners-for-own-account, P2P traders

---

## 🌍 FATF Travel Rule (Recommendation 16, June 2019)

Originator + beneficiary info travels with VASP-to-VASP transfers. Scope = **VASPs**, NOT P2P protocol. Interop: TRP · TRUST · OpenVASP · Sumsub · Notabene.

| Jurisdiction | Threshold |
|--------------|-----------|
| US (FinCEN proposed) | **$3,000** |
| **EU TFR (Dec 30, 2024)** | **€0 VASP-to-VASP** (strictest) |
| Singapore / Japan / S. Korea | S$1,500 / ¥100,000 / ₩1M |
| FATF baseline | $1,000 |

---

## 🇪🇺 MiCA + 🇰🇷 South Korea

**MiCA**: Reg. (EU) 2023/1114 — stablecoin titles in force Jun 30 2024; full CASP regime Dec 30 2024; passports all 27 EU states. Asset classes: **EMT** (USDC, EURC, USDT), **ART** (multi-asset stablecoins), **Other** (BTC, ETH). Companion **TFR** (Reg. 2023/1113) = €0 VASP-to-VASP.

**South Korea**: SFTI Act amendment Mar 25 2021 → VASP regime (KoFIU registration + ISMS cert from KISA + real-name banking). **VAUPA** Jul 19 2024 = Korea's MiCA-equivalent. Survivors: Upbit, Bithumb, Coinone, Korbit, Gopax.

---

## 📊 FinCEN vs FATF vs MiCA

| Item | FinCEN (US) | FATF (global) | MiCA (EU) |
|------|------------|----------------|-----------|
| Term | MSB | VASP | CASP |
| Travel Rule | $3,000 (prop.) | $1,000 default | **€0 VASP→VASP** |
| Stablecoin | GENIUS 2025 | Recommendation | EMT/ART direct |
| Passporting | State-by-state | N/A | All 27 EU |

---

## 💰 IRS Tax-Event Quick-Reference

| Event | Tax Treatment |
|-------|--------------|
| Buy & hold BTC | No tax event |
| Sell BTC for USD / spend BTC | Capital gain/loss at FMV |
| Trade BTC ↔ ETH | Capital gain/loss (NOT like-kind since 2018) |
| Mining reward / payment / airdrop | Ordinary income at FMV |
| Donate to 501(c)(3) | FMV deduction, no gain recognized |
| Inherit | Stepped-up basis to FMV at death |
| Loan collateral (no sale) | No event |
| Wrap BTC → WBTC | Likely taxable; not definitively ruled |

---

## 📋 IRS Crypto Document Stack

| Document | Date | What |
|----------|------|------|
| **Notice 2014-21** | March 25, 2014 | Bitcoin = property |
| **TCJA** | December 22, 2017 | §1031 like-kind → real property only |
| **Rev. Rul. 2019-24** | October 9, 2019 | Hard forks = ordinary income |
| **Notice 2023-34** | March 2023 | NFTs as collectibles for IRAs |
| **Rev. Proc. 2024-28** | December 2024 | Wallet-by-wallet basis from Jan 1, 2025 |

---

## 🧮 Cost-Basis Methods

| Method | What |
|--------|------|
| **FIFO** | First-in, first-out (default) |
| **HIFO** | Highest-in, first-out (minimizes gain) |
| **LIFO** | Last-in, first-out (uncertain IRS acceptance) |
| **Specific ID** | Designate exact lots (requires recordkeeping) |

🎯 **2025+ rule**: must track basis **wallet-by-wallet** (not universal).

---

## 📝 US Filing Stack + Wash-Sale Status

- **Form 1040** digital-asset Y/N question · **Form 8949** itemize · **Schedule D** summary · **Form 1099-DA** broker (2025+)
- **Wash-sale rule** (IRC §1091): applies to **securities only** → does NOT apply to crypto as of mid-2026 (proposed 2021/22/23, never enacted — tax-loss harvesting available but policy may change)

---

## 🪙 US Bitcoin MSB Launch Checklist

- [ ] FinCEN Form 107 within 180 days
- [ ] AML officer + written policy + staff training + annual audit
- [ ] CIP (KYC) + transaction monitoring + SAR/CTR filing
- [ ] OFAC sanctions screening (customers + counterparties)
- [ ] State MTLs (49 states; NY BitLicense if NY)
- [ ] Travel-Rule messaging integration (TRP/TRUST/OpenVASP)
- [ ] Form 1099-DA broker reporting
- [ ] 5-year records retention

---

## 💼 Compliance-Failure Hall of Shame

| Year | Company | Penalty |
|------|---------|---------|
| 2020 | BitMEX | $100M + founders pled |
| 2022 | Bittrex | $24M |
| 2023 | Kraken (staking) | $30M SEC |
| **2023** | **Binance** | **$4.3B + monitor + CZ 4 mo prison** |
| 2024 | KuCoin | $300M + restrictions |

**Top penalty grew 40× from 2017 to 2023.**

---

## ⚠️ Top Exam Traps

1. **FIN-2013-G001 = March 18, 2013** (foundational US guidance)
2. **BSA 1970** = parent statute (not USA PATRIOT, not Dodd-Frank)
3. **Self-custody wallet devs ≠ MSBs** (FIN-2019-G001 carve-out)
4. **Travel Rule = VASP-scope**, not protocol-scope
5. **EU TFR = €0** for VASP-to-VASP (strictest); MiCA CASP fully in force Dec 30, 2024
6. **Bitcoin = property** (Notice 2014-21); like-kind §1031 killed by TCJA Dec 2017
7. **Hard-fork airdrops = ordinary income** (Rev. Rul. 2019-24)
8. **Wash-sale does NOT apply to crypto** (mid-2026); **wallet-by-wallet basis** required from Jan 1, 2025
9. **Binance settlement = $4.3B, Nov 21, 2023**; CZ 4 months prison April 2024
10. **OFAC Tornado Cash sanctioned Aug 2022 → de-listed March 21, 2025** (Van Loon)
11. **South Korea VASP = KoFIU + ISMS** (two-track, strictest national regime)

---

## 🏆 Power Phrases

✅ "Registered MSB under FIN-2013-G001" · "OFAC screening on customers + counterparties" · "Travel-Rule compliant via TRP/TRUST" · "Wallet-by-wallet basis per Rev. Proc. 2024-28" · "CASP-authorized, passported across EU"

❌ "Crypto is anonymous" · "Like-kind for BTC↔ETH" · "Self-custody wallets must KYC" · "Travel Rule applies to the protocol"

---

➡️ [Module 9: Institutional Adoption & Treasury Strategy](../Module-09-Trading-Custody-Institutional/Reading.md)
