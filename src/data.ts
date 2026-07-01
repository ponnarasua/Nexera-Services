import { ServiceItem, TimelineStep } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Architecting modular, highly reliable enterprise-grade applications tailored for high-frequency operations, custom integration scopes, and long-term durability.",
    iconName: "Cpu",
    features: ["Domain-driven microservices", "Type-safe robust API layers", "Automated system diagnostics", "Cross-platform system logic"]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Crafting beautiful, modern, high-density React/Vite interfaces with server-side proxy integration, seamless transitions, and flawless performance on any screen size.",
    iconName: "Globe",
    features: ["Interactive dashboards", "Tailwind fluid style structures", "Vite build pipeline optimizations", "Access-first responsive layouts"]
  },
  {
    id: "educational",
    title: "Educational Solutions",
    description: "Designing smart digital campus solutions, automated grading assistance engines, curriculum builders, and high-security student analytics panels.",
    iconName: "GraduationCap",
    features: ["Student management automation", "Dynamic analytical trackers", "Curriculum planner modules", "Secure role-based access flows"]
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description: "Connecting disparate data pools, centralizing workflows, and building customized robotic automation modules that run background syncs silently.",
    iconName: "Workflow",
    features: ["Web hook event controllers", "Background sync schedulers", "CRM/ERP connection bridges", "Instant automated report generators"]
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Establishing cloud-native infrastructure pipelines that auto-scale instantly, utilize container registries, and maintain bulletproof data replication loops.",
    iconName: "Cloud",
    features: ["Serverless infrastructure", "Docker containerization", "Continuous delivery (CI/CD)", "Secure isolated databases"]
  },
  {
    id: "ai-systems",
    title: "AI Systems",
    description: "Embedding custom server-side Gemini intelligence models to handle real-time semantic analysis, conversational diagnostics, and natural language translation.",
    iconName: "Bot",
    features: ["Gemini secure proxy logic", "Automated prompt tailoring", "Natural Language insight logs", "Smart schema classification"]
  }
];

