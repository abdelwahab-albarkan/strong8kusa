import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Subscription Agreement & Terms of Sale",
  description:
    "Terms of sale and subscription agreement for Strong 8K USA: pricing tiers, instant activation, payment methods, and 30-day money-back guarantee.",
  path: "/cgv",
  noindex: true,
});

export default function CGVPage() {
  return (
    <>
      <PageHeader
        eyebrow="Purchasing Terms"
        title="Subscription Agreement &amp; Terms of Sale"
        breadcrumb={[{ label: "Terms of Sale" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            This Subscription Agreement governs all digital purchases and service plans ordered through {SITE.name}.
            Every order constitutes full acceptance of these terms alongside our <a href="/conditions-utilisation">Terms of Service</a>.
          </p>

          <h2>1. Pricing &amp; Currency</h2>
          <p>
            All subscription prices on {SITE.name} are clearly denominated in United States Dollars (USD $).
            There are zero hidden activation charges, zero monthly hardware rental fees, and zero unexpected renewal fees.
          </p>

          <h2>2. Subscription Duration &amp; Zero Contracts</h2>
          <ul>
            <li>Plans are offered for 1, 3, 6, and 12-month fixed durations based on your selected simultaneous screen tier.</li>
            <li>All plans are strictly <strong>pay-as-you-go with zero long-term contracts</strong>: your card is never automatically billed upon term expiration unless you explicitly request a renewal.</li>
          </ul>

          <h2>3. Automated 60-Second Order Fulfillment</h2>
          <p>
            Upon confirmed payment, account credentials (M3U playlist link, EPG TV guide link, and Xtream Codes API username/password)
            are delivered automatically via email and WhatsApp in under 60 seconds.
          </p>

          <h2>4. Secure Payment Processing</h2>
          <p>
            We process payments through 256-bit SSL encrypted channels supporting Visa, Mastercard, American Express, PayPal,
            Apple Pay, Google Pay, and major cryptocurrencies (BTC, USDT, ETH).
          </p>

          <h2>5. 30-Day Money-Back Guarantee</h2>
          <p>
            Every subscription includes our full 30-day satisfaction guarantee. For complete claim guidelines, please review our{" "}
            <a href="/remboursement">Refund Policy</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
