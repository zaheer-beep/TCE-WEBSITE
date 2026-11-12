import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { StageBadge } from "@/components/StageBadge";
import { allProjects, categories, photoSrc, program } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Before and after photos of façade restoration, mechanical engineering and interior renovation work managed by TCE in New York City.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Completed work, shown before and after."
        lede={`${allProjects.length} projects from a 24-month building upgrade program TCE managed end to end at a New York City government facility, from the façade to the pump room.`}
      >
        {categories.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="btn-ghost">
            {c.title}
          </a>
        ))}
      </PageHero>

      <section aria-label="Program at a glance" className="border-b border-line">
        <dl className="container-x grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
          {program.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-mist">{s.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-brand-deep sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {categories.map((category, ci) => (
        <section
          key={category.id}
          id={category.id}
          className={ci % 2 === 1 ? "border-y border-line bg-surface" : ""}
        >
          <div className="container-x py-20 sm:py-24">
            <div className="max-w-3xl">
              <p className="eyebrow">
                {category.projects.length} projects
              </p>
              <h2 className="h-section mt-4">{category.title}</h2>
              <p className="lede mt-5">{category.intro}</p>
            </div>

            <div className="mt-14 space-y-16">
              {category.projects.map((project) => (
                <article
                  key={project.slug}
                  id={project.slug}
                  className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12"
                >
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-3 leading-relaxed text-mist">{project.summary}</p>
                    <ul className="mt-5 space-y-2.5">
                      {project.work.map((w) => (
                        <li key={w} className="flex gap-3 text-[15px] leading-relaxed">
                          <Icon name="check" className="mt-1 size-4 shrink-0 text-brand-deep" />
                          {w}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 border-l-2 border-brand-deep pl-4 text-[15px] font-semibold leading-relaxed">
                      {project.result}
                    </p>
                  </div>

                  <ul
                    className={`grid gap-3 self-start ${
                      project.photos.length === 2
                        ? "grid-cols-2"
                        : project.photos.length === 3
                          ? "grid-cols-2 sm:grid-cols-3"
                          : project.photos.length === 5
                            ? "grid-cols-2 sm:grid-cols-5"
                            : "grid-cols-2 sm:grid-cols-4"
                    }`}
                  >
                    {project.photos.map((p) => (
                      <li key={p.id}>
                        <a
                          href={photoSrc(p.id)}
                          target="_blank"
                          rel="noopener"
                          className="group block"
                          aria-label={`${p.stage}: ${p.caption} (opens full photo)`}
                        >
                          <figure>
                            <div className="relative aspect-[3/4] overflow-hidden rounded-none border border-line bg-surface">
                              <Image
                                src={photoSrc(p.id)}
                                alt={`${project.title}, ${p.stage.toLowerCase()}: ${p.caption}`}
                                fill
                                sizes="(min-width: 1024px) 20vw, 50vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                              />
                              <StageBadge stage={p.stage} />
                            </div>
                            <figcaption className="mt-2 text-sm leading-snug text-mist">
                              {p.caption}
                            </figcaption>
                          </figure>
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-x pt-16 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-mist">
          Client name and location are withheld at the client&apos;s request.
          References are available during the proposal process.{" "}
          <Link href="/contact" className="font-semibold text-brand-deep hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </section>

      <CallToAction
        title="Have a building that needs this kind of work?"
        body="Tell us what you are dealing with. We will walk the property and come back with a scope, a budget range and a schedule."
      />
    </>
  );
}
