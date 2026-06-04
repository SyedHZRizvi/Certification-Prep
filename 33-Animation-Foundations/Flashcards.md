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
  var STORAGE_KEY = 'animation-foundations-cards';
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
    // Hide the leading H1 + intro blockquote? Keep them. Hide all <hr> within the article body that appear after our widget — they're section separators in the source list.
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

# 🃏 Animation Foundations Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill 10–15 minutes per day for at least 2 weeks before any assessment. Use the section filter to focus on one module at a time.

---

## 🎬 SECTION 1: THE 12 PRINCIPLES

**Q:** Who published the 12 Principles of Animation and in what book?
**A:** Frank Thomas and Ollie Johnston in *The Illusion of Life: Disney Animation* (1981).

**Q:** What is the volume rule in squash and stretch?
**A:** Volume (mass) must remain constant — the object widens when squashed, narrows when stretched.

**Q:** What does anticipation do for the audience?
**A:** It prepares the audience for an action about to happen, earning the emotional payoff.

**Q:** Define staging in the context of animation.
**A:** Presenting one idea clearly so the audience reads it instantly — one center of attention, clear visual hierarchy.

**Q:** What is the difference between Straight-Ahead and Pose-to-Pose animation?
**A:** Straight-Ahead = frame 1 → 2 → 3 sequentially (organic, spontaneous). Pose-to-Pose = plan key poses first, fill in-betweens (controlled, dialogue-friendly).

**Q:** What is follow-through in animation?
**A:** Secondary movement that continues after the main body stops — the coat swings forward past the stopped body.

**Q:** What is overlapping action?
**A:** Different body parts moving at different times and rates — the arm follows the torso by a few frames, the hand follows the arm.

**Q:** What does slow-in/slow-out (ease in/ease out) mean?
**A:** Objects accelerate from rest (slow-in) and decelerate to stop (slow-out) — more drawings cluster near the slow moments.

**Q:** Why do living things move in arcs rather than straight lines?
**A:** Limbs rotate around joints, which produces curved arc paths through space — not straight-line paths.

**Q:** What is secondary action, and what rule must it follow?
**A:** A supporting movement enriching the primary action. It must support without competing — never take focus from the primary action.

**Q:** Which principle does Richard Williams call the animator's most important skill?
**A:** Timing (and spacing) — the number of frames determines weight, speed, and emotion.

**Q:** Define exaggeration as an animation principle.
**A:** Pushing the depiction beyond literal anatomical or physical reality to communicate emotion and story with greater clarity.

**Q:** What does solid drawing mean in animation?
**A:** That drawings communicate three-dimensional form, weight, and balance even in a 2D medium — through foreshortening, overlapping, and contour.

**Q:** What does "appeal" mean in the 12 Principles — and does it require cuteness?
**A:** Appeal = engaging clarity of character that makes audiences want to watch. Villains have appeal. Cuteness is not required.

**Q:** Name all 12 Principles in order.
**A:** 1. Squash & Stretch, 2. Anticipation, 3. Staging, 4. Straight-Ahead/Pose-to-Pose, 5. Follow-Through & Overlapping, 6. Slow-In/Slow-Out, 7. Arcs, 8. Secondary Action, 9. Timing, 10. Exaggeration, 11. Solid Drawing, 12. Appeal.

**Q:** What does timing at 4 frames communicate vs timing at 48 frames?
**A:** 4 frames = shock, violence, comedy snap. 48 frames = heavy weight, grief, ceremonial slowness.

**Q:** What scene in Bambi is the definitive teaching example for slow-in/slow-out?
**A:** The deer-on-ice scene — ice removes friction, exaggerating the natural ease-in/ease-out physics.

---

## 🎞️ SECTION 2: HISTORY & VISUAL LANGUAGE

**Q:** What did Eadweard Muybridge contribute to animation?
**A:** Sequential motion-study photographs (1878–1887) establishing how real bodies move — the reference science for all animation.

**Q:** What did Winsor McCay's Gertie the Dinosaur (1914) prove?
**A:** That a drawn character could have distinct personality, emotional performance, and audience connection.

**Q:** What was the historical significance of Steamboat Willie (1928)?
**A:** First animated film with synchronized sound (music and effects matching on-screen action).

**Q:** What was the first full-length animated feature film?
**A:** Snow White and the Seven Dwarfs (Disney, 1937).

**Q:** What was the historical significance of Spirited Away winning the 2003 Academy Award?
**A:** It was the first non-English-language animated feature film to win the Best Animated Feature award.

**Q:** What distinguishes the Fleischer Studios aesthetic from Disney's 1930s approach?
**A:** Fleischer = rubber-hose (boneless, flexible), jazz-synchronized, vaudeville energy. Disney = naturalistic anatomy, squash & stretch, emotional drama.

