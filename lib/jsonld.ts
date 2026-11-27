import { site } from "@/content/site";
import type { Unit, Weekday } from "@/content/types";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/** Dados estruturados da unidade para buscadores. */
export function unitJsonLd(unit: Unit) {
  return {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: `AcquaFit ${unit.name}`,
    url: `${site.url}/unidades/${unit.slug}`,
    image: `${site.url}${unit.facade.src}`,
    telephone: `+${unit.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: unit.address.street,
      addressLocality: unit.city,
      addressRegion: "SP",
      postalCode: unit.address.postalCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: unit.geo.lat,
      longitude: unit.geo.lng,
    },
    openingHoursSpecification: Object.entries(unit.schedule)
      .sort(([a], [b]) => ((Number(a) + 6) % 7) - ((Number(b) + 6) % 7))
      .flatMap(([day, periods]) =>
        periods.map((period) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: `https://schema.org/${DAYS[Number(day) as Weekday]}`,
          opens: period.open,
          closes: period.close,
        })),
      ),
    sameAs: [site.instagram, site.facebook],
  };
}
