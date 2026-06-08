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

# 🎥 Module 7 Videos: Lightning Network & Layer-2

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Andreas+Antonopoulos+lightning+network+explained" data-video-id="XCSfoiD8wUA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The Lightning Network Explained</p>
      <p class="vg-creator">Andreas Antonopoulos</p>
      <span class="vg-duration">⏱ 25 min · End-to-end primer</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Lightning+labs+lightning+network+channels+HTLC" data-video-id="E1n3sKKPD_k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔌</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Payment Channels and HTLCs</p>
      <p class="vg-creator">Lightning Labs / Olaoluwa Osuntokun</p>
      <span class="vg-duration">⏱ 22 min · The mechanics</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Jack+Mallers+Strike+El+Salvador+lightning+remittance" data-video-id="_59hrgTiRJU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🇸🇻</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Strike + El Salvador: Lightning Remittances</p>
      <p class="vg-creator">Jack Mallers · Bitcoin 2021/2022</p>
      <span class="vg-duration">⏱ 28 min · The case study</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Bitcoin+beach+El+Zonte+lightning+adoption+story" data-video-id="Z7Q0AwbKZX8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏖️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Bitcoin Beach: El Zonte's Bottom-Up Story</p>
      <p class="vg-creator">Documentary / Mike Peterson</p>
      <span class="vg-duration">⏱ 18 min · How adoption actually happened</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Lightning+node+setup+raspiblitz+umbrel+tutorial" data-video-id="LnZS8k_weYY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🖥️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Run Your Own Lightning Node</p>
      <p class="vg-creator">RaspiBlitz / Umbrel / BTC Sessions</p>
      <span class="vg-duration">⏱ 28 min · Hands-on</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Channel+jamming+lightning+network+open+problem" data-video-id="5wOqgUjYwc0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚧</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Channel Jamming: Lightning's Hardest Problem</p>
      <p class="vg-creator">Bitcoin Optech / Carla Kirk-Cohen</p>
      <span class="vg-duration">⏱ 19 min · The 2024 open problem</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Liquid+Network+Blockstream+sidechain+confidential+transactions" data-video-id="fEPW6RXMGmA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Liquid Network, Federated Sidechain</p>
      <p class="vg-creator">Blockstream</p>
      <span class="vg-duration">⏱ 18 min · The alternative L2</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=splicing+lightning+network+resize+channel+2024" data-video-id="zG8PZsHLung" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🪡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Splicing: Resize Channels Without Closing</p>
      <p class="vg-creator">Lightning Labs / Phoenix wallet</p>
      <span class="vg-duration">⏱ 17 min · The 2024 UX win</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=RGB+protocol+stacks+bitcoin+smart+contracts+layer+2" data-video-id="y2Ak970WpkA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌈</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">RGB and Stacks, Smart Contracts on Bitcoin</p>
      <p class="vg-creator">RGB Foundation / Stacks</p>
      <span class="vg-duration">⏱ 22 min · The smart-contract L2 alternatives</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. State the payment-channel concept in two sentences.
2. What's an HTLC and how does it enable multi-hop?
3. Why was SegWit a prerequisite for Lightning?
4. Distinguish Lightning from Liquid in trust model.
5. What's the channel-jamming problem?
