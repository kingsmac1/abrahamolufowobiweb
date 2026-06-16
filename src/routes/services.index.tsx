import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Marquee";
import { CTASection } from "@/components/site/Sections";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Abraham Olufowobi" },
      {
        name: "description",
        content: "Website development, branding and graphic design services.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Services</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[0.95] tracking-tighter">
              Three disciplines, <br />
              <span className="text-[#D6FF3D]">one</span> studio.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:border-[#D6FF3D]/40"
              >
                <span className="font-display text-xs uppercase tracking-[0.3em] text-[#D6FF3D]">
                  0{i + 1}
                </span>
                <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-white/70">{s.short}</p>
                <ul className="mt-8 space-y-2 text-sm text-white/60">
                  {s.deliverables.slice(0, 4).map((d) => (
                    <li key={d}>— {d}</li>
                  ))}
                </ul>
                <span className="mt-auto pt-10 font-display text-sm text-[#D6FF3D] group-hover:translate-x-1 transition-transform">
                  Learn more ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Process</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              How we'll work together.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Brief", "Audience, goals, constraints, deadline."],
              ["02", "Design", "Sketch, refine, review in a shared file."],
              ["03", "Build", "Hand-coded or hand-drawn, with two rounds of revision."],
              ["04", "Launch", "Ship, measure, and follow up after 30 days."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
                  <span className="font-display text-sm text-[#D6FF3D]">{n}</span>
                  <p className="mt-3 font-display text-xl font-medium">{t}</p>
                  <p className="mt-2 text-sm text-white/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
