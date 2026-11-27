import type { Weekday, WeekSchedule } from "@/content/types";

const TIME_ZONE = "America/Sao_Paulo";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
/** Semana começando na segunda, como se fala no Brasil. */
const DISPLAY_ORDER: Weekday[] = [1, 2, 3, 4, 5, 6, 0];

export type OpenStatus = { open: boolean; label: string };

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function localNow(date: Date) {
  const parts = Object.fromEntries(
    formatter.formatToParts(date).map((part) => [part.type, part.value]),
  );
  return {
    day: WEEKDAYS.indexOf(parts.weekday) as Weekday,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

function toMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function formatTime(time: string) {
  const [hours, minutes] = time.split(":");
  return `${Number(hours)}h${minutes === "00" ? "" : minutes}`;
}

export function getOpenStatus(schedule: WeekSchedule, date: Date): OpenStatus {
  const now = localNow(date);

  const current = schedule[now.day].find(
    (p) => now.minutes >= toMinutes(p.open) && now.minutes < toMinutes(p.close),
  );
  if (current) {
    return {
      open: true,
      label: `Aberto agora · fecha às ${formatTime(current.close)}`,
    };
  }

  for (let offset = 0; offset <= 7; offset++) {
    const day = ((now.day + offset) % 7) as Weekday;
    const next = schedule[day].find((p) => offset > 0 || toMinutes(p.open) > now.minutes);
    if (next) {
      const when = offset === 0 ? "hoje" : offset === 1 ? "amanhã" : DAY_NAMES[day];
      return { open: false, label: `Fechado · abre ${when} às ${formatTime(next.open)}` };
    }
  }

  return { open: false, label: "Fechado" };
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function describeWeek(schedule: WeekSchedule) {
  const groups: { first: Weekday; last: Weekday; hours: string }[] = [];

  for (const day of DISPLAY_ORDER) {
    const hours =
      schedule[day]
        .map((p) => `${formatTime(p.open)} às ${formatTime(p.close)}`)
        .join(" e ") || "Fechado";
    const previous = groups.at(-1);
    if (previous && previous.hours === hours) previous.last = day;
    else groups.push({ first: day, last: day, hours });
  }

  return groups.map(({ first, last, hours }) => ({
    days: capitalize(
      first === last ? DAY_NAMES[first] : `${DAY_NAMES[first]} a ${DAY_NAMES[last]}`,
    ),
    hours,
  }));
}
