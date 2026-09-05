import { ClipboardList, SearchCheck, FileCheck2, Truck } from "lucide-react";
import deliveryImage from "@/assets/delivery-yard.jpg";

const steps = [
  { number: "01", title: "Material aur quantity bhejo", text: "Material, size ya grade, quantity, delivery location aur required date.", Icon: ClipboardList },
  { number: "02", title: "Site aur date batao", text: "Source availability, route, vehicle access aur timing check hoti hai.", Icon: SearchCheck },
  { number: "03", title: "Delivered rate confirm hota hai", text: "Rate ka basis, freight aur expected delivery timing clear likhkar di jaati hai.", Icon: FileCheck2 },
  { number: "04", title: "Dispatch ka time fix hota hai", text: "Vehicle, site contact aur timing material chalne se pehle tay hote hain.", Icon: Truck },
] as const;

export function ProcessShowcase() {
  return <div className="process-showcase">
    <article className="process-feature"><img src={deliveryImage} alt="Construction material dispatch yard ka illustrative view"/><div className="process-feature-shade"/><div><span>01</span><h3>Material aur quantity bhejo</h3><p>Ek poora message kaafi hai: material, quantity, site aur date.</p></div></article>
    <div className="process-stack">{steps.slice(1).map(({number,title,text,Icon})=><article className="process-step" key={number}><div className="process-step-icon"><Icon size={22}/></div><div><span>Step {number}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div>
  </div>;
}