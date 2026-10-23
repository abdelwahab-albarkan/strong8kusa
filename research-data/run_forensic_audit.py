import os
import re
import json

DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data"

pages_to_audit = [
    ("IPTV Service Radar", "https://iptvserviceradar.com/", "iptvserviceradar_home.html"),
    ("IPTV Service Radar (USA)", "https://iptvserviceradar.com/best-usa-iptv-provider/", "iptvserviceradar_usa.html"),
    ("IPTV Service Review", "https://iptvservicereview.com/", "iptvservicereview_home.html"),
    ("The IPTV Guide (Home)", "https://www.theiptvguide.com/", "theiptvguide_home.html"),
    ("The IPTV Guide (Best IPTV)", "https://www.theiptvguide.com/best-iptv-2026/", "theiptvguide_best_iptv.html"),
    ("The IPTV Guide (Firestick)", "https://www.theiptvguide.com/firestick-iptv-guide/", "theiptvguide_firestick.html"),
    ("TalkAndroid (Home)", "https://www.talkandroid.com/", "talkandroid_home.html"),
    ("TalkAndroid (Search Best IPTV)", "https://www.talkandroid.com/?s=best+iptv", "talkandroid_search_best_iptv.html"),
]

vocab_categories = {
    "Power Words": [
        "best", "premium", "ultimate", "advanced", "complete", "professional", "top", "perfect", "guaranteed", "leading"
    ],
    "Commercial Intent": [
        "buy", "order", "price", "pricing", "subscription", "plans", "packages", "cost", "cheap", "affordable", "deal", "discount"
    ],
    "Calls to Action": [
        "buy now", "subscribe today", "choose your plan", "get started", "start streaming", "learn more", "sign up", "try now", "claim discount", "check price"
    ],
    "Positive Sentiment": [
        "reliable", "excellent", "stable", "convenient", "high-quality", "seamless", "crystal-clear", "unmatched", "trusted", "fast"
    ],
    "Negative / Risk Language": [
        "buffer", "buffering", "freeze", "freezing", "lag", "throttle", "throttling", "unreliable", "scam", "waste", "mistakes", "problems"
    ],
    "Trust Signals": [
        "money-back guarantee", "refund policy", "customer support", "24/7 support", "tested", "reviewed", "secure payment", "no contract", "verified reviews", "free trial", "instant activation"
    ],
    "Benefit Statements": [
        "anti-freeze", "99.9% uptime", "buffer-free", "zero buffering", "multi-device", "4k 60fps", "8k stream", "epg guide", "no ip lock", "all devices supported"
    ]
}

results = []

for brand, url, fname in pages_to_audit:
    fpath = os.path.join(DIR, fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    # Title
    t_m = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
    title = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', t_m.group(1))).strip() if t_m else "N/A"

    # Meta desc
    d_m = re.search(r'<meta[^>]*name=[\"\']description[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
    if not d_m:
        d_m = re.search(r'<meta[^>]*content=[\"\'](.*?)[\"\'][^>]*name=[\"\']description[\"\']', html, re.I | re.S)
    desc = re.sub(r'\s+', ' ', d_m.group(1)).strip() if d_m else "N/A"

    # Canonical
    c_m = re.search(r'<link[^>]*rel=[\"\']canonical[\"\'][^>]*href=[\"\'](.*?)[\"\']', html, re.I | re.S)
    canonical = c_m.group(1).strip() if c_m else "N/A"

    # Robots
    r_m = re.search(r'<meta[^>]*name=[\"\']robots[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
    robots = r_m.group(1).strip() if r_m else "N/A"

    # Headings
    h1s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]
    h2s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)]
    h3s = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip() for h in re.findall(r'<h3[^>]*>(.*?)</h3>', html, re.I | re.S)]

    # Clean text for word count
    clean = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.I | re.S)
    clean = re.sub(r'<style[^>]*>.*?</style>', ' ', clean, flags=re.I | re.S)
    clean = re.sub(r'<svg[^>]*>.*?</svg>', ' ', clean, flags=re.I | re.S)
    clean_text = re.sub(r'<[^>]+>', ' ', clean)
    words = re.findall(r'\b[a-zA-Z0-9_\'-]+\b', clean_text)
    word_count = len(words)

    # Images
    imgs = re.findall(r'<img\s+([^>]+)>', html, re.I)
    total_imgs = len(imgs)
    imgs_with_alt = 0
    imgs_empty_alt = 0
    for img_attr in imgs:
        alt_m = re.search(r'alt=[\"\'](.*?)[\"\']', img_attr, re.I)
        if alt_m and alt_m.group(1).strip():
            imgs_with_alt += 1
        else:
            imgs_empty_alt += 1

    # Links
    internal_links = len(re.findall(r'href=[\"\'](?:/|https?://(?:www\.)?' + re.escape(url.split('/')[2]) + r')[^\"\']*[\"\']', html, re.I))
    all_links = len(re.findall(r'href=[\"\']https?://[^\"\']+[\"\']', html, re.I))
    external_links = max(0, all_links - internal_links)

    # Schemas
    schemas = re.findall(r'<script[^>]*type=[\"\']application/ld\+json[\"\'][^>]*>(.*?)</script>', html, re.I | re.S)
    schema_types = set()
    for s in schemas:
        schema_types.update(re.findall(r'\"@type\"\s*:\s*\"([^\"]+)\"', s))

    # Vocabulary & copy intelligence
    vocab_found = {}
    lower_text = clean_text.lower()
    for cat, terms in vocab_categories.items():
        vocab_found[cat] = []
        for term in terms:
            cnt = len(re.findall(r'\b' + re.escape(term) + r'\b', lower_text))
            if cnt > 0:
                vocab_found[cat].append({"term": term, "count": cnt})

    # Keyword density measurements
    target_phrases = ["best iptv", "iptv service", "iptv usa", "iptv subscription", "firestick", "tivimate", "free trial", "sports"]
    kw_densities = {}
    for phrase in target_phrases:
        cnt = len(re.findall(r'\b' + re.escape(phrase) + r'\b', lower_text))
        dens = (cnt / word_count * 100) if word_count > 0 else 0
        kw_densities[phrase] = {"count": cnt, "density_pct": round(dens, 2)}

    results.append({
        "brand": brand,
        "url": url,
        "title": title,
        "title_len": len(title),
        "desc": desc,
        "desc_len": len(desc),
        "canonical": canonical,
        "robots": robots,
        "h1s": h1s,
        "h2_count": len(h2s),
        "h2_sample": h2s[:5],
        "h3_count": len(h3s),
        "word_count": word_count,
        "total_imgs": total_imgs,
        "imgs_with_alt": imgs_with_alt,
        "imgs_empty_alt": imgs_empty_alt,
        "internal_links": internal_links,
        "external_links": external_links,
        "schema_types": sorted(list(schema_types)),
        "vocab_found": vocab_found,
        "kw_densities": kw_densities
    })

out_json = os.path.join(DIR, "forensic_page_audit_results.json")
with open(out_json, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"Audited {len(results)} competitor pages. Saved to {out_json}")
