# ✏️ Module 5 Quiz: Mining & Proof-of-Work Economics

> 24 questions. Closed book. Aim for 20/24.

---

## Questions

### Q1. The block subsidy halves every: *(Remember)*
A. 1,000 blocks
B. 2,016 blocks
C. 210,000 blocks (~4 years)
D. 840,000 blocks

---

### Q2. The April 2024 halving (block 840,000) reduced the subsidy to: *(Remember)*
A. 25 BTC
B. 12.5 BTC
C. 6.25 BTC
D. 3.125 BTC

---

### Q3. The difficulty adjustment is capped at: *(Remember)*
A. ±10% per adjustment
B. ±2× per adjustment
C. ±4× per adjustment
D. Unlimited

---

### Q4. Mining is: *(Understand)*
A. Solving complex mathematical equations
B. Brute-force searching for a nonce such that the double-SHA-256 of the 80-byte block header is ≤ the target
C. Validating L2 transactions
D. Casting votes on consensus rules

---

### Q5. The ASIC transition (2013) was significant because: *(Understand)*
A. It enabled smart contracts
B. It ended the CPU and GPU mining eras forever, shifting Bitcoin to specialized silicon
C. It introduced Schnorr signatures
D. It launched Lightning

---

### Q6. The May 2021 China mining ban caused: *(Remember)*
A. The Bitcoin chain to halt
B. A ~50% hashrate drop within 60 days, with full recovery by October 2021
C. Permanent loss of 50% of BTC
D. A 51% attack

---

### Q7. A 51% attacker on Bitcoin CAN: *(Apply)*
A. Inflate the supply beyond 21M
B. Steal coins from any address
C. Double-spend recent transactions and censor specific addresses
D. Change the SHA-256 algorithm

---

### Q8. Bitcoin's annualized electricity use (2026 estimates) is approximately: *(Remember)*
A. ~5 TWh/year
B. ~120-150 TWh/year
C. ~1,000 TWh/year
D. ~5,000 TWh/year

---

### Q9. The dominant Bitcoin mining jurisdiction in 2026 is: *(Remember)*
A. China
B. United States (~40% of global hashrate)
C. Russia
D. El Salvador

---

### Q10. The two largest mining pools in 2026 (combined ~50% hashrate) are: *(Remember)*
A. Foundry USA + AntPool
B. F2Pool + Slush Pool
C. BTC.com + Poolin
D. ViaBTC + Binance Pool

---

### Q11. Stratum V2 differs from Stratum V1 by: *(Apply)*
A. Using TCP instead of UDP
B. Letting individual miners choose which transactions to include — addressing pool-centralization concerns
C. Removing fees
D. Requiring KYC

---

### Q12. A modern (2026) top-tier ASIC efficiency is approximately: *(Remember)*
A. ~1,000 J/TH
B. ~100 J/TH
C. **~14-17 J/TH**
D. ~0.1 J/TH

---

### Q13. The "stranded energy" argument for Bitcoin mining states: *(Understand)*
A. All Bitcoin mining wastes energy
B. Miners can monetize otherwise-wasted electricity (flare gas, off-peak hydro, curtailed wind) — the most-relocatable industrial load
C. Bitcoin mining is illegal
D. Miners only use coal

---

### Q14. The 100-block coinbase maturity rule means: *(Apply)*
A. The first 100 blocks were free
B. A miner cannot spend their block reward until 100 blocks have been mined on top — protects against reorganization-driven reward reversal
C. The supply cap is 100
D. Coinbase signatures need 100 confirmations

---

### Q15. The 80-byte block header has its hash compared against: *(Apply)*
A. A SHA-1 digest
B. The target encoded in the "bits" field
C. The previous block's Merkle root
D. The total transaction fee

---

### Q16. The maximum hashrate change from a single difficulty adjustment is: *(Apply)*
A. Always +1%
B. ±4× (so difficulty cannot rise above 4× or fall below 1/4 in a single adjustment)
C. Set by miners' vote
D. ±50%

---

### Q17. The 2024 halving block (840,000) was notable because: *(Evaluate)*
A. It was the first halving
B. Inscription/Runes-driven fees made it one of the highest-revenue blocks in Bitcoin history (~$2.7M from fees alone)
C. It changed the SHA-256 algorithm
D. It halved the block size

---

### Q18. The PRIMARY academic source for Bitcoin energy estimates is: *(Remember)*
A. The Bitcoin Mining Council
B. Cambridge CCAF
C. Greenpeace
D. The SEC

---

### Q19. ERCOT (Texas) treats large Bitcoin miners as: *(Apply)*
A. Banned
B. Controllable Load Resources (CLR) — interruptible demand response that stabilizes the grid
C. Tax-exempt
D. Subsidized

---

### Q20. After all halvings end (~2140), miners will be incentivized SOLELY by: *(Apply)*
A. Government subsidies
B. Transaction fees
C. Schnorr signatures
D. The 21M cap

---

### Q21. A simple thought-experiment: at $0.04/kWh electricity and a 17 J/TH ASIC, the energy cost to mine one block at the current 86T difficulty is approximately: *(Analyze)*
A. $5
B. ~$50-60K
C. $5M
D. $500M

