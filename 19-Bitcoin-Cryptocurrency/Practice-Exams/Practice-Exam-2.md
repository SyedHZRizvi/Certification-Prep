# Practice Exam 2, Bitcoin & Cryptocurrency

> **Conditions:** 50 questions · 60 minutes · Closed book.
> **Pass mark:** 40/50 (~80%). Apply scenario reasoning, not just recall.
> Take this AFTER Modules 1-7. Covers White-Paper origins, Cryptography, Network & Consensus, Wallets, Mining, Script & Taproot, and Lightning.

---

## 📝 Questions

### 1. Alice writes a script that generates a random 32-byte number and sends 0.1 BTC to its derived address. She prints the key on paper, burns the paper, and walks away. Which statement is MOST accurate?

A. The BTC is permanently inaccessible, there is no recovery mechanism
B. The BTC is automatically returned to her wallet after 6 months of inactivity
C. Bitcoin Core has a "lost key" rescue tool that recovers it after 51% miner consent
D. The funds slowly bleed to the network as "key rot" tax

---

### 2. A node receives two valid blocks at the same height with different transactions. The node SHOULD:

A. Reject both blocks until human review
B. Accept the block whose hash is numerically lower
C. Accept whichever it received first, but switch if a longer (more cumulative work) chain emerges
D. Vote by polling its peers

---

### 3. An exchange uses a 2-of-3 multi-sig where one key is on a hardware wallet in NYC, one in Singapore, and one with a third-party recovery service. A subpoena freezes the NYC key. Spending is:

A. Still possible by combining Singapore + recovery-service signatures
B. Permanently blocked
C. Possible only after a 90-day delay
D. Possible only with a court order overriding multi-sig

---

### 4. A mining pool operator goes offline for 6 hours due to a DDoS attack. During that time, transactions continue confirming because:

A. Bitcoin Core has a built-in failover relay
B. The Bitcoin Foundation activates emergency mining nodes
C. Exchanges temporarily mine to fill the gap
D. Other independent mining pools and solo miners continue producing blocks

---

### 5. A user finds a 12-word seed phrase on the floor of a coffee shop. The honest, security-correct action is:

A. Sweep the funds immediately to claim them, "finders keepers"
B. Post the phrase online to identify the owner
C. Recognize that anyone who finds a seed phrase controls every BTC ever sent to its derived addresses; do not interact with it
D. Run a transaction-history check first, then decide

---

### 6. Bitcoin's "longest chain" rule is more accurately stated as:

A. The chain with the most blocks
B. The chain with the most transactions
C. The chain with the greatest cumulative Proof-of-Work
D. The chain accepted by the developers of Bitcoin Core

---

### 7. A merchant accepting BTC for a $5 coffee should wait how many confirmations before releasing the goods?

A. 0 or 1 confirmation is acceptable given the low risk-vs-cost ratio
B. 6 confirmations always (~60 minutes)
C. 144 confirmations (~24 hours)
D. None, Bitcoin transactions are irreversible the moment they hit the mempool

---

### 8. A user receives a transaction sending 0.5 BTC. Block-explorer shows "0 confirmations." What does this MOST accurately mean?

A. The transaction is invalid
B. The transaction has been confirmed once and is final
C. The transaction has been included in a block but the block is invalid
D. The transaction is in the mempool but has not yet been included in a mined block

---

### 9. The MOST common reason a Bitcoin transaction gets "stuck" in the mempool for hours is:

A. The fee rate is too low for current mempool congestion
B. Network attack
C. The sender's wallet software is broken
D. ISP throttling

---

### 10. *Replace-By-Fee* (BIP-125) allows a sender to:

A. Reverse a confirmed transaction
B. Refund a payment without recipient consent
C. Steal a confirmed transaction's output
D. Re-broadcast an unconfirmed transaction with a higher fee, hoping miners pick the new version

---

### 11. A 51% attacker who controls majority hashrate can do which of the following?

A. Steal already-confirmed BTC from any address
B. Censor transactions and double-spend their own recent unconfirmed transactions
C. Print new BTC outside the 21M cap
D. Change the address-derivation algorithm

---

### 12. Alice runs a 5-of-7 multi-sig corporate treasury. One signer's hardware wallet is lost. What is the FIRST action she should take?

A. Move all funds to a single-sig wallet immediately
B. Publish the loss on Twitter to warn the community
C. Initiate a planned migration: spend from 5-of-7 to a NEW 5-of-7 with a freshly-generated replacement key, using the remaining 6 working signers
D. Wait 90 days and assume the lost device is offline

---

### 13. The ASIC mining migration from China (2021) demonstrates which property of Bitcoin?

A. Mining is permanently centralized in any one country
B. Hashrate is anti-fragile: capacity can physically relocate within months
C. Hashrate is location-locked to where the ASIC was manufactured
D. The Bitcoin Foundation can override mining bans

---

### 14. A mining pool that pays miners proportionally to submitted shares (regardless of whether the pool finds a block) uses what model?

A. PPS (Pay-Per-Share)
B. PPLNS (Pay Per Last N Shares)
C. Solo mining
D. Cloud mining contract

---

### 15. Bob's wallet shows a 0.5 BTC balance, but when he tries to send 0.3 BTC, the wallet says "insufficient funds for fees." MOST likely cause:

A. The wallet is broken
B. His ISP is blocking the broadcast
C. His 0.5 BTC is a single UTXO worth slightly less than 0.3 + estimated fee; or he has many tiny UTXOs producing high coin-selection overhead
D. The address has been blacklisted

---

### 16. Native SegWit addresses begin with what prefix?

