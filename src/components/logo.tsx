import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Rodiwala home">
      <span className="logo-mark" aria-hidden="true"><span>R</span><i>W</i></span>
      <span className="min-w-0 leading-none">
        <strong className="block truncate font-display text-xl font-bold text-foreground">RodiWala</strong>
        <small className="mt-1 block truncate text-[9px] font-bold uppercase tracking-[0.16em] text-primary">Build better together</small>
      </span>
    </Link>
  );
}
