import os
import sys

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"
sys.path.append(os.path.join(BASE_DIR, "research-data"))
from base_templates import get_head, get_header, get_footer

def write_page(rel_path, content):
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated: {rel_path} ({len(content):,} bytes)")

print("Ready to generate production pages...")