export const SOLUTIONS = [
  {
    id: "education",
    title: "Educational Institutions",
    badge: "Academic Systems",
    roi: "Targeting a 90% reduction in manual grading administration with unified student analytics dashboards.",
    milestones: ["1. Security Audit & Active Directory sync", "2. Legacy database migration", "3. Responsive gradebook release"],
    pipeline: "Active Directory integration, robust gradebooks, student Analytics panels, and high-security registrar logs.",
    tools: ["React 19", "D3.js Visualization", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "business",
    title: "Businesses & Enterprises",
    badge: "Process Automation",
    roi: "Targeting over 1,200 administrative hours saved annually through automated API proxies and workflow webhooks.",
    milestones: ["1. Core API security proxy design", "2. Auto-billing & webhook dispatchers", "3. Analytics dashboard launch"],
    pipeline: "Server-side proxy routes, Stripe/ERP integrations, automated logging, and background workers.",
    tools: ["Vite Core", "Express.js", "Supabase", "Docker Containers"]
  },
  {
    id: "startups",
    title: "Startups & MVPs",
    badge: "Rapid Scale",
    roi: "Targeting 4-to-6 week complete MVP cycles featuring scale-to-zero serverless backends.",
    milestones: ["1. Wireframe lock-in & DB diagramming", "2. High-fidelity core features build", "3. Continuous sprint release"],
    pipeline: "Rapid analytics tracking, Next.js/Vite optimized layouts, and modular state management layers.",
    tools: ["Framer Motion", "Gemini AI", "Tailwind CSS", "Serverless Run"]
  }
];



export const TIMELINE: TimelineStep[] = [
  {
    phase: "01",
    title: "Discovery & Ingress Alignment",
    duration: "Week 1",
    description: "Deep dive into your operational procedures, requirements, and key performance expectations.",
    bullets: [
      "Define non-functional speed and security goals",
      "Sketch domain-driven microservices schemas",
      "Lock in budget metrics & deliverable schedules"
    ]
  },
  {
    phase: "02",
    title: "Planning & Architecture Blueprinting",
    duration: "Week 2",
    description: "Design the core logic schemas, server routes, and system boundaries before any lines of code are written.",
    bullets: [
      "Interactive data mapping and flow diagrams",
      "Database schema definitions via Drizzle ORM",
      "Key handling architecture planning"
    ]
  },
  {
    phase: "03",
    title: "Figma UI / Design Lock-in",
    duration: "Week 3",
    description: "Translate operational blueprints into elegant obsidian glassmorphic screens featuring high contrast typography.",
    bullets: [
      "High-fidelity desktop-first responsive prototypes",
      "Design systems & typography rules definitions",
      "Interactive feedback & user flow approvals"
    ]
  },
  {
    phase: "04",
    title: "Agile Development Sprints",
    duration: "Weeks 4 - 6",
    description: "Build robust frontend layouts and connect them to type-safe server routers with continuous test updates.",
    bullets: [
      "Bi-weekly interactive preview deployments",
      "Flawless styling via tailwind utility frameworks",
      "Component modularization to ensure zero file bloating"
    ]
  },
  {
    phase: "05",
    title: "Security Auditing & Performance QA",
    duration: "Week 7",
    description: "Stress test endpoint responsiveness, protect credentials behind server routes, and check cross-device views.",
    bullets: [
      "Isolate critical API credentials behind private proxies",
      "Run lighthouse index checks & optimize asset sizes",
      "Stress test and validate webhook triggers"
    ]
  },
  {
    phase: "06",
    title: "Autoscaling Cloud Deployment",
    duration: "Week 8",
    description: "Orchestrate rolling, zero-downtime container updates on Cloud Run or Docker, configured to scale to zero.",
    bullets: [
      "Setup robust production pipelines",
      "Configure global CDN and SSL configurations",
      "Inject search engine structural JSON-LD schemas"
    ]
  },
  {
    phase: "07",
    title: "Long-Term SLA Support",
    duration: "Ongoing",
    description: "Monitor live logs proactively, compile system telemetry metrics, and introduce requested features smoothly.",
    bullets: [
      "Prometheus & automated error log alerts",
      "Performance optimization and database cleaning",
      "SLA-backed priority communication queues"
    ]
  }
];



export const BENEFITS = [
  {
    title: "100% Secret Protection",
    desc: "Critical database keys and Google Gemini credentials are kept server-side inside private containers.",
    icon: "ShieldCheck"
  },
  {
    title: "Lighthouse Performance",
    desc: "Optimized Vite bundling, clean asset delivery, and static asset mapping results in sub-15ms response times.",
    icon: "Activity"
  },
  {
    title: "Bespoke Obsidian Styling",
    desc: "Zero default layouts. We style with Playfair headings, gold gradients, and custom glass elements.",
    icon: "Sparkles"
  },
  {
    title: "Durable Cloud Persistence",
    desc: "Production deployments leverage autoscaling serverless databases configured to scale down to zero.",
    icon: "Cloud"
  },
  {
    title: "Type-Safe Solid Coding",
    desc: "100% strict TypeScript rules are enforced inside standard compilation pipelines, preventing run errors.",
    icon: "Terminal"
  },
  {
    title: "Direct Client Integration",
    desc: "No corporate support lag. Clients maintain direct priority channels to our core system architects.",
    icon: "PhoneCall"
  }
];

export const FAQS = [
  {
    question: "How does Nexera ensure the security of our sensitive API keys?",
    answer: "We strictly enforce a full-stack proxy architecture. Your keys, whether database credentials or Google Gemini API secrets, are never bundled into client code. They reside securely inside private Cloud Run containers, accessed only via secure Express routes."
  },
  {
    question: "What are your standard delivery timelines for a custom software system?",
    answer: "Our standard deployment timeline ranges between 4 to 8 weeks. We divide the milestones into highly granular weekly sprints. Every week, we deliver a clickable, interactive preview of the application so you can test state flows in real-time."
  },
  {
    question: "Do you support database migrations from legacy database systems?",
    answer: "Yes. We specialize in mapping database schemas (PostgreSQL, Supabase, Cloud SQL) using modern Drizzle ORM migrations. We ensure zero data loss during high-fidelity schema migrations."
  },
  {
    question: "What happens after the deployment phase?",
    answer: "Our engagement continues via long-term SLA support. We implement automated performance monitors, error alert trackers like Sentry, and routine server health diagnostics to ensure high speed."
  },
  {
    question: "Can we schedule a direct consultation call?",
    answer: "Absolutely. You can request an automated blueprint below by specifying your service and budget range, or directly initiate a Google Meet call scheduling request via our global CTA buttons."
  }
];
