import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { pillars, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Property management, inspections, engineering, construction and capital projects, risk mitigation, NYC compliance and maintenance from one accountable team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const secondary = services.filter((s) => !s.pillar);
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a building needs, from one team."
        lede="Most owners piece together a manager, an inspector, an engineer, a contractor and a risk advisor. TCE covers all five, plus the compliance and maintenance work that holds a New York City building together."
      >
        <Link href="/contact" className="btn-primary">
          Request a proposal <Icon name="arrow" className="size-4" />
        </Link>
      </PageHero>

      <section className="container-x py-20 sm:py-24">
        <h2 className="h-section">The five core disciplines</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        <h2 className="h-section mt-20">Supporting services</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {secondary.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
