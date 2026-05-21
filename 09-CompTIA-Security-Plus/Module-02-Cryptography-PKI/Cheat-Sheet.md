# 📋 Module 2 Cheat Sheet: Cryptography & PKI

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🔢 Symmetric vs Asymmetric (memorize)

| | Symmetric | Asymmetric |
|---|-----------|------------|
| Keys | 1 shared | 2 (public + private) |
| Speed | ⚡ Fast | 🐢 Slow |
| Use | Bulk data, disks, VPN tunnels | Key exchange, signatures |
| Examples | AES, ChaCha20, 3DES (legacy) | RSA, ECC, DSA, EdDSA |

**Hybrid:** Use asymmetric to exchange a *symmetric* session key, then use symmetric for the data. (That's TLS.)

---

## 🔑 Algorithms Reference Table

| Family | Pick | Key size | Status |
|--------|------|----------|--------|
| Symmetric | **AES-GCM** | 128 / 256 | ✅ Default |
| Symmetric (legacy) | 3DES, DES, RC4 | — | ❌ Deprecated/broken |
| Asymmetric | **RSA** | 2048 (min) / 3072+ | ✅ Common |
| Asymmetric | **ECC / ECDSA** | 256-bit ≈ RSA 3072 | ✅ Modern, smaller |
| Key exchange | **ECDHE** (or DHE) | — | ✅ PFS |
| Hash | **SHA-256 / SHA-512 / SHA-3** | — | ✅ |
| Hash (broken) | MD5, SHA-1 | — | ❌ |
| MAC | **HMAC-SHA256** | — | ✅ |
| Password hash | **bcrypt / Argon2 / scrypt / PBKDF2** | — | ✅ Use with salt |

---

## ✍️ Key Direction (THE most-tested fact)

```
Encrypt confidential msg  →  RECIPIENT's PUBLIC key
Decrypt confidential msg  →  RECIPIENT's PRIVATE key

Sign a msg                →  SENDER's PRIVATE key
Verify a signature        →  SENDER's PUBLIC key
```

🧠 *"Public for them, private for me."*

---

## 🏛️ PKI Players

```
Root CA  ──(signs)──▶  Intermediate CA  ──(signs)──▶  Server cert
  ↑ in OS/browser trust store
```

| Term | One-liner |
|------|-----------|
| CA | Certificate Authority |
| RA | Registration Authority (verifies before issuance) |
| CSR | Cert Signing Request you send to CA |
| CRL | Revocation list (big file) |
| OCSP | Real-time revocation check |
| OCSP **Stapling** | Server pre-fetches OCSP and attaches it |

---

## 📜 Cert Types & Formats

| Cert type | Covers |
|-----------|--------|
| DV / OV / EV | Validation strictness |
| **SAN** | Multiple specific hostnames |
| **Wildcard** | `*.domain.com` (one label deep) |
| **Code signing** | Signs executables/scripts |
| **Client / Mutual TLS** | Authenticates users/devices |
| **Self-signed** | OK internal; browser warns |

| Format | Contents |
|--------|----------|
| **PEM** (.pem .crt .cer .key) | Base64 text |
| **DER** (.der .cer) | Binary |
| **PKCS#7** (.p7b) | Cert chain only |
| **PKCS#12** (.pfx .p12) | Cert + private key + chain, password-protected |

---

## 💾 Key Storage

| | What |
|---|------|
| **TPM** | Motherboard chip → device root of trust (BitLocker) |
| **HSM** | Enterprise tamper-resistant appliance (FIPS 140-2/3) |
| **KMS** | Cloud key service (AWS KMS, Azure Key Vault) |
| **Secure Enclave** | Mobile (iPhone) isolated keystore |
| **Key escrow** | Trusted 3rd party holds a copy |

---

## 🎭 Don't Confuse These

| Term | What it is |
|------|------------|
| Encryption | Reversible with key |
| Hashing | One-way fingerprint |
| Encoding (Base64) | Reversible by anyone (not security) |
| Obfuscation | Hard to read, not secure |
| Steganography | Hide data inside other data |
| Tokenization | Replace with random reference; vault recovers |
| Masking | Show `****1234`; original still in DB |

---

## 🔐 AES Modes

| Mode | Notes |
|------|-------|
| **ECB** | ❌ Never use — patterns leak |
| **CBC** | Confidentiality only; needs IV |
| **CTR** | Stream-like, parallelizable |
| **GCM** | ✅ Authenticated encryption (conf + integrity) |
| **CCM** | Auth encryption in WPA2 (CCMP) |

---

## 🏆 Exam Power Phrases

- ✅ "Use AES-GCM" / "TLS 1.3 with ECDHE"
- ✅ "Salt + bcrypt/Argon2 for passwords"
- ✅ "Pin the certificate" or "verify the chain"
- ✅ "Rotate keys" / "Store in HSM"
- ❌ "MD5 / SHA-1 for security"
- ❌ "Base64 the password"
- ❌ "Self-signed cert in production-facing"
- ❌ "Static RSA key exchange" (no PFS)

---

## ✏️ Quick Self-Check

1. Which key signs? Which key verifies? ___
2. What is PFS and which algorithms provide it? ___
3. Difference between TPM, HSM, KMS? ___
4. Wildcard cert covers what? Does NOT cover what? ___
5. Password storage — which 4 algorithms are acceptable? ___

If you can answer in 60 seconds, you own this module. ✅

---

➡️ [Module 3: Identity & Access Management](../Module-03-Identity-Access-Management/Reading.md)
