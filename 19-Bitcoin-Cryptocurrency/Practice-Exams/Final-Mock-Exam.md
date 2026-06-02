# Final Mock Exam — Bitcoin & Cryptocurrency (CBP-style)

> **Conditions:** 75 questions · 75 minutes · Closed book. Treat this as the REAL exam.
> **Pass mark:** 56/75 (~75%). The real Certified Bitcoin Professional (CBP) passes at ~70%.
> Take this 2-3 days before your booked exam. Aim for **63+ correct**.
>
> Questions 71-75 are scenario-heavy multi-factor decision questions — the kind that distinguish a passing candidate from a top-quartile candidate.

---

## 📝 Questions

### 1. The Bitcoin white paper's abstract describes Bitcoin as:

A. "A purely peer-to-peer version of electronic cash"
B. "A decentralized world computer"
C. "A digital gold replacement for fiat reserves"
D. "A smart-contract platform"

---

### 2. The Genesis block embedded which message in its coinbase field?

A. "Hello, World!"
B. "Vires in Numeris"
C. "In math we trust"
D. "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

---

### 3. The mathematical security of secp256k1 rests on the difficulty of:

A. The Elliptic Curve Discrete Logarithm Problem (ECDLP)
B. Factoring large prime products
C. Solving NP-complete problems in polynomial time
D. Breaking RSA-2048

---

### 4. The probability that two correctly-generated 256-bit private keys collide is approximately:

A. 1 in 2^16
B. 1 in 2^256, comparable to a single random atom in the universe
C. 1 in 2^128
D. 1 in 2^512

---

### 5. The construction `RIPEMD-160(SHA-256(x))` is informally called:

A. SHA256d
B. HASH160
C. HMAC-160
D. SHA-RIPE

---

### 6. A Merkle tree allows a light client (SPV) to verify a single transaction's inclusion in a block with:

A. The full block download
B. A signature from the miner
C. A signed attestation from a federation
D. O(log N) hashes (a Merkle path/proof)

---

### 7. The 80-byte Bitcoin block header is composed of which fields?

A. Version + Merkle root + Coinbase + Difficulty + Timestamp
B. Previous hash + Transactions + Nonce
C. Version + Previous hash + Merkle root + Timestamp + Bits + Nonce
D. Block height + Merkle root + Signatures + Nonce

---

### 8. A transaction's TxID is computed by:

A. Double-SHA-256 of the serialized transaction (legacy: full tx; SegWit: tx excluding witness, "wtxid" is double-SHA-256 of the full tx with witness)
B. HMAC-SHA-512 of the inputs alone
C. RIPEMD-160 of the version field
D. A miner-signed hash

---

### 9. SegWit's witness discount changes how block "weight" is computed:

A. Witness bytes count 4× toward the limit
B. Witness bytes are stored off-chain
C. Witness bytes are encrypted
D. Witness bytes count 1× toward weight, non-witness bytes count 4×, with a 4,000,000-weight-unit block limit

---

### 10. Bitcoin's transaction fee is determined by:

A. Sender-chosen fee in satoshis per virtual byte (sat/vB), with miners selecting highest-fee-rate txs first
B. A fixed protocol-level rate
C. A bank-issued processing fee
D. A government tax

---

### 11. A user broadcasts a transaction with a very low fee during a mempool congestion event. The MOST likely outcome:

A. The transaction is rejected as invalid
B. The transaction remains in mempool until congestion clears, fees rise, or the tx is dropped after ~14 days
C. The transaction is included immediately at no cost
D. The Bitcoin Foundation increases the fee automatically

---

### 12. Bitcoin's "10-minute average block time" is maintained by:

A. A central clock server
B. A vote among mining pools
C. Bitcoin Core's wall clock
D. Difficulty adjustment every 2,016 blocks based on actual vs expected (1,209,600 sec) elapsed time

---

### 13. A *soft fork* in Bitcoin is:

A. A backward-compatible tightening of consensus rules — old nodes still accept the new blocks
B. A breaking change that splits the chain irreversibly
C. A community fork of the source code
D. A short fork of the chain that gets resolved naturally

---

### 14. A *hard fork* is:

A. Backward-compatible
B. A consensus-rule change that introduces blocks/transactions invalid under old rules — old nodes reject them, requiring a network-wide upgrade
C. The same as a soft fork
D. A change to the wallet UI

---

### 15. The Bitcoin Cash split (August 2017) was an example of:

A. A soft fork
B. A bug
C. A rebranding
D. A hard fork driven by block-size disagreement (BCH increased block size to 8 MB)

---

### 16. Taproot was activated in November 2021 via:

A. A hard fork that split the network
B. A vote of Bitcoin Core developers
C. A soft fork activated by miner signaling (BIP-9 "Speedy Trial") at block 709,632
D. A government mandate

---

### 17. Taproot's BIP-341 (Wuille, Nick, Towns) introduces:

A. Schnorr signatures only
B. Taproot script-path + key-path spending with MAST + Schnorr
C. A new wallet UI
D. An EVM equivalent

---

### 18. A Bitcoin "address" is BEST understood as:

A. A cryptocurrency bank account number
B. A username
C. A literal account stored on the chain
D. An encoding of a HASH160 or X-only public key (Taproot) with a checksum, into a string

---

### 19. The Bech32 encoding (BIP-173, Wuille; 2017) was designed to:

A. Replace SHA-256
B. Provide error-detection-friendly, case-insensitive addresses for SegWit and Taproot
C. Compress the chain
D. Encrypt addresses

---

### 20. A wallet's "extended public key" (xpub) lets a third party:

A. Spend all funds
B. View and derive every public child address but NOT spend (no private key)
C. Change the master seed
D. Recover the seed phrase

---

### 21. A BIP-44 derivation path like `m/44'/0'/0'/0/5` refers to:

A. Account 5 in coin 44
B. A random key
C. The Genesis block's address
D. Purpose 44 (BIP-44), Coin 0 (Bitcoin), Account 0, External chain, Index 5

---

### 22. The "apostrophe" in `m/44'` indicates:

A. A regular (public-derivable) child
B. A signature
C. A typo
D. A *hardened* derivation that requires the private key parent (xpub alone cannot derive hardened children)

---

### 23. An attacker who acquires only the xpub of a hardened derivation path can:

A. Spend funds
B. Derive only non-hardened public children at lower levels; cannot reverse to ancestors or derive hardened siblings
C. Recover the seed
D. Sign transactions

---

### 24. A "seedless" or *MPC* signing arrangement provides which property that classical multi-sig does NOT?

A. On-chain footprint identical to single-sig (no multi-sig script visible)
B. Censorship resistance
C. 21M supply cap
D. Lower fees always

---

### 25. The MOST important reason institutional custodians prefer geographic key separation (e.g., NYC + Zurich + Singapore) is:

A. Latency
B. Resilience to jurisdictional events (subpoena, natural disaster, civil unrest) and operational compromise
C. Tax optimization
D. Marketing

---

### 26. A 2-of-3 multi-sig with one key offline (cold), one online (warm), and one with a recovery agent provides:

A. Permanent inaccessibility
B. Daily liquidity via warm+cold spend, with recovery-agent fallback if cold is lost
C. Single-sig convenience
D. Zero security

---

### 27. *Stratum* (Slush Pool, Marek Palatinus, 2012) is:

