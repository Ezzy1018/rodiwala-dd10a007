import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/aggregate/20-mm-rodi")({
  head: () =>
    seoHead({
      title: "20 mm Rodi Aggregate Supplier | Rodiwala",
      description:
        "Request delivered pricing for 20 mm rodi aggregate for construction sites across Delhi NCR and Uttar Pradesh.",
      path: "/aggregate/20-mm-rodi",
    }),
  component: () => <MaterialPage material={getMaterial("20-mm-rodi")} />,
});
