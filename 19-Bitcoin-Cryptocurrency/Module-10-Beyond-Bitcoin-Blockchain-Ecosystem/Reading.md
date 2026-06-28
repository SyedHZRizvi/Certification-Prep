# Module 10: Beyond Bitcoin, The Broader Blockchain Ecosystem 🌐

> **Why this module matters:** A Bitcoin-only course that pretends Ethereum, stablecoins, rollups, and DeFi don't exist would graduate a candidate who cannot read the trade press, cannot understand the 2022 crypto credit crisis, and cannot explain why a regulator distinguishes UST from USDC. This module is the survey course, the rest of the ecosystem, taught honestly with a Bitcoiner's skepticism. You'll leave able to articulate **why Ethereum exists** (Turing-complete contracts), **what EIP-1559 and the Merge changed**, **what a rollup actually does**, the **three flavors of stablecoin** and their failure modes, the **four DeFi primitives that mattered**, and a sober assessment of where this ecosystem produced signal versus where it produced spectacular bonfires.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 3 (Bitcoin Network & Consensus)](../Module-03-Bitcoin-Network-Consensus/Reading.md), PoW, longest-chain, miner incentives
> - [Module 6 (Bitcoin Script & Programmability)](../Module-06-Bitcoin-Script-Programmability/Reading.md), what Bitcoin Script can and can't do
> - [Module 9 (Trading, Custody & Institutional Adoption)](../Module-09-Trading-Custody-Institutional/Reading.md), exchanges, custody, market structure

---

## ☕ A Story: $40 Billion in 72 Hours

It is **Monday, May 9, 2022**, around 2:00 AM Eastern. The price of **TerraUSD (UST)** a "stablecoin" pegged to $1, with a $18 billion market capitalization touches **$0.985** on Curve Finance. A 1.5% deviation, barely a story by traditional standards.

By Tuesday, UST is at **$0.60**. By Wednesday, **$0.30**. The companion token **LUNA**, which had traded above **$80** the prior week, falls to **$0.0001**, twelve zeros, then a one. Forty billion dollars in combined market capitalization evaporates in less than 72 hours. By the end of May 2022, the Terra ecosystem is rubble.

The story doesn't end with Terra. By June 2022, **Three Arrows Capital** a $10 billion crypto hedge fund deeply exposed to LUNA files for liquidation. Through Three Arrows' borrowing relationships, contagion spreads to **Celsius Network** (frozen withdrawals June 12; bankruptcy July 13), **Voyager Digital** (bankruptcy July 5), and **BlockFi** (bankruptcy November 28). And by **November 11, 2022**, the largest crypto-native catastrophe of all **FTX** files for Chapter 11. Sam Bankman-Fried, who six months earlier was being photographed with U.S. senators, is convicted of fraud in November 2023 and sentenced to 25 years in March 2024.

Trace it back: Terra collapse → 3AC collapse → lender collapse → FTX collapse. A near-extinction-level event for the industry, set off by an "algorithmic stablecoin" that was when you read the design carefully never stable.

Now compare: throughout the same 18-month window, **USDC** (Circle's fiat-backed stablecoin) and **USDT** (Tether) each held within ~50 basis points of $1 in normal conditions and recovered within hours from every brief depeg. **DAI** (MakerDAO's crypto-collateralized stablecoin) wobbled but held. The mechanism mattered: collateralized stablecoins survived because the collateral was real. Algorithmic stablecoins like UST collapsed because the "collateral" was reflexive faith in a paired token's price.

This module is the rest of the blockchain ecosystem, taught with that lesson burned in. **Ethereum and its descendants have produced real technological innovation** (smart contracts, rollups, account abstraction, MEV markets). **They've also produced extraordinary mismanagement and outright fraud.** The mature practitioner can distinguish the two. The CBP exam tests on whether you can.

---

## 🧠 Why Ethereum Exists, Turing-Complete Contracts

Bitcoin's Script (Module 6) is **deliberately bounded**, no loops, no recursion, bounded execution. The trade-off is expressiveness: Bitcoin can't natively support an on-chain order book, a lending market, or a complex multi-party state machine.

In **November 2013**, a 19-year-old programmer named **Vitalik Buterin** published a white paper titled "**Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform**." His thesis: every blockchain so far had a special-purpose language; Ethereum would have a general-purpose, **Turing-complete** language so developers could build any application on a shared, decentralized state machine. The Ethereum mainnet launched **July 30, 2015**.

| Property | Bitcoin Script | Ethereum (EVM) |
|----------|---------------|----------------|
| **Execution model** | Stack-based, postfix | Stack-based with persistent storage |
| **Turing-complete** | No (by design) | Yes |
| **State** | UTXO model (transient) | Account model (persistent) |
| **Loops** | None | Yes (bounded by gas) |
| **Native asset** | BTC (21M cap) | ETH (no hard cap, deflationary post-EIP-1559) |
| **Block time** | ~10 min | ~12 sec (post-Merge) |
| **Consensus** | Proof-of-Work | Proof-of-Stake (post-Sep 2022) |

