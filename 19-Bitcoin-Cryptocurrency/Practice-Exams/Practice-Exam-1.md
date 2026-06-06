# Practice Exam 1 — Bitcoin & Cryptocurrency

> **Conditions:** 30 questions · 30 minutes · Closed book.
> **Pass mark:** 24/30 (~80%). The CBP real exam passes at ~70%, so aim higher in practice.
> Take this AFTER Modules 1-4. Covers White-Paper origins, Cryptography, Network & Consensus, and Wallet basics.

---

## 📝 Questions

### 1. The Bitcoin white paper *"Bitcoin: A Peer-to-Peer Electronic Cash System"* was first posted on:

A. January 3, 2009 to the bitcointalk.org forum
B. October 31, 2008 to the metzdowd.com Cryptography Mailing List
C. May 22, 2010 in a Florida pizza receipt
D. December 12, 2010 in a forum farewell post

---

### 2. The Genesis block (block 0) was mined on:

A. October 31, 2008
B. November 28, 2012
C. January 3, 2009
D. May 22, 2010

---

### 3. Which person is explicitly cited in the Bitcoin white paper's footnotes?

A. Adam Back (Hashcash)
B. David Chaum (DigiCash)
C. Nick Szabo (Bit Gold)
D. Vitalik Buterin (Ethereum)

---

### 4. Bitcoin's total supply will asymptotically approach:

A. 21 million BTC
B. Unlimited (inflation-based)
C. 100 million BTC
D. 1 billion satoshis

---

### 5. One bitcoin is divisible into how many satoshis?

A. 1,000
B. 1,000,000
C. 1,000,000,000
D. 100,000,000

---

### 6. The cryptographic curve Bitcoin uses for ECDSA signatures is:

A. secp256r1 (NIST P-256)
B. Curve25519
C. secp256k1
D. brainpoolP256r1

---

### 7. The Bitcoin address derivation macro `HASH160(x)` is defined as:

A. RIPEMD-160(SHA-256(x))
B. SHA-512(x) truncated to 160 bits
C. SHA-256(RIPEMD-160(x))
D. HMAC-SHA-256(x, "bitcoin")

---

### 8. The block subsidy *halves* every:

A. 10,000 blocks
B. 144 blocks (~1 day)
C. 210,000 blocks (~4 years)
D. 2,016 blocks (~2 weeks)

---

### 9. The difficulty adjustment period in Bitcoin is:

A. Every 2,016 blocks
B. Every 144 blocks
C. Every block
D. Every 210,000 blocks

---

### 10. Bitcoin's average target block time is:

A. 1 minute
B. 10 minutes
C. 15 seconds
D. 1 hour

---

### 11. A *coinbase transaction* is BEST described as:

A. A transaction sending BTC to the Coinbase exchange
B. A transaction that is rejected because of insufficient fee
C. A multi-sig transaction with three or more parties
D. The first transaction in every block, with no inputs, paying the block reward to the miner

---

### 12. A Bitcoin transaction's "UTXO" stands for:

A. Universal Transaction eXchange Output
B. Unspent Transaction Output
C. User-Triggered eXit Order
D. Unified Transaction eXecution Object

---

### 13. The Merkle root in a Bitcoin block header commits to:

A. All transactions in the block, via a binary hash tree
B. The miner's reward address
C. The hash of the previous block
D. The current difficulty target

---

### 14. The size of a Bitcoin block header is fixed at:

A. 40 bytes
B. 1,024 bytes
C. 80 bytes
D. 256 bytes

---

### 15. BIP-32 standardizes:

A. Mnemonic seed phrases
B. Derivation paths like `m/44'/0'/0'`
C. Schnorr signatures
D. Hierarchical Deterministic (HD) wallets via HMAC-SHA-512

---

### 16. BIP-39 standardizes:

A. The HD wallet tree structure
B. 12 or 24-word mnemonic seed phrases for backup
C. Native SegWit derivation paths
D. The Bech32 address encoding

---

### 17. A BIP-39 seed phrase typically consists of:

A. 12 or 24 English words from a fixed 2,048-word list
B. 4 PIN digits
C. 6 hex characters
D. A random base64 string

