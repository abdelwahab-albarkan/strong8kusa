/**
 * Strong 8K USA — Central site configuration (United States market).
 * Single source of truth for brand, navigation, pricing, and shared content.
 * Every navigation target maps to a real canonical route — zero dead links.
 */

export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "twitter"
  | "telegram"
  | "whatsapp";

export type SocialLinksConfig = Record<SocialPlatform, string>;

export const SITE = {
  name: "Strong 8K USA",
  legalName: "Strong 8K USA Media Network",
  domain: "https://strong8kusa.com",
  locale: "en-US",
  supportEmail: "support@streamb4.com",
  salesEmail: "support@streamb4.com",
  whatsappNumber: "212625218443",
  tagline: "Ultra HD 8K & 4K Streaming Engineered for the United States",
  description:
    "Strong 8K USA delivers over 50,000 live channels, 180,000 on-demand movies & series, anti-freeze CDN routing, and premium sports coverage across all your streaming devices.",
  socialLinks: {
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    twitter: "",
    telegram: "",
    whatsapp: "https://wa.me/212625218443",
  },
} as const;

/** Build a wa.me link, optionally with a pre-filled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/** Primary navigation with grouped dropdowns for US desktop & mobile. */
export const NAV: NavItem[] = [
  {
    label: "Pricing & Plans",
    href: "/abonnement",
    children: [
      { label: "All Subscription Plans", href: "/abonnement" },
      { label: "1 Screen (Solo)", href: "/abonnement/1-connexion" },
      { label: "2 Screens (Duo)", href: "/abonnement/2-connexions" },
      { label: "3 Screens (Family)", href: "/abonnement/3-connexions" },
      { label: "5 Screens (Multi-Room)", href: "/abonnement/5-connexions" },
      { label: "12-Month Best Value", href: "/abonnement/annuel" },
      { label: "Ultra HD 8K & 4K Tier", href: "/abonnement/4k" },
      { label: "Free Trial & Guarantee", href: "/abonnement/essai-gratuit" },
    ],
  },
  {
    label: "Devices",
    href: "/appareils",
    children: [
      { label: "Amazon Firestick 4K", href: "/appareils/firestick" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Android TV & Google TV", href: "/appareils/android-tv" },
      { label: "Nvidia Shield Pro", href: "/appareils/nvidia-shield" },
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV (webOS)", href: "/appareils/lg" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Windows PC", href: "/appareils/windows" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "All Supported Devices", href: "/appareils" },
    ],
  },
  {
    label: "Apps & Players",
    href: "/applications",
    children: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate" },
      { label: "IPTV Smarters Pro", href: "/applications/smarters" },
      { label: "VLC Media Player", href: "/applications/vlc" },
      { label: "Kodi Media Center", href: "/applications/kodi" },
      { label: "XCIPTV Player", href: "/applications/xciptv" },
      { label: "OTT Navigator", href: "/applications/ott-navigator" },
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv" },
    ],
  },
  {
    label: "Live Sports",
    href: "/contenu/sport",
    children: [
      { label: "NFL Sunday Ticket & College", href: "/contenu/sport" },
      { label: "NBA League Pass", href: "/contenu/sport" },
      { label: "UEFA Champions League", href: "/contenu/sport/champions-league" },
      { label: "Formula 1 Racing", href: "/contenu/sport/formule-1" },
      { label: "Soccer / Premier League", href: "/contenu/sport/football" },
      { label: "All Live Sports", href: "/contenu/sport" },
    ],
  },
  {
    label: "Channels & VOD",
    href: "/contenu/chaines",
    children: [
      { label: "US National & Local Networks", href: "/contenu/chaines" },
      { label: "Sports & News Packages", href: "/contenu/sport" },
      { label: "Movies & On-Demand Series", href: "/contenu/divertissement" },
      { label: "International Channels", href: "/contenu/chaines/internationales" },
      { label: "Complete Channel Guide", href: "/contenu/chaines" },
    ],
  },
  { label: "Buyer's Guide", href: "/meilleur-iptv" },
  { label: "Troubleshooting", href: "/problemes" },
];

export const PRIMARY_CTA = { label: "View Plans & Pricing", href: "/abonnement" };
export const SECONDARY_CTA = { label: "Contact 24/7 Support", href: "/contact" };
/** Right-hand header button. */
export const NAV_CTA = { label: "Free Trial", href: "/abonnement/essai-gratuit" };

