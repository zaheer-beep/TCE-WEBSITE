/**
 * Single source of truth for company details.
 * Leave `phone` / `email` empty to hide them across the site.
 */
export const site = {
  name: "TCE Property Management",
  shortName: "TCE",
  url: "https://tceproperties.com",
  tagline: "Inspection. Management. Construction. Risk mitigation.",
  description:
    "TCE is a New York City property management firm that goes beyond management: scheduled inspections, in-house construction oversight, and risk mitigation for owners who expect more from their buildings.",
  yearsInBusiness: 15,
  market: "New York City",
  phone: "" as string, // e.g. "(212) 555-0100"
  email: "" as string, // e.g. "info@tceproperties.com"
  address: {
    street: "4 New Hyde Park Rd, Suite 4",
    city: "Franklin Square",
    state: "NY",
    zip: "11010",
  },
  hours: [
    { days: "Monday to Saturday", time: "8 am to 8 pm" },
    { days: "Sunday", time: "9 am to 6 pm" },
  ],
  boroughs: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/#the-tce-standard", label: "The TCE Standard" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
