import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { ContentPage, MaterialTile } from "@/components/content-page";
import { StructuredData } from "@/components/structured-data";
import { materials, quoteHref } from "@/lib/materials";
import { seoHead } from "@/lib/seo";

const faqs = [
  {
    name: "Rodiwala se construction material online kaise mangwayein?",
    text: "Rodiwala par fixed-price cart nahi hai. Material, quantity, delivery location aur required date WhatsApp par bhejo. Team availability aur delivered rate check karke confirm karegi.",
  },
  {
    name: "Kaun-kaun se construction materials mangwa sakte hain?",
    text: "Core catalogue mein 10 mm aur 20 mm aggregate (rodi), stone dust, M-sand ya crushed sand aur RMC hai. Cement, TMT steel, bricks, blocks, pavers aur doosre materials ke liye bhi requirement bhej sakte ho.",
  },
  {
    name: "Rodiwala construction material kahan deliver karta hai?",
    text: "Rodiwala India bhar ki construction sites se enquiries leta hai. Feasibility exact city ya pin code, quantity, route, vehicle access aur required date par depend karti hai.",
  },
];

export const Route = createFileRoute("/buy-construction-material")({
  head: () =>
    seoHead({
      title: "Buy Construction Material in India | Rodiwala",
      description:
        "Buy construction material in India through Rodiwala. Rodi, stone dust, M-sand aur RMC ke liye quantity, location aur date bhejkar delivered quote lo.",
      path: "/buy-construction-material",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <ContentPage
        eyebrow="Buy construction material"
        title="Construction material khareedna hai? Pehle requirement bhejo."
        intro="Rodiwala par material, quantity, location aur date bhejo. Availability, route, freight aur site access check karke delivered quote confirm kiya jata hai."
        quoteMaterial="Buy construction material"
      >
        <section className="detail-grid">
          <div>
            <p className="eyebrow">Kya mangwa sakte ho</p>
            <h2 className="section-title">Site ke kaam ke liye material source karo.</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Jahan zaroori ho wahan size, grade ya specification bhi share karo. Team source
              availability, delivery distance aur site access check karke quote confirm karegi.
            </p>
          </div>
          <div className="checklist-panel">
            <p className="eyebrow text-accent">Ye details bhejo</p>
            <h2>First message complete bhejo.</h2>
            <ul>
              {[
                "Material aur size ya grade",
                "Quantity aur unit",
                "Delivery locality ya pin code",
                "Required date aur access notes",
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
              <h2 className="section-title">Material choose karo, quote lo.</h2>
            </div>
          </div>
          <div className="catalogue-grid">
            {materials.map((material) => (
              <MaterialTile material={material} key={material.slug} />
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 border-t border-border pt-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Core range ke alawa</p>
            <h2 className="section-title">Cement ya koi aur samaan chahiye?</h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              Cement, TMT steel, bricks, blocks, pavers ya koi aur project material bhi pooch sakte
              ho. Exact specification bhejo, source aur delivery feasibility check ho jayegi.
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
              Doosri requirement bhejo →
            </a>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-4">
          {[
            "Material choose karo",
            "Quantity aur site bhejo",
            "Delivered quote confirm karo",
            "Dispatch ka time fix karo",
          ].map((step, index) => (
            <article className="factor-card" key={step}>
              <span className="eyebrow text-accent">0{index + 1}</span>
              <h2>{step}</h2>
              <p>
                {
                  [
                    "Aggregate, sand, stone dust ya RMC se start karo.",
                    "Locality, pin code aur required date add karo.",
                    "Freight, timing aur feasibility clearly batayi jati hai.",
                    "Material move hone se pehle vehicle, site contact aur timing agree hote hain.",
                  ][index]
                }
              </p>
            </article>
          ))}
        </section>

        <section className="mt-20 bg-secondary p-7 md:p-10">
          <p className="eyebrow">Buying ka practical answer</p>
          <h2 className="section-title">Site ke hisaab se quote, fake “buy now” promise nahi.</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Rodiwala universal prices ya har material ka always-in-stock promise nahi karta.
            Delivered quote exact requirement par depend karta hai. Isliye complete WhatsApp message
            bhejna incomplete cart se zyada useful hai.
          </p>
        </section>

        <section className="mt-20 max-w-3xl">
          <p className="eyebrow">Common sawaal</p>
          <h2 className="section-title">Order se pehle ye jaan lo.</h2>
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
