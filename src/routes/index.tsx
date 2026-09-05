import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import deliveryImage from "@/assets/delivery-yard.jpg";
import { materials, phoneDisplay, phoneHref } from "@/lib/materials";
import { QuoteBuilder } from "@/components/quote-builder";

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
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-10 md:grid-cols-2 md:py-14 lg:px-8">
          <div>
            <p className="eyebrow"><span className="status-dot"/>Delhi NCR & Uttar Pradesh</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl font-bold leading-[1.02] text-foreground sm:text-6xl">Core construction materials, delivered for your site.</h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">10 mm & 20 mm aggregate, stone dust, M-sand and ready-mix concrete. Share your quantity, site and required date. We’ll confirm availability and delivered pricing.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link to="/request-quote" className="btn-primary"><MessageCircle size={18}/>Get quote on WhatsApp</Link><a href={`tel:${phoneHref}`} className="btn-outline"><Phone size={18}/>Call {phoneDisplay}</a></div>
            <p className="mt-4 text-sm text-muted-foreground">No account. No checkout. A clear requirement sent directly to a person.</p>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-border bg-card"><img src={heroImage} alt="Illustrative view of aggregate stockpiles and a concrete mixer" width={1200} height={900} className="aspect-[4/3] w-full object-cover"/><figcaption className="px-4 py-2 text-xs text-muted-foreground">Illustrative material-yard image. Supply details are confirmed with each quote.</figcaption></figure>
        </div>
      </section>

      <section className="border-t border-border bg-background py-14" id="materials"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="section-heading"><div><p className="eyebrow">Five core materials</p><h2 className="section-title">Start with what your site needs.</h2></div><Link to="/materials" className="text-link hidden sm:inline-flex">View all materials <ArrowRight size={16}/></Link></div><div className="material-grid">{materials.map((item) => <article className="material-card" key={item.slug}><img src={item.image} alt={`Illustrative ${item.name} material texture`} width={600} height={512} loading="lazy"/><div className="p-4"><h3>{item.shortName}</h3><p>{item.description}</p><Link to={item.slug === "10-mm-rodi" || item.slug === "20-mm-rodi" ? `/aggregate/${item.slug}` : `/${item.slug}`} className="text-link mt-4">View material <ArrowRight size={15}/></Link></div></article>)}</div><p className="mt-5 text-sm text-muted-foreground">Need cement, TMT steel, bricks, blocks, pavers or something else? <Link to="/materials" className="font-semibold text-primary">Send the requirement.</Link></p></div></section>

      <section className="bg-primary py-14" id="quote"><div className="mx-auto max-w-7xl px-5 lg:px-8"><QuoteBuilder/></div></section>

      <section className="border-t border-border bg-background py-14"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">How your quote is confirmed</p><h2 className="section-title">Four clear steps. No invented promises.</h2><div className="process-grid">{[["01","Share the requirement","Material, size, quantity, location and date."],["02","Availability check","We check the source and delivery feasibility."],["03","Delivered quote","You receive the price basis and timing in writing."],["04","Coordinate delivery","Vehicle, site contact and timing are confirmed before dispatch."]].map(([n,t,d]) => <article className="process-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="border-t border-border bg-background py-14"><div className="mx-auto grid max-w-7xl items-center gap-9 px-5 md:grid-cols-2 lg:px-8"><div><p className="eyebrow">Delivery coverage</p><h2 className="section-title">Delhi NCR and Uttar Pradesh</h2><p className="mt-4 max-w-lg text-lg text-muted-foreground">Delivery depends on location, quantity, vehicle access and material availability. Share your locality or pin code and we’ll check feasibility before quoting.</p><ul className="mt-6 space-y-3 text-sm text-foreground">{["No false same-day promise","Freight included or excluded clearly","Site access checked before dispatch"].map((x)=><li className="flex gap-3" key={x}><Check className="shrink-0 text-primary" size={19}/>{x}</li>)}</ul><Link to="/delivery-areas" className="btn-outline mt-7">Check delivery area <ArrowRight size={17}/></Link></div><img src={deliveryImage} alt="Illustrative aerial view of a construction material dispatch yard" width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full rounded-3xl object-cover"/></div></section>

      <section className="bg-secondary py-14"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">The sourcing promise</p><h2 className="section-title max-w-3xl">Tell us the material, quantity, site and required date.</h2><p className="mt-4 max-w-3xl text-lg text-muted-foreground">Rodiwala will confirm availability, delivered pricing and delivery feasibility. Real delivery photos, business details and verified reviews will be added only after approval.</p></div></section>

      <section id="faq" className="bg-background py-14"><div className="mx-auto max-w-3xl px-5"><p className="eyebrow">Practical questions</p><h2 className="section-title">Good to know before you enquire.</h2><div className="faq-list">{[["How do I get a price?","Pricing depends on the material, quantity, source, delivery distance, vehicle and date. Send your requirement for a delivered quote."],["What is the minimum order?","A minimum has not been published yet. Share your quantity and location so the team can confirm whether delivery is workable."],["Can you help me choose a grade?","We can clarify what is available, but technical suitability should be confirmed with your contractor or engineer."],["Do you deliver everywhere in UP?","No blanket promise is made. Delivery is checked against the exact locality, quantity and vehicle access."]].map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="bg-accent py-16 text-center"><div className="mx-auto max-w-3xl px-5"><h2 className="font-display text-4xl font-bold text-accent-foreground">Have a site requirement?</h2><p className="mx-auto mt-3 max-w-xl text-accent-foreground/80">Build one useful message and send it directly to Rodiwala.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/request-quote" className="btn-primary">Start a quote <ArrowRight size={18}/></Link><a href={`tel:${phoneHref}`} className="btn-outline border-primary/30">Call {phoneDisplay}</a></div></div></section>
    </main>
  );
}
