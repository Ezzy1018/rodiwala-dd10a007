import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Logo } from "./logo";
import { phoneHref, quoteHref, whatsappUrl } from "@/lib/materials";

const nav = [
  ["Materials", "/materials"],
  ["Delivery areas", "/delivery-areas"],
  ["How it works", "/how-it-works"],
  ["About", "/about"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background pb-18 md:pb-0">
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex shrink-0 items-center gap-2">
          <nav className="mr-3 hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {nav.map(([label,to]) => <Link key={to} to={to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{className:"text-primary"}}>{label}</Link>)}
          </nav>
          <a href={`tel:${phoneHref}`} className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex"><Phone size={16}/>Call us</a>
          <a href={quoteHref("Header")} target="_blank" rel="noreferrer" className="btn-accent hidden sm:inline-flex"><MessageCircle size={16}/>Get a quote</a>
          <button className="icon-button lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-4 py-3 lg:hidden" aria-label="Mobile navigation">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-display font-semibold text-foreground last:border-0">{label}</Link>)}</nav>}
    </header>
    {children}
     <footer className="border-t border-primary/15 bg-primary text-primary-foreground">
       <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
         <div className="footer-brand"><Logo/><p className="mt-3 max-w-md text-sm text-primary-foreground/65">Construction-material sourcing for sites across India. Availability, delivered pricing and delivery feasibility are confirmed for every requirement, wherever your site is.</p></div>
         <div className="flex gap-5 text-sm font-medium text-primary-foreground"><Link to="/contact">Contact</Link><a href={quoteHref("Footer")} target="_blank" rel="noreferrer">Get a quote</a></div>
       </div>
     </footer>
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background p-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] md:hidden">
      <a className="sticky-action" href={`tel:${phoneHref}`}><Phone size={17}/>Call us</a>
      <a className="sticky-action" href={whatsappUrl("Hi Rodiwala, I have a construction material requirement. Please help me with availability and delivered pricing.")} target="_blank" rel="noreferrer"><MessageCircle size={17}/>WhatsApp</a>
      <a className="sticky-action bg-accent text-accent-foreground" href={quoteHref("Mobile bar")} target="_blank" rel="noreferrer">Get a quote</a>
    </div>
  </div>;
}
