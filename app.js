/**
 * INNOAIVATORS TECHNOLOGIES - CLIENT PORTFOLIO APPLICATION
 * High-performance interactive portfolio & showcase logic
 */

// --------------------------------------------------------------------------
// PORTFOLIO DATA REPOSITORY
// --------------------------------------------------------------------------

const websitesData = [
  {
    id: "web-innoaivators",
    title: "InnoAivators Technologies",
    tagline: "AI & Digital Transformation Partner",
    url: "https://innoaivators.com/",
    category: "websites",
    badge: "Agency Flagship",
    badgeColor: "red",
    industry: "AI & Digital Engineering",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "AI Agents", "Cloudflare"],
    icon: "fa-solid fa-brain",
    description: "Corporate flagship platform highlighting AI transformation, enterprise software engineering, cloud architectures, and digital scaling blueprints.",
    highlights: ["Interactive service pathways", "Sub-second load times", "Lead capture funnel"]
  },
  {
    id: "web-glossixpro",
    title: "Glossixpro",
    tagline: "E-Publishing & Digital Media Partner",
    url: "https://glossixpro.com/",
    category: "websites",
    badge: "Enterprise Media",
    badgeColor: "indigo",
    industry: "E-Publishing & Content",
    techStack: ["Full-Stack Web", "XML Pipeline", "Digital Pre-Media", "AWS Cloud"],
    icon: "fa-solid fa-newspaper",
    description: "Full-service digital publishing portal facilitating global pre-media production, content conversion, XML workflows, and high-volume asset delivery.",
    highlights: ["Multi-format digital delivery", "Institutional publishing standards", "Streamlined client workflow"]
  },
  {
    id: "web-planetlife",
    title: "Planet Life Holidays",
    tagline: "Premier Travel Agency & Tour Operators",
    url: "https://planetlifeholidays.com/",
    category: "websites",
    badge: "Travel & Tourism",
    badgeColor: "emerald",
    industry: "International Tourism",
    techStack: ["Custom Web Portal", "Dynamic Package Engine", "WhatsApp Integration", "SEO Architecture"],
    icon: "fa-solid fa-plane-departure",
    description: "High-conversion tour booking portal showcasing domestic and global travel packages (Dubai, Malaysia, Singapore, Bali), custom itineraries, and WhatsApp inquiry.",
    highlights: ["Interactive package filter", "Instant quote via WhatsApp", "High-conversion lead capture"]
  },
  {
    id: "web-metallica",
    title: "Metallica GCC",
    tagline: "Projects, Fabrication & Industrial Services",
    url: "https://metallicagcc.com/",
    category: "websites",
    badge: "Industrial GCC",
    badgeColor: "amber",
    industry: "Heavy Engineering & Contracting",
    techStack: ["Corporate Web Architecture", "High-Res Portfolio Grid", "Mobile First", "Multi-region CDN"],
    icon: "fa-solid fa-industry",
    description: "Corporate portal for Metallica GCC, presenting heavy structural steel fabrication, piping, civil engineering, and contracting project portfolios across the GCC region.",
    highlights: ["B2B project showcase", "Compliance & certification badges", "Executive RFQ lead funnel"]
  },
  {
    id: "web-skynow",
    title: "SkyNow Holidays",
    tagline: "Luxury International Tours & Packages",
    url: "https://www.skynowholidays.com/",
    category: "websites",
    badge: "Luxury Travel",
    badgeColor: "rose",
    industry: "Luxury Vacations",
    techStack: ["React / Webflow UI", "Custom Itinerary Display", "Visa Assistance Hub", "Fast Cloud Caching"],
    icon: "fa-solid fa-earth-americas",
    description: "Bespoke international travel booking portal featuring curated luxury holiday packages, visa advisory systems, flight assistance, and personalized vacation planning.",
    highlights: ["Curated international packages", "Dynamic testimonial showcase", "Direct travel consultant connect"]
  },
  {
    id: "web-wetrek",
    title: "We Trek India",
    tagline: "Adventure Tourism & Trekking Partner",
    url: "https://wetrekindia.com/",
    category: "websites",
    badge: "Adventure Travel",
    badgeColor: "emerald",
    industry: "Experiential Tourism",
    techStack: ["Custom Booking Engine", "Altitude Mapping UI", "Gear Checklist Hub", "Payment Gateway"],
    icon: "fa-solid fa-mountain",
    description: "Experiential trekking and adventure portal featuring Himalayan expeditions, Western Ghats trails, altitude preparation guides, and group departure booking workflows.",
    highlights: ["Day-by-day itinerary breakdown", "Safety & fitness guidelines", "Group departures calendar"]
  },
  {
    id: "web-srisaibags",
    title: "Sri Sai Bags",
    tagline: "Eco-Friendly Bags & Custom Packaging",
    url: "https://srisaibags.in/",
    category: "websites",
    badge: "Manufacturing & B2B",
    badgeColor: "purple",
    industry: "Sustainable Packaging",
    techStack: ["E-Catalog Portal", "Bulk Quote Calculator", "Image Optimization", "Mobile Responsive"],
    icon: "fa-solid fa-bag-shopping",
    description: "Comprehensive B2B & retail product catalog for eco-friendly bag manufacturing: non-woven bags, jute bags, cotton pouches, wedding gift bags, and corporate packaging.",
    highlights: ["High-resolution product gallery", "Custom logo printing preview", "Bulk B2B quote generator"]
  },
  {
    id: "web-srimangalam",
    title: "Sri Mangalam Chit Funds Nellai",
    tagline: "Trusted Savings & Financial Plans",
    url: "https://www.srimangalamchitfundsnellai.com/",
    category: "websites",
    badge: "FinTech & Chits",
    badgeColor: "amber",
    industry: "Financial Services",
    techStack: ["FinTech Web Architecture", "Chit Calculator", "Govt. Compliance Security", "Customer Portal"],
    icon: "fa-solid fa-vault",
    description: "Regulated financial savings and chit fund platform in Nellai (Tirunelveli). Features transparent auction schedules, yield calculators, and enrollment workflows.",
    highlights: ["Interactive chit plan calculator", "Regulatory compliance trust badges", "Online payment instructions"]
  },
  {
    id: "web-garudatravels",
    title: "Garuda Travels Madurai",
    tagline: "Tours, Travels & Cab Booking Services",
    url: "https://www.garudatravelsmadurai.com/",
    category: "websites",
    badge: "Cab Booking & Logistics",
    badgeColor: "indigo",
    industry: "Transport & Logistics",
    techStack: ["Instant Cab Booking Engine", "Tariff Estimator", "WhatsApp Dispatch", "Google Maps API"],
    icon: "fa-solid fa-taxi",
    description: "Outstation and city taxi booking platform in Madurai with upfront per-km pricing, South India temple tour packages (Rameshwaram, Kanyakumari), and airport pickups.",
    highlights: ["Instant tariff rate calculator", "1-click WhatsApp taxi booking", "Sedan, SUV & Tempo fleet showcase"]
  },
  {
    id: "web-aatzy",
    title: "AATZY",
    tagline: "Creative Digital Agency & Brand Experience",
    url: "https://aatzy.com/",
    category: "websites",
    badge: "Creative Agency",
    badgeColor: "pink",
    industry: "Creative Brand Strategy",
    techStack: ["Next.js", "Kinetic Animations", "Tailwind CSS", "Modern Dark UI"],
    icon: "fa-solid fa-wand-magic-sparkles",
    description: "Minimalist, high-concept digital platform highlighting creative campaigns, visual storytelling, brand identity, and modern digital commerce.",
    highlights: ["Ultra-modern dark aesthetic", "Kinetic micro-interactions", "High-impact visual portfolio"]
  },
  {
    id: "web-srimayanmatrimony",
    title: "Sri Mayan Matrimony",
    tagline: "Trusted Matchmaking & Community Portal",
    url: "https://srimayanmatrimony.com/",
    category: "websites",
    badge: "Matrimony Portal",
    badgeColor: "pink",
    industry: "Social Matchmaking",
    techStack: ["Custom Database Architecture", "Horoscope Matching", "Photo Privacy Shield", "SMS/Email Alerts"],
    icon: "fa-solid fa-ring",
    description: "Community matchmaking web platform with 100% verified profiles, advanced caste/lifestyle filters, horoscope compatibility, and secure privacy controls.",
    highlights: ["Multi-step profile verification", "Photo watermarking & privacy locks", "Personalized match recommendations"]
  }
];

