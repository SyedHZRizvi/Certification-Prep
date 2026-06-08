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
  var STORAGE_KEY = 'advanced-character-cards';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    var container = app.parentNode;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null, pendingQEl = null;
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
        pendingQ = null; pendingQEl = null;
        continue;
      }
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
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
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){
        hr.classList.add('fc-source-hidden');
      }
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

# 🃏 Advanced Character Animation Flashcards (Master Set)

> **How to use:** Click a card to flip it. Use Got it / Try again to track your progress. Filter by section for targeted study. Shuffle to mix the deck.

---

## 🎭 MODULE 1: ACTING AND PERFORMANCE

**Q:** What is Stanislavski's "magic if"?
**A:** If I were in this character's situation, what would I truthfully do? The foundational question of Method acting applied to animation.

**Q:** What is a character's "Objective" in Stanislavski's system?
**A:** What the character wants specifically in THIS shot or scene, not globally. Always an active verb.

**Q:** What is the "Super-Objective"?
**A:** The overarching want that drives all of the character's objectives throughout the entire story.

**Q:** What is the "Through-Line of Action"?
**A:** The chain of small objectives that builds toward the Super-Objective. Every shot should advance or complicate it.

**Q:** Define "indicating" in acting and animation.
**A:** Showing an emotion rather than experiencing the cause that produces it. The performance sin of appearing emotional without feeling emotional.

**Q:** What is the core Meisner principle for animators?
**A:** Discover performance through genuine reaction rather than pre-planning. Film reference before thumbnailing.

**Q:** What are "Given Circumstances" in Stanislavski?
**A:** The totality of facts about the character's world immediately before action begins. Write 5 before blocking.

**Q:** What is the "planning trap" in animation?
**A:** When technique enables executing a mediocre plan perfectly. Most dangerous at years 3–7 of a career.

**Q:** What is "found reference" vs "staged reference"?
**A:** Found = spontaneous, unplanned take capturing genuine reaction. Staged = confirms a predetermined plan.

**Q:** What 3-step process breaks the planning trap?
**A:** (1) Film reference before thumbnailing. (2) One "crazy take" per session. (3) Show reference to peer without context, ask what emotion they see.

**Q:** What is "subtext" in character animation?
**A:** The gap between what a character says and what they actually mean or feel. Where the best animation lives.

**Q:** What was the internal monologue finding for Ernesto de la Cruz in Coco?
**A:** "This boy knows. I need to manage this. Smile wider. Touch his shoulder. Don't let him think." Led to: smile reaches mouth before eyes (0.5s delay).

**Q:** What animation choice conveyed Luisa's anxiety in Encanto's Surface Pressure?
**A:** Increasing blink rate through the second verse, a physiological sign of escalating anxiety.

**Q:** What two body areas conveyed the tension in Luisa's performance simultaneously?
**A:** Straight spine = performed strength. Tight scapulae = hidden anxiety.

---

## ⚖️ MODULE 2: BODY MECHANICS AND WEIGHT

**Q:** Where is the center of gravity (COG) in a bipedal humanoid?
**A:** At the pelvis, between the hip joints, at approximately 55% of total body height.

**Q:** What is the "base of support" for a standing biped?
**A:** The area on the ground between the character's feet. COG must project into this area or the character falls.

**Q:** In a walking cycle, the COG traces what shape?
**A:** An inverted arc, rises at mid-stride (weight on one foot), falls at contact (weight transfers).

**Q:** What is "animated physics" vs "real physics"?
**A:** Animated physics exaggerates real physics to make audiences FEEL the physics in a 2D projection, slightly slower for emotion, faster for comedy, slow-in/slow-out in freefall.

**Q:** In the seven-phase punch, what is the power source?
**A:** The hip drive, hips rotate first. The arm is the last link in a chain: ground → foot → hip → torso → shoulder → arm.