🎯 **MEMORIZE THIS.** The single most consequential design choice separating Bitcoin from Ethereum: **UTXO model vs account model**. Bitcoin's UTXOs are pure functional state every transaction destroys old UTXOs and creates new ones. Ethereum's accounts are mutable they have balances, nonces, code, and storage that update over time. The account model enables smart contracts; the UTXO model is harder to break.

### The Gas Mechanism

To prevent infinite loops from halting the network, every Ethereum operation costs **gas**. The sender specifies a gas limit and a gas price; if execution runs out of gas, the transaction reverts (but the sender still pays the consumed gas, that's the DoS-prevention mechanism).

Pre-2021, Ethereum used a first-price auction for gas: the highest bidder won block inclusion. This produced volatile, unpredictable fees (sometimes pennies, sometimes $200 to swap a token during NFT mania).

### EIP-1559 (August 2021), The Burn Mechanism

**Ethereum Improvement Proposal 1559** (authored by Buterin, Eric Conner, Ian Norden, and Micah Zoltu, 2019; activated August 5, 2021 in the "London" hard fork) restructured gas pricing:

- Every block has a **base fee** that adjusts up/down (±12.5% per block max) based on whether the previous block was over or under the 15M-gas target.
- The base fee is **burned**, destroyed permanently, removing ETH from supply.
- Users add an optional **priority fee** ("tip") that goes to the validator.

**Result:** since EIP-1559, ETH is sometimes **net-deflationary**, when network activity is high enough that ETH burned via base fees exceeds new ETH issued to validators. The supply curve depends on usage, unlike Bitcoin's monotonic schedule.

🎯 **Exam tip.** EIP-1559 is the most-cited Ethereum economic change. Three things to remember: **base fee is burned, priority fee tips the validator, network can be net-deflationary.**

### The Merge (September 15, 2022), Proof-of-Stake

For its first 7 years, Ethereum ran on Proof-of-Work, just like Bitcoin. On **September 15, 2022**, after years of research and the launch of the **Beacon Chain** (December 2020), Ethereum executed "**The Merge**", switching consensus from PoW to **Proof-of-Stake (PoS)** in a single coordinated hard fork.

| Aspect | Pre-Merge (PoW) | Post-Merge (PoS) |
|--------|-----------------|-------------------|
| **Block production** | Miners with ASICs | Validators staking ≥32 ETH |
| **Energy** | ~75 TWh/yr | ~0.01 TWh/yr (~99.95% drop) |
| **Finality** | Probabilistic (6 confirmations ≈ 1h) | Economic finality after 2 epochs (~12-13 min) |
| **Issuance** | ~13,000 ETH/day | ~1,700 ETH/day (~87% drop) |
| **51% attack cost** | Buy enough hash | Buy ≥1/3 of staked ETH (currently >$30B at stake) |

**The Merge was technically flawless**, no chain split, no major downtime. As of 2026, ~30M ETH (~25% of supply) is staked across the validator set.

🎯 **Exam tip.** Three Ethereum-history pillars to memorize: **Mainnet launch July 30, 2015 → EIP-1559 August 5, 2021 → The Merge September 15, 2022.**

🚨 **Trap on the exam:** "Bitcoin should switch to PoS to save energy", exam materials and most Bitcoiners argue Bitcoin's PoW security is non-negotiable and that PoS introduces different trade-offs (capital concentration, weakened-subjectivity, slashing complexity). Don't conflate Ethereum's choice with a recommendation for Bitcoin.

---

## 🧱 Layer-2 Rollups, The Scaling Pattern

Ethereum mainnet (L1) can process **~15-30 transactions per second** post-Merge. That's nowhere near the throughput required for a global financial layer. The answer the Ethereum ecosystem converged on (after years of detours through state channels, plasma, and sharding) is **rollups**.

A **rollup** executes transactions off-chain (on an L2), then posts a **compressed batch + proof** back to L1. Users get L1-anchored security with L2 throughput.

### Two flavors

| Type | Proof mechanism | Withdrawal delay | Examples |
|------|----------------|-------------------|----------|
| **Optimistic rollup** | Assume valid; allow fraud proofs during a 7-day challenge window | ~7 days to L1 | Arbitrum, Optimism, Base |
| **ZK rollup** | Submit a zero-knowledge validity proof with every batch | Minutes to hours | zkSync Era, Starknet, Polygon zkEVM, Linea, Scroll |

🎯 **MEMORIZE THIS.** **Optimistic** = trust but fraud-prove (cheap, slow withdrawals). **ZK** = mathematically prove validity (more expensive computation, fast withdrawals). Both inherit L1 security; both compress data via blobs (post-EIP-4844 / Dencun, March 2024).

### The major rollups (2026)

| Rollup | Launched | Type | Notable |
|--------|----------|------|---------|
| **Arbitrum One** | Aug 2021 | Optimistic (Nitro) | Offchain Labs; largest by TVL |
| **Optimism / OP Mainnet** | Dec 2021 | Optimistic (Bedrock) | OP Stack open-source; Coinbase's Base built on it |
| **Base** | Aug 2023 | Optimistic (OP Stack) | Coinbase-built; large consumer-app L2 |
| **zkSync Era** | Mar 2023 | ZK | Matter Labs; zkEVM |
| **Starknet** | Nov 2021 | ZK (Cairo VM (Virtual Machine)) | StarkWare; uses STARK proofs (no trusted setup) |
| **Polygon zkEVM** | Mar 2023 | ZK | Polygon Labs |
| **Linea** | Jul 2023 | ZK | ConsenSys (MetaMask owner) |
| **Scroll** | Oct 2023 | ZK | Open-source zkEVM |

### EIP-4844 (Proto-Danksharding / "Blobs"), March 2024

Pre-Dencun, rollups posted batch data as Ethereum **calldata**, which was expensive and competed with regular transactions for block space. **EIP-4844** ("Proto-Danksharding," activated March 13, 2024 in the Dencun upgrade) introduced **blob-carrying transactions**: short-lived (≤18 days) data buckets that L2s can post into for ~10x lower cost than calldata.

🎯 **Exam tip.** EIP-4844 / Dencun (March 2024) is the most significant rollup-economics change since rollups themselves. L2 fees dropped from ~$0.10-1.00 per swap to ~$0.01-0.05. The exam expects you to know "blobs reduced L2 fees ~90%."

---

## 💵 Stablecoins, The $200B Category

A **stablecoin** is a crypto asset designed to track an external reference price, usually $1. Total stablecoin market capitalization in 2026 is roughly **$200 billion**, dominated by two issuers.

### The three flavors (and one extinct flavor)

| Type | Backing | Examples | Failure mode |
|------|---------|----------|--------------|
| **Fiat-backed** | Cash + Treasury bills held by issuer | **USDC** (Circle), **USDT** (Tether), **PYUSD** (PayPal), **USDP** (Paxos) | Issuer insolvency; banking outage; reserves shortfall |
| **Crypto-collateralized** | Overcollateralized basket of crypto in smart contracts | **DAI** (MakerDAO) | Collateral price crash triggering liquidation cascades |
| **Algorithmic** | Reflexive paired token + arbitrage incentives, no hard collateral | **UST** (Terra) RIP | Bank run; once peg breaks, paired token enters death spiral |
| **Commodity-backed** (niche) | Physical gold / silver | **PAXG**, **XAUT** | Custody of physical |

🎯 **MEMORIZE THIS.** The 2022 lesson: **fiat-backed survived; algorithmic did not.** The mechanism difference is the difference between life and death in a crisis.

### USDC vs USDT, the dominant duo

| | USDC | USDT |
|---|------|------|
| **Issuer** | Circle (US-regulated, MTL in NY) | Tether Holdings (Hong Kong / BVI; less regulated) |
| **Reserves** | Monthly attestation by Deloitte; ~80% T-bills, ~20% cash | Quarterly attestation by BDO; mix of T-bills, gold, commercial paper, BTC |
| **Market cap (2026)** | ~$50B | ~$130B |
| **Major use** | DeFi, regulated venues | Trading pairs on offshore venues, emerging markets |
| **Major depeg event** | March 11, 2023, $3.3B SVB exposure caused brief depeg to $0.88; recovered in 48h | Multiple historical concerns; never collapsed |

🎯 **Exam tip.** **March 2023 SVB crisis.** Silicon Valley Bank held $3.3B of Circle's reserves. When SVB failed (March 10, 2023), USDC briefly depegged to $0.88 over the weekend. Once Circle confirmed federal coverage of SVB deposits (Sunday evening), USDC restored peg within hours. This is the textbook example of fiat-backed stablecoin **counterparty risk** without total collapse, the kind of stress test algorithmic stablecoins fail.

### DAI, the crypto-collateralized version

**DAI** is issued by **MakerDAO** (Rune Christensen, white paper 2014; launched 2017). Users lock ETH (or other approved collateral) in a smart contract called a **Vault** (formerly **CDP (Customer Data Platform)**, Collateralized Debt Position), at a minimum **collateralization ratio** (typically 150-170%). They receive newly-minted DAI as a loan against that collateral. If the collateral value drops below the threshold, the system auto-liquidates the collateral to repay the DAI debt + a penalty.

🎯 **Exam tip.** DAI's mechanism survived multiple ETH crashes including March 2020's "Black Thursday" (ETH fell 50% in 24 hours). The system stressed but held. Compare with UST: same nominal stability claim, completely different mechanism, completely different outcome.

---

## 💼 Case Study, Terra/Luna Collapse (May 2022)

**Situation.** **Terraform Labs**, founded by **Do Kwon** in 2018, built a blockchain ecosystem centered on the **TerraUSD (UST)** algorithmic stablecoin and its paired token **LUNA**. The mechanism: 1 UST could always be redeemed for $1 worth of LUNA, regardless of LUNA's market price. Arbitrageurs were supposed to keep UST near $1 by burning LUNA when UST traded above $1 and minting LUNA when UST traded below.

By early 2022, **UST had $18 billion in circulation** and **LUNA's market cap was ~$30 billion**. The growth engine was the **Anchor Protocol**, a Terra-native lending platform paying **~20% APY** on UST deposits. By April 2022, Anchor held ~$14B of UST. Economists and Bitcoiners (notably **Lyn Alden**, **Jim Bianco**, and the *Crypto Critics' Corner* podcast) warned for two years that the Anchor yield was being subsidized from reserves, not generated organically.

