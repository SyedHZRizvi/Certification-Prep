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
  var STORAGE_KEY = 'game-ui-animation-cards';
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
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){ hr.classList.add('fc-source-hidden'); }
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
    try { var raw = localStorage.getItem(STORAGE_KEY); if(raw) known = JSON.parse(raw) || {}; } catch(e){ known = {}; }
    function cardId(c){ return c.section + '||' + c.q; }
    function saveKnown(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(known)); } catch(e){} }
    var deck = cards.slice();
    var idx = 0;
    var sectionFilter = '__all__';
    function applyFilter(){
      if(sectionFilter === '__all__'){ deck = cards.slice(); }
      else { deck = cards.filter(function(c){ return c.section === sectionFilter; }); }
      idx = 0; render();
    }
    function shuffle(){
      for(var i = deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
      }
      idx = 0; render();
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
      if(deck.length === 0){ qEl.textContent = 'No cards in this section.'; aEl.textContent = ''; counterEl.textContent = 'Card 0 of 0'; progressBar.style.width = '0%'; knownFront.textContent = ''; knownBack.textContent = ''; return; }
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
      saveKnown(); next();
    }
    function resetProgress(){ if(!confirm('Clear all "Got it" progress for this deck?')) return; known = {}; saveKnown(); render(); }
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

# 🃏 Game & UI Animation Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill 10–15 minutes per day for at least 2 weeks. Use the filter dropdown to focus on one module at a time.

---

## 🎮 MODULE 1: GAME VS. FILM ANIMATION

**Q:** What is the frame budget at 60fps?
**A:** 16.67 milliseconds per frame (1000ms ÷ 60).

**Q:** What are Steve Swink's three components of game feel?
**A:** Input, Response, and Context.

**Q:** What is "hit stop" in game animation?
**A:** A deliberate brief freeze of both attacker and defender animations on a significant impact, used to communicate weight and impact.

**Q:** What is the primary architectural difference between film animation and game animation?
**A:** Film uses a linear timeline; game animation uses a state machine where player input drives transitions.

**Q:** What does "Root Motion" mean in game animation?
**A:** The root bone's position/rotation in an animation clip drives the character's world-space transform each frame.

**Q:** What is a "finite state machine" (FSM) in game animation?
**A:** A graph of animation states connected by condition-driven transitions; each state plays one clip or blend tree.

**Q:** How long was hit stop in Hades (Supergiant Games)?
**A:** 4–8 frames at 60fps.

**Q:** Which technique do games like For Honor (Ubisoft) and the EA SPORTS FIFA titles use instead of clip-based state machines for locomotion?
**A:** Motion matching, selecting the best animation pose from a database based on the character's current velocity. (DOOM Eternal, by contrast, uses an authored state machine.)

**Q:** What is "coyote time" in platformer animation design?
**A:** A grace window (0.1–0.15s) after walking off a ledge during which the player can still jump and the animation stays in an edge-peek state.

**Q:** What are the three primary LOD techniques for animation?
**A:** 1) Bone removal at distance (disable finger/face bones), 2) Update rate reduction (15–30fps for distant chars), 3) Simplified clip LOD variants.

**Q:** What is "game feel" per Steve Swink?
**A:** The tactile, kinesthetic sense of manipulating a virtual object, the feeling of controlling a character, not just seeing it.

**Q:** What animation philosophy did Hades use vs. DOOM Eternal?
**A:** Hades: readability and exaggeration for top-down camera distance. DOOM: momentum preservation and an authored state machine with interruptible clips for FPS visceral feel.

---

## 🔧 MODULE 2: UNITY ANIMATION SYSTEM

**Q:** What is Unity's Animator Controller?
**A:** A state machine asset that orchestrates animation clips, blend trees, parameters, layers, and transitions. It contains no animation data itself.

**Q:** What is the difference between a Unity Trigger and a Bool parameter?
**A:** A Trigger is consumed (reset) after one transition. A Bool persists until code explicitly sets it to false.

**Q:** What does "Bake Into Pose" for Root Transform Position (XZ) do in Unity FBX import?
**A:** Converts Root Motion to In-Place animation, the root stays at the origin.

**Q:** Which Unity rig type enables retargeting animation clips between different biped models?
**A:** Humanoid rig.