**Q:** What is the "pancake error" in fall animation?
**A:** The character falls as a rigid unit without the hips leading. Fix: hips lead; head trails 4–6 frames.

**Q:** How long is a staged (animated) fall vs a real fall?
**A:** Staged: 12–30 frames (500ms–1.25s). Real: 200–400ms. Animated is 2–3× longer.

**Q:** What characterizes a heavy character's overlapping action?
**A:** Long anticipation, firm settle with no spring, shudder-and-settle secondary motion, barely overshoots the stopping point.

**Q:** What characterizes a light character's follow-through?
**A:** Far-overshooting, lingering, high-frequency oscillation. Whips to a stop rather than settling.

**Q:** What is the "ground reaction" principle in lifting?
**A:** The feet press harder into the ground at the initiation of the lift, the force originates from the ground up.

**Q:** What does "drag" mean in the 12 principles?
**A:** Secondary parts resist the START of motion. The tail doesn't move when the body starts; it catches up.

**Q:** At the apex of a jump, which animation principle is applied?
**A:** Stretch, the body elongates at maximum height. Brief slow-in as it transitions from rise to fall.

---

## 😶 MODULE 3: FACIAL ANIMATION

**Q:** What does FACS stand for?
**A:** Facial Action Coding System, developed by Paul Ekman and Wallace Friesen in 1978. 44 Action Units.

**Q:** What is the difference between a genuine and a social smile?
**A:** Genuine (Duchenne) = AU6 + AU12. Social = AU12 alone. AU6 raises cheeks and creates crow's-feet, cannot be voluntarily faked in isolation.

**Q:** Name the seven universal facial expressions.
**A:** Happiness, Sadness, Fear, Disgust, Anger, Surprise, Contempt.

**Q:** Which universal expression is the only asymmetric one?
**A:** Contempt, AU12R (right side only). If symmetric, it reads as something else.

**Q:** What is a micro-expression?
**A:** A suppressed emotion that flashes across the face for 1–5 frames at 24fps before the maintained surface expression settles.

**Q:** What are saccades?
**A:** Rapid, ballistic jumps of the eye between fixation points (10–50ms). Eyes do NOT smoothly track, they jump. Use stepped tangents.

**Q:** Name five causes of the "dead eye" problem.
**A:** (1) No saccades. (2) Uniform blink timing. (3) Missing one-eye offset. (4) Upper lid not following gaze. (5) No micro-squint on attention.

**Q:** Describe the butterfly blink timing.
**A:** Closes in 4 frames (fast). Holds 0–2 frames. Opens in 5–6 frames (slower). Upper lid does 75% of the work.

**Q:** What does AU1 (Inner Brow Raise) express?
**A:** Concern, worry, sadness. The most emotionally specific zone of the face, grief, sympathy, and nuanced worry all live here.

**Q:** What FACS AU combination produces fear?
**A:** AU1+2 (full brow raise) + AU4 (brow lower) + AU5 (upper lid raise) + AU20 (lip stretch).

**Q:** When a character looks downward, how much does the upper lid droop?
**A:** Approximately 30%. Failure to track = dead eye.

**Q:** What happens to cheeks during a genuine smile (AU6)?
**A:** Fat pads lift upward, narrowing the eyes from below. Cheek settling time: 2–4 frames.

---

## 🎤 MODULE 4: ADVANCED LIP SYNC

**Q:** Which phonemes require the ONLY fully closed mouth shape?
**A:** M, B, and P. These closures are the primary sync landmarks, the audience's main reference for sync.

**Q:** State the 2-frame lead rule for lip sync.
**A:** The mouth must precede the audio by 2 frames. Neurological fact: auditory processing is faster than visual processing (~40–80ms = ~2 frames at 24fps).

**Q:** What is the "puppety mouth" problem?
**A:** Over-animating every phoneme to exact positions. Makes the mouth appear to be doing facial exercises. Fix: anchor M/B/P only, blend broadly.

