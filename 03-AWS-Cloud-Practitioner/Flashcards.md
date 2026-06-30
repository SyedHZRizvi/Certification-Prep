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
  var STORAGE_KEY = 'fc-progress-aws-clf';
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

# 🃏 AWS Cloud Practitioner Master Flashcards

> **How to use:** Use the interactive widget above (it auto-generates cards from the Q/A pairs below). The dropdown lets you focus on one section. "Got it" marks the card known; "Try again" keeps it unknown. Progress saves in your browser. Aim for daily review until exam day.

---

## ☁️ SECTION 1: CLOUD FUNDAMENTALS

**Q:** What is AWS's official definition of cloud computing?
**A:** The on-demand delivery of IT resources over the internet with pay-as-you-go pricing.

**Q:** Name the 6 benefits of cloud computing per AWS.
**A:** (1) Trade CapEx for variable expense, (2) economies of scale, (3) stop guessing capacity, (4) increase speed & agility, (5) stop running data centers, (6) go global in minutes.

**Q:** What's the difference between a Region and an Availability Zone?
**A:** A Region is a geographic area (e.g., us-east-1). An AZ is one or more isolated data centers within a Region. A Region has 3+ AZs.

**Q:** What's an AWS Edge Location used for?
**A:** Caching content close to end-users for CloudFront and Route 53 (400+ globally). Edge Locations do NOT run EC2.

**Q:** Compare IaaS, PaaS, and SaaS.
**A:** IaaS = you control OS/apps/data (e.g., EC2). PaaS = AWS controls everything below the runtime; you just deploy code (e.g., Elastic Beanstalk). SaaS = AWS provides the whole app (e.g., Amazon WorkMail).

**Q:** What's the difference between public, private, and hybrid cloud?
**A:** Public = all in AWS. Private = your own DC (or GovCloud). Hybrid = on-prem + public cloud connected (e.g., Outposts, Direct Connect).

**Q:** What is AWS Outposts?
**A:** Physical AWS hardware racks installed in YOUR data center, hybrid deployment with the same AWS APIs.

**Q:** What is AWS Wavelength?
**A:** AWS compute embedded INSIDE 5G carrier networks for single-digit-millisecond mobile latency.

**Q:** What is AWS Local Zones?
**A:** Extensions of an AWS Region close to large metropolitan areas (LA, Phoenix, Boston) for low-latency apps.

**Q:** What is AWS GovCloud?
**A:** Isolated AWS Regions for US government workloads, supports FedRAMP High and ITAR. Requires a separate AWS account / approval.

**Q:** What are the 3 types of AWS Free Tier?
**A:** (1) 12-Months Free, (2) Always Free (forever within limits), (3) Trials (30–60 days).

**Q:** How do you achieve high availability inside a single Region?
**A:** Deploy across multiple Availability Zones.

**Q:** What's the difference between scalability and elasticity?
**A:** Scalability = capacity to handle growth (architectural). Elasticity = automatic scaling up/down with demand (dynamic).

**Q:** Fault tolerance vs high availability, what's the difference?
**A:** HA = system recovers quickly from failure. Fault tolerance = system continues correctly *while* components fail (stronger).

---

## 🖥️ SECTION 2: COMPUTE

**Q:** What are the 5 EC2 instance families?
**A:** General (T/M), Compute (C), Memory (R/X/Z), Storage (I/D/H), Accelerated (P/G/Inf/Trn).

**Q:** Name the 4 main EC2 pricing models.
**A:** On-Demand, Reserved Instances (1/3-yr), Savings Plans (flexible 1/3-yr), Spot (up to 90% off, can be reclaimed).

**Q:** What's the difference between Reserved Instances and Savings Plans?
**A:** RIs commit to a specific instance family / Region. Savings Plans commit by $/hour and are more flexible across families, Regions, and even Fargate/Lambda.

**Q:** When are Spot Instances appropriate?
**A:** Fault-tolerant batch workloads (CI, big data, transcoding) that can tolerate a 2-minute reclaim notice. Never for stateful production DBs.

**Q:** What's the max execution time for an AWS Lambda function?
**A:** 15 minutes (hard limit).

**Q:** Does a stopped EC2 instance still incur charges?
**A:** Yes, for attached EBS volumes. Compute charges stop. Terminate to fully stop all charges.

**Q:** What's the difference between ECS, EKS, and Fargate?
**A:** ECS = AWS-native container orchestrator. EKS = managed Kubernetes. Fargate = serverless launch type for ECS/EKS (no EC2 hosts to manage).

