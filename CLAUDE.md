# CLAUDE.md — Rulebook for AI Agents Working on This Repository

> **Read this entire file before touching any code.**
> This is the human-readable rulebook. The machine-enforced version is `scripts/verify-baseline.py` — every rule below is also asserted there. Run it before every commit.

---

## 0. Project identity

This is **The Cert Hub** — a Jekyll site authored by Humayun Zafar. It hosts story-driven self-study courses for **27 industry certifications and professional tracks**:

| # | Folder | Cert / Track | Modules |
|---|---|---|---|
| 1 | `01-Scrum-Master` | PSM I | 8 |
| 2 | `02-PMP` | PMP | 10 |
| 3 | `03-AWS-Cloud-Practitioner` | CLF-C02 | 8 |
| 4 | `04-AWS-Solutions-Architect-Associate` | SAA-C03 | 10 |
| 5 | `05-Azure-Fundamentals` | AZ-900 | 6 |
| 6 | `06-Azure-Administrator` | AZ-104 | 10 |
| 7 | `07-AWS-AI-Practitioner` | AIF-C01 | 8 |
| 8 | `08-Azure-AI-Engineer` | AI-102 | 8 |
| 9 | `09-CompTIA-Security-Plus` | SY0-701 | 10 |
| 10 | `10-ASCM-CSCP` | CSCP (Supply Chain Pro) | 10 |
| 11 | `11-ASCM-CPIM` | CPIM (Planning & Inventory) | 8 |
| 12 | `12-ASCM-CLTD` | CLTD (Logistics & Distribution) | 8 |
| 13 | `13-ISM-CPSM` | CPSM (Supply Management) | 8 |
| 14 | `14-AI-Marketing-Foundations` | AI Marketing — Foundations | 10 |
| 15 | `15-AI-Marketing-Practitioner` | AI Marketing — Practitioner | 10 |
| 16 | `16-AI-Marketing-Strategist` | AI Marketing — Strategist | 10 |
| 17 | `17-AI-Marketing-Entrepreneur` | AI Marketing — Entrepreneur | 8 |
| 18 | `18-AI-Marketing-Capstone-Portfolio` | AI Marketing — Capstone | 8 |
| 19 | `19-Bitcoin-Cryptocurrency` | Bitcoin & Crypto (Princeton → CBP → CBSA → UNic MSc) | 10 |
| 20 | `20-E-Commerce` | E-Commerce (Google → Adobe Commerce → Wharton) | 10 |
| 21 | `21-CompTIA-A-Plus` | CompTIA A+ (Core 1 220-1101 + Core 2 220-1102) | 12 |
| 22 | `22-CompTIA-Network-Plus` | CompTIA Network+ (N10-009) | 8 |
| 23 | `23-CompTIA-Linux-Plus` | CompTIA Linux+ (XK0-005) | 8 |
| 24 | `24-CompTIA-Server-Plus` | CompTIA Server+ (SK0-005) | 8 |
| 25 | `25-Windows-Server-Hybrid-Admin` | Microsoft Windows Server Hybrid Admin (AZ-800 + AZ-801) | 10 |
| 26 | `26-Microsoft-Endpoint-Admin` | Microsoft Endpoint Administrator (MD-102) | 8 |
| 27 | `27-Microsoft-Identity-Access-Admin` | Microsoft Identity & Access Admin (SC-300) | 8 |

Total: **240 modules · 81 practice exams · 27 flashcard decks · 27 READMEs**.

The new IT Systems Administration track (courses 21–27) is engineered to the same Cornell · Harvard · Princeton · Stanford pedagogical standard as the rest of the site. AZ-900 (course 05) and AZ-104 (course 06) are cross-referenced into this track on the homepage since they form part of any modern sysadmin's training path.

The frozen baseline tagged `stable-2026-05-20` is the canonical reference for "what this repo should look like." Any deviation must either (a) maintain or improve every assertion in `verify-baseline.py`, or (b) update both the assertions and `CLAUDE.md` in the same commit.

---

## 1. Hard prohibitions — these will revert your work

### 1.1 Never modify these without explicit human approval