**Q:** What is "limited animation" and why was it developed?
**A:** Fewer frames per second, simplified designs, minimal movement. Developed because television budgets made full animation economically impossible per episode.

**Q:** What is the 180-degree rule?
**A:** All cameras must stay on the same side of the axis of action (an imaginary line through the primary action) to maintain spatial consistency.

**Q:** What is the Rule of Thirds?
**A:** Placing subjects at the intersection points of a 3x3 grid overlaid on the frame — rather than dead center — for more dynamic composition.

**Q:** What does a low-angle camera shot communicate?
**A:** Power, authority, and menace — the character looks larger and more dominant from below.

**Q:** What does a Dutch angle communicate?
**A:** Psychological unease, disorientation, or that something is wrong.

**Q:** What is "Mickey-Mousing" in animation?
**A:** Synchronizing every musical beat directly to a corresponding visual action.

**Q:** What was Toy Story (1995) historically significant for?
**A:** It was the first feature-length film created entirely with computer-generated imagery.

---

## ✏️ SECTION 3: DRAWING FUNDAMENTALS

**Q:** What is the "line of action" in a gesture drawing?
**A:** A single curved line running through the pose that communicates its dominant directional energy — what the figure is doing.

**Q:** What is the construction method in figure drawing?
**A:** Building complex organic forms from simple underlying geometric volumes (egg head, box torso, cylinder limbs).

**Q:** What is the correct order of the construction method?
**A:** Line of action → major volumes → joints → connecting cylinders → refinement.

**Q:** What does foreshortening do to a limb pointing toward the camera?
**A:** It makes the limb appear shorter than its actual length due to depth compression in a 2D image.

**Q:** What is the head-to-body ratio for realistic adult human anatomy?
**A:** Approximately 7–8 head-lengths (the body is 7–8 times the height of the head).

**Q:** What is a chibi/super-deformed proportion?
**A:** 1:1 to 2:1 — the head is nearly as large as the entire body.

**Q:** What is the "study-then-draw" reference method?
**A:** Observe reference deeply → close it → draw from understanding → return only to check specific details.

**Q:** What does "drawing from the shoulder" vs "drawing from the wrist" produce?
**A:** Shoulder = larger, more confident, expressive marks. Wrist = small, cramped, timid marks.

**Q:** What is the "tangent" problem in drawing composition?
**A:** Two lines or shapes touching at exactly one point — the eye cannot determine depth. Use overlap instead.

**Q:** What four skills does life drawing develop for animators?
**A:** Observational accuracy, speed under time pressure, understanding of weight/balance, and hand-eye coordination.

---

## 🎞️ SECTION 4: STORYBOARDING & ANIMATICS

**Q:** What is an animatic (story reel)?
**A:** Storyboards cut to timing with placeholder audio — tests whether the story works in time before expensive animation resources are committed.

**Q:** What does the "3-thumbnail rule" mean?
**A:** Draw at least 3 different composition options for each significant story beat before committing — the third is usually the most interesting.

**Q:** What is a J-cut?
**A:** Audio from the incoming scene begins before the visual cut to that scene.

**Q:** What is a match cut?
**A:** Transitioning between shots by visually matching a shape, movement, or composition element between the two shots.

**Q:** What are the five standard views in a character turnaround?
**A:** Front, 3/4, side (profile), back, 3/4 back.

**Q:** What is "spatial continuity" in storyboarding?
**A:** Maintaining consistent character positions relative to each other and the environment across all cuts in a scene.

**Q:** What is a floor plan in storyboarding?
**A:** A bird's-eye diagram showing character positions, camera placement, and camera movement for each shot to ensure spatial continuity.

**Q:** What is the industry-standard software for professional storyboarding?
**A:** Toon Boom Storyboard Pro.

---

## ⏱️ SECTION 5: TIMING, SPACING & RHYTHM

**Q:** What is "spacing" in animation, distinct from "timing"?
**A:** Spacing = how far each drawing moves from the previous one in space (determines perceived speed). Timing = how many frames between drawings.

**Q:** What does an S-curve in the graph editor represent?
**A:** Slow-in/slow-out (ease in/ease out) — flat at start, steep in middle, flat at end.

**Q:** What does a straight diagonal line in the graph editor represent?
**A:** Constant speed (linear interpolation) — mechanical, robotic, even motion.

**Q:** Film (theatrical animation) standard frame rate?
**A:** 24 fps.

**Q:** PAL broadcast frame rate (Europe)?
**A:** 25 fps.

**Q:** NTSC broadcast frame rate (North America)?
**A:** 30 fps.

**Q:** What does "on 2s" mean?
**A:** Every drawing is shown for 2 frames — 12 unique drawings per second at 24fps.

