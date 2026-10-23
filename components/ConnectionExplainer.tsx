import Link from "next/link";
import Icon from "./Icon";
import styles from "./ConnectionExplainer.module.css";
import { CONNECTION_LIST } from "@/lib/site";

export default function ConnectionExplainer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.introBox}>
        <div className={styles.introIcon}>
          <Icon name="screens" size={28} />
        </div>
        <div>
          <h3 className={styles.introTitle}>What is a Simultaneous Screen Connection?</h3>
          <p className={styles.introText}>
            A <strong>connection</strong> represents an active video stream playing at the same time. You can install your Strong 8K USA credentials on as many devices as you like (e.g. Firestick, living room TV, bedroom TV, tablet, and smartphone), but the number of screens streaming content simultaneously is determined by your chosen connection tier.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {CONNECTION_LIST.map((tier) => (
          <div key={tier.connections} className={`${styles.card} ${tier.popular ? styles.cardPopular : ""}`}>
            {tier.popular && <span className={styles.popularBadge}>Most Popular for Families</span>}
            <div className={styles.cardHeader}>
              <span className={styles.screenCount}>{tier.connections}</span>
              <div>
                <h4 className={styles.tierTitle}>{tier.label}</h4>
                <p className={styles.tierTagline}>{tier.tagline}</p>
              </div>
            </div>

            <div className={styles.idealBox}>
              <span className={styles.idealLabel}>Best For:</span>
              <p className={styles.idealText}>{tier.idealFor}</p>
            </div>

            <div className={styles.slotList}>
              <span className={styles.slotListTitle}>Active Streaming Example:</span>
              <ul>
                {tier.slots.map((slot, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <Icon name="check" size={14} />
                    </span>
                    <span>{slot}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/abonnement/${tier.slug}`} className={styles.cardLink}>
              <span>View {tier.label} Specifications</span>
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
