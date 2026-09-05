import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { CheckCircle2, MapPin, Route as RouteIcon, Truck } from "lucide-react";
import deliveryImage from "@/assets/delivery-yard.jpg";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/delivery-areas")({
  head: () =>
    seoHead({
      title: "Construction Material Delivery Across India | Rodiwala",
      description:
        "Construction material delivery possible hai ya nahi check karna hai? City, locality ya pin code bhejo, Rodiwala route aur freight check karega.",
      path: "/delivery-areas",
    }),
  component: Page,
});
function Page() {
  const factors = [
    {
      Icon: MapPin,
      title: "Exact location",
      text: "City, locality ya pin code share karo, taaki route aur source distance review ho sake.",
    },
    {
      Icon: Truck,
      title: "Load aur vehicle",
      text: "Material type, quantity aur unit se practical vehicle option decide hota hai.",
    },
    {
      Icon: RouteIcon,
      title: "Site access",
      text: "Road width, entry restrictions aur unloading notes share karne se failed dispatch avoid hota hai.",
    },
  ];
  return (
    <ContentPage
      eyebrow="Delivery check"
      title="Aapki site tak delivery possible hai? Location bhejo."
      intro="Rodiwala India bhar ki sites se construction material enquiries leta hai. Har delivery nearest source, actual load, route aur site access ke hisaab se check hoti hai."
      quoteMaterial="Other material"
      image={deliveryImage}
    >
      <div className="factor-grid">
        {factors.map(({ Icon, title, text }) => (
          <article className="factor-card" key={title}>
            <Icon />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <section className="mt-20">
        <p className="eyebrow">Enquiry coverage</p>
        <h2 className="section-title">India bhar ki sites, ek simple conversation.</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Metro, tier-2 city, industrial belt ya semi-urban site kahin se bhi requirement bhejo.
          Building kahan ho rahi hai batao, nearest workable source aur route review kar denge.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {[
            "North India",
            "South India",
            "West India",
            "East India",
            "Central India",
            "North East India",
            "Metro cities",
            "Tier-2 & tier-3 cities",
            "Industrial corridors",
            "Semi-urban sites",
          ].map((region) => (
            <span className="request-chip" key={region}>
              {region}
            </span>
          ))}
        </div>
      </section>
      <section className="mt-20 grid gap-10 bg-secondary p-7 md:grid-cols-2 md:p-10">
        <div>
          <p className="eyebrow">Kya confirm hota hai</p>
          <h2 className="section-title">Delivery plan milega, blanket promise nahi.</h2>
          <p className="mt-4 text-muted-foreground">
            Timing aur freight source, distance, quantity, vehicle aur site access par depend karte
            hain. Quote ke saath ye details confirm hoti hain.
          </p>
        </div>
        <ul className="space-y-4">
          {[
            "Requested material available hai ya nahi",
            "Load aur vehicle route ke liye suitable hain ya nahi",
            "Freight included hai ya separate",
            "Dispatch se pehle expected timing",
          ].map((item) => (
            <li className="flex gap-3" key={item}>
              <CheckCircle2 className="shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
