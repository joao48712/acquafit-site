import Link from "next/link";
import { site } from "@/content/site";
import { units } from "@/content/units";
import { fullAddress } from "@/lib/address";
import { formatPhone, unitMessage, whatsappUrl } from "@/lib/whatsapp";
import { BrandIcon } from "./BrandIcon";
import { Contours } from "./Contours";
import { Logo } from "./Logo";
import { WHATSAPP_MENU_ID } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer>
      <div className="bg-ember text-deep relative overflow-hidden py-20 sm:py-28">
        <Contours className="text-deep/15" rows={9} />
        <div className="wrap relative flex flex-col items-start gap-8">
          <p className="display text-[clamp(3.5rem,13vw,11rem)] [&_em]:!text-white">
            O nosso foco é <em>você</em>
          </p>
          <button
            type="button"
            popoverTarget={WHATSAPP_MENU_ID}
            className="btn bg-deep text-foam"
          >
            <BrandIcon name="whatsapp" />
            Chamar a minha unidade
          </button>
        </div>
      </div>

      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <div className="flex gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da AcquaFit"
              className="btn btn-ghost size-12 !p-0"
            >
              <BrandIcon name="instagram" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da AcquaFit"
              className="btn btn-ghost size-12 !p-0"
            >
              <BrandIcon name="facebook" />
            </a>
          </div>
        </div>
        {units.map((unit) => (
          <div key={unit.slug} className="flex flex-col items-start">
            <Link
              href={`/unidades/${unit.slug}`}
              className="link inline-flex min-h-11 items-center font-bold"
            >
              {unit.name}
            </Link>
            <p className="text-mist">{fullAddress(unit)}</p>
            <a
              href={whatsappUrl(unit.whatsapp, unitMessage(unit.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-mist inline-flex min-h-11 items-center"
            >
              {formatPhone(unit.whatsapp)}
            </a>
          </div>
        ))}
      </div>
      {/* Espaço para o botão flutuante não cobrir o fim da página. */}
      <p className="wrap border-line text-mist border-t pt-6 pb-24 text-sm">
        {site.name} · Dracena e Tupi Paulista, SP
      </p>
    </footer>
  );
}
