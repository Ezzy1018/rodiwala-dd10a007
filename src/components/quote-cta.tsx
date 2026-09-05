import { MessageCircle, Phone } from "lucide-react";
import { phoneHref, quoteHref } from "@/lib/materials";

export function QuoteButtons({
  context,
  tone = "dark",
}: {
  context?: string | undefined;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={quoteHref(context)}
        target="_blank"
        rel="noreferrer"
        className={tone === "dark" ? "btn-accent" : "btn-primary"}
      >
        <MessageCircle size={18} />
        Get quote
      </a>
      <a
        href={`tel:${phoneHref}`}
        className={tone === "dark" ? "btn-ghost-light" : "btn-outline border-primary/30"}
      >
        <Phone size={18} />
        Call now
      </a>
    </div>
  );
}

export function QuoteCta({ context }: { context?: string | undefined }) {
  return (
    <section className="bg-accent py-16 text-center">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-display text-4xl font-bold text-accent-foreground">
          Material chahiye?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-accent-foreground/80">
          Requirement WhatsApp karo. Availability aur delivered rate mil jayega.
        </p>
        <div className="mt-7 flex justify-center">
          <QuoteButtons context={context} tone="light" />
        </div>
      </div>
    </section>
  );
}
