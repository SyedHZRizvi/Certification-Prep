<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #f7931a; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #f7931a, #ff7a18); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #ddd6fe; color: #5b21b6; }
.vg-tag.recommended { background: #dbeafe; color: #1e40af; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
</style>

# 🎥 Module 2 Videos: Cryptographic Foundations

> **How to use:** Click any card to search YouTube for the latest top result on that topic. Search URLs never rot.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=3Blue1Brown+elliptic+curves+visual+explanation" data-video-id="NF1pwjL9-DE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌀</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Elliptic Curve Cryptography, Visually</p>
      <p class="vg-creator">3Blue1Brown / Computerphile</p>
      <span class="vg-duration">⏱ 20 min · The visual intuition for ECDSA</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Computerphile+SHA+256+explained" data-video-id="wHokt7B4J9Q" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔢</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SHA-256: Hashing Explained</p>
      <p class="vg-creator">Computerphile</p>
      <span class="vg-duration">⏱ 15 min · How the workhorse hash works</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Andreas+Antonopoulos+bitcoin+keys+addresses+wallets" data-video-id="K-ccC9YZ8UI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔑</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bitcoin Keys, Addresses, and Wallets</p>
      <p class="vg-creator">Andreas Antonopoulos</p>
      <span class="vg-duration">⏱ 22 min · End-to-end private key → address</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Pieter+Wuille+Schnorr+Taproot+Bitcoin+explanation" data-video-id="YSUVRj8iznU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>✍️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Schnorr Signatures and Taproot</p>
      <p class="vg-creator">Pieter Wuille · Chaincode Labs</p>
      <span class="vg-duration">⏱ 18 min · BIP-340 from one of its authors</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Merkle+tree+explained+blockchain+Ralph+Merkle" data-video-id="qcuc3rgwZAE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌳</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Merkle Trees Explained</p>
      <p class="vg-creator">Computerphile</p>
      <span class="vg-duration">⏱ 12 min · Why log(N) proofs matter</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Princeton+Narayanan+lecture+1+cryptographic+hash+functions" data-video-id="t3hJsFpPmXs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎓</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Princeton MOOC, Hash Functions</p>
      <p class="vg-creator">Arvind Narayanan</p>
      <span class="vg-duration">⏱ 16 min · The pre-image / collision properties</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dan+Boneh+ECDSA+digital+signatures+lecture" data-video-id="ZOJO6j98i2s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📜</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Stanford CS251, ECDSA Lecture</p>
      <p class="vg-creator">Dan Boneh · Stanford</p>
      <span class="vg-duration">⏱ 20 min · The signing math, formally</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Heartbleed+CVE+2014+0160+OpenSSL+explained" data-video-id="drEBLidpsIM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🩸</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Heartbleed (CVE-2014-0160)</p>
      <p class="vg-creator">Computerphile / various</p>
      <span class="vg-duration">⏱ 14 min · The OpenSSL bug Bitcoin dodged</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=quantum+computing+threat+to+bitcoin+shor+algorithm" data-video-id="nybVFJVXbww" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚛️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Quantum vs Bitcoin: Shor & Grover</p>
      <p class="vg-creator">Andreas Antonopoulos / Jameson Lopp</p>
      <span class="vg-duration">⏱ 18 min · The 2030+ migration question</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Sony+PS3+ECDSA+nonce+reuse+private+key" data-video-id="LP1t_pzxKyE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎮</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Sony PS3 ECDSA Nonce-Reuse Breach</p>
      <p class="vg-creator">Cryptography history channels</p>
      <span class="vg-duration">⏱ 11 min · Why nonce reuse leaks the key</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Computerphile** | UoN series; cryptography explainers consistently well-pitched |
| **3Blue1Brown** | Visual math; the elliptic-curve video is iconic |
| **Andreas Antonopoulos** | Bitcoin-specific cryptography talks |
| **Stanford Online (CS251)** | Boneh's lectures; the gold-standard academic source |
| **Chaincode Labs** | Pieter Wuille, Bitcoin Core developer interviews |

---

## ✅ After watching

Answer these in your notebook (without re-reading):

1. What's the composition of `HASH160`?
2. What curve does Bitcoin use, and how does it differ from NIST P-256?
3. Why is nonce reuse in ECDSA catastrophic?
4. Name one advantage Schnorr has over ECDSA, and when it was activated.
5. What's the size of a Merkle proof for a transaction in a block with N transactions?

If you can answer all 5, you're ready for [Quiz.md](./Quiz.md).
