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

# 🎥 Module 6 Videos: Networking, SSH & Firewalls

> **How to use:** Click any card. Watch in order. Try every command on a practice VM.

## ⭐ Essential watching (~65 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ip+command+iproute2+tutorial+linux" data-video-id="wWyL6DdHYBc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ip command, Modern Linux Networking</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 15 min · addr / link / route / neigh</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OpenSSH+server+sshd+configuration+tutorial" data-video-id="3FKsdbjzBcc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">OpenSSH Server Hardening</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 14 min · PermitRootLogin, keys, Match</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ssh+key+based+authentication+tutorial+ssh-copy-id" data-video-id="hHs98hLtZJo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SSH Keys & ssh-copy-id</p>
      <p class="vg-creator">DorianDotSlash</p>
      <span class="vg-duration">⏱ 12 min · ed25519, authorized_keys, modes</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=firewalld+zones+tutorial+RHEL+CentOS" data-video-id="9xR4KsGUGRk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">firewalld Zones & Services</p>
      <p class="vg-creator">Red Hat Enterprise Linux Channel</p>
      <span class="vg-duration">⏱ 13 min · Zones, --permanent, rich rules</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=nftables+tutorial+replace+iptables" data-video-id="EGKhIljDPCw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">nftables, The iptables Replacement</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 11 min · nft syntax, tables, chains</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ss+command+linux+tutorial+netstat+replacement" data-video-id="ewMsdN2GFcc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ss, Replacing netstat</p>
      <p class="vg-creator">tutoriaLinux</p>
      <span class="vg-duration">⏱ 9 min · -tulpn and beyond</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ssh+port+forwarding+local+remote+dynamic+tutorial" data-video-id="ngbSsMAYYsE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SSH Tunnels: -L, -R, -D</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 12 min · The three forwarding flavors</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=nmcli+tutorial+networkmanager+command+line" data-video-id="v-soSvSsw18" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">nmcli, NetworkManager CLI</p>
      <p class="vg-creator">Jay LaCroix / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 14 min · connection add / mod / up</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=tcpdump+wireshark+linux+packet+capture+tutorial" data-video-id="5pDepRoEXNs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">tcpdump for sysadmins</p>
      <p class="vg-creator">LiveOverflow / DevOps Toolkit</p>
      <span class="vg-duration">⏱ 18 min · Filters, -w for Wireshark</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=netplan+ubuntu+server+static+ip+tutorial" data-video-id="ShiPYcw6qXw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">netplan on Ubuntu Server</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 10 min · YAML config + apply</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ufw+ubuntu+firewall+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ufw, Ubuntu's Simple Firewall</p>
      <p class="vg-creator">DistroTube</p>
      <span class="vg-duration">⏱ 8 min · allow/deny basics</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Learn Linux TV** | Distro-neutral, hands-on demos for every networking command |
| **NetworkChuck** | Best SSH tunneling explanations |
| **Red Hat Enterprise Linux Channel** | Authoritative firewalld + RHEL networking content |
| **Veronica Explains** | Modern Linux networking from a sysadmin's POV |
| **DistroTube** | Power-user perspective on every tool |
| **LiveOverflow** | Offensive-security angle, great for understanding what attackers see |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Three `ip` subcommands replacing what `ifconfig`/`netstat`/`route`/`arp` once did.
2. Where would you check for a "key auth refused because perms are wrong" error in sshd logs?
3. firewalld: what's the difference between making a change with `--permanent` vs without it?
4. SSH: what does `ssh -L 8080:db:5432 jump` accomplish? What about `-R`?
5. Steps to safely change the listening port of sshd on a RHEL system.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the SSH and firewalld videos.
