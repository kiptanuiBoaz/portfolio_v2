import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import portrait from "@/assets/portrait.png";
import { projects, skills, socials, stack, RESUME_URL } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boaz Kiptanui — Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Boaz Kiptanui, a software developer in Nairobi building typed, resilient web products with React, Next.js, Node.js and TypeScript.",
      },
      { property: "og:title", content: "Boaz Kiptanui — Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work, capabilities and contact details for Boaz Kiptanui, a software developer building considered web interfaces.",
      },
    ],
  }),
  component: HomePage,
});

function Level({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${level} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-6 ${i <= level ? "bg-primary/70" : "bg-foreground/12"}`}
        />
      ))}
    </div>
  );
}

function ContactForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="col-span-12 sm:col-span-6 sm:col-start-7"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const firstName = String(data.get("firstName") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();
        if (!firstName || !email || !message) {
          toast.error("Please fill in your name, email and message.");
          return;
        }
        setSending(true);
        const subject = encodeURIComponent(`Project enquiry from ${firstName}`);
        const body = encodeURIComponent(`${message}\n\n— ${firstName} (${email})`);
        window.location.href = `mailto:kiptanuiboaz@gmail.com?subject=${subject}&body=${body}`;
        toast.success("Opening your mail client…");
        setSending(false);
      }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="label-mono text-foreground/45">First name</span>
          <input
            name="firstName"
            type="text"
            placeholder="Ada"
            className="mt-2 w-full border-b border-input bg-transparent py-2 text-sm text-foreground transition-colors duration-300 outline-none placeholder:text-foreground/30 focus:border-primary"
          />
        </label>
        <label className="block">
          <span className="label-mono text-foreground/45">Last name</span>
          <input
            name="lastName"
            type="text"
            placeholder="Okafor"
            className="mt-2 w-full border-b border-input bg-transparent py-2 text-sm text-foreground transition-colors duration-300 outline-none placeholder:text-foreground/30 focus:border-primary"
          />
        </label>
      </div>
      <label className="mt-6 block">
        <span className="label-mono text-foreground/45">Email</span>
        <input
          name="email"
          type="email"
          placeholder="you@studio.com"
          className="mt-2 w-full border-b border-input bg-transparent py-2 text-sm text-foreground transition-colors duration-300 outline-none placeholder:text-foreground/30 focus:border-primary"
        />
      </label>
      <label className="mt-6 block">
        <span className="label-mono text-foreground/45">Message</span>
        <textarea
          name="message"
          rows={3}
          placeholder="A product, a platform, a problem worth solving."
          className="mt-2 w-full resize-none border-b border-input bg-transparent py-2 text-sm text-foreground transition-colors duration-300 outline-none placeholder:text-foreground/30 focus:border-primary"
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="group mt-8 border border-primary/60 bg-primary/8 px-7 py-3 font-display text-sm tracking-tight text-primary transition-colors duration-300 hover:bg-primary/15 disabled:opacity-60"
      >
        Send message{" "}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(125%_80%_at_18%_-12%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_58%),radial-gradient(140%_90%_at_90%_110%,oklch(0.11_0.03_145_/0.6),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-border py-8">
          <div className="font-display text-sm tracking-tight">
            <span className="text-primary">BK</span>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/70">Kiptanui</span>
          </div>
          <nav className="hidden items-center gap-7 sm:flex">
            {[
              ["01 About", "#about"],
              ["02 Skills", "#skills"],
              ["03 Work", "#work"],
              ["04 Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="label-mono text-foreground/55 transition-colors duration-300 hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <span className="label-mono hidden text-foreground/40 lg:inline">Nairobi, KE</span>
            <a
              href="#contact"
              className="label-mono inline-flex items-center gap-2 border border-primary/50 px-4 py-2 text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/10"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-12 gap-x-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div className="col-span-12 sm:col-span-9">
            <div className="rise label-mono mb-7 tracking-[0.22em] text-primary">
              Software Developer · Design-Forward Engineering
            </div>
            <h1 className="rise font-display text-[clamp(3.25rem,12vw,9rem)] leading-[0.92] font-semibold tracking-[-0.03em] text-balance [animation-delay:80ms]">
              Boaz
              <br />
              Kiptanui<span className="text-primary">.</span>
            </h1>
            <p className="rise mt-9 max-w-[46ch] text-[15px] leading-relaxed text-pretty text-foreground/70 sm:text-base [animation-delay:160ms]">
              I build enterprise-grade web applications with Node.js, React and Next.js —
              from a Notion-calendar engine to a full commerce stack. Clean, modular code
              and interfaces that hold up in production.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-3 sm:justify-self-end sm:text-right">
            <div className="rise label-mono text-foreground/40 [animation-delay:240ms]">
              Available for
              <br />
              selected work · 2026
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="grid grid-cols-12 gap-x-6 border-t border-border py-16 sm:py-20"
        >
          <div className="col-span-12 sm:col-span-4">
            <div className="label-mono mb-4 text-primary">01 — About</div>
            <img
              src={portrait}
              alt="Portrait of Boaz Kiptanui, software developer"
              loading="lazy"
              className="aspect-4/5 w-full bg-card object-cover outline outline-offset-[-1px] outline-border"
            />
          </div>
          <div className="col-span-12 sm:col-span-7 sm:col-start-6">
            <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              A developer who treats the browser like a print shop.
            </h2>
            <p className="max-w-[58ch] text-[15px] leading-relaxed text-pretty text-foreground/70">
              I have a strong track record in enterprise-level web development using
              Node.js, React and Next.js, with deep experience across JavaScript and
              TypeScript. I build web applications, write clean and modular code,
              collaborate closely with designers and ship on time. Based in Nairobi,
              working across time zones.
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <div className="label-mono mb-4 text-foreground/40">Tech stack</div>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {stack.map((item) => (
                  <span key={item} className="font-mono text-xs text-foreground/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="label-mono mt-8 inline-flex items-center gap-2 border-b border-input pb-1 text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              View résumé <span className="text-primary">↓</span>
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="label-mono mb-4 text-primary">02 — Skills</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Capabilities, graded.
              </h2>
            </div>
            <div className="label-mono hidden text-foreground/40 sm:block">
              Scale 1 — 5
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.text}
                className="flex items-center justify-between border-t border-border py-4 last:border-b"
              >
                <div>
                  <div className="font-display text-base tracking-tight">{skill.text}</div>
                  <div className="label-mono text-[10px] text-foreground/40">
                    {skill.note}
                  </div>
                </div>
                <Level level={skill.level} />
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-border py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="label-mono mb-4 text-primary">03 — Work</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Selected projects.
              </h2>
            </div>
            <div className="label-mono hidden text-foreground/40 sm:block">
              2022 — 2026
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-6">
            {projects.map((project, index) => {
              const wide = index % 3 === 0 || index === 3 || index === 5;
              return (
                <article
                  key={project.slug}
                  className={`col-span-12 ${wide ? "md:col-span-7" : "md:col-span-5"} ${
                    index === 0 ? "" : index === 1 ? "mt-12 md:mt-0" : "mt-12"
                  }`}
                >
                  <div className="mb-4 flex items-baseline justify-between">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="label-mono text-[10px] text-foreground/40">
                      {project.year}
                    </span>
                  </div>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} interface screenshot`}
                      loading="lazy"
                      className={`w-full ${wide ? "aspect-video" : "aspect-4/3"} bg-card object-cover outline outline-offset-[-1px] outline-border transition-opacity duration-300 hover:opacity-80`}
                    />
                  </Link>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        className="transition-colors duration-300 hover:text-primary"
                      >
                        {project.name}
                      </Link>
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href={project.deployLink}
                        target="_blank"
                        rel="noreferrer"
                        className="label-mono text-[11px] text-foreground/60 transition-colors duration-300 hover:text-primary"
                      >
                        Live
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="label-mono text-[11px] text-foreground/60 transition-colors duration-300 hover:text-primary"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                  <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-pretty text-foreground/60">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="label-mono border border-border px-2 py-1 text-[10px] tracking-[0.1em] text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid grid-cols-12 gap-x-6 border-t border-border py-16 sm:py-20"
        >
          <div className="col-span-12 sm:col-span-5">
            <div className="label-mono mb-4 text-primary">04 — Contact</div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Let's make something considered.
            </h2>
            <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-pretty text-foreground/65">
              I thrive in fast-paced settings and stay close to where web development is
              heading. Tell me about the project, the timeline, and what good looks like.
            </p>
            <div className="mt-8 font-mono text-xs text-foreground/60">
              kiptanuiboaz@gmail.com
            </div>
          </div>
          <ContactForm />
        </section>

        <footer className="flex flex-col items-start justify-between gap-6 border-t border-border py-10 sm:flex-row sm:items-center">
          <div className="label-mono text-foreground/45">
            © 2026 Boaz Kiptanui — Set in Sora &amp; Manrope
          </div>
          <nav className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="label-mono text-foreground/55 transition-colors duration-300 hover:text-primary"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </div>
  );
}
