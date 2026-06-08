# ✏️ Module 10 Quiz: Beyond Bitcoin, Broader Blockchain Ecosystem

> 26 questions. Closed book. Aim for 22/26.

---

## Questions

### Q1. Ethereum's mainnet launched in: *(Remember)*
A. January 3, 2009
B. July 30, 2015
C. November 14, 2021
D. September 15, 2022

---

### Q2. The Ethereum white paper was authored by: *(Understand)*
A. Satoshi Nakamoto
B. Vitalik Buterin (2013)
C. Hal Finney
D. Gavin Andresen

---

### Q3. The deepest design difference between Bitcoin and Ethereum is: *(Analyze)*
A. Different hashing algorithms
B. Bitcoin's UTXO model vs Ethereum's account-based state model
C. Different block times
D. Different programming languages used by node software

---

### Q4. EIP-1559 (London hard fork, August 2021) introduced: *(Apply)*
A. Proof-of-Stake
B. A base fee that is burned + a priority fee that tips validators (formerly miners)
C. Smart contracts
D. NFTs

---

### Q5. "The Merge" was activated on: *(Remember)*
A. April 2024
B. August 5, 2021
C. September 15, 2022
D. November 14, 2021

---

### Q6. After The Merge, Ethereum's energy consumption dropped by approximately: *(Understand)*
A. 5%
B. 50%
C. 99.95%
D. 0%, no change

---

### Q7. A validator on Ethereum PoS must stake at least: *(Remember)*
A. 1 ETH
B. 10 ETH
C. 32 ETH
D. 1,000 ETH

---

### Q8. An OPTIMISTIC rollup works by: *(Apply)*
A. Posting a zero-knowledge validity proof with every batch
B. Assuming all submitted batches are valid; allowing fraud proofs during a ~7-day challenge window
C. Mining new blocks
D. Reverting transactions

---

### Q9. A ZK rollup works by: *(Apply)*
A. Assuming validity; allowing 7-day fraud-proof window
B. Submitting a cryptographic validity proof (ZK-SNARK / ZK-STARK) with each batch, mathematically proving correctness
C. Using only Bitcoin Script
D. Skipping the L1 entirely

---

### Q10. EIP-4844 (Dencun upgrade, March 2024) introduced: *(Apply)*
A. Proof-of-Stake
B. Blob-carrying transactions, temporary (~18-day) data buckets that reduce rollup data-posting costs ~10x
C. Account abstraction
D. NFTs

---

### Q11. The three flavors of stablecoin are: *(Apply)*
A. Hot, warm, cold
B. Fiat-backed (USDC, USDT), crypto-collateralized (DAI), and algorithmic (UST, extinct)
C. Layer-1, Layer-2, Layer-3
D. Public, private, hybrid

---

### Q12. The Terra/Luna collapse (May 2022) was triggered by: *(Analyze)*
A. A bug in Ethereum
B. A reflexive death spiral in the UST-LUNA algorithmic stablecoin mechanism, UST redemptions minted LUNA, crashing LUNA's price, which made every subsequent redemption mint exponentially more LUNA
C. The SEC banning UST
D. A 51% attack

---

### Q13. Combined Terra/Luna market cap destroyed in the May 2022 collapse was approximately: *(Understand)*
A. $40 million
B. $400 million
C. $4 billion
D. $40 billion+

---

### Q14. USDC briefly depegged to about $0.88 in March 2023 because: *(Apply)*
A. UST collapsed
B. ~$3.3B of Circle's reserves were held at Silicon Valley Bank, which failed on March 10, 2023; the depeg lasted ~48 hours and recovered once federal coverage of SVB deposits was confirmed
C. The Ethereum Merge
D. The SEC banned USDC

---

### Q15. DAI is collateralized via: *(Apply)*
A. Federal Reserve dollars
B. MakerDAO Vaults (formerly CDPs), overcollateralized positions of ETH and other approved crypto assets, typically at 150-170% minimum collateralization ratios
C. Gold
D. UST

---

### Q16. The constant-product AMM formula used by Uniswap V2 is: *(Understand)*
A. `x + y = k`
B. `x · y = k`
C. `x² + y² = k`
D. `x / y = k`

---

### Q17. The most important Uniswap V3 innovation (May 2021) was: *(Apply)*
A. Adding Bitcoin support
B. Concentrated liquidity, LPs specify a price range for their liquidity, dramatically improving capital efficiency
C. Removing the AMM
D. Adding NFTs

---

