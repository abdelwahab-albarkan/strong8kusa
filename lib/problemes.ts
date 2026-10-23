/** Troubleshooting pages for the /problemes cluster. Keyed by slug. */

export type Problem = {
  slug: string;
  name: string;
  order: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  symptoms: string[];
  causes: string[];
  solutions: { title: string; description: string }[];
  support: string;
};

export const PROBLEMS: Record<string, Problem> = {
  "iptv-ne-fonctionne-pas": {
    slug: "iptv-ne-fonctionne-pas",
    name: "IPTV Not Working",
    order: 1,
    metaTitle: "Why is My IPTV Not Working? Complete Diagnostic & Fix Guide (2026)",
    metaDescription:
      "IPTV not loading channels or showing errors? Follow our step-by-step diagnostic guide for internet connection, credentials, app cache, and server status.",
    keywords: [
      "why is my iptv not working",
      "iptv not working",
      "iptv down today",
      "troubleshoot iptv connection",
      "fix iptv not loading",
    ],
    eyebrow: "Troubleshooting · Connection",
    h1: "Why is My IPTV Not Working? Diagnostic & Quick Fixes",
    lead: "When live TV fails to load, the root cause is almost always simple: network DNS, mistyped credentials, or expired cache. Here is how to diagnose and fix it in 3 minutes.",
    symptoms: [
      "No channels appear in the channel list",
      "App crashes on launch or freezes on loading circle",
      "'Authorization Failed' or 'Invalid Details' error dialog",
    ],
    causes: [
      "Interrupted home internet connection or router DNS timeout",
      "Accidental whitespace or typo in Server URL, Username, or Password",
      "Expired subscription account",
      "Outdated streaming app version needing an update",
    ],
    solutions: [
      { title: "Test Your Internet Connection", description: "Verify internet connectivity on another device. Restart your Wi-Fi router to clear local DNS routing tables." },
      { title: "Verify Your Login Credentials", description: "Check your welcome email or WhatsApp message. Copy and paste Server URL, Username, and Password without extra spaces." },
      { title: "Restart App and Power-Cycle TV Box", description: "Force close the streaming player, clear app cache in device settings, and restart your TV or Firestick." },
      { title: "Check Subscription Status", description: "Verify that your Strong 8K USA subscription is active. Contact 24/7 WhatsApp support (+212625218443) for instant verification." },
    ],
    support: "If streams still do not load after these steps, message our 24/7 technical team on WhatsApp (+212625218443) with your device model and app name.",
  },
  "buffering-coupure": {
    slug: "buffering-coupure",
    name: "Buffering & Freezing",
    order: 2,
    metaTitle: "Why Does IPTV Buffer at Night? How to Stop Freezing (2026 Guide)",
    metaDescription:
      "Tired of constant IPTV buffering and freezing? Learn why IPTV buffers at night, how to bypass ISP throttling, and optimize buffer settings on Firestick.",
    keywords: [
      "why does iptv buffer at night",
      "how to stop iptv buffering",
      "fix iptv freezing firestick",
      "isp throttling streaming",
      "stop iptv stuttering",
      "iptv buffering fix",
    ],
    eyebrow: "Troubleshooting · Buffering",
    h1: "Why Does IPTV Buffer at Night? How to Stop Freezing & Lag",
    lead: "Constant buffering during prime-time sports or movies is infuriating. Discover the primary causes—from ISP throttling to buffer cache—and how to eliminate them.",
    symptoms: [
      "Spinning wheel or buffering circle every 30 to 60 seconds",
      "Streams freeze during high-traffic NFL, Premier League, or UFC events",
      "Audio continues playing while video freezes or drops frames",
    ],
    causes: [
      "US Internet Service Provider (ISP) throttling video streaming ports during peak hours (8 PM - 11 PM)",
      "Wi-Fi packet loss or 2.4GHz interference between router and streaming stick",
      "Player buffer size set too small or too large in app settings",
      "Low server capacity on budget IPTV providers (Strong 8K USA utilizes anti-freeze CDN edge nodes)",
    ],
    solutions: [
      { title: "Bypass ISP Throttling with Encrypted Routing", description: "US ISPs frequently throttle IPTV traffic during peak hours. Connecting via a reputable VPN (ExpressVPN/NordVPN) or switching to Strong 8K USA's anti-freeze CDN prevents packet deprioritization." },
      { title: "Switch from 2.4GHz Wi-Fi to 5GHz or Ethernet", description: "2.4GHz Wi-Fi suffers heavy interference from household appliances. Connect via 5GHz Wi-Fi or a wired Ethernet cable for consistent 50+ Mbps throughput." },
      { title: "Increase Buffer Size in Player Settings", description: "Inside TiviMate or IPTV Smarters Settings > Playback, adjust the buffer size to 'Medium' or 'Large' (2-5 seconds) to absorb micro-stutters." },
      { title: "Change Video Output Engine", description: "Switch between Hardware and Software video decoders (or ExoPlayer to VLC) in your player settings." },
    ],
    support: "Strong 8K USA servers are engineered with 25+ global CDN edge nodes for 99.9% anti-freeze stability. Contact support if you need alternative server endpoints.",
  },
  "vitesse-internet": {
    slug: "vitesse-internet",
    name: "Internet Speed & Bandwidth",
    order: 3,
    metaTitle: "Internet Speed Needed for 4K IPTV Streaming (2026 Guide)",
    metaDescription:
      "How much internet speed do you need for 4K and 8K IPTV? Minimum bandwidth requirements, ping/jitter benchmarks, and tips to maximize stream speed.",
    keywords: [
      "internet speed needed for 4k iptv",
      "minimum bandwidth iptv streaming",
      "iptv speed requirements",
      "how fast does internet need to be for iptv",
    ],
    eyebrow: "Troubleshooting · Speed",
    h1: "Internet Speed Requirements for 4K & 8K IPTV",
    lead: "Raw download speed is only half the story. Learn how bandwidth, ping latency, and jitter determine whether your 4K 60FPS streams run like glass.",
    symptoms: [
      "Resolution automatically degrades from 4K to 720p",
      "Noticeable audio-video delay or frame stutter",
      "Frequent stream disconnects on multi-screen setups",
    ],
    causes: [
      "Insufficient download bandwidth for high-bitrate HEVC 4K streams",
      "High network latency (ping > 60ms) or packet jitter to server nodes",
      "Bandwidth hogs on home network (torrents, large game downloads, cloud backups)",
    ],
    solutions: [
      { title: "Benchmark Your Real-Time Speed", description: "Run a speed test inside your TV box. Ensure minimum speeds: 15 Mbps for Full HD, 30 Mbps for 4K UHD, and 50+ Mbps for 8K feeds." },
      { title: "Prioritize Streaming with Router QoS", description: "Enable Quality of Service (QoS) in your home router settings to prioritize your Firestick or TV box over background downloads." },
      { title: "Connect via Cat6 Ethernet", description: "Wired Ethernet eliminates Wi-Fi packet drops and reduces ping latency to single digits." },
    ],
    support: "Still experiencing speed drops? Contact Strong 8K USA support to run a live speed test to our US regional server clusters.",
  },
  "erreurs": {
    slug: "erreurs",
    name: "Error Codes & Authorization",
    order: 4,
    metaTitle: "IPTV Error Codes Explained — Authorization Failed & Server Error Fix",
    metaDescription:
      "Troubleshoot common IPTV error codes: 'Authorization Failed', 'Check Login Details', 'Parser Error', and '404 Stream Not Found'.",
    keywords: [
      "iptv error codes",
      "iptv authorization failed",
      "check credentials error iptv",
      "iptv server connection error",
    ],
    eyebrow: "Troubleshooting · Error Codes",
    h1: "How to Fix Common IPTV Error Codes & Login Failures",
    lead: "Decode mysterious streaming error codes. Here is what messages like 'Authorization Failed', 'Check Login Details', and 'Parser Error' really mean.",
    symptoms: [
      "'Authorization Failed' or 'Invalid Details' upon logging in",
      "'Parser Exception' or 'Playback Error' when opening a channel",
      "'Cannot Connect to Server' popup",
    ],
    causes: [
      "Account credentials entered with hidden spaces or uppercase letters",
      "Subscription renewal date passed or temporary account suspension",
      "Corrupted temporary cache file inside the streaming application",
      "Temporary channel source maintenance",
    ],
    solutions: [
      { title: "Retype Login Credentials Carefully", description: "Delete the playlist profile and re-enter the Server URL, Username, and Password without autocorrect modifications." },
      { title: "Clear App Data and Cache", description: "Go to device Settings > Apps > [Your IPTV Player] and select 'Clear Cache'. Restart the app." },
      { title: "Confirm Account Expiration Date", description: "Verify your subscription expiration in your welcome dashboard or message support on WhatsApp." },
    ],
    support: "If you receive an unknown error code, snap a photo and message our 24/7 technical team on WhatsApp (+212625218443).",
  },
  "ecran-noir": {
    slug: "ecran-noir",
    name: "Black Screen with Audio Only",
    order: 5,
    metaTitle: "Fix IPTV Black Screen with Audio Only (2026 Troubleshooting)",
    metaDescription:
      "Why does your IPTV have sound but no video? Fix black screen issues on Firestick, Samsung TV, and Android by adjusting video hardware decoders.",
    keywords: [
      "iptv black screen audio only",
      "iptv screen goes black fix",
      "iptv sound but no picture",
      "fix black screen firestick iptv",
    ],
    eyebrow: "Troubleshooting · Black Screen",
    h1: "How to Fix IPTV Black Screen with Audio Only",
    lead: "Hearing the commentators clearly but staring at a black screen? This classic issue is almost always a video codec conflict. Here is how to fix it in 60 seconds.",
    symptoms: [
      "Channel audio plays clearly, but TV screen remains pitch black",
      "Screen displays a blank black box with the channel name overlay",
      "Occurs primarily on 4K HEVC channels or high-bitrate live sports",
    ],
    causes: [
      "Hardware video decoder incompatibility with the incoming video codec (H.265 / HEVC / AV1)",
      "HDMI handshake or HDCP copy-protection issue between streaming stick and TV port",
      "Display refresh rate conflict (e.g. 50Hz broadcast fed to a 60Hz display without auto-switching)",
    ],
    solutions: [
      { title: "Switch Video Player Decoder in App Settings", description: "In TiviMate or IPTV Smarters Settings > Video Decoder, toggle from 'Hardware' to 'Software', or select ExoPlayer instead of VLC." },
      { title: "Adjust TV Display Resolution", description: "In Firestick or TV box Settings > Display & Sounds > Resolution, set from 'Auto' to 1080p 60Hz or 4K 60Hz." },
      { title: "Power-Cycle HDMI Connection", description: "Unplug the streaming device from the HDMI port, power-cycle the TV, and plug it into a different high-speed HDMI port (HDMI 2.0/2.1)." },
    ],
    support: "Our 24/7 engineers can adjust the channel encoding profile on the server side if a specific channel stays black.",
  },
  "serveur-indisponible": {
    slug: "serveur-indisponible",
    name: "Server Down or Unavailable",
    order: 6,
    metaTitle: "IPTV Server Connection Timeout & Server Down Fix (2026)",
    metaDescription:
      "Is the IPTV server down? How to check server uptime, diagnose ISP blocking, and switch to alternative Strong 8K USA server DNS endpoints.",
    keywords: [
      "iptv server down",
      "server connection timeout iptv",
      "check iptv server status",
      "iptv server maintenance",
    ],
    eyebrow: "Troubleshooting · Server Status",
    h1: "IPTV Server Connection Timeout: Causes & Solutions",
    lead: "Getting 'Server Connection Timeout'? Determine whether the issue is local ISP blocking, DNS resolution, or server maintenance.",
    symptoms: [
      "App fails to connect during initial login",
      "'Server Unavailable' or 'Host Unreachable' notification",
      "Playlists take minutes to update or fail completely",
    ],
    causes: [
      "Local ISP DNS blocking access to the streaming server URL",
      "Home firewall or router parental controls blocking streaming ports",
      "Scheduled server maintenance on a specific CDN node",
    ],
    solutions: [
      { title: "Change DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8)", description: "In your TV or router network settings, replace ISP default DNS with Cloudflare (1.1.1.1 / 1.0.0.1) or Google (8.8.8.8) to bypass domain blocking." },
      { title: "Test Connection via Mobile Hotspot", description: "Connect your streaming device to your smartphone 5G mobile hotspot. If it connects instantly, your home ISP is blocking the server." },
      { title: "Request Alternative Server URL", description: "Strong 8K USA maintains backup encrypted server domains. Message support on WhatsApp (+212625218443) for an instant alternate link." },
    ],
    support: "Strong 8K USA operates with a 99.9% uptime SLA backed by automated server failover.",
  },
  "compte-expire": {
    slug: "compte-expire",
    name: "Account Expired or Renewal",
    order: 7,
    metaTitle: "IPTV Subscription Expired — How to Renew & Restore Access Instantly",
    metaDescription:
      "Has your IPTV subscription expired? How to check your expiration date, renew your plan, and restore 50,000+ live channels in under 60 seconds.",
    keywords: [
      "iptv subscription expired renewal",
      "check iptv account status",
      "renew iptv subscription",
      "iptv account blocked expired",
    ],
    eyebrow: "Troubleshooting · Account",
    h1: "IPTV Account Expired: How to Renew & Restore Access",
    lead: "Did your streams suddenly stop working? Verify your account validity and learn how to restore service in under 60 seconds with Strong 8K USA.",
    symptoms: [
      "'Your Account Has Expired' notification upon opening channels",
      "'Your STB is Blocked' message on MAG set-top box",
      "Channels disappear from the guide overnight",
    ],
    causes: [
      "Subscription billing cycle ended",
      "Payment failed or pending renewal confirmation",
      "MAC address desynchronization on MAG or Smart TV portal",
    ],
    solutions: [
      { title: "Verify Expiration in App User Info", description: "In IPTV Smarters or TiviMate, go to Settings > User Info to view your active expiration date." },
      { title: "Renew Your Plan Online", description: "Visit our pricing page and select your 3, 6, or 12-month renewal package for instant re-activation." },
      { title: "Instant WhatsApp Re-activation", description: "Send your username or MAG MAC address to +212625218443 on WhatsApp for immediate 60-second re-activation without losing your favorites." },
    ],
    support: "Renew today with Strong 8K USA to retain your existing login credentials and personalized favorites list.",
  },
  "chaines-manquantes": {
    slug: "chaines-manquantes",
    name: "Missing Channels or Groups",
    order: 8,
    metaTitle: "Missing Channels on IPTV? How to Update Playlist & Reload EPG",
    metaDescription:
      "Channels disappeared from your guide? How to force update playlists, reload EPG tables, and unhide channel categories in IPTV Smarters & TiviMate.",
    keywords: [
      "missing channels on iptv",
      "how to update epg and playlist",
      "channels disappeared iptv",
      "iptv category missing",
    ],
    eyebrow: "Troubleshooting · Channels",
    h1: "Missing Channels on IPTV: How to Refresh & Restore",
    lead: "Can't find your favorite sports channel or local network? Discover how to refresh server playlists and unhide missing categories.",
    symptoms: [
      "Previously working channel no longer appears in the list",
      "Entire categories (e.g. NFL, PPV, UK Sports) missing from menu",
      "Channel count dropped after an app update",
    ],
    causes: [
      "Cached playlist on device is outdated while server added new channels",
      "Accidental category hiding in player settings or parental control filter",
      "Temporary channel source maintenance",
    ],
    solutions: [
      { title: "Force Refresh Playlist in App", description: "In your app menu, select 'Update Playlist' or 'Reload Channels' to sync latest server channel tables." },
      { title: "Check Hidden Groups Settings", description: "In TiviMate, go to Settings > Playlists > [Strong 8K] > Manage Groups, and ensure groups are set to 'Show'." },
      { title: "Clear App Cache", description: "Clear app cache in device settings to remove stale index files and restart the app." },
    ],
    support: "Looking for a specific channel? Strong 8K USA adds requested international and regional channels upon customer request.",
  },
  "iptv-bloque-operateur": {
    slug: "iptv-bloque-operateur",
    name: "ISP Blocking & Throttling",
    order: 9,
    metaTitle: "ISP Blocking IPTV in the USA? How to Bypass Throttling (2026)",
    metaDescription:
      "Is Comcast Xfinity, Spectrum, AT&T, or Verizon blocking your IPTV? Complete guide to bypass ISP throttling with VPNs, DNS changes, and encrypted streams.",
    keywords: [
      "isp blocking iptv usa",
      "how to bypass isp throttling iptv",
      "best vpn for iptv streaming",
      "xfinity spectrum iptv blocking",
      "bypass streaming throttling",
    ],
    eyebrow: "Troubleshooting · ISP Blocking",
    h1: "ISP Blocking IPTV in the USA: How to Bypass Throttling",
    lead: "Major US Internet Service Providers (Comcast Xfinity, Spectrum, AT&T, Cox) frequently throttle or block video streaming ports. Here is how to regain full bandwidth.",
    symptoms: [
      "Streams work perfectly during the day but freeze every evening at 8 PM",
      "Channels refuse to load on home Wi-Fi but play instantly on mobile 5G data",
      "'Connection Refused' error on specific live sports channels",
    ],
    causes: [
      "Deep Packet Inspection (DPI) by US internet service providers targeting known streaming protocol ports",
      "DNS-level filtering blocking domain names associated with streaming services",
      "Peak-hour bandwidth shaping and artificial speed caps",
    ],
    solutions: [
      { title: "Use Strong 8K USA's Encrypted CDN Routing", description: "Strong 8K USA streams through encrypted HTTPS/TLS ports that blend indistinguishably with regular web traffic, avoiding DPI detection." },
      { title: "Change Router DNS to Cloudflare (1.1.1.1)", description: "Bypass ISP DNS blocking by configuring 1.1.1.1 and 1.0.0.1 directly inside your router or TV network settings." },
      { title: "Connect via High-Speed VPN", description: "Install ExpressVPN, NordVPN, or Surfshark on your Firestick or TV box. Connect to an optimized US server to encrypt all data packets." },
    ],
    support: "Strong 8K USA is 100% VPN-friendly and includes native anti-blocking protocols.",
  },
  "iptv-samsung": {
    slug: "iptv-samsung",
    name: "Samsung TV Issues",
    order: 10,
    metaTitle: "How to Fix IPTV Problems on Samsung Smart TV (Tizen OS 2026)",
    metaDescription:
      "Fix crashing apps, buffering, and loading failures on Samsung Smart TVs running Tizen OS. Step-by-step troubleshooting for Smart IPTV and Smarters Pro.",
    keywords: [
      "iptv samsung tv problems fix",
      "smart iptv app crashing samsung",
      "samsung tizen iptv troubleshooting",
      "fix iptv on samsung tv",
    ],
    eyebrow: "Troubleshooting · Samsung TV",
    h1: "How to Fix IPTV Issues on Samsung Smart TV (Tizen OS)",
    lead: "Troubleshoot common Samsung Smart TV issues including crashing players, memory leaks, and black screens on Tizen OS.",
    symptoms: [
      "App freezes or crashes back to Samsung Smart Hub home screen",
      "Error: 'Check stream link' on Samsung Smart IPTV",
      "Audio out of sync on 4K channels",
    ],
    causes: [
      "Samsung Tizen OS running low on internal RAM memory",
      "Outdated Smart TV firmware",
      "Weak Wi-Fi signal caused by TV metal frame interference",
    ],
    solutions: [
      { title: "Cold Reboot Samsung TV", description: "Hold the Power button on your Samsung remote for 5 seconds until the TV turns off and on again (rebooting the Tizen OS memory)." },
      { title: "Reinstall the IPTV Application", description: "Delete the app from Samsung Apps Store, restart the TV, and reinstall fresh." },
      { title: "Connect with Ethernet Cable", description: "Samsung TV Wi-Fi receivers are prone to packet drops. A direct wired cable resolves 95% of buffering issues." },
    ],
    support: "If your Samsung model is older than 2018, adding a $30 Amazon Firestick 4K Max provides dramatically faster streaming performance.",
  },
  "iptv-firestick": {
    slug: "iptv-firestick",
    name: "Firestick Freezing & Storage",
    order: 11,
    metaTitle: "Fix IPTV Freezing on Firestick — Clear Cache & Speed Optimization",
    metaDescription:
      "Stop IPTV buffering on Amazon Firestick 4K & Fire TV Cube. Learn how to clear app cache, free storage space, and optimize Developer Options.",
    keywords: [
      "fix iptv freezing on firestick",
      "clear cache iptv fire tv stick",
      "firestick buffering fix",
      "optimize firestick for streaming iptv",
    ],
    eyebrow: "Troubleshooting · Firestick",
    h1: "How to Stop IPTV Freezing on Amazon Firestick",
    lead: "Amazon Firesticks have limited internal storage and RAM. Learn how to clear cache, remove bloatware, and optimize settings for buttery-smooth streams.",
    symptoms: [
      "Firestick feels sluggish and delays remote control inputs",
      "Video stutters or drops frames on 60 FPS sports channels",
      "App crashes abruptly with 'Critically Low Storage' warning",
    ],
    causes: [
      "Accumulated thumbnail and video cache consuming all 8GB internal storage",
      "Too many background apps running simultaneously in Fire OS",
      "Firestick powered via low-amperage TV USB port instead of wall outlet",
    ],
    solutions: [
      { title: "Clear App Cache on All Installed Apps", description: "Go to Firestick Settings > Applications > Manage Installed Applications, select each app, and click 'Clear Cache'." },
      { title: "Plug Firestick into Wall Outlet Power", description: "Never power a Firestick from a TV USB port—it causes voltage drops and processor throttling during 4K video decoding." },
      { title: "Restart Firestick via Remote Shortcut", description: "Hold Select and Play/Pause buttons together for 5 seconds to perform a clean hardware reboot." },
    ],
    support: "Contact Strong 8K USA for custom Firestick optimization codes.",
  },
  "application-plante": {
    slug: "application-plante",
    name: "App Keeps Crashing",
    order: 12,
    metaTitle: "Why Does My IPTV App Keep Crashing? (TiviMate & Smarters Fix)",
    metaDescription:
      "Stop streaming app crashes on Android TV, Firestick, and Smart TVs. Step-by-step fix for TiviMate, IPTV Smarters Pro, and XCIPTV crashing on launch.",
    keywords: [
      "iptv app keeps crashing",
      "tivimate crashing on launch",
      "iptv smarters pro force close",
      "stop iptv app crashing",
    ],
    eyebrow: "Troubleshooting · App Crashes",
    h1: "Why Does My IPTV App Keep Crashing? Step-by-Step Fix",
    lead: "App crashing immediately after opening or during channel switching? Fix corrupted app databases and memory overloads.",
    symptoms: [
      "App closes abruptly and returns to home launcher",
      "'App has stopped working' system popup",
      "Crash occurs every time you scroll past a specific channel",
    ],
    causes: [
      "Corrupted EPG database or oversized playlist cache",
      "Device running critically low on RAM memory",
      "Incompatible APK version installed on device",
    ],
    solutions: [
      { title: "Clear App Cache (Not Data)", description: "In device settings, clear cache first. Do not clear data unless you have your login details ready to re-enter." },
      { title: "Limit EPG History Days", description: "In player settings, set 'Past days to keep EPG' to 1 day to prevent database file bloat." },
      { title: "Update or Reinstall Official App Build", description: "Ensure you are using the latest stable release from the official app store." },
    ],
    support: "Message our support on WhatsApp (+212625218443) for tested, verified APK download links.",
  },
  "image-qualite": {
    slug: "image-qualite",
    name: "Video Quality & Resolution",
    order: 13,
    metaTitle: "How to Fix Blurry IPTV Picture Quality — 4K 60FPS Stream Settings",
    metaDescription:
      "Tired of pixelated or blurry IPTV streams? How to force full 4K and 1080p 60FPS stream quality, adjust hardware decoders, and eliminate blur.",
    keywords: [
      "iptv blurry picture fix",
      "stream quality 4k 60fps settings",
      "how to improve iptv picture quality",
      "iptv pixelated stream fix",
    ],
    eyebrow: "Troubleshooting · Picture Quality",
    h1: "How to Fix Blurry IPTV Picture Quality & Enable 4K 60FPS",
    lead: "Ensure you are receiving true 4K Ultra HD and 60 FPS sports broadcasts rather than compressed, downscaled feeds.",
    symptoms: [
      "Video appears pixelated, soft, or blurry on large 65\"+ screens",
      "Fast motion (football, hockey pucks) leaves ghost trails or stutters",
      "Colors look washed out or lack HDR vibrancy",
    ],
    causes: [
      "Player automatically defaulting to low-bandwidth backup stream",
      "Display resolution set incorrectly in TV box system settings",
      "HDMI cable bandwidth bottleneck (requires HDMI 2.0 or 2.1 for 4K 60Hz)",
    ],
    solutions: [
      { title: "Select 4K / UHD Channel Source", description: "In Strong 8K USA channel list, look for channels marked with [4K] or [FHD 60FPS] badges." },
      { title: "Verify TV Box Output Resolution", description: "Ensure TV box display settings are locked to 3840x2160 @ 60Hz rather than Auto 1080p." },
      { title: "Enable Auto Frame Rate Matching (AFR)", description: "Turn on AFR in TiviMate to match stream broadcast frequency (59.94Hz / 60Hz / 50Hz) for artifact-free motion." },
    ],
    support: "Strong 8K USA delivers uncompressed, direct broadcast satellite feeds for premier sporting events.",
  },
  "son-decale": {
    slug: "son-decale",
    name: "Audio Out of Sync",
    order: 14,
    metaTitle: "How to Fix IPTV Audio Out of Sync — Sound Delay Settings (2026)",
    metaDescription:
      "Fix audio delay and lip-sync issues on IPTV streams. Step-by-step tutorial to adjust audio offset, change audio codecs, and configure soundbars.",
    keywords: [
      "iptv audio out of sync fix",
      "audio delay settings iptv player",
      "lip sync issues iptv",
      "iptv sound delayed",
    ],
    eyebrow: "Troubleshooting · Audio Sync",
    h1: "How to Fix IPTV Audio Delay & Lip-Sync Issues",
    lead: "Seeing actors' lips move before hearing their voice? Learn how to calibrate audio offset milliseconds and fix soundbar passthrough.",
    symptoms: [
      "Audio plays 500ms to 2000ms ahead of or behind video",
      "Sound gradually drifts out of sync after 15 minutes of watching",
      "Occurs when connected to an external soundbar or AV receiver",
    ],
    causes: [
      "Bluetooth audio latency or soundbar processing delay",
      "Audio format mismatch between broadcast stream and TV audio engine (PCM vs Bitstream)",
      "Hardware video decoder struggling to keep pace with audio track",
    ],
    solutions: [
      { title: "Adjust Audio Offset in Player Controls", description: "While watching, open on-screen controls, select the Audio icon, and adjust Audio Offset (+/- 100ms increments) until lips match sound." },
      { title: "Switch Audio Output to PCM in TV Settings", description: "In TV Settings > Sound > Digital Audio Output, switch from Dolby Digital / Bitstream to PCM stereo." },
      { title: "Change Audio Player Engine", description: "In player settings, switch internal audio track decoder from Software to Hardware (MediaCodec)." },
    ],
    support: "Contact support if audio sync issues persist on specific broadcast channels.",
  },
  "epg-ne-safiche-pas": {
    slug: "epg-ne-safiche-pas",
    name: "EPG TV Guide Not Loading",
    order: 15,
    metaTitle: "IPTV EPG Not Updating? How to Fix Blank TV Guide & Schedules",
    metaDescription:
      "TV guide showing 'No Information' or blank schedule? Learn how to fix missing EPG, force EPG URL reload, and assign EPG sources in TiviMate & Smarters.",
    keywords: [
      "iptv epg not updating",
      "tv guide missing channels iptv",
      "xmltv epg url",
      "fix blank epg tivimate",
      "no information available iptv guide",
    ],
    eyebrow: "Troubleshooting · EPG Guide",
    h1: "How to Fix IPTV EPG Not Updating & Blank TV Guides",
    lead: "Staring at 'No Information' across your entire channel list? Here is how to refresh XMLTV EPG data tables and restore full program schedules.",
    symptoms: [
      "Channel list shows 'No Information' instead of current show titles",
      "EPG schedule is offset by several hours (time zone mismatch)",
      "TV guide stops updating after a few days",
    ],
    causes: [
      "EPG cache desynchronization on device storage",
      "Time zone offset mismatch between stream server (UTC) and your local US time zone",
      "App set to only update EPG on boot rather than scheduled intervals",
    ],
    solutions: [
      { title: "Force Update EPG in App Settings", description: "In TiviMate Settings > EPG > EPG Sources, select your source and click 'Update EPG'." },
      { title: "Correct EPG Time Zone Offset", description: "In player EPG settings, adjust Time Shift (e.g. -4 hours for EDT, -7 hours for PDT) to align show times with your local clock." },
      { title: "Clear EPG Cache File", description: "In player settings, click 'Clear EPG' followed immediately by 'Update EPG' to download fresh program tables." },
    ],
    support: "Strong 8K USA updates 7-day rolling EPG schedules every 4 hours automatically.",
  },
};

export const PROBLEM_SLUGS = Object.keys(PROBLEMS);
export const PROBLEM_LIST = Object.values(PROBLEMS).sort((a, b) => a.order - b.order);

