import Link from "next/link";
import { Logo } from "./Logo";
import { WHATSAPP_MENU_ID } from "./WhatsAppButton";

const links = [
  { href: "/#unidades", label: "Unidades" },
  { href: "/#modalidades", label: "Modalidades" },
  { href: "/#convenios", label: "TotalPass e Wellhub" },
  { href: "/#avaliacoes", label: "Avaliações" },
];

export function Header() {
  return (
    <header className="border-line/70 bg-deep/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="wrap flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="AcquaFit, página inicial"
          className="flex min-h-11 items-center"
        >
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link inline-flex min-h-11 items-center font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#unidades" className="btn btn-ghost !min-h-11 !px-4 lg:!hidden">
            Unidades
          </Link>
          <button
            type="button"
            popoverTarget={WHATSAPP_MENU_ID}
            className="btn btn-primary !hidden !min-h-11 sm:!inline-flex"
          >
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}