/** Key statistics for Strong 8K USA. */
export const STATS: { value: string; label: string }[] = [
  { value: "50,000+", label: "Live US & Global Channels" },
  { value: "180,000+", label: "VOD Movies & TV Episodes" },
  { value: "8K / 4K", label: "Ultra HD 60 FPS Streams" },
  { value: "99.9%", label: "Server Uptime SLA" },
];

export type PricingPlan = {
  id: string;
  name: string;
  months: number;
  price: number;
  perMonth: number;
  discount: string;
  popular: boolean;
};

export type ConnectionTier = {
  connections: number;
  label: string;
  shortLabel: string;
  tagline: string;
  idealFor: string;
  slug: string;
  popular?: boolean;
  slots: string[];
  plans: PricingPlan[];
};

/** Base 1-Connection Pricing Plans (USD) */
export const PRICING_PLANS: PricingPlan[] = [
  { id: "1-month", name: "1 Month", months: 1, price: 14.99, perMonth: 14.99, discount: "Standard", popular: false },
  { id: "3-months", name: "3 Months", months: 3, price: 34.99, perMonth: 11.66, discount: "-20%", popular: false },
  { id: "6-months", name: "6 Months", months: 6, price: 49.99, perMonth: 8.33, discount: "-45%", popular: false },
  { id: "12-months", name: "12 Months", months: 12, price: 79.99, perMonth: 6.66, discount: "-55%", popular: true },
];

/** Structured multi-connection pricing model (1, 2, 3, 5 screens) in USD */
export const CONNECTION_TIERS: Record<number, ConnectionTier> = {
  1: {
    connections: 1,
    label: "1 Screen",
    shortLabel: "1 Device",
    tagline: "Solo · 1 Active Stream",
    idealFor: "Individual viewers, Firestick TV, or smartphone",
    slug: "1-connexion",
    slots: ["Primary Device (Smart TV, Firestick, or Mobile)"],
    plans: [
      { id: "1c-1m", name: "1 Month", months: 1, price: 14.99, perMonth: 14.99, discount: "Standard", popular: false },
      { id: "1c-3m", name: "3 Months", months: 3, price: 34.99, perMonth: 11.66, discount: "-20%", popular: false },
      { id: "1c-6m", name: "6 Months", months: 6, price: 49.99, perMonth: 8.33, discount: "-45%", popular: false },
      { id: "1c-12m", name: "12 Months", months: 12, price: 79.99, perMonth: 6.66, discount: "-55%", popular: true },
    ],
  },
  2: {
    connections: 2,
    label: "2 Screens",
    shortLabel: "2 Devices",
    tagline: "Duo · 2 Simultaneous Streams",
    idealFor: "Couples, Living Room + Bedroom or Home + Travel",
    slug: "2-connexions",
    popular: true,
    slots: ["Screen 1: Main Living Room TV", "Screen 2: Bedroom TV or Mobile on the go"],
    plans: [
      { id: "2c-1m", name: "1 Month", months: 1, price: 24.99, perMonth: 24.99, discount: "Standard", popular: false },
      { id: "2c-3m", name: "3 Months", months: 3, price: 54.99, perMonth: 18.33, discount: "-25%", popular: false },
      { id: "2c-6m", name: "6 Months", months: 6, price: 79.99, perMonth: 13.33, discount: "-45%", popular: false },
      { id: "2c-12m", name: "12 Months", months: 12, price: 119.99, perMonth: 9.99, discount: "-60%", popular: true },
    ],
  },
  3: {
    connections: 3,
    label: "3 Screens",
    shortLabel: "3 Devices",
    tagline: "Family · 3 Simultaneous Streams",
    idealFor: "Households with kids, multiple TVs, and tablets",
    slug: "3-connexions",
    slots: ["Screen 1: Living Room 4K TV", "Screen 2: Master Bedroom TV", "Screen 3: Kids' Room or iPad"],
    plans: [
      { id: "3c-1m", name: "1 Month", months: 1, price: 32.99, perMonth: 32.99, discount: "Standard", popular: false },
      { id: "3c-3m", name: "3 Months", months: 3, price: 69.99, perMonth: 23.33, discount: "-30%", popular: false },
      { id: "3c-6m", name: "6 Months", months: 6, price: 99.99, perMonth: 16.66, discount: "-50%", popular: false },
      { id: "3c-12m", name: "12 Months", months: 12, price: 149.99, perMonth: 12.49, discount: "-62%", popular: true },
    ],
  },
  5: {
    connections: 5,
    label: "5 Screens",
    shortLabel: "5 Devices",
    tagline: "Multi-Room · 5 Simultaneous Streams",
    idealFor: "Large households, home theaters, vacation homes, and power users",
    slug: "5-connexions",
    slots: [
      "Screen 1: Living Room OLED TV",
      "Screen 2: Home Theater / Media PC",
      "Screen 3: Master Bedroom",
      "Screen 4: Guest Bedroom or Office",
      "Screen 5: Mobile / Tablet anywhere",
    ],
    plans: [
      { id: "5c-1m", name: "1 Month", months: 1, price: 44.99, perMonth: 44.99, discount: "Standard", popular: false },
      { id: "5c-3m", name: "3 Months", months: 3, price: 99.99, perMonth: 33.33, discount: "-25%", popular: false },
      { id: "5c-6m", name: "6 Months", months: 6, price: 149.99, perMonth: 24.99, discount: "-45%", popular: false },
      { id: "5c-12m", name: "12 Months", months: 12, price: 199.99, perMonth: 16.66, discount: "-65%", popular: true },
    ],
  },
};

