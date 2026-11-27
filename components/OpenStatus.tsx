"use client";

import { useSyncExternalStore } from "react";
import type { WeekSchedule } from "@/content/types";
import { getOpenStatus } from "@/lib/hours";

function subscribe(onChange: () => void) {
  const timer = setInterval(onChange, 30_000);
  return () => clearInterval(timer);
}

const currentMinute = () => Math.floor(Date.now() / 60_000);
/** No servidor não há "agora": a página é gerada uma vez e fica em cache. */
const noMinute = () => null;

export function OpenStatus({
  schedule,
  className = "",
}: {
  schedule: WeekSchedule;
  className?: string;
}) {
  const minute = useSyncExternalStore(subscribe, currentMinute, noMinute);
  const status =
    minute === null ? null : getOpenStatus(schedule, new Date(minute * 60_000));

  return (
    <span className={`inline-flex min-h-6 items-center gap-2 text-sm ${className}`}>
      <span
        aria-hidden
        className={`size-2 shrink-0 rounded-full ${status?.open ? "bg-whats" : "bg-mist"}`}
      />
      {status?.label ?? "Veja os horários"}
    </span>
  );
}
