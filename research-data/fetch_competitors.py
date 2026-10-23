import os
import sys
import re
import json
import subprocess
import shutil

RESEARCH_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

def run_curl(url, outfile, headers=False):
    cmd = ["curl.exe", "-s", "-L", "--max-time", "15", "-A", UA]
    if headers:
        cmd.append("-I")
    cmd.extend([url, "-o", outfile])
    res = subprocess.run(cmd, capture_output=True, text=True)
    return os.path.exists(outfile) and os.path.getsize(outfile) > 0

print("Fetching competitor data...")

# 1. TalkAndroid
print("Fetching TalkAndroid...")
run_curl("https://www.talkandroid.com/", os.path.join(RESEARCH_DIR, "talkandroid_home.html"))
run_curl("https://www.talkandroid.com/robots.txt", os.path.join(RESEARCH_DIR, "talkandroid_robots.txt"))
# TalkAndroid sitemap
run_curl("https://www.talkandroid.com/sitemap_index.xml", os.path.join(RESEARCH_DIR, "talkandroid_sitemap.xml"))

# 2. The IPTV Guide
print("Fetching The IPTV Guide...")
run_curl("https://www.theiptvguide.com/", os.path.join(RESEARCH_DIR, "theiptvguide_home.html"))
run_curl("https://www.theiptvguide.com/robots.txt", os.path.join(RESEARCH_DIR, "theiptvguide_robots.txt"))
run_curl("https://www.theiptvguide.com/sitemap_index.xml", os.path.join(RESEARCH_DIR, "theiptvguide_sitemap.xml"))
run_curl("https://www.theiptvguide.com/sitemap.xml", os.path.join(RESEARCH_DIR, "theiptvguide_sitemap_alt.xml"))

# 3. IPTV Service Review
print("Fetching IPTV Service Review...")
run_curl("https://iptvservicereview.com/", os.path.join(RESEARCH_DIR, "iptvservicereview_home.html"))
run_curl("https://iptvservicereview.com/robots.txt", os.path.join(RESEARCH_DIR, "iptvservicereview_robots.txt"))
run_curl("https://iptvservicereview.com/sitemap.xml", os.path.join(RESEARCH_DIR, "iptvservicereview_sitemap.xml"))
run_curl("https://iptvservicereview.com/reviews/", os.path.join(RESEARCH_DIR, "iptvservicereview_reviews.html"))
run_curl("https://iptvservicereview.com/alternatives/", os.path.join(RESEARCH_DIR, "iptvservicereview_alternatives.html"))
run_curl("https://iptvservicereview.com/iptv-reseller-program/", os.path.join(RESEARCH_DIR, "iptvservicereview_reseller.html"))
run_curl("https://iptvservicereview.com/how-we-test-iptv-services/", os.path.join(RESEARCH_DIR, "iptvservicereview_how_we_test.html"))

# 4. IPTV Service Radar
print("Copying/saving IPTV Service Radar...")
radar_home_cache = r"C:\Users\clanm\.gemini\antigravity-ide\brain\0c60a19c-df02-42c6-86ae-d97e38370e63\.system_generated\steps\82\content.md"
radar_sitemap_cache = r"C:\Users\clanm\.gemini\antigravity-ide\brain\0c60a19c-df02-42c6-86ae-d97e38370e63\.system_generated\steps\92\content.md"
if os.path.exists(radar_home_cache):
    shutil.copyfile(radar_home_cache, os.path.join(RESEARCH_DIR, "iptvserviceradar_home.html"))
if os.path.exists(radar_sitemap_cache):
    shutil.copyfile(radar_sitemap_cache, os.path.join(RESEARCH_DIR, "iptvserviceradar_post_sitemap.xml"))

print("Fetch step finished. Listing files:")
for f in os.listdir(RESEARCH_DIR):
    p = os.path.join(RESEARCH_DIR, f)
    print(f" - {f}: {os.path.getsize(p)} bytes")