export const CONNECTION_LIST = Object.values(CONNECTION_TIERS);

export const PLAN_FEATURES: string[] = [
  "50,000+ Live US & Global HD / 4K / 8K Channels",
  "180,000+ On-Demand Movies & Complete TV Series",
  "Full Live Sports Coverage (NFL, NBA, MLB, NHL, Soccer)",
  "Real 4K/8K Ultra HD & 60 FPS Anti-Freeze Streams",
  "99.9% Server Uptime with Redundant Global CDN Nodes",
  "Electronic Program Guide (EPG) Included",
  "7-Day Catch-Up & Live Pause / Rewind",
  "100% Compatible with All Zero-Log VPNs",
  "No IP Lock — Stream at Home or While Traveling",
  "Automated Credentials Delivery in Under 60 Seconds",
  "24/7 Dedicated Support via WhatsApp & Email",
  "No Contracts, No Hidden Fees, Cancel Anytime",
  "30-Day Money-Back Satisfaction Guarantee",
];

export const PAYMENT_METHODS = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay", "Crypto"];

export const PAYMENTS: { name: string; file: string }[] = [
  { name: "Visa", file: "visa.webp" },
  { name: "Mastercard", file: "mastercard.webp" },
  { name: "PayPal", file: "paypal.png" },
  { name: "Apple Pay", file: "apple-pay.webp" },
  { name: "Google Pay", file: "google-pay.png" },
  { name: "Crypto", file: "bitcoin.jpg" },
];

export const FEATURES: { title: string; description: string }[] = [
  {
    title: "True 8K & 4K Ultra HD (H.265 / HEVC)",
    description:
      "Crystal-clear live broadcasts and video-on-demand with HDR10+ color grading. Advanced HEVC compression delivers unmatched picture fidelity while utilizing minimal internet bandwidth.",
  },
  {
    title: "Anti-Freeze CDN Infrastructure",
    description:
      "Our proprietary load-balanced server network with smart geographic routing eliminates buffering and latency. Enjoy high-stakes live sports without frame drops or interruptions.",
  },
  {
    title: "50,000+ Live Channels",
    description:
      "All major US national and regional networks (ABC, CBS, NBC, FOX, ESPN) alongside premium sports packages, live news, and extensive international bouquets.",
  },
  {
    title: "180,000+ Movies & TV Series",
    description:
      "Continuously updated on-demand catalog featuring current box-office releases, complete classic series, and multi-language audio and subtitle tracks.",
  },
  {
    title: "No ISP Throttling or IP Locks",
    description:
      "Your credentials are never tied to a single physical location. Stream freely on home Wi-Fi, Ethernet, 5G mobile data, or while traveling abroad without re-activation.",
  },
  {
    title: "Universal Device Compatibility",
    description:
      "Seamless plug-and-play support for Amazon Firestick, Apple TV 4K, Google TV, Android TV, Nvidia Shield, Samsung Smart TV, LG webOS, PC, Mac, iOS, and Android.",
  },
];

