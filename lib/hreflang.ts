import { SITE } from "./site";

/**
 * Hreflang utilities for SEO alternates.
 * Strong 8K USA serves English content targeting the United States market.
 */

export function getHreflangAlternates(path: string): Record<string, string> {
  const cleanPath = path === "/" ? "" : (path.startsWith("/") ? path : `/${path}`).replace(/\/+$/, "");
  const fullUrl = `${SITE.domain}${cleanPath}`;

  return {
    "en-US": fullUrl,
    "en": fullUrl,
    "x-default": fullUrl,
  };
}