**Q:** What is Unity's "Has Exit Time" transition setting?
**A:** Auto-fires the transition at the specified normalized clip time fraction (e.g., 0.75 = 75% through the clip), even without a condition.

**Q:** What does Unity's AnyState node allow?
**A:** Transitions that can fire from any currently active state, used for Death, Knockdown, Dodge.

**Q:** What is an Avatar Mask in Unity?
**A:** An asset that defines which bones a specific Animator layer can affect.

**Q:** What is the difference between an Override layer and an Additive layer?
**A:** Override replaces the base pose for masked bones. Additive adds the delta of the pose on top of the base.

**Q:** What C# callback must you override to manually apply Root Motion when using a CharacterController?
**A:** OnAnimatorMove()

**Q:** What are Unity Animation Events used for?
**A:** Firing a C# method at a specific frame within an animation clip (footstep, hitbox activation, sound).

**Q:** What is a 1D Blend Tree used for?
**A:** Blending between multiple clips based on one float parameter, typically Speed for idle/walk/run locomotion.

**Q:** Which IK callback method must you override in Unity to set foot IK goals?
**A:** OnAnimatorIK(int layerIndex)

**Q:** What does `anim.GetCurrentAnimatorStateInfo(0).normalizedTime` return?
**A:** The current playback position within the clip as a fraction from 0.0 (start) to 1.0 (end); values above 1.0 indicate looping.

---

## 🔵 MODULE 3: UNREAL ANIMATION BLUEPRINT

**Q:** In Unreal's Animation Blueprint, which graph contains animation logic (state machines, blend nodes)?
**A:** AnimGraph.

**Q:** In Unreal's Animation Blueprint, which graph sets parameter values from the owning pawn?
**A:** Event Graph.

