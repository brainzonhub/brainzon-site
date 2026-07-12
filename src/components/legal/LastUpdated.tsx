import React from "react";
import { CalendarClock } from "lucide-react";

export function LastUpdated({ date }: { date: string }) {
  const formatted = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));

  return (
    <p className="inline-flex items-center gap-2 text-sm text-muted-foreground print:text-slate-700">
      <CalendarClock className="size-4 text-primary print:text-slate-700" />
      Last updated: <time dateTime={date}>{formatted}</time>
    </p>
  );
}
