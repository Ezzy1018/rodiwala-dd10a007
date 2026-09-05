import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { phoneHref, quoteHref, whatsappUrl } from "@/lib/materials";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact Rodiwala for Construction Materials",
      description:
        "Construction material requirement ke liye Rodiwala ko call ya WhatsApp karo. Material, quantity, location aur date bhejo.",
      path: "/contact",
    }),
  component: Page,
});
function Page() {
  return (
    <ContentPage
      eyebrow="Contact Rodiwala"
      title="Site par kya chahiye? WhatsApp par requirement bhejo."
      intro="Material, quantity, delivery city ya pin code aur required date bhejo, taaki useful response mil sake."
      image={heroImage}
    >
      <div className="contact-layout">
        <div className="contact-actions">
          <a href={`tel:${phoneHref}`}>
            <Phone />
            <span>Phone par baat karo</span>
            <strong>Call karke poochho</strong>
            <ArrowRight />
          </a>
          <a
            href={whatsappUrl(
              "Namaste Rodiwala, meri site ke liye material chahiye. Material: [naam]. Quantity: [quantity aur unit]. Location/pin code: [location]. Required date: [date]. Site access ya unloading note: [details]. Availability aur delivered rate bata dijiye.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle />
            <span>WhatsApp</span>
            <strong>Requirement bhejo</strong>
            <ArrowRight />
          </a>
        </div>
        <div className="contact-checklist">
          <p className="eyebrow">Contact karne se pehle</p>
          <h2 className="section-title">Ye chaar details bhejoge to baat fast hogi.</h2>
          <ul>
            {[
              "Material aur size ya grade",
              "Quantity aur unit",
              "Delivery city, locality ya pin code",
              "Required date aur access notes",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={quoteHref("Contact page")}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-7"
          >
            WhatsApp par quote lo <ArrowRight size={17} />
          </a>
        </div>
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        Business hours aur public address abhi provide nahi kiye gaye hain, isliye intentionally
        omit kiye gaye hain.
      </p>
    </ContentPage>
  );
}
