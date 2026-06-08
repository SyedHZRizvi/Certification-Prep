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
  var STORAGE_KEY = 'fc-progress-aws-saa';
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

# 🃏 AWS Solutions Architect Associate Master Flashcards

> **How to use:** Click any card to flip. Mark "Got it" to skip in future sessions; "Try again" to keep it in rotation. Aim to clear the deck once before each practice exam.

---

## ☁️ SECTION 1: FOUNDATIONS & WELL-ARCHITECTED

**Q:** What is an AWS Availability Zone (AZ)?
**A:** One or more discrete data centers in a region with redundant power, networking, and connectivity. AZs are isolated from each other within a region.

**Q:** Name the 6 pillars of the Well-Architected Framework.
**A:** Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.

**Q:** Under the Shared Responsibility Model, who patches the OS on an EC2 instance?
**A:** The customer (EC2 is IaaS). For RDS, AWS patches the OS, RDS is managed.

**Q:** What does Multi-AZ NOT protect against?
**A:** A full regional outage. For that, you need multi-region replication.

**Q:** Difference between RPO and RTO?
**A:** RPO = max acceptable data loss (in time). RTO = max acceptable downtime.

**Q:** What is an AWS Outpost?
**A:** AWS-managed hardware (rack or server) physically installed in your data center for hybrid workloads.

**Q:** On AWS, data IN to the cloud costs how much?
**A:** Free. Data OUT to the internet is what costs (typically $0.05–$0.09/GB).

**Q:** What does "most cost-effective" mean on the SAA exam?
**A:** The cheapest option that still meets all stated requirements (SLA, security, performance).

**Q:** Which Well-Architected pillar is most directly improved by Multi-AZ on RDS?
**A:** Reliability.

---

## 🔐 SECTION 2: IAM & ORGANIZATIONS

**Q:** What's the difference between an IAM User and an IAM Role?
**A:** A User has long-term credentials and is typically for a person or external service. A Role has no long-term credentials and is assumed temporarily via STS, returning short-lived credentials.

**Q:** What's the best way for an EC2 instance to access S3?
**A:** Attach an IAM Role to the instance via an instance profile. Never bake long-term keys into AMIs.

**Q:** In IAM evaluation, who wins between an explicit Deny and an explicit Allow?
**A:** Explicit Deny always wins.

**Q:** What is a Service Control Policy (SCP)?
**A:** A guardrail at the Organizations level that LIMITS (does not grant) the maximum permissions for member accounts.

**Q:** What does ExternalId do in an IAM trust policy?
**A:** Prevents the "confused deputy" problem when a 3rd-party SaaS vendor accesses your AWS account. The vendor must present the agreed-upon ExternalId.

**Q:** Identity-based policy + Resource-based policy in same account: union or intersection?
**A:** Union, either allowing is sufficient (absent explicit Deny). Cross-account is intersection.

**Q:** What is the modern way to give humans SSO access to many AWS accounts?
**A:** AWS IAM Identity Center (formerly AWS SSO) with permission sets federated to the corporate IdP.

**Q:** How do you give a mobile app's end users temporary AWS credentials?
**A:** Amazon Cognito Identity Pools, issues temporary STS credentials.

**Q:** What is a permissions boundary?
**A:** A per-identity (user/role) cap on the MAXIMUM permissions that identity can ever have, regardless of identity policies attached.

---

## 💻 SECTION 3: EC2

**Q:** List the EC2 instance family letters and their use case.
**A:** T = burstable; M = general purpose; C = compute-optimized; R = memory-optimized; I/D/H = storage-optimized; G/P/Inf/Trn = GPU / accelerated.

**Q:** Order EC2 purchase options from highest to lowest discount.
**A:** Spot (up to 90%) > Reserved Instance Standard 3yr all-upfront (~72%) > Compute Savings Plan (~66%) > Convertible RI (~54%) > On-Demand (0%).

**Q:** When should you use Spot Instances?
**A:** Fault-tolerant batch workloads with checkpointing, ML training, big-data processing, CI/CD, stateless web tiers.

**Q:** What does a Compute Savings Plan cover?
**A:** Hourly compute spend across EC2 (any family, region, size, OS), Fargate, and Lambda, most flexible.

**Q:** Difference between ALB, NLB, and GWLB?
**A:** ALB = L7 HTTP/HTTPS (path/host routing). NLB = L4 TCP/UDP (static IPs, ultra-low latency). GWLB = inserts 3rd-party network appliances (firewalls/IDS) via GENEVE.

