# ✏️ Module 2 Quiz: Cryptographic Foundations

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24 minimum.

---

## Questions

### Q1. Bitcoin uses which elliptic curve? *(Remember)*
A. NIST P-256 (secp256r1)
B. secp256k1
C. Curve25519
D. Brainpool P-256

---

### Q2. The HASH160 macro is defined as: *(Remember)*
A. SHA-256(SHA-256(x))
B. RIPEMD-160(SHA-256(x))
C. SHA-256(RIPEMD-160(x))
D. SHA-1(SHA-256(x))

---

### Q3. A Bitcoin private key is essentially: *(Understand)*
A. A username + password
B. A 256-bit integer in [1, n-1] where n is the curve order
C. A signed certificate from a CA
D. An 11-bit checksum

---

### Q4. The most catastrophic implementation error in ECDSA is: *(Apply)*
A. Using too long a private key
B. Reusing the per-signature nonce `k`
C. Hashing the message twice
D. Using a compressed public key

---

### Q5. RFC 6979 is relevant to Bitcoin because: *(Apply)*
A. It specifies the secp256k1 curve
B. It defines deterministic ECDSA nonce derivation, preventing nonce-reuse bugs
C. It defines the BIP-39 wordlist
D. It defines SegWit

---

### Q6. Schnorr signatures were activated in Bitcoin via BIP-340 in: *(Remember)*
A. August 2017
B. November 2021
C. April 2024
D. January 2009

---

### Q7. The PRIMARY advantage of Schnorr signatures over ECDSA for Bitcoin is: *(Understand)*
A. They are shorter and linearly aggregatable (multi-sig + single-sig look identical on-chain)
B. They are easier to brute force
C. They require less randomness
D. They allow private-key recovery

---

### Q8. A Merkle tree is: *(Remember)*
A. A linked list of transactions
B. A binary tree where every non-leaf node is the hash of its children
C. A consensus algorithm
D. A signature scheme

---

### Q9. The Merkle root in a Bitcoin block header commits to: *(Understand)*
A. Only the coinbase transaction
B. All transactions in the block
C. The previous block hash
D. The miner's public key

---

### Q10. SPV (Simplified Payment Verification) requires which inputs to verify a transaction's inclusion? *(Apply)*
A. The full block
B. Just the block hash
C. Block header + Merkle proof (log₂(N) hashes) + the transaction
D. A trusted intermediary's attestation

---

### Q11. Bitcoin's choice of secp256k1 over NIST P-256 is best explained by: *(Evaluate)*
A. Performance, secp256k1 is much faster
B. Defense in depth, avoiding NIST curves due to post-2007 concerns about NIST parameter selection
C. Patent issues, secp256r1 was patented in 2008
D. Backwards compatibility with PGP

---

### Q12. How many sats are in 1 BTC, and how many bits is a Bitcoin address typically committing to? *(Apply)*
A. 1,000 sats and 256 bits
B. 100,000,000 sats and 160 bits
C. 100,000,000 sats and 256 bits
D. 1,000,000 sats and 128 bits

---

### Q13. A Bech32-encoded SegWit address starts with: *(Remember)*
A. 1
B. 3
C. bc1q
D. bc1p

---

### Q14. A Bech32m-encoded Taproot address starts with: *(Remember)*
A. 1
B. 3
C. bc1q
D. bc1p

---

### Q15. The Heartbleed bug (CVE-2014-0160) affected: *(Understand)*
A. The Bitcoin Core codebase
B. The SHA-256 algorithm
C. OpenSSL's TLS heartbeat extension, not Bitcoin
D. The secp256k1 library

---

### Q16. Which is TRUE about quantum computing and Bitcoin? *(Evaluate)*
A. A quantum computer existing today would instantly break ECDSA
B. Shor's algorithm, on a sufficiently large fault-tolerant quantum computer, would break ECDSA; Grover's would halve SHA-256's effective security (but it remains usable)
C. SHA-256 is unbreakable by any quantum computer
D. Bitcoin has already migrated to post-quantum signatures

---

### Q17. The size of a Bitcoin block header is: *(Remember)*
A. 80 bytes regardless of N transactions
B. 256 bytes
C. 1 MB
D. Variable with transaction count

---

### Q18. Bitcoin does NOT use which of the following at the consensus layer? *(Apply)*
A. SHA-256
B. RIPEMD-160
C. RSA
D. ECDSA

---

### Q19. What is the size of a typical Schnorr signature in Bitcoin? *(Remember)*
A. 32 bytes
B. 64 bytes
C. 71–73 bytes
D. 128 bytes

---

### Q20. RIPEMD-160 produces an output of: *(Remember)*
A. 128 bits
B. 160 bits
C. 256 bits
D. 512 bits

---

### Q21. Why does Bitcoin use BOTH SHA-256 AND RIPEMD-160 in address derivation rather than just one hash? *(Analyze)*
A. SHA-256 alone is too long
B. Defense in depth, if a future flaw is found in SHA-256, RIPEMD-160 provides a second layer
C. RIPEMD-160 is required by Base58Check
D. Satoshi flipped a coin

---

### Q22. The Bitcoin Improvement Proposals that activated Schnorr + Taproot + Tapscript are: *(Remember)*
A. BIPs 32 / 39 / 44
B. BIPs 141 / 143 / 144
C. BIPs 340 / 341 / 342
D. BIPs 16 / 65 / 112

---

### Q23. A wallet that displays a public key but cannot sign transactions (only receive) is using: *(Apply)*
A. Schnorr aggregation
B. Watch-only derived addresses via BIP-32 extended public key (xpub)
C. A Multi-Party Computation key share
D. An expired certificate

---

