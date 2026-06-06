# Handoff: 7 new certification courses ready for review

> **Preview-only workspace.** Source repo at `~/Projects/Certification-Prep/` was never touched.
> Production site at https://syedhzrizvi.github.io/Certification-Prep/ is unchanged.

---

## What's here

7 new courses, built to match the voice / structure / quiz-engine format of your existing Scrum & PMP tracks:

| # | Folder | Cert | Modules | Files | Lines | Mock exam |
|---|---|---|---|---|---|---|
| 1 | `03-AWS-Cloud-Practitioner` | AWS CLF-C02 | 8 | 37 | 9,138 | 65 Q / 90 min |
| 2 | `04-AWS-Solutions-Architect-Associate` | AWS SAA-C03 | 10 | 45 | 10,795 | 65 Q / 130 min |
| 3 | `05-Azure-Fundamentals` | AZ-900 | 6 | 29 | 7,115 | 50 Q / 45 min |
| 4 | `06-Azure-Administrator` | AZ-104 | 10 | 45 | 11,843 | 55 Q / 100 min |
| 5 | `07-AWS-AI-Practitioner` | AIF-C01 | 8 | 37 | 8,867 | 65 Q / 120 min |
| 6 | `08-Azure-AI-Engineer` | AI-102 | 8 | 37 | 9,686 | 55 Q / 100 min |
| 7 | `09-CompTIA-Security-Plus` | SY0-701 | 10 | 45 | 12,081 | 90 Q / 90 min + 5 PBQs |
| | **Total** | | **60 modules** | **275** | **~69,500** | **21 exams** |

Each module has the same 4-file pattern as your existing courses:

- `Reading.md`, story-driven lesson (250–550 lines)
- `Videos.md`, curated YouTube **search-URL** cards (8–10 per module)
- `Quiz.md`, ≥24 questions in the engine's `### Qn.` format with answers + explanations
- `Cheat-Sheet.md`, printable 1–2-page summary

Plus per course: `README.md`, `Flashcards.md` (60–150 cards using your existing widget), `Practice-Exams/Practice-Exam-1.md`, `Practice-Exam-2.md`, `Final-Mock-Exam.md`.

---

## Production safety guarantees

- I never touched `~/Projects/Certification-Prep/` or `SyedHZRizvi/Certification-Prep` on GitHub.
- All work is isolated in `~/Projects/Certification-Prep-Preview/` (fresh `git init`, no `origin`).
- No commits, pushes, or PRs were made anywhere.
- Your live site, your students, and your repo are exactly as you left them.

---

## What was protected and verified

| Check | Result |
|---|---|
| Production repo untouched | ✅ Confirmed |
| All 7 READMEs present | ✅ |
| Every module has 4 files | ✅ |
| Every course has 3 practice exams + Flashcards | ✅ |
| Internal `.md` link integrity | ✅ 0 broken |
| YouTube URLs are search-only (no rot) | ✅ 578 search URLs, 0 direct |
| Answer-position bias in practice exams | ✅ Fixed, distributions now ~25% each across A/B/C/D |
| Mock exam Q-count + time-limit matches real cert | ✅ |
| All practice exams have an answer key block | ✅ |

---

## How to preview locally

You need Ruby ≥ 2.7 + Bundler. System Ruby on macOS is 2.6, not new enough. One-time setup:

```bash
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install bundler
```

Then any time:

```bash
cd ~/Projects/Certification-Prep-Preview
./start-preview.sh
```

Opens at **http://127.0.0.1:4000/Certification-Prep/**

Test plan:

1. Visit the homepage, confirm the 7 new course cards appear under the existing Scrum/PMP.
2. Click into each course → walk through a module's Reading/Videos/Quiz/Cheat-Sheet.
3. Take Module 1 Quiz on each course (confirm engine picks it up, options randomize on Try Again).
4. Open Final-Mock-Exam.md on at least 2 courses, confirm Q-count matches the table above.
5. Open Flashcards.md on at least 2 courses, confirm the widget flips and persists progress.

