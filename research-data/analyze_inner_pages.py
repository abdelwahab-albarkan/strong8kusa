import os
import re
import json

DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data"

pages = [
    ("IPTV Service Radar - Best USA IPTV Provider", "iptvserviceradar_usa.html"),
    ("IPTV Service Review - Best IPTV Service USA 2026", "iptvservicereview_home.html"),
    ("The IPTV Guide - Best IPTV 2026", "theiptvguide_best_iptv.html"),
    ("The IPTV Guide - Firestick IPTV Guide", "theiptvguide_firestick.html")
]

for label, fname in pages:
    fpath = os.path.join(DIR, fname)
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()
    
    t_m = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
    title = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', t_m.group(1))).strip() if t_m else "None"
    
    d_m = re.search(r'<meta[^>]*name=[\"\']description[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
    if not d_m:
        d_m = re.search(r'<meta[^>]*content=[\"\'](.*?)[\"\'][^>]*name=[\"\']description[\"\']', html, re.I | re.S)
    desc = re.sub(r'\s+', ' ', d_m.group(1)).strip() if d_m else "None"
    
    h1s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]
    h2s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)]
    
    # clean text
    clean = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.I | re.S)
    clean = re.sub(r'<style[^>]*>.*?</style>', ' ', clean, flags=re.I | re.S)
    clean = re.sub(r'<svg[^>]*>.*?</svg>', ' ', clean, flags=re.I | re.S)
    clean = re.sub(r'<[^>]+>', ' ', clean)
    words = re.findall(r'\b[a-zA-Z0-9_\'-]+\b', clean)
    
    schemas = re.findall(r'<script[^>]*type=[\"\']application/ld\+json[\"\'][^>]*>(.*?)</script>', html, re.I | re.S)
    schema_types = []
    for s in schemas:
        schema_types.extend(re.findall(r'\"@type\"\s*:\s*\"([^\"]+)\"', s))
    
    print(f"\n==========================================")
    print(f"PAGE: {label}")
    print(f"Title ({len(title)}): {title}")
    print(f"Meta ({len(desc)}): {desc}")
    print(f"H1 ({len(h1s)}): {h1s}")
    print(f"Words: {len(words)}")
    print(f"H2 Count: {len(h2s)}")
    print(f"H2 Sample: {h2s[:6]}")
    print(f"Schemas: {sorted(list(set(schema_types)))}")
