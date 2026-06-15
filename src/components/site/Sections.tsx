import { Link } from "@tanstack/react-router";
import { Reveal } from "./Marquee";

export function CTASection() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[#D6FF3D] px-8 py-20 text-center text-black md:px-16 md:py-28">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-black/60">
            Let's work together
          </p>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Have an idea? <br /> Let's bring it to life.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-display text-base font-medium text-white transition-transform hover:scale-105"
          >
            Start a project <span>↗</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function Testimonials() {
  const items = [
    {
      quote:
        "Abraham shipped a site that's twice as fast and three times as on-brand. He's the rare designer who can also build the thing.",
      name: "Sade A.",
      role: "Founder, Meridian",
    },
    {
      quote:
        "The identity work felt inevitable once it was done — which is exactly what you want from a brand designer.",
      name: "James O.",
      role: "CEO, Early Grind",
    },
    {
      quote:
        "Calm, fast, and opinionated in the best way. Will use again on every project.",
      name: "Tomi L.",
      role: "Product Lead, Ledger",
    },
  ];
  return (
    <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
            Testimonials
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Words from people I've worked with.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
                <p className="text-3xl text-[#D6FF3D]">"</p>
                <p className="mt-2 font-display text-lg leading-snug text-white/90">{t.quote}</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-display font-medium">{t.name}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
