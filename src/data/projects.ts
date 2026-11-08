export const categories = ["Web App", "Mobile App", "E-commerce", "AI", "Website", "Package"] as const;

export type Category = (typeof categories)[number];

type DesktopCover = { type: "desktop"; image: string; width?: string };
type PhonesCover = { type: "phones"; images: string[] };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  badge?: string;
  color: string;
  darkLetter?: boolean;
  categories: Category[];
  tagline: string;
  facts: { label: string; value: string }[];
  description: string[];
  note?: string;
  built?: { title: string; text: string }[];
  links?: { label: string; href: string }[];
  cover: DesktopCover | PhonesCover;
  screens?: { image: string; caption: string }[];
  phoneScreens?: string[];
};

export function screenshot(slug: string, image: string, small = false) {
  return `/work/${slug}/${image}${small ? "-sm" : ""}.webp`;
}

const github = "https://github.com/sirine2907/";

export const projects: Project[] = [
  {
    slug: "restaurant-pos",
    name: "Restaurant & Salon POS",
    kind: "Day job",
    color: "#E5484D",
    categories: ["Web App", "Mobile App"],
    tagline: "The point of sale and back office that restaurants and beauty salons use all day.",
    facts: [
      { label: "Type", value: "Business software, team product" },
      { label: "My role", value: "Flutter developer" },
      { label: "Stack", value: "Flutter · Dart · GraphQL · BLoC" },
      { label: "Year", value: "2026 to now" },
    ],
    description: [
      "Orders, kitchen display, payments, bookings, stock, staff and reports in one app for tablets, desktops and the web. It works in Arabic, French and English, with a full right-to-left layout for Arabic.",
      "I work on it in a product team. I build feature modules with typed GraphQL and a cache-first data layer, and I own my features from the data model to code review.",
    ],
    note: "The source code is private. These screens come from the real app running with an invented sample restaurant.",
    built: [
      { title: "Split payments and booking advances", text: "Several payment methods on one ticket, with the balance checked first." },
      { title: "Booking schedule", text: "Drag to place services, reassign staff and block double-booking." },
      { title: "Shift planner on tablet", text: "Week and staff views, leave handling and service colours." },
      { title: "Staff revenue report", text: "Revenue by employee and activity, exported to Excel and PDF." },
      { title: "Stock transfers", text: "Moving stock between locations without an approval step." },
      { title: "Discounts and customers", text: "Manual booking discounts, loyalty and editable customer profiles." },
    ],
    cover: { type: "desktop", image: "floor" },
    screens: [
      { image: "floor", caption: "Live floor: every table with its state, time and amount" },
      { image: "dashboard", caption: "Owner dashboard" },
      { image: "order", caption: "Taking an order" },
      { image: "checkout", caption: "Checkout with split payment" },
      { image: "kitchen", caption: "Kitchen display with timers per dish" },
      { image: "bookings", caption: "Salon booking schedule" },
      { image: "staff-revenue", caption: "Staff revenue report" },
      { image: "shifts", caption: "Shift planner" },
      { image: "arabic", caption: "The whole app in Arabic, right to left" },
      { image: "stock", caption: "Stock" },
      { image: "reports", caption: "Reports compared with the previous period" },
      { image: "dark", caption: "Dark mode" },
    ],
  },
  {
    slug: "menumind",
    name: "MenuMind",
    kind: "AI agent",
    color: "#2F6F4F",
    categories: ["AI", "Web App"],
    tagline: "An AI assistant that answers guests from the real menu and takes their order.",
    facts: [
      { label: "Type", value: "AI agent, web app" },
      { label: "Stack", value: "LangGraph · Python · Typesense · Laravel · React · Docker" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Guests ask in plain words. The agent searches the menu with hybrid search, checks allergens, answers from house documents with sources, and places the order once the guest confirms it.",
      "Staff upload the menu and documents such as allergen sheets, policies and FAQs, and follow orders from an admin page.",
    ],
    links: [{ label: "View source", href: `${github}MenuMind` }],
    cover: { type: "desktop", image: "chat" },
    screens: [
      { image: "chat", caption: "A grounded answer with its sources" },
      { image: "menu", caption: "Menu" },
      { image: "order", caption: "Order confirmation" },
      { image: "admin", caption: "Admin" },
      { image: "dark", caption: "Dark mode" },
    ],
  },
  {
    slug: "pick-me-vintage",
    name: "Pick Me Vintage",
    kind: "Online shop",
    badge: "Live",
    color: "#9C4A2F",
    categories: ["E-commerce", "Web App"],
    tagline: "An online thrift shop for Tunisia where every piece is one of a kind.",
    facts: [
      { label: "Type", value: "Online shop for a friend's business" },
      { label: "Stack", value: "Next.js · TypeScript · Prisma · PostgreSQL" },
      { label: "Hosting", value: "Vercel · Neon · Vercel Blob" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Prices are in dinars, delivery goes anywhere in Tunisia and customers pay cash on delivery. When a shopper adds a piece to the bag, it is held for 15 minutes so nobody else can order it at the same time.",
      "The owner runs the shop from an admin area: new pieces with photos, orders from placed to delivered, and a sales dashboard. The shop is in French.",
    ],
    links: [{ label: "Visit the shop", href: "https://pick-me-vintage.vercel.app" }],
    cover: { type: "desktop", image: "home" },
    screens: [
      { image: "home", caption: "Home" },
      { image: "shop", caption: "Shop with filters" },
      { image: "product", caption: "Product page" },
      { image: "bag", caption: "Bag with the 15-minute hold" },
      { image: "checkout", caption: "Checkout, cash on delivery" },
      { image: "admin-orders", caption: "Admin: orders" },
      { image: "admin-dashboard", caption: "Admin: dashboard" },
    ],
    phoneScreens: ["mobile-track"],
  },
  {
    slug: "fridge-note",
    name: "fridge-note",
    kind: "Mobile app",
    badge: "Live demo",
    color: "#F5A524",
    darkLetter: true,
    categories: ["Mobile App"],
    tagline: "One shopping list for the whole home, live on everyone's phone, even with no signal.",
    facts: [
      { label: "Type", value: "Mobile and web app" },
      { label: "Stack", value: "Flutter · Supabase · offline-first sync" },
      { label: "Platforms", value: "Android · iOS · Web" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Several people edit the same list and see each other's changes as they happen. It works offline and syncs when the connection comes back, resolving conflicts field by field. You invite people with a link.",
    ],
    links: [
      { label: "Try the live demo", href: "https://sirine2907.github.io/fridge-note/" },
      { label: "View source", href: `${github}fridge-note` },
    ],
    cover: { type: "phones", images: ["01_welcome", "03_list", "04_trip"] },
    phoneScreens: ["01_welcome", "02_home", "03_list", "04_trip", "05_usuals", "06_invite"],
  },
  {
    slug: "vitalwatch",
    name: "VitalWatch",
    kind: "Web app",
    color: "#1F6FEB",
    categories: ["Web App", "AI"],
    tagline: "A website performance monitor that alerts you when a site really gets slower.",
    facts: [
      { label: "Type", value: "Web app" },
      { label: "Stack", value: "Next.js · TypeScript · PageSpeed Insights API" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "It tests your sites on a schedule, keeps their full history and only alerts you on real drops. It suggests fixes written for your site's tech stack, compares you with competitors and builds a report you can share.",
    ],
    note: "Screens show sample data with example domains.",
    links: [{ label: "View source", href: `${github}vitalwatch` }],
    cover: { type: "desktop", image: "home" },
    screens: [
      { image: "home", caption: "Test any page" },
      { image: "results", caption: "Score, real-user vitals, lab metrics and opportunities" },
      { image: "trends", caption: "90-day score trend" },
      { image: "project", caption: "A project with its pages and alerts" },
      { image: "ai-fixes", caption: "Fixes suggested for a Next.js site" },
      { image: "compare", caption: "Your page next to two competitors" },
    ],
    phoneScreens: ["phone"],
  },
  {
    slug: "shift-planner",
    name: "shift_planner",
    kind: "Flutter package",
    badge: "pub.dev",
    color: "#0E7C86",
    categories: ["Package"],
    tagline: "A drag-and-drop staff shift planner for Flutter, published on pub.dev.",
    facts: [
      { label: "Type", value: "Open-source Flutter package" },
      { label: "Stack", value: "Flutter · Dart · GitHub Actions" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Move, resize and create shifts on a day timeline, with overlap warnings, snapping, right-to-left layouts and theming. It has no dependencies beyond Flutter.",
    ],
    links: [
      { label: "pub.dev", href: "https://pub.dev/packages/shift_planner" },
      { label: "View source", href: `${github}shift_planner` },
    ],
    cover: { type: "desktop", image: "light", width: "150%" },
    screens: [
      { image: "light", caption: "Desktop, light theme" },
      { image: "dark", caption: "Desktop, dark theme" },
    ],
    phoneScreens: ["phone"],
  },
  {
    slug: "replay",
    name: "Replay",
    kind: "Web app",
    color: "#1DB954",
    darkLetter: true,
    categories: ["Web App"],
    tagline: "Your Spotify listening, turned into stats, a story and share cards.",
    facts: [
      { label: "Type", value: "Web app" },
      { label: "Stack", value: "Next.js · TypeScript · Spotify Web API" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Top artists, tracks and genres, listening hours and habits, with a story mode you tap through and cards you can share.",
    ],
    links: [{ label: "View source", href: `${github}spotify-wrapped` }],
    cover: { type: "desktop", image: "landing" },
    screens: [
      { image: "landing", caption: "Landing page" },
      { image: "dashboard-light", caption: "Dashboard" },
      { image: "story-artist", caption: "Story mode" },
      { image: "share-card", caption: "Share card" },
      { image: "dashboard-dark", caption: "Dashboard in dark mode" },
    ],
    phoneScreens: ["mobile"],
  },
  {
    slug: "whetstone",
    name: "Whetstone",
    kind: "Mobile app",
    color: "#7C5CFF",
    categories: ["Mobile App"],
    tagline: "Turn a rough idea into a sharp prompt.",
    facts: [
      { label: "Type", value: "Mobile and desktop app" },
      { label: "Stack", value: "Flutter · Dart" },
      { label: "Platforms", value: "Android · Windows" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Type a messy request and Whetstone rewrites it into a clear prompt you can paste into any AI assistant. It shows which parts your prompt is missing, and keeps templates and a history.",
    ],
    links: [{ label: "View source", href: `${github}Whetstone` }],
    cover: { type: "phones", images: ["01_welcome", "02_home", "03_result"] },
    phoneScreens: ["01_welcome", "02_home", "03_result", "04_templates", "06_history"],
  },
  {
    slug: "meetly",
    name: "Meetly",
    kind: "Freelance",
    badge: "Live demo",
    color: "#D6336C",
    categories: ["Web App"],
    tagline: "A mobile web app that helps adults with shared interests chat and meet.",
    facts: [
      { label: "Type", value: "Freelance client prototype" },
      { label: "Stack", value: "JavaScript · HTML · CSS" },
      { label: "Platform", value: "Mobile web" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "The front end for the five core screens: homepage, public profile, sign-up, login, and search with results. It also includes a working preview of private messaging.",
    ],
    note: "Sample data only.",
    links: [
      { label: "Open the live preview", href: "https://sirine2907.github.io/Mobile-Meeting-Platform/" },
      { label: "View source", href: `${github}Mobile-Meeting-Platform` },
    ],
    cover: { type: "phones", images: ["01-home", "02-profile", "05-search-results"] },
    phoneScreens: ["01-home", "02-profile", "05-search-results", "05b-search-autocomplete", "04-login"],
  },
  {
    slug: "ember-chat",
    name: "Ember Chat",
    kind: "AI chat",
    color: "#E8590C",
    categories: ["AI", "Web App"],
    tagline: "A friendly chatbot with streamed replies rendered as Markdown.",
    facts: [
      { label: "Type", value: "Web app" },
      { label: "Stack", value: "Next.js · TypeScript · Tailwind CSS · Claude API" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Replies stream in with code blocks, lists and tables. The backend lives in Next.js API routes, so the API key stays on the server. It has a stop button, a new chat button and dark mode.",
    ],
    links: [{ label: "View source", href: `${github}ember-chat` }],
    cover: { type: "desktop", image: "chat" },
    screens: [
      { image: "chat", caption: "Answering a coding question" },
      { image: "home", caption: "Suggested prompts" },
      { image: "dark", caption: "Dark mode" },
    ],
  },
  {
    slug: "drivenow",
    name: "DriveNow",
    kind: "Web app",
    color: "#3B5BDB",
    categories: ["Web App"],
    tagline: "A car rental website with bookings and an admin panel.",
    facts: [
      { label: "Type", value: "Website with admin" },
      { label: "Stack", value: "PHP · MySQL" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Customers browse cars, check details and availability, and book. Admins manage the fleet and every reservation from a dashboard.",
    ],
    links: [{ label: "View source", href: `${github}vehicle-booking-system` }],
    cover: { type: "desktop", image: "home" },
    screens: [
      { image: "home", caption: "Home" },
      { image: "car-details", caption: "Car details" },
      { image: "booking", caption: "Booking" },
      { image: "admin-dashboard", caption: "Admin dashboard" },
      { image: "admin-bookings", caption: "Admin bookings" },
    ],
  },
  {
    slug: "rateflow",
    name: "RateFlow",
    kind: "Mobile app",
    color: "#12B886",
    darkLetter: true,
    categories: ["Mobile App"],
    tagline: "A currency converter for regular currencies and crypto.",
    facts: [
      { label: "Type", value: "Mobile app" },
      { label: "Stack", value: "Flutter · Dart" },
      { label: "Year", value: "2026" },
    ],
    description: ["Live rates, historical charts and favourites, with a dark mode."],
    links: [{ label: "View source", href: `${github}RateFlow` }],
    cover: { type: "phones", images: ["01_convert", "03_chart", "05_dark_mode"] },
    phoneScreens: ["01_convert", "02_currency_picker", "03_chart", "04_favorites", "05_dark_mode"],
  },
  {
    slug: "tiny-wins",
    name: "Tiny Wins",
    kind: "Mobile app",
    color: "#F76707",
    categories: ["Mobile App"],
    tagline: "A habit tracker for small daily habits.",
    facts: [
      { label: "Type", value: "Mobile app" },
      { label: "Stack", value: "Flutter · on-device storage" },
      { label: "Platforms", value: "Android · iOS" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Check habits off, keep your streaks going and see a 16-week heatmap and stats for each habit. Everything stays on the device.",
    ],
    links: [{ label: "View source", href: `${github}tiny-wins` }],
    cover: { type: "phones", images: ["today", "detail", "stats"] },
    phoneScreens: ["today", "detail", "stats", "editor", "today_dark"],
  },
  {
    slug: "ecobalance",
    name: "EcoBalance",
    kind: "Game",
    color: "#5C940D",
    categories: ["Mobile App"],
    tagline: "An ecosystem game where rabbits and foxes evolve while you keep both alive.",
    facts: [
      { label: "Type", value: "Flutter game" },
      { label: "Stack", value: "Flutter · BLoC · Clean Architecture" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Animals pass on their genes, so each species changes over time. Play levels with goals, or experiment in a sandbox with live population statistics.",
    ],
    links: [{ label: "View source", href: `${github}EcoBalance` }],
    cover: { type: "desktop", image: "03_game" },
    screens: [
      { image: "03_game", caption: "A level in progress" },
      { image: "01_home", caption: "Home" },
      { image: "02_levels", caption: "Levels" },
      { image: "05_sandbox", caption: "Sandbox" },
      { image: "07_statistics", caption: "Population statistics" },
    ],
  },
  {
    slug: "codesnap",
    name: "CodeSnap",
    kind: "Desktop app",
    color: "#343A40",
    categories: ["Mobile App"],
    tagline: "Turn code snippets into clean images you can share.",
    facts: [
      { label: "Type", value: "Desktop and mobile app" },
      { label: "Stack", value: "Flutter · Dart" },
      { label: "Platforms", value: "Windows · Android" },
      { label: "Year", value: "2026" },
    ],
    description: ["Syntax highlighting, themes and a snippet library, all offline, with export to image."],
    links: [{ label: "View source", href: `${github}CodeSnap` }],
    cover: { type: "desktop", image: "01_editor_dark" },
    screens: [
      { image: "01_editor_dark", caption: "Editor, dark theme" },
      { image: "02_editor_light", caption: "Editor, light theme" },
      { image: "03_library", caption: "Library" },
      { image: "04_export", caption: "Export" },
    ],
    phoneScreens: ["05_phone"],
  },
  {
    slug: "signal",
    name: "SIGNAL",
    kind: "Landing page",
    color: "#121212",
    categories: ["Website"],
    tagline: "A dark brutalist landing page for a made-up marketing studio.",
    facts: [
      { label: "Type", value: "Landing page" },
      { label: "Stack", value: "Next.js · React · TypeScript" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "Rebuilt section by section from a starter template, with a new brand, design system, components and copy.",
    ],
    links: [{ label: "View source", href: `${github}marketing-agency` }],
    cover: { type: "desktop", image: "hero" },
    screens: [
      { image: "hero", caption: "Hero" },
      { image: "services", caption: "Services" },
      { image: "work", caption: "Selected work" },
      { image: "process", caption: "Process" },
    ],
    phoneScreens: ["mobile"],
  },
  {
    slug: "lumen-shift",
    name: "Lumen Shift",
    kind: "Landing page",
    color: "#F08C6B",
    darkLetter: true,
    categories: ["Website"],
    tagline: "A theme switch where the new theme grows out of the button as a diamond.",
    facts: [
      { label: "Type", value: "Landing page" },
      { label: "Stack", value: "Next.js · TypeScript" },
      { label: "Year", value: "2026" },
    ],
    description: ["Two themes, Dawn and Dusk, with a diamond-shaped transition between them instead of the usual circle."],
    links: [{ label: "View source", href: `${github}lumen-shift` }],
    cover: { type: "desktop", image: "dawn" },
    screens: [
      { image: "dawn", caption: "Dawn" },
      { image: "transition", caption: "The diamond transition" },
      { image: "dusk", caption: "Dusk" },
      { image: "demo-dawn", caption: "Demo section" },
    ],
    phoneScreens: ["mobile-dawn"],
  },
  {
    slug: "tradeflux",
    name: "TradeFlux",
    kind: "Landing page",
    color: "#6741D9",
    categories: ["Website"],
    tagline: "A responsive landing page for a made-up crypto trading platform.",
    facts: [
      { label: "Type", value: "Landing page" },
      { label: "Stack", value: "Next.js · TypeScript" },
      { label: "Year", value: "2026" },
    ],
    description: [
      "A dashboard mock-up, partner strip, tabbed features and three pricing plans, all drawn in SVG and HTML with no image files.",
    ],
    links: [{ label: "View source", href: `${github}tradeflux-template` }],
    cover: { type: "desktop", image: "desktop" },
    screens: [{ image: "desktop", caption: "Desktop" }],
    phoneScreens: ["mobile"],
  },
];
