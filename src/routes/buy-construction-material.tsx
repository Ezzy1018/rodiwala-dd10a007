import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { ContentPage, MaterialTile } from "@/components/content-page";
import { StructuredData } from "@/components/structured-data";
import { materials, quoteHref } from "@/lib/materials";
import { seoHead } from "@/lib/seo";

const faqs = [
  {
    name: "Kya Rodiwala se online construction material khareed sakte hain?",
    text: "Rodiwala par fixed-price cart nahi hai, quote-led process hai. Material, quantity, delivery location aur required date WhatsApp par bhejo — team availability aur delivered rate confirm karegi.",
  },
  {
    name: "Kaunse construction materials order ho sakte hain?",
    text: "Core catalogue mein 10 mm aur 20 mm aggregate (rodi), stone dust, M-sand ya crushed sand, aur ready-mix concrete hain. Cement, TMT steel, bricks, blocks, pavers ya koi aur requirement bhi bhej sakte ho — sourcing check karke bata denge.",
  },
  {
    name: "Rodiwala kahan-kahan construction material deliver karta hai?",
    text: "Enquiry India bhar ki sites se aati hai. Feasibility exact city ya pin code, quantity, route, vehicle access aur required date par depend karti hai.",
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
        title="Construction material khareedna hai? Pehle requirement bhejo."
        intro="Rodiwala par fixed-price cart nahi hai. Material, quantity, delivery location aur date bhejo — team availability, route, freight aur site access check karke delivered quote confirm karegi."
        quoteMaterial="Buy construction material"
      >
        <section className="detail-grid">
          <div>
            <p className="eyebrow">Kya order kar sakte ho</p>
            <h2 className="section-title">Core materials, kaam ke hisaab se source hote hain.</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Jahan size, grade ya specification zaroori hai, wo zaroor bhejo. Team source
              availability, delivery distance aur site access check karke hi quote confirm karti
              hai.
            </p>
          </div>
          <div className="checklist-panel">
            <p className="eyebrow text-accent">Quote ke liye ye details bhejo</p>
            <h2>Pehla message hi poora bhejo.</h2>
            <ul>
              {[
                "Material aur size ya grade",
                "Quantity aur unit",
                "Delivery locality ya pin code",
                "Required date aur access note",
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
              <h2 className="section-title">Material chuno aur uska quote lo.</h2>
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
            <h2 className="section-title">Koi aur samaan chahiye?</h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              Cement, TMT steel, bricks, blocks, pavers, sand ya koi aur project material bhi
              maang sakte ho. Exact specification bhejo taki source aur delivery feasibility check
              ho sake.
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
              Requirement bhejo →
            </a>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-4">
          {[
            "Material batao",
            "Quantity aur site bhejo",
            "Delivered rate confirm karo",
            "Dispatch ka time fix karo",
          ].map((step, index) => (
            <article className="factor-card" key={step}>
              <span className="eyebrow text-accent">0{index + 1}</span>
              <h2>{step}</h2>
              <p>
                {
                  [
                    "Rodi, sand, dust ya RMC — jo chahiye wo batao.",
                    "Locality, pin code aur required date add karo.",
                    "Freight, timing aur feasibility clear likhkar di jaati hai.",
                    "Vehicle, site contact aur timing pehle tay hote hain.",
                  ][index]
                }
              </p>
            </article>
          ))}
        </section>

        <section className="mt-20 bg-secondary p-7 md:p-10">
          <p className="eyebrow">Seedhi baat</p>
          <h2 className="section-title">
            Site ke hisaab se quote, guesswork nahi.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Rodiwala universal price ya “har material hamesha stock mein hai” jaisa dawa nahi
            karta. Delivered quote exact requirement par banta hai. Isliye sabse tez rasta ek poora
            WhatsApp message hai, adhoora cart nahi.
          </p>
        </section>

        <section className="mt-20 max-w-3xl">
          <p className="eyebrow">Aksar poochhe jaane wale sawaal</p>
          <h2 className="section-title">Order se pehle.</h2>
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
