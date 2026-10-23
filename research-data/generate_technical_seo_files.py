import os
import datetime

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"
TODAY = datetime.date.today().isoformat()

# Canonical indexable pages (excluding order/ and 404)
INDEXABLE_ROUTES = [
    ("/", "1.0", "daily"),
    ("/pricing/", "0.9", "weekly"),
    ("/free-trial/", "0.9", "weekly"),
    ("/sports/", "0.85", "weekly"),
    ("/devices/firestick/", "0.85", "weekly"),
    ("/devices/android-tv-box/", "0.8", "weekly"),
    ("/apps/tivimate/", "0.8", "weekly"),
    ("/apps/iptv-smarters/", "0.75", "weekly"),
    ("/guides/fix-iptv-buffering/", "0.75", "weekly"),
    ("/comparisons/cable-vs-iptv/", "0.8", "weekly"),
    ("/guides/is-iptv-legal-usa/", "0.7", "monthly"),
    ("/guides/m3u-xtream-codes/", "0.7", "monthly"),
    ("/contact/", "0.6", "monthly"),
    ("/ownership-disclosure/", "0.5", "monthly"),
    ("/terms/", "0.4", "monthly"),
    ("/privacy/", "0.4", "monthly")
]

# 1. Sitemap.xml
sitemap_xml = ['<?xml version="1.0" encoding="UTF-8"?>']
sitemap_xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
for route, priority, changefreq in INDEXABLE_ROUTES:
    sitemap_xml.append('  <url>')
    sitemap_xml.append(f'    <loc>https://strong8kusa.com{route}</loc>')
    sitemap_xml.append(f'    <lastmod>{TODAY}</lastmod>')
    sitemap_xml.append(f'    <changefreq>{changefreq}</changefreq>')
    sitemap_xml.append(f'    <priority>{priority}</priority>')
    sitemap_xml.append('  </url>')
sitemap_xml.append('</urlset>')

sitemap_content = '\n'.join(sitemap_xml)
with open(os.path.join(BASE_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
    f.write(sitemap_content)
print(f"Generated: sitemap.xml ({len(INDEXABLE_ROUTES)} URLs, {len(sitemap_content)} bytes)")

# 2. Robots.txt (Pre-launch safety hold per original instructions)
robots_txt = """# Strong 8K USA — Robots Configuration
# Pre-launch security hold active: Search engines are restricted until official public DNS launch.

User-agent: *
Disallow: /

# Sitemap Index Reference
Sitemap: https://strong8kusa.com/sitemap.xml
"""

with open(os.path.join(BASE_DIR, "robots.txt"), "w", encoding="utf-8") as f:
    f.write(robots_txt)
print("Generated: robots.txt (Pre-launch hold active)")

# 3. Web App Manifest
manifest_json = """{
  "name": "Strong 8K USA",
  "short_name": "Strong4K",
  "description": "Premier 4K & 8K IPTV streaming and cord-cutting platform for US viewers.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#070a13",
  "theme_color": "#00d2ff",
  "icons": [
    {
      "src": "/assets/images/logo.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
"""

with open(os.path.join(BASE_DIR, "manifest.webmanifest"), "w", encoding="utf-8") as f:
    f.write(manifest_json)
print("Generated: manifest.webmanifest")

# 4. LLMs.txt & LLMs-full.txt
llms_txt = """# Strong 8K USA

> Premier 4K & 8K IPTV streaming, live sports evaluation, and cord-cutting advisory service engineered specifically for the United States.

## Core Services & Guides
- [Homepage](https://strong8kusa.com/): Overview of 25,000+ live 4K channels, 60FPS sports, and anti-freeze servers.
- [Pricing](https://strong8kusa.com/pricing/): Transparent subscription rates from $8.33/mo with 1 to 5 multi-screen options.
- [Free Trial](https://strong8kusa.com/free-trial/): Instant 24-hour test credentials with zero credit card required.
- [Live Sports Hub](https://strong8kusa.com/sports/): Guide to watching NFL, NBA, Premier League, and UFC without local blackout restrictions.
- [Firestick Setup](https://strong8kusa.com/devices/firestick/): Complete 5-minute Downloader & TiviMate walkthrough for Fire TV Stick 4K.
- [Cable vs IPTV](https://strong8kusa.com/comparisons/cable-vs-iptv/): Financial analysis demonstrating over $1,500 annual household savings.
- [Buffering Diagnostics](https://strong8kusa.com/guides/fix-iptv-buffering/): Technical guide on fixing ISP evening video throttling.
"""

with open(os.path.join(BASE_DIR, "llms.txt"), "w", encoding="utf-8") as f:
    f.write(llms_txt)
with open(os.path.join(BASE_DIR, "llms-full.txt"), "w", encoding="utf-8") as f:
    f.write(llms_txt)
print("Generated: llms.txt and llms-full.txt")
