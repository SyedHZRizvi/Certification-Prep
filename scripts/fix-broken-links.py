#!/usr/bin/env python3
"""
fix-broken-links.py
Fix all broken internal relative href links in the Cert Hub repo.

TWO categories of fixes:

1. WRONG MODULE NAMES in .md links
   jekyll-relative-links converts .md links to pretty URLs ONLY IF the target file
   exists at the path resolved relative to the SOURCE file's location (not rendered location).
   So we need to fix the module/course name in these paths.
   The depth (number of ../) in .md links is already correct relative to source files.

2. DIRECTORY LINKS not handled by jekyll-relative-links
   These stay as-is in the built HTML. Since pretty permalinks add 1 level of depth,
   all relative directory links need exactly 1 more ../ prepended.
   Also: Practice-Exams/ links from module files need this fix.

Run from the repo root:
    python3 scripts/fix-broken-links.py
"""

import os
import re
import sys
from pathlib import Path

REPO = Path(__file__).parent.parent
SITE = REPO / '_site'
SKIP_DIRS = {'.git', '_site', 'node_modules', 'vendor', '_dev', '.jekyll-cache', '.github', 'scripts'}

# ============================================================
# PART A: WRONG MODULE NAME corrections for .md links
# Key: the wrong path SUFFIX (the part after stripping leading ../)
# Value: the CORRECT path suffix
#
# These corrections fix wrong module/course names in href paths.
# The depth (../) is assumed ALREADY CORRECT relative to source files.
# ============================================================

# Build corrections from wrong-name -> correct-name
# Based on module numbers and actual directory names in the repo