### Q24. The Elliptic Curve Discrete Logarithm Problem (ECDLP) is the assumption that, given G and Q = k·G on secp256k1, recovering k is: *(Understand)*
A. Trivially easy
B. Computationally infeasible
C. Solved by ECDSA
D. Solved by hashing

---

## 🎯 Answers + Explanations

### Q1: **B. secp256k1**
SECG-specified, NOT a NIST curve. y² = x³ + 7 (mod p) where p ≈ 2^256.

### Q2: **B. RIPEMD-160(SHA-256(x))**
SHA-256 first (gives 32 bytes), THEN RIPEMD-160 (gives 20 bytes). This is the canonical "HASH160" composition used to derive address commitments.

### Q3: **B. A 256-bit integer in [1, n-1] where n is the curve order**
32 random bytes. Search space ~2^256, more than the number of atoms in the observable universe by many orders of magnitude.

### Q4: **B. Reusing the per-signature nonce `k`**
Two signatures with the same `k` on different messages let an attacker solve for the private key algebraically. Famously broke Sony's PS3 ECDSA implementation in 2010.

### Q5: **B. It defines deterministic ECDSA nonce derivation, preventing nonce-reuse bugs**
RFC 6979 derives `k` deterministically from `sk` and `m` using HMAC. Every modern Bitcoin wallet uses RFC 6979 to avoid the nonce-reuse class of bugs.

### Q6: **B. November 2021**
Activated at block 709,632 (Nov 14, 2021) via BIPs 340 (Schnorr), 341 (Taproot), 342 (Tapscript). Authors: Pieter Wuille, Jonas Nick, Tim Ruffing, Anthony Towns.

### Q7: **A. They are shorter and linearly aggregatable**
Schnorr signatures can be aggregated such that a multi-sig spend looks identical to a single-sig spend on-chain, major privacy and block-space win.

### Q8: **B. A binary tree where every non-leaf node is the hash of its children**
Ralph Merkle's 1979 Stanford PhD thesis.

### Q9: **B. All transactions in the block**
Any modification to any transaction → its leaf hash changes → percolates up → Merkle root changes → block header changes → PoW invalid.

### Q10: **C. Block header + Merkle proof (log₂(N) hashes) + the transaction**
SPV is what makes light wallets possible. Logarithmic scaling means even very large blocks have small SPV proofs.

### Q11: **B. Defense in depth, avoiding NIST curves due to post-2007 concerns**
Specifically post-Dual_EC_DRBG (2007-2013), where NIST/NSA were suspected of backdooring elliptic-curve parameters. Satoshi avoided NIST curves preemptively.

### Q12: **B. 100,000,000 sats and 160 bits**
1 BTC = 10^8 sats. Bitcoin addresses commit to a 160-bit hash (HASH160 of public key, for P2PKH/P2WPKH; or hash of a script for P2SH/P2WSH).

### Q13: **C. bc1q**
Bech32-encoded native SegWit addresses (BIP-173, with `q` indicating witness version 0).

### Q14: **D. bc1p**
Bech32m-encoded Taproot addresses (BIP-341 + BIP-350, with `p` indicating witness version 1).

### Q15: **C. OpenSSL's TLS heartbeat extension, not Bitcoin**
Bitcoin Core does not depend on OpenSSL for consensus. Heartbleed didn't directly threaten Bitcoin but underscored the importance of minimal cryptographic surface area.

### Q16: **B. Shor's algorithm would break ECDSA; Grover's would halve SHA-256's effective security**
The honest cryptographer's answer. Practical fault-tolerant quantum machines are estimated 10-20 years out per most reviews. Bitcoin can upgrade via soft fork before that.

### Q17: **A. 80 bytes regardless of N transactions**
Version (4) + previous hash (32) + Merkle root (32) + timestamp (4) + bits (4) + nonce (4) = 80 bytes. The Merkle root summarizes all transactions.

### Q18: **C. RSA**
Bitcoin uses ECDSA (and now Schnorr) never RSA. RSA is widely used in TLS, PGP, SSH legacy but not in Bitcoin consensus.

### Q19: **B. 64 bytes**
BIP-340 specifies Schnorr signatures as exactly 64 bytes (32 bytes for `R` + 32 bytes for `s`).

### Q20: **B. 160 bits**
20 bytes. This is why Bitcoin addresses commit to 160 bits, RIPEMD-160 is the final hash in HASH160.

### Q21: **B. Defense in depth**
Same logic Satoshi applied to choosing secp256k1 over NIST P-256. Two unrelated hash families = two independent attack surfaces.

### Q22: **C. BIPs 340 / 341 / 342**
BIP-340 = Schnorr signatures, BIP-341 = Taproot (script-path/key-path spending), BIP-342 = Tapscript. All activated together in November 2021.

### Q23: **B. Watch-only derived addresses via BIP-32 extended public key (xpub)**
The xpub lets a wallet derive child public keys (and addresses) without ever seeing the private key. Used by exchanges, accountants, hardware wallets paired with mobile apps.

### Q24: **B. Computationally infeasible**
The hard problem securing ECDSA. Best classical algorithms run in time ~√n where n is the curve order, for secp256k1, that's ~2^128 operations, which is computationally infeasible.

---

## 📊 Score Yourself

- 22-24/24 → 🏆 You own the crypto foundations. Move to Module 3.
- 18-21/24 → ✅ Solid. Re-read the missed sections.
- 14-17/24 → ⚠️ Re-read the "primitives combine" diagram and the HASH160 section.
- <14/24 → 🔁 Re-read the entire Reading.md and watch the 3Blue1Brown + Computerphile videos.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3](../Module-03-Bitcoin-Network-Consensus/Reading.md)
