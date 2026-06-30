# 📋 Module 4 Cheat Sheet: Wallets, Keys & Self-Custody

---

## 🌱 The 3 Foundational BIPs

| BIP | What | Author / Year |
|-----|------|----------------|
| **BIP-32** | HD wallets (tree of keys from one seed) | Wuille, 2012 |
| **BIP-39** | Mnemonic seed phrases (12/24 words) | Palatinus + Rusnák + Voisine + Bowe, 2013 |
| **BIP-44** | Derivation paths | Palatinus + Rusnák, 2014 |

---

## 📜 BIP-39 Entropy Table

| Words | Entropy | Checksum |
|-------|---------|----------|
| 12 | 128 bits | 4 bits |
| 18 | 192 bits | 6 bits |
| **24** | **256 bits** | **8 bits** |

🧠 Wordlist = 2,048 words (11 bits each). PBKDF2 iterations = 2,048.

---

## 🛣️ Derivation Paths (BIP-44 family)

| BIP | Purpose | Address Type | Example |
|-----|---------|--------------|---------|
| 44 | 44' | Legacy P2PKH (1...) | m/44'/0'/0'/0/0 |
| 49 | 49' | P2SH-SegWit (3...) | m/49'/0'/0'/0/0 |
| 84 | 84' | Native SegWit (bc1q...) | m/84'/0'/0'/0/0 |
| 86 | 86' | Taproot (bc1p...) | m/86'/0'/0'/0/0 |

🚨 Hardened (`'`) requires parent private key. Non-hardened works from xpub.

---

## 🔑 The Pipeline

```
[entropy] → BIP-39 mnemonic → PBKDF2 (+passphrase?) → seed
                                                        ↓
                                                BIP-32 master key + chain code
                                                        ↓
                                                BIP-44/84/86 derivation path
                                                        ↓
                                                child key → address
```

---

## 🌡️ Tier Architecture

| Tier | Online? | % of Funds | Example |
|------|---------|------------|---------|
| **Cold** | No | 95% | Coldcard, offline multi-sig |
| **Warm** | Sometimes | 4% | MPC, partial multi-sig |
| **Hot** | Always | 1% | Operational exchange wallet |

---

## 🔐 Multi-Sig Patterns

| Pattern | Use |
|---------|-----|
| 2-of-2 | Joint accounts |
| **2-of-3** | **Standard institutional + HNW** |
| 3-of-5 | Larger institutional |
| 5-of-9 | Casa Diamond / sovereign-class |

🧠 Multi-sig = on-chain. MPC = off-chain key splitting; looks like single-sig.

---

## 🪦 Inheritance Frameworks

1. SLIP-39 Shamir shares (Trezor)
2. 2-of-3 multi-sig with heir key
3. Casa Inheritance (commercial)
4. Dead-man switch (time-locked tx)
5. Letter to attorney + safe deposit

🚨 NEVER share full seed phrase with spouse / family.

---

## 💼 Disaster Catalogue

| Event | Date | Lost | Failure Mode |
|-------|------|------|--------------|
| **Mt. Gox** | Feb 2014 | **~850,000 BTC** | Single hot wallet + no audit |
| QuadrigaCX | Jan 2019 | $190M CAD | CEO died with sole keys |
| Celsius | Jul 2022 | $4.7B | Commingled funds + bad lending |
| FTX | Nov 2022 | $8B+ | Commingled funds + fraud |
| BlockFi | Nov 2022 | $2B | Yield product collapse |

---

## 🚨 Top 10 Self-Custody Mistakes

1. Photo of seed phrase (cloud-synced!)
2. Seed on the same device as wallet
3. Hardware wallet from unknown source
4. Address reuse
5. Online vanity-address generator
6. Mixing testnet / mainnet
7. Mistyping during restore
8. No test transaction before fund-up
9. No passphrase
10. No inheritance plan

---

## 📐 Spending Workflow

```
1. Watch-only wallet on laptop → construct PSBT
2. Transfer PSBT to hardware (USB/QR/SD)
3. Hardware shows dest + amount + change → APPROVE
4. Signed PSBT back to laptop → broadcast
5. Confirm via mempool.space
```

🧠 The hardware screen is the only trusted display.

---

## ⚠️ Top Exam Traps

1. BIP-32 = HD, BIP-39 = mnemonic, BIP-44 = derivation path (don't swap)
2. 24 words = 256 bits entropy + 8 checksum
3. PBKDF2 = 2,048 iterations
4. Hardware screen = trusted display (NOT laptop)
5. Mt. Gox lost ~850K BTC in Feb 2014
6. MPC = off-chain; multi-sig = on-chain
7. Passphrase = 25th word; defeats seed theft; loss = funds gone
8. Wordlist = 2,048 words
9. xpub = watch-only; xprv = signing

---

## 🏆 Power Phrases (often right)

- ✅ "Not your keys, not your coins"
- ✅ "2-of-3 multi-sig with multi-jurisdiction"
- ✅ "Hardware wallet's trusted display"
- ✅ "Cold dominant tier (95%)"
- ✅ "PSBT for multi-step signing"

Often wrong:

- ❌ "Custodial is always safer"
- ❌ "Reuse the same address"
- ❌ "Store seed in iCloud"
- ❌ "Trust the laptop display"

---

➡️ [Module 5: Mining & PoW Economics](../Module-05-Mining-Proof-of-Work-Economics/Reading.md)
