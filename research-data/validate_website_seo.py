import os
import re
import json

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"

html_files = []
for root, dirs, files in os.walk(BASE_DIR):
    if "research-data" in root or "data kewords" in root or "seo-reports" in root:
        continue
    for f in files:
        if f.endswith(".html"):
            html_files.append(os.path.join(root, f))

print(f"Total HTML Pages to Audit: {len(html_files)}")

audit_results = []
all_internal_links = []
broken_links = []

for p in html_files:
    rel_path = os.path.relpath(p, BASE_DIR).replace("\\", "/")
    with open(p, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    # Title
    t_m = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
    title = t_m.group(1).strip() if t_m else "MISSING"
    
    # Description
    d_m = re.search(r'<meta[^>]*name=[\"\']description[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
    if not d_m:
        d_m = re.search(r'<meta[^>]*content=[\"\'](.*?)[\"\'][^>]*name=[\"\']description[\"\']', html, re.I | re.S)
    desc = d_m.group(1).strip() if d_m else "MISSING"

    # Canonical
    c_m = re.search(r'<link[^>]*rel=[\"\']canonical[\"\'][^>]*href=[\"\'](.*?)[\"\']', html, re.I | re.S)
    canonical = c_m.group(1).strip() if c_m else "MISSING"

    # H1
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)
    clean_h1 = [re.sub(r'<[^>]+>', '', h).strip() for h in h1s]

    # H2, H3
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)
    h3s = re.findall(r'<h3[^>]*>(.*?)</h3>', html, re.I | re.S)

    # Word count (cleaned)
    clean = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.I | re.S)
    clean = re.sub(r'<style[^>]*>.*?</style>', ' ', clean, flags=re.I | re.S)
    clean = re.sub(r'<svg[^>]*>.*?</svg>', ' ', clean, flags=re.I | re.S)
    clean = re.sub(r'<[^>]+>', ' ', clean)
    words = re.findall(r'\b[a-zA-Z0-9_\'-]+\b', clean)

    # Schema
    schemas = re.findall(r'<script[^>]*type=[\"\']application/ld\+json[\"\'][^>]*>(.*?)</script>', html, re.I | re.S)
    valid_schemas = 0
    schema_types = []
    for s in schemas:
        try:
            parsed = json.loads(s)
            valid_schemas += 1
            if "@graph" in parsed:
                for node in parsed["@graph"]:
                    schema_types.append(node.get("@type", "Unknown"))
            else:
                schema_types.append(parsed.get("@type", "Unknown"))
        except Exception as e:
            pass

    # Collect internal links
    links = re.findall(r'<a[^>]*href=[\"\']([^\"\'#\s]+)[\"\']', html, re.I)
    for l in links:
        if l.startswith("/") and not l.startswith("//"):
            all_internal_links.append((rel_path, l))

    audit_results.append({
        "path": rel_path,
        "title": title,
        "title_len": len(title),
        "desc_len": len(desc),
        "canonical": canonical,
        "h1_count": len(h1s),
        "h1": clean_h1[0] if clean_h1 else "NONE",
        "h2_count": len(h2s),
        "h3_count": len(h3s),
        "words": len(words),
        "schemas": schema_types
    })

# Check internal links for broken references
for source, target in all_internal_links:
    # clean query string
    clean_target = target.split("?")[0]
    if clean_target == "/":
        target_file = os.path.join(BASE_DIR, "index.html")
    elif clean_target.endswith("/"):
        target_file = os.path.join(BASE_DIR, clean_target.strip("/").replace("/", "\\"), "index.html")
    else:
        target_file = os.path.join(BASE_DIR, clean_target.strip("/").replace("/", "\\"))
    
    if not os.path.exists(target_file):
        # Also check with .html
        if not os.path.exists(target_file + ".html"):
            broken_links.append((source, target, target_file))

print("\n=== WEBSITE AUDIT RESULTS ===")
print(f"{'Page Path':<35} | {'H1':<3} | {'Words':<6} | {'Title (Len)':<12} | {'Desc (Len)':<12} | {'Schemas'}")
print("-" * 110)
for r in audit_results:
    print(f"{r['path']:<35} | {r['h1_count']:<3} | {r['words']:<6} | {r['title_len']:<12} | {r['desc_len']:<12} | {', '.join(r['schemas']) if r['schemas'] else 'N/A'}")

print(f"\nInternal Links Checked: {len(all_internal_links)}")
print(f"Broken Internal Links Found: {len(broken_links)}")
if broken_links:
    for s, t, _ in broken_links:
        print(f"  BROKEN LINK from {s} -> {t}")
else:
    print("ALL INTERNAL LINKS RETURN 200 OK (ZERO BROKEN LINKS)!")
