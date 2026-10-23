"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";
import type { MediaItem } from "@/lib/tmdb/types";
import { FALLBACK_BACKDROP } from "@/lib/tmdb/images";
import { SITE } from "@/lib/site";
import styles from "./tmdb.module.css";

const ROTATE_MS = 7000;

export default function HomeHero({ items }: { items: MediaItem[] }) {
  const hasItems = items.length > 0;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const hovered = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (!playing || reduced || items.length < 2) return;
    const id = setInterval(() => {
      if (!hovered.current) next();
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [playing, reduced, items.length, next]);

  const current = hasItems ? items[index] : null;
  const backdrop = current?.backdrop ?? FALLBACK_BACKDROP;

  const onKeyDown = (e: KeyboardEvent) => {
    if (!hasItems) return;
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      className={styles.homeHero}
      aria-label={`${SITE.name} — Premier Live Streaming Service`}
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
      onFocusCapture={() => (hovered.current = true)}
      onBlurCapture={() => (hovered.current = false)}
      onKeyDown={onKeyDown}
    >
      <div className={styles.homeBg}>
        <Image
          key={current?.id ?? "fallback"}
          src={backdrop}
          alt={current?.title ? `${current.title} 4K Ultra HD Streaming` : "Strong 8K USA 4K Streaming Experience"}
          fill
          priority
          sizes="100vw"
          className={reduced ? undefined : styles.bgFade}
        />
      </div>
      <div className={styles.homeOverlay} />

      <div className={`${styles.homeInner} container`}>
        <div className={styles.homeContent}>
          <span className={styles.homeEyebrow}>
            <span className={styles.homePing} aria-hidden="true" />
            {SITE.name} · Ultra HD Streaming
          </span>

          <h1 className={styles.homeTitle}>
            America&apos;s Premier 8K &amp; 4K Live Streaming Engine, <span className="accent">Engineered for Zero Buffering</span>
          </h1>

          <p className={styles.homeDesc}>
            Access 50,000+ live US &amp; global channels, live sports passes, and 180,000+ on-demand movies in crystal-clear 4K &amp; 8K on Firestick, Apple TV, Smart TVs, and PCs. Instant 60-second activation with zero contracts.
          </p>

          {current && (
            <div className={styles.featured} aria-live="polite">
              <span className={styles.fLabel}>Now Trending</span>
              <span className={styles.fTitle}>{current.title}</span>
              <span className={styles.fMeta}>
                {current.rating > 0 && (
                  <>
                    <Icon name="star" size={15} /> {current.rating.toFixed(1)}
                  </>
                )}
                {current.year && <>· {current.year}</>}
                {current.genres[0] && <>· {current.genres[0]}</>}
              </span>
            </div>
          )}

          <div className={styles.homeCtas}>
            <Link href="/abonnement/essai-gratuit" className="btn btn-lg btn-primary">
              Free Trial &amp; Guarantee
            </Link>
            <Link href="/abonnement" className={`btn btn-lg ${styles.btnGlass}`}>
              View Plans &amp; Pricing
            </Link>
          </div>

          <div className={styles.homeTrust}>
            <span><Icon name="bolt" size={17} /> Instant 60s Setup</span>
            <span><Icon name="check" size={17} /> Zero Contracts</span>
            <span><Icon name="shield" size={17} /> 30-Day Money-Back</span>
          </div>
        </div>
      </div>

      {hasItems && items.length > 1 && (
        <div className={`${styles.homeControls} container`}>
          <button type="button" className={styles.ctrlBtn} onClick={prev} aria-label="Previous title">
            <Icon name="arrow-left" size={20} />
          </button>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            <Icon name={playing ? "pause" : "play"} size={18} />
          </button>
          <button type="button" className={styles.ctrlBtn} onClick={next} aria-label="Next title">
            <Icon name="arrow-right" size={20} />
          </button>
          <div className={styles.homeDots} role="tablist" aria-label="Select featured title">
            {items.map((it, i) => (
              <button
                key={it.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Featured title ${i + 1}: ${it.title}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
