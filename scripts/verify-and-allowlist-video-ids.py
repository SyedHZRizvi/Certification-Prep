#!/usr/bin/env python3
"""
verify-and-allowlist-video-ids.py — maintain the video-ID allow/deny lists.

This is the *sanctioned* way to add new YouTube video IDs to the site. It
scans every Videos.md, verifies each unique `data-video-id` against YouTube's
public oEmbed API (no content is downloaded — same posture as
scripts/audit-video-ids.py and docs/VIDEO-COMPLIANCE.md), and refreshes:

  _data/verified-video-ids.txt      (allowlist — IDs confirmed LIVE/embeddable)
  _data/known-broken-video-ids.txt  (denylist  — IDs that are 404 or 401)

scripts/verify-baseline.py (check_video_ids_introduced) then enforces, on every
commit, that any NEWLY INTRODUCED data-video-id is on the allowlist and not on
the denylist — so a fabricated/dead ID can never be committed again.

Usage:
  python3 scripts/verify-and-allowlist-video-ids.py            # report only
  python3 scripts/verify-and-allowlist-video-ids.py --update   # rewrite lists
  python3 scripts/verify-and-allowlist-video-ids.py --ids ABC...,DEF...   # check
                                                              specific IDs only

Exit codes: 0 = ran OK; 2 = unrecoverable (e.g. total network failure).
"""
from __future__ import annotations
import argparse
import concurrent.futures as cf
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
ALLOWLIST = REPO_ROOT / "_data" / "verified-video-ids.txt"
DENYLIST  = REPO_ROOT / "_data" / "known-broken-video-ids.txt"

OEMBED_URL = "https://www.youtube.com/oembed?url={url}&format=json"
WATCH_URL  = "https://www.youtube.com/watch?v={vid}"
SKIP_DIR_NAMES = {".git", "_site", "node_modules", "vendor", "_dev"}
VIDEO_ID_RE = re.compile(r'data-video-id="([A-Za-z0-9_-]{11})"')
USER_AGENT = "TheCertHub-VideoAudit/1.0 (+https://cert-hub.pages.dev)"

ALLOW_HEADER = (
    "# verified-video-ids.txt — allowlist of YouTube IDs confirmed LIVE +\n"
    "# embeddable via YouTube's oEmbed API.\n"
    "# Auto-maintained by scripts/verify-and-allowlist-video-ids.py --update\n"
    "# and consumed by scripts/verify-baseline.py (check_video_ids_introduced).\n"
    "# A data-video-id may be newly introduced into a Videos.md only if it is\n"
    "# listed here. One 11-char ID per line; '#' lines are comments.\n"
)
DENY_HEADER = (
    "# known-broken-video-ids.txt — denylist of YouTube IDs confirmed DEAD\n"
    "# (oEmbed 404 = removed/private/never-existed; 401 = embedding disabled).\n"
    "# Auto-maintained by scripts/verify-and-allowlist-video-ids.py --update\n"
    "# and the twice-weekly audit; consumed by scripts/verify-baseline.py.\n"
    "# An ID on this list may NEVER be reintroduced into any Videos.md.\n"
    "# One 11-char ID per line; '#' lines are comments.\n"
)


def iter_videos_md(root: Path):
    for course_dir in sorted(root.iterdir()):
        if not course_dir.is_dir() or course_dir.name in SKIP_DIR_NAMES:
            continue
        if not re.match(r"^\d{2}-", course_dir.name):
            continue
        for videos_md in course_dir.rglob("Videos.md"):
            yield videos_md


def load_ids(path: Path) -> set[str]:
    if not path.is_file():
        return set()
    out = set()
    for line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = line.strip()
        if line and not line.startswith("#"):
            out.add(line.split()[0])
    return out


def write_ids(path: Path, header: str, ids: set[str]) -> None:
    body = "\n".join(sorted(ids))
    path.write_text(header + "\n" + body + ("\n" if body else ""), encoding="utf-8")


def check_one(vid: str, timeout: float) -> str:
    url = OEMBED_URL.format(url=urllib.parse.quote(WATCH_URL.format(vid=vid), safe=""))
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout):
            return "live"
    except urllib.error.HTTPError as e:
        if e.code == 401:
            return "no-embed"
        if e.code == 404:
            return "broken"
        return "error"
    except (urllib.error.URLError, TimeoutError):
        return "error"


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--update", action="store_true",
                    help="rewrite the allow/deny lists from the live results")
    ap.add_argument("--ids", default="",
                    help="comma-separated IDs to check instead of scanning the repo")
    ap.add_argument("--concurrency", type=int, default=16)
    ap.add_argument("--timeout", type=float, default=8.0)
    args = ap.parse_args()

    if args.ids:
        ids = sorted({i.strip() for i in args.ids.split(",") if i.strip()})
    else:
        ids = sorted({vid for p in iter_videos_md(REPO_ROOT)
                      for vid in VIDEO_ID_RE.findall(p.read_text(encoding="utf-8", errors="ignore"))})
    if not ids:
        print("no data-video-id values found — nothing to do.")
        return 0

    print(f"verifying {len(ids)} unique video IDs via oEmbed "
          f"(concurrency={args.concurrency}) ...")
    status: dict[str, str] = {}
    with cf.ThreadPoolExecutor(max_workers=args.concurrency) as ex:
        futs = {ex.submit(check_one, vid, args.timeout): vid for vid in ids}
        for fut in cf.as_completed(futs):
            status[futs[fut]] = fut.result()

    live     = {v for v, s in status.items() if s == "live"}
    broken   = {v for v, s in status.items() if s == "broken"}
    no_embed = {v for v, s in status.items() if s == "no-embed"}
    errors   = {v for v, s in status.items() if s == "error"}
    print(f"  live={len(live)}  broken(404)={len(broken)}  "
          f"no-embed(401)={len(no_embed)}  transient-errors={len(errors)}")

    if args.update:
        # Merge: allowlist gains live IDs (and drops any now-dead);
        # denylist gains broken+no-embed IDs. Transient errors touch neither.
        allow = (load_ids(ALLOWLIST) | live) - broken - no_embed
        deny  = load_ids(DENYLIST) | broken | no_embed
        write_ids(ALLOWLIST, ALLOW_HEADER, allow)
        write_ids(DENYLIST,  DENY_HEADER,  deny)
        print(f"  updated {ALLOWLIST.relative_to(REPO_ROOT)} ({len(allow)} IDs)")
        print(f"  updated {DENYLIST.relative_to(REPO_ROOT)} ({len(deny)} IDs)")
    else:
        print("  (report only — pass --update to rewrite the allow/deny lists)")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        sys.exit(130)
    except Exception as e:
        print(f"UNRECOVERABLE: {e}", file=sys.stderr)
        sys.exit(2)
