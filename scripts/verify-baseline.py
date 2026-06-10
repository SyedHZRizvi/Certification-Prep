#!/usr/bin/env python3
"""
verify-baseline.py — machine-enforced version of CLAUDE.md.

Every rule in CLAUDE.md is asserted here. Exit 0 = clean. Exit 1 = at
least one violation; details printed.

Run before every commit:
    python3 scripts/verify-baseline.py

Frozen baseline: stable-2026-05-20.
"""
from __future__ import annotations

import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# ---------------------------------------------------------------------------
# Expected structure — derived from CLAUDE.md §0, §2
# ---------------------------------------------------------------------------
EXPECTED_COURSES = {
    "01-Scrum-Master":                          8,
    "02-PMP":                                   10,
    "03-AWS-Cloud-Practitioner":                8,
    "04-AWS-Solutions-Architect-Associate":     10,
    "05-Azure-Fundamentals":                    6,
    "06-Azure-Administrator":                   10,
    "07-AWS-AI-Practitioner":                   8,
    "08-Azure-AI-Engineer":                     8,
    "09-CompTIA-Security-Plus":                 10,
    "10-ASCM-CSCP":                             10,
    "11-ASCM-CPIM":                             8,
    "12-ASCM-CLTD":                             8,
    "13-ISM-CPSM":                              8,
    "14-AI-Marketing-Foundations":              10,
    "15-AI-Marketing-Practitioner":             10,
    "16-AI-Marketing-Strategist":               10,
    "17-AI-Marketing-Entrepreneur":             8,
    "18-AI-Marketing-Capstone-Portfolio":       8,
    "19-Bitcoin-Cryptocurrency":                10,
    "20-E-Commerce":                            10,
    # IT Systems Administration track
    "21-CompTIA-A-Plus":                        12,
    "22-CompTIA-Network-Plus":                  8,
    "23-CompTIA-Linux-Plus":                    8,
    "24-CompTIA-Server-Plus":                   8,
    "25-Windows-Server-Hybrid-Admin":           10,
    "26-Microsoft-Endpoint-Admin":              8,
    "27-Microsoft-Identity-Access-Admin":       8,
    # AI & Generative AI track (Cert Hub originals + vendor AI specialties)
    "28-Claude-Architect":                      8,
    "29-Prompt-Engineering-Specialist":         8,
    "30-Generative-AI-Engineer":                10,
    "31-AWS-ML-Specialty":                      10,
    "32-Google-AI-Pro":                         10,
    # Animation & Motion Design track (7-course ladder, foundation → advanced)
    "33-Animation-Foundations":                 10,
    "34-2D-Digital-Animation":                  10,
    "35-Motion-Graphics-UI-Animation":          10,
    "36-3D-Animation-Blender":                  10,
    "37-Advanced-Character-Animation":          10,
    "38-VFX-Compositing":                       10,
    "39-Game-UI-Animation":                     8,
    # DevOps & Cloud-Native track
    "40-CKA-Kubernetes":                        8,
    # Spoken Language Mastery track
    "41-English-Language":                      10,
    "42-Urdu-Language":                         10,
    "43-Persian-Language":                      10,
    "44-Arabic-Language":                       10,
    "45-French-Language":                       10,
    # Quran & Islamic Studies track
    "46-Quran-Recitation-Learning-Memorization": 11,
}
EXPECTED_TOTAL_MODULES = sum(EXPECTED_COURSES.values())  # 412 + 11 = 423
EXPECTED_TOTAL_PRACTICE_EXAMS = len(EXPECTED_COURSES) * 3  # 46 × 3 = 138
MIN_TOTAL_COURSE_MD_FILES = 1944  # +4 for Module 11 (Reading, Videos, Quiz, Cheat-Sheet)
MIN_YT_SEARCH_URLS = 3588         # +8 for Module 11 Videos.md

