import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Refund Policy & 30-Day Satisfaction Guarantee",
  description:
    "Complete refund policy for Strong 8K USA: 30-day money-back guarantee, trial evaluation guidelines, and simple cancellation process.",
  path: "/remboursement",
  noindex: true,
});

export default function RemboursementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customer Guarantee"
        title="Refund Policy &amp; 30-Day Guarantee"
        breadcrumb={[{ label: "Refund Policy" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            At {SITE.name}, customer satisfaction is our top priority. We believe in our uncompressed 4K streaming quality
            and stand behind our service with a transparent, risk-free 30-day money-back guarantee.
          </p>

          <h2>1. 30-Day Money-Back Guarantee</h2>
          <p>
            If you encounter unresolvable technical issues, server instability, or are dissatisfied with channel availability
            within 30 days of purchasing your subscription, you are entitled to a full refund.
          </p>

          <h2>2. Free Trial &amp; Testing First</h2>
          <p>
            To ensure your home internet speed and media player hardware are fully optimized before committing to an annual plan,
            we encourage all prospective customers to test our service with an instant 24-hour test line on our{" "}
            <a href="/abonnement/essai-gratuit">Free Trial page</a>.
          </p>

          <h2>3. Simple 3-Step Refund Request</h2>
          <ol>
            <li>Contact our support desk via WhatsApp at +{SITE.whatsappNumber} or email <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.</li>
            <li>Provide your order email and registered playlist username.</li>
            <li>Our billing desk will process your refund back to your original payment method within 24 to 48 hours.</li>
          </ol>
        </div>
      </Section>
    </>
  );
}
