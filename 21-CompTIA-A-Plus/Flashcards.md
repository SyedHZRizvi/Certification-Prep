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

<div class="fc-app" id="fc-app" role="region" aria-label="Interactive flashcards" markdown="0">
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
  var STORAGE_KEY = 'certhub-21-CompTIA-A-Plus-flashcards';
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

# 🃏 CompTIA A+ Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill daily until your real exam. Aim for 10–15 min/day every day for at least 3 weeks before either exam.

---

## 📱 SECTION 1: MOBILE DEVICES

**Q:** What does MDM stand for?
**A:** Mobile Device Management, central control of phones/tablets (policies, remote wipe, app inventory).

**Q:** Maximum theoretical speed of 5G (sub-6 GHz, mid-band)?
**A:** ~1 Gbps real-world; mmWave 5G can reach 10 Gbps in lab conditions.

**Q:** Which two cellular generations are still in widespread carrier use as of 2026?
**A:** 4G LTE (workhorse) and 5G NR (rolling out); 2G/3G are largely sunset.

**Q:** What is a SIM card's primary function?
**A:** Stores subscriber identity (IMSI), authentication keys, and carrier profile so the device can register on a cellular network.

**Q:** Difference between eSIM and physical SIM?
**A:** eSIM is embedded in the device and provisioned by software; physical SIM is a removable card.

**Q:** What protocol synchronizes contacts/calendar/mail between phones and a server?
**A:** Exchange ActiveSync (EAS) for Microsoft 365; CardDAV/CalDAV for open standards.

**Q:** PRL stands for?
**A:** Preferred Roaming List, CDMA-era list telling phone which towers to prefer.

**Q:** Difference between BYOD, COBO, COPE, and CYOD?
**A:** BYOD = user owns; COBO = corporate-owned, business-only; COPE = corp-owned, personally enabled; CYOD = choose-your-own from corporate list.

**Q:** Default port for Apple Push Notification Service (APNs)?
**A:** TCP 5223 (and 443 fallback for cellular).

**Q:** What is hotspot (tethering)?
**A:** Sharing a phone's cellular data with other devices via Wi-Fi, Bluetooth, or USB.

---

## 🌐 SECTION 2: NETWORKING & PORTS

**Q:** Common ports: HTTP / HTTPS / SSH / Telnet / FTP / SFTP / SMTP / IMAP / POP3 / DNS / DHCP / RDP / SMB / LDAP / LDAPS?
**A:** 80 / 443 / 22 / 23 / 21 / 22 (over SSH) / 25 / 143 / 110 / 53 / 67-68 / 3389 / 445 / 389 / 636.

**Q:** What does DHCP do and which 4 messages does it use?
**A:** Assigns IP addresses. Messages: DORA, Discover, Offer, Request, Acknowledge.

**Q:** APIPA range?
**A:** 169.254.0.0/16, assigned by Windows when DHCP fails.

**Q:** Private IP ranges (RFC 1918)?
**A:** 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.

**Q:** Default subnet masks for Class A, B, C?
**A:** /8 (255.0.0.0), /16 (255.255.0.0), /24 (255.255.255.0).

**Q:** What does NAT do?
**A:** Network Address Translation, maps many private IPs to one public IP at the router.

**Q:** What's the difference between a hub, switch, and router?
**A:** Hub = dumb repeater (L1); switch = MAC-learning forwarder (L2); router = IP forwarder between networks (L3).

**Q:** Cat 5e vs Cat 6 vs Cat 6a, max speed and distance?
**A:** 5e: 1 Gbps @ 100m; 6: 1 Gbps @ 100m or 10 Gbps @ 55m; 6a: 10 Gbps @ 100m.

**Q:** What is PoE and what standards exist?
**A:** Power over Ethernet, 802.3af (15.4W), 802.3at PoE+ (30W), 802.3bt PoE++ (60–100W).

**Q:** 802.11 a/b/g/n/ac/ax/be, frequency bands?
**A:** a: 5 GHz; b/g: 2.4 GHz; n: dual; ac (Wi-Fi 5): 5 GHz; ax (Wi-Fi 6/6E): 2.4/5/6 GHz; be (Wi-Fi 7): 2.4/5/6 GHz with MLO.

**Q:** RJ-45 vs RJ-11?
**A:** RJ-45 = 8-pin Ethernet; RJ-11 = 4 or 6-pin telephone.

**Q:** Single-mode vs multi-mode fiber?
**A:** Single-mode = small core (~9 μm), longer distance (km), more expensive; multi-mode = larger core (50/62.5 μm), shorter distance, cheaper.

