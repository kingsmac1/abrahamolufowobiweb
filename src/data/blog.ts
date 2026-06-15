import b1 from "@/assets/blog/b1.jpg";
import b2 from "@/assets/blog/b2.jpg";
import b3 from "@/assets/blog/b3.jpg";
import b4 from "@/assets/blog/b4.jpg";
import b5 from "@/assets/blog/b5.jpg";

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "web-design-trends-2026",
    title: "Web Design Trends I'm Actually Using in 2026",
    category: "Web Design",
    date: "May 12, 2026",
    readTime: "6 min read",
    excerpt:
      "A short list of techniques that aged well, and a longer one of trends I'm quietly retiring.",
    image: b1,
    body: [
      "Most trend round-ups age badly. The ones I keep coming back to are about restraint — fewer colours, fewer fonts, fewer ideas competing on the same screen.",
      "This year I'm leaning harder into editorial layouts: large type, generous white space, and content that does the talking. The dark, accent-driven palette I've used on this site is a reflection of that.",
      "Motion is the other one. Not page-load fireworks — small, well-timed transitions that make the interface feel responsive. Used sparingly, it's the difference between a site and a product.",
      "What I'm dropping: aggressive parallax, hero video backgrounds for the sake of it, and any animation that delays the first interaction.",
    ],
  },
  {
    slug: "naming-a-brand",
    title: "Naming a Brand: A Designer's Field Notes",
    category: "Branding",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    excerpt: "What I've learned helping founders name companies — and how to avoid the obvious traps.",
    image: b2,
    body: [
      "A name is the first piece of design a brand ships. Get it wrong and everything else has to work harder.",
      "The shortlist always shrinks once you say each option out loud, write it in an email signature, and try to type it from memory. Most names die in one of those three tests.",
    ],
  },
  {
    slug: "wireframes-still-matter",
    title: "Why I Still Sketch Wireframes on Paper",
    category: "Process",
    date: "Apr 09, 2026",
    readTime: "4 min read",
    excerpt: "Figma is fast. Paper is faster. Here's where each one belongs in my process.",
    image: b3,
    body: [
      "Paper forces commitment. You either redraw it or you accept it. Figma's infinite canvas can make you fiddle with kerning before the structure makes sense.",
      "I start every project in a notebook. By the time I open a design file, the page is half-solved.",
    ],
  },
  {
    slug: "choosing-a-color-palette",
    title: "Choosing a Colour Palette That Survives Production",
    category: "Branding",
    date: "Mar 22, 2026",
    readTime: "7 min read",
    excerpt: "The gap between a Pinterest moodboard and a real product is usually contrast ratios.",
    image: b4,
    body: [
      "Every brand colour eventually has to live next to body text, a disabled state, and a chart label. Pick the hero shade first, then test it in those three places before you fall in love with it.",
    ],
  },
  {
    slug: "logo-design-checklist",
    title: "My Logo Design Checklist (40 Items, Half I Skip)",
    category: "Branding",
    date: "Mar 03, 2026",
    readTime: "8 min read",
    excerpt: "The questions I ask before I commit a single vector point.",
    image: b5,
    body: [
      "Most logos fail because the brief is fuzzy. The checklist isn't to slow you down — it's to make sure you never have to revisit a decision halfway through.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
