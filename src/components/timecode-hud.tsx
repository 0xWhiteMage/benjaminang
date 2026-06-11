"use client";

import { LiveTimecode } from "@/components/live-timecode";
import styles from "@/app/page.module.css";

export function TimecodeHud() {
  return (
    <div className={styles.timecodeHud} aria-hidden>
      <div className={styles.timecodeLine}>
        <LiveTimecode format="smpte" />
      </div>
      <div className={styles.timecodeMeta}>
        <span>1920 × 1080</span>
        <span>24FPS</span>
      </div>
      <div className={styles.timecodeStatus}>
        <span className={styles.statusDot} />
        <span>STATUS: ONLINE</span>
      </div>
    </div>
  );
}