### Q18. Aave's distinguishing primitive (vs traditional lending) is: *(Apply)*
A. Higher interest rates
B. Flash loans, uncollateralized loans that must be repaid in the same transaction
C. Centralized custody
D. Government bonds

---

### Q19. Lido is the dominant ETH liquid-staking protocol with roughly: *(Analyze)*
A. 0.5% of staked ETH
B. 5% of staked ETH
C. ~30% of staked ETH, making it the largest single Ethereum-centralization concern post-Merge
D. 99% of staked ETH

---

### Q20. Cross-chain bridges have lost approximately: *(Remember)*
A. $30 million (negligible)
B. $300 million
C. ~$3 billion cumulatively, the single largest source of crypto losses
D. $300 trillion

---

### Q21. The original DAO hack (June 2016) led to: *(Apply)*
A. The Ethereum mainnet shutdown
B. A controversial hard fork that split the chain into Ethereum (ETH, with hack reversed) and Ethereum Classic (ETC, "code is law")
C. The launch of Bitcoin Cash
D. The Merge

---

### Q22. Celestia (launched October 2023) is best described as: *(Apply)*
A. An execution-layer L1 competitor to Ethereum
B. A modular data-availability layer, separating DA from execution/settlement/consensus to enable cheaper rollups
C. A wallet
D. A stablecoin

---

### Q23. EigenLayer's restaking concept involves: *(Analyze)*
A. Buying more ETH
B. Letting ETH stakers opt into providing security for additional services (oracles, bridges, DA layers, etc.) while keeping their underlying ETH stake, bootstrapping new security, with cascading-slashing risk
C. Skipping PoS entirely
D. Bridging to Bitcoin

---

### Q24. From a regulator's standpoint, the proper category-distinction between USDC and UST is: *(Evaluate)*
A. They're identical and should be regulated as one category
B. USDC is a fiat-backed cash-equivalent with bank counterparty risk; UST was an algorithmic instrument with reflexive death-spiral risk. Treating them identically is a category error
C. Both should be banned outright
D. USDC is more dangerous than UST was

---

### Q25. A defender of decentralized exchanges (DEXs) argues that DeFi has "no counterparty risk." The correct, sharper rebuttal is: *(Evaluate)*
A. DeFi has higher counterparty risk than CEXs
B. DeFi replaces traditional counterparty risk with smart-contract risk, oracle manipulation risk, and admin-key (governance) risk. The risks are different in kind, not absent
C. DEXs are slower
D. DEXs don't exist

---

### Q26. You're a CTO advising a fintech on adding stablecoin payments to a corporate treasury product. The treasurer wants the highest stability + lowest counterparty exposure. The best primary choice (2026) is: *(Create)*
A. UST
B. USDC, with awareness of (and operational mitigation for) issuer-banking counterparty risk; possibly diversified with USDT or DAI; periodic confirmation of reserves attestations
C. Algorithmic Frax v1
D. A custom-built algorithmic stablecoin

---

## 🎯 Answers + Explanations

### Q1: **B. July 30, 2015**
The genesis block. Bitcoin genesis = Jan 3 2009; the two networks are 6.5 years apart in age.

### Q2: **B. Vitalik Buterin (2013)**
Published November 2013 as the "Next-Generation Smart Contract" white paper, when Buterin was 19. Other co-founders (Gavin Wood, Joseph Lubin, Charles Hoskinson, Anthony Di Iorio, etc.) joined in 2014.

### Q3: **B. UTXO vs account-based state model**
Bitcoin's UTXOs are pure functional state; Ethereum's accounts are mutable with balance, nonce, code, storage. This is the deepest design fork between the two networks.

### Q4: **B. Base fee burned + priority fee tips validators**
EIP-1559 by Buterin, Conner, Norden, Zoltu (2019). Activated August 5, 2021 in the London hard fork. Combined with The Merge, ETH can be net-deflationary during high-activity periods.

### Q5: **C. September 15, 2022**
The Beacon Chain (launched December 2020) merged with the execution layer. Technically flawless single-event hard fork.

### Q6: **C. ~99.95%**
PoW required ~75 TWh/yr; PoS requires ~0.01 TWh/yr. Validators run consumer-grade hardware.

### Q7: **C. 32 ETH**
For a solo validator. Liquid staking pools (Lido, Rocket Pool, Coinbase) let smaller depositors participate.

### Q8: **B. Assume valid; allow fraud proofs in a 7-day challenge window**
Arbitrum, Optimism, Base all use this design. Withdrawals to L1 take ~7 days; bridges/aggregators offer faster withdrawals at a fee.

