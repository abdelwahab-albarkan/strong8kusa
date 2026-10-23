/**
 * Internal Linking Architecture for Strong 8K USA
 * Defines structured relationships between Pillars, Clusters, Supporting Articles, and Technical Hubs.
 */

export interface InternalLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ClusterLinks {
  pillar: InternalLink;
  hubs: InternalLink[];
  recommendedApps: InternalLink[];
  recommendedDevices: InternalLink[];
  troubleshooting: InternalLink[];
  commercial: InternalLink[];
}

/** 1. Main Pillars */
export const PILLAR_LINKS = {
  meilleurIptv: {
    label: "Best IPTV USA Guide",
    href: "/meilleur-iptv",
    description: "Comprehensive 2026 buyer's guide and evaluation criteria for the best US IPTV services.",
  },
  abonnement: {
    label: "IPTV Subscription Plans",
    href: "/abonnement",
    description: "Flexible 3, 6, and 12-month streaming subscriptions with instant 60-second activation.",
  },
  appareils: {
    label: "Supported Devices",
    href: "/appareils",
    description: "Installation and setup guides for Firestick, Apple TV 4K, Android TV, Samsung & LG Smart TVs.",
  },
  applications: {
    label: "IPTV Applications & Players",
    href: "/applications",
    description: "TiviMate, IPTV Smarters Pro, VLC, Kodi, and IBO Player configuration tutorials.",
  },
  contenu: {
    label: "Live Channels & VOD",
    href: "/contenu",
    description: "50,000+ US & global live channels, regional sports packages, and 180,000+ 4K movies.",
  },
  comparatifs: {
    label: "Cable & Streaming Comparisons",
    href: "/comparatifs",
    description: "Cost and feature comparisons vs Cable TV, YouTube TV, Spectrum, Xfinity, and FuboTV.",
  },
  problemes: {
    label: "Troubleshooting & Support Hub",
    href: "/problemes",
    description: "Step-by-step solutions for buffering, black screens, internet speed, and ISP throttling.",
  },
  faq: {
    label: "FAQ & Knowledge Base",
    href: "/faq",
    description: "Answers to frequently asked questions, technical glossary, and streaming setup tips.",
  },
  blog: {
    label: "Guides & Blog",
    href: "/blog",
    description: "In-depth tutorials, cord-cutting advice, VPN setups, and expert streaming tips.",
  },
};

/** 2. Mapping by Device -> Apps & Troubleshooting */
export const DEVICE_CROSS_LINKS: Record<
  string,
  {
    apps: InternalLink[];
    troubleshooting: InternalLink[];
    relatedDevices: InternalLink[];
    relatedGuides: InternalLink[];
  }
