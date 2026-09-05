import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContentPage, MaterialTile } from "@/components/content-page";
import { StructuredData } from "@/components/structured-data";
import { materials } from "@/lib/materials";
import { seoHead } from "@/lib/seo";

const faqs = [
  {
    name: "Can I buy construction material online from Rodiwala?",
    text: "Rodiwala uses a quote-led buying process rather than a fixed-price cart. Send the material, quantity, delivery location and required date on WhatsApp, and the team will confirm availability and delivered pricing.",
  },
  {
    name: "What construction materials can I order?",
    text: "The core catalogue includes 10 mm and 20 mm aggregate (rodi), stone dust, M-sand or crushed sand, and ready-mix concrete. Cement, TMT steel, bricks, blocks, pavers and other requirements can also be requested for sourcing confirmation.",
  },
  {
    name: "Where does Rodiwala deliver construction material?",
    text: "Rodiwala accepts enquiries from construction sites across India. Feasibility depends on the exact city or pin code, quantity, route, vehicle access and required date.",
  },
];

export const Route = createFileRoute("/buy-construction-material")({
  head: () =>
    seoHead({
      title: "Buy Construction Material in India | Rodiwala",
      description:
        "Buy or source aggregate, stone dust, M-sand, RMC and other construction materials across India. Send Rodiwala your requirement for a delivered quote.",
      path: "/buy-construction-material",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <ContentPage
        eyebrow="Buy construction material"
        title="Buy the material your site actually needs."
        intro="Rodiwala helps contractors, builders, site engineers and homeowners across India source construction materials through a clear, quote-led process."
        quoteMaterial="Buy construction material"
      >
        <section className="detail-grid">
          <div>
            <p className="eyebrow">What you can order</p>
            <h2 className="section-title">Core materials, sourced for the job.</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Share the size, grade or specification where it matters. The team checks the
              requirement against source availability, delivery distance and site access before
              confirming a quote.
            </p>
          </div>
          <div className="checklist-panel">
            <p className="eyebrow text-accent">Send these details</p>
            <h2>Make the first message useful.</h2>
            <ul>
              {[
                "Material and size or grade",
                "Quantity and unit",
                "Delivery locality or pin code",
                "Required date and access notes",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Construction material catalogue</p>
              <h2 className="section-title">Choose a material to get a quote.</h2>
            </div>
            <Link to="/materials" className="text-link">
              View all materials <ArrowRight size={16} />
            </Link>
          </div>
          <div className="catalogue-grid">
            {materials.map((material) => (
              <MaterialTile material={material} key={material.slug} />
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-4">
          {[
            "Choose the material",
            "Share quantity and site",
            "Confirm the delivered quote",
            "Schedule the dispatch",
          ].map((step, index) => (
            <article className="factor-card" key={step}>
              <span className="eyebrow text-accent">0{index + 1}</span>
              <h2>{step}</h2>
              <p>
                {
                  [
                    "Start with aggregate, sand, dust or RMC.",
                    "Add the locality, pin code and required date.",
                    "Freight, timing and feasibility are stated clearly.",
                    "Vehicle, site contact and timing are agreed before movement.",
                  ][index]
                }
              </p>
            </article>
          ))}
        </section>

        <section className="mt-20 bg-secondary p-7 md:p-10">
          <p className="eyebrow">A practical buying answer</p>
          <h2 className="section-title">
            Construction material buying without a fake “buy now” promise.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Rodiwala does not show universal prices or claim that every material is always in stock.
            A delivered quote depends on the exact requirement. That is why the fastest route is a
            complete WhatsApp message, not an incomplete cart.
          </p>
        </section>

        <section className="mt-20 max-w-3xl">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="section-title">Before you order.</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.name}>
                <summary>{faq.name}</summary>
                <p>{faq.text}</p>
              </details>
            ))}
          </div>
        </section>
      </ContentPage>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.name,
            acceptedAnswer: { "@type": "Answer", text: faq.text },
          })),
        }}
      />
    </>
  );
}
