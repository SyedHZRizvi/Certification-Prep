# Shared-Layout / Config Audit
**Files audited:**
- `/Users/syed/Projects/Certification-Prep-Preview/_config.yml`
- `/Users/syed/Projects/Certification-Prep-Preview/_layouts/default.html`
- `/Users/syed/Projects/Certification-Prep-Preview/robots.txt`
- `/Users/syed/Projects/Certification-Prep-Preview/README.md`
- `/Users/syed/Projects/Certification-Prep-Preview/CLAUDE.md`
- `/Users/syed/Projects/Certification-Prep-Preview/_data/navigation.yml`
- `/Users/syed/Projects/Certification-Prep-Preview/_data/site_stats.yml`

**Auditor:** opus

---

## Findings

### F1: README.md still describes the site as a 2-cert (Scrum + PMP) course
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/README.md`
- **Line(s):** 1, 3–6, 16–18, 34–60, 86–93
- **Current text:**
  - L1: `# 🎓 The Complete SCRUM Master & PMP Course`
  - L3–6 (badges): only `Scrum-PSM I` and `PMI-PMP` badges
  - L16: `"Take you from zero (or rusty) to *passing* both the **Professional Scrum Master I (PSM I)** and **PMP** exams"`
  - L34: `## 🗺️ The Two Tracks`
  - L36: `### Track 1: 🏃 Scrum Master (PSM I)`
  - L44: `### Track 2: 📊 PMP (Project Management Professional)`
  - L54–58: `"If you have 4 months: Do Scrum first ... then PMP. ... If you have 6 weeks: Pick ONE."`
  - L86–93: Quick-start day-by-day plan points only at `01-Scrum-Master/...`
- **Why it's stale:** Repo now hosts **13 certifications** (Scrum, PMP, 2× AWS, 2× Azure, AWS AI, Azure AI, Security+, 3× ASCM, 1× ISM) per `CLAUDE.md` §0 and `_data/navigation.yml` (13 `tracks:` entries). README still represents the pre-expansion 2-track world and will confuse anyone landing on the repo on GitHub. CLAUDE.md itself says total = **112 modules · 39 practice exams · 13 flashcard decks**.
- **Suggested fix:** Rewrite README to introduce all 13 tracks (or at least mention the 13-cert hub and link to `index.html` / `_data/navigation.yml` for the canonical list). Replace "Two Tracks" with a table of all 13. Update badges and the "Final Promise" to be cert-agnostic. The day-by-day Quick Start currently hard-links Scrum first; either generalize it or rewrite as "Pick your cert, then follow that cert's README."
- **Suggested fix type:** edit (structural rewrite, but a single doc — no code/layout risk)

---

### F2: `_layouts/default.html` page-title template hardcodes Scrum/PMP-only suffix (NOTE: actually it's fine — but two embedded comments/counters in the same file ARE stale, see F3 + F4)
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_layouts/default.html`
- **Line(s):** 6
- **Current text:** `<title>{{ page.title | default: page.name | default: "Lesson" }} — The Cert Hub by Humayun Zafar</title>`
- **Why it's stale:** Not stale. False positive. The title template is cert-agnostic.
- **Suggested fix:** None — leave as-is.
- **Suggested fix type:** edit (no change needed; documenting for completeness so the next auditor doesn't re-flag it)

---

### F3: Sidebar "Your progress" widget hardcodes `0 of 18 modules complete`
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_layouts/default.html`
- **Line(s):** 360
- **Current text:** `<div id="prog-text" style="margin-top:4px;">0 of 18 modules complete</div>`
- **Why it's stale:** `18` was the 2-track total (Scrum 8 + PMP 10). Across all 13 tracks the numbered-module total is now **112** (per CLAUDE.md §0 / §6). The JS at L582–603 actually recomputes `total` at runtime by scanning the rendered sidebar, so this hardcoded `18` is only visible for a flash before JS runs — but it is still wrong as static HTML and would mislead anyone viewing source or running with JS disabled.
- **Suggested fix:** Replace the hardcoded text with a Liquid expression that sums numbered modules from `site.data.navigation.tracks`. Example:
  ```liquid
  {%- assign total_modules = 0 -%}
  {%- for tr in site.data.navigation.tracks -%}
    {%- assign total_modules = total_modules | plus: tr.modules.size -%}
  {%- endfor -%}
  <div id="prog-text" style="margin-top:4px;">0 of {{ total_modules }} modules complete</div>
  ```