def build_md_corrections(site):
    """Build map: wrong_suffix -> correct_suffix for .md links."""
    corrections = {}

    def get_module_by_num(course, mod_num):
        """Get actual module name for a given course/module number from _site."""
        course_dir = site / course
        if not course_dir.is_dir():
            return None
        matches = list(course_dir.glob(f'Module-{mod_num:02d}-*'))
        if matches:
            return matches[0].name
        return None

    # === 01-Scrum-Master ===
    course = '01-Scrum-Master'
    for wrong, num in [
        ('Module-03-Scrum-Roles', 3),
        ('Module-04-Scrum-Artifacts', 4),
        ('Module-04-Scrum-Team', 4),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 02-PMP ===
    course = '02-PMP'
    for wrong, num in [
        ('Module-01-Project-Foundations', 1),
        ('Module-03-Cost-Management', 3),
        ('Module-04-Cost-Management', 4),
        ('Module-05-Quality-Management', 5),
        ('Module-09-Procurement-Management', 9),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 04-AWS-Solutions-Architect-Associate ===
    course = '04-AWS-Solutions-Architect-Associate'
    for wrong, num in [
        ('Module-03-Storage-Solutions', 3),
        ('Module-04-Compute', 4),
        ('Module-05-Compute-Networking', 5),
        ('Module-05-Networking', 5),
        ('Module-08-Security-Identity', 8),
        ('Module-09-Cost-Optimization-Well-Architected', 9),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 05-Azure-Fundamentals ===
    course = '05-Azure-Fundamentals'
    for wrong, num in [
        ('Module-02-Azure-Architecture-Services', 2),
        ('Module-02-Identity-Access-Security', 2),
        ('Module-03-Compute', 3),
        ('Module-05-Governance-Compliance', 5),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 06-Azure-Administrator ===
    course = '06-Azure-Administrator'
    for wrong, num in [
        ('Module-01-Identity-Governance', 1),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 07-AWS-AI-Practitioner ===
    course = '07-AWS-AI-Practitioner'
    for wrong, num in [
        ('Module-03-ML-Fundamentals', 3),
        ('Module-05-Generative-AI-Foundations', 5),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 08-Azure-AI-Engineer ===
    course = '08-Azure-AI-Engineer'
    for wrong, num in [
        ('Module-01-Plan-Manage-Azure-AI', 1),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 09-CompTIA-Security-Plus ===
    course = '09-CompTIA-Security-Plus'
    for wrong, num in [
        ('Module-01-General-Security-Concepts', 1),
        ('Module-02-Risk-Management', 2),
        ('Module-03-Security-Architecture', 3),
        ('Module-04-Cryptography-PKI', 4),
        ('Module-04-IAM-Authentication', 4),
        ('Module-05-Risk-Management', 5),
        ('Module-05-Security-Operations', 5),
        ('Module-06-Security-Program-Management', 6),
        ('Module-07-Identity-Access-Management', 7),
        ('Module-07-Security-Operations', 7),
        ('Module-09-Governance-Risk-Compliance', 9),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 10-ASCM-CSCP ===
    course = '10-ASCM-CSCP'
    for wrong, num in [
        ('Module-01-Supply-Chain-Strategy', 1),
        ('Module-04-Demand-Planning-Forecasting', 4),
        ('Module-04-Supplier-Customer-Relationships', 4),
        ('Module-06-Supply-Chain-Performance-Management', 6),
        ('Module-07-Transportation-Distribution', 7),
        ('Module-09-Risk-Management', 9),
        ('Module-09-Strategic-Sourcing-Procurement', 9),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'
    # Special case: 10-ASCM-CSCP/Reading.md -> point to README.md at course root
    corrections['10-ASCM-CSCP/Reading.md'] = '10-ASCM-CSCP/README.md'

    # === 11-ASCM-CPIM ===
    course = '11-ASCM-CPIM'
    for wrong, num in [
        ('Module-04-Inventory-Management', 4),
        ('Module-04-Quality-Management', 4),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 12-ASCM-CLTD ===
    course = '12-ASCM-CLTD'
    for wrong, num in [
        ('Module-05-International-Logistics', 5),
        ('Module-05-Warehouse-Management', 5),
        ('Module-06-Lean-Operations', 6),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 13-ISM-CPSM ===
    course = '13-ISM-CPSM'
    for wrong, num in [
        ('Module-01-Strategic-Sourcing-Foundations', 1),
        ('Module-02-Strategic-Alignment', 2),
        ('Module-03-Sourcing-Process', 3),
        ('Module-05-Contract-Management', 5),
        ('Module-07-Risk-Compliance-Sustainability', 7),
        ('Module-07-Risk-Compliance', 7),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 14-AI-Marketing-Foundations ===
    course = '14-AI-Marketing-Foundations'
    for wrong, num in [
        ('Module-01-Marketing-Fundamentals', 1),
        ('Module-02-AI-Native-Marketing-Stack', 2),
        ('Module-02-Customer-Journey-Funnel', 2),
        ('Module-03-Goals-KPIs-Measurement', 3),
        ('Module-03-Prompt-Engineering-Mastery', 3),
        ('Module-04-Brand-Voice-Positioning', 4),
        ('Module-05-Buyer-Journey-Funnels-2026', 5),
        ('Module-05-Paid-Media-Channels', 5),
        ('Module-06-Social-Influencer-Marketing', 6),
        ('Module-08-Email-CRM-Lifecycle', 8),
        ('Module-09-Analytics-Attribution', 9),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 15-AI-Marketing-Practitioner ===
    course = '15-AI-Marketing-Practitioner'
    for wrong, num in [
        ('Module-06-SEO-Content-Strategy', 6),
        ('Module-08-Lifecycle-Email-SMS', 8),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === 16-AI-Marketing-Strategist ===
    course = '16-AI-Marketing-Strategist'
    for wrong, num in [
        ('Module-03-Customer-LTV-Retention', 3),
    ]:
        correct = get_module_by_num(course, num)
        if correct and correct != wrong:
            corrections[f'{course}/{wrong}/Reading.md'] = f'{course}/{correct}/Reading.md'

    # === Non-existent courses (old names) ===
    # 15-AI-Marketing-SEO-Content -> 15-AI-Marketing-Practitioner
    # 16-AI-Marketing-Paid-Acquisition -> 16-AI-Marketing-Strategist
    # 17-AI-Marketing-Analytics-Automation -> 17-AI-Marketing-Entrepreneur
    non_existent_map = {
        '15-AI-Marketing-SEO-Content': '15-AI-Marketing-Practitioner',
        '16-AI-Marketing-Paid-Acquisition': '16-AI-Marketing-Strategist',
        '17-AI-Marketing-Analytics-Automation': '17-AI-Marketing-Entrepreneur',
    }
    for wrong_course, correct_course in non_existent_map.items():
        # README -> README
        corrections[f'{wrong_course}/README.md'] = f'{correct_course}/README.md'
        # Module links -> course README (since module names are different)
        for mod_num in range(1, 11):
            for file_name in ['Reading.md', 'Quiz.md', 'Cheat-Sheet.md', 'Videos.md']:
                mod_prefix = f'Module-{mod_num:02d}-'
                # We use a prefix-match approach in the apply_correction function
            # Store the course-level correction
        corrections[f'COURSE_PREFIX:{wrong_course}/'] = f'{correct_course}/README.md'

    # === Bitcoin intra-course wrong module names ===
    # From Bitcoin Module-08, links like ../Module-01-Foundations-Genesis/Reading.md
    # are resolved relative to 19-Bitcoin-Cryptocurrency/Module-08-Regulatory-Compliance-Tax/
    # They go UP one level to 19-Bitcoin-Cryptocurrency/, then Module-01-Foundations-Genesis/
    # So the path suffix from repo root is 19-Bitcoin-Cryptocurrency/Module-01-Foundations-Genesis/Reading.md
    # But we need 19-Bitcoin-Cryptocurrency/Module-01-Bitcoin-White-Paper-Origins/Reading.md
    #
    # However, in the SOURCE file, these links are written as:
    # ../Module-01-Foundations-Genesis/Reading.md
    # which jekyll resolves relative to the source file's directory
    # (19-Bitcoin-Cryptocurrency/Module-08-Regulatory-Compliance-Tax/)
    # -> 19-Bitcoin-Cryptocurrency/Module-01-Foundations-Genesis/Reading.md (wrong)
    #
    # Fix: change ../Module-01-Foundations-Genesis/ to ../Module-01-Bitcoin-White-Paper-Origins/
    # The correction key is the wrong RELATIVE path (as it appears in the source markdown)
    bitcoin_course = '19-Bitcoin-Cryptocurrency'
    bitcoin_mod_map = {
        'Module-01-Foundations-Genesis': get_module_by_num(bitcoin_course, 1),
        'Module-05-Mining-Economics': get_module_by_num(bitcoin_course, 5),
        'Module-09-Institutional-Adoption-Treasury': get_module_by_num(bitcoin_course, 9),
    }
    for wrong_mod, correct_mod in bitcoin_mod_map.items():
        if correct_mod and correct_mod != wrong_mod:
            # These are used as ../Wrong/Reading.md in source (intra-course)
            corrections[f'INTRA_BITCOIN:{wrong_mod}/Reading.md'] = f'{correct_mod}/Reading.md'

    return corrections


# ============================================================
# PART B: DIRECTORY LINK depth fixes
# Links that DON'T end in .md and are relative (../ prefix)
# These need exactly 1 more ../ prepended.
# ============================================================

# Patterns for directory links that need +1 ../
# These appear in source files and stay as-is in rendered HTML

def needs_depth_fix(href):
    """Return True if this is a directory link that needs +1 depth."""
    if not href.startswith('../'):
        return False
    if href.endswith('.md'):
        return False  # .md links handled by jekyll-relative-links
    # Any relative directory link
    return True


def apply_corrections(href, src_file, corrections, repo=None):
    """
    Apply corrections to a relative href.
    src_file is the absolute path to the source .md file.
    repo is the Path to the repo root (needed for depth calculation).
    Returns (fixed_href, was_changed).
    """
    if repo is None:
        repo = REPO
    if not href.startswith('../') and not href.startswith('./'):
        return href, False

    original_href = href

    # -------------------------------------------------------
    # CASE 1: .md extension links - fix wrong module/course names
    # -------------------------------------------------------
    if href.endswith('.md'):
        # Strip leading ../ to get the relative-from-source-dir path
        up_count = 0
        rest = href
        while rest.startswith('../'):
            up_count += 1
            rest = rest[3:]

        # Resolve to get the actual path this points to relative to repo root
        src_dir = src_file.parent
        resolved = src_dir
        for _ in range(up_count):
            resolved = resolved.parent
        # resolved is now the directory after going up up_count times
        # rest is the remainder (e.g., "13-ISM-CPSM/Module-01-Wrong/Reading.md")

        # Check if this is a non-existent course prefix
        rest_parts = rest.split('/')
        course = rest_parts[0] if rest_parts else ''

        # Check for non-existent course correction
        course_prefix_key = f'COURSE_PREFIX:{course}/'
        if course_prefix_key in corrections:
            # Link to non-existent course - redirect to the correct course README
            correct_path = corrections[course_prefix_key]
            # Rebuild the href with same number of ../ but pointing to correct course README
            new_href = '../' * up_count + correct_path
            return new_href, new_href != original_href

        # Check for Bitcoin intra-course corrections
        if len(rest_parts) >= 2 and rest_parts[1] in ['Reading.md']:
            # Might be a direct module link like "Module-01-Wrong/Reading.md"
            pass

        intra_bitcoin_key = f'INTRA_BITCOIN:{rest}'
        if intra_bitcoin_key in corrections:
            correct_rest = corrections[intra_bitcoin_key]
            new_href = '../' * up_count + correct_rest
            return new_href, new_href != original_href

        # Look for standard corrections
        if rest in corrections:
            new_rest = corrections[rest]
            new_href = '../' * up_count + new_rest
            return new_href, new_href != original_href

        # Check prefix-based course corrections
        for wrong_course, correct_course_readme in [(k[len('COURSE_PREFIX:'):].rstrip('/'), v)
                                                      for k, v in corrections.items()
                                                      if k.startswith('COURSE_PREFIX:')]:
            if rest.startswith(f'{wrong_course}/'):
                new_href = '../' * up_count + correct_course_readme
                return new_href, new_href != original_href

        return href, False

    # -------------------------------------------------------
    # CASE 2: Directory links - fix depth if needed
    # -------------------------------------------------------
    if needs_depth_fix(href):
        # Count how many ../ we have and get the suffix
        up_count = 0
        suffix = href
        while suffix.startswith('../'):
            up_count += 1
            suffix = suffix[3:]

        # Resolve the absolute path of the target from the SOURCE file's directory
        src_dir = src_file.parent
        target_abs = src_dir
        for _ in range(up_count):
            target_abs = target_abs.parent
        # target_abs is now the directory after going up up_count times from source
        # suffix is the remaining path (e.g., "Practice-Exams/" or "09-CompTIA-Security-Plus/")
        # The full target path in the repo would be target_abs / suffix

        # Now compute how many ../ we need from the RENDERED position
        # The rendered file is at repo_root / rel_path_of_source (same as source path)
        # With pretty permalink, the rendered URL has one extra level:
        # source: Course/Module/File.md -> rendered: Course/Module/File/index.html
        # So "rendered_dir" is src_file itself treated as a directory

        # Actually: rendered_depth = get_rendered_depth(src_file, repo)
        # And the rendered directory for navigation purposes is repo_root joined with
        # the rendered path (same depth as rendered_depth)

        rendered_depth = get_rendered_depth(src_file, repo)

        # Compute relative path from rendered directory to target_abs
        # rendered_dir = repo / rendered_path (depth = rendered_depth)
        # We need to go up rendered_depth levels from rendered_dir to reach repo root,
        # then descend into target_abs relative to repo root.

        # But the target might not be under repo root in terms of the BUILT site.
        # The target_abs relative to repo is what matters for the site URL.

        try:
            target_rel_to_repo = target_abs.relative_to(repo)
        except ValueError:
            # Target is outside repo, can't fix
            return href, False

        # Build new href: go up rendered_depth levels (to site root) then descend into target
        target_parts = str(target_rel_to_repo).replace('\\', '/')
        if not target_parts.endswith('/'):
            target_parts = target_parts + '/'

        # Add the suffix (like "Practice-Exams/" or empty string if suffix is just the dir)
        full_suffix = target_parts + suffix.rstrip('/')
        if suffix.endswith('/'):
            full_suffix = full_suffix + '/'

        # The correct new href navigates from rendered position:
        # up rendered_depth levels to get to site root, then descend into full path
        # But if the target_abs is already root (after going up from source), then
        # full_suffix = suffix (no extra dirs)

        new_href = '../' * rendered_depth + full_suffix

        if new_href == href:
            return href, False

        return new_href, True

    return href, False


def get_rendered_depth(src_file, repo):
    """
    Get the rendered depth of a source file.
    - Files with explicit permalink: use the depth of that permalink path.
    - Files without explicit permalink: use the source path depth
      (Jekyll pretty URLs render file.md as file/index.html, same depth).
    """
    try:
        content = src_file.read_text(encoding='utf-8', errors='ignore')
        if content.startswith('---'):
            end = content.find('---', 3)
            if end > 0:
                front = content[3:end]
                m = re.search(r'^permalink:\s*(\S+)', front, re.MULTILINE)
                if m:
                    permalink = m.group(1).strip('/')
                    if permalink:
                        return len(permalink.split('/'))
    except Exception:
        pass
    # No explicit permalink: source path depth = rendered depth
    rel = src_file.relative_to(repo)
    return len(rel.parts)


def process_file(src_file, corrections, repo, dry_run=False):
    """Process a single markdown file. Returns number of changes."""
    try:
        original = src_file.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        return 0

    content = original
    changes = 0

    # Fix markdown links: [text](href)
    def fix_md_link(m):
        nonlocal changes
        text = m.group(1)
        href = m.group(2)

        if not href or href.startswith('http') or href.startswith('#'):
            return m.group(0)
        if not (href.startswith('../') or href.startswith('./')):
            return m.group(0)

        fixed, changed = apply_corrections(href, src_file, corrections, repo)
        if changed:
            changes += 1
            return f'[{text}]({fixed})'
        return m.group(0)

    content = re.sub(r'\[([^\]]*)\]\(([^)]*)\)', fix_md_link, content)

    # Fix HTML href attributes in markdown
    def fix_html_href(m):
        nonlocal changes
        href = m.group(1)

        if not href or href.startswith('http') or href.startswith('#') or href.startswith('/'):
            return m.group(0)
        if not (href.startswith('../') or href.startswith('./')):
            return m.group(0)

        fixed, changed = apply_corrections(href, src_file, corrections, repo)
        if changed:
            changes += 1
            return f'href="{fixed}"'
        return m.group(0)

    content = re.sub(r'href="([^"]*)"', fix_html_href, content)

    if changes > 0 and content != original and not dry_run:
        src_file.write_text(content, encoding='utf-8')

    return changes


def main():
    dry_run = '--dry-run' in sys.argv

    print("Building module corrections map...")
    corrections = build_md_corrections(SITE)
    print(f"  Built {len(corrections)} corrections")

    total_files = 0
    total_changes = 0
    modified_files = []

    for src_file in sorted(REPO.rglob('*.md')):
        parts = src_file.relative_to(REPO).parts
        if any(p in SKIP_DIRS for p in parts):
            continue

        changes = process_file(src_file, corrections, REPO, dry_run=dry_run)
        total_files += 1

        if changes > 0:
            total_changes += changes
            modified_files.append((src_file.relative_to(REPO), changes))

    print(f"\nProcessed {total_files} markdown files")
    print(f"Modified {len(modified_files)} files")
    print(f"Fixed {total_changes} hrefs/links")

    if modified_files:
        print("\nModified files:")
        for f, n in modified_files:
            print(f"  {f}: {n} fix(es)")

    # Fix faq/index.html: change href="login/" to href="/login/"
    faq_html = REPO / 'faq/index.html'
    if faq_html.exists():
        faq_content = faq_html.read_text(encoding='utf-8')
        if 'href="login/"' in faq_content:
            fixed_faq = faq_content.replace('href="login/"', 'href="/login/"')
            if not dry_run:
                faq_html.write_text(fixed_faq, encoding='utf-8')
            print(f"\nFixed faq/index.html: href=\"login/\" -> href=\"/login/\"")

    if dry_run:
        print("\n[DRY RUN - no files were modified]")
    else:
        print(f"\nDone. Run 'bundle exec jekyll build --quiet' to rebuild the site.")


if __name__ == '__main__':
    main()
