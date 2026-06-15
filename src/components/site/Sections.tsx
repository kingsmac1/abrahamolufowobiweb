import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Marquee";

export function CTASection() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[#D6FF3D] px-8 py-20 text-center text-black md:px-16 md:py-28">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-black/60">
            Let's work together
          </p>
          <h2 className="mt-6 font-display text-6xl font-medium leading-[1.05] tracking-tight md:text-8xl">
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

const testimonialItems = [
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
  {
    quote:
      "Abraham translated a vague brief into a brand we are genuinely proud to put on a window.",
    name: "Ronke B.",
    role: "Co-founder, Lagos Bakery",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonialItems.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonialItems[index];

  return (
    <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
            Testimonials
          </p>
          <h2 className="mt-6 font-display font-medium leading-[0.95] tracking-tighter text-white" style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
            What my clients say
          </h2>
        </Reveal>

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-10 md:p-16 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <p className="text-5xl text-[#D6FF3D]">"</p>
              <p className="mt-4 font-display text-2xl leading-snug text-white/90 md:text-4xl">
                {t.quote}
              </p>
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-display text-lg font-medium">{t.name}</p>
                <p className="text-sm text-white/50">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonialItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#D6FF3D]" : "w-4 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setIndex((i) => (i - 1 + testimonialItems.length) % testimonialItems.length)
                }
                className="rounded-full border border-white/15 px-4 py-2 font-display text-sm hover:bg-white/5"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % testimonialItems.length)}
                className="rounded-full border border-white/15 px-4 py-2 font-display text-sm hover:bg-white/5"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
