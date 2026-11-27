"use client";

import { usePathname } from "next/navigation";
import { units } from "@/content/units";
import { formatPhone, unitMessage, whatsappUrl } from "@/lib/whatsapp";
import { BrandIcon } from "./BrandIcon";
import { OpenStatus } from "./OpenStatus";

export const WHATSAPP_MENU_ID = "menu-whatsapp";

/** Botão flutuante. Na página de uma unidade, ela aparece em primeiro. */
export function WhatsAppButton() {
  const pathname = usePathname();
  const ordered = [...units].sort(
    (a, b) =>
      Number(pathname.endsWith(`/${b.slug}`)) - Number(pathname.endsWith(`/${a.slug}`)),
  );

  return (
    <>
      <div
        id={WHATSAPP_MENU_ID}
        popover="auto"
        role="dialog"
        aria-label="Falar no WhatsApp"
        className="wa-menu border-line bg-panel text-foam m-0 rounded-3xl border p-2 shadow-2xl shadow-black/50"
      >
        <p className="px-3 pt-3 pb-2 font-bold">Com qual unidade você quer falar?</p>
        <ul>
          {ordered.map((unit) => (
            <li key={unit.slug}>
              <a
                href={whatsappUrl(unit.whatsapp, unitMessage(unit.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-line/60 flex items-center gap-3 rounded-2xl p-3 transition-colors"
              >
                <span className="bg-whats text-deep grid size-11 shrink-0 place-items-center rounded-full">
                  <BrandIcon name="whatsapp" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold">{unit.name}</span>
                  <span className="text-mist block text-sm">
                    {formatPhone(unit.whatsapp)}
                  </span>
                  <OpenStatus schedule={unit.schedule} className="text-mist" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        popoverTarget={WHATSAPP_MENU_ID}
        aria-label="Falar no WhatsApp"
        className="btn btn-whats fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 size-15 !p-0 shadow-xl shadow-black/40"
      >
        <BrandIcon name="whatsapp" className="size-8" />
      </button>
    </>
  );
}