> = {
  samsung: {
    apps: [
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "The most popular player on Samsung Tizen." },
      { label: "IBO Player Pro", href: "/applications/ibo-player", description: "Blazing fast channel switching for Smart TVs." },
      { label: "VLC Media Player", href: "/applications/vlc", description: "Quickly test M3U playlists." },
    ],
    troubleshooting: [
      { label: "Black screen on Smart TV", href: "/problemes/ecran-noir", description: "Resolve video codec and black screen issues." },
      { label: "Fix buffering and stuttering", href: "/problemes/buffering-coupure", description: "Optimize network bandwidth and avoid lag." },
    ],
    relatedDevices: [
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Android TV & SuperBox Alternative", href: "/appareils/android-tv" },
      { label: "Amazon Firestick 4K", href: "/appareils/firestick" },
    ],
    relatedGuides: [
      { label: "Senior Cord-Cutting Guide", href: "/blog/iptv-pour-senior" },
      { label: "Xtream Codes API Setup", href: "/formats/xtream-codes" },
    ],
  },
  lg: {
    apps: [
      { label: "IBO Player Pro", href: "/applications/ibo-player", description: "Top-rated player on LG Content Store." },
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Full categorized live TV & VOD." },
      { label: "VLC Media Player", href: "/applications/vlc", description: "Direct playback of M3U streams." },
    ],
    troubleshooting: [
      { label: "Empty channel playlist", href: "/problemes/erreurs", description: "Fix URL entry mistakes and server timeouts." },
      { label: "Sound delay or codec issue", href: "/problemes/son-decale", description: "Adjust PCM audio output on LG webOS." },
    ],
    relatedDevices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
    ],
    relatedGuides: [
      { label: "M3U Playlist Format Guide", href: "/formats/m3u" },
      { label: "How to Choose an IPTV Subscription", href: "/blog/comment-choisir-son-abonnement-iptv" },
    ],
  },
  "android-tv": {
    apps: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate", description: "The premier TV guide interface with multiview." },
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Complete live TV, replay, and VOD manager." },
      { label: "XCIPTV Player", href: "/applications/xciptv", description: "Dual-engine player built for TV remotes." },
      { label: "OTT Navigator", href: "/applications/ott-navigator", description: "Granular codec and layout customization." },
    ],
    troubleshooting: [
      { label: "Internet speed benchmark", href: "/problemes/vitesse-internet", description: "Recommended bandwidth for 4K 60FPS streams." },
      { label: "Stop buffering & freezing", href: "/problemes/buffering-coupure", description: "Buffer settings and Ethernet optimization." },
    ],
    relatedDevices: [
      { label: "Nvidia Shield TV Pro", href: "/appareils/nvidia-shield" },
      { label: "Xiaomi TV Box S", href: "/appareils/xiaomi" },
      { label: "Amazon Firestick 4K", href: "/appareils/firestick" },
    ],
    relatedGuides: [
      { label: "VPN Guide for Streaming", href: "/blog/iptv-et-vpn-faut-il-en-utiliser-un" },
      { label: "EPG & Catch-up TV Guide", href: "/formats/epg" },
    ],
  },
  firestick: {
    apps: [
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Easy installation via Downloader app." },
      { label: "TiviMate IPTV Player", href: "/applications/tivimate", description: "The ultimate remote-friendly experience." },
      { label: "Kodi Media Center", href: "/applications/kodi", description: "PVR IPTV Simple Client for Fire OS." },
    ],
    troubleshooting: [
      { label: "IPTV not working on Firestick", href: "/problemes/iptv-ne-fonctionne-pas", description: "Complete Firestick diagnostic." },
      { label: "Fix Firestick freezing & cache", href: "/problemes/iptv-firestick", description: "Clear cache and optimize storage." },
    ],
    relatedDevices: [
      { label: "Android TV Box", href: "/appareils/android-tv" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Xiaomi TV Stick 4K", href: "/appareils/xiaomi" },
    ],
    relatedGuides: [
      { label: "Complete Firestick Setup Tutorial", href: "/blog/installer-iptv-sur-fire-tv-stick" },
      { label: "Stop ISP Throttling Guide", href: "/problemes/iptv-bloque-operateur" },
    ],
  },
  "apple-tv": {
    apps: [
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv", description: "Veteran tvOS streaming player." },
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Native tvOS App Store download." },
      { label: "VLC for Apple TV", href: "/applications/vlc", description: "Free universal video player." },
    ],
    troubleshooting: [
      { label: "Server connection error", href: "/problemes/serveur-indisponible", description: "Verify stream URL and credentials." },
      { label: "4K HDR picture settings", href: "/abonnement/4k", description: "Optimize Apple TV video settings." },
    ],
    relatedDevices: [
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "Nvidia Shield TV Pro", href: "/appareils/nvidia-shield" },
    ],
    relatedGuides: [
      { label: "Xtream Codes API Explained", href: "/formats/xtream-codes" },
      { label: "Ultra HD 8K & 4K Streaming Tier", href: "/abonnement/4k" },
    ],
  },
  xiaomi: {
    apps: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate" },
      { label: "IPTV Smarters Pro", href: "/applications/smarters" },
      { label: "XCIPTV Player", href: "/applications/xciptv" },
    ],
    troubleshooting: [
      { label: "Internet speed & Wi-Fi", href: "/problemes/vitesse-internet" },
      { label: "Peak hour buffering fix", href: "/problemes/buffering-coupure" },
    ],
    relatedDevices: [
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Nvidia Shield Pro", href: "/appareils/nvidia-shield" },
    ],
    relatedGuides: [
      { label: "Install IPTV on Fire TV Stick", href: "/blog/installer-iptv-sur-fire-tv-stick" },
    ],
  },
  "nvidia-shield": {
    apps: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate", description: "Maximum performance with AI 4K upscaling." },
      { label: "IPTV Smarters Pro", href: "/applications/smarters" },
      { label: "Kodi", href: "/applications/kodi" },
    ],
    troubleshooting: [
      { label: "Gigabit Ethernet setup", href: "/problemes/vitesse-internet" },
      { label: "4K HDR10+ calibration", href: "/abonnement/4k" },
    ],
    relatedDevices: [
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Xiaomi TV Box", href: "/appareils/xiaomi" },
    ],
    relatedGuides: [
      { label: "Ultra HD 4K Streaming Guide", href: "/abonnement/4k" },
    ],
  },
  mag: {
    apps: [
      { label: "Native Stalker Portal", href: "/formats/xtream-codes", description: "Configure via MAG portal URL." },
    ],
    troubleshooting: [
      { label: "Error 'Your STB is blocked'", href: "/problemes/compte-expire", description: "Register device MAC address." },
      { label: "Stuck on loading portal bar", href: "/problemes/iptv-ne-fonctionne-pas" },
    ],
    relatedDevices: [
      { label: "Android TV Box", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
    ],
    relatedGuides: [
      { label: "IPTV Streaming Glossary", href: "/faq/lexique" },
    ],
  },
  windows: {
    apps: [
      { label: "VLC Media Player", href: "/applications/vlc", description: "Fastest free M3U player for Windows 10/11." },
      { label: "IPTV Smarters Pro Windows", href: "/applications/smarters", description: "Dedicated desktop app with full TV layout." },
      { label: "Kodi Windows", href: "/applications/kodi" },
    ],
    troubleshooting: [
      { label: "VLC playback error", href: "/problemes/erreurs" },
      { label: "Speed & bandwidth test", href: "/problemes/vitesse-internet" },
    ],
    relatedDevices: [
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "Android TV", href: "/appareils/android-tv" },
    ],
    relatedGuides: [
      { label: "VPN for PC Streaming", href: "/blog/iptv-et-vpn-faut-il-en-utiliser-un" },
      { label: "M3U Playlists Explained", href: "/formats/m3u" },
    ],
  },
  mac: {
    apps: [
      { label: "VLC Media Player for Mac", href: "/applications/vlc" },
      { label: "IPTV Smarters Pro macOS", href: "/applications/smarters" },
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv" },
    ],
    troubleshooting: [
      { label: "M3U stream error", href: "/problemes/erreurs" },
      { label: "Fix stream stutter", href: "/problemes/buffering-coupure" },
    ],
    relatedDevices: [
      { label: "Windows PC", href: "/appareils/windows" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
    ],
    relatedGuides: [
      { label: "M3U Playlist Format Guide", href: "/formats/m3u" },
    ],
  },
  "iphone-ipad": {
    apps: [
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv", description: "Optimized for iOS & iPadOS." },
      { label: "IPTV Smarters Pro iOS", href: "/applications/smarters" },
      { label: "VLC for Mobile", href: "/applications/vlc" },
    ],
    troubleshooting: [
      { label: "Streaming on 5G & LTE data", href: "/problemes/vitesse-internet" },
      { label: "Stream freezing fix", href: "/problemes/buffering-coupure" },
    ],
    relatedDevices: [
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "Android TV", href: "/appareils/android-tv" },
    ],
    relatedGuides: [
      { label: "Xtream Codes API on iPhone", href: "/formats/xtream-codes" },
    ],
  },
};