const appsData = [
  {
    id: "app-connectzy",
    title: "Connectzy",
    tagline: "Hyperlocal Community & Business Social Network",
    category: "apps",
    badge: "Mobile App • iOS & Android",
    badgeColor: "indigo",
    platforms: ["Google Play", "Apple App Store"],
    techStack: ["Flutter / React Native", "Node.js Backend", "Socket.io", "PostgreSQL", "Firebase Push"],
    icon: "fa-solid fa-users",
    description: "A fast, engaging mobile social and business network connecting local communities, neighborhood commerce, services, and real-time interest feeds.",
    features: [
      "Real-time neighborhood community feeds",
      "Instant 1-on-1 and group chat messaging",
      "Hyperlocal business directory & discovery",
      "Event creation, RSVP & reminder alerts",
      "Geolocation search with boundary filters"
    ]
  },
  {
    id: "app-srimayan",
    title: "Sri Mayan Matrimony App",
    tagline: "Next-Gen Matrimonial Matchmaking Mobile App",
    category: "apps",
    badge: "Mobile App • iOS & Android",
    badgeColor: "pink",
    platforms: ["Google Play", "Apple App Store"],
    techStack: ["Cross-Platform Mobile", "Secure Biometrics", "End-to-End Encryption", "Cloud Media Storage"],
    icon: "fa-solid fa-heart",
    description: "A secure, privacy-first mobile application built for verified community matchmaking, real-time prospective partner notifications, and horoscope compatibility.",
    features: [
      "Biometric fingerprint/Face ID secure login",
      "Smart algorithmic partner recommendations",
      "Horoscope generation & compatibility analysis",
      "Instant push notifications for profile visits & interests",
      "Strict photo privacy with watermarked protection"
    ]
  }
];

const productsData = [
  {
    id: "prod-erp",
    title: "Innoaivators Custom ERP",
    tagline: "Modular Enterprise Resource Planning Engine",
    category: "products",
    badge: "Enterprise SaaS",
    badgeColor: "emerald",
    techStack: ["Node.js / Python", "PostgreSQL", "Redis", "Docker", "Tailwind UI"],
    icon: "fa-solid fa-network-wired",
    description: "A fully custom, modular ERP system engineered for manufacturers, traders, and service corporations without recurring per-seat licensing penalties.",
    features: [
      "Multi-warehouse inventory & batch tracking",
      "Automated Purchase Orders & Sales Invoicing",
      "Real-time GST-compliant accounts & ledger books",
      "HRMS, biometric attendance & payroll processing",
      "Executive KPI analytics & automated PDF reports"
    ]
  },
  {
    id: "prod-crm",
    title: "Innoaivators AI CRM",
    tagline: "Intelligent AI-Powered Customer Growth System",
    category: "products",
    badge: "AI Automation",
    badgeColor: "purple",
    techStack: ["OpenAI / Gemini API", "WhatsApp Cloud API", "FastAPI", "React Dashboard"],
    icon: "fa-solid fa-brain",
    description: "Automate inbound lead capture across your website, WhatsApp, and social media. Uses AI to qualify leads, forecast deal closures, and trigger smart follow-up drips.",
    features: [
      "Official WhatsApp Business API integration",
      "AI conversational chatbot for instant qualification",
      "Automated lead scoring & deal pipeline tracker",
      "Scheduled drip sequences via email & WhatsApp",
      "Omnichannel agent inbox with collision detection"
    ]
  },
  {
    id: "prod-billing",
    title: "Innoaivators Custom Billing System",
    tagline: "High-Speed POS & Multi-Counter Cloud Billing",
    category: "products",
    badge: "POS & Billing",
    badgeColor: "amber",
    techStack: ["Offline-First PWA", "Thermal ESC/POS", "Barcode Engine", "Cloud Sync"],
    icon: "fa-solid fa-receipt",
    description: "Lightning-fast billing system designed for retail supermarkets, wholesale distributors, and restaurants. Works seamlessly even during internet drops.",
    features: [
      "Sub-second barcode scanning & item lookup",
      "ESC/POS thermal printer direct integration",
      "GST-compliant B2B & B2C tax invoices",
      "Customer credit ledger (Khata) & outstanding balance",
      "1-Click WhatsApp digital invoice PDF dispatch"
    ]
  },
  {
    id: "prod-software",
    title: "Innoaivators Custom Software Engineering",
    tagline: "Bespoke Enterprise Software & Systems Architecture",
    category: "products",
    badge: "Custom Engineering",
    badgeColor: "red",
    techStack: ["Microservices", "REST / GraphQL", "Cloud Architecture", "Zero Trust Security"],
    icon: "fa-solid fa-laptop-code",
    description: "Tailor-engineered software architectures built to automate unique corporate workflows, integrate legacy systems, and solve complex business bottlenecks.",
    features: [
      "Custom workflow & approvals automation",
      "Third-party API & hardware IoT integrations",
      "Bank-grade role-based security & audit trails",
      "High-concurrency database design & scaling",
      "Dedicated SLAs & 24/7 infrastructure monitoring"
    ]
  }
];

