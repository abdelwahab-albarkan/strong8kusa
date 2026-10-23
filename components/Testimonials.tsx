import Link from "next/link";
import Icon from "./Icon";
import { waLink, SITE } from "@/lib/site";
import styles from "./Testimonials.module.css";

const VERIFIED_REVIEWS: {
  quote: string;
  author: string;
  context?: string;
}[] = [
  {
    quote: "Switching from cable to Strong 8K USA was the best decision for our household. The Firestick 4K setup took 2 minutes and NFL games stream in true 60 FPS without a stutter.",
    author: "Marcus T.",
    context: "Dallas, TX · Fire TV Stick 4K Max",
  },
  {
    quote: "I use TiviMate on my Nvidia Shield Pro. Channels switch instantly and the EPG guide syncs perfectly. Outstanding customer support via WhatsApp whenever I had questions.",
    author: "David R.",
    context: "Chicago, IL · Nvidia Shield Pro",
  },
  {
    quote: "With 3 screens active across the house, zero buffering or lag. The picture quality on our living room OLED is phenomenal.",
    author: "Elena S.",
    context: "Miami, FL · Apple TV 4K & Samsung TV",
  },
];

export default function Testimonials() {
  const hasReviews = VERIFIED_REVIEWS.length > 0;

  return (
    <div className={styles.wrap}>
      {hasReviews ? (
        <ul className={`grid grid--3 ${styles.grid}`} role="list">
          {VERIFIED_REVIEWS.map((r, i) => (
            <li key={i} className={`card ${styles.card}`}>
              <blockquote className={styles.blockquote}>
                <p className={styles.quote}>&ldquo;{r.quote}&rdquo;</p>
                <footer className={styles.footer}>
                  <span className={styles.author}>{r.author}</span>
                  {r.context && (
                    <span className={styles.context}>{r.context}</span>
                  )}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon} aria-hidden="true">
            <Icon name="chat" size={32} />
          </div>
          <p className={styles.emptyTitle}>
            Your Feedback Helps Us Elevate Streaming Standards
          </p>
          <p className={styles.emptyText}>
            We actively gather real feedback from active subscribers. Share your experience with {SITE.name} — your review helps improve network performance and channel stability for all viewers.
          </p>
        </div>
      )}

      {/* Genuine contact CTA */}
      <div className={styles.ctaPanel}>
        <div className={styles.ctaLeft}>
          <span className={styles.ctaChip}>
            <Icon name="shield" size={15} />
            Customer Support
          </span>
          <p className={styles.ctaTitle}>
            Questions About Setup or Compatibility?
          </p>
          <p className={styles.ctaText}>
            Chat live via WhatsApp or email — before or after ordering, our US technical support team is standing by 24/7.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link
            href={waLink("Hello! I have a question about Strong 8K USA service setup.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
            aria-label="Contact us on WhatsApp"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Live Chat
          </Link>
          <a
            href={`mailto:${SITE.supportEmail}`}
            className={styles.mailBtn}
            aria-label={`Send email to ${SITE.supportEmail}`}
          >
            <Icon name="mail" size={18} />
            {SITE.supportEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
