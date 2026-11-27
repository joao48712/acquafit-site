import Link from "next/link";
import { units } from "@/content/units";
import { Contours } from "../Contours";
import { Facade } from "../Facade";
import { WHATSAPP_MENU_ID } from "../WhatsAppButton";

export function Hero() {
  const [main] = units;

  return (
    <section className="relative overflow-hidden">
      <Contours className="text-line/60" />
      <div className="wrap relative grid items-center gap-10 py-10 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.15fr_1fr]">
        <div className="enter flex min-w-0 flex-col items-start gap-7">
          <h1 className="display text-[clamp(3rem,13vw,5rem)] lg:text-[clamp(3.5rem,min(6.6vw,12svh),7rem)]">
            Academia em Dracena e <em>Tupi Paulista</em>
          </h1>
          <p className="text-mist max-w-xl text-lg sm:text-xl">
            Três unidades abertas de segunda a sexta, das 5h às 21h. Musculação,
            funcional, natação e hidroginástica.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              popoverTarget={WHATSAPP_MENU_ID}
              className="btn btn-primary"
            >
              Falar no WhatsApp
            </button>
            <Link href="#unidades" className="btn btn-ghost">
              Ver as unidades
            </Link>
          </div>
        </div>
        <div className="min-w-0">
          <Link href={`/unidades/${main.slug}`} className="group block">
            <Facade
              photo={main.facade}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] rounded-3xl lg:aspect-[3/2]"
            />
            <span className="flex min-h-11 items-center justify-between gap-3 pt-3 font-semibold">
              Unidade {main.name}, {main.city}
              <span aria-hidden className="text-ember">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
