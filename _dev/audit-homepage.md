# Homepage Audit Report
**File:** index.html
**Auditor:** opus

## Summary
Audited `/Users/syed/Projects/Certification-Prep-Preview/index.html` (944 lines) against the current 13-track state. The footer and hero stats blocks are correctly Liquid-driven and untouched. The cert cards and per-track quick-links are all accurate and present for all 13 tracks. Anchor links all resolve (`#curriculum`, `#how`, `#start`, `#author` all exist as section IDs). No legacy "Two Paths" / "Nine Paths" sections remain.

The remaining stale copy is concentrated in SEO meta tags (head) and three share-link URL-encoded texts (which I fixed inline). Everything else passes.

## Findings

### F1: Meta description still says "9 industry-recognized certifications" and enumerates only 9
- **Line:** 11
- **Current text:** `"A comprehensive, story-driven self-study hub for 9 industry-recognized certifications: PSM I, PMP, AWS CLF-C02, AWS SAA-C03, AZ-900, AZ-104, AWS AI Practitioner (AIF-C01), Azure AI Engineer (AI-102), and CompTIA Security+ (SY0-701). Designed and authored by Syed Humayun Zafar Rizvi, Toronto, Canada."`
- **Why it's stale:** Site now hosts 13 certs. The 4 supply-chain certs (ASCM CSCP, CPIM, CLTD, ISM CPSM) are missing entirely and the count is wrong. This is the single highest-priority issue because search engines and social previews use this text, and the homepage already iterates 13 cards visually.
- **Suggested fix:** `"A comprehensive, story-driven self-study hub for 13 industry-recognized certifications across Project Management, Cloud, AI/GenAI, Cybersecurity, and Supply Chain — PSM I, PMP, AWS CLF-C02 & SAA-C03, AZ-900 & AZ-104, AIF-C01, AI-102, CompTIA Security+ (SY0-701), ASCM CSCP/CPIM/CLTD, and ISM CPSM. Designed and authored by Syed Humayun Zafar Rizvi, Toronto, Canada."`
- **Suggested fix type:** edit

### F2: og:description still says "9 industry certs" and omits Security+/supply-chain framing
- **Line:** 27
- **Current text:** `"Pass PSM I, PMP, AWS, Azure, GenAI, and CompTIA Security+ — 9 industry certs taught the same story-driven way. By Syed Humayun Zafar Rizvi (Toronto, Canada)."`
- **Why it's stale:** Same root cause as F1 — outdated count, missing supply-chain track. This is what LinkedIn/Twitter/WhatsApp preview cards will render.
- **Suggested fix:** `"Pass PSM I, PMP, AWS, Azure, GenAI, CompTIA Security+, and ASCM/ISM supply-chain certs — 13 industry exams taught the same story-driven way. By Syed Humayun Zafar Rizvi (Toronto, Canada)."`
- **Suggested fix type:** edit

### F3: og:title and <title> tag omit Supply Chain category
- **Lines:** 10, 26
- **Current text (line 10):** `"The Cert Hub — PM · Cloud · AI · Cybersecurity Certifications by Syed Humayun Zafar Rizvi"`
- **Current text (line 26):** `<meta property="og:title" content="The Cert Hub — PM · Cloud · AI · Cybersecurity Certifications" />`
- **Why it's stale:** The hero subhead correctly lists 5 categories (PM, Cloud, AI/GenAI, Cybersecurity, **Supply Chain**), and the section H3 on line 592 says "Supply Chain & Operations." Title tags don't reflect this.
- **Suggested fix (line 10):** `<title>The Cert Hub — PM · Cloud · AI · Cybersecurity · Supply Chain Certifications by Syed Humayun Zafar Rizvi</title>`
- **Suggested fix (line 26):** `<meta property="og:title" content="The Cert Hub — PM · Cloud · AI · Cybersecurity · Supply Chain Certifications" />`
- **Suggested fix type:** edit

### F4: Hero subhead anchors "social proof" to old "PSM I & PMP" framing only
- **Line:** 270
- **Current text:** `"taught the same story-driven way that's made our PSM I &amp; PMP tracks work for thousands of students."`
- **Why it's stale:** Strictly speaking, this is true (PSM/PMP are the original tracks). But framing the entire 13-cert lineup's credibility on just the two oldest tracks reads as if the page wasn't updated when Cloud/AI/Sec/Supply Chain were added. It's the only place the rest of the document refers back to "our PSM I & PMP tracks" — a vestige of the 2-cert era hero copy.
- **Suggested fix:** Either soften the closing clause to be track-agnostic (`"taught the same story-driven way that's helped thousands of students pass."`), or generalize (`"taught the same story-driven way that's made our flagship PM tracks work for thousands of students — now extended across cloud, AI, cybersecurity, and supply chain."`). Lean toward the first — shorter, no name-checking.
- **Suggested fix type:** edit

