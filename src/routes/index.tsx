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
            Rodi, M-sand aur RMC ke liye seedha quote
          </p>
          <h1>Construction material chahiye? Rodiwala se mangwao.</h1>
          <p>
            10 mm aur 20 mm rodi, stone dust, M-sand ya ready-mix concrete (RMC) chahiye? Apni
            quantity, site location aur required date WhatsApp par bhejo. Availability, freight aur
            delivered rate check karke bata denge — India mein kahin bhi site ho.
          </p>
          <div className="mt-8">
            <QuoteButtons context="Homepage hero" />
          </div>
        </div>
        <div className="home-hero-facts">
          <span>
            <strong>India</strong> bhar se enquiry
          </span>
          <span>
            <strong>5</strong> core material
          </span>
          <span>
            <strong>1</strong> seedhi baat
          </span>
          <span>
            <strong>0</strong> guesswork
          </span>
        </div>
      </section>

      <section className="content-band" id="materials">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Material catalogue</p>
              <h2 className="section-title">Site ke liye kaunsa material chahiye?</h2>
            </div>
            <Link to="/buy-construction-material" className="text-link hidden sm:inline-flex">
              Poora catalogue dekho <ArrowRight size={16} />
            </Link>
          </div>
          <div className="catalogue-grid">
            {materials.map((item) => (
              <MaterialTile material={item} key={item.slug} />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Cement, TMT steel, bricks, blocks, pavers ya koi aur samaan chahiye?{" "}
            <Link to="/buy-construction-material" className="font-semibold text-primary">
              Requirement bhejo.
            </Link>
          </p>
        </div>
      </section>

      <section className="content-band bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Sahi supplier dhoondh rahe ho?</p>
            <h2 className="section-title">
              Construction material khareedna hai? Pehle requirement bhejo.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              Rodiwala ko log Rodi Wala ya Roadi Wala bhi likhte hain. Construction material
              khareedna ho to material, quantity, delivery location aur required date bhej do.
              Availability, freight aur site feasibility ek insaan check karta hai, tabhi quote
              confirm hota hai.
            </p>
            <Link to="/buy-construction-material" className="btn-outline mt-7">
              Material kaise mangwayein <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band bg-secondary">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Kaam kaise hota hai</p>
          <h2 className="section-title max-w-2xl">
            From site requirement to coordinated delivery.
          </h2>
          <ProcessShowcase />
          <div className="mt-8">
            <Link to="/how-it-works" className="btn-outline">
              Poora process dekho <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="eyebrow">Delivery coverage</p>
            <h2 className="section-title">Aapki site tak delivery possible hai? Location bhejo.</h2>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Rodiwala India bhar ki sites se requirement leta hai. Feasibility nearest source,
              load, route aur site access par depend karti hai — isliye exact city, locality ya pin
              code bhejo, route check karke bata denge.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {[
                "Freight ka basis clear bataya jata hai",
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
              Delivery factors dekho <ArrowRight size={17} />
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
          <p className="eyebrow">Hamara tarika</p>
          <h2 className="section-title max-w-3xl">
            Material, quantity, site aur date bhejo — baaki hum check karenge.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Availability, delivered rate aur delivery feasibility confirm karke batayi jaati hai.
            Asli delivery photos, business details aur verified reviews approval ke baad hi add
            honge.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow">Aksar poochhe jaane wale sawaal</p>
          <h2 className="section-title">Enquiry se pehle ye jaan lo.</h2>
          <div className="faq-list">
            {[
              [
                "Rate kaise milega?",
                "Rate material, quantity, source, delivery distance, vehicle aur date par depend karta hai. Requirement bhejo, delivered quote bata denge.",
              ],
              [
                "Minimum order kitna hai?",
                "Abhi koi minimum publish nahi kiya gaya hai. Quantity aur location bhejo, team check karke batayegi ki delivery workable hai ya nahi.",
              ],
              [
                "Grade choose karne mein help milegi?",
                "Kya available hai wo bata sakte hain, lekin technical suitability apne contractor ya engineer se confirm karo.",
              ],
              [
                "Kya India mein kahin bhi delivery hoti hai?",
                "Enquiry India mein kahin se bhi kar sakte ho. Blanket promise nahi karte — har delivery nearest source, exact locality, quantity aur vehicle access ke hisaab se check hoti hai.",
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
              "Rate material, quantity, source, delivery distance, vehicle aur date par depend karta hai. Requirement bhejo, delivered quote bata denge.",
            ],
            [
              "Minimum order kitna hai?",
              "Abhi koi minimum publish nahi kiya gaya hai. Quantity aur location bhejo, team check karke batayegi ki delivery workable hai ya nahi.",
            ],
            [
              "Grade choose karne mein help milegi?",
              "Kya available hai wo bata sakte hain, lekin technical suitability apne contractor ya engineer se confirm karo.",
            ],
            [
              "Kya India mein kahin bhi delivery hoti hai?",
              "Enquiry India mein kahin se bhi kar sakte ho. Blanket promise nahi karte — har delivery nearest source, exact locality, quantity aur vehicle access ke hisaab se check hoti hai.",
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
