import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/aggregate/20-mm-rodi")({
  head: () =>
    seoHead({
      title: "20 mm Aggregate (Rodi) Supplier in India | Rodiwala",
      description:
        "20 mm aggregate ya 20 mm rodi chahiye? Quantity, location aur date bhejkar construction site ke liye delivered rate poochho.",
      path: "/aggregate/20-mm-rodi",
    }),
  component: () => <MaterialPage material={getMaterial("20-mm-rodi")} />,
});
