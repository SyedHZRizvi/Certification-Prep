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
  var STORAGE_KEY = 'fc-progress-scrum';
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

# 🃏 Scrum Master Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Copy into Anki, Quizlet, or paper flashcards. Aim for daily review until the real exam.

---

## 📜 SECTION 1: AGILE FOUNDATIONS

**Q:** When and where was the Agile Manifesto created?
**A:** February 2001, Snowbird, Utah, by 17 software developers.

**Q:** Recite the 4 Agile Manifesto values.
**A:** (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, (4) Responding to change over following a plan.

**Q:** What are the 3 pillars of empiricism?
**A:** Transparency, Inspection, Adaptation.

**Q:** What is "ScrumBut"?
**A:** Doing Scrum partially or skipping pieces, an anti-pattern.

**Q:** Per the 2020 Scrum Guide, Scrum is founded on:
**A:** Empiricism AND Lean Thinking.

---

## 🏗️ SECTION 2: SCRUM FRAMEWORK

**Q:** Is Scrum a methodology, process, or framework?
**A:** A framework (lightweight).

**Q:** Maximum Sprint length?
**A:** 1 month (4 weeks).

**Q:** Maximum Scrum Team size per 2020 Guide?
**A:** Typically 10 or fewer people.

**Q:** Recite the 5 Scrum values.
**A:** Focus, Commitment, Courage, Respect, Openness (FCCRO).

**Q:** Who can cancel a Sprint?
**A:** Only the Product Owner. (Rare.)

**Q:** Quality during a Sprint:
**A:** Does not decrease.

---

## 🎭 SECTION 3: ACCOUNTABILITIES

**Q:** What is the Product Owner accountable for?
**A:** Maximizing the value of the product.

**Q:** Who orders the Product Backlog?
**A:** The Product Owner.

**Q:** Who owns the Sprint Backlog?
**A:** The Developers.

**Q:** Who estimates work?
**A:** The Developers.

**Q:** Can the same person be PO and SM?
**A:** No, conflict of interest.

**Q:** Can multiple POs exist for one product?
**A:** No, one PO per product.

**Q:** The Scrum Master serves which 3 groups?
**A:** The Scrum Team, the Product Owner, and the larger organization.

**Q:** "Developers" in Scrum includes:
**A:** Anyone doing the work, coders, testers, designers, ops, etc.

**Q:** Per the 2020 Guide, "Roles" became:
**A:** Accountabilities.

**Q:** Per the 2020 Guide, "Development Team" became:
**A:** Developers.

---

## 🎬 SECTION 4: EVENTS

**Q:** Name the 5 Scrum events.
**A:** Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.

**Q:** Sprint Planning timebox for a 4-week Sprint:
**A:** 8 hours.

**Q:** Daily Scrum timebox:
**A:** 15 minutes (every working day).

**Q:** Sprint Review timebox for a 4-week Sprint:
**A:** 4 hours.

**Q:** Sprint Retrospective timebox for a 4-week Sprint:
**A:** 3 hours.

**Q:** What 3 topics does Sprint Planning address?
**A:** Why (goal), What (PBIs), How (plan).

**Q:** Are the 3 questions in the Daily Scrum required?
**A:** No, not prescribed in the 2020 Guide.

**Q:** Sprint Review focuses on:
**A:** The product (Increment); adapt the Product Backlog.

**Q:** Sprint Retrospective focuses on:
**A:** The process (people, tools, DoD).

**Q:** Who attends the Retrospective?
**A:** The Scrum Team only, no stakeholders.

**Q:** Is Backlog Refinement a formal event?
**A:** No, it's an ongoing activity.

**Q:** Stakeholders attend which event?
**A:** Sprint Review (the only one).

---

## 📦 SECTION 5: ARTIFACTS & COMMITMENTS

**Q:** Match: Product Backlog → ?
**A:** Product Goal.

**Q:** Match: Sprint Backlog → ?
**A:** Sprint Goal.

**Q:** Match: Increment → ?
**A:** Definition of Done.

**Q:** What 3 things make up the Sprint Backlog?
**A:** Sprint Goal + Selected PBIs + Plan to deliver.

**Q:** Where does the Product Goal live?
**A:** In the Product Backlog.

**Q:** Multiple Increments per Sprint?
**A:** Allowed per the 2020 Scrum Guide.

**Q:** Does an Increment need to be released?
**A:** No, but it must be releasable.

**Q:** Who owns the Definition of Done?
**A:** The Developers (or the organization, if standardized).

---

## 📐 SECTION 6: DONE & ESTIMATION

**Q:** Definition of Ready, is it in the Scrum Guide?
**A:** No, it's an optional practice.

**Q:** Story points represent:
**A:** Relative complexity, effort, and uncertainty (NOT time).

**Q:** Velocity, is it in the Scrum Guide?
**A:** No, it's a useful planning tool.

**Q:** Can two teams' velocities be compared?
**A:** No, story points are team-relative.

**Q:** INVEST stands for:
**A:** Independent, Negotiable, Valuable, Estimable, Small, Testable.

**Q:** Burndown chart, required by Scrum?
**A:** No, optional transparency tool.

**Q:** DoD vs Acceptance Criteria, what's the difference?
**A:** DoD applies to all Increments (quality bar). AC applies to one PBI (functional bar).

---

## 🛡️ SECTION 7: SERVANT LEADERSHIP

**Q:** Per 2020 Guide, the Scrum Master is:
**A:** A true leader who serves.

**Q:** Name the 5 stances of a Scrum Master.
**A:** Servant Leader, Coach, Facilitator, Teacher, Change Agent.

**Q:** Coaching primarily uses:
**A:** Open-ended questions.

**Q:** Teaching primarily uses:
**A:** Direct instruction / explanation.

**Q:** When should the SM "tell" instead of "coach"?
**A:** When it's a Scrum Guide rule, safety/compliance, or true emergency.

---

## 🏗️ SECTION 8: SCALING

**Q:** Multiple teams on the same product share which 4 things?
**A:** One PO, one Product Backlog, one Product Goal, one Definition of Done.

**Q:** Nexus is best for what team count?
**A:** 3–9 Scrum Teams.

**Q:** Is SAFe in the Scrum Guide?
**A:** No.

**Q:** What does Nexus add?
**A:** Nexus Integration Team, Nexus Sprint Goal/Backlog, Nexus events.

**Q:** Feature teams vs component teams?
**A:** Feature teams own end-to-end value (good); component teams own one tech layer (anti-pattern).

**Q:** Is "Scrum of Scrums" in the Scrum Guide?
**A:** No, common practice but not formal.

---

## 🚨 SECTION 9: COMMON TRAPS

**Q:** Project Manager in Scrum?
**A:** Doesn't exist, there's no PM in Scrum.

**Q:** Tech lead assigning work?
**A:** Anti-pattern, Developers self-organize.

**Q:** Extending a Sprint?
**A:** Not allowed.

**Q:** Adding members mid-Sprint?
**A:** Generally not done; doesn't help (Brooks's Law).

