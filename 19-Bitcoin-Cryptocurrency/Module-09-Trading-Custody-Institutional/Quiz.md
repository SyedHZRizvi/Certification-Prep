# ✏️ Module 9 Quiz: Trading, Custody & Institutional Adoption

> 26 questions. Closed book. Aim for 22/26.

---

## Questions

### Q1. A centralized exchange (CEX) like Coinbase or Binance is best described as: *(Understand)*
A. A peer-to-peer network of nodes
B. An IOU economy — the exchange custodies user funds and tracks balances in its own database
C. A Bitcoin Improvement Proposal
D. A regulator

---

### Q2. The phrase "Not your keys, not your coins" was popularized by: *(Remember)*
A. Satoshi Nakamoto in the white paper
B. Andreas Antonopoulos in talks circa 2016
C. Larry Fink of BlackRock
D. The SEC

---

### Q3. The U.S. SEC approved spot Bitcoin ETFs on: *(Remember)*
A. December 17, 2017
B. October 19, 2021
C. January 10, 2024 (trading began January 11, 2024)
D. August 1, 2017

---

### Q4. The court case that effectively forced the SEC's hand on spot Bitcoin ETFs was: *(Remember)*
A. SEC v. Ripple Labs
B. Grayscale Investments v. SEC (D.C. Circuit, August 2023)
C. CFTC v. Binance
D. SEC v. Coinbase

---

### Q5. BlackRock's spot Bitcoin ETF ticker is: *(Remember)*
A. GBTC
B. IBIT
C. BITO
D. FBTC

---

### Q6. The qualified custodian behind 8 of the 11 launch spot Bitcoin ETFs is: *(Remember)*
A. Anchorage Digital
B. Fidelity Digital Assets
C. Coinbase Custody Trust Company
D. BitGo

---

### Q7. CME Group launched regulated Bitcoin FUTURES in: *(Understand)*
A. January 2014
B. December 2017
C. November 2021
D. January 2024

---

### Q8. The cryptographic primitive where ONE private key is split into N shares such that M of them produce signatures without ever reconstituting the key is: *(Apply)*
A. Multi-sig (P2WSH / P2TR M-of-N)
B. Multi-Party Computation (MPC), including threshold signature schemes (TSS) like GG18 and FROST
C. Hashed Time-Locked Contract
D. SHA-256 chaining

---

### Q9. The on-chain difference between multi-sig and MPC at the moment of spend is: *(Analyze)*
A. They produce identical witnesses
B. Multi-sig reveals the M-of-N structure (pre-Taproot) or aggregates into one signature (Taproot MuSig2); MPC always looks like a single-sig output regardless of the underlying quorum
C. MPC reveals more on-chain data
D. There is no difference

---

### Q10. In a standard institutional custody architecture, the percentage of funds held in cold storage is approximately: *(Apply)*
A. 5%
B. 25%
C. 50%
D. 80-95%

---

### Q11. Every major centralized exchange hack (Mt. Gox, Bitfinex 2016, Coincheck, KuCoin) was a breach of: *(Analyze)*
A. The cold-storage HSMs
B. The hot wallet
C. The Bitcoin protocol itself
D. The SEC's database

---

### Q12. The CryptoCurrency Security Standard (CCSS) has: *(Understand)*
A. 5 levels
B. 3 levels (1, 2, 3)
C. 10 levels
D. No levels — it's a binary pass/fail

---

### Q13. Anchorage Digital is notable in the U.S. custodian landscape because it: *(Understand)*
A. Pioneered MPC
B. Received the first OCC national trust bank charter for a crypto-native custodian (January 2021)
C. Custodies all spot Bitcoin ETFs
D. Invented the multi-sig wallet

---

### Q14. The "qualified custodian" requirement for RIAs holding client crypto assets comes from: *(Understand)*
A. The Bitcoin BIP-44 specification
B. The Investment Advisers Act of 1940, Rule 206(4)-2 ("the Custody Rule")
C. The Travel Rule under FinCEN
D. CCSS Level 3

---

### Q15. A perpetual swap differs from a futures contract because: *(Apply)*
A. Perpetuals are cash-settled; futures are coin-settled
B. Perpetuals have no expiration date and use a periodic funding-rate mechanism (typically every 8 hours) to keep their price near the underlying spot index
C. Perpetuals have an expiration date; futures do not
D. There is no difference

---

### Q16. A persistent POSITIVE funding rate on Bitcoin perpetual swaps indicates: *(Analyze)*
A. Shorts are paying longs
B. Longs are paying shorts — leveraged long positioning is dominant, often a contrarian warning sign
C. The funding rate has no information content
D. The exchange is insolvent

---

