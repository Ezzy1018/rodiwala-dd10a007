import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import deliveryImage from "@/assets/delivery-yard.jpg";
import { materials, phoneDisplay, phoneHref } from "@/lib/materials";
import { QuoteBuilder } from "@/components/quote-builder";
import { MaterialTile } from "@/components/content-page";
import { ProcessShowcase } from "@/components/process-showcase";
import logoMark from "@/assets/rodiwala-logo-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Construction Materials Delhi NCR & UP | Rodiwala" },
    { name: "description", content: "Request delivered pricing for 10 mm and 20 mm aggregate, stone dust, M-sand and RMC from Rodiwala." },
    { property: "og:title", content: "Construction Materials Delhi NCR & UP | Rodiwala" },
    { property: "og:description", content: "Share your material, quantity, site and date. Rodiwala confirms availability and delivered pricing." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="home-hero">
        <img src={heroImage} alt="Illustrative aggregate stockpiles and concrete mixer at a material yard" className="home-hero-image"/>
        <div className="home-hero-shade"/><img src={logoMark} alt="" className="home-brand-mark"/>
        <div className="home-hero-content"><p className="eyebrow text-accent"><span className="status-dot"/>Delhi NCR & Uttar Pradesh</p><h1>Construction materials for a stronger tomorrow.</h1><p>10 mm & 20 mm aggregate, stone dust, M-sand and ready-mix concrete—quoted for your quantity, site and required date.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/request-quote" className="btn-accent"><MessageCircle size={18}/>Get a quote</Link><a href={`tel:${phoneHref}`} className="btn-ghost-light"><Phone size={18}/>Call {phoneDisplay}</a></div></div>
        <div className="home-hero-facts"><span><strong>5</strong> core materials</span><span><strong>1</strong> direct conversation</span><span><strong>0</strong> checkout guesswork</span></div>
      </section>

      <section className="content-band" id="materials"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="section-heading"><div><p className="eyebrow">Material catalogue</p><h2 className="section-title">Choose what your site needs.</h2></div><Link to="/materials" className="text-link hidden sm:inline-flex">Explore the catalogue <ArrowRight size={16}/></Link></div><div className="catalogue-grid">{materials.map((item) => <MaterialTile material={item} key={item.slug}/>)}</div><p className="mt-6 text-sm text-muted-foreground">Need cement, TMT steel, bricks, blocks, pavers or something else? <Link to="/materials" className="font-semibold text-primary">Send the requirement.</Link></p></div></section>

      <section className="bg-primary py-14" id="quote"><div className="mx-auto max-w-7xl px-5 lg:px-8"><QuoteBuilder/></div></section>

      <section className="content-band bg-secondary"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">How we do it</p><h2 className="section-title max-w-2xl">From site requirement to coordinated delivery.</h2><ProcessShowcase/><div className="mt-8"><Link to="/how-it-works" className="btn-outline">See the full process <ArrowRight size={17}/></Link></div></div></section>

      <section className="content-band"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[.85fr_1.15fr] lg:px-8"><div><p className="eyebrow">Delivery coverage</p><h2 className="section-title">Your location shapes the quote.</h2><p className="mt-4 max-w-lg text-lg text-muted-foreground">Across Delhi NCR and Uttar Pradesh, feasibility depends on source, load, route and site access. Share the exact locality or pin code before planning delivery.</p><ul className="mt-6 space-y-3 text-sm text-foreground">{["Freight basis stated clearly","Vehicle access checked","Timing confirmed before dispatch"].map((x)=><li className="flex gap-3" key={x}><Check className="shrink-0 text-primary" size={19}/>{x}</li>)}</ul><Link to="/delivery-areas" className="btn-outline mt-7">Check delivery factors <ArrowRight size={17}/></Link></div><div className="image-frame"><img src={deliveryImage} alt="Illustrative aerial view of a construction material dispatch yard" width={1200} height={800} loading="lazy"/><img src={logoMark} alt="" className="image-frame-mark"/></div></div></section>

      <section className="bg-secondary py-14"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">The sourcing promise</p><h2 className="section-title max-w-3xl">Tell us the material, quantity, site and required date.</h2><p className="mt-4 max-w-3xl text-lg text-muted-foreground">Rodiwala will confirm availability, delivered pricing and delivery feasibility. Real delivery photos, business details and verified reviews will be added only after approval.</p></div></section>

      <section id="faq" className="bg-background py-14"><div className="mx-auto max-w-3xl px-5"><p className="eyebrow">Practical questions</p><h2 className="section-title">Good to know before you enquire.</h2><div className="faq-list">{[["How do I get a price?","Pricing depends on the material, quantity, source, delivery distance, vehicle and date. Send your requirement for a delivered quote."],["What is the minimum order?","A minimum has not been published yet. Share your quantity and location so the team can confirm whether delivery is workable."],["Can you help me choose a grade?","We can clarify what is available, but technical suitability should be confirmed with your contractor or engineer."],["Do you deliver everywhere in UP?","No blanket promise is made. Delivery is checked against the exact locality, quantity and vehicle access."]].map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="bg-accent py-16 text-center"><div className="mx-auto max-w-3xl px-5"><h2 className="font-display text-4xl font-bold text-accent-foreground">Have a site requirement?</h2><p className="mx-auto mt-3 max-w-xl text-accent-foreground/80">Build one useful message and send it directly to Rodiwala.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/request-quote" className="btn-primary">Start a quote <ArrowRight size={18}/></Link><a href={`tel:${phoneHref}`} className="btn-outline border-primary/30">Call {phoneDisplay}</a></div></div></section>
    </main>
  );
}
