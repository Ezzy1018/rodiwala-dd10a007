import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/m-sand")({
  head: () =>
    seoHead({
      title: "M-Sand Supplier in Delhi NCR | Rodiwala",
      description:
        "Request delivered pricing for M-sand or crushed sand for construction sites across Delhi NCR and Uttar Pradesh.",
      path: "/m-sand",
    }),
  component: () => <MaterialPage material={getMaterial("m-sand")} />,
});
