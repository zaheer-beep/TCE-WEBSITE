import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function Footer() {
  const { address } = site;
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/tce-logo.png"
            alt="TCE Property Management"
            width={466}
            height={473}
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
            Management, inspection, engineering, construction and risk
            mitigation for New York City property owners. Over {site.yearsInBusiness} years in
            business.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">Services</h2>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand-deep">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li><Link href="/about" className="hover:text-brand-deep">About TCE</Link></li>
            <li><Link href="/projects" className="hover:text-brand-deep">Projects</Link></li>
            <li><Link href="/#the-tce-standard" className="hover:text-brand-deep">The TCE Standard</Link></li>
            <li><Link href="/contact" className="hover:text-brand-deep">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brand-deep">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">Office</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-mist">
            <p>
              {address.street}
              <br />
              {address.city}, {address.state} {address.zip}
            </p>
            {site.phone && (
              <p>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-brand-deep">
                  {site.phone}
                </a>
              </p>
            )}
            {site.email && (
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-brand-deep">
                  {site.email}
                </a>
              </p>
            )}
            {site.hours.map((h) => (
              <p key={h.days}>
                {h.days}: {h.time}
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Serving {site.boroughs.join(", ")}.</p>
        </div>
      </div>
    </footer>
  );
}