PROTECTED_FILES = [
    "_layouts/default.html",
    "_data/navigation.yml",
    "_config.yml",
    "assets/quiz.js",
    "assets/protect.js",
    "assets/freshness.js",
    "version.html",
    "scripts/verify-baseline.py",
    "scripts/git-hooks/pre-commit",
    "scripts/install-hooks.sh",
    "scripts/safe-deploy.sh",
    "CLAUDE.md",
]

REQUIRED_MODULE_FILES = ("Reading.md", "Videos.md", "Quiz.md", "Cheat-Sheet.md")
REQUIRED_PRACTICE_FILES = ("Practice-Exam-1.md", "Practice-Exam-2.md", "Final-Mock-Exam.md")

# Regexes
DIRECT_YT_RE = re.compile(r"(youtube\.com/watch|youtu\.be/)", re.IGNORECASE)
SEARCH_YT_RE = re.compile(r"youtube\.com/results\?search_query=", re.IGNORECASE)
QUIZ_Q_RE = re.compile(r"^###\s+Q\d+\b|^\*\*\d+\.\*\*|^\*\*Question\s+\d+\*\*", re.MULTILINE)
ANSWER_KEY_RE = re.compile(r"^##\s+.*Answer\s+Key", re.MULTILINE | re.IGNORECASE)
NAV_TRACK_RE = re.compile(r"^\s*-\s+id:\s+\S+", re.MULTILINE)

# ---------------------------------------------------------------------------
# Result accumulator
# ---------------------------------------------------------------------------
@dataclass
class Result:
    failures: list[str] = field(default_factory=list)
    passes: list[str] = field(default_factory=list)

    def fail(self, msg: str) -> None:
        self.failures.append(msg)

    def ok(self, msg: str) -> None:
        self.passes.append(msg)


# ---------------------------------------------------------------------------
# Individual checks
# ---------------------------------------------------------------------------
def check_course_directories(r: Result) -> None:
    for course in EXPECTED_COURSES:
        if not (ROOT / course).is_dir():
            r.fail(f"missing course directory: {course}")
    actual = sorted(p.name for p in [p for p in ROOT.glob("[0-9][0-9]-*") if not p.name.startswith("00-")] if p.is_dir())
    expected = sorted(EXPECTED_COURSES)
    if actual != expected:
        extras = set(actual) - set(expected)
        if extras:
            r.fail(f"unexpected course directories: {sorted(extras)}")
        missing = set(expected) - set(actual)
        if missing:
            r.fail(f"missing course directories: {sorted(missing)}")
    else:
        r.ok(f"all {len(EXPECTED_COURSES)} course directories present")


def check_modules_per_course(r: Result) -> None:
    total_modules = 0
    for course, expected_count in EXPECTED_COURSES.items():
        cdir = ROOT / course
        if not cdir.is_dir():
            continue
        modules = sorted(p for p in cdir.glob("Module-*") if p.is_dir())
        if len(modules) != expected_count:
            r.fail(
                f"{course}: expected {expected_count} modules, found {len(modules)}"
            )
            continue
        # Each module must have the 4 required files
        for m in modules:
            for fname in REQUIRED_MODULE_FILES:
                if not (m / fname).is_file():
                    r.fail(f"{course}/{m.name}: missing {fname}")
        total_modules += len(modules)
    if total_modules == EXPECTED_TOTAL_MODULES:
        r.ok(f"all {EXPECTED_TOTAL_MODULES} modules present, each with 4 required files")
    else:
        r.fail(
            f"total modules across all courses: expected {EXPECTED_TOTAL_MODULES}, "
            f"found {total_modules}"
        )


def check_practice_exams(r: Result) -> None:
    total = 0
    for course in EXPECTED_COURSES:
        cdir = ROOT / course / "Practice-Exams"
        if not cdir.is_dir():
            r.fail(f"{course}: missing Practice-Exams directory")
            continue
        for fname in REQUIRED_PRACTICE_FILES:
            f = cdir / fname
            if not f.is_file():
                r.fail(f"{course}/Practice-Exams: missing {fname}")
                continue
            total += 1
            text = f.read_text(encoding="utf-8", errors="ignore")
            if not ANSWER_KEY_RE.search(text):
                r.fail(f"{course}/Practice-Exams/{fname}: missing Answer Key heading")
    if total == EXPECTED_TOTAL_PRACTICE_EXAMS:
        r.ok(f"all {EXPECTED_TOTAL_PRACTICE_EXAMS} practice exams present with answer keys")


