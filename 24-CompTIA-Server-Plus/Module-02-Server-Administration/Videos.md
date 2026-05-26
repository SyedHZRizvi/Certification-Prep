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

# 🎥 Module 2 Videos: Server Administration (Windows & Linux)

> **How to use:** Watch in the order shown. Pause and follow along on a VM if you can — you learn admin by doing.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SK0-005+Windows+Server+roles+features" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Windows Server Roles &amp; Features</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min · The catalog</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=systemd+systemctl+tutorial+sysadmin" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">systemd / systemctl Crash Course</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 15 min · CLI muscle memory</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Active+Directory+Domain+Services+overview+beginner" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AD DS Overview for Beginners</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 14 min · Forest / Domain / OU / GPO</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SSH+vs+RDP+vs+WinRM+remote+management" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SSH vs RDP vs WinRM</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 12 min · Pick the right tool</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+Server+2022+Server+Core+install+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Server Core 2022 Install &amp; Manage</p>
      <p class="vg-creator">TechSnips</p>
      <span class="vg-duration">⏱ 14 min · GUI-less Windows</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PowerShell+remoting+enable+pssession+invoke-command" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PowerShell Remoting Hands-On</p>
      <p class="vg-creator">Microsoft / community</p>
      <span class="vg-duration">⏱ 12 min · Enter-PSSession + Invoke-Command</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+permissions+chmod+chown+SUID+sticky+bit" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Linux Permissions: chmod, SUID, sticky</p>
      <p class="vg-creator">DistroTube</p>
      <span class="vg-duration">⏱ 14 min · Bits and octals</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DHCP+DORA+wireshark+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">DHCP DORA in Wireshark</p>
      <p class="vg-creator">Chris Greer</p>
      <span class="vg-duration">⏱ 16 min · See the packets</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kerberos+authentication+explained+ticket+granting" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Kerberos Authentication Deep Dive</p>
      <p class="vg-creator">Computerphile / community</p>
      <span class="vg-duration">⏱ 18 min · Tickets, TGT, skew</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Ansible+basics+playbook+windows+linux" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Ansible Basics — Windows + Linux</p>
      <p class="vg-creator">Jeff Geerling</p>
      <span class="vg-duration">⏱ 25 min · Cross-platform automation</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | THE Server+ teacher. Free, comprehensive. |
| **Learn Linux TV** | Jay LaCroix's hands-on Linux admin tutorials |
| **Lawrence Systems** | Sysadmin-focused: networking, storage, AD, pfSense |
| **NetworkChuck** | Energetic infrastructure intros |
| **Jeff Geerling** | Ansible + home-lab + Raspberry Pi server topics |
| **TechSnips** | Short, focused Windows admin demos |
| **Andy Malone MVP** | Microsoft 365 / Windows Server power user content |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Name 5 Windows Server roles and the default port for each.
2. What is the systemd command to enable a service to start at boot AND start it now in one shot? (Hint: there's a `--now` flag.)
3. What does NLA do for RDP, and why does it matter?
4. Why does Kerberos require time sync within 5 minutes?
5. Give the chmod octal for `rwxr-xr--`.
6. What's the difference between `dnf install nginx` and `apt install nginx`?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
