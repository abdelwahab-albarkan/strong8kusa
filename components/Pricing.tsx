"use client";

import { useState, useLayoutEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONNECTION_TIERS, CONNECTION_LIST, SITE, waLink } from "@/lib/site";
import Icon from "./Icon";
import WhatsAppIcon from "./WhatsAppIcon";
import PaymentBadges from "./PaymentBadges";
import styles from "./Pricing.module.css";

function formatUSD(num: number): string {
  return "$" + num.toFixed(2);
}

const BASE_FEATURES = [
  "50,000+ Live US & Global HD / 4K / 8K Channels",
  "180,000+ Movies & On-Demand Series (VOD)",
  "Full Live Sports Pass (NFL, NBA, MLB, Soccer)",
  "Real 4K/8K Ultra HD & 60 FPS Anti-Freeze Streams",
  "Electronic Program Guide (EPG) Included",
  "100% Zero-Log VPN Compatible (No IP Lock)",
  "Instant Setup Codes Delivered in Under 60 Seconds",
];

const COMPATIBLE_DEVICES = [
  { name: "Firestick 4K", img: "/images/firestick.png" },
  { name: "Apple TV 4K", img: "/images/device-apple-tv.png" },
  { name: "Nvidia Shield", img: "/images/nvidiashield.png" },
  { name: "Samsung Smart TV", img: "/images/samsungsmarttv.png" },
  { name: "LG webOS", img: "/images/LG TV (webOS).png" },
  { name: "Android TV", img: "/images/Android TV.png" },
];

