import { apps } from "@/content/site";
import type { Unit } from "@/content/types";

/** Mostra TotalPass e Wellhub para as unidades recebidas. */
export function Apps({ units }: { units: Unit[] }) {
  const keys = Object.keys(apps) as (keyof typeof apps)[];

  return (
    <section id="convenios" className="bg-foam text-deep py-20 sm:py-28">
      <div className="wrap">
        <h2 className="title [&_em]:!text-[#b83d08]">
          Treine com o seu <em>benefício</em>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {keys.map((key) => (
            <article
              key={key}
              className="border-deep/15 rounded-3xl border bg-white p-6 sm:p-8"
            >
              <h3 className="text-4xl font-extrabold tracking-tight">{apps[key].name}</h3>
              <p className="mt-3 text-[#46506a]">{apps[key].text}</p>
              <ul className="mt-6">
                {units.map((unit) => {
                  const partner = unit.apps[key];
                  return (
                    <li key={unit.slug} className="border-deep/15 border-t">
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-16 items-center justify-between gap-4 py-3"
                      >
                        <span>
                          <span className="block font-bold">{unit.name}</span>
                          <span className="block text-sm text-[#46506a]">
                            {partner.plan
                              ? `A partir do plano ${partner.plan}`
                              : "Confira o plano no aplicativo"}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="ease-out-strong transition-transform duration-200 [@media(hover:hover)]:group-hover:translate-x-1"
                        >
                          ↗
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
