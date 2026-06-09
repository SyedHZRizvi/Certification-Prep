<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
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

# 🎥 Module 4 Videos: Payments, Tax & Fraud

## ⭐ Essential watching (~75 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="1H1ckQslXLM" href="https://www.youtube.com/results?search_query=Stripe+Atlas+payments+API+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Stripe Payments API, End-to-End</p>
      <p class="vg-creator">Stripe Developers</p>
      <span class="vg-duration">⏱ 22 min · PaymentIntents, Customers, Disputes</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="EOMieqiOwuw" href="https://www.youtube.com/results?search_query=PCI+DSS+4.0+changes+ecommerce" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PCI-DSS v4.0, What Changed</p>
      <p class="vg-creator">PCI Council / Stripe</p>
      <span class="vg-duration">⏱ 18 min · v4.0 mandatory March 2025</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="rf494QY-DQ4" href="https://www.youtube.com/results?search_query=Wayfair+sales+tax+economic+nexus+states" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Wayfair (2018) & Economic Nexus Explained</p>
      <p class="vg-creator">TaxJar / Avalara</p>
      <span class="vg-duration">⏱ 20 min · 45-state landscape</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="bBVoYoHDxyc" href="https://www.youtube.com/results?search_query=EU+VAT+IOSS+OSS+ecommerce+cross+border" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EU VAT, OSS, IOSS, Cross-Border 2021</p>
      <p class="vg-creator">European Commission / Stripe Tax</p>
      <span class="vg-duration">⏱ 16 min · 27-state simplification</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="TDD0PPoZ0bo" href="https://www.youtube.com/results?search_query=3DS2+SCA+PSD2+strong+customer+authentication" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">3DS2 & SCA, PSD2 Explained</p>
      <p class="vg-creator">Adyen / Stripe</p>
      <span class="vg-duration">⏱ 18 min · Frictionless authentication</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="kzFLh2fhlWk" href="https://www.youtube.com/results?search_query=Klarna+BNPL+regulation+UK+FCA+2024" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Klarna & BNPL Regulation, UK FCA 2024</p>
      <p class="vg-creator">Various, Financial Times / TechCrunch</p>
      <span class="vg-duration">⏱ 22 min · The 85% valuation crash + recovery</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Oea6RqppAQ0" href="https://www.youtube.com/results?search_query=Signifyd+chargeback+fraud+ecommerce+guarantee" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Signifyd Chargeback Guarantee Model</p>
      <p class="vg-creator">Signifyd</p>
      <span class="vg-duration">⏱ 18 min · Insurance-model fraud</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="2JDKquIMJws" href="https://www.youtube.com/results?search_query=Adyen+enterprise+payments+platform+architecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Adyen's Enterprise Payments Platform</p>
      <p class="vg-creator">Adyen</p>
      <span class="vg-duration">⏱ 20 min · Unified online + in-store + mobile</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="mqBsMDxpFO0" href="https://www.youtube.com/results?search_query=Apple+Pay+Shop+Pay+conversion+rates" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Wallets, Apple Pay vs Shop Pay vs PayPal</p>
      <p class="vg-creator">Baymard / Shopify</p>
      <span class="vg-duration">⏱ 14 min · Conversion benchmarks</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="a_IChczvv3Q" href="https://www.youtube.com/results?search_query=friendly+fraud+chargeback+abuse+merchants" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Friendly Fraud, The 40% Problem</p>
      <p class="vg-creator">Visa / Riskified</p>
      <span class="vg-duration">⏱ 12 min · Chargeback abuse trends</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. Map the payment stack from issuer → merchant.
2. State the four PCI Compliance Levels and three SAQ types.
3. What's SCA and what's the 3DS2 frictionless flow?
4. State Wayfair's threshold rule and 3 example EU VAT rates.
5. Describe the Klarna BNPL regulatory case in 2024.