const reelsData = [
  // Client 1 (3 Reels)
  {
    id: "reel-1-1",
    client: "Client 1",
    clientClass: "client-1",
    code: "Dcn8MZysrcw",
    url: "https://www.instagram.com/reel/Dcn8MZysrcw/?utm_source=ig_web_copy_link&knvt=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Viral Brand Hook",
    category: "marketing",
    metrics: "125K+ Views",
    accent: "pink",
    title: "Dynamic High-Retention Reel 1",
    description: "Fast-paced visual hook, engaging kinetic typography, and trending sound alignment driving viral brand reach."
  },
  {
    id: "reel-1-2",
    client: "Client 1",
    clientClass: "client-1",
    code: "Dc6b-5ZM89h",
    url: "https://www.instagram.com/reel/Dc6b-5ZM89h/?utm_source=ig_web_copy_link&evlk=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Product Spotlight",
    category: "marketing",
    metrics: "85K+ Views",
    accent: "pink",
    title: "Product Showcase Reel 2",
    description: "Cinematic close-up product pacing, seamless transitions, and high-converting CTA structure."
  },
  {
    id: "reel-1-3",
    client: "Client 1",
    clientClass: "client-1",
    code: "DcdxMFCM-VU",
    url: "https://www.instagram.com/reel/DcdxMFCM-VU/?utm_source=ig_web_copy_link&cnvx=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Offer & Conversion",
    category: "marketing",
    metrics: "95K+ Views",
    accent: "pink",
    title: "High-Converting Offer Reel 3",
    description: "Urgency-driven promotional storytelling engineered for maximum profile visits and direct DM inquiries."
  },

  // Client 3 (2 Reels)
  {
    id: "reel-3-1",
    client: "Client 3",
    clientClass: "client-3",
    code: "De1x1h6gabX",
    url: "https://www.instagram.com/reel/De1x1h6gabX/?utm_source=ig_web_copy_link&evlk=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Service Experience",
    category: "marketing",
    metrics: "160K+ Views",
    accent: "rose",
    title: "Customer Journey Reel 1",
    description: "First-person customer walkthrough highlighting premium service quality, ambiance, and immediate satisfaction."
  },
  {
    id: "reel-3-2",
    client: "Client 3",
    clientClass: "client-3",
    code: "DerbD5tBPrT",
    url: "https://www.instagram.com/reel/DerbD5tBPrT/?utm_source=ig_web_copy_link&lqvp=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Viral Reel",
    category: "marketing",
    metrics: "210K+ Views",
    accent: "rose",
    title: "High-Energy Kinetic Edit 2",
    description: "Multi-layered sound effects, speed ramps, and crisp visual hooks that stop viewers dead in their feed."
  },

  // Client 4 (3 Reels)
  {
    id: "reel-4-1",
    client: "Client 4",
    clientClass: "client-4",
    code: "DfIGKZBPEyw",
    url: "https://www.instagram.com/reel/DfIGKZBPEyw/?utm_source=ig_web_copy_link&fqnt=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Educational / Problem Solver",
    category: "marketing",
    metrics: "115K+ Views",
    accent: "amber",
    title: "Problem Solver Reel 1",
    description: "Addressing common customer pain points with direct, entertaining solutions that position the brand as an authority."
  },
  {
    id: "reel-4-2",
    client: "Client 4",
    clientClass: "client-4",
    code: "DejpRIYE6AQ",
    url: "https://www.instagram.com/reel/DejpRIYE6AQ/?utm_source=ig_web_copy_link&jplx=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Transformational Showcase",
    category: "marketing",
    metrics: "135K+ Views",
    accent: "amber",
    title: "Before & After Reel 2",
    description: "Compelling visual contrast showing immediate value delivered, creating massive organic shares across WhatsApp & IG."
  },
  {
    id: "reel-4-3",
    client: "Client 4",
    clientClass: "client-4",
    code: "DeRnq71E6Qi",
    url: "https://www.instagram.com/reel/DeRnq71E6Qi/?utm_source=ig_web_copy_link&hvrq=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Promotional Call-To-Action",
    category: "marketing",
    metrics: "88K+ Views",
    accent: "amber",
    title: "Flash Deal & Event Reel 3",
    description: "Time-limited promotional video with bold text overlays driving click-throughs to website and WhatsApp."
  },

  // Client 5 (2 Reels)
  {
    id: "reel-5-1",
    client: "Client 5",
    clientClass: "client-5",
    code: "DfpHXVRDLJO",
    url: "https://www.instagram.com/reel/DfpHXVRDLJO/?utm_source=ig_web_copy_link&dmpr=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Sensory & Visual Craft",
    category: "marketing",
    metrics: "180K+ Views",
    accent: "emerald",
    title: "Cinematic Atmosphere Reel 1",
    description: "Crisp lighting, macro lens perspectives, and ASMR-grade audio design that elevates product desirability."
  },
  {
    id: "reel-5-2",
    client: "Client 5",
    clientClass: "client-5",
    code: "DfrsHBSERjs",
    url: "https://www.instagram.com/reel/DfrsHBSERjs/?utm_source=ig_web_copy_link&dmpr=MzRlODBiNWFlZA==&avpt=MzRlODBiNWFlZA==",
    type: "Viral Hook Reel",
    category: "marketing",
    metrics: "145K+ Views",
    accent: "emerald",
    title: "Story Hook & Climax Reel 2",
    description: "High retention storytelling that keeps watch time above 100%, signaling Instagram's algorithm for exponential reach."
  }
];

// Combine all items for universal filter and search
const allItems = [
  ...websitesData,
  ...appsData,
  ...productsData,
  ...reelsData
];

// --------------------------------------------------------------------------
// CARD RENDERING ENGINES
// --------------------------------------------------------------------------

