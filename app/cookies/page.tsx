import Section from "@/components/Section";
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
