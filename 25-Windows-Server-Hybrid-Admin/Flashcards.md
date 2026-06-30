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
  var STORAGE_KEY = 'certhub-25-Windows-Server-Hybrid-Admin-flashcards';
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

# 🃏 Windows Server Hybrid Admin Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Click any card to flip. Filter by section, shuffle, and mark cards as "Got it", your progress saves locally. Aim for daily review until both exams.

---

## 📜 SECTION 1: ACTIVE DIRECTORY DOMAIN SERVICES

**Q:** What is the AD DS logical hierarchy from top to bottom?
**A:** Forest → Tree → Domain → OU → Object. Forest is the top security boundary; OUs are for GPO and delegation, not security.

**Q:** What are the 5 FSMO roles?
**A:** Forest-wide: Schema Master, Domain Naming Master. Domain-wide: RID Master, PDC Emulator, Infrastructure Master.

**Q:** Which FSMO role handles password changes and time sync?
**A:** PDC Emulator, also the default Group Policy editing target and authoritative time source.

**Q:** Which FSMO role hands out RID pools to DCs?
**A:** RID Master (domain-wide).

**Q:** What's a Read-Only Domain Controller (RODC) and why use it?
**A:** A DC that holds a read-only copy of AD with selective password caching, designed for physically insecure branch sites.

**Q:** What replication interval do AD DS intra-site partners use?
**A:** Notify-based replication every ~15 seconds (with a 1-second urgent threshold for password changes via PDC).

**Q:** What's the default inter-site replication interval?
**A:** 180 minutes (3 hours), adjustable via site link properties.

**Q:** What does the AD Recycle Bin do, and what's required to enable it?
**A:** Recovers deleted AD objects with all attributes intact for 180 days (default). Forest functional level must be 2008 R2 or higher; enable is one-way.

**Q:** What's the difference between a security group and a distribution group?
**A:** Security groups have a SID and can be on ACLs and permissions. Distribution groups are email-only and have no SID.

**Q:** What does "AGDLP" stand for?
**A:** Accounts → Global groups → Domain Local groups → Permissions. Microsoft's recommended group nesting for multi-domain access.

**Q:** What functional level is required for the AD Recycle Bin?
**A:** Forest functional level Windows Server 2008 R2 or higher.

**Q:** What does Group Policy precedence look like (top to bottom)?
**A:** LSDOU, Local → Site → Domain → OU (lower OUs override higher). Enforced GPOs reverse this; Block Inheritance stops higher-level GPOs unless Enforced.

---

## 🆔 SECTION 2: IDENTITY & ENTRA ID HYBRID

**Q:** What's the difference between Microsoft Entra Connect and Entra Cloud Sync?
**A:** Entra Connect Sync is the full-featured legacy agent (on a Windows Server, supports filtering/transformations). Cloud Sync is a lightweight agent installed multiple times, no SQL needed, suited for multi-forest and disconnected scenarios.

**Q:** What are the three on-prem authentication options for Entra ID hybrid?
**A:** Password Hash Sync (PHS), Pass-Through Authentication (PTA), and Federation with AD FS.

**Q:** Which sign-in method is Microsoft's recommended default for hybrid identity?
**A:** Password Hash Sync with Seamless SSO, the simplest, most resilient option (no on-prem dependency at sign-in).

**Q:** What is Seamless SSO?
**A:** Auto sign-in to Entra ID-joined resources for users on domain-joined corporate devices via a Kerberos ticket exchange to a computer account `AZUREADSSOACC`.

**Q:** What's the difference between Entra ID Join, Entra Hybrid Join, and Entra Registration?
**A:** Join = cloud-only device identity. Hybrid Join = device is in *both* on-prem AD AND Entra. Registration = BYOD personal device with limited management.

**Q:** What does PHS actually sync to Entra ID?
**A:** A hash of the AD password hash (re-hashed with HMAC-SHA256 + salt), *not* the password itself. This is irreversible and one-way.

**Q:** What's a staging server in Entra Connect?
**A:** A second Entra Connect server running in standby mode for disaster recovery, it imports/syncs but does not export.

**Q:** Where does the Entra Connect server sync metadata get stored?
**A:** In LocalDB (SQL Server Express) by default. SQL Server full edition is supported for >100,000 objects.

