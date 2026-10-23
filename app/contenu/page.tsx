import Link from "next/link";
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