def check_readme_and_flashcards(r: Result) -> None:
    missing_readme = []
    missing_flashcards = []
    for course in EXPECTED_COURSES:
        if not (ROOT / course / "README.md").is_file():
            missing_readme.append(course)
        if not (ROOT / course / "Flashcards.md").is_file():
            missing_flashcards.append(course)
    if missing_readme:
        r.fail(f"missing README.md in: {missing_readme}")
    if missing_flashcards:
        r.fail(f"missing Flashcards.md in: {missing_flashcards}")
    if not missing_readme and not missing_flashcards:
        r.ok(f"all {len(EXPECTED_COURSES)} courses have README.md and Flashcards.md")


def check_total_markdown_files(r: Result) -> None:
    total = sum(1 for _ in (p for p in ROOT.glob("[0-9][0-9]-*/**/*.md") if not p.relative_to(ROOT).parts[0].startswith("00-")))
    if total < MIN_TOTAL_COURSE_MD_FILES:
        r.fail(
            f"total course markdown files: expected >= {MIN_TOTAL_COURSE_MD_FILES}, "
            f"found {total}"
        )
    else:
        r.ok(f"course markdown file count = {total} (>= {MIN_TOTAL_COURSE_MD_FILES})")


def check_no_direct_youtube_urls(r: Result) -> None:
    offenders = []
    for md in (p for p in ROOT.glob("[0-9][0-9]-*/**/*.md") if not p.relative_to(ROOT).parts[0].startswith("00-")):
        text = md.read_text(encoding="utf-8", errors="ignore")
        if DIRECT_YT_RE.search(text):
            offenders.append(str(md.relative_to(ROOT)))
    if offenders:
        r.fail(
            f"direct YouTube URLs found in {len(offenders)} file(s): "
            f"{offenders[:5]}{'...' if len(offenders) > 5 else ''}"
        )
    else:
        r.ok("no direct YouTube URLs anywhere in course content")


def check_search_youtube_urls_present(r: Result) -> None:
    total = 0
    for md in (p for p in ROOT.glob("[0-9][0-9]-*/**/*.md") if not p.relative_to(ROOT).parts[0].startswith("00-")):
        text = md.read_text(encoding="utf-8", errors="ignore")
        total += len(SEARCH_YT_RE.findall(text))
    if total < MIN_YT_SEARCH_URLS:
        r.fail(
            f"YouTube search URLs: expected >= {MIN_YT_SEARCH_URLS}, found {total}"
        )
    else:
        r.ok(f"YouTube search URL count = {total} (>= {MIN_YT_SEARCH_URLS})")


def check_quiz_format(r: Result) -> None:
    # New courses (03–09) target >=24 questions per the build spec.
    # Existing courses (01–02) are grandfathered at >=20 to reflect their
    # current state without forcing edits to live student content.
    bad_new = []
    bad_existing = []
    for q in (p for p in ROOT.glob("[0-9][0-9]-*/Module-*/Quiz.md") if not p.relative_to(ROOT).parts[0].startswith("00-")):
        text = q.read_text(encoding="utf-8", errors="ignore")
        n = len(QUIZ_Q_RE.findall(text))
        rel = str(q.relative_to(ROOT))
        is_existing = rel.startswith(("01-Scrum-Master", "02-PMP"))
        threshold = 20 if is_existing else 24
        if n < threshold:
            (bad_existing if is_existing else bad_new).append((rel, n))
    if bad_new:
        r.fail(
            f"{len(bad_new)} new-course Quiz.md file(s) under 24 questions: "
            f"{bad_new[:5]}{'...' if len(bad_new) > 5 else ''}"
        )
    if bad_existing:
        r.fail(
            f"{len(bad_existing)} existing-course Quiz.md file(s) under 20 questions: "
            f"{bad_existing[:5]}{'...' if len(bad_existing) > 5 else ''}"
        )
    if not bad_new and not bad_existing:
        r.ok("every Quiz.md meets question floor (existing >=20, new >=24)")


