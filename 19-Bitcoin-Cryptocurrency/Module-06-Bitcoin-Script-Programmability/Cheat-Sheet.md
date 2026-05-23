# 📋 Module 6 Cheat Sheet: Bitcoin Script & Programmability

---

## 🔤 Bitcoin Script Properties

- Stack-based, postfix
- **Non-Turing-complete** (by design)
- No loops, no recursion
- Bounded execution → no DoS via runaway scripts
- Output: pass / fail

---

## 📜 Output Types

| Type | Prefix | BIP | Script |
|------|--------|-----|--------|
| P2PK | (no addr) | Day 1 | `<pubkey> OP_CHECKSIG` |
| **P2PKH** | `1...` | Day 1 | `OP_DUP OP_HASH160 <hash> OP_EQUALVERIFY OP_CHECKSIG` |
| **P2SH** | `3...` | BIP-16 (2012) | `OP_HASH160 <script_hash> OP_EQUAL` |
| **P2WPKH/WSH** | `bc1q...` | BIP-141 (2017) | `<0x00> <hash>` (witness program) |
| **P2TR** | `bc1p...` | BIPs 340/341/342 (2021) | `<0x01> <taproot_output_key>` |

---

## ⚡ SegWit (BIP-141, August 2017)

- Block weight cap: **4,000,000 WU**
- Weight formula: **`(non-witness × 4) + (witness × 1)`**
- 3 problems solved:
  1. **Malleability** (TxID independent of sigs)
  2. **Block-space efficiency** (witness discount)
  3. **Versioned witness program** (enables Taproot)

---

## ✨ Taproot (BIPs 340/341/342, November 2021)

- Block 709,632 activation
- 3 BIPs:
  - **BIP-340**: Schnorr signatures
  - **BIP-341**: Taproot (key-path + script-path)
  - **BIP-342**: Tapscript
- Two spend paths:
  - **Key-path** (most common): single Schnorr sig, indistinguishable from single-sig
  - **Script-path**: reveal one MAST leaf + Merkle proof
- **MuSig2** = aggregate multi-sig into key-path

🧠 KEY PRIVACY WIN: cooperating multi-sig ≡ single-sig on-chain.

---

## 🕰️ Timelock Opcodes

| Opcode | BIP | Type | Use |
|--------|-----|------|-----|
| **CLTV** | 65 | **Absolute** | Inheritance, vesting |
| **CSV** | 112 | **Relative** | Lightning HTLCs |

---

## 🌳 MAST (Merkelized Alternative Script Trees)

```
       Tree of alternative scripts
              │
              ├── Leaf 1: owner-only
              ├── Leaf 2: 2-of-3 multi-sig
              └── Leaf 3: spouse + lawyer after 1 year
              
At spend time: reveal ONLY the leaf used.
Other leaves stay hidden forever.
```

🧠 Privacy + efficiency.

---

## 🚀 What Bitcoin Script CAN Do

✅ Sigs (P2PKH, P2WPKH, P2TR)
✅ Multi-sig (M-of-N)
✅ Timelocks (CLTV, CSV)
✅ Hash-locks (HTLC for Lightning)
✅ MAST alternative paths
✅ Atomic swaps

## 🚫 What it CANNOT Do

❌ Loops / recursion
❌ Arbitrary computation
❌ On-chain order books
❌ Cross-tx state composition
❌ Inflation / supply changes

---

## ⚠️ Top Exam Traps

1. **Non-Turing-complete by design** (not by accident)
2. **SegWit = BIP-141 = August 2017**
3. **Taproot = BIPs 340/341/342 = November 2021** (block 709,632)
4. **MAST**, not "Merkle-attached-Script-Tree"
5. **MuSig2** = Schnorr aggregation
6. **CLTV = absolute, CSV = relative**
7. **Block weight = 4M WU**, not 1MB
8. **`bc1q...` = SegWit; `bc1p...` = Taproot**
9. **Ordinals** = Taproot script-path quirk, not consensus violation
10. **OP_CHECKMULTISIG** is legacy; Tapscript uses OP_CHECKSIGADD + MuSig2

---

## 🏆 Power Phrases

✅ "Bounded execution; no DoS"
✅ "Key-path indistinguishable from single-sig"
✅ "Witness data discounted at 1 WU/byte"
✅ "MuSig2 aggregation"

❌ "Bitcoin has no smart contracts" (misleading)
❌ "Taproot makes Bitcoin Turing-complete"
❌ "SegWit increased block size to 4MB" (it's 4M WU)

---

➡️ [Module 7: Lightning Network & Layer-2](../Module-07-Lightning-Network-Layer-2/Reading.md)
