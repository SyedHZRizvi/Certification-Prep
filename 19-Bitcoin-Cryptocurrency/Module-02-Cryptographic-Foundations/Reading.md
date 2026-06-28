# Module 2: Cryptographic Foundations 🔐

> **Why this module matters:** You cannot reason about Bitcoin without four mathematical objects: hash functions, elliptic-curve digital signatures, Merkle trees, and (newly, since 2021) Schnorr signatures over the same curve. Every later module of this course leans on this module's vocabulary. Once you see how a Bitcoin address is built bottom-up from 32 random bytes to a Bech32 string the rest of Bitcoin's design looks inevitable.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1 of this course](../Module-01-Bitcoin-White-Paper-Origins/Reading.md), knowing what Bitcoin is and where it came from
> - Basic discrete math: modular arithmetic at a high-school level
> - Comfort with binary, hexadecimal, and the idea that a "key" can be a very large number
> - Cross-course: [09-CompTIA-Security-Plus Module-02 (Cryptography & PKI (Public Key Infrastructure))](../../09-CompTIA-Security-Plus/Module-02-Cryptography-PKI/Reading.md) is the security-engineer's parallel, if you finished that, this module will be a smooth extension. If not, you'll learn the relevant primitives here.
>
> No prior cryptography coursework is required, but if you've never seen the words "elliptic curve" or "RIPEMD-160" they're going to appear about 60 times in the next 4,000 words.

---

## ☕ A Story: The 32 Random Bytes That Anchor a Trillion Dollars

In **November 2010**, a Bitcoin developer named Jeff Garzik posted a thought experiment to the bitcointalk.org forum. *"If you generate a Bitcoin private key as a number between 1 and 2^256, what is the probability that someone, somewhere, has already generated the same number, and could spend your coins?"*

The math is short. **2^256** is approximately **1.158 × 10^77**. The number of atoms in the observable universe is about **10^80**. The probability of collision under any realistic generation rate is so close to zero that physicists struggle to find an analogy that isn't insulting.

The thought experiment becomes profound when you realize the implication: **a Bitcoin private key is 32 random bytes.** Not a record in a database. Not a username + password. Not a contract with a custodian. Just a 256-bit integer that has *never been seen by anyone else* because the search space is unfathomably large.

Generate one on your laptop. Print it on paper. Memorize it. Burn the paper. As long as your laptop wasn't compromised and you remembered correctly, you control whatever bitcoin is sent to that key's corresponding address, forever, with no permission required from any bank, government, or platform.

That is the cryptographic atom of Bitcoin. The rest of this module is the chemistry that builds usable molecules addresses, transactions, blocks from that atom.

---

## 🧱 The Four Cryptographic Primitives

Bitcoin uses **four** cryptographic primitives. Memorize them; every later module references them.

| # | Primitive | What it gives Bitcoin | Where it's used |
|---|-----------|----------------------|-----------------|
| 1 | **Cryptographic hash functions** (SHA-256, RIPEMD-160) | Integrity, address derivation, PoW, Merkle trees | Everywhere |
| 2 | **Public-key cryptography** (elliptic curves over secp256k1) | Ownership, signatures | Every transaction, every address |
| 3 | **Digital signatures** (ECDSA, Schnorr) | Authentication + non-repudiation | Every spend |
| 4 | **Merkle trees** | Compact commitment to a set; SPV proofs | Block headers, future Taproot scripts |

🎯 **MEMORIZE THIS.** A common CBP and CBSA question is *"which primitive does Bitcoin NOT directly use?"* with distractors like *RSA, AES (Advanced Encryption Standard), Diffie-Hellman, ZKPs, Pedersen commitments.* Answer: Bitcoin doesn't directly use any of those at the protocol layer (though some appear in Lightning, Liquid, and L2s, Module 7).

---

## 🔨 Primitive #1, Cryptographic Hash Functions

A cryptographic hash function takes arbitrary input → fixed-length output (the **digest**), with four properties:

| Property | Plain English | Why Bitcoin needs it |
|----------|---------------|----------------------|
| **Deterministic** | Same input → same output | Every node computes the same TxID and block hash |
| **Pre-image resistant** | Given output, can't easily find input | Stops attackers from forging private keys from public addresses |
| **Second pre-image resistant** | Given input A, can't find input B that hashes to same output | Stops swapping a tx for a different one with the same TxID |
| **Collision resistant** | Can't find any two inputs that hash to the same output | Stops Merkle-tree manipulation |