A. A new consensus algorithm
B. A mining pool protocol enabling many miners to coordinate on the same job
C. A wallet format
D. An exchange protocol

---

### 28. A miner that submits a *valid block solution to the pool* but where the block hash does NOT meet network difficulty is called:

A. An invalid block
B. A coinbase
C. A nonce
D. A "share" — proof of work below pool difficulty but above network difficulty, used to allocate pool rewards

---

### 29. The MOST efficient ASIC in 2026 operates at approximately:

A. 100 J/TH
B. 15-20 J/TH (e.g., Bitmain S21 series)
C. 1000 J/TH
D. 1 J/TH

---

### 30. Mining "difficulty" of 86 trillion (2026 approx) means the network target is set such that finding a valid block requires roughly:

A. 86 trillion attempts
B. ~86T × 2^32 hashes on average per block
C. 86 minutes
D. 86 TH/s of hashrate

---

### 31. The 2024 Bitcoin halving (April 19, 2024, block 840,000) had which IMMEDIATE economic effect on miners?

A. No change
B. Doubled their revenue
C. Halted mining for 24 hours
D. Daily new BTC issuance fell from ~900 to ~450, halving subsidy revenue and pressuring inefficient ASICs offline

---

### 32. The *energy debate* around Bitcoin (popularized 2021-22) is BEST framed by:

A. Bitcoin consumes X TWh/year (~0.4% of global electricity, 2024 estimates), the question is whether the security and monetary properties produced are worth that energy expenditure
B. Bitcoin is solar-only
C. Bitcoin uses no energy
D. Bitcoin uses more energy than all of humanity

---

### 33. *Stranded energy* mining refers to:

A. Miners stranded at sea
B. Mining that strands the chain
C. Mining done with no internet
D. Mining operations that monetize otherwise-wasted energy (flared natural gas, curtailed wind/solar, off-peak hydro) — turning negative-value energy into positive revenue

---

### 34. The MAJOR script types currently in use on Bitcoin (2026) are:

A. P2PK + Coinbase only
B. P2PKH, P2SH, P2WPKH, P2WSH, P2TR
C. ERC-20, ERC-721
D. NFT, ICO, DAO

---

### 35. Multi-signature was originally enabled on Bitcoin via:

A. P2SH (BIP-16, Andresen, 2012) — wrapping a multi-sig redeem script in a script hash
B. Taproot only
C. Lightning channels
D. The Genesis block

---

### 36. A *time-locked* transaction using `OP_CHECKLOCKTIMEVERIFY` (CLTV, BIP-65) enables:

A. Reversing transactions
B. Preventing a UTXO from being spent until a specified block height or Unix timestamp
C. Faster confirmation
D. Free transactions

---

### 37. *OP_CHECKSEQUENCEVERIFY* (CSV, BIP-112) enforces:

A. An absolute timelock
B. A coinbase rule
C. A multi-sig rule
D. A *relative* timelock — UTXO can't be spent until N blocks after its inclusion

---

### 38. A Lightning channel's *commitment transaction* is:

A. A broadcast on-chain tx
B. A consensus rule
C. A signed-but-unbroadcast tx representing the current channel balance, exchanged off-chain after each payment
D. A wallet backup file

---

### 39. *Watchtowers* in Lightning Network exist to:

A. Mine Lightning blocks
B. Monitor the chain on behalf of offline channel parties and broadcast a *justice transaction* if a counterparty publishes a revoked (cheating) state
C. Provide KYC
D. Charge tolls

---

### 40. A Lightning *invoice* (BOLT-11) encodes:

A. Bank account information
B. A payment hash, amount, expiry, route hints, and a Schnorr or ECDSA signature
C. Tax information
D. Government license

---

### 41. *Sphinx* packet routing in Lightning provides:

A. Recipient anonymity but sender anonymity is exposed
B. No privacy
C. Public route advertising
D. Onion-routing-style privacy: each hop only knows the previous and next hops, not the full route

---

### 42. The PRIMARY scaling limitation of Lightning is:

A. CPU
B. On-chain channel-open/close cost and inbound liquidity acquisition (channels need inbound capacity to receive payments)
C. Bandwidth
D. RAM

---

### 43. The FATF Travel Rule applies to:

A. Self-custody-to-self-custody transfers
B. All Bitcoin transactions
C. VASP-to-VASP transfers exceeding the jurisdictional threshold (commonly USD/EUR 1,000)
D. Mining transactions

---

### 44. In the United States, the OCC's 2020 interpretive letter authorized national banks to:

A. Mine Bitcoin
B. Custody crypto-assets and provide certain crypto-banking services to clients
C. Issue their own stablecoins without regulation
D. Trade futures only

---

### 45. The IRS Form 1040 (since 2020) asks taxpayers:

A. A digital-asset question requiring "Yes/No" disclosure of any 2024 digital-asset activity (receiving, selling, exchanging, etc.)
B. Nothing about crypto
C. Only about foreign currency
D. About mining only

---

### 46. The PRIMARY US tax distinction between holding BTC < 1 year vs ≥ 1 year is:

A. None
B. Short-term gains (held <1 yr) are taxed at ordinary income rates; long-term gains (held ≥1 yr) get preferential capital-gains rates
C. Long-term holdings owe more tax
D. Holdings over 1 year are tax-exempt

---

### 47. MiCA's *Title III* (asset-referenced tokens) and *Title IV* (e-money tokens) primarily regulate:

A. Bitcoin specifically
B. Mining
C. Stablecoins — both asset-backed (ARTs) and e-money tokens (EMTs)
D. Exchange UI design

---

### 48. The SEC's January 2024 spot Bitcoin ETF approvals were preceded by a federal appellate ruling in:

A. *Howey v. SEC* (1946)
B. *Ripple v. SEC* (2023)
C. *Grayscale v. SEC* (D.C. Circuit, Aug 2023) — vacated the SEC's denial of GBTC's spot conversion
D. *SEC v. Coinbase* (2024)

---

### 49. The MOST significant operational risk for a *qualified custodian* offering Bitcoin custody is:

A. Network congestion
B. Insider-threat key compromise + sophisticated phishing of operational staff; both Coinbase and BitGo publish incident response postures explicitly for these threats
C. Bitcoin's 21M cap
D. Block time variance

---

### 50. *Proof of Liabilities* (the second half of full proof-of-solvency) typically uses:

A. A simple total
B. Bank statements
C. A Merkle tree of individual customer balances, with users able to verify their inclusion and the total
D. A government license

---

### 51. The 2022 collapse of FTX is BEST explained as:

A. A 51% attack
B. A Bitcoin protocol bug
C. Commingling of customer funds with the affiliated trading firm (Alameda Research) — a custody and accounting failure, prosecuted as fraud (Bankman-Fried sentenced 2024)
D. A regulatory raid

---

### 52. *Self-custody* offers which property that custodial does NOT?

A. Insurance
B. Tax benefits
C. Direct cryptographic control over funds — no third-party action (regulator, court, custodian failure) can confiscate without compromising the user's keys
D. Speed

---

### 53. The MOST common single mistake among new self-custody users (Chainalysis, 2024 study) is:

A. Using a hardware wallet
B. Storing a seed phrase as a screenshot in cloud-synced photos, exposing to any cloud account compromise
C. Buying a Ledger
D. Using multi-sig

