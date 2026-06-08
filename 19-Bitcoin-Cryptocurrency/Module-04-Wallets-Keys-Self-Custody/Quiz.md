# ✏️ Module 4 Quiz: Wallets, Keys & Self-Custody

> **Instructions:** 24 questions. Closed book. Aim for 20/24.

---

## Questions

### Q1. BIP-32 standardizes: *(Remember)*
A. Mnemonic seed phrases
B. Hierarchical Deterministic (HD) wallets, derive a tree of keys from one seed
C. Derivation paths
D. Multi-signature scripts

---

### Q2. BIP-39 standardizes: *(Remember)*
A. HD wallet derivation
B. Mnemonic seed phrases (12 / 24 English words)
C. Multi-account hierarchy
D. SegWit address encoding

---

### Q3. A 24-word BIP-39 seed encodes how many bits of entropy plus checksum? *(Remember)*
A. 128 bits + 4 checksum
B. 192 bits + 6 checksum
C. **256 bits + 8 checksum** (264 total)
D. 512 bits + 16 checksum

---

### Q4. BIP-44 derivation path format is: *(Apply)*
A. `m / purpose' / coin_type' / account' / change / address_index`
B. `m / coin / address`
C. `xpub / xpub / xpub`
D. `seed / wallet / address`

---

### Q5. BIP-84 is the derivation standard for: *(Remember)*
A. Legacy P2PKH (`1...`)
B. P2SH-wrapped SegWit (`3...`)
C. Native SegWit Bech32 (`bc1q...`)
D. Taproot Bech32m (`bc1p...`)

---

### Q6. BIP-86 is the derivation standard for: *(Remember)*
A. Legacy P2PKH (`1...`)
B. P2SH-wrapped SegWit (`3...`)
C. Native SegWit Bech32 (`bc1q...`)
D. Taproot Bech32m (`bc1p...`)

---

### Q7. The BIP-39 wordlist has exactly how many words? *(Remember)*
A. 1,024
B. 2,048
C. 4,096
D. 10,000

---

### Q8. The optional BIP-39 passphrase (sometimes called the "25th word") provides: *(Apply)*
A. No additional security
B. A different wallet derived from the same words; defeats seed-only theft (but loss = funds gone)
C. A way to recover lost coins
D. A method to combine wallets

---

### Q9. An xpub (extended public key) lets a wallet: *(Apply)*
A. Sign transactions
B. Derive child public keys + addresses without seeing the private key (watch-only)
C. Generate the seed
D. Bypass consensus

---

### Q10. A 2-of-3 multi-sig output requires: *(Remember)*
A. Any single one of three keys to sign
B. All three keys to sign
C. Any two of three keys to sign
D. The first two keys to sign

---

### Q11. The TYPICAL institutional ratio of cold : warm : hot wallet funds is: *(Apply)*
A. 50 : 30 : 20
B. 95 : 4 : 1
C. 33 : 33 : 33
D. 100 : 0 : 0

---

### Q12. The Mt. Gox failure (Feb 2014) resulted in the loss of approximately: *(Remember)*
A. 50,000 BTC
B. 200,000 BTC
C. 850,000 BTC
D. 21,000,000 BTC

---

### Q13. Hardware wallets are safer than software wallets PRIMARILY because: *(Understand)*
A. They mine BTC on the side
B. The private key never leaves the device; signing happens internally; verification is on a trusted display
C. They are cheaper
D. They support more coins

---

### Q14. The MPC (Multi-Party Computation) approach to custody differs from multi-sig in that: *(Analyze)*
A. MPC requires more on-chain signatures
B. MPC splits a single private key off-chain; on-chain it looks like single-sig; multi-sig uses Bitcoin Script with multiple visible signatures
C. MPC is slower than multi-sig
D. MPC is only used for testnet

---

### Q15. A PSBT (BIP-174) is: *(Remember)*
A. A Bitcoin address format
B. A Partially Signed Bitcoin Transaction format used in multi-step / multi-cosigner signing
C. A consensus rule
D. A wallet brand

---

### Q16. Hardened vs non-hardened derivation in BIP-32: *(Apply)*
A. Are identical
B. Hardened requires the parent private key; non-hardened works from parent public key (xpub)
C. Hardened is faster
D. Non-hardened is for testnet only

---

### Q17. The PBKDF2 iteration count for BIP-39 seed derivation is: *(Remember)*
A. 256
B. 1,024
C. 2,048
D. 100,000

---

### Q18. A typical inheritance plan for a high-net-worth Bitcoiner uses: *(Apply)*
A. Sharing the seed phrase with the spouse
B. SLIP-39 Shamir shares OR 2-of-3 multi-sig with one heir key + attorney instructions
C. Storing the seed in iCloud
D. Memorizing the seed only

---

### Q19. A receiver who reuses the same address for multiple deposits is: *(Evaluate)*
A. Doing nothing wrong
B. Worsening privacy (chain-analysis can cluster) and pre-Taproot revealing the full public key on first spend
C. Increasing security
D. Reducing fees

---

### Q20. The QuadrigaCX (Jan 2019) failure mode was: *(Remember)*
A. A 51% attack
B. CEO Gerald Cotten died holding sole knowledge of cold-storage keys
C. A protocol bug
D. A SegWit malleability bug

---

