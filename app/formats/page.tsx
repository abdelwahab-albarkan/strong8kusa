import Link from "next/link";
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