---

### 18. A "watch-only" wallet contains:

A. Private keys but no public keys
B. The full seed phrase
C. Public keys (xpub) only — can receive and view balances but cannot spend
D. Encrypted credit-card data

---

### 19. The recommended tier ratio for institutional Bitcoin custody is approximately:

A. 95% cold, 4% warm, 1% hot
B. 50% hot, 50% cold
C. 95% hot, 5% cold
D. 100% hot for operational efficiency

---

### 20. *"Not your keys, not your coins"* is the maxim associated with:

A. Hal Finney
B. Vitalik Buterin
C. Satoshi Nakamoto
D. Andreas Antonopoulos

---

### 21. The Mt. Gox failure in 2014 lost approximately how many BTC?

A. 100 BTC
B. 850,000 BTC
C. 21 million BTC
D. 50 BTC

---

### 22. The default TCP port for the Bitcoin mainnet P2P protocol is:

A. 443
B. 8080
C. 8333
D. 18333

---

### 23. A *full node* in the Bitcoin network does ALL of the following EXCEPT:

A. Validates every block since Genesis against consensus rules
B. Maintains the UTXO set
C. Relays valid transactions
D. Always mines new blocks

---

### 24. The double-SHA-256 hash construction `SHA256(SHA256(x))` is informally called:

A. SHA256d
B. HMAC-SHA-256
C. RIPEMD-SHA
D. Schnorr-256

---

### 25. The probability of two random 256-bit Bitcoin private keys colliding is astronomically low because the keyspace is roughly:

A. 2^32
B. 2^64
C. 2^128
D. 2^256

---

### 26. A digital signature in Bitcoin is created by:

A. Encrypting the message with the recipient's public key
B. Hashing the message with SHA-256
C. Encrypting the message hash with the sender's private key
D. Encrypting the message hash with the sender's public key

---

### 27. The white paper's Section 4 (*Proof-of-Work*) builds explicitly on which earlier system?

A. Adam Back's Hashcash
B. Wei Dai's b-money
C. David Chaum's DigiCash
D. Nick Szabo's Bit Gold

---

### 28. Which is NOT a property of a cryptographic hash function used by Bitcoin?