**Decision.** Do Kwon doubled down repeatedly:

- Mocked critics on Twitter (the "Master of Stables" persona)
- Bought $3.5B of Bitcoin in early 2022 via the **Luna Foundation Guard (LFG)** as a defensive reserve
- Issued LUNA aggressively to keep Anchor's yields subsidized

The vulnerability: in a stress event, mass UST redemptions would mint massive LUNA, crashing LUNA's price, which made each subsequent UST redemption mint exponentially more LUNA. Classic death spiral.

**Outcome.** The trigger remains debated (a large coordinated selling on Curve and Binance starting May 7, 2022; theories include a soft-attack by a hedge fund). The collapse mechanics:

- **May 9, 2022:** UST depegs to $0.985
- **May 10:** UST at $0.60; LUNA falling fast
- **May 11:** UST at $0.30; LUNA below $1
- **May 12:** LUNA at $0.0001 (twelve zeros)
- **May 13:** Terra blockchain halted to prevent governance attacks; chain forked into "Terra 2.0" (LUNA) and "Terra Classic" (LUNC)

**Damage cascade:**
- ~$40B+ in combined UST + LUNA market cap destroyed
- LFG's $3.5B BTC reserve liquidated trying to defend the peg
- **Three Arrows Capital** $10B crypto hedge fund collapsed (filed for liquidation June 2022)
- **Celsius Network** froze withdrawals June 12, 2022; bankruptcy July 13
- **Voyager Digital** bankruptcy July 5
- **BlockFi** bankruptcy November 28
- ~$1 trillion total crypto market cap destroyed in May-July 2022

