import Link from "next/link";
import { site } from "@/lib/site";
import { ReducedMotionToggle } from "./reduced-motion-toggle";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.status}>
          <span className={styles.statusDot} aria-hidden />
          <span className="mono">STATUS: ONLINE</span>
        </div>

        <div className={styles.tagline}>
          <span className="mono">BA · PORTFOLIO VISUAL WORLD · v1.0</span>
        </div>

        <div className={styles.right}>
          <ReducedMotionToggle />
          <a href="#top" className={styles.scroll} aria-label="Back to top">
            <span className="mono">BACK TO TOP</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="6 11 12 5 18 11" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