A. `bc1q`
B. `1`
C. `3`
D. `bc1p`

---

### 17. Taproot (P2TR) addresses begin with what prefix?

A. `1`
B. `3`
C. `bc1q`
D. `bc1p`

---

### 18. The PRIMARY benefit of SegWit (BIP-141, activated August 2017) was:

A. Increasing the maximum BTC supply
B. Replacing SHA-256 with Schnorr
C. Fixing transaction malleability and enabling effective block-size expansion via the witness discount
D. Adding smart-contract Turing-completeness

---

### 19. A P2PKH locking script reads:
```
OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```
This script is satisfied (returns true on the stack) when the spender provides:

A. The recipient's seed phrase
B. A valid signature and the public key whose HASH160 equals `<pubKeyHash>`
C. A SHA-256 preimage matching `<pubKeyHash>`
D. A miner-signed certificate

---

### 20. Taproot's BIP-340 introduces what cryptographic primitive?

A. Lattice-based signatures
B. RSA-4096 signatures
C. Quantum-resistant signatures
D. Schnorr signatures (replacing ECDSA for new tx)

---

### 21. The MOST important on-chain privacy benefit of Taproot's MuSig2 multi-signature aggregation is:

A. It makes multi-sig spends look indistinguishable from single-sig spends on the chain
B. It encrypts the recipient address
C. It hides the transaction amount
D. It removes the transaction from the public mempool

---

### 22. Lightning Network channels enable off-chain micropayments by:

A. Replacing the Bitcoin blockchain entirely
B. Locking BTC into a 2-of-2 multi-sig on-chain, then exchanging signed-but-unbroadcast balance updates off-chain
C. Using a faster permissioned ledger
D. Outsourcing settlement to a regulated bank

---

### 23. On Lightning, a "force-close" of a channel:

A. Settles immediately with no delay
B. Broadcasts the latest commitment transaction to the chain and (typically) imposes a 144-2016-block timelock to allow the counterparty to contest a cheating attempt
C. Permanently destroys the channel's funds
D. Requires a court-ordered settlement

---

### 24. Lightning's HTLC (Hash Time-Locked Contract) routes a payment by:

A. Locking each hop's funds under `(hash preimage OR timeout refund)` so all hops settle atomically when the preimage is revealed at the destination
B. Trusting each routing node to forward honestly
C. Broadcasting the route to all Bitcoin full nodes
D. Using a permissioned routing matrix

---

### 25. The FATF Travel Rule requires VASPs (Virtual Asset Service Providers) to:

A. Travel to physical headquarters quarterly
B. Pay travel taxes on cross-border transfers
C. Share originator and beneficiary information for transactions above a threshold (commonly $1,000 / 1,000 EUR)
D. Use only one approved travel-booking platform

---

### 26. In the United States, FinCEN classifies most cryptocurrency exchanges as:

A. Banks
B. Securities broker-dealers (SEC-registered only)
C. Money Service Businesses (MSBs)
D. Insurance companies

---

### 27. For US tax purposes (2026), the IRS treats Bitcoin as:

A. Foreign currency
B. A commodity subject only to commodity-trading rules
C. Property, every disposal is a taxable event with capital gains/losses
D. Untaxed digital tokens

---

### 28. The EU's *Markets in Crypto-Assets* (MiCA) regulation, fully applicable from December 30, 2024, primarily covers:

A. Bitcoin mining licensing
B. Direct taxation of crypto holdings
C. Mandatory KYC for all self-custody wallets
D. Issuance and service-provider authorization for crypto-assets, stablecoins, and crypto exchanges within the EU

---

### 29. The SEC's January 10, 2024 approval of 11 spot Bitcoin ETFs (BlackRock IBIT, Fidelity FBTC, etc.) was significant because:

A. It made Bitcoin illegal
B. It eliminated mining
C. It capped Bitcoin's price
D. It allowed traditional brokerage accounts to hold regulated Bitcoin exposure without direct custody

---

### 30. *Proof of Reserves* (PoR) attestations attempt to demonstrate that:

A. A custodian's BTC holdings (on-chain wallets it controls) cover or exceed customer liabilities
B. The exchange is registered with the SEC
C. The custodian has SOC 2 Type II compliance
D. Bitcoin is backed by gold

---

### 31. The biggest published PROOF gap in most exchange "Proof of Reserves" is:

A. Block-explorer access
B. Reserves are denominated in USD, not BTC
C. Lack of a simultaneous, audited "proof of liabilities", reserves alone don't prove customer obligations are fully covered
D. The on-chain wallets are inaccessible

---

### 32. The Mt. Gox custody anti-pattern lessons (2014) directly informed which post-2014 custody standard?

A. NIST SP 800-53
B. PCI-DSS
C. HIPAA
D. CCSS (CryptoCurrency Security Standard, C4 / Cryptocurrency Certification Consortium, 2014-2015)

---

### 33. A wallet that uses *Multi-Party Computation* (MPC) instead of multi-sig has which key advantage?

A. The on-chain signature looks like single-sig (no on-chain multi-sig footprint) and signing parties never reconstruct a full private key
B. MPC is faster than HSMs
C. MPC is cheaper to license
D. MPC bypasses tax reporting

---

### 34. Ethereum (Buterin, white paper 2013; launched 2015) differs from Bitcoin in that its ledger is:

A. Account-balance based, with a Turing-complete VM (EVM) for smart contracts
B. UTXO-based with non-Turing-complete script
C. A permissioned database run by the Ethereum Foundation
D. Identical to Bitcoin but with faster blocks

---

### 35. Stablecoins like USDC (Circle) and USDT (Tether) maintain their peg primarily through:

A. Algorithmic seigniorage (no reserves required)
B. Bitcoin collateral
C. Reserves of cash and short-term US Treasury securities held by the issuer, with redemption rights for qualified holders
D. Government decree

---

### 36. The 2022 Terra/Luna collapse demonstrated which design flaw?

A. ECDSA signature forgery
B. Bitcoin's PoW failed
C. Hardware-wallet supply-chain attacks
D. Algorithmic stablecoins backed by their own volatile native token can spiral when confidence breaks (reflexive death spiral)

---

### 37. The Bitcoin "Ordinals" wave (Casey Rodarmor, 2023) used what mechanism to inscribe arbitrary data onto satoshis?

A. A separate Layer-2 chain
B. The Taproot witness field, allowing larger data payloads with the SegWit witness discount
C. Increased block size via a hard fork
D. Off-chain IPFS storage with on-chain pointers

---

### 38. A *cold wallet* differs from a *hot wallet* primarily because the cold wallet:

A. Has a colorful UI
B. Costs more
C. Never has its private keys touch an internet-connected device
D. Uses a different cryptographic curve

---

### 39. The recommended frequency for testing a multi-sig recovery procedure ("fire drill") is:

A. Once at setup, never again
B. Daily
C. At least annually, with a documented procedure and tested signers
D. Only when a key is suspected lost

---

### 40. A *hardware wallet* (Ledger, Trezor, Coldcard) protects keys by:

A. Storing keys in a tamper-resistant secure element, signing transactions on-device, and displaying details on a trusted display before user confirmation
B. Encrypting keys with the user's email password
C. Uploading keys to a cloud HSM
D. Generating new keys per transaction

---

### 41. The "BIP-39 passphrase" (sometimes called "25th word") provides:

A. A redundant copy of the seed
B. The recovery contact's email
C. A user-chosen string that combines with the seed to derive a completely separate set of HD wallets ("hidden wallets")
D. A backup PIN

---

### 42. Bitcoin Core ships with a built-in *miniscript* support to:

A. Mine blocks on small CPUs
B. Replace the EVM
C. Run Solidity contracts
D. Compose complex Bitcoin Script policies (e.g., "2-of-3 OR 1-of-2 after 90 days") with formal verification of soundness

---

### 43. Schnorr signatures (BIP-340) enable signature aggregation. The on-chain space saving for an n-of-n multi-sig spend post-Taproot vs. legacy ECDSA multi-sig is approximately:

A. No savings, Schnorr is the same size as ECDSA
B. Multi-sig now requires only ONE signature on-chain regardless of n, dramatically reducing tx size and fee
C. Schnorr uses 1024-bit signatures, increasing size
D. Schnorr requires a separate proof-of-membership signature

---

### 44. A Lightning *splice* (proposed/deployed 2024) enables:

A. Closing a channel without on-chain settlement
B. Forwarding payments across two Bitcoin chains
C. Mining Lightning blocks
D. Adding or removing channel capacity without closing and reopening the channel, a single on-chain transaction adjusts the channel

---

### 45. A user wants to receive Bitcoin from a payer who supports only legacy `1...` addresses, but the user's wallet generated a `bc1p...` Taproot address. The user's BEST action is:

A. Tell the payer they cannot receive payment
B. Use the wallet's "receive" feature to generate a legacy P2PKH or a P2SH `3...` address from the same seed, accepting that legacy addresses pay higher fees per byte
C. Convert the bc1p to 1... by removing the prefix
D. Wait until the payer upgrades

---

### 46. The *halving cycle thesis* (popular among Bitcoin analysts) posits that:

A. Halvings are economically irrelevant
B. Halvings cause permanent price crashes
C. The supply shock from a halving, combined with constant or growing demand, historically precedes a price-discovery cycle within 12-18 months
D. Halvings stop after the 5th halving

---

### 47. A "dust" UTXO in Bitcoin refers to:

A. The miner's reward share
B. A UTXO so small (e.g., <546 sats) that spending it costs more in fees than the UTXO is worth
C. Failed transactions
D. Unconfirmed transactions over 24 hours old

---

### 48. The PRIMARY reason large institutional buyers (e.g., MicroStrategy, BlackRock IBIT) prefer qualified custodians rather than self-custody is:

A. Custodians have faster signature schemes
B. Self-custody is technically impossible at institutional scale
C. The IRS requires custodian use
D. Regulatory, accounting, and insurance requirements, qualified custodians are required under SEC rule 206(4)-2 (Custody Rule) for advisers managing client crypto

---

### 49. *Coin Control* in a wallet allows the user to:

A. Set the BTC price
B. Override consensus rules
C. Manually select which UTXOs to spend in a transaction, improving fee accuracy and privacy
D. Mine blocks

---

### 50. The MOST significant attack vector against a long-term Bitcoin holder is, statistically (2010-2025):

A. Quantum-computer break of secp256k1
B. 51% attack on the chain
C. Phishing, malware, and SIM-swap attacks on hot wallets and exchange accounts
D. Government seizure of self-custodied cold storage

---

## 🎯 Answer Key (No Cheating!)

```
1.  A    11. B    21. A    31. C    41. C
2.  C    12. C    22. B    32. D    42. D
3.  A    13. B    23. B    33. A    43. B
4.  D    14. A    24. A    34. A    44. D
5.  C    15. C    25. C    35. C    45. B
6.  C    16. A    26. C    36. D    46. C
7.  A    17. D    27. C    37. B    47. B
8.  D    18. C    28. D    38. C    48. D
9.  A    19. B    29. D    39. C    49. C
10. D    20. D    30. A    40. A    50. C
```

