import os

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"

# 1. app/abonnement/avis/page.tsx
avis_content = """import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import ComparisonTable from "@/components/ComparisonTable";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "IPTV Reviews & Reliability Testing: How We Benchmark Streaming Providers",
  description:
    "How to identify a genuinely stable 4K IPTV service in the USA. Our transparent evaluation framework—uptime benchmarks, 4K 60FPS bitrates, EPG sync, and support response times.",
  path: "/abonnement/avis",
  keywords: [
    "best iptv review",
    "iptv reviews usa",
    "reliable iptv service",
    "iptv testing methodology",
    "buffer free iptv review",
    "strong8k reviews",
  ],
});

export default function AvisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews &amp; Benchmarks"
        title={<>Our Transparent Framework for <span className="accent">Evaluating</span> IPTV</>}
        lead="Rather than relying on unverified forum testimonials, we share our exact technical testing criteria so you can objectively judge streaming stability for yourself."
        breadcrumb={[{ label: "Pricing", href: "/abonnement" }, { label: "Reviews & Benchmarks" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Online IPTV reviews are notoriously unreliable: inflated affiliate ratings, fake trust badges, and contradictory forum threads.
            We take a radically transparent engineering approach—providing a standardized 5-point benchmark to assess real-world stream quality.
          </p>
          <h2>The 5 Pillars of a Legitimate Streaming Test</h2>
          <p>
            A true streaming benchmark cannot be measured by simply seeing if a channel opens. It requires sustained stress-testing
            during high-load peak American viewing windows (8 PM to 11 PM EST) and high-concurrency live sports (NFL Sunday, NBA Playoffs).
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Evaluation Matrix" title="What We Measure and Why It Matters" />
        <ComparisonTable
          columns={["Evaluation Metric", "Testing Protocol", "What Separates Premium from Budget"]}
          rows={[
            { label: "Server Stability", cells: ["Sustained 4-hour prime-time monitoring", "Zero packet loss or freezing spikes"] },
            { label: "Picture Fidelity", cells: ["Bitrate & frame-rate analysis (H.265/HEVC)", "True uncompressed 4K at 60 FPS, not 720p upscaled"] },
            { label: "EPG TV Guide", cells: ["Metadata synchronization across 50,000+ channels", "Accurate 7-day program listings with zero gaps"] },
            { label: "Hardware Agility", cells: ["Cross-platform testing on Firestick, Apple TV & PC", "Instant playlist loading via Xtream Codes API"] },
            { label: "Support Responsiveness", cells: ["Timed inquiries via WhatsApp & email", "Knowledgeable technical assistance in under 15 minutes"] },
          ]}
        />
      </Section>

      <Section narrow>
        <div className="prose">
          <h2>Test Strong 8K USA on Your Home Network</h2>
          <p>
            The ultimate test is how a service performs on your personal Wi-Fi and streaming hardware. That is why we provide
            a 24-hour test period and back every multi-month package with our 30-day money-back satisfaction guarantee.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
"""

# 2. app/faq/page.tsx
faq_content = """import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA, FAQ_ITEMS } from "@/lib/site";

export const metadata = buildMetadata({
  title: "IPTV Help Center & Frequently Asked Questions (FAQ) | Strong 8K USA",
  description:
    "Got questions about Strong 8K USA? Find quick answers on device compatibility, instant activation, VPN support, multi-screen streaming, payment methods, and zero-buffering setups.",
  path: "/faq",
  keywords: ["iptv faq", "how iptv works", "iptv help center", "strong 8k support", "iptv setup questions"],
});

export default function FAQHubPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <PageHeader
        eyebrow="Customer Support &amp; FAQ"
        title={<>Frequently Asked <span className="accent">Questions</span></>}
        lead="Everything you need to know about Strong 8K USA: setup instructions, device compatibility, streaming quality, and 24/7 technical assistance."
        breadcrumb={[{ label: "Help Center" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading
          eyebrow="Knowledge Base"
          title="Browse Support Categories"
          lead="Explore in-depth setup tutorials, troubleshooting walkthroughs, and IPTV terminology."
        />
        <div className="grid grid--3">
          <LinkCard
            href="/faq/questions-frequentes"
            kicker="Detailed Q&amp;A"
            title="Complete FAQ Guide"
            description="All questions regarding billing, activation, channel lineups, and streaming features."
            meta="Read Answers"
          />
          <LinkCard
            href="/faq/lexique"
            kicker="Glossary"
            title="IPTV Terminology Lexicon"
            description="Clear definitions of Xtream Codes, M3U8, EPG XMLTV, HEVC codecs, and CDN routing."
            meta="View Glossary"
          />
          <LinkCard
            href="/problemes"
            kicker="Troubleshooting"
            title="Fix Buffering &amp; Errors"
            description="Step-by-step diagnostics for ISP throttling, cache clearing, and player settings."
            meta="Fix Issues"
          />
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Quick Answers" title="Most Popular Inquiries" />
        <FAQ items={FAQ_ITEMS.slice(0, 8)} />
      </Section>

      <CTA />
    </>
  );
}
"""