**Q:** What is the "graph editor trap"?
**A:** Default smooth S-curves on every parameter produce mathematically beautiful but dead, statue-on-turntable motion. Real performance is messier.

**Q:** What is the "rule of three" in animation rhythm?
**A:** Three repetitions create audience expectation; varying the fourth element creates surprise. Structural basis of physical comedy.

**Q:** What does Richard Williams say is the single most important animation skill?
**A:** Timing and spacing.

---

## 🎨 SECTION 6: CHARACTER DESIGN

**Q:** What psychological association does a circle/sphere communicate in shape language?
**A:** Friendly, approachable, safe, youthful, innocent.

**Q:** What psychological association does a triangle communicate in shape language?
**A:** Dangerous, unpredictable, energetic, menacing, dynamic.

**Q:** What psychological association does a square/rectangle communicate in shape language?
**A:** Stable, reliable, dependable, powerful, sturdy.

**Q:** What is the silhouette test?
**A:** Fill the character design with solid black. If it remains identifiable and action-readable from the black shape alone, it passes.

**Q:** Why should hair design not obscure the face in a resting position?
**A:** In extreme action or emotional poses, the hair will cover the face, making facial expressions unreadable.

**Q:** What color is associated with calm, trustworthiness, or melancholy in character design?
**A:** Blue.

**Q:** What color is associated with danger, energy, and passion?
**A:** Red.

**Q:** What color is associated with power, mysticism, royalty, or villainy?
**A:** Purple.

**Q:** In freelance animation, who typically owns the character designs created for a client project?
**A:** The client/employer typically owns them — ownership should always be clarified in the contract.

**Q:** Why is slight asymmetry better than perfect symmetry in character design?
**A:** Perfect symmetry looks robotic and lifeless. Slight asymmetry allows more natural animation and reflects biological reality.

---

## 🌈 SECTION 7: COLOR THEORY & COMPOSITION

**Q:** In color theory, what does "value" mean?
**A:** The lightness or darkness of a color, independent of hue. It is the most important property for readability.

**Q:** Why is value more important than hue for readability?
**A:** Similar values cannot be distinguished even if they have different hues — value contrast is what separates elements visually.

**Q:** What is the Pixar rule for establishing color in a composition?
**A:** Value first — establish strong value relationships before adding hue. Compositions that work in grayscale work in color.

**Q:** What does high saturation communicate in animation?
**A:** Energy, intensity, fantasy, youth, joy.

**Q:** What does low saturation communicate in animation?
**A:** Realism, fatigue, sadness, age, grief, nostalgia.

**Q:** What color harmony uses colors adjacent on the wheel?
**A:** Analogous — comfortable, natural feeling.

**Q:** What color harmony uses colors directly opposite on the wheel?
**A:** Complementary — high contrast, tension, vibrancy.

**Q:** What is the most common professional color harmony choice?
**A:** Analogous palette with one complementary accent element.

**Q:** Do warm colors advance or recede in a composition?
**A:** Advance — they appear to move toward the viewer.

**Q:** Do cool colors advance or recede in a composition?
**A:** Recede — they appear to move away from the viewer (backgrounds are often cool).

**Q:** What is a "color script" in animation production?
**A:** A large-scale planning document showing how the film's palette evolves from beginning to end.

**Q:** What does chromatic aberration communicate in Spider-Verse?
**A:** A stylistic simulation of camera lens distortion (color channel misalignment) — used deliberately as a storytelling and style tool.

---

## 💻 SECTION 8: DIGITAL WORKFLOW & TOOLS

**Q:** What is the "Final Rule" in animation file naming?
**A:** Never name a file "final." Use numerical versioning (v001, v002) — there is always a revision.

