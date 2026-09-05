import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { detailedQuoteMessage, phoneHref, quoteHref, whatsappUrl } from "@/lib/materials";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact Rodiwala for Construction Materials",
      description:
        "Construction material chahiye? Rodiwala ko WhatsApp par material, quantity, location aur date bhejo, ya call karke poochho. India bhar se enquiry.",
      path: "/contact",
    }),
  component: Page,
});
function Page() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Site par kya chahiye? WhatsApp par requirement bhejo."
      intro="Material, quantity, delivery location (India mein kahin bhi) aur required date bhej do — jawab utna hi kaam ka milega."
      image={heroImage}
    >
      <div className="contact-layout">
        <div className="contact-actions">
          <a href={`tel:${phoneHref}`}>
            <Phone />
            <span>Call karo</span>
            <strong>Tap karke call karo</strong>
            <ArrowRight />
          </a>
          <a
            href={whatsappUrl(detailedQuoteMessage)}
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
          <h2 className="section-title">Ye chaar details baat jaldi aage badha deti hain.</h2>
          <ul>
            {[
              "Material aur size ya grade",
              "Quantity aur unit",
              "Delivery city, locality ya pin code",
              "Required date aur access note",
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
        Business hours aur public address abhi confirm nahi hue hain, isliye jaan-boojhkar nahi
        likhe gaye.
      </p>
    </ContentPage>
  );
}
