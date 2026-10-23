import os
import glob
import re

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"
EXCLUDE_DIRS = {"node_modules", ".next", ".git", "research-data", "static-site-backup"}

french_indicators = [
    r'\bfrançais\b', r'\bfrançaise\b', r'\bfrançaises\b', r'\bfrance\b',
    r'\bchaînes\b', r'\bchaîne\b', r'\bdécodeur\b', r'\bboîtier\b',
    r'\bgratuite?\b', r'\bpayant\b', r'\baccès\b', r'\brétractation\b',
    r'\bmentions légales\b', r'\brgpd\b', r'\bconditions générales\b',
    r'\bavis clients?\b', r'\bnotre méthode\b', r'\btous vos écrans\b'
]

french_regex = re.compile('|'.join(french_indicators), re.I)

files_to_check = []
for root, dirs, files in os.walk(BASE_DIR):
    # prune excluded dirs
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for f in files:
        if f.endswith(('.ts', '.tsx', '.json', '.js', '.mjs', '.css', '.html')):
            files_to_check.append(os.path.join(root, f))

print(f"Total source files to scan: {len(files_to_check)}")

french_matches = {}
brand_matches = {}

for fpath in files_to_check:
    rel = os.path.relpath(fpath, BASE_DIR)
    try:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except Exception as e:
        continue

    # Check for 4kiptv or 4kiptvfr
    if re.search(r'4kiptv', content, re.I):
        found = re.findall(r'.{0,30}4kiptv.{0,30}', content, re.I)
        brand_matches[rel] = found[:3]

    # Check for french indicators in active code (exclude scripts and reports)
    if not rel.startswith(("scripts", "seo-reports")):
        m = french_regex.findall(content)
        if m:
            french_matches[rel] = list(set(m))[:5]

print(f"\nFiles with '4kiptv' branding matches: {len(brand_matches)}")
for f, samples in brand_matches.items():
    print(f"  {f}: {samples}")

print(f"\nFiles with French terminology matches in active code: {len(french_matches)}")
for f, terms in list(french_matches.items())[:25]:
    print(f"  {f}: {terms}")
