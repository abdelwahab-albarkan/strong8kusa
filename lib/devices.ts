/** Device-guide content for the /appareils cluster. Keyed by route slug. */

export type DeviceGuide = {
  slug: string;
  name: string;
  os?: string;
  order: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  compatibility: string[];
  quickFacts: { label: string; value: string }[];
  steps: { title: string; description: string }[];
  apps: { name: string; note: string; href: string }[];
  troubleshoot: { problem: string; cause: string; solution: string }[];
  faq: { q: string; a: string }[];
};

export const DEVICES: Record<string, DeviceGuide> = {
  samsung: {
    slug: "samsung",
    name: "Samsung Smart TV",
    os: "Tizen OS",
    order: 1,
    metaTitle: "How to Setup IPTV on Samsung Smart TV (Tizen) — Best Apps & Guide",
    metaDescription:
      "Complete guide to stream Strong 8K USA on Samsung Smart TVs (Tizen OS): recommended IPTV apps, step-by-step Xtream Codes setup, and anti-buffering tips.",
    keywords: [
      "iptv samsung",
      "iptv for samsung smart tv",
      "samsung tizen iptv app",
      "how to install iptv on samsung smart tv",
      "smart iptv samsung",
      "iptv smarters pro samsung tv",
      "best iptv app for samsung smart tv",
    ],
    eyebrow: "Devices · Samsung Smart TV",
    h1: "IPTV on Samsung Smart TV (Tizen OS)",
    lead: "Stream 50,000+ live 4K & 8K channels on your Samsung Smart TV without external boxes. Learn how to install and configure Strong 8K USA in under 3 minutes.",
    intro: [
      "Samsung Smart TVs running Tizen OS (2016 to latest 2026 models) offer built-in support for top IPTV players available directly in the official Samsung Apps Store. You do not need third-party dongles to stream live sports and movies in crystal-clear 4K.",
      "Because Tizen is a closed operating system, apps must be downloaded from the Samsung App Store. Top-rated applications like IPTV Smarters Pro, Smart IPTV, and IBO Player connect effortlessly with Strong 8K USA via Xtream Codes API or M3U playlist URLs.",
    ],
    compatibility: [
      "All Samsung Smart TVs running Tizen OS (2016-2026)",
      "4K Ultra HD and 8K resolution support with HDR10+",
      "Direct Ethernet LAN connection recommended for live sports",
      "Zero extra hardware required — runs natively on your TV",
    ],
    quickFacts: [
      { label: "Operating System", value: "Tizen OS (Samsung Electronics)" },
      { label: "Connection Protocol", value: "Xtream Codes API & M3U Playlist" },
      { label: "Recommended App", value: "IPTV Smarters Pro / IBO Player" },
      { label: "Recommended Speed", value: "25+ Mbps for 4K UHD Streams" },
      { label: "Setup Method", value: "Official Samsung Apps Store" },
    ],
    steps: [
      { title: "Open Samsung Apps Store", description: "From your Samsung home dashboard, navigate to the Apps icon and use the search bar." },
      { title: "Install IPTV Smarters or IBO Player", description: "Search for 'IPTV Smarters Pro' or 'IBO Player' and click 'Install' to add it to your TV." },
      { title: "Enter Strong 8K USA Credentials", description: "Select 'Login with Xtream Codes API' and enter the Server URL, Username, and Password sent to your email or WhatsApp." },
      { title: "Load Channels & Enjoy Live TV", description: "The EPG TV guide, live sports channels, and VOD library load instantly. Add your favorite channels for quick access." },
    ],
    apps: [
      { name: "IPTV Smarters Pro", note: "The most popular, user-friendly player on Tizen.", href: "/applications/smarters" },
      { name: "IBO Player Pro", note: "Fast channel switching and built-in EPG.", href: "/applications/ibo-player" },
      { name: "Smart IPTV", note: "Classic MAC-based player for Samsung TVs.", href: "/applications" },
    ],
    troubleshoot: [
      { problem: "Channels fail to load or timeout", cause: "Mistyped credentials or temporary DNS blockage by ISP", solution: "Double check server URL and username without spaces, or test with Cloudflare 1.1.1.1 DNS in TV network settings." },
      { problem: "Screen buffers or drops frames in 4K", cause: "Wi-Fi packet loss or interference", solution: "Switch to a wired Ethernet cable or 5GHz Wi-Fi network with at least 30 Mbps bandwidth." },
      { problem: "App not found in Samsung App Store", cause: "Regional store restriction on some models", solution: "Change TV region in Smart Hub settings or plug in an Amazon Firestick 4K for full app flexibility." },
    ],
    faq: [
      { q: "Can I watch IPTV on my Samsung Smart TV without a Firestick?", a: "Yes. Samsung Smart TVs running Tizen OS support native players like IPTV Smarters Pro and IBO Player downloaded directly from the Samsung Apps Store." },
      { q: "What is the best IPTV app for Samsung TV in the US?", a: "IPTV Smarters Pro is the top recommendation for Samsung Smart TVs due to its clean layout, automated EPG guide, and seamless Xtream Codes integration." },
      { q: "How do I avoid buffering on Samsung TV?", a: "Connect your TV via Ethernet cable rather than 2.4GHz Wi-Fi, ensure your internet speed exceeds 25 Mbps, and take advantage of Strong 8K USA's anti-freeze CDN nodes." },
    ],
  },
  lg: {
    slug: "lg",
    name: "LG Smart TV",
    os: "webOS",
    order: 2,
    metaTitle: "How to Install IPTV on LG Smart TV (webOS) — Best Players & Setup",
    metaDescription:
      "Step-by-step tutorial to setup Strong 8K USA on LG Smart TVs running webOS. Compare the best LG Content Store IPTV apps with 4K HDR playback.",
    keywords: [
      "iptv lg",
      "iptv for lg smart tv",
      "lg webos iptv app",
      "how to setup iptv on lg tv",
      "ibo player lg tv",
      "iptv smarters pro lg webos",
      "best iptv app for lg tv",
    ],
    eyebrow: "Devices · LG Smart TV",
    h1: "IPTV on LG Smart TV (webOS)",
    lead: "Experience ultra-fast 60 FPS live sports and movies on LG OLED and webOS TVs. Setup Strong 8K USA in minutes with official LG Content Store players.",
    intro: [
      "LG Smart TVs equipped with webOS deliver an exceptional viewing experience, particularly on OLED and QNED displays. You can stream 50,000+ live channels directly using vetted players available in the LG Content Store.",
      "Like Samsung, webOS requires apps vetted through its marketplace. Applications like IBO Player, IPTV Smarters Pro, and Smart IPTV integrate flawlessly with Strong 8K USA, providing instant access to 4K HDR live sports, pay-per-view events, and on-demand titles.",
    ],
    compatibility: [
      "All LG Smart TVs running webOS 3.0 through webOS 24/26",
      "4K OLED, QNED, and NanoCell displays with Dolby Vision & HDR",
      "Compatible with Xtream Codes API and M3U playlists",
      "No secondary streaming stick or external box required",
    ],
    quickFacts: [
      { label: "Operating System", value: "webOS (LG Electronics)" },
      { label: "Connection Formats", value: "Xtream Codes API & M3U8" },
      { label: "Top Application", value: "IBO Player Pro / IPTV Smarters" },
      { label: "Optimal Speed", value: "25+ Mbps for 4K 60FPS" },
      { label: "App Source", value: "LG Content Store" },
    ],
    steps: [
      { title: "Access the LG Content Store", description: "Press the Home button on your Magic Remote and launch the LG Content Store or Apps app." },
      { title: "Download Your Preferred Player", description: "Search for 'IBO Player', 'IPTV Smarters Pro', or 'Set IPTV' and click 'Install'." },
      { title: "Authenticate Your Subscription", description: "Open the player and enter your Strong 8K USA server URL, username, and password provided via email/WhatsApp." },
      { title: "Start Streaming Live TV", description: "Allow the initial playlist and electronic program guide (EPG) to sync, then start streaming your favorite channels." },
    ],
    apps: [
      { name: "IBO Player", note: "Lightning-fast zap times on LG webOS.", href: "/applications/ibo-player" },
      { name: "IPTV Smarters Pro", note: "Clean categorized UI for live TV and VOD.", href: "/applications/smarters" },
      { name: "Set IPTV", note: "Reliable MAC-based portal player.", href: "/applications" },
    ],
    troubleshoot: [
      { problem: "Audio is out of sync or missing", cause: "LG TV audio output format conflict with stream codec", solution: "In LG Settings > Sound > Digital Sound Output, switch from Auto to PCM or Pass Through." },
      { problem: "Streams freeze during high-traffic NFL or soccer games", cause: "Wi-Fi packet throttling by US ISP", solution: "Use a Cat6 Ethernet cable and ensure your router has QoS enabled for your LG TV." },
      { problem: "App says playlist expired", cause: "Cache desynchronization", solution: "Force close the app, clear application cache in TV settings, and reload the playlist." },
    ],
    faq: [
      { q: "Is IPTV Smarters available on LG Smart TV?", a: "Yes, IPTV Smarters Pro is available on most regional LG Content Stores. Alternatively, IBO Player is widely regarded as the fastest player on webOS." },
      { q: "Do I need to root or jailbreak my LG TV for IPTV?", a: "Never. All recommended IPTV apps install officially and safely directly through the LG Content Store." },
      { q: "Can I watch 4K 60FPS sports on LG OLED with Strong 8K USA?", a: "Absolutely. Strong 8K USA provides native 4K 60 FPS feeds designed to take full advantage of LG OLED self-lit pixel technology." },
    ],
  },
  "android-tv": {
    slug: "android-tv",
    name: "Android TV & SuperBox Alternative",
    os: "Android TV / Google TV",
    order: 3,
    metaTitle: "Best IPTV on Android TV Box & Google TV — Top SuperBox Alternative",
    metaDescription:
      "Looking for a SuperBox alternative? Run Strong 8K USA on Android TV, Google TV, or any streaming box for 50,000+ channels with zero recurring hardware fees.",
    keywords: [
      "superbox alternative",
      "super box",
      "abox android tv",
      "superbox s6",
      "tv box and",
      "android tv box iptv",
      "best android box for iptv",
      "google tv iptv",
    ],
    eyebrow: "Devices · Android TV Box",
    h1: "IPTV for Android TV Box & The #1 SuperBox Alternative",
    lead: "Tired of overpaying $350+ for locked-down SuperBox hardware? Strong 8K USA turns any Android TV or Google TV box into a high-performance 4K streaming powerhouse.",
    intro: [
      "Hardware boxes like SuperBox S4, S5, and S6 charge exorbitant upfront fees for rebadged low-spec hardware running unverified feeds. Strong 8K USA provides a far superior, cost-effective SuperBox alternative by delivering 50,000+ premium channels with dedicated CDN servers on your choice of open hardware.",
      "Whether you run an affordable Android TV box, a Walmart onn. 4K Pro, or a Google TV streamer, you get complete freedom to use award-winning players like TiviMate, IPTV Smarters, and XCIPTV with automated EPG and catch-up TV.",
    ],
    compatibility: [
      "All certified Android TV 9.0 to 14.0 and Google TV devices",
      "Walmart onn. Google TV 4K / onn. 4K Pro streaming boxes",
      "Generic Android TV boxes (M8S, A95X, H96, X96 Max, Tanix)",
      "Fully compatible with TiviMate Premium and Xtream Codes API",
    ],
    quickFacts: [
      { label: "Operating System", value: "Android TV & Google TV OS" },
      { label: "SuperBox Savings", value: "Save $250+ vs proprietary boxes" },
      { label: "Best IPTV Player", value: "TiviMate Premium / XCIPTV" },
      { label: "Max Resolution", value: "8K UHD / 4K @ 60 FPS HDR" },
      { label: "Sideloading Support", value: "Full APK installation freedom" },
    ],
    steps: [
      { title: "Connect Your Android Box", description: "Plug your Android TV box into your television HDMI port and ensure it is connected to fast internet." },
      { title: "Install TiviMate from Google Play", description: "Open Google Play Store on your box, search for 'TiviMate IPTV Player', and install it." },
      { title: "Add Xtream Codes Playlist", description: "Open TiviMate, select 'Add Playlist' > 'Xtream Codes', and enter your Strong 8K USA credentials." },
      { title: "Sync TV Guide & Channels", description: "Your 50,000+ live channels, sports groups, and TV guide populate in seconds. Set up multi-view to watch up to 4 games at once." },
    ],
    apps: [
      { name: "TiviMate IPTV Player", note: "The gold standard Android TV interface with multiview.", href: "/applications/tivimate" },
      { name: "IPTV Smarters Pro", note: "All-in-one player for live, movies, and TV shows.", href: "/applications/smarters" },
      { name: "XCIPTV Player", note: "Clean remote-friendly navigation and dual player engines.", href: "/applications/xciptv" },
    ],
    troubleshoot: [
      { problem: "Cheap Android box lags on 4K streams", cause: "Hardware decoder bottleneck on uncertified chips", solution: "Inside TiviMate or Smarters settings, toggle Video Decoder from Hardware to Software or ExoPlayer." },
      { problem: "SuperBox vs Strong 8K USA comparison", cause: "SuperBox channels frequently go down during big US sporting events", solution: "Strong 8K USA utilizes 25+ global CDN edge servers with dynamic load balancing for 99.9% uptime." },
      { problem: "Audio format unsupported error", cause: "Missing AC3/DTS audio codecs", solution: "Install VLC or switch the player audio output to software decoding in player settings." },
    ],
    faq: [
      { q: "Why is Strong 8K USA a better alternative to SuperBox?", a: "SuperBox costs $300-$400 upfront for cheap Android hardware that loses stream stability after a few months. Strong 8K USA lets you use top hardware like onn. 4K Pro ($50) or Nvidia Shield, paired with verified ultra-fast 60 FPS servers at a fraction of the cost." },
      { q: "What is the best player for Android TV boxes?", a: "TiviMate IPTV Player is universally considered the best player on Android TV due to its cable-box feel, customizable guide, and multi-screen capabilities." },
      { q: "Can I install third-party APKs on Android TV?", a: "Yes. Android TV allows direct sideloading via the Downloader app, giving you complete freedom to install any streaming player." },
    ],
  },
  firestick: {
    slug: "firestick",
    name: "Amazon Firestick 4K & Fire TV",
    os: "Fire OS",
    order: 4,
    metaTitle: "How to Setup IPTV on Firestick (2026) — Complete Step-by-Step Guide",
    metaDescription:
      "Learn how to setup IPTV on Amazon Firestick 4K Max & Fire TV Cube. Discover the best IPTV apps for Firestick, Downloader setup, and anti-buffering settings.",
    keywords: [
      "how to setup iptv on firestick",
      "best iptv for firestick",
      "firestick iptv",
      "fire stick iptv",
      "fire tv streaming setup",
      "tivimate firestick",
      "iptv smarters firestick",
      "best iptv service for firestick",
    ],
    eyebrow: "Devices · Amazon Firestick",
    h1: "How to Setup IPTV on Amazon Firestick (2026 Guide)",
    lead: "Amazon Firestick is the most popular streaming device in the United States. Follow our step-by-step walkthrough to unlock 50,000+ live 4K channels with Strong 8K USA in under 5 minutes.",
    intro: [
      "The Amazon Fire TV Stick 4K and Fire TV Cube are the premier budget streaming devices in the USA. With powerful hardware video decoders and support for Wi-Fi 6, Firestick delivers buttery-smooth 60 FPS playback for NFL, NBA, UFC, and live television.",
      "Setting up Strong 8K USA on Firestick takes only minutes using the free Downloader app. You can run industry-standard players such as TiviMate and IPTV Smarters Pro with full remote control integration, EPG electronic program guide, and one-click favorites.",
    ],
    compatibility: [
      "Amazon Fire TV Stick 4K & Fire TV Stick 4K Max (Gen 1 & 2)",
      "Fire TV Cube (All Generations) & Fire TV Edition Smart TVs",
      "Fire TV Stick Lite & Standard Fire TV Stick (1080p)",
      "Supports Alexa Voice Remote and Bluetooth headphones",
    ],
    quickFacts: [
      { label: "Operating System", value: "Fire OS (Amazon Android Fork)" },
      { label: "Setup Difficulty", value: "Easy (5 minutes via Downloader)" },
      { label: "Recommended App", value: "TiviMate / IPTV Smarters Pro" },
      { label: "Network Requirement", value: "20+ Mbps (Wi-Fi 5 or Wi-Fi 6)" },
      { label: "Storage Needed", value: "Under 150 MB free space" },
    ],
    steps: [
      { title: "Install the Downloader App", description: "From your Firestick home screen, search for 'Downloader' in the Amazon Appstore and install it for free." },
      { title: "Enable Sideloading in Settings", description: "Go to Settings > My Fire TV > Developer Options > Install Unknown Apps, and set Downloader to 'ON'." },
      { title: "Download TiviMate or IPTV Smarters", description: "Open Downloader, enter the quick code for IPTV Smarters Pro or TiviMate, and click Install." },
      { title: "Login with Strong 8K USA Credentials", description: "Launch the app, choose 'Login with Xtream Codes API', enter your username and password, and start watching." },
    ],
    apps: [
      { name: "IPTV Smarters Pro", note: "The most popular free player on Firestick.", href: "/applications/smarters" },
      { name: "TiviMate IPTV Player", note: "Premium cable-like experience with multiview.", href: "/applications/tivimate" },
      { name: "Kodi Fire TV", note: "Advanced media center with PVR IPTV Simple Client.", href: "/applications/kodi" },
    ],
    troubleshoot: [
      { problem: "Firestick runs out of storage or runs slow", cause: "Accumulated app cache and background logs", solution: "Go to Settings > Applications > Manage Installed Applications, select apps and click 'Clear Cache'." },
      { problem: "Buffering on Firestick at night", cause: "ISP bandwidth throttling on streaming ports during peak hours", solution: "Strong 8K USA routes via encrypted ports; connecting via a 5GHz Wi-Fi band or VPN resolves ISP-level throttling." },
      { problem: "Developer Options missing on Firestick", cause: "New Amazon software update hid developer options", solution: "Go to Settings > My Fire TV > About, and click your device name 7 times rapidly to reveal Developer Options." },
    ],
    faq: [
      { q: "What is the best IPTV app for Firestick in 2026?", a: "TiviMate IPTV Player is widely regarded as the #1 player for Firestick for its unmatched speed and modern TV guide. IPTV Smarters Pro is the best free alternative." },
      { q: "Is it legal to use IPTV on Amazon Firestick in the US?", a: "Yes. Using streaming applications on Firestick is 100% legal. Strong 8K USA provides high-speed cloud infrastructure for your digital entertainment." },
      { q: "Does Firestick 4K Max support 60 FPS sports streams?", a: "Yes. The Firestick 4K Max supports hardware-accelerated 4K 60 FPS and Wi-Fi 6, making it an ideal device for sports fans." },
    ],
  },
  "apple-tv": {
    slug: "apple-tv",
    name: "Apple TV 4K",
    os: "tvOS",
    order: 5,
    metaTitle: "Best IPTV Apps for Apple TV 4K (2026) — tvOS Streaming Guide",
    metaDescription:
      "Unlock ultra-smooth 4K HDR IPTV streaming on Apple TV 4K. Compare top tvOS players: IPTV Smarters, GSE Smart IPTV, and iPlayTV with Strong 8K USA.",
    keywords: [
      "apple tv iptv player",
      "iptv on apple tv 4k",
      "best iptv app apple tv",
      "gse smart iptv apple tv",
      "iptv smarters pro apple tv",
      "tivimate apple tv alternative",
      "iptv tvos player",
    ],
    eyebrow: "Devices · Apple TV 4K",
    h1: "IPTV on Apple TV 4K (tvOS)",
    lead: "Apple TV 4K features the fastest processor in streaming. Experience zero-lag channel surfing, HDR10+, and Dolby Vision with Strong 8K USA.",
    intro: [
      "Powered by Apple's A15 Bionic processor, the Apple TV 4K is the smoothest, most powerful streaming box on the market. Unlike budget sticks, Apple TV handles high-bitrate 4K 60 FPS streams with zero frame drops or interface sluggishness.",
      "While tvOS does not allow sideloading APK files, the official App Store contains several world-class IPTV players such as IPTV Smarters Pro, GSE Smart IPTV, and iPlayTV that connect seamlessly to Strong 8K USA via Xtream Codes API.",
    ],
    compatibility: [
      "Apple TV 4K (1st, 2nd, and 3rd Generation with Wi-Fi / Ethernet)",
      "Apple TV HD (4th Generation)",
      "Full integration with Siri Remote and Apple HomeKit",
      "Dolby Vision, HDR10+, and spatial audio support",
    ],
    quickFacts: [
      { label: "Operating System", value: "tvOS (Apple Inc.)" },
      { label: "Processor", value: "Apple A15 Bionic (Zero Interface Lag)" },
      { label: "Top tvOS Apps", value: "IPTV Smarters / GSE Smart IPTV" },
      { label: "Stream Quality", value: "Native 4K 60 FPS with HDR10+" },
      { label: "Installation", value: "Direct from official tvOS App Store" },
    ],
    steps: [
      { title: "Open the tvOS App Store", description: "From your Apple TV home screen, click on the App Store icon." },
      { title: "Search and Install IPTV Smarters or GSE", description: "Search for 'IPTV Smarters' or 'GSE Smart IPTV' and click Get to download." },
      { title: "Input Xtream Codes Login", description: "Open the player, select Xtream Codes API, and enter the login details sent to your email or WhatsApp." },
      { title: "Enjoy Flawless 4K Streaming", description: "Your live channels and on-demand movies sync instantly with full EPG program schedules." },
    ],
    apps: [
      { name: "IPTV Smarters Pro", note: "Free, reliable player designed for Apple TV.", href: "/applications/smarters" },
      { name: "GSE Smart IPTV", note: "Feature-packed player with advanced video decoders.", href: "/applications/gse-smart-iptv" },
      { name: "VLC for Apple TV", note: "Great for quick M3U playlist playback.", href: "/applications/vlc" },
    ],
    troubleshoot: [
      { problem: "App Store says app not available in region", cause: "Apple ID country restriction", solution: "Switch your Apple ID store to United States or create a US Apple ID to access all streaming apps." },
      { problem: "Audio format not decoded", cause: "Surround sound passthrough issue", solution: "In Apple TV Settings > Video and Audio > Audio Format, set Change Format to 'ON' and select Dolby Digital 5.1." },
      { problem: "Is there TiviMate for Apple TV?", cause: "TiviMate is Android-only", solution: "Use iPlayTV or IPTV Smarters Pro as the closest tvOS alternatives with similar fluid guides." },
    ],
    faq: [
      { q: "Can I get TiviMate on Apple TV 4K?", a: "No, TiviMate is exclusively built for Android. However, iPlayTV and IPTV Smarters Pro offer equally beautiful, fluid experiences on tvOS." },
      { q: "Does Strong 8K USA support Apple TV 4K HDR?", a: "Yes. Our high-bitrate live feeds and 4K VOD library fully support Apple TV 4K HDR10+ and Dolby Audio output." },
      { q: "Can I use AirPlay to stream IPTV from my iPhone to Apple TV?", a: "Yes, you can mirror or cast streams directly from your iPhone or iPad using AirPlay 2." },
    ],
  },
  xiaomi: {
    slug: "xiaomi",
    name: "Xiaomi Mi Box & TV Stick",
    os: "Android TV",
    order: 6,
    metaTitle: "Xiaomi Mi Box S & TV Stick 4K IPTV Setup Guide (2026)",
    metaDescription:
      "Setup Strong 8K USA on Xiaomi Mi Box S and Mi TV Stick 4K. Enjoy 50,000+ live TV channels with Chromecast built-in and Google Play Store support.",
    keywords: [
      "xiaomi mi box iptv",
      "xiaomi tv stick 4k iptv setup",
      "mi box s iptv player",
      "android tv stick streaming",
      "xiaomi iptv setup",
    ],
    eyebrow: "Devices · Xiaomi Mi Box",
    h1: "IPTV on Xiaomi Mi Box & TV Stick 4K",
    lead: "Affordable, certified Google TV performance. Stream live sports and premium cinema in 4K HDR on any Xiaomi streaming stick or box.",
    intro: [
      "Xiaomi Mi Box S (2nd Gen) and Xiaomi TV Stick 4K are certified Google TV devices that offer incredible value for US cord-cutters. With native Google Play Store access, built-in Chromecast, and Bluetooth remote control, they run all top IPTV players effortlessly.",
      "Pairing your Xiaomi hardware with Strong 8K USA gives you access to 50,000+ live US and international channels, pay-per-view fights, and endless movies without expensive cable contracts.",
    ],
    compatibility: [
      "Xiaomi TV Box S (1st & 2nd Generation 4K)",
      "Xiaomi TV Stick 4K and Mi TV Stick 1080p",
      "Google TV with Google Assistant voice control",
      "Dolby Vision and Dolby Atmos audio support",
    ],
    quickFacts: [
      { label: "Operating System", value: "Google TV / Android TV OS" },
      { label: "App Marketplace", value: "Official Google Play Store" },
      { label: "Recommended App", value: "TiviMate Premium / XCIPTV" },
      { label: "Resolution", value: "Up to 4K Ultra HD @ 60 FPS" },
      { label: "Casting Support", value: "Google Cast / Chromecast Built-In" },
    ],
    steps: [
      { title: "Power on Xiaomi Box", description: "Plug the Xiaomi device into your TV HDMI port and connect to your home Wi-Fi network." },
      { title: "Download TiviMate or Smarters", description: "Search for 'TiviMate' or 'IPTV Smarters Pro' on the Google Play Store and install it." },
      { title: "Enter Xtream Codes Details", description: "Launch the app and type in your Strong 8K USA server URL, username, and password." },
      { title: "Start Watching", description: "Browse live sports, news, and entertainment channels with fluid remote navigation." },
    ],
    apps: [
      { name: "TiviMate IPTV Player", note: "Smooth channel guide and recording support.", href: "/applications/tivimate" },
      { name: "IPTV Smarters Pro", note: "Great multi-screen layout for live sports.", href: "/applications/smarters" },
      { name: "XCIPTV Player", note: "Lightweight and fast on compact TV sticks.", href: "/applications/xciptv" },
    ],
    troubleshoot: [
      { problem: "Xiaomi TV Stick overheats or restarts", cause: "Powering stick from TV USB port instead of wall outlet", solution: "Always connect the Xiaomi TV stick to the included AC wall power adapter for stable voltage." },
      { problem: "Buffering during live football games", cause: "Weak Wi-Fi signal behind the TV", solution: "Use the included HDMI extender to move the stick away from TV interference or connect via an OTG Ethernet adapter." },
    ],
    faq: [
      { q: "Can Xiaomi Mi Box play 4K 60FPS IPTV streams?", a: "Yes, the Xiaomi Mi Box S and TV Stick 4K feature hardware AV1 and HEVC decoders that handle 4K 60FPS smoothly." },
      { q: "Is Google Play Store available on Xiaomi TV Stick?", a: "Yes, all Xiaomi streaming devices run certified Google TV with direct access to thousands of streaming apps." },
    ],
  },
  "nvidia-shield": {
    slug: "nvidia-shield",
    name: "Nvidia Shield TV Pro",
    os: "Android TV",
    order: 7,
    metaTitle: "Best IPTV Setup for Nvidia Shield Pro 4K (2026) — AI Upscaling & TiviMate",
    metaDescription:
      "Experience the ultimate IPTV performance on Nvidia Shield TV Pro: AI 4K upscaling, gigabit Ethernet, Dolby Vision, and TiviMate Premium multi-screen playback.",
    keywords: [
      "nvidia shield iptv",
      "best iptv player for nvidia shield pro 4k",
      "nvidia shield tivimate 4k 60fps",
      "ai upscaling iptv shield",
      "nvidia shield streaming box",
    ],
    eyebrow: "Devices · Nvidia Shield TV Pro",
    h1: "IPTV on Nvidia Shield TV Pro: The Ultimate 4K Experience",
    lead: "The undisputed king of streaming hardware. Harness Nvidia Tegra X1+ power, real-time AI 4K upscaling, and gigabit speeds with Strong 8K USA.",
    intro: [
      "For serious home theater enthusiasts and sports fans, the Nvidia Shield TV Pro is the highest-performing streaming device money can buy. Its custom Tegra X1+ processor features real-time AI upscaling that enhances standard 1080p feeds into near-4K brilliance.",
      "Combined with gigabit Ethernet, 3GB of RAM, and full Dolby Atmos passthrough, the Shield TV Pro runs TiviMate with up to 9 simultaneous multi-view screens without a stutter. Strong 8K USA provides the high-bitrate feeds necessary to showcase its full potential.",
    ],
    compatibility: [
      "Nvidia Shield TV Pro (All Editions) and Shield TV Tube",
      "Gigabit Ethernet LAN port for 1,000 Mbps throughput",
      "Dolby Vision HDR and lossless Dolby TrueHD / Atmos audio",
      "USB 3.0 ports for external SSD DVR recording",
    ],
    quickFacts: [
      { label: "Hardware Chip", value: "Nvidia Tegra X1+ with 256-core GPU" },
      { label: "Key Feature", value: "Real-Time AI 4K Upscaling @ 60 FPS" },
      { label: "Multiview Capability", value: "Up to 9 screens simultaneously" },
      { label: "Connection", value: "Gigabit Ethernet (1,000 Mbps)" },
      { label: "Best Software", value: "TiviMate Premium (Full DVR support)" },
    ],
    steps: [
      { title: "Connect via Gigabit Ethernet", description: "For zero packet loss, connect an Ethernet cable from your router directly to the Shield Pro." },
      { title: "Install TiviMate Premium", description: "Open Google Play Store on your Shield, install TiviMate, and unlock Premium for multi-screen features." },
      { title: "Configure Strong 8K USA", description: "Enter your Xtream Codes API credentials and enable hardware video acceleration." },
      { title: "Enable AI Upscaling", description: "In Shield settings, toggle AI-Enhanced upscaling to High for razor-sharp sports detail." },
    ],
    apps: [
      { name: "TiviMate IPTV Player", note: "The definitive player on Nvidia Shield Pro.", href: "/applications/tivimate" },
      { name: "Kodi Media Center", note: "Full lossless audio passthrough and PVR integration.", href: "/applications/kodi" },
      { name: "IPTV Smarters Pro", note: "Clean and accessible daily streaming app.", href: "/applications/smarters" },
    ],
    troubleshoot: [
      { problem: "Audio passthrough issues with AVR receiver", cause: "Android TV audio match settings", solution: "In Shield Settings > Device Preferences > Display & Sound > Advanced sound settings, enable Available formats > Auto." },
      { problem: "TiviMate shows frame jitter", cause: "Display refresh rate mismatch (50Hz vs 60Hz)", solution: "Enable 'Auto Frame Rate (AFR)' in TiviMate settings so your Shield matches the broadcast source frequency." },
    ],
    faq: [
      { q: "Is Nvidia Shield Pro worth it for IPTV?", a: "Yes. If you watch live sports or multi-view multiple games simultaneously, the Shield Pro is noticeably faster than any Firestick or budget box." },
      { q: "Does AI Upscaling work on live IPTV channels?", a: "Yes. Nvidia Shield's AI upscaler enhances 720p and 1080p live streams in real time up to 4K resolution." },
    ],
  },
  mag: {
    slug: "mag",
    name: "MAG Box & Stalker Middleware",
    os: "Linux / Ministra",
    order: 8,
    metaTitle: "MAG Box IPTV Setup (MAG 524, 540) — Stalker Portal URL Configuration",
    metaDescription:
      "Setup Strong 8K USA on Infomir MAG boxes (MAG 322, 524, 540). Learn how to register your MAC address and enter the Stalker portal URL for instant TV.",
    keywords: [
      "mag box iptv setup",
      "mag 524 iptv stalker portal",
      "infomir mag portal url",
      "mac address iptv registration",
      "mag box streaming",
    ],
    eyebrow: "Devices · MAG Box",
    h1: "IPTV on Infomir MAG Boxes & Stalker Portal",
    lead: "Dedicated hardware designed exclusively for television. Enjoy lightning-quick channel zapping with Strong 8K USA on MAG 322, 524, and 540 Linux receivers.",
    intro: [
      "Infomir MAG set-top boxes are legendary in the IPTV industry for their dedicated focus on pure television viewing. Running custom Linux-based Ministra firmware, MAG boxes boot directly into your channel grid with zero app menus or distractions.",
      "Strong 8K USA fully supports MAG hardware through MAC address authentication. Simply provide your MAG device MAC address (format: 00:1A:79:XX:XX:XX) and point your portal URL to our high-speed server.",
    ],
    compatibility: [
      "MAG 524, MAG 524w3, MAG 540, MAG 544 (4K HEVC Linux)",
      "MAG 322, MAG 324, MAG 420 (Legacy HD models)",
      "Dedicated infrared & Bluetooth MAG remote controls",
      "MAC address based Stalker / Ministra portal architecture",
    ],
    quickFacts: [
      { label: "Hardware Manufacturer", value: "Infomir LLC" },
      { label: "Authentication Type", value: "MAC Address (00:1A:79:XX:XX:XX)" },
      { label: "Boot Time", value: "Instant boot straight to Live TV" },
      { label: "Video Codecs", value: "HEVC / H.265, H.264, MPEG-4" },
      { label: "Network Interface", value: "100M/1000M Ethernet + Wi-Fi" },
    ],
    steps: [
      { title: "Find Your MAG MAC Address", description: "Look at the barcode sticker underneath your MAG box to find the MAC address starting with 00:1A:79." },
      { title: "Send MAC to Support", description: "When ordering Strong 8K USA, enter your MAC address in order notes or send it via WhatsApp to activate." },
      { title: "Enter Portal URL", description: "In MAG System Settings > Servers > Portals, enter Portal Name 'Strong 8K' and input the Portal URL provided." },
      { title: "Reboot and Enjoy", description: "Restart your MAG box. It will automatically load the portal and display your channel categories." },
    ],
    apps: [
      { name: "Native Stalker Portal", note: "Built directly into MAG Linux firmware.", href: "/formats/xtream-codes" },
    ],
    troubleshoot: [
      { problem: "'Your STB is blocked' message on boot", cause: "MAC address not yet registered or subscription expired", solution: "Send your MAC address to our WhatsApp support (+212625218443) for instant verification in our portal." },
      { problem: "MAG box stuck on loading portal bar", cause: "Wrong portal URL syntax or DNS issue", solution: "Verify the portal URL has no trailing spaces and that your internet router is connected." },
    ],
    faq: [
      { q: "How do I activate Strong 8K USA on a MAG box?", a: "Unlike Android where you use a username and password, MAG boxes require your device MAC address. Provide it during checkout or via WhatsApp for 60-second activation." },
      { q: "Do MAG boxes support 4K channels?", a: "Yes. Newer models like MAG 524 and MAG 540 support 4K 60FPS HEVC video streams." },
    ],
  },
  windows: {
    slug: "windows",
    name: "Windows PC & Laptop",
    os: "Windows 11 / 10",
    order: 9,
    metaTitle: "Best IPTV Players for Windows 11 & 10 PC — Setup & Download Guide",
    metaDescription:
      "Watch 50,000+ live channels on your Windows 11/10 PC. Download IPTV Smarters Pro for Windows, VLC Media Player, or MyIPTV with Strong 8K USA.",
    keywords: [
      "iptv for pc windows 11",
      "iptv smarters pro windows download",
      "vlc iptv player windows",
      "myiptv player windows 10",
      "watch iptv on pc",
    ],
    eyebrow: "Devices · Windows PC",
    h1: "IPTV for Windows PC & Laptop (Windows 11 / 10)",
    lead: "Turn your desktop monitor or laptop into a live 4K television. Stream live sports, financial news, and movies with zero latency on Windows.",
    intro: [
      "Watching IPTV on a Windows 11 or Windows 10 computer gives you the flexibility of multi-tasking while streaming live sports, news, and entertainment. Whether you are at your office desk or gaming station, Strong 8K USA streams effortlessly.",
      "You have multiple top-tier player choices on Windows: dedicated native apps like IPTV Smarters Pro for Windows, classic media tools like VLC Player, or modern Windows Store apps like MyIPTV Player.",
    ],
    compatibility: [
      "Windows 11, Windows 10, Windows 8.1 (64-bit)",
      "Supports multi-monitor desktop setups",
      "Hardware acceleration with Intel, AMD, and Nvidia graphics",
      "Supports M3U playlists and Xtream Codes API",
    ],
    quickFacts: [
      { label: "Operating System", value: "Microsoft Windows 11 & 10" },
      { label: "Top Free App", value: "VLC Media Player (Universal)" },
      { label: "Top Dedicated App", value: "IPTV Smarters Pro for Windows" },
      { label: "Display Support", value: "Full 4K, Ultrawide & Multi-Monitor" },
      { label: "Connection Speed", value: "Ethernet or Wi-Fi (20+ Mbps)" },
    ],
    steps: [
      { title: "Download IPTV Smarters for Windows", description: "Download the official IPTV Smarters .exe installer for Windows and install it." },
      { title: "Launch and Select Xtream API", description: "Open the app and choose 'Login with Xtream Codes API'." },
      { title: "Enter Account Credentials", description: "Enter your Any Name, Server URL, Username, and Password provided in your Strong 8K USA email." },
      { title: "Watch in Fullscreen or Windowed", description: "Stream live sports while working or expand to fullscreen for a full home theater experience." },
    ],
    apps: [
      { name: "IPTV Smarters Pro Windows", note: "Dedicated desktop interface with EPG and categories.", href: "/applications/smarters" },
      { name: "VLC Media Player", note: "Zero-bloat M3U playlist player.", href: "/applications/vlc" },
      { name: "Kodi Windows", note: "Full home theater PVR center on PC.", href: "/applications/kodi" },
    ],
    troubleshoot: [
      { problem: "VLC loops or rapidly skips through channels", cause: "VLC trying to play non-responding stream or wrong loop setting", solution: "Click the 'Loop' toggle in VLC to deactivate it, or use IPTV Smarters which manages stream switching automatically." },
      { problem: "High CPU usage on Windows laptop", cause: "Software video decoding instead of GPU decoding", solution: "In VLC Tools > Preferences > Input/Codecs, set 'Hardware-accelerated decoding' to 'Automatic'." },
    ],
    faq: [
      { q: "Can I watch IPTV on my PC at work or when traveling?", a: "Yes. With Strong 8K USA, you can log in on your laptop anywhere with an active internet connection." },
      { q: "Is there a web player for Strong 8K USA?", a: "Yes, we provide an encrypted web browser player so you can stream live TV directly inside Chrome, Edge, or Firefox without installing software." },
    ],
  },
  mac: {
    slug: "mac",
    name: "Mac (macOS)",
    os: "macOS Sonoma / Ventura",
    order: 10,
    metaTitle: "Best IPTV Players for Mac (macOS) — Setup & Player Guide (2026)",
    metaDescription:
      "Stream Strong 8K USA on MacBook Pro, MacBook Air, and iMac. Discover top macOS IPTV players: IPTV Smarters Mac, IINA, and GSE Smart IPTV.",
    keywords: [
      "iptv for mac",
      "iptv player macos",
      "iptv smarters pro mac",
      "iina iptv mac",
      "gse smart iptv macbook",
      "stream iptv mac",
    ],
    eyebrow: "Devices · Mac (macOS)",
    h1: "IPTV for Mac & MacBook (Apple Silicon & Intel)",
    lead: "Enjoy Retina display clarity and flawless battery efficiency on macOS. Discover the best Mac IPTV apps for live sports and cinema.",
    intro: [
      "Mac users appreciate sleek design, high-resolution Retina displays, and battery efficiency. Thanks to Apple Silicon (M1, M2, M3, M4 chips), Macs handle 4K 60 FPS video streams with virtually zero power consumption.",
      "Whether you prefer dedicated apps like IPTV Smarters Pro for macOS, modern open-source players like IINA, or universal tools like VLC, Strong 8K USA delivers ultra-fast live television straight to your Mac.",
    ],
    compatibility: [
      "macOS Sequoia, Sonoma, Ventura, Monterey",
      "Optimized for Apple Silicon (M1, M2, M3, M4) & Intel Macs",
      "Supports Picture-in-Picture (PiP) multitasking",
      "AirPlay to Apple TV and external displays",
    ],
    quickFacts: [
      { label: "Operating System", value: "Apple macOS (Sonoma / Ventura)" },
      { label: "Silicon Architecture", value: "Native Apple Silicon & Intel" },
      { label: "Recommended App", value: "IPTV Smarters Mac / IINA" },
      { label: "Multitasking Mode", value: "Native macOS Picture-in-Picture" },
      { label: "Stream Formats", value: "Xtream API & M3U8 Playlist" },
    ],
    steps: [
      { title: "Download IPTV Smarters for Mac", description: "Download the macOS .dmg installer and drag the app into your Applications folder." },
      { title: "Grant Network Permissions", description: "Open the app and grant network permissions when prompted by macOS Gatekeeper." },
      { title: "Enter Xtream Codes API", description: "Enter your Strong 8K USA server URL, username, and password." },
      { title: "Enable Picture-in-Picture", description: "Pop out the video window and watch live sports while working in other Mac apps." },
    ],
    apps: [
      { name: "IPTV Smarters Mac", note: "Clean categorized player built for macOS.", href: "/applications/smarters" },
      { name: "VLC for Mac", note: "Reliable open-source media player.", href: "/applications/vlc" },
      { name: "GSE Smart IPTV", note: "Advanced playlist player for macOS.", href: "/applications/gse-smart-iptv" },
    ],
    troubleshoot: [
      { problem: "'App cannot be opened because developer cannot be verified'", cause: "macOS Gatekeeper security check", solution: "Right-click (Control-click) the app icon and select 'Open', then click 'Open' in the dialog box." },
    ],
    faq: [
      { q: "Can I use Picture-in-Picture on Mac with IPTV?", a: "Yes. Native macOS players like IINA and web browser players allow full Picture-in-Picture mode so you can watch live TV while working." },
      { q: "Does IPTV work on M1/M2/M3 MacBooks?", a: "Flawlessly. Apple Silicon video decoders render 4K 60FPS video with near-zero CPU usage and exceptional battery life." },
    ],
  },
  "iphone-ipad": {
    slug: "iphone-ipad",
    name: "iPhone & iPad (iOS / iPadOS)",
    os: "iOS / iPadOS",
    order: 11,
    metaTitle: "Best IPTV Apps for iPhone & iPad (iOS 2026) — Mobile Streaming Guide",
    metaDescription:
      "Watch live sports and movies on iPhone 15/16 and iPad. Discover top iOS IPTV players: Smarters Player Lite, GSE Smart IPTV, and VLC on the App Store.",
    keywords: [
      "iptv for iphone",
      "best iptv app ios",
      "iptv ipad",
      "smarters player lite ios",
      "gse smart iptv ios",
      "stream live tv on iphone",
    ],
    eyebrow: "Devices · iPhone & iPad",
    h1: "IPTV for iPhone & iPad (iOS / iPadOS)",
    lead: "Never miss a game on the go. Stream live 4K & HD television on 5G and Wi-Fi across all iPhone and iPad models with Strong 8K USA.",
    intro: [
      "With high-density Super Retina OLED screens and ultra-fast 5G cellular connectivity, modern iPhones and iPads are incredible portable televisions. Whether traveling, commuting, or relaxing in bed, Strong 8K USA keeps you connected to live TV.",
      "The Apple App Store hosts several approved IPTV applications like Smarters Player Lite and GSE Smart IPTV that sync seamlessly with your Strong 8K USA subscription using Xtream Codes API.",
    ],
    compatibility: [
      "iPhone 12 through iPhone 16 / Pro Max (iOS 15 to 18)",
      "iPad Pro, iPad Air, iPad mini, and standard iPad",
      "Seamless Picture-in-Picture (PiP) background playback",
      "AirPlay 2 streaming to any Smart TV or Roku",
    ],
    quickFacts: [
      { label: "Operating System", value: "Apple iOS & iPadOS" },
      { label: "App Source", value: "Official Apple App Store" },
      { label: "Top Free App", value: "Smarters Player Lite" },
      { label: "Cellular Support", value: "Optimized for 5G & LTE Data" },
      { label: "Casting Feature", value: "AirPlay 2 & Chromecast" },
    ],
    steps: [
      { title: "Open App Store on iPhone/iPad", description: "Open the App Store and search for 'Smarters Player Lite'." },
      { title: "Download the App", description: "Click Get and verify with Face ID or Touch ID to install the free player." },
      { title: "Login with Xtream Codes", description: "Open the app, select 'Login with Xtream Codes API', and type in your Strong 8K USA login details." },
      { title: "Stream Anywhere", description: "Access live channels, EPG, and movies with touch gestures and Picture-in-Picture." },
    ],
    apps: [
      { name: "Smarters Player Lite", note: "The most popular free iOS player.", href: "/applications/smarters" },
      { name: "GSE Smart IPTV", note: "Advanced features and local recording.", href: "/applications/gse-smart-iptv" },
      { name: "VLC for Mobile", note: "Universal video tool with M3U support.", href: "/applications/vlc" },
    ],
    troubleshoot: [
      { problem: "Video buffers on cellular 5G data", cause: "Carrier data saver throttling streaming video", solution: "In iOS Settings > Cellular > Cellular Data Options, ensure 'Allow More Data on 5G' is selected." },
    ],
    faq: [
      { q: "Can I use the same Strong 8K USA subscription on both TV and iPhone?", a: "Yes. Our multi-connection plans allow you to stream on your living room TV and mobile device simultaneously." },
      { q: "Does Smarters Player Lite cost money on iOS?", a: "No, Smarters Player Lite is free to download from the Apple App Store." },
    ],
  },
};

