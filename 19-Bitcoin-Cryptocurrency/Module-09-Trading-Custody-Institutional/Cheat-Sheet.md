# 📋 Module 9 Cheat Sheet: Trading, Custody & Institutional Adoption

---

## 🏛️ CEX vs DEX

| | CEX | DEX |
|---|-----|-----|
| **Custody** | Exchange holds keys | User holds keys |
| **Order matching** | Off-chain CLOB | On-chain (AMM or escrow) |
| **KYC** | Mandatory | Often none |
| **Counterparty risk** | YES (FTX, Mt. Gox) | Smart-contract risk only |
| **Examples** | Coinbase, Kraken, Binance | Uniswap (ETH), Bisq (BTC) |

🧠 **"Not your keys, not your coins."** — Antonopoulos

---

## 📊 Spot vs Futures vs Perpetuals

| Product | Expiry | Mechanism | Venues |
|---------|--------|-----------|--------|
| **Spot** | T+0 | True ownership | Coinbase, Kraken |
| **Futures** | Yes (quarterly) | Cash-settled | CME (Dec 2017) |
| **Perpetuals** | NONE | Funding rate every 8h | Binance, Bybit, OKX |

🧠 Positive funding = longs paying shorts = leverage in longs.

---

## 🏦 Spot Bitcoin ETF Launch (Jan 11, 2024)

| Ticker | Issuer | Fee | Custodian |
|--------|--------|-----|-----------|
| **IBIT** | BlackRock | 0.25% | Coinbase Custody |
| **FBTC** | Fidelity | 0.25% | Fidelity Digital Assets |
| **ARKB** | Ark/21Shares | 0.21% | Coinbase Custody |
| **BITB** | Bitwise | 0.20% | Coinbase Custody |
| **HODL** | VanEck | 0.20% | Gemini |
| **BTCO** | Invesco/Galaxy | 0.25% | Coinbase Custody |
| **EZBC** | Franklin Templeton | 0.19% | Coinbase Custody |
| **BTCW** | WisdomTree | 0.25% | Coinbase Custody |
| **GBTC** | Grayscale | 1.50% | Coinbase Custody |
| **DEFI** | Hashdex | 0.90% | BitGo |
| **BRRR** | Valkyrie | 0.25% | Coinbase Custody |

🧠 Grayscale v. SEC (Aug 2023) forced approval. IBIT hit $50B AUM in 6 months.

---

## 🔐 Custody Tier Hierarchy

| Tier | Online? | % of Funds | Use |
|------|---------|------------|-----|
| **Hot** | Always | 2-5% | Daily withdrawals |
| **Warm** | Periodic | 5-15% | Re-balancing |
| **Cold** | Never (air-gapped) | 80-95% | Long-term storage |

🧠 EVERY major exchange hack = hot wallet breach.

---

## 🔑 Multi-Sig vs MPC

| | Multi-Sig | MPC (TSS) |
|---|-----------|-----------|
| **What** | M-of-N pubkeys (Script) | 1 key split into N shares |
| **On-chain** | Visible (pre-Taproot) / aggregate (P2TR MuSig2) | Always looks like single-sig |
| **Re-quorum** | Move funds to new script | Re-share cryptographically |
| **Vendors** | Casa, Unchained, Sparrow | Fireblocks, Copper, BitGo Modular |
| **Schemes** | P2WSH, P2TR MuSig2 | GG18 (2018), FROST (2020) |

🧠 They are DIFFERENT primitives. Don't confuse them.

---

## 🏛️ Qualified Custodians (2026)

| Custodian | Regulator | Notable |
|-----------|-----------|---------|
| **Coinbase Custody Trust** | NYDFS | 8 of 11 spot ETFs |
| **Anchorage Digital** | OCC (Jan 2021 — first crypto national bank) | BNY Mellon, Visa, Apollo |
| **BitGo Trust** | SD trust | Many crypto-native funds |
| **Fidelity Digital Assets** | NY trust | Fidelity wealth platform |
| **Gemini Custody** | NYDFS | Standalone custody |
| **Komainu** | Jersey FSC | European institutions |

🧠 "Qualified custodian" = Investment Advisers Act 206(4)-2 — bank, BD, FCM, or regulated foreign institution.

---

## 📋 CCSS Levels (C4, 2015)

| Level | Requirement Highlights |
|-------|------------------------|
| **L1** | Secret entropy keygen; basic storage; key-compromise plan |
| **L2** | Distributed keygen; geographically distributed storage; multi-sig OR MPC; SOC 2 trajectory |
| **L3** | Multi-party key ceremonies; redundant cold storage; quarterly drills; SOC 2 + formal audit |

🧠 Coinbase Custody, BitGo, Anchorage = L3.

---

## 📈 The 5 On-Chain Metrics

| Metric | Origin | What it measures |
|--------|--------|------------------|
| **MVRV** | Coinmetrics 2018 | Market Value / Realized Value. >3.7 = top, <1.0 = bottom (historically) |
| **SOPR** | Shirakashi 2019 | Profit ratio of spent UTXOs; <1 = capitulation |
| **HODL waves** | Unchained 2018 | % supply held N years |
| **Realized cap** | Coinmetrics 2018 | Cost-basis-weighted market cap |
| **Exchange netflow** | CryptoQuant / Glassnode | BTC onto/off exchanges |

🧠 Descriptive, NOT predictive. Empirical bands.

---

## 🐳 Holder Tiers (Glassnode taxonomy)

| Tier | BTC | Count (~2026) |
|------|-----|---------------|
| Shrimp | <1 | 40M |
| Crab | 1-10 | 1M |
| Fish | 10-100 | 140K |
| Shark | 100-1K | 14K |
| Whale | 1K-10K | 1.8K |
| Humpback | >10K | ~100 |

🧠 Top addresses = mostly exchanges/ETFs/pools, NOT individuals.

---

## ⚠️ Top Exam Traps

1. **Multi-sig ≠ MPC.**
2. **CEX = IOU custodian; DEX = non-custodial.**
3. **Spot ETF approved Jan 10, 2024**; trading Jan 11. CME futures = Dec 17, 2017 (different!)
4. **80-95% in cold storage.**
5. **All major hacks = hot wallet.**
6. **CCSS has 3 levels.** L3 = qualified custodian grade.
7. **Cash creation (not in-kind) for U.S. spot ETFs.**
8. **MVRV >3.7 = top zone, <1.0 = bottom zone** (empirical, not law).
9. **SOPR = Spent Output Profit Ratio.**
10. **Coinbase Custody Trust ≠ Coinbase the brokerage.** Different legal entity.

---

## 🏆 Power Phrases

✅ "Cooperating multi-sig indistinguishable from single-sig (Taproot MuSig2)"
✅ "MPC re-shares without moving funds"
✅ "Cash-only ETF creation mitigates AP self-dealing"
✅ "Hot wallet rate-limiting + HSM-backed signing"
✅ "Realized cap is cost-basis-weighted"

❌ "Coinbase Custody is just Coinbase"
❌ "MPC and multi-sig are the same"
❌ "Whales own most of Bitcoin" (whales include exchanges)
❌ "ETFs let you spend the BTC"

---

➡️ [Module 10: Beyond Bitcoin (Broader Blockchain Ecosystem)](../Module-10-Beyond-Bitcoin-Blockchain-Ecosystem/Reading.md)
