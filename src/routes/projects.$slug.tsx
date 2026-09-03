import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project unavailable — Boaz Kiptanui" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Boaz Kiptanui`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1180px] flex-col justify-center px-6 sm:px-10">
      <div className="label-mono text-primary">404</div>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        That project isn't in the register.
      </h1>
      <Link
        to="/"
        className="label-mono mt-8 inline-flex w-fit items-center gap-2 border-b border-input pb-1 transition-colors duration-300 hover:border-primary hover:text-primary"
      >
        <span className="text-primary">←</span> Back to portfolio
      </Link>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(125%_80%_at_18%_-12%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_58%),radial-gradient(140%_90%_at_90%_110%,oklch(0.11_0.03_145_/0.6),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-border py-8">
          <Link to="/" className="font-display text-sm tracking-tight">
            <span className="text-primary">BK</span>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/70">Kiptanui</span>
          </Link>
          <Link
            to="/"
            hash="work"
            className="label-mono text-foreground/55 transition-colors duration-300 hover:text-primary"
          >
            ← All work
          </Link>
        </header>

        <section className="grid grid-cols-12 gap-x-6 pt-16 pb-12 sm:pt-20">
          <div className="col-span-12 sm:col-span-8">
            <div className="label-mono mb-6 tracking-[0.22em] text-primary">
              {String(index + 1).padStart(2, "0")} — {project.year}
            </div>
            <h1 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-balance">
              {project.name}
            </h1>
            <p className="mt-8 max-w-[50ch] text-[15px] leading-relaxed text-pretty text-foreground/70 sm:text-base">
              {project.summary}
            </p>
          </div>
          <div className="col-span-12 mt-8 sm:col-span-3 sm:col-start-10 sm:mt-0">
            <div className="label-mono mb-3 text-foreground/40">Stack</div>
            <div className="flex flex-col gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="font-mono text-xs text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={project.deployLink}
                target="_blank"
                rel="noreferrer"
                className="label-mono w-fit border-b border-input pb-1 transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                Live site <span className="text-primary">↗</span>
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="label-mono w-fit border-b border-input pb-1 transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                Source code <span className="text-primary">↗</span>
              </a>
            </div>
          </div>
        </section>

        <img
          src={project.image}
          alt={`${project.name} interface screenshot`}
          className="w-full bg-card object-cover outline outline-offset-[-1px] outline-border"
        />

        <section className="grid grid-cols-12 gap-x-6 border-t border-border py-16 sm:py-20">
          <div className="col-span-12 sm:col-span-3">
            <div className="label-mono text-primary">Overview</div>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:col-start-5">
            <p className="max-w-[62ch] text-[15px] leading-relaxed text-pretty text-foreground/75">
              {project.description}
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-between gap-6 border-t border-border py-16 sm:flex-row sm:items-end">
          <div>
            <div className="label-mono mb-4 text-foreground/40">Next project</div>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="font-display text-3xl font-semibold tracking-tight transition-colors duration-300 hover:text-primary sm:text-4xl"
            >
              {next.name} <span className="text-primary">→</span>
            </Link>
          </div>
          <Link
            to="/"
            hash="contact"
            className="label-mono w-fit border-b border-input pb-1 transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            Start a project <span className="text-primary">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
