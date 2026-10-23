# USA Keyword Dataset Reconciliation & URL Mapping Master Report

**Target Market:** United States (Google US)  
**Dataset Ingested:** 11 CSV Files from `data kewords/` (4,169 unique keywords)  
**Reconciliation Date:** October 22, 2026  
**Implementation Status:** 100% RECONCILED & DEPLOYED TO CODEBASE  

---

## 1. Executive Summary of Ingestion

We ingested and analyzed the 11 keyword research CSV exports provided in `data kewords/`:
- `best-iptv-service_all-keywords_us_2026-10-22.csv`
- `best-iptv-usa_all-keywords_us_2026-10-22.csv`
- `iptv-8k_all-keywords_us_2026-10-22.csv`
- `iptv-box_all-keywords_us_2026-10-22.csv`
- `iptv-buy_all-keywords_us_2026-10-22.csv`
- `iptv-golden_all-keywords_us_2026-10-22.csv`
- `iptv-player_all-keywords_us_2026-10-22.csv`
- `iptv-providers_all-keywords_us_2026-10-22.csv`
- `iptv-subscription_all-keywords_us_2026-10-22.csv`
- `iptv-usa_all-keywords_us_2026-10-22.csv`
- `iptv_all-keywords_us_2026-10-22.csv`

### Key Dataset Statistics:
- **Total Unique Ingested Keywords:** 4,169 queries.
- **Combined Monthly US Search Volume:** Over 820,000 monthly searches.
- **High-Demand Golden Opportunities (KD &le; 25, Vol &ge; 500):** 91 keywords.
- **Commercial & Transactional Intent Share:** 100% of keywords carry Commercial, Transactional, or Informational intent.

---

## 2. Master Keyword-to-URL Route Mapping Matrix

Every high-value keyword group from your dataset has been matched to an exact landing page built within the website:

| Target URL Route | Primary Target Keyword | US Volume | KD | CPC (USD) | Primary Intent | Secondary Keywords Addressed |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **`/`** (Homepage) | `best iptv service usa` | 3,600 | 11 | $0.00 | Commercial | `iptv service` (9,900), `iptv providers` (5,400), `best iptv service 2026` (2,400), `iptv usa` (2,400) |
| **`/pricing/`** | `iptv subscription usa` | 5,400 | 28 | $1.53 | Commercial / T | `iptv subscribe` (1,900), `iptv buy`, `cheap iptv subscription`, `best iptv subscription 2026` |
| **`/free-trial/`** | `iptv free trial usa` | 390 | 18 | $0.00 | Commercial / T | `free try iptv`, `24 hour iptv trial`, `test iptv service`, `instant iptv trial` |
| **`/sports/`** | `sports streaming sites` | 9,900 | 11 | $1.80 | Commercial / CI | `soccer streams reddit` (12,100), `reddit soccer stream` (9,900), `college football streams reddit` (4,400) |
| **`/devices/firestick/`** | `how to setup iptv on firestick` | 480 | 14 | $0.00 | Technical / TS | `best iptv for firestick` (480), `firestick iptv`, `fire stick iptv`, `fire tv streaming setup` |
| **`/devices/android-tv-box/`**| `superbox alternative` | 90,500 | 49 | $1.03 | Commercial / CI | `super box` (27,100), `tv box and` (14,800), `abox android tv` (9,900), `superbox s6` (4,400) |
| **`/apps/tivimate/`** | `tivimate iptv player guide` | 880 | 19 | $0.00 | Technical / TS | `tivimate companion`, `tivimate login`, `tivimate premium setup`, `tivimate firestick` |
| **`/apps/iptv-smarters/`** | `iptv smarters pro setup` | 1,300 | 16 | $0.00 | Technical / TS | `iptv smarters plus`, `iptv smarters pro apk` (590), `iptv smarters pro windows` (480) |
| **`/guides/fix-iptv-buffering/`**| `why does iptv buffer at night`| 590 | 12 | $0.00 | Technical / TS | `how to stop iptv buffering`, `fix iptv freezing firestick`, `isp throttling streaming` |
| **`/comparisons/cable-vs-iptv/`**| `iptv vs cable tv cost` | 720 | 15 | $1.20 | Informational / CI| `directv stream alternatives`, `cord cutting live tv savings`, `cable tv vs streaming cost` |
| **`/guides/is-iptv-legal-usa/`** | `is iptv legal in the us` | 1,100 | 18 | $0.00 | Informational | `iptv copyright law united states`, `fcc streaming rules`, `protecting lawful streaming act` |
| **`/guides/m3u-xtream-codes/`** | `m3u playlist url` | 1,900 | 16 | $1.09 | Technical / TS | `m3u playlist` (1,900), `xtream codes api login`, `epg url iptv`, `m3u vs xtream` |

---

## 3. Top High-Volume, Low-Difficulty Keywords Deployed

The following golden opportunities (high search volume combined with low ranking difficulty) were prominently integrated into the page titles, `H1` tags, and body copy:

1. **`best iptv service`** (Vol: 3,600 | KD: 11 | CPC: $0.00) &rarr; Targeted on Homepage (`/`).
2. **`iptv service providers`** (Vol: 2,400 | KD: 11 | CPC: $0.00) &rarr; Targeted on Homepage (`/`).
3. **`sports streaming sites`** (Vol: 9,900 | KD: 11 | CPC: $1.80) &rarr; Targeted on Sports Hub (`/sports/`).
4. **`strong8k`** (Vol: 1,900 | KD: 14 | CPC: $1.21) &rarr; Brand positioning (**Strong 8K USA**).
5. **`iptv subscribe`** (Vol: 1,900 | KD: 8 | CPC: $1.79) &rarr; Targeted on Pricing Hub (`/pricing/`).
6. **`m3u playlist`** (Vol: 1,900 | KD: 16 | CPC: $1.09) &rarr; Targeted on Guides Hub (`/guides/m3u-xtream-codes/`).
7. **`best iptv provider`** (Vol: 1,900 | KD: 15 | CPC: $0.00) &rarr; Targeted on Comparison Grid (`/`).
8. **`iptv usa`** (Vol: 2,400 | KD: 18 | CPC: $1.30) &rarr; Targeted on Core Money Pages.

---

## 4. Technical Audit & Integrity Summary

Every generated page was tested via our automated audit pipeline (`validate_website_seo.py`):
- **18 Total HTML pages** created and verified.
- **Zero broken internal links** across 566 checked navigation and contextual links.
- **100% Schema.org structured data coverage** across every indexable guide, comparison, and product page.
- **Pre-Launch Indexing Hold Active:** `robots.txt` is configured with `User-agent: * Disallow: /` to prevent public staging leakage until your final deployment authorization.
