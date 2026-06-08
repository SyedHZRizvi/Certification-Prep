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
  var STORAGE_KEY = 'fc-progress-az-900';
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

# 🃏 Azure Fundamentals (AZ-900) Master Flashcards

> **How to use:** Use the section dropdown to drill one topic. Tap "Got it" to mark a card known (saved per-browser). Aim for daily review until the real exam. Cards are also Anki/Quizlet-ready in plain Q/A markdown form below.

---

## ☁️ SECTION 1: CLOUD CONCEPTS

**Q:** What does the cloud convert CapEx into?
**A:** OpEx, you pay as you use rather than buying assets upfront.

**Q:** Define IaaS, PaaS, and SaaS in one phrase each.
**A:** IaaS = you manage OS+up (e.g., Azure VM). PaaS = you manage code+data (e.g., App Service). SaaS = you only use it (e.g., Microsoft 365).

**Q:** Name three things that are ALWAYS the customer's responsibility under shared responsibility, regardless of service model.
**A:** Data, identities/accounts, access management (and endpoints).

**Q:** What is the difference between vertical and horizontal scaling?
**A:** Vertical = bigger VM (scale up). Horizontal = more VM instances (scale out).

**Q:** What is elasticity?
**A:** Automatic adding/removing of capacity to match real-time demand.

**Q:** High Availability vs Disaster Recovery, one-liner each?
**A:** HA = service stays up during component failure (in-region). DR = recover after a major event (often region failure).

**Q:** Are Reservations CapEx or OpEx in Azure?
**A:** OpEx, paid over time, no asset ownership, despite the multi-year commitment.

**Q:** What is the cost of data INGRESS into Azure?
**A:** Free. Only egress (outbound) is billed.

**Q:** Public vs Private vs Hybrid cloud in one phrase each?
**A:** Public = multi-tenant (Azure). Private = single-org dedicated. Hybrid = public + private connected.

**Q:** What is fault tolerance?
**A:** A system that continues operating with ZERO downtime during component failure.

**Q:** Name the six cloud benefits tested on AZ-900.
**A:** High Availability, Scalability, Reliability, Predictability, Security, Governance/Manageability.

---

## 🌍 SECTION 2: AZURE ARCHITECTURE

**Q:** From top to bottom, what is Azure's resource hierarchy?
**A:** Management Group → Subscription → Resource Group → Resource.

**Q:** What is an Availability Zone?
**A:** A physically separate datacenter (or group) within a region with independent power, cooling, and networking.

**Q:** What is a region pair?
**A:** Two Azure regions in the same geography (often ~300+ mi apart), used for sequential updates and prioritized recovery. GRS replicates to the pair.

**Q:** What VM SLA do you get with 2+ VMs across Availability Zones?
**A:** 99.99%.

**Q:** What VM SLA do you get with 2+ VMs in an Availability Set?
**A:** 99.95%.

**Q:** Can a resource group contain resources from multiple regions?
**A:** Yes, the RG's location is just metadata. Resources inside can be from any region.

**Q:** How many tenants does a subscription belong to?
**A:** Exactly one Microsoft Entra ID tenant.

**Q:** What are the two main sovereign Azure clouds?
**A:** Azure Government (US Fed/State/DoD) and Azure China (operated by 21Vianet).

**Q:** What's the max management-group nesting depth below root?
**A:** 6 levels.

**Q:** Does every Azure region have Availability Zones?
**A:** No, only AZ-enabled regions have them.

---

## 💻 SECTION 3: CORE SERVICES

**Q:** Name the six main Azure compute services and one pick rule each.
**A:** VM (full OS control), VM Scale Sets (auto-scale identical VMs), App Service (PaaS web/API), ACI (single container), AKS (Kubernetes orchestration), Functions (event-driven serverless).

**Q:** What does Azure Virtual Desktop (AVD) do?
**A:** Streams multi-session Windows 10/11 desktops to remote workers from Azure.

**Q:** VPN Gateway vs ExpressRoute, pick rule for each?
**A:** VPN Gateway = encrypted over internet, fast to set up, cheaper. ExpressRoute = private dedicated circuit, predictable bandwidth/latency, expensive, weeks to set up.

**Q:** What does VNet Peering do?
**A:** Privately connects two Azure VNets together (same or different regions).

**Q:** What's the L4 vs L7 vs Global load balancer mapping in Azure?
**A:** L4 = Azure Load Balancer (TCP/UDP). L7 regional = Application Gateway (with WAF). L7 global = Front Door (with CDN + WAF).

**Q:** What are the four data services in an Azure storage account?
**A:** Blob (objects), Files (SMB/NFS), Queue (simple messaging), Table (cheap NoSQL).

**Q:** Order the four blob access tiers from highest to lowest storage cost.
**A:** Hot > Cool > Cold > Archive (Archive requires rehydration before reading).

