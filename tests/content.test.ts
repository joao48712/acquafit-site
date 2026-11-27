import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { reviews } from "@/content/reviews";
import { getUnit, units } from "@/content/units";
import { whatsappUrl } from "@/lib/whatsapp";

const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

describe("unidades", () => {
  test("são três, com endereços de página únicos", () => {
    expect(units.map((u) => u.slug)).toEqual([
      "centro",
      "sao-cristovao",
      "tupi-paulista",
    ]);
  });

  test("cada WhatsApp é o publicado no flow.page", () => {
    expect(units.map((u) => u.whatsapp)).toEqual([
      "5518996949005",
      "5518997894216",
      "5518997342371",
    ]);
    for (const unit of units)
      expect(() => whatsappUrl(unit.whatsapp, "oi")).not.toThrow();
  });

  test.each(units)("$name: horários válidos", (unit) => {
    for (const periods of Object.values(unit.schedule)) {
      for (const { open, close } of periods) {
        expect(open).toMatch(TIME);
        expect(close).toMatch(TIME);
        expect(open < close).toBe(true);
      }
    }
  });

  test.each(units)("$name: mapas incorporáveis do Google", (unit) => {
    expect(unit.maps.embed).toMatch(/^https:\/\/www\.google\.com\/maps\/embed\?pb=!1m18/);
    expect(unit.maps.streetView).toMatch(
      /^https:\/\/www\.google\.com\/maps\/embed\?pb=!4v/,
    );
    expect(unit.maps.link).toMatch(/^https:\/\/www\.google\.com\/maps\//);
  });

  test.each(units)("$name: arquivos de imagem existem", (unit) => {
    for (const photo of [unit.facade, ...unit.photos]) {
      expect(existsSync(join(process.cwd(), "public", photo.src)), photo.src).toBe(true);
      expect(photo.alt.length).toBeGreaterThan(10);
    }
  });

  test("Tupi não exibe nota do Google", () => {
    expect(getUnit("tupi-paulista")?.google).toBeUndefined();
  });

  test("unidade desconhecida não existe", () => {
    expect(getUnit("outra")).toBeUndefined();
  });
});

describe("avaliações", () => {
  test("apontam para unidades existentes e têm texto", () => {
    expect(reviews.length).toBeGreaterThan(0);
    for (const review of reviews) {
      expect(getUnit(review.unit)).toBeDefined();
      expect(review.text.trim().length).toBeGreaterThan(0);
      expect(review.author, "nome abreviado").toMatch(/^\S+( \S\.)?$/);
    }
  });
});
