import p1 from "@/assets/projects/p1.jpg";
import p2 from "@/assets/projects/p2.jpg";
import p3 from "@/assets/projects/p3.jpg";
import p4 from "@/assets/projects/p4.jpg";
import p5 from "@/assets/projects/p5.jpg";
import p6 from "@/assets/projects/p6.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  services: string[];
  image: string;
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
    excerpt: "A minimal portfolio for an art-direction studio in London.",
    overview:
      "A single-column, type-led portfolio. No carousels, no parallax — just a quiet sequence of work and ideas.",
    challenge: "Make the work the only thing on screen.",
    outcome: "Average session duration 4m 22s. Studio booked through end of year within 3 weeks.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
