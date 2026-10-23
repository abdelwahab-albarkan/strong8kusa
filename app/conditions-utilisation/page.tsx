import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Service (ToS)",
  description:
    "Terms of service, acceptable use policy, and user account responsibilities for Strong 8K USA streaming platform.",
  path: "/conditions-utilisation",
  noindex: true,
});

export default function ConditionsUtilisationPage() {
  return (
    <>
      <PageHeader
        eyebrow="User Agreement"
        title="Terms of Service (ToS)"
        breadcrumb={[{ label: "Terms of Service" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            Welcome to {SITE.name}. By accessing our website, purchasing a subscription, or using our streaming infrastructure,
            you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <h2>1. Service Access &amp; Account Credentials</h2>
          <p>
            Upon subscription activation, you will receive personalized M3U playlist credentials and Xtream Codes API server access.
            These credentials are licensed exclusively for your household use according to your chosen connection tier (1, 2, 3, or 5 active streams).
          </p>
          <p>
            Simultaneous streaming is strictly governed by your selected plan. Exceeding your purchased active stream limit simultaneously
            may cause automatic security rate-limiting on that stream until excess connections disconnect.
          </p>

          <h2>2. Acceptable Use Policy</h2>
          <ul>
            <li>You agree not to publicly redistribute, re-broadcast, or resell your personal subscription credentials without an authorized reseller license.</li>
            <li>You agree not to deploy automated denial-of-service tools or scrapers against our streaming CDN endpoints.</li>
            <li>Stream sharing across un-purchased external households is prohibited.</li>
          </ul>

          <h2>3. Service Availability &amp; Maintenance</h2>
          <p>
            {SITE.name} maintains a 99.9% uptime SLA across our redundant North American CDN network. Periodic routing maintenance
            is performed during off-peak hours (typically 3 AM to 5 AM EST) to ensure peak live sports performance.
          </p>

          <h2>4. Customer Support Contact</h2>
          <p>
            Questions regarding these Terms of Service can be directed to our technical support team 24/7 at{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> or via our direct WhatsApp channel at +{SITE.whatsappNumber}.
          </p>
        </div>
      </Section>
    </>
  );
}
