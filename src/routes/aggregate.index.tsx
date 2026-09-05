import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, MaterialTile } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/aggregate/")({
  head: () =>
    seoHead({
      title: "10 mm & 20 mm Rodi Aggregate | Rodiwala",
      description:
        "Compare 10 mm and 20 mm rodi aggregate requirements and request delivered pricing for your construction site.",
      path: "/aggregate",
    }),
  component: Page,
});
function Page() {
  const aggregate = [getMaterial("10-mm-rodi"), getMaterial("20-mm-rodi")];
  return (
    <ContentPage
      eyebrow="Aggregate guide"
      title="Choose the aggregate size specified for your work."
      intro="10 mm and 20 mm are distinct requirements. Compare common requests, then send the selected size, quantity, location and date."
      image={getMaterial("20-mm-rodi").image}
    >
      <div className="catalogue-grid catalogue-grid-pair">
        {aggregate.map((item) => (
          <MaterialTile material={item} key={item.slug} />
        ))}
      </div>
      <section className="comparison-section">
        <div>
          <p className="eyebrow">Quick comparison</p>
          <h2 className="section-title">Two sizes. Different site requirements.</h2>
          <p>
            Rodiwala captures the requested size but does not prescribe structural mixes. Confirm
            suitability with your contractor or engineer.
          </p>
        </div>
        <div className="comparison-table">
          <div>
            <strong>10 mm Rodi</strong>
            <span>Smaller coarse aggregate</span>
            <span>Dense reinforcement areas</span>
            <span>Project-specific mixes</span>
          </div>
          <div>
            <strong>20 mm Rodi</strong>
            <span>Common coarse aggregate</span>
            <span>Concrete-related work</span>
            <span>Base and structural site work</span>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