- **Suggested fix type:** Liquid-loop (reporting only — touches `_layouts/default.html`, which CLAUDE.md §1.1 forbids modifying without explicit human approval)

---

### F4: Inline JS comment in default.html still references "both tracks" with `8 + 10 = 18` math
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_layouts/default.html`
- **Line(s):** 590
- **Current text:** `        // Total modules across both tracks (numbered items only): 8 + 10 = 18`
- **Why it's stale:** Refers to "both tracks" as if Scrum + PMP were the only two. Comment-only — does not affect rendered output (the line below it computes total dynamically from the DOM). Still misleading for the next maintainer reading the source.
- **Suggested fix:** Replace with: `// Total numbered modules summed across all tracks in _data/navigation.yml`
- **Suggested fix type:** edit (reporting only — `_layouts/default.html` is on the do-not-touch list per CLAUDE.md §1.1; trivial comment-only change but should still be human-approved)

---

### F5: `extra_links` in navigation.yml is structurally inconsistent with `tracks` (uses `title:` while tracks also use `title:` — same key, OK; but `extras` within tracks reuses `title:` too — verify uniform shape)
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_data/navigation.yml`
- **Line(s):** 704–722
- **Current text:** `extra_links` entries each have `title`, `url`, `icon`. Used in `default.html` L402–406.
- **Why it's stale:** Not stale — the shape is consistent and the layout consumes it correctly. Targets (`/00-Study-Plan/Quick-Start-Guide/`, `/Resources/Books-and-Links/`, etc.) all exist on disk (verified `00-Study-Plan/` and `Resources/` directories contain the matching `.md` files). Flagging just to confirm the link section is sound.
- **Suggested fix:** None.
- **Suggested fix type:** edit (no change needed; documented as verified-clean)

---

### F6: Track ordering in navigation.yml puts CompTIA Security+ (folder `09-`) LAST, after ASCM/ISM tracks (folders 10–13)
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_data/navigation.yml`
- **Line(s):** track block order — `secplus` block at L635 (last) although it maps to `base: "/09-CompTIA-Security-Plus/"` (folder 09)
- **Current text:** Order of `- id:` entries:
  1. scrum (L5)
  2. pmp (L56)
  3. aws-clp (L113) → folder 03
  4. aws-saa (L164) → folder 04
  5. az-900 (L221) → folder 05
  6. az-104 (L266) → folder 06
  7. aws-aif (L323) → folder 07
  8. az-ai102 (L374) → folder 08
  9. cscp (L425) → folder 10  **(out of order)**
  10. cpim (L482) → folder 11
  11. cltd (L533) → folder 12
  12. cpsm (L584) → folder 13
  13. secplus (L635) → folder 09  **(out of order — should be position 9)**
- **Why it's stale:** When tracks 10–13 (ASCM/ISM Supply Chain) were appended, `secplus` was not re-positioned. The sidebar therefore renders Security+ at the bottom even though its folder number is 09. This contradicts the canonical order presented in `CLAUDE.md` §0 (which lists Security+ as cert #9, between Azure AI Engineer and ASCM CSCP). Also affects the SEO/scan order of every page on the site.
- **Suggested fix:** Move the entire `secplus` track block (currently L635–690) so it sits between `az-ai102` (ends L423) and `cscp` (begins L425). No content/key changes — just reorder.
- **Suggested fix type:** edit (reporting only — `_data/navigation.yml` is on the do-not-touch list per CLAUDE.md §1.1; this is a structural reorder, not a "small low-risk fix")

---