**Subsequent legal:**
- Do Kwon arrested in Montenegro, March 2023, on forged-passport charges
- Extradited to U.S., late 2024
- Civil and criminal fraud proceedings ongoing in 2026
- Terraform Labs settled with the SEC for $4.5 billion (June 2024)

**Lesson for the exam / for practitioners.** Four principles:

1. **Algorithmic stablecoins without robust collateral cannot survive bank runs.** The mechanism is reflexive: redemptions mint paired token, which crashes paired token, which makes redemptions mint more, etc. There is no exogenous anchor to break the spiral. Many had warned (Tarun Chitra, Hasu, Lyn Alden, Vitalik Buterin himself). The market ignored them until it couldn't.
2. **Reflexivity in crypto is not a feature, it's an attack vector.** The "death spiral" geometry exists in any system where the protective mechanism scales nonlinearly with stress. CBP candidates should be able to identify reflexive systems and call out their fragility before the storm.
3. **Stablecoin "type" is load-bearing terminology.** "Stablecoin" is not a monolith. **Fiat-backed (USDC, USDT) are bank-deposit-equivalent; crypto-collateralized (DAI) are auto-liquidation-protected; algorithmic (UST) were faith-based.** A regulator who treats them identically is making a category error.
4. **Contagion in crypto credit is real and rapid.** The 2022 cascade Terra → 3AC → Celsius/Voyager/BlockFi → FTX completed in ~7 months. Counterparty risk is the dominant systemic risk in this ecosystem. The 2024 spot ETF infrastructure (Module 9) is partly a response: getting institutional flow into bank-grade custodians and away from this credit web.

