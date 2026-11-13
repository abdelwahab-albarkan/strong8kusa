import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Public site: crawling allowed everywhere except API routes. Legal pages are
 * deliberately NOT disallowed here: they use `noindex`, which crawlers can only
 * honour if they are allowed to fetch the page.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
