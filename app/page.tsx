import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import IncludedList from "@/components/IncludedList";
import Pricing from "@/components/Pricing";
import TrustProof from "@/components/TrustProof";
import Reviews from "@/components/Reviews";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Button from "@/components/Button";
import LinkCard from "@/components/LinkCard";
import ComparisonTable from "@/components/ComparisonTable";
import DeviceGrid from "@/components/DeviceGrid";
import SportShowcase from "@/components/SportShowcase";
import { HomeHeroSection, MovieCatalogSection } from "@/components/tmdb/MediaSection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, organizationSchema, websiteSchema, faqSchema, subscriptionOffersSchema } from "@/lib/seo";
import { PRIMARY_CTA, CLUSTERS, FAQ_ITEMS, PRICING_PLANS } from "@/lib/site";
import { DEVICE_LIST } from "@/lib/devices";
import { APP_LIST } from "@/lib/applications";

export const metadata = buildMetadata({
  title: "Best IPTV Service USA (2026) — Strong 8K Live Streaming",
  description:
    "Experience America's top-rated 8K & 4K IPTV service. Stream 50,000+ live US channels, NFL, NBA & PPV with zero buffering. Instant 60s setup. Try risk-free today!",
  path: "/",
  keywords: [
    "strong8k",
    "strong 8k usa",
    "best iptv usa",
    "iptv subscription usa",
    "iptv service for firestick",
    "anti buffering iptv",
    "iptv smarters pro usa",
    "tivimate usa",
    "cable tv alternative",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          subscriptionOffersSchema(PRICING_PLANS),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      {/* 1. Cinematic Brand Hero */}
      <HomeHeroSection />

      {/* 2. Key Metrics Bar */}
      <Section variant="secondary">
        <Stats />
      </Section>

      {/* 3. PRICING & SUBSCRIPTION PLANS — Elevated to Top of Page */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Pricing &amp; Plans"
          title={<>Instant Activation, <span className="accent">Zero Hidden Fees</span></>}
          lead="Choose your streaming duration and simultaneous screen count. Save up to 55% on annual packages with a 30-day money-back guarantee."
          center
        />
        <Pricing />
      </Section>

      {/* 4. On-Demand Movies & TV Shows Marquee */}
      <MovieCatalogSection />

      {/* 5. Positioning & Video Architecture Split */}
      <Section variant="secondary">
        <div className="home-split">
          <div>
            <SectionHeading
              eyebrow="The Service"
              title={
                <>
                  Uncompromising Quality, <span className="accent">Zero Buffering</span>
                </>
              }
              lead="Strong 8K USA brings together all major US national & regional channels — ABC, CBS, NBC, FOX, ESPN — marquee live sports passes, and a colossal on-demand movie library in crystal-clear 4K and 8K 60 FPS fidelity."
            />
            <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Button href={PRIMARY_CTA.href} size="lg">{PRIMARY_CTA.label}</Button>
              <Button href="/meilleur-iptv" size="lg" variant="secondary">Streaming Buyer&apos;s Guide</Button>
            </div>
            <div style={{ marginTop: "var(--space-6)" }}>
              <IncludedList columns={1} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ position: "relative", minHeight: "380px", borderRadius: "20px", overflow: "hidden", border: "1.5px solid rgba(255, 102, 0, 0.2)", boxShadow: "0 20px 45px rgba(0,0,0,0.08)" }}>
              <Image
                src="/images/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg"
                alt="Strong 8K USA modern streaming interface on 4K TV"
                fill
                sizes="(max-width: 860px) 100vw, 550px"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", padding: "14px 18px", background: "rgba(255, 255, 255, 0.94)", backdropFilter: "blur(12px)", borderRadius: "12px", border: "1px solid rgba(255, 102, 0, 0.25)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#ff6600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Next-Gen TV Architecture</span>
                <p style={{ fontSize: "0.85rem", color: "#334155", margin: "2px 0 0 0" }}>High frame-rate 60 FPS sports and dynamic EPG guide integration.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Live Sports Showcase */}
      <SportShowcase />

      {/* 7. Anti-Buffering & Network Reliability Visual Section */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            alignItems: "center",
            padding: "36px",
            background: "linear-gradient(135deg, #ffffff 0%, #fffaf4 100%)",
            border: "1.5px solid rgba(255, 102, 0, 0.25)",
            borderRadius: "20px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.06), 0 0 25px rgba(255, 102, 0, 0.08)",
          }}
        >
          <div>
            <span style={{ color: "#ff6600", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Enterprise Streaming CDN
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 850, color: "#0f172a", marginTop: "8px", lineHeight: 1.25 }}>
              Zero Buffering, Even During the Biggest Games
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, marginTop: "12px" }}>
              Traditional IPTV services experience lag and buffering during high-traffic events like Sunday Football and UFC main cards. Strong 8K USA routes each stream through geo-optimized edge servers with automated failover and 100% zero-log VPN compatibility.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Button href="/problemes/buffering-coupure" variant="secondary">
                Read Anti-Buffering Architecture Guide →
              </Button>
            </div>
          </div>
          <div style={{ position: "relative", minHeight: "260px", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255, 102, 0, 0.2)", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}>
            <Image
              src="/images/lucid-origin_Modern_streaming_setup_with_encrypted_VPN_tunnel_visualization_Smart_TV_laptop_a-0.jpg"
              alt="Anti-buffering encrypted streaming VPN visualization"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Section>

      {/* 8. Devices Compatibility */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Compatibility"
          title="Engineered for All Your Streaming Devices"
          lead="Amazon Firestick, Apple TV 4K, Android TV, Google TV, Nvidia Shield, Smart TVs, PCs, and smartphones."
        />
        <DeviceGrid items={DEVICE_LIST} />
      </Section>

      {/* 9. Supported Applications */}
      <Section>
        <div className="home-split">
          <div>
            <SectionHeading
              eyebrow="Supported Players"
              title={<>The Ideal Player for <span className="accent">Every Screen</span></>}
              lead="Strong 8K USA is fully compatible with all premier streaming applications including TiviMate, IPTV Smarters Pro, VLC, and Kodi. Setup is fast with Xtream Codes or M3U playlist URLs."
            />
            <Link href="/applications" className="link" style={{ marginTop: "var(--space-4)", display: "inline-block" }}>
              Explore all application setup guides →
            </Link>
          </div>
          <div className="grid grid--2">
            {APP_LIST.slice(0, 4).map((a) => (
              <LinkCard key={a.slug} href={`/applications/${a.slug}`} title={a.name} description={a.platforms} meta="Setup Guide" />
            ))}
          </div>
        </div>
      </Section>

      {/* 10. Getting Started Steps */}
      <Section variant="secondary">
        <SectionHeading eyebrow="Getting Started" title="Start Streaming in 3 Easy Steps" center />
        <Steps />
      </Section>

      {/* 11. Traditional US Cable vs Strong 8K USA */}
      <Section variant="soft">
        <SectionHeading
          eyebrow="Comparison"
          title="Traditional US Cable vs Strong 8K USA"
          lead="See how modern high-speed streaming compares to legacy cable contracts and satellite dishes."
        />
        <ComparisonTable
          columns={["Features & Costs", "Strong 8K USA", "Traditional US Cable"]}
          highlightColumn={1}
          rows={[
            { label: "Live HD / 4K / 8K Channels", cells: ["50,000+ Global & Local", "150–250 Channels"] },
            { label: "VOD Movies & Complete Series", cells: ["180,000+ Included", "Pay-Per-View or Limited"] },
            { label: "Stream Quality & FPS", cells: ["True 4K/8K 60 FPS", "Compressed 720p / 1080i"] },
            { label: "Hardware & Box Rental Fees", cells: ["$0 (Use Existing Firestick/TV)", "$15–$30/mo per box"] },
            { label: "Contracts & Hidden Commitments", cells: ["Zero (Cancel Anytime)", "12–24 Month Lock-In"] },
            { label: "Simultaneous Screen Options", cells: ["1 to 5 Screens", "Extra Fee per Room"] },
          ]}
        />
      </Section>

      {/* 12. Trust & Guarantees */}
      <Section>
        <SectionHeading
          eyebrow="Proof &amp; Guarantees"
          title={<>Why Thousands of US Viewers <span className="accent">Trust Strong 8K</span></>}
          lead="Transparent commitments, verified 99.9% uptime, and an unconditional 30-day money-back guarantee."
          center
        />
        <TrustProof />
      </Section>

      {/* 13. Customer Reviews & Testimonials */}
      <Section variant="secondary" id="avis">
        <SectionHeading
          eyebrow="Subscriber Experiences"
          title={<>Real Feedback from <span className="accent">Everyday Viewers</span></>}
          lead="Insights into setup ease, picture clarity, and live sporting event performance."
          center
        />
        <Testimonials />
      </Section>

      {/* 14. Frequently Asked Questions */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Everything You Need to Know" center />
        <FAQ />
      </Section>

      {/* 15. Final CTA */}
      <CTA />
    </>
  );
}
