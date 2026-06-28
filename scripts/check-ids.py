#!/usr/bin/env python3
"""check-ids.py ID [ID ...] — verify YouTube video IDs via the oEmbed API.

Prints one tab-separated line per ID:  <id>\t<status>\t<channel>
where status is: live | broken | no-embed | error.
  live     = oEmbed 200  → public + embeddable (plays inline)
  no-embed = oEmbed 401  → exists but embedding disabled (does NOT play inline)
  broken   = oEmbed 404  → removed / private / never existed
No video content is downloaded — same posture as scripts/audit-video-ids.py.
"""
import json
import sys
import urllib.error
import urllib.parse
import urllib.request

UA = "TheCertHub-VideoAudit/1.0 (+https://cert-hub.pages.dev)"
OEMBED = "https://www.youtube.com/oembed?url={}&format=json"


def check(vid: str):
    url = OEMBED.format(urllib.parse.quote(f"https://www.youtube.com/watch?v={vid}", safe=""))
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return "live", json.load(r).get("author_name", "")
    except urllib.error.HTTPError as e:
        return ("no-embed" if e.code == 401 else "broken" if e.code == 404 else f"http{e.code}"), ""
    except Exception:
        return "error", ""


def main() -> int:
    try:  # channel names can be Arabic/Urdu/etc.; avoid cp1252 crash on Windows
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    for vid in sys.argv[1:]:
        status, channel = check(vid)
        print(f"{vid}\t{status}\t{channel}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
