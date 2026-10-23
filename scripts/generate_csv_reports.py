import os
import json
import csv

DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"
RESEARCH_DIR = os.path.join(DIR, "research-data")
REPORTS_DIR = os.path.join(DIR, "seo-reports")

with open(os.path.join(RESEARCH_DIR, "forensic_page_audit_results.json"), "r", encoding="utf-8") as f:
    comp_audit = json.load(f)

with open(os.path.join(RESEARCH_DIR, "strong8kusa_audit_results.json"), "r", encoding="utf-8") as f:
    strong_audit = json.load(f)

with open(os.path.join(RESEARCH_DIR, "consolidated_keywords.json"), "r", encoding="utf-8") as f:
    keywords = json.load(f)

# 1. Generate competitor_comparison_matrix.csv
csv_path = os.path.join(REPORTS_DIR, "competitor_comparison_matrix.csv")
with open(csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow([
        "Brand", "Page Label", "URL", "Title", "Title Length", "Title Truncation Risk",
        "Meta Description", "Meta Length", "H1", "H2 Count", "H3 Count", "Word Count",
        "Total Images", "Images With Alt", "Images Missing Alt", "Internal Links",
        "External Links", "Schema Types", "Exact Best IPTV Density (%)", "Exact IPTV Service Density (%)"
    ])
    
    for row in comp_audit:
        dens_best_iptv = row.get("kw_densities", {}).get("best iptv", {}).get("density_pct", 0.0)
        dens_service = row.get("kw_densities", {}).get("iptv service", {}).get("density_pct", 0.0)
        trunc = "Yes (>60 chars)" if row["title_len"] > 60 else "No (Optimal)"
        h1 = row["h1s"][0] if row["h1s"] else "MISSING"
        schemas = ", ".join(row["schema_types"])
        writer.writerow([
            row["brand"], row["brand"], row["url"], row["title"], row["title_len"], trunc,
            row["desc"], row["desc_len"], h1, row["h2_count"], row["h3_count"], row["word_count"],
            row["total_imgs"], row["imgs_with_alt"], row["imgs_empty_alt"], row["internal_links"],
            row["external_links"], schemas, dens_best_iptv, dens_service
        ])
    
    for row in strong_audit:
        dens_best_iptv = row.get("kw_densities", {}).get("best iptv", {}).get("density_pct", 0.0)
        dens_service = row.get("kw_densities", {}).get("iptv service", {}).get("density_pct", 0.0)
        trunc = "Yes (>60 chars)" if row["title_len"] > 60 else "No (Optimal)"
        h1 = row["h1s"][0] if row["h1s"] else "MISSING"
        schemas = ", ".join(row["schema_types"])
        writer.writerow([
            "Strong 8K USA", row["label"], row["url"], row["title"], row["title_len"], trunc,
            row["desc"], row["desc_len"], h1, row["h2_count"], row["h3_count"], row["word_count"],
            row["total_imgs"], row["imgs_with_alt"], row["imgs_empty_alt"], row["internal_links"],
            row["external_links"], schemas, dens_best_iptv, dens_service
        ])

print(f"Generated {csv_path}")

# 2. Generate keyword_target_mapping.csv for top 50 high-priority keywords
kw_csv_path = os.path.join(REPORTS_DIR, "keyword_target_mapping.csv")
# Sort by volume descending
sorted_kws = sorted(keywords, key=lambda x: x.get("volume", 0), reverse=True)[:50]
with open(kw_csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["Keyword", "Search Volume (US)", "Keyword Difficulty (KD)", "CPC (USD)", "Search Intent", "Target URL on Strong8kusa.com", "Implementation Hub"])
    for kw in sorted_kws:
        k = kw.get("keyword", "")
        vol = kw.get("volume", 0)
        kd = kw.get("kd", 0)
        cpc = kw.get("cpc", 0.0)
        
        # Determine intent & target route
        if any(w in k for w in ["buy", "subscription", "price", "pricing", "cost", "cheap", "plans"]):
            intent = "Transactional / Commercial"
            url = "https://strong8kusa.com/pricing"
            hub = "Pricing & Plans"
        elif any(w in k for w in ["trial", "free"]):
            intent = "Transactional / Commercial"
            url = "https://strong8kusa.com/free-trial"
            hub = "Conversion / Trials"
        elif any(w in k for w in ["firestick", "fire tv"]):
            intent = "Informational / Technical"
            url = "https://strong8kusa.com/devices/firestick"
            hub = "Device Guides"
        elif any(w in k for w in ["tivimate"]):
            intent = "Informational / Technical"
            url = "https://strong8kusa.com/apps/tivimate"
            hub = "Application Guides"
        elif any(w in k for w in ["smarters"]):
            intent = "Informational / Technical"
            url = "https://strong8kusa.com/apps/iptv-smarters"
            hub = "Application Guides"
        elif any(w in k for w in ["sport", "soccer", "nfl", "nba", "stream"]):
            intent = "Commercial / Entertainment"
            url = "https://strong8kusa.com/sports"
            hub = "Sports Hub"
        elif any(w in k for w in ["buffer", "buffering", "freeze", "lag"]):
            intent = "Informational / Technical Fix"
            url = "https://strong8kusa.com/problemes/fix-iptv-buffering"
            hub = "Troubleshooting Hub"
        elif any(w in k for w in ["cable", "cord cut", "vs"]):
            intent = "Commercial Investigation"
            url = "https://strong8kusa.com/comparatifs/iptv-vs-cable"
            hub = "Comparisons Hub"
        elif any(w in k for w in ["superbox", "box", "android"]):
            intent = "Commercial Investigation"
            url = "https://strong8kusa.com/devices/android-tv-box"
            hub = "Device Guides"
        else:
            intent = "Commercial Investigation"
            url = "https://strong8kusa.com/"
            hub = "Homepage Core Money"
            
        writer.writerow([k, vol, kd, cpc, intent, url, hub])

print(f"Generated {kw_csv_path}")
