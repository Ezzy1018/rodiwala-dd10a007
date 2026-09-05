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
      title="10 mm ya 20 mm rodi? Jo specification hai, wahi bhejo."
      intro="10 mm aur 20 mm alag requirement hain. Dono ka farak dekho, phir selected size, quantity, location aur date bhej do."
      image={getMaterial("20-mm-rodi").image}
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="section-title">Core aggregate sizes</h2>
        <p className="mt-3 text-muted-foreground">
          Jo size contractor ya engineer ne bataya hai wahi chuno, phir requirement bhejo.
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
          <h2 className="section-title">Do size, alag-alag site requirement.</h2>
          <p>
            Rodiwala aapka manga hua size note karta hai, structural mix decide nahi karta.
            Suitability apne contractor ya engineer se confirm karo.
          </p>
        </div>
        <div className="comparison-table">
          <div>
            <strong>10 mm Rodi</strong>
            <span>Chhota coarse aggregate</span>
            <span>Dense reinforcement wale areas</span>
            <span>Project-specific mixes</span>
          </div>
          <div>
            <strong>20 mm Rodi</strong>
            <span>Sabse aam coarse aggregate</span>
            <span>Concrete-related work</span>
            <span>Base aur structural site work</span>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