---

## 🎯 Detailed answer rationales

**Q1. Answer: A**
- **Why A is correct.** Bitcoin has no key-recovery oracle. Once a private key is destroyed, the corresponding UTXOs are permanently unspendable. Roughly 3-4 million BTC are estimated lost forever from this exact failure mode (Chainalysis, 2023 study).
- **Why others are wrong.** B: No automatic return mechanism exists. C: No "rescue tool" exists, would violate self-sovereignty. D: No tax mechanism exists at protocol level.
- **Exam-takeaway.** Self-custody is unforgiving by design. Bitcoin trades reversibility for sovereignty.

**Q2. Answer: C**
- **Why C is correct.** Nakamoto consensus: nodes accept the first valid block, but switch chains when a competing chain accumulates more cumulative Proof-of-Work (Nakamoto, 2008, §5).
- **Why others are wrong.** A: Rejecting both halts consensus. B: Hash value is irrelevant; cumulative work decides. D: There is no peer poll, work decides, not opinion.
- **Exam-takeaway.** "Longest chain" is a shorthand. Properly: "greatest cumulative Proof-of-Work."

**Q3. Answer: A**
- **Why A is correct.** A 2-of-3 multi-sig requires any 2 signatures. Singapore + recovery-service = 2 valid signers, satisfying the script. The frozen NYC key is irrelevant.
- **Why others are wrong.** B: 2 of 3 are still available, not permanently blocked. C: No protocol-level delay. D: Multi-sig is enforced by Bitcoin Script, not by courts.
- **Exam-takeaway.** Multi-sig "M of N" means *any* M of the N keys can sign, survives loss/seizure of N-M keys.

**Q4. Answer: D**
- **Why D is correct.** Bitcoin's mining is decentralized across 10-12 significant pools and thousands of solo miners. One pool offline = roughly that pool's share of hashrate paused, but blocks continue.
- **Why others are wrong.** A: No failover relay exists. B: The Bitcoin Foundation has no operational mining role. C: Exchanges are not miners.
- **Exam-takeaway.** Decentralization isn't aesthetic, it's the survival property that lets the network shrug off pool-level outages.

**Q5. Answer: C**
- **Why C is correct.** Possessing the seed phrase IS the credential. Anyone who reads it (including the finder) controls the wallet. Even "checking the balance" via an explorer is fine, but importing it into a wallet is theft.
- **Why others are wrong.** A: Theft. B: Doxxing creates more attack surface. D: Encourages interaction with credentials that aren't yours.
- **Exam-takeaway.** "Seed phrase = bearer credential", never share, never transcribe to digital, never interact with someone else's.

**Q6. Answer: C**
- **Why C is correct.** Nodes select the chain with the greatest cumulative work, not the literal block count (Antonopoulos, *Mastering Bitcoin*, Ch. 10). A shorter chain with higher difficulty per block could outrank a longer one in extreme adjustment scenarios.
- **Why others are wrong.** A: Block count alone is wrong in difficulty-transition edge cases. B: Tx count is irrelevant. D: Developers don't pick chains.
- **Exam-takeaway.** "Cumulative work" is the rigorous wording, common CBSA distinction.

**Q7. Answer: A**
- **Why A is correct.** For a $5 transaction, the cost of waiting 60 min exceeds the cost of a tiny double-spend risk. Real-world merchants accept 0/1-conf for small amounts; major exchanges require 3-6 confirmations for large deposits.
- **Why others are wrong.** B: Overkill for a coffee. C: A day's wait would lose the customer. D: Mempool transactions are NOT irreversible.
- **Exam-takeaway.** Confirmation depth is risk-proportional. $5 = 0-1. $50K = 3-6. $5M = 6+.

**Q8. Answer: D**
- **Why D is correct.** 0 confirmations means the tx exists in mempool (broadcast and accepted by relay rules) but no block has yet included it (Bitcoin Core docs).
- **Why others are wrong.** A: Invalid txs are rejected, not shown with 0 conf. B: 0 conf is not "confirmed and final", that requires ≥ 1 block. C: An invalid block wouldn't be visible to the explorer this way.
- **Exam-takeaway.** Mempool != chain. Confirmation count = number of blocks including or built on top of the block containing the tx.

**Q9. Answer: A**
- **Why A is correct.** Miners include the highest-fee-rate transactions first. If congestion is high and the user paid below current market fee, the tx waits.
- **Why others are wrong.** B: Network attack scenarios are rare; mempool capacity is large. C: Wallet broadcast is largely best-effort. D: ISP blocking is uncommon.
- **Exam-takeaway.** Fee rate (sats/vByte) is THE variable. Tools: mempool.space, bitcoinfees.earn.com.

**Q10. Answer: D**
- **Why D is correct.** RBF (Replace-By-Fee, BIP-125, Suhas Daftuar, 2015) re-broadcasts the same logical transaction with a higher fee, miners prefer the more profitable replacement.
- **Why others are wrong.** A: Confirmed txs are irreversible (absent reorg). B: Recipient cooperation isn't required, but the funds still go to the originally intended output, RBF isn't a "refund" mechanism. C: RBF cannot redirect a confirmed tx output.
- **Exam-takeaway.** RBF only works pre-confirmation. Once mined, only a deep reorg (vanishingly rare) can change a tx.

