/** Redesenho provisório do logo da fachada. Troque quando houver o arquivo oficial. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        aria-hidden
        className="size-9 shrink-0"
        fill="currentColor"
      >
        <path d="M29 3C14 3 3 13.5 3 26c0 5.5 2 10.5 5.5 14C6 28 11 15.5 22 10.5c4-1.8 8-2.2 12-1.5-.5-2.6-2.2-4.8-5-6Z" />
        <path d="M13 31c3.5 9 12 14 21 12.5 5-1 8.5-3.5 11-7-7 3-14 2.5-19.5-1.5-4-3-8.5-4.8-12.5-4Z" />
        <circle cx="41" cy="13" r="3" />
      </svg>
      <span className="display text-2xl">
        Acqua<span className="text-ember">Fit</span>
      </span>
    </span>
  );
}
