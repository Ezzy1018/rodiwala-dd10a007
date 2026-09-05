import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { QuoteButtons, QuoteCta } from "./quote-cta";
import { materials, quoteHref, type Material } from "@/lib/materials";
import logoMark from "@/assets/rodiwala-logo-mark.png";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";

export function ContentPage({ eyebrow, title, intro, children, quoteMaterial, image = heroImage }: { eyebrow: string; title: string; intro: string; children: React.ReactNode; quoteMaterial?: string; image?: string }) {
  return <main><section className="page-hero"><img src={image} alt="" className="page-hero-image"/><div className="page-hero-shade"/><img src={logoMark} alt="" className="brand-watermark"/><div className="page-hero-content"><p className="eyebrow text-accent">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><div className="mt-7"><QuoteButtons context={title}/></div></div></section><section className="content-band"><div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div></section><QuoteCta context={quoteMaterial ?? title}/></main>;
}

export function MaterialPage({ material }: { material: Material }) {
  const related = materials.filter((item) => item.slug !== material.slug).slice(0, 3);
  return <ContentPage eyebrow="Core material" title={material.name} intro={material.description} quoteMaterial={material.name} image={material.image}><div className="detail-grid"><section><p className="eyebrow">Common requirements</p><h2 className="section-title">Where this material is requested</h2><div className="mt-7 grid gap-3">{material.applications.map((item, index)=><div className="numbered-row" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></section><section className="checklist-panel"><p className="eyebrow text-accent">Quote checklist</p><h2>Have these details ready</h2><ul>{["Quantity and preferred unit","Delivery locality or pin code","Required delivery date","Vehicle access and unloading notes"].map((item)=><li key={item}><CheckCircle2 size={20}/>{item}</li>)}</ul><div className="spec-note"><strong>Before ordering</strong><p>{material.quoteNote}</p></div></section></div><section className="mt-20"><div className="section-heading"><div><p className="eyebrow">Continue browsing</p><h2 className="section-title">Related site materials</h2></div><Link to="/materials" className="text-link">Full catalogue <ArrowRight size={16}/></Link></div><div className="catalogue-grid catalogue-grid-compact">{related.map((item)=><MaterialTile key={item.slug} material={item}/>)}</div></section></ContentPage>;
}

export function CardLink({ to, title, text }: { to: string; title: string; text: string }) { return <Link to={to} className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p><span className="text-link mt-5">Open page <ArrowRight size={15}/></span></Link>; }

export function MaterialTile({ material }: { material: Material }) {
  return <article className="catalogue-tile"><img src={material.image} alt={`Illustrative ${material.name}`} width={800} height={680} loading="lazy"/><div className="catalogue-shade"/><div className="catalogue-copy"><p>Core material</p><h3>{material.shortName}</h3><span>{material.description}</span></div><div className="catalogue-actions"><a href={quoteHref(material.name)} target="_blank" rel="noreferrer" className="catalogue-action" aria-label={`Get a quote for ${material.name} on WhatsApp`}>Get a quote <ArrowRight size={17}/></a><Link to={material.href} className="catalogue-link">Details</Link></div></article>;
}
