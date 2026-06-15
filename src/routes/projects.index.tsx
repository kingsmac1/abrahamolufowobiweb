import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Marquee } from "@/components/site/Marquee";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTASection, Testimonials } from "@/components/site/Sections";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Abraham Oluwofobi" },
      { name: "description", content: "Selected websites, brand identities and design work." },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <>
      <section className="px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              Projects · {projects.length}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[0.95] tracking-tighter">
              Selected <span className="text-[#D6FF3D]">work</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <Marquee />
      <Testimonials />
      <CTASection />
    </>
  );
}