### F7: "Final Mock Exam" entries are inconsistent — Scrum & PMP have no Q-count/time suffix; every other track does
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_data/navigation.yml`
- **Line(s):** 49 (`scrum`), 106 (`pmp`) versus L157, L213, L259, L315, L367, L417, L474, L525, L576, L627, L684 (every newer track has `Final Mock Exam (NNq / NNmin)`)
- **Current text:**
  - L49 (scrum): `title: Final Mock Exam`
  - L106 (pmp):  `title: Final Mock Exam`
  - L157 (aws-clp): `title: Final Mock Exam (65q / 90min)`
  - L684 (secplus): `title: Final Mock Exam (90q / 90min + PBQs)`
- **Why it's stale:** When tracks 03–13 were added, the sidebar title pattern was upgraded to include the real exam Q-count and time, but Scrum and PMP — the two original tracks — were never back-filled. The student loses useful at-a-glance info for the two oldest certs.
- **Suggested fix:** Update L49 to `title: Final Mock Exam (80q / 60min)` (PSM I is 80q/60min) and L106 to `title: Final Mock Exam (180q / 230min)` (PMP is 180q/230min). Confirm exact counts against the live mock-exam content for each cert before editing, since CLAUDE.md §1.1 also forbids touching `01-Scrum-Master/` and `02-PMP/` content.
- **Suggested fix type:** edit (reporting only — touches `_data/navigation.yml`, which is on the do-not-touch list)

---

### F8: `_data/site_stats.yml` is not consumed anywhere inside the shared infra (layout/config) — only by `index.html` (out of scope)
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_data/site_stats.yml`
- **Line(s):** entire file (L1–28)
- **Current text:** Defines `practice_question_estimate: "8,000+"`, `total_hours_estimate: 600`, and a `trademark_holders` list with 7 entries covering all cert families.
- **Why it's stale:** Not stale in itself. Trademark list correctly covers all 13 certs (Scrum.org, PMI, AWS, Microsoft, CompTIA, ASCM/APICS, ISM). However, none of the files in MY audit scope (`_layouts/default.html`, `_config.yml`, `robots.txt`, README, CLAUDE.md, `_data/navigation.yml`) reference `site.data.site_stats` — confirmed via grep. The footer in `default.html` (L531–533, L410–414) and the sidebar copyright don't surface the trademark notice. Worth flagging because `default.html`'s footer is a natural place to surface the trademark holders list, and right now it's only conveyed (presumably) via `index.html`. **Module sub-pages therefore display NO trademark acknowledgment**, which may matter for the cert bodies whose marks (PMP®, AWS, etc.) appear on every page.
- **Suggested fix:** Consider adding a small trademark notice in the footer of `_layouts/default.html` that loops over `site.data.site_stats.trademark_holders`. Example, replacing/augmenting L531–533:
  ```liquid
  <footer class="pagefoot">
    © 2026 <strong>Humayun Zafar</strong> · 📍 Toronto, Canada · All Rights Reserved · <a href="{{ '/' | relative_url }}">Course Home</a>
    <div style="margin-top:8px;font-size:11px;color:#94a3b8;">
      Trademarks of:
      {%- for h in site.data.site_stats.trademark_holders -%}
        {{ h.name }}{% unless forloop.last %} · {% endunless %}
      {%- endfor -%}.
      All product/cert names are property of their respective owners.
    </div>
  </footer>
  ```
- **Suggested fix type:** Liquid-loop (reporting only — touches `_layouts/default.html`)

---

### F9: CLAUDE.md cert list is current and correct (no change needed)
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/CLAUDE.md`
- **Line(s):** 10–28
- **Current text:** Lists all 13 certs with correct folder names and module counts (Scrum 8, PMP 10, AWS CLP 8, AWS SAA 10, AZ-900 6, AZ-104 10, AWS AIF 8, AZ AI-102 8, Security+ 10, CSCP 10, CPIM 8, CLTD 8, CPSM 8) summing to 112. Total of 13 tracks matches `_data/navigation.yml`.
- **Why it's stale:** Not stale. Cert list is accurate per audit scope (the instructions said "only check that the cert list is current").
- **Suggested fix:** None.
- **Suggested fix type:** edit (no change needed; documented as verified-clean)
- **Note:** §1.1 of CLAUDE.md still says "course folder (`01-` through `09-`)" in the §2.1 "Per-course layout" intro line — this is a stale subsection bound but is OUTSIDE my requested scope (I was told to only check the cert list). Flagging for awareness; recommend the README-audit agent or another rulebook agent address it.

---

### F10: CLAUDE.md §2.3 (Index page and navigation) hardcodes "exactly 9 curriculum cards" and "exactly 9 `tracks:` entries" — now wrong (13)
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/CLAUDE.md`
- **Line(s):** 97–99
- **Current text:**
  - L97: `- \`index.html\` contains exactly 9 curriculum cards (one per course), all linked correctly.`
  - L98: `- \`_data/navigation.yml\` has exactly 9 \`tracks:\` entries with module slugs matching the folder structure.`
  - L99: `- The homepage hero references all 9 certifications by their official IDs.`
- **Why it's stale:** Repo now has 13 tracks (verified above). These rules say "exactly 9" — if a verifier ever uses CLAUDE.md as a spec it would fail.
- **Suggested fix:** Update L97–99 to read "exactly 13" everywhere "9" appears. Also note §6 frozen-baseline still says "9 course directories / 78 modules / 27 practice exams" (L183–185) — also out of date.
- **Suggested fix type:** edit (reporting only — the user explicitly said "only check that the cert list is current; do not rewrite" CLAUDE.md, so I am NOT editing this. Flagging as a finding because it directly contradicts the 13-cert reality.)