### Q21. The hardware wallet's "trusted display" doctrine means: *(Analyze)*
A. The wallet's screen is always right
B. The destination address shown on the laptop CAN be manipulated by malware; only the address shown on the hardware wallet's own screen should be trusted
C. Both screens are equally trustworthy
D. No screens can be trusted

---

### Q22. Storing your seed phrase as a photo in your phone's camera roll is: *(Apply)*
A. Fine; phones are secure
B. The most dangerous common practice, cloud backup means anyone with iCloud / Google Photos access (or malware) can extract it
C. Required by BIP-39
D. Recommended by hardware-wallet manufacturers

---

### Q23. A "vanity address" generator from an unknown website is dangerous because: *(Analyze)*
A. It produces invalid addresses
B. The tool sees your private key during generation, and may exfiltrate it
C. It's against BIP rules
D. It produces only legacy addresses

---

### Q24. A 2-of-3 multi-sig where one key is held by a third-party custody coordinator and triggered by an attestation of the owner's death is: *(Evaluate)*
A. Illegal
B. A legitimate inheritance pattern (Casa Inheritance, Unchained Concierge offer commercial versions)
C. Always insecure
D. Only viable on testnet

---

## 🎯 Answers + Explanations

### Q1: **B. HD wallets, derive a tree of keys from one seed**
Pieter Wuille, 2012. The HMAC-SHA512-based derivation tree.

### Q2: **B. Mnemonic seed phrases (12 / 24 English words)**
Palatinus, Rusnák, Voisine, Bowe, 2013.

### Q3: **C. 256 bits + 8 checksum (264 total)**
24 words × 11 bits each = 264 bits = 256 entropy + 8 checksum. 12 words = 132 = 128 + 4.

### Q4: **A. `m / purpose' / coin_type' / account' / change / address_index`**
The full BIP-44 path. Coin_type 0' = Bitcoin.

### Q5: **C. Native SegWit Bech32 (`bc1q...`)**
84' is the purpose value for native SegWit derivation.

### Q6: **D. Taproot Bech32m (`bc1p...`)**
86' is for Taproot (Bech32m encoding per BIP-350).

### Q7: **B. 2,048**
Exactly 2,048 words. Each word = 11 bits (2^11 = 2048).

### Q8: **B. A different wallet derived from the same words; defeats seed-only theft**
PBKDF2(mnemonic, "mnemonic" + passphrase) → different seed. The most important defense against seed theft. Lose passphrase = lose funds forever.

### Q9: **B. Derive child public keys + addresses without seeing the private key (watch-only)**
The xpub enables receive-only and balance-display wallets. The xprv (extended private) is needed to sign.

### Q10: **C. Any two of three keys to sign**
M-of-N where M=2 and N=3. Loss of 1 key = still recoverable; theft of 1 key = still safe.

### Q11: **B. 95 : 4 : 1**
Industry standard. Cold dominates by design, operational liquidity in hot is minimized.

### Q12: **C. 850,000 BTC**
~200K were later recovered; ~650K remain unrecovered. The most-tested institutional-failure fact.

### Q13: **B. The private key never leaves the device; signing happens internally; verification is on a trusted display**
The three properties together define the hardware-wallet security model.

### Q14: **B. MPC splits a single private key off-chain; on-chain it looks like single-sig**
The fundamental architectural distinction. MPC = chain-agnostic, vendor-dependent. Multi-sig = on-chain script, more auditable.

### Q15: **B. A Partially Signed Bitcoin Transaction format**
BIP-174. The standard handoff format for multi-step signing (hardware wallet + laptop, or multiple cosigners in multi-sig).

### Q16: **B. Hardened requires the parent private key**
Hardened (apostrophe / H suffix) breaks the xpub-can-derive-children property, used at account boundaries.

### Q17: **C. 2,048**
PBKDF2 with 2,048 iterations transforms the mnemonic into the 64-byte seed. Not 1,024, not 10,000.

### Q18: **B. SLIP-39 Shamir shares OR 2-of-3 multi-sig**
The two industry-standard approaches. Both better than seed-sharing.

### Q19: **B. Worsening privacy and pre-Taproot revealing the full public key**
Chain analysis clusters reused addresses. Pre-Taproot, spending revealed the full public key, opening to (theoretical) quantum-attack risk.

### Q20: **B. CEO Gerald Cotten died holding sole knowledge of cold-storage keys**
$190M CAD in customer funds lost. The single-point-of-failure custody anti-pattern.

### Q21: **B. The destination address shown on the laptop CAN be manipulated**
Address-clipper malware is a real attack. Hardware-wallet screen is the trust anchor.

### Q22: **B. The most dangerous common practice**
iCloud, Google Photos, Dropbox = remote storage that can be compromised. Many seed-theft incidents have come from this.

### Q23: **B. The tool sees your private key during generation**
A vanity-address generator must know the private key to verify addresses match the pattern. Self-hosted is safer; online tools = trust the operator.

### Q24: **B. A legitimate inheritance pattern**
Casa Inheritance and Unchained Concierge commercialize this. Subject to careful contract design and identity-verification protocols on death.

---

## 📊 Score Yourself

- 22-24/24 → 🏆 Move to Module 5.
- 18-21/24 → ✅ Solid.
- 14-17/24 → ⚠️ Re-read the BIP-32/39/44 + multi-sig sections.
- <14/24 → 🔁 Re-read entire Reading.md.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5: Mining & PoW Economics](../Module-05-Mining-Proof-of-Work-Economics/Reading.md)
