import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy & Data Protection",
  description:
    "Privacy policy and data protection practices of Strong 8K USA: zero-log streaming policy, encrypted checkout, and user privacy safeguards.",
  path: "/politique-confidentialite",
  noindex: true,
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Safeguards"
        title="Privacy Policy &amp; Data Protection"
        breadcrumb={[{ label: "Privacy Policy" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            {SITE.name} is committed to protecting your personal privacy. This Privacy Policy details how we collect,
            utilize, and safeguard the information you provide when using our website and streaming network.
          </p>

          <h2>1. Zero-Log Streaming Architecture</h2>
          <p>
            We strictly enforce a <strong>Zero-Activity Logging Policy</strong> across our CDN routing endpoints. We do not monitor,
            record, or store your viewing history, specific stream selections, or video consumption habits.
          </p>

          <h2>2. Information Collected at Checkout</h2>
          <ul>
            <li><strong>Contact Details:</strong> Your email address and optional WhatsApp contact for instant credential delivery and account notices.</li>
            <li><strong>Payment Security:</strong> Payment transactions are handled directly through PCI-DSS compliant 256-bit encrypted gateways. We never store credit card numbers on our servers.</li>
          </ul>

          <h2>3. VPN Compatibility</h2>
          <p>
            {SITE.name} is 100% compatible with all reputable zero-log VPN providers (ExpressVPN, NordVPN, Surfshark).
            You may stream freely through encrypted VPN tunnels without triggering account lockouts.
          </p>

          <h2>4. Inquiries</h2>
          <p>
            For privacy inquiries or account data removal requests, contact our privacy officer at{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