- Any file inside `01-Scrum-Master/` or `02-PMP/` — students are actively using these.
- `_layouts/default.html` — layout changes can break every page on the site.
- `_data/navigation.yml` — sidebar navigation; structural changes affect every module page.
- `_config.yml` — Jekyll config; one wrong line breaks the build.
- `assets/quiz.js` — the interactive quiz engine; format is locked.
- `assets/protect.js` — content protection; tampering with this weakens copy-prevention.
- `functions/lib/superusers.js` — hardcoded super-user list (`syed@transcrypts.com`). This is the deliberate failsafe so the owner cannot be locked out by a KV wipe or compromise. Never move this to env vars or KV. Never delete the list. Only edit if the owner's email itself changes.
- Anything under `functions/` — Cloudflare Pages Functions enforce the auth gate. Subtle changes here can silently disable entitlement checking. See §9 before touching.
- The contents of `_dev/backup-practice-exams/` — these are immutable backups for rollback.

If you have a strong reason to change one of the above, ask the human first. Do not "improve" the layout, "modernize" the navigation, or "tidy up" the existing courses without explicit go-ahead.

### 1.2 Never commit any of the following

- Direct YouTube video URLs **in `href` attributes** (`youtube.com/watch?v=...` or `youtu.be/...`). The `href` of every `.vg-card` link must remain a `youtube.com/results?search_query=...` URL so dead-link rot gracefully degrades to a live search.
- Copyrighted exam-dump questions. All practice and quiz questions must be original, written in the spirit of the published exam objectives.
- Secrets, API keys, `.env` files, or credentials. There are none in this repo. Keep it that way.
- Generated build output: `_site/`, `.jekyll-cache/`, `.bundle/`, `_dev/backup-practice-exams/` should stay gitignored where appropriate.
- Changes that disable, weaken, or work around `assets/protect.js` or `assets/freshness.js`. Content protection and cache busting are product features.

### 1.2.1 Video cards — policy update (2026-05-22)

Effective 2026-05-22, every `.vg-card` link in `Videos.md` files SHOULD have a `data-video-id="<11-char-YouTube-ID>"` attribute so the in-page modal player (`assets/video-modal.js`) can render the video inline without leaving the site.

- The `href` remains the YouTube search URL — it's the **fallback** if no `data-video-id` is set (and is also what's used by the verifier).
- A `data-video-id` value is **not a URL** — it's an 11-character ID `[A-Za-z0-9_-]{11}`. It does NOT violate §1.2's direct-URL prohibition.
- This trade-off was made deliberately: the user explicitly chose inline playback (better UX) over absolute dead-link immunity. Periodic re-curation will be needed.
- Curation agents must NEVER change the `href` to a direct video URL — only ADD the `data-video-id` attribute. The href stays as the search-URL fallback.

### 1.3 Never bypass the verifier

- `scripts/verify-baseline.py` must exit `0` before any commit lands. Do not `--no-verify` your way past it.
- If the verifier rejects your work, fix the underlying problem, not the verifier.
- If the rules in the verifier are genuinely outdated, update **both** `CLAUDE.md` (this file) and `scripts/verify-baseline.py` in the same commit, with a human-readable note in the commit message explaining what changed and why.

### 1.4 Never weaken or bypass the auth gate

When the site runs on Cloudflare Pages (see §9), `functions/_middleware.js` enforces sign-in + per-course entitlements on every request. Anything that lets unauthenticated or unentitled traffic reach gated content is a critical bug. Specifically:

- Never widen the public allowlist in `_middleware.js` to cover course content paths.
- Never add a "preview", "demo", "test", or `?bypass=...` query-string exception. There are no exceptions.
- Never read user identity or role from any source other than the verified JWT in the `ch_session` cookie. Never trust headers, query params, or `localStorage` for authorization decisions.
- Never expose an API route that promotes a user to `superuser`. The hardcoded list in `functions/lib/superusers.js` is the only path. The admin POST/PATCH endpoints explicitly reject `role: "superuser"` payloads.
- Never log or echo `JWT_SECRET`, magic-link tokens, or session cookies. Never commit them to the repo.

---

## 2. Required structure (this is what verify-baseline.py enforces)

### 2.1 Per-course layout

Every course folder (`01-` through `09-`) must contain:

```
NN-Course-Slug/
  README.md                                  # course overview
  Flashcards.md                              # interactive widget + Q/A cards
  Module-XX-Slug/
    Reading.md                               # story-driven lesson
    Videos.md                                # YouTube search-URL cards
    Quiz.md                                  # >=24 questions in engine format
    Cheat-Sheet.md                           # 1-2 printable pages
  ... (per module above)
  Practice-Exams/
    Practice-Exam-1.md                       # half-length
    Practice-Exam-2.md                       # three-quarter length
    Final-Mock-Exam.md                       # exact real-exam Q-count + time
```

