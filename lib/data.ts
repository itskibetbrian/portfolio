// ─── Hero Section ────────────────────────────────────────────────────────────

export const roles = [
  "web designer",
  "mobile app dev",
  "backend/API dev",
  "AI/automation engineer",
  "technical consultant",
]

// ─── Logo Marquee ────────────────────────────────────────────────────────────

export const marqueeWords = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "Maintainable",
  "Responsive",
  "Usable",
  "Reliable",
  "Optimised",
]

// ─── Services Section ────────────────────────────────────────────────────────

export const services = [
  {
    title: "Web Development",
    description:
      "Building performant, accessible, and scalable web applications using modern frameworks like Next.js and React.",
    image: "/images/web-design.svg",
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with clean architecture and seamless user experiences.",
    image: "/images/ui-ux-design.svg",
  },
  {
    title: "API & Backend",
    description:
      "Designing robust RESTful and GraphQL APIs with secure authentication, rate limiting, and high availability.",
    image: "/images/product-design.svg",
  },
  {
    title: "System Architecture",
    description:
      "Architecting scalable distributed systems that handle high concurrency and ensure 99.9% uptime.",
    image: "/images/user-research.svg",
  },
  {
    title: "Performance Optimization",
    description:
      "Tuning applications for speed and efficiency — achieving perfect Lighthouse scores and sub-second load times.",
    image: "/images/motion-graphics.svg",
  },
]

// ─── About / Toolbox Section ─────────────────────────────────────────────────

export const toolboxCategories = [
  {
    name: "Languages",
    items: [
      { title: "TypeScript", iconUrl: "https://skillicons.dev/icons?i=ts" },
      { title: "Python", iconUrl: "https://skillicons.dev/icons?i=python" },
      { title: "Go", iconUrl: "https://skillicons.dev/icons?i=go" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { title: "React", iconUrl: "https://skillicons.dev/icons?i=react" },
      { title: "Next.js", iconUrl: "https://skillicons.dev/icons?i=nextjs" },
      { title: "Tailwind CSS", iconUrl: "https://skillicons.dev/icons?i=tailwind" },
    ],
  },
  {
    name: "Backend & DB",
    items: [
      { title: "Node.js", iconUrl: "https://skillicons.dev/icons?i=nodejs" },
      { title: "PostgreSQL", iconUrl: "https://skillicons.dev/icons?i=postgres" },
      { title: "Redis", iconUrl: "https://skillicons.dev/icons?i=redis" },
      { title: "FastAPI", iconUrl: "https://skillicons.dev/icons?i=fastapi" },
    ],
  },
  {
    name: "Mobile",
    items: [
      { title: "React Native", iconUrl: "https://skillicons.dev/icons?i=react" },
      { title: "Kotlin", iconUrl: "https://skillicons.dev/icons?i=kotlin" },
      { title: "Swift", iconUrl: "https://skillicons.dev/icons?i=swift" },
      { title: "Flutter", iconUrl: "https://skillicons.dev/icons?i=flutter" },
    ],
  },
  {
    name: "DevOps & AI",
    items: [
      { title: "AWS", iconUrl: "https://skillicons.dev/icons?i=aws" },
      { title: "Kubernetes", iconUrl: "https://skillicons.dev/icons?i=kubernetes" },
      { title: "GitHub Actions", iconUrl: "https://skillicons.dev/icons?i=githubactions" },
      { title: "PyTorch", iconUrl: "https://skillicons.dev/icons?i=pytorch" },
    ],
  },
]

// ─── Portfolio Section ───────────────────────────────────────────────────────

export const portfolioProjects = [
  {
    company: "Nogeybix Labs",
    year: "2024 - Present",
    title: "Founder & Lead Engineer",
    results: [
      { title: "Spearheading the technical strategy for 10+ high-growth startups and digital ventures" },
      { title: "Directing architecture for a diverse portfolio, ensuring 99.9% system availability" },
      { title: "Building and scaling production-ready systems that have processed over $1M+ in transactions" },
    ],
    link: "https://nogeybix.com",
    linkText: "Visit Nogeybix Labs",
    tags: ["Technical Leadership", "System Architecture", "Full-Stack Development"],
    bgColor: "bg-[#6366F1]",
    illustration: "/images/studio-workspace.svg",
  },
  {
    company: "GPS Travel",
    year: "2023",
    title: "Tours & Travel Platform",
    results: [
      { title: "Translated complex bespoke travel requirements into a performant, high-conversion platform" },
      { title: "Integrated real-time safari and transfer booking flows, reducing manual entry by 50%" },
      { title: "Implemented multi-currency support and automated itinerary generation for luxury clients" },
    ],
    link: "https://gpstravel.co.ke",
    linkText: "View Live Site",
    tags: ["React", "Travel Tech", "API Integration"],
    bgColor: "bg-[#FFC224]",
    illustration: "/images/venture-workspace.svg",
  },
  {
    company: "BuildAfrique",
    year: "2023",
    title: "Building & Construction Platform",
    results: [
      { title: "Increased user engagement by 25% through a complete UI refactor and performance tuning" },
      { title: "Developed a dynamic project showcase module that handles high-resolution asset delivery with zero lag" },
      { title: "Achieved perfect 100/100 Lighthouse performance scores for construction service pages" },
    ],
    link: "https://buildafrique.com",
    linkText: "View Live Site",
    tags: ["Next.js", "Performance", "SEO"],
    bgColor: "bg-[#FF6B6B]",
    illustration: "/images/studio-workspace.svg",
  },
  {
    company: "Numida Africa",
    year: "2023",
    title: "SME Lending Application",
    results: [
      { title: "Hardened API security and RBAC logic for systems handling sensitive financial SME data" },
      { title: "Optimized loan application data flows, ensuring zero data loss during high-concurrency periods" },
      { title: "Integrated real-time credit scoring APIs that supported a 15% increase in loan processing speed" },
    ],
    link: "https://play.google.com/store/apps/details?id=com.numidatech.numida",
    linkText: "View Project",
    tags: ["Fintech", "Security", "Scalability"],
    bgColor: "bg-[#10B981]",
    illustration: "/images/venture-workspace.svg",
  },
  {
    company: "xGscore.io",
    year: "2024",
    title: "Sports Analytics Platform",
    results: [
      { title: "Optimized real-time data streaming for 10k+ concurrent sports analytics users globally" },
      { title: "Developed complex visualization modules that render 100+ match data points per second with zero lag" },
      { title: "Hardened frontend security to prevent unauthorized scraping of proprietary betting analytics" },
    ],
    link: "https://xgscore.io",
    linkText: "View Site",
    tags: ["Analytics", "Data Visualization", "Real-time"],
    bgColor: "bg-[#2F81F7]",
    illustration: "/images/studio-workspace.svg",
  },
]

// ─── Social Links ────────────────────────────────────────────────────────────

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/itskibetbrian",
    icon: "github" as const,
  },
  {
    name: "Telegram",
    href: "https://t.me/uyscvtii",
    icon: "telegram" as const,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/945739329517522974",
    icon: "discord" as const,
  },
]
