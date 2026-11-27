import { describe, expect, test } from "vitest";
import type { WeekSchedule } from "@/content/types";
import { describeWeek, getOpenStatus } from "@/lib/hours";

const weekday = [{ open: "05:00", close: "21:00" }];
const schedule: WeekSchedule = {
  0: [],
  1: weekday,
  2: weekday,
  3: weekday,
  4: weekday,
  5: weekday,
  6: [{ open: "08:00", close: "12:00" }],
};

// 27/11/2026 é uma sexta-feira. São Paulo está em UTC-3.
const at = (isoLocal: string) => new Date(`${isoLocal}-03:00`);

describe("getOpenStatus", () => {
  test("aberto durante a semana informa a hora de fechar", () => {
    expect(getOpenStatus(schedule, at("2026-11-27T10:00:00"))).toEqual({
      open: true,
      label: "Aberto agora · fecha às 21h",
    });
  });

  test("aberto exatamente na abertura", () => {
    expect(getOpenStatus(schedule, at("2026-11-27T05:00:00")).open).toBe(true);
  });

  test("aberto um minuto antes de fechar", () => {
    expect(getOpenStatus(schedule, at("2026-11-27T20:59:00")).open).toBe(true);
  });

  test("fechado exatamente no fechamento, apontando o dia seguinte", () => {
    expect(getOpenStatus(schedule, at("2026-11-27T21:00:00"))).toEqual({
      open: false,
      label: "Fechado · abre amanhã às 8h",
    });
  });

  test("fechado antes de abrir no mesmo dia", () => {
    expect(getOpenStatus(schedule, at("2026-11-27T04:30:00")).label).toBe(
      "Fechado · abre hoje às 5h",
    );
  });

  test("pula o domingo fechado", () => {
    expect(getOpenStatus(schedule, at("2026-11-28T15:00:00")).label).toBe(
      "Fechado · abre segunda às 5h",
    );
  });

  test("usa o horário de São Paulo, não o do computador", () => {
    // 23h30 UTC de sexta = 20h30 em São Paulo
    expect(getOpenStatus(schedule, new Date("2026-11-27T23:30:00Z")).open).toBe(true);
  });

  test("horário sem nenhum dia aberto", () => {
    const closed: WeekSchedule = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    expect(getOpenStatus(closed, at("2026-11-27T10:00:00"))).toEqual({
      open: false,
      label: "Fechado",
    });
  });
});

describe("describeWeek", () => {
  test("agrupa dias seguidos com o mesmo horário", () => {
    expect(describeWeek(schedule)).toEqual([
      { days: "Segunda a sexta", hours: "5h às 21h" },
      { days: "Sábado", hours: "8h às 12h" },
      { days: "Domingo", hours: "Fechado" },
    ]);
  });

  test("mostra minutos quando houver", () => {
    const half: WeekSchedule = { ...schedule, 6: [{ open: "08:30", close: "12:00" }] };
    expect(describeWeek(half)[1].hours).toBe("8h30 às 12h");
  });
});
