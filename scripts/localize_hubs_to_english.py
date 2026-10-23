import os

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"

# 1. app/a-propos/page.tsx
a_propos_content = """import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Strong 8K USA — Our Mission & Streaming Infrastructure",
  description:
    "Learn about Strong 8K USA: our mission, high-speed CDN infrastructure, and dedication to delivering buffer-free 8K and 4K live streaming across the United States.",
  path: "/a-propos",
  keywords: ["about strong 8k usa", "iptv usa provider", "reliable streaming service", "strong8k usa network"],
});

const VALUES = [
  {
    title: "Picture Quality First",
    description:
      "We invest in dedicated high-bitrate servers and true 4K/8K 60FPS streams rather than compressed, low-quality feeds. Experience live TV as it was meant to be seen.",
  },
  {
    title: "Radical Transparency",
    description:
      "Clear, upfront pricing with zero hidden fees, no annual contracts, and no surprise automated renewals. You always know exactly what you pay and what you get.",
  },
  {
    title: "Human 24/7 Support",
    description:
      "A dedicated, knowledgeable support team available around the clock via WhatsApp and email, ready to assist from initial setup to multi-room troubleshooting.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Strong 8K USA"
        title={<>Engineered for <span className="accent">Flawless Streaming</span></>}
        lead="Strong 8K USA was built on a simple conviction: premium television streaming must be ultra-reliable, transparent, and accessible without cable contracts."
        breadcrumb={[{ label: "About Us" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Our objective is to deliver a cutting-edge live television experience that rivals and exceeds traditional cable
            and satellite providers, giving American households uninterrupted access to 50,000+ live channels, marquee sports passes,
            and an expansive on-demand movie catalog.
          </p>
          <p>
            By deploying redundant CDN edge nodes across North America and utilizing smart load balancing, we eliminate the
            dreaded buffering and freeze spikes during peak evening hours and high-stakes live sports (Super Bowl, NBA Finals,
            UFC PPVs).
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <Stats />
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Core Values" title="What Drives Strong 8K USA" />
        <div className="grid grid--3">
          {VALUES.map((v) => (
            <article key={v.title} className="card">
              <h3 style={{ fontSize: "1.2rem" }}>{v.title}</h3>
              <p style={{ marginTop: "var(--space-3)", fontSize: "0.975rem" }}>{v.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTA
        title="Ready to Experience Next-Gen TV?"
        lead="Explore our flexible subscription tiers backed by a 30-day money-back satisfaction guarantee."
        primary={PRIMARY_CTA}
        secondary={SECONDARY_CTA}
      />
    </>
  );
}
"""

with open(os.path.join(BASE_DIR, "app", "a-propos", "page.tsx"), "w", encoding="utf-8") as f:
    f.write(a_propos_content)
print("Updated app/a-propos/page.tsx")

# 2. app/appareils/page.tsx
appareils_content = """import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import DeviceGrid from "@/components/DeviceGrid";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { DEVICE_LIST } from "@/lib/devices";

export const metadata = buildMetadata({
  title: "IPTV Supported Devices: Firestick, Apple TV, Smart TVs & PC (2026)",
  description:
    "Which device is best for Strong 8K USA? Complete step-by-step installation guides for Amazon Firestick 4K, Apple TV 4K, Android TV, Nvidia Shield, Samsung, LG & PC.",
  path: "/appareils",
  keywords: [
    "iptv devices",
    "best iptv box",
    "firestick iptv",
    "apple tv iptv",
    "android tv box iptv",
    "samsung smart tv iptv",
    "nvidia shield iptv",
    "superbox alternative",
  ],
});

export default function AppareilsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Device Compatibility"
        title={<>Stream 8K &amp; 4K Live TV on <span className="accent">All Your Screens</span></>}
        lead="Amazon Firestick, Apple TV 4K, Smart TVs, Android boxes, gaming consoles, PCs, and tablets: select your device for a detailed step-by-step setup walkthrough."
        breadcrumb={[{ label: "Devices" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Select Your Hardware" title="Step-by-Step Installation Guides by Device" />
        <DeviceGrid items={DEVICE_LIST} />
      </Section>

      <Section variant="secondary" narrow>
        <div className="prose">
          <h2>Do You Need a Dedicated Streaming Box?</h2>
          <p>
            If your television is already a modern Smart TV (Samsung, LG, Google TV, or Android TV), no additional hardware
            is needed: you can install your preferred player app directly. If not, a compact HDMI streaming stick—such as an
            Amazon Fire TV Stick 4K Max, Walmart onn. 4K Pro, Apple TV 4K, or Nvidia Shield—transforms any TV into a blazing-fast
            8K/4K streaming hub.
          </p>
          <p>
            Unlike expensive $350 proprietary boxes like Superbox that become obsolete, standard streaming devices give you complete
            freedom to run Strong 8K USA with zero hardware lock-in.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
"""

with open(os.path.join(BASE_DIR, "app", "appareils", "page.tsx"), "w", encoding="utf-8") as f:
    f.write(appareils_content)
print("Updated app/appareils/page.tsx")

