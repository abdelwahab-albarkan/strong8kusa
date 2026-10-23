import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import TrustProof from "@/components/TrustProof";
import ConnectionExplainer from "@/components/ConnectionExplainer";
import SubscriptionComparison from "@/components/SubscriptionComparison";
import IncludedList from "@/components/IncludedList";
import Steps from "@/components/Steps";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import PaymentBadges from "@/components/PaymentBadges";
import { buildMetadata, faqSchema, subscriptionOffersSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { PRIMARY_CTA, SECONDARY_CTA, FAQ_ITEMS, PRICING_PLANS, SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "IPTV Subscription USA : Best 4K & 8K Streaming Plans (2026)",
  description:
    "Buy premium IPTV subscription in the USA. 50,000+ live channels, 180,000+ movies, NFL/NBA live sports in true 4K/8K. Compatible with Firestick, Apple TV, Smart TVs. 30-day money-back guarantee.",
  path: "/abonnement",
  keywords: [
    "iptv subscription usa",
    "iptv subscribe",
    "best iptv subscription 2026",
    "cheap iptv subscription",
    "buy iptv usa",
    "strong8k subscription",
    "iptv multi screen",
    "firestick iptv service",
    "anti buffering iptv",
    "iptv 4k stream",
    "cable tv alternative",
  ],
});

const KEY_BENEFITS = [
  {
    title: "True 8K & 4K Ultra HD",
    desc: "Uncompressed picture clarity with HDR10+ and authentic 60 FPS sports streams powered by modern H.265 / HEVC compression.",
    icon: "tv",
  },
  {
    title: "Anti-Freeze CDN Routing",
    desc: "Dedicated global server network with automated failover and zero ISP throttling. No spinning wheels during high-stakes games.",
    icon: "bolt",
  },
  {
    title: "50,000+ Live Channels",
    desc: "Complete coverage of US national networks (ABC, CBS, NBC, FOX, ESPN), regional sports networks, news, and global bouquets.",
    icon: "guide",
  },
  {
    title: "180,000+ On-Demand Titles",
    desc: "Vast cinema collection updated daily with box-office releases, complete TV series, and multi-language audio/subtitle options.",
    icon: "film",
  },
  {
    title: "Zero Contracts or IP Locks",
    desc: "Pay as you go with no sneaky automated renewals. Stream seamlessly at home or while traveling on mobile data.",
    icon: "shield",
  },
  {
    title: "24/7 Dedicated US Support",
    desc: "Live technical assistance available 365 days a year via WhatsApp (+212 625-218443) and email (support@streamb4.com).",
    icon: "screens",
  },
];

const SHOWCASE_DEVICES = [
  { name: "Amazon Firestick 4K", img: "/images/firestick.png", slug: "firestick" },
  { name: "Apple TV 4K", img: "/images/device-apple-tv.png", slug: "apple-tv" },
  { name: "Android TV / Google TV", img: "/images/Android TV.png", slug: "android-tv" },
  { name: "Nvidia Shield Pro", img: "/images/nvidiashield.png", slug: "nvidia-shield" },
  { name: "Samsung Smart TV", img: "/images/samsungsmarttv.png", slug: "samsung" },
  { name: "LG webOS Smart TV", img: "/images/LG TV (webOS).png", slug: "lg" },
  { name: "Windows PC", img: "/images/windowspc.png", slug: "windows" },
  { name: "Mac (macOS)", img: "/images/macos.png", slug: "mac" },
  { name: "iPhone & iPad", img: "/images/device-iphone-ipad.png", slug: "iphone-ipad" },
];