### F5: PM category subhead — verify "foundation of professional delivery" still fits with 13 tracks
- **Line:** 343
- **Current text:** `"2 flagship certifications · the foundation of professional delivery"`
- **Why it's stale:** Borderline. The number "2" is correct (Scrum + PMP); the framing as "the foundation" implicitly subordinates the other 11 tracks. With supply chain added, "the foundation of professional delivery" is less clearly the right frame (supply chain isn't downstream of PM). Likely fine to leave, but flagging for orchestrator's voice judgment.
- **Suggested fix:** Optional rephrase like `"2 flagship project-management certifications"` — drops the implicit hierarchy. Or keep as-is if the editorial intent was to position PM as the unifying discipline.
- **Suggested fix type:** edit (optional)

### F6: Hero hardcodes 13 cert pills (would auto-update if Liquid-driven)
- **Lines:** 272–286
- **Current text:** 13 hand-written `<span class="pill">…</span>` rows, one per cert, with hardcoded icons and short labels (e.g. `🏃 PSM I`, `📊 PMP`, `☁️ AWS CLF-C02`, …, `🤝 ISM CPSM`).
- **Why it's stale:** Today's labels are correct, but next time a cert is added or relabeled this list and the bottom-CTA list (Lines 785–797) will drift out of sync with `_data/navigation.yml`. `navigation.yml` already has every field needed: `icon`, `title`, and `subtitle` (which contains the exam code, e.g. "AZ-900 Foundation Certification"). This is identical conceptually to the per-track quick-link list at the bottom.
- **Suggested fix (Liquid sketch):**
  ```liquid
  {% for t in site.data.navigation.tracks %}
    <span class="pill bg-white/10 text-slate-200 ring-1 ring-white/20" style="font-size:11px;">
      {{ t.icon }} {{ t.subtitle | split: " " | first | default: t.title }}
    </span>
  {% endfor %}
  ```
  Note: this needs a small per-track "short label" decision (current pills use exam codes like `AWS CLF-C02`, `AZ-900`, `Security+ SY0-701`, but track titles like `Scrum Master`, `PMP`, `ASCM CSCP`). A new `short_label:` field in `navigation.yml` would be the cleanest answer. Flagged as **open question** below.
- **Suggested fix type:** Liquid-loop (requires data-model decision)

### F7: Bottom-CTA per-track quick-link list hardcodes all 13 tracks
- **Lines:** 785–797
- **Current text:** 13 hardcoded `<a href="01-Scrum-Master/">…</a>` rows with per-track hover colors and short labels.
- **Why it's stale:** Same problem as F6 — drifts out of sync if `navigation.yml` changes. Each row also encodes a Tailwind `hover:ring-<color>-400 hover:text-<color>-700` pattern that mirrors `track.color` in navigation.yml. Could be driven by:
  ```liquid
  {% for t in site.data.navigation.tracks %}
    <a href="{{ t.base | remove_first: '/' }}"
       class="… hover:ring-{{ t.color }}-400 hover:text-{{ t.color }}-700 …">
      {{ t.icon }} {{ t.short_label | default: t.title }}
    </a>
  {% endfor %}
  ```
  ⚠️ Caveat: Tailwind via CDN (line 30) **may not pick up dynamically generated `hover:ring-{color}` class names** because Tailwind's JIT scans literal strings. If you go this route, add a safelist or use inline `style="--tw-ring-color: {{ t.color_to }}"` instead.
- **Suggested fix type:** Liquid-loop (requires Tailwind-safelisting decision; see open question)

### F8: Trademark notice in footer omits cert codes used in hero pills
- **Line:** 897
- **Current text:** `"All trademarks (PMP, PSM, AWS, Azure, AIF-C01, AI-102, Security+, SY0-701, CSCP, CPIM, CLTD, CPSM) belong to their respective owners"`
- **Why it's stale:** Minor — the explicit cert-code list omits CLF-C02 and SAA-C03 (AWS-specific exam codes that are mentioned by name in hero pills, card subtitles, and meta description), and omits AZ-900 / AZ-104 (Azure exam codes that are also referenced elsewhere). Either be exhaustive (add them) or be representative (the current list is fine if intentionally abbreviated, but it's inconsistent because it does spell out SY0-701, AIF-C01, AI-102 by code).
- **Suggested fix:** Either:
  (a) drop the in-line list and just say "All cert-program trademarks belong to their respective owners (Scrum.org, PMI®, AWS, Microsoft, CompTIA, ASCM/APICS, Institute for Supply Management)," letting the `{% for h in site.data.site_stats.trademark_holders %}` block remain authoritative; or
  (b) add the missing codes: `"PMP, PSM, AWS (CLF-C02, SAA-C03), Azure (AZ-900, AZ-104, AI-102), AIF-C01, Security+ (SY0-701), CSCP, CPIM, CLTD, CPSM"`.
  Option (a) is more maintenance-resilient.
