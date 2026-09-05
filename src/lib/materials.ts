import aggregate10 from "@/assets/aggregate-10mm.jpg";
import aggregate20 from "@/assets/aggregate-20mm.jpg";
import stoneDust from "@/assets/stone-dust.jpg";
import mSand from "@/assets/m-sand.jpg";
import rmc from "@/assets/rmc.jpg";

export type Material = {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  description: string;
  applications: string[];
  quoteNote: string;
};

export const materials: Material[] = [
  { slug: "10-mm-rodi", name: "10 mm Aggregate (Rodi)", shortName: "10 mm Rodi", image: aggregate10, description: "A smaller coarse aggregate commonly requested for concrete-related work and mixes where a finer aggregate size is specified.", applications: ["RCC and concrete-related requirements", "Dense reinforcement areas", "Project-specific mix requirements"], quoteNote: "Confirm the required size and suitability with your contractor or engineer." },
  { slug: "20-mm-rodi", name: "20 mm Aggregate (Rodi)", shortName: "20 mm Rodi", image: aggregate20, description: "A commonly requested coarse aggregate for concrete and base-related construction requirements.", applications: ["Concrete-related requirements", "Base and structural site work", "Bulk project supply"], quoteNote: "Share the required grade or source specification before quoting." },
  { slug: "stone-dust", name: "Stone Dust", shortName: "Stone Dust", image: stoneDust, description: "Fine crushed-stone material requested for filling, levelling, paver bedding and other site work.", applications: ["Filling and levelling", "Paver bedding", "Relevant base preparation"], quoteNote: "Stone dust is not one universal specification; confirm the actual material required." },
  { slug: "m-sand", name: "M-Sand / Crushed Sand", shortName: "M-Sand", image: mSand, description: "Manufactured fine aggregate requested for masonry, concrete and other project-specific applications.", applications: ["Masonry requirements", "Concrete-related work", "Fine aggregate requirements"], quoteNote: "Confirm the exact type and suitability with your contractor or engineer." },
  { slug: "ready-mix-concrete", name: "Ready-Mix Concrete (RMC)", shortName: "RMC", image: rmc, description: "Concrete supplied to a stated grade or specification for a planned pour, subject to partner availability and site feasibility.", applications: ["Planned structural pours", "Grade-specific requirements", "Time-sensitive concrete supply"], quoteNote: "Share grade, cubic metres, pump need, site access, and pour date and time." },
];

export const phoneDisplay = "9416165465";
export const phoneHref = "+919416165465";

export function whatsappUrl(message: string) {
  return `https://wa.me/919416165465?text=${encodeURIComponent(message)}`;
}