export default function AbonnementHubPage() {
  return (
    <>
      <JsonLd data={[subscriptionOffersSchema(PRICING_PLANS), faqSchema(FAQ_ITEMS)]} />
      <PageHeader
        eyebrow="Pricing &amp; Subscriptions"
        title={<>Flexible Plans Engineered for <span className="accent">Every American Household</span></>}
        lead="Choose your desired simultaneous screen count (1, 2, 3, or 5 connections) and duration. Save up to 55% with our 12-Month plan. Zero contracts, instant 60-second activation, and an unconditional 30-day money-back guarantee."
        breadcrumb={[{ label: "Pricing & Plans" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      {/* Main Interactive Pricing Section */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Subscription Packages"
          title={<>Select Your <span className="accent">Screens &amp; Duration</span></>}
          lead="Choose how many devices stream concurrently in your home, then pick your subscription duration."
          center
        />
        <Pricing />
      </Section>

      {/* Visual Benefits Grid (Glassmorphism cards inspired by FeatureCard) */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Why Choose Strong 8K USA"
          title={<>The Ultimate <span className="accent">Cord-Cutting Solution</span></>}
          lead="Engineered for high performance, maximum reliability, and effortless multi-device entertainment."
          center
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: "var(--space-6)",
          }}
        >
          {KEY_BENEFITS.map((b) => (
            <div
              key={b.title}
              style={{
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#fff3eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff6600",
                  marginBottom: "16px",
                  boxShadow: "0 2px 8px rgba(255, 102, 0, 0.15)",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>★</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                {b.title}
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.55 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>


      {/* Device Hardware Showcase with Real Images */}
      <Section>
        <SectionHeading
          eyebrow="Device Compatibility"
          title={<>Watch on <span className="accent">Any Screen</span> You Own</>}
          lead="Plug-and-play setup across all major streaming hardware and operating systems."
          center
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginTop: "var(--space-6)",
          }}
        >
          {SHOWCASE_DEVICES.map((d) => (
            <Link
              key={d.name}
              href={`/appareils/${d.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px 16px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ position: "relative", width: "54px", height: "54px", marginBottom: "12px" }}>
                <Image src={d.img} alt={d.name} fill sizes="54px" style={{ objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--text)" }}>{d.name}</span>
              <span style={{ fontSize: "0.78rem", color: "var(--accent)", marginTop: "4px" }}>View Setup Guide →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Connections Explainer */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Understanding Connections"
          title={<>How Do <span className="accent">Simultaneous Screens</span> Work?</>}
          lead="Clear breakdown of how 1, 2, 3, and 5 concurrent streams work across your household devices."
          center
        />
        <ConnectionExplainer />
      </Section>

      {/* Anti-Buffering & Cybersecurity Banner */}
      <Section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "36px",
            background: "linear-gradient(135deg, #ffffff 0%, #fffaf4 100%)",
            border: "1.5px solid rgba(255, 102, 0, 0.25)",
            borderRadius: "20px",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.06), 0 0 25px rgba(255, 102, 0, 0.08)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "center" }}>
            <div>
              <span style={{ color: "#ff6600", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Anti-Buffering Architecture
              </span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 850, color: "#0f172a", marginTop: "8px", lineHeight: 1.25 }}>
                Bypass ISP Bandwidth Throttling During Major Sporting Events
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, marginTop: "12px" }}>
                Many US internet service providers (such as Comcast, Spectrum, and AT&amp;T) actively throttle video streaming traffic during peak Sunday football games. Strong 8K USA utilizes encrypted stream endpoints and is 100% compatible with all zero-log VPNs to ensure full 60 FPS playback without drops.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "18px", flexWrap: "wrap" }}>
                <span style={{ background: "#fff3eb", color: "#ea580c", border: "1px solid rgba(255, 102, 0, 0.25)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700 }}>
                  ✓ 100% VPN Compatible
                </span>
                <span style={{ background: "#fff3eb", color: "#ea580c", border: "1px solid rgba(255, 102, 0, 0.25)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700 }}>
                  ✓ No IP Address Lock
                </span>
                <span style={{ background: "#fff3eb", color: "#ea580c", border: "1px solid rgba(255, 102, 0, 0.25)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700 }}>
                  ✓ 99.9% Uptime SLA
                </span>
              </div>
            </div>
            <div style={{ position: "relative", width: "100%", height: "240px", borderRadius: "12px", overflow: "hidden", border: "1.5px solid rgba(255, 102, 0, 0.2)", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}>

              <Image
                src="/images/lucid-origin_Modern_streaming_setup_with_encrypted_VPN_tunnel_visualization_Smart_TV_laptop_a-0.jpg"
                alt="Anti-buffering encrypted streaming network visualization"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Offer Comparison Table */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Detailed Matrix"
          title={<>Compare All <span className="accent">Subscription Tiers</span></>}
          lead="Compare features, simultaneous stream limits, and pricing side-by-side to find the right fit."
          center
        />
        <SubscriptionComparison />
      </Section>

      {/* What's included in every plan */}
      <Section>
        <SectionHeading
          eyebrow="Standard on All Plans"
          title={<>The Same Premium Quality, <span className="accent">No Matter Which Plan</span></>}
          lead="Zero hidden upgrades or paywalled features: every subscriber enjoys our complete 8K / 4K content catalog."
        />
        <IncludedList />
      </Section>

      {/* Trust & guarantees — honest, verifiable proof */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Proof &amp; Guarantees"
          title={<>Why Thousands of US Viewers <span className="accent">Trust Strong 8K</span></>}
          lead="Verifiable commitments, transparent 30-day money-back policy, and around-the-clock technical support."
          center
        />
        <TrustProof />
      </Section>

      {/* Activation Steps */}
      <Section>
        <SectionHeading
          eyebrow="Fast Setup"
          title="Ready to Stream in 3 Simple Steps"
          lead="Receive your M3U playlist URL and Xtream Codes API login instantly after ordering."
          center
        />
        <Steps />
      </Section>

      {/* Stats */}
      <Section variant="secondary">
        <Stats />
      </Section>

      {/* Secure Payment Methods */}
      <Section variant="soft">
        <SectionHeading
          eyebrow="Secure Checkout"
          title="256-Bit SSL Encrypted Payments"
          lead="Pay safely with Visa, Mastercard, PayPal, Apple Pay, Google Pay, or major cryptocurrencies."
          center
        />
        <div style={{ marginTop: "var(--space-6)" }}>
          <PaymentBadges align="center" size="md" />
        </div>
        <p style={{ textAlign: "center", marginTop: "var(--space-6)", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Have questions before ordering? Review our <Link href="/abonnement/avis" className="link">subscriber feedback and evaluation criteria</Link> or contact our support team at <a href={`mailto:${SITE.supportEmail}`} className="link">{SITE.supportEmail}</a>.
        </p>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Frequently Asked Questions" title="Everything About Subscribing" center />
        <FAQ />
      </Section>

      <CTA />
    </>
  );
}
