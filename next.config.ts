import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
    ],
  },
  // Explicitly enforce clean URLs without trailing slashes
  trailingSlash: false,
  // 301 Permanent Redirects for SEO normalization & historical route migration
  async redirects() {
    return [
      // 1. Force canonical non-www domain (single 301 hop)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.strong8kusa.com" }],
        destination: "https://strong8kusa.com/:path*",
        permanent: true,
      },

      // 2. Exact legacy indexed static routes (Google Search Console historical 404 fixes)
      { source: "/devices/android-tv-box", destination: "/appareils/android-tv", permanent: true },
      { source: "/devices/android-tv-box/:path*", destination: "/appareils/android-tv", permanent: true },
      { source: "/apps/iptv-smarters", destination: "/applications/smarters", permanent: true },
      { source: "/apps/iptv-smarters/:path*", destination: "/applications/smarters", permanent: true },
      { source: "/comparisons/cable-vs-iptv", destination: "/comparatifs/vs-canal-plus", permanent: true },
      { source: "/comparisons/cable-vs-iptv/:path*", destination: "/comparatifs/vs-canal-plus", permanent: true },
      { source: "/guides/fix-iptv-buffering", destination: "/problemes/buffering-coupure", permanent: true },
      { source: "/guides/fix-iptv-buffering/:path*", destination: "/problemes/buffering-coupure", permanent: true },
      { source: "/guides/is-iptv-legal-usa", destination: "/blog/iptv-legal-en-france", permanent: true },
      { source: "/guides/is-iptv-legal-usa/:path*", destination: "/blog/iptv-legal-en-france", permanent: true },
      { source: "/guides/m3u-xtream-codes", destination: "/formats/xtream-codes", permanent: true },
      { source: "/guides/m3u-xtream-codes/:path*", destination: "/formats/xtream-codes", permanent: true },
      { source: "/order", destination: "/abonnement", permanent: true },
      { source: "/order/:path*", destination: "/abonnement", permanent: true },
      { source: "/free-trial", destination: "/abonnement/essai-gratuit", permanent: true },
      { source: "/free-trial/:path*", destination: "/abonnement/essai-gratuit", permanent: true },
      { source: "/trial", destination: "/abonnement/essai-gratuit", permanent: true },

      // 3. Exact common competitor comparison aliases
      { source: "/comparisons/youtube-tv", destination: "/comparatifs/vs-freebox-tv", permanent: true },
      { source: "/comparisons/spectrum", destination: "/comparatifs/vs-sfr-tv", permanent: true },
      { source: "/comparisons/xfinity", destination: "/comparatifs/vs-orange-tv", permanent: true },
      { source: "/comparisons/fubo", destination: "/comparatifs/vs-bbox", permanent: true },
      { source: "/comparisons/sling", destination: "/comparatifs/vs-molotov", permanent: true },
      { source: "/comparisons/netflix", destination: "/comparatifs/vs-netflix", permanent: true },
      { source: "/comparisons/satellite", destination: "/comparatifs/vs-satellite", permanent: true },
      { source: "/comparisons/superbox", destination: "/comparatifs/vs-disney-plus", permanent: true },

      // 4. Exact troubleshooting & format aliases
      { source: "/guides/buffering", destination: "/problemes/buffering-coupure", permanent: true },
      { source: "/guides/black-screen", destination: "/problemes/ecran-noir", permanent: true },
      { source: "/guides/speed", destination: "/problemes/vitesse-internet", permanent: true },
      { source: "/guides/internet-speed", destination: "/problemes/vitesse-internet", permanent: true },
      { source: "/guides/epg", destination: "/problemes/epg-ne-safiche-pas", permanent: true },

      // 5. Legal, Policy & Trust aliases
      { source: "/terms", destination: "/conditions-utilisation", permanent: true },
      { source: "/terms/:path*", destination: "/conditions-utilisation", permanent: true },
      { source: "/terms-of-service", destination: "/conditions-utilisation", permanent: true },
      { source: "/privacy", destination: "/politique-confidentialite", permanent: true },
      { source: "/privacy/:path*", destination: "/politique-confidentialite", permanent: true },
      { source: "/privacy-policy", destination: "/politique-confidentialite", permanent: true },
      { source: "/refund", destination: "/remboursement", permanent: true },
      { source: "/refund/:path*", destination: "/remboursement", permanent: true },
      { source: "/refund-policy", destination: "/remboursement", permanent: true },
      { source: "/ownership-disclosure", destination: "/mentions-legales", permanent: true },
      { source: "/ownership-disclosure/:path*", destination: "/mentions-legales", permanent: true },
      { source: "/legal", destination: "/mentions-legales", permanent: true },
      { source: "/legal-notice", destination: "/mentions-legales", permanent: true },

      // 6. Navigation, Commercial & Conversion Aliases
      { source: "/buy", destination: "/abonnement", permanent: true },
      { source: "/plans", destination: "/abonnement", permanent: true },
      { source: "/subscribe", destination: "/abonnement", permanent: true },
      { source: "/pricing", destination: "/abonnement", permanent: true },
      { source: "/pricing/:path*", destination: "/abonnement/:path*", permanent: true },
      { source: "/about", destination: "/a-propos", permanent: true },
      { source: "/about-us", destination: "/a-propos", permanent: true },

      // 7. General Category Wildcards (Must follow specific exact mappings)
      { source: "/devices", destination: "/appareils", permanent: true },
      { source: "/devices/:path*", destination: "/appareils/:path*", permanent: true },
      { source: "/apps", destination: "/applications", permanent: true },
      { source: "/apps/:path*", destination: "/applications/:path*", permanent: true },
      { source: "/sports", destination: "/contenu/sport", permanent: true },
      { source: "/sports/:path*", destination: "/contenu/sport/:path*", permanent: true },
      { source: "/channels", destination: "/contenu/chaines", permanent: true },
      { source: "/channels/:path*", destination: "/contenu/chaines/:path*", permanent: true },
      { source: "/comparisons", destination: "/comparatifs", permanent: true },
      { source: "/comparisons/:path*", destination: "/comparatifs/:path*", permanent: true },
      { source: "/guides", destination: "/problemes", permanent: true },
      { source: "/guides/:path*", destination: "/problemes/:path*", permanent: true },
      { source: "/troubleshooting", destination: "/problemes", permanent: true },
      { source: "/troubleshooting/:path*", destination: "/problemes/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
