import Link from "next/link";
import { units } from "@/content/units";
import { fullAddress } from "@/lib/address";
import { describeWeek } from "@/lib/hours";
import { unitMessage, whatsappUrl } from "@/lib/whatsapp";
import { BrandIcon } from "../BrandIcon";
import { Facade } from "../Facade";
import { OpenStatus } from "../OpenStatus";

export function Units() {
  return (
    <section id="unidades" className="bg-panel/50 py-20 sm:py-28">
      <div className="wrap">
        <h2 className="title">
          Três <em>unidades</em>
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {units.map((unit) => (
            <li
              key={unit.slug}
              className="border-line bg-panel flex flex-col overflow-hidden rounded-3xl border"
            >
              <Link
                href={`/unidades/${unit.slug}`}
                className="group block"
                aria-label={`Ver a unidade ${unit.name}`}
              >
                <Facade
                  photo={unit.facade}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="unveil aspect-[4/3]"
                />
              </Link>
              <div className="flex grow flex-col gap-4 p-6">
                <div>
                  <h3 className="display text-4xl">{unit.name}</h3>
                  <OpenStatus schedule={unit.schedule} className="mt-2" />
                </div>
                <p className="text-mist">{fullAddress(unit)}</p>
                <dl className="text-sm">
                  {describeWeek(unit.schedule).map((line) => (
                    <div
                      key={line.days}
                      className="border-line flex justify-between gap-4 border-t py-2"
                    >
                      <dt className="text-mist">{line.days}</dt>
                      <dd className="text-right font-semibold">{line.hours}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto flex flex-col gap-3 pt-2">
                  <a
                    href={whatsappUrl(unit.whatsapp, unitMessage(unit.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whats"
                  >
                    <BrandIcon name="whatsapp" />
                    WhatsApp {unit.name}
                  </a>
                  <Link href={`/unidades/${unit.slug}`} className="btn btn-ghost">
                    Mapa e Street View
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