### 2.2 File-level rules

- **Reading.md**: 250–550 lines. Opens with a story/analogy. Includes ≥3 tables. Includes ≥1 "Exam Trap" / "Common Misconceptions" section. Ends with Summary → Next Steps → Further Reading.
- **Videos.md**: ≥8 cards in three buckets (Essential / Recommended / Optional). Every URL is `https://www.youtube.com/results?search_query=...`. No direct video URLs. No embeds.
- **Quiz.md**: ≥24 questions for new courses (03–09). Existing courses (01–02) are grandfathered at ≥20 questions to avoid touching live student content. Format: `### Qn.` heading, options `A. / B. / C. / D.` on own lines, `---` separator between questions, answers + explanations under `## 🎯 Answers + Explanations`. Engine auto-detects this — do not add custom JS or HTML to quiz files.
- **Cheat-Sheet.md**: ≤180 lines. Table-heavy. Designed to print on 1–2 pages.
- **Practice-Exam-*.md**: `### N.` headings (no Q prefix). Static answer key in a fenced code block under `## 🎯 Answer Key (No Cheating!)`. Final-Mock-Exam Q-count must match the real cert exam exactly.
- **Flashcards.md**: Top 1–267 lines copied verbatim from `01-Scrum-Master/Flashcards.md` (the full interactive widget). Only `STORAGE_KEY` is changed per course. Cards follow `**Q:** … / **A:** …` paragraph pattern under H2 section headers.

### 2.3 Index page and navigation

- `index.html` contains exactly 27 curriculum cards (one per course), all linked correctly. Counts and the "Tracks" list in the footer are **Liquid-driven** from `_data/navigation.yml` and `_data/site_stats.yml` — do not hardcode them.
- `_data/navigation.yml` has exactly 27 `tracks:` entries in the canonical course order (Project Management → IT, Cloud & Systems Administration → Supply Chain & Operations → AI-Based Digital Marketing → Bitcoin & E-Commerce) with module slugs matching the folder structure.
- The homepage hero references all 27 certifications by their official IDs as pills.
- The homepage uses `{% assign cert_count = site.data.navigation.tracks | size %}` and similar Liquid to compute counts dynamically.

---

## 3. Content style — voice and format conventions

The site has a specific voice. New content must match it.