**Q:** Define LRS, ZRS, GRS, GZRS in one phrase each.
**A:** LRS = 3 copies in one datacenter. ZRS = 3 copies across AZs in one region. GRS = 6 copies (3 primary + 3 paired region). GZRS = ZRS + paired region (best HA + DR).

**Q:** Which Azure database is best for globally distributed multi-model NoSQL with multi-region writes?
**A:** Cosmos DB.

**Q:** Lift-and-shift on-prem SQL Server with minimal changes → which Azure service?
**A:** Azure SQL Managed Instance.

**Q:** Cloud-native managed SQL (PaaS), no full SQL Server compatibility needed → which?
**A:** Azure SQL Database.

**Q:** What does Azure Event Hubs do?
**A:** High-throughput event ingestion (millions/sec), ideal for IoT and telemetry.

**Q:** Service Bus vs Event Hubs vs Event Grid, pick rule for each?
**A:** Service Bus = enterprise messaging (queues/topics/transactions). Event Hubs = massive event ingest. Event Grid = event routing (pub/sub).

---

## 🔐 SECTION 4: IDENTITY, GOVERNANCE & SECURITY

**Q:** What is the new name (2023) for Azure Active Directory?
**A:** Microsoft Entra ID.

**Q:** What tool syncs on-prem Active Directory with Microsoft Entra ID?
**A:** Microsoft Entra Connect (formerly Azure AD Connect).

**Q:** Define SSO and MFA.
**A:** SSO = one login for many apps. MFA = require 2+ proofs of identity (know/have/are).

**Q:** What does Conditional Access do that plain MFA doesn't?
**A:** It's the policy engine that decides WHEN to require MFA (e.g., only off-network, only on unmanaged devices, only high-risk sign-ins).

**Q:** What Entra ID tier is required for Conditional Access?
**A:** P1 or higher.

**Q:** What does RBAC answer?
**A:** WHO can do WHAT on WHICH resources.

**Q:** Name the four fundamental built-in RBAC roles.
**A:** Owner, Contributor, Reader, User Access Administrator.

**Q:** Which RBAC role can do everything EXCEPT grant access to others?
**A:** Contributor.

**Q:** What does Azure Policy answer?
**A:** WHAT resources are allowed to exist and how must they be configured.

**Q:** What Azure Policy effect blocks creation of non-compliant resources?
**A:** Deny.

**Q:** What is an Azure Policy initiative?
**A:** A bundle of related policies (e.g., "ISO 27001" initiative).

**Q:** Two types of Azure resource locks?
**A:** CanNotDelete and ReadOnly. Both apply to everyone, including Owners.

**Q:** Defender for Cloud vs Microsoft Sentinel, when each?
**A:** Defender for Cloud = posture + workload protection + Secure Score. Sentinel = SIEM + SOAR for multi-source logs and automated response.

**Q:** The 3 principles of Zero Trust?
**A:** Verify explicitly, use least-privilege access, assume breach.

**Q:** What does Azure Key Vault store?
**A:** Secrets, keys, and certificates (HSM-backed).

**Q:** What is Azure Bastion?
**A:** Browser-based RDP/SSH to VMs without exposing public IPs on the VMs.

**Q:** What is Private Endpoint / Private Link?
**A:** Brings Azure PaaS services into your private VNet IP space (no public endpoint exposed).

**Q:** External ID, B2B vs B2C?
**A:** B2B = invite partner identities. B2C = customer sign-up for your app.

---

## 💰 SECTION 5: COST MANAGEMENT & SLAs

**Q:** Pricing Calculator vs TCO Calculator vs Cost Management, one-liner each?
**A:** Pricing Calculator = estimate new Azure cost. TCO Calculator = compare on-prem vs Azure. Cost Management = analyze + forecast actual spend.

**Q:** Does a Budget in Cost Management automatically shut down resources?
**A:** No, it only alerts. You'd wire a Logic App / Function to actually stop things.

**Q:** Reservations vs Savings Plans, what's the difference?
**A:** Reservations commit to specific SKU for 1/3 years (up to 72% off). Savings Plans commit to hourly compute spend, more flexible across families (up to 65% off).

**Q:** Spot VMs save up to what % and what's the catch?
**A:** Up to 90% off, but Azure can evict with 30-second notice. Use only for interruptible/fault-tolerant workloads.

**Q:** What is Azure Hybrid Benefit?
**A:** Reuse existing on-prem Windows Server / SQL Server licenses (with Software Assurance) on Azure VMs for up to 85% discount.

**Q:** Three standard VM SLA tiers and how to achieve each?
**A:** 99.9% = single VM with Premium SSD. 99.95% = 2+ VMs in Availability Set. 99.99% = 2+ VMs across Availability Zones.

