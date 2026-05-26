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

# 🎥 Module 3 Videos: Package Management

> **How to use:** Click any video card to search YouTube. Curated picks shown in the order to watch them. Pause and take notes after each one.

## ⭐ Essential watching (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=apt+package+manager+tutorial+ubuntu+debian" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">apt for Ubuntu/Debian — Complete Tutorial</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 14 min · install, search, upgrade, hold</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=dnf+rpm+tutorial+RHEL+Fedora+package+management" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">dnf & rpm — RHEL/Fedora Side</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 13 min · history, provides, signatures</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=dpkg+commands+tutorial+linux" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">dpkg Low-Level Debian Tools</p>
      <p class="vg-creator">tutoriaLinux</p>
      <span class="vg-duration">⏱ 11 min · -i, -L, -S in depth</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=snap+vs+flatpak+vs+appimage+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Snap vs Flatpak vs AppImage</p>
      <p class="vg-creator">DistroTube</p>
      <span class="vg-duration">⏱ 12 min · The universal-package showdown</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=configure+make+install+linux+source+compilation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">configure / make / make install</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 10 min · Building from source</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=apt+repository+add+gpg+signed+by+keyring" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Adding Third-Party apt Repos Securely</p>
      <p class="vg-creator">Jay LaCroix / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 11 min · signed-by, keyrings dir</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EPEL+repository+RHEL+CentOS+enable" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Enabling EPEL on RHEL/Rocky/AlmaLinux</p>
      <p class="vg-creator">Linuxhint</p>
      <span class="vg-duration">⏱ 8 min · Extra Packages for Enterprise Linux</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=apt+pinning+preferences+priority+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">apt Pinning & Preferences Explained</p>
      <p class="vg-creator">DorianDotSlash</p>
      <span class="vg-duration">⏱ 12 min · The under-tested superpower</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=dnf+history+undo+rollback+RHEL" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">dnf history & undo for Rollback</p>
      <p class="vg-creator">Red Hat Enterprise Linux Channel</p>
      <span class="vg-duration">⏱ 9 min · One-command rollback</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=build+RPM+package+from+scratch+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Build Your First RPM Package</p>
      <p class="vg-creator">Sysadmin Hacks</p>
      <span class="vg-duration">⏱ 20 min · rpmbuild + .spec files</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Learn Linux TV** | The go-to for distro-neutral package management explanations |
| **Veronica Explains** | Modern Linux sysadmin perspective; thorough dnf coverage |
| **DistroTube** | Power-user perspective on cross-distro tools and universal packagers |
| **Red Hat Enterprise Linux Channel** | Official RHEL videos for dnf, systemd, security |
| **Canonical / Ubuntu Channel** | Official Snap and apt content |
| **tutoriaLinux** | Concise dpkg/rpm deep dives |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Map each command to its equivalent: `apt search ↔ ?`, `rpm -qf ↔ ?`, `dnf provides ↔ ?` (Debian side).
2. Where do repository config files live for apt vs dnf? Show paths.
3. What's the difference between `apt remove` and `apt purge`?
4. Why is `gpgcheck=0` the wrong fix for a "Public key not installed" error?
5. After source-installing software via `./configure && make && make install`, why won't `dpkg -l` or `rpm -qa` list it?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the apt + dnf videos.
