<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(99,102,241,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #eef0fb;color:#1f2937}
.fc-app *{box-sizing:border-box}
.fc-controls{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-bottom:.85rem}
.fc-controls-left,.fc-controls-right{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}
.fc-select,.fc-btn{font-family:inherit;font-size:.9rem;padding:.5rem .85rem;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#1f2937;cursor:pointer;transition:all .15s ease;line-height:1.2}
.fc-select:hover,.fc-btn:hover{border-color:#6366f1;color:#6366f1}
.fc-btn.fc-primary{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-primary:hover{filter:brightness(1.08);color:#fff;border-color:transparent;box-shadow:0 4px 14px rgba(99,102,241,.35)}
.fc-btn.fc-success{background:#10b981;color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-success:hover{background:#059669;color:#fff;border-color:transparent}
.fc-btn.fc-danger{background:#fff;color:#dc2626;border-color:#fecaca;font-weight:600}
.fc-btn.fc-danger:hover{background:#dc2626;color:#fff;border-color:#dc2626}
.fc-btn.fc-ghost{background:#f3f4f6;border-color:#e5e7eb;font-size:.82rem;color:#6b7280}
.fc-btn.fc-ghost:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca}
.fc-counter{font-size:.95rem;color:#4b5563;font-weight:600;font-variant-numeric:tabular-nums}
.fc-progress{height:8px;background:#eef0fb;border-radius:99px;overflow:hidden;margin-bottom:1rem}
.fc-progress-bar{height:100%;background:linear-gradient(90deg,#6366f1,#8b5cf6);border-radius:99px;width:0%;transition:width .3s ease}
.fc-card-wrap{perspective:1400px;margin-bottom:1rem}
.fc-card{position:relative;width:100%;min-height:240px;cursor:pointer;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.fc-card.fc-flipped{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:1px solid #e0e7ff;box-shadow:0 4px 18px rgba(99,102,241,.12)}
.fc-front{background:linear-gradient(135deg,#eef2ff 0%,#f5f3ff 100%)}
.fc-back{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;transform:rotateY(180deg)}
.fc-label{position:absolute;top:.85rem;left:1rem;font-size:.7rem;letter-spacing:.12em;font-weight:700;text-transform:uppercase;opacity:.65}
.fc-known{position:absolute;top:.85rem;right:1rem;font-size:1.1rem;color:#10b981;font-weight:700}
.fc-back .fc-known{color:#86efac}
.fc-text{font-size:1.18rem;line-height:1.55;font-weight:500;max-width:100%;word-wrap:break-word}
.fc-back .fc-text{font-weight:500}
.fc-hint{position:absolute;bottom:.85rem;left:0;right:0;font-size:.75rem;opacity:.55;letter-spacing:.05em}
.fc-actions{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}
.fc-actions .fc-btn{flex:1 1 auto;min-width:108px}
.fc-empty{text-align:center;padding:2rem;color:#6b7280}
.fc-source-hidden{display:none !important}
@media (max-width:640px){
  .fc-app{margin:1rem .5rem 1.5rem;padding:1rem;border-radius:10px}
  .fc-controls{flex-direction:column;align-items:stretch}
  .fc-controls-left,.fc-controls-right{justify-content:space-between}
  .fc-select,.fc-counter{width:100%;text-align:center}
  .fc-card{min-height:220px}
  .fc-face{padding:1.6rem 1rem}
  .fc-text{font-size:1.05rem}
  .fc-actions .fc-btn{flex:1 1 45%;min-width:0;font-size:.85rem;padding:.55rem .4rem}
}
</style>

<div class="fc-app" id="fc-app" role="region" aria-label="Interactive flashcards">
  <div class="fc-controls">
    <div class="fc-controls-left">
      <select class="fc-select" id="fc-section" aria-label="Filter by section"><option value="__all__">All Sections</option></select>
    </div>
    <div class="fc-controls-right">
      <span class="fc-counter" id="fc-counter">Card 0 of 0</span>
      <button class="fc-btn fc-ghost" id="fc-reset" title="Clear known-card progress">Reset progress</button>
    </div>
  </div>
  <div class="fc-progress" aria-hidden="true"><div class="fc-progress-bar" id="fc-progress-bar"></div></div>
  <div class="fc-card-wrap">
    <div class="fc-card" id="fc-card" role="button" tabindex="0" aria-label="Flashcard. Click or press space to flip.">
      <div class="fc-face fc-front">
        <span class="fc-label">Question</span>
        <span class="fc-known" id="fc-known-front" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-question">Loading flashcards…</div>
        <span class="fc-hint">Click to flip</span>
      </div>
      <div class="fc-face fc-back">
        <span class="fc-label">Answer</span>
        <span class="fc-known" id="fc-known-back" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-answer"></div>
        <span class="fc-hint">Click to flip back</span>
      </div>
    </div>
  </div>
  <div class="fc-actions">
    <button class="fc-btn" id="fc-prev" aria-label="Previous card">&larr; Previous</button>
    <button class="fc-btn fc-success" id="fc-got" aria-label="Mark as known and advance">&#10003; Got it</button>
    <button class="fc-btn fc-danger" id="fc-tryagain" aria-label="Mark as not known and advance">&#10007; Try again</button>
    <button class="fc-btn" id="fc-shuffle" aria-label="Shuffle cards">&#128256; Shuffle</button>
    <button class="fc-btn fc-primary" id="fc-next" aria-label="Next card">Next &rarr;</button>
  </div>
</div>

<script>
(function(){
  var STORAGE_KEY = 'certhub-23-CompTIA-Linux-Plus-flashcards';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    // Parse Q/A pairs from rendered DOM. Look for <p> tags containing <strong>Q:</strong> / <strong>A:</strong> within the article body.
    // Strategy: scan the document body sequentially, tracking current section as we encounter <h2>.
    var container = app.parentNode;
    // Walk all relevant elements after the widget in document order
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null, pendingQEl = null;
    var sourceEls = []; // collect <p> Q/A elements + their <h2> headings to hide later
    var node;
    while((node = walker.nextNode())){
      if(node.tagName === 'H2'){
        var h2text = (node.textContent || '').trim();
        if(h2text){
          currentSection = h2text;
          if(!seen[h2text]){ seen[h2text] = true; sections.push(h2text); }
          sourceEls.push(node);
        }
        pendingQ = null; pendingQEl = null;
        continue;
      }
      // <p> node
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
        // Strip leading "Q:" from full text
        var qBody = fullText.replace(/^Q:\s*/i, '').trim();
        pendingQ = { section: currentSection, q: qBody };
        pendingQEl = node;
        sourceEls.push(node);
      } else if(marker.indexOf('A:') === 0 && pendingQ){
        var aBody = fullText.replace(/^A:\s*/i, '').trim();
        pendingQ.a = aBody;
        cards.push(pendingQ);
        sourceEls.push(node);
        pendingQ = null; pendingQEl = null;
      }
    }
    if(cards.length === 0){
      document.getElementById('fc-question').textContent = 'No flashcards found. The source content is shown below.';
      return;
    }
    // Hide source markdown now that we have cards. Also hide separating <hr> between sections that follow Q/A blocks.
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    // Hide the leading H1 + intro blockquote? Keep them. Hide all <hr> within the article body that appear after our widget — they're section separators in the source list.
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      // Only hide hrs that come after the widget AND are between hidden sections
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){
        hr.classList.add('fc-source-hidden');
      }
    });
    // Also hide ordered/unordered lists and the closing H2s ("STUDY TIPS", "BEFORE THE EXAM") that follow the cards
    var allH2 = document.querySelectorAll('h2');
    allH2.forEach(function(h){ if(!h.classList.contains('fc-source-hidden') && h.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) h.classList.add('fc-source-hidden'); });
    var allOL = document.querySelectorAll('ol, ul');
    allOL.forEach(function(l){ if(l.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) l.classList.add('fc-source-hidden'); });
    var trailingP = document.querySelectorAll('p');
    trailingP.forEach(function(p){
      if(p.classList.contains('fc-source-hidden')) return;
      if(p.closest('.fc-app')) return;
      if(p.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) p.classList.add('fc-source-hidden');
    });
    var trailingBQ = document.querySelectorAll('blockquote');
    trailingBQ.forEach(function(bq){ if(bq.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) bq.classList.add('fc-source-hidden'); });

    // Build section dropdown
    var sectionSel = document.getElementById('fc-section');
    sections.forEach(function(s){
      var opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sectionSel.appendChild(opt);
    });

    // Load known-card state
    var known = {};
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if(raw) known = JSON.parse(raw) || {};
    } catch(e){ known = {}; }

    function cardId(c){ return c.section + '||' + c.q; }
    function saveKnown(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(known)); } catch(e){} }

    var deck = cards.slice();
    var idx = 0;
    var sectionFilter = '__all__';

    function applyFilter(){
      if(sectionFilter === '__all__'){ deck = cards.slice(); }
      else { deck = cards.filter(function(c){ return c.section === sectionFilter; }); }
      idx = 0;
      render();
    }

    function shuffle(){
      for(var i = deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
      }
      idx = 0;
      render();
    }

    var cardEl = document.getElementById('fc-card');
    var qEl = document.getElementById('fc-question');
    var aEl = document.getElementById('fc-answer');
    var counterEl = document.getElementById('fc-counter');
    var progressBar = document.getElementById('fc-progress-bar');
    var knownFront = document.getElementById('fc-known-front');
    var knownBack = document.getElementById('fc-known-back');

    function render(){
      cardEl.classList.remove('fc-flipped');
      if(deck.length === 0){
        qEl.textContent = 'No cards in this section.';
        aEl.textContent = '';
        counterEl.textContent = 'Card 0 of 0';
        progressBar.style.width = '0%';
        knownFront.textContent = ''; knownBack.textContent = '';
        return;
      }
      if(idx < 0) idx = 0;
      if(idx >= deck.length) idx = deck.length - 1;
      var c = deck[idx];
      qEl.textContent = c.q;
      aEl.textContent = c.a;
      counterEl.textContent = 'Card ' + (idx + 1) + ' of ' + deck.length;
      var knownCount = deck.reduce(function(acc, cc){ return acc + (known[cardId(cc)] ? 1 : 0); }, 0);
      var pct = deck.length ? Math.round((knownCount / deck.length) * 100) : 0;
      progressBar.style.width = pct + '%';
      var mark = known[cardId(c)] ? '✓' : '';
      knownFront.textContent = mark; knownBack.textContent = mark;
    }

    function flip(){ cardEl.classList.toggle('fc-flipped'); }
    function next(){ if(deck.length === 0) return; idx = (idx + 1) % deck.length; render(); }
    function prev(){ if(deck.length === 0) return; idx = (idx - 1 + deck.length) % deck.length; render(); }
    function markKnown(val){
      if(deck.length === 0) return;
      var c = deck[idx];
      if(val) known[cardId(c)] = 1;
      else delete known[cardId(c)];
      saveKnown();
      next();
    }
    function resetProgress(){
      if(!confirm('Clear all "Got it" progress for this deck?')) return;
      known = {};
      saveKnown();
      render();
    }

    cardEl.addEventListener('click', flip);
    cardEl.addEventListener('keydown', function(e){
      if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flip(); }
      else if(e.key === 'ArrowRight'){ e.preventDefault(); next(); }
      else if(e.key === 'ArrowLeft'){ e.preventDefault(); prev(); }
    });
    document.getElementById('fc-next').addEventListener('click', next);
    document.getElementById('fc-prev').addEventListener('click', prev);
    document.getElementById('fc-got').addEventListener('click', function(){ markKnown(true); });
    document.getElementById('fc-tryagain').addEventListener('click', function(){ markKnown(false); });
    document.getElementById('fc-shuffle').addEventListener('click', shuffle);
    document.getElementById('fc-reset').addEventListener('click', resetProgress);
    sectionSel.addEventListener('change', function(){ sectionFilter = sectionSel.value; applyFilter(); });

    render();
  });
})();
</script>

# 🃏 CompTIA Linux+ Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Copy into Anki, Quizlet, or paper flashcards. Drill daily — every command, port, and config path should be reflexive before exam day.

---

## 🚀 SECTION 1: BOOT & SYSTEMD

**Q:** What is the boot order on a modern UEFI Linux system?
**A:** UEFI firmware → ESP (EFI System Partition) → bootloader (GRUB2/systemd-boot) → kernel (vmlinuz) → initramfs → systemd (PID 1) → default.target.

**Q:** What does initramfs contain and why?
**A:** A minimal in-memory root filesystem with kernel modules (storage drivers, LVM, LUKS, network) needed to mount the real root. Without it, the kernel cannot read a root FS that lives on encrypted/LVM/RAID storage.

**Q:** Where does GRUB2 keep its main config on RHEL/CentOS and Debian/Ubuntu?
**A:** RHEL: `/boot/grub2/grub.cfg`. Debian/Ubuntu: `/boot/grub/grub.cfg`. Both are GENERATED — edit `/etc/default/grub` then run `grub2-mkconfig -o ...` (RHEL) or `update-grub` (Debian).

**Q:** What command shows the currently active systemd target?
**A:** `systemctl get-default` (shows the persistent default) or `systemctl list-units --type=target --state=active` (shows what's running now).

**Q:** Which systemd target replaces SysVinit runlevel 3 vs 5?
**A:** `multi-user.target` = runlevel 3 (text/CLI multi-user). `graphical.target` = runlevel 5 (multi-user with GUI). `rescue.target` ≈ single-user/runlevel 1.

**Q:** What does `systemctl enable nginx` actually do?
**A:** Creates a symlink from `/etc/systemd/system/<target>.wants/nginx.service` to the unit file, so the service starts at boot. Does NOT start it now — use `systemctl enable --now nginx` for both.

**Q:** What's the difference between `systemctl reload`, `restart`, and `daemon-reload`?
**A:** `reload` = tell the running service to re-read its config (if it supports SIGHUP). `restart` = stop then start the service. `daemon-reload` = tell systemd itself to re-read unit files after you edit them.

**Q:** Which command shows boot-time kernel and service messages from the current boot?
**A:** `journalctl -b` (current boot). `journalctl -b -1` shows the previous boot. `journalctl -k` shows kernel-only messages (the dmesg equivalent in journald).

**Q:** Where do user-installed unit files live vs distro-supplied ones?
**A:** Distro: `/usr/lib/systemd/system/` (or `/lib/systemd/system/`). Local admin override: `/etc/systemd/system/` (wins). Drop-in fragments: `/etc/systemd/system/<unit>.d/*.conf`.

**Q:** How do you boot to a rescue/emergency shell from GRUB?
**A:** At the GRUB menu, press `e` to edit the kernel line, append `systemd.unit=rescue.target` (or `emergency.target`), press Ctrl-X to boot. From journalctl/recovery: `systemctl rescue`.

---

## 📁 SECTION 2: FILESYSTEM & PERMISSIONS

**Q:** What does the FHS specify for `/etc`, `/var`, `/usr`, `/opt`?
**A:** `/etc` = host-specific config. `/var` = variable data (logs, mail, spools, caches). `/usr` = read-only shareable user programs and data. `/opt` = third-party/add-on application packages.

**Q:** Difference between `/proc` and `/sys`?
**A:** `/proc` = process and kernel info (PIDs, /proc/cpuinfo, /proc/meminfo). `/sys` = sysfs interface to devices and the device tree (modern hardware/driver attributes). Both are virtual filesystems, not on disk.

**Q:** What is an inode?
**A:** A data structure storing file metadata: permissions, owner, group, size, timestamps, and pointers to data blocks. The filename lives in the directory entry; the inode is the file. `ls -i` shows inode numbers.

**Q:** Compare ext4 vs XFS vs Btrfs vs ZFS in one line each.
**A:** ext4 = Linux default for years, journaled, mature. XFS = high-performance, RHEL 7+ default, can't shrink. Btrfs = copy-on-write, snapshots, subvolumes, RAID. ZFS = enterprise CoW + RAID + dedup + checksums (CDDL license — not in mainline kernel).

**Q:** What does `chmod 755 file` do in symbolic terms?
**A:** Owner: read+write+execute (7=rwx). Group: read+execute (5=r-x). Others: read+execute (5=r-x). Same as `chmod u=rwx,g=rx,o=rx file`.

**Q:** What does SUID, SGID, and sticky bit do?
**A:** SUID (4---) = run executable AS the file's owner (classic: /usr/bin/passwd runs as root). SGID (2---) on file = run as group; on directory = new files inherit group. Sticky bit (1---) on dir = only owner can delete files (used on /tmp).

**Q:** Which numeric mode sets the sticky bit and full permissions on a directory?
**A:** `chmod 1777 /tmp` — sticky bit (1) + rwx for all (777). Symbolic: `chmod +t,a=rwx`.

**Q:** What's the default umask on most Linux systems and what does it produce?
**A:** Typically `022` (root) or `002` (users). 022 masks out group+other write, so new files get 644 (rw-r--r--) and new dirs get 755 (rwxr-xr-x). Files never get execute by default.

**Q:** How do you grant a single user read-write ACL on a file without changing the regular owner/group?
**A:** `setfacl -m u:alice:rw file`. View with `getfacl file`. The `+` after permissions in `ls -l` indicates an ACL is present.

**Q:** Where is the persistent mount table that's read at boot?
**A:** `/etc/fstab` — six fields per line: device, mountpoint, fstype, options, dump, pass. Bad fstab can prevent boot; always test with `mount -a` before reboot.

---

## 📦 SECTION 3: PACKAGE MANAGEMENT

**Q:** apt vs apt-get vs dpkg?
**A:** `dpkg` = low-level Debian package tool (install single .deb, no deps). `apt-get` = traditional dependency-resolving front-end. `apt` = modern user-friendly front-end (progress bar, cleaner output). Same package db.

**Q:** Equivalent of `apt update && apt upgrade` on RHEL?
**A:** `dnf check-update && dnf upgrade` (or `dnf update`). On older RHEL/CentOS 7: `yum update`. `dnf` is the modern replacement for `yum`.

**Q:** How do you find which package owns a file on RHEL vs Debian?
**A:** RHEL: `rpm -qf /path/to/file` (queries installed) or `dnf provides /path/to/file` (searches repos). Debian: `dpkg -S /path/to/file` (installed) or `apt-file search /path` (repo lookup, requires apt-file).

**Q:** Where do apt and dnf store repository definitions?
**A:** apt: `/etc/apt/sources.list` and `/etc/apt/sources.list.d/*.list`. dnf/yum: `/etc/yum.repos.d/*.repo`. Always check these when a package is "not found."

**Q:** What is a `.repo` file's required minimum fields for dnf?
**A:** `[repo-id]`, `name=`, `baseurl=` (or `mirrorlist=`), `enabled=1`, `gpgcheck=1`, `gpgkey=file:///etc/pki/rpm-gpg/...`.

**Q:** Snap vs Flatpak vs AppImage?
**A:** All ship apps with bundled deps for cross-distro install. Snap = Canonical, sandboxed, snapd daemon, mounts squashfs. Flatpak = Red Hat/community, OCI-style, flathub. AppImage = single executable, no install, no auto-update by default.

**Q:** What's the classic 3-step build-from-source pattern?
**A:** `./configure && make && sudo make install`. `configure` checks deps and generates the Makefile; `make` compiles; `make install` copies binaries (usually under `/usr/local/`). Always read `INSTALL` first.

**Q:** Which command removes a package AND its config files on Debian?
**A:** `apt purge <pkg>` (or `dpkg --purge`). Plain `apt remove` keeps config files. `apt autoremove` cleans up no-longer-needed dependencies.

**Q:** How do you import a GPG key for an RPM repo?
**A:** `rpm --import https://example.com/key.asc`. dnf will reject signed-but-unknown packages until the key is trusted. `gpgcheck=0` in the repo file bypasses (DO NOT do this in production).

**Q:** What's the purpose of the `/var/cache/apt/archives/` directory?
**A:** Holds downloaded .deb files before install. `apt clean` empties it; `apt autoclean` removes only obsolete versions. Equivalent for dnf: `/var/cache/dnf/`, cleaned with `dnf clean all`.

---

## 💻 SECTION 4: BASH SCRIPTING

**Q:** What's the very first line of any bash script and what's it called?
**A:** `#!/bin/bash` — the shebang (or hashbang). Tells the kernel which interpreter to exec for the script. Without it, the script runs in whatever shell launched it.

**Q:** Difference between `$@` and `$*`?
**A:** `"$@"` expands each positional argument as a separate quoted word (the safe one). `"$*"` joins all args into one string separated by IFS first character. Use `"$@"` 99% of the time.

**Q:** How do you redirect both stdout and stderr to the same file?
**A:** `command > out.log 2>&1` (legacy, portable) or `command &> out.log` (bash-specific). The `2>&1` MUST come AFTER the stdout redirect.

**Q:** What does `set -euo pipefail` do at the top of a script?
**A:** `-e` exit on any command failure. `-u` exit on use of undefined variable. `-o pipefail` make a pipeline fail if any command in it fails (not just the last). The defensive-scripting standard.

**Q:** Show the syntax of a bash `if` for "if file exists and is readable."
**A:** `if [[ -r "$file" ]]; then ...; fi`. `-r` is readable, `-f` regular file exists, `-d` directory exists, `-x` executable, `-s` non-empty.

**Q:** What does `awk '{print $3}'` do?
**A:** Prints the third whitespace-separated field of each input line. `awk` is a record-processing language with fields ($1, $2, ...) and conditions. Change separator: `awk -F: '{print $1}' /etc/passwd`.

**Q:** sed command to replace "foo" with "bar" globally, in place, with backup?
**A:** `sed -i.bak 's/foo/bar/g' file`. `-i.bak` saves original as `file.bak`. The `g` flag means global (every match on the line). Without `g`, only first match per line.

**Q:** grep flags: case-insensitive, recursive, invert, line numbers?
**A:** `grep -i` case insensitive. `grep -r` recursive into directories. `grep -v` invert (lines NOT matching). `grep -n` show line numbers. Combine: `grep -irn "todo" .`.

**Q:** How do you schedule a command to run at 03:00 every day?
**A:** Add to crontab (`crontab -e`): `0 3 * * * /path/to/command`. Five fields: minute, hour, day-of-month, month, day-of-week. Edit system-wide jobs in `/etc/crontab` or files in `/etc/cron.d/`.

**Q:** Modern systemd-native alternative to cron?
**A:** systemd timers — a `.timer` unit triggers a `.service` unit. `systemctl list-timers` shows all. Advantages: dependency-aware, journal-integrated, can run missed jobs at boot (`Persistent=true`).

---

## 👤 SECTION 5: USERS, GROUPS & sudo

**Q:** What 7 colon-separated fields make up a line of `/etc/passwd`?
**A:** username:x:UID:GID:GECOS(full name/comment):home_directory:login_shell. The `x` means the password hash is in `/etc/shadow` (always, on modern Linux).

**Q:** What's in `/etc/shadow` and who can read it?
**A:** Password hashes + aging info. Owned by root, mode 0640 (or 0000 on some distros); world-unreadable by design. 9 fields: user, hash, last-change, min-days, max-days, warn-days, inactive-days, expire-date, reserved.

**Q:** Difference between `useradd` and `adduser`?
**A:** `useradd` = low-level binary (POSIX-standard, terse, no defaults beyond /etc/default/useradd). `adduser` = Debian/Ubuntu Perl wrapper (interactive, creates home + initial files, prompts for password). Always use `useradd -m` to ensure home is created.

**Q:** Add a user, force home dir creation, set default shell to bash, add to sudo group:
**A:** `useradd -m -s /bin/bash -G sudo alice` (Debian). On RHEL the privileged group is `wheel`. Then `passwd alice` to set password.

**Q:** What's in a typical sudoers line `%wheel ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx`?
**A:** `%wheel` = members of group wheel. `ALL=(ALL)` = from any host, can run as any user. `NOPASSWD:` = no password prompt for the listed commands. The path-restricted command grants narrow privilege.

**Q:** Why edit sudoers with `visudo` not `vi`?
**A:** `visudo` locks the file (prevents concurrent edits) and validates syntax on save. A broken `/etc/sudoers` can lock everyone out of root. Drop-in files go in `/etc/sudoers.d/`.

**Q:** What does PAM stand for and what does it do?
**A:** Pluggable Authentication Modules. Lets services (sshd, login, sudo, su) plug in auth/account/session/password modules without recompiling. Stack defined per service in `/etc/pam.d/`.

**Q:** Command to lock a user account without deleting it?
**A:** `passwd -l alice` (locks by prepending `!` to the hash — login disabled). `usermod -L alice` does the same. To expire the account entirely: `usermod -e 1 alice` or `chage -E 0 alice`.

**Q:** Where do you set password aging policy globally?
**A:** `/etc/login.defs` — sets `PASS_MAX_DAYS`, `PASS_MIN_DAYS`, `PASS_WARN_AGE` for new users. Existing users: use `chage` (e.g. `chage -M 60 -W 7 alice` for 60-day max, 7-day warning).

**Q:** Group membership: primary vs secondary, and which file?
**A:** Primary group = the GID in /etc/passwd (set at file creation). Secondary groups = listed in /etc/group as comma-separated members. `id alice` shows both. `usermod -aG group alice` adds to secondary (the `-a` is critical or you wipe other groups).

---

## 🌐 SECTION 6: NETWORKING & SSH

**Q:** Modern replacement for `ifconfig`?
**A:** `ip` from the iproute2 suite. `ip addr` (show IPs), `ip link` (interfaces), `ip route` (routing table), `ip neigh` (ARP table). `ifconfig` is deprecated and often not installed by default on modern distros.

**Q:** Modern replacement for `netstat -tulpn`?
**A:** `ss -tulpn` (same flags: tcp, udp, listening, processes, numeric). `ss` is faster and reads kernel netlink directly. `netstat` is in net-tools; deprecated.

**Q:** What is NetworkManager and what's its CLI tool?
**A:** Modern Linux network management daemon (RHEL/Fedora/Ubuntu desktop). CLI: `nmcli` (also TUI: `nmtui`). Replaces ifup/ifdown for most cases. Config in `/etc/NetworkManager/system-connections/`.

**Q:** Where is the sshd config file and what 3 settings are most exam-relevant?
**A:** `/etc/ssh/sshd_config`. Critical: `PermitRootLogin no`, `PasswordAuthentication no` (force keys), `Port 22` (or non-standard). After change: `systemctl reload sshd`.

**Q:** Generate an SSH key pair and copy to a remote host?
**A:** `ssh-keygen -t ed25519 -C "alice@laptop"` then `ssh-copy-id alice@server`. Key types: `ed25519` (modern, preferred), `rsa` (legacy 4096-bit), `ecdsa` (NIST curves, less trusted by some).

**Q:** Local vs remote SSH port forwarding syntax?
**A:** Local: `ssh -L 8080:internal:80 jump.host` → my :8080 reaches internal:80 via jump. Remote: `ssh -R 9000:localhost:22 bastion` → bastion:9000 reaches my :22. Mnemonic: L = LOCAL listens, R = REMOTE listens.

**Q:** iptables vs nftables vs firewalld?
**A:** iptables = legacy packet-filter (4 tables, chains). nftables = modern replacement (one framework for IPv4/IPv6, single `nft` command). firewalld = high-level RHEL daemon with zones, runs ON TOP of nftables on modern distros.

**Q:** firewalld: add port 8080/tcp permanently to the public zone?
**A:** `firewall-cmd --zone=public --add-port=8080/tcp --permanent` then `firewall-cmd --reload`. Without `--permanent`, the change is runtime-only and lost on reload.

**Q:** What protocol and port does DNS use?
**A:** UDP 53 for normal queries (fast, fits in 512 bytes). TCP 53 for zone transfers and large responses (DNSSEC, oversized). Modern: DoT (TCP 853) and DoH (TCP 443).

**Q:** Show current routing table on Linux?
**A:** `ip route` (or `ip route show`). The default route is the line starting `default via`. Add a route: `ip route add 10.0.0.0/24 via 192.168.1.1`. Persist via NetworkManager or /etc/sysconfig/network-scripts/route-* on RHEL.

---

## ⚙️ SECTION 7: KERNEL, DEVICES & LVM

**Q:** What does `uname -r` show?
**A:** The kernel release (version) currently running — e.g. `5.15.0-89-generic`. `uname -a` shows everything (kernel, hostname, version, machine). `hostnamectl` is the systemd alternative.

**Q:** List currently loaded kernel modules and load one?
**A:** List: `lsmod`. Load: `modprobe <name>` (resolves deps and config). Insert without deps: `insmod <file>`. Remove: `modprobe -r` or `rmmod`. Info: `modinfo <name>`.

**Q:** Where does `modprobe` look for module-loading rules?
**A:** `/etc/modprobe.d/*.conf` (admin overrides), `/lib/modprobe.d/*.conf` (distro), `/etc/modules-load.d/*.conf` (auto-load at boot). To blacklist: add `blacklist <module>` in a .conf.

**Q:** What's `dmesg` and where does its output also go?
**A:** Kernel ring buffer messages — hardware, drivers, kernel events. `dmesg -T` shows human timestamps. On systemd: also visible via `journalctl -k` and persisted (if journal is persistent) under `/var/log/journal/`.

**Q:** Difference between `lspci`, `lsusb`, `lsblk`?
**A:** `lspci` = PCI devices (NICs, GPUs, disk controllers). `lsusb` = USB devices. `lsblk` = block devices and mount points (disks, partitions, LVM LVs, loop devices). `lshw` is a comprehensive superset.

**Q:** Where do udev rules live and what do they do?
**A:** `/etc/udev/rules.d/` (admin) and `/lib/udev/rules.d/` (distro). They name and permission devices when they appear (e.g., create `/dev/cdrom` symlink, set group rights on USB serial dongles, run a script).

**Q:** Order of LVM hierarchy from bottom up?
**A:** Physical Volume (PV — a disk/partition) → Volume Group (VG — pool of PVs) → Logical Volume (LV — carved from the VG, what you actually mount). Commands: `pvcreate`, `vgcreate`, `lvcreate`. Display: `pvs`, `vgs`, `lvs`.

**Q:** Extend a logical volume by 5G and grow the filesystem on top?
**A:** `lvextend -L +5G /dev/vg_data/lv_app && resize2fs /dev/vg_data/lv_app` (ext4). Single-step with auto-resize: `lvextend -r -L +5G ...`. For XFS: `xfs_growfs /mountpoint`.

**Q:** Mount a block device by UUID instead of /dev/sdX, why and how?
**A:** Why: /dev/sd* names can renumber (USB inserted first boots earlier). UUIDs are stable. How: `lsblk -f` or `blkid` to find UUID; in /etc/fstab: `UUID=12345-abcde / ext4 defaults 0 1`.

**Q:** What is /proc/cpuinfo and /proc/meminfo good for?
**A:** Live kernel-exposed views of CPU and memory. cpuinfo: per-core model, flags (e.g. `vmx`/`svm` for virtualization, `aes` for AES-NI). meminfo: total/free/buffers/swap. `free -h` and `lscpu` are friendlier wrappers.

---

## 🔒 SECTION 8: LINUX SECURITY

**Q:** SELinux modes and how to view + change them?
**A:** Three modes: enforcing (block + log), permissive (log only), disabled (off). View: `getenforce` and `sestatus`. Runtime change: `setenforce 0` (perm) / `setenforce 1` (enf). Persistent: edit `/etc/selinux/config` (SELINUX=enforcing).

**Q:** How do you label a file with the correct SELinux context?
**A:** `restorecon -v /path` applies the default-policy label. To set a custom label: `chcon -t httpd_sys_content_t /path` (temporary; lost on relabel). For persistent custom label: `semanage fcontext -a -t httpd_sys_content_t '/path(/.*)?'`.

**Q:** AppArmor vs SELinux in one sentence each?
**A:** SELinux = label-based MAC, NSA-developed, RHEL/Fedora default, complex but flexible. AppArmor = path-based MAC, Ubuntu/SUSE default, simpler profiles in `/etc/apparmor.d/`, easier to learn.

**Q:** What does LUKS provide and how do you create an encrypted partition?
**A:** Linux Unified Key Setup — full-disk-style block-level encryption with passphrases/keyfiles. `cryptsetup luksFormat /dev/sdX1`, then `cryptsetup luksOpen /dev/sdX1 mydata` to map at /dev/mapper/mydata, then mkfs and mount.

**Q:** GPG: encrypt a file for a recipient and decrypt it?
**A:** Encrypt: `gpg --encrypt --recipient alice@corp.com file.txt` → produces file.txt.gpg. Decrypt: `gpg --decrypt file.txt.gpg > file.txt`. Sign-and-encrypt: `gpg --sign --encrypt -r alice@corp.com file.txt`.

**Q:** What does fail2ban do?
**A:** Reads service logs (sshd, nginx, postfix), matches failed-auth regexes, and bans the source IP via iptables/firewalld for a configurable time. Jails defined in `/etc/fail2ban/jail.d/`. Doesn't replace strong auth — adds friction.

**Q:** What is auditd and where do you find its logs?
**A:** Linux Audit framework daemon — kernel-level event recording for syscalls, file access, login. Rules in `/etc/audit/rules.d/*.rules`. Logs: `/var/log/audit/audit.log`. Query: `ausearch -k <key>` or `aureport`.

**Q:** How do you persistently change a kernel runtime parameter?
**A:** Edit a file under `/etc/sysctl.d/` (e.g. `99-custom.conf`) with `net.ipv4.ip_forward = 1`, then `sysctl --system` or reboot. Runtime-only: `sysctl -w net.ipv4.ip_forward=1` or `echo 1 > /proc/sys/net/ipv4/ip_forward`.

**Q:** Three settings to harden /etc/ssh/sshd_config?
**A:** `PermitRootLogin no`, `PasswordAuthentication no` (force key-based), and `AllowUsers <list>` or `AllowGroups <list>`. Bonus: `MaxAuthTries 3`, `ClientAliveInterval 300`, `Protocol 2`.

**Q:** Difference between umask, ACLs, and SELinux for file access control?
**A:** umask sets default DAC permissions (the rwx triad). ACLs extend DAC with per-user/per-group entries. SELinux is MAC — adds an orthogonal label-based check the kernel evaluates BEFORE DAC denials matter. All three can apply to one file.

---

## 🧪 SECTION 9: TROUBLESHOOTING ESSENTIALS

**Q:** A service won't start. Three commands to investigate?
**A:** `systemctl status <svc>` (state + last error lines), `journalctl -u <svc> -n 100` (last 100 log lines), and `systemctl cat <svc>` (effective unit file including drop-ins).

**Q:** A user gets "permission denied" on a file they own. What's the most likely cause beyond mode?
**A:** SELinux (`ls -Z` shows label; `ausearch -m AVC` shows denials) or ACL deny (`getfacl`). Also check: ancestor directory missing `x` (traversal), filesystem mounted read-only, immutable bit (`lsattr`).

**Q:** Disk seems "full" but `df` shows free space — what's likely?
**A:** Inode exhaustion (`df -i` shows inodes used). Common with millions of tiny files. Or: a process is holding a deleted file open (use `lsof | grep deleted`). Free is reclaimed when the process closes the FD or you restart it.

**Q:** Which two commands quickly identify CPU- and memory-hungry processes?
**A:** `top` (interactive, sort with P=CPU, M=MEM) and `ps aux --sort=-%cpu | head` / `ps aux --sort=-%mem | head`. Modern: `htop` (friendlier) and `pidstat`.

**Q:** Cannot SSH to host but ping works. Top 3 things to check?
**A:** (1) `systemctl status sshd` on the target. (2) Firewall: `firewall-cmd --list-all` or `nft list ruleset` / `iptables -L`. (3) sshd config: `Port`, `AllowUsers`, `ListenAddress`. Also: TCP wrappers `/etc/hosts.allow|deny` (legacy).

---

## 📚 STUDY TIPS

1. Run every command in this deck on a real Linux VM (a free $5 droplet, a Pi, WSL, or a VirtualBox VM). Reading alone doesn't stick.
2. When you "Try again" a card, do the command live — type it, see the output, then mark "Got it."
3. Shuffle daily. Order memorization is fake mastery.
4. After two full passes, switch to "Section filter" mode and drill weak sections.
5. The last 7 days before the exam: deck + Cheat-Sheets only. No new content.

## 🎯 BEFORE THE EXAM

- Sleep 7+ hours the two nights before. Tired brains miss simple flag questions.
- Bring two forms of ID; arrive 30 min early.
- 90 questions in 90 minutes = 60 seconds each. Mark long PBQs for review; come back at the end.
- Trust your gut on close calls. Changed answers are usually wrong.

---

🎉 Good luck. You've got this. 🐧
