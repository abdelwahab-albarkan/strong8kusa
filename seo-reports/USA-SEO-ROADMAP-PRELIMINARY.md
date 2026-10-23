# Preliminary USA SEO Strategic Roadmap & Opportunity Scoring Model

**Target Geography:** United States (Google US)  
**Target Search Language:** American English (`en-US`)  
**Audit Date:** October 22, 2026  
**Document Status:** PRELIMINARY ARCHITECTURE (Awaiting User Dataset)  

---

## 1. Executive Strategy & Governance Principles

This preliminary roadmap outlines the systematic, phased implementation required to build search visibility, topical relevance, and organic traffic across the United States.

### Fundamental Safeguards & Compliance Rules:
1. **Google Search Essentials Adherence:** Strictly avoid doorway pages, programmatic thin-content scraping, keyword stuffing, and deceptive redirects.
2. **FTC Compliance:** Disclose commercial affiliate relationships clearly and conspicuously above the fold on all comparison and review pages.
3. **No Unsubstantiated Claims:** Avoid unverifiable marketing claims (e.g., "100% buffer-free", "50,000+ live channels", "lifetime subscriptions").
4. **Zero Pre-Launch Indexing Leakage:** Maintain pre-launch robots holds (`Disallow: /`) until content, technical tests, and DNS cutover are fully verified.
5. **No Hallucinated Projections:** We do not guarantee specific ranking positions, traffic figures, or ranking timeframes.

---

## 2. Transparent Opportunity Prioritization Scoring Model

To objectively rank content opportunities once the user's keyword dataset is received, each topic/keyword candidate will be evaluated using a **100-Point Composite Opportunity Scoring Model**.

### The Scoring Formula:
$$\text{Opportunity Score} = (R \times 0.25) + (I \times 0.20) + (D \times 0.20) + (V \times 0.15) + (C \times 0.10) + (E \times 0.10)$$

Where each factor is scored from 1 to 10:

| Factor | Weight | Scoring Criteria (1 to 10 Scale) | Data Nature |
| :--- | :---: | :--- | :---: |
| **Relevance to Website ($R$)** | 25% | **10:** Core commercial product/service fit. <br>**5:** Relevant supporting topic (e.g. Firestick setup). <br>**1:** Distantly related or generic streaming term. | Qualitative Assessment |
| **Search Intent Match ($I$)** | 20% | **10:** Direct commercial or high-intent troubleshooting query. <br>**5:** General informational query. <br>**1:** Ambiguous or navigational query for an unrelated brand. | Qualitative Assessment |
| **Verified Search Demand ($D$)** | 20% | **10:** High verified US monthly volume (>5,000). <br>**5:** Moderate volume (500–5,000). <br>**1:** Low or unverified volume (<100). | **Measured Data** (From User Dataset) |
| **Business / Conversion Value ($V$)** | 15% | **10:** High conversion probability (leads directly to trial or sale). <br>**5:** Top-of-funnel brand awareness. <br>**1:** Non-monetizable informational traffic. | Qualitative Assessment |
| **Competitive Gap Quality ($C$)** | 10% | **10:** Competitors have thin, outdated, or poorly structured pages. <br>**5:** Competitors have standard affiliate pages. <br>**1:** High-authority publications (e.g. Wired, The Verge) dominate SERP. | Qualitative Assessment |
| **Implementation Effort ($E$)** | 10% | **10:** Simple component or fast guide creation. <br>**5:** Requires custom interactive tool or deep multi-step guide. <br>**1:** Requires massive proprietary testing infrastructure. | Implementation Feasibility |

### Metric Distinction:
- **Measured Data:** US Search Volume, Keyword Difficulty (KD), CPC, and SERP position will strictly originate from your provided dataset.
- **Qualitative Assessment:** Relevance, Intent, Business Value, and Competitive Gap are derived from our architectural review.

---

## 3. Phased Implementation Roadmap

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PHASED IMPLEMENTATION TIMELINE                        │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ PHASE 1         │ User Dataset Ingestion & Keyword Re-Mapping               │
│ (Immediate)     │ • Reconcile CSV dataset against framework                 │
│                 │ • Calculate composite opportunity scores                  │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ PHASE 2         │ Technical Core & Commercial Money Pages                   │
│ (Sprint 1)      │ • Deploy Next.js 14 / Astro US architecture               │
│                 │ • Build US Homepage (`/`) and Pricing Hub (`/pricing/`)   │
│                 │ • Setup FTC disclosure and 24h trial funnel               │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ PHASE 3         │ Hardware & Application Setup Hub                          │
│ (Sprint 2)      │ • Firestick 4K Max setup walkthrough                      │
│                 │ • Walmart onn. 4K Pro & Nvidia Shield TV guide            │
│                 │ • TiviMate & IPTV Smarters Pro configuration guides       │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ PHASE 4         │ Educational & Cord-Cutting Informational Pillars          │
│ (Sprint 3)      │ • Cable TV vs IPTV savings comparison guide               │
│                 │ • US live sports streaming guide (NFL, NBA, MLB)          │
│                 │ • Buffer fix & US ISP throttling diagnostic guide         │
│                 │ • Factual US legality & consumer protection guide         │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ PHASE 5         │ Technical Audit, Schema Validation & Launch Readiness     │
│ (Sprint 4)      │ • Schema.org validation (Article, FAQ, Product, Org)     │
│                 │ • Core Web Vitals audit (LCP < 1.8s, CLS 0, INP < 100ms)  │
│                 │ • Dynamic XML sitemaps & indexing cutover checklist       │
└─────────────────┴───────────────────────────────────────────────────────────┘
```

---

## 4. Internal Linking & Semantic PageRank Flow

To build topical authority efficiently in Google US, internal links will follow a strict hierarchical structure:

1. **Contextual Upward Links:** Every supporting guide (e.g. Firestick setup, buffering fix) includes contextual in-body links pointing upward to the primary commercial page (`/` or `/pricing/`) with descriptive, natural anchors (e.g., *"evaluate compatible US subscription plans"*).
2. **Lateral Semantic Links:** Related technical guides link laterally (e.g., TiviMate setup links to the Firestick installation guide and buffering troubleshooting guide).
3. **Downward Hub Links:** The US Overview Hub and Homepage link down to each major cluster, passing PageRank to inner informational pages.
4. **Breadcrumb Trail:** Every inner page implements valid Schema.org `BreadcrumbList` markup to reinforce site taxonomy to search engine crawlers.

---

## 5. Next Steps for Ingesting Your Dataset

When you are ready to send your keyword research data, follow these steps:

1. **Send Your Data:** Paste your keyword list or provide your file (CSV, TSV, or spreadsheet export).
2. **We Run Automated Reconciliation:** We will immediately execute our ingestion parser against your dataset to:
   - Match verified volumes and difficulties.
   - Run the 100-Point Opportunity Prioritization Model.
   - Output the finalized **Master Keyword-to-URL Route Map**.
3. **Execute Production Build:** With data-backed priorities established, we will proceed to generate and optimize the production pages.