**Q:** What is the "Cloud authentication" recommendation, and why?
**A:** PHS + Seamless SSO. It removes on-prem dependencies at sign-in time, survives WAN outages, and supports Smart Lockout / leaked credential checks.

---

## 🌐 SECTION 3: NETWORKING, DNS & DHCP

**Q:** What's the difference between a stub zone and a conditional forwarder?
**A:** Stub zone keeps a current list of authoritative NS records for a zone. Conditional forwarder forwards queries for a specific domain to specified IPs, simpler, no zone data.

**Q:** What does DNSSEC sign in a zone?
**A:** It cryptographically signs zone data with KSK (Key Signing Key) and ZSK (Zone Signing Key), and validates responses via trust anchors. Protects against cache poisoning.

**Q:** What is GlobalNames zone (GNZ) used for?
**A:** Provides single-label name resolution across multiple domains in a forest, replacing WINS for that use case.

**Q:** What is DHCP failover and the two modes?
**A:** Pairs two DHCP servers serving the same scopes. **Hot standby** (one primary, one secondary at activation), **Load balance** (default 50/50 split). Configurable Maximum Client Lead Time (MCLT) controls partner takeover.

**Q:** What is DHCP superscope vs split-scope?
**A:** Superscope groups multiple scopes onto one physical subnet (multi-subnet on one segment). Split-scope manually splits one scope between two DHCP servers (80/20 rule).

**Q:** What is IPAM, and what does it require?
**A:** IP Address Management, central tracking of DHCP/DNS/AD-DS across a forest. Cannot run on a DC. Single IPAM server can manage up to 150 DHCP servers and 500 DNS servers.

**Q:** What's the difference between Inbound/Outbound rules in Windows Firewall?
**A:** Inbound rules govern traffic *to* the host; outbound rules govern traffic *from* the host. Default policy in Domain profile: inbound block-unless-allowed, outbound allow.

**Q:** What does Network Load Balancing (NLB) do, and how many nodes?
**A:** Windows feature for distributing TCP/UDP traffic across up to 32 nodes. Operates at layer 4, no shared storage. Best for stateless web/RDS workloads; *not* recommended for SQL or domain controllers.

---

## 📦 SECTION 4: FILE, STORAGE & STORAGE SPACES

**Q:** What are the Storage Spaces Direct (S2D) node and tier limits?
**A:** 2–16 nodes per cluster, ≤4 PB total raw capacity per cluster. Must have ≥4 capacity drives per node (NVMe, SSD, or HDD), 10 GbE+ network (25 GbE recommended), RDMA strongly recommended.

**Q:** What are S2D resiliency modes for a 2-node, 3-node, 4-node, and 6-node cluster?
**A:** 2-node: 2-way mirror. 3-node: 3-way mirror. 4-node: 3-way mirror OR dual parity. 6+: 3-way mirror, dual parity, or mirror-accelerated parity.

**Q:** What is Storage Replica and the two modes?
**A:** Block-level, volume-level replication between servers/clusters. **Synchronous** (zero data loss, same-metro only ≤ ~5 ms RTT) and **Asynchronous** (cross-region, eventual consistency).

**Q:** DFS-N vs DFS-R, what does each do?
**A:** DFS-N (Namespaces) presents a unified `\\contoso.com\shares` view across servers. DFS-R (Replication) is multi-master replication of folder contents using RDC (Remote Differential Compression).

**Q:** What does ReFS provide that NTFS doesn't?
**A:** Block-cloning (faster copies, fast Hyper-V VHD provisioning), integrity streams (checksums + auto-repair on mirror), data deduplication on Windows Server 2019+, and better resiliency against silent corruption.

**Q:** What does FSRM do?
**A:** File Server Resource Manager, quotas, file screens (block .exe etc.), storage reports, file classification, and access denied assistance.

**Q:** What is Work Folders?
**A:** A self-managed user data sync feature (alternative to OneDrive). Workfolders cmdlets sync a user's folder to multiple corporate devices over HTTPS, with optional Workplace Join authentication.

**Q:** What is BranchCache and the two modes?
**A:** Caches content from HQ servers at branch sites. **Hosted Cache** (dedicated server at branch). **Distributed Cache** (peer caching among clients, like BITS).

