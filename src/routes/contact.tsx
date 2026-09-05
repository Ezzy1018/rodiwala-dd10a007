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
        "Call or WhatsApp Rodiwala from anywhere in India with your construction material requirement.",
      path: "/contact",
    }),
  component: Page,
});
function Page() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Talk to Rodiwala about your site requirement."
      intro="Share the material, quantity, delivery location anywhere in India and required date for the most useful response."
      image={heroImage}
    >
      <div className="contact-layout">
        <div className="contact-actions">
          <a href={`tel:${phoneHref}`}>
            <Phone />
            <span>Call us</span>
            <strong>Tap to call</strong>
            <ArrowRight />
          </a>
          <a
            href={whatsappUrl(
              "Hi Rodiwala, I have a construction material requirement. Material: [please add]. Quantity: [please add]. Delivery location: [please add]. Required by: [please add]. Please confirm availability and delivered price.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle />
            <span>WhatsApp</span>
            <strong>Send a requirement</strong>
            <ArrowRight />
          </a>
        </div>
        <div className="contact-checklist">
          <p className="eyebrow">Before you contact us</p>
          <h2 className="section-title">Four details make the conversation faster.</h2>
          <ul>
            {[
              "Material and size or grade",
              "Quantity and unit",
              "Delivery city, locality or pin code",
              "Required date and access notes",
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
            Get a quote <ArrowRight size={17} />
          </a>
        </div>
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        Business hours and a public address have not yet been provided, so they are intentionally
        omitted.
      </p>
    </ContentPage>
  );
}
