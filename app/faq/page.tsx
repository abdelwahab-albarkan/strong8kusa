import Link from "next/link";
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