**Q:** Which roles does the iSCSI Target Server provide?
**A:** Hosts virtual disks (.vhdx files) and exposes them as iSCSI LUNs to initiators. Supports CHAP and Reverse-CHAP auth, snapshot and clone of LUNs.

---

## ⚙️ SECTION 5: HYPER-V & VIRTUALIZATION

**Q:** What's the difference between a Gen 1 and Gen 2 VM?
**A:** Gen 1 = legacy BIOS boot + IDE controller, can run Windows 2003+/most Linux. Gen 2 = UEFI boot + Secure Boot, SCSI controller, vTPM, supports only Windows 2012+/recent Linux. Use Gen 2 for new builds.

**Q:** What is nested virtualization, and when do you need it?
**A:** Running Hyper-V inside a Hyper-V VM. Required to run a Hyper-V host as a guest (test/lab) or to run Windows Defender Application Guard / WSL2 in a VM.

**Q:** What is Hyper-V Replica?
**A:** Asynchronous VM-level replication between Hyper-V hosts (30 sec, 5 min, or 15 min intervals). Free with Hyper-V; supports failover testing, planned, and unplanned failover.

**Q:** What is a shielded VM?
**A:** A Gen 2 VM with vTPM + BitLocker, attested by a Host Guardian Service (HGS) so even fabric admins cannot inspect the VM disk/memory.

**Q:** What are the three Hyper-V vSwitch types?
**A:** External (binds to a physical NIC, traffic to/from outside the host). Internal (host ↔ VMs only). Private (VM ↔ VM only, no host).

**Q:** What is live migration, and what are the prerequisites?
**A:** Moves a running VM between Hyper-V hosts with zero downtime. Requires identical or compatible CPUs (or processor compatibility mode), shared storage OR Shared-Nothing (SMB 3.0), Kerberos or CredSSP auth, same VM version.

**Q:** What does VMQ (Virtual Machine Queue) do?
**A:** Offloads per-VM NIC processing to dedicated queues on the physical NIC, reducing CPU overhead at 10 GbE+. Strongly recommended on production hosts with multiple VMs.

**Q:** What is SR-IOV and when do you use it?
**A:** Single Root IO Virtualization, assigns a virtual function (VF) of a SR-IOV-capable NIC directly to a VM, bypassing the vSwitch for near-line-rate throughput. Used for VMs needing wire-speed networking (firewalls, NFV).

---

## 🔗 SECTION 6: HYBRID CLOUD WITH AZURE ARC

**Q:** What is Azure Arc, in one sentence?
**A:** A control plane that projects on-prem, multicloud, and edge resources into Azure Resource Manager so you can apply Azure governance, policy, monitoring, and security to them.

**Q:** What does Arc-enabled servers install on the target machine?
**A:** The Connected Machine agent (`azcmagent`), which authenticates to Azure and registers the server as a "Microsoft.HybridCompute/machines" resource.

**Q:** What protocols and ports does the Arc Connected Machine agent use outbound?
**A:** HTTPS (443) outbound only, to specific Azure endpoints (Arc data plane, Azure AD, etc.). No inbound ports required.

**Q:** What's the difference between Arc-enabled servers and Arc-enabled Kubernetes?
**A:** Arc-enabled servers projects individual VMs/physical machines into Azure. Arc-enabled Kubernetes connects an existing K8s cluster (anywhere) for GitOps, Azure Policy, Azure Monitor, and Defender for Containers.

**Q:** Can you assign Azure Policy to Arc-enabled servers?
**A:** Yes, at scale via management groups. Common initiatives include "Deploy Azure Monitor agent to Arc machines" and "Enable Defender for Servers on Arc."

**Q:** What is Extended Security Updates (ESUs) via Arc?
**A:** Azure-billed channel to deliver ESUs to out-of-support OS versions (e.g., Windows Server 2012/R2 after Oct 2023 EOL). Requires the server to be Arc-onboarded and ESU-enabled in the portal.

**Q:** What is the Update Management center for Arc?
**A:** Centralized patching for Azure VMs *and* Arc-enabled servers (Windows + Linux). Provides on-demand and scheduled patching with maintenance windows and pre/post scripts.

---

## 📈 SECTION 7: AZURE MONITOR & HYBRID MONITORING