**Q:** What is Amazon ECR?
**A:** Elastic Container Registry, managed Docker image registry for storing container images.

**Q:** What is AWS Elastic Beanstalk?
**A:** PaaS where you upload code and AWS handles EC2, load balancing, scaling, and monitoring. The Beanstalk service is free, you only pay for the underlying resources.

**Q:** What is AWS Lightsail?
**A:** Bundled VPS with predictable monthly billing, great for simple apps like WordPress.

**Q:** What is AWS Batch?
**A:** Managed batch job runner. Queues jobs and provisions optimal EC2/Fargate (often Spot) to run them.

**Q:** What does Auto Scaling Group (ASG) + ELB across multiple AZs give you?
**A:** Elastic, fault-tolerant compute that auto-scales with demand and survives AZ failures.

---

## 💾 SECTION 3: STORAGE

**Q:** Name the 3 storage paradigms and an AWS service for each.
**A:** Block (EBS), File (EFS, FSx), Object (S3, Glacier).

**Q:** What's the maximum size of a single S3 object?
**A:** 5 TB. Single PUT max is 5 GB; above that requires multipart upload.

**Q:** What's S3 Standard's durability?
**A:** 11 nines (99.999999999%). Availability is 99.99%.

**Q:** When would you pick S3 One Zone-IA over Standard-IA?
**A:** When the data is easily recreatable and you want ~20% cost savings, accepting that loss of one AZ would destroy the data.

**Q:** What's S3 Glacier Deep Archive's typical retrieval time?
**A:** 12 to 48 hours. It's the cheapest tier, with 180-day minimum storage.

**Q:** Compare EBS, EFS, and Instance Store.
**A:** EBS = persistent block storage, one EC2 at a time, AZ-scoped. EFS = managed NFS shared by many Linux EC2. Instance Store = ephemeral block storage on the host, lost on stop/terminate.

**Q:** How do you move an EBS volume to a different AZ?
**A:** Create a snapshot (stored in S3) and restore it as a new EBS volume in the target AZ.

**Q:** What's FSx for Windows File Server used for?
**A:** SMB-based file shares with Active Directory integration for Windows workloads.

**Q:** What's FSx for Lustre used for?
**A:** High-performance parallel POSIX file systems for HPC and ML training, with S3 integration.

**Q:** What are the 4 AWS Storage Gateway types?
**A:** S3 File Gateway (NFS/SMB→S3), FSx File Gateway (SMB→FSx Windows), Volume Gateway (iSCSI→S3-backed EBS), Tape Gateway (VTL→S3/Glacier).

**Q:** Compare Snowcone, Snowball Edge, and Snowmobile.
**A:** Snowcone = 8 TB ruggedized backpack. Snowball Edge = 80 TB (storage) or 42 TB + compute. Snowmobile = 100 PB truck (being phased out).

**Q:** Is S3 default Block Public Access on or off for new buckets?
**A:** ON since 2023. You must explicitly disable it to make a bucket public.

**Q:** How do you replicate an S3 bucket to another Region?
**A:** Enable Cross-Region Replication (CRR). Versioning must be on for both source and destination buckets.

---

## 🌐 SECTION 4: NETWORKING & CDN

**Q:** Compare Security Groups vs NACLs.
**A:** SG = stateful, instance-level, ALLOW-only. NACL = stateless, subnet-level, ALLOW + DENY.

