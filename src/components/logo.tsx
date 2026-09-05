import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/rodiwala-logo-mark.png";

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Rodiwala home">
      <img src={logoMark} alt="" aria-hidden="true" className="h-12 w-12 shrink-0 object-contain" />
      <span className="min-w-0 leading-none">
        <strong className="block truncate font-display text-xl font-bold text-foreground">
          RodiWala
        </strong>
        <small className="mt-1 block truncate text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
          Build better together
        </small>
      </span>
    </Link>
  );
}
