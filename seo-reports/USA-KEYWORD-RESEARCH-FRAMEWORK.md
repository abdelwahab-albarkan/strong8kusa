# USA Keyword Research & Data Ingestion Framework

**Target Geography:** United States (Google US)  
**Locale / Dialect:** American English (`en-US`)  
**Status:** READY FOR USER DATASET INGESTION  
**Document Date:** October 22, 2026  

---

## 1. Objective & Search Intent Architecture

This framework establishes the semantic taxonomy and data contract required to ingest, analyze, and prioritize keyword data for a high-performance US-focused streaming and cord-cutting web project.

### Search Intent Classification
Every search query targeted in the US market is categorized into one of four primary intent classes:
1. **Commercial Investigation (CI):** Searchers comparing options, evaluating pricing tiers, assessing free trial offerings, or vetting service reliability before committing funds.  
   *Examples:* `best iptv service usa`, `iptv subscription 4k`, `cheapest iptv with sports`.
2. **Transactional (T):** Searchers ready to purchase, subscribe, or initiate an immediate trial.  
   *Examples:* `buy iptv usa`, `iptv free trial 24 hours`, `order iptv multi connection`.
3. **Informational & Educational (I):** Searchers seeking foundational definitions, legal clarity, or technology explanations.  
   *Examples:* `what is iptv and how does it work`, `is iptv legal in the united states`, `how does iptv compare to cable tv`.
4. **Technical & Support (TS):** Searchers troubleshooting errors, configuring players, optimizing router/VPN settings, or installing apps on specific streaming devices.  
   *Examples:* `how to setup iptv on firestick`, `why does iptv buffer at night`, `how to install tivimate on android tv`.

---

## 2. Preliminary US Keyword Taxonomy & Competitor Seed Matrix

The following table synthesizes the seed topics and query patterns directly observed across the top-ranking competitor sites (`iptvserviceradar.com`, `iptvservicereview.com`, `theiptvguide.com`, and `talkandroid.com`).

> [!NOTE]  
> **Data Integrity Notice:** In strict accordance with our research integrity safeguards, metrics such as monthly search volume, keyword difficulty (KD), and CPC are marked **"Awaiting User Dataset"** or **"Not available"** rather than estimated or fabricated.

| Keyword Seed | Intent Group | Primary Competitor & Observed Ranking URL | US Search Vol | KD / Comp | CPC (USD) | Data Source | Confidence | Potential Relevance | Suggested Content Type / Target URL |
| :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| `best iptv service usa` | Commercial | `iptvservicereview.com/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor Page Title | High | Core Priority | Homepage or `/best-iptv-service-usa/` (Pillar) |
| `best iptv providers 2026` | Commercial | `theiptvguide.com/best-iptv-2026/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor Page Title | High | Core Priority | `/best-iptv-providers/` (Annual Comparison) |
| `usa iptv subscription` | Commercial | `iptvserviceradar.com/best-usa-iptv-provider/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor Heading | High | Core Priority | `/pricing/` or `/iptv-subscription-usa/` |
| `iptv free trial usa` | Commercial / T | `iptvservicereview.com/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor CTA / FAQ | High | High Priority | `/free-trial/` (24h Trial Portal) |
| `iptv for firestick usa` | Commercial / TS | `theiptvguide.com/firestick-iptv-guide/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | High | High Priority | `/devices/iptv-firestick-setup/` |
| `how to install iptv on firestick` | Technical / TS | `iptvserviceradar.com/how-to-set-up-iptv-on-firestick-guide/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | High | High Priority | `/guides/firestick-installation-guide/` |
| `best iptv app for android tv` | Informational | `talkandroid.com/` & `theiptvguide.com/` | *Awaiting User Dataset* | *Not available* | *Not available* | Tech Authority Search | High | High Priority | `/apps/best-android-tv-iptv-apps/` |
| `tivimate iptv player setup` | Technical / TS | `iptvserviceradar.com/how-to-install-tivimate-guide/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | High | High Priority | `/apps/tivimate-setup-guide/` |
| `iptv smarters pro firestick setup` | Technical / TS | `iptvserviceradar.com/install-iptv-smarters-pro-on-firestick-guide/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | High | High Priority | `/apps/iptv-smarters-firestick/` |
| `why does iptv buffer at night` | Technical / TS | `iptvserviceradar.com/why-does-iptv-buffer-at-night-but-not-during-the-day/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | Medium | Medium Priority | `/guides/fix-iptv-buffering-isp-throttling/` |
| `is iptv legal in the us` | Informational | `iptvservicereview.com/#faq` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor FAQ Schema | High | High Priority | `/guides/is-iptv-legal-usa/` |
| `iptv vs cable tv cost comparison` | Informational / CI | `iptvservicereview.com/` & `iptvserviceradar.com/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor H2 Anchor | High | Medium Priority | `/comparisons/iptv-vs-cable-tv-savings/` |
| `directv stream alternatives` | Comparison / CI | `iptvserviceradar.com/directv-stream-vs-youtube-tv/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | Medium | Medium Priority | `/comparisons/cable-alternatives/` |
| `xtreme hd iptv alternative` | Comparison / Brand | `iptvservicereview.com/alternatives/xtreme-hd-iptv/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | Medium | Evaluation Pending | `/alternatives/xtreme-hd-iptv/` |
| `vocotv alternative` | Comparison / Brand | `iptvserviceradar.com/best-vocotv-alternatives/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor URL Slug | Medium | Evaluation Pending | `/alternatives/vocotv/` |
| `iptv multi screen subscription usa` | Commercial / T | `iptvservicereview.com/` | *Awaiting User Dataset* | *Not available* | *Not available* | Competitor Pricing Table | High | High Priority | `/pricing/multi-device/` |

