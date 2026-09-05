import { ClipboardList, SearchCheck, FileCheck2, Truck } from "lucide-react";
import deliveryImage from "@/assets/delivery-yard.jpg";

const steps = [
  {
    number: "01",
    title: "Material aur quantity bhejo",
    text: "Material, size ya grade, quantity, delivery location aur required date share karo.",
    Icon: ClipboardList,
  },
  {
    number: "02",
    title: "Site details check hote hain",
    text: "Source availability, route, vehicle access aur timing review hoti hai.",
    Icon: SearchCheck,
  },
  {
    number: "03",
    title: "Delivered quote milta hai",
    text: "Price basis, freight aur expected delivery timing clearly batayi jati hai.",
    Icon: FileCheck2,
  },
  {
    number: "04",
    title: "Dispatch ka time fix hota hai",
    text: "Vehicle, site contact aur timing material move hone se pehle agree hote hain.",
    Icon: Truck,
  },
] as const;

export function ProcessShowcase() {
  return (
    <div className="process-showcase">
      <article className="process-feature">
        <img src={deliveryImage} alt="Construction material dispatch yard" />
        <div className="process-feature-shade" />
        <div>
          <span>01</span>
          <h3>Requirement bhejo</h3>
          <p>Ek useful message bhejo: material, quantity, site aur required date.</p>
        </div>
      </article>
      <div className="process-stack">
        {steps.slice(1).map(({ number, title, text, Icon }) => (
          <article className="process-step" key={number}>
            <div className="process-step-icon">
              <Icon size={22} />
            </div>
            <div>
              <span>Step {number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
