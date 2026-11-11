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
    "Property management, inspections, construction and capital projects, risk mitigation, NYC compliance and building maintenance from one accountable team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const secondary = services.filter((s) => !s.pillar);
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a building needs, from one team."
        lede="Most owners piece together a manager, an inspector, a contractor and an insurance advisor. TCE covers all four, plus the compliance and maintenance work that holds a New York City building together."
      >
        <Link href="/contact" className="btn-primary">
          Request a proposal <Icon name="arrow" className="size-4" />
        </Link>
      </PageHero>

      <section className="container-x py-20 sm:py-24">
        <h2 className="h-section">The four core disciplines</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
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
