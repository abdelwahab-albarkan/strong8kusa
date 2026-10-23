import glob
import re
import os

files = glob.glob('components/**/*.tsx', recursive=True) + glob.glob('app/**/*.tsx', recursive=True)
empty_alt = []

for f in files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    matches = re.findall(r'(<(?:Image|img)\b[^>]*>)', content)
    for m in matches:
        if 'alt=' not in m:
            empty_alt.append((f, 'MISSING alt', m.strip()[:80]))
        elif re.search(r'alt=[\"\']\s*[\"\']', m):
            empty_alt.append((f, 'EMPTY alt=\"\"', m.strip()[:80]))

print(f"Total empty/missing alt tags in TSX source files: {len(empty_alt)}")
for f, issue, tag in empty_alt:
    print(f"  {f}: {issue} -> {tag}")
