"use client";

import { useEffect, useState } from "react";
import { smpteTimecode } from "@/lib/timecode";

type Props = {
  className?: string;
  format?: "smpte" | "hms";
  intervalMs?: number;
};

function digitalClock(d: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function LiveTimecode({ className, format = "smpte", intervalMs = 1000 }: Props) {
  const initial = "00:00:00:00";
  const [value, setValue] = useState<string>(initial);

  useEffect(() => {
    const tick = () => setValue(format === "smpte" ? smpteTimecode(new Date()) : digitalClock(new Date()));
    tick();
    const id = window.setInterval(tick, intervalMs);
    return () => window.clearInterval(id);
  }, [format, intervalMs]);

  return (
    <span className={className} suppressHydrationWarning>
      {value}
    </span>
  );
}
