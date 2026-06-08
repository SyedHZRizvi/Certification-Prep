<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
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
.vg-section-title { font-size: 18px; font-weight: 800; margin: 30px 0 8px; color: #0f172a; }
.vg-section-desc { font-size: 14px; color: #64748b; margin: 0 0 4px; }
</style>

# 🎥 Module 2 Videos: Cryptography & PKI

> **How to use:** Crypto is intimidating until you see it visualized. Watch the essentials in order, the analogy lock-and-mailbox videos make symmetric vs asymmetric click instantly.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+Symmetric+vs+Asymmetric" data-video-id="u61J0xR_XPU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Symmetric vs Asymmetric Cryptography</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 8 min · The foundation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+Hashing+Digital+Signatures" data-video-id="EcGmQjl6XEo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hashing &amp; Digital Signatures</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · The full recipe</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+PKI+Public+Key+Infrastructure" data-video-id="xHAMEF7-inQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PKI &amp; Certificate Chains</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min · CA / intermediate / leaf</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Computerphile+Diffie+Hellman+key+exchange" data-video-id="NmM9HA2MQGI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Diffie-Hellman Key Exchange Visualized</p>
      <p class="vg-creator">Computerphile</p>
      <span class="vg-duration">⏱ 8 min · Paint mixing analogy</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Computerphile+AES+explained" data-video-id="O4xNJsjtN6E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AES Explained</p>
      <p class="vg-creator">Computerphile</p>
      <span class="vg-duration">⏱ 14 min · How AES actually works</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+certificate+types+SAN+wildcard" data-video-id="cLa94BZH_9s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Certificate Types (DV, OV, EV, SAN, Wildcard)</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · Which cert when</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NetworkChuck+how+HTTPS+TLS+works" data-video-id="UIcCwuYzxcE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">How HTTPS / TLS Actually Works</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 15 min · End-to-end handshake</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Computerphile+elliptic+curve+cryptography" data-video-id="NF1pwjL9-DE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Elliptic Curve Cryptography Deep Dive</p>
      <p class="vg-creator">Computerphile</p>
      <span class="vg-duration">⏱ 20 min · Math-flavored</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=password+hashing+bcrypt+argon2+explained" data-video-id="8ZtInClXe1Q" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Password Hashing: bcrypt vs Argon2</p>
      <p class="vg-creator">Various security creators</p>
      <span class="vg-duration">⏱ 18 min · Why salt &amp; stretch</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Hammond+openssl+certificate+commands" data-video-id="wzbf9ldvBjM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OpenSSL Cert Commands (PEM/DER/PKCS12)</p>
      <p class="vg-creator">John Hammond</p>
      <span class="vg-duration">⏱ 22 min · Hands-on, great for PBQs</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | Domain-by-domain free Sec+ coverage; start here for every module |
| **Computerphile** | Crypto explained by university researchers; visual, friendly |
| **NetworkChuck** | Energetic TLS / VPN / HTTPS breakdowns |
| **John Hammond** | CLI demos with `openssl`, useful for PBQ "interpret this output" questions |
| **Dion Training** | Polished scenario-based explanations |
| **LiveOverflow** | Deeper offensive perspective on weak crypto |

---

## ✅ After watching

1. Explain the difference between encrypting with a public key vs signing with a private key.
2. What's Perfect Forward Secrecy and which key-exchange algorithms provide it?
3. Why is plain SHA-256 NOT enough for password storage? What is enough?
4. Walk through what happens when your browser sees an "untrusted certificate" warning.
5. When would you choose a SAN cert over a wildcard cert?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