### The Bitcoin hash zoo

| Hash | Output size | Standard | Where Bitcoin uses it |
|------|-------------|----------|------------------------|
| **SHA-256** | 256 bits (32 bytes) | NIST FIPS 180-4 | Block headers, TxIDs, PoW target, Merkle roots, double-SHA in many places |
| **RIPEMD-160** | 160 bits (20 bytes) | ISO/IEC 10118-3 | Inside `HASH160` for shorter addresses |
| **HMAC-SHA512** | 512 bits | NIST FIPS 198-1 | BIP-32 child-key derivation (Module 4) |

🚨 **Trap.** Bitcoin uses **double-SHA256** in many places: `SHA256(SHA256(x))`. This is sometimes called **SHA256d**. The motivation (originally) was length-extension-attack resistance, though that turned out to not be strictly necessary; it stuck for compatibility.

### The `HASH160` macro (memorize this)

A Bitcoin address is built using this composite:

```
HASH160(x) = RIPEMD160( SHA256( x ) )
```

That's 32 bytes → 32 bytes (SHA256) → 20 bytes (RIPEMD160). The 20-byte output is what most modern addresses commit to.

🎯 **Exam tip.** The combination is sometimes called "HASH160" and sometimes "Bitcoin Hash 160." Both refer to the same thing. CBP asks: "What hash function pair is used to derive a Bitcoin address from a public key?" Answer: SHA256 followed by RIPEMD160.

### Why two different hashes?

The answer is **defense in depth**. If a future flaw is found in SHA-256, an attacker would also need a flaw in RIPEMD-160 to fully compromise address derivation. This is a deliberate Satoshi design choice, the same logic later justified Bitcoin's use of *both* ECDSA *and* Schnorr post-Taproot (different attack surfaces).

---

## 🧮 Primitive #2, Public-Key Cryptography (Elliptic Curves)

Public-key cryptography (Diffie & Hellman, *New Directions in Cryptography*, IEEE Trans. Info. Theory, 1976) is the breakthrough that makes Bitcoin possible. The intuition: there exist mathematical operations that are easy in one direction and infeasible in the other.

### The number-line analogy

Imagine an integer ladder where you can multiply but not divide. You start with a number `G` (the generator). You compute `G × k` where `k` is your secret integer. You publish `G × k`. An attacker has `G` and `G × k`. Can they recover `k`? **In ordinary integers, yes division works.** **On an elliptic curve, no there is no efficient "division."**

That is the **Elliptic Curve Discrete Logarithm Problem (ECDLP)**. Bitcoin's entire ownership model depends on its hardness.

### secp256k1, Bitcoin's specific curve

Satoshi chose the **secp256k1** curve, specified by the Standards for Efficient Cryptography Group (SECG) in 2000. Its equation:

```
y² = x³ + 7   (mod p)
```

Where `p = 2^256 − 2^32 − 977`, a specific 256-bit prime that gives the curve nice computational properties.

| Parameter | Value (approx.) |
|-----------|-----------------|
| Curve | secp256k1 |
| Field size | ~2^256 |
| Curve order `n` | ~2^256 (slightly less) |
| Bits of security | ~128 |

