import { motion } from "framer-motion";

const items = [
  "Website Development",
  "Branding",
  "Graphic Design",
  "Identity Systems",
  "Editorial Design",
  "Art Direction",
];

export function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-10">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-5xl font-medium tracking-tight md:text-7xl">
              {it}
            </span>
            <span className="text-4xl text-[#D6FF3D] md:text-6xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