---

## 🖥️ SECTION 3: HARDWARE, CPU/RAM/STORAGE

**Q:** Intel LGA vs AMD socket, what's the physical difference?
**A:** LGA = Land Grid Array, pins are on the motherboard, flat pads on the CPU. AMD historically used PGA (Pin Grid Array, pins on CPU), but AM5 switched to LGA. Sockets: LGA1700 (Intel 12-14th gen), AM5 (Ryzen 7000+).

**Q:** DDR4 vs DDR5, key differences?
**A:** DDR5 has higher base speeds (4800+ MT/s vs 3200 MT/s), on-DIMM voltage regulation, two 32-bit subchannels per DIMM, and is not pin-compatible with DDR4.

**Q:** RAM channels: single vs dual vs quad, performance impact?
**A:** Dual ~ 2× bandwidth of single. Quad doubles again. Mismatched DIMM sizes can downgrade to single-channel.

**Q:** ECC RAM, what does it do?
**A:** Error-Correcting Code, uses extra parity bits to detect and correct single-bit errors. Required in servers; uncommon on consumer desktops.

**Q:** HDD vs SSD vs NVMe, interface and speed?
**A:** HDD spinning platter, SATA, ~150 MB/s. SATA SSD ~550 MB/s. NVMe (PCIe) Gen 3 ~3,500 MB/s, Gen 4 ~7,000 MB/s, Gen 5 ~14,000 MB/s.

**Q:** M.2, what protocols can it carry?
**A:** SATA (B+M keyed) OR NVMe over PCIe (M keyed) OR sometimes Wi-Fi (A+E keyed). Same slot, different signals, check the keying.

**Q:** RAID 0 / 1 / 5 / 6 / 10, what each does?
**A:** 0 = stripe (speed, zero redundancy); 1 = mirror (redundancy, no capacity gain); 5 = stripe + parity (1 disk loss); 6 = stripe + dual parity (2 disk loss); 10 = mirror of stripes (speed + redundancy).

**Q:** Minimum disks for RAID 5? RAID 6? RAID 10?
**A:** RAID 5 = 3 disks. RAID 6 = 4 disks. RAID 10 = 4 disks (and an even number).

**Q:** Common PSU efficiency ratings (80 PLUS tiers)?
**A:** White, Bronze, Silver, Gold, Platinum, Titanium, Titanium is highest (94%+ at 50% load).

**Q:** Typical PSU connectors: 24-pin / 8-pin EPS / 6+2 PCIe / SATA / Molex, what each powers?
**A:** 24-pin → motherboard; 8-pin EPS → CPU; 6+2 PCIe → GPU; SATA → drives; Molex → fans/legacy.

**Q:** ATX vs mATX vs ITX form factors?
**A:** ATX 12×9.6 in (most expansion); mATX 9.6×9.6 (compact, 4 slots); Mini-ITX 6.7×6.7 (SFF, 1 slot).

**Q:** What does TPM do?
**A:** Trusted Platform Module, secure crypto-processor that stores keys, used for BitLocker, Secure Boot, Windows 11 attestation. TPM 2.0 required for Windows 11.

---

## ☁️ SECTION 4: VIRTUALIZATION & CLOUD

**Q:** Type 1 vs Type 2 hypervisor?
**A:** Type 1 (bare-metal) runs directly on hardware ESXi, Hyper-V, KVM, Xen. Type 2 (hosted) runs on top of an OS VMware Workstation, VirtualBox, Parallels.

**Q:** What is IaaS / PaaS / SaaS?
**A:** IaaS = raw infrastructure (EC2, VMs); PaaS = managed runtime (App Service, Heroku); SaaS = ready software (Gmail, M365).

**Q:** What is virtualization's "snapshot"?
**A:** Point-in-time capture of a VM's disk + memory state. Used for testing/rollback. Not a substitute for backup.

**Q:** Public / Private / Hybrid / Community cloud, define each?
**A:** Public = multi-tenant (AWS, Azure); Private = single org (your data center); Hybrid = mix of public + private with orchestration; Community = shared by orgs with similar needs (gov, healthcare).

**Q:** What is rapid elasticity?
**A:** Cloud resources can scale up and down automatically with demand, a core NIST cloud characteristic.

**Q:** What is measured service?
**A:** Cloud usage is metered (CPU-hours, GB-months) and you pay for what you use, another NIST cloud characteristic.

