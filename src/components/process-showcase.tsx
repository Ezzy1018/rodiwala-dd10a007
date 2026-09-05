import { ClipboardList, SearchCheck, FileCheck2, Truck } from "lucide-react";
import deliveryImage from "@/assets/delivery-yard.jpg";

const steps = [
  { number: "01", title: "Share the requirement", text: "Material, size or grade, quantity, delivery location and required date.", Icon: ClipboardList },
  { number: "02", title: "We check the details", text: "Source availability, route, vehicle access and timing are reviewed.", Icon: SearchCheck },
  { number: "03", title: "Receive a clear quote", text: "The price basis, freight and expected delivery timing are stated clearly.", Icon: FileCheck2 },
  { number: "04", title: "Coordinate dispatch", text: "Vehicle, site contact and timing are agreed before material moves.", Icon: Truck },
] as const;

export function ProcessShowcase() {
  return <div className="process-showcase">
    <article className="process-feature"><img src={deliveryImage} alt="Illustrative view of a construction material dispatch yard"/><div className="process-feature-shade"/><div><span>01</span><h3>Share the requirement</h3><p>One useful message starts the conversation: material, quantity, site and date.</p></div></article>
    <div className="process-stack">{steps.slice(1).map(({number,title,text,Icon})=><article className="process-step" key={number}><div className="process-step-icon"><Icon size={22}/></div><div><span>Step {number}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div>
  </div>;
}