**Q11. Answer: B**
- **Why B is correct.** Majority hashrate enables censorship (refusing to mine specific txs) and double-spending of THE ATTACKER'S OWN unconfirmed/recent transactions. Already-confirmed txs deeper than the reorg depth are safe.
- **Why others are wrong.** A: Confirmed history is exponentially harder to rewrite with depth, not arbitrary theft. C: Inflation requires changing consensus rules, not just hashrate. D: Derivation algorithms are consensus, not hashrate-controlled.
- **Exam-takeaway.** 51% attack ≠ omnipotence. It enables censorship + recent double-spend, NOT theft of arbitrary balances or supply inflation.

**Q12. Answer: C**
- **Why C is correct.** With one device lost, the wallet is now effectively a "stuck" 5-of-6, risky because losing one more crosses below the threshold. The correct action: spend everything to a NEW 5-of-7 with a fresh replacement key, performed while 6 working signers remain.
- **Why others are wrong.** A: Reduces to single-sig, terrible security. B: Public disclosure is operational malpractice. D: Waiting risks losing another key.
- **Exam-takeaway.** Multi-sig key rotation = spend to a new quorum. Don't tolerate degraded states.

**Q13. Answer: B**
- **Why B is correct (anti-fragile hashrate).** China's June 2021 ban dropped global hashrate ~55%. Within 4 months it had fully recovered as miners relocated to Texas, Kazakhstan, Canada (US share rose from ~5% in 2020 to ~40% by 2024).
- **Why others are wrong.** A: Mining is geographically mobile, not permanently centralized. C: ASICs are physically movable. D: The Bitcoin Foundation has no operational role.
- **Exam-takeaway.** Anti-fragile = "gains from disorder" (Taleb, 2012). Hashrate migrates faster than regulators can act.

**Q14. Answer: A**
- **Why A is correct.** PPS (Pay-Per-Share) pays miners for each share they submit, with the pool taking the variance risk of when blocks are actually found.
- **Why others are wrong.** B: PPLNS only pays when blocks are found, distributed over the last N shares. C: Solo mining has no pool. D: Cloud mining is a different relationship entirely.
- **Exam-takeaway.** PPS = pool takes risk. PPLNS = miner shares the risk. Trade-off is variance vs. fee.

**Q15. Answer: C**
- **Why C is correct.** Bitcoin balances are sums of UTXOs. Coin selection must build a tx whose inputs cover output + fee. If the only UTXO is barely-larger than 0.3 BTC, fee may push the total over the available balance.
- **Why others are wrong.** A: Wallet bug is unlikely. B: Broadcast happens after construction; this is pre-broadcast. D: Bitcoin has no address blacklist.
- **Exam-takeaway.** UTXO consolidation and coin control mitigate this, see Module 4 wallet best practices.

**Q16. Answer: A**
- **Why A is correct.** Native SegWit (BIP-173, Bech32) addresses begin with `bc1q` on mainnet, `tb1q` on testnet.
- **Why others are wrong.** B: `1` = legacy P2PKH. C: `3` = P2SH (including wrapped SegWit). D: `bc1p` = Taproot.
- **Exam-takeaway.** Address prefixes: `1` (P2PKH), `3` (P2SH), `bc1q` (SegWit), `bc1p` (Taproot).

**Q17. Answer: D**
- **Why D is correct.** Taproot (P2TR, BIP-341/350) uses Bech32m encoding with the witness-version-1 prefix `bc1p` on mainnet, `tb1p` on testnet.
- **Why others are wrong.** A, B, C are predecessor address types.
- **Exam-takeaway.** New Taproot wallets default to `bc1p`. Always check the witness version when troubleshooting incompatible-payer issues.

**Q18. Answer: C**
- **Why C is correct.** SegWit (Lombrozo, Lau, Wuille; BIP-141, activated Aug 24, 2017) moved the signature into a separate witness field, fixing transaction malleability and giving witness bytes a 4× discount when computing block "weight", effectively expanding capacity.
- **Why others are wrong.** A: The 21M cap is consensus, not changeable by SegWit. B: Schnorr came later with Taproot (2021). D: Bitcoin Script remains non-Turing-complete by design.
- **Exam-takeaway.** SegWit's two legacies: (1) malleability fix unlocking Lightning, (2) witness discount expanding effective block size to ~4 MB weight.

**Q19. Answer: B**
- **Why B is correct (signature + pubkey).** P2PKH (`Pay to Public Key Hash`) requires the spender to provide `<sig> <pubkey>` such that `HASH160(pubkey) == <pubKeyHash>` AND `CHECKSIG(sig, pubkey)` returns true.
- **Why others are wrong.** A: Seed phrases never appear in script. C: A SHA-256 preimage is not what the script asks for, and a sig is still required. D: Miners don't sign user spends.
- **Exam-takeaway.** Stack-based execution: push sig, push pubkey, OP_DUP duplicates pubkey, OP_HASH160 hashes it, compare to expected hash (OP_EQUALVERIFY), then OP_CHECKSIG.

**Q20. Answer: D**
- **Why D is correct.** BIP-340 (Wuille, Nick, Ruffing; 2020) standardizes Schnorr signatures over secp256k1, activated with Taproot (Nov 2021).
- **Why others are wrong.** A: Lattice signatures aren't in Bitcoin yet. B: RSA is not on the Bitcoin curve. C: Quantum resistance is a roadmap item, not Taproot.
- **Exam-takeaway.** BIP-340/341/342 = the three Taproot BIPs. 340 = Schnorr; 341 = Taproot (key path + script path + MAST); 342 = Tapscript.

**Q21. Answer: A**
- **Why A is correct.** MuSig2 (Nick, Ruffing, Seurin; 2020) lets n signers cooperatively produce a single Schnorr signature that on-chain is indistinguishable from a single-key spend.
- **Why others are wrong.** B: Recipient addresses are still on-chain (visible). C: Amounts are still on-chain. D: Mempool inclusion is separate from signature aggregation.
- **Exam-takeaway.** Aggregation = privacy + space efficiency. Multi-sig vaults become invisible as multi-sig.

