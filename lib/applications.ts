/** Application-guide content for the /applications cluster. Keyed by slug. */

export type AppGuide = {
  slug: string;
  name: string;
  platforms: string;
  order: number;
  free: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  steps: { title: string; description: string }[];
  pros: string[];
  cons: string[];
  problems: { q: string; a: string }[];
  devices: { label: string; href: string }[];
};

export const APPLICATIONS: Record<string, AppGuide> = {
  smarters: {
    slug: "smarters",
    name: "IPTV Smarters Pro",
    platforms: "Android, iOS, Fire TV, Windows, Mac, Smart TV",
    order: 1,
    free: true,
    metaTitle: "IPTV Smarters Pro Setup Guide (2026) — APK, Xtream Codes & Login",
    metaDescription:
      "Complete setup guide for IPTV Smarters Pro on Firestick, Android, iOS, Windows, and Smart TVs. Step-by-step Xtream Codes API login with Strong 8K USA.",
    keywords: [
      "iptv smarters pro",
      "iptv smarters pro setup",
      "iptv smarters pro apk",
      "iptv smarters pro windows",
      "iptv smarters player",
      "iptv smarters login",
      "iptv smarters firestick",
    ],
    eyebrow: "Applications · IPTV Smarters Pro",
    h1: "IPTV Smarters Pro: The #1 All-in-One Streaming Player",
    lead: "The most widely used IPTV application in the world. Free, versatile, and beginner-friendly across Firestick, Android, iOS, Windows, and Smart TVs.",
    intro: [
      "IPTV Smarters Pro (also known as Smarters Player Pro) is a free, feature-packed multimedia player application that transforms your live TV and movie experience. It natively supports both Xtream Codes API and M3U playlists, automatically organizing channels by categories with an integrated TV guide (EPG).",
      "It is important to understand that IPTV Smarters is a player, not a content provider. It requires an active high-speed subscription to function. Strong 8K USA integrates with IPTV Smarters in under 60 seconds using your secure Xtream Codes API login.",
      "With official availability across Amazon Firestick, Google Play, Apple App Store, Samsung Tizen, LG webOS, and Windows/Mac desktop apps, IPTV Smarters Pro is the perfect foundation for any streaming setup.",
    ],
    steps: [
      { title: "Download and Install the App", description: "Install IPTV Smarters Pro from your device's official app store or via the Downloader app on Firestick." },
      { title: "Select 'Login with Xtream Codes API'", description: "Always select the Xtream Codes API option — it automatically downloads channel logos, categories, and EPG schedules." },
      { title: "Enter Strong 8K USA Credentials", description: "Enter any name for the profile, followed by the Server URL, Username, and Password provided in your welcome message." },
      { title: "Sync Data and Start Streaming", description: "Click 'Add User'. The app will download Live TV, Movies, and Series categories within seconds." },
    ],
    pros: [
      "100% Free with zero intrusive pop-up ads",
      "Available across virtually all streaming platforms and operating systems",
      "Intuitive dashboard separating Live TV, Movies, Series, and Catch-up",
      "Built-in parental control and multi-screen support",
    ],
    cons: [
      "Lacks the advanced custom TV guide styling of TiviMate",
      "No cloud DVR recording capability",
    ],
    problems: [
      { q: "Why does IPTV Smarters show 'Invalid Details' or 'Failed to Connect'?", a: "This is almost always due to an accidental space before or after the Server URL, Username, or Password. Double-check your login details exactly as sent by Strong 8K USA." },
      { q: "How do I fix buffering in IPTV Smarters Pro?", a: "Inside Smarters Settings > Stream Format, switch between MPEGTS (.ts) and HLS (.m3u8). Also ensure your device is connected via Ethernet or 5GHz Wi-Fi." },
      { q: "Where can I download IPTV Smarters Pro APK safely?", a: "On Android and Firestick, install Downloader and use reputable sources or the official Smarters website. Never download modified or cracked APKs that compromise device security." },
    ],
    devices: [
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "Windows PC", href: "/appareils/windows" },
    ],
  },
  tivimate: {
    slug: "tivimate",
    name: "TiviMate IPTV Player",
    order: 2,
    free: false,
    platforms: "Android TV, Fire OS, Google TV",
    metaTitle: "TiviMate IPTV Player Guide (2026) — Firestick, Premium & Setup",
    metaDescription:
      "TiviMate IPTV Player is the ultimate cable-like player for Firestick & Android TV. Setup Strong 8K USA with multiview, recording, and instant EPG sync.",
    keywords: [
      "tivimate iptv player guide",
      "tivimate firestick",
      "tivimate companion",
      "tivimate premium setup",
      "tivimate login",
      "best iptv player android",
    ],
    eyebrow: "Applications · TiviMate",
    h1: "TiviMate IPTV Player: The Gold Standard for TV Screens",
    lead: "Designed from the ground up for living room big screens. TiviMate delivers an unmatched cable-like electronic program guide, multi-screen multiview, and scheduled DVR recording.",
    intro: [
      "Ask any experienced cord-cutter in the United States what the best IPTV player is, and the answer is almost universally TiviMate. Built specifically for television remotes on Android TV and Firestick, TiviMate delivers lightning-fast channel zapping and an ultra-modern EPG grid.",
      "TiviMate offers a capable free version, but upgrading to TiviMate Premium unlocks game-changing features: multiview (watching up to 9 games simultaneously on one screen), local DVR recording to USB/SSD, custom channel groups, and automatic EPG updates.",
      "Pairing Strong 8K USA with TiviMate gives you the premier streaming experience on the market, combining rock-solid 4K 60FPS feeds with the slickest user interface in digital television.",
    ],
    steps: [
      { title: "Install TiviMate on Firestick or Android TV", description: "Download TiviMate directly from the Google Play Store or sideload it on Firestick using Downloader." },
      { title: "Select 'Add Playlist' > 'Xtream Codes'", description: "Choose Xtream Codes login for seamless automated channel and EPG synchronization." },
      { title: "Input Strong 8K USA Server and Login", description: "Type in your Server URL, Username, and Password, and check 'Include TV guide'." },
      { title: "Customize Groups & Enjoy Multiview", description: "Organize your favorite sports and movie channels, customize EPG display time, and start streaming." },
    ],
    pros: [
      "The fastest, most elegant television guide (EPG) interface available",
      "Watch up to 9 channels simultaneously with customizable Multiview",
      "Scheduled DVR recording to local storage or NAS network drives",
      "Automatic frame rate matching (AFR) for jitter-free 60FPS sports",
    ],
    cons: [
      "Not available on Apple tvOS or Samsung/LG proprietary stores",
      "Premium version requires a small one-time or annual license",
    ],
    problems: [
      { q: "How do I purchase TiviMate Premium if I use a Firestick?", a: "Because Firestick lacks the Google Play Store, purchase your license using the 'TiviMate Companion' app on an Android phone, or through an Android emulator on PC, then log into TiviMate on your Firestick." },
      { q: "Why is the EPG guide blank on some channels?", a: "In TiviMate Settings > EPG > Past days to keep EPG, set to 1 or 2 days, and click 'Update EPG'. Strong 8K USA refreshes EPG tables every 4 hours automatically." },
    ],
    devices: [
      { label: "Amazon Firestick 4K", href: "/appareils/firestick" },
      { label: "Nvidia Shield TV Pro", href: "/appareils/nvidia-shield" },
      { label: "Android TV & SuperBox Alternative", href: "/appareils/android-tv" },
      { label: "Xiaomi Mi Box", href: "/appareils/xiaomi" },
    ],
  },
  vlc: {
    slug: "vlc",
    name: "VLC Media Player",
    order: 3,
    free: true,
    platforms: "Windows, Mac, Linux, Android, iOS",
    metaTitle: "How to Play IPTV M3U Playlist on VLC Media Player (2026 Guide)",
    metaDescription:
      "Play your Strong 8K USA M3U playlist on VLC Media Player. Free setup guide for Windows 11, Mac, and mobile devices with zero buffering.",
    keywords: [
      "vlc iptv stream m3u",
      "how to play m3u playlist in vlc",
      "vlc network stream",
      "vlc media player iptv",
      "test iptv m3u link vlc",
    ],
    eyebrow: "Applications · VLC Media Player",
    h1: "VLC Media Player: The Universal Free IPTV Reader",
    lead: "Open-source, lightweight, and 100% free. VLC Media Player plays any M3U playlist or direct video stream with zero codecs to install.",
    intro: [
      "VLC Media Player by VideoLAN is the Swiss Army knife of digital video. Completely free and open-source, VLC contains built-in hardware decoding for every major video and audio codec, including HEVC, AV1, and AC3.",
      "While VLC does not offer a fancy cable-box guide layout, it is the ultimate tool for testing M3U links, diagnosing stream issues, and watching live TV on desktop PCs and laptops with minimal system resources.",
    ],
    steps: [
      { title: "Download and Install VLC", description: "Get the latest official build from videolan.org for Windows or Mac." },
      { title: "Open Network Stream", description: "In VLC, click Media > Open Network Stream (or press Ctrl+N / Cmd+N)." },
      { title: "Paste Strong 8K USA M3U URL", description: "Paste your dedicated M3U playlist link received in your welcome package and click Play." },
      { title: "View Playlist Channel List", description: "Press Ctrl+L (or Cmd+L) to reveal the complete channel playlist, then search and double-click any channel." },
    ],
    pros: [
      "Completely free, open-source, and ad-free forever",
      "Plays almost any video and audio format natively",
      "Exceptional diagnostic tool to verify stream availability",
    ],
    cons: [
      "No graphical TV guide (EPG) grid interface",
      "Requires manually toggling loop settings to avoid skipping channels",
    ],
    problems: [
      { q: "Why does VLC keep skipping rapidly through channels?", a: "VLC treats the playlist like music tracks. If a stream takes more than a second to connect, it skips to the next. Click the 'Loop' icon at the bottom of VLC to deactivate continuous playback." },
    ],
    devices: [
      { label: "Windows PC", href: "/appareils/windows" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
    ],
  },
  kodi: {
    slug: "kodi",
    name: "Kodi Media Center",
    order: 4,
    free: true,
    platforms: "Windows, Mac, Android, Fire OS, Linux",
    metaTitle: "Kodi IPTV Simple Client Setup Guide (2026) — PVR Live TV & EPG",
    metaDescription:
      "Configure PVR IPTV Simple Client on Kodi 21 for live TV and EPG. Complete step-by-step tutorial with Strong 8K USA for Firestick and PC.",
    keywords: [
      "kodi iptv simple client setup",
      "pvr iptv simple client guide",
      "kodi live tv addon",
      "kodi epg xmltv url",
      "kodi 21 iptv configuration",
    ],
    eyebrow: "Applications · Kodi",
    h1: "Kodi & PVR IPTV Simple Client Setup Guide",
    lead: "Transform your home theater PC or TV box into a fully customized media command center with Kodi's built-in PVR IPTV engine.",
    intro: [
      "Kodi is the most customizable open-source home theater platform in existence. Beyond playing local media, Kodi features an integrated Live TV engine powered by the official 'PVR IPTV Simple Client' addon.",
      "With Kodi, you get a full TV guide, channel logos, EPG reminders, and seamless integration with your home audio system, all powered by Strong 8K USA's high-speed stream feeds.",
    ],
    steps: [
      { title: "Install Kodi", description: "Download Kodi on your streaming box, PC, or Firestick." },
      { title: "Enable PVR IPTV Simple Client", description: "Navigate to Add-ons > My Add-ons > PVR Clients > PVR IPTV Simple Client, and click Enable." },
      { title: "Add M3U and EPG URLs", description: "In the addon settings, input your Strong 8K USA M3U playlist URL under General, and XMLTV EPG URL under EPG settings." },
      { title: "Restart Kodi and Open TV Menu", description: "Restart Kodi. The top-level 'TV' menu will now show your live channels, categories, and electronic guide." },
    ],
    pros: [
      "Extreme customization with skins and audio passthrough",
      "Integrates live TV seamlessly with local movie libraries",
      "100% free and open-source",
    ],
    cons: [
      "Steeper learning curve than plug-and-play apps like Smarters",
      "Initial EPG caching can take a few minutes on low-spec hardware",
    ],
    problems: [
      { q: "Why is the TV tab missing in Kodi?", a: "The TV tab only appears after PVR IPTV Simple Client is enabled and populated with a valid M3U playlist URL, followed by a Kodi restart." },
    ],
    devices: [
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Nvidia Shield TV Pro", href: "/appareils/nvidia-shield" },
      { label: "Windows PC", href: "/appareils/windows" },
    ],
  },
  "gse-smart-iptv": {
    slug: "gse-smart-iptv",
    name: "GSE Smart IPTV",
    order: 5,
    free: true,
    platforms: "iOS, tvOS, Android, Mac",
    metaTitle: "GSE Smart IPTV Setup (2026) — Apple TV, iOS & Xtream Codes Guide",
    metaDescription:
      "How to configure GSE Smart IPTV on iPhone, iPad, and Apple TV 4K. Complete walkthrough for Xtream Codes API and M3U playlists with Strong 8K USA.",
    keywords: [
      "gse smart iptv setup",
      "gse smart iptv ios apple tv",
      "gse iptv xtream api",
      "gse player playlist m3u",
      "gse smart iptv remote playlist",
    ],
    eyebrow: "Applications · GSE Smart IPTV",
    h1: "GSE Smart IPTV: The Premier Player for Apple Ecosystem",
    lead: "A veteran streaming solution renowned for rock-solid stability across Apple TV 4K, iPhone, iPad, and macOS.",
    intro: [
      "GSE Smart IPTV is an advanced, complete user-defined Advanced IPTV solution for live and non-live TV/stream. It is particularly popular among Apple users because it offers a native tvOS and iOS experience with extensive codec support.",
      "GSE Smart IPTV supports both Xtream Codes API and M3U remote playlists, dynamic language switching, multiple EPG sources, and local stream recording.",
    ],
    steps: [
      { title: "Install from the App Store", description: "Download GSE Smart IPTV on your iOS or Apple TV device." },
      { title: "Select Xtream Codes API", description: "Open the menu, click 'Xtream Codes API', then click the '+' icon to add a new server." },
      { title: "Enter Strong 8K USA Details", description: "Fill in Server URL, Username, and Password, then click Save." },
      { title: "Load Channels & Enjoy", description: "Tap on your saved server to browse Live TV, VOD, and Series with full EPG support." },
    ],
    pros: [
      "Native Apple TV and iOS support with AirPlay compatibility",
      "Robust video decoder handles varied stream formats smoothly",
      "Supports multiple playlists and EPG sources",
    ],
    cons: [
      "Interface design feels more utilitarian than TiviMate",
    ],
    problems: [
      { q: "How do I fix black screen on GSE Smart IPTV?", a: "In player settings, switch the internal video player engine from 'Default' to 'VLC Player' or 'FFmpeg'." },
    ],
    devices: [
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
    ],
  },
  "ott-navigator": {
    slug: "ott-navigator",
    name: "OTT Navigator IPTV",
    order: 6,
    free: true,
    platforms: "Android, Android TV, Fire OS",
    metaTitle: "OTT Navigator IPTV Setup Guide (2026) — Features, Codecs & Guide",
    metaDescription:
      "Deep dive into OTT Navigator IPTV on Android TV and Firestick. Advanced codec customization, picture-in-picture, and Strong 8K USA integration.",
    keywords: [
      "ott navigator iptv setup",
      "ott navigator premium apk",
      "ott navigator codecs",
      "studio mode ott navigator",
      "ott navigator picture in picture",
    ],
    eyebrow: "Applications · OTT Navigator",
    h1: "OTT Navigator IPTV: Extreme Customization for Power Users",
    lead: "The most feature-dense IPTV player for Android TV. Advanced codec tuning, Studio multi-screen mode, and comprehensive metadata integration.",
    intro: [
      "For users who love granular control over video decoders, audio tracks, buffer sizes, and layout customization, OTT Navigator is an extraordinary tool. It rivals TiviMate in features while offering deep customization of media codecs.",
      "OTT Navigator works effortlessly with Strong 8K USA via Xtream Codes or M3U, featuring automatic channel grouping, catch-up TV support, and a dedicated 'Studio Mode' for monitoring multiple channels simultaneously.",
    ],
    steps: [
      { title: "Install OTT Navigator", description: "Install from the Google Play Store or sideload the APK onto your Firestick." },
      { title: "Add Provider", description: "Go to Settings > Provider > Add Provider > Xtream Codes." },
      { title: "Enter Login Information", description: "Input your Strong 8K USA server URL, username, and password." },
      { title: "Apply Media Codecs", description: "Let the playlist sync and start browsing your 50,000+ live channels." },
    ],
    pros: [
      "Incredible technical customization of hardware and software codecs",
      "Picture-in-Picture and Studio Multi-View modes",
      "Active development with frequent updates",
    ],
    cons: [
      "Settings menu can be overwhelming for total beginners",
    ],
    problems: [
      { q: "Why is video lagging in OTT Navigator?", a: "Go to Settings > Playback > Codec, and switch from Software to Hardware (MediaCodec)." },
    ],
    devices: [
      { label: "Android TV Box", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Nvidia Shield TV Pro", href: "/appareils/nvidia-shield" },
    ],
  },
  xciptv: {
    slug: "xciptv",
    name: "XCIPTV Player",
    order: 7,
    free: true,
    platforms: "Android, Android TV, Fire OS",
    metaTitle: "XCIPTV Player Setup (2026) — Remote-Friendly Player for Firestick",
    metaDescription:
      "Setup XCIPTV Player on Firestick and Android TV with Strong 8K USA. Dual built-in players (ExoPlayer & VLC), clean UI, and instant Xtream login.",
    keywords: [
      "xciptv player setup",
      "xciptv apk download",
      "xciptv xtream codes login",
      "xciptv firestick",
      "xciptv vlc exo player",
    ],
    eyebrow: "Applications · XCIPTV Player",
    h1: "XCIPTV Player: Clean, Remote-Optimized Streaming",
    lead: "A fast, lightweight, and modern player featuring dual internal media players (ExoPlayer and VLC) for effortless TV remote navigation.",
    intro: [
      "XCIPTV Player by Ottrun is one of the cleanest and most accessible players on Android and Fire TV. Designed with large tiles and prominent categories, it is exceptionally easy to operate for family members of all ages.",
      "A standout feature of XCIPTV is its dual built-in media engines (ExoPlayer and VLC). If a specific live channel or movie audio codec ever experiences an issue, switching players takes just one click inside settings.",
    ],
    steps: [
      { title: "Download XCIPTV", description: "Search for 'XCIPTV Player' on Google Play Store or install via Downloader on Firestick." },
      { title: "Enter Xtream Codes Credentials", description: "Launch the app and enter the Server URL, Username, and Password from Strong 8K USA." },
      { title: "Sign In", description: "Click Sign In to download channel lists, EPG, and VOD categories." },
    ],
    pros: [
      "Clean, modern tile-based interface ideal for living rooms",
      "Dual built-in video players (ExoPlayer + VLC) solve codec incompatibilities",
      "Built-in speed test tool to measure real-time streaming bandwidth",
    ],
    cons: [
      "Limited advanced EPG customization compared to TiviMate",
    ],
    problems: [
      { q: "What should I do if a channel has sound but no picture?", a: "In XCIPTV Settings > Player Selection, toggle the player from ExoPlayer to Built-in VLC Player." },
    ],
    devices: [
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Android TV", href: "/appareils/android-tv" },
    ],
  },
  "ibo-player": {
    slug: "ibo-player",
    name: "IBO Player Pro",
    order: 8,
    free: false,
    platforms: "Samsung Tizen, LG webOS, Android, iOS, Firestick",
    metaTitle: "IBO Player Pro Activation & Setup (2026) — Samsung & LG Smart TV Guide",
    metaDescription:
      "How to setup and activate IBO Player Pro on Samsung Tizen, LG webOS, and Firestick with Strong 8K USA. Fast channel zapping and full 4K HDR playback.",
    keywords: [
      "ibo player activation",
      "ibo player pro smart tv",
      "how to activate ibo player",
      "ibo player samsung",
      "ibo player lg webos",
    ],
    eyebrow: "Applications · IBO Player Pro",
    h1: "IBO Player Pro: The Fastest Player on Samsung & LG Smart TVs",
    lead: "The benchmark player for Smart TVs. Enjoy blazing-fast zap speeds and smooth 4K 60FPS playback on Samsung Tizen and LG webOS.",
    intro: [
      "For owners of Samsung Smart TVs (Tizen OS) and LG Smart TVs (webOS), IBO Player Pro has emerged as the premier streaming application. While other Smart TV apps can feel sluggish, IBO Player is hyper-optimized for television hardware.",
      "Setting up IBO Player is remarkably easy: upon launching, the app displays your Device ID and Device Key. You can upload your Strong 8K USA M3U or Xtream Codes details remotely from your phone or PC via the IBO web portal.",
    ],
    steps: [
      { title: "Install from TV Store", description: "Search for 'IBO Player' in the Samsung Apps Store or LG Content Store and install it." },
      { title: "Note Device ID & Key", description: "Launch the app and write down the Device ID and Device Key displayed on screen." },
      { title: "Upload Playlist via Web Portal", description: "On your phone or computer, visit iboplayer.com/device, log in with your credentials, and paste your Strong 8K USA details." },
      { title: "Reload TV App", description: "Click Reload on your TV app and start streaming immediately." },
    ],
    pros: [
      "Blazing-fast channel change times on Smart TVs",
      "Remote web portal management makes typing credentials effortless",
      "Crisp 4K HDR and Dolby Vision passthrough",
    ],
    cons: [
      "Requires a small one-time lifetime license fee after a free 7-day trial",
    ],
    problems: [
      { q: "How much does IBO Player activation cost?", a: "IBO Player offers a free 7-day trial, after which a lifetime activation license costs approximately $8. Strong 8K USA subscriptions can be paired with any player of your choice." },
    ],
    devices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Firestick 4K", href: "/appareils/firestick" },
    ],
  },
  "perfect-player": {
    slug: "perfect-player",
    name: "Perfect Player IPTV",
    order: 9,
    free: true,
    platforms: "Android, Windows",
    metaTitle: "Perfect Player IPTV Setup Guide (2026) — M3U & EPG Configuration",
    metaDescription:
      "Configure Perfect Player IPTV on Android TV and Windows PC. Setup guide for M3U playlist URLs and XMLTV EPG guides with Strong 8K USA.",
    keywords: [
      "perfect player iptv setup",
      "perfect player m3u url",
      "perfect player epg",
      "perfect player download",
    ],
    eyebrow: "Applications · Perfect Player",
    h1: "Perfect Player IPTV: Classic, Lightweight Performance",
    lead: "A lightweight, low-resource player renowned for running smoothly even on older Android TV boxes and budget streaming sticks.",
    intro: [
      "Perfect Player IPTV is a classic set-top box style IPTV/Media player for watching videos on TVs, tablets, and smartphones. It uses minimal system RAM and CPU, making it an excellent choice for low-spec streaming devices.",
      "It supports M3U and XSPF playlists, XMLTV and JTV EPG formats, and scalable on-screen display (OSD) that adapts to any screen resolution.",
    ],
    steps: [
      { title: "Install Perfect Player", description: "Download from Google Play Store or APK repository." },
      { title: "Go to Settings > General", description: "Click the gear icon and select General > Playlist." },
      { title: "Enter M3U URL", description: "Paste your Strong 8K USA M3U link and give it a name." },
      { title: "Add EPG URL", description: "Under EPG, paste the XMLTV URL provided in your activation message." },
    ],
    pros: [
      "Extremely low CPU and RAM footprint",
      "Customizable OSD scale and font sizes",
    ],
    cons: [
      "User interface looks dated compared to modern alternatives like TiviMate",
    ],
    problems: [
      { q: "Why is the channel list unorganized?", a: "Make sure 'Show channel groups' is enabled in Settings > GUI > Show channel groups." },
    ],
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Windows PC", href: "/appareils/windows" },
    ],
  },
  televizo: {
    slug: "televizo",
    name: "Televizo IPTV Player",
    order: 10,
    free: true,
    platforms: "Android, Android TV",
    metaTitle: "Televizo IPTV Player Guide (2026) — Android & Fire TV Setup",
    metaDescription:
      "How to setup Televizo IPTV player on Android phones and TV boxes. Modern guide with parental controls, subtitle selection, and Strong 8K USA.",
    keywords: [
      "televizo iptv player",
      "televizo setup guide",
      "televizo android tv",
      "televizo m3u player",
    ],
    eyebrow: "Applications · Televizo",
    h1: "Televizo IPTV Player: Modern & Intuitive Streaming",
    lead: "A sleek, contemporary Android player offering fluid animations, multiple audio track selection, and parental controls.",
    intro: [
      "Televizo is a modern IPTV player for Android phones, tablets, and Android TV boxes. It features an attractive dark-mode interface, support for multiple playlists, and comprehensive subtitle and audio track switching.",
      "Televizo connects to Strong 8K USA via Xtream Codes API or M3U link, delivering instant live streaming and on-demand movies.",
    ],
    steps: [
      { title: "Install Televizo", description: "Download from Google Play Store on Android or Android TV." },
      { title: "Click 'Create Playlist'", description: "Choose 'New Xtream Codes playlist'." },
      { title: "Enter Login Details", description: "Input your Strong 8K USA server URL, username, and password." },
      { title: "Stream Live Channels", description: "Browse categorized channels with integrated electronic program guide." },
    ],
    pros: [
      "Clean, modern material design interface",
      "Fast channel loading and simple group management",
    ],
    cons: [
      "Android ecosystem only (no iOS or tvOS)",
    ],
    problems: [
      { q: "Can I lock adult categories in Televizo?", a: "Yes, Televizo includes built-in parental PIN protection for sensitive channel categories." },
    ],
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
    ],
  },
  "duplex-iptv": {
    slug: "duplex-iptv",
    name: "DuplexPlay & Alternatives",
    order: 11,
    free: false,
    platforms: "Android, Windows, Xbox, Smart TV",
    metaTitle: "DuplexPlay IPTV Alternatives & Setup (2026) — Smart TV Guide",
    metaDescription:
      "Guide to DuplexPlay IPTV and the best modern alternatives (IBO Player & Smarters Pro) for Samsung, LG, and Windows with Strong 8K USA.",
    keywords: [
      "duplex iptv alternative",
      "duplex play activation",
      "best smart tv iptv player",
      "duplex play setup",
    ],
    eyebrow: "Applications · DuplexPlay",
    h1: "DuplexPlay & Modern Smart TV Player Alternatives",
    lead: "Everything you need to know about DuplexPlay and why IBO Player and IPTV Smarters are the recommended alternatives in 2026.",
    intro: [
      "DuplexPlay was once one of the most popular players on Samsung and LG Smart TVs. However, due to licensing changes and store removals in several regions, many users are looking for reliable alternatives.",
      "Today, players like IBO Player Pro and IPTV Smarters Pro provide superior performance, active updates, and full compatibility with Strong 8K USA's 4K and 8K stream infrastructure.",
    ],
    steps: [
      { title: "Choose Your Player", description: "We recommend IBO Player Pro or IPTV Smarters Pro on Smart TVs for guaranteed support." },
      { title: "Connect Strong 8K USA", description: "Enter your Xtream Codes API credentials." },
      { title: "Stream with Confidence", description: "Enjoy 50,000+ live channels with anti-freeze CDN technology." },
    ],
    pros: [
      "Broad platform compatibility on historical installations",
    ],
    cons: [
      "Removed from several regional app stores; requires modern alternatives like IBO Player",
    ],
    problems: [
      { q: "What is the best alternative to DuplexPlay?", a: "IBO Player Pro is the closest and most modern direct replacement on Samsung and LG Smart TVs." },
    ],
    devices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV", href: "/appareils/lg" },
    ],
  },
};

export const APP_SLUGS = Object.keys(APPLICATIONS);
export const APP_LIST = Object.values(APPLICATIONS).sort((a, b) => a.order - b.order);

export const APP_ICONS: Record<string, string> = {
  smarters: "play",
  tivimate: "tv",
  vlc: "play",
  kodi: "tv",
  "gse-smart-iptv": "play",
  "ott-navigator": "tv",
  xciptv: "play",
  "ibo-player": "tv",
  "perfect-player": "play",
  televizo: "tv",
  "duplex-iptv": "play",
};

