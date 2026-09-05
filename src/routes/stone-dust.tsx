import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/stone-dust")({
  head: () =>
    seoHead({
      title: "Stone Dust Supplier in Delhi NCR | Rodiwala",
      description:
        "Request delivered pricing for stone dust for filling, levelling, paver bedding and site work.",
      path: "/stone-dust",
    }),
  component: () => <MaterialPage material={getMaterial("stone-dust")} />,
});