**Q22. Answer: B**
- **Why B is correct (off-chain commitments).** Lightning (Poon & Dryja, 2016) opens a 2-of-2 multi-sig channel on-chain, then exchanges signed-but-unbroadcast commitment transactions off-chain. The chain is only touched at open/close.
- **Why others are wrong.** A: Lightning settles to Bitcoin; doesn't replace it. C: Lightning is permissionless, no permissioned ledger. D: No bank involvement.
- **Exam-takeaway.** Off-chain ≠ trusted-third-party. Each party can unilaterally close to chain, the cryptography enforces honesty.

**Q23. Answer: B**
- **Why B is correct (timelocked broadcast).** Force-close broadcasts the latest signed commitment. A `to_self_delay` (commonly 144-2016 blocks) gives the counterparty time to publish a *justice transaction* if the broadcaster cheated by publishing a stale state.
- **Why others are wrong.** A: Settlement is NOT immediate, the timelock applies. C: Funds aren't destroyed. D: No court involvement.
- **Exam-takeaway.** Force-close = unilateral exit. Cooperative close = no timelock, immediate settlement.

**Q24. Answer: A**
- **Why A is correct.** HTLC locks each hop under `OP_HASH160 <h> EQUALVERIFY ... OR <pubkey> CHECKSIG OP_CHECKLOCKTIMEVERIFY` semantics. Revealing the preimage at the destination atomically unlocks every hop backward.
- **Why others are wrong.** B: Routing nodes are NOT trusted, cryptography enforces honesty. C: HTLCs are private to the involved parties (not broadcast). D: No permissioned matrix.
- **Exam-takeaway.** HTLC = atomic, trust-minimized multi-hop routing. The preimage acts as a cryptographic "settlement signal."

**Q25. Answer: C**
- **Why C is correct.** FATF Recommendation 16 ("Travel Rule," 2019; extended to VASPs in 2020) requires sender/receiver KYC info for cross-VASP transfers above the threshold (commonly USD/EUR 1,000).
- **Why others are wrong.** A: Unrelated; "travel" refers to information traveling with the transaction. B: No travel tax. D: Not a booking system.
- **Exam-takeaway.** "Travel Rule" applies to VASP-to-VASP, not self-custody-to-self-custody. Compliance solutions: TRP, Sumsub, Notabene.

**Q26. Answer: C**
- **Why C is correct.** FinCEN guidance (2013, reaffirmed 2019/2024) treats most exchanges as Money Service Businesses, requiring registration, BSA/AML compliance, and SARs.
- **Why others are wrong.** A: Banks have separate licensing. B: Securities-broker registration applies only if dealing in securities (some crypto products are; many are not). D: Insurance is unrelated.
- **Exam-takeaway.** US crypto exchange = MSB. The SEC vs CFTC vs FinCEN jurisdictional question is separate (Module 8).

**Q27. Answer: C**
- **Why C is correct.** IRS Notice 2014-21 and subsequent revenue rulings treat crypto as property. Every sale, swap, or spend is a taxable event with capital gain/loss based on basis vs. fair-market value at disposal.
- **Why others are wrong.** A: Not foreign currency. B: Commodity-trading rules apply only to specific futures. D: Not untaxed.
- **Exam-takeaway.** US Bitcoin tax = property = capital gains/losses on EVERY disposal, including spending it on coffee.

**Q28. Answer: D**
- **Why D is correct.** MiCA (Regulation (EU) 2023/1114) establishes a unified EU framework for crypto-asset service providers (CASPs), e-money tokens, asset-referenced tokens, and stablecoins. Full applicability: Dec 30, 2024.
- **Why others are wrong.** A: Mining isn't licensed under MiCA (though energy-disclosure rules apply). B: Taxation remains national. C: MiCA does not mandate KYC for self-custody, controversial proposals were excluded.
- **Exam-takeaway.** MiCA = EU crypto rulebook. Compare to US's fragmented FinCEN/SEC/CFTC approach.

**Q29. Answer: D**
- **Why D is correct.** On Jan 10, 2024, the SEC approved 11 spot Bitcoin ETFs (IBIT, FBTC, ARKB, etc.). Within 12 months, IBIT alone accumulated ~$30B AUM, by far the most successful ETF launch in history (by AUM-per-day).
- **Why others are wrong.** A: Approval implies legality, not the opposite. B: Mining is unrelated. C: ETFs don't cap price; if anything, they widen the demand-side institutional channel.
- **Exam-takeaway.** Spot ETFs = institutional demand channel without the operational complexity of self-custody. Tied directly to Module 9 (Institutional).

**Q30. Answer: A**
- **Why A is correct.** PoR is a cryptographic attestation that the custodian controls on-chain BTC summing to ≥ customer liabilities. Typically a Merkle-tree proof of user balances + signed wallet addresses.
- **Why others are wrong.** B: SEC registration is regulatory, not cryptographic. C: SOC 2 is an operational audit, not on-chain proof. D: BTC is not gold-backed.
- **Exam-takeaway.** PoR proves *reserves*. It does NOT alone prove *solvency*, see Q31.

**Q31. Answer: C**
- **Why C is correct.** Reserves alone are insufficient, the exchange must also prove total liabilities are ≤ reserves. Without proof of liabilities (audited), a custodian could hide liabilities and show only matching reserves.
- **Why others are wrong.** A: Block explorers are publicly accessible, not the gap. B: Most PoR is BTC-denominated, not USD. D: Self-controlled wallets are accessible to the custodian.
- **Exam-takeaway.** Solvency = Reserves ≥ Liabilities. PoR + Proof of Liabilities (audited) = full proof. Mt. Gox and FTX failed because nobody could verify either half.

