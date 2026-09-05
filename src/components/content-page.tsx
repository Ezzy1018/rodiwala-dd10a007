import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { QuoteButtons, QuoteCta } from "./quote-cta";
import { materials, quoteHref, type Material } from "@/lib/materials";
import logoMark from "@/assets/rodiwala-logo-mark.png";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import { MaterialStructuredData } from "@/components/structured-data";

export function ContentPage({
  eyebrow,
  title,
  intro,
  children,
  quoteMaterial,
  image = heroImage,
  imageAlt = `${title} — construction material for sites`,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  quoteMaterial?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <main>
      <section className="page-hero">
        <img src={image} alt={imageAlt} className="page-hero-image" />
        <div className="page-hero-shade" />
        <img src={logoMark} alt="" className="brand-watermark" />
        <div className="page-hero-content">
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="mt-7">
            <QuoteButtons context={title} />
          </div>
        </div>
      </section>
      <section className="content-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
      </section>
      <QuoteCta context={quoteMaterial ?? title} />
    </main>
  );
}

export function MaterialPage({ material }: { material: Material }) {
  const related = materials.filter((item) => item.slug !== material.slug).slice(0, 3);
  return (
    <>
      <ContentPage
        eyebrow="Site material"
        title={material.name}
        intro={material.description}
        quoteMaterial={material.name}
        image={material.image}
        imageAlt={`${material.name} construction material`}
      >
        <div className="detail-grid">
          <section>
            <p className="eyebrow">Kahan use hota hai</p>
            <h2 className="section-title">Ye material aam taur par kahan use hota hai</h2>
            <div className="mt-7 grid gap-3">
              {material.applications.map((item, index) => (
                <div className="numbered-row" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="checklist-panel">
            <p className="eyebrow text-accent">Quote checklist</p>
            <h2>Quote ke liye ye details bhejo</h2>
            <ul>
              {[
                "Quantity aur unit",
                "Delivery locality ya pin code",
                "Required delivery date",
                "Vehicle access aur unloading note",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="spec-note">
              <strong>Order se pehle</strong>
              <p>{material.quoteNote}</p>
            </div>
          </section>
        </div>
        <section className="mt-20">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Aur dekho</p>
              <h2 className="section-title">Site ke doosre materials</h2>
            </div>
            <Link to="/buy-construction-material" className="text-link">
              Poora catalogue dekho <ArrowRight size={16} />
            </Link>
          </div>
          <div className="catalogue-grid catalogue-grid-compact">
            {related.map((item) => (
              <MaterialTile key={item.slug} material={item} />
            ))}
          </div>
        </section>
      </ContentPage>
      <MaterialStructuredData
        name={material.name}
        description={material.description}
        path={material.href}
      />
    </>
  );
}

export function CardLink({ to, title, text }: { to: string; title: string; text: string }) {
  return (
    <Link
      to={to}
      className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
    >
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      <span className="text-link mt-5">
        Page kholo <ArrowRight size={15} />
      </span>
    </Link>
  );
}

export function MaterialTile({ material }: { material: Material }) {
  return (
    <article className="catalogue-tile">
      <img
        src={material.image}
        alt={`${material.name} — illustrative image`}
        width={800}
        height={680}
        loading="lazy"
      />
      <div className="catalogue-shade" />
      <div className="catalogue-copy">
        <p>Site material</p>
        <h3>{material.shortName}</h3>
        <span>{material.description}</span>
      </div>
      <div className="catalogue-actions">
        <a
          href={quoteHref(material.name)}
          target="_blank"
          rel="noreferrer"
          className="catalogue-action"
          aria-label={`${material.name} ka quote WhatsApp par lo`}
        >
          Iska quote lo <ArrowRight size={17} />
        </a>
        <Link to={material.href} className="catalogue-link">
          Details dekho
        </Link>
      </div>
    </article>
  );
}
