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
      "10 mm coarse aggregate, jise site par 10 mm rodi bola jata hai. Chhote size ka aggregate, aam taur par concrete work aur un mixes ke liye manga jata hai jahan finer size specify hua ho.",
    applications: [
      "RCC aur concrete-related requirement",
      "Dense reinforcement wale areas",
      "Project-specific mix requirement",
    ],
    quoteNote:
      "Size aur suitability apne contractor ya engineer se confirm kar lena, phir quantity bhejo.",
  },
  {
    slug: "20-mm-rodi",
    href: "/aggregate/20-mm-rodi",
    name: "20 mm Aggregate (Rodi)",
    shortName: "20 mm Rodi",
    image: aggregate20,
    description:
      "20 mm coarse aggregate, yaani site ki bhasha mein 20 mm rodi. Concrete aur base-related kaam ke liye sabse aam taur par manga jaane wala aggregate size.",
    applications: [
      "Concrete-related requirement",
      "Base aur structural site work",
      "Bulk project supply",
    ],
    quoteNote: "Grade ya source specification jo chahiye, wahi bhejo taki quote sahi bane.",
  },
  {
    slug: "stone-dust",
    href: "/stone-dust",
    name: "Stone Dust",
    shortName: "Stone Dust",
    image: stoneDust,
    description:
      "Crushed stone se bana fine material. Filling, levelling, paver bedding aur base preparation jaise site kaam ke liye manga jata hai.",
    applications: ["Filling aur levelling", "Paver bedding", "Base preparation"],
    quoteNote:
      "Stone dust ek hi universal specification nahi hoti — jo material actually chahiye, wahi batao.",
  },
  {
    slug: "m-sand",
    href: "/m-sand",
    name: "M-Sand / Crushed Sand",
    shortName: "M-Sand",
    image: mSand,
    description:
      "Manufactured fine aggregate, jise M-sand ya crushed sand kehte hain. Masonry, concrete aur project-specific fine aggregate requirement ke liye use hoti hai.",
    applications: ["Masonry requirement", "Concrete-related work", "Fine aggregate requirement"],
    quoteNote: "Exact type aur suitability contractor ya engineer se confirm karke bhejo.",
  },
  {
    slug: "ready-mix-concrete",
    href: "/ready-mix-concrete",
    name: "Ready-Mix Concrete (RMC)",
    shortName: "RMC",
    image: rmc,
    description:
      "Ready-mix concrete, stated grade ya specification par supply hoti hai planned pour ke liye — partner availability aur site feasibility ke hisaab se.",
    applications: [
      "Planned structural pour",
      "Grade-specific requirement",
      "Time-sensitive concrete supply",
    ],
    quoteNote:
      "Grade, cubic metres, pump chahiye ya nahi, site access aur pour ka date-time bhejo.",
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
  "Namaste Rodiwala, meri site ke liye construction material chahiye. Availability aur delivered rate bata dijiye.";

export const detailedQuoteMessage =
  "Namaste Rodiwala, meri site ke liye material chahiye. Material: [naam]. Quantity: [quantity aur unit]. Location/pin code: [location]. Required date: [date]. Site access ya unloading note: [details]. Availability aur delivered rate bata dijiye.";

export function quoteHref(context?: string) {
  return whatsappUrl(context ? `${defaultQuoteMessage} (${context})` : defaultQuoteMessage);
}