A. Deterministic (same input → same output)
B. Pre-image resistant (can't reverse output → input)
C. Collision resistant (can't find two inputs hashing to same output)
D. Reversible with the right key

---

### 29. The 2024 Bitcoin halving (block 840,000) reduced the block subsidy from:

A. 50 BTC → 25 BTC
B. 25 BTC → 12.5 BTC
C. 12.5 BTC → 6.25 BTC
D. 6.25 BTC → 3.125 BTC

---

### 30. *"One CPU one vote"* is Satoshi's phrasing for which property of Bitcoin?

A. Democratic governance via shareholder voting
B. Sybil resistance through Proof-of-Work (cost per attempt)
C. The maximum block size limit
D. The 21M supply cap

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. D    21. B
2.  C    12. B    22. C
3.  A    13. A    23. D
4.  A    14. C    24. A
5.  D    15. D    25. D
6.  C    16. B    26. C
7.  A    17. A    27. A
8.  C    18. C    28. D
9.  A    19. A    29. D
10. B    20. D    30. B
```

---

## 🎯 Detailed answer rationales

> Every question explained: why the correct answer is right and why each distractor is wrong. This is the professional-grade discernment standard — not just "B is correct," but *what concept the wrong answers confuse with*.

**Q1. Answer: B**
- **Why B is correct.** Satoshi Nakamoto posted *"Bitcoin: A Peer-to-Peer Electronic Cash System"* on October 31, 2008 to the metzdowd.com Cryptography Mailing List — a low-traffic cypherpunk forum (Nakamoto, 2008).
- **Why the others are wrong.** A: January 3, 2009 is the Genesis-block date, not the white-paper date; bitcointalk.org didn't exist yet. C: May 22, 2010 is "Pizza Day" — the first BTC-for-goods purchase. D: December 2010 is when Satoshi made his last forum post and disappeared.
- **Exam-takeaway.** Halloween 2008 = white paper. Three months later = Genesis. Memorize both dates.

**Q2. Answer: C**
- **Why C is correct.** Block 0 was mined on January 3, 2009 at 18:15:05 UTC, embedding *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"* in its coinbase field (Nakamoto, 2009).
- **Why others are wrong.** A: White-paper date. B: First halving (block 210,000). D: Pizza Day.
- **Exam-takeaway.** Genesis block date is the second of three dates every Bitcoin exam tests.

**Q3. Answer: A**
- **Why A is correct.** The white paper's footnote [6] cites Back's Hashcash (1997). Footnote [b-money] cites Wei Dai (1998). Adam Back is among the few real people explicitly cited in the white paper's footnotes.
- **Why others are wrong.** B: DigiCash predates the cypherpunks Satoshi cited but is not in the white-paper footnotes. C: Bit Gold is NOT cited in the white paper despite being the closest precursor — a source of 15 years of "Satoshi = Szabo?" speculation. D: Vitalik Buterin was 14 years old when the white paper was published; Ethereum was proposed in 2013.
- **Exam-takeaway.** Cited in white paper: Back (Hashcash), Dai (b-money), Merkle (trees). NOT cited: Szabo, Chaum.

**Q4. Answer: A**
- **Why A is correct.** Bitcoin's supply is capped at 20,999,999.9769 BTC, asymptotically — geometric series of `50 × 210,000 + 25 × 210,000 + ...` (Nakamoto, 2008, §6). Conventionally rounded to "21 million BTC."
- **Why others are wrong.** B: Bitcoin is *explicitly* deflationary by design — no inflation. C: 100M is Litecoin's cap, not Bitcoin's. D: 1 billion satoshis = 10 BTC; satoshis aren't the unit of the cap.
- **Exam-takeaway.** 21M BTC = the most-tested numerical fact in the entire Bitcoin canon.

**Q5. Answer: D**
- **Why D is correct.** 1 BTC = 100,000,000 satoshis (10^8). The smallest divisible unit, named for Satoshi Nakamoto.
- **Why others are wrong.** A: 1,000 is the millibit (mBTC). B: 1,000,000 is the microbit (μBTC / bit). C: Off by one order of magnitude — 10^9 not 10^8.
- **Exam-takeaway.** 10^8 sats per BTC. The unit is named for Satoshi Nakamoto.

**Q6. Answer: C**
- **Why C is correct.** Bitcoin uses secp256k1, specified by SECG in 2000 with the equation `y² = x³ + 7 (mod p)`.
- **Why others are wrong.** A: secp256r1 is NIST P-256 — used by TLS and Apple Secure Enclave but NOT by Bitcoin. Satoshi avoided NIST curves because of post-2007 suspicions (Dual_EC_DRBG controversy). B: Curve25519 is used by Signal, WireGuard, SSH — not Bitcoin. D: Brainpool curves are used in some EU systems, not Bitcoin.
- **Exam-takeaway.** secp256k**1** (Koblitz), not secp256**r1** (NIST random). Classic distractor.

**Q7. Answer: A**
- **Why A is correct.** `HASH160(x) = RIPEMD-160(SHA-256(x))` — SHA-256 first, then RIPEMD-160 (Antonopoulos, *Mastering Bitcoin* 2nd ed., Ch. 4).
- **Why others are wrong.** B: Truncated SHA-512 is not the construction; RIPEMD is a separate algorithm. C: Order is reversed — SHA-256 first, then RIPEMD-160. D: HMAC-SHA-256 with that key is not a Bitcoin primitive.
- **Exam-takeaway.** Defense in depth: two different hash families. If either breaks, the other still protects.

**Q8. Answer: C**
- **Why C is correct.** Halving happens every 210,000 blocks (~4 years at 10-min block times). Hardcoded in Bitcoin Core's consensus rules.
- **Why others are wrong.** A: 10,000 is arbitrary. B: 144 is blocks per day. D: 2,016 is the difficulty-adjustment period, not halving.
- **Exam-takeaway.** 210,000 blocks ≈ 4 years. Subsidy schedule: 50 → 25 → 12.5 → 6.25 → 3.125 → ...

**Q9. Answer: A**
- **Why A is correct.** Difficulty adjusts every 2,016 blocks (~2 weeks). Target is recomputed as `old × (actual_time / 1,209,600 sec)`, capped at ±4×.
- **Why others are wrong.** B: 144 is blocks per day, not the epoch length. C: Difficulty does NOT recompute every block — it is fixed within an epoch. D: 210,000 is halving, not difficulty adjustment.
- **Exam-takeaway.** 2,016 = difficulty epoch. 210,000 = halving epoch. Confusing these is the #1 mistake on CBP.

**Q10. Answer: B**
- **Why B is correct.** Average block interval is 10 minutes, enforced by difficulty adjustment (Nakamoto, 2008, §11).
- **Why others are wrong.** A: 1 minute is Litecoin's target (2.5 min on Litecoin, actually). C: 15 sec is roughly Ethereum's pre-Merge target. D: 1 hour would devastate confirmation latency.
- **Exam-takeaway.** 10 minutes is a design parameter, not a physical law — chosen to balance propagation latency vs. confirmation speed.

**Q11. Answer: D**
- **Why D is correct.** The coinbase transaction is the first tx in every block, has no inputs (placeholder with arbitrary "coinbase field" data), and pays `block subsidy + total fees` to addresses chosen by the miner.
- **Why others are wrong.** A: Pure terminology confusion with the exchange of the same name. B: A rejected transaction isn't called a coinbase tx. C: Multi-sig is a script type, not the coinbase.
- **Exam-takeaway.** Coinbase = miner's reward transaction. The coinbase field is also where the Genesis block hides *"Chancellor on brink of second bailout."*

**Q12. Answer: B**
- **Why B is correct.** UTXO = Unspent Transaction Output. Bitcoin's accounting model: balances are not stored; instead, every spendable coin is a UTXO referenced by `(txid, output_index)` (Antonopoulos, *Mastering Bitcoin*, Ch. 5).
- **Why others are wrong.** A, C, D are invented expansions.
- **Exam-takeaway.** Bitcoin uses the UTXO model. Ethereum uses an account-balance model. The distinction matters for privacy, parallelism, and statelessness.

**Q13. Answer: A**
- **Why A is correct.** Merkle root commits to all transactions via a binary tree of hashes (Merkle, 1979). Any tx change → root changes → header hash changes → invalid PoW.
- **Why others are wrong.** B: Miner reward address is in the coinbase output, not in the header. C: Previous block hash is a separate 32-byte header field. D: Difficulty bits are a separate 4-byte header field.
- **Exam-takeaway.** Merkle root lets light clients (SPV) verify a single tx with O(log N) hashes instead of the whole block.

**Q14. Answer: C**
- **Why C is correct.** 80 bytes total: version (4) + prev hash (32) + Merkle root (32) + timestamp (4) + bits (4) + nonce (4) = 80 bytes. Double-SHA-256 of these 80 bytes is the block hash.
- **Why others are wrong.** A: 40 bytes is too small. B: 1,024 is unrelated to the header. D: 256 bytes is the digest size confused with the header.
- **Exam-takeaway.** 80-byte header is THE most cited size fact on every Bitcoin certification.

**Q15. Answer: D**
- **Why D is correct.** BIP-32 (Pieter Wuille, 2012) defines hierarchical deterministic (HD) wallets that derive a tree of child keys from a single master seed via HMAC-SHA-512.
- **Why others are wrong.** A: Mnemonic phrases are BIP-39, not BIP-32. B: Derivation paths like `m/44'/0'/0'` are BIP-44 (multi-account hierarchy). C: Schnorr signatures are BIP-340.
- **Exam-takeaway.** BIP-32 = HD tree. BIP-39 = words. BIP-44 = paths. Three things, three BIPs — and exams routinely scramble them.

**Q16. Answer: B**
- **Why B is correct.** BIP-39 (Palatinus, Rusnák, Voisine, Bowe; 2013) defines mnemonic encoding of entropy into 12 or 24 English words from a 2,048-word list, with checksum bits.
- **Why others are wrong.** A: Tree structure is BIP-32. C: Native SegWit paths are BIP-84. D: Bech32 is BIP-173.
- **Exam-takeaway.** BIP-39 word lists exist in multiple languages (English, Japanese, Spanish, etc.) but the *English* list is the canonical default.

**Q17. Answer: A**
- **Why A is correct.** Standard BIP-39 seeds are 12 words (128 bits entropy) or 24 words (256 bits entropy), from a 2,048-word list. 11 bits per word.
- **Why others are wrong.** B: PINs are device-unlock, not seed-phrase encoding. C: Hex would be brittle to transcribe. D: Base64 was rejected as harder for humans to remember and verify.
- **Exam-takeaway.** 12 or 24 words. NOT 16, 18, 20, or 32 — distractors love these wrong counts.

**Q18. Answer: C**
- **Why C is correct.** A watch-only wallet holds an extended public key (xpub) and can derive receive addresses and view balances, but has no signing capability (Antonopoulos, *Mastering Bitcoin*, Ch. 5).
- **Why others are wrong.** A: Reversed — watch-only has public keys, no privates. B: Holding the seed phrase IS full custody, not watch-only. D: Unrelated to credit cards.
- **Exam-takeaway.** Hardware-wallet workflow: laptop = watch-only (xpub), hardware device = signing (xprv). This separation is the whole point of "cold storage."

**Q19. Answer: A**
- **Why A is correct.** Industry standard (CCSS Level 3, plus Coinbase/Fidelity/BitGo published custody practices) is roughly 95% cold, 4% warm, 1% hot.
- **Why others are wrong.** B: 50/50 hot/cold puts too much in hot wallets. C: Inverts the ratio — would replicate Mt. Gox's failure mode. D: 100% hot would be malpractice.
- **Exam-takeaway.** Hot/warm/cold ratio is heavily tested. "Mostly cold" is the answer when in doubt.

**Q20. Answer: D**
- **Why D is correct.** Andreas Antonopoulos popularized this maxim in *Mastering Bitcoin* (2014) and countless conference talks; it has become the rallying cry for self-custody.
- **Why others are wrong.** A: Hal Finney received the first transaction but is not the source of this phrase. B: Vitalik Buterin focuses on Ethereum-specific maxims. C: Satoshi Nakamoto wrote about trustless cash but did not coin this phrase.
- **Exam-takeaway.** Attribution matters on certification exams — Andreas Antonopoulos for self-custody slogans, Nakamoto for the white paper, Wuille for BIP-32/Schnorr/Taproot.

**Q21. Answer: B**
- **Why B is correct.** Mt. Gox lost approximately 850,000 BTC in early 2014, of which ~142,000 have since been recovered for creditor distribution (Karpelès civil filings; trustee reports 2014-2024).
- **Why others are wrong.** A: 100 BTC is trivial — would be a small hot wallet. C: 21M is total supply. D: 50 BTC was the original Genesis-era block subsidy.
- **Exam-takeaway.** Mt. Gox is the canonical "what NOT to do" custody case — single hot wallet, no segregation, no multi-sig, no audit. Every modern custody framework is a response to it.

**Q22. Answer: C**
- **Why C is correct.** Mainnet Bitcoin P2P uses TCP port 8333 (binary, no TLS). Testnet3 = 18333; Signet = 38333; Regtest = 18444.
- **Why others are wrong.** A: 443 is HTTPS. B: 8080 is HTTP-alt. D: 18333 is testnet.
- **Exam-takeaway.** 8333 = Bitcoin mainnet. CompTIA-style port-memorization questions appear on CBSA too.

**Q23. Answer: D**
- **Why D is correct.** A full node validates, relays, and stores — but *does NOT mine* unless it is also configured as a miner. Most full nodes are not miners.
- **Why others are wrong.** A, B, C are all correct full-node duties.
- **Exam-takeaway.** Miner ≠ Full Node. Many small miners delegate validation to a pool; the pool runs the full node. Module 3 of the course addresses this directly.

**Q24. Answer: A**
- **Why A is correct.** "SHA256d" is the informal name for double-SHA-256, used in Bitcoin block-header hashing and TxIDs. Originally motivated by length-extension-attack resistance.
- **Why others are wrong.** B: HMAC requires a key parameter. C: Made-up. D: Schnorr is a signature scheme, not a hash.
- **Exam-takeaway.** SHA-256 used twice = SHA256d = block-hash and TxID construction in Bitcoin.

**Q25. Answer: D**
- **Why D is correct.** Private keys are 256-bit numbers, so the keyspace is ~2^256 ≈ 1.158 × 10^77, comparable to the count of atoms in the observable universe (~10^80).
- **Why others are wrong.** A, B, C all undercount by 32-200+ bits — would dramatically reduce security.
- **Exam-takeaway.** 256-bit keyspace is so large that random collision probability is computationally zero. This is the security foundation of "32 random bytes can hold a trillion dollars."

**Q26. Answer: C**
- **Why C is correct.** The sender computes the message hash, then *signs* (informally: "encrypts the hash with the private key"). Verifier recomputes the hash and uses the sender's public key to verify.
- **Why others are wrong.** A: Encrypting with the recipient's public key is *confidentiality*, not signing. B: Hashing alone provides integrity but no sender binding. D: Public keys can't sign; only private keys can.
- **Exam-takeaway.** Mnemonic: "Sign with PRIVATE, verify with PUBLIC. Encrypt with their PUBLIC, decrypt with my PRIVATE."

**Q27. Answer: A**
- **Why A is correct.** §4 explicitly uses Hashcash (Adam Back, 1997): SHA-256 with a target-zero-bits search. The white paper's reference [6] points to Back.
- **Why others are wrong.** B: b-money is cited but for the network model, not the PoW mechanism. C: DigiCash uses blind signatures, not PoW. D: Bit Gold is the closest *idea* match but is not cited.
- **Exam-takeaway.** PoW source = Hashcash. The network/economic model draws from b-money. Memorize both attributions.

**Q28. Answer: D**
- **Why D is correct.** Cryptographic hashes are *one-way by design* — there is no "key" that reverses them. Reversibility would destroy pre-image resistance.
- **Why others are wrong.** A, B, C are textbook hash function properties (Stinson, *Cryptography: Theory and Practice*, 4th ed.).
- **Exam-takeaway.** "Hashing is reversible" is always wrong on certification exams. Hashing is not encryption.

**Q29. Answer: D**
- **Why D is correct.** The April 19, 2024 halving (block 840,000) reduced the subsidy from 6.25 BTC to 3.125 BTC. Daily issuance dropped from ~900 to ~450 BTC.
- **Why others are wrong.** A: 50 → 25 was the 2012 halving. B: 25 → 12.5 was 2016. C: 12.5 → 6.25 was 2020.
- **Exam-takeaway.** Halving timeline: 2012, 2016, 2020, 2024, ~2028, ~2032. Subsidies: 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125.

**Q30. Answer: B**
- **Why B is correct.** Satoshi's phrase "one CPU one vote" describes how PoW makes Sybil attacks expensive: votes (block proposals) require burning CPU work, so creating many fake identities doesn't help unless you also pay the energy cost (Nakamoto, 2008, §4).
- **Why others are wrong.** A: There's no shareholder vote — governance is emergent. C: Block-size limits are separate consensus rules. D: 21M cap is in §6, not §4.
- **Exam-takeaway.** The modern formulation is "one joule one vote" — ASICs dominate, so the unit of voting is energy, not CPU cycles. This shift is the central tension of Module 5.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 28-30 | Excellent — proceed to Practice Exam 2 |
| 24-27 | On track. Review wrong answers, then continue Modules 5-7 |
| 18-23 | Re-study weak modules; redo this exam in 3 days |
| <18 | Revisit Modules 1-4 in full |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered it (white-paper origins = M1; crypto = M2; network = M3; wallets = M4).
2. Re-read that module's Reading.md section.
3. Add a flashcard for the concept.
4. Try the question again in 3 days.

---

When ready: continue to Modules 5-7, then [Practice Exam 2](./Practice-Exam-2.md).
