import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import deliveryImage from "@/assets/delivery-truck-site.jpg";
import { materials } from "@/lib/materials";
import { QuoteButtons, QuoteCta } from "@/components/quote-cta";
import { MaterialTile } from "@/components/content-page";
import { ProcessShowcase } from "@/components/process-showcase";
import logoMark from "@/assets/rodiwala-logo-mark.png";
import { StructuredData } from "@/components/structured-data";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Construction Material Supplier in India | Rodiwala",
      description:
        "Rodiwala supplies 10 mm and 20 mm aggregate (rodi), stone dust, M-sand and ready-mix concrete to sites across India. Send your requirement for delivered pricing.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="home-hero">
        <img
          src={heroImage}
          alt="Illustrative aggregate stockpiles and concrete mixer at a material yard"
          className="home-hero-image"
        />
        <div className="home-hero-shade" />
        <img src={logoMark} alt="" className="home-brand-mark" />
        <div className="home-hero-content">
          <p className="eyebrow text-accent">
            <span className="status-dot" />
            Construction material supply across India
          </p>
          <h1>Buy construction materials for your site.</h1>
          <p>
            Rodiwala sources 10 mm and 20 mm aggregate (rodi), stone dust, M-sand and ready-mix
            concrete, then confirms the delivered quote for your quantity, site and date, wherever
            in India you are building.
          </p>
          <div className="mt-8">
            <QuoteButtons context="Homepage hero" />
          </div>
        </div>
        <div className="home-hero-facts">
          <span>
            <strong>India</strong>-wide enquiries
          </span>
          <span>
            <strong>5</strong> core materials
          </span>
          <span>
            <strong>1</strong> direct conversation
          </span>
          <span>
            <strong>0</strong> checkout guesswork
          </span>
        </div>
      </section>

      <section className="content-band" id="materials">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Material catalogue</p>
              <h2 className="section-title">Choose what your site needs.</h2>
            </div>
            <Link to="/buy-construction-material" className="text-link hidden sm:inline-flex">
              Explore the catalogue <ArrowRight size={16} />
            </Link>
          </div>
          <div className="catalogue-grid">
            {materials.map((item) => (
              <MaterialTile material={item} key={item.slug} />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Need cement, TMT steel, bricks, blocks, pavers or something else?{" "}
            <Link to="/buy-construction-material" className="font-semibold text-primary">
              Send the requirement.
            </Link>
          </p>
        </div>
      </section>

      <section className="content-band bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Find the right supplier</p>
            <h2 className="section-title">
              Construction material buying, without checkout guesswork.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              Rodiwala is sometimes written or searched as Rodi Wala or Roadi Wala. If you need to
              buy construction material, send the material, quantity, delivery location and required
              date. A person checks availability, freight and site feasibility before confirming the
              quote.
            </p>
            <Link to="/buy-construction-material" className="btn-outline mt-7">
              How to buy materials <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band bg-secondary">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">How we do it</p>
          <h2 className="section-title max-w-2xl">
            From site requirement to coordinated delivery.
          </h2>
          <ProcessShowcase />
          <div className="mt-8">
            <Link to="/how-it-works" className="btn-outline">
              See the full process <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="eyebrow">Delivery coverage</p>
            <h2 className="section-title">Your location shapes the quote.</h2>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Rodiwala takes requirements from sites across India. Feasibility depends on the
              nearest source, load, route and site access, so share the exact city, locality or pin
              code and the route gets checked for you.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {[
                "Freight basis stated clearly",
                "Vehicle access checked",
                "Timing confirmed before dispatch",
              ].map((x) => (
                <li className="flex gap-3" key={x}>
                  <Check className="shrink-0 text-primary" size={19} />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/delivery-areas" className="btn-outline mt-7">
              Check delivery factors <ArrowRight size={17} />
            </Link>
          </div>
          <div className="image-frame">
            <img
              src={deliveryImage}
              alt="Tipper truck delivering construction aggregate at a site"
              width={1200}
              height={800}
              loading="lazy"
            />
            <img src={logoMark} alt="" className="image-frame-mark" />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">The sourcing promise</p>
          <h2 className="section-title max-w-3xl">
            Tell us the material, quantity, site and required date.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Rodiwala will confirm availability, delivered pricing and delivery feasibility. Real
            delivery photos, business details and verified reviews will be added only after
            approval.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow">Practical questions</p>
          <h2 className="section-title">Good to know before you enquire.</h2>
          <div className="faq-list">
            {[
              [
                "How do I get a price?",
                "Pricing depends on the material, quantity, source, delivery distance, vehicle and date. Send your requirement for a delivered quote.",
              ],
              [
                "What is the minimum order?",
                "A minimum has not been published yet. Share your quantity and location so the team can confirm whether delivery is workable.",
              ],
              [
                "Can you help me choose a grade?",
                "We can clarify what is available, but technical suitability should be confirmed with your contractor or engineer.",
              ],
              [
                "Do you deliver anywhere in India?",
                "Enquiries are welcome from anywhere in India. No blanket promise is made. Every delivery is checked against the nearest source, exact locality, quantity and vehicle access.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            [
              "How do I get a price?",
              "Pricing depends on the material, quantity, source, delivery distance, vehicle and date. Send your requirement for a delivered quote.",
            ],
            [
              "What is the minimum order?",
              "A minimum has not been published yet. Share your quantity and location so the team can confirm whether delivery is workable.",
            ],
            [
              "Can you help me choose a grade?",
              "We can clarify what is available, but technical suitability should be confirmed with your contractor or engineer.",
            ],
            [
              "Do you deliver anywhere in India?",
              "Enquiries are welcome from anywhere in India. No blanket promise is made. Every delivery is checked against the nearest source, exact locality, quantity and vehicle access.",
            ],
          ].map(([name, text]) => ({
            "@type": "Question",
            name,
            acceptedAnswer: { "@type": "Answer", text },
          })),
        }}
      />
      <QuoteCta context="Homepage" />
    </main>
  );
}
