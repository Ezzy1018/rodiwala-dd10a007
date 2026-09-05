import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, MaterialTile } from "@/components/content-page";
import { getMaterial, materials, quoteHref } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/materials")({
  head: () =>
    seoHead({
      title: "Construction Materials Supplier | Rodiwala",
      description:
        "Browse aggregate, stone dust, M-sand, RMC and other construction materials available for sourcing across Delhi NCR and Uttar Pradesh.",
      path: "/materials",
    }),
  component: Page,
});
function Page() {
  return (
    <ContentPage
      eyebrow="Material catalogue"
      title="The right material starts with the right requirement."
      intro="Browse the five core materials, compare their common applications and send the exact quantity, site and date for delivered pricing."
      image={getMaterial("20-mm-rodi").image}
    >
      <div className="catalogue-grid">
        {materials.map((m) => (
          <MaterialTile material={m} key={m.slug} />
        ))}
      </div>
      <section className="mt-20 grid gap-8 border-t border-border pt-12 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Beyond the core range</p>
          <h2 className="section-title">Need something else?</h2>
        </div>
        <div>
          <p className="text-lg text-muted-foreground">
            Cement, TMT steel, bricks, blocks, pavers, sand and other project materials can be
            requested. Share the exact specification so source and delivery feasibility can be
            checked.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Cement", "TMT steel", "Bricks & blocks", "Pavers", "Other sand"].map((x) => (
              <span className="request-chip" key={x}>
                {x}
              </span>
            ))}
          </div>
          <a
            href={quoteHref("Other materials")}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8"
          >
            Send another requirement →
          </a>
        </div>
      </section>
    </ContentPage>
  );
}
