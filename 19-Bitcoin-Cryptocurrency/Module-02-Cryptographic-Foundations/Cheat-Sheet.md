# 📋 Module 2 Cheat Sheet: Cryptographic Foundations

> One page. Print it. Tape it to your monitor.

---

## 🧱 The 4 Primitives

| # | Primitive | Used For |
|---|-----------|----------|
| 1 | **Hash functions** (SHA-256, RIPEMD-160) | TxID, PoW, addresses, Merkle trees |
| 2 | **Public-key crypto** (secp256k1) | Ownership |
| 3 | **Signatures** (ECDSA, Schnorr) | Spending |
| 4 | **Merkle trees** | Block commitment, SPV proofs |

🚨 Bitcoin does NOT use: RSA, AES (consensus), NIST P-curves, ZKPs (mainchain), Diffie-Hellman (consensus).

---

## 🧮 secp256k1

| Property | Value |
|----------|-------|
| Equation | y² = x³ + 7 (mod p) |
| p | 2^256 − 2^32 − 977 |
| Order n | ~2^256 |
| Bits of security | ~128 |
| Standard | SECG (NOT NIST) |

🧠 Memory: "secp256**k**1 = Koblitz curve; secp256**r**1 = NIST P-256." Bitcoin uses **k1**.

---

## 🔑 Key → Address Pipeline

```
private_key (32 bytes)
   │ × G  (secp256k1)
   ▼
public_key (33 bytes compressed)
   │ HASH160 = RIPEMD160(SHA256(pk))
   ▼
pubkey_hash (20 bytes)
   │ encode
   ▼
address:  "1..."   (Base58Check legacy)
       or "3..."   (Base58Check P2SH)
       or "bc1q..." (Bech32 SegWit, v0)
       or "bc1p..." (Bech32m Taproot, v1)
```

---

## 🔨 Hash Zoo

| Hash | Bytes | Used For |
|------|-------|----------|
| SHA-256 | 32 | Block headers, TxIDs, PoW, Merkle roots |
| RIPEMD-160 | 20 | Inside HASH160 |
| HMAC-SHA512 | 64 | BIP-32 child-key derivation |
| PBKDF2 | varies | BIP-39 seed → wallet key |
| Double-SHA256 ("SHA256d") | 32 | Block hash, TxID |

---

## ✍️ Signature Schemes

| Scheme | Size | When |
|--------|------|------|
| ECDSA (DER) | ~71-73 bytes | Day 1 → today |
| Schnorr (BIP-340) | 64 bytes | Nov 2021 → today (Taproot) |

🚨 ECDSA nonce reuse = private-key disclosure. Modern wallets use RFC 6979 deterministic-ECDSA.

🎯 Schnorr advantages: shorter, linear (aggregatable), batch-verifiable, privacy (multi-sig looks like single-sig).

---

## 🌳 Merkle Trees (Merkle, 1979)

```
                Root  ← in 80-byte block header
              /      \
           H_AB      H_CD
          /    \    /    \
        H_A   H_B H_C   H_D
         |     |   |     |
        Tx1  Tx2  Tx3  Tx4
```

SPV proof for Tx2: send `Tx2 + H_A + H_CD` (3 hashes ≈ 96 bytes). Cost = log₂(N) hashes.

---

## 📏 Block Header (80 bytes)

| Field | Bytes |
|-------|-------|
| Version | 4 |
| Previous block hash | 32 |
| **Merkle root** | 32 |
| Timestamp | 4 |
| Difficulty bits | 4 |
| Nonce | 4 |
| **Total** | **80** |

🧠 Memory: "V-P-M-T-B-N, 4-32-32-4-4-4 = 80."

---

## 🆕 Address Format Prefix Table

| Prefix | Format | Standard |
|--------|--------|----------|
| `1...` | P2PKH | Day 1 |
| `3...` | P2SH | BIP-16 (Apr 2012) |
| `bc1q...` | P2WPKH/P2WSH | BIP-141/173 (Aug 2017) |
| `bc1p...` | P2TR | BIP-341/350 (Nov 2021) |

---

## 🔢 Search-Space Sanity

| Quantity | Value |
|----------|-------|
| Bitcoin private-key space | ~2^256 ≈ 10^77 |
| Atoms in observable universe | ~10^80 |

🧠 *"Private keys are 32 random bytes; the search space exceeds the number of atoms in a million observable universes."*

---

## 🚨 Top 8 Exam Traps

1. secp256k**1**, not secp256r1 (NIST P-256)
2. HASH160 = RIPEMD160(SHA256(x)), SHA first, RIPEMD second
3. Schnorr activated Nov 2021 (BIPs 340/341/342), NOT 2017
4. Bitcoin does NOT use RSA, AES, NIST curves, or Keccak (SHA-3)
5. ECDSA nonce reuse = private-key disclosure
6. Merkle proof size = log₂(N), not N, not constant
7. Block header is 80 bytes regardless of tx count
8. Quantum: Shor breaks ECDSA (future); Grover only halves SHA-256 (still safe)

---

## 🏆 Power Phrases (often correct)

- ✅ "secp256k1, not a NIST curve"
- ✅ "Deterministic ECDSA per RFC 6979"
- ✅ "BIP-340 Schnorr enables MuSig aggregation"
- ✅ "Defense in depth, SHA-256 AND RIPEMD-160"
- ✅ "Log(N) Merkle proof scales to any block size"

---

## ✏️ Quick Self-Check

1. What's HASH160? ___
2. What curve does Bitcoin use? ___
3. What does Schnorr add (vs ECDSA)? ___
4. Block header size? ___
5. SPV proof size for N=1M? ___

If under 60 sec on all 5, move on. ✅

---

➡️ [Module 3: Bitcoin Network & Consensus](../Module-03-Bitcoin-Network-Consensus/Reading.md)
