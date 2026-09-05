import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/m-sand")({
  head: () =>
    seoHead({
      title: "M-Sand Supplier in India | Rodiwala",
      description:
        "M-sand ya crushed sand chahiye? Quantity, location aur date bhejkar construction site ke liye delivered rate poochho.",
      path: "/m-sand",
    }),
  component: () => <MaterialPage material={getMaterial("m-sand")} />,
});