**Q:** What does "less is more" mean in lip sync?
**A:** Audiences can read sync with as few as 5 shapes if M/B/P closures and general open/closed timing are correct.

**Q:** When should dialogue be animated on 1s?
**A:** Fast dialogue (>180wpm), hero close-ups, emotional climaxes, where subtlety and precision are critical.

**Q:** What is the first step of the performance-first lip sync workflow?
**A:** Block the character's head, body, and eyes to convey the emotional performance with NO mouth animation at all.

**Q:** What is the Japanese dubbing challenge?
**A:** Japanese has more syllables per concept than English. The original English animation's mouth timing must be significantly expanded.

**Q:** What percentage of dialogue scenes read as adequately synced after adding M/B/P closures only?
**A:** Approximately 80%, closures are the audience's main sync reference.

**Q:** The "F/V" viseme is distinctive because:
**A:** The lower lip contacts the upper teeth, the only dental-lip contact shape.

---

## 🐉 MODULE 5: CREATURE ANIMATION

**Q:** In which quadruped gait are at least 2 feet always on the ground?
**A:** The walk. The only gait without an airborne phase.

**Q:** Where does the gallop's aerial phase occur?
**A:** At the GATHERED (tucked) position, not the stretched position. The #1 anatomical error in beginner gallop animation.

**Q:** What are the two types of gallop and how do they differ?
**A:** Rotary (RF→LF→RH→LH, as in cats) and Transverse (RF→LF→LH→RH, as in horses).

**Q:** What behavioral libraries defined Toothless in How to Train Your Dragon?
**A:** Domestic cat (primary) + Labrador Retriever (secondary). The "slow blink" is a cat trust/contentment signal.

**Q:** In bird flight, what does the downstroke generate?
**A:** Both lift AND forward thrust. The upstroke is the recovery phase with minimal force generation.

**Q:** What is "anguilliform" fish locomotion?
**A:** Full-body waves from head to tail, like an eel. The most extreme end of the fish locomotion spectrum.

**Q:** What is "behavioral borrowing" in creature animation?
**A:** Deliberately applying a real, familiar animal's behavioral vocabulary to a fictional creature. Must be decided before first key.

**Q:** What is a "creature bible"?
**A:** A production document specifying the behavioral vocabulary for each creature type. All animators reference it for consistency.

**Q:** In tail animation, which part has the greatest time offset?
**A:** The tail tip, greatest lag, highest frequency in follow-through. Base moves first.

**Q:** What does the amplitude of a quadruped's tail motion indicate?
**A:** Emotional state. Large amplitude = excited/happy. Low amplitude = submissive/fearful. Stiff/slow = aggressive.

**Q:** What was Nick Wilde's (Zootropolis) behavioral borrowing?
**A:** Crow, side-eye, body stillness before action, deliberate head bobs.

---

## 👥 MODULE 6: CROWD SIMULATION

**Q:** Name the five dimensions of crowd variation.
**A:** (1) Geometric. (2) Texture/look. (3) Timing (phase offset). (4) Motion quality (clip selection). (5) Behavioral.

**Q:** Which single dimension can make geometrically identical agents read as individuals?
**A:** Timing variation (phase offset), even identical character models feel individual if on different cycle phases.

**Q:** What is the "1-in-10 rule" for crowd animation?
**A:** At least 1 in every 10 visible agents should be doing something distinctly different from the others.

**Q:** What decision system does Massive use for agent behavior?
**A:** Fuzzy logic networks, input nodes → fuzzy nodes → logic nodes → output nodes that select motion clips.

**Q:** What is "emergent behavior" in the LOTR crowd simulation?
**A:** Authentic behavior arising from the simulation's logic without human direction, e.g., orcs routing when enough allies fell.

**Q:** When should you use simulation vs keyframe for crowds?
**A:** Simulation: 1000+ agents needing emergent behavior. Keyframe: 20–50 hero-adjacent characters needing specific marks. Hybrid: between.

