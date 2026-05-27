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
</style>

# 🎥 Module 2 Videos: TCP/IP & Subnetting

> **How to use:** This module is the single most video-critical of the course — subnetting is a *skill*, not a fact. Watch ALL the essential videos and DO the practice drills along with them.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+IPv4+addressing" data-video-id="JNNcyZ_VE2A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">IPv4 Addressing Fundamentals</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Classes, private, special</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+subnetting+CIDR" data-video-id="I3LBYMXBhus" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Subnetting &amp; CIDR Notation</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min · The core skill</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Sunny+Classroom+subnetting+in+7+seconds" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Subnetting in Under a Minute</p>
      <p class="vg-creator">Sunny Classroom</p>
      <span class="vg-duration">⏱ 11 min · The fastest method</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+VLSM+variable+length" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VLSM Walkthrough</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Different-sized subnets</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+IPv6+addressing" data-video-id="CpLznUxkzg8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">IPv6 Address Format</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · ::, FE80, EUI-64</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+NAT+PAT" data-video-id="UILwCNOC5EI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">NAT &amp; PAT</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 8 min · Address translation</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Practical+Networking+subnetting+mastery" data-video-id="BWZ-MHIhqjM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Subnetting Mastery (Full Course)</p>
      <p class="vg-creator">Practical Networking</p>
      <span class="vg-duration">⏱ 25 min · Deep dive</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dion+Training+IPv6+SLAAC+explained" data-video-id="A6WVj82by3Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SLAAC &amp; IPv6 Auto-Config</p>
      <p class="vg-creator">Dion Training</p>
      <span class="vg-duration">⏱ 8 min · How IPv6 self-configures</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Network+Chuck+IPv4+vs+IPv6+CGNAT" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CGNAT Explained</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 10 min · Why your IP isn't really yours</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=APNIC+IPv6+adoption+statistics+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">IPv6 Adoption Worldwide</p>
      <p class="vg-creator">APNIC / Geoff Huston</p>
      <span class="vg-duration">⏱ 25 min · Conference talk</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=binary+to+decimal+IP+subnetting+practice" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Binary Math for Networking</p>
      <p class="vg-creator">PowerCert</p>
      <span class="vg-duration">⏱ 12 min · Convert binary fast</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NAT64+DNS64+demo+lab" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">NAT64 / DNS64 Demo</p>
      <p class="vg-creator">RIPE NCC</p>
      <span class="vg-duration">⏱ 30 min · Real lab walkthrough</span>
    </div>
  </a>
</div>

---

## 🏆 Best practice sites for subnetting drills

| Site | Why |
|------|-----|
| [subnettingpractice.com](https://subnettingpractice.com/) | Endless randomized drills with instant feedback |
| [subnettingquestions.com](https://www.subnettingquestions.com/) | Classic format, simple UI |
| [ProfMesser's pop quizzes](https://www.professormesser.com/) | Aligned to Network+ |

**Daily drill goal:** 5 fresh subnetting problems, timed. By exam day each should take you under 60 seconds.

---

## ✅ After watching

Answer in your notebook (without re-watching):

1. Convert `255.255.255.224` to CIDR notation.
2. Find the network ID, broadcast, and usable range of `10.50.75.130/27`.
3. Design VLSM subnets from `192.168.1.0/24` for: 50 hosts, 25 hosts, 10 hosts, 2 hosts.
4. What does the IPv6 prefix `FE80::/10` indicate?
5. Why does CGNAT break port forwarding?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch Messer's Subnetting and VLSM videos.