/** 3. Mapping by Application -> Compatible Devices & Hubs */
export const APP_CROSS_LINKS: Record<
  string,
  {
    devices: InternalLink[];
    formats: InternalLink[];
    troubleshooting: InternalLink[];
  }
> = {
  smarters: {
    devices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Windows PC", href: "/appareils/windows" },
      { label: "Apple TV", href: "/appareils/apple-tv" },
    ],
    formats: [
      { label: "Xtream Codes Login", href: "/formats/xtream-codes" },
      { label: "M3U Playlist", href: "/formats/m3u" },
      { label: "Electronic Program Guide (EPG)", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "Smarters login errors", href: "/problemes/erreurs" },
      { label: "Buffering and stuttering", href: "/problemes/buffering-coupure" },
    ],
  },
  tivimate: {
    devices: [
      { label: "Android TV & Google TV", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Nvidia Shield TV", href: "/appareils/nvidia-shield" },
      { label: "Xiaomi Mi Box", href: "/appareils/xiaomi" },
    ],
    formats: [
      { label: "Xtream Codes Setup", href: "/formats/xtream-codes" },
      { label: "EPG TV Guide", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "EPG guide not syncing", href: "/problemes/epg-ne-safiche-pas" },
      { label: "Black screen with sound", href: "/problemes/ecran-noir" },
    ],
  },
  vlc: {
    devices: [
      { label: "Windows 11/10 PC", href: "/appareils/windows" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
    ],
    formats: [
      { label: "M3U Playlist URL", href: "/formats/m3u" },
    ],
    troubleshooting: [
      { label: "VLC skips channels rapidly", href: "/problemes/buffering-coupure" },
      { label: "Internet speed benchmark", href: "/problemes/vitesse-internet" },
    ],
  },
  kodi: {
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
      { label: "Windows PC", href: "/appareils/windows" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
    ],
    formats: [
      { label: "PVR IPTV Simple Client Addon", href: "/formats/m3u" },
      { label: "XMLTV EPG Integration", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "IPTV connection diagnostic", href: "/problemes/iptv-ne-fonctionne-pas" },
    ],
  },
  "gse-smart-iptv": {
    devices: [
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Mac", href: "/appareils/mac" },
      { label: "Android", href: "/appareils/android-tv" },
    ],
    formats: [
      { label: "Xtream Codes API", href: "/formats/xtream-codes" },
      { label: "M3U Link", href: "/formats/m3u" },
    ],
    troubleshooting: [
      { label: "Playlist error", href: "/problemes/erreurs" },
    ],
  },
  "ott-navigator": {
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
      { label: "Xiaomi TV Box", href: "/appareils/xiaomi" },
    ],
    formats: [
      { label: "Xtream Codes", href: "/formats/xtream-codes" },
      { label: "Program Guide", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "Buffer memory optimization", href: "/problemes/buffering-coupure" },
    ],
  },
  xciptv: {
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Xiaomi TV", href: "/appareils/xiaomi" },
    ],
    formats: [
      { label: "Xtream API", href: "/formats/xtream-codes" },
    ],
    troubleshooting: [
      { label: "Black screen issue", href: "/problemes/ecran-noir" },
    ],
  },
};
