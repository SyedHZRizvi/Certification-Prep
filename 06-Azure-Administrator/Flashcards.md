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
  var STORAGE_KEY = 'fc-progress-az-104';
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

# 🃏 AZ-104 Azure Administrator Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. Click the card to flip. Use the section dropdown to focus on weak areas. Aim for daily review until the real exam.

---

## 📜 SECTION 1: GOVERNANCE & HIERARCHY

**Q:** What are the 4+1 levels of the Azure resource hierarchy from top to bottom?
**A:** Tenant → Management Group → Subscription → Resource Group → Resource.

**Q:** What is the maximum nesting depth of management groups under the Tenant Root Group?
**A:** 6 levels.

**Q:** What is the storage account naming rule?
**A:** Lowercase letters + digits only, 3–24 characters, globally unique across all of Azure.

**Q:** Do tags inherit automatically from a Resource Group to child resources?
**A:** NO. Use the "Inherit a tag from the resource group" Modify policy to enforce it.

**Q:** Which two roles can create or remove resource locks?
**A:** Owner and User Access Administrator.

**Q:** Difference between `CanNotDelete` and `ReadOnly` locks?
**A:** CanNotDelete blocks deletion only (read + modify OK). ReadOnly blocks both deletes and modifications, and can break operations like listing storage keys.

**Q:** Which Azure Policy effect runs an embedded ARM deployment to remediate non-compliance?
**A:** DeployIfNotExists (DINE).

**Q:** How do you bring existing non-compliant resources into compliance after applying a DINE policy?
**A:** Create a remediation task on the policy assignment.

**Q:** What is an Initiative in Azure Policy?
**A:** A group (set) of related policies assigned together, e.g., MCSB, NIST 800-53.

**Q:** How do you override a Deny policy inherited from a parent scope?
**A:** Create a policy **exemption** at the smaller scope, NOT a counter-policy.

**Q:** Default Activity Log retention?
**A:** 90 days. Use a Diagnostic Setting to keep longer (Log Analytics, Storage, Event Hub).

**Q:** Three steps in moving a resource between resource groups?
**A:** 1) Validate move (`validateMoveResources`). 2) Remove resource locks. 3) Execute `az resource move`. Then re-apply tags/locks and update hardcoded references.

---

## 🪪 SECTION 2: ENTRA ID & RBAC

**Q:** Which Entra ID license tier is REQUIRED for Conditional Access?
**A:** P1.

**Q:** Which tier is REQUIRED for Identity Protection (risk-based policies)?
**A:** P2.

**Q:** What unlocks Privileged Identity Management (PIM)?
**A:** Entra ID P2.

**Q:** Dynamic group membership rules require which tier?
**A:** P1.

**Q:** Name the 4 fundamental built-in RBAC roles.
**A:** Owner, Contributor, Reader, User Access Administrator.

**Q:** Can a Contributor at a Resource Group assign roles within that RG?
**A:** No. Only Owner or User Access Administrator can.

**Q:** Difference between control plane and data plane access?
**A:** Control plane = manage the resource (create, configure, delete). Data plane = read/write data inside the resource (e.g. blob contents, secrets). A Storage Account Contributor cannot read blobs without an explicit data role.

**Q:** What's the difference between PIM "eligible" and "active" assignments?
**A:** Eligible requires activation (MFA, optional approval, time-bound). Active is permanent, use sparingly.

**Q:** Maximum PIM activation duration by default?
**A:** 8 hours (can be lowered per role in PIM settings).

**Q:** Why prefer a managed identity over a service principal for Azure-hosted workloads?
**A:** No secrets to rotate/leak; lifecycle managed by Azure; auditable via Entra logs.

**Q:** System-assigned vs user-assigned managed identity?
**A:** System-assigned dies with the parent resource. User-assigned is its own ARM resource, can be attached to many resources, and survives deletion.

**Q:** What's the difference between Entra ID B2B and External ID (formerly B2C)?
**A:** B2B = invite external partners/contractors as guests to your tenant (with RBAC). External ID (B2C) = consumer-facing identity in a separate tenant kind with social IdPs.

**Q:** What does Authenticator number matching defeat?
**A:** MFA fatigue / push bombing.

**Q:** What is a Conditional Access "report-only" mode used for?
**A:** Testing a policy's impact without enforcing it, review logs first, then turn on enforcement.

**Q:** What are Administrative Units (AUs)?
**A:** Sub-directory groupings that let you scope user/group admin (like User Administrator) to a subset of the tenant.

---

## 🗄️ SECTION 3: STORAGE & BLOBS

**Q:** From cheapest to most expensive, list the storage redundancy SKUs.
**A:** LRS < ZRS < GRS < RA-GRS < GZRS < RA-GZRS.

