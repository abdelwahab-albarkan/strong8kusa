import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Legal Terms & FTC Ownership Disclosure",
  description:
    "Official legal information, FTC ownership disclosures, DMCA copyright policy, and terms of operation for Strong 8K USA.",
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegalesPage() {
  const domain = SITE.domain.replace("https://", "");
  return (
    <>
      <PageHeader
        eyebrow="Legal Information"
        title="FTC Ownership &amp; Legal Disclosures"
        breadcrumb={[{ label: "Legal Terms" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            These legal terms and ownership disclosures apply to the website and online services operated under the brand{" "}
            <strong>{SITE.name}</strong>, accessible at <a href={SITE.domain}>{domain}</a>.
          </p>

          <h2>1. Publisher &amp; Service Operator</h2>
          <ul>
            <li><strong>Operating Entity:</strong> {SITE.legalName}</li>
            <li><strong>Online Portal:</strong> {SITE.domain}</li>
            <li><strong>Customer Support Email:</strong> <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></li>
            <li><strong>Sales &amp; Billing Inquiries:</strong> <a href={`mailto:${SITE.salesEmail}`}>{SITE.salesEmail}</a></li>
            <li><strong>WhatsApp Live Support:</strong> +{SITE.whatsappNumber}</li>
          </ul>

          <h2>2. Technical Nature of the Service</h2>
          <p>
            {SITE.name} provides high-throughput content delivery network (CDN) routing, cloud middleware infrastructure,
            and digital playlist connectivity compatible with modern third-party streaming media players (including TiviMate,
            IPTV Smarters Pro, VLC, and Kodi).
          </p>
          <p>
            {SITE.name} does not broadcast, produce, or own original television programming. We operate solely as an independent
            digital transmission and infrastructure provider. All third-party trademarks, product names, logos, and network brands
            mentioned on this site belong exclusively to their respective holders.
          </p>

          <h2>3. Intellectual Property &amp; Trademarks</h2>
          <p>
            All original website copy, branding, design system, interactive pricing calculators, and visual UI assets on this domain
            are the proprietary intellectual property of {SITE.legalName}. Unauthorized duplication or scraping is strictly prohibited.
          </p>
          <p>
            Trademarks such as <em>Amazon Fire TV</em>, <em>Apple TV</em>, <em>Google TV</em>, <em>Android</em>, <em>Samsung Tizen</em>,
            and <em>LG webOS</em> are referenced strictly for hardware compatibility and instructional setup purposes under fair use.
          </p>

          <h2>4. DMCA &amp; Copyright Inquiries</h2>
          <p>
            {SITE.name} respects all intellectual property rights. If you believe any digital stream URL routed through our
            infrastructure infringes upon your copyright, please submit an official inquiry to our legal desk at{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> with complete verification documentation.
          </p>

          <h2>5. Related Legal Documents</h2>
          <ul>
            <li><a href="/conditions-utilisation">Terms of Service (ToS)</a></li>
            <li><a href="/cgv">Subscription &amp; Sales Agreement</a></li>
            <li><a href="/politique-confidentialite">Privacy Policy</a></li>
            <li><a href="/remboursement">Refund &amp; Money-Back Guarantee Policy</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </Section>
    </>
  );
}
