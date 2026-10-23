import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Pre-launch robots configuration: prevents crawler indexing until client
 * authorizes public production launch on strong8kusa.com.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain,
  };
}