**Q:** Which redundancy survives an Availability Zone outage but NOT a region outage?
**A:** ZRS.

**Q:** Which redundancy survives BOTH AZ and region outage?
**A:** GZRS (or RA-GZRS for additional read access to the secondary).

**Q:** Minimum storage duration for Cool / Cold / Archive tiers?
**A:** 30 / 90 / 180 days.

**Q:** Can you read an Archive-tier blob directly?
**A:** No, must rehydrate to Hot or Cool first (hours).

**Q:** Three SAS types?
**A:** Account SAS, Service SAS, User Delegation SAS.

**Q:** Which SAS uses Entra ID for signing instead of the account key?
**A:** User Delegation SAS, best practice, auditable per user.

**Q:** How do you make a Service SAS revocable without rotating the key?
**A:** Associate it with a Stored Access Policy (SAP); delete the SAP to revoke.

**Q:** What's the difference between a Service Endpoint and a Private Endpoint?
**A:** Service endpoint = subnet firewalled to PaaS over the backbone, PaaS still has a public IP. Private endpoint = real NIC + private IP in your subnet, public access can be disabled. PE requires a linked Private DNS Zone.

**Q:** What prerequisites does a Key Vault need before you can use Customer-Managed Keys (CMK) on a storage account?
**A:** Soft delete + purge protection enabled. The storage account must use a managed identity granted "Key Vault Crypto Service Encryption User."

**Q:** Default encryption at rest for managed disks and storage accounts?
**A:** AES-256 with Microsoft-managed keys (MMK). Always on. Cannot disable.

**Q:** Best tool for transferring 50 TB on-prem to Azure with limited bandwidth?
**A:** Azure Data Box (physical appliance).

**Q:** Two immutable blob policy types?
**A:** Time-based retention (locked for N days) and Legal Hold (locked until tag removed).

---

## 📂 SECTION 4: AZURE FILES & FILE SYNC

**Q:** Which account kind is required for NFS 4.1 shares?
**A:** Premium FileStorage.

**Q:** What redundancy options are supported for NFS shares?
**A:** LRS or ZRS only (no GRS).

**Q:** Is encryption in transit supported for NFS 4.1 on Azure Files?
**A:** No, secure with network isolation (private endpoint or VNet).

**Q:** Three identity-based SMB auth options for Azure Files?
**A:** Entra Kerberos for hybrid identities, on-prem AD DS, and Entra Domain Services.

**Q:** Premium vs Standard file share billing?
**A:** Premium bills for provisioned size; standard tiers bill for used size.

**Q:** Does Azure File Sync replace the need for backups?
**A:** No. Sync ≠ backup. You still need snapshots / RSV.

**Q:** Where does the Azure File Sync agent run?
**A:** On a registered Windows Server (no Linux/macOS support).

**Q:** What does cloud tiering replace local files with?
**A:** Tiny stub (pointer) files. Data is pulled from Azure on demand.

**Q:** Two cloud tiering policies?
**A:** Volume free space (keep X% free) and Date (tier files older than N days).

**Q:** Do storage account keys give per-user audit logs?
**A:** No, key auth is a shared identity. Use identity-based auth for per-user audit.

---

## 🖥️ SECTION 5: VIRTUAL MACHINES

**Q:** SLAs: single VM with Premium SSD / Availability Set / Availability Zones?
**A:** 99.9% / 99.95% / 99.99%.

**Q:** Can you add a VM to an Availability Set after creation?
**A:** No. AS must be specified at VM creation.

**Q:** Can a VM be in both an Availability Set and an Availability Zone?
**A:** No, mutually exclusive.

**Q:** Max FDs and UDs in an Availability Set?
**A:** 3 fault domains × 20 update domains.

**Q:** Can Premium SSD v2 or Ultra Disks be used as OS disks?
**A:** No, data disks only.

**Q:** What makes Premium SSD v2 different from Premium SSD?
**A:** Independent IOPS, throughput, and size, billed separately. Premium SSD (v1) is tied to fixed P-tiers.

**Q:** Spot VM eviction notice?
**A:** 30 seconds.

**Q:** VMSS Flexible vs Uniform orchestration?
**A:** Flexible (modern default) supports mixed sizes, AZ integration, up to 1000 instances. Uniform (legacy) is single-SKU, tightly managed.

**Q:** What does HPA scale vs cluster autoscaler? (AKS)
**A:** HPA scales pod replicas. Cluster autoscaler scales node count in a pool.

**Q:** Where does Azure Disk Encryption (ADE) operate?
**A:** Inside the OS, BitLocker (Windows) or dm-crypt (Linux), keys in Key Vault.

**Q:** Where does Encryption at Host operate?
**A:** At the physical host level, encrypts temp + cache disks. Independent of ADE.

