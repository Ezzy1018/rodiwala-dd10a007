import { ClipboardList, SearchCheck, FileCheck2, Truck } from "lucide-react";
import deliveryImage from "@/assets/delivery-yard.jpg";

const steps = [
  {
    number: "01",
    title: "Requirement bhejo",
    text: "Material, quantity, location aur date share karo.",
    Icon: ClipboardList,
  },
  {
    number: "02",
    title: "Details check",
    text: "Source, route, access aur timing check hoti hai.",
    Icon: SearchCheck,
  },
  {
    number: "03",
    title: "Quote milega",
    text: "Rate, freight aur delivery timing clear milegi.",
    Icon: FileCheck2,
  },
  {
    number: "04",
    title: "Dispatch confirm",
    text: "Vehicle, site contact aur timing confirm hoti hai.",
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
          <p>Material, quantity, location aur date — bas itna bhejo.</p>
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
