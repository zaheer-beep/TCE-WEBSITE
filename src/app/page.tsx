import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { StageBadge } from "@/components/StageBadge";
import { featured, photoSrc, program } from "@/lib/projects";
import { pillars, services } from "@/lib/services";
import { site } from "@/lib/site";

const stats = [
  { value: `${site.yearsInBusiness}+`, label: "Years in business" },
  { value: "5", label: "Boroughs served" },
  { value: "24/7", label: "Emergency response" },
  { value: "5", label: "Disciplines, one team" },
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
  {
    topic: "Accountability",
    typical: "Five vendors, five stories, nobody responsible.",
    tce: "One team answerable for the whole building.",
  },
];

const process = [
  {
    title: "Walk the property",
    body: "We start on site. Roof to basement, we document condition, systems, open violations and immediate risks.",
  },
  {
    title: "Build the plan",
    body: "You receive a written plan: operating budget, inspection schedule, compliance calendar and capital priorities.",
  },
  {
    title: "Take over operations",
    body: "Staff, vendors, tenants and books move to our team with a structured handover so nothing is dropped.",
  },
  {
    title: "Report and improve",
    body: "Monthly reporting shows what was done, what was found and what is next. The plan is updated as the building changes.",
  },
];

const propertyTypes = [
  { title: "Multifamily residential", body: "Rental buildings from walk-ups to elevator towers." },
  { title: "Office and commercial", body: "Workplaces where uptime and presentation matter." },
  { title: "Retail and mixed-use", body: "Street-level retail with residential or office above." },
  { title: "Industrial and specialty", body: "Warehouses and properties with heavy building systems." },
];

export default function Home() {
  const secondary = services.filter((s) => !s.pillar);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 size-[36rem] rounded-full bg-brand/20 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <p className="eyebrow">
              New York City · Over {site.yearsInBusiness} years
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Most companies manage buildings.{" "}
              <span className="text-brand-deep">We protect them.</span>
            </h1>
            <p className="lede mt-7 max-w-xl">
              TCE brings management, inspection, engineering, construction and
              risk mitigation under one roof, so your property is not just run
              day to day. It is examined, improved and defended.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a proposal <Icon name="arrow" className="size-4" />
              </Link>
              <Link href="/projects" className="btn-ghost">
                See our work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgb(12_29_46/0.45)]">
              <Image
                src="/images/skyline.webp"
                alt="New York City buildings with a tower crane on the skyline"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="card absolute -bottom-6 -left-4 max-w-[15rem] p-5 sm:-left-8">
              <p className="text-3xl font-semibold tracking-tight text-brand-deep">150+</p>
              <p className="mt-1 text-sm leading-snug text-mist">
                work orders completed in one 24-month building upgrade program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Company at a glance" className="border-y border-line bg-white">
        <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse gap-1 py-8 sm:py-10 ${
                i % 2 === 1 ? "border-l border-line pl-6" : ""
              } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-6" : ""
              }`}
            >
              <dt className="text-sm text-mist">{s.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-brand-deep sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Four pillars */}
      <section className="container-x py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <h2 className="h-section mt-4">
            Five disciplines that usually take five companies.
          </h2>
          <p className="lede mt-5">
            A manager, an inspector, an engineer, a construction manager and a
            risk consultant rarely talk to each other. At TCE they are the same team,
            working from the same information about your building.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillars.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {secondary.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group flex items-center gap-5 p-6 transition-colors hover:border-brand/60 hover:bg-surface"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-deep">
                <Icon name={s.icon} />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">{s.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-mist">{s.summary}</span>
              </span>
              <Icon name="arrow" className="size-5 shrink-0 text-brand-deep transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* The TCE Standard */}
      <section id="the-tce-standard" className="border-y border-line bg-surface">
        <div className="container-x py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">The TCE Standard</p>
            <h2 className="h-section mt-4">
              What you get here that you do not get elsewhere.
            </h2>
            <p className="lede mt-5">
              Collecting rent and answering calls is the minimum. This is how
              the work compares when a building is actually being looked after.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            <div className="hidden grid-cols-[0.7fr_1fr_1.2fr] bg-white text-xs font-semibold uppercase tracking-[0.18em] md:grid">
              <div className="px-6 py-4 text-mist">&nbsp;</div>
              <div className="border-l border-line px-6 py-4 text-mist">Typical manager</div>
              <div className="border-l border-line bg-brand/10 px-6 py-4 text-brand-deep">TCE</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.topic}
                className="grid border-t border-line first:border-t-0 md:grid-cols-[0.7fr_1fr_1.2fr] md:first:border-t"
              >
                <h3 className="px-6 pt-6 text-lg font-semibold md:py-6">{row.topic}</h3>
                <p className="flex gap-3 px-6 pt-3 text-[15px] leading-relaxed text-mist md:border-l md:border-line md:py-6">
                  <Icon name="x" className="mt-1 size-4 shrink-0 text-navy/30" />
                  <span>
                    <span className="sr-only">Typical manager: </span>
                    {row.typical}
                  </span>
                </p>
                <p className="flex gap-3 px-6 pb-6 pt-3 text-[15px] leading-relaxed text-navy md:border-l md:border-line md:bg-brand/[0.06] md:py-6">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-brand-deep" />
                  <span>
                    <span className="sr-only">TCE: </span>
                    {row.tce}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="container-x py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="eyebrow">Recent work</p>
            <h2 className="h-section mt-4">Proof, before and after.</h2>
            <p className="lede mt-5">
              From a single 24-month upgrade program at a New York City
              government facility: {program.stats[1].value} work orders across{" "}
              {program.stats[2].value} major work areas, managed entirely by TCE.
            </p>
          </div>
          <Link href="/projects" className="btn-ghost">
            View all projects <Icon name="arrow" className="size-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((f) => (
            <li key={f.title} className="card overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-line">
                {(["before", "after"] as const).map((k) => (
                  <div key={k} className="relative aspect-[3/4] bg-surface">
                    <Image
                      src={photoSrc(f[k])}
                      alt={`${f.title}, ${k}`}
                      fill
                      sizes="(min-width: 1024px) 17vw, 50vw"
                      className="object-cover"
                    />
                    <StageBadge stage={k === "before" ? "Before" : "After"} />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="eyebrow">{f.category}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{f.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-surface">
      <div className="container-x py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="h-section mt-4">From first walkthrough to a building that runs itself.</h2>
            <p className="lede mt-5">
              Taking on a property is a process, not a handshake. Here is what
              the first months with TCE look like.
            </p>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-2xl border border-line lg:block">
              <Image
                src="/images/projects/s30-4.webp"
                alt="Rebuilt condenser water pump and motor in a mechanical room"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol className="space-y-5">
            {process.map((step, i) => (
              <li key={step.title} className="card flex gap-6 p-7">
                <span className="text-3xl font-semibold tabular-nums text-brand-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      </section>

      {/* Property types + NYC */}
      <section className="border-t border-line bg-white">
        <div className="container-x grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Who we work with</p>
            <h2 className="h-section mt-4">Built for New York City buildings.</h2>
            <p className="lede mt-5">
              Old risers, strict local laws, demanding tenants and no room for
              error. We have spent more than {site.yearsInBusiness} years
              learning how buildings here really behave.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.boroughs.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm text-navy/85"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {propertyTypes.map((t) => (
              <li key={t.title} className="bg-white p-7">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
