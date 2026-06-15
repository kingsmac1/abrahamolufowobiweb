import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Marquee";
import { CTASection } from "@/components/site/Sections";
import { getPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Journal` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
          { name: "twitter:image", content: loaderData.post.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="px-5 pt-44 text-center">
      <h1 className="font-display text-4xl">Post not found</h1>
    </div>
  ),
  component: PostDetail,
});

function PostDetail() {
  const { post } = Route.useLoaderData() as { post: import("@/data/blog").Post };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <article className="px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              to="/blog"
              className="font-display text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white"
            >
              ← All posts
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-display text-xs uppercase tracking-[0.25em] text-[#D6FF3D]">
              {post.category} · {post.date} · {post.readTime}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              {post.title}
            </h1>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-3xl">
            <img src={post.image} alt={post.title} className="w-full" />
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl space-y-6">
          {post.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <p className="font-display text-lg leading-relaxed text-white/80 md:text-xl">{p}</p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="mt-24 border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              Keep reading
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              Related posts
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((p, i) => (
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
                  <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight group-hover:text-[#D6FF3D]">
                    {p.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