**Discussion (Socratic).**
- Q1: Would proper regulation have prevented Terra? Specifically: what regulatory action between 2020 and 2022 would have plausibly stopped UST from reaching $18B in circulation? Construct the strongest case AND the strongest counter-case.
- Q2: USDC briefly depegged to $0.88 during the SVB crisis. UST depegged to $0.30 and never recovered. From a regulator's standpoint, what's the right policy response, treat USDC like a bank deposit (FDIC-style insurance), or let the market price the counterparty risk?
- Q3: A defender of Terra argues that the mechanism would have worked at smaller scale; it was the $18B Anchor scale that made the death spiral inevitable. Is this a defense of the algorithmic stablecoin concept, or an admission that the concept fundamentally breaks under stress?

---

## 🏗️ DeFi Primitives, The Four That Mattered

Decentralized Finance (DeFi) is the financial-services stack built on EVM smart contracts. Most of it never produced product-market fit, but four primitives have endured at meaningful scale.

### 1. DEX / AMMs, Uniswap

**Uniswap V1** launched November 2018 (Hayden Adams). V2 (May 2020) added arbitrary token pairs. **V3** (May 2021) introduced **concentrated liquidity**, LPs specify a price range over which to provide liquidity, dramatically improving capital efficiency. V4 (2024) added "hooks" for customized pool behavior.

Mechanism (V2): the constant product `x · y = k`. (See Module 9.)

🎯 **Exam tip.** Uniswap V3's concentrated liquidity is the most important DEX-mechanism evolution. Capital efficiency for stable pairs improved ~4,000x vs V2. Adams's V3 whitepaper (Adams, Zinsmeister, Salem, Robinson, Keefer, 2021) is the canonical reference.

### 2. Lending, Aave, Compound

**Compound** (Leshner & Hayes, 2018) and **Aave** (Stani Kulechov, 2017 as ETHLend; rebranded Aave 2020) created **pooled, overcollateralized lending**. Users deposit asset A; borrowers deposit collateral B (at 110-200% LTV (Lifetime Value)) and borrow A. Interest rates are algorithmic, set by utilization ratio.

🎯 **Exam tip.** Aave introduced **flash loans** (uncollateralized loans that must be repaid in the same transaction), a primitive with no analog in TradFi. Used legitimately for arbitrage and collateral migration; also weaponized in dozens of exploits.

### 3. Liquid Staking, Lido

After the Merge, Ethereum required 32 ETH per validator. **Liquid staking** lets users stake any amount and receive a tradeable derivative (stETH) representing their share. **Lido Finance** dominates the space with ~30% of all staked ETH (~$25B in 2026).

🚨 **Trap on the exam:** Lido is itself a centralization risk for Ethereum PoS. If Lido's node operators acted collectively, they could meaningfully influence Ethereum consensus. This is the most-debated centralization concern in PoS Ethereum.

### 4. Bridges, and Why They've Been Catastrophic

A **cross-chain bridge** lets assets move between blockchains. Mechanically, the asset is locked on chain A and a wrapped version is minted on chain B.

Bridges have been the **single largest source of crypto losses**: Ronin Bridge ($625M, March 2022), Wormhole ($325M, Feb 2022), Nomad ($190M, Aug 2022), Poly Network ($611M, Aug 2021, recovered), Harmony Horizon ($100M, June 2022), Multichain (~$130M, July 2023). Total bridge losses approach $3B as of 2026.

🎯 **MEMORIZE THIS.** **Bridges are the weakest link in cross-chain crypto.** Single-validator-set bridges (most pre-2024) have been repeatedly exploited. Modern designs use ZK proofs or natively-secured messaging (e.g., **IBC** in Cosmos, **CCIP** by Chainlink, **LayerZero** with security stacks), but bridge security remains the open problem.

---

## 🖼️ NFTs, Functional vs Speculative

**Non-Fungible Tokens** are unique tokens representing ownership of arbitrary digital (or digital-pointing-to-physical) assets. The standard is **ERC-721** (Entriken, Shirley, Evans, Sachs, 2018).

**The functional cases (signal):**
- Domain names (ENS, Ethereum Name Service)
- DAO governance (membership tokens)
- Gaming items (in-game assets)
- Real-world asset (RWA) tokenization (early)
- On-chain certificates / credentials

**The speculative cases (mostly noise, 2021-2022):**
- Profile-picture (PFP) collections, CryptoPunks, Bored Ape Yacht Club, Azuki, etc.
- Generative art at retail scale
- Most "utility" claims that turned out to be roadmap fiction

🎯 **Exam tip.** The PFP NFT bubble peaked in spring 2022 and largely collapsed through 2023. The functional NFT use cases (ENS, governance, in-game) survived. CBP candidates should be able to distinguish "NFT as ownership primitive" from "NFT as speculative collectible", the underlying tech is identical, the use case is very different.

### Bitcoin Ordinals, the cross-over

**Ordinals / Inscriptions** (Casey Rodarmor, January 2023; covered in Module 6) brought NFT-style data inscription to Bitcoin via the Taproot script-path quirk. This produced both meaningful collections and a fee market, and a community fight over whether Bitcoin should be used this way. As of 2026, Ordinals fees periodically dominate Bitcoin's fee market on busy days.