**Q:** Composite SLA formula?
**A:** Multiply the SLAs together: SLA_A × SLA_B × ... Adding dependencies LOWERS the composite SLA.

**Q:** Composite SLA of 99.95% × 99.99% =?
**A:** ≈ 99.94%.

**Q:** Do Preview services have an SLA?
**A:** No, Preview is no-SLA. SLAs apply at GA (General Availability).

**Q:** What's in the Azure free account?
**A:** $200 USD credit for 30 days + 12 months free of select services + always-free tier (e.g., F1 App Service, Cosmos DB free tier).

**Q:** Ingress and egress billing in Azure?
**A:** Ingress is FREE. Egress (outbound) is billed per GB.

---

## 🧰 SECTION 6: TOOLS & FEATURES

**Q:** Five Azure management interfaces?
**A:** Azure Portal, Azure CLI (`az`), Azure PowerShell (`Az`), Cloud Shell (browser), Azure Mobile App.

**Q:** What is Azure Cloud Shell?
**A:** Browser-based shell (Bash or PowerShell) with CLI/PS modules pre-installed; backed by a storage account for persistence.

**Q:** What is Bicep, and how is it related to ARM templates?
**A:** Bicep is a friendlier DSL that compiles to ARM JSON. Same engine, different syntax. Microsoft's recommended modern Azure IaC.

**Q:** When to use Terraform vs Bicep?
**A:** Terraform = multi-cloud (Azure + AWS + GCP). Bicep = Azure-only, cleaner syntax.

**Q:** Azure Monitor vs Service Health vs Azure Status, what does each watch?
**A:** Azure Monitor = YOUR workload (metrics/logs/alerts). Service Health = AZURE platform issues affecting your subs (personalized). Azure Status = public global Azure status page.

**Q:** Where is the public Azure status page?
**A:** status.azure.com (no login required).

**Q:** What's the query language used in Azure Monitor's Log Analytics?
**A:** KQL (Kusto Query Language).

**Q:** What is Application Insights?
**A:** Application Performance Monitoring (APM) for web apps, part of Azure Monitor.

**Q:** The 5 pillars of Azure Advisor?
**A:** Cost, Security, Performance, Reliability, Operational Excellence.

**Q:** Does Azure Advisor automatically take action on its recommendations?
**A:** No, Advisor is read-only recommendations. You implement them.

**Q:** What is Azure Arc used for?
**A:** Extending Azure management (Policy, Defender, Monitor) to non-Azure resources (on-prem, AWS, GCP, Kubernetes anywhere).

**Q:** Azure Migrate vs Azure Site Recovery, when each?
**A:** Azure Migrate = discovery + assessment + migration hub for servers/DBs/web apps. Azure Site Recovery = replication-based DR + VM migration.

**Q:** What is Azure Data Box?
**A:** Physical appliance for shipping TB–PB of data offline to Microsoft for ingestion.

**Q:** Where do you download Microsoft's audit reports (ISO, SOC, HIPAA)?
**A:** Service Trust Portal.

**Q:** What does Compliance Manager do?
**A:** Tracks your organization's compliance with frameworks (ISO, NIST, HIPAA, GDPR, etc.).

---

## 🎯 SECTION 7: EXAM-DAY ESSENTIALS

**Q:** What's the AZ-900 pass mark?
**A:** 700 out of 1000 (≈ 70%).

**Q:** AZ-900 time and question count?
**A:** 45 minutes; 40–60 questions (typically ~45).

**Q:** "Microsoft Entra ID" on the exam means what?
**A:** It's the same as "Azure AD", Microsoft renamed it in 2023.

**Q:** Top mistake: confusing RBAC vs Policy vs Lock. Quick rule?
**A:** RBAC = who can do what. Policy = what resources can exist / how configured. Lock = stop deletion or modification for everyone.

**Q:** Top mistake: composite SLA. Quick rule?
**A:** Multiply dependent service SLAs. More services = LOWER composite SLA.

**Q:** Top mistake: ingress vs egress. Quick rule?
**A:** Ingress is free. Egress is billed.

**Q:** Top mistake: Defender for Cloud vs Sentinel. Quick rule?
**A:** Defender = posture + Secure Score + workload protection. Sentinel = SIEM/SOAR across many sources.

**Q:** Top mistake: VPN Gateway vs ExpressRoute. Quick rule?
**A:** VPN = over public internet (encrypted). ExpressRoute = private dedicated circuit (not over internet).

**Q:** Top mistake: choosing storage redundancy. Quick rule?
**A:** LRS = datacenter, ZRS = AZs in region, GRS = paired region, GZRS = both AZs + paired region (best HA + DR).

**Q:** Top mistake: thinking Budgets auto-stop resources. Truth?
**A:** Budgets only ALERT. They don't stop anything by themselves.

---