### Q17. An institutional buyer placing a $200M Bitcoin order would most likely execute through: *(Apply)*
A. The Coinbase Pro public order book
B. An OTC desk (Cumberland, Galaxy Digital, B2C2, etc.), often as the Authorized Participant feeding an ETF creation
C. A Lightning Network channel
D. A Bitcoin ATM

---

### Q18. The MVRV ratio in Bitcoin on-chain analysis is: *(Apply)*
A. Market Value divided by Realized Value (where realized value = aggregate cost basis of every UTXO at its last-moved price)
B. Mining Volume / Reward Value
C. A Federal Reserve metric
D. A Glassnode-proprietary average of price

---

### Q19. SOPR (Spent Output Profit Ratio) is: *(Apply)*
A. The ratio of price-sold to price-acquired for spent UTXOs; SOPR > 1 means the average spent UTXO is in profit
B. A measure of mining difficulty
C. A multi-sig efficiency metric
D. An ETF inflow indicator

---

### Q20. ETFs in the U.S. spot Bitcoin product use CASH (not in-kind) creation/redemption primarily because: *(Analyze)*
A. The Bitcoin Improvement Proposal required it
B. The SEC required cash creation to mitigate AP self-dealing risk and to keep BTC handling at the regulated trust company rather than the broker-dealer AP
C. It's cheaper for retail investors
D. There's no liquidity in BTC

---

### Q21. The Authorized Participants (APs) of a spot Bitcoin ETF perform which function? *(Apply)*
A. Custody the Bitcoin
B. Create and redeem ETF shares by delivering cash to (or receiving cash from) the trust; arbitrage keeps the ETF NAV tied to spot
C. Set monetary policy for Bitcoin
D. Approve new ETFs

---

### Q22. A custody architect chooses MPC over traditional multi-sig PRIMARILY for: *(Evaluate)*
A. Lower on-chain fees AND on-chain indistinguishability from single-sig AND the ability to re-share key shards without migrating funds
B. Better Bitcoin Script support
C. Avoiding the use of HSMs
D. Lower regulatory exposure

---

### Q23. A 5-of-9 Taproot multi-sig where all 9 cosigners cooperate spends via: *(Apply)*
A. Script-path, revealing all 9 keys
B. Key-path, using a MuSig2-aggregated single Schnorr signature
C. P2PKH
D. The coinbase output

---

### Q24. Of the following Glassnode address tiers, the most common Bitcoin holder is the: *(Apply)*
A. Humpback (>10,000 BTC)
B. Whale (1,000-10,000 BTC)
C. Shark (100-1,000 BTC)
D. Shrimp (<1 BTC) — the largest population by address count

---

### Q25. A common misconception about Bitcoin "whale" address concentration is: *(Evaluate)*
A. Whales control the entire supply
B. The top-100 addresses are mostly NOT individual rich holders — they include exchange hot wallets (custody for millions of users), mining pools, and ETF custody addresses; beneficial ownership is far less concentrated than the address-tier data suggests
C. There are no whales
D. Whales are always the same 100 people

---

### Q26. You are advising a $50M family office on Bitcoin custody. The office has no in-house security team. The best architecture is most likely: *(Create)*
A. Keep funds on a Coinbase consumer brokerage account for liquidity
B. A qualified custodian (Coinbase Custody, Anchorage, or BitGo) with CCSS Level 3 certification, SOC 2 attestation, and insurance — combined with a secondary self-custody slice (e.g., a 2-of-3 Casa multi-sig) for sovereignty
C. A single hardware wallet stored in a safe
D. A Lightning Network node

---

## 🎯 Answers + Explanations

### Q1: **B. An IOU economy**
On a CEX, your "Bitcoin balance" is a database entry. The exchange holds the actual coin. This is the structural risk that materialized in Mt. Gox, QuadrigaCX, and FTX.

### Q2: **B. Andreas Antonopoulos circa 2016**
The phrase entered the lexicon via his talks and *Mastering Bitcoin* 2e (2017). It's the foundational ethic of self-custody.

### Q3: **C. January 10, 2024 (trading began Jan 11)**
Eleven ETFs approved simultaneously. IBIT, FBTC, ARKB, BITB, HODL, BTCO, EZBC, BTCW, GBTC (converted), DEFI, and BRRR.

### Q4: **B. Grayscale Investments v. SEC (D.C. Circuit, August 2023)**
The court found the SEC's denial of GBTC-to-ETF conversion "arbitrary and capricious." The SEC chose not to appeal and instead approved en masse.

### Q5: **B. IBIT**
iShares Bitcoin Trust. Reached $50B AUM in ~6 months — fastest in ETF history.

### Q6: **C. Coinbase Custody Trust Company**
Eight of eleven, including IBIT, FBTC, ARKB, BITB, HODL, BRRR, BTCW, and others. The concentration is itself a topic of regulatory discussion.