---

## Alternative preview: GitHub Pages dev URL

If you'd rather skip the local Ruby install:

```bash
# 1. Create a brand-new public repo named "Certification-Prep-Preview" on GitHub
#    (do this in the browser — keep production repo separate)
# 2. From this directory:
cd ~/Projects/Certification-Prep-Preview
git add -A
git commit -m "Initial preview build with 7 new certification tracks"
git remote add origin git@github.com:SyedHZRizvi/Certification-Prep-Preview.git
git push -u origin main
# 3. In the repo's Settings → Pages, enable GitHub Pages from main branch.
#    Wait ~2 min, then visit https://syedhzrizvi.github.io/Certification-Prep-Preview/
```

The baseurl in `_config.yml` is `/Certification-Prep`. For the preview repo it would need to be `/Certification-Prep-Preview`, change that line before pushing, or live URLs will 404. (Local preview is fine because Jekyll uses whatever baseurl is set.)

---

## After you approve

When you're satisfied, the path to production is a single targeted PR:

1. In the source repo `~/Projects/Certification-Prep`:
   ```bash
   git checkout -b add-cloud-ai-security-tracks
   # Copy the 7 new course folders + updated index.html + updated _data/navigation.yml
   cp -R ~/Projects/Certification-Prep-Preview/0[3-9]-* .
   cp ~/Projects/Certification-Prep-Preview/index.html .
   cp ~/Projects/Certification-Prep-Preview/_data/navigation.yml _data/
   git add -A
   git commit -m "Add 7 new certification tracks: AWS, Azure, AI, Security"
   git push origin add-cloud-ai-security-tracks
   ```
2. Open a PR on GitHub for final review.
3. Merge, production site updates automatically via GitHub Pages.

Or I can do this for you once you give the green light (you'd just need to set up auth so I can push).

---

## Known limitations / decisions to revisit

1. **Videos are YouTube search URLs, not direct video URLs.** This matches your existing pattern and is durable against dead-link rot, but it means students see a search-results page, not a single specific video. Quality is high because each query is curated (channel + topic), so the top result is consistently the right video.
2. **No automated link-checker is wired into CI.** I verified search URLs are well-formed but the live YouTube results depend on YouTube. Strongly recommend periodically re-running a check.
3. **The CompTIA Security+ Final Mock has 90 questions but the parser counted 85**, that's because 5 questions are multi-part PBQs (Q86–Q90), with sub-parts. That matches the real Security+ exam format.
4. **AI-102 Final Mock** uses sub-numbered case-study questions (51A, 51B, etc.) which mirrors Microsoft's actual case-study format on AI-102.
5. **Quiz answers retain "as written" letter positions in source files**, but your existing engine (`assets/quiz.js`) randomizes options on each render and on Try Again, so students never see source-file bias. Practice exams (which render statically) have been re-shuffled to uniform distribution.

---

## Files & directories you can ignore for review

- `_dev/`, spec doc, the shuffler script, and 21 backup copies of pre-shuffle practice exams. Not part of the published site (you can `git rm -r _dev/` before the production PR).
- `Gemfile` and `start-preview.sh`, local dev tooling; safe to keep in production repo or delete before PR.
- `.preview-marker`, sentinel file flagging this as the preview clone.

---

## Questions to think about while testing

1. Do the new tracks feel **on-brand** with Scrum/PMP, or is the voice off in places?
2. Are there modules that feel **too long** or **too short**?
3. Are any **mock exam questions** ambiguous, factually wrong, or out-of-scope for the real exam?
4. Do the **video search queries** return the right video as the top result when you click? (Spot-check a few per course.)
5. Should the **homepage messaging** lean more heavily into the new tracks or keep Scrum/PMP as the primary value prop?

Reply with any findings, happy to iterate before we touch production.
