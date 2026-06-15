import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Marquee, Reveal } from "@/components/site/Marquee";
import { CTASection, Testimonials } from "@/components/site/Sections";
import { projects } from "@/data/projects";
import { posts } from "@/data/blog";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abraham Oluwofobi — Web Developer & Brand Designer" },
      {
        name: "description",
        content:
          "Independent designer & developer building websites, brand identities and graphic design from London.",
      },
      { property: "og:title", content: "Abraham Oluwofobi — Web Developer & Brand Designer" },
      {
        property: "og:description",
        content: "Websites, brand identities and graphic design from London.",
      },
    ],
  }),
  component: Index,
});

const expertise = [
  {
    n: "01",
    title: "Website Development",
    body: "Hand-built React websites and product front-ends, designed to load fast and rank well.",
  },
  {
    n: "02",
    title: "Branding",
    body: "Identity systems — logo, type, colour, voice — built to scale from favicon to billboard.",
  },
  {
    n: "03",
    title: "Graphic Design",
    body: "Editorial, packaging, decks and social — design that supports the work without the noise.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#D6FF3D]" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/60">
                Available for projects — 2026
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(2.8rem,9vw,9rem)] font-medium leading-[0.95] tracking-tighter">
              Designing <span className="text-[#D6FF3D]">brands</span> &<br />
              building <span className="italic font-light">websites</span> that
              <br />
              actually work.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md font-display text-lg text-white/70">
                I'm Abraham Oluwofobi — an independent designer and developer working with founders,
                studios and ambitious teams.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display text-sm font-medium text-black hover:scale-105 transition-transform"
                >
                  View Projects <span>↗</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-display text-sm hover:bg-white/5 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px] grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <img src={portrait} alt="Abraham Oluwofobi" className="w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:pt-12">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              About
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Five years building things that load fast and last long.
            </h2>
            <p className="mt-6 max-w-xl text-white/70">
              I work end-to-end — from the first sketch to shipped code. My favourite projects sit at
              the intersection of brand and product, where good design has to survive contact with
              real users.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm text-[#D6FF3D]"
            >
              More about me <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* EXPERTISE */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              What I do
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Three disciplines, <span className="text-[#D6FF3D]">one</span> opinionated practice.
            </h2>
          </Reveal>

          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {expertise.map((e, i) => (
              <Reveal key={e.n} delay={i * 0.08}>
                <Link
                  to="/services"
                  className="group grid grid-cols-12 items-start gap-6 py-8 transition-colors hover:bg-white/[0.02] md:py-10"
                >
                  <span className="col-span-2 font-display text-sm text-white/40 md:col-span-1">
                    {e.n}
                  </span>
                  <h3 className="col-span-10 font-display text-3xl font-medium md:col-span-5 md:text-5xl">
                    {e.title}
                  </h3>
                  <p className="col-span-12 max-w-md text-white/70 md:col-span-5">{e.body}</p>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    className="col-span-12 mt-2 flex items-center gap-2 font-display text-sm text-[#D6FF3D] md:col-span-1 md:mt-0 md:justify-end"
                  >
                    →
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
                  Selected Work
                </p>
                <h2 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-6xl">
                  Recent projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden rounded-full border border-white/20 px-5 py-2.5 font-display text-sm hover:bg-white/5 md:inline-flex"
              >
                View all ↗
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ARTICLES */}
      <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
                  Writing
                </p>
                <h2 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-6xl">
                  From the journal
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden rounded-full border border-white/20 px-5 py-2.5 font-display text-sm hover:bg-white/5 md:inline-flex"
              >
                All posts ↗
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 font-display text-xs uppercase tracking-[0.25em] text-white/40">
                    {p.category} · {p.date}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-snug tracking-tight group-hover:text-[#D6FF3D]">
                    {p.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
