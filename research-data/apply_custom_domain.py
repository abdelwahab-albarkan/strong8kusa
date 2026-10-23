import os
import glob
import re
import subprocess

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"
RESEARCH_DIR = os.path.join(BASE_DIR, "research-data")
REPORTS_DIR = os.path.join(BASE_DIR, "seo-reports")

OLD_DOMAIN = "strong4kusa.com"
NEW_DOMAIN = "strong8kusa.com"

OLD_BRAND = "Strong 4K USA"
NEW_BRAND = "Strong 8K USA"

OLD_BRAND_UPPER = "STRONG 4K"
NEW_BRAND_UPPER = "STRONG 8K"

OLD_EMAIL = "support@strong4kusa.com"
NEW_EMAIL = "support@strong8kusa.com"

# 1. Update Generator Python Scripts
scripts_to_update = [
    "base_templates.py",
    "generate_homepage.py",
    "generate_core_pages.py",
    "generate_content_pages.py",
    "enrich_schemas.py",
    "generate_technical_seo_files.py"
]

for s in scripts_to_update:
    path = os.path.join(RESEARCH_DIR, s)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        
        content = content.replace(OLD_DOMAIN, NEW_DOMAIN)
        content = content.replace(OLD_BRAND, NEW_BRAND)
        content = content.replace(OLD_BRAND_UPPER, NEW_BRAND_UPPER)
        content = content.replace(OLD_EMAIL, NEW_EMAIL)
        content = content.replace("trial_usa_4k_test", "trial_usa_8k_test")
        content = content.replace("line.strong4kusa.com", "line.strong8kusa.com")
        
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated script: {s}")

# 2. Re-run generators
print("\nRe-generating website with custom domain strong8kusa.com...")
subprocess.run(["py", "-3", os.path.join(RESEARCH_DIR, "generate_homepage.py")], check=True)
subprocess.run(["py", "-3", os.path.join(RESEARCH_DIR, "generate_core_pages.py")], check=True)
subprocess.run(["py", "-3", os.path.join(RESEARCH_DIR, "generate_content_pages.py")], check=True)
subprocess.run(["py", "-3", os.path.join(RESEARCH_DIR, "enrich_schemas.py")], check=True)
subprocess.run(["py", "-3", os.path.join(RESEARCH_DIR, "generate_technical_seo_files.py")], check=True)

# 3. Update Reports in seo-reports/
for p in glob.glob(os.path.join(REPORTS_DIR, "*.md")):
    with open(p, "r", encoding="utf-8") as f:
        rep = f.read()
    rep = rep.replace(OLD_DOMAIN, NEW_DOMAIN)
    rep = rep.replace(OLD_BRAND, NEW_BRAND)
    with open(p, "w", encoding="utf-8") as f:
        f.write(rep)
    print(f"Updated report: {os.path.basename(p)}")

# 4. Update manifest, CSS, LLMs if any references exist
for p in [os.path.join(BASE_DIR, "manifest.webmanifest"), os.path.join(BASE_DIR, "llms.txt"), os.path.join(BASE_DIR, "llms-full.txt")]:
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            txt = f.read()
        txt = txt.replace(OLD_DOMAIN, NEW_DOMAIN)
        txt = txt.replace(OLD_BRAND, NEW_BRAND)
        with open(p, "w", encoding="utf-8") as f:
            f.write(txt)
        print(f"Updated: {os.path.basename(p)}")

print("\nDomain upgrade to strong8kusa.com complete!")