**Q:** What is the "hero crowd" in a hybrid shot?
**A:** The 20–50 agents closest to camera that must hit specific marks, animated via keyframe.

**Q:** What does the editorial principle "edit drives simulation" mean?
**A:** The simulation must produce appropriate visual content at every planned cut point. Editorial does not adapt to the simulation.

**Q:** What is Houdini CROWDS best used for vs Massive?
**A:** Houdini: pipeline-integrated, procedural, art-directed. Massive: stand-alone autonomous behavioral simulation with emergent capability.

---

## 🎬 MODULE 7: MOTION CAPTURE

**Q:** Name the three main mocap technology types.
**A:** Optical (reflective markers + IR cameras), Inertial (IMU sensors), Markerless (computer vision on video).

**Q:** What is the primary limitation of inertial mocap?
**A:** Drift accumulates over time; provides only relative position (no absolute position in world space).

**Q:** When is markerless mocap most appropriate?
**A:** Retroactive reconstruction from existing footage or archival material.

**Q:** What does "retargeting" accomplish in mocap cleanup?
**A:** Scales and proportion-adjusts the captured motion to fit a character with different proportions.

**Q:** What is the "retargeting paradox"?
**A:** A character with shorter legs taking the same number of steps as a taller actor covers less ground, appears to move faster.

**Q:** What does "foot locking" solve in mocap cleanup?
**A:** Prevents feet from sliding, skidding, or floating after retargeting, pins feet to world-space at contact frames.

**Q:** In MotionBuilder, what does "Plot" do?
**A:** Bakes the live retargeting relationship to discrete keyframes for export to Maya/Houdini.

**Q:** Name three situations where mocap SHOULD NOT be used.
**A:** Stylized/cartoon characters, superhero physics, pure comedy pantomime, non-human creatures, close-up micro-expression emotion.

**Q:** What was Avatar's key innovation in performance capture?
**A:** A 6× larger volume than previous productions, plus real-time playback so actors could see their Na'vi characters while performing.

**Q:** What was unique about the ape locomotion in War for the Planet of the Apes?
**A:** The quadruped gait was KEYFRAMED by Weta animators using bipedal actor reference as intent. The ape gait was not directly captured.

**Q:** What does "contact intent preservation" mean in retargeting?
**A:** The retargeted character must contact the ground at approximately the same frames as the original actor, despite proportion differences.

---

## 📈 MODULE 8: GRAPH EDITOR ADVANCED

**Q:** What does a flat (horizontal) curve segment in the graph editor mean?
**A:** The value is held constant, no motion in that channel. A held pose.

**Q:** What does an S-curve represent in the graph editor?
**A:** Organic motion: slow-in (object resists starting) → fast middle → slow-out (object resists stopping).

**Q:** What tangent type produces NO interpolation (value jumps at the key)?
**A:** Stepped. Used exclusively during the blocking phase.

**Q:** What is the difference between Spline and Clamped tangents?
**A:** Spline can overshoot past the keyframe's value. Clamped cannot overshoot, it stays contained.

**Q:** What does tangent handle LENGTH control?
**A:** How strongly the curve is pulled toward the key's value. Long = slow approach. Short = fast approach.

**Q:** What is the "spline switch moment" in the stepped workflow?
**A:** When you change stepped tangents to spline, your clean blocked poses become a "swimming" mess. This is normal.

**Q:** What are "swimming poses"?
**A:** Unexpected in-between positions generated by spline interpolation between blocked keyframes. Fixed by tangent refinement.

**Q:** What tangent type should impact contact frames use?
**A:** Linear or flat, objects do not ease into hard surfaces.

**Q:** What expression pattern creates secondary motion offset (tail follows body with 5-frame delay)?
**A:** `getAttr -t (frame - 5) bodyControl.attribute`, retrieve the body's value from 5 frames ago.

