import Link from "next/link";
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