**Q:** VDI stands for?
**A:** Virtual Desktop Infrastructure, user desktops run as VMs in the data center; user accesses via thin client/laptop.

**Q:** Difference between containers and VMs?
**A:** VMs include a full OS (heavy, isolated, ~GBs). Containers share the host kernel (light, ~MBs, start in seconds). Docker is the most common container runtime.

---

## 🔧 SECTION 5: TROUBLESHOOTING (THE 6 STEPS)

**Q:** Recite the CompTIA 6-step troubleshooting methodology.
**A:** (1) Identify the problem; (2) Establish a theory of probable cause; (3) Test the theory; (4) Establish a plan of action; (5) Verify full system functionality + implement preventive measures; (6) Document findings, actions, outcomes.

**Q:** Step 1 most important sub-action?
**A:** Question the user AND identify recent changes. Ask "what changed?"

**Q:** What is the OSI model bottom-up mnemonic?
**A:** Please Do Not Throw Sausage Pizza Away, Physical, Data Link, Network, Transport, Session, Presentation, Application.

**Q:** Common POST beep code pattern: "1 long, 3 short" usually means?
**A:** Video card / GPU issue (varies by BIOS vendor, Award/AMI/Phoenix differ). Always consult the motherboard manual.

**Q:** No POST and no fans, first three things to check?
**A:** (1) PSU power switch + cable; (2) Front-panel power connector to motherboard; (3) PSU itself (paperclip test or known-good PSU).

**Q:** Black screen but fans spin, likely causes?
**A:** GPU failure, RAM not seated, dead motherboard, monitor cable, or wrong display input.

**Q:** Continuous beeps from a desktop at boot, most common cause?
**A:** RAM problem, reseat or test single sticks.

**Q:** RAID 5 failure: 1 disk shows red. What's the immediate action?
**A:** Identify the failed disk, replace it with a same-size or larger disk, and let the array rebuild. Don't unplug a working disk by mistake.

**Q:** Network "can't reach 8.8.8.8" but local LAN works, likely cause?
**A:** Default gateway, ISP issue, DNS not the problem (you used an IP). Test traceroute.

---

## 🖨️ SECTION 6: PRINTERS

**Q:** 7 steps of the laser printing process?
**A:** Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning. (Mnemonic: "Cool People Eat Donuts To Fuse Carbohydrates")

**Q:** Inkjet head clogged, first remedy?
**A:** Run the printer's built-in head-cleaning utility, then print a test page.

**Q:** Thermal printer, what consumable do you replace and what wears out?
**A:** Thermal paper (no ink). The thermal print head degrades over time.

**Q:** Most common cause of "ghost image" on laser print?
**A:** Failing drum, low toner, or worn fuser unit. Often the drum.

**Q:** Printer "paper jam" recurring at the same spot, what's likely?
**A:** Worn pickup roller or separation pad, replace.

**Q:** Networked printer suddenly offline to all users, first check?
**A:** Network connectivity (ping the printer IP), then check print server queue.

---

## 💻 SECTION 7: OPERATING SYSTEMS

**Q:** Windows file systems: FAT32 / exFAT / NTFS / ReFS, when to use each?
**A:** FAT32: ≤32 GB volumes, ≤4 GB files, cross-platform; exFAT: large flash drives, no journaling; NTFS: Windows default, journaling, ACLs, encryption; ReFS: server-class, resilient to corruption, no compression.

**Q:** macOS file system, what is APFS?
**A:** Apple File System, replaced HFS+ in macOS 10.13 (2017). Optimized for SSDs, native encryption, snapshots, cloning, container-based.

**Q:** Linux file systems, ext4 vs XFS vs Btrfs?
**A:** ext4 = default, journaling, mature; XFS = great for huge files, RHEL default; Btrfs = snapshots, COW, like ZFS-lite.

**Q:** Windows boot loader path on UEFI?
**A:** `EFI\Microsoft\Boot\bootmgfw.efi` on the EFI System Partition (ESP).

**Q:** Linux boot loader most common?
**A:** GRUB2.

**Q:** macOS package format vs install method?
**A:** `.pkg` (installer), `.dmg` (disk image), App Store, Homebrew (CLI package manager).

**Q:** Linux package managers by distro?
**A:** Debian/Ubuntu = apt/dpkg; RHEL/Fedora = dnf/yum/rpm; Arch = pacman.

**Q:** Three CLI shells common on A+?
**A:** cmd.exe (legacy Windows), PowerShell (modern Windows / cross-platform), bash (Linux/macOS default).

