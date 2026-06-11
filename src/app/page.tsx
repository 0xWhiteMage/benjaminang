import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { TimecodeHud } from "@/components/timecode-hud";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: site.url },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ============== HERO ============== */}
      <section className={styles.hero} aria-labelledby="hero-title">
        {/* Full-bleed background image */}
        <div className={styles.heroMedia}>
          <Image
            src="/about/hero.webp"
            alt="Cinematic abstract architectural form"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroMediaOverlay} aria-hidden />
        </div>

        <div className={`container ${styles.heroInner}`}>
          {/* Timecode HUD — top right, within grid */}
          <TimecodeHud />

          <div className={styles.heroCopy}>
            <div>
              <h1 id="hero-title" className={styles.heroTitle}>
                Benjamin Ang
              </h1>
              <span className={styles.heroAccent} aria-hidden />
            </div>
            <p className={styles.heroTagline}>
              Technology should adapt to people;
              <br />
              not the other way around.
            </p>
            <p className={styles.heroLede}>
              I make companies, films, products and ideas to understand complex
              systems — and bring out the best in them.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/work" className={styles.ctaLink}>
                VIEW SELECTED WORK
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </Link>
              <Link href="#manifesto" className={styles.ctaLink}>
                READ MANIFESTO
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom telemetry bar — inside container */}
          <div className={styles.heroTelemetry} aria-hidden>
          <div className={styles.telemetryLeft}>
            <span className={styles.telemetryLabel}>KEYFRAMES</span>
            <div className={styles.keyframeDots}>
              <span className={`${styles.kfDot} ${styles.kfDotActive}`} />
              <span className={styles.kfDot} />
              <span className={styles.kfDot} />
              <span className={styles.kfDot} />
              <span className={styles.kfDot} />
              <span className={styles.kfDot} />
            </div>
          </div>
          <div className={styles.telemetryCenter}>
            <span className={styles.telemetryLabel}>FRAME COUNTER</span>
            <span className={styles.telemetryValue}>110 / 240</span>
          </div>
          <div className={styles.telemetryCenter}>
            <span className={styles.telemetryLabel}>TIMECODE</span>
            <span className={styles.telemetryValue}>00:12:08</span>
          </div>
          <div className={styles.telemetryRight}>
            <span className={styles.telemetryLabel}>RENDER PROGRESS</span>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: "78%" }} />
            </div>
          </div>
          <div className={styles.telemetryScroll}>
            <span>SCROLL ↓</span>
          </div>
          </div>
        </div>
      </section>

      {/* ============== MANIFESTO ============== */}
      <section id="manifesto" className={`section ${styles.manifesto}`} aria-labelledby="manifesto-heading">
        <div className="container">
          <div className={styles.manifestoHeader}>
            <span className={styles.manifestoEyebrow}>01 · MANIFESTO</span>
            <h2 id="manifesto-heading" className={styles.manifestoTitle}>
              Technology should adapt to people;
              <br />
              not the other way around.
            </h2>
          </div>

          <div className={styles.manifestoColumns}>
            <p className={styles.manifestoCol}>
              I believe the best technology disappears into the background. It
              helps people think more clearly, collaborate more effectively, and
              focus on what matters.
            </p>
            <p className={styles.manifestoCol}>
              Making things has always been my way of understanding the world.
              Whether building films, products, businesses, or teams, the process
              is the same: observe carefully, understand the system, and improve
              what already exists.
            </p>
            <p className={styles.manifestoCol}>
              Creativity and technology are not the destination. They are tools
              for creating clarity, connection, and meaningful change.
            </p>
            <p className={styles.manifestoCol}>
              The throughline in everything I do is simple: understand complex
              systems — and bring out the best in them.
            </p>
          </div>

          {/* Bottom telemetry bar */}
          <div className={styles.manifestoTelemetry} aria-hidden>
            <div className={styles.telemetryLeft}>
              <span className={styles.telemetryLabel}>KEYFRAME 03</span>
              <div className={styles.keyframeDots}>
                <span className={styles.kfDot} />
                <span className={styles.kfDot} />
                <span className={`${styles.kfDot} ${styles.kfDotActive}`} />
                <span className={styles.kfDot} />
                <span className={styles.kfDot} />
                <span className={styles.kfDot} />
              </div>
            </div>
            <div className={styles.telemetryCenter}>
              <span className={styles.telemetryLabel}>FRAME</span>
              <span className={styles.telemetryValue}>110 / 240</span>
            </div>
            <div className={styles.telemetryRight}>
              <span className={styles.telemetryLabel}>RENDER STATUS</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "78%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