---

### Q22. The 2024-2026 reframing of Bitcoin mining in mainstream financial press has shifted toward: *(Evaluate)*
A. "Pure waste"
B. "Industrial flexible load + demand response + stranded-energy buyer"
C. "Illegal"
D. "Replacement for nuclear power"

---

### Q23. Bitmain (China) + MicroBT (China) + Canaan (China) together account for what fraction of new ASIC supply? *(Remember)*
A. <10%
B. ~30%
C. **>80%**
D. <1%

---

### Q24. A board member argues: "After the next halving in 2028 cuts subsidy to 1.5625 BTC, mining will collapse." Strongest reasoned reply: *(Evaluate)*
A. Agree — there's nothing miners can do
B. Mining economics depend on subsidy + fees + price + efficiency improvements; historical halvings have seen industry consolidation, not collapse; the 2028 halving will be the 5th — the first 4 produced industry strengthening, not collapse
C. Agree — Bitcoin won't survive 2028
D. Disagree — there will be a new halving in 2024

---

## 🎯 Answers + Explanations

### Q1: **C. 210,000 blocks (~4 years)**
The fundamental cadence. Block subsidy halves every 210,000 blocks at ~10 min/block.

### Q2: **D. 3.125 BTC**
April 20, 2024. From 6.25 → 3.125. Next halving (~2028) will go to 1.5625.

### Q3: **C. ±4× per adjustment**
Prevents catastrophic difficulty swings. The largest historical drop was -28% (July 2021 after China ban).

### Q4: **B. Brute-force searching for a nonce**
The "math problem" framing is misleading. It's hash-target inequality search.

### Q5: **B. It ended the CPU and GPU mining eras forever**
After 2013, only specialized ASIC silicon was profitable. "One CPU one vote" became "one joule one vote."

### Q6: **B. A ~50% hashrate drop within 60 days, with full recovery by October 2021**
The textbook proof of Bitcoin's anti-fragility to state action. Mining capacity relocated, not destroyed.

### Q7: **C. Double-spend recent transactions and censor specific addresses**
The constraints on a 51% attack — it cannot inflate supply, steal arbitrary coins, or change cryptographic rules.

### Q8: **B. ~120-150 TWh/year**
Approximately 0.5% of global electricity. Comparable to gold mining or clothes dryers (US).

### Q9: **B. United States (~40% of global hashrate)**
Post-China-ban, the US is dominant. Texas, Georgia, New York, and Wyoming are major mining states.

### Q10: **A. Foundry USA + AntPool**
~30% + ~22% = ~52% as of 2025. A documented coordination concentration, though validation is by full nodes.

### Q11: **B. Letting individual miners choose which transactions to include**
Pavel Moravec et al., 2019. Mature by 2024. Addresses the censorship-via-pool concern.

### Q12: **C. ~14-17 J/TH**
Bitmain S21 Pro, MicroBT M66S, etc. Improvements of ~30% per generation are typical.

### Q13: **B. Miners can monetize otherwise-wasted electricity**
The 2024 reframing. Flare gas → mining is the canonical example.

### Q14: **B. A miner cannot spend their block reward until 100 blocks have been mined on top**
Consensus rule. Protects against reorganizations reversing reward issuance.

### Q15: **B. The target encoded in the "bits" field**
The 4-byte compact-format target. Hash must be ≤ target for the block to be valid.

### Q16: **B. ±4×**
Same answer as Q3. CBP repeats this concept.

### Q17: **B. Inscription/Runes-driven fees made it one of the highest-revenue blocks**
The Runes protocol launched at the halving block. Fees were ~40 BTC (~$2.7M) on top of the 3.125 subsidy.

### Q18: **B. Cambridge CCAF**
Cambridge Centre for Alternative Finance. The most-cited academic source.

### Q19: **B. Controllable Load Resources (CLR) — interruptible demand response**
ERCOT formalized this around 2022. Miners can be curtailed in seconds when grid needs it.

### Q20: **B. Transaction fees**
After ~2140, all subsidy is exhausted. The protocol bet is that fees will scale with usage.

### Q21: **B. ~$50-60K**
D × 2^32 hashes × 14×10^-12 J × 1/3.6×10^6 (J → kWh) × $0.04. Order of magnitude check.

### Q22: **B. "Industrial flexible load + demand response + stranded-energy buyer"**
The reframing that has accelerated since the 2024 ETF approval and ERCOT's CLR formalization.

### Q23: **C. >80%**
Manufacturing-side concentration. Operator-side is more diverse (US, Russia, etc.).

### Q24: **B. Mining economics depend on subsidy + fees + price + efficiency improvements**
The pattern across all four prior halvings has been consolidation, not collapse. The 2024 halving is the strongest empirical evidence.

---

## 📊 Score Yourself

- 22-24/24 → 🏆 Move to Module 6.
- 18-21/24 → ✅ Solid.
- 14-17/24 → ⚠️ Re-read the halving + difficulty + 51%-attack sections.
- <14/24 → 🔁 Re-read entire Reading.md.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6](../Module-06-Bitcoin-Script-Programmability/Reading.md)