function renderWebsiteCard(item) {
  const techPills = item.techStack.slice(0, 3).map(t => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">${t}</span>`).join('');

  return `
    <div class="project-card group" data-category="websites" data-id="${item.id}">
      <!-- Live Scaled Laptop Display Header -->
      <div class="project-card-header h-[236px] relative overflow-hidden bg-slate-950 border-b border-slate-800/80">
        <!-- Mockup Browser Bar (Laptop Browser Chrome) -->
        <div class="mockup-bar h-7 flex items-center justify-between px-3 bg-slate-900 border-b border-slate-800 text-[10px] font-mono text-slate-400 z-10 relative">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-sm"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-sm"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-sm"></span>
          </div>
          <div class="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800/80 text-[10px] text-red-400 max-w-[170px] truncate">
            <i class="fa-solid fa-lock text-[8px] text-emerald-400"></i>
            <span>${item.url.replace('https://', '').replace(/\/$/, '')}</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="launchSiteViewer('${item.url}', '${item.title.replace(/'/g, "\\'")}', '${item.id}')" class="text-red-400 hover:text-white transition-colors" title="Maximize Simulator">
              <i class="fa-solid fa-expand text-[10px]"></i>
            </button>
            <a href="${item.url}" target="_blank" class="text-slate-400 hover:text-white transition-colors" title="Open in External Tab">
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- 1280px Desktop Screen Scaled Viewport -->
        <div class="laptop-screen-viewport relative w-full h-[calc(100%-28px)] overflow-hidden bg-slate-950 cursor-pointer" onclick="launchSiteViewer('${item.url}', '${item.title.replace(/'/g, "\\'")}', '${item.id}')" title="Click to Maximize Live Simulator">
          <iframe 
            src="${item.url}" 
            class="laptop-screen-iframe" 
            tabindex="-1"
            aria-hidden="true"
            scrolling="no" 
            loading="lazy" 
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups" 
            title="${item.title}">
          </iframe>
          
          <!-- Desktop Mode Badge -->
          <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-red-500/40 text-red-300 text-[9px] font-mono flex items-center gap-1.5 shadow-md pointer-events-none z-10">
            <i class="fa-solid fa-laptop text-[8px] text-red-400"></i>
            <span>1280px Laptop View</span>
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
            <span class="px-3 py-1.5 rounded-full bg-slate-900/95 border border-red-400/60 text-red-300 text-xs font-semibold shadow-xl flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
              <i class="fa-solid fa-expand text-[10px]"></i> Open Full Simulator
            </span>
          </div>
        </div>
      </div>

      <div class="project-card-body">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-mono text-red-400">${item.industry}</span>
          <span class="text-[11px] text-emerald-400 flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Site
          </span>
        </div>

        <h3 class="font-display font-bold text-lg text-white group-hover:text-red-400 transition-colors mb-1 cursor-pointer" onclick="launchSiteViewer('${item.url}', '${item.title.replace(/'/g, "\\'")}', '${item.id}')">
          ${item.title}
        </h3>
        
        <p class="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
          ${item.description}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${techPills}
        </div>

        <div class="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <a href="${item.url}" target="_blank" rel="noopener" class="btn-primary flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-red-500/25">
            <span>Visit Live</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
          <button onclick="launchSiteViewer('${item.url}', '${item.title.replace(/'/g, "\\'")}', '${item.id}')" class="px-2.5 py-2 rounded-lg bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-xs font-semibold text-red-300 hover:text-white transition-all flex items-center gap-1" title="Maximize Simulator">
            <i class="fa-solid fa-laptop text-[10px]"></i>
            <span class="hidden sm:inline">Maximize</span>
          </button>
          <button onclick="openModal('${item.id}')" class="px-2.5 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1" title="View Project Specs">
            <i class="fa-solid fa-circle-info"></i>
            <span class="hidden sm:inline">Specs</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderAppCard(item) {
  const featuresList = item.features.map(f => `
    <li class="flex items-center gap-2 text-xs text-slate-300">
      <i class="fa-solid fa-check text-indigo-400 text-[11px]"></i>
      <span>${f}</span>
    </li>
  `).join('');

  const techPills = item.techStack.map(t => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">${t}</span>`).join('');

  return `
    <div class="p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-indigo-500/30 hover:border-indigo-500/60 transition-all shadow-xl flex flex-col md:flex-row gap-6 items-center" data-category="apps" data-id="${item.id}">
      
      <!-- Phone Mockup Frame -->
      <div class="phone-frame w-48 shrink-0">
        <div class="phone-screen p-4 flex flex-col items-center justify-center text-center aspect-[9/16]">
          <div class="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-2xl mb-3 shadow-inner">
            <i class="${item.icon}"></i>
          </div>
          <div class="font-display font-bold text-white text-sm mb-1">${item.title}</div>
          <div class="text-[10px] text-indigo-300 leading-tight mb-4">${item.tagline}</div>
          <div class="w-full py-1.5 rounded-lg bg-indigo-600 text-[10px] font-bold text-white shadow-md">
            Native App
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
              ${item.badge}
            </span>
            <span class="text-xs text-slate-400 font-mono">Cross-Platform</span>
          </div>

          <h3 class="font-display font-bold text-2xl text-white mb-2">${item.title}</h3>
          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">${item.description}</p>

          <ul class="space-y-1.5 mb-4">
            ${featuresList}
          </ul>

          <div class="flex flex-wrap gap-1.5 mb-6">
            ${techPills}
          </div>
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-slate-800">
          <a href="https://wa.me/919087786231?text=Hi%20Innoaivators%2C%20I%20am%20interested%20in%20building%20a%20mobile%20app%20like%20${encodeURIComponent(item.title)}." target="_blank" class="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Request App Demo</span>
          </a>
          <button onclick="openModal('${item.id}')" class="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-semibold text-slate-300 hover:text-white transition-all">
            Architecture Specs
          </button>
        </div>
      </div>

    </div>
  `;
}

function renderProductCard(item) {
  const featuresList = item.features.map(f => `
    <li class="flex items-center gap-2 text-xs text-slate-300">
      <i class="fa-solid fa-circle-check text-emerald-400 text-[11px]"></i>
      <span>${f}</span>
    </li>
  `).join('');

  return `
    <div class="p-8 rounded-3xl bg-slate-950/70 border border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-xl flex flex-col justify-between" data-category="products" data-id="${item.id}">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl">
            <i class="${item.icon}"></i>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            ${item.badge}
          </span>
        </div>

        <h3 class="font-display font-bold text-2xl text-white mb-1">${item.title}</h3>
        <p class="text-xs font-mono text-emerald-400 mb-3">${item.tagline}</p>
        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">${item.description}</p>

        <div class="bg-slate-900/60 rounded-xl p-4 border border-slate-800/80 mb-6">
          <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">Core Capabilities:</div>
          <ul class="space-y-2">
            ${featuresList}
          </ul>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <a href="https://wa.me/919087786231?text=Hi%20Innoaivators%2C%20I%20would%20like%20a%20custom%20demonstration%20of%20${encodeURIComponent(item.title)}." target="_blank" class="btn-primary flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
          <i class="fa-solid fa-play text-xs"></i>
          <span>Schedule Live Demo</span>
        </a>
        <button onclick="openModal('${item.id}')" class="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all">
          Specs
        </button>
      </div>
    </div>
  `;
}

