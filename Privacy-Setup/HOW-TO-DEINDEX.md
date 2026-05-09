# 🛡️ De-Index Guide — 3-Minute Manual Steps

> Everything has been pre-staged on the website side. These three short tasks
> only YOU can do because they require signing in to your own accounts.

---

## ✅ Already done by the system (you don't need to do anything for these)

- `<meta name="robots" content="noindex, nofollow, noarchive">` on every page
- `<meta name="googlebot" ...>` and `<meta name="bingbot" ...>` blocks
- `/robots.txt` blocking all major search bots + AI scrapers (GPTBot, Claude-Web,
  anthropic-ai, ChatGPT-User, CCBot, PerplexityBot)
- Verification meta-tag *placeholders* are in `_layouts/default.html` and `index.html`,
  ready to be filled in.

---

## 🎯 Task 1 — Google Search Console Removal (~2 minutes)

### Step-by-step

1. Open in browser: **https://search.google.com/search-console**
2. Sign in with your Google account
3. Click the property dropdown (top-left) → **Add property**
4. Choose **"URL prefix"** → paste: `https://syedhzrizvi.github.io/Certification-Prep/`
5. Click **Continue**
6. Google offers verification methods. Choose **"HTML tag"**.
7. Google shows you a meta tag like:
   ```html
   <meta name="google-site-verification" content="aBc123XyZ_long_string_here" />
   ```
   **COPY ONLY THE `content="..."` VALUE** (the long string).

8. Tell me the value. I'll paste it into both `_layouts/default.html` and `index.html`
   (already-prepared placeholders are there) and push. Verification becomes valid in
   ~2 minutes after the next build.

9. Back in Search Console, click **Verify**.

10. Once verified, in the left sidebar:
    **Indexing → Removals → New Request**
    - Choose **"Remove all URLs with this prefix"**
    - URL: `https://syedhzrizvi.github.io/Certification-Prep/`
    - Click **Next** → **Submit**

11. Done. Google purges within 24 hours.

---

## 🎯 Task 2 — Bing Webmasters Removal (~1 minute)

If you don't care about Bing search, skip this. Otherwise:

1. Open: **https://www.bing.com/webmasters**
2. Sign in with a Microsoft account
3. Click **Add site** → enter `https://syedhzrizvi.github.io/Certification-Prep/`
4. Choose **"HTML Meta tag"** verification method
5. Bing shows a tag like:
   ```html
   <meta name="msvalidate.01" content="ABCD1234..." />
   ```
   **COPY THE `content="..."` VALUE.** Tell me — I'll paste it where the placeholder waits.
6. Once verified, in Bing Webmasters: **Configure My Site → Block URLs**
   - Add: `https://syedhzrizvi.github.io/Certification-Prep/`
   - Choose **"Directory"** type → Submit
7. Done.

---

## 🎯 Task 3 — Archive.org (Wayback Machine) Removal (~1 minute)

The Wayback Machine has cached versions of your pages. They honor `robots.txt`
going forward (already configured), but historical snapshots stay unless you
specifically request removal.

### Copy-paste this email exactly:

**To:** `info@archive.org`
**Subject:** `URL exclusion request — syedhzrizvi.github.io/Certification-Prep`

```
Hello Archive.org team,

I'm writing to request the exclusion of all archived snapshots of my
educational website from the Wayback Machine.

Site URL prefix: https://syedhzrizvi.github.io/Certification-Prep/
Repository owner: SyedHZRizvi (verifiable via the github.io subdomain)
Site author: Syed Humayun Zafar Rizvi (Toronto, Canada)
Reason: This is private educational content. The site has been
configured with noindex robots meta tags and a robots.txt directive
disallowing all crawlers. I would like existing Wayback Machine
snapshots to be excluded as well.

Please confirm when the exclusion has been processed.

Thank you,
Syed Humayun Zafar Rizvi
```

> ⚠️ **Send from an email address that ties to ownership** (e.g. an email associated
> with the GitHub account, or use the GitHub email visible on your profile).
> Otherwise archive.org will likely ask for additional verification.

Archive.org typically responds within 1–4 weeks.

---

## 🚦 What Happens If You Skip All Three

The `noindex` meta tags + `robots.txt` are already live. Without the manual
steps above:
- Google will gradually drop indexed pages over the next **4–8 weeks** (next crawl cycle)
- Bing similar
- Wayback Machine snapshots stay until you email them

The manual steps just **shortcut this to 24 hours instead of 8 weeks**.

---

## 📞 What To Do Once You Have The Codes

Just paste the values back to your AI assistant in this format:

> "Google verification code: aBc123XyZ_long_string_here"
> "Bing verification code: ABCD1234..."

I'll paste them into the right files, push, and Search Console will verify within
2 minutes of the next build.