---

### F11: `robots.txt` is clean and correct
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/robots.txt`
- **Line(s):** entire file
- **Current text:** Disallows every bot site-wide. No cert names anywhere.
- **Why it's stale:** Not stale. The file is cert-agnostic and remains appropriate (the meta-robots in `default.html` L10–12 is also `noindex,nofollow`, matching).
- **Suggested fix:** None.
- **Suggested fix type:** edit (no change needed; verified-clean)

---

### F12: `_config.yml` title + description still said "Scrum Master & PMP Course" — FIXED INLINE
- **File:** `/Users/syed/Projects/Certification-Prep-Preview/_config.yml`
- **Line(s):** 2–3
- **Current text (before fix):**
  - L2: `title: "The Cert Hub — Scrum Master & PMP Course"`
  - L3: `description: "A complete self-study course for the Scrum Master (PSM I) and PMP exams, designed and authored by Humayun Zafar."`
- **Why it's stale:** Title and description never updated when the site expanded to 9 then 13 certs. This is the highest-impact stale string in the audited scope because `<title>` (rendered via `default.html` L6) is the only SEO-visible string when a page omits its own title (e.g. a directory index page) and `site.description` is the meta-description fallback in `default.html` L7.
- **Suggested fix (applied):**
  - L2: `title: "The Cert Hub — 13 Certification Study Courses"`
  - L3: `description: "Free, story-driven self-study courses for 13 industry certifications — Scrum (PSM I), PMP, AWS (CLF-C02, SAA-C03, AIF-C01), Azure (AZ-900, AZ-104, AI-102), CompTIA Security+ (SY0-701), and ASCM/ISM supply chain (CSCP, CPIM, CLTD, CPSM). Designed and authored by Humayun Zafar."`
- **Suggested fix type:** edit — **APPLIED IN THIS AUDIT** (see "Issues you fixed yourself" below).

---

## Issues you fixed yourself (low-risk only)

- **F12 / `_config.yml` L2–3 (title + description)** — Replaced the stale "Scrum Master & PMP Course" title and 2-cert description with cert-agnostic copy that names all 13 tracks. This was explicitly green-lit in the audit brief ("`_config.yml` title and description still mention 'Scrum Master & PMP Course' — almost certainly stale; should mention all cert areas" and "You MAY make small low-risk fixes yourself (... obviously stale 'Scrum Master & PMP' → '13 certifications' in _config.yml title/description)"). No edits made to `_layouts/default.html`, `_data/navigation.yml`, README.md, or CLAUDE.md — all left for human review per scope instructions.

---

## Open questions

1. **README rewrite scope (F1):** Should the root README become a comprehensive 13-cert landing page, or a short README that just points to `index.html` / the `_data/navigation.yml`? The current draft reads like documentation for someone browsing GitHub directly; the polished UX is at `index.html`. Two valid paths — need a human call.

2. **default.html sidebar "modules complete" counter (F3):** The user-visible behavior is already correct (JS rewrites `prog-text` at load). Is the static fallback text worth changing, given CLAUDE.md §1.1 forbids `default.html` edits without approval? Probably yes — but needs explicit sign-off.

3. **navigation.yml track reorder (F6):** Moving `secplus` to position 9 is correct for folder-numeric order but means CompTIA appears between Azure AI Engineer (Microsoft GenAI) and ASCM CSCP (Supply Chain) — a sensible boundary. Confirm desired sidebar/SEO ordering. (Alternative: rename the folder to `13a-` or similar — out of scope, and CLAUDE.md §1.1 forbids course-folder changes.)

4. **Final-mock-exam Q-count suffix for Scrum/PMP (F7):** Confirm `80q / 60min` (PSM I) and `180q / 230min` (PMP) before any edit lands. Live mock-exam files in `01-Scrum-Master/Practice-Exams/` and `02-PMP/Practice-Exams/` are out of my scope to verify.

5. **Trademark footer on module pages (F8):** Do the cert bodies (PMI, AWS, etc.) require trademark acknowledgment on every page or only on the home page? If on every page, the layout footer is the only place to surface `site.data.site_stats.trademark_holders` site-wide. Recommend asking legal/product before adding.

6. **CLAUDE.md "exactly 9" claims (F10):** Out of scope per audit brief, but contradicts repo reality. Flagging for whoever owns the rulebook.
