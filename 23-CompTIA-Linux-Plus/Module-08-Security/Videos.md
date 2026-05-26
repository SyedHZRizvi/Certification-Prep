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

# 🎥 Module 8 Videos: Linux Security & Hardening

> **How to use:** Click any card. The SELinux videos are the highest exam-leverage of any video in this entire course — watch them more than once if needed.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SELinux+tutorial+beginner+enforcing+permissive" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SELinux from Zero to Working</p>
      <p class="vg-creator">Red Hat Enterprise Linux Channel</p>
      <span class="vg-duration">⏱ 18 min · Modes, contexts, semanage</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SELinux+troubleshooting+ausearch+AVC+denials" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Debugging SELinux Denials (ausearch + sealert)</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 14 min · The right way to fix denials</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LUKS+cryptsetup+linux+encrypted+disk+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LUKS Disk Encryption End-to-End</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 12 min · luksFormat, luksOpen, crypttab</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=fail2ban+linux+ssh+tutorial+configuration" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">fail2ban for SSH Brute-Force</p>
      <p class="vg-creator">DorianDotSlash</p>
      <span class="vg-duration">⏱ 10 min · jail.local + bantime</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+auditd+rules+tutorial+ausearch+aureport" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">auditd, ausearch & aureport</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 13 min · -w -p wa -k key</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AppArmor+ubuntu+profiles+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AppArmor on Ubuntu</p>
      <p class="vg-creator">Canonical / Ubuntu Channel</p>
      <span class="vg-duration">⏱ 11 min · aa-status, profiles, modes</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GPG+encrypt+sign+linux+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">GPG Encrypt, Decrypt, Sign, Verify</p>
      <p class="vg-creator">DistroTube</p>
      <span class="vg-duration">⏱ 12 min · The full workflow</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=sysctl+linux+hardening+sysctl.d+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">sysctl Hardening Knobs</p>
      <p class="vg-creator">tutoriaLinux</p>
      <span class="vg-duration">⏱ 12 min · ip_forward, rp_filter, etc.</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CIS+Linux+benchmark+hardening+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">CIS Benchmark Linux Hardening</p>
      <p class="vg-creator">SANS / John Strand</p>
      <span class="vg-duration">⏱ 25 min · Industry-standard checklist</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Lynis+linux+security+audit+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Lynis Security Audit Tool</p>
      <p class="vg-creator">Hak5 / CISOfy</p>
      <span class="vg-duration">⏱ 14 min · Scan your own server</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SELinux+booleans+httpd_can_network_connect" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SELinux Booleans Cheat Sheet</p>
      <p class="vg-creator">Red Hat / Server Academy</p>
      <span class="vg-duration">⏱ 10 min · getsebool, setsebool -P</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Red Hat Enterprise Linux Channel** | THE authoritative SELinux content |
| **Learn Linux TV** | Best general security demos |
| **NetworkChuck** | Best LUKS introduction |
| **Veronica Explains** | Best auditd coverage |
| **Hak5** | Hands-on hardening + audit demos |
| **SANS Institute** | Industry-grade security videos |
| **John Strand / Black Hills InfoSec** | Pragmatic real-world hardening |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. SELinux modes: name them. How do you switch between enforcing and permissive at runtime?
2. The 3-step fix for "nginx is denied reading `/srv/myapp/static/`": commands?
3. Show the 3 commands to create a LUKS volume on `/dev/sdb1`, unlock it as `mydata`, and put ext4 on it.
4. fail2ban: which file would you edit to set bantime=1h for sshd?
5. auditd rule to watch `/etc/sudoers` for any modification, tagged "sudo-watch"?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the SELinux + LUKS videos.
