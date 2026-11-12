export type Stage = "Before" | "During" | "After";

export type ProjectPhoto = {
  /** File name inside /public/images/projects, without extension. */
  id: string;
  stage: Stage;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  work: string[];
  result: string;
  photos: ProjectPhoto[];
};

export type ProjectCategory = {
  id: string;
  title: string;
  intro: string;
  projects: Project[];
};

const photo = (id: string, stage: Stage, caption: string): ProjectPhoto => ({ id, stage, caption });

/**
 * Work completed during a 24-month building upgrade program at a
 * New York City government facility. The client and location are
 * intentionally not named.
 */
export const program = {
  client: "A New York City government facility",
  stats: [
    { value: "24", label: "Month program" },
    { value: "150+", label: "Work orders completed" },
    { value: "12", label: "Major work areas" },
    { value: "100%", label: "Managed by TCE" },
  ],
};

export const categories: ProjectCategory[] = [
  {
    id: "facade",
    title: "Façade & exterior restoration",
    intro:
      "Masonry, stone and exterior metalwork restored to bring an aging building envelope into Local Law 11 (FISP) compliance and keep water out.",
    projects: [
      {
        slug: "brick-replacement",
        title: "Brick parapet replacement",
        summary:
          "Cracked, spalled and deteriorated brick was removed and rebuilt, matched to the original size, color and bond.",
        work: [
          "Failed brick removed to sound substrate",
          "Scratch coat, anchors and air and water barrier",
          "Matching replacement brick laid to the original bond",
        ],
        result: "A sound, watertight brick parapet.",
        photos: [
          photo("s17-1", "Before", "Deteriorated brick"),
          photo("s17-2", "During", "Failed brick removed"),
          photo("s17-3", "During", "Scratch coat and anchors"),
          photo("s17-4", "During", "Air and water barrier"),
          photo("s17-5", "After", "New brick parapet"),
        ],
      },
      {
        slug: "stone-restoration",
        title: "Stone balustrade and cornice restoration",
        summary:
          "Failing balusters, cornice and ornamental stone were rebuilt and recoated to match the original detail.",
        work: [
          "Cracked and failing stone replaced",
          "Ornamental profiles rebuilt and recoated",
          "Blended to the surrounding masonry",
        ],
        result: "Restored, durable stonework with its historic appearance intact.",
        photos: [
          photo("s18-1", "Before", "Weathered, soiled stone"),
          photo("s18-2", "During", "Cornice recoated"),
          photo("s18-3", "During", "Profiling and detailing"),
          photo("s18-4", "After", "Restored stonework"),
        ],
      },
      {
        slug: "terracotta-limestone",
        title: "Terracotta and limestone patching",
        summary:
          "Cracked and spalled terracotta and limestone elements were patched, cleaned and given a protective coating.",
        work: [
          "Cracks and spalls patched",
          "Lost profiles and detail rebuilt",
          "Cleaned, primed, painted and sealed",
        ],
        result: "Protected ornamental stone with a color-matched finish.",
        photos: [
          photo("s20-1", "Before", "Weathered, soiled balustrade"),
          photo("s20-2", "After", "Patched, cleaned and restored"),
          photo("s20-3", "Before", "Damaged base parging"),
          photo("s20-4", "After", "Patched and smoothed parging"),
        ],
      },
      {
        slug: "window-surrounds",
        title: "Window surrounds and spandrel panels",
        summary:
          "All window frames, surrounds and decorative spandrel panels were scraped, sanded, primed and repainted.",
        work: [
          "Scraped and sanded to a sound surface",
          "Bare areas spot-primed",
          "Protective finish coats applied",
        ],
        result: "A uniform, weather-resistant finish across the elevation.",
        photos: [
          photo("s19-1", "Before", "Peeling, weathered finish"),
          photo("s19-2", "During", "Scraped and sanded"),
          photo("s19-3", "During", "Primed"),
          photo("s19-4", "After", "Painted and sealed"),
        ],
      },
      {
        slug: "repointing",
        title: "Masonry repointing",
        summary:
          "Cracked and open mortar joints were cut out and repointed with matching mortar, tooled to the original profile.",
        work: [
          "Failed joints cut out",
          "Repointed with matching mortar",
          "Continuous weather seal restored",
        ],
        result: "Sealed, weather-tight joints.",
        photos: [
          photo("s21-1", "Before", "Cracked, open joints"),
          photo("s21-2", "After", "Repointed and weather-sealed"),
        ],
      },
      {
        slug: "retaining-wall",
        title: "Retaining wall restoration",
        summary:
          "A cracked retaining wall was repaired, repointed and resurfaced to stabilize it against water infiltration.",
        work: [
          "Cracks and failed joints repaired",
          "Masonry repointed and sealed",
          "Surface restored and cleaned",
        ],
        result: "A stable, weather-tight wall.",
        photos: [
          photo("s22-1", "Before", "Cracked, failing wall"),
          photo("s22-2", "During", "Crack and joint repair"),
          photo("s22-3", "After", "Restored and repointed"),
          photo("s22-4", "After", "Sound, weather-tight wall"),
        ],
      },
    ],
  },
  {
    id: "engineering",
    title: "Mechanical & engineering",
    intro:
      "Aging mechanical infrastructure overhauled by TCE's in-house engineering team: pumps, valves, controls and cooling.",
    projects: [
      {
        slug: "domestic-water-pumps",
        title: "Domestic water booster pumps",
        summary:
          "Occupants reported low water pressure. The original pumps and supply piping were badly corroded and restricting flow, so a new high-efficiency duplex booster system was installed.",
        work: [
          "New duplex booster pump set",
          "Corroded piping and valves replaced",
          "Variable-speed pressure controls with automatic lead and standby rotation",
        ],
        result: "Full water pressure restored across the building.",
        photos: [
          photo("s29-1", "Before", "Original booster pumps"),
          photo("s29-2", "Before", "Corroded pipe restricting flow"),
          photo("s29-3", "After", "New high-efficiency pumps"),
          photo("s29-4", "After", "Variable-speed pressure controls"),
        ],
      },
      {
        slug: "condenser-water-pumps",
        title: "Condenser water pump rebuild",
        summary:
          "Both 50 HP condenser water pumps had failing bearings, leaking seals and unbalanced impellers, causing vibration, noise and unreliable cooling.",
        work: [
          "New front and rear bearings",
          "New balanced mechanical seals",
          "Computer-balanced impellers, recoupled and recommissioned",
        ],
        result: "Quiet, efficient cooling restored, with a two-year warranty.",
        photos: [
          photo("s30-1", "Before", "Worn pump with leaking seals"),
          photo("s30-2", "Before", "Both units before rebuild"),
          photo("s30-3", "After", "Rebuilt condenser pumps"),
          photo("s30-4", "After", "Recoupled and recommissioned"),
        ],
      },
      {
        slug: "chiller-pump",
        title: "Chiller pump replacement",
        summary:
          "The chiller pump had failed. Its cast-iron volute, flanges and internals were heavily corroded, putting the building's cooling at risk.",
        work: [
          "Failed pump removed",
          "New volute, impeller, shaft and seals",
          "New motor wired, aligned and recommissioned",
        ],
        result: "Reliable cooling restored and the failure risk eliminated.",
        photos: [
          photo("s31-1", "Before", "Corroded volute and flange"),
          photo("s31-2", "Before", "Failed pump removed"),
          photo("s31-3", "After", "New pump and motor installed"),
          photo("s31-4", "After", "New volute, impeller and seals"),
        ],
      },
      {
        slug: "circulating-pumps",
        title: "Hot water circulating pumps",
        summary:
          "Worn hot-water circulating pumps were replaced and the loop was given clear pressure monitoring.",
        work: [
          "New circulating pumps, motors and couplings",
          "New system pressure gauges",
          "Valved, wired and commissioned",
        ],
        result: "Steady circulation with clear pressure monitoring.",
        photos: [
          photo("s32-1", "Before", "Old valve and meter assembly"),
          photo("s32-2", "Before", "Worn flanged connections"),
          photo("s32-3", "After", "New circulating pump at the riser"),
          photo("s32-4", "After", "New overhead circulating pump"),
        ],
      },
      {
        slug: "vav-controllers",
        title: "VAV box controller replacement",
        summary:
          "Variable air volume boxes regulate airflow to each zone and degrade over time. Affected controllers were tested and replaced as part of the HVAC maintenance program.",
        work: [
          "Controllers inspected and tested",
          "Degraded units replaced with current-generation controllers",
          "Powered, addressed and commissioned",
        ],
        result: "Reliable zone airflow and temperature control.",
        photos: [
          photo("s26-1", "Before", "Original controller"),
          photo("s26-2", "Before", "Aged controller and wiring"),
          photo("s26-3", "After", "New controller installed"),
          photo("s26-4", "After", "Powered and commissioned"),
        ],
      },
      {
        slug: "fan-coil-valves",
        title: "Fan coil regulating valves",
        summary:
          "Regulating valves had seized open or closed, so the building management system could no longer control temperature. More than 60 were replaced with new modulating valves.",
        work: [
          "Seized valves removed",
          "New modulating zone valves and piping",
          "Automatic control restored zone by zone",
        ],
        result: "Building management system temperature control restored.",
        photos: [
          photo("s25-1", "Before", "Seized valve removed"),
          photo("s25-2", "Before", "Old valve, stuck in position"),
          photo("s25-3", "After", "New modulating valve installed"),
          photo("s25-4", "After", "New regulating valve and piping"),
        ],
      },
      {
        slug: "damper-actuators",
        title: "Mixed-air damper actuators",
        summary:
          "Damper actuators control the blend of outside and return air and wear out over time. Eight worn units were replaced by the in-house engineering team.",
        work: [
          "Worn actuators and linkages removed",
          "New actuators installed",
          "Re-linked and stroked through full range",
        ],
        result: "Accurate mixed-air control restored.",
        photos: [
          photo("s24-1", "Before", "Worn damper actuator"),
          photo("s24-2", "Before", "Aged actuator and linkage"),
          photo("s24-3", "After", "New actuator"),
          photo("s24-4", "After", "New actuator installed"),
        ],
      },
      {
        slug: "exhaust-motors",
        title: "Rooftop exhaust motors",
        summary:
          "Aging rooftop exhaust motors had lost speed and efficiency. Rather than adding fans to every bathroom, the three rooftop motors were replaced to fix the root cause.",
        work: [
          "Fan speed measured to confirm the fault",
          "Three rooftop motors replaced with inverter-duty units",
          "Full fan speed and airflow restored",
        ],
        result: "Proper exhaust restored for every bathroom served.",
        photos: [
          photo("s28-1", "Before", "Old, inefficient exhaust motor"),
          photo("s28-2", "Before", "Low fan speed measured"),
          photo("s28-3", "After", "New inverter-duty motor"),
          photo("s28-4", "After", "New motor installed"),
        ],
      },
      {
        slug: "split-systems",
        title: "Supplemental cooling",
        summary:
          "Ductless split systems were installed across equipment rooms and occupied spaces that needed dedicated cooling.",
        work: [
          "Indoor units installed in multiple zones",
          "Rooftop condensers set and piped",
          "Targeted cooling for equipment spaces",
        ],
        result: "Reliable cooling in the spaces that need it most.",
        photos: [
          photo("s27-2", "During", "Rooftop condenser units set"),
          photo("s27-3", "After", "New split system installed"),
          photo("s27-4", "After", "Finished indoor unit"),
        ],
      },
      {
        slug: "steam-regulator",
        title: "Steam pressure regulating valve",
        summary:
          "A new pressure-regulating valve was installed on a heat exchanger as a direct replacement, then calibrated and commissioned.",
        work: [
          "Direct-replacement regulator and pilot valve",
          "Calibrated, started up and commissioned",
          "Two-year parts and labor warranty",
        ],
        result: "Reliable temperature and pressure regulation.",
        photos: [
          photo("s33-1", "After", "New regulator installed"),
          photo("s33-2", "After", "Pilot valve and sensing line"),
        ],
      },
    ],
  },
  {
    id: "interiors",
    title: "Interior renovation",
    intro:
      "Lobbies, corridors, bathrooms and workspaces rebuilt with durable finishes while the building stayed in operation.",
    projects: [
      {
        slug: "lobby-corridor",
        title: "Lobby and corridor renovation",
        summary:
          "The main lobby and corridor were restored with new stone-tile flooring, custom craftsman-style wood wainscoting and millwork, and decorative lighting.",
        work: [
          "New stone-tile flooring",
          "Craftsman wood wainscoting and millwork",
          "Decorative ceiling and cove lighting",
        ],
        result: "A warm, dignified heart of the building.",
        photos: [
          photo("s05-1", "After", "Stone floor and custom millwork"),
          photo("s05-2", "After", "Arched millwork portal"),
        ],
      },
      {
        slug: "corridor-flooring",
        title: "Corridor flooring replacement",
        summary:
          "Worn vinyl tile in high-traffic corridors was stripped to the slab and replaced with porcelain tile, installed in phases.",
        work: [
          "Existing flooring stripped to the concrete slab",
          "Phased installation to keep corridors usable",
          "Durable porcelain tile throughout",
        ],
        result: "Durable, easy-to-maintain flooring in high-traffic areas.",
        photos: [
          photo("s10-1", "Before", "Worn vinyl tile"),
          photo("s10-2", "During", "Stripped to the concrete slab"),
          photo("s10-3", "During", "New tile being installed"),
          photo("s10-4", "After", "New porcelain tile"),
        ],
      },
      {
        slug: "bathrooms",
        title: "Bathroom renovations",
        summary:
          "Ten bathrooms were demolished to the substrate and rebuilt with new backer board, tile, fixtures, tubs, plumbing rough-ins and lighting.",
        work: [
          "Each bathroom demolished to substrate",
          "New backer board, tile and fixtures",
          "New tubs, access panels, plumbing and lighting",
        ],
        result: "Ten fully rebuilt bathrooms.",
        photos: [
          photo("s11-1", "Before", "Dated tile and fixtures"),
          photo("s11-2", "Before", "Worn finishes and old plumbing"),
          photo("s11-3", "After", "New tile, fixtures and lighting"),
          photo("s11-4", "After", "Renovated tub, sink and finishes"),
        ],
      },
      {
        slug: "conference-ceiling",
        title: "Conference room ceiling replacement",
        summary:
          "An aging wood-veneer ceiling had cracked and begun detaching, creating a falling-object hazard. It was removed and rebuilt as a secure suspended acoustic ceiling.",
        work: [
          "Failing wood-veneer panels removed",
          "New suspended acoustic tile system",
          "Lighting and air diffusers reintegrated",
        ],
        result: "An overhead hazard eliminated.",
        photos: [
          photo("s12-1", "Before", "Cracked, separating panels"),
          photo("s12-2", "Before", "Panels detaching from the grid"),
          photo("s12-3", "After", "New acoustic tile ceiling"),
          photo("s12-4", "After", "Completed, secured installation"),
        ],
      },
      {
        slug: "locker-room",
        title: "Staff locker room conversion",
        summary:
          "A former workstation area was converted into a ground-floor staff locker room, with new flooring and lighting and lockers reused from an upper floor.",
        work: [
          "Workstation area cleared and converted",
          "New flooring and overhead lighting",
          "Existing lockers relocated and reused",
        ],
        result: "Accessible, ground-floor staff lockers.",
        photos: [
          photo("s13-1", "Before", "Former workstation area"),
          photo("s13-2", "During", "New flooring and lighting"),
          photo("s13-3", "After", "Relocated staff lockers"),
          photo("s13-4", "After", "Reused locker units"),
        ],
      },
      {
        slug: "workspace",
        title: "Office workspace renovation",
        summary:
          "An open office area was fully renovated: existing workstations, flooring and ceiling were removed, followed by a refinished ceiling, new flooring and new lighting.",
        work: [
          "Workstations, flooring and ceiling demolished",
          "Ceiling refinished with new lighting",
          "New resilient flooring installed",
        ],
        result: "A modernized workspace ready for new furniture.",
        photos: [
          photo("s14-1", "Before", "Old flooring and exposed cabling"),
          photo("s14-2", "Before", "Cleared workspace before demolition"),
          photo("s14-3", "During", "Flooring removed to the subfloor"),
          photo("s14-4", "After", "New flooring installed"),
        ],
      },
      {
        slug: "supply-rooms",
        title: "Supply room rebuild",
        summary:
          "Three overflowing supply rooms were gutted and rebuilt with new floors, lighting, electrical and steel shelving.",
        work: [
          "New flooring in all three rooms",
          "New lighting and electrical",
          "Steel shelving, sorted and labeled stock",
        ],
        result: "Clean, organized storage.",
        photos: [
          photo("s34-1", "Before", "Overflowing and disorganized"),
          photo("s34-4", "After", "Clean, organized supply room"),
        ],
      },
    ],
  },
];

export const allProjects = categories.flatMap((c) => c.projects);

export const photoSrc = (id: string) => `/images/projects/${id}.webp`;

/** Before/after pairs featured on the home page. */
export const featured = [
  {
    title: "Brick parapet replacement",
    category: "Façade",
    before: "s17-1",
    after: "s17-5",
  },
  {
    title: "Domestic water booster pumps",
    category: "Engineering",
    before: "s29-1",
    after: "s29-3",
  },
  {
    title: "Bathroom renovations",
    category: "Interiors",
    before: "s11-1",
    after: "s11-3",
  },
];
