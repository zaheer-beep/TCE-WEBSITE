import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/CallToAction";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in New York City`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow={`Services · ${service.label}`} title={service.title} lede={service.intro}>
        <Link href="/contact" className="btn-primary">
          Discuss your property <Icon name="arrow" className="size-4" />
        </Link>
        <Link href="/services" className="btn-ghost">
          All services
        </Link>
      </PageHero>

      {service.image && (
        <div className="container-x pt-16 sm:pt-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-line">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <section className="container-x py-16 sm:py-24">
        <p className="eyebrow">What is included</p>
        <h2 className="h-section mt-4 max-w-2xl">How we deliver {service.title.toLowerCase()}.</h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {service.scope.map((item, i) => (
            <li key={item.title} className="bg-panel p-7">
              <span className="text-sm font-semibold tabular-nums text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-mist">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">What you receive</p>
            <h2 className="h-section mt-4">Work you can see on paper.</h2>
            <p className="lede mt-5">
              We do not ask owners to take our word for it. Every service
              produces records you keep.
            </p>
          </div>
          <ul className="space-y-4">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-4 rounded-xl border border-line bg-ink p-5">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Icon name="check" className="size-4" />
                </span>
                <span className="leading-relaxed text-white/90">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <h2 className="text-2xl font-semibold tracking-tight">Related services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="card flex h-full flex-col gap-4 p-5 transition-colors hover:border-brand/60 hover:bg-panel-2"
              >
                <Icon name={s.icon} className="size-6 text-brand" />
                <span className="font-semibold leading-snug">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CallToAction
        title={`Talk to us about ${service.label.toLowerCase()}.`}
        body="Tell us about the property and what you are dealing with. We will respond with a clear next step."
      />
    </>
  );
}