export const DEVICE_SLUGS = Object.keys(DEVICES);
export const DEVICE_LIST = Object.values(DEVICES).sort((a, b) => a.order - b.order);

export const DEVICE_IMAGES: Record<string, { src: string; alt: string; width: number; height: number }> = {
  samsung: {
    src: "/images/lucid-origin_Modern_streaming_setup_with_encrypted_VPN_tunnel_visualization_Smart_TV_laptop_a-0.jpg",
    alt: "IPTV on Samsung Smart TV Tizen OS",
    width: 600,
    height: 400,
  },
  lg: {
    src: "/images/lucid-origin_Modern_streaming_setup_with_encrypted_VPN_tunnel_visualization_Smart_TV_laptop_a-0.jpg",
    alt: "IPTV on LG Smart TV webOS",
    width: 600,
    height: 400,
  },
  "android-tv": {
    src: "/images/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg",
    alt: "IPTV on Android TV Box & SuperBox Alternative",
    width: 600,
    height: 400,
  },
  firestick: {
    src: "/images/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg",
    alt: "Setup IPTV on Amazon Firestick 4K",
    width: 600,
    height: 400,
  },
  "apple-tv": {
    src: "/images/lucid-origin_Modern_streaming_setup_with_encrypted_VPN_tunnel_visualization_Smart_TV_laptop_a-0.jpg",
    alt: "IPTV on Apple TV 4K tvOS",
    width: 600,
    height: 400,
  },
  xiaomi: {
    src: "/images/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg",
    alt: "IPTV on Xiaomi Mi Box S & TV Stick",
    width: 600,
    height: 400,
  },
  "nvidia-shield": {
    src: "/images/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg",
    alt: "IPTV on Nvidia Shield TV Pro",
    width: 600,
    height: 400,
  },
  mag: {
    src: "/images/SMARTERS-PRO-1-YEAR-SUBSCRIPTION_1.jpg",
    alt: "IPTV on Infomir MAG Box Stalker Portal",
    width: 600,
    height: 400,
  },
  windows: {
    src: "/images/SMARTERS-PRO-1-YEAR-SUBSCRIPTION_1.jpg",
    alt: "IPTV for Windows 11 PC & Laptop",
    width: 600,
    height: 400,
  },
  mac: {
    src: "/images/SMARTERS-PRO-1-YEAR-SUBSCRIPTION_1.jpg",
    alt: "IPTV for Mac macOS",
    width: 600,
    height: 400,
  },
  "iphone-ipad": {
    src: "/images/SMARTERS-PRO-1-YEAR-SUBSCRIPTION_1.jpg",
    alt: "IPTV on iPhone and iPad",
    width: 600,
    height: 400,
  },
};

