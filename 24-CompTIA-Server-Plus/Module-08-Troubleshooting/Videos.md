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

# 🎥 Module 8 Videos: Troubleshooting & Documentation

> **How to use:** Take an old machine and break something deliberately, pull a network cable, remove a stick of RAM, change the boot order. Then debug it. You learn troubleshooting by doing.

## ⭐ Essential watching (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CompTIA+6+step+troubleshooting+methodology" data-video-id="_MhEZbyHbyk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The 6-Step Methodology</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Memorize the order</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=POST+beep+codes+server+troubleshooting" data-video-id="qBs8Zq_5Mjc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">POST + Beep Codes + LEDs</p>
      <p class="vg-creator">ServeTheHome</p>
      <span class="vg-duration">⏱ 12 min · Reading the hardware</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+performance+tools+top+iostat+vmstat+sar" data-video-id="DPICFeYn5es" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Linux Perf Tools, top, iostat, vmstat</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 15 min · CPU/RAM/disk triage</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+performance+monitor+counters+server" data-video-id="wpSif29l778" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Windows PerfMon Counters</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 14 min · The key counters</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ping+traceroute+mtr+tcpdump+troubleshoot+network" data-video-id="L3T5Wl8s3hw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Network Diagnostic Toolkit</p>
      <p class="vg-creator">Chris Greer</p>
      <span class="vg-duration">⏱ 14 min · ping → tcpdump</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=postmortem+blameless+SRE+google" data-video-id="qgHWzQ2zcqQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Blameless Post-Mortems</p>
      <p class="vg-creator">Google SRE / community</p>
      <span class="vg-duration">⏱ 12 min · Culture > tools</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CMDB+runbook+documentation+best+practices" data-video-id="bZoB3EV4tuw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CMDB + Runbook Hygiene</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 12 min · Docs that survive</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=smartctl+drive+health+SMART+attributes" data-video-id="eUKezorl9Lk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SMART Attributes Deep Dive</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 16 min · smartctl walk-through</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+EBS+2012+outage+post+mortem+lessons" data-video-id="Lrdh1xdkpgw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS EBS 2012 Outage, Lessons</p>
      <p class="vg-creator">community case study</p>
      <span class="vg-duration">⏱ 22 min · Cascading failures</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Brendan+Gregg+USE+method+performance" data-video-id="K9w2cipqfvc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">USE Method, Performance Analysis</p>
      <p class="vg-creator">Brendan Gregg</p>
      <span class="vg-duration">⏱ 25 min · Utilization/Saturation/Errors</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer these in your notebook:

1. Recite the 6 troubleshooting steps in order.
2. What's the FIRST thing to check on a server beeping at boot?
3. Name the Linux command you'd use for: CPU triage, disk I/O triage, network throughput test, packet capture.
4. What does the blue LED on a server's drive bay typically mean?
5. Why is a runbook worth more than your memory at 3 a.m.?
6. What makes a post-mortem "blameless"?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
