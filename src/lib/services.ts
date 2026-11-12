export type IconName =
  | "building"
  | "clipboard"
  | "crane"
  | "gear"
  | "shield"
  | "scale"
  | "wrench";

export type Service = {
  slug: string;
  title: string;
  /** Short label used in navigation and cards. */
  label: string;
  icon: IconName;
  /** One line used on cards. */
  summary: string;
  /** Opening paragraph on the service page. */
  intro: string;
  image?: { src: string; alt: string };
  /** The individual things we do under this service. */
  scope: { title: string; body: string }[];
  /** What the owner actually receives. */
  deliverables: string[];
  /** Core four pillars are featured first. */
  pillar: boolean;
};

export const services: Service[] = [
  {
    slug: "property-management",
    title: "Property Management",
    label: "Management",
    icon: "building",
    pillar: true,
    summary:
      "Day-to-day operations, tenant relations, financial reporting and vendor control, run by one accountable team.",
    intro:
      "Management is the foundation everything else stands on. We run the building as if we owned it: rent and receivables, tenant relations, staff and vendors, budgets and reporting. You get one accountable team and a clear view of how the asset is performing.",
    image: {
      src: "/images/building.webp",
      alt: "Street-level view of a managed mixed-use building",
    },
    scope: [
      {
        title: "Operations and staffing",
        body: "Daily oversight of building staff, supers and porters, with written standards for cleanliness, response times and common-area presentation.",
      },
      {
        title: "Tenant and resident relations",
        body: "A single point of contact for requests, renewals, move-ins and move-outs, with every request logged and tracked to close.",
      },
      {
        title: "Financial management",
        body: "Rent collection, arrears follow-up, payables, annual operating budgets and monthly income and expense statements you can actually read.",
      },
      {
        title: "Vendor and contract control",
        body: "Competitive bidding, contract review, insurance verification and performance checks for every vendor that touches your property.",
      },
      {
        title: "Leasing support",
        body: "Unit turnover, make-ready coordination and lease administration to keep vacancy short and paperwork clean.",
      },
      {
        title: "24/7 emergency response",
        body: "Leaks, outages and lockouts do not keep business hours. Emergencies are answered and dispatched around the clock.",
      },
    ],
    deliverables: [
      "Monthly owner report: income, expenses, arrears and open items",
      "Annual operating budget with variance tracking",
      "Logged work orders with status and close-out dates",
      "Vendor file with contracts and current certificates of insurance",
    ],
  },
  {
    slug: "inspections",
    title: "Property Inspections",
    label: "Inspection",
    icon: "clipboard",
    pillar: true,
    summary:
      "Scheduled, photo-documented inspections that find small problems before they become capital problems.",
    intro:
      "Most managers see a building when something breaks. We inspect on a schedule, document what we find with photos, and turn every finding into an assigned action. It is the difference between a $400 repair and a $40,000 one.",
    image: {
      src: "/images/projects/s18-1.webp",
      alt: "Weathered stone balusters documented during a rooftop inspection",
    },
    scope: [
      {
        title: "Routine building inspections",
        body: "Recurring walkthroughs of roofs, facades, basements, mechanical rooms, common areas and exteriors against a fixed checklist.",
      },
      {
        title: "Move-in and move-out inspections",
        body: "Timestamped condition reports for every unit turnover, protecting security deposits and settling disputes with evidence.",
      },
      {
        title: "Building systems checks",
        body: "Regular review of electrical, plumbing, heating, cooling and life-safety equipment so failures are predicted, not discovered.",
      },
      {
        title: "Seasonal readiness",
        body: "Pre-winter and pre-summer inspections covering boilers, roof drains, heat tracing, cooling plant and storm exposure.",
      },
      {
        title: "Pre-acquisition walkthroughs",
        body: "A practical condition assessment before you buy, so deferred maintenance is priced into the deal instead of found after closing.",
      },
      {
        title: "Mandated inspection coordination",
        body: "Scheduling and escorting the licensed professionals required for city-mandated inspections, and tracking their reports to filing.",
      },
    ],
    deliverables: [
      "Photo-documented inspection report after every visit",
      "Prioritized findings: urgent, planned and monitor",
      "Cost estimates for recommended repairs",
      "A running condition history for each property",
    ],
  },
  {
    slug: "engineering",
    title: "Building Engineering",
    label: "Engineering",
    icon: "gear",
    pillar: true,
    summary:
      "An in-house engineering team that diagnoses, repairs and upgrades the mechanical systems behind the walls.",
    intro:
      "Heating, cooling, water pressure and air quality are engineering problems, and most managers outsource every one of them. TCE keeps engineers on the team. We find the root cause, fix it properly and keep the plant running, instead of paying for the same service call again and again.",
    image: {
      src: "/images/projects/s29-3.webp",
      alt: "New duplex domestic water booster pumps with copper piping",
    },
    scope: [
      {
        title: "HVAC systems",
        body: "Chillers, condenser and chilled water pumps, air handlers, fan coil units and VAV boxes inspected, rebuilt or replaced as their condition requires.",
      },
      {
        title: "Building automation and controls",
        body: "Controllers, actuators and valves restored so the building management system can actually regulate temperature and airflow zone by zone.",
      },
      {
        title: "Pumps and plumbing plant",
        body: "Domestic water boosters, circulating pumps, pressure regulation and corroded piping replaced to restore pressure and reliability.",
      },
      {
        title: "Ventilation and exhaust",
        body: "Fans, motors and dampers measured against design airflow and corrected at the source instead of patched room by room.",
      },
      {
        title: "Root-cause diagnostics",
        body: "Recurring complaints are traced to the failing component with measurements, not guesses, before money is spent.",
      },
      {
        title: "Commissioning and warranty",
        body: "New equipment is aligned, calibrated, started up and documented, with manufacturer and labor warranties kept on file.",
      },
    ],
    deliverables: [
      "Equipment inventory with condition and remaining life",
      "Before and after photo records for every repair",
      "Commissioning readings and warranty documents",
      "Recommendations for efficiency and reliability upgrades",
    ],
  },
  {
    slug: "construction",
    title: "Construction & Capital Projects",
    label: "Construction",
    icon: "crane",
    pillar: true,
    summary:
      "Renovations, build-outs and capital work managed from scope to closeout, on schedule and on budget.",
    intro:
      "When a building needs real work, most managers hand you a contractor's phone number. We manage the project. Scope, bids, schedule, budget and quality stay under the same team that runs your property every day, so construction serves the asset and not the other way around.",
    image: {
      src: "/images/projects/s17-5.webp",
      alt: "Rebuilt brick parapet with restored stone coping",
    },
    scope: [
      {
        title: "Capital planning",
        body: "A multi-year plan that sequences roofs, facades, boilers, elevators and other major work by condition, urgency and cash flow.",
      },
      {
        title: "Scope and bid management",
        body: "Clear written scopes, competitive bids from vetted contractors and side-by-side bid leveling so you compare like with like.",
      },
      {
        title: "Renovations and unit upgrades",
        body: "Apartment renovations, lobby and corridor refreshes and amenity upgrades that raise rents and reduce turnover time.",
      },
      {
        title: "Commercial build-outs",
        body: "Tenant fit-outs and white-box delivery coordinated around lease dates, building rules and neighboring tenants.",
      },
      {
        title: "Building systems replacement",
        body: "Electrical upgrades, plumbing risers, heating and cooling plant and envelope repairs planned to limit disruption to occupants.",
      },
      {
        title: "Schedule, budget and quality control",
        body: "Site visits, progress reports, change-order review, punch lists and closeout documents before final payment is released.",
      },
    ],
    deliverables: [
      "Multi-year capital plan with budget ranges",
      "Leveled bid comparison for every project",
      "Progress reports with photos, schedule and spend to date",
      "Closeout package: warranties, sign-offs and as-built records",
    ],
  },
  {
    slug: "risk-mitigation",
    title: "Risk Mitigation",
    label: "Risk mitigation",
    icon: "shield",
    pillar: true,
    summary:
      "Preventive maintenance, vendor insurance tracking, safety and documentation that keep losses and liability down.",
    intro:
      "Every building carries risk: water, fire, liability, violations, a vendor without coverage. We treat risk as a line item to be managed. We identify exposures, reduce them, and keep the records that protect you when something does go wrong.",
    scope: [
      {
        title: "Preventive maintenance programs",
        body: "Scheduled servicing of the equipment that causes the most expensive failures, tracked against a calendar instead of memory.",
      },
      {
        title: "Vendor insurance tracking",
        body: "Certificates of insurance collected and verified before anyone works on site, and re-verified before they expire.",
      },
      {
        title: "Water and leak prevention",
        body: "Riser and roof-drain checks, shut-off mapping and leak response protocols, because water is the most common claim in NYC buildings.",
      },
      {
        title: "Fire and life safety",
        body: "Tracking of alarm, sprinkler, standpipe and egress requirements, with deficiencies assigned and followed to correction.",
      },
      {
        title: "Incident documentation",
        body: "Photos, timelines and written reports for every incident, giving your insurer and counsel a clean record.",
      },
      {
        title: "Emergency preparedness",
        body: "Building-specific emergency plans, contact trees and storm preparation so staff know what to do before the event.",
      },
    ],
    deliverables: [
      "Property risk assessment with a ranked action list",
      "Preventive maintenance calendar",
      "Current insurance certificate file for all vendors",
      "Incident log and documentation ready for insurers",
    ],
  },
  {
    slug: "nyc-compliance",
    title: "NYC Compliance & Violations",
    label: "Compliance",
    icon: "scale",
    pillar: false,
    summary:
      "Local Law deadlines tracked, required filings coordinated and open violations worked to closure.",
    intro:
      "New York City regulates buildings more heavily than anywhere in the country, and missed deadlines become fines. We keep a compliance calendar for each property, coordinate the licensed professionals who perform and file the work, and pursue open violations until they are cleared.",
    scope: [
      {
        title: "Local Law calendar",
        body: "Facade inspections (Local Law 11), gas piping (Local Law 152), parking structures (Local Law 126), energy benchmarking (Local Law 84) and energy audits (Local Law 87), tracked by due date.",
      },
      {
        title: "Local Law 97 planning",
        body: "Understanding where your building stands against its emissions limits and building the required upgrades into the capital plan.",
      },
      {
        title: "Violation resolution",
        body: "Review of open DOB, HPD, FDNY and ECB violations, correction of the underlying conditions and follow-through to dismissal.",
      },
      {
        title: "Annual registrations and filings",
        body: "Coordination of recurring registrations, boiler and elevator inspections and the notices owners are required to provide.",
      },
    ],
    deliverables: [
      "Compliance calendar for each property",
      "Open-violation report with status and next step",
      "Copies of filings and inspection reports on file",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance & Daily Operations",
    label: "Maintenance",
    icon: "wrench",
    pillar: false,
    summary:
      "Cleaning, repairs and preventive upkeep that keep a building presentable and working every day.",
    intro:
      "Tenants judge a building by what they see and touch every day. We keep common areas clean, respond to repairs quickly and run the preventive routines that stop small issues from reaching the engineering team at all.",
    image: {
      src: "/images/projects/s10-4.webp",
      alt: "Newly installed porcelain tile in a building corridor",
    },
    scope: [
      {
        title: "Daily cleaning and upkeep",
        body: "Lobbies, corridors, restrooms, windows and exteriors kept to a consistent standard, every day.",
      },
      {
        title: "Repairs and work orders",
        body: "Fast, tracked response to repair requests, with emergency service available around the clock.",
      },
      {
        title: "Electrical and plumbing upkeep",
        body: "Routine checks, lamp and fixture replacement, leak repair and drain maintenance handled before they disrupt occupants.",
      },
      {
        title: "Preventive routines",
        body: "Filters, belts, lubrication and seasonal changeovers done on a calendar and recorded.",
      },
    ],
    deliverables: [
      "Preventive maintenance schedule",
      "Work order history and response times",
      "Cleaning standards and inspection checklists",
    ],
  },
];

export const pillars = services.filter((s) => s.pillar);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