**Q:** What is Azure Monitor Agent (AMA), and what does it replace?
**A:** Unified telemetry agent for VMs/Arc machines. Replaces the legacy MMA (Log Analytics agent / OMS agent), MMA retired August 2024.

**Q:** What is a Data Collection Rule (DCR)?
**A:** A reusable JSON/portal definition of *what* to collect (perf counters, event logs, syslog, custom logs) and *where* to send it (Log Analytics workspace, Azure Monitor metrics). Replaces MMA workspace-level config.

**Q:** What is a Log Analytics workspace?
**A:** Azure resource that stores logs and offers KQL query interface. Billing is per-GB ingested (with commitment tiers) and 30-day retention by default; up to 12 years on archive tier.

**Q:** Name 3 KQL operators commonly used in log queries.
**A:** `where` (filter), `summarize` (aggregate), `project` (select/rename columns). Plus `take`, `top`, `join`, `extend`, `render` (charts).

**Q:** What is VM Insights?
**A:** A pre-packaged Azure Monitor solution for VMs/Arc machines that provides performance trends, dependency maps (process-to-process), and health views, built atop DCRs.

**Q:** What is an Azure Monitor Workbook?
**A:** A canvas combining text, queries, charts, and parameters for interactive dashboards. Saved per-workspace; can use KQL and Resource Graph as data sources.

**Q:** What's the difference between a metric alert and a log alert?
**A:** Metric alert = near-real-time, evaluates platform/custom metrics at 1-min granularity. Log alert = KQL query evaluated on a schedule (5 min default), supports complex correlation across tables.

---

## 🛡️ SECTION 8: SERVER SECURITY & DEFENDER

**Q:** What's the difference between Defender for Servers Plan 1 and Plan 2?
**A:** P1 = Defender for Endpoint integration only. P2 adds vulnerability assessment (Qualys/MDVM), file integrity monitoring, just-in-time VM access, adaptive application controls, network hardening, 500 MB free Log Analytics ingestion per node per day, and regulatory compliance.

**Q:** What is just-in-time (JIT) VM access?
**A:** Defender for Servers feature (P2) that keeps RDP/SSH ports closed at the NSG until an authorized user requests time-bound access (typically ≤3 hrs).

**Q:** What is Windows Defender Application Control (WDAC)?
**A:** Application allowlisting at the kernel level. Successor to AppLocker; tamper-resistant and policy-based (signed code, hashes, paths). Supports Audit and Enforce modes.

**Q:** What does Credential Guard protect against?
**A:** Uses virtualization-based security (VBS) to isolate LSASS secrets (NTLM hashes, Kerberos tickets) into a separate hypervisor-protected process, defeats Pass-the-Hash and Mimikatz-style attacks.

**Q:** What is a Secured-core server?
**A:** A hardware + firmware + OS bundle Microsoft certifies that includes TPM 2.0, Secure Boot, DMA protection, VBS, HVCI, and System Guard. Available in Windows Server 2022+.

**Q:** What does Exploit Guard's "Attack Surface Reduction" (ASR) do?
**A:** Policy-based rules that block common exploit techniques, e.g., "Block Office apps creating child processes," "Block credential stealing from LSASS." Configured via GPO, MEM (Intune), or PowerShell.

**Q:** How does Microsoft Defender for Endpoint (MDE) onboard a Windows Server?
**A:** Via Defender for Servers (auto-onboards Azure/Arc VMs), Group Policy script (for non-cloud), Intune, or direct PowerShell script using an onboarding package downloaded from the MDE portal.

---

## 💾 SECTION 9: BACKUP, ASR & MIGRATION

**Q:** What's a Recovery Services Vault?
**A:** The Azure storage container for Azure Backup and Azure Site Recovery data. Per region; supports LRS/ZRS/GRS redundancy; soft-delete enabled by default (14 days).

**Q:** What does MARS (Microsoft Azure Recovery Services) agent back up?
**A:** Files, folders, and System State from Windows machines directly to Azure (no MABS server). 3 backups/day max; not for application-consistent VM backup.

**Q:** What is MABS (Microsoft Azure Backup Server)?
**A:** Free, on-prem backup server based on System Center DPM. Backs up VMs, SQL, Exchange, SharePoint to local disk + offloads to Azure. Application-aware.

