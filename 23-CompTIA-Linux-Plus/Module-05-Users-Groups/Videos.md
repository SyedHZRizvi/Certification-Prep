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

# 🎥 Module 5 Videos: Users, Groups & sudo

> **How to use:** Click any card. Watch in order. Try each command on a practice VM.

## ⭐ Essential watching (~50 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=linux+useradd+usermod+userdel+tutorial" data-video-id="ZgH1sdCnBKo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">useradd, usermod, userdel, User Lifecycle</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 14 min · The full add/modify/delete cycle</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=linux+sudoers+visudo+tutorial" data-video-id="jwnvKOjmtEA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">sudoers & visudo: The Right Way</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 12 min · Syntax, NOPASSWD, drop-ins</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=linux+passwd+shadow+group+files+explained" data-video-id="ADvfAK68xoU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">/etc/passwd, shadow & group Explained</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 11 min · Field-by-field walk-through</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+PAM+pluggable+authentication+modules+tutorial" data-video-id="CagsZdJ3ZhA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PAM Demystified for sysadmins</p>
      <p class="vg-creator">tutoriaLinux</p>
      <span class="vg-duration">⏱ 13 min · Auth stacks, faillock</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=linux+chage+password+aging+tutorial" data-video-id="rNuGmPQQ2_s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">chage & Password Aging Policy</p>
      <p class="vg-creator">DorianDotSlash</p>
      <span class="vg-duration">⏱ 9 min · -M, -W, -E, -d 0</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=linux+sudo+drop-in+sudoers.d+tutorial" data-video-id="c5sQDB979c0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">/etc/sudoers.d Drop-ins Done Right</p>
      <p class="vg-creator">DevOps Toolkit</p>
      <span class="vg-duration">⏱ 10 min · Per-feature sudoers files</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=linux+groups+primary+secondary+newgrp+tutorial" data-video-id="E-yz-P-f2Sw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Primary & Secondary Groups in Depth</p>
      <p class="vg-creator">Jay LaCroix / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 11 min · usermod -aG, newgrp, id</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+pam_faillock+lockout+failed+login+attempts" data-video-id="wYArWsHDeiQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">pam_faillock Account Lockout</p>
      <p class="vg-creator">Red Hat Enterprise Linux Channel</p>
      <span class="vg-duration">⏱ 12 min · Deny after N failed</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SSSD+LDAP+linux+integration+tutorial" data-video-id="CGt6oHZPToY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SSSD + LDAP for Enterprise Auth</p>
      <p class="vg-creator">Red Hat / Server Academy</p>
      <span class="vg-duration">⏱ 18 min · Beyond local accounts</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=linux+pwquality+password+complexity+policy" data-video-id="RKnoBgvaCDY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Password Quality with pam_pwquality</p>
      <p class="vg-creator">Linuxhint</p>
      <span class="vg-duration">⏱ 8 min · minlen, dcredit, etc.</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Learn Linux TV** | Distro-neutral user/group walk-throughs |
| **NetworkChuck** | Best beginner-friendly sudo intro |
| **Red Hat Enterprise Linux Channel** | Official PAM and identity-management content |
| **Veronica Explains** | Modern sysadmin perspective on /etc/passwd |
| **tutoriaLinux** | Compact, focused tutorials |
| **DorianDotSlash** | Good practical security-leaning content |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. List the 7 fields of `/etc/passwd`.
2. What's the difference between `usermod -G groups` and `usermod -aG groups`?
3. Show a sudoers line that lets group `webadmins` restart nginx without a password.
4. Why is `visudo` essential vs `vim /etc/sudoers`?
5. Name the 4 PAM management groups and the 4 control flags.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the sudoers + PAM videos.
