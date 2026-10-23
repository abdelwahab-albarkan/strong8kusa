import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import WhatsAppIcon from "./../../components/WhatsAppIcon";
import { buildMetadata } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact & 24/7 Support : Strong 8K USA",
  description:
    "Contact Strong 8K USA customer support. 24/7 technical assistance via direct email and live WhatsApp (+212 625-218443). Pre-sale inquiries, setup assistance, and billing.",
  path: "/contact",
  keywords: ["strong8k contact", "iptv customer support usa", "iptv technical help", "iptv whatsapp support"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="24/7 Technical Support"
        title={<>Have Questions? <span className="accent">Let&apos;s Connect</span></>}
        lead="Our dedicated streaming specialists are available around the clock via email and live WhatsApp chat, 365 days a year."
        breadcrumb={[{ label: "Contact & Support" }]}
      />

      <Section>
        <div className="grid grid--3">
          <div className="card">
            <span className="icon-chip" aria-hidden="true"><Icon name="mail" /></span>
            <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.1rem" }}>Email Assistance</h3>
            <p style={{ marginTop: "var(--space-2)", fontSize: "0.92rem", color: "var(--text-muted)" }}>
              Direct technical help, invoice requests, and credentials delivery verification.
            </p>
            <a href={`mailto:${SITE.supportEmail}`} className="link" style={{ marginTop: "var(--space-3)", display: "inline-block", fontWeight: 700 }}>
              {SITE.supportEmail}
            </a>
          </div>

          <div className="card" style={{ borderColor: "rgba(37, 211, 102, 0.4)", background: "linear-gradient(180deg, var(--surface) 0%, rgba(37, 211, 102, 0.04) 100%)" }}>
            <span className="icon-chip" style={{ background: "rgba(37, 211, 102, 0.15)", color: "#25d366" }} aria-hidden="true">
              <WhatsAppIcon size={22} />
            </span>
            <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.1rem" }}>Live WhatsApp Chat</h3>
            <p style={{ marginTop: "var(--space-2)", fontSize: "0.92rem", color: "var(--text-muted)" }}>
              Instant live agent support (+212 625-218443) for Firestick setup, app codes, and real-time ordering.
            </p>
            <a
              href={waLink("Hello! I need technical support or assistance with Strong 8K USA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              style={{ marginTop: "var(--space-3)", display: "inline-flex", alignItems: "center", gap: 8, color: "#25d366", fontWeight: 750 }}
              aria-label="Contact us on WhatsApp"
            >
              <WhatsAppIcon size={18} /> Chat on WhatsApp (+212 625-218443)
            </a>
          </div>

          <div className="card">
            <span className="icon-chip" aria-hidden="true"><Icon name="clock" /></span>
            <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.1rem" }}>Available 24/7/365</h3>
            <p style={{ marginTop: "var(--space-2)", fontSize: "0.92rem", color: "var(--text-muted)" }}>
              Continuous monitoring and rapid response times (typically 5 to 15 minutes) even during Sunday football games.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <SectionHeading eyebrow="Send a Message" title="Reach Our Technical Desk" />
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
