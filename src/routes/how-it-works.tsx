import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { ProcessShowcase } from "@/components/process-showcase";
import deliveryImage from "@/assets/delivery-yard.jpg";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/how-it-works")({
  head: () =>
    seoHead({
      title: "How Construction Material Quotes Work in India | Rodiwala",
      description:
        "Construction material quote kaise milega? Requirement, availability, delivered rate aur delivery ka process Rodiwala ke saath dekho.",
      path: "/how-it-works",
    }),
  component: Page,
});
function Page() {
  return (
    <ContentPage
      eyebrow="Kaise hota hai"
      title="Requirement bhejo, hum rate aur delivery check karenge."
      intro="Material, quantity, site aur date ek message mein bhejo. Dispatch se pehle availability, freight aur access clear kar diya jata hai."
      quoteMaterial="Other material"
      image={deliveryImage}
    >
      <ProcessShowcase />
      <section className="result-panel">
        <div>
          <p className="eyebrow text-accent">Aapko kya milega</p>
          <h2>Site ke hisaab se quote milta hai.</h2>
        </div>
        <div className="result-list">
          <span>Material aur specification basis</span>
          <span>Delivered ya ex-yard price basis</span>
          <span>Freight clearly stated</span>
          <span>Expected delivery timing</span>
        </div>
      </section>
      <p className="mt-8 text-center text-muted-foreground">
        Aapki requirement seedha ek person tak jati hai. Account, cart ya automated checkout ki
        zaroorat nahi hai.
      </p>
    </ContentPage>
  );
}
