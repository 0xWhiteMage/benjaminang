"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./reduced-motion-provider";
import styles from "./reduced-motion-toggle.module.css";

export function ReducedMotionToggle() {
  const { reducedMotion, toggle } = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const on = mounted ? reducedMotion : false;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={toggle}
      className={styles.btn}
    >
      <span aria-hidden className={`${styles.icon} ${on ? styles.iconOn : ""}`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h2M7 8v8M11 5v14M15 8v8M19 11v2M21 12h-2" />
        </svg>
      </span>
      <span className={styles.text}>
        <span className="eyebrow">Reduced motion</span>
        <span className={styles.state}>{on ? "On" : "Off"}</span>
      </span>
      <span className={`${styles.knob} ${on ? styles.knobOn : ""}`} aria-hidden>
        <span className={styles.knobDot} />
      </span>
    </button>
  );
}
