import json
import re

out_path = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data\consolidated_keywords.json"
with open(out_path, "r", encoding="utf-8") as f:
    kws = json.load(f)

# Define thematic buckets
clusters = {
    "home_commercial": [],
    "subscription_pricing": [],
    "free_trial": [],
    "firestick_setup": [],
    "android_tv_box": [],
    "tivimate_player": [],
    "smarters_player": [],
    "sports_streaming": [],
    "buffering_isp_fix": [],
    "is_iptv_legal_usa": [],
    "cable_vs_iptv": [],
    "reseller_program": [],
    "m3u_xtream_guide": []
}

patterns = {
    "free_trial": re.compile(r'\b(free trial|trial|test iptv|24 hour trial|try iptv)\b', re.I),
    "subscription_pricing": re.compile(r'\b(subscription|buy|cost|price|pricing|cheap|plan|plans|month|annual)\b', re.I),
    "firestick_setup": re.compile(r'\b(firestick|fire tv|amazon fire|fire stick)\b', re.I),
    "android_tv_box": re.compile(r'\b(android box|tv box|superbox|shield|onn|abox|streaming box|streaming device|set top)\b', re.I),
    "tivimate_player": re.compile(r'\b(tivimate|tivi mate)\b', re.I),
    "smarters_player": re.compile(r'\b(smarters|iptv smarters|smarters pro)\b', re.I),
    "sports_streaming": re.compile(r'\b(sport|sports|soccer|football|nfl|nba|stream east|reddit soccer|soccer stream|ppv|espn)\b', re.I),
    "buffering_isp_fix": re.compile(r'\b(buffer|buffering|freeze|freezing|vpn|lag|slow|throttle|isp|throttling)\b', re.I),
    "is_iptv_legal_usa": re.compile(r'\b(legal|legality|law|fcc|copyright|legit|safe)\b', re.I),
    "cable_vs_iptv": re.compile(r'\b(cable|cord cut|cord cutting|directv|youtube tv|dish|xfinity|spectrum)\b', re.I),
    "m3u_xtream_guide": re.compile(r'\b(m3u|playlist|xtream|epg|portal|url|mac address|stalker)\b', re.I),
    "reseller_program": re.compile(r'\b(reseller|panel|credit|credits|wholesale)\b', re.I),
}

for item in kws:
    kw = item["keyword"]
    matched = False
    for cat, pat in patterns.items():
        if pat.search(kw):
            clusters[cat].append(item)
            matched = True
            break
    if not matched:
        if re.search(r'\b(best iptv|iptv service|iptv providers|iptv usa|top iptv|iptv 2026)\b', kw, re.I):
            clusters["home_commercial"].append(item)

print("=== KEYWORD CLUSTER TOTALS ===")
for cat, items in clusters.items():
    total_vol = sum(x["volume"] for x in items)
    print(f"Cluster: {cat:22} | Keywords: {len(items):4} | Total US Search Volume: {total_vol:,}")
    if items:
        top_3 = sorted(items, key=lambda x: x["volume"], reverse=True)[:3]
        top_str = ", ".join([f"'{x['keyword']}' ({x['volume']:,})" for x in top_3])
        print(f"   Top: {top_str}")