def check_protected_files_exist(r: Result) -> None:
    missing = [p for p in PROTECTED_FILES if not (ROOT / p).is_file()]
    if missing:
        r.fail(f"protected files missing: {missing}")
    else:
        r.ok(f"all {len(PROTECTED_FILES)} protected files present")


def check_enforcement_executable(r: Result) -> None:
    import os
    issues = []
    for rel in ("scripts/git-hooks/pre-commit",
                "scripts/install-hooks.sh",
                "scripts/safe-deploy.sh"):
        p = ROOT / rel
        if not p.is_file():
            issues.append(f"{rel} not found")
        elif not os.access(p, os.X_OK):
            issues.append(f"{rel} not executable (chmod +x missing)")
    if issues:
        for it in issues:
            r.fail(it)
    else:
        r.ok("enforcement scripts present and executable")


def check_live_hook_installed(r: Result) -> None:
    # Soft check: .git/hooks/ is per-clone and not versioned, but if .git
    # exists, the pre-commit hook should be installed for this clone.
    git_dir = ROOT / ".git"
    if not git_dir.exists():
        # Probably running from an unpacked archive — skip.
        r.ok("(.git directory not present — skipping live-hook check)")
        return
    hook = git_dir / "hooks" / "pre-commit"
    if not hook.is_file():
        r.fail(".git/hooks/pre-commit not installed — run `sh scripts/install-hooks.sh`")
        return
    import os
    if not os.access(hook, os.X_OK):
        r.fail(".git/hooks/pre-commit exists but is not executable")
        return
    # Sanity-check that the installed hook references the verifier
    content = hook.read_text(encoding="utf-8", errors="ignore")
    if "verify-baseline.py" not in content:
        r.fail(".git/hooks/pre-commit does not reference verify-baseline.py — stale install?")
        return
    r.ok(".git/hooks/pre-commit installed and wired to verifier")


def check_content_protection_wired(r: Result) -> None:
    layout = ROOT / "_layouts/default.html"
    index = ROOT / "index.html"
    issues = []
    if layout.is_file():
        t = layout.read_text(encoding="utf-8", errors="ignore")
        if "user-select: none" not in t:
            issues.append("_layouts/default.html missing CSS user-select:none")
        if "/assets/protect.js" not in t:
            issues.append("_layouts/default.html missing <script src=protect.js>")
    else:
        issues.append("_layouts/default.html not found")
    if index.is_file():
        # After the multi-page refactor, index.html uses Jekyll includes for
        # head/scripts — so user-select CSS lives in _includes/site-head.html
        # and protect.js reference lives in _includes/site-scripts.html.
        # We grep across the union.
        includes_dir = ROOT / "_includes"
        combined = index.read_text(encoding="utf-8", errors="ignore")
        if includes_dir.is_dir():
            for inc in sorted(includes_dir.glob("*.html")):
                combined += "\n" + inc.read_text(encoding="utf-8", errors="ignore")
        if "user-select: none" not in combined:
            issues.append("index.html (incl. _includes/) missing CSS user-select:none")
        if "protect.js" not in combined:
            issues.append("index.html (incl. _includes/) missing <script src=protect.js>")
    else:
        issues.append("index.html not found")
    if issues:
        for it in issues:
            r.fail(it)
    else:
        r.ok("content protection (CSS + JS) wired in _layouts/default.html and index.html")


