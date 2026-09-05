import aggregate10 from "@/assets/aggregate-10mm.jpg";
import aggregate20 from "@/assets/aggregate-20mm.jpg";
import stoneDust from "@/assets/stone-dust.jpg";
import mSand from "@/assets/m-sand.jpg";
import rmc from "@/assets/rmc.jpg";

export type Material = {
  slug: string;
  href:
    | "/aggregate/10-mm-rodi"
    | "/aggregate/20-mm-rodi"
    | "/stone-dust"
    | "/m-sand"
    | "/ready-mix-concrete";
  name: string;
  shortName: string;
  image: string;
  description: string;
  applications: string[];
  quoteNote: string;
};

export const materials: Material[] = [
  {
    slug: "10-mm-rodi",
    href: "/aggregate/10-mm-rodi",
    name: "10 mm Aggregate (Rodi)",
    shortName: "10 mm Rodi",
    image: aggregate10,
    description:
      "10 mm aggregate, yaani 10 mm rodi, jo concrete-related work aur specified finer mixes ke liye commonly mangayi jati hai.",
    applications: [
      "RCC aur concrete-related requirements",
      "Dense reinforcement areas",
      "Project-specific mix requirements",
    ],
    quoteNote: "Required size aur suitability apne contractor ya engineer se confirm kar lo.",
  },
  {
    slug: "20-mm-rodi",
    href: "/aggregate/20-mm-rodi",
    name: "20 mm Aggregate (Rodi)",
    shortName: "20 mm Rodi",
    image: aggregate20,
    description:
      "20 mm aggregate, yaani 20 mm rodi, jo concrete aur base-related construction work ke liye commonly mangayi jati hai.",
    applications: [
      "Concrete-related requirements",
      "Base aur structural site work",
      "Bulk project supply",
    ],
    quoteNote: "Quote se pehle required grade ya source specification share kar do.",
  },
  {
    slug: "stone-dust",
    href: "/stone-dust",
    name: "Stone Dust",
    shortName: "Stone Dust",
    image: stoneDust,
    description:
      "Stone dust ek fine crushed-stone material hai, jo filling, levelling, paver bedding aur doosre site work ke liye mangayi jati hai.",
    applications: ["Filling aur levelling", "Paver bedding", "Relevant base preparation"],
    quoteNote:
      "Stone dust ki ek hi universal specification nahi hoti. Actual material requirement confirm kar lo.",
  },
  {
    slug: "m-sand",
    href: "/m-sand",
    name: "M-Sand / Crushed Sand",
    shortName: "M-Sand",
    image: mSand,
    description:
      "M-sand ya crushed sand masonry, concrete aur project-specific fine aggregate requirements ke liye mangayi jati hai.",
    applications: ["Masonry requirements", "Concrete-related work", "Fine aggregate requirements"],
    quoteNote: "Exact type aur suitability apne contractor ya engineer se confirm kar lo.",
  },
  {
    slug: "ready-mix-concrete",
    href: "/ready-mix-concrete",
    name: "Ready-Mix Concrete (RMC)",
    shortName: "RMC",
    image: rmc,
    description:
      "RMC planned pour ke liye stated grade ya specification ke hisaab se supply hota hai, partner availability aur site feasibility ke subject to.",
    applications: [
      "Planned structural pours",
      "Grade-specific requirements",
      "Time-sensitive concrete supply",
    ],
    quoteNote: "Grade, cubic metres, pump need, site access aur pour date-time share kar do.",
  },
];

export function getMaterial(slug: string) {
  const material = materials.find((item) => item.slug === slug);
  if (!material) throw new Error(`Unknown material: ${slug}`);
  return material;
}

export const phoneHref = "+919416165465";

export function whatsappUrl(message: string) {
  return `https://wa.me/919416165465?text=${encodeURIComponent(message)}`;
}

export const defaultQuoteMessage =
  "Namaste Rodiwala, meri site ke liye construction material chahiye. Material, quantity, location aur required date share kar raha hoon. Availability aur delivered rate bata dijiye.";

export function quoteHref(context?: string) {
  return whatsappUrl(context ? `${defaultQuoteMessage} (${context})` : defaultQuoteMessage);
}
