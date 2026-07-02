# 📺 Video Compliance — Internal Technical & Operational Reference

**Status:** Engineering + legal-operations companion to the public policy page.
**Public-facing summary:** `/video-compliance/` (source: `docs/VIDEO-COMPLIANCE.md`).
**Document owner:** Humayun Zafar
**Last reviewed:** 2026-06 · **Cadence:** quarterly, plus any time the underlying platform terms change

This file is the **how** — the scripts, controls, schedules, and file map behind
the plain-English policy. It is an internal reference (no front-matter, not a
linked public page), kept for legal review by the owner, counsel, hosting
partner, payment processor, or a certification body.

---

## 1. The bottom line

**The Cert Hub does NOT download, copy, rehost, or mirror any
third-party video content.** Every video card on every Videos.md page
across all 47 courses uses one of two YouTube-sanctioned mechanisms:

| Mechanism | What it is | Legal basis |
|---|---|---|
| **YouTube Embed Player API (iframe)** | The inline modal that opens when a student clicks a video card. Loaded via `<iframe src="https://www.youtube.com/embed/{id}">`. | [YouTube Terms of Service §5C](https://www.youtube.com/static?template=terms) explicitly permits embedding via this API. Creators can opt out by disabling embedding on individual videos (our audit detects + removes those — see §3). |
| **YouTube search-URL fallback** | The `href` on every `.vg-card` link: `https://www.youtube.com/results?search_query={topic}`. Used when no `data-video-id` is set or the inline modal can't load. | Linking to a public search result page is not regulated under any copyright theory we are aware of. It is functionally equivalent to a Google search link. |

**Neither mechanism downloads or rehosts video content.** The bytes of
the video stream are served directly from YouTube's CDN to the
student's browser, exactly as if the student had typed the URL into
their address bar.

---

## 2. Why we don't download even Creative Commons videos

A natural question is: **"What if a YouTube video is licensed CC-BY?
Can we download those and rehost?"**

**No, not via YouTube.** Two reasons:

1. **YouTube Terms of Service §5C** prohibits downloading or copying
   any content from the platform, *regardless of the underlying
   license*, unless YouTube itself provides a download button
   (currently only YouTube Premium offline mode for personal
   playback). The Creative Commons license a creator applies to their
   video governs *redistribution* — but the *access method* is still
   bound by YouTube's ToS, and YouTube's ToS does not permit
   download as the access method.

2. **Provenance + chain of custody.** Even if a CC-BY video could be
   legally extracted, we would need an unbroken paper trail proving
   the creator validly applied that license (CC-BY requires
   attribution; some YouTube videos are mis-tagged). For the thousands
   of video cards on the site, the audit cost of verifying each one
   exceeds the benefit compared to embed-only.

The supported legal paths for downloading + rehosting a video are:

- **Self-produced content:** the owner has full rights. (Humayun
  Zafar, in his capacity as the sole author of The Cert Hub course
  material, could produce his own walk-throughs and host those
  directly. None currently exist.)
- **Explicit written permission** from the creator (separate from any
  CC license).
- **Sourced from a non-YouTube origin** that itself permits
  redistribution (e.g., a creator's own Creative-Commons-licensed
  download from their personal site, or a public-domain archive like
  the Library of Congress).

If any of these become applicable in the future, the videos would
live in `assets/videos/` and be served from Cloudflare Pages directly
— never substituted for the existing YouTube embeds without owner
sign-off.

---

## 3. Operational controls

### 3.1 Twice-weekly automated audit

`scripts/audit-video-ids.py` walks every Videos.md across the 47
courses, extracts each card's `data-video-id` attribute, and verifies
the video is still live + embeddable via YouTube's public oEmbed API.

The audit runs **automatically every Monday and Thursday at 09:00
UTC** via the GitHub Actions workflow `.github/workflows/audit-videos.yml`.
The workflow:

1. Executes the audit script in report mode and uploads the JSON
   report as a workflow artifact (90-day retention).
2. If any video IDs return HTTP 404 (removed / private / never
   existed), opens a GitHub Issue labelled `video-audit` +
   `compliance` listing each broken ID + every file it appears in.
3. Re-runs the script in `--auto-fix` mode to strip the broken
   `data-video-id` attributes (cards keep their search-URL `href`
   fallback, so end-user behavior degrades gracefully).
4. Opens a pull request with the cleanup diff for human review +
   merge.

### 3.2 Graceful degradation by design

Every `.vg-card` has TWO redundant pointers to the content:

```html
<a class="vg-card"
   data-video-id="EXAMPLE1234"
   href="https://www.youtube.com/results?search_query=topic+keywords">
  ...
</a>
```

- The **`data-video-id`** (an 11-character YouTube ID) powers the inline modal player (best UX).
- The **`href`** is the unconditional fallback — clicked when JS is
  off, when the modal fails, or when the video ID has been removed.

When a `data-video-id` is stripped by the audit, the card silently
falls back to the search URL. The student still finds a relevant
current video; the site does not 404 or show a broken player.

### 3.3 No direct YouTube URLs anywhere in `href`

CLAUDE.md §1.2 enforces, at pre-commit time, that no `href` attribute
on the site contains `youtube.com/watch?v=` or `youtu.be/`. This is
checked by `scripts/verify-baseline.py` and the pre-commit hook
rejects any commit that violates it. Reason: a direct watch URL in
the `href` would bypass the search-URL fallback and create a hard
break if the video is later removed.

The only sanctioned form of a real YouTube video ID in the
codebase is inside the `data-video-id` attribute — which is itself
auditable and removable by the twice-weekly job.

### 3.4 Manual high-traffic re-curation

When the auto-fix PR lands, the cards lose their inline-modal
ability for those specific IDs. For high-traffic / capstone modules,
a human reviewer (currently: Humayun) can replace the broken IDs
with equivalent canonical videos before merging — typically
sourcing from:

- The same creator's other videos on the same topic
- Anthropic / OpenAI / Google Cloud Tech / AWS / Microsoft official
  channels (most stable, rarely take down content)
- Karpathy / 3Blue1Brown / Fireship / StatQuest (canonical
  long-shelf-life education)

The audit script's JSON output groups broken IDs by file, so the
reviewer can prioritize which courses need attention.

---

## 4. Litigation risk model

| Risk | Likelihood | Severity | Mitigation in place |
|---|---|---|---|
| Copyright takedown notice from a video creator | **Very low** | Low | We never host the content, only embed via YouTube's sanctioned API. Removing the iframe is one config change away. |
| YouTube ToS-violation claim against The Cert Hub | **Very low** | Low | We only use the public Embed Player API + search URLs. No scraping, no downloading, no API-key abuse. |
| Student complaint about broken / dead video | **Medium** | Very low | Twice-weekly audit + graceful degradation (search-URL fallback) means the student always gets a working result. |
| Mass video-creator takedowns disabling embedding | **Low** | Medium | Audit catches `no-embed` (HTTP 401) videos same as broken (404). Auto-fix strips both. |
| YouTube API rate-limiting our audit | **Low** | Very low | oEmbed is rate-limit-friendly (~50 calls/min per IP). Audit uses concurrency=16 and a retry-once strategy. If we hit limits, the report flags transient errors separately from broken ones. |

**Outstanding risks we accept:**

- A creator may pull a video between Monday's audit and Thursday's
  next audit. Worst-case 4-day window of one broken inline modal —
  the search URL fallback still works during that window.
- We rely on YouTube's continued operation of the oEmbed endpoint.
  If it changes URL or response format, the script needs an update.

**What we explicitly do NOT do:**

- We do not run yt-dlp, youtube-dl, or any download tool against any
  YouTube URL, ever, on any environment that touches this codebase
  (production, preview, CI). This is a hard policy line.
- We do not cache video bytes anywhere — not on Cloudflare, not in
  local backups, not in commits, not in test artifacts.
- We do not maintain a "legal grey area" mirror of any third-party
  educational video.

---

## 5. Quarterly review checklist

Every quarter the following must be re-verified by Humayun (or any
future site owner):

- [ ] YouTube Terms of Service §5C (or its renumbered successor) still
      permits Embed Player API use.
- [ ] YouTube's oEmbed endpoint at `https://www.youtube.com/oembed`
      still returns 200 for live videos and 404 for removed ones.
- [ ] The GitHub Actions workflow has run the expected number of
      times (~8 per month, allowing for runner outages).
- [ ] Auto-fix PRs are being reviewed + merged on a reasonable
      cadence (target: within 14 days of opening).
- [ ] No new third-party content has been added to the site outside
      the embed/search-URL channels.

The pre-commit hook + scripts/verify-baseline.py already enforce
the "no direct YouTube URLs in href" rule on every commit, so most
of the policy is mechanically enforced rather than reviewer-dependent.

---

## 6. Files referenced by this policy

| File | Purpose |
|---|---|
| `scripts/audit-video-ids.py` | The audit script. Run weekly by CI; runnable manually with `--check` (report only) or `--auto-fix` (strip broken IDs). |
| `.github/workflows/audit-videos.yml` | GitHub Actions schedule: Mon + Thu 09:00 UTC. Opens Issue + auto-PR on findings. |
| `scripts/verify-baseline.py` | Pre-commit gate: enforces "no direct YouTube URLs in href" across all content. |
| `CLAUDE.md` §1.2 + §1.2.1 | Site-wide rule defining the allowed `href` and `data-video-id` formats. |
| `assets/video-modal.js` | The iframe-based inline modal player; the user-facing implementation of the YouTube Embed Player API. |
| `docs/VIDEO-COMPLIANCE.md` | The **public, plain-English** summary of this policy (`/video-compliance/`). |
| `_dev/VIDEO-COMPLIANCE-INTERNAL.md` | **This document.** The internal technical + operational reference. |

---

## 7. Contact

For questions about this policy, contact **Humayun Zafar**
(syed@transcrypts.com).
