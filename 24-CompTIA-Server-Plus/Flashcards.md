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
  var STORAGE_KEY = 'certhub-24-CompTIA-Server-Plus-flashcards';
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
    // Hide the leading H1 + intro blockquote? Keep them. Hide all <hr> within the article body that appear after our widget, they're section separators in the source list.
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

# 🃏 CompTIA Server+ Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Filter by section to drill weak areas. Aim for daily review until the real exam.

---

## 🖥️ SECTION 1: SERVER HARDWARE

**Q:** What does ECC RAM stand for and why do servers use it?
**A:** Error-Correcting Code. ECC detects and corrects single-bit memory errors automatically, preventing data corruption from cosmic-ray bit flips. Mandatory for production servers.

**Q:** What is the height (in U) of a 1U rack server?
**A:** 1U = 1.75 inches (4.45 cm). A standard rack is 42U tall (~73.5 inches).

**Q:** Tower vs rack vs blade, when do you pick each?
**A:** Tower = small office, low density. Rack = standardized data-center workhorse, dense, hot-swap. Blade = highest density (multiple blades share PSUs/network in a chassis); great for compute farms.

**Q:** What does a redundant power supply (PSU) configuration provide?
**A:** Hot-swap, N+1 (or 2N) failover, a single PSU failure does not bring down the server. Both PSUs should be plugged into separate PDUs / power feeds for full redundancy.

**Q:** What is hot-swap in the context of server hardware?
**A:** The ability to replace a component (drive, PSU, fan) while the server is powered on, without downtime.

**Q:** Define IPMI.
**A:** Intelligent Platform Management Interface, vendor-neutral out-of-band management standard. Lets you power-cycle, console, view sensors over the network even when the OS is down.

**Q:** What is a BMC?
**A:** Baseboard Management Controller, the dedicated microcontroller on the motherboard that implements IPMI. Has its own NIC, runs even when the host is off (as long as power is connected).

**Q:** iDRAC vs iLO, what are they?
**A:** Vendor brand names for BMC-based out-of-band management. iDRAC = Dell (Integrated Dell Remote Access Controller). iLO = HPE (Integrated Lights-Out). Both expose a web UI + IPMI.

**Q:** What does a RAID controller do, and why prefer hardware over software RAID?
**A:** Manages disk arrays (striping, mirroring, parity). Hardware RAID = dedicated chip + battery-backed write cache (BBWC), faster, OS-independent. Software RAID = OS does the math, cheaper.

**Q:** What is a BBWC / FBWC?
**A:** Battery-Backed / Flash-Backed Write Cache on a RAID controller. Protects in-flight writes against a sudden power loss by holding them in non-volatile storage until they flush to disk.

**Q:** What is the difference between SAS and SATA drives?
**A:** SAS = Serial Attached SCSI; dual-port, full-duplex, higher RPM (10k/15k), built for 24/7 server workloads. SATA = consumer/cheaper, single-port, half-duplex; OK for capacity/archival tiers.

**Q:** What is NVMe?
**A:** Non-Volatile Memory Express, a protocol designed for SSDs over PCIe. Massively higher IOPS and lower latency than AHCI/SATA. Modern servers use NVMe for hot data.

---

## 🪟 SECTION 2: SERVER ADMINISTRATION

**Q:** What is AD DS?
**A:** Active Directory Domain Services, Microsoft's directory service. Manages users, computers, groups, GPOs across a Windows domain.

**Q:** What is a Windows Server "role" vs a "feature"?
**A:** Role = major function (AD DS, DNS, DHCP, IIS, Hyper-V). Feature = supporting capability (Telnet client, BitLocker, .NET Framework, SMB 1.0).

**Q:** What command starts/stops a service on Linux with systemd?
**A:** `systemctl start <service>`, `systemctl stop <service>`, `systemctl enable <service>` (auto-start at boot), `systemctl status <service>`.

**Q:** Where do systemd service unit files typically live?
**A:** `/etc/systemd/system/` (admin-defined) and `/lib/systemd/system/` or `/usr/lib/systemd/system/` (package-provided).

**Q:** Default ports: RDP, SSH, WinRM (HTTP/HTTPS)?
**A:** RDP = TCP 3389. SSH = TCP 22. WinRM = TCP 5985 (HTTP) / TCP 5986 (HTTPS).

**Q:** What is WinRM?
**A:** Windows Remote Management, Microsoft's implementation of WS-Management. Used by PowerShell remoting (`Enter-PSSession`, `Invoke-Command`).

**Q:** What does `chmod 755 file` mean?
**A:** Owner rwx (7=4+2+1), group rx (5=4+1), others rx (5). Common executable script permission set.

**Q:** Linux: what does `ps -ef` show?
**A:** Every running process with full command lines, parent PID, start time. Standard process listing on most Unix systems.

