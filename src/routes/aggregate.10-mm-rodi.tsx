import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/aggregate/10-mm-rodi")({
  head: () =>
    seoHead({
      title: "10 mm Aggregate (Rodi) Supplier in India | Rodiwala",
      description:
        "10 mm aggregate ya 10 mm rodi chahiye? Quantity, location aur date bhejkar construction site ke liye delivered rate poochho.",
      path: "/aggregate/10-mm-rodi",
    }),
  component: () => <MaterialPage material={getMaterial("10-mm-rodi")} />,
});
