import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `TCE Property Management has served New York City property owners for over ${site.yearsInBusiness} years, combining management with inspection, engineering, construction and risk mitigation.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Look first",
    body: "We do not manage what we have not inspected. Decisions start with what is actually happening in the building.",
  },
  {
    title: "Prevent, then repair",
    body: "The cheapest emergency is the one that never happens. Preventive work comes before reactive work.",
  },
  {
    title: "Own the outcome",
    body: "One team is responsible for the building. No hand-offs, no finger-pointing between vendors.",
  },
  {
    title: "Put it in writing",
    body: "Reports, photos, budgets and schedules. Owners should be able to see the work, not just hear about it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TCE"
        title={`Over ${site.yearsInBusiness} years of looking after New York City buildings.`}
        lede="TCE started with a simple observation: buildings rarely fail because rent was not collected. They fail because nobody inspected the roof, maintained the plant, managed the renovation or planned for the risk. So we built a firm that does all of it."
      />

      <section className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
          <Image
            src="/images/projects/s18-4.webp"
            alt="Restored stone balustrade and brick parapet on a New York City rooftop"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="self-center">
          <p className="eyebrow">Who we are</p>
          <h2 className="h-section mt-4">A property firm, not just a property manager.</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-mist">
            <p>
              TCE Property Management is based in New York and serves owners
              across all five boroughs. We manage buildings day to day, and we
              also do the work that sits around management and decides whether
              an asset gains or loses value.
            </p>
            <p>
              That means scheduled inspections with real reports. It means an
              in-house engineering team that keeps mechanical systems running.
              It means running construction and capital projects ourselves, from scope
              to closeout. And it means treating risk, from water damage to
              uninsured vendors to city violations, as something to be managed
              before it becomes a cost.
            </p>
            <p>
              Owners come to us when they want fewer surprises and a clearer
              picture of their property.
            </p>
          </div>
          <Link href="/services" className="btn-ghost mt-8">
            See our services <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-x grid gap-px py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <div className="pb-10 lg:pb-0">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Keep every building we touch safe, compliant and worth more.
            </h2>
            <p className="mt-5 leading-relaxed text-mist">
              We maintain properties to a high standard through proactive
              maintenance, responsive service and people who know building
              systems.
            </p>
          </div>
          <div className="border-t border-line pt-10 lg:border-l lg:border-t-0 lg:pl-20 lg:pt-0">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Raise what owners expect from property management.
            </h2>
            <p className="mt-5 leading-relaxed text-mist">
              Trust and transparency build long relationships. We want owners
              to know their building as well as we do.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <p className="eyebrow">How we think</p>
        <h2 className="h-section mt-4">Four principles behind the work.</h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <li key={v.title} className="card p-7">
              <span className="text-sm font-semibold tabular-nums text-brand-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <CallToAction />
    </>
  );
}
