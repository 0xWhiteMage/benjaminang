import Link from "next/link";
import { ButtonLink } from "@/components/button";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <span className="eyebrow">404 · Frame missing</span>
        <h1 className={styles.title}>
          The frame is
          <br /> out of range<span className={styles.dot}>.</span>
        </h1>
        <p className={styles.desc}>
          The page you were looking for has been moved or never existed.
          Return to the archive or start a new path.
        </p>
        <div className={styles.actions}>
          <ButtonLink href="/">Back to home</ButtonLink>
          <Link href="/work" className={styles.link}>
            View work archive
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
