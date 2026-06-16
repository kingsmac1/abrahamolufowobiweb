import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Marquee";
import { CTASection } from "@/components/site/Sections";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Abraham Olufowobi" },
      { name: "description", content: "Writing on design, brand, and the web." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Journal</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[0.95] tracking-tighter">
              Notes on <span className="text-[#D6FF3D]">design</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <Reveal className="mx-auto max-w-[1400px]">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid gap-8 md:grid-cols-12"
          >
            <div className="md:col-span-7 overflow-hidden rounded-3xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-[#D6FF3D]">
                Featured · {featured.category}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-white/70">{featured.excerpt}</p>
              <p className="mt-6 font-display text-xs uppercase tracking-[0.25em] text-white/40">
                {featured.date} · {featured.readTime}
              </p>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] grid gap-8 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
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
                <p className="mt-2 text-white/60">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