**Q:** What package manager does RHEL/CentOS/Rocky use? Debian/Ubuntu?
**A:** RHEL family = `dnf` (formerly `yum`) over RPM. Debian family = `apt` over `.deb`.

---

## 💾 SECTION 3: STORAGE & RAID

**Q:** RAID 0, what does it do?
**A:** Striping only. No redundancy. Capacity = N × smallest disk. Fast reads/writes; one disk failure = total loss. Use only for scratch/tempdb.

**Q:** RAID 1, what does it do?
**A:** Mirroring (2 disks). Capacity = 1 × disk. Survives 1 disk failure. Read-fast, write-same.

**Q:** RAID 5, what does it do?
**A:** Striping with distributed parity. Min 3 disks. Capacity = (N−1) × smallest disk. Survives 1 disk failure. Write penalty due to parity calc.

**Q:** RAID 6, what does it do?
**A:** Striping with double distributed parity. Min 4 disks. Capacity = (N−2) × smallest disk. Survives 2 simultaneous disk failures. Preferred for large arrays.

**Q:** RAID 10, what does it do?
**A:** Stripe of mirrors (RAID 1+0). Min 4 disks (even count). Capacity = N/2 × disk. Survives loss of one drive from each mirror pair. Best performance + redundancy; uses 50% capacity.

**Q:** You have 6 × 1 TB disks in RAID 5. Usable capacity?
**A:** (6 − 1) × 1 TB = 5 TB.

**Q:** You have 8 × 2 TB disks in RAID 6. Usable capacity?
**A:** (8 − 2) × 2 TB = 12 TB.

**Q:** You have 6 × 4 TB disks in RAID 10. Usable capacity?
**A:** 6/2 × 4 TB = 12 TB.

**Q:** What is a hot spare?
**A:** An idle drive in the array that automatically rebuilds in place of a failed drive, with no admin action. Cuts the window of vulnerability after a failure.

**Q:** SAN vs NAS, one-line difference?
**A:** SAN = block-level storage over a dedicated network (FC/iSCSI) looks like a local disk. NAS = file-level storage over LAN (NFS/SMB) looks like a network share.

**Q:** Default ports: iSCSI, NFS, SMB?
**A:** iSCSI = TCP 3260. NFS = TCP/UDP 2049. SMB = TCP 445.

**Q:** What is a LUN?
**A:** Logical Unit Number, a slice of SAN storage presented to a host as a block device. Hosts see a LUN as if it were a local disk.

**Q:** What does LUN masking do?
**A:** Restricts which hosts (by initiator WWN/IQN) can see which LUNs. Prevents host A from accidentally mounting host B's storage.

**Q:** Thin provisioning vs thick provisioning?
**A:** Thick = allocate full capacity up front (predictable, no overcommit). Thin = allocate on demand from a shared pool (overcommit possible, risk of running out at the array level).

**Q:** What is deduplication in storage?
**A:** Detecting and storing only one copy of identical data blocks (or files). Huge space savings on backups, VDI golden images, mailboxes.

**Q:** What is storage tiering?
**A:** Automatically moving "hot" data to fast media (SSD/NVMe) and "cold" data to cheap media (SATA HDD, tape). Cost-optimizes large datasets.

**Q:** What is multipathing (MPIO)?
**A:** Multiple physical paths from a host to the same LUN. Provides failover (path dies → traffic continues) and load balancing across paths.

---

## 🖧 SECTION 4: VIRTUALIZATION & CONTAINERS

**Q:** Type 1 vs Type 2 hypervisor?
**A:** Type 1 = bare-metal (runs directly on hardware) ESXi, Hyper-V, KVM, Xen. Type 2 = hosted (runs on top of an OS) VMware Workstation, VirtualBox.

**Q:** What is vMotion / live migration?
**A:** Moving a running VM from one physical host to another with no downtime. Requires shared storage and a fast network. VMware = vMotion; Hyper-V = Live Migration; KVM = Live Migration.

**Q:** Snapshot vs clone vs template?
**A:** Snapshot = point-in-time saved state of a VM (deltas, temporary). Clone = full copy of a VM (independent VM). Template = master image used to deploy new VMs.

**Q:** What is a Hyper-V Generation 2 VM?
**A:** UEFI-firmware VM (vs legacy BIOS Gen 1). Supports Secure Boot, larger boot disks, modern OS features. Required for newer Windows Server / Linux distros.

**Q:** Container vs VM?
**A:** VM = full OS + kernel + apps (heavyweight, full isolation). Container = process(es) sharing the host kernel via namespaces/cgroups (lightweight, fast startup, less isolation).

**Q:** What does Docker do?
**A:** Packages apps into containers using a Dockerfile + image. Provides a CLI/daemon for running, pulling, and pushing container images.

