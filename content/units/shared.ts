import type { Period, WeekSchedule } from "@/content/types";

const WEEKDAY: Period[] = [{ open: "05:00", close: "21:00" }];

/** Segunda a sexta é igual nas três unidades; só o fim de semana muda. */
export function week({
  saturday = [],
  sunday = [],
}: {
  saturday?: Period[];
  sunday?: Period[];
}): WeekSchedule {
  return {
    0: sunday,
    1: WEEKDAY,
    2: WEEKDAY,
    3: WEEKDAY,
    4: WEEKDAY,
    5: WEEKDAY,
    6: saturday,
  };
}
