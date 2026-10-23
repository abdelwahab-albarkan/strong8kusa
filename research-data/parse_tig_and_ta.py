import os
import re

DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data"

print("--- The IPTV Guide Pages ---")
with open(os.path.join(DIR, "theiptvguide_pages.xml"), "r", encoding="utf-8", errors="ignore") as f:
    for u in re.findall(r'<loc>(https?://[^<]+)</loc>', f.read()):
        print("Page:", u)

print("\n--- The IPTV Guide Posts ---")
with open(os.path.join(DIR, "theiptvguide_posts.xml"), "r", encoding="utf-8", errors="ignore") as f:
    for u in re.findall(r'<loc>(https?://[^<]+)</loc>', f.read()):
        print("Post:", u)

print("\n--- TalkAndroid IPTV Articles ---")
with open(os.path.join(DIR, "talkandroid_search_iptv.html"), "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()
    # Find article titles and links
    articles = re.findall(r'<h2[^>]*class=\"[^\"]*entry-title[^\"]*\"[^>]*>\s*<a href=\"([^\"]+)\"[^>]*>([^<]+)</a>', html, re.I)
    if not articles:
        # try general heading links
        articles = re.findall(r'<a[^>]+href=\"(https://www.talkandroid.com/[^\"]+/)\"[^>]*>([^<]+)</a>', html, re.I)
    print(f"Found {len(articles)} articles on TalkAndroid:")
    seen = set()
    for link, title in articles:
        title = title.strip()
        if link not in seen and len(title) > 5 and not link.endswith("/feed/"):
            seen.add(link)
            print(f"  [{title}] -> {link}")
