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
        "Requirement bhejo, availability aur delivered rate check hota hai, phir dispatch ka time fix. Rodiwala ka poora quote process, India bhar ki sites ke liye.",
      path: "/how-it-works",
    }),
  component: Page,
});
function Page() {
  return (
    <ContentPage
      eyebrow="How it works"
      title="Requirement bhejo, hum rate aur delivery check karenge."
      intro="Process aisa rakha hai ki baar-baar sawaal na poochhne padein aur dispatch se pehle delivery ki har baat clear ho jaye."
      quoteMaterial="Other material"
      image={deliveryImage}
    >
      <ProcessShowcase />
      <section className="result-panel">
        <div>
          <p className="eyebrow text-accent">Aapko kya milta hai</p>
          <h2>Quote jo aapki site ke hisaab se bana ho.</h2>
        </div>
        <div className="result-list">
          <span>Material aur specification ka basis</span>
          <span>Delivered ya ex-yard rate ka basis</span>
          <span>Freight clear</span>
          <span>Expected delivery timing</span>
        </div>
      </section>
      <p className="mt-8 text-center text-muted-foreground">
        Aapki requirement seedhe ek insaan tak jaati hai — na account, na cart, na automated checkout.
      </p>
    </ContentPage>
  );
}
