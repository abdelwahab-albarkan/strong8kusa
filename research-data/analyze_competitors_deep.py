import os
import re
import json
from bs4 import BeautifulSoup

DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data"

files_to_analyze = [
    ("IPTV Service Radar", "iptvserviceradar_home.html", "https://iptvserviceradar.com/"),
    ("IPTV Service Review", "iptvservicereview_home.html", "https://iptvservicereview.com/"),
    ("The IPTV Guide", "theiptvguide_home.html", "https://www.theiptvguide.com/"),
    ("TalkAndroid", "talkandroid_home.html", "https://www.talkandroid.com/")
]

results = []

for brand, fname, url in files_to_analyze:
    fpath = os.path.join(DIR, fname)
    if not os.path.exists(fpath):
        print(f"Skipping {fname}, file missing")
        continue
    
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()
    
    # Title
    t_match = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
    title = t_match.group(1).strip() if t_match else "None"
    # clean HTML entities in title
    title = re.sub(r'&[a-zA-Z0-9#]+;', ' ', title)
    title = re.sub(r'\s+', ' ', title).strip()
    
    # Meta description
    m_match = re.search(r'<meta[^>]*name=[\"\']description[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
    if not m_match:
        m_match = re.search(r'<meta[^>]*content=[\"\'](.*?)[\"\'][^>]*name=[\"\']description[\"\']', html, re.I | re.S)
    meta_desc = m_match.group(1).strip() if m_match else "None"
    meta_desc = re.sub(r'\s+', ' ', meta_desc).strip()
    
    # Canonical
    c_match = re.search(r'<link[^>]*rel=[\"\']canonical[\"\'][^>]*href=[\"\'](.*?)[\"\']', html, re.I | re.S)
    canonical = c_match.group(1).strip() if c_match else "None"
    
    # Robots
    r_match = re.search(r'<meta[^>]*name=[\"\']robots[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
    robots = r_match.group(1).strip() if r_match else "None"
    
    # Headings
    h1s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]
    h2s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)]
    h3s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h3[^>]*>(.*?)</h3>', html, re.I | re.S)]
    
    # Text word count (remove scripts, styles, svg, noscript)
    clean_html = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.I | re.S)
    clean_html = re.sub(r'<style[^>]*>.*?</style>', ' ', clean_html, flags=re.I | re.S)
    clean_html = re.sub(r'<svg[^>]*>.*?</svg>', ' ', clean_html, flags=re.I | re.S)
    clean_html = re.sub(r'<noscript[^>]*>.*?</noscript>', ' ', clean_html, flags=re.I | re.S)
    clean_text = re.sub(r'<[^>]+>', ' ', clean_html)
    words = re.findall(r'\b[a-zA-Z0-9_\'-]+\b', clean_text)
    word_count = len(words)
    
    # Images
    imgs = re.findall(r'<img\s+([^>]+)>', html, re.I)
    total_imgs = len(imgs)
    imgs_with_alt = sum(1 for img in imgs if re.search(r'alt=[\"\'][^\"\']+[\"\']', img, re.I))
    imgs_empty_alt = total_imgs - imgs_with_alt
    
    # Links
    links = re.findall(r'<a\s+[^>]*href=[\"\']([^\"\'#\s]+)[\"\']', html, re.I)
    internal_links = sum(1 for l in links if l.startswith('/') or url in l)
    external_links = len(links) - internal_links
    
    # Schema JSON-LD
    schemas = re.findall(r'<script[^>]*type=[\"\']application/ld\+json[\"\'][^>]*>(.*?)</script>', html, re.I | re.S)
    schema_types = []
    for s in schemas:
        types = re.findall(r'\"@type\"\s*:\s*\"([^\"]+)\"', s)
        types_arr = re.findall(r'\"@type\"\s*:\s*\[(.*?)\]', s)
        for t in types:
            schema_types.append(t)
        for ta in types_arr:
            schema_types.extend([x.replace('"', '').strip() for x in ta.split(',')])
    schema_types = sorted(list(set(schema_types)))
    
    # Keyword occurrences
    clean_lower = clean_text.lower()
    kw_iptv = len(re.findall(r'\biptv\b', clean_lower))
    kw_usa = len(re.findall(r'\b(usa|us|united states|america)\b', clean_lower))
    kw_service = len(re.findall(r'\bservice(s)?\b', clean_lower))
    kw_sub = len(re.findall(r'\bsubscription(s)?\b', clean_lower))
    kw_free_trial = len(re.findall(r'\bfree trial\b', clean_lower))
    kw_firestick = len(re.findall(r'\bfirestick|fire tv\b', clean_lower))
    kw_sports = len(re.findall(r'\bsport(s)?\b', clean_lower))
    kw_legal = len(re.findall(r'\blegal|legality|law\b', clean_lower))
    
    results.append({
        "brand": brand,
        "url": url,
        "title": title,
        "title_len": len(title),
        "meta_desc": meta_desc,
        "meta_len": len(meta_desc),
        "canonical": canonical,
        "robots": robots,
        "h1_count": len(h1s),
        "h1s": h1s,
        "h2_count": len(h2s),
        "h2_sample": h2s[:8],
        "h3_count": len(h3s),
        "word_count": word_count,
        "total_imgs": total_imgs,
        "imgs_with_alt": imgs_with_alt,
        "imgs_empty_alt": imgs_empty_alt,
        "internal_links": internal_links,
        "external_links": external_links,
        "schema_types": schema_types,
        "kw_counts": {
            "iptv": kw_iptv,
            "usa": kw_usa,
            "service": kw_service,
            "subscription": kw_sub,
            "free_trial": kw_free_trial,
            "firestick": kw_firestick,
            "sports": kw_sports,
            "legal": kw_legal
        }
    })

print(json.dumps(results, indent=2))

with open(os.path.join(DIR, "competitor_deep_summary.json"), "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)
print("Saved competitor_deep_summary.json successfully.")