---

## 3. Thematic Keyword Clusters for USA

To maximize topical authority in Google US, the target keywords must be grouped into distinct semantic silos:

```
                  ┌──────────────────────────────────────────────┐
                  │          TOPICAL AUTHORITY PILLAR            │
                  │   /best-iptv-service-usa/ (US Overview Hub)  │
                  └──────────────────────┬───────────────────────┘
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
┌─────────────────────┐        ┌─────────────────────┐        ┌─────────────────────┐
│ COMMERCIAL CLUSTER  │        │   HARDWARE & APPS   │        │     TROUBLESHOOTING │
│                     │        │                     │        │                     │
│ • /pricing/         │        │ • /devices/firestick│        │ • /guides/buffering │
│ • /free-trial/      │        │ • /devices/shield-tv│        │ • /guides/vpn-setup │
│ • /multi-connection │        │ • /apps/tivimate    │        │ • /guides/m3u-fix   │
│ • /sports/          │        │ • /apps/smarters    │        │ • /guides/legality  │
└─────────────────────┘        └─────────────────────┘        └─────────────────────┘
```

### Cluster Breakdown:
1. **Cluster A: Core US Commercial Intent**
   - Focus: Pricing transparency, subscription lengths (1, 3, 6, 12 months), concurrent connections (1 to 5 devices), and trial requests.
   - Primary landing pages: `/`, `/pricing/`, `/free-trial/`.
2. **Cluster B: Streaming Devices & Operating Systems (US Market)**
   - Focus: Step-by-step setup guides tailored to the dominant US hardware: Amazon Fire TV Stick (Lite, 4K, 4K Max), Nvidia Shield TV Pro, Google TV / Chromecast, Apple TV 4K, Samsung Smart TV (Tizen), LG Smart TV (webOS).
   - Primary landing pages: `/devices/firestick-setup/`, `/devices/android-tv/`, `/devices/smart-tv/`.
3. **Cluster C: Dedicated IPTV Player Applications**
   - Focus: How to download, configure, and optimize standalone media players: TiviMate, IPTV Smarters Pro, XCIPTV, Sparkle TV, IBO Player.
   - Primary landing pages: `/apps/tivimate-guide/`, `/apps/iptv-smarters/`.
4. **Cluster D: Network Performance, ISPs & Troubleshooting**
   - Focus: US internet service provider diagnostics (Comcast Xfinity, AT&T Fiber, Spectrum throttling), DNS configuration (Cloudflare 1.1.1.1, Google 8.8.8.8), VPN optimization (WireGuard protocol).
   - Primary landing pages: `/guides/fix-buffering/`, `/guides/vpn-streaming/`.
5. **Cluster E: US Legal & Consumer Safety Education**
   - Focus: Unbiased, factual education on US copyright laws, FCC regulations, avoiding fraud/scams, recognizing payment red flags, and safe streaming hygiene.
   - Primary landing page: `/guides/is-iptv-legal-usa/`.

---

## 4. User Keyword Dataset Ingestion Schema

When you provide your keyword research data (via CSV, TSV, or raw text), our automated parser will validate and map each record against this schema:

### Required Fields:
1. `Keyword` *(String)* — The exact user query.
2. `Search Volume` *(Integer or Range)* — Monthly US search demand (from Google Keyword Planner, Ahrefs, Semrush, or GSC).
3. `Keyword Difficulty / Competition` *(Integer 0–100 or Low/Med/High)* — Ranking barrier metric.
4. `Search Intent` *(Enum: Commercial, Transactional, Informational, Technical)*.

### Highly Recommended Fields:
5. `CPC (USD)` *(Float)* — Cost-Per-Click in Google Ads US; indicates commercial monetary intent.
6. `SERP Features Present` *(String / Array)* — Featured Snippet, People Also Ask (PAA), Video Carousel, SiteLinks.
7. `Current Ranking Position` *(Integer, if auditing an existing live domain)*.
8. `Top Competitor URL` *(String)* — The URL currently occupying position #1 or #2 on Google US.

### Data Ingestion File Formats Supported:
- CSV (`keywords.csv` with standard UTF-8 encoding).
- TSV or Tab-delimited spreadsheet paste.
- JSON array of objects.

---

## 5. Next Steps for Dataset Reconciliation

Upon receipt of your dataset:
1. **Deduplication & Canonical Clustering:** Group close semantic variants (e.g., `best iptv for usa` and `best usa iptv`) to prevent internal keyword cannibalization.
2. **Opportunity Scoring:** Compute transparent composite scores using the rubric defined in `USA-SEO-ROADMAP-PRELIMINARY.md`.
3. **1:1 URL Mapping:** Map every validated keyword cluster to an exact target URL route, designating primary target keywords (in `H1` and `<title>`) and secondary semantic variants (in `H2` and body copy).
