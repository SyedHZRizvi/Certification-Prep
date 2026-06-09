<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #ddd6fe; color: #5b21b6; }
.vg-tag.recommended { background: #dbeafe; color: #1e40af; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
.vg-section-title { font-size: 18px; font-weight: 800; margin: 30px 0 8px; color: #0f172a; }
.vg-section-desc { font-size: 14px; color: #64748b; margin: 0 0 4px; }
</style>

# 🎥 Module 2 Videos: Users, Groups & External Identities

> **How to use:** Click any card to open a YouTube search, pick the top current result. Pause to follow along in the Entra admin center.

## ⭐ Essential watching (~75 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+dynamic+groups+membership+rules+tutorial" data-video-id="kvBzPWMV3B0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Dynamic Group Membership Rules Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · Syntax, operators, troubleshooting</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+B2B+collaboration+vs+direct+connect" data-video-id="IbjyidsVLhM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">B2B Collaboration vs B2B Direct Connect</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 18 min · Where each lives in Entra portal</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+entitlement+management+access+packages" data-video-id="dUKLFL0wQ-c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Entitlement Management & Access Packages End-to-End</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 20 min · Catalog → package → policies</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+administrative+units+scoping+roles" data-video-id="3jgX0Hyxowk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Administrative Units & Scoped Role Assignment</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 15 min · Why "Helpdesk for Spain only" needs AUs</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+group-based+licensing+walkthrough" data-video-id="Qlucd56of4g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Group-Based Licensing Walkthrough</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 11 min · SKU assignment + conflicts</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+ID+Governance+lifecycle+workflows+joiner+leaver" data-video-id="BGE5FUHd-Uc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Lifecycle Workflows for Joiner / Mover / Leaver</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 13 min · Triggers, tasks, scheduling</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+terms+of+use+conditional+access" data-video-id="TU9J_Jg3n-0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Terms of Use + Conditional Access</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 11 min · Upload PDF, attach to policy</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Graph+PowerShell+bulk+user+import+CSV" data-video-id="_Uk1nVvt2tA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Bulk User Import via Graph PowerShell</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 14 min · CSV → New-MgUser loop</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+cross-tenant+access+settings+B2B" data-video-id="Ku64fo7iZ4Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Cross-Tenant Access Settings Per-Partner</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Trust MFA & device claims</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+External+ID+customers+B2C+overview" data-video-id="EfVs5qurGBU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Microsoft Entra External ID for Customers (B2C)</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · Consumer identity tenant</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill** | Definitive Entra/Azure content. |
| **Andy Malone MVP** | M365 admin + identity, exam-focused. |
| **Dean Cefola, Azure Academy** | Practical labs and step-by-step demos. |
| **Microsoft Mechanics** | Official launches and feature deep-dives. |
| **Travis Roberts** | Short, focused how-tos. |
| **Concepts Work** | Newer SC-300/SC-100 channel with current content. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Write a dynamic membership rule for "all Sales department members in Spain who aren't guests."
2. What's the difference between External Collaboration Settings and Cross-Tenant Access Settings?
3. Describe an end-to-end access package for "vendor admin access to Project-X with 90-day expiry + manager approval."
4. Why are Administrative Units flat (not nested)? Build the case for and against nesting.
5. List the 5 typical leaver tasks in a Lifecycle Workflow.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
