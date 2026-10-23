import Section from "@/components/Section";
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
