"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./reduced-motion-provider";
import { smpteTimecode } from "@/lib/timecode";
import styles from "./telemetry-bar.module.css";

export function TelemetryBar() {
  const [progress, setProgress] = useState(78);
  const [now, setNow] = useState<string>("00:00:00:00");
  const [online, setOnline] = useState(true);
  const { reducedMotion } = useReducedMotion();

  useEffect(() => {
    const tick = () => setNow(smpteTimecode(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    const onlineHandler = () => setOnline(navigator.onLine);
    onlineHandler();
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", onlineHandler);

    let raf = 0;
    let last = performance.now();
    const step = (t: number) => {
      const dt = t - last;
      last = t;
      if (!reducedMotion) {
        setProgress((p) => (p >= 100 ? 12 : p + dt * 0.0025));
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      clearInterval(id);
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", onlineHandler);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <div className={styles.bar} role="status" aria-live="polite" aria-label="System telemetry">
      <div className={`container ${styles.inner}`}>
        <div className={styles.cell}>
          <span className="eyebrow">Render</span>
          <div className={styles.progress} aria-hidden>
            <div className={styles.progressFill} style={{ width: `${Math.min(100, progress)}%` }} />
          </div>
          <span className="mono">{Math.floor(progress)}%</span>
        </div>
        <div className={styles.cell}>
          <span className="eyebrow">Time code</span>
          <span className={styles.timecode}>{now}</span>
          <span className="mono">1920 × 1080 · 24FPS</span>
        </div>
        <div className={styles.cell}>
          <span className="eyebrow">Status</span>
          <span className={styles.online}>
            <span className={`${styles.dot} ${online ? styles.dotOn : ""}`} aria-hidden />
            <span className="mono">{online ? "Online" : "Offline"}</span>
          </span>
        </div>
        <div className={styles.cell}>
          <span className="eyebrow">Reduced motion</span>
          <span className="mono">{reducedMotion ? "On" : "Off"}</span>
        </div>
      </div>
    </div>
  );
}