**Q:** What are the 3 EC2 placement group types?
**A:** Cluster (same rack, lowest latency, 1 AZ); Spread (separate hardware, max 7/AZ); Partition (logical racks, up to 7/AZ, for Cassandra, Kafka, HDFS).

**Q:** EFS vs EBS?
**A:** EFS is multi-AZ NFS for many concurrent EC2 instances. EBS is single-AZ block storage (mostly one instance at a time; io2 supports multi-attach same AZ).

**Q:** Does Auto Scaling Group load-balance traffic?
**A:** No. ASGs launch and terminate instances. The ELB load-balances. They pair.

**Q:** What does EC2 Hibernate do?
**A:** Saves RAM contents to the EBS root volume and powers off the instance. On restart, RAM is restored.

**Q:** What's the difference between Reserved Instances and Capacity Reservations?
**A:** RIs are a billing discount; Capacity Reservations guarantee capacity in an AZ but offer no discount. Pair both for discount + capacity.

---

## 🌐 SECTION 4: VPC & NETWORKING

**Q:** What makes a subnet "public" vs "private"?
**A:** Its route table: a subnet with route `0.0.0.0/0 → IGW` is public.

**Q:** Difference between Security Group and NACL?
**A:** SG = stateful, per-ENI, allow-only. NACL = stateless, per-subnet, allow + deny in numbered order.

**Q:** How do you allow private-subnet EC2 instances to reach S3 privately and FOR FREE?
**A:** Gateway VPC Endpoint for S3 (and DynamoDB). It's free and bypasses NAT.

**Q:** Is VPC peering transitive?
**A:** NO. If A↔B and B↔C exist, A still cannot reach C. Use a Transit Gateway for transitivity.

**Q:** When should you use a Transit Gateway?
**A:** When connecting 5+ VPCs (and on-prem) in a hub-and-spoke topology. Avoids the mesh-of-peerings nightmare.

**Q:** Direct Connect vs Site-to-Site VPN?
**A:** DX = private fiber, lowest latency, weeks to provision, NOT encrypted by default. VPN = IPSec over internet, minutes to set up.

**Q:** What's PrivateLink?
**A:** Lets you privately expose a single service (NLB-backed) to other VPCs or accounts via an Interface Endpoint, no VPC peering needed.

**Q:** How do you achieve highly available NAT?
**A:** One NAT Gateway per AZ, with each AZ's private subnets routing to their own local NAT GW.

**Q:** How can you block a specific malicious IP range from reaching a subnet?
**A:** NACL with an explicit deny rule. Security Groups cannot deny, only NACLs can.

**Q:** What's an Egress-Only Internet Gateway for?
**A:** Outbound-only IPv6 (the IPv6 analog of NAT for IPv4).

---

## 🪣 SECTION 5: S3

**Q:** S3 durability is designed for how many 9s?
**A:** 11 nines (99.999999999%).

**Q:** Maximum object size in S3?
**A:** 5 TB. Single PUT max is 5 GB; use Multipart Upload above that.

**Q:** Which S3 storage class is best for unknown / shifting access patterns?
**A:** S3 Intelligent-Tiering, auto-moves objects between tiers.

**Q:** Cheapest S3 storage class for archive accessed once a year with 12-hour retrieval OK?
**A:** S3 Glacier Deep Archive.

**Q:** What's S3 Object Lock Compliance mode?
**A:** WORM retention that NO ONE can override (not even root) until retention expires. Requires versioning enabled.

**Q:** Difference between SSE-S3, SSE-KMS, SSE-C?
**A:** SSE-S3 = AWS-managed keys. SSE-KMS = customer-managed KMS keys with CloudTrail audit. SSE-C = customer provides keys with each request.

**Q:** What's required to enable S3 Cross-Region Replication?
**A:** Versioning enabled on both source and destination buckets, plus an IAM role for replication.

**Q:** What does S3 Transfer Acceleration do?
**A:** Uses CloudFront edge locations to speed long-distance uploads to an S3 bucket.

**Q:** What's a CloudFront Origin Access Control (OAC)?
**A:** Modern way to restrict an S3 bucket so only a specific CloudFront distribution can access it, replaces OAI; supports SSE-KMS.

**Q:** Signed URL vs Signed Cookie in CloudFront?
**A:** Signed URL = time-limited access to ONE object. Signed Cookie = access to MANY objects for a user session.

**Q:** What does S3 Select do?
**A:** Server-side SQL on CSV/JSON/Parquet objects, retrieve only matching rows without downloading the whole object.

---

