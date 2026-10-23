# USA SEO Content Gap Analysis & Project Inventory

**Target Geography:** United States (USA)  
**Search Engine:** Google US (`google.com`)  
**Locale / Dialect:** American English (`en-US`)  
**Audit Date:** October 22, 2026  
**Status:** BASELINE AUDITED & GAPS CATALOGED  

---

## 1. Existing Project & Repository Baseline Inspection

To ensure strategic alignment, we inspected the active workspace (`usa 1 site`) alongside the existing production codebases in the user's local project suite (`SEO 1 UK`, `seo 2`, `us+uk`).

### A. Current Workspace State (`c:\Users\clanm\OneDrive\Desktop\usa 1 site`)
- **Status:** Initialized as a clean, dedicated workspace for the USA initiative.
- **Reporting Directory:** `seo-reports/` populated with structured intelligence documents.
- **Research Artifacts:** `research-data/` contains downloaded competitor DOM trees, XML sitemaps, robots.txt, and forensic JSON summaries.

### B. Pre-Existing Codebase Context in Sibling Projects
| Repository Layer | Current Implementation in Suite (`SEO 1 UK` / `us+uk`) | Reusability for USA Project |
| :--- | :--- | :--- |
| **Technology Stack** | Next.js 14.2.15 (App Router, SSG, TypeScript) OR Astro 4.16 | Highly reusable. Zero runtime overhead, clean static HTML export, perfect Core Web Vitals. |
| **Styling & Design System** | Vanilla CSS custom properties (`globals.css`), dark/light theme toggle, zero utility bloat | Excellent. Modern, responsive, and mobile-first. |
| **Current Geographic Focus** | Heavily UK-centric (`en-GB`, Sky/TNT sports references, UK TV licensing, GBP £ pricing) | **Complete gap:** Must be re-engineered for American English (`en-US`), USD ($), and US streaming habits. |
| **Current Page Inventory** | 11 core routes (`/`, `/iptv-subscription-uk/`, `/iptv-buyers-guide-uk/`, `/iptv-firestick-uk/`, `/iptv-smart-tv-uk/`, `/iptv-setup-uk/`, `/is-iptv-legal-uk/`, `/contact/`, `/terms/`, `/privacy-policy/`, `/order/`) | Serves as an architectural template, but requires dedicated US URL slugs and content. |
| **SEO Indexing Safeguards** | Robots.txt configured with pre-launch hold (`Disallow: /`) toggleable via environment variable | Must be maintained to prevent staging/draft indexing prior to official launch. |

---

## 2. Competitor Content Inventories vs Our Existing Foundation

By cross-referencing the sitemaps and content libraries of the four research targets, we mapped their topical coverage against our existing assets:

```
┌───────────────────────────────────────┬───────────────────┬───────────────────┬───────────────────┐
│ Topical Area                          │ Competitor Status │ Our Current State │ Strategic Gap     │
├───────────────────────────────────────┼───────────────────┼───────────────────┼───────────────────┤
│ 1. US Core Money / Comparison Page    │ ALL 4 Have Hubs   │ UK Only (£)       │ CRITICAL P0 GAP   │
│ 2. US Cable Alternative Guides        │ Radar & Review    │ None              │ HIGH P1 GAP       │
│ 3. US Sports Intent (NFL, NBA, MLB)   │ Review & Radar    │ Premier League    │ HIGH P1 GAP       │
│ 4. Firestick 4K Setup Guide           │ ALL 4 Have Guides │ UK Firestick Page │ MEDIUM P2 GAP     │
│ 5. TiviMate / Smarters App Hubs       │ Radar & TalkAndr. │ Basic Mention     │ HIGH P1 GAP       │
│ 6. US ISP Buffering / Throttling Fix  │ Radar & TalkAndr. │ General Buffering │ MEDIUM P2 GAP     │
│ 7. US Legal / Regulatory (FCC/DMCA)   │ Review & Radar    │ UK Copyright Only │ HIGH P1 GAP       │
│ 8. FTC Ownership Disclosure           │ Review Leads      │ Basic Footer      │ TRUST / P0 GAP    │
└───────────────────────────────────────┴───────────────────┴───────────────────┴───────────────────┘
```

---

## 3. Detailed Content Gap Analysis

### Gap 1: US Geographic & Cultural Localization (P0 - Critical)
- **Competitor Benchmark:** `iptvservicereview.com` leads with *"Best IPTV Service USA 2026: 16 Providers Compared"*, featuring USD pricing ($8.33 to $15/month), American terminology (e.g. "cable packages", "cord cutting", "DVR", "PPV").
- **Our Current Limitation:** Existing content in the suite is configured for `en-GB`, referencing British terminology (e.g. "TV Licence", "Virgin Media", "Sky", "catch-up TV").
- **Required Action:** Deploy US-localized core pages using American English spelling, USD currency formatting, and US broadcasting terminology.

### Gap 2: US Cable TV Replacement & Cord-Cutting Alternatives (P1 - High)
- **Competitor Benchmark:** `iptvserviceradar.com` captures high-intent traffic comparing virtual multichannel video programming distributors (vMVPDs) like DirecTV Stream, YouTube TV, Hulu + Live TV, Sling TV, and Philo.
- **Our Current Limitation:** No cable comparison or savings calculator content.
- **Required Action:** Create an authoritative comparison guide: `/comparisons/iptv-vs-cable-tv/` analyzing escalating US cable bills, regional sports fees, equipment rental surcharges, and how modern streaming alternatives compare.

