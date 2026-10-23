import Link from "next/link";
import Icon from "./Icon";
import styles from "./SubscriptionComparison.module.css";
import { CONNECTION_LIST } from "@/lib/site";

function formatUSD(num: number): string {
  return "$" + num.toFixed(2);
}

export default function SubscriptionComparison() {
  return (
    <div className={styles.wrapper}>
      {/* Desktop Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thFeature}>Features &amp; Capabilities</th>
              {CONNECTION_LIST.map((tier) => (
                <th
                  key={tier.connections}
                  className={`${styles.thTier} ${tier.popular ? styles.thPopular : ""}`}
                >
                  {tier.popular && <span className={styles.headerBadge}>Most Popular</span>}
                  <div className={styles.tierName}>{tier.label}</div>
                  <div className={styles.tierTagline}>{tier.tagline}</div>
                  <div className={styles.tierPrice}>
                    from <strong>{formatUSD(tier.plans[tier.plans.length - 1].perMonth)}</strong>
                    <span className={styles.perMonth}>/mo</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tdLabel}>Simultaneous Live Screens</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <strong className={styles.highlightVal}>{tier.connections} Screen{tier.connections > 1 ? "s" : ""}</strong>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Video Quality (8K / 4K UHD &amp; 60 FPS)</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Included</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>50,000+ Live US &amp; Global Channels</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Included</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>180,000+ On-Demand Movies &amp; Series (VOD)</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Included</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Live Sports Passes (NFL, NBA, MLB, Soccer)</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Included</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Electronic Program Guide (EPG) &amp; Catch-Up</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Included</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>100% Zero-Log VPN Compatibility</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Included</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Instant Automated Setup Delivery</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> &lt;60 Seconds</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>24/7 Technical Support Level</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  {tier.connections === 5 ? (
                    <strong style={{ color: "var(--accent)" }}>VIP Priority 24/7</strong>
                  ) : (
                    <span>Standard 24/7</span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>30-Day Money-Back Guarantee</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="shield" size={16} /> 100% Covered</span>
                </td>
              ))}
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className={styles.tdFootLabel}>Choose Plan:</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdFootVal} ${tier.popular ? styles.tdFootPopular : ""}`}>
                  <Link href={`/abonnement/${tier.slug}`} className={styles.footBtn}>
                    <span>Select {tier.label}</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
