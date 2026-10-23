import Link from "next/link";
import { SITE, LEGAL_LINKS, waLink } from "@/lib/site";
import Container from "./Container";
import Logo from "./Logo";
import Icon from "./Icon";
import WhatsAppIcon from "./WhatsAppIcon";
import PaymentBadges from "./PaymentBadges";
import SocialLinks from "./SocialLinks";
import styles from "./Footer.module.css";

/* Footer navigation — pillars → clusters → supporting content.
   Every href maps to an existing canonical route. */
const COLUMNS: {
  title: string;
  links: { label: string; href: string }[];
  seeAll?: { label: string; href: string };
}[] = [
  {
    title: "Subscriptions",
    links: [
      { label: "Buyer's Guide", href: "/meilleur-iptv" },
      { label: "All Subscription Plans", href: "/abonnement" },
      { label: "1 Screen (Solo)", href: "/abonnement/1-connexion" },
      { label: "2 Screens (Duo)", href: "/abonnement/2-connexions" },
      { label: "3 Screens (Family)", href: "/abonnement/3-connexions" },
      { label: "5 Screens (Multi-Room)", href: "/abonnement/5-connexions" },
      { label: "12-Month Best Value", href: "/abonnement/annuel" },
      { label: "Ultra HD 8K & 4K Tier", href: "/abonnement/4k" },
      { label: "Free Trial & Guarantee", href: "/abonnement/essai-gratuit" },
      { label: "Reviews & Reputation", href: "/abonnement/avis" },
    ],
    seeAll: { label: "View All Pricing", href: "/abonnement" },
  },
  {
    title: "Device Guides",
    links: [
      { label: "Amazon Firestick 4K", href: "/appareils/firestick" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Android TV & Google TV", href: "/appareils/android-tv" },
      { label: "Nvidia Shield Pro", href: "/appareils/nvidia-shield" },
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV (webOS)", href: "/appareils/lg" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Windows PC", href: "/appareils/windows" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "MAG Set-Top Box", href: "/appareils/mag" },
    ],
    seeAll: { label: "All Supported Devices", href: "/appareils" },
  },
  {
    title: "Apps & Protocols",
    links: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate" },
      { label: "IPTV Smarters Pro", href: "/applications/smarters" },
      { label: "VLC Media Player", href: "/applications/vlc" },
      { label: "Kodi Media Center", href: "/applications/kodi" },
      { label: "XCIPTV Player", href: "/applications/xciptv" },
      { label: "OTT Navigator", href: "/applications/ott-navigator" },
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv" },
      { label: "M3U Playlist URLs", href: "/formats/m3u" },
      { label: "Xtream Codes API", href: "/formats/xtream-codes" },
      { label: "EPG XMLTV Guide", href: "/formats/epg" },
    ],
    seeAll: { label: "All Streaming Apps", href: "/applications" },
  },
  {
    title: "Live Sports & VOD",
    links: [
      { label: "NFL Sunday Football", href: "/contenu/sport" },
      { label: "NBA League Pass", href: "/contenu/sport" },
      { label: "UEFA Champions League", href: "/contenu/sport/champions-league" },
      { label: "Formula 1 Racing", href: "/contenu/sport/formule-1" },
      { label: "Soccer / Premier League", href: "/contenu/sport/football" },
      { label: "US National Networks", href: "/contenu/chaines" },
      { label: "International Bouquets", href: "/contenu/chaines/internationales" },
      { label: "4K Movies On Demand", href: "/contenu/divertissement/films" },
      { label: "Complete TV Series", href: "/contenu/divertissement/series" },
      { label: "Cable vs Strong 8K", href: "/comparatifs" },
    ],
    seeAll: { label: "Complete Channels List", href: "/contenu/chaines" },
  },
  {
    title: "Help & Troubleshooting",
    links: [
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Common Questions Hub", href: "/faq/questions-frequentes" },
      { label: "Streaming Glossary", href: "/faq/lexique" },
      { label: "Troubleshooting Hub", href: "/problemes" },
      { label: "Fix IPTV Buffering", href: "/problemes/buffering-coupure" },
      { label: "Fix Black Screen Issues", href: "/problemes/ecran-noir" },
      { label: "Bypass ISP Throttling", href: "/problemes/iptv-bloque-operateur" },
      { label: "What is High-Speed Streaming?", href: "/blog/quest-ce-que-liptv" },
      { label: "How to Install Streaming Apps", href: "/blog/comment-installer-iptv" },
      { label: "About Strong 8K USA", href: "/a-propos" },
    ],
    seeAll: { label: "Contact Support Team", href: "/contact" },
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Knowledge directory panel */}
        <div className={styles.panel}>
          <div className={styles.panelHead}>
            <p className={styles.dirEyebrow}>{SITE.name} Streaming Knowledgebase</p>
            <p className={styles.dirSub}>
              Direct access to setup tutorials, live channel directories, hardware guides, app optimizations, and 24/7 technical assistance.
            </p>
          </div>

          <div className={styles.grid}>
            {COLUMNS.map((col, i) => (
              <nav key={col.title} aria-labelledby={`footer-h-${i}`} className={styles.navCol}>
                <h2 id={`footer-h-${i}`} className={styles.colTitle}>
                  {col.title}
                </h2>
                <ul className={styles.list}>
                  {col.links.map((l, idx) => (
                    <li key={`${l.label}-${idx}`}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
                {col.seeAll && (
                  <Link href={col.seeAll.href} className={styles.seeAll}>
                    {col.seeAll.label} →
                  </Link>
                )}
              </nav>
            ))}
          </div>
        </div>

        {/* Brand / contact + payments */}
        <div className={styles.foot}>
          <div className={styles.brandArea}>
            <Logo tone="light" />
            <p className={styles.tagline}>{SITE.tagline}</p>
            <div className={styles.contact}>
              <a href={`mailto:${SITE.supportEmail}`}>
                <Icon name="mail" size={17} /> {SITE.supportEmail}
              </a>
              <Link href="/contact">
                <Icon name="chat" size={17} /> 24/7 Technical Support
              </Link>
              <a
                href={waLink("Hello! I am reaching out from Strong 8K USA website.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <WhatsAppIcon size={17} style={{ color: "#25d366" }} /> Live WhatsApp Chat
              </a>
            </div>
          </div>

          <SocialLinks title="Follow Strong 8K USA" className={styles.socialArea} />

          <div className={styles.payArea}>
            <p className={styles.payLabel}>256-Bit SSL Encrypted Checkout</p>
            <PaymentBadges align="start" size="sm" />
          </div>
        </div>

        {/* FTC / Trademark Ownership Disclaimer */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "20px 0 10px",
            fontSize: "0.78rem",
            lineHeight: "1.55",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <p>
            <strong>FTC &amp; Trademark Ownership Disclosure:</strong> {SITE.name} is an independent technology and streaming subscription service provider. All product names, logos, brands, trademarks, and registered trademarks mentioned on this website (including but not limited to Amazon, Fire TV, Apple TV, Google TV, Roku, TiviMate, IPTV Smarters Pro, NFL, NBA, MLB, and UEFA) are the property of their respective owners. Reference to any third-party brands or devices is strictly for compatibility, technical setup guidance, and editorial identification purposes, and does not imply endorsement, affiliation, or sponsorship.
          </p>
        </div>

        {/* Legal bar */}
        <div className={styles.legal}>
          <p className={styles.copy}>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <nav className={styles.legalRow} aria-label="Legal Links">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