# 3. app/applications/page.tsx
applications_content = """import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Steps from "@/components/Steps";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { APP_LIST } from "@/lib/applications";

export const metadata = buildMetadata({
  title: "Best IPTV Apps & Players: TiviMate, Smarters Pro, VLC & Kodi (2026)",
  description:
    "Top recommended IPTV media players for Strong 8K USA. Setup guides and configurations for TiviMate IPTV Player, IPTV Smarters Pro, XCIPTV, OTT Navigator, VLC and Kodi.",
  path: "/applications",
  keywords: [
    "best iptv app",
    "iptv player",
    "tivimate setup",
    "iptv smarters pro",
    "xciptv player",
    "ott navigator iptv",
    "kodi iptv",
    "vlc iptv player",
  ],
});

export default function ApplicationsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="IPTV Media Players"
        title={<>The Ideal Streaming Player for <span className="accent">Every Screen</span></>}
        lead="Strong 8K USA is 100% compatible with all major IPTV applications. Choose your preferred app, enter your Xtream Codes or M3U link, and start streaming immediately."
        breadcrumb={[{ label: "Applications" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Recommended Players" title="Top-Rated Media Applications for 2026" />
        <div className="grid grid--3">
          {APP_LIST.map((a) => (
            <LinkCard
              key={a.slug}
              href={`/applications/${a.slug}`}
              kicker={a.free ? "Free / Freemium" : "Paid App"}
              title={a.name}
              description={a.platforms}
              meta="View Setup Guide"
            />
          ))}
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeading
          eyebrow="Easy Setup"
          title="Universal 60-Second Configuration"
          center
          lead="Regardless of your chosen application, connecting your Strong 8K USA service requires only your Xtream Codes API details or M3U playlist URL."
        />
        <Steps />
      </Section>

      <CTA />
    </>
  );
}
"""

with open(os.path.join(BASE_DIR, "app", "applications", "page.tsx"), "w", encoding="utf-8") as f:
    f.write(applications_content)
print("Updated app/applications/page.tsx")

# 4. app/contenu/sport/page.tsx
sport_content = """import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import Icon, { type IconName } from "@/components/Icon";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { SPORT_BY_TYPE } from "@/lib/sport";

export const metadata = buildMetadata({
  title: "Live Sports Streaming IPTV: NFL, NBA, Premier League & PPV in 4K 60FPS",
  description:
    "Stream live US & global sports with Strong 8K USA: NFL Sunday Ticket, NBA League Pass, Premier League, UEFA Champions League, Formula 1, and UFC PPVs in uncompressed 4K 60FPS.",
  path: "/contenu/sport",
  keywords: [
    "sports streaming sites",
    "live sports iptv",
    "nfl iptv stream",
    "nba league pass iptv",
    "premier league live stream",
    "ufc ppv iptv",
    "champions league 4k",
  ],
});

const DISCIPLINES: { title: string; description: string; icon: IconName; href: string }[] = [
  { icon: "football", href: "/contenu/sport", title: "NFL Football", description: "Sunday Ticket, RedZone, Thursday Night Football, and full Playoffs coverage." },
  { icon: "basketball", href: "/contenu/sport", title: "NBA Basketball", description: "All regular season matchups, NBA League Pass, and the NBA Finals in 4K." },
  { icon: "football", href: "/contenu/sport/football", title: "Soccer / Premier League", description: "English Premier League, UEFA Champions League, La Liga, and World Cup." },
  { icon: "f1", href: "/contenu/sport/formule-1", title: "Formula 1 Racing", description: "Every Grand Prix practice, qualifying, and race live with onboard camera audio." },
  { icon: "combat", href: "/contenu/sport", title: "UFC & Boxing PPV", description: "All numbered UFC Pay-Per-View main cards and championship title fights." },
  { icon: "tennis", href: "/contenu/sport", title: "Tennis Grand Slams", description: "US Open, Wimbledon, Roland-Garros, and Australian Open center court feeds." },
];

export default function SportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live Sports &amp; Pay-Per-View"
        title={<>All Major <span className="accent">Live Sports</span> in True 4K &amp; 60 FPS</>}
        lead="NFL Sunday Ticket, NBA League Pass, Premier League, UEFA Champions League, Formula 1, MLB, and UFC: experience marquee sports with zero buffering and no regional blackouts."
        breadcrumb={[{ label: "Content", href: "/contenu" }, { label: "Live Sports" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Live sports is the ultimate test of streaming reliability: during high-stakes games, server stability makes all the
            difference. Strong 8K USA utilizes dedicated high-throughput CDN routing to broadcast live sporting events in Full HD
            and true 4K at 60 FPS, completely eliminating frame drops and freeze spikes.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading
          eyebrow="Sports Categories"
          title="Choose Your Favorite Sport"
          lead="Explore comprehensive broadcast schedules, channel guides, and device optimization tips for each major sports league."
        />
        <div className="grid grid--3">
          {DISCIPLINES.map((d) => (
            <LinkCard
              key={d.title}
              href={d.href}
              kicker="Live &amp; On-Demand"
              title={d.title}
              description={d.description}
              meta="Explore Coverage"
            />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
"""

with open(os.path.join(BASE_DIR, "app", "contenu", "sport", "page.tsx"), "w", encoding="utf-8") as f:
    f.write(sport_content)
print("Updated app/contenu/sport/page.tsx")