export const STEPS: { title: string; description: string }[] = [
  {
    title: "1. Select Your Plan",
    description: "Choose your desired connection count and subscription duration. All plans include our 30-day money-back guarantee.",
  },
  {
    title: "2. Receive Instant Setup Codes",
    description: "Your M3U playlist link and Xtream Codes API credentials are automatically generated and delivered to your inbox in under 60 seconds.",
  },
  {
    title: "3. Connect & Start Streaming",
    description: "Input your credentials into TiviMate, IPTV Smarters Pro, or your favorite player and enjoy uninterrupted 4K streaming immediately.",
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is Strong 8K USA?",
    a: "Strong 8K USA is a premium high-speed streaming service providing over 50,000 live channels and 180,000 on-demand movies and TV shows in 8K, 4K, and FHD across all modern devices without costly cable hardware.",
  },
  {
    q: "What devices are compatible with Strong 8K USA?",
    a: "Our service works seamlessly across Amazon Firestick / Fire TV Cube, Apple TV 4K, Nvidia Shield Pro, Android TV, Google TV, Samsung Smart TVs (Tizen), LG Smart TVs (webOS), Windows PC, Mac, iPhone, iPad, and Android mobile devices.",
  },
  {
    q: "How fast is account activation?",
    a: "Account activation is fully automated. Immediately after completing your order, your personalized M3U playlist URL and Xtream Codes API credentials arrive via email and WhatsApp within 60 seconds.",
  },
  {
    q: "Are there any long-term contracts or hidden cancellation fees?",
    a: "No. All Strong 8K USA plans are strictly pay-as-you-go with zero contracts, zero recurring hidden charges, and no automated sneaky renewals. Every plan is backed by our full 30-day money-back guarantee.",
  },
  {
    q: "Is Strong 8K USA compatible with VPNs?",
    a: "Yes, 100%. Strong 8K USA is fully compatible with all major secure VPN services (including ExpressVPN, NordVPN, and Surfshark). In fact, using a VPN can help prevent ISP bandwidth throttling during peak live sports.",
  },
  {
    q: "What internet speed do I need for smooth 4K streaming?",
    a: "We recommend a minimum download speed of 15 Mbps for Full HD streams and at least 30 Mbps for dedicated 4K/8K Ultra HD streams. For maximum stability on your main TV, a wired Ethernet connection is recommended.",
  },
  {
    q: "Can I watch live US sports like NFL, NBA, MLB, and Soccer?",
    a: "Yes. Strong 8K USA carries comprehensive live sports feeds including NFL Sunday broadcasts, NBA games, MLB baseball, NHL hockey, UEFA Champions League, Premier League soccer, Formula 1 racing, UFC pay-per-view events, and college athletics.",
  },
  {
    q: "What is the difference between an M3U link and Xtream Codes?",
    a: "Both allow you to load your channel playlist into any media player. Xtream Codes uses a server URL, username, and password (ideal for TiviMate and Smarters Pro), while an M3U link is a single web URL containing the stream playlist.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and major cryptocurrencies (Bitcoin, USDT, Ethereum) via 256-bit SSL encrypted checkout.",
  },
  {
    q: "Can I stream on multiple screens simultaneously?",
    a: "Yes! While our base Solo plan includes 1 active screen, we provide Multi-Screen options for 2, 3, and 5 simultaneous connections so your entire household can watch their favorite content simultaneously on different TVs and devices.",
  },
  {
    q: "How do I fix buffering or freezing if it happens?",
    a: "Buffering is almost always caused by local Wi-Fi interference or ISP video throttling. Switching to a wired Ethernet cable, rebooting your router, changing your media player's buffer size to 'Large' in TiviMate, or enabling a VPN resolves 99% of buffering issues immediately.",
  },
  {
    q: "How do I contact customer support if I need assistance?",
    a: "Our expert technical support team is available 24/7, 365 days a year via live WhatsApp chat and email at support@strong8kusa.com. We typically respond within 5 to 15 minutes.",
  },
];

/** Cluster hubs used for footer, cross-links, and the homepage navigation grid. */
export const CLUSTERS: { label: string; href: string; description: string }[] = [
  { label: "Buyer's Guide", href: "/meilleur-iptv", description: "The definitive guide to choosing a stable 4K streaming provider." },
  { label: "Subscriptions", href: "/abonnement", description: "Pricing tiers, screen options, and money-back guarantees." },
  { label: "Device Setup", href: "/appareils", description: "Step-by-step setup for Firestick, Apple TV, Smart TVs, and PCs." },
  { label: "Streaming Apps", href: "/applications", description: "Optimized guides for TiviMate, Smarters Pro, VLC, and Kodi." },
  { label: "Live Sports", href: "/contenu/sport", description: "NFL, NBA, MLB, Premier League, UEFA, and motorsport." },
  { label: "Comparisons", href: "/comparatifs", description: "Strong 8K USA compared against traditional Cable and Satellite." },
];

export const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Terms of Service", href: "/conditions-utilisation" },
  { label: "Privacy Policy", href: "/politique-confidentialite" },
  { label: "Refund Policy", href: "/remboursement" },
  { label: "FTC Ownership & Disclaimer", href: "/mentions-legales" },
  { label: "Cookie Policy", href: "/cookies" },
];
