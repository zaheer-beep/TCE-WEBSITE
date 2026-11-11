import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a proposal or a property walkthrough from TCE Property Management. Serving all five boroughs of New York City.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { address } = site;
  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.city}, ${address.state} ${address.zip}`,
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your property."
        lede="Whether you need full management, a single inspection or help with a project that has stalled, start here. We will respond with a clear next step."
      />

      <section className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <ContactForm />

        <aside className="space-y-5">
          <div className="card p-7">
            <h2 className="text-lg font-semibold">Office</h2>
            <ul className="mt-5 space-y-5 text-[15px] leading-relaxed text-mist">
              <li className="flex gap-4">
                <Icon name="pin" className="mt-0.5 size-5 shrink-0 text-brand" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky"
                >
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </a>
              </li>
              {site.phone && (
                <li className="flex gap-4">
                  <Icon name="phone" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-sky">
                    {site.phone}
                  </a>
                </li>
              )}
              {site.email && (
                <li className="flex gap-4">
                  <Icon name="mail" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <a href={`mailto:${site.email}`} className="hover:text-sky">
                    {site.email}
                  </a>
                </li>
              )}
              <li className="flex gap-4">
                <Icon name="clock" className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div className="card p-7">
            <h2 className="text-lg font-semibold">Service area</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-mist">
              We work with property owners across New York City:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.boroughs.map((b) => (
                <li key={b} className="rounded-full border border-line bg-ink px-3 py-1.5 text-sm text-white/85">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
