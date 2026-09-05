import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { HardHat, House, Ruler, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About Rodiwala Construction Material Supply",
      description:
        "Rodiwala helps contractors, builders, site engineers and homeowners across India source construction materials and coordinate delivery.",
      path: "/about",
    }),
  component: Page,
});
function Page() {
  const audiences = [
    {
      Icon: HardHat,
      title: "Contractors",
      text: "Bulk or recurring requirements with delivery coordination.",
    },
    {
      Icon: Ruler,
      title: "Site engineers",
      text: "Specification-led enquiries with clear material and access details.",
    },
    {
      Icon: House,
      title: "Homeowners",
      text: "Straightforward help turning a site requirement into a quote request.",
    },
  ];
  return (
    <ContentPage
      eyebrow="About Rodiwala"
      title="Built around a clearer material enquiry."
      intro="Rodiwala helps contractors, site engineers, builders and homeowners across India source construction materials and coordinate delivery."
      image={heroImage}
    >
      <section className="about-intro">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">Materials, pricing and delivery—confirmed for the job.</h2>
        </div>
        <p>
          We receive the requirement, confirm material and delivery feasibility, provide a quote and
          coordinate fulfilment. We do not publish fixed prices that can quickly become inaccurate.
        </p>
      </section>
      <div className="factor-grid mt-14">
        {audiences.map(({ Icon, title, text }) => (
          <article className="factor-card" key={title}>
            <Icon />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <section className="trust-strip">
        <ShieldCheck />
        <div>
          <h2>Clarity before claims</h2>
          <p>
            Enquiries are welcome from anywhere in India, and each one is checked honestly. No
            blanket stock, quality or timing promise is made. Business details and verified proof
            appear only after approval.
          </p>
        </div>
      </section>
    </ContentPage>
  );
}
