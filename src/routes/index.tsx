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
                Hey There! Abraham Oluwofobi Here
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-8 font-display font-medium leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 12vw, 13rem)" }}
            >
              DESIGN <span className="text-[#D6FF3D]">✦</span>
              <br />
              PARTNER
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl font-display text-lg text-white/70 md:text-xl">
                I believe in the power of innovation and creativity to transform your ideas into
                exceptional digital experiences. Working closely with you, I strive to bring your
                vision to life.
              </p>
              <Link
                to="/contact"
                className="group inline-flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-white/20 bg-transparent font-display text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#D6FF3D] hover:text-black md:h-40 md:w-40"
              >
                Let's Talk <span className="ml-1">↗</span>
              </Link>
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
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">About</p>
            <h2
              className="mt-4 font-display font-medium leading-[0.95] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Five years building things that load fast.
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
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">What I do</p>
            <h2
              className="mt-4 max-w-5xl font-display font-medium leading-[0.95] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Three disciplines, <span className="text-[#D6FF3D]">one</span> practice.
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
            <h2
              className="text-center font-display font-medium leading-[0.85] tracking-tighter text-white"
              style={{ fontSize: "clamp(4rem, 18vw, 18rem)" }}
            >
              PORTFOLIO
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/projects"
              className="group flex h-32 w-32 items-center justify-center rounded-full border border-white/20 font-display text-sm uppercase tracking-[0.2em] hover:bg-[#D6FF3D] hover:text-black md:h-40 md:w-40"
            >
              View all ↗
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ARTICLES — Latest Articles structure */}
      <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex items-center gap-4">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-white">
                Blog &amp; Articles
              </p>
              <span className="h-px w-32 bg-white/20" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-6 font-display font-medium leading-[0.95] tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 12vw, 12rem)" }}
            >
              Latest Articles
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => {
              return (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-colors hover:border-[#D6FF3D] hover:bg-[#D6FF3D] hover:text-black md:p-8"
                  >
                    <div className="flex items-center gap-6 font-display text-sm transition-colors group-hover:text-black">
                      <span className="inline-flex items-center gap-2">
                        <span>🏷</span> {p.category}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span>📅</span> {p.date}
                      </span>
                    </div>
                    <h3
                      className="mt-8 font-display font-medium leading-tight tracking-tight text-white transition-colors group-hover:text-black"
                      style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
                    >
                      {p.title}
                    </h3>
                    <div className="relative mt-8 overflow-hidden rounded-xl">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#D6FF3D] font-display text-sm uppercase tracking-[0.2em] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        View ↗
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/blog"
              className="group flex h-32 w-32 items-center justify-center rounded-full border border-white/20 font-display text-sm uppercase tracking-[0.2em] hover:bg-[#D6FF3D] hover:text-black md:h-40 md:w-40"
            >
              View all ↗
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
