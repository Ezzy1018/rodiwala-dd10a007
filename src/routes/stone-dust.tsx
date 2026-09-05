import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/stone-dust")({
  head: () =>
    seoHead({
      title: "Stone Dust Supplier in India | Rodiwala",
      description:
        "Stone dust chahiye? Filling, levelling, paver bedding ya site work ke liye quantity aur location bhejkar delivered rate poochho.",
      path: "/stone-dust",
    }),
  component: () => <MaterialPage material={getMaterial("stone-dust")} />,
});
