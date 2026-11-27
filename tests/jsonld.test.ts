import { expect, test } from "vitest";
import { centro } from "@/content/units/centro";
import { tupiPaulista } from "@/content/units/tupi-paulista";
import { unitJsonLd } from "@/lib/jsonld";

test("dados estruturados trazem endereço, telefone e horários", () => {
  const data = unitJsonLd(centro);
  expect(data["@type"]).toBe("ExerciseGym");
  expect(data.telephone).toBe("+5518996949005");
  expect(data.address.addressLocality).toBe("Dracena");
  expect(data.openingHoursSpecification).toHaveLength(6);
  expect(data.openingHoursSpecification[0]).toMatchObject({
    dayOfWeek: "https://schema.org/Monday",
    opens: "05:00",
    closes: "21:00",
  });
});

test("não declara nota agregada ao Google", () => {
  expect(unitJsonLd(centro)).not.toHaveProperty("aggregateRating");
  expect(unitJsonLd(tupiPaulista)).not.toHaveProperty("aggregateRating");
});