### Q7: **B. December 2017**
CME launched cash-settled BTC futures (BTC, later MBT and BIT). Cboe also launched briefly but discontinued. CME became the regulated price-discovery benchmark.

### Q8: **B. MPC / TSS (GG18, FROST)**
The single key is mathematically split. The signature is computed jointly without the key ever being reconstructed in one place. Vendor examples: Fireblocks, Copper, BitGo Modular.

### Q9: **B. Multi-sig reveals quorum (pre-Taproot) or aggregates (Taproot); MPC always looks like single-sig**
This is the institutional appeal of MPC — privacy + flexibility — at the cost of trusting the vendor's protocol implementation.

### Q10: **D. 80-95%**
Cold storage is the bedrock. Hot wallets are kept minimal (2-5%) to limit blast radius of a breach.

### Q11: **B. The hot wallet**
Every major hack — Mt. Gox, Bitfinex 2016, Coincheck 2018, KuCoin 2020, Poly Network 2021 — was a hot wallet breach. Cold storage has held up across the industry's history.

### Q12: **B. 3 levels (1, 2, 3)**
Published by C4 in 2015. Level 3 is qualified-custodian grade — multi-party key generation, geographically distributed cold storage, quarterly drills, SOC 2.

### Q13: **B. First OCC national trust bank charter (January 2021)**
That charter let Anchorage operate as a federally regulated bank specifically for crypto custody — a regulatory novelty.

### Q14: **B. Investment Advisers Act of 1940, Rule 206(4)-2**
The "Custody Rule." A qualified custodian is a bank, registered broker-dealer, FCM, or certain regulated foreign institutions. Coinbase Custody Trust qualifies; Coinbase the brokerage generally does not.

### Q15: **B. Perpetuals have no expiration; funding rate (typically 8-hour) keeps price near spot**
Arthur Hayes (BitMEX) invented the perpetual swap in 2016. The funding mechanism is the key innovation.

### Q16: **B. Longs are paying shorts**
Positive funding = perp price above spot = longs are net positioned and paying. Extreme positive funding often precedes liquidation cascades.

### Q17: **B. OTC desk, often as the AP feeding an ETF creation**
Public order books would be overwhelmed by $200M of market impact. OTC desks (Cumberland, B2C2, GSR, Galaxy) provide bilateral execution with minimal market signaling.

### Q18: **A. Market Value / Realized Value**
Coined by Coinmetrics circa 2018. Historically MVRV >3.7 has marked cycle tops; <1.0 has marked cycle bottoms. Descriptive, not predictive.

### Q19: **A. The ratio of price-sold to price-acquired for spent UTXOs**
Renato Shirakashi, 2019. SOPR briefly dipping below 1 has historically marked bottoming conditions.

### Q20: **B. The SEC required cash creation to mitigate AP self-dealing risk**
In-kind creation would have meant APs (broker-dealers) directly handling BTC. Cash creation keeps the BTC at the qualified trust custodian.

### Q21: **B. Create / redeem ETF shares by delivering cash to / receiving cash from the trust**
Jane Street, JPMorgan Securities, Virtu, Flow Traders, etc. The creation/redemption mechanism enables the ETF's NAV-tracking arbitrage.

### Q22: **A. Lower on-chain fees AND single-sig appearance AND key-share re-issuance without funds migration**
Multi-sig with the same goals requires moving funds to a new script when the quorum changes; MPC re-shares cryptographically without moving funds.

### Q23: **B. Key-path, via MuSig2-aggregated single Schnorr signature**
The Taproot privacy win — see Module 6.

### Q24: **D. Shrimp (<1 BTC) — ~40M addresses**
Population, not aggregate holdings. Most Bitcoin addresses hold tiny balances. The whale tiers hold disproportionate value but are far fewer in count.

### Q25: **B. The top addresses are mostly NOT individuals**
They are custodian-held aggregate balances, mining pools, ETF custody addresses. Beneficial-ownership concentration is real but far lower than the raw address-tier data suggests.

### Q26: **B. A qualified custodian + a self-custody backup slice**
Standard architecture for institutional clients with limited in-house security operations. Single-vendor concentration is itself a risk, so combining qualified-custody with a self-custody recovery slice is the defensible choice.

---

## 📊 Score Yourself

- 24-26/26 → 🏆 Move to Module 10.
- 20-23/26 → ✅ Solid.
- 16-19/26 → ⚠️ Re-read custody architecture + ETF sections.
- <16/26 → 🔁 Re-read entire Reading.md.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10](../Module-10-Beyond-Bitcoin-Blockchain-Ecosystem/Reading.md)