## 🗃️ SECTION 6: DATABASES

**Q:** Multi-AZ vs Read Replicas on RDS?
**A:** Multi-AZ = synchronous standby for HA (standby invisible, auto-failover). Read Replicas = asynchronous read-only copies for read scaling.

**Q:** What is Aurora Global Database?
**A:** Cross-region Aurora with <1 second replication to up to 5 secondary regions, supporting fast regional failover.

**Q:** When should you use Aurora Serverless v2?
**A:** Spiky, idle, or unpredictable relational workloads that benefit from fine-grained per-second auto-scaling.

**Q:** What is DAX?
**A:** DynamoDB Accelerator, an in-memory cache in front of DynamoDB delivering microsecond reads for cached items. Works only with DynamoDB.

**Q:** DynamoDB Global Tables provide what?
**A:** Multi-region, multi-active replication, writes accepted in any region replicate to others.

**Q:** ElastiCache Redis vs Memcached, when each?
**A:** Redis when you need persistence, replication, Multi-AZ failover, sorted sets, pub/sub. Memcached for simple multi-threaded ephemeral cache.

**Q:** What is Amazon Redshift designed for?
**A:** OLAP / data warehouse analytics on TB–PB datasets. NOT for OLTP.

**Q:** How does Redshift Spectrum work?
**A:** Lets Redshift query data directly in S3 (data lake) without loading it.

**Q:** Which AWS database is best for immutable cryptographically verifiable audit logs?
**A:** Amazon QLDB (Quantum Ledger Database).

**Q:** Which AWS database for IoT / time-series data?
**A:** Amazon Timestream.

**Q:** What's RDS Proxy used for?
**A:** Pooling connections in front of RDS, solves Lambda connection storms and reduces failover time.

---

## 🔌 SECTION 7: DECOUPLING & INTEGRATION

**Q:** SQS Standard vs FIFO?
**A:** Standard = best-effort order, at-least-once delivery, nearly unlimited throughput. FIFO = strict order + exactly-once, lower throughput (300/s default, up to 70k with high-throughput mode).

**Q:** What is the SNS-to-SQS fan-out pattern?
**A:** One SNS topic → multiple SQS subscriptions. Each subscriber gets its own copy of every message.

**Q:** EventBridge vs SNS, when each?
**A:** EventBridge for content-based rules, SaaS partner events, schema registry, archive+replay. SNS for high-throughput fan-out at lower per-message cost.

**Q:** What is an SQS Dead Letter Queue (DLQ)?
**A:** A queue where messages that fail processing N times land for investigation.

**Q:** Kinesis Data Streams vs Firehose?
**A:** Streams = ms latency, replayable, multiple consumers (you manage shards). Firehose = ~60s, managed, lands directly in S3/Redshift/OS/Splunk.

**Q:** Step Functions Standard vs Express?
**A:** Standard = up to 1 year, audit-heavy, exactly-once. Express = up to 5 min, high-volume short workflows.

**Q:** When would you use Amazon MQ?
**A:** Lift-and-shift of existing apps using AMQP/JMS/MQTT/STOMP protocols (RabbitMQ or ActiveMQ engines).

**Q:** What does SQS visibility timeout do?
**A:** Hides a message from other consumers after it's been received, for N seconds. If the consumer doesn't delete in time, the message returns to the queue.

---

## 🌎 SECTION 8: EDGE, CDN & ROUTING

**Q:** CloudFront vs Global Accelerator?
**A:** CloudFront CACHES content at the edge for HTTP(S). Global Accelerator only ROUTES TCP/UDP traffic via AWS backbone to the nearest healthy regional endpoint with 2 static IPs.

**Q:** Lambda@Edge vs CloudFront Functions?
**A:** CloudFront Functions = JS only, μs runtime, very cheap, limited (headers, URL rewrites). Lambda@Edge = full Lambda, ms latency, can call external services and do complex logic.

**Q:** Name the 8 Route 53 routing policies.
**A:** Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multivalue Answer, IP-based.

**Q:** Which Route 53 routing policy for compliance routing by country?
**A:** Geolocation routing.

**Q:** Which Route 53 routing policy for active-passive DR?
**A:** Failover routing with health checks.

**Q:** What does AWS WAF protect against?
**A:** Layer-7 web attacks: SQL injection, XSS, bots, rate-based attacks. Attaches to CloudFront, ALB, API Gateway, AppSync.

**Q:** AWS Shield Standard cost?
**A:** Free for all AWS customers. Shield Advanced is paid (~$3,000/month + bandwidth).

