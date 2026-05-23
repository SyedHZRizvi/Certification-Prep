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

# 🎥 Module 5 Videos: Vulnerabilities & Attacks

> **How to use:** This is the densest module. Watch the Messer overviews first, then John Hammond / IppSec demos to *see* the attacks in action. Seeing > reading for this material.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+malware+types" data-video-id="-eZs8wjjGGE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Malware Types Overview</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min · Virus / worm / Trojan / RAT</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+OWASP+SQL+injection+XSS" data-video-id="qFUOLkEk8AQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SQLi / XSS / CSRF / SSRF Explained</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 14 min · OWASP core attacks</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+network+attacks+DDoS+DNS+poisoning" data-video-id="BoxeL5ybOXI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Network Attacks (DDoS, DNS, ARP)</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · Protocol attacks</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+social+engineering" data-video-id="akoDmeV3LQo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Social Engineering Categories</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · All the -ishings</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Hammond+SQL+injection+walkthrough" data-video-id="Hs1yOSjaVzc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SQL Injection Live Walkthrough</p>
      <p class="vg-creator">John Hammond</p>
      <span class="vg-duration">⏱ 15 min · See it executed</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+credential+attacks+password+spraying" data-video-id="-ZfbifHwEVE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Credential Attacks — Spraying / Stuffing / Brute</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · Tell them apart</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NetworkChuck+phishing+email+anatomy" data-video-id="u9dBGWVwMMA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Anatomy of a Phishing Email</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 13 min · Spotting the tells</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=IppSec+kerberoasting+walkthrough" data-video-id="jUc1J31DNdw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Kerberoasting Hands-On</p>
      <p class="vg-creator">IppSec</p>
      <span class="vg-duration">⏱ 22 min · AD credential attack</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LiveOverflow+buffer+overflow+explanation" data-video-id="oS2O75H57qU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Buffer Overflow From Scratch</p>
      <p class="vg-creator">LiveOverflow</p>
      <span class="vg-duration">⏱ 18 min · See memory corruption</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ransomware+attack+lifecycle+breakdown" data-video-id="d71otGjDseA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Ransomware Attack Lifecycle</p>
      <p class="vg-creator">Mandiant / community</p>
      <span class="vg-duration">⏱ 25 min · Initial access → exfil → encrypt</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | Sec+-aligned overviews of every attack |
| **John Hammond** | Live attack demos and CTFs |
| **IppSec** | HackTheBox walkthroughs of real exploits |
| **LiveOverflow** | Low-level memory & exploit education |
| **NetworkChuck** | Friendly intro to network attacks |
| **MyDFIR** | Detection side — see indicators of these attacks in logs |

---

## ✅ After watching

1. Tell the difference between brute force, dictionary, spraying, and stuffing.
2. SQLi → which web log line is the giveaway?
3. What is the BEST defense against SQL injection?
4. What's the difference between vishing and smishing?
5. Pass-the-Hash — why does it bypass needing the plaintext password?

If solid, you're ready for the [Quiz](./Quiz.md) and [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md).