- **Story-driven openings**: every Reading.md opens with an analogy or short narrative (Tony's pizza shop in Scrum, etc.).
- **Emoji as section markers**: 🎯 🔬 ⚠️ 📚 ✅ — same density as existing files. Don't strip them and don't double them.
- **Exam-pragmatic callouts**: `🎯 Exam tip:` and `🚨 Trap on the exam:` blockquotes are encouraged. Mark concepts that *will* be tested with `**MEMORIZE THIS.**` sparingly.
- **Tables for comparisons**: any "X vs. Y" content goes in a markdown table, not prose.
- **Headings are title case**: `What You'll Master`, not `What you'll master`. Articles and short prepositions (a, an, the, of, in, on, with, by) stay lowercase per standard title-case rules.
- **No mention of "newness"**: do not write "newly added," "just launched," "now available," or similar phrasing on the homepage or in course content. Content is presented as if it has always been there.

---

## 4. Content protection (assets/protect.js)

The site disables text selection, right-click, copy/cut, image drag, common shortcuts (Ctrl+C/X/A/S/P, F12, Ctrl+Shift+I/J/C), and printing. Both a CSS layer (inline in `_layouts/default.html` and `index.html`) and a JS layer (`assets/protect.js`) are applied.

**Hard rule:** do not remove, weaken, or work around this protection. If you must add interactive content that conflicts, scope your exception to specific selectors — never disable the whole protection layer.

**Honest scope:** this is deterrent-grade, not server-grade. A determined user can disable JS or fetch raw `.md` files. The protection stops casual copy/download. Server-side gating would require leaving GitHub Pages, which is out of scope.

---

## 5. Workflow rules

### 5.1 Enforcement layer (automatic — do not bypass casually)

This repo has **three enforcement points** that all delegate to the same source of truth: `scripts/verify-baseline.py`.

| Layer | What it does | Bypass |
|---|---|---|
| `.git/hooks/pre-commit` (live in this clone) | Runs `verify-baseline.py` on every `git commit`. Refuses the commit if any check fails. | `git commit --no-verify` |
| `scripts/git-hooks/pre-commit` (versioned in repo) | The canonical source the hook is installed from. Anyone who clones runs `sh scripts/install-hooks.sh` to activate. | (installer only) |
| `scripts/safe-deploy.sh` (versioned in repo) | Wraps deploy with the same verifier check. Refuses to deploy broken state. Auto-detects `wrangler.toml` (Cloudflare Pages) or falls back to GitHub-Pages guidance. | `FORCE=1 sh scripts/safe-deploy.sh` |

**Both bypass mechanisms are intentional and rare.** They exist exclusively for **deliberate baseline changes**, never to "make the commit go through." When you use either bypass, you MUST in the same commit:

1. Update `CLAUDE.md` to document the new rule, and
2. Update `scripts/verify-baseline.py` to assert the new state.

The commit message should start with **`baseline change:`** so it's discoverable in `git log --oneline`. `safe-deploy.sh` with `FORCE=1` will detect if HEAD didn't touch both files and pause for 5s as a sanity warning.

### 5.2 Before any change

1. Run `python3 scripts/verify-baseline.py` and confirm it exits 0. If it doesn't, the repo is already in a non-conforming state — figure that out before adding to the problem.
2. Read the section of this file relevant to what you're about to touch.

### 5.3 During the change

1. Make the minimum change required.
2. Never edit files in the "do not modify" list (§1.1) without explicit human approval.
3. Never commit anything in §1.2.

### 5.4 Before commit

1. Re-run `python3 scripts/verify-baseline.py` and confirm it exits 0. (The pre-commit hook will do this for you, but running it manually first means a faster feedback loop than a rejected commit.)
2. If it fails, fix the underlying problem. Do not weaken the verifier.
3. Stage only the files you intentionally changed. Avoid `git add -A` / `git add .` to prevent accidental inclusion of build output or backups.
4. Write a commit message that describes the *why*, not just the *what*.

### 5.5 Deploy flow

- **Never call `wrangler pages deploy` or `git push origin main` directly.** Use `sh scripts/safe-deploy.sh`.
- The script will run the verifier first, then pick the right deploy target.
- From this preview workspace, the script intentionally cannot push to production — it prints the promotion checklist instead.

### 5.6 Never do these in git

- `git push --force` to `main` or any production branch.
- `git commit --amend` of commits already pushed.
- `git rebase` / `git reset --hard` on shared branches.
- Push to `SyedHZRizvi/Certification-Prep` (the live production repo) from this preview workspace without an explicit human go-ahead.
- Disable hooks with `--no-verify` except in the deliberate-baseline-change scenario described in §5.1.

---

## 6. The frozen baseline — `stable-2026-05-20`

This tag is the canonical *historical* snapshot of the site as of 2026-05-20. It contains:

- 13 course directories
- 112 modules
- 39 practice exams
- 500+ markdown files inside the course directories
- 0 direct YouTube URLs
- ≥1,000 YouTube search URLs
- Content protection enabled in both `index.html` and `_layouts/default.html`
- Freshness mechanism (`/version.txt` + `assets/freshness.js`) wired so future deploys auto-bust stale browser caches
- The `scripts/verify-baseline.py` script passing (15 invariants)

### Current state (post-Google-AI-Pro addition, 2026-05-27)

The live site has now grown to:

- **32** course directories (added Google AI Pro to the Generative & Agentic AI track)
- **286** modules
- **96** practice exams (64 partials + 32 full-length mocks)
- **1,330+** markdown files inside the course directories
- **2,580+** YouTube search URLs (still 0 direct YouTube URLs anywhere)
- **13,000+** practice questions across all quizzes + flashcards + mock exams
- **1,050+** total study hours

The **Generative & Agentic AI** category is its own homepage section containing 7 courses: AIF-C01 + AI-102 (moved from "IT, Cloud & Systems Administration") + 5 specialty courses (Claude Architect, Prompt Engineering Specialist, Generative AI Engineer, AWS ML Specialty MLS-C01, **Google AI Pro** — aligned with Google Cloud Generative AI Leader + Professional ML Engineer credentials).

`scripts/verify-baseline.py` enforces the current totals (all 15 invariants still passing).

If you need to roll back: `git checkout stable-2026-05-20`.

Never delete or move this tag. It is the "known good" state every future change is compared against.

---

## 7. Production vs preview

- **Production repo**: `SyedHZRizvi/Certification-Prep` on GitHub. Students learn from this.
- **Preview workspace**: this directory (`Certification-Prep-Preview/`). All experimental work, all new courses, and all rebuilds happen here first.

Never push directly from this preview workspace to the production repo. The flow is always:

1. Edit & verify in preview.
2. Get explicit human approval.
3. Copy specific files (or specific course folders) into a clean clone of production.
4. Open a PR.
5. Merge after CI/Pages confirms a clean Jekyll build.

---

## 8. If you're unsure

Stop and ask the human. The cost of one extra clarification round is small; the cost of breaking student-facing content is large.

---

## 9. Auth & entitlements (Cloudflare Pages)

The site has a two-tier access model enforced by Cloudflare Pages Functions:

| Role | Who | Can access |
|---|---|---|
| `superuser` | Hardcoded `syed@transcrypts.com` in `functions/lib/superusers.js` | **Everything**, including `/Manage-Users/` and `/api/admin/*`. Always bypasses KV (so a wiped/compromised KV cannot lock the owner out). |
| `student` | Anyone the super-user adds via `/Manage-Users/` (stored in KV) | Only the courses listed in their `courses` array. `"courses": "*"` grants all 27. |
| (unauthenticated) | No session cookie or invalid JWT | Homepage, `/login/`, `/api/auth/*`, public assets, course **landing** pages (`NN-Course-Slug/`). Module content (`NN-Course-Slug/Module-*`) and the admin UI are gated. |

### 9.1 Stack

- **Cloudflare Pages** serves the Jekyll-built static site (no infrastructure change for content authors).
- **Pages Functions** (`functions/` directory, auto-detected) run on Cloudflare's edge for every request.
- **KV namespace** `CERT_HUB_USERS` (bound as `USERS_KV`) stores users, magic-link tokens, and sessions.
- **Resend.com** sends magic-link emails (free tier, no other identity provider).
- **HS256 JWT** session, signed with `JWT_SECRET` env var. No external JWT library — `functions/lib/jwt.js` uses Workers `crypto.subtle` directly.
- **Cookie** `ch_session` — `HttpOnly`, `Secure`, `SameSite=Lax`, 30-day expiry.

### 9.2 Files (all under `functions/`)

```
functions/
  _middleware.js          # Runs on every request — the gate
  lib/
    superusers.js         # Hardcoded super-user list — DO NOT modify casually
    courses.js            # 20-course IDs + path → courseId mapping
    jwt.js                # HS256 sign/verify + randomToken (Workers crypto)
    kv.js                 # Typed helpers: getUser, putUser, storeMagicLink, ...
    email.js              # Resend API integration (magic-link template)
    response.js           # json/error/redirect/sessionCookie/parseCookies
  api/
    auth/
      request-link.js     # POST → email magic link (always returns ok=true; no enumeration)
      verify.js           # GET ?token= → consume token, mint JWT, set cookie
      logout.js           # Clears ch_session cookie
      me.js               # Returns {authenticated, email, role, courses}
    admin/
      users.js            # GET/POST/PATCH/DELETE — super-user only
      courses.js          # GET list of course IDs for the admin UI
```

Plus the **non-`functions/` user-facing pages**:
- `login/index.html` — sign-in page
- `Manage-Users/index.html` — super-user admin UI
- `Privacy-Setup/CLOUDFLARE-DEPLOY-RUNBOOK.md` — one-time activation runbook for the owner
- `_dev/AUTH-ARCHITECTURE.md` — engineering reference (request flows, security model, KV schema)
- `wrangler.toml` — Cloudflare Pages config

### 9.3 Required env vars / secrets (set in Cloudflare dashboard, NOT in repo)

| Variable | Purpose | Set as |
|---|---|---|
| `JWT_SECRET` | HMAC key for session JWTs. Rotate to invalidate all sessions. | Encrypted secret |
| `RESEND_API_KEY` | Resend API token for magic-link delivery | Encrypted secret |
| `EMAIL_FROM` | Sender address, default `onboarding@resend.dev` | Plain var |
| `SITE_URL` | Origin used for magic-link URLs (e.g. `https://cert-hub.pages.dev`) | Plain var |
| `MAGIC_LINK_TTL_SECONDS` | Default `900` (15 min) | Plain var |
| `SESSION_TTL_SECONDS` | Default `2592000` (30 days) | Plain var |

The KV binding `USERS_KV` is configured in Pages → Settings → Functions → KV namespace bindings.

### 9.4 KV schema

| Key pattern | Value (JSON) | Purpose |
|---|---|---|
| `user:<email>` | `{ role: "student"\|"admin", courses: ["01-Scrum-Master", ...]\|"*", created_at, notes }` | One record per allowed user |
| `magic:<token>` | `{ email, next, created_at }` (15-min TTL) | One-shot sign-in token |

Super-users are NOT stored in KV — they live exclusively in `functions/lib/superusers.js`. This is intentional; do not "consolidate" the super-user list into KV.

### 9.5 Request flow (gated module)

1. Browser requests e.g. `/05-Azure-Fundamentals/Module-03-Compute/Reading/`.
2. `_middleware.js` reads `ch_session` cookie.
3. **No cookie** → 302 redirect to `/login/?next=/05-Azure-Fundamentals/Module-03-Compute/Reading/`.
4. **Invalid/expired JWT** → same redirect (cookie also cleared).
5. **Valid JWT, super-user** → serve.
6. **Valid JWT, KV lookup**:
   - User missing → cookie cleared, redirect to login.
   - `courses === "*"` → serve.
   - Course ID in `courses` array → serve.
   - Otherwise → render `🔒 Subscription Required` 403 page.

### 9.6 Hardening invariants (all enforced in code)

- **No identity from headers/query/cookies other than `ch_session`.**
- **JWT verified before any KV read** (no email-based bypass).
- **Magic-link tokens are single-use** (deleted from KV on consume; replay returns "expired").
- **Magic-link TTL = 15 min** (KV `expirationTtl` + value-side `created_at` check).
- **No email enumeration** (request-link always returns `{ ok: true }`).
- **No API-driven super-user promotion** (admin endpoints reject `role: "superuser"`).
- **Course IDs validated** against the canonical list in `functions/lib/courses.js`; arbitrary strings rejected.
- **Cookie flags**: `HttpOnly` (no JS access), `Secure` (HTTPS only), `SameSite=Lax` (CSRF baseline).
- **Logout** clears the cookie with `Max-Age=0`.
- **Instant kill switch**: rotating `JWT_SECRET` in the dashboard invalidates every outstanding session.

### 9.7 Activation (one-time, owner only)

The whole auth layer is **dormant code in this repo**. It activates the moment the owner completes `Privacy-Setup/CLOUDFLARE-DEPLOY-RUNBOOK.md` — ~15 minutes of dashboard clicks. Until then:

- GitHub Pages at `syedhzrizvi.github.io/Certification-Prep/` keeps serving the public site exactly as before.
- The `functions/` directory is ignored by GitHub Pages (it only runs Jekyll, no Workers).
- `_config.yml` excludes `functions`, `wrangler.toml`, `node_modules` so Jekyll never tries to render server-side JS.

After Cloudflare activation, both URLs coexist: GitHub Pages = public preview, Cloudflare Pages URL (`cert-hub.pages.dev` or custom domain) = gated paid experience.

### 9.8 Day-2 operations

| Task | How |
|---|---|
| Add a student | `https://<cf-url>/Manage-Users/` → fill form → save |
| Revoke access | Same page → Delete → user locked out (next request fails KV lookup) |
| Change which courses a user can see | Same page → Edit → re-tick boxes → save |
| Rotate JWT signing key (logout everyone) | Cloudflare dashboard → env vars → regenerate `JWT_SECRET` |
| Rotate Resend API key | Resend dashboard → new key → paste into Cloudflare env var |
| Change super-user email | Edit `functions/lib/superusers.js`, commit, push (auto-deploys) |
| Bulk-import students | Cloudflare dashboard → KV → `CERT_HUB_USERS` → Add entry per student (see runbook §6) |

### 9.9 When the auth code changes

Any PR that touches `functions/` MUST:

1. Preserve the §1.4 invariants (no new bypass paths).
2. Re-state any new env var or KV key in this section AND in `_dev/AUTH-ARCHITECTURE.md`.
3. Note the change in `Privacy-Setup/CLOUDFLARE-DEPLOY-RUNBOOK.md` if it affects owner-facing setup.
4. Be tested end-to-end with `wrangler pages dev` locally before deploying to production.

---