---

## 🏛️ DAOs, Decentralized Autonomous Organizations

A **DAO** is an entity whose governance and treasury are managed by smart contracts and token-holder voting. The concept dates to **The DAO** (2016), a $150M Ethereum-based investment vehicle that was famously hacked, causing the **Ethereum/Ethereum Classic hard fork** in July 2016.

Modern DAOs (Uniswap DAO, ENS DAO, Maker DAO, Optimism Collective) govern significant treasuries ($100M to $1B+) through token-weighted voting on **Snapshot** (off-chain signaling) or **Compound Governor** style on-chain voting.

**Real DAO problems in 2026:**
- **Voter apathy**, most DAOs see <10% of token-holders vote
- **Delegate concentration**, voting power concentrates into a small set of delegates
- **Legal ambiguity**, DAOs are not recognized as legal entities in most jurisdictions; Wyoming's DAO LLC law (2021) is a notable exception
- **Capture risk**, wealthy participants can buy governance influence

🎯 **Exam tip.** The most successful DAO is arguably **MakerDAO** (now Sky), which manages $5B+ of DAI collateral via on-chain governance. It is also the DAO with the most contentious internal politics.

---

## 🔗 Modular Blockchain Thesis, Celestia, EigenLayer

The "**modular blockchain**" thesis argues that monolithic chains (Bitcoin, original Ethereum) bundle three functions **execution**, **settlement**, **data availability**, **consensus** into one stack, while modular designs separate them.

| Layer | Function | Examples (2026) |
|-------|----------|-----------------|
| **Execution** | Run smart contracts; produce blocks | Rollups (Arbitrum, Optimism, Base) |
| **Settlement** | Verify proofs; arbitrate disputes | Ethereum L1 (for most rollups) |
| **Data availability (DA)** | Store the data that allows reconstruction | Ethereum (via blobs), **Celestia** (launched Oct 2023), EigenDA, Avail |
| **Consensus** | Order transactions; finalize state | Ethereum PoS, Celestia consensus, etc. |

**EigenLayer** (Sreeram Kannan, 2023) introduced **restaking**, letting ETH stakers opt into providing security for additional services (oracles, bridges, DA layers) while keeping their underlying ETH stake. As of 2026, EigenLayer secures ~$10B in restaked ETH across dozens of "Actively Validated Services" (AVSs). The promise: bootstrap new security; the risk: cascading slashing if an AVS misbehaves.

🎯 **Exam tip.** The "**monolithic vs modular**" framing is the dominant 2024-26 ecosystem debate. Bitcoin maximalists (Pierre Rochard, Lyn Alden) argue monolithic security is superior. Ethereum researchers argue modular composition unlocks scale. The CBP exam tests on understanding both positions.

---

## 🌉 Interoperability, IBC, LayerZero, Chainlink CCIP

If there will be many chains, the inter-chain messaging layer matters. Three main approaches:

| Protocol | Origin | Approach |
|----------|--------|----------|
| **IBC (Inter-Blockchain Communication)** | Cosmos / Tendermint, launched March 2021 | Light-client-based; trustless between IBC-enabled chains |
| **LayerZero** | LayerZero Labs, 2022 | Configurable security stacks; multiple validators (DVNs) |
| **Chainlink CCIP** | Chainlink Labs, 2023 | Oracle-network-secured messaging |
| **Axelar** | 2022 | Authenticated, validated cross-chain GMP |

🎯 **Exam tip.** **IBC** is the gold standard within the Cosmos / Tendermint ecosystem because it's trust-minimized. The hard problem is connecting **non-Cosmos** chains (Ethereum, Bitcoin) where light-client verification is expensive or impossible. That's the niche LayerZero and CCIP target.

---

## 🚨 Common Misconceptions To Unlearn

| Misconception | Reality |
|---|---|
| "All stablecoins are equivalent" | Fiat-backed, crypto-collateralized, and algorithmic are entirely different mechanisms with different failure modes. UST proved this in the worst possible way. |
| "Ethereum is the same as Bitcoin but Turing-complete" | They have fundamentally different state models (UTXO vs account), consensus (PoW vs PoS as of 2022), and design philosophies. They're not "Bitcoin++", they're different systems. |
| "Rollups are just sidechains" | Rollups inherit L1 security via fraud or validity proofs; sidechains have their own (typically weaker) security. The distinction matters legally and economically. |
| "The Merge made Ethereum centralized" | It changed the validator profile (anyone with 32 ETH can stake; pools like Lido aggregate). Centralization concerns are real but different from PoW mining concentration. |
| "DeFi has no counterparty risk" | DeFi replaces counterparty risk with smart-contract risk and oracle risk. The Curve, Aave, and Compound exploits are a separate-but-significant tail. |
| "Bridges are safe" | Bridges have been the single largest source of crypto losses (~$3B). Modern designs are improving; legacy designs are not safe. |
| "NFTs are dead" | The PFP speculative use case mostly collapsed in 2022-23. Functional use cases (ENS, governance, in-game) endure. |
| "DAOs are democratic" | Token-weighted DAOs are plutocratic. They have governance properties but they're not "democracy on a blockchain." |
| "EigenLayer is risk-free yield" | Restaking adds new slashing surfaces. Cascading failures are an open question. |

