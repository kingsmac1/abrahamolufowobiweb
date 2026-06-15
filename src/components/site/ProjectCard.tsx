import { Link } from "@tanstack/react-router";
import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
        ref={ref}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={onMove}
        className={`group relative overflow-hidden rounded-2xl bg-[#0a0a0a] ${hover ? "cursor-none" : ""}`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex items-end justify-between p-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
              {project.title}
            </h3>
          </div>
          <span className="font-display text-xs uppercase tracking-[0.25em] text-white/60">
            View →
          </span>
        </div>

        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              style={{ left: pos.x, top: pos.y }}
              className="pointer-events-none absolute z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#D6FF3D] font-display text-xs font-medium uppercase tracking-[0.2em] text-black"
            >
              View ↗
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}
