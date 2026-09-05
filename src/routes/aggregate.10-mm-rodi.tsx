import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/aggregate/10-mm-rodi")({
  head: () =>
    seoHead({
      title: "10 mm Aggregate (Rodi) Supplier in India | Rodiwala",
      description:
        "Request delivered pricing for 10 mm aggregate (rodi) for construction sites across India.",
      path: "/aggregate/10-mm-rodi",
    }),
  component: () => <MaterialPage material={getMaterial("10-mm-rodi")} />,
});