function renderReelCard(item) {
  return `
    <div class="reel-card group" data-category="marketing" data-client="${item.clientClass}" data-id="${item.id}">
      <!-- Reel Top Bar -->
      <div class="flex items-center justify-between px-3.5 py-2 bg-slate-950 border-b border-slate-800 text-xs">
        <div class="flex items-center gap-1.5">
          <i class="fa-brands fa-instagram text-pink-400 text-sm"></i>
          <span class="font-mono text-[11px] text-pink-300 font-semibold">${item.client}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded bg-pink-500/15 border border-pink-500/30 text-pink-300 font-bold text-[10px]">
            ${item.metrics}
          </span>
          <button onclick="openReelTheater('${item.id}')" class="text-slate-400 hover:text-white transition-colors" title="Full Theater Mode">
            <i class="fa-solid fa-expand text-[11px]"></i>
          </button>
        </div>
      </div>

      <!-- Live Video Running Outside Automatically -->
      <div class="reel-embed-container relative bg-black">
        <iframe 
          src="https://www.instagram.com/reel/${item.code}/embed/" 
          class="w-full h-[470px] border-none" 
          tabindex="-1"
          aria-hidden="true"
          loading="lazy" 
          scrolling="no" 
          allowtransparency="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
          allowfullscreen 
          title="${item.title}">
        </iframe>

        <!-- Mic Symbol to Enable Sound / Open Full Sound Cinema Player -->
        <button 
          onclick="openReelTheater('${item.id}')" 
          class="mic-sound-btn absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full bg-slate-950/90 hover:bg-red-600 text-white backdrop-blur-md border border-red-500/40 text-xs font-semibold flex items-center gap-1.5 shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95 group/mic"
          title="Click to Enable Sound / Open Theater Player">
          <i class="fa-solid fa-microphone text-red-400 group-hover/mic:text-white text-xs"></i>
          <span class="text-[10px] uppercase font-mono tracking-wider">Enable Sound</span>
        </button>
      </div>

      <!-- Card Details & Actions -->
      <div class="p-4 flex flex-col flex-1 justify-between bg-slate-950/95 border-t border-slate-800/80">
        <div>
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-[10px] font-mono text-pink-400 uppercase tracking-wider">${item.type}</span>
            <span class="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Running
            </span>
          </div>
          <h4 class="font-display font-semibold text-sm text-white mb-2 leading-tight">${item.title}</h4>
          <p class="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">${item.description}</p>
        </div>

        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <a href="${item.url}" target="_blank" rel="noopener" class="btn-primary flex-1 py-2 rounded-lg text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-md">
            <i class="fa-brands fa-instagram text-sm"></i>
            <span>Watch on Instagram</span>
          </a>
          <button onclick="openReelTheater('${item.id}')" class="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1" title="Theater Mode">
            <i class="fa-solid fa-expand text-[11px]"></i>
            <span class="hidden sm:inline">Theater</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// POPULATE ALL SECTIONS
// --------------------------------------------------------------------------

function initPortfolio() {
  // Populate Main Combined Grid
  const portfolioGrid = document.getElementById("portfolioGrid");
  if (portfolioGrid) {
    let combinedHTML = "";

    // Render top websites
    websitesData.forEach(site => {
      combinedHTML += renderWebsiteCard(site);
    });

    // Render mobile apps
    appsData.forEach(app => {
      combinedHTML += `
        <div class="project-card group" data-category="apps" data-id="${app.id}">
          <div class="project-card-header bg-gradient-to-tr from-indigo-950 to-slate-900">
            <div class="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-3xl shadow-xl">
              <i class="${app.icon}"></i>
            </div>
            <span class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
              Mobile App
            </span>
          </div>
          <div class="project-card-body">
            <span class="text-xs font-mono text-indigo-400 mb-1">iOS & Android App</span>
            <h3 class="font-display font-bold text-lg text-white group-hover:text-indigo-300 transition-colors mb-1">${app.title}</h3>
            <p class="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">${app.description}</p>
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${app.techStack.slice(0, 3).map(t => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">${t}</span>`).join('')}
            </div>
            <div class="mt-auto pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a href="#apps" class="btn-primary flex-1 py-2 rounded-lg text-xs font-bold text-center">View App Details</a>
              <button onclick="openModal('${app.id}')" class="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-white">Specs</button>
            </div>
          </div>
        </div>
      `;
    });

    // Render products
    productsData.forEach(prod => {
      combinedHTML += `
        <div class="project-card group" data-category="products" data-id="${prod.id}">
          <div class="project-card-header bg-gradient-to-tr from-emerald-950 to-slate-900">
            <div class="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-3xl shadow-xl">
              <i class="${prod.icon}"></i>
            </div>
            <span class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              ${prod.badge}
            </span>
          </div>
          <div class="project-card-body">
            <span class="text-xs font-mono text-emerald-400 mb-1">Enterprise Software</span>
            <h3 class="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors mb-1">${prod.title}</h3>
            <p class="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">${prod.description}</p>
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${prod.features.slice(0, 2).map(f => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-emerald-300 border border-emerald-900/60">${f}</span>`).join('')}
            </div>
            <div class="mt-auto pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a href="#products" class="btn-primary flex-1 py-2 rounded-lg text-xs font-bold text-center">Product Suite</a>
              <button onclick="openModal('${prod.id}')" class="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-white">Specs</button>
            </div>
          </div>
        </div>
      `;
    });

    // Render sample reels in main grid
    reelsData.slice(0, 6).forEach(reel => {
      combinedHTML += renderReelCard(reel);
    });

    portfolioGrid.innerHTML = combinedHTML;
  }

  // Populate Dedicated Websites Section
  const websitesContainer = document.getElementById("websitesContainer");
  if (websitesContainer) {
    websitesContainer.innerHTML = websitesData.map(site => renderWebsiteCard(site)).join('');
  }

  // Populate Dedicated Apps Section
  const appsContainer = document.getElementById("appsContainer");
  if (appsContainer) {
    appsContainer.innerHTML = appsData.map(app => renderAppCard(app)).join('');
  }

  // Populate Dedicated Products Section
  const productsContainer = document.getElementById("productsContainer");
  if (productsContainer) {
    productsContainer.innerHTML = productsData.map(prod => renderProductCard(prod)).join('');
  }

  // Populate Dedicated Reels Section
  renderReelsSection("all");

  // Setup Listeners
  setupFilters();
  setupSearch();
  setupReelSelect();
  calculateEstimate();
  populateSiteDropdown();

  // Setup Dynamic Laptop Scalers (1280px Desktop scale)
  initLaptopScreenScalers();
  setTimeout(updateLaptopScales, 150);
  setTimeout(updateLaptopScales, 500);
}

// --------------------------------------------------------------------------
// DYNAMIC LAPTOP SCREEN SCALER (1280px Desktop Width scaled neatly to card)
// --------------------------------------------------------------------------

let laptopScreenResizeObserver = null;

function updateLaptopScales() {
  const viewports = document.querySelectorAll('.laptop-screen-viewport');
  viewports.forEach(vp => {
    const w = vp.offsetWidth;
    const h = vp.offsetHeight || 205;
    if (w > 0) {
      // 1280px standard laptop desktop width
      const scale = w / 1280;
      const iframe = vp.querySelector('iframe');
      if (iframe) {
        iframe.style.width = '1280px';
        iframe.style.height = `${Math.ceil(h / scale)}px`;
        iframe.style.transform = `scale(${scale})`;
        iframe.style.transformOrigin = '0 0';
        vp.style.setProperty('--laptop-scale', scale);
      }
    }
  });
}

function initLaptopScreenScalers() {
  updateLaptopScales();

  // ResizeObserver for instantaneous automatic scaling on window resize, container resize, or tab filter
  if (typeof ResizeObserver !== 'undefined') {
    if (laptopScreenResizeObserver) {
      laptopScreenResizeObserver.disconnect();
    }
    laptopScreenResizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateLaptopScales);
    });

    document.querySelectorAll('.laptop-screen-viewport').forEach(vp => {
      laptopScreenResizeObserver.observe(vp);
    });
  }

  window.addEventListener('resize', () => {
    requestAnimationFrame(updateLaptopScales);
  });
}

// --------------------------------------------------------------------------
// REELS SECTION FILTERING
// --------------------------------------------------------------------------

function renderReelsSection(clientFilter = "all") {
  const reelsContainer = document.getElementById("reelsContainer");
  if (!reelsContainer) return;

  const filtered = clientFilter === "all"
    ? reelsData
    : reelsData.filter(r => r.clientClass === clientFilter);

  reelsContainer.innerHTML = filtered.map(r => renderReelCard(r)).join('');
}

function setupReelSelect() {
  const reelSelect = document.getElementById("reelClientSelect");
  if (reelSelect) {
    reelSelect.addEventListener("change", (e) => {
      renderReelsSection(e.target.value);
    });
  }
}

// --------------------------------------------------------------------------
// MAIN FILTER TABS LOGIC
// --------------------------------------------------------------------------

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");

      const filter = btn.getAttribute("data-filter");
      filterPortfolioGrid(filter);
    });
  });
}

function filterPortfolioGrid(category) {
  const cards = document.querySelectorAll("#portfolioGrid > div");
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  toggleNoResults(visibleCount === 0);
  requestAnimationFrame(updateLaptopScales);
  setTimeout(updateLaptopScales, 60);
}

// --------------------------------------------------------------------------
// SEARCH ENGINE
// --------------------------------------------------------------------------

function setupSearch() {
  const searchInput = document.getElementById("portfolioSearch");
  const clearBtn = document.getElementById("clearSearch");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (clearBtn) clearBtn.style.display = query ? "block" : "none";

    searchCards(query);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      resetFilters();
    });
  }
}

function searchCards(query) {
  const cards = document.querySelectorAll("#portfolioGrid > div");
  let visibleCount = 0;

  cards.forEach(card => {
    const cardId = card.getAttribute("data-id");
    const item = allItems.find(i => i.id === cardId);

    if (!item) {
      card.style.display = "none";
      return;
    }

    const searchableText = `
      ${item.title || ''} 
      ${item.tagline || ''} 
      ${item.category || ''} 
      ${item.industry || ''} 
      ${item.description || ''} 
      ${(item.techStack || []).join(' ')} 
      ${(item.features || []).join(' ')}
      ${item.client || ''}
      ${item.url || ''}
    `.toLowerCase();

    if (searchableText.includes(query)) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  toggleNoResults(visibleCount === 0);
  requestAnimationFrame(updateLaptopScales);
  setTimeout(updateLaptopScales, 60);
}

function resetFilters() {
  const searchInput = document.getElementById("portfolioSearch");
  if (searchInput) searchInput.value = "";

  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(b => b.classList.remove("active-filter"));
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) allBtn.classList.add("active-filter");

  filterPortfolioGrid("all");
}

function toggleNoResults(show) {
  const noResults = document.getElementById("noResults");
  if (noResults) {
    noResults.style.display = show ? "block" : "none";
  }
}

// --------------------------------------------------------------------------
// QUICK VIEW MODAL
// --------------------------------------------------------------------------

function openModal(id) {
  const item = allItems.find(i => i.id === id);
  if (!item) return;

  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");

  let ctaHTML = "";
  if (item.url) {
    ctaHTML = `
      <a href="${item.url}" target="_blank" rel="noopener" class="btn-primary px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
        <span>Visit Live Website</span>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    `;
  }

  const inquiryUrl = `https://wa.me/919087786231?text=Hi%20Innoaivators%20Technologies%2C%20I%20am%20interested%20in%20a%20solution%20similar%20to%20${encodeURIComponent(item.title)}.`;

  content.innerHTML = `
    <div class="flex items-center gap-2 text-xs font-mono text-red-400 mb-2">
      <i class="fa-solid fa-layer-group"></i>
      <span class="uppercase">${item.category} • ${item.badge || 'Project'}</span>
    </div>

    <h2 class="font-display font-bold text-2xl sm:text-3xl text-white mb-1">${item.title}</h2>
    <p class="text-xs sm:text-sm text-slate-400 mb-6 font-mono">${item.tagline || ''}</p>

    <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6">
      <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Project Overview</h4>
      <p class="text-slate-200 text-sm leading-relaxed">${item.description}</p>
    </div>

    ${item.techStack ? `
      <div class="mb-6">
        <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technology & Stack Architecture</h4>
        <div class="flex flex-wrap gap-2">
          ${item.techStack.map(t => `<span class="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-red-300 border border-red-500/25">${t}</span>`).join('')}
        </div>
      </div>
    ` : ''}

    ${item.features ? `
      <div class="mb-6">
        <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Functional Capabilities</h4>
        <ul class="space-y-2">
          ${item.features.map(f => `<li class="flex items-center gap-2 text-xs sm:text-sm text-slate-300"><i class="fa-solid fa-circle-check text-red-400"></i><span>${f}</span></li>`).join('')}
        </ul>
      </div>
    ` : ''}

    ${item.highlights ? `
      <div class="mb-6">
        <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Project Highlights</h4>
        <ul class="space-y-1.5">
          ${item.highlights.map(h => `<li class="flex items-center gap-2 text-xs sm:text-sm text-slate-300"><i class="fa-solid fa-arrow-right text-indigo-400 text-xs"></i><span>${h}</span></li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div class="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
      ${ctaHTML}
      <a href="${inquiryUrl}" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 text-xs font-bold flex items-center gap-2">
        <i class="fa-brands fa-whatsapp text-sm"></i>
        <span>Inquire Similar Solution</span>
      </a>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// --------------------------------------------------------------------------
// IN-SITE REEL AUDIO CONTROLLER & EMBED TOGGLE
// --------------------------------------------------------------------------

function toggleReelAudio(reelId, event) {
  if (event) event.stopPropagation();
  const video = document.getElementById(`video-${reelId}`);
  const btn = document.getElementById(`micBtn-${reelId}`);
  const reel = reelsData.find(r => r.id === reelId);
  const title = reel ? reel.title : "Reel";

  if (!video || !btn) return;
  const icon = btn.querySelector('.mic-icon');
  const label = btn.querySelector('.mic-label');

  if (video.muted) {
    // Mute any other currently playing video so audio does not overlap
    document.querySelectorAll('.reel-video-element').forEach(v => {
      if (v !== video) {
        v.muted = true;
        const otherId = v.id.replace('video-', '');
        const otherBtn = document.getElementById(`micBtn-${otherId}`);
        if (otherBtn) {
          const otherIcon = otherBtn.querySelector('.mic-icon');
          const otherLabel = otherBtn.querySelector('.mic-label');
          if (otherIcon) otherIcon.className = "fa-solid fa-microphone-slash text-red-400 mic-icon text-xs transition-colors";
          if (otherLabel) otherLabel.textContent = "Sound Off";
          otherBtn.classList.remove('bg-red-600', 'border-red-400', 'ring-2', 'ring-red-500/50');
          otherBtn.classList.add('bg-slate-950/85', 'border-white/20');
        }
      }
    });

    video.muted = false;
    video.volume = 1.0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.log("Audio playback notice:", err);
      });
    }

    if (icon) icon.className = "fa-solid fa-microphone text-white mic-icon text-xs animate-bounce";
    if (label) label.textContent = "Sound On";
    btn.classList.remove('bg-slate-950/85', 'border-white/20');
    btn.classList.add('bg-red-600', 'border-red-400', 'ring-2', 'ring-red-500/50');

    showToast(`🔊 Sound Enabled: ${title}`);
  } else {
    video.muted = true;
    if (icon) icon.className = "fa-solid fa-microphone-slash text-red-400 mic-icon text-xs transition-colors";
    if (label) label.textContent = "Sound Off";
    btn.classList.remove('bg-red-600', 'border-red-400', 'ring-2', 'ring-red-500/50');
    btn.classList.add('bg-slate-950/85', 'border-white/20');

    showToast("🔇 Sound Muted.");
  }
}

function switchReelToEmbed(reelId, code) {
  const box = document.getElementById(`reelBox-${reelId}`);
  if (!box) return;
  box.innerHTML = `
    <iframe 
      src="https://www.instagram.com/reel/${code}/embed/" 
      class="w-full h-full border-none" 
      tabindex="-1"
      aria-hidden="true"
      scrolling="no" 
      allowtransparency="true" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  `;
  showToast("Loaded official Instagram reel player.");
}

function playReelInCard(id, code) {
  const container = document.getElementById(`thumb-${id}`);
  if (!container) return;
  container.innerHTML = `
    <iframe class="reel-inline-frame" src="https://www.instagram.com/reel/${code}/embed/" width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
  showToast("Playing video reel directly inside card...");
}

// --------------------------------------------------------------------------
// IN-SITE LIVE WEBSITE SIMULATOR CONTROLLER
// --------------------------------------------------------------------------

let currentViewerUrl = "";
let currentViewerTitle = "";
let currentViewerId = "";

function launchSiteViewer(url, title, id) {
  currentViewerUrl = url;
  currentViewerTitle = title;
  currentViewerId = id;

  const modal = document.getElementById("siteViewerModal");
  const iframe = document.getElementById("siteViewerIframe");
  const titleEl = document.getElementById("siteViewerTitle");
  const addrEl = document.getElementById("siteViewerAddressText");
  const extLink = document.getElementById("siteViewerExternalLink");
  const loader = document.getElementById("siteViewerLoader");
  const loaderText = document.getElementById("siteViewerLoaderText");
  const select = document.getElementById("siteViewerSelect");

  if (titleEl) titleEl.textContent = title;
  if (addrEl) addrEl.textContent = url;
  if (extLink) extLink.href = url;
  if (loaderText) loaderText.textContent = `Connecting to ${url.replace('https://', '').replace(/\/$/, '')}...`;

  if (select && id) {
    select.value = id;
  }

  if (loader) {
    loader.style.display = "flex";
    loader.style.opacity = "1";
  }

  if (iframe) {
    iframe.src = url;
  }

  if (modal) modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  showToast(`Running ${title} live inside simulator...`);
}

function handleIframeLoaded() {
  const loader = document.getElementById("siteViewerLoader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 250);
  }
}

function closeSiteViewer() {
  const modal = document.getElementById("siteViewerModal");
  const iframe = document.getElementById("siteViewerIframe");
  if (iframe) iframe.src = "about:blank";
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function reloadSiteViewer() {
  const iframe = document.getElementById("siteViewerIframe");
  const loader = document.getElementById("siteViewerLoader");
  if (loader) {
    loader.style.display = "flex";
    loader.style.opacity = "1";
  }
  if (iframe && currentViewerUrl) {
    iframe.src = currentViewerUrl;
  }
}

function toggleFullscreenSimulator() {
  const modal = document.getElementById("siteViewerModal");
  if (!document.fullscreenElement) {
    if (modal && modal.requestFullscreen) {
      modal.requestFullscreen().catch(err => {
        console.log("Fullscreen request failed", err);
      });
    }
  } else {
    document.exitFullscreen();
  }
}

function setViewerDevice(mode) {
  const iframe = document.getElementById("siteViewerIframe");
  if (!iframe) return;

  iframe.classList.remove("viewport-desktop", "viewport-tablet", "viewport-mobile");
  ['desktop', 'tablet', 'mobile'].forEach(m => {
    const btn = document.getElementById(`devBtn-${m}`);
    if (btn) btn.classList.toggle("active-device", m === mode);
  });

  if (mode === 'desktop') {
    iframe.classList.add("viewport-desktop");
    showToast("Switched to Desktop View (100%)");
  } else if (mode === 'tablet') {
    iframe.classList.add("viewport-tablet");
    showToast("Simulating Tablet View (768px)");
  } else if (mode === 'mobile') {
    iframe.classList.add("viewport-mobile");
    showToast("Simulating Mobile View (390px)");
  }
}

function switchSiteFromDropdown(id) {
  const site = websitesData.find(s => s.id === id);
  if (site) {
    launchSiteViewer(site.url, site.title, site.id);
  }
}

function populateSiteDropdown() {
  const select = document.getElementById("siteViewerSelect");
  if (!select) return;
  select.innerHTML = websitesData.map(s => `
    <option value="${s.id}">${s.title}</option>
  `).join('');
}

// --------------------------------------------------------------------------
// IN-SITE REEL CINEMA THEATER CONTROLLER
// --------------------------------------------------------------------------

let currentTheaterIndex = 0;

function openReelTheater(reelId) {
  const index = reelsData.findIndex(r => r.id === reelId);
  if (index !== -1) {
    currentTheaterIndex = index;
  }
  loadTheaterReel();

  const modal = document.getElementById("reelTheaterModal");
  if (modal) modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function loadTheaterReel() {
  const reel = reelsData[currentTheaterIndex];
  if (!reel) return;

  const iframe = document.getElementById("reelTheaterIframe");
  const loader = document.getElementById("reelLoader");
  const clientBadge = document.getElementById("theaterClientBadge");
  const counter = document.getElementById("theaterReelCounter");
  const title = document.getElementById("theaterReelTitle");
  const metrics = document.getElementById("theaterReelMetrics");
  const desc = document.getElementById("theaterReelDesc");
  const directLink = document.getElementById("theaterDirectLink");

  if (loader) {
    loader.style.display = "flex";
    loader.style.opacity = "1";
  }

  if (clientBadge) clientBadge.textContent = `${reel.client} Campaign`;
  if (counter) counter.textContent = `Reel ${currentTheaterIndex + 1} of ${reelsData.length}`;
  if (title) title.textContent = reel.title;
  if (metrics) metrics.textContent = `🔥 ${reel.metrics}`;
  if (desc) desc.textContent = reel.description;
  if (directLink) directLink.href = reel.url;

  if (iframe) {
    iframe.src = `https://www.instagram.com/reel/${reel.code}/embed/`;
  }
  showToast(`Streaming ${reel.client} Reel ${currentTheaterIndex + 1} inside site...`);
}

function handleReelLoaded() {
  const loader = document.getElementById("reelLoader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 250);
  }
}

function nextTheaterReel() {
  currentTheaterIndex = (currentTheaterIndex + 1) % reelsData.length;
  loadTheaterReel();
}

function prevTheaterReel() {
  currentTheaterIndex = (currentTheaterIndex - 1 + reelsData.length) % reelsData.length;
  loadTheaterReel();
}

function closeReelTheater() {
  const modal = document.getElementById("reelTheaterModal");
  const iframe = document.getElementById("reelTheaterIframe");
  if (iframe) iframe.src = "about:blank";
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close modals on backdrop click
window.addEventListener("click", (e) => {
  const projModal = document.getElementById("projectModal");
  const siteModal = document.getElementById("siteViewerModal");
  const reelModal = document.getElementById("reelTheaterModal");

  if (e.target === projModal) closeModal();
  if (e.target === siteModal) closeSiteViewer();
  if (e.target === reelModal) closeReelTheater();
});

// Close on Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeSiteViewer();
    closeReelTheater();
  }
});

// --------------------------------------------------------------------------
// SCOPE ESTIMATOR & WHATSAPP GENERATOR
// --------------------------------------------------------------------------

function calculateEstimate() {
  const solutionType = document.querySelector('input[name="solutionType"]:checked')?.value || "Custom Website";
  const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(cb => cb.value);

  const scopeText = document.getElementById("scopeSummaryText");
  const scopeTimeline = document.getElementById("scopeTimeline");

  let timeline = "2 - 3 Weeks";
  if (solutionType === "Mobile Application") {
    timeline = "4 - 6 Weeks";
  } else if (solutionType === "Enterprise ERP / CRM") {
    timeline = "6 - 8 Weeks";
  } else if (solutionType === "Digital Marketing & Reels") {
    timeline = "Ongoing Monthly Sprint (Weekly Releases)";
  }

  if (addons.length >= 3) {
    if (solutionType.includes("Website")) timeline = "3 - 4 Weeks";
    if (solutionType.includes("App")) timeline = "6 - 8 Weeks";
  }

  if (scopeText) {
    scopeText.textContent = `${solutionType} ${addons.length > 0 ? `+ [${addons.join(', ')}]` : '(Core Architecture)'}`;
  }

  if (scopeTimeline) {
    scopeTimeline.textContent = `Estimated Delivery: ${timeline}`;
  }
}

function submitEstimate() {
  const solutionType = document.querySelector('input[name="solutionType"]:checked')?.value || "Custom Website";
  const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(cb => cb.value);

  let message = `Hi Innoaivators Technologies! I explored your portfolio and would like to get a proposal for:%0A%0A`;
  message += `*Project Type:* ${solutionType}%0A`;
  if (addons.length > 0) {
    message += `*Modules/Features:* ${addons.join(', ')}%0A`;
  }
  message += `%0APlease let me know your availability for a discovery call or detailed quotation.`;

  const waUrl = `https://wa.me/919087786231?text=${message}`;

  showToast("Opening WhatsApp with your customized inquiry...");
  setTimeout(() => {
    window.open(waUrl, "_blank");
  }, 400);
}

// --------------------------------------------------------------------------
// TOAST NOTIFICATIONS
// --------------------------------------------------------------------------

function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

// --------------------------------------------------------------------------
// MOBILE MENU TOGGLE & SMOOTH USER NAVIGATION
// --------------------------------------------------------------------------

function scrollToEstimator(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }
  const targetElement = document.getElementById("estimator");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
window.scrollToEstimator = scrollToEstimator;

document.addEventListener("DOMContentLoaded", () => {
  initPortfolio();

  // Smooth scroll specifically for user-initiated anchor navigation clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#" || targetId === "#!") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    document.querySelectorAll(".mobile-nav-item").forEach(item => {
      item.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