- **Suggested fix type:** edit (orchestrator picks the variant)

### F9: "How It Works" quiz card says "10–15 questions w/ explanations" — does that match reality?
- **Line:** 754
- **Current text:** `"10–15 questions w/ explanations"`
- **Why it's stale:** Per CLAUDE.md §2.2: new courses (03–13) have ≥24 quiz questions; legacy (01–02) are grandfathered at ≥20. So "10–15" is a substantial undercount of every track's per-module quiz. (Note: this is per-module, not per-track-totals — still seems off if real quizzes are 20+.)
- **Suggested fix:** `"20+ questions with explanations"` (matches the floor; truthful and doesn't oversell).
- **Suggested fix type:** edit

### F10: Reading "~25 min" estimate in "How It Works" — verify against actual Reading.md sizes
- **Line:** 744
- **Current text:** `"Story-driven lesson, ~25 min"`
- **Why it's stale:** Possibly fine. CLAUDE.md §2.2 says Reading.md is 250–550 lines. At ~250 wpm reading speed, that's roughly 15–40 minutes depending on length. "~25 min" is a fair midpoint, but if the homepage now claims ~600 total hours over 112 modules (= ~5.4 hr/module average across all materials, with reading being one of four artifacts), 25 min/reading is consistent. No change needed — flagging only for verification.
- **Suggested fix:** No change recommended. Confirm with orchestrator.
- **Suggested fix type:** (no action)

## Issues you fixed yourself (low-risk)
- **Line 806 (WhatsApp share URL):** Updated URL-encoded body text from `"9 industry certifications — PM, Cloud, AI, Cybersecurity"` → `"13 industry certifications — PM, Cloud, AI, Cybersecurity & Supply Chain"`.
- **Line 808 (Email share URL):** Updated subject from `"…PM, Cloud, AI, Cybersecurity"` → `"…PM, Cloud, AI, Cybersecurity & Supply Chain"` and body from `"9 industry certifications — Scrum Master, PMP, AWS, Azure, GenAI, and CompTIA Security+"` → `"13 industry certifications — Scrum Master, PMP, AWS, Azure, GenAI, CompTIA Security+, and ASCM/ISM supply chain"`.
- **Line 809 (Twitter/X share URL):** Updated text from `"9 certifications across PM, Cloud, AI & Cybersecurity"` → `"13 certifications across PM, Cloud, AI, Cybersecurity & Supply Chain"`.

Rationale: these are URL-encoded body-copy strings (not structural), they referenced the old "9" count visibly to users who click share, and they are surgical single-substring substitutions. No structural changes to the share UI itself.

## Open questions for the orchestrator
1. **Pill / quick-link short labels:** F6 and F7 (the hero pills and bottom-CTA quick-link list) are both hardcoded but could be Liquid-driven from `_data/navigation.yml`. Doing so would require either (a) adding a `short_label:` field to each track in `navigation.yml`, since current short labels mix exam codes (`AWS CLF-C02`, `AZ-900`) and track names (`PMP`, `ASCM CSCP`), or (b) accepting `t.title` for all (loses the exam code on AWS/Azure pills). Recommend (a). Should this be done in this audit cycle or deferred?
2. **Hover color classes in F7:** If F7 is converted to a Liquid loop, the Tailwind CDN may not pick up dynamically generated `hover:ring-<color>-400` classnames. Want me to switch to a `style="--tw-ring-color:…"` approach, add a safelist, or just hand-keep the loop with a `case`/`if` block per color? (Tailwind CDN docs recommend avoiding dynamic class names entirely.)
3. **Footer trademark line (F8):** Prefer the cleaner generalized phrasing or the exhaustive cert-code list?
4. **PM category subhead (F5):** Is "foundation of professional delivery" the intended editorial frame for the PM section now that supply chain is on the site (which isn't downstream of PM)? Optional rephrase suggested.
5. **Quiz count claim (F9):** Confirm whether "20+ questions with explanations" is the right replacement for "10–15 questions w/ explanations" — that matches the verifier's floor but may understate actual quiz length in some modules.
