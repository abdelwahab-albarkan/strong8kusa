import os
import re
import json

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"

def add_schema(file_path, schema_dict):
    full_path = os.path.join(BASE_DIR, file_path)
    if not os.path.exists(full_path):
        return
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    schema_str = f"""
  <script type="application/ld+json">
{json.dumps(schema_dict, indent=2)}
  </script>
</head>"""
    
    if "</head>" in content and "application/ld+json" not in content:
        content = content.replace("</head>", schema_str)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Enriched schema: {file_path}")

# TiviMate
add_schema("apps/tivimate/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "headline": "TiviMate IPTV Player Setup Guide: M3U & Xtream Codes (2026)",
      "description": "Master TiviMate IPTV Player setup on Firestick and Android TV. Complete guide to Xtream Codes login, custom EPG guide mapping, recording, and multi-screen.",
      "url": "https://strong8kusa.com/apps/tivimate/",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://strong8kusa.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Apps", "item": "https://strong8kusa.com/apps/" },
        { "@type": "ListItem", "position": 3, "name": "TiviMate Setup", "item": "https://strong8kusa.com/apps/tivimate/" }
      ]
    }
  ]
})

# IPTV Smarters
add_schema("apps/iptv-smarters/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "headline": "IPTV Smarters Pro Setup Guide: Download & Login (2026)",
      "description": "How to install and configure IPTV Smarters Pro on Firestick, Samsung TV, LG TV, Android and iOS.",
      "url": "https://strong8kusa.com/apps/iptv-smarters/",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://strong8kusa.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Apps", "item": "https://strong8kusa.com/apps/" },
        { "@type": "ListItem", "position": 3, "name": "IPTV Smarters Setup", "item": "https://strong8kusa.com/apps/iptv-smarters/" }
      ]
    }
  ]
})

# Android TV Box
add_schema("devices/android-tv-box/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Android TV Box for IPTV 2026: Superbox vs Shield vs onn",
      "description": "Compare the best Android TV streaming boxes for IPTV in 2026. Superbox vs Nvidia Shield TV Pro vs Walmart onn 4K Pro.",
      "url": "https://strong8kusa.com/devices/android-tv-box/",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://strong8kusa.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Devices", "item": "https://strong8kusa.com/devices/" },
        { "@type": "ListItem", "position": 3, "name": "Android TV Box", "item": "https://strong8kusa.com/devices/android-tv-box/" }
      ]
    }
  ]
})

# Buffering Guide
add_schema("guides/fix-iptv-buffering/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "How to Fix IPTV Buffering and ISP Throttling in the USA",
      "description": "Step-by-step diagnostic fixes for peak-hour buffering, Comcast/Spectrum throttling, and DNS latency.",
      "step": [
        { "@type": "HowToStep", "name": "Connect via WireGuard VPN", "text": "Bypass ISP deep-packet inspection throttling by enabling WireGuard protocol VPN." },
        { "@type": "HowToStep", "name": "Switch to Fast Public DNS", "text": "Change router DNS to Cloudflare 1.1.1.1 or Google 8.8.8.8." },
        { "@type": "HowToStep", "name": "Connect via Ethernet", "text": "Replace congested Wi-Fi channels with a hardwired gigabit Ethernet cable." },
        { "@type": "HowToStep", "name": "Increase Player Buffer Cache", "text": "Configure buffer size to Large in your player settings." }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://strong8kusa.com/guides/" },
        { "@type": "ListItem", "position": 3, "name": "Fix Buffering", "item": "https://strong8kusa.com/guides/fix-iptv-buffering/" }
      ]
    }
  ]
})

# Cable vs IPTV
add_schema("comparisons/cable-vs-iptv/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "IPTV vs Cable TV (2026): Average US Household Savings Guide",
      "description": "How much do Americans save switching from Cable or DirecTV to IPTV? Compare channel line-ups, hidden broadcast fees, and cord-cutting costs.",
      "url": "https://strong8kusa.com/comparisons/cable-vs-iptv/",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://strong8kusa.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://strong8kusa.com/comparisons/" },
        { "@type": "ListItem", "position": 3, "name": "Cable vs IPTV", "item": "https://strong8kusa.com/comparisons/cable-vs-iptv/" }
      ]
    }
  ]
})

# Legal Guide
add_schema("guides/is-iptv-legal-usa/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Is IPTV Legal in the US? Copyright, FCC Laws & Safety Guide",
      "description": "An objective, fact-based guide to IPTV legality in the United States. Copyright laws, Protecting Lawful Streaming Act, and consumer safety.",
      "url": "https://strong8kusa.com/guides/is-iptv-legal-usa/",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://strong8kusa.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://strong8kusa.com/guides/" },
        { "@type": "ListItem", "position": 3, "name": "Is IPTV Legal?", "item": "https://strong8kusa.com/guides/is-iptv-legal-usa/" }
      ]
    }
  ]
})

# M3U Guide
add_schema("guides/m3u-xtream-codes/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "headline": "M3U Playlist & Xtream Codes Setup Guide (2026)",
      "description": "Learn how M3U playlists, Xtream Codes API credentials, and EPG URLs work.",
      "url": "https://strong8kusa.com/guides/m3u-xtream-codes/",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://strong8kusa.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://strong8kusa.com/guides/" },
        { "@type": "ListItem", "position": 3, "name": "M3U & Xtream Codes", "item": "https://strong8kusa.com/guides/m3u-xtream-codes/" }
      ]
    }
  ]
})

# Contact Page
add_schema("contact/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact Strong 8K USA Customer Service",
      "url": "https://strong8kusa.com/contact/",
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://strong8kusa.com/contact/" }
      ]
    }
  ]
})

# Ownership Disclosure
add_schema("ownership-disclosure/index.html", {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "FTC Ownership & Editorial Disclosure",
      "url": "https://strong8kusa.com/ownership-disclosure/",
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://strong8kusa.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ownership Disclosure", "item": "https://strong8kusa.com/ownership-disclosure/" }
      ]
    }
  ]
})

print("Schema enrichment completed.")
