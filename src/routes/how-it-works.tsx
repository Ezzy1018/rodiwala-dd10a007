import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { ProcessShowcase } from "@/components/process-showcase";
import deliveryImage from "@/assets/delivery-yard.jpg";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/how-it-works")({
  head: () =>
    seoHead({
      title: "How to Buy Construction Material | Rodiwala",
      description:
        "See how Rodiwala confirms construction material requirements, availability, delivered pricing and dispatch timing.",
      path: "/how-it-works",
    }),
  component: Page,
});
function Page() {
  return (
    <ContentPage
      eyebrow="How it works"
      title="A useful quote starts with a complete requirement."
      intro="The process is designed to reduce repeated questions and make delivery assumptions clear before dispatch."
      quoteMaterial="Other material"
      image={deliveryImage}
    >
      <ProcessShowcase />
      <section className="result-panel">
        <div>
          <p className="eyebrow text-accent">What you receive</p>
          <h2>A quote built around the actual site.</h2>
        </div>
        <div className="result-list">
          <span>Material and specification basis</span>
          <span>Delivered or ex-yard price basis</span>
          <span>Freight clarity</span>
          <span>Expected delivery timing</span>
        </div>
      </section>
      <p className="mt-8 text-center text-muted-foreground">
        Your requirement goes directly to a person—there is no account, cart or automated checkout.
      </p>
    </ContentPage>
  );
}