def check_freshness_wired(r: Result) -> None:
    layout = ROOT / "_layouts/default.html"
    index = ROOT / "index.html"
    version = ROOT / "version.html"
    issues = []
    if not version.is_file():
        issues.append("version.html (Jekyll source for /version.txt) missing")
    else:
        t = version.read_text(encoding="utf-8", errors="ignore")
        if "permalink: /version.txt" not in t:
            issues.append("version.html missing 'permalink: /version.txt' front matter")
        if "site.time" not in t:
            issues.append("version.html missing {{ site.time | date }} template")
    # After the multi-page refactor, index.html uses Jekyll includes for
    # head + scripts. The freshness machinery still lives in those includes
    # — so we check the UNION of index.html + _includes/*.html (which
    # together produce the rendered homepage). The shared layout is still
    # checked on its own since it stands alone.
    includes_dir = ROOT / "_includes"
    includes_text = ""
    if includes_dir.is_dir():
        for inc in sorted(includes_dir.glob("*.html")):
            includes_text += inc.read_text(encoding="utf-8", errors="ignore") + "\n"

    def check_text(label, t):
        if "__CERTHUB_BUILD__" not in t:
            issues.append(f"{label} missing __CERTHUB_BUILD__ inline build-stamp")
        if "freshness.js" not in t:
            issues.append(f"{label} missing <script src=freshness.js>")
        if "no-cache" not in t.lower():
            issues.append(f"{label} missing Cache-Control no-cache meta tag")

    if layout.is_file():
        check_text("_layouts/default.html", layout.read_text(encoding="utf-8", errors="ignore"))
    else:
        issues.append("_layouts/default.html not found")

    if index.is_file():
        check_text("index.html + _includes/*", index.read_text(encoding="utf-8", errors="ignore") + "\n" + includes_text)
    else:
        issues.append("index.html not found")
    if issues:
        for it in issues:
            r.fail(it)
    else:
        r.ok("freshness mechanism (version.txt + freshness.js + cache-control) wired")


def check_navigation_yaml(r: Result) -> None:
    nav = ROOT / "_data/navigation.yml"
    if not nav.is_file():
        r.fail("_data/navigation.yml not found")
        return
    text = nav.read_text(encoding="utf-8", errors="ignore")
    track_count = len(NAV_TRACK_RE.findall(text))
    if track_count < len(EXPECTED_COURSES):
        r.fail(
            f"_data/navigation.yml: expected >= {len(EXPECTED_COURSES)} tracks, "
            f"found {track_count}"
        )
    else:
        r.ok(f"_data/navigation.yml has {track_count} tracks (>= 9)")


def check_index_has_all_course_links(r: Result) -> None:
    index = ROOT / "index.html"
    if not index.is_file():
        r.fail("index.html not found")
        return
    text = index.read_text(encoding="utf-8", errors="ignore")
    missing = [c for c in EXPECTED_COURSES if c not in text]
    if missing:
        r.fail(f"index.html: missing links to {missing}")
    else:
        r.ok(f"index.html links to all {len(EXPECTED_COURSES)} courses")


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------
def main() -> int:
    r = Result()

    print(f"verify-baseline.py — checking {ROOT}\n")

    checks = [
        check_course_directories,
        check_modules_per_course,
        check_practice_exams,
        check_readme_and_flashcards,
        check_total_markdown_files,
        check_no_direct_youtube_urls,
        check_search_youtube_urls_present,
        check_quiz_format,
        check_protected_files_exist,
        check_content_protection_wired,
        check_freshness_wired,
        check_navigation_yaml,
        check_index_has_all_course_links,
        check_enforcement_executable,
        check_live_hook_installed,
    ]
    for fn in checks:
        try:
            fn(r)
        except Exception as e:
            r.fail(f"check {fn.__name__} raised {type(e).__name__}: {e}")

    for line in r.passes:
        print(f"  PASS  {line}")
    for line in r.failures:
        print(f"  FAIL  {line}")
    print()
    print(f"{len(r.passes)} passed, {len(r.failures)} failed")

    return 0 if not r.failures else 1


if __name__ == "__main__":
    sys.exit(main())
