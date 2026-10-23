import urllib.request
import re
import xml.etree.ElementTree as ET
import time

BASE_URL = "http://localhost:3001"

# 1. Fetch sitemap.xml
print("Fetching sitemap.xml...")
try:
    resp = urllib.request.urlopen(f"{BASE_URL}/sitemap.xml", timeout=10)
    xml_content = resp.read()
    root = ET.fromstring(xml_content)
    # Extract all <loc>
    namespaces = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    locs = [elem.text for elem in root.findall('.//ns:loc', namespaces)]
except Exception as e:
    print(f"Error reading sitemap: {e}")
    locs = []

print(f"Discovered {len(locs)} URLs in sitemap.xml")

results = []
broken_links = []
checked_links = set()

# We will sample/test the first 30 URLs plus core hubs
sample_urls = locs if len(locs) <= 40 else (locs[:25] + [u for u in locs if any(h in u for h in ['firestick', 'tivimate', 'sport', 'buffer', 'cable', 'prix', 'contact', 'essai'])][:15])
unique_sample = list(dict.fromkeys(sample_urls))

print(f"\nAuditing {len(unique_sample)} representative routes across all silos...")

for url in unique_sample:
    # Map domain to localhost:3001
    local_path = url.replace("https://strong8kusa.com", "")
    if not local_path:
        local_path = "/"
    test_url = f"{BASE_URL}{local_path}"
    
    try:
        t0 = time.time()
        req = urllib.request.Request(test_url, headers={'User-Agent': 'Mozilla/5.0 (SEO-Auditor)'})
        with urllib.request.urlopen(req, timeout=10) as r:
            status = r.status
            html = r.read().decode('utf-8', errors='ignore')
        elapsed = round((time.time() - t0) * 1000)
    except Exception as e:
        results.append({
            "url": local_path,
            "status": f"FAILED: {e}",
            "title": "N/A",
            "h1": "N/A",
            "desc": "N/A",
            "schemas": [],
            "empty_alts": 0
        })
        continue

    # Title
    t_m = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
    title = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', t_m.group(1))).strip() if t_m else "MISSING"

    # Meta desc
    d_m = re.search(r'<meta[^>]*name=[\"\']description[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
    if not d_m:
        d_m = re.search(r'<meta[^>]*content=[\"\'](.*?)[\"\'][^>]*name=[\"\']description[\"\']', html, re.I | re.S)
    desc = re.sub(r'\s+', ' ', d_m.group(1)).strip() if d_m else "MISSING"

    # Canonical
    c_m = re.search(r'<link[^>]*rel=[\"\']canonical[\"\'][^>]*href=[\"\'](.*?)[\"\']', html, re.I | re.S)
    canonical = c_m.group(1).strip() if c_m else "MISSING"

    # H1
    h1s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]

    # Empty alts
    imgs = re.findall(r'<img\s+([^>]+)>', html, re.I)
    empty_alts = 0
    for img_attr in imgs:
        if 'alt=' not in img_attr or re.search(r'alt=[\"\']\s*[\"\']', img_attr):
            empty_alts += 1

    # Schemas
    schemas = re.findall(r'<script[^>]*type=[\"\']application/ld\+json[\"\'][^>]*>(.*?)</script>', html, re.I | re.S)
    schema_types = set()
    for s in schemas:
        schema_types.update(re.findall(r'\"@type\"\s*:\s*\"([^\"]+)\"', s))

    results.append({
        "url": local_path,
        "status": status,
        "time_ms": elapsed,
        "title": title,
        "title_len": len(title),
        "desc": desc,
        "desc_len": len(desc),
        "canonical": canonical,
        "h1_count": len(h1s),
        "h1": h1s[0] if h1s else "MISSING",
        "total_imgs": len(imgs),
        "empty_alts": empty_alts,
        "schemas": sorted(list(schema_types))
    })

print("\n=== AUDIT RESULTS SUMMARY ===")
all_200 = all(r.get("status") == 200 for r in results)
all_h1 = all(r.get("h1_count") == 1 for r in results)
all_canonicals = all(r.get("canonical", "").startswith("https://strong8kusa.com") for r in results)
all_alts_clean = all(r.get("empty_alts", 0) == 0 for r in results)

print(f"Total Pages Checked: {len(results)}")
print(f"HTTP 200 OK Across All Pages: {'YES (100%)' if all_200 else 'NO'}")
print(f"Exactly 1 H1 Tag Per Page: {'YES (100%)' if all_h1 else 'NO'}")
print(f"Strict https://strong8kusa.com Canonicals: {'YES (100%)' if all_canonicals else 'NO'}")
print(f"Zero Missing Image Alt Tags: {'YES (100%)' if all_alts_clean else 'NO'}")

print("\n--- Sample Inspected Pages ---")
for r in results[:10]:
    print(f"[{r['status']}] {r['url']}")
    print(f"   Title ({r.get('title_len', 0)} ch): {r['title']}")
    print(f"   H1: {r.get('h1', 'N/A')[:60]}...")
    print(f"   Canonical: {r.get('canonical')}")
    print(f"   Images: {r.get('total_imgs')} (Empty alt: {r.get('empty_alts')}) | Schemas: {', '.join(r.get('schemas', []))}")