**Q:** Windows: `ipconfig /all` vs `ipconfig /release` /renew /flushdns, what each does?
**A:** /all = full network info; /release = give up DHCP lease; /renew = request new lease; /flushdns = clear DNS resolver cache.

**Q:** Linux equivalent of `ipconfig`?
**A:** `ip a` (modern) or `ifconfig` (legacy).

**Q:** Windows network share permissions vs NTFS permissions, which wins?
**A:** Most restrictive of the two wins when combined.

---

## 🔐 SECTION 8: SECURITY

**Q:** What is MFA and what are the 3 factor categories?
**A:** Multi-Factor Authentication. Factors: Something you KNOW (password), HAVE (token, phone), ARE (biometric). Plus location + behavior in some models.

**Q:** Difference between authentication and authorization?
**A:** Authentication = prove who you are. Authorization = what you're allowed to do once authenticated.

**Q:** What is the principle of least privilege?
**A:** Grant the minimum access needed for the role/task, no more.

**Q:** BitLocker / FileVault / LUKS, what each does?
**A:** All are full-disk encryption: BitLocker = Windows, FileVault = macOS, LUKS = Linux (Linux Unified Key Setup).

**Q:** Phishing vs Smishing vs Vishing vs Whaling?
**A:** Phishing = email; Smishing = SMS; Vishing = voice/phone; Whaling = phishing aimed at executives.

**Q:** What is shoulder surfing?
**A:** Watching someone enter credentials over their shoulder. Mitigation: privacy screen + situational awareness.

**Q:** What is tailgating?
**A:** Following an authorized person through a secure door without badging in. Mitigation: mantrap/access vestibule + training.

**Q:** Common malware types?
**A:** Virus, worm, Trojan, ransomware, spyware, adware, rootkit, keylogger, bot/botnet, fileless malware.

**Q:** What is a rootkit and why is it dangerous?
**A:** Malware that hides at the kernel level or below, bypassing OS visibility. Often requires reimaging to remove.

**Q:** What does EFS do (Windows)?
**A:** Encrypting File System, per-file/folder encryption tied to user's account/cert. Different from BitLocker (volume-level).

**Q:** What is a guest network and why use one?
**A:** Separate Wi-Fi SSID/VLAN for visitors, isolated from internal LAN. Limits lateral movement.

---

## 🦠 SECTION 9: MALWARE REMOVAL (THE 7 STEPS)

**Q:** Recite the CompTIA 7-step malware removal procedure.
**A:** (1) Investigate and verify malware symptoms; (2) Quarantine infected systems; (3) Disable System Restore (Windows); (4) Remediate (update AV, scan, remove); (5) Schedule scans + run updates; (6) Enable System Restore + create restore point; (7) Educate the end user.

**Q:** Why disable System Restore before remediating?
**A:** Restore points can contain infected files; an immediate "rollback" can reinfect.

**Q:** Three classic ransomware symptoms?
**A:** (1) Files renamed with new extensions (e.g. .locked); (2) ransom note files in every folder; (3) inability to open formerly working documents.

**Q:** First action when ransomware is suspected on a corporate machine?
**A:** Isolate (disconnect network, wired and wireless), then notify SOC/IR. Don't pay. Don't reboot before evidence capture if forensics is in scope.

---

## ⚙️ SECTION 10: OPERATIONAL PROCEDURES

**Q:** What is a ticket and what fields should it always have?
**A:** Help-desk record. Fields: requester, date/time, category, description, severity, asset(s), assignee, status, resolution notes.

**Q:** What is a CMDB?
**A:** Configuration Management Database, inventory of every IT asset and its relationships (which server runs which app, depends on which DB).

**Q:** CAB stands for?
**A:** Change Advisory Board, group that approves/rejects production changes.

**Q:** Difference between standard, normal, and emergency change?
**A:** Standard = pre-approved low-risk (template); Normal = full CAB review; Emergency = expedited (production fire), reviewed retrospectively.

**Q:** What is RPO vs RTO?
**A:** RPO (Recovery Point Objective) = max data loss tolerated (how often to back up). RTO (Recovery Time Objective) = max downtime tolerated (how fast to restore).

**Q:** Difference between full / incremental / differential backup?
**A:** Full = entire dataset; Incremental = changes since last *any* backup (smallest, slowest restore); Differential = changes since last *full* (medium size, faster restore).

**Q:** 3-2-1 backup rule?
**A:** 3 copies of data, on 2 different media, with 1 copy off-site.

