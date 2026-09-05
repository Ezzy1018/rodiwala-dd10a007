import { createFileRoute } from "@tanstack/react-router";
import { MaterialPage } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/cement")({
  head: () =>
    seoHead({
      title: "Cement Supplier in India | Rodiwala",
      description:
        "Cement chahiye? OPC ya PPC bags ke liye brand, grade, quantity aur site location bhejkar delivered rate poochho.",
      path: "/cement",
    }),
  component: () => <MaterialPage material={getMaterial("cement")} />,
});
