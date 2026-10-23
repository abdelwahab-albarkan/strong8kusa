import os
import glob
import csv
import json

folder = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\data kewords"
all_keywords = {}

for p in glob.glob(os.path.join(folder, "*.csv")):
    fname = os.path.basename(p)
    with open(p, "r", encoding="utf-8", errors="ignore") as f:
        reader = csv.DictReader(f)
        for row in reader:
            kw = row.get("Keyword", "").strip()
            if not kw:
                continue
            kw_clean = kw.lower()
            try:
                vol = int(row.get("Volume", 0) or 0)
            except ValueError:
                vol = 0
            try:
                kd = int(row.get("Keyword Difficulty", 0) or 0)
            except ValueError:
                kd = 0
            try:
                cpc = float(row.get("CPC (USD)", 0) or 0.0)
            except ValueError:
                cpc = 0.0
            try:
                rel = int(row.get("Relevance", 0) or 0)
            except ValueError:
                rel = 0
            intent = row.get("Intent", "").strip()
            serp_features = row.get("SERP Features", "").strip()

            if kw_clean not in all_keywords or vol > all_keywords[kw_clean]["volume"]:
                all_keywords[kw_clean] = {
                    "keyword": kw,
                    "volume": vol,
                    "kd": kd,
                    "cpc": cpc,
                    "relevance": rel,
                    "intent": intent,
                    "serp_features": serp_features,
                    "source_file": fname
                }

print(f"Total Unique Keywords Extracted: {len(all_keywords)}")

sorted_by_vol = sorted(all_keywords.values(), key=lambda x: x["volume"], reverse=True)

print("\n--- TOP 30 BY VOLUME ---")
for k in sorted_by_vol[:30]:
    print(f"[{k['keyword']}] Vol: {k['volume']:,} | KD: {k['kd']} | CPC: ${k['cpc']:.2f} | Intent: {k['intent']}")

# Let's find high-intent commercial terms
commercial = [k for k in sorted_by_vol if "commercial" in k["intent"].lower() or "transactional" in k["intent"].lower()]
print(f"\nTotal Commercial/Transactional Keywords: {len(commercial)}")
print("--- TOP 20 COMMERCIAL/TRANSACTIONAL ---")
for k in commercial[:20]:
    print(f"[{k['keyword']}] Vol: {k['volume']:,} | KD: {k['kd']} | CPC: ${k['cpc']:.2f}")

# Low KD high volume (< 30 KD, > 1000 Vol)
low_kd_goldmine = [k for k in sorted_by_vol if k["kd"] <= 25 and k["volume"] >= 500]
print(f"\nTotal Low KD (<=25) Opportunities with Vol >= 500: {len(low_kd_goldmine)}")
print("--- TOP 25 LOW-KD OPPORTUNITIES ---")
for k in low_kd_goldmine[:25]:
    print(f"[{k['keyword']}] Vol: {k['volume']:,} | KD: {k['kd']} | CPC: ${k['cpc']:.2f} | Intent: {k['intent']}")

# Save clean consolidated JSON
out_path = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data\consolidated_keywords.json"
with open(out_path, "w", encoding="utf-8") as out:
    json.dump(sorted_by_vol, out, indent=2)

print(f"\nSaved consolidated keywords to {out_path}")
