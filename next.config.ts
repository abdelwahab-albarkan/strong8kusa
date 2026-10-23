import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
    ],
  },
  async rewrites() {
    return [
      { source: "/pricing", destination: "/abonnement" },
      { source: "/pricing/:path*", destination: "/abonnement/:path*" },
      { source: "/devices", destination: "/appareils" },
      { source: "/devices/:path*", destination: "/appareils/:path*" },
      { source: "/apps", destination: "/applications" },
      { source: "/apps/:path*", destination: "/applications/:path*" },
      { source: "/sports", destination: "/contenu/sport" },
      { source: "/sports/:path*", destination: "/contenu/sport/:path*" },
      { source: "/channels", destination: "/contenu/chaines" },
      { source: "/channels/:path*", destination: "/contenu/chaines/:path*" },
      { source: "/comparisons", destination: "/comparatifs" },
      { source: "/comparisons/:path*", destination: "/comparatifs/:path*" },
      { source: "/guides", destination: "/problemes" },
      { source: "/guides/:path*", destination: "/problemes/:path*" },
      { source: "/free-trial", destination: "/abonnement/essai-gratuit" },
      { source: "/terms", destination: "/conditions-utilisation" },
      { source: "/privacy", destination: "/politique-confidentialite" },
      { source: "/refund", destination: "/remboursement" },
      { source: "/ownership-disclosure", destination: "/mentions-legales" },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.strong8kusa.com" }],
        destination: "https://strong8kusa.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
