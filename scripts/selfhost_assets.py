"""
Self-host external assets for GDPR (no visitor IP to Google/Cloudflare CDNs):
 - vendor the Tailwind Play CDN JS  -> assets/vendor/tailwind-play.js
 - download all Google Font WOFF2 files -> assets/fonts/
 - generate local @font-face CSS with relative src -> assets/fonts/fonts.css + lang-fonts.css
"""
import io, os, re, urllib.request

REPO = r"D:\Certification-Prep"
FONTS_DIR = os.path.join(REPO, "assets", "fonts")
VENDOR_DIR = os.path.join(REPO, "assets")
os.makedirs(FONTS_DIR, exist_ok=True)
os.makedirs(VENDOR_DIR, exist_ok=True)

CHROME_UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
             "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")

def fetch(url, ua=CHROME_UA, binary=False):
    req = urllib.request.Request(url, headers={"User-Agent": ua})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    return data if binary else data.decode("utf-8")

# ---- 1. Vendor Tailwind Play CDN ----
tw = fetch("https://cdn.tailwindcss.com", binary=True)
with open(os.path.join(VENDOR_DIR, "tailwind-play.js"), "wb") as f:
    f.write(tw)
print(f"tailwind-play.js  {len(tw)//1024} KB")

# ---- 2. Fonts: fetch CSS, download woff2, rewrite src to local relative ----
FONT_SETS = {
    "fonts.css": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
    "lang-fonts.css": "https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=Gulzar&display=swap",
}

def slug(url):
    # https://fonts.gstatic.com/s/inter/v20/<hash>.woff2 -> inter-<hash>.woff2
    m = re.search(r"/s/([^/]+)/[^/]+/([^/]+\.woff2)", url)
    fam = m.group(1) if m else "font"
    name = m.group(2) if m else url.rsplit("/", 1)[-1]
    return f"{fam}-{name}"

total_files = 0
for css_name, css_url in FONT_SETS.items():
    css = fetch(css_url)
    urls = sorted(set(re.findall(r"url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)", css)))
    for u in urls:
        fn = slug(u)
        dst = os.path.join(FONTS_DIR, fn)
        if not os.path.exists(dst):
            data = fetch(u, binary=True)
            with open(dst, "wb") as f:
                f.write(data)
            total_files += 1
        # rewrite the src url to a local relative path (same dir as the css)
        css = css.replace(u, fn)
    with io.open(os.path.join(FONTS_DIR, css_name), "w", encoding="utf-8", newline="\n") as f:
        f.write("/* Self-hosted Google Fonts (GDPR: no third-party CDN). Regenerate with scripts/selfhost_assets.py */\n")
        f.write(css)
    print(f"{css_name}  {len(urls)} woff2 files referenced")

print(f"\nDownloaded {total_files} new woff2 files into assets/fonts/")
