import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Marquee";
import { CTASection } from "@/components/site/Sections";
import { ProjectCard } from "@/components/site/ProjectCard";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Abraham Oluwofobi` },
          { name: "description", content: loaderData.project.excerpt },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.excerpt },
          { property: "og:image", content: loaderData.project.image },
          { name: "twitter:image", content: loaderData.project.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="px-5 pt-44 text-center">
      <h1 className="font-display text-4xl">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-[#D6FF3D]">
        Back to projects ↗
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: import("@/data/projects").Project };
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="px-5 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Link
              to="/projects"
              className="font-display text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white"
            >
              ← All projects
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,7rem)] font-medium leading-[0.95] tracking-tighter">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-2xl text-lg text-white/70">{project.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <Reveal className="mx-auto max-w-[1400px]">
          <div className="overflow-hidden rounded-3xl">
            <picture>
              {project.mobileImage && (
                <source srcSet={project.mobileImage} media="(max-width: 767px)" />
              )}
              <img
                src={project.image}
                alt={project.title}
                className="w-full"
              />
            </picture>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <dl className="grid grid-cols-2 gap-6 md:grid-cols-1">
              {[
                ["Client", project.client],
                ["Year", project.year],
                ["Category", project.category],
                ["Services", project.services.join(", ")],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <dt className="font-display text-xs uppercase tracking-[0.25em] text-white/40">{k}</dt>
                  <dd className="mt-2 font-display text-base">{v}</dd>
                </div>
              ))}
              {project.url && (
                <div>
                  <dt className="font-display text-xs uppercase tracking-[0.25em] text-white/40">Live site</dt>
                  <dd className="mt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D6FF3D] px-5 py-2.5 font-display text-sm font-medium text-black"
                    >
                      Visit live site ↗
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-4xl">Overview</h2>
            <p className="mt-4 text-white/70">{project.overview}</p>
            <h2 className="mt-12 font-display text-2xl font-medium tracking-tight md:text-4xl">
              The challenge
            </h2>
            <p className="mt-4 text-white/70">{project.challenge}</p>
            <h2 className="mt-12 font-display text-2xl font-medium tracking-tight md:text-4xl">
              The outcome
            </h2>
            <p className="mt-4 text-white/70">{project.outcome}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              Related work
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              Keep exploring
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}