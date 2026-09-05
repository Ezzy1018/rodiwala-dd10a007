import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/m-sand")({
  head: () =>
    seoHead({
      title: "M-Sand Supplier in India | Rodiwala",
      description:
        "Request delivered pricing for M-sand or crushed sand for construction sites across India.",
      path: "/m-sand",
    }),
  component: () => <MaterialPage material={getMaterial("m-sand")} />,
});
