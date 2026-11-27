import { describe, expect, test } from "vitest";
import { formatPhone, unitMessage, whatsappUrl } from "@/lib/whatsapp";

describe("whatsapp", () => {
  test("monta o link com número e mensagem codificada", () => {
    expect(whatsappUrl("5518996949005", "Olá! Tudo bem?")).toBe(
      "https://wa.me/5518996949005?text=Ol%C3%A1!%20Tudo%20bem%3F",
    );
  });

  test("recusa número fora do padrão", () => {
    expect(() => whatsappUrl("18996949005", "oi")).toThrow("Número de WhatsApp inválido");
  });

  test("mensagem pronta cita a unidade", () => {
    expect(unitMessage("Centro")).toBe(
      "Olá! Vim pelo site e quero saber mais sobre a AcquaFit Centro.",
    );
  });

  test("formata o telefone para exibir", () => {
    expect(formatPhone("5518996949005")).toBe("(18) 99694-9005");
  });
});