---

### 54. A *steel backup* (Cryptosteel, Billfodl, Coldcard tiles) for a seed phrase protects against:

A. Cryptographic attacks
B. Quantum computers
C. Fire, flood, and physical degradation of paper backups
D. Network attacks

---

### 55. *Shamir's Secret Sharing* (SSSS, BIP-39 alternative for hardware wallets) splits a seed into:

A. Public keys only
B. Encrypted files
C. N shares such that any M-of-N can reconstruct the original secret, but fewer than M reveal nothing
D. Cloud backups

---

### 56. An exchange forces a user to re-authenticate via SMS after a "new device" login. This MFA channel is:

A. Quantum-resistant
B. Phishable and SIM-swap vulnerable — recommended only as a fallback, never as the primary factor for high-value accounts
C. Inherently secure
D. Not authentication

---

### 57. The *deanonymization risk* of Bitcoin is:

A. Zero — Bitcoin is fully anonymous
B. Only government attackers can deanonymize
C. The chain is pseudonymous; chain analysis (Chainalysis, Elliptic, TRM) can link addresses to identities via exchange KYC, address reuse, common-input heuristics, and timing analysis
D. Requires a court order

---

### 58. Address reuse is discouraged because:

A. It violates Bitcoin Core's rules
B. Reused addresses can't receive
C. Linking multiple payments to one address reveals balance history and weakens privacy + (legacy P2PK exposed) cryptographic risk
D. Reused addresses cost more fees

---

### 59. A *CoinJoin* (Maxwell, 2013; Whirlpool, Wasabi, JoinMarket implementations) is:

A. A consensus-rule change
B. A privacy technique where multiple users combine their tx inputs into a single transaction with multiple equal-value outputs, breaking the common-input heuristic
C. A stablecoin
D. A mining pool

---

### 60. Ethereum's transition from PoW to PoS ("The Merge," September 15, 2022) reduced its energy consumption by approximately:

A. 10%
B. 50%
C. ~99.95%
D. Increased it

---

### 61. *Stablecoins* are BEST characterized as:

A. Bitcoin equivalents
B. Crypto-assets pegged to a reference price (USD, EUR, gold) via reserves (USDC, USDT) or algorithm (DAI; UST-failed)
C. NFTs
D. Mining pools

---

### 62. *Wrapped Bitcoin* (WBTC, tBTC, etc.) on Ethereum is:

A. Native Bitcoin
B. A new Bitcoin
C. An ERC-20 token claimed to be backed 1:1 by BTC held in custody (WBTC: BitGo custody) or via decentralized custody (tBTC: threshold signatures)
D. Lightning Network

---

### 63. The *DAO hack* (Ethereum, June 2016) was resolved via:

A. A Bitcoin upgrade
B. A police seizure
C. A controversial hard fork that rolled back the DAO theft, creating Ethereum (ETH) and Ethereum Classic (ETC)
D. A bug fix

---

### 64. *Zero-knowledge proofs* (ZKPs) are used in modern blockchains for:

A. Mining
B. Proving knowledge of a value (e.g., transaction validity) without revealing the value itself — zk-SNARKs (Zcash) and zk-Rollups (Ethereum L2s like zkSync)
C. Wallet generation
D. Hashing

---

### 65. A *quantum computer* large enough to break secp256k1 ECDSA would:

A. Have no impact on Bitcoin
B. Steal all addresses instantly with no defense
C. Improve Bitcoin
D. Threaten addresses where the public key has been revealed (i.e., spent-from addresses); fresh, unspent P2PKH addresses are partially protected by the HASH160 layer until first spend

---

### 66. Bitcoin's MOST significant *upgrade pathway* against future quantum threats is:

A. Wait and hope
B. A future soft fork introducing post-quantum signatures (NIST PQC standards 2024: ML-DSA / Dilithium, Falcon, SPHINCS+) as an optional new script type, with users migrating gradually
C. Replace SHA-256
D. Switch to Ethereum

---

### 67. The MOST relevant *2024-2026 macro event* shaping Bitcoin institutional adoption was:

A. The SEC's spot ETF approvals (Jan 2024), MicroStrategy's continued accumulation, the post-halving cycle (Apr 2024), and FASB's fair-value accounting standard (ASU 2023-08, eff. 2025)
B. The Mt. Gox bankruptcy
C. The DAO hack
D. The Cypherpunk Manifesto

---

### 68. The CCSS Level III (highest tier of CryptoCurrency Security Standard) requires:

A. Single-sig hot wallet only
B. No specific custody architecture
C. Geographically distributed multi-sig, formal key ceremony procedures, regular drills, and independent audit
D. Only KYC compliance

---

### 69. A *Bitcoin developer* contributing to Bitcoin Core does so primarily via:

A. A central authority's approval
B. Open-source GitHub pull requests reviewed by maintainers; consensus changes additionally require broad community discussion and BIP process
C. Voting tokens
D. Hiring as an employee of the Bitcoin Foundation

---

### 70. The BIP (Bitcoin Improvement Proposal) process was modeled after:

A. RFC 2026 (IETF Internet-Draft / RFC process) and Python's PEP process; codified in BIP-1 (Taaki, 2011) and BIP-2 (Aumasson, 2016)
B. Constitutional amendments
C. Bitcoin Foundation bylaws
D. UN resolutions

---

### 71. **(Scenario)** ACME Corp holds 1,200 BTC as a treasury asset. Their CFO wants to: (a) maintain self-custody for sovereignty, (b) require approvals from 3 of 5 executives for spending, (c) handle the case where one executive leaves the company, (d) survive a single facility disaster. The BEST architecture is:

A. Single hot wallet on the CFO's laptop
B. Custodial account at a major exchange
C. 3-of-5 multi-sig with geographically dispersed hardware wallets, documented key-rotation procedure for departures, and tested annual recovery drills (CCSS Level III aligned)
D. 11-of-11 multi-sig

---

### 72. **(Scenario)** A user receives a "Bitcoin double-your-coins" email from "[bitcoin-support@coinbasse.com](mailto:bitcoin-support@coinbasse.com)" (note misspelling) asking for their seed phrase to "verify wallet". The CORRECT response is:

A. Reply with the seed to claim the doubling promotion
B. Recognize this as a phishing attack — never share a seed phrase with anyone, ever, under any circumstance; report and delete
C. Reply with only half the seed
D. Encrypt the seed and reply

---

### 73. **(Scenario)** A regulated US investment adviser wants to gain Bitcoin exposure for $50M in client assets. The MOST appropriate path is:

A. Self-custody on the principal's laptop
B. Spot Bitcoin ETF (IBIT/FBTC) inside client brokerage accounts, OR qualified custodian (Coinbase Custody, Fidelity Digital Assets) for direct exposure — satisfying SEC Custody Rule 206(4)-2
C. Bitcoin futures (CME) only (no spot)
D. Buy from a Telegram OTC broker

---

### 74. **(Scenario)** A miner in West Texas has access to flared natural-gas wells producing curtailed power. To maximize profit while minimizing regulatory and operational risk, they should:

A. Use the cheapest possible illegal grid hookup
B. Mine only at peak grid prices
C. Containerize ASICs and partner with the energy producer to monetize otherwise-flared methane (reducing emissions vs. baseline flaring); contract revenue share; comply with Texas ERCOT interconnection and EPA reporting
D. Mine on residential solar