🚨 **Trap on the exam.** Bitcoin uses secp256k**1**, NOT secp256**r1** (also called NIST P-256, which is what TLS (Transport Layer Security), smart cards, and Apple's Secure Enclave use). Satoshi explicitly avoided NIST curves because of post-2007 suspicions about NIST-curve parameter selection (the "Dual_EC_DRBG affair"). This is a common confusion on CBSA.

### From private key → public key → address

```
private_key  ←  32 random bytes (a number in [1, n−1])

public_key   ←  private_key × G        (scalar multiplication on secp256k1)
              = 65-byte uncompressed form (0x04 || X || Y)
                or
              = 33-byte compressed form  (0x02 || X  if Y even,
                                          0x03 || X  if Y odd)

pubkey_hash  ←  HASH160(public_key)
              = 20 bytes

address      ←  Base58Check(version_byte || pubkey_hash)            [Legacy: starts with "1"]
              or
              = Base58Check(0x05 || P2SH_script_hash)                 [P2SH: starts with "3"]
              or
              = Bech32(hrp || witness_version || pubkey_hash)         [SegWit: starts with "bc1q"]
              or
              = Bech32m(hrp || 0x01 || taproot_output_key)            [Taproot: starts with "bc1p"]
```

🎯 **MEMORIZE THIS.** Bitcoin private key → public key uses **secp256k1 ECDSA scalar multiplication**. From public key → address adds **HASH160 + encoding**. Encoding choice determines the address format (legacy `1...`, P2SH `3...`, SegWit `bc1q...`, Taproot `bc1p...`).

### Address-prefix cheat table

| Prefix | Format | Description | Activated |
|--------|--------|-------------|-----------|
| `1...` | P2PKH (Base58Check) | Legacy Pay-to-Public-Key-Hash | Day 1 |
| `3...` | P2SH (Base58Check) | Pay-to-Script-Hash; commonly wraps SegWit | BIP-16, April 2012 |
| `bc1q...` | P2WPKH/P2WSH (Bech32) | Native SegWit | Aug 2017 (BIP-141, BIP-173) |
| `bc1p...` | P2TR (Bech32m) | Taproot | Nov 2021 (BIP-341, BIP-350) |

Module 6 returns to each in protocol depth.

---

## ✍️ Primitive #3, Digital Signatures (ECDSA + Schnorr)

A digital signature proves: *"the holder of private key `sk` saw and approved message `m`, and the signature can be publicly verified using the corresponding public key `pk`."* It provides:

- **Authentication**, only the holder of `sk` could produce a valid signature
- **Integrity**, any change to `m` invalidates the signature
- **Non-repudiation**, the signer cannot later deny having signed (cryptographically)

### ECDSA (Elliptic Curve Digital Signature Algorithm)

Specified in **NIST FIPS 186-5** (latest 2023; original 186-1 from 1998). Bitcoin uses ECDSA over secp256k1.

The signing procedure (simplified):

1. Compute `z = HASH(m)`
2. Generate a random nonce `k` ∈ [1, n−1]
3. Compute the point `(x, y) = k × G` on the curve
4. Set `r = x mod n`
5. Set `s = k^{-1} × (z + r × sk) mod n`
6. Signature = `(r, s)`

🚨 **Trap.** Step 2's `k` MUST be **uniformly random and used only once per signature**. If `k` is ever reused or predictable, the private key can be recovered from two signatures. This is exactly how Sony's PS3 ECDSA implementation was famously broken in 2010, they used a constant `k`.

**Bitcoin Improvement Proposal (BIP) 32** and most modern wallets use **deterministic-ECDSA per RFC 6979**, derives `k` from `sk` and `m` using HMAC, so it's reproducible per (private key, message) pair but unguessable to outsiders.

### Schnorr signatures (BIP-340, activated November 2021 with Taproot)

For 30+ years cryptographers preferred Schnorr signatures (Claus Schnorr, *Journal of Cryptology*, 1991) over ECDSA. Why didn't Bitcoin use Schnorr from day 1? Because Schnorr was patented (until 2008) and ECDSA was an established NIST standard with widely-deployed libraries.

Schnorr's advantages, all relevant to Bitcoin:

| Property | What it gives | Bitcoin use |
|----------|---------------|--------------|
| **Linearity** | `sig(A) + sig(B) = sig(A+B)` (over public keys + signatures) | Multi-signature aggregation (MuSig, MuSig2) |
| **Smaller signatures** | 64 bytes vs ECDSA's ~71 bytes typical | Block-space efficiency |
| **Faster batch verification** | Verifying 1,000 sigs together is faster than 1,000 individually | Full-node sync acceleration |
| **Privacy** | Multi-sig spend looks identical to single-sig spend on-chain | Module 9 institutional implications |

🎯 **MEMORIZE THIS.** Schnorr was activated in Bitcoin via **BIP-340**, packaged with Taproot in **BIP-341** and Tapscript in **BIP-342**. The activation block was **709,632** (November 2021). Authors: Pieter Wuille, Jonas Nick, Tim Ruffing.

### Signature-size table (matters for fee math)

| Signature scheme | Size (typical) | Where it appears |
|------------------|----------------|------------------|
| ECDSA DER-encoded | 71–73 bytes | Pre-Taproot Bitcoin |
| Schnorr (BIP-340) | 64 bytes | Taproot Bitcoin |
| ECDSA-recovery (Ethereum) | 65 bytes | EVM chains (not Bitcoin) |

---

## 🌳 Primitive #4, Merkle Trees

A **Merkle tree** (Ralph Merkle, Stanford PhD thesis, 1979) is a binary tree where every non-leaf node is the cryptographic hash of its children.

```
            Root (committed in block header)
              /                       \
           H_AB                     H_CD
          /     \                  /     \
       H_A      H_B             H_C      H_D
        |        |               |         |
       Tx1      Tx2             Tx3      Tx4
```

If you change Tx2 (even one bit), `H_B` changes → `H_AB` changes → Root changes → the block hash changes → the PoW becomes invalid. Therefore **the Merkle root in the block header is a tamper-evident commitment to every transaction in the block**.

### Why Merkle trees in Bitcoin?

Two reasons, both load-bearing:

1. **SPV (Simplified Payment Verification).** A light wallet wants to prove `Tx2` is in a block without downloading the whole block. The full node sends just `Tx2`, `H_A`, and `H_CD`. The light wallet computes `H_B = HASH(Tx2)`, then `H_AB = HASH(H_A || H_B)`, then `Root = HASH(H_AB || H_CD)`. If the result matches the Merkle root in the (already-verified) block header, the proof is valid. Cost: **log₂(N) hashes** where N = number of transactions.
2. **Block-header compactness.** The block header is only **80 bytes** regardless of how many transactions are in the block, because everything below the Merkle root is summarized.

### Merkle-proof math

For a block with N transactions, an SPV proof is ~`32 × log₂(N)` bytes. For N = 1,000,000 transactions: ~640 bytes. For N = 1 billion: ~960 bytes. **Logarithmic scaling is why SPV works at any practical block size.**

🎯 **Exam tip.** The Merkle-tree origin is Ralph Merkle, 1979 cited as "Merkle (1979)" or "Merkle tree" or "hash tree" on exams. Sometimes spelled "Merkel" (German chancellor) wrong on exam.

### Taproot's Merkelized Alternative Script Trees (MAST)

Taproot uses Merkle trees again, this time to hide all spend paths except the one actually used. A multi-sig that *could* be spent via 10 different scripts only reveals the one that was used. Module 6 returns to this.

---

## 🧠 How the Primitives Combine (the One Diagram to Memorize)

```
[32 random bytes]  =  Private Key  (sk)
         │
         │  × G  (scalar multiplication on secp256k1)
         ▼
   Public Key  (pk = 33 or 65 bytes)
         │
         │  HASH160 = RIPEMD160(SHA256(pk))
         ▼
   Public-Key Hash  (20 bytes)
         │
         │  Base58Check / Bech32 / Bech32m
         ▼
   Bitcoin Address  ("1..."  /  "3..."  /  "bc1q..."  /  "bc1p...")


To spend funds locked to that address:

   Sign  (Hash(transaction), sk)  →  Signature
   Verify  (Hash(transaction), pk, Signature)  →  True / False


Inside each block:

   [Tx1, Tx2, ..., TxN]  →  Merkle Tree  →  Merkle Root
                                                │
                                                ▼
                  Block Header (80 bytes)  =  {version, prev_block_hash, MERKLE_ROOT, timestamp, bits, nonce}
                                                │
                                                │  double-SHA-256
                                                ▼
                       Block Hash  →  compared against target  →  PoW valid?
```

🎯 **MEMORIZE THIS.** That single diagram is the entire cryptographic foundation of Bitcoin. Be able to redraw it from memory.

---

## 💼 Case Study, Heartbleed (CVE-2014-0160) and the Question Bitcoin Dodged

**Situation.** On **April 7, 2014**, Codenomicon and a Google researcher independently disclosed **Heartbleed**, a buffer-over-read vulnerability in OpenSSL's TLS heartbeat extension. An attacker could read arbitrary 64KB chunks of an OpenSSL-protected server's RAM, including **TLS private keys**, session cookies, and any data in memory. OpenSSL was used by an estimated **17%** of all secure web servers globally.

**Decision.** Within weeks, virtually every TLS-using site rotated certificates, revoked old ones, forced password resets, and updated to OpenSSL 1.0.1g. Cloudflare ran a public challenge, security researchers were able to retrieve private keys from a vulnerable test server using only Heartbleed reads, confirming the worst-case interpretation.

**Outcome.** Heartbleed was not a flaw in TLS itself, in RSA, in AES, or in SHA-256. It was a flaw in **a specific implementation** of one TLS feature. Every cryptographic primitive remained sound. The lesson for Bitcoin was profound and indirect: *Bitcoin runs almost no TLS in its consensus path.* The Bitcoin Core node-to-node protocol is a plaintext binary protocol on port 8333; the wallet-to-node communication is HTTP (Hypertext Transfer Protocol)/JSON or the more modern PSBT files. Bitcoin's cryptographic surface area is dramatically smaller than a typical TLS-using web service.

**Lesson for the exam / for practitioners.** Two principles:

1. **Cryptography is a defense-in-depth game.** Bitcoin's choice to use SHA-256 *and* RIPEMD-160 *and* secp256k1 (not a NIST curve) is the same logic that Heartbleed validated: don't put all your trust in one library, one curve, one algorithm.
2. **The implementation matters as much as the algorithm.** Heartbleed was an OpenSSL bug; the algorithms were fine. The 2010 Sony PS3 ECDSA breach was an ECDSA-with-reused-nonce bug; the algorithm was fine. Modern Bitcoin wallets use deterministic-ECDSA (RFC 6979), hardware-isolated key storage (Coldcard, Trezor, Ledger), and audited libraries (libsecp256k1) because *the math being right isn't sufficient*. This is exactly the discipline tested by the CCSS standard (Module 9).

**Discussion (Socratic).**
- Q1: If Heartbleed had affected Bitcoin Core (rather than OpenSSL), what would the recovery have looked like? Map the response timeline against the CVE-2010-5139 case study from Module 1.
- Q2: Why did Satoshi explicitly avoid NIST curves (P-256) in favor of secp256k1, given that NIST curves are widely deployed and audited? What signal does this send about the threat model?
- Q3: How does Bitcoin's intentionally minimal TLS surface affect the security argument for institutional Bitcoin custody? When would a custodian *want* TLS in the path despite Bitcoin not needing it?

---

## 🚪 Where Bitcoin DOES NOT Use Familiar Cryptography

Common CBSA traps include claims Bitcoin uses X when it doesn't.

| Familiar primitive | Used in Bitcoin? | Where you'll see it instead |
|---|---|---|
| **RSA** | ❌ No | TLS, email (PGP/GPG), SSH (Secure Shell) legacy |
| **AES** | ❌ Not at consensus layer | Wallet-file encryption (BIP-38) is the only standardized AES usage; otherwise hot-wallet software may encrypt-at-rest, but it's not consensus |
| **Diffie-Hellman key exchange** | ❌ Not at consensus | TLS handshakes outside Bitcoin |
| **HMAC** | ✅ HMAC-SHA512 for BIP-32 child-key derivation |  |
| **PBKDF2** | ✅ For BIP-39 seed → wallet seed |  |
| **Zero-Knowledge Proofs (zk-SNARKs, zk-STARKs)** | ❌ Not in Bitcoin consensus | Zcash, Mina, Ethereum L2s |
| **Pedersen Commitments** | ❌ Not in Bitcoin mainchain | Confidential Transactions on Liquid sidechain |
| **Threshold signatures (multi-party computation)** | ❌ Not in Bitcoin consensus | Used by MPC custodians off-chain (Module 9) |
| **Ring signatures** | ❌ Not in Bitcoin | Monero |
| **CoinJoin** | ✅ Application-layer (Wasabi, JoinMarket, Whirlpool) | Not a consensus rule, privacy-app feature |

🎯 **Exam tip.** When asked "does Bitcoin use Diffie-Hellman?" the answer is "not in consensus." Some Lightning Network constructions internally use ephemeral-DH for onion routing (Module 7), but this is at L2, not L1.

---

## 🔢 The Math, Quantitatively

### Private-key search-space sanity check

Bitcoin private keys are integers in `[1, n−1]` where `n ≈ 2^256`.

| Quantity | Value |
|----------|-------|
| Bitcoin private-key search space | ~2^256 ≈ 1.16 × 10^77 |
| Atoms in observable universe | ~10^80 |
| Grains of sand on Earth (rough) | ~7 × 10^18 |
| Probability of collision generating 1 trillion keys | ~10^{-53} |

🎯 **MEMORIZE THIS.** *"Private keys are 256-bit integers; the search space exceeds the number of atoms in a million observable universes."* Useful pitch line; reassures non-technical stakeholders.

### Hash-rate sanity check (preview of Module 5)

| Quantity | 2024–2026 value |
|----------|-----------------|
| Bitcoin global hashrate | ~600–700 EH/s |
| EH/s | 10^18 hashes/sec |
| Hashes computed to mine one block (expected) | ~D × 2^32 where D = current difficulty |
| Energy per hash (top-tier ASIC, 2026) | ~14 J/TH = 14 × 10^{-12} J/hash |

These numbers will be unpacked in Module 5; mention them here so you know the order of magnitude.

---

## 🏛️ Frameworks Princeton + MIT Drill

### The "Why these primitives?" framework (Narayanan et al., 2016)

When asked *"why does Bitcoin use SHA-256 / RIPEMD-160 / secp256k1 / ECDSA?"*, Princeton's textbook gives a four-pillar answer:

| Pillar | The argument |
|--------|--------------|
| **Maturity** | All four had >10 years of public cryptanalysis when Satoshi chose them |
| **Performance** | All four had widely-deployed, hand-optimized implementations on commodity hardware |
| **Defense in depth** | Two different hash families (SHA + RIPEMD); a curve outside the NIST suspicions |
| **Patent freedom** | All four were unencumbered by 2008 (Schnorr was patent-encumbered until 2008, hence ECDSA in v0.1) |

### The "Algorithm vs implementation" framework (Schneier, *Cryptography Engineering*, 2010)

Bruce Schneier's perennial maxim: *"It's not enough to have good cryptography. You need good cryptography correctly implemented in good systems."* This framework drives every CCSS audit (Module 9) and is implicit in the Heartbleed lesson above.

---

## 🚨 Common Misconceptions To Unlearn

| Misconception | Reality |
|---|---|
| "Bitcoin uses RSA" | No. ECDSA over secp256k1. |
| "Bitcoin uses AES for transactions" | No. AES isn't in the consensus path. |
| "secp256k1 is a NIST curve" | No. It's a SECG curve. Satoshi avoided NIST curves. |
| "Quantum computers will break Bitcoin tomorrow" | A sufficiently large fault-tolerant quantum computer would break ECDSA via Shor's algorithm. As of 2026, no such computer exists. The protocol can upgrade to post-quantum signatures via a soft fork; the timeline of risk is ~10–20 years per most cryptographers' estimates. |
| "Reusing addresses is fine" | Privacy-degrading (chain analysis) and pre-Taproot leaked the full public key. Best practice is fresh address per receive. |
| "SHA-1 and SHA-256 are similar" | Different design families. SHA-1 has demonstrated collisions (Google SHAttered, 2017); SHA-256 has none. SHA-1 is deprecated everywhere; SHA-256 is in active use. |
| "Bitcoin addresses are random strings" | No. They encode a cryptographic public-key hash plus a checksum. Mistyping changes the checksum and the address is rejected. |
| "If you publish your public key, your private key is exposed" | No. The ECDLP makes recovering `sk` from `pk` infeasible. |

---

## ⚠️ Exam Traps to Watch For

1. **secp256k1 vs secp256r1.** Bitcoin uses **k1**. NIST P-256 = **r1**. CBSA often plants P-256 as a wrong answer.
2. **HASH160 composition.** RIPEMD160(SHA256(x)), SHA256 first, RIPEMD160 second. Swapping order is a trap.
3. **Schnorr activation date.** **November 2021** (block 709,632), via BIP-340 + 341 + 342. Distractors include 2017 (SegWit) and 2024 (post-halving).
4. **ECDSA nonce reuse.** Reusing `k` = private-key disclosure. CBSA exam loves to test this.
5. **SHA-256 vs SHA-3.** Bitcoin uses SHA-256 (SHA-2 family). SHA-3 (Keccak) is *not* used by Bitcoin. (Ethereum uses Keccak-256, often confused with SHA-3.)
6. **Merkle tree purpose.** SPV proofs + block-header compactness. NOT used for "hiding transactions" (that's confidential transactions / Pedersen commitments, not in Bitcoin mainchain).
7. **"Bitcoin uses a one-way function" question.** Hash functions are one-way; signatures are two-way (sign with private key, verify with public). The pair is what's needed.
8. **Quantum.** Grover's algorithm halves hash security; Shor's algorithm breaks ECDSA. SHA-256 effective security drops from 256 to 128 bits under Grover still secure. ECDSA effective security drops from 128 to ~0 under Shor needs migration when quantum scales.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **SHA-256** | NIST FIPS 180-4 hash function. 256-bit output. Bitcoin's workhorse. |
| **RIPEMD-160** | ISO/IEC 10118-3 hash. 160-bit output. Used inside HASH160. |
| **HASH160** | `RIPEMD160(SHA256(x))`. Used to derive address commitments. |
| **secp256k1** | Bitcoin's elliptic curve. y² = x³ + 7 (mod p). |
| **ECDSA** | Elliptic Curve Digital Signature Algorithm. NIST FIPS 186-5. Bitcoin's original signature scheme. |
| **Schnorr (BIP-340)** | Linear, aggregatable signature scheme. Activated Nov 2021 with Taproot. |
| **Public key** | A point on the curve. 33 bytes compressed or 65 bytes uncompressed. |
| **Private key** | A 256-bit integer in [1, n−1]. 32 bytes. |
| **Generator (G)** | The "starting point" on secp256k1 used in pubkey derivation. |
| **Curve order (n)** | ~2^256. Number of points on the curve. |
| **ECDLP** | Elliptic Curve Discrete Logarithm Problem. The hard problem securing ECDSA. |
| **Merkle tree** | Binary tree where every non-leaf is the hash of its children. |
| **Merkle root** | The top hash. Committed in the block header. |
| **Merkle proof** | log₂(N) hashes that prove a transaction is in a block. |
| **SPV** | Simplified Payment Verification. Verify Tx inclusion using block headers + Merkle proofs. |
| **Base58Check** | Encoding for legacy + P2SH addresses. Includes checksum. |
| **Bech32 / Bech32m** | BIP-173 / BIP-350 encodings for SegWit / Taproot addresses. |
| **HMAC-SHA512** | Hash-based MAC used in BIP-32 child-key derivation. |
| **PBKDF2** | Password-Based Key Derivation Function. Used in BIP-39 seed→key. |
| **RFC 6979** | Deterministic ECDSA nonce derivation. Prevents nonce-reuse disasters. |

---

## ✅ Module 2 Summary

You now know:

- 🔨 The four cryptographic primitives Bitcoin uses (hashes, public-key crypto, signatures, Merkle trees)
- 🧱 The exact composition of `HASH160 = RIPEMD160(SHA256(x))`
- 🧮 Why Bitcoin uses **secp256k1** (a SECG curve, not a NIST curve) and the ECDLP hardness argument
- ✍️ How ECDSA signing works, why nonce reuse is catastrophic, and what RFC-6979 fixes
- ✨ What Schnorr signatures add: linearity, aggregation, smaller size, privacy, activated **November 2021** via BIP-340
- 🌳 What Merkle trees are (Merkle, 1979), how they enable SPV, and why a block header stays 80 bytes regardless of N
- 🚪 What Bitcoin does NOT use: RSA, AES at consensus, NIST curves, Diffie-Hellman in consensus, ZKPs in mainchain
- 💼 The Heartbleed (CVE-2014-0160) case study and what it teaches about defense in depth

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md), particularly Computerphile on hash functions and 3Blue1Brown on elliptic curves
2. ✏️ Take the [Quiz](./Quiz.md), aim for 20/24 minimum
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Bitcoin Network & Consensus](../Module-03-Bitcoin-Network-Consensus/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 3 uses Merkle roots and block-header hashing to define consensus; Module 4 builds wallets on top of BIP-32 (which uses HMAC-SHA512 from this module); Module 5 quantifies how much SHA-256 work secures the chain; Module 6 explains how Schnorr makes Taproot scripts efficient; Module 7 uses HTLCs (cryptographic conditional payments) for Lightning.
> - Cross-course: `09-CompTIA-Security-Plus` Module-02 (Cryptography & PKI) covers the same primitives in a security-engineering frame, the two modules reinforce each other.
> - Practice: Practice Exam 1 has 5–7 questions drawing from this module (hash composition, secp256k1 vs P-256, ECDSA nonce traps). Final Mock has a cryptography section explicitly.

---

## 💬 Discussion, Socratic prompts

Use these as journal prompts, study-group questions, or interview-prep drills.

1. **The NIST-curves question.** Satoshi avoided NIST P-256 in favor of secp256k1. After the 2013 Snowden revelations and the Dual_EC_DRBG affair, this looked prescient. Construct the strongest argument that the choice was prescient AND the strongest argument that it was paranoid over-engineering. How does your answer affect your level of trust in *future* protocol decisions by the Bitcoin Core developer set?
2. **The quantum-computing roadmap.** ECDSA over secp256k1 is broken by a sufficiently large fault-tolerant quantum computer running Shor's algorithm. Cryptographers estimate the threshold at perhaps 2,000–4,000 logical qubits with full error correction. As of 2026, IBM, Google, IonQ, and PsiQuantum are all under 1,000 noisy qubits. Should Bitcoin start migrating to post-quantum signatures now (Falcon, Dilithium, SPHINCS+)? What's the strongest argument for "wait" and the strongest for "migrate now"?
3. **The "reused key" debate.** Best practice is one address per receive. In practice, exchanges, donation campaigns, and many lightning gateways reuse addresses. Construct the argument that this is fine, AND the argument that it's a security problem. Where exactly is the threshold?
4. **The Schnorr trade-off.** Schnorr signatures (BIP-340) are smaller, faster, batch-verifiable, and aggregatable. Why did Bitcoin wait 12 years (2009→2021) to activate them? Defend the answer that the wait was *correct* given the social-coordination cost of soft forks.
5. **Defense in depth as a tax.** Bitcoin uses SHA-256 *and* RIPEMD-160 in address derivation, which costs slightly more compute than using one hash twice. Estimate the global energy cost of this paranoia over a decade. Is the defense-in-depth worth it? (Use the back-of-envelope hash-rate numbers from Module 5 to ground your estimate.)

There are no "official" answers, defend your reasoning with specifics. Strong responses cite at least one named cryptographer (Merkle, Schnorr, Diffie-Hellman, Schneier), one named case (Heartbleed, Sony PS3 ECDSA, SHAttered SHA-1), and one specific BIP or NIST standard.

---

## 📚 Further Reading (Optional)

- 📖 **Diffie & Hellman, "New Directions in Cryptography"** (*IEEE Trans. Info. Theory*, 1976). The 8-page paper that started public-key cryptography. Free on Diffie's homepage.
- 📖 **Merkle, Ralph, "Secrecy, Authentication, and Public Key Systems"** (Stanford PhD thesis, 1979). Introduces Merkle trees. Free PDF online.
- 📖 **Schnorr, Claus-Peter, "Efficient signature generation by smart cards"** (*Journal of Cryptology*, 1991). The original Schnorr signature paper.
- 📖 **Antonopoulos *Mastering Bitcoin* 2e** Chapter 4 (Keys & Addresses) and Chapter 5 (Wallets).
- 📖 **Narayanan et al. *Bitcoin and Cryptocurrency Technologies*** Chapters 1 (Crypto basics) and 4 (How to Store and Use Bitcoins).
- 📖 **Boneh & Shoup, *A Graduate Course in Applied Cryptography*** (free at toc.cryptobook.us). The free academic textbook on modern cryptography.
- 📖 **Schneier, Ferguson, Kohno, *Cryptography Engineering*** (Wiley, 2010). Practitioner's classic on real-world crypto.
- 📰 **BIP-340 / BIP-341 / BIP-342** at github.com/bitcoin/bips. Wuille, Nick, Ruffing, Towns, Schnorr + Taproot + Tapscript.
- 📰 **NIST FIPS 186-5** (Digital Signature Standard, 2023). Free at csrc.nist.gov.
- 📰 **RFC 6979** (Deterministic ECDSA, 2013). Free at tools.ietf.org.
- 🎓 **Stanford CS251, *Cryptocurrencies and Blockchain Technologies*** (Dan Boneh). Lectures 1–3 cover this module's territory.
- 🎓 **Princeton MOOC, Week 1** (Narayanan).
