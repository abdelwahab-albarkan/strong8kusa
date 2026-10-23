import os
import glob
import re

APP_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site\app"

files = glob.glob(os.path.join(APP_DIR, "**", "*.tsx"), recursive=True) + glob.glob(os.path.join(APP_DIR, "**", "*.ts"), recursive=True)

modified = 0

for fpath in files:
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    new_content = content
    if "4kiptvfr.com" in new_content:
        new_content = new_content.replace("4kiptvfr.com", "strong8kusa.com")
    if "4kiptvfr" in new_content:
        new_content = new_content.replace("4kiptvfr", "Strong 8K USA")
        
    if new_content != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        modified += 1
        print(f"Cleaned legacy references in: {os.path.relpath(fpath, APP_DIR)}")

print(f"\nTotal files updated: {modified}")
