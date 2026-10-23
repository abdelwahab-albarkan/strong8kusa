import os
import re
import xml.etree.ElementTree as ET

RESEARCH_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data"

def inspect_xml(filename):
    path = os.path.join(RESEARCH_DIR, filename)
    if not os.path.exists(path):
        return f"File {filename} not found"
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    urls = re.findall(r'<loc>(https?://[^<]+)</loc>', content)
    lastmods = re.findall(r'<lastmod>([^<]+)</lastmod>', content)
    return {
        "file": filename,
        "url_count": len(urls),
        "urls": urls[:30],
        "all_urls": urls
    }

print("=== SITEMAP ANALYSIS ===")

# iptvservicereview
isr_sm = inspect_xml("iptvservicereview_sitemap.xml")
print(f"IPTV Service Review URLs ({isr_sm['url_count']}):")
for u in isr_sm["urls"]:
    print(f"  {u}")

# theiptvguide
tig_sm = inspect_xml("theiptvguide_sitemap.xml")
print(f"\nThe IPTV Guide URLs ({tig_sm['url_count']}):")
for u in tig_sm["urls"]:
    print(f"  {u}")

# talkandroid sitemap index
ta_sm = inspect_xml("talkandroid_sitemap.xml")
print(f"\nTalkAndroid Sitemaps ({ta_sm['url_count']}):")
for u in ta_sm["urls"]:
    print(f"  {u}")
