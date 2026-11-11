import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { pillars, services } from "@/lib/services";
import { site } from "@/lib/site";

const stats = [
  { value: `${site.yearsInBusiness}+`, label: "Years in business" },
  { value: "5", label: "Boroughs served" },
  { value: "24/7", label: "Emergency response" },
  { value: "4", label: "Disciplines, one team" },
];

const comparison = [
  {
    topic: "Inspections",
    typical: "The building is looked at when a tenant complains.",
    tce: "Scheduled, photo-documented inspections with every finding assigned and tracked.",
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
    typical: "Four vendors, four stories, nobody responsible.",
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
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/skyline.webp"
          alt="New York City buildings with a tower crane on the skyline"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent"
        />

        <div className="container-x pb-24 pt-24 sm:pb-36 sm:pt-36">
          <p className="eyebrow">
            New York City · Over {site.yearsInBusiness} years
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Most companies manage buildings.{" "}
            <span className="text-sky">We protect them.</span>
          </h1>
          <p className="lede mt-7 max-w-2xl text-white/80">
            TCE brings inspection, management, construction and risk mitigation
            under one roof, so your property is not just run day to day. It is
            examined, improved and defended.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a proposal <Icon name="arrow" className="size-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Company at a glance" className="border-y border-line bg-panel">
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
              <dd className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
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
            Four disciplines that usually take four companies.
          </h2>
          <p className="lede mt-5">
            A manager, an inspector, a construction manager and a risk
            consultant rarely talk to each other. At TCE they are the same team,
            working from the same information about your building.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {secondary.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group flex items-center gap-5 p-6 transition-colors hover:border-brand/60 hover:bg-panel-2"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon name={s.icon} />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">{s.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-mist">{s.summary}</span>
              </span>
              <Icon name="arrow" className="size-5 shrink-0 text-sky transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* The TCE Standard */}
      <section id="the-tce-standard" className="border-y border-line bg-panel">
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
            <div className="hidden grid-cols-[0.7fr_1fr_1.2fr] bg-ink text-xs font-semibold uppercase tracking-[0.18em] md:grid">
              <div className="px-6 py-4 text-mist">&nbsp;</div>
              <div className="border-l border-line px-6 py-4 text-mist">Typical manager</div>
              <div className="border-l border-line bg-brand/10 px-6 py-4 text-sky">TCE</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.topic}
                className="grid border-t border-line first:border-t-0 md:grid-cols-[0.7fr_1fr_1.2fr] md:first:border-t"
              >
                <h3 className="px-6 pt-6 text-lg font-semibold md:py-6">{row.topic}</h3>
                <p className="flex gap-3 px-6 pt-3 text-[15px] leading-relaxed text-mist md:border-l md:border-line md:py-6">
                  <Icon name="x" className="mt-1 size-4 shrink-0 text-white/30" />
                  <span>
                    <span className="sr-only">Typical manager: </span>
                    {row.typical}
                  </span>
                </p>
                <p className="flex gap-3 px-6 pb-6 pt-3 text-[15px] leading-relaxed text-white md:border-l md:border-line md:bg-brand/[0.06] md:py-6">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-brand" />
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

      {/* Process */}
      <section className="container-x py-20 sm:py-28">
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
                src="/images/facade.webp"
                alt="Workers on rope access cleaning a building facade"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol className="space-y-5">
            {process.map((step, i) => (
              <li key={step.title} className="card flex gap-6 p-7">
                <span className="text-3xl font-semibold tabular-nums text-brand">
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
      </section>

      {/* Property types + NYC */}
      <section className="border-t border-line bg-panel">
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
                  className="rounded-full border border-line bg-ink px-4 py-2 text-sm text-white/85"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {propertyTypes.map((t) => (
              <li key={t.title} className="bg-ink p-7">
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