**Q:** What does Kubernetes do?
**A:** Orchestrates many containers across many hosts. Handles scheduling, health checks, scaling, service discovery, rolling updates. Pods, Deployments, Services are the core objects.

**Q:** What is a hypervisor's "guest tools"?
**A:** Drivers + agent installed inside the guest OS (VMware Tools, Hyper-V Integration Services, virtio-guest), enables better performance, time sync, mouse, clean shutdown from the hypervisor.

---

## 🔁 SECTION 5: DISASTER RECOVERY & BACKUP

**Q:** RTO, define and give an example.
**A:** Recovery Time Objective: maximum tolerable downtime. Example: "Email must be back within 4 hours" → RTO = 4 hr.

**Q:** RPO, define and give an example.
**A:** Recovery Point Objective: maximum tolerable data loss measured in time. Example: "We can lose at most 15 min of transactions" → RPO = 15 min → need replication/log shipping every ≤15 min.

**Q:** Full backup, what does it back up and what does it set on the archive bit?
**A:** Every selected file. Clears the archive bit on each file.

**Q:** Incremental backup, what does it back up?
**A:** Files changed since the LAST backup of ANY type. Clears the archive bit. Fastest to back up, slowest to restore (need full + every incremental in order).

**Q:** Differential backup, what does it back up?
**A:** Files changed since the last FULL backup. Does NOT clear the archive bit. Each differential grows over time. Restore = full + most recent differential.

**Q:** Synthetic full backup, what is it?
**A:** A "full" assembled on the backup server by combining the last real full + subsequent incrementals, no need to re-read all production data. Saves backup-window bandwidth.

**Q:** State the 3-2-1 backup rule.
**A:** 3 copies of the data, on 2 different media types, with 1 copy off-site. (Modern variant 3-2-1-1-0 adds 1 immutable / air-gapped + 0 verified errors.)

**Q:** GFS rotation, what does it stand for?
**A:** Grandfather-Father-Son: monthly (grandfather) + weekly (father) + daily (son) tapes. Provides multi-month retention without storing every daily forever.

**Q:** Cold site vs warm site vs hot site?
**A:** Cold = empty building with power/HVAC (cheapest, days/weeks to recover). Warm = pre-staged hardware, no live data (hours to recover). Hot = fully live mirror, near-instant cutover (most expensive).

**Q:** Synchronous vs asynchronous replication?
**A:** Synchronous = write returns only after BOTH sites confirm (RPO=0, latency-sensitive). Asynchronous = write returns immediately, replication catches up (RPO>0, tolerates long-haul links).

**Q:** Business Continuity vs Disaster Recovery, what's the difference?
**A:** BCP = the broader plan to keep the business operating during any disruption (people, process, alt sites). DR = the technical IT subset focused on recovering systems and data.

**Q:** Default MTBF and MTTR meanings?
**A:** MTBF = Mean Time Between Failures (reliability higher is better). MTTR = Mean Time To Repair (restoration speed lower is better).

---

## 🔒 SECTION 6: SERVER SECURITY & HARDENING

**Q:** What does Secure Boot do?
**A:** UEFI firmware verifies that the bootloader is signed by a trusted key before executing it. Blocks bootkits and unsigned/modified bootloaders.

**Q:** Why set a UEFI/BIOS password?
**A:** Prevents an attacker with physical access from changing boot order, disabling Secure Boot, or booting to USB/CD to bypass the OS.

**Q:** What is the principle of least privilege?
**A:** Give every account exactly the rights it needs to do its job, no more. Reduces blast radius if the account is compromised.

**Q:** RBAC, define.
**A:** Role-Based Access Control: permissions assigned to roles, users assigned to roles. Easier to manage than per-user ACLs at scale.

**Q:** Service account best practice?
**A:** Dedicated account per service, least-privilege rights, long random password (or Group Managed Service Account on Windows), no interactive login, no shared between services.

**Q:** What is patch management?
**A:** The lifecycle of identifying, testing, deploying, and verifying security/feature patches. Includes a baseline + a maintenance window + a rollback plan.

**Q:** What are CIS benchmarks?
**A:** Center for Internet Security's hardening guides, step-by-step config recommendations for OSes, browsers, cloud services. Widely used as the "secure baseline."

**Q:** HIDS vs HIPS?
**A:** Host Intrusion Detection System = monitors a host and alerts. Host Intrusion Prevention System = monitors AND blocks. Same engine class, different action level.

**Q:** Mantrap / access control vestibule, what is it?
**A:** Two-door entry; the second door only unlocks after the first closes. Prevents tailgating into secure areas (data center, MDF, server room).

---

## 🌐 SECTION 7: NETWORKING FOR SERVERS

**Q:** What is NIC teaming?
**A:** Bonding multiple physical NICs into one logical interface for redundancy, increased throughput, or both. Modes vary: failover, load balance, LACP.