**Q:** How do you diagnose "character floats before landing"?
**A:** The curve is too slow-in on Y-translation approaching the ground. Shorten the incoming tangent or use linear.

**Q:** What is the "hold pose drift" problem and how do you fix it?
**A:** Subtle curve movement during a supposed hold. Fix: add an anchoring keyframe during the hold section.

---

## 🎬 MODULE 9: DIRECTORS AND FILM PIPELINE

**Q:** When a director says "it's too much," what is the technical translation?
**A:** Over-animation, too busy. Reduce secondary motion, simplify the performance.

**Q:** When a director says "it's not alive," what is the technical translation?
**A:** Under-animation, too stiff. Add breathing, eye movement, and timing variety.

**Q:** What is the ONE clarifying question to ask in an ambiguous review?
**A:** "Can you point to a specific moment in the shot that isn't working?"

**Q:** State the four rules of revision etiquette.
**A:** (1) Never argue in review. (2) Implement exact note first. (3) Show same shot, same angle. (4) Communicate proactively.

**Q:** What is the "Yes, And" approach to director's notes?
**A:** Yes = implement the exact note. And = optionally offer one additional variation that builds on it.

**Q:** What does "approved" mean vs "guaranteed in the film"?
**A:** Approved = director signed off; technically and creatively complete. But editorial can still cut, shorten, or reorder it.

**Q:** What is the "animating to editorial" principle?
**A:** The editorial cut determines shot length, cut points, and emotional context. Confirm these BEFORE blocking.

**Q:** What are "handles" on a delivered animation shot?
**A:** 4–8 frames of held pose at the beginning and end, provides editorial flexibility for cut point adjustments.

**Q:** What is the Animation Supervisor's primary role?
**A:** Translates director vision into animator-actionable notes, maintains cross-shot consistency, reviews all work before the director.

**Q:** What is the worst thing you can do in the Anim Sup relationship?
**A:** Surprise the supervisor by showing work for the first time in a director review.

**Q:** Which approval level should you escalate to when supervisor and director give conflicting notes?
**A:** The Director of Animation.

---

## 🎥 MODULE 10: DEMO REEL

**Q:** State the Three Laws of Shot Selection.
**A:** (1) Reel = weakest shot. (2) Show what you want to get hired to do. (3) Variety within the discipline.

**Q:** Where should your best shot appear in the reel order?
**A:** First, recruiter attention is highest at the opening. Hook immediately.

**Q:** What is the professional length standard for a character animation demo reel?
**A:** 60–90 seconds. Sweet spot: 75–85 seconds.

**Q:** What is the "self-editing test"?
**A:** Play the reel with the audio OFF. For each shot ask: "Does this shot earn its time on screen?"

**Q:** What is the "Bohemian Rhapsody problem"?
**A:** Using a famous song, recruiter associates their feelings about the song with your reel instead of your animation.

**Q:** What are the two questions to ask in a structured peer review?
**A:** (1) "Which shot made you most engaged?" (2) "Was there a moment you wanted to look away?"

**Q:** If both peer reviewers identify the same shot as weak, you should:
**A:** Cut the shot from the reel.

**Q:** What does Pixar prioritize in a demo reel?
**A:** Emotional authenticity and subtle performance. Over-animated, emotionally hollow shots kill a Pixar application.

**Q:** What does Riot Games require beyond the standard character animation reel?
**A:** A game-specific portfolio showing state machines, animation cycles, and 60fps optimization.

**Q:** What is the "first 5 seconds test"?
**A:** Show the reel to a new viewer and watch their eyes during the first 5 seconds. Leaning back = change the opener.

**Q:** What should the title card on a reel contain?
**A:** Name, contact email, and portfolio/website URL. Never a home address.

**Q:** The minimum video resolution for major studio reel submission is:
**A:** 1080p (Full HD). Test on a laptop screen as well as a large monitor.
