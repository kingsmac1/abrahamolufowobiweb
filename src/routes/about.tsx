import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Marquee";
import { CTASection, Testimonials } from "@/components/site/Sections";
import portrait from "@/assets/portrait.jpg";
import workspace from "@/assets/workspace.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abraham Oluwofobi" },
      {
        name: "description",
        content:
          "Abraham Oluwofobi is an independent designer & developer in London. Five years of brand, web and product work.",
      },
      { property: "og:title", content: "About — Abraham Oluwofobi" },
    ],
  }),
  component: About,
});

const stack = [
  "React", "TanStack", "TypeScript", "Tailwind", "Figma", "Framer", "Webflow", "Adobe CC",
  "After Effects", "Cloud", "Node", "Vite",
];

const timeline = [
  { year: "2026", text: "Independent studio — selected client work across UK and Lagos." },
  { year: "2024", text: "Senior designer at a London product studio." },
  { year: "2022", text: "Lead brand designer for an early-stage fintech." },
  { year: "2021", text: "Started freelancing — first paid identity project." },
];

function About() {
  return (
    <>
      <section className="px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">About</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,7rem)] font-medium leading-[0.95] tracking-tighter">
              Designer & developer <br />
              from <span className="text-[#D6FF3D]">London</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <Reveal className="mx-auto max-w-[1400px]">
          <div className="overflow-hidden rounded-3xl">
            <img src={workspace} alt="Studio" className="w-full" />
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <img src={portrait} alt="Abraham Oluwofobi" className="w-full" />
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
                Get in touch
              </p>
              <a
                href="mailto:abrahamolufowobi.web@gmail.com"
                className="mt-3 block break-all font-display text-lg text-white hover:text-[#D6FF3D]"
              >
                abrahamolufowobi.web@gmail.com
              </a>
              <a href="tel:+447823765197" className="mt-1 block font-display text-lg text-white/80">
                +44 7823 765197
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
              Building careful, considered work for ambitious clients.
            </h2>
            <p className="mt-6 text-white/70">
              I started designing in 2021 and shipped my first paid identity that summer. Since then
              I've worked across brand, product, and editorial — for early-stage founders, design
              studios, and a handful of larger teams who needed something built quickly without
              losing the craft.
            </p>
            <p className="mt-4 text-white/70">
              I split my time between London and Lagos. Most of my work is remote, with on-site
              workshops at the start of bigger engagements.
            </p>

            <div className="mt-12">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
                Process
              </p>
              <ol className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  ["Discover", "Understand the goal, audience, and constraints."],
                  ["Define", "Turn ideas into a tight, written brief we both sign off."],
                  ["Design", "Sketch, refine, and review in a shared file."],
                  ["Deliver", "Ship, measure, and follow up after 30 days."],
                ].map(([t, d]) => (
                  <li
                    key={t}
                    className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5"
                  >
                    <p className="font-display text-lg font-medium">{t}</p>
                    <p className="mt-1 text-sm text-white/60">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Stack</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              Tools I reach for first.
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {stack.map((s, i) => (
              <Reveal key={s} delay={i * 0.03}>
                <span className="rounded-full border border-white/15 px-5 py-2 font-display text-sm">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Path</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              A short version of the timeline.
            </h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <li className="grid grid-cols-12 items-start gap-6 py-8">
                  <span className="col-span-3 font-display text-2xl text-[#D6FF3D] md:col-span-2 md:text-4xl">
                    {t.year}
                  </span>
                  <p className="col-span-9 font-display text-xl md:col-span-10 md:text-2xl">
                    {t.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