---

### 75. **(Scenario, multi-factor)** An exchange suffers a hack: 0.5% of customer BTC stolen via hot-wallet compromise. The exchange has a $500M cyber-crime insurance policy, 95% cold storage, a published incident-response playbook, and SOC 2 Type II attestation. The MOST important COMBINATION of facts that determines whether customers will be made whole is:

A. The amount stolen
B. The SOC 2 attestation alone
C. The cold-storage architecture, the insurance policy coverage terms (per-incident limits, exclusions), the exchange's solvency including reserves beyond what was stolen, and the regulatory jurisdiction's customer-protection law
D. The IR playbook alone

---

## 🎯 Answer Key (No Cheating!)

```
1.  A    16. C    31. D    46. B    61. B
2.  D    17. B    32. A    47. C    62. C
3.  A    18. D    33. D    48. C    63. C
4.  B    19. B    34. B    49. B    64. B
5.  B    20. B    35. A    50. C    65. D
6.  D    21. D    36. B    51. C    66. B
7.  C    22. D    37. D    52. C    67. A
8.  A    23. B    38. C    53. B    68. C
9.  D    24. A    39. B    54. C    69. B
10. A    25. B    40. B    55. C    70. A
11. B    26. B    41. D    56. B    71. C
12. D    27. B    42. B    57. C    72. B
13. A    28. D    43. C    58. C    73. B
14. B    29. B    44. B    59. B    74. C
15. D    30. B    45. A    60. C    75. C
```

---

## 🎯 Detailed answer rationales

**Q1. Answer: A**
- **Why A is correct.** Direct quotation of the abstract's first sentence (Nakamoto, 2008).
- **Why others are wrong.** B: Ethereum's tagline. C: Modern thesis, not white-paper language. D: Not Bitcoin's scope.
- **Exam-takeaway.** The abstract's first sentence is the most-quoted Bitcoin sentence in history. Know it verbatim.

**Q2. Answer: D**
- **Why D is correct.** The Genesis coinbase contains this London Times headline, timestamping the block and editorializing on the 2008 financial crisis.
- **Why others are wrong.** A: Common programming meme but not Bitcoin's text. B: "Vires in Numeris" ("Strength in Numbers") is a Bitcoin motto, not in the Genesis block. C: "In math we trust" is a community slogan.
- **Exam-takeaway.** The Genesis message is both a timestamp proof (the headline ties to a specific newspaper edition) and a political statement.

**Q3. Answer: A**
- **Why A is correct.** ECDSA on secp256k1 relies on the hardness of the ECDLP: given G and Q = kG, finding k is computationally infeasible on classical computers.
- **Why others are wrong.** B: That's RSA. C: Bitcoin doesn't rest on P vs NP. D: RSA is different math.
- **Exam-takeaway.** ECDLP for ECDSA/Schnorr; integer factoring for RSA. Bitcoin uses ECDLP.

**Q4. Answer: B**
- **Why B is correct.** 2^256 ≈ 1.16 × 10^77, comparable to a tiny fraction of atoms in the observable universe (~10^80).
- **Why others are wrong.** A, C, D: All severely undercount the keyspace.
- **Exam-takeaway.** Bitcoin's security at the key level is "guess a specific atom in the universe" — practically impossible.

**Q5. Answer: B**
- **Why B is correct.** `HASH160(x) = RIPEMD-160(SHA-256(x))` — the Bitcoin macro for address derivation.
- **Why others are wrong.** A: SHA256d = `SHA256(SHA256(x))`. C: HMAC-160 not a standard. D: Not a real name.
- **Exam-takeaway.** Two hashes, two motives: SHA-256 for cryptographic strength, RIPEMD-160 for shorter output (20 bytes) and defense in depth.

**Q6. Answer: D**
- **Why D is correct.** A Merkle proof gives the sibling hashes along the tree path from leaf to root. O(log N) hashes suffice (Merkle, 1979).
- **Why others are wrong.** A: Defeats the purpose of SPV. B: Miners don't sign individual txs. C: No federation needed.
- **Exam-takeaway.** SPV = Merkle proof + header chain. Defined in white paper §8.

**Q7. Answer: C**
- **Why C is correct.** Header layout (4+32+32+4+4+4=80 bytes): version (4) + previous block hash (32) + Merkle root (32) + timestamp (4) + bits/difficulty (4) + nonce (4).
- **Why others are wrong.** A: Mixed-up field set. B: Missing fields. D: Block height isn't in the header (it's in the coinbase).
- **Exam-takeaway.** 80-byte header is the most-memorized fact on Bitcoin certifications.

**Q8. Answer: A**
- **Why A is correct.** TxID for legacy txs = double-SHA-256 of the full serialized tx. For SegWit, TxID is double-SHA-256 of the tx WITHOUT witness (so malleability is solved); WTxID includes witness.
- **Why others are wrong.** B: Wrong hash and wrong scope. C, D: Made up.
- **Exam-takeaway.** SegWit fixed malleability by computing TxID over a tx-without-witness, leaving witness changeable without breaking the TxID.

**Q9. Answer: D**
- **Why D is correct.** BIP-141: weight = base_size × 4 + witness_size × 1, max 4,000,000 weight units. This is the witness discount enabling effective block size up to ~4 MB.
- **Why others are wrong.** A: Reversed. B, C: Witness is on-chain and unencrypted.
- **Exam-takeaway.** Block weight = 4× non-witness + 1× witness, cap 4M. Effective tx capacity expanded by ~2× vs. legacy 1MB.

**Q10. Answer: A**
- **Why A is correct.** Fee = inputs - outputs. Miners maximize block revenue by including highest fee-rate (sat/vB) txs.
- **Why others are wrong.** B: No fixed rate. C, D: Wrong issuer.
- **Exam-takeaway.** Fee is a market — set by sender, accepted by miners. mempool.space shows real-time fee estimates.

**Q11. Answer: B**
- **Why B is correct.** Low-fee txs sit in mempool. Bitcoin Core's default mempool eviction is ~14 days; the tx is then dropped silently. Senders can RBF or CPFP (child-pays-for-parent) to bump.
- **Why others are wrong.** A: It's valid, just unprofitable. C: No free inclusion. D: No "Bitcoin Foundation" intervention.
- **Exam-takeaway.** Mempool TTL ~14 days. Bumping via RBF or CPFP is the user's recourse.

**Q12. Answer: D**
- **Why D is correct.** Difficulty retarget = `old × (actual_time / 1,209,600 sec)` every 2,016 blocks. Capped at ±4×.
- **Why others are wrong.** A, B, C: No central clock, no vote, no wall-clock dependency.
- **Exam-takeaway.** Bitcoin self-stabilizes via difficulty. The 10-min target is a moving average over 2-week windows.

