import Section from "@/components/Section";
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
