import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, MaterialTile } from "@/components/content-page";
import { getMaterial } from "@/lib/materials";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/aggregate/")({
  head: () =>
    seoHead({
      title: "10 mm & 20 mm Rodi Aggregate | Rodiwala",
      description:
        "10 mm aur 20 mm rodi aggregate compare karo. Apni construction site ke liye quantity, location aur date bhejkar delivered rate poochho.",
      path: "/aggregate",
    }),
  component: Page,
});
function Page() {
  const aggregate = [getMaterial("10-mm-rodi"), getMaterial("20-mm-rodi")];
  return (
    <ContentPage
      eyebrow="Aggregate guide"
      title="10 mm ya 20 mm rodi? Jo specification hai, wahi bhejo."
      intro="10 mm aur 20 mm alag requirements hain. Common uses compare karo, phir selected size, quantity, location aur date share karo."
      image={getMaterial("20-mm-rodi").image}
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="section-title">Core aggregate sizes</h2>
        <p className="mt-3 text-muted-foreground">
          Contractor ya engineer ne jo size specify kiya hai, wahi choose karke requirement bhejo.
        </p>
      </div>
      <div className="catalogue-grid catalogue-grid-pair">
        {aggregate.map((item) => (
          <MaterialTile material={item} key={item.slug} />
        ))}
      </div>
      <section className="comparison-section">
        <div>
          <p className="eyebrow">Quick comparison</p>
          <h2 className="section-title">Do sizes, alag site requirements.</h2>
          <p>
            Rodiwala requested size note karta hai, structural mix prescribe nahi karta. Suitability
            apne contractor ya engineer se confirm kar lo.
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