---

## ⚠️ Exam Traps to Watch For

1. **Ethereum mainnet July 30, 2015; EIP-1559 August 5, 2021; Merge September 15, 2022.**
2. **EIP-1559: base fee burned, priority fee tips validator, ETH can be net-deflationary.**
3. **Optimistic = fraud-prove; ZK = validity-prove.** Both inherit L1 security.
4. **EIP-4844 / Dencun (March 13, 2024)** introduced blobs; L2 fees fell ~90%.
5. **Three stablecoin flavors: fiat-backed, crypto-collateralized, algorithmic.** UST was algorithmic and failed.
6. **DAI** is crypto-collateralized via **MakerDAO Vaults** (formerly CDPs); minimum collateralization 150-170%.
7. **USDC March 2023 depeg** = SVB exposure, ~48h recovery. Lesson: counterparty risk, not collapse.
8. **Bridges = highest-loss attack surface in crypto** (~$3B aggregate).
9. **Lido's ~30% stake share** is the largest Ethereum-centralization concern post-Merge.
10. **Modular thesis = execution + settlement + DA + consensus as separate layers.** Celestia is the DA poster child.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **EVM** | Ethereum Virtual Machine; Turing-complete smart-contract environment |
| **Gas** | Fee unit for EVM execution; gasLimit × gasPrice |
| **EIP-1559** | Aug 2021 fee-burn mechanism (base fee burned + priority fee) |
| **The Merge** | Sept 15, 2022, Ethereum moved from PoW to PoS |
| **Beacon Chain** | Pre-Merge PoS consensus chain that merged with mainnet |
| **Validator** | PoS block producer; stakes ≥32 ETH |
| **Rollup** | L2 that compresses transactions + proofs back to L1 |
| **Optimistic rollup** | Assumes valid; fraud-provable in 7-day window |
| **ZK rollup** | Submits validity proof per batch |
| **EIP-4844 / Dencun (Mar 2024)** | Blob-carrying transactions reduced rollup data costs ~10x |
| **Stablecoin** | Crypto asset tracking a reference price |
| **USDC / USDT / DAI / UST** | Major stablecoins; fiat-backed, fiat-backed, crypto-collateralized, algorithmic (extinct) |
| **MakerDAO Vault / CDP** | DAI minting mechanism |
| **Uniswap** | The dominant DEX; AMM with `x·y=k` (V2), concentrated liquidity (V3) |
| **Aave / Compound** | Major DeFi lending protocols; over-collateralized |
| **Flash loan** | Uncollateralized loan repaid in one transaction |
| **Lido / stETH** | Liquid-staking protocol; tradeable staking derivative |
| **Bridge** | Cross-chain asset transfer; largest crypto attack surface |
| **NFT / ERC-721** | Non-fungible token standard (2018) |
| **DAO** | Decentralized Autonomous Organization; token-governed |
| **The DAO (2016)** | Original DAO; hacked → Ethereum/Classic split |
| **Celestia** | Modular DA layer (Oct 2023) |
| **EigenLayer** | Restaking protocol (2023) |
| **IBC / LayerZero / CCIP** | Cross-chain messaging protocols |

---

## ✅ Module 10 Summary

You now know:

- 🧠 Why Ethereum exists, Turing-complete contracts on a shared state machine
- 🔄 The UTXO vs account model, the deepest design difference from Bitcoin
- ⛽ EIP-1559, base fee burned; ETH can be net-deflationary
- 🎯 The Merge (Sept 15, 2022), PoW to PoS in one coordinated hard fork
- 🧱 Rollups, Optimistic vs ZK; both inherit L1 security
- 🫧 EIP-4844 / Dencun (March 2024), blobs reduced L2 fees ~90%
- 💵 Three stablecoin flavors, fiat-backed, crypto-collateralized, algorithmic
- 💼 The Terra/Luna collapse and 2022 contagion
- 🏗️ DeFi primitives, Uniswap, Aave/Compound, Lido, bridges
- 🖼️ NFTs, functional vs speculative cases
- 🏛️ DAOs, promise, capture risk, MakerDAO as the durable case
- 🔗 Modular thesis, Celestia, EigenLayer, the 2024-26 debate
- 🌉 Interoperability, IBC, LayerZero, CCIP

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to the [Capstone Project](../Capstone-Project.md) and [Recommended Readings](../Recommended-Readings.md)

