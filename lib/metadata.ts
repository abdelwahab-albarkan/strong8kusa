import { SITE } from "./site";

/**
 * Metadata formatting and helper utilities.
 */

export function getFullTitle(pageTitle?: string): string {
  if (!pageTitle) return `${SITE.name} — Premium 8K & 4K Streaming in the USA`;
  return `${pageTitle} | ${SITE.name}`;
}

export function formatMetaDescription(desc: string, maxLen = 160): string {
  if (desc.length <= maxLen) return desc;
  return desc.slice(0, maxLen - 1).trim() + "…";
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path === "/" ? "" : (path.startsWith("/") ? path : `/${path}`).replace(/\/+$/, "");
  return `${SITE.domain}${cleanPath}`;
}
