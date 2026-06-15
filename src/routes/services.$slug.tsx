import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Marquee";
import { CTASection } from "@/components/site/Sections";
import { getService } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Abraham Oluwofobi` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: loaderData.service.title },
          { property: "og:description", content: loaderData.service.short },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="px-5 pt-44 text-center">
      <h1 className="font-display text-4xl">Service not found</h1>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: import("@/data/services").Service };
  return (
    <>
      <section className="px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Link
              to="/services"
              className="font-display text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white"
            >
              ← All services
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[0.95] tracking-tighter">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-white/70">{service.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              What's included
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight">
              Every engagement comes with…
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-4 py-4">
                  <span className="text-[#D6FF3D]">✦</span>
                  <span className="font-display text-lg">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Process</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              How a project runs.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
                  <span className="font-display text-sm text-[#D6FF3D]">0{i + 1}</span>
                  <p className="mt-3 font-display text-xl font-medium">{p.title}</p>
                  <p className="mt-2 text-sm text-white/60">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              Pricing
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              Transparent starting points.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.pricing.map((p, i) => (
              <Reveal key={p.tier} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
                    {p.tier}
                  </p>
                  <p className="mt-4 font-display text-3xl font-medium text-[#D6FF3D]">{p.price}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/70">
                    {p.includes.map((it) => (
                      <li key={it}>— {it}</li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-auto pt-8 font-display text-sm text-[#D6FF3D]"
                  >
                    Start a project ↗
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight">
              Common questions.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {service.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-lg md:text-xl">{f.q}</span>
                    <span className="text-[#D6FF3D] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
