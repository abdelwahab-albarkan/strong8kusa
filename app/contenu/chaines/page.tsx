import Link from "next/link";
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
