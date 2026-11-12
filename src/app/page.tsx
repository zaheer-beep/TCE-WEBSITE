import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { HeroVideo } from "@/components/HeroVideo";
import { Icon } from "@/components/Icon";
import { allProjects, photoSrc, program } from "@/lib/projects";
import { pillars, services } from "@/lib/services";
import { site } from "@/lib/site";

const disciplineImages: Record<string, { src: string; alt: string }> = {
  "property-management": { src: "/images/building.webp", alt: "Street-level view of a managed building" },
  inspections: { src: "/images/projects/s18-1.webp", alt: "Stone balusters documented during an inspection" },
  engineering: { src: "/images/projects/s29-3.webp", alt: "New domestic water booster pumps" },
  construction: { src: "/images/projects/s17-5.webp", alt: "Rebuilt brick parapet" },
  "risk-mitigation": { src: "/images/projects/s12-4.webp", alt: "Replaced ceiling that removed an overhead hazard" },
};

const featuredSlugs = [
  "brick-replacement",
  "domestic-water-pumps",
  "lobby-corridor",
  "stone-restoration",
  "bathrooms",
  "condenser-water-pumps",
];

const stats = [
  { value: `${site.yearsInBusiness}+`, label: "Years in business" },
  { value: "5", label: "Boroughs served" },
  { value: "24/7", label: "Emergency response" },
  { value: program.stats[1].value, label: "Work orders, one program" },
];

const comparison = [
  {
    topic: "Inspections",
    typical: "The building is looked at when a tenant complains.",
    tce: "Scheduled, photo-documented inspections with every finding assigned and tracked.",
  },
  {
    topic: "Engineering",
    typical: "Every mechanical problem becomes an outside service call.",
    tce: "An in-house engineering team that finds the root cause and fixes it.",
  },
  {
    topic: "Construction",
    typical: "You are handed a contractor's number and left to manage the job.",
    tce: "We scope, bid, schedule and supervise the work through to closeout.",
  },
  {
    topic: "Risk",
    typical: "Addressed after the claim, the violation or the lawsuit.",
    tce: "Exposures identified up front, vendors verified, incidents documented.",
  },
  {
    topic: "Compliance",
    typical: "Deadlines surface when the fine arrives.",
    tce: "A compliance calendar for every property, with filings coordinated ahead of time.",
  },
  {
    topic: "Reporting",
    typical: "A rent roll and a list of bills.",
    tce: "Monthly reporting on finances, open items, building condition and capital needs.",
  },
];

