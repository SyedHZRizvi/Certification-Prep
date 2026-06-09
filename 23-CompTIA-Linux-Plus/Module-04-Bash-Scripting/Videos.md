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

# 🎥 Module 4 Videos: Bash Scripting & Automation

> **How to use:** Click any video card to search YouTube. Watch them in order. Try the snippets in a terminal as you go.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=bash+scripting+tutorial+beginners+full+course" data-video-id="2733cRPudvI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bash Scripting Full Beginner Course</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 25 min · Variables, loops, conditionals</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=bash+set+euo+pipefail+defensive+scripting" data-video-id="LnAWCi7Uh5k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">set -euo pipefail: Safer Bash</p>
      <p class="vg-creator">DevOps Toolkit</p>
      <span class="vg-duration">⏱ 10 min · The defensive header</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=sed+awk+grep+tutorial+linux+command+line" data-video-id="yCTnihfbPCo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">sed, awk, grep, The Pipeline Toolkit</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 15 min · The text-processing trio</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=cron+tutorial+crontab+linux" data-video-id="BhxAMi9QYjk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">cron & crontab, The Classic Scheduler</p>
      <p class="vg-creator">Jay LaCroix / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 11 min · 5-field format, gotchas</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=systemd+timers+vs+cron+tutorial" data-video-id="DixhIrgMy3M" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">systemd Timers, Modern Scheduling</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 12 min · OnCalendar, Persistent=true</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=shellcheck+tutorial+bash+linting" data-video-id="X3BIc9EHBuk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ShellCheck: Lint Your Bash</p>
      <p class="vg-creator">DistroTube</p>
      <span class="vg-duration">⏱ 9 min · Catches 90% of bugs before runtime</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=bash+functions+tutorial+local+return" data-video-id="Ze6NbMyTr_U" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Bash Functions Done Right</p>
      <p class="vg-creator">DorianDotSlash</p>
      <span class="vg-duration">⏱ 13 min · local, return, stdout return</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=awk+programming+language+tutorial+gawk" data-video-id="zmYhR8cUX90" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">awk as a Real Programming Language</p>
      <p class="vg-creator">Computerphile / Brian Kernighan</p>
      <span class="vg-duration">⏱ 18 min · BEGIN/END, associative arrays</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=bash+parameter+expansion+tutorial" data-video-id="S4D9KaW3ERw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">${VAR%suffix} and Parameter Expansion</p>
      <p class="vg-creator">tutoriaLinux</p>
      <span class="vg-duration">⏱ 11 min · The cryptic # / % / / forms</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=regex+tutorial+grep+sed+linux" data-video-id="VNVjPuLdb64" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Regex for Linux: grep, sed, awk</p>
      <p class="vg-creator">Crash Course Computer Science adjacent</p>
      <span class="vg-duration">⏱ 20 min · Anchors, classes, alternation</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Learn Linux TV** | The most comprehensive bash content on YouTube |
| **NetworkChuck** | Energetic intros that make hard concepts approachable |
| **DevOps Toolkit (Viktor Farcic)** | Production-grade bash + automation patterns |
| **Veronica Explains** | Modern sysadmin scripting |
| **DistroTube** | Power-user scripting, dotfiles, customization |
| **Bryan Lunduke / The Linux Cast** | Linux culture + scripting context |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Write the defensive header you'd put at the top of every serious bash script.
2. What's the difference between `[ ]` and `[[ ]]`? When do you use each?
3. Write a one-liner: print just the usernames of all users with UID ≥ 1000 from `/etc/passwd`.
4. What's wrong with `for line in $(cat file); do ...; done`? Show the correct pattern.
5. Show a 3-field crontab entry that runs `/usr/local/bin/backup.sh` every weekday at 02:30.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the awk and `set -euo pipefail` videos.