### Q9: **B. Submit a cryptographic validity proof with each batch**
zkSync Era, Starknet, Polygon zkEVM, Linea, Scroll. Higher proving cost; faster withdrawals (no challenge window needed).

### Q10: **B. Blob-carrying transactions**
EIP-4844 / "Proto-Danksharding" activated March 13, 2024. Blob storage is ephemeral (~18 days), separated from regular calldata, ~10x cheaper. L2 user fees fell ~90% as a result.

### Q11: **B. Fiat-backed, crypto-collateralized, algorithmic**
Each with distinct mechanisms and failure modes. UST proved the algorithmic flavor's fragility.

### Q12: **B. A reflexive death spiral**
Mass UST redemptions → minted LUNA → LUNA price crashed → each subsequent redemption minted exponentially more LUNA. Classic geometry of a death spiral.

### Q13: **D. $40 billion+**
$18B UST + $30B+ LUNA combined market cap, evaporated in 72 hours (May 9-12, 2022). Cascading damage took out 3AC, Celsius, Voyager, BlockFi, and ultimately FTX.

### Q14: **B. $3.3B Circle reserves at Silicon Valley Bank**
SVB failed March 10, 2023. USDC depegged Friday/Saturday; once Treasury/FDIC announced full deposit coverage Sunday evening, USDC restored peg within hours. Lesson: counterparty risk without total collapse.

### Q15: **B. MakerDAO Vaults (formerly CDPs); overcollateralized ETH + other crypto**
Christensen et al. (MakerDAO white paper, 2017). The system survived multiple ETH crashes including March 2020's Black Thursday.

### Q16: **B. `x · y = k`**
The constant-product invariant. Uniswap V1/V2; Bancor formalized earlier (Bancor white paper, 2017). Curve uses a hybrid formula for stable pairs.

### Q17: **B. Concentrated liquidity**
Adams et al., Uniswap V3 white paper (2021). Capital efficiency for stable pairs improved ~4,000x vs V2 in best cases.

### Q18: **B. Flash loans**
Aave introduced flash loans in 2020. Used legitimately for arbitrage and collateral migration; also weaponized in dozens of DeFi exploits.

### Q19: **C. ~30%**
Lido has the largest single share of staked ETH. Discussions about whether this exceeds prudent decentralization thresholds (1/3 chain-halt; 1/2 reorg) are ongoing.

### Q20: **C. ~$3 billion cumulatively**
Ronin ($625M), Wormhole ($325M), Nomad ($190M), Poly Network ($611M but recovered), Harmony Horizon ($100M), Multichain (~$130M), plus smaller incidents. Largest single-category loss in crypto history.

### Q21: **B. Ethereum (with hack reversed) vs Ethereum Classic ("code is law")**
The DAO held ~14% of all ETH at the time. The community split: the majority forked to recover; the "code is law" minority kept the original chain as ETC.

### Q22: **B. A modular data-availability layer**
Al-Bassam, Sonnino (2019 white paper). Separating DA from execution/settlement enables much cheaper rollup data posting. EigenDA, Avail are competitors.

### Q23: **B. ETH stakers provide security to additional services while keeping their stake**
Kannan et al. (2023). Promise: bootstrap new security cheaply. Open risk: cascading slashing across multiple AVSs.

### Q24: **B. Fiat-backed cash-equivalent counterparty risk vs algorithmic reflexive death-spiral risk**
The mechanisms are different in kind. Regulation should reflect that. Lumping them together (or treating both as "stablecoins" without distinction) misleads market participants and regulators.

### Q25: **B. DeFi replaces traditional counterparty risk with smart-contract risk, oracle risk, governance risk**
The risk shape changes, doesn't disappear. The Curve, Aave, Compound, and bridge exploits make this concrete.

### Q26: **B. USDC primary, with awareness of issuer-banking counterparty risk + possible diversification + monitoring**
The honest answer for a treasury professional in 2026. Mainstream regulated fiat-backed plus operational mitigation. Single-issuer concentration is the residual risk.

---

## 📊 Score Yourself

- 24-26/26 → 🏆 You're ready for the Capstone Project.
- 20-23/26 → ✅ Solid grasp of the broader ecosystem.
- 16-19/26 → ⚠️ Re-read stablecoin + rollup sections.
- <16/26 → 🔁 Re-read entire Reading.md.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Capstone Project](../Capstone-Project.md), then [Recommended Readings](../Recommended-Readings.md)