**Q:** What is the Compute Gallery hierarchy?
**A:** Gallery → Image Definition → Image Version (e.g. 1.0.0), with replication to target regions.

**Q:** Linux VM generalize command?
**A:** `waagent -deprovision +user`. (Windows uses `sysprep /generalize`.)

---

## 📦 SECTION 6: APP SERVICES & CONTAINERS

**Q:** Minimum App Service Plan tier for deployment slots?
**A:** Standard.

**Q:** Minimum tier for an inbound private endpoint on App Service?
**A:** Premium v3 (or Isolated v2 in an ASE).

**Q:** What is a "slot setting"?
**A:** An app setting marked to STAY with its slot during a swap (doesn't move with the code).

**Q:** Scale up vs scale out?
**A:** Up = bigger SKU (vertical, may have downtime). Out = more instances (horizontal, autoscale).

**Q:** Best fit for a 5-minute container that processes a queue and exits?
**A:** Azure Container Instances (ACI).

**Q:** Is the standard AKS control plane paid?
**A:** No, free in standard tier. Pay for nodes and add-ons. Uptime SLA tier adds a small cost.

**Q:** Three AKS networking modes (modern → legacy)?
**A:** Azure CNI Overlay (modern default), Azure CNI, Kubenet (legacy, avoid).

**Q:** AKS storage driver for RWX (multi-pod read/write)?
**A:** Azure File CSI driver. (Azure Disk CSI = RWO only.)

**Q:** AKS layer-7 ingress with WAF, best options?
**A:** Application Gateway Ingress Controller (AGIC) or Application Gateway for Containers (AGFC, modern).

---

## 🕸️ SECTION 7: VIRTUAL NETWORKS

**Q:** How many IPs does Azure reserve per subnet?
**A:** 5, `.0` network, `.1` default gateway, `.2`/`.3` DNS, `.255` broadcast.

**Q:** Is VNet peering transitive?
**A:** No. A↔B and B↔C does NOT imply A↔C. Need a hub firewall + UDRs to transit.

**Q:** Reserved subnet name for the VPN/ExpressRoute gateway?
**A:** GatewaySubnet (case-sensitive; minimum /29, /27 recommended).

**Q:** Minimum size for AzureFirewallSubnet and AzureBastionSubnet?
**A:** /26 for both.

**Q:** What two peering toggles let a spoke use the hub's gateway?
**A:** "Allow gateway transit" on hub-to-spoke peering + "Use remote gateways" on spoke-to-hub peering.

**Q:** Service Endpoint vs Private Endpoint, which gets a private IP?
**A:** Only Private Endpoint creates a NIC with a private IP in your subnet.

**Q:** What is required for a Private Endpoint FQDN to resolve to the private IP?
**A:** A linked Private DNS Zone with a DNS zone group auto-registering the PE's IP.

**Q:** Route-based vs Policy-based VPN, which is modern?
**A:** Route-based (BGP, IKEv2, multiple tunnels). Policy-based is legacy single-tunnel.

**Q:** Three ExpressRoute SKUs?
**A:** Local (only local metro region), Standard (geopolitical region), Premium (global reach + any region + higher limits).

**Q:** What is ExpressRoute Global Reach?
**A:** Connect two on-prem sites THROUGH the Microsoft backbone via two ER circuits. Requires Premium.

**Q:** ExpressRoute Direct vs typical ExpressRoute?
**A:** Direct is 10/100 Gbps directly to a Microsoft edge port, no provider needed.

**Q:** Five next-hop types in UDRs?
**A:** VnetLocal, VirtualNetworkGateway, Internet, VirtualAppliance, None.

---

## 🛡️ SECTION 8: NETWORK SECURITY

**Q:** NSG rule priority direction?
**A:** Lower priority number = evaluated first. First match wins.

**Q:** Three default inbound NSG rules?
**A:** AllowVnetInBound (65000), AllowAzureLoadBalancerInBound (65001), DenyAllInBound (65500).

**Q:** Are NSGs stateful?
**A:** Yes, return traffic is auto-allowed.

**Q:** When both subnet-level and NIC-level NSGs apply, what's the result of a Deny in either?
**A:** Packet is dropped. Both layers must allow.

**Q:** What's an ASG?
**A:** Application Security Group, a logical tag attached to NICs. Used as source/destination in NSG rules within a single VNet.

**Q:** Do ASGs work across peered VNets?
**A:** No, single VNet only.

**Q:** Azure Firewall rule processing order?
**A:** DNAT → Network → Application (within the same priority).

**Q:** Which Azure Firewall SKU supports TLS inspection and IDPS?
**A:** Premium only.

**Q:** When to use Application Gateway WAF v2 vs Front Door?
**A:** AGW = regional L7 + WAF. Front Door = global edge L7 + CDN + WAF.

**Q:** What is Traffic Manager?
**A:** A DNS-based traffic router. It returns an IP to the client; no proxy. Different from L7 services.

**Q:** WAF rollout best practice?
**A:** Detection mode → observe logs → tune rules / exclusions → switch to Prevention mode.

**Q:** Three DDoS protection plans?
**A:** Basic (free, automatic), DDoS Network Protection (per-VNet, $$$), DDoS IP Protection (per-public-IP, cheaper).

**Q:** Best way to restrict an App Service to only Front Door traffic?
**A:** Restrict by `AzureFrontDoor.Backend` service tag with header check, OR use Private Link origin in Front Door Premium.

---

## 💾 SECTION 9: BACKUP, RECOVERY & MIGRATION

**Q:** Difference between Azure Backup and Azure Site Recovery (ASR)?
**A:** Backup = data loss / corruption / ransomware recovery (scheduled, file-granular). ASR = region failover / DR (continuous replication, machine-level). Use both.

**Q:** What does the MARS agent back up?
**A:** Windows files/folders + System State to Azure. (NOT Linux.)

**Q:** Recovery Services Vault redundancy options?
**A:** LRS / GRS (default) / ZRS, set at creation, hard to change later.

**Q:** What does Cross-Region Restore (CRR) require?
**A:** GRS vault + the CRR feature enabled (opt-in). Lets you restore to the paired region.

**Q:** Default backup soft delete retention?
**A:** 14 days (configurable up to 180).

**Q:** What is Multi-User Authorization (MUA) for backup?
**A:** A "4-eyes" approval pattern using a Resource Guard, protected backup operations require a second admin's approval.

**Q:** Three ASR failover types?
**A:** Test (isolated network, no prod impact), Planned (no data loss), Unplanned (disaster, accept last replicated point).

**Q:** Azure Migrate's 3 phases?
**A:** Discover → Assess → Migrate.

**Q:** RPO vs RTO?
**A:** RPO = Recovery Point Objective (max data loss). RTO = Recovery Time Objective (max downtime).

**Q:** How is application-consistent backup achieved on Linux VMs?
**A:** Pre-script and post-script files placed at `/etc/azure/` to quiesce and resume the app.

---

## 📡 SECTION 10: MONITOR & GOVERNANCE

**Q:** Two main data stores in Azure Monitor?
**A:** Metrics TSDB (90-day retention) and Log Analytics workspace (logs, KQL-queried).

**Q:** What is the modern Azure Monitor agent?
**A:** Azure Monitor Agent (AMA) + Data Collection Rules. Replaces MMA / OMS Agent.

**Q:** What is the language used to query Log Analytics?
**A:** KQL (Kusto Query Language).

**Q:** KQL operator to aggregate rows?
**A:** `summarize`.

**Q:** Default Log Analytics workspace retention?
**A:** 30 days interactive (configurable 4–730), then optional Archive tier for 12+ years.

**Q:** Four Diagnostic Setting destinations?
**A:** Log Analytics workspace, Storage account, Event Hub, Partner integration.

**Q:** How do you trigger alert notifications + automation actions?
**A:** Action Groups, bundles of recipients (email/SMS/voice) and actions (webhook, Logic App, Function, Automation Runbook).

**Q:** Best Network Watcher tool to find which NSG rule is dropping a packet?
**A:** IP Flow Verify.

**Q:** What does Workspace-based Application Insights store?
**A:** Application telemetry (requests, deps, exceptions, traces) inside a Log Analytics workspace.

**Q:** Service Health alert categories?
**A:** Service issues, Planned maintenance, Health advisories, Security advisories.

**Q:** Difference between Workbooks and Dashboards?
**A:** Workbooks = parameterized, interactive KQL reports with rich visualizations. Dashboards = simple pinned tiles in the portal.

**Q:** Where do NSG Flow Logs v2 land natively?
**A:** A storage account (raw). Optionally fed to Traffic Analytics → Log Analytics for analysis.

---

## 🎓 STUDY TIPS

1. Read each cheat-sheet daily for the last week, they're designed for that
2. Re-run the practice exams 3 times each; aim for 90%+ on the Final Mock before scheduling
3. Build something real in your Azure free subscription, finger memory beats notes
4. Watch John Savill on any topic you're shaky on (he's free)
5. The day before the exam: skim cheat sheets only, no new material

---

## ⏰ BEFORE THE EXAM (24 hrs prior)

- Eat normally, sleep at least 7 hours
- Set up your testing room (clean desk, allowed water bottle, ID)
- For OnVUE: test your webcam and mic an hour before
- Take Practice Exam 1 in the morning as a warmup (don't grade it harshly)
- Skim cheat sheets in the afternoon
- Stop studying 2 hours before bedtime
- Arrive (or log in) 30 minutes early

🎓 You got this.
