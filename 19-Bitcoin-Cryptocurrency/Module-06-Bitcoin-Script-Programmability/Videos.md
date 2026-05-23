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

# 🎥 Module 6 Videos: Bitcoin Script & Programmability

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Andreas+Antonopoulos+bitcoin+script+P2PKH+P2SH" data-video-id="8FeAXjkmDcQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📜</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bitcoin Script Explained</p>
      <p class="vg-creator">Andreas Antonopoulos</p>
      <span class="vg-duration">⏱ 25 min · Stack-based language tour</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SegWit+BIP+141+explained+block+weight" data-video-id="AO7Nxd3pG1Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SegWit (BIP-141): Block Weight + Malleability Fix</p>
      <p class="vg-creator">Bitcoin Magazine technical / Pieter Wuille</p>
      <span class="vg-duration">⏱ 20 min · The 2017 soft fork</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Taproot+activation+November+2021+MuSig2+MAST" data-video-id="oCPrjaw3YVI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>✨</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Taproot Activation: Schnorr + MAST + MuSig2</p>
      <p class="vg-creator">Pieter Wuille · Chaincode Labs</p>
      <span class="vg-duration">⏱ 22 min · BIP-340/341/342</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Bitcoin+CLTV+CSV+timelocks+explained" data-video-id="qHMLy5JjbjQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🕰️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CLTV and CSV Timelocks</p>
      <p class="vg-creator">Murch / Bitcoin Optech</p>
      <span class="vg-duration">⏱ 16 min · BIP-65 + BIP-112</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Ordinals+Inscriptions+protocol+Casey+Rodarmor" data-video-id="sqfCarDdXPM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📝</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Ordinals: How Casey Rodarmor Did It</p>
      <p class="vg-creator">Casey Rodarmor presentation</p>
      <span class="vg-duration">⏱ 18 min · Unintended consequence</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PSBT+multisig+sparrow+wallet+coldcard+tutorial" data-video-id="qJ_SpQX_YKw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Build a 2-of-3 P2WSH Multi-Sig in Sparrow</p>
      <p class="vg-creator">BTC Sessions / Sparrow developer</p>
      <span class="vg-duration">⏱ 18 min · Hands-on</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MuSig2+schnorr+multisig+aggregation+blockstream" data-video-id="n19vDaVrwY4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🤝</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">MuSig2: Schnorr Multi-Sig Aggregation</p>
      <p class="vg-creator">Jonas Nick · Blockstream</p>
      <span class="vg-duration">⏱ 22 min · The math</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OP_CAT+covenants+bitcoin+future+upgrades" data-video-id="_nvNTR5_IX4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🪢</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OP_CAT + Covenants — The 2025-26 Debate</p>
      <p class="vg-creator">Bitcoin Optech / Spiral</p>
      <span class="vg-duration">⏱ 19 min · What Bitcoin might add next</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Bitcoin+script+code+walkthrough+stack+based" data-video-id="CpbDVBjFits" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💻</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Walking Through Real Bitcoin Scripts</p>
      <p class="vg-creator">Programming Bitcoin (Jimmy Song)</p>
      <span class="vg-duration">⏱ 24 min · Engineer's deep-dive</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. Walk through a P2PKH unlock script execution from memory.
2. What 3 problems did SegWit solve?
3. State the key-path vs script-path Taproot distinction.
4. What is MAST and why does it matter for privacy?
5. CLTV vs CSV — one sentence each.