**Q:** What does LACP stand for and what does it do?
**A:** Link Aggregation Control Protocol (IEEE 802.3ad / 802.1AX). Dynamically negotiates a multi-link aggregate between server and switch. Both ends must support it; switch ports must be in the same LAG.

**Q:** What is a VLAN tag (802.1Q)?
**A:** 4-byte header inserted in the Ethernet frame identifying which VLAN the frame belongs to. Allows one physical link to carry traffic for many VLANs ("trunk port").

**Q:** What is a jumbo frame and what MTU?
**A:** Ethernet frame larger than the standard 1500-byte MTU, typically 9000 bytes. Reduces per-packet overhead for large transfers (storage, backups). Every device in the path must support it end-to-end.

**Q:** Layer 4 vs Layer 7 load balancer, difference?
**A:** L4 = balances on IP+port only (faster, no payload inspection). L7 = balances on HTTP host/path/headers/cookies (smarter routing, SSL termination, WAF integration).

**Q:** What is KVM-over-IP?
**A:** Network-accessible Keyboard/Video/Mouse switch, lets you control a server's console (BIOS, OS, even pre-boot) remotely over IP. Don't confuse with KVM the hypervisor.

**Q:** What is Wake-on-LAN (WoL)?
**A:** A special "magic packet" sent to a NIC's MAC address tells the network adapter to power the machine on. NIC and BIOS must both support it.

---

## 🔧 SECTION 8: TROUBLESHOOTING & DOCUMENTATION

**Q:** Recite the CompTIA troubleshooting methodology (6 steps).
**A:** (1) Identify the problem. (2) Establish a theory of probable cause. (3) Test the theory. (4) Establish a plan of action and implement. (5) Verify full system functionality (and preventive measures). (6) Document findings, actions, outcomes.

**Q:** What is POST?
**A:** Power-On Self-Test, the firmware diagnostic that runs when the server is powered on. Tests CPU, RAM, video, basic peripherals. Failures produce beep codes / on-screen errors.

**Q:** A server beeps 3 times at boot and refuses to POST, first thing to check?
**A:** RAM (most common cause of beep codes on boot). Reseat / swap modules; consult the vendor's beep-code chart for the exact meaning.

**Q:** A server's amber drive LED is solid, what does it mean?
**A:** Drive failure / predictive failure. Check the array status in the RAID controller utility and replace per vendor procedure.

**Q:** What is a CMDB?
**A:** Configuration Management Database, single source of truth for inventory: hosts, configs, owners, locations, relationships. Powers change impact analysis.

**Q:** What is a runbook?
**A:** Step-by-step operational procedure for a recurring task (patch night, DR failover, certificate renewal). Lets a less-senior tech execute consistently.

**Q:** What is Change Management's CAB?
**A:** Change Advisory Board, reviews and approves proposed changes before they hit production. Membership typically includes infra, security, app owners, business reps.

**Q:** Bottleneck diagnosis: which tool on Windows shows CPU/RAM/disk/net counters in real time?
**A:** Performance Monitor (perfmon) for detailed counters; Task Manager and Resource Monitor (resmon) for at-a-glance. Linux equivalents: `top`/`htop`, `iostat`, `vmstat`, `iftop`, `sar`.

**Q:** A backup keeps failing at 87% with the same error every night, what should you do FIRST?
**A:** Read the error message and check the backup logs / vendor KB. Most repeating failures have a specific root cause (file locked, permissions, full target, expired credential), don't blindly restart.

---

## 📝 STUDY TIPS FOR FLASHCARDS

1. **Anki recommendation:** Spaced repetition beats cramming every time for acronym-heavy certs like Server+.
2. **Daily review:** 10–15 min/day until exam, short and regular wins.
3. **Drill RAID math out loud:** Pick a count + level + disk size, compute usable capacity in your head until it's instant.
4. **Mix sections:** Don't only drill one section at a time, interleave to simulate the exam.
5. **Add cards from missed quiz questions:** Whenever you miss a question, write the new card before moving on.

---

## 🎯 BEFORE THE EXAM

You should be able to instantly answer:

- The 4 form factors (tower, rack 1U–4U, blade) and where each is used
- All 5 RAID levels (0, 1, 5, 6, 10), min disks, capacity formula, fault tolerance
- Default ports: SSH 22, RDP 3389, SMB 445, NFS 2049, iSCSI 3260, WinRM 5985/5986, IPMI 623
- RTO vs RPO, and how to pick a backup/replication strategy from a scenario
- 3-2-1 rule + GFS rotation
- Type 1 vs Type 2 hypervisor + container vs VM
- Cold/warm/hot site tradeoffs
- The 6-step troubleshooting methodology, in order

Good luck! 🖥️
