/**
 * Commercial sub-pages for the /abonnement (pricing & subscription) cluster.
 * Ingests and targets high-intent keyword groups from the USA dataset.
 */

export type Section = { title: string; body: string[] };

export type Offer = {
  slug: string;
  name: string;
  order: number;
  connections?: number;
  badge?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  sections: Section[];
  showPricing: boolean;
  showIncluded: boolean;
  faq: { q: string; a: string }[];
};

export const OFFERS: Record<string, Offer> = {
  "1-connexion": {
    slug: "1-connexion",
    name: "1 Screen (Solo)",
    order: 1,
    connections: 1,
    badge: "Solo",
    metaTitle: "1 Screen IPTV Subscription USA : 4K & 8K Solo Streaming Plan",
    metaDescription:
      "Solo 1-screen IPTV subscription in the USA: 50,000+ live channels and 180,000+ movies in 4K/8K on your Firestick, Smart TV, or smartphone. Instant 60s setup.",
    keywords: ["iptv 1 connection", "solo iptv plan", "iptv single device", "cheap iptv subscription", "iptv subscription usa", "firestick iptv"],
    eyebrow: "Solo Plan · 1 Active Screen",
    h1: "1-Screen IPTV Subscription",
    lead: "The ideal streaming package for individual viewers. Enjoy complete access to 50,000+ live channels and VOD in true 4K without paying for extra simultaneous streams.",
    intro: [
      "The 1-Screen Solo subscription is engineered for individual viewers who watch on one active screen at a time. You can register your account on multiple personal devices (such as your living room Firestick, office PC, and smartphone), but only one active video stream plays simultaneously.",
      "You receive the full Strong 8K USA content catalog: 50,000+ live US and global channels, full NFL, NBA, and Premier League sports coverage, electronic program guide (EPG), and a cinema library of 180,000+ movies and complete series in crystal-clear 4K and 8K.",
    ],
    sections: [
      {
        title: "Who is the Solo Plan Designed For?",
        body: [
          "Perfect for singles, students, travelers, or households looking to power a primary TV or media box without extra screen costs.",
          "If you rarely or never need two different screens streaming separate channels simultaneously in your home, this plan delivers the lowest monthly cost with zero compromise on stream quality.",
        ],
      },
      {
        title: "How Does Single-Connection Streaming Work?",
        body: [
          "A connection equals one active concurrent video stream. You receive your personalized M3U playlist URL and Xtream Codes API login.",
          "You can configure these credentials on your Samsung/LG Smart TV and your iPhone/Android phone. When watching on your TV, your connection is active. When you leave home, launch the app on your mobile for seamless streaming on the go.",
        ],
      },
      {
        title: "Instant Automated Setup in Under 60 Seconds",
        body: [
          "Compatible with 100% of major hardware and media players: Amazon Firestick, Apple TV 4K, Android TV, Nvidia Shield, Smart TVs, Windows PC, Mac, iOS, and Android.",
          "Credentials generate automatically the moment you complete checkout, delivered via email and WhatsApp within 60 seconds with simple setup instructions.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Can I install my account on both my TV and my smartphone?", a: "Yes. You can install your credentials on multiple devices, but only one device can actively stream video at any given time." },
      { q: "What happens if two devices attempt to stream at the same time?", a: "On a 1-screen plan, starting a second simultaneous stream will pause or disconnect the initial stream. For multi-screen viewing, we recommend our 2-Screen Duo or 3-Screen Family plan." },
      { q: "Can I upgrade to 2 or 3 screens later?", a: "Yes! You can upgrade your connection count anytime by reaching out to our 24/7 technical support team on WhatsApp." },
    ],
  },
  "2-connexions": {
    slug: "2-connexions",
    name: "2 Screens (Duo)",
    order: 2,
    connections: 2,
    badge: "Duo",
    metaTitle: "2 Screens IPTV Subscription USA : Duo Simultaneous Streams in 4K",
    metaDescription:
      "Watch on 2 screens simultaneously with Strong 8K USA. Ideal for couples, living room + bedroom, or streaming while traveling. 50,000+ channels in 4K/8K.",
    keywords: ["iptv 2 connections", "2 screens iptv", "duo iptv subscription", "multi-room iptv", "best iptv subscription 2026", "iptv subscription usa"],
    eyebrow: "Duo Plan · 2 Active Screens",
    h1: "2-Screen IPTV Subscription",
    lead: "Designed for couples and dual-TV households. Stream live sports in the living room while a movie plays in the bedroom without interruptions.",
    intro: [
      "The 2-Screen Duo subscription lets two separate devices stream different live channels or on-demand movies simultaneously on the same subscription.",
      "Eliminate channel conflicts at home. One person can watch Sunday NFL football in the living room while another catches up on a favorite series in the bedroom or on a tablet.",
    ],
    sections: [
      {
        title: "Ideal Dual-Screen Setup",
        body: [
          "Living Room 4K Smart TV + Master Bedroom Firestick.",
          "Home TV entertainment + Mobile phone or iPad streaming while commuting or traveling.",
        ],
      },
      {
        title: "Shared High-Performance Bandwidth",
        body: [
          "Each active stream connects independently to our global anti-freeze CDN nodes, ensuring neither screen suffers frame drops or buffering.",
          "Both streams enjoy full 4K and 8K Ultra HD quality with 60 FPS sports playback and real-time EPG syncing.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Can two people watch completely different channels at the same time?", a: "Yes, absolutely. The two streams are 100% independent. Each viewer can watch different live sports, news, or VOD movies." },
      { q: "Does the second screen have to be in the same house?", a: "No! Strong 8K USA features zero IP locking. One person can stream at home while the second streams on mobile data or at a hotel." },
    ],
  },
  "3-connexions": {
    slug: "3-connexions",
    name: "3 Screens (Family)",
    order: 3,
    connections: 3,
    badge: "Family",
    metaTitle: "3 Screens IPTV Subscription USA : Family Multi-Room Streaming",
    metaDescription:
      "Family 3-screen IPTV plan: 3 simultaneous streams in 4K/8K. Perfect for households with kids and multiple TVs. 50,000+ live channels, no cable boxes required.",
    keywords: ["iptv 3 connections", "family iptv subscription", "multi screen iptv usa", "3 device iptv", "best family streaming subscription"],
    eyebrow: "Family Plan · 3 Active Screens",
    h1: "3-Screen Family IPTV Subscription",
    lead: "The perfect package for active households. Three independent 4K streams running concurrently so parents, teens, and kids all watch their favorites seamlessly.",
    intro: [
      "No more arguments over what to watch. The 3-Screen Family plan powers three simultaneous streams across any combination of TVs, computers, and mobile devices.",
      "Parental controls can be configured in your chosen media player (like TiviMate or Smarters Pro) to restrict adult categories for younger family members.",
    ],
    sections: [
      {
        title: "Household Multi-Screen Configuration",
        body: [
          "Screen 1: Main Living Room Home Theater (NFL, NBA, live marquee sports).",
          "Screen 2: Master Bedroom TV (Late night series & cinema).",
          "Screen 3: Kids Room TV or Tablet (Animated series, cartoons, family movies).",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Can I set parental controls on specific screens?", a: "Yes. Most players (including TiviMate and IPTV Smarters Pro) include built-in PIN locks for designated bouquets and adult content." },
    ],
  },
  "5-connexions": {
    slug: "5-connexions",
    name: "5 Screens (Multi-Room)",
    order: 4,
    connections: 5,
    badge: "Multi-Room",
    metaTitle: "5 Screens Multi-Room IPTV Subscription USA : Whole Home 4K",
    metaDescription:
      "5 simultaneous 4K/8K connections for large households, vacation homes, and sports lounges. Full access to 50,000+ live channels and 180,000+ VOD titles.",
    keywords: ["iptv 5 connections", "multi device iptv usa", "whole home streaming", "multi room iptv", "5 screens iptv subscription"],
    eyebrow: "Multi-Room · 5 Active Screens",
    h1: "5-Screen Multi-Room IPTV Subscription",
    lead: "The ultimate whole-home entertainment powerhouse. Five concurrent 4K/8K streams with VIP priority technical routing.",
    intro: [
      "Our premier multi-connection tier designed for large residences, sports enthusiasts with multi-screen setups, and multi-room entertainment systems.",
      "Includes dedicated VIP priority customer support routing on WhatsApp and email, guaranteeing rapid response times 24/7/365.",
    ],
    sections: [
      {
        title: "Whole-Home Entertainment Without Cable Box Fees",
        body: [
          "Traditional US cable charges $15–$30/month for every extra cable box. With Strong 8K USA, 5 screens stream on existing Firesticks and Smart TVs with zero hardware rental costs.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "What internet bandwidth is needed for 5 simultaneous 4K streams?", a: "We recommend at least 75–100 Mbps download speed from your internet provider when 5 screens are streaming 4K simultaneously." },
    ],
  },
  "essai-gratuit": {
    slug: "essai-gratuit",
    name: "Free Trial & Guarantee",
    order: 5,
    badge: "Risk-Free",
    metaTitle: "IPTV Free Trial USA : Test Strong 8K 4K Streaming Risk-Free",
    metaDescription:
      "Try Strong 8K USA risk-free with our 30-day money-back guarantee. Test 50,000+ live channels, 4K sports, and anti-buffering CDN before committing.",
    keywords: ["iptv free trial usa", "free try iptv", "24 hour iptv trial", "test iptv service", "instant iptv trial", "risk free iptv"],
    eyebrow: "Trial & Guarantee · 100% Risk-Free",
    h1: "IPTV Free Trial & 30-Day Guarantee",
    lead: "Experience our high-speed 4K streaming network firsthand. Full access to all channels, live sports, and VOD with zero risk.",
    intro: [
      "We believe you should experience our stream stability, channel lineup, and fast zapping before committing long-term. Every plan includes our ironclad 30-day money-back guarantee.",
      "If you experience any recurring stream freezing that our technical support team cannot resolve, we issue a prompt, full refund.",
    ],
    sections: [
      {
        title: "How to Test Strong 8K USA Risk-Free",
        body: [
          "Select any subscription duration to receive your instant M3U URL and Xtream API login within 60 seconds.",
          "Test live sports, local US networks, and on-demand movies on your Firestick or Smart TV during peak viewing hours.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "How does the 30-day money-back guarantee work?", a: "If you are not 100% satisfied within 30 days of ordering, contact our 24/7 WhatsApp or email support for a complete, hassle-free refund." },
    ],
  },
  premium: {
    slug: "premium",
    name: "Premium IPTV USA",
    order: 6,
    badge: "Top Tier",
    metaTitle: "Best Premium IPTV Service USA (2026) : Strong 8K Ultra HD",
    metaDescription:
      "Looking for the best premium IPTV service in the USA? Strong 8K USA delivers 99.9% uptime, 50,000+ channels, 60 FPS sports, and dedicated 24/7 technical support.",
    keywords: ["best iptv service usa", "premium iptv usa", "iptv service providers", "high speed iptv", "reliable iptv 2026"],
    eyebrow: "Premium Service · High Reliability",
    h1: "Premium 4K & 8K IPTV Service in the USA",
    lead: "Engineered for discerning viewers who demand crystal-clear picture quality, reliable server uptime, and authentic 60 FPS live sports feeds.",
    intro: [
      "Cheap, low-grade providers overcrowd budget servers, leading to frustrating freezing during major NFL games and pay-per-view events. Strong 8K USA operates a dedicated enterprise CDN architecture with automated load balancing.",
    ],
    sections: [
      {
        title: "What Sets Premium IPTV Apart from Budget Competitors",
        body: [
          "Direct satellite and terrestrial source feeds with true 60 FPS frame rates.",
          "Adaptive bitrate streaming that adjusts dynamically to prevent buffering if your local Wi-Fi fluctuates.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Why is stream stability higher with Strong 8K USA?", a: "We utilize multi-point geo-distributed CDN servers across North America, preventing single-point bottlenecks during high-traffic events like the Super Bowl." },
    ],
  },
  prix: {
    slug: "prix",
    name: "Pricing Overview",
    order: 7,
    metaTitle: "IPTV Subscription Pricing USA : Affordable 4K Streaming Plans",
    metaDescription:
      "Transparent IPTV subscription pricing in the USA. Plans start at just $6.66/month with zero contracts, zero hardware fees, and a 30-day money-back guarantee.",
    keywords: ["iptv subscription cost", "how much is iptv usa", "iptv price comparison", "cheap iptv subscription", "buy iptv usa"],
    eyebrow: "Transparent Pricing · Zero Hidden Fees",
    h1: "IPTV Subscription Pricing & Plans",
    lead: "Clear, upfront pricing with no equipment rentals, broadcast fees, or auto-renewal traps.",
    intro: [
      "Compare all subscription terms and simultaneous screen packages. Long-term plans offer up to 55% in monthly savings.",
    ],
    sections: [
      {
        title: "One-Time Billing With Zero Surprise Charges",
        body: [
          "All plans are paid as a straightforward one-time fee. There are no recurring auto-renewals that silently bill your card.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Are there any hidden activation or cancellation fees?", a: "None whatsoever. The price you see is the final price." },
    ],
  },
  "pas-cher": {
    slug: "pas-cher",
    name: "Affordable IPTV",
    order: 8,
    badge: "Save 80%",
    metaTitle: "Cheap IPTV Subscription USA : Low Cost 4K Streaming (2026)",
    metaDescription:
      "Looking for a cheap IPTV subscription in the USA? Get 50,000+ live channels and 180,000+ movies for as low as $6.66/month. Save hundreds compared to cable.",
    keywords: ["cheap iptv usa", "budget iptv subscription", "affordable iptv", "best cheap iptv service 2026", "cord cutting live tv savings"],
    eyebrow: "Affordable Streaming · Maximum Value",
    h1: "Affordable 4K IPTV Subscription in the USA",
    lead: "Cut your television bill by up to 80% without sacrificing picture clarity, channel variety, or stream reliability.",
    intro: [
      "The average American household pays over $120 per month for traditional cable TV with limited channels. Strong 8K USA delivers superior 4K streaming starting at under $7 per month.",
    ],
    sections: [
      {
        title: "How to Cut Cable Costs Without Losing Live TV",
        body: [
          "Keep your favorite local news, live sports, and premium cinema channels while eliminating $1,000+ in annual cable bills.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Why is Strong 8K USA so much cheaper than cable TV?", a: "We deliver content over standard high-speed internet, eliminating expensive physical cable lines, technician truck rolls, and proprietary set-top boxes." },
    ],
  },
  "4k": {
    slug: "4k",
    name: "8K & 4K Ultra HD",
    order: 9,
    badge: "UHD 60FPS",
    metaTitle: "4K & 8K IPTV Subscription USA : Ultra HD Anti-Freeze Streaming",
    metaDescription:
      "Stream live television in true 4K & 8K Ultra HD with HDR10+ and 60 FPS sports playback. Anti-freeze server routing for Firestick, Apple TV, and Smart TVs.",
    keywords: ["iptv 4k usa", "8k iptv", "strong8k", "uhd streaming subscription", "anti buffering iptv", "60 fps sports streams"],
    eyebrow: "Ultra HD · True 4K & 8K",
    h1: "4K & 8K Ultra HD Streaming Engine",
    lead: "Experience breathtaking visual clarity with HDR10+ dynamic range, deep color reproduction, and high frame rate sports broadcasts.",
    intro: [
      "Using cutting-edge H.265 / HEVC compression standards, Strong 8K USA delivers stunning 4K and 8K video resolution at optimal bandwidth efficiency.",
    ],
    sections: [
      {
        title: "HEVC Encoding Benefits",
        body: [
          "Requires 50% less bandwidth than older H.264 formats while delivering visibly sharper details on OLED and QLED screens.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "What internet speed do I need for 4K streaming?", a: "We recommend at least 25–30 Mbps download speed for uninterrupted 4K Ultra HD playback." },
    ],
  },
  annuel: {
    slug: "annuel",
    name: "12-Month Best Value",
    order: 10,
    badge: "Save 55%",
    metaTitle: "12-Month IPTV Subscription USA : Best Annual Streaming Deal",
    metaDescription:
      "Our most popular streaming deal: get 12 full months of Strong 8K USA for just $79.99 ($6.66/month). Save 55% with a 30-day money-back guarantee.",
    keywords: ["12 month iptv subscription", "yearly iptv service", "annual iptv deal", "best value iptv", "iptv subscribe 1 year"],
    eyebrow: "Annual Plan · Best Value",
    h1: "12-Month Annual Streaming Plan",
    lead: "Lock in our lowest monthly rate of $6.66/month. Full access for an entire year with zero price hikes and full 30-day refund protection.",
    intro: [
      "Over 75% of our active subscribers choose the 12-month annual plan. It offers the biggest financial savings and complete peace of mind for the entire sports and cinema season.",
    ],
    sections: [
      {
        title: "Why the Annual Plan is Our #1 Recommendation",
        body: [
          "Enjoy uninterrupted coverage of the entire NFL season, NBA playoffs, Champions League, and year-round cinema releases without needing monthly renewals.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Is the 12-month plan covered by the 30-day money-back guarantee?", a: "Yes, 100%. If you are not completely satisfied during your first 30 days, we issue a full refund." },
    ],
  },
  revendeur: {
    slug: "revendeur",
    name: "Reseller Program",
    order: 11,
    badge: "Partner",
    metaTitle: "IPTV Reseller Panel USA : High Profit Reseller Credits & API",
    metaDescription:
      "Start your own IPTV business with the Strong 8K USA reseller program. Instant credit panel, sub-reseller creation, and 24/7 technical support.",
    keywords: ["iptv reseller panel", "iptv reseller usa", "start iptv business", "iptv restream panel", "iptv credits"],
    eyebrow: "Business Partnership · Reseller Panel",
    h1: "Strong 8K USA Reseller Program",
    lead: "Launch and grow your own branded streaming business with our enterprise reseller portal, high profit margins, and dedicated server credits.",
    intro: [
      "Join our network of successful streaming distributors across North America. Manage subscriber accounts, generate trial links, and customize bouquets through our intuitive web panel.",
    ],
    sections: [
      {
        title: "Reseller Panel Features",
        body: [
          "Full control over customer lines, M3U playlists, and Xtream API credentials.",
          "Credits that never expire. Activate accounts on-demand as your customer base expands.",
        ],
      },
    ],
    showPricing: false,
    showIncluded: false,
    faq: [
      { q: "Do reseller credits expire?", a: "No. Your purchased credits remain active in your panel until you use them to create or renew subscriber lines." },
    ],
  },
  comparatif: {
    slug: "comparatif",
    name: "Plan Comparison",
    order: 12,
    badge: "Comparison",
    metaTitle: "Compare IPTV Subscription Plans USA : Find Your Ideal Tier",
    metaDescription:
      "Compare Strong 8K USA streaming subscription tiers: 1, 2, 3, and 5 screen options. Find the perfect plan for your home with our side-by-side feature matrix.",
    keywords: ["iptv subscription comparison", "compare iptv plans", "best iptv provider usa", "multi screen iptv comparison"],
    eyebrow: "Side-by-Side Comparison",
    h1: "Compare Subscription Plans & Screens",
    lead: "Review all features, simultaneous screen allowances, and pricing across our complete plan lineup.",
    intro: [
      "Every Strong 8K USA plan includes our complete channel lineup and VOD catalog. The only difference is the duration you choose and how many screens can stream concurrently.",
    ],
    sections: [
      {
        title: "Feature Consistency Across All Plans",
        body: [
          "Regardless of whether you choose 1 screen or 5 screens, you receive the same pristine 4K/8K picture quality, 60 FPS sports feeds, and 24/7 technical assistance.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Can I start with 1 screen and upgrade to 2 or 3 screens later?", a: "Yes, you can upgrade your plan at any time by messaging our WhatsApp support team." },
    ],
  },
};

export const OFFER_SLUGS = Object.keys(OFFERS);
export const OFFER_LIST = Object.values(OFFERS).sort((a, b) => a.order - b.order);
