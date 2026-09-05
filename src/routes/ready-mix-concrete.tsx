import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/ready-mix-concrete")({
  head: () =>
    seoHead({
      title: "Ready-Mix Concrete Supplier in Delhi NCR | Rodiwala",
      description:
        "Request an RMC quote with grade, volume, pump need, site and pour date across Delhi NCR and Uttar Pradesh.",
      path: "/ready-mix-concrete",
    }),
  component: () => <MaterialPage material={getMaterial("ready-mix-concrete")} />,
});