**Q:** What is AWS Firewall Manager?
**A:** Centrally manages WAF, Shield Advanced, security groups, and Network Firewall policies across many accounts in an Organization.

---

## 📊 SECTION 9: MONITORING & COST OPTIMIZATION

**Q:** CloudTrail vs CloudWatch Logs vs AWS Config?
**A:** CloudTrail = "who made this API call?" (audit). CloudWatch Logs = application logs. Config = resource configuration over time + compliance rules.

**Q:** Is EC2 memory a default CloudWatch metric?
**A:** No, install the CloudWatch Agent to publish memory and disk metrics.

**Q:** What does AWS Compute Optimizer do?
**A:** ML-based rightsizing recommendations for EC2, ASGs, EBS, Lambda, and ECS Fargate. Free.

**Q:** GuardDuty data sources?
**A:** CloudTrail events, VPC Flow Logs, DNS logs, analyzed by ML. No agents required.

**Q:** What does Amazon Macie do?
**A:** Discovers and protects sensitive data (PII like SSNs, credit cards) in S3 buckets.

**Q:** What does Amazon Inspector do?
**A:** Vulnerability scanning for EC2 instances, Lambda functions, and ECR container images.

**Q:** AWS Security Hub purpose?
**A:** Aggregates security findings from GuardDuty, Macie, Inspector, and partner tools into a single pane of glass.

**Q:** How do you enable per-team cost reporting in Cost Explorer?
**A:** Apply cost allocation tags AND activate them in the Billing console.

**Q:** Budgets vs Cost Anomaly Detection?
**A:** Budgets = threshold alerts you set (forecasted/actual spend or usage). Cost Anomaly Detection = ML-based detection of unusual spend patterns.

**Q:** What is AWS Trusted Advisor?
**A:** Best-practice checks across 5 categories: cost, security, performance, fault tolerance, service limits. Full set requires Business/Enterprise support.

---

## ⛑️ SECTION 10: DR, MIGRATION & HYBRID

**Q:** Name the 4 DR strategies from cheapest to most expensive.
**A:** Backup & Restore → Pilot Light → Warm Standby → Multi-Site Active-Active.

**Q:** Pilot Light pattern in AWS?
**A:** Core data already replicating (e.g., Aurora reader); application compute is minimal or off, scale up on failover.

**Q:** Warm Standby pattern in AWS?
**A:** A scaled-down but functional copy of production running in the DR region, scale up to full size on failover.

**Q:** When to use Snowball Edge vs DataSync?
**A:** Snowball = offline (ship physical device) when network is too slow for the volume. DataSync = online file/object sync over network.

**Q:** Difference between DMS and SCT?
**A:** DMS = migrates database data (with optional CDC). SCT = Schema Conversion Tool, converts schemas between different engines (e.g., Oracle → PostgreSQL).

**Q:** What does AWS Application Migration Service (MGN) do?
**A:** Lift-and-shift on-prem or other-cloud VMs to EC2 with block-level continuous replication and minimal downtime cutover.

**Q:** Storage Gateway variants?
**A:** S3 File Gateway (NFS/SMB → S3); FSx File Gateway (SMB → FSx); Volume Gateway (iSCSI block, Cached or Stored mode); Tape Gateway (VTL replacing tape libraries).

**Q:** What is AWS Outposts?
**A:** AWS-managed hardware racks/servers installed in YOUR data center, providing AWS services on-prem.

**Q:** Local Zones vs Wavelength?
**A:** Local Zones = AWS infrastructure in major metros for sub-10ms latency to that metro. Wavelength = AWS infrastructure inside 5G telco networks for ultra-low-latency mobile applications.

**Q:** Why use AWS Backup?
**A:** Centralized backup policy and management across many AWS services (EBS, RDS, EFS, DynamoDB, FSx, Storage Gateway, EC2 AMI, S3, etc.) including cross-region/account copy for ransomware protection.

---

## 🎯 STUDY TIPS

1. Read each card front; try to answer aloud before flipping.
2. Mark "Got it" once you can answer confidently 3 sessions in a row.
3. Shuffle for the last week of study so you don't memorize order.
4. Filter by section to drill weak topics.
5. Reset progress when you start a new mock exam cycle.

---

## 📅 BEFORE THE EXAM

- ☑ Re-read every Cheat-Sheet (10 minutes total)
- ☑ Run through this entire deck once
- ☑ Score 80%+ on the Final Mock Exam
- ☑ Sleep, hydrate, breathe, you've got this. ☁️