**Q:** What is a Blend Space in Unreal Engine?
**A:** An asset that interpolates between animation poses based on one or two parameter axes (equivalent to Unity's Blend Tree).

**Q:** What is an Aim Offset in Unreal Engine?
**A:** A special Blend Space of additive aiming poses (Yaw × Pitch) that overlays on top of locomotion for weapon aiming.

**Q:** What is an Animation Montage used for in Unreal?
**A:** One-shot action overrides (attacks, interactions, abilities) that play via a Slot, temporarily overriding the base Animation Blueprint.

**Q:** What is Unreal's Control Rig?
**A:** A visual rigging and procedural animation system that runs on the animation thread, used for real-time IK, secondary motion, and environmental interaction.

**Q:** What is Unreal's Sequencer?
**A:** A linear track-based cinematic editor equivalent to Unity's Timeline for scripted cutscenes and in-game cinematics.

**Q:** How many facial deformation controls does a MetaHuman have?
**A:** Approximately 265 pose space deformation controls.

**Q:** What does the "Layered Blend Per Bone" node do in Unreal's AnimGraph?
**A:** Blends two poses per-bone, equivalent to Unity's Avatar Mask + Layer.

**Q:** What is FABRIK in Unreal Engine?
**A:** Forward And Backward Reaching IK, a multi-joint IK solver for arms, legs, and spine chains.

**Q:** What was the maximum transition blend time in Gears 5's cover system?
**A:** 0.15 seconds, to maintain tactical responsiveness.

**Q:** What is a Niagara Event in Unreal Engine?
**A:** A mechanism allowing particles in one Niagara Emitter to trigger responses in another emitter (e.g., projectile collision spawning an explosion).

---

## 🦴 MODULE 4: SPINE 2D FOR GAMES

**Q:** What company makes Spine 2D?
**A:** Esoteric Software.

**Q:** What is a Spine Slot?
**A:** A draw-order entry on a bone that specifies which attachment is currently visible.

**Q:** What is the mobile GPU skinning bone influence limit per vertex in Spine?
**A:** 2 bone influences per vertex (iOS/Android).

**Q:** What is Free-Form Deformation (FFD) in Spine?
**A:** Moving mesh vertices directly and keyframing them without binding to additional bones, used for squash/stretch.

**Q:** What is a Spine Skin?
**A:** A set of attachment swaps on a single skeleton, allows character variant customization (outfits, weapons) without duplicating animation data.

**Q:** What does IK constraint Mix = 0.0 mean in Spine?
**A:** Pure FK, the IK target has no influence on the bone chain.

**Q:** What file types does Spine export for the Unity runtime?
**A:** .json (or .skel binary), .atlas, and .png texture atlas file(s).

**Q:** What is the recommended Spine atlas page size for mobile?
**A:** 1024×1024 pixels maximum.

**Q:** In Spine-Unity, what is Track 0 typically used for?
**A:** The base looping animation (idle, walk, run).

**Q:** How did Dead Cells achieve crisp animation with Spine?
**A:** Low bone count (~15–25 per enemy), deliberate mesh squash/stretch, and a hand-optimized Spine C runtime with batched draw calls.

**Q:** What is a Spine Bounding Box attachment?
**A:** A polygon attachment used for hit detection and collision regions.

**Q:** What is a Path Constraint in Spine?
**A:** A constraint that makes bones move along a defined curve path, used for tails, tentacles, and snake bodies.

---

## 🔄 MODULE 5: STATE MACHINES & BLEND TREES

**Q:** What are the three factors that determine animation state machine responsiveness?
**A:** Transition latency (how often conditions are checked), blend duration (crossfade time), and interrupt conditions (whether new inputs can cancel in-progress blends).

**Q:** In Unity's Animator, what does "Interruption Source: Current State" allow?
**A:** Transitions leaving the source (current) state can interrupt an in-progress blend, enables responsive dodge/attack triggers.

**Q:** What is the typical blend time range for high-priority transitions in action games?
**A:** 0.05–0.12 seconds.

**Q:** Why should AnyState transitions use Trigger parameters?
**A:** Triggers auto-reset after consumption, preventing transition loops where the condition stays true while already in the target state.

**Q:** What is an additive animation clip different from a full-pose clip?
**A:** An additive clip stores the delta from a reference pose, not the full pose, so it adds motion on top of whatever the base layer is playing.

**Q:** What is the "locomotion starter pack" minimum state count?
**A:** Idle/Walk/Run blend tree, Jump Rise/Apex/Fall states, Soft Landing, Hard Landing, and optional Coyote Time window.

**Q:** What does a Blend Tree's "lerp speed" control?
**A:** How quickly the sample position moves toward the target parameter value, smoothing speed changes (too fast = no smoothing; too slow = mushy).

**Q:** What is inertialization blending in Unreal Engine?
**A:** A blend mode that preserves the animation's velocity at the blend start, producing smoother transitions without pops, without requiring longer blend times.

**Q:** What is a "pushdown automaton" state machine pattern used for?
**A:** Stack-based FSM, last state is pushed on a stack and popped when done; used for menus, conversation trees, and context-sensitive states.

---

## 🖥️ MODULE 6: UI ANIMATION, FIGMA, GSAP & FRAMER MOTION

**Q:** What does GSAP stand for?
**A:** GreenSock Animation Platform.

**Q:** What is the difference between gsap.to() and gsap.from()?
**A:** .to() animates from current values to target values. .from() animates from specified values to the current CSS-defined values.

**Q:** What GSAP ease should you use for a progress bar?
**A:** 'linear', constant speed, no easing.

**Q:** What does the GSAP Timeline '-=0.2' syntax mean?
**A:** The tween starts 0.2 seconds before the end of the previous tween (creating a 0.2s overlap).

**Q:** What is GSAP's Flip plugin used for?
**A:** Animating between different layout states (grid reorder, card expand), implementing the FLIP technique without manual coordinate tracking.

**Q:** What does FLIP stand for?
**A:** First, Last, Invert, Play, a technique for animating layout changes without per-frame layout recalculation.

**Q:** What makes animating top/left bad for performance?
**A:** They trigger layout recalculation every frame. Animate transform (x/y) instead, GPU compositor only.

**Q:** What does GSAP's 'back.out(1.7)' ease do?
**A:** Overshoot, the element goes slightly past its target then settles back, creating a playful spring-like effect.

**Q:** What GSAP setting ties animation progress directly to scroll position?
**A:** scrub: true in a ScrollTrigger configuration.

**Q:** What is Framer Motion's AnimatePresence used for?
**A:** Enabling exit animations when React components unmount from the DOM tree.

**Q:** What is the correct easing for a UI element exiting the screen?
**A:** Ease Out, starts fast, slows at the end, so the exit feels purposeful rather than popping.

**Q:** What is the Figma Smart Animate requirement for layers to be tweened?
**A:** Both frames must contain layers with identical names.

---

## 🌐 MODULE 7: CSS ANIMATION, LOTTIE & RIVE

**Q:** What does CSS 'animation-fill-mode: forwards' do?
**A:** Holds the state of the final keyframe after the animation ends. Without it, the element snaps back to its original CSS state.

**Q:** What does CSS 'animation-fill-mode: both' do?
**A:** Applies the 'backwards' behavior during the delay period AND the 'forwards' behavior after the animation ends.

**Q:** What CSS 'animation-iteration-count' value loops forever?
**A:** 'infinite'

**Q:** Which browser rendering stage handles transform and opacity animations?
**A:** Compositor, they skip Layout and Paint, going directly to GPU compositing.

**Q:** What does 'will-change: transform' do?
**A:** Promotes the element to a GPU compositor layer before animation starts, reducing paint cost. Use sparingly, too many promoted layers waste GPU memory.

**Q:** What is the recommended maximum Lottie file size for production web use?
**A:** Under 50KB.

**Q:** What After Effects plugin exports Lottie JSON files?
**A:** Bodymovin.

**Q:** Which After Effects feature CANNOT be exported to Lottie?
**A:** AE 3D layers with a 3D camera (z-depth, 3D positioning).

**Q:** What is the primary advantage of Rive over Lottie for interactive animations?
**A:** Rive has a built-in state machine that responds to JavaScript inputs (hover, click, custom) at runtime.

**Q:** What CSS media query detects the OS "Reduce Motion" accessibility setting?
**A:** @media (prefers-reduced-motion: reduce)

**Q:** What WCAG level requires allowing users to disable animations lasting more than 5 seconds or repeating?
**A:** AAA level (guideline 2.3.3).

**Q:** What does the CSS 'steps(8, start)' timing function do?
**A:** Creates 8 discrete jumps with no interpolation, used for sprite sheet animation.

**Q:** What is the CSS 'animation-direction: alternate' behavior?
**A:** Plays forward on odd iterations and backward on even iterations.

---

## ✨ MODULE 8: GAME VFX & SHADERS

**Q:** What is the key difference between Unity VFX Graph and Shuriken?
**A:** VFX Graph runs on the GPU via compute shaders (1M+ particles); Shuriken is CPU-based (~50K particles practical limit).

**Q:** What Unity render pipelines support VFX Graph?
**A:** URP and HDRP only, NOT the Built-in Render Pipeline.

**Q:** What are the four contexts in Unity VFX Graph?
**A:** Spawn, Initialize, Update, Output Particle.

**Q:** How does a dissolve shader work in Unity Shader Graph?
**A:** A noise texture is sampled; its value is compared to a Dissolve Amount parameter using Step or Smoothstep; the result clips the material's alpha.

**Q:** What is the Fresnel Effect node in Shader Graph used for?
**A:** Calculating the dot product of view direction and surface normal, high at glancing/edge angles, used for outlines and rim lighting.

**Q:** What is "juice" in game design?
**A:** The layered combination of visual and audio feedback effects (screen shake, hit stop, squash/stretch, VFX) that makes interactions feel satisfying.

**Q:** What are the four core juice elements?
**A:** Screen shake, hit stop, squash and stretch, and hit flash.

**Q:** How is screen shake implemented with Perlin noise in Unity?
**A:** Camera position is offset each frame by a Perlin noise value scaled by a decaying magnitude over the shake duration.

**Q:** What is the Niagara Event system in Unreal used for?
**A:** Allowing particles in one emitter to trigger responses in another (e.g., projectile death event spawning an explosion emitter).

**Q:** What does Supergiant Games' VFX design use large, high-contrast particles for in Hades?
**A:** Readability at the top-down camera's distance, small particles disappear; large high-contrast ones read clearly in peripheral vision.

**Q:** What is Bungie's "first read" principle for Destiny 2 weapon VFX?
**A:** Each weapon's VFX communicates its archetype (class, feel) before the player reads damage numbers, identifiable in peripheral vision.

**Q:** What does "overdraw" mean in particle VFX?
**A:** Rendering the same screen pixel multiple times in one frame due to overlapping transparent particles, the primary GPU cost of particle systems.

**Q:** What is a Niagara Simulation Stage?
**A:** A custom GPU compute shader pass that runs arbitrary logic on particle data, added after the standard update stage.

**Q:** What is the inverted hull technique for outlines?
**A:** Rendering a second pass of the mesh slightly scaled outward with inverted normals and a flat outline color.