# 3. app/contenu/page.tsx
contenu_content = """import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Live Channels, Sports & On-Demand Entertainment | Strong 8K USA",
  description:
    "Explore Strong 8K USA's colossal catalog: 50,000+ live US & international channels, major sports passes (NFL, NBA, MLB), and 180,000+ on-demand movies & series in 4K.",
  path: "/contenu",
  keywords: ["iptv channels list", "live sports iptv", "vod movies series", "us iptv packages", "4k streaming catalog"],
});

export default function ContenuHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Streaming Catalog"
        title={<>50,000+ Live Channels &amp; <span className="accent">180,000+ VOD Titles</span></>}
        lead="From live US national broadcasting and local news to marquee sports passes and box-office movies: discover the complete entertainment catalog of Strong 8K USA."
        breadcrumb={[{ label: "Content" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Explore by Category" title="Comprehensive Entertainment Hubs" />
        <div className="grid grid--3">
          <LinkCard
            href="/contenu/sport"
            kicker="Live Sports &amp; PPV"
            title="Live Sports Streaming"
            description="NFL Sunday Ticket, NBA League Pass, UEFA Champions League, Premier League, MLB, and UFC in 4K 60FPS."
            meta="Explore Sports"
          />
          <LinkCard
            href="/contenu/chaines"
            kicker="Live Television"
            title="US &amp; Global Channel Lineup"
            description="All major US networks (ABC, CBS, NBC, FOX, ESPN) alongside premium news and international packages."
            meta="Browse Channels"
          />
          <LinkCard
            href="/contenu/divertissement"
            kicker="Movies &amp; Series"
            title="On-Demand VOD Catalog"
            description="Over 180,000 box-office movies, trending TV series, and classic documentaries updated daily."
            meta="View VOD"
          />
        </div>
      </Section>

      <CTA />
    </>
  );
}
"""

# 4. app/contenu/chaines/page.tsx
chaines_content = """import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Complete IPTV Channel List: US National, Local & Global Networks (2026)",
  description:
    "Browse over 50,000 live channels on Strong 8K USA: ABC, CBS, NBC, FOX, ESPN, CNN, regional sports networks (RSNs), premium movies, and international bouquets in 4K.",
  path: "/contenu/chaines",
  keywords: ["iptv channel list", "us live channels iptv", "espn live stream", "local channels firestick", "50000 iptv channels"],
});

export default function ChainesHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Channel Directory"
        title={<>50,000+ Live Channels <span className="accent">in Crystal-Clear 4K</span></>}
        lead="Complete coverage of United States national networks, regional sports networks, 24/7 news, and worldwide international channel packages."
        breadcrumb={[{ label: "Content", href: "/contenu" }, { label: "Channels" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Strong 8K USA brings together all the channels American cord-cutters look for when ditching expensive cable bundles.
            Enjoy uncompressed Full HD and 4K digital feeds with synchronized 7-day Electronic Program Guide (EPG) listings.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Channel Lineups" title="Featured Channel Packages" />
        <div className="grid grid--3">
          <LinkCard
            href="/contenu/chaines/internationales"
            kicker="Worldwide TV"
            title="International Bouquets"
            description="UK, Canada, Latin America, Europe, Middle East, and Asia packages with native audio tracks."
            meta="View International"
          />
          <LinkCard
            href="/contenu/sport"
            kicker="Live Sports Passes"
            title="Premium Sports Networks"
            description="ESPN, Fox Sports, CBS Sports Network, NFL Network, NBA TV, and regional sports networks."
            meta="View Sports Channels"
          />
          <LinkCard
            href="/contenu/divertissement"
            kicker="Movies &amp; Series"
            title="Premium Entertainment"
            description="HBO, Showtime, Starz, Cinemax, and 24/7 specialized movie channels in 4K."
            meta="View Entertainment"
          />
        </div>
      </Section>

      <CTA />
    </>
  );
}
"""

# 5. app/formats/page.tsx
formats_content = """import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "IPTV Connection Protocols: Xtream Codes API, M3U8 & EPG XMLTV Guide",
  description:
    "Understand the technical connection formats used by Strong 8K USA: Xtream Codes API login, M3U playlist URLs, and XMLTV Electronic Program Guides (EPG).",
  path: "/formats",
  keywords: ["xtream codes api", "m3u playlist url", "epg xmltv url", "iptv formats guide", "how to connect iptv"],
});

export default function FormatsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Streaming Protocols"
        title={<>Connection Formats: <span className="accent">Xtream Codes, M3U &amp; EPG</span></>}
        lead="Whether your media player requires an M3U web playlist or an Xtream Codes API login, Strong 8K USA delivers automated credentials compatible with any modern streaming player."
        breadcrumb={[{ label: "Protocols" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Protocols" title="Choose Your Preferred Connection Method" />
        <div className="grid grid--3">
          <LinkCard
            href="/formats/xtream-codes"
            kicker="Recommended"
            title="Xtream Codes API"
            description="Fastest and most stable method for TiviMate, IPTV Smarters Pro, and XCIPTV. Uses server URL, username, and password."
            meta="Xtream Codes Guide"
          />
          <LinkCard
            href="/formats/m3u"
            kicker="Universal Playlist"
            title="M3U &amp; M3U8 Playlist"
            description="Direct HTTP web playlist URL ideal for VLC Media Player, Kodi, Smart IPTV, and browser streaming."
            meta="M3U Setup Guide"
          />
          <LinkCard
            href="/formats/epg"
            kicker="TV Guide"
            title="Electronic Program Guide (EPG)"
            description="Synchronized XMLTV guide link providing full 7-day program schedules and episode information."
            meta="EPG Guide"
          />
        </div>
      </Section>

      <CTA />
    </>
  );
}
"""

files_to_write = [
    ("app/abonnement/avis/page.tsx", avis_content),
    ("app/faq/page.tsx", faq_content),
    ("app/contenu/page.tsx", contenu_content),
    ("app/contenu/chaines/page.tsx", chaines_content),
    ("app/formats/page.tsx", formats_content),
]

for rel_path, content in files_to_write:
    dest = os.path.join(BASE_DIR, rel_path)
    with open(dest, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated hub page: {rel_path}")

print("All secondary hubs localized to US English successfully!")
