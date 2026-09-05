import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/ready-mix-concrete")({
  head: () =>
    seoHead({
      title: "Ready-Mix Concrete Supplier in India | Rodiwala",
      description:
        "RMC quote ke liye grade, volume, pump need, site aur pour date-time bhejo. Availability aur delivered rate check hoga.",
      path: "/ready-mix-concrete",
    }),
  component: () => <MaterialPage material={getMaterial("ready-mix-concrete")} />,
});