**Q:** Skipping a Retrospective?
**A:** Not allowed; Retro is required.

**Q:** Sub-teams within a Scrum Team?
**A:** Anti-pattern; team is one unit.

---

## 🎯 SECTION 10: EXAM POWER PHRASES

**Q:** Often-correct answer phrases:
**A:** "Coach the team..." / "Facilitate a discussion..." / "Refer to the PO..." / "Inspect and adapt..." / "Self-organize..."

**Q:** Often-wrong answer phrases:
**A:** "The PM decides..." / "Extend the Sprint..." / "Skip the [event]..." / "Tell the team..." / "Lower quality..."

---

## 📝 STUDY TIPS FOR FLASHCARDS

1. **Anki recommendation:** Spaced repetition is undefeated.
2. **Daily review:** 10–15 min/day until exam.
3. **Test yourself fairly:** If you guessed, mark it wrong.
4. **Add cards as you find weak spots:** Reading.md → wrong quiz answers → new card.
5. **Mix decks:** Don't just review one section at a time. Interleave.

---

## 🎯 BEFORE THE EXAM

You should be able to instantly answer:

- The 5 Scrum events with timeboxes
- The 3 artifacts → 3 commitments mapping
- The 5 Scrum values
- Who owns/decides each thing (PO/SM/Devs)
- What's NOT in the Scrum Guide (DoR, velocity, INVEST, etc.)
- Sprint rules (timeboxed, no scope-endangering changes, quality, etc.)

Good luck! 🚀