export default function Pricing({
  initialConnections = 1,
  note,
  showConnectionTabs = true,
}: {
  initialConnections?: number;
  note?: string;
  showConnectionTabs?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedConnections, setSelectedConnections] = useState<number>(initialConnections);

  const currentTier = CONNECTION_TIERS[selectedConnections] ?? CONNECTION_TIERS[1];
  const plans = currentTier.plans;

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add(styles.reveal);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add(styles.shown);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.wrapper} ref={rootRef}>
      {/* Visual Showcase Voucher Card */}
      <div className={styles.showcaseCard}>
        <div className={styles.showcaseVisual}>
          <div className={styles.voucherImgWrap}>
            <Image
              src="/images/SMARTERS-PRO-1-YEAR-SUBSCRIPTION_1.jpg"
              alt="Strong 8K USA 1-Year Ultra HD Subscription Voucher"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              style={{ objectFit: "cover" }}
              className={styles.voucherImg}
            />
            <span className={styles.voucherBadge}>Verified 8K / 4K UHD</span>
          </div>
        </div>
        <div className={styles.showcaseContent}>
          <span className={styles.showcaseEyebrow}>
            <span className={styles.pulseDot} />
            Exclusive USA Subscription Tier
          </span>
          <h3 className={styles.showcaseTitle}>
            Premium 8K &amp; 4K Streaming Pass for All Your Devices
          </h3>
          <p className={styles.showcaseDesc}>
            Equipped with proprietary anti-freeze CDN technology, live NFL &amp; NBA sports feeds, and an expansive on-demand library. Zero contracts, instant automated delivery in &lt;60s, and a full 30-day money-back guarantee.
          </p>
          <div className={styles.deviceRow}>
            <span className={styles.deviceRowLabel}>Supported Hardware:</span>
            <div className={styles.deviceList}>
              {COMPATIBLE_DEVICES.map((d) => (
                <div key={d.name} className={styles.deviceBadge} title={d.name}>
                  <div className={styles.deviceThumb}>
                    <Image src={d.img} alt={d.name} fill sizes="28px" style={{ objectFit: "contain" }} />
                  </div>
                  <span>{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connection Selector Tabs */}
      {showConnectionTabs && (
        <div className={styles.tabContainer}>
          <div className={styles.tabHeader}>
            <span className={styles.tabLabel}>Select Number of Simultaneous Screens:</span>
          </div>
          <div className={styles.tabList} role="tablist" aria-label="Simultaneous Connections">
            {CONNECTION_LIST.map((tier) => {
              const active = tier.connections === selectedConnections;
              return (
                <button
                  key={tier.connections}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`${styles.tabBtn} ${active ? styles.tabBtnActive : ""} ${tier.popular ? styles.tabBtnPopular : ""}`}
                  onClick={() => setSelectedConnections(tier.connections)}
                >
                  <span className={styles.tabBtnMain}>
                    <span className={styles.tabBtnTitle}>{tier.label}</span>
                    <span className={styles.tabBtnSub}>{tier.shortLabel}</span>
                  </span>
                  {tier.popular && <span className={styles.tabBadge}>Recommended</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Connection Summary Banner */}
      <div className={styles.tierSummary}>
        <div className={styles.tierSummaryLeft}>
          <span className={styles.tierSummaryCount}>{currentTier.connections}</span>
          <div>
            <h3 className={styles.tierSummaryTitle}>{currentTier.label} — {currentTier.tagline}</h3>
            <p className={styles.tierSummaryDesc}>Best For: {currentTier.idealFor}</p>
          </div>
        </div>
        <Link href={`/abonnement/${currentTier.slug}`} className={styles.tierGuideLink}>
          <span>View {currentTier.label} Specifications</span>
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>

      {/* Pricing Cards Grid */}
      <div className={styles.grid}>
        {plans.map((plan, i) => {
          const isPopular = plan.popular;
          const orderMsg = `Hello! I would like to order the ${SITE.name} ${plan.name} plan (${currentTier.label}) for ${formatUSD(plan.price)}. Please send instant activation credentials.`;
          const orderHref = waLink(orderMsg);

          return (
            <div key={plan.id} className={styles.cardWrap} style={{ "--i": i } as CSSProperties}>
              <div className={`${styles.card} ${isPopular ? styles.popularCard : ""}`}>
                {isPopular && (
                  <div className={styles.ribbon}>
                    <Icon name="star" size={13} className={styles.ribbonIcon} />
                    <span>Best Value · Most Popular</span>
                  </div>
                )}

                <div className={styles.header}>
                  <div className={styles.titleRow}>
                    <div>
                      <h4 className={styles.name}>{plan.name}</h4>
                      <p className={styles.subtitle}>{currentTier.label} ({currentTier.shortLabel})</p>
                    </div>
                    {plan.discount && (
                      <span className={`${styles.discountBadge} ${isPopular ? styles.discountBadgePopular : ""}`}>
                        {plan.discount}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.pricingBlock}>
                  <div className={styles.monthlyRate}>
                    <span className={styles.priceNum}>{formatUSD(plan.perMonth)}</span>
                    <span className={styles.priceUnit}>/ month</span>
                  </div>
                  <div className={styles.totalBilled}>
                    <span>Total: <strong>{formatUSD(plan.price)}</strong> for {plan.months} mo{plan.months > 1 ? "s" : ""}</span>
                    <span className={styles.badgeBilling}>One-time payment</span>
                  </div>
                </div>

                <div className={styles.cardDivider} />

                {/* Connection Slots Breakdown */}
                <div className={styles.slotBreakdown}>
                  <p className={styles.slotBreakdownTitle}>Devices Included in this Plan:</p>
                  <ul className={styles.slotList}>
                    {currentTier.slots.map((slot, idx) => (
                      <li key={idx} className={styles.slotItem}>
                        <span className={styles.slotCheck} aria-hidden="true">
                          <Icon name="check" size={13} />
                        </span>
                        <span>{slot}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardDivider} />

                {/* Included Features */}
                <div className={styles.featureSection}>
                  <p className={styles.featureTitle}>What is Included:</p>
                  <ul className={styles.featureList}>
                    {BASE_FEATURES.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <span className={`${styles.checkIcon} ${isPopular ? styles.checkIconPopular : ""}`} aria-hidden="true">
                          <Icon name="check" size={13} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {currentTier.connections === 5 && (
                      <li className={styles.featureItem}>
                        <span className={`${styles.checkIcon} ${isPopular ? styles.checkIconPopular : ""}`} aria-hidden="true">
                          <Icon name="check" size={13} />
                        </span>
                        <strong>VIP Priority WhatsApp &amp; Phone Routing</strong>
                      </li>
                    )}
                  </ul>
                </div>

                <div className={styles.action}>
                  <a
                    href={orderHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaBtn} ${isPopular ? styles.ctaBtnPopular : styles.ctaBtnStandard}`}
                    aria-label={`Select ${plan.name} (${currentTier.label}) and activate on WhatsApp`}
                  >
                    <WhatsAppIcon size={18} style={{ marginRight: 6 }} />
                    <span>Get {plan.name} Plan</span>
                    <Icon name="arrow-right" size={18} className={styles.ctaArrow} />
                  </a>
                  <p className={styles.guaranteeMicro}>
                    <Icon name="shield" size={13} />
                    <span>30-Day Money-Back Guarantee · No Contracts</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className={styles.trustBanner}>
        <div className={styles.trustItem}>
          <div className={styles.trustIconWrap}><Icon name="shield" size={20} /></div>
          <div>
            <h4 className={styles.trustTitle}>30-Day Money-Back Guarantee</h4>
            <p className={styles.trustDesc}>Not 100% satisfied? Receive a full prompt refund within 30 days, no hassle.</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIconWrap}><Icon name="bolt" size={20} /></div>
          <div>
            <h4 className={styles.trustTitle}>Instant 60-Second Setup</h4>
            <p className={styles.trustDesc}>M3U playlist and Xtream Codes delivered automatically via email &amp; WhatsApp.</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIconWrap}><Icon name="lock" size={20} /></div>
          <div>
            <h4 className={styles.trustTitle}>Zero Hidden Fees &amp; No Contracts</h4>
            <p className={styles.trustDesc}>Transparent one-time payment. No automatic surprises or recurring lock-ins.</p>
          </div>
        </div>
      </div>

      {/* WhatsApp order / question CTA */}
      <div className={styles.waRow}>
        <a
          href={waLink("Hello! I have a question about Strong 8K USA streaming plans and device setup.")}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
        >
          <WhatsAppIcon size={20} />
          <span>Need Help Choosing? Chat Live on WhatsApp with Support (+212 625-218443)</span>
        </a>
      </div>

      {/* Payment methods with real brand logos */}
      <div className={styles.paymentRow}>
        <span className={styles.paymentLabel}>256-Bit SSL Encrypted Checkout:</span>
        <PaymentBadges />
      </div>

      {note && <p className={styles.customNote}>{note}</p>}
    </div>
  );
}