**Q:** How do you block one specific IP from reaching all instances in a subnet?
**A:** Use a NACL DENY rule (Security Groups can't deny).

**Q:** What's the purpose of a NAT Gateway?
**A:** Allows instances in a private subnet to make outbound internet calls (for updates, API calls) without being reachable from the internet. NAT Gateway is per-AZ and costs $$.

**Q:** Name 5 of the 7 Route 53 routing policies.
**A:** Simple, Weighted, Latency-based, Failover, Geolocation, Geoproximity, Multivalue Answer.

**Q:** Which Route 53 routing policy is best for GDPR data sovereignty?
**A:** Geolocation routing.

**Q:** Which Route 53 routing policy is best for active-passive disaster recovery?
**A:** Failover routing.

**Q:** Is AWS Direct Connect encrypted by default?
**A:** No. Direct Connect is private dedicated fiber but not encrypted at Layer 3. Pair with a VPN over it for encryption.

**Q:** Compare ALB, NLB, and GWLB.
**A:** ALB = Layer 7 HTTP (path/host routing). NLB = Layer 4 TCP/UDP (ultra-low latency, static IPs). GWLB = Layer 3 for inserting 3rd-party firewalls/IDS.

**Q:** What's the difference between CloudFront and Global Accelerator?
**A:** CloudFront caches HTTP content at the edge. Global Accelerator gives you 2 static anycast IPs and routes any TCP/UDP traffic over the AWS backbone.

**Q:** What is a VPC Gateway Endpoint used for?
**A:** Private access to S3 and DynamoDB from within a VPC, no internet traversal. Free; uses route tables.

**Q:** What is AWS PrivateLink (Interface Endpoint)?
**A:** Private access (via ENI with private IP) to most AWS services and partner services without using the internet.

**Q:** Is VPC Peering transitive?
**A:** No. A↔B and B↔C does NOT mean A↔C. Use Transit Gateway for multi-VPC connectivity.

**Q:** What is AWS Transit Gateway?
**A:** A hub-and-spoke service that connects many VPCs (and on-prem via VPN/DX) through a single hub.

---

## 🗄️ SECTION 5: DATABASES

**Q:** Compare RDS Multi-AZ and Read Replicas.
**A:** Multi-AZ = synchronous standby in another AZ for HA + auto-failover (not for reads). Read Replicas = asynchronous copies you can read from to scale reads.

**Q:** What's special about Amazon Aurora's storage?
**A:** 6 copies of data automatically replicated across 3 AZs. Up to 128 TB. 5x throughput of MySQL, 3x of PostgreSQL.

**Q:** When would you use Aurora Serverless?
**A:** For spiky, unpredictable, or intermittent relational workloads. Auto-scales capacity per-second.

**Q:** What is Amazon DynamoDB?
**A:** A serverless, fully managed key-value/document NoSQL database with single-digit millisecond latency at any scale.

**Q:** What is DAX?
**A:** DynamoDB Accelerator, an in-memory cache providing microsecond reads for DynamoDB.

**Q:** What is Amazon ElastiCache?
**A:** Managed Redis or Memcached for sub-millisecond in-memory caching.

**Q:** Memcached vs Redis in ElastiCache?
**A:** Memcached = simple, multi-threaded, no persistence, no replication. Redis = rich data types, persistence, replication, cluster mode.

**Q:** What is Amazon Redshift used for?
**A:** Petabyte-scale OLAP analytical data warehouse for BI workloads. Columnar, MPP architecture.

**Q:** What is Amazon DocumentDB?
**A:** Fully managed MongoDB-API-compatible document database.

**Q:** What is Amazon Neptune?
**A:** Fully managed graph database for relationship-heavy queries (Gremlin, SPARQL, openCypher).

**Q:** What is Amazon Athena?
**A:** Serverless SQL query engine that runs queries directly over data in S3 (no loading required). Pay per query.

**Q:** What's the role of AWS DMS + SCT?
**A:** DMS migrates databases with continuous replication. SCT converts schemas between heterogeneous engines (e.g., Oracle → Aurora PostgreSQL).

**Q:** Which AWS service is for time-series data (IoT metrics)?
**A:** Amazon Timestream.

**Q:** What is Amazon QLDB?
**A:** Quantum Ledger Database, a centralized, immutable, cryptographically verifiable ledger for audit/supply chain. (Not blockchain.)

---

## 🔐 SECTION 6: SECURITY, IAM & COMPLIANCE

**Q:** State the AWS Shared Responsibility Model in one sentence.
**A:** AWS is responsible for security OF the cloud (data centers, hardware, virtualization). The customer is responsible for security IN the cloud (data, IAM, OS patches on IaaS, configuration).

**Q:** Who patches the guest OS on an EC2 instance?
**A:** The customer. AWS handles the hypervisor/hardware below.

**Q:** Who patches the OS underlying RDS, Lambda, or Fargate?
**A:** AWS, these are managed services (PaaS / FaaS).

**Q:** How are IAM Users, Groups, Roles, and Policies different?
**A:** User = long-lived identity. Group = bucket of users. Role = temporary credentials assumed by services or users. Policy = JSON document defining permissions.

**Q:** Why use IAM Roles instead of access keys on EC2?
**A:** Roles deliver temporary credentials via the instance metadata service, no long-lived keys to leak or rotate.

**Q:** In IAM policy evaluation, what wins: Allow or Deny?
**A:** Explicit Deny always wins over any Allow.

**Q:** Should you use the root user for daily admin tasks?
**A:** No, protect root with MFA and use it only for a small set of account-level tasks (e.g., closing the account, billing). Use IAM Admin users / Identity Center for daily work.

**Q:** What does AWS Organizations + SCPs do?
**A:** Manages multiple AWS accounts as one org, with consolidated billing, OUs, and Service Control Policies as guardrails on what accounts/OUs are ALLOWED to do.

**Q:** Compare KMS and CloudHSM.
**A:** KMS = managed encryption keys with shared HSMs (good for most). CloudHSM = dedicated, single-tenant FIPS 140-2 Level 3 HSM for strict compliance needs.

**Q:** What does AWS Secrets Manager give you that Parameter Store doesn't?
**A:** Automatic secret rotation (e.g., RDS DB passwords). Parameter Store has a free tier but no auto-rotation.

**Q:** What does AWS Certificate Manager (ACM) provide?
**A:** Free public TLS/SSL certificates for use with AWS-integrated services (ELB, CloudFront, API Gateway).

**Q:** Compare AWS WAF and AWS Shield.
**A:** WAF = HTTP-layer filtering (SQLi, XSS, geo, rate-limit). Shield = DDoS protection (Standard free / Advanced paid).

**Q:** What does AWS Shield Advanced offer beyond Shield Standard?
**A:** 24/7 access to the DDoS Response Team (DRT), enhanced attack diagnostics, and cost protection (refunds for scaling/data-transfer charges incurred during attacks). ~$3,000/month.

**Q:** What does GuardDuty do?
**A:** Intelligent threat detection, analyzes CloudTrail, VPC Flow Logs, DNS logs, and EKS audit logs for anomalies (e.g., crypto-mining, port scans).

**Q:** What does Amazon Macie do?
**A:** Discovers and classifies sensitive data (PII, credit cards, SSNs) inside S3 buckets using machine learning.

**Q:** What does Amazon Inspector do?
**A:** Continuously scans EC2 instances, ECR container images, and Lambda functions for software vulnerabilities (CVEs) and unintended network exposure.

**Q:** Where do you download AWS compliance reports like SOC 2, ISO 27001, PCI DSS?
**A:** AWS Artifact (self-service portal, free).

**Q:** What is AWS Security Hub?
**A:** A central dashboard that aggregates security findings from GuardDuty, Inspector, Macie, partner tools, and runs compliance benchmarks (CIS, PCI).

**Q:** What is AWS Detective?
**A:** A tool that uses ML and graph analytics to help you investigate the root cause of security events flagged by GuardDuty.

**Q:** What is AWS IAM Identity Center?
**A:** Federated single sign-on across multiple AWS accounts and 3rd-party SaaS apps (formerly AWS SSO). Replaces creating individual IAM users.

**Q:** Encryption in transit vs at rest?
**A:** In transit = encrypted on the wire (TLS/SSL). At rest = encrypted on disk (KMS, SSE-S3, SSE-KMS).

---

## 📊 SECTION 7: MANAGEMENT, MONITORING & PRICING

**Q:** Compare CloudWatch, CloudTrail, and AWS Config.
**A:** CloudWatch = metrics + logs + alarms. CloudTrail = audit log of every AWS API call. Config = tracks resource configurations over time and evaluates them against compliance rules.

**Q:** What is AWS Systems Manager Session Manager?
**A:** Browser-based shell access to EC2 instances without SSH keys, bastion hosts, or open port 22. Auditable via CloudTrail.

**Q:** Name the 5 categories that AWS Trusted Advisor checks.
**A:** Cost Optimization, Performance, Security, Fault Tolerance, Service Limits.

**Q:** Which Trusted Advisor checks are available on Basic / Developer Support?
**A:** A limited set — all Service Limits checks plus select Security and Fault Tolerance checks. Business and Enterprise unlock ALL checks.

**Q:** What is AWS Compute Optimizer?
**A:** ML-based right-sizing recommendations for EC2, EBS, Lambda, and Auto Scaling Groups.

**Q:** Compare AWS Pricing Calculator and Cost Explorer.
**A:** Pricing Calculator = estimate cost BEFORE deploying. Cost Explorer = visualize past spending and forecast future costs.

**Q:** What's the most granular AWS billing data export?
**A:** AWS Cost & Usage Report (CUR), delivered to S3 in CSV/Parquet.

**Q:** Do AWS Budgets prevent or alert?
**A:** Alert, Budgets send notifications when spend/usage crosses thresholds. They do NOT block spending automatically.

**Q:** What's the data transfer rule of thumb?
**A:** Data IN to AWS is generally FREE. Data OUT to the internet and cross-AZ/Region transfer costs money.

**Q:** Name the 5 AWS Support plans.
**A:** Basic (free), Developer, Business, Enterprise On-Ramp, Enterprise.

**Q:** What's the Business Support response time for production-down issues?
**A:** Less than 1 hour, 24/7.

**Q:** Which Support plan(s) include a Technical Account Manager (TAM)?
**A:** Enterprise On-Ramp (pool of TAMs) and Enterprise (dedicated TAM).

**Q:** What is AWS Health Dashboard (Your Account Health / Personal Health Dashboard)?
**A:** A view of events affecting YOUR specific resources (e.g., EC2 retirement notices, scheduled maintenance).

**Q:** Which AWS services are FREE, you only pay for resources they create?
**A:** IAM, VPC, CloudFormation, Elastic Beanstalk, AWS Organizations, Auto Scaling.

**Q:** What is AWS Cost Allocation Tags?
**A:** Resource tags (key/value) activated in the Billing console to categorize spending by team/project/environment in Cost Explorer and the CUR.

---

## 🏛️ SECTION 8: WELL-ARCHITECTED & MIGRATION

**Q:** Name the 6 pillars of the AWS Well-Architected Framework.
**A:** Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.

**Q:** When was the Sustainability pillar added?
**A:** 2021 (at re:Invent). Bringing the total to 6 pillars (was previously 5).

**Q:** What is the AWS Well-Architected Tool?
**A:** A FREE self-assessment tool that walks you through evaluating your workload against the 6 pillars and gives you a remediation roadmap.

**Q:** Name the 6 Rs of cloud migration.
**A:** Rehost, Replatform, Repurchase, Refactor, Retire, Retain.

**Q:** What's a Rehost migration?
**A:** Lift-and-shift, move a VM to EC2 with no code changes. Lowest effort.

**Q:** What's a Replatform migration?
**A:** Lift, tinker, and shift, make minor cloud optimizations (e.g., move a self-managed MySQL on EC2 to Amazon RDS Aurora).

**Q:** What's a Repurchase migration?
**A:** Switch to a different product (e.g., on-prem CRM → Salesforce SaaS).

**Q:** What's a Refactor migration?
**A:** Re-architect using cloud-native services (e.g., monolith → Lambda + DynamoDB + API Gateway). Highest effort, highest value.

**Q:** What's a Retire migration strategy?
**A:** Decommission, you don't need this app anymore, shut it down.

**Q:** What's a Retain migration strategy?
**A:** Keep on-prem for now and revisit later (often due to compliance or low value).

**Q:** What is AWS Application Migration Service (MGN)?
**A:** AWS's lift-and-shift tool for migrating SERVERS to EC2. Replaces older SMS and CloudEndure Migration.

**Q:** What is AWS DataSync used for?
**A:** Bulk file transfer between on-prem (NFS/SMB/HDFS) and AWS storage (S3, EFS, FSx) with bandwidth control and scheduling.

**Q:** What is the AWS Cloud Adoption Framework (CAF)?
**A:** AWS's enterprise transformation framework, organized into 6 perspectives: Business, People, Governance, Platform, Security, Operations.

**Q:** Name the APN partner tiers (lowest to highest).
**A:** Select → Advanced → Premier.

**Q:** What is AWS Managed Services (AMS)?
**A:** A paid offering where AWS OPERATES your AWS account for you (Enterprise-tier).

**Q:** What's the next logical AWS certification after Cloud Practitioner?
**A:** Solutions Architect Associate (SAA-C03), the most popular next step.

---

## 📝 STUDY TIPS

1. Drill flashcards daily (10–20 minutes); don't just re-read
2. Take the Quizzes at the end of each module before moving on
3. The Shared Responsibility Model and Support Plans each appear 3+ times, over-learn them
4. Use the AWS Free Tier to *touch* the services (4 hours of clicking beats 4 hours of reading)
5. Take the Final Mock Exam the day before the real exam, not the day of

## ☁️ BEFORE THE EXAM

- Read the Cheat-Sheet for each module the night before
- Sleep 8 hours
- 65 questions in 90 minutes = ~80 seconds each, pace yourself
- "BEST", "MOST", "LEAST" change the answer, underline them
- Eliminate wrong answers first, then pick between the remaining 2
- Flag-and-move-on if stuck > 30 seconds
- Trust your first instinct
