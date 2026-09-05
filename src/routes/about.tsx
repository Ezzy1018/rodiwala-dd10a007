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
        "Rodiwala helps contractors, builders, site engineers and homeowners across India source construction materials and coordinate delivery.",
      path: "/about",
    }),
  component: Page,
});
function Page() {
  const audiences = [
    {
      Icon: HardHat,
      title: "Thekedar aur contractors",
      text: "Bulk ya baar-baar aane wali requirement, delivery coordination ke saath.",
    },
    {
      Icon: Ruler,
      title: "Site engineers aur supervisors",
      text: "Specification wali enquiry, clear material aur access details ke saath.",
    },
    {
      Icon: House,
      title: "Ghar bana rahe log",
      text: "Site ki requirement ko seedhe quote request mein badalne ki simple madad.",
    },
  ];
  return (
    <ContentPage
      eyebrow="About Rodiwala"
      title="Rodiwala site ke material ko simple banata hai."
      intro="Thekedar, builders, site engineers, supervisors aur ghar bana rahe log — sab India bhar se material mangwane aur delivery coordinate karne ke liye Rodiwala se baat karte hain."
      image={heroImage}
    >
      <section className="about-intro">
        <div>
          <p className="eyebrow">Hum karte kya hain</p>
          <h2 className="section-title">Material, rate aur delivery — kaam ke hisaab se confirm.</h2>
        </div>
        <p>
          Requirement aati hai, material aur delivery feasibility check hoti hai, quote diya jata
          hai aur fulfilment coordinate hota hai. Fixed price isliye publish nahi karte kyunki wo
          jaldi galat ho jate hain.
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
          <h2>Pehle clarity, phir dawe</h2>
          <p>
            Enquiry India mein kahin se bhi kar sakte ho, har ek honestly check hoti hai. Stock,
            quality ya timing ka blanket promise nahi karte. Business details aur verified proof
            approval ke baad hi dikhte hain.
          </p>
        </div>
      </section>
    </ContentPage>
  );
}