**Q:** What is Azure Site Recovery (ASR)?
**A:** DR-as-a-service. Replicates on-prem VMs/physical/AWS or Azure VMs to Azure (or to a paired region for Azure-to-Azure). RPO ~30 sec, RTO minutes via planned/test/unplanned failovers.

**Q:** What is the Storage Migration Service (SMS)?
**A:** Built into Windows Admin Center. Inventories source servers (Win Server 2003+ and Linux SMB), transfers files+ACLs, and "cuts over", renames new server and IP to look like old server.

**Q:** What is Azure Migrate?
**A:** Hub for server, database, and web app migration. Includes appliance-based discovery, dependency analysis, right-sizing recommendations, and 3 migration tools (server migration via ASR, DB Migration Assistant, App Service migration).

**Q:** What is ADMT, and what's its current status?
**A:** Active Directory Migration Tool, moves users/groups/computers between AD domains and forests with SID history. Still works but Microsoft no longer actively develops it; community-supported.

**Q:** What's the default ASR RPO and how is it achieved?
**A:** ~30 seconds. Achieved by Mobility Service agent on the source writing to a cache storage account, ASR processing servers replicating to target, and Recovery Services Vault recovery points.

---

## 🤖 SECTION 10: POWERSHELL, DSC & AUTOMATION

**Q:** What's the difference between Windows PowerShell 5.1 and PowerShell 7?
**A:** Windows PowerShell 5.1 = legacy, built on .NET Framework, Windows-only, shipped *in* Windows. PowerShell 7 = cross-platform (Win/Linux/macOS), .NET (Core), installed separately, current dev focus.

**Q:** What does PowerShell remoting use under the hood?
**A:** WS-Management (WSMan) over HTTP 5985 / HTTPS 5986. PowerShell 7 also supports SSH-based remoting cross-platform.

**Q:** What is Just Enough Administration (JEA)?
**A:** Role-capability-based PowerShell remoting endpoints that constrain *which* cmdlets and parameters a user can run. Runs sessions as a virtual account with elevated rights even when the caller is non-admin.

**Q:** What is Desired State Configuration (DSC)?
**A:** Declarative config management for Windows/Linux. Author a `.ps1` that compiles to a MOF, deploy via Push or Pull (formerly via DSC pull server, now via Azure Automation DSC / Azure Machine Configuration).

**Q:** What replaced Azure Automation DSC in 2023?
**A:** Azure Machine Configuration (part of Azure Policy guest configuration). Works for Azure + Arc-enabled servers; uses DSC v3 under the hood.

**Q:** What is Azure Automanage?
**A:** Automatic enablement of best-practice services (Backup, Update Management, Defender, MAA, change tracking) for Azure VMs *and* Arc-enabled servers. Two profiles: Production and Dev/Test.

**Q:** What's the cmdlet to install a Windows feature, and how do you do it on a remote computer?
**A:** `Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools`. Remote: wrap in `Invoke-Command -ComputerName srv01 -ScriptBlock { ... }` or use `-ComputerName` if supported.

**Q:** How do you create a JEA session configuration?
**A:** Create a Role Capability file (`.psrc`), a Session Configuration file (`.pssc`), then `Register-PSSessionConfiguration -Path .\Config.pssc -Name MyJEA`.

**Q:** What's the cmdlet for invoking a script across multiple servers?
**A:** `Invoke-Command -ComputerName server1,server2 -ScriptBlock { Get-Service }` or `-FilePath .\script.ps1`.

---

## 🏆 STUDY TIPS

1. **Use both exam study guides side-by-side.** AZ-800 covers core; AZ-801 covers hybrid/advanced. They overlap (identity, networking) but not perfectly.
2. **Build a 3-VM Hyper-V lab.** DC1, DC2, MEMBER1. Promote, demote, replicate, fail. Repeat until muscle memory.
3. **Sign up for a free Entra tenant** + a $50 Azure credit. Install Entra Connect, onboard Arc, take a backup. Theory will not save you.
4. **Print the Cheat-Sheets** and tape them above your monitor.
5. **Re-attempt every wrong quiz/practice question 3 days later.** Spaced repetition wins.

## 📚 BEFORE THE EXAM

Sleep. Eat. Show up 30 minutes early. Read each question twice. **Underline keywords** ("zone-redundant," "lowest cost," "without downtime"). Mark and move on if stuck, come back at the end.

You've got this.
