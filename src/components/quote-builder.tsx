import { MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { materials, whatsappUrl } from "@/lib/materials";

export function QuoteBuilder({ initialMaterial = "10 mm Aggregate (Rodi)", source = "Homepage" }: { initialMaterial?: string; source?: string }) {
  const [material, setMaterial] = useState(initialMaterial);
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("tonne");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Flexible");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const message = useMemo(() => `Hi Rodiwala, I need ${material}. Quantity: ${quantity || "need help estimating"} ${quantity ? unit : ""}. Delivery location: ${location || "to be shared"}. Required by: ${date}. ${notes ? `Site access / notes: ${notes}. ` : ""}I found you on: ${source}. Please confirm availability and delivered price.`, [material, quantity, unit, location, date, notes, source]);
  const openWhatsApp = () => {
    if (!location.trim()) { setError("Please enter a delivery locality or pin code."); return; }
    setError(""); window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };
  return <div className="quote-grid">
    <div>
      <p className="eyebrow text-accent">Quote enquiry</p>
      <h2 className="section-title text-primary-foreground">Build your requirement, then send it on WhatsApp.</h2>
      <p className="mt-4 max-w-lg text-lg text-primary-foreground/75">Nothing is stored. Your selections simply create a useful message for the Rodiwala team.</p>
      <div className="message-preview"><p className="eyebrow text-accent">Your WhatsApp message</p><p>{message}</p></div>
    </div>
    <div className="quote-form">
      <label>Material<select value={material} onChange={(event) => setMaterial(event.target.value)}>{materials.map((item) => <option key={item.slug}>{item.name}</option>)}<option>Other material</option></select></label>
      <div className="grid grid-cols-2 gap-3"><label>Quantity<input value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder="Optional" inputMode="decimal"/></label><label>Unit<select value={unit} onChange={(event) => setUnit(event.target.value)}><option>tonne</option><option>truck</option><option>cubic ft</option><option>bags</option><option>cubic metre</option><option>unknown</option></select></label></div>
      <label>Delivery locality / pin code <span aria-hidden="true">*</span><input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. Noida Sector 62" aria-invalid={Boolean(error)} aria-describedby="location-error"/></label>
      <label>Required date<select value={date} onChange={(event) => setDate(event.target.value)}><option>Today</option><option>Tomorrow</option><option>This week</option><option>Flexible</option></select></label>
      <label>Site access / notes<textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={2} placeholder="Vehicle access, pump need, preferred timing…"/></label>
      {error && <p id="location-error" role="alert" className="text-sm font-semibold text-destructive">{error}</p>}
      <button type="button" className="btn-accent w-full" onClick={openWhatsApp}><MessageCircle size={18}/>Send on WhatsApp</button>
      <p className="text-center text-xs text-muted-foreground">Opens a pre-filled WhatsApp chat. No personal information is stored here.</p>
    </div>
  </div>;
}
