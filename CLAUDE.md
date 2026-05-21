# CLAUDE.md — Rulebook for AI Agents Working on This Repository

> **Read this entire file before touching any code.**
> This is the human-readable rulebook. The machine-enforced version is `scripts/verify-baseline.py` — every rule below is also asserted there. Run it before every commit.

---

## 0. Project identity

This is **The Cert Hub** — a Jekyll site authored by Syed Humayun Zafar Rizvi. It hosts free, story-driven self-study courses for **13 industry certifications**:

| # | Folder | Cert | Modules |
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

Total: **112 modules · 39 practice exams · 13 flashcard decks · 13 READMEs**.

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
- The contents of `_dev/backup-practice-exams/` — these are immutable backups for rollback.

If you have a strong reason to change one of the above, ask the human first. Do not "improve" the layout, "modernize" the navigation, or "tidy up" the existing courses without explicit go-ahead.

### 1.2 Never commit any of the following

- Direct YouTube video URLs (`youtube.com/watch?v=...` or `youtu.be/...`). The site uses **search URLs only** (`youtube.com/results?search_query=...`) so dead-link rot is impossible.
- Copyrighted exam-dump questions. All practice and quiz questions must be original, written in the spirit of the published exam objectives.
- Secrets, API keys, `.env` files, or credentials. There are none in this repo. Keep it that way.
- Generated build output: `_site/`, `.jekyll-cache/`, `.bundle/`, `_dev/backup-practice-exams/` should stay gitignored where appropriate.
- Changes that disable, weaken, or work around `assets/protect.js`. Content protection is a product feature.

### 1.3 Never bypass the verifier

- `scripts/verify-baseline.py` must exit `0` before any commit lands. Do not `--no-verify` your way past it.
- If the verifier rejects your work, fix the underlying problem, not the verifier.
- If the rules in the verifier are genuinely outdated, update **both** `CLAUDE.md` (this file) and `scripts/verify-baseline.py` in the same commit, with a human-readable note in the commit message explaining what changed and why.

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

- `index.html` contains exactly 9 curriculum cards (one per course), all linked correctly.
- `_data/navigation.yml` has exactly 9 `tracks:` entries with module slugs matching the folder structure.
- The homepage hero references all 9 certifications by their official IDs.

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

This tag is the canonical snapshot of the site as of 2026-05-20. It contains:

- 9 course directories
- 78 modules
- 27 practice exams
- 357+ markdown files inside the course directories
- 0 direct YouTube URLs
- ≥700 YouTube search URLs
- Content protection enabled in both `index.html` and `_layouts/default.html`
- The `scripts/verify-baseline.py` script passing

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
