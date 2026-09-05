import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/aggregate/10-mm-rodi")({
  head: () =>
    seoHead({
      title: "10 mm Rodi Aggregate Supplier | Rodiwala",
      description:
        "Request delivered pricing for 10 mm rodi aggregate for construction sites across Delhi NCR and Uttar Pradesh.",
      path: "/aggregate/10-mm-rodi",
    }),
  component: () => <MaterialPage material={getMaterial("10-mm-rodi")} />,
});
