#!/usr/bin/env python3
"""
audit-video-ids.py — Twice-weekly video link health check for The Cert Hub.

Scans every *Videos.md across the 32 courses, extracts each card's
`data-video-id="XXXXXXXXXXX"` attribute, and verifies the video is
still live + embeddable via YouTube's public oEmbed API. Removed or
made-private videos surface as broken; cards with broken IDs gracefully
fall back to their existing `href="https://www.youtube.com/results?
search_query=..."` fallback (a feature, not a bug).

Exit codes:
  0  — no broken IDs found
  1  — at least one broken ID found
  2  — unrecoverable error (e.g. network down completely)

Modes:
  --check         report only (default; used by CI to decide whether to
                  open an Issue / PR). Writes JSON report to
                  /tmp/video-audit-report.json
  --auto-fix      strip every broken data-video-id attribute in-place.
                  The card keeps its href (search-URL fallback), so end-
                  user behavior degrades gracefully: clicking opens a
                  live YouTube search for the topic instead of an inline
                  modal. Caller should commit + PR the resulting diff.
  --concurrency=N parallel oEmbed HEAD requests (default 16). Higher =
                  faster but more likely to hit YouTube rate-limiting.
  --timeout=SECS  per-request timeout (default 8)

The YouTube oEmbed endpoint returns:
  200 + JSON         — video is live + publicly embeddable
  401                — video exists but embedding is disabled
  404                — video removed, set to private, or never existed
  other 4xx/5xx      — transient; we re-try once before flagging broken

Why oEmbed and not yt-dlp / scraping?
  oEmbed is the YouTube-sanctioned, rate-limit-friendly check. It does
  NOT download video content. It only confirms the ID resolves to an
  embeddable public video — exactly what we need.

Legal posture context: this script reinforces the site's compliance
stance documented in docs/VIDEO-COMPLIANCE.md. No video content is
downloaded, copied, or rehosted at any point. All inline playback uses
YouTube's Embed Player API (iframe), the sanctioned channel for
third-party embedding.
"""
from __future__ import annotations
import argparse
import concurrent.futures as cf
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import defaultdict
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
OEMBED_URL = "https://www.youtube.com/oembed?url={url}&format=json"
WATCH_URL  = "https://www.youtube.com/watch?v={vid}"

# Skip these dirs entirely (build artifacts, history docs, etc.)
SKIP_DIR_NAMES = {".git", "_site", "node_modules", "vendor", "_dev"}

# Match data-video-id="XXXXXXXXXXX" — YouTube IDs are 11 chars
# [A-Za-z0-9_-]
VIDEO_ID_RE = re.compile(r'data-video-id="([A-Za-z0-9_-]{11})"')

USER_AGENT = "TheCertHub-VideoAudit/1.0 (+https://cert-hub.pages.dev)"


def iter_videos_md(root: Path):
    """Yield every Videos.md path under the course directories."""
    for course_dir in sorted(root.iterdir()):
        if not course_dir.is_dir():
            continue
        if course_dir.name in SKIP_DIR_NAMES:
            continue
        if not re.match(r"^\d{2}-", course_dir.name):
            continue
        for videos_md in course_dir.rglob("Videos.md"):
            yield videos_md


def extract_ids_from_file(path: Path) -> list[tuple[str, int]]:
    """Return [(video_id, line_number), ...] for one Videos.md file."""
    out = []
    text = path.read_text(encoding="utf-8")
    for i, line in enumerate(text.splitlines(), start=1):
        for m in VIDEO_ID_RE.finditer(line):
            out.append((m.group(1), i))
    return out


def check_one(vid: str, timeout: float) -> dict:
    """Hit YouTube's oEmbed endpoint once. Returns a result dict."""
    url = OEMBED_URL.format(url=urllib.parse.quote(WATCH_URL.format(vid=vid), safe=""))
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return {"id": vid, "status": "live", "http": r.status}
    except urllib.error.HTTPError as e:
        # 401 = embedding disabled; 404 = removed/private/never-existed
        if e.code == 401:
            return {"id": vid, "status": "no-embed", "http": 401}
        if e.code == 404:
            return {"id": vid, "status": "broken", "http": 404}
        return {"id": vid, "status": "error", "http": e.code, "reason": str(e)}
    except (urllib.error.URLError, TimeoutError) as e:
        return {"id": vid, "status": "error", "http": None, "reason": str(e)}