**Q32. Answer: D**
- **Why D is correct.** CCSS (CryptoCurrency Security Standard) was published by the Cryptocurrency Certification Consortium (C4) in 2014 explicitly in response to Mt. Gox. Levels I, II, III define cold-storage, multi-sig, and operational controls.
- **Why others are wrong.** A: NIST 800-53 predates crypto by decades. B: PCI-DSS is payment-card. C: HIPAA is health.
- **Exam-takeaway.** CCSS is the canonical crypto-custody standard. CBP exam will reference CCSS Level III for institutional custody.

**Q33. Answer: A**
- **Why A is correct.** MPC (e.g., Fireblocks, BitGo's MPC offering) splits the private key into shares; signing parties cooperate to produce a single signature without ever reconstructing the full key. On-chain it looks like single-sig.
- **Why others are wrong.** B: MPC is slower than HSMs per-op but offers different trust properties. C: MPC licensing is often expensive. D: MPC doesn't affect tax reporting.
- **Exam-takeaway.** MPC vs multi-sig trade-off: MPC = better privacy + smaller tx fees; multi-sig = on-chain auditability + simpler protocol. Different use cases.

**Q34. Answer: A**
- **Why A is correct.** Ethereum uses an account-balance model with the Ethereum Virtual Machine (EVM), a Turing-complete bytecode runtime metered by gas.
- **Why others are wrong.** B: That's Bitcoin's model. C: Ethereum is permissionless. D: Block time, finality, and execution model differ substantially.
- **Exam-takeaway.** UTXO + non-Turing (Bitcoin) vs Account + Turing-complete (Ethereum) is the central architectural axis of the field.

**Q35. Answer: C**
- **Why C is correct.** USDC (Circle, public attestations monthly) and USDT (Tether, attestations quarterly) hold majority reserves in cash + short-term US Treasuries with qualified-redeemer redemption rights.
- **Why others are wrong.** A: Algorithmic stablecoins (UST) collapsed in 2022 demonstrating this fails. B: Some "BTC-backed" experiments exist but USDC/USDT are USD-pegged via Treasuries. D: Stablecoins aren't decreed currency.
- **Exam-takeaway.** Reserves-backed (USDC, USDT) >> algorithmic (UST, doomed). Centralized issuers carry custodial + regulatory risk.

**Q36. Answer: D**
- **Why D is correct.** Terra/Luna's UST was algorithmically backed by LUNA mints/burns. When confidence broke (May 2022), the death-spiral mechanic inflated LUNA infinitely, collapsing both to near-zero. ~$60B in market cap erased in days.
- **Why others are wrong.** A: No signature attack. B: Bitcoin's PoW is unrelated. C: No hardware-wallet supply chain.
- **Exam-takeaway.** Algorithmic stablecoins without exogenous reserves are reflexively unstable. The 2022 Terra/Luna case is the textbook example.

**Q37. Answer: B**
- **Why B is correct.** Ordinals (Rodarmor, Jan 2023) exploited the Taproot witness field to inscribe arbitrary data (JPEG, JSON, text) onto satoshis with the SegWit witness discount. Triggered the BRC-20 token wave and a major mempool fee event in 2023-24.
- **Why others are wrong.** A: Ordinals are native Layer 1. C: No hard fork. D: Inscriptions are on-chain in the witness.
- **Exam-takeaway.** Ordinals = controversial. Pro side: "fees subsidize miners post-halving." Con side: "spam clogs the mempool." Both views are exam-relevant.

**Q38. Answer: C**
- **Why C is correct.** "Cold" = private keys never touch an internet-connected device, either by airgap (Coldcard, paper wallet) or by deep-storage with physical isolation.
- **Why others are wrong.** A: UI is irrelevant. B: Cost varies, not the defining property. D: Same curve (secp256k1).
- **Exam-takeaway.** Cold storage is defined by NETWORK ISOLATION, not by device type. A "hardware wallet" is sometimes online (warm), not all hardware wallets are cold.

**Q39. Answer: C**
- **Why C is correct.** CCSS Level III + institutional best practice require at least annual recovery drills with documented procedure and tested signers.
- **Why others are wrong.** A: Setup-only testing means the procedure rots. B: Daily is overkill. D: Reactive-only testing misses procedural drift.
- **Exam-takeaway.** "Fire drill" cadence = at least annually. Treasury teams that don't drill, fail when it matters.

**Q40. Answer: A**
- **Why A is correct.** Hardware wallets use a secure element (e.g., ST33, NXP), sign on-device so the host PC never sees the private key, and display tx details (amount, destination) for user confirmation.
- **Why others are wrong.** B: Email passwords don't protect HWs. C: Cloud HSMs are different model. D: HD wallets reuse the seed; not "new keys per tx."
- **Exam-takeaway.** HW wallet security model = "host is hostile." Confirm transaction details on the device display, not the laptop screen.

**Q41. Answer: C**
- **Why C is correct.** BIP-39 §5: a passphrase combines with the seed via PBKDF2 to derive a totally distinct master key. Different passphrase → different wallet entirely. Powerful but easy to lose.
- **Why others are wrong.** A: Not redundant, it changes the derivation. B: Not a contact field. D: Not a PIN.
- **Exam-takeaway.** Passphrase = "25th word" = duress-wallet capability + plausible deniability. But losing it = losing access.

**Q42. Answer: D**
- **Why D is correct.** Miniscript (Wuille, Poelstra, et al., 2019-2021) is a typed language that compiles to Bitcoin Script, with policy composition and formal verification of soundness. Bitcoin Core integration ongoing 2022-2025.
- **Why others are wrong.** A: Not a CPU optimization. B: Not an EVM replacement. C: No Solidity compatibility.
- **Exam-takeaway.** Miniscript brings expressive composability to Bitcoin Script without sacrificing bounded execution.

**Q43. Answer: B**
- **Why B is correct.** Schnorr's linearity allows n signers to produce ONE aggregated signature that satisfies an n-of-n requirement. On-chain footprint = 64 bytes for any n.
- **Why others are wrong.** A: Schnorr sigs are actually slightly smaller than ECDSA. C: Schnorr uses the same curve. D: No separate proof needed for n-of-n.
- **Exam-takeaway.** Schnorr aggregation is the cryptographic innovation that makes Taproot's privacy/efficiency story work.

**Q44. Answer: D**
- **Why D is correct.** Channel splicing (proposed 2022, deployed in major implementations 2024) lets users add or remove channel capacity with a single on-chain tx, without losing the channel's payment history or routing reputation.
- **Why others are wrong.** A: Splice does touch chain, not "without on-chain settlement." B: Cross-chain is a different thing (Atomic Swaps). C: Lightning doesn't have its own blocks.
- **Exam-takeaway.** Splicing = capacity flexibility without channel re-open friction.

**Q45. Answer: B**
- **Why B is correct.** All HD wallets generated from the same BIP-39 seed can derive multiple address types (P2PKH, P2SH-P2WPKH, P2WPKH, P2TR) via different BIP-44/49/84/86 paths. The wallet should expose this in the "Receive" workflow.
- **Why others are wrong.** A: Defeatist; the wallet handles backward compat. C: Address formats are not interchangeable that way. D: Waiting for payer upgrade misses revenue.
- **Exam-takeaway.** One seed → multiple address types via different derivation paths. Always check wallet supports the address type your payer needs.

**Q46. Answer: C**
- **Why C is correct.** The halving cycle thesis is an observational hypothesis, not a proven mechanism. Post-halving, daily issuance is cut in half while demand (institutional inflows, ETF AUM, retail) has typically grown in prior cycles. Historically, significant price appreciation has followed each of the first four halvings (2012-13, 2016-17, 2020-21, 2024-25), but correlation is not causation and past performance does not indicate future results. Answer C correctly describes the mechanics of the thesis without asserting a guaranteed outcome.
- **Why others are wrong.** A: History does not support halvings being irrelevant to supply dynamics. B: Halvings have not caused price crashes in any prior cycle. D: There is no halt at the 5th halving; they continue until approximately 2140.
- **Exam-takeaway.** Halving thesis is observational and mechanically grounded in supply reduction, but it is not a reliable price-prediction tool. *Past performance is not indicative of future results.*

**Q47. Answer: B**
- **Why B is correct.** Bitcoin Core's default "dust limit" is 546 sats for legacy outputs, 294 sats for SegWit. Below this, the UTXO is "uneconomical" to spend.
- **Why others are wrong.** A: Miner reward is the coinbase. C: Failed txs don't create UTXOs. D: Unconfirmed is mempool state, not dust.
- **Exam-takeaway.** Dust is an economic concept (fee-cost > UTXO value), not a protocol rule. Wallets should warn or refuse dust outputs.

**Q48. Answer: D**
- **Why D is correct.** SEC Rule 206(4)-2 (Custody Rule) requires investment advisers managing client crypto to use a "qualified custodian." Insurance, accounting (FASB ASU 2023-08 fair-value rule), and operational requirements similarly demand qualified custody.
- **Why others are wrong.** A: Self-custody and qualified custody both use Bitcoin's signature schemes. B: Self-custody IS technically possible at institutional scale (some firms do it). C: IRS doesn't require qualified custodians per se.
- **Exam-takeaway.** Institutional money flows through regulatory channels. Qualified custodians (Coinbase Custody, Fidelity, BitGo, Anchorage) exist precisely to satisfy 206(4)-2.

**Q49. Answer: C**
- **Why C is correct.** Coin control lets the user manually select which UTXOs to spend, giving control over fee calculation, change handling, and privacy (avoiding mixing UTXOs from different sources).
- **Why others are wrong.** A: Wallets don't set price. B: No consensus override. D: Coin control isn't mining.
- **Exam-takeaway.** Coin control is a power-user feature. Recommended for privacy-conscious users and large-balance holders.

**Q50. Answer: C**
- **Why C is correct.** Chainalysis and other forensic data show: the dominant loss vector across 2010-2025 has been phishing/malware/SIM-swap of hot wallets and exchange accounts. Quantum, 51%, and seizure are exotic by comparison.
- **Why others are wrong.** A: Theoretical; no practical break of secp256k1 yet. B: Rare; never successfully sustained against Bitcoin mainnet. D: Possible but rare relative to social-engineering attacks.
- **Exam-takeaway.** "Boring" attacks dominate. Defenses: hardware wallets, multi-sig, no support-chat sharing of seed, SIM-swap protection (eSIM, port-out PINs).

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 46-50 | Excellent, proceed to Final Mock |
| 40-45 | On track. Review wrong answers, then continue Modules 8-10 |
| 30-39 | Re-study weak modules; redo this exam in 1 week |
| <30 | Revisit Modules 1-7 in full |

---

When ready: continue to Modules 8-10, then [Final Mock Exam](./Final-Mock-Exam.md).