export default function Home() {
  const secondary = services.filter((s) => !s.pillar);
  const featured = featuredSlugs
    .map((slug) => allProjects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return (
    <>
      {/* Hero: slides up underneath the transparent header */}
      <section className="relative isolate -mt-20 flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy">
        <HeroVideo />
        <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
        <div className="container-x relative py-32 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.28em] sm:text-sm">
            New York City · Over {site.yearsInBusiness} years
          </p>
          <h1 className="mx-auto mt-6 max-w-6xl font-display text-[12.5vw] uppercase leading-[0.92] sm:text-8xl lg:text-[9.5rem]">
            More than management
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Management, inspection, engineering, construction and risk
            mitigation for New York City buildings, from one accountable team.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-light">
              Request a proposal
            </Link>
            <Link href="/projects" className="btn-light">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Intro: image left, statement right */}
      <section className="container-x grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/projects/s18-4.webp"
            alt="Restored stone balustrade and brick parapet on a New York City rooftop"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="h-section">
            Most companies manage buildings. We protect them.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-navy/80">
            <p>
              Buildings rarely fail because rent was not collected. They fail
              because nobody inspected the roof, maintained the plant, managed
              the renovation or planned for the risk.
            </p>
            <p>
              For more than {site.yearsInBusiness} years, TCE has done all of
              it for New York City owners, so a property is not just run day to
              day. It is examined, improved and defended.
            </p>
          </div>
          <Link href="/about" className="link-caps mt-8">
            Our company <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </section>

      {/* Disciplines: colour block */}
      <section className="bg-brand-deep text-white">
        <div className="container-x py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl uppercase leading-none text-balance sm:text-5xl lg:text-7xl">
              Five disciplines. One team.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              A manager, an inspector, an engineer, a construction manager and
              a risk consultant rarely talk to each other. At TCE they are the
              same team, working from the same information about your building.
            </p>
            <Link href="/services" className="mt-7 inline-block text-[13px] font-bold uppercase tracking-[0.12em] underline-offset-4 hover:underline">
              All services
            </Link>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {pillars.map((s) => {
              const img = disciplineImages[s.slug];
              return (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group block text-center">
                    <div className="relative aspect-[3/4] overflow-hidden bg-navy/30">
                      {img && (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <h3 className="mt-5 font-display text-2xl uppercase leading-none underline-offset-4 group-hover:underline sm:text-3xl">
                      {s.label}
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mt-14 grid gap-px border border-white/30 bg-white/30 sm:grid-cols-2">
            {secondary.map((s) => (
              <li key={s.slug} className="bg-brand-deep">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full items-center justify-between gap-6 p-6 transition-colors hover:bg-white hover:text-brand-deep"
                >
                  <span>
                    <span className="block text-[13px] font-bold uppercase tracking-[0.12em]">{s.title}</span>
                    <span className="mt-2 block text-[15px] leading-relaxed opacity-85">{s.summary}</span>
                  </span>
                  <Icon name="arrow" className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured projects: horizontal scroller on a pale tint */}
      <section className="overflow-hidden bg-surface">
        <div className="container-x pt-20 sm:pt-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="h-section max-w-xl">Featured projects</h2>
            <Link href="/projects" className="link-caps">
              View all projects <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
        <ul
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-20 sm:px-10 sm:pb-28 lg:px-[max(2.5rem,calc((100vw-84rem)/2+2.5rem))]"
          aria-label="Featured projects"
        >
          {featured.map((project) => {
            const after = [...project.photos].reverse().find((p) => p.stage === "After") ?? project.photos[0];
            return (
              <li key={project.slug} className="w-[86vw] shrink-0 snap-start sm:w-[42rem]">
                <Link href={`/projects#${project.slug}`} className="group grid h-full bg-white sm:grid-cols-[1.15fr_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-[22rem]">
                    <Image
                      src={photoSrc(after.id)}
                      alt={`${project.title}: ${after.caption}`}
                      fill
                      sizes="(min-width: 640px) 24rem, 86vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-6 sm:p-8">
                    <p className="text-xs font-bold text-navy">Completed project</p>
                    <h3 className="h-card mt-2 text-brand-deep">{project.title}</h3>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/80">{project.summary}</p>
                    <span className="link-caps mt-6">View project</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Numbers */}
      <section aria-label="Company at a glance" className="border-b border-line">
        <dl className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end gap-2 text-center">
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-navy/75">{s.label}</dt>
              <dd className="font-display text-6xl leading-none text-brand-deep sm:text-7xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* The TCE Standard */}
      <section id="the-tce-standard" className="container-x py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <p className="eyebrow">The TCE Standard</p>
            <h2 className="h-section mt-4">What you do not get elsewhere</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/80">
              Collecting rent and answering calls is the minimum. This is how
              the work compares when a building is actually being looked after.
            </p>
          </div>

          <dl className="border-t border-brand-deep">
            {comparison.map((row) => (
              <div key={row.topic} className="grid gap-x-8 gap-y-3 border-b border-line py-6 sm:grid-cols-[10rem_1fr]">
                <dt className="font-display text-2xl uppercase leading-none text-brand-deep">{row.topic}</dt>
                <dd className="space-y-2 text-[15px] leading-relaxed">
                  <p className="flex gap-3 text-navy/60">
                    <Icon name="x" className="mt-1 size-4 shrink-0" />
                    <span>
                      <span className="font-semibold">Typical manager:</span> {row.typical}
                    </span>
                  </p>
                  <p className="flex gap-3 text-navy">
                    <Icon name="check" className="mt-1 size-4 shrink-0 text-brand-deep" />
                    <span>
                      <span className="font-semibold">TCE:</span> {row.tce}
                    </span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* History: text left, image right */}
      <section className="border-t border-line">
        <div className="container-x grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Built for New York</p>
            <h2 className="h-section mt-4">
              Looking after New York buildings for over {site.yearsInBusiness} years.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-navy/80">
              Old risers, strict local laws, demanding tenants and no room for
              error. We work with owners of multifamily, office, retail,
              mixed-use and institutional properties across all five boroughs.
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-deep">
              {site.boroughs.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Link href="/about" className="btn-ghost mt-9">
              About TCE
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/projects/s05-1.webp"
              alt="Renovated corridor with stone flooring and custom wood millwork"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
