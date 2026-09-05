import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { HardHat, House, Ruler, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/rodiwala-yard-hero.jpg";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About Rodiwala Construction Material Supply",
      description:
        "Rodiwala contractors, builders, site engineers aur homeowners ko construction materials source karne aur delivery coordinate karne mein help karta hai.",
      path: "/about",
    }),
  component: Page,
});
function Page() {
  const audiences = [
    {
      Icon: HardHat,
      title: "Contractors",
      text: "Bulk ya recurring requirements ke liye delivery coordination.",
    },
    {
      Icon: Ruler,
      title: "Site engineers",
      text: "Clear material specification aur access details ke saath enquiry.",
    },
    {
      Icon: House,
      title: "Homeowners",
      text: "Site requirement ko simple quote request mein badalne mein help.",
    },
  ];
  return (
    <ContentPage
      eyebrow="Rodiwala ke baare mein"
      title="Rodiwala site ke material ko simple banata hai."
      intro="Thekedar, builders, site engineers, site supervisors aur homeowners material requirement bhejkar quote le sakte hain."
      image={heroImage}
    >
      <section className="about-intro">
        <div>
          <p className="eyebrow">Hum kya karte hain</p>
          <h2 className="section-title">Material, rate aur delivery, job ke hisaab se confirm.</h2>
        </div>
        <p>
          Requirement receive karke material aur delivery feasibility check karte hain, phir quote
          share karte hain aur fulfilment coordinate karte hain. Fixed prices publish nahi karte,
          kyunki rate requirement ke hisaab se change ho sakta hai.
        </p>
      </section>
      <div className="factor-grid mt-14">
        {audiences.map(({ Icon, title, text }) => (
          <article className="factor-card" key={title}>
            <Icon />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <section className="trust-strip">
        <ShieldCheck />
        <div>
          <h2>Pehle clarity, phir commitment</h2>
          <p>
            India bhar se enquiries welcome hain aur har requirement honestly check hoti hai. Stock,
            quality ya timing ka blanket promise nahi hai. Business details aur verified proof
            approval ke baad hi dikhaya jayega.
          </p>
        </div>
      </section>
    </ContentPage>
  );
}
