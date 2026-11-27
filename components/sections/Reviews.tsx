import { reviews, reviewsCheckedAt } from "@/content/reviews";
import type { Unit } from "@/content/types";

const decimal = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});

function scores(units: Unit[]) {
  return units.flatMap((unit) => {
    const list = [];
    if (unit.google) {
      list.push({
        label: `Google · ${unit.name}`,
        value: unit.google.rating,
        count: unit.google.count,
        url: unit.maps.link,
      });
    }
    const { rating, url } = unit.apps.wellhub;
    if (rating) {
      list.push({ label: `Wellhub · ${unit.name}`, ...rating, url });
    }
    return list;
  });
}

/** Notas e depoimentos das unidades recebidas. */
export function Reviews({ units }: { units: Unit[] }) {
  const selected = reviews.filter((review) => units.some((u) => u.slug === review.unit));
  const ratings = scores(units);

  return (
    <section id="avaliacoes" className="py-20 sm:py-28">
      <div className="wrap">
        <h2 className="title">
          Quem treina <em>conta</em>
        </h2>

        {ratings.length > 0 && (
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {ratings.map((score) => (
              <li key={score.label}>
                <a
                  href={score.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-line hover:border-ember block h-full rounded-3xl border p-6 transition-colors"
                >
                  <span className="display text-ember block text-7xl">
                    {decimal.format(score.value)}
                  </span>
                  <span className="mt-2 block font-bold">{score.label}</span>
                  <span className="text-mist block text-sm">
                    {score.count} avaliações
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}

        {selected.length > 0 && (
          <ul className="mt-8 gap-4 md:columns-2 lg:columns-3">
            {selected.map((review) => {
              const unit = units.find((u) => u.slug === review.unit)!;
              return (
                <li
                  key={`${review.unit}-${review.author}`}
                  className="mb-4 break-inside-avoid"
                >
                  <figure className="bg-panel rounded-3xl p-6">
                    <p
                      className="text-ember tracking-widest"
                      role="img"
                      aria-label={`${review.stars} de 5 estrelas`}
                    >
                      {"★".repeat(review.stars)}
                    </p>
                    <blockquote className="mt-3 break-words">{review.text}</blockquote>
                    <figcaption className="text-mist mt-4 text-sm">
                      <strong className="text-foam">{review.author}</strong> · {unit.name}{" "}
                      ·{" "}
                      <a
                        href={unit.maps.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        {review.source}
                      </a>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        )}

        <p className="text-mist mt-6 text-sm">
          {ratings.length > 0 || selected.length > 0
            ? `Avaliações selecionadas. Notas e textos consultados em ${reviewsCheckedAt}.`
            : null}
        </p>
        {units.length === 1 && (
          <a
            href={units[0].maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost mt-6"
          >
            Ver e avaliar no Google
          </a>
        )}
      </div>
    </section>
  );
}