### Gap 3: US Sports Streaming Intent (P1 - High)
- **Competitor Benchmark:** Top-ranking US pages specifically address viewing major North American sports leagues without local blackouts:
  - NFL (Sunday Ticket, RedZone, Thursday Night Football on Prime).
  - NBA (League Pass, regional sports networks/Bally Sports/Diamond).
  - MLB, NHL, UFC PPVs, and College Football (NCAA).
- **Our Current Limitation:** Sibling sites focus heavily on Premier League football and UEFA Champions League.
- **Required Action:** Build a dedicated US Sports Streaming Hub (`/sports/us-live-sports/`) explaining broadcast availability, multi-screen viewing, and zero-blackout game access.

### Gap 4: Popular US Streaming Hardware (P1 - High)
- **Competitor Benchmark:** TalkAndroid and The IPTV Guide produce deep hardware content. In the United States:
  - **Amazon Fire TV** (Firestick 4K Max, Fire TV Cube) represents ~40% of streaming stick usage.
  - **Roku** represents ~35% of the US player market (requires specialized casting/screen-mirroring setup since native IPTV apps are restricted on Roku OS).
  - **Android TV / Google TV** (Walmart onn. 4K Pro, Chromecast, Nvidia Shield TV Pro).
  - **Apple TV 4K** (tvOS apps like IPTVX, UHF, TiviMax).
- **Our Current Limitation:** Sibling sites have basic Firestick and generic Smart TV pages, but lack coverage for the Walmart Onn 4K box (the #1 best-selling budget streaming box in the US) and Roku workarounds.
- **Required Action:** Expand hardware hubs to include Onn Google TV, Firestick 4K Max, and Apple TV 4K.

### Gap 5: US ISP Throttling & Network Optimization (P2 - Medium)
- **Competitor Benchmark:** Radar ranks for *"Why does IPTV buffer at night but not during the day?"*, directly addressing US internet service providers (Comcast/Xfinity, AT&T, Spectrum, Cox, Verizon Fios) that throttle streaming video during peak 8 PM – 11 PM windows.
- **Our Current Limitation:** Generic buffering tips without US ISP diagnostics or WireGuard VPN configurations.
- **Required Action:** Publish `/guides/fix-iptv-buffering/` detailing bandwidth testing, router DNS configuration, and ISP throttling circumvention.

### Gap 6: Radical E-E-A-T Transparency & FTC Disclosures (P0 - Critical)
- **Competitor Benchmark:** `iptvservicereview.com` dominates search trust by putting an explicit ownership disclosure above the fold, featuring named reviewers (Marcus Hale, Rhea Solomon), and maintaining an honest editorial policy.
- **Our Current Limitation:** Anonymous publishing or standard footer disclaimers.
- **Required Action:** Adopt a clear, upfront disclosure framework to ensure full FTC compliance and build instant trust with US consumers.

---

## 4. Cannibalization Prevention Matrix

To prevent multiple pages on our future site from competing against one another for the same Google US search terms, we have mapped distinct queries to dedicated target routes:

| Target Query Type | Assigned Unique Route | Primary Target Keyword | Allowed Secondary Keywords | Explicitly Excluded (Redirected to Own Page) |
| :--- | :--- | :--- | :--- | :--- |
| **US Overview / Best Of** | `/` (or `/best-iptv-service-usa/`) | `best iptv service usa` | `top iptv providers usa`, `best iptv 2026` | Pricing terms, setup walkthroughs |
| **Subscription & Pricing** | `/pricing/` | `iptv subscription usa` | `iptv price usa`, `cheap iptv subscription` | Device setup guides, legality questions |
| **Free Trial Funnel** | `/free-trial/` | `iptv free trial 24 hours` | `instant iptv trial`, `test iptv service` | Full pricing lists, reseller queries |
| **Firestick Device Guide** | `/devices/iptv-firestick/`| `how to setup iptv on firestick`| `fire tv iptv app`, `firestick 4k iptv` | Android TV guides, Smart TV guides |
| **TiviMate Application** | `/apps/tivimate-setup/` | `tivimate iptv player guide` | `tivimate premium setup`, `tivimate firestick` | IPTV Smarters queries, M3U playlist fixes |
| **US Legal Education** | `/guides/is-iptv-legal-usa/`| `is iptv legal in the us` | `iptv copyright united states`, `fcc streaming rules`| Commercial buying CTAs, discount codes |

---

## 5. Awaiting User Keyword Dataset for Final Mapping

> [!IMPORTANT]  
> **AWAITING USER KEYWORD DATASET**  
> 
> This section is reserved for importing and reconciling your proprietary keyword research dataset.
> 
> As soon as you provide your data in our next interaction, the automated pipeline will:
> 1. Ingest all keyword records and deduplicate search variants.
> 2. Reconcile verified US monthly search volume, keyword difficulty, and CPC data against the gaps identified above.
> 3. Populate a definitive **Keyword-to-URL Master Routing Matrix**.
> 4. Flag any keywords with zero current coverage that require new dedicated landing pages.