def check_one_with_retry(vid: str, timeout: float, retries: int = 1) -> dict:
    """Call check_one, retrying once on transient errors."""
    res = check_one(vid, timeout)
    if res["status"] == "error" and retries > 0:
        time.sleep(1.0)
        res = check_one(vid, timeout)
    return res


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true", default=True,
                    help="report only (default)")
    ap.add_argument("--auto-fix", action="store_true",
                    help="strip broken data-video-id attributes in-place")
    ap.add_argument("--concurrency", type=int, default=16)
    ap.add_argument("--timeout", type=float, default=8.0)
    ap.add_argument("--report", type=Path,
                    default=Path("/tmp/video-audit-report.json"))
    args = ap.parse_args()

    print(f"audit-video-ids.py — scanning {REPO_ROOT}")
    files_by_id = defaultdict(list)   # vid -> [(path, line), ...]
    for path in iter_videos_md(REPO_ROOT):
        for vid, line in extract_ids_from_file(path):
            files_by_id[vid].append((path, line))

    unique_ids = sorted(files_by_id)
    total_cards = sum(len(v) for v in files_by_id.values())
    print(f"  · {len(unique_ids)} unique data-video-id values found")
    print(f"  · {total_cards} total card occurrences across all Videos.md")
    if not unique_ids:
        print("  · nothing to check.")
        return 0

    # Parallel oEmbed health-check
    print(f"  · checking against YouTube oEmbed (concurrency={args.concurrency}, "
          f"timeout={args.timeout}s) ...")
    results: list[dict] = []
    with cf.ThreadPoolExecutor(max_workers=args.concurrency) as ex:
        futures = {ex.submit(check_one_with_retry, vid, args.timeout): vid
                   for vid in unique_ids}
        done = 0
        for fut in cf.as_completed(futures):
            results.append(fut.result())
            done += 1
            if done % 50 == 0 or done == len(unique_ids):
                print(f"    {done}/{len(unique_ids)} checked …")

    # Summarize
    by_status = defaultdict(list)
    for r in results:
        by_status[r["status"]].append(r)

    live     = len(by_status["live"])
    no_embed = len(by_status["no-embed"])
    broken   = len(by_status["broken"])
    errors   = len(by_status["error"])
    print()
    print(f"RESULTS — {len(unique_ids)} unique IDs · {total_cards} total cards")
    print(f"  ✅ live:           {live}")
    print(f"  ⚠️  no-embed (401): {no_embed}  (video exists but creator disabled embedding)")
    print(f"  ❌ broken (404):   {broken}     (removed / private / never existed)")
    print(f"  ⚪ errors:         {errors}     (transient / network — re-checked once)")

    # Build report
    report = {
        "scanned_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "total_unique_ids": len(unique_ids),
        "total_card_occurrences": total_cards,
        "summary": {"live": live, "no_embed": no_embed, "broken": broken,
                    "errors": errors},
        "broken_ids": [],
        "no_embed_ids": [],
    }
    for cat_key, status_key in [("broken_ids", "broken"),
                                 ("no_embed_ids", "no-embed")]:
        for r in by_status.get(status_key, []):
            vid = r["id"]
            report[cat_key].append({
                "id": vid,
                "card_count": len(files_by_id[vid]),
                "locations": [{"file": str(p.relative_to(REPO_ROOT)),
                                "line": ln} for p, ln in files_by_id[vid]],
            })

    args.report.write_text(json.dumps(report, indent=2))
    print(f"\nReport written to {args.report}")

    # Auto-fix: strip broken data-video-id attributes
    if args.auto_fix and (broken + no_embed) > 0:
        print(f"\n--auto-fix: stripping {broken + no_embed} broken/no-embed data-video-id values …")
        bad_ids = {r["id"] for r in by_status["broken"] + by_status["no-embed"]}
        files_modified = set()
        for vid in bad_ids:
            for path, _ in files_by_id[vid]:
                files_modified.add(path)
        for path in sorted(files_modified):
            text = path.read_text(encoding="utf-8")
            new = text
            for vid in bad_ids:
                # Remove ` data-video-id="XXXXXXXXXXX"` (with leading space)
                new = re.sub(r'\s*data-video-id="' + re.escape(vid) + r'"', "", new)
            if new != text:
                path.write_text(new, encoding="utf-8")
                print(f"  · cleaned {path.relative_to(REPO_ROOT)}")
        print(f"  ✓ {len(files_modified)} files updated")
        print("  Cards now gracefully degrade to their existing search-URL "
              "href fallback.")

    # Exit code semantics:
    #   --check    → 1 if any broken IDs were found (0 otherwise), so a human
    #                or CI can branch on "is there anything to fix?".
    #   --auto-fix → 0 once the strip pass completes without a hard error.
    #                The existence of broken IDs is the *reason* this mode
    #                runs, not a failure of it; reporting that as a non-zero
    #                exit caused the CI job to die before opening the cleanup
    #                PR. Hard/unexpected errors still surface as exit 2 via
    #                the __main__ wrapper below.
    if args.auto_fix:
        return 0
    return 1 if broken > 0 else 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        sys.exit(130)
    except Exception as e:
        print(f"UNRECOVERABLE: {e}", file=sys.stderr)
        sys.exit(2)
