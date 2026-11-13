import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { DEVICE_SLUGS } from "@/lib/devices";
import { APP_SLUGS } from "@/lib/applications";
import { COMPARATIF_SLUGS } from "@/lib/comparatifs";
import { OFFER_SLUGS } from "@/lib/abonnement";
import { PROBLEM_SLUGS } from "@/lib/problemes";
import { SPORT_SLUGS } from "@/lib/sport";
import { CHAINES_SLUGS } from "@/lib/chaines";

const STATIC_ROUTES = [
  "/",
  "/meilleur-iptv",
  "/abonnement",
  "/abonnement/avis",
  "/appareils",
  "/applications",
  "/contenu",
  "/contenu/sport",
  "/contenu/sport/football",
  "/contenu/chaines",
  "/contenu/chaines/francaises",
  "/contenu/chaines/internationales",
  "/contenu/divertissement",
  "/contenu/divertissement/films",
  "/contenu/divertissement/series",
  "/comparatifs",
  "/formats",
  "/formats/m3u",
  "/formats/xtream-codes",
  "/formats/epg",
  "/problemes",
  "/faq",
  "/faq/questions-frequentes",
  "/faq/lexique",
  "/blog",
  "/a-propos",
  "/contact",
];

export const revalidate = 86400; // Cache sitemap for 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified is only emitted when a real date exists (blog posts); a
  // build-time "now" on every URL would be a fake freshness signal.
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    lastModified?: Date
  ) => ({
    url: `${SITE.domain}${path === "/" ? "" : path.replace(/\/+$/, "")}`,
    ...(lastModified && !Number.isNaN(lastModified.getTime()) ? { lastModified } : {}),
    changeFrequency,
    priority,
  });

  const highValue = new Set(["/meilleur-iptv", "/abonnement", "/abonnement/essai-gratuit"]);

  const entries = [
    ...STATIC_ROUTES.map((r) =>
      entry(r, r === "/" ? 1 : highValue.has(r) ? 0.9 : 0.7, r === "/" ? "weekly" : "monthly")
    ),
    ...OFFER_SLUGS.map((s) => entry(`/abonnement/${s}`, highValue.has(`/abonnement/${s}`) ? 0.9 : 0.8, "monthly")),
    ...DEVICE_SLUGS.map((s) => entry(`/appareils/${s}`, 0.7, "monthly")),
    ...APP_SLUGS.map((s) => entry(`/applications/${s}`, 0.7, "monthly")),
    ...PROBLEM_SLUGS.map((s) => entry(`/problemes/${s}`, 0.7, "monthly")),
    ...COMPARATIF_SLUGS.map((s) => entry(`/comparatifs/${s}`, 0.6, "monthly")),
    ...SPORT_SLUGS.map((s) => entry(`/contenu/sport/${s}`, 0.7, "monthly")),
    ...CHAINES_SLUGS.map((s) => entry(`/contenu/chaines/${s}`, 0.7, "monthly")),
    ...getAllPosts().map((p) => entry(`/blog/${p.slug}`, 0.6, "monthly", new Date(p.date))),
  ];

  // De-duplicate by URL (first occurrence wins).
  return [...new Map(entries.map((e) => [e.url, e])).values()];
}
