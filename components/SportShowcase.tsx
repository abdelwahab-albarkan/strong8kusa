"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import Button from "./Button";
import Icon from "./Icon";
import styles from "./SportShowcase.module.css";

type Sport = {
  name: string;
  tag: string;
  href: string;
  image: string;
};

const SPORTS: Sport[] = [
  { name: "NBA Basketball", tag: "Live Games & League Pass", href: "/contenu/sport", image: "/images/NBA_Logo.svg.webp" },
  { name: "Champions League", tag: "European Soccer", href: "/contenu/sport/champions-league", image: "/images/UEFA_Champions_League_logo.png" },
  { name: "Formula 1 Racing", tag: "Full Grand Prix Season", href: "/contenu/sport/formule-1", image: "/images/Formula_1_Logo_1.png" },
  { name: "NFL Football", tag: "Sunday Ticket & Playoffs", href: "/contenu/sport", image: "/images/Logo_Ligue_1_2024.svg.webp" },
  { name: "Tennis Grand Slams", tag: "US Open & Wimbledon", href: "/contenu/sport", image: "/images/Roland-Garros_idhlvZUj6c_0.png" },
  { name: "Premier League", tag: "All Matchweeks Live", href: "/contenu/sport/football", image: "/images/Top_14.svg.webp" },
];

export default function SportShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section variant="soft">
      <div ref={rootRef} className={styles.wrap}>
        <div className={styles.left}>
          <span className="eyebrow eyebrow--chip">Live Sports &amp; PPV</span>
          <h2 className={styles.title}>
            All Major <span className="accent">Live Sports</span> in 4K &amp; 60 FPS
          </h2>
          <p className={`lead ${styles.lead}`}>
            NFL, NBA, UEFA Champions League, Formula 1, Premier League, MLB, and UFC Pay-Per-View: experience marquee sports broadcasts in flawless 4K Ultra HD with zero buffering.
          </p>
          <div className={styles.ctas}>
            <Button href="/contenu/sport" variant="secondary">
              Explore Live Sports Pass
            </Button>
            <Button href="/contenu/chaines" variant="ghost">
              Browse US Channel Guide
            </Button>
          </div>
        </div>

        <ul className={styles.grid}>
          {SPORTS.map((s, i) => (
            <li key={s.name} className={styles.cardWrap} style={{ "--i": i } as CSSProperties}>
              <Link href={s.href} className={styles.card} aria-label={`${s.name} — ${s.tag}, Live Streaming`}>
                <span className={styles.logoWrap} aria-hidden="true">
                  <Image src={s.image} alt={`${s.name} live broadcast logo`} fill sizes="64px" style={{ objectFit: "contain" }} />
                </span>
                <span className={styles.body}>
                  <span className={styles.name}>{s.name}</span>
                  <span className={styles.tag}>{s.tag}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  <Icon name="arrow-right" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
