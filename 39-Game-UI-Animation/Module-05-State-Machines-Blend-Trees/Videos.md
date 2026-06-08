---
title: "Module 5 Videos: State Machines & Blend Trees"
---

# 🎬 Module 5 Videos: State Machines & Blend Trees

> All links open a YouTube search. Recommended sources: GDC, Jason Weimann, Unreal Engine official, Unity official.

---

## 🔴 Essential (Watch First)

<div class="vg-card-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=Unity+Animator+AnyState+transition+design+tutorial" data-video-id="">
  <div class="vg-card-thumb">🔄</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Unity AnyState Transitions, Design and Pitfalls</div>
    <div class="vg-card-sub">Jason Weimann / Various · 20–30 min</div>
    <p>How to use AnyState transitions for Death, Knockdown, and Dodge, configure interruption priority, and prevent transition loops.</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=game+animation+state+machine+responsive+design+interrupt+conditions" data-video-id="">
  <div class="vg-card-thumb">🎮</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Responsive Animation: Interrupt Conditions and Blend Times</div>
    <div class="vg-card-sub">Various · 20–25 min</div>
    <p>How transition interrupt conditions, blend duration, and blend tree lerp speed combine to create responsive or sluggish animation feel, with measurable comparisons.</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=GDC+locomotion+state+machine+design+action+game" data-video-id="">
  <div class="vg-card-thumb">🏃</div>
  <div class="vg-card-body">
    <div class="vg-card-title">GDC: Locomotion State Machine Design for Action Games</div>
    <div class="vg-card-sub">GDC Animation Summit · 30–45 min</div>
    <p>Animation Summit talk on designing locomotion state machines that feel responsive: grounded, airborne, landing states, coyote time, and tuning blend parameters.</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=Unity+additive+animation+layer+breathing+lean+tutorial" data-video-id="">
  <div class="vg-card-thumb">➕</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Unity Additive Animation Layers, Breathing, Lean & Secondary Motion</div>
    <div class="vg-card-sub">Jason Weimann / Various · 20–30 min</div>
    <p>Author additive clips (delta from reference pose), set up an additive layer in the Animator, and add breathing and lean motion on top of base locomotion.</p>
  </div>
</a>

</div>

---

## 🟡 Recommended

<div class="vg-card-grid">

<a class="vg-card" data-video-id="dpvAIeBv6Ck" href="https://www.youtube.com/results?search_query=Unreal+Engine+state+machine+transitions+interrupt+conditions" data-video-id="">
  <div class="vg-card-thumb">🔵</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Unreal Engine State Machine Transition Rules, Advanced</div>
    <div class="vg-card-sub">Unreal Engine Official / Various · 20–30 min</div>
    <p>Configure transition rules in Unreal's AnimGraph state machine: priority, interruption, blend type (standard, inertialization), and custom transition logic.</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=game+animation+coyote+time+ledge+jump+platformer+tutorial" data-video-id="">
  <div class="vg-card-thumb">😸</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Coyote Time, Animation State Handling for Platformer Ledge Jumps</div>
    <div class="vg-card-sub">Various · 15–20 min</div>
    <p>Implement coyote time in the animation state machine: the edge-peek animation window and correct transition to fall state after the grace period expires.</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=Unity+2D+blend+tree+directional+locomotion+strafe" data-video-id="">
  <div class="vg-card-thumb">🗺️</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Unity 2D Blend Tree, Directional Locomotion with Strafing</div>
    <div class="vg-card-sub">Jason Weimann / Various · 20–25 min</div>
    <p>Set up a 2D Freeform Directional blend tree for a third-person character with forward, backward, and strafe clips; tune the blend position lerp speed.</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=GDC+Destiny+animation+state+machine+Bungie+responsive" data-video-id="">
  <div class="vg-card-thumb">🚀</div>
  <div class="vg-card-body">
    <div class="vg-card-title">GDC: Destiny Animation, Bungie's Responsive Animation System</div>
    <div class="vg-card-sub">GDC · 30–45 min</div>
    <p>Bungie's animation engineers on building Destiny/Destiny 2's FPS animation system: state machine architecture, transition responsiveness, and per-weapon animation layering.</p>
  </div>
</a>

</div>

---

## 🟢 Optional (Deep Dives)

<div class="vg-card-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=game+animation+input+buffering+fighting+game+queue" data-video-id="">
  <div class="vg-card-thumb">🥊</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Input Buffering and Animation Queuing in Fighting Games</div>
    <div class="vg-card-sub">Various · 20–30 min</div>
    <p>How input buffering (queuing player inputs during animation lock) interacts with state machine transitions, the fighting game model and how action games adapt it.</p>
  </div>
</a>

<a class="vg-card" data-video-id="oJ0DG3INCEk" href="https://www.youtube.com/results?search_query=Unreal+Engine+inertialization+animation+blending+tutorial" data-video-id="">
  <div class="vg-card-thumb">🌊</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Unreal Engine Inertialization, Better Animation Blending</div>
    <div class="vg-card-sub">Unreal Engine Official · 20–30 min</div>
    <p>Unreal's inertialization blend type produces smoother transitions than traditional crossfades by preserving momentum, reduce blend artifacts without extending blend time.</p>
  </div>
</a>

<a class="vg-card" data-video-id="dpvAIeBv6Ck" href="https://www.youtube.com/results?search_query=hierarchical+state+machine+sub+state+machine+Unity+Unreal" data-video-id="">
  <div class="vg-card-thumb">🏗️</div>
  <div class="vg-card-body">
    <div class="vg-card-title">Hierarchical State Machines, Sub-State Machines in Unity & Unreal</div>
    <div class="vg-card-sub">Various · 20–25 min</div>
    <p>Organize complex animation controllers with sub-state machines: group grounded locomotion, airborne, and combat into nested sub-machines for scalability.</p>
  </div>
</a>

</div>
