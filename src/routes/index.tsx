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
        "Construction material chahiye? Rodiwala se 10 mm aur 20 mm rodi, stone dust, M-sand ya RMC ke liye delivered rate poochho. Site details WhatsApp par bhejo.",
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
            Construction material, direct quote
          </p>
          <h1>Construction material chahiye? Rodiwala se mangwao.</h1>
          <p>
            Material, quantity, location aur date WhatsApp karo. Availability aur delivered rate
            check karke batayenge.
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
            <strong>6</strong> core materials
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
              <h2 className="section-title">Aapko kya chahiye?</h2>
            </div>
            <Link to="/buy-construction-material" className="text-link hidden sm:inline-flex">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="catalogue-grid">
            {materials.map((item) => (
              <MaterialTile material={item} key={item.slug} />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            TMT steel, bricks, blocks, pavers ya koi aur samaan chahiye?{" "}
            <Link to="/buy-construction-material" className="font-semibold text-primary">
               Ask us.
            </Link>
          </p>
        </div>
      </section>

      <section className="content-band bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Sahi supplier dhoondo</p>
            <h2 className="section-title">Site-specific quote. No guesswork.</h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              Material, quantity, location aur date bhejo. Hum availability, freight aur site
              feasibility check karke quote confirm karenge.
            </p>
            <Link to="/buy-construction-material" className="btn-outline mt-7">
              Browse materials <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band bg-secondary">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Kaise kaam hota hai</p>
          <h2 className="section-title max-w-2xl">Message se delivery tak.</h2>
          <ProcessShowcase />
          <div className="mt-8">
            <Link to="/how-it-works" className="btn-outline">
              See process <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="eyebrow">Delivery check</p>
            <h2 className="section-title">Location bhejo. Route check karo.</h2>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              India bhar se enquiries welcome hain. Exact city ya pin code bhejo; source, freight
              aur site access check kar denge.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {[
                "Freight basis clearly bataya jata hai",
                "Vehicle access check hota hai",
                "Dispatch se pehle timing confirm hoti hai",
              ].map((x) => (
                <li className="flex gap-3" key={x}>
                  <Check className="shrink-0 text-primary" size={19} />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/delivery-areas" className="btn-outline mt-7">
              Check delivery <ArrowRight size={17} />
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
          <p className="eyebrow">Rodiwala ka promise</p>
          <h2 className="section-title max-w-3xl">
             Clear details. Clear quote.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Material, quantity, location aur date bhejo. Hum availability, delivered rate aur
            delivery feasibility check karenge.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow">Practical questions</p>
          <h2 className="section-title">Quick answers.</h2>
          <div className="faq-list">
            {[
              [
                "Rate kaise milega?",
                "Rate material, quantity, source, delivery distance, vehicle aur date par depend karta hai. Requirement bhejo, delivered quote mil jayega.",
              ],
              [
                "Minimum order kitna hai?",
                "Minimum abhi publish nahi kiya gaya hai. Quantity aur location bhejo, team check karke batayegi ki delivery workable hai ya nahi.",
              ],
              [
                "Grade choose karne mein help milegi?",
                "Available options clarify kar sakte hain, lekin technical suitability apne contractor ya engineer se confirm karni chahiye.",
              ],
              [
                "Kya India mein kahin bhi delivery hoti hai?",
                "India bhar se enquiries welcome hain, lekin blanket promise nahi hai. Har delivery nearest source, exact locality, quantity aur vehicle access ke hisaab se check hoti hai.",
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
              "Rate kaise milega?",
              "Rate material, quantity, source, delivery distance, vehicle aur date par depend karta hai. Requirement bhejo, delivered quote mil jayega.",
            ],
            [
              "Minimum order kitna hai?",
              "Minimum abhi publish nahi kiya gaya hai. Quantity aur location bhejo, team check karke batayegi ki delivery workable hai ya nahi.",
            ],
            [
              "Grade choose karne mein help milegi?",
              "Available options clarify kar sakte hain, lekin technical suitability apne contractor ya engineer se confirm karni chahiye.",
            ],
            [
              "Kya India mein kahin bhi delivery hoti hai?",
              "India bhar se enquiries welcome hain, lekin blanket promise nahi hai. Har delivery nearest source, exact locality, quantity aur vehicle access ke hisaab se check hoti hai.",
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
