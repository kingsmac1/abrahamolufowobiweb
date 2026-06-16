import p1 from "@/assets/projects/p1.jpg";
import p2 from "@/assets/projects/p2.jpg";
import p3 from "@/assets/projects/p3.jpg";
import p4 from "@/assets/projects/p4.jpg";
import p5 from "@/assets/projects/p5.jpg";
import p6 from "@/assets/projects/p6.jpg";
import kwa from "@/assets/projects/kwa.png";
import kwaMobile from "@/assets/projects/kwa-mobile.png";  // ← fixed: camelCase, no hyphen
import cmax from "@/assets/projects/cmax.jpg";
import cmaxmobile from "@/assets/projects/cmax-mobile.jpg";  // ← fixed: camelCase, no hyphen
import study from "@/assets/projects/study-easy.jpg";
import studymobile from "@/assets/projects/study-easy-mobile.jpg";  // ← fixed: camelCase, no hyphen
import tplum from "@/assets/projects/tplum.jpg";
import tplummobile from "@/assets/projects/tplum-mobile.jpg";  // ← fixed: camelCase, no hyphen
import creap from "@/assets/projects/creap.jpg";
import creapmobile from "@/assets/projects/creap-mobile.jpg";  // ← fixed: camelCase, no hyphen


export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  services: string[];
  image: string;
  mobileImage?: string;
  excerpt: string;
  overview: string;
  challenge: string;
  outcome: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "beastee-minimalist",
    title: "Beastee Minimalist",
    category: "E-commerce",
    year: "2025",
    client: "Beastee Co.",
    services: ["Website Development", "Branding"],
    image: p1,
    // mobileImage: p1Mobile,
    excerpt: "A radically simple e-commerce experience for a footwear brand.",
    overview:
      "Beastee needed a digital flagship that matched the restraint of their product line. We rebuilt the storefront from the ground up around a single, opinionated layout and a fast checkout.",
    challenge:
      "The legacy storefront was over-designed and slow. Conversions on mobile were under 1%. The brand wanted minimalism without losing personality.",
    outcome:
      "Mobile conversion lifted to 3.4% in the first month. Page weight dropped 64%. Sessions per user up 28%.",
    url: "https://example.com",
  },
  {
    slug: "early-grind",
    title: "Early Grind Identity",
    category: "Branding",
    year: "2025",
    client: "Early Grind",
    services: ["Branding", "Graphic Design"],
    image: p2,
    // mobileImage: p2Mobile,
    excerpt: "A monochrome identity system for a third-wave coffee roaster.",
    overview:
      "From the wordmark to the bag, we built a complete identity rooted in process and craft. The system stretches from business cards to packaging without losing tension.",
    challenge: "Stand out in a saturated specialty coffee market without resorting to clichés.",
    outcome: "Wholesale enquiries up 4x in the first quarter post-launch.",
  },
  {
    slug: "ledger-dashboard",
    title: "Ledger Finance Dashboard",
    category: "Product Design",
    year: "2024",
    client: "Ledger Inc.",
    services: ["Website Development"],
    image: p3,
    // mobileImage: p3Mobile,
    excerpt: "A dense, fast trading dashboard built for professional users.",
    overview:
      "Rebuilt Ledger's portfolio tool around a real-time data layer and a single dense view. Designed for speed, keyboard navigation and accessibility.",
    challenge: "Users were drowning in tabs. We needed one screen, every market, no noise.",
    outcome: "Daily active time-in-app up 41%. Support tickets down 22%.",
    url: "https://example.com",
  },
  {
    slug: "meridian-restaurant",
    title: "Meridian Restaurant",
    category: "Hospitality",
    year: "2024",
    client: "Meridian",
    services: ["Branding", "Graphic Design", "Website Development"],
    image: p4,
    // mobileImage: p4Mobile,
    excerpt: "Identity, menu system and reservation site for a tasting-menu restaurant.",
    overview:
      "A deliberate, slow-paced visual identity that draws from the kitchen's seasonal rhythm. We built a quiet reservation site that puts the menu first.",
    challenge: "Communicate a 12-course tasting menu without overwhelming first-time guests.",
    outcome: "Online reservations 2.1x baseline within 6 weeks of launch.",
  },
  {
    slug: "fitness-app",
    title: "Pulse Fitness App",
    category: "Mobile",
    year: "2024",
    client: "Pulse",
    services: ["Website Development", "Graphic Design"],
    image: p5,
    // mobileImage: p5Mobile,
    excerpt: "A coaching app marketing site with a high-contrast, motion-led design.",
    overview:
      "We shipped a marketing site for Pulse's coaching app — animations, interactive timeline, and a quiet but bold dark theme.",
    challenge: "Convey energy without falling into stock fitness imagery clichés.",
    outcome: "Trial sign-ups grew 3.7x month-over-month after launch.",
  },
  {
    slug: "ad-editorial",
    title: "AD Editorial Studio",
    category: "Portfolio",
    year: "2023",
    client: "AD Editorial",
    services: ["Website Development", "Branding"],
    image: p6,
    // mobileImage: p6Mobile,
    excerpt: "A minimal portfolio for an art-direction studio in London.",
    overview:
      "A single-column, type-led portfolio. No carousels, no parallax — just a quiet sequence of work and ideas.",
    challenge: "Make the work the only thing on screen.",
    outcome: "Average session duration 4m 22s. Studio booked through end of year within 3 weeks.",
  },
  {
    slug: "kwa-gas-energy",
    title: "Kwa Gas & Energy",
    category: "Energy",
    year: "2025",
    client: "Kwa Gas and Energy Company Limited",
    services: ["Website Development", "Branding"],
    image: kwa,
    mobileImage: kwaMobile,  // ← use camelCase variable here
    excerpt: "A bold digital presence for a Nigerian energy company built for trust and scale.",
    overview:
      "Kwa Gas and Energy Company Limited required a corporate web presence that could carry the weight of their brand in a highly regulated and trust-sensitive industry. We designed and developed a clean, professional site that communicates capability, compliance, and ambition — giving the company a digital foundation worthy of their operations. The build involved a full React-based SPA architecture deployed on Netlify with custom DNS configuration, ensuring fast load times and long-term maintainability.",
    challenge:
      "The energy sector demands instant credibility. Visitors — whether investors, regulators, or procurement officers — make rapid judgements based on first impressions. The client had no existing digital presence, which meant building brand trust from the ground up while also ensuring the site performed reliably across varying network conditions common in Nigeria.",
    outcome:
      "The site launched successfully at kwaenergyltd.com with full DNS propagation and clean deployment. The company now has a professional digital touchpoint that reflects their positioning in the oil and gas sector, enabling them to present credentials and capabilities confidently to corporate and institutional clients.",
    url: "https://kwaenergyltd.com",
  },
  {
    slug: "c-max-consulting",
    title: "C-Max Consulting",
    category: "Consulting",
    year: "2025",
    client: "C-Max Consulting LLC",
    services: ["Website Development", "Branding"],
    image: cmax,  // TODO: replace with actual image import
    mobileImage: cmaxmobile,  // TODO: replace with actual image import
    excerpt: "A high-authority web presence for a global IT and project management consultancy.",
    overview:
      "C-Max Consulting LLC is an Indiana-based consultancy serving organizations across oil & gas, manufacturing, healthcare, logistics, and government. They needed a website that matched the sophistication of their service offering — one that communicated expertise in IT consulting, cybersecurity, project delivery, and workforce transformation without feeling generic. We built a structured, conversion-focused site with clear service architecture, a strong visual identity, and a tone that positions C-Max as a strategic partner rather than a vendor.",
    challenge:
      "Consulting firms live and die by perceived authority. C-Max operates across multiple high-stakes industries with a diverse service portfolio, and the challenge was to present that breadth without diluting focus. The site needed to speak simultaneously to C-suite decision-makers, program managers, and procurement leads — each looking for different signals of competence.",
    outcome:
      "The delivered site clearly segments C-Max's services across project delivery, IT consulting, and workforce solutions, with industry-specific messaging that resonates with their target verticals. The branding positions them firmly in the enterprise consulting space, giving the team a professional platform to support business development and client acquisition globally.",
    url: "https://c-maxconsulting.com",
  },
  {
    slug: "study-easy-global",
    title: "Study-Easy Global Consult",
    category: "Education",
    year: "2026",
    client: "Study-Easy Global Consult",
    services: ["Website Development", "Branding"],
    image: study,  // TODO: replace with actual image import
    mobileImage: studymobile,
    excerpt: "A warm, conversion-driven website for a Nigeria-based international education consultancy.",
    overview:
      "Study-Easy Global Consult helps Nigerian students and professionals secure admissions into top universities across the UK, Canada, USA, Australia, Ireland, and Europe. They needed a website that was both informative and emotionally reassuring — one that could guide a prospective student from curiosity to action, while clearly communicating their end-to-end support model. We built a clean, structured WordPress site with a strong service architecture, destination guides, a blog, and a seamless application flow.",
    challenge:
      "The study abroad space is competitive and often cluttered with vague promises. Students and parents approach it with both excitement and anxiety, and the site needed to address both. The key challenge was building credibility quickly — communicating transparency, genuine expertise, and warmth — while also converting passive visitors into consultation bookings and application starts.",
    outcome:
      "The site launched with a clear service hierarchy covering university matching, visa guidance, IELTS support, scholarship advisory, and pre-departure orientation. The destination-based structure makes it easy for students to find pathways relevant to them, and the consistent brand voice across pages positions Study-Easy as a trustworthy, people-first consultancy in the Nigerian education market.",
    url: "https://studyeasyglobalconsult.com",
  },
  {
    slug: "tplum-photography",
    title: "Tplum Photography",
    category: "Photography",
    year: "2026",
    client: "Tplum Photography",
    services: ["Website Development", "Branding"],
    image: tplum,  // TODO: replace with actual image import
    mobileImage: tplummobile,
    excerpt: "A cinematic portfolio site for a Canadian wedding and portrait photographer.",
    overview:
      "Tplum Photography — led by Jeremy, a Calgary-based photographer serving Alberta and destinations worldwide — needed a digital presence as expressive as his work. TPLUM stands for Telling Pure Lasting Unscripted Memories, and every element of the site was built to reflect that philosophy. We crafted an immersive, image-led portfolio site that balances artistic presentation with clear commercial intent, allowing couples and clients to connect emotionally with Jeremy's work before ever reaching out.",
    challenge:
      "Photography portfolios face a common trap: they either prioritise aesthetics at the cost of usability, or functionality at the cost of feeling. Tplum's audience — primarily couples planning weddings — need to feel something when they land on the site, not just browse a grid. The site also needed to work hard commercially, surfacing packages, FAQs, and contact pathways without breaking the visual immersion.",
    outcome:
      "The delivered site features a cinematic homepage experience, a curated portfolio gallery, a detailed about section anchored by Jeremy's personal story, and a streamlined contact flow. The Tplum Signature page communicates brand values and the shooting style that sets Jeremy apart. Since launch, the site has become the primary touchpoint for new client inquiries across Calgary, Edmonton, and Toronto.",
    url: "https://tplumphotography.com",
  },
  {
    slug: "creap-africa-initiative",
    title: "CREAP Africa Initiative",
    category: "Nonprofit",
    year: "2025",
    client: "CREAP Africa Initiative",
    services: ["Website Development", "Branding"],
    image: creap,  // TODO: replace with actual image import
    mobileImage: creapmobile,
    excerpt: "An elite nonprofit website for a Nigerian civil society organisation driving policy and community impact.",
    overview:
      "CREAP Africa Initiative is a registered nonprofit championing Community, Rights, Education, Advancement, and Pathway across Nigeria and Africa. Their work spans evidence-driven policy research, peacebuilding, democratic governance, climate action, youth empowerment, and inclusive development. With over 28,200 people reached and 27 major programs, they needed a website that matched the depth and credibility of their mission — one capable of communicating complex program portfolios to donors, partners, policymakers, and community stakeholders simultaneously.",
    challenge:
      "Nonprofit websites face a unique tension: they must inspire action and emotional connection while also serving as a rigorous institutional reference for funders and policy partners. CREAP's work cuts across seven distinct focus areas, and the challenge was to present that scope with clarity and coherence rather than overwhelm. The site also needed to support publication downloads, newsletter signups, donation flows, and program documentation — all without losing the human voice at the centre of the organisation.",
    outcome:
      "The delivered site features a bold hero with rotating thematic pillars, a structured programs section covering all seven focus areas, a publications library with downloadable policy briefs, impact counters, a leadership section, and a community newsletter integration. The visual identity and content architecture position CREAP as a serious, credible institution — one that funders and government partners can engage with confidently, while community members and volunteers still feel welcomed and seen.",
    url: "https://creapinitiative.org",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);