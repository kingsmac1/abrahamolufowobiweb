export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  process: { title: string; description: string }[];
  pricing: { tier: string; price: string; includes: string[] }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short:
      "Fast, accessible websites built on a modern stack — from marketing sites to product platforms.",
    description:
      "I design and build websites that load fast, rank well, and convert. Every site I ship is built with care from the database to the typography.",
    deliverables: [
      "Discovery workshop & sitemap",
      "Custom design system",
      "Hand-built front-end (React / TanStack)",
      "CMS integration",
      "SEO foundation & analytics",
      "Performance budget under 2s LCP",
      "Two rounds of revisions",
      "Launch support",
    ],
    process: [
      { title: "Discover", description: "Brief, audience, and a tight goal we can measure." },
      { title: "Design", description: "Wireframe, then high-fidelity comps in a shared file." },
      { title: "Build", description: "Hand-coded front-end, integrated with your stack." },
      { title: "Launch", description: "Deploy, measure, and a 30-day check-in." },
    ],
    pricing: [
      {
        tier: "Landing",
        price: "from £2,800",
        includes: ["1 page", "Custom design", "CMS-light", "2-3 week build"],
      },
      {
        tier: "Marketing Site",
        price: "from £6,500",
        includes: ["5–8 pages", "Full design system", "CMS", "4-6 week build"],
      },
      {
        tier: "Product",
        price: "from £14,000",
        includes: ["Bespoke scope", "Design + dev", "Backend integration", "Ongoing support"],
      },
    ],
    faqs: [
      { q: "What stack do you use?", a: "TanStack Start + React, Tailwind, and a Cloud backend when needed." },
      { q: "Do you handle hosting?", a: "Yes — I deploy to Cloudflare or Vercel and hand over keys, or manage it for you." },
      { q: "How long does a project take?", a: "A marketing site is typically 4–6 weeks. Landing pages 2–3 weeks." },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Identity systems that hold up at every scale — from a favicon to a billboard.",
    description:
      "Names, logos, type, colour, voice. A brand is a system of decisions; my job is to make those decisions ahead of time so everything you ship later feels inevitable.",
    deliverables: [
      "Brand strategy & positioning",
      "Naming (if required)",
      "Logo & wordmark",
      "Typography & colour system",
      "Brand guidelines PDF",
      "Source files",
    ],
    process: [
      { title: "Position", description: "Audience, market, and a single sentence we both believe." },
      { title: "Explore", description: "Three directions, fully sketched." },
      { title: "Refine", description: "Pick one. Tighten every detail." },
      { title: "Document", description: "Guidelines so the brand survives without me." },
    ],
    pricing: [
      { tier: "Identity", price: "from £3,200", includes: ["Logo", "Type & colour", "Mini guidelines"] },
      { tier: "Brand System", price: "from £7,500", includes: ["Strategy", "Full identity", "Guidelines PDF", "Templates"] },
      { tier: "Full Rebrand", price: "from £15,000", includes: ["Strategy", "Naming", "Identity", "Rollout support"] },
    ],
    faqs: [
      { q: "Do you do naming?", a: "Yes — naming is included in the Full Rebrand tier or as a £1,800 add-on." },
      { q: "Will I own the files?", a: "Yes. You get every working file, fonts licensed in your name." },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Editorial, packaging, decks, and social — design that supports the work, not the noise.",
    description:
      "Project-based or retained graphic design across print and digital. Equally comfortable on a pitch deck and a 6m billboard.",
    deliverables: [
      "Editorial / publication design",
      "Pitch decks & investor docs",
      "Packaging",
      "Posters & print collateral",
      "Social templates",
      "Motion stills",
    ],
    process: [
      { title: "Brief", description: "Audience, format, and a tight deadline." },
      { title: "Draft", description: "First pass within 5 working days." },
      { title: "Refine", description: "Two rounds of feedback included." },
      { title: "Deliver", description: "Print-ready and source files, all formats." },
    ],
    pricing: [
      { tier: "One-off", price: "from £600", includes: ["Single asset", "2 rounds", "5-day turnaround"] },
      { tier: "Project", price: "from £2,400", includes: ["Multi-asset", "Custom system", "2-3 week turnaround"] },
      { tier: "Retainer", price: "from £2,800 / month", includes: ["20 hours/month", "Priority turnaround"] },
    ],
    faqs: [
      { q: "Do you do print production?", a: "Yes — I can manage proofs and press checks for UK printers." },
      { q: "Can you work to existing brand guidelines?", a: "Yes, that's most retainer work." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