**Q:** What is the correct file naming convention for animation files?
**A:** [PROJECT]_[EP###]_[SH###]_[ELEMENT]_v[###].[ext] — e.g., ANI_EP004_SH012_CharA_body_v003.anim

**Q:** Why are numbers zero-padded (001, not 1) in file names?
**A:** So files sort in correct numerical order when there are more than 9 versions (file systems sort alphabetically).

**Q:** What is H.264 appropriate for in animation production?
**A:** Client review, web delivery, and streaming — NOT production masters (it is lossy and degrades on re-encode).

**Q:** What is ProRes 4444 used for?
**A:** VFX masters and compositing — it supports an alpha channel (transparency).

**Q:** What is the professional animation rendering workflow?
**A:** Render to PNG sequence or ProRes 4444 → edit/composite in ProRes 422 → deliver as H.264 or H.265.

**Q:** What is the 3-2-1 Backup Rule?
**A:** 3 copies, on 2 different media types, with 1 copy off-site (cloud counts).

**Q:** Why must frame rate be locked before production begins?
**A:** Changing frame rate mid-production requires reconverting all timing and can break the entire pipeline.

**Q:** What is the industry-standard 2D animation software at major studios?
**A:** Toon Boom Harmony (used at Disney TV, DreamWorks TV, and most 2D production studios).

**Q:** What is Shotgrid (Shotgun) used for in animation production?
**A:** Production tracking — managing shot progress, version approvals, and production schedules.

**Q:** What is Frame.io used for?
**A:** Client review and approval of animation shots and sequences.

---

## ⚽ SECTION 9: FIRST ANIMATED SHORT

**Q:** What principles does the bouncing ball exercise teach?
**A:** Squash & Stretch, Slow-In/Slow-Out, Arcs, Timing, Follow-Through, Weight — essentially the full toolkit.

**Q:** Where are drawings most closely spaced in a bouncing ball timing chart?
**A:** At the top of the arc — where the ball is slowest, almost stationary.

**Q:** What does a bowling ball vs a ping-pong ball differ in during animation?
**A:** Frame count per bounce (bowling = more frames, higher weight), squash amount (bowling = minimal), bounce height (bowling = very small).

**Q:** What are the four key positions of a walk cycle?
**A:** Contact (foot lands, body lowest), Down (weight transfers), Passing (free leg passes planted leg, body highest), Up/Recoil (push-off).

**Q:** In a walk cycle, which arm swings forward with the leading leg?
**A:** The opposite arm — right arm forward when left leg leads.

**Q:** What does walk cycle timing at 20–24 frames per step communicate?
**A:** A menacing, deliberate, powerful character.

**Q:** What is the "pantomime test" in animation?
**A:** A performance where the character communicates emotion and story entirely through movement, without any dialogue.

**Q:** What does the self-critique step "play at half speed" reveal?
**A:** In-between problems (pops, slides, volume loss) that are invisible at full playback speed.

---

## 💼 SECTION 10: PORTFOLIO & CAREER

**Q:** What is the first rule of demo reel strategy?
**A:** Open with your strongest shot — recruiters decide in the first 10 seconds.

**Q:** What is the recommended demo reel length?
**A:** 90 seconds ideal; 2 minutes absolute maximum. Every second must be strong.

**Q:** What does the weakest shot in a demo reel determine?
**A:** The animator's perceived professional level — recruiters assume the weakest shot represents a common quality floor.

**Q:** Which platform is industry-preferred for hosting animation demo reels?
**A:** Vimeo — ad-free, high quality, password protection for private links.

**Q:** Which platform is dominant in the game art and animation industry for portfolios?
**A:** ArtStation.

**Q:** What percentage of animation industry jobs are NOT publicly posted?
**A:** Approximately 75% — most are filled through the professional network.

**Q:** What is the approximate US base salary for a Senior Animator at Disney/Pixar (2025–2026)?
**A:** $120K–$165K base.

**Q:** What is the primary advantage of starting at a studio vs freelancing as a junior animator?
**A:** Stable income, benefits (health, retirement, paid leave), and structured skill development within a professional environment.

**Q:** Name three animation industry festivals important for professional networking.
**A:** Annecy International Animation Festival, Ottawa International Animation Festival, CTN Animation Expo.

**Q:** What should NEVER appear in a professional animation demo reel?
**A:** Turntable shots (no performance), work the animator is not proud of, work from 3+ years ago that no longer represents current skill level.

**Q:** What is the career pattern for most professional animators?
**A:** Start in a studio to build skills and network → move to freelance once established.

---

## 🔬 SECTION 11: CROSS-MODULE CONCEPTS

**Q:** What did *Into the Spider-Verse* deliberately break, and what was the reason?
**A:** The 180-degree rule (to communicate inter-universal incompatibility) and the standard frame rate convention (different fps per character to communicate character identity).

**Q:** What was the Bambi production challenge that led Frank Thomas to codify the first animation principles?
**A:** Animating deer convincingly — the drawings looked like drawings being moved, not deer moving. They needed to think about weight and force, not just poses.

**Q:** Name three animation films mentioned in this course and the primary principle each illustrates.
**A:** Bambi (slow-in/slow-out, overlapping action), Spider-Verse (anticipation, timing), Spirited Away (staging, secondary action), The Incredibles (squash & stretch, appeal), Arcane (shape language, color design).

**Q:** What is the relationship between timing and emotion?
**A:** Timing is not emotionally fixed. The same action at different timings can shift from comedy to tragedy. Timing must match the specific emotional goal of the specific scene.

**Q:** What does it mean for a pose to "read" in animation?
**A:** The audience can immediately understand what the character is doing and feeling from the pose alone — primarily through the line of action and silhouette.

**Q:** Name two software programs considered industry standard in their respective categories.
**A:** Autodesk Maya (3D character animation), Toon Boom Harmony (2D character animation), Toon Boom Storyboard Pro (storyboarding).
