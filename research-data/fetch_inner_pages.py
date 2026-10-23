import subprocess
import os

UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
DIR = r'c:\Users\clanm\OneDrive\Desktop\usa 1 site\research-data'

def fetch(url, fname):
    dest = os.path.join(DIR, fname)
    subprocess.run(['curl.exe', '-s', '-L', '--max-time', '15', '-A', UA, url, '-o', dest])
    print(f'{fname}: {os.path.getsize(dest)} bytes')

# Fetch key US landing pages
fetch('https://www.theiptvguide.com/best-iptv-2026/', 'theiptvguide_best_iptv.html')
fetch('https://www.theiptvguide.com/firestick-iptv-guide/', 'theiptvguide_firestick.html')
