<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(234,88,12,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #fde6d8;color:#1f2937}
.fc-app *{box-sizing:border-box}
.fc-controls{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-bottom:.85rem}
.fc-controls-left,.fc-controls-right{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}
.fc-select,.fc-btn{font-family:inherit;font-size:.9rem;padding:.5rem .85rem;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#1f2937;cursor:pointer;transition:all .15s ease;line-height:1.2}
.fc-select:hover,.fc-btn:hover{border-color:#ea580c;color:#ea580c}
.fc-btn.fc-primary{background:linear-gradient(135deg,#ea580c,#dc2626);color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-primary:hover{filter:brightness(1.08);color:#fff;border-color:transparent;box-shadow:0 4px 14px rgba(234,88,12,.35)}
.fc-btn.fc-success{background:#10b981;color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-success:hover{background:#059669;color:#fff;border-color:transparent}
.fc-btn.fc-danger{background:#fff;color:#dc2626;border-color:#fecaca;font-weight:600}
.fc-btn.fc-danger:hover{background:#dc2626;color:#fff;border-color:#dc2626}
.fc-btn.fc-ghost{background:#f3f4f6;border-color:#e5e7eb;font-size:.82rem;color:#6b7280}
.fc-btn.fc-ghost:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca}
.fc-counter{font-size:.95rem;color:#4b5563;font-weight:600;font-variant-numeric:tabular-nums}
.fc-progress{height:8px;background:#fde6d8;border-radius:99px;overflow:hidden;margin-bottom:1rem}
.fc-progress-bar{height:100%;background:linear-gradient(90deg,#ea580c,#dc2626);border-radius:99px;width:0%;transition:width .3s ease}
.fc-card-wrap{perspective:1400px;margin-bottom:1rem}
.fc-card{position:relative;width:100%;min-height:240px;cursor:pointer;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.fc-card.fc-flipped{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:1px solid #fde6d8;box-shadow:0 4px 18px rgba(234,88,12,.12)}
.fc-front{background:linear-gradient(135deg,#fff7ed 0%,#fef2f2 100%)}
.fc-back{background:linear-gradient(135deg,#ea580c,#dc2626);color:#fff;border-color:transparent;transform:rotateY(180deg)}
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
  var STORAGE_KEY = 'fc-progress-pmp';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null;
    var sourceEls = [];
    var node;
    while((node = walker.nextNode())){
      if(node.tagName === 'H2'){
        var h2text = (node.textContent || '').trim();
        if(h2text){
          currentSection = h2text;
          if(!seen[h2text]){ seen[h2text] = true; sections.push(h2text); }
          sourceEls.push(node);
        }
        pendingQ = null;
        continue;
      }
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
        var qBody = fullText.replace(/^Q:\s*/i, '').trim();
        pendingQ = { section: currentSection, q: qBody };
        sourceEls.push(node);
      } else if(marker.indexOf('A:') === 0 && pendingQ){
        var aBody = fullText.replace(/^A:\s*/i, '').trim();
        pendingQ.a = aBody;
        cards.push(pendingQ);
        sourceEls.push(node);
        pendingQ = null;
      }
    }
    if(cards.length === 0){
      document.getElementById('fc-question').textContent = 'No flashcards found. The source content is shown below.';
      return;
    }
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING) hr.classList.add('fc-source-hidden');
    });
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

    var sectionSel = document.getElementById('fc-section');
    sections.forEach(function(s){
      var opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sectionSel.appendChild(opt);
    });

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

# 🃏 PMP Flashcards (Master Set)

> **How to use:** Copy into Anki, Quizlet, or paper. Daily review until exam.

---

## 🏛️ FOUNDATIONS

**Q:** What is a project per PMI?
**A:** A temporary endeavor undertaken to create a unique product, service, or result.

**Q:** Name the 8 Performance Domains.
**A:** Stakeholders, Team, Development Approach & Life Cycle, Planning, Project Work, Delivery, Measurement, Uncertainty.

**Q:** PMI's 4 ethics values.
**A:** Responsibility, Respect, Fairness, Honesty.

**Q:** PMI Talent Triangle (refreshed).
**A:** Ways of Working, Power Skills, Business Acumen.

**Q:** EEFs vs OPAs?
**A:** EEFs = external/cultural (regulations, market). OPAs = internal artifacts (templates, lessons learned).

**Q:** 3 PMO types.
**A:** Supportive (low control), Controlling (medium), Directive (high).

---

## 👥 PEOPLE DOMAIN (42% of exam!)

**Q:** Tuckman's 5 stages.
**A:** Forming, Storming, Norming, Performing, Adjourning.

**Q:** Best default conflict resolution technique.
**A:** Confronting / Problem-solving (find win-win).

**Q:** 5 conflict techniques (best to worst typically).
**A:** Confronting, Collaborating, Compromising, Smoothing, Forcing, Withdrawing.

**Q:** Communication channels formula.
**A:** n(n-1)/2

**Q:** Goleman's 5 EQ components.
**A:** Self-awareness, Self-regulation, Motivation, Empathy, Social skills.

**Q:** Maslow's hierarchy (lowest to highest).
**A:** Physiological, Safety, Belonging, Esteem, Self-actualization.

**Q:** Herzberg's 2 factors.
**A:** Hygiene factors (avoid dissatisfaction) + Motivators (drive performance).

**Q:** Theory X vs Y.
**A:** X = people are lazy, need control. Y = people are self-motivated.

**Q:** McClelland's 3 needs.
**A:** Achievement, Affiliation, Power.

**Q:** % of PM time spent communicating.
**A:** ~90%.

**Q:** Stakeholder engagement levels.
**A:** Unaware, Resistant, Neutral, Supportive, Leading.

---

## ⚙️ PROCESS DOMAIN (50% of exam!)

**Q:** 5 Process Groups.
**A:** Initiating, Planning, Executing, Monitoring & Controlling, Closing.

**Q:** Who signs the Project Charter?
**A:** The Sponsor.

**Q:** Scope Baseline =
**A:** Scope Statement + WBS + WBS Dictionary.

**Q:** Critical Path =
**A:** The longest path through the network; tasks have zero float.

**Q:** Crashing vs Fast-tracking.
**A:** Crashing = add resources (more cost). Fast-track = parallel activities (more risk, no extra cost).

**Q:** PERT formula.
**A:** (O + 4M + P) / 6.

**Q:** Standard deviation in PERT.
**A:** (P - O) / 6.

**Q:** Contingency vs Management Reserve.
**A:** Contingency = known risks (in cost baseline). Management = unknown risks (sponsor controls, NOT in baseline).

**Q:** Estimation accuracy ranges.
**A:** ROM: -25% to +75%. Budgetary: -10% to +25%. Definitive: -5% to +10%.

**Q:** Change Control process steps.
**A:** Receive → Evaluate → CCB review → Approve/Reject → Update plan → Communicate.

**Q:** Performance Measurement Baseline (PMB) =
**A:** Scope + Schedule + Cost baselines (without management reserve).

---

## 📊 EVM (Earn These Points!)

**Q:** PV =
**A:** Planned Value (planned $ for work scheduled).

**Q:** EV =
**A:** Earned Value ($ value of work actually completed).

**Q:** AC =
**A:** Actual Cost (what's been spent).

**Q:** CV =
**A:** EV - AC. Positive = under budget.

**Q:** SV =
**A:** EV - PV. Positive = ahead of schedule.

**Q:** CPI =
**A:** EV / AC. >1 = under budget.

**Q:** SPI =
**A:** EV / PV. >1 = ahead of schedule.

**Q:** EAC default.
**A:** BAC / CPI.

**Q:** ETC =
**A:** EAC - AC.

**Q:** VAC =
**A:** BAC - EAC.

**Q:** TCPI to BAC =
**A:** (BAC - EV) / (BAC - AC).

---

## ⚠️ RISK

**Q:** 5 threat strategies.
**A:** Avoid, Transfer, Mitigate, Accept, Escalate.

**Q:** 5 opportunity strategies.
**A:** Exploit, Enhance, Share, Accept, Escalate.

**Q:** EMV =
**A:** Probability × Impact.

**Q:** Risk vs Issue.
**A:** Risk = uncertain (P<100%); Issue = currently happening (P=100%).

**Q:** Risk Appetite vs Tolerance vs Threshold.
**A:** Appetite = overall willingness; Tolerance = acceptable variation; Threshold = specific limit.

---

## ✅ QUALITY

**Q:** Quality vs Grade.
**A:** Quality = meets requirements (always desirable). Grade = features/level (low is OK).

**Q:** PDCA stands for.
**A:** Plan, Do, Check, Act (Deming).

**Q:** DMAIC stands for.
**A:** Define, Measure, Analyze, Improve, Control (Six Sigma).

**Q:** Fishbone diagram associated with.
**A:** Ishikawa (root cause analysis).

**Q:** Pareto Rule.
**A:** 80/20, 80% of problems from 20% of causes.

**Q:** Rule of 7 (control charts).
**A:** 7 consecutive points on one side of the mean = process out of control.

**Q:** Six Sigma defect rate goal.
**A:** <3.4 per million opportunities.

**Q:** Cost of Quality categories.
**A:** Conformance (Prevention + Appraisal) and Non-Conformance (Internal + External Failures).

---

## 🛒 PROCUREMENT

**Q:** 3 RFx types.
**A:** RFI (info), RFP (proposal), RFQ (price quote).

**Q:** Fixed-Price contract.
**A:** Vendor takes risk; for stable scope.

**Q:** Cost-Reimbursable contract.
**A:** Buyer takes risk; for uncertain scope.

**Q:** CPFF =
**A:** Cost Plus Fixed Fee.

**Q:** SOW types.
**A:** Performance, Functional, Design.

---

## 👥 STAKEHOLDERS

**Q:** Power-Interest Grid: high power, high interest =
**A:** Manage closely.

**Q:** Salience Model dimensions.
**A:** Power, Legitimacy, Urgency.

**Q:** Sponsor's role.
**A:** Funds project, approves charter, champions, removes top-level impediments, defines success.

---

## 🌐 BUSINESS ENVIRONMENT

**Q:** Higher = better metrics.
**A:** NPV, IRR, ROI, BCR (>1 profitable).

**Q:** Lower = better.
**A:** Payback Period.

**Q:** ADKAR =
**A:** Awareness, Desire, Knowledge, Ability, Reinforcement.

**Q:** Kotter's first step.
**A:** Create urgency.

**Q:** Lewin's 3 stages.
**A:** Unfreeze → Change → Refreeze.

---

## 🌈 AGILE & HYBRID

**Q:** Kanban core practices.
**A:** Visualize, Limit WIP, Manage flow, Explicit policies, Feedback loops, Improve.

**Q:** 8 wastes (TIM-WOODS).
**A:** Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills.

**Q:** XP key practices.
**A:** Pair programming, TDD, CI, Refactoring, Small releases.

**Q:** Cycle time vs Lead time.
**A:** Cycle = start to done. Lead = request to delivery.

**Q:** Predictive triangle vs Agile triangle.
**A:** Predictive: scope fixed, time/cost flex. Agile: time/cost fixed, scope flexes.

---

## 🎯 PMP MINDSET (CRITICAL!)

**Q:** PMP-2021 default leadership style.
**A:** Servant leader.

**Q:** When tempted to "escalate to sponsor"...
**A:** Try team-level resolution FIRST.

**Q:** When tempted to "submit change request"...
**A:** Analyze impact first.

**Q:** When tempted to "tell the team"...
**A:** Coach with questions.

**Q:** Most-correct phrases.
**A:** "Talk to the team", "Coach", "Facilitate", "Empower", "Communicate".

**Q:** Most-wrong phrases.
**A:** "Escalate first", "Reject change", "Tell the team to", "Stick to the plan".

---

## 🎯 LAST-MINUTE ESSENTIALS

**Q:** PMP exam length.
**A:** 230 minutes, 180 questions.

**Q:** PMP exam breaks.
**A:** Two 10-minute breaks.

**Q:** PMP domains and weights.
**A:** People (42%), Process (50%), Business Environment (8%).

**Q:** Predictive vs Agile vs Hybrid mix.
**A:** ~50% predictive, ~50% agile/hybrid.

---

## 📝 STUDY TIPS

1. Make Anki cards from these
2. Drill daily 15 min
3. Add cards from your wrong quiz answers
4. Mix sections, don't review one at a time
5. Test fairly, guessed = wrong

You got this! 🚀
