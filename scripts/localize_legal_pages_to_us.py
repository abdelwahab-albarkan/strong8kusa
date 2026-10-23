import os

BASE_DIR = r"c:\Users\clanm\OneDrive\Desktop\usa 1 site"

# 1. app/mentions-legales/page.tsx -> FTC Ownership & Legal Disclaimer
mentions_legales_content = """import Section from "@/components/Section";
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
"""

# 2. app/conditions-utilisation/page.tsx -> Terms of Service
conditions_content = """import Section from "@/components/Section";
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
"""

# 3. app/cgv/page.tsx -> Subscription & Sales Agreement
cgv_content = """import Section from "@/components/Section";
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
"""

# 4. app/remboursement/page.tsx -> Refund Policy
remboursement_content = """import Section from "@/components/Section";
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
"""

# 5. app/politique-confidentialite/page.tsx -> Privacy Policy
privacy_content = """import Section from "@/components/Section";
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
"""

# 6. app/cookies/page.tsx -> Cookie Policy
cookies_content = """import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Cookie Policy & Tracking Preferences",
  description:
    "Cookie policy for Strong 8K USA: essential session cookies, local storage preferences, and zero invasive third-party ad tracking.",
  path: "/cookies",
  noindex: true,
});

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tracking Preferences"
        title="Cookie Policy"
        breadcrumb={[{ label: "Cookie Policy" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            {SITE.name} respects user privacy and believes in clean, transparent browsing without intrusive third-party advertising trackers.
          </p>

          <h2>1. Essential Cookies &amp; Local Storage</h2>
          <p>
            Our website uses minimal, strictly essential technical cookies and browser LocalStorage solely to:
          </p>
          <ul>
            <li>Maintain your interface theme preference (Light/Dark mode).</li>
            <li>Preserve your chosen multi-connection pricing tier during interactive selection.</li>
            <li>Maintain secure session tokens during account credential retrieval.</li>
          </ul>

          <h2>2. Zero Third-Party Advertising Trackers</h2>
          <p>
            We do not sell user data to advertising networks or employ behavioral tracking pixels. Your visit to {SITE.name}
            remains confidential and clutter-free.
          </p>
        </div>
      </Section>
    </>
  );
}
"""

files_to_write = [
    ("app/mentions-legales/page.tsx", mentions_legales_content),
    ("app/conditions-utilisation/page.tsx", conditions_content),
    ("app/cgv/page.tsx", cgv_content),
    ("app/remboursement/page.tsx", remboursement_content),
    ("app/politique-confidentialite/page.tsx", privacy_content),
    ("app/cookies/page.tsx", cookies_content)
]

for rel_path, content in files_to_write:
    dest = os.path.join(BASE_DIR, rel_path)
    with open(dest, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated legal page: {rel_path}")

print("All 6 legal pages localized to US English successfully!")