---

> **Where this leads.**
> - Inside this course: This is the final reading module. The [Capstone Project](../Capstone-Project.md) requires integrating Modules 1-10, including Bitcoin's design choices, the institutional custody stack from Module 9, and the broader ecosystem covered here. The [Recommended Readings](../Recommended-Readings.md) appendix is your gateway to deeper study.
> - Cross-course: `07-AWS (Amazon Web Services)-AI-Practitioner` and `08-Azure-AI-Engineer` overlap on the data-layer questions modular blockchains raise (Celestia is to blockchain DA roughly what S3 (Simple Storage Service) is to cloud DA). `09-CompTIA-Security-Plus` overlaps on smart-contract attack surfaces.
> - Practice: Practice Exam 2 has 5-7 questions on Ethereum, rollups, stablecoins. Final Mock has scenario questions integrating Bitcoin and the broader ecosystem.

---

## 💬 Discussion, Socratic prompts

1. **Bitcoin vs Ethereum design philosophy.** Bitcoin's minimalism (UTXO, bounded Script, PoW, no built-in governance) and Ethereum's expressiveness (account model, Turing-complete EVM, PoS, on-chain governance via EIPs) reflect opposite design philosophies. For a 30-year time horizon, which design is more likely to be running mission-critical infrastructure? Defend both positions; identify which assumptions each one is making.
2. **Algorithmic stablecoins, extinct or revivable?** Terra failed; UST is the textbook example. But some argue that more conservative algorithmic designs (e.g., partially-collateralized hybrids like FRAX) remain viable. Steelman the argument that algorithmic stablecoins can work at smaller scale or with better mechanism design. Steelman the argument that they're structurally doomed. Which is correct in 2026?
3. **Rollup centralization.** Most major rollups (Arbitrum, Optimism, Base, zkSync) have a single sequencer that orders transactions. This is operationally efficient but centralizes a critical function. Is sequencer decentralization (currently a roadmap goal across all major rollups) actually necessary, or is L1-anchored fraud-proof sufficient security? Argue both sides.
4. **The Lido concentration problem.** Lido holds ~30% of staked ETH. If it crossed 33%, it could halt chain finality; at 50%, it could reorg. Should the Ethereum community impose protocol-level limits on any single staking pool's share? Construct the strongest argument for AND against intervention. What does this say about "decentralization" as a value?
5. **Bitcoin or Ethereum first?** A new graduate asking which ecosystem to start their career in. From a long-term skill-investment and career-resilience perspective, what's the right answer in 2026? Construct the strongest case for each. Where would you bet?

---

## 📚 Further Reading

- 📖 **Antonopoulos & Wood, *Mastering Ethereum*** (O'Reilly, 2018). The canonical Ethereum textbook.
- 📰 **Buterin, *Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform*** (white paper, 2013) at ethereum.org/whitepaper.
- 📰 **Buterin et al., EIP-1559: Fee market change for ETH 1.0 chain** (April 2019) at github.com/ethereum/EIPs.
- 📰 **The Merge, Ethereum.org official page** (September 15, 2022 activation).
- 📰 **EIP-4844 / Proto-Danksharding** at github.com/ethereum/EIPs.
- 📰 **Adams, Zinsmeister, Salem, Robinson, Keefer, Uniswap V3 Core White Paper** (2021).
- 📰 **MakerDAO White Paper** (Christensen et al., 2017) at makerdao.com.
- 📰 **Circle USDC Reserve Attestation Reports** (monthly, Deloitte).
- 📰 **Tether Reserve Attestation Reports** (quarterly, BDO).
- 📰 **Nansen, Terra Luna On-Chain Forensics** (May 27, 2022).
- 📰 **Chainalysis *Crypto Crime Report 2022 and 2024*** bridge exploits and Terra contagion.
- 📰 **FTX Bankruptcy Filings**, In re FTX Trading Ltd., Case No. 22-11068 (Bankr. D. Del., November 2022); first-day declaration by John J. Ray III.
- 📰 **Celestia White Paper** (Al-Bassam, Sonnino, 2019) at celestia.org.
- 📰 **EigenLayer White Paper** (Kannan et al., 2023) at eigenlayer.xyz.
- 🎓 **MIT 15.S12, Lectures 12-15** (Ethereum and beyond).
- 🎓 **Stanford CS251, Lectures 7-12** (Smart contracts, DeFi, stablecoins).
- 📰 **Bankless podcast / The Defiant** best ongoing ecosystem journalism (read with skepticism they are participants).
- 📰 **Lyn Alden, Broken Money** (2023). The macro lens on monetary networks (Bitcoin-favorable, but rigorous on the broader space).