**Q13. Answer: A**
- **Why A is correct.** Soft fork TIGHTENS rules; old nodes still validate new blocks as valid (they may not understand new features but won't reject).
- **Why others are wrong.** B: Hard fork. C: Code fork. D: Natural fork.
- **Exam-takeaway.** Soft = compatible tightening. Hard = incompatible change. SegWit, P2SH, CSV, Taproot all soft forks.

**Q14. Answer: B**
- **Why B is correct (hard fork).** Hard fork LOOSENS rules or changes consensus; old nodes reject new-rule blocks.
- **Why others are wrong.** A: That's a soft fork. C: Opposite. D: UI is non-consensus.
- **Exam-takeaway.** Hard fork example: BCH 2017 (8MB blocks). Soft fork example: Taproot 2021.

**Q15. Answer: D**
- **Why D is correct.** BCH split at block 478,558 (Aug 1, 2017) by increasing the block size, an incompatible consensus change.
- **Why others are wrong.** A: Hard, not soft. B: Intentional, not a bug. C: Genuine fork, not branding.
- **Exam-takeaway.** Block-size war (2015-17) culminated in BCH hard fork. SegWit (soft) and BCH (hard) are the divergent answers to the same scaling debate.

**Q16. Answer: C**
- **Why C is correct.** Speedy Trial (BIP-9 derivative) achieved supermajority signaling; lock-in at block 709,632 in Nov 2021.
- **Why others are wrong.** A: No split. B: Devs propose, miners signal, nodes enforce. D: No government role.
- **Exam-takeaway.** Soft-fork activation = miner signaling + node enforcement. UASF (User-Activated Soft Fork) is the alternative path (SegWit had a UASF component).

**Q17. Answer: B**
- **Why B is correct (Taproot + MAST + Schnorr).** BIP-341 introduces Taproot (key path + script path with MAST). BIP-340 = Schnorr. BIP-342 = Tapscript.
- **Why others are wrong.** A: BIP-340 alone. C, D: Not BIP-341.
- **Exam-takeaway.** 340 Schnorr → 341 Taproot+MAST → 342 Tapscript. Three BIPs, one upgrade.

**Q18. Answer: D**
- **Why D is correct.** An address encodes a hash of a pubkey (P2PKH, P2WPKH) or an X-only pubkey (Taproot) with a checksum (Base58Check or Bech32/m).
- **Why others are wrong.** A: Bank-account metaphor misleads about UTXOs. B: Not a username. C: Addresses aren't literal accounts stored on-chain; UTXOs reference them.
- **Exam-takeaway.** Address = encoded hash/key. The chain stores UTXOs that reference addresses via their locking scripts.

**Q19. Answer: B**
- **Why B is correct (Bech32 error detection).** BIP-173 Bech32 (and BIP-350 Bech32m for Taproot) use error-detection codes optimized for QR codes and human re-keying.
- **Why others are wrong.** A: SHA-256 stays. C: No compression. D: No encryption.
- **Exam-takeaway.** Bech32 vs Base58Check: Bech32 is case-insensitive, better error detection, more efficient in QR codes.

**Q20. Answer: B**
- **Why B is correct (view + derive, no spending).** xpub allows public-key derivation (BIP-32) for receiving and watching balances. No private keys = no spending capability.
- **Why others are wrong.** A: Cannot spend. C: Cannot change seed. D: Cannot recover seed.
- **Exam-takeaway.** xpub leakage = privacy loss (all addresses linkable). xprv leakage = fund loss.

**Q21. Answer: D**
- **Why D is correct.** BIP-44: `m/purpose'/coin'/account'/change/index`. 44'/0' = Bitcoin under BIP-44, account 0, external chain (change=0), index 5.
- **Why others are wrong.** A: Misreads the path. B, C: Not derivation paths.
- **Exam-takeaway.** `change=0` is external (receive); `change=1` is internal (change-back).

**Q22. Answer: D**
- **Why D is correct.** Apostrophe = hardened (index ≥ 2^31). Hardened derivation requires the parent private key.
- **Why others are wrong.** A, B, C: Wrong semantics.
- **Exam-takeaway.** Hardened protects against xpub-leakage attacks at the hardened-level boundary.

**Q23. Answer: B**
- **Why B is correct (non-hardened-only derivation).** Only non-hardened children of the level whose xpub was leaked. Cannot derive hardened siblings or any ancestors.
- **Why others are wrong.** A: Cannot sign without a private key. C: Cannot recover seed from xpub. D: Cannot sign.
- **Exam-takeaway.** Hardening = defense against partial-xpub leakage. Standard derivation paths put hardening at account boundaries to localize damage.

**Q24. Answer: A**
- **Why A is correct.** MPC produces a single Schnorr/ECDSA signature; on-chain it's indistinguishable from single-sig.
- **Why others are wrong.** B: Both have censorship resistance. C: Supply cap is consensus, not custody-tech. D: Fees often comparable.
- **Exam-takeaway.** MPC vs multi-sig: MPC = privacy + smaller fees. Multi-sig = on-chain auditability + simpler model.

**Q25. Answer: B**
- **Why B is correct.** Geographic separation = resilience to local jurisdictional events (subpoena, civil unrest, disaster) and to insider-threat compromise.
- **Why others are wrong.** A: Latency would argue against separation. C: Tax structure isn't location-key. D: Marketing isn't the point.
- **Exam-takeaway.** CCSS Level III + custody best practice = geographic separation + multi-sig + drills.

**Q26. Answer: B**
- **Why B is correct.** Warm+cold = daily ops; recovery agent = fallback if cold lost. 2-of-3 means any 2 suffice.
- **Why others are wrong.** A: 3 keys, only 2 needed. C: Multi-sig is not single-sig. D: Multi-sig provides defense in depth.
- **Exam-takeaway.** The 2-of-3 pattern is the canonical "personal/family" custody architecture.

**Q27. Answer: B**
- **Why B is correct (Stratum = pool protocol).** Stratum (Slush Pool, 2012) is the de-facto mining-pool protocol — coordinates work assignment, share submission, and reward attribution.
- **Why others are wrong.** A: Pool protocol, not consensus. C: Not a wallet. D: Not an exchange.
- **Exam-takeaway.** Stratum is on the CBSA syllabus more than CBP, but generally appears as "what is the pool protocol called?"

**Q28. Answer: D**
- **Why D is correct.** Shares = block-hash candidates that meet pool difficulty (a fraction of network difficulty) but not network difficulty. Used to allocate pool rewards proportionally to work submitted.
- **Why others are wrong.** A: Shares are valid PoW samples. B: Not coinbase. C: Nonce is just one input.
- **Exam-takeaway.** Pool difficulty << network difficulty. Pool difficulty tunes the share-submission rate per miner.

**Q29. Answer: B**
- **Why B is correct (15-20 J/TH).** Bitmain S21 series and competitors (MicroBT, Canaan) operate around 15-20 J/TH in 2026. The 2024-26 generation pushed past 17.5 J/TH.
- **Why others are wrong.** A: Older S9 era (2017). C: Even older. D: Physically impossible on current process nodes.
- **Exam-takeaway.** J/TH (joules per terahash) is the key efficiency metric. Cycle-time improvements have averaged ~30% per generation.

**Q30. Answer: B**
- **Why B is correct.** Network expects D × 2^32 hashes per block on average. At difficulty 86T, that's roughly 3.7 × 10^23 hashes per block.
- **Why others are wrong.** A: Off by 2^32. C: Time-not-hashes. D: TH/s is rate, not work-per-block.
- **Exam-takeaway.** Difficulty × 2^32 = expected hashes per block. Used in revenue and hashrate calculations.

**Q31. Answer: D**
- **Why D is correct.** Subsidy 6.25 → 3.125 BTC. Daily issuance ~900 → ~450. Marginal miners pushed offline; efficient miners (low J/TH) maintained margins.
- **Why others are wrong.** A: Major economic change. B: Not doubled. C: Continued uninterrupted.
- **Exam-takeaway.** Halvings force the marginal-cost ASIC efficiency upward over time. Survivors win.

**Q32. Answer: A**
- **Why A is correct.** Bitcoin uses ~150 TWh/year (Cambridge Centre for Alternative Finance, 2024-25), roughly 0.4-0.5% of global electricity. The framing is "cost-benefit" not "yes-no."
- **Why others are wrong.** B: Solar is one source among many. C: Demonstrably wrong. D: Hyperbole; Bitcoin uses a small fraction of global energy.
- **Exam-takeaway.** Steelman both sides. Pro: energy-anchored money. Con: comparable to mid-sized country.

**Q33. Answer: D**
- **Why D is correct.** Stranded energy = energy that would otherwise be wasted (flared, curtailed, off-peak). Mining converts it to revenue. Examples: ExxonMobil's Bakken flare mining, Permian gas-to-mining pilots.
- **Why others are wrong.** A, B, C: Misreadings.
- **Exam-takeaway.** Stranded energy is the strongest "energy good" argument for Bitcoin — turns negative-value energy positive.

**Q34. Answer: B**
- **Why B is correct.** Five locking script types account for >99% of UTXO set: P2PKH (legacy `1`), P2SH (`3`), P2WPKH (native SegWit `bc1q`), P2WSH (SegWit script), P2TR (Taproot `bc1p`).
- **Why others are wrong.** A: P2PK is mostly historical. C: Ethereum tokens. D: Not script types.
- **Exam-takeaway.** Five output types, five prefixes. Memorize each.

**Q35. Answer: A**
- **Why A is correct.** BIP-16 (Gavin Andresen, 2012) introduced P2SH — the spender's input "reveals" the redeem script, hashed to match the address. Enabled multi-sig at scale.
- **Why others are wrong.** B: Taproot is much later. C, D: Wrong layer.
- **Exam-takeaway.** P2SH = the breakthrough that made multi-sig practical and address-encodable.

**Q36. Answer: B**
- **Why B is correct (CLTV absolute timelock).** CLTV (BIP-65, Todd, 2015) compares the tx's nLockTime against an absolute block height or Unix time, preventing spend before that point.
- **Why others are wrong.** A: No reversal. C: No speedup. D: No free txs.
- **Exam-takeaway.** CLTV is the foundation of escrow, hash-time-locked contracts, and Lightning's HTLCs.

**Q37. Answer: D**
- **Why D is correct.** CSV (BIP-112, Friedenbach, 2015) enforces a RELATIVE timelock based on the input's confirmation depth.
- **Why others are wrong.** A: CLTV is absolute. B, C: Wrong rules.
- **Exam-takeaway.** CLTV = absolute time. CSV = relative time. Both needed for Lightning's commitment+breach security model.

**Q38. Answer: C**
- **Why C is correct.** Commitment txs are signed off-chain after each payment. Either party can broadcast unilaterally; honest counterparties only broadcast the latest.
- **Why others are wrong.** A: Pre-broadcast — not yet on chain. B: Not consensus. D: Not a backup.
- **Exam-takeaway.** Commitment transaction = "current channel state, signed but unpublished." Mutual updates rotate which version is "current."

**Q39. Answer: B**
- **Why B is correct (watchtower justice tx).** Watchtowers monitor the chain for revoked commitment broadcasts and publish justice txs (claiming the cheater's full balance) when seen.
- **Why others are wrong.** A: No L2 mining. C: Not KYC. D: Watchtowers can be paid but aren't tolls.
- **Exam-takeaway.** Watchtower model = "trustless 3rd-party uptime." Multiple watchtowers per channel = defense in depth.

**Q40. Answer: B**
- **Why B is correct (invoice fields).** BOLT-11 invoice fields: payment_hash (32 B), amount (millisat), expiry, route_hints, optional description, signature over the encoded data.
- **Why others are wrong.** A: No bank info. C: Not tax forms. D: Not licenses.
- **Exam-takeaway.** Lightning invoices are the user-facing payment format. mempool.space and lndecoder.com let you parse them.

**Q41. Answer: D**
- **Why D is correct.** Sphinx (Mironov, Anonymous Messaging via Tor, 2009; adapted to Lightning) uses onion-routing-style layered encryption.
- **Why others are wrong.** A: Sender is also private at each hop. B: Significant privacy. C: Routes aren't broadcast publicly.
- **Exam-takeaway.** Onion routing in Lightning = each hop's privacy is preserved by design.

**Q42. Answer: B**
- **Why B is correct (open/close + inbound liquidity bottleneck).** Channel opens/closes are on-chain (expensive in fees). Inbound liquidity requires either someone opening to you or paying a "liquidity service" (Lightning Pool, Magma) — a chicken-and-egg problem.
- **Why others are wrong.** A, C, D: Not the bottleneck.
- **Exam-takeaway.** Lightning's UX bottleneck is inbound liquidity. Splicing (Q44 of PE-2) reduces some friction.

**Q43. Answer: C**
- **Why C is correct.** FATF Travel Rule applies VASP-to-VASP above threshold. Self-custody-to-self-custody is generally exempt (controversial in some jurisdictions).
- **Why others are wrong.** A: Self-custody exempt. B: Not all txs. D: Not mining.
- **Exam-takeaway.** VASP = exchange/custodian. Self-custody users aren't VASPs.

**Q44. Answer: B**
- **Why B is correct (national-bank crypto custody).** OCC Interpretive Letter 1170 (Brooks, July 2020) authorized national banks to provide crypto-asset custody and certain banking services.
- **Why others are wrong.** A: Mining isn't bank-authorized. C: Stablecoins require separate authorization. D: Futures are CFTC-regulated.
- **Exam-takeaway.** OCC letter opened US bank crypto custody (Anchorage = OCC-chartered crypto bank, 2021).

**Q45. Answer: A**
- **Why A is correct.** "At any time during 2024, did you (a) receive, (b) sell, exchange, or otherwise dispose of a digital asset?" is on Form 1040 since 2020 (initially as a virtual-currency question, expanded in 2022 and 2024).
- **Why others are wrong.** B: Question exists. C: Not currency-only. D: Not mining-only.
- **Exam-takeaway.** Form 1040 digital-asset question is mandatory and triggers false-statement penalties if answered incorrectly.

**Q46. Answer: B**
- **Why B is correct (short vs long-term capital gains).** US capital-gains rules: short-term (≤1 yr) at ordinary rates (up to 37%); long-term (>1 yr) at 0/15/20% based on income bracket.
- **Why others are wrong.** A: There IS a distinction. C: Opposite — long-term holdings owe LESS. D: Not exempt.
- **Exam-takeaway.** HODL ≥1 year for long-term capital-gains treatment in the US.

**Q47. Answer: C**
- **Why C is correct.** MiCA Title III = ARTs (asset-referenced tokens, multi-asset reserves). Title IV = EMTs (e-money tokens, fiat-pegged). Stablecoins are the principal regulated category.
- **Why others are wrong.** A: Bitcoin specifically isn't a "regulated asset" under MiCA. B: Mining not Title-III/IV. D: Not UI.
- **Exam-takeaway.** MiCA carves stablecoins into ARTs and EMTs with different regulatory tiers.

**Q48. Answer: C**
- **Why C is correct.** *Grayscale Investments LLC v. SEC*, No. 22-1142 (D.C. Cir. Aug 29, 2023) vacated the SEC's denial of GBTC's spot conversion. Set the stage for the Jan 2024 ETF approvals.
- **Why others are wrong.** A: Howey is the securities-test case (1946). B: Ripple is a different case. D: SEC v. Coinbase is still pending.
- **Exam-takeaway.** Grayscale ruling = critical legal precedent driving spot-ETF approval.

**Q49. Answer: B**
- **Why B is correct (insider + phishing).** Insider compromise and operational-staff phishing are the highest-frequency, highest-impact custodial breach vectors (Chainalysis, 2024 incident report).
- **Why others are wrong.** A: Operational nuisance. C: Consensus (irrelevant). D: Operational, not catastrophic.
- **Exam-takeaway.** Custody risk = humans-in-the-loop > chain risk.

**Q50. Answer: C**
- **Why C is correct.** A Merkle tree of customer balances lets each customer verify their leaf inclusion. Auditor verifies the root sum equals or is less than reserves.
- **Why others are wrong.** A: No verification. B: Off-chain. D: Not cryptographic.
- **Exam-takeaway.** PoR alone is insufficient. Proof of Solvency = PoR + Proof of Liabilities (audited customer-balance Merkle tree).

**Q51. Answer: C**
- **Why C is correct.** Bankman-Fried sentenced March 28, 2024 to 25 years. Customer funds were commingled with Alameda's trading book — accounting fraud, not protocol failure.
- **Why others are wrong.** A: Not a chain attack. B: Bitcoin protocol fine. D: Not a regulatory raid causation.
- **Exam-takeaway.** FTX = "not your keys, not your coins" canonical case post-Mt.-Gox. Self-custody mitigates this entire failure class.

**Q52. Answer: C**
- **Why C is correct.** Self-custody = direct UTXO control via private keys. No external party can transfer without signing (which only the holder can do).
- **Why others are wrong.** A: Self-custody typically lacks insurance. B: Not specific to self-custody. D: Custody and broadcast are independent of speed.
- **Exam-takeaway.** Self-custody trade-off: max sovereignty, max responsibility for own security.

**Q53. Answer: B**
- **Why B is correct (cloud-synced seed screenshot).** Screenshotting a seed phrase exposes it to cloud sync (iCloud, Google Photos) → any account compromise = total wallet drain.
- **Why others are wrong.** A: HW wallets are best practice. C: Buying isn't a mistake. D: Multi-sig is best practice.
- **Exam-takeaway.** Seed in cloud = seed compromised. Treat it as a bearer credential always.

**Q54. Answer: C**
- **Why C is correct.** Steel backups (stamped metal plates) survive fire, flood, and degradation that destroy paper.
- **Why others are wrong.** A: No protection against crypto attacks. B: No quantum benefit. D: No network role.
- **Exam-takeaway.** Steel backup = the physical complement to digital security. Don't write seed phrases on paper if you can stamp them on steel.

**Q55. Answer: C**
- **Why C is correct.** Shamir's scheme (Adi Shamir, *Communications of the ACM*, 1979): polynomial interpolation produces N shares, threshold M reconstructs.
- **Why others are wrong.** A: SSSS splits private secrets, not public keys. B: Not arbitrary files. D: Not cloud-tied.
- **Exam-takeaway.** SSSS is implemented in Trezor Model T and some Coldcard workflows. BIP-39 alone doesn't split; SSSS does.

**Q56. Answer: B**
- **Why B is correct (SMS = weak MFA).** SMS is the LEAST-recommended MFA. SIM-swap attacks have drained accounts at every major exchange (Coinbase, BitMEX incidents).
- **Why others are wrong.** A: Not quantum-resistant. C: Demonstrably insecure. D: It is auth, just weak.
- **Exam-takeaway.** Replace SMS MFA with TOTP (Authy, Google Auth) or, better, FIDO2/passkey hardware tokens.

**Q57. Answer: C**
- **Why C is correct.** Bitcoin chain is fully public. Identity linking via KYC at on/off-ramps, common-input heuristic, and timing/network analysis is what chain-analysis firms sell.
- **Why others are wrong.** A: Not anonymous. B: Anyone can do chain analysis. D: No court needed for public-chain analysis.
- **Exam-takeaway.** "Pseudonymous, not anonymous." Privacy tools (CoinJoin, Lightning, future Cashu) layer on top.

**Q58. Answer: C**
- **Why C is correct.** Reuse links payments to the same address, revealing balance trail. Legacy P2PK additionally exposes the public key on spend, weakening the HASH160 layer.
- **Why others are wrong.** A: No protocol rule. B: Reused addresses receive fine. D: Same fee.
- **Exam-takeaway.** Best practice: fresh address per receive. HD wallets do this automatically.

**Q59. Answer: B**
- **Why B is correct (CoinJoin = combined inputs).** CoinJoin (Greg Maxwell, 2013) breaks the common-input heuristic by combining many users' inputs into one tx. Wasabi, Whirlpool, JoinMarket implement this.
- **Why others are wrong.** A: Not consensus. C: Not stablecoin. D: Not pool.
- **Exam-takeaway.** CoinJoin = on-chain Bitcoin privacy. Lightning provides a complementary off-chain privacy layer.

**Q60. Answer: C**
- **Why C is correct.** Ethereum Foundation reports ~99.95% reduction in energy at The Merge (Sept 15, 2022). PoS replaces PoW's hashing with stake-based finality.
- **Why others are wrong.** A, B: Underestimate the cut. D: Decreased dramatically.
- **Exam-takeaway.** PoS energy = orders of magnitude less. PoS security = different model (stake slashing). Bitcoin maintains PoW.

**Q61. Answer: B**
- **Why B is correct (pegged to reference price).** Stablecoins = pegged to a reference price via reserves (USDC, USDT) or algorithm (DAI; UST failed).
- **Why others are wrong.** A: BTC volatility-mismatched. C: NFTs are non-fungible. D: Not pools.
- **Exam-takeaway.** Stablecoin types: reserve-backed (centralized, USDC/USDT), collateral-backed (decentralized, DAI), algorithmic (UST failed).

**Q62. Answer: C**
- **Why C is correct.** WBTC is BitGo-custody-backed, ERC-20 on Ethereum. tBTC is threshold-signature-backed. Both bridge BTC into DeFi ecosystems.
- **Why others are wrong.** A: Not native Bitcoin. B: Not a new coin. D: Different protocol.
- **Exam-takeaway.** Wrapped BTC = trust trade-off. Custody risk in exchange for DeFi composability.

**Q63. Answer: C**
- **Why C is correct.** July 2016 hard fork rolled back the ~3.6M ETH DAO theft. Original chain became Ethereum Classic. Major governance precedent.
- **Why others are wrong.** A: Bitcoin separate. B: No police seizure. D: A fork is more than bug fix.
- **Exam-takeaway.** DAO hard fork = Ethereum's "social consensus override" event. Bitcoin culture rejects this; Ethereum culture accepted it.

**Q64. Answer: B**
- **Why B is correct (ZKP applications).** zk-SNARKs (Zcash, 2016) prove valid txs without revealing details. zk-Rollups (zkSync, StarkNet, Polygon zkEVM) compress L2 state into L1-verifiable proofs.
- **Why others are wrong.** A: Not mining. C, D: Not standard.
- **Exam-takeaway.** ZKPs are the cryptographic frontier. Bitcoin uses them in Lightning rollouts (no Layer-1 ZK yet) and proposed Citrea-style L2s.

**Q65. Answer: D**
- **Why D is correct.** Shor's algorithm on a sufficiently large quantum computer would break ECDSA. Addresses whose pubkey is revealed (post-spend, P2PK era) are exposed. P2PKH addresses pre-spend are guarded by HASH160 — a quantum attacker would need a pre-image attack on HASH160 to extract the pubkey from the address.
- **Why others are wrong.** A: Real threat. B: Some protection until first spend. C: Not improvement.
- **Exam-takeaway.** Quantum threat ≠ instant break. Defense-in-depth (HASH160 layer) buys time. ~5M BTC are at "high quantum risk" (P2PK + reused addresses).

**Q66. Answer: B**
- **Why B is correct (PQC soft fork pathway).** NIST PQC finalized 2024: ML-DSA (Dilithium), Falcon, SPHINCS+. Bitcoin can introduce these via a future soft fork as new script types; users migrate by spending to PQ addresses before quantum capability materializes.
- **Why others are wrong.** A: Not a strategy. C: SHA-256 quantum impact is minor (Grover's algorithm only halves security). D: ETH faces the same problem.
- **Exam-takeaway.** Migration path = new script types + community-coordinated migration. Decade+ window assumed.

**Q67. Answer: A**
- **Why A is correct.** Spot ETF approvals (Jan 2024), MicroStrategy's accumulation, post-halving cycle (Apr 2024), and FASB ASU 2023-08 (fair-value accounting effective fiscal 2025) collectively reshaped institutional adoption.
- **Why others are wrong.** B: 2014 event. C: 2016. D: 1992.
- **Exam-takeaway.** Modern era (2024-26) is the macro-event-rich period. Know the FOUR catalysts.

**Q68. Answer: C**
- **Why C is correct.** CCSS Level III = highest tier: geographic dispersion, formal key ceremonies, recurring drills, independent audit.
- **Why others are wrong.** A: Level I baseline. B: Specific architecture is required. D: KYC is unrelated to CCSS.
- **Exam-takeaway.** CCSS levels: I (basic), II (intermediate, includes multi-sig), III (institutional, geographic + audit).

**Q69. Answer: B**
- **Why B is correct (open-source PRs + BIP process).** Bitcoin Core development is open-source via GitHub PRs. Maintainers (Pieter Wuille, Marco Falke, others) review. Consensus changes get a BIP and broader community process.
- **Why others are wrong.** A: No central authority. C: No tokens. D: Bitcoin Foundation doesn't pay devs; multiple orgs (Brink, Spiral, Chaincode Labs) fund.
- **Exam-takeaway.** Governance = social process + open source. There's no CEO of Bitcoin.

**Q70. Answer: A**
- **Why A is correct.** BIP-1 (Amir Taaki, 2011; updated by Luke Dashjr) explicitly cites Python PEPs and IETF RFC 2026 as models.
- **Why others are wrong.** B: Not constitutional. C: Foundation didn't author BIPs. D: Not UN.
- **Exam-takeaway.** BIP process = IETF/PEP-style. Status types: Draft → Proposed → Active or Final.

**Q71. Answer: C**
- **Why C is correct.** 3-of-5 multi-sig (CCSS Level III aligned) with geographic dispersion handles facility loss, planned departure (rotate one key via spend-to-new-quorum), and avoids single-point-of-failure of hot/single-sig.
- **Why others are wrong.** A: Single-sig + hot = Mt. Gox. B: Custodial = "not your keys." D: 11-of-11 = brittle, lose one and it's gone.
- **Exam-takeaway.** Treasury custody = multi-sig + geographic + drills + departure procedure. The CCSS Level III pattern.

**Q72. Answer: B**
- **Why B is correct (recognize phishing).** No legitimate entity ever asks for a seed phrase. Seed = bearer credential. The misspelled domain (`coinbasse.com`) is the phishing tell.
- **Why others are wrong.** A: Total loss. C: Even partial seed is dangerous combined with other leaked info. D: Still leaks the secret.
- **Exam-takeaway.** Anti-phishing rule: NEVER share a seed phrase. Not with support, not with the company, not with anyone. Ever. No exceptions.

**Q73. Answer: B**
- **Why B is correct (ETF or qualified custodian).** SEC Rule 206(4)-2 (Custody Rule) requires qualified custodian for advisers managing client crypto. Spot ETFs satisfy this via the ETF's own custody arrangement; direct exposure via Coinbase Custody/Fidelity satisfies via qualified-custodian status.
- **Why others are wrong.** A: Likely violates fiduciary duty + Custody Rule. C: Futures provide indirect exposure with roll cost; spot is now available. D: OTC unregulated channels expose adviser to AML/fiduciary risk.
- **Exam-takeaway.** Regulated adviser + crypto exposure = ETF OR qualified custodian. Spot ETFs are the new "easy button" since Jan 2024.

**Q74. Answer: C**
- **Why C is correct.** Methane (CH4) has ~25-86× the global-warming potential of CO2. Burning flared methane via mining converts it to CO2, REDUCING net climate impact vs. baseline flaring. Revenue-share with the energy producer aligns incentives. ERCOT interconnection + EPA reporting handles regulatory.
- **Why others are wrong.** A: Illegal. B: Misses the entire arbitrage. D: Insufficient scale for commercial mining.
- **Exam-takeaway.** Flared-methane mining is the strongest "bitcoin mining is climate-positive" case study. Crusoe Energy and Exxon's Bakken pilots are the canonical examples.

**Q75. Answer: C**
- **Why C is correct.** Customer make-whole depends on multiple compounding factors: cold-storage architecture (was the breach truly limited to hot?); insurance terms (per-incident limits, exclusions for insider acts); solvency (does the exchange have reserves beyond what was stolen?); and the jurisdiction's protection law (US BitLicense vs. offshore differ greatly).
- **Why others are wrong.** A: Amount alone doesn't determine make-whole; coverage might exceed it or fall short. B: SOC 2 is an audit standard, not a guarantee. D: IR playbook is process, not solvency.
- **Exam-takeaway.** Multi-factor reasoning. CBP and CBSA exams reward "best combined answer" — recognize when a single factor is insufficient.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 67-75 | Excellent — book the real CBP exam this week |
| 56-66 | On track. Review wrong answers and weak modules; sit the real exam within 2 weeks |
| 45-55 | Re-study weak modules; redo this exam in 1-2 weeks |
| <45 | Defer the real exam. Revisit Modules 1-10 in full. |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered it (M1-M10).
2. Re-read the relevant Reading.md section and Cheat-Sheet.md.
3. Add a flashcard for the concept (use Flashcards.md or your own Anki deck).
4. Redo this exam in 5-7 days and aim for ≥67/75.

---

Good luck on the real exam. The Bitcoin you study today will outlast the certification.