**Q:** What is ESD and what equipment mitigates it?
**A:** Electrostatic Discharge. Mitigation: anti-static wrist strap, ESD mat, low-humidity-aware handling, grounded workstation.

**Q:** MSDS stands for and where do you find one?
**A:** Material Safety Data Sheet (now SDS in many jurisdictions), chemical safety info. Find from the manufacturer or supplier.

**Q:** What is PII?
**A:** Personally Identifiable Information, data that can identify a person (SSN, DOB, address combined with name). Often legally protected.

**Q:** PHI vs PCI scope?
**A:** PHI = Protected Health Information (HIPAA). PCI = Payment Card Industry data (PCI-DSS).

---

## 📱 SECTION 11: MOBILE TROUBLESHOOTING

**Q:** Phone battery drains fast, top 3 causes?
**A:** (1) Background apps with location/sync abuse; (2) battery aged (chemical wear); (3) signal hunting in poor coverage.

**Q:** Phone running hot during normal use, investigate first?
**A:** CPU-heavy background app, malware, charging while in case, environment temperature, failing battery.

**Q:** Wi-Fi works but cellular won't, top checks?
**A:** Airplane mode off, mobile data toggle on, APN settings correct, SIM seated, account active, signal strength.

**Q:** App keeps crashing on Android, order of fixes?
**A:** (1) Force-stop app; (2) clear cache; (3) clear data; (4) uninstall/reinstall; (5) check OS update; (6) safe-mode boot to test.

**Q:** What is OTA?
**A:** Over-The-Air, wireless firmware/OS update delivery.

**Q:** GPS not getting a fix, what to try?
**A:** Outdoor with clear sky view, toggle location, restart phone, ensure A-GPS / cellular enabled (A-GPS uses tower data for faster lock).

---

## 📋 SECTION 12: DOCUMENTATION & DR

**Q:** What is a runbook?
**A:** Step-by-step procedural document for a specific task (e.g., "Restart the email gateway"). Lives next to the system.

**Q:** What is a knowledge base?
**A:** Searchable repository of solutions, articles, how-tos, used by help desk and end users.

**Q:** What's the difference between a hot, warm, and cold site?
**A:** Hot = fully running duplicate, instant failover (expensive); Warm = hardware ready, data needs sync; Cold = empty space, hardware delivered after disaster (cheapest).

**Q:** What is BCP vs DR?
**A:** Business Continuity Plan = keep the business operating during disruption (broader). Disaster Recovery = restore IT systems specifically (subset of BCP).

**Q:** Why test backups?
**A:** Untested backups are unknown-good. Many orgs find they can't actually restore until they try.

**Q:** Tabletop exercise, what is it?
**A:** Discussion-based walkthrough of a scenario (no actual systems touched). Cheap, fast, surfaces gaps.

---

## 🎯 SECTION 13: EXAM POWER PHRASES

**Q:** Often-CORRECT answer phrases:
**A:** "Document the change", "Follow company policy", "Verify functionality after the fix", "Identify the problem first", "Educate the user", "Least privilege", "Test the theory before action".

**Q:** Often-WRONG answer phrases:
**A:** "Replace the motherboard first" (rarely first step), "Skip documentation", "Reformat without backup", "Share the admin password", "Try changes in production without backup".

---

## 📝 STUDY TIPS FOR FLASHCARDS

1. **Anki recommendation:** Spaced repetition is undefeated. Import these as a CSV.
2. **Daily review:** 10–15 min/day until exam.
3. **Test yourself fairly:** If you guessed, mark it wrong.
4. **Add cards as you find weak spots:** Reading.md → wrong quiz answers → new card.
5. **Mix decks:** Don't just review one section at a time. Interleave Core 1 and Core 2 sections.

---

## 🎯 BEFORE THE EXAMS

You should be able to instantly answer:

- 6-step troubleshooting methodology AND 7-step malware removal procedure
- Top 30 ports and protocols (HTTP/HTTPS/SSH/SMB/RDP/DNS/DHCP/SMTP/IMAP/POP3/FTP/SFTP/LDAP/LDAPS)
- RAID 0/1/5/6/10 minimums + use cases
- RAM types (DDR4 vs DDR5) and form factors (DIMM vs SODIMM)
- File systems (FAT32 / exFAT / NTFS / APFS / ext4)
- 7 laser printing steps
- Common malware types and remediation order
- 3-2-1 backup rule
- ATX vs mATX vs ITX form factors
- Hot/Warm/Cold DR sites + RPO/RTO

Good luck! 🛠️